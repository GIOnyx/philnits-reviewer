import urllib.request, urllib.error, json

TOKEN = "RgRr8bMOqIVkv8gDpQdfctqZxyLinOTH"
BASE  = "https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com"
HEADS = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}

ids = [
    "01a00f18-d4dd-d1bd-2618-8c1a292a8fd4",
    "01a00f18-4007-915e-0da8-15e6d9b87453",
    "01a00f10-522a-cb21-b4e6-5b90dad0b225",
]

reason = json.dumps({"reason": "superseded"}).encode()

endpoints = [
    "jobs_u/cancel/{id}",
    "jobs/cancel/{id}",
    "jobs/{id}/cancel",
]

for jid in ids:
    cancelled = False
    for tmpl in endpoints:
        url = f"{BASE}/api/w/main/{tmpl.format(id=jid)}"
        try:
            req = urllib.request.Request(url, data=reason, headers=HEADS, method="POST")
            with urllib.request.urlopen(req, timeout=10) as r:
                print(f"OK {jid[:8]} via {tmpl}")
                cancelled = True
                break
        except urllib.error.HTTPError as e:
            print(f"  {e.code} {tmpl}")
    if not cancelled:
        print(f"FAILED to cancel {jid[:8]}")
