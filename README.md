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
- npm
- Bearnie UI primitives
- Impeccable design workflow
- Matt Pocock intent/spec/TDD/review skills
- Astro Docs MCP + Bearnie MCP
- runtime sitemap
- SEO + Google Tag

## Package manager

This starter is npm-first for maximum compatibility with standard Node.js, CI, hosting and agent environments.

No Corepack setup is required.

Development:

```bash
npm install
npm run dev
```

After the first successful install, commit the generated `package-lock.json`. Once a lockfile exists, CI and deployment should use:

```bash
npm ci
```

Do not add pnpm, Yarn or Bun lockfiles unless the project intentionally changes package managers.

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
npm install
cp .env.example .env
npm run dev
```

## Useful commands

```bash
npm run check
npm run build
npm run deploy

npm run ui:list
npm run ui:add -- dialog tabs tooltip
npm run ui:diff
npm run ui:update

npm run design:install
npm run design:check
npm run design:update
npm run design:detect
```

npm passes script arguments after `--`, for example:

```bash
npm run ui:add -- dialog tabs tooltip
```

For one-off local binaries, `npx` is also fine:

```bash
npx bearnie add styles-slate-blue --overwrite
npx impeccable detect src/components/site/Hero.astro
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

- Node 22.18+ is required by the current design tooling.
- npm is the canonical package manager for this starter.
- The local Markdown spec tracker is the portable default.
- A cloned project may switch to GitHub/GitLab/Linear later.
- Do not let an agent silently invent missing product/design standards.
- Facts should be researched by the agent; decisions belong to the user.
