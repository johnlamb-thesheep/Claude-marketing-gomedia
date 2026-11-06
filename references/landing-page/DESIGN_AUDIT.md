# Landing page design audit (from gstack /design-review)

Excerpted from Garry Tan's gstack `design-review` skill (https://github.com/garrytan/gstack, MIT licence — notice at the bottom). We don't install gstack itself: it's a software-engineering toolkit that needs Bun, its own compiled browser, and writes usage logs. Only the checklist, scoring and rules are kept here.

**How we use it:** the landing-page agent runs this on its own page before handing to qa; qa may use it too.
- Open the page with the built-in browser tools (`mcp__Claude_Browser__*`) — screenshot at desktop and 390px mobile. Wherever the text below says `pg.evaluate(...)`, run the same JS with `javascript_tool`; ignore mentions of Aside, `$B`, detector scripts, baselines and `$GSTACK_STATE_ROOT`.
- Classifier for our pages: **PERSUADE** (marketing / landing). Apply the landing-page rules.
- Our rules win: copy and claims follow `brand.md` and the gomedia-homes copy rules; the headline must echo the winning ad. "Name the outcome the click buys" for our CTAs means the stage CTA ("REGISTER YOUR INTEREST" / "GET PRICE LIST & E-BROCHURE"), not a new phrase.
- Output: Design Score + AI Slop Score, top findings with screenshots, and 3–5 Quick Wins, written into the landing-page audit section of the campaign folder.

---

### Trunk Test (run on every page)

Dropped on this page with no context, can you answer at once: (1) what site is this, (2) what page am I on, (3) what are the major sections, (4) what are my options here, (5) where am I ("you are here", breadcrumbs), (6) how do I search? PASS = all 6, PARTIAL = 4-5, FAIL = 3 or fewer. A FAIL is a HIGH-impact finding however polished the page looks.

### Design Audit Checklist (10 categories, ~80 items)

Apply these at each page. Each finding gets an impact rating (high/medium/polish) and category.

**1. Visual Hierarchy & Composition** (8 items)
- Clear focal point? One primary CTA per view?
- Eye flows naturally top-left to bottom-right?
- Visual noise — competing elements fighting for attention?
- Information density appropriate for content type?
- Z-index clarity — nothing unexpectedly overlapping?
- Above-the-fold content communicates purpose in 3 seconds?
- Squint test: hierarchy still visible when blurred?
- White space is intentional, not leftover?

**2. Typography** (15 items)
- Font count <=3 (flag if more)
- Scale follows ratio (1.25 major third or 1.333 perfect fourth)
- Line-height: 1.5x body, 1.15-1.25x headings
- Measure: 45-75 chars per line (66 ideal)
- Heading hierarchy: no skipped levels (h1→h3 without h2)
- Weight contrast: >=2 weights used for hierarchy
- No banned fonts (Papyrus, Comic Sans, Lobster, Impact, Jokerman, Bleeding Cowboys, Permanent Marker, Bradley Hand, Brush Script, Hobo, Trajan, Raleway, Clash Display, Courier New)
- Display face on the overused list (Inter, Roboto, Arial, Helvetica, Open Sans, Lato, ...) → flag `[overused-font]`; as body/UI on an Operate or Read surface it passes when DESIGN.md says so
- `text-wrap: balance` or `text-pretty` on headings (check via `await pg.evaluate(() => getComputedStyle(document.querySelector("h1")).textWrap)`)
- Curly quotes used, not straight quotes
- Ellipsis character (`…`) not three dots (`...`)
- `font-variant-numeric: tabular-nums` on number columns
- Body text >= 16px
- Caption/label >= 12px
- No letterspacing on lowercase text

**3. Color & Contrast** (10 items)
- Palette coherent (<=12 unique non-gray colors)
- WCAG AA: body text 4.5:1, large text (18px+) 3:1, UI components 3:1
- Semantic colors consistent (success=green, error=red, warning=yellow/amber)
- No color-only encoding (always add labels, icons, or patterns)
- Dark mode: surfaces use elevation, not just lightness inversion
- Dark mode: text off-white (~#E0E0E0), not pure white
- Primary accent desaturated 10-20% in dark mode
- `color-scheme: dark` on html element (if dark mode present)
- No red/green only combinations (8% of men have red-green deficiency)
- Neutral palette is warm or cool consistently — not mixed

**4. Spacing & Layout** (11 items)
- Grid consistent at all breakpoints
- Spacing uses a scale (4px or 8px base), not arbitrary values
- Alignment is consistent — nothing floats outside the grid
- Rhythm: related items closer together, distinct sections further apart
- Border-radius hierarchy (not uniform bubbly radius on everything)
- Inner radius = outer radius - gap (nested elements)
- Max content width set (no full-bleed body text)
- `env(safe-area-inset-*)` for notch devices
- URL reflects state (filters, tabs, pagination in query params)
- Flex/grid used for layout (not JS measurement)
- Breakpoints: mobile (375), tablet (768), desktop (1024), wide (1440)

**5. Interaction States** (12 items)
- Hover state on all interactive elements
- `focus-visible` ring present (never `outline: none` without replacement)
- Active/pressed state with depth effect or color shift
- Disabled state: reduced opacity + `cursor: not-allowed`
- Loading: skeleton shapes match real content layout
- Empty states: warm message + primary action + visual (not just "No items.")
- Error messages: specific + include fix/next step
- Success: confirmation animation or color, auto-dismiss
- Touch targets >= 44px on all interactive elements
- `cursor: pointer` on all clickable elements
- Mindless choice audit: every decision point (button, link, dropdown, modal choice) is a mindless click (obvious what happens). If a click requires thought about whether it's the right choice, flag as HIGH.
- Browser surfaces themed from the palette: `::selection`, caret, scrollbars, focus ring, underline offset, tabular numerals. Left at defaults, the page reads as assembled, not designed

**6. Responsive Design** (6 items)
- Mobile layout makes *design* sense (not just stacked desktop columns)
- No horizontal scroll on any viewport
- Images handle responsive (srcset, sizes, or CSS containment)
- Navigation collapses appropriately (hamburger, bottom nav, etc.)
- Forms usable on mobile (correct input types, no autoFocus on mobile)
- No `user-scalable=no` or `maximum-scale=1` in viewport meta

**7. Motion & Animation** (7 items)
- Easing: ease-out to enter and exit, ease-in-out to move; flag plain ease-in
- Duration: 50-700ms range (nothing slower unless page transition)
- Purpose: every animation communicates something (state change, attention, spatial relationship)
- `prefers-reduced-motion` respected (check: `await pg.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches)`)
- No `transition: all` — properties listed explicitly
- Only `transform` and `opacity` animated (not layout properties like width, height, top, left)
- One authored motion moment per page: not the same entrance on every section, not a hover effect on everything. Ease-out from an already-visible default; content never hides behind animation timing

**8. Content & Microcopy** (8 items)
- Button labels specific ("Save API Key" not "Continue" or "Submit")
- No placeholder/lorem ipsum text visible in production
- Truncation handled (`text-overflow: ellipsis`, `line-clamp`, or `break-words`)
- Active voice ("Install the CLI" not "The CLI will be installed")
- Loading states end with `…` ("Saving…" not "Saving...")
- Destructive actions have confirmation modal or undo window
- Happy talk: welcome paragraphs and self-praise ("Welcome to..."). Flag them, and report "This page has X words. Y (Z%) are happy talk."
- Instructions longer than one sentence mean the design failed: flag the instructions AND the interaction they compensate for.

**9. AI Slop Detection** (11 blacklist patterns, 30 detector rules, 16 judgment tells; polish-level ones on the last line)

The test: would a human designer at a respected studio ever ship this? A `[rule-id]` is the detector's name for the same pattern; a scan hit and a judgment hit on one element are one finding.

- Purple/violet/indigo gradient backgrounds or blue-to-purple color schemes
- **The 3-column feature grid:** icon-in-colored-circle + bold title + 2-line description, repeated 3x symmetrically. THE most recognizable AI layout.
- Icons in colored circles as section decoration (SaaS starter template look)
- Centered everything (`text-align: center` on all headings, descriptions, cards)
- Uniform bubbly border-radius on every element (same large radius on everything)
- Decorative blobs, floating circles, wavy SVG dividers (if a section feels empty, it needs better content, not decoration)
- Emoji as design elements (rockets in headings, emoji as bullet points)
- Colored left-border on cards (`border-left: 3px solid <accent>`)
- Generic hero copy ("Welcome to [X]", "Unlock the power of...", "Your all-in-one solution for...")
- Cookie-cutter section rhythm (hero → 3 features → testimonials → pricing → CTA, every section same height)
- system-ui or `-apple-system` as the PRIMARY display/body font — the "I gave up on typography" signal. Pick a real typeface.

Detector rules (ids only; the scan prints each one's impact and message, and `gstack-design-detect.ts rules` lists the full mapped set): [border-accent-on-rounded] border accent on a rounded card; [overused-font] overused display font; [flat-type-hierarchy] flat type hierarchy; [gradient-text] gradient text; [cream-palette] cream default palette; [nested-cards] nested cards; [shape-assembled-illustration] shape-assembled illustration; [dark-glow] dark-mode glow; [radial-halo] radial halo; [radial-spotlight-glow] radial spotlight glow; [marquee] logo marquee; [icon-tile-stack] icon tile above every heading; [italic-serif-display] italic serif display; [hero-eyebrow-chip] hero eyebrow chip; [kicker-above-heading] kicker above heading; [marketing-buzzword] marketing buzzwords; [aphoristic-cadence] aphoristic cadence; [oversized-h1] oversized h1; [theater-slop-phrase] theater phrases.

Judgment tells (no detector rule; you are the detector):
- Gradient buttons as the primary call to action. One solid color the palette owns.
- A generic stock-photo hero, or a gray placeholder div standing in for one. Show the product or show nothing.
- Rounded cards with drop shadows as the container for everything. App UI made of stacked cards is not layout.
- A testimonial row with avatars, five stars, and quotes nobody said. Real names with real claims, or cut it.
- The cookie-cutter hero: headline left, screenshot right, two buttons. The first template every generator reaches for.
- "Get Started" and "Learn More" as the only calls to action. Name the outcome the click buys.
- Three big numbers with tiny labels under the hero ("10k+ users", "99.9%"). The template counts, not the product.
- A grid of cards with the same shape, the same icon slot, the same two lines. Content of unequal weight given equal boxes.
- Frosted-glass panels with blurred backdrops as the default surface. One translucent layer where it explains depth, not everywhere.
- Generated SVG doodles and mascots in place of art direction. Commission or license an asset, or ship none.
- Every secondary action in a modal. Inline, a side panel, or a new page usually costs the user less.
- Sparklines, progress rings, and fake avatars filling space where content should be. Real data or an honest empty state.
- Dark because it is a dev tool, light because it is health. Light or dark comes from the use scene: who, where, under what light.
- Only the happy path is designed. Empty, loading, error, and long-content states are part of the component.

Polish-level tells, note but do not grade: [monotonous-spacing], [bounce-easing], [pulsing-dot], [blinking-cursor], [numbered-section-labels], [em-dash-overuse], [extreme-negative-tracking], [gpt-thin-border-wide-shadow], [repeating-stripes-gradient], [codex-grid-background], [image-hover-transform], monospace as costume, unthemed browser surfaces.

**10. Performance as Design** (6 items)
- LCP < 2.0s (web apps), < 1.5s (informational sites)
- CLS < 0.1 (no visible layout shifts during load)
- Skeleton quality: shapes match real content layout, shimmer animation
- Images: `loading="lazy"`, width/height dimensions set, WebP/AVIF format
- Fonts: `font-display: swap`, preconnect to CDN origins
- No visible font swap flash (FOUT) — critical fonts preloaded

---


### Scoring System

**Dual headline scores:**
- **Design Score: {A-F}** — weighted average of all 10 categories
- **AI Slop Score: {A-F}** — standalone grade with pithy verdict

**Per-category grades:** A intentional and polished; B solid, minor inconsistencies; C functional but generic, no point of view; D noticeable problems, feels careless; F actively hurts the user.

**Grade computation:** Each category starts at A. Each High-impact finding drops one letter grade. Each Medium-impact finding drops half a letter grade. Polish findings are noted but do not affect grade. Minimum is F.

**Category weights for Design Score:**
| Category | Weight |
|----------|--------|
| Visual Hierarchy | 15% |
| Typography | 15% |
| Spacing & Layout | 15% |
| Color & Contrast | 10% |
| Interaction States | 10% |
| Responsive | 10% |
| Content Quality | 10% |
| AI Slop | 5% |
| Motion | 5% |
| Performance Feel | 5% |

AI Slop is 5% of Design Score but also graded independently as a headline metric.

---

## Design Critique Format

Phrase findings as "I notice..." (observation), "I wonder..." (question), "What if..." (suggestion) and "I think... because..." (reasoned opinion), tied to user goals, each with a specific improvement.

---

### Design Hard Rules

**Classifier: name the mode before you judge a pixel.** The mode is what the visitor's win looks like on THIS surface, not what the product is. A dev tool's landing page is Persuade. A fashion house's docs are Read.
- **PERSUADE** (MARKETING/LANDING PAGE: hero-driven, brand-forward, pricing, campaigns) → they decide and act. Design IS the product. Apply Landing Page Rules.
- **OPERATE** (APP UI: dashboards, admin, settings, editors, tools) → they finish a task. Scanability and native expectations beat expression; the brand lives in the details. Apply App UI Rules.
- **READ** (docs, articles, guides, changelogs) → they understand something. Structure for comprehension, then make staying worth it. Apply Read Rules.
- **EXPERIENCE** (portfolios, galleries, showcases) → they are inside the work. The artifact owns the first viewport; the interface gets out of the way. Apply Experience Rules.
- **HYBRID** (marketing shell with app-like sections) → classify per section, not per page.

**Hard rejection criteria** (instant-fail patterns — flag if ANY apply):
1. Generic SaaS card grid as first impression
2. Beautiful image with weak brand
3. Strong headline with no clear action
4. Busy imagery behind text
5. Sections repeating same mood statement
6. Carousel with no narrative purpose
7. App UI made of stacked cards instead of layout

**Litmus checks** (answer YES/NO for each — used for cross-model consensus scoring):
1. Brand/product unmistakable in first screen?
2. One strong visual anchor present?
3. Page understandable by scanning headlines only?
4. Each section has one job?
5. Are cards actually necessary?
6. Does motion improve hierarchy or atmosphere?
7. Would design feel premium with all decorative shadows removed?

**Landing page rules** (apply when classifier = PERSUADE / MARKETING/LANDING):
- First viewport reads as one composition, not a dashboard
- Brand-first hierarchy: brand > headline > body > CTA
- Typography: expressive, purposeful — no default stacks (Inter, Roboto, Arial, system)
- No flat single-color backgrounds by default: texture from the brand or a real asset, never a halo, spotlight, stripe, or grid-paper gradient (the catalog names each)
- Hero: full-bleed, edge-to-edge, no inset/tiled/rounded variants
- Hero budget: brand, one headline, one supporting sentence, one CTA group, one image
- No cards in hero. Cards only when card IS the interaction
- One job per section: one purpose, one headline, one short supporting sentence
- Motion: one authored moment on the first viewport (an entrance or a scroll-linked reveal), ease-out from a visible default; hover states only where they carry information
- Color: define CSS variables, avoid purple-on-white defaults, one accent color default
- Copy: product language not design commentary. "If deleting 30% improves it, keep deleting"
- Beautiful defaults: composition-first, brand as loudest text, two text faces max (plus a mono for data and code), cardless by default, first viewport as one composition, not a document (poster in stance, not in type size: display stays under 6rem)

**App UI rules** (apply when classifier = OPERATE / APP UI):
- Calm surface hierarchy, strong typography, few colors
- Dense but readable, minimal chrome
- Organize: primary workspace, navigation, secondary context, one accent
- Avoid: dashboard-card mosaics, thick borders, decorative gradients, ornamental icons
- Copy: utility language — orientation, status, action. Not mood/brand/aspiration
- Cards only when card IS the interaction
- Section headings state what area is or what user can do ("Selected KPIs", "Plan status")

**Read rules** (apply when classifier = READ):
- Measure 65-75ch, one reading column, headings closer to what follows than to what precedes
- Wayfinding is a feature: where am I, what is next, where do I search
- A docs index is Read, not Persuade: no hero, no CTA theater

**Experience rules** (apply when classifier = EXPERIENCE):
- The work fills the first viewport; chrome earns every pixel
- One authored transition, not a scroll-jacked tour
- Never crop the artifact to fit a template

**Universal rules** (apply to ALL types):
- Define CSS variables for color system
- No default font stacks as the display voice (Inter, Roboto, Arial, system); body/UI use on an Operate or Read surface follows the role-scoped list (DM Sans, Instrument Sans, IBM Plex Sans pass when the proposal says so)
- One job per section
- "If deleting 30% of the copy improves it, keep deleting"
- Cards earn their existence — no decorative card grids
- NEVER use small, low-contrast type (body text < 16px or contrast ratio < 4.5:1 on body text)
- NEVER put labels inside form fields as the only label (placeholder-as-label pattern — labels must be visible when the field has content)
- ALWAYS preserve visited vs unvisited link distinction (visited links must have a different color)
- NEVER float headings between paragraphs (heading must be visually closer to the section it introduces than to the preceding section)

**Reflexes no detector catches** (check by hand, every time):
- **Depth has an offset.** Shadows are offset plus soft blur. A zero-offset colored halo is decoration, not depth.
- **Secondary text on a colored surface is tinted from that hue.** Never gray.
- **More space above a heading than below it.** Read the computed values.

---

## Licence

```
MIT License

Copyright (c) 2026 Garry Tan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
