# Performance Review — Amber House

Copied from campaigns/2026-11-new-launch-projects/perf-review.md on 2026-11-07 when projects moved to their own folders. New reviews go at the bottom.

---

## End-of-chain review (research + copy + static prompts) — Amber House — 2026-11-04

Files reviewed:
- `research-amber-house.md` (researcher)
- `copy-amber-house.md` (copywriter)
- `amber-house-prompts-v2.md` (static-designer)

**Overall verdict: Revise.** The copy is close to launch-ready. Launch is **not** cleared yet. The shared issues S1–S7 below must be fixed first, and the form/landing page, QA and tracking stages have not run.

Process note: the user chose a shortened flow in chat (researcher -> copywriter -> static-designer -> one performance check). There is no `brief.md` or `test-plan.md`, so this review stands in for the brief/test-plan sign-off. The test structure further down is a **recommendation only**. The user still has to approve the brief and approve before launch.

Checked against: CLAUDE.md, brand.md, learnings.md, `.claude/skills/gomedia-homes-static-ad-rules/SKILL.md` (including the client copy rules of 2026-11-04), `inputs/competitors/amber-house-meta-ad-library-2026-11-04.md`, and **live Meta data** (read-only, account 903306407477320, campaign name contains "buyer" with no r&f/sky/jess/gomedia, ad name contains "Amber House", lifetime):

| Ad | Campaign | Status | Spend (S$) | Form leads | CPL (S$) | CTR (all) |
|---|---|---|---|---|---|---|
| Amber House 5 (catalog/dynamic template) | GoAhead Amber House New Launches [BUYER] – Copy | campaign paused | 323.38 | 5 | 64.68 | 0.65% |
| Amber house Video (developer video, "Download full price list & e-brochure", button GET_QUOTE) | GoAhead Amber House New Launch [BUYER] 2 – Copy | **ACTIVE** | 74.91 | 2 | 37.46 | 1.49% |
| Amber House 1–4 (two campaigns) | as above | paused | 79.02 combined | 0 | — | 0.0–2.0% |
| **Total** | | | **477.31** | **7** | **~68** | |

**What this means:** Amber House has cost about **2.5–3.5x the account's usual CPL** (S$17.79–27.03 in learnings.md). n = 7 leads, so confidence is low, but every ad points the same way. The project launched in June 2025 and is about 85% sold, so the remaining buyer pool is thin. Budget should be set expecting **about S$35–65 per lead**, not S$20.

---

### Per-ad assessment

| | C1 Direct | C2 Blind (lifestyle) | C3 Floor layout | C4 MRT | C5 Price (blind) |
|---|---|---|---|---|---|
| **Hook / thumb-stop** | Strong for warm buyers. Name + "$2.1M" in red. | Weak to moderate. "Rare Freehold Condo in East Coast" is generic and is closest to the developer's own "Freehold Home in District 15". | Weak. A generic line drawing at about 60% of a 4:5 frame is small on a phone. "Compare 3 layouts" but only one plan is shown. | Strong. A specific minute count ("4-Min Walk") beats "near MRT". | Strongest. Freehold + East Coast + a real number is the best combination for East-side upgraders. |
| **Offer clarity** | Clear. | Clear CTA. No price, so no pre-qualification. | Medium. Promises all plans, but 2 of 7 types are sold out. | Clear. | Clear. Small risk: the subhead says "Final 3-bedroom homes left" next to "From $2.1M", which can read as "3BR from $2.1M" (3BR actually starts at S$3.08M). |
| **Hidden name: effect on CPL / quality** | Name shown. Expect the highest intent and smallest reach, and direct competition with Far East's own page in the same auction. | Likely cheaper CPL but **lowest quality**. No name and no price brings in curiosity leads who may be under budget. | Same as C2, but the $2.1M subhead filters some out. | Helps. The price in the subhead pre-qualifies. | Helps. The price in the headline pre-qualifies. This is the cleanest test of name vs no name against C1. |
| **Match to "GET PRICE LIST & E-BROCHURE"** | Good. | Good. | Good **if** the e-brochure really contains floor plans. Confirm. | Good. | Good. |
| **Differentiation from Far East** | Good. The developer never shows a price. | Poor. Same "freehold + area" frame as the developer and Home Haven Hub's "Rare Freehold Near MRT". | Good. No one uses a plan as the hero. | Good. The developer never uses MRT. | Good. Price + sourced scarcity are unused by the developer. |
| **Policy risk** | Medium. Undated "Over 80% sold". The AI building next to the real project name (see image risk). | Low. | Medium. A generic plan shown as "the layouts" of a real project is a misleading-representation risk. | Low to medium. A walk time from the developer is fine if attributed (primary text does this). | Medium. Scarcity line must be current. The "from" price should say which unit. |
| **Image-generation risk** | **High.** The real tower is a slender bronze facade with a grid of balconies (seen in the live developer video). An AI tower captioned "Amber House" will not match. Even with the "artist's impression" label, that misrepresents a real named building. | Low. Generic street. | High. See C3 issues. | Medium. An AI metro entrance with all signage stripped tends to look fake or non-Singaporean, and the model may still add lettering. | Low. Generic interior with the IMAGE SAMPLE label. |

Housing special ad category: none of the five relies on restricted targeting. ICP labels such as "families/upgraders" are copy direction only and must not become age/gender/postcode targeting. **Pass.**

---

### Ranking (expected performance on cost per *qualified* lead)

1. **C5 Price (blind)**: broadest pull, and the price pre-qualifies buyers.
2. **C4 MRT**: specific, differentiated fact, with price in the subhead.
3. **C1 Direct**: highest intent and likely best quality per lead, but smaller reach and higher CPL. Past named Amber House ads cost S$37–65 per lead.
4. **C2 Blind lifestyle**: cheap clicks are likely, but lead quality is the most at risk and it is the least differentiated.
5. **C3 Floor layout**: weakest thumb-stop, and the creative has the most unresolved issues.

**Launch first: C5, C4, C1.** C5 and C1 carry the same price message with and without the name, so this wave also answers the client's hidden-name question. Hold C2 and C3 for wave 2, or as fatigue replacements.

---

### Recommended test structure (RECOMMENDATION ONLY. No spend without the user's approval in chat.)

- **Campaign:** 1 Leads campaign, Housing special ad category, Singapore. Use whichever conversion path tracking can verify (instant form, which is what Amber House used before, or the website). Don't split between both in this test.
- **Ad set:** **1 ad set** with Advantage+ audience / broad, Advantage+ placements, holding C5, C4 and C1. Exclude existing Amber House leads if that exclusion is allowed under the Housing category. A single ad set is used because at a S$35–65 CPL, one ad set at S$60/day gives about 7–12 leads a week. That is far below the ~50 a week needed to exit learning, so splitting would make it worse. Be clear going in that this test **will not exit learning**. It is a directional read on lead quality, not a statistically clean one.
  - Optional alternative if the user wants a clean read on name vs no name: 2 ad sets at an equal S$30/day each, with Named = C1 and Blind = C5 + C4. This roughly doubles the time needed for a read.
- **Budget:** about **S$60/day for 14 days (about S$840)**, expected to produce about 13–24 leads at the historical CPL. Decide about the **existing active "Amber house Video" ad** first. Either pause it or move it into this ad set, so the two don't bid against each other for the same tiny audience. That is the user's call; I don't touch the account.
- **Deciding metric:** **cost per qualified lead**. Working definition until brand.md fixes one: budget of S$2.1M or more is confirmed, buying within 6 months, and answers WhatsApp/call. Sales must tag every lead within 72 hours. CPL, link CTR and form completion rate are diagnostics only. If sales can't tag leads, this test **cannot be judged** (see S6).
- **Kill / scale guardrails** (heuristics based on this account's own Amber House baseline. The final fatigue/kill/scale verdict comes from `ad-creative-fatigue`):
  - Don't judge an ad until it has spent about S$80 (about 2x the best historical Amber House CPL) **and** run 3 full days, to allow for conversion lag.
  - Pause candidate: an ad at about S$120 spent with 0 leads, **or** 0 qualified leads from its first 5 leads. Confirm with `ad-creative-fatigue` before pausing.
  - Scale candidate: cost per qualified lead at or below about S$80 (a CPL at or below S$40 with about half of leads qualifying). Raise the budget by no more than 20–30% every 3–4 days.
  - **Project-level stop-loss:** if the whole test spends about S$840 and yields fewer than 3 qualified leads, stop Amber House. Move the budget to projects with more unsold stock. At about 85% sold, this project may simply not have the demand.

---

### Issues

**Shared: apply to every ad that launches (all must be fixed before launch)**

S1. **No 9:16 versions.** Only 4:5 is specified, so Stories/Reels inventory gets cropped or skipped. → Add a 9:16 (1080x1920) version of each first-wave ad, with the headline, price and CTA kept inside the safe zone (roughly the middle 1080x1420, clear of the top 14% and bottom 20%). (owner: static-designer)

S2. **Text rendered by the image model.** The 18 px fine print, the photo label and the prices are at high risk of garbling, and a wrong price is a compliance problem. → Make it mandatory: generate the visuals with no text, then set all text in Figma/Canva and proof every character against `copy-amber-house.md`. Your flag 2 already suggests this. Make it the workflow, not an option. (owner: static-designer)

S3. **CEA advertising particulars are unresolved.** brand.md still lists the CEA licence/registration line as TODO, and nothing confirms that GoAhead's agency is authorised to market Amber House. An agent ad that names a developer project (C1) without that authorisation, or without the required salesperson/agency particulars, is a regulatory risk, not a creative one. → The client confirms (a) the required particulars and where they go on the image/primary text, and (b) the authorisation status for this project. Reserve space above the CTA. (owner: strategist via the user/client; then copywriter + static-designer)

S4. **Scarcity and stock claims need a date.** "Over 80% sold" comes from an undated EdgeProp figure. "Final 3-bedroom homes" and "From $2.1M" depend on live stock. → Within 48 hours of launch, get current figures from the developer's sales team or the client. Print "Over 80% sold" only if confirmed, and drop it otherwise (C1 still works without it). Update the fine-print date. If the 2BRs are gone, every "$2.1M" line changes. (owner: copywriter)

S5. **No lead form / landing page exists yet.** C2–C5 hide the name, so the first screen after the click has to (a) reveal "Amber House", (b) restate "2-bedroom from S$2.1M", and (c) ask 2–3 qualifying questions (budget band, timeline, own-stay or investment). This protects lead quality against the hidden-name and price-curiosity clicks. Also set the Meta CTA button to match the banner ("Download", not the GET_QUOTE used on the live video ad). → Write the `lp-brief.md` / form spec. (owner: landing-page)

S6. **No lead-quality feedback loop.** learnings.md says "No sales feedback yet". Without qualified/unqualified tags, the deciding metric can't be read and this review falls back to CPL, which I've said is the wrong metric. → Tracking confirms the form/pixel lead event fires and agrees a 72-hour lead-tagging process with sales before launch. (owner: tracking)

S7. **Image rights and assets.** The live "Amber house Video" uses official developer footage, so official renders exist. → Ask the client whether GoAhead has the rights to use the official renders and floor plans. If so, use them (this resolves C1-1 and C3-1). (owner: user/client, then static-designer)

**C1 Direct: Revise**
1. The AI tower is captioned with the real project name. → Use the official developer render (S7). If there are no rights, use a non-building visual (e.g. an interior with the IMAGE SAMPLE ONLY label) rather than a fake "Amber House" tower. (owner: static-designer)
2. "Rare freehold" appears in both the headline and the subhead, which wastes space. → Keep "rare freehold condo" in the subhead (client rule) and shorten the headline to "Amber House: Freehold From $2.1M". If the client wants "Rare" in both, that is their call; this is only a space note. (owner: copywriter)

**C2 Blind (lifestyle): Revise. Hold for wave 2.**
1. It is the least differentiated from the developer and Home Haven Hub, and without a price it carries the highest junk-lead risk. → Before wave 2, make the lifestyle the headline (for example, "Walk to Parkway Parade & i12 Katong") and put "rare freehold condo … from $2.1M" in the subhead. That keeps it need-led and name-free, and adds a price filter. (owner: copywriter)

**C3 Floor layout: Revise. Hold for wave 2.**
1. A generic plan presented under "Compare 2, 3 & 4-Bedroom Freehold Layouts" for a real project is a misrepresentation risk. → Use the official plan with the name and codes removed (S7). Otherwise, label the plan "ILLUSTRATIVE LAYOUT ONLY" and change the headline so it doesn't claim to show the real layouts. (owner: static-designer, copywriter for the headline)
2. Two of the seven unit types are sold out, but the headline invites people to compare all of them. → Make the headline match the types that are still available once stock is confirmed (S4). (owner: copywriter)
3. The plan is too small to stop a thumb at 60% width of a 4:5 frame. → Make the plan full-width as the hero, with the building as a small inset. (owner: static-designer)

**C4 MRT: Revise (shared issues only, plus 1)**
1. An AI "unbranded MRT entrance" is likely to look fake or non-Singaporean. → Generate 2–3 options and reject any that show lettering or look non-local. A fallback is a simple drawn walking-route graphic (condo dot, dotted path, "4 min" label, no LTA logos or line colours). (owner: static-designer)

**C5 Price (blind): Revise (shared issues only, plus 1)**
1. "From $2.1M" next to "Final 3-bedroom homes left" can be read as a 3BR price. → Make the unit explicit. Either use Headline B ("Freehold 2-Bedroom in Katong From $2.1M"), or change the fine print to "2-bedroom from $2.1M. Price as at [date], subject to availability and change." (owner: copywriter)

**Research file (`research-amber-house.md`): Approved.** Sources are cited, observations are kept separate from interpretations, fact conflicts are surfaced rather than resolved silently, and the access limits are stated honestly. Its five openings (price, MRT, scarcity, 2BR entry, East Coast lifestyle) are the right hypotheses. Price and MRT are the strongest.

### Per-ad verdict summary
| Ad | Verdict | Wave |
|---|---|---|
| C1 Direct | Revise (S1–S7, C1-1, C1-2) | 1 |
| C2 Blind lifestyle | Revise (S1–S7, C2-1) | 2 (hold) |
| C3 Floor layout | Revise (S1–S7, C3-1 to C3-3) | 2 (hold) |
| C4 MRT | Revise (S1–S7, C4-1) | 1 |
| C5 Price blind | Revise (S1–S7, C5-1) | 1 |
| research-amber-house.md | Approved | — |
| **Overall** | **Revise** | |

None are Blocked. S3 (CEA authorisation) would become a **Block** for C1 if the client confirms GoAhead is not authorised to market this project.

### Not verified
- The creative content of Amber House 1–4 (only the metrics were pulled), so I can't say which past angles failed. Amber House 5 was a catalog/dynamic template.
- The visuals, body text and CTAs of the competitor ads (Ad Library snapshots return 403).
- Current stock: the 2BR count, which three-bedroom units make up the "Final 2", and the dated % sold.
- CEA particulars and the authorisation status.
- Pixel/CAPI and form lead events, and whether sales can tag lead quality. The tracking stage hasn't run.
- Whether the e-brochure the form sends contains floor plans (relevant to C3).
- No images have been generated, so execution quality isn't reviewed. This review covers prompts only.
- Confidence in the ranking: **medium-low**. It rests on 7 historical leads, and there is no qualified-lead data.

### Re-review
- [ ] Shared S1–S7 confirmed on [date]
- [ ] C1, C4, C5 fixes confirmed on [date]. Wave 1 then goes to QA, and then to the user's pre-launch approval.
- [ ] C2, C3 fixes confirmed on [date] (wave 2)

---

## Re-review (research round 2 + copy Rev 4 + prompts v4, 7 ads) — Amber House — 2026-11-05

Files reviewed:
- `research-amber-house.md`, section "Hot USPs (round 2)"
- `copy-amber-house.md` (Revision 4)
- `amber-house-prompts-v2.md` (prompts v4, 7 ads)

Checked against: CLAUDE.md, brand.md, learnings.md, SKILL.md "Client copy rules (feedback 2026-11-04)" (these are the user's rules and are not challenged here, only risk-flagged), the previous section of this file, and a live Meta read (read-only, account 903306407477320, campaign name contains "buyer", ad name contains "amber", lifetime, pulled 2026-11-05). "Amber Sea" ads are a different project and are excluded.

**Live update:** "Amber house Video" is still **ACTIVE**. Lifetime it stands at S$85.45, 2 form leads, S$42.73 CPL, frequency 1.32. That is about S$10.50 spent since 2026-11-04 with no new lead. Totals for every other Amber House ad are unchanged (all paused). Amber House overall is now about S$488 for 7 leads, roughly S$70 per lead.

**Overall verdict: Revise.** Research round 2 is **Approved**. C3 is **Approved** as a creative. C1, C2, C4, C5, C6 and C7 are **Revise**. Nothing is Blocked, but there are two conditional blocks (see C1 and C6). Launch is still gated by S3, S5 and S6, plus the QA and tracking stages, plus the user's pre-launch approval.

**The big change:** with no price in any ad, **the creative no longer pre-qualifies on budget**. The cheapest unit is a S$2.1M+ 2BR. Every blind ad now pulls a mix of budgets, and the lead form is the only filter. **S5 moves from "needed" to "the main lead-quality control for this whole test."**

---

### Research round 2: **Approved**

- Every USP is tagged CONFIRMED or UNCONFIRMED and carries a source.
- The unreliable source [NLR] is identified and used only to flag claims, never to confirm them.
- Conflicts are surfaced: the 4-min (developer) vs about 6-min / 430m (agent) MRT walk, EdgeProp's encumbrance note, and PropNex's outdated "upcoming" TEL wording.
- The right things are ruled out: U11 future plans (implied gains), U12 sea views (unconfirmed), U13 rental (no data).

Conditions on use:
- (a) The MRT walk time must always carry "per developer" in the ad, because two agent sources say about 6 minutes.
- (b) The SGS Phase 2C ballot data is research context only. Never print oversubscription or ballot figures in an ad, because they imply P1 advantage, and P1 eligibility for a 2029-TOP address is unverified (research gap).
- (c) Private lift is always "select premium homes" and stays off images.
- (d) The O4 leasehold-definition source gap is moot, because O4 wasn't picked.

All R2 claims used in C1–C7 are now cleared on these terms: ADDP/columns, TEL opened Jun 2024, Katong–Joo Chiat walk/cycle, Katong food, Dunman High/Victoria School, "planned to maximise space" and the PropNex stock snapshot. The PropNex snapshot is for internal stock checks only, never for printing.

---

### Per-ad assessment

Far East's live set (research round 1) is the reference here. Every headline starts with "Freehold". The current wave (from about 2026-11-04, 4 ads) is "Freehold Homes Near 4 Primary Schools". October ran "Freehold 4-Bedroom Homes" and August ran "District 15" plus 3BR. Far East shows no price, no MRT and no design story.

| | C1 Direct (named) | C2 Family | C3 MRT | C4 Listing card 4BR | C5 HDB upgrader | C6 Floor plan 2BR | C7 Checklist |
|---|---|---|---|---|---|---|---|
| **Hook strength** | Moderate. The name does the work for warm and searching buyers. "Just 105 Homes" plus the big numerals is clean but quiet, and it is weaker now the price is gone. | Strong emotional self-ID (the user's own line). Broad. | **Strongest.** One giant specific number ("4-MIN") plus the client's tenure rule, in one line. | Strong for in-market shoppers. Real specs read like a listing, so it stops a scroll from people already browsing portals. | Strong self-ID, but it hooks the wrong wallet (see quality). | Weak to moderate as a cold thumb-stop on 4:5. Plans read small, even at full width. Better on 9:16. | Moderate. Skimmable, but a wall of 6 ticks plus subhead plus 2 fine-print lines is dense on a phone. |
| **Offer clarity** | Clear. | Clear. | Clear. | Clear, but a listing card with no price field invites "how much?" clicks. That's fine, because the form answers it. | Clear CTA. The implied promise ("an upgrade I can afford") isn't what's behind the click. | Clear **only if** the plan is official. | Clear. |
| **Lead-quality risk (no price)** | **Lowest.** People who know the name mostly know it's a premium D15 freehold. | **High.** "Family home" pulls BTO/HDB families of every budget. | Medium. Commuters, couples and some would-be tenants. Budget is unknown. | **Low to medium.** A 4BR Premium of 1,744 sqft self-selects big budgets. This is the best budget filter left in the set. Narrow reach. | **Highest.** Most HDB upgraders' budgets sit below a S$2.1M+ entry. Expect cheap leads, a low qualified rate and form-screen drop-off once the price is revealed. | Medium to high. The 2BR is the cheapest type, so it attracts the lowest budgets of the unit-led ads. A 635 sqft unit at S$2.1M+ will surprise plan-checkers when they see the price. | Medium to high. Broad, multi-buyer. |
| **Differentiation vs Far East** | Medium. The format is distinct (big numerals, boutique 105), but it competes head-on with the developer's own page for the same name-aware audience in the same auction. | **Poor this week.** It collides with Far East's live schools wave (4 ads launched about 2026-11-04). The question framing and visual differ, but it is the same buyer and the same proof. | **Good.** The developer never uses MRT. The giant "4-MIN" separates it from Home Haven Hub's "Rare Freehold Near MRT". | Medium. Far East ran "Freehold 4-Bedroom Homes" in October. The format (spec card) is new. | Good. No one else is on this angle (for a reason, see quality). | **Good.** No one uses a plan as the hero. | Good. Format unused. Content repeats C1–C3. |
| **Policy / claim risk** | **Medium to high.** "By Far East Organization" on an agency ad can read as the developer's own ad. CEA particulars and authorisation are open (S3). | Medium. School distances are fine with the MOE line, but nothing may imply P1 priority for a 2029-TOP home. | Low. The walk time is attributed to the developer, and the map is labelled "not to scale". | Medium. A portal look-alike must not imitate a real portal. "AVAILABLE TYPE" is a stock claim. A fallback generic interior under a specific unit title is a misrepresentation risk. | Low to medium. Message only. Must never become targeting (Housing SAC). | **Medium to high.** "See the **Real** Layout" is false unless the official plan is used. | Low to medium. The schools tick needs the on-image MOE line (included). |
| **Production risk** | Medium. It depends on the official render (S7). The interior fallback is acceptable. | Low. Stock shot from behind, all text in Canva. | **Low.** Vector map, all labels in Canva. | Medium to high. Official 4BR render (S7), 4BR stock check (S4), and **no primary text or description written yet**. | Low for the visual (keys photo plus a sticker asset). **Copy not written yet.** | **High.** It depends entirely on official plan rights. **Copy not written yet.** | Medium. A photoreal flat-lay can come out fake, so composite it. **Copy not written yet.** |
| **Verdict** | **Revise** | **Revise** (wave 2) | **Approved** | **Revise** (wave 1 once fixed) | **Revise** (hold) | **Revise** (hold, conditional block) | **Revise** (wave 2) |

Housing special ad category: no ad depends on restricted targeting. "Family", "HDB upgrader" and "commuter" are message only. **Pass.**

---

### Numbered fixes

**New shared issues**

N1. **C4–C7 have no primary text and no description.** Copy Rev 4 marks them "pending user pick", and the user has now picked. → Write the primary text and description for C4–C7 under the same rules as C1–C3. Proof the designer-added strings at the same time: the C3 pin label format, the C4 row labels and the C5 B-swap strip word (prompts Flag 2). (owner: copywriter)

N2. **A price line on the lead form needs the user's explicit OK.** Copy Flag 1 puts "2BR from about S$2.1M, as at [date]" on the form or thank-you screen. The client rule says "don't mention price anywhere in the ad." The form is post-click, but the user should confirm in chat that the form counts as outside the ad. → Ask the user. If the answer is no, the budget question alone has to do the filtering. Self-reported budgets skew high, so expect a lower qualified rate. (owner: strategist / lead, via the user)

N3. **Spec rows and subheads repeat each other (C4, C7).** On C4 the subhead and the MRT/NEARBY rows say the same thing. On C7 the subhead repeats ticks 1–3. → C4: drop the description line, or swap the MRT/NEARBY rows back to the copywriter's TOP / rooftop-pool rows. C7: drop the on-image subhead, because the ticks are the subhead. (owner: copywriter decides, static-designer applies)

**C1 Direct**
1. "By Far East Organization" under an agency's ad can read as the developer's own ad. → Keep the developer as a fact only in the primary text ("developed by Far East Organization"). On the image, put GoAhead's own identity and the CEA particulars in the reserved strip (S3). If the client confirms GoAhead is **not** authorised to market Amber House, **C1 becomes Blocked**. (owner: copywriter + static-designer, after the client answers S3)
2. It needs the official facade render to look premium. The interior fallback is acceptable but weaker. → Confirm rights (S7) before production. (owner: user/client)

**C2 Family**
1. It runs into Far East's live schools wave this week. → Hold to wave 2. When it runs, lead with the family/space side rather than schools to keep it apart. For example, make the badge the "4-MIN WALK TO MRT" variant (already written as the B-swap badge) and keep the school in the subhead only. (owner: copywriter)
2. The badge repeats the subhead's "6-min walk to Tanjong Katong Primary". → Use the MRT badge (as in fix 1), or cut the school from the subhead. (owner: copywriter)
3. Run it only once the form's budget question is live (S5).

**C3 MRT: Approved.** No creative fixes. Keep "Walk/drive times per developer" and "Illustrative map, not to scale." Launch is gated only by the shared items (S3, S5, S6, QA, tracking).

**C4 Listing card**
1. Copy (N1) and duplication (N3).
2. Confirm the 4BR Premium is available within 48h of launch. Print "AVAILABLE TYPE" only if it is confirmed, otherwise drop it (S4).
3. If the official 4BR render isn't cleared, change the image label to make it explicit that the photo isn't this unit ("IMAGE SAMPLE ONLY – not the actual unit"). Otherwise QA should reject the fallback. (owner: static-designer, QA confirms)

**C5 HDB upgrader**
1. Copy (N1).
2. Biggest budget mismatch in the set. → Not in wave 1. Run it only after (a) the form's budget question is live and (b) wave 1's form data shows a meaningful share of leads in the S$2M+ band. Optional, copywriter's call within the rules: widen the self-ID to "Upgrading from HDB or condo?" so it also reaches condo upgraders, who have bigger budgets. (owner: copywriter)
3. "2- to 4-bedroom homes" needs a stock check (S4).

**C6 Floor plan**
1. Copy (N1).
2. **Conditional block:** Headline A ("See the Real 2-Bedroom Layout") can't run without the official plan and the rights to use it (S7). If there's no official plan, the copywriter writes a headline that doesn't claim to show the real layout, and the plan carries "ILLUSTRATIVE LAYOUT ONLY". The B-swap ("Every Square Foot Planned") has the same problem. (owner: user/client, then copywriter)
3. Build it 9:16-first, where the plan is legible. Treat 4:5 as secondary. (owner: static-designer)

**C7 Checklist**
1. Copy (N1) and the subhead drop (N3).
2. Composite the flat-lay: generate the desk and clipboard only, and put the paper, ticks and text in Canva. Reject any generation where the ticks or paper look fake. (owner: static-designer)

---

### Status of previous Revise items (2026-11-04 section)

| Item | Status |
|---|---|
| S1 9:16 versions | **Resolved at spec level.** Each ad has a 9:16 note with the 14% / 20% safe zones. Check again on the final files. |
| S2 text set in post | **Resolved.** The image-only prompt plus Canva typesetting is now mandatory. |
| S3 CEA particulars and authorisation | **Open.** A strip is reserved on every layout. Still a potential block for C1. |
| S4 dated scarcity/stock claims | **Mostly resolved by removal.** "% sold", "final units" and price are gone. **Still open, but narrower:** confirm 4BR (C4), 2BR (C6) and "2- to 4-bedroom" (C5) availability within 48h, plus the date on any form price line. |
| S5 lead form / landing page | **Open, now critical.** No `lp-brief.md` or form spec exists yet. |
| S6 lead-quality tagging | **Open.** |
| S7 rights to official renders/plans | **Open.** Fallbacks now exist for C1, C4 and C7. C6 has none. |
| C1-1 AI tower with the real name | **Resolved.** No AI tower anywhere. |
| C1-2 "rare freehold" said twice | **Resolved.** New headline. |
| C2-1 (old blind lifestyle) | **Superseded.** That ad was retired. |
| C3-1 generic plan as "the layouts" | **Carried into the new C6.** Mitigated by the official-plan rule and the label rule. The headline dependency is still open (C6-2). |
| C3-2 sold-out types in the headline | **Resolved.** C6 shows one specific type. |
| C3-3 plan too small | **Resolved.** The plan is now full-width, and 9:16-first is recommended. |
| C4-1 AI MRT entrance | **Resolved.** Replaced by a vector route map. |
| C5-1 "$2.1M" ambiguity | **Superseded.** Price removed. |

---

### Ranking (expected cost per *qualified* lead, no price)

1. **C3 MRT.** Strongest hook, differentiated, lowest production risk, and the copy is finished.
2. **C1 Direct.** Highest intent per lead, and name-aware buyers self-qualify. Gated by CEA (S3).
3. **C4 Listing card (4BR).** The best budget self-filter without a price. Narrow reach. Needs copy, a stock check and the asset.
4. **C2 Family.** Strong hook, but a broad budget mix and a head-on clash with Far East's live schools wave.
5. **C7 Checklist.** Safe and broad, but it restates C1–C3, so it teaches us little.
6. **C6 Floor plan (2BR).** White-space format, but it depends on assets and attracts the cheapest-unit audience.
7. **C5 HDB upgrader.** The worst budget fit for a S$2.1M+ entry.

**Wave 1: C3, C1, C4.** This set answers named vs blind (C1 vs C3) and fact vs listing (C3 vs C4), and it holds the three best budget filters. If C4 isn't ready on launch day (copy, stock or asset), launch with C3 and C1 and add C4 when it clears. Don't substitute C2 into wave 1 while Far East's schools wave is live.
**Wave 2 (fatigue replacements or the day-14 read):** C2, C7.
**Hold:** C6 (until the official plan is cleared) and C5 (until wave 1's form data shows enough S$2M+ demand).

---

### Updated test plan, for a world with no price in the ads (RECOMMENDATION ONLY. No spend without the user's approval in chat.)

**1. The lead form carries the qualification.** Use a Meta instant form, the "Higher intent" type with a review screen. That is the path Amber House used before. Don't split with the website in this test.
- **Intro screen:** "Amber House by Far East Organization, a rare freehold condo of 105 homes in East Coast." This reveals the name that C3 and C4 hide. Add "2-bedroom homes from about S$2.1M (as at [date])" **only if the user approves N2**.
- **Questions (4, all multiple choice so they're fast on mobile):**
  1. **Budget:** Below S$2M / S$2–3M / S$3–4M / Above S$4M.
  2. **Timeline:** Within 3 months / 3–6 months / 6–12 months / Just exploring.
  3. **Unit type:** 2BR / 3BR / 4BR.
  4. **Purpose:** Own stay / Investment.

  Name and phone are prefilled. Add WhatsApp consent.
- **Optional:** conditional logic, so "Below S$2M" gets a thank-you screen that offers GoAhead's other-project list. That keeps the lead useful without counting it as an Amber House prospect.
- **Expect** CPL to rise about 10–30% from the extra friction. That is the intended trade.

**2. Qualified lead (working definition until brand.md sets one):** budget S$2M or more, timeline 12 months or less, and the lead answers WhatsApp or a call within 72h. Sales tags every lead within 72h (S6).

**3. Structure:**
- 1 Leads campaign, Housing special ad category, Singapore.
- **1 ad set:** Advantage+ audience / broad, Advantage+ placements, holding C3, C1 and C4.
- Exclude past Amber House form leads if the Housing category allows it.
- At an expected CPL of S$35–70, S$60/day gives about 6–12 leads a week. **It will not exit learning.** Treat this as a directional quality read.
- **Decide on the live "Amber house Video" first:** either pause it or move it into this ad set. It is still spending about S$10/day with no new lead and would compete with the test for the same small audience. That's the user's call; I don't touch the account.

**4. Budget:** about S$60/day for 14 days, about S$840. Expected 12–24 leads. My guess at the qualified rate is 25–45% with the budget question in place (low confidence, because there is no data).

**5. Metrics:**
- **Primary:** cost per sales-qualified lead.
- **New early proxy:** the share of each ad's leads that select S$2M or more on the form. This is readable on day 1, before sales tagging, and it's the fastest way to see which no-price hook pulls the right wallet.
- CPL, link CTR and form completion rate are diagnostics only.

**6. Guardrails** (heuristics from this account's Amber House baseline. The final kill/scale/fatigue verdict comes from `ad-creative-fatigue`):
- Don't judge an ad before it has spent about S$80 and run 3 full days (conversion lag).
- **Pause candidate:** about S$120 spent with 0 leads; **or** its first 5 leads have none at S$2M or more; **or** its first 5 leads have 0 sales-qualified.
- **Scale candidate:** cost per qualified lead of about S$100 or less. Raise the budget by no more than 20–30% every 3–4 days.
- **Project stop-loss:** about S$840 spent with fewer than 3 qualified leads means stop Amber House and move the budget to projects with more unsold stock.

**7. Before launch:** tracking verifies that the instant-form lead event and the CRM/sales tagging work (S6). QA runs. The user approves.

---

### Per-ad verdict summary (2026-11-05)
| Item | Verdict | Wave |
|---|---|---|
| Research round 2 | Approved (conditions a–d) | — |
| C1 Direct | Revise (C1-1, C1-2, S3, S7). Blocked if not CEA-authorised | 1 |
| C2 Family | Revise (C2-1 to C2-3) | 2 |
| C3 MRT | **Approved** (creative). Launch gated by S3, S5, S6 | 1 |
| C4 Listing card 4BR | Revise (N1, N3, C4-2, C4-3) | 1 (when cleared) |
| C5 HDB upgrader | Revise (N1, C5-2, C5-3) | Hold |
| C6 Floor plan 2BR | Revise (N1, C6-2, C6-3). Headline A blocked without the official plan | Hold |
| C7 Checklist | Revise (N1, N3, C7-2) | 2 |
| **Overall** | **Revise** | |

### Not verified
- Final images: none have been generated, so execution isn't reviewed.
- Primary text for C4–C7 (not written yet).
- Current stock by unit type.
- CEA particulars and authorisation.
- Official asset rights.
- Form and CRM tracking.
- How MOE treats a 2029-TOP address for P1.
- Competitor ad bodies and visuals (Ad Library snapshots return 403).
- Whether Far East's August and October ads are still running.
- **Confidence in the ranking: medium-low.** It rests on 7 historical leads and no qualified-lead data. The qualified-rate estimate is a judgement call.

### Re-review
- [ ] N1 to N3 confirmed on [date]
- [ ] C1, C4 fixes confirmed on [date]. Wave 1 (C3, C1, C4) then goes to QA, and then to the user's pre-launch approval.
- [ ] Form spec (S5) reviewed on [date]
- [ ] C2, C7 (wave 2) and C5, C6 (hold) fixes confirmed on [date]

---

