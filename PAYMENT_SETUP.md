# 결제 시스템 셋업 가이드

**옵션 A: Gumroad (추천 - 10분, 코드 불필요)**
**옵션 B: Stripe Payment Links (15분, 코드 불필요)**

---

## ✅ 옵션 A: Gumroad (런칭 당일 사용 추천)

### 1. 계정 생성
1. https://gumroad.com 접속
2. "Start selling" → 이메일로 가입
3. 이름/결제 정보 입력 (Stripe 연동 또는 PayPal)

### 2. 상품 생성
1. Dashboard → "New product" → "Membership" 선택
2. 설정:
   ```
   Name: Content Repurposer Pro
   Price: $29/month
   Description: Unlimited content repurposing. Turn 1 blog post into 5 platform-ready posts in 60 seconds. 9.8/10 quality average.
   URL: content-repurposer-pro
   ```
3. "Publish" 클릭

### 3. 결제 링크 복사
- 생성된 링크: `https://hotteok.gumroad.com/l/content-repurposer-pro`
- 이 링크를 랜딩 페이지에 추가

### 4. 랜딩 페이지 업데이트
`projects/content-repurposer/landing/index.html` 에서:
```html
<!-- 현재 -->
<a href="#waitlist" class="plan-btn plan-btn-pro">Join Launch Waitlist →</a>

<!-- 변경 -->
<a href="https://hotteok.gumroad.com/l/content-repurposer-pro" 
   class="plan-btn plan-btn-pro" target="_blank">Start Pro - $29/mo →</a>
```

**수수료:** 10% (Gumroad 기본)  
**장점:** 가입 즉시 판매 가능, 구독 관리 포함, 환불 처리 자동화

---

## ✅ 옵션 B: Stripe Payment Links (더 저렴)

### 1. 계정 생성
1. https://stripe.com 접속 → "Start now"
2. 이메일 인증 → 비즈니스 정보 입력

### 2. Payment Link 생성
1. Dashboard → "Payment Links" → "New payment link"
2. "+ Add a product" → "Create new product":
   ```
   Name: Content Repurposer Pro
   Type: Recurring
   Price: $29.00 / month
   ```
3. "Create link" 클릭
4. 생성된 링크 복사: `https://buy.stripe.com/XXXXXX`

### 3. 랜딩 페이지 업데이트
```html
<a href="https://buy.stripe.com/XXXXXX" 
   class="plan-btn plan-btn-pro" target="_blank">Start Pro - $29/mo →</a>
```

**수수료:** 2.9% + $0.30 (Stripe 기본, Gumroad보다 훨씬 저렴)  
**장점:** 낮은 수수료, 전문적인 결제 페이지, 구독 관리 대시보드

---

## 📝 런칭 전 체크리스트

- [ ] 결제 계정 생성 (Gumroad 또는 Stripe)
- [ ] Pro 플랜 상품 생성 ($29/month)
- [ ] 결제 링크 복사
- [ ] `landing/index.html` Plan 버튼 URL 업데이트
- [ ] 테스트 결제 ($1 또는 테스트 카드로)
- [ ] GitHub Pages/Cloudflare에 업데이트된 랜딩 페이지 재배포

---

## 🚀 Formspree 이메일 폼 (waitlist 실제 수집)

현재 waitlist 폼은 localStorage만 저장함. 실제 이메일 수집 위해:

### 1. https://formspree.io 가입 (무료 50개/월)
### 2. "New Form" 생성 → endpoint 복사
   예: `https://formspree.io/f/xabc1234`

### 3. landing/index.html 수정
```html
<!-- 기존 onsubmit="handleWaitlist(event)" 제거하고 -->
<form id="waitlist-form" 
      action="https://formspree.io/f/xabc1234" 
      method="POST"
      style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap;">
  <input type="email" name="email" id="waitlist-email" placeholder="you@example.com" required ...>
  <input type="hidden" name="_subject" value="New Content Repurposer Waitlist Signup">
  <button type="submit" class="btn-primary">Notify Me 🔔</button>
</form>
```

---

_생성: 2026-03-05 by 호떡 🥞_
_도균님: Gumroad 계정 생성 후 링크만 넣으면 바로 런칭 가능_
