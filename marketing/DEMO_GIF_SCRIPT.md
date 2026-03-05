# Demo GIF Script (60s)

Purpose: Show the full flow end-to-end in under 60 seconds for ProductHunt gallery.

## Target Length
- 45–60 seconds total
- 1 take, no cuts needed (can be sped up 1.2–1.4x if necessary)

## Recording Setup
- Terminal size: 120x34
- Font: 16–18px, high contrast
- Theme: Dark background
- Recording: 1920x1080
- Cursor: Visible

## File Prep
- `demo-post.md` (sample blog post, 1.5–2.0k chars)
- Make sure `content-repurposer` CLI is installed

## Script (Exact Commands + On-Screen Callouts)

### 0–5s: Title card (optional)
- Overlay: "Turn 1 blog post into 5 platform-ready posts in 60s"

### 6–15s: Show input
```bash
ls -la demo-post.md
head -n 12 demo-post.md
```
On-screen callout: "1 blog post (Markdown)"

### 16–28s: Run CLI
```bash
content-repurposer demo-post.md --formats twitter,linkedin,newsletter,tiktok,facebook
```
On-screen callout: "Generate 5 formats"

### 29–45s: Show progress + quality scores
- Let the CLI progress output show:
  - Reading file
  - Generating each format
  - Quality scores (target 9/10+)

On-screen callout: "Quality validation built-in (auto-retry if <7/10)"

### 46–60s: Show outputs
```bash
ls -la output/
head -n 8 output/twitter.md
head -n 8 output/linkedin.md
```
On-screen callout: "Platform-specific tone + format"

## Output File Structure (Expected)
```
output/
  twitter.md
  linkedin.md
  newsletter.md
  tiktok.md
  facebook.md
```

## Notes
- If generation takes longer than 60s, run once beforehand to warm caches.
- Optional: speed up the middle section in post by 1.2x.
- Keep the output readable; avoid scrolling too fast.

## Copy for GIF Description
"Paste a blog post → get 5 platform-ready posts in ~60 seconds. Quality-checked, platform-tailored, and ready to publish."
