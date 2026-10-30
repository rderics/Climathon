# Climathon 2026 — Team 5: Second-Life Battery Storage

> **Challenge:** EIT Urban Mobility Hub — *"How do we give electric-vehicle batteries a second life?"*
> **Event:** Climathon Riga 2026, RTU ZIC (Ķīpsalas iela 6A) · 30 Oct – 1 Nov 2026 · final pitches Sun 1 Nov 12:30, results 14:30

## The idea (one paragraph)
Retired EV / used-car batteries still hold a large share of their capacity — too little for a car, plenty for stationary storage. We collect them, test and grade them, assemble them into a single grid-connected **battery block**, and sell **energy storage as a service** to electricity companies (store surplus/cheap power, release it at peak).

## Repo layout
| Path | Purpose |
|---|---|
| `docs/CONTEXT.md` | Event, team, schedule, expert plan |
| `docs/CHALLENGE.md` | EIT UM brief + sourced second-life evidence |
| `docs/BATTERIES.md` | Battery types research: chemistries, formats, supply timing, implications |
| `docs/ECONOMICS.md` | Revenue pools, new-storage cost, second-life costs, Latvian demand (with computed spreads) |
| `docs/FEEDSTOCK_AND_RULES.md` | Latvian EV pool, battery regulation, safety, transport |
| `docs/SIZING_AND_COST.md` | Container size, packs per container, power, pad, cost and sale price (illustrative) |
| `docs/RULES.md` | Judging criteria (5 x 20 %), 3+3 min pitch, prizes |
| `docs/IDEA.md` | Concept, value chain, open questions, assumptions to validate |
| `docs/PITCH.md` | Pitch outline + checklist for Sunday 12:30 |
| `docs/TASKS.md` | Who does what (edit freely) |
| `model/` | Techno-economic / emissions model (the "working prototype") |
| `web/` | Demo UI / pitch visuals |
| `data/` | Source data with citations (never commit unsourced numbers) |

## Working agreement
- Small commits straight to `main` are fine for docs; use a branch + PR for anything in `model/` or `web/` two people touch.
- Every number in the pitch needs a source in `data/` or `docs/IDEA.md`. No invented metrics.
- Pull before you start, push when you stop.

## Auto pull/push (VS Code)
Open this folder in VS Code and trust the workspace: `.vscode/settings.json` turns on auto-fetch every 60 s and an automatic pull+push after every commit (smart commit stages all changes). Pull before you start; if git reports a conflict, fix it in VS Code before pushing.
