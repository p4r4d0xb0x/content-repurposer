# Stripe 결제 설정 가이드 (D-4 → D-3)

**목적:** 도균님이 최소한의 시간으로 결제를 활성화할 수 있도록 단계별 안내

---

## ⚡ 빠른 셋업 (30분 이내)

### Option A: Gumroad (추천 - 가장 빠름, 계정 없어도 즉시 시작)

**Why Gumroad?**
- 계정 생성 후 5분 안에 결제 링크 생성 가능
- Stripe 계정 불필요
- 수수료: 10% (Stripe: ~3%)
- 인도 포함 글로벌 결제 지원

**설정 순서:**
1. https://gumroad.com → Create account
2. New Product → "Content Repurposer Pro"
3. Recurring (subscription) → $29/month
4. Description: "Unlimited content repurposing for creators. 5 formats, 10/10 quality, CLI."
5. Save → Get payment link: `https://[yourname].gumroad.com/l/content-repurposer-pro`
6. 해당 링크를 `landing/index.html`과 `README.md`에 추가

**예상 소요 시간:** 10-15분

---

### Option B: Stripe (낮은 수수료, 더 전문적)

**설정 순서:**
1. https://stripe.com → Create account → Business info
2. Dashboard → Products → Create product
   - Name: "Content Repurposer Pro"
   - Recurring price: $29/month
3. Payment Links → Create link
4. 링크 복사 → `landing/index.html`과 `README.md`에 추가

**예상 소요 시간:** 20-30분 (계정 인증 포함)

---

## 코드 통합 (내가 미리 준비함)

### landing/index.html 수정 위치
```html
<!-- 현재 (placeholder) -->
<a href="#pricing" class="cta-button">Start Free Trial</a>

<!-- 변경 후 (Gumroad 예시) -->
<a href="https://[yourname].gumroad.com/l/content-repurposer-pro" 
   class="cta-button" 
   target="_blank">
  Start Pro Trial - $29/mo
</a>
```

### README.md 추가 위치
```markdown
## 💳 Pricing

| Plan | Price | Formats | Quality |
|------|-------|---------|---------|
| Free | $0 | 5/month | Standard |
| Pro | [$29/mo](YOUR_PAYMENT_LINK) | Unlimited | Premium |

[**→ Start Pro Trial**](YOUR_PAYMENT_LINK)
```

---

## 대안: 런칭 전 결제 없이 "Waitlist" 전략

만약 D-4에 결제 설정이 어려우면:
- Waitlist Worker가 이미 배포 준비 완료 (`waitlist-worker/`)
- ProductHunt 런칭 → "Notify me" 방식으로 이메일 수집 먼저
- 런칭 후 D+1에 Gumroad/Stripe 연결
- 리스크: 첫날 유료 전환 기회 일부 손실

---

## 준비된 파일들

| 파일 | 상태 |
|------|------|
| `landing/index.html` | ✅ (결제 링크만 교체) |
| `waitlist-worker/` | ✅ (KV namespace ID만 필요) |
| `marketing/EMAIL_SEQUENCES.md` | ✅ (11개 이메일 초안) |
| `npm publish` | ✅ dry-run 통과 (login만 필요) |

---

_Prepared by 호떡 🥞 - 2026-03-04 00:04 KST (D-4)_
_도균님이 Stripe/Gumroad 계정 생성 후 링크만 전달해주시면 즉시 통합 가능_
