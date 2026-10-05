# 0008. Astro 7 on Node 24 LTS

- **Status:** Accepted
- **Date:** 2026-10-05
- **Issues:** KAN-726
- **Round:** [docs/rounds/build-the-site.md](../rounds/build-the-site.md), question 1

## Context

Astro 7.3.5, the current version, needs Node 22.12 or later. This machine ran Node 20.20.2
under nvm-windows, and Node 20 left support in April 2026.

## Decision

Build on Astro 7 with Node 24 LTS. The scaffold issue pins it with `.nvmrc` (`24`) and
`engines.node` (`>=22.12.0`), and installs Node 24 with nvm as this machine's active Node.

## Alternatives considered

- **Astro 5 on Node 20:** runs today, but on an unsupported Node and a stale Astro major.

## Consequences

- nvm-windows switches Node for every project on this machine at once.
