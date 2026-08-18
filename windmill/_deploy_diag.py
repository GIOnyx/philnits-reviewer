import json, urllib.request, urllib.error, time

TOKEN = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE  = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
H     = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}

DIAG_CODE = '''
import os, sys

def main() -> dict:
    try:
        import wmill
        wmill_ok = True
        try:
            val = wmill.get_variable("u/gregoryivanonyxbadinas/enchanted_variable")
            key_len    = len(val) if val else 0
            key_prefix = (val[:8] + "...") if val else ""
        except Exception as e:
            key_len    = -1
            key_prefix = str(e)[:80]
        try:
            pg_url = wmill.get_variable("u/system/postgres_url")
            pg_len = len(pg_url) if pg_url else 0
        except Exception as e2:
            pg_len = -1
    except ImportError:
        wmill_ok   = False
        key_len    = -1
        key_prefix = "wmill not importable"
        pg_len     = -1

    wm_env = {k: v[:60] for k, v in os.environ.items()
              if any(x in k.upper() for x in ["WM_", "GEMINI", "POSTGRES", "SUPABASE"])}

    return {
        "python": sys.version[:30],
        "wmill_available": wmill_ok,
        "enchanted_variable_len": key_len,
        "enchanted_variable_prefix": key_prefix,
        "postgres_url_len": pg_len,
        "wm_env_vars": wm_env,
    }
'''

# Deploy script
payload = json.dumps({
    "path":     "u/admin/diag_wmill",
    "summary":  "Diagnostic: wmill variable access",
    "language": "python3",
    "content":  DIAG_CODE,
}).encode("utf-8")

req = urllib.request.Request(BASE + "/api/w/main/scripts/create",
                             data=payload, headers=H, method="POST")
try:
    with urllib.request.urlopen(req) as r:
        print("Created:", r.read().decode().strip().strip('"'))
except urllib.error.HTTPError as e:
    body = e.read().decode()
    if "already exists" not in body:
        print("Create error:", e.code, body[:200])
        raise SystemExit(1)
    print("Script already exists, running it...")

# Run using hash endpoint
run_body = json.dumps({}).encode("utf-8")
req2 = urllib.request.Request(
    BASE + "/api/w/main/jobs/run/h/5d2acbbada66ea0d",
    data=run_body, headers=H, method="POST"
)
try:
    with urllib.request.urlopen(req2) as r2:
        job_id = r2.read().decode().strip().strip('"')
        print("Job:", job_id)
except urllib.error.HTTPError as e:
    print("Run error:", e.code, e.read().decode()[:300])
    raise SystemExit(1)

for i in range(20):
    time.sleep(4)
    req3 = urllib.request.Request(
        BASE + "/api/w/main/jobs_u/get/" + job_id,
        headers={"Authorization": "Bearer " + TOKEN}
    )
    with urllib.request.urlopen(req3) as r3:
        d = json.load(r3)
    if d.get("type") == "CompletedJob":
        print("success:", d.get("success"))
        print(json.dumps(d.get("result"), indent=2))
        print("LOGS:", (d.get("logs") or "")[-600:])
        break
    print(f"  [{i+1}]", d.get("type"), (d.get("logs") or "").strip().split("\n")[-1][:80])
