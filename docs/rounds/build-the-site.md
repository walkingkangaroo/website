# Decision round: build the site

Status: Answered
Opened: 2026-10-05
Issue: https://linear.app/walkingkangaroo/issue/KAN-726/shape-build-the-site
Research: [docs/research/build-the-site.md](../research/build-the-site.md)

To answer, edit the `Answer:` lines, reply in chat, or run `/shape build-the-site 1: A, 2: yes`.
Say "use the defaults" to take every default below.

## Questions

### 1. Can the build install Node 24 LTS with nvm and make it this machine's active Node?

- **A:** Yes. Astro 7 (current, 7.3.5) needs Node 22.12 or later, and this machine runs
  Node 20.20.2. nvm-windows switches Node for every project at once, so check that your other
  projects are happy on 24 first.
- **B:** No. Pin Astro 5, which still runs on Node 20. Node 20 has been out of support since
  April 2026, so this means a major upgrade later.
- **Recommendation:** A, because Node 20 is already out of support and Astro 7 is what the docs
  describe.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

### 2. How should the empty footprints in the stage meter be drawn?

The design's filled print is one foot cut from the logo mark, in Rust. The empty print is that
foot drawn as an outline in a grey (`#9C8A75`) that isn't in the brand. The brand pack says
never to outline or recolour the mark.

- **A:** Filled is the single foot in Rust, the shape unchanged. Empty is the same solid foot
  at about 20% opacity. No outline and no new colour.
- **B:** As drawn: an outline in `#9C8A75`, recorded as a deliberate exception to the brand
  rules.
- **C:** Use the whole two-foot mark, unchanged, for each step (filled, or faded for empty).
  It is wider, so the meter takes about twice the room.
- **Recommendation:** A, because it keeps the look of the board without outlining the mark or
  adding a colour.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

### 3. Can the site use the design's seven Paper and Ink tints alongside the four brand colours?

The board uses `#E6D8C2`, `#EFE3D0`, `#FBF6EE`, `#DCCDB6`, `#CDBBA0`, `#4A362B` (secondary
text) and `#6B5646`. All the text pairs pass 4.5:1.

- **A:** Yes. They become named site tokens, recorded as site tints, not brand colours.
- **B:** No. Use only Rust, Ink, Paper and Rust Light, with Ink at reduced opacity for panels,
  rules and secondary text.
- **Recommendation:** A, because the panels, cards and secondary text in the board depend on
  them, and they are blends of Paper and Ink rather than new hues.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

### 4. Should the site be published to the github.io address while it's being built, or only at launch?

- **A:** At launch. This milestone builds and checks the site locally, with screenshots sent to
  you. The GitHub Pages workflow and `CNAME` come with the Launch step, together with the DNS.
- **B:** Now. Add the deploy workflow in this milestone, publishing to
  `walkingkangaroo.github.io/website/`, so you can open it on your phone. The half-built
  site, with its bracketed placeholders, would be public. The address needs a `/website` base
  path that is taken out again at launch.
- **Recommendation:** A, because nothing with placeholder text goes live without your sign-off,
  and the deploy is easier to test once, with the real domain.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

### 5. How much of the project page board should be built now?

The board has a "Join the playtest" button, a "Want to help?" playtest box, a "Working on now"
list, and "Target" and "Last update" lines.

- **A:** Build the title, description, "Follow this project", the stage panel, the clip and the
  project's devlog. "Working on now" and "Target" are optional fields in the project file and
  show only when filled. "Last update" comes from the newest post. The playtest button and box
  wait until there is a playtest (held out to Backlog).
- **B:** All of it, with the playtest link as an optional field that hides when it's empty.
- **C:** Only what the brief lists (type, stage, platforms, one-liner, media) and the devlog.
- **Recommendation:** A, because nothing on the site would offer a playtest that doesn't exist,
  and the optional fields cost one line each in a project file.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

### 6. On a phone, should the header's links wrap under the logo, or fold into a menu button?

There is no B2 phone board. The B2 markup wraps the four links; the rejected A board used a
menu button.

- **A:** Wrap: the logo on one line, Games, Devlog, About and "Get updates" on the next. No
  script.
- **B:** A menu button that opens the links. It needs a small script and its own keyboard and
  focus handling.
- **Recommendation:** A, because four short links fit on one line at 390 px, and it needs no
  script.
- **Default if unanswered:** A.
- **For:** Grant
- **Answer:** default taken (A). Grant, 2026-10-05: "use the defaults".

## Decided without asking

- **Addresses:** `/`, `/projects/<slug>/`, `/devlog/`, `/devlog/<slug>/`, `/about/`, and a
  `404` page. "Projects" rather than "games" because PanePilot is an app.
- **Nav labels stay as drawn**, including "Games", though PanePilot is an app. Grant can change
  it at Human QA with a one-word edit.
- **Fonts are self-hosted** from the brand pack's `webfonts/` and `walking-kangaroo-outfit.css`,
  Regular 400 and SemiBold 600 only. No call to Google Fonts.
- **Brand files are copied unchanged:** the horizontal primary logo for the header and footer,
  the favicon set with its snippet and manifest, and the light 1200×630 link preview as the
  default share image.
- **Plain CSS with custom properties**, scoped in Astro components. No CSS framework, no client
  framework, and no client script unless question 6 asks for one.
- **Project files carry facts from the board only:** the one-liners and platforms as drawn,
  stage 2 (Prototype) for all five. Anything the board leaves as a placeholder (Perso's
  platforms) is left empty and hidden. Grant confirms every project's wording in the Content
  milestone; the board's platforms disagree in places.
- **Missing media shows a plain tint panel** with no bracketed text, so a page is never broken
  or showing a placeholder while waiting for content.
- **The devlog has no real posts yet.** One example post marked `draft: true` exercises the post
  pages in `pnpm dev` and is left out of `pnpm build`. With no published posts, the home page
  hides its devlog section, and `/devlog/` says there are no posts yet.
- **The newsletter band is built, with its form inert.** Kit's form drops in during the
  Newsletter step. "Get updates" and "Follow …" buttons link to the band.
- **Images go through Astro's image pipeline** (`astro:assets`), so covers are resized and
  compressed at build.
- **A Linear milestone, "Build the site",** holds these issues, matching step 2 of the brief.

## Held out

- RSS feed for the devlog: Backlog.
- Sitemap (it needs the final domain): Backlog, for the Launch step.
- Playtest sign-up ("Join the playtest", "Want to help?"): Backlog.
- The GitHub Pages workflow and `CNAME`: Backlog, for the Launch step.
- Press kit, release pages and Steam wishlist buttons: already "Later" in the brief.

## Outcome

Recorded 2026-10-05. Grant took every default.

- Decisions: [0008](../decisions/0008-astro-7-on-node-24.md),
  [0009](../decisions/0009-stage-meter-solid-footprints.md),
  [0010](../decisions/0010-site-tints.md), [0011](../decisions/0011-publish-at-launch.md),
  [0012](../decisions/0012-project-page-scope.md),
  [0013](../decisions/0013-phone-header-wraps.md)
- Spec or design changes: `docs/brief.md` (stage meter, step 2, step 5), `CLAUDE.md` (Node,
  site tints), `docs/process/review-checklist.md` (colours), `docs/DECISIONS.md`
- Issues, milestone Build the site, in build order:
  1. https://linear.app/walkingkangaroo/issue/KAN-727/the-site-runs-locally-with-the-brands-look-header-and-footer
  2. https://linear.app/walkingkangaroo/issue/KAN-728/each-project-is-one-content-file-shown-with-the-footprint-stage-meter
  3. https://linear.app/walkingkangaroo/issue/KAN-729/the-home-page-shows-the-featured-project-everything-in-the-works-and
  4. https://linear.app/walkingkangaroo/issue/KAN-731/the-devlog-has-a-list-of-posts-and-a-page-for-each-post
  5. https://linear.app/walkingkangaroo/issue/KAN-730/each-project-has-its-own-page-with-its-stage-clip-and-devlog
  6. https://linear.app/walkingkangaroo/issue/KAN-732/the-site-has-an-about-page-and-a-not-found-page (can run beside 4 and 5)
- Held out to Backlog:
  - https://linear.app/walkingkangaroo/issue/KAN-733/publish-the-site-to-github-pages-at-walkingkangaroocom
  - https://linear.app/walkingkangaroo/issue/KAN-734/add-a-sitemap
  - https://linear.app/walkingkangaroo/issue/KAN-735/add-an-rss-feed-for-the-devlog
  - https://linear.app/walkingkangaroo/issue/KAN-736/let-visitors-sign-up-to-playtest-a-project
