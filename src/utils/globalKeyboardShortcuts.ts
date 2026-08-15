/**
 * Global Keyboard Shortcuts Manager
 * Handles keyboard shortcuts across all tabs (Subject A, B, Leitner, Flashcards)
 */

type KeyboardHandler = (key: string) => void;

interface KeyboardShortcutMap {
  answerSelection?: (optionIndex: number) => void; // A/B/C/D
  nextCard?: () => void; // Arrow Right
  prevCard?: () => void; // Arrow Left
  bookmark?: () => void; // B
  toggleFlip?: () => void; // Space (for flashcards)
}

let currentHandlers: KeyboardShortcutMap = {};

/**
 * Register keyboard handlers for the current tab/component
 * Should be called in useEffect for each component that needs keyboard shortcuts
 */
export function registerKeyboardHandlers(handlers: KeyboardShortcutMap): () => void {
  // Store handlers
  currentHandlers = handlers;

  // Global keydown listener
  const handleKeyPress = (e: KeyboardEvent) => {
    // Don't intercept if user is typing in an input
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
      return;
    }

    // A/B/C/D - Answer selection
    const keyUpper = e.key.toUpperCase();
    if (['A', 'B', 'C', 'D'].includes(keyUpper) && currentHandlers.answerSelection) {
      const optionIndex = keyUpper.charCodeAt(0) - 'A'.charCodeAt(0); // 0-3
      currentHandlers.answerSelection(optionIndex);
      e.preventDefault();
      return;
    }

    // Arrow Right - Next card
    if (e.key === 'ArrowRight' && currentHandlers.nextCard) {
      currentHandlers.nextCard();
      e.preventDefault();
      return;
    }

    // Arrow Left - Previous card
    if (e.key === 'ArrowLeft' && currentHandlers.prevCard) {
      currentHandlers.prevCard();
      e.preventDefault();
      return;
    }

    // B - Bookmark (only if not selected another answer option, use alt to avoid conflict with A/B/C/D)
    if (e.key.toLowerCase() === 'b' && e.shiftKey && currentHandlers.bookmark) {
      currentHandlers.bookmark();
      e.preventDefault();
      return;
    }

    // Space - Toggle flip (for flashcards)
    if (e.code === 'Space' && currentHandlers.toggleFlip) {
      currentHandlers.toggleFlip();
      e.preventDefault();
      return;
    }
  };

  // Attach listener
  window.addEventListener('keydown', handleKeyPress);

  // Return cleanup function
  return () => {
    window.removeEventListener('keydown', handleKeyPress);
    currentHandlers = {};
  };
}

/**
 * Clear all registered handlers when switching tabs
 */
export function clearKeyboardHandlers(): void {
  currentHandlers = {};
}

/**
 * Get display string for keyboard shortcut hint
 */
export function getKeyboardHint(action: string): string {
  const hints: Record<string, string> = {
    answerA: 'A',
    answerB: 'B',
    answerC: 'C',
    answerD: 'D',
    next: '→',
    prev: '←',
    bookmark: 'Shift+B',
    flip: 'Space',
  };
  return hints[action] || '';
}
