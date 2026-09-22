# Astro Starter

Reusable Astro starter for Cloudflare Workers with a unified Bearnie-based UI system and Impeccable design workflow.

## Stack

- Astro 7
- Cloudflare Workers via `@astrojs/cloudflare`
- Tailwind CSS 4 via `@tailwindcss/vite`
- pnpm
- Bearnie accessible Astro primitives
- Impeccable design skill + detector
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

Bearnie is the source-owned primitive layer. Impeccable sits above it as the design-quality workflow.

```text
Impeccable design judgement
          ↓
src/components/site
          ↓
src/components/ui
          ↓
src/components/bearnie
```

Site code should import from `@/components/ui`, not directly from `@/components/bearnie`.

See `UI.md` and `.agent/skills/impeccable/SKILL.md`.

## Impeccable

The starter contains a lightweight project adapter for Impeccable at:

```text
.agent/skills/impeccable/SKILL.md
```

Synchronize the current official Antigravity/project build into `.agent/` with:

```bash
pnpm design:install
```

Useful commands:

```bash
pnpm design:check
pnpm design:update
pnpm design:detect
```

For a focused scan:

```bash
pnpm exec impeccable detect src/components/site/Hero.astro
```

Impeccable may use `PRODUCT.md` for durable product context and `DESIGN.md` for visual-system context. The generic starter intentionally does not fabricate either file; create them when a real product has enough context.

## Bearnie

The starter includes Button, Card, Badge, Input, Label and Separator primitives plus Bearnie's default semantic theme.

```bash
pnpm ui:list
pnpm ui:add dialog tabs tooltip
pnpm ui:diff
pnpm ui:update
```

## Environment

```env
SITE_URL=https://example.com
PUBLIC_SITE_NAME=Astro Starter
PUBLIC_GOOGLE_TAG_ID=G-XXXXXXXXXX
```

## SEO

The base layout includes canonical URL, robots directives, Open Graph, Twitter metadata, JSON-LD and Google Tag.

The sitemap is runtime rendered at:

```text
GET /sitemap.xml
```

Dynamic public URLs are provided through `src/seo/sitemap.ts`.

## Worker API

```text
GET /api/health
```

## MCP servers

Root `.mcp.json` includes:

```text
astro-docs  → https://mcp.docs.astro.build/mcp
bearnie     → npx @bearnie/mcp
```

## Agent structure

```text
AGENTS.md
.agent/
├── skills/
│   ├── astro-project/
│   │   └── SKILL.md
│   └── impeccable/
│       └── SKILL.md
└── references/
    ├── astro-ai.md
    ├── bearnie-mcp.md
    └── impeccable.md
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

pnpm design:install
pnpm design:check
pnpm design:update
pnpm design:detect
```

## Deploy

```bash
pnpm exec wrangler login
pnpm deploy
```

## Notes

- Node 22.18+ is required because the project includes current Impeccable tooling.
- Keep secrets out of `PUBLIC_*` variables.
- Bearnie primitives remain behind `@/components/ui`.
- Impeccable should preserve established product/design truth unless the task explicitly changes it.
- Dynamic sitemap data should contain only canonical, public, indexable URLs.
