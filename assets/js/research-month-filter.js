(()=>{const controls=document.querySelector('.research-filters');if(!controls)return;
const wrap=document.createElement('label');wrap.className='pbs-month-filter';wrap.innerHTML='월별 보기 <input id="pbsMonth" type="month" min="2026-06" max="2026-08" value="2026-08">';
const all=document.createElement('button');all.type='button';all.className='pbs-month-all';all.textContent='전체 기간';
controls.insertBefore(all,controls.firstChild);controls.insertBefore(wrap,controls.firstChild);
const st=document.createElement('style');st.textContent='.pbs-month-filter{display:flex;gap:8px;align-items:center;border:1px solid #ddd;background:#fafafa;border-radius:10px;padding:6px 9px;color:#6b6b6b;font-size:12px}.pbs-month-filter input{border:0;background:transparent;font-weight:700;outline:0}.pbs-month-all{border:1px solid #ddd;background:#fff;border-radius:9px;padding:8px 10px;cursor:pointer;font-size:12px}.pbs-month-all:hover{background:#111;color:#fff}.research-month-hidden{display:none!important}';document.head.appendChild(st);
const input=wrap.querySelector('input');function apply(){const m=input.value;document.querySelectorAll('.research-card').forEach(c=>{const d=c.querySelector('.research-date')?.textContent.trim()||'';c.classList.toggle('research-month-hidden',!!m&&!d.startsWith(m));});}
input.addEventListener('change',apply);all.addEventListener('click',()=>{input.value='';apply()});
new MutationObserver(apply).observe(document.getElementById('researchCards'),{childList:true});setTimeout(apply,50);
})();