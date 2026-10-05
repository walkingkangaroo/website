# walkingkangaroo.com

The Walking Kangaroo website: Grant's games and apps, how far along each one is, and a devlog.
A static Astro site published to GitHub Pages. On 2026-10-05 the repo holds the brief, the
decisions and the process template; the site itself is not built yet. Start with
[docs/brief.md](docs/brief.md).

**Decisions and their reasons: [docs/DECISIONS.md](docs/DECISIONS.md).** Don't reopen an Accepted
decision without Grant. The roadmap and issues live in the Linear project **Website**.

Keep this file under 100 lines. It is read by every session and every subagent. Rules that
matter for only part of the code go in `.claude/rules/<topic>.md` with a `paths:` list, so they
load only when those files are touched. History goes in decision records, not here.

## Commands

Set up by the first build issue. Expected:

```bash
pnpm install
pnpm build      # astro build into dist/
pnpm check      # astro check
pnpm dev        # local preview
```

## Layout

- `docs/brief.md`: what the site is, what it shows, and the plan.
- `docs/decisions/`: one record per decision, indexed in `docs/DECISIONS.md`.
- `docs/process/`: facts for `/shape`, `/do` and `/retro`.

## Conventions

- Brand assets come from `C:\dev\walkingkangaroo\brand\dist\walking-kangaroo-brand-pack\`,
  copied in unchanged. Never redraw, recolour or re-letter the logo.
- Colours: Rust `#9E3B22`, Ink `#2B1A12`, Paper `#F4EBDD`, Rust Light `#E0785A` (on Ink only).
  Rust on Ink and Rust Light on Paper fail contrast: never for text.
- Type: Outfit, SemiBold 600 for headings (sentence case, -2.5% tracking at 48 px and up),
  Regular 400 for body.
- The repo is public: no secrets, keys or unpublished plans for other projects.

## Workflow

- Work is driven from Linear. `/shape <topic>` turns an idea into Ready for Build issues, with
  the decisions recorded in the repo. `/do KAN-###` (or `/do next`) builds one issue and opens a
  pull request. `/retro <milestone>` measures a finished milestone.
- The session that runs these is the orchestrator. It plans, verifies and owns every commit,
  pull request and Linear update. `implementer` writes the code and `reviewer` reviews the diff.
- Never commit to the default branch, never merge a pull request, never set Done. Grant merges,
  and Linear sets Done when he does.
- Project facts for the skills are in `docs/process/project.md`. The skills, agents and scripts
  under `.claude/` come from `process-template` and are not edited here.

## Gotchas

- DNS is at VentraIP and Grant edits it himself. Never suggest changing the MX records.
