# AGENTS.md

This file defines the default operating rules for AI coding agents working in this repository.

## Source of truth

For Astro framework behavior, APIs, integrations, routing, rendering, configuration, and current best practices:

1. Prefer the Astro Docs MCP server when available.
2. Otherwise consult the current official Astro documentation.
3. Do not rely on remembered or outdated Astro APIs when current documentation can resolve the question.

Official AI guide:
https://docs.astro.build/en/guides/build-with-ai/

Astro Docs MCP:
https://mcp.docs.astro.build/mcp

When an Astro-specific implementation depends on version-sensitive behavior, verify the current API before changing code.

## Project stack

- Astro 7
- Cloudflare Workers via `@astrojs/cloudflare`
- Tailwind CSS 4
- pnpm
- Bearnie as the underlying source-owned Astro UI primitive layer
- `astro-seo`
- Partytown for Google Tag
- runtime sitemap endpoint using `sitemap`
- TypeScript

## Package manager

Use pnpm.

Preferred commands:

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm deploy
```

Do not introduce npm, Yarn, or Bun lockfiles.

For official Astro integrations, prefer the supported Astro CLI workflow when practical instead of manually reproducing integration setup.

## UI architecture

The UI dependency direction is:

```text
pages / features
      ↓
src/components/site
      ↓
src/components/ui
      ↓
src/components/bearnie
      ↓
src/styles/bearnie.css
```

Rules:

- Treat `src/components/bearnie/` as the vendor primitive layer.
- Pages, layouts, feature components, and site components must not import Bearnie primitives directly.
- Import application UI primitives from `@/components/ui`.
- Compose product/site sections in `src/components/site`.
- Check Bearnie before creating a new primitive.
- Prefer semantic theme tokens over hard-coded palette colors.
- Read `UI.md` before adding or replacing reusable UI components.

Bearnie workflow:

```bash
pnpm ui:list
pnpm ui:add <component...>
pnpm ui:diff
pnpm ui:update
```

After adding a Bearnie primitive, expose only the required components through `src/components/ui/index.ts`.

## Rendering and Cloudflare

This project targets Cloudflare Workers.

- Keep Cloudflare runtime compatibility in mind for server-side code.
- Use Astro on-demand rendering only where runtime behavior is required.
- Prefer prerendering for static pages when it is appropriate.
- Do not introduce Node-only runtime assumptions without verifying Cloudflare compatibility.
- Keep secrets server-side. Never expose secrets through `PUBLIC_*` variables.

## SEO

Use the shared SEO behavior in `src/layouts/BaseLayout.astro`.

Do not hand-roll duplicate page-level metadata unless the shared layout cannot represent the requirement.

The sitemap is intentionally runtime-rendered:

```text
GET /sitemap.xml
```

Dynamic canonical public URLs belong in `src/seo/sitemap.ts`.

Do not replace the runtime sitemap with a build-only sitemap if the project contains runtime-backed routes.

## Internationalization

The starter is i18n-ready, not multilingual by default.

Do not add locale-prefixed routing, translation dependencies, or `hreflang` output unless the product actually requires multiple languages.

If multilingual support is enabled later:

- use Astro's current official i18n APIs where appropriate;
- keep canonical and `hreflang` behavior consistent;
- include locale alternates in the runtime sitemap;
- avoid duplicating translation logic across pages.

Verify current Astro i18n behavior with the Astro Docs MCP before implementation.

## Code quality

Before completing a non-trivial change, run when available:

```bash
pnpm check
pnpm build
```

If dependencies or network access prevent validation, state that explicitly instead of claiming the build passed.

Keep changes DRY, typed, accessible, and consistent with the existing project architecture.
