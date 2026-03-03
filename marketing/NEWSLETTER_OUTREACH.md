# Newsletter & Media Outreach Kit — Content Repurposer

**Launch Date:** March 8, 2026  
**Send Date:** March 5-6 (2-3 days before launch)  
**Tool:** Your email (use personal address, not a service)  
**Created:** 2026-03-03 by 호떡 🥞

---

## 🎯 Strategy

Cold outreach to newsletters works because:
1. They're always looking for interesting tools to feature
2. One mention = thousands of targeted impressions
3. Developer newsletter readers = your exact target customer

**Best timing:** Send Wednesday/Thursday (Mar 5-6) for newsletters that publish weekly on Friday/Monday.

---

## 📬 Target Newsletters (Priority Order)

| Newsletter | Subscribers | Frequency | Submit URL / Email |
|-----------|-------------|-----------|-------------------|
| TLDR Newsletter | 1.2M | Daily | advertise@tldr.tech (editorial) |
| Hacker Newsletter | 60K | Weekly | links@hackernewsletter.com |
| Node Weekly | 60K | Weekly | editor@nodeweekly.com |
| JavaScript Weekly | 200K | Weekly | editor@javascriptweekly.com |
| Changelog News | 50K | Weekly | news@changelog.com |
| Console.dev | 20K | Weekly (Dev tools) | hello@console.dev |
| Bytes (ui.dev) | 200K | Weekly | editorial@ui.dev |
| DevUrls | 15K | Daily | submit via devurls.com |
| AlternativeTo | Directory | N/A | submit via alternativeto.net |
| Product Hunt Newsletter | auto-feature | N/A | (via ProductHunt launch itself) |

---

## 📝 Email Templates

### Template A: TLDR Newsletter (tech.tldr.tech)

**Subject:** Tool submission: CLI that turns 1 blog post → 5 platform posts in 60s

**Body:**
```
Hi TLDR team,

Quick submission for your tool/open-source section:

**Content Repurposer** — open-source CLI that converts a blog post into 5 platform-specific posts (Twitter thread, LinkedIn, newsletter, TikTok script, Facebook) in about 60 seconds.

What makes it different: quality scoring system. Every output is scored 1-10 across 5 dimensions. Anything below 7/10 auto-retries. Result: 5 excellent posts instead of 100 mediocre ones.

- GitHub: https://github.com/p4r4d0xb0x/content-repurposer
- Landing: https://p4r4d0xb0x.github.io/content-repurposer/
- Launching on ProductHunt: March 8th
- Install: `npm install -g content-repurposer`

Average quality score from 18 test cases: 9.8/10. MIT licensed.

Happy to provide more info or a live demo.

도균
```

---

### Template B: Node Weekly / JavaScript Weekly

**Subject:** New open-source CLI tool: content-repurposer (AI-powered, quality-scored)

**Body:**
```
Hi,

I'd love to submit a tool for consideration in Node Weekly / JavaScript Weekly:

**content-repurposer** — a Node.js CLI that uses Google Gemini to convert blog posts into platform-specific social content.

Notable technical aspects:
- Built with Node.js / Commander.js
- Implements LLM-as-Judge quality scoring pattern (each output scored 1-10, auto-retries below 7/10)
- Parses Markdown/HTML/plain text
- Saves output files with timestamps
- MIT licensed, open source

```bash
npm install -g content-repurposer
content-repurposer post.md --formats twitter,linkedin,newsletter
```

GitHub: https://github.com/p4r4d0xb0x/content-repurposer
Demo output: https://github.com/p4r4d0xb0x/content-repurposer/tree/main/examples

The LLM-as-Judge pattern (using AI to score AI outputs) might be interesting to your readers — it's a technique worth knowing about beyond just this tool.

Thanks for your consideration.
도균
```

---

### Template C: Console.dev (Developer Tools Focus)

**Subject:** Tool submission: content-repurposer CLI

**Body:**
```
Hi Console team,

Submitting a developer tool for your weekly digest:

**content-repurposer** — CLI for content repurposing with an interesting technical twist: automatic quality scoring.

The tool:
1. Parses any blog post (Markdown/HTML/plain text)
2. Generates 5 platform-specific versions via Gemini API
3. Scores each output 1-10 across: Platform Adaptation, Content Preservation, Engagement Potential, Format Compliance, Authenticity
4. Auto-retries if score < 7/10
5. Saves as timestamped .txt files

It's the first content repurposing tool I've seen that bakes quality validation into the pipeline instead of treating it as optional post-processing.

Install: `npm install -g content-repurposer`
GitHub: https://github.com/p4r4d0xb0x/content-repurposer
License: MIT

Launching on ProductHunt on March 8th. Happy to provide an early review copy or discuss technical details.

도균
```

---

### Template D: Hacker Newsletter (hackernewsletter.com)

**Subject:** Submission: content-repurposer (Show HN featured)

**Body:**
```
Hi,

Quick newsletter submission. Show HN post going up March 8th:

"Show HN: Content Repurposer – 1 blog post → 5 platform-ready posts in 60s"

GitHub: https://github.com/p4r4d0xb0x/content-repurposer

The interesting bit (for newsletter readers): quality-scoring system where AI evaluates AI outputs. Each repurposed post gets scored 1-10 and auto-retried if below threshold. Tested against 18+ scenarios including code-heavy posts, list-heavy posts, and very short content.

MIT licensed. Free tier (5/month), Pro $29/month.

도균
```

---

### Template E: Changelog News (changelog.com/news)

**Subject:** Open source tool: content-repurposer

**Body:**
```
Hey Changelog team,

Fan of the show — wanted to flag a new open-source project:

**content-repurposer** — Node.js CLI that uses AI to adapt blog posts for multiple social platforms, with automatic quality scoring.

The quality scoring piece is the interesting bit: instead of just generating content, it validates outputs using a secondary LLM evaluation step (LLM-as-Judge pattern). Anything below 7/10 auto-retries. 

Got a 9.8/10 average across 18+ test cases.

GitHub (MIT): https://github.com/p4r4d0xb0x/content-repurposer
Launching March 8th on ProductHunt.

도균
```

---

## 📁 Alternative Directory Submissions

### AlternativeTo (https://alternativeto.net)
- Submit as alternative to: Buffer, Hootsuite, Later
- Category: Social Media Management, Content Creation
- Description: "Open-source CLI for AI-powered content repurposing. Converts blog posts to Twitter threads, LinkedIn posts, newsletters, TikTok scripts, and Facebook posts with automatic quality scoring."

### Product Hunt Collections
After launch, ask community members to add to collections:
- "Best Developer Tools"
- "AI Writing Tools"  
- "CLI Tools for Developers"
- "Indie Hacker Toolkit"

### ToolDirectory.ai / There's An AI For That
- Submit via web form
- Category: Content Creation, Social Media
- One-liner: "CLI tool that turns 1 blog post into 5 platform-ready posts in 60 seconds with automatic quality scoring"

---

## 📊 Community Posts (Reddit-style)

### r/node (r/node)
**Post timing:** March 8th 09:00-11:00 KST

**Title:** I built a Node.js CLI with LLM-as-Judge quality scoring — content-repurposer

**Body:**
```
Built a Node.js CLI that uses the LLM-as-Judge pattern for content repurposing.

The core idea: instead of just generating AI outputs, you use a second AI call to evaluate the quality and auto-retry if it's below threshold.

In practice:
- Input: any blog post (Markdown/HTML/plain text)
- Output: 5 platform-specific posts (Twitter, LinkedIn, Newsletter, TikTok, Facebook)
- Each output scored 1-10 across 5 quality dimensions
- Auto-retry if score < 7/10
- ~60 seconds total

Tech stack: Node.js, Commander.js, Google Generative AI SDK (Gemini)

GitHub: https://github.com/p4r4d0xb0x/content-repurposer

The LLM-as-Judge implementation is in src/ai/gemini.js if you want to see how the quality scoring works. Curious if others have used this pattern and what threshold you've found works best.
```

---

### r/MachineLearning (if quality discussion)
**Post timing:** March 9th (day after launch, after initial HN/Reddit)

**Title:** LLM-as-Judge in production: lessons from a content repurposing CLI

**Body:**
```
I implemented the LLM-as-Judge pattern in a small production CLI and wanted to share what I learned.

Quick context: content-repurposer (https://github.com/p4r4d0xb0x/content-repurposer) converts blog posts to social content using Gemini. The quality scoring uses a second Gemini call to evaluate outputs 1-10.

Key findings:
1. Threshold matters a lot: 7/10 gives a good balance (too few retries vs too many)
2. Rubric specificity drives consistency: vague criteria → inconsistent scores
3. Self-evaluation bias: same model evaluates its own output → tends to score higher than humans
4. Cost: ~0.5-1 retry per run at 7/10 threshold (tested on 18+ scenarios)

The quality rubric I ended up with scores on:
- Platform Adaptation (tone, format, length)
- Content Preservation (key points intact)
- Engagement Potential (hooks, CTAs)
- Format Compliance (character limits, conventions)
- Authenticity (doesn't read like AI slop)

Would be curious how others have calibrated LLM-as-Judge thresholds in production.
```

---

## ✅ Outreach Execution Checklist

### March 5th (Thursday) — 2 days before launch
- [ ] TLDR Newsletter submission (email)
- [ ] Node Weekly submission (email)
- [ ] JavaScript Weekly submission (email)
- [ ] AlternativeTo listing created

### March 6th (Friday) — 1 day before launch
- [ ] Console.dev submission (email)
- [ ] Hacker Newsletter submission (email)
- [ ] Changelog News submission (email)
- [ ] ToolDirectory.ai submission

### March 8th (Launch Day) — With Show HN post
- [ ] r/node post (after HN post goes live)
- [ ] Product Hunt collection nominations (ask supporters)

### March 9th+
- [ ] r/MachineLearning LLM-as-Judge post
- [ ] IndieHackers product page update with launch results

---

## 💡 Outreach Tips

1. **Keep it short** — editors get hundreds of submissions. 3 paragraphs max.
2. **Lead with the interesting angle** — "quality scoring" / "LLM-as-Judge" is more interesting than "AI content tool"
3. **Include the GitHub link** — open source = more credibility
4. **Mention ProductHunt launch** — it adds urgency/legitimacy
5. **Personalize** — mention something specific about the newsletter you're writing to
6. **Don't mass-CC** — one email per newsletter, sent separately
7. **Follow up once** — after 3 days if no response

---

_Created: 2026-03-03 23:00 KST by 호떡 🥞_
_Launch: March 8, 2026_
