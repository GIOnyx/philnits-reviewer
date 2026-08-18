import React, { useState } from 'react';
import { AnkiFlashcard, MasteryState } from '../types/exam';
import { Layers, RotateCcw, ArrowRight, ArrowLeft, Check, Sparkles, Trophy, Trash2 } from 'lucide-react';
import { MarkdownContent } from './MarkdownContent';
import { isMastered, saveMasteryStates } from '../utils/masteryEngine';
import { ConfirmationModal } from './ConfirmationModal';

interface FlashcardDeckProps {
  flashcards: AnkiFlashcard[];
  masteryStates: Record<string, MasteryState>;
  onAnswerLogged: (cardId: string, isCorrect: boolean, timeSeconds: number) => void;
}

export const FlashcardDeck: React.FC<FlashcardDeckProps> = ({ 
  flashcards,
  masteryStates,
  onAnswerLogged
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [localMasteryStates, setLocalMasteryStates] = useState<Record<string, MasteryState>>(masteryStates);
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  const handleResetProgress = () => {
    // Clear all mastery states for Flashcards
    saveMasteryStates({});
    setShowResetModal(false);
    setCurrentIdx(0);
    setIsFlipped(false);
    setLocalMasteryStates({});
  };

  // Extract unique topics
  const topics = ['All', ...Array.from(new Set(flashcards.map((c) => c.topic)))];

  // Filter out mastered cards
  const activeCards = flashcards.filter(c => !isMastered(localMasteryStates[c.id]));

  const filteredCards = activeCards.filter((c) => {
    if (selectedTopic === 'All') return true;
    return c.topic === selectedTopic;
  });

  const currentCard = filteredCards[currentIdx] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIdx < filteredCards.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const toggleMastered = (id: string) => {
    // Directly set mastery without going through answer logging (avoids batching issues)
    const newStates = {
      ...localMasteryStates,
      [id]: {
        questionId: id,
        consecutiveCorrect: 3,
        isMastered: true,
        totalAttempts: (localMasteryStates[id]?.totalAttempts || 0) + 1,
        lastAttemptedAt: new Date().toISOString()
      }
    };
    setLocalMasteryStates(newStates);
    saveMasteryStates(newStates);
    
    // Move to next card if current is now mastered
    // This ensures the UI updates immediately without requiring another click
    const newActiveCards = flashcards.filter(c => !isMastered(newStates[c.id]));
    const newFilteredCards = newActiveCards.filter((c) => {
      if (selectedTopic === 'All') return true;
      return c.topic === selectedTopic;
    });
    
    // If there are more cards, advance or stay at current index (clamped)
    if (newFilteredCards.length > 0) {
      const clampedIdx = Math.min(currentIdx, newFilteredCards.length - 1);
      setCurrentIdx(clampedIdx);
    } else {
      setCurrentIdx(0);
    }
    setIsFlipped(false);
  };

  if (!currentCard) {
    return <div className="p-8 text-center glass-panel">No flashcards found for selected topic.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Topic Filter */}
      <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap">
            Topic Filter:
          </span>
          {topics.map((top) => (
            <button
              key={top}
              onClick={() => {
                setSelectedTopic(top);
                setCurrentIdx(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedTopic === top
                  ? 'bg-[var(--accent-cyan)] text-white'
                  : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {top}
            </button>
          ))}
        </div>

        <span className="text-xs text-[var(--text-muted)] font-mono">
          Card {currentIdx + 1} of {filteredCards.length}
        </span>
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="glass-panel p-8 min-h-[300px] flex flex-col justify-between cursor-pointer border border-[var(--border-color)] hover:border-[var(--accent-cyan)] transition-all shadow-md group relative select-none"
      >
        <div className="flex items-center justify-between text-xs">
          <span className="badge badge-cyan flex items-center gap-1">
            <Layers className="w-3 h-3" /> {currentCard.topic}
          </span>
          <span className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors flex items-center gap-1">
            <RotateCcw className="w-3.5 h-3.5" /> Click card to flip
          </span>
        </div>

        {/* Card Content Side */}
        <div className="py-8 text-center space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-muted)] block">
            {isFlipped ? 'Answer / Explanation (Back)' : 'Question / Concept (Front)'}
          </span>

          <MarkdownContent 
            content={isFlipped ? currentCard.back : currentCard.front}
            className="text-base sm:text-lg font-medium text-left w-full space-y-3"
            cleanObsidian
          />

          {currentCard.codeSnippet && isFlipped && (
            <div className="pseudocode-container text-left mt-4 text-xs">
              {currentCard.codeSnippet}
            </div>
          )}
        </div>

        {/* Mastered Toggle Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-[var(--border-color)] text-xs">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMastered(currentCard.id);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors ${
              isMastered(localMasteryStates[currentCard.id])
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500'
                : 'bg-[var(--bg-card-hover)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            {isMastered(localMasteryStates[currentCard.id]) ? 'Mastered ✓' : 'Mark as Mastered'}
          </button>

          <span className="text-[var(--text-muted)] text-[11px]">
            {Object.values(localMasteryStates).filter(s => s.isMastered).length} Cards Mastered Total
          </span>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIdx === 0}
            className="btn-secondary disabled:opacity-40"
          >
            <ArrowLeft className="w-4 h-4" /> Previous Card
          </button>
          
          <button
            onClick={() => setShowResetModal(true)}
            className="btn-danger text-xs py-2 px-3 flex items-center gap-1.5"
            title="Reset all progress for Flashcards"
          >
            <Trash2 className="w-4 h-4" /> Reset Progress
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={currentIdx === filteredCards.length - 1}
          className="btn-primary disabled:opacity-40"
        >
          Next Card <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showResetModal}
        title="Reset Flashcard Progress?"
        message="This will clear all your mastery progress for Flashcards. You can undo this by refreshing the page if you haven't closed it yet."
        confirmText="Reset All"
        cancelText="Cancel"
        onConfirm={handleResetProgress}
        onCancel={() => setShowResetModal(false)}
        isDangerous={true}
      />
    </div>
  );
};
