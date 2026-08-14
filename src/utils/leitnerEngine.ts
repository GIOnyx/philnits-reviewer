/**
 * Time-Compressed Leitner Spaced Repetition Engine
 * Specifically optimized for the target ITPEC FE Examination date (October 25, 2026).
 */

import { LeitnerState } from '../types/exam';

export const TARGET_EXAM_DATE = '2026-10-25';

export function getDaysToExam(targetDateStr: string = TARGET_EXAM_DATE): number {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const diffDays = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

export function calculateNextInterval(currentBox: number, isCorrect: boolean, daysToExam: number): number {
  const intervals: Record<number, number> = { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 };
  
  if (!isCorrect) {
    return 1; // Immediate demotion to Box 1 for maximum active recall
  }

  const nextBox = Math.min(5, currentBox + 1);
  const standardInterval = intervals[nextBox] || 1;

  // If exam is within 14 days, apply extreme compression
  if (daysToExam <= 14) {
    return Math.max(1, Math.floor(0.3 * daysToExam));
  }
  
  // If standard interval exceeds 80% of remaining exam time, compress interval
  if (standardInterval >= daysToExam * 0.8) {
    return Math.max(1, Math.floor(0.5 * daysToExam));
  }

  return standardInterval;
}

export function updateLeitnerState(
  existingState: LeitnerState | undefined,
  questionId: string,
  isCorrect: boolean
): LeitnerState {
  const currentBox = existingState ? existingState.currentBox : 1;
  const daysToExam = getDaysToExam();
  
  const nextIntervalDays = calculateNextInterval(currentBox, isCorrect, daysToExam);
  
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + nextIntervalDays);
  const nextReviewDate = nextDate.toISOString().split('T')[0];

  const newBox = isCorrect ? Math.min(5, currentBox + 1) : 1;

  return {
    questionId,
    currentBox: newBox,
    nextReviewDate,
    lastReviewedAt: new Date().toISOString()
  };
}

export function isQuestionDueToday(leitnerState: LeitnerState | undefined): boolean {
  if (!leitnerState) return true; // Unseen questions are due immediately
  const today = new Date().toISOString().split('T')[0];
  return leitnerState.nextReviewDate <= today;
}
