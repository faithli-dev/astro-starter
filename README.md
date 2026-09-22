# Astro Starter

A reusable Astro starter for Cloudflare Workers.

## Stack

- Astro 7
- Cloudflare Workers via `@astrojs/cloudflare`
- Tailwind CSS 4 via `@tailwindcss/vite`
- pnpm
- runtime sitemap via `sitemap`
- `astro-seo`
- `@astrojs/partytown`
- Google Tag / GA4 support
- TypeScript
- Wrangler

## Start

```bash
corepack enable
pnpm install
cp .env.example .env
pnpm dev
```

Open the local URL printed by Astro.

## Environment

```env
SITE_URL=https://example.com
PUBLIC_SITE_NAME=Astro Starter
PUBLIC_GOOGLE_TAG_ID=G-XXXXXXXXXX
```

### SITE_URL

Build-time canonical origin used by Astro canonical URLs.

The runtime sitemap and robots endpoints use this configured Astro site URL when available and fall back to the request origin.

### PUBLIC_GOOGLE_TAG_ID

Optional. Leave it blank and no Google script is rendered.

When configured, Google Tag is loaded through Partytown so the third-party analytics script runs off the main thread. The Partytown config forwards `dataLayer.push`.

Examples:

- `G-XXXXXXXXXX` for GA4
- `GT-XXXXXXXXXX` for Google tag

This starter does not treat `GTM-XXXXXXX` as a Google Tag ID. Add a dedicated Google Tag Manager component if you specifically need a GTM container.

## SEO

`src/layouts/BaseLayout.astro` provides reusable defaults for:

- title and description
- canonical URL
- robots directives
- Open Graph metadata
- Twitter cards
- JSON-LD
- sitemap discovery
- optional `noindex`

Example:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="About"
  description="About this website."
  image="/og/about.jpg"
>
  <main>...</main>
</BaseLayout>
```

## Runtime sitemap

The starter deliberately does not use `@astrojs/sitemap` as the sitemap source of truth.

That official integration runs at build time and cannot enumerate dynamic SSR routes. This starter is designed for Cloudflare Worker on-demand rendering, so `/sitemap.xml` is a live server endpoint instead.

Files:

```text
src/
├── seo/
│   └── sitemap.ts
└── pages/
    ├── sitemap.xml.ts
    └── robots.txt.ts
```

`src/pages/sitemap.xml.ts`:

- renders on demand with `prerender = false`
- uses the `sitemap` package for standards-compliant XML serialization
- supports URLs loaded at request time
- returns cache headers suitable for Cloudflare edge caching

Add static entries in `src/seo/sitemap.ts`.

For dynamic URLs, implement `getDynamicSitemapEntries()`:

```ts
export async function getDynamicSitemapEntries(context) {
  const posts = await loadPublishedPosts(context);

  return posts.map((post) => ({
    url: `/posts/${post.slug}`,
    lastmod: post.updatedAt,
    changefreq: 'weekly',
    priority: 0.8,
  }));
}
```

The loader can query Cloudflare D1, KV, an external CMS, or an API. New published records can therefore appear in the sitemap without rebuilding the Astro app.

`/robots.txt` is also rendered on demand and points to `/sitemap.xml`.

## Cloudflare Worker API

The starter includes:

```text
GET /api/health
```

The route is rendered on demand by Cloudflare Workers.

## Commands

```bash
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm cf-typegen
pnpm deploy
```

## Deploy

Authenticate once:

```bash
pnpm exec wrangler login
```

Then:

```bash
pnpm deploy
```

Update `wrangler.jsonc` if you want to rename the Worker or add bindings such as D1, KV, R2, Queues, Durable Objects, or service bindings.

## Project structure

```text
.
├── astro.config.mjs
├── wrangler.jsonc
├── .env.example
├── src
│   ├── components
│   │   └── GoogleTag.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── api
│   │   │   └── health.ts
│   │   ├── index.astro
│   │   ├── robots.txt.ts
│   │   └── sitemap.xml.ts
│   ├── seo
│   │   └── sitemap.ts
│   └── styles
│       └── global.css
└── package.json
```

## Notes

- Keep secrets out of `PUBLIC_*` environment variables.
- Google Tag IDs are public identifiers, so `PUBLIC_GOOGLE_TAG_ID` is appropriate.
- For Cloudflare secrets, use Wrangler secrets or Cloudflare bindings instead of committing them.
- Dynamic sitemap data should only include canonical, public, indexable URLs.
