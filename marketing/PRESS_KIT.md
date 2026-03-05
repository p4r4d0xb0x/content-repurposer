# Press Kit — Content Repurposer

## One‑line
**Turn one long‑form article into five platform‑ready posts in ~60 seconds.**

## Short Description (Tweet‑length)
Content Repurposer is a CLI that converts a single article into Twitter, LinkedIn, newsletter, TikTok, and Facebook drafts — with quality scoring and auto‑retry.

## Elevator Pitch
Founders and solo marketers spend hours rewriting the same idea for each platform. Content Repurposer compresses that work into one command: paste your source content, choose formats, and get publish‑ready drafts with consistent tone and measurable quality scores.

## The Problem
- Creating consistent multi‑platform content is slow and repetitive
- Quality is inconsistent when done fast
- Most tools are video‑first; text creators still hack together their own workflows

## The Solution
- **One input → five outputs** (Twitter, LinkedIn, Newsletter, TikTok, Facebook)
- **Quality scoring (1‑10)** with auto‑retry if below threshold
- **CLI‑first** for speed, automation, and reproducibility

## Key Features
- Multi‑format generation with a single command
- Quality scoring + auto‑retry
- Tone control (`--tone`)
- Flexible input (Markdown, HTML, plain text)
- Output saved to clean per‑format files

## Typical Use Case
1. Paste blog post into `examples/test-short.md`
2. Run: `content-repurposer examples/test-short.md --formats all --quality 7`
3. Review outputs and schedule across platforms

## Pricing
- **Pro**: $29/month (launch target)

## Target Users
- Indie founders & solo marketers
- Technical creators who prefer CLI workflows
- Teams repurposing newsletters/blog posts

## Demo Command
```bash
content-repurposer examples/test-short.md --formats all --quality 7
```

## Visual Assets
**Screenshots** (see `marketing/screenshots/`):
- `cli-running.png` — CLI running
- `quality-scores.png` — quality score summary
- `twitter-output.png` — output sample
- `before-after.png` — input vs output

**Terminal examples** (see `marketing/terminal-examples/`):
- `cli-session-demo.txt`
- `before-after-comparison.txt`
- `twitter.txt / linkedin.txt / newsletter.txt / tiktok.txt / facebook.txt`

## Links
- GitHub: https://github.com/q2lg42/content-repurposer
- npm: https://www.npmjs.com/package/content-repurposer
- Landing: (TBD)
- Product Hunt: (TBD)

## Contact
- Maker: 도균 (q2lg42)
- Email: (TBD)

---
_Updated: 2026‑03‑05 KST_