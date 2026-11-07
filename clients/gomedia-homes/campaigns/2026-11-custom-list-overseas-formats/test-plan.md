# Test Plan — New Launch Custom List x Overseas Formats (2026-11)

Source brief: [brief.md](./brief.md)
Author: strategist · Date: 2026-11-07 (rev. 1: performance Revise points 1–5 · rev. 2: user change, C1 = "custom list of homes in 1 minute" with bedroom price ladder, 3-question form) · Status: DRAFT. Budget is a **proposal** the user must confirm. Performance owns the read after launch (`ad-creative-fatigue` is the final decider).

Naming rule: the offer is always "Custom List of Homes" / "custom list" (client, 2026-11-07).

## Decision this test informs
"Based on this test, we will choose which custom-list concept (1-minute custom list promise, price range, or monthly payment) gets the custom-list budget for December, and retire or keep the current bedroom + price list ad."

## What we're testing
**What the ad leads with (the hero message), bundled with its layouts.** All four cells show a confirmed price, so price visibility is held roughly constant. What changes is the hero:
- C0: bedroom + price headline (current style)
- C1: the 1-minute custom list promise, with the bedroom "from" ladder as small support
- C2: the price range (ceiling + floor) as the hero, no speed or personal promise
- C3: one monthly figure as the hero

The same confirmed floor prices are used in C0, C1 and C2 so the numbers themselves don't differ between cells. The cells are labelled **bundled, unlearnable at element level**: a winning cell tells us the hero message (and its layouts) won, not whether the chip, the ladder or the carousel did it. Layout differences inside a cell are a weak, directional asset-level read only.

Why not test each overseas layout on its own: at ~S$25 CPL a single-layout test would need ~100 leads per cell (~S$2,500 each) to separate a 30% CPL difference. This account can't fund 6 of those.

**Hypotheses (one per cell, each with a direction):**
- **C1 vs C0:** leading with the 1-minute custom list promise instead of a bedroom + price headline will lower CPL by ~20–30% (toward S$20), because it stands out from the 8+ competitors leading with bedroom + price, with no drop in qualified rate.
- **C2 vs C1:** leading with the price range will give a **higher qualified-lead rate** (fewer `budget doesn't match` tags) at a similar or up to ~15% higher CPL. C2 can "win" on quality even if C1 wins on CPL.
- **C3 vs all:** leading with a monthly figure will give the lowest CPL (the affordability angle was GoAhead's cheapest, S$17.79, n=118).
- We'll know by day 14 (CPL) and day 30 (qualified rate from sales tags).

## Variants
Every asset ships in **two sizes: 9:16 (Stories/Reels) and 4:5 (Feed)**, uploaded as one ad with placement-specific images so no placement gets a crop. Deliverables: 4 cells x 3 assets x 2 sizes = **24 files**, plus the C1-B carousel cards (5 cards x 2 sizes = 10 card files). Resizes are not new concepts.

| Cell | Name (convention) | Concept (hero) | Assets (all instant form, same 3-question form) | Hypothesis |
|---|---|---|---|---|
| Control | `GA_CL_C0_ANG-bedprice_FMT-{A,B,C}_{9x16,4x5}_V01` | Current custom-list ad: bedroom + price headline, DOWNLOAD LIST (client ref-05/06 style). **Shows a price, so it needs confirmed, sourced prices** | Either the existing in-filter GoAhead custom-list ad (**ad ID = user question**, brief "Numbers we need" item 7) relaunched with refreshed prices, or **rebuilt new** from client ref-05/06 if no in-filter ad exists. Up to 3 assets, each 9:16 + 4:5 | Baseline, run at the same time (never compare to old numbers) |
| C1 | `GA_CL_C1_ANG-1mincustomlist_FMT-{story,carousel,infocard}_{9x16,4x5}_V01` | "Your custom list of homes in 1 minute" (brief angle 1). Ladder "1-bedder from $[PRICE] / 2-bedder from $[PRICE] / 3-bedder from $[PRICE] / 4-bedder from $[PRICE]" on every asset, as support, never the biggest element | A: ref-04 story layout (headline, "Free custom list" chip, ladder in place of the single price tab), 9:16 + 4:5 · B: ref-06 carousel, card 1 = 1-minute custom list promise, cards 2–5 = one bedroom tier each with its "from" price, no project names: **feed version 4:5 cards** + **story version 9:16 cards** (separate treatment, text inside story safe zones) · C: ref-02 info card with the ladder in the card + "Free custom list" seal, 9:16 + 4:5 | Promise-led hero gets the lowest CPL among the bedroom-price cells (C0, C1, C2) |
| C2 | `GA_CL_C2_ANG-budgetrange_FMT-{dualanchor,giantnum,pricebox}_{9x16,4x5}_V01` | "Know the real range first" (brief angle 2). Price is the hero. No "1 minute", no "made for you" line | A: ref-05 dual anchor "under $[CEILING] / from $[FLOOR]" · B: ref-01 giant floor price · C: ref-03 price box + tick checklist. Each 9:16 + 4:5 | Range-led hero gets the highest qualified-lead rate |
| C3 | `GA_CL_C3_ANG-monthly_FMT-{pricebox,giantnum,story}_{9x16,4x5}_V01` | "Pay as it's built" (brief angle 3). One monthly figure as the hero, no ladder, no ceiling | A: ref-03 price box with monthly figure + checklist · B: ref-01 giant "$[MONTHLY]/month" · C: ref-04 story layout with a monthly tab instead of a price tab. Each 9:16 + 4:5. **Every asset carries the full monthly disclaimer** (stage, tenure, rate, LTV, "monthly instalments increase as construction progresses", brief angle 3) | Monthly-figure hero gets the lowest CPL overall |

Copy IDs and creative IDs: to be filled by the copywriter and static-designer using the names above (`_V01` -> `_V02` for any relaunch).

**Price dependency: every cell now shows a price or monthly figure.** C0, C1, C2 and C3 all wait until the client confirms the numbers (brief, "Numbers we need" items 1–4 and 7). There is no price-free cell in the main test.

**If prices are late (fallback, user's choice):**
- **Default: wait.** All 4 cells launch together once prices are in. Cells must start on the same day.
- **Option if the user doesn't want to wait:** a 2-cell **pre-test** with a price-free C1 kept only for this purpose: `GA_CL_C1NP_ANG-1mincustomlist_FMT-story_{9x16,4x5}_V01` (C1-A with the ladder removed, "Free custom list" in its place) vs a **price-free control** ("Get your [N]-bedder new launch custom list", DOWNLOAD LIST, same ref-05/06 look, no price). This only tells us whether the 1-minute promise beats a plain bedroom list when neither shows a price. It **does not count as the main read**. The main 4-cell test still runs later with its own fresh launch day. Never launch any cell on an old, unsourced price to fill the gap.

## Budget & duration
- **Structure:** one campaign, **one ad set per cell with its own fixed daily budget (ABO)**. Not campaign budget: learnings 2026-11-05 (Hougang) showed new ad sets starving the incumbent under a campaign budget. Same audience (SG broad, Housing category), same placements (Feed + Stories/Reels, each asset with its own 4:5 and 9:16 image), same 3-question form. Advantage+ creative enhancements and dynamic creative **off**.
- **Form (all cells):** bedrooms · budget band · "Are you a licensed property agent?" (+ EC eligibility only if EC is opted in). Timeline and own stay/investment are asked on WhatsApp. "1 minute" in C1 refers to filling in this form.
- **Old control stops on day 1:** if the original control ad (or its campaign) is still live anywhere in the account, **the user pauses it on test day 1**, before or at the same time the test ad sets go live. Only the relaunched copy inside the test campaign counts as C0. Performance confirms on day 1 that the original shows no spend.
- **Proposed budget (user to confirm):** **S$40/day per cell x 4 cells (incl. control) = S$160/day, 14 days = S$2,240 total** (S$560 per cell). Optional pre-test: 2 cells x S$40/day x 7 days = S$560 extra.
- **Projected volume:** S$40/day ÷ S$25 = ~1.6 leads/day per cell, so **~22 leads per cell in 14 days**. A shorter form usually means more leads at lower quality, which is why the quality tags matter more in this version.
- **Feasibility verdict, every cell (C0–C3): Directional read.**
  - Stable delivery needs ~50 leads/week per ad set = S$25 x 50 ÷ 7 = **~S$179/day per cell**. We're at S$40, so the ad sets stay in learning. That's expected and accepted.
  - A significance-tested winner on CPL (30% difference, 80% power) needs **~100 leads per cell, about S$2,500 per cell, ~9 weeks at S$40/day**. That's over the 4–6 week fresh-creative window, so no cell can be "Powered".
  - Results are reported as a ranking ("C1 cheapest, directional"), never as "winner at 95% confidence".
- **Minimum before any verdict:** day 3 **and** S$100 spent in the cell (4x target CPL). Meta lead attribution lags, so earlier reads look worse than they are.
- **Hard stop:** day 14 or S$560 spent per cell, whichever comes first.
- **Second look:** day 30, qualified-lead rate per cell from sales tags.

## Lead-quality tagging (set up before launch)
- **Who:** [NAME — consultant(s) who WhatsApp the leads; **user question, not yet answered**]
- **Where:** [lead sheet / CRM the instant-form leads land in; **user question**], keeping the ad set name (C0–C3) on every row, plus the timeline and own-stay answers collected on WhatsApp.
- **When:** each lead tagged within 48h. Performance pulls tags on day 7, day 14 and day 30.
- **Tags:** `real buyer – reachable` · `real buyer – budget doesn't match` · `agent` · `fake / wrong number` · `unreachable after 3 tries`, plus `qualified` per the brief's definition.
- Tracking checks the setup before launch.
- **If tagging isn't in place at launch:** the read is **CPL-only and low confidence**, the C2 quality hypothesis can't be tested, the lead-quality kill can't fire, and no cell is scaled past the first +50% step until tags exist.

## Success criteria
- **Gate metric (screen only, never crowns):** link CTR and cost per form open, compared by placement (feed vs story separately).
- **Primary metric:** cost per instant-form lead per cell, at day 14.
- **A cell "wins" on CPL (directional) if:** CPL **<= S$25** on **>= 12 leads**, **and** CPL is at least 15% below the control's, **and** qualified-lead rate (day 30) is not lower than the control's. If the control has no qualified data, use: >= 50% of leads tagged `real buyer – reachable` (proposed bar, user to confirm). Without tags, a "win" is CPL-only, low confidence.
- **C2 can win on quality (directional) if:** CPL <= S$29 (up to ~15% above S$25) **and** its `real buyer – reachable` share is at least 10 points above C1's and the control's, on >= 12 tagged leads.
- **Guardrails:** cell frequency <= 2.5 over 14 days · share of `agent` + `fake / wrong number` + `unreachable` leads <= 30% · no ad rejected or restricted under the Housing category.
- **On win:** scale the winning cell **+50% budget**, hold 7 days and read again (the first scale step is its own read). Up to 2 more +50% steps if CPL stays <= S$25 (or <= S$29 for a quality win) and tags exist. Then the copywriter makes 2 hook iterations inside the winning concept, and the best asset of the winning cell becomes the new control.
- **Iterate path:** CPL S$25–35 with a qualified rate at or above control → keep the cell's best asset, change one hook (`_V02`), re-test against the control for 7 days.
- **Inconclusive** (no cell meets a win rule) → **keep the control**, decided now, not at readout.
- **Where the learning goes:** performance appends one row to `clients/gomedia-homes/learnings.md` (winner, CPL, qualified rate, n, confidence, takeaway). Note the best layout (story / carousel / price box / giant number / info card) as directional, asset-level only.

## Kill criteria
- **Asset:** pause an asset at **S$75 spent (3x target CPL) with 0 leads**, not before day 3.
- **Cell:** pause the cell at **day 7 if CPL > S$40 on >= S$280 spent** (1.6x target, in line with the condo benchmark ceiling S$31 plus a margin).
- **Lead-quality kill:** pause a cell at any point after 10 tagged leads if **> 40% are `agent`, `fake / wrong number` or `unreachable`**. Only works if tagging is running.
- **Compliance kill:** pull any ad immediately if a price or monthly figure turns out to be out of date or unsourced, a C3 asset is missing its stage / "instalments increase" disclaimer, the list is called anything other than "custom list", or Meta restricts it.
- **Account guard:** if the original control ad is still spending after day 1, or if any test ad set gets less than half its daily budget for 2 days running, flag to performance before reading results.
- **No mid-test edits.** Fix errors by relaunching the asset as `_V02`, not by editing a live ad.

## Caveats
- The four ad sets compete in the same auctions for the same SG audience, so CPLs overlap. Meta's delivery also shows each ad to a different mix of people. In-platform reads are a relative screen, not proof of cause.
- C0, C1 and C2 all show bedroom prices, so their differences may be smaller than in the first draft. If C0, C1 and C2 land within ~15% of each other on CPL, call it "no difference" rather than picking a winner.
- Website vs form is **not** part of this test. All cells use instant forms (brief, conversion path). The S$17.79 affordability benchmark came from a website path, so it isn't directly comparable.
- The 3-question form moves timeline and purpose to WhatsApp, so those answers only exist for leads who reply. No sales feedback exists yet (learnings: "lead quality unknown"). Without tags by day 30, the quality guardrail can't be checked and any "win" stays CPL-only and low confidence.
- Housing category limits targeting. Don't change targeting or placements during the 14 days.
- Paid image generation for the 24 files + 10 carousel cards needs a cost estimate and the user's go-ahead first (CLAUDE.md rule 3). Launch needs the user's approval after QA.
