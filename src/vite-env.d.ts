/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Windmill
  readonly VITE_WINDMILL_BASE_URL: string;
  readonly VITE_WINDMILL_WORKSPACE: string;
  readonly VITE_WINDMILL_TOKEN: string;
  readonly VITE_GEMINI_API_KEY: string;

  // Supabase (VITE_ prefix for local dev via .env)
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;

  // Supabase (NEXT_PUBLIC_ prefix injected by Vercel in production)
  readonly NEXT_PUBLIC_SUPABASE_URL?: string;
  readonly NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  readonly NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
