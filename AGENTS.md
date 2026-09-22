# AGENTS.md

This file defines the default operating rules for AI coding agents working in this repository.

## Source of truth

For Astro framework behavior, APIs, integrations, routing, rendering, configuration, and current best practices:

1. Prefer the Astro Docs MCP server when available.
2. Otherwise consult the current official Astro documentation.
3. Do not rely on remembered or outdated Astro APIs when current documentation can resolve the question.

Official AI guide:
https://docs.astro.build/en/guides/build-with-ai/

Project MCP configuration:

- Root config: `.mcp.json`
- Astro Docs: https://mcp.docs.astro.build/mcp
- Bearnie MCP: `npx @bearnie/mcp`

Use the project MCP servers when the active coding agent supports the common `mcpServers` configuration format. If the active client requires its own MCP format, translate these same server definitions rather than inventing different sources.

When an Astro-specific implementation depends on version-sensitive behavior, verify the current API before changing code.

## Project stack

- Astro 7
- Cloudflare Workers via `@astrojs/cloudflare`
- Tailwind CSS 4
- pnpm
- Bearnie as the underlying source-owned Astro UI primitive layer
- Impeccable for frontend design quality
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

## Bearnie MCP

Official documentation:
https://bearnie.dev/docs/mcp/

The Bearnie MCP server is configured in the project root `.mcp.json`.

Use it to discover and install Bearnie primitives instead of recreating components that already exist in the registry.

After Bearnie MCP adds a component:

- keep generated primitives under `src/components/bearnie/`;
- expose the required primitives through `src/components/ui/index.ts`;
- application code must continue importing from `@/components/ui`;
- review generated dependencies and runtime helpers before committing.

See `.agent/references/bearnie-mcp.md` for the project-specific workflow.

## Design quality: Impeccable

This repository uses Impeccable for frontend design judgement and UI quality.

Official documentation:
https://impeccable.style/docs/

Project skill:
`.agent/skills/impeccable/SKILL.md`

Reference:
`.agent/references/impeccable.md`

For substantial frontend UI work:

1. Read existing `PRODUCT.md` and `DESIGN.md` if present.
2. Read `UI.md`.
3. Use the Impeccable workflow appropriate to the task.
4. Use Bearnie for reusable primitives instead of duplicating controls.
5. Keep application imports behind `@/components/ui`.
6. Run `pnpm design:detect` for meaningful UI changes before completion when the environment permits.

The official Impeccable build can be synchronized into the project's `.agent/` structure with:

```bash
pnpm design:install
```

Do not treat Impeccable as permission to discard an established product or design system. Preserve approved product facts, brand constraints, and existing design decisions unless the task explicitly changes them.
