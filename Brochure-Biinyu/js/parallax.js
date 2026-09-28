// Biinyu Studio · Parallax entre secciones (solo escritorio)
// Mientras una sección sale por arriba, se desplaza más lento que el scroll y se
// oscurece levemente, de modo que la siguiente sección se va sobreponiendo a ella.
// Para quitar el efecto: borrar este archivo, su <script> en index.html y el bloque
// "PARALLAX ENTRE SECCIONES" al final de css/styles.css.
(() => {
  const mq = window.matchMedia('(min-width: 1100px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  // La última sección (contacto) queda fija: es el cierre y solo la cubre el footer
  const sections = [...document.querySelectorAll('main > section')].filter((s) => s.id !== 'contacto');
  const SPEED = 0.16;   // cuánto "se hunde" la sección (fracción de la altura de pantalla)
  const SHADE = 0.28;   // oscurecimiento máximo

  let ticking = false;

  const reset = () => sections.forEach((s) => {
    s.style.transform = '';
    s.style.removeProperty('--sink');
    s.classList.remove('px-sink');
  });

  const update = () => {
    ticking = false;
    if (!mq.matches) return;
    const vh = window.innerHeight;
    const y = window.scrollY;
    sections.forEach((s) => {
      const top = s.offsetTop - y;              // posición sin la transformación propia
      const bottom = top + s.offsetHeight;
      const t = Math.max(0, Math.min(1, (vh - bottom) / vh));
      if (t === 0 || bottom < -vh) {
        if (s.classList.contains('px-sink')) {
          s.style.transform = '';
          s.style.removeProperty('--sink');
          s.classList.remove('px-sink');
        }
        return;
      }
      // Nunca bajar tanto como para despegar la parte superior de la sección
      const d = Math.min(t * vh * SPEED, Math.max(0, -top));
      s.classList.add('px-sink');
      s.style.transform = `translate3d(0, ${d.toFixed(1)}px, 0)`;
      s.style.setProperty('--sink', (t * SHADE).toFixed(3));
    });
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  mq.addEventListener('change', () => { reset(); onScroll(); });
  document.documentElement.classList.add('px-ready');
  update();
})();
