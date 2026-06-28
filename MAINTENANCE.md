# 🥖 Crust — Maintenance Playbook

> A day-to-day reminder for keeping Crust alive, growing, and respected as an open-source project.
>
> Open-source projects die from neglect, not from bugs. This doc exists so that never happens to Crust.

---

## 📅 The cadence at a glance

| Frequency | Time | What |
|-----------|------|------|
| **Daily** | 10 min | Triage issues & PRs, reply to discussions, check star count |
| **Weekly** | 1 hour | Merge good PRs, close stale issues, ship one small improvement |
| **Monthly** | 2–3 hours | Ship a release (v1.x), audit roadmap, write a progress update |
| **Quarterly** | Half day | Major release planning, contributor recognition, strategy review |

---

## ☀️ Daily (10 minutes)

> The single most important habit. Show up every day, even if just to say "seen."

### 1. Triage new issues (5 min)
- Go to https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/issues
- For each new issue:
  - **Label it** — `bug`, `enhancement`, `component-request`, `question`, `good first issue`
  - **Reply** — even if just "Thanks, looking into this." Silence kills OSS.
  - **Close** duplicates and support questions that belong on Stack Overflow
- Goal: **zero unlabeled issues older than 24 hours**

### 2. Review new PRs (3 min)
- Go to https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/pulls
- For each new PR:
  - Acknowledge within 24 hours — even if you can't review yet
  - Run a quick sanity check: does it follow the 6 rules in CONTRIBUTING.md?
  - If the PR is good but small, merge it. If large, schedule a deeper review.

### 3. Check star count + discussion (2 min)
- Glance at the repo — are stars growing? Stalling?
- Reply to any new discussions at https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/discussions

> 💡 **Pro tip:** Turn on GitHub notifications for the repo (Watch → Custom → Issues, Pull requests, Discussions). Reply from your email — don't make yourself open the browser.

---

## 🗓️ Weekly (1 hour, e.g. Saturday morning)

### 1. Ship one small thing (30 min)
Pick **one** of these each week:
- Add **one new component** (#101, #102, …) to the next category that needs growth
- Fix **one bug** from the issue tracker
- Improve **one doc section** (README, CONTRIBUTING, Docs view)
- Audit **one category** for `prefers-reduced-motion` compliance
- Add **one Playwright visual regression test**

The compound effect is the point. 1 component/week = 52/year = the library doubles in a year.

### 2. Close stale issues (10 min)
- Use the `stale` label workflow (or do it manually)
- Auto-close issues with no activity for 30 days after a "Is this still relevant?" comment
- Be kind — "Closing as stale, please reopen if still an issue" beats silent closure

### 3. Merge ready PRs (15 min)
- Deep-review any PR that's been waiting
- Use GitHub's suggestion feature to request small changes
- Thank the contributor publicly in the merge commit message

### 4. Update the project board (5 min)
- If you use GitHub Projects, move cards to reflect reality
- Update the roadmap section in README.md if priorities shifted

---

## 📆 Monthly (2–3 hours, last weekend of the month)

### 1. Ship a release (1 hour)
- Pick a version: patch (`v1.0.x`) for bugfixes, minor (`v1.x.0`) for new components
- Write release notes (copy the v1.0.0 format — emojis, tables, highlights)
- Tag and push:
  ```bash
  git tag -a v1.x.0 -m "Crust v1.x.0 — <catchy name>"
  git push origin v1.x.0
  ```
- Create the release via GitHub UI or API with full notes
- Tweet / post about it: "🥖 Crust v1.x.0 is out — <headline feature>"

### 2. Audit the roadmap (30 min)
- Open README.md → Roadmap section
- Check off completed items
- Add new items based on issue trends
- Reorder by priority

### 3. Write a progress update (30 min)
- Post in GitHub Discussions under "Announcements"
- Format: "🥖 Crust Monthly — <Month> <Year>"
- Include: new components shipped, PRs merged, star count delta, what's next
- This is what makes contributors feel seen and users feel the project is alive

### 4. Dependency audit (30 min)
- Run `bun update` and check for breaking changes
- Update Next.js, React, Tailwind, Radix UI if new minors are out
- Run `bun run lint` and `bun run build` to verify nothing broke
- Commit with `chore(deps): update <package> to <version>`

---

## 📊 Quarterly (half day, every 3 months)

### 1. Major release planning
- Decide if a major version (v2.0.0) is warranted
- Break it into minor releases across the quarter
- Example Q3 plan: v1.1 (Forms), v1.2 (Data tables), v1.3 (Charts), v2.0 (Standalone npm package)

### 2. Contributor recognition
- Identify the top 3–5 contributors from the past quarter
- Mention them in the quarterly blog post / discussion
- Consider adding them as collaborators if they've shipped multiple quality PRs
- Send a personal thank-you (DM, email) — it matters more than you think

### 3. Strategy review
- Is the "crust method" still serving the library? Adjust the 6 rules if needed.
- Are there new CSS features (e.g. `:has()`, container queries, Houdini) to adopt?
- Is the design system still fresh, or is it starting to feel dated?
- Look at what other component libraries shipped this quarter — steal good ideas, ignore the slop

### 4. Marketing push
- Write a blog post on dev.to or Medium: "Building Crust — <lesson learned>"
- Post a demo GIF on Twitter/X, Hacker News, Reddit r/webdev
- Submit to https://css-tricks.com/, https://tympanus.net/codrops/, design newsletters
- Each quarterly push typically yields 50–200 new stars

---

## 🚨 Non-negotiable rules

1. **Never go 7 days without replying to an issue.** Silence is the slow death.
2. **Never merge a PR that violates the 6 rules in CONTRIBUTING.md.** The discipline is the product.
3. **Never ship a release without running `bun run lint && bun run build`.** Broken builds erode trust.
4. **Never delete the README's "Star this repo" ask.** Stars are the OSS economy.
5. **Never let the roadmap go stale.** A dead roadmap signals a dead project.

---

## 🧰 Useful commands

```bash
# Daily
git pull origin main                          # sync before anything
bun run dev                                   # local preview
bun run lint                                  # must be clean

# Weekly
git checkout -b feat/buttons-<name>           # new component branch
git add -A && git commit -m "feat(buttons): add <Name> (#1NN)"
git push origin feat/buttons-<name>           # open PR

# Monthly (release day)
git tag -a v1.x.0 -m "Crust v1.x.0 — <name>"
git push origin v1.x.0
# then create release via GitHub UI or API

# Quarterly (deps)
bun update
bun run lint && bun run build
git commit -am "chore(deps): quarterly update"
```

---

## 📈 Metrics to watch

| Metric | Where to check | Healthy signal |
|--------|----------------|----------------|
| Stars | Repo page | +5–20/week after marketing pushes |
| Open issues | Issues tab | < 20 open, < 5 unlabeled |
| Open PRs | PRs tab | < 5 waiting > 7 days for review |
| Release cadence | Releases page | At least 1 release/month |
| Contributors | Insights → Contributors | Growing slowly is fine; shrinking is a red flag |
| Clone count | Insights → Traffic | Tells you real usage (not just star-bait) |
| Referrers | Insights → Traffic | Where your traffic comes from — double down on what works |

---

## 🎯 Year-one goals (north stars)

- [ ] **150 components** (50 more than v1.0.0)
- [ ] **1,000 stars** (the threshold where OSS becomes self-sustaining)
- [ ] **10+ external contributors** who've shipped at least one merged PR
- [ ] **Standalone `crust-css` npm package** (the roadmap item)
- [ ] **Figma library** mirroring every component
- [ ] **One conference talk** about the "crust method"

---

## 📝 The weekly reminder (copy this to your calendar)

> **Subject:** 🥖 Crust weekly maintenance
>
> 1. Triage new issues & PRs (https://github.com/huzaifaa-dev-vibe/100CSS-CRUST/issues)
> 2. Ship one small thing (component, bugfix, or doc)
> 3. Close stale issues
> 4. Update project board
>
> Timebox: 1 hour. Showing up matters more than shipping big.

---

<div align="center">

**Built with ink, paper, and a little rust.** ✶

Maintained by [huzaifaa-dev-vibe](https://github.com/huzaifaa-dev-vibe)

</div>
