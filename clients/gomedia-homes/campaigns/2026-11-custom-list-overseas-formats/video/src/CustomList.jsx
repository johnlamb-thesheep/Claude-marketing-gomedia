// GoAhead C1 "Custom List of Homes in 1 Minute" - 15s 9:16 reel (user's static, animated).
// Voice: video-assets/voice-adam.mp3 at 1.0x (13.95s). All timings below are pocketsphinx
// word starts on that file (see W). Every cue is driven from W.
import React, {useEffect, useState} from 'react';
import {
  AbsoluteFill, Audio, Easing, Img, Sequence, continueRender, delayRender,
  interpolate, staticFile, useCurrentFrame,
} from 'remotion';
import '@fontsource/league-gothic/400.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

export const FPS = 30;
export const DURATION = 450; // 15.0s: VO 13.95s + end-card hold

// Word start times (s), voice-adam.mp3 at 1.0x
const W = {
  singapore: 0.0, homebuyers: 0.69, get: 1.58, your: 1.84, dream: 1.99, property: 2.44,
  in: 2.96, just: 3.09, one: 3.4, minute: 3.82, l1end: 4.28,
  our: 4.67, team: 4.85, will: 5.15, pick: 5.28, new: 5.49, launch: 5.76, condos: 6.08,
  for: 6.56, your2: 6.68, budget: 6.98, and: 7.35, needs: 7.6, l2end: 8.04,
  from: 8.17, one2: 8.41, to: 8.69, four: 8.8, bedders: 9.09, l3end: 9.52,
  two: 9.91, bedders2: 10.08, start: 10.41, from2: 10.72, one3: 10.98, point: 11.14,
  two2: 11.39, million: 11.55, l4end: 12.01,
  tap: 12.39, below: 12.61, to2: 12.98, get2: 13.09, started: 13.28, end: 13.86,
};

const f = (sec) => Math.round(sec * FPS);
const OUT = Easing.out(Easing.cubic);
const EXPO = Easing.out(Easing.exp);
const INOUT = Easing.inOut(Easing.cubic);
const prog = (frame, sec, dur, easing = OUT) =>
  interpolate(frame, [f(sec), f(sec) + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing,
  });

const BLUE = '#1a87e3';
const EYEBROW = '#5566e0';
const NAVY = '#13233d';
const HEAD = "'League Gothic', 'Anton', sans-serif";
const BODY = "'Roboto', sans-serif";

// ---------- captions (VO word for word; current word tinted) ----------
const CAPS = [
  [0.0, 1.52, [['Singapore', W.singapore], ['homebuyers,', W.homebuyers]]],
  [1.58, 2.93, [['get', W.get], ['your', W.your], ['dream', W.dream], ['property', W.property]]],
  [2.96, 4.45, [['in', W.in], ['just', W.just], ['1', W.one], ['minute.', W.minute]]],
  [4.67, 5.46, [['Our', W.our], ['team', W.team], ['will', W.will], ['pick', W.pick]]],
  [5.49, 6.53, [['new', W.new], ['launch', W.launch], ['condos', W.condos]]],
  [6.56, 8.1, [['for', W.for], ['your', W.your2], ['budget', W.budget], ['and', W.and], ['needs.', W.needs]]],
  [8.17, 9.85, [['From', W.from], ['1', W.one2], ['to', W.to], ['4-bedders,', W.four]]],
  [9.91, 10.95, [['2-bedders', W.two], ['start', W.start], ['from', W.from2]]],
  [10.98, 12.3, [['$1.2', W.one3], ['million.*', W.million]]],
  [12.39, 14.1, [['Tap', W.tap], ['below', W.below], ['to', W.to2], ['get', W.get2], ['started.', W.started]]],
];

const Captions = ({frame}) => {
  const t = frame / FPS;
  const cap = CAPS.find(([a, b]) => t >= a && t < b);
  if (!cap) return null;
  const [a, , words] = cap;
  const inP = interpolate(t, [a, a + 0.12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', top: 1420, left: 0, width: 1080, display: 'flex', justifyContent: 'center', zIndex: 50}}>
      <div style={{
        height: 66, padding: '0 30px', borderRadius: 33, background: 'rgba(12,20,34,0.84)',
        display: 'flex', alignItems: 'center', gap: 11, fontFamily: BODY, fontWeight: 700, fontSize: 35,
        color: '#fff', opacity: inP, transform: `translateY(${(1 - inP) * 8}px)`,
      }}>
        {words.map(([w, ws], i) => {
          const next = words[i + 1] ? words[i + 1][1] : 99;
          const on = t >= ws && t < next + 0.05;
          return <span key={i} style={{color: on ? '#8fd0ff' : '#fff'}}>{w}</span>;
        })}
      </div>
    </div>
  );
};

// ---------- background: softened pool + static's light-blue gradient ----------
const Background = ({frame}) => {
  const z = interpolate(frame, [0, DURATION], [1.0, 1.08]);
  return (
    <AbsoluteFill>
      <Img src={staticFile('bg-pool.jpg')} style={{width: 1080, height: 1920, objectFit: 'cover', transform: `scale(${z})`}} />
      <AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(234,244,253,0.9) 0%, rgba(219,236,251,0.84) 45%, rgba(190,222,247,0.8) 100%)'}} />
    </AbsoluteFill>
  );
};

// ---------- header: eyebrow + headline (hero -> static position), kicker ----------
const Header = ({frame}) => {
  const eyeIn = interpolate(frame, [0, 6], [0.55, 1], {extrapolateRight: 'clamp', easing: OUT});
  const l1 = prog(frame, 0.03, 6, EXPO);
  const l2 = prog(frame, 0.25, 6, EXPO);
  const hl = prog(frame, 0.5, 8, OUT); // highlight wipe behind "1 MINUTE"
  const under = prog(frame, W.homebuyers, 8, OUT);
  const kick = prog(frame, 0.8, 7) * (1 - prog(frame, 4.34, 5));
  const shift = prog(frame, 4.3, 12, INOUT); // shared-element layout shift
  const scale = 1.17 - 0.17 * shift;
  const ty = 330 * (1 - shift);
  const slam = (p) => ({
    opacity: interpolate(p, [0, 0.35], [0, 1], {extrapolateRight: 'clamp'}),
    transform: `scale(${1.12 - 0.12 * p})`, transformOrigin: 'left center', display: 'block',
  });
  return (
    <div style={{position: 'absolute', left: 70, top: 292, transformOrigin: '0 0', transform: `translateY(${ty}px) scale(${scale})`, zIndex: 10}}>
      <div style={{
        fontFamily: HEAD, fontSize: 52, lineHeight: 1, color: EYEBROW, letterSpacing: 0.5,
        opacity: eyeIn, transform: `translateY(${(1 - eyeIn) * 30}px)`, position: 'relative', display: 'inline-block',
      }}>
        SINGAPORE HOMEBUYER
        <div style={{position: 'absolute', left: 0, bottom: -5, height: 4, width: '100%', background: EYEBROW, transform: `scaleX(${under})`, transformOrigin: 'left'}} />
      </div>
      <div style={{fontFamily: HEAD, fontSize: 124, lineHeight: 0.93, color: '#0a0a0a', marginTop: 10, whiteSpace: 'nowrap'}}>
        <span style={slam(l1)}>YOUR SINGAPORE</span>
        <span style={slam(l2)}>
          PROPERTY IN{' '}
          <span style={{position: 'relative', display: 'inline-block', padding: '0 10px', marginLeft: -4}}>
            <span style={{position: 'absolute', left: 0, right: 0, top: 6, bottom: 2, background: BLUE, borderRadius: 6, transform: `scaleX(${hl})`, transformOrigin: 'left'}} />
            <span style={{position: 'relative', color: hl > 0.55 ? '#fff' : '#0a0a0a'}}>1 MINUTE</span>
          </span>
        </span>
      </div>
      <div style={{
        marginTop: 18, fontFamily: BODY, fontWeight: 700, fontSize: 30, letterSpacing: 3, color: '#1565c0',
        opacity: kick, transform: `translateY(${(1 - kick) * 14}px)`,
      }}>
        CUSTOM LIST · 3 QUESTIONS
      </div>
    </div>
  );
};

// ---------- sub line (word-group mask-up) + chips ----------
const SUB = [['Our team picks', W.our], ['new launch condos', W.new], ['for your budget', W.for], ['& needs', W.and]];
const SubLine = ({frame}) => (
  <div style={{position: 'absolute', left: 70, top: 592, width: 960, fontFamily: BODY, fontSize: 35, color: '#111', display: 'flex', gap: 9, flexWrap: 'nowrap', zIndex: 9}}>
    {SUB.map(([txt, t], i) => {
      const p = prog(frame, t, 6);
      return (
        <span key={i} style={{display: 'inline-block', overflow: 'hidden', lineHeight: 1.25}}>
          <span style={{display: 'inline-block', transform: `translateY(${(1 - p) * 105}%)`, opacity: p}}>{txt}</span>
        </span>
      );
    })}
  </div>
);

const Chip = ({frame, t, text, x}) => {
  const p = prog(frame, t, 7, Easing.out(Easing.back(0.6)));
  const dot = prog(frame, t + 0.2, 10);
  const pulse = 1 + 0.45 * Math.sin(Math.PI * dot);
  return (
    <div style={{
      position: 'absolute', left: x, top: 655, height: 60, padding: '0 26px 0 22px', borderRadius: 30, background: '#0b0b0b',
      display: 'flex', alignItems: 'center', gap: 14, fontFamily: BODY, fontSize: 28, color: '#fff',
      opacity: interpolate(p, [0, 0.4], [0, 1], {extrapolateRight: 'clamp'}), transform: `scale(${0.85 + 0.15 * p})`, transformOrigin: 'left center', zIndex: 9,
    }}>
      <div style={{width: 17, height: 17, borderRadius: 9, background: BLUE, transform: `scale(${pulse})`}} />
      {text}
    </div>
  );
};

// ---------- price box ($1.2M builds on the spoken words, never shows a wrong figure) ----------
const PriceBox = ({frame}) => {
  const rev = prog(frame, W.two, 10, OUT);
  const forP = prog(frame, W.bedders2, 6);
  const out = prog(frame, 12.05, 8, Easing.in(Easing.cubic));
  const land = prog(frame, W.million, 5, EXPO);
  const show = (t) => (frame >= f(t) ? 1 : 0);
  const glyph = (ch, t, key) => {
    const p = prog(frame, t, 4, EXPO);
    return <span key={key} style={{display: 'inline-block', opacity: show(t), transform: `translateY(${(1 - p) * -24}px)`}}>{ch}</span>;
  };
  return (
    <div style={{
      position: 'absolute', left: 70, top: 732, width: 485, height: 196, zIndex: 8,
      clipPath: `inset(0 ${(1 - rev) * 100}% 0 0)`, opacity: 1 - out, transform: `translateX(${-out * 40}px)`,
    }}>
      <div style={{position: 'absolute', inset: 0, background: BLUE, clipPath: 'polygon(0 0, calc(100% - 52px) 0, 100% 52px, 100% 100%, 0 100%)'}} />
      <div style={{position: 'absolute', right: 0, top: 0, width: 52, height: 52, background: '#7cc0f4', clipPath: 'polygon(0 0, 0 100%, 100% 100%)'}} />
      <div style={{position: 'absolute', left: 28, top: 22, fontFamily: BODY, fontWeight: 700, fontSize: 27, color: '#fff'}}>STARTING FROM</div>
      <div style={{position: 'absolute', left: 24, top: 64, fontFamily: BODY, fontWeight: 900, fontSize: 92, lineHeight: 1, color: '#fff', letterSpacing: -2, transform: `scale(${1 + 0.06 * Math.sin(Math.PI * land)})`, transformOrigin: 'left bottom'}}>
        {glyph('$1', W.one3, 'a')}{glyph('.', W.point, 'b')}{glyph('2', W.two2, 'c')}{glyph('M', W.million, 'd')}
        <span style={{fontSize: 48, verticalAlign: 'top', opacity: show(W.million)}}>*</span>
      </div>
      <div style={{position: 'absolute', right: 30, top: 156, fontFamily: BODY, fontWeight: 700, fontSize: 27, color: '#fff', opacity: forP, transform: `translateX(${(1 - forP) * 30}px)`}}>FOR 2-BEDDERS</div>
    </div>
  );
};

// ---------- floor plan panel (2-bedder sample layout) ----------
const FloorPlan = ({frame}) => {
  const p = prog(frame, W.bedders2, 10, OUT);
  const out = prog(frame, 12.05, 8, Easing.in(Easing.cubic));
  const z = interpolate(frame, [f(W.bedders2), f(12.1)], [1.0, 1.06], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <div style={{
      position: 'absolute', left: 580, top: 732, width: 430, height: 196, borderRadius: 18, background: '#fff', zIndex: 8,
      boxShadow: '0 10px 28px rgba(20,60,110,0.22)', overflow: 'hidden', display: 'flex', alignItems: 'center',
      opacity: (p > 0 ? 1 : 0) * (1 - out), transform: `translateX(${(1 - p) * 520 + out * 40}px)`,
    }}>
      <div style={{width: 205, height: 176, marginLeft: 10, overflow: 'hidden', flexShrink: 0}}>
        <Img src={staticFile('floorplan.png')} style={{width: 205, height: 176, objectFit: 'contain', transform: `scale(${z})`}} />
      </div>
      <div style={{marginLeft: 12, marginRight: 10, display: 'flex', flexDirection: 'column'}}>
        <div style={{fontFamily: HEAD, fontSize: 44, lineHeight: 0.95, color: '#0a0a0a'}}>2-BEDDER</div>
        <div style={{fontFamily: HEAD, fontSize: 44, lineHeight: 0.95, color: BLUE}}>LAYOUT</div>
        <div style={{fontFamily: BODY, fontWeight: 500, fontSize: 23, lineHeight: 1.15, color: '#2b3646', marginTop: 8, width: 190}}>Illustrative layout only – not an actual unit</div>
      </div>
    </div>
  );
};

// ---------- bedder cards ----------
const CARDS = [
  {src: 'card1.jpg', label: '1-bedder', t: 4.3, rot: -5, dy: 10},
  {src: 'card2.jpg', label: '2-bedder', t: 4.45, rot: -2, dy: 0},
  {src: 'card3.jpg', label: '3-bedder', t: 4.6, rot: 2, dy: 0},
  {src: 'card4.jpg', label: '4-bedder', t: 4.75, rot: 5, dy: 10},
];
const CW = 232, CH = 400, GAP = 14, ROW_TOP = 955;
const ROW_X0 = (1080 - (4 * CW + 3 * GAP)) / 2;

const Cards = ({frame}) => {
  const end = prog(frame, 12.05, 12, INOUT);
  // end card: row shrinks to 80% and moves up into the freed price-box area
  const rowTy = -262 * end;
  const rowS = 1 - 0.2 * end;
  const hi = prog(frame, W.two, 8, OUT) * (1 - end); // 2-bedder lift on "two-bedders"
  return (
    <div style={{position: 'absolute', left: 0, top: ROW_TOP, width: 1080, height: CH, transform: `translateY(${rowTy}px) scale(${rowS})`, transformOrigin: '540px 200px', zIndex: 7, opacity: 1 - 0.12 * end}}>
      {CARDS.map((c, i) => {
        const p = prog(frame, c.t, 10, OUT);
        const lab = prog(frame, c.t + 0.27, 6, Easing.out(Easing.back(0.6)));
        const kb = interpolate(frame, [f(c.t), DURATION], [1.12, 1.0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
        const isTwo = i === 1;
        const lift = isTwo ? hi : 0;
        const dim = !isTwo ? 1 - 0.18 * hi : 1;
        return (
          <div key={i} style={{
            position: 'absolute', left: ROW_X0 + i * (CW + GAP), top: c.dy, width: CW, height: CH, borderRadius: 16, overflow: 'hidden',
            background: '#fff', boxShadow: '0 14px 30px rgba(15,50,95,0.28)',
            outline: lift > 0.01 ? `${Math.round(5 * lift)}px solid ${BLUE}` : 'none', outlineOffset: -1,
            opacity: (p > 0 ? 1 : 0) * dim,
            transform: `translateY(${(1 - p) * 620 - 12 * lift}px) rotate(${c.rot * p + (1 - p) * c.rot * 3}deg) scale(${1 + 0.06 * lift})`,
            zIndex: isTwo ? 2 : 1,
          }}>
            <Img src={staticFile(c.src)} style={{width: CW, height: CH, objectFit: 'cover', transform: `scale(${kb})`}} />
            <div style={{
              position: 'absolute', left: 16, bottom: 18, height: 46, padding: '0 20px', borderRadius: 23, background: '#fff',
              display: 'flex', alignItems: 'center', fontFamily: BODY, fontSize: 27, color: '#111', boxShadow: '0 3px 10px rgba(0,0,0,0.18)',
              opacity: lab > 0 ? 1 : 0, transform: `scale(${0.7 + 0.3 * lab})`, transformOrigin: 'left center',
            }}>{c.label}</div>
          </div>
        );
      })}
    </div>
  );
};

const SampleLabel = ({frame}) => {
  const p = prog(frame, 4.3, 6);
  const end = prog(frame, 12.05, 12, INOUT);
  return (
    <div style={{
      position: 'absolute', left: 0, width: 1080, textAlign: 'center', top: 1374 - 312 * end, zIndex: 30,
      fontFamily: BODY, fontStyle: 'italic', fontWeight: 500, fontSize: 23, color: NAVY, opacity: p,
    }}><span style={{background: 'rgba(235,244,253,0.85)', padding: '2px 12px', borderRadius: 12}}>*IMAGE SAMPLE ONLY – not the actual unit</span></div>
  );
};

// ---------- end card: how-it-works line, CTA, fine print ----------
const EndCard = ({frame}) => {
  const line = prog(frame, 12.2, 8);
  const cta = prog(frame, 12.12, 8, EXPO);
  const fine = prog(frame, 12.3, 10);
  const tLocal = Math.max(0, frame - f(W.tap)) / FPS;
  const pulse = frame > f(W.tap) + 6 ? 1 + 0.035 * (0.5 - 0.5 * Math.cos((2 * Math.PI * tLocal) / 0.8)) : 1;
  const rip = interpolate(frame, [f(W.tap), f(W.tap) + 16], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: OUT});
  return (
    <>
      <div style={{position: 'absolute', top: 1098, left: 0, width: 1080, textAlign: 'center', fontFamily: BODY, fontWeight: 700, fontSize: 32, color: NAVY, opacity: line, transform: `translateY(${(1 - line) * 16}px)`, zIndex: 9}}>
        3 questions · about 1 minute · sent on WhatsApp
      </div>
      <div style={{
        position: 'absolute', top: 1148, left: 160, width: 760, height: 112, borderRadius: 56, background: '#fff', overflow: 'hidden',
        boxShadow: '0 10px 26px rgba(20,60,110,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9,
        opacity: interpolate(cta, [0, 0.4], [0, 1], {extrapolateRight: 'clamp'}),
        transform: `translateY(${(1 - cta) * 60}px) scale(${(0.9 + 0.1 * cta) * pulse})`,
      }}>
        <div style={{position: 'absolute', left: 380 - 420 * rip, top: 56 - 420 * rip, width: 840 * rip, height: 840 * rip, borderRadius: '50%', background: BLUE, opacity: 0.22 * (1 - rip)}} />
        <span style={{fontFamily: HEAD, fontSize: 78, color: '#0a0a0a', letterSpacing: 0.5, position: 'relative'}}>GET MY CUSTOM LIST</span>
      </div>
      <div style={{position: 'absolute', top: 1272, left: 70, width: 950, fontFamily: BODY, fontSize: 28, lineHeight: 1.18, color: '#1d2b40', opacity: fine, zIndex: 9}}>
        *Indicative starting price for a 2-bedder new launch unit, based on developer price list as at [DATE]. Subject to availability and change. Excludes stamp duties.
        <div style={{marginTop: 4}}>[CEA LICENCE / REGISTRATION LINE — client to confirm if required]</div>
      </div>
    </>
  );
};

// ---------- fonts ----------
const useFonts = () => {
  const [handle] = useState(() => delayRender('fonts'));
  useEffect(() => {
    Promise.all([
      document.fonts.load("124px 'League Gothic'"),
      document.fonts.load("400 35px Roboto"), document.fonts.load("italic 500 23px Roboto"),
      document.fonts.load("500 28px Roboto"), document.fonts.load("700 30px Roboto"), document.fonts.load("900 108px Roboto"),
    ]).then(() => continueRender(handle)).catch(() => continueRender(handle));
  }, [handle]);
};

export const CustomList = () => {
  useFonts();
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{background: '#dcebf9'}}>
      <Background frame={frame} />
      <Header frame={frame} />
      <SubLine frame={frame} />
      <Chip frame={frame} t={W.budget} text="Free custom list" x={70} />
      <Chip frame={frame} t={W.needs} text="Developer price lists" x={370} />
      <PriceBox frame={frame} />
      <FloorPlan frame={frame} />
      <Cards frame={frame} />
      <SampleLabel frame={frame} />
      <EndCard frame={frame} />
      <Captions frame={frame} />

      <Audio src={staticFile('voice.mp3')} />
      {CARDS.map((c, i) => (
        <Sequence key={i} from={f(c.t) + 3} durationInFrames={20}><Audio src={staticFile('sfx/pop.mp3')} volume={0.16} /></Sequence>
      ))}
      <Sequence from={f(W.million)} durationInFrames={50}><Audio src={staticFile('sfx/impact-bass-1.mp3')} volume={0.28} /></Sequence>
      <Sequence from={f(W.tap)} durationInFrames={15}><Audio src={staticFile('sfx/click-soft.mp3')} volume={0.5} /></Sequence>
    </AbsoluteFill>
  );
};
