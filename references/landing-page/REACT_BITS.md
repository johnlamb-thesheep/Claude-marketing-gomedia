# React Bits (animated components)

React Bits (https://reactbits.dev, https://github.com/DavidHDev/react-bits) is a library of 100+ animated React components: text animations (SplitText, BlurText, CountUp, ShinyText, RotatingText…), backgrounds (Aurora, Beams, DotGrid, Iridescence…), and UI pieces (cards, docks, galleries, magnet buttons).

The repo is 688 MB, so it's **not** copied into this repo. Pull single components into a page's own project when needed.

## Licence (MIT + Commons Clause)

- OK: use components in client landing pages, sites and videos, including paid client work.
- Not OK: selling or redistributing the components themselves (e.g. a "GoMedia component pack" or template pack).
- Keep the copyright notice in the component files.

## Adding a component (landing page)

Inside the landing page project (React + Vite/Next), pick a flavour suffix: `JS`/`TS` then `CSS`/`TW` (Tailwind):

```bash
npx shadcn@latest add @react-bits/SplitText-TS-TW
```

or `npx jsrepo@latest add https://reactbits.dev/r/SplitText-TS-TW`, or copy the code by hand from the component's Code tab. Plain-HTML pages can't use them directly; pick a CSS-only approach instead.

## Rules for our pages

- **One authored moment per screen** (taste-skill / gstack audit rule). One text animation or one background on the hero, not five.
- **Speed first:** WebGL backgrounds (Aurora, Hyperspeed, LiquidEther…) are heavy on cheap phones. Check LCP < 2s on 4G mobile; prefer CSS backgrounds for ad landing pages. Respect `prefers-reduced-motion`.
- **No cursor effects** (BlobCursor, SplashCursor, TargetCursor): most ad traffic is on phones and these read as gimmicks.
- Good fits: `CountUp` for a real verified number from brand.md, `SplitText`/`BlurText` for the hero headline entrance, `FadeContent`/`AnimatedContent` for section reveals, `LogoLoop` only with logos the client has rights to.
- Every number animated must be a sourced claim (brand.md / client data).

## Video and statics (Remotion)

React Bits components run on browser time (GSAP / Motion / requestAnimationFrame), and Remotion renders frame-by-frame, so most won't render correctly as-is. Use them as **visual references**: pick the effect on reactbits.dev, then rebuild it in Remotion with `useCurrentFrame()` + `interpolate`/`spring`. Text effects (SplitText, BlurText, ShinyText, CountUp, RotatingText) port easily. Exported images/videos from the React Bits tools (Background Studio, Texture Lab) can be used as backgrounds in statics and videos.
