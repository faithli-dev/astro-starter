# Impeccable integration reference

Official documentation:

- https://impeccable.style/
- https://impeccable.style/docs/
- https://impeccable.style/tutorials/getting-started/
- https://github.com/pbakaus/impeccable

## Why this repository uses a bridge

Impeccable is actively versioned and its full skill includes command playbooks, references, scripts, runtime launchers, and detector support.

This starter keeps a project adapter in:

```text
.agent/skills/impeccable/SKILL.md
```

and exposes the official installer through:

```bash
npm run design:install
```

## Project commands

```bash
npm run design:install
npm run design:update
npm run design:check
npm run design:detect
```

## Context files

```text
PRODUCT.md  # audience, purpose, constraints, product truth
DESIGN.md   # visual system, tokens, component/style decisions
```

Do not create fake generic content in either file just to satisfy the tool.

## Relationship with Bearnie

Use Impeccable for visual direction, UX hierarchy, critique, layout, typography, color, motion, accessibility review, responsive review, and design-system extraction/documentation.

Use Bearnie for accessible reusable primitives and primitive runtime behavior.

```text
Impeccable design decision
          ↓
Bearnie primitive lookup
          ↓
src/components/bearnie
          ↓
src/components/ui
          ↓
site / feature composition
```

## Node requirement

Current Impeccable tooling requires modern Node 22. This starter sets:

```text
node >=22.18.0
```
