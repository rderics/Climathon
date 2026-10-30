# The idea (v2, synthesised from the whole repo — 2026-10-30)

Team 5, "5th team Battery monster", EIT Urban Mobility challenge: *Giving EV batteries a second life*.
Full working detail (economics tables, Q&A prep, expert questions, decisions list) is in **docs/IDEA_DETAIL.md**. Sources: docs/ and data/ (teammate research).

## One-liner
We run a Baltic take-back and grading hub for retired EV batteries. We decide for each pack whether it goes to a second life in small grid-limited storage units (EV charging hubs, depots) or to a recycler. We take responsibility for safety, the battery passport and end of life, so fleets and energy companies don't have to.

## What changed from the original idea
The original plan was a big block of used batteries storing electricity for electricity companies. The research says that does not work as a stand-alone business:
- New stationary storage is cheap and still falling (about $177/kWh turnkey in Europe, BNEF 2025).
- Baltic reserve-market (balancing) prices are down 70–90% from 2025 and the market is saturated (`docs/GRID_BALANCING.md`).
- Second life is about 0.2% of European grid-scale projects; some firms switched back to new batteries (`data/skeptic_case.md`).
- Break-even studies say used packs must cost no more than about 40–60% of new, roughly $28–42/kWh.
So we keep the block, but sell something different.

## Problem
- Packs retire at about 70–80% health, and SoH alone does not say whether they are safe to reuse (EIT UM brief).
- Pack designs and data are fragmented; manufacturers lock the history data.
- Insurers and fire services are wary and liability is unclear. Under EU Regulation 2023/1542 the repurposer becomes the manufacturer, with a new battery passport from 18 Feb 2027.
- Latvia has no confirmed EV-pack collection route and very few packs: 13,916 EVs, about 80 packs retiring a year (teammate estimate).

## The offer (decision 30.10: A + B)
- **A — circularity as a service:** one liable party that sources packs, grades them beyond SoH, certifies and documents them, operates them with monitoring, and takes them back at end of life.
- **B — first product:** small second-life storage where a big new container does not fit or the grid is weak: EV fast-charger hubs, bus depots, backup replacing diesel generators or lead-acid. Precedents: Connected Energy at Volvo truck hubs (UK), second-life batteries supporting e-bus charging in Madrid.
- **Balancing revenue** is a bonus through an aggregator, not the business.

## How it works
1. **Source** undamaged packs from fleets, planned replacements, dismantlers and insurers; most volume must come from abroad (e.g. Norway: 4,570 batteries removed from scrapped cars in 2024).
2. **Grade**: capacity, internal resistance, self-discharge, insulation; route each pack to reuse, repurpose or recycle.
3. **Assemble**: strings separated by chemistry and voltage (Hyundai/Kia 800 V packs cannot share a string with 400 V packs), a DC-DC converter per string. One 20 ft container holds about 1–2 MWh (our estimate), weighs 25–40 t and needs a reinforced concrete pad (`docs/SIZING_AND_COST.md`).
4. **Operate**: software monitors every string, isolates a failing pack; failed packs are swapped, re-graded or recycled.
5. **Close the loop**: failed packs go to Fortum (Finland), AE Elemental or Eneris (Poland) under contract. We do not build recycling ourselves (about EUR 50–400 M; `docs/RECYCLING_ROUTES_AND_COSTS.md`).

## Economics (honest version)
- Our first-pass cost for 1 MWh usable is about $160–340k, about $190–440k with grid connection (unvalidated). That is similar to new storage, so we do not win on kWh price.
- We win only if packs cost almost nothing (fleet take-back), grading is cheap and fast, whole packs are reused, and customers pay for the liability-free service or avoid a grid upgrade.
- End of life is a cost, not income: about EUR 350–800 per NMC pack and EUR 1,200–1,800 per LFP pack unless a quote shows otherwise.

## Why it fits the jury (5 x 20 %)
- **Problem:** governance and trust barriers (TalTech, EIT UM brief).
- **Value proposition:** one liable partner for fleets and energy companies.
- **Solution:** grading beyond SoH and string separation, as in the brief's outcome examples.
- **Business model and sustainability:** circular, honest economics, pilot path. Funding routes in the teammate research: EIT Urban Mobility open call (up to EUR 2 M, cut-off 28 Jan 2027), Norway Grants via LIAA (EUR 50k–3 M, 2027 calls).
- **Pitch and Q&A:** weak points are known and answered in `docs/IDEA_DETAIL.md` section 8.

## What this idea is not
- Not a merchant balancing business.
- Not a cheaper-kWh-than-new pitch.
- Not our own recycling plant.

## Conflicts in the repo to resolve as a team
1. **Challenge choice — DECIDED 30.10 (Rinalds): we do the EV battery challenge.** (`docs/CHALLENGE_EVALUATION.md` had recommended other challenges.)
2. **Plant size — DECIDED 30.10 (Rinalds): start-up scale, much smaller.** `docs/LATVIA_PLANT_BUSINESS_MODEL.md` (10,000 t/year, EUR 20–35 M) is a long-term option, not the starting point.
3. **Proposed routing (Rinalds, 30.10 — to validate):** about **70 %** of packs go to recycling (mechanical pre-treatment; sell the metal fractions; whatever we cannot process goes to Poland, or we split packs into smaller units/modules and process more in Latvia), and about **30 %** go to **ENGYcell** (Riga second-life storage start-up), who already do the second-life product, so we sell them the packs. To check: does ENGYcell buy packs, at what price and spec? What can legally and technically be processed in Latvia (VVD permits)? "Selling metal" means copper/aluminium/steel fractions and black mass to refiners; nickel, cobalt and lithium need a refiner (Poland/Finland). The 70/30 split is a hypothesis until grading data exists.
3. **Open decisions:** first customer (recommended: fleet/depot operators such as Rīgas satiksme), feedstock policy (NMC/NCA with known history first; exclude early LMO Leafs and damaged packs), what the 3-minute demo shows.

## Feedstock policy (DECIDED 30.10: Claude's proposal accepted — to refine with ENGYcell's spec and recycler quotes)
The rules at the front door: what we accept, from whom, in what condition, and where it goes.
- **Accept:** intact packs or modules with known make, model and year from fleets, dismantlers and insurers, with a test record or history (needed under Annex XIV of Regulation 2023/1542 to treat a pack as "used" rather than "waste").
- **NMC/NCA** (Tesla, Hyundai, Kia, VW): accept; they carry metal value, and the best go to ENGYcell.
- **LFP:** accept only if the supplier pays a fee or the pack is good enough for second life (recycling LFP usually costs money).
- **Early Nissan Leaf (LMO):** recycling only, and only for a fee.
- **Damaged packs:** do not take at the start (much costlier to ship and handle; about USD 1,300–2,730 per pack in one estimate).
- **Three outcomes per pack:** Grade A -> sell to ENGYcell (target about 30 %); Grade B -> disassemble into modules/cells and process in Latvia if the permit allows; Grade C -> ship to Poland or Finland. Grade thresholds come from ENGYcell's specification.
- **Sourcing:** Latvia retires only about 80 packs a year, so we also import (Norway, Lithuania, Poland, Nordics).
- **What we sell from recycling:** copper, aluminium and steel fractions plus black mass to a refiner. We do not refine (hydrometallurgy is a large chemical plant). Recyclers typically pay about 60–72 % of the nickel/cobalt value of black mass and only about 3–5 % for lithium (Fastmarkets, 2024; China NMC black mass 72 % in Oct 2026) — so chemistry mix drives our revenue.

## Demo scope (DECIDED 30.10: Claude's proposal accepted)
What we show in the 3-minute pitch and build for Sunday: **one small tool that does two things**.
1. **Pack triage:** enter make, model, kWh, health and chemistry; it says whether the pack goes to ENGYcell, to Latvian processing, or to Poland, and shows the value or cost of that pack.
2. **Pilot P&L:** the same logic over about 100 packs, showing the 70/30 flow, yearly revenue, cost and result, with every input marked as sourced or assumption.
No hardware. Supporting asset: a 1-minute explainer video of the concept (see `media/`).

## Biggest unknowns
- Real pack prices, recycler quotes, pack dimensions.
- Whether any customer will pay a premium for the service.
- Latvian fire and permit rules for storage.
Expert questions for Saturday: `docs/IDEA_DETAIL.md` section 11.
