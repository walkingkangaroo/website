# 0015. No gameplay clips in the Content step

- **Status:** Accepted
- **Date:** 2026-10-06
- **Issues:** KAN-753
- **Round:** [docs/rounds/content.md](../rounds/content.md), question 2

## Context

The brief asked for one gameplay clip per project. Godot's Movie Maker output needs converting
for the web, and ffmpeg isn't installed.

## Decision

The Content step ships covers only. Clips, and the encode script they need, wait in Backlog.
The site already shows the cover where a clip would go, and the hero says "See the project"
instead of "Watch the prototype".

## Alternatives considered

- **Grant records play, the build encodes:** the recommendation; deferred, not rejected.
- **Scripted captures in each game repo:** changes four other repos and looks robotic.

## Consequences

- The brief's Content step drops clips; a Backlog issue holds them.
