    <script>
      window.__timelines = window.__timelines || {};
      // Word starts (s) on voice-v2.mp3 (voice-adam-v2 at 1.05x). Transcript:
      // "Singapore homebuyers, get your dream property from just one point two million dollars. Our team will pick
      //  new launch condos for your budget and needs. From one to four bedders, two-bedders start from one point two
      //  million. Tap below to get started."
      const W = {
        singapore: 0.0, homebuyers: 0.657, get: 1.43, your: 1.705, dream: 1.876, property: 2.295,
        from0: 2.714, just: 2.905, one0: 3.143, point0: 3.457, two0: 3.752, million0: 3.99, dollars: 4.43, l1end: 5.03,
        our: 5.457, team: 5.629, will: 5.914, pick: 6.019, new: 6.229, launch: 6.467, condos: 6.762,
        for: 7.2, your2: 7.314, budget: 7.619, and: 7.952, needs: 8.2, l2end: 8.62,
        from: 8.695, one2: 8.943, to: 9.19, four: 9.305, bedders: 9.576,
        two: 10.276, bedders2: 10.457, start: 10.771, from2: 11.067, one3: 11.305, point: 11.457,
        two2: 11.695, million: 11.838, l4end: 12.3,
        tap: 12.619, below: 12.848, to2: 13.171, get2: 13.248, started: 13.429, end: 13.95,
      };
      const CUT = [1.4, 5.3, 8.62, 12.2]; // scene boundaries = whip midpoints (in the VO pauses)
      const CARD_T = [W.one2, 9.1, 9.26, 9.42]; // "1… 2… 3… 4" counted on the cards
      const tl = gsap.timeline({ paused: true });
      const P = "power4.out", X = "expo.out", C = "circ.out";

      // ---------- background: aerial Ken Burns push + drift, parallax nudge on each whip, wash lighter on the hook ----------
      tl.fromTo("#bg-img", { scale: 1.0, x: 0, y: 0 }, { scale: 1.12, y: -110, duration: 15, ease: "none" }, 0);
      CUT.forEach((t, i) => tl.to("#bg-img", { x: -26 * (i + 1), duration: 0.45, ease: "power3.out" }, t - 0.1));
      tl.fromTo("#bg-tint", { opacity: 0.5 }, { opacity: 0.74, duration: 0.3, ease: "none" }, CUT[0] - 0.1);
      tl.to("#bg-tint", { opacity: 0.8, duration: 0.3, ease: "none" }, CUT[2] - 0.1);
      tl.fromTo("#bgnote span", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.1);

      // ---------- whip panels ----------
      ["#wp1", "#wp2", "#wp3", "#wp4"].forEach((id, i) => {
        tl.fromTo(id, { x: 1650, skewX: -14 }, { x: -2300, duration: 0.44, ease: "power2.inOut" }, CUT[i] - 0.22);
      });

      // ---------- S1 hook (strong from frame 0) ----------
      tl.fromTo("#s1-l1", { scale: 1.45, opacity: 1 }, { scale: 1, duration: 0.42, ease: P }, 0);
      tl.fromTo("#s1-chip", { y: -40, scale: 0.6, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" }, 0.08);
      tl.fromTo("#s1-blk", { scaleX: 0 }, { scaleX: 1, duration: 0.2, ease: X }, W.homebuyers - 0.05);
      tl.fromTo("#s1-l2", { y: 230 }, { y: 0, duration: 0.3, ease: P }, W.homebuyers);
      tl.to("#s1-l1", { y: -18, duration: 0.08, ease: "power2.out" }, W.homebuyers + 0.08);
      tl.to("#s1-l1", { y: 0, duration: 0.3, ease: "back.out(3)" }, W.homebuyers + 0.16);
      tl.fromTo("#s1-sub", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: C }, 0.9);
      tl.fromTo("#s1-in", { scale: 1 }, { scale: 1.06, duration: 1.4, ease: "none" }, 0);

      // ---------- S2 custom list of homes, from just $1.2M* (2-bedder entry price) ----------
      tl.fromTo("#s2-l1", { x: 700, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: X }, W.get);
      tl.fromTo("#s2-blk", { scaleX: 0 }, { scaleX: 1, duration: 0.22, ease: X }, W.dream - 0.06);
      tl.fromTo("#s2-l2", { y: 210 }, { y: 0, duration: 0.32, ease: P }, W.dream);
      tl.fromTo("#s2-l3", { y: 90, rotation: 5, opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: 0.38, ease: C }, W.property);
      tl.fromTo("#s2-in2", { x: -260, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: X }, W.from0);
      tl.fromTo("#q-card", { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.24, ease: X }, W.just);
      tl.fromTo("#q-dol", { y: -160, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: P }, W.one0);
      tl.fromTo("#q-colA", { opacity: 0 }, { opacity: 1, duration: 0.05 }, W.one0);
      tl.fromTo("#q-stripA", { y: 0 }, { y: -214, duration: 0.22, ease: X }, W.one0 + 0.04);
      tl.fromTo("#q-dot", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(3)" }, W.point0);
      tl.fromTo("#q-colB", { opacity: 0 }, { opacity: 1, duration: 0.05 }, W.two0 - 0.06);
      tl.fromTo("#q-stripB", { y: 0 }, { y: -428, duration: 0.24, ease: X }, W.two0 - 0.04);
      tl.fromTo("#q-m", { scale: 2.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.22, ease: P }, W.million0);
      tl.fromTo("#q-star", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: "back.out(3)" }, W.million0 + 0.12);
      tl.fromTo("#s2-chip", { x: -700, rotation: -6 }, { x: 0, rotation: 0, duration: 0.38, ease: "back.out(1.5)" }, W.dollars);
      tl.fromTo("#s2-in", { scale: 1 }, { scale: 1.035, duration: 0.07, ease: "power2.out" }, W.dollars + 0.08); // beat punch
      tl.to("#s2-in", { scale: 1, duration: 0.3, ease: "back.out(3)" }, W.dollars + 0.15);

      // ---------- S3 team picks condos for budget & needs ----------
      tl.fromTo("#s3-k", { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: X }, CUT[1] + 0.08);
      tl.fromTo("#s3-ku", { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: "power3.out" }, W.our);
      tl.fromTo("#s3-l1", { scale: 1.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.36, ease: P }, W.pick);
      tl.fromTo("#s3-blk", { scaleX: 0 }, { scaleX: 1, duration: 0.22, ease: X }, W.condos - 0.06);
      tl.fromTo("#s3-l2", { y: -250 }, { y: 0, duration: 0.34, ease: "back.out(1.4)" }, W.condos);
      tl.to("#s3-l1", { y: -14, duration: 0.07 }, W.condos + 0.1);
      tl.to("#s3-l1", { y: 0, duration: 0.3, ease: "back.out(3)" }, W.condos + 0.17);
      tl.fromTo("#s3-l3", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: C }, W.for);
      tl.fromTo("#s3-c1", { x: -800, rotation: -8 }, { x: 0, rotation: 0, duration: 0.42, ease: "back.out(1.5)" }, W.budget);
      tl.fromTo("#s3-c2", { x: 900, rotation: 8 }, { x: 0, rotation: 0, duration: 0.42, ease: "back.out(1.5)" }, W.needs);
      [["#s3-d1", W.budget + 0.3], ["#s3-d2", W.needs + 0.3]].forEach(([d, t]) => {
        tl.fromTo(d, { scale: 1 }, { scale: 1.8, duration: 0.14, ease: "power2.out", yoyo: true, repeat: 1 }, t);
      });
      tl.fromTo("#s3-in", { scale: 1 }, { scale: 1.05, duration: 3.32, ease: "none" }, CUT[1]);

      // ---------- S4 bedders: count 1→4 with cards ----------
      tl.fromTo("#s4-k", { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: X }, W.from);
      tl.fromTo("#s4-num", { scale: 0, rotation: -12 }, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(2)" }, W.from + 0.03);
      tl.fromTo("#s4-strip", { y: 0 }, { y: -270, duration: 0.12, ease: X }, CARD_T[1]);
      tl.to("#s4-strip", { y: -540, duration: 0.12, ease: X }, CARD_T[2]);
      tl.to("#s4-strip", { y: -810, duration: 0.12, ease: X }, CARD_T[3]);
      tl.fromTo("#s4-bed", { scale: 1.6, x: 200, opacity: 0 }, { scale: 1, x: 0, opacity: 1, duration: 0.32, ease: P }, W.bedders);
      const CARD_FROM = [
        { x: -700, y: 120, rotation: -40 },
        { x: -200, y: 1100, rotation: -15 },
        { x: 300, y: 1100, rotation: 18 },
        { x: 700, y: 140, rotation: 40 },
      ];
      const CARD_ROT = [-5, -2, 2, 5];
      ["#c1", "#c2", "#c3", "#c4"].forEach((id, i) => {
        tl.fromTo(id, { ...CARD_FROM[i], opacity: 1 }, { x: 0, y: 0, rotation: CARD_ROT[i], duration: 0.36, ease: "back.out(1.3)" }, CARD_T[i] - 0.06);
        tl.fromTo(id + "-img", { scale: 1.25 }, { scale: 1.04, duration: 3.0, ease: "power1.out" }, CARD_T[i]);
        tl.to(id, { y: -22, duration: 0.08, ease: "power2.out" }, W.bedders + 0.05 + i * 0.04);
        tl.to(id, { y: 0, duration: 0.28, ease: "back.out(3)" }, W.bedders + 0.13 + i * 0.04);
      });
      tl.fromTo("#note4 span", { opacity: 0 }, { opacity: 1, duration: 0.15 }, W.one2);

      // "two-bedders": top block whips out, cards 1/3/4 fly out, card 2 becomes the hero
      tl.to("#note4", { y: 150, duration: 0.4, ease: X }, W.two);
      tl.to("#s4-top", { y: -700, duration: 0.3, ease: "power3.in" }, W.two - 0.1);
      tl.to("#c1", { x: -900, rotation: -35, duration: 0.32, ease: "power3.in" }, W.two - 0.05);
      tl.to("#c3", { x: 900, rotation: 30, duration: 0.32, ease: "power3.in" }, W.two - 0.05);
      tl.to("#c4", { x: 900, rotation: 40, duration: 0.32, ease: "power3.in" }, W.two);
      tl.to("#c2", { x: 123, y: 40, scale: 1.6, rotation: 0, duration: 0.42, ease: X }, W.two);
      tl.fromTo("#s4-k2a", { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 0.32, ease: X }, W.bedders2);
      tl.fromTo("#s4-k2b", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.28, ease: C }, W.start);
      // flip: photo card turns edge-on, floor plan turns in
      tl.to("#c2", { rotationY: 90, transformPerspective: 1400, duration: 0.16, ease: "power2.in" }, W.start);
      tl.to("#c2", { opacity: 0, duration: 0.01 }, W.start + 0.16);
      tl.fromTo("#plan", { rotationY: -90, transformPerspective: 1600, opacity: 0 }, { rotationY: 0, opacity: 1, duration: 0.34, ease: "back.out(1.3)" }, W.start + 0.16);
      tl.fromTo("#plan-img", { scale: 1.0 }, { scale: 1.05, duration: 1.3, ease: "none" }, W.start + 0.16);
      // price build on the spoken words
      tl.fromTo("#price-blk", { scaleX: 0 }, { scaleX: 1, duration: 0.24, ease: X }, W.from2);
      tl.fromTo("#p-dol", { y: -160, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, ease: P }, W.one3);
      tl.fromTo("#p-colA", { opacity: 0 }, { opacity: 1, duration: 0.05 }, W.one3);
      tl.fromTo("#p-stripA", { y: 0 }, { y: -214, duration: 0.22, ease: X }, W.one3 + 0.04);
      tl.fromTo("#p-dot", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.18, ease: "back.out(3)" }, W.point);
      tl.fromTo("#p-colB", { opacity: 0 }, { opacity: 1, duration: 0.05 }, W.two2 - 0.06);
      tl.fromTo("#p-stripB", { y: 0 }, { y: -428, duration: 0.24, ease: X }, W.two2 - 0.04);
      tl.fromTo("#p-m", { scale: 2.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.22, ease: P }, W.million);
      tl.fromTo("#p-star", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: "back.out(3)" }, W.million + 0.12);
      [[14, -10], [-12, 8], [9, -6], [-6, 4], [3, -2], [0, 0]].forEach(([x, y], k) => {
        tl.to("#s4-in", { x, y, duration: 0.035, ease: "none" }, W.million + 0.06 + k * 0.035);
      });
      tl.fromTo("#price-blk", { scale: 1 }, { scale: 1.04, duration: 0.08, ease: "power2.out", immediateRender: false }, W.million + 0.05);
      tl.to("#price-blk", { scale: 1, duration: 0.2, ease: "back.out(3)" }, W.million + 0.13);

      // ---------- S5 end card (fine print from 12.22 s = 2.78 s on screen) ----------
      const E = CUT[3];
      tl.fromTo("#fine", { opacity: 0 }, { opacity: 1, duration: 0.12 }, E + 0.02);
      tl.fromTo("#s5-chip", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "back.out(2)" }, E + 0.07);
      tl.fromTo("#s5-l1", { scale: 1.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.32, ease: P }, E + 0.09);
      tl.fromTo("#s5-blk", { scaleX: 0 }, { scaleX: 1, duration: 0.22, ease: X }, E + 0.15);
      tl.fromTo("#s5-l2", { y: 190 }, { y: 0, duration: 0.3, ease: P }, E + 0.21);
      const MROT = [-12, -4, 4, 12];
      ["#m1", "#m2", "#m3", "#m4"].forEach((id, i) => {
        tl.fromTo(id, { y: 700, rotation: MROT[i] * 3 }, { y: 0, rotation: MROT[i], duration: 0.4, ease: "back.out(1.4)" }, E + 0.09 + i * 0.05);
      });
      tl.fromTo("#s5-note", { opacity: 0 }, { opacity: 1, duration: 0.15 }, E + 0.09);
      tl.fromTo("#cta", { y: 260, scale: 0.7, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.34, ease: "back.out(1.6)" }, E + 0.07);
      // "tap": press + release spring, ripple
      tl.to("#cta", { scale: 0.9, duration: 0.1, ease: "power2.in" }, W.tap + 0.08);
      tl.to("#cta", { scale: 1, duration: 0.4, ease: "back.out(3)" }, W.tap + 0.18);
      tl.fromTo("#cta-rip", { scale: 0, opacity: 0.35 }, { scale: 1.2, opacity: 0, duration: 0.6, ease: "power2.out" }, W.tap + 0.18);
      tl.fromTo("#cta-arrow", { x: 0 }, { x: 12, duration: 0.3, ease: "sine.inOut", yoyo: true, repeat: Math.max(0, Math.floor((15 - 12.95) / 0.3) - 1) }, 12.95);
      tl.to("#cta", { scale: 1.04, duration: 0.4, ease: "sine.inOut", yoyo: true, repeat: Math.max(0, Math.floor((15 - 13.25) / 0.4) - 1) }, 13.25);
      tl.fromTo("#s5-in", { scale: 1.0 }, { scale: 1.02, duration: 2.8, ease: "none" }, E);

      // ---------- captions: current word tinted ----------
      document.querySelectorAll(".cap").forEach((cap) => {
        const start = parseFloat(cap.dataset.start);
        tl.fromTo(cap.querySelector(".bar"), { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.12, ease: "power2.out" }, start);
        const words = [...cap.querySelectorAll("span[data-w]")];
        words.forEach((w, i) => {
          const t = parseFloat(w.dataset.w);
          tl.fromTo(w, { color: "#ffffff" }, { color: "#8fd0ff", duration: 0.04 }, t);
          if (words[i + 1]) tl.to(w, { color: "#ffffff", duration: 0.04 }, parseFloat(words[i + 1].dataset.w) + 0.05);
        });
      });

      window.__timelines["main"] = tl;
    </script>