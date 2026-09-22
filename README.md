# Astro Starter

Reusable Astro starter for Cloudflare Workers with an intent-first agent workflow.

## Core idea

The starter is designed to reduce the most common agent failure: building a reasonable interpretation that is not what the user wanted.

```text
Intent Gate
   ↓
Grill unresolved decisions
   ↓
Capture CONTEXT / ADRs
   ↓
Lock an approved spec
   ↓
Implement at agreed seams
   ↓
Review Standards + Spec separately
```

The intent workflow is adapted from Matt Pocock's skills repository:
https://github.com/mattpocock/skills

## Stack

- Astro 7
- Cloudflare Workers
- Tailwind CSS 4
- pnpm
- Bearnie UI primitives
- Impeccable design workflow
- Matt Pocock intent/spec/TDD/review skills
- Astro Docs MCP + Bearnie MCP
- runtime sitemap
- SEO + Google Tag

## Intent workflow

For material changes, agents must read:

```text
.agent/skills/project-intent/SKILL.md
```

The project only grills when a material decision is unresolved. Small mechanical changes remain fast.

Specs live under:

```text
docs/specs/
```

Domain vocabulary lives in `CONTEXT.md` when needed; durable architectural trade-offs live under `docs/adr/`.

## UI workflow

```text
Impeccable design judgement
          ↓
src/components/site
          ↓
src/components/ui
          ↓
src/components/bearnie
```

## MCP

```text
astro-docs  → https://mcp.docs.astro.build/mcp
bearnie     → npx @bearnie/mcp
```

## Start

```bash
corepack enable
pnpm install
cp .env.example .env
pnpm dev
```

## Useful commands

```bash
pnpm check
pnpm build
pnpm deploy

pnpm ui:list
pnpm ui:add <component...>

pnpm design:check
pnpm design:update
pnpm design:detect
```

## Agent structure

```text
AGENTS.md
.mcp.json
.agent/
├── skills/
│   ├── astro-project/
│   ├── impeccable/
│   ├── project-intent/
│   ├── grill-me/
│   ├── grilling/
│   ├── grill-with-docs/
│   ├── domain-modeling/
│   ├── to-spec/
│   ├── codebase-design/
│   ├── tdd/
│   ├── implement/
│   └── code-review/
└── references/
    ├── astro-ai.md
    ├── bearnie-mcp.md
    ├── impeccable.md
    └── matt-pocock-skills.md
```

## Notes

- Node 22.18+.
- The local Markdown spec tracker is the portable default.
- A cloned project may switch to GitHub/GitLab/Linear later.
- Do not let an agent silently invent missing product/design standards.
- Facts should be researched by the agent; decisions belong to the user.
