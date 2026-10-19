/**
 * Supabase Sync Service — username-based auth (no email, no confirmation).
 * User accounts are stored in the `local_users` table in Supabase.
 * Leitner progress is stored in `leitner_sync` keyed by username.
 *
 * Auth is 100% local: credentials stored in localStorage after first login.
 * Supabase is only used for cloud sync of Leitner states.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import {
  LeitnerState,
  UserAnswerStats,
  UserPreferences,
  AiGeneratedQuestionRecord
} from '../types/exam';

const SUPABASE_URL: string = (
  (import.meta.env.VITE_SUPABASE_URL as string) ||
  (import.meta.env.NEXT_PUBLIC_SUPABASE_URL as string) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_URL ? process.env.SUPABASE_URL : '') ||
  ''
).trim();

const SUPABASE_ANON_KEY: string = (
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) ||
  (import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string) ||
  (import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string) ||
  (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string) ||
  (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY ? process.env.SUPABASE_ANON_KEY : '') ||
  ''
).trim();

export const isSupabaseConfigured = (): boolean =>
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith('https://'));

let _client: SupabaseClient | null = null;

function tryGetClient(): SupabaseClient | null {
  if (_client) return _client;
  if (!isSupabaseConfigured()) return null;
  try {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _client;
  } catch (err) {
    console.error('[Supabase] Failed to initialize client:', err);
    return null;
  }
}

export function getSupabaseClient(): SupabaseClient | null {
  return tryGetClient();
}

// ─── Simple hash (good enough for a study app, not a bank) ────────────────────
async function hashPassword(password: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(password)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// ─── Local session ─────────────────────────────────────────────────────────────
const SESSION_KEY = 'philnits_session';

export interface LocalUser {
  username: string;
}

export function getLocalSession(): LocalUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveLocalSession(user: LocalUser) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearLocalSession() {
  localStorage.removeItem(SESSION_KEY);
  // Also clear Leitner states so they don't leak to the next user
  localStorage.removeItem('philnits_leitner_states');
}

// ─── Auth ──────────────────────────────────────────────────────────────────────

export async function signUp(
  username: string,
  password: string
): Promise<{ user: LocalUser | null; error: string | null }> {
  const client = tryGetClient();
  if (!client) return { user: null, error: 'Cloud sync unavailable — Supabase not configured.' };

  if (!username.trim() || username.length < 3) {
    return { user: null, error: 'Username must be at least 3 characters.' };
  }
  if (password.length < 6) {
    return { user: null, error: 'Password must be at least 6 characters.' };
  }

  const hash = await hashPassword(password);

  // Check if username already taken
  const { data: existing } = await client
    .from('local_users')
    .select('username')
    .eq('username', username.toLowerCase())
    .maybeSingle();

  if (existing) return { user: null, error: 'Username already taken.' };

  const { error } = await client
    .from('local_users')
    .insert({ username: username.toLowerCase(), password_hash: hash });

  if (error) return { user: null, error: error.message };

  const user: LocalUser = { username: username.toLowerCase() };
  saveLocalSession(user);
  return { user, error: null };
}

export async function signIn(
  username: string,
  password: string
): Promise<{ user: LocalUser | null; error: string | null }> {
  const client = tryGetClient();
  if (!client) return { user: null, error: 'Cloud sync unavailable — Supabase not configured.' };

  const hash = await hashPassword(password);

  const { data, error } = await client
    .from('local_users')
    .select('username')
    .eq('username', username.toLowerCase())
    .eq('password_hash', hash)
    .maybeSingle();

  if (error) return { user: null, error: error.message };
  if (!data) return { user: null, error: 'Invalid username or password.' };

  const user: LocalUser = { username: data.username };
  saveLocalSession(user);
  return { user, error: null };
}

export function signOut(): void {
  clearLocalSession();
}

// ─── Leitner Cloud Sync ────────────────────────────────────────────────────────

export async function pullLeitnerState(
  username: string
): Promise<Record<string, LeitnerState> | null> {
  const client = tryGetClient();
  if (!client) return null;

  const { data, error } = await client
    .from('leitner_sync')
    .select('states')
    .eq('username', username)
    .maybeSingle();

  if (error) {
    console.error('[Supabase] pullLeitnerState error:', error.message);
    return null;
  }

  return data?.states ?? null;
}

export async function pushLeitnerState(
  username: string,
  states: Record<string, LeitnerState>
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('leitner_sync')
    .upsert(
      { username, states, updated_at: new Date().toISOString() },
      { onConflict: 'username' }
    );

  if (error) {
    console.error('[Supabase] pushLeitnerState error:', error.message);
    return false;
  }

  return true;
}

export async function logUserAnswer(
  username: string,
  questionId: string,
  isCorrect: boolean,
  timeTakenSeconds: number,
  examType: 'subject_a' | 'subject_b' | 'flashcard' | 'leitner'
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('user_answer_history')
    .insert({
      username,
      question_id: questionId,
      is_correct: isCorrect,
      time_taken_seconds: timeTakenSeconds,
      exam_type: examType
    });

  if (error) {
    console.error('[Supabase] logUserAnswer error:', error.message);
    return false;
  }

  return true;
}

export async function getUserAnswerStats(
  username: string,
  examType?: string
): Promise<UserAnswerStats | null> {
  const client = tryGetClient();
  if (!client) return null;

  let query = client
    .from('user_answer_history')
    .select('*')
    .eq('username', username);

  if (examType) {
    query = query.eq('exam_type', examType);
  }

  const { data, error } = await query;

  if (error) {
    console.error('[Supabase] getUserAnswerStats error:', error.message);
    return null;
  }

  if (!data || data.length === 0) return null;

  const totalAnswers = data.length;
  const correctAnswers = data.filter(a => a.is_correct).length;
  const accuracy = ((correctAnswers / totalAnswers) * 100).toFixed(2);
  const avgTimeSeconds = (data.reduce((sum, a) => sum + (a.time_taken_seconds || 0), 0) / totalAnswers).toFixed(2);

  return {
    totalAnswers,
    correctAnswers,
    accuracy,
    avgTimeSeconds,
    data
  };
}

export async function addBookmark(
  username: string,
  questionId: string
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('user_bookmarks')
    .insert({
      username,
      question_id: questionId
    });

  if (error && !error.message.includes('duplicate')) {
    console.error('[Supabase] addBookmark error:', error.message);
    return false;
  }

  return true;
}

export async function removeBookmark(
  username: string,
  questionId: string
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('user_bookmarks')
    .delete()
    .eq('username', username)
    .eq('question_id', questionId);

  if (error) {
    console.error('[Supabase] removeBookmark error:', error.message);
    return false;
  }

  return true;
}

export async function getUserBookmarks(username: string): Promise<string[]> {
  const client = tryGetClient();
  if (!client) return [];

  const { data, error } = await client
    .from('user_bookmarks')
    .select('question_id')
    .eq('username', username);

  if (error) {
    console.error('[Supabase] getUserBookmarks error:', error.message);
    return [];
  }

  return data?.map(b => b.question_id) || [];
}

export async function saveUserPreferences(
  username: string,
  preferences: {
    theme?: string;
    leitner_mode?: string;
    leitner_browse_box?: number;
    weak_area_spotlight?: boolean;
  }
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('user_preferences')
    .upsert(
      { username, ...preferences, updated_at: new Date().toISOString() },
      { onConflict: 'username' }
    );

  if (error) {
    console.error('[Supabase] saveUserPreferences error:', error.message);
    return false;
  }

  return true;
}

export async function getUserPreferences(username: string): Promise<UserPreferences | null> {
  const client = tryGetClient();
  if (!client) return null;

  const { data, error } = await client
    .from('user_preferences')
    .select('*')
    .eq('username', username)
    .maybeSingle();

  if (error) {
    console.error('[Supabase] getUserPreferences error:', error.message);
    return null;
  }

  return data as UserPreferences | null;
}

export async function trackQuestionAttempt(
  username: string,
  questionId: string,
  isAiGenerated: boolean = false
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('question_attempt_tracking')
    .upsert(
      {
        username,
        question_id: questionId,
        is_ai_generated: isAiGenerated,
        attempt_count: client.rpc('increment_attempt_count', { username, question_id: questionId }),
        last_attempted: new Date().toISOString()
      },
      { onConflict: 'username,question_id' }
    );

  if (error) {
    console.error('[Supabase] trackQuestionAttempt error:', error.message);
    return false;
  }

  return true;
}

export async function getBaseQuestionProgress(
  username: string
): Promise<{ baseAttempted: number; allBaseQuestionsAttempted: boolean }> {
  const client = tryGetClient();
  if (!client) return { baseAttempted: 0, allBaseQuestionsAttempted: false };

  const { data, error } = await client
    .from('question_attempt_tracking')
    .select('question_id, is_ai_generated')
    .eq('username', username)
    .eq('is_ai_generated', false);

  if (error) {
    console.error('[Supabase] getBaseQuestionProgress error:', error.message);
    return { baseAttempted: 0, allBaseQuestionsAttempted: false };
  }

  const baseAttempted = data?.length || 0;
  // Assuming there are ~600 base questions total - adjust as needed
  const totalBaseQuestions = 600;
  const allBaseQuestionsAttempted = baseAttempted >= totalBaseQuestions;

  return { baseAttempted, allBaseQuestionsAttempted };
}

export async function saveAiGeneratedQuestion(
  username: string,
  questionType: 'subject_a' | 'subject_b',
  topic: string,
  questionData: Record<string, unknown>
): Promise<boolean> {
  const client = tryGetClient();
  if (!client) return false;

  const { error } = await client
    .from('ai_generated_questions')
    .insert({
      username,
      question_type: questionType,
      topic,
      question_data: questionData
    });

  if (error) {
    console.error('[Supabase] saveAiGeneratedQuestion error:', error.message);
    return false;
  }

  return true;
}

export async function getUserAiQuestions(
  username: string,
  questionType?: string
): Promise<AiGeneratedQuestionRecord[]> {
  const client = tryGetClient();
  if (!client) return [];

  let query = client
    .from('ai_generated_questions')
    .select('*')
    .eq('username', username)
    .order('created_at', { ascending: false });

  if (questionType) {
    query = query.eq('question_type', questionType);
  }

  const { data, error } = await query;

  if (error) {
    console.error('[Supabase] getUserAiQuestions error:', error.message);
    return [];
  }

  return (data as AiGeneratedQuestionRecord[]) || [];
}
