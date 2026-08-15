/**
 * Supabase Sync Service — username-based auth (no email, no confirmation).
 * User accounts are stored in the `local_users` table in Supabase.
 * Leitner progress is stored in `leitner_sync` keyed by username.
 *
 * Auth is 100% local: credentials stored in localStorage after first login.
 * Supabase is only used for cloud sync of Leitner states.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { LeitnerState } from '../types/exam';

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) || '';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || '';

export const isSupabaseConfigured = (): boolean =>
  Boolean(SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL.startsWith('https://'));

let _client: SupabaseClient | null = null;

function tryGetClient(): SupabaseClient | null {
  if (_client) return _client;
  if (!isSupabaseConfigured()) return null;
  try {
    _client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _client;
  } catch {
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
