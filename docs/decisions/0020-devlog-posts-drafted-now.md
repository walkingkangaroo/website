# 0020. The first devlog posts are written now and kept as drafts until launch

- **Status:** Accepted
- **Date:** 2026-10-06
- **Issues:** KAN-753
- **Round:** [docs/rounds/content.md](../rounds/content.md), question 7

## Context

The brief asks for one devlog post per project at launch.

## Decision

The five posts are written in the Content step with `draft: true`, so they show in `pnpm dev`
and stay out of the build. Grant flips them at launch. The example post is removed.

## Alternatives considered

- **Write them in the Launch step:** the context would be colder.

## Consequences

- Launch includes setting `draft: false` and the date on each post.
