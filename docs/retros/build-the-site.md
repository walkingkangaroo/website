# Retro: Build the site

Project: walkingkangaroo.com · Template version: 1.0.1 · Written: 2026-10-06
Issues: 9 Done of 9 · First started: 2026-10-05 · Last merged: 2026-10-05 (UTC; 2026-10-06 in Adelaide)

## The numbers

Times are minutes, from Linear's state history. "Start to Done" runs from the first In Progress
to Done; time waiting in Ready for Build is not counted.

| Measure | Median | Longest | Note |
| --- | --- | --- | --- |
| In Progress (minutes) | 3.5 | 11.6 (KAN-729) | 35.0 in all; includes the implementer's run |
| AI Review (minutes) | 2.0 | 8.0 (KAN-730) | 23.5 in all; KAN-730 had a fix round and two Opus reviews |
| Human QA (minutes) | 26.4 | 453.2 (KAN-729) | 598.3 in all; KAN-729 waited overnight |
| Start to Done (minutes) | 28.9 | 467.0 (KAN-729) | 656.8 in all |

- Share of elapsed time waiting in Human QA: 91.1% (76.5% without KAN-729's overnight wait)
- Fix rounds: 4 issues needed one, 1 needed two (KAN-727), 0 stopped at the limit; 6 rounds in all
- Reopened or bug filed after merge: KAN-727 (KAN-738: `sharp` was never installed, so images
  weren't resized; found in KAN-731, about 8 hours after KAN-727 merged)
- Follow-ups: 3 filed (KAN-738, KAN-739, KAN-740), 3 closed in this milestone; none filed
  against a follow-up
- Models: 7 issues built by an implementer on sonnet, 2 made directly by the orchestrator
  (KAN-738, KAN-739), 0 on haiku or opus. Reviews: 8 on sonnet, 1 on opus (KAN-730, two passes;
  it still found a defect, the breadcrumb spacing)
- Grant's review comments on the 9 pull requests: 0
- Token use: not measured

## Per issue

| Issue | In Progress | AI Review | Human QA | Fix rounds | Built by | Follow-ups |
| --- | --- | --- | --- | --- | --- | --- |
| KAN-727 | 5.2 | 4.6 | 1.1 | 2 | sonnet | |
| KAN-728 | 4.6 | 2.3 | 0.7 | 1 | sonnet | |
| KAN-729 | 11.6 | 2.2 | 453.2 | 1 | sonnet | |
| KAN-731 | 4.5 | 1.6 | 27.7 | 1 | sonnet | KAN-738 |
| KAN-738 | 1.1 | 1.0 | 0.5 | 0 | orchestrator | |
| KAN-730 | 3.5 | 8.0 | 1.4 | 1 | sonnet | KAN-739 |
| KAN-732 | 2.1 | 2.0 | 58.3 | 0 | sonnet | KAN-740 |
| KAN-739 | 1.2 | 0.5 | 29.0 | 0 | orchestrator | |
| KAN-740 | 1.3 | 1.2 | 26.4 | 0 | sonnet | |

## What worked

- No issue hit the two-round limit, and every fix round was a single pass (6 rounds over 9
  issues).
- Follow-ups were closed inside the milestone rather than left behind: KAN-738, KAN-739 and
  KAN-740 were filed and merged within the same day, and none spawned another.
- The orchestrator's own look caught what reports didn't: KAN-727's phone nav wrapping at a true
  390 px, and KAN-730's breadcrumb spacing and lone-sidebar layout were found in the browser.
- The two direct changes (KAN-738, KAN-739) took 1.1 and 1.2 minutes in progress with no fix
  rounds.
- Human QA is quick when Grant is at the keyboard: four issues (KAN-727, 728, 738, 730) merged
  within 1.5 minutes of reaching Human QA.

## Proposals

At most three. Each one is also a Process issue.

### 1. /do says how to look at the result when a dev server it didn't start already holds the port

- **Evidence:** In KAN-730, KAN-732, KAN-740 and the milestone close-out, port 4321 was already
  held by an `astro dev` started outside the session. Astro 7 refuses a second dev server per
  project. The orchestrator worked around it four times by editing the tracked
  `.claude/launch.json` to add a `pnpm preview` server on 4322, then reverting it. In KAN-730 the
  outside server didn't reload content changes, and the "Working on now" check stalled until
  Grant agreed to replace it.
- **Expected saving:** 4 edit-and-revert cycles of a tracked file and 1 question to Grant over 9
  issues. That is roughly 5–10 minutes of orchestrator time and one interruption per milestone.
- **Risk:** `pnpm preview` serves the production build, so drafts are hidden. Draft checks still
  need a dev server.
- **How we'd know it worked:** at the next retro, no temporary edits to `.claude/launch.json` and
  no stalled visual check.
- **Process issue:** _to be added_

### 2. The orchestrator makes temporary content edits only while no subagent is running

- **Evidence:** 8 of 9 issues had an acceptance check that sets content temporarily and reverts it
  (a `target`, a `bio`, a clip, a stage). In KAN-730 the orchestrator ran its toggle while the
  reviewer was working in the same checkout. The reviewer saw `common-ground.md` and
  `.claude/launch.json` modified, flagged them as stray changes, and graded one criterion against
  the orchestrator's temporary state rather than the diff.
- **Expected saving:** one contaminated review in 9 issues, and the question it raises: is a
  modified file the implementer's work or a check in progress? It costs the orchestrator no time,
  only order. Visual checks that don't edit files still run alongside the reviewer.
- **Risk:** the review loop runs slightly more serially. Reviews here took 0.5–8 minutes.
- **How we'd know it worked:** no reviewer report names a file the orchestrator changed
  temporarily.
- **Process issue:** _to be added_

### 3. /shape gives a setup issue a check that runs each pipeline the round decided on, once, with throwaway input

- **Evidence:** the round decided "Images go through Astro's image pipeline", but KAN-727 (setup)
  had no check that resized an image. `sharp` was never installed, and that surfaced in KAN-731
  about 8 hours later as KAN-738, the milestone's only bug against a merged issue. KAN-738 itself
  took 2.6 minutes, but every page built in between shipped images at full size without anyone
  knowing.
- **Expected saving:** a bug found at setup instead of two issues later. Here that is one
  follow-up issue, one PR and its review (about 5 minutes of work and 1 merge for Grant).
- **Risk:** setup issues grow a little, by one throwaway check per decided pipeline.
- **How we'd know it worked:** no bug at the next retro traced back to a setup assumption.
- **Process issue:** _to be added_

## Could not measure

- Token use: there is no per-agent record, and no `/usage` output was pasted.
- Who found each defect in KAN-727 to KAN-731: the fix-round comments say what was fixed, not
  whether the reviewer or the orchestrator found it.
- Subagent wall-clock time per dispatch: only this session's dispatches (KAN-730 to KAN-740)
  report durations, and Linear's states include the orchestrator's own checks.
- Time in Ready for Build: issues were shaped together and started in order, so the wait reflects
  build order, not delay.
- KAN-738's plan comment names a haiku reviewer, but its pull request says sonnet. The PR is
  taken as the record.
