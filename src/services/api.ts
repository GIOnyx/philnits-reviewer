/**
 * Hybrid API Client for PhilNITS Reviewer Application
 * Connects to deployed Windmill endpoints (Heroku instance) or falls back to Seed Data.
 */

import { SEED_SUBJECT_A_QUESTIONS } from '../data/seed/subjectA_questions';
import { SEED_SUBJECT_B_SCENARIOS } from '../data/seed/subjectB_scenarios';
import { SEED_ANKI_FLASHCARDS } from '../data/seed/anki_flashcards';
import { SubjectAQuestion, SubjectBScenario, AnkiFlashcard, LeitnerState } from '../types/exam';
import { updateLeitnerState } from '../utils/leitnerEngine';

const WINDMILL_BASE_URL = import.meta.env.VITE_WINDMILL_BASE_URL || 'https://nameless-meadow-94317-9b68fe10ea55.herokuapp.com';
const WINDMILL_WORKSPACE = import.meta.env.VITE_WINDMILL_WORKSPACE || 'main';
const WINDMILL_TOKEN = import.meta.env.VITE_WINDMILL_TOKEN || '';

export class PhilnitsApiService {
  // Check if live Windmill token is configured
  private static isWindmillConfigured(): boolean {
    return Boolean(WINDMILL_TOKEN && WINDMILL_TOKEN.length > 5);
  }

  // Fetch Subject A Questions
  public static async getSubjectAQuestions(): Promise<SubjectAQuestion[]> {
    if (this.isWindmillConfigured()) {
      try {
        const res = await fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run_wait_result/f/exam/get_morning_questions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) return data;
        }
      } catch (err) {
        console.warn('Windmill API fallback to local seed data:', err);
      }
    }
    return SEED_SUBJECT_A_QUESTIONS;
  }

  // Fetch Subject B Scenarios
  public static async getSubjectBScenarios(): Promise<SubjectBScenario[]> {
    if (this.isWindmillConfigured()) {
      try {
        const res = await fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run_wait_result/f/exam/get_pm_scenarios`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          }
        });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) return data;
        }
      } catch (err) {
        console.warn('Windmill API fallback to local seed scenarios:', err);
      }
    }
    return SEED_SUBJECT_B_SCENARIOS;
  }

  // Fetch Anki Flashcards
  public static async getFlashcards(): Promise<AnkiFlashcard[]> {
    return SEED_ANKI_FLASHCARDS;
  }

  // Log user answer telemetry & update Leitner state
  public static async logTelemetry(
    questionId: string,
    isCorrect: boolean,
    timeTakenSeconds: number,
    existingLeitnerStates: Record<string, LeitnerState>
  ): Promise<Record<string, LeitnerState>> {
    // Local storage persistence
    const updatedState = updateLeitnerState(existingLeitnerStates[questionId], questionId, isCorrect);
    const newLeitnerMap = {
      ...existingLeitnerStates,
      [questionId]: updatedState
    };

    localStorage.setItem('philnits_leitner_states', JSON.stringify(newLeitnerMap));

    // Optional telemetry ping to Windmill if configured
    if (this.isWindmillConfigured()) {
      try {
        fetch(`${WINDMILL_BASE_URL}/api/w/${WINDMILL_WORKSPACE}/jobs/run/f/exam/log_telemetry`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WINDMILL_TOKEN}`
          },
          body: JSON.stringify({ questionId, isCorrect, timeTakenSeconds })
        }).catch(() => {});
      } catch (e) {
        // silent
      }
    }

    return newLeitnerMap;
  }

  public static getStoredLeitnerStates(): Record<string, LeitnerState> {
    const raw = localStorage.getItem('philnits_leitner_states');
    if (!raw) return {};
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
}
