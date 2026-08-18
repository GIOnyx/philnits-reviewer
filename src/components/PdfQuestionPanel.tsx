import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from 'lucide-react';

interface PdfQuestionPanelProps {
  title: string;
  examYear: number;
  pdfUrl?: string;
  initialPage?: number;
  focusLabel?: string;
}

export const PdfQuestionPanel: React.FC<PdfQuestionPanelProps> = ({
  title,
  examYear,
  pdfUrl,
  initialPage = 1,
  focusLabel,
}) => {
  const [page, setPage] = useState(Math.max(1, initialPage));

  useEffect(() => {
    setPage(Math.max(1, initialPage));
  }, [initialPage, pdfUrl]);

  const viewerUrl = useMemo(() => {
    if (!pdfUrl) return '';
    return `${pdfUrl}#page=${page}&view=FitH`;
  }, [pdfUrl, page]);

  return (
    <div className="glass-panel p-4 sm:p-5 space-y-4 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--border-color)] pb-3">
        <div className="flex items-center gap-2 min-w-0">
          <FileText className="w-5 h-5 text-[var(--accent-cyan)] shrink-0" />
          <h2 className="text-sm sm:text-base font-bold text-[var(--text-primary)] truncate">
            {title}
          </h2>
        </div>

        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-[var(--text-primary)] shrink-0">
          {examYear} Exam
        </span>
      </div>

      {pdfUrl ? (
        <>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <button
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={page <= 1}
                className="px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-xs font-semibold flex items-center gap-1 disabled:opacity-40"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Page
              </button>
              <span className="w-14 text-center text-xs font-mono font-bold text-[var(--text-primary)]">
                {page}
              </span>
              <button
                onClick={() => setPage((current) => current + 1)}
                className="px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-xs font-semibold flex items-center gap-1"
              >
                Page
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <a
              href={viewerUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-xs font-semibold flex items-center gap-1.5 hover:border-[var(--border-hover)]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open PDF
            </a>
          </div>

          {focusLabel && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 px-3.5 py-2 text-sm font-bold text-amber-900">
              {focusLabel}
            </div>
          )}

          <div className="h-[72vh] min-h-[520px] rounded-lg overflow-hidden border border-[var(--border-color)] bg-white">
            <iframe
              key={viewerUrl}
              title={`${title} PDF page ${page}`}
              src={viewerUrl}
              className="w-full h-full bg-white"
            />
          </div>
        </>
      ) : (
        <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-sm text-[var(--text-secondary)]">
          PDF source is not available for this scenario.
        </div>
      )}
    </div>
  );
};

export default PdfQuestionPanel;
