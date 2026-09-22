---
name: astro-project
description: Use for implementing, reviewing, debugging, or upgrading Astro code in this repository. Covers current Astro APIs, Cloudflare Workers, Bearnie UI conventions, SEO, runtime sitemap behavior, and optional i18n.
---

# Astro Project Skill

Use this skill for Astro-specific work in this repository.

## Always verify current Astro behavior

Astro changes quickly. Before using version-sensitive APIs or recommending framework patterns, consult the current Astro documentation.

Primary guide for AI-assisted Astro development:

https://docs.astro.build/en/guides/build-with-ai/

Preferred live documentation source:

https://mcp.docs.astro.build/mcp

If the Astro Docs MCP server is available, use it for current framework questions. If it is unavailable, use the official Astro documentation directly.

Do not substitute old blog posts, cached framework knowledge, or unrelated third-party examples when the official docs answer the question.

## Current project assumptions

- Astro 7
- Cloudflare Workers adapter
- Tailwind CSS 4
- pnpm
- Bearnie source-owned UI primitives
- application UI boundary at `@/components/ui`
- runtime `/sitemap.xml`
- SEO through the shared base layout
- Partytown-backed Google Tag
- i18n-ready but single-language by default

## Implementation checklist

Before editing:

1. Read `AGENTS.md`.
2. Read `UI.md` for reusable UI changes.
3. Inspect the existing implementation before adding dependencies or duplicate utilities.
4. Query current Astro docs for version-sensitive framework behavior.

During implementation:

- Prefer Astro-native features before adding another framework abstraction.
- Preserve Cloudflare Workers compatibility.
- Use Bearnie for existing UI primitives.
- Import primitives through `@/components/ui`, not `@/components/bearnie`.
- Reuse `BaseLayout.astro` for SEO.
- Keep runtime sitemap entries in `src/seo/sitemap.ts`.
- Do not enable multilingual routing unless required by the product.
- Keep browser JavaScript minimal; prefer Astro server/static rendering where possible.

Validation:

```bash
pnpm check
pnpm build
```

For UI changes, also review:

```bash
pnpm ui:diff
```

when Bearnie vendor source has been modified.

## Astro Docs MCP

This repository ships project-level MCP configuration in `.mcp.json`.

Configured servers:

- Astro Docs: `https://mcp.docs.astro.build/mcp`
- Bearnie: `npx @bearnie/mcp`

Use Astro Docs for version-sensitive framework questions. Use Bearnie MCP to discover or install UI primitives before creating custom equivalents.

If the active coding client does not support root `.mcp.json`, adapt the same server definitions to that client's MCP configuration format rather than substituting different documentation or component sources.


## Bearnie MCP workflow

Before building a new reusable UI primitive:

1. Use Bearnie MCP to search the registry.
2. Prefer an existing accessible Bearnie primitive when suitable.
3. Let Bearnie MCP install the primitive and its registry/runtime dependencies.
4. Export the required application-facing pieces from `@/components/ui`.
5. Use only the application UI surface from pages/features/site components.

Official reference:
https://bearnie.dev/docs/mcp/
