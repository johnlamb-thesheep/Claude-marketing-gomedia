# Performance Review — Arcady

Copied from campaigns/2026-11-new-launch-projects/perf-review.md on 2026-11-07 when projects moved to their own folders. New reviews go at the bottom.

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

