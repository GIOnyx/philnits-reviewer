"""
Direct DB check using explicit connection params to avoid URL encoding issues.
"""
import psycopg2

conn = psycopg2.connect(
    host="aws-0-us-east-1.pooler.supabase.com",
    port=5432,
    dbname="postgres",
    user="postgres.yeyahuuzyjzslasrjtqv",
    password="122633090003@Nyxo",
    sslmode="require",
    connect_timeout=15,
)
cur = conn.cursor()

cur.execute("""
    SELECT e.year, e.session, e.subject,
           COUNT(DISTINCT q.id) AS questions,
           COUNT(qc.id)         AS choices
    FROM exams e
    LEFT JOIN questions q         ON q.exam_id      = e.id
    LEFT JOIN question_choices qc ON qc.question_id = q.id
    GROUP BY e.year, e.session, e.subject
    ORDER BY e.year, e.session, e.subject
""")

rows = cur.fetchall()
conn.close()

if not rows:
    print("No exams found in DB yet.")
else:
    print(f"{'Year':<6} {'Session':<10} {'Subject':<8} {'Questions':>10} {'Choices':>8}  Status")
    print("─" * 62)
    for year, session, subject, questions, choices in rows:
        status = "✓ done" if questions >= 10 else f"⚠ partial ({questions}q)"
        print(f"{year:<6} {session:<10} {subject:<8} {questions:>10} {choices:>8}  {status}")
