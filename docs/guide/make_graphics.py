# Builds the guide graphics (HTML) for the "GoMedia Marketing Assistance" Notion page.
# Render each to PNG with: msedge --headless --screenshot=<name>.png --window-size=1280,<h> <name>.html
import os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

HEAD = ('<meta charset="UTF-8"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600;700'
        '&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="base.css">')
S = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'
P = {
    "APP": '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/>',
    "CHAT": '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    "OK": '<path d="M12 3.5l7 3v5.3c0 4.4-3 7.3-7 8.7-4-1.4-7-4.3-7-8.7V6.5z"/><path d="M9 12l2 2 4-4.2"/>',
    "SEARCH": '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    "TARGET": '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".8"/>',
    "PEN": '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    "IMG": '<rect x="3.5" y="4.5" width="17" height="15" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M20 16l-5-5-8 8"/>',
    "VID": '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M10.5 9.5v5l4-2.5z"/>',
    "PAGE": '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 8.5h17M7 12.5h10M7 16h6"/>',
    "CHART": '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    "DASH": '<rect x="3.5" y="3.5" width="7" height="8" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.5"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.5"/><rect x="3.5" y="14.5" width="7" height="6" rx="1.5"/>',
    "SPARK": '<path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5z"/>',
    "LOCK": '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 018 0v3"/>',
    "LINK": '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    "COIN": '<circle cx="12" cy="12" r="8"/><path d="M14.5 9.5c-.5-1-1.4-1.5-2.5-1.5-1.5 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1 2-2.5 2c-1.1 0-2-.5-2.5-1.5M12 6.5v11"/>',
    "STOP": '<circle cx="12" cy="12" r="8"/><path d="M6.5 6.5l11 11"/>',
}
I = {k: S + v + "</svg>" for k, v in P.items()}
ARROW = ('<div class="arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
         'stroke-width="1.8" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>')
EB = '<p class="eyebrow">GoMedia Marketing Assistance</p>'
LBL = ('.lbl{text-align:center;font-family:var(--mono);font-size:12px;color:var(--ink-faint);'
       'margin:0 0 12px;letter-spacing:.08em;text-transform:uppercase}')


def card(icon, h, p, o="", num=None, extra=""):
    n = f'<div class="num">{num}</div>' if num else ""
    return f'<div class="card">{n}<div class="ic{o}">{I[icon]}</div><h3>{h}</h3><p>{p}</p>{extra}</div>'


def page(title, style, body):
    return f"{HEAD}<title>{title}</title><style>{style}</style><div class=\"stage\">{EB}{body}</div>"


files = {}

says = ["Write 5 ad copies for LeadX seller leads", "Make a new launch video for Hougang Central",
        "How did Jared Tan’s ads do last week?", "Which ads are tired and need replacing?",
        "Give me an image prompt for a Thomson Reserve ad", "Add a dashboard for a new agent"]
files["10-how-to-use"] = page(
    "How to use",
    ".steps{display:grid;grid-template-columns:1fr 56px 1fr 56px 1fr;margin-bottom:30px}"
    ".steps .card{text-align:center;padding:26px 22px}.steps .ic{margin:0 auto 12px}"
    ".say{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:980px;margin:0 auto}"
    ".b{background:var(--surface);border:1px solid var(--line);border-radius:16px 16px 16px 4px;padding:10px 14px;font-size:14px}" + LBL,
    '<h1>How to use it</h1><p class="lede">Talk to it like a colleague. It does the work, then waits for your OK.</p>'
    '<div class="steps">'
    + card("APP", "Open Claude", "Claude desktop app → Code tab → open the <b>claude-marketing</b> folder", num=1) + ARROW
    + card("CHAT", "Ask in plain words", "Say the client, the project or agent, and what you need", num=2) + ARROW
    + card("OK", "Check and approve", "It shows the result and asks before anything goes live or costs money", " o", num=3)
    + '</div><p class="lbl">Things you can say</p><div class="say">'
    + "".join(f'<span class="b">“{t}”</span>' for t in says) + "</div>")

tiles = [("SEARCH", "Research", "Competitor ads, projects and market trends", ""),
         ("TARGET", "Strategy", "Who to target and which angle to test", ""),
         ("PEN", "Ad copy", "Headlines and captions in GoMedia / GoAhead style", ""),
         ("IMG", "Static ads", "Text-based ads made directly, image prompts for photo designs", ""),
         ("VID", "Video ads", "15s vertical videos from a voiceover, with captions and maps", " o"),
         ("PAGE", "Landing pages", "Page copy and a working page", ""),
         ("OK", "Checking", "Brand, Meta policy and Singapore rules, before launch", ""),
         ("CHART", "Results", "Cost per lead, which ads to stop, keep or scale", ""),
         ("DASH", "Dashboards", "A live ads dashboard for every agent", " o")]
files["11-what-it-can-do"] = page(
    "What it can do", ".grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}",
    '<h1>What it can do</h1><p class="lede">One assistant for the whole ad process, from idea to results.</p>'
    '<div class="grid">' + "".join(card(*t) for t in tiles) + "</div>")

pills = ('<div style="display:flex;gap:8px;justify-content:center;margin-top:10px">'
         '<span class="pill">Gemini</span><span class="pill">Canva</span></div>')
files["12-limits"] = page(
    "Limits",
    ".flow{display:grid;grid-template-columns:1fr 50px 1fr 50px 1fr 50px 1fr;margin-bottom:34px}"
    ".flow .card{text-align:center}.flow .ic{margin:0 auto 12px}"
    ".pill{font-family:var(--mono);font-size:12px;border-radius:999px;padding:4px 10px;background:var(--accent-soft);color:var(--accent);font-weight:600}"
    ".limits{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.limits .card{padding:18px}"
    ".limits .ic{background:var(--warn-soft);color:var(--accent-2);width:36px;height:36px}" + LBL,
    "<h1>What it can’t do, and the workaround</h1>"
    '<p class="lede">It can’t create images with photos itself. That needs a separate image tool, so it hands you the prompt.</p>'
    '<p class="lbl">Need a design with images?</p><div class="flow">'
    + card("CHAT", "Ask for the prompt", "“Give me an image prompt for…”") + ARROW
    + card("PEN", "Claude writes it", "Layout, text, colours and brand rules") + ARROW
    + card("SPARK", "Make the image", "Paste the prompt into an image tool", " o", extra=pills) + ARROW
    + card("IMG", "Finished ad", "Send it back to Claude to check before launch")
    + '</div><p class="lbl">Also good to know</p><div class="limits">'
    + card("STOP", "Won’t launch alone", "Nothing goes live or spends money without your OK")
    + card("LOCK", "No passwords", "You sign in and paste keys yourself")
    + card("LINK", "Only what’s connected", "An agent’s ad account must be shared with GoMedia first")
    + card("COIN", "Uses credits", "One clear request is cheaper than many small ones") + "</div>")


def src(icon, h, st, cls, p):
    return (f'<div class="card src"><div class="top"><div class="ic">{I[icon]}</div>'
            f'<span class="st {cls}">{st}</span></div><h3>{h}</h3><p>{p}</p></div>')


files["13-connected"] = page(
    "Connected",
    ".hub{background:var(--hub-bg);color:var(--hub-fg);border-radius:16px;padding:18px 30px;text-align:center;width:440px;margin:0 auto 36px;box-shadow:0 10px 30px rgba(0,0,0,.12)}"
    ".hub b{font-size:20px}.hub div{font-family:var(--mono);font-size:12px;opacity:.8;margin-top:4px}"
    ".row{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}.src{padding:18px}"
    ".top{display:flex;justify-content:space-between;align-items:flex-start}"
    ".st{font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:6px;padding:3px 7px}"
    ".on{background:var(--accent-soft);color:var(--accent)}.part{background:var(--warn-soft);color:var(--accent-2)}.off{background:#efece6;color:var(--ink-faint)}",
    "<h1>What it’s connected to</h1><p class=\"lede\">It can only use the tools and accounts that are switched on for it.</p>"
    '<div class="hub"><b>GoMedia Marketing Assistance</b><div>reads · writes · reports</div></div><div class="row">'
    + src("CHART", "Meta ads", "CONNECTED", "on", "Ad results and competitor ads, for every account shared with GoMedia")
    + src("PAGE", "Google Drive", "CONNECTED", "on", "Reads docs and sheets")
    + src("DASH", "Notion", "CONNECTED", "on", "Reads and updates pages like this one")
    + src("APP", "Sheet editing", "VIA CHROME", "part", "Writes into Google Sheets through your signed-in Chrome")
    + src("IMG", "Canva", "SWITCH ON", "off", "Can design in Canva once the connection is turned on") + "</div>")

for name, html in files.items():
    with open(name + ".html", "w", encoding="utf-8") as f:
        f.write(html)
print(", ".join(files))
