"""
Reads POSTGRES_URL_NON_POOLING from .env.local and updates
the Windmill variable u/system/postgres_url with its real value.
Never prints the secret — only confirms success/failure.
"""
import urllib.request, urllib.error, json, re, pathlib, sys

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"

# ── Read the value from .env.local ────────────────────────────────────────────
env_path = pathlib.Path(__file__).parent.parent / ".env.local"
content  = env_path.read_text(encoding="utf-8")
match    = re.search(r'^POSTGRES_URL_NON_POOLING="?([^"\n]+)"?', content, re.MULTILINE)
if not match:
    print("ERROR: POSTGRES_URL_NON_POOLING not found in .env.local")
    sys.exit(1)

pg_url = match.group(1).strip()

if "PASTE_YOUR" in pg_url or not pg_url.startswith("postgres"):
    print(f"ERROR: Value looks like a placeholder: {pg_url[:30]}...")
    sys.exit(1)

print(f"Found POSTGRES_URL_NON_POOLING (length={len(pg_url)}, starts with: {pg_url[:20]}...)")

# ── Update the Windmill variable ──────────────────────────────────────────────
payload = json.dumps({
    "value": pg_url,
    "is_secret": True,
    "description": "Vercel Postgres non-pooling connection string",
    "path": "u/system/postgres_url",
}).encode("utf-8")

req = urllib.request.Request(
    f"{BASE}/api/w/{WORKSPACE}/variables/update/u/system/postgres_url",
    data=payload, headers=HEADERS, method="POST"
)
try:
    with urllib.request.urlopen(req, timeout=15) as r:
        print(f"✓ Windmill variable updated (HTTP {r.status})")
except urllib.error.HTTPError as e:
    body = e.read().decode()[:300]
    # 404 means variable doesn't exist yet — create it instead
    if e.code == 404:
        print("Variable not found, creating it...")
        req2 = urllib.request.Request(
            f"{BASE}/api/w/{WORKSPACE}/variables/create",
            data=payload, headers=HEADERS, method="POST"
        )
        try:
            with urllib.request.urlopen(req2, timeout=15) as r2:
                print(f"✓ Windmill variable created (HTTP {r2.status})")
        except urllib.error.HTTPError as e2:
            print(f"ERROR creating variable: {e2.code} {e2.read().decode()[:300]}")
            sys.exit(1)
    else:
        print(f"ERROR: {e.code} {body}")
        sys.exit(1)

print("Done. Re-run the extraction script now.")
