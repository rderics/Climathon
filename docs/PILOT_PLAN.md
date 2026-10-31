# Pilot plan: battery-first diagnostic reports for garages and importers (no scanner)

Option decided 31 Oct 2026 (Rinalds: "plan the pilot"). Based on docs/DIAGNOSTIC_CENTER.md and docs/CHECKED_ITEMS.md; every number marked *estimate* is ours and must be replaced with a quote. Purpose: **learn whether anyone pays for a decision-ready battery report, at what price, and whether it brings us take-back leads.** It is not designed to make money; the budget is capped.

## 1. What we test
**Product:** one electronic report per EV, in 24 hours, that a garage or importer can act on: battery state of health (SoH), fault codes (DTCs), battery and underbody photo checklist, our **green / yellow / red grade**, and a plain "what to do next" line.
**Hypotheses**
1. Used-EV importers and independent garages will pay **€50–90** per report. (Market anchors: Riga providers €60–130 per test; AVILOO retail about €79–99; partner cost about £35.)
2. A report with a recommended action changes a decision (price, repair, rejection, sale) in at least 1 of 3 cases.
3. At least 1 in 5 reports gives us a take-back, second-life or parts lead (low SoH, damaged casing, owner wants to sell, garage wants a service).
4. We can deliver a report with a variable cost under about €65 and under 2 hours of work.

## 2. Scope: 30–50 cars in 8 weeks, no scanner
| Item | Choice |
|---|---|
| Battery SoH method | A **licensed partner method**, not our own invention. Ask AVILOO (UK partner price £35 per test, no minimum, or £35/month unit; Baltic terms not found), TÜV NORD BatterieCheck, DEKRA and TEXA for Baltic partner terms. Fallback: our current test provider. State plainly which method each report uses. |
| Other data | Read fault codes and battery data with an EV-capable tool (an Autel EV kit is about USD 1,095, vendor price). |
| Visual check | Human checklist at a partner garage: 6–10 phone photos of underbody, pack casing, shields, leaks, tyres, warning lights. No opening of the high-voltage system. |
| Report | PDF plus a link or simple data file; owner consent recorded. |
| Not in scope | Scanner lane, own SoH algorithm, battery removal or opening, certification claims. |

## 3. Customers to approach (target 2–3 importers, 3–5 garages)
- **Used-EV importers** and dealers in Riga (the concentrated buyers; used imports outnumber new about 2:1, and the new subsidy favours recently registered used cars).
- **Independent garages** that service EVs but lack tools or confidence (most garages outside the big cities do not service EVs).
- **Leasing and rental fleets** (one conversation each; they already worry about battery value).
Offer: first 5 reports at a discount for feedback and a price test. Use three price points across customers: **€50, €70, €90**, written on the offer, not negotiated per car.

## 4. Week-by-week
| Week | What happens | Output |
|---|---|---|
| 0 | Decide the method; ask 4 vendors for Baltic partner terms; ask insurer for a quote; draft consent and data-processing text (get a lawyer to check) | Method chosen, insurance answer |
| 1 | Buy or rent tools; train in HV safety as required (qualification needed: to confirm); build report template and checklist; test on 3 team or friends' cars | Template, 3 practice reports |
| 2 | Sell: visit 10 importers and garages; book first cars | 8–10 booked cars |
| 3–6 | Run reports (about 8–10 a week); log time, price, customer comments; ask each customer "what did you do after the report?" after 1 week | 30–50 reports, log |
| 7 | Price and decision analysis; call every customer for a short interview | Evidence table |
| 8 | Decision meeting against the gates below | Go / change / stop |

## 5. Budget and stop-loss
Per-car variable cost (*estimate*): licence or test fee about €40, technician time about 1.5 h (about €22 at €14.6 loaded per hour, Latvian average wage), admin and photos about €5, so **about €65–70 per car**. At €70 the margin is about zero; at €90 about €23. **The pilot will not pay for itself**; it buys information.
Fixed pilot costs (*estimate*): tool or licence €1–5k, HV safety training and insurance (unknown, get quotes), part-time technician about €1.2k/month if paid, report template and portal (use a spreadsheet and PDF generator; no custom app). **Cap the total cash spend at an amount the team agrees in advance (suggested ceiling: about €8–10k, to be confirmed with quotes).** Rules: pay vendors per test (no minimum, no annual contract), no equipment over about €2k, no hires, stop at week 4 if fewer than 8 paid reports.

## 6. Success gates at week 8 (proposed thresholds)
| Measure | Go | Change | Stop |
|---|---|---|---|
| Paid reports | 25 or more | 12–24 | under 12 |
| Price accepted without discount | €70 or more | €50–69 | under €50 |
| Customers who ordered again | 2 or more | 1 | 0 |
| Reports that changed a decision (customer's own word) | 30% or more | 15–29% | under 15% |
| Leads for take-back, second life or parts | 20% or more | 10–19% | under 10% |
| Variable cost per report | under €65 | €65–80 | over €80 |
Go = scale to more customers and add take-back as the second step. Change = adjust product or price. Stop = keep the take-back broker plan only.

## 7. Legal, data and liability checklist
- **Consent:** owner signs that we may read battery and fault data and send the report to the named garage or importer (VIN plus owner plus repair place is personal data). Data processing agreement with each garage; keep data minimal; delete on request; retention period stated.
- **Data access:** under Regulation 2023/1542 Art. 14 independent operators may read battery data (confirm on EUR-Lex); OEM gateways may still block some cars; list which models fail.
- **Liability:** the report states method, date, conditions and accuracy limits (the BMS number can differ from real capacity; published studies show weak correlation for some makes) and gives a grade, not a guarantee. Professional-liability cover quote needed. Never write a repair instruction that requires opening the HV system.
- **Safety and qualification:** no HV work beyond reading data and visual checks; confirm which electrician or HV qualification applies to the person doing the tests (not researched).
- **Claims:** do not call the report a certificate or an inspection; do not claim scanner or imaging capability.

## 8. Report fields (one page)
Car (make, model, year, VIN last 6, mileage); date, method and tool; battery SoH with method note; cell or module spread and temperature if available; fault codes with plain meaning; insulation or isolation warning if read; underbody and pack casing photos with a tick list; grade (green no issue / yellow check / red stop and call); recommended action in one sentence; offer lines: "take-back or sale of the pack at end of life: tick if interested". Consent line and disclaimer.

## 9. What we say to customers
Importer: "A battery report per car within 24 hours, with a grade and a photo check, for €X. Buyers pay more when they see a certificate; we also take the pack back when the car is scrapped." Garage: "We do the battery and underbody check you lack tools for, and you get a clear what-to-fix sheet."

## 10. Risks
- Crowded SoH market (AVILOO, DEKRA, TÜV NORD, local providers at €60–130); mitigate with the grade, photo check, 24-hour turnaround and the take-back link, not with a lower price.
- Wrong numbers or missed damage; mitigate with the method note, a human photo check and the disclaimer.
- Low demand in Latvia: no Latvian willingness-to-pay data exists; that is what the pilot measures.
- No capacity for a lane: a scanner lane (about €150,000 purchase) stays out of scope until the pilot proves demand.

## 11. First actions (this week)
1. Email AVILOO, TÜV NORD, DEKRA and TEXA for Baltic partner terms and per-test cost.
2. Ask one insurer for a professional-liability quote for diagnostic reports.
3. List 10 importers and 10 garages in Riga and book 5 calls.
4. Draft the consent text and report template; have a lawyer check them.
5. Agree the cash cap and the week-8 gates in writing.
