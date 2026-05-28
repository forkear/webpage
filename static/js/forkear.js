'use strict';

// ── TRADUCCIONES ──────────────────────────────────────
const T = {
  es: {
    'nav.inicio':    'Inicio',
    'nav.servicios': 'Servicios',
    'nav.portfolio': 'Portfolio',
    'nav.sobre':     'Sobre Forkear',
    'nav.contacto':  'Contacto',
    'nav.lang':      'EN',

    'hero.skip':   'omitir ↓',
    'hero.scroll': 'bajar',
    'hero.cta':    'Ver servicios',
    'hero.sub':    'Hacemos que las cosas sucedan.',

    'srv.title':      'Servicios',
    'srv.sub':        'Un desarrollador. Múltiples capacidades.',
    'srv.web.title':  'Desarrollo Web',
    'srv.web.body':   'Apps web, APIs REST, frontends reactivos y backends robustos adaptados a tu necesidad.',
    'srv.sw.title':   'Software a Medida',
    'srv.sw.body':    'Sistemas, scripts y automatizaciones diseñadas específicamente para tu problema.',
    'srv.iot.title':  'IoT & Networking',
    'srv.iot.body':   'Firmware, dispositivos conectados, protocolos de red y arquitecturas M2M.',
    'srv.bc.title':   'Blockchain / Web3',
    'srv.bc.body':    'Smart contracts, tokens, wallets e integración con redes descentralizadas.',
    'srv.ai.title':   'IA & Agentes',
    'srv.ai.body':    'Pipelines de IA, modelos de lenguaje y orquestadores de agentes autónomos.',
    'srv.cons.title': 'Consultoría',
    'srv.cons.body':  'Arquitectura de sistemas, auditorías técnicas y asesoramiento estratégico IT.',

    'about.title': '¿Qué es Forkear?',
    'about.lead':  'Somos de la Patagonia argentina. Del fin del mundo. Y desde ahí, construimos tecnología para el resto.',
    'about.p1':    'El nombre viene del proceso Unix fork() — la capacidad del sistema de bifurcarse para ejecutar múltiples tareas en paralelo. Así opera Forkear: abarcando disciplinas, contextos e industrias sin perder foco ni calidad en ninguno.',
    'about.p2':    'Podemos resolver el problema que llegás a traernos, y lo vamos a resolver bien. Pero lo que diferencia a Forkear es lo que pasa después de escucharte: <strong>la capacidad de ver lo que otros no ven — oportunidades que todavía no tienen nombre, problemas que todavía no sabés que tenés.</strong>',
    'about.p3':    'Cuando trabajás con Forkear, no solo resolvés lo que sabías que tenías. Descubrís lo que no sabías que podías.',
    'about.close': 'Somos Forkear. Hacemos que las cosas sucedan.',
    'stat.exp':    'años de experiencia',
    'stat.areas':  'áreas de especialización',
    'stat.proj':   'soluciones realizadas',

    'port.title':    'Portfolio',
    'port.sub':      'Proyectos seleccionados.',
    'port.sn.title': 'SensorNode — Telemetría Industrial IoT',
    'port.sn.body':  'Plataforma de monitoreo en tiempo real para entornos industriales. Procesamiento de datos de sensores, alertas automáticas y dashboard de control con retención histórica.',
    'port.hc.title': 'HashCert — Certificación en Blockchain',
    'port.hc.body':  'Sistema de certificación de documentos sobre Ethereum. Contratos inteligentes para verificar autenticidad e integridad sin depender de terceros de confianza.',
    'port.fa.title': 'FlowAgent — Orquestador de Agentes IA',
    'port.fa.body':  'Sistema multi-agente que automatiza flujos de trabajo empresariales usando LLMs. Reduce tiempos operativos hasta un 70% en procesos repetitivos de alta complejidad.',

    'contact.title': 'Contacto',
    'contact.sub':   '¿Tenés un proyecto? Hablemos.',
    'contact.text':  'Escribime a',
    'contact.text2': 'y charlamos.',

    'footer.copy': '© 2026 · Hacemos que las cosas sucedan.',
  },
  en: {
    'nav.inicio':    'Home',
    'nav.servicios': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.sobre':     'About Forkear',
    'nav.contacto':  'Contact',
    'nav.lang':      'ES',

    'hero.skip':   'skip ↓',
    'hero.scroll': 'scroll',
    'hero.cta':    'View services',
    'hero.sub':    'We make things happen.',

    'srv.title':      'Services',
    'srv.sub':        'One developer. Multiple capabilities.',
    'srv.web.title':  'Web Development',
    'srv.web.body':   'Web apps, REST APIs, reactive frontends and robust backends tailored to your needs.',
    'srv.sw.title':   'Custom Software',
    'srv.sw.body':    'Systems, scripts and automations designed specifically for your problem.',
    'srv.iot.title':  'IoT & Networking',
    'srv.iot.body':   'Firmware, connected devices, network protocols and M2M architectures.',
    'srv.bc.title':   'Blockchain / Web3',
    'srv.bc.body':    'Smart contracts, tokens, wallets and integration with decentralized networks.',
    'srv.ai.title':   'AI & Agents',
    'srv.ai.body':    'AI pipelines, language models and autonomous agent orchestrators.',
    'srv.cons.title': 'Consulting',
    'srv.cons.body':  'Systems architecture, technical audits and strategic IT advisory.',

    'about.title': 'What is Forkear?',
    'about.lead':  "We're from Patagonia, Argentina. From the end of the world. And from there, we build technology for the rest of it.",
    'about.p1':    "The name comes from the Unix fork() process — the system's ability to split and run multiple tasks in parallel. That's how Forkear operates: spanning disciplines, contexts and industries without losing focus or quality in any of them.",
    'about.p2':    "We can solve the problem you bring us, and we'll solve it well. But what sets Forkear apart is what happens after we listen: <strong>the ability to see what others miss — opportunities that don't have a name yet, problems you don't know you have yet.</strong>",
    'about.p3':    "When you work with Forkear, you don't just fix what you knew was broken. You discover what you didn't know you could build.",
    'about.close': 'We are Forkear. We make things happen.',
    'stat.exp':    'years of experience',
    'stat.areas':  'areas of expertise',
    'stat.proj':   'solutions delivered',

    'port.title':    'Portfolio',
    'port.sub':      'Selected projects.',
    'port.sn.title': 'SensorNode — Industrial IoT Telemetry',
    'port.sn.body':  'Real-time monitoring platform for industrial environments. Sensor data processing, automated alerts and control dashboard with historical retention.',
    'port.hc.title': 'HashCert — Blockchain Certification',
    'port.hc.body':  'Document certification system on Ethereum. Smart contracts to verify authenticity and integrity without relying on trusted third parties.',
    'port.fa.title': 'FlowAgent — AI Agent Orchestrator',
    'port.fa.body':  'Multi-agent system that automates enterprise workflows using LLMs. Reduces operational time by up to 70% on highly complex repetitive processes.',

    'contact.title': 'Contact',
    'contact.sub':   "Got a project? Let's talk.",
    'contact.text':  'Write to me at',
    'contact.text2': "and let's chat.",

    'footer.copy': '© 2026 · We make things happen.',
  },
};

const WORDS_LANG = {
  es: ['desarrollo web', 'software a medida', 'IoT & networking', 'blockchain', 'IA & agentes', 'consultoría'],
  en: ['web development', 'custom software',  'IoT & networking', 'blockchain', 'AI & agents',  'consulting'],
};

let currentLang = localStorage.getItem('lang') || 'es';
let heroReady   = false;

function applyLang(lang) {
  const t = T[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  if (heroReady) {
    const subEl = document.getElementById('heroSub');
    if (subEl) subEl.textContent = t['hero.sub'];
  }

  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// ── NAV ──────────────────────────────────────────────
const nav    = document.getElementById('nav');
const burger = document.getElementById('navBurger');
const menu   = document.getElementById('navMenu');

const updateNav = () => nav.classList.toggle('pinned', scrollY > 20);
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});

document.querySelectorAll('.nav-menu a').forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
  })
);

// ── REVEAL ON SCROLL ─────────────────────────────────
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── CANVAS PARTÍCULAS ─────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles;
  let mx = -999, my = -999;

  function setup() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    const n = Math.min(Math.floor(W * H / 9500), 110);
    particles = Array.from({ length: n }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * .38,
      vy: (Math.random() - .5) * .38,
      r:  Math.random() * 1.6 + .4,
      a:  Math.random() * .45 + .08,
    }));
  }

  window.addEventListener('resize',    setup, { passive: true });
  window.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  }, { passive: true });

  setup();

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      const dmx = p.x - mx, dmy = p.y - my;
      const dm  = Math.sqrt(dmx * dmx + dmy * dmy);
      if (dm < 95 && dm > 0) {
        const f = ((95 - dm) / 95) * .45;
        p.vx += (dmx / dm) * f;
        p.vy += (dmy / dm) * f;
        const s = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (s > 2) { p.vx = (p.vx / s) * 2; p.vy = (p.vy / s) * 2; }
      }

      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 135) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0,255,65,${(1 - d / 135) * .13})`;
          ctx.lineWidth   = .5;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,65,${p.a})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) { p.vx *= -1; p.x = Math.max(0, Math.min(W, p.x)); }
      if (p.y < 0 || p.y > H) { p.vy *= -1; p.y = Math.max(0, Math.min(H, p.y)); }
    }

    requestAnimationFrame(tick);
  }

  tick();
})();

// ── HERO SEQUENCE ─────────────────────────────────────
let skipFlag = false;

const sleep = ms => new Promise(res => setTimeout(res, ms));

function decodeWord(el, text, ms) {
  return new Promise(res => {
    const pool  = '!<>-_\\/[]{}=+*^?#$%@01ABCDEFabcdef';
    const steps = 22;
    let   f     = 0;

    const iv = setInterval(() => {
      if (skipFlag) { clearInterval(iv); el.textContent = text; res(); return; }
      f++;
      const locked = Math.floor((f / steps) * text.length * 1.25);
      el.textContent = [...text].map((c, i) =>
        i < locked || c === ' '
          ? c
          : pool[Math.floor(Math.random() * pool.length)]
      ).join('');
      if (f >= steps) { clearInterval(iv); el.textContent = text; res(); }
    }, ms / steps);
  });
}

async function heroSequence() {
  const wordEl   = document.getElementById('seqWord');
  const logoEl   = document.getElementById('seqLogo');
  const subEl    = document.getElementById('heroSub');
  const actionEl = document.getElementById('heroAction');
  const scrollEl = document.querySelector('.hero-scroll');
  const words    = WORDS_LANG[currentLang];

  for (const w of words) {
    if (skipFlag) break;

    wordEl.style.transition = 'none';
    wordEl.style.opacity    = '0';
    wordEl.textContent      = '';
    await sleep(25);

    wordEl.style.transition = 'opacity .22s ease';
    wordEl.style.opacity    = '1';
    await sleep(240);
    if (skipFlag) break;

    await decodeWord(wordEl, w, 520);
    if (skipFlag) break;

    await sleep(700);
    if (skipFlag) break;

    wordEl.style.transition = 'opacity .28s ease';
    wordEl.style.opacity    = '0';
    await sleep(310);
  }

  wordEl.style.display    = 'none';
  logoEl.style.visibility = 'visible';
  logoEl.style.opacity    = '0';
  await sleep(30);
  logoEl.style.transition = 'opacity 1.1s ease';
  logoEl.style.opacity    = '1';
  await sleep(skipFlag ? 0 : 1400);

  const tagline = T[currentLang]['hero.sub'];
  subEl.style.opacity = '1';
  if (!skipFlag) {
    const cur = document.createElement('span');
    cur.className   = 'type-cursor';
    cur.textContent = '█';
    subEl.appendChild(cur);
    for (const ch of tagline) {
      if (skipFlag) break;
      subEl.insertBefore(document.createTextNode(ch), cur);
      await sleep(50);
    }
    cur.remove();
    if (skipFlag) subEl.textContent = tagline;
  } else {
    subEl.textContent = tagline;
  }

  await sleep(280);

  actionEl.style.transition = 'opacity .6s ease, transform .6s ease';
  actionEl.style.opacity    = '1';
  actionEl.style.transform  = 'translateY(0)';

  if (scrollEl) {
    scrollEl.style.transition = 'opacity .6s ease .2s';
    scrollEl.style.opacity    = '1';
  }

  heroReady = true;
}

document.getElementById('skipIntro')?.addEventListener('click', () => {
  skipFlag = true;

  const wordEl   = document.getElementById('seqWord');
  const logoEl   = document.getElementById('seqLogo');
  const subEl    = document.getElementById('heroSub');
  const actionEl = document.getElementById('heroAction');
  const scrollEl = document.querySelector('.hero-scroll');

  if (wordEl) wordEl.style.opacity = '0';

  if (logoEl) {
    logoEl.style.visibility = 'visible';
    logoEl.style.transition = 'opacity .4s ease';
    logoEl.style.opacity    = '1';
  }

  if (subEl) {
    subEl.textContent   = T[currentLang]['hero.sub'];
    subEl.style.opacity = '1';
  }

  if (actionEl) {
    actionEl.style.transition = 'opacity .4s ease .1s, transform .4s ease .1s';
    actionEl.style.opacity    = '1';
    actionEl.style.transform  = 'translateY(0)';
  }

  if (scrollEl) {
    scrollEl.style.transition = 'opacity .4s ease .2s';
    scrollEl.style.opacity    = '1';
  }

  heroReady = true;
  document.getElementById('skipIntro').style.display = 'none';
});

// ── EMAIL (anti-scraping) ─────────────────────────────
(function () {
  const el = document.getElementById('emailLink');
  if (!el) return;
  const email  = atob('aG9sYQ==') + '@' + atob('Zm9ya2Vhci5jb20=');
  el.href      = 'ma' + 'ilto:' + email;
  el.textContent = email;
})();

// ── INIT ─────────────────────────────────────────────
applyLang(currentLang);
heroSequence();
