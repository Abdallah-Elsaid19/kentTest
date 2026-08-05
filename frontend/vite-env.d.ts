/// <reference types="vite/client" />

declare const __BASE_PATH__: string;

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_TURNSTILE_SITE_KEY?: string;
  readonly VITE_COMMERCE_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
