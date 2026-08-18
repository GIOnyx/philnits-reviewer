"""
Fetch every job currently in the Windmill queue and cancel them all.
Loops until the queue is empty.
"""
import urllib.request, urllib.error, json, time

TOKEN     = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE      = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADS     = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}
WORKSPACE = "main"
REASON    = json.dumps({"reason": "manual purge"}).encode()

# Windmill CE cancel endpoints to try
CANCEL_TEMPLATES = [
    "jobs_u/cancel/{id}",
    "jobs/cancel/{id}",
    "jobs/{id}/cancel",
    "jobs_u/{id}/cancel",
]

def get_queue():
    req = urllib.request.Request(
        f"{BASE}/api/w/{WORKSPACE}/jobs/queue/list?per_page=100",
        headers=HEADS
    )
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.load(r)

def cancel_job(jid):
    for tmpl in CANCEL_TEMPLATES:
        url = f"{BASE}/api/w/{WORKSPACE}/{tmpl.format(id=jid)}"
        try:
            req = urllib.request.Request(url, data=REASON, headers=HEADS, method="POST")
            with urllib.request.urlopen(req, timeout=10) as r:
                return True, f"HTTP {r.status} via {tmpl}"
        except urllib.error.HTTPError as e:
            if e.code != 404:
                return False, f"{e.code} via {tmpl}"
    return False, "all endpoints 404"

total_cancelled = 0
for attempt in range(5):  # up to 5 sweeps
    jobs = get_queue()
    if not jobs:
        print(f"Queue is empty after {total_cancelled} cancellation(s).")
        break

    print(f"Sweep {attempt+1}: found {len(jobs)} job(s) in queue")
    for j in jobs:
        jid  = j.get("id", "")
        path = j.get("script_path", "unknown")
        ok, msg = cancel_job(jid)
        icon = "✓" if ok else "✗"
        print(f"  {icon} {jid[:8]} ({path}) — {msg}")
        if ok:
            total_cancelled += 1

    time.sleep(2)  # brief pause before re-checking
else:
    # Final check
    remaining = get_queue()
    if remaining:
        print(f"\nWarning: {len(remaining)} job(s) still in queue (cancel API may not be supported).")
        print("Cancel them manually in the Windmill UI → Runs → select each → Cancel.")
    else:
        print("Queue cleared.")
