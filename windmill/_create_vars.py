import json
import urllib.request
import urllib.error

TOKEN = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE  = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}

SUPA_URL  = "https://yeyahuuzyjzslasrjtqv.supabase.co"
ANON_KEY  = (
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    ".eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlleWFodXV6eWp6c2xhc3JqdHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3NzQ3NzksImV4cCI6MjEwMjM1MDc3OX0"
    ".9Gf3pO0vP8H2AwyLgi-fonYPoMlGd3KBjKSVQ0YeqNQ"
)

VARIABLES = [
    {
        "path": "u/system/supabase_url",
        "value": SUPA_URL,
        "is_secret": False,
        "description": "Supabase project URL for figure uploads",
    },
    {
        "path": "u/system/supabase_service_key",
        "value": ANON_KEY,
        "is_secret": True,
        "description": "Supabase anon/service key (replace with service_role key for storage writes)",
    },
    {
        "path": "u/system/postgres_url",
        "value": "PASTE_YOUR_POSTGRES_URL_NON_POOLING_HERE",
        "is_secret": True,
        "description": "Vercel Postgres non-pooling connection string (postgres://user:pass@host/db?sslmode=require)",
    },
]

for v in VARIABLES:
    body = json.dumps(v).encode("utf-8")
    req = urllib.request.Request(
        BASE + "/api/w/main/variables/create",
        data=body,
        headers=HEADERS,
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as r:
            print("  CREATED  " + v["path"] + "  HTTP " + str(r.status))
    except urllib.error.HTTPError as e:
        msg = e.read().decode("utf-8", errors="replace")
        if "already exists" in msg or "conflict" in msg.lower():
            # Already exists — update it instead
            req2 = urllib.request.Request(
                BASE + "/api/w/main/variables/update/" + v["path"],
                data=body,
                headers=HEADERS,
                method="POST",
            )
            try:
                with urllib.request.urlopen(req2) as r2:
                    print("  UPDATED  " + v["path"] + "  HTTP " + str(r2.status))
            except urllib.error.HTTPError as e2:
                print("  FAILED   " + v["path"] + "  HTTP " + str(e2.code) + " " + e2.read().decode()[:120])
        else:
            print("  FAILED   " + v["path"] + "  HTTP " + str(e.code) + " " + msg[:120])
