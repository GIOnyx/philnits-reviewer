"""
Windmill Scheduled Flow Script: Fixed-Date Time-Compressed Leitner Batch Updater
Targeting the ITPEC FE Exam Window (October 25, 2026).

This script processes raw user telemetry logs, applies the time-compression algorithm
relative to the fixed exam date, and commits batch updates to user_spaced_repetition.
"""

import math
import psycopg2
from datetime import datetime, timedelta

# Import wmill SDK when running inside Windmill runtime environment
try:
    import wmill
except ImportError:
    wmill = None


def calculate_compressed_interval(current_box: int, is_correct: bool, days_to_exam: int) -> int:
    """
    Computes the next review interval incorporating standard Leitner promotion
    and dynamic time-compression relative to the fixed ITPEC FE exam date.
    """
    intervals = {1: 1, 2: 3, 3: 7, 4: 14, 5: 30}
    
    if is_correct:
        next_box = min(5, current_box + 1)
    else:
        next_box = 1  # Demotion to Box 1 for reinforcement
        
    standard_interval = intervals.get(next_box, 1)
    
    # Apply Time-Compression if calculated interval exceeds remaining time window
    # or if user is in final cramming period
    if days_to_exam <= 14:
        return max(1, math.floor(0.3 * days_to_exam))
    elif standard_interval >= (days_to_exam * 0.8):
        return max(1, math.floor(0.5 * days_to_exam))
        
    return standard_interval


def main(exam_date_str: str = "2026-10-25"):
    """
    Windmill Entrypoint.
    Runs daily on worker group 'highmem'.
    """
    if wmill:
        db_config = wmill.get_resource('u/system/prod_postgres_db')
    else:
        db_config = {}

    exam_date = datetime.strptime(exam_date_str, "%Y-%m-%d").date()
    current_date = datetime.utcnow().date()
    days_to_exam = (exam_date - current_date).days

    if days_to_exam < 0:
        return {"status": "halted", "reason": "post_exam_period"}

    conn = None
    try:
        conn = psycopg2.connect(**db_config)
        cursor = conn.cursor()

        # 1. Fetch unprocessed telemetry logs
        cursor.execute("""
            SELECT user_id, question_id, is_correct, current_box
            FROM user_telemetry_logs
            WHERE processed = FALSE
        """)
        raw_logs = cursor.fetchall()

        updates = []
        for user_id, question_id, is_correct, current_box in raw_logs:
            next_interval = calculate_compressed_interval(
                current_box=current_box,
                is_correct=is_correct,
                days_to_exam=days_to_exam
            )
            next_review_date = current_date + timedelta(days=next_interval)
            new_box = min(5, current_box + 1) if is_correct else 1
            updates.append((user_id, question_id, new_box, next_review_date))

        # 2. Upsert into user_spaced_repetition table
        update_query = """
            INSERT INTO user_spaced_repetition (user_id, question_id, current_box, next_review_date)
            VALUES (%s, %s, %s, %s)
            ON CONFLICT (user_id, question_id)
            DO UPDATE SET
                current_box = EXCLUDED.current_box,
                next_review_date = EXCLUDED.next_review_date,
                last_reviewed_at = CURRENT_TIMESTAMP;
        """
        cursor.executemany(update_query, updates)

        # 3. Mark telemetry logs as processed
        cursor.execute("UPDATE user_telemetry_logs SET processed = TRUE WHERE processed = FALSE")
        conn.commit()

        if wmill:
            wmill.set_state({
                "last_run": current_date.isoformat(),
                "records_processed": len(updates),
                "days_to_exam": days_to_exam
            })

        return {
            "status": "success",
            "records_processed": len(updates),
            "days_to_exam": days_to_exam
        }

    except Exception as e:
        if conn:
            conn.rollback()
        raise e
    finally:
        if conn:
            cursor.close()
            conn.close()


if __name__ == "__main__":
    print(main())
