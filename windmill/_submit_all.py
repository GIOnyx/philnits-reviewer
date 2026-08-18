"""
Submit ALL FE-B and FE-A jobs for every year/session to Windmill at once.
Jobs are queued immediately — Windmill runs them sequentially.
"""
import base64, json, urllib.request, urllib.error, pathlib, sys

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"
ROOT      = pathlib.Path(__file__).parent.parent / "scratch"

JOBS = [
    # ── FE-B ──────────────────────────────────────────────────────────────────
    dict(pdf=ROOT/"2022A/2022A_FE/2022A_FE_PM_Question.pdf",
         filename="2022A_FE_PM_Question.pdf",    year=2022, session="Autumn", subject="FE-B", label="2022A FE-B"),
    dict(pdf=ROOT/"2022S/2022S_FE/2022S_FE_PM_Question.pdf",
         filename="2022S_FE_PM_Question.pdf",    year=2022, session="Spring", subject="FE-B", label="2022S FE-B"),
    dict(pdf=ROOT/"2023A/2023A_FE/2023A_FE_PM_Questions.pdf",
         filename="2023A_FE_PM_Questions.pdf",   year=2023, session="Autumn", subject="FE-B", label="2023A FE-B"),
    dict(pdf=ROOT/"2023S/2023S_FE/2023S_FE_PM_Questions.pdf",
         filename="2023S_FE_PM_Questions.pdf",   year=2023, session="Spring", subject="FE-B", label="2023S FE-B"),
    dict(pdf=ROOT/"2024A/2024A_FE/2024A_FE-B_Questions.pdf",
         filename="2024A_FE-B_Questions.pdf",    year=2024, session="Autumn", subject="FE-B", label="2024A FE-B"),
    dict(pdf=ROOT/"2024S/2024S_FE/2024S_FE-B_Questions.pdf",
         filename="2024S_FE-B_Questions.pdf",    year=2024, session="Spring", subject="FE-B", label="2024S FE-B"),
    dict(pdf=ROOT/"2025A/2025A_FE/2025A_FE-B_Questions.pdf",
         filename="2025A_FE-B_Questions.pdf",    year=2025, session="Autumn", subject="FE-B", label="2025A FE-B"),
    dict(pdf=ROOT/"2025S/2025S_FE/2025S_FE-B_Questions.pdf",
         filename="2025S_FE-B_Questions.pdf",    year=2025, session="Spring", subject="FE-B", label="2025S FE-B"),
    dict(pdf=ROOT/"2026S/2026S_FE/2026S_FE-B_Questions.pdf",
         filename="2026S_FE-B_Questions.pdf",    year=2026, session="Spring", subject="FE-B", label="2026S FE-B"),
    # ── FE-A ──────────────────────────────────────────────────────────────────
    dict(pdf=ROOT/"2022A/2022A_FE/2022A_FE_AM_Question.pdf",
         filename="2022A_FE_AM_Question.pdf",    year=2022, session="Autumn", subject="FE-A", label="2022A FE-A"),
    dict(pdf=ROOT/"2022S/2022S_FE/2022S_FE_AM_Questions.pdf",
         filename="2022S_FE_AM_Questions.pdf",   year=2022, session="Spring", subject="FE-A", label="2022S FE-A"),
    dict(pdf=ROOT/"2023A/2023A_FE/2023A_FE_AM_Questions.pdf",
         filename="2023A_FE_AM_Questions.pdf",   year=2023, session="Autumn", subject="FE-A", label="2023A FE-A"),
    dict(pdf=ROOT/"2023S/2023S_FE/2023S_FE_AM_Questions.pdf",
         filename="2023S_FE_AM_Questions.pdf",   year=2023, session="Spring", subject="FE-A", label="2023S FE-A"),
    dict(pdf=ROOT/"2024A/2024A_FE/2024A_FE-A_Questions.pdf",
         filename="2024A_FE-A_Questions.pdf",    year=2024, session="Autumn", subject="FE-A", label="2024A FE-A"),
    dict(pdf=ROOT/"2024S/2024S_FE/2024S_FE-A_Questions.pdf",
         filename="2024S_FE-A_Questions.pdf",    year=2024, session="Spring", subject="FE-A", label="2024S FE-A"),
    dict(pdf=ROOT/"2025A/2025A_FE/2025A_FE-A_Questions.pdf",
         filename="2025A_FE-A_Questions.pdf",    year=2025, session="Autumn", subject="FE-A", label="2025A FE-A"),
    dict(pdf=ROOT/"2025S/2025S_FE/2025S_FE-A_Questions.pdf",
         filename="2025S_FE-A_Questions.pdf",    year=2025, session="Spring", subject="FE-A", label="2025S FE-A"),
    dict(pdf=ROOT/"2026S/2026S_FE/2026S_FE-A_Questions.pdf",
         filename="2026S_FE-A_Questions.pdf",    year=2026, session="Spring", subject="FE-A", label="2026S FE-A"),
]

def submit(cfg: dict) -> str:
    pdf_bytes = cfg["pdf"].read_bytes()
    payload = json.dumps({
        "pdf_base64":   base64.b64encode(pdf_bytes).decode(),
        "pdf_filename": cfg["filename"],
        "exam_year":    cfg["year"],
        "session":      cfg["session"],
        "subject":      cfg["subject"],
        "dry_run":      False,
    }).encode()
    req = urllib.request.Request(
        f"{BASE}/api/w/{WORKSPACE}/jobs/run/p/f/exam/pdf_vision_extractor",
        data=payload, headers=HEADERS, method="POST"
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode().strip().strip('"')

# Verify all PDFs first
print("=== Verifying PDFs ===")
for cfg in JOBS:
    if not cfg["pdf"].exists():
        print(f"  ✗ MISSING: {cfg['pdf']}")
        sys.exit(1)
    print(f"  ✓ {cfg['label']}")

# Submit all at once
print(f"\n=== Submitting {len(JOBS)} jobs to Windmill queue ===")
submitted = []
for cfg in JOBS:
    try:
        jid = submit(cfg)
        print(f"  ✓ {cfg['label']:20s} → job_id: {jid}")
        submitted.append((cfg["label"], jid))
    except Exception as e:
        print(f"  ✗ {cfg['label']:20s} → FAILED: {e}")

print(f"\n=== {len(submitted)}/{len(JOBS)} jobs queued ===")
print("Windmill will run them sequentially. Check progress at:")
print(f"  {BASE}")
