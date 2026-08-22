import React, { useState } from 'react';
import { SubjectBScenario, MasteryState, QuestionChoice } from '../types/exam';
import { TraceTableGrid } from './TraceTableGrid';
import { QuestionCard } from './QuestionCard';
import { PdfQuestionPanel } from './PdfQuestionPanel';
import { ChevronRight, ChevronLeft, Sparkles, RotateCcw, CheckSquare } from 'lucide-react';
import { PhilnitsApiService } from '../services/api';
import { isMastered, saveQuestionIndex, getQuestionIndex } from '../utils/masteryEngine';
import { registerKeyboardHandlers, clearKeyboardHandlers } from '../utils/globalKeyboardShortcuts';

interface SubjectBWorkbenchProps {
  scenarios: SubjectBScenario[];
  masteryStates: Record<string, MasteryState>;
  onAnswerLogged: (questionId: string, isCorrect: boolean, timeSeconds: number) => void;
  onAddDynamicScenario?: (scenario: SubjectBScenario) => void;
}

const LOCAL_STORAGE_SUBJECT_B_KEY = 'philnits_subject_b_answers';

export const SubjectBWorkbench: React.FC<SubjectBWorkbenchProps> = ({ 
  scenarios,
  masteryStates,
  onAnswerLogged,
  onAddDynamicScenario
}) => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(() => getQuestionIndex('subject_b'));
  const [activeSubQIdx, setActiveSubQIdx] = useState<number>(0);
  
  // Persistent selected answers from localStorage
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SUBJECT_B_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [startTime] = useState<number>(Date.now());

  // Filter state for scenario selector UI
  const [selectedYearFilter, setSelectedYearFilter] = useState<string>('All');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('All');

  // AI Dynamic Scenario Generator states
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [genError, setGenError] = useState<string | null>(null);

  // Compute available years and domains from scenarios
  const availableYears = Array.from(new Set(scenarios.map(s => s.examYear))).sort((a, b) => b - a);
  const availableDomains = Array.from(new Set(scenarios.map(s => s.domain)));

  // Progress metrics across all subquestions
  const allSubQuestions = scenarios.flatMap(s => s.subQuestions);
  const totalSubQuestionsCount = allSubQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const answeredPercentage = totalSubQuestionsCount > 0 ? Math.round((answeredCount / totalSubQuestionsCount) * 100) : 0;

  // Filter scenarios based on year and domain filters
  const filteredScenarios = scenarios.filter(s => {
    const matchYear = selectedYearFilter === 'All' || s.examYear === Number(selectedYearFilter);
    const matchDomain = selectedDomainFilter === 'All' || s.domain === selectedDomainFilter;
    return matchYear && matchDomain;
  });

  const activeScenario = scenarios[activeScenarioIdx];
  const activeFilteredIdx = filteredScenarios.findIndex(
    s => s.scenarioId === activeScenario?.scenarioId
  );

  React.useEffect(() => {
    if (filteredScenarios.length === 0) return;
    if (activeFilteredIdx !== -1) return;

    const nextGlobalIdx = scenarios.findIndex(
      s => s.scenarioId === filteredScenarios[0].scenarioId
    );
    if (nextGlobalIdx !== -1) {
      setActiveScenarioIdx(nextGlobalIdx);
      setActiveSubQIdx(0);
    }
  }, [activeFilteredIdx, filteredScenarios, scenarios]);

  // Save selected answer to state & localStorage
  const saveSubjectBAnswer = (questionId: string, optionIdx: number) => {
    setSelectedAnswers((prev) => {
      const updated = { ...prev, [questionId]: optionIdx };
      try {
        localStorage.setItem(LOCAL_STORAGE_SUBJECT_B_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save Subject B answer:', err);
      }
      return updated;
    });
  };

  const handleClearSubjectBAnswers = () => {
    if (window.confirm('Reset all saved answers for Subject B scenarios?')) {
      setSelectedAnswers({});
      try {
        localStorage.removeItem(LOCAL_STORAGE_SUBJECT_B_KEY);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Persist current question index
  React.useEffect(() => {
    saveQuestionIndex('subject_b', activeScenarioIdx);
  }, [activeScenarioIdx]);

  React.useEffect(() => {
    const cleanup = registerKeyboardHandlers({
      answerSelection: (optionIndex: number) => {
        handleSelectOption(optionIndex);
      },
      nextCard: () => {
        setActiveSubQIdx(prev => Math.min((scenarios[activeScenarioIdx]?.subQuestions.length ?? 1) - 1, prev + 1));
      },
      prevCard: () => {
        if (activeSubQIdx > 0) {
          setActiveSubQIdx(prev => prev - 1);
        }
      }
    });

    return () => {
      cleanup();
      clearKeyboardHandlers();
    };
  }, [activeSubQIdx, activeScenarioIdx, scenarios]);

  const handleGenerateAiScenario = async () => {
    setIsGenerating(true);
    setGenError(null);
    try {
      const domain = currentScenario ? currentScenario.domain : 'Algorithms & Data Structures';
      const newScenario = await PhilnitsApiService.generateDynamicQuestion(domain, true);
      
      if (newScenario && newScenario.scenarioId && newScenario.subQuestions?.length > 0) {
        const markedScenario = {
          ...newScenario,
          isAiGenerated: true,
          examYear: newScenario.examYear || 2026
        };
        if (onAddDynamicScenario) {
          onAddDynamicScenario(markedScenario);
          setActiveScenarioIdx(0);
          setActiveSubQIdx(0);
        }
      } else {
        throw new Error('Malformed scenario generated by AI.');
      }
    } catch (err: any) {
      console.error('Error generating AI scenario:', err);
      setGenError(err?.message || 'Failed to generate scenario. Please check VITE_GEMINI_API_KEY configuration.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrevScenario = () => {
    if (activeFilteredIdx > 0) {
      const prevScenario = filteredScenarios[activeFilteredIdx - 1];
      const prevGlobalIdx = scenarios.findIndex(s => s.scenarioId === prevScenario.scenarioId);
      if (prevGlobalIdx !== -1) {
        setActiveScenarioIdx(prevGlobalIdx);
        setActiveSubQIdx(0);
      }
    }
  };

  const handleNextScenario = () => {
    if (activeFilteredIdx >= 0 && activeFilteredIdx < filteredScenarios.length - 1) {
      const nextScenario = filteredScenarios[activeFilteredIdx + 1];
      const nextGlobalIdx = scenarios.findIndex(s => s.scenarioId === nextScenario.scenarioId);
      if (nextGlobalIdx !== -1) {
        setActiveScenarioIdx(nextGlobalIdx);
        setActiveSubQIdx(0);
      }
    }
  };

  const currentScenario = activeScenario || scenarios[0];
  const currentSubQ = currentScenario?.subQuestions[activeSubQIdx];
  const scenarioQuestionNumber = currentScenario?.title.match(/Q(\d+)/)?.[1];

  React.useEffect(() => {
    if (!currentScenario) return;
    if (activeSubQIdx < currentScenario.subQuestions.length) return;
    setActiveSubQIdx(0);
  }, [activeSubQIdx, currentScenario]);

  const selectedIdx = currentSubQ ? selectedAnswers[currentSubQ.questionId] : undefined;
  const isAnswered = selectedIdx !== undefined;

  /**
   * Legacy index-based handler (used by keyboard shortcut registration).
   * Maps option index to lowercase letter then delegates to handleSelectLetter.
   */
  const handleSelectOption = (idx: number) => {
    if (!currentSubQ || isAnswered) return;
    const letter = String.fromCharCode(97 + idx);
    handleSelectLetter(letter);
  };

  /** Primary handler used by QuestionCard (letter-based). */
  const handleSelectLetter = (letter: string) => {
    if (!currentSubQ) return;
    const idx = letter.charCodeAt(0) - 97; // 'a'→0, 'b'→1, …
    if (selectedAnswers[currentSubQ.questionId] !== undefined) return;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    saveSubjectBAnswer(currentSubQ.questionId, idx);
    const correct = idx === currentSubQ.correctIndex;
    onAnswerLogged(currentSubQ.questionId, correct, timeSpent);
  };

  /**
   * Convert a SubjectBSubQuestion's string options array into QuestionChoice[]
   * for use with AnswerGroupRenderer inside QuestionCard.
   * Options that contain tab-separated blanks (e.g. "value1\tvalue2\tvalue3")
   * are auto-parsed into blank_a/b/c fields.
   */
  const buildChoices = (options: string[], letterOnly = false): QuestionChoice[] => {
    return options.map((opt, idx) => {
      const letter = String.fromCharCode(97 + idx);
      if (letterOnly) {
        return {
          letter,
          text: `Option ${letter.toUpperCase()}`,
          blank_a: null,
          blank_b: null,
          blank_c: null,
        };
      }

      // Strip leading letter prefix like 'a) ' before further processing
      const cleaned = opt.replace(/^[a-j]\)\s*/i, '').trim();
      // Detect tab-separated multi-blank format
      const parts = cleaned.split('\t');
      if (parts.length >= 2) {
        return {
          letter,
          text: null,
          blank_a: parts[0]?.trim() ?? null,
          blank_b: parts[1]?.trim() ?? null,
          blank_c: parts[2]?.trim() ?? null,
        };
      }
      return { letter, text: cleaned, blank_a: null, blank_b: null, blank_c: null };
    });
  };

  if (!currentScenario) {
    return <div className="p-8 text-center glass-panel">No Subject B scenarios found.</div>;
  }

  return (
    <div className="space-y-6">
      {genError && (
        <div className="p-3.5 rounded-lg border border-rose-600 bg-rose-500 text-white text-xs font-semibold flex items-center justify-between shadow-sm animate-pulse">
          <span>{genError}</span>
          <button onClick={() => setGenError(null)} className="text-[10px] underline hover:opacity-80 cursor-pointer">Dismiss</button>
        </div>
      )}
      
      {/* Improved Scenario Selector & Progress Panel */}
      <div className="glass-panel p-5 space-y-4 shadow-sm">
        {/* Top Control Bar: Filters, Persistence Stats & Stepper */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-3">
          
          {/* Year Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider whitespace-nowrap">
              Year:
            </span>
            <button
              onClick={() => {
                setSelectedYearFilter('All');
                const matched = scenarios.filter(s => selectedDomainFilter === 'All' || s.domain === selectedDomainFilter);
                if (matched.length > 0) {
                  const idx = scenarios.findIndex(s => s.scenarioId === matched[0].scenarioId);
                  if (idx !== -1) { setActiveScenarioIdx(idx); setActiveSubQIdx(0); }
                }
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                selectedYearFilter === 'All'
                  ? 'bg-[var(--accent-cyan)] text-white'
                  : 'bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]'
              }`}
            >
              All ({scenarios.length})
            </button>
            {availableYears.map(year => {
              const count = scenarios.filter(s => s.examYear === year).length;
              return (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYearFilter(String(year));
                    const matched = scenarios.filter(s => s.examYear === year && (selectedDomainFilter === 'All' || s.domain === selectedDomainFilter));
                    if (matched.length > 0) {
                      const idx = scenarios.findIndex(s => s.scenarioId === matched[0].scenarioId);
                      if (idx !== -1) { setActiveScenarioIdx(idx); setActiveSubQIdx(0); }
                    }
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    selectedYearFilter === String(year)
                      ? 'bg-[var(--accent-cyan)] text-white'
                      : 'bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                  }`}
                >
                  {year} ({count})
                </button>
              );
            })}
          </div>

          {/* Domain Filter Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider whitespace-nowrap">
              Domain:
            </span>
            <select
              value={selectedDomainFilter}
              onChange={(e) => {
                const dom = e.target.value;
                setSelectedDomainFilter(dom);
                const matched = scenarios.filter(s => (selectedYearFilter === 'All' || s.examYear === Number(selectedYearFilter)) && (dom === 'All' || s.domain === dom));
                if (matched.length > 0) {
                  const idx = scenarios.findIndex(s => s.scenarioId === matched[0].scenarioId);
                  if (idx !== -1) { setActiveScenarioIdx(idx); setActiveSubQIdx(0); }
                }
              }}
              className="bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-md text-xs px-2.5 py-1 focus:outline-none focus:border-[var(--accent-cyan)] cursor-pointer"
            >
              <option value="All">All Domains ({availableDomains.length})</option>
              {availableDomains.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Answer Persistence Progress Stats */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-2 text-xs font-mono">
              <CheckSquare className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
              <span className="text-[var(--text-primary)] font-semibold">
                Answered: {answeredCount} / {totalSubQuestionsCount} ({answeredPercentage}%)
              </span>
              <div className="w-20 h-2 bg-[var(--bg-card-hover)] rounded-full overflow-hidden border border-[var(--border-color)] hidden sm:block">
                <div 
                  className="h-full bg-[var(--accent-emerald)] transition-all duration-300"
                  style={{ width: `${answeredPercentage}%` }}
                />
              </div>
            </div>

            {answeredCount > 0 && (
              <button
                onClick={handleClearSubjectBAnswers}
                className="text-[11px] font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                title="Reset all saved Subject B answers"
              >
                <RotateCcw className="w-3 h-3" /> Reset Answers
              </button>
            )}

            {/* AI Generator Button */}
            <button
              onClick={handleGenerateAiScenario}
              disabled={isGenerating}
              className="btn-primary text-xs py-1 px-3 flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-sm border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0 whitespace-nowrap"
              title="Generate a brand new Subject B scenario using Gemini"
            >
              <Sparkles className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''} shrink-0`} />
              {isGenerating ? 'Generating...' : 'Gen AI Scenario'}
            </button>
          </div>
        </div>

        {/* Dropdown Selector & Direct Stepper Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[280px]">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider whitespace-nowrap">
              Select Scenario:
            </span>
            <select
              value={activeScenarioIdx}
              onChange={(e) => {
                setActiveScenarioIdx(Number(e.target.value));
                setActiveSubQIdx(0);
              }}
              className="w-full bg-[var(--bg-card-hover)] text-[var(--text-primary)] border border-[var(--border-color)] rounded-lg text-xs p-2 font-semibold focus:outline-none focus:border-[var(--accent-cyan)] cursor-pointer truncate"
            >
              {filteredScenarios.map((scen) => {
                const globalIdx = scenarios.findIndex(s => s.scenarioId === scen.scenarioId);
                const isFullyAnswered = scen.subQuestions.every(sq => selectedAnswers[sq.questionId] !== undefined);
                const isMasteredState = isMastered(masteryStates[scen.scenarioId]);
                
                let badge = '';
                if (isMasteredState) badge = '🏆 ';
                else if (isFullyAnswered) badge = '✓ ';

                return (
                  <option key={scen.scenarioId} value={globalIdx}>
                    {badge}[{scen.examYear}] Scenario {globalIdx + 1}: {scen.title}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevScenario}
              disabled={activeFilteredIdx <= 0}
              className="px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-xs font-semibold flex items-center gap-1 hover:bg-[var(--border-color)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>

            <span className="text-xs font-mono font-bold text-[var(--text-primary)] px-2">
              {activeFilteredIdx >= 0 ? activeFilteredIdx + 1 : 0} / {filteredScenarios.length}
            </span>

            <button
              onClick={handleNextScenario}
              disabled={activeFilteredIdx < 0 || activeFilteredIdx >= filteredScenarios.length - 1}
              className="px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] text-xs font-semibold flex items-center gap-1 hover:bg-[var(--border-color)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Pane Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Pane: PDF-backed question source (Col 7) */}
        <div className="lg:col-span-7 space-y-4">
          {(currentScenario as any).isAiGenerated || currentScenario.scenarioId.startsWith('ai_') || String(currentScenario.examYear).includes('2026') ? (
            <div className="glass-panel p-4 flex items-center justify-between bg-purple-500/10 border-purple-500/30 overflow-x-auto">
              <div className="flex items-center gap-2 shrink-0">
                <span className="badge bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center gap-1 font-semibold shrink-0 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-purple-400 animate-pulse shrink-0" />
                  AI Generated Scenario
                </span>
                <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">Dynamically generated via Gemini AI</span>
              </div>
            </div>
          ) : null}
          <PdfQuestionPanel
            title={currentScenario.title}
            examYear={currentScenario.examYear}
            pdfUrl={currentScenario.pdfUrl}
            initialPage={currentScenario.pdfPage}
            focusLabel={scenarioQuestionNumber ? `Look for Q${scenarioQuestionNumber} in the PDF` : undefined}
          />
        </div>

        {/* Right Pane: Sub-question Workbench via QuestionCard (Col 5) */}
        <div className="lg:col-span-5 space-y-4">

          {/* Sub-question pagination pills */}
          <div className="glass-panel p-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Question {activeSubQIdx + 1} of {currentScenario.subQuestions.length}
            </span>
            <div className="flex items-center gap-1.5">
              {currentScenario.subQuestions.map((sq, qIdx) => {
                const sqAnswered = selectedAnswers[sq.questionId] !== undefined;
                return (
                  <button
                    key={qIdx}
                    onClick={() => setActiveSubQIdx(qIdx)}
                    className={`w-6 h-6 rounded-full text-xs font-bold font-mono transition-colors flex items-center justify-center ${
                      activeSubQIdx === qIdx
                        ? 'bg-[var(--accent-emerald)] text-white'
                        : sqAnswered
                        ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/50'
                        : 'bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:bg-[var(--border-color)]'
                    }`}
                  >
                    {sqAnswered ? '✓' : qIdx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* QuestionCard — renders prompt, pseudo-code, choices, explanation */}
          {currentSubQ && (
            <>
              <QuestionCard
                key={`${currentScenario.scenarioId}-${activeSubQIdx}`}
                questionNumber={currentSubQ.questionNumber}
                questionText={
                  currentScenario.pdfUrl
                    ? `Subquestion ${currentSubQ.questionNumber}`
                    : currentSubQ.prompt
                }
                pseudoCode={
                  !currentScenario.pdfUrl && currentSubQ.requiresPseudocode && currentSubQ.pseudocodeBlock
                    ? currentSubQ.pseudocodeBlock
                    : null
                }
                diagramDescription={null}
                choices={buildChoices(currentSubQ.options, Boolean(currentScenario.pdfUrl))}
                correctLetter={String.fromCharCode(97 + currentSubQ.correctIndex)}
                explanation={currentSubQ.explanation}
                onAnswer={(letter) => handleSelectLetter(letter)}
                preSelectedLetter={
                  selectedIdx !== undefined
                    ? String.fromCharCode(97 + selectedIdx)
                    : null
                }
              />

              {/* Trace Table (when traceTableSpec is set on this sub-question) */}
              {currentSubQ.traceTableSpec && (
                <TraceTableGrid spec={currentSubQ.traceTableSpec} />
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
