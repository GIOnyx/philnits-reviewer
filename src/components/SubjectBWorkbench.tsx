import React, { useState } from 'react';
import { SubjectBScenario } from '../types/exam';
import { TraceTableGrid } from './TraceTableGrid';
import { FileText, Code, CheckCircle, XCircle, ChevronRight, ChevronLeft, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubjectBWorkbenchProps {
  scenarios: SubjectBScenario[];
  onAnswerLogged: (questionId: string, isCorrect: boolean, timeSeconds: number) => void;
}

export const SubjectBWorkbench: React.FC<SubjectBWorkbenchProps> = ({ scenarios, onAnswerLogged }) => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [activeSubQIdx, setActiveSubQIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [startTime] = useState<number>(Date.now());

  const currentScenario = scenarios[activeScenarioIdx] || scenarios[0];
  const currentSubQ = currentScenario?.subQuestions[activeSubQIdx];

  const selectedIdx = currentSubQ ? selectedAnswers[currentSubQ.questionId] : undefined;
  const isAnswered = selectedIdx !== undefined;
  const isCorrect = isAnswered && selectedIdx === currentSubQ?.correctIndex;

  const handleSelectOption = (idx: number) => {
    if (!currentSubQ || isAnswered) return;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    
    setSelectedAnswers((prev) => ({ ...prev, [currentSubQ.questionId]: idx }));
    const correct = idx === currentSubQ.correctIndex;
    onAnswerLogged(currentSubQ.questionId, correct, timeSpent);

    if (correct) {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }
  };

  if (!currentScenario) {
    return <div className="p-8 text-center glass-panel">No Subject B scenarios found.</div>;
  }

  return (
    <div className="space-y-6">
      
      {/* Scenario Selector Header */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap">
            Scenario Selector:
          </span>
          {scenarios.map((scen, idx) => (
            <button
              key={scen.scenarioId}
              onClick={() => {
                setActiveScenarioIdx(idx);
                setActiveSubQIdx(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                activeScenarioIdx === idx
                  ? 'bg-[var(--accent-cyan)] text-white shadow-sm'
                  : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Scenario {idx + 1}: {scen.domain}
            </button>
          ))}
        </div>

        <div className="text-xs text-[var(--text-muted)] font-mono">
          Year: {currentScenario.examYear} | Sub-questions: {currentScenario.subQuestions.length}
        </div>
      </div>

      {/* Main Split Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Pane: Long-form Reading Context & Pseudocode (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-panel p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-3">
              <FileText className="w-5 h-5 text-[var(--accent-cyan)]" />
              <h2 className="text-base font-bold text-[var(--text-primary)]">
                {currentScenario.title}
              </h2>
            </div>

            {/* Markdown Context Body */}
            <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap font-sans">
              {currentScenario.contextMarkdown}
            </div>
          </div>
        </div>

        {/* Right Pane: Sub-question Workbench & Trace Table (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 space-y-6">
            
            {/* Subquestion Pagination Pills */}
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
                Question {activeSubQIdx + 1} of {currentScenario.subQuestions.length}
              </span>

              <div className="flex items-center gap-1">
                {currentScenario.subQuestions.map((_, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => setActiveSubQIdx(qIdx)}
                    className={`w-6 h-6 rounded-full text-xs font-bold font-mono transition-colors ${
                      activeSubQIdx === qIdx
                        ? 'bg-[var(--accent-emerald)] text-white'
                        : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:bg-[var(--border-color)]'
                    }`}
                  >
                    {qIdx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Subquestion Prompt */}
            {currentSubQ && (
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                  {currentSubQ.prompt}
                </p>

                {/* Subquestion Pseudocode block if present */}
                {currentSubQ.requiresPseudocode && currentSubQ.pseudocodeBlock && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[var(--accent-cyan)] uppercase tracking-wider flex items-center gap-1">
                      <Code className="w-3 h-3" /> ITPEC Pseudocode Snippet
                    </span>
                    <div className="pseudocode-container">
                      {currentSubQ.pseudocodeBlock}
                    </div>
                  </div>
                )}

                {/* Interactive Trace Table Grid if specified */}
                {currentSubQ.traceTableSpec && (
                  <TraceTableGrid spec={currentSubQ.traceTableSpec} />
                )}

                {/* Multiple Choice Options */}
                <div className="space-y-2 pt-2">
                  {currentSubQ.options.map((opt, idx) => {
                    const letter = String.fromCharCode(65 + idx);
                    const isSelected = selectedIdx === idx;
                    const isTargetCorrect = currentSubQ.correctIndex === idx;

                    let optStyle = 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]';
                    if (isAnswered) {
                      if (isTargetCorrect) {
                        optStyle = 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold';
                      } else if (isSelected) {
                        optStyle = 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400';
                      } else {
                        optStyle = 'border-[var(--border-color)] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-3 rounded-lg border flex items-center justify-between text-xs transition-all ${optStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center font-mono font-bold text-[10px]">
                            {letter}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isAnswered && isTargetCorrect && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                        {isAnswered && isSelected && !isTargetCorrect && <XCircle className="w-4 h-4 text-rose-500" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {isAnswered && (
                  <div className="p-3.5 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-[var(--accent-cyan)] uppercase tracking-wider text-[10px]">
                      <Lightbulb className="w-3.5 h-3.5" /> Solution Rationale
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {currentSubQ.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
