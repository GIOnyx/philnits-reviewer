/**
 * Mastery-based Progress Tracker
 * Tracks questions until answered correctly 3 times in a row.
 */

import { MasteryState } from '../types/exam';

const MASTERY_THRESHOLD = 3;
const STORAGE_KEY = 'philnits_mastery_states';
const QUESTION_INDEX_KEY = 'philnits_question_indices'; // For persisting current question index across tabs

export function updateMasteryState(
  existingState: MasteryState | undefined,
  questionId: string,
  isCorrect: boolean
): MasteryState {
  const currentStreak = existingState?.consecutiveCorrect || 0;
  const totalAttempts = (existingState?.totalAttempts || 0) + 1;

  let newStreak = isCorrect ? currentStreak + 1 : 0;
  const isMastered = newStreak >= MASTERY_THRESHOLD;

  // Cap at threshold
  if (newStreak > MASTERY_THRESHOLD) newStreak = MASTERY_THRESHOLD;

  return {
    questionId,
    consecutiveCorrect: newStreak,
    isMastered,
    totalAttempts,
    lastAttemptedAt: new Date().toISOString()
  };
}

export function isMastered(state: MasteryState | undefined): boolean {
  return state?.isMastered || false;
}

export function getStoredMasteryStates(): Record<string, MasteryState> {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveMasteryStates(states: Record<string, MasteryState>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
}

export function getMasteryProgress(states: Record<string, MasteryState>): {
  total: number;
  mastered: number;
  inProgress: number;
  percentMastered: number;
} {
  const allStates = Object.values(states);
  const total = allStates.length;
  const mastered = allStates.filter(s => s.isMastered).length;
  const inProgress = total - mastered;
  const percentMastered = total > 0 ? Math.round((mastered / total) * 100) : 0;

  return { total, mastered, inProgress, percentMastered };
}


// ============================================================================
// Question Index Persistence - Maintains question position across tab switches
// ============================================================================

interface QuestionIndices {
  subject_a?: number;
  subject_b?: number;
  leitner?: number;
  flashcards?: number;
}

export function getStoredQuestionIndices(): QuestionIndices {
  const raw = localStorage.getItem(QUESTION_INDEX_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveQuestionIndex(tab: 'subject_a' | 'subject_b' | 'leitner' | 'flashcards', index: number): void {
  const current = getStoredQuestionIndices();
  current[tab] = index;
  localStorage.setItem(QUESTION_INDEX_KEY, JSON.stringify(current));
}

export function getQuestionIndex(tab: 'subject_a' | 'subject_b' | 'leitner' | 'flashcards'): number {
  const indices = getStoredQuestionIndices();
  return indices[tab] ?? 0;
}
