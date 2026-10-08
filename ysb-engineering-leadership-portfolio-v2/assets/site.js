// Replace these placeholders with your public professional contact details.
const PROFILE = { github: 'https://github.com/', email: 'YOUR_EMAIL@example.com' };
const email = document.querySelector('#email-link');
const github = document.querySelector('#github-link');
email.href = `mailto:${PROFILE.email}`;
github.href = PROFILE.github;
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('#menu');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));
const filters = document.querySelectorAll('.filter');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed','true');
  document.querySelectorAll('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));
