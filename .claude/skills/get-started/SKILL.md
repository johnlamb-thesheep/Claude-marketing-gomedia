---
name: get-started
description: First-time setup of the Marketing Agent Team for non-technical users who unzipped it on their computer. Checks the folder is in a good place, checks the few tools that matter, shows which connections are on or missing, sets up their first client from the template, and ends with ready-to-copy first prompts. Use when the user says "set this up", "get started", "first time setup", "continue setup", "I'm stuck with setup", or "add my first client".
---

# Get started (plain language)

The user may not be technical. Short messages, one step at a time, no jargon, never ask them to type commands. Say "✓ Step N done" after each step. Every step is safe to repeat; "continue setup" resumes at the first unfinished one.

## Step 1 of 5: The folder

- Check where this folder is. If it's inside Downloads or a temporary/unzip folder, suggest moving it to **Documents** (offer to do it; only on a yes) and keep its name, e.g. `Claude-Marketing-agent-john-lam` or a name they prefer.
- If the folder name ends in `-main` or `-v1.0` (from the ZIP), offer to rename it to something simple.

## Step 2 of 5: Quick check

Check quietly; only mention what's missing and what it affects.

| Check | Needed for | If missing |
|---|---|---|
| Python (`python --version`) | Reports, updates (`update my agents`) | Windows: `winget install Python.Python.3.12`; Mac: python.org. Only install after a yes. |
| Node.js (`node --version`) | Video ads and image renders | Windows: `winget install OpenJS.NodeJS.LTS`; Mac: nodejs.org. Only after a yes. |

Everything else works without them. Don't set up the big video studio (OpenMontage) now; the video-designer offers it when a job needs it.

## Step 3 of 5: Connections

Show this list (✓/✗ if you can check, otherwise ask them to look in Claude app → Settings → Connectors):

```
Meta Ads          — needed: ad results, competitor ads
Google Drive      — recommended: read docs & sheets
Notion            — optional: file finished work
Canva             — optional: design images
Claude in Chrome  — optional: use websites for you
```

"Connect the ones you need with **Connect** and sign in. You can do it later." Never ask for passwords, keys or tokens.

## Step 4 of 5: Your first client

Ask: the client's name (or their own business), what they sell, to whom, and the Meta ad account they advertise from (and, if that account runs ads for other clients too, a word that is in this client's campaign names).

1. Copy `clients/CLIENT_NAME/` to `clients/<short-client-name>/` (lowercase, dashes).
2. Fill in what they told you in `brand.md` (leave the rest as TBD) and in `playbook/targets.md`.
3. Add the client to `clients/CLIENTS.md` (name, one line on what they sell, ad account, campaign filter).
4. Say: "The strategist can fill in the rest of the brand file with you anytime. Say 'set up the brand for <client>'."

## Step 5 of 5: Open the folder (the step people miss)

If this chat wasn't started inside the folder, the team isn't loaded yet:

> **Last step:** start a new session in the folder.
> 1. Click **+ New session** (or the folder name at the top).
> 2. Choose this folder in **Documents**.
> 3. Paste one of the prompts below.
>
> Always open this folder: that's what turns Claude into your Marketing Agent Team.

## Finish: first prompts

"You're set up ✓", then each in its own code block:

```text
What can you do for me? Give me 5 example requests.
```
```text
Write 5 Meta ad copies for <client> to get more leads.
```
```text
How did <client>'s ads do in the last 7 days vs the week before?
```

Then: "When you get a new version, download the ZIP and say **update my agents**. Your clients and work stay as they are."

## If they get stuck

| What they see / say | What you do |
|---|---|
| A command was blocked or they clicked Deny | "No problem, I'll ask again. Click **Allow** this time; it only [checks / installs …]." Retry once. |
| "It answers like a normal chatbot" | They're not in the folder. Repeat Step 5. |
| A connection won't connect | Sign out and in of that connection. Skip it and continue; only Meta Ads matters for ad results. |
| Anything else after 2 tries | Stop retrying. One line on what's done and what isn't, and suggest they send that line to whoever sold them the team. |

## Never

- Never install anything, move or overwrite a folder, or change settings without a clear yes.
- Never ask for or type passwords, API keys or tokens.
- Never push to GitHub for them unless they ask.
