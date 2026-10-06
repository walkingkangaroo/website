# 0014. Claude drafts the site's words, and Grant rewrites them before they merge

- **Status:** Accepted
- **Date:** 2026-10-06
- **Issues:** KAN-753
- **Round:** [docs/rounds/content.md](../rounds/content.md), question 1

## Context

The Content step needs project descriptions, a bio and five devlog posts in Grant's voice. Only
Grant can say whether copy sounds like him (`docs/process/project.md`).

## Decision

Each content issue drafts its copy from the project's own repo and docs, marks it as a draft in
the pull request, and Grant rewrites it there. Nothing invented: a fact the repo doesn't state is
left out or asked for.

## Alternatives considered

- **Grant writes everything first:** slower, and the issues would wait on a blank page.

## Consequences

- Every content pull request waits on Grant's edit before merge.
