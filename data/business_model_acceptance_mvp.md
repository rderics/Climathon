# Small second-life EV battery storage that earns balancing revenue in Latvia: business models, aggregators, network tariffs, public acceptance and a 36-hour MVP (status 30 Oct 2026)

Notes compiled 30 Oct 2026. "My calc" marks arithmetic done by the researcher on cited figures. These figures do not appear in the source. Every price carries its period. The web-search budget ran out before the last Baltic local-language searches, so remaining gaps are listed under each question. BBCM = Baltic Balancing Capacity Market. ST = AS Sadales tīkls (Latvian DSO). AST = Augstsprieguma tīkls (Latvian TSO).

## 1. Which value stacks have been shown to work for second-life or small battery storage in Europe, with published revenue per kW or per kWh, and which niches beat a new LFP system?

### Takeaway
For now, balancing capacity is the largest revenue line for any battery in Latvia: a modelled ~€338k/MW/yr (Clean Horizon ranking, May 2026). Baltic reserve prices, however, fell by roughly 50–90% from 2025 to H1 2026 as batteries flooded in, and Lithuania alone already has ~1.2 GW of batteries against a Baltic reserve need of ~1.5 GW. New LFP is now very cheap (BNEF: stationary packs at $70/kWh in 2025), so second-life packs no longer win on capex. Second-life wins only where cells are near-free or captive, the duty needs a lot of power but little energy, or the alternative is an expensive grid upgrade or lead-acid/diesel backup. That means buffering EV chargers on weak connections, backup/UPS and telecom sites, and fleet owners reusing their own packs.

### Cited Findings

**Baltic balancing prices and the rapid saturation (Latvia first)**
- BBCM average capacity prices for the **Latvian area, 2025 (annual)**, in €/MW/h: FCR 88.21; aFRR up 77.11; aFRR down 90.56; mFRR up 42.06; mFRR down 21.49. **Latvia, Jan–Jun 2026**: FCR 45.49; aFRR up 28.31; aFRR down 11.93; mFRR up 23.99; mFRR down 16.67. Over the same windows, EE aFRR up fell to 15.70 and LT aFRR up to 28.16. Finland's H1-2026 prices were far lower (aFRR up 5.40, FCR-N 9.02). The report says Baltic prices "stabilized", and that Baltic FCR remains above neighbouring markets. — [AST, BBCM Evaluation Report 2026 (dated 4 Aug 2026; covers 1 Oct 2025–30 Jun 2026)](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf)
- Period averages for Oct 2025–Jun 2026 (labelled €/MWh in the report), Latvia: aFRR up 26.02, aFRR down 10.16, mFRR up 23.44, mFRR down 16.85. Monthly peaks were LV/LT mFRR up 36.09 (Oct 2025) and LV aFRR up 52.41 (Jan 2026). Day-to-day price volatility is large: aFRR up in LV/LT moved ~€45/MWh on average from one day to the next. — [AST BBCM report 2026](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf)
- BBCM procurement cost for Oct 2025–Jun 2026 (9 months) was €108.6M: Lithuania €66.6M, **Latvia €23.7M**, Estonia €18.3M. By product, aFRR cost €15.3M and mFRR €93.2M. Prequalified capacity excluding TSO assets is ~14.18 GW (FCR 405 MW; aFRR up 1,629 / down 1,756 MW; mFRR up 4,894 / down 5,501 MW). A "recent surge of BESS and BESS-combined assets" made BESS the **second-largest asset type** by capacity, ahead of gas (e.g., Estonian BESS prequalified for 314 MW aFRR up and 388 MW mFRR up). aFRR demand was fully covered in every scenario. Upward FRR deficits appeared in 1,092 MTUs only when all TSO assets were excluded. — [AST BBCM report 2026](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf)
- Total Baltic balancing need is up to 1,512 MW in 2025, with 80% bought in the market. A 25 MW FCR need was added after synchronisation. Capacity is bought daily for the next day in 15-minute periods. Full activation times are FCR 30 s, aFRR 5 min and mFRR 15 min. — [Litgrid, "New balancing capacity market" page](https://www.litgrid.eu/index.php/electricity-market/balancing-market/new-balancing-capacity-market/32223)
- Lithuanian installed battery power rose from ~700 MW at end-June 2026 to **1,195 MW / 2,261 MWh in early October 2026**. Litgrid expects up to 20 more projects by end-2026, which could take the total past 2 GW / 4 GWh. The joint Baltic balancing market started on 5 Feb 2025. — [IWR / renewable-energy-industry.com, 21 Oct 2026](https://www.renewable-energy-industry.com/news/world/article-7715-battery-storage-boom-in-lithuania-capacity-rises-to-almost-1200-mw-ignitis-and-emsys-vpp-expand-virtual-power-plant-for-balancing-power)
- Modelled annual revenue per MW from the Clean Horizon ranking (May 2026), as reported by Hive Power (24 Aug 2026): **Latvia €338,000/MW/yr**, Lithuania €326,000, Estonia ~€175,000 (2026 estimate), Poland >€800,000 (2-h), Northern Italy ~€654,000 (4-h), GB ~£70,000 (Modo, Mar 2026). These are modelled figures for a typical ~2-h battery doing ~1.5 cycles a day with full availability, not realised revenues. This is a secondary source. — [Hive Power, "Europe's Battery Revenue Map", 24 Aug 2026](https://www.hivepower.tech//blog/europes-battery-revenue-map)
- Aurora (AER), Lithuania standalone case (published 16 Oct 2025): a 2-h battery commissioned in 2026 reaches 13–16% IRR with a 4–5 yr payback. A 4-h battery reaches 11–15% (5–6 yrs). Commissioned in 2029, a 2-h battery reaches only 6–13% (7–10 yrs). mFRR revenues become "a small share" by 2029. Aurora did not model aFRR. — [ESS News, 16 Oct 2025](https://www.ess-news.com/?p=6976)
- TSO-owned batteries bid into the BBCM at zero price as "demand reduction" ahead of market bids, which shrinks the volume left for the market. AST's BESS (Rēzekne 60 MW/120 MWh plus Tume 20 MW/40 MWh) entered at 33 MW aFRR + 7 MW FCR on 30 Oct 2025, then 32 MW aFRR + 8 MW FCR from 1 Jan 2026. Litgrid's Energy Cells BESS was cut from 40 to 30 MW aFRR on 1 May 2026. These resources are expected to exit around Nov 2028, and market BESS are expected to replace Energy Cells' aFRR role. — [AST BBCM report 2026](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf); [Baltic TSOs resource exit strategy, 7 Nov 2025](https://www.ast.lv/sites/default/files/editor/Baltic_TSOs_resource_exit_strategy_07_11_2025.pdf); [AST BESS procurement page](https://www.ast.lv/en/node/56700)
- AST's BESS tender drew 3 offers of €79–87M for 80 MW/160 MWh (bidders SIA Monum, Nidec ASI, Rolls-Royce Solutions; page predates Feb 2025 synchronisation). — [AST](https://www.ast.lv/en/node/56700)

**Small/C&I battery economics quoted in Latvia and the Baltics**
- Enefit Latvia (undated page citing 2024 data): a **500 kWh battery incl. installation costs ~€120,000 and could earn ~€35,000 profit/yr**, giving an average 3–5 yr payback on a 20-yr operating life. Revenue streams are FCR/aFRR/mFRR plus day-ahead arbitrage. Any company can install one, but "a 2 MW battery requires at least a 2 MW connection". Average daily price-fluctuation amplitude was 58% in 2024 vs 34% in 2022. Enefit offers financing (incl. help with Altum/bank loans), installation and "smart software" for balancing-market access. — [Enefit LV, "Why install a battery without panels"](https://www.enefit.lv/en/-/zinas/kapec-uznemumam-uzstadit-akumulatoru-bez-paneliem)
- Enefit demand-flex examples (undated): an 800 kW wood chipper at an Estonian pulp maker earned just under €700 in the first two weeks of a year, and a 155 kW compressor at a food producer earned €250 in one month. Enefit claims participants can cut electricity costs "by up to 15%". — [Enefit LV, "How the balancing market works"](https://www.enefit.lv/en/-/zinas/ka-darbojas-balansesanas-tirgus-un-kadas-ir-pelnas-iespejas)
- Another Enefit LV article (published early 2025, before the Feb 2025 synchronisation) lists the uses of batteries for Latvian companies: solar self-consumption, arbitrage (prices "changed by an average of 59% during the day" in the prior year), frequency-regulation markets opened by AST, and outage protection. It does not mention peak shaving or capacity fees. — [Enefit LV](https://www.enefit.lv/en/-/zinas/akumulatori-palidz-uznemumiem-mazinat-elektroenergijas-izmaksas-un-riskus)
- Byhmgard (11 Mar 2026) announced two Latvian BESS projects, **30 MW / 60 MWh** in total, with a ~€13.6M financing framework (50% senior debt from a local bank). The initial revenue estimate is ~€5.6M/yr "based on current market assumptions", with commercial operation expected Q4 2026. No optimiser is named. — [Byhmgard press release, 11 Mar 2026](https://storage.mfn.se/d94ef7b4-654d-4569-be60-f586bdab6032/byhmgard-enters-into-partnership-and-financing-agreements-enabling-two-bess-projects-in-latvia.pdf)
- Lithuania's first commercial battery in the balancing market is Green Genius' **1 MW / 2 MWh** Butrimonys unit (aFRR and mFRR), traded and optimised by Capalo AI (7 Oct 2025). — [Litgrid](https://www.litgrid.eu/index.php/news-events-/news/the-first-commercial-battery-storage-system-in-lithuania-has-joined-the-electricity-balancing-market/36301)

**Second-life evidence in Europe**
- The Mobility House / Mercedes-Benz built **~30 MW of second-life storage** at Lünen and Elverlingsen (Germany) from ~2,550 EV batteries. It sells into **FCR**, and any capacity not committed to FCR goes into EEX intraday trading. In 2019 the batteries produced average turnover of "more than 800 euros", but the unit and period are unclear. Batteries keep ~70–80% of capacity when they leave the vehicle, and the company estimates at least 10 more years of economic stationary life. (Undated page, c. 2020.) — [The Mobility House](https://mobilityhouse.com/int_en/knowledge-center/article/vehicle-batteries-in-stationary-storage-are-capable-of)
- Connected Energy's second-life E-STOR systems (300 kW) at Volvo truck hubs in Enfield and Carlisle (UK, 22 Mar 2024) made possible a 350 kW and a 150 kW truck charger that the sites "couldn't install" for lack of grid import capacity. The batteries charge off-peak or from solar and supply the chargers at peak, avoiding grid upgrades. No cost figures are given. — [Solar Power Portal, 22 Mar 2024](https://www.solarpowerportal.co.uk/battery-storage/second-life-ev-battery-storage-installed-at-volvo-charging-hubs)
- Connected Energy and Forsee Power announced grid-scale storage built from second-life **electric-bus** batteries (May 2025; headline only). — [Businesswire, 5 May 2025](https://businesswire.com/news/home/20250505427358/en/Connected-Energy-and-Forsee-Power-to-Develop-Grid-Scale-Energy-Storage-Using-Second-Life-Batteries-From-Electric-Buses)
- Review of 32 application, 14 economic and 10 LCA studies (Dong et al., *iScience*, 24 Jun 2023):
  - **Costs:** repurposing costs $25–49/kWh and retired packs cost $19–131/kWh to buy. Repurposed packs sell for $44–180/kWh against $150–250/kWh for a new EV battery. Second-life costs ~20–80% of new, but a lower usable depth of discharge raises the cost per usable kWh.
  - **Levelised cost:** levelised cost of storage (LCOS) is **$234–278/MWh for second-life vs $211/MWh for new** (Steckel). Kamath finds second-life lowers the levelised cost of energy (LCOE) by 12–57%, and by 12–41% for **EV fast charging**.
  - **Use cases:** **UPS/backup** pays back in ~7 yrs (6.9–10.3) vs lead-acid. Residential peak shaving takes 25–30 yrs to pay back (not viable). For **telecom base-station** load shifting, second-life has positive NPV where a new LIB was unprofitable. Industrial use pays back in 2.7–9.1 yrs.
  - **Coverage:** frequency regulation was **not** analysed as a standalone application. Results are mostly modelled rather than measured.
  — [Dong et al., iScience 2023 (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10339184)
- IDTechEx (7 Mar 2025) finds most repurposers are European (BeePlanet Factory, Connected Energy, Allye Energy, Zenobē, which rents its second-life batteries out). Most build **containerised C&I systems** for self-consumption, peak shaving, EV-charging support, mobile rental (events, construction) and UPS. — [IDTechEx, 7 Mar 2025](https://www.advancedbatteriesresearch.com/articles/32762/key-second-life-bess-market-developments)

**The competitor: new LFP**
- BNEF (9 Dec 2025): the average Li-ion pack cost **$108/kWh** in 2025, while **stationary-storage packs cost $70/kWh (−45% y/y)**. LFP packs averaged $81/kWh vs $128/kWh for NMC. European pack prices are 56% above China's ($84/kWh). BNEF expects a further decline in 2026. — [ESS News, 9 Dec 2025](https://www.ess-news.com/?p=7552)
- In January 2024 Finland's Cactos said new batteries had become more economical than repurposed EV batteries. Stabl's second-life systems cost €400–600/kWh. Recyclers pay ~US$8/kWh for used batteries and second-life firms ~US$30/kWh. Battery management systems struggle with mixed models, chemistries and state of health. Fenecon instead builds 82–1,288 kWh C&I units from "new obsolete" EV batteries that were never used in a vehicle. (Article published in April of an unstated year, probably 2024.) — [Energy-Storage.news](https://www.energy-storage.news/battery-price-falls-threaten-second-life-model-as-fenecon-opens-assembly-plant-in-germany/)
- An Energy-Storage.news headline reads "Europe's battery market isn't ready for second-life BESS business models yet" (page could not be retrieved, so headline only). — [Energy-Storage.news](https://www.energy-storage.news/europes-battery-market-isnt-ready-for-second-life-bess-business-models-yet/)

### Inferences
- **Upper-bound capacity revenue per kW (my calc, at LV H1-2026 average prices, if every hour is awarded and energy revenues are ignored):**
  - aFRR up + down: (28.31 + 11.93) × 8,760 h ≈ **€352/kW/yr**
  - mFRR up + down: (23.99 + 16.67) × 8,760 ≈ **€356/kW/yr**
  - FCR: 45.49 × 8,760 ≈ €398/kW/yr, but the Baltic FCR need is only ~25 MW
  - At 2025 prices aFRR up + down would have been ≈ €1.47M/MW/yr (my calc). The fall is therefore steep.
  - The Clean Horizon €338k/MW/yr for Latvia sits close to these upper bounds, which implies near-perfect availability. Aggregated small assets should expect less.
- **Saturation risk is the central business risk.** Lithuanian batteries (1.2 GW, heading past 2 GW) already approach the ~1.5 GW Baltic reserve need, and H1-2026 prices are a fraction of 2025's. Some volume returns to the market when the TSO batteries exit (~Nov 2028). The upward-reserve deficits seen without TSO assets hint that upward products may hold value better than downward ones (inference). A demo should run sensitivities at, for example, −30% and −50% on 2026 prices rather than extrapolating 2025.
- **Latvian location helped.** In H1 2026, LV aFRR up (28.31) was nearly twice EE's (15.70), consistent with Estonia's lower modelled revenue (~€175k vs €338k/MW). Area prices differ because of cross-zonal capacity allocation.
- **Per-kWh view (my calc):**
  - Enefit example ≈ €240/kWh installed and ≈ €70/kWh/yr profit (3.4-yr simple payback).
  - Byhmgard ≈ €187k/MW/yr or ≈ €93/kWh/yr gross, with a ~€227/kWh financing framework (not necessarily total capex).
  - Capacity markets pay per MW. A second-life pack limited to ~0.5C earns about half as much per kWh as a 1C pack of the same energy.
- **Break-even price for second-life vs new LFP (my calc, illustrative):**
  - New C&I LFP at ~€240/kWh installed over 20 yrs (Enefit's assumption) annualises to ~€24.4/kWh/yr at 8%.
  - A second-life system with ~10 yrs of life (Mobility House's estimate) must therefore cost **≤ ~€165/kWh installed** (≤ €120/kWh undiscounted) just to match.
  - That is before penalties for lower round-trip efficiency, mixed-module BMS, testing, higher O&M and insurance.
  - Stabl's €400–600/kWh is far above this, so second-life cannot compete in a generic "balancing BESS" role unless cells are near-free and integration is cheap.
- **Niches where second-life plausibly beats new LFP in Latvia (ranked):**
  - (1) **Backup/UPS replacing lead-acid or diesel**, with balancing as an add-on during normal operation. Evidence: ~7-yr payback vs lead-acid in the review. The outage value does not depend on reserve prices, so it does not saturate.
  - (2) **Buffering EV fast chargers on weak 0.4 kV connections**, where the alternative is a bigger fuse, a costly connection upgrade or a wait (Volvo/Connected Energy precedent; 12–41% LCOE reduction in the review).
  - (3) **Captive packs**: bus, taxi and logistics fleets, dealers, OEM partners or workshops that already hold packs and BMS data, so the purchase cost is close to the ~$8–30/kWh recycler/second-life price.
  - (4) **Balancing products that need a lot of power but little energy** (FCR/aFRR availability with shallow cycling), where second-life's limited energy and cycle life matter less. These are, however, the products that are saturating fastest.
  - (5) **Buyers paying for circularity/ESG**, which may unlock green financing.
- **Where second-life loses:** daily full-cycle arbitrage (degradation, efficiency and Latvian per-kWh distribution fees on charging energy; see Q3) and bankable utility-scale projects that need long warranties.

### Gaps
- No published Latvian or Baltic revenue data for any **second-life** battery were found.
- No realised (as opposed to modelled) BBCM revenues for small batteries behind an aggregator were found.
- No European €/kW/yr figures for second-life FCR were found beyond The Mobility House's ambiguous "800 euros".
- Second-life warranty and insurance terms are uncovered (the Energy-Storage.news page failed to load).
- Balancing-energy (activation) revenues and imbalance-price capture were not quantified, though they can be computed from Baltic Transparency Dashboard data (Q5).
- Customer outage costs in Latvia (to value backup) were not found.

## 2. Which aggregators or virtual power plants accept small batteries for balancing in Latvia or the Baltics, and what share of revenue do they take?

### Takeaway
In Latvia, **Enefit** (Eesti Energia group) openly markets a VPP for business customers and sells turnkey batteries with balancing-market software. **Fusebox** lists Latvia among its markets and typically takes assets of ~100 kW or more of flexible capacity for FCR/aFRR. In Lithuania, **Ignitis** (with emsys VPP) is extending its VPP to batteries for aFRR/mFRR, and optimisers such as **Capalo AI** run batteries for owners. **No Baltic aggregator publishes its revenue split**, so terms must be negotiated. **Latvenergo/Elektrum** is building its own 250 MW / 500 MWh fleet, and no offer to aggregate third-party batteries was found. **Gridio** is an EV smart-charging app with no documented Baltic balancing role. A 50 kWh–2 MWh system will almost certainly need to go through an aggregator, and the smallest units (≤100 kW) need pooling.

### Cited Findings
- **Enefit (Latvia):**
  - Enefit calls itself "one of the first electricity companies in Latvia to offer access to the new balancing markets through a Virtual Power Plant".
  - Equipment connects through a remote-control device. Installation costs a "one-time, relatively low investment, with no ongoing maintenance fees".
  - Enefit bids the asset on the customer's behalf. Customers set time windows and capacity limits. Onboarding involves a compliance audit and a cooperation agreement, and income is shown on a portal.
  - Batteries are named as suitable for companies without flexible equipment.
  - No size thresholds or revenue split are given.
  — [Enefit LV](https://www.enefit.lv/en/-/zinas/ka-darbojas-balansesanas-tirgus-un-kadas-ir-pelnas-iespejas)
- **Enefit (Estonian service page):**
  - Eligible assets include "industrial batteries", UPSs, generators, EV chargers and electric buses.
  - Enefit says it covers the costs of joining and maintaining the service, which conflicts with the LV page's "one-time investment".
  - Earnings reach "up to 15%" of a device's annual electricity cost.
  - No minimum kW, product list, split or contract length is given.
  — [Enefit EE, flexible energy](https://enefit.ee/en/ari/energiatooted/paindlikenergia)
- **Fusebox:**
  - It operates in DE, FR, BE, **EE, LV, LT**, FI and SE and "typically onboards assets with a minimum flexible capacity of around 100 kW" (100 kW to several MW) for FCR, aFRR and demand response, controlled via setpoints to on-site controllers such as Eniris SmartgridOne.
  - No commercial terms are stated. — [Eniris–Fusebox partnership page (2026)](https://eniris.com/partnerships/fusebox)
  - In Jan 2025 Fusebox had 3,600+ connected assets in 13 Nordic/Baltic markets. It describes itself as a software toolkit that "doesn't compete with clients" in ancillary markets, which suggests a software-fee model.
  - Company-claimed customer results are −35% energy costs and +40% revenues (unverified). — [Invest in Estonia, 21 Jan 2025](https://investinestonia.com/estonian-energy-startup-fusebox-lands-e2-6m-to-scale-across-europe/)
  - Fusebox began in Lithuania in 2020 as the first independent demand aggregator, with Ignitis acting as its balance-responsible party. — [Ignitis, 13 Aug 2020](https://ignitisgrupe.lt/en/news/ignitis-partnership-estonian-start-allowed-introduce-novelty-lithuanian-electricity-market)
- **Ignitis + emsys VPP (Lithuania):**
  - Since 2024 the VPP has marketed ~650 MW of generation.
  - In Oct 2026 it was extended to pool and control **batteries for aFRR and mFRR**. Participation requires technical connection, prequalification and integration into Litgrid's control system. The work is supported by Germany's BMWE/dena.
  - No owner terms are given. — [IWR, 21 Oct 2026](https://www.renewable-energy-industry.com/news/world/article-7715-battery-storage-boom-in-lithuania-capacity-rises-to-almost-1200-mw-ignitis-and-emsys-vpp-expand-virtual-power-plant-for-balancing-power)
- **Capalo AI:** it provides "full trading and optimization on the balancing and wholesale markets" for Green Genius' 1 MW/2 MWh battery (Lithuania, Oct 2025). Litgrid had balancing agreements with **24 market participants** at that time. — [Litgrid, 7 Oct 2025](https://www.litgrid.eu/index.php/news-events-/news/the-first-commercial-battery-storage-system-in-lithuania-has-joined-the-electricity-balancing-market/36301)
- **Next Kraftwerke** (European VPP, Belgian page):
  - The minimum battery size is 150 kW to join, but the FAQ says "at least 400 kW and about one hour". The page is inconsistent.
  - FCR is the main product, with aFRR also possible. Owners receive a capacity "performance price".
  - No split is stated, and Baltic activity is not confirmed.
  — [Next Kraftwerke](https://www.next-kraftwerke.com/en/products-and-services/batteries)
- **Latvenergo/Elektrum:** Latvenergo targets **250 MW / 500 MWh of its own BESS by 2030**, at CHPP-1 (first project), Riga HPP and CHPP-2. The batteries are meant to balance its own production. The article does not mention aggregation, a VPP, Elektrum or customer-owned batteries (18 Feb 2025). — [Latvenergo](https://latvenergo.lv/en/pazinojumi/zina/latvenergo-invests-heavily-battery-systems-plans-become-baltic-market-leader-bess)
- **Gridio:** it describes itself as "Europe's leading smart charging platform for EVs and solar optimization", with 70k+ downloads in 20+ countries, and aims to build "the largest virtual battery". Its press kit documents no balancing-market participation or partner and no Baltic MW. — [Gridio press kit (The smarter E 2025)](https://www.powertodrive.de/exhibitor-presskit/gridio)
- **NordBESS** (Lithuania) and HyperStrong have a 500 MWh pipeline in the Baltics and Poland. The press release does not say whether NordBESS acts as an aggregator or balancing service provider (5 Nov 2025). — [BNS press release](https://sc.bns.lt/view/item/the-balancing-market-attracts-new-participants-global-leading-energy-storage-provider-hyperstrong-enters-the-baltic-and-polish-region-via-partnership-with-nordbess-518066)
- **Market structure facing aggregators:**
  - Concentration in the Baltic market, measured by the HHI index, fell 28–42% from Oct 2025 to Jun 2026.
  - The largest provider still holds ~41% of accepted mFRR and ~28% of aFRR. The top three hold ~80% of mFRR and ~73% of aFRR. Two providers supply ~80% of upward mFRR.
  — [AST BBCM report 2026](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf)
- An RTU study of the first six months of the BBCM (Cingels, Baltputnis, Sauhats; RTUCON, 24 Oct 2025) found aFRR/mFRR auctions volatile at first, then stabilising and declining. FCR prices correlated with imbalance prices, and hydro seasonality and outages drove results. — [RTU ORTUS](https://ortus.rtu.lv/science/lv/publications/41463)

### Inferences
- With minimum sizes of ~100–150 kW or more (Fusebox, Next Kraftwerke), a single 50–100 kW second-life unit is too small on its own. The business model needs either a **portfolio of sites** pooled by one aggregator or units of ~250 kW and up.
- Revenue split: no Baltic figure is public. For a demo, treat the aggregator share as a scenario parameter (for example 15/25/35%), clearly labelled as an assumption. Also model the alternatives Enefit and Fusebox seem to use: an aggregator-paid onboarding cost (Enefit EE) and a software-fee model (Fusebox).
- Market concentration and the zero-price TSO batteries mean small entrants clear at the margin. An aggregator's bidding quality, including stacking across areas and products, matters more than the hardware.
- Enefit is the most obvious Latvian channel because it bundles hardware, financing and VPP. Fusebox is the independent, software-led option.

### Gaps
- No revenue-share percentages were found for Enefit, Fusebox, Ignitis/emsys, Capalo or Next Kraftwerke.
- BBCM minimum bid size, the rules for aggregating units and AST's list of balancing service providers were not found (the Litgrid page is silent on these).
- No confirmation was found of whether Elektrum offers any third-party flexibility aggregation, or of how Latvian law treats **independent** aggregators (balance-responsible party arrangements, compensation to suppliers). The search budget was exhausted before these checks.

## 3. What capacity-based or peak-based network charges do Latvian commercial customers pay (Sadales tīkls tariff structure, fees linked to permitted load), which storage could reduce? (Includes distribution-grid flexibility and weak-grid EV chargers)

### Takeaway
Latvian distribution **capacity fees are charged on contracted capacity, not on measured monthly peaks**:
- At 0.4 kV: per ampere of the main fuse (Pamata 3-phase **€0.82/A/month**, unchanged into 2027).
- At 6–20 kV: per kW of permitted load (**€2.73/kW/month now → €2.28 on Pamata from 1 Jan 2027**).

The only peak-based element is an overage rule at 6 kV and above: if the permitted load is exceeded, the actual maximum is billed, and an excess above 10% may be billed at three times the excess. Storage therefore saves network charges by letting a site **downsize its fuse or permitted load**, avoid overage, and avoid **connection-upgrade costs and delays**. That is worth roughly **€15–37/kW/yr** (my calc), about ten times less than current balancing capacity prices. Per-kWh distribution fees on grid charging energy are as high as **€38.65/MWh at 0.4 kV Pamata** (2027) and penalise arbitrage. No operating distribution-level flexibility market was found in Latvia as of Oct 2026.

### Cited Findings
- **ST tariffs from 1 Jan 2027** (excl. VAT). Voltage levels drop from four to two, and customers may pick any plan each billing month. ~99% of users will see costs fall or stay the same.
  - **0.4 kV, energy fee (€/kWh):** Pamata 0.03865, Jaudīgais 0.02010, Speciālais 0.15848.
  - **0.4 kV, capacity fee (€/A/month, 1-phase / 3-phase):** Pamata 0.34 / 0.82, Jaudīgais 0.58 / 1.40, Speciālais 0.14 / 0.33.
  - **6–20 kV, energy fee (€/kWh):** Pamata 0.00550, Jaudīgais 0.00224, Speciālais 0.02768.
  - **6–20 kV, capacity fee (€/kW/month):** Pamata 2.28, Jaudīgais 3.10, Speciālais 1.65.
  - **Conversion:** P = n × I × U × cos φ, with cos φ = 0.929 and n = √3 for 3-phase. Connections below 16 A are billed as 16 A.
  — [ST tariffs 2027 table](https://sadalestikls.lv/storage/app/media/uploaded-files/Sadales%20sist%C4%93mas%20pakalpojumu%20tarifi%202027.pdf)
- **Current tariffs being replaced** (in force since 1 Jan 2024):
  - 0.4 kV energy fee: Pamata-1 0.03962, Pamata-2 0.02587, Speciālais-1 0.15848, Speciālais-2 0.10348 €/kWh.
  - 6–20 kV energy fee: Pamata-3 0.00692, Pamata-4 0.00439, Speciālais-3 0.02768, Speciālais-4 0.01756 €/kWh.
  - 6–20 kV capacity fee: Pamata 2.73 €/kW/month, falling to 2.28 (−16%).
  - The 2027 tariffs take effect "unless SPRK publishes a decision revoking them". Comments are invited within 7 days of publication in *Latvijas Vēstnesis*. The only SPRK decision cited is methodology decision No. 1/41 of 28 Nov 2022.
  — [ST official notice on 2027 tariff values](https://sadalestikls.lv/storage/app/media/uploaded-files/Ofici%C4%81lais%20pazi%C5%86ojums%20par%20tarifa%20v%C4%93rt%C4%ABb%C4%81m%202027.pdf)
- **Producer and storage capacity fee R-1:** €0.1445/kW/month, applied to the difference between permitted feed-in capacity and permitted consumption load. Storage units connected under a contract or permit are included. Microgenerators up to 11.1 kW are exempt. — [ST notice 2027](https://sadalestikls.lv/storage/app/media/uploaded-files/Ofici%C4%81lais%20pazi%C5%86ojums%20par%20tarifa%20v%C4%93rt%C4%ABb%C4%81m%202027.pdf)
- **Tariff application rules (2024):**
  - **Basis of the charge:** at 0.4 kV the capacity charge follows the fuse current in the contract (or the installed fuse). At 6–20 kV it is per kW of contracted permitted load.
  - **Payable regardless of use** "while the contract is in force", even during a customer-requested disconnection.
  - **Overage rule:** at 6 kV and above, exceeding the permitted load means paying for the actual maximum load. An excess above 10% may be billed as permitted load **plus three times the excess**. This does not apply to households.
  - **Reactive energy** is billed for customers at 6 kV and above with ≥100 kW, and for others with fuses ≥200 A.
  - **0.5 "efficient use" coefficient:** may apply to new or increased connections (6–20 kV, or 0.4 kV above 100 A) for contracts concluded by 30 Apr 2024.
  - **Other rules:** there are no time-of-use periods. Pamata has been the default since 1 Jul 2023. Plan changes are made via e-st.lv and apply per billing period. Storage is not mentioned.
  — [ST tariff application rules 2024](https://sadalestikls.lv/storage/app/media/Tarifs/ST%20sist%C4%93mas%20pakalpojumu%20tarifu%20pielieto%C5%A1anas%20k%C4%81rt%C4%ABba_2024.pdf)
- **Downsizing a connection is free and fast.** In 2023, 29,000 households reduced their connection capacity via e-st.lv between May and late Nov 2023. The change takes effect the next day at no charge, and restoring the old capacity was free once, until 30 Jun 2024. The rules for businesses are not described. — [LV portāls, 7 Dec 2023](https://lvportals.lv/dienaskartiba/358094-parskatot-elektribas-piesleguma-jaudu-mums-ir-iespeja-samazinat-ikmenesa-rekina-izmaksas-2023)
- **Connection fees for new or increased load:** a load-unit cost method was extended to sites up to 300 m from the 0.4 kV network, in three zones (0–50, 50–150, 150–300 m), and now covers up to 95% of applications. Costs are shown on an online cost map. The SPRK-approved change took effect on 1 May 2025. No €/A figures are given. — [iFinanses, 28 Mar 2025](https://www.ifinanses.lv/bizness/raksti/aktuali/likumdosana/biz-new-tiek-vienkarsota-elektroenergijas-piesleguma-maksas-noteiksanu/27697)
- **Flexible connection (transmission level, producers):** amendments to the Electricity Market Law passed on 6 Mar 2025 and took effect on 1 Apr 2025.
  - The operator may limit capacity by up to 10% per year.
  - Until 31 Dec 2026, free capacity goes only to the flexible service or to existing connections.
  - A free-capacity map has been published monthly since 2 Jun 2025.
  - Many applicants have reserved large capacities that go unused.
  — [LV portāls, Mar 2025](https://lvportals.lv/dienaskartiba/373581-ieviesis-elastiga-piesleguma-pakalpojumu-2025)
- **Grid limits in the regions:** ST will spend €40M from the EU Modernisation Fund on new or upgraded 110 kV substations at Saldus, Saulkrasti and Salacgrīva and a 110 kV line to Stiene, to add capacity "where it is currently limited" (completion by 31 Dec 2030). ST's 2025 turnover was €382.24M. — [LSM, 30 Jul 2026](https://www.lsm.lv/raksts/zinas/ekonomika/30.07.2026-sadales-tikls-ar-40-miljonu-eiro-es-finansejumu-palielinas-tikla-jaudu-latvijas-regionos.a656865/)
- **Distribution-level flexibility pilot:** a CEEnergyNews headline reads "Latvia's grid operator and TET to pilot new flexible electricity service for efficiency". The page was blocked by a bot check, so the date, the operator (AST or ST) and the assets involved are unverified. — [CEEnergyNews](https://ceenergynews.com/electricity/latvias-grid-operator-and-tet-to-pilot-new-flexible-electricity-service-for-efficiency/)
- **Weak-grid charger precedent:** second-life 300 kW buffers made 350 kW and 150 kW chargers possible on sites with too little import capacity (UK, Mar 2024). — [Solar Power Portal](https://www.solarpowerportal.co.uk/battery-storage/second-life-ev-battery-storage-installed-at-volvo-charging-hubs)

### Inferences
- **Capacity fee per kW of contracted capacity (my calc):**
  - At 0.4 kV 3-phase, 1 A ≈ 0.6436 kW (√3 × 0.4 kV × 0.929).
  - 0.4 kV: Pamata ≈ **€15.3/kW/yr**; Jaudīgais ≈ €26.1/kW/yr; Speciālais ≈ €6.2/kW/yr.
  - 6–20 kV: today ≈ €32.8/kW/yr; 2027 Pamata ≈ **€27.4/kW/yr**; Jaudīgais ≈ €37.2/kW/yr.
  - Compared with the ~€350/kW/yr balancing upper bound (Q1), network savings are a **secondary** value stream. They are bankable because they do not depend on market prices.
- **Charger example (my calc):** a 150 kW DC charger needs ≈ 233 A (3-phase, 400 V). If a buffer battery lets the site keep a 100 A fuse (≈ 64 kW):
  - The capacity-fee saving is 133 A × €0.82 × 12 ≈ **€1,300/yr** on Pamata, or ≈ €2,230/yr on Jaudīgais.
  - The bigger values are the **avoided connection-upgrade payment** (cost map) and the time saved. Neither was quantified.
- **Peak shaving in Latvia therefore means:**
  - (a) choosing a smaller fuse or permitted load;
  - (b) at 6 kV and above, avoiding overage bills (the 3× penalty on an excess above 10%);
  - (c) choosing the tariff plan jointly with battery dispatch.
  - Jaudīgais suits high-throughput sites, while Speciālais has a very low capacity fee but **€158/MWh** energy, so it suits backup-type or rarely used connections. The plan can be changed each month, which makes this a natural optimisation feature for a demo.
- **Arbitrage penalty (my calc):** charging from the grid at 0.4 kV Pamata adds ~€38.65/MWh (2027), or ~€20.10 on Jaudīgais, but only €2.24–5.50 at 6–20 kV. Behind-the-meter arbitrage at 0.4 kV needs large spreads. Balancing products that pay mostly for availability (capacity payments) suit small 0.4 kV sites better.
- A battery that exports more than its import permitted load pays R-1 on the difference, about €1.73/kW/yr (my calc). This is minor.
- For a base case, assume a DSO-flexibility revenue of €0 in Latvia (no operating local flexibility market found) and treat it as upside.

### Gaps
- Whether grid-charging storage is exempt from per-kWh distribution fees (avoiding double charging) in Latvia was not found. The tariff documents are silent.
- No €/A connection-fee values for capacity increases (cost map) were collected.
- Whether SPRK has formally confirmed the 2027 tariffs as of 30 Oct 2026 is unknown.
- The rules for **businesses** reducing or re-increasing permitted load (cost of re-increasing) were not found.
- Details of the ST/AST–Tet pilot are unknown; the page was blocked.
- Whether the ST tariff includes AST transmission costs was not verified.

## 4. What drives public opposition to battery storage, are there Latvian or Baltic cases, and which mitigations work?

### Takeaway
Opposition in Europe and the US is driven by:
- fear of fire and toxic smoke, sharply amplified by **Moss Landing** (Jan 2025: an indoor 300 MW/1,200 MWh building with LG Energy Solution modules; ~1,500 people evacuated; nickel, cobalt and manganese found in nearby soil; ~1,200 modules re-ignited on 18 Sep 2026; root cause still unknown);
- pollution of drinking water by firefighting runoff;
- greenfield and landscape siting;
- information gaps.

The fleet-level risk has fallen steeply. EPRI finds the failure rate fell **98% from 2018 to 2025**, with 24 failures on 634 GWh in 2025. Most failures trace to integration and construction and occur early in life, and EPRI does **not** treat any chemistry as inherently safer at system level. **No organised opposition to battery storage was found in Latvia, Lithuania or Estonia** (searches were limited). The Baltic battery incident with consequences was a grid-code failure: Kiisa's commissioning test tripped both Estlinks in Jan 2026. Mitigations with evidence behind them:
- installed fire suppression plus transparency (68% of US respondents more likely to support);
- brownfield siting (England: 70% support vs 53% opposing greenfield);
- outdoor modular containers with spacing (New York's code bans Moss Landing-style indoor halls);
- benefits for bills and jobs;
- early involvement of the fire service.

Firewater containment alone did not save a UK project.

### Cited Findings

**Moss Landing (Jan 2025) and its long tail**
- Vistra's Phase I was 300 MW / 1,200 MWh in a "Building" enclosure, with LG Energy Solution modules integrated by Fluence. It was 4.1 years old at the event and had an earlier incident in 2021.
- The response was "monitor and contain". Evacuation orders were issued, roads and a highway were closed, and schools shut for a day.
- Hydrogen fluoride measured below acute thresholds, but nickel, cobalt and manganese were elevated in nearby soil. The root cause is blank in the database.
— [EPRI BESS failure database entry](https://storagewiki.epri.com/index.php/Failure_Event_-_US,_CA,_Moss_Landing_-_16_Jan_2025)
- About **1,500 people** were forced to evacuate. "At least a few dozen" US localities have temporarily blocked large batteries (moratoria in Island Park NY, Maple Valley WA, Halstead KS), and moratoria rose in 2023–2024 per PNNL. **New York's fire code requires modular enclosures with minimum spacing, and Moss Landing's indoor storage would not be permitted there.** An expert from the University of Texas at Austin called failures "relatively infrequent" in a "relatively immature technology that is maturing quickly". (AP, c. Sep 2025.) — [Renewable Energy World (AP)](https://www.renewableenergyworld.com/energy-storage/battery/fears-of-massive-battery-fires-spark-local-opposition-to-energy-storage-projects/)
- On **18 Sep 2026** ~1,200 inaccessible, still-charged modules re-ignited, prompting a shelter-in-place order. **Vistra says the 2025 cause is still unknown**, and the root-cause investigation by the California Public Utilities Commission (CPUC) is ongoing. Experts blamed an "enclosed, aging building with older battery technology packed closely". San José State University found high nickel, manganese and cobalt in the soil, and hair samples showed elevated exposure. A local group says "public trust ... continues to erode". — [CalMatters, Sep 2026](https://calmatters.org/environment/2026/09/moss-landing-battery-fire-reignites-fears/)
- CleanTechnica speculated that Phase I used **NMC** (described as more fire-prone than LFP), but the chemistry is not confirmed. A Stanford expert said the industry "must do better at explaining its safety systems". It was the fourth emergency at Moss Landing in under four years. — [CleanTechnica, 19 Jan 2025](https://cleantechnica.com/2025/01/19/fire-at-moss-landing-could-turn-back-the-clock-on-battery-storage-in-california)

**Fleet-level risk data**
- EPRI white paper (reported 23 Oct 2026):
  - The annual Li-ion BESS failure rate fell **98% from 2018 to 2025**: 26 failures on 343 GWh in 2024 and **24 on 634 GWh in 2025**.
  - 150 incidents were recorded from 2018 to 2025, and nearly a quarter were never publicly reported.
  - EPRI **does not declare any chemistry inherently safer at system level**.
  - It recommends safety reviews and retrofits of early systems, plus modular spacing, firewalls and barriers.
  - NFPA 855 has a 2026 edition.
  — [Power Engineering, 23 Oct 2026](https://www.power-eng.com/?p=137154)
- EPRI/PNNL/TWAICE (2024) found that **integration, assembly and construction** was the most common root cause (10 of 26 incidents with an assignable cause). **72%** of failures in systems of known age happened during construction or commissioning or within two years of operation. — [Utility Dive, 21 May 2024](https://www.utilitydive.com/news/cells-and-modules-not-responsible-for-most-battery-energy-storage-system-fa/716732/)

**Survey data (no Baltic surveys found)**
- **US (Firetrace, a fire-suppression vendor, so possible bias):** fielded Apr–May 2025, n = 3,861 (Censuswide), published 17 Nov 2025.
  - **71% support** a local BESS.
  - **68%** would be more likely to support one with installed fire suppression, and 31% of opponents would switch if suppression could extinguish fires in seconds. 47% would be more supportive with more transparency about safety.
  - Opponents' concerns: environmental impact 47%, toxic leaks 40%, fire/safety 38%. 41% of all respondents worry about property values.
  - 44% of all respondents (52% of opponents) had never encountered information about BESS.
  - Persuasive benefits: lower bills 70%, reliable power 68%, local jobs 63%, cleaner air 60%.
  — [Fire & Safety Journal Americas](https://fireandsafetyjournalamericas.com/firetrace-bess-support/)
  - An earlier write-up of what appears to be the same survey gives n ≈ 4,000 and says "upwards of nine projects" were rejected or delayed in a year solely over safety. — [Energy-Storage.news](https://www.energy-storage.news/71-of-americans-surveyed-support-energy-storage-but-vocal-minority-kill-or-delay-projects/)
- **England (Root-Power/Savanta, Jun 2025):**
  - **65%** of the public support local BESS; **77%** of councillors support and 14% oppose.
  - **Brownfield sites are supported by 70%** of the public (85% of councillors), while **greenfield sites are opposed by 53%** of the public (73% of councillors).
  - Opposition is ≤17% in every age group. The main perceived benefits are energy security (37%), lower prices (33%) and local jobs (30%).
  — [Energy Global, 24 Jun 2025](https://www.energyglobal.com/energy-storage/24062025/significant-support-for-battery-energy-storage-as-part-of-push-for-clean-power/)

**European opposition cases**
- **Axminster, East Devon (UK):** Clearstone Energy's lithium-ion BESS was **refused in May 2025** over fire risk and pollution of an aquifer that supplies drinking water.
  - The developer offered 228,000 L of firewater containment (vs a 192,000 L estimated need), equipment with a "perfect safety record" and evidence prepared with the fire service. It was still refused.
  - Objectors noted there were no hydrants nearby and questioned the fire service's ability to reach a remote site. A 2023 refusal at Pound Road, Hawkchurch (upheld on appeal) was cited as precedent.
  — [Devon Air Radio, 15 May 2025](https://www.devonairradio.com/news/exeter-and-east-devon/fire-and-water-pollution-fears-from-residents-as-battery-storage-scheme-rejected/)
  - The appeal for the 150 MW Axminster site then **failed (Aug 2026, headline)**. — [pv magazine, 20 Aug 2026](https://www.pv-magazine.com/2026/08/20/blocked-bess-in-britain-clearstones-appeal-fails-for-150-mw-site-at-axminster/)
- **Pollença, Mallorca (Nov 2025):** the council is "completely opposed" to a lithium BESS on rural land, citing landscape, planning and transparency. Mallorca's planning service reported unfavourably on a similar plant at Inca because it exceeded the occupied surface allowed for rural land. — [Ara Balears, 5 Nov 2025](https://en.arabalears.cat/misc/pollenca-reaffirms-its-rejection-of-the-lithium-battery-plant-after-the-meeting-with-the-promoting-company_1_5551399.html)
- The Catalan government's safety blog (20 Oct 2025) cites BESS fires in Essex and Liverpool and residents' protests in Aberdeenshire over forest-fire and flood risk. It notes that there is **no unified EU regulation** on BESS quality and maintenance and that each country follows its own protocols. — [Notes de seguretat (Generalitat), 20 Oct 2025](https://notesdeseguretat.blog.gencat.cat/2025/10/20/concerns-are-growing-about-the-fire-risk-in-battery-facilities/)
- In France, a mayor threatened to resign over a lithium battery storage project (headline only; the page failed). — [Reporterre](https://reporterre.net/Un-maire-menace-de-demissionner-face-a-un-projet-de-stockage-par-batteries-lithium)

**Latvian and Baltic evidence**
- Latvian-language searches about battery parks, residents and fire safety returned **no BESS opposition case**. The only "battery" protest found was against a **lead-acid battery recycling plant**, SIA Eco Lead in Kalnciems: ~100 residents protested on 26 May 2020 over air and water pollution (~65 t/yr SO₂ estimated), and court challenges failed. — [LSM, 26 May 2020](https://www.lsm.lv/raksts/zinas/latvija/kalnciema-proteste-pret-akumulatoru-rupnicu.a361357/)
- In Estonia, on **20 Jan 2026** Evecon's **Kiisa battery park** caused an oscillation during a commissioning test run by the system manufacturer, NIDEC Conversion. It tripped **Estlink 1 and 2**, and the Baltic system lost ~1,000 MW, which reserves had to cover. Elering said the device's behaviour "did not meet applicable requirements". No public reaction was reported. — [ERR, 29 Jan 2026](https://www.err.ee/1609925438/estlinkide-rikke-pohjustas-eveconi-kiisa-akupark)
- The large Latvian batteries are **sited on existing energy infrastructure**: AST's at the Rēzekne and Tume substations ([AST](https://www.ast.lv/en/node/56700)), and Latvenergo's at CHPP-1, CHPP-2 and Riga HPP ([Latvenergo, 18 Feb 2025](https://latvenergo.lv/en/pazinojumi/zina/latvenergo-invests-heavily-battery-systems-plans-become-baltic-market-leader-bess)).
- **EU Battery Regulation (2023/1542), per a third-party compliance guide:**
  - **Battery passports are mandatory from 18 Feb 2027** for EV batteries, LMT batteries and industrial batteries above 2 kWh, including stationary storage.
  - A repurposed battery "needs a new label".
  - Individual state-of-health and performance data go to "legitimate interest" parties, including **independent aggregators and second-life operators**.
  - The EU product-passport registry went live on 20 Jul 2026 (per the guide).
  — [euverify guide](https://euverify.com/resource/battery-passport-compliance/)

### Inferences
- **Scale matters.** A 50 kWh–2 MWh unit is 600–24,000 times smaller than Moss Landing Phase I (my calc). Distributed C&I units are more likely to meet the fire service and the insurer than an organised campaign. The Baltic record (no BESS opposition found; batteries on existing energy sites) supports a **brownfield, behind-the-fence siting** strategy: industrial yards, depots, fuel or charging stations, telecom sites.
- **Second-life has its own trust problem.** Mixed, aged cells of unknown history, many of them NMC (older Nissan Leaf packs are LMO; see BLAST-Lite in Q5), mean the "it's LFP" reassurance is often unavailable. EPRI also says chemistry alone does not determine system safety. The credible reassurance package for second-life is therefore:
  - incoming state-of-health and pulse testing with rejection of outlier modules;
  - cell- or module-level temperature and voltage monitoring with remote alarms;
  - an outdoor steel container with spacing and gas/fire detection plus suppression;
  - an emergency plan agreed with the fire service (VUGD in Latvia);
  - firewater/runoff consideration near wells;
  - a public safety page;
  - a battery-passport-style record (the passport becomes mandatory on 18 Feb 2027).
- **Early life is the riskiest period:** 72% of failures happen in construction, commissioning or the first two years, and the Kiisa trip happened during commissioning. Commissioning quality and grid-code compliance testing deserve as much emphasis as chemistry, for both safety and TSO acceptance.
- **Communication:** the survey results (bills, reliability, jobs) suggest framing the units as **local resilience/backup plus lower bills**. In Latvian, "akumulatoru" covers both batteries and the lead-battery recycling plant that was protested, so careful naming (for example "enerģijas krātuve") may avoid that association. This is a speculative inference.

### Gaps
- No Latvian, Lithuanian or Estonian survey on BESS acceptance was found.
- No Latvian fire-safety rules or VUGD guidance specific to BESS were found.
- Lithuanian and Estonian local-news coverage was incomplete because the search budget ran out.
- The Moss Landing chemistry is unconfirmed in the sources fetched (EPRI's entry is blank on chemistry).
- The exact Battery Regulation articles on repurposing (the repurposer's "manufacturer" obligations) were not verified in the primary text.

## 5. Which open datasets and APIs and open-source models could power a demo showing a second-life battery earning balancing revenue, and what could a team prototype in about 36 hours?

### Takeaway
A credible 36-hour demo is feasible with Baltic data that needs no API key:
- the **Baltic Transparency Dashboard** API via `baltic-py` (MIT, no key): imbalance prices, balancing-energy prices, mFRR bids and more;
- **Elering's API** via `elering-py` (MIT, no key): Nord Pool day-ahead prices for LV/LT/EE/FI and frequency;
- for BBCM **capacity prices**, the tables in AST's 2026 evaluation report or the token-based Balancing Services API.

On the modelling side, **NREL BLAST-Lite** (`pip install blast-lite`, BSD-3) includes a **Nissan Leaf second-life LMO cell model** and an LFP model for degradation. **PyPSA 1.4.0** (MIT, HiGHS solver) or a small linear programme handles dispatch. **Stanford's second-life aging dataset** and **PulseBat** (464 retired EV batteries) support state-of-health screening. PyBaMM's physics models are overkill for 36 hours.

### Cited Findings

**Market data and APIs**
- **Baltic Transparency Dashboard** (`baltic.transparency-dashboard.eu`): run jointly by the Baltic TSOs since 2 Jun 2021, with export and **API** access, designed for 15-minute balancing and imbalance settlement periods. — [Litgrid, 3 Jun 2021](https://www.litgrid.eu/index.php/news-events-/news/introducing-new-baltic-transparency-dashboard/31516)
- **`baltic-py` 0.4.0** (10 Oct 2026; MIT; Python ≥3.11; standard library only; "The API is public and unauthenticated"):
  - 65 report IDs across Activations, Balancing, Bids, Capacities and Reserves.
  - Examples include `imbalance_prices`, `imbalance_volumes_v2`, `balancing_energy_prices`, `neutrality_component`, `mfrr_bid_prices` and `current_balancing_state_v2`.
  - Usage: `baltic.export("imbalance_prices", start=..., end=...)`.
  - Not affiliated with the TSOs.
  — [PyPI baltic-py](https://pypi.org/project/baltic-py/)
- **`elering-py` 0.2.0** (26 Sep 2026; MIT; no key):
  - Wraps Elering's open API: `nps` day-ahead prices for **EE, FI, LV, LT**, system data including frequency, balance, transmission flows and capacity, and more.
  - Requests longer than one year are split automatically.
  — [PyPI elering-py](https://pypi.org/project/elering-py/)
- **Balancing Services API** (balancing.services):
  - Covers imbalance prices and volumes, balancing-energy prices, volumes and bids, and **balancing-capacity bids, prices and procured volumes**. Examples use area `EE`.
  - It **needs a bearer token**.
  - The CLI v1.13.0 (22 May 2026, MIT) is deprecated in favour of the `balancing-services` Python library or MCP server.
  — [PyPI balancing-services-cli](https://pypi.org/project/balancing-services-cli/)
- **ENTSO-E Transparency Platform:** has a page for procured balancing capacity. — [ENTSO-E](https://transparency.entsoe.eu/balancing/r2/procuredCapacity/show)
  - A Python wrapper exists (`entsoe-py`, fork based on EnergieID's project). — [GitHub bfauser/entsoe-py](https://github.com/bfauser/entsoe-py)
- **AST BBCM Evaluation Report 2026:** gives monthly and period capacity prices by area and product, HHI concentration, and procured volumes and costs. Useful for calibration and validation. — [AST](https://www.ast.lv/sites/default/files/editor/Pakalpojumi/Regulesana/Citi_materiali_10_2025/BBCM%20Evaluation%20report%202026.pdf)
- **Other RTU work:** an RTU "BBEMA: Dashboard for Baltic Balancing Energy Market Analysis" exists (title only). — [RTU ORTUS](https://ortus.rtu.lv/science/en/publications/32555)
  - An RTU/LBTU poster models a data-driven small-scale storage aggregator with EV smart charging: a 1 MW charger aggregate and a 278-car fleet, with a claimed 20–30% improvement over unmanaged charging (metric unclear). — [CONECT 2024 poster](https://conect.rtu.lv/wp-content/uploads/Girts_Aleksans_CONECT-2024-poster-PC_Consulting-1.pdf)

**Battery degradation, dispatch and EMS tools**
- **NREL BLAST-Lite:**
  - **Install and licence:** `pip install blast-lite`, BSD-3-Clause, Python and MATLAB.
  - **Models:** **LFP-Gr 250 Ah prismatic**, Sony Murata LFP, several NMC (incl. LG M50 NMC811-GrSi), NCA, NMC-LTO, and **"Nissan Leaf LMO-Gr (2nd-life cells)"**.
  - **Inputs and helpers:** the main input is a state-of-charge time series plus temperature. It ships stationary application profiles (Kucevic et al.) and an `example_stationary_storage_life.ipynb`. The climate-data helper (NSRDB) needs an API key.
  - **Caveats:** pack life is often **20–30% shorter than cell life**. The models do not capture overcharge, physical damage or cell imbalance.
  — [GitHub NREL/BLAST-Lite](https://github.com/NREL/BLAST-Lite); [NREL software page](https://www.nrel.gov/research/software/blast-lite--battery-lifetime-analysis-and-simulation-tool---lite)
- **PyPSA 1.4.0** (9 Oct 2026; MIT; Python ≥3.11): covers economic dispatch, inter-temporal storage, unit commitment and linear optimal power flow. HiGHS is installed by default (GLPK and CBC are other free solvers). Install with `pip install pypsa`. — [PyPI pypsa](https://pypi.org/project/pypsa/)
- **PyBaMM:** "Fast and flexible physics-based battery models in Python" (repo title only). — [GitHub PyBaMM](https://www.github.com/pybamm-team/PyBaMM)
- **OpenEMS:** an open-source energy management system (GitHub topic listing only; details not verified). — [GitHub topic](https://www.github.com/topics/energy-storage)

**Second-life and state-of-health datasets**
- **Stanford second-life aging dataset** (Moy, Khan, Fasolato, Pozzato, Allam, Onori; *Data in Brief* 57:111046, Dec 2024):
  - **Cells:** 6 of 10 INR21700-M50T cells (NMC / graphite-silicon), previously cycled for **23 months on an EV drive profile**.
  - **Test:** then **24 months of second-life testing** under synthetic residential and commercial **grid-storage duty cycles** at 20/35 °C, with reference performance tests (capacity, pulse power) and impedance spectroscopy (EIS) at 3 states of charge.
  - **Hosting:** Open Science Framework; licence not stated.
  — [DOAJ record](https://doaj.org/article/3db6f545f0f94ff2b4e82e4a8f9d8a0c)
- **PulseBat:** **464 retired EV Li-ion batteries** (NMC, LMO, LFP) tested with a multidimensional rapid pulse test, labelled for state of health, state of charge and cathode type. Hosting and licence are not confirmed. — [Moonlight review of the PulseBat paper](https://themoonlight.io/review/pulsebat-a-field-accessible-dataset-for-second-life-battery-diagnostics-from-realistic-histories-using-multidimensional-rapid-pulse-test)
- **"Long-Term Sweat Testing Dataset for Second-Life Batteries":** in PubMed Central (title only; the page was blocked). — [PMC12185753](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12185753/)

### Inferences: a 36-hour MVP blueprint
- **Concept:** a "second-life balancing twin" for one Latvian site.
  - **Inputs:** a site type (EV charging hub on a weak 0.4 kV fuse, telecom or backup site, workshop or depot), a battery made of graded modules (e.g., 200 kWh / 100 kW at state of health 75–85%), and the last 3–12 months of real Baltic prices.
  - **Output:** an optimised revenue stack, years to end of life, and a comparison with a new LFP unit.
  - **Design rationale:** it targets the niches that survive saturation (backup and weak grids) rather than pure balancing.
- **Data layer (≈4 h):**
  - LV day-ahead prices from `elering-py`, which needs no key.
  - Imbalance and balancing-energy prices from `baltic-py`, also key-free.
  - BBCM capacity prices: hard-code the LV monthly averages from AST's 2026 report, or pull them from the Balancing Services API if a token is obtained before the event.
  - Do **not** depend on ENTSO-E unless a token is already in hand.
- **Optimiser (≈8–10 h):** a linear programme over 15-minute periods solved with HiGHS (via PyPSA or directly).
  - **Decisions:** capacity offered to aFRR/mFRR up and down, day-ahead charging and discharging, and the site import limit.
  - **Constraints:**
    - the import limit equals fuse amperes × 0.6436 kW at 0.4 kV;
    - energy headroom for each reserve commitment;
    - a backup state-of-charge floor;
    - the ST per-kWh fee on grid charging;
    - an R-1 fee if export exceeds permitted load.
  - **Outer loop:** search over fuse size and tariff plan (Pamata, Jaudīgais or Speciālais, 2027 values) to show connection right-sizing.
- **Degradation (≈4 h):** feed the optimised state-of-charge profile to BLAST-Lite. Use `Nissan Leaf LMO-Gr (2nd-life)` for a second-life pack and the 250 Ah LFP model for the new-LFP comparison. Apply the 20–30% pack derating. Report years until state of health falls to ~60% and a degradation cost per MWh. Optionally feed a throughput penalty back into the optimiser.
- **State-of-health grading (≈4 h, optional):** a simple regression or classifier on PulseBat or the Stanford data showing incoming-module screening. Store the result as a mock **battery-passport** JSON (this links to the 18 Feb 2027 obligation).
- **Economics view (≈4 h):**
  - A revenue waterfall in €/kW/yr and €/kWh/yr: balancing capacity, minus the aggregator share (15/25/35% scenarios), plus activation and imbalance value, plus arbitrage, minus network fees, plus capacity-fee savings, plus avoided connection upgrade (user input), plus a backup value (user input).
  - Sensitivities to −30% and −50% balancing prices (saturation).
  - A break-even second-life €/kWh vs new LFP at ~€240/kWh installed (Enefit benchmark).
- **Acceptance layer (≈3 h):** a public "safety and community" page per site showing chemistry, container and spacing, detection and suppression, the fire-service plan, live temperature and state-of-charge status, and a community-benefit split (for example x% of revenue to a local school). The design draws on the survey findings: suppression, transparency and bills.
- **Pitch and buffer (≈4–6 h):** frame the demo around the Latvian facts:
  - capacity fees are based on contracted capacity;
  - Latvian aFRR prices were higher than Estonia's;
  - Lithuania's battery boom is driving saturation;
  - the TSO batteries exit around 2028.
- **What not to do in 36 h:** physics-based PyBaMM simulations, full PyPSA network models, real-time AST/aggregator integration, or claims of guaranteed revenue. Label every aggregator share and capex number as an assumption.

### Gaps
- Exactly which BBCM **capacity-price** reports are exposed by the Baltic Transparency Dashboard API was not confirmed. `baltic-py` lists 65 reports, but the page names no capacity-price ID.
- The process for obtaining an ENTSO-E security token and a Balancing Services API token was not verified.
- Nord Pool's own API terms were not checked; Elering republishes the day-ahead prices.
- PulseBat and Stanford dataset hosting URLs and licences are not confirmed (Stanford's data are on OSF).
- The contents of the "Long-Term Sweat Testing" dataset are unknown (page blocked).
- AST's FRR dimensioning forecast 2026–2035 (which could feed a demand-growth scenario) was found but not read: [AST PDF](https://www.ast.lv/sites/default/files/editor/FRR_dimensioning_forecast_2026-2035_ACEol.pdf).
