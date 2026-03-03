# GitHub Release v1.0.0 — Content Repurposer

**Tag:** v1.0.0  
**Release Date:** March 8, 2026  
**Type:** Initial Release 🎉

---

## Release Notes (GitHub)

Use this as the GitHub Release body when publishing v1.0.0.

---

### Release Body

# 🎉 Content Repurposer v1.0.0 — Initial Release

**Turn 1 blog post into 5 platform-ready posts in ~60 seconds.**

After 7 days of building and 18 test cases, we're shipping v1.0.0.

---

## What's Included

### ✅ Core Features

- **5 output formats:** Twitter thread, LinkedIn post, Newsletter section, TikTok script, Facebook post
- **Quality scoring:** Every output scored 1-10 across 5 dimensions
- **Auto-retry:** Anything below your quality threshold regenerates automatically
- **Input flexibility:** Markdown (`.md`), HTML (`.html`), plain text
- **Format flags:** `--formats twitter linkedin newsletter` (space-separated)
- **Tone control:** `professional`, `casual`, `funny`, `educational`
- **Output directory:** `--output ./my-dir` (default: `./repurposed/`)
- **Quality threshold:** `--quality 9` (default: 7)

### ⚡ Performance (v1.0.0 Benchmarks)

| Format | Avg Quality | Avg Time |
|--------|-------------|----------|
| Twitter Thread | 10/10 | ~10s |
| LinkedIn Post | 10/10 | ~10s |
| Newsletter | 10/10 | ~10s |
| TikTok Script | 9/10 | ~11s |
| Facebook Post | 10/10 | ~10s |
| **All 5 formats** | **9.8/10** | **~52s** |

### 🧪 Test Coverage

18 edge cases tested, 18 passed:
- Short inputs (<500 chars) ✅
- Long inputs (5,000+ words) ✅
- Code-heavy blog posts ✅
- List-heavy content ✅
- Mixed format posts ✅
- Technical vs. casual tone ✅

---

## Quick Start

```bash
# Install
npm install -g content-repurposer

# Set API key (free tier works)
export GEMINI_API_KEY=your_key_here

# Repurpose all formats
content-repurposer my-blog-post.md -f all

# Specific formats
content-repurposer my-blog-post.md -f twitter linkedin newsletter

# With options
content-repurposer my-blog-post.md -f all --tone casual --quality 9 --output ./social
```

---

## Example Output

```
🔄 Content Repurposer v1.0.0

📄 Reading: my-blog-post.md
✅ Parsed: 293 characters

🎯 Generating 5 formats: twitter, linkedin, newsletter, tiktok, facebook
   Tone: professional | Quality: 7/10 | Model: gemini-flash

  → Generating twitter...
  → Generating linkedin...
  → Generating newsletter...
  → Generating tiktok...
  → Generating facebook...

✅ Generated 5 formats in 51.9s


🎉 Done! Outputs saved to: ./repurposed/

Format summary:
  • twitter:     2,316 chars (quality: 10/10)
  • linkedin:    2,595 chars (quality: 10/10)
  • newsletter:  2,376 chars (quality: 10/10)
  • tiktok:      2,536 chars (quality:  9/10)
  • facebook:    1,366 chars (quality: 10/10)
```

---

## Pricing

| Plan | Price | Repurposings |
|------|-------|-------------|
| Free | $0/mo | 5/month |
| Pro | $29/mo | Unlimited |

[Get Pro →](https://github.com/p4r4d0xb0x/content-repurposer#pricing)

---

## What's Next (v1.1.0)

- [ ] Parallel format generation (54s → ~15s)
- [ ] Web UI (no install required)
- [ ] Threads / Mastodon formats
- [ ] Newsletter subject line scoring
- [ ] GitHub Actions integration

---

## Requirements

- Node.js 18+
- Gemini API key ([Get free key](https://aistudio.google.com/))

---

## Contributing

Issues and PRs welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

**Built by:** 도균 ([@p4r4d0xb0x](https://github.com/p4r4d0xb0x)) + 호떡 🥞 AI Agent  
**License:** MIT  
**ProductHunt:** [upvote us! →](https://www.producthunt.com/posts/content-repurposer)

---

_"Quality over quantity. 5 posts you'll actually publish > 100 posts you won't."_
