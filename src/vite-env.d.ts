/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WINDMILL_BASE_URL: string;
  readonly VITE_WINDMILL_WORKSPACE: string;
  readonly VITE_WINDMILL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
