/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_GOOGLE_TAG_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
