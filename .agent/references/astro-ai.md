# Astro AI reference

Use this reference for AI-assisted Astro development in this repository.

## Official Astro AI guide

https://docs.astro.build/en/guides/build-with-ai/

## Astro Docs MCP

Official endpoint:

```text
https://mcp.docs.astro.build/mcp
```

When the active coding agent supports MCP, connect to this endpoint using that agent's own MCP configuration mechanism.

This starter intentionally does not include a Codex-, Claude-, Cursor-, or other vendor-specific MCP configuration file.

## Policy

For Astro framework behavior that may vary by version:

1. Prefer the live Astro Docs MCP source when the active agent supports it.
2. Otherwise use the current official Astro documentation.
3. Do not rely on stale framework memory for version-sensitive APIs.
