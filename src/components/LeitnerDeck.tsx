import React, { useState } from 'react';
import { SubjectAQuestion, LeitnerState } from '../types/exam';
import { getDaysToExam, isQuestionDueToday } from '../utils/leitnerEngine';
import { Repeat, Calendar, CheckCircle2, XCircle, Award, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LeitnerDeckProps {
  questions: SubjectAQuestion[];
  leitnerStates: Record<string, LeitnerState>;
  onAnswerLogged: (questionId: string, isCorrect: boolean, timeSeconds: number) => void;
}

export const LeitnerDeck: React.FC<LeitnerDeckProps> = ({
  questions,
  leitnerStates,
  onAnswerLogged
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [startTime] = useState<number>(Date.now());

  const daysToExam = getDaysToExam();

  // Filter questions that are due today according to Leitner engine
  const dueQuestions = questions.filter((q) => isQuestionDueToday(leitnerStates[q.id]));
  const currentQ = dueQuestions[currentIdx] || dueQuestions[0];

  // Calculate Leitner Box Distribution count (Box 1 - 5)
  const boxCounts = [1, 2, 3, 4, 5].map((boxNum) => {
    return Object.values(leitnerStates).filter((st) => st.currentBox === boxNum).length;
  });

  const handleSelectOption = (idx: number) => {
    if (!currentQ || selectedOpt !== null) return;
    setSelectedOpt(idx);

    const isCorrect = idx === currentQ.correctIndex;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    onAnswerLogged(currentQ.id, isCorrect, timeSpent);

    if (isCorrect) {
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.7 } });
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    if (currentIdx < dueQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner & Box Distribution */}
      <div className="glass-panel p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Repeat className="w-5 h-5 text-[var(--accent-emerald)]" />
              <span>Fixed-Date Leitner Spaced Repetition</span>
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Intervals dynamically compress as the October 25, 2026 exam approaches to eliminate memory decay.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold">
            <Clock className="w-4 h-4" />
            <span>Time to Exam: {daysToExam} Days</span>
          </div>
        </div>

        {/* Leitner Boxes Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-[var(--text-secondary)] mb-2">
            <span>Leitner Deck Mastery Distribution</span>
            <span>{dueQuestions.length} Questions Due Today</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((boxNum, idx) => (
              <div
                key={boxNum}
                className="p-3 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-color)] text-center space-y-1"
              >
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase">
                  Box {boxNum}
                </div>
                <div className="text-lg font-extrabold text-[var(--accent-emerald)] font-mono">
                  {boxCounts[idx]}
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  {boxNum === 1 ? '1 Day' : boxNum === 2 ? '3 Days' : boxNum === 3 ? '7 Days' : boxNum === 4 ? '14 Days' : '30 Days'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Review Flash Card */}
      {dueQuestions.length > 0 && currentQ ? (
        <div className="glass-panel p-6 space-y-6">
          <div className="flex items-center justify-between text-xs">
            <span className="badge badge-emerald">Due Card {currentIdx + 1} / {dueQuestions.length}</span>
            <span className="badge badge-cyan">{currentQ.subdomain}</span>
          </div>

          <div className="text-base font-semibold text-[var(--text-primary)] leading-relaxed">
            {currentQ.questionText}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isTargetCorrect = currentQ.correctIndex === idx;

              let style = 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]';
              if (selectedOpt !== null) {
                if (isTargetCorrect) {
                  style = 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold';
                } else if (isSelected) {
                  style = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400';
                } else {
                  style = 'opacity-40 border-[var(--border-color)]';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedOpt !== null}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center font-mono font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {selectedOpt !== null && isTargetCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {selectedOpt !== null && isSelected && !isTargetCorrect && <XCircle className="w-4 h-4 text-rose-500" />}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {selectedOpt !== null && (
            <div className="pt-3 flex justify-end">
              <button onClick={handleNext} className="btn-primary">
                Next Review Card
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="glass-panel p-8 text-center space-y-3">
          <Award className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="text-base font-bold text-[var(--text-primary)]">All Daily Cards Reviewed!</h3>
          <p className="text-xs text-[var(--text-muted)]">
            Great job! You have completed all scheduled active recall reviews for today.
          </p>
        </div>
      )}
    </div>
  );
};
