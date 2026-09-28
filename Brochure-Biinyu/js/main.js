// Biinyu Studio · Brochure digital
(() => {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('nav');
  const toggle = document.querySelector('.menu-toggle');

  // Header con fondo al hacer scroll
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menú móvil
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    const t = (s) => (window.biinyuI18n ? window.biinyuI18n.t(s) : s);
    toggle.setAttribute('aria-label', t(open ? 'Cerrar menú' : 'Abrir menú'));
  };
  toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Enlaces internos: el desplazamiento se detiene unos píxeles por encima de la
  // barra amarilla de cada sección (y no en el borde de la ola)
  const BAR_GAP = 40;
  const docTop = (el) => { let y = 0; for (; el; el = el.offsetParent) y += el.offsetTop; return y; }; // ignora transformaciones
  // Altura del header ya compacto (el que se ve al llegar a la sección)
  const scrolledHeaderH = () => {
    if (header.classList.contains('is-scrolled')) return header.offsetHeight;
    const inner = header.querySelector('.site-header__inner');
    inner.style.transition = 'none';
    header.classList.add('is-scrolled');
    const h = header.offsetHeight;
    header.classList.remove('is-scrolled');
    void header.offsetHeight;
    inner.style.transition = '';
    return h;
  };
  const anchorTop = (section) => {
    const bar = section.querySelector('.section-bar');
    if (!bar) return null;
    return Math.max(0, docTop(bar) - scrolledHeaderH() - BAR_GAP);
  };
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const section = document.getElementById(link.hash.slice(1));
    const top = section && anchorTop(section);
    if (top == null) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    history.pushState(null, '', link.hash);
  });
  // Al abrir la página con #seccion en la URL
  if (location.hash) {
    window.addEventListener('load', () => {
      const section = document.getElementById(location.hash.slice(1));
      const top = section && anchorTop(section);
      if (top != null) window.scrollTo({ top, behavior: 'auto' });
    });
  }

  // Aparición de elementos al entrar en pantalla
  const revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    document.documentElement.classList.add('js');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-visible');
        io.unobserve(el);
        // Al terminar, devolver al elemento sus propias transiciones (hover)
        setTimeout(() => el.classList.remove('reveal', 'reveal--peek', 'reveal--run', 'is-visible'), 1800);
      });
    }, { threshold: 0.15 });
    revealables.forEach((el) => io.observe(el));
  }

  // Transición entre secciones: al bajar, las nubes suben por capas
  // y la sección anterior (su mascota) se "hunde" en ellas
  const dividers = document.querySelectorAll('.cloud-divider, [data-transition]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (dividers.length && !reduceMotion) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      dividers.forEach((d) => {
        const r = d.getBoundingClientRect();
        if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) return;
        // 0 cuando las nubes asoman por abajo de la pantalla, 1 cuando llegan al tercio superior
        const p = Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.65)));
        const eased = 1 - Math.pow(1 - p, 2);
        d.style.setProperty('--rise', eased.toFixed(3));
        // 0 cuando la sección entra por abajo, 1 cuando sale por arriba
        d.style.setProperty('--pass', Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height))).toFixed(3));
        const prev = d.previousElementSibling;
        if (prev) prev.style.setProperty('--dive', p.toFixed(3));
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // Recorridos que se dibujan al hacer scroll (sección 3: pasos, sección 6: logros).
  // Cada sección tiene un <svg data-path> con tramos .track en orden de lectura y
  // elementos [data-at="x,y"] (coordenadas del diseño) que se encienden cuando el camino los alcanza.
  const initScrollPath = (section, { list: listSel, marker, start, rows }) => {
    const svg = section.querySelector('[data-path]');
    const list = section.querySelector(listSel);
    const items = [...section.querySelectorAll('[data-at]')];
    if (!svg || !list || !items.length) return;
    const NS = 'http://www.w3.org/2000/svg';

    // Tramos en orden, con su longitud real para repartir el progreso
    let acc = 0;
    const segs = [...svg.querySelectorAll('.track')].map((g) => {
      const line = g.querySelector('.track__line');
      const base = line.cloneNode();
      base.classList.add('track__line--base');
      g.insertBefore(base, g.firstChild);
      const len = line.getTotalLength();
      const seg = { g, line, len, start: acc };
      acc += len;
      return seg;
    });
    const total = acc;

    // Distancia del recorrido a la que se "llega" a cada elemento: primer punto del camino
    // en su misma fila que alcanza su borde izquierdo (o el inicio del tramo siguiente)
    const reachAt = items.map((it) => {
      const [x, y] = it.dataset.at.split(',').map(Number);
      for (const s of segs) {
        for (let l = 0; l <= s.len; l += 4) {
          const pt = s.line.getPointAtLength(l);
          if (Math.abs(pt.y - y) < 4 && pt.x >= x - 38) return Math.max(0.001, s.start + l);
        }
      }
      return total;
    });

    // Modo por filas: cada fila de la línea de tiempo se dibuja mientras sus marcadores
    // bajan de 'rows' (fracción de la pantalla) hasta donde estaba la fila siguiente
    let rowList = [];
    if (rows) {
      const ys = [...new Set(items.map((it) => Number(it.dataset.at.split(',')[1])))].sort((a, b) => a - b);
      rowList = ys.map((y) => {
        const own = segs.filter((s) => {
          const y0 = s.line.getPointAtLength(0).y;
          return ys.reduce((best, v) => (Math.abs(v - y0) < Math.abs(best - y0) ? v : best), ys[0]) === y;
        });
        return {
          el: items.find((it) => Number(it.dataset.at.split(',')[1]) === y),
          from: own.length ? own[0].start : 0,
          to: own.length ? own[own.length - 1].start + own[own.length - 1].len : 0,
        };
      });
    }

    const head = document.createElementNS(NS, 'circle');
    head.setAttribute('r', '9');
    head.setAttribute('class', 'track__head');
    svg.appendChild(head);

    section.classList.add('is-animated');

    let ticking = false;
    const draw = () => {
      ticking = false;
      const vh = window.innerHeight;
      const r = list.getBoundingClientRect();
      // Empieza cuando la lista asoma por abajo de la pantalla y termina cuando el último
      // elemento queda un poco por debajo de la mitad (65% de la altura): el recorrido
      // completo se ve antes de pasar a la siguiente sección
      const last = items[items.length - 1].querySelector(marker).getBoundingClientRect();
      const lastOffset = last.top + last.height / 2 - r.top;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let p;
      if (start) {
        // Inicio retrasado: arranca cuando el primer marcador llega a 'start' (fracción de la pantalla)
        const first = items[0].querySelector(marker).getBoundingClientRect();
        const firstC = first.top + first.height / 2;
        const span = last.top + last.height / 2 - firstC;
        p = (vh * start - firstC) / Math.max(240, vh * (start - 0.65) + span);
      } else {
        p = (vh - r.top) / Math.max(240, vh * 0.35 + lastOffset);
      }
      p = atBottom ? 1 : Math.max(0, Math.min(1, p));
      const desktop = getComputedStyle(svg).display !== 'none';
      let dist = p * total;
      if (rows && desktop && !atBottom) {
        const centers = rowList.map((row) => {
          const b = row.el.querySelector(marker).getBoundingClientRect();
          return b.top + b.height / 2;
        });
        dist = 0;
        rowList.forEach((row, i) => {
          const gap = (i < centers.length - 1 ? centers[i + 1] : centers[i] + (centers[i] - centers[i - 1])) - centers[i];
          const t = Math.max(0, Math.min(1, (vh * rows - centers[i]) / gap));
          if (t > 0) dist = row.from + t * (row.to - row.from);
        });
      }

      if (desktop) {
        let headOn = false;
        segs.forEach((s) => {
          const sp = Math.max(0, Math.min(1, (dist - s.start) / s.len));
          s.line.style.strokeDashoffset = String(1 - sp);
          s.g.classList.toggle('is-started', sp > 0);
          s.g.classList.toggle('is-done', sp >= 0.97);
          if (sp > 0 && sp < 1) {
            const pt = s.line.getPointAtLength(sp * s.len);
            head.setAttribute('cx', pt.x.toFixed(1));
            head.setAttribute('cy', pt.y.toFixed(1));
            headOn = true;
          }
        });
        head.classList.toggle('is-on', headOn);
        items.forEach((it, i) => it.classList.toggle('is-reached', dist >= reachAt[i]));
      } else {
        // Móvil: la línea vertical se llena y los elementos se encienden en orden
        list.style.setProperty('--line-p', p.toFixed(3));
        items.forEach((it, i) => it.classList.toggle('is-reached', p >= i / (items.length - 1) - 0.02));
      }
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(draw); }
    }, { passive: true });
    window.addEventListener('resize', draw);
    draw();
  };

  if (!reduceMotion) {
    const proc = document.querySelector('.process');
    if (proc) initScrollPath(proc, { list: '.process__steps', marker: '.step__num' });
    const achv = document.querySelector('.achievements');
    if (achv) initScrollPath(achv, { list: '.milestones', marker: '.milestone__year', start: 0.75, rows: 0.65 });
  }

  // Sección 8: copiar el número de teléfono
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
      } catch {
        const ta = Object.assign(document.createElement('textarea'), { value: btn.dataset.copy });
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }
      const card = btn.closest('.contact-card') || btn;
      card.classList.add('is-copied');
      clearTimeout(btn._t);
      btn._t = setTimeout(() => card.classList.remove('is-copied'), 1600);
    });
  });

  // Año actual en el footer
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  // Medición de clics en llamados a la acción (Google Analytics / GTM si están instalados)
  document.addEventListener('click', (e) => {
    const cta = e.target.closest('[data-cta]');
    if (!cta) return;
    const payload = { event: 'cta_click', cta_id: cta.dataset.cta, cta_text: cta.textContent.trim() };
    if (window.dataLayer) window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', 'cta_click', payload);
  });
})();
