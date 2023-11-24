/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_TS: string;
  readonly VITE_API_HASH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
