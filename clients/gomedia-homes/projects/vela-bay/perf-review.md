# Performance Review — Vela Bay

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 5 ads V1–V5) — 2026-11-07

Files reviewed: `research.md`, `ad-library-2026-11-07.md`, `copy-brief.md` (Rev 1), `design-prompts.md` (Rev 1). Shortened project flow chosen by the user (researcher → copywriter → static-designer → one performance review).

Checked against: CLAUDE.md, brand.md, learnings.md (incl. the 2026-11-06 price/unit-count rule), `gomedia-homes-static-ad-rules` (client copy rules, label refinement T10, copy lessons), the Coastal Cabana review (CC1–CC6, R2 rulings), the TEL station order (Marine Parade → Marine Terrace → Siglap → Bayshore = 3 stops). **Live Meta data: none** — the read-only Meta tools were not available in this session (see Account check).

**Verdict: Revise** (text fixes VB1–VB3 only). Research **Approved** (conditions below). Nothing Blocked. **V1 is conditionally Blocked if GoAhead is not CEA-authorised to market Vela Bay.**

### Account check (not verified)
- Meta read tools weren't exposed in this session, so I could not pull account 903306407477320 with the gomedia-homes filter. **Not verified.**
- Local signal, `dashboards/account-review.csv` (6 Nov 2026): "GoAhead Vela Bay / Chuan Grove" ran until Mar 2026 on an **agent** account (Edwin Wong, act 1815471795784000, not the client account). "GoMedia: Cold Lead Form (ELTA, Narra, Vela Bay)" (contains "gomedia") and "Jess Tan Vela Bay 4" (contains "jess") are **excluded by the client filter**. So Vela Bay is **not a cold project for GoAhead creative**, but I have no spend/lead/CPL figures. Before launch, run the read-only pull (ad name contains "vela") and check for old leads to re-contact first (the Coastal Cabana lesson).

### Research — Approved
- Stage (launched Apr 2026, balance units), price rule ($1.466M entry → price allowed), CTA (GET PRICE LIST & E-BROCHURE) and the UNVERIFIED list are correct. Walk minutes correctly refused; the sea-view % conflict correctly neutralised.
- Conditions: (a) the price is from an agent portal [NL], so QA confirms it on the developer list; (b) "no Vela Bay ads" is a search gap, partly closed by the Bayshore re-pull; (c) account history above supersedes "cold".

### Rule checks (all 5 ads, every string incl. fine print)
| Rule | Result |
|---|---|
| Only Direct names the condo | **Pass.** Only V1 has "Vela Bay"/SingHaiyi (primary text). V2–V5 carry no name, developer, entity or street. |
| Price ≈$1.5M / ≤$1.6M | **Pass.** $1,466,000 1BR+S → "$1.47M*" (rounded up, so "from" never understates). No other type's price appears. |
| No district codes / unit counts / % sold | **Pass.** No "D16", no counts, no "only X left". |
| Full MRT names | **Pass.** "Bayshore MRT", "Marine Parade MRT" everywhere, incl. the board rows. |
| Freehold wording | **N/A** (99-year leasehold; never called freehold). |
| MRT paired with amenities | **Pass.** |
| Fact sourcing (no UNVERIFIED printed) | **Pass**, except VB1 (label wording) and VB2 (V3 Headline B overstates which 3BR has a yard/shelter). |
| 5 ads differ | **Pass.** Sail split card / postcard / plan+photo / departure board / sun-disc poster; 5 palettes, no reuse. Message overlap is high (4 of 5 subheads carry "Bayshore MRT + East Coast Park"), which is acceptable because it's the #1 USP, but it means the test reads the *hook*, not the facts. |

### Rulings asked for
1. **"A short walk" to East Coast Park (copy Flag 8): allowed.** Unlike Coastal Cabana's beach, a source gives a walk time (Stacked: underpass near the station, ~2–3 min to the beach), and the station is ~40m from the towers. Keep "a short walk" on V1, V2, V4, V5. "Rooftop clubhouse" is sourced (Vela Club) — allowed.
2. **Real sqft on a generic plan (designer Flag 2): no.** Same as Coastal R2-B: an invented layout must not carry the real unit-type name and size. Fallback title becomes `3-BEDROOM LAYOUT · ILLUSTRATIVE` (VB3). The 1,033 sqft stays in the primary text and returns to the sheet only with the official plan.
3. **Floor-plan ad paired with a non-building photo (designer Flag 3): drafts OK; launch needs the user's OK in chat** (static-rules deviation, same as Coastal R2-B), or the official exterior render.
4. **V5 Headline B ("Next to Bayshore MRT, From $1.47M*"): don't run.** A bare price with no unit type reads as the project's general entry. Run Headline A.

### Exact text fixes (old → new)
| # | Where | Old | New |
|---|---|---|---|
| VB1 | V1 primary text, `copy-brief.md` (until an official render is used) | `Image sample / artist's impression only.` | `Image sample only, not the actual development.` |
| VB2 | V3 Headline B: `copy-brief.md` summary table + V3 table; `design-prompts.md` V3 bullet, full prompt (headline string) | `3-Bedroom With Wet Kitchen, Yard & Shelter` | `3-Bedroom Premium With Wet Kitchen, Yard & Shelter` (the standard 3BR has no yard/shelter per research §5) |
| VB3 | V3 fallback plan title: `design-prompts.md` V3 bullet + full prompt | `3-BEDROOM PREMIUM · 1,033 SQFT` | `3-BEDROOM LAYOUT · ILLUSTRATIVE` (restore the original with the official plan) |

### Likely CPL and fit
- Comparable data in learnings.md: Arcady/Hougang S$22–31 (live incumbents, deep stock); Amber House (~85% sold, launched 2025) ~S$68 on n=7. Vela Bay is ~77% sold, launched Apr 2026, OCR-east record psf.
- **Expect S$30–55 per lead** (low confidence). Price-led V1/V5 will be the cheapest leads but the worst stock fit: 6 × 1BR+S left vs 95 of 120 remaining units at 3BR Premium+ (from $2.83M). The form's budget/unit-type questions must route these leads to the 3BR Premium.
- **Ranking:** V1 Direct (named, price) → V3 3BR Premium plan (where the stock is) → V2 sea/need-led → V4 MRT board → V5 blind price.
- **Wave 1: V1, V3, V2. Wave 2: V4. Hold: V5** (duplicates V1's price on a nearly sold-out type). If the 1BR+S sells out, V1 runs Headline B (no price) and V5 is retired.

### Gates before launch (unchanged owners)
CEA authorisation (V1 Blocked if not) · developer-list price check ≤$1,470,000 within 48h, fill [DATE] · rights to the official render/3BR Premium plan · velabay.com.sg operator unconfirmed (don't link) · read-only account pull + old-lead check · lead form (name reveal, budget, unit type, timeline, agent question) · tracking · QA · the user's pre-launch approval. Image generation needs the user's go-ahead with cost shown.

### Not verified
- Account history/CPL for Vela Bay (Meta tools unavailable). Developer price list. Official assets and their rights. Competitor ad bodies (403). Lead quality (no CRM data). Confidence: **low** on CPL, medium on rule compliance.

### Re-review
- [ ] VB1–VB3 confirmed on [date]
- [ ] Account pull done; user rulings on the plan/photo deviation and price-led stock mismatch

---

## Addendum 2026-11-07: account history

Source: `account-history.md` (read-only pull by the lead, account 903306407477320, client filter applied, all campaigns paused). This supersedes my "Account check (not verified)" note above.

- **Lifetime: S$12,877.62, 332 leads, S$38.79 CPL.** Almost all of it came from one ad, "Vela Bay - static image" (S$12,662.63, 332 leads, S$38.14). Video and "Broad" website ads spent ~S$215 with 0 leads, which matches the account pattern: video and website lose, instant-form statics win.
- **CPL estimate: S$30–55 stands. The central figure moves to ~S$40–50.** That's the S$38 history, plus some drift: the project is now ~77% sold, stock is skewed large, and the form qualifies harder. Confidence moves from low to **medium** (n=332, but the pull has no dates or monthly split, and no CRM quality data).
- **Changes to the plan:**
  1. **Step 0, before any spend: re-contact the 332 past leads** (sales checks the CRM status and WhatsApps the open ones). Count viewings booked before setting a paid budget. This is the cheapest asset we hold.
  2. **Read the old winning static first** (headline, angle, whether it was price-led, run dates). If it led with the 1BR+S price or the MRT, our V1/V5 or V4 is a near-repeat aimed at an audience that has already seen it. In that case, V3 (3BR Premium plan) and V2 (sea) are the fresh angles, so they move up.
  3. **Wave plan unchanged (wave 1: V1, V3, V2; hold V5)**, pending item 2. Stay on instant forms and statics. No video and no website path.
  4. Stop-loss guide: if the wave-1 CPL runs above ~S$60 (about 1.5x history) after ~S$250 per ad and 3 full days, review it with `ad-creative-fatigue`.
- Verdict unchanged: **Revise** (VB1–VB3).

---

## Re-review (Revision 1) — copy-brief.md + design-prompts.md — 2026-11-07

Verdict: **Approved** (for free draft images and for QA). This is not a launch approval.

Checked: every old string is gone outside the revision notes and the "restore with official plan" lines, and every new string is present.
- **VB1 done:** the V1 primary text now ends `Image sample only, not the actual development.`. The old wording survives only as a source note on when to switch back.
- **VB2 done:** `3-Bedroom Premium With Wet Kitchen, Yard & Shelter` appears in the copy (summary + V3 table) and in the prompts (bullet + full prompt). No `3-Bedroom With Wet` remains.
- **VB3 done:** the fallback plan title is `3-BEDROOM LAYOUT · ILLUSTRATIVE` (bullet + prompt). The real title appears only in the official-plan swap note.

Still open (unchanged):
- The 332 past leads should be re-contacted first.
- Read the old winning static before running the paid set.
- Gates: CEA authorisation (V1), a developer-list price check (≤$1,470,000) within 48h with [DATE] filled, and official render/plan rights. The user's OK on the plan + interior-photo deviation for launch.
- Lead form, tracking, QA and the user's pre-launch approval. Any paid image generation needs the user's go-ahead with the cost shown.
