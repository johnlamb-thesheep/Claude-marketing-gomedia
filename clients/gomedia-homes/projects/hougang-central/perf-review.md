# Performance Review — Hougang Central

Copied from campaigns/2026-11-new-launch-projects/perf-review.md on 2026-11-07 when projects moved to their own folders. New reviews go at the bottom.

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

