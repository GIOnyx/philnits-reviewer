/**
 * PdfUploadPanel — Upload a PhilNITS/ITPEC exam PDF and trigger the Windmill
 * pdf_vision_extractor pipeline.
 *
 * Flow:
 *   1. User picks year / session / subject + a PDF file.
 *   2. Component calls PhilnitsApiService.triggerWindmillExtraction() which
 *      base64-encodes the file and POSTs it to the Windmill endpoint.
 *   3. Component polls PhilnitsApiService.pollWindmillJob() until the job
 *      succeeds or fails, streaming the last log line to the status panel.
 *   4. On success it calls onExtractionComplete() so App.tsx can reload
 *      questions from Supabase.
 */

import React, { useState, useCallback, useRef } from 'react';
import { Upload, Loader2, CheckCircle2, XCircle, AlertTriangle, FileText } from 'lucide-react';
import { PhilnitsApiService } from '../services/api';

interface PdfUploadPanelProps {
  /** Called after a successful extraction so the parent can refetch questions. */
  onExtractionComplete?: () => void;
}

type Phase = 'idle' | 'uploading' | 'polling' | 'success' | 'error';

export const PdfUploadPanel: React.FC<PdfUploadPanelProps> = ({ onExtractionComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [examYear, setExamYear] = useState<number>(new Date().getFullYear());
  const [session, setSession] = useState<string>('Spring');
  const [subject, setSubject] = useState<string>('FE-A');

  const [phase, setPhase] = useState<Phase>('idle');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [jobId, setJobId] = useState<string>('');

  const abortRef = useRef(false);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f && f.type !== 'application/pdf') {
      setPhase('error');
      setStatusMsg('Please select a valid PDF file (.pdf).');
      setFile(null);
    } else {
      setFile(f);
      setPhase('idle');
      setStatusMsg('');
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!file) return;
    abortRef.current = false;

    try {
      // ── Step 1: Upload & trigger ─────────────────────────────────────────
      setPhase('uploading');
      setStatusMsg(`Encoding ${file.name} and submitting to Windmill…`);

      const id = await PhilnitsApiService.triggerWindmillExtraction(
        file,
        examYear,
        session,
        subject,
      );
      setJobId(id);
      setStatusMsg(`Job ${id} queued. Waiting for worker…`);
      setPhase('polling');

      // ── Step 2: Poll ──────────────────────────────────────────────────────
      const { success, result, error } = await PhilnitsApiService.pollWindmillJob(
        id,
        (msg) => { if (!abortRef.current) setStatusMsg(msg); },
      );

      if (abortRef.current) return;

      if (success) {
        const inserted = result?.inserted ?? result?.upserted ?? '?';
        setPhase('success');
        setStatusMsg(`Extraction complete — ${inserted} question(s) written to Supabase.`);
        onExtractionComplete?.();
      } else {
        setPhase('error');
        setStatusMsg(error ?? 'Unknown error from Windmill job.');
      }
    } catch (err: any) {
      if (!abortRef.current) {
        setPhase('error');
        setStatusMsg(err?.message ?? 'Unexpected error during upload.');
      }
    }
  }, [file, examYear, session, subject, onExtractionComplete]);

  const reset = () => {
    abortRef.current = true;
    setFile(null);
    setPhase('idle');
    setStatusMsg('');
    setJobId('');
  };

  const busy = phase === 'uploading' || phase === 'polling';

  return (
    <div className="glass-panel p-6 space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[var(--border-color)] pb-4">
        <Upload className="w-6 h-6 text-[var(--accent-emerald)]" aria-hidden="true" />
        <div>
          <h2 className="text-base font-bold text-[var(--text-primary)]">
            Upload &amp; Extract Exam PDF
          </h2>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Renders each page via PyMuPDF → Gemini 1.5 Flash vision → writes to Supabase
          </p>
        </div>
      </div>

      {/* Metadata selectors */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
            Year
          </label>
          <input
            type="number"
            value={examYear}
            onChange={(e) => setExamYear(Number(e.target.value))}
            min={2019}
            max={2030}
            disabled={busy}
            className="w-full px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-sm font-mono disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
            Session
          </label>
          <select
            value={session}
            onChange={(e) => setSession(e.target.value)}
            disabled={busy}
            className="w-full px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-sm disabled:opacity-50"
          >
            <option>Spring</option>
            <option>Autumn</option>
            <option>October</option>
          </select>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
            Subject
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={busy}
            className="w-full px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-sm disabled:opacity-50"
          >
            <option value="FE-A">FE-A (Subject A)</option>
            <option value="FE-B">FE-B (Subject B)</option>
          </select>
        </div>
      </div>

      {/* File picker */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
          PDF File
        </label>
        <label
          className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
            file
              ? 'border-[var(--accent-emerald)] bg-[var(--accent-emerald)]/5'
              : 'border-[var(--border-color)] hover:border-[var(--accent-cyan)] bg-[var(--bg-card-hover)]'
          } ${busy ? 'pointer-events-none opacity-50' : ''}`}
        >
          <FileText className={`w-5 h-5 shrink-0 ${file ? 'text-[var(--accent-emerald)]' : 'text-[var(--text-muted)]'}`} />
          <span className="text-sm text-[var(--text-secondary)] truncate">
            {file ? `${file.name}  (${(file.size / 1024 / 1024).toFixed(2)} MB)` : 'Click to select a PDF…'}
          </span>
          <input type="file" accept=".pdf" className="sr-only" onChange={handleFileChange} disabled={busy} />
        </label>
      </div>

      {/* Status panel */}
      {phase !== 'idle' && statusMsg && (
        <div
          role="status"
          aria-live="polite"
          className={`flex items-start gap-3 p-4 rounded-lg border text-sm ${
            phase === 'success'
              ? 'border-emerald-600 bg-emerald-600/10 text-emerald-400'
              : phase === 'error'
              ? 'border-rose-600 bg-rose-600/10 text-rose-400'
              : 'border-cyan-600 bg-cyan-600/10 text-cyan-400'
          }`}
        >
          {phase === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />}
          {phase === 'error'   && <XCircle      className="w-5 h-5 shrink-0 mt-0.5" />}
          {busy                && <Loader2      className="w-5 h-5 shrink-0 mt-0.5 animate-spin" />}
          {phase === 'uploading' && !busy && <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />}
          <div className="min-w-0">
            <p className="font-semibold leading-snug">{statusMsg}</p>
            {jobId && (
              <p className="text-[10px] font-mono mt-1 opacity-70 break-all">Job: {jobId}</p>
            )}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={!file || busy}
          className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {busy ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> {phase === 'uploading' ? 'Uploading…' : 'Processing…'}</>
          ) : (
            <><Upload className="w-4 h-4" /> Upload &amp; Extract</>
          )}
        </button>

        {(phase === 'success' || phase === 'error') && (
          <button onClick={reset} className="btn-secondary px-4">
            Reset
          </button>
        )}
      </div>

      {/* Instructions */}
      <details className="text-xs text-[var(--text-muted)] space-y-1">
        <summary className="cursor-pointer font-semibold text-[var(--text-secondary)] select-none">
          How it works
        </summary>
        <ul className="mt-2 list-disc list-inside space-y-1 pl-1">
          <li>Select year, session, subject — then pick the PDF from your machine.</li>
          <li>The file is base64-encoded and sent to the Windmill <code>pdf_vision_extractor</code> job.</li>
          <li>Windmill renders each page at 200 DPI, crops figures, uploads them to Supabase Storage (<code>exam_assets</code>), and calls Gemini 1.5 Flash.</li>
          <li>Any previous questions for this exam are wiped first to prevent stale data.</li>
          <li>Validated JSON is upserted into <code>questions</code> + <code>question_choices</code> tables.</li>
          <li>On success the app automatically reloads questions from Supabase.</li>
          <li>Requires <code>VITE_WINDMILL_TOKEN</code> in <code>.env</code>.</li>
        </ul>
      </details>
    </div>
  );
};

export default PdfUploadPanel;
