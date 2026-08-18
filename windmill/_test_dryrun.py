"""
Submit a dry-run job to f/exam/pdf_vision_extractor using 1 real page
extracted from 2024A_FE-A_Questions.pdf.
Polls for completion and prints the full result + logs.
"""
import base64, json, time, urllib.request, urllib.error
import os, sys, io, pathlib

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"

# ── Build a 1-page test PDF from the real exam ────────────────────────────────
REAL_PDF = pathlib.Path(__file__).parent.parent / "scratch" / "2024A" / "2024A_FE" / "2024A_FE-A_Questions.pdf"

try:
    import fitz  # PyMuPDF – already available in this venv
    src = fitz.open(str(REAL_PDF))
    out = fitz.open()
    out.insert_pdf(src, from_page=1, to_page=1)   # page index 1 = Q1 (0=cover)
    buf = io.BytesIO()
    out.save(buf)
    out.close(); src.close()
    PDF_B64 = base64.b64encode(buf.getvalue()).decode()
    print(f"[Local] Sliced page 2 from real exam PDF ({len(buf.getvalue()):,} bytes)")
except ImportError:
    # fitz not available locally — fall back: encode the full PDF, limit to first ~1MB
    raw = REAL_PDF.read_bytes()
    PDF_B64 = base64.b64encode(raw).decode()
    print(f"[Local] Using full PDF ({len(raw):,} bytes) – fitz not installed locally")
except Exception as exc:
    print(f"[Local] Could not open real PDF ({exc}). Aborting.")
    sys.exit(1)

# ── Submit job ─────────────────────────────────────────────────────────────────
payload = json.dumps({
    "pdf_base64":   PDF_B64,
    "pdf_filename": "2024A_FE-A_Q1_test.pdf",
    "exam_year":    2024,
    "session":      "Autumn",
    "subject":      "FE-A",
    "page_groups":  [[2]],   # Only process page 2 (Q1, 0-indexed cover skipped)
    "dry_run":      True,
}).encode("utf-8")

req = urllib.request.Request(
    f"{BASE}/api/w/{WORKSPACE}/jobs/run/p/f/exam/pdf_vision_extractor",
    data=payload, headers=HEADERS, method="POST"
)
try:
    with urllib.request.urlopen(req) as r:
        job_id = r.read().decode().strip().strip('"')
        print(f"Job submitted: {job_id}")
except urllib.error.HTTPError as e:
    print("Submit failed:", e.code, e.read().decode()[:300])
    raise SystemExit(1)

# ── Poll ───────────────────────────────────────────────────────────────────────
print("Polling every 5s (max 5 min)...")
for attempt in range(60):
    time.sleep(5)
    req2 = urllib.request.Request(
        f"{BASE}/api/w/{WORKSPACE}/jobs_u/get/{job_id}",
        headers=HEADERS
    )
    with urllib.request.urlopen(req2) as r2:
        job = json.load(r2)

    jtype = job.get("type", "")
    if jtype == "CompletedJob":
        print(f"\n=== JOB COMPLETE (success={job.get('success')}) ===")
        print(json.dumps(job.get("result"), indent=2))
        print("\n--- LOGS ---")
        logs_str = str(job.get("logs", "(no logs)"))
        print(logs_str.encode("ascii", errors="replace").decode())
        break
    elif jtype == "RunningJob":
        last = (job.get("logs") or "").strip().split("\n")[-1]
        print(f"  [{attempt+1}] running: {last[:100]}")
    elif jtype == "QueuedJob":
        print(f"  [{attempt+1}] queued…")
    else:
        print(f"  [{attempt+1}] status={jtype}")
else:
    print("Timed out after 180s")
