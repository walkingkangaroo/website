# 0010. The site uses seven Paper and Ink tints alongside the brand colours

- **Status:** Accepted
- **Date:** 2026-10-05
- **Issues:** KAN-726
- **Round:** [docs/rounds/build-the-site.md](../rounds/build-the-site.md), question 3

## Context

The B2 board uses tints that are not among the four brand colours, for panels, cards, rules,
secondary text and media placeholders.

## Decision

The site defines these as named site tokens, beside the brand tokens, and uses no other
colours:

| Hex | Use on the board |
| --- | --- |
| `#E6D8C2` | media panels |
| `#EFE3D0` | the steps strip and side panels |
| `#FBF6EE` | the progress panel |
| `#DCCDB6` | the progress panel's border |
| `#CDBBA0` | rules |
| `#4A362B` | secondary text (9.6:1 on Paper) |
| `#6B5646` | quiet text on `#E6D8C2` (4.9:1) |

They are site tints, not brand colours: nothing outside this site uses them.

## Alternatives considered

- **The four brand colours only,** with Ink at reduced opacity: further from the board.

## Consequences

- The review checklist's "no invented colours" means nothing beyond these and the brand four.
