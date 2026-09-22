---
name: impeccable
description: Project adapter for Impeccable design work. Use for designing, redesigning, critiquing, auditing, polishing, clarifying, distilling, hardening, optimizing, adapting, animating, colorizing, extracting, or otherwise improving frontend UI/UX in this Astro project. Use for landing pages, dashboards, product UI, forms, settings, onboarding, empty states, responsive behavior, accessibility, typography, spacing, layout, color, motion, UX copy, design systems, and visual quality. Not for backend-only work.
user-invocable: true
argument-hint: "[shape|critique|audit|polish|clarify|distill|harden|optimize|adapt|animate|colorize|extract|document|init] [target]"
---

# Impeccable project adapter

This starter uses Impeccable as its design-quality workflow.

Official source:
- https://impeccable.style/
- https://impeccable.style/docs/
- https://github.com/pbakaus/impeccable

This file is the project adapter, not a frozen fork of Impeccable's full upstream skill tree. The repository keeps the adapter small so the upstream skill can be refreshed independently.

To materialize the current official Antigravity/project build into `.agent/skills/impeccable/`, run:

```bash
pnpm design:install
```

To refresh an installed upstream build later:

```bash
pnpm design:update
```

## Project context order

Before making UI changes, read these if they exist:

1. `AGENTS.md`
2. `PRODUCT.md`
3. `DESIGN.md`
4. `UI.md`
5. the target page/component and its surrounding styles

Do not invent product truth that is missing from `PRODUCT.md`.

If the product has no durable context yet and the task is substantial design work, use the Impeccable `init` workflow to establish `PRODUCT.md`.

If the project already has a coherent visual system but no `DESIGN.md`, use the Impeccable `document` workflow before large-scale redesign work.

## Project-specific design contract

Impeccable governs design judgement; Bearnie governs reusable primitive implementation.

The dependency direction remains:

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

- Do not bypass `@/components/ui` in application code.
- Before inventing a primitive, search Bearnie through its MCP server or CLI.
- Keep product-specific composition in `src/components/site` or feature components.
- Use semantic design tokens instead of arbitrary palette values unless the approved design system requires otherwise.
- Preserve accessibility behavior from Bearnie primitives.
- Do not let a visual polish pass break routing, forms, SEO, Cloudflare runtime behavior, or responsive layout.

## Design workflow

For new surfaces:
1. Establish the user goal, information hierarchy, constraints, and existing visual truth.
2. Shape the UX before implementation when the direction is not obvious.
3. Reuse the existing design system and Bearnie primitives.
4. Build the complete surface.
5. Review desktop and narrow/mobile states in a bounded pass.
6. Fix the findings in one grouped pass.
7. Run at most one confirmation pass.

For existing surfaces:
- use critique when the problem is unclear;
- use polish for a focused final refinement;
- use audit for accessibility, responsive, performance, and technical UI quality;
- use distill when the interface has too much visual or cognitive noise;
- use clarify when hierarchy, labeling, or next actions are unclear;
- use extract/document when repeated visual decisions should become reusable system rules.

## Detector

Use Impeccable's deterministic detector before shipping meaningful UI changes:

```bash
pnpm design:detect
```

Focused target examples:

```bash
pnpm exec impeccable detect src/components/site/Hero.astro
pnpm exec impeccable detect http://localhost:4321
```

Treat findings as signals to review, not a mandate to blindly rewrite intentional design decisions.

## Upstream synchronization

Check for an upstream skill update:

```bash
pnpm design:check
```

Update:

```bash
pnpm design:update
```

The official installer can replace files under `.agent/skills/impeccable/`. Keep project-specific rules in `AGENTS.md`, `UI.md`, `PRODUCT.md`, and `DESIGN.md` so upstream refreshes do not erase product decisions.

See `.agent/references/impeccable.md` for the integration notes.
