# 0009. The stage meter uses one solid foot, faded for steps not reached

- **Status:** Accepted
- **Date:** 2026-10-05
- **Issues:** KAN-726
- **Round:** [docs/rounds/build-the-site.md](../rounds/build-the-site.md), question 2

## Context

The B2 board draws a filled print as one foot of the logo mark in Rust, and an empty print as
that foot outlined in `#9C8A75`, a colour outside the brand. The brand pack says never to
outline or recolour the mark.

## Decision

Each step of the meter is the single foot from the brand mark, its shape unchanged, filled in
Rust. A step not yet reached is the same solid foot at about 20% opacity. No outline, no new
colour. The stage name is always in text beside it (0001).

## Alternatives considered

- **The outline as drawn:** an exception to the brand rules.
- **The whole two-foot mark per step:** unchanged, but the meter takes about twice the width.

## Consequences

- The prints are decorative (`alt=""`); the text carries the stage.
