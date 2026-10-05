# 0003. A static Astro site, with projects and posts as content files

- **Status:** Accepted
- **Date:** 2026-10-05
- **Issues:** —

## Decision

Build with Astro as a fully static site, using pnpm. Each project and each devlog post is one
Markdown content file with typed frontmatter (for a project: type, stage 1–5, platforms,
one-liner, media), so routine updates are one-file changes.

## Alternatives considered

- **Hand-written HTML:** simplest, but every post and stage change would touch page markup.

## Consequences

- No server, no database, no client framework unless a page needs one.
