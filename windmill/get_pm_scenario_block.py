"""
Windmill Webhook Script: Subject B Afternoon Session Split-Payload Fetcher
Path: f/exam/get_pm_scenario_block

Retrieves the scenario context text, resolves embedded s3:/// pointers to presigned URLs,
and lazily returns the list of sub-question IDs to optimize payload sizes.
"""

import re
import psycopg2

try:
    import wmill
    from wmill import S3Object
except ImportError:
    wmill = None
    S3Object = None


def resolve_secure_assets(context_text: str) -> str:
    """
    Scans context text for s3:/// URIs and converts them into presigned public HTTPS URLs.
    """
    if not wmill or not S3Object:
        return context_text

    s3_uri_pattern = re.compile(r's3:///[^\s)]+')
    matches = s3_uri_pattern.findall(context_text)

    resolved_text = context_text
    for uri in matches:
        try:
            s3_obj = S3Object(s3=uri)
            presigned_url = wmill.get_presigned_s3_public_url(s3_obj)
            resolved_text = resolved_text.replace(uri, presigned_url)
        except Exception:
            continue

    return resolved_text


def main(scenario_id: str) -> dict:
    """
    Windmill Webhook Entrypoint.
    """
    if wmill:
        db_config = wmill.get_resource('u/system/prod_postgres_db')
    else:
        db_config = {}

    conn = psycopg2.connect(**db_config)
    cursor = conn.cursor()

    try:
        # 1. Fetch long-form scenario context
        cursor.execute("""
            SELECT scenario_id, exam_year, title, context_text
            FROM pm_scenarios
            WHERE scenario_id = %s
        """, (scenario_id,))
        scenario_row = cursor.fetchone()

        if not scenario_row:
            return {"error": "Scenario not found"}, 404

        scen_id, exam_year, title, raw_context_text = scenario_row

        # 2. Resolve S3 image assets
        resolved_context = resolve_secure_assets(raw_context_text)

        # 3. Retrieve lightweight array of dependent sub-question UUIDs
        cursor.execute("""
            SELECT question_id, question_number, requires_pseudocode, pseudocode_block, trace_table_spec, question_body
            FROM pm_questions
            WHERE scenario_id = %s
            ORDER BY question_number ASC
        """, (scenario_id,))
        
        sub_questions = []
        for row in cursor.fetchall():
            sub_questions.append({
                "question_id": row[0],
                "question_number": row[1],
                "requires_pseudocode": row[2],
                "pseudocode_block": row[3],
                "trace_table_spec": row[4],
                "question_body": row[5]
            })

        return {
            "scenario_id": scen_id,
            "exam_year": exam_year,
            "title": title,
            "context_text": resolved_context,
            "sub_questions": sub_questions
        }

    finally:
        cursor.close()
        conn.close()
