# Economics research (2026-10-30)

Confidence: **[A]** primary data / computed by us from primary data · **[B]** secondary/peer-reviewed, dated · **[C]** weak (vendor, blog, unclear date). Do not put [C] numbers on a pitch slide.

## 1. What a storage buyer can earn per MW in the Baltics (the revenue side)
**Clean Horizon Storage Index (modelled reference 2-hour battery, not realised revenue)** [B — via ess-news.com / Clean Horizon]:
| Month 2026 | Estonia | Latvia | Lithuania |
|---|---|---|---|
| Jun (peak) | ~€322k/MW/yr | ~€443k | ~€431k |
| Jul | ~€175k | ~€338k | ~€302k |
| Aug | ~€152k | **~€307k** | ~€251k |
- In Latvia and Lithuania, **mFRR capacity reserves ≈ 54 %** of revenue (Aug 2026) [B]. Reserves (aFRR/mFRR) dominate the stack, not arbitrage.
- Trend is **down**: falling aFRR spreads and "increased competition following commissioning of new BESS assets" [B]. Earlier 2025 figures were far higher (Clean Horizon cited ~€700k/MW/yr) — a scarcity premium that is eroding as the Baltic fleet grows.
- Reserve markets are **thin**: a few hundred MW saturates them, so revenue per MW falls as more storage arrives. This is the biggest economic risk for any new Baltic storage, new or second-life.

**Day-ahead arbitrage computed by us from Elering/Nord Pool data, Latvia 2025** [A — script: `data/latvia_spread_2025.py`]:
- Mean day-ahead price **€85.7/MWh**; 164 negative-price hours (Electricity Maps reports €88.5 mean, 164 negative hours — consistent) [A/B].
- Daily spread (average of top-N hours minus bottom-N hours), 2025: **1 h: 163 · 2 h: 150 (median 131) · 4 h: 129 EUR/MWh**. Months: highest Oct (214) and Feb (180); lowest Jul (96), Jun (105), Dec (103).
- Gross arbitrage for a 1 MW / 2 MWh battery, 1 cycle/day, 85 % round-trip, **perfect foresight**: **≈ €90k per MW per year** (upper bound; before network tariffs, fees, degradation, forecast error). Realistic capture is lower.
- Caveats: hourly aggregation, DST ignored (Riga time ≈ UTC+2), day-ahead only. Latvia moved to 15-minute day-ahead products in 2025 which helps arbitrage [B: Solarplaza white paper].

**Takeaway:** a storage owner in Latvia can plausibly earn on the order of **€90k/MW/yr from pure arbitrage (upper bound)**, plus reserves revenue that is currently ~€300k/MW/yr in the index but shrinking. Whoever pays us for storage-as-a-service is paying out of this revenue pool, so our price must sit below what they could earn/avoid with new batteries.

## 2. Cost of the competition: new storage
- BNEF Energy Storage Systems Cost Survey 2025: global turnkey average **US$117/kWh**; China $73; **Europe $177/kWh**; US $219 [B — via energy-storage.news / pv-magazine]. BNEF expects a further 10–20 % fall in US/Europe in 2026 (~$125 per kWh) [C, secondary].
- BNEF pack survey 2025: stationary LFP packs ≈ **$70/kWh** (−45 % y/y) — packs only, no PCS/enclosure/HVAC/install [B].
- AST (Latvian TSO) bought **80 MW / 160 MWh** from Rolls-Royce for **€77.07 M** => ≈ **€482/kWh** installed (contract also covers supply, installation and grid-security features; commissioned June 2025) [B: AST/esfondi.lv; arithmetic ours]. Useful as "what Latvia actually paid", but it is a security-grade project, not the market floor.
- New cells < $100/kWh [C].
=> Second-life must beat roughly **$120–180/kWh turnkey** for new LFP in Europe, falling.

## 3. Cost side of second life (what we pay and what repurposing costs)
| Item | Figure | Confidence |
|---|---|---|
| Used pack purchase price | $20–60/kWh (consultant report, date/author unclear) | [C] |
| Used pack purchase assumption, Finland study | 75 EUR/kWh | [B] |
| Repurposing cost, Finland study (Ostrobothnia, Batteries 2024) | 27.2–38.3 EUR/kWh, sold ~65.5 EUR/kWh | [B, older] |
| Repurposing cost model, Tesla Model S pack (US) | ~$12/kWh pack-level; ~$41/kWh module-level | [B] |
| Module-level performance test, Portuguese BMW PHEV case | ~57 EUR/kWh (test time, equipment, electricity) | [B] |
| Viability rule in several studies | repurposing viable while new packs > €150–200/kWh; purchase cost of used packs should not exceed ~€40–120/kWh | [B] |
| Second-life pack price 2017/2020 | $72 vs new $232 (2017); $62–70 (2020) | [B, outdated] |
| Second-life system price 2025 ("$95–130/kWh") | market-research page | [C — ignore] |
- **Key point:** studies say second life is viable when new packs cost > €150–200/kWh. New LFP packs are already around $70/kWh and turnkey systems in Europe ~$177/kWh, so the old viability condition is **no longer met for plain "cheaper storage"**. Our value must therefore come from something else: free/cheap feedstock (fleet take-back deals), grading that avoids scrap, local sourcing, bundling services (recycling, ESG/circularity credit, passport/data), or applications where new batteries over-spec (peak shaving at depots, backup).
- Testing cost per kWh at module level (~€57/kWh [B]) is large compared with a $70/kWh new LFP pack => **fast, cheap grading is the real technical/economic lever** (matches the EIT UM brief).
- Revenue per MW from section 1 is independent of whether cells are new or used; used cells only change **capex and degradation**. Rough comparison to do in the model: capex per kWh (ours vs new) vs cycles available (ours fewer).

## 4. Demand side: who in Latvia buys storage
- **AST (TSO)**: 80 MW/160 MWh Rolls-Royce system at Tume and Rēzekne (EUR 77.07 M); 2 BESS facilities connected in 2026; **1,650 MW new renewable capacity to be connected to the transmission network by end of 2026** [B: ast.lv].
- **Private BESS projects**: e.g. Sunly 490 MWh (Latvia), Slovenian NGEN plans 100 MW/200 MWh, EUR 50 M (LSM, 3 Feb 2026) [B].
- **Latvia solar > 1.5 GW** (pv-magazine, 6 Aug 2026) and 78 % of capacity in the distribution network is solar (Sadales tīkls report) [B] => daytime surplus, evening peaks, negative-price hours (164 in 2025).
- **Sadales tīkls (DSO)**: no storage tender found [gap]. Ask Rimants Jeļinsks at the Saturday carousel (room 13, round 1): does the DSO procure storage/flexibility, at what price, with what safety/permit requirements?
- Who else to test: Latvenergo, Elektrum, Enefit, Utilitas, large solar park owners, Rīgas satiksme (depots/trolleybus network), Jauda (Līga Pūķe).
- Reality check on the customer claim "electricity companies store power in our batteries": large BESS developers buy **new** LFP containers today. Our pitch must say why a utility would take second-life storage — price, ESG, local content, or smaller/distributed sites where grid connection is weak (EIT UM brief: charger/depot buffers).

## 5. Next numbers to get (to build the model)
- Elering ancillary-service (aFRR/mFRR) capacity prices for Latvia (Baltic Balancing Market) — compute realised revenue instead of relying on the index.
- Quote for a new 1–2 MWh LFP container in Europe (EUR/kWh) from two vendors.
- Price a fleet/dismantler would take for a used pack (call Rīgas satiksme, a dismantler, a Bolt/taxi fleet) — or at least state it as an assumption with a range.
- Cycle life of graded second-life packs from a warranted product (Connected Energy, Moment, Rebaba datasheets).

## Sources
- Clean Horizon via ess-news: https://www.ess-news.com/2026/09/24/battery-revenues-rise-everywhere-in-europe-other-than-baltics-in-august-2026/ and https://www.cleanhorizon.com/news/clean-horizon-storage-index-update-now-covering-the-baltics/
- Elering/Nord Pool prices: https://dashboard.elering.ee/api/nps/price (script in `data/`); Electricity Maps Latvia 2025: https://www.electricitymaps.com/grid-in-review-2025/latvia
- BNEF cost survey coverage: https://www.energy-storage.news/?p=92133 ; https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour
- AST BESS: https://ast.lv/en/node/61223 · https://ceenergynews.com/electricity/latvian-tso-signs-contract-for-supply-and-installation-of-battery-energy-storage-system/
- Finland second-life techno-economics: https://www.mdpi.com/2313-0105/10/1/36 (full text not fetched — figures from search summary)
- Second-life storage vs Pb-acid and H2: https://www.mdpi.com/1996-1073/19/9/2026 · Second-life economics by chemistry: https://www.sciencedirect.com/science/article/pii/S0306261926004617 (not read in full)
- Baltic power market 2025 white paper: https://www.solarplaza.com/resource/13406/white-paper-developments-in-the-baltic-power-market-2025/
