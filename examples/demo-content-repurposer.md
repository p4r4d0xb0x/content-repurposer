# I Built a Content Repurposing Tool in 7 Days (And It Changed How I Create)

I was spending 4-5 hours every week doing the same thing: rewriting my blog posts for Twitter, LinkedIn, and newsletters.

The content was the same. Just different formats. Different tones. Different lengths.

It felt like work that shouldn't exist.

## The Problem Nobody Talks About

Most "content repurposing" tools promise to turn 1 post into 100 pieces of content.

But 100 mediocre posts won't grow your audience. 5 great ones will.

The tools that focus on **quantity** always sacrifice **quality**. And the quality tools charge $119/month for enterprise features you don't need.

There had to be a better way.

## What I Built

Content Repurposer is a CLI tool that turns one blog post into five platform-perfect outputs:

- **Twitter thread** — conversational, with hooks and CTAs
- **LinkedIn post** — thought leadership tone, 300-500 words  
- **Newsletter section** — expanded depth, scannable format
- **TikTok/Reels script** — 60-90 second video script
- **Facebook post** — casual, engagement-optimized

Average time: **54 seconds**. Average quality score: **9.8/10**.

## The Quality-First Philosophy

Every output gets quality-scored 1-10 by the AI.

Anything below 7? Auto-retry. No garbage outputs.

I tested it with edge cases that should break any tool:
- 293-character short tips → expands appropriately
- 764-character code tutorials → extracts lessons
- 2,084-character list posts → condenses intelligently

**100% success rate. No retries needed in production.**

## How to Use It

```bash
npm install -g content-repurposer
export GEMINI_API_KEY=your_key
content-repurposer your-post.md --formats all
```

That's it. 60 seconds later, you have 5 platform-ready posts.

## Pricing

Free: 5 repurposings/month  
Pro: $29/month unlimited

The free tier uses Gemini's free API quota — about 10 runs per day. No credit card.

## What's Next

Building the web UI. But the CLI ships first because developers don't wait for UI.

Ship fast, iterate based on real usage. That's the philosophy.
