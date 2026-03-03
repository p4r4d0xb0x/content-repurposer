# Dev.to / Hashnode Launch Article

**Title:** I Built a Content Repurposing CLI in 7 Days — Here's What I Learned
**Tags:** productivity, ai, opensource, buildinpublic
**Canonical URL:** (set to your blog post URL if cross-posting)

---

# I Built a Content Repurposing CLI in 7 Days — Here's What I Learned

**TL;DR:** I got tired of spending 5+ hours manually adapting one blog post for Twitter, LinkedIn, and newsletters. So I built a CLI tool that does it in 60 seconds. Open-source, $29/mo for unlimited, free tier available. Launching on ProductHunt March 8th.

---

## The Problem I Was Solving (For Myself)

Every week, I'd write a technical blog post. Then spend the next 4–5 hours:

- Rewriting it as a Twitter thread (different tone, shorter)
- Adapting for LinkedIn (professional angle)
- Creating a newsletter version (deeper, with CTAs)
- Maybe a TikTok script (if I had energy left)

The content was the same. The work was different. And it was killing my motivation to even write in the first place.

I tried existing tools. They all had the same problem: **quantity over quality**.

> "Turn 1 post into 100 posts!"

In practice, 95 of those posts are garbage. You still spend 3 hours editing. It's theater, not automation.

## The Hypothesis

What if instead of generating 100 mediocre posts, we focused on generating **5 excellent ones**?

- One per platform
- Quality-scored automatically
- Auto-retry if quality drops below threshold

This became **Content Repurposer**.

## How It Works

```bash
npm install -g content-repurposer
content-repurposer my-post.md --formats all
```

That's it. 60 seconds later:

```
🎉 Done! Outputs saved to: repurposed/

Format summary:
  • twitter:     2,859 chars  (quality: 10/10)
  • linkedin:    2,810 chars  (quality: 10/10)
  • newsletter:  2,677 chars  (quality:  9/10)
  • tiktok:      3,027 chars  (quality:  9/10)
  • facebook:    1,276 chars  (quality: 10/10)

Average quality: 9.6/10
```

### The Quality System

Each output gets scored on 5 criteria:

| Criteria | What it checks |
|----------|----------------|
| Platform fit | Tone, format, length for the platform |
| Content preservation | Key points from original maintained |
| Engagement hooks | Hooks, CTAs, structure |
| Voice consistency | Author's style preserved |
| Format compliance | Character limits, hashtags, etc. |

Score below 7/10 → automatic retry. This is the key differentiator.

### Tech Stack

```
Node.js 18+
├── Commander.js     # CLI framework
├── Gemini 2.5 Flash # AI generation
├── chalk            # Terminal colors
└── marked           # Markdown parsing
```

**Why Gemini Flash over GPT-4?**

I ran side-by-side tests on 18 blog posts:

| | Gemini Flash | GPT-4o |
|--|--|--|
| Speed | **54s** | 162s |
| Cost per run | **~$0.003** | ~$0.015 |
| Quality | 9.6/10 | 9.4/10 |

For structured text transformation tasks, the fastest/cheapest model is often the best choice.

## Test Results

18 test cases across 3 content types:

| Content Type | Length | Success Rate | Avg Quality |
|-------------|--------|-------------|-------------|
| Short tips | 293 chars | 100% | 9.8/10 |
| Code tutorials | 764 chars | 100% | 9.8/10 |
| Long-form lists | 2,084 chars | 100% | 9.7/10 |

100% success rate. Anything below my quality bar auto-retried until it passed.

## Business Model

```
Free:  5 repurposings/month, no credit card
Pro:   $29/month unlimited
```

I looked at competitors:
- Lately.ai: $119+/month, 20-40 hour setup
- Repurpose.io: $35-149/month, template-based

$29 felt like an easy decision for the target user: indie hackers, solopreneurs, small teams.

## 7 Days Timeline

**Day 1:** Idea → MVP design
**Day 2:** CLI framework + Gemini integration
**Day 3:** Quality scoring system + all 5 formats
**Day 4:** Edge case testing (18 test cases)
**Day 5:** Marketing materials + ProductHunt prep
**Day 6:** Community warm-up
**Day 7:** Final testing + launch prep
**Day 8:** 🚀 ProductHunt

## What I'd Do Differently

**1. Start with quality gates, not content**

My first version had no quality threshold. I got some genuinely bad outputs and shipped them anyway. Adding the auto-retry system was a one-day fix that dramatically improved the experience.

**2. Ship a demo environment earlier**

I spent too long on edge cases. A `--demo` flag (pre-generated outputs, no API needed) would have let people try it without API keys. Added this in v1.0.1.

**3. Talk to potential users before Day 5**

I started asking for feedback too late. Even 3 conversations would have shaped Day 1-3 differently.

## What's Next

After launch (if it gets traction):

- [ ] Web UI (CLI is a barrier for non-developers)
- [ ] Parallel format generation (54s → ~15s)
- [ ] More platforms: Threads, Mastodon, newsletter subject lines
- [ ] API support for integration with other tools

## Links

- **GitHub (MIT license):** https://github.com/q2lg42/content-repurposer
- **ProductHunt (March 8th):** TBD
- **Try it:** `npm install -g content-repurposer`

---

**If you're a content creator or indie hacker who writes technical content** — I'd love your feedback. What formats are missing? What would make this 10x better for you?

The code is open source. PRs welcome.

---

_Cross-posted from [hotteok.q2lg42.dev](https://hotteok.q2lg42.dev) — my micro-SaaS build-in-public blog._
