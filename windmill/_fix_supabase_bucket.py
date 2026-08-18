"""
Check if exam_assets bucket exists in Supabase Storage.
If not, create it as a public bucket.
Uses the service key from Windmill variable.
"""
import urllib.request, urllib.error, json, sys

SUPA_URL = "https://yeyahuuzyjzslasrjtqv.supabase.co"

# Fetch service key from Windmill
TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
WM_HEADS  = {"Authorization": "Bearer " + TOKEN}

req = urllib.request.Request(
    f"{BASE}/api/w/main/variables/get_value/u/system/supabase_service_key",
    headers=WM_HEADS
)
with urllib.request.urlopen(req, timeout=10) as r:
    SERVICE_KEY = r.read().decode().strip().strip('"')

print(f"Service key length: {len(SERVICE_KEY)}, starts with: {SERVICE_KEY[:20]}...")

SUPA_HEADS = {
    "Authorization": f"Bearer {SERVICE_KEY}",
    "apikey": SERVICE_KEY,
    "Content-Type": "application/json",
}

# ── List existing buckets ─────────────────────────────────────────────────────
req2 = urllib.request.Request(
    f"{SUPA_URL}/storage/v1/bucket",
    headers=SUPA_HEADS
)
try:
    with urllib.request.urlopen(req2, timeout=10) as r2:
        buckets = json.load(r2)
    print(f"\nExisting buckets: {[b.get('name') for b in buckets]}")
    exists = any(b.get("name") == "exam_assets" for b in buckets)
except urllib.error.HTTPError as e:
    print(f"Failed to list buckets: {e.code} {e.read().decode()[:200]}")
    sys.exit(1)

# ── Create bucket if missing ──────────────────────────────────────────────────
if exists:
    print("✓ exam_assets bucket already exists.")
else:
    print("exam_assets bucket NOT found — creating it...")
    payload = json.dumps({
        "id": "exam_assets",
        "name": "exam_assets",
        "public": True,
        "file_size_limit": 52428800,  # 50MB
        "allowed_mime_types": ["image/png", "image/jpeg", "image/webp"]
    }).encode()
    req3 = urllib.request.Request(
        f"{SUPA_URL}/storage/v1/bucket",
        data=payload, headers=SUPA_HEADS, method="POST"
    )
    try:
        with urllib.request.urlopen(req3, timeout=10) as r3:
            result = json.load(r3)
            print(f"✓ Bucket created: {result}")
    except urllib.error.HTTPError as e:
        print(f"✗ Failed to create bucket: {e.code} {e.read().decode()[:300]}")
        sys.exit(1)

# ── Test upload ───────────────────────────────────────────────────────────────
print("\nTesting upload with a tiny PNG...")
# 1x1 red pixel PNG
test_png = bytes([
    0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00,0x00,0x00,0x0d,0x49,0x48,0x44,0x52,
    0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x01,0x08,0x02,0x00,0x00,0x00,0x90,0x77,0x53,
    0xde,0x00,0x00,0x00,0x0c,0x49,0x44,0x41,0x54,0x08,0xd7,0x63,0xf8,0xcf,0xc0,0x00,
    0x00,0x00,0x02,0x00,0x01,0xe2,0x21,0xbc,0x33,0x00,0x00,0x00,0x00,0x49,0x45,0x4e,
    0x44,0xae,0x42,0x60,0x82
])
up_heads = {**SUPA_HEADS, "Content-Type": "image/png", "x-upsert": "true"}
req4 = urllib.request.Request(
    f"{SUPA_URL}/storage/v1/object/exam_assets/test/test_pixel.png",
    data=test_png, headers=up_heads, method="POST"
)
try:
    with urllib.request.urlopen(req4, timeout=10) as r4:
        print(f"✓ Test upload succeeded (HTTP {r4.status})")
except urllib.error.HTTPError as e:
    print(f"✗ Test upload failed: {e.code} {e.read().decode()[:300]}")
