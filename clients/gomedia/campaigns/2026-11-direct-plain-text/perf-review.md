# Performance Review — 2026-11 Direct / Plain-text statics (gomedia)

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## Researcher — research.md — 2026-11-05

Verdict: **Approved** (with copywriter notes below; none of them block the next stage)

Checked against: CLAUDE.md, brand.md, learnings.md, brief.md (user-approved 2026-11-05), live Meta data: none (not needed for this stage, per lead's instruction)

### What passed
- Sources cited throughout (Ad Library IDs, gomedia.sg pages, NN/g/Wikipedia). The format section openly says no practitioner source was fetched and marks the playbook formats as hypotheses. Good.
- Observations kept separate from interpretations.
- Relevant to the ICP (SG property agents). Housing special ad category does not apply here: this is B2B, selling to agents, not housing to consumers.
- Unsafe claims correctly flagged: "guarantee", agency-naming testimonials, income claims, unconfirmed "200+ agents / 7,000+ appointments", product names.

### Issues (copywriter must follow; owner: copywriter)
1. **Too many variants for a readable test.** The seller Direct ad got ~17 leads in 90 days. Twelve variants split that volume to nothing, and no ad gets enough data to be judged. → Write a **first wave of 4 seller variants + 1 buyer twin**, one change per variant against the control:
   - V1 (hook swap): Angle 1
   - V3 (per-lead maths) **or** V4 (crossed-out contrast), pick one: Angle 2
   - V5 (plain question hook): Angle 3
   - V2 (single big "10"): design-only test of the plain shell
   - V12 buyer twin: secondary set
   Write the rest (V7, V8, V10) as a reserve for fatigue replacement. Don't add them to wave 1.
2. **Hold V6, V9 and V11.** V6 uses towns that aren't confirmed. V11 uses proof that isn't confirmed. V9 fakes a chat UI, which is a policy risk and could suggest WhatsApp automation. Only write them if the client confirms the facts (research open items 1–2).
3. **V4 says "no guarantee"**, which implies our offer IS guaranteed. Brand.md §5 only allows "guaranteed" with a T&C reference. → Use "~~$2,000/month in agency fees~~" (or similar) with no guarantee wording. Don't name an agency.
4. **V3 must say "from $50 a lead"**, never a flat "$50". Keep "[from $500/month]" verbatim somewhere in the ad.
5. **V1 hook "Still farming for listings?"** is close to the "Which area do you farm?" line the brief bans as cheesy. → Use a plain, factual hook instead, e.g. "Need more seller listings?" or "Seller leads for property agents".
6. **Eyebrow conflict.** Keep the reference's plain black "Property agents 👋" line in every plain variant. Do NOT add the red all-caps "PROPERTY AGENT" eyebrow from brand.md §5a. It makes the post look designed, and the winning ad doesn't have it. Flag this to the user at the approval gate because it departs from brand.md.
7. **Towns:** use only "Tampines, Bishan, Toa Payoh, Queenstown + 35 more".
8. **Primary text** should be as plain as the image, with the offer and price in the first ~125 characters so they show before mobile truncation. Keep "verified" because it's already live, but don't explain how verification works until brand.md §4 is filled.
9. **Formats:** 4:5 for all wave-1 variants. Also make 9:16 versions of the same ones, with text kept inside the centre safe zone, so Stories/Reels don't crop.

### Notes for launch (for the user / later stages, not copywriter)
- Add wave 1 as new ads **inside the existing seller Direct ad set**, alongside the control. Don't create new ad sets, so the volume stays together.
- The KPI is CPL only because there's still no CRM qualified-lead feedback (learnings.md). Results will show which ads are cheapest, not which bring the best leads. Get sales feedback before scaling a winner.

### Not verified
- The reference image `inputs/winning-ads/2026-seller-plain-direct-REFERENCE.png` and the NOTES file were not opened in this review. The 5-line structure is taken from research.md and brief.md.
- Ad Library gave headlines only, so competitors' body copy and creative were not checked.
- No live account data was pulled, so the control's current frequency and fatigue are unknown.

### Re-review
- [ ] Fixes confirmed on [date] (check copy.md against issues 1–9 at the copywriter sign-off)

---

## Copywriter — copy.md — 2026-11-05

Verdict: **Approved** (notes below go to the static-designer; none block the next stage)

Checked against: CLAUDE.md, brand.md, learnings.md, brief.md, research.md, my researcher-stage issues 1–9 above, copywriter-stage checklist. Live Meta data: none (not needed, per lead's instruction).

### Researcher-stage issues 1–9: status
1. Wave 1 = V1, V2, V3, V5 + V12 buyer twin; V4, V7, V8, V10 in reserve. **Done.** V3 over V4 is well argued from learnings.md (Before & After lost on ISA, was no better on seller).
2. V6, V9, V11 held. **Done.**
3. V4 has no "guarantee" and no agency name. **Done.**
4. "from $50 a lead" and "from $500/month" verbatim. **Done.**
5. V1 hook is "Need more seller listings?". **Done.**
6. Plain "Property agents 👋", no red eyebrow. **Done** in V2/V3/V5/V4/V7/V8. V1 and V10 replace line 1 with the hook, which is the point of a hook-swap test, so accepted (see note 1). Flagged for the user gate.
7. Towns limited to the approved list. **Done.**
8. Offer + price inside first ~125 characters of every primary text; "verified" kept, not explained. **Done.**
9. 4:5 + 9:16 for wave 1 with centre safe zone. **Done** (spec stated; designer must execute).

### Copywriter checklist
- Variants map to brief angles 1–3: yes. Hooks land on line 1: yes. Variants are really distinct (hook, number size, maths, question): yes.
- Objection "worth it / are leads real?" answered by fixed number, fixed price, "verified", real towns: yes, as far as the unconfirmed proof allows.
- No banned items (LeadX, guarantee, agency names, replacement/WhatsApp boilerplate, cheesy farm line): none found.
- Housing special ad category: not applicable (B2B, targeting agents, incl. the buyer twin).

### Notes for the static-designer / launch (not a Revise)
1. **V1 and V10 lose the audience call-out.** Fine for the test, but if V1 wins, the next round should try "Property agents 👋" + the V1 hook to see whether the call-out matters.
2. **Single-variable is not clean in V2 and V5.** They change their main element AND drop the towns line. Read their results as "package vs control", not as a pure test of the big 10 or the question hook. Only V1 and V3 are true one-change tests. Record this in results.md.
3. **CTA line on the image:** use the exact CTA wording the control image uses, so the image and the Lead Form button don't conflict. If the control says "Message us to start 👇" on a Lead Form ad, keep it as is (it's the proven version) and don't change it in only some variants.
4. **V4 (reserve):** brand.md §1 gives agency fees as S$1,000–2,000/month. Before using V4, consider "up to $2,000/month" or confirm $2,000 with the client.
5. **V2 "10":** keep it red and huge but in the same plain font. No outline, shadow or badge, or it starts to look designed.
6. **9:16:** keep all 5 lines in the middle ~1080×1420 area. Nothing in the top ~14% or bottom ~20%.

### Not verified
- REFERENCE.png and NOTES were not opened; the control's exact wording (line 1, CTA line) is taken on the copywriter's word.
- CPL KPI still has no CRM lead-quality feedback (learnings.md). Winners are "cheapest", not "best", until sales feedback arrives.

### Re-review
- [x] Researcher-stage issues 1–9 confirmed addressed in copy.md on 2026-11-05.

---

## Static-designer — creative-spec.md + renders/ (20 PNGs) — 2026-11-05

Verdict: **Approved** (draft renders are fine for the user's review. The notes below are launch choices, not a Revise.)

Checked against: CLAUDE.md, brand.md, learnings.md, brief.md, copy.md, creative-spec.md, my copywriter-stage notes 1–6, the control `inputs/winning-ads/2026-seller-plain-direct-REFERENCE.png`. I opened all ten 4:5 renders and spot-checked V1, V2 and D2 in 9:16. No ad-account reads.

### What passed
- V1, V3 and V12 match the control's tokens, sizes, wrap and spacing. V1 differs from the control only in line 1, and V3 only in line 4. These are clean one-change tests.
- "from $500/month" is never split. There is no LeadX, guarantee, agency name, eyebrow, or replacement/WhatsApp line. Every render has one red element and one yellow element at most.
- The render-QA deviations are acceptable. V12's red line at 78px with a 2-line break fits inside the box width. V5's black offer as "10 verified seller leads / a month" reads cleanly. In D3 the price on its own line under the red, with the towns line at 60px over 2 lines, still reads as one sentence.
- 9:16: every line in the spot-checked versions sits between y≈300 and y≈1240, clear of the Stories top bar and the Reels caption/CTA zone. The empty lower third is intended.
- V2: the "10" is plain Arial and has no badge or outline (note 5). It is the strongest thumb-stop in the set.

### Notes (owner: user at the launch gate, unless stated)
1. **D2 header (GoMedia / Just now / globe):** the image shows a fake post header under the real page header ("LeadX by GoMedia"), so it reads as a post inside a post. That could be judged misleading UI, and the name doesn't match the page. Hold D2. If it is used later, render it with no header (owner: static-designer).
2. **D1 timestamp** "5 November 2026 at 9:41 AM" will look stale within weeks, and it is a mild fake-UI cue. Hold it. If it is used later, drop the date or keep it current.
3. **D4 (Ink Free):** the thin strokes read noticeably weaker at feed size than Arial Black, and the font licence is still open. Hold it.
4. **D5** removes red text and the yellow box, so it tests whether colour matters at all. It is a useful learning, but it carries the most risk of a CPL drop. Run it in wave 2.
5. **V5 and V1 are both question hooks.** Running both splits the same lesson across two ads. Run V1 first because it is the clean test, and keep V5 as the first replacement.
6. Volume is unchanged: about 17 seller leads in 90 days. At most 4 new ads next to the control, otherwise nothing gets read. Judge a variant only after it has roughly the control's spend per lead × 3 (about S$70) with 0 leads, or about 5+ leads. The fatigue, kill and scale call goes to `ad-creative-fatigue` at results stage.

### Recommended launch set
- **Seller Direct ad set (existing, next to the control):** V1 (hook), V3 (per-lead maths), V2 (big 10, design package), D3 (marker, the closest design variant to the control, so it gives the safest read on design).
- **Buyer Direct ad set (existing):** V12 only.
- **Hold / wave 2:** V5 (first replacement), D5, D1. **Hold pending fixes:** D2 (no-header re-render), D4 (licence + legibility).

### Not verified
- Only 3 of the 10 9:16 files were opened. The other 7 are assumed to follow the same container.
- Pixel measurements are visual estimates, not measured.
- CPL is still the only KPI because there is no CRM lead-quality feedback yet (learnings.md).

### Re-review
- [x] Copywriter-stage notes 1–6 confirmed in the renders on 2026-11-05 (note 1 V1 call-out, note 2 V2/V5 package read: record in results.md).

---

## Copywriter + static-designer — copy.md (BA1–BA3) + creative-spec.md (BA section) + renders/BA* — 2026-11-05

Verdict: **Revise** (minor, static-designer only. Copy is Approved. The angle is user-approved, relayed by the lead, so flag BA-1 is closed for this review.)

Checked against: CLAUDE.md, brand.md (§3, §4, §5, §5a), learnings.md, copy.md BA section, creative-spec.md BA section, my earlier sections above. I opened BA1_4x5, BA2_4x5, BA3_4x5 and BA1_9x16. No ad-account reads.

### What passed
- Every item the user asked for is present: $2,000/month vs from $500/month, 10 guaranteed buyer leads*, WhatsApp automation & follow up, Replacement available, pay per lead not clicks, 80+ projects plus the 4 names. No LeadX, no agency brand names. "*T&Cs apply" is on every render.
- The offer and price sit in the first ~125 characters of every primary text.
- The 3 executions are really distinct: a full split (BA1), a plain Direct-look headline-led card (BA2), and projects as the hero (BA3).
- Housing special ad category does not apply (B2B, targeting agents).

### Issues (owner: static-designer)
1. **BA1_9x16:** the CTA pill (y about 1450–1555) and "*T&Cs apply" (y about 1585) sit in the bottom ~20% Reels caption/CTA zone (below y 1536). Move the content block up so the CTA ends at about y 1500 or less, or cut the 9:16 project chips to 2 names. Check BA2_9x16 and BA3_9x16 against the same rule; I did not open them.
2. **BA3 "+80 more":** with 4 names listed, this says 84+ and doesn't match the "80+" header. Change it to "& 76 more" or "+ more".
3. **BA1/BA3 price:** "from" is small and outside the yellow box, so at feed size it reads as a flat "$500". Make "from" at least about 50% of the "$500" height, or put it inside the box as BA2 does.

### Launch conditions (owner: user at the launch gate)
- **"Guaranteed":** brand.md §5 allows it only with a T&C reference, and the T&C document is still TODO (§4). The client must supply real T&Cs, linked or shown in the lead form, before any BA ad goes live. Same for "Replacement available" and "80+ projects" (§4 TODO). They are used because the user supplied them, but they need a source on file.
- **Learnings risk:** Before & After lost on ISA (S$36.41 vs S$24.28) and tied on seller (learnings.md 2026-11-03). Buyer Direct is the cheapest line (S$17.77, n=15 over 90 days). Volume is thin, so add at most 2 BA ads next to V12 and nothing else in that ad set this wave.

### Recommended for the buyer Direct ad set (next to V12)
- **BA2 first.** It keeps the plain white look that has won 3 out of 3 times and adds the new "pay per lead" message. If it loses, we know the message lost, not the design. It is also the most readable at feed size.
- **BA1 second.** It is the split-screen the user asked for, the cleanest test of the format, and the strongest thumb-stop. It is text-dense (10 bullets + chips), which is the main risk.
- **BA3: reserve.** It overlaps BA1, and its project list will date quickly.
- Read the results as package vs package, not as one variable. Use the same judging bar as the seller set: about 3× the control's CPL in spend with 0 leads, or about 5+ leads. The kill/scale call goes to `ad-creative-fatigue`. CPL is still the only KPI because there is no CRM qualified-lead data.

### Not verified
- BA2_9x16 and BA3_9x16 were not opened. Pixel positions are visual estimates.
- I did not check whether the buyer ad set is a Lead Form or WhatsApp, so the CTA button must match V12's.
- The user approved the angle through the lead, not in this thread. brief.md still lacks Angle 4.

### Re-review
- [ ] Issues 1–3 fixed in renders on [date]

## Re-review: static-designer, renders/BA* (fixes for BA issues 1–3), 2026-11-05

Verdict: **Approved** (BA renders. Copy was already Approved.)

Checked against: my BA Revise section above (issues 1–3). I opened BA1_4x5, BA1_9x16, BA3_4x5, and also BA2_9x16 and BA3_9x16, which I had not opened last time. No ad-account reads. Pixel positions are visual estimates.

1. **BA1_9x16 Reels zone: fixed.** The layout now sits at about y 300–1185. The CTA ends at about y 1150 and the T&Cs at about y 1185, well above y 1536. BA2_9x16 (T&Cs about y 1250) and BA3_9x16 (CTA ends about y 1480, T&Cs about y 1505) also clear the zone.
2. **BA3 "+80 more": fixed.** It now reads "80+ projects in total" and matches the header.
3. **"from" size: fixed.** In BA1 (4:5 and 9:16) and BA3 (4:5 and 9:16), "from" is bold, about 55% of the "$500" height, and on the same line. At feed size it reads as "from $500".

Non-blocking notes:
- The 0.72 scale makes the BA1_9x16 bullets and chips small (chip text is about 16px tall on a 1080 canvas), and about 300px top and bottom is empty. It is readable, but if there is a next pass, scale to about 0.8 or cut the chips to 2 so the type is bigger. It still has to stay above y 1536.
- The earlier carry-overs still stand: real T&Cs plus a source for "Replacement available" and "80+ projects" are needed before launch. Add at most 2 BA ads (BA2 first, then BA1), next to V12. BA3 is the reserve.
