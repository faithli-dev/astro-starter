# Bearnie MCP reference

Official Bearnie MCP documentation:

https://bearnie.dev/docs/mcp/

## Project MCP server

This repository exposes Bearnie through the root `.mcp.json`:

```json
{
  "mcpServers": {
    "bearnie": {
      "command": "npx",
      "args": ["@bearnie/mcp"]
    }
  }
}
```

The Bearnie MCP server can:

- list available components;
- search components;
- inspect component source and dependencies;
- add one or multiple components;
- resolve registry dependencies;
- install shared runtime helpers used by interactive components.

Bearnie writes component source to `src/components/bearnie/`, utilities to `src/utils/`, and theme styles to `src/styles/`.

## Project UI rule

Even when Bearnie components are installed by MCP, application code should continue to import primitives through `@/components/ui`.

After an MCP-added component is installed:

1. Review the generated files.
2. Export only the primitives the app needs from `src/components/ui/index.ts`.
3. Use those application-facing exports from site/features/pages.
4. Keep direct `@/components/bearnie/*` imports out of application code.

This preserves the project's stable UI boundary.
