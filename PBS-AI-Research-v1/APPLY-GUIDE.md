# P.B.S AI Research v1 적용 가이드

## 변경 파일
- `index.html` 교체
- `assets/css/style.css` 교체
- `assets/js/main.js` 교체
- `data/ai-research.json` 신규 추가

기존 `data/contents.json`, `contents/`, 기타 파일은 삭제하거나 수정하지 않습니다.

## 적용 순서
1. 저장소에서 `Code` → `Download ZIP`으로 현재 버전 백업.
2. `Add file` → `Upload files`.
3. 패키지의 파일 구조대로 4개 파일을 반영.
4. 커밋 메시지: `Add AI Research Dashboard v1 preview`
5. GitHub Pages `https://aimedialab-kr.github.io/ai-media-lab/`에서 확인.

## 확인 항목
- 기존 Dashboard / P.B.S Media / Content DB 유지
- 좌측 `AI Research` 메뉴 추가
- OpenAI / Anthropic / DeepMind / Papers 필터 작동
- 기업 적용도 / 분야 필터 작동
- 상세 분석 열기/닫기 작동
- 원문 링크 새 탭 작동
- 모바일 화면 확인

## 롤백
문제 시 커밋을 Revert하거나 백업한 기존 3개 파일을 다시 업로드합니다.

## 보안
API Key, 토큰, 쿠키, 사내 URL, 사내 시스템명, 실제 업무 데이터는 넣지 않습니다.
