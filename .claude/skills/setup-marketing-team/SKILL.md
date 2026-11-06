---
name: setup-marketing-team
description: "One-time setup of GoMedia Marketing Assistance (the claude-marketing repo) on a new computer, written for non-technical users. Gets the files into Documents/claude-marketing (git or plain download, no git needed), checks the few tools that matter, shows which connections are on or missing, tells the user how to open the folder, and ends with ready-to-copy first prompts. Use when the user pastes the github.com/johnlamb-thesheep/claude-marketing link, or says 'set this up', 'download it', 'get it', 'install this', 'first time setup', 'continue setup', or 'I'm stuck with setup'."
license: MIT
metadata:
  author: setup-marketing-team
  version: "2.0.0"
---

# Set up GoMedia Marketing Assistance

The person running this is usually **not technical**. They pasted the GitHub link into Claude and said something like "set it up". Your job: get them from zero to their first useful request with as few questions as possible.

## How to talk during setup (rules)

- **Plain words only.** Never say git, clone, repo, MCP, CLI, env, .env, terminal, dependencies, PATH. Say "download", "folder", "connection", "app".
- **Start with a 1-line plan:** "I'll set this up in 4 short steps: download → quick check → connections → open the folder. Takes about 5 minutes."
- **Number every update:** "Step 1 of 4 — downloading GoMedia Marketing Assistance…", then "✓ Done".
- **One question at a time**, only when you truly need the user. Do everything you can yourself.
- **When the app asks them to approve something** (running a command, a permission), tell them before it pops up: "You'll see an *Allow* button — click it, this just downloads the files."
- **Never show raw errors.** Translate: "The download was blocked — let's try another way."
- **Skip anything optional.** Do NOT mention the facebook-ads skill, its Python packages, `.env` / `.env.example` files, the `/upload` command, or GitHub login. Those are for maintainers only.

## Step 1 of 4 — Download the files

Target folder: `Documents/claude-marketing` (on Windows: `C:\Users\<name>\Documents\claude-marketing`).

Pick the first route that works, silently:

1. **Already here?** If the current folder (or a parent) has `CLAUDE.md` and `.claude/agents/`, use it. If it's a git copy, update it (`git pull --rebase origin main`); if not, just use it as is.
2. **Already downloaded somewhere?** If `Documents/claude-marketing` exists:
   - git copy of this project → update it.
   - a plain copy of this project (has `CLAUDE.md`) → keep it.
   - anything else → **stop and ask** before touching it. Never overwrite or delete a folder.
   - Also check `Downloads/claude-marketing-main` (a ZIP someone unpacked) → offer to move it to `Documents/claude-marketing`.
3. **git available** → `git clone https://github.com/johnlamb-thesheep/claude-marketing.git "<Documents>/claude-marketing"`.
4. **No git** → download the ZIP and unpack it, no install needed:
   - Windows PowerShell: `Invoke-WebRequest https://github.com/johnlamb-thesheep/claude-marketing/archive/refs/heads/main.zip -OutFile $env:TEMP\cm.zip; Expand-Archive $env:TEMP\cm.zip $env:TEMP\cm -Force; Move-Item $env:TEMP\cm\claude-marketing-main "$HOME\Documents\claude-marketing"`
   - Mac: `curl -L -o /tmp/cm.zip https://github.com/johnlamb-thesheep/claude-marketing/archive/refs/heads/main.zip && unzip -q /tmp/cm.zip -d /tmp/cm && mv /tmp/cm/claude-marketing-main ~/Documents/claude-marketing`
   - Tell them: "This copy won't update itself. Later, just say 'update GoMedia Marketing Assistance' and I'll download the newest version."

Say: "✓ Step 1 done — the files are in Documents › claude-marketing."

## Step 2 of 4 — Quick check

Check quietly; only speak up about what's missing **and** what it affects:

| Check | Needed for | If missing |
|---|---|---|
| Node.js (`node --version`) | Video ads, static ads, dashboards | "Video ads need one free helper app (Node.js). Want me to install it?" — Windows: `winget install OpenJS.NodeJS.LTS`; Mac: point to nodejs.org. Only install after a yes. |
| Python (`python --version`) | Some reports | Mention only if missing; it's optional. |

Everything else works without these. If they say no, carry on: "No problem — everything except video ads works now. Say 'install the video helper' anytime."

## Step 3 of 4 — Connections

If you can check connection status, show a checklist; otherwise show the same list and ask them to look:

```
Connections (Claude app → Settings → Connectors):
✓ / ✗  Meta Ads        — needed: ad results, competitor ads
✓ / ✗  Google Drive    — recommended: read docs & sheets
✓ / ✗  Notion          — recommended: read & update GoMedia pages
✓ / ✗  Canva           — optional: design images
✓ / ✗  Claude in Chrome — optional: edit Google Sheets
```

Tell them: "Connect the ✗ ones you need — click **Connect** and sign in with your GoMedia account. You can do this later; it doesn't block anything else." Never ask for passwords or keys in chat.

## Step 4 of 4 — Open the folder (the step people miss)

This chat is **not** inside the folder yet, so GoMedia's rules and agents aren't loaded. Say exactly:

> **Last step:** start a new session in the folder.
> 1. Click **+ New session** (or the folder name at the top).
> 2. Choose **Documents › claude-marketing**.
> 3. Paste one of the prompts below.
>
> From now on, always open this folder — that's what turns Claude into GoMedia Marketing Assistance.

## Finish — first prompts

End with a short "You're set up ✓" and these copy-ready prompts (each in its own code block):

```text
What can you do for me? Give me 5 example requests for GoMedia.
```
```text
Write 5 Meta ad copies for LeadX seller leads.
```
```text
How did [agent name] ads do in the last 7 days vs the week before?
```

Then: "More prompts are on the Notion page *Gomedia Marketing Assistance*."

## If they get stuck

The user can say **"continue setup"** at any time — re-run from the first unfinished step (every step is safe to repeat).

| What they see / say | What you do |
|---|---|
| A command was blocked or they clicked Deny | "No problem. I'll ask again — click **Allow** this time, it only [downloads / checks …]." Retry once, then offer the ZIP route. |
| Download fails (network, company laptop) | Give them the manual way: open github.com/johnlamb-thesheep/claude-marketing → green **Code** button → **Download ZIP** → unzip into Documents → rename to `claude-marketing`. Then say "tell me when it's there". |
| "It answers like a normal chatbot / doesn't know GoMedia" | They're not in the folder. Repeat Step 4. |
| A connection won't connect | Try signing out/in of that connection; it's account-specific. Skip it and continue — only Meta Ads matters for ad results. |
| Anything else after 2 tries | Stop retrying. Summarise in one line what's done and what isn't, and say: "Send this message to John Lam and he'll sort it out." |

## Never

- Never install anything, overwrite a folder, or change settings without a clear yes.
- Never ask for or type passwords, API keys or tokens.
- Never run `/upload` or push changes for a non-technical user.
