# Review checklist: walkingkangaroo.com

What the `reviewer` agent checks in this project, on top of the standing rules in
`.claude/agents/reviewer.md`. Edit it here. Add an item when a defect gets past review, and say
which issue taught it.

## Correctness in this project

- Colours and type match the brand tokens; no invented colours, no Rust text on Ink.
- Every page works at 390 px wide with no horizontal scroll.
- Images have `alt` text (empty `alt=""` for decorative footprints); links and buttons are real
  `<a>` and `<button>` elements.
- The stage meter's stage name is in text, not only in the prints.
- Nothing secret or private is committed: the repo is public.

## Scope

- Only the five projects in `docs/brief.md`. No client framework or server unless a decision
  says so.

## Readability

- Grant reads content files and copy; keep frontmatter field names plain.
