# Climathon RTU — Challenge Evaluation & Solution Ideas

30 Oct 2026 · Juris Vitols

## The challenges at a glance

Three challenges are on the table: two circular-economy briefs that ask for a concrete tool, and one open green-mobility brief. Teams choose at 18:30 on 30 Oct; pitches run 1 Nov, 12:30–14:00. The jury scores innovation, feasibility and potential for further development ([Climathon RTU](https://climathon.rtu.lv/)).

| Challenge | Owner · vertical | What they want | Hard requirements |
| --- | --- | --- | --- |
| Measuring the climate impact of packaging recycling | Latvijas Zaļais punkts · circular economy | A prototype CO₂e calculator (digital tool or Excel) for collecting, transporting, sorting and recycling plastic packaging, especially LDPE film | 2025 data and cited emission factors; GHG Protocol and LCA principles; at least two scenarios compared; recycled-vs-virgin savings; extendable to cardboard and glass; recyclers in six countries |
| Second life for grid materials | Sadales tīkls · circular economy | A tool, decision model or process that picks the best next use for surplus or written-off material: reuse, refurbish, sell, donate or recycle | Weighs technical condition, cost, demand and environmental impact; matching cable remnants to new projects is especially wanted |
| Second life for EV batteries | EIT Urban Mobility Hub · green mobility | Ideas that reuse EV batteries after vehicle use, extend their life and cut resource use | Open brief: no data, format or deliverable specified |

## Evaluation: which challenge to pick

Best odds: Sadales tīkls. Safest build: Latvijas Zaļais punkts. EV batteries has the highest ceiling, but the most competition and the hardest path to something real by Sunday.

|  | Packaging GHG model (LZP) | Grid materials (Sadales tīkls) | EV batteries (EIT Urban Mobility) |
| --- | --- | --- | --- |
| Climate impact | Medium: it measures, but steers route and recycler choices | Medium: every reused metre of cable avoids new copper and plastic | Medium now, high later: few packs retire in Latvia yet |
| Ease to build by Sunday | High: Excel or web calculator on their 2025 data | Medium-high: a process plus a matching prototype; needs their inventory data | Low for hardware; high for software or service ideas |
| Public acceptance | High: nobody has to change behaviour | High: saves a state-owned company money; field crews' buy-in is the hurdle | Mixed: fire fears near homes, strong support for clean, quiet power |
| Likely competition | Medium-high: the clearest brief | Low-medium: B2B and unglamorous | High: the most exciting brief |
| How to win | Make the number defensible, not just computed | Deliver the cable matching they asked for, with a field-ready capture step | Pick a niche that new grid batteries cannot serve |

Competition is my estimate; the other ratings rest on the briefs and the sources below.

**Why EV batteries is hard.** Few packs retire locally yet: Latvia had 12,991 electric cars on 1 Oct 2025, most registered since state support began in 2022 ([LSM](https://www.lsm.lv/raksts/zinas/latvija/26.10.2025-elektroauto-parslogo-rigas-stavvietas-drizu-risinajumu-var-nebut.a619883/)). Grid-scale storage uses new packs: Sunly and Rolls-Royce are building four Latvian systems totalling 490 MWh, the first in Valmiera in Q1 2027 ([Rolls-Royce](https://www.rolls-royce.com/media/press-releases/2026/04-06-2026-rr-wins-contract-from-sunly-for-large-scale-battery-storage-in-latvia-and-strengthens-its-position-as-the-leading-supplier-of-battery-storage.aspx)). A repurposed pack also counts as newly placed on the market, so the repurposer is treated as a manufacturer and needs a new battery passport ([Arianee](https://www.arianee.com/en/blog/do-recycled-batteries-need-a-battery-passport)).

**Why Sadales tīkls is promising.** Cable reuse already works elsewhere: VINCI Energies' Circable sells reconditioned offcuts in France at the price of new cable and says reuse cuts emissions by at least 90% ([The Agility Effect](https://www.theagilityeffect.com/en/article/scaling-up-the-reuse-of-electrical-cables/)). VINCI's Marius Hämmerle is one of the on-site experts.

**Why LZP is safe.** The deliverable is fully specified, and LZP's Laura Berga plus LCA specialist Līga Puzule (RTU) are on site to check your method.

## Solution ideas

Twelve ideas, four per challenge, each buildable as a prototype by Sunday and easy for the public or the owner to accept. The codes (A1, B2…) match the map under Top picks.

### Packaging GHG model (Latvijas Zaļais punkts)

1. **A1 · Joint-benefit view.** Show the whole chain's net saving first (collector, recycler and regranulate buyer together), then how cut-off and the EU Circular Footprint Formula split it. Swedish LCA researchers suggest this joint framing because allocation rules can blunt or even reverse the incentive to recycle ([Ekvall et al., 2021](https://research.chalmers.se/en/publication/527837)). One spreadsheet, three summary rows, every number traceable. *Ease high · acceptance high.*
2. **A2 · Route switch.** For each lot of baled film, compare the partner recyclers in the six countries on haul distance, grid electricity and process yield, with CO₂e shown next to cost. It turns a reporting tool into a routing decision LZP can make every week. Partners may resist being ranked, and getting each recycler's energy data is the hard part. *Ease medium · acceptance medium.*
3. **A3 · Clean-film lever.** A slider for contamination and moisture in collected film, since rejects are hauled and processed before being burned or landfilled. Yield then visibly drives the net saving, giving LZP a data-backed message for municipalities and households. *Ease high · acceptance high.*
4. **A4 · Sorting receipt.** A monthly one-page receipt per municipality: what the sorted film became and the CO₂ it saved, reachable by QR code on sorting containers. It answers the question every sorter asks: does this matter? *Ease medium (design and per-area data) · acceptance high.*

Build every stage as a generic block (collect, haul, sort, recycle, substitute) with one parameter sheet per material, so cardboard or glass needs a new sheet, not a new model.

### Grid materials (Sadales tīkls)

1. **B1 · Weigh, don't measure.** When a job ends, the crew hangs the drum on a crane scale and scans its QR tag; the app turns weight minus drum tare into metres using the cable's mass per metre. That gives a trustworthy remnant inventory with no tape measure. It only sticks if it beats today's routine, so ask Rimants Jeļinsks how remnants are logged now. *Ease high · acceptance medium (a new habit for crews).*
2. **B2 · Remnant-first design check.** When an engineer drafts a bill of materials, the tool first searches remnants by cable type, cross-section, length and depot distance, and proposes which segments they can cover. Short runs such as customer connections are the natural fit; new drums cover only the rest. A spreadsheet plus a simple greedy matching script is enough for Sunday. *Ease medium · acceptance high.*
3. **B3 · Next-use ladder.** A one-page scored card for any surplus item: reuse, refurbish, sell, donate or recycle, each scored on condition, cost, demand and CO₂e. Finnish distributor Elenia already runs this ladder: good poles and transformers go back into the network, empty drums return to cable makers, the rest is recycled ([Elenia](https://www.elenia.fi/en/electricity-network/the-construction-off-the-electricity-network/the-construction-and-disassembly-of-the-electricity-network)). Transparent and auditable, which matters for a state-owned company. *Ease high · acceptance high.*
4. **B4 · Training-grade donations.** Offcuts and safe, de-energised equipment that fail the reuse test go to vocational schools and RTU labs for electrician training. The climate effect is small, but the goodwill is visible and it builds the skills the grid needs; exclude anything with oil or impregnated wood. *Ease high · acceptance high.*

Check before pitching resale or donation: Latvian scrap rules let dealers buy thick copper or aluminium cable scrap (cross-section over 85 mm²) only from grid-licence holders, an anti-theft measure that a 2025 draft amendment loosens ([TAP portal](https://tapportals.mk.gov.lv/annotation/49dfa85a-c6fd-4595-9038-560350910075/download/8c39b504-3cdf-4ff7-93b8-daac26147e7c)). For a first CO₂ figure, Circable counts about 3 kg CO₂ avoided per reused metre of building cable; swap in Sadales tīkls' own cable types once you have them ([The Agility Effect](https://www.theagilityeffect.com/en/article/scaling-up-the-reuse-of-electrical-cables/)).

### EV batteries (EIT Urban Mobility)

1. **C1 · Battery health certificate.** An independent State-of-Health test and certificate whenever a used EV is sold, offered by inspection stations or workshops with existing diagnostic tools. In UK tests of 8,000+ cars average health was above 95%, yet only 3% of 13,000 drivers felt confident buying a used EV and 38% said a certificate would change that ([pv Europe](https://www.pveurope.eu/e-mobility/uk-industry-bodies-push-mandatory-ev-battery-health-checks)). The cheapest second life is a longer first life, and a pilot needs just one workshop. *Ease high · acceptance high.*
2. **C2 · Pre-2027 history kit.** Packs sold before 18 Feb 2027 get no battery passport, so repurposers must rebuild their history from battery-management data that legal buyers may read ([Arianee](https://www.arianee.com/en/blog/do-recycled-batteries-need-a-battery-passport)). A Latvian service issuing a standard health-and-history record fills a gap the local industry named itself: too little battery testing infrastructure ([researchLatvia](https://www.researchlatvia.gov.lv/en/science-and-industry-join-forces-advance-battery-technologies-latvia)). Its first customer could be ENGYcell, a Latvian repurposer ([TREASoURcE](https://treasource.eu/treasource-webinar-giving-used-ev-batteries-a-second-life-insights-demos-transferability-across-europe-27-02-2026/)). *Ease medium (software plus a test bench) · acceptance high.*
3. **C3 · Silent power trailer.** A rentable second-life battery unit replacing diesel generators at Riga's outdoor events, markets, film sets and building sites. Zenōbē does this in the UK with roughly 130 kWh units built from retired bus batteries, including for film sets and a plant-hire partner ([Zenōbē](https://www.zenobe.com/insights-and-guides/zenobe-second-life-batteries-electric-buses-massive-attack-climate-accelerator-show/)). The new part is a local rental model, and the city could require diesel-free power at its own events. *Ease medium · acceptance high (no noise, no fumes).*
4. **C4 · Charger booster.** Second-life packs that charge slowly from a small grid connection and discharge fast into cars, at rural stops where grid upgrades are costly. TREASoURcE pilots found second-life storage particularly good at peak shaving ([CORDIS](https://cordis.europa.eu/article/id/466187-nordic-regions-turn-waste-streams-into-local-value)). Hardest of the four (integration and certification), but it links this brief to Sadales tīkls' connection costs. *Ease low · acceptance high.*

**Traps to skip.** Home storage from old EV packs in apartment blocks meets fire fears and full manufacturer-level certification (*ease low · acceptance low*). A grid-scale second-life park competes with the 490 MWh of new storage already contracted (*ease low · acceptance medium*).

**Deep dive.** Grid balancing with used EV batteries is explored in [GRID_BALANCING.md](GRID_BALANCING.md).

## Top picks

Pitch the Sadales tīkls remnant loop for the best odds; the LZP joint-benefit calculator and the EV health certificate are strong alternatives.

*Ease × acceptance map: five ideas are easy and accepted; the obvious storage pitches are not (ratings from Solution ideas, my judgment).*

| Idea | Ease of implementation | Societal acceptance | Status |
| --- | --- | --- | --- |
| A1 · Joint-benefit view | High | High | Top pick |
| C1 · Battery health certificate | High | High | Top pick |
| A3 · Clean-film lever | High | High |  |
| B3 · Next-use ladder | High | High |  |
| B4 · Training-grade donations | High | High |  |
| B2 · Remnant-first design check | Medium | High | Top pick |
| A4 · Sorting receipt | Medium | High |  |
| C2 · Pre-2027 history kit | Medium | High |  |
| C3 · Silent power trailer | Medium | High |  |
| C4 · Charger booster | Low | High |  |
| B1 · Weigh, don't measure | High | Medium |  |
| A2 · Route switch | Medium | Medium |  |
| Grid-scale second-life park | Low | Medium | Trap |
| Home storage in apartment blocks | Low | Low | Trap |

The rows marked top pick anchor the three pitches below; B2 sits at medium ease, but B1 and B3 carry the easy part of that pitch.

1. **Remnant loop (B1 + B2 + B3), Sadales tīkls.** Pitch: every leftover metre is weighed, tagged and offered to the next project before anything new is ordered. It is exactly what the owner asked for, likely faces the fewest rival teams, and its savings repeat on every project. Demo it on one real project: metres matched, euros saved, CO₂ avoided.
2. **Joint-benefit calculator (A1 + A3, with A4 as the public face), LZP.** Pitch: one honest number for the whole recycling chain, with the allocation choices shown rather than hidden. It meets every point of the brief and stands out from teams that ship a single total. Demo it by comparing two recycler routes for one 2025 lot of LDPE film.
3. **Battery health certificate (C1), EIT Urban Mobility.** Pitch: the cheapest second life is a longer first life. It sidesteps the crowded home-storage pitch, wins on acceptance, and C2 gives it a business path toward repurposers. Demo a mock certificate and a one-workshop pilot plan.

Before committing tonight, ask the owner what data you can use by Saturday and what a usable Sunday deliverable looks like, then test your pitch in the expert carousel (31 Oct, 11:30–15:00).

## Sources

- [Climathon RTU 2026](https://climathon.rtu.lv/) and its [English page](https://climathon.rtu.lv/eng/): challenges, schedule, jury criteria, experts
- [Rolls-Royce: Sunly battery storage contract in Latvia](https://www.rolls-royce.com/media/press-releases/2026/04-06-2026-rr-wins-contract-from-sunly-for-large-scale-battery-storage-in-latvia-and-strengthens-its-position-as-the-leading-supplier-of-battery-storage.aspx), 4 Jun 2026
- [Arianee: battery passports for repurposed batteries](https://www.arianee.com/en/blog/do-recycled-batteries-need-a-battery-passport), 25 Aug 2026
- [LSM: electric cars in Latvia](https://www.lsm.lv/raksts/zinas/latvija/26.10.2025-elektroauto-parslogo-rigas-stavvietas-drizu-risinajumu-var-nebut.a619883/), 26 Oct 2025
- [The Agility Effect: Circable cable reuse](https://www.theagilityeffect.com/en/article/scaling-up-the-reuse-of-electrical-cables/), Jan 2026
- [Elenia: what happens to decommissioned grid materials](https://www.elenia.fi/en/electricity-network/the-construction-off-the-electricity-network/the-construction-and-disassembly-of-the-electricity-network)
- [TAP portal: comments on scrap-metal rules, Cabinet Regulation No. 960](https://tapportals.mk.gov.lv/annotation/49dfa85a-c6fd-4595-9038-560350910075/download/8c39b504-3cdf-4ff7-93b8-daac26147e7c), May 2025
- [Ekvall et al.: Incentives for recycling and incineration in LCA](https://research.chalmers.se/en/publication/527837), 2021
- [pv Europe: UK push for EV battery health certificates](https://www.pveurope.eu/e-mobility/uk-industry-bodies-push-mandatory-ev-battery-health-checks)
- [researchLatvia: Latvia's first Battery Industry Day](https://www.researchlatvia.gov.lv/en/science-and-industry-join-forces-advance-battery-technologies-latvia), 25 Feb 2026
- [TREASoURcE webinar agenda (ENGYcell, Latvia)](https://treasource.eu/treasource-webinar-giving-used-ev-batteries-a-second-life-insights-demos-transferability-across-europe-27-02-2026/), 27 Feb 2026
- [CORDIS: TREASoURcE results in brief](https://cordis.europa.eu/article/id/466187-nordic-regions-turn-waste-streams-into-local-value), 26 Jun 2026
- [Zenōbē: second-life portable power](https://www.zenobe.com/insights-and-guides/zenobe-second-life-batteries-electric-buses-massive-attack-climate-accelerator-show/)
