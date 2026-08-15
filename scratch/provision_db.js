/**
 * DB Provisioning Script
 * Run with: node scratch/provision_db.js
 * Prints the SQL to run in Supabase Dashboard → SQL Editor.
 */

const SQL = `
-- 1. Users table (username + hashed password, no email needed)
CREATE TABLE IF NOT EXISTS local_users (
    username      TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS: users can only read their own row (inserts are open so anyone can register)
ALTER TABLE local_users ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='local_users' AND policyname='Anyone can insert'
  ) THEN
    CREATE POLICY "Anyone can insert" ON local_users FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='local_users' AND policyname='Read own row'
  ) THEN
    CREATE POLICY "Read own row" ON local_users FOR SELECT USING (true);
  END IF;
END $$;

-- 2. Leitner sync table (keyed by username, not auth.users UUID)
CREATE TABLE IF NOT EXISTS leitner_sync (
    username    TEXT PRIMARY KEY REFERENCES local_users(username) ON DELETE CASCADE,
    states      JSONB NOT NULL DEFAULT '{}',
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE leitner_sync ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename='leitner_sync' AND policyname='Open leitner access'
  ) THEN
    CREATE POLICY "Open leitner access" ON leitner_sync FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;
`;

console.log('── Run this SQL in your Supabase Dashboard → SQL Editor ─────────────────────');
console.log(SQL);
console.log('─────────────────────────────────────────────────────────────────────────────');
