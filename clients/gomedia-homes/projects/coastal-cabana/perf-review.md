# Performance Review — Coastal Cabana

Copied from campaigns/2026-11-new-launch-projects/perf-review.md on 2026-11-07 when projects moved to their own folders. New reviews go at the bottom.

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

---

## Copywriter — copy-brief.md "Revision 2 — 3-angle set" (R2-A Direct, R2-B Floor plan, R2-C Price + near MRT) — 2026-11-07

Verdict: **Revise** (2 string swaps). **R2-A and R2-C go to design as soon as the swaps are made. R2-B is held for the official plan.**

Checked against: Revision 2 in copy-brief.md, research.md (sources as tagged), learnings.md (price rule 2026-11-06, Coastal Cabana EC CPL row), `gomedia-homes-static-ad-rules` (client copy rules, EC lessons), the earlier CC1–CC6 / S3–S7 / E1 items. Live Meta data: none.

### What passes
- The price rule applies: the entry is ~$1.54M, inside the ~$1.5–1.6M band. The price is always tied to "3-bedroom" and "DELUXE · 872 SQFT", with no "cheapest", discount or deal wording, and dated price fine print on every ad.
- Only A names the project. B and C are blind (no name, developer, address or "Loyang"). There are no unit counts, % sold, district codes, MOP/DPS strings, grant figures or school names. "EC eligibility conditions apply." leads every fine print. The Cross Island Line is always hedged (2030 target). Pasir Ris MRT is "near" only, with no minutes. CC1–CC6 are carried through.
- The 3 layouts are distinct (split name card / blueprint / price-tag hero + nearby strip).

### Rulings
1. **Price: use the exact "$1.542M*" by default, not "from $1.54M*".** The dated developer list ([NLP]) shows $1.542M. "$1.54M" understates it, and the "after discount" source ([SHM], 9 Oct) is older and may not be the current list. Rounding a "from" price down is the misleading-price risk. Use "$1.54M*" only if QA confirms a 3-bedroom at ≤ $1,540,000 (normal scheme) on the developer list dated [DATE]. Word counts don't change.
2. **Beach: "Pasir Ris Beach nearby", not "a short walk away".** No source gives a distance or walk time, and the set already holds Pasir Ris MRT to "near" for the same reason. A walk claim without a figure goes against the static-rules lesson "walk minutes only when a source gives them". The R2-C chip becomes `PASIR RIS BEACH / NEARBY`.
3. **R2-B without the official plan: don't run it in this wave.** The fallback would put an invented layout under the title "3-BEDROOM DELUXE · 872 SQFT", which implies it's the real unit plan (misleading even with the "illustrative" label). It would also have no building image (the static rules need a plan **and** a real building image; Flag 14). R2-B goes in wave 2, once the official plan (and render) rights clear (S7). If the user still wants it now, the only acceptable form is: fallback headline "3-Bedroom EC Layouts From 872 sqft", the plan title "3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE" with no unit name or size on the sheet, **no price tag on the plan**, and the user accepting the missing building image in chat.

### Fixes (copywriter, 2 swaps)
1. Replace every "$1.54M*" with "$1.542M*" in R2-A, R2-B and R2-C: headlines, the Meta headline, price blocks, the price tag and primary text. Keep "$1.54M" only as the QA-confirmed alternative in open item 1.
2. Replace every "Pasir Ris Beach is a short walk away" / "A SHORT WALK" with "Pasir Ris Beach nearby" / "NEARBY": the R2-A subhead is already OK, and the R2-A, R2-B and R2-C primary text and the R2-C chip need the swap.

### Gates still open (unchanged)
- S3 CEA authorisation (**R2-A Blocked if GoAhead isn't authorised**). S4 stock check within 48 h (if the Deluxe 872 sells out, the whole set changes). S7 rights for the render, plan and e-brochure. E1 EC rules. DPS vs normal-scheme confirmation on the printed price. Image generation still needs the user's go-ahead and a cost estimate.

### Re-review
- [x] Fixes 1–2 confirmed on 2026-11-07 (Rev 2.1, see below)

---

## Copy Rev 2.1 + design-prompts.md "Revision 2 — 3-angle set" (R2-A, R2-B, R2-C) — 2026-11-07

Verdict: **Approved for draft images** (free ChatGPT/Gemini, to Notion as "Terri approval needed"). Not a launch approval.

Checked against: copy-brief.md Rev 2.1, design-prompts.md Revision 2 (all 3 prompts plus the 9:16 lines and flags), my 2026-11-07 Revise, the static rules. Live Meta data: none.

- **Copy swaps: done.** "$1.542M*" is used everywhere (headlines, price blocks, primary text, Meta headlines). The beach is "nearby", including the chip. R2-B is on the illustrative fallback: headline "3-Bedroom EC Layouts From 872 sqft", the plan title "3-BEDROOM LAYOUT · ILLUSTRATIVE, NOT TO SCALE", no unit name, sqft or price on the sheet, and the old official-plan headline retired.
- **R2-B in the set:** this follows the user's standing rule (the floor-plan ad is always one of the 3). I record it as the user's decision to accept a plan ad without a building image (static-rules deviation, Flag 14). It's fine for drafts. Terri's approval in Notion covers it.
- **Text fidelity:** every quoted on-image string in the 3 prompts matches Rev 2.1 word for word (eyebrow, lockup, price blocks, subheads, tiles, chips, plan labels, CTA, image labels). The fine-print wording is the copy's, split into lines only. The R2-B fine print correctly drops the price line, because there's no on-image price.
- **Compliance:** only R2-A names the project. B and C are blind. No unit counts, % sold, MOP/DPS, psf, discount, walk minutes, district codes, schools, developer names, "Loyang" or real rail colours. The Cross Island Line is hedged. "EC eligibility conditions apply." leads every fine print. Image labels are correct ("not the actual development" on generic shoreline/park; no AI tower). [DATE] stays literal. A CEA strip is reserved on all 3. The water is grey-green (CC6).
- **Distinct:** split photo + sea-blue panel / pale blueprint sheet / green-and-yellow swing-tag. The palettes, type and visuals all differ; only the red eyebrow and the CTA wording repeat.

### Notes (non-blocking)
- The prompts set the fine print at 13–14 px at 1080 wide. That's fine for drafts, but in the final Canva typeset use **18 px or more** (4:5) so it's readable in feed. Proof `$1.542M*` character by character (designer Flag 2).

### Still open before any launch (unchanged)
- S3 CEA authorisation (R2-A Blocked if GoAhead isn't authorised). S4 Deluxe 872 stock within 48 h, plus the price re-check at [DATE] (normal scheme, not DPS). S7 e-brochure/render rights. E1 EC rules. QA, then the user's pre-launch approval.
