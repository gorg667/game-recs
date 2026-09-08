# GameRecs — personalized PC game recommendations

A static, data-driven website with 128 hand-picked PC games across 36 genre categories, each with a full write-up, personal fit score, co-op info, tips and caveats.

**Live site:** https://gorg667.github.io/game-recs/ (after enabling Pages — see below)

## Enable GitHub Pages (one-time, ~30 seconds)

1. Open https://github.com/gorg667/game-recs/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Wait ~1 minute, then visit https://gorg667.github.io/game-recs/

## Features

- **Top Picks** — the 12 highest fit-score games for your priority profile
- **Mood tabs** — skill test / big brain / friends tonight / 30 minutes / get lost / number-go-up / GPU showcase / story
- **Full library** — search, genre/mode/length/difficulty filters, tag cloud, 6 sort orders
- **Co-op section** grouped by player count (2 / 3–4 / 5–8 / 9+)
- **Competitive section**
- **12 genre guides** with fit rating and entry points
- **12-month roadmap** alternating intensity
- **Hardware tips** for a 9070 XT / 9950X build
- **FAQ & methodology**
- Click any card for a detail modal: verdict, description, why it fits, caveats, tips, 7-axis priority breakdown, similar games, Steam/HLTB/ProtonDB/PCGamingWiki links. Deep-linkable via `#g=<id>`.

## Fit score

Weighted sum of seven 1–10 editorial ratings using your stated priority order
(gameplay 26% · challenge 18% · exploration 16% · progression 14% · creativity 11% · story 8% · atmosphere 7%),
nudged ±0.6 by critic consensus. Computed client-side in `js/app.js`.

## Editing

No build step. Edit `data/games-*.js` (schema in `PROGRESS.md`) or `js/data-content*.js` and push to `main`.

## Structure

```
index.html            page shell
css/style.css         dark theme, responsive
js/app.js             rendering, filtering, fit score, modal
js/data-content.js    moods + genre guides
js/data-content-2.js  roadmap + hardware + FAQ
data/games-*.js       128 game entries in 8 batch files
docs/USER_PROFILE.md  intake answers
PROGRESS.md           handoff notes for continuation
```
