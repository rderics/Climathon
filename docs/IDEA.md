# Concept: second-life battery storage as a service

Status: **structured draft v1 (2026-10-30)** — built from docs/BATTERIES.md, docs/ECONOMICS.md, docs/FEEDSTOCK_AND_RULES.md, docs/CHALLENGE.md, docs/RULES.md. Items marked **[DECIDE]** are team choices; **[VERIFY]** need an expert or data check on Saturday. Nothing here is a validated number unless it has a source in those docs.

## 1. One-liner
We turn retired car batteries into **safe, certified, remotely monitored stationary storage** and sell it to electricity companies as a **service** (capacity and performance per month), so they get storage without buying new cells — and the batteries get a second life before recycling.

## 2. Why this, why now (problem — criterion 1)
- Retired EV packs leave cars at ~70–80 % capacity but can still store energy (EIT UM brief).
- The Baltics are building storage fast: AST 80 MW/160 MWh, private projects of 100–490 MWh, solar > 1.5 GW in Latvia (docs/ECONOMICS.md) — but with **new** cells.
- Barriers to second life are **governance and trust, not technology**: unclear classification and liability, no testing capacity, insurers fear fire (TalTech 2026; EIT UM brief). A repurposed battery is legally a **new product** needing its own passport from 18 Feb 2027.
- Packs are hard to judge: SoH alone is not enough; manufacturer data is locked; every pack design differs (EIT UM brief).
- Without a solution: packs get recycled early or sit unused while storage demand is met with new batteries.

## 3. The honest economics (read before choosing the angle)
Rough, **mixed sources and definitions — an order-of-magnitude check, not a model**:
| Cost block | Range found | Source tier |
|---|---|---|
| Used cells/packs purchase | ~$20–120/kWh (also 75 EUR/kWh Finland assumption) | [B/C] |
| Repurposing + testing | ~27–57 EUR/kWh | [B] |
| Everything else in a storage system (inverter, container, cooling, fire safety, install) | roughly the gap between BNEF turnkey ~$177/kWh (Europe) and stationary LFP packs ~$70/kWh, i.e. on the order of ~$100/kWh | [B, our subtraction] |
| New LFP turnkey in Europe (competitor) | ~$177/kWh in 2025, expected to fall 10–20 % | [B] |
**Reading:** the non-cell part of the system costs the same for us as for new storage, and testing/repurposing eats most of the saving on cells. So **"cheaper kWh than new" is not a safe headline.** The studies' old viability rule (new packs > €150–200/kWh) no longer holds. Our edge has to come from somewhere else (section 4). The revenue pool is real but shrinking: ~€307k/MW/yr index revenue in Latvia (Aug 2026, falling) and ≤ ~€90k/MW/yr pure arbitrage upper bound from 2025 prices (computed by us).

## 4. Where we can still win (value proposition — criterion 2)
Pick **one** lead promise **[DECIDE]**; the others are supporting points.
- **A. Circularity as a service (recommended lead).** Energy company/utility buys *guaranteed storage performance + a circularity guarantee*: we take back packs, grade them, certify them, operate them, and recycle at end of life. They get a passport-backed, ESG-reportable asset and **a single liable counterparty** for safety and end of life. This addresses the governance barriers directly.
- **B. Edge/weak-grid storage.** Small distributed units at depots, chargers, solar parks and weak grid points where a big new container is oversized (EIT UM: charger/depot buffers). Fits second-life modularity and small volumes.
- **C. Cost niche.** Only if we can show free/near-free feedstock (fleet take-back contracts) and fast cheap grading. Needs data we do not have yet.
Recommended combination: **A as the promise, B as the first product, C as a stretch to prove with numbers.**

## 5. Customer and user (criterion 1 & 2)
**Segments [DECIDE the first one]:**
1. **DSO (Sadales tīkls)** — peak shaving, deferring grid reinforcement, solar-heavy network (78 % of distribution capacity is solar). Natural partner and present at the event. Need unknown: no storage tender found **[VERIFY with Jeļinsks, carousel R1 room 13]**.
2. **Utility/retailer/solar-park owner** (Latvenergo/Elektrum, Enefit, Utilitas, park owners) — arbitrage, negative-price absorption (164 negative-price hours in 2025), balancing.
3. **Fleet/depot operators** (Rīgas satiksme, taxi/delivery) — both a *customer* (depot buffers) and a *feedstock source* (take-back) — a strong two-sided link.
End user = the electricity company's operations/asset team; beneficiary = ratepayers and the climate via less new-battery manufacturing.

## 6. The offer (solution — criterion 3)
**Product:** a containerised/cabinet second-life storage unit + monitoring/dispatch service + take-back and end-of-life.
**How it works (value chain):**
1. **Source** — fleets/buses, planned replacements, dismantlers, imports (undamaged packs preferred; avoids dangerous-goods handling of damaged packs).
2. **Grade** — beyond SoH: capacity, internal resistance, self-discharge, insulation, imbalance; classify reuse / repurpose / recycle per battery and use case (EIT UM example outcome #1).
3. **Assemble** — keep **chemistry/voltage families on separate strings** (power electronics per string), standard cabinet around pack families — answer to "too many pack designs" and heterogeneous ageing.
4. **Certify and document** — new passport linked to the original, tests logged, EPR and safety documentation.
5. **Operate** — remote monitoring (cell/string level), thermal/gas detection, dispatch for the customer's use case, performance guarantee.
6. **Close the loop** — end-of-life take-back to recycling (NMC/NCA scrap has value; LFP does not — factor into pricing).
**Feedstock policy [DECIDE]:** accept nickel-chemistry (NMC/NCA) modules/packs with known history first (that is what Latvia has); LFP when available; **exclude early LMO Leafs** and damaged packs.
**Safety approach (one slide):** outdoor container, string separation, gas/thermal detection, fire-rated enclosure and spacing, remote shutdown, insurer-reviewed design **[VERIFY with Mihailovs / Jauda / VINCI]**.

## 7. Business model (criterion 4)
- **Revenue:** monthly capacity fee (€/kW or €/kWh-month) with performance guarantee; optional revenue share on market earnings; service fees for grading/certification/take-back.
- **Costs:** feedstock, grading/test, repurposing/BOS, installation, monitoring, insurance, end-of-life.
- **Why a customer pays us instead of buying new:** no capex, one liable party for safety/passport/end of life, ESG/circularity reporting, flexible small sites. Price sits **at or below** new-storage service pricing **[VERIFY]**.
- **Pilot first:** low-MWh pilot with one partner and one site (not GWh). Volume in Latvia supports pilot scale only (~0.8 GWh total EV fleet capacity if 60 kWh average pack — our assumption), so scale = Baltic/Nordic sourcing + fleets.
- **Sustainability (judged explicitly):** avoided new-cell manufacturing and early recycling; method — compare per-kWh-delivered lifecycle impact of second-life vs new LFP (Chalmers: second-life NMC wins on climate only under some allocation assumptions and electricity mixes — we must state our allocation openly). Social: local jobs in testing/operation, safety. Economic: below.

## 8. Risks and our answers (Q&A prep)
| Question | Answer / status |
|---|---|
| "Why not just buy new LFP, it is cheaper and falling?" | Don't claim cheaper kWh; sell guaranteed circular service, single liability, small distributed sites; show where new over-specs. **[VERIFY pricing]** |
| "Not enough batteries in Latvia." | True at EV-car level (13,916 EVs; retirements mid-2030s). Start with fleets/buses/imports; pilot scale; cross-border. |
| "Safety and insurance?" | Design + monitoring + insurer-reviewed; screening excludes damaged packs. Latvian BESS fire rule unconfirmed **[VERIFY VUGD]**. |
| "Who is liable? Battery passport?" | We are the repurposer: new product, new passport, EPR — we price it in and make it the service. |
| "Mixed packs?" | Separate strings per chemistry/voltage/age class; grade into pack families. |
| "Revenues are falling in the Baltics." | Yes (index down since June); our model does not depend on one revenue stack — we sell capacity with a fee; storage owner carries market risk or shares it. |
| "Evidence it works?" | Connected Energy 5 MWh, Rivian/VW/Redwood 10 MWh, B2U (hundreds of MW), Moment Energy 1 GWh factory (docs/CHALLENGE.md). |

## 9. What the team must decide (by Sat noon) **[DECIDE]**
1. Lead promise: A (circularity-as-a-service), B (edge storage) or C (cost niche).
2. First customer: DSO, utility/solar park, or fleet/depot.
3. Feedstock policy: NMC/NCA-first with named sources.
4. Scope for the demo: what we show in 3 minutes (see section 10).

## 10. What a later prototype should prove (NOT building yet)
Pick one slice after the decisions above; each maps to jury criteria:
- **Grading and routing tool:** input pack data -> reuse/repurpose/recycle + string assignment (criterion 3; EIT UM outcome #1).
- **Business-case model:** feedstock price, grading cost, BOS, revenue per MW (computed from our Latvia 2025 data) -> payback vs new LFP (criterion 4).
- **Dispatch/ops demo** on real Latvian prices: how a block earns and what the customer pays (criteria 2, 4).
The cheapest convincing demo is probably **business-case + routing** (no hardware, uses sourced data).

## 11. Validate Saturday (expert plan)
- Jeļinsks (Sadales tīkls, R1 room 13): does the DSO need storage, what price/contract, what safety/permit rules?
- Pūķe (Jauda) / Hämmerle (VINCI Energies): how do energy firms evaluate second-life storage; what would make them buy; safety/permitting.
- Puzule (RTU LCA): how to compute CO2/resource savings credibly; allocation method.
- Jaunozola (EIT UM): is our angle what the challenge wants; pilot paths; funding.
- Mihailovs (MAA): safety/containerisation; Ellenberger (ProSense): circular business model; Kreinbergs: pitch.
- Also ask: a fleet/dismantler contact for real pack prices and volumes.
