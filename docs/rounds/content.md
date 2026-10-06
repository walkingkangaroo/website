# Decision round: content

Status: Answered
Opened: 2026-10-06
Issue: https://linear.app/walkingkangaroo/issue/KAN-753/shape-content
Research: [docs/research/content.md](../research/content.md)

To answer, edit the `Answer:` lines, reply in chat, or run `/shape content 1: A, 2: yes`.
Say "use the defaults" to take every default below.

## Questions

### 1. Who writes the words: the project descriptions, your bio and the five devlog posts?

- **A:** I draft each one from the project's repo and docs, marked as a draft in its pull
  request, and you rewrite it there before it merges.
- **B:** You write them and send them over; the issues only lay them in.
- **Recommendation:** A, because a draft to edit is faster than a blank page, and nothing merges
  until you've changed it to your words.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-06: "use the defaults except: …"

### 2. Where do the gameplay clips come from?

- **A:** You record 20–60 s of real play per game (Movie Maker or any recorder) and drop the raw
  file in a folder; the build trims and encodes it. Needs ffmpeg installed once with
  `winget install Gyan.FFmpeg`.
- **B:** Scripted captures: a scene in each game repo drives the input and Movie Maker records
  it. Changes four other repos and looks robotic.
- **C:** No clips this milestone: covers only, clips held out to Backlog.
- **Recommendation:** A, because it shows what a player really sees and keeps every change in
  this repo.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** C. Grant, 2026-10-06: "2. c"

### 3. Where does each project's cover come from?

None of the repos has key art yet. Arcsine's and Perso's images are concept mockups, not the
game.

- **A:** A frame from that project's clip (PanePilot: a screenshot), chosen so it crops well to
  the 3:4 card. Real art replaces it whenever you have some.
- **B:** You supply cover art for each project before its issue can finish.
- **Recommendation:** A, because it is honest about what the game looks like today and doesn't
  hold the milestone on art.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** B. Grant, 2026-10-06: "3. b"

### 4. Are these the right facts for each project?

The board and the files disagree on platforms. Correct any cell, and add a target if you want
one shown ("Target: 2027").

| Project | Stage | Platforms | Target |
| --- | --- | --- | --- |
| Common Ground | Prototype | Windows (board: PC / Steam) | none |
| Arcsine | Prototype | PC, Steam | none |
| Aussie Trucker | Prototype | PC | none |
| Perso | Prototype | none shown | none |
| PanePilot | Prototype | Web, Phone | none |

- **A:** Yes, as above.
- **B:** With these changes: …
- **Recommendation:** none: these are your facts. Arcsine's README says "PC / Steam first",
  which would suggest "PC, Steam" for Common Ground too.
- **Default if unanswered:** the table as it stands.
- **For:** Grant
- **Answer:** B: Common Ground, Arcsine, Aussie Trucker and Perso are all Windows and Steam. Grant, 2026-10-06: "4. all games are windows/steam". PanePilot, stages and targets: default taken (as in the table).

### 5. Does each project page get a "Working on now" list?

The page shows it in a side panel when the file has one.

- **A:** Yes: three short lines per project, drafted from its repo's open work, which you then
  keep current by editing the file.
- **B:** No: leave it out until you want to maintain it.
- **Recommendation:** B, because a stale "working on now" reads worse than none, and nothing
  updates it for you.
- **Default if unanswered:** B.
- **For:** Grant
- **Answer:** default taken (B). Grant, 2026-10-06: "use the defaults except: …"

### 6. Which links sit under your bio on the about section?

The board drew Press kit, Contact, GitHub and a social link. Today only GitHub shows. A press
kit is held out to Backlog either way.

- **A:** GitHub only.
- **B:** GitHub plus a contact email address you name (it will be public, so expect spam).
- **C:** B plus social profiles you name.
- **Recommendation:** B, because people who find a game want a way to reach you, if you name the
  address to use.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** None: no links under the bio, not even GitHub. Grant, 2026-10-06: "6. none"

### 7. When are the five devlog posts written?

The brief says one post per project at launch.

- **A:** In this milestone, published as drafts (`draft: true`) until you flip them at launch.
- **B:** In the Launch milestone, close to the day.
- **Recommendation:** A, because writing them alongside each project's clip and cover keeps the
  context fresh, and `draft` keeps them off the built site until you choose.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-06: "use the defaults except: …"

## Decided without asking

- **Clip format and the encode script:** moved to Backlog with the clips (question 2). When
  clips come back: H.264 MP4 only, no audio, 1280×720 at 30 fps, 10–20 s looping, under 5 MB,
  `+faststart`, with a poster frame.
- **Covers** are Grant's art (question 3), asked for as 16:9, at least 1800 px wide, with the
  subject in the middle 42 % so the 3:4 card crop works. The issue resizes it under 500 KB if
  needed, never redraws it, and keeps it in `src/assets/projects/`. Grant attaches it to the
  project's Linear issue.
- **One issue per project**, owning only that project's content file and cover, so they
  can run in parallel.
- **Nothing from PanePilot's `fergus-exports/` or invoice snapshots is used.** They hold real
  customer data.
- **Aussie Trucker's page credits OpenStreetMap** ("© OpenStreetMap contributors") when its cover
  shows the map-derived world, as ODbL requires. If the cover shows ELVIS-derived
  elevation, that issue stops and asks.
- **Concept mockups are never shown as gameplay.**
- **The example devlog post is removed** once the first real post exists.
- **A "Content" milestone** in Linear holds these issues, matching step 3 of the brief.

## Held out

- Gameplay clips for all five projects, and the encode script they need: Backlog (question 2).
- Press kit: Backlog.
- The newsletter band's "how often you'll write" line: the Newsletter step.
- Dedicated 3:4 card art separate from the cover: Backlog, if a crop doesn't work.

## Outcome

- Decisions: [0014](../decisions/0014-claude-drafts-grant-rewrites.md),
  [0015](../decisions/0015-no-clips-yet.md), [0016](../decisions/0016-grant-supplies-covers.md),
  [0017](../decisions/0017-games-list-windows-and-steam.md),
  [0018](../decisions/0018-no-working-on-now.md), [0019](../decisions/0019-about-has-no-links.md),
  [0020](../decisions/0020-devlog-posts-drafted-now.md)
- Spec or design changes: `docs/brief.md` (step 3 and Later), `docs/DECISIONS.md`
- Issues (milestone Content; the project issues can run in any order, each waits on Grant's cover):
  1. https://linear.app/walkingkangaroo/issue/KAN-754/common-ground-shows-its-cover-art-and-a-description-in-grants-words
  2. https://linear.app/walkingkangaroo/issue/KAN-755/arcsine-shows-its-cover-art-and-a-description-in-grants-words
  3. https://linear.app/walkingkangaroo/issue/KAN-756/aussie-trucker-shows-its-cover-art-and-a-description-in-grants-words
  4. https://linear.app/walkingkangaroo/issue/KAN-757/perso-shows-its-cover-art-and-a-description-in-grants-words
  5. https://linear.app/walkingkangaroo/issue/KAN-758/panepilot-shows-its-cover-art-and-a-description-in-grants-words
  6. https://linear.app/walkingkangaroo/issue/KAN-759/the-about-section-shows-grants-photo-and-bio-with-no-links
  7. https://linear.app/walkingkangaroo/issue/KAN-760/each-project-has-a-first-devlog-post-waiting-as-a-draft-for-launch
- Held out to Backlog:
  - https://linear.app/walkingkangaroo/issue/KAN-761/add-a-gameplay-clip-to-each-project
  - https://linear.app/walkingkangaroo/issue/KAN-762/add-a-press-kit
  - https://linear.app/walkingkangaroo/issue/KAN-763/let-a-project-have-separate-34-card-art
