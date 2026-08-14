import React, { useState } from 'react';
import { SubjectAQuestion, DomainCategory } from '../types/exam';
import { CheckCircle2, XCircle, HelpCircle, Bookmark, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubjectAExamProps {
  questions: SubjectAQuestion[];
  onAnswerLogged: (questionId: string, isCorrect: boolean, timeSeconds: number) => void;
  filterSubdomain?: string;
  onClearFilter?: () => void;
}

export const SubjectAExam: React.FC<SubjectAExamProps> = ({ 
  questions, 
  onAnswerLogged,
  filterSubdomain,
  onClearFilter
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [startTime] = useState<number>(Date.now());

  // Filter questions by category OR subdomain
  const filteredQuestions = questions.filter((q) => {
    if (filterSubdomain) {
      return q.subdomain.toLowerCase().includes(filterSubdomain.toLowerCase()) || 
             q.category.toLowerCase().includes(filterSubdomain.toLowerCase());
    }
    if (selectedCategory === 'All') return true;
    return q.category === selectedCategory;
  });

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const selectedIdx = currentQ ? selectedOptions[currentQ.id] : undefined;
  const isAnswered = selectedIdx !== undefined;
  const isCorrect = isAnswered && selectedIdx === currentQ?.correctIndex;

  const handleSelectOption = (idx: number) => {
    if (!currentQ || isAnswered) return; // Prevent changing after selection
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    
    setSelectedOptions((prev) => ({ ...prev, [currentQ.id]: idx }));
    setShowExplanations((prev) => ({ ...prev, [currentQ.id]: true }));

    const correct = idx === currentQ.correctIndex;
    onAnswerLogged(currentQ.id, correct, timeSpent);

    if (correct) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (!currentQ) {
    return (
      <div className="p-8 text-center glass-panel space-y-4">
        <p className="text-[var(--text-secondary)]">No practice questions available for topic: "{filterSubdomain || selectedCategory}".</p>
        <button onClick={onClearFilter || (() => setSelectedCategory('All'))} className="btn-primary">
          Show All Practice Questions
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Filter & Progress Bar */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {filterSubdomain ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                Active Topic Filter: {filterSubdomain}
              </span>
              {onClearFilter && (
                <button onClick={onClearFilter} className="btn-secondary text-[11px] py-0.5 px-2">
                  Clear
                </button>
              )}
            </div>
          ) : (
            <>
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                Category Filter:
              </span>
              {['All', 'Technology', 'Management', 'Strategy'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentIndex(0);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[var(--accent-emerald)] text-white'
                      : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs font-medium text-[var(--text-secondary)]">
          <span>Question {currentIndex + 1} of {filteredQuestions.length}</span>
          <button
            onClick={() => toggleBookmark(currentQ.id)}
            className={`p-1.5 rounded-md border border-[var(--border-color)] transition-colors ${
              bookmarkedIds.has(currentQ.id)
                ? 'text-amber-500 bg-amber-500/10 border-amber-500/30'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title="Bookmark for review"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="glass-panel p-6 space-y-6">
        
        {/* Meta badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge badge-emerald">{currentQ.category}</span>
            <span className="badge badge-cyan">{currentQ.subdomain}</span>
            <span className="text-xs text-[var(--text-muted)]">Exam Year: {currentQ.examYear}</span>
          </div>
          {isAnswered && (
            <span className={`badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}`}>
              {isCorrect ? 'Correct (+1)' : 'Incorrect (Demoted to Box 1)'}
            </span>
          )}
        </div>

        {/* Question Text */}
        <div className="text-base sm:text-lg font-medium text-[var(--text-primary)] leading-relaxed">
          {currentQ.questionText}
        </div>

        {/* Options Grid */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const isSelected = selectedIdx === idx;
            const isTargetCorrect = currentQ.correctIndex === idx;

            let optionStyle = 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]';
            if (isAnswered) {
              if (isTargetCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold';
              } else if (isSelected) {
                optionStyle = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400';
              } else {
                optionStyle = 'border-[var(--border-color)] opacity-50';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center text-xs font-bold font-mono">
                    {letter}
                  </span>
                  <span className="text-sm">{opt}</span>
                </div>
                {isAnswered && isTargetCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                {isAnswered && isSelected && !isTargetCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Rationale Explanation Box */}
        {showExplanations[currentQ.id] && (
          <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" /> Explanation & Solution Rationale
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="btn-secondary disabled:opacity-40"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === filteredQuestions.length - 1}
          className="btn-primary disabled:opacity-40"
        >
          Next Question <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
