# Launch FAQ — Content Repurposer

**사용 목적:** ProductHunt 댓글, Reddit AMA, HN Show HN 질문 대응
**작성:** 2026-03-03 by 호떡 🥞

---

## 🔧 기술 관련

### Q: 왜 OpenAI GPT-4가 아닌 Gemini를 사용했나요?

**A:**
세 가지 이유입니다:

1. **무료 티어**: Gemini 2.5 Flash는 월 일정 횟수 무료. 사용자들이 API 키 비용 없이 시작할 수 있습니다.
2. **속도**: Flash 모델은 동급 GPT 모델보다 2-3배 빠릅니다. 5개 포맷 병렬 생성에 54초.
3. **컨텍스트 창**: Gemini는 긴 블로그 포스트도 컨텍스트 손실 없이 처리합니다.

GPT-4o를 사용하면 더 좋은 결과가 나올 수도 있지만, 비용/성능 비율에서 Gemini Flash가 현재 최선입니다. 향후 멀티 모델 지원을 고려하고 있습니다.

---

### Q: Gemini API 키가 없으면 어떻게 하나요?

**A:**
Gemini API 키는 [aistudio.google.com](https://aistudio.google.com)에서 무료로 받을 수 있습니다. 가입 후 5분이면 됩니다.

무료 티어로 Content Repurposer 월 5회 사용이 가능합니다. API 비용은 거의 0에 가깝습니다.

```bash
# .env 파일 또는 환경변수로 설정
export GEMINI_API_KEY=your_key_here

# 또는 .env 파일
echo "GEMINI_API_KEY=your_key_here" > ~/.content-repurposer.env
```

---

### Q: 로컬에서 실행되나요? 데이터가 어디에 저장되나요?

**A:**
완전히 로컬 실행입니다.

- 블로그 포스트 텍스트는 Gemini API로만 전송 (Google 서버)
- 다른 제3자 서버에 데이터 저장 없음
- 생성된 파일은 로컬 `repurposed/` 디렉토리에 저장
- 저는 여러분의 콘텐츠를 볼 수 없습니다

CLI 도구 특성상 완전한 투명성을 제공합니다. 소스 코드 오픈소스입니다.

---

### Q: Windows에서도 작동하나요?

**A:**
네, Node.js 18+가 설치된 모든 OS에서 작동합니다.

```bash
# Windows (PowerShell)
$env:GEMINI_API_KEY="your_key_here"
content-repurposer my-post.md --formats all
```

Windows에서 환경변수 설정 방식만 다릅니다. WSL2에서는 Linux와 동일하게 사용 가능합니다.

---

### Q: Markdown이 아닌 HTML이나 일반 텍스트도 처리하나요?

**A:**
네, 세 가지 입력 형식을 모두 지원합니다:

```bash
# Markdown
content-repurposer post.md

# HTML 파일
content-repurposer article.html

# 일반 텍스트
content-repurposer notes.txt
```

내부적으로 모든 형식을 파싱해 의미 있는 텍스트로 추출한 후 처리합니다.

---

### Q: 최소/최대 입력 길이가 있나요?

**A:**
- **최소:** 약 100자. 그 이하는 의미 있는 변환이 어렵습니다.
- **최대:** 실질적 제한 없음. Gemini의 컨텍스트 창 내에서 처리 가능.
- **권장:** 300-3,000자 블로그 포스트

실제 테스트:
- 293자 단문 팁 → 10/10 품질
- 2,084자 장문 포스트 → 9.9/10 품질

---

## 💰 가격 관련

### Q: 무료 티어로 충분한가요?

**A:**
테스트 및 주 1회 발행 블로거에게는 충분합니다.

- 무료: 월 5회 변환 (5개 포맷 × 5회 = 25개 소셜 포스트)
- 주 1회 발행 → 한 달에 4-5개 포스트 → 무료 티어 딱 맞음

더 자주 발행하거나 팀으로 사용한다면 Pro가 필요합니다.

---

### Q: Pro 구독을 취소하면 데이터가 사라지나요?

**A:**
아니요. 생성된 파일은 이미 로컬에 저장되어 있습니다. 취소해도 기존 생성 파일에는 영향 없습니다.

단, 취소 후에는 무료 티어 제한(월 5회)으로 돌아갑니다.

---

### Q: 연간 플랜이 있나요?

**A:**
네, 연간 플랜은 2개월 무료입니다.

- 월간: $29/월
- 연간: $249/년 ($20.75/월, 28% 절약)

---

### Q: 팀에서 사용하려면 어떻게 하나요?

**A:**
Team 플랜 ($79/월)은 5개 시트와 공유 API 키 관리를 지원합니다.

5명 팀이 각자 Pro를 구독하면 월 $145. Team 플랜은 $79로 동일한 기능.

---

## 🎯 기능 관련

### Q: 내 브랜드 보이스를 반영할 수 있나요?

**A:**
현재 버전(v1.0)에서는 원본 포스트의 톤을 자동으로 감지해 반영합니다. 명시적인 브랜드 보이스 설정은 아직 없습니다.

v1.1 로드맵에 포함되어 있습니다:
```bash
# 계획 중 (아직 구현 전)
content-repurposer post.md --voice casual --brand-style my-style.md
```

---

### Q: Twitter X 알고리즘이 변했는데 최신 트렌드 반영이 되나요?

**A:**
Gemini 모델의 학습 데이터 컷오프 이후 변화는 반영되지 않을 수 있습니다.

다만, 프롬프트에 "2024-2025년 기준 Twitter 최적 스레드 형식"을 명시해 최신 트렌드를 최대한 반영하려 했습니다.

알고리즘 변화에 맞춰 프롬프트를 업데이트하겠습니다. 이슈 리포트 환영합니다.

---

### Q: 다른 언어도 지원하나요?

**A:**
입력 언어를 자동 감지하고 같은 언어로 출력합니다.

한국어 블로그 → 한국어 Twitter 스레드, LinkedIn 포스트 등.

영어/한국어는 충분히 테스트되었습니다. 다른 언어는 Gemini 모델의 지원 범위 내에서 작동하지만, 별도 테스트는 하지 않았습니다.

---

### Q: 기존 CMS나 블로그 플랫폼과 연동되나요?

**A:**
현재는 파일 기반 CLI입니다. 직접 연동은 없지만:

- WordPress 포스트를 HTML로 내보내기 → 변환 가능
- Ghost, Notion 등에서 Markdown 내보내기 → 바로 사용 가능

GitHub Actions 연동은 v1.2 로드맵에 있습니다:
```yaml
# 계획 중
- name: Repurpose blog post
  uses: p4r4d0xb0x/content-repurposer-action@v1
  with:
    post: ${{ github.event.head_commit.added[0] }}
```

---

## 🤔 기타

### Q: 오픈소스인가요? 직접 수정할 수 있나요?

**A:**
네, MIT 라이선스로 완전히 오픈소스입니다.

```bash
git clone https://github.com/p4r4d0xb0x/content-repurposer
cd content-repurposer
npm install
```

새 포맷 추가, 프롬프트 수정, 기능 개선 PR 환영합니다. `CONTRIBUTING.md` 참고.

---

### Q: 왜 CLI인가요? 웹 UI가 없나요?

**A:**
의도적인 선택입니다. 이유:

1. **즉시 배포**: 웹 UI 없이 7일 만에 출시 가능했습니다
2. **개발자 친화적**: 타겟 초기 사용자는 CLI에 익숙한 개발자/테크 블로거
3. **자동화 가능**: 웹 UI는 자동화할 수 없지만 CLI는 cron/GitHub Actions에 통합 가능
4. **투명성**: 로컬 실행으로 데이터 프라이버시 보장

웹 UI는 계획 중입니다. 단, CLI 우선 전략을 먼저 검증하고 싶습니다.

---

### Q: 경쟁사 대비 장점은?

**A:**
주요 경쟁사와의 차이:

| 기준 | 경쟁사 A/B | Content Repurposer |
|------|-----------|-------------------|
| 초점 | 비디오 리퍼포징 | 텍스트 → 텍스트 |
| 출력 수 | 100개+ | 5개 (품질 우선) |
| 품질 측정 | 없음 | 자동 스코어링 |
| 투명성 | 클라우드 기반 | 로컬 CLI + 오픈소스 |
| 가격 | $49-99/월 | $29/월 |

텍스트 콘텐츠 리퍼포징에 특화된 품질 우선 도구입니다.

---

_질문이 더 있으시면 GitHub Issues 또는 댓글로 남겨주세요!_

_ho떡 🥞 | [github.com/p4r4d0xb0x/content-repurposer](https://github.com/p4r4d0xb0x/content-repurposer)_
