# Content Repurposer - Email Sequences

**Last updated:** 2026-03-03  
**Purpose:** Waitlist → Free Trial → Paid conversion drip

---

## Sequence 1: Waitlist Welcome Drip (3 emails)

### Email 1: Welcome (즉시 발송 - Trigger: Waitlist signup)

**Subject:** You're on the list 🥞 (here's what's coming)

**Body:**
```
Hi [Name],

You're on the Content Repurposer waitlist.

Launch: March 8th, 2026 (5 days from now).
Early access for waitlist subscribers: March 7th, 23:59 KST.

Quick background on what you signed up for:

Content Repurposer is a CLI that turns one blog post into 5 
platform-ready posts in ~60 seconds.

Not "generate 100 variations" — 5 posts, actually good enough to 
publish without editing.

Average quality score: 9.8/10 across 18 test cases.

That's the pitch. Here's the proof:

```bash
$ npx content-repurposer my-post.md --formats all

  twitter    ... done  10/10  (12.3s)
  linkedin   ... done  10/10  (11.7s)
  newsletter ... done  10/10  (13.1s)
  tiktok     ... done   9/10  (11.2s)
  facebook   ... done  10/10  (10.7s)

Average: 9.8/10  |  Time: 58.9s
```

If you create content and spend more than 30 minutes per week 
adapting it for different platforms — this is for you.

See you on March 8th.

— 도균 (& Hotteok 🥞, my AI assistant who helped build this)
```

---

### Email 2: Product Preview (발송일: Launch -2일, March 6th)

**Subject:** Before we launch: here's what 9.8/10 actually looks like

**Body:**
```
Hi [Name],

Two days until launch. Before we go live, I want to show you 
something real.

I took a blog post (1,847 characters, technical topic) and ran it 
through Content Repurposer. Here's what came out:

---

**Original:** A technical post about automating content distribution.

**Twitter thread (generated, 60 seconds later):**

Tweet 1:
"Spent 4 hours adapting one blog post for 5 platforms. 
Then I automated it. Here's the system that replaced me (1/8)"

Tweet 2:
"The problem with most AI content tools: they optimize for quantity.
100 outputs → 95 you won't use → 3 hours of editing.

The math doesn't work. (2/8)"

[continues for 8 tweets...]

Quality score: 10/10.
Edit time: 0 minutes.

---

**LinkedIn post (same source material):**

"I spent years creating great content that no one saw.

Not because it wasn't good. Because I was posting it in one place 
and hoping people found it.

The distribution problem is real. Here's how I'm solving it..."

Quality score: 10/10.
Edit time: 0 minutes.

---

This is what 9.8/10 means in practice.

Free tier (5 repurposings/month) goes live March 8th.
Pro tier ($29/mo, unlimited) also available at launch.

See you there.

— 도균
```

---

### Email 3: Launch Day (발송일: March 8th, 09:00 KST)

**Subject:** Content Repurposer is live 🚀

**Body:**
```
Hi [Name],

It's live.

→ ProductHunt: [LINK] ← would appreciate an upvote
→ GitHub (MIT): https://github.com/p4r4d0xb0x/content-repurposer
→ Landing page: https://p4r4d0xb0x.github.io/content-repurposer/

Getting started in 30 seconds:

```bash
npm install -g content-repurposer
content-repurposer your-post.md --formats all
```

Free tier: 5 repurposings/month, no credit card.
Pro: $29/mo, unlimited, with your own API key support.

One thing I'd love from you: try it on a real post and tell me 
what you think. Reply to this email directly.

The first 20 Pro subscribers get:
- Lifetime lock-in at $29/mo (price goes up as features ship)
- Direct input on the roadmap
- Me personally responding to every bug report

Built in 7 days. Tested obsessively. 

— 도균

P.S. If this isn't for you, unsubscribe below. No hard feelings.
```

---

## Sequence 2: Free Trial → Paid Conversion (5 emails)

### Email 1: First Use Confirmation (즉시 - Trigger: First repurposing)

**Subject:** Your first repurposing ✅ (how did it go?)

**Body:**
```
Hi,

You just ran Content Repurposer for the first time.

Quick question: did the output surprise you in any way?

I ask because there are two common reactions:

1. "Oh, this actually good enough to publish"
2. "The [format] output was off"

If it's #2, reply and tell me which format and what felt wrong.
I fix bugs fast. Every feedback leads to a prompt update within 
24 hours.

You have [X] repurposings left this month on the free tier.

Pro ($29/mo) removes the limit. Worth it if you create content 
more than once a week.

— 도균
```

---

### Email 2: Value Reinforcement (Day 3 after signup)

**Subject:** The hour you're not getting back (yet)

**Body:**
```
Hi,

Quick question: how much time did you spend last week adapting 
content for different platforms?

Average for creators: 2-4 hours per week.
That's 100-200 hours per year.

At even $50/hour (conservative), that's $5,000-$10,000/year in 
time cost.

Content Repurposer Pro: $29/month = $348/year.

You don't have to do the math. But if you're spending more than 
7 minutes per week adapting content, it pays for itself.

Free tier: [X] repurposings left.

Upgrade: [PAYMENT LINK]

— 도균
```

---

### Email 3: Social Proof (Day 7)

**Subject:** What early users are saying

**Body:**
```
Hi,

One week in. Here's what early users are saying about Content Repurposer:

[Testimonials - TBD after launch, placeholder]

"The LinkedIn output was surprisingly good. I usually spend 20 minutes 
rewriting for LinkedIn tone. This got it first try." — [User]

"9.8/10 is real. I tested it on a technical post and didn't edit a 
single word of the Twitter thread." — [User]

Your free tier has [X] repurposings left this month.

If you've found it useful: Pro unlocks unlimited for $29/mo.

[UPGRADE BUTTON]

— 도균
```

---

### Email 4: Feature Education (Day 14)

**Subject:** You might be using Content Repurposer wrong

**Body:**
```
Hi,

Most users run Content Repurposer with `--formats all`.

That's fine. But here are three things you might not know:

**1. You can set a quality threshold**

```bash
content-repurposer my-post.md --formats all --min-quality 9.0
```

It'll retry until it hits 9.0/10 or exhaust max attempts.
Useful for important posts where quality really matters.

**2. You can target specific formats**

```bash
content-repurposer my-post.md --formats twitter,linkedin
```

Faster (parallel, ~25s). Good for when you only need two platforms.

**3. Short posts work better than you think**

I tested with posts as short as 200 characters. 
The model extrapolates context from minimal input.
Try it with a thread or a short tip post.

---

Free tier repurposings: [X] remaining.

Pro removes the cap.

— 도균
```

---

### Email 5: Final Nudge (Day 21)

**Subject:** Last email about upgrading (I promise)

**Body:**
```
Hi,

Your free tier is running low.

I'm going to make this simple:

If Content Repurposer saved you time → upgrade at $29/mo.
If it didn't → reply and tell me why. I want to fix it.

One or the other. Both help.

[UPGRADE - $29/MO]

Either way, thanks for trying it.

— 도균
```

---

## Sequence 3: Pro User Onboarding (3 emails)

### Email 1: Welcome to Pro (즉시 - Trigger: Payment confirmed)

**Subject:** You're in. Here's how to get the most out of Pro.

**Body:**
```
Hi,

Welcome to Content Repurposer Pro.

You now have:
- Unlimited repurposings (no monthly cap)
- Priority support (reply to this email, I respond same day)
- Input on the roadmap (see below)

**The one thing most Pro users don't do (but should):**

Test with your worst-performing content first.

The posts you've tried to distribute manually and failed — those are 
the test cases. If Content Repurposer can make a mediocre post work 
across platforms, that's proof of value.

**What's coming next (roadmap):**

1. Web UI (no CLI required)
2. Additional formats: Threads, Substack, Medium
3. Brand voice profiles (train on your past content)
4. Direct publishing via API integrations

You get a say in prioritization. Reply with what you want most.

— 도균

P.S. Your first billing date is [DATE]. Cancel anytime from [LINK].
```

---

### Email 2: Feature Deep-Dive (Day 3 after Pro upgrade)

**Subject:** Advanced features you might have missed

**Body:**
```
Hi,

Three days in. Here's what power users do differently:

**Batch processing (coming soon):**

Right now: one post at a time.
Next version: pass a directory and process a whole content library.

If you have a backlog of posts you want to redistribute, 
reply and I'll flag you for beta access.

**Custom quality thresholds:**

```bash
# High-stakes posts (important launches, announcements)
content-repurposer important-post.md --min-quality 9.5

# Quick social content (lower bar, faster)
content-repurposer quick-tip.md --min-quality 7.5
```

**Multiple output directories:**

By default, outputs go to `repurposed/[filename]/`.
You can override: `--output-dir ./my-content/march/week-2/`

---

Any questions? Reply here. Same-day response guaranteed for Pro.

— 도균
```

---

### Email 3: NPS / Feedback (Day 14 after Pro upgrade)

**Subject:** 2-minute feedback? (genuinely influences what we build next)

**Body:**
```
Hi,

Two weeks as a Pro user. Quick ask:

**On a scale of 1-10, how likely are you to recommend Content Repurposer to a fellow creator or developer?**

Reply with a number. That's it. If it's below 7, tell me why — I'll fix it.

If it's 9 or 10, I have a favor to ask: would you be willing to write 
one sentence about your experience? I use these as social proof 
(with your permission).

Either way — thank you for being an early subscriber.

— 도균
```

---

## Operational Notes

### Platform Options (우선순위 순)
1. **Brevo (구 Sendinblue)** - 무료 300/일, API 지원, GDPR 친화적
2. **Resend** - 개발자 친화적 API, 3,000/월 무료
3. **Mailchimp** - 500 연락처까지 무료, 초보자 친화적

### 현재 상태
- 이메일 서비스 계정: ⚠️ 미설정 (도균님 직접 필요)
- 이메일 트리거: ⚠️ 미설정 (Cloudflare Worker와 이메일 API 연결 필요)
- 웰컴 이메일 발송: ⚠️ 미설정

### 빠른 설정 (30분)
1. Brevo 무료 계정 생성
2. API 키 발급
3. Cloudflare Worker 업데이트:
   ```javascript
   // 이메일 저장 + 웰컴 이메일 발송
   await fetch('https://api.brevo.com/v3/smtp/email', {
     method: 'POST',
     headers: { 'api-key': env.BREVO_API_KEY },
     body: JSON.stringify({
       to: [{ email: emailAddress }],
       templateId: 1 // 웰컴 이메일 템플릿 ID
     })
   });
   ```

### 스케줄
| 이메일 | 시퀀스 | 발송 시점 |
|--------|--------|-----------|
| Waitlist Welcome | #1 | 즉시 |
| Product Preview | #1 | Launch -2일 (Mar 6) |
| Launch Day | #1 | Mar 8, 09:00 KST |
| First Use | #2 | 첫 사용 직후 |
| Value (Day 3) | #2 | 가입 3일 후 |
| Social Proof (Day 7) | #2 | 7일 후 |
| Feature Education | #2 | 14일 후 |
| Final Nudge | #2 | 21일 후 |
| Pro Welcome | #3 | 결제 즉시 |
| Pro Features | #3 | Pro 3일 후 |
| NPS | #3 | Pro 14일 후 |
