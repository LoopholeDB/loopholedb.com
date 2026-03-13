# LoopholeDB — Claude Instructions

## Project Overview

LoopholeDB is a free, plain-English database of legal loopholes, rights, and workarounds for US and Canadian consumers. Content is organized by country (`LHDB/us/`, `LHDB/ca/`) and category (e.g., `credit-cards`, `pay-taxes`). Each loophole is a Markdown file with YAML frontmatter.

---

## Content Classification System

Loopholes fall into one of two classifications:

### Active (`LHDB/us/` and `LHDB/ca/`)

Published loopholes that appear on the website. Must meet all of the following criteria:

- **Universally actionable** — the right or strategy applies broadly, not just to a narrow subset of people (e.g., only fixed-term contract holders)
- **Clearly legal** — backed by statute, regulation, or well-established case law
- **Verifiably accurate** — sourced from official government, regulatory, or primary legal sources
- **Presentable without excessive caveats** — if a loophole requires 3+ disclaimers to be honest, it's too conditional

### Discarded (`LHDB/discarded/`)

Loopholes that were researched and rejected. **Do not re-add these** — if a candidate loophole closely resembles a discarded entry, skip it.

Each discarded file retains its full content plus three additional frontmatter fields:

```yaml
status: "discarded"
discarded_reason: "One sentence explaining why it was rejected."
discarded_date: "YYYY-MM-DD"
```

**Common reasons for discarding:**
- Protection is contractual (carrier/company ToS), not a statutory right
- Applies only to a narrow subset of users, not the general public
- Too jurisdiction-specific within a country (e.g., only one state/province)
- Too many required caveats to present cleanly
- Loophole has been closed or is under active legal challenge
- Overstated — the right exists but is weaker than it appears

---

## Discarded Loopholes Index

| File | Country | Topic | Reason |
|------|---------|-------|--------|
| `ca-wireless-plan-price-increase-rejection.md` | CA | Rejecting wireless carrier price increases | Only fully protects fixed-term contract customers under CRTC Wireless Code; month-to-month customers have weaker remedies — too conditional to present as universal |
| `us-wireless-plan-price-increase-rejection.md` | US | Rejecting wireless carrier price increases | No FCC rule mandates this — rights are contractual, vary by carrier ToS, and require action within narrow windows |

---

## Active Loopholes Index

Check this list before researching new candidates — do not add duplicates or close variants of existing entries.

### United States

| Category | Slug | Topic |
|----------|------|-------|
| `care-about-privacy` | `data-broker-opt-out` | Opting out of data broker databases |
| `care-about-privacy` | `free-credit-reports-fraud-alerts-freeze` | Free credit reports, fraud alerts, and credit freezes |
| `care-about-privacy` | `tcpa-robocall-lawsuit` | Suing robocallers under the TCPA |
| `credit-cards` | `arbitration-opt-out` | Opting out of mandatory arbitration clauses |
| `credit-cards` | `credit-card-chargeback-rights` | Chargeback rights under the Fair Credit Billing Act |
| `credit-cards` | `credit-utilization-reset` | Resetting credit utilization before statement close |
| `credit-cards` | `fdcpa-debt-validation` | Forcing debt collectors to validate debts under the FDCPA |
| `dealing-with-government` | `foia-requests` | FOIA requests to obtain government records |
| `dealing-with-government` | `small-claims-court` | Using small claims court without a lawyer |
| `dealing-with-government` | `unclaimed-property-search` | Searching state databases for unclaimed property |
| `have-a-job` | `bank-account-bonus-churning` | Earning bank account sign-up bonuses |
| `have-a-job` | `dependent-care-fsa` | Paying for childcare/elder care with pre-tax dollars via DCFSA |
| `have-a-job` | `non-compete-unenforceability` | Challenging unenforceable non-compete agreements |
| `have-a-job` | `overtime-misclassification` | Recovering unpaid overtime from misclassification |
| `have-insurance` | `appraisal-clause` | Using the appraisal clause to dispute insurance payouts |
| `have-insurance` | `diminished-value-claim` | Claiming diminished vehicle value after an accident |
| `have-insurance` | `no-surprises-act-air-ambulance` | Air ambulance billing protections under the No Surprises Act |
| `have-medical-bills` | `hospital-bill-audit` | Auditing hospital bills for errors and negotiating the balance |
| `have-medical-bills` | `hospital-charity-care` | Hospital charity care and financial assistance programs |
| `have-medical-bills` | `medical-debt-credit-reporting` | Removing medical debt from credit reports |
| `have-medical-bills` | `no-surprises-act` | Surprise billing protections under the No Surprises Act |
| `own-a-home` | `homestead-exemption` | Homestead exemption to reduce property taxes |
| `own-a-home` | `mortgage-interest-deduction-points` | Deducting mortgage interest and points |
| `own-a-home` | `pmi-cancellation` | Requesting early PMI cancellation under the Homeowners Protection Act |
| `own-a-home` | `property-tax-appeal` | Appealing property tax assessments |
| `pay-taxes` | `backdoor-roth-ira` | Backdoor Roth IRA conversion for high earners |
| `pay-taxes` | `irs-free-file` | Filing federal taxes for free via IRS Free File (AGI ≤ $84,000) |
| `pay-taxes` | `innocent-spouse-relief` | IRS innocent spouse relief |
| `pay-taxes` | `irs-offer-in-compromise` | Settling IRS tax debt for less with an Offer in Compromise |
| `pay-taxes` | `qualified-business-income-deduction` | 20% QBI deduction for pass-through business income |
| `planning-your-future` | `ftc-funeral-rule` | Consumer rights when arranging a funeral under the FTC Funeral Rule |
| `planning-your-future` | `social-security-optimization` | Optimizing Social Security claiming strategy |
| `planning-your-future` | `transfer-on-death-accounts` | Transfer-on-death accounts to bypass probate |
| `run-a-business` | `augusta-rule` | Augusta Rule — renting your home to your business tax-free |
| `run-a-business` | `home-office-deduction` | Home office deduction for self-employed |
| `run-a-business` | `section-179-bonus-depreciation` | Section 179 and bonus depreciation for equipment |
| `saving-for-retirement` | `529-to-roth-ira-rollover` | Rolling unused 529 funds into a Roth IRA |
| `saving-for-retirement` | `hsa-triple-tax-advantage` | HSA triple tax advantage strategy |
| `saving-for-retirement` | `mega-backdoor-roth` | Mega backdoor Roth via after-tax 401(k) contributions |
| `travel-often` | `airline-baggage-delay-rights` | Compensation rights for delayed airline baggage |
| `travel-often` | `airline-involuntary-bumping-compensation` | DOT compensation for involuntary airline bumping |
| `travel-often` | `credit-card-travel-insurance-stacking` | Stacking credit card travel insurance benefits |

### Canada

| Category | Slug | Topic |
|----------|------|-------|
| `care-about-privacy` | `casl-spam-unsubscribe-rights` | CASL unsubscribe and anti-spam rights |
| `care-about-privacy` | `pipeda-personal-data-access` | Accessing and correcting personal data under PIPEDA |
| `care-about-privacy` | `workplace-privacy-rights-monitoring-limits` | Limits on employer workplace monitoring |
| `credit-cards` | `credit-card-chargeback-rights` | Chargeback rights via card networks and FCAC |
| `credit-cards` | `purchase-protection-extended-warranty` | Credit card purchase protection and extended warranty |
| `dealing-with-government` | `access-to-information-requests` | Access to Information (ATI) requests |
| `dealing-with-government` | `unclaimed-property-search` | Searching Bank of Canada and provincial registries for unclaimed property |
| `dealing-with-government` | `cra-objection-tax-court-appeal` | Objecting to CRA assessments and appealing to Tax Court |
| `dealing-with-government` | `small-claims-court` | Using small claims court without a lawyer |
| `have-a-job` | `bank-account-bonus-hunting` | Earning bank account sign-up bonuses |
| `have-a-job` | `crtc-wireless-15-day-trial` | CRTC 15-day wireless trial period and 24-month contract cap |
| `have-a-job` | `ei-parental-benefits-optimization` | Optimizing EI parental benefit elections |
| `have-a-job` | `termination-pay-severance-rights` | Termination pay and severance entitlements |
| `have-a-job` | `worker-misclassification-cpp-ei` | Recovering CPP/EI from worker misclassification |
| `have-a-job` | `wrongful-dismissal-notice-entitlement` | Wrongful dismissal and common law notice entitlements |
| `have-insurance` | `auto-insurance-rate-dispute-arbitration` | Disputing auto insurance rates via arbitration |
| `have-insurance` | `bad-faith-insurance-claims` | Bad faith insurance claim rights |
| `have-insurance` | `diminished-value-claim` | Diminished vehicle value claims after an accident |
| `have-medical-bills` | `canada-workers-benefit` | Canada Workers Benefit (CWB) refundable tax credit |
| `have-medical-bills` | `disability-tax-credit` | Disability Tax Credit (DTC) |
| `have-medical-bills` | `hospital-financial-assistance` | Hospital financial assistance programs |
| `have-medical-bills` | `medical-expense-tax-credit` | Overlooked eligible items under the Medical Expense Tax Credit |
| `own-a-home` | `first-home-savings-account-fhsa` | First Home Savings Account (FHSA) |
| `own-a-home` | `gst-hst-new-housing-rebate` | GST/HST rebate for new builds, substantial renovations, and first-time buyers |
| `own-a-home` | `home-accessibility-tax-credit` | 15% federal tax credit on up to $20,000 of accessibility renovations |
| `own-a-home` | `principal-residence-exemption` | Principal Residence Exemption from capital gains |
| `own-a-home` | `rrsp-home-buyers-plan` | RRSP Home Buyers' Plan |
| `pay-taxes` | `canada-training-credit` | Canada Training Credit |
| `pay-taxes` | `pension-income-splitting` | Splitting up to 50% of eligible pension income via T1032 to reduce household tax |
| `pay-taxes` | `cra-taxpayer-relief` | CRA Taxpayer Relief Program |
| `pay-taxes` | `smith-manoeuvre` | The Smith Manoeuvre — making mortgage interest tax-deductible |
| `pay-taxes` | `spousal-rrsp-income-splitting` | Spousal RRSP income splitting |
| `planning-your-future` | `beneficiary-designation-probate-bypass` | Beneficiary designations to bypass probate |
| `planning-your-future` | `rdsp-government-grants` | RDSP government grants and bonds |
| `run-a-business` | `gst-hst-quick-method` | GST/HST Quick Method for small businesses |
| `run-a-business` | `lifetime-capital-gains-exemption` | Lifetime Capital Gains Exemption (LCGE) |
| `saving-for-retirement` | `cpp-enhancement-voluntary-contributions` | CPP enhancement and voluntary contributions |
| `saving-for-retirement` | `resp-rrsp-conversion` | Converting RESP funds to RRSP |
| `saving-for-retirement` | `spousal-rrsp-meltdown` | Spousal RRSP meltdown strategy |
| `saving-for-retirement` | `tfsa-overcontribution-waiver` | TFSA overcontribution waiver |
| `travel-often` | `appr-compensation-rights` | APPR passenger compensation rights |
| `travel-often` | `credit-card-travel-insurance-coverage` | Credit card travel insurance coverage |

---

## Adding New Loopholes

1. Create `LHDB/[us|ca]/[category-slug]/[loophole-slug].md`
2. Check `LHDB/discarded/` first — if a similar entry exists there, do not add it
3. Follow the existing frontmatter schema (see any active loophole for reference)
4. Source claims from official government or regulatory URLs
5. Register the category icon, label, and description in all 4 category config locations if it's a new category:
   - `src/pages/us/index.astro`
   - `src/pages/ca/index.astro`
   - `src/pages/us/[category]/index.astro`
   - `src/pages/ca/[category]/index.astro`

## Discarding a Loophole

1. Move the file to `LHDB/discarded/` with a `[country]-[slug].md` naming convention
2. Add `status`, `discarded_reason`, and `discarded_date` to its frontmatter
3. Add a row to the **Discarded Loopholes Index** table above
4. Revert any category config changes if the category is now empty

---

## Content Tone & Style

- Plain English — written for a layperson, not a lawyer
- Actionable — tell the user exactly what to do, step by step
- Honest about limitations — include caveats, but only when material
- No legal advice disclaimer needed in content (site-wide disclaimer modal handles this)
