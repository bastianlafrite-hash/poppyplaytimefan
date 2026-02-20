'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initBurger();
  initParticles();
  initScrollReveal();
  initNavActiveSection();
  initParallax();
  initMonsterCards();
  initSmoothLinks();
  initDiscordModal();
  initEasterEgg();
  initGlitchEffect();
  initTimeline();
});

function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-trail');
  if (!dot || !ring) return;
  let mx = -300, my = -300, rx = -300, ry = -300, isHover = false;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  document.addEventListener('mousedown', () => { dot.classList.add('cursor-click'); ring.classList.add('ring-click'); });
  document.addEventListener('mouseup', () => { dot.classList.remove('cursor-click'); ring.classList.remove('ring-click'); });
  function attachHover() {
    document.querySelectorAll('a, button, .chapter-card, .monster-card, .polaroid, .tl-card').forEach(el => {
      el.addEventListener('mouseenter', () => isHover = true);
      el.addEventListener('mouseleave', () => isHover = false);
    });
  }
  attachHover();
  new MutationObserver(() => attachHover()).observe(document.body, { childList: true, subtree: true });
  (function loop() {
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    const ease = isHover ? 0.10 : 0.15;
    rx += (mx - rx) * ease; ry += (my - ry) * ease;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    dot.classList.toggle('dot-hover', isHover);
    ring.classList.toggle('ring-hover', isHover);
    requestAnimationFrame(loop);
  })();
  document.body.style.cursor = 'none';
}

function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });
}

function initBurger() {
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;
  burger.addEventListener('click', () => { burger.classList.toggle('open'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); links.classList.remove('open'); }));
}

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
  const NUM = 80, particles = [];
  for (let i = 0; i < NUM; i++) particles.push(mkParticle(true));
  function mkParticle(rand = false) {
    const spark = Math.random() < .3;
    return { x: Math.random() * W, y: rand ? Math.random() * H : H + 10, vx: (Math.random() - .5) * .3, vy: -(Math.random() * .4 + .1), size: spark ? Math.random() * .8 + .2 : Math.random() * 1.5 + .3, life: 1, decay: Math.random() * .003 + .001, spark, hue: spark ? 'rgba(220,60,60,' : 'rgba(180,160,120,', };
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx + Math.sin(Date.now() * .001 + i) * .15; p.y += p.vy; p.life -= p.decay;
      if (p.life <= 0 || p.y < -10) { particles[i] = mkParticle(); continue; }
      ctx.save(); ctx.globalAlpha = p.life * .7;
      if (p.spark) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 4, p.y + p.vy * 4); ctx.strokeStyle = p.hue + p.life + ')'; ctx.lineWidth = p.size; ctx.shadowBlur = 4; ctx.shadowColor = '#ff2a2a'; ctx.stroke(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fillStyle = p.hue + (p.life * .5) + ')'; ctx.fill(); }
      ctx.restore();
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }, { passive: true });
}

function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const variants = ['translateY(45px)', 'translateY(35px) translateX(-25px)', 'translateY(35px) translateX(25px)', 'translateY(55px) scale(.95)'];
  els.forEach((el, i) => { el.style.cssText += `opacity:0;transform:${variants[i % variants.length]};transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1);will-change:opacity,transform;`; });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll('[data-reveal]')];
      const delay = Math.min(siblings.indexOf(entry.target) * 110, 550);
      setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0) translateX(0) scale(1)'; entry.target.classList.add('revealed'); }, delay);
      obs.unobserve(entry.target);
    });
  }, { threshold: .06, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}

function initNavActiveSection() {
  const sections = ['hero', 'chapters', 'timeline', 'monsters'].map(id => document.getElementById(id)).filter(Boolean);
  const links = document.querySelectorAll('.nav-link[href^="#"]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) { links.forEach(l => l.classList.remove('nav-active')); link.classList.add('nav-active'); }
    });
  }, { rootMargin: '-80px 0px -55% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
}

function initParallax() {
  const content = document.getElementById('hero-content');
  const hero = document.getElementById('hero');
  const fogs = document.querySelectorAll('.fog');
  const grid = document.querySelector('.hero-grid');
  if (!content || !hero) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY, hh = hero.offsetHeight;
      if (sy <= hh * 1.1) {
        content.style.transform = `translateY(${sy * .2}px)`;
        content.style.opacity = Math.max(0, 1 - (sy / hh) * 1.5).toFixed(3);
        if (grid) grid.style.transform = `translateY(${sy * .1}px)`;
        fogs.forEach((f, i) => f.style.transform = `translateY(${sy * (i + 1) * .045}px)`);
      }
      ticking = false;
    });
  }, { passive: true });
  if (window.innerWidth > 900) {
    let trx = 0, try_ = 0, crx = 0, cry = 0;
    hero.addEventListener('mousemove', e => { trx = (e.clientX / window.innerWidth - .5) * 14; try_ = (e.clientY / window.innerHeight - .5) * 10; });
    hero.addEventListener('mouseleave', () => { trx = 0; try_ = 0; });
    (function tiltLoop() {
      if (window.scrollY < hero.offsetHeight) {
        crx += (trx - crx) * .06; cry += (try_ - cry) * .06;
        if (Math.abs(crx) > .05 || Math.abs(cry) > .05) content.style.transform = `translate(${crx * .2}px,${cry * .2}px) translateY(${window.scrollY * .2}px)`;
      }
      requestAnimationFrame(tiltLoop);
    })();
  }
}

function initMonsterCards() {
  document.querySelectorAll('.monster-card').forEach(card => {
    const color = card.getAttribute('data-color') || '#333';
    card.style.setProperty('--card-color', color);
    const bg = card.querySelector('.monster-bg'), glow = card.querySelector('.monster-glow');
    if (bg)   bg.style.background   = `radial-gradient(ellipse at 50% 0%,${color}55 0%,transparent 70%)`;
    if (glow) glow.style.background = color;
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      card.style.transform = `translateY(-8px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) scale(1.01)`;
      card.style.transition = 'transform .06s ease';
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; card.style.transition = 'transform .5s cubic-bezier(.23,1,.32,1)'; });
  });
}

function initSmoothLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const t = document.querySelector(href);
      if (!t) return; e.preventDefault();
      const targetY = t.getBoundingClientRect().top + window.scrollY - 72;
      const dist = targetY - window.scrollY;
      const dur = Math.max(300, Math.min(900, Math.abs(dist) * .6));
      const startY = window.scrollY; let startTs = null;
      const ease = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      (function step(ts) { if (!startTs) startTs = ts; const p = Math.min((ts - startTs) / dur, 1); window.scrollTo(0, startY + dist * ease(p)); if (p < 1) requestAnimationFrame(step); })(performance.now());
    });
  });
}

function initDiscordModal() {
  const overlay = document.getElementById('discord-modal');
  const closeBtn = document.getElementById('discord-modal-close');
  if (!overlay) return;
  const openModal = e => { e.preventDefault(); overlay.classList.add('open'); overlay.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; const pct = overlay.querySelector('.dsc-pct'); if (pct) pct.textContent = (Math.floor(Math.random() * 40) + 20) + '%'; };
  const closeModal = () => { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  document.querySelectorAll('.discord-trigger').forEach(el => el.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function initEasterEgg() {
  const seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; let idx = 0;
  document.addEventListener('keydown', e => { idx = (e.keyCode === seq[idx]) ? idx + 1 : 0; if (idx === seq.length) { idx = 0; showEgg(); } });
  function showEgg() {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.96);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;font-family:Rye,serif;color:#c0392b;text-align:center;padding:2rem';
    el.innerHTML = `<div style="font-size:clamp(1.5rem,5vw,3rem);text-shadow:0 0 40px #c0392b;letter-spacing:.1em;">ILS VOUS REGARDENT</div><div style="font-family:'Special Elite',serif;font-size:.9rem;color:rgba(200,167,64,.6);letter-spacing:.2em;">— Playtime Co. Internal Security —</div><div style="font-size:2.5rem;animation:egg-pulse 1s ease-in-out infinite">👁</div><button onclick="this.parentElement.remove()" style="margin-top:1rem;background:none;border:1px solid #c0392b;color:#c0392b;font-family:Oswald,sans-serif;font-size:.7rem;letter-spacing:.3em;padding:.6rem 1.5rem;cursor:none;text-transform:uppercase;">FERMER</button>`;
    const s = document.createElement('style'); s.textContent = '@keyframes egg-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.4)}}'; document.head.appendChild(s);
    document.body.appendChild(el);
    el.addEventListener('click', e => { if (e.target === el) el.remove(); });
  }
}

function initGlitchEffect() {
  const CHARS = '!<>-_\\/[]{}—=+*^?#@$%&|~ÊØ∑∆©';
  document.querySelectorAll('.monster-name').forEach(el => {
    const original = el.textContent.trim(); let raf = null;
    const scramble = p => original.split('').map((ch, i) => { if (ch === ' ') return ' '; if (i < Math.floor(original.length * p)) return ch; return Math.random() < .8 ? CHARS[Math.floor(Math.random() * CHARS.length)] : ch; }).join('');
    el.closest('.monster-card').addEventListener('mouseenter', () => {
      if (raf) cancelAnimationFrame(raf); let start = null;
      (function tick(ts) { if (!start) start = ts; const p = Math.min((ts - start) / 500, 1); el.textContent = scramble(p); if (p < 1) raf = requestAnimationFrame(tick); else { el.textContent = original; raf = null; } })(performance.now());
    });
    el.closest('.monster-card').addEventListener('mouseleave', () => { if (raf) { cancelAnimationFrame(raf); raf = null; } el.textContent = original; });
  });
  document.querySelectorAll('.title-line').forEach(line => {
    const orig = line.textContent.trim();
    setInterval(() => {
      if (Math.random() > .04) return;
      let i = 0;
      const iv = setInterval(() => { line.textContent = orig.split('').map(c => Math.random() < .35 ? CHARS[Math.floor(Math.random() * CHARS.length)] : c).join(''); if (++i > 6) { clearInterval(iv); line.textContent = orig; } }, 50);
    }, 1000);
  });
}

/* ── TIMELINE ───────────────────────────── */
function initTimeline() {
  const anchor = document.getElementById('timeline-anchor');
  if (!anchor) return;

  const events = [
    { year: '1950', cat: 'founding', title: 'Naissance de Playtime Co.',           desc: 'Eliot Ludwig fonde Playtime Co. et lance sa première création : <strong>Poppy</strong>, une poupée qui écoute vraiment. Le succès est immédiat et mondial.' },
    { year: '1955', cat: 'product',  title: 'Lancement de Doey Dough',              desc: 'La pâte à modeler <strong>Doey Dough</strong> devient le deuxième grand succès de l\'entreprise.' },
    { year: '1960', cat: 'expansion',title: 'Construction de l\'usine principale',  desc: 'Face à la demande croissante, Playtime Co. construit son <strong>usine principale</strong>, un complexe titanesque.' },
    { year: '1984', cat: 'product',  title: 'Huggy Wuggy arrive',                   desc: '<strong>Huggy Wuggy</strong> est lancé et devient instantanément la mascotte de Playtime Co. Sa vraie nature reste secrète.' },
    { year: '1986', cat: 'dark',     title: 'Projet Bigger Bodies — Phase 1',       desc: 'Lancement du projet classifié <strong>Bigger Bodies Initiative</strong>. Les premiers "volontaires" disparaissent.' },
    { year: '1988', cat: 'dark',     title: 'Expérience 1006 — Le Prototype',       desc: 'Le <strong>Prototype</strong> est créé. Les scientifiques demandent sa destruction. La direction refuse.' },
    { year: '1989', cat: 'product',  title: 'Smiling Critters',                     desc: 'Lancement de la gamme <strong>Smiling Critters</strong>. Adorables en apparence, sujets d\'expérimentation en coulisses.' },
    { year: '1990', cat: 'dark',     title: 'Expérience 1170 — Huggy Wuggy',       desc: 'L\'<strong>Expérience 1170</strong> est installée dans le Hall de l\'usine comme gardien de sécurité.' },
    { year: '1991', cat: 'product',  title: 'Mommy Long Legs — Expérience 1222',   desc: 'Marie Payne devient <strong>Mommy Long Legs</strong>, assignée à la Game Station souterraine.' },
    { year: '1992', cat: 'dark',     title: 'Ouverture de Playcare',                desc: 'L\'orphelinat souterrain <strong>Playcare</strong> ouvre. En réalité : terrain d\'expérimentation à grande échelle.' },
    { year: '1995', cat: 'collapse', title: 'La Nuit de la Disparition',            desc: 'En une seule nuit, <strong>tous les employés disparaissent</strong>. L\'usine est retrouvée vide.' },
    { year: '2021', cat: 'game',     title: 'Chapitre 1 — A Tight Squeeze',        desc: 'Un ancien employé retourne dans l\'usine. Huggy Wuggy est vivant. Poppy est libérée.' },
    { year: '2023', cat: 'game',     title: 'Chapitre 2 — Fly in a Web',           desc: 'La Game Station. Mommy Long Legs impose ses jeux mortels. Le Prototype se manifeste.' },
    { year: '2024', cat: 'game',     title: 'Chapitre 3 — Deep Sleep',             desc: 'Playcare et le Gaz Rouge. CatNap veille sur son dieu. La chapelle tombe.' },
    { year: '2025', cat: 'game',     title: 'Chapitre 4 — Safe Haven',             desc: 'Safe Haven n\'est pas un refuge. Doey rôde. Le Prototype n\'est plus dans l\'ombre.' },
    { year: '2026', cat: 'soon',     title: 'Chapitre 5 — Broken Things',          desc: '<em>Ce qui se cache dans l\'obscurité attend son heure…</em>' },
  ];

  const cats = {
    founding:  { color: '#c8a740', label: 'Fondation'   },
    product:   { color: '#1a6b4a', label: 'Produit'      },
    expansion: { color: '#1a4db5', label: 'Expansion'    },
    dark:      { color: '#8b0000', label: 'Classifié'    },
    collapse:  { color: '#cc0000', label: 'Effondrement' },
    game:      { color: '#6b2080', label: 'Jeu'           },
    soon:      { color: '#3a2060', label: 'Bientôt'       },
  };

  anchor.innerHTML = `
  <section id="timeline" data-reveal>
    <div class="section-header">
      <div class="section-label">CHRONOLOGIE CONFIDENTIELLE</div>
      <h2 class="section-title">L'Histoire de Playtime Co.</h2>
      <p class="section-desc">De la naissance d'un empire du jouet à l'abîme industriel.<br/>Chaque date cache une vérité.</p>
      <div class="tl-legend">
        ${Object.entries(cats).map(([k, v]) =>
          `<div class="tl-legend-item"><span class="tl-legend-dot" style="background:${v.color}"></span>${v.label}</div>`
        ).join('')}
      </div>
    </div>
    <div class="tl-track">
      <div class="tl-spine"></div>
      ${events.map((ev, i) => {
        const side = i % 2 === 0 ? 'left' : 'right';
        const c    = cats[ev.cat];
        const isSoon = ev.cat === 'soon';
        return `
        <div class="tl-item tl-${side}${isSoon ? ' tl-soon' : ''}" data-reveal style="--ev-color:${c.color}">
          <div class="tl-node"><div class="tl-dot${isSoon ? ' tl-dot-soon' : ''}"></div></div>
          <div class="tl-card${isSoon ? ' tl-card-soon' : ''}">
            <div class="tl-card-accent"></div>
            <div class="tl-card-year">${ev.year}</div>
            <div class="tl-card-cat">${c.label}</div>
            <h4 class="tl-card-title">${ev.title}</h4>
            <p class="tl-card-desc">${ev.desc}</p>
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>
  <div class="divider-industrial">
    <div class="div-line"></div><div class="div-icon">⚙</div><div class="div-line"></div>
  </div>`;

  // Inject CSS for the compact "soon" card
  const style = document.createElement('style');
  style.textContent = `
    .tl-item.tl-soon { padding: .6rem 0; }
    .tl-card.tl-card-soon {
      padding: .7rem 1.1rem .8rem;
      background: rgba(10,6,20,.7);
      border-color: rgba(58,32,96,.4);
      border-style: dashed;
      opacity: .72;
    }
    .tl-card.tl-card-soon:hover {
      opacity: 1;
      border-color: rgba(58,32,96,.75);
      border-style: dashed;
    }
    .tl-card-soon .tl-card-year {
      font-size: 1.1rem;
      opacity: .6;
    }
    .tl-card-soon .tl-card-cat {
      font-size: .45rem;
      margin-bottom: .3rem;
    }
    .tl-card-soon .tl-card-title {
      font-size: .85rem;
      color: rgba(200,180,240,.55);
      margin-bottom: .3rem;
    }
    .tl-card-soon .tl-card-desc {
      font-size: .78rem;
      color: rgba(160,140,200,.4);
      line-height: 1.5;
    }
    .tl-dot-soon {
      width: 8px !important;
      height: 8px !important;
      opacity: .55;
    }
    @media(max-width:860px){
      .tl-left .tl-card-soon, .tl-right .tl-card-soon {
        padding-left: .9rem;
        padding-right: .6rem;
      }
    }
  `;
  document.head.appendChild(style);

  anchor.querySelectorAll('[data-reveal]').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .7s cubic-bezier(.23,1,.32,1), transform .7s cubic-bezier(.23,1,.32,1)';
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = [...entry.target.parentElement.querySelectorAll('[data-reveal]')];
      setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0) translateX(0) scale(1)'; entry.target.classList.add('revealed'); }, Math.min(siblings.indexOf(entry.target) * 80, 400));
      obs.unobserve(entry.target);
    });
  }, { threshold: .07, rootMargin: '0px 0px -30px 0px' });
  anchor.querySelectorAll('[data-reveal]').forEach(el => obs.observe(el));
}
