# Decision round: content

Status: Waiting on Grant
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
- **Answer:**

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
- **Answer:**

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
- **Answer:**

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
- **Answer:**

### 5. Does each project page get a "Working on now" list?

The page shows it in a side panel when the file has one.

- **A:** Yes: three short lines per project, drafted from its repo's open work, which you then
  keep current by editing the file.
- **B:** No: leave it out until you want to maintain it.
- **Recommendation:** B, because a stale "working on now" reads worse than none, and nothing
  updates it for you.
- **Default if unanswered:** B.
- **For:** Grant
- **Answer:**

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
- **Answer:**

### 7. When are the five devlog posts written?

The brief says one post per project at launch.

- **A:** In this milestone, published as drafts (`draft: true`) until you flip them at launch.
- **B:** In the Launch milestone, close to the day.
- **Recommendation:** A, because writing them alongside each project's clip and cover keeps the
  context fresh, and `draft` keeps them off the built site until you choose.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:**

## Decided without asking

- **Clip format:** H.264 MP4 only, no audio track, 1280×720 at 30 fps, 10–20 s looping,
  under 5 MB, `+faststart`, with a poster frame. MP4 plays everywhere the site runs; WebM would
  only shave size.
- **One encode script** (`scripts/encode-clip.sh`) is its own first issue, so the five project
  issues don't each reinvent it.
- **Covers** are 16:9, at least 1800 px wide and under 500 KB, with the subject in the middle
  42 % so the 3:4 card crop works. They live in `src/assets/projects/`.
- **One issue per project**, owning only that project's content file, cover and clip, so they
  can run in parallel.
- **PanePilot screenshots use sample data only.** If the local database holds real customers,
  the issue stops and asks; nothing from `fergus-exports/` or the invoice snapshots is used.
- **Aussie Trucker's page credits OpenStreetMap** ("© OpenStreetMap contributors") when its clip
  or cover shows the map-derived world, as ODbL requires. If the shot shows ELVIS-derived
  elevation, that issue stops and asks.
- **Concept mockups are never shown as gameplay.**
- **The example devlog post is removed** once the first real post exists.
- **A "Content" milestone** in Linear holds these issues, matching step 3 of the brief.

## Held out

- Press kit: Backlog.
- The newsletter band's "how often you'll write" line: the Newsletter step.
- Dedicated 3:4 card art separate from the cover: Backlog, if a crop doesn't work.

## Outcome

Filled in when the answers are recorded.

- Decisions: <links to the decision records>
- Spec or design changes: <files>
- Issues: <full Linear URLs, in build order>
