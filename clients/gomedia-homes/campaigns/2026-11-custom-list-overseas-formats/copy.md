# Ad Copy — New Launch Custom List x Overseas Formats (2026-11)

Source brief: [brief.md](./brief.md) (rev. 2, approval box ticked 2026-11-07) · Test plan: [test-plan.md](./test-plan.md) · Upstream sign-off: `perf-review.md` re-review 2 = **Approved**
Client: gomedia-homes (ads run as **GoAhead**) · Author: copywriter · Date: 2026-11-07 (rev. 1: perf-review Revise issues 1–3 fixed) · Primary skill: `ad-creative`
Read before writing: CLAUDE.md, `brand.md`, `learnings.md`, brief.md, test-plan.md, perf-review.md, `gomedia-homes-static-ad-rules`, `inputs/ad-references/overseas-property-formats/index.md`, `inputs/ad-references/new-launch-custom-list/index.md`.

**Status: copy draft with placeholders. Nothing with a price goes to design until the client fills the numbers (brief, "Numbers we need" items 1–4, 6).** C0 (control) is not in this file. It's either the existing in-filter ad or a ref-05/06 rebuild once item 7 is answered.

**newlaunches.sg check (copywriter step 3): not used.** This is a multi-project list with no project names allowed, and every price must come from the client's developer price lists, so a "this week's hot launch" hook can't fit. The brief also runs with no web research (CLAUDE.md rule 7).

**Rev. 1 changes (perf-review, copywriter section, 2026-11-07):**
1. C1-B cards 2–5: promise line "CUSTOM LIST OF HOMES IN 1 MINUTE" at the top of every card (feed and story); the price is now secondary, smaller than the tier headline.
2. C2-C: "Progressive payment, pay as it's built" tick removed from both sizes; 3 ticks in 9:16 and 4:5.
3. C3-B: "with the payment stages for each" cut from the primary text by default; listed under open items as an add-back only if the client confirms.
Rulings applied: C3-C keeps the shared budget-band form; C3-B's "[STAGE] progressive payment stage" line stays.

---

## Rules applied to all 9 ads

- **Offer name:** "custom list of homes" / "custom list" only. No other name for the list anywhere (client, 2026-11-07).
- **Prices:** every figure is a placeholder, kept exactly as written until the client fills it. The same floor figure for a bedroom count is used in C1 and C2.
  - Floor per bedroom: `$[PRICE — client to confirm, source]`
  - Ceiling per tier (C2 only): `$[CEILING — client to confirm, source]`
  - Monthly (C3 only): `$[MONTHLY — client to confirm, loan assumptions, source]`
- **"1 minute" = filling in the form (3 questions + prefilled name/phone).** Never the delivery time. Every C1 ad says the list is sent on WhatsApp.
- **Not allowed anywhere:** rental, returns, gains, investment potential, capital growth, "guaranteed"; unit counts; % sold; district codes; street addresses; project names; savings/discount/stamp-duty/gift badges; "Leading Developers"; urgency; question-mark headlines; exclamation marks.
- **Price cap (brief item 6):** if the ~$1.6M cap applies to this list, any 3- or 4-bedder line above it is dropped from the ladder and the ceilings. Designers leave room for a 3-line ladder.
- **On-image CTA:** GET MY CUSTOM LIST or DOWNLOAD LIST. **Meta button:** Sign up (with GET MY CUSTOM LIST) or Download (with DOWNLOAD LIST).
- **Standard fine print (every ad with a price):** `*Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties.*`
- **Image label:** `*IMAGE SAMPLE ONLY – not the actual unit*` on stock or AI interiors. Use `*IMAGE SAMPLE ONLY – not the actual development*` on any building or skyline image.
- **CEA line:** `[CEA LICENCE / REGISTRATION LINE — client to confirm if required]` sits in the fine print of every ad (brand.md section 5 TODO).
- **C3 disclaimer (full, on the image, in the fine print and in the primary text):**
  `*Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE, e.g. first] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer.*`
- **9:16 safe zones:** no text in the top ~14% (profile bar) or the bottom ~20% (CTA button and caption). On 9:16 the on-image CTA sits just above the bottom safe line.

---

## Summary table

| ID | Angle | Hook type | ICP segment | Primary text (opening line) | Headline | Description | CTA | Source |
|---|---|---|---|---|---|---|---|---|
| `GA_CL_C1_ANG-1mincustomlist_FMT-story_V01` | C1 custom list in 1 minute | Speed promise | HDB upgraders / first-time private buyers | "Your custom list of homes in 1 minute." | Your custom list of homes in 1 minute | Free · sent on WhatsApp | Sign up | Brief angle 1 (headline, ladder); offer = client ref-06; form = brief conversion path; prices = client (pending) |
| `GA_CL_C1_ANG-1mincustomlist_FMT-carousel_V01` | C1 | Identity call-out | HDB upgraders | "Upgrading from HDB to a new launch condo?" | For HDB upgraders: custom list in 1 minute | One list, every bedder | Download | Brief angle 1 hook directions; brand.md ICP "HDB upgraders"; prices = client (pending) |
| `GA_CL_C1_ANG-1mincustomlist_FMT-infocard_V01` | C1 | Pain | HDB upgraders / first-time private buyers | "Too many new launches to check one by one." | Only the launches in your budget | Free custom list of homes | Sign up | Brief angle 1 (pain hook direction, objection); seal = brief ("Free custom list"); prices = client (pending) |
| `GA_CL_C2_ANG-budgetrange_FMT-dualanchor_V01` | C2 budget range | Price ceiling + floor | HDB upgraders | "3-bedder new launches under $[CEILING]." | 3-bedders under $[CEILING] | From $[PRICE] | Download | Brief angle 2 (dual anchor); ceilings + floors = client (pending, items 2–3) |
| `GA_CL_C2_ANG-budgetrange_FMT-giantnum_V01` | C2 | Giant entry number | First-time private buyers | "New launch condos in Singapore start from $[PRICE]." | New launches from $[PRICE] | Developer price lists | Download | Brief angle 2 (giant number); overall floor = client (pending, item 1) |
| `GA_CL_C2_ANG-budgetrange_FMT-pricebox_V01` | C2 | Range + checklist | HDB upgraders | "Know the real price range before you visit a showflat." | 2-bedders $[PRICE] to $[CEILING] | Floor plans included | Download | Brief angle 2 (allowed checklist lines); brand.md offer (floor plans); prices = client (pending) |
| `GA_CL_C3_ANG-monthly_FMT-pricebox_V01` | C3 pay as it's built | Monthly price box + checklist | HDB upgraders | "Pay as it's built: new launch condos from $[MONTHLY]/month*." | From $[MONTHLY]/month while it's built | *Illustration only | Download | Brief angle 3; learnings 2026-11-03 (affordability S$17.79); brand.md offer + disclaimer; monthly = client (pending, item 4) |
| `GA_CL_C3_ANG-monthly_FMT-giantnum_V01` | C3 | Giant monthly number | First-time private buyers | "This is what a new launch can cost per month during construction." | $[MONTHLY]/month during construction* | *Illustration only | Sign up | Same as above |
| `GA_CL_C3_ANG-monthly_FMT-story_V01` | C3 | Monthly budget-first | HDB upgraders | "Start with what you can pay each month." | New launches by monthly budget | *Illustration only | Sign up | Brief angle 3 (angle sentence); same as above |

Every file ships in **9:16 and 4:5** (suffix `_9x16` / `_4x5`, per test-plan naming). The carousel ships as two card sets.

---

## C1 — "Your custom list of homes in 1 minute" (promise first, ladder as small support)

The headline promise is the same family in all three ads (the brief fixes it). What changes is the **first-read hook**: speed (A), identity (B), pain (C). The layouts also change: story (A), carousel (B), info card (C). The bedroom ladder and any price never become the largest element.

**C1 ladder (same text on every C1 ad):**
```
1-bedder from $[PRICE — client to confirm, source]
2-bedder from $[PRICE — client to confirm, source]
3-bedder from $[PRICE — client to confirm, source]
4-bedder from $[PRICE — client to confirm, source]
```

### C1-A · Speed promise · ref-04 story layout
**Layout note:** ref-04 Dubai catalogue story: light sky-blue gradient (the allowed blue variant) or the red house colour, headline at the top, 2 black pill chips, a blue/red tab holding the ladder (instead of the single "Starting from" tab), tilted interior-photo cards below, one per bedroom tier.

- **On-image headline:** YOUR CUSTOM LIST OF HOMES IN 1 MINUTE
- **Subhead:** Singapore new launch condos that fit your budget and bedrooms
- **Chips:** `Free custom list` · `Developer price lists`
  (Alt chip, only if the client confirms it's still true: `No Duplicate` / `Real-Time Listing` / `No Fake Listing` from client ref-06.)
- **Price block:** the C1 ladder, inside the tab, small type. The tilted cards carry just the tier label ("1-bedder", "2-bedder", "3-bedder", "4-bedder"), no price on the cards.
- **Process line (under the cards, small):** 3 questions, about 1 minute. Your list is sent on WhatsApp.
- **On-image CTA:** GET MY CUSTOM LIST
- **Disclaimer:** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Your custom list of homes in 1 minute.
  > Tell us your bedrooms and budget in 3 quick questions. A GoAhead consultant sends you a list of only the Singapore new launches that fit, on WhatsApp within [TIME — client to confirm].
  > 1-bedder from $[PRICE] · 2-bedder from $[PRICE] · 3-bedder from $[PRICE] · 4-bedder from $[PRICE]*
  > Free. Developer price lists and floor plans included.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline:** Your custom list of homes in 1 minute
- **Meta description:** Free · sent on WhatsApp
- **Meta button:** Sign up
- **9:16:** headline in 2 lines starting below the top 14%; chips, tab and 4 tilted cards in the middle; process line and CTA above the bottom 20%.
- **4:5:** less height, so cut to **3 tilted cards** (2-, 3-, 4-bedder photos). The ladder in the tab keeps all 4 lines. Drop the process line from the image (it stays in the primary text). Subhead shortens to "Singapore new launches that fit your budget".

### C1-B · Identity call-out · ref-06 carousel
**Layout note:** ref-06 Dubai feed carousel. Card 1 = the promise card; cards 2–5 = one bedroom tier each, with a photo collage, the promise line on top and a secondary "from" price. No project names on any card. The feed version is 4:5 cards; the story version is a separate set of 9:16 cards.

**Card 1 (promise card)**
- **On-image headline:** FOR HDB UPGRADERS: YOUR CUSTOM LIST OF HOMES IN 1 MINUTE
- **Subhead:** Only the new launches that fit your budget and bedrooms
- **Chips:** `Free custom list` · `Sent on WhatsApp`
- **Price block:** the C1 ladder as a small 4-line strip at the bottom of the card (support only).
- **On-image CTA:** DOWNLOAD LIST
- **Card headline (Meta):** Custom list of homes in 1 minute · **Card description:** Free · 3 questions

**Cards 2–5 (one per tier, same layout, only the tier and price change)**
Type order on every card, in both the feed and story sets, from the top: (1) promise line, (2) tier headline (the largest text on the card), (3) price line, secondary and clearly smaller than the tier headline, (4) CTA.

| Card | Top line (promise, every card) | On-image headline (tier, largest) | Price line (secondary, smaller) | Card headline (Meta) | Card description |
|---|---|---|---|---|---|
| 2 | CUSTOM LIST OF HOMES IN 1 MINUTE | 1-BEDDER NEW LAUNCHES | from $[PRICE — client to confirm, source] | Custom list: 1-bedders | From $[PRICE] |
| 3 | CUSTOM LIST OF HOMES IN 1 MINUTE | 2-BEDDER NEW LAUNCHES | from $[PRICE — client to confirm, source] | Custom list: 2-bedders | From $[PRICE] |
| 4 | CUSTOM LIST OF HOMES IN 1 MINUTE | 3-BEDDER NEW LAUNCHES | from $[PRICE — client to confirm, source] | Custom list: 3-bedders | From $[PRICE] |
| 5 | CUSTOM LIST OF HOMES IN 1 MINUTE | 4-BEDDER NEW LAUNCHES | from $[PRICE — client to confirm, source] | Custom list: 4-bedders | From $[PRICE] |

The price is never the biggest text on any card, so the whole carousel stays promise-led and doesn't turn into a bedroom + price carousel (the C0/C2 mechanic). If the price cap drops the 4-bedder, the carousel runs with 4 cards.

- **On-image CTA (cards 2–5):** DOWNLOAD LIST
- **Disclaimer (every card):** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Upgrading from HDB to a new launch condo?
  > Get your custom list of homes in 1 minute: choose your bedrooms and budget in 3 quick questions, and a GoAhead consultant sends you the new launches that fit, on WhatsApp.
  > Swipe to see where each bedroom size starts.
  > Free. Developer price lists and floor plans included.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline (ad level, used where the carousel shows one):** For HDB upgraders: custom list in 1 minute
- **Meta description:** One list, every bedder
- **Meta button:** Download
- **9:16 (story set):** each card stands alone in Stories. Card 1 keeps the full promise headline. Cards 2–5 keep the same type order as the feed set, with the "CUSTOM LIST OF HOMES IN 1 MINUTE" top line placed just below the top 14% safe line. All text inside the safe zones.
- **4:5 (feed set):** card 1 headline shortens to "HDB UPGRADERS: CUSTOM LIST OF HOMES IN 1 MINUTE"; the ladder strip on card 1 can drop to the 2 lines that fit, because cards 2–5 carry each price. Cards 2–5 keep the promise top line in full.

### C1-C · Pain · ref-02 cream info card + round seal
**Layout note:** ref-02 Melbourne townhouse card: ribbon tag at the top, cream info card on the left over an interior-photo collage, round seal badge, pill CTA inside the card. The seal says "FREE CUSTOM LIST" only (never a savings or discount seal).

- **Ribbon tag:** TOO MANY LAUNCHES TO CHECK
- **On-image headline (in the card):** Get your custom list of homes in **1 minute** (highlight "1 minute" in the gold/red highlight colour)
- **Subhead (in the card):** Only the new launches that fit your budget, not every launch on the market
- **Chips / bullets (in the card, small icons):**
  - 3 questions: bedrooms, budget, agent or not
  - Sent to you on WhatsApp
  - Developer price lists and floor plans
- **Price block:** the C1 ladder inside the card, small type, bedroom count highlighted on each line (like ref-02's highlighted bed count).
- **Seal:** FREE CUSTOM LIST
- **On-image CTA (pill inside the card):** GET MY CUSTOM LIST
- **Disclaimer:** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Too many new launches to check one by one.
  > Skip the price-list hunt. Answer 3 questions (about 1 minute) and a GoAhead consultant sends you a custom list of only the launches in your budget, on WhatsApp within [TIME — client to confirm].
  > 1-bedder from $[PRICE] · 2-bedder from $[PRICE] · 3-bedder from $[PRICE] · 4-bedder from $[PRICE]*
  > Free, with developer price lists and floor plans.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline:** Only the launches in your budget
- **Meta description:** Free custom list of homes
- **Meta button:** Sign up
- **9:16:** card moves to the centre, full width minus margins; ribbon sits just under the top safe line; seal overlaps the card's top-right corner; photo collage above and below the card.
- **4:5:** card on the left ~55% width as in ref-02; drop the 3rd bullet (it's in the primary text); the subhead shortens to "Only the new launches in your budget".

---

## C2 — "Know the real range first" (price range is the hero)

No "1 minute", no "for you / made for you" in any headline or chip, and no progressive-payment line (that's C3). The CTA is plain: DOWNLOAD LIST + Meta "Download". Floors equal the C1 ladder figures. The three ads differ by voice: a plain range statement (A), an entry-price fact (B), and a pre-showflat check (C).

**Tier choice (copy suggestion, user can switch):** A uses the 3-bedder (family upgraders), C uses the 2-bedder (the most common first-time private size), B uses the overall floor. If the price cap drops the 3-bedder ceiling, A moves to the 2-bedder and C to the 1-bedder.

### C2-A · Price ceiling + floor · ref-05 dual anchor
**Layout note:** ref-05 Dubai off-plan: dark navy night skyline (or a dusk interior with city view), headline with the ceiling in bright blue, one plain subline, a solid blue box with the floor.

- **On-image headline:** NEW LAUNCH 3-BEDDERS UNDER **$[CEILING — client to confirm, source]** (ceiling in the accent colour)
- **Subhead:** Singapore new launch condos, from developer price lists
- **Chips:** none (ref-05 has none, keep it clean)
- **Price block (box):** FROM $[PRICE — client to confirm, source] (= C1 3-bedder floor)
- **On-image CTA:** DOWNLOAD LIST
- **Disclaimer:** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual development*` (skyline) + CEA line.
- **Meta primary text:**
  > 3-bedder new launches under $[CEILING], from $[PRICE].*
  > Download the custom list of Singapore new launch 3-bedders in that range, with developer price lists and floor plans. Pick your bedrooms and budget band, and a GoAhead consultant sends it on WhatsApp.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline:** 3-bedders under $[CEILING]
- **Meta description:** From $[PRICE]
- **Meta button:** Download
- **9:16:** headline in 3 lines in the upper-middle (below the top 14%), box centred at ~60% height, CTA above the bottom 20%.
- **4:5:** headline in 2 lines top-left, box bottom-left, skyline fills the right; subhead stays.

### C2-B · Giant entry number · ref-01 giant number
**Layout note:** ref-01 Melbourne waterfront: full-bleed warm photo (interior with city view, not a named building), headline top-left, one-line sub, and one huge number bottom-left in the brand colour. Here the giant number is the **lowest new launch entry price** (not a savings figure).

- **On-image headline:** New launch condos in Singapore start from
- **Price block (giant):** $[PRICE — client to confirm, source] (overall floor, brief item 1)
- **Line under the number:** [N]-bedder entry price, [MONTH] 2026 (the unit type of the cheapest unit, from the client)
- **Subhead / support line (small):** Custom list goes up to $[CEILING — client to confirm, source] for 4-bedders (or the highest tier the price cap allows)
- **Chips:** none (the number does the work)
- **On-image CTA:** DOWNLOAD LIST
- **Disclaimer:** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > New launch condos in Singapore start from $[PRICE] this month.*
  > That's the [N]-bedder entry price. Our custom list covers 1- to 4-bedders, from that floor up to $[CEILING], with developer price lists and floor plans.
  > Choose your bedrooms and budget band, and a GoAhead consultant sends the list on WhatsApp.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline:** New launches from $[PRICE]
- **Meta description:** Developer price lists
- **Meta button:** Download
- **9:16:** headline top-left under the safe line; giant number at ~65% height so the bottom 20% stays clear; the support line sits under the number, the CTA to the right of the support line.
- **4:5:** the support line (ceiling) moves into the primary text only; the image keeps headline, giant number, unit-type line and CTA.

### C2-C · Range + tick checklist · ref-03 price box + checklist
**Layout note:** ref-03 Verde: interior photo in the top ~45%, dark charcoal panel below with a white headline, an outlined price box (price in the accent colour) and 3 tick bullets.

- **On-image headline:** Know the real price range before you visit a showflat
- **Subhead:** none (the box follows straight after)
- **Price block (outlined box):**
  `2-BEDDERS FROM $[PRICE — client to confirm, source]`
  `UNDER $[CEILING — client to confirm, source]`
- **Tick bullets (3, same in 9:16 and 4:5, from the brief's allowed list):**
  - Developer price lists, no guesswork
  - Matched to your budget and bedroom count
  - Floor plans included
- **On-image CTA:** DOWNLOAD LIST
- **Disclaimer:** standard price fine print + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Know the real price range before you visit a showflat.
  > New launch 2-bedders in Singapore: from $[PRICE] to under $[CEILING].*
  > Download the custom list with developer price lists and floor plans, matched to your budget and bedroom count. A GoAhead consultant sends it on WhatsApp.
  > *Prices from developer price lists as at [DATE]. Subject to availability and change. Excludes stamp duties. [CEA line]
- **Meta headline:** 2-bedders $[PRICE] to $[CEILING]
- **Meta description:** Floor plans included
- **Meta button:** Download
- **9:16:** photo takes the top 40%; panel holds headline, box and the 3 ticks; CTA above the bottom 20%.
- **4:5:** same 3 ticks; headline in 2 lines.

---

## C3 — "Pay as it's built" (one monthly figure is the hero)

No bedroom ladder and no ceiling. One monthly figure per ad, always with the full C3 disclaimer on the image. The brand.md "$400/month" figure is **not** used unless the client confirms its basis this month (brief item 4). The three ads differ by voice: explainer (A), surprise number (B), budget-first (C).

### C3-A · Explainer · ref-03 price box + checklist
**Layout note:** ref-03 again, but a different treatment from C2-C: **light** panel (white or pale red) instead of charcoal, the photo on the left half instead of on top in 4:5, the monthly figure in the box.

- **On-image headline:** PAY AS IT'S BUILT
- **Subhead:** Singapore new launch condos with progressive payment
- **Price block (outlined box):** FROM $[MONTHLY — client to confirm, loan assumptions, source]/MONTH*
- **Tick bullets:**
  - You pay in stages as construction progresses
  - Developer price lists, no guesswork
  - Floor plans included
  - Expert advice you can trust
- **On-image CTA:** DOWNLOAD LIST
- **Disclaimer (on the image, under the box):** full C3 disclaimer + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Pay as it's built: new launch condos from $[MONTHLY]/month* during construction.
  > With progressive payment you pay in stages as the building goes up, so instalments start lower and increase as construction progresses. Download the custom list of new launches with developer price lists and floor plans, and a GoAhead consultant will walk you through the numbers on WhatsApp.
  > *Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer. [CEA line]
- **Meta headline:** From $[MONTHLY]/month while it's built
- **Meta description:** *Illustration only, see details
- **Meta button:** Download
- **9:16:** photo top 35%, panel below with headline, box, 4 ticks, disclaimer (min. legible size), CTA above the bottom 20%.
- **4:5:** photo left, panel right; keep 3 ticks (drop "Expert advice you can trust"). The disclaimer stays in full on the image. If it doesn't fit legibly, cut a tick, never the disclaimer.

### C3-B · Surprise number · ref-01 giant number
**Layout note:** ref-01 giant number, but with a different look from C2-B: a bright daytime interior (family living room), the headline across the top centred, the giant monthly figure centred in red rather than bottom-left.

- **On-image headline:** What a new launch condo can cost per month during construction
- **Price block (giant):** $[MONTHLY — client to confirm, loan assumptions, source]/month*
- **Line under the number:** at the [STAGE] progressive payment stage
- **Chips:** none
- **On-image CTA:** GET MY CUSTOM LIST
- **Disclaimer (on the image, bottom):** full C3 disclaimer + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > This is what a new launch can cost per month during construction: from $[MONTHLY]/month* at the [STAGE] progressive payment stage.
  > Instalments increase as construction progresses. Get your custom list of Singapore new launches that fit your budget, and a GoAhead consultant sends it on WhatsApp.
  > *Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer. [CEA line]
- **Meta headline:** $[MONTHLY]/month during construction*
- **Meta description:** *Illustration only, see details
- **Meta button:** Sign up
- **9:16:** headline 3 lines under the top safe line, giant number at the centre, stage line under it, disclaimer + CTA just above the bottom 20%.
- **4:5:** headline shortens to "A new launch condo per month, during construction"; the giant number shrinks ~15% so the full disclaimer fits.

### C3-C · Budget-first · ref-04 story layout with a monthly tab
**Layout note:** ref-04 story layout, used differently from C1-A: **red** house colour (C1-A takes the blue option), a red tab with the monthly figure instead of the price tab, 3 tilted interior cards (living / bedroom / kitchen), 2 pill chips.

- **On-image headline:** START WITH WHAT YOU CAN PAY EACH MONTH
- **Subhead:** Get the custom list of new launches that fits your monthly budget
- **Chips:** `Free custom list` · `Progressive payment`
- **Price block (tab):** From $[MONTHLY — client to confirm, loan assumptions, source]/month*
- **Cards:** 3 tilted interior photos, no text on them.
- **On-image CTA:** GET MY CUSTOM LIST
- **Disclaimer (on the image, under the cards):** full C3 disclaimer + `*IMAGE SAMPLE ONLY – not the actual unit*` + CEA line.
- **Meta primary text:**
  > Start with what you can pay each month.
  > New launch condos can start from $[MONTHLY]/month* during construction with progressive payment. Instalments increase as construction progresses. Tell us your bedrooms and budget band, and a GoAhead consultant sends you a custom list of the launches that fit, on WhatsApp.
  > *Illustration only. Based on a $[UNIT PRICE] unit at the [STAGE] progressive payment stage, [TENURE]-yr loan at [RATE]% interest, [LTV]% loan-to-value. Monthly instalments increase as construction progresses. Excludes stamp duties and fees. Not a loan offer. [CEA line]
- **Meta headline:** New launches by monthly budget
- **Meta description:** *Illustration only, see details
- **Meta button:** Sign up
- **Form (performance ruling, 2026-11-07):** C3-C uses the shared form with the total **budget band** question, like every other cell. No monthly-budget question. The consultant converts to monthly on WhatsApp.
- **9:16:** headline in 2–3 lines under the top safe line, chips, tab, 3 cards, disclaimer and CTA above the bottom 20%.
- **4:5:** cut to 2 tilted cards; the subhead shortens to "Get the custom list that fits your monthly budget"; the disclaimer stays in full.

---

## Form and thank-you microcopy (same for all cells; `impeccable` clarify)

- **Form intro:** Get your custom list of homes. 3 questions. We send the list on WhatsApp.
- **Q1 label:** How many bedrooms? — 1 / 2 / 3 / 4 or more
- **Q2 label:** Your budget band — [BANDS — client to confirm, must line up with the ladder and the ceilings]
- **Q3 label:** Are you a licensed property agent? — Yes / No
- (EC opt-in only) **Q4:** [EC eligibility question, no income or citizenship — strategist/QA to word]
- **Prefilled:** Full name · Phone number (WhatsApp)
- **Submit button:** Send my custom list
- **Thank-you screen:** Thanks. Your custom list of homes will be sent on WhatsApp within [TIME — client to confirm]. · Button: **Done** (or "Visit GoAhead" only if a website link is wanted; no VIP/preview promise).

---

## Plain-copy check (`design-taste-frontend/references/copy.md`)

| Ad | Says what it is in 5 seconds | One hard fact | No metaphor / invented term | CTA = verb + what they get |
|---|---|---|---|---|
| C1-A | Yes (custom list of homes) | 1 minute + ladder prices | Pass | GET MY CUSTOM LIST / Sign up — pass |
| C1-B | Yes; names the buyer (HDB upgraders); promise line on every card | 1 minute + tier prices | Pass | DOWNLOAD LIST / Download — pass |
| C1-C | Yes | 1 minute + ladder prices | Pass ("Too many launches to check" is a plain statement, not a question) | GET MY CUSTOM LIST — pass |
| C2-A | Yes (3-bedder new launches) | Ceiling + floor | Pass | DOWNLOAD LIST — pass |
| C2-B | Yes (new launch condos in Singapore) | Giant floor price | Pass | DOWNLOAD LIST — pass |
| C2-C | Yes (price range, showflat) | 2-bedder floor + ceiling | Pass | DOWNLOAD LIST — pass |
| C3-A | Yes after the subhead ("Pay as it's built" is the brief's angle name and a plain description of progressive payment, not a coined term) | Monthly figure | Pass | DOWNLOAD LIST — pass |
| C3-B | Yes | Monthly figure + stage | Pass | GET MY CUSTOM LIST — pass |
| C3-C | Yes after the subhead | Monthly figure | Pass | GET MY CUSTOM LIST — pass |

No "Learn more", no question-mark headlines on any image, no exclamation marks. The only question is the C1-B primary text opener (identity call-out in the caption, not a headline). Note: the plain-copy file bans placeholders on finished pages. Here they are deliberate and stay until the client fills them, per the brief.

## Open items for the user / client (gate design, not this copy)
1. Prices: overall floor, the floor per bedroom, the ceilings, and the monthly figure with its full basis (brief items 1–4), with source and date.
2. Price cap rule for this list (item 6). It decides whether the 3-/4-bedder lines stay.
3. WhatsApp delivery time for "[TIME]" and the thank-you screen.
4. Whether the ref-06 trust chips (No Duplicate / Real-Time Listing / No Fake Listing) are still true (only used as an alt chip in C1-A).
5. CEA line, budget bands for Q2, EC opt-in.
6. **C3-B add-back (optional):** "…sends it on WhatsApp **with the payment stages for each**" may be added back to the C3-B primary text **only if the client confirms** the consultant actually sends the payment stages for each project. Until then it stays out.
