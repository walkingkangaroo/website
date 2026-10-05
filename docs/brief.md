# Brief: walkingkangaroo.com

Agreed with Grant on 5 October 2026. The decisions behind each part are in
[DECISIONS.md](DECISIONS.md).

## What it is

A simple site that shows what Walking Kangaroo is making. Nothing is released yet, so for now it
shows work in progress; it grows release pages when the first game ships. Written in Grant's own
voice ("Hi, I'm Grant").

## The design

Direction **B2 · Daylight** on the wireframe canvas:
https://claude.ai/artifact/RoieMJiNMKNuXoEvUmwK5y (the other boards there are rejected options,
except the project page, which is the template for project pages).

- Paper ground, Ink text, Rust accents, Outfit. Everything comes from the brand pack in
  `C:\dev\walkingkangaroo\brand\dist\walking-kangaroo-brand-pack\`: colour tokens, Outfit
  webfonts, logos, favicons, link-preview images. Never redraw or recolour the logo.
- Home: header; a featured project hero with a footprint trail; "Also in the works" cards; the
  "Five steps to launch" strip; devlog; about; newsletter band; footer.
- **The footprint stage meter**: five prints for Idea, Prototype, Alpha, Beta, Launch. Filled
  prints show how far a project has come. Always paired with the stage name in text.
- Works at phone width.

## What it shows

| Project | Type | Stage | Code |
| --- | --- | --- | --- |
| Common Ground (featured) | Game | Prototype | `C:\dev\commonground` |
| Arcsine | Game | Prototype | `C:\dev\arcsine` |
| Aussie Trucker | Game | Prototype | `C:\dev\aussietrucker` |
| Perso | Game | Prototype | `C:\dev\perso` |
| PanePilot | App | Prototype | `C:\dev\panepilot` |

Only these five are shown; adding one is Grant's call. Perso is a remake of Crepe
Studios' 2017 game; Grant has confirmed it is cleared to show.

## The plan

1. **Set up** (done 2026-10-05): this repo, process-template 1.0.1, the Linear project.
2. **Build the site** to the design: Astro, pages for home, each project, devlog list and posts,
   about, and not found. Each project is one content file (type, stage, platforms, one-liner,
   media), so updating a stage or adding a post is a one-file change.
3. **Content**: per project a one-liner, stage, platforms, cover art and one gameplay clip
   (Godot Movie Maker for the games, dev-server screenshots for PanePilot), and one devlog post
   each at launch. Grant supplies any cover art he has, his photo and a short bio.
4. **Newsletter**: Kit's free plan, its form embedded; Kit's sending records and an SPF record
   added at VentraIP.
5. **Launch**: GitHub Pages; Grant adds the apex and www records at VentraIP; check HTTPS, link
   previews and the phone layout.

Later: release pages (the "Released product page" board), Steam wishlist buttons once store
pages exist, a press kit.
