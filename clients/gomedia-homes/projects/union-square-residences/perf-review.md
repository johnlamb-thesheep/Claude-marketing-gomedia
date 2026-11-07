# Performance Review — Union Square Residences

Reviewer: performance (Head of Performance). One section per review, newest at the bottom. Never delete earlier sections.

---

## End-of-chain review (research + copy Rev 1 + prompts Rev 1, 5 ads U1–U5) — 2026-11-07

Files reviewed: `research.md`, `ad-library-2026-11-07.md`, `copy-brief.md` (Rev 1), `design-prompts.md` (Rev 1). Shortened project flow chosen by the user.

Checked against: CLAUDE.md, brand.md, learnings.md (affordability angle S$17.79 row; 2026-11-06 price rule), `gomedia-homes-static-ad-rules` (full-station-name rule, walk-minutes lesson, T10 labels), the Coastal Cabana R2 rulings, NEL/DTL station order (Chinatown → Clarke Quay → Dhoby Ghaut; Chinatown → Fort Canning). **Live Meta data: none** (read-only Meta tools not available in this session).

**Verdict: Revise** (text fixes US1–US5 only). Research **Approved**. Nothing Blocked. **U1 conditionally Blocked if GoAhead is not CEA-authorised.**

### Account check (not verified)
- Could not pull account 903306407477320 (Meta tools unavailable). No Union Square campaign in the local `dashboards/account-review.csv`. Launched Nov 2024, so a past GoAhead campaign is possible. **Not verified** — run the read-only pull (ad name contains "union") before launch.

### Research — Approved
- Price rule ($1.307M → price allowed), no-discount caution despite the falling entry, sales-status conflict kept out, "New PR?" flagged as a Housing-category risk, 3BR availability correctly marked unknown. Good.

### Rule checks
| Rule | Result |
|---|---|
| Only Direct names the condo | **Pass.** Only U1 names it and CDL. U2–U5 carry no name or "Union". |
| Price ≈$1.5M / ≤$1.6M | **Pass.** "$1.31M*" (1BR) and "$1.42M*" (1BR+S), both rounded up; no 2BR+ price. |
| No district codes / unit counts / % sold | **Pass.** No "District 1", "366", "76 left", "23 sold". |
| Full MRT names | **Fail on 2 strings:** U4 Headline A ("Three MRT Stations, Two Lines, All Nearby") and U1 tile 2 ("3 MRT STATIONS / 2 LINES NEARBY") mention the MRT without naming a station (US3, US4). Everything else passes. |
| Freehold | **N/A** (99-year). |
| Fact sourcing | **Pass**, except US2: "a short walk away" for Chinatown Point / The Central with no walk figure (Coastal ruling 2: "nearby"). |
| 5 ads differ | **Pass.** Night river card / day-in-the-life strip / plan on a desk / transit schematic / receipt. |

### Rulings asked for
1. **MRT headline without a station name (U4 Headline A, copy Flag 4): not allowed as written.** The client rule covers headlines and badges. Keep the count hook but name the stations: `3 MRT Stations: Clarke Quay, Chinatown, Fort Canning` (8 words) (US3). Same fix for U1's tile (US4).
2. **Fort Canning MRT (~515m straight-line, NL ~480m) as "nearby": allowed.**
3. **Real price/sqft on a generic plan (U3, designer Flag 2): no.** Same as Coastal R2-B: no price tag and no unit size on an illustrative sheet. Until the official plan arrives, U3 runs the fallback headline (no price), the sheet title `1-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE`, no kraft tag, and no price line in the on-image fine print (US5). The price stays in primary text.
4. **Floor-plan ad without a building photo** (desk scene): drafts OK; launch needs the user's OK in chat or the official render.
5. **MRT walk minutes (copy Flag 3): leave them out.** The only figure is a 2024 third-party estimate, and the three-station hook doesn't need it.
6. **"Popular this week on newlaunches.sg" framing: don't use** — the copywriter's reasoning is right.

### Exact text fixes (old → new)
| # | Where | Old | New |
|---|---|---|---|
| US1 | U1 primary text, `copy-brief.md` (until an official render is used) | `Image sample / artist's impression only.` | `Image sample only, not the actual development.` |
| US2 | U1 primary text, `copy-brief.md` | `Chinatown Point and The Central are a short walk away.` | `Chinatown Point and The Central are nearby.` |
| US3 | U4 Headline A + Meta headline: `copy-brief.md` summary table + U4 table; `design-prompts.md` U4 bullet + full prompt | `Three MRT Stations, Two Lines, All Nearby` | `3 MRT Stations: Clarke Quay, Chinatown, Fort Canning` |
| US3 | U4 primary text opener, `copy-brief.md` | `Three MRT stations, two lines, all nearby.` | `Three MRT stations nearby: Clarke Quay MRT, Chinatown MRT and Fort Canning MRT, on two lines.` |
| US4 | U1 tile 2: `copy-brief.md` U1 table; `design-prompts.md` U1 bullet + full prompt | `3 MRT STATIONS` / `2 LINES NEARBY` | `FORT CANNING MRT` / `ALSO NEARBY` |
| US5 | U3 fallback, `design-prompts.md` bullet + full prompt + photo-plate line + 9:16 line | sheet title `1-BEDROOM + STUDY · 506 SQFT`; the kraft tag `FROM $1.42M*` / `1-BEDROOM + STUDY`; on-image fine-print line 1 `*Based on developer price list as at [DATE]. 1-bedroom + study, 506 sqft. Subject to availability and change. Excludes stamp duties.` | title `1-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE`; *(delete the tag and binder clip)*; *(delete fine-print line 1)*. With the official plan, the copy's tag and price line can return. |

### Likely CPL and fit
- The cheapest entry of the four (1BR $1.31M) and the account's best-proven mechanic ("from $X" affordability, S$17.79 n=118). But Huttons runs "From S$1.31M" from 6 Nov, Canninghill Piers sits across the river at $1.317M, and the 1BR mix pulls investors.
- **Expect S$22–40 per lead** (low confidence) — the cheapest of the four projects, with the highest risk of investor-only and residency-ineligible leads. The form's purpose and budget questions matter here.
- **Ranking:** U1 Direct (named, price) → U5 blind price receipt → U4 three stations (after US3) → U2 first home → U3 plan (asset-gated).
- **Wave 1: U1, U5, U4. Wave 2: U2, U3.** If the 1BR (12 left) sells out, U1/U5 switch to the 1BR+S at $1.42M*.

### Gates before launch
CEA authorisation · developer-list price check (1BR ≤$1,310,000; 1BR+S ≤$1,420,000) within 48h, fill [DATE] · no discount wording unless CDL confirms · rights to the official render/1BR+S plan · read-only account pull · lead form (no residency or nationality question; no 3BR option) · tracking · QA · the user's pre-launch approval and go-ahead with cost for image generation.

### Not verified
- Account history (Meta tools unavailable). Developer price list (cdlhomes 403). Official assets. Competitor bodies (403). Lead quality. Confidence: **low** on CPL, medium on compliance.

### Re-review
- [ ] US1–US5 confirmed on [date]
- [ ] Account pull done

---

## Addendum 2026-11-07: account history

Source: `account-history.md` (read-only pull by the lead, account 903306407477320, client filter applied, all campaigns paused). This supersedes my "Account check (not verified)" note above.

- **Lifetime: S$3,197.08, 40 leads, S$79.93 CPL**, from one ad ("Union Square Residences"). Creative and dates aren't in the pull.
- **My S$22–40 estimate was wrong.** I anchored it on the account's affordability-angle winner (S$17.79) and the low entry price, and our own history on this project says otherwise. **CPL estimate revised to S$60–90 (medium-low confidence, n=40).** Union Square is now the second-most expensive of the four on evidence, behind only Lentor.
- **Is it worth relaunching? Yes, but only as a capped test of angles the old ad likely didn't use.**
  1. Before any spend, read the old ad (headline, whether it was price-led, run dates, CTR and frequency). If it was price-led, U1/U5 are a repeat to an audience that has already seen it.
  2. **Wave 1 changes to U4 (3 MRT stations, after US3), U1 (Direct) and U2 (first home)**. U5 (blind price) drops to wave 2. The price-led mechanic now sits against Huttons and Canninghill Piers *and* our own S$80 history. U3 stays in wave 2.
  3. **Project stop-loss:** ~S$600 with fewer than 3 stage-1 qualified leads, or a CPL above ~S$90 after ~S$300 per ad and 3 full days → stop and move the budget.
  4. **Re-contact the 40 past leads first** (sales checks the CRM status).
- **New user decision:** relaunch at S$60–90 CPL economics (capped test), or deprioritise Union Square behind Vela Bay and Serra.
- Verdict unchanged: **Revise** (US1–US5).

---

## Re-review (Revision 1) — copy-brief.md + design-prompts.md — 2026-11-07

Verdict: **Approved** (for free draft images and for QA). This is not a launch approval. Relaunch economics are per the account-history addendum (S$60–90 CPL, capped test).

- **US1 done:** the old image label is gone from the U1 primary text.
- **US2 done:** no "a short walk away" remains.
- **US3 done:** `3 MRT Stations: Clarke Quay, Chinatown, Fort Canning` appears in the copy (summary, U4 table, Meta headline) and in the prompts (bullet + full prompt). The primary text opens with `Three MRT stations nearby: Clarke Quay MRT, …`. The old headline and opener are gone.
- **US4 done:** U1 tile 2 is `FORT CANNING MRT` / `ALSO NEARBY` (copy + prompts). No `3 MRT STATIONS` remains.
- **US5 done:** the U3 fallback title is `1-BEDROOM + STUDY LAYOUT · ILLUSTRATIVE`. The full prompt has no kraft tag, no binder clip and no "$". Its Avoid list now bans price tags and dollar signs. The on-image fine print has no price line. The tag, price line and real title return only in the official-plan swap note.

Still open:
- **User decision:** relaunch as a capped test (wave 1 = U4, U1, U2; stop-loss ~S$600 with fewer than 3 qualified leads) or deprioritise it.
- Re-contact the 40 past leads, and read the old ad first.
- Gates: a developer-list price check (1BR ≤$1,310,000; 1BR+S ≤$1,420,000) and fill [DATE]. No discount wording. CEA authorisation (U1), and rights.
- Lead form (no residency question), tracking, QA and the user's pre-launch approval. Image-generation go-ahead with the cost shown.
