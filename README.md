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
| `docs/PACK_SPECS_AND_RECYCLING.md` | Specs of common EV packs (kWh, V, kg), spent-pack process, recyclers |
| `docs/RECYCLING_ROUTES_AND_COSTS.md` | Recycler shortlist, who pays whom, shipping cost per pack |
| `media/climathon_concept_video.mp4` | 2-minute explainer video of the idea (source in `media/video_source/`) |
| `web/battery-monster/` | Interactive mind map of the whole process A to Z (live: rderics.id.lv/battery-monster); notes in `docs/MINDMAP.md` |
| `docs/ANSWERS.md` | Answers found by web research to the question list, with what is still open |
| `docs/QUESTIONS.md` | Question list for experts, dealers, ENGYcell, recyclers and authorities |
| `docs/BENCHMARKS.md` | What we can take from tozero, Voltfang and Skeleton Technologies |
| `docs/GRADING_EQUIPMENT.md` | Topsound products and prices, alternatives, rough grading-station budget |
| `docs/CHECKED_ITEMS.md` | Open questions checked against real data (permits, fines, fees, buyers, costs) |
| `docs/PROFIT_MODEL.md` | Profit-protected broker model: stop-loss rules, price per pack, remaining risks |
| `docs/DIAGNOSTIC_CENTER.md` | Full-body scanner and diagnostic-center idea: verdict, players, models, minimum version |
| `docs/PILOT_PLAN.md` | 30-50 car diagnostic report pilot (no scanner): scope, weeks, budget, gates |
| `docs/POST_CRASH_SCAN.md` | Post-crash EV assessment sold to insurers: verdict, value per claim, pilot design |
| `docs/RULES.md` | Judging criteria (5 x 20 %), 3+3 min pitch, prizes |
| `docs/IDEA.md` | The idea in one page (v2) |
| `docs/IDEA_DETAIL.md` | Full concept detail: economics, risks, Q&A, expert questions |
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
