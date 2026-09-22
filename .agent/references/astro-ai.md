# Astro AI reference

Use this reference for AI-assisted Astro development in this repository.

## Official Astro AI guide

https://docs.astro.build/en/guides/build-with-ai/

## Astro Docs MCP

Official endpoint:

```text
https://mcp.docs.astro.build/mcp
```

This repository configures the endpoint in the root `.mcp.json`. When the active coding client supports the common `mcpServers` project format, it can use that configuration directly.

The root `.mcp.json` is intentionally client-light rather than Codex-specific. Clients that require a different MCP schema should translate the same server definition.

## Policy

For Astro framework behavior that may vary by version:

1. Prefer the live Astro Docs MCP source when the active agent supports it.
2. Otherwise use the current official Astro documentation.
3. Do not rely on stale framework memory for version-sensitive APIs.
