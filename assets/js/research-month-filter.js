(()=> {
  const controls = document.querySelector('.research-filters');
  if (!controls) return;

  const wrap = document.createElement('label');
  wrap.className = 'pbs-month-filter';
  wrap.innerHTML = '<span class="pbs-month-label">월별 보기</span><input id="pbsMonth" type="month" min="2026-06" max="2026-08" value="2026-08">';

  const all = document.createElement('button');
  all.type = 'button';
  all.className = 'pbs-month-all';
  all.textContent = '전체 기간';

  controls.insertBefore(all, controls.firstChild);
  controls.insertBefore(wrap, controls.firstChild);

  const style = document.createElement('style');
  style.textContent = `
    .pbs-month-filter,.pbs-month-all{box-sizing:border-box;height:40px}
    .pbs-month-filter{display:inline-flex;align-items:center;gap:8px;border:1px solid #d9d9d9;background:#fff;border-radius:999px;padding:0 14px;color:#666;font-size:12px;line-height:1;white-space:nowrap}
    .pbs-month-label{color:#666;font-size:12px;line-height:1}
    .pbs-month-filter input{border:0!important;outline:0!important;background:transparent!important;font:inherit;font-weight:600;color:#111;padding:0;margin:0;min-width:122px;cursor:pointer;box-shadow:none!important}
    .pbs-month-all{appearance:none;-webkit-appearance:none;display:inline-flex;align-items:center;justify-content:center;border:1px solid #d9d9d9!important;background:#fff!important;color:#111!important;border-radius:999px!important;padding:0 16px!important;margin:0!important;font:inherit;font-size:12px!important;font-weight:500;line-height:1!important;cursor:pointer;box-shadow:none!important;white-space:nowrap}
    .pbs-month-all:hover{background:#111!important;color:#fff!important;border-color:#111!important}
    .research-month-hidden{display:none!important}
  `;
  document.head.appendChild(style);

  const input = wrap.querySelector('input');
  function apply() {
    const month = input.value;
    document.querySelectorAll('.research-card').forEach(card => {
      const d = card.querySelector('.research-date')?.textContent.trim() || '';
      card.classList.toggle('research-month-hidden', !!month && !d.startsWith(month));
    });
  }
  input.addEventListener('change', apply);
  all.addEventListener('click', () => { input.value=''; apply(); });
  const cards=document.getElementById('researchCards');
  if(cards)new MutationObserver(apply).observe(cards,{childList:true});
  setTimeout(apply,50);
})();