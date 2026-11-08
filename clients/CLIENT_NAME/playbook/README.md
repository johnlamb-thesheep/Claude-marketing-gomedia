# CLIENT_NAME playbook

Everything specific to this client lives in this folder: copy rules, the design of each ad type, video style, targets and how the work runs. The agents and skills in `.claude/` are shared by every client and only say *how* to do a job. **When a skill and this playbook disagree, the playbook wins.**

Read `../brand.md` and `../learnings.md` as well.

## Which file to read

| Job | Read |
|---|---|
| Any static ad | `static-ads.md` |
| Videos | `video.md` |
| CPL target, campaign filter, alerts | `targets.md` |
| How the work runs, folders, where finished work is filed | `workflow.md` |

## Always true for CLIENT_NAME

_(TBD: brand name used in ads, audience, price wording, words to never use.)_

## Adding a rule

When the user gives new feedback for this client, add it to the right file here, with the date. Don't put client rules in a skill, an agent file or Claude's memory.
