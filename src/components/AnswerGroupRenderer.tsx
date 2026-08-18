/**
 * AnswerGroupRenderer — Adaptive answer choice renderer.
 *
 * Detects choice mode automatically:
 *  - Standard Mode  → radio-button-style card list (a–j)
 *  - Matrix Mode    → responsive comparison table with Blank A/B/C columns
 *
 * In both modes, providing `selectedLetter` + `correctLetter` + `isAnswered`
 * triggers immediate post-answer color feedback.
 */

import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { QuestionChoice } from '../types/exam';

interface AnswerGroupRendererProps {
  choices: QuestionChoice[];
  /** The letter the user has selected, or null if unanswered. */
  selectedLetter: string | null;
  /** The correct answer letter (lowercase). */
  correctLetter: string;
  /** Whether the question has been answered (locked, showing feedback). */
  isAnswered: boolean;
  /** Called when the user clicks a choice in interactive mode. */
  onSelect: (letter: string) => void;
}

// ──────────────────────────────────────────────────────────────────────────────
// Helper: detect matrix vs. standard mode
// ──────────────────────────────────────────────────────────────────────────────

function isMatrixMode(choices: QuestionChoice[]): boolean {
  return choices.some(
    (c) => c.blank_a != null || c.blank_b != null || c.blank_c != null
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Helper: derive per-choice visual state
// ──────────────────────────────────────────────────────────────────────────────

type ChoiceState = 'idle' | 'selected_correct' | 'selected_wrong' | 'correct_reveal' | 'dimmed';

function getChoiceState(
  letter: string,
  selectedLetter: string | null,
  correctLetter: string,
  isAnswered: boolean
): ChoiceState {
  if (!isAnswered) return 'idle';
  if (letter === correctLetter) return 'correct_reveal';
  if (letter === selectedLetter) return 'selected_wrong';
  return 'dimmed';
}

// ──────────────────────────────────────────────────────────────────────────────
// Standard mode card
// ──────────────────────────────────────────────────────────────────────────────

interface StandardCardProps {
  choice: QuestionChoice;
  state: ChoiceState;
  isAnswered: boolean;
  onSelect: (letter: string) => void;
}

const CARD_BASE = `
  w-full text-left p-3 rounded-xl border flex items-center justify-between gap-3
  text-sm transition-all duration-150 cursor-pointer
`.trim();

const CARD_STATE_CLASSES: Record<ChoiceState, string> = {
  idle:
    'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:shadow-sm',
  selected_correct:
    'border-emerald-500 bg-emerald-600 text-white font-semibold shadow-md',
  selected_wrong:
    'border-rose-500 bg-rose-600 text-white shadow-md',
  correct_reveal:
    'border-emerald-500 bg-emerald-600 text-white font-semibold shadow-md',
  dimmed:
    'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] opacity-40',
};

const StandardCard: React.FC<StandardCardProps> = ({ choice, state, isAnswered, onSelect }) => {
  const isCorrect = state === 'correct_reveal' || state === 'selected_correct';
  const isWrong   = state === 'selected_wrong';

  return (
    <button
      disabled={isAnswered}
      onClick={() => onSelect(choice.letter)}
      className={`${CARD_BASE} ${CARD_STATE_CLASSES[state]}`}
      aria-pressed={state === 'selected_correct' || state === 'selected_wrong'}
      aria-label={`Choice ${choice.letter.toUpperCase()}: ${choice.text ?? ''}`}
      id={`choice-${choice.letter}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        {/* Letter badge */}
        <span
          className={`
            w-6 h-6 rounded-md flex items-center justify-center
            text-[10px] font-bold font-mono shrink-0
            border transition-colors
            ${isCorrect
              ? 'bg-white text-emerald-600 border-white'
              : isWrong
              ? 'bg-white text-rose-600 border-white'
              : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-primary)]'
            }
          `}
        >
          {choice.letter}
        </span>

        {/* Choice text */}
        <span className="leading-snug break-words min-w-0 text-sm">
          {choice.text ?? ''}
        </span>
      </div>

      {/* Feedback icon */}
      {isAnswered && isCorrect && (
        <CheckCircle2 className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
      )}
      {isAnswered && isWrong && (
        <XCircle className="w-4 h-4 shrink-0 text-white" aria-hidden="true" />
      )}
    </button>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Matrix mode table
// ──────────────────────────────────────────────────────────────────────────────

interface MatrixRowProps {
  choice: QuestionChoice;
  state: ChoiceState;
  isAnswered: boolean;
  hasColA: boolean;
  hasColB: boolean;
  hasColC: boolean;
  onSelect: (letter: string) => void;
}

const ROW_STATE_CLASSES: Record<ChoiceState, string> = {
  idle:
    'hover:bg-[var(--bg-card-hover)] cursor-pointer text-[var(--text-primary)]',
  selected_correct:
    'bg-emerald-600 text-white font-semibold cursor-default',
  selected_wrong:
    'bg-rose-600 text-white cursor-default',
  correct_reveal:
    'bg-emerald-600 text-white font-semibold cursor-default',
  dimmed:
    'opacity-40 cursor-default text-[var(--text-primary)]',
};

const MatrixRow: React.FC<MatrixRowProps> = ({
  choice,
  state,
  isAnswered,
  hasColA,
  hasColB,
  hasColC,
  onSelect,
}) => {
  const isCorrect = state === 'correct_reveal' || state === 'selected_correct';
  const isWrong   = state === 'selected_wrong';

  return (
    <tr
      onClick={() => !isAnswered && onSelect(choice.letter)}
      className={`border-b border-[var(--border-color)] transition-colors ${ROW_STATE_CLASSES[state]}`}
      aria-selected={state === 'selected_correct' || state === 'selected_wrong'}
      role="row"
      id={`matrix-row-${choice.letter}`}
    >
      {/* Choice letter cell */}
      <td className="px-3 py-2.5 text-center">
        <span
          className={`
            inline-flex w-6 h-6 rounded-md items-center justify-center
            text-[10px] font-bold font-mono border transition-colors
            ${isCorrect
              ? 'bg-white text-emerald-600 border-white'
              : isWrong
              ? 'bg-white text-rose-600 border-white'
              : 'bg-[var(--bg-main)] border-[var(--border-color)] text-[var(--text-primary)]'
            }
          `}
        >
          {choice.letter}
        </span>
      </td>
      {hasColA && <td className="px-3 py-2.5 text-xs">{choice.blank_a ?? '—'}</td>}
      {hasColB && <td className="px-3 py-2.5 text-xs">{choice.blank_b ?? '—'}</td>}
      {hasColC && <td className="px-3 py-2.5 text-xs">{choice.blank_c ?? '—'}</td>}

      {/* Feedback icon */}
      <td className="px-3 py-2.5 text-center w-8">
        {isAnswered && isCorrect && (
          <CheckCircle2 className="w-4 h-4 text-white mx-auto" aria-hidden="true" />
        )}
        {isAnswered && isWrong && (
          <XCircle className="w-4 h-4 text-white mx-auto" aria-hidden="true" />
        )}
      </td>
    </tr>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Main export
// ──────────────────────────────────────────────────────────────────────────────

export const AnswerGroupRenderer: React.FC<AnswerGroupRendererProps> = ({
  choices,
  selectedLetter,
  correctLetter,
  isAnswered,
  onSelect,
}) => {
  const matrix = isMatrixMode(choices);

  // Determine which blank columns are actually used
  const hasColA = choices.some((c) => c.blank_a != null);
  const hasColB = choices.some((c) => c.blank_b != null);
  const hasColC = choices.some((c) => c.blank_c != null);

  if (matrix) {
    // ── Table Matrix Mode ────────────────────────────────────────────────────
    return (
      <div
        className="w-full overflow-x-auto rounded-xl border border-[var(--border-color)]"
        role="grid"
        aria-label="Answer choice matrix"
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--bg-card-hover)] text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
              <th className="px-3 py-2.5 text-center w-12">Choice</th>
              {hasColA && <th className="px-3 py-2.5">Blank A</th>}
              {hasColB && <th className="px-3 py-2.5">Blank B</th>}
              {hasColC && <th className="px-3 py-2.5">Blank C</th>}
              <th className="px-3 py-2.5 w-8" aria-label="Result" />
            </tr>
          </thead>
          <tbody>
            {choices.map((choice) => {
              const state = getChoiceState(choice.letter, selectedLetter, correctLetter, isAnswered);
              return (
                <MatrixRow
                  key={choice.letter}
                  choice={choice}
                  state={state}
                  isAnswered={isAnswered}
                  hasColA={hasColA}
                  hasColB={hasColB}
                  hasColC={hasColC}
                  onSelect={onSelect}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // ── Standard Mode ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-2" role="group" aria-label="Answer choices">
      {choices.map((choice) => {
        const state = getChoiceState(choice.letter, selectedLetter, correctLetter, isAnswered);
        return (
          <StandardCard
            key={choice.letter}
            choice={choice}
            state={state}
            isAnswered={isAnswered}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

export default AnswerGroupRenderer;
