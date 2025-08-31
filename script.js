// Dark mode toggle + year + basic form guard
(function() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
  if (btn) btn.addEventListener('click', () => {
    const current = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = current;
    localStorage.setItem('theme', current);
  });
  // Light theme variables if needed
  const mql = window.matchMedia('(prefers-color-scheme: light)');
  if (mql.matches && !saved) root.dataset.theme = 'light';
  document.getElementById('year').textContent = new Date().getFullYear();
})();

function validateForm(e){
  const form = e.target;
  const email = form.querySelector('input[type="email"]');
  if(!email.value.includes('@')){
    alert('Mohon masukkan email yang valid.');
    e.preventDefault();
    return false;
  }
  return true;
}
