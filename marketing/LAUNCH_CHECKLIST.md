# Launch Checklist - Content Repurposer

**Launch Date:** March 8th, 2026 (Monday, 06:00 KST)
**Status:** 🟡 D-5

---

## ✅ DONE (as of March 3rd)

### Product
- [x] CLI working (`node src/cli.js` or `content-repurposer` after install)
- [x] All 5 formats: Twitter, LinkedIn, Newsletter, TikTok, Facebook
- [x] Quality scoring (1-10, auto-retry if < 7)
- [x] Input parser: Markdown, HTML, plain text
- [x] --formats, --tone, --output, --model, --quality flags
- [x] --version, --help working
- [x] Colored terminal output (chalk)
- [x] 18 test cases passed (100% success rate, 9.8/10 quality)
- [x] package.json ready (version 1.0.0)

### Marketing Content
- [x] PRODUCTHUNT_CONTENT.md (full PH page draft)
- [x] LAUNCH_TWEETS.md (launch day tweets)
- [x] DEMO_RESULTS.md (test results)
- [x] EDGE_CASE_VALIDATION.md (edge case tests)
- [x] MARKETING_ASSETS_GUIDE.md (screenshot/GIF guide)
- [x] SHOW_HN_POST.md
- [x] REDDIT_LAUNCH_POST.md
- [x] LAUNCH_RUNBOOK.md
- [x] Hotteok blog post about launch
- [x] DEVTO_LAUNCH_ARTICLE.md ← NEW (D-5)
- [x] terminal-examples/cli-output-all-formats.txt ← NEW (D-5, real run: 54.5s, 9.6/10 avg)

### Infrastructure
- [x] waitlist-worker/ — Cloudflare Worker for email collection ← NEW (D-5)
  - KV-backed storage, duplicate check, position tracking, admin export
  - Deploy: `cd waitlist-worker && wrangler deploy`

### Website
- [x] Landing page (landing/index.html) - built
- [x] README.md - comprehensive

---

## 🔴 BLOCKING (Must-Have Before Launch)

### Payment (Day 4: March 5th)
- [ ] Set up Stripe account OR Gumroad account
- [ ] Create payment link: "Content Repurposer Pro - $29/month"
- [ ] Add payment link to landing/index.html (replace `#pricing` button)
- [ ] Add payment link to README.md
- [ ] Test checkout flow (buy and refund immediately)

### NPM Publish (Day 5: March 6th)
- [ ] `npm login` (npm account needed)
- [ ] `npm publish --dry-run` (verify what gets published)
- [ ] `npm publish` (publish to registry)
- [ ] Test: `npm install -g content-repurposer` on clean environment
- [ ] Verify `content-repurposer --version` works after global install

### ProductHunt Page (Day 6: March 7th)
- [ ] Create ProductHunt account (if needed)
- [ ] Fill in page using PRODUCTHUNT_CONTENT.md
- [ ] Upload 3-5 screenshots (see below)
- [ ] Schedule for March 8th, 00:01 UTC
- [ ] Get preview link, share with network for day-1 upvotes

### Landing Page Deploy (Day 5-6)
- [ ] Deploy landing/index.html to live URL
  - Option A: Cloudflare Pages (preferred)
  - Option B: GitHub Pages
  - Option C: Netlify Drop (fastest, drag-drop)
- [ ] Add custom domain (optional for launch)

---

## 🟡 IMPORTANT (Should-Have)

### Screenshots (Day 4-5: March 5-6th)
Terminal screenshots for ProductHunt gallery:

1. **CLI Running** - `node src/cli.js examples/test-short.md --formats all`
   - Capture: full terminal with progress indicators
   - Save as: marketing/screenshots/cli-running.png

2. **Quality Scores** - output showing "✅ 9.8/10" scores
   - Capture: format summary at end
   - Save as: marketing/screenshots/quality-scores.png

3. **Twitter Output** - first 10 tweets of thread
   - Capture: repurposed/twitter.txt
   - Save as: marketing/screenshots/twitter-output.png

4. **Before/After** - side by side (input vs output)
   - Use a split-screen tool
   - Save as: marketing/screenshots/before-after.png

**Tool for terminal screenshots:**
```bash
# Install carbon-now-cli for beautiful terminal screenshots
npm install -g carbon-now-cli

# Generate screenshot
carbon-now-cli marketing/terminal-examples/cli-output-short.txt

# Or use termshot
npm install -g termshot
```

### Demo GIF (Day 5-6)
```bash
# Use terminalizer
npm install -g terminalizer
terminalizer record demo
terminalizer render demo
```

Or use existing terminal-examples/cli-output-*.txt files to create static screenshots.

---

## 🟢 NICE-TO-HAVE (Post-Launch OK)

- [ ] Demo video (2-3 min)
- [ ] Web UI (Next.js)
- [ ] Stripe subscription management
- [ ] API documentation
- [ ] Parallel format generation (54s → 15s)
- [ ] YouTube/podcast input

---

## 📅 Day-by-Day Schedule

| Day | Date | Key Tasks |
|-----|------|-----------|
| D-5 | March 3 (Today) | ✅ Marketing posts written (Show HN, Reddit, blog) |
| D-4 | March 4 | Stripe/Gumroad setup + payment link live |
| D-3 | March 5 | Screenshots + npm publish dry-run |
| D-2 | March 6 | ProductHunt page setup + npm publish |
| D-1 | March 7 | Community warm-up + final testing |
| D-0 | March 8 | 🚀 LAUNCH |

---

## 🔗 Links to Complete

| Item | Status | Link |
|------|--------|------|
| GitHub repo | ✅ | https://github.com/q2lg42/content-repurposer |
| npm package | ⏳ | https://www.npmjs.com/package/content-repurposer |
| Landing page | ⏳ | TBD |
| ProductHunt | ⏳ | TBD |
| Payment link | ⏳ | TBD |

---

_Updated: 2026-03-03 21:10 KST by 호떡 🥞 (autonomous loop)_
