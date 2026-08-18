"""Resubmit the two failed FE-A jobs."""
import base64, json, urllib.request, pathlib

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"
ROOT      = pathlib.Path(__file__).parent.parent / "scratch"

JOBS = [
    dict(pdf=ROOT/"2023A/2023A_FE/2023A_FE_AM_Questions.pdf",
         filename="2023A_FE_AM_Questions.pdf", year=2023, session="Autumn", subject="FE-A", label="2023A FE-A"),
    dict(pdf=ROOT/"2026S/2026S_FE/2026S_FE-A_Questions.pdf",
         filename="2026S_FE-A_Questions.pdf",  year=2026, session="Spring", subject="FE-A", label="2026S FE-A"),
]

for cfg in JOBS:
    pdf_b64 = base64.b64encode(cfg["pdf"].read_bytes()).decode()
    payload = json.dumps({
        "pdf_base64": pdf_b64, "pdf_filename": cfg["filename"],
        "exam_year": cfg["year"], "session": cfg["session"],
        "subject": cfg["subject"], "dry_run": False,
    }).encode()
    req = urllib.request.Request(
        f"{BASE}/api/w/{WORKSPACE}/jobs/run/p/f/exam/pdf_vision_extractor",
        data=payload, headers=HEADERS, method="POST"
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        jid = r.read().decode().strip().strip('"')
    print(f"✓ {cfg['label']} → {jid}")
