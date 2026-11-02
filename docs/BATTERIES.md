
Tests22
Test2


# Battery types — research (2026-10-30)

Purpose: know what we would actually receive as "used car batteries", and which of it is usable in a block for electricity companies.
Confidence: **[A]** primary/authoritative (IEA, peer-reviewed) · **[B]** secondary, plausible · **[C]** vendor/blog/forum, verify before using in the pitch. Numbers are ranges from the sources, not guarantees; usage history and temperature shift them a lot.

## 1. Chemistries (cathode) — what is inside the cars

| Chemistry | Typical use | Energy density (cell) | Cycle life (indicative) | Thermal safety | Second-life view |
|---|---|---|---|---|---|
| **LFP** (lithium iron phosphate) | Mass-market EVs, BYD, Tesla standard-range, buses, stationary storage | ~90–205 Wh/kg [A: IEA up to 205; C: lower bounds] | ~2,000–6,000 cycles [C] | Highest onset (~270 °C vs ~150–210 °C NMC) [C]; still not immune [B: CEA-Liten] | **Best fit for stationary**: long life, safer, no cobalt/nickel. But low scrap value, so recycling pays less [B: MDPI 2026] |
| **NMC** (nickel manganese cobalt) | Most European/Korean/US EVs (VW, BMW, Hyundai/Kia, newer Nissan Leaf) | ~150–265 Wh/kg [A: IEA up to 265] | ~1,000–2,500 cycles [C] | Lower onset; higher energy = less stable [B] | Usable but riskier/less cycle headroom; **high metal value, so recycling competes with reuse** [B: MDPI 2026] |
| **NCA** (nickel cobalt aluminium) | Older Tesla S/X/3 (Panasonic), some others | ~200–260 Wh/kg [C] | ~1,000–3,000 [C] | Similar to NMC, thermal risk noted [C] | Same logic as NMC; Tesla cylindrical cells |
| **LMO** (lithium manganese oxide) | Early Nissan Leaf (2010–~2016), some hybrids/blends | ~100–150 Wh/kg [C] | ~700 cycles [C] | Moderate | **Poor candidate**: short life, aged Leafs heavily degraded (passive cooling) [C] |
| **LMFP** (LFP + manganese) | Emerging in China | Higher than LFP [C] | n/a | n/a | Not yet in retiring fleets |
| **NiMH** | Hybrids (Toyota Prius etc.), few Lithium-era EVs | low | long | benign | Hybrid packs: OEMs (Toyota, Honda via SNAM) screen and reuse a part, rest recycled [B: automotiveworld] |
| **Lead-acid** | 12 V auxiliary, very old/low-speed EVs | very low | short | n/a | Not relevant for a grid block |
| **Sodium-ion** | Just entering market (CATL, BYD); small cars, light vehicles, stationary | up to ~175 Wh/kg [A: IEA] | n/a | good | **Not in retiring fleets for ~10 years**; may become a *competitor* for cheap new storage. Capacity ≈ 1 % of Li-ion today [A] |
| **Solid-state / Li-S** | Prototypes/pilots | n/a | n/a | n/a | Irrelevant to feedstock before 2030 [B: Bain via search] |


### Market mix (what is on the road → what retires)
- Global 2025: LFP **>55 %** of EV batteries deployed, up from ~50 % in 2024 [A: IEA GEVO 2026].
- **EU 2025: LFP only >10 %**, same as 2024; nearly all EU LFP imported from China [A: IEA]. Outside China almost 80 % of EV batteries are nickel-based (NMC etc.) [A: IEA].
- Implication: **the packs that will retire in Europe/Latvia over the next decade are mostly NMC/NCA (plus early LMO Leafs), not LFP** — the opposite of what storage buyers prefer. LFP retirees only appear in volume later (EU LFP share is rising now).

## 2. Formats and pack architecture (what we must physically handle)
- **Cylindrical** (Tesla 2170/4680 etc.): rigid, standardised cell, most mechanically self-contained; many thousand cells per pack => cell-level work is impractical, reuse at module/pack level [B].
- **Prismatic** (VW, BYD "blade", CATL): rigid cans, fewer bigger cells; blade removes the module layer (cell-to-pack) => harder to take apart into modules [B: Wikipedia/evkx].
- **Pouch** (early Nissan Leaf, LG/Hyundai/GM): flexible foil, needs the most support, lacks standardisation, mechanical damage risk [B].
- Voltage architectures **~400 V and ~800 V** exist; differ per model [B]. Packs differ in BMS software, cooling (liquid/passive), connectors and protocols -> brief calls this "too many pack designs" [A: EIT UM brief].
- Reuse level: **pack, module or cell**. One study found three feasible scenarios at repurposing costs of 27.2–38.3 EUR/kWh [C: found via search snippet, source to confirm — do not use in pitch yet].

## 3. What makes a battery usable for a grid block
- SoH alone is not enough: abnormal self-discharge, imbalance, insulation faults, hidden damage can fail a 90 % SoH pack [A: EIT UM brief].
- Retired from the car at ~70–80 % capacity [A: EIT UM brief]. Vendor rule of thumb: LFP still resellable above ~75 % SoH, NMC below ~80 % SoH often goes to recycling [C].
- Chalmers thesis on second-life NMC: vs new LFP, second-life NMC only wins on energy-use LCA if almost none of the production/recycling burden is allocated to the second life; climate case depends on allocation and local electricity mix [B].
- Mixing chemistries/ages/voltages in one block is the core engineering risk: heterogeneous aged cells age differently once re-assembled [A: validation sheet, Ghodrati].

## 4. Supply timing (important for our idea)
- IEA: nearly all EV batteries deployed in recent years are **still in use**, most until the **mid-2030s**; ~15-year lag before comparable volumes reach end of life [A: IEA GEVO 2026].
- IEA also notes second-life reuse is challenging and a growing second-hand EV market keeps batteries in use longer [A].
- Latvia: ~1,600 new EVs/yr, ~1.8 % of fleet [A: EIT UM brief]. Latvia also imports used cars, so used packs can arrive via imported/crashed/scrapped EVs — **no Latvian data found on which models/chemistries** (to check: CSDD, CSP) [gap].
- Sources of feedstock with better volume and known history: **buses/trolleybuses (Rīgas satiksme), fleets (taxi/delivery), dismantlers, crash/write-off vehicles, OEM take-back, Nordic/German imports**; later: LFP wave and utility BESS retirements.

## 5. Consequences for our idea (to decide together)
1. **Define the feedstock we accept**: e.g. "NMC/NCA modules from write-offs and fleets, graded to pack/module level" vs "LFP only". LFP is better for the product but scarce in Europe today.
2. **Block design must be chemistry-aware**: separate strings per chemistry/voltage with DC-DC or inverter per string, not one mixed string.
3. **Early Leafs (LMO)** are likely common among Baltic used EVs but are poor feedstock — grade them out.
4. **Recycling value competes with reuse for NMC/NCA** (metals) — so reuse must pay more than selling for recycling; LFP has the reverse problem.
5. **Volume risk is real until the mid-2030s**: pitch should lead with fleets/buses and cross-border sourcing, and the model should be scalable (pilot MW-scale, not GWh).
6. Sodium-ion/new LFP price declines are the competition we must beat on price.

## 6. Open research gaps (next)
- Latvian/Baltic used-EV import mix by model -> chemistry (CSDD, CSP, importers/dismantlers).
- Primary data: SoH at retirement by chemistry; cost of grading/testing; price paid per kWh for used packs; price of new LFP stationary (EUR/kWh).
- Safety/regulation: transport/storage rules for damaged packs (ADR), fire-safety codes for stationary storage in Latvia, battery passport duties for the repurposer.
- Customer side: what Sadales tīkls / AST / energy retailers pay for storage services (balancing, peak shaving, arbitrage in Nord Pool Baltic).

## Sources
- IEA Global EV Outlook 2026, Electric vehicle batteries — https://iea.org/reports/global-ev-outlook-2026/electric-vehicle-batteries [A]
- EIT UM challenge brief + validation sheet (Drive) — see docs/CHALLENGE.md [A/B]
- Second-Life EV Batteries in Stationary Storage: Techno-Economic and Environmental Benchmarking vs Pb-Acid and H2, Energies 19(9) 2026 — https://www.mdpi.com/1996-1073/19/9/2026 [B]
- Challenges and Opportunities for Second-life Batteries (arXiv 2308.06786) — https://arxiv.org/abs/2308.06786 [B, not read in full]
- Comparative LCA of Second Life NMC Batteries (Chalmers thesis) — https://odr.chalmers.se/items/fd064b63-2e0d-49c2-bd0d-f556953eda46 [B]
- Cell formats: https://evkx.net/en/technology/battery/cell/ · https://www.batterydesign.net/battery-cell/formats/ · Fraunhofer ISI 2022 cell-format paper [B]
- LFP vs NMC overviews (vendor/blog, figures indicative only): electronicsforu.com, electronics360.globalspec.com, evinfrastructurenews.com, powerup-technology.com [C]
- Hybrid battery take-back (Toyota/Honda–SNAM): https://www.automotiveworld.com/news/honda-hybrid-ev-batteries-get-second-life-in-new-recycling-initiative/ [B]
