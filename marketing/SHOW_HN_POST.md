# Show HN: Content Repurposer – 1 blog post → 5 platform-ready posts in 60s

**Target:** Hacker News "Show HN"
**Post Date:** March 8th, 2026 (Launch Day)
**Best Time to Post:** 09:00-11:00 EST (22:00-24:00 KST)

---

## Title Options (pick shortest that works)

1. `Show HN: Content Repurposer – Turn one blog post into Twitter/LinkedIn/newsletter in 60s`
2. `Show HN: I built an AI CLI to repurpose blog posts into 5 formats (open source, MIT)`
3. `Show HN: Content Repurposer – 1 input → Twitter thread, LinkedIn, newsletter, TikTok, Facebook`

**Recommended:** Option 1 (specific, numbers-driven)

---

## Post Body

```
Hi HN! I built Content Repurposer [1], a CLI tool that turns one blog post into 5 platform-ready 
formats in under 60 seconds.

**The Problem**

I kept writing technical blog posts and then spending 4-5 hours manually adapting them for Twitter 
threads, LinkedIn posts, and newsletters. Most AI tools either:
- Focus on video content (useless for text-heavy blogs)
- Give you 100 mediocre posts instead of 5 good ones
- Charge $100+/mo for what should be a simple transformation

**What It Does**

Takes any Markdown/text file and generates:
- Twitter thread (10-15 tweets, hooks & CTAs)
- LinkedIn post (300-500 words, professional tone)
- Newsletter section (email-friendly, scannable)
- TikTok/Reels script (30-60 sec with visual cues)
- Facebook post (casual, engagement-optimized)

Each output is scored 1-10. Anything below 7 gets auto-retried. Average: 9.8/10 across 18 test cases.

**Quick Start**

    npm install -g content-repurposer
    export GEMINI_API_KEY=your_key  # free tier works
    content-repurposer my-post.md --formats all

**Why Gemini 2.5 Flash?**

Fastest inference at acceptable quality. Full post → 5 formats in ~54 seconds. GPT-4 was 3x slower 
and 5x more expensive for equivalent quality. Gemini Flash free tier handles ~10 repurposings/day.

**Tech Stack**

- Node.js 18+ / Commander.js CLI
- Gemini 2.5 Flash API (Generative AI SDK)
- Quality scoring: 5 dimensions × format-specific rubrics
- MIT license

**Honest Limitations**

1. Output is good but not perfect — you'll spend ~5-10 min reviewing, not 4-5 hours
2. TikTok scripts get 9/10 (lower than other formats) — video scripting is harder to score
3. Requires a Gemini API key (free tier works, but still a setup step)
4. No web UI yet (CLI only)

**Business Model (Bootstrapped)**

Free tier: 5 repurposings/month
Pro: $29/mo unlimited

I'm launching on ProductHunt today [2]. Free tier available, no credit card.

Would love feedback on:
- Quality of outputs for your content type
- What formats are missing (Threads? Mastodon? Newsletter subject line?)
- Whether CLI-only is OK or a web UI is needed

[1] https://github.com/q2lg42/content-repurposer
[2] [ProductHunt link - fill in on launch day]
```

---

## Expected Questions & Prepared Answers

**Q: How is this different from just using ChatGPT?**
A: 3 things: (1) Format-specific quality scoring with auto-retry, (2) CLI workflow integrates into 
existing tools, (3) $29/mo vs per-token cost for heavy users.

**Q: Open source?**
A: Yes, MIT. Code on GitHub. The hosted service adds convenience + key management.

**Q: What's the actual quality like?**
A: Our internal benchmark: 9.8/10 average across 18 test cases. I'd say it's "95% there" — needs 
a quick review, not a full rewrite. See DEMO_RESULTS.md in the repo for full outputs.

**Q: Why not just use Claude/GPT directly with a system prompt?**
A: You totally can. But: (1) you need to write and tune the prompts yourself, (2) no quality scoring, 
(3) no CLI integration. Content Repurposer is "batteries included" for this specific task.

**Q: Concurrent format generation?**
A: Currently sequential (API rate limits). Parallel generation is on the roadmap — would cut 54s → ~15s.

**Q: What if Gemini goes away?**
A: The abstraction layer (`src/ai/`) supports swapping models. Currently only Gemini Flash is tuned,
but adding OpenAI/Claude is a pull request away.

---

## Upvote Farming Strategy (organic)

1. Post at peak HN time (10am-12pm EST)
2. Reply to ALL comments within first 2 hours
3. Be honest about limitations in the post (HN values this)
4. No fake accounts, no organized upvote rings (ban risk)
5. Share in Discord/Telegram communities AFTER posting (not before)

---

_Created: 2026-03-03 by 호떡 🥞_
_Purpose: Launch Day - Hacker News Show HN post_
