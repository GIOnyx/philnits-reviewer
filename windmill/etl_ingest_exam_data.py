"""
Windmill ETL Pipeline Script: PhilNITS Exam Data Mining & Ingestion
Parses raw JSON exam dumps, sanitizes text, strips unwanted HTML while preserving ITPEC pseudocode operators,
and loads records into PostgreSQL tables.
"""

import re
import json
import psycopg2
from psycopg2.extras import execute_values

try:
    import wmill
except ImportError:
    wmill = None


def clean_html_tags(raw_html: str) -> str:
    """Removes standard HTML formatting tags while preserving ITPEC syntax arrows (←)."""
    if not raw_html:
        return ""
    cleanr = re.compile(r'<(?!\/?(?:code|pre|b|i|strong|em)\b)[^>]+>')
    cleantext = re.sub(cleanr, '', raw_html)
    return cleantext.strip()


def main(api_endpoint: str = None, payload_json_str: str = None):
    """
    Windmill Entrypoint for Exam Material ETL.
    """
    if wmill:
        db_config = wmill.get_resource('u/system/prod_postgres_db')
    else:
        db_config = {}

    if payload_json_str:
        data = json.loads(payload_json_str)
    else:
        return {"error": "No payload supplied to ETL process"}

    conn = psycopg2.connect(**db_config)
    cursor = conn.cursor()

    inserted_morning = 0
    inserted_afternoon = 0

    try:
        # Ingest Morning Questions
        morning_items = data.get("morning_questions", [])
        if morning_items:
            m_records = []
            for q in morning_items:
                m_records.append((
                    q.get("category", "Technology"),
                    q.get("subdomain", "Basic Theory of Information"),
                    int(q.get("exam_year", 2024)),
                    clean_html_tags(q.get("question_text", "")),
                    json.dumps(q.get("options", [])),
                    int(q.get("correct_index", 0)),
                    q.get("explanation", ""),
                    float(q.get("difficulty_weight", 1.0))
                ))

            insert_m_query = """
                INSERT INTO morning_questions (
                    category, subdomain, exam_year, question_text, options, correct_index, explanation, difficulty_weight
                ) VALUES %s
            """
            execute_values(cursor, insert_m_query, m_records)
            inserted_morning = len(m_records)

        conn.commit()
        return {
            "status": "success",
            "inserted_morning": inserted_morning,
            "inserted_afternoon": inserted_afternoon
        }

    except Exception as e:
        conn.rollback()
        return {"status": "error", "message": str(e)}
    finally:
        cursor.close()
        conn.close()
