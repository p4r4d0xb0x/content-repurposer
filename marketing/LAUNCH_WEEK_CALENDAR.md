# Content Repurposer - Launch Week Calendar

**Launch Date:** March 8, 2026 (D-Day)  
**Created:** 2026-03-03 15:00 KST  
**Current Status:** 5 days out

---

## D-5: Tuesday, March 3 (TODAY ✅)

### Done
- [x] CLI MVP 완료 + 테스트 18개 통과
- [x] GitHub 레포 퍼블리시
- [x] Landing page 배포 (GitHub Pages)
- [x] ProductHunt 텍스트 콘텐츠 완성
- [x] 런칭 트윗 초안 완성
- [x] Reddit 포스트 초안 완성
- [x] Dev.to 아티클 초안 완성
- [x] HackerNews Show HN 포스트 작성 ← NEW

### Still Pending
- [ ] 터미널 스크린샷 / GIF 제작 → 오늘 저녁 전에

---

## D-4: Wednesday, March 4

### Morning
- [ ] **터미널 스크린샷 캡처** (PNG)
  ```bash
  cd /srv/CLAW_WS/projects/content-repurposer
  node src/cli.js examples/test-short.md --formats all
  # 출력 스크린샷 저장
  ```
- [ ] **asciinema 레코딩** (GIF 대안)
  ```bash
  asciinema rec demo.cast
  node src/cli.js examples/test-short.md --formats all
  exit
  # upload to asciinema.org
  ```

### Afternoon
- [ ] ProductHunt 갤러리용 스크린샷 최종 선정 (최소 3장)
- [ ] README 스크린샷/GIF 추가

### Evening
- [ ] GitHub repo 최종 polish
  - README badges (version, license, npm)
  - 스크린샷 추가
  - CONTRIBUTING.md

---

## D-3: Thursday, March 5

### Morning
- [ ] **Reddit 사전 포스트 (warming up)**
  - r/SideProject — "Building in public: 1 blog post → 5 platform posts in 60s"
  - 링크: `projects/marketing/reddit-content-repurposer.md` (워밍업 버전)
  - 목표: 피드백 수집, 커뮤니티 워밍업

### Afternoon
- [ ] **Dev.to 아티클 발행** (런칭 하루 전)
  - `projects/marketing/devto-content-repurposer.md` 사용
  - canonical URL 설정 (q2lg42.com 블로그로)

### Evening
- [ ] ProductHunt 페이지 드래프트 저장 (아직 발행 X)
  - 텍스트: `producthunt-launch-content.md` 복사
  - 갤러리: 스크린샷 업로드
  - Scheduled for March 8 00:01 AM PST

---

## D-2: Friday, March 6

### Morning
- [ ] **ProductHunt 페이지 최종 확인**
  - 갤러리 이미지 4장 이상
  - 설명 최종 편집
  - 런칭 일정 확인

### Afternoon
- [ ] **Stripe 설정** (최소 결제 플로우)
  - Stripe 계정 생성
  - 결제 링크 생성 ($29/mo)
  - 랜딩 페이지 "Buy Pro" 버튼에 연결

### Evening
- [ ] **워밍업 트윗 스레드** (빌드 과정 공유)
  - "3월 8일 ProductHunt 런칭 예정"
  - 빌드 과정 하이라이트
  - 품질 스코어 결과 공유

---

## D-1: Saturday, March 7

### Morning
- [ ] **최종 체크리스트 확인**
  - GitHub repo: 공개, README 완성, 스크린샷 포함 ✓
  - Landing page: 접속 확인, 결제 링크 작동 ✓
  - ProductHunt: 예약 발행 설정 ✓
  - 트위터: 런칭 트윗 초안 저장 ✓

### Afternoon
- [ ] **이메일 캡처** 설정
  - 간단한 Mailchimp 폼 or Google Forms
  - 랜딩 페이지에 임베드: "Launch 알림 받기"

### Evening (23:00 KST = 14:00 UTC)
- [ ] **HackerNews Show HN 포스트** (미국 오후 시간대 타겟)
  - `marketing/HACKERNEWS_SHOW_HN.md` 사용
  - 제목: "Show HN: Content Repurposer – Turn 1 blog post into 5 platform-ready posts in 60s"

---

## D-DAY: Sunday, March 8 🚀

### 06:00 KST (00:01 UTC) — LAUNCH
- [ ] ProductHunt 발행 확인
- [ ] 런칭 트윗 발행 (Version 1 from `LAUNCH_TWEETS.md`)

### 06:05 KST
- [ ] Reddit 런칭 포스트 — r/SideProject
  - `projects/marketing/reddit-content-repurposer.md` 런칭 버전

### 06:10 KST
- [ ] LinkedIn 포스트 발행

### 06:30 KST
- [ ] Reddit 런칭 포스트 — r/Entrepreneur

### 07:00 KST
- [ ] Reddit 런칭 포스트 — r/webdev

### 07:30 KST
- [ ] Dev.to 아티클 업데이트 (런칭 링크 추가)

### 08:00 KST ~ 
- [ ] **모든 댓글 1시간 내 답변**
  - ProductHunt 댓글
  - Reddit 댓글
  - HackerNews 댓글
  - Twitter 멘션

---

## D+1: Monday, March 9

### Morning
- [ ] **런칭 결과 집계**
  - ProductHunt upvotes
  - GitHub stars
  - npm downloads
  - 웹사이트 트래픽

### Afternoon
- [ ] **런칭 회고 블로그 포스트 작성**
  - "ProductHunt 런칭 결과: 첫 micro-SaaS 실험 후기"

---

## 성공 지표 (D-Day 기준)

| 지표 | 목표 | 달성 |
|------|------|------|
| PH upvotes | 50+ | - |
| GitHub stars | 20+ | - |
| Reddit comments | 10+ | - |
| HN points | 10+ | - |
| 이메일 캡처 | 20+ | - |
| 유료 전환 | 3+ | - |

---

## 블로킹 이슈

1. **npm publish** — npm 계정 인증 필요 (도균님 직접 실행)
   ```bash
   npm login
   cd /srv/CLAW_WS/projects/content-repurposer
   npm publish
   ```

2. **ProductHunt 계정** — 직접 설정 필요 (웹 접근)

3. **Stripe 계정** — 결제 설정 필요 (도균님 직접)

4. **Twitter 계정** — @hotteok_ai 아직 미생성

---

_Created: 2026-03-03 by 호떡 (autonomous loop)_
