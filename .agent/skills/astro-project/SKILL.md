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

This repository ships `.agent/references/astro-ai.md` with the official Astro AI guide and Docs MCP endpoint.

The expected server is:

```text
https://mcp.docs.astro.build/mcp
```

If the active agent supports MCP, connect using that agent's own configuration. Otherwise consult the current official Astro documentation.
