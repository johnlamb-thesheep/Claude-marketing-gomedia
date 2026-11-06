# Performance Review — 2026-11 New Launch Projects (gomedia-homes / GoAhead)

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

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

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 7 ads) — The Arcady at Boon Keng — 2026-11-05

Files reviewed:
- `research-arcady.md` (researcher)
- `copy-arcady.md` (copywriter, Revision 1)
- `arcady-prompts.md` (static-designer, Revision 1)

Lead's calls noted (made under the user's delegation, not challenged here): C3 uses Headline A (9 words, the user's formula); C5 is Resort, not HDB upgrader.

Checked against: CLAUDE.md, `.claude/agents/performance.md`, brand.md, learnings.md, SKILL.md "Client copy rules (feedback 2026-11-04)", `inputs/competitors/arcady-meta-ad-library-2026-11-05.md`, the two Amber House sections above (for consistency), and **live Meta data** (read-only, account 903306407477320; campaign names contain "buyer" and none of r&f/sky/jess/gomedia; ad or campaign name contains "arcady" or "boon keng"; pulled 2026-11-05).

### Account check: Arcady is not a cold project

| Ad | Campaign | Format | Status | Lifetime spend (S$) | Leads | CPL (S$) | CTR (all) | Freq |
|---|---|---|---|---|---|---|---|---|
| Arcady | GoAhead The Arcady At Boon Keng New Launches [BUYER] (ad set "Broad static ad") | Catalog / dynamic (`{{product.name}}`), created 2025-04-18 | **ACTIVE** | 24,049.90 | 786 | **30.60** | 1.07% | 3.71 |
| Arcady – Copy 3 | same campaign (ad set "Broad Video ad new") | Video, title "Get Full Price List & E-brochure", button GET_QUOTE, created 2026-11-02 | **ACTIVE** | 54.92 | 1 | 54.92 | 0.92% | 1.30 |
| Arcady – Copy 2 | same | Video, title "Rare Freehold Condo Near Boon Keng MRT", created 2026-10-23 | Paused | 101.07 | 3 | 33.69 | 0.82% | 1.48 |
| Arcady – Copy | same | — | Paused / WITH_ISSUES | 0 | — | — | — | — |
| Arcady + The Arcady video | GoAhead The Arcady At Boon Keng Post Launches [BUYER] – Website (optimising for website conversions) | Catalog + video | Campaign paused | 192.29 | **0** | — | 1.17–1.57% | 1.3 |
| **Total** | | | | **~24,398** | **790** | **~30.9** | | |

All our ads run from GoMedia Homes' own page (story IDs 136510519551886_…). **None of the three "The Arcady" Facebook pages in the Ad Library pull are ours**, so they are third parties (developer or appointed agencies). This settles a research gap.

What the data says:
- **Arcady is GoAhead's biggest proven project in this account.** The named catalog ad has run 18 months at S$30.60 lifetime, and at **S$22.14 (Sep 2026) and S$24.55 (Oct 2026)** per lead. Research's "untested, expect CPL closer to the account norm" is superseded: the benchmark is **S$22–31 per lead**, not Amber House's S$35–70.
- **The incumbent shows fatigue signals, not a verdict.** CTR fell from 2.2–2.3% (Oct–Nov 2025) to ~0.8% (2026). Lifetime frequency is 3.7. Monthly spend dropped from S$1,151 (Sep) to S$540 (Oct) to ~S$9/day in November. About S$100–140 has been spent since 27 Oct with **0 leads**. Some of that is conversion lag, but 10 days at ~5x the recent CPL with no lead is a real signal. **Run `ad-creative-fatigue` on this ad before any pause or replace decision.** This review does not make that call.
- **The website path failed for Arcady** (S$192, 0 leads). Small n, but it goes against learnings.md's "website looks cheaper". Stay on instant forms for this project.
- **Live ads break the user's copy rules.**
  - "Arcady – Copy 3" (ACTIVE) primary text: "District 12" (district code) and "Within 1 km of Bendemeer Primary, Hong Wen School…" (the saturated, P1-implying hook). Its food-centre walk ("7 to 8 mins") also differs from the new set's developer figure (6 min).
  - "Arcady – Copy 2" (paused) carried "2 BEDDERS FROM $1.95M" (price over the S$1.4M cap), "D12" and "only 172 homes" (a unit count).
  - **Recommendation (user's call; I don't touch the account):** replace Copy 3 with the new set when wave 1 launches. Don't reactivate Copy 2.
- No sales feedback exists on the 790 leads. **This is the most valuable data the client has.** CRM outcomes on these leads would give us a real qualified-rate baseline (see test plan).

---

### Verdicts on the two upstream files

**`research-arcady.md`: Approved.**
- Sources are tagged, conflicts are surfaced and not silently resolved (MRT 6 vs 7 min, TOP, Bendemeer Primary distance, 1BR+Study stock), and access limits are honest.
- The price-rule outcome is correct: entry is above S$1.4M on either source, so there is no price anywhere.
- The saturation read is correct and matches the raw pull: freehold headline, freehold-vs-leasehold, Hong Wen 1km, e-brochure magnets.
- The white-space list (numbered MRT walk, city drive times, facilities, N/S and ceilings, food-centre neighbourhood) is the right set of hypotheses.
- The spam-domain warning (`thearcady.com.sg`) is a valuable catch.
- **One gap, no rework needed:** it didn't check our own account history (above). That changes the CPL expectation and the test structure, but not the angles.

**`copy-arcady.md`: Revise.** It is close. The fixes are text-level: full MRT names (T1–T4), subheads that must pair MRT minutes with *nearby* amenities (T5–T7), the size range (T8) and attribution of the C6 claim (T9). Shared launch gates S3, S5, S6 and S7 from the Amber House sections still apply.

**`arcady-prompts.md`** (assessed through the per-ad verdicts): apply the same T-fixes, plus the image-label rule fix (T10) and the C6 compass fix (C6-2).

---

### Rule checks (the user's client copy rules)

| Rule | Result |
|---|---|
| No price, "$" or psf | **Pass** on all 7 (headline, subhead, on-image, primary text, fine print). C4 has no price field. |
| No unit counts | **Pass.** "47 facilities", "4 landscaped levels" and "3 stops" aren't unit counts. |
| No "% sold" or scarcity | **Pass.** "AVAILABLE TYPE" on C4 is conditional on a 48h stock check; it states availability, not scarcity. Keep it conditional. |
| No district codes or street names | **Pass** in the new set. **Fail on the live Copy 3** ("District 12"). |
| Only C1 names the project | **Pass.** C2–C7 also leave out the developer, JV partners and architect. Imagery bans signage. |
| "Rare freehold condo" every time | **Pass.** C7's headline says "Freehold?", but tick 1 reads "Rare freehold condo" on-image. |
| Full MRT station names | **Fail on 3 strings.** The rule explicitly covers "headlines, subheads, badges **and map labels**". The C3 train strip is a map label, so "DHOBY GHAUT" → "DHOBY GHAUT MRT" and "RAFFLES PLACE" → "RAFFLES PLACE MRT". The same goes for C1's numeral caption "TO DHOBY GHAUT". Primary text is aligned for consistency (T1–T4). "Change at Dhoby Ghaut" can stay as written, because it names the interchange and not a destination. |
| Pair MRT minutes with nearby amenities | **Fail on C1, C4, C5.** C1 pairs the MRT with "Marina Bay Financial Centre 12-min drive" and C4 with "Gardens by the Bay 12-min drive". Neither is a nearby amenity. C5 pairs it with on-site facilities ("Infinity pool & sky gym"), which the level strip also repeats (designer Flag 12). Fixes T5–T7. C2, C3, C6 and C7 pass. |
| Subheads sell advantages, not addresses | **Pass.** |

Rail facts checked against the line map: Boon Keng → Farrer Park → Little India → Dhoby Ghaut = 3 stops, then Dhoby Ghaut → City Hall → Raffles Place = 2 more (5 total). Correct. The designer's tick marks match. Leaving Orchard out of the rail strip was right: by line count it is 5 stops, not the developer's 4.

---

### Per-ad assessment

| | C1 Direct (named) | C2 Family | C3 MRT | C4 Listing card 2BR+S | C5 Resort | C6 Floor plan N/S | C7 Checklist |
|---|---|---|---|---|---|---|---|
| **Hook strength** | Moderate. The name plus "11-Min Drive to Orchard" is a fresh named fact, but name-aware buyers already see our catalog ad. | Strong emotional self-ID (the user's line). | **Strongest.** One giant number ("6-MIN") plus tenure. No competitor states MRT minutes. | Strong for in-market portal browsers. Reads like a real listing. | Strong and aspirational. The most visual ad in the set. | Moderate. N/S facing is a known SG buyer priority, but it is a slow, considered hook on cold feed. Better on 9:16. | Moderate. Skimmable, but 6 ticks plus caption plus 2 fine-print lines is dense on a phone. |
| **Offer clarity** | Clear. | Clear. | Clear. | Clear. A no-price card invites "how much?", which the form answers. | Clear. | Clear only once the official plan is in. | Clear. |
| **Lead-quality risk (no price)** | **Lowest.** Name-aware buyers mostly know the price band. | **High.** "Family home" pulls every budget, including BTO/HDB families well below ~S$1.95M. | Medium. Commuters and couples; budget unknown. | Medium. 2BR+Study (~S$1.99M+) is the cheapest-entry unit ad, but it still self-selects ~S$2M buyers. | Medium. Lifestyle is broad, but "resort" plus freehold is premium-coded. | **Low.** A 3BR Premium plan (S$2.78M+) self-selects big budgets. Best filter in the set. | Medium to high. Broad, multi-buyer. |
| **Differentiation vs freehold / leasehold comparison / Hong Wen 1km** | Medium. Opens on freehold (saturated), but the Orchard drive time is unused. Overlaps our own live named catalog. | **Poor right now.** The school angle collides with 3 agent pages (Hong Wen 1km, Oct 2026) and our own live Copy 3. It leads with family, not "1km", which helps. | **Good.** Numbered walk plus a rail-strip format. Our own paused Copy 2 ("Near Boon Keng MRT") is no longer competing. | **Good.** No one runs a spec card. Version A avoids SG Property's new "Freehold 3-Bedroom + Study". | **Best.** 0 of 37 competitor headlines use facilities. | **Good.** No competitor uses orientation or ceilings. | Good format, but the content repeats C1–C3. |
| **Policy / claim risk** | Medium. CEA authorisation and particulars (S3). The developer stays in primary text only (correct). The drive times are developer figures, so keep the attribution. | Medium. The MOE line is present and nothing implies P1 priority. Pass. | Low. Attributed, labelled "not to scale", no LTA marks or line colours. | Medium. A generic portal look-alike (no branding: correct). The fallback interior must be labelled as not the unit (T10). | Low to medium. "Resort" is puffery next to real, sourced facilities: acceptable. **But** a generated pool labelled "artist's impression" reads as a depiction of this project's pool, which is a misrepresentation risk (T10). | Medium. "Every Home Faces North or South" is a developer claim and needs on-image attribution (T9). A compass that doesn't match the official plan's real north would mislead (C6-2). | Low to medium. The MOE line is present. |
| **Production risk** | Medium. Best with the official exterior render (S7). The interior fallback is acceptable but weaker. | Low. Stock from behind; all text in Canva. | **Low.** Vector diagram; all labels in Canva. | Medium. Render rights; 6 rows are tight on 4:5; stock check. | Medium. The official render is strongly preferred. A generic AI pool is passable only with the corrected label. | **High.** It depends on the official plan and its rights. | Medium. The hand and phone composite can look fake; corner-pin the UI. |
| **Verdict** | **Revise** (T1, T3, T5, T8, T10; S3, S7) | **Approved** as a creative. Wave 2 (sequencing only) | **Revise** (T2, T4 only, then Approved) | **Revise** (T6, T10; stock check) | **Revise** (T7, T10) | **Revise**, hold (T9, T10, C6-2; official plan) | **Approved** as a creative. Bench |

Housing special ad category: no ad depends on restricted targeting. "Family", "commuter" and "resort lover" are message direction only. **Pass.** (Not verified: whether the existing Arcady campaign is flagged Housing in the account. See Not verified.)

---

### Numbered fixes (per ad, beyond the T-strings below)

**C1 Direct**
1. Apply T1, T3, T5 and T8. (owner: copywriter, then static-designer)
2. CEA gate (S3): if GoAhead isn't authorised to market The Arcady, C1 is **Blocked**. 18 months of named spend suggests it is, but that is not confirmed. (owner: user/client)
3. Fallback label (T10). (owner: static-designer)

**C2 Family:** no creative fixes. Run it only once the form's budget question is live, and not while the Hong Wen agent wave and our own Copy 3 are live.

**C3 MRT:** apply T2 and T4. Then Approved. Keep "Walk/drive times per developer." and "Illustrative diagram, not to scale." Note for the 9:16 vertical strip: the longer labels ("RAFFLES PLACE MRT") fit better on the vertical version. Check the 4:5 horizontal strip at phone size, and drop the label size to ~22 px if needed.

**C4 Listing card**
1. Apply T6.
2. Fallback label (T10).
3. Confirm 2BR+Study stock within 48h. Print "AVAILABLE TYPE" only if it is confirmed.

**C5 Resort**
1. Apply T7. This also removes the "Infinity pool" repeat between the subhead and the strip.
2. Official facilities render preferred. The generated fallback must use the T10 label.

**C6 Floor plan**
1. Apply T9 and T10.
2. **C6-2:** with an official plan, rotate the compass to match the plan's own north point. Never set "N straight up" by default. With an illustrative plan, the default compass is fine under "Illustrative diagram, not to scale."
3. Hold until the official 3BR Premium plan is cleared (S7). Build 9:16-first.

**C7 Checklist:** no creative fixes. It is the bench or fatigue replacement. Drop the caption if the frame is crowded (N3 precedent).

---

### Exact text fixes (old → new)

Apply to every occurrence in both `copy-arcady.md` and `arcady-prompts.md` (headline/subhead bullets, the "full prompt" strings and the on-image tables), unless a row says otherwise.

| # | Ad / location | Old | New |
|---|---|---|---|
| T1 | C1 numeral caption (copy on-image table; prompts C1 bullet + full prompt) | `TO DHOBY GHAUT` | `TO DHOBY GHAUT MRT` |
| T2a | C3 train strip, Dhoby Ghaut node (copy on-image table; prompts bullet; prompts full prompt `labelled "DHOBY GHAUT" below it`) | `DHOBY GHAUT` | `DHOBY GHAUT MRT` |
| T2b | C3 train strip, Raffles Place node (same places; prompts full prompt `labelled "RAFFLES PLACE" above it`) | `RAFFLES PLACE` | `RAFFLES PLACE MRT` |
| T3 | C1 primary text | `with Dhoby Ghaut 3 stops away and Raffles Place 5` | `with Dhoby Ghaut MRT 3 stops away and Raffles Place MRT 5` |
| T4 | C3 primary text | `Dhoby Ghaut is 3 stops away, and Raffles Place is 5 with a change at Dhoby Ghaut.` | `Dhoby Ghaut MRT is 3 stops away, and Raffles Place MRT is 5 with a change at Dhoby Ghaut.` |
| T5 | C1 subhead | `6-min walk to Boon Keng MRT. Marina Bay Financial Centre 12-min drive.` | `6-min walk to Boon Keng MRT, near Bendemeer Mall & Kallang Park Connector.` |
| T6 | C4 subhead / card description | `6-min walk to Boon Keng MRT. Gardens by the Bay 12-min drive.` | `6-min walk to Boon Keng MRT, near Bendemeer Market & Food Centre.` |
| T7 | C5 subhead | `Rare freehold condo, 6-min walk to Boon Keng MRT. Infinity pool & sky gym.` | `Rare freehold condo, 6-min walk to Boon Keng MRT & a hawker centre.` |
| T8 | C1 primary text | `Homes range from 527 to 2,583 sqft.` | `Homes range from 667 to 2,583 sqft.` ([ARC], the primary source, shows the 527 sqft 1BR+Study fully sold. Revert only if the 48h stock check finds one available.) |
| T9 | C6 on-image fine print (prompts C6 bullet + full prompt) | `Walk/drive times per developer.` | `Walk times, orientation and ceiling heights per developer.` |
| T10a | C1 / C4 / C5 / C6-inset label **when a generated or stock image is used instead of an official render** | `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` | `IMAGE SAMPLE ONLY` |
| T10b | C4 fallback label | `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY – not the actual unit` | `IMAGE SAMPLE ONLY – not the actual unit` |
| T10c | C5 fallback label (generated pool) | `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY` | `IMAGE SAMPLE ONLY – not the actual development` |

T10 rationale: per SKILL.md, "artist's impression" is for a render *standing in for this building*. A generated generic interior or pool is not an impression of The Arcady. Labelling it that way implies it shows the project. Official developer renders keep `IMAGE SAMPLE / ARTIST'S IMPRESSION ONLY`.

Word counts after the fixes: T5 is 13, T6 is 12, T7 is 13 (all ≤14).

---

### Ranking (expected cost per *qualified* lead)

1. **C3 MRT.** Strongest hook, clear white space, lowest production risk.
2. **C5 Resort.** The only fully unused angle, very visual, premium-coded.
3. **C4 Listing card 2BR+S.** A real-listing format that self-filters to ~S$2M.
4. **C1 Direct.** Highest intent per lead, but our live named catalog has covered name-aware buyers for 18 months, so it teaches us the least now. Gated by CEA.
5. **C6 Floor plan N/S.** The best budget filter in the set, but asset-dependent.
6. **C2 Family.** Strong hook, but the most crowded proof (schools) and the broadest budget mix.
7. **C7 Checklist.** Safe, but it restates C1–C3.

**Wave 1: C3, C5, C4** (all blind). The live named catalog ad acts as the named control in the same campaign, so the named-vs-blind question is still answered without spending on C1.
**Wave 2: C1, C2.** Promote **C1 into wave 1 as the catalog's replacement** if `ad-creative-fatigue` confirms the catalog is fatigued.
**Hold:** C6 (until the official plan is cleared) and C7 (the fatigue-replacement bench).

This differs from Amber House, where C1 was in wave 1. Amber House had no live named ad, and Arcady does: the S$24k catalog.

---

### Test plan (RECOMMENDATION ONLY. No spend without the user's approval in chat.)

1. **Structure.**
   - Add **1 new ad set** ("Wave 1 – blind statics") to the existing campaign "GoAhead The Arcady At Boon Keng New Launches [BUYER]" (instant form, Leads). Use Advantage+ audience / broad and Advantage+ placements, with C3, C5 and C4, each in 4:5 and 9:16.
   - Keep the catalog ad set running at its current level as the control, pending the `ad-creative-fatigue` verdict.
   - Replace "Arcady – Copy 3" (it breaks the rules), and don't reactivate Copy 2. Both are the user's call.
   - Use a new ad set rather than adding ads to the catalog ad set, so the incumbent's delivery isn't disturbed.
2. **Budget.** About **S$50/day for 14 days (~S$700)**. At an expected S$25–40 CPL (incumbent S$22–31, plus new creatives, plus ~10–30% form friction), that is ~18–28 leads. **It will not exit learning** (~50/week would need ~S$1,250+/week), so treat it as a directional quality read.
3. **Lead form (the main quality control, since no ad shows a price).**
   - Instant form, "Higher intent" type with a review screen.
   - **Intro screen** reveals "The Arcady at Boon Keng, a rare freehold condo near Boon Keng MRT", because C3, C5 and C4 hide the name.
   - **Budget question:** Below S$1.9M / S$1.9–2.5M / S$2.5–3.5M / Above S$3.5M. The cut sits at S$1.9M because the cheapest available unit is the 2BR at ~S$1.945M ([ARC], 05-Nov).
   - **Price line on the form** ("2-bedroom from about S$1.95M, as at [date]") is still **pending the user's explicit OK** (N2). If the answer is no, the budget question alone filters.
   - Other questions: timeline (≤3 / 3–6 / 6–12 months / just exploring), unit type (2BR / 2BR+Study / 3BR Premium / Penthouse) and purpose (own stay / investment). Add WhatsApp consent.
   - Optional: send "Below S$1.9M" to a thank-you screen with GoAhead's other-project list.
   - The new form applies to the new ad set only. Don't change the catalog's form mid-test, or the control breaks. That means CPLs aren't like-for-like, so **compare on qualified leads**.
   - Never link `thearcady.com.sg` (spam).
   - Meta button: Download.
4. **Qualified lead** (working definition until brand.md sets one): budget S$1.9M or more, timeline 12 months or less, and responds to WhatsApp/call within 72h. Sales tags every lead within 72h (S6).
   - **Ask:** have sales tag a sample of the existing 790 Arcady leads (e.g. the last 90 days, ~100 leads). That gives the incumbent's qualified rate as the real baseline.
5. **Metrics.**
   - Primary: cost per qualified lead.
   - Day-1 proxy: the share of each ad's leads choosing S$1.9M or more.
   - CPL, link CTR and form completion rate are diagnostics only.
6. **Guardrails** (heuristics anchored to Arcady's own S$22–31 baseline; the final kill/scale/fatigue verdict comes from `ad-creative-fatigue`):
   - Don't judge an ad before it has spent ~S$60 (≈2.5x recent CPL) and run 3 full days (`conversion-lag-read-meta-ads`).
   - **Pause candidate:** ~S$90 spent with 0 leads; or none of its first 5 leads at S$1.9M or more; or 0 qualified from its first 6 leads.
   - **Scale candidate:** cost per qualified lead ≤ ~S$75 (e.g. CPL ≤ S$30 with ≥40% qualified), beating the catalog's qualified cost once that baseline exists. Raise the budget by no more than 20–30% every 3–4 days.
   - **Wave stop-loss:** ~S$700 spent with fewer than 4 qualified leads means stop the wave and re-brief. Don't automatically move on to wave 2.
7. **Before launch:** fix T1–T10 and C6-2. Resolve S3 (CEA), S5 (form spec), S6 (tagging) and S7 (asset rights). Tracking verifies the instant-form lead event and CRM tagging. QA runs. The user approves. Separately, run `ad-creative-fatigue` on the catalog ad.

---

### Per-ad verdict summary (2026-11-05)

| Item | Verdict | Wave |
|---|---|---|
| research-arcady.md | **Approved** | — |
| copy-arcady.md | **Revise** (T1–T9) | — |
| C1 Direct | Revise (T1, T3, T5, T8, T10; S3, S7). Blocked if not CEA-authorised | 2 (1 if the catalog is fatigued) |
| C2 Family | **Approved** (creative) | 2 |
| C3 MRT | Revise (T2, T4), then Approved | 1 |
| C4 Listing 2BR+S | Revise (T6, T10, stock check) | 1 |
| C5 Resort | Revise (T7, T10) | 1 |
| C6 Floor plan N/S | Revise (T9, T10, C6-2; official plan) | Hold |
| C7 Checklist | **Approved** (creative) | Bench |
| **Overall** | **Revise.** Text fixes only. Launch gated by S3, S5, S6, S7, QA, tracking and the user's approval | |

### Not verified
- Whether the existing Arcady campaign is set to the Housing special ad category (not pulled).
- Daily budgets on the live ad sets. Whether the catalog's spend drop is a budget cut or delivery throttling.
- What the catalog ad actually shows (product-feed template; no body text returned). The ad preview link was generated in this session and expires, so regenerate it from ad ID 120221808838830008.
- The current form questions on the 790 existing leads, and their lead quality (no CRM data).
- The `ad-creative-fatigue` verdict on the catalog (not run in this review).
- Why "Arcady – Copy" is WITH_ISSUES (0 spend; not investigated).
- CEA authorisation, asset rights, and current stock by type.
- Competitor ad bodies and visuals (snapshots 403).
- No images generated, so execution isn't reviewed.
- **Confidence: medium.** It is higher than for Amber House, because there is a real 790-lead CPL baseline. The qualified-lead ranking is still a judgement call with no CRM data.

### Re-review
- [ ] T1–T10 and C6-2 confirmed on [date]
- [ ] C3, C5, C4 (wave 1) then go to QA and the user's pre-launch approval
- [ ] Form spec (S5) reviewed on [date]; user's answer on the form price line (N2)
- [ ] `ad-creative-fatigue` verdict on the catalog ad; decides whether C1 joins wave 1

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 7 ads) — Hougang Central Residences (working name) — 2026-11-05

Files reviewed:
- `research-hougang-central.md` (researcher)
- `copy-hougang-central.md` (copywriter, Revision 1)
- `hougang-central-prompts.md` (static-designer, Revision 1)

Checked against: CLAUDE.md, `.claude/agents/performance.md`, brand.md, learnings.md, SKILL.md "Client copy rules (feedback 2026-11-04)" (the user's rules; risk-flagged here, not challenged), `inputs/competitors/hougang-central-meta-ad-library-2026-11-05.md`, the Amber House and Arcady sections above (for consistency), the NEL and CRL station order, and **live Meta data** (read-only, account 903306407477320; campaign name contains "buyer" and none of r&f/sky/jess/gomedia, and contains "hougang"; lifetime plus daily from 2026-10-20; pulled 2026-11-05).

**Overall verdict: Revise.** Research is **Approved**. The copy is **Revise**, with text-level fixes only (H1–H5). Nothing is Blocked. C1 has a conditional block on CEA authorisation (S3). Launch is still gated by S3, S5, S6, S7, QA, tracking and the user's pre-launch approval.

**Will it work against 28+ pages?** Yes, on the blind angles, as long as the form does the filtering. Every competitor headline is a price-list, register/VIP, "integrated", landmark or D19 line. Stop counts, the Cross Island Line and the mall are unused by all ~28 pages, so C3 and C4 have real white space. The bigger finding is in the account: **Hougang is not a cold project for us.** Our named catalog ad has run since Sep 2025 at S$23.53 per lead (1,326 leads). Since 28 Oct its delivery has been displaced by two video ads that cost about S$88 per lead and break the user's rules. Fix that first. It's cheaper than any new creative.

---

### Account check: Hougang is our biggest named incumbent

| Ad | Campaign / ad set | Format | Status | Lifetime spend (S$) | Leads | CPL (S$) | CTR (all) | Freq |
|---|---|---|---|---|---|---|---|---|
| Hougang Central Residences (id 120231474538270008) | GoAhead Hougang Central Residences New Launch [BUYER] / "Broad" | Catalog (`{{product.name}}`), description "Just Few Mins to Hougang MRT", created 2025-09-10, creative re-saved 2026-11-04 | **ACTIVE** (barely delivering) | 31,205.41 | 1,326 | **23.53** | 1.32% | 3.51 |
| Hougang Central Residences - Video (120250334727610008) | same / "Broad video ads" | Video. Title "Download Full Price List and E-brochure", button GET_QUOTE | Paused | 109.67 | 2 | 54.84 | 0.97% | 1.32 |
| Hougang Central Residences - Video – Copy (120250410985990008) | same / "Broad video ads" | Video. Same title, button GET_QUOTE, delivering since 2026-11-02 | **ACTIVE** | 59.19 | **0** | — | 0.58% | 1.37 |
| Hougang Central Residences – Copy | same | — | Paused | 0 | — | — | — | — |
| Hougang Central Residences + Video ad | GoAhead Hougang Central Residences New Launch [BUYER] –Website | Catalog (description "First New Launch in Hougang in 10 Years") + video | Campaign paused | 1,078.20 | 16 | **66.92** (catalog) | 2.03% | 1.56 |
| **Total (Hougang campaigns)** | | | | **32,452.55** | **1,344** | **~24.15** | | |

Excluded: an ad named "Hougang Central Residences" in "GoAhead Hudson Place Residences New Launch [BUYER]" (paused, S$850.41, 11 leads, S$77.31). Its creative description is "Next to One-North MRT Living", so it is almost certainly a misnamed Hudson Place ad. Fix the naming so future pulls don't misattribute it.

**The two live "Download Full Price List and E-brochure" ads** in the research pull (Ad Library id 2189734151948405, ~11-02 and ~11-05) match "Video – Copy" (delivering from 11-02) and, most likely, the catalog ad (its creative was re-saved 2026-11-04). That second match is an inference. Not verified.

**Monthly CPL on the catalog:** S$15.77 (Oct 2025), S$16–22 (Nov 2025 to Feb 2026), S$28–36 (Mar to Jul 2026), then S$27.47 (Aug), S$24.35 (Sep), S$25.65 (Oct). Spend went from S$3,442 (Mar) to S$667 (Oct) to S$6.97 (1–5 Nov).

**What happened since 28 Oct (daily data):**
- 20–27 Oct: the catalog spent ~S$174 for 5 leads (~S$35).
- 28 Oct to 3 Nov: the catalog spent **S$0**. The video ad set started on 28 Oct and took all the delivery.
- 28 Oct to 5 Nov: ~S$176 spent in total for **2 leads (~S$88 per lead)**, against a ~S$24–35 baseline.
- The activity log shows only delivery-start events. I can't see why the catalog stopped. A campaign-budget shift to the new ad set is the likely cause, but that is not verified.

**Fatigue read on the catalog (signals only; the verdict belongs to `ad-creative-fatigue`):** monthly frequency is a steady 1.5–1.9, monthly CTR held at 1.2–1.3% in Sep–Oct, and CPL *improved* from May–Jul to Sep–Oct. That does **not** look like fatigue. The drop in delivery looks like budget allocation, not creative decay.

**Live copy breaks the user's rules:**
- **"Video – Copy" (ACTIVE)** has "District 19", "Within 5 mins' walk to Hougang MRT" (no walk time is confirmed), "KPE a few minutes' drive" (unsourced), "Holy Innocents' Primary" (unverified), a "Full Price List" title for a project with no price list, and a GET_QUOTE button.
- **"Video" (paused)** has "strong growth potential" and "Rare Opportunity to Invest" (implied gains, banned by brand.md §5), "Within 1 km of reputable schools" (the P1-implying hook), "Direct access to Hougang MRT Interchange (NEL & CRL)" (the CRL isn't open), "District 19" and "VVIP previews" (none exist).
- **Website catalog (paused):** "First New Launch in Hougang in 10 Years" is false. Florence Residences launched in 2019.
- **Catalog (ACTIVE):** a "price list" title is likely (not verified, because the feed template returned no title), and "Just Few Mins to Hougang MRT" is a vague, unconfirmed walk claim.

**Recommendations (all are the user's call; I don't touch the account):**
1. **Pause "Video – Copy" now.** It has multiple rule breaches, 0 leads on S$59 (about 2.5x the baseline CPL, so it has hit the judge threshold) and a CTR less than half the catalog's. This is a compliance and early-performance call, not a fatigue verdict.
2. **Don't reactivate "Video", the Website campaign or "– Copy".** The website path failed here too (S$67 vs S$24), which matches Arcady. Stay on instant forms.
3. **Don't pause the catalog. Fix it and restore its delivery.** It is the S$23.53 benchmark. Change its headline/title and description to the pre-launch line (no price list, no "few mins"), switch the button to "Sign up", and put back its budget share. The ad is at ~S$3.50/day, so there's almost no learning to lose from the edit. Run `ad-creative-fatigue` on it first, to confirm it isn't fatigued before anyone treats C1 as its replacement.
4. **The 1,344 existing Hougang leads are the most valuable asset here.** They were promised a price list that doesn't exist. (a) Sales tags a sample (the last 90 days, ~150 leads) for a qualified-rate baseline. (b) Send a WhatsApp "prices aren't out yet; you're on the list" message now, to protect trust. (c) At price release, these leads get the price list first, before any paid spend.

---

### Rail stop counts: **confirmed**

- **North East Line:** Hougang → Kovan → **Serangoon (2)** → Woodleigh → Potong Pasir → Boon Keng → Farrer Park → Little India → **Dhoby Ghaut (8)**. Outram Park is 11.
- **Cross Island Line Phase 1** (CR2 Aviation Park to CR13 Bright Hill, 12 stations): Hougang → Defu → Tampines North → **Pasir Ris (3)**; Hougang → Serangoon North → Tavistock → **Ang Mo Kio (3)** → Teck Ghee → **Bright Hill (5)**.
- **"The only CRL Phase 1 station that meets the North East Line":** correct. The other Phase 1 interchanges are Pasir Ris (EWL), Ang Mo Kio (NSL) and Bright Hill (TEL).
- **C3 tick marks** (1 + 5 on the NEL; 2, and 2 + 1, on the CRL): correct.
- **The "2030 target"** comes from Wikipedia and Stacked Homes, not a primary LTA page. It isn't independently verified against LTA. The wording ("targeted for 2030; timeline subject to change", never "will boost value") is the right hedge. Don't add "per LTA" unless someone checks an LTA source.

---

### Verdicts on the upstream files

**`research-hougang-central.md`: Approved.**
- Sources are tagged, and the CONFIRMED/UNCONFIRMED discipline is strict.
- It caught the bad newlaunches.sg URLs (they serve a Tampines EC) and the inconsistent agent site.
- The price rule is applied correctly (no confirmed price, so no price anywhere), and so is the CTA rule (pre-launch, so REGISTER YOUR INTEREST).
- The white-space read (stop counts, CRL, mall, family, upgrader, emotional hooks) matches the raw pull. Debunking the "mega / 8 years" claim was right.
- **Superseded:** "GoMedia (ours): 2 ads" and the gap "our own account history not pulled". We have run Hougang since Sep 2025 (above). That changes the test plan, but not the angles.

**`copy-hougang-central.md`: Revise.** Text fixes H1–H5 only. It is strong work. It's the cleanest rule compliance of the three projects, and the floor-plan slot was rightly skipped.

**`hougang-central-prompts.md`** (judged through the per-ad verdicts): apply H3–H5. **Approved:** the designer-set strings in its Flag 4 (C1 tile 2 reorder, C1 B-swap line, C3 line labels, C5 B-swap postmark drop, C7 label) and the palette changes in Flag 5.

---

### Rule checks (the user's client copy rules), all 7 ads, every string including fine print

| Rule | Result |
|---|---|
| No price, "$", psf or estimate | **Pass.** C6 says "Prices", never a figure. |
| No unit counts | **Pass.** "3 PRIMARY SCHOOLS" and "about 300,000 sqft of retail" aren't unit counts. |
| No "% sold" or scarcity | **Pass.** |
| No D19 / district code / street names | **Pass** in the new set. **Fail** on our live and paused videos. |
| No "freehold" | **Pass.** "99-year leasehold" or nothing. |
| Full MRT names | **Pass.** Every station string (headlines, subheads, tiles, diagram, directory, captions, primary text) reads "… MRT". Line names ("Circle Line", "North East Line", "Cross Island Line") are not station names. |
| MRT paired with nearby amenities | **Pass.** There are no minutes; "above Hougang MRT" is always paired with an amenity. H4 and H5 tighten "near". |
| Only C1 names the project | **Pass.** C2–C7 have no name, developer, CICT or "Hougang Central". "Hougang" alone is the area name (allowed). The blind ads are still guessable (copy Flag 15), as with Arcady. |
| CTA "REGISTER YOUR INTEREST" | **Pass** on all 7. The Meta button is "Sign up". |
| Headline ≤8 / subhead ≤14 words | **Pass.** |

Housing special ad category: no ad depends on restricted targeting. "Family", "commuter" and "Hougang upgrader" are message direction only. **Pass.** (Not verified: whether the existing Hougang campaign is flagged Housing.)

---

### Per-ad assessment

| | C1 Direct (named) | C2 Family | C3 MRT + CRL | C4 Mall at doorstep | C5 Stay in Hougang | C6 Be first to know | C7 Day in the life |
|---|---|---|---|---|---|---|---|
| **Hook** | Moderate. A specific fact ("2 Stops to Serangoon MRT") on a name that 11+ pages and our catalog already use. A type-only card is quiet in feed, and the "WORKING NAME" chip lowers its authority. | Strong. The user's emotional line. | **Strongest.** A question answered by a diagram nobody else runs. | Strong. Playful, concrete, and 0 competitors sell the mall. | Strong self-ID, but the wrong wallet. | Moderate to strong. It speaks to exactly what pre-launch buyers want, and its honesty contrasts with ~11 empty "price list" pages. No visual hook. | Moderate. A long headline over 4 panels is dense on a phone. |
| **Offer clarity** | Clear. | Clear. | Clear. | Clear. | Clear CTA, but the implied promise ("an upgrade I can afford") isn't behind the click. | **Clearest.** The CTA *is* the hook. | Clear. |
| **Lead-quality risk (no price + pre-launch CTA)** | **Lowest.** Name-aware buyers know it's a UOL/CapitaLand integrated launch. | **High.** BTO and HDB families of every budget. | Medium. Commuters, plus rail-tracking investors (who tend to be better-funded). | Medium to high. Convenience-led couples skew to lower budgets. | **Highest.** HDB 5-room median ~S$795k vs analyst 2BR >S$1.5M. | Medium. Self-selected in-market buyers, but "is it affordable?" lookers too. | Medium to high. Broad. |
| **Differentiation vs saturated angles** | Low to medium. Competes with 11+ named pages and our own catalog. | Good. 0 competitor school or family headlines (only our own video, which should be paused). | **Best.** 0 of ~28 pages mention stops or the CRL. | **Best.** 0 sell the mall. | Good. 0, and for a reason. | Medium. Register is the most saturated mechanic (~19 ads), but the anti-hype framing is unique. | Good format. Content restates C2–C4. |
| **Policy / claim risk** | **Medium to high.** CEA authorisation is acute for a pre-launch project with no publicly appointed agencies (S3). "Working name" plus the chip is honest. The developers are named in primary text only (correct). CRL hedged. "Largest mall" attributed. | Medium. The MOE line is present and the badge is fine. **Don't run Headline B** ("Near Montfort Junior School"): one school in a headline is the P1-adjacent hook. | Low. The counts are verified, the CRL is hedged, "not to scale", no LTA marks. | Low to medium. "Largest mall" and "300,000 sqft" are attributed and stay off the image. "Your Lobby" is figurative, but the lobby-to-mall link is unpublished, so "PLANNED ON SITE" must stay on the panel (QA call). The "24-hour Giant" retailer and hours claim isn't current-verified (H3). | Low. Message only, never targeting. | Low to medium. It is time-bound: "As at [date]" must be true within 48h. | Medium. MOE line present. "Right below" leans on [SH1]'s "sits above". OK. |
| **Production risk** | Low (Canva only). | Medium (3 photos; faces and signage rejects). | Low to medium (Canva). **Density:** 6 station labels, 5 bubbles, a tag and 2 line names on 4:5. If labels fall below ~22 px at phone size, drop the Bright Hill MRT leg from the 4:5 (keep it in 9:16 and primary text). | Medium (4 tiles; tower and signage rejects). | Low to medium (1 photo). | **Lowest** (pure Canva UI). | Medium to high (4 consistent illustrations, regenerated for 9:16). |
| **Verdict** | **Revise** (H1, H2; S3 conditional block; S7) | **Approved** (creative, Headline A only) | **Approved** (creative; density note) | **Revise** (H3, H4) | **Approved** (creative), hold | **Approved** (creative; date gate) | **Revise** (H5) |

---

### Exact text fixes (old → new)

Apply to every occurrence. The numbers in brackets show how many times each old string appears per file.

| # | Ad / location | Old | New |
|---|---|---|---|
| H1 | C1 tile 2, `copy-hougang-central.md` on-image table (1). Prompts already correct. | `**2030** / CROSS ISLAND LINE (TARGET)` | `**FROM 2030 (TARGET)** / CROSS ISLAND LINE` |
| H2 | C1 B-swap, `copy-hougang-central.md` on-image table (1) | `swap tile 2 for **2 STOPS** / TO SERANGOON MRT.` | `swap tile 2 for **2 STOPS** / TO SERANGOON MRT, and add a small line under the tail: CROSS ISLAND LINE · FROM 2030 (TARGET).` |
| H3 | C4 primary text, `copy-hougang-central.md` (1) | `Hougang Mall is already nearby, and so is Hougang Green, with its 24-hour Giant.` | `Hougang Mall is already nearby, and so is Hougang Green.` |
| H4 | C4 subhead: copy summary table (1); prompts C4 bullet + full prompt (2) | `Above Hougang MRT, near Hougang Mall & Hougang Green, with a town plaza planned.` | `Above Hougang MRT, near Hougang Mall, with a town plaza planned.` (11 words; update the copy table's "(14)" to "(11)") |
| H5 | C7 subhead: copy summary table (1); prompts C7 bullet + full prompt (2) | `Above Hougang MRT, near Punggol Park, Hougang Green & a planned on-site mall.` | `Above Hougang MRT, near Punggol Park, with a new mall planned on site.` (13 words; the "(13)" count is unchanged) |

Why H4 and H5: Hougang Green is ~1.0km straight-line from the station point (±150m), so as a walk it may be over 1km. It is the weakest amenity in the set, and it crowds the two densest subheads. Hougang Mall (~200m) and Punggol Park carry the proof. Primary-text mentions of Hougang Green can stay, because they sit beside "Distances approx., straight-line."

Other items (not text fixes):
- C6: fill in "As at [date]" within 48h of launch.
- C2: run Headline A only.
- C7: if the user picks the Checklist fallback (copy Flag 13), it needs full primary text before review.

---

### Ranking (expected cost per *qualified* lead)

1. **C3 MRT + CRL.** The clearest white space in a 28-page auction. Rail investors and commuters. Lowest production risk.
2. **C4 Mall at your doorstep.** Turns "integrated" (saturated) into something concrete and wanted. Unused.
3. **C6 Be first to know.** Matches pre-launch intent exactly. It costs nothing to build, and the form does the filtering.
4. **C2 Family.** Strong hook, but the broadest budget mix.
5. **C1 Direct.** Highest intent per lead, but our 14-month named catalog already covers name-aware buyers. Gated by CEA.
6. **C7 Day in the life.** A new format, but dense. It restates C2–C4.
7. **C5 Stay in Hougang.** The worst budget fit.

**Wave 1: C3, C4, C6** (all blind). The fixed and restored catalog ad is the named control in the same campaign, so named vs blind is still answered without spending on C1.
**Wave 2 (day-14 read or fatigue replacements): C2, C7.** Promote **C1** as the catalog's replacement **only if** `ad-creative-fatigue` says the catalog is fatigued, or if the user prefers the new rule-clean named creative over editing the catalog.
**Hold: C5** (until wave 1's form data shows meaningful S$1.5M+ demand among Hougang-area respondents).

This follows the Arcady logic (a live named incumbent means blind wave 1), not Amber House's (no incumbent, so C1 in wave 1).

---

### Test plan (RECOMMENDATION ONLY. No spend without the user's approval in chat.)

1. **Do these first (cheap and fast):** pause "Video – Copy". Fix the catalog's title, description and button, and restore its delivery at roughly its Sep–Oct level (~S$20–25/day). This alone should bring Hougang back to ~S$24–30 per lead. All of it is the user's call.
2. **Structure.**
   - Add **1 new ad set** ("Wave 1 – blind statics") to "GoAhead Hougang Central Residences New Launch [BUYER]": instant form, Leads, Advantage+ audience / broad, Advantage+ placements, with C3, C4 and C6 in 4:5 and 9:16.
   - Keep the catalog as the named control.
   - If the campaign uses campaign budget, put the test ad set on ad-set budgets (or set a spend floor). Otherwise one ad set can starve the other, exactly as the video ad set did to the catalog on 28 Oct.
   - Exclude existing Hougang form leads **only if** Housing SAC allows a custom-audience exclusion (check in Ads Manager; it may not).
3. **Budget.** About **S$50/day for 14 days (~S$700)** for the wave 1 ad set.
   - At an expected S$28–45 CPL (the incumbent's S$24–26, plus new creatives, ~10–30% form friction and a heating auction with 13 pages new since 18 Oct), that is ~16–25 leads.
   - **It will not exit learning.** Treat it as a directional quality read.
4. **Lead form** (the only quality filter, since no ad shows a price or, on C2–C7, the name):
   - **Type:** instant form, "Higher intent" with a review screen.
   - **Intro screen:** "The new condo planned above Hougang MRT at Hougang Central (official name TBC). Prices have not been released yet. Register to hear first when prices, layouts and preview dates are announced." No price, estimate or psf.
   - **Questions** (multiple choice):
     1. **Budget:** Below S$1.2M / S$1.2–1.5M / S$1.5–2M / S$2–3M / Above S$3M.
     2. **Timeline:** Ready to buy at launch / Within 6 months / 6–12 months / Just exploring.
     3. **Preferred size:** 1–2 bedroom / 3 bedroom / 4 bedroom or larger / Not sure yet.
     4. **Purpose:** Own stay / Investment.
     5. *(Recommended)* **"Are you a licensed property agent?"** Yes / No. With 28 agent pages working this project, rival agents registering to scout are a real junk-lead source here.
   - **Plus:** WhatsApp consent.
   - **Thank-you screen:** "We'll WhatsApp you when prices are out." No VIP or preview promise.
   - **Meta button:** Sign up.
   - **Never link** the newlaunches.sg Hougang URLs or `hougangcentral.com.sg`.
   - Apply the new form to the new ad set only. Updating the catalog's form at the same time is acceptable here, because the catalog is being edited anyway, but note the break in its baseline.
5. **Qualified lead, pre-launch definition** (working, until brand.md sets one). Nobody can buy yet, so qualification is about intent and fit:
   - **Stage 1, tagged by sales within 72h:**
     - budget S$1.5M or more (calibrated on analyst 2BR estimates; **recalibrate the day prices are released**), **and**
     - timeline "at launch", "within 6 months" or "6–12 months", **and**
     - not an agent, **and**
     - answers WhatsApp or a call within 72h and confirms they want the price list and preview invite.
   - **Stage 2, the lagging true signal:** books a preview or show-flat visit once dates are announced. Track the share of stage-1 leads that reach stage 2 at launch. That is the real read on which hook found buyers.
6. **Metrics.**
   - **Primary:** cost per stage-1 qualified lead.
   - **Day-1 proxy:** the share of each ad's leads choosing S$1.5M or more, and the share answering "agent".
   - CPL, link CTR and form completion are diagnostics only.
7. **Guardrails** (heuristics anchored to Hougang's own S$24–26 Sep–Oct baseline; the final kill/scale/fatigue verdict comes from `ad-creative-fatigue`):
   - Don't judge an ad before ~S$60 spent (≈2.5x the baseline CPL) **and** 3 full days (`conversion-lag-read-meta-ads`).
   - **Pause candidate:** ~S$90 spent with 0 leads; **or** none of its first 5 leads at S$1.5M+; **or** 0 stage-1 qualified from its first 6 leads.
   - **Scale candidate:** cost per stage-1 qualified lead ≤ ~S$70 (for example, CPL ≤ S$35 with ≥50% qualified), and beating the catalog's qualified cost once the baseline from recommendation 4(a) exists. Raise the budget by no more than 20–30% every 3–4 days.
   - **Wave stop-loss:** ~S$700 with fewer than 4 stage-1 qualified leads means stop and re-brief. Don't automatically move on to wave 2.
   - **Price-release trigger** (this overrides everything above): when the developer releases prices,
     - re-run research;
     - switch the CTA on every ad to "GET PRICE LIST & E-BROCHURE" and retire C6;
     - if a confirmed entry is ≤S$1.4M, C1 goes price-led;
     - recalibrate the form's budget bands;
     - send the price list to the 1,344 existing leads before raising any paid budget;
     - expect the auction to spike over launch weekend.
8. **Before launch:** fix H1–H5. Resolve S3 (CEA authorisation; acute for a pre-launch project), S5 (form spec as above), S6 (72h tagging) and S7 (no official assets exist, which is handled by the no-building layouts). Tracking verifies the instant-form lead event and CRM tagging. QA runs. The user approves. Run `ad-creative-fatigue` on the catalog.

---

### Per-ad verdict summary (2026-11-05)

| Item | Verdict | Wave |
|---|---|---|
| research-hougang-central.md | **Approved** | — |
| copy-hougang-central.md | **Revise** (H1–H5) | — |
| C1 Direct (named) | Revise (H1, H2; S3, S7). **Blocked if not CEA-authorised** | 2 / catalog replacement |
| C2 Family | **Approved** (creative, Headline A only) | 2 |
| C3 MRT + CRL | **Approved** (creative; 4:5 density check) | 1 |
| C4 Mall at doorstep | Revise (H3, H4), then Approved | 1 |
| C5 Stay in Hougang | **Approved** (creative) | Hold |
| C6 Be first to know | **Approved** (creative; "As at [date]" within 48h) | 1 |
| C7 Day in the life | Revise (H5), then Approved | 2 |
| Live "Video – Copy" | Recommend pause (rule breaches; 0 leads on S$59) | — |
| Live catalog | Recommend fix the title/description/button and restore delivery; don't pause | Named control |
| **Overall** | **Revise.** Text fixes only. Launch gated by S3, S5, S6, S7, QA, tracking and the user's approval | |

### Not verified
- Why the catalog stopped delivering on 28 Oct (budget settings and campaign-budget mode weren't pulled; the activity log shows only delivery events).
- The catalog's actual title and button (feed template; no title returned). The "price list" title is assumed from the Ad Library pull.
- Which of our ads Ad Library id 2189734151948405's "11-05" entry is (inferred: the catalog's 11-04 re-save).
- Whether the Hougang campaign is set to the Housing special ad category, and whether custom-audience exclusions are allowed there.
- The `ad-creative-fatigue` verdict on the catalog (not run in this review; signals only).
- Lead quality on the 1,344 existing leads (no CRM data), and what sales sent them in place of a price list.
- The CRL 2030 target against a primary LTA source. Official name, prices, unit mix, preview dates and TOP (none published).
- CEA authorisation for GoAhead to market a pre-launch project. Competitor ad bodies and visuals (snapshots 403).
- No images have been generated, so execution isn't reviewed.
- **Confidence: medium.** The S$23.53 baseline on 1,326 leads is solid for CPL. The qualified ranking is a judgement call without CRM data, and pre-launch leads can't be fully judged until prices and preview dates exist.

### Re-review
- [ ] H1–H5 confirmed on [date]
- [ ] User's decision on "Video – Copy" (pause) and the catalog (fix + restore), with the `ad-creative-fatigue` verdict on the catalog
- [ ] Form spec (S5) reviewed on [date]; 72h tagging agreed (S6); CEA answer (S3)
- [ ] C3, C4, C6 (wave 1) then go to QA and the user's pre-launch approval

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 7 ads) — Coastal Cabana EC — 2026-11-05

Files reviewed:
- `research-coastal-cabana.md` (researcher)
- `copy-coastal-cabana.md` (copywriter, Revision 1)
- `coastal-cabana-prompts.md` (static-designer, Revision 1)

Checked against: CLAUDE.md, `.claude/agents/performance.md`, brand.md, learnings.md, SKILL.md "Client copy rules (feedback 2026-11-04)" (the user's rules; risk-flagged, not challenged), `inputs/competitors/coastal-cabana-meta-ad-library-2026-11-05.md`, the Amber House, Arcady and Hougang sections above, the CRL station order, and **live Meta data** (read-only, account 903306407477320; campaign name contains "buyer" and none of r&f/sky/jess/gomedia; ads named "coastal"/"cabana" plus the same-site campaign "Jalan Loyang Besar EC"; lifetime and monthly; pulled 2026-11-05).

Context given by the lead: launched 17 Jan 2026, ~85% sold, selling balance units. Entry $1.542M, so no price in any ad. CTA "GET PRICE LIST & E-BROCHURE". EC compliance applies (eligibility, no gain claims, grant amount unconfirmed). "Preview" is treated as "show flat open for viewing".

**Overall verdict: Revise.** Research is **Approved**. Copy is **Revise**, with text fixes CC1–CC6 only. Nothing is outright Blocked. There are two conditional blocks: **C4 (and C1's MOP tile)** until the EC rules are verified on HDB or in the Eligibility Booklet (E1), and **C1** if GoAhead isn't CEA-authorised (S3). Launch is still gated by S3, S4, S5, S6, S7, E1, QA, tracking and the user's pre-launch approval.

**Will it work on Meta?** Yes, but as a small stock-clearance play, not a volume campaign. The angles are clean and almost all unused by the ~6 competitor pages. The constraint is the buyer pool: EC-eligible households only, buying a 3BR at S$1.54–1.68M, with ~15% of stock left. **Our own account says this project costs about twice what Arcady or Hougang cost.** Plan for S$55–90 per lead. The form does the qualifying. The cheapest first move isn't an ad at all: re-contact the 281 Coastal Cabana leads we already hold.

---

### Account check: Coastal Cabana is not a cold project for us

The research said "GoMedia (ours): 0 found" and "no account history". That is **superseded**. All our Coastal Cabana ads have been paused since March 2026, which is why the Ad Library didn't show them.

| Campaign (filter-compliant) | Period with spend | Spend (S$) | Leads | CPL (S$) | CTR (all) | Freq |
|---|---|---|---|---|---|---|
| GoAhead Jalan Loyang Besar EC New Launch [BUYER] (same site, pre-name; ads "Jalan Loyang Besar 1–6", catalog template) | Jun–Nov 2025 | 8,748.87 | 177 | **49.43** | 1.63% | 2.04 |
| GoAhead Coastal Cabana New Launches [BUYER] – Copy (ads "Coastal Cabana 1–8", catalog template) | Oct 2025 – Mar 2026 | 4,651.00 | 104 | **44.72** | 1.24% | 1.93 |
| **Total GoAhead Coastal Cabana** | Jun 2025 – Mar 2026 | **13,399.87** | **281** | **~47.69** | | |

Monthly CPL:
- Jalan Loyang Besar: S$32.89 (Jun 2025, n=12), S$53.60 (Jul), S$52.64 (Aug, n=55), S$59.39 (Sep), S$40.54 (Oct), S$47.38 (Nov).
- Coastal Cabana – Copy: S$47.91 (Oct 2025), S$38.48 (Nov, n=43), S$43.36 (Dec), **S$54.85 (Jan 2026, the launch month, n=14)**, **S$97.58 (Mar 2026, n=2)**, then nothing from Apr to Nov 2026.
- **Post-launch tail (Jan + Mar 2026): S$963 for 16 leads, ~S$60.** That's the closest read to today's stage. Low confidence (n=16).

Top ads (all paused):
- "Jalan Loyang Besar 1": S$4,835.75, 108 leads, S$44.78
- "Coastal Cabana 5" (Broad 2): S$3,524.27, 82 leads, S$42.98
- "Jalan Loyang Besar 4": S$2,011.24, 45 leads, S$44.69

Both of the volume ads are `{{product.name}}` catalog templates. **Their headline, body and CTA couldn't be read** (the preview API returned an empty body), so I can't say which angles they used. Not verified.

**Comparable GoAhead [BUYER] EC campaigns (filter-compliant):**
- Tampines West EC 95 GLS Pre Launches: S$1,163.35, 26 leads, S$44.74
- Tampines Street 95 EC: S$543.83, 6 leads, S$90.64
- Plantation Close EC: S$94.61, 1 lead
- Otto Place EC – Website: S$25.05, 0 leads
- Senja Close EC: S$292.59, 55 leads, S$5.32 (Dec 2025). An outlier, probably a cheap pre-launch registration with unknown intent. **Don't use it as a benchmark.**

**Excluded by the client filter (they contain "jess"):** "Jess Tan Coastal Cabana New Launch [BUYER]" 1, 2 and 3, with S$841.35 and 20 leads combined. They are not gomedia-homes data, so I don't use them. "GoGo Media: …" EC campaigns don't contain "buyer" and are excluded too.

**CPL estimate for this test:**
- At volume, this account's EC band is **S$43–55**, and Coastal Cabana itself ran S$45–49 lifetime.
- The post-launch tail was S$60–98.
- The project is now 85% sold. Add +10–30% for the qualifying form.
- One point in our favour: the account has been dark on this project for 7 months, so frequency starts fresh.
- **Expect S$55–90 per lead, central ~S$65–70.** Amber House's late-stage S$68 says the same thing.
- **EC CPL here is roughly 2x Arcady or Hougang (S$22–31).** Don't budget it like a condo.

**The 281 existing leads are the cheapest asset (all the user's call):**
- (a) Sales checks the CRM. Which of the 281 bought (with us or elsewhere), and which are still open?
- (b) Send the open ones a WhatsApp message: "Show flat is open for viewing, here's the current 3-bedroom price list." The developer's $10–12k discount (until end-2026) can go in that 1:1 message. It's banned from ads, not from a sales conversation.
- (c) Count how many book a viewing **before** raising any paid budget.
- No CRM data exists on these leads. **Not verified.**

---

### Verdicts on the upstream files

**`research-coastal-cabana.md`: Approved.**
- Stage is correctly called "launched, balance units". "Preview" was retired, and the stage wording "show flat open for viewing" matches the developer's own line.
- The price rule is applied correctly ($1.542M is over the cap, so no price anywhere) and the CTA rule is applied correctly (released list, so GET PRICE LIST & E-BROCHURE).
- The 4BR sell-out inference is labelled as an inference. Walk minutes were refused because the sources conflict, and the straight-line method is disclosed.
- It caught the $18k ceiling trap (it doesn't apply to balance units), "the last 5-year-MOP EC" (inaccurate) and Coney Island (~5.2km).
- Conditions on use:
  - (a) Every EC rule fact rests on Stacked reporting MND. It needs HDB or Eligibility Booklet verification before it's used (E1).
  - (b) The "ours: 0" and "no account history" lines are superseded by the account check above.
  - (c) Hai Sing Catholic School's campus status is still open.

**`copy-coastal-cabana.md`: Revise.** Text fixes CC1–CC6 below. It's strong, clean work. The EC compliance handling is the most careful in the four projects.

**`coastal-cabana-prompts.md`** (judged through the per-ad verdicts): apply CC2, CC3, CC4 and CC6. **Approved:** the designer-set strings in its Flag 4 (the C1 descriptor moved above the name, the C3 2-line split, the C4/C5/C6 fine-print combinations, the C6 fallback title, and the C7 label reorder to `CROSS ISLAND LINE · FROM 2030 (TARGET)`) and the palette changes in Flag 5.

---

### Rule checks (the user's rules), all 7 ads, every string including fine print

| Rule | Result |
|---|---|
| Only Direct names the project | **Pass.** Only C1 has "Coastal Cabana" and the developers (developers in primary text only). C2–C7 have no name, developer, address or "Loyang". The blind ads are guessable ("new EC in Pasir Ris, opposite Downtown East"), as with the other three projects. |
| Price only if entry ≤$1.4M | **Pass.** Entry is $1.542M, so there's no price, "$", psf, discount or grant anywhere. C1 leads with the #1 USP. |
| Hot USP first | **Pass.** Research ranked 6 USPs, and the copy maps them 1:1. |
| Every ad looks different | **Pass.** 7 distinct layouts, and none repeats a Hougang layout. |
| Subheads sell advantages, no district codes or streets | **Pass.** |
| Freehold → "rare freehold condo" | **N/A.** It's a 99-year EC, and nothing says freehold. |
| No unit counts | **Pass.** Sqft only. "4 pools", "65+ facilities" and "2 SCHOOLS" aren't unit counts. |
| Full MRT station names | **Pass.** Every station string reads "Pasir Ris MRT", "Pasir Ris East MRT", "Hougang MRT" or "Ang Mo Kio MRT". |
| No "% sold" or scarcity | **Pass.** |
| MRT minutes paired with amenities | **Pass.** No minutes exist, and every MRT mention sits next to an amenity. C2 and C3 subheads carry no MRT, which is acceptable: the rule pairs minutes when they exist, and the MRT is this project's weak fact. |
| Lead's EC rules: eligibility line, no grant, no gain, "near", no Coney Island, EC never freehold | **Pass.** "EC eligibility conditions apply." is in all 7 primary texts and leads all 7 on-image fine prints. No grant figure, no privatisation, no resale or "last" wording. Coney Island is absent. |
| CTA GET PRICE LIST & E-BROCHURE, Meta button "Download" | **Pass** on all 7. It's **conditional on S7**: GoAhead must be allowed to send the developer's e-brochure, or the CTA promise breaks. |
| Headline ≤8 / subhead ≤14 words | **Pass** (spot-checked against the copy's convention). |

Housing special ad category: no ad depends on restricted targeting. "Families", "upgraders" and "commuters" are message only. The eligibility question is a form filter, not targeting. **Pass.** (Not verified: whether the old Coastal Cabana campaigns were set to Housing.)

---

### Per-ad assessment

| | C1 Direct (named) | C2 Family | C3 Beach / Downtown East | C4 Earlier EC rules (5-yr MOP + DPS) | C5 Resort facilities | C6 3BR floor plan | C7 MRT + CRL map |
|---|---|---|---|---|---|---|---|
| **Hook** | Moderate to strong. Name + the #1 USP. A split card is calm in feed. | Strong. The user's emotional line, and the right buyer for an EC (young families). | **Strongest thumb-stop.** A big quiet photo and a promise. | Strong **for EC-literate shoppers**, flat for everyone else. A table isn't a thumb-stopper, but the headline is a real question. | Moderate. "Resort-style" is a commodity phrase; the giant "65+" helps. | Moderate. "See how 3 bedrooms fit in 872 sqft" is a good answer to the obvious objection (size). It reads small on 4:5. | Weak to moderate. **It leads with the project's weakest fact** (~0.9km straight-line, "not exactly walkable" per Stacked). |
| **Offer clarity** | Clear. | Clear. | Clear. | Clear: "price list: normal & deferred schemes". | Clear. | Clear **only if** the official plan is used. | Clear. |
| **Lead-quality risk (no price, EC eligibility)** | **Lowest.** Name-aware buyers mostly know it's an EC at ~S$1.5M+. | Medium to high. Families are the right segment, but many are BTO-budget or over the $16k ceiling. | **High.** A lifestyle promise pulls renters, the ineligible and the curious. | **Lowest of the blind set.** People who know the May 2026 MOP change are in-market EC buyers, and mostly eligible. Narrow reach. | Medium to high. Broad. | Low to medium. It self-selects 3BR family buyers, exactly what's for sale. | Medium. Commuters, plus some who'll be disappointed by the walk. |
| **Differentiation** | Medium. The name is used by the Coastal Cabana page, Darren Ong's carousel and our own paused catalog history, but nobody names Downtown East. | **Good.** 0 competitor school or family hooks. | Medium to good. "Coastal living" is the one used angle (EC Buyer, developer). Specificity (beach + Downtown East) separates it. | **Best.** 0 competitors, and topical. | Good. 0 in ads (developer site only). | Good. 0 use a plan as the hero. | Good. 0 mention the CRL or Pasir Ris East MRT. |
| **Policy / claim risk** | Medium to high. CEA authorisation (S3). "Jointly developed by Qingjian Realty and Forsea Holdings" understates a JV that Stacked says has 4 partners (**CC1**). The 5-YEAR MOP tile and the MOP/DPS sentence carry C4's verification risk (**CC2**, E1). | Medium. MOE line present. **"School run: Casuarina Primary" implies the child attends**, which is the P1-adjacent cue (**CC3**). Hai Sing's new campus status is unconfirmed (gate). "Across the road" is stronger than the sourced "opposite" (**CC4**). | Low. "Near Pasir Ris Beach" ("short walk", Stacked). "Sea views from selected units only" is on the image. A golden aqua beach can over-promise Pasir Ris's grey-green water (**CC6**, minor). | **High, but handled.** Two plain facts, no gain wording, DPS disclosure, no ticks or arrows. **Conditionally Blocked until E1.** **Don't run Headline B** ("This One Didn't."): it reads as a loophole claim. "Why does MOP matter?" = sell sooner, so the copy must never answer that question; it doesn't. | Low. "65+" is developer-only, but attributed ("per developer"). "4 pools" is corroborated by Stacked (2 lap + family + splash). | Medium to high. Headline A is false without the official plan. "The e-brochure has the floor plans" is unverified (**CC5**). Stock-dependent (Premium + Study: 3 left). | Low to medium. CRL hedged ("2030 target; subject to change"), stop counts verified, "not to scale", no LTA marks. "Near" for ~0.9–1.1km is within the user's rule, but it's at the edge. |
| **Production risk** | Low with the shoreline fallback (Canva panel). The official render needs rights (S7). | Low to medium. Draw the crayon art in Canva to avoid letters or faces. | Medium. A 9:16 regeneration. Reject jetties, islands, rides and chalets. | **Lowest** (pure Canva). | Medium. Reject towers and slides behind the pool. | **High.** It depends on official plan rights. The fallback has no building image (a SKILL gap). | Low to medium (Canva). 7 pins + 2 lines + tag on 4:5 is dense; keep labels ≥20 px. |
| **Verdict** | **Revise** (CC1, CC2; S3 conditional block; S7) | **Revise** (CC3, CC4; Hai Sing gate) | **Approved** (creative; CC6 optional) | **Revise: conditionally Blocked** until E1. Headline A only | **Approved** (creative), hold | **Revise** (CC5); Headline A blocked without the official plan | **Approved** (creative), hold. If it runs, prefer Headline B |

---

### Shared gates (before any ad launches)

- **E1. EC rule verification.** Before C4 runs, and before C1 carries the MOP tile and the MOP/DPS sentence, QA or the user confirms on hdb.gov.sg or in the developer's Eligibility Booklet:
  - the 5-year MOP from key collection
  - DPS availability for balance units
  - the 8 May 2026 new-rule terms
  - the $16,000 ceiling for this project

  Until then, C1 uses the CC2 fallback tile and drops those two strings. (owner: QA / user)
- **S3. CEA authorisation and particulars.** If GoAhead isn't authorised to market Coastal Cabana, C1 is Blocked and the blind set needs a QA check. (owner: user/client)
- **S4. Stock, checked within 48h of launch.**
  - Is the 3BR Deluxe (872 sqft) still available? If not, every "from 872 sqft" becomes "from 915 sqft".
  - Premium + Study (3 left).
  - Confirm 4BR is sold out on the developer's current list.
  - Confirm DPS is still offered.

  (owner: copywriter)
- **S5. Lead form spec.** As in the test plan below. (owner: landing-page)
- **S6. 72h CRM tagging,** plus a CRM status check on the 281 historical leads. (owner: tracking + sales)
- **S7. Rights.** The official render (C1, C5), the 3BR plan (C6) **and the e-brochure the CTA promises**. If GoAhead can't send the developer's brochure, the user decides the CTA wording. (owner: user/client)
- **Hai Sing gate.** Launch C2 on the copy's B-swap subhead (Casuarina Primary + Pasir Ris Park) and drop the badge **unless** Hai Sing's new campus is confirmed open. (owner: copywriter)
- **Show-flat location.** The thank-you screen and WhatsApp script give the real sales-gallery location (off-site, not Pasir Ris). (owner: landing-page / sales)

---

### Exact text fixes (old → new)

Apply each one to every listed occurrence. Leave mentions inside the Flags sections alone unless noted.

| # | Ad / where | Old | New |
|---|---|---|---|
| CC1 | C1 primary text, `copy-coastal-cabana.md` (1) | `It's jointly developed by Qingjian Realty and Forsea Holdings.` | `It's developed by a joint venture that includes Qingjian Realty and Forsea Holdings.` |
| CC2 | C1 tile 2, **only while E1 is unverified.** `copy-coastal-cabana.md` on-image table (1); `coastal-cabana-prompts.md` C1 bullet (1) | `**5-YEAR MOP** / EARLIER EC RULES` | `**65+ FACILITIES** / PER DEVELOPER` |
| CC2 | same, C1 full prompt in `coastal-cabana-prompts.md` (1) | `tile 2 "5-YEAR MOP" with caption "EARLIER EC RULES"` | `tile 2 "65+ FACILITIES" with caption "PER DEVELOPER"` |
| CC2 | same, C1 primary text, `copy-coastal-cabana.md` (1) | `Coastal Cabana falls under the earlier EC rules, with a 5-year MOP and a Deferred Payment Scheme option. ` | *(delete the sentence)*, and in the same cell delete `DPS prices differ from normal-scheme prices; terms per developer. ` |
| CC3 | C2 sticky note: `copy-coastal-cabana.md` on-image table (1); `coastal-cabana-prompts.md` C2 bullet + full prompt (2) | `School run: Casuarina Primary` | `Casuarina Primary nearby` |
| CC4 | C2 sticky note: `copy-coastal-cabana.md` on-image table (1, not Flag 9); `coastal-cabana-prompts.md` C2 bullet + full prompt (2, not Flag 10) | `Downtown East across the road` | `Downtown East, just opposite` |
| CC5 | C6 primary text, `copy-coastal-cabana.md` (1) | `The e-brochure has the floor plans, so ask for the current price list with it.` | `Ask us for the 3-bedroom floor plans with the current price list.` |
| CC6 | C3 photo, `coastal-cabana-prompts.md` full + image-only prompts (2) | `calm soft-aqua water with small lapping waves` | `calm soft grey-green water with small lapping waves` |
| CC6 | C3 Visual bullet, `coastal-cabana-prompts.md` (1) | `soft aqua water` | `soft grey-green water` |

Not text fixes:
- C4: run Headline A only.
- C2: Headline A recommended (B names no single school, so it's allowed).
- C7: if it runs, use Headline B ("Cross Island Line to Pasir Ris: 2030 Target"), so the ad doesn't open on the walkability objection.
- Revert CC2 to the original strings once E1 is verified.

---

### Ranking (expected cost per *qualified* lead)

1. **C1 Direct.** Highest intent. Post-launch buyers search the name, and we have **no live named incumbent** (all paused since Mar 2026), so this is the Amber House logic, not Arcady's or Hougang's.
2. **C4 Earlier EC rules.** The best qualifier in the blind set (EC-literate in-market shoppers), and 0 competitors run it. Gated by E1.
3. **C3 Beach / Downtown East.** The #1 USP and the strongest thumb-stop. It brings volume, and the form has to do the filtering.
4. **C2 Family.** The right segment for an EC, and unused, but a broad budget and eligibility mix.
5. **C6 Floor plan.** Good self-selection on exactly what's for sale, but it's asset-gated and small on 4:5.
6. **C5 Facilities.** A commodity claim in a set with better hooks.
7. **C7 MRT + CRL map.** Leads with the weakest fact.

**Wave 1: C1, C4, C3.**
- It answers named vs blind (C1 vs C3), and rational vs emotional among the blind ads (C4 vs C3).
- **If E1 isn't verified on launch day, C2 replaces C4**, and C4 joins when it clears.
- If S3 blocks C1, launch C3 + C4 (or C2), and the blind set has to carry it.

**Wave 2 (the day-14 read, or fatigue replacements): C2, C6** (C6 once the official plan is cleared).
**Hold: C5, C7** (fatigue replacements only).

---

### Test plan (RECOMMENDATION ONLY. No spend without the user's approval in chat.)

**0. Before any spend:** re-contact the 281 historical leads (account check, (a)–(c)). If that books viewings, it changes the paid budget needed.

**1. Structure.**
- 1 Leads campaign, Housing special ad category, Singapore. **Instant form** (the website path failed on Arcady and Hougang, and all our Coastal Cabana volume came from forms).
- **1 ad set:** Advantage+ audience / broad, Advantage+ placements. C1, C4 (or C2) and C3, each in 4:5 and 9:16.
- Exclude the 281 past form leads only if Housing SAC allows a custom-audience exclusion (check in Ads Manager; it may not).
- Use a new campaign rather than reviving "– Copy". Its history is from a different stage (pre-launch), and its catalog creative is unreadable.

**2. Budget.** About **S$50/day for 14 days (~S$700)**.
- At S$55–90 per lead, that's ~8–13 leads.
- **It will not exit learning.** It's a directional quality read on a small pool.
- Don't go bigger. With ~110 units left, the constraint is buyers, not delivery.

**3. Lead form** ("Higher intent", with a review screen):
- **Intro screen:** "Coastal Cabana EC in Pasir Ris, opposite Downtown East. 3-bedroom homes from 872 sqft. The show flat is open for viewing. EC eligibility conditions apply (set by HDB)."
  - Add "3-bedroom from about S$1.54M (as at [date])" **only if the user OKs N2 for this project**.
  - For an EC this line saves the most wasted calls, so I recommend asking the user. It's still the user's call.
- **Questions** (all multiple choice):
  1. **EC eligibility** (required): "Have you checked that your household can buy an EC?" Yes, we're eligible / Not sure, please help me check / No, we're not eligible.
     - **Don't name income, citizenship or property ownership inside the question, and never ask for an income figure.** Meta's lead-form rules restrict asking for financial details. Under Housing SAC, a question on national origin is a needless discrimination flag. The conditions are HDB's, so point to them; don't interrogate.
     - "Not sure" is a **good** lead: the consultant's eligibility check is a real service and the first call's reason to exist. Tag it stage 0, not junk.
     - If a ceiling is ever stated (WhatsApp, call script), it's **$16,000**, never $18,000, and only after E1.
     - QA checks the final wording against current Meta policy.
  2. **Budget** (required): Below S$1.5M / S$1.5–1.7M / S$1.7–2M / Above S$2M.
  3. **Timeline** (required): Within 3 months / 3–6 months / 6–12 months / Just exploring.
  4. **Unit type:** 3-bedroom / 3-bedroom + Study / 5-bedroom (ask us). **No 4-bedroom option.**
  5. *(Recommended)* **"Are you a licensed property agent?"** Yes / No.
- **Plus:** WhatsApp consent.
- **Optional:** conditional logic so "No, not eligible" gets a thank-you screen offering GoAhead's condo shortlist (Arcady/Hougang). The lead stays useful without counting as a Coastal Cabana prospect.
- **Thank-you screen:** "We'll WhatsApp you the current 3-bedroom price list and e-brochure (S7). The show flat is at [correct sales-gallery location]." No VIP, preview or priority promise. **Meta button: Download.**

**4. Qualified lead (EC, launched project; working definition until brand.md sets one):**
- **Stage 1, tagged by sales within 72h:**
  - eligible ("Yes", or "Not sure" then confirmed eligible on the call), **and**
  - budget S$1.5M or more, **and**
  - timeline within 6 months, **and**
  - wants a 3-bedroom, **and**
  - not an agent, **and**
  - answers WhatsApp or a call within 72h.
- **Stage 2, the real signal:** books a show-flat viewing.
- **Stage 3, lagging:** booking or option fee.
- **Primary metric:** cost per stage-1 qualified lead. **True signal:** cost per viewing booked.
- **Day-1 proxy:** the share of each ad's leads that answer "eligible" **and** S$1.5M+.
- CPL, link CTR and form completion are diagnostics only.

**5. Kill / scale guardrails.** These are heuristics anchored on Coastal Cabana's own S$45–60 baseline. **The final kill/scale/fatigue verdict comes from `ad-creative-fatigue`.**
- Don't judge an ad before ~S$130 spent (≈2x the expected CPL) **and** 3 full days (`conversion-lag-read-meta-ads`).
- **Pause candidate:**
  - ~S$200 spent with 0 leads; **or**
  - none of its first 5 leads "eligible + S$1.5M+"; **or**
  - 0 stage-1 qualified from its first 6 leads.
- **Scale candidate:**
  - cost per stage-1 qualified ≤ ~S$180 (for example, CPL ≤ S$65 with ≥35% qualified), **and**
  - at least 1 viewing booked.
  - Raise the budget by no more than 20–30% every 3–4 days, and **cap it at ~S$80/day** (pool size).

**6. Project stop-loss (only ~15% of stock is left):**
- **Wave stop:** ~S$700 (wave 1) with fewer than 3 stage-1 qualified leads, **or 0 viewings booked** → stop paid acquisition on Coastal Cabana. Work the existing leads only. Don't roll on to wave 2 automatically.
- **Project cap:** ~S$1,400 cumulative (waves 1 + 2) without at least 2 viewings booked → stop for good and move the budget to projects with deeper stock.
- **Stock triggers:**
  - If available 3-bedroom stock falls below ~40 units, or the 872 sqft Deluxe sells out, re-check every string and cut the budget.
  - Below ~20 units, stop new paid acquisition.
- **Date trigger:** the developer's discount ends 31 Dec 2026. Re-review before spending into January.
- **Price trigger:** if a unit ever reaches ≤$1.4M, re-run research (C1 could go price-led).

**7. Before launch:** CC1–CC6 fixed; gates E1, S3–S7 and the Hai Sing gate resolved; tracking verifies the form lead event and CRM tagging; QA runs; the user approves.

---

### Per-ad verdict summary (2026-11-05)

| Item | Verdict | Wave |
|---|---|---|
| research-coastal-cabana.md | **Approved** (conditions a–c) | — |
| copy-coastal-cabana.md | **Revise** (CC1–CC5) | — |
| coastal-cabana-prompts.md | Apply CC2–CC4, CC6; Flag 4 and Flag 5 strings Approved | — |
| C1 Direct (named) | Revise (CC1, CC2; S3, S7). **Blocked if not CEA-authorised** | 1 |
| C2 Family | Revise (CC3, CC4; Hai Sing gate) | 2 (wave-1 substitute for C4) |
| C3 Beach / Downtown East | **Approved** (creative; CC6 optional) | 1 |
| C4 Earlier EC rules | Revise. **Conditionally Blocked until E1.** Headline A only | 1 (once E1 clears) |
| C5 Facilities | **Approved** (creative) | Hold |
| C6 3BR floor plan | Revise (CC5). Headline A needs the official plan (S7) | 2 |
| C7 MRT + CRL map | **Approved** (creative); prefer Headline B | Hold |
| **Overall** | **Revise.** Text fixes only. Launch gated by E1, S3–S7, QA, tracking and the user's approval | |

### Not verified
- The creative content of our past Coastal Cabana and Jalan Loyang Besar ads (catalog templates; the preview returned no body or title). I can't say which angles drove the S$43–49 CPL.
- Lead quality and CRM status of the 281 historical leads (no sales data).
- EC rules (MOP, DPS, the new-rule terms, the $16k ceiling) and the grant on a primary HDB/MND source (E1).
- Hai Sing Catholic School's new campus status. Current 3BR, 4BR and DPS stock.
- CEA authorisation. Rights to the render, plan and e-brochure. Who runs coastalcabana.com.sg and the "Coastal Cabana" FB page.
- Whether past Coastal Cabana campaigns were set to Housing SAC, and whether custom-audience exclusions are allowed.
- The CRL 2030 target on a primary LTA source (stop counts re-checked: Pasir Ris East MRT → Hougang MRT 4, → Ang Mo Kio MRT 7, consistent with the Hougang review).
- No images generated, so execution isn't reviewed. Competitor ad bodies and visuals (snapshots 403).
- **Confidence: medium on CPL** (281 leads on this exact project, but they're pre-launch-weighted, and the post-launch tail is n=16). **Low on the qualified ranking** (no CRM data).

### Re-review
- [ ] CC1–CC6 confirmed on [date]
- [ ] E1 (EC rules verified) on [date]: revert CC2, clear C4
- [ ] S3 CEA answer; S7 rights (render, plan, e-brochure); Hai Sing gate; S4 stock check within 48h of launch
- [ ] Form spec (S5) reviewed; N2 decision for this project; 72h tagging and the CRM check on the 281 leads (S6)
- [ ] Wave 1 (C1, C4 or C2, C3) then goes to QA and the user's pre-launch approval
