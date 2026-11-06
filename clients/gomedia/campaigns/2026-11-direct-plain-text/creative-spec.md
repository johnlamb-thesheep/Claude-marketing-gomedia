# Creative Spec — 2026-11 Direct / Plain-text statics (gomedia)

Source: copy.md (marked **Approved** in perf-review.md, 2026-11-05). Copywriter-stage notes 1–6 from perf-review.md are applied below.
Rules: `gomedia-static-ad-rules`, section "Format DIRECT". It overrides the house eyebrow and palette rules for this format.
Reference: `clients/gomedia/inputs/winning-ads/2026-seller-plain-direct-REFERENCE.png` (control). Source component: `SellerStaticPlain` / `SellerStaticPlainStory` in `C:/Users/asus/Documents/Claude Video Editing/my-video/src/LeadX/SellerStatics.tsx`.

## Shared build spec (applies to every entry unless the entry says otherwise)

**Generator:** Remotion `<Still>` renders in the existing `my-video` project. **Cost: S$0** (local render, no paid API). No product images are used. Nothing is fetched from the web.

**Implementation:** generalise the existing `PlainText` component into a props-driven `DirectPlain` (array of lines + per-line style + `story` flag). Leave `SellerStaticPlain` untouched so the control can still be re-rendered exactly. Register one `<Still>` per entry below: `Direct<ID>` at 1080×1350 and `Direct<ID>Story` at 1080×1920.
Output: `clients/gomedia/campaigns/2026-11-direct-plain-text/renders/<ID>_4x5.png` and `<ID>_9x16.png`.

**Tokens (copied from the source, do not change):**
| Token | Value |
|---|---|
| Background | `#FFFFFF` |
| Font | `Arial, Helvetica, sans-serif` (weight 900 resolves to Arial Black on this machine, which is what the reference shows) |
| Ink | `#050505` |
| Red | `#E10600` |
| Yellow box | `#FFE45C`, `padding: 6px 30px`, `borderRadius: 16`, `whiteSpace: nowrap`, `letterSpacing: -1`, `display: inline-block` |
| Base text | 66px, weight 700, lineHeight 1.3, centred |
| Red offer | 90px, weight 900, lineHeight 1.12 |
| Price in box | 92px, weight 900 |
| Specificity line | 66px, weight 400 |
| Emoji | Native colour emoji, same renderer as the reference (no images) |

**Container, 4:5 (1080×1350):** absolute, `top 60 / bottom 60 / left 70 / right 70` (940px wide), flex column, `justifyContent: center`, so the block centres on y=675.
**Container, 9:16 (1080×1920):** `top 270 / bottom 672 / left 70 / right 70`, so the block centres on y=759.
- This **differs from the source story version** (250/250). The source centres on y=960, which puts the towns line and CTA inside Reels' bottom ~35% caption/button area. 270 top clears Stories' top 14%. 672 bottom clears the Reels bottom 35%, so it also clears perf's 20% Stories rule. Font sizes are the same as 4:5 (as in the source story version).
- **Check for every 9:16:** no ink above y=270 or below y=1248.

**Safe margins (~100px).** In the reference, the visible ink sits 92px (yellow box) and 97px (towns line) from the sides, inside a 70px padded container. To keep the V-set an exact one-change test against the control, **V1–V12 keep the source values**. The rule for them: no line or box may be wider than the reference yellow box (896px, x 92–988). If a line measures wider, it must wrap. Do not shrink the font. **D1–D5 use a strict 100px side margin** (ink within x 100–980), with sizes set to fit. Top and bottom: all 4:5 blocks start at y ≥ 200 and end by y ≤ 1150.

**Render QA before handing to qa:** (1) every line wraps where this spec says it does; (2) no ink outside the margins above; (3) "from $500/month" is never split across lines; (4) no outline, shadow, logo, eyebrow, button or extra colour on any V-entry.

Vertical sizes below are line-box estimates (66×1.3 = 86 per base line, 90×1.12 = 101 per red line, yellow box ≈ 132). They are there to check fit. Flex centring places the block. Do not hard-code y positions.

---

## Concept V1: hook swap (wave 1)
- **Copy ID used:** V1
- **Angle:** 1, Direct offer (only line 1 changes vs the control)
- **Format:** static
- **Aspect ratios:** 4:5 1080×1350, 9:16 1080×1920
- **Visual direction:** Identical to the control in every way except line 1. Plain Facebook text post look.
- **Product images used:** none
- **Text on image (top to bottom):**
  1. `Need more seller listings?`: 66px / 700 / ink. One line (~810px). No emoji (copy has none).
  2. `10 verified seller leads a month`: 90px / 900 / red, marginTop 48. Wraps to 2 lines exactly as the reference: "10 verified seller" / "leads a month".
  3. `from $500/month`: yellow box, 92px / 900 / ink, marginTop 30.
  4. `Tampines, Bishan, Toa Payoh, Queenstown + 35 more`: 66px / 400 / ink, marginTop 48. 2 lines: "Tampines, Bishan, Toa Payoh," / "Queenstown + 35 more".
  5. `Message us to start 👇`: 66px / 700 / ink, marginTop 48, nowrap.
- **Fit:** block ≈ 852px. 4:5 ≈ y 249–1101. 9:16 ≈ y 333–1185.
- **Generator + estimated cost:** Remotion `DirectV1` / `DirectV1Story`, S$0

## Concept V2: big "10" (wave 1, design test of the shell)
- **Copy ID used:** V2
- **Angle:** 1, Direct offer (design). Read results as "package vs control": the towns line is dropped too (perf note 2).
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** The control shell with one dominant red "10". It uses the same Arial at weight 900 as every other red line: no outline, shadow, badge or circle (perf note 5). It must still read as a typed post, just with one very big word.
- **Product images used:** none
- **Text on image:**
  1. `Property agents 👋`: 66px / 700 / ink.
  2. `10`: **480px / 900 / red, lineHeight 0.9** (box 432px), marginTop 24. Glyph ≈ 635px wide × 345px tall, so it covers about 40% of the text block.
  3. `verified seller leads a month`: 66px / 700 / ink, marginTop 12. One line (~890px). If it wraps in render, set 62px. Do not let it break into 2 lines.
  4. `from $500/month`: yellow box, 92px / 900, marginTop 30.
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 936px. 4:5 ≈ y 207–1143. 9:16 ≈ y 291–1227 (the tallest entry, still inside 270–1248).
- **Generator + estimated cost:** Remotion `DirectV2` / `DirectV2Story`, S$0

## Concept V3: per-lead maths (wave 1)
- **Copy ID used:** V3
- **Angle:** 2, Per-lead maths (true one-change test: the towns line is swapped for the maths line)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** Control layout. Line 4 reads like the next line of a sum under the yellow box. Plain bold black, no table or receipt styling.
- **Product images used:** none
- **Text on image:**
  1. `Property agents 👋`: 66px / 700 / ink.
  2. `10 verified seller leads a month`: 90px / 900 / red, marginTop 48, 2 lines as the reference.
  3. `from $500/month`: yellow box, 92px / 900, marginTop 30.
  4. `= from $50 a lead`: 66px / 700 / ink, marginTop 48. One line. "from" is mandatory (perf issue 4).
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 766px. 4:5 ≈ y 292–1058. 9:16 ≈ y 376–1142.
- **Generator + estimated cost:** Remotion `DirectV3` / `DirectV3Story`, S$0

## Concept V5: question hook (wave 1)
- **Copy ID used:** V5
- **Angle:** 3, Plain question hook. Package vs control: the towns line is dropped and the red moves to the question (perf note 2).
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** Control layout. The red slot carries the question and the offer drops to bold black.
- **Product images used:** none
- **Text on image:**
  1. `Property agents 👋`: 66px / 700 / ink.
  2. `No new listings this month?`: 90px / 900 / red, marginTop 48. 2 lines: "No new listings" / "this month?".
  3. `10 verified seller leads a month`: 66px / 700 / ink, marginTop 40. 2 lines: "10 verified seller leads" / "a month" (~984px on one line, which is too wide, so let it wrap).
  4. `from $500/month`: yellow box, 92px / 900, marginTop 30.
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 834px. 4:5 ≈ y 258–1092. 9:16 ≈ y 342–1176.
- **Generator + estimated cost:** Remotion `DirectV5` / `DirectV5Story`, S$0

## Concept V12: buyer twin (wave 1, secondary set)
- **Copy ID used:** V12
- **Angle:** 1, Direct offer (buyer). This goes in the buyer Direct ad set, not the seller one.
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** Exact control layout with the buyer offer.
- **Product images used:** none
- **Text on image:**
  1. `New launch agents 👋`: 66px / 700 / ink.
  2. `10 verified project buyer leads a month`: 90px / 900 / red, marginTop 48. 2 lines: "10 verified project" / "buyer leads a month" (each ~865px, inside 896).
  3. `from $500/month`: yellow box, 92px / 900, marginTop 30.
  4. `New launch condos & ECs`: 66px / 400 / ink, marginTop 48. One line.
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 766px. 4:5 ≈ y 292–1058. 9:16 ≈ y 376–1142.
- **Generator + estimated cost:** Remotion `DirectV12` / `DirectV12Story`, S$0

---

# Design-variation set (requested by the user): same proven copy, new container

Every D-entry uses the **control copy, word for word**. Only the container or look changes, so the design is the only variable:
`Property agents 👋` / `10 verified seller leads a month` / `from $500/month` / `Tampines, Bishan, Toa Payoh, Queenstown + 35 more` / `Message us to start 👇`

Max 3 emphasis levels still apply (black, one red element, one yellow element). D5 drops to 2. D-entries use the strict 100px side margin (ink within x 100–980). 9:16 versions use the same 270/672 container rule as above, with the same sizes.

## Concept D1: notes-app (iOS Notes look)
- **Copy ID used:** Control copy (reference lines)
- **Angle:** 1, Direct offer (design: personal-note container)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** Looks like a screenshot of a note someone typed. White page, **left-aligned**, top-weighted like a real note. **No app chrome:** no status bar, no "< Notes" back button, no toolbar or share icons, no fake buttons (Meta non-functional-UI policy, research.md). The only "app" cue is a small grey date line, plus the bold first line acting as the note title.
- **Product images used:** none
- **Text on image (left edge x=100, max width 880):**
  - Date line: `5 November 2026 at 9:41 AM`: 30px / 400 / `#8E8E93`, **centred**, top y=110 (9:16: y=300). This is the iOS Notes date header. It is not ad copy.
  1. `Property agents 👋`: 72px / 700 / ink, lineHeight 1.25. Block top y=230 (9:16: y=400).
  2. `10 verified seller leads a month`: 84px / 900 / red, lineHeight 1.12, marginTop 40, 2 lines.
  3. `from $500/month`: 84px / 900 / ink on a yellow `#FFE45C` **text highlight**, `padding 4px 16px`, `borderRadius 6` (a Notes highlight, flatter than the control's rounded box), ≈ 795px wide, marginTop 28.
  4. Towns: 60px / 400 / ink, lineHeight 1.35, marginTop 40, 2 lines ("Tampines, Bishan, Toa Payoh," ≈ 805px).
  5. `Message us to start 👇`: 62px / 700 / ink, marginTop 40.
- **Fit:** block ≈ 790px. 4:5 y 230–1020 (white space below, as in a real note). 9:16 y 400–1190.
- **Generator + estimated cost:** Remotion `DirectD1` / `DirectD1Story`, S$0

## Concept D2: plain Facebook / Threads text-post card
- **Copy ID used:** Control copy
- **Angle:** 1, Direct offer (design: post-in-a-feed container)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** A plain text post card sitting on the light-grey feed background. Left-aligned post text, as people type it. **No like / comment / share bar, no reaction counts, no "Follow" button.** Fake engagement or buttons would be a policy risk and could read as fake social proof.
- **Product images used:** none. Avatar is a plain grey circle, no logo or photo.
- **Layout:**
  - Canvas `#F0F2F5`. Card: white, x 80–1000 (920 wide), `borderRadius 24`, `1px solid #DADDE1`, no drop shadow, padding 48. Card vertically centred (4:5 ≈ y 197–1153; 9:16 centred on y=759).
  - Header row: 84px circle `#E4E6EB`, gap 20, then two lines: `GoMedia` 38px / 700 / `#050505` and `Just now · 🌐` 30px / 400 / `#65676B`. Header to body gap 40.
- **Text on image (inside card, x 128–952, left-aligned):**
  1. `Property agents 👋`: 60px / 700 / ink.
  2. `10 verified seller leads a month`: 80px / 900 / red, lineHeight 1.12, marginTop 36, 2 lines.
  3. `from $500/month`: yellow box, 80px / 900, `padding 5px 24px`, `borderRadius 14` (≈ 775px), marginTop 24.
  4. Towns: 56px / 400 / ink, lineHeight 1.35, marginTop 36, 2 lines.
  5. `Message us to start 👇`: 60px / 700 / ink, marginTop 36.
- **Fit:** card ≈ 956px tall. In 9:16 that is ≈ y 281–1237, inside 270–1248.
- **Flag:** the header name. The real Meta page is "LeadX by GoMedia", but "LeadX" is banned in creative, so this spec uses `GoMedia`. The user can also choose **no header** (body text only in the card) if a second name above the real page name feels like fake UI. Decide at approval.
- **Generator + estimated cost:** Remotion `DirectD2` / `DirectD2Story`, S$0

## Concept D3: yellow highlighter-marker sentence
- **Copy ID used:** Control copy
- **Angle:** 1, Direct offer (design: marker swipe replaces the box, offer and price read as one sentence)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** Control layout, centred. Two changes only: (a) lines 2 and 3 are set as **one continuous sentence block** at one size, with no gap between them; (b) the solid yellow box becomes a **hand-swiped marker stroke** behind "from $500/month". It should look like someone highlighted a printed sentence.
- **Product images used:** none
- **Text on image:**
  1. `Property agents 👋`: 66px / 700 / ink.
  2. + 3. One paragraph, 88px / 900, lineHeight 1.15, marginTop 48: `10 verified seller leads a month` in red, then a space, then `from $500/month` in ink inside a nowrap span. Expected wrap: "10 verified seller" / "leads a month" / "from $500/month".
     - Marker: inline SVG behind the price span. Irregular polygon covering the **lower 60%** of the glyph box (from 38% to 98% of line height). It overhangs the text by 14px on the left and right, is skewed -2°, and has slightly ragged, uneven ends. Fill `#FFE45C`, `mixBlendMode: multiply`. The price is ≈ 800px wide at 88px, ≈ 828px with the overhang.
  4. Towns: 66px / 400 / ink, marginTop 48, 2 lines.
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 800px. 4:5 ≈ y 275–1075. 9:16 ≈ y 359–1159.
- **Generator + estimated cost:** Remotion `DirectD3` / `DirectD3Story`, S$0

## Concept D4: handwritten-style on white
- **Copy ID used:** Control copy
- **Angle:** 1, Direct offer (design: typeface only)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Font availability check (done):** **Ink Free** is installed locally at `C:/Windows/Fonts/Inkfree.ttf` (a Windows system font). It is a free marker-handwriting face, so D4 is **in**. It has one weight only, so **do not apply synthetic bold** (`fontWeight: 400`, `fontSynthesis: none`). Hierarchy comes from size and colour alone.
  - Also local but not chosen: Segoe Print, MV Boli, Comic Sans (too "kids' party").
  - Alternatives: Caveat, Patrick Hand and Kalam are listed in the installed `@remotion/google-fonts` package, but they download from Google at render time, so they are **not** local. Use them only if the user OKs that download.
  - Licence flag: Ink Free ships with Windows. Confirm the client is fine using a Windows system font in a paid ad, or swap to Caveat (OFL).
- **Visual direction:** Exactly the control layout, centred on white, with the same colours and the same solid yellow box. **Only the typeface changes** to Ink Free. Emoji fall back to the system colour emoji.
- **Product images used:** none
- **Text on image (ink within x 100–980):**
  1. `Property agents 👋`: 72px / ink.
  2. `10 verified seller leads a month`: 92px / red, lineHeight 1.12, marginTop 44, 2 lines.
  3. `from $500/month`: yellow box (`#FFE45C`, padding 6px 30px, radius 16), 96px / ink, marginTop 30.
  4. Towns: 64px / ink, marginTop 44, 2 lines.
  5. `Message us to start 👇`: 72px / ink, marginTop 44.
  - Glyph widths for Ink Free are not measured yet. During render, any line or box whose ink goes past x 100–980 drops in 4px steps until it fits. Red and price lines must stay at least 20px larger than the base lines.
- **Fit:** block ≈ 880px. 4:5 ≈ y 235–1115. 9:16 ≈ y 319–1199.
- **Generator + estimated cost:** Remotion `DirectD4` / `DirectD4Story`, S$0

## Concept D5: black text only + one red underline
- **Copy ID used:** Control copy
- **Angle:** 1, Direct offer (design: strip to the plainest possible post, 2 visual levels)
- **Format:** static
- **Aspect ratios:** 4:5, 9:16
- **Visual direction:** The control layout and sizes with **all text black**: no red text and no yellow box. The only accent is **one solid red underline** under the price, which research.md calls the sharpest differentiator. It tests whether the plainness alone does the work.
- **Product images used:** none
- **Text on image:**
  1. `Property agents 👋`: 66px / 700 / ink.
  2. `10 verified seller leads a month`: 90px / 900 / **ink**, lineHeight 1.12, marginTop 48, 2 lines.
  3. `from $500/month`: 92px / 900 / ink, `letterSpacing -1`, nowrap, marginTop 30. Red underline: `textDecoration underline`, `textDecorationColor #E10600`, `textDecorationThickness 12px`, `textUnderlineOffset 14px` (straight, full text width ≈ 836px, x ≈ 122–958).
  4. Towns: 66px / 400 / ink, marginTop 48, 2 lines.
  5. `Message us to start 👇`: 66px / 700, marginTop 48.
- **Fit:** block ≈ 840px. 4:5 ≈ y 255–1095. 9:16 ≈ y 339–1179.
- **Generator + estimated cost:** Remotion `DirectD5` / `DirectD5Story`, S$0

---

## Summary
| ID | Set | Change vs control | Renders | Cost |
|---|---|---|---|---|
| V1 | Wave 1 (seller) | Line 1 hook | 4:5 + 9:16 | S$0 |
| V2 | Wave 1 (seller) | Giant red "10", towns dropped | 4:5 + 9:16 | S$0 |
| V3 | Wave 1 (seller) | Towns → "= from $50 a lead" | 4:5 + 9:16 | S$0 |
| V5 | Wave 1 (seller) | Red question hook, towns dropped | 4:5 + 9:16 | S$0 |
| V12 | Wave 1 (buyer) | Buyer offer + "New launch condos & ECs" | 4:5 + 9:16 | S$0 |
| D1–D5 | Design set (seller) | Container/look only, control copy | 4:5 + 9:16 each | S$0 |
Total: 20 PNGs, S$0. No paid generation, so no separate spend go-ahead is needed. Rendering still waits for the approval box below.

## Flags for the user at approval
1. **Eyebrow:** no red "PROPERTY AGENT" eyebrow anywhere. This departs from brand.md §5a. It follows the Format DIRECT rule and perf issue 6.
2. **9:16 container** moves the block up (270/672) compared with the source story version (250/250), so Reels captions and buttons don't cover the CTA.
3. **V-set side margins** stay at the reference's 92–97px so they match the control. D-set uses 100px.
4. **D2 header name** (`GoMedia` vs no header) and **D4 font licence** (Ink Free vs Caveat download) need a decision.
5. **CTA line** "Message us to start 👇" is kept in every entry, the same as the control (perf note 3). Use the same Meta button the control ad runs.
6. **D-set is a design test on top of wave 1.** Adding 5 more ads to the seller Direct ad set splits ~17 leads/90 days even thinner (perf issue 1). Suggest launching D1–D5 as a wave 2, or swapping in the 1–2 the user likes most.

---
## Approval

- [ ] Approved to generate on [date]
- Notes:

---

# Before/After set (buyer) — BA1–BA3 (added 2026-11-05, requested by the user in chat)
Copy: copy.md "Before/After (buyer) — BA1–BA3". Format reference: `inputs/ad-references/split-screen-before-after-explee-REFERENCE.webp` (layout idea only). Generator: Remotion (`my-video/src/LeadX/BeforeAfterStatics.tsx` + `beforeAfterCopy.ts`), ids `BuyerBA1–3` / `…Story`, cost S$0. Renders: `renders/BA*_4x5.png`, `renders/BA*_9x16.png`.
- **BA1: full split-screen.** Red left (#D7261E, ✕ badge, "$2,000/month", 5 ✕ pains) and mint right (#E3F6EA, ✓ badge, "from $500/month" with the price in a yellow box, 5 ✓ benefits, project chips). White header pill "New launch agents 👋" and black CTA pill "Message us to start 👇". "*T&Cs apply" sits under the CTA. In 9:16 the split fills the full height and the content sits at y 300–1600.
- **BA2: stacked, headline-led.** The plain Direct look. Headline "Pay per lead, not per click". A grey "Agency or DIY ads" card with "$2,000/month" struck through in red and 3 ✕ pains, then "With us", the yellow "from $500/month" box, 4 ✓ benefits and the CTA line.
- **BA3: projects as hero.** Headline "Buyer leads for 80+ new launch projects". A narrow red "Running ads yourself" card next to a wide mint card holding a white project list (4 names + "+80 more") and 3 ✓ benefits, then the CTA pill.
- **Flags:**
  - "Guaranteed" needs the client's T&Cs (brand.md §4 TODO).
  - WhatsApp automation and "Replacement available" are included because the user asked for them.
  - "80+ projects" comes from the user in chat.
  - No eyebrow, following the Direct-format rule.
