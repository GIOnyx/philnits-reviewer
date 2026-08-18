"""
Submit f/exam/pdf_vision_extractor jobs for all FE-B exams from 2022 to 2026:
  - 2022A (Autumn), 2022S (Spring)
  - 2023A (Autumn), 2023S (Spring)
  - 2024A (Autumn)
  - 2025A (Autumn)
  - 2026S (Spring)

Jobs are submitted sequentially (one at a time) to avoid rate limits.
Each job is polled to completion before the next is submitted.
"""
import base64, json, time, urllib.request, urllib.error
import pathlib, sys

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADERS   = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"

ROOT = pathlib.Path(__file__).parent.parent / "scratch"

JOBS = [
    {
        "pdf_path":    ROOT / "2022A" / "2022A_FE" / "2022A_FE_PM_Question.pdf",
        "pdf_filename": "2022A_FE_PM_Question.pdf",
        "exam_year":   2022,
        "session":     "Autumn",
        "subject":     "FE-B",
        "label":       "2022A FE-B",
    },
    {
        "pdf_path":    ROOT / "2022S" / "2022S_FE" / "2022S_FE_PM_Question.pdf",
        "pdf_filename": "2022S_FE_PM_Question.pdf",
        "exam_year":   2022,
        "session":     "Spring",
        "subject":     "FE-B",
        "label":       "2022S FE-B",
    },
    {
        "pdf_path":    ROOT / "2023A" / "2023A_FE" / "2023A_FE_PM_Questions.pdf",
        "pdf_filename": "2023A_FE_PM_Questions.pdf",
        "exam_year":   2023,
        "session":     "Autumn",
        "subject":     "FE-B",
        "label":       "2023A FE-B",
    },
    {
        "pdf_path":    ROOT / "2023S" / "2023S_FE" / "2023S_FE_PM_Questions.pdf",
        "pdf_filename": "2023S_FE_PM_Questions.pdf",
        "exam_year":   2023,
        "session":     "Spring",
        "subject":     "FE-B",
        "label":       "2023S FE-B",
    },
    {
        "pdf_path":    ROOT / "2024A" / "2024A_FE" / "2024A_FE-B_Questions.pdf",
        "pdf_filename": "2024A_FE-B_Questions.pdf",
        "exam_year":   2024,
        "session":     "Autumn",
        "subject":     "FE-B",
        "label":       "2024A FE-B",
    },
    {
        "pdf_path":    ROOT / "2025A" / "2025A_FE" / "2025A_FE-B_Questions.pdf",
        "pdf_filename": "2025A_FE-B_Questions.pdf",
        "exam_year":   2025,
        "session":     "Autumn",
        "subject":     "FE-B",
        "label":       "2025A FE-B",
    },
    {
        "pdf_path":    ROOT / "2026S" / "2026S_FE" / "2026S_FE-B_Questions.pdf",
        "pdf_filename": "2026S_FE-B_Questions.pdf",
        "exam_year":   2026,
        "session":     "Spring",
        "subject":     "FE-B",
        "label":       "2026S FE-B",
    },
]


def submit_job(cfg: dict) -> str:
    pdf_bytes = cfg["pdf_path"].read_bytes()
    pdf_b64   = base64.b64encode(pdf_bytes).decode()
    print(f"\n[{cfg['label']}] PDF: {len(pdf_bytes):,} bytes — submitting...")

    payload = json.dumps({
        "pdf_base64":   pdf_b64,
        "pdf_filename": cfg["pdf_filename"],
        "exam_year":    cfg["exam_year"],
        "session":      cfg["session"],
        "subject":      cfg["subject"],
        "dry_run":      False,
    }).encode("utf-8")

    req = urllib.request.Request(
        f"{BASE}/api/w/{WORKSPACE}/jobs/run/p/f/exam/pdf_vision_extractor",
        data=payload, headers=HEADERS, method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            job_id = r.read().decode().strip().strip('"')
            print(f"[{cfg['label']}] ✓ Submitted → job_id: {job_id}")
            return job_id
    except urllib.error.HTTPError as e:
        body = e.read().decode()[:500]
        print(f"[{cfg['label']}] ✗ Submit FAILED {e.code}: {body}")
        raise SystemExit(1)


def poll_job(job_id: str, label: str, max_wait_s: int = 900) -> bool:
    """Poll until CompletedJob or timeout (default 15 min per job)."""
    print(f"[{label}] Polling every 10s (max {max_wait_s // 60} min)...")
    for attempt in range(max_wait_s // 10):
        time.sleep(10)
        req = urllib.request.Request(
            f"{BASE}/api/w/{WORKSPACE}/jobs_u/get/{job_id}",
            headers=HEADERS
        )
        try:
            with urllib.request.urlopen(req, timeout=15) as r:
                job = json.load(r)
        except Exception as exc:
            print(f"[{label}]   Poll error (will retry): {exc}")
            continue

        jtype = job.get("type", "")
        if jtype == "CompletedJob":
            success = job.get("success", False)
            result  = job.get("result", {})
            logs    = str(job.get("logs", ""))
            last_log = logs.strip().split("\n")[-1] if logs.strip() else "(no logs)"
            status_icon = "✓" if success else "✗"
            print(f"\n[{label}] {status_icon} COMPLETE (success={success})")
            print(f"[{label}]   Result  : {json.dumps(result, indent=2)}")
            print(f"[{label}]   Last log: {last_log}")
            return success
        elif jtype == "RunningJob":
            logs = str(job.get("logs", ""))
            last = logs.strip().split("\n")[-1] if logs.strip() else "..."
            print(f"[{label}]   [{attempt+1}] running → {last[:120]}")
        elif jtype == "QueuedJob":
            print(f"[{label}]   [{attempt+1}] queued...")
        else:
            print(f"[{label}]   [{attempt+1}] type={jtype}")

    print(f"[{label}] ✗ Timed out after {max_wait_s}s")
    return False


if __name__ == "__main__":
    # 1. Verify all PDFs exist before submitting anything
    print("=== Verifying PDFs ===")
    missing = []
    for cfg in JOBS:
        if cfg["pdf_path"].exists():
            print(f"  ✓ {cfg['label']}: {cfg['pdf_path'].name}")
        else:
            print(f"  ✗ MISSING: {cfg['pdf_path']}")
            missing.append(cfg["label"])
    if missing:
        print(f"\nAbort: missing PDFs for {missing}")
        sys.exit(1)

    print(f"\n=== Submitting {len(JOBS)} jobs sequentially ===")
    summary = {}

    for cfg in JOBS:
        job_id = submit_job(cfg)
        ok = poll_job(job_id, cfg["label"])
        summary[cfg["label"]] = "✓ success" if ok else "✗ failed"
        if not ok:
            print(f"\n[WARNING] {cfg['label']} failed — continuing with next job...")
        time.sleep(3)  # brief pause between submissions

    print("\n" + "=" * 50)
    print("=== FINAL SUMMARY ===")
    for label, status in summary.items():
        print(f"  {label}: {status}")
    print("=" * 50)

    failed = [l for l, s in summary.items() if "failed" in s]
    sys.exit(1 if failed else 0)
