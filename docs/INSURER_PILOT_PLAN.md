# Pilot plan: post-crash EV assessment with one Latvian insurer

Decided 31 Oct 2026 (Rinalds: "plan insurer pilot"). Built from docs/POST_CRASH_SCAN.md (sources and caveats there; research not yet reviewed line by line). Figures marked *estimate* are ours. **This pilot proves process and acceptance, not savings rates.**

## 1. What we test
**Idea:** after a crash of an EV (or hybrid) a qualified technician follows a standard, non-destructive protocol within 24 hours of the tow and gives the claims handler a short advisory verdict on the traction battery, so the insurer can shorten or avoid tow, removal and quarantine cost and avoid a premature write-off or full pack swap.
**Hypotheses**
- **H1:** a standard protocol (modelled on the Swiss SVV annex) produces a decision the insurer would use in a measurable share of triggered claims.
- **H2:** that decision saves more than the assessment costs.
**Honest starting point:** the central estimate is about €435 gross saving per assessed claim (low about €40, high about €1,700) from unmeasured assumptions: the battery matters in about 2% of EV collision claims (Allianz sample, about 8 cases); the share of cases where a scan changes the outcome (we assumed 15%) has no source. A price of €150–200 therefore leaves the insurer about €235–285 net in the central case and nothing in the low case.

## 2. The volume constraint (drives the design)
We estimate only about 57 triggered cases a year across Latvia (*estimate*). One insurer with a 20–30% share would see 2–3 live cases in 8 weeks, so the pilot combines a **retrospective review of past claims** with a **small live arm** and counts hybrids and plug-ins to raise volume.

## 3. Partner and approach
**Profile:** an insurer with a CASCO book that includes imports and young EVs, a claims head willing to share anonymised claim files, and a tow partner. Candidates to approach (none contacted): BTA, Balta, If, ERGO, Compensa, Gjensidige. Do not name any as a partner on the page or in the pitch until they agree in writing.
**First meeting (30 minutes) script**
1. Problem: "EV towing cost about double in Allianz's 2025 data; packs get written off after minor bracket damage (Thatcham); nobody in Latvia has an independent protocol."
2. Ask: "20–40 anonymised EV or hybrid claim files from the last 24 months with cost lines, and permission to assess triggered cases for 8 weeks at no or nominal cost."
3. Offer: free retrospective report, then live advice, with a written report at the end.
4. Ask the claims head: what would make you buy at €150–250 per assessment or a share of verified savings?
Also approach one tow firm and one leasing company as a fallback customer group.

## 4. Protocol (advisory only)
Based on the Swiss SVV/ASS annex "Analysis of HV batteries" (voluntary guideline, signed 31 Oct 2025, published Mar 2026; OEM instructions always prevail):
1. **Event review:** police or hand-over report, rollover, shifted mounting points, intrusion, airbag and pyrotechnic deployment.
2. **Hazard check at the scene or yard** (HV1 + HV2 minimum): heat, smoke, leaks, whether quarantine is needed.
3. **Visual check on a lift:** casing dents, cracks, holes, leaks, water, heat above 60 °C, connectors and bolts.
4. **Data read:** fault codes, state of charge, cell and module voltages and temperatures, insulation values, state of health, pyrofuse status.
5. **Outcome categories:** functional / repairable / damaged-defective / significantly damaged-critical. Per the guideline, casing deformation of 10 mm or more, holes, water in the pack, fire involvement or sustained heat above 60 °C means "no further testing, treat as disposal".
**Wording rule:** never write "safe". Write "no gross damage found at time of test" and state method, date, conditions and limits. Our verdict is advice; the OEM's repair rules and the claims handler decide.

## 5. Weeks
| Week | Work | Output |
|---|---|---|
| 0–2 | Confidentiality and data-sharing agreement; GDPR data-processing terms; protocol written; qualified technician (HV2/HV3) or certified partner; BMS/OBD reader and insulation tester; professional-liability quote; agree trigger (airbag fired, underbody or casing impact, towed from scene) | Signed agreement, tools, insurance answer |
| 2–4 | **Retrospective arm:** 20–40 anonymised claim files; blind review; record where the protocol would have changed a decision and at what cost | First Latvian data on battery share and cost distribution |
| 3–9 | **Live arm:** every triggered EV claim assessed within 24 h of the tow; verdict as advice; the usual route (dealer or expert) continues in parallel as the reference; follow each cleared pack for at least 90 days where possible | Case log |
| 9–10 | Joint review, written report, decision on a paid phase | Go, change or stop |

## 6. What we measure
1. Time from crash to decision versus the insurer's baseline.
2. Tow, removal, storage and quarantine days and cost versus baseline.
3. Agreement of our verdict with the dealer or expert verdict (the reference).
4. Cases where our verdict would have changed the decision and the estimated cost difference.
5. Any false clear (a pack we cleared that later shows a fault).
6. Our time and cost per assessment.
7. The insurer's willingness to pay per case, asked directly at the end.

## 7. Gates (proposed, to agree with the insurer)
| Gate | Go | If it fails |
|---|---|---|
| Turnaround within 24 h in live cases | at least 90% | fix logistics or stop |
| False clears | zero; and at least 80% agreement with the reference | **stop** |
| Cases where the decision plausibly changed, with a documented saving | at least 1 | repackage for tow firms or leasing |
| Estimated savings versus price per assessment on reviewed cases | at least 2x | change price or scope |
| Named claims-head sponsor who writes that they would buy at €150 or more, or on shared savings | yes | repackage for tow firms or leasing |

## 8. Price and budget
- **Price:** free or at cost for the retrospective review (the insurer gives data and time); live cases at a nominal €0–100 so the insurer has a stake; test the real price at the end: €150–250 per mobile assessment, about €80–120 at a fixed site, or 10–15% of verified avoided cost.
- **Our cost per assessment** (*estimate*): technician 2–3 hours, tools, travel and insurance, about **€120–200**. At €150–200 the margin is near zero in the low case; the pilot is for learning.
- **Pilot budget** (*estimate*): equipment about €2–4k (an insulation tester is about €1.8k, a diagnostic reader about €1.1k, vendor prices), 5–15 live assessments about €1–3k, plus unknown HV training, professional-liability cover and legal review. **Cap the cash spend in advance (suggested about €6–8k, to confirm with quotes).** No hires; contractors paid per case.

## 9. Legal, safety and data checklist
- **Liability:** a clearance followed by a fire exposes the assessor. Get professional-indemnity cover first, limit the scope in writing and in the report, and let the contract place the repair and write-off decision on the insurer and OEM rules.
- **Qualification and safety:** under the Swiss guideline (section 3.1) the hazard analysis and the non-destructive function analysis need HV1 + HV2 or equivalent; HV3 (work under voltage) is needed only when live components (connectors, modules, cells) are worked on, checked or analysed, which this protocol does not do. Confirm the Latvian equivalents and who may touch a damaged HV system. A pack could ignite later; no storage of packs at our premises during the pilot.
- **Data protection:** VIN, plate, location, claim data and BMS or crash data link to a person, so GDPR applies: data-processing agreement, lawful basis, minimal data, retention and deletion terms (not researched in depth; lawyer to check).
- **Conflict of interest:** we must not be the insurer's assessor and the buyer of the packs we judge. Keep the take-back business separate and disclose any link.
- **Transport and waste:** damaged lithium packs fall under ADR special provisions and are likely hazardous waste if written off; we do not move or take packs in this pilot.
- **Claims to avoid:** no "safe", no "certificate", no claim that a scanner can see battery health, no naming of the insurer without written consent.

## 10. Risks
- **Volume:** only a handful of live cases; results show process, not statistics.
- **OEM rules override:** some OEMs require pack replacement after airbag deployment; a third-party scan cannot change that.
- **Acceptance:** insurers may refuse to rely on a third party because of liability.
- **Delayed fires:** one-time checks cannot rule out later events (a US government test of a Chevrolet Volt ended in a fire 21 days after the crash).
- **Quarantine costs are falling** (VW and BMW cut initial quarantine to 24 h with temperature monitoring), which shrinks the saving.

## 11. Data check (31 Oct 2026, against primary documents)
| Figure in this plan | Result | Source |
|---|---|---|
| Sample of 400 Allianz EV collision claims, year 2021; HV battery damaged in 2% of claims and about 7% of claim cost | **Confirmed** (the study also checked the full 2021 claims base and says it confirmed the data) | AZT Automotive, collision damage analysis of HV vehicles (14-page PDF, German) |
| 5 cases needed a full pack swap at €13,300–43,300; 3 more saved by a casing swap at €1,100–2,200 | **Confirmed.** The study says the 5 were underbody damage and only 1 case was intrusion | same |
| Swiss guideline: version 9, signed 31 Oct 2025; non-destructive; categories functional / repairable / damaged-defective / significantly damaged-critical; deformation of 10 mm or more, a torn casing or holes, heat above 60 °C on the casing, water in the battery | **Confirmed** (the 10 mm and 60 °C criteria sit in the "significantly damaged, critical: battery must be disposed of" rows) | SVV / LiBaService24 annex "Analyse von HV-Batterien" (25-page PDF) |
| HV qualification | **Corrected**: HV1 + HV2 for the hazard and function analysis; HV3 only for work on live components. Earlier text said HV3 for live work generally | same, section 3.1 |
| Guideline is voluntary | **Confirmed in substance**: it states it replaces no law and excludes liability; "voluntary" is our wording | same, section 2.1 |
| 35,617 road accidents reported to insurers in Latvia in 2025 (34,571 in 2024) | **Confirmed** | LTAB press release 15 Jan 2026 |
| Chevrolet Volt fire 21 days after a crash test | **Confirmed**; NHTSA's own text says delayed thermal heating and pressure release; one lab test with a rollover, GM disputed the procedure | NHTSA INOA-PE11037 |
| About 12,991 EVs in Latvia (1 Oct 2025) | **Not verified** against CSDD; secondary source only | LSM 26 Oct 2025 |
| About 57 triggered cases a year; €435 saving; 15% outcome-change share; €120–200 cost per assessment | **Our estimates, not data.** They cannot be validated until the pilot runs | this plan |
| Tow and quarantine rates (LG Koblenz €76/day etc.), Thatcham, VW/BMW 24 h quarantine | **Not re-checked in this pass**; as reported in docs/POST_CRASH_SCAN.md | see that file |

## 12. First actions (this week)
1. List the six candidate insurers and find the claims-head contact at each; book 3 first meetings.
2. Get a professional-liability and a general quote from one broker; ask which HV qualification applies in Latvia.
3. Write the one-page protocol and the case-log template (fields in section 6).
4. Draft the data request and the confidentiality and data-processing terms; have a lawyer check them.
5. Agree the cash cap and the gates with the team in writing.
