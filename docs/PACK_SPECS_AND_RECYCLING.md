# Pack specs for common EVs, and what to do with a spent pack (2026-10-30)

Confidence: **[B]** engineering reference sites (batterydesign.net, evkx.net) · **[C]** vendor/forum/blog — verify against OEM service data before relying. **Pack dimensions (L x W x H) could not be found in any free source I reached** — see section 3. Which models Latvia really has is **unknown** (no CSDD/CSB make-model data found); the list below covers the models named as popular in Latvia plus the common used-EV models in Europe.

## 1. Capacity, voltage, chemistry (vendor database, [C] unless stated)
Source for this table: bms-ev.com EV battery module database (vendor; capacities cross-checked where possible below).
| Vehicle / pack | Gross kWh | Nominal V | Chemistry / cells | Layout |
|---|---|---|---|---|
| Tesla Model 3 SR/SR+ 2017-23 | 50–55 | 355 | NMC 2170 cylindrical | 96s 31p |
| Tesla Model 3 LR 2017-23 | 75–82 | 355 | NMC 2170 | 96s 46p |
| Tesla Model 3 LFP 2021+ | 60 | 320 | LFP (CATL) | 106s |
| Tesla Model Y 2020-23 | 60–82 | 355 | NMC 2170 | 96s |
| Tesla Model S/X 85–100 kWh 2012-21 | 85–100 | 400 | NCA 18650 | 96s x 16 modules |
| Nissan Leaf 24 / 30 / 40 / 62 kWh | 24 / 30 / 40 / 62 | 360 | pouch (LMO in early, NMC later [B/C]) | 192 or 288 cells; 24–48 modules |
| BMW i3 (22 / 33 / 42 kWh) | 22 / 33 / 42 | 352–360 | NMC (Samsung SDI) | 96s x 8 modules |
| VW MEB (ID.3, ID.4, Skoda Enyaq, Audi Q4) 45 / 58 / 77 | 52 / 62 / 82 | 352–400 | NMC (LG) | 9–12 modules |
| Renault Zoe 22 / 41 / 52 kWh | 22 / 41 / 52 | 360–400 | LG pouch | 96s x 12 modules |
| Hyundai Kona EV 39 / 64 kWh | 39 / 64 | 356 | NMC622 pouch (LG) | 98s 3p, 5 modules (64 kWh) [B] |
| Kia e-Niro / Soul EV 39 / 64 | 39 / 64 | 356–360 | NMC pouch | not found |
| Hyundai Ioniq 5 / Kia EV6 (E-GMP) 58 / 77 | 58 / 77 | **523 / 697 (800 V class)** | NMC | not found |
| Peugeot e-208, Opel Corsa-e etc. | 50 (46 net) | 400 | not listed | not found |
| BYD Atto 3 / Dolphin | 60 / 30–44 | 360 | LFP blade | not found |
| Dacia Spring | 27 | 320 | LFP | not found |
| Volvo XC40 / Polestar 2 | 69–78 | 400 | NMC (LG) | not found |
| Audi e-tron (original) | not found in this pass | | | |

## 2. Pack weight (best found)
| Pack | Weight | Source tier |
|---|---|---|
| Nissan Leaf 24 kWh (2010) | 294 kg | [B] batterydesign.net |
| Nissan Leaf 30 kWh (2015) | 315 kg | [B] |
| Nissan Leaf 40 kWh (2017) | 303 kg (36 kWh usable) | [B] |
| Nissan Leaf 62 kWh (2019) | 410 kg (56 kWh usable) | [B] |
| Renault Zoe 22 / 41 / 52 kWh | 280 / 305 / 326 kg | [B] |
| Hyundai Kona 64 kWh | 452 kg (cells 259 kg; 5 modules; 3 under floor + 2 stacked under rear seat) | [B] |
| Tesla Model 3 LR (~75–82 kWh) | ~480 kg (4 modules; side modules ~1,715 mm long) | [C] |
| VW ID.4 77 kWh | ~493 kg | [C] |
| BMW i3 22 kWh | ~230 kg | [C, forum] |
**Rule of thumb from these:** about **6–7 kg per kWh** at pack level for NMC pouch/cylindrical (e.g. Leaf 303 kg / 40 kWh = 7.6; Kona 452 / 67.5 = 6.7; Tesla 480 / ~80 = 6). After retirement at ~75 % health the pack still weighs the same, so **~8–10 kg per remaining kWh** (our arithmetic). Weight matters for racking, handling (crane or lift) and the concrete pad.

## 3. Pack dimensions — gap
- Every free source I reached gives *vehicle* dimensions, not pack L x W x H. batterydesign.net shows pack dimensions only as images.
- Partial: Tesla Model 3 side modules about 1,715 mm long [C].
- **How to close it:** (1) ask used-pack sellers/dismantlers (they list dimensions for shipping, e.g. evshop.eu, bms-ev.com), (2) OEM service manuals or teardown reports, (3) **measure the packs ourselves** once we hold two or three, (4) ask Aleksandrs Mihailovs / a dismantler on Saturday.
- Why it matters: rack layout and packs-per-container (docs/SIZING_AND_COST.md used weight and energy because space data is missing).

## 4. What voltage and chemistry mean for our block
- Most packs are **~350–400 V nominal**; the Hyundai/Kia E-GMP family runs **800 V class** (523–697 V in the table) — they cannot share a string with 400 V packs without conversion.
- Chemistry mix: NMC dominates; **NCA** (older Tesla S/X, 18650); **LFP** in Tesla Model 3 LFP, BYD, Dacia Spring; **LMO** in early Leafs/older small EVs.
- Plan strings by **voltage class and chemistry** (see docs/BATTERIES.md): e.g. string A = ~355 V NMC Tesla/Hyundai/Kia; string B = ~360 V Leaf/Zoe/i3 class; string C = LFP; E-GMP separate.

## 5. When a pack has to be recycled — process
1. **Decide**: grading says reuse / repurpose / recycle. Fails go to recycling; this is also where we recover scrap value (NMC/NCA yes, LFP little).
2. **Make safe and store**: disconnect, keep at low state of charge, store in a fire-safe place (insurer and fire-service rules — docs/FEEDSTOCK_AND_RULES.md). Damaged or swollen packs need special handling (can be extremely flammable [B: Fortum]).
3. **Classify and document**: end-of-life lithium-ion batteries are **hazardous waste**; used/defective packs are dangerous goods under ADR (P909 for transport to recycling; special provisions 667/310/376 for defective or damaged ones — verify current ADR). A waste carrier licence and transport documents are needed.
4. **Hand over to a recycler** (section 6) under an agreement; recycler issues documentation for our compliance.
5. **Register and report**: as repurposer we are legally the producer of the *repurposed* battery, so **EPR duties fall on us** (Regulation 2023/1542, Art. 46/56 [B]); Latvia's battery register is **LETRA** [B: Kostal fact sheet] — confirm registration process and whether a producer-responsibility organisation can take over collection.
6. **Update the passport**: the original passport ends at recycling; the repurposed battery's passport is linked to it [B].

## 6. Where to send it
**Latvian/Baltic options: none confirmed.** Eco Baltia collects small batteries at Rimi stores (not traction packs) [B]; Stena Recycling advertises high-voltage battery collection/recycling for end-of-life vehicles but no Latvian service confirmed [C]. **No Baltic EV-pack recycler found** — ask Latvijas Zaļais punkts (Laura Berga is a Saturday carousel expert, round 1 room 8, on-site) and LETRA.

**European recyclers that take EV packs (from search, [B/C]; confirm each accepts end-of-life packs, not only production scrap):**
| Recycler | Where | Notes |
|---|---|---|
| **Fortum Recycling** | processing in Finland (Harjavalta); collects used and **damaged** Li-ion incl. EV batteries; provides transport packaging, storage equipment and paperwork; mechanical + hydrometallurgical process; EU-wide logistics partners; Feb 2026 reported 81 % lithium recovery from LFP black mass [B] | **Closest realistic route for Latvia** (Gulf of Finland); contact via fortum.com battery-recycling contact page |
| **Umicore** | Hoboken, Belgium; third hydromet line commissioned Oct 2025, ~420 kt/yr (reported) [C] | Large, long-established |
| **BASF** | Schwarzheide, Germany; black-mass plant opened Jun 2025, ~15 kt/yr feeding its cathode plant [C] | |
| **Eneris** | Żarki, Poland; permitted plant > 27 kt/yr, mechanical (black mass) [C] | Nearest by road to Latvia |
| **Hydrovolt** | Norway (Hydro + Northvolt JV); in Oct 2026 announced Iceland EV battery recycling [B: electrive] | status after Northvolt's collapse unclear — verify |
| Stena Recycling | Nordic network [C] | |
- Capacity is not the bottleneck: Europe's Li-ion recycling capacity is projected at ~420 kt/yr by end-2026 and **exceeds feedstock for now** (Fraunhofer ISI) [B]; a large share of black mass is still **exported out of the EU** (T&E: at least two-thirds, 30 Jul 2026) [B] — relevant to our circularity/ESG claim; we should prefer an EU hydromet route that keeps materials in Europe.
- **Cost or income:** unknown. Nickel/cobalt chemistries typically earn scrap value; LFP may cost money to dispose. **Ask Fortum and one more recycler for a written quote** (EUR/tonne, per pack type, with transport) — this is a number the model needs.
- Route a spent pack in practice: our site -> licensed hazardous-waste carrier (ADR) -> Fortum (Finland) or Eneris (Poland) -> black mass/metals -> back into cell production. Sea freight from Riga/Ventspils to Finland or road to Poland — **costs not researched**.

## 7. Next
- Quote requests: Fortum (EV packs, mixed chemistries, from Latvia), a Polish recycler, and used-pack sellers for dimensions and price.
- Verify with LETRA / Latvian environment authority how EPR registration works for repurposers and whether they know an EV-pack collector.
- Ask Laura Berga (Latvijas Zaļais punkts, Saturday) who in Latvia handles traction batteries today.

## Sources
- Capacity/voltage table: https://bms-ev.com/en/ev-battery-module-database/ (vendor [C])
- Pack mass and cells: https://www.batterydesign.net/hyundai-kona/ · https://www.batterydesign.net/nissan-leaf/ · https://www.batterydesign.net/renault-zoe/ [B]
- Tesla/VW weights: https://www.go-electra.com/en/newsroom/electric-car-battery-weight/ [C]; Leaf/Kona specs: https://evkx.net/models/nissan/leaf/leaf_40_kwh/specifications/
- Fortum: https://www.fortum.com/safe-handling-and-logistics-used-lithium-ion-batteries [B]
- Recycling capacity and exports: https://www.isi.fraunhofer.de/en/blog/themen/batterie-update/batterie-recycling_europa_kapazitaeten_bedarf_update_2025.html · https://dontwasteit.hu/en/black-mass-exports-eu-te-briefing/ · https://www.faradexpartners.com/reports/black-mass-processing [C]
- Take-back: https://www.oeko.de/en/publications/material-cycles-for-traction-batteries/ · Kostal factsheet (LETRA, PROTO): https://www.kostal-solar-electric.com/fileadmin/downloadcenter/kse/Fact_Sheets/FS_HELIVOR_Recycling-v03-2026-EU-Ausland-EN.pdf
- Eco Baltia (small batteries): https://www.ecobaltiavide.lv/en/pakalpojumi/management-of-various-types-of-batteries/
- Hydrovolt Iceland: https://electrive.com/2026/10/20/hydrovolt-to-recycle-icelands-ev-batteries-in-future
