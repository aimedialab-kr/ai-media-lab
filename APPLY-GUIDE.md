# 반영 방법

이번 패키지는 기존 화면을 최대한 건드리지 않는 방식입니다.

1. `data/ai-research.json`을 GitHub의 `data/` 폴더에 덮어씁니다.
2. `assets/js/research-month-filter.js`를 GitHub의 `assets/js/` 폴더에 새로 업로드합니다.
3. 루트 `index.html`의 `</body>` 바로 위에 아래 한 줄만 추가합니다.

<script src="assets/js/research-month-filter.js"></script>

기존 줄:
<script src="assets/js/main.js"></script>

최종:
<script src="assets/js/main.js"></script>
<script src="assets/js/research-month-filter.js"></script>
</body>

4. Commit:
Expand AI Research Jun-Aug 2026 and add month filter

5. GitHub Pages에서 Ctrl+F5.

기본값은 2026-08이며, 달력에서 2026-06/07/08을 선택할 수 있습니다.
`전체 기간`을 누르면 6~8월 자료 전체가 표시됩니다.
