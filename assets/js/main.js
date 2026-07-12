const today = new Date();
document.getElementById('today').textContent = today.toLocaleDateString('ko-KR', {
  year:'numeric', month:'long', day:'numeric', weekday:'short'
});

const goalChecks = [...document.querySelectorAll('[id^="goal-"]')];
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function updateProgress(){
  const done = goalChecks.filter(item => item.checked).length;
  const percent = Math.round((done / goalChecks.length) * 100);
  progressBar.style.width = percent + '%';
  progressText.textContent = percent + '%';
}
goalChecks.forEach(item => item.addEventListener('change', updateProgress));

document.getElementById('resetTasks').addEventListener('click', () => {
  document.querySelectorAll('[id^="task-"]').forEach(item => item.checked = false);
});

document.querySelectorAll('[data-target]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.target)?.scrollIntoView({behavior:'smooth'});
  });
});
