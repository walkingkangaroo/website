# 0012. Project pages leave out the playtest parts until there is a playtest

- **Status:** Accepted
- **Date:** 2026-10-05
- **Issues:** KAN-726
- **Round:** [docs/rounds/build-the-site.md](../rounds/build-the-site.md), question 5

## Context

The in-the-works project board has a "Join the playtest" button and a "Want to help?" box. No
project runs a playtest.

## Decision

A project page has the title, the one-liner, "Follow this project" (to the newsletter band), the
stage panel, the clip, and the project's devlog. "Working on now" (a list) and "Target" are
optional fields in the project file, shown only when filled. "Last update" is the date of the
project's newest published post, hidden when it has none. The playtest button and box are held
out to Backlog.

## Alternatives considered

- **All of it,** with an optional playtest link.
- **Only the brief's fields** (type, stage, platforms, one-liner, media) and the devlog.

## Consequences

- Adding a playtest later is its own issue.
