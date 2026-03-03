# Content Repurposer - Technical Architecture

**Version:** 0.1.0  
**Updated:** 2026-03-01 06:00 KST

---

## 🏗️ System Overview

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ├─> CLI (primary MVP interface)
       └─> Web (later, Week 2)
              │
              ▼
       ┌──────────────┐
       │   Input      │
       │   Parser     │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   AI Engine  │
       │   (Gemini)   │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   Format     │
       │   Adapters   │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   Output     │
       │   Files      │
       └──────────────┘
```

---

## 📁 Project Structure

```
content-repurposer/
├── README.md                 # Project overview
├── ARCHITECTURE.md           # This file
├── package.json              # Dependencies
├── .env.example              # Environment variables template
├── src/
│   ├── cli.js               # CLI entry point
│   ├── parser.js            # Input parsing (text, URLs)
│   ├── ai/
│   │   ├── gemini.js        # Gemini API client
│   │   └── prompts/         # System prompts per format
│   │       ├── twitter.js
│   │       ├── linkedin.js
│   │       ├── newsletter.js
│   │       ├── tiktok.js
│   │       └── facebook.js
│   ├── formats/
│   │   ├── twitter.js       # Twitter thread formatter
│   │   ├── linkedin.js      # LinkedIn post formatter
│   │   ├── newsletter.js    # Newsletter section formatter
│   │   ├── tiktok.js        # TikTok script formatter
│   │   └── facebook.js      # Facebook post formatter
│   ├── output.js            # File output handler
│   └── utils/
│       ├── validator.js     # Quality validation
│       └── logger.js        # Logging
├── tests/
│   ├── fixtures/            # Test content samples
│   └── *.test.js
└── examples/
    ├── blog-post.md
    └── output/              # Example outputs
```

---

## 🔧 Core Components

### 1. CLI Interface (`src/cli.js`)

**Commands:**
```bash
# Basic usage
repurpose input.md --formats twitter,linkedin,newsletter

# With tone customization
repurpose input.md --formats all --tone professional

# From URL
repurpose --url https://example.com/post --formats twitter

# Batch processing (later)
repurpose ./posts/*.md --formats all
```

**Options:**
- `--formats`: Comma-separated list (twitter, linkedin, newsletter, tiktok, facebook, all)
- `--tone`: professional | casual | funny | educational (default: professional)
- `--output`: Output directory (default: ./output/)
- `--quality`: standard | high (free vs pro tier)

**Implementation:**
- Commander.js for CLI framework
- Chalk for colored output
- Ora for loading spinners
- Inquirer for interactive prompts (later)

---

### 2. Input Parser (`src/parser.js`)

**Supported Inputs:**
- Local files: `.md`, `.txt`, `.html`
- URLs: Blog posts, Medium, Substack
- Transcripts: Plain text (audio/video transcription handled separately)

**Parsing Logic:**
```javascript
async function parseInput(input) {
  if (isURL(input)) {
    return await fetchAndExtract(input); // Use web scraping
  } else {
    return await readFile(input); // Local file
  }
}
```

**Output:**
```javascript
{
  title: "Post Title",
  content: "Full text content...",
  metadata: {
    wordCount: 1500,
    readingTime: "7 min",
    topics: ["AI", "productivity"]
  }
}
```

---

### 3. AI Engine (`src/ai/gemini.js`)

**Model:** Gemini 2.0 Flash (fast, cheap, high quality)
- Free tier: Gemini 2.0 Flash
- Pro tier: Claude 3.5 Sonnet (better quality)

**API Flow:**
```javascript
async function repurpose(content, format, tone) {
  const prompt = buildPrompt(content, format, tone);
  const response = await geminiAPI.generateContent(prompt);
  const output = validateQuality(response);
  return output;
}
```

**Prompt Structure:**
```
System: You are a professional content repurposing assistant.

Task: Transform the following content into a {format} with {tone} tone.

Content:
{input_content}

Requirements:
- {format-specific instructions}
- Maintain key message and insights
- Optimize for {platform} engagement
- Use {tone} tone throughout

Output:
{format-specific structure}
```

**Rate Limiting:**
- Gemini 2.0 Flash: 60 RPM (free tier)
- Implement queue for batch processing
- Retry logic with exponential backoff

---

### 4. Format Adapters (`src/formats/*.js`)

#### Twitter Thread (`twitter.js`)
**Output Structure:**
```
🧵 1/ [Hook - attention-grabbing first tweet]

2/ [Main point 1 - expand on hook]

3/ [Main point 2 - build on previous]

...

10/ [Call to action or summary]

[Optional: Relevant hashtags]
```

**Requirements:**
- 10-15 tweets (optimal thread length)
- Each tweet <280 characters
- Numbered tweets (1/, 2/, etc.)
- Emojis for visual appeal (but not excessive)
- Hook in first tweet (must be engaging)
- CTA in last tweet

#### LinkedIn Post (`linkedin.js`)
**Output Structure:**
```
[Hook - 1-2 sentences]

[Main content - 3-4 paragraphs]
- Paragraph 1: Problem/Context
- Paragraph 2: Insight/Solution
- Paragraph 3: Example/Story
- Paragraph 4: Takeaway/Action

[Optional: Hashtags (3-5 relevant)]
```

**Requirements:**
- 300-500 words (optimal length)
- Professional tone (even if input is casual)
- Line breaks for readability
- 3-5 hashtags (relevant industry tags)
- Thought leadership angle

#### Newsletter Section (`newsletter.js`)
**Output Structure:**
```
Subject: [Compelling subject line]

Preview: [First sentence - email preview text]

---

[Introduction paragraph]

[Subheading 1]
[Content...]

[Subheading 2]
[Content...]

[Conclusion + CTA]
```

**Requirements:**
- 200-400 words (concise)
- Email-friendly formatting (no complex HTML)
- Clear subheadings
- Strong CTA (call to action)
- Personal tone (even if content is technical)

#### TikTok/Instagram Script (`tiktok.js`)
**Output Structure:**
```
[HOOK] (0-3 seconds)
[Attention-grabbing opening line]

[BUILD] (3-30 seconds)
[Main point, quick and punchy]

[PAYOFF] (30-60 seconds)
[Resolution, insight, or CTA]

---
Visual Notes:
- [Suggested visual for hook]
- [Suggested visual for build]
- [Suggested visual for payoff]

Captions/Text Overlays:
- [Key phrases to display on screen]
```

**Requirements:**
- 60-90 second script
- Short sentences (easy to speak)
- Visual cues (what to show on screen)
- Hook in first 3 seconds (critical)
- Energy + pacing notes

#### Facebook Post (`facebook.js`)
**Output Structure:**
```
[Casual, engaging opening]

[Story or example - relatable]

[Key takeaway]

[Question or CTA to drive engagement]

[Optional: Emoji + casual hashtags]
```

**Requirements:**
- 150-300 words (medium length)
- Conversational tone
- Emojis for personality
- Question at end (drives comments)
- Community-focused (not salesy)

---

### 5. Quality Validation (`src/utils/validator.js`)

**Validation Checks:**
- Character limits (Twitter <280, etc.)
- Tone consistency (professional vs casual)
- Key message preservation (check if main points are included)
- Engagement optimization (hooks, CTAs, questions)
- Grammar/spelling (basic checks)

**Quality Score:**
```javascript
{
  score: 8.5, // 0-10
  checks: {
    characterLimit: true,
    toneMatched: true,
    keyPointsIncluded: true,
    engagementHooks: true,
    grammarOK: true
  },
  warnings: ["Could add more emojis for Twitter"],
  accept: true // true if score >= 7.0
}
```

**Retry Logic:**
- If score < 7.0, regenerate (max 3 attempts)
- If still fails, flag for manual review (later: human in the loop)

---

## 🔑 Environment Variables

```env
# AI API Keys
GEMINI_API_KEY=your_gemini_key_here
CLAUDE_API_KEY=your_claude_key_here  # For Pro tier

# Feature Flags
ENABLE_WEB_SCRAPING=true
ENABLE_BATCH_PROCESSING=false  # Week 2

# Rate Limits
MAX_REQUESTS_PER_MINUTE=60
MAX_FREE_TIER_MONTHLY=5

# Quality Settings
MIN_QUALITY_SCORE=7.0
MAX_RETRY_ATTEMPTS=3
```

---

## 📊 Data Flow

### MVP (Week 1) - CLI Only
```
User runs CLI command
  │
  ▼
Parse input (file or URL)
  │
  ▼
For each requested format:
  │
  ├─> Build prompt (content + format + tone)
  │
  ├─> Call Gemini API
  │
  ├─> Validate quality
  │
  └─> Retry if quality < 7.0
  │
  ▼
Write output files
  │
  ▼
Display summary to user
```

### Week 2 - Web Interface
```
User uploads file OR pastes text
  │
  ▼
Backend receives request
  │
  ├─> Check auth (free tier: 5/mo limit)
  │
  ├─> Queue job (if high volume)
  │
  └─> Process (same as CLI)
  │
  ▼
Store outputs in database
  │
  ▼
Return download links to user
```

---

## 💰 Monetization Integration

### Free Tier
- CLI only (no web access)
- 5 repurposings per month
- Standard quality (Gemini 2.0 Flash)
- Local usage tracking (JSON file)

### Pro Tier ($29/mo)
- CLI + web access
- Unlimited repurposings
- High quality option (Claude 3.5 Sonnet)
- Tone customization
- Priority processing (no queue)
- Stripe subscription check

### Agency Tier ($99/mo)
- Everything in Pro
- API access (REST endpoint)
- White-label option (custom branding)
- Team access (5 users)
- Dedicated support

**Implementation:**
- Stripe subscription webhook
- License key validation
- Usage tracking per user
- Soft limits (warn before hard cutoff)

---

## 🚀 Performance Optimization

### Week 1 (MVP)
- Single API call per format (sequential)
- Local file I/O
- No caching (yet)

### Week 2 (Optimization)
- Parallel API calls (all formats at once)
- Cache similar content (avoid duplicate API calls)
- Queue system for batch processing

### Week 3 (Scale)
- Redis for caching
- Background job processing (BullMQ)
- CDN for static assets

---

## 🧪 Testing Strategy

### Unit Tests
- Input parser (various file formats)
- Format adapters (validate output structure)
- Quality validator (edge cases)

### Integration Tests
- End-to-end CLI flow
- API error handling (rate limits, failures)
- Output file generation

### Quality Tests
- Real content samples (10+ different posts)
- Human evaluation (score 1-10)
- A/B testing (Gemini vs Claude)

**Goal:** 95%+ test coverage before launch

---

## 📈 Monitoring & Analytics

### MVP (Week 1)
- Console logging (basic)
- Error tracking (crash logs)

### Week 2
- Usage metrics (repurposings per day)
- Quality scores (track average)
- API cost tracking (Gemini usage)
- User feedback (in-app rating)

### Week 3
- Conversion tracking (free → pro)
- Churn analysis (cancellations)
- Feature usage (which formats are popular)
- Performance metrics (API latency)

---

## 🔒 Security & Privacy

### MVP (Week 1)
- API keys in .env (never committed)
- Local file processing (no uploads)
- No user data collection

### Week 2 (Web)
- HTTPS only
- JWT auth (user sessions)
- Content NOT stored (unless user opts in)
- GDPR compliance (data deletion on request)

### Week 3 (Scale)
- Rate limiting (prevent abuse)
- Content moderation (flag spam/abuse)
- DDoS protection (Cloudflare)

---

## 🎯 Technical Milestones

### Day 1-2 (Today-Tomorrow)
- [x] Project structure created
- [ ] CLI boilerplate (Commander.js)
- [ ] Input parser (local files)
- [ ] Gemini API integration (basic)
- [ ] First format working (Twitter thread)

### Day 3-4
- [ ] All 5 formats implemented
- [ ] Quality validation working
- [ ] Tone customization (--tone flag)
- [ ] Error handling (API failures)

### Day 5
- [ ] Polish CLI UX
- [ ] Test with real content
- [ ] Performance optimization
- [ ] Documentation

### Day 6-7
- [ ] Marketing assets (screenshots)
- [ ] Demo video recording
- [ ] Landing page (simple HTML)

### Day 8 (Launch)
- [ ] ProductHunt submit
- [ ] Monitor + engage

---

## 🛠️ Tech Stack

### MVP (Week 1)
- **Runtime:** Node.js 22+
- **CLI Framework:** Commander.js
- **AI SDK:** @google/generative-ai (Gemini)
- **Styling:** Chalk (colored console output)
- **Async:** Native async/await
- **Testing:** Vitest

### Week 2 (Web)
- **Backend:** Express.js or Hono
- **Frontend:** React + Vite (simple SPA)
- **Auth:** JWT + bcrypt
- **Database:** SQLite (Turso for cloud)
- **Payment:** Stripe SDK

### Week 3 (Scale)
- **Hosting:** Cloudflare Workers (backend)
- **Storage:** R2 (file storage)
- **Queue:** BullMQ + Redis
- **Analytics:** PostHog or Plausible

---

## 📝 Next Implementation Steps

**TODAY:**
1. [x] Create ARCHITECTURE.md (this file)
2. [ ] Init Node.js project: `npm init`
3. [ ] Install dependencies: `commander`, `chalk`, `@google/generative-ai`
4. [ ] Set up Gemini API key
5. [ ] Create basic CLI boilerplate

**TOMORROW:**
1. [ ] Implement input parser
2. [ ] Implement Twitter thread format
3. [ ] Test with real blog post
4. [ ] Iterate on prompt quality

---

_Updated: 2026-03-01 06:00 KST_  
_Status: Architecture complete, ready for implementation_  
_Next: CLI boilerplate + Gemini integration_
