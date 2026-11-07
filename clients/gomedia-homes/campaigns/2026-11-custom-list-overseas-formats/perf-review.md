# Performance Review — New Launch Custom List x Overseas Formats (2026-11)

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## Strategist — brief.md + test-plan.md — 2026-11-07

Verdict: **Revise** (small, fixable issues; the strategy itself is sound)

Checked against: CLAUDE.md, brand.md, learnings.md (rows 2026-11-03 to 2026-11-06), `gomedia-homes-static-ad-rules`, `inputs/ad-references/overseas-property-formats/index.md`, brief.md, test-plan.md. Live Meta data: **none**. The Meta MCP tools were not available in this session, so I could not look up the control ad. `dashboards/account-review.csv` only lists custom-list campaigns in agent accounts (e.g. "GoAhead : Cold Lead Form: Custom List 4 Bedder under $2.3M"). Those names don't contain "buyer", so they fall outside the gomedia-homes filter and can't be used as the control.

### What passes
- KPI: the S$25 CPL target sits inside the condo benchmark (S$22–31, Arcady/Hougang) and matches the alert target. It has a qualified-rate guardrail and a day-30 CRM read, so it doesn't rely on CPL alone.
- None of the angles has been ruled out in learnings. Angle 3 builds on the only medium-confidence winner (S$17.79, n=118), and the brief correctly says that number came from a website path, not a form.
- Budget is realistic and honestly labelled. S$40/day x 4 x 14 days = S$2,240, about 22 leads per cell. The test is flagged as directional, and none of the ad sets will exit learning. Ad-set budgets (ABO) avoid the Hougang budget-starvation problem. Advantage+ creative enhancements are off.
- Kill/stop-loss levels fit the account baseline (asset 3x CPL with 0 leads, cell CPL > S$40 at day 7, lead-quality kill). Performance owns the read and `ad-creative-fatigue` makes the final call.
- Compliance: no returns, rental, "investment potential" or savings claims. Every price and monthly figure needs a source and a disclaimer. No unit counts, % sold, district codes or project names. Housing category with SG broad targeting, and eligibility asked in the form. EC is opt-in only. The "2 minutes" claim is limited to the form. The "Leading Developers" chip is dropped.
- **It's fine to hold C2/C3 until the prices are confirmed.** Inventing or reusing stale prices is the bigger risk, and the rule that all cells start on the same day is correct.

### Issues
1. **The control isn't defined and isn't price-free.** C0 is a bedroom + price ad ("4 Bedder under $2.3M" style), so it needs current, sourced prices just like C2. That means the fallback "launch Control + C1 first" also depends on the numbers. I couldn't confirm that a custom-list ad exists inside the gomedia-homes campaigns ("buyer" in the name, excluding r&f/sky/jess/gomedia). Fix: add "control ad ID + current price/source" to the "Numbers we need" list. If no in-filter ad exists, say C0 will be built new from the client's ref-05/06 format, with refreshed prices and the same compliance lines. Make price confirmation a requirement for C0 too. If the user doesn't want to wait, the alternative is C1 alone vs a price-free control. (owner: strategist)
2. **Old control instance has to be stopped.** If the control's original ad or campaign is still live, it competes with the test ad sets for the same SG audience and blurs C0. Fix: add a line saying the original control ad is paused (by the user) on test day 1 and that only the relaunched copy counts. (owner: strategist)
3. **Placement coverage per asset.** "Same placements" isn't enough. Each asset has to ship in both 9:16 (Stories/Reels) and 4:5 (Feed). The C1-B carousel needs a 1:1 or 4:5 feed version plus a separate story treatment. Otherwise one placement gets cropped versions and the cell read is skewed. Fix: add a per-asset format list to the Variants table. (owner: strategist)
4. **Monthly-figure disclaimer (C3).** A "phase 1 progressive payment" monthly figure is the lowest point of the payment schedule and grows as construction goes on. Fix: require a disclaimer that names the stage and says that payments increase as construction progresses (e.g. "Illustration only: [stage] progressive payment, [tenure]-yr loan at [rate]%, [LTV]% LTV; monthly instalments increase as construction progresses"). Also add it to the "Numbers we need" item 4. (owner: strategist)
5. **Who tags lead quality.** The quality guardrail, the lead-quality kill and the day-30 read all depend on sales tags that don't exist yet. Fix: before launch, name who tags the leads, where (sheet/CRM), how often, and which tags are used (real buyer reachable / agent / fake / unreachable). If nobody is set up to tag, say any result is CPL-only and low confidence. (owner: strategist, then tracking)

### Not verified
- Control ad ID and its recent CPL (Meta MCP unavailable in this session).
- Whether the trust chips (No Duplicate / Real-Time Listing / No Fake Listing), the shortlist delivery time and the CEA licence line are true. The client has to confirm these. The brief already lists them.
- Whether the Housing special ad category allows each instant-form custom question. QA/tracking should check this when the form is built.

### Re-review
- [x] Fixes confirmed on 2026-11-07 (see re-review below)

---

## Strategist (re-review) — brief.md + test-plan.md — 2026-11-07

Verdict: **Approved**. The copywriter can start once the user approves the brief in chat. Copy keeps the `[PRICE]` / `[MONTHLY]` placeholders, and nothing with a price goes to design until the numbers are in.

Checked against: the 5 issues above, the revised brief.md and test-plan.md. Live Meta data: none (Meta tools still unavailable).

### Issue check
1. Control isn't price-free: **Fixed.** C0 is marked as needing confirmed, sourced prices (test-plan Variants). The ad ID and current price are now "Numbers we need" item 7. C0 is rebuilt from ref-05/06 if no in-filter ad exists. A price-free C1-vs-control pre-test is offered, labelled as not the main read, and C0 is never launched on an old price.
2. Old control instance: **Fixed.** The user pauses the original on day 1, only the relaunched copy counts, performance checks on day 1, and the account guard flags it if the original is still spending.
3. Placement coverage: **Fixed.** Every asset ships in 9:16 and 4:5 with placement-specific images. The C1-B carousel has separate feed 4:5 and story 9:16 versions. File counts are listed.
4. C3 monthly disclaimer: **Fixed.** The full disclaimer names the stage, tenure, rate and LTV and says instalments increase as construction progresses. A missing disclaimer fails QA and triggers the compliance kill.
5. Lead-quality tagging: **Fixed as a process.** Who, where, when and which tags are defined. Without tags, the read is CPL-only and low confidence, the quality kill can't fire, and scaling is capped at the first +50% step. Tracking checks the setup before launch.

### Open user questions (don't block the brief; they do gate design and launch)
- Prices and the monthly basis (items 1–4, 6), EC opt-in, control ad ID and price (item 7), name of the tagging owner, delivery time, trust chips, CEA line, test budget.

---

## Strategist (re-review 2, user wording change) — brief.md + test-plan.md — 2026-11-07

Verdict: **Approved** (with 2 non-blocking notes for the strategist to tidy whenever the file is next touched)

Checked against: the user's change (C1 = "Your custom list of homes in 1 minute" + 1–4 bedder "from" ladder, 3-question form, separate C1/C2 hypotheses), the revised brief.md (rev. 2) and test-plan.md (rev. 2). Live Meta data: none.

### Checks
- **"Shortlist" wording:** a case-insensitive search of both files for "shortlist" finds nothing. The naming rule (always "Custom List of Homes" / "custom list") is in the brief, and a wrong name triggers the compliance kill. Pass.
- **"1 minute" is honest:** the form is bedrooms · budget band · licensed agent? (+ optional EC eligibility), with name and phone prefilled. That's realistic in under a minute, even on a higher-intent form. "1 minute" refers only to the form, never to delivery of the list, and C2 has no speed line. Pass.
- **Isolation now that both show prices:** still readable. C0, C1 and C2 all use the same confirmed floor prices, so the price itself doesn't differ. What changes is the hero: C1 = promise, with the ladder as small support; C2 = range (ceiling + floor), with no promise; C0 = plain bedroom + price. The test plan correctly adds "within ~15% on CPL = no difference". C0 and C2 are close cousins (both price-led), so read C2 mainly against C1 on quality, as the plan does. Pass, directional.
- **Kill/scale consistency:** a CPL win needs <= S$25. A quality win (C2) needs <= S$29 with +10 points `real buyer – reachable`. Scaling continues at <= S$25 (or <= S$29 for a quality win), and only with tags. The cell kill is CPL > S$40 at day 7, the asset kill is S$75 with 0 leads, and the quality kill is > 40% junk. The levels don't conflict. Pass.

### Notes (non-blocking)
1. The iterate path (CPL S$25–35) overlaps with the C2 quality win (<= S$29). State that the quality-win rule is checked first, so a C2 at S$27 with a clear quality lead is a win, not an iterate. (owner: strategist)
2. A 10-point quality gap on about 12–22 tagged leads per cell is noise-level. Report it as directional and low confidence unless the gap holds at day 30 with more tagged leads. Timeline is now asked only on WhatsApp, so "qualified" exists only for leads who reply. Count non-replies as unknown, not unqualified. (owner: strategist; performance applies this at readout)

### Open user questions (unchanged; gate design/launch, not the brief)
- Prices and the monthly basis, control ad ID and price, tagging owner and location, delivery time, trust chips, CEA line, budget, EC opt-in.

---

## Copywriter — copy.md (9 ads, C1/C2/C3 x A/B/C) — 2026-11-07

Verdict: **Revise** (3 small fixes, all inside copy.md; no strategy change)

Checked against: brief.md (rev. 2), test-plan.md (rev. 2), brand.md, learnings.md, `gomedia-homes-static-ad-rules`, the copywriter-stage checklist. I searched copy.md for shortlist / units / sold / district / D-codes / return / rental / gain / invest / guarantee / VIP / preview. The only hits were in the "not allowed" rule list and the image or disclaimer labels. Live Meta data: none.

### What passes
- **No "shortlist"** anywhere. The offer is "custom list (of homes)" throughout, including the form and thank-you screen.
- **Distinct sets:** each cell's 3 ads differ in both layout (story / carousel / info card; dual anchor / giant number / price box; price box / giant number / story) and hook (speed / identity / pain; range / entry fact / pre-showflat; explainer / surprise number / budget-first). C3-A and C3-C deliberately use a different look from C2-C and C1-A (light panel, red version).
- **Cell separation:** C1 leads with the promise, and the ladder sits inside a small tab or strip (A, C). C2 has no "1 minute" and no "made for you" line. C3 has no ladder or ceiling, just one monthly figure. All except issues 1–2 below.
- **C3 disclaimer:** the full text (stage, tenure, rate, LTV, "instalments increase as construction progresses", not a loan offer) is on the image and in the primary text of all three C3 ads. The rule "cut a tick, never the disclaimer" is in the 4:5 notes.
- **Compliance:** no project names, unit counts, % sold, district codes, returns or rental. Every price line has the standard fine print. Images carry IMAGE SAMPLE labels, and the CEA placeholder is on every ad. The "1 minute" claim is tied to the 3-question form, and delivery is "within [TIME]".
- **Placeholders untouched:** the full `[PRICE — client to confirm, source]` / `[CEILING …]` / `[MONTHLY …]` placeholders are on every image. Meta text uses the short `$[PRICE]` form, which is defined in the rules section and acceptable.
- Hooks are in the first line, and the hook line in each primary text survives mobile truncation.

### Rulings requested
- **C3-C form: keep the shared budget-band form.** No monthly-budget question for C3. Changing it would break "same form for all cells", and the read depends on that. The subhead "fits your monthly budget" can stay, because the consultant converts on WhatsApp.
- **C3-B "payment stages":** the on-image line "at the [STAGE] progressive payment stage" and C3-A's tick "You pay in stages as construction progresses" are plain facts, so keep them. The primary-text clause "...sends it on WhatsApp **with the payment stages for each**" is a service promise, not a plain fact. Cut it by default (see issue 3).

### Issues
1. **C1-B carousel turns price-led on cards 2–5.** The price is the largest text on 4 of 5 cards, which makes the carousel a bedroom + price carousel (the C0/C2 mechanic) and breaks the brief's rule that the ladder is never the biggest element in C1. Fix: on cards 2–5, make the promise the top line on every card ("CUSTOM LIST OF HOMES IN 1 MINUTE" eyebrow, in feed and story versions), with the tier label as the card headline and the "from $[PRICE]" line as secondary, smaller than the headline. (owner: copywriter)
2. **C2-C 9:16 keeps "Progressive payment, pay as it's built".** That's the C3 angle inside a C2 ad. The 4:5 version already drops it for this reason. Fix: drop it from 9:16 too and use 3 ticks in both sizes, so the two sizes match and the cells stay separate. (owner: copywriter)
3. **C3-B primary text: make the cut the default.** Write the line as "...and a GoAhead consultant sends it on WhatsApp." Move "with the payment stages for each" to the open items as an add-back only if the client confirms. That way design and QA never see the unconfirmed promise. (owner: copywriter)

### Not verified
- All prices, ceilings, the monthly figure and its basis, budget bands, delivery time, CEA line and trust chips (client items). Nothing with a price goes to design until they're filled.
- Rendered text fit and safe zones: these are checked at the static-designer stage.

### Re-review
- [x] Fixes 1–3 confirmed on 2026-11-07 (see re-review below)

---

## Copywriter (re-review) — copy.md — 2026-11-07

Verdict: **Approved**. Static-designer can start the spec. Nothing with a price goes to design until the client fills the numbers, and paid generation still needs a cost estimate and the user's go-ahead.

Checked against: issues 1–3 above and the revised copy.md. Live Meta data: none.

1. C1-B cards 2–5: **Fixed.** Every card in the feed and story sets has the type order promise line "CUSTOM LIST OF HOMES IN 1 MINUTE", then the tier headline (largest), then the "from" price (secondary and smaller), then the CTA. The story top line sits below the 14% safe line. The carousel stays promise-led.
2. C2-C: **Fixed.** 3 ticks, identical in 9:16 and 4:5. "Progressive payment, pay as it's built" is gone from C2. It now appears only in C3.
3. C3-B: **Fixed.** The primary text ends "...sends it on WhatsApp." The payment-stages clause is open item 6, as an add-back only if the client confirms. The on-image stage line stays because it's a plain fact.

### Not verified
- Client facts (prices, ceilings, monthly basis, bands, delivery time, CEA line, trust chips), and rendered text fit and safe zones. Both are checked at the static-designer and QA stages.

---

## Static-designer — creative-spec.md + custom-list-prompts.md — 2026-11-07

Verdict: **Revise** (2 small fixes; text, separation and compliance all pass)

Checked against: copy.md (approved), brief.md rev. 2, test-plan.md rev. 2, `gomedia-homes-static-ad-rules`, the static-stage checklist. Scanned both files for shortlist / landmarks / logos / returns / rental / invest / sold / district / units. Hits are only in the "Avoid" lists. Live Meta data: none.

### What passes
- **Text = copy.md.** Every headline, subhead, chip, ladder line, tick, seal, ribbon, CTA, the 4:5 shortenings and the C1-B type order match copy.md. Placeholders are kept, with a swap table, and "never ship brackets" is stated.
- **9 visibly different ads:** each one has its own palette, light, subject, typeface and CTA shape. The ref-04 pair (C1-A blue, flat tilt; C3-C red, fanned), the ref-03 pair (C2-C charcoal; C3-A light, split) and the ref-01 pair (C2-B golden interior, bottom-left; C3-B family, centred card) are clearly separated.
- **Cell separation is visual too:** C1 hierarchy puts the promise first, the ladder sits in a tab or strip, and on C1-B tiers the price is about 45% of the headline size. C2 hierarchy puts the price first (ceiling, giant number, price box). C3 has one monthly figure and no ladder.
- **Disclaimers:** the price line is on every price ad. The full C3 disclaimer is on all 6 C3 images. IMAGE SAMPLE labels are correct (interiors "not the actual unit", skyline "not the actual development"). The CEA slot is on every ad.
- **Safe zones:** all 9:16 layouts keep text out of 0–270 px and 1535–1920 px. CTAs sit at about 75–79%.
- **No real project, landmark, logo, face or banned claim.** Every prompt has an explicit "Avoid" list. Logos only go in via Canva.
- **Cost and gates:** about 26 images, ~US$5.20 for one pass (~US$10.40 with retries); image-only route ~US$4.80. Two gates are stated, nothing has been generated, and the rate is to be confirmed before any call.

### Ruling requested
- **C1-B card 1 with no photo: OK to drop the image label.** A label with nothing to label is meaningless. Condition: card 1 stays a flat colour and text card, with no photo, render or photoreal texture. If any image is added later, the label comes back. The price fine print and the CEA slot stay on card 1, because it shows the ladder.

### Issues
1. **House photo rule deviation isn't flagged.** The static rules and the brief's must-list say "real interior photo collage feel, never a single hero shot alone". C2-A (skyline), C2-B, C2-C, C3-A and C3-B (single full-bleed or single-panel photos) break it. That's the nature of the overseas formats under test, so I'm not asking for a redesign. Fix: add Flag 6 in creative-spec.md listing these 5 ads as a deliberate deviation for the overseas-format test, so the user approves it knowingly at the approval box. Offer the fallback: a small 2-photo inset collage on C2-C and C3-A if the user wants to stay on-rule. (owner: static-designer)
2. **4:5 C3 disclaimer at ~16 px is too small.** At feed display width (~400 px on a phone), 16 px at 1080 renders at about 6 px, which is unreadable. The spec's own minimum is about 18 px. Fix: set the 4:5 C3 disclaimer at the 18 px minimum or larger in all three C3 4:5 prompts. If it doesn't fit, cut a tick or shrink the hero, as copy.md already allows. (owner: static-designer)

### Not verified
- Rendered output: legibility, safe zones in a real placement preview, and garbled text. Nothing has been generated yet. QA checks this on the Canva/Figma finals.
- Client facts that fill the placeholders.

### Re-review
- [x] Fixes 1–2 confirmed on 2026-11-07 (see re-review below)

---

## Static-designer (re-review) — creative-spec.md + custom-list-prompts.md — 2026-11-07

Verdict: **Approved**. This goes to QA. The approval box and the per-batch cost go-ahead are still the user's call, and prices must be swapped in before any generation.

Checked against: issues 1–2 above and the revised files. Live Meta data: none.

1. Photo rule: **Fixed.** C2-C and C3-A now have a 2-photo inset collage, in both the full and image-only prompts, so they're on-rule. C2-A, C2-B and C3-B are listed as Flag 6 in creative-spec.md and at the top of the prompts file. Note: that's a deviation **for the user to approve**. It isn't approved yet. Ticking the approval box approves it, and the on-rule fallback is offered. Correct handling.
2. C3 4:5 disclaimer: **Fixed.** All three C3 4:5 prompts are now "at least 18 px", and the 9:16 versions are about 19 px. The other price fine print is at 18 px.

### Note (non-blocking)
- The C2-B 9:16 full prompt's price fine print is still "about 17 px" (custom-list-prompts.md, C2-B 9:16 section). Set it at 18 px in Canva to match the rest. It only affects the mock-up prompt, because finals are set in Canva.

### Not verified
- Rendered legibility, safe zones in a real placement preview, and client facts. QA checks these on the finals.

---

## Video-designer — video-script-c1-custom-list.md (15 s 9:16, user's C1 static animated) — 2026-11-07

Verdict: **Revise** (5 fixes; the hook choice, timing and labels are fine)

Checked against: brief.md rev. 2, test-plan.md rev. 2, copy.md (approved C1-A), brand.md, learnings.md (video CPL rows), `gomedia-homes-static-ad-rules`, the video-stage checklist (`ad-hook-analyzer` logic). Live Meta data: none.

### What passes
- **No "shortlist" in any ad-facing text.** The only hit is the internal label "Ranked shortlist" in the hook-ranking section. Rename it to "Ranked hooks" to keep the file clean (cosmetic). The offer is called "custom list" throughout.
- **Hook:** A is the right top pick. The message lands on frame 0 (eyebrow already on screen) and reads with sound off. It's the same message as the C1 statics, and the kicker "CUSTOM LIST · 3 QUESTIONS" arrives by 0.8 s. B is a strong alternative. C was correctly held (unsourced price-led opening that belongs in C2).
- **Length:** I counted 45 raw VO words (11 + 11 + 10 + 8 + 5). At ~2.5 words/s that's ~18 s raw, or ~15.0 s at 1.2x, plus a 0.6 s hold. That fits, and there's a 1.25x fallback if it runs long.
- **"1 minute"** is tied to "3 quick questions", and WhatsApp delivery is on screen and in the VO. Delivery time is a placeholder.
- **Labels:** IMAGE SAMPLE ONLY stays on screen whenever the cards are visible, including the end card. The price fine print and CEA line are on the end card at 28 px or more. Brackets are never shipped. Image rights are asked of the user. No WhatsApp logo, no paid generation.

### Issues
1. **The on-screen headline isn't approved copy.** "YOUR SINGAPORE PROPERTY IN 1 MINUTE" can read as "get a property in 1 minute". The script itself recommends the swap but keeps the old line as the default. Fix: make "YOUR CUSTOM LIST OF HOMES IN 1 MINUTE" the default headline in beats 1–2 and the beat table. Keep the static's wording only if the user explicitly asks for it. (owner: video-designer)
2. **Beat 5 makes price the hero inside a C1 asset.** A full-width price box, a count-up to $1.2M and its own VO line ("Two-bedders from one point two million") is the C2 mechanic. That's the same reason Hook C was held. Fix: cut the price box and count-up. Let beat 6's card flashes carry the "from" prices as small support (the C1 ladder rule). Drop or shorten the price VO line and re-time to about 15 s. Until a sourced price is in hand, show `from $[PRICE — client to confirm, source]` and never a bare "$1.2M". (owner: video-designer)
3. **"Resale condos and sub-sale units" goes beyond the approved offer.** The brief and test plan are a *New Launch* Custom List, every floor comes from developer price lists (resale and sub-sale units don't have those), and the form and WhatsApp flow are built for new launches. Fix: the default sub line and VO become copy.md's "New launch condos that fit your budget and bedrooms" (re-count the words). Resale/sub-sale goes to the user as an open question. If the user wants it, it's a brief change for the strategist, not a video edit, and "developer price lists" would then need rewording. (owner: video-designer; user question)
4. **Captions sit in the Reels/Stories bottom UI zone.** The script says "caption pill at the bottom" in beats 1–7. Anything below y≈1536 gets covered. Fix: keep the caption pill at y ≤ ~1500 in every beat, not just beat 8. Check that it doesn't collide with the fine print (y≈1450–1530) on the end card. (owner: video-designer)
5. **How the video is tested.** "Use Hook B as the second test cell" contradicts the test plan. Fix: run the video as **one extra asset (C1-D, Hook A) inside the C1 ad set**, not as a new cell. Hook B is a later `_V02` iteration only if C1-D earns delivery. In the test plan's terms, it gets the same asset kill (S$75 with 0 leads, not before day 3). Because video CPL in this account has run S$33–59 vs ~S$22–31 for statics (learnings 2026-11-03/05), read it at asset level vs the C1 statics. If C1-D takes more than about 50% of C1's spend, report the C1-vs-control result as confounded by format. Hook-rate definition for the read: 3-second video plays ÷ impressions (thumb-stop), with ThruPlay ÷ 3-second plays as hold rate. Add this to the script's notes. The strategist should add one line to test-plan.md. (owner: video-designer + strategist)

### Not verified
- The real VO timing (needs the ElevenLabs file), rights to the 4 interior photos in the user's static, the GoAhead logo, and the $1.2M source and market.

### Re-review
- [x] Fixes 3–5 confirmed on 2026-11-07. Points 1–2 handled as Main/Alt for the user (see re-review below)

---

## Video-designer (re-review) — video-script-c1-custom-list.md — 2026-11-07

Verdict: **Approved**. **Both Main and Alt are compliant and launch-safe** once the placeholders are filled. Points 1–2 are now advice, not blockers. The user picks the version.

Checked against: issues 1–5 above, the revised script (Main + Alt beat swap, end-card spec, VO, captions, the C1-D test note). Live Meta data: none.

- **Point 3 (scope): fixed.** The sub line and VO now use the new-launch wording from copy.md. Resale/sub-sale is a user question, and a "yes" means a brief change.
- **Point 4 (safe zones): fixed.** Captions sit at y≈1420–1490 in every beat. End-card stack: CTA at y≈1120–1250, fine print at y≈1280–1400 (28 px or more, held 2 s or more), captions below that. Nothing is in the top 270 px or below y 1500. The eyebrow moves to y ≥ 290.
- **Point 5 (test design): fixed.** The video runs as C1-D, an extra asset inside the C1 ad set, under the same asset kill rule. C1 is reported as "mixed by format" if C1-D takes more than half of the spend. Hook rate = 3-second plays ÷ impressions.
- **Compliance in both versions:** the price is shown as `$[1.2M — source + date, client to confirm]` and isn't recorded in the VO until it's sourced. The other tiers use `$[PRICE …]`. The price fine print and CEA line are on the end card. IMAGE SAMPLE ONLY stays on screen whenever the cards are visible. "Never ship brackets" is stated. "1 minute" refers to 3 questions, and WhatsApp delivery is stated.
- **Heading rename: done** ("Ranked hooks").

### Advice (not blockers)
- **I prefer the Alt version.** In Main, the headline "YOUR SINGAPORE PROPERTY IN 1 MINUTE" depends on the kicker to avoid reading as "a property in 1 minute". Main's $1.2M box also makes price the hero inside the promise-led C1 cell. If the user picks Main, the C1-D read is partly a price-led read, so it's another reason to report C1 as mixed if C1-D takes most of the spend.
- **Cosmetic leftover:** the hook-ranking section still says "Hook B ... Use it as the second test cell". It should read "a later `_V02` iteration of C1-D". This is for the video-designer to tidy and doesn't change the plan.

### Not verified
- Real VO timing, rights to the user's interior photos, the $1.2M source and market, the GoAhead logo.

---

## Video render — out/c1-custom-list-15s.mp4 (Main version, user's Adam VO at 1.0x) — 2026-11-07

Verdict: **Revise** (4 small fixes). Not launch-ready until the placeholders are filled.

Checked against: the contact sheet `out/c1-custom-list-15s_contact-sheet.png` (8 stills), the source `video/src/CustomList.jsx`, the `video/public/` assets, the approved script (Main), copy.md, brief.md, the static rules. I didn't play the MP4 itself (audio and motion are judged from the source timings). Live Meta data: none.

### What passes
- **Headline "jump" between 6 s and 8 s: not a bug.** In the source, the hero-to-static layout shift runs once, at 4.3–4.7 s (`shift = prog(frame, 4.3, 12)`). The headline sits at the same y (~292 px) at 6.0 s and 8.0 s. The two contact-sheet rows are just offset vertically.
- **Safe zones:** header from y 292; the end card stacks the CTA (1148–1260), the fine print (1272–~1400) and the captions (1420–1486), all above y 1536. Pass.
- **Fine print:** 28 px, on screen 12.3–15.0 s (2.7 s), with the asterisk tied to the price. IMAGE SAMPLE ONLY sits under the cards from 8.2 s. No "shortlist" (0 hits in the source), no WhatsApp or other third-party logos. Captions follow the VO word for word.

### Fixes
1. **Weak first 3 s (sound-off).** For 0–2.4 s the frame shows only "SINGAPORE HOMEBUYER / YOUR SINGAPORE" on an empty blurred background. "1 MINUTE" lands at 3.4 s, and the cards only arrive at 8.2 s. Fix in `Header`: decouple line 2 from the slow VO. `l2 = prog(frame, 0.25, 6, EXPO)`, `hl = prog(frame, 0.5, 8)`, kicker from 0.8 s (`prog(frame, 0.8, 7)`). That gets the full headline, highlight and "CUSTOM LIST · 3 QUESTIONS" on screen by about 1 s. Optional: start the card fan-in at the 4.3 s shift instead of 8.2 s.
2. **"Get your dream property in just one minute" is a claim problem.** The VO and captions say you get a *property* in 1 minute, which is misleading (CEA/Meta), and it's new wording that wasn't in any approved version. The headline already leans that way. Fix: re-generate that one VO line as "get your custom list of homes in just one minute" and update `W` and `CAPS`. If the user won't re-record, the minimum fix is to keep the "CUSTOM LIST · 3 QUESTIONS" kicker on screen from frame 0 to 4.3 s, and change the caption to "get your custom list in just 1 minute". The caption may then differ from the VO, so flag that to the user.
3. **Floor-plan panel (`floorplan.png`) isn't in the approved script, and its source is unknown.** It's a detailed real-looking plan (likely from the web or a developer, so CLAUDE.md rule 6 applies). Placed next to "$1.2M FOR 2-BEDDERS", it implies it's that unit's layout. The "SAMPLE ONLY" label is 16 px, which is unreadable. Fix: confirm the rights, or replace it with a simple code-drawn generic plan. Either way, label it "Illustrative layout only – not an actual unit" at 23 px or more. Also confirm the rights to `bg-pool.jpg` and the 4 card photos. (Heavily washed out, so low risk.)
4. **Launch conditions (no code change until the facts arrive).** "$1.2M" is shown bare while the fine print still says "[DATE]" and the CEA line is a placeholder. Before upload: source $1.2M (developer price list, project, date), fill [DATE], fill or delete the CEA line, re-render, and check the final has no brackets. Run it as asset C1-D inside the C1 ad set (per the earlier review).

### Not verified
- Audio mix and loudness, real playback smoothness, the $1.2M source.

### Re-review
- [ ] Fixes 1–4 confirmed on [date]

---

## Video render (kinetic, HyperFrames) — hyperframes/out/c1-custom-list-15s-kinetic.mp4 — 2026-11-07

Verdict: **Revise** (2 small code fixes, plus launch conditions). A clear step up from the Remotion cut.

Checked against: the contact sheet `hyperframes/out/c1-custom-list-15s-kinetic_contact-sheet.png` (10 stills with red safe-zone guides), the source `hyperframes/index.html` (layout, GSAP timeline, captions, audio tracks), the previous render review, copy.md and the static rules. I didn't play the MP4 itself. Live Meta data: none.

### What passes
- **Hook, 0–1 s:** "SINGAPORE" fills the frame at 0.05 s. By 0.9 s it's "SINGAPORE HOMEBUYERS" in a blue block with a "FREE CUSTOM LIST" chip. The full promise ("GET YOUR CUSTOM LIST OF HOMES IN JUST 1 MINUTE · 3 QUESTIONS") is up by ~3.4 s. That's a real audience call-out with the offer in the first second, and it fixes render-review issue 1.
- **Readability:** one idea per scene (2.7–3.9 s each), headline type at 140–236 px, chips at 54 px. It's fast but readable. The price, the cards and the plan each get their own beat.
- **Safe zones:** all text sits between the red guides. The top chip is at y 330, the CTA at y 1080–1204, the fine print from y 1232, and the captions at y 1440–1502. Pass.
- **Labels:** "IMAGE SAMPLE ONLY – not the actual unit" covers the S4 cards from 8.41 to 10.55 s. The last photo card flips out at 10.58 s, so no photo is unlabelled. On the end card the label sits under the minis. The floor-plan label is now "Illustrative layout only – not an actual unit" at 28 px, which fixes render-review issue 3 (label part).
- No "shortlist" and no logos (no hits in the source; WhatsApp is text only). The on-screen offer is the approved "custom list" wording.

### Rulings
- **SFX: drop the 4 whooshes** (`sx-w1`–`sx-w4`). The kinetic cuts carry themselves, and whooshes under a 1.0x VO compete with the words. Keep the 4 card pops (they read as one cluster at 8.45–8.94 s), the impact on "million" and the CTA click. That's 3 effect types, within the house rule's spirit.
- **Caption/VO mismatch** ("get your custom list" on screen vs "get your dream property" in the VO): **OK as an interim only.** The on-screen text is compliant, but Reels/Stories are watched mostly with sound on, so the "property in one minute" claim still reaches most viewers by audio. Re-recording that one line is a **launch condition** (below), not a render blocker.

### Fixes
1. **The end-card fine print is 26 px; the spec minimum is 28 px.** Set `#fine` to `font-size: 28px` and check that it still clears the captions at y 1440. On-screen time is 12.25–15.0 s (2.75 s), which is OK. (owner: video-designer)
2. **Remove the 4 whoosh `<audio>` clips** (lines `sx-w1`–`sx-w4`) and re-render. (owner: video-designer)

### Launch conditions (before upload; user/client facts)
- Re-generate the VO line as "get your custom list of homes in just one minute" (ElevenLabs, client's account), re-time `W`, and make the captions match the VO again.
- Source $1.2M (developer price list, project, date). Fill [DATE]. Fill or delete the CEA line. Make sure no brackets are left in the final.
- Confirm the rights to `floorplan.png` (source still unknown, CLAUDE.md rule 6), or swap in a code-drawn generic plan.
- Run it as asset C1-D inside the C1 ad set, with the same asset kill rule. Hook rate = 3-second plays ÷ impressions.

### Not verified
- Audio mix and loudness, real playback smoothness and motion blur. Judged from the stills and the source only.

### Re-review
- [x] Fixes 1–2 confirmed on 2026-11-07 in v2 (fine print 28 px, whooshes removed)

---

## Video render (kinetic v2) — hyperframes/out/c1-custom-list-15s-kinetic-v2.mp4 — 2026-11-07

Verdict: **Revise** (2 small fixes, plus a cell ruling). The v1 fixes are done: fine print is 28 px on a backing panel, and the 4 whooshes are gone (6 cues: 4 card pops, the impact, the click).

Checked against: the contact sheet `hyperframes/out/c1-custom-list-15s-kinetic-v2_contact-sheet.png` (12 stills with safe-zone guides), the source `hyperframes/index.html` (assets, labels, timeline, audio), the earlier reviews, the brief and the static rules. I didn't play the MP4 itself. Live Meta data: none.

### What passes
- **Contrast:** the sky-blue wash (0.5 opacity on the hook, 0.74–0.8 after) keeps the black and white headline type readable over the aerial. Captions sit in dark pills, and the fine print has its own light panel. The busiest frame (0.05–0.9 s) is still readable.
- **Labels:** "IMAGE SAMPLE ONLY – not the actual development" is shown from frame 0 to the end (23 px, top-right). The room photos get "not the actual unit" (8.94–10.94 s, and on the end card). The plan keeps "Illustrative layout only – not an actual unit" through its flip.
- **Safe zones:** all text sits between the guides. Fine print is at y 1222–~1370 and captions at y 1440. The background label at y 274 is right on the 270 px line. Moving it to y ≥ 290 would be cleaner (optional).
- **"Dream property"** no longer comes with "in one minute", so it's ordinary puffery and no longer the speed claim I flagged before.

### Fixes
1. **The opening price claim has no disclaimer on screen when it's made.** "$1.2M*" and "2-BEDDER ENTRY PRICE*" show at ~3.3–5.3 s. The VO says "dream property from just one point two million dollars" without "2-bedder", and the explanation only appears at ~12.3 s. Fix: add a short fine line under the price chip for the whole S2 price beat, at 23 px or more and inside the safe zone: "*Indicative 2-bedder new launch price, developer price list as at [DATE]". Keep the end-card fine print as it is. (owner: video-designer)
2. **Background aerial (`bg-aerial.jpg`): the source and identifiability are unknown.** A real, recognisable SG condo (distinctive curved pool and blocks) in a GoAhead ad is a CLAUDE.md rule 6 rights question. It also risks viewers reading it as one of "our" listed projects, whatever the label says. Fix: confirm GoAhead owns or licenses the image and that it isn't a recognisable named development. Otherwise swap in a generic or AI aerial, or blur it further. Keep the label either way. (owner: video-designer; user to confirm source)

### Ruling: which cell this goes in
- v2 now leads with price: "$1.2M" is the hook at 3.3 s, and "1 minute" only appears on the end-card chip. That's the C2 mechanic (C2-B, entry-price fact), not C1's promise-led angle. Recommendation: **run it as C2-D inside the C2 ad set**, not as C1-D. That keeps C1 clean. If the user still wants it in C1, report C1 as "mixed: price-led video" whatever its spend share. This is the user's call, and the strategist adds one line to test-plan.md.

### Launch conditions (unchanged)
- Source $1.2M (developer price list, project, date). Fill [DATE] in both fine-print lines. Fill or delete the CEA line. No brackets in the final. Confirm the rights to `floorplan.png`.

### Re-review
- [ ] Fixes 1–2 confirmed on [date]
