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
1. **Challenge choice:** `docs/CHALLENGE_EVALUATION.md` recommends Sadales tīkls or Latvijas Zaļais punkts over the EV-battery challenge (third pick: a battery health certificate). Our team is registered for the EV challenge.
2. **Plant size:** `docs/LATVIA_PLANT_BUSINESS_MODEL.md` (in Latvian) proposes a 10,000 t/year centre for EUR 20–35 M. That is far bigger than the small hub described here; its own caveats say supply contracts and quotes must come first, and Latvia would supply a tiny share of the volume.
3. **Open decisions:** first customer (recommended: fleet/depot operators such as Rīgas satiksme), feedstock policy (NMC/NCA with known history first; exclude early LMO Leafs and damaged packs), what the 3-minute demo shows.

## Biggest unknowns
- Real pack prices, recycler quotes, pack dimensions.
- Whether any customer will pay a premium for the service.
- Latvian fire and permit rules for storage.
Expert questions for Saturday: `docs/IDEA_DETAIL.md` section 11.
