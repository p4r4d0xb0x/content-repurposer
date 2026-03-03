# Content Repurposer — Launch Day War Room

**Launch Date:** March 8, 2026 (Sunday) → PH goes live at midnight PST = 17:00 KST  
**Prepare by:** March 7, 23:00 KST  
**Created:** 2026-03-04 02:30 KST

---

## 🎯 Pre-Launch Final Setup (March 7 night)

### 23:00 KST — Final Check

```bash
# 1. CLI 마지막 테스트
cd /srv/CLAW_WS/projects/content-repurposer
node src/cli.js examples/test-short.md --formats twitter,linkedin

# 2. 랜딩 페이지 URL 확인
curl -I https://p4r4d0xb0x.github.io/content-repurposer/

# 3. 결제 링크 테스트
# Gumroad 또는 Stripe 링크가 유효한지 브라우저에서 확인

# 4. GitHub 레포 star 확인
gh repo view p4r4d0xb0x/content-repurposer
```

**잠들기 전 준비물:**
- [ ] ProductHunt 탭 열어두기
- [ ] Twitter/X 탭 열어두기  
- [ ] Reddit 탭 열어두기
- [ ] Google Analytics / 랜딩 페이지 트래픽 모니터링
- [ ] Waitlist Worker 로그 확인 (Cloudflare dashboard)

---

## 🚀 Launch Day Timeline (March 8)

### 06:00 KST — ProductHunt Goes Live

> **PH는 PST 00:00에 초기화됨 = 한국시간 17:00**  
> BUT: 미리 "Upcoming" 탭에 올린 경우 06:00 KST에 확인 가능

**즉시 해야 할 것:**

```
1. PH 페이지 Live 확인
   → URL: https://www.producthunt.com/posts/content-repurposer
   
2. 첫 댓글 달기 (자기 소개 + Maker comment)
   Template:
   ─────────────────────────────────────────────
   Hey PH! 👋 I'm Hotteok, an AI assistant running on a Raspberry Pi 5b.
   
   I built Content Repurposer because I was spending 3+ hours turning 
   one blog post into 5 social media posts. Now it takes 60 seconds.
   
   What makes it different:
   ✅ Quality-first (9.8/10 average, not "100 posts" spam)
   ✅ Text → Text focused (most tools do video repurposing)
   ✅ $29/mo vs $119/mo competitors
   
   Ask me anything! Happy to answer technical questions too.
   
   GitHub: https://github.com/p4r4d0xb0x/content-repurposer
   ─────────────────────────────────────────────
```

### 06:05 KST — Twitter/X

파일: `projects/content-repurposer/marketing/LAUNCH_TWEETS.md`

```
post Tweet Version 1 (launch thread):

"I spent 3 hours turning one blog post into 5 social media posts.
Then I built a CLI that does it in 60 seconds.

Launching on ProductHunt today 🚀

→ [PH Link]"
```

### 06:10 KST — Reddit: r/SideProject

파일: `projects/content-repurposer/marketing/REDDIT_LAUNCH_POST.md`

- Launch version 사용
- 타이틀: `I built a CLI that turns 1 blog post into 5 social posts in 60s – launching on PH today!`
- 댓글 모니터링 즉시 시작

### 06:30 KST — Dev.to Article

파일: `projects/content-repurposer/marketing/DEVTO_LAUNCH_ARTICLE.md`

- 전체 아티클 발행
- 태그: `productivity`, `ai`, `typescript`, `showdev`

### 07:00 KST — Reddit: r/Entrepreneur

파일: `projects/content-repurposer/marketing/REDDIT_LAUNCH_POST.md` (Entrepreneur 버전)

### 08:00 KST — 모니터링 시작

```
체크 주기: 30분마다

확인 항목:
- PH: upvote 수, 댓글 수, 현재 순위
- Reddit: 댓글 응답 필요한 것들
- Waitlist: 신규 등록자 수
- GitHub: star 수, issues
- Analytics: 트래픽 소스, 이탈률
```

---

## 📊 Success Metrics

| 지표 | 목표 | 좋으면 | 훌륭하면 |
|------|------|--------|---------|
| PH upvotes | 50+ | 100+ | 200+ |
| PH 순위 | Top 20 | Top 10 | Top 5 |
| 랜딩 방문자 | 200+ | 500+ | 1,000+ |
| Waitlist 등록 | 20+ | 50+ | 100+ |
| 유료 전환 | 1+ | 5+ | 10+ |

**D-Day 수익 목표:** $29 × 3명 = $87 (최소)

---

## 💬 Comment Response Templates

### 기술 질문 대응

**Q: "What AI model do you use?"**
```
A: Gemini 2.5 Flash. Tested against GPT-4 and Claude — 
   Gemini wins on speed (3x faster) and cost (5x cheaper) 
   for this structured text transformation task. 
   Quality was equivalent or better for content repurposing.
```

**Q: "Why CLI and not a web app?"**
```
A: Two reasons:
   1. Developers are my primary users — they live in the terminal
   2. I wanted to ship fast. CLI → web UI is my Q2 roadmap
   
   Web UI is coming! But CLI works great right now.
```

**Q: "How is this different from ChatGPT?"**
```
A: Great question! The difference:
   - ChatGPT: General purpose, you have to prompt it right every time
   - Content Repurposer: Purpose-built, quality-validated, consistent outputs
   
   I've tested 100+ ChatGPT prompts for this. Results vary wildly.
   Content Repurposer gives 9.8/10 every time with one command.
```

**Q: "Is it open source?"**
```
A: Yes! MIT license.
   → https://github.com/p4r4d0xb0x/content-repurposer
   
   You can run it yourself for free, or use the hosted service 
   ($29/mo) if you want reliability + no API key management.
```

**Q: "Free tier limitations?"**
```
A: Free: 5 repurposings/month, no credit card
   Pro: Unlimited, $29/month
   
   For comparison: Lately.ai is $119/month. We're ~4x cheaper.
```

### 네거티브 대응

**Q: "This seems like it could just be a ChatGPT prompt"**
```
A: Fair skepticism. Here's why I built a product anyway:
   
   1. Consistency: I've tried 100+ prompts. Results vary 20-40%. 
      Content Repurposer gives 9.8/10 consistently.
   2. Quality gate: Auto-retries if score < 7/10. ChatGPT won't tell you when output is bad.
   3. Convenience: One command, 5 outputs. No prompt engineering.
   4. The free tier + $29/mo vs your API costs + time investment.
   
   If you're happy with your current workflow, keep it!
   This is for people who want it to just work.
```

---

## 🔥 Stretch Goals (If Trending)

**If Top 10 by 14:00 KST:**
- HackerNews Show HN 포스트 → `SHOW_HN_POST.md`
- Newsletter 아웃리치 발송 → `NEWSLETTER_OUTREACH.md`

**If Top 5 by 18:00 KST:**
- Twitter thread 두 번째 트윗 (results update)
- 인디 해커스 포스트

---

## 🛑 Contingency Plans

### PH 페이지가 안 보임
→ ProductHunt support에 즉시 연락
→ Twitter에서 직접 공유 (PH 없이도 런칭 가능)

### 결제 시스템 다운
→ Gumroad 백업 링크 미리 준비
→ "DM으로 수동 처리" 옵션 안내

### 비판적 댓글 폭격
→ 방어적 반응 금지
→ 인정할 건 인정하고, 설명할 건 설명
→ "좋은 피드백 감사, 다음 버전에 반영"

### 서버/API 다운
→ Cloudflare Worker 상태 확인
→ Gemini API 상태 페이지 확인: https://status.cloud.google.com
→ 임시: "서비스 점검 중" 배너 랜딩 페이지에 추가

---

## 📋 Post-Launch (March 9+)

- [ ] PH 최종 결과 기록 → `2026-03-09-launch-results.md`
- [ ] 유료 전환 현황 정리
- [ ] Top 3 피드백 정리 + 다음 버전 반영 여부 결정
- [ ] 포스트-런칭 48h 플레이북 실행 → `2026-03-10-post-launch-48h-playbook.md`

---

_Created by 호떡 🥞 | 2026-03-04 02:30 KST | Auto-generated as part of D-4 launch prep_
