# Indie Hackers Launch Post - Content Repurposer

**Platform:** Indie Hackers (indiehackers.com)
**Post Date:** March 8, 2026 (Launch Day)
**Best Time:** 09:00-12:00 KST (UTC 00:00-03:00) — right after ProductHunt/HN posts
**Created:** 2026-03-03 by 호떡 🥞

---

## Option A: Product Launch Post

**Title:** I built a CLI that turns 1 blog post into 5 platform-ready posts in 60 seconds (and it scores the quality automatically)

**Body:**

Hey IH! I want to share what I've been building for the past 7 days.

**The problem I was solving:**

Writing blog posts is hard enough. Then you have to adapt each post for:
- Twitter (thread format, hook-first)
- LinkedIn (professional tone, no thread)
- Newsletter (scannable, CTA-driven)
- TikTok (script with visual cues)
- Facebook (conversational, short)

Each platform has different norms. Each takes 1-2 hours to do right. I was spending 5+ hours per week on content repurposing instead of writing.

**What I built:**

[Content Repurposer](https://github.com/p4r4d0xb0x/content-repurposer) — a Node.js CLI that:

1. Takes any blog post (Markdown, HTML, plain text)
2. Generates all 5 platform-specific versions
3. Scores each output 1-10 across 5 quality dimensions
4. Auto-retries anything below 7/10
5. Saves publish-ready files in ~54 seconds

```bash
npm install -g content-repurposer
export GEMINI_API_KEY=your_key_here
content-repurposer my-blog-post.md -f all
```

**The quality system is the real differentiator:**

Most AI content tools optimize for quantity ("100 posts from 1 blog!"). Content Repurposer optimizes for quality — 5 posts you can actually publish, scored across:

- Platform adaptation (tone, format, length)
- Content preservation (key points intact)
- Engagement potential (hooks, structure)
- Tone consistency (matches your voice)
- Format compliance (fits platform limits)

Current performance: **9.8/10 average** across 18 test cases. I tested edge cases — short inputs, long inputs, code-heavy posts, list-heavy content, mixed formats.

**Real output example (293-word input → 5 formats, 51.9 seconds):**

```
Format summary:
  • twitter:     2,316 chars (quality: 10/10)
  • linkedin:    2,595 chars (quality: 10/10)
  • newsletter:  2,376 chars (quality: 10/10)
  • tiktok:      2,536 chars (quality:  9/10)
  • facebook:    1,366 chars (quality: 10/10)
```

**Pricing:**
- Free: 5 repurposings/month
- Pro: $29/month unlimited

**Tech stack:** Node.js 18+, Gemini 2.5 Flash, Commander.js, MIT license

**Why I'm sharing this on IH:**

This is my first micro-SaaS. I pivoted once (from "Context Logger" — a different tool — to this), validated the market, and built the MVP in 7 days. I want to be transparent about the process.

The thing that surprised me most: the quality scoring system is what makes it actually useful. Without it, you'd just get another "AI content spam" tool.

Happy to answer questions about the build, the quality system, or the business model. AMA!

— 도균 (launched from a Raspberry Pi 5b, assisted by an AI agent named 호떡 🥞)

**Links:**
- GitHub: https://github.com/p4r4d0xb0x/content-repurposer
- ProductHunt: [link on launch day]
- Landing page: [TBD]

---

## Option B: "I'm building" Post (Community Thread Style)

**Title:** Day 7 of building Content Repurposer: from idea to launch-ready MVP (what worked, what didn't)

**Body:**

Seven days ago I decided to build a micro-SaaS. Here's what happened.

**Day 1-2: Pivot**

I had a different tool (Context Logger — Git-based AI context tracking). After 72 hours of zero traction, I pivoted to Content Repurposer based on market research.

The signal was clear: AI content repurposing is a top-trending micro-SaaS category in 2026. But most tools are video-first. Text-heavy creators (blog writers, newsletter authors) are underserved.

**Day 3-5: Build**

Core loop was simple:
1. Parse input (Markdown/HTML/text)
2. Generate per-platform with format-specific prompts
3. Score quality (1-10), retry if < 7
4. Save output files

The hard part wasn't the AI — it was the quality scoring. I wrote 5 rubrics for 5 platforms. Tuning them to correlate with "would I actually publish this?" took 2-3 days.

**Day 6-7: Polish & Prep**

- 18 edge case tests: all passed at 9.0+ quality
- README written
- Landing page deployed
- ProductHunt content written
- This post

**What worked:**
- Gemini 2.5 Flash > GPT-4 for this task (3x faster, 5x cheaper, equal quality)
- Quality scoring = key differentiator (not just another "AI content generator")
- Build in public from day 1 = accountability + feedback loop

**What didn't:**
- First pivot was painful (sunk cost feeling is real)
- Initial test cases surfaced quality issues that needed prompt tuning
- TikTok scripts are harder to score than text formats (video-scripting quality is subjective)

**The metrics:**

| Metric | Result |
|--------|--------|
| Build time | 7 days |
| Test cases | 18/18 passed |
| Avg quality | 9.8/10 |
| Launch prep | 5 days (March 3-8) |
| First revenue | TBD (March 8) |

**Today:** Launching on ProductHunt + HN + Reddit.

If you're building something in the content space or using AI APIs, I'd love to hear what you think of the quality-over-quantity angle.

[GitHub](https://github.com/p4r4d0xb0x/content-repurposer) | [ProductHunt: TBD]

---

## Option C: Milestone Post

**Title:** Milestone: CLI live, 18/18 tests passing, launching March 8

**Short IH Milestone Format:**

**Progress:** $0 → (hopefully) first $29

Just shipped the MVP for Content Repurposer after 7 days of building.

What it does: Turn 1 blog post → 5 platform-ready posts in 60 seconds.

Why it might work:
- Quality scoring system (not just AI spam)
- Text-first (90%+ of market is video-focused)
- $29/mo vs $119-399/mo for alternatives

Launching March 8th on ProductHunt. Free tier: 5/month.

GitHub: https://github.com/p4r4d0xb0x/content-repurposer

---

## Strategy Notes

**Which option to post:**
- **Option A** = most likely to drive traffic + comments (detailed, concrete)
- **Option B** = IH loves process stories, good for community engagement
- **Option C** = fastest to post, lower engagement

**Recommendation:** Post Option A on launch day. Option B as a follow-up 1 week later.

**IH Community Rules:**
- Personal experience > generic advice
- Include real numbers
- Be honest about limitations (IH community respects transparency)
- Respond to every comment within 24h

**Expected outcome:**
- 100-300 views first week
- 5-20 comments
- 2-5 referral signups

---

_Created: 2026-03-03 20:00 KST by 호떡 🥞_
_For launch use on March 8, 2026_
