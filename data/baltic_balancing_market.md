# Baltic balancing market as a revenue opportunity for small (0.5–2 MW) second-life EV battery storage in Latvia — status 30 Oct 2026

Conventions: capacity prices are in EUR/MW/h (EUR per MW of reserved capacity per hour). "LV" means the Latvian bidding zone. Lines marked **[own calculation]** are this researcher's arithmetic on the cited public data. They are not published figures. The web-search budget ran out near the end of the research, and several primary pages (likumi.lv, the Baltic Transparency Dashboard and one CEEnergyNews article) blocked automated access. The resulting gaps are listed under each question.

---

## Q1. Which balancing products exist in the Baltics in 2025–2026? What volumes (MW) are required per country, what are the activation times, and how are they procured?

### Takeaway
Since February 2025 the three Baltic TSOs have procured three standard capacity products jointly, every day (D-1), in the Baltic Balancing Capacity Market (BBCM). The products are FCR (symmetric, about 28 MW for the whole Baltic block in 2026), aFRR up/down (about 96–120 MW per direction in 2026) and mFRR up/down (about 580–604 MW up and 675–691 MW down in 2026). Bids are 15-minute products with a 1 MW minimum and are paid at the marginal price. Balancing energy is activated through the European platforms MARI (since October 2024) and PICASSO (AST joined on 10 April 2025). A large share of demand is still covered by zero-priced TSO-owned "demand reduction resources", which include AST's own 80 MW of batteries. These are due to be phased out between end-2026 and November 2028.

### Cited Findings

**Timeline and platform integration**
- The BBCM went live with its first auction on 4 Feb 2025 for delivery on 5 Feb 2025. It procured standard FCR and mFRR capacity first. Standard aFRR capacity was first procured for delivery on 16 Apr 2025, after all Baltic TSOs had joined PICASSO — [Baltic TSOs' EBGL Art. 60 report, 22 Apr 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf); [BBCM Evaluation Report 2025, 31 Oct 2025](https://eleringweb.cdn.prismic.io/eleringweb/_CROur1-NzX0uDB__BBCMEvaluationreport2025.pdf). Volton's dataset notes give "aFRR added 15 April 2025", which is presumably the auction day for 16 April delivery — [Volton LT mFRR page](https://volton.energy/en/data/mfrr-capacity-price-lt).
- The Baltic grids synchronised with Continental Europe on 9 Feb 2025 — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- MARI (the mFRR energy platform): the Baltic TSOs joined in October 2024. The same report gives both "October 10th 2024" (section 2.1) and "2024.10.08" / "after October 8th 2024" (table and Art. 3), so the exact date is internally inconsistent — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf). The original derogation had set a MARI deadline of 24 Jul 2024 — [AST MARI timeline notice](https://www.ast.lv/en/node/61169).
- PICASSO (the aFRR energy platform): the plan had been for Baltic TSOs to join in January 2025 alongside an aFRR energy market. This was delayed "for technical reasons beyond the control of the Baltic TSOs" — [AST notice](https://www.ast.lv/en/node/83771). Actual accession dates were Litgrid 4 Mar 2025, Elering 9 Apr 2025 and AST 10 Apr 2025 — [ENTSO-E All-TSOs Balancing Cost Report 2026 (26 Jun 2026)](https://eepublicdownloads.blob.core.windows.net/public-cdn-container/clean-documents/Reports/2026/260626_All%20TSOs%20Electricity%20Balancing%20Cost%20Report_2026.pdf). The Baltic TSOs' report instead gives Litgrid's date as 2025.03.05 — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- A 15-minute imbalance settlement period was in place by 1 Jan 2026. Dual imbalance pricing is not used. Elering has applied an incentivising component since 9 Feb 2025, while AST has not — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- AST describes a Latvian battery site as able to earn from six markets in each 15-minute period: BBCM (FCR), PICASSO (aFRR energy), MARI (mFRR energy, scheduled and direct activation), SIDC intraday, the intraday auctions IDA1–3, and day-ahead. Activation command timing: aFRR from T+0 to T+15'; mFRR direct activation from T−7' to T+7'; mFRR scheduled activation always at T−7'; FCR throughout the MTU — [AST market-participant presentation (Latvian)](https://www.ast.lv/sites/default/files/editor/4.2.prezentacija_AST_Gunars.pdf).

**BBCM procurement rules**
- Capacity is procured every day in the day-ahead timeframe. FCR and FRR are separate auctions: the FCR gate closes at 07:30 EET and the aFRR/mFRR gate at 09:00 EET. aFRR and mFRR are cleared together, and one can substitute for the other when that gives higher welfare or when there is scarcity. A provider awarded aFRR or mFRR capacity must then submit matching aFRR/mFRR energy bids — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- For both the FCR and FRR products, the minimum bid is 1 MW with 1 MW granularity. The maximum bid is limited to the provider's prequalified resources. Prices must be zero or positive and are capped at the maximum day-ahead price, converted to EUR/MW per MTU. Each bid is valid for a single MTU. Block bids are allowed for FCR. For FRR, block bids, linked up-and-down bids and exclusive groups are allowed. aFRR/mFRR bids are divisible by default, and indivisible bids need approval in prequalification — [BBCM rules explanatory document (AST)](https://www.ast.lv/sites/default/files/editor/Explanatory_document_for_the_Baltic_proposal_to_the_Baltic_balancing_capacity_market_rules_in_accordance_with_EBGL_Articles_33(1)_and_38(1).pdf).
- Pricing is marginal (pay-as-cleared). FCR clears at a single Baltic-wide price because no cross-zonal capacity is allocated to it. FRR clears at one price per zone, product, direction and MTU, which is the same across zones unless there is congestion; a congested importing zone pays at least the exporting zone's price — [BBCM rules explanatory document](https://www.ast.lv/sites/default/files/editor/Explanatory_document_for_the_Baltic_proposal_to_the_Baltic_balancing_capacity_market_rules_in_accordance_with_EBGL_Articles_33(1)_and_38(1).pdf). The TSOs' modelling uses a balancing-capacity price cap of 4,000 EUR/MW/h — [BBCM Evaluation Report 2025](https://eleringweb.cdn.prismic.io/eleringweb/_CROur1-NzX0uDB__BBCMEvaluationreport2025.pdf).
- Up to 50% of the cross-zonal capacity between Baltic zones (70% under scarcity) can be allocated to exchanging or sharing balancing capacity — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf). In Oct 2025–Jun 2026 the 50% limit was never breached and average allocation was 22.4–32.8% — [BBCM Evaluation Report 2026 (4 Aug 2026)](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- A unit is eligible for the BBCM only if it is a prequalified reserve-providing unit or group whose technical units are not used in any other prequalified unit or group. At group level, indivisible bids are allowed only where the provider is aggregating FRR bids from assets that are too small to take part on their own — [BBCM rules explanatory document](https://www.ast.lv/sites/default/files/editor/Explanatory_document_for_the_Baltic_proposal_to_the_Baltic_balancing_capacity_market_rules_in_accordance_with_EBGL_Articles_33(1)_and_38(1).pdf).

**Required volumes (MW)**
- Dimensioned volumes after synchronisation, as reported for the 2024–2025 report period: FCR 23 MW for the Baltic block (EE 7, LV 7, LT 9). aFRR up 38–76 MW (LV 14–50); aFRR down 38–78 MW (LV 14–50). Total FRR up 422–786 MW (LV 113–454); FRR down 259–582 MW (LV 63–147). mFRR is not dimensioned separately; it equals FRR minus aFRR. Latvia's largest reference incident is the loss of a generation unit. For the Baltic block as a whole it is NordBalt — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- Total 2026 demand is about 1,600 MW: FCR 28 MW; aFRR up to 96–120 MW upward and 104–120 MW downward; mFRR up to 580–604 MW upward and 675–691 MW downward — [Elering/AST/Litgrid announcement, 7 Nov 2025](https://www.elering.ee/en/article/baltic-electricity-transmission-operators-announce-plan-phase-out-balancing-resources).
- The TSOs' July 2025 forecast has mFRR-up need rising from 604 MW (2026) to 754 MW (2035) and mFRR-down from 691 MW to 991 MW. aFRR is "not expected to change significantly", peaking at about 120 MW up (16:00–20:00 cycle) and 115 MW down. aFRR is dimensioned in 4-hour cycles. In 2025, aFRR demand was cut by 50% and replaced with mFRR during the transition period — [Baltic LFC block FRR dimensioning forecast 2026–2035 (29 Jul 2025)](https://www.ast.lv/sites/default/files/editor/FRR_dimensioning_forecast_2026-2035_ACEol.pdf).
- A trade-press summary (Sept 2025) gave the market sizes as FCR 30 MW, aFRR 100 MW and mFRR 700 MW, about 830 MW in total — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/). These are rounder and older than the TSO figures above.
- In July 2024 AST's pre-launch indication was 36 MW of FCR for the Baltics — [AST indicative reserve volumes (Jul 2024)](https://ast.lv/sites/default/files/editor/JaudasRezervjuApjomi_2025.pdf). This was superseded by the 23–28 MW figures above.

**Technical / activation requirements (Latvia, AST)**
- FCR: full activation within 30 s, response starting within 2 s, a combined deadband of no more than ±10 mHz, full activation at ±200 mHz, frequency measured to at least ±10 mHz, and steady-state error no more than ±10% or ±0.1 MW. A limited-energy-reservoir (LER) unit such as a battery needs an installed output to FCR capacity ratio of at least 1.25:1. In the alert state it must sustain full FCR activation for at least 30 minutes, and it needs a "reserve mode" when its state of charge runs low. aFRR full activation time is 5 minutes — [AST Technical and data-exchange requirements for reserve units, K-52-206 ed. 06 (approved 03.12.2024, valid to 03.12.2027)](https://ast.lv/sites/default/files/editor/SVV-info-faili/TOD_S_P_A4_4_01_25.pdf).
- The BBCM 2026 report refers to an mFRR "minimum product activation time of 15 minutes", which some Latvian hydro units cannot meet: 808 MW of prequalified Latvian hydro mFRR in each direction does not intend to participate — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).

**TSO-owned "demand reduction resources" (DRR), which displace market volume**
- Under an EU exemption, TSO-held assets (Elering's Kiisa plant, AST's BESS and Litgrid-related Energy Cells BESS) supply balancing capacity at zero price as DRR — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- Phase-out plan (7 Nov 2025):
  - Latvia: AST BESS provides 8 MW FCR and 32 MW aFRR (up and down) for up to three years, ending no later than November 2028. The TSOs estimate this halves the balancing-capacity costs passed on to Latvian producers and consumers. The Latvian regulator may reduce or suspend it.
  - Estonia: Kiisa provides mFRR up 250 MW and down 40 MW until November 2028, after which it is to be sold.
  - Lithuania: Energy Cells provides aFRR of at most 40 MW each way, extended until 2026.
  - DRR cut total balancing-capacity costs eightfold in Feb–Sep 2025.

  — [Elering/AST/Litgrid announcement](https://www.elering.ee/en/article/baltic-electricity-transmission-operators-announce-plan-phase-out-balancing-resources)
- Changes since then: AST BESS entered the BBCM on 30 Oct 2025 with 33 MW aFRR and 7 MW FCR, changed to 32 MW aFRR and 8 MW FCR from 1 Jan 2026. Energy Cells aFRR was cut from 40 to 30 MW on 1 May 2026. Kiisa was capped at 225 MW upward from 1 Jul 2026. In Oct 2025–Jun 2026 the average accepted DRR volumes per MTU were: EE mFRR up 246.85 MW and down 39.35 MW; LT aFRR about 36 MW each way; LV aFRR about 28.3–28.5 MW each way; LV FCR 5.98 MW — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- Litgrid states that Energy Cells will provide aFRR until the end of 2026. Its regulator NERC approved the cut to 30 MW on 23 Apr 2026 — [Litgrid exit-strategy page (modified 21 Sep 2026)](https://www.litgrid.eu/index.php/electricity-market/balancing-market/baltic-tso-resource-exit-strategy/36339).

**Participants**
- In the 2024–2025 report period there were 11 active balancing service providers (BSPs) and 24 balance responsible parties (BRPs) in Latvia, 8 BSPs and 33 BRPs in Lithuania, and 23 BSPs (two based on demand response) and 16 BRPs in Estonia — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- As of about August 2026, 14.18 GW was prequalified for the BBCM, excluding TSO-owned resources: FCR 405 MW, aFRR up 1,629 MW, aFRR down 1,756 MW, mFRR up 4,894 MW, mFRR down 5,501 MW — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- Market concentration (Herfindahl–Hirschman Index, HHI) fell between October 2025 and June 2026: mFRR up 4,254 → 3,073; mFRR down 2,898 → 1,690; aFRR up 2,783 → 1,936; aFRR down 2,597 → 1,859. For upward mFRR, the two largest providers supply about 80% of accepted volume — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).

### Inferences
- FCR is very small (28 MW for all three countries in 2026). Of that, 8 MW comes from AST's zero-priced BESS, which leaves roughly 20 MW procured from the market against 405 MW prequalified. aFRR (about 100–120 MW per direction, of which roughly 60–70 MW is covered by TSO batteries in LV and LT) is also small compared with the prequalified volume. mFRR is the only deep product. A new small battery is therefore entering markets of which FCR and aFRR are already heavily oversubscribed.
- When the DRR volumes leave the market (Energy Cells end-2026; AST BESS and Kiisa by November 2028), market demand rises by about 30 MW of aFRR in Lithuania, about 32 MW of aFRR and 8 MW of FCR in Latvia, and about 225 MW of mFRR up and 40 MW of mFRR down in Estonia. This supports prices, but the effect comes in steps.

### Gaps
- No primary source fetched gives the mFRR full activation time explicitly. The standard MARI product is generally 12.5 minutes, but this was not verified in a fetched source. The BBCM 2026 report only mentions a "15-minute minimum product activation time".
- Per-country dimensioned FCR/aFRR/mFRR for 2026 was not split by country in the sources fetched; only Baltic totals were found.
- The Baltic TSO "resource exit strategy v1" document, which gives DRR volumes for 2026–2028, was not retrieved. Only the Litgrid summary page was read.

---

## Q2. What were monthly average capacity prices for FCR, aFRR up/down and mFRR up/down from February 2025 to the latest month, and how have they changed during 2026?

### Takeaway
Prices were extreme at launch in 2025 and have fallen sharply since. Latvia's 2025 averages were FCR 88.21, aFRR up 77.11, aFRR down 90.56, mFRR up 42.06 and mFRR down 21.49 EUR/MW/h. The January–June 2026 averages were 45.49, 28.31, 11.93, 23.99 and 16.67. October 2026 (1–29 Oct) fell further to aFRR up about 12.4, aFRR down about 4.0, mFRR up about 14.0 and mFRR down about 4.4 EUR/MW/h. Prices are seasonal: they dip in the April flood period and spike in winter and June. Year-on-year, October 2026 prices are 61–84% below October 2025.

### Cited Findings

**Official period averages (EUR/MW/h)**

| Zone | Period | FCR | aFRR up | aFRR down | mFRR up | mFRR down |
|---|---|---|---|---|---|---|
| LV | 2025 annual avg | 88.21 | 77.11 | 90.56 | 42.06 | 21.49 |
| LT | 2025 annual avg | 88.21 | 76.86 | 90.52 | 32.56 | 21.13 |
| EE | 2025 annual avg | 88.21 | 65.32 | 101.36 | 43.90 | 63.42 |
| LV | Jan–Jun 2026 avg | 45.49 | 28.31 | 11.93 | 23.99 | 16.67 |
| EE | Jan–Jun 2026 avg | 45.49 | 15.70 | 11.71 | 16.62 | 16.71 |
| FI (benchmark) | Jan–Jun 2026 | 9.02 (FCR-N) | 5.40 | 4.00 | 1.90 | 2.31 |
| PL (benchmark) | Jan–Jun 2026 | 22.95 | 43.30 | 46.88 | 42.50 | 18.60 |

Source: BBCM Evaluation Report 2026, Tables 8–9 — [link](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf). The "2025 annual" figures cover only months with procurement (FCR and mFRR from 5 Feb; aFRR from 16 Apr). In 2025 Finland's averages were FCR-N 18.27, aFRR up 15.52 and down 11.63, mFRR up 8.31 and down 14.43 (same source).

**Month-by-month series, Latvian zone (EUR/MW/h, simple time-average of 15-minute MTU clearing prices)**

| Month | FCR (single Baltic price) | aFRR up | aFRR down | mFRR up | mFRR down | Basis |
|---|---|---|---|---|---|---|
| Feb 2025 (from 5th) | high; not monthly-sourced | not procured | not procured | ~15 | ~20 | A |
| Mar 2025 | " | not procured | not procured | ~70 | ~35–70 | A |
| Apr 2025 | " | ~140 (from 16 Apr) | ~245 | ~150 | ~25 | A |
| May 2025 | " | ~60 | ~360 | ~15 | ~15 | A |
| Jun 2025 | " | ~15 | ~15 | <10 | ~10–15 | A |
| Jul 2025 | " | ~280 | ~185 | ~10–15 | ~10–15 | A |
| Aug 2025 | " | ~100 | ~45 | ~30 | ~10–15 | A |
| Sep 2025 | " | ~95 | ~40 | ~90 | ~10–15 | A |
| Oct 2025 | ~95 | 56.74 | 13.29 | 36.09 | 26.98 | B |
| Nov 2025 | ~70 | 2.42 | 3.19 | 12.95 | 12.17 | B |
| Dec 2025 | ~14 | 5.00 | 3.46 | 17.89 | 12.21 | B |
| Jan 2026 | ~77 | 52.41 | 15.59 | 22.61 | 17.77 | B |
| Feb 2026 | ~71 | 38.67 | 12.60 | 33.07 | 17.12 | B |
| Mar 2026 | ~16 | 11.95 | 12.57 | 19.16 | 16.79 | B |
| Apr 2026 | ~7 | 3.75 | 5.57 | 10.80 | 10.36 | B |
| May 2026 | ~42 | 26.97 | 12.25 | 26.12 | 12.89 | B |
| Jun 2026 | ~60 | 36.30 | 12.87 | 32.75 | 25.26 | B |
| Jul 2026 | not found | 31.71 | 9.01 | 27.92 | 9.64 | C |
| Aug 2026 | not found | 24.22 | 6.03 | 23.70 | 6.01 | C |
| Sep 2026 | not found | 16.32 | 4.09 | 19.45 | 4.24 | C |
| Oct 2026 (1–29 Oct) | not found | 12.38 | 3.99 | 13.95 | 4.35 | C |

Bases:
- **A**: approximate monthly means read by eye from the box-plot charts (Figures 15 and 17, "with TSO resources" = actual market) in the [BBCM Evaluation Report 2025](https://eleringweb.cdn.prismic.io/eleringweb/_CROur1-NzX0uDB__BBCMEvaluationreport2025.pdf). Reading error is roughly ±10–20 EUR/MW/h. As a cross-check, a day-weighted average of these readings plus the official Oct–Dec 2025 values reproduces the official 2025 annual averages within about ±4 EUR/MW/h for all four FRR series (aFRR up 81.1 vs 77.11; aFRR down 93.2 vs 90.56; mFRR up 41.8 vs 42.06; mFRR down 17.6–20.9 vs 21.49, depending on the March reading) **[own calculation]**.
- **B**: official monthly averages, Tables 2 and 5 of the [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf). FCR values are read from its Figure 17 chart (approximate). The Jan–Jun 2026 chart readings average 45.5, which matches the official Jan–Jun 2026 FCR average of 45.49 **[own calculation]**. The tables are headed "€/MWh … clearing price", but the values match the EUR/MW/h capacity prices in the same report's Table 9 and the Volton capacity data, so they are capacity prices.
- **C**: **[own calculation]** from the per-day archive of BBCM-cleared Latvian capacity prices published by Volton, which is sourced from AST and the Baltic Transparency Dashboard (CC-BY-4.0). Endpoints: [aFRR LV](https://public-data.volton.energy/v1/afrr-capacity-price-lv/latest.json), [mFRR LV](https://public-data.volton.energy/v1/mfrr-capacity-price-lv/latest.json), [dataset page](https://public-data.volton.energy/mfrr-capacity-price-lv/). The archive actually available begins on 20 Dec 2025 and is missing some days (20–24 Feb, 11–12 and 30 Mar, 16–17 May, 9–10 Jul, 26–27 Aug, 5–6 Sep 2026). Months are UTC calendar months. Validation against the official Jan–Jun 2026 tables (basis B) is close. For example, January 2026 computes to 52.41 / 15.58 / 22.59 / 17.81 against the official 52.41 / 15.59 / 22.61 / 17.77. The largest gap is February 2026 aFRR up (40.65 against 38.67), which is explained by the five missing February days.

**Additional price facts**
- Medians are much lower than means because the price distributions are right-skewed. For Jul / Aug / Sep / Oct 2026 the LV medians were: aFRR up 5.00 / 5.00 / 10.47 / 8.75; aFRR down 5.00 / 2.20 / 3.70 / 4.14; mFRR up 15.15 / 9.76 / 15.00 / 10.00; mFRR down 5.70 / 3.74 / 4.00 / 4.29 EUR/MW/h **[own calculation, Volton data as above]**. Roughly one-third to two-fifths of aFRR MTUs clear at exactly zero — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- Latest week, LV, delivery 23–30 Oct 2026: aFRR up average 13.82 (minimum 0, maximum 69.30); aFRR down 4.11; mFRR up 14.70 (maximum 69.30); mFRR down 4.38 EUR/MW/h **[own calculation, Volton latest.json]**. Lithuania, 23–29 Oct 2026: mFRR up average 15.9 (2.8–33.5) and down 4.6 — [Volton LT mFRR page](https://volton.energy/en/data/mfrr-capacity-price-lt).
- Latvia and Lithuania cleared at nearly identical prices. Estonia was cheaper upward: Oct 2025–Jun 2026 period averages were mFRR up EE 16.28 vs LV 23.44 vs LT 23.94, and aFRR up EE 13.32 vs LV 26.02. Upward prices diverged across zones in 29.4% of MTUs for mFRR and 21.1% for aFRR, against about 4% and 3% downward. The main cause is congestion on the Estonia–Latvia border — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- FCR prices "decreased significantly in December of 2025 and during the spring of 2026". The trend has been downward since launch, but Baltic FCR stays above neighbouring markets — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf). A third-party analytics site cites FCR at about 97 EUR/MW/h on average in the 2025 launch period and about 34.6 in early 2026, aFRR down at about 127 in the launch period with a peak of about 357 in May 2025, and aFRR up at 12.4 in October 2026. It also reports FCR capacity revenue of about €17.8k per MW per month over the 30 days to late October 2026 — [Odagrid](https://odagrid.com/) (secondary aggregator; its figures are consistent with the tables above).
- Total FRR capacity procurement cost (aFRR + mFRR, excluding FCR):
  - 5 Feb–30 Sep 2025: €245.75m (mFRR €190.90m, aFRR €54.84m) — [BBCM Evaluation Report 2025](https://eleringweb.cdn.prismic.io/eleringweb/_CROur1-NzX0uDB__BBCMEvaluationreport2025.pdf).
  - 1 Oct 2025–30 Jun 2026: €108.6m (LT €66.6m, LV €23.66m, EE €18.29m). The highest month was June 2026 at €17.87m and the lowest April 2026 at €6.43m — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- In 2025 AST put Baltic FCR prices at about 2x Finland's, mFRR at about 4x and aFRR at about 10x (Gatis Junghāns, AST board, September 2025) — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/).
- Clean Horizon's battery revenue index for a 2-hour battery, which combines all markets (EUR/MW/year):

| Data month | Latvia | Lithuania | Estonia | Source |
|---|---|---|---|---|
| May 2026 | 338,000, nearly double April, driven by higher aFRR capacity prices | 326,000, nearly double April | about 175,000, flat | [ESS News 1 Jul 2026](https://www.ess-news.com/2026/07/01/poland-italy-lead-europes-battery-storage-revenue-rankings/) |
| Jul 2026 | 338,000 (−24% m/m) | 302,000 (−30%; aFRR capacity −10%, mFRR −32%) | 175,000 (−46%) | [ESS News 2 Sep 2026](https://www.ess-news.com/2026/09/02/battery-revenues-surge-in-spain-and-poland-as-europe-sees-mixed-results/) |
| Aug 2026 | 307,000 (−17%) | 251,000 (−17%) | 152,000 (−13%) | [ESS News 24 Sep 2026](https://www.ess-news.com/2026/09/24/battery-revenues-rise-everywhere-in-europe-other-than-baltics-in-august-2026/) |

  In August 2026 mFRR capacity accounted for 54% of revenue in Latvia and Lithuania (same ESS News, 24 Sep 2026). A summary of the July article also gave Latvia's July changes as aFRR capacity −12% and mFRR −32%, and Estonia's as aFRR −47% and mFRR −65%. Only the Lithuanian sentence was confirmed verbatim.

### Inferences
- Change during 2026, Latvia, January → October **[own calculation]**: aFRR up −76% (52.41 → 12.38), aFRR down −74% (15.59 → 3.99), mFRR up −38% (22.61 → 13.95), mFRR down −76% (17.77 → 4.35). October 2025 → October 2026: aFRR up −78%, aFRR down −70%, mFRR up −61%, mFRR down −84%. Since July 2026, downward-direction prices (about 4–10) have been below every 2025 month, which is consistent with batteries flooding the market (they can bid both directions).
- The Clean Horizon Latvian figures are arithmetically inconsistent. If July was €338k and August fell 17%, August should be about €281k, not €307k; an August of €307k implies July was about €370k. The Lithuanian and Estonian figures do reconcile. One of the Latvian figures as reported by ESS News is probably wrong.
- Illustrative gross capacity revenue for 1 MW offered symmetrically (up and down) every hour at 100% availability, ignoring energy and state-of-charge limits, acceptance risk and aggregator fees **[own calculation]**:
  - aFRR at October 2026 averages: (12.38 + 3.99) × 8,760 ≈ €143k per MW per year.
  - aFRR at January–June 2026 averages: (28.31 + 11.93) × 8,760 ≈ €353k per MW per year.
  - mFRR at October 2026 averages: (13.95 + 4.35) × 8,760 ≈ €160k per MW per year.

  These are upper bounds. They are not achievable simultaneously across products for the same MW.
- Seasonality matters for a business case. Prices are lowest in April (spring hydro) and November–December, and spike in January–February and June.

### Gaps
- No monthly FCR prices were found for Feb–Sep 2025 or Jul–Oct 2026. Volton publishes no FCR dataset, and the Baltic Transparency Dashboard API was blocked by Cloudflare. The FCR values for Oct 2025–Jun 2026 are chart readings.
- Exact monthly averages for Feb–Sep 2025 by zone are only available as charts in the 2025 evaluation report. The Volton per-day archive returned "not found" before 20 Dec 2025, although its page says it is "available from 2025-02-04".
- Balancing-energy activation prices (PICASSO/MARI) were not compiled. Volton offers `afrr-clearing-price-lv` and `mfrr-clearing-price-lv` datasets that could be processed the same way. Trade press reports that PICASSO prices sometimes reach thousands of EUR/MWh — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/).

---

## Q3. How much new battery capacity is operating or contracted in the Baltics, and what do TSOs and analysts forecast for balancing prices as it comes online?

### Takeaway
Battery capacity is growing fast. Lithuania alone had about 1.2 GW / 2.3 GWh operating in October 2026, and roughly 2 GW is possible by end-2026. Latvia has AST's 80 MW / 160 MWh in operation and about 140 MW + 490 MWh of private projects contracted (NGEN 100 MW / 200 MWh, Sunly 490 MWh, Latvenergo 2 × 20 MW). AST also holds about 1.8 GW of BESS connection requests. The prequalified BESS volume (about 517 MW of aFRR-up and 116 MW of FCR) already exceeds total Baltic aFRR and FCR demand several times over. Analysts (Aurora, Fusebox, Clean Horizon) and the TSOs all describe falling capacity prices and expect mFRR capacity revenue to become a small share of battery income by about 2029. Withdrawal of TSO resources and growing mFRR needs push the other way.

### Cited Findings

**Latvia**
- AST's own BESS: Rēzekne 60 MW / 120 MWh (100% EU RRF / RePowerEU funded) and Tume 20 MW / 40 MWh (75% CEF co-financed). Total cost was €77.07m. Supplier: Rolls-Royce Solutions with LEC Construction International. The custom battery management system was developed with Riga Technical University. Both sites qualified for FCR and aFRR, and BBCM delivery started on 30 Oct 2025. AST estimates savings of about €20m a year from 2026 through lower balancing-capacity costs — [ESS News, 30 Oct 2025](https://www.ess-news.com/2025/10/30/latvia-adds-big-batteries-to-complete-grid-sync-with-europe-two-major-estonian-projects-secure-finance/).
- NGEN Group (Slovenia) / SIA Liepāja ESS: 100 MW / 200 MWh stand-alone BESS at the Grobiņa substation (Kurzeme), with a €50m investment. It is described as the first stand-alone BESS connected directly to the AST transmission system, with construction "planned to be completed" in 2026 — [LSM, 4 Feb 2026](https://eng.lsm.lv/article/economy/business/04.02.2026-slovenian-energy-company-says-it-is-investing-eur-50m-in-latvia.a633043/). Enersense holds the turnkey contract (about €7m, signed February 2026). It uses Tesla Megapacks, with a 110 kV cable to AST's Grobiņa substation and a 110/33 kV transformer. The foundation stage was marked in August 2026 and no completion date was given — [LSM, 10 Aug 2026](https://eng.lsm.lv/article/economy/economy/10.08.2026-battery-park-to-be-built-in-grobina-latvia.a658185/).
- Sunly + Rolls-Royce (mtu EnergyPack): four utility-scale BESS in Latvia totalling 490 MWh, with MW per site not disclosed. The first is a hybrid park in Valmiera, to be commissioned in 2027. Sunly cited NIS2 cybersecurity compliance as the reason for choosing a European supplier. There is also an MoU for 300 MWh at Risti in Estonia. Rolls-Royce says it is on course for more than 1.5 GWh in the Baltics — [ESS News, 5 Jun 2026](https://www.ess-news.com/2026/06/05/rolls-royce-signs-490-mwh-latvia-bess-deal-as-sunly-secures-european-supply/).
- Latvenergo targets 250 MW / 500 MWh of BESS by 2030 at its CHPP-1 and CHPP-2 gas plants. Utilitas Wind and Niam/Evecon are also named as BESS developers in Latvia — [Energy-Storage.news, about Feb 2025](https://energy-storage.news/latvia-latvenergo-to-deploy-250mw-500mwh-bess-by-2030). Merus Power received an order on 10 Mar 2026 for two storage facilities in Riga for Latvenergo, "each rated 20 MW / 40 MWh". The overall contract is worth €22.5m (general contractor Nordes Būve) — [Merus Power release](https://www.placera.se/pressmeddelanden/merus-power-insider-information-merus-power-receives-significant-energy-storage-order-from-latvia-20260310). PV Europe instead describes "two 20 MW storage facilities with a combined capacity of 40 MWh" — [PV Europe](https://www.pveurope.eu/markets/latvia-merus-power-debuts-20-mw-40-mwh-battery-project). The sources conflict, and the primary release is preferred.
- AST connection pipeline as of 27 Oct 2025: planned BESS capacity of 1,323 MW with a "constant" grid service, 100 MW "flexible" and 395 MW "limitable". Solar projects are being hybridised with about 1.3 GW of storage — [AST presentation, K. Krustkalns](https://www.ast.lv/sites/default/files/editor/7_KASPARS_Jaunu_elektrostaciju_un_BESS_pieslegumu_tendences.pdf). In November 2025 AST had issued temporary operation notices for 29 MW of batteries at 110 kV — [AST 2026 tariff project summary](https://www.ast.lv/sites/default/files/editor/Publiskojama_inf_tarifs_2026_Final.pdf).
- Prequalified BBCM volumes for Latvian BESS (about August 2026, excluding TSO-owned): FCR 40 MW, aFRR up 163 / down 162 MW, mFRR up 101 / down 100 MW. Latvian Solar+BESS adds a further 16 MW aFRR and 19 MW mFRR — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).

**Lithuania**
- Installed BESS was 1,195 MW / 2,261 MWh in early October 2026 (Litgrid data), up about 70% from about 700 MW at end-June 2026. Litgrid expects up to 20 more projects on the transmission grid by end-2026, which would take the total above 2 GW / 4 GWh. The ministry's target of 1.5 GW by 2028 is expected to be exceeded by end-2026 — [renewable-energy-industry.com / IWR, 21 Oct 2026](https://www.renewable-energy-industry.com/news/world/article-7715-battery-storage-boom-in-lithuania-capacity-rises-to-almost-1200-mw-ignitis-and-emsys-vpp-expand-virtual-power-plant-for-balancing-power).
- Energy Cells (TSO-affiliated) has about 200 MW across four Fluence projects. Ignitis ordered 291 MW / 582 MWh from Rolls-Royce for three projects due in 2027. State-aid calls have awarded about 4 GWh of projects (status September 2025) — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/).
- DS1 and BLEnergy started building 140 MW / 327 MWh in Alytus — [Fusebox, 30 Sep 2026](https://fusebox.energy/building-fast-paid-differently-signals-from-the-baltic-and-nordic-battery-market/).
- Only 40 MW of Lithuanian BESS (aFRR) was listed as BBCM-prequalified in about August 2026, excluding TSO-owned units. Lithuanian hybrids added 144 MW of aFRR up and 199 MW of mFRR up — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).

**Estonia**
- Baltic Storage Platform (Corsica Sole, Evecon, Mirova): Hertz 1 at Kiisa was energised on 1 Oct 2025, with full grid services expected by Q1 2026. Hertz 2 at Aruküla is expected by end-2026. Combined capacity is 200 MW / 400 MWh, with €85.6m of financing from the EBRD, Edmond de Rothschild and NIB — [ESS News, 30 Oct 2025](https://www.ess-news.com/2025/10/30/latvia-adds-big-batteries-to-complete-grid-sync-with-europe-two-major-estonian-projects-secure-finance/).
- Eesti Energia's 26.5 MW / 53.1 MWh is operating — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/). Taaleri invested in a 192 MW / 420 MWh project (Evecon / Corsica Sole) targeting November 2027 — [Fusebox](https://fusebox.energy/building-fast-paid-differently-signals-from-the-baltic-and-nordic-battery-market/).
- Prequalified Estonian BESS: FCR 76, aFRR up 314 / down 309, mFRR up 388 / down 393 MW — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).

**Forecasts and outlook**
- Aurora (October 2025, modelled on a Lithuanian standalone asset): a 2-hour BESS commissioned in 2026 earns an IRR of 13–16% with a 4–5-year payback (4-hour: 11–15%). One commissioned in 2029 earns 6–13% for 2-hour with a 7–10-year payback, and 5–12% for 4-hour. Aurora says "more flexible capacity is expected to push down mFRR capacity prices and energy market spreads", and that for 2029 entrants mFRR capacity revenue becomes "only a small share" of revenue because of saturation, making energy arbitrage and multi-market stacking more important. The aFRR market was excluded from the analysis — [ESS News, 16 Oct 2025](https://www.ess-news.com/2025/10/16/baltic-battery-report-get-in-if-you-can-says-aurora/).
- In September 2025 Ignitis expected 20–30% IRRs for first movers, and AST described a regional "flexibility deficit". Sorainen flagged long-term risk from the region's small size: Baltic consumption is about one-seventh of Poland's — [Energy-Storage.news](https://www.energy-storage.news/ancillary-service-prices-through-the-roof-in-baltics-20-30-irrs-for-bess-first-movers/).
- Fusebox (30 Sep 2026): Baltic ancillary prices are "still high but thinning" and the Baltic ancillary premium is shrinking. Developers are building longer durations to trade energy. EPEX SPOT is launching Baltic day-ahead auctions alongside Nord Pool — [Fusebox](https://fusebox.energy/building-fast-paid-differently-signals-from-the-baltic-and-nordic-battery-market/).
- TSOs (BBCM 2026 report): the market is "more liquid, more competitive" and prices have "converged and stabilized". "The year-on-year decline and the seasonal pattern of prices both suggest that the market is continuing to develop and become more competitive". The report notes "a recent surge of BESS and BESS-combined assets", which pushed gas out of second place by prequalified capacity. It also warns that reserve sufficiency "still rests on the participation of a few large assets" and on DRR — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- TSO sensitivity analysis, with today's portfolio held fixed: cutting DRR by 25% raises 9-month FRR cost by 51% (+€55m; Latvia +54% or +€12.7m). A 50% cut raises it by 229%, and removing DRR entirely adds about €2.02bn — [BBCM Evaluation Report 2026](https://litgrid.eu/wp-content/uploads/2026/09/BBCM-Evaluation-report-2026-1.pdf).
- Demand growth: mFRR up need rises from 604 MW (2026) to 754 MW (2035) and mFRR down from 691 to 991 MW, driven by renewables. Latvian wind is forecast to grow from 331 MW (2026) to 1,855 MW (2035) and solar from 1,049 to 2,935 MW — [FRR dimensioning forecast 2026–2035](https://www.ast.lv/sites/default/files/editor/FRR_dimensioning_forecast_2026-2035_ACEol.pdf).
- A third-party analytics note (September 2026) reports a correlation of r = −0.70 between Baltic balancing revenue and installed battery capacity, against r = −0.06 for day-ahead spreads — [Odagrid](https://odagrid.com/) (secondary source).
- Before launch (July 2024), AST indicated Latvia's share of reserve costs at about €8m a year (minimum price scenario), about €40m a year (average), about €20m a year with AST's BESS, and about €120m a year (maximum) — [AST, Jul 2024](https://ast.lv/sites/default/files/editor/JaudasRezervjuApjomi_2025.pdf).

### Inferences
- Saturation is visible already. Prequalified BESS alone (EE + LV + LT, excluding TSO-owned) offers about 517 MW of aFRR up against a Baltic aFRR-up need of at most about 120 MW, and 116 MW of FCR against 28 MW. Lithuania's operating fleet (about 1.2 GW) far exceeds its prequalified BBCM volume, so more prequalifications are likely to follow. This points to capacity prices for FCR and aFRR trending toward Finnish or "battery-saturated" levels (Finland Jan–Jun 2026: FCR-N about 9, aFRR about 4–5, mFRR about 2 EUR/MW/h). mFRR is likely to hold up longer because of its size (about 600–700 MW per direction) and its growth.
- Latvian actual FRR capacity cost, annualised from Oct 2025–Jun 2026 (€23.66m over 9 months), is about €31.5m a year excluding FCR. That sits between AST's "average" and "with BESS" pre-launch scenarios.
- The 2026–2028 price path depends on two opposing forces: new BESS (in the GW range) lowering prices, and DRR exits plus FRR demand growth raising volumes. The TSOs' non-linear DRR cost curve suggests DRR exits would raise prices sharply only if market supply had not grown. With the current BESS build-out, they are more likely to be absorbed.
- For a small second-life battery entering in 2027–2028, Aurora's 2029 case (6–13% IRR for new 2-hour systems, with mFRR capacity revenue becoming marginal) is a more realistic reference than the 2025 "first-mover" returns.

### Gaps
- No TSO or analyst publishes an explicit numerical forecast of Baltic capacity prices in EUR/MW/h for 2027 or later in the sources accessed. Aurora's full report is paywalled, and Modo Energy and Rystad Baltic outlooks were not found before the search budget ran out.
- There is no consolidated official Latvian BESS operating total for October 2026. The latest-dated Latvenergo article (pv magazine, 11 Sep 2026) could not be fetched because of a redirect error.

---

## Q4. Can a battery smaller than 1 MW take part via an aggregator in Latvia? What are the minimum bid size, prequalification steps, timelines and costs?

### Takeaway
Yes, but only inside a pooled "reserve providing group" run by a BSP (an aggregator or trader). The BSP signs AST's System Ancillary Service agreement and must bid at least 1 MW in 1 MW steps. AST's rules expressly let a technical unit that cannot meet requirements on its own be included in a reserve-providing unit or group. Prequalification takes roughly 2–4 months for a distribution-connected unit: AST reviews the application within 30 days, the test plan is due within 30 days, results are due 5 working days after testing, the DSO must supply metering data within 30 days, and AST rules within 10 working days. Latvia's aggregator law (Cabinet Regulation No. 157, 2020) was written for demand response and originally required the aggregator to share the customer's balance responsible party. The status of a true independent-aggregator model for storage could not be confirmed.

### Cited Findings

**Minimum bid and aggregation**
- In the BBCM, the minimum bid is 1 MW and the granularity is 1 MW, for FCR and FRR alike — [BBCM rules explanatory document](https://www.ast.lv/sites/default/files/editor/Explanatory_document_for_the_Baltic_proposal_to_the_Baltic_balancing_capacity_market_rules_in_accordance_with_EBGL_Articles_33(1)_and_38(1).pdf).
- AST technical requirements, K-52-206 (in force 03.12.2024 to 03.12.2027) — [AST TDP](https://ast.lv/sites/default/files/editor/SVV-info-faili/TOD_S_P_A4_4_01_25.pdf); [docx version, 29.01.2025](https://www.ast.lv/sites/default/files/editor/SVV-info-faili/Tehniskas_un_datu_apmainas_prasibas29012025.docx):
  - A reserve providing unit ("rezervju piegādātājvienība") or reserve providing group ("rezervju piegādātājgrupa") that meets the requirements becomes a reserve unit (RNV) once AST issues a technical-compliance certificate. It may be used only after it is added to Annex 1 of the agreement (points 73–74).
  - "A technical unit that cannot independently fulfil all technical and data-exchange requirements … cannot be used as an RNV, but may be included in a reserve providing unit or reserve providing group" (point 75).
  - A group may not be combined with another group (point 79).
  - Demand units and generating modules can be added to or removed from a qualified unit without re-prequalification, as long as the maximum offered capacity does not increase (point 77).
  - Groups delivering FCR under central control must be able to fall back to local, decentralised frequency control. Groups with less than 1.5 MW of FCR are exempt from this (points 65–67).
  - For an aggregate, control-metering data is submitted summed for the whole unit (point 36).
- The tests require at least one activation at full planned capacity in each direction. "If full regulating capacity exceeds 1 MW", there must also be an activation at a lower volume, in 1 MW steps — [AST prequalification process description, 30.12.2025](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/12_2025_procesu_apraksti/RNV%20tehniskas%20atbilstibas%20izvertesanas%20procesa%20apraksts_30.12.25.pdf).
- AST says its regulatory and IT changes for storage are "the same as for any other technology, applied at the BSP level, in line with the principle of technological neutrality". By contrast, Lithuania amended its law in 2025 to allow multiple aggregation models and is revising rules for dedicated meters and storage baselines. Estonia enabled aggregator energy reporting through the Estfeed data hub — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- AST's updated agreement and terms allow "different types of reserve providing units and groups", including traders managing generation modules and aggregators using consumption units. Prequalification follows the harmonised Baltic LFC-block principles of 31 Mar 2022 — [AST notice](https://ast.lv/en/node/49614).

**Aggregator law (Latvia)**
- Cabinet Regulation No. 157 "Agregatoru noteikumi" was adopted on 24 Mar 2020. As presented by the Ministry of Economics in October 2020, the aggregator must have a balancing or balancing-service contract with the same balance responsible party as the customer, and demand response is allowed only from sites in the same imbalance area. Planned amendments were meant to transpose the independent-aggregator rules of Directive 2019/944, including a compensation model between the aggregator and the supplier's BRP — [Ministry of Economics presentation, 23 Oct 2020](https://ast.lv/sites/default/files/editor/Agregatori_Karpovica_EM.pdf).
- In the Electricity Market Law as consolidated on 1 May 2024, an "aggregator" is "a business whose activity is providing demand response services". Storage is defined as a device storing energy for later use, and a "producer" includes anyone feeding stored electricity into the system. "Flexibility services" are defined (s.1(2) p.5¹). The term "independent aggregator" does not appear in that text — [Electricity Market Law, consolidated 01.05.2024 (Interreg copy)](https://interregeurope.eu/sites/default/files/good_practices/Electricity%20Market%20Law%20of%20Latvia_amendment_01.05.2024..pdf).

**Becoming a BSP and the prequalification steps (AST)**
- To become a BSP: (1) have power plants or demand facilities prequalified by AST under the Network Code (SPRK decision of 26 Jun 2013, Annex 8, point 2.3); (2) sign the System Ancillary Service (SPP) agreement with AST; (3) follow the Rules for Providing the Balancing Service, which cover bids, activation, schedules, sub-metering, settlement and prequalification. The current agreement template and rules date from 29 Jan 2025. The list of current Latvian BSPs includes Latvenergo and Rīgas Siltums — [AST balancing services page](https://www.ast.lv/en/content/balancing-and-other-ancillary-services). AST updated its BSP terms for MARI on 06.09.2024, for FCR on 02.12.2024, and for PICASSO and BBCM on 28.12.2024 — [Baltic TSOs' EBGL report 2026](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_Report_on_Balancing_in_accordance_to_EBGL_60(1)_2026.pdf).
- Process and timelines, from the AST process description of 30.12.2025 — [link](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/12_2025_procesu_apraksti/RNV%20tehniskas%20atbilstibas%20izvertesanas%20procesa%20apraksts_30.12.25.pdf):
  1. With an SPP agreement in place, the BSP sets up data exchange and asks for a user in AST's BVS test environment, where AST configures the unit. Bids go through a BVS web service for all products (SFTP is an alternative). Activation for mFRR is by web service and for aFRR by real-time link. Control-metering data is sent by real-time link for aFRR and FCR.
  2. The BSP submits the application (Annex 2 form) to ast@ast.lv. AST answers within 30 days. If the unit is on the distribution grid, AST first requests information from the distribution operator (DSO).
  3. Within 30 days of a positive answer, the BSP submits and agrees a test programme.
  4. The test is carried out. The maximum data-recording step is 10 s for mFRR, 1 s for aFRR and 50 ms for FCR. Data and analysis are due within 5 working days.
  5. For a TSO-connected unit, AST gives results within 10 working days. For a DSO-connected unit, the DSO provides commercial metering data within 30 days, and AST then decides within 10 working days.
  6. If the result is negative, the BSP may fix the issue and retest within 30 days; otherwise a new application is needed.
  7. AST issues the technical-compliance certificate. The BSP fills in Annex 1 of the SPP agreement and AST prepares the amendment. Later changes to a unit are assessed within 10 working days (TDP point 81).
- Telemetry, metering and data — [AST TDP K-52-206](https://ast.lv/sites/default/files/editor/SVV-info-faili/TOD_S_P_A4_4_01_25.pdf):
  - Data exchange uses SOAP web services (points 9–10).
  - aFRR and FCR need real-time schedule and measurement data (Annex 3), and the unit must receive and acknowledge AST set-points.
  - Real-time data must be kept at 4-second resolution for at least 7 days, and meter-reading control data at 1-minute resolution for at least 2 months.
  - Control-metering transducers must be at least accuracy class 0.5 and checked every 12 years (6 years for analogue output).
  - Commercial meters must record load profiles at least per trading interval ("currently 60 minutes, in future 15 minutes") and be connected to the system operator's automated metering system (AEUS).
  - A consumption and generation plan must be submitted as XML through the web service.

### Inferences
- A battery below 1 MW cannot bid alone, because 1 MW is the minimum bid. It has to be pooled by a BSP that already holds, or will sign, AST's SPP agreement. The pool can be the BSP's own assets, a trader's portfolio or an aggregator's portfolio. Several small batteries, or one second-life battery combined with other flexible assets, could form a group of 1 MW or more. Groups under 1.5 MW of FCR are relieved of the decentralised-fallback requirement, which suggests AST anticipates small groups.
- Because the 2020 aggregator rules tied the aggregator to the customer's BRP and were framed around demand response, the practical route for a storage owner in 2026 is probably to contract with an existing BSP that also acts as, or contracts with, the site's BRP. The independent route depends on whether the Regulation 157 amendments were adopted, which is unconfirmed.
- Timeline for a DSO-connected battery once the SPP agreement and data links are ready: up to 30 days (application review) + up to 30 days (test plan) + the test + 5 working days + up to 30 days (DSO data) + 10 working days. That is roughly 3–4 months if every deadline is used in full; these are maximum durations, so it could be faster **[own estimate]**. Setting up the BVS and real-time data links comes before this and is not time-bounded in the rules.
- The 1.25:1 power-to-FCR ratio and the 30-minute full-activation rule mean that a battery with 2 MW of inverter power can offer at most 1.6 MW of FCR, and needs enough usable energy held back. For a degraded second-life pack, usable MWh rather than nameplate is what binds.

### Gaps
- The current consolidated text of Cabinet Regulation No. 157 (likumi.lv, ID 313461) could not be accessed (robots-blocked). It is therefore unconfirmed whether an independent-aggregator model or a supplier-compensation mechanism exists in Latvia in 2026, and whether it covers storage as well as demand response.
- No AST prequalification fee, BSP registration fee or collateral requirement was found. It is unclear whether a BSP must itself be a BRP or have a BRP contract in Latvia (the AST "how to become a BRP" page was not fetched).
- No source was found on how many sub-1 MW assets, if any, are currently prequalified in Latvia. The BBCM 2026 table lists only 16 MW of Latvian "Demand" for mFRR.

---

## Q5. What grid connection fees and network tariffs would a 0.5–2 MW storage unit face in Latvia?

### Takeaway
A 0.5–2 MW battery would normally connect to Sadales tīkls (the DSO) at 0.4 kV or 6–20 kV and pay the normal consumer distribution tariff on its permitted load. From 2027 at 6–20 kV that is 1.65–3.10 EUR/kW/month for capacity plus 0.0022–0.0277 EUR/kWh on energy drawn. It also pays the producer charge R-1 (0.1445 EUR/kW/month), but only on export capacity above its permitted load. No storage-specific exemption from network charges on charging energy was found, so stored energy is in effect charged on the way in. Up-front connection costs include a capacity reservation fee of 21.63 EUR/kW for producers above 50 kW (since January 2023). A new security deposit regime applies to technical requirements issued after 30 Nov 2025 and explicitly covers storage operators.

### Cited Findings

**Distribution tariffs (Sadales tīkls), published values effective 1 Jan 2027 unless SPRK revokes them, excluding VAT** — [Sadales tīkls official notice on 2027 tariff values](https://sadalestikls.lv/storage/app/media/uploaded-files/Ofici%C4%81lais%20pazi%C5%86ojums%20par%20tarifa%20v%C4%93rt%C4%ABb%C4%81m%202027.pdf)

| Voltage | Plan | Energy charge (EUR/kWh) | Capacity charge |
|---|---|---|---|
| 6–20 kV | Pamata | 0.00550 (−21% vs current) | 2.28 EUR/kW/month (−16%) |
| 6–20 kV | Speciālais | 0.02768 | 1.65 EUR/kW/month |
| 6–20 kV | Jaudīgais (new) | 0.00224 | 3.10 EUR/kW/month |
| 0.4 kV | Pamata | 0.03865 | 0.82 EUR/A/month (3-phase) |
| 0.4 kV | Speciālais | 0.15848 | 0.33 EUR/A/month (3-phase) |
| 0.4 kV | Jaudīgais (new) | 0.02010 | 1.40 EUR/A/month (3-phase) |
| any | Producer R-1 | – | 0.1445 EUR/kW/month on (permitted generation − permitted load); microgenerators up to 11.1 kW exempt |

- The R-1 rule explicitly applies to connections of "elektrostacijas vai elektroenerģijas uzkrātuves" (power plants or storage). There is no separate storage tariff — [same notice](https://sadalestikls.lv/storage/app/media/uploaded-files/Ofici%C4%81lais%20pazi%C5%86ojums%20par%20tarifa%20v%C4%93rt%C4%ABb%C4%81m%202027.pdf).
- Tariff application rules (in force since 31 Jul 2024) — [Sadales tīkls tariff application procedure 2024](https://sadalestikls.lv/storage/app/media/Tarifs/ST%20sist%C4%93mas%20pakalpojumu%20tarifu%20pielieto%C5%A1anas%20k%C4%81rt%C4%ABba_2024.pdf):
  - At 6–20 kV the capacity charge is billed on permitted load in kW; at 0.4 kV it is billed on the main breaker's amperes.
  - Producers pay the consumer components plus the producer capacity fee. The producer fee is zero if permitted generation does not exceed permitted load.
  - There are no storage-specific provisions and nothing on separate treatment of charging and discharging.
  - Net metering applies only to households.

**Transmission tariffs (AST), relevant if connecting at 110 kV** — approved by SPRK on 27 Nov 2025, valid 1 Jan 2026–31 Dec 2028:
- Energy tariff of 0.00139–0.00251 EUR/kWh and capacity maintenance of 6.759–14.183 EUR/kW/year, depending on connection level. Producers and storage operators pay a capacity charge of 0.81018 EUR/kW/year — [AST transmission tariff page](https://ast.lv/en/content/transmission-tariff); [AST tariff project summary](https://www.ast.lv/sites/default/files/editor/Publiskojama_inf_tarifs_2026_Final.pdf).

**Connection costs and rules**
- Electricity Market Law s.9(2⁴): a producer connecting a new generation unit above 50 kW to the transmission or distribution grid pays a system capacity reservation fee. Under s.9(2¹), the DSO pays 50% of construction costs and the end user 50% "in specified cases". Under s.22(1), a permit is required for generation units of 500 kW or more; below that, the producer applies to the DSO under the connection rules — [Electricity Market Law, consolidated 01.05.2024](https://interregeurope.eu/sites/default/files/good_practices/Electricity%20Market%20Law%20of%20Latvia_amendment_01.05.2024..pdf).
- The capacity reservation fee is 21.63 EUR per kW (SPRK decision No. 1 of 12 Jan 2023, in force 12 Jan 2023). The decision text addresses producers and does not mention storage — [Latvijas Vēstnesis](https://www.vestnesis.lv/ta/id/338778). Amendments effective 1 Apr 2025 let producers who paid it request a refund if they stop the connection work, or a partial refund if they reduce capacity — [LV Portāls, 6 Mar 2025](https://lvportals.lv/dienaskartiba/373581-ieviesis-elastiga-piesleguma-pakalpojumu-2025).
- New security deposit ("drošības nauda") methodology: SPRK decision 1/21 of 9 Oct 2025, in force 10 Nov 2025, applying to technical requirements issued after 30 Nov 2025. It covers producers, storage operators and end users at both transmission and distribution level.
  - The TSO sets a EUR/MW rate from the last five years of 110 kV substation build costs, recalculated every five years.
  - Storage pays on the larger of its export or import capacity, capped at the 100 MW equivalent.
  - Payment is due within 60 days of receiving technical requirements, in cash or as a first-demand guarantee from an EU/EEA bank rated at least Baa1 / BBB+.
  - It is refunded under the connection agreement.

  — [Latvijas Vēstnesis](https://www.vestnesis.lv/ta/id/363699-drosibas-naudas-aprekina-metodika-elektroenergijas-nozare)
- Transmission-connected storage gets one of three grid services: constant, flexible (curtailable up to 876 h/year) or limitable (the TSO may limit it at any time, against a fee). A producer that adds storage above its installed or reserved generation capacity gets the limitable service (Electricity Market Law s.16⁴) — [AST presentation](https://www.ast.lv/sites/default/files/editor/7_KASPARS_Jaunu_elektrostaciju_un_BESS_pieslegumu_tendences.pdf). From 1 Apr 2025, and until 31 Dec 2026, free transmission capacity is allocated only to the flexible service or to other generation at existing connections — [LV Portāls](https://lvportals.lv/dienaskartiba/373581-ieviesis-elastiga-piesleguma-pakalpojumu-2025).
- Sadales tīkls introduced paid capacity reservation from 2023. Of about 584 MW of potential projects, 166 MW dropped out by not paying. The generation queue exceeded 900 MW in early 2023. The DSO has also introduced "flexible cooperation terms" on generation export capacity and supply reliability to allow cheaper connections — [Sadales tīkls Development Plan 2024–2033](https://sadalestikls.lv/storage/app/media/uploaded-files/Att%C4%ABst%C4%ABbas_pl%C4%81ns_2024-2033_ar%20pielikumiem.pdf).

### Inferences
- **[own calculation]** Illustrative annual distribution charges for a 1 MW / 2 MWh battery at 6–20 kV with 1 MW permitted load and 1 MW permitted export (R-1 = 0), on 2027 tariffs:
  - Pamata: €27,360 a year capacity plus 0.0055 EUR/kWh. At about 730 MWh/year charged (one cycle a day) the total is about €31.4k a year.
  - Speciālais: €19,800 a year plus 0.02768 EUR/kWh. It is cheaper than Pamata below about 341 MWh/year charged, which suits a low-throughput battery doing reserves only; at 100 MWh/year the total is about €22.6k.
  - Jaudīgais: €37,200 a year plus 0.00224 EUR/kWh. It beats Pamata only above about 3,000 MWh/year.

  So network charges are roughly €20–37k per MW per year. That is about 7–12% of Clean Horizon's August 2026 Latvian gross revenue estimate (€307k/MW/year), or 14–26% of the October 2026 aFRR-only capacity revenue estimate (about €143k/MW/year).
- **[own calculation]** For about 0.5 MW at 0.4 kV with an 800 A 3-phase breaker (an assumption): Pamata comes to about €7.9k a year capacity plus 0.03865 EUR/kWh; at 365 MWh/year charged that is about €22k a year. The high 0.4 kV energy charges make low-voltage connection unattractive for an arbitrage-heavy battery.
- **[own calculation]** At 21.63 EUR/kW, the capacity reservation fee would be about €10.8k for 0.5 MW, €21.6k for 1 MW and €43.3k for 2 MW, if it applies to storage. The newer deposit regime may replace or add to it (unclear).
- "Double charging": no exemption was found. Under the tariff rules, a storage site is billed like a consumer on all energy drawn and on its permitted load, with no netting for non-household users. The energy it later exports is not credited against this. The producer charge is avoided only if export capacity does not exceed import capacity.

### Gaps
- Current 2026 Sadales tīkls tariff values were not retrieved directly. The 2027 notice gives percentage changes against the current values; for example, current Pamata 6–20 kV is implied at about 0.0070 EUR/kWh and 2.71 EUR/kW/month **[own back-calculation]**. The 2027 values had been published, but SPRK's final non-revocation was not confirmed.
- No Latvian rule or draft exempting storage from network charges or levies on charging energy was found. A 2026 draft amendment to the Electricity Market Law (26-TA-977) addresses cross-border installations and decommissioning of storage, not tariffs — [TAP portal draft](https://tapportals.mk.gov.lv/structuralizer/data/nodes/8d221aef-1fc2-4c13-a1a0-96acf50ec16a/preview.docx).
- The current EUR/MW rate of the new security deposit, the DSO connection-fee methodology for a 0.5–2 MW storage connection (cost of the line, transformer and connection point), and whether the reservation fee and the deposit both apply to storage were not found.
- Whether the s.22 permit (≥500 kW) applies to stand-alone storage was not confirmed. Excise or other levies on storage charging were not researched.

---

## Q6. Does Sadales tīkls buy flexibility today, or plan to?

### Takeaway
No evidence was found that Sadales tīkls buys flexibility today. There is no local flexibility market, tender or flexibility price. It is preparing. The EU-funded "ST FLEX" project with the telecom company Tet is developing a data-driven flexibility service that uses customer demand response to forecast and manage grid overloads. Its 2024–2033 development plan says it will pilot its first flexibility-service products, involving aggregators, "in the medium term", without a date. For now, a battery owner's distribution-level options are limited to cheaper or flexible connection terms, not paid flexibility services.

### Cited Findings
- The 2025 annual report describes the ST FLEX project (No. 2.2.1.3.i.0/1/24/A/CFLA/003) with SIA "Tet" to "develop a data-driven flexibility service for forecasting and managing grid overloads" using end-user demand response, with no dates or budget stated. The report contains no local flexibility market, flexibility tender or plan to buy flexibility from market participants. It also does not mention battery storage connections or "flexible connections" as a product. Other points from the report:
  - The smart-grid management system (DMS) was 65% delivered in 2025, with full implementation in 2026.
  - 447 remotely controlled medium-voltage switches were installed in 2025.
  - Connected generation in the distribution grid totals 1,190 MW, of which about 77% (more than 920 MW) is solar, across about 25,000 generators and microgenerators.

  — [Sadales tīkls 2025 annual report](https://sadalestikls.lv/storage/app/media/uploaded-files/2025.%20gada%20p%C4%81rskats.pdf)
- The Development Plan 2024–2033 says Sadales tīkls is studying a flexibility-services market model and preparing a pilot involving aggregators. It aims to pilot its first flexibility products "vidējā termiņā" (medium term) to defer grid investment. It has tested a battery supplying a customer in island mode, while a battery pilot for voltage regulation "has not yet produced positive results". Innovation spending is to reach at least 1% of turnover by 2034 — [Sadales tīkls Development Plan 2024–2033](https://sadalestikls.lv/storage/app/media/uploaded-files/Att%C4%ABst%C4%ABbas_pl%C4%81ns_2024-2033_ar%20pielikumiem.pdf).
- The Electricity Market Law defines "flexibility services" as short-term changes in consumption or production that a user or producer voluntarily commits to under contract with another market participant (s.1(2) p.5¹) — [Electricity Market Law, consolidated 01.05.2024](https://interregeurope.eu/sites/default/files/good_practices/Electricity%20Market%20Law%20of%20Latvia_amendment_01.05.2024..pdf).
- The 2027 tariff notice introduces a new "Jaudīgais" (high-capacity) plan and drops the Pamata-2/4 and Speciālais-2/4 plans. It contains no flexibility-related or storage-specific tariff element — [Sadales tīkls 2027 tariff notice](https://sadalestikls.lv/storage/app/media/uploaded-files/Ofici%C4%81lais%20pazi%C5%86ojums%20par%20tarifa%20v%C4%93rt%C4%ABb%C4%81m%202027.pdf).

### Inferences
- Paid DSO flexibility is not a revenue stream a Latvian battery can count on in 2026–2027. A pilot could open after ST FLEX ends, and aggregator involvement is planned, but the volumes would likely be small and local. Batteries at congested solar-heavy nodes (77% of distribution-connected generation is solar) would be natural candidates if a scheme appears.
- Because the TSO grid is constrained (only flexible connections until end-2026), a battery co-located with or behind distribution-connected solar may gain more value from connection-capacity savings than from DSO flexibility payments.

### Gaps
- The CEEnergyNews article on the Sadales tīkls–Tet pilot ([link](https://ceenergynews.com/electricity/latvias-grid-operator-and-tet-to-pilot-new-flexible-electricity-service-for-efficiency/)) was blocked by bot verification. Pilot dates, size, payment model and whether batteries can take part were not confirmed.
- No information was found on whether Sadales tīkls offers a flexible or non-firm connection product specifically for storage, or on how many batteries are connected to the distribution grid.
