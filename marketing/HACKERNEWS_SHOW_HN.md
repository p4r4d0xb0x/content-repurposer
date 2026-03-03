# HackerNews - Show HN Post

**Post Date:** March 8, 2026 (Launch Day)  
**Target time:** 06:00-08:00 KST (late night US time = less competition)

---

## Title

```
Show HN: Content Repurposer – Turn 1 blog post into 5 platform-ready posts in 60s
```

---

## Body

I got tired of the math not working with AI content tools.

The problem: writing a blog post takes 2-3 hours. Then I need Twitter thread, LinkedIn, newsletter, TikTok script, Facebook post. Each platform has different norms, tone, length. Manual: 4-5 more hours. AI tools: promised "100 posts from 1 blog" but delivered 100 mediocre posts that needed 3 hours of editing.

**The actual math:** AI tool = 30s generation + 3h editing = 3.5h total. Manual = 2-3h. Net time saved: 0.

So I built something different.

**Content Repurposer:**
- Input: 1 markdown file or blog post URL
- Output: 5 platform-optimized posts (Twitter thread, LinkedIn, Newsletter, TikTok script, Facebook)
- Time: ~60 seconds
- Quality: scored 0-10 across 5 dimensions, regenerates if score < 7

```bash
$ npx content-repurposer my-post.md --formats all

🔄 Content Repurposer v1.0.0

📄 Reading: my-post.md (293 chars)
🎯 Generating 5 formats...

  → Generating twitter...
  → Generating linkedin...
  → Generating newsletter...
  → Generating tiktok...
  → Generating facebook...

✅ Generated 5 formats in 58.9s

Format summary:
  • twitter:     2310 chars (quality: 10/10)
  • linkedin:    2905 chars (quality: 10/10)
  • newsletter:  2519 chars (quality: 10/10)
  • tiktok:      2848 chars  (quality:  9/10)
  • facebook:    1080 chars (quality: 10/10)
```

The quality scoring is the key piece. Each output is evaluated by the same LLM on 5 dimensions:
1. Platform adaptation (tone, format, length norms)
2. Content preservation (key points from original)
3. Engagement potential (hooks, structure, CTA)
4. Tone consistency (matches original author's voice)
5. Format compliance (char limits, hashtags, thread structure)

Below 7/10? Auto-regenerate. Results so far: 18/18 test cases passed with 9.0+ average.

**Tech stack:** Node.js, Gemini 2.5 Flash (picked it over GPT-4 for this task — 3x faster, 5x cheaper, same quality for structured transformation), chalk for terminal UI.

**Pricing model:** CLI is MIT open source (free forever). Web app coming Q2 2026 at $29/mo.

GitHub: https://github.com/p4r4d0xb0x/content-repurposer

Would love feedback on the quality scoring methodology especially — it feels like the right approach but curious what the HN crowd thinks.

---

## Anticipated Comments & Responses

**"Why not just use ChatGPT?"**
> You can, and that's essentially what this does under the hood. The value is: (1) platform-specific prompts tuned over 18 test cases, (2) quality gate so you don't get garbage, (3) one command instead of 5 separate prompts. It's workflow automation, not AI magic.

**"The quality scoring is just asking an LLM to rate its own output"**
> Yes, exactly. It's imperfect, but calibrated rubrics with concrete criteria make LLM self-evaluation surprisingly reliable for this task. Happy to share the prompt structure if useful.

**"What about SEO, Medium, Substack?"**
> On the roadmap. Started with the 5 most-requested platforms from my own workflow. PRs welcome.

**"60 seconds is slow"**
> Sequential by design for now. Parallel calls would cut it to ~15s. Not yet implemented because the bottleneck isn't usually the generation time — it's the review.

**"$29/mo for a web wrapper seems high"**
> Fair. The CLI is free forever. The $29 is for the hosted version (no API key management, web UI, one-click usage). But yeah, price is adjustable — launching low and watching conversion.

---

## Notes

- Post time matters on HN: aim for 7-9am PT (23:00-01:00 KST the night before)
- Actually March 8 06:00 KST = March 7 21:00 UTC = March 7 13:00 PT — decent timing
- Don't post multiple times; if it doesn't get traction, that's data
- Reply to every comment within the first 2 hours

