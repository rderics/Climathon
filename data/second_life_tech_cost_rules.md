# Second-life EV batteries vs new LFP storage for grid balancing: costs, performance, safety, EU rules and project lessons (as of 30 October 2026)

Scope note: figures are dated as published. "My calculation" marks arithmetic I did on sourced numbers. "Company claim" marks unverified vendor statements. All quotations of Regulation (EU) 2023/1542 come from the consolidated text 02023R1542 of 31.07.2025 (incorporating Reg. 2024/1781 and Reg. 2025/1561), which I read in full via the [FAOLEX copy](https://faolex.fao.org/docs/pdf/eur223915.pdf). The official version is the [EUR-Lex consolidated text](https://eur-lex.europa.eu/eli/reg/2023/1542/2025-07-31/eng).

## 1. What do new LFP BESS cost in Europe in 2025–2026, and what do second-life systems cost?

### Takeaway
New LFP storage prices fell steeply in 2025. BNEF's average European turnkey system was US$177/kWh, down 37%. Ember put all-in capex outside China and the US at about US$125/kWh in October 2025. European 2-hour DC blocks traded at US$71–89/kWh FOB in June 2026. Rising lithium prices and the phase-out of China's export rebate are pushing 2026 prices back up a little. Published second-life costs are mostly US or model-based: about US$73–103/kWh modelled (Leaf packs) and under US$200/kWh installed (B2U, 2021). One German C&I product cost €400–600/kWh. That is no longer a clear discount per nameplate kWh. Once lower usable capacity and shorter remaining life are counted, second-life is generally not cheaper per delivered MWh. The exceptions are near-free packs and pack-level reuse without disassembly.

### Cited Findings
**New lithium-ion and LFP: packs and cells**
- BNEF 2025 Battery Price Survey (9 Dec 2025): global average pack price US$108/kWh, down 8% year on year. Stationary storage packs averaged **US$70/kWh**, down 45% from 2024 and the cheapest segment for the first time. LFP packs averaged US$81/kWh across all segments and NMC US$128/kWh. China had the lowest average at US$84/kWh. Pack prices in North America and Europe were 44% and 56% higher, with China implied as the baseline. BNEF expects prices to fall again in 2026 despite upward pressure from raw materials — [BNEF press release](https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour); [ESS News, 9 Dec 2025](https://www.ess-news.com/?p=7552)
  - Conflict: ESS News' 2025 year-in-review says US and European packs were "31% and 48% higher than China's $94/kWh". Those appear to be BNEF's 2024-survey numbers, not 2025 — [ESS News, 19 Dec 2025](https://www.ess-news.com/2025/12/19/energy-storage-in-2025-year-in-review-part-1/)
- Implied European average pack price, all segments, 2025: about US$131/kWh (my calculation: 84 × 1.56). No Europe-specific stationary pack price was published — [BNEF](https://about.bnef.com/insights/clean-energy/lithium-ion-battery-pack-prices-fall-to-108-per-kilowatt-hour)
- Cells in mid-2026 (InfoLink, 18 Jun 2026): Chinese 314 Ah LFP storage cells averaged about CNY 0.365/Wh, with most new orders above CNY 0.36/Wh. That is roughly US$50–51/kWh (my conversion at about 7.1–7.2 CNY/USD). Cell prices are in a "stalemate at high levels" — [ESS News/InfoLink, 18 Jun 2026](https://www.ess-news.com/2026/06/18/chinese-export-tax-rebate-cuts-to-raise-european-bess-costs/)
- Lithium carbonate spot price: above CNY 190,000/t (about US$28,000/t) in early May 2026, up 20% month on month. Cost pass-through to cells weakened once prices rose above CNY 150,000/t — [ESS News/InfoLink](https://www.ess-news.com/2026/06/18/chinese-export-tax-rebate-cuts-to-raise-european-bess-costs/)

**New BESS: DC block and turnkey system**
- BNEF Energy Storage System Cost Survey 2025 (10 Dec 2025): global average turnkey price US$117/kWh, down 31% from an inflation-adjusted US$169/kWh in 2024. 2-hour systems averaged US$124/kWh and 4-hour US$110/kWh. Regional averages: China US$73/kWh; **Europe US$177/kWh (−37% year on year)**; US US$219/kWh. DC-side systems with cells of 300 Ah or more were 50% cheaper than those with smaller cells. DC blocks of 4 MWh or more were 39% cheaper than 2–4 MWh blocks. 2035 forecast for 4-hour turnkey: China US$41, Europe US$101, US US$108/kWh — [Energy-Storage.news, 16 Dec 2025](https://www.energy-storage.news/?p=92133)
- BNEF defines "turnkey" as DC block plus PCS plus EMS, excluding EPC and grid connection. In the 2024 survey (prices for 2024): global US$165/kWh, Europe US$275/kWh, US US$236/kWh, China US$101/kWh (4-hour China US$85/kWh) — [Energy-Storage.news](https://www.energy-storage.news/behind-the-numbers-bnef-finds-40-year-on-year-drop-in-bess-costs/)
- Ember, "How cheap is battery storage?" (11 Dec 2025): all-in capex for projects of 4 hours or longer outside China and the US was about **US$125/kWh** in October 2025. That splits into about US$75/kWh of core equipment shipped from China (enclosure, PCS, EMS) and about US$50/kWh of installation and grid connection. LCOS is US$65/MWh. Grid connection fees range from US$30 to US$100/kWh. Core equipment can cost US$100/kWh or more extra in markets with tariffs, stricter standards or local-content rules. Shorter-duration systems cost about 10–15% more — [Energy-Storage.news](https://www.energy-storage.news/?p=92133)
  - Methodology difference: BNEF's European turnkey average (US$177/kWh, excluding EPC and grid) is higher than Ember's all-in figure (US$125/kWh). BNEF averages across durations and contract dates. Ember uses October 2025 Chinese equipment prices for 4-hour-plus projects.
- InfoLink (18 Jun 2026): 2-hour DC-side BESS in Europe at **US$71–89/kWh FOB**, slightly below the US. Core Chinese equipment (DC containers, PCS, EMS) at about US$75/kWh FOB. Chinese domestic turnkey prices were about CNY 0.58/Wh (2-hour) and CNY 0.51/Wh (4-hour). China's export tax rebate on batteries has been cut from 13% to 6% (as of April 2026) and is due to be eliminated by January 2027. The pass-through to European prices "has not yet been fully" seen. The European Commission's May 2026 update extended funding restrictions on inverters from "high-risk countries" to storage PCS. Europe installed 25.3 GWh of storage in 2025 (utility-scale 16.1 GWh, up from 8.2 GWh in 2024), with 35.1 GWh expected in 2026 — [ESS News/InfoLink](https://www.ess-news.com/2026/06/18/chinese-export-tax-rebate-cuts-to-raise-european-bess-costs/)
- BNEF LCOE 2026 (18 Feb 2026): global benchmark LCOE for a 4-hour battery of US$78/MWh in 2025, down 27% — [BNEF](https://about.bnef.com/insights/clean-energy/battery-storage-costs-hit-record-lows-as-costs-of-other-clean-power-technologies-increased-bloombergnef/)
- Older European data point: ECO STOR estimated about €250 million for its 600 MWh Förderstedt project (Aug 2023). That is about €417/kWh all-in (my calculation; a 2023 estimate for new batteries, now outdated) — [S&P Global, 14 Aug 2023](https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/081423-interview-eco-stor-aims-for-2-gwh-german-battery-project-pipeline)
- Revenue benchmark: Italy's first MACSE storage auction (2025) awarded 10 GWh at €37,000 per MWh per year — [ESS News, 19 Dec 2025](https://www.ess-news.com/2025/12/19/energy-storage-in-2025-year-in-review-part-1/)

**Second-life: used pack purchase, testing, repurposing and integration**
- B2U (Canary Media, 18 Oct 2021): all-in installed cost below US$200/kWh. BNEF's James Frith put this at about two-thirds the cost of a 2-hour new-battery project in 2020. He said a second-life battery would need about **2,000–4,000 cycles** to compete with new cells over a project's life — [Canary Media](https://canarymedia.com/articles/energy-storage/used-ev-batteries-are-storing-solar-power-at-grid-scale-and-making-money-at-it)
- Cost of conventional module-level repurposing, from B2U's deck to the Maryland State Fire Marshal (meeting 8 May 2025; slides partly older): about US$72.6/kWh in total. The split is disassembly US$6.8, module testing and sorting US$5.1, new BMS, sensors and wiring US$36.1, and reassembly and testing US$24.8; the slide layout makes the label-to-value mapping slightly ambiguous. B2U's whole-pack EPS approach avoids these costs (company claim). The deck also cites a KPMG analysis: net reuse value US$167/kWh (revenue US$268, cost NPV −US$101). Recycling net values per kWh were negative for every chemistry: NMC −6.4, NCA −9.5, **LFP −28.7**, LMO −30.5 — [B2U/Maryland SFM deck](https://mdsp.maryland.gov/firemarshal/Documents/Mtg%2005.08.2025%20Inherent%20Safety%20of%20B2Us%20EPS%20Solution%20-%20Hall.pdf)
- Gao et al., *eTransportation* 20:100313 (Jan 2024), first-generation Nissan Leaf: a retired pack costs about US$1,000, or **about US$63/kWh**. Estimated system cost is **US$103.1/kWh with disassembly and reassembly, versus US$73.1/kWh with whole-pack reuse** (about 30% lower). These are model estimates for US conditions — [Gao et al. 2024](https://chrismi.sdsu.edu/publications/214.pdf)
- Used pack prices (Energy-Storage.news, about April 2024): a North American source said recyclers typically pay about US$8/kWh for used batteries and second-life firms about US$30/kWh. Used-pack prices rose during the 2022 spike and would need to fall to stay competitive. Stabl's CEO said its second-life C&I systems cost **€400–600/kWh**, several times first-life BESS prices, though the article notes the products differ — [Energy-Storage.news](https://www.energy-storage.news/battery-price-falls-threaten-second-life-model-as-fenecon-opens-assembly-plant-in-germany/)
- Literature ranges (Dong et al., *iScience* 26:107195, Jun 2023):
  - Neubauer et al.: repurposing (collection, testing, packaging, labour, equipment) US$25–49/kWh; retired-battery purchase prices US$19–131/kWh; repurposed selling prices US$44–180/kWh.
  - Gotion (China): retired batteries US$23–31/kWh, rising to US$62–70/kWh after testing, screening and recombination.
  - McKinsey forecast second-life prices at 30–70% of new in 2025.
  - Second-life usable depth of discharge is 50–60%, versus about 80% for new, so "cost per usable kWh [is] considerably higher".
  - Steckel et al.: LCOS of US$234–278/MWh for second-life versus US$211/MWh for new, assuming US$117/kWh second-life versus US$151/kWh new.
  - — [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184)
- Gu et al. review (arXiv 2308.06786, Aug 2023): published studies assume second-life prices of US$50–128/kWh, or €50–350/kWh in some EU studies. Steckel et al. find second-life upfront cost is only 64.3–78.9% of fresh systems. The authors note that transport, storage and replacement costs are often ignored — [Gu et al. 2023](https://arxiv.org/pdf/2308.06786)
- Redwood Energy (27 Jun 2025): CCO Cal Lankton said reused packs can be deployed at "roughly half the cost of new systems" with comparable stationary performance (company claim) — [ESS News](https://www.ess-news.com/2025/06/27/redwood-crusoe-deploy-second-life-batteries-at-data-center-for-63-mwh-storage/)
- Cactos (Finland, Jan 2024) said the "cost-competitiveness of LFP battery cells" made first-life batteries more attractive than second-life — [Energy-Storage.news tag page](https://www.energy-storage.news/tag/battery-prices); [Energy-Storage.news](https://www.energy-storage.news/battery-price-falls-threaten-second-life-model-as-fenecon-opens-assembly-plant-in-germany/)
- Battery Burn Book (27 May 2026): second-life packs are "approaching cost parity" with new LFP in some stationary markets. The cost advantage has narrowed sharply as new LFP cell prices fell. No figures given — [Battery Burn Book](https://batteryburnbook.beehiiv.com/p/second-life-batteries)

### Inferences
- Rough battery-side cost stack for second-life, my calculation from the sourced ranges. Used packs cost US$8–63/kWh. Module-level repurposing adds US$25–73/kWh, giving about US$33–136/kWh. Whole-pack reuse adds close to nothing, giving about US$8–63/kWh plus cabinets and controls (Gao et al. model about US$73/kWh in total). All figures are per kWh of *remaining nameplate* capacity, before PCS, EMS and installation. New LFP DC blocks in Europe cost US$71–89/kWh FOB (June 2026) for fresh capacity with full life ahead. The second-life figure buys 60–80% SOH packs with 5–10 years left and lower usable DoD. Per delivered MWh, second-life is therefore at best at parity and usually more expensive at utility scale in Europe. The exception is pack-level reuse with nearly free packs.
- Balance-of-system costs (PCS, EMS, enclosure, installation and grid connection, about US$50/kWh plus US$30–100/kWh grid fees per Ember) do not shrink for second-life and may grow per kWh because of the larger footprint (see Q2). That erodes any battery-side saving.
- The 2026 rise in lithium prices, the end of China's export rebate and EU restrictions on PCS from high-risk countries may slightly improve second-life's relative position. This runs against BNEF's December 2025 expectation of further declines.
- Frith's 2021 threshold of 2,000–4,000 cycles was set when new systems cost about 1.5× more than second-life. With European turnkey prices down about 35–40% in 2025 alone, the bar for second-life is now higher.

### Gaps
- No published, audited **EUR/kWh turnkey price for a European utility-scale second-life system** in 2025–2026 was found. The only European figure is Stabl's €400–600/kWh for C&I, from about 2023–2024. Connected Energy, Libattion, Allye and others do not publish prices.
- No Europe-specific BNEF stationary pack or cell price was found. The European pack premium is for all segments.
- Commercial terms of OEM supply contracts (used pack price per kWh in Europe in 2025–2026) were not found.

## 2. How do second-life packs perform under FCR/aFRR duty?

### Takeaway
Retired packs typically start second life at about 70–80% SOH, but real Nissan Leaf Gen1 packs measured 60–67%. Lab and field evidence shows slow, roughly linear second-life fade: about 1–3% per year in reviews, and about 4% per 1,000 cycles at 0.2C in Leaf cells, with the knee after more than 2,000 equivalent full cycles in other Leaf modules. Europe's longest-running second-life FCR fleet (Daimler/TMH Lünen and Elverlingsen, 29 MW/31 MWh) passed FCR re-prequalification in 2024 and was cleared for five more years. No quantitative FCR or aFRR degradation dataset for second-life packs has been published. The practical problems are pack heterogeneity, which forces pack-level switching or control architectures, and OEM cooperation, which is a de facto precondition for BMS access despite Article 14. Power capability is also limited by rising resistance. Bankability is weak: second-life is about 0.2% of European grid-scale projects. LFP is economically the better second-life chemistry but is harder to grade.

### Cited Findings
**State of health at retirement**
- EV packs typically retire at about 70–80% of initial capacity after about 8–10 years — [Gu et al. 2023](https://arxiv.org/pdf/2308.06786); [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184); [The Mobility House, 13 Jun 2024](https://www.mobilityhouse.com/int_en/our-company/newsroom/article/sustainable-power-mercedes-benz-group-getec-energie-and-the-mobility-house)
- Connected Energy (Jan 2026): an SOH of about 70–80% is acceptable for storage use, and batteries must be tested before reuse — [electrive.net, 20 Jan 2026](https://www.electrive.net/2026/01/20/connected-energy-will-grosse-testanlage-fuer-gebrauchte-e-auto-batterien-bauen/)
- Measured counter-example: about 100 retired first-generation Leaf packs read mostly **60–67% SOH** on the Leaf BMS, with only one above 70%. Lab packs measured 68.2% and 64.5% — [Gao et al. 2024](https://chrismi.sdsu.edu/publications/214.pdf)
- Audi/RWE Herdecke packs from e-tron development vehicles had more than 80% residual capacity (Jan 2022) — [Audi media release](https://www.audi.com/en/media-releases/second-life-for-ev-batteries-audi-and-rwe-build-new-type-of-energy-storage-system-in-herdecke-14465)
- ECO STOR retires batteries for reuse when capacity falls below 70% and estimates 10–15 years of remaining life (company claim) — [Business Norway, updated Sep 2024](https://businessnorway.com/solutions/eco-stor-repurposes-used-ev-batteries-for-energy-storage)
- Redwood: many EV batteries retain more than 50% of original capacity (Jun 2025) — [ESS News](https://www.ess-news.com/2025/06/27/redwood-crusoe-deploy-second-life-batteries-at-data-center-for-63-mwh-storage/)

**Degradation in second life**
- Reviews: second-life degradation of 1–3% per year (citing Steckel et al.). Studies assume a second-life end-of-life SOH of about 50–60%, which the authors call possibly inaccurate. Severe safety issues may arise after the knee point — [Gu et al. 2023](https://arxiv.org/pdf/2308.06786)
- Gao et al. 2024 tested first-generation Leaf cells (LiMn2O4/LiNiO2 blend, not LFP) under peak-shifting at about 0.2C and 22–25 °C:
  - Second-life fade was about 4% per 1,000 cycles; the paper also expresses this as 7.5–7.8% per 1,000 equivalent cycles. Cited first-life fade was about 18.9% per 1,000 cycles.
  - Cells fell to about 34–38% SOH after 6,480–7,380 cycles, with **no ageing knee observed**.
  - Impedance rose sharply after about 4,200 cycles.
  - The authors suggest end of life near 50% capacity, about 12 years at daily cycling.
  - Caveats: only two cells were tested, below 1C.
  - — [Gao et al. 2024](https://chrismi.sdsu.edu/publications/214.pdf)
- Braco et al., *J. Energy Storage* 32:101695 (2020), Leaf modules under accelerated cycling: at least **2,033 equivalent full cycles before the knee**. The authors conclude that "capacity and internal resistance characterisation alone is not enough to predict second-life durability" — [Braco et al. 2020](https://academica-e.unavarra.es/handle/2454/39372)
- Field evidence under FCR: the Daimler/Mercedes-Benz Energy, TMH and GETEC systems at Lünen (commissioned 2016) and Elverlingsen (2018) total 29 MW/31 MWh from more than 2,000 modules. In June 2024 TSOs **re-prequalified them for primary control reserve (FCR)**, which requires "sufficient storage capacity and stable, rapid power adjustment", and approved five more years. TMH reports "very stable" capacity after five years of stationary use and attributes low ageing to its operating algorithms. **No SOH figures were published** — [electrive, 13 Jun 2024](https://electrive.com/2024/06/13/encore-for-storage-units-from-electric-car-batteries-in-lunen-and-elverlingsen); [ESS News, 19 Jun 2024](https://www.ess-news.com/2024/06/19/the-mobility-house-moves-forward-with-second-life-battery-systems-and-launches-vehicle-to-grid-business/); [TMH newsroom](https://www.mobilityhouse.com/int_en/our-company/newsroom/article/sustainable-power-mercedes-benz-group-getec-energie-and-the-mobility-house)
- Expected second-life service of 5–10 years at 70–80% starting SOH (Venkatapathy 2015; Mathews 2020; Haram 2021, as cited in a 2024 dissertation) — [Teixeira 2024 (UFMG)](https://repositorio.ufmg.br/bitstream/1843/76624/1/Modelling%20lithium-ion%20battery%20degradation%20for%20second%20life%20stationary%20applications.pdf)

**Module-to-module variability and integration**
- Leaf Gen1 packs showed cell-to-cell voltage spread of 30–40 mV; only 3 of 100 packs exceeded 100 mV. R0 varied about 21% across cells. Rebalancing recovered only about 1.3% SOH, so the authors **recommend whole-pack reuse over module regrouping** — [Gao et al. 2024](https://chrismi.sdsu.edu/publications/214.pdf)
- Retired cells differ in impedance, capacity and self-discharge. "Traditional capacitor and resistive balancing may not handle imbalances of this size" — [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184)
- B2U EPS: cabinet controllers connect and disconnect series and parallel strings so weaker packs don't limit stronger ones. Any pack that deviates from spec is disconnected automatically. Packs run at low current with passive or minimal cooling, inside software limits tighter than the OEM's — [PowerSystemsDesign, 9 Feb 2023](https://powersystemsdesign.com/articles/25mwh-of-second-life-ev-battery-capacity-is-operational-at-hybrid-solar-storage-facility-in-lancaster-ca/8/19741); [B2U/Maryland SFM deck](https://mdsp.maryland.gov/firemarshal/Documents/Mtg%2005.08.2025%20Inherent%20Safety%20of%20B2Us%20EPS%20Solution%20-%20Hall.pdf)
- Connected Energy's controls manage about 1,000 batteries of differing SOH and origin (its "secret sauce"), and it is adding AI for anomaly detection (c. 2022) — [Energy-Storage.news](https://www.energy-storage.news/connected-energy-ceo-on-getting-second-life-business-model-ready-for-ev-industry-boom/)
- Redwood, via Benchmark (5 Sep 2025): second-life systems need "more intensive management", "regular battery replacements" and "a larger physical footprint". EV cells and systems "differ widely from BESS equipment". "No large-scale storage developers are currently pursuing the technology" — [Benchmark Mineral Intelligence](https://source.benchmarkminerals.com/article/how-is-the-second-life-battery-market-playing-out)

**BMS integration and OEM data lock-in**
- Connected Energy talks to each pack's existing BMS without replacing it and uses that BMS for diagnostics (c. 2017–2018). It uses batteries only "if the OEM collaborates" (c. 2022) — [Energy-Storage.news (Engie/Macquarie)](https://www.energy-storage.news/news/engie-macquarie-invest-in-connected-energys-2nd-life-ev-pack-storage); [Energy-Storage.news (CEO interview)](https://www.energy-storage.news/connected-energy-ceo-on-getting-second-life-business-model-ready-for-ev-industry-boom/)
- B2U runs packs "on their existing battery management systems", which the CEO says "virtually eliminat[es] repurposing costs" — [PowerSystemsDesign](https://powersystemsdesign.com/articles/25mwh-of-second-life-ev-battery-capacity-is-operational-at-hybrid-solar-storage-facility-in-lancaster-ca/8/19741)
- Historical first-life operating data is often unavailable after disassembly, which limits degradation modelling — [Gu et al. 2023](https://arxiv.org/pdf/2308.06786). Real first-life BMS data is "noisy, inconsistently formatted and often incomplete" (May 2026) — [Battery Burn Book](https://batteryburnbook.beehiiv.com/p/second-life-batteries)
- EU Article 14 (from 18 Aug 2024): BMS data for SOH and expected lifetime must be held in the BMS. Read-only access must be available "at any time" to the legal purchaser, independent operators and waste operators, "respecting the intellectual property rights of the battery manufacturer". BMS must also have a software-reset function for repurposers. For **EV batteries, Annex VII requires only "state of certified energy (SOCE)"**. Stationary BESS must hold remaining capacity, power capability, round-trip efficiency (both "where possible"), self-discharge evolution and ohmic resistance — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf)

**Power versus energy limits**
- FCR-oriented second-life systems have been built at about 1C or higher:
  - Lünen and Elverlingsen: 29 MW/31 MWh — [electrive 2024](https://electrive.com/2024/06/13/encore-for-storage-units-from-electric-car-batteries-in-lunen-and-elverlingsen)
  - BMW/Bosch/Vattenfall Hamburg: 2 MW/2.8 MWh — [ChargedEVs, 4 Oct 2016](https://chargedevs.com/newswire/testing-second-life-ev-batteries-for-grid-stabilization/)
  - Connected Energy at Umicore, Belgium: 1.2 MW/720 kWh — [BEST Magazine, 6 Feb 2020](https://www.bestmag.co.uk/uk-firm-deploys-grid-scale-second-life-lithium-ion-energy-storage-system-belgium/)
  - Renault Advanced Battery Storage plan: 70 MW/60 MWh — [electrive, 26 Sep 2018](https://electrive.com/2018/09/26/renault-to-install-europes-largest-2nd-life-battery-storage)
- Renault/TMH Douai (4.7 MWh) was prequalified for 4 MW of primary control reserve (Jul 2021) — [electrive.net](https://www.electrive.net/2021/07/07/tmh-bringt-ev-batterien-an-den-franzoesischen-kapazitaetsmarkt/)
- B2U's energy-arbitrage plants, by contrast, are 4-hour: SEPV Sierra 8 MW/32 MWh and Cuyama 3 MW/12 MWh — [B2U about page](https://b2uco.com/about)
- Audi/RWE: future larger EV-battery plants would connect two modules in series to raise operating voltage and cut costs, implying native EV-pack voltages are suboptimal for grid inverters — [Audi media release](https://www.audi.com/en/media-releases/second-life-for-ev-batteries-audi-and-rwe-build-new-type-of-energy-storage-system-in-herdecke-14465)

**Warranties and bankability**
- Connected Energy's model "depends on supplier relationships that secure battery flow and performance guarantees across a 30-year system life". Its goal is a "bankable business model" (c. 2022) — [Energy-Storage.news](https://www.energy-storage.news/connected-energy-ceo-on-getting-second-life-business-model-ready-for-ev-industry-boom/)
- B2U's track record "may not yet satisfy investment committees considering projects hundreds of megawatts in size" (Oct 2021) — [Canary Media](https://canarymedia.com/articles/energy-storage/used-ev-batteries-are-storing-solar-power-at-grid-scale-and-making-money-at-it). By December 2025 B2U had closed a **US$45m structured finance fund** to own seven of its grid projects — [B2U about page](https://b2uco.com/about)
- Market share: second-life is **below 0.1% of grid-scale projects in North America and 0.2% in Europe** (Rho Motion BESS database, Sep 2025) — [Benchmark](https://source.benchmarkminerals.com/article/how-is-the-second-life-battery-market-playing-out)
- Stabl's CEO said (Aug 2023) that the sector would "struggle" with performance — [Energy-Storage.news](https://www.energy-storage.news/battery-price-falls-threaten-second-life-model-as-fenecon-opens-assembly-plant-in-germany/)

**LFP versus NMC for second life**
- University of Mannheim and Stanford (23 Jul 2026): **LFP is "almost always more valuable when repurposed"**, while NCX packs often create more value through immediate recycling because of their nickel and cobalt (SSRN 5868582) — [Uni Mannheim](https://www.bwl.uni-mannheim.de/en/blog/the-hidden-economics-of-ev-battery-circularity/)
- LFP is "often a stronger second-life candidate" for safety and cycle life, and NMC has higher recycling value (May 2026) — [Battery Burn Book](https://batteryburnbook.beehiiv.com/p/second-life-batteries). Recycling LFP is a larger net cost (−US$28.7/kWh versus −US$6.4/kWh for NMC, KPMG via B2U), which favours reuse — [B2U deck](https://mdsp.maryland.gov/firemarshal/Documents/Mtg%2005.08.2025%20Inherent%20Safety%20of%20B2Us%20EPS%20Solution%20-%20Hall.pdf)
- Against LFP: its OCV–SOC curve is flat from 10% to 95% SOC, which acts as an "error amplifier" for state estimation. Capacity can only be updated reliably in the 0–10% SOC region, which makes SOH grading of LFP harder — [Yi et al., arXiv 2401.08136](https://arxiv.org/html/2401.08136v2). Gao et al. note that LFP packs in other studies showed balance and inhomogeneity problems — [Gao et al. 2024](https://chrismi.sdsu.edu/publications/214.pdf)
- Conflicting data point (low quality): a 2024 dissertation table lists typical cycle life of LFP at 1,000–2,000 and NMC at 1,000–4,000. This contradicts the other sources and is not reliable — [Teixeira 2024](https://repositorio.ufmg.br/bitstream/1843/76624/1/Modelling%20lithium-ion%20battery%20degradation%20for%20second%20life%20stationary%20applications.pdf)
- Life-cycle accounting: Quan et al. found higher second-life-stage impacts for LFP than NMC (441 versus 181 kg CO2e), driven by longer lifetime and greater energy losses (methodology-dependent) — [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184)

### Inferences
- FCR's high power-to-energy ratio means capacity fade matters less than **resistance growth and power-capability fade**. Gao et al.'s sharp impedance rise after about 4,200 cycles, and the fact that Annex VII asks EV BMSs only for SOCE, suggest repurposers cannot read FCR-relevant power data from the BMS. They must measure it themselves.
- The only European long-term FCR evidence (Lünen and Elverlingsen) is positive but qualitative and vendor-reported. It is not enough for lenders without published SOH, availability or revenue data.
- Packs retiring in Europe in 2025–2030 come mostly from early EV models. All the European pilots above used NMC, LMO-blend or smart/i3/e-tron-era packs. So the "better" second-life chemistry, LFP, will make up a minority of supply until LFP EVs sold in Europe from the 2020s retire. This is unsourced and needs verification.
- Article 14 data rights likely apply only to batteries built to the post-August 2024 rules, so much of today's retirement stream predates the requirement. This is a legal inference, not confirmed.

### Gaps
- No peer-reviewed or field dataset quantifying second-life degradation under **FCR or aFRR duty specifically** (shallow cycling around mid-SOC, high C-rate bursts) was found.
- No published availability, SOH or warranty terms (years or throughput) for any second-life grid-services asset in Europe were found.
- European FCR and aFRR prices and saturation in 2025–2026 could not be retrieved; the search budget was exhausted. US context only: ERCOT battery ancillary revenues fell almost 90% from 2023 — [ESS News, 19 Dec 2025](https://www.ess-news.com/2025/12/19/energy-storage-in-2025-year-in-review-part-1/)

## 3. Which safety standards apply, and what fire-safety and insurance issues are reported?

### Takeaway
A dedicated but young standards set now exists for repurposing:
- UL 1974, second edition, November 2023
- IEC 63330-1:2024 (repurposing requirements)
- IEC 63338:2024 (reuse and repurposing guidance)
- IEC 62933-5-3:2023 (unplanned modification of grid-integrated electrochemical storage)

These sit on top of general BESS and Li-ion safety standards: UL 9540 with UL 9540A fire testing, and IEC 62619. In the EU the binding rule is Article 12 and Annex V of Reg. 2023/1542. Its technical documentation must be reviewed whenever a battery is repurposed, and its safety tests include thermal propagation, a fire test and gas emission. Reviewers still describe the repurposing standards as thin on detail. China moved in 2021 to ban second-life batteries in large storage and in 2026 repealed MIIT's second-life clauses. I found no documented second-life BESS fire in Europe. Published insurer criteria focus on chemistry, spacing and monitoring, not on second-life as such.

### Cited Findings
- **UL 1974** (Standard for Evaluation for Repurposing or Remanufacturing Batteries), second edition published 10 Nov 2023:
  - Covers "the sorting and grading process involved in repurposing batteries" from EVs to uses such as storage.
  - Adds requirements for routine maintenance tests and diagnosis.
  - Excludes components used beyond the OEM's calendar expiration date.
  - Covers remanufactured, reconditioned and rebuilt batteries.
  - — [ULSE](https://ulse.org/ul-standards-engagement/electric-vehicle-technology/updated-standard-contributes-ev-battery); [Intertek fact sheet 2025](https://w3inte.intertek.nl/resources/fact-sheets/2025/batteries-ul-1974-and-reuse-testing/)
- **IEC 63330-1:2024** (Repurposing of secondary batteries, Part 1: General requirements), valid from 28 Jun 2024. It "specifies the procedure to evaluate the performance and safety of used PRODUCT for repurposing" and targets Li-ion "with data traceability". EN IEC 62619:2022 (safety of secondary lithium cells and batteries in industrial applications) is listed as related — [EVS](https://www.evs.ee/en/iec-63330-1-2024)
- **IEC 63338:2024** (General guidance on reuse and repurposing of secondary cells and batteries), edition 1, 6 Aug 2024. It covers Li-ion and NiMH after removal from first use, and **does not permit reuse or repurposing of single cells or cell assemblies unless battery lifetime traceability data is recorded** — [technickenormy.cz](https://www.technickenormy.cz/en/iec-63338-2024-general-guidance-on-reuse-and-repurposing-of-secondary-cells-and-batteries)
- **IEC 62933-5-3:2023** (EES systems, Part 5-3: Safety requirements for grid-integrated EES systems, performing unplanned modification of electrochemical based systems), published October 2023 — [BSI](https://knowledge.bsigroup.com/products/electrical-energy-storage-ees-systems-part-5-3-safety-requirements-for-grid-integrated-ees-systems-performing-unplanned-modification-of-electrochemical-based-system); [DIN Media](https://dinmedia.de/en/standard/iec-62933-5-3/374634485)
- Review critique: "Existing standards (UL 1974, IEC 62933-5-3) lack specific details", and more robust testing standards are needed (Jun 2023) — [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184). Connected Energy's CEO said (c. 2022) the industry needs second-life-specific standards and regulation, and that "absolute safety" is a major focus — [Energy-Storage.news](https://www.energy-storage.news/connected-energy-ceo-on-getting-second-life-business-model-ready-for-ev-industry-boom/)
- **UL 9540 and 9540A in practice**:
  - B2U's SEPV Sierra is UL 9540-certified, "the largest operational UL 9540-certified ESS using second-life EV batteries" (Feb 2023, company claim) — [PowerSystemsDesign](https://powersystemsdesign.com/articles/25mwh-of-second-life-ev-battery-capacity-is-operational-at-hybrid-solar-storage-facility-in-lancaster-ca/8/19741)
  - B2U's fire-marshal deck: UL 9540 including UL 9540A fire testing, NFPA 855 applied, and **zero safety incidents since 2020**.
  - The deck's safety arguments: whole packs keep their road-rated enclosure and OEM BMS, which avoids the risks of disassembly; each pack is isolated; software limits are tighter than spec; smoke and gas detection, deflagration panels, and fail-safe shutdown on communication loss.
  - — [B2U/Maryland SFM deck](https://mdsp.maryland.gov/firemarshal/Documents/Mtg%2005.08.2025%20Inherent%20Safety%20of%20B2Us%20EPS%20Solution%20-%20Hall.pdf)
- betteries' 48 V/2.3 kWh betterPack, built from EV modules, completed "CE, UN and IEC" certification after an 18-month programme (Jun 2022). It is a mobile and small-stationary product, not grid-scale — [electrive.net](https://www.electrive.net/2022/06/28/betteries-schliesst-die-zertifizierung-seiner-2nd-life-batterie-ab/)
- **EU Article 12 and Annex V**:
  - Stationary BESS "shall be safe during their normal operation and use". Technical documentation (by 18 Aug 2024) must show successful testing against Annex V using "state-of-the-art testing methodologies", plus assessment and mitigation of other hazards and instructions for fire or explosion.
  - Annex V parameters: thermal shock and cycling; external short circuit; overcharge; over-discharge; over-temperature; **thermal propagation**; mechanical damage; internal short circuit; thermal abuse; **fire test**; **emission of gases**.
  - "The technical documentation shall be reviewed if a battery is prepared for re-use, prepared for repurposing, remanufactured or repurposed."
  - — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf)
- Ageing and safety science (reviews):
  - Second-life batteries are "more unreliable and unsafe than new batteries". Highly degraded cells are more vulnerable to thermal runaway, short circuit and overcharge. Lithium plating can occur in cold fast charging — [Gu et al. 2023](https://arxiv.org/pdf/2308.06786)
  - Counter-evidence: thermal-runaway onset temperature *rose* from about 180 °C to 195 °C as capacity fell from 92.5% to 68% (Zhang et al.). No thermal runaway occurred when 80% SOH cells were overcharged below 0.5C (Feng et al.) — [Dong et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184)
- **China**:
  - NEA draft rules of 22 Jun 2021 banned "in principle" new large-scale storage using repurposed Li-ion batteries, until consistency management and performance testing systems mature. The draft followed the 16 Apr 2021 Beijing (Fengtai) storage-station explosion that killed two firefighters. Small systems, telecom base stations and low-speed EVs were still allowed — [TechNode, 24 Jun 2021](https://technode.com/2021/06/24/china-to-ban-large-energy-storage-plants-from-using-retired-ev-batteries)
  - BEST Magazine notes the reports do **not** say whether the Beijing site used second-life batteries — [BEST Magazine](https://www.bestmag.co.uk/china-verge-banning-large-scale-esss-using-second-life-lithium-ion-batteries/). Benchmark (Sep 2025) says China "effectively banned second-life projects" after 2021 fires "linked to second-life installations" — [Benchmark](https://source.benchmarkminerals.com/article/how-is-the-second-life-battery-market-playing-out). The link is asserted but not documented in the sources I found.
  - MIIT (article dated 31 Jul 2026) repealed the second-life ("cascade utilisation") clauses of its NEV used-battery industry standards, stopped publishing second-life enterprise lists and delisted those firms. Products made from used batteries must meet their application field's quality standards — [SMM](https://news.metal.com/en/newscontent/104036974-miit-repeals-and-revises-nev-used-battery-second-life-policy-standards)
- **Insurance**: Gallagher (26 Mar 2026) says insurers weigh location, design, chemistry, contractor experience and decommissioning plans. LFP is seen as "more stable and less prone to thermal runaway", outdoor sites and wider container spacing are favoured, and AI monitoring improves risk assessment. Second-life is not discussed — [Insurance Business](https://www.insurancebusinessmag.com/au/news/breaking-news/battery-storage-boom-pushes-insurers-to-adjust-risk-models-569817.aspx)
- A large facility of used batteries, "each with its own degradation history", is a new safety-management challenge (Oct 2021) — [Canary Media](https://canarymedia.com/articles/energy-storage/used-ev-batteries-are-storing-solar-power-at-grid-scale-and-making-money-at-it). Siemens markets second-life fire-safety solutions citing "new fire safety challenges", without specifics — [Siemens webinar page](https://resources.sw.siemens.com/fi-FI/critical-fire-safety-solutions-for-second-life-li-ion-batteries/)

### Inferences
- A European repurposer must produce Annex V evidence (including thermal propagation, fire test and gas emission) for its own system design. Every distinct pack type or OEM in a heterogeneous fleet may need its own test evidence. This multiplies certification cost compared with a single-SKU LFP container, which favours single-OEM, whole-pack designs.
- Second-life systems are mostly NMC- or LMO-based legacy packs, and the insurers' stated preference is for LFP. A second-life NMC system therefore likely faces tougher underwriting than a new LFP container, although no insurer statement specific to second-life was found.

### Gaps
- Scope details of IEC 62933-5-3 (what counts as "unplanned modification") and IEC 62933-5-2 were not retrieved; standards pages were paywalled.
- **IEC 62485** (safety for secondary batteries and installations): no source retrieved.
- Whether any **harmonised standards** have been cited in the Official Journal for Article 12 or Annex V was not found.
- No European second-life BESS fire incident and no insurer statement specific to second-life were found. Premium or deductible differences are unknown.

## 4. What does Reg. 2023/1542 require of a repurposer, and what changed in 2025–2026?

### Takeaway
A repurposer is legally the **manufacturer** (Art. 38(11)) and, for EPR, the **producer** (Art. 56(2)) of the repurposed battery. That battery becomes an industrial battery and, in grid use, a stationary BESS. It is therefore subject to:
- Art. 12 safety documentation
- Module A self-declared conformity, which must take account of Arts 6, 9, 10, 12, 13 and 14 (Art. 17(3))
- new labels (Art. 13(9))
- the Art. 14 BMS data rules
- from 18 February 2027, a new battery passport linked to the original (Art. 77(7))

Art. 14 gives repurposers read-only BMS access and a software-reset right. A waste battery stops being waste once the holder can show an SOH test, a sale contract and transport protection (Art. 73(1)). A detailed end-of-waste implementing act is still pending. Batteries that were already on the market are **exempt** from carbon footprint (Art. 7(5)), recycled content (Art. 8(4)) and due diligence (Art. 47). They are also exempt from performance and durability rules if first placed on the market before those rules applied (Art. 10(4)).

Changes in 2025–2026:
- Due diligence was delayed to 18 August 2027 (Reg. 2025/1561).
- The December 2025 Environmental Omnibus (Omnibus VIII) tweaks the producer definition, labelling and LMT removability, and proposes suspending the EPR authorised-representative duty until 2035.
- The passport date is unchanged as of October 2026. The Art. 77(9) access-rights implementing act missed its 18 August 2026 deadline; the draft is under consultation until 16 November 2026.
- No omnibus provision found targets repurposing, Art. 12, Art. 14 or Art. 73.

### Cited Findings
**Definitions and status** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- Art. 3(30), "preparation for repurposing": an operation by which a **waste** battery is prepared for a different purpose.
- Art. 3(31), "repurposing": an operation that results in a battery "that is not a waste battery" being used for a different purpose.
- Art. 3(32), "remanufacturing": restoring to at least 90% of rated capacity, with cell SOH varying by no more than 3%, for the same purpose.
- Art. 3(13): an "industrial battery" includes one "intended for industrial uses after having been subject to preparation for repurposing or repurposing".
- Art. 3(15): a "stationary battery energy storage system" is an industrial battery designed to store and deliver energy to the grid or end-users.

**Manufacturer and operator duties** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- Art. 38(11): operators that carry out repurposing and place the battery on the market or into service "shall be considered to be manufacturers for the purposes of this Regulation".
- Art. 44(c): an importer or distributor that changes a battery's purpose becomes a manufacturer.
- Art. 45: operators must apply "adequate quality control and safety instructions" to examination, performance testing, packing and shipment. They must ensure compliance with the Regulation and other Union law, "taking into account the fact that … the battery might fall under a different battery category".
- Art. 17(3): repurposed batteries need an additional conformity assessment under **Module A (internal production control)**, taking into account Arts 6, 9, 10, 12, 13 and 14.

**Article 12 (stationary BESS safety)**: Annex V tests apply, and the technical documentation "shall be reviewed if a battery is … repurposed" (see Q3) — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf)

**Article 13(9) (labelling)**: repurposed batteries "shall bear new labels" carrying change-of-status information accessible via QR code. QR codes are required on all batteries from 18 Feb 2027 (Art. 13(6)) — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf)

**Article 14 (BMS data)** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- From 18 Aug 2024, Annex VII SOH and lifetime data must be held in the BMS of stationary BESS, LMT and EV batteries.
- Read-only access must be given "on a non-discriminatory basis" to the legal purchaser, independent operators, waste operators or third parties acting for them, "at any time". Permitted purposes include making the battery available to independent aggregators, evaluating residual value, and "facilitating … repurposing".
- Art. 14(3): the BMS must include a **software reset function** for repurposers that need to upload different BMS software. The original manufacturer is not liable for breaches attributable to the new software.
- Annex VII:
  - EV batteries: SOCE only.
  - Stationary BESS: capacity, power capability, round-trip efficiency, self-discharge and resistance.
  - Lifetime parameters: manufacture date, energy and capacity throughput, harmful events, and equivalent full cycles.

**Article 73 (end of waste)** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- To show that a waste EV or industrial battery prepared for repurposing "is no longer waste", the holder must, on request, provide:
  - (a) an SOH evaluation or test record "carried out in a Member State"
  - (b) an invoice or contract for sale or transfer for further use
  - (c) evidence of protection against transport damage
- The SOH record must accompany the battery for end-users.
- Art. 73(4): the Commission is "empowered to adopt an implementing act" setting detailed end-of-waste technical and verification requirements.

**Article 56 (EPR)** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf); [Baker McKenzie, updated 1 Jan 2026](https://www.bakermckenzie.com/en/insight/publications/resources/product-risk-radar-articles/eu-sustainable-batteries-regulation):
- Art. 56(2): the operator that first makes a repurposed battery available in a Member State "shall be considered to be the producer … and shall have extended producer responsibility".
- Art. 56(5): original and new producers may set up a cost-sharing mechanism, but "the first producer … shall not bear additional costs".
- EPR has applied since 18 Aug 2025.

**Article 77 (battery passport)** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- From **18 Feb 2027**, every LMT battery, industrial battery above 2 kWh and EV battery placed on the market or put into service needs a passport.
- Restricted data (dismantling, detailed composition) is reserved for parties with a legitimate interest, including "second-life operators" and purchasers making batteries available to independent aggregators.
- Art. 77(7): for repurposed batteries, responsibility passes to the operator placing them on the market. "Such battery shall have a new battery passport linked to the battery passport or passports of the original battery".
- Art. 77(9): implementing acts defining legitimate-interest access were due "by 18 August 2026".

**Exemptions for batteries already placed on the market** — [Reg. 2023/1542 consolidated](https://faolex.fao.org/docs/pdf/eur223915.pdf):
- Carbon footprint (Art. 7(5)), recycled content (Art. 8(4)) and the due-diligence chapter (Art. 47) do not apply to repurposed batteries "if the battery had already been placed on the market or put into service before undergoing such operations".
- Performance and durability (Art. 10(4)) do not apply where the original placement predates the obligations' application dates. Art. 10(1) documentation applies from 18 Aug 2024. Minimum values apply from 18 Aug 2027 or 18 months after the delegated act, which was due by 18 Feb 2026.

**Changes in 2025–2026**
- Omnibus IV "stop-the-clock", Reg. (EU) 2025/1561 (adopted 18 Jul 2025, in force 31 Jul 2025): due-diligence obligations now apply from **18 Aug 2027**, and Commission guidelines are due by 26 Jul 2026 — [Reg. 2023/1542 consolidated, Art. 48](https://faolex.fao.org/docs/pdf/eur223915.pdf); [GIZ/BMZ FAQ, Feb 2026](https://rue.bmz.de/resource/blob/309186/2026faq-eu-batteries.pdf)
  - The Squire Patton Boggs tracker calls this a one-year postponement. The original 18 Aug 2025 date implies two years. The tracker marks the guidelines as "Delayed" — [SPB tracker, Sep 2026](https://www.squirepattonboggs.com/our-expertise/services/global-policy-trade-strategies/public-policy/eu-green-deal-simplification-tracker/)
  - The broader Omnibus IV proposal (21 May 2025) would limit due diligence to firms with at least €150m net turnover — [GIZ/BMZ FAQ](https://rue.bmz.de/resource/blob/309186/2026faq-eu-batteries.pdf)
- Environmental Omnibus (Omnibus VIII), 10 Dec 2025, COM(2025) 981, amending 2023/1542: producer definition for distance sales; a definition of SVHC for labelling; LMT battery packs excluded from removability and replaceability; "more flexible data reviewing". COM(2025) 982 would suspend the obligation to appoint an EPR authorised representative until 1 Jan 2035 — [EP Legislative Train](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-omnibus-viii-industrial-emissions-reporting-batteries); [Freshfields, 19 Dec 2025](https://www.freshfields.com/en/our-thinking/blogs/sustainability/the-e-of-esg-environmental-omnibus-published-102ly9k); [Baker McKenzie](https://www.bakermckenzie.com/en/insight/publications/resources/product-risk-radar-articles/eu-sustainable-batteries-regulation)
  - **None of these touch repurposing, Art. 12, Art. 14 or Art. 73** — [Freshfields](https://www.freshfields.com/en/our-thinking/blogs/sustainability/the-e-of-esg-environmental-omnibus-published-102ly9k)
- Legislative status of Omnibus VIII:
  - Council position 24 Jun 2026, adding an 18-month postponement for some removability rules — [battery-tech.net, 11 Oct 2026](https://battery-tech.net/the-eu-battery-passport-belongs-to-whoever-finishes-the-battery-four-months-before-it-becomes-mandatory/)
  - Council mandate on the Environmental Omnibus 30 Sep (2026, inferred). ENVI adopted its report on COM(2025) 982 on 5 Oct, and the EPR vote is planned for 4 Nov 2026 — [SPB tracker](https://www.squirepattonboggs.com/our-expertise/services/global-policy-trade-strategies/public-policy/eu-green-deal-simplification-tracker/)
  - The two dates may refer to different files.
  - EP rapporteur Susana Solís Pérez (EPP) proposes exemptions for spare-part batteries for discontinued vehicle models — [battery-tech.net](https://battery-tech.net/the-eu-battery-passport-belongs-to-whoever-finishes-the-battery-four-months-before-it-becomes-mandatory/)
- Battery passport implementation (Oct 2026): the 18 Feb 2027 date is still "fixed". The EU passport registry and helpdesk opened 20 Jul 2026, and 6 of 8 harmonised DPP standards are cited in the OJ. A Commission passport FAQ was issued in Sep 2026. The FAQ says a battery placed on the market before February 2027 and remanufactured afterwards needs a passport — [battery-tech.net](https://battery-tech.net/the-eu-battery-passport-belongs-to-whoever-finishes-the-battery-four-months-before-it-becomes-mandatory/)
- The Commission opened consultation on the access-rights implementing regulation, with feedback due by **16 Nov 2026** and adoption expected in Q4 2026 — [LexisNexis, 20 Oct 2026](https://www.lexisnexis.co.uk/legal/news/commission-consults-on-draft-implementing-regulation-on-access-rights-to-digital-battery-passports)
- Industry lobbying: EUROBAT (6 Jul 2026) asks to keep the 18 Feb 2027 start but include **only public data at first, with restricted data from 18 Feb 2030**. Restricted data includes the dismantling information second-life operators rely on. It also asks for an EU single EPR registration point to be assessed by 31 Dec 2027 — [EUROBAT](https://eurobat.org/wp-content/uploads/2026/08/EUROBATs-Proposed-Amendments-to-the-Environmental-Omnibus-06.07.2026.pdf)
- Other secondary legislation: draft delegated act on recycled-content methodology, with feedback to 9 Sep 2026, plus a JRC study favouring plant-level mass balance — [Landbell, Sep 2026](https://landbell-group.com/news/environmental-compliance-6/)

### Inferences
- In practice the EU puts the full product-compliance burden on the repurposer: safety file, Module A, CE, labels, passport and EPR. It removes the upstream-sourcing burdens (carbon footprint, recycled content, due diligence). The main regulatory cost for a second-life BESS is Annex V safety testing plus passport and EPR administration per pack type.
- If EUROBAT's request were adopted, second-life operators' passport access to dismantling and composition data would slip to 2030. That would weaken one of the regulation's main supports for repurposing.
- Without the Art. 73(4) implementing act, end-of-waste status depends on each Member State's competent authority accepting the holder's evidence. That creates cross-border uncertainty for pack logistics.

### Gaps
- Status of the **Art. 73(4) end-of-waste implementing act**, the **Art. 10(5) industrial-battery performance delegated act** (due 18 Feb 2026), and the Art. 13 labelling implementing act: not confirmed.
- Whether harmonised standards exist under Art. 15 for Art. 12 or Annex V: not found.
- How Art. 77(7) "linking" works when the original EV battery predates passports: not found in primary text. The Commission FAQ itself was not read.
- The UK regime for Connected Energy, Zenobē and Allye (the EU Regulation does not apply in Great Britain) was not researched.

## 5. Which second-life projects sold grid services, what did they earn or learn, and which stopped or pivoted?

### Takeaway
OEM-led pilots from 2013 to 2022 proved that second-life packs can deliver FCR:
- BMW/Bosch/Vattenfall in Hamburg
- Daimler/TMH at Lünen and Elverlingsen, re-prequalified in 2024 for five more years
- Renault/TMH at Douai
- Audi/RWE at Herdecke
- Connected Energy at Umicore, delivering R1 for Elia

Few scaled:
- Renault's announced 70 MW/60 MWh second-life plan is documented, as of 2021, only as a 4.7 MWh Douai unit mixing new and used packs, plus a German unit using only new batteries. Its final size is unverified.
- ECO STOR's German utility-scale business uses new batteries.
- Cactos switched to new LFP, Stena sold BatteryLoop, and a "lot of people are dropping out".

Independent firms moved to whole-pack designs in C&I and mobile niches (Connected Energy, Allye, Zenobē, Libattion, betteries) or became merchant IPPs (B2U, more than US$1m revenue in 2022). Growth since 2025 has come mainly from US firms with their own pack supply: B2U in Texas and Redwood's 63 MWh microgrid. Connected Energy is the main European player trying to go utility-scale, with a 5 MWh system in 2026 and targets of a first large French site by 2027 and about 1 GWh by 2030.

### Cited Findings
**Connected Energy (UK; E-STOR, whole packs)**
- E-STOR reuses full EV packs ("only commercially available system … using full EV packs rather than just modules"), mainly Renault. It started with up to six small systems (c. 2017–2018) and planned frequency response via aggregators — [Energy-Storage.news](https://www.energy-storage.news/news/engie-macquarie-invest-in-connected-energys-2nd-life-ev-pack-storage)
- Umicore site, Belgium (Feb 2020): 1.2 MW/720 kWh from Renault Kangoo packs, delivering **frequency response (R1) to Elia**. The project was ENGIE-led, with Kiwi Power co-optimising it alongside a load bank and generator. Expected service was seven more years. ENGIE, Sumitomo and Macquarie had invested £5m — [BEST Magazine](https://www.bestmag.co.uk/uk-firm-deploys-grid-scale-second-life-lithium-ion-energy-storage-system-belgium/); [Renault Group](https://www.renaultgroup.com/en/news-on-air/news/a-second-life-for-batteries-from-energy-usage-to-industrial-storage/)
- 2022: turnover more than quadrupled, driven by behind-the-meter C&I demand. £15m raised from Caterpillar VC, Volvo Energy, Mercuria and OurCrowd. Supply was "less of a challenge" thanks to Renault — [Energy-Storage.news YIR 2022](https://www.energy-storage.news/year-in-review-2022-german-bess-developer-eco-stor-and-uk-second-life-storage-firm-connected-energy/)
- Core unit: 360 kWh from 24 Kangoo packs, mostly C&I. Planned M-STOR at 20 MW/40 MWh — [Energy-Storage.news](https://www.energy-storage.news/connected-energy-ceo-on-getting-second-life-business-model-ready-for-ev-industry-boom/)
- 4 Sep 2025: a 100 MWh second-life BESS in Centre-Val de Loire "has been connected to the grid in France". The wording is ambiguous; given the targets below it likely means a secured grid connection, not an operating plant. Targets: first large-scale French site by 2027 and about 1 GWh by 2030. Forsee Power will supply e-bus packs (ZEN 35 and 42) for containerised blocks. Services named are frequency regulation and peak shaving — [BEST Magazine](https://www.bestmag.co.uk/connected-energys-french-odyssey-with-second-life-bess)
- 20 Jan 2026: £2m test centre at Scottow Enterprise Park, Norfolk (APC-funded), due by mid-2026. The site will also host the company's **first 5 MWh multi-battery system**, earning trading and grid-service revenue, mainly from e-bus and e-truck packs. Volvo is a likely supplier — [electrive.net](https://www.electrive.net/2026/01/20/connected-energy-will-grosse-testanlage-fuer-gebrauchte-e-auto-batterien-bauen/)

**B2U Storage Solutions (US; EPS whole-pack, merchant IPP)**
- Oct 2021: 2.75 MW/4 MWh of Leaf packs in Lancaster, CA, using solar-charged arbitrage across wholesale products. Installed cost below US$200/kWh. "We make good money on that" — [Canary Media](https://canarymedia.com/articles/energy-storage/used-ev-batteries-are-storing-solar-power-at-grid-scale-and-making-money-at-it)
- Feb 2023: 25 MWh from 1,300 Honda and Nissan packs, **more than US$1m revenue in 2022** from power and grid services in California's wholesale market, UL 9540-certified — [PowerSystemsDesign](https://powersystemsdesign.com/articles/25mwh-of-second-life-ev-battery-capacity-is-operational-at-hybrid-solar-storage-facility-in-lancaster-ca/8/19741)
- Implied revenue: **at least** about US$40/kWh-year, or about US$1m ÷ 25 MWh (my calculation). Capacity was phased in, so 2022 average capacity was below 25 MWh and actual revenue per kWh was higher.
- As of Oct 2026 — [B2U](https://b2uco.com/about):
  - SEPV Sierra 8 MW/32 MWh (CAISO)
  - SEPV Cuyama 3 MW/12 MWh (end-2023, about 600 packs)
  - Bexar Corrilla, Texas: 10 MW/24–28 MWh (end-2025, 720 packs)
  - Bexar Martinez, Texas: 10 MW, energised Sep 2026, commercial operation Oct 2026
  - ERCOT services include capacity
  - US$45m structured finance fund (Dec 2025)
  - Waymo fleet-battery supply deal (Q2 2026) and LG Energy Solution partnership (Sep 2026)
- Context: California battery net revenue fell from US$103/kW in 2022 to US$53/kW in 2024. ERCOT battery ancillary revenue fell almost 90% from 2023 — [ESS News, 19 Dec 2025](https://www.ess-news.com/2025/12/19/energy-storage-in-2025-year-in-review-part-1/)

**Daimler/Mercedes-Benz Energy, The Mobility House, GETEC (Germany)**
- Lünen (2016): 13 MWh from 1,000 smart fortwo ED battery systems, bidding into weekly primary control reserve auctions. REMONDIS handles end-of-life recycling — [just-auto, 13 Sep 2016](https://www.just-auto.com/news/worlds-largest-2nd-use-battery-storage-starts-up-with-smart-packs)
- Lünen and Elverlingsen together, 29 MW/31 MWh: **re-prequalified for FCR and extended by five years in June 2024**. Capacity was "very stable", but no revenue figures were given beyond "high revenues" — [TMH newsroom](https://www.mobilityhouse.com/int_en/our-company/newsroom/article/sustainable-power-mercedes-benz-group-getec-energie-and-the-mobility-house); [electrive 2024](https://electrive.com/2024/06/13/encore-for-storage-units-from-electric-car-batteries-in-lunen-and-elverlingsen)
- TMH launched a V2G and bidirectional business unit, "The Mobility House Energy", in 2024. It also markets storage for third parties — [ESS News](https://www.ess-news.com/2024/06/19/the-mobility-house-moves-forward-with-second-life-battery-systems-and-launches-vehicle-to-grid-business/)

**Renault Advanced Battery Storage (France and Germany)**
- Announced Sep 2018: **70 MW/60 MWh by 2020 from about 2,000 reused packs** at Douai, Cléon and a former NRW coal plant. Partners: Banque des Territoires, Mitsui, Demeter and TMH — [electrive 2018](https://electrive.com/2018/09/26/renault-to-install-europes-largest-2nd-life-battery-storage)
- Reality by Jul 2021:
  - Douai: 4.7 MWh operating since Oct 2020, using **a mix of new and used Zoe batteries**. Prequalified for 4 MW of primary control reserve, with short-term trading and the **French capacity market**.
  - Elverlingsen: commissioned Nov 2020 using **only new batteries**.
  - — [electrive.net, 7 Jul 2021](https://www.electrive.net/2021/07/07/tmh-bringt-ev-batterien-an-den-franzoesischen-kapazitaetsmarkt/)

**BMW, Bosch and Vattenfall, "Battery 2nd Life", Hamburg**: 2 MW/2.8 MWh from 2,600 modules out of more than 100 BMW EVs. The project started in 2013 with a planned five-year run, and Vattenfall sold primary control reserve. No ageing results were published (Oct 2016) — [ChargedEVs](https://chargedevs.com/newswire/testing-second-life-ev-batteries-for-grid-stabilization/)

**Audi and RWE, Herdecke**: about 4.5 MWh from 60 e-tron development-vehicle battery systems with more than 80% residual capacity. Trial operation began Nov 2021, initially providing grid "frequency maintenance". RWE planned to market the capacity from early 2022 and test other uses. Expected life up to 10 more years — [Audi media release, Jan 2022](https://www.audi.com/en/media-releases/second-life-for-ev-batteries-audi-and-rwe-build-new-type-of-energy-storage-system-in-herdecke-14465)

**Nissan, Eaton, TMH and BAM, Johan Cruijff ArenA, Amsterdam** (Jun 2018): 3 MW/2.8 MWh, equal to 148 Leaf packs, with "a large proportion" second-life and the rest new. Used for peak buffering and backup; TMH built the interfaces to TenneT. Two-thirds was financed by a loan from the Amsterdam Climate and Energy Fund, with ROI expected within 10 years — [pv magazine](https://www.pv-magazine.com/2018/06/29/nissan-commissions-3-mw-storage-system-at-johan-cruijff-arena/); [eeNews Europe](https://www.eenewseurope.com/en/second-life-for-traction-batteries-in-amsterdam-football-arena/)

**ECO STOR (Norway and Germany): pivot to new batteries**
- Norway: whole-system reuse in 15–30 kWh modules, with 150 kWh systems at the Skipet office in Bergen and Holmlia School in Oslo. MoU with Nissan, Norsk Gjenvinning and Agder Energi. The German subsidiary offers grid-connected storage "**using new batteries**" — [Business Norway](https://businessnorway.com/solutions/eco-stor-repurposes-used-ev-batteries-for-energy-storage)
- German growth: 27 ES-3450 systems, 108 MWh across 7 projects, in 2022 — [Energy-Storage.news](https://www.energy-storage.news/year-in-review-2022-german-bess-developer-eco-stor-and-uk-second-life-storage-firm-connected-energy/)
- Pipeline (Aug 2023): 2 GWh, including Bollingstedt (103.5 MW/207 MWh) and Förderstedt (600 MWh). Plans for up to 700 cycles a year over 15 years across reserve, intraday and day-ahead markets, with no second-life mentioned — [S&P Global](https://www.spglobal.com/energy/en/news-research/latest-news/electric-power/081423-interview-eco-stor-aims-for-2-gwh-german-battery-project-pipeline)

**Other European players**
- Zenobē: 20 repurposed e-bus batteries of about 150 kWh each for Select Plant Hire construction sites, replacing diesel generators. 50 second-life units in operation (Jun 2024). Its grid-scale Scottish projects are not described as second-life — [ESS News](https://www.ess-news.com/2024/06/06/zenobe-to-power-uk-construction-sites-with-old-bus-batteries/)
- Allye (UK): US$2.5m seed round (Oct 2025). MegaMAX products of 1 and 1.5 MWh for grid-connected and off-grid use (construction, transport, utilities, media), including packs retired early after accidents. Plans to expand into Europe within 12–18 months — [tech.eu](https://tech.eu/2025/10/17/allye-energy-raises-25m-to-scale-smart-battery-systems-and-expand-into-europe/)
- Libattion (Switzerland): €14m raised (Jun 2024) from the A&G Energy Transition Tech Fund, Teknia, HCapital and EBL. A 7,000 m² plant in Biberist, co-located with recycler Librec, is planned for 500 MWh a year in 2026 and possibly 1 GWh. Output was 7, 12 and 27 MWh in 2022, 2023 and 2024. Systems range from 97 kWh to 60 MWh — [electrive (ES), 7 Apr 2025](https://www.electrive.com/es/2025/04/07/storage-manufacturer-libbation-opens-upcycling-facility-for-ev-batteries/)
- betteries (Germany): betterPack, 2.3–9.2 kWh, with CE, UN and IEC certification (2022). A Mobilize/Renault partner; mobile and small stationary, not grid-scale — [electrive.net](https://www.electrive.net/2022/06/28/betteries-schliesst-die-zertifizierung-seiner-2nd-life-batterie-ab/)

**Exits and pivots**
- Cactos moved to first-life LFP (Jan 2024). Stena sold BatteryLoop to Repono. Fenecon's new Bavarian plant (about US$30m) builds C&I systems from **new, unused ("new obsolete") EV batteries** from German premium OEMs. A senior industry figure said "A lot of people are dropping out of the second life energy storage space" (about April 2024) — [Energy-Storage.news](https://www.energy-storage.news/battery-price-falls-threaten-second-life-model-as-fenecon-opens-assembly-plant-in-germany/)
- Alternative supply in Germany (Jan 2026): crashed vehicles, pre-series vehicles (the Porsche Leipzig project) and first-life batteries from unused new EVs (Voltfang at Stuttgart airport) — [electrive.net](https://www.electrive.net/2026/01/20/connected-energy-will-grosse-testanlage-fuer-gebrauchte-e-auto-batterien-bauen/)

**US scale-up and market share**
- Redwood Energy and Crusoe, Sparks, Nevada (Jun 2025): a **12 MW/63 MWh** solar-paired microgrid for an AI data centre, the largest second-life deployment to date. Redwood processes more than 20 GWh a year, plans to add 5 GWh to its deployment pipeline, and is designing projects above 100 MW — [ESS News](https://www.ess-news.com/2025/06/27/redwood-crusoe-deploy-second-life-batteries-at-data-center-for-63-mwh-storage/)
- Second-life is 0.2% of European grid-scale projects (Sep 2025). Toyota's Sweep system went into testing at a Mazda plant in Aug 2025 — [Benchmark](https://source.benchmarkminerals.com/article/how-is-the-second-life-battery-market-playing-out)

### Inferences
- Technical lesson: every project that survived or scaled uses **whole packs with the OEM BMS kept** (B2U, Connected Energy, ECO STOR in Norway, Redwood). This matches Gao et al.'s 30% cost saving from avoiding disassembly. Module-level remanufacture for grid storage has not shown a viable business case in the sources reviewed.
- Supply lesson: the OEM programmes (Renault, Daimler) used new or spare packs because retired volumes in 2018–2021 were too small. Connected Energy expected "real volumes" only from about 2025 onwards. Growth in 2025–2026 comes from firms with their own pack streams: Redwood (recycler), B2U (Waymo and LGES deals) and Connected Energy (Renault, Volvo, Forsee).
- Market lesson: early second-life plants were built for FCR (high value, low energy throughput). As FCR markets fill and their value falls (US evidence above; European evidence not retrieved), new second-life projects lean to energy trading, peak shaving and behind-the-meter value stacks. Utility-scale developers have meanwhile standardised on cheap new LFP containers.

### Gaps
- **Fortum's** second-life storage activity, the **Nissan/Eaton** xStorage programme beyond the ArenA, BMW's later Leipzig storage farm, and final outcomes (decommissioning, measured SOH, revenue) for BMW/Vattenfall Hamburg, Audi/RWE Herdecke and Renault Douai and Cléon were not retrieved. The search budget was exhausted.
- The current (2025–2026) status of **betteries** and **Stabl** (insolvency or continuation) could not be verified.
- No European second-life asset has published revenue per MW or MWh from FCR or aFRR.
- The Energy-Storage.news article "B2U CEO: US second-life BESS can compete with China price" could not be retrieved (site error).
