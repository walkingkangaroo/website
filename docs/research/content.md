# Research: content

Date: 2026-10-06
Issue: https://linear.app/walkingkangaroo/issue/KAN-753/shape-content
Round: [docs/rounds/content.md](../rounds/content.md)

## The question

Step 3 of the [brief](../brief.md): fill the built site with real content. That means per
project a one-liner, stage, platforms, cover art and one gameplay clip (Godot Movie Maker for the
games, dev-server screenshots for PanePilot), Grant's photo and bio, and one devlog post per
project at launch. A good outcome is a site where no panel is an empty tint, every word is one
Grant has signed off, and adding the next clip or post is a one-file change.

## What exists today

Checked by reading the files in this repo on `main` at `4557bfd`.

- **Project files** (`src/content/projects/*.md`): frontmatter only, no bodies. Each has `name`,
  `type`, `stage: 2`, `order`, `platforms` and `oneLiner` as drawn on the board. Perso's
  `platforms` is `[]`. No `cover`, `clip`, `workingOn` or `target` anywhere.
- **Schema** (`src/content.config.ts`): `cover` is an `image()` from `src/`, `clip` is a path
  under `public/`, `workingOn` is a list of strings, `target` a string, and the Markdown body is
  the longer description. Devlog posts have `title`, `date`, `project`, `summary`, `cover`,
  `draft`.
- **Where a cover shows**, all through `MediaPanel.astro` with `object-fit: cover`:
  the home card at **3:4** (`ProjectCard.astro`), the home hero filling a wide panel
  (`HomeHero.astro`), the project page at 16:9 (`[slug].astro`), the clip's poster, and the
  share image at 1200 px wide. One image is cropped to all of these, so the subject must sit in
  the middle 42 % of a 16:9 frame to survive the 3:4 crop.
- **Clips** play muted, looped, inline and autoplaying, and only when the visitor hasn't asked
  for reduced motion; the poster shows otherwise (`MediaPanel.astro`). MP4 and WebM types are
  recognised.
- **About** (`src/data/site.ts`): `bio: null`, `photo: null`, links GitHub only. The board drew
  "Press kit", "Contact", "GitHub" and "[Social]".
- **Devlog**: one `draft: true` example post (`src/content/devlog/example-post.md`).
- **Copy still marked as a draft for Grant**: the home and about page descriptions
  (`src/pages/index.astro:17`, `src/pages/about.astro:7`).
- **Platforms disagree** between the board and the files: the hero kicker reads
  "PC / Steam" on the board, Common Ground's file says `[Windows]`. Noted in the last round as
  Grant's to confirm here.
- **ffmpeg is not installed** on this machine (`which ffmpeg` finds nothing). Godot 4.7 mono is
  on the PATH.

What the five project repos hold (survey by an Explore agent, then spot-checked by reading the
named files):

| Project | Stack | Usable images today | Notes |
| --- | --- | --- | --- |
| Common Ground | Godot 4.7 C# | Heron character renders in `art_source/.../heron/previews/` (in-engine and look-dev); level-tool renders are top-down diagnostics | Its `CLAUDE.md:185` already documents capturing with `--write-movie <dir>/f.png --quit-after N` from a scene that drives input |
| Arcsine | Godot 4.7 C# | None captured. 20 art-direction and theme mockups in `docs/` | The mockups are not the game; showing them as screenshots would mislead. README: "PC / Steam first" |
| Aussie Trucker | Godot 4.7 C# | Terrain and map diagnostics only | World built from OpenStreetMap (ODbL) and DEA land cover (CC BY), so any picture of it needs attribution. An ELVIS elevation licence is unresolved (`docs/world-assets.md:16`) |
| Perso | Godot 4.7 C# | One prop render; four AI concept images | Cleared to show (decision 0002) |
| PanePilot | Next.js 16 PWA | Brand kit: logos, 1200×630 OG card | `fergus-exports/` holds real customer data (git-ignored); invoice snapshot tests may show real names. Screenshots must use sample data only |

## Options

The topic has three independent choices: who writes the words, where clips come from, and
where covers come from. The options below are for clips, the costliest.

### Option A: Grant plays, the build encodes

- **What it is:** Grant records 20–60 s of real play per game with Movie Maker
  (`--write-movie clip.avi --fixed-fps 30 --resolution 1280x720`) or any screen recorder and drops
  the raw file in a folder. An issue adds a one-command encode script (ffmpeg: H.264, no audio,
  `+faststart`, poster frame), and each project issue trims, encodes and wires its clip.
- **Cost:** one tooling issue plus one per project. Needs ffmpeg installed once
  (`winget install Gyan.FFmpeg`). An hour of Grant's play across the four games.
- **Risk:** low. The clip shows what a player really sees. It waits on Grant's recordings.

### Option B: scripted capture in each game repo

- **What it is:** a throwaway scene per game drives input and Movie Maker writes frames
  headless, as Common Ground's notes describe.
- **Cost:** work in four other repos, outside this project's issues and review. Each scene must
  be written against that game's controls.
- **Risk:** high. Scripted play looks robotic, and changes to other repos sit outside this
  project's process.

### Option C: stills only for now

- **What it is:** covers only; clips come later as their own issues.
- **Cost:** least.
- **Risk:** the hero's "Watch the prototype" idea and the project page's clip panel stay as stills
  at launch. The brief asks for a clip each.

Recommendation: **A**, with Common Ground free to use its existing capture route if Grant prefers.

## What can't be known without building

- Whether a 15 s clip of each game stays under 5 MB at 720p. Rules of thumb say 1–3 MB for
  H.264 at CRF ~26, but it depends on motion. The first encode settles it.
- Whether one cover crops well to both 3:4 and the wide hero. Check each at 390 px and desktop.
- Whether the copy sounds like Grant. Only he can say.

## Sources

- Godot docs, "Creating movies": Movie Maker writes OGV (recommended), AVI (MJPEG) or a PNG
  sequence plus WAV; started with `--write-movie`, with `--resolution` and `--fixed-fps`; converts
  with ffmpeg. https://docs.godotengine.org/en/stable/tutorials/animation/creating_movies.html
  (read 2026-10-06). None of these play in a browser as written, so conversion is required.
- WebKit, "New video policies for iOS": muted inline video with `playsinline` may autoplay.
  https://webkit.org/blog/6784/new-video-policies-for-ios/ (read by a research agent,
  2026-10-06; unverified by me).
- GitHub Pages limits: 1 GB published site, 100 GB/month soft bandwidth.
  https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits (read by
  a research agent, 2026-10-06; unverified by me).
- Unverified: H.264 MP4 alone plays in all current browsers; WebM is an optional saving.
