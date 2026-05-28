// Nav: glass effect on scroll
const nav = document.getElementById('nav');
const updateNav = () => nav.classList.toggle('pinned', scrollY > 20);
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu
const burger = document.getElementById('navBurger');
const menu   = document.getElementById('navMenu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
document.querySelectorAll('.nav-menu a').forEach(a =>
  a.addEventListener('click', () => menu.classList.remove('open'))
);

// Reveal on scroll
const revealObs = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Skip intro — shows logo + tagline + CTA immediately
document.getElementById('skipIntro').addEventListener('click', () => {
  document.querySelectorAll('.seq-w').forEach(el => {
    el.style.animation = 'none';
    el.style.opacity   = '0';
  });

  const targets = [
    document.querySelector('.seq-logo'),
    document.querySelector('.hero-sub'),
    document.querySelector('.hero-action'),
    document.querySelector('.hero-scroll'),
  ];

  targets.forEach((el, i) => {
    if (!el) return;
    el.style.animation  = 'none';
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(16px)';
    // Double rAF: paint initial state before applying transition
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.transition = `opacity .4s ease ${i * 0.12}s, transform .4s ease ${i * 0.12}s`;
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }));
  });

  document.getElementById('skipIntro').style.display = 'none';
});

// Email ensamblado en runtime — no existe en el HTML fuente
(function () {
  const el = document.getElementById('emailLink');
  if (!el) return;
  const email = atob('aG9sYQ==') + '@' + atob('Zm9ya2Vhci5jb20=');
  el.href      = 'ma' + 'ilto:' + email;
  el.textContent = email;
})();
