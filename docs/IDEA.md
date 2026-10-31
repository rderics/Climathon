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
5. **Close the loop**: packs that fail are mechanically processed in Latvia as far as we can (all recycled packs; see the recycling plan below); what we cannot process goes to Fortum (Finland), AE Elemental or Eneris (Poland) under contract. We do not build a refinery or full chemical plant (about EUR 50–400 M; `docs/RECYCLING_ROUTES_AND_COSTS.md`).

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
- Not a refinery or full chemical recycling plant. We do run a small mechanical line (take apart, shred, separate).

## Conflicts in the repo to resolve as a team
1. **Challenge choice — DECIDED 30.10 (Rinalds): we do the EV battery challenge.** (`docs/CHALLENGE_EVALUATION.md` had recommended other challenges.)
2. **Plant size — DECIDED 30.10 (Rinalds): start-up scale, much smaller.** `docs/LATVIA_PLANT_BUSINESS_MODEL.md` (10,000 t/year, EUR 20–35 M) is a long-term option, not the starting point.
3. **Proposed routing (Rinalds, 30.10 — to validate):** about **70 %** of packs go to recycling (mechanical pre-treatment; sell the metal fractions; whatever we cannot process goes to Poland, or we split packs into smaller units/modules and process more in Latvia), and about **30 %** go to **ENGYcell** (Riga second-life storage start-up), who already do the second-life product, so we sell them the packs. To check: does ENGYcell buy packs, at what price and spec? What can legally and technically be processed in Latvia (VVD permits)? "Selling metal" means copper/aluminium/steel fractions and black mass to refiners; nickel, cobalt and lithium need a refiner (Poland/Finland). The 70/30 split is a hypothesis until grading data exists.
3. **Open decisions:** first customer (recommended: fleet/depot operators such as Rīgas satiksme), feedstock policy (NMC/NCA with known history first; exclude early LMO Leafs and damaged packs), what the 3-minute demo shows.

## Feedstock policy (DECIDED 30.10: Claude's proposal accepted — to refine with ENGYcell's spec and recycler quotes)
The rules at the front door: what we accept, from whom, in what condition, and where it goes.
- **Accept:** intact packs or modules with known make, model and year from fleets, dismantlers and insurers, with a test record or history (needed under Annex XIV of Regulation 2023/1542 to treat a pack as "used" rather than "waste").
- **NMC/NCA** (Tesla, Hyundai, Kia, VW): accept; they carry metal value, and the best go to ENGYcell.
- **LFP:** accept; its black mass is worth little, so the supplier's fee must cover the cost (see the recycling plan below). Like every recycled pack, it is processed mechanically in Latvia as far as we can, and what we cannot process goes abroad.
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

## Recycling plan (decided 31.10 by Rinalds)
**Mechanically recycle ALL recycled packs (NMC, NCA, LFP) as far as we can in Latvia, and ship the parts we cannot process abroad** (Finland or Poland), instead of shipping whole packs.
- **What changes:** freight is paid on far less weight (black mass is about 40-50 % of a battery's weight; estimate, not yet measured), and copper, aluminium and steel are sold locally.
- **Chemistry matters:** nickel-based (NMC/NCA) black mass has real value (refiners paid about 60-72 % of nickel/cobalt value in 2024), so for those packs the question is whether our black mass sells for more than the whole pack would; LFP black mass is worth little outside China (mostly the lithium); gate fees for scrap LFP were EUR 3,000-4,000/t in 2024 (one 2025 source: EUR 500-800/t); most LFP black mass in Europe counts as hazardous waste, which limits export to non-OECD countries; a 2025 industry panel said lithium would need to be about USD 20,000/t for LFP recycling to break even in Europe, and one panelist saw no European business case. So the take-back fee and the metal sales must carry the economics.
- **Capex:** a small mechanical line is far cheaper than a refinery. Reference points: Redux/Saubermacher Bremerhaven, about EUR 3 M for 10,000 t/yr incl. discharge (2018 press); an Indian consultancy blog puts 500-1,000 t/yr at roughly EUR 0.3-0.6 M (weak source). The teammate pre-feasibility (10,000 t/yr, EUR 20-35 M) is much larger. Our own line's cost: **unknown, needs equipment quotes**.
- **To find out:** black mass and metal yield per LFP pack, price a refiner pays or charges for LFP black mass, line and running cost, VVD permit for treatment, hazardous-waste shipping rules. Details and sources: docs/RECYCLING_ROUTES_AND_COSTS.md section 4c.

## Lessons from comparable companies (31.10; details in docs/BENCHMARKS.md)
From tozero (hydromet recycler), Voltfang (second-life storage) and Skeleton Technologies (funding playbook only). Changes to the plan:
1. **Volume:** Latvia alone is too small (about 13,900 EVs). Plan a **Baltic regional hub** and also accept carmaker surplus, warranty returns and production scrap, not only end-of-life packs. Show a Latvia-only scenario next to a regional one; do not state a regional volume until we have a sourced figure. (Voltfang drifted to surplus new modules and new cells because used-pack supply disappointed.)
2. **Fee line:** charge for testing, grading and certification per pack, so revenue does not depend only on resale margin.
3. **Black mass:** count only NMC/NCA black mass as income; treat LFP black mass as zero or a cost until a buyer quotes otherwise. Before promising offtake, run a **joint test batch** with a hydromet buyer (the tozero-RET pattern) and ask for a written letter of intent.
4. **ENGYcell:** offer a **take-back guarantee** for end-of-life modules (Voltfang bundles take-back into its price) and ask for a letter of intent on volume and price.
5. **Certification:** ISO 9001 baseline, CE for any pack we place on the market, and check UL 1974 (repurposing) as a differentiator. Publish our own state-of-health grading scheme; UN 38.3 is a transport test, not a grading standard.
6. **Funding:** EU and Latvian grants plus a strategic investor from the chain (recycler, logistics, utility); tozero and Voltfang rounds are examples only (their totals are partly unverified).
7. **Capex:** lease existing industrial space (tozero's demo plant, Voltfang's halls) and keep the mechanical line small.
8. **Regulation gap:** none of the three explains Regulation 2023/1542, battery-passport or hazardous-waste duties; we must resolve this with the Latvian authority and a lawyer.

## Profit-protected structure (31.10; RECOMMENDATION for the team to decide; details docs/PROFIT_MODEL.md)
Real-data check (docs/CHECKED_ITEMS.md) shows that handing over a pack costs money (GRS reference tariff: NMC/NCA €1.31/kg, LFP €3.68/kg plus pallet fees), the Latvian producer scheme fee is only €0.23/kg (about €92 per pack), black mass has no 2026 European payable, ENGYcell is not a verified buyer, and a hub with a fixed cost base needs about 45 packs a month. So:
- **Start as a take-back broker/service with zero fixed costs and pass-through pricing**: no pack without a signed fee that covers the recycler's binding quote, freight, handling and a margin; prepayment; intact packs only; no inventory, no lease, no shredder, no payroll.
- **This reverses the earlier plan to start with our own mechanical line**; the line becomes a later option once quotes, yields, volume and the permit justify it.
- **Needed fee (our arithmetic): about €1,500-1,600 per NMC/NCA pack and about €2,700 per LFP pack.** Whether producers will pay that is unknown and is the first thing to test.
- Second-life sales and health tests are add-ons, not the base case.

## Option: battery-first diagnostic report pilot (31.10, decided by Rinalds; plan in docs/PILOT_PLAN.md)
A full-body scanner cannot measure battery health (it sees casing, tyres, underside); health comes from the car's battery data. So the option is a **no-scanner report service**: a licensed state-of-health method plus fault codes, a human photo checklist and our own green/yellow/red grade, sold as one electronic report to used-EV importers and independent garages at €50-90. **Pilot: 30-50 cars in 8 weeks, capped spend, go/stop gates at week 8.** It is a learning and lead-generation step for take-back and second-life sourcing, not a profit engine (variable cost about €65-70 per car, estimate). A scanner lane (about €150,000 to buy) stays out of scope until demand is proven.
