# UI architecture

Bearnie is the underlying Astro UI primitive layer for this starter.

## Dependency direction

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

### Bearnie layer

`src/components/bearnie/` contains copied Bearnie primitives. Treat this as vendor source.

- Add/update components with the Bearnie CLI.
- Do not import this layer directly from pages, layouts, site components, or features.
- Keep project-specific design decisions out of this layer where possible.

### Application UI layer

`src/components/ui/` is the only public primitive API for the application.

Use:

```ts
import { Button, Card, Input } from "@/components/ui";
```

When adding a Bearnie primitive, expose only the components the app actually uses through `src/components/ui/index.ts`.

### Site layer

`src/components/site/` contains composed product/site components such as Header, Hero, PricingCard, FeatureGrid, SearchForm, AccountMenu, and Footer.

These components compose `@/components/ui`. They must not reach directly into `@/components/bearnie`.

## Rules

1. Check Bearnie before building a new primitive.
2. Do not write a custom button, input, dialog, tabs, sheet, menu, tooltip, card, badge, table, etc. when Bearnie already provides it.
3. Pages should mainly compose site/feature components.
4. Prefer semantic tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`.
5. Avoid arbitrary hex colors and one-off radius values in site components.
6. Accessibility behavior belongs in the primitive layer.
7. Business/product behavior belongs in site/feature components.
8. Use `cn()` from `@/utils/cn` for class composition.
9. Keep `@/components/ui` small and intentional; do not export all Bearnie components automatically.
10. Run `pnpm ui:diff` before updating vendor primitives that have local changes.

## CLI workflow

```bash
pnpm ui:list
pnpm ui:add dialog tabs tooltip
pnpm ui:diff
pnpm ui:update
```

After `pnpm ui:add <component>`, export the required primitives from `src/components/ui/index.ts` before using them elsewhere.

## Theme

Bearnie's default neutral semantic theme lives at:

```text
src/styles/bearnie.css
```

It is imported by `src/styles/global.css` after Tailwind.

To switch theme:

```bash
pnpm dlx bearnie add styles-slate-blue --overwrite
```

Review and commit the theme change like any other design-system change.


## Impeccable

Impeccable is the design-quality layer above this component architecture.

Use Impeccable to decide:
- hierarchy;
- information density;
- spacing rhythm;
- typography;
- color relationships;
- motion;
- responsive behavior;
- accessibility refinements;
- whether an interface feels generic, noisy, unclear, or visually inconsistent.

Use Bearnie to implement reusable primitives after the design decision is clear.

Impeccable should not directly encourage bypassing the `@/components/ui` boundary or duplicating a Bearnie primitive.
