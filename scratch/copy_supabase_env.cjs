// Copies NEXT_PUBLIC_SUPABASE_* from .env.local to .env as VITE_SUPABASE_*
// Run with: node scratch/copy_supabase_env.cjs

const fs = require('fs');
const path = require('path');

const envLocalPath = path.resolve(__dirname, '../.env.local');
const envPath = path.resolve(__dirname, '../.env');

const lines = fs.readFileSync(envLocalPath, 'utf8').split('\n');

function extractVal(lines, key) {
  const line = lines.find(l => l.startsWith(key + '='));
  if (!line) return null;
  let val = line.slice(key.length + 1).trim();
  // Strip surrounding double quotes
  if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
  return val;
}

const urlVal  = extractVal(lines, 'NEXT_PUBLIC_SUPABASE_URL');
const keyVal  = extractVal(lines, 'NEXT_PUBLIC_SUPABASE_ANON_KEY');

if (!urlVal || !keyVal) {
  console.error('Could not find NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local');
  process.exit(1);
}

console.log('URL length:', urlVal.length, '| starts with https:', urlVal.startsWith('https'));
console.log('KEY length:', keyVal.length);

const existing = fs.readFileSync(envPath, 'utf8');

if (existing.includes('VITE_SUPABASE_URL=')) {
  // Update in place
  const updated = existing
    .replace(/^VITE_SUPABASE_URL=.*/m, 'VITE_SUPABASE_URL=' + urlVal)
    .replace(/^VITE_SUPABASE_ANON_KEY=.*/m, 'VITE_SUPABASE_ANON_KEY=' + keyVal);
  fs.writeFileSync(envPath, updated);
  console.log('Updated existing VITE_SUPABASE_* entries in .env');
} else {
  const toAppend = '\n# Supabase (copied from Vercel .env.local)\nVITE_SUPABASE_URL=' + urlVal + '\nVITE_SUPABASE_ANON_KEY=' + keyVal + '\n';
  fs.appendFileSync(envPath, toAppend);
  console.log('Appended VITE_SUPABASE_* to .env');
}
