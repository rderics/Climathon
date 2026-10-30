# Where to send spent packs, what it costs, who pays whom (2026-10-30)

**No recycler publishes prices for EV packs; every figure here is a market indication, not a quote.** Confidence: [B] trade press / studies, [C] vendor or weak source. Prices move monthly with metal and lithium prices. Get written quotes before using any number in the pitch.

## 1. Destinations (none in Latvia — see docs/PACK_SPECS_AND_RECYCLING.md)
| Recycler | Where | What we know | Tier |
|---|---|---|---|
| **Fortum Recycling** | Finland (processing in Finland) | Collects used **and damaged** Li-ion incl. EV batteries; supplies transport packaging and storage equipment, handles documents; mechanical + hydrometallurgical; works with logistics partners across Europe. Contact form: fortum.com battery-recycling contact page. | [B] |
| **AE Elemental** (Ascend Elements + Elemental Strategic Metals) | Zawiercie, Poland | Disassembles, discharges, shreds EV batteries to black mass; **12,000 t/yr (~28,000 EV packs)**. Sources disagree on opening date (grand opening reported May 2026) — confirm it accepts third-party packs now. | [B/C] |
| **Eneris B&R** | Żarki, Poland | Large and small Li-ion batteries and battery production waste; describes itself as the largest operating Li-ion recycling plant in Europe; strong on production scrap, EV take-back terms not found. | [B/C] |
| **Hydrovolt** | Fredrikstad, Norway (largest EV battery recycling plant in Europe per press); announced Icelandic EV batteries Oct 2026 | Status after Northvolt's collapse unclear — verify; far from Latvia. | [B] |
| **Stena Recycling** | Nordic network; triage plant at Ausenfjellet near Oslo for Nissan Leaf batteries; sold its BatteryLoop second-life arm to Repono | Norwegian importers' collector **Autoretur Battery Recycling (ABR)** started Nov 2025. | [B] (teammate notes in `data/`) |
| **Umicore** | Hoboken, Belgium | Large hydromet capacity (reported ~420 kt/yr after third line, Oct 2025). Mainly Western supply chain; far. | [C] |
| **BASF** | Schwarzheide, Germany | ~15 kt/yr black-mass plant opened Jun 2025; feeds own cathode plant. | [C] |
**Practical shortlist to ask first:** Fortum (Finland), AE Elemental (Poland), Eneris (Poland). Nobody I found has a Baltic collection point.
Also compare Norwegian/Swedish channels (Stena, ABR) only if we source packs from Norway anyway (docs/IDEA.md / `data/pack_supply_baltic_ecosystem.md`).

## 2. Who pays whom?
It depends on **chemistry, damage state and the week you ask** — there is no single answer.
| Case | Indication | Tier |
|---|---|---|
| **NMC/NCA pack** (nickel/cobalt) | 2022: recyclers charged about **€2/kg** (gate fee) and falling [B: ScienceDirect 2025]. 2024: gate fees for scrap NMC **€0–400 per tonne** depending on location/company [B: Fastmarkets]. NMC black mass trades around **€4,000–5,500/t** [C]. A North American source (2024): recyclers pay about **US$8/kWh** for used batteries [B: Energy-Storage.news, via `data/`]. => **roughly break-even; sometimes the recycler pays a little, sometimes we pay a small fee.** | [B/C] |
| **LFP pack** | 2024: gate fees **€3,000–4,000/t** — we pay [B: Fastmarkets]. By Q3 2026 Benchmark reports gate fees becoming less common outside China and LFP black mass priced on its lithium content alone, with lithium carbonate futures reportedly down ~50 % May–Oct 2026 [C] — **conflicting and moving: expect to pay, or at best break even.** | [B/C] |
| **Damaged / defective pack** | Needs approved explosion-proof steel container (usually 1 pack per container) → much higher handling cost; one market-research estimate: **$1,300–2,730 per pack** all-in incl. container rental ($350–700) and regional freight ($550–1,100) (modelled, USD, paid-report summary) [C] | [C] |
| **EPR rule** | Under the EU Battery Regulation the **producer** (here: us, as repurposer; for ordinary EVs the carmaker) must organise and finance take-back and meet recovery targets. So the cost of end-of-life is **ours** unless a producer-responsibility scheme or the original carmaker's take-back covers it. | [B] |
Direction of money in the cost model: treat recycling as **a cost or zero**, never as income, until a quote says otherwise. Upside only for NMC/NCA with good metals value.

## 3. Shipping cost (Latvia -> recycler)
No recycler/carrier quote found. Indications:
- Vendor estimate (via `data/pack_supply_baltic_ecosystem.md`): **ADR pallet freight €250–500 within Western Europe, €400–700 to Eastern EU; about €350–600 per pack within the EU**; ADR freight €250–700 per pack/pallet [C].
- Damaged packs cost several times more (container, one pack per container) — see table above [C].
- Sea freight: DHL Global Forwarding requires every battery in a consignment to be declared at booking, may ask for safety data sheets, UN38.3 summaries and packing photos; missing documents can delay booking acceptance (advisory 25 Sep 2026) [B via `data/`].
- Legal: used/defective Li-ion are dangerous goods under ADR (P909 for recycling; SP 376 for damaged, SP 377 labelling "LITHIUM BATTERIES FOR RECYCLING") [B]; cross-border waste shipments need notification/consent (in the teammate notes: through DIWASS) [B].

## 4. What one pack costs to send — illustrative (our arithmetic on the ranges above)
Assumptions: freight €350–600 per undamaged pack (EU, ADR, vendor estimate); NMC pack 400 kg / 60 kWh; LFP pack 300 kg; gate fees applied to total mass.
| Scenario | Recycler side | Freight | Net per pack |
|---|---|---|---|
| NMC, favourable | recycler pays ~US$8/kWh x 60 kWh ≈ **+$480** | −€350 to −€600 | **about +$130 to −$120 (≈ break-even)** |
| NMC, 2024 gate fee €0–400/t | €0–160 for 400 kg => −€0 to −€160 | −€350 to −€600 | **−€350 to −€760** |
| LFP, 2024 gate fee €3,000–4,000/t | 300 kg => −€900 to −€1,200 | −€350 to −€600 | **−€1,250 to −€1,800** |
| Damaged pack, any chemistry | | $1,300–2,730 all-in | **−$1,300 to −$2,730** |
So: **budget roughly €350–800 per NMC pack and €1,200–1,800 per LFP pack as an end-of-life cost, more for damaged packs**, unless quotes prove otherwise. This is another reason to take only undamaged packs and to sell NMC modules to second-life or recyclers with metal value where possible. One cost per **kWh-sold of second-life capacity** also arises at end of life (30–40 % lower per kWh if we recycle at pack level and ship full pallets).

## 5. Next steps (this week)
1. **Email Fortum** (battery recycling contact form): "Latvia-based collection hub for retired EV packs, ~20 packs/year pilot, NMC/NCA and some LFP, undamaged: do you accept, what price per tonne/per pack, do you supply ADR boxes and transport?"
2. **Email AE Elemental and Eneris** with the same questions; ask about acceptance criteria and EPR documentation.
3. Ask **Laura Berga (Latvijas Zaļais punkts)** on Saturday: who is Latvia's traction-battery collector today and which scheme pays?
4. Ask **VVD** and **LETRA** about waste permits and producer registration for a repurposer.
5. Put the gate-fee ranges into the cost model as sensitivities, not as inputs.

## Sources
- Gate fees and prices: https://www.fastmarkets.com/insights/european-lfp-recycling-vital-for-future-but-facing-economic-barriers-lme-week/ · https://www.metals-hub.com/en/blog/lfp-black-mass-from-disposal-cost-to-sellable-product/ · https://www.sciencedirect.com/science/article/pii/S0956053X25003733 · https://www.apcuk.co.uk/wp-content/uploads/2025/12/Battery-Recycling-Insights-Report.pdf
- Poland: https://elektromobilni.pl/eneris-w-nowym-zakladzie-przetworzy-zuzyte-baterie-litowe-z-samochodow-elektrycznych/ · https://www.recycling-magazine.com/25411/joint-venture-for-electric-vehicle-battery-recycling-in-poland · https://notesfrompoland.com/?p=26388
- Fortum: https://www.fortum.com/safe-handling-and-logistics-used-lithium-ion-batteries · Hydrovolt: https://electrive.com/2026/10/20/hydrovolt-to-recycle-icelands-ev-batteries-in-future
- Damaged-pack logistics: https://marqstats.com/reports/global-damaged-ev-battery-logistics-market/ · Croatian ADR study: https://xreiss.efri.uniri.hr/article.php?id=25745
- Freight and pack-supply details: `data/pack_supply_baltic_ecosystem.md`, `data/second_life_tech_cost_rules.md` (teammate research)
