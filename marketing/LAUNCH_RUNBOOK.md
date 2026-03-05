# Launch Day Runbook - March 8th, 2026

**Launch:** ProductHunt @ 06:00 KST (21:00 UTC March 7th)

---

## ⏰ Timeline (KST)

### March 7th (토요일) - Prep Day
- [ ] **09:00** - Final build test (`npm run test` or run all formats)
- [ ] **10:00** - ProductHunt page submit (see PRODUCTHUNT_CONTENT.md)
  - Title: "Content Repurposer - Turn 1 blog post into 5 platform-ready posts in 60s"
  - Tagline: "AI-powered content repurposing: quality over quantity" (52 chars)
  - Upload screenshots (CLI output + quality scores)
  - Add first comment (founder comment template below)
  - Set schedule: **March 7th, 21:00 UTC (March 8 06:00 KST)**
- [ ] **14:00** - Preview link ready → share to beta users for pre-voting
- [ ] **20:00** - Rest. Sleep early.

### March 8th (일요일) - LAUNCH DAY

**Morning Sprint (06:00-12:00 KST)**
- [ ] **06:00** - Wake up, check ProductHunt page is live
- [ ] **06:05** - Post Show HN (see SHOW_HN_POST.md)
  - Title: "Show HN: Content Repurposer – 1 blog post → 5 platform-ready posts in 60s"
  - Post at HN peak: 06:00-08:00 KST (21:00-23:00 UTC)
- [ ] **06:10** - Post to r/indiehackers (see REDDIT_LAUNCH_POST.md)
- [ ] **06:15** - Post launch tweet (Version 1: Quality-Focused, see LAUNCH_TWEETS.md)
- [ ] **06:20** - Post to LinkedIn
- [ ] **06:30** - Post to r/SideProject
- [ ] **06:45** - Notify friends/network to upvote ProductHunt
- [ ] **07:00** - Reply to any early comments on HN/Reddit/PH

**Midday Monitor (12:00-18:00 KST)**
- [ ] Reply to ALL comments on ProductHunt (within 1 hour)
- [ ] Reply to ALL comments on HN (within 30 min)
- [ ] Monitor Reddit threads
- [ ] **14:00** - Post r/webdev thread (see REDDIT_LAUNCH_POST.md)
- [ ] **15:00** - Post to Dev.to (adapted version of HN post)
- [ ] **16:00** - Mid-day tweet update (how many upvotes, any interesting feedback)

**Evening Follow-up (18:00-24:00 KST)**
- [ ] **18:00** - Hacker News follow-up comment if active
- [ ] **20:00** - ProductHunt first comment update (thank early users)
- [ ] **22:00** - Post to dev.to / hashnode (full launch article)
- [ ] **23:59** - Final ProductHunt comment (recap of day)

---

## 📝 ProductHunt Founder Comment (First Comment)

Post this immediately after launch:

```
Hey ProductHunt! 👋

I'm 도균, the creator of Content Repurposer.

**Why I built this:**
I write technical content and spent 4-5 hours per week manually adapting each blog post for 
Twitter, LinkedIn, and newsletters. Every "content repurposing" tool I tried gave me 100 mediocre 
posts instead of 5 great ones. So I built my own.

**How it works (2 commands):**
1. `npm install -g content-repurposer`
2. `content-repurposer my-post.md --formats all`

60 seconds later → Twitter thread, LinkedIn post, newsletter section, TikTok script, Facebook post.
Each output is quality-scored (1-10). Anything below 7 auto-retries.

**Honest limitations:**
- CLI only (no web UI yet — tell me if that's a blocker)
- Requires Gemini API key (free tier works: ~10 repurposings/day)
- TikTok scripts score slightly lower (9/10 vs 10/10) — video scripting is harder

**Free tier:** 5 repurposings/month, no credit card
**Pro:** $29/month unlimited

Would love your feedback! What formats are missing? What would make this 10x better?

Thanks for checking it out 🙏
```

---

## 🏆 ProductHunt Badge URLs (add to README after launch)

```markdown
[![Featured on Product Hunt](https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=XXXXX&theme=light)](https://www.producthunt.com/posts/content-repurposer)
```

Replace `XXXXX` with actual post ID after launch.

---

## 🚨 Emergency Playbook

**If ProductHunt page gets rejected:**
- Submit to Uneed, Peerlist, AlternativeTo instead
- Double down on HN + Reddit

**If HN doesn't get traction (< 10 upvotes in 1 hour):**
- Don't resubmit (ban risk)
- Move focus to Reddit + Dev.to

**If CLI breaks on launch day:**
- Have repurposed/ folder ready with pre-generated examples
- Document the fallback clearly in README
- "Demo mode" flag: `--demo` (shows pre-generated output)

**If API is down (Gemini):**
- Implement basic fallback: return input reformatted with templates
- Notify users on Twitter/ProductHunt

---

## 📊 Success Metrics (End of Day 1)

| Metric | Target | Stretch |
|--------|--------|---------|
| ProductHunt upvotes | 50 | 200 |
| GitHub stars | 20 | 100 |
| HN upvotes | 20 | 100 |
| Free sign-ups | 10 | 50 |
| Pro conversions | 1 | 5 |
| Revenue | $29 | $145 |

**Minimum success:** 1 paying customer. Even $29 proves the concept.

---

## 💰 Revenue Collection (Stripe)

**Before launch, set up:**
1. Stripe account (stripe.com)
2. Product: "Content Repurposer Pro" - $29/month
3. Payment link (no code needed): stripe.com/payment-links
4. Add link to landing page (landing/index.html) and README

**Simpler alternative (Day 1):** Gumroad
- No-code setup
- Instant payment link
- Higher fees (10%) but launch NOW > perfect LATER

**Payment link placeholder:** `[ADD STRIPE/GUMROAD LINK HERE]`

---

## 📦 Pre-Launch Checklist (March 7th)

- [ ] `npm publish` (publish to npm registry)
  ```bash
  cd /srv/CLAW_WS/projects/content-repurposer
  npm login
  npm publish
  ```
- [ ] Test `npm install -g content-repurposer` on clean machine
- [ ] Verify GitHub repo is public
- [ ] README has install + usage instructions
- [ ] Demo output examples in `/examples/output/`
- [ ] Landing page is deployed (or at least GitHub Pages)
- [ ] Payment link exists (Stripe or Gumroad)
- [ ] ProductHunt page drafted (not yet submitted)

---

## 🌐 Landing Page Deploy Options

**Option A: Cloudflare Pages (recommended)**
```bash
cd /srv/CLAW_WS/projects/content-repurposer/landing
# Connect to Cloudflare Pages via dashboard
# Or: wrangler pages deploy . --project-name content-repurposer
```

**Option B: GitHub Pages**
- Push landing/ to gh-pages branch
- Enable in repo settings
- URL: q2lg42.github.io/content-repurposer

**Option C: Vercel (fastest)**
```bash
npx vercel /srv/CLAW_WS/projects/content-repurposer/landing
```

**Option D: Netlify Drop**
- Just drag & drop landing/ folder to netlify.com
- Instant deployment, no config needed

---

_Created: 2026-03-03 by 호떡 🥞_
_Status: READY - Execute starting March 7th_
