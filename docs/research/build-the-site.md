# Research: build the site

Date: 2026-10-05
Issue: https://linear.app/walkingkangaroo/issue/KAN-726/shape-build-the-site
Round: [docs/rounds/build-the-site.md](../rounds/build-the-site.md)

## The question

Step 2 of [the brief](../brief.md): build the site to the B2 · Daylight design in Astro, with
pages for home, each project, the devlog list and posts, about, and not found. Each project and
each post is one content file, so a stage change or a new post touches one file. A good outcome
is a site that runs locally, matches the board at desktop and 390 px, and is ready for real
content (step 3), the newsletter (step 4) and launch (step 5) to drop into.

## What exists today

- **The repo** holds docs and the process template only: no `package.json`, no `src/`, no
  workflow (`git ls-files`, 2026-10-05).
- **Decisions that bind this work:** 0001 (B2 · Daylight, brand pack unchanged), 0002 (five
  projects, all at Prototype), 0003 (static Astro, pnpm, typed content files), 0004 (GitHub
  Pages on merge, public repo), 0006 (Kit form, embedded later).
- **The design** (read with the Artifact tool, version 1791188382-c391):
  - `B2-Daylight.dc.html`, the home page at 1440 px: header (logo; Games, Devlog, About, a Rust
    "Get updates" pill); a featured hero for Common Ground (21:9 clip area, a four-print
    footprint trail, eyebrow, title, one-liner, stage meter with "Prototype · step 2 of 5",
    "Follow development" and "Watch the prototype" buttons); "Also in the works" cards (3:4
    cover, type, name, one-liner, meter, stage and platforms); the "Five steps to launch" strip
    (Idea, Prototype, Alpha, Beta, Launch with one-line meanings); devlog (three cards); about
    ("Hi, I'm Grant.", photo, bio, links); a Rust newsletter band; footer.
  - `Project.dc.html`, the in-the-works project page: breadcrumb, title and description, "Follow
    this project" and "Join the playtest" buttons, a progress panel (five labelled prints,
    "Target", "Last update"), a 16:7 clip, the project's devlog as a trail of entries, and a
    sidebar with "Working on now" and "Want to help?".
  - There is no phone board for B2. The only phone board (`Mobile.dc.html`) is direction A,
    which was rejected; it uses a menu button. B2's own markup wraps the nav with `flex-wrap`.
- **The footprints in the design are not brand-pack files.** The filled print is one foot of
  the mark in Rust. The empty print is the same foot drawn as an outline in `#9C8A75`, a colour
  outside the brand. The brand pack's README says "Don't stretch, rotate, recolour, outline,
  flip or add effects". The pack has the two-foot mark (`mark/svg/`, `mark/small/svg/`) but no
  single foot and no empty foot. Checked by reading both SVGs from the canvas and listing the
  pack.
- **The design uses seven tints that are not brand tokens:** `#E6D8C2` (media placeholders),
  `#EFE3D0` (the steps strip and side panels), `#FBF6EE` and `#DCCDB6` (the progress panel),
  `#CDBBA0` (rules), `#4A362B` (secondary text) and `#6B5646` (placeholder text). The brand
  tokens (`colour/walking-kangaroo-tokens.css`) are only Rust, Ink, Paper and Rust Light.
  Contrast checked here: `#4A362B` on Paper 9.6:1, on `#EFE3D0` 8.9:1; Rust on `#EFE3D0` 5.3:1.
  All pass 4.5:1.
- **Brand pack** (`C:\dev\walkingkangaroo\brand\dist\walking-kangaroo-brand-pack\`, v2.0):
  horizontal logos for headers, Outfit WOFF2 webfonts with `walking-kangaroo-outfit.css` for
  self-hosting, favicons with `favicon-snippet.html` and `site.webmanifest`, light and dark
  1200×630 link-preview images. Rust on Paper is 5.73:1, fine for text.
- **Copy already in the design:** one-liners for all five projects, "Nothing's out yet. Here's
  everything on the go.", the five stage meanings, "Hi, I'm Grant.", "Be there for the first
  release." The rest is bracketed placeholders: bio, photo, post titles and dates, "How often
  you'll write", Perso's platforms, social links. The platforms disagree in places (the hero
  says "PC / Steam" and "Windows" for Common Ground).
- **This machine runs Node 20.20.2** under nvm-windows, with 14.17.3 also installed (`nvm list`).
  pnpm 9.15.4 is installed.

## Options

The site's shape is settled by decisions 0001 and 0003. The open choices are smaller ones.

### Option A: build the pages now, publish at launch

- **What it is:** six issues build the site locally (scaffold, content and stage meter, home,
  project pages, devlog, about and 404). It is checked through the dev server and screenshots.
  The GitHub Pages workflow and `CNAME` come with the Launch milestone, together with the DNS.
- **Cost:** six issues. Grant sees the site through screenshots and `pnpm dev` until launch.
- **Risk:** low. Deploy problems surface later, in one place, with the DNS change.

### Option B: also publish to the github.io address now

- **What it is:** the same six issues plus the deploy workflow, publishing to
  `walkingkangaroo.github.io/website/`, so Grant can open the site on his phone from day one.
- **Cost:** one more issue, `Risk: high` (it touches the deploy workflow). The `/website` base
  path must be set now and removed at launch when `CNAME` arrives, which touches every
  internal link once more.
- **Risk:** the half-built site, with its bracketed placeholders, is public before Grant has
  signed off on any copy. The project facts forbid bracketed placeholder text going live.

### Option C: Astro 5 instead of Astro 7, to stay on Node 20

- **What it is:** pin an older Astro that still runs on Node 20.
- **Cost:** none now, a major upgrade later.
- **Risk:** Node 20 left support in April 2026, and Astro 5 gets no new features. Not
  recommended. The alternative is to install Node 24 LTS with nvm, which switches the active
  Node for every project on this machine.

## What can't be known without building

- How the B2 header wraps at 390 px without a menu button: the markup suggests the nav drops
  under the logo on one or two lines. A screenshot at 390 px settles it. Grant judges it at
  Human QA.
- How the hero's footprint trail and offset text panel sit at phone width: the board is drawn at
  1440 px only.
- How a 21:9 muted clip performs as the hero: it waits for a real Godot Movie Maker clip in the
  Content milestone. Until then the area shows a plain tint panel.

## Sources

- npm registry, `npm view astro version engines.node`: astro 7.3.5, Node `>=22.12.0`. Run
  2026-10-05.
- Astro install guide, https://docs.astro.build/en/install-and-setup/ : Node 22.12.0 or later;
  odd-numbered Node versions are not supported. Read 2026-10-05 (by a research agent).
- Astro GitHub Pages guide, https://docs.astro.build/en/guides/deploy/github/ : `withastro/action`
  and `actions/deploy-pages`; the action detects pnpm from `pnpm-lock.yaml`; `site` plus `base`
  for a github.io project site, `public/CNAME` and no `base` for a custom domain. Read
  2026-10-05 (by a research agent). Latest releases checked here with `gh api`:
  `withastro/action` v6.1.3, `actions/deploy-pages` v5.0.1.
- Astro content collections, https://docs.astro.build/en/guides/content-collections/ : `glob()`
  loader, `src/content.config.ts`, `reference()`; `image()` in
  https://docs.astro.build/en/guides/images/ . Read 2026-10-05 (by a research agent).
- GitHub Pages limits,
  https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits : 1 GB
  published site, 100 GB a month soft bandwidth limit. Read 2026-10-05 (by a research agent).
- GitHub custom 404,
  https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site :
  a `404.html` at the root is served for missing pages. Read 2026-10-05 (by a research agent).
  That `src/pages/404.astro` builds to `dist/404.html` is unverified until the first build.
- Whether `astro check` needs `@astrojs/check` and `typescript` installed: unverified in the
  docs. `@astrojs/check` 0.9.10 is on npm. The scaffold issue adds both explicitly.
