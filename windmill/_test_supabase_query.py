"""
Test the exact same query the frontend uses to fetch FE-B questions.
"""
import urllib.request, json, sys

SUPA_URL     = "https://yeyahuuzyjzslasrjtqv.supabase.co"
ANON_KEY     = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlleWFodXV6eWp6c2xhc3JqdHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3NzQ3NzksImV4cCI6MjEwMjM1MDc3OX0.9Gf3pO0vP8H2AwyLgi-fonYPoMlGd3KBjKSVQ0YeqNQ"

HEADS = {
    "apikey": ANON_KEY,
    "Authorization": f"Bearer {ANON_KEY}",
    "Content-Type": "application/json",
}

def get(path):
    req = urllib.request.Request(f"{SUPA_URL}/rest/v1/{path}", headers=HEADS)
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.load(r), r.status, None
    except urllib.error.HTTPError as e:
        return None, e.code, e.read().decode()[:300]

# 1. Check exams table
print("=== exams (FE-B) ===")
data, status, err = get("exams?subject=eq.FE-B&select=id,year,session,subject&order=year.asc")
print(f"  HTTP {status}")
if err: print(f"  ERROR: {err}")
elif data:
    for row in data: print(f"  {row}")
    exam_ids = [r['id'] for r in data]
else:
    print("  No data")
    sys.exit(0)

# 2. Check questions for those exams
print(f"\n=== questions (exam_ids count={len(exam_ids)}) ===")
ids_param = "(" + ",".join(exam_ids) + ")"
data2, status2, err2 = get(f"questions?exam_id=in.{ids_param}&select=id,exam_id,question_number,correct_answer&limit=5")
print(f"  HTTP {status2}")
if err2: print(f"  ERROR: {err2}")
elif data2:
    print(f"  Got {len(data2)} rows (showing first 5)")
    for row in data2: print(f"  {row}")
else:
    print("  No data — RLS may be blocking or tables empty")

# 3. Check question_choices
print(f"\n=== question_choices (first 3) ===")
data3, status3, err3 = get("question_choices?select=id,question_id,letter,text&limit=3")
print(f"  HTTP {status3}")
if err3: print(f"  ERROR: {err3}")
elif data3:
    for row in data3: print(f"  {row}")
else:
    print("  No data")
