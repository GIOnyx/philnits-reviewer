"""
Query DB via Windmill to show extraction status per exam.
"""
import json, urllib.request, time

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"

SCRIPT = '''
import psycopg2, json, urllib.request, os

def _get_var(path):
    wm_token = os.environ.get("WM_TOKEN", "")
    wm_base  = os.environ.get("WM_BASE_URL", "http://localhost:8000").rstrip("/")
    wm_ws    = os.environ.get("WM_WORKSPACE", "main")
    url = f"{wm_base}/api/w/{wm_ws}/variables/get_value/{path.replace('/','%2F')}"
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + wm_token})
    with urllib.request.urlopen(req, timeout=10) as r:
        return r.read().decode().strip().strip('"')

def main():
    conn = psycopg2.connect(_get_var("u/system/postgres_url"))
    cur  = conn.cursor()
    cur.execute("""
        SELECT e.year, e.session, e.subject,
               COUNT(q.id)                          AS questions,
               COUNT(qc.id)                         AS choices,
               MAX(q.created_at)::text              AS last_updated
        FROM exams e
        LEFT JOIN questions q        ON q.exam_id     = e.id
        LEFT JOIN question_choices qc ON qc.question_id = q.id
        GROUP BY e.year, e.session, e.subject
        ORDER BY e.year, e.session, e.subject
    """)
    rows = cur.fetchall()
    conn.close()
    return [
        {"year": r[0], "session": r[1], "subject": r[2],
         "questions": r[3], "choices": r[4], "last_updated": r[5]}
        for r in rows
    ]
'''

payload = json.dumps({"content": SCRIPT, "language": "python3"}).encode()
req = urllib.request.Request(
    f"{BASE}/api/w/{WORKSPACE}/jobs/run/preview",
    data=payload, headers=HEADERS, method="POST"
)
with urllib.request.urlopen(req, timeout=30) as r:
    job_id = r.read().decode().strip().strip('"')

print(f"Query job: {job_id} — polling...")
for _ in range(30):
    time.sleep(4)
    req2 = urllib.request.Request(f"{BASE}/api/w/{WORKSPACE}/jobs_u/get/{job_id}", headers=HEADERS)
    with urllib.request.urlopen(req2, timeout=15) as r2:
        job = json.load(r2)
    if job.get("type") == "CompletedJob":
        rows = job.get("result", [])
        if not isinstance(rows, list):
            print("Error:", rows)
            break
        print(f"\n{'Year':<6} {'Session':<10} {'Subject':<8} {'Questions':>10} {'Choices':>8}  Last Updated")
        print("─" * 72)
        for row in rows:
            print(f"{row['year']:<6} {row['session']:<10} {row['subject']:<8} "
                  f"{row['questions']:>10} {row['choices']:>8}  {(row['last_updated'] or '')[:19]}")
        break
    print(f"  {job.get('type')}...")
