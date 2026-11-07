# NOTE: superseded - index.html has later hand edits (fine-print backing, bgnote from frame 0, s2-fine line). Do not re-run.
# One-off: builds index.html (v2: new VO + aerial background) from index-v1.html. Run from the project folder.
import re
s = open('versions/index-v1.html', encoding='utf8').read()


def rep(a, b):
    global s
    assert a in s, a[:80]
    s = s.replace(a, b, 1)


s = re.sub(r'<!-- GoAhead C1.*?-->', '''<!-- GoAhead C1 "Custom List" – 15s 9:16 kinetic-type reel, v2 (HyperFrames).
     Voice: assets/voice-v2.mp3 = video-assets/voice-adam-v2.mp3 (md5 799f47b5…) at 1.05x (14.92 s -> 14.26 s).
     W = pocketsphinx forced-alignment word starts on the 1.0x file, divided by 1.05. v1 kept as versions/index-v1.html (render: copy it back to index.html). -->''', s, count=1, flags=re.S)
rep('#bg-img { position: absolute; left: -110px; top: -190px; width: 1300px; height: 2300px;',
    '#bg-img { position: absolute; left: -110px; top: -150px; width: 1300px; height: 2310px;')
rep('#bg-tint { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(234,244,253,0.92) 0%, rgba(219,236,251,0.86) 48%, rgba(190,222,247,0.82) 100%); }',
    '#bg-tint { position: absolute; inset: 0; background: linear-gradient(180deg, rgb(236,245,253) 0%, rgb(220,237,251) 50%, rgb(196,225,248) 100%); }\n'
    '      #bgnote { position: absolute; right: 40px; top: 274px; font-family: var(--body); font-style: italic; font-weight: 500; font-size: 23px; color: var(--navy); display: block; }\n'
    '      #bgnote span { background: rgba(235,244,253,0.9); padding: 2px 12px; border-radius: 12px; }\n'
    '      #q-card { position: absolute; left: 80px; top: 966px; width: 720px; height: 250px; border-radius: 26px; background: #fff; box-shadow: 0 14px 32px rgba(20,60,110,0.22); display: block; transform-origin: left center; }\n'
    '      #q-row { position: absolute; left: 0; top: 18px; width: 720px; height: 214px; display: flex; justify-content: center; align-items: flex-start; font-family: var(--body); font-weight: 900; font-size: 200px; line-height: 214px; color: var(--ink); letter-spacing: -4px; }\n'
    '      #q-m { color: var(--blue); }\n'
    '      #q-star { font-size: 110px; line-height: 120px; color: var(--blue); }')
rep('src="assets/img/bg-pool.jpg"', 'src="assets/img/bg-aerial.jpg"')
rep('        <div id="bg-tint"></div>\n      </div>',
    '        <div id="bg-tint"></div>\n      </div>\n'
    '      <!-- background is a real development photo: generic sample label for the whole video -->\n'
    '      <div id="bgnote"><span>*IMAGE SAMPLE ONLY – not the actual development</span></div>')
rep('id="s1" class="clip scene" data-start="0" data-duration="1.58"', 'id="s1" class="clip scene" data-start="0" data-duration="1.4"')
rep('<!-- S2 1.58–4.30 "get your [custom list] in just 1 minute" -->',
    '<!-- S2 1.40–5.30 "get your dream property from just $1.2 million dollars" -->')
rep('id="s2" class="clip scene" data-start="1.58" data-duration="2.72"', 'id="s2" class="clip scene" data-start="1.4" data-duration="3.9"')
a = s.index('          <div id="s2-in2"')
b = s.index('</div>\n      </section>', a)
s = s[:a] + '''          <div id="s2-in2" class="abs" style="left: 84px; top: 880px; font-family: var(--body); font-weight: 900; font-size: 64px; letter-spacing: 6px; color: var(--eyebrow)">FROM JUST</div>
          <div id="q-card">
            <div id="q-row">
              <span id="q-dol" class="g">$</span>
              <span class="col" id="q-colA"><span class="strip" id="q-stripA"><b>0</b><b>1</b></span></span>
              <span id="q-dot" class="g">.</span>
              <span class="col" id="q-colB"><span class="strip" id="q-stripB"><b>0</b><b>1</b><b>2</b></span></span>
              <span id="q-m" class="g">M</span>
              <span id="q-star" class="g">*</span>
            </div>
          </div>
          <div id="s2-chip" class="chip" style="left: 84px; top: 1250px"><i class="dot"></i>2-BEDDER ENTRY PRICE*</div>
        ''' + s[b:]
rep('<!-- S3 4.30–8.13', '<!-- S3 5.30–8.62')
rep('id="s3" class="clip scene" data-start="4.3" data-duration="3.83"', 'id="s3" class="clip scene" data-start="5.3" data-duration="3.32"')
rep('<!-- S4 8.13–12.05', '<!-- S4 8.62–12.20')
rep('id="s4" class="clip scene" data-start="8.13" data-duration="3.92"', 'id="s4" class="clip scene" data-start="8.62" data-duration="3.58"')
rep('id="s4-k" class="abs" style="left: 84px; top: 300px;', 'id="s4-k" class="abs" style="left: 84px; top: 318px;')
rep('id="s4-k2" class="abs" style="left: 84px; top: 296px;', 'id="s4-k2" class="abs" style="left: 84px; top: 318px;')
rep('data-start="8.41" data-duration="2.14" data-track-index="4"', 'data-start="8.94" data-duration="2.0" data-track-index="4"')
rep('<!-- S5 END CARD 12.05–15.0 -->', '<!-- S5 END CARD 12.20–15.0 -->')
rep('id="s5" class="clip scene" data-start="12.05" data-duration="2.95"', 'id="s5" class="clip scene" data-start="12.2" data-duration="2.8"')
rep('id="s5-chip" class="chip" style="left: 248px; top: 300px"', 'id="s5-chip" class="chip" style="left: 248px; top: 318px"')

# captions follow the new VO word for word
a = s.index('      <div id="cap0"')
b = s.index('      <!-- whip panels')
caps = [
    (0, 1.38, [('Singapore', 0), ('homebuyers,', 0.657)]),
    (1.43, 1.26, [('get', 1.43), ('your', 1.705), ('dream', 1.876), ('property', 2.295)]),
    (2.714, 2.4, [('from', 2.714), ('just', 2.905), ('1.2', 3.143), ('million', 3.99), ('dollars.*', 4.43)]),
    (5.457, 0.75, [('Our', 5.457), ('team', 5.629), ('will', 5.914), ('pick', 6.019)]),
    (6.229, 0.95, [('new', 6.229), ('launch', 6.467), ('condos', 6.762)]),
    (7.2, 1.42, [('for', 7.2), ('your', 7.314), ('budget', 7.619), ('and', 7.952), ('needs.', 8.2)]),
    (8.695, 1.5, [('From', 8.695), ('1', 8.943), ('to', 9.19), ('4-bedders,', 9.305)]),
    (10.276, 1.0, [('2-bedders', 10.276), ('start', 10.771), ('from', 11.067)]),
    (11.305, 1.05, [('$1.2', 11.305), ('million.*', 11.838)]),
    (12.619, 1.5, [('Tap', 12.619), ('below', 12.848), ('to', 13.171), ('get', 13.248), ('started.', 13.429)]),
]
out = ''
for i, (st, dur, words) in enumerate(caps):
    sp = ''.join(f'<span data-w="{t}">{w}</span>' for w, t in words)
    out += f'      <div id="cap{i}" class="clip cap" data-start="{st}" data-duration="{dur}" data-track-index="3"><div class="bar">{sp}</div></div>\n'
s = s[:a] + out + '\n' + s[b:]

a = s.index('      <audio id="vo"')
b = s.index('    </div>\n\n    <script>')
s = s[:a] + '''      <audio id="vo" src="assets/voice-v2.mp3" data-start="0" data-duration="14.26" data-track-index="10" data-volume="1"></audio>
      <audio id="sx-p1" src="assets/sfx/pop.mp3" data-start="8.98" data-duration="0.72" data-track-index="12" data-volume="0.16"></audio>
      <audio id="sx-p2" src="assets/sfx/pop.mp3" data-start="9.14" data-duration="0.72" data-track-index="13" data-volume="0.16"></audio>
      <audio id="sx-p3" src="assets/sfx/pop.mp3" data-start="9.3" data-duration="0.72" data-track-index="14" data-volume="0.16"></audio>
      <audio id="sx-p4" src="assets/sfx/pop.mp3" data-start="9.46" data-duration="0.72" data-track-index="15" data-volume="0.16"></audio>
      <audio id="sx-imp" src="assets/sfx/impact-bass-1.mp3" data-start="11.84" data-duration="2.1" data-track-index="16" data-volume="0.28"></audio>
      <audio id="sx-clk" src="assets/sfx/click-soft.mp3" data-start="12.78" data-duration="0.36" data-track-index="17" data-volume="0.5"></audio>
''' + s[b:]

# timeline script: replaced wholesale
a = s.index('    <script>\n      window.__timelines')
b = s.index('    </script>', a) + len('    </script>')
s = s[:a] + open('tools/v2_timeline.js', encoding='utf8').read() + s[b:]
open('index.html', 'w', encoding='utf8').write(s)
print('ok')
