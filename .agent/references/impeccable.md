# Impeccable integration reference

Official documentation:

- https://impeccable.style/
- https://impeccable.style/docs/
- https://impeccable.style/tutorials/getting-started/
- https://github.com/pbakaus/impeccable

## Why this repository uses a bridge

Impeccable is actively versioned and its full skill includes command playbooks, references, scripts, runtime launchers, and detector support.

Copying only the upstream `SKILL.md` would be incomplete because that file depends on the rest of the skill tree. Vendoring the full tree directly into this starter would also make updates noisy.

This starter therefore keeps a project adapter in:

```text
.agent/skills/impeccable/SKILL.md
```

and exposes the official installer through:

```bash
pnpm design:install
```

The command uses the official Antigravity provider so the current upstream build is installed into the project's `.agent/` structure.

## Project commands

```bash
pnpm design:install
pnpm design:update
pnpm design:check
pnpm design:detect
```

## Context files

Impeccable separates durable product truth from visual-system truth:

```text
PRODUCT.md  # audience, purpose, constraints, product truth
DESIGN.md   # visual system, tokens, component/style decisions
```

Do not create fake generic content in either file just to satisfy the tool.

For a generic starter, these files may be absent until a real product is created.

## Relationship with Bearnie

Use Impeccable for:
- visual direction;
- UX hierarchy;
- critique;
- layout;
- typography;
- color;
- motion;
- accessibility review;
- responsive review;
- design-system extraction/documentation.

Use Bearnie for:
- accessible reusable primitives;
- button/input/dialog/tabs/sheet/menu/tooltip/etc.;
- primitive runtime behavior;
- source-owned component implementation.

Preferred flow:

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

A design task should not cause duplicate hand-built primitives when Bearnie already has a suitable component.

## Node requirement

Current Impeccable tooling requires modern Node 22. This starter sets:

```text
node >=22.18.0
```

so the project can run the Impeccable installer and detector without a separate runtime policy.
