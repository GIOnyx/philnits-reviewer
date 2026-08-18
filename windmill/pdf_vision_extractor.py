"""
Windmill ETL Pipeline Script: PhilNITS / ITPEC PDF Vision Extraction
Path: f/exam/pdf_vision_extractor

# requirements:
# PyMuPDF==1.24.14
# psycopg2-binary==2.9.10
# requests

Renders PDF pages to high-resolution PNG images in memory using PyMuPDF,
detects and crops embedded figures/diagrams as separate screenshots,
uploads figure crops to Supabase Storage (bucket: exam_assets),
then sends page images + figure URLs to Google Gemini 1.5 Flash at
temperature=0.0 with a strict ITPEC pseudo-language system instruction.

Validates the returned JSON, and upserts structured question+choice
records into the normalized PostgreSQL schema (exams / questions /
question_choices).

Windmill variable requirements:
  - u/gregoryivanonyxbadinas/enchanted_variable  → Gemini API key
  - u/system/prod_postgres_db                     → PostgreSQL connection dict

Supabase requirements:
  - SUPABASE_URL and SUPABASE_SERVICE_KEY env vars (or Windmill resources)
  - Storage bucket 'exam_assets' must exist with public read access

Python package requirements (pip install):
  - PyMuPDF         (import fitz)
  - psycopg2-binary
  - supabase
  - requests
"""

from __future__ import annotations

import base64
import hashlib
import io
import json
import os
import re
import sys
import time
import uuid
import urllib.request
import urllib.error
from typing import Optional

try:
    import fitz  # PyMuPDF
except ImportError as exc:
    raise ImportError(
        "PyMuPDF is required: pip install PyMuPDF"
    ) from exc

try:
    import psycopg2
    from psycopg2.extras import execute_values
except ImportError as exc:
    raise ImportError(
        "psycopg2-binary is required: pip install psycopg2-binary"
    ) from exc

try:
    from supabase import create_client, Client as SupabaseClient
except ImportError:
    SupabaseClient = None  # type: ignore[misc,assignment]
    create_client = None  # type: ignore[assignment]

try:
    import wmill  # type: ignore
except ImportError:
    wmill = None

# ── Windmill variable fetch via REST fallback ──────────────────────────────
# In some Windmill CE deployments wmill is not importable. Fall back to
# fetching variables via the Windmill REST API using the job token that
# Windmill always injects as WM_TOKEN.

def _wmill_get_variable(path: str) -> str:
    """Fetch a Windmill variable value, using wmill module or REST fallback."""
    if wmill is not None:
        return wmill.get_variable(path)
    # REST fallback: WM_TOKEN and WM_BASE_URL are injected by all Windmill workers
    wm_token   = os.environ.get("WM_TOKEN", "")
    wm_base    = os.environ.get("WM_BASE_URL", "http://localhost:8000").rstrip("/")
    wm_workspace = os.environ.get("WM_WORKSPACE", "main")
    if not wm_token:
        raise RuntimeError(f"WM_TOKEN not set and wmill module unavailable; cannot fetch {path!r}")
    encoded_path = path.replace("/", "%2F")
    url = f"{wm_base}/api/w/{wm_workspace}/variables/get_value/{encoded_path}"
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + wm_token})
    with urllib.request.urlopen(req, timeout=10) as r:
        val = r.read().decode("utf-8").strip().strip('"')
    return val


def _wmill_get_resource(path: str) -> dict:
    """Fetch a Windmill resource value dict, using wmill module or REST fallback."""
    if wmill is not None:
        return wmill.get_resource(path)
    wm_token     = os.environ.get("WM_TOKEN", "")
    wm_base      = os.environ.get("WM_BASE_URL", "http://localhost:8000").rstrip("/")
    wm_workspace = os.environ.get("WM_WORKSPACE", "main")
    if not wm_token:
        raise RuntimeError(f"WM_TOKEN not set; cannot fetch resource {path!r}")
    encoded_path = path.replace("/", "%2F")
    url = f"{wm_base}/api/w/{wm_workspace}/resources/get_value/{encoded_path}"
    req = urllib.request.Request(url, headers={"Authorization": "Bearer " + wm_token})
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.loads(r.read().decode("utf-8"))

sys.stdout.reconfigure(encoding="utf-8")


# ─────────────────────────────────────────────────────────────────────────────
# Logging helper
# ─────────────────────────────────────────────────────────────────────────────

def log(msg: str) -> None:
    """Verbose timestamped log to stderr (visible in Windmill job logs)."""
    ts = time.strftime("%Y-%m-%dT%H:%M:%S", time.gmtime())
    print(f"[Extractor {ts}] {msg}", file=sys.stderr, flush=True)


# ─────────────────────────────────────────────────────────────────────────────
# Constants
# ─────────────────────────────────────────────────────────────────────────────

GEMINI_MODEL = "gemini-3.5-flash-lite"
CANDIDATE_MODELS = ["gemini-3.5-flash-lite", "gemini-3.1-flash-lite"]
TEMPERATURE = 0.0
MAX_RETRIES = 5
PAGE_DPI = 150  # Reduced from 200 — smaller payload, faster API response
FIGURE_CROP_SCALE = 2.0  # 2× zoom for high-res figure crops
FIGURE_MIN_AREA_PX = 8000  # Ignore tiny decorative images below this area
SUPABASE_BUCKET = "exam_assets"
VALID_SESSIONS = {"Spring", "Autumn", "October"}
VALID_SUBJECTS = {"FE-A", "FE-B"}
VALID_LETTERS = set("abcdefghij")


# ─────────────────────────────────────────────────────────────────────────────
# ITPEC System Instruction (embedded verbatim into every Gemini request)
# ─────────────────────────────────────────────────────────────────────────────

SYSTEM_INSTRUCTION = """You are a specialized ITPEC/PhilNITS exam parser. Extract questions into strict JSON.

RULES — read carefully before outputting anything:

1. PSEUDO-CODE PRESERVATION
   - Assignment operator is the left arrow ← (U+2190). Never replace it with = or :=.
   - Array indexing is 1-based (first element is A[1], not A[0]).
   - 2-D arrays: matrix[i, j].  Array of arrays: arr[i][j].
   - Procedure headers are written as: ○ procedureName(param: type, ...)
   - Loop keywords: for / endfor,  while / endwhile,  do / enddo
   - Conditional keywords: if / elseif / else / endif
   - Block comments: slash-star ... star-slash
   - Line comments: // comment
   - Maintain every space and indentation level exactly as printed.

2. COMPARISON / BOOLEAN OPERATORS
   - Equality: =   Inequality: ≠   Greater/less: >  <  ≥  ≤
   - Logical: and  or  not
   - Literals: true  false

3. TYPE NAMES
   - integer  real  string  boolean  character  undefined

4. CHOICE CLASSIFICATION
   - Standard choices (Subject A, or Subject B non-matrix): set "text" to the choice string.
     Leave "blank_a", "blank_b", "blank_c" as null.
   - Matrix fill-in-the-blank choices (Subject B, choices like ___A___ ___B___ ___C___):
     set "blank_a", "blank_b", "blank_c" to the corresponding fill-in values.
     Leave "text" as null.

5. FIGURES, DIAGRAMS, AND TABLES
   - If there are figure URLs listed in the prompt, you MUST reference them.
   - When a question contains a visual figure, diagram, flowchart, or complex table
     that is NOT pseudo-code, do NOT attempt to describe it as raw text.
   - Instead, embed the appropriate URL as a Markdown image tag inside the
     "question_text" field:  ![Figure description](url)
   - This ensures the frontend renders the actual image instead of garbled text.
   - Pseudo-code blocks must still be placed verbatim in "pseudo_code_block".

6. OUTPUT FORMAT
   - Output raw, valid JSON only.
   - Do NOT wrap in markdown code fences.
   - Do NOT include any text before or after the JSON object.
   - The root object must match this exact schema:

{
  "validation_check": "<brief human-readable note counting choices and confirming notation>",
  "question_number": <integer>,
  "question_text": "<full question prompt; may contain ![Figure](url) markdown image tags>",
  "pseudo_code_block": "<exact pseudo-code preserving indentation; null if absent>",
  "diagram_description": "<textual alt-text for accessibility; null if no diagram>",
  "correct_answer": "<lowercase letter of the correct choice, e.g. 'a'; use null if the answer key is not printed on this page>",
  "answer_group": [
    {
      "letter": "<lowercase a-j>",
      "text": "<choice text for standard choices; null for matrix choices>",
      "blank_a": "<value for blank A; null if not a matrix choice>",
      "blank_b": "<value for blank B; null if not a matrix choice>",
      "blank_c": "<value for blank C; null if not a matrix choice>"
    }
  ]
}
"""


# ─────────────────────────────────────────────────────────────────────────────
# Helpers: PDF rendering
# ─────────────────────────────────────────────────────────────────────────────


def render_page_to_base64_png(page: "fitz.Page", dpi: int = PAGE_DPI) -> str:
    """Render a single fitz.Page to a base64-encoded PNG string (no disk I/O)."""
    mat = fitz.Matrix(dpi / 72, dpi / 72)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    png_bytes = pix.tobytes("png")
    return base64.b64encode(png_bytes).decode("ascii")


def pdf_to_base64_pages(pdf_path: str, dpi: int = PAGE_DPI) -> list[str]:
    """Return a list of base64-encoded PNG strings, one per PDF page."""
    log(f"Opening PDF: {pdf_path}")
    doc = fitz.open(pdf_path)
    log(f"PDF opened. Total pages: {len(doc)}")
    try:
        pages: list[str] = []
        for page_idx, page in enumerate(doc):
            log(f"  Rendering page {page_idx + 1}/{len(doc)} to PNG ({dpi} DPI)...")
            pages.append(render_page_to_base64_png(page, dpi))
        log(f"All {len(pages)} pages rendered successfully.")
        return pages
    finally:
        doc.close()


# ─────────────────────────────────────────────────────────────────────────────
# Helpers: Figure/Diagram Cropping
# ─────────────────────────────────────────────────────────────────────────────


def _merge_overlapping_rects(
    rects: list["fitz.Rect"], margin: float = 5.0
) -> list["fitz.Rect"]:
    """Merge overlapping or near-touching rectangles into larger bounding boxes."""
    if not rects:
        return []

    merged: list[fitz.Rect] = [rects[0]]
    for r in rects[1:]:
        expanded = fitz.Rect(
            r.x0 - margin, r.y0 - margin,
            r.x1 + margin, r.y1 + margin,
        )
        found = False
        for i, m in enumerate(merged):
            if m.intersects(expanded):
                merged[i] = m | r  # union
                found = True
                break
        if not found:
            merged.append(fitz.Rect(r))

    return merged


def extract_figure_crops_from_page(
    page: "fitz.Page",
    page_idx: int,
    scale: float = FIGURE_CROP_SCALE,
    min_area: int = FIGURE_MIN_AREA_PX,
) -> list[tuple[bytes, str]]:
    """
    Detect embedded images and drawing clusters on a page, crop them as PNGs.

    Returns a list of (png_bytes, suggested_filename) tuples.
    """
    rects: list[fitz.Rect] = []

    # 1. Raster images embedded in the page
    for img_info in page.get_images(full=True):
        xref = img_info[0]
        for img_rect in page.get_image_rects(xref):
            if img_rect.is_empty or img_rect.is_infinite:
                continue
            rects.append(fitz.Rect(img_rect))

    # 2. Vector drawings (lines, fills, strokes) — group into bounding boxes
    try:
        drawings = page.get_drawings()
        for d in drawings:
            drect = d.get("rect")
            if drect:
                r = fitz.Rect(drect)
                if not r.is_empty and not r.is_infinite:
                    rects.append(r)
    except Exception:
        pass  # Older PyMuPDF versions may not support get_drawings()

    if not rects:
        return []

    # Merge overlapping bounding boxes
    merged = _merge_overlapping_rects(rects, margin=8.0)

    crops: list[tuple[bytes, str]] = []
    mat = fitz.Matrix(scale, scale)
    for i, rect in enumerate(merged):
        # Filter tiny decorative elements
        w = (rect.x1 - rect.x0) * scale
        h = (rect.y1 - rect.y0) * scale
        if w * h < min_area:
            continue

        pix = page.get_pixmap(matrix=mat, clip=rect, alpha=False)
        png_bytes = pix.tobytes("png")

        content_hash = hashlib.md5(png_bytes).hexdigest()[:8]
        filename = f"page{page_idx + 1}_fig{i + 1}_{content_hash}.png"
        crops.append((png_bytes, filename))

    return crops


# ─────────────────────────────────────────────────────────────────────────────
# Helpers: Supabase Storage Upload
# ─────────────────────────────────────────────────────────────────────────────


def get_supabase_creds() -> tuple[str, str]:
    """Fetch Supabase URL and key from env or Windmill vault."""
    url = os.environ.get("SUPABASE_URL", "")
    key = os.environ.get("SUPABASE_SERVICE_KEY", "")
    if wmill or os.environ.get("WM_TOKEN"):
        try:
            url = url or _wmill_get_variable("u/system/supabase_url")
        except Exception:
            pass
        try:
            key = key or _wmill_get_variable("u/system/supabase_service_key")
        except Exception:
            pass
    return url, key


def init_supabase_client() -> "SupabaseClient | None":
    """Initialize the Supabase SDK client if available."""
    if create_client is None:
        log("ℹ supabase-py not installed. Will use native REST fallback for figure uploads.")
        return None

    url, key = get_supabase_creds()
    if not url or not key:
        log("WARNING: Supabase URL or service key not configured.")
        return None

    try:
        log(f"Supabase SDK client initialized for: {url}")
        return create_client(url, key)
    except Exception as exc:
        log(f"WARNING: Failed to init Supabase client: {exc}")
        return None


def upload_figures_to_supabase(
    sb: "SupabaseClient | None",
    crops: list[tuple[bytes, str]],
    exam_year: int,
    session: str,
    subject: str,
) -> list[tuple[str, str]]:
    """
    Upload cropped figure PNGs to Supabase Storage (SDK or REST fallback).

    Returns list of (filename, public_url) tuples.
    """
    if not crops:
        return []

    url, key = get_supabase_creds()
    if not url or not key:
        log("WARNING: Supabase credentials not set — skipping figure uploads.")
        return []

    uploaded: list[tuple[str, str]] = []
    storage_prefix = f"{exam_year}/{session}/{subject}"

    for png_bytes, filename in crops:
        storage_path = f"{storage_prefix}/{filename}"
        log(f"  Uploading figure to Supabase: {storage_path} ({len(png_bytes)} bytes)")

        # 1. Try SDK if available
        if sb is not None:
            try:
                sb.storage.from_(SUPABASE_BUCKET).upload(
                    path=storage_path,
                    file=png_bytes,
                    file_options={"content-type": "image/png", "upsert": "true"},
                )
                public_url = sb.storage.from_(SUPABASE_BUCKET).get_public_url(storage_path)
                uploaded.append((filename, public_url))
                log(f"  ✓ Uploaded via SDK: {public_url}")
                continue
            except Exception as exc:
                log(f"  SDK upload failed, trying REST fallback: {exc}")

        # 2. REST Fallback via urllib.request (zero extra dependencies)
        try:
            rest_url = f"{url.rstrip('/')}/storage/v1/object/{SUPABASE_BUCKET}/{storage_path}"
            headers = {
                "Authorization": f"Bearer {key}",
                "apikey": key,
                "Content-Type": "image/png",
                "x-upsert": "true",
            }
            req = urllib.request.Request(rest_url, data=png_bytes, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=30) as resp:
                public_url = f"{url.rstrip('/')}/storage/v1/object/public/{SUPABASE_BUCKET}/{storage_path}"
                uploaded.append((filename, public_url))
                log(f"  ✓ Uploaded via REST: {public_url}")
        except Exception as exc:
            log(f"  ✗ REST upload failed for {filename}: {exc}")

    return uploaded


# ─────────────────────────────────────────────────────────────────────────────
# Helpers: JSON validation
# ─────────────────────────────────────────────────────────────────────────────


class ExtractionError(Exception):
    """Raised when the LLM output fails validation."""


def validate_extraction(raw: str) -> dict:
    """
    Parse `raw` as JSON and validate the extracted question structure.

    Raises ExtractionError with a descriptive message on any failure so the
    retry loop can forward it back to the model.
    """
    cleaned = raw.strip()
    json_match = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", cleaned, re.DOTALL | re.IGNORECASE)
    if json_match:
        cleaned = json_match.group(1).strip()
    else:
        start = cleaned.find("{")
        end = cleaned.rfind("}")
        if start != -1 and end != -1 and end > start:
            cleaned = cleaned[start : end + 1].strip()

    try:
        data: dict = json.loads(cleaned)
    except json.JSONDecodeError as exc:
        raise ExtractionError(f"JSON parse error: {exc}. Raw response snippet: {raw[:200]!r}") from exc

    # question_number — allow 0, will be corrected to group index in upsert
    if not isinstance(data.get("question_number"), int):
        raise ExtractionError("'question_number' must be an integer.")

    # question_text
    if not isinstance(data.get("question_text"), str) or not data["question_text"].strip():
        raise ExtractionError("'question_text' must be a non-empty string.")

    # correct_answer — may be null/missing for FE-B (answer key not printed on question page)
    ca = data.get("correct_answer")
    if ca is None:
        data["correct_answer"] = ""   # normalise so downstream code is safe
    elif not isinstance(ca, str) or (ca.strip() and ca.strip().lower() not in VALID_LETTERS):
        raise ExtractionError(
            f"'correct_answer' must be a lowercase letter a–j or null, got: {ca!r}"
        )
    else:
        data["correct_answer"] = ca.strip().lower()

    # answer_group
    ag = data.get("answer_group")
    if not isinstance(ag, list):
        raise ExtractionError("'answer_group' must be a JSON array.")
    if len(ag) < 4:
        raise ExtractionError(
            f"'answer_group' must have at least 4 items; got {len(ag)}."
        )
    if len(ag) > 10:
        raise ExtractionError(
            f"'answer_group' must have at most 10 items; got {len(ag)}."
        )

    for i, choice in enumerate(ag):
        if not isinstance(choice, dict):
            raise ExtractionError(f"answer_group[{i}] is not an object.")
        letter = choice.get("letter", "")
        if letter not in VALID_LETTERS:
            raise ExtractionError(
                f"answer_group[{i}].letter {letter!r} is not a valid lowercase a–j."
            )
        has_text = bool(choice.get("text"))
        has_any_blank = any(choice.get(k) for k in ("blank_a", "blank_b", "blank_c"))
        if not has_text and not has_any_blank:
            raise ExtractionError(
                f"answer_group[{i}] (letter={letter!r}) must have either 'text' "
                "or at least one of blank_a/blank_b/blank_c."
            )

    return data


# ─────────────────────────────────────────────────────────────────────────────
# Gemini Vision API call
# ─────────────────────────────────────────────────────────────────────────────


def call_gemini_vision(
    api_key: str,
    page_b64_list: list[str],
    user_message: str,
    target_model: str = "gemma-4-31b-it",
) -> str:
    """
    Call Google Generative AI API with target_model.
    Supports gemma-4-31b-it, gemma-4-26b-a4b-it, and gemini-3.6-flash.
    """
    api_url = (
        f"https://generativelanguage.googleapis.com/v1beta/models/"
        f"{target_model}:generateContent?key={api_key}"
    )
    log(f"  Preparing API call to '{target_model}' with {len(page_b64_list)} image(s)...")

    image_parts: list[dict] = [
        {
            "inline_data": {
                "mime_type": "image/png",
                "data": b64,
            }
        }
        for b64 in page_b64_list
    ]

    gen_config: dict = {"temperature": TEMPERATURE}
    if "gemini" in target_model.lower():
        gen_config["responseMimeType"] = "application/json"

    payload = {
        "contents": [
            {
                "role": "user",
                "parts": image_parts + [{"text": user_message}],
            }
        ],
        "systemInstruction": {
            "parts": [{"text": SYSTEM_INSTRUCTION}]
        },
        "generationConfig": gen_config,
    }

    try:
        req_obj = urllib.request.Request(
            api_url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(req_obj, timeout=300) as resp:
            body = json.loads(resp.read().decode("utf-8"))
            status_code = resp.status
            parts = body.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            text = ""
            for part in parts:
                if part.get("thought"):
                    continue
                if part.get("text"):
                    text += part["text"]
            if not text and parts:
                text = parts[-1].get("text", "")

            if text:
                log(f"  ✓ Model '{target_model}' responded with HTTP {status_code} ({len(text)} chars)")
                return text
            else:
                raise ExtractionError(f"Model '{target_model}' returned empty text response.")
    except urllib.error.HTTPError as exc:
        status_code = exc.code
        body_preview = exc.read().decode("utf-8", errors="replace")[:800]
        if status_code in (401, 403):
            raise ExtractionError(
                f"AUTHENTICATION ERROR (HTTP {status_code}): API key invalid or lacks permissions. "
                f"Response: {body_preview}"
            )
        else:
            raise ExtractionError(
                f"Model '{target_model}' API returned HTTP {status_code}: {body_preview}"
            )
    except urllib.error.URLError as exc:
        raise ExtractionError(f"Network error reaching API for model '{target_model}': {exc.reason}")
    except TimeoutError:
        raise ExtractionError(f"API request for model '{target_model}' timed out after 300s.")


# ─────────────────────────────────────────────────────────────────────────────
# Self-healing retry loop
# ─────────────────────────────────────────────────────────────────────────────


def extract_question_with_retry(
    api_key: str,
    page_b64_list: list[str],
    question_hint: str = "",
    figure_urls: Optional[list[tuple[str, str]]] = None,
    max_retries: int = MAX_RETRIES,
) -> dict:
    """
    Send page images to Gemini with the ITPEC system instruction and validate.
    On validation failure, the exact error is appended to the next prompt so
    the model can self-correct.  Raises ExtractionError after max_retries.
    """
    base_prompt = (
        "Extract the complete question from the exam page(s) shown above. "
        "Follow the system instruction exactly. "
        "Output a single raw JSON object only — exactly ONE question, ONE answer_group with 4-8 choices.\n"
    )
    if question_hint:
        base_prompt += (
            f"Hint: {question_hint}.\n"
            "IMPORTANT: Extract ONLY that single sub-question and its answer group. "
            "Do NOT combine multiple sub-questions or answer groups into one response.\n"
        )

    # Inject figure URLs so the LLM knows what links to embed
    if figure_urls:
        base_prompt += (
            "\n--- FIGURE ASSETS (use these URLs in question_text as Markdown images) ---\n"
        )
        for fname, url in figure_urls:
            base_prompt += f"  - {fname}: {url}\n"
        base_prompt += "--- END FIGURE ASSETS ---\n"

    accumulated_feedback = ""
    last_error: Optional[ExtractionError] = None

    for attempt in range(1, max_retries + 1):
        target_model = CANDIDATE_MODELS[(attempt - 1) % len(CANDIDATE_MODELS)]
        log(f"  Attempt {attempt}/{max_retries} for question hint={question_hint!r} using model '{target_model}'")
        prompt = base_prompt
        if accumulated_feedback:
            prompt += (
                f"\n\n⚠️ Your previous attempt (#{attempt - 1}) had this validation error:\n"
                f"{accumulated_feedback}\n"
                "Please fix the issue and re-output the complete corrected JSON."
            )

        try:
            raw = call_gemini_vision(api_key, page_b64_list, prompt, target_model=target_model)
            validated = validate_extraction(raw)
            log(f"  ✓ Validation passed on attempt {attempt} using '{target_model}'.")
            return validated
        except ExtractionError as exc:
            last_error = exc
            is_timeout = "timed out" in str(exc).lower()
            accumulated_feedback = str(exc)
            log(
                f"  ✗ Attempt {attempt}/{max_retries} with '{target_model}' failed: {exc}"
            )
            if attempt < max_retries:
                # Longer backoff for timeouts — give the API time to recover
                # For validation errors keep it short
                if is_timeout:
                    backoff = 15.0 * attempt  # 15s, 30s, 45s, 60s
                else:
                    backoff = 3.0 * attempt   # 3s, 6s, 9s, 12s
                log(f"  Backing off {backoff:.0f}s before retry with next model...")
                time.sleep(backoff)

    raise ExtractionError(
        f"Extraction failed after {max_retries} attempts. Last error: {last_error}"
    )


# ─────────────────────────────────────────────────────────────────────────────
# Database upsert
# ─────────────────────────────────────────────────────────────────────────────


def get_or_create_exam(
    cursor: "psycopg2.extensions.cursor",
    year: int,
    session: str,
    subject: str,
) -> str:
    """Return the UUID of the matching exam row, creating it if absent."""
    cursor.execute(
        """
        INSERT INTO exams (year, session, subject)
        VALUES (%s, %s, %s)
        ON CONFLICT (year, session, subject) DO UPDATE
            SET year = EXCLUDED.year   -- no-op, forces RETURNING to work
        RETURNING id
        """,
        (year, session, subject),
    )
    row = cursor.fetchone()
    return str(row[0])


def upsert_question(
    cursor: "psycopg2.extensions.cursor",
    exam_id: str,
    data: dict,
    fallback_number: int = 1,
) -> str:
    """Upsert the question row and return its UUID."""
    # Normalise question_number — model sometimes returns 0 or None
    q_num = int(data.get("question_number") or 0)
    if q_num < 1:
        q_num = fallback_number
    cursor.execute(
        """
        INSERT INTO questions (
            exam_id, question_number, question_text,
            pseudo_code, diagram_description, correct_answer, explanation
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (exam_id, question_number) DO UPDATE SET
            question_text       = EXCLUDED.question_text,
            pseudo_code         = EXCLUDED.pseudo_code,
            diagram_description = EXCLUDED.diagram_description,
            correct_answer      = EXCLUDED.correct_answer,
            explanation         = EXCLUDED.explanation
        RETURNING id
        """,
        (
            exam_id,
            q_num,
            data["question_text"].strip(),
            (data.get("pseudo_code_block") or "").strip() or None,
            (data.get("diagram_description") or "").strip() or None,
            data["correct_answer"].strip().lower() if data.get("correct_answer") else "",
            (data.get("explanation") or "").strip() or None,
        ),
    )
    row = cursor.fetchone()
    return str(row[0])


def upsert_choices(
    cursor: "psycopg2.extensions.cursor",
    question_id: str,
    answer_group: list[dict],
) -> None:
    """Upsert all choices for a question (delete-then-insert for atomicity)."""
    cursor.execute(
        "DELETE FROM question_choices WHERE question_id = %s", (question_id,)
    )
    records: list[tuple] = []
    for choice in answer_group:
        letter = choice["letter"].strip().lower()
        records.append(
            (
                question_id,
                letter,
                (choice.get("text") or "").strip() or None,
                (choice.get("blank_a") or "").strip() or None,
                (choice.get("blank_b") or "").strip() or None,
                (choice.get("blank_c") or "").strip() or None,
            )
        )
    execute_values(
        cursor,
        """
        INSERT INTO question_choices (question_id, letter, text, blank_a, blank_b, blank_c)
        VALUES %s
        """,
        records,
    )


# ─────────────────────────────────────────────────────────────────────────────
# Page grouping strategy (Subject B multi-page questions)
# ─────────────────────────────────────────────────────────────────────────────


def group_pages_for_subject_b(
    all_pages_b64: list[str],
    scenarios_count: int = 4,
    subquestions_per_scenario: int = 3,
    max_pages_per_group: int = 4,
) -> list[list[str]]:
    """
    Groups pages for Subject B exams where sub-questions share scenarios.
    Typically, a Subject B exam has 4 scenarios each with 3 sub-questions.

    Each group is capped at max_pages_per_group images to avoid timeouts and
    prevent the model from seeing too many questions at once and conflating them.

    Returns a list of page base64 lists, one per (scenario, sub-question) pair.
    """
    n = len(all_pages_b64)
    groups: list[list[str]] = []

    # If tiny document, just send all pages to each question
    if n <= scenarios_count:
        for _ in range(scenarios_count * subquestions_per_scenario):
            groups.append(all_pages_b64)
        return groups

    pps = max(1, n // scenarios_count)
    for s in range(scenarios_count):
        start_idx = s * pps
        end_idx = (s + 1) * pps if s < scenarios_count - 1 else n
        scenario_pages = all_pages_b64[start_idx:end_idx]

        # Cap pages per call to avoid timeouts — take the first max_pages_per_group
        capped_pages = scenario_pages[:max_pages_per_group]

        # Repeat the (capped) scenario page group for each sub-question
        for _ in range(subquestions_per_scenario):
            groups.append(capped_pages)

    return groups


# ─────────────────────────────────────────────────────────────────────────────
# Windmill entrypoint
# ─────────────────────────────────────────────────────────────────────────────


def main(
    pdf_base64: Optional[str] = None,
    pdf_path: Optional[str] = None,
    pdf_filename: str = "exam.pdf",
    exam_year: int = 2024,
    session: str = "Spring",
    subject: str = "FE-A",
    page_groups: Optional[list[list[int]]] = None,
    dry_run: bool = False,
) -> dict:
    """
    Windmill entrypoint for vision-based exam PDF extraction.

    Args:
        pdf_base64:  Base64-encoded PDF file uploaded from frontend (optional).
        pdf_path:    Absolute path to the exam PDF file on the Windmill worker (optional).
        pdf_filename: Filename for the uploaded PDF (used with pdf_base64).
        exam_year:   e.g. 2024
        session:     'Spring' | 'Autumn' | 'October'
        subject:     'FE-A'   | 'FE-B'
        page_groups: Optional explicit grouping of pages per question,
                     e.g. [[1,2],[3,4],[5,6,7]].  1-indexed.
                     If omitted, each page is treated as one question (FE-A)
                     or pages are auto-grouped (FE-B).
        dry_run:     If True, run extraction but skip DB writes (for testing).

    Returns:
        dict with status, inserted/updated counts, and any per-question errors.
    """
    log("=" * 72)
    log(f"Starting extraction")
    log(f"  exam_year={exam_year}, session={session!r}, subject={subject!r}")
    log(f"  page_groups={'explicit' if page_groups else 'auto'}, dry_run={dry_run}")
    log("=" * 72)
    
    # Handle base64 PDF input (from frontend upload)
    if pdf_base64 and not pdf_path:
        import tempfile
        temp_dir = tempfile.mkdtemp()
        pdf_path = os.path.join(temp_dir, pdf_filename)
        log(f"Decoding base64 PDF to temporary file: {pdf_path}")
        try:
            pdf_bytes = base64.b64decode(pdf_base64)
            with open(pdf_path, 'wb') as f:
                f.write(pdf_bytes)
            log(f"✓ PDF decoded successfully ({len(pdf_bytes)} bytes)")
        except Exception as exc:
            log(f"ERROR: Failed to decode base64 PDF: {exc}")
            return {"status": "error", "message": f"Failed to decode PDF: {exc}"}

    # ── Validate inputs ──
    if session not in VALID_SESSIONS:
        log(f"ERROR: Invalid session: {session!r}")
        return {"status": "error", "message": f"Invalid session: {session!r}. Must be one of {VALID_SESSIONS}."}
    if subject not in VALID_SUBJECTS:
        log(f"ERROR: Invalid subject: {subject!r}")
        return {"status": "error", "message": f"Invalid subject: {subject!r}. Must be one of {VALID_SUBJECTS}."}
    if not os.path.isfile(pdf_path):
        log(f"ERROR: PDF not found: {pdf_path!r}")
        return {"status": "error", "message": f"PDF not found: {pdf_path!r}"}

    # ── Load API Key from Windmill secure vault ──
    log("Loading API credentials...")
    api_key: str = ""
    db_config: dict = {}

    if wmill is not None or os.environ.get("WM_TOKEN"):
        log("  Windmill environment detected. Fetching from secure vault...")

        # Gemini API key
        try:
            api_key = _wmill_get_variable("u/gregoryivanonyxbadinas/enchanted_variable")
            log(f"  ✓ Gemini API key loaded (length={len(api_key)}, starts with '{api_key[:6]}...')")
        except Exception as exc:
            log(f"  ✗ FAILED to fetch Gemini API key from Windmill vault: {exc}")
            return {"status": "error", "message": f"Failed to load API key from Windmill: {exc}"}

        # DB config: try structured resource first, then fall back to a URL variable
        try:
            resource = _wmill_get_resource("u/system/prod_postgres_db")
            db_config = {
                "host":     resource["host"],
                "port":     int(resource.get("port", 5432)),
                "dbname":   resource.get("dbname") or resource.get("database"),
                "user":     resource["user"],
                "password": resource["password"],
                "sslmode":  resource.get("sslmode", "require"),
            }
            log("  ✓ PostgreSQL config loaded from Windmill resource.")
        except Exception as res_exc:
            log(f"  ℹ Resource u/system/prod_postgres_db not found ({res_exc}). Trying URL variable...")
            try:
                db_url = _wmill_get_variable("u/system/postgres_url")
                db_config = {"dsn": db_url}
                log("  ✓ PostgreSQL URL loaded from u/system/postgres_url variable.")
            except Exception as url_exc:
                log(f"  ✗ FAILED to load DB config from Windmill: {url_exc}")
                return {"status": "error", "message": (
                    "No database config found. Create either the Windmill resource "
                    "'u/system/prod_postgres_db' (type: postgresql) OR a plain-text "
                    "variable 'u/system/postgres_url' containing your postgres:// connection string."
                )}

        # Supabase creds for figure uploads (optional)
        try:
            sb_url = _wmill_get_variable("u/system/supabase_url")
            sb_key = _wmill_get_variable("u/system/supabase_service_key")
            if sb_url:
                os.environ["SUPABASE_URL"] = sb_url
            if sb_key:
                os.environ["SUPABASE_SERVICE_KEY"] = sb_key
            log("  ✓ Supabase credentials loaded.")
        except Exception:
            log("  ℹ Supabase variables not set — figure uploads will be skipped.")

    else:
        log("  Local environment (no Windmill). Reading from env vars...")
        db_url = os.environ.get("POSTGRES_URL_NON_POOLING") or os.environ.get("DATABASE_URL", "")
        if db_url:
            db_config = {"dsn": db_url}
        else:
            db_config = {
                "host":     os.environ.get("DB_HOST", "localhost"),
                "port":     int(os.environ.get("DB_PORT", "5432")),
                "dbname":   os.environ.get("DB_NAME", "philnits"),
                "user":     os.environ.get("DB_USER", "postgres"),
                "password": os.environ.get("DB_PASSWORD", ""),
            }
        api_key = os.environ.get("GEMINI_API_KEY", "")
        log(f"  API key loaded from env (length={len(api_key)})")

    if not api_key:
        log("FATAL: Gemini API key is empty after all loading attempts.")
        return {"status": "error", "message": "Gemini API key not configured."}

    # ── Connect helper that works with both dsn and kwargs ──
    def _connect() -> "psycopg2.extensions.connection":
        if "dsn" in db_config:
            return psycopg2.connect(db_config["dsn"])
        return psycopg2.connect(**db_config)

    # ── Initialize Supabase client for figure uploads ──
    log("Initializing Supabase client...")
    sb = init_supabase_client()

    # ── Render PDF → base64 PNG pages ──
    all_pages_b64 = pdf_to_base64_pages(pdf_path, dpi=PAGE_DPI)
    total_pages = len(all_pages_b64)

    # ── Extract and upload figures from each page ──
    log("Scanning pages for figures, diagrams, and embedded images...")
    all_figure_urls: dict[int, list[tuple[str, str]]] = {}  # page_idx → [(fname, url)]
    doc = fitz.open(pdf_path)
    try:
        for page_idx in range(len(doc)):
            page = doc[page_idx]
            crops = extract_figure_crops_from_page(page, page_idx)
            if crops:
                log(f"  Page {page_idx + 1}: found {len(crops)} figure region(s)")
                uploaded = upload_figures_to_supabase(
                    sb, crops, exam_year, session, subject
                )
                if uploaded:
                    all_figure_urls[page_idx] = uploaded
            else:
                log(f"  Page {page_idx + 1}: no figures detected.")
    finally:
        doc.close()

    total_figures = sum(len(v) for v in all_figure_urls.values())
    log(f"Figure extraction complete: {total_figures} figure(s) uploaded across {len(all_figure_urls)} page(s).")

    # ── Parse page_groups if string ──
    if isinstance(page_groups, str):
        try:
            page_groups = json.loads(page_groups)
        except Exception as exc:
            log(f"WARNING: Failed to parse page_groups JSON string: {exc}")
            page_groups = None

    # ── Build page groups ──
    if page_groups:
        log(f"Using explicit page groups: {page_groups}")
        grouped: list[list[str]] = []
        page_index_groups: list[list[int]] = []
        for pg in page_groups:
            indices = [p - 1 for p in pg if 1 <= p <= total_pages]
            grouped.append([all_pages_b64[i] for i in indices])
            page_index_groups.append(indices)
    elif subject == "FE-B":
        log("Auto-grouping pages for Subject B (scenario-based)...")
        grouped = group_pages_for_subject_b(all_pages_b64)
        # Reconstruct index groups for figure URL mapping
        n = total_pages
        scenarios_count = 4
        pps = max(1, n // scenarios_count)
        page_index_groups = []
        for s in range(scenarios_count):
            start_idx = s * pps
            end_idx = (s + 1) * pps if s < scenarios_count - 1 else n
            indices = list(range(start_idx, end_idx))
            for _ in range(3):  # 3 sub-questions per scenario
                page_index_groups.append(indices)
    else:
        log("FE-A mode: one question per page.")
        grouped = [[p] for p in all_pages_b64]
        page_index_groups = [[i] for i in range(total_pages)]

    log(f"Total question groups to process: {len(grouped)}")

    # ── Connect to DB ──
    log("Connecting to PostgreSQL...")
    conn = _connect() if not dry_run else None
    cursor = conn.cursor() if conn else None
    if not dry_run:
        log("  ✓ Database connected.")

    results: list[dict] = []
    upserted = 0
    errors = 0

    try:
        # Ensure exam row exists
        exam_id: Optional[str] = None
        if not dry_run:
            assert cursor is not None
            exam_id = get_or_create_exam(cursor, exam_year, session, subject)
            conn.commit()  # type: ignore[union-attr]
            log(f"Exam row ready. exam_id={exam_id}")
            
            # ── WIPE OLD QUESTIONS FOR THIS EXAM ──
            log(f"Deleting old questions for exam_id={exam_id} to prevent stale data...")
            cursor.execute(
                """
                DELETE FROM question_choices 
                WHERE question_id IN (
                    SELECT id FROM questions WHERE exam_id = %s
                )
                """,
                (exam_id,)
            )
            deleted_choices = cursor.rowcount
            cursor.execute(
                "DELETE FROM questions WHERE exam_id = %s",
                (exam_id,)
            )
            deleted_questions = cursor.rowcount
            conn.commit()  # type: ignore[union-attr]
            log(f"  ✓ Deleted {deleted_questions} old questions and {deleted_choices} choices.")

        # ── Extract each question group ──
        for group_idx, page_group_b64 in enumerate(grouped):
            q_hint = str(group_idx + 1)

            # For FE-B, tell the model exactly which sub-question to extract
            # Groups cycle as: scenario 0 sub 1, scenario 0 sub 2, scenario 0 sub 3,
            #                   scenario 1 sub 1, etc.
            if subject == "FE-B":
                subq_per_scenario = 3
                scenario_num  = (group_idx // subq_per_scenario) + 1
                subq_num      = (group_idx % subq_per_scenario) + 1
                q_hint = f"scenario {scenario_num}, sub-question {subq_num} — extract ONLY this one sub-question and its answer group"
            log(
                f"{'─' * 40}\n"
                f"  Processing group {group_idx + 1}/{len(grouped)} "
                f"({len(page_group_b64)} page(s))..."
            )

            # Collect figure URLs for this group's pages
            group_figure_urls: list[tuple[str, str]] = []
            if group_idx < len(page_index_groups):
                for pi in page_index_groups[group_idx]:
                    group_figure_urls.extend(all_figure_urls.get(pi, []))

            if group_figure_urls:
                log(f"  {len(group_figure_urls)} figure URL(s) injected into prompt.")

            try:
                data = extract_question_with_retry(
                    api_key, page_group_b64, q_hint,
                    figure_urls=group_figure_urls,
                )

                if dry_run:
                    results.append({"group": group_idx + 1, "status": "dry_run", "data": data})
                    upserted += 1
                    log(f"  ✓ [DRY RUN] Q{data['question_number']} extracted.")
                    continue

                assert cursor is not None
                assert exam_id is not None

                q_id = upsert_question(cursor, exam_id, data, fallback_number=group_idx + 1)
                upsert_choices(cursor, q_id, data["answer_group"])
                conn.commit()  # type: ignore[union-attr]

                log(
                    f"  ✓ Q{data['question_number']} upserted → "
                    f"question_id={q_id}, {len(data['answer_group'])} choices."
                )

                results.append({
                    "group": group_idx + 1,
                    "question_number": data["question_number"],
                    "status": "ok",
                    "question_id": q_id,
                    "choices_written": len(data["answer_group"]),
                    "validation_check": data.get("validation_check", ""),
                })
                upserted += 1

            except ExtractionError as exc:
                errors += 1
                log(f"  ✗ Group {group_idx + 1} FAILED: {exc}")
                if not dry_run and conn:
                    conn.rollback()
                results.append({
                    "group": group_idx + 1,
                    "status": "error",
                    "error": str(exc),
                })

    finally:
        if cursor:
            cursor.close()
        if conn:
            conn.close()
            log("Database connection closed.")

    summary = {
        "status": "completed" if errors == 0 else "completed_with_errors",
        "pdf_path": pdf_path,
        "exam_year": exam_year,
        "session": session,
        "subject": subject,
        "total_pages": total_pages,
        "total_figures_uploaded": total_figures,
        "groups_processed": len(grouped),
        "upserted": upserted,
        "errors": errors,
        "dry_run": dry_run,
        "results": results,
    }
    log("=" * 72)
    log(f"DONE. {upserted} upserted, {errors} errors, {total_figures} figures.")
    log("=" * 72)
    return summary
