---
name: impeccable
description: Project adapter for Impeccable design work. Use for designing, redesigning, critiquing, auditing, polishing, clarifying, distilling, hardening, optimizing, adapting, animating, colorizing, extracting, or otherwise improving frontend UI/UX in this Astro project.
user-invocable: true
argument-hint: "[shape|critique|audit|polish|clarify|distill|harden|optimize|adapt|animate|colorize|extract|document|init] [target]"
---

# Impeccable project adapter

This starter uses Impeccable as its design-quality workflow.

Official source:
- https://impeccable.style/
- https://impeccable.style/docs/
- https://github.com/pbakaus/impeccable

To materialize the current official Antigravity/project build into `.agent/skills/impeccable/`, run:

```bash
npm run design:install
```

To refresh it later:

```bash
npm run design:update
```

## Project context order

Before making UI changes, read these if they exist:

1. `AGENTS.md`
2. `PRODUCT.md`
3. `DESIGN.md`
4. `UI.md`
5. the target page/component and its surrounding styles

Do not invent product truth that is missing from `PRODUCT.md`.

## Project-specific design contract

Impeccable governs design judgement; Bearnie governs reusable primitive implementation.

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

- Do not bypass `@/components/ui` in application code.
- Before inventing a primitive, search Bearnie through MCP or CLI.
- Keep product-specific composition in `src/components/site` or feature components.
- Use semantic design tokens unless the approved design system requires otherwise.
- Preserve accessibility behavior from Bearnie primitives.

## Detector

Before shipping meaningful UI changes:

```bash
npm run design:detect
```

Focused targets:

```bash
npx impeccable detect src/components/site/Hero.astro
npx impeccable detect http://localhost:4321
```

## Upstream synchronization

```bash
npm run design:check
npm run design:update
```

The official installer can replace files under `.agent/skills/impeccable/`. Keep project-specific rules in `AGENTS.md`, `UI.md`, `PRODUCT.md`, and `DESIGN.md`.

See `.agent/references/impeccable.md`.
