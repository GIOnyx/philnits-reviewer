/**
 * QuestionCard — Unified question display card for both Subject A and B.
 *
 * Composes:
 *   - Question number badge + scenario text (parsed markdown)
 *   - Optional diagram description block
 *   - PseudoCodeViewer (when pseudo-code is present)
 *   - AnswerGroupRenderer (standard or matrix mode)
 *   - Immediate feedback panel with explanation on answer reveal
 *
 * Keyboard shortcuts: pressing letter keys 'a'–'j' selects the matching choice.
 */

import React, { useCallback, useEffect, useState } from 'react';
import { HelpCircle, FileImage, Hash } from 'lucide-react';
import { QuestionChoice } from '../types/exam';
import { PseudoCodeViewer } from './PseudoCodeViewer';
import { AnswerGroupRenderer } from './AnswerGroupRenderer';
import { MarkdownContent } from './MarkdownContent';

interface QuestionCardProps {
  /** 1-based question number displayed in the header badge. */
  questionNumber: number;
  /** Full question prompt text (supports the app's markdown subset). */
  questionText: string;
  /** Raw ITPEC pseudo-code string. Omit or pass null to hide the viewer. */
  pseudoCode?: string | null;
  /** Textual description of an accompanying diagram / figure. */
  diagramDescription?: string | null;
  /** Ordered list of answer choices. */
  choices: QuestionChoice[];
  /** Correct answer letter (lowercase). */
  correctLetter: string;
  /** Explanation shown after answering. */
  explanation?: string | null;
  /**
   * Called once when the user selects an answer.
   * `isCorrect` is computed internally for convenience.
   */
  onAnswer: (letter: string, isCorrect: boolean) => void;
  /**
   * Optionally pre-select a letter (for restoring persisted state).
   * Setting this puts the card into the "already answered" state immediately.
   */
  preSelectedLetter?: string | null;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  questionText,
  pseudoCode,
  diagramDescription,
  choices,
  correctLetter,
  explanation,
  onAnswer,
  preSelectedLetter = null,
}) => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(
    preSelectedLetter ?? null
  );
  const isAnswered = selectedLetter !== null;
  const isCorrect  = isAnswered && selectedLetter === correctLetter;

  const handleSelect = useCallback(
    (letter: string) => {
      if (isAnswered) return;
      setSelectedLetter(letter);
      onAnswer(letter, letter === correctLetter);
    },
    [isAnswered, correctLetter, onAnswer]
  );

  // ── Keyboard shortcut handler ──────────────────────────────────────────────
  useEffect(() => {
    const validLetters = new Set(choices.map((c) => c.letter));

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if focus is inside an input / textarea
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

      const key = e.key.toLowerCase();
      if (validLetters.has(key)) {
        handleSelect(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [choices, handleSelect]);

  // ── Reset when question changes ────────────────────────────────────────────
  useEffect(() => {
    setSelectedLetter(preSelectedLetter ?? null);
  }, [questionNumber, preSelectedLetter]);

  return (
    <div className="glass-panel p-6 space-y-5 shadow-sm">

      {/* ── Header: Question number + inline correct/incorrect badge ── */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span
            className="
              inline-flex items-center gap-1 px-2.5 py-1
              rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-color)]
              text-[10px] font-bold font-mono uppercase tracking-widest
              text-[var(--text-muted)]
            "
            aria-label={`Question number ${questionNumber}`}
          >
            <Hash className="w-3 h-3" aria-hidden="true" />
            Q{questionNumber}
          </span>
        </div>

        {isAnswered && (
          <span
            className={`
              badge text-xs font-semibold
              ${isCorrect ? 'badge-emerald' : 'badge-rose'}
            `}
            role="status"
            aria-live="polite"
          >
            {isCorrect ? '✓ Correct' : '✗ Incorrect'}
          </span>
        )}
      </div>

      {/* ── Question Text (ReactMarkdown-enabled) ── */}
      <MarkdownContent content={questionText} className="space-y-4 leading-relaxed" />

      {/* ── Diagram Description (if present) ── */}
      {diagramDescription && (
        <div
          className="
            flex items-start gap-2.5
            p-3 rounded-lg border border-[var(--border-color)]
            bg-[var(--bg-card-hover)] text-xs text-[var(--text-secondary)]
            leading-relaxed
          "
          role="note"
          aria-label="Diagram description"
        >
          <FileImage
            className="w-4 h-4 text-[var(--accent-cyan)] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p>{diagramDescription}</p>
        </div>
      )}

      {/* ── ITPEC Pseudo-code Viewer (if present) ── */}
      {pseudoCode && (
        <PseudoCodeViewer code={pseudoCode} />
      )}

      {/* ── Answer Choices ── */}
      <div className="pt-1">
        <p
          className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2"
          aria-hidden="true"
        >
          {choices.some((c) => c.blank_a != null || c.blank_b != null || c.blank_c != null)
            ? 'Select the row that fills all blanks correctly:'
            : 'Select the correct answer:'}
        </p>
        <AnswerGroupRenderer
          choices={choices}
          selectedLetter={selectedLetter}
          correctLetter={correctLetter}
          isAnswered={isAnswered}
          onSelect={handleSelect}
        />
      </div>

      {/* ── Explanation Panel (revealed after answering) ── */}
      {isAnswered && explanation && (
        <div
          className="
            p-4 rounded-xl border space-y-2 animate-fade-in
            border-[var(--border-color)] bg-[var(--bg-card-hover)]
          "
          role="region"
          aria-label="Explanation"
        >
          <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--accent-amber)] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span>Explanation & Solution Rationale</span>
          </div>
          
          {/* Explanation text parsed using ReactMarkdown */}
          <MarkdownContent content={explanation} className="text-xs" />
          
          <div className="pt-1 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span className="font-semibold">Correct answer:</span>
            <span
              className="
                inline-flex w-6 h-6 rounded-md items-center justify-center
                bg-emerald-600 text-white text-[10px] font-bold font-mono
              "
              aria-label={`Correct answer is ${correctLetter}`}
            >
              {correctLetter}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
