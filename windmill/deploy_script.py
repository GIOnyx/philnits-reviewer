import json
import os
import urllib.request
import urllib.error

TOKEN = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}

script_path = os.path.join(os.path.dirname(__file__), "pdf_vision_extractor.py")
payload_path = os.path.join(os.path.dirname(__file__), "_deploy_payload.json")

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

path = "f/exam/pdf_vision_extractor"
payload_data = {
    "path": path,
    "summary": "PhilNITS PDF Vision Extractor (Gemini 3.6 Flash)",
    "language": "python3",
    "content": content
}

with open(payload_path, "w", encoding="utf-8") as f:
    json.dump(payload_data, f, indent=2)

print("[OK] Updated _deploy_payload.json")

# 1. Archive old version of script at path if it exists
encoded = path.replace("/", "%2F")
archive_url = f"{BASE}/api/w/main/scripts/archive/p/{encoded}"
req_arch = urllib.request.Request(archive_url, data=b"{}", headers=HEADERS, method="POST")
try:
    with urllib.request.urlopen(req_arch) as resp:
        print(f"[OK] Archived previous version at {path} (HTTP {resp.status})")
except urllib.error.HTTPError as e:
    print(f"[INFO] Archive note (HTTP {e.code}): {e.read().decode('utf-8')[:150]}")

# 2. Create new version
body = json.dumps(payload_data).encode("utf-8")
create_url = f"{BASE}/api/w/main/scripts/create"
req_create = urllib.request.Request(create_url, data=body, headers=HEADERS, method="POST")
try:
    with urllib.request.urlopen(req_create) as resp:
        res = resp.read().decode("utf-8")
        print(f"[OK] Deployed new version to Windmill successfully (HTTP {resp.status}): {res[:100]}")
except urllib.error.HTTPError as e:
    print(f"[ERROR] Deploy HTTP Error {e.code}: {e.read().decode('utf-8')[:300]}")
