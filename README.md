# Astro Starter

Reusable Astro starter for Cloudflare Workers with a unified Bearnie-based UI system.

## Stack

- Astro 7
- Cloudflare Workers via `@astrojs/cloudflare`
- Tailwind CSS 4 via `@tailwindcss/vite`
- pnpm
- Bearnie accessible Astro primitives
- runtime `/sitemap.xml` via `sitemap`
- `astro-seo`
- `@astrojs/partytown`
- Google Tag / GA4
- TypeScript + Wrangler

## Start

```bash
corepack enable
pnpm install
cp .env.example .env
pnpm dev
```

## UI architecture

Bearnie is the underlying source-owned primitive layer.

```text
src/components/bearnie  # vendor primitives
        ↓
src/components/ui       # stable application UI API
        ↓
src/components/site     # composed site/product components
        ↓
pages
```

The starter includes Button, Card, Badge, Input, Label and Separator primitives plus Bearnie's default semantic theme.

Add more primitives with:

```bash
pnpm ui:list
pnpm ui:add dialog tabs tooltip
pnpm ui:diff
pnpm ui:update
```

Site code should import from `@/components/ui`, not directly from `@/components/bearnie`.

See `UI.md` for the full component rules.

## Environment

```env
SITE_URL=https://example.com
PUBLIC_SITE_NAME=Astro Starter
PUBLIC_GOOGLE_TAG_ID=G-XXXXXXXXXX
```

Google Tag is optional. Leave `PUBLIC_GOOGLE_TAG_ID` blank to disable it.

## SEO

The base layout includes canonical URL, robots directives, Open Graph, Twitter metadata, JSON-LD and Google Tag.

The sitemap is dynamic:

```text
GET /sitemap.xml
```

It runs on Cloudflare Workers and can load public URLs from D1, KV, a CMS or an API through `src/seo/sitemap.ts`.

`/robots.txt` points to the runtime sitemap.

## Worker API

```text
GET /api/health
```

## Commands

```bash
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm cf-typegen
pnpm deploy

pnpm ui:list
pnpm ui:add <component...>
pnpm ui:diff
pnpm ui:update
```

## Deploy

```bash
pnpm exec wrangler login
pnpm deploy
```

## Project structure

```text
.
├── bearnie.json
├── UI.md
├── astro.config.mjs
├── wrangler.jsonc
├── src
│   ├── components
│   │   ├── bearnie
│   │   ├── site
│   │   ├── ui
│   │   └── GoogleTag.astro
│   ├── layouts
│   ├── pages
│   ├── seo
│   ├── styles
│   │   ├── bearnie.css
│   │   └── global.css
│   └── utils
│       └── cn.ts
└── package.json
```

## Notes

- Keep secrets out of `PUBLIC_*` variables.
- Bearnie components are copied source, not hidden runtime components.
- Run `pnpm ui:diff` before upstream updates if vendor primitives were customized.
- Dynamic sitemap data should contain only canonical, public, indexable URLs.


## AI agent setup

This starter includes project-level AI development guidance:

```text
AGENTS.md
.agent/skills/astro-project/SKILL.md
.agent/references/astro-ai.md
```

The project records Astro's official Docs MCP endpoint without binding the starter to a specific coding agent:

```text
https://mcp.docs.astro.build/mcp
```

The agent rules reference Astro's official AI development guide and require current documentation checks for version-sensitive Astro behavior. MCP transport is configured by whichever coding agent is actually being used.
