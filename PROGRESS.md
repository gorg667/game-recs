# PROGRESS / HANDOFF NOTES (read this first after any context compaction)

## Project
Personal game-recommendation website for user `gorg667`, hosted on GitHub Pages.
Repo: https://github.com/gorg667/game-recs (push straight to `main`, NO branches/PRs — user's explicit instruction).

## User constraints (verbatim intent)
- Workflow may be interrupted anytime (credits). => Commit + push to `main` after EVERY meaningful step.
- Context gets compacted. => Keep this file updated with reasoning, decisions, and next steps.
- Site must be "the best possible, most comprehensive, detailed, in-depth" game recommendations site.
- Ask the user all useful questions BEFORE building the recommendations.

## Status log
- [2026-09-08] Repo initialized, GitHub auth set up. Created PROGRESS.md. Asked user the intake questions (see below).
- NEXT: wait for user answers -> record them in `docs/USER_PROFILE.md` -> design site -> build -> push -> enable GH Pages.

## Intake questions asked (Q1-Q12)
1. Platforms owned / PC specs
2. Favorite games ever + why
3. Games disliked + why
4. Genres loved / avoided
5. Time per session & total availability
6. Single-player vs multiplayer / co-op partners
7. Story vs mechanics vs atmosphere priority
8. Difficulty preference
9. Tolerance for old graphics / retro / indie / early access
10. Budget, subscriptions (Game Pass, PS Plus, etc.), region
11. Content sensitivities (horror, gore, etc.)
12. Site preferences: language, dark/light, tone, extras (backlog tracker, tier lists, etc.)

## Planned tech
- Pure static HTML/CSS/JS (no build step) so GH Pages serves it directly from `main` root (or `/docs`).
- Data-driven: games stored in `data/games.json`; JS renders cards, filters, search, detail pages.
- Design: dark theme, responsive, accessible.

## Decisions
(none yet beyond the above)
