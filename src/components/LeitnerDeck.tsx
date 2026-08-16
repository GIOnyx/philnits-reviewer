import React, { useState, useEffect } from 'react';
import { SubjectAQuestion, LeitnerState, MasteryState } from '../types/exam';
import { getDaysToExam, isQuestionDueToday } from '../utils/leitnerEngine';
import { Repeat, Calendar, CheckCircle2, XCircle, Award, Clock, Grid3x3, Play, Star, TrendingDown } from 'lucide-react';
import { registerKeyboardHandlers, clearKeyboardHandlers } from '../utils/globalKeyboardShortcuts';
import { saveQuestionIndex, getQuestionIndex, getStoredMasteryStates } from '../utils/masteryEngine';
import { parseMarkdownToHtml } from '../utils/markdown';

type StudyMode = 'study' | 'browse';

interface LeitnerDeckProps {
  questions: SubjectAQuestion[];
  leitnerStates: Record<string, LeitnerState>;
  masteryStates?: Record<string, MasteryState>;
  onAnswerLogged: (questionId: string, isCorrect: boolean, timeSeconds: number) => void;
}

const BOX_INTERVALS = ['1 Day', '3 Days', '7 Days', '14 Days', '30 Days'];

export const LeitnerDeck: React.FC<LeitnerDeckProps> = ({
  questions,
  leitnerStates,
  masteryStates: incomingMasteryStates,
  onAnswerLogged
}) => {
  // Use incoming mastery states or load from localStorage
  const masteryStates = incomingMasteryStates || getStoredMasteryStates();
  // Mode and box selection state
  const [mode, setMode] = useState<StudyMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('leitner-mode') as StudyMode) || 'study';
    }
    return 'study';
  });
  const [browseBox, setBrowseBox] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('leitner-browse-box') || '1');
    }
    return 1;
  });

  // Study mode state
  const [currentIdx, setCurrentIdx] = useState<number>(() => getQuestionIndex('leitner'));
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [startTime] = useState<number>(Date.now());
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());

  // Browse mode state
  const [selectedCard, setSelectedCard] = useState<SubjectAQuestion | null>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('leitner-browse-selected-card');
      if (stored) {
        try {
          const cardId = JSON.parse(stored);
          return questions.find(q => q.id === cardId) || null;
        } catch {
          return null;
        }
      }
    }
    return null;
  });
  const [browseSelectedOpt, setBrowseSelectedOpt] = useState<number | null>(null);

  // Bookmarks state
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('leitner-bookmarks');
      return new Set(stored ? JSON.parse(stored) : []);
    }
    return new Set();
  });

  // Exam year filter
  const [selectedYears, setSelectedYears] = useState<Set<number>>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('leitner-exam-years');
      return new Set(stored ? JSON.parse(stored) : []);
    }
    return new Set();
  });

  // Weak area spotlight
  const [showWeakAreaSpotlight, setShowWeakAreaSpotlight] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('leitner-weak-area-spotlight');
      return stored ? JSON.parse(stored) : true;
    }
    return true;
  });

  // Persist mode changes to localStorage
  useEffect(() => {
    localStorage.setItem('leitner-mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('leitner-browse-box', browseBox.toString());
  }, [browseBox]);

  // Persist Leitner question index
  useEffect(() => {
    saveQuestionIndex('leitner', currentIdx);
  }, [currentIdx]);

  // Persist bookmarks
  useEffect(() => {
    localStorage.setItem('leitner-bookmarks', JSON.stringify(Array.from(bookmarkedIds)));
  }, [bookmarkedIds]);

  // Persist exam year filter
  useEffect(() => {
    localStorage.setItem('leitner-exam-years', JSON.stringify(Array.from(selectedYears)));
  }, [selectedYears]);

  // Persist weak area spotlight state
  useEffect(() => {
    localStorage.setItem('leitner-weak-area-spotlight', JSON.stringify(showWeakAreaSpotlight));
  }, [showWeakAreaSpotlight]);

  // Persist browse mode selected card
  useEffect(() => {
    if (selectedCard) {
      localStorage.setItem('leitner-browse-selected-card', JSON.stringify(selectedCard.id));
    } else {
      localStorage.removeItem('leitner-browse-selected-card');
    }
  }, [selectedCard?.id]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // A/B/C/D for answer selection (Study Mode) - use global state instead
      if (mode === 'study' && selectedOpt === null) {
        if (e.key.toUpperCase() === 'A') { handleSelectOption(0); e.preventDefault(); }
        if (e.key.toUpperCase() === 'B') { handleSelectOption(1); e.preventDefault(); }
        if (e.key.toUpperCase() === 'C') { handleSelectOption(2); e.preventDefault(); }
        if (e.key.toUpperCase() === 'D') { handleSelectOption(3); e.preventDefault(); }
      }

      // → for Next (Study Mode)
      if (mode === 'study' && e.key === 'ArrowRight' && selectedOpt !== null) {
        handleNext();
        e.preventDefault();
      }

      // ← for Previous (Study Mode)
      if (mode === 'study' && e.key === 'ArrowLeft' && currentIdx > 0 && selectedOpt === null) {
        setCurrentIdx(prev => prev - 1);
        e.preventDefault();
      }

      // B for Bookmark (any mode) - handled in the bookmark toggle
      // This is handled by the button click for clarity
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [mode, selectedOpt, currentIdx]);

  const daysToExam = getDaysToExam();

  // Study mode: Filter questions that are due today according to Leitner engine
  let dueQuestions = questions.filter((q) => {
    // Validate exam year is reasonable
    if (typeof q.examYear !== 'number' || q.examYear <= 0 || q.examYear > new Date().getFullYear() + 1) {
      return false;
    }
    return isQuestionDueToday(leitnerStates[q.id]) || answeredIds.has(q.id);
  });
  
  // Apply exam year filter
  if (selectedYears.size > 0) {
    dueQuestions = dueQuestions.filter((q) => selectedYears.has(q.examYear));
  }
  
  // Reset currentIdx if it exceeds the filtered question pool
  useEffect(() => {
    if (currentIdx >= dueQuestions.length && dueQuestions.length > 0) {
      setCurrentIdx(0);
    }
  }, [dueQuestions.length, currentIdx]);
  
  const currentQ = dueQuestions[currentIdx] || dueQuestions[0];

  // Browse mode: Get all cards in the selected box
  let browseQuestions = questions.filter((q) => {
    // Validate exam year
    if (typeof q.examYear !== 'number' || q.examYear <= 0 || q.examYear > new Date().getFullYear() + 1) {
      return false;
    }
    return leitnerStates[q.id]?.currentBox === browseBox;
  });
  
  // Apply exam year filter to browse mode
  if (selectedYears.size > 0) {
    browseQuestions = browseQuestions.filter((q) => selectedYears.has(q.examYear));
  }

  // Calculate Leitner Box Distribution count (Box 1 - 5)
  const boxCounts = [1, 2, 3, 4, 5].map((boxNum) => {
    return Object.values(leitnerStates).filter((st) => st.currentBox === boxNum).length;
  });

  // Get available exam years (with validation)
  const availableYears = Array.from(new Set(
    questions
      .map(q => q.examYear)
      .filter(year => typeof year === 'number' && year > 0 && year <= new Date().getFullYear() + 1)
  )).sort((a, b) => b - a);

  // Calculate domain accuracy for weak area spotlight using mastery data
  const calculateWeakAreas = () => {
    const domainStats: Record<string, { correct: number; total: number }> = {};
    
    questions.forEach(q => {
      if (!domainStats[q.subdomain]) {
        domainStats[q.subdomain] = { correct: 0, total: 0 };
      }
      domainStats[q.subdomain].total++;
      
      // Use mastery state to determine if question is mastered
      const masteryState = masteryStates[q.id];
      if (masteryState?.isMastered) {
        domainStats[q.subdomain].correct++;
      }
    });

    // Sort by accuracy (lowest first)
    return Object.entries(domainStats)
      .map(([domain, stats]) => ({
        domain,
        accuracy: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0,
        total: stats.total,
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
  };

  const weakAreas = calculateWeakAreas();

  // STUDY MODE HANDLERS
  const handleSelectOption = (idx: number) => {
    if (!currentQ || selectedOpt !== null) return;
    setSelectedOpt(idx);
    setAnsweredIds(prev => new Set(prev).add(currentQ.id));

    const isCorrect = idx === currentQ.correctIndex;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    onAnswerLogged(currentQ.id, isCorrect, timeSpent);
  };

  const handleNext = () => {
    setSelectedOpt(null);
    if (currentIdx < dueQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  // BROWSE MODE HANDLERS
  const handleBrowseCardClick = (card: SubjectAQuestion) => {
    setSelectedCard(card);
    setBrowseSelectedOpt(null);
  };

  const handleBrowseSelectOption = (idx: number) => {
    if (!selectedCard || browseSelectedOpt !== null) return;
    setBrowseSelectedOpt(idx);
    
    // Optional: Log answer for analytics
    const isCorrect = idx === selectedCard.correctIndex;
    onAnswerLogged(selectedCard.id, isCorrect, 0);
  };

  const handleCloseBrowseCard = () => {
    setSelectedCard(null);
    setBrowseSelectedOpt(null);
  };

  const toggleBookmark = (questionId: string) => {
    setBookmarkedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  // Render study mode
  const renderStudyMode = () => (
    <>
      {/* Daily Review Flash Card */}
      {dueQuestions.length > 0 && currentQ ? (
        <div className="glass-panel p-6 space-y-6">
          <div className="flex items-center justify-between text-xs flex-wrap gap-2">
            <span className="badge badge-emerald">Due Card {currentIdx + 1} / {dueQuestions.length}</span>
            <span className="badge badge-cyan">{currentQ.subdomain}</span>
            <span className="text-[10px] text-[var(--text-muted)]">{currentQ.examYear}</span>
            <button
              onClick={() => toggleBookmark(currentQ.id)}
              className={`ml-auto p-1.5 rounded-lg border transition-all ${
                bookmarkedIds.has(currentQ.id)
                  ? 'border-pink-600 bg-pink-500 text-white'
                  : 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:text-pink-500'
              }`}
              title="Bookmark (B)"
            >
              <Star className="w-4 h-4" fill={bookmarkedIds.has(currentQ.id) ? 'currentColor' : 'none'} />
            </button>
          </div>

          <div 
            className="text-base font-semibold text-[var(--text-primary)] text-left w-full space-y-3 font-sans"
            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(currentQ.questionText) }}
          />

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOpt === idx;
              const isTargetCorrect = currentQ.correctIndex === idx;

              let style = 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]';
              if (selectedOpt !== null) {
                if (isTargetCorrect) {
                  style = 'border-emerald-600 bg-emerald-600 text-white font-semibold';
                } else if (isSelected) {
                  style = 'border-rose-600 bg-rose-600 text-white';
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
                    <span className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold ${
                      selectedOpt !== null && isTargetCorrect ? 'bg-white text-emerald-600' :
                      selectedOpt !== null && isSelected ? 'bg-white text-rose-600' :
                      'bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-primary)]'
                    }`}>
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
    </>
  );

  // Render browse mode
  const renderBrowseMode = () => (
    <>
      {/* Box Selector */}
      <div className="glass-panel p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[var(--text-primary)]">Select Box to Browse</h3>
          <span className="text-xs text-[var(--text-muted)]">{browseQuestions.length} cards</span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((boxNum) => (
            <button
              key={boxNum}
              onClick={() => {
                setBrowseBox(boxNum);
                setSelectedCard(null);
              }}
              className={`p-3 rounded-lg border transition-all ${
                browseBox === boxNum
                  ? 'border-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10'
                  : 'border-[var(--border-color)] bg-[var(--bg-card-hover)] hover:border-[var(--border-hover)]'
              }`}
            >
              <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase">Box {boxNum}</div>
              <div className="text-lg font-extrabold text-[var(--accent-emerald)] font-mono">{boxCounts[boxNum - 1]}</div>
              <div className="text-[10px] text-[var(--text-muted)]">{BOX_INTERVALS[boxNum - 1]}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Browse Grid or Selected Card */}
      {selectedCard ? (
        <div className="glass-panel p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="badge badge-emerald">{selectedCard.subdomain}</span>
              <span className="text-xs text-[var(--text-muted)]">{selectedCard.examYear}</span>
            </div>
            <button
              onClick={handleCloseBrowseCard}
              className="text-xs px-3 py-1.5 rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] transition-all"
            >
              Back to Grid
            </button>
          </div>

          <div 
            className="text-base font-semibold text-[var(--text-primary)] text-left w-full space-y-3 font-sans"
            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(selectedCard.questionText) }}
          />

          {/* Options */}
          <div className="space-y-3">
            {selectedCard.options.map((opt, idx) => {
              const isSelected = browseSelectedOpt === idx;
              const isTargetCorrect = selectedCard.correctIndex === idx;

              let style = 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]';
              if (browseSelectedOpt !== null) {
                if (isTargetCorrect) {
                  style = 'border-emerald-600 bg-emerald-600 text-white font-semibold';
                } else if (isSelected) {
                  style = 'border-rose-600 bg-rose-600 text-white';
                } else {
                  style = 'opacity-40 border-[var(--border-color)]';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={browseSelectedOpt !== null}
                  onClick={() => handleBrowseSelectOption(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold ${
                      browseSelectedOpt !== null && isTargetCorrect ? 'bg-white text-emerald-600' :
                      browseSelectedOpt !== null && isSelected ? 'bg-white text-rose-600' :
                      'bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-primary)]'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {browseSelectedOpt !== null && isTargetCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {browseSelectedOpt !== null && isSelected && !isTargetCorrect && <XCircle className="w-4 h-4 text-rose-500" />}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {browseQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {browseQuestions.map((q) => (
                <div
                  key={q.id}
                  className="glass-panel p-4 text-left hover:border-[var(--accent-emerald)] transition-all group relative"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(q.id);
                    }}
                    className={`absolute top-3 right-3 p-1.5 rounded border transition-all ${
                      bookmarkedIds.has(q.id)
                        ? 'border-pink-600 bg-pink-500 text-white'
                        : 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:text-pink-500'
                    }`}
                    title="Bookmark (B)"
                  >
                    <Star className="w-3 h-3" fill={bookmarkedIds.has(q.id) ? 'currentColor' : 'none'} />
                  </button>
                  
                  <button
                    onClick={() => handleBrowseCardClick(q)}
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between mb-2 pr-6">
                      <span className="badge badge-sm badge-cyan text-xs">{q.subdomain}</span>
                      <span className="text-[10px] text-[var(--text-muted)]">{q.examYear}</span>
                    </div>
                    <p className="text-sm text-[var(--text-primary)] font-medium line-clamp-3 group-hover:text-[var(--accent-emerald)] transition-colors">
                      {q.questionText.replace(/[#*_`[\]()]/g, '').substring(0, 80)}...
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <Play className="w-3 h-3" />
                      <span>Click to review</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-panel p-8 text-center space-y-3">
              <Award className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-base font-bold text-[var(--text-primary)]">No Cards in Box {browseBox}</h3>
              <p className="text-xs text-[var(--text-muted)]">
                Try selecting a different box to view cards.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Header Banner & Mode Toggle */}
      <div className="glass-panel p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Repeat className="w-5 h-5 text-[var(--accent-emerald)]" />
              <span>Fixed-Date Leitner Spaced Repetition</span>
            </h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Intervals dynamically compress as the October 25, 2026 exam approaches to eliminate memory decay.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 border border-amber-600 text-white text-xs font-semibold">
              <Clock className="w-4 h-4" />
              <span>Time to Exam: {daysToExam} Days</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-500 border border-pink-600 text-white text-xs font-semibold cursor-pointer hover:opacity-90 transition-all" title={`${bookmarkedIds.size} bookmarks`}>
              <Star className="w-4 h-4" />
              <span>{bookmarkedIds.size}</span>
            </div>
            
            {/* Mode Toggle */}
            <div className="flex gap-1 p-1 rounded-lg bg-[var(--bg-card-hover)] border border-[var(--border-color)]">
              <button
                onClick={() => setMode('study')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  mode === 'study'
                    ? 'bg-[var(--accent-emerald)] text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                Study
              </button>
              <button
                onClick={() => setMode('browse')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  mode === 'browse'
                    ? 'bg-[var(--accent-emerald)] text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Grid3x3 className="w-3.5 h-3.5" />
                Browse
              </button>
            </div>
          </div>
        </div>

        {/* Exam Year Filter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase">Filter by Exam Year</h3>
            {selectedYears.size > 0 && (
              <button
                onClick={() => setSelectedYears(new Set())}
                className="text-xs text-blue-500 hover:text-blue-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {availableYears.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYears(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(year)) {
                      newSet.delete(year);
                    } else {
                      newSet.add(year);
                    }
                    return newSet;
                  });
                }}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all border ${
                  selectedYears.has(year)
                    ? 'border-[var(--accent-emerald)] bg-[var(--accent-emerald)] text-white'
                    : 'border-[var(--border-color)] bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Leitner Boxes Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-xs font-bold text-[var(--text-secondary)] mb-2">
            <span>Leitner Deck Mastery Distribution</span>
            <span>{mode === 'study' ? dueQuestions.length : browseQuestions.length} Questions</span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((boxNum, idx) => (
              <div
                key={boxNum}
                className={`p-3 rounded-lg border transition-all ${
                  mode === 'browse' && browseBox === boxNum
                    ? 'border-[var(--accent-emerald)] bg-[var(--accent-emerald)]/5'
                    : 'bg-[var(--bg-card-hover)] border-[var(--border-color)]'
                }`}
              >
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase">
                  Box {boxNum}
                </div>
                <div className="text-lg font-extrabold text-[var(--accent-emerald)] font-mono">
                  {boxCounts[boxNum - 1]}
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  {BOX_INTERVALS[idx]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weak Area Spotlight */}
      {showWeakAreaSpotlight && weakAreas.length > 0 && weakAreas[0].accuracy < 60 && (
        <div className="glass-panel p-4 border-l-4 border-amber-500 space-y-3 bg-amber-500/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-bold text-amber-600 dark:text-amber-400">
                🎯 Weak Area: {weakAreas[0].domain}
              </h3>
            </div>
            <button
              onClick={() => setShowWeakAreaSpotlight(false)}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            You're only {weakAreas[0].accuracy.toFixed(0)}% accurate in <strong>{weakAreas[0].domain}</strong>. 
            Practice {weakAreas[0].total} more questions to improve.
          </p>
          <button
            onClick={() => {
              setMode('browse');
              // Could add subdomain filter here in the future
            }}
            className="text-xs px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-all"
          >
            Practice Now →
          </button>
        </div>
      )}

      {/* Mode-specific content */}
      {mode === 'study' ? renderStudyMode() : renderBrowseMode()}
    </div>
  );
};
