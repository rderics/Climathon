# Post-crash check: costs, revenue, profit (31 Oct 2026)

A model on our own estimates, not a forecast. Inputs come from docs/INSURER_PILOT_PLAN.md and docs/POST_CRASH_SCAN.md; the fixed cost line is a placeholder assumption (no quotes yet).

## Inputs
| Input | Value | Basis |
|---|---|---|
| Price per check | EUR 200 (range 150-250) | our estimate, tested only in a pilot |
| Our cost per mobile check | EUR 160 (range 120-200) | technician 2-3 h, tools, travel, insurance; our estimate |
| Cost per check if cheaper (fixed site or partner garage) | EUR 100 | our target, unverified |
| Fixed costs per year | EUR 12,000 | ASSUMPTION: liability insurance, HV training, legal, accounting, kit depreciation. Not quoted. |
| Checks per year, Latvia | 57 | our estimate (about 570 EV accidents x 10% trigger) |
| Checks per year, Baltics | 200-300 (model uses 250) | our estimate |
| Insurer saving per check | about EUR 435 (low 40, high 1,700) | our estimate from AZT/Allianz claim data |
| Pilot cash cap | EUR 6-8k | our proposal |

## Scenarios (per year)
| Scenario | Revenue | Variable cost | Fixed | Profit |
|---|---|---|---|---|
| Latvia only: 57 x 200, cost 160 | 11,400 | 9,120 | 12,000 | **-9,720** |
| Baltics: 250 x 200, cost 160 | 50,000 | 40,000 | 12,000 | **-2,000** |
| Baltics, cheaper checks: 250 x 200, cost 100 | 50,000 | 25,000 | 12,000 | **+13,000** |

Break-even checks = fixed / (price - cost per check): 12,000 / 40 = 300 a year at EUR 160 cost; 12,000 / 100 = 120 a year at EUR 100 cost.
Insurer net gain per check at price EUR 200 and saving EUR 435: about EUR 235. In the low saving case (EUR 40) the insurer loses money and will not buy.

## Is the idea right?
- As a stand-alone company in Latvia: no. About EUR 11k revenue cannot carry any fixed cost.
- Across the Baltics at today's cost per check it is about break-even; it earns money only if the cost per check falls to roughly EUR 100 or the price or volume rises.
- It works as a cheap pilot and an entry channel to insurers, tow firms and leasing companies (loss limited by the EUR 6-8k cap and the stop on any false all clear).
- Key unknowns that decide it: whether an insurer pays EUR 150-250, the real fixed cost (insurance quote), and the real number of cases. None has a quote or a customer answer yet.
- Levers: higher volume (Nordics, Germany: larger markets but incumbents), lower cost per check, shared-savings pricing (10-15% of EUR 435 is only EUR 44-65, so it does not beat a flat fee), and bundling take-back or second-life leads.
