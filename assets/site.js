
document.documentElement.classList.add('js-ready');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }
  }, {threshold:0.09,rootMargin:'0px 0px -25px 0px'});
  reveals.forEach(el => observer.observe(el));
} else { reveals.forEach(el => el.classList.add('is-visible')); }
const tabs = document.querySelectorAll('[data-filter]');
const articles = document.querySelectorAll('[data-category]');
const empty = document.getElementById('archive-empty');
tabs.forEach(tab => tab.addEventListener('click', () => {
  const category = tab.dataset.filter;
  tabs.forEach(t => t.setAttribute('aria-pressed', String(t === tab)));
  let visible = 0;
  articles.forEach(a => {
    const match = category === 'all' || a.dataset.category === category;
    a.hidden = !match;
    if (match) visible++;
  });
  if (empty) empty.hidden = visible > 0;
}));
