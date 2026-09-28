// Biinyu Studio · Selector de idioma ES / EN
// El HTML está en español. Este archivo guarda la versión en inglés de cada texto
// (clave = texto en español, tal como aparece en la página) y la intercambia en vivo.
(() => {
  const BR = '<br class="br-d">';

  const EN = {
    // ---------- Menú / header ----------
    'Qué hacemos': 'What we do',
    'Cómo trabajamos': 'How we work',
    'Clientes': 'Clients',
    'Productos propios': 'Our products',
    'Logros': 'Awards',
    'El estudio': 'The studio',
    'Hablemos': "Let's talk",

    // ---------- Sección 1 · Home ----------
    'Convertimos los retos de tu': "We turn your company's",
    'empresa en <span class="text-accent">experiencias</span>': 'challenges into <span class="text-accent">interactive</span>',
    'interactivas que funcionan': 'experiences that work',
    'Partimos de tu propio reto, ya sea vender más, capacitar mejor, atender a tus clientes o mostrar lo que haces, y le damos la forma que mejor lo resuelve: una plataforma, una app, un videojuego o una experiencia inmersiva. Todo lo creamos con la imaginación y el cuidado de un videojuego, para que la gente se enganche y tu empresa vea el cambio.':
      'We start from your own challenge, whether it is selling more, training better, serving your customers or showing what you do, and we give it the shape that solves it best: a platform, an app, a video game or an immersive experience. We build everything with the imagination and care of a video game, so people get hooked and your company sees the change.',
    'Cuéntanos tu reto': 'Tell us your challenge',
    'Mira cómo trabajamos': 'See how we work',
    '10 años': '10 years',
    '<b>Una década</b> creando e innovando desde Cartagena. <b>Origen: 2016</b>': '<b>A decade</b> creating and innovating from Cartagena. <b>Founded: 2016</b>',
    '11 distinciones': '11 awards',
    'Ganadas entre <b>convocatorias</b> y <b>premios</b> de innovación': 'Won across <b>open calls</b> and innovation <b>awards</b>',
    '3 mercados': '3 markets',
    '<b>Internacionales</b> trabajados: EE.UU., Panamá, México': '<b>International</b> markets served: USA, Panama, Mexico',

    // ---------- Sección 2 · Qué hacemos ----------
    'No somos una casa de software.': "We're not a software house.",
    'Somos un estudio creativo.': "We're a creative studio.",
    '<em>Una casa de software espera a que le digas qué programar.</em><br> Nosotros partimos de lo que te quita el sueño, y armamos el contenido interactivo que lo resuelve: una plataforma, una app, un videojuego o algo en realidad virtual. La forma la decide tu problema, no nosotros.':
      '<em>A software house waits for you to tell it what to code.</em><br> We start from what keeps you up at night and build the interactive content that solves it: a platform, an app, a video game or something in virtual reality. Your problem decides the shape, not us.',
    '01 · Plataformas webs': '01 · Web platforms',
    'Tu operación ordenada en<br> un solo lugar': 'Your whole operation<br> in one place',
    'Si tu información vive repartida entre Excel, correos y la cabeza de una sola persona, construimos el lugar donde todo se junta: tu equipo encuentra lo que necesita sin preguntar, tus clientes hacen trámites sin llamarte, y tu web empieza a vender de verdad.':
      "If your information is scattered across spreadsheets, emails and one person's head, we build the place where it all comes together: your team finds what it needs without asking, your customers get things done without calling you, and your website starts selling for real.",
    'Una web que vende': 'A website that sells',
    'Atención a clientes en línea': 'Online customer service',
    'Adiós al Excel eterno': 'Goodbye, endless Excel',
    '02 · Aplicaciones móviles': '02 · Mobile apps',
    'Tu negocio en el bolsillo<br> de la gente': "Your business in<br> people's pockets",
    'Apps para Android o iPhone pensadas para lo que pasa lejos de un escritorio: tu fuerza de ventas cierra negocios desde la calle, y tus clientes te encuentran sin hacer fila. Nos quedamos hasta que la app está publicada.':
      "Android and iPhone apps built for what happens away from a desk: your sales team closes deals on the street, and your customers find you without waiting in line. We stay until the app is published.",
    'Fuerza de ventas': 'Sales force',
    'Atención a clientes': 'Customer service',
    'Catálogo de servicios': 'Service catalog',
    '03 · Videojuegos': '03 · Video games',
    'Juegos que enseñan, venden<br> y fidelizan': 'Games that teach, sell<br> and build loyalty',
    'Un juego logra lo que una presentación no: que tu gente aprenda sin sentir que está estudiando, y que un cliente recuerde tu marca porque se divirtió con ella. Aquí empezamos hace diez años, y nuestros juegos ya llegaron a Estados Unidos, Panamá y México.':
      "A game achieves what a slide deck can't: your people learn without feeling they're studying, and customers remember your brand because they had fun with it. This is where we started ten years ago, and our games have already reached the United States, Panama and Mexico.",
    'Inducción de personal': 'Staff onboarding',
    'Juegos de marca': 'Branded games',
    'Premios y fidelización': 'Rewards and loyalty',
    '04 · Inmersivo': '04 · Immersive',
    'Practicar lo que no se<br> puede ensayar': "Practice what can't<br> be rehearsed",
    'Con realidad virtual y aumentada resolvemos lo que pasa cuando el escenario real es caro, peligroso o imposible de repetir. Tu equipo entrena tareas críticas sin riesgo, tus clientes recorren tus instalaciones sin viajar, y en una feria la gente hace fila para probar tu marca.':
      'With virtual and augmented reality we solve what happens when the real scenario is expensive, dangerous or impossible to repeat. Your team trains critical tasks with zero risk, your customers tour your facilities without traveling, and at trade shows people line up to try your brand.',
    'Productos que se ven en 3D': 'Products seen in 3D',
    'Recorridos virtuales': 'Virtual tours',
    'Experiencias para ferias': 'Trade show experiences',
    'Y como somos un estudio creativo, también contamos historias cuando el reto lo pide: contenidos multimedia y transmedia (animación 2D/3D, cómic, cortometraje), consultoría y formulación de proyectos TIC para convocatorias públicas, y formación in-company en gamificación y desarrollo de videojuegos.':
      'And because we are a creative studio, we also tell stories when the challenge calls for it: multimedia and transmedia content (2D/3D animation, comics, short films), consulting and ICT project writing for public funding calls, and in-company training in gamification and video game development.',

    // ---------- Sección 3 · Cómo trabajamos ----------
    'Seis pasos y tres reglas <span class="text-accent">que jamás nos saltamos</span>': 'Six steps and three rules <span class="text-accent">we never skip</span>',
    'Así trabajamos con cada cliente: sin letra pequeña ni sustos a mitad de camino, sabiendo siempre en qué va tu proyecto.':
      'This is how we work with every client: no fine print, no surprises halfway through, and you always know where your project stands.',
    'Brief y levantamiento': 'Brief and discovery',
    [`Entendemos tu objetivo de negocio${BR} antes de hablar de tecnología, y lo${BR} dejamos por escrito.`]:
      `We understand your business goal${BR} before talking technology, and we${BR} put it in writing.`,
    'Plan de trabajo': 'Work plan',
    [`Alcance, cronograma y entregables por${BR} escrito. No avanzamos sin que lo${BR} apruebes.`]:
      `Scope, schedule and deliverables in${BR} writing. We don't move forward until${BR} you approve it.`,
    'No cotizamos sin plan de trabajo aprobado': 'No quote without an approved work plan',
    'Cotización y orden de compra': 'Quote and purchase order',
    [`Precio cerrado sobre un alcance${BR} cerrado. Tú emites la orden de compra${BR} y nosotros la factura correspondiente.`]:
      `A fixed price for a fixed${BR} scope. You issue the purchase order${BR} and we issue the matching invoice.`,
    'No facturamos sin orden de compra': 'No invoice without a purchase order',
    'Arranque': 'Kickoff',
    [`Con el anticipo confirmado entra${BR} el equipo, y sabes desde el día${BR} uno quién trabaja en tu proyecto.`]:
      `Once the down payment is confirmed${BR} the team steps in, and from day one${BR} you know who works on your project.`,
    'No iniciamos desarrollo sin el primer pago': 'No development before the first payment',
    'Producción en Kanban': 'Kanban production',
    [`Flujo continuo, sin sprints artificiales,${BR} con demo cada semana. Ves el${BR} producto mientras se construye.`]:
      `Continuous flow, no artificial sprints,${BR} with a demo every week. You see the${BR} product while it's being built.`,
    'Entrega, garantía y medición': 'Delivery, warranty and results',
    [`Capacitamos a tu equipo, dejamos la${BR} garantía por escrito y medimos el${BR} resultado contra el objetivo inicial.`]:
      `We train your team, put the${BR} warranty in writing and measure the${BR} outcome against the original goal.`,

    // ---------- Sección 4 · Clientes ----------
    'Empresas que ya nos <span class="text-accent">dijeron que sí</span>': 'Companies that already <span class="text-accent">said yes</span>',
    'Industria pesada, petroquímica, logística, banca, universidades y gremios: todos llegaron con la misma pregunta que probablemente te trajo aquí.':
      'Heavy industry, petrochemicals, logistics, banking, universities and trade associations: they all came with the same question that probably brought you here.',
    'Ciencia y tecnología naval': 'Naval science & tech',
    'Petroquímica': 'Petrochemicals',
    'Zona franca industrial': 'Industrial free zone',
    'Sector financiero y cooperativo': 'Financial & cooperative',
    'Logística': 'Logistics',
    'Gremio empresarial': 'Business association',
    'Industria': 'Industry',
    'Educación superior': 'Higher education',
    'Turismo y operación': 'Tourism & operations',

    // ---------- Sección 5 · Productos propios ----------
    'Lo que construimos cuando': 'What we build when',
    'el cliente somos nosotros': "we're the client",
    [`Estos cuatro proyectos los hicimos por cuenta propia, con nuestro presupuesto y nuestro riesgo.${BR} Mantenerlos y responder por ellos durante años nos enseña cosas que un encargo no.`]:
      `We built these four projects on our own, with our own budget and at our own risk.${BR} Maintaining them and standing behind them for years teaches us things a commission can't.`,
    'Videojuego de puzzles': 'Puzzle video game',
    'Un juego de puzzles donde el tiempo se rebobina. Oyyo y Ayya custodian el Gran Reloj, y cuando uno cae el otro devuelve el tiempo para darle otra oportunidad. Historia, arte, animación y código, todo hecho en casa.':
      'A puzzle game where time rewinds. Oyyo and Ayya guard the Great Clock, and when one falls the other turns back time to give them another chance. Story, art, animation and code, all made in-house.',
    'Narrativa': 'Narrative',
    'Niveles': 'Levels',
    'Arte y animación': 'Art & animation',
    'Conoce más': 'Learn more',
    'Plataforma de gestión documental': 'Document management platform',
    'Centraliza los documentos de tu organización, controla versiones y deja rastro de quién hizo qué. Para equipos que hoy dependen de una carpeta compartida y de la memoria de alguien.':
      "Centralizes your organization's documents, controls versions and keeps a record of who did what. For teams that today rely on a shared folder and someone's memory.",
    'Plataforma web': 'Web platform',
    'Control de versiones': 'Version control',
    'Trazabilidad': 'Traceability',
    'Plataforma de gestión de proyectos': 'Project management platform',
    'Tableros, responsables, tiempos y estado de cada entrega en un mismo lugar. Para equipos que trabajan por proyectos y necesitan saber, sin tener que preguntar, qué va bien y qué se está atrasando.':
      "Boards, owners, timelines and the status of every delivery in one place. For teams that work by projects and need to know, without asking, what's on track and what's falling behind.",
    'Tableros y flujos': 'Boards & flows',
    'Seguimiento de entregas': 'Delivery tracking',
    'Reportes': 'Reports',
    'Videojuego': 'Video game',
    'Ganador de Crea Digital 2019, la convocatoria del Ministerio TIC y el Ministerio de Cultura para contenidos digitales. Se produjo con estándares de convocatoria pública y sustentado ante un jurado nacional.':
      "Winner of Crea Digital 2019, Colombia's ICT and Culture Ministries' call for digital content. Produced to public-funding standards and defended before a national jury.",
    'Contenido cultural': 'Cultural content',

    // ---------- Sección 6 · Logros ----------
    'Una década compitiendo por': 'A decade competing for',
    'convocatorias y ganándolas': 'open calls and winning them',
    [`Nadie se elige solo para estas cosas. Aquí están, en orden,${BR} las convocatorias y los premios que hemos ganado.`]:
      `Nobody gets picked for these by chance. Here they are, in order:${BR} the open calls and awards we have won.`,
    [`Laboratorio C3+D,${BR} Ministerio de Cultura`]: `C3+D Lab,${BR} Ministry of Culture`,
    [`El punto de partida: el equipo fundador fue${BR} seleccionado en la fase de Descubrimiento de${BR} Negocios, antes de constituir el estudio.`]:
      `The starting point: the founding team was${BR} selected for the Business Discovery phase,${BR} before the studio was even founded.`,
    [`Seleccionados para la fase de${BR} Puesta en Marcha (aceleración).`]: `Selected for the Launch phase${BR} (acceleration).`,
    [`NeoComic App, emprendimiento${BR} destacado, con invitación al${BR} Business Day de Colombia 4.0.`]:
      `NeoComic App, outstanding${BR} startup, invited to the${BR} Colombia 4.0 Business Day.`,
    [`Beca de Circulación I,${BR} Ministerio de Cultura`]: `Circulation Grant I,${BR} Ministry of Culture`,
    [`NeoComic App, ganador de la${BR} Beca de Circulación Nacional e${BR} Internacional.`]:
      `NeoComic App, winner of the${BR} National and International${BR} Circulation Grant.`,
    [`Premio a la Innovación${BR} en Bolívar, Cámara de${BR} Comercio de Cartagena`]:
      `Innovation Award${BR} in Bolívar, Cartagena${BR} Chamber of Commerce`,
    [`Ganadores en la categoría${BR} Innovación Naranja.`]: `Winners in the Orange${BR} Innovation category.`,
    [`Cartagena Open Future,${BR} Cámara de Comercio de${BR} Cartagena`]: `Cartagena Open Future,${BR} Cartagena Chamber${BR} of Commerce`,
    'Ganadores de la convocatoria.': 'Winners of the open call.',
    [`Beca de Circulación II,${BR} Ministerio de Cultura`]: `Circulation Grant II,${BR} Ministry of Culture`,
    [`Segundo ciclo de circulación${BR} nacional e internacional.`]: `Second national and${BR} international circulation.`,
    [`Finalistas del primer reality de${BR} exportación del país.`]: `Finalists in the country's first${BR} export reality show.`,
    [`Segundo reconocimiento en${BR} Innovación Naranja.`]: `Second recognition in${BR} Orange Innovation.`,
    [`Crea Digital, Ministerio${BR} TIC y Ministerio de${BR} Cultura`]: `Crea Digital, Ministry${BR} of ICT and Ministry${BR} of Culture`,
    [`Entre Cuentos, videojuego${BR} ganador de la convocatoria.`]: `Entre Cuentos, the winning${BR} video game of the call.`,
    [`Transformación Digital${BR} Naranja, MinTIC e iNNpulsa`]: `Orange Digital Transformation${BR} program, MinTIC & iNNpulsa`,
    [`Seleccionados en el programa 2020 y${BR} 2021.`]: `Selected for the 2020 and${BR} 2021 program.`,
    [`Devcom (Colonia) y Tokyo${BR} Game Show`]: `Devcom (Cologne) and Tokyo${BR} Game Show`,
    [`Presencia del estudio en los dos escenarios${BR} donde se define la industria del videojuego.`]:
      `The studio at the two events${BR} where the game industry is shaped.`,

    // ---------- Sección 7 · El estudio ----------
    'Nos fundó un grupo de universitarios': 'Founded by a group of students',
    'que querían hacer videojuegos': 'who wanted to make video games',
    [`Eso fue en 2016, en Cartagena de Indias. Diez años después seguimos siendo eso:${BR} gente que ilustra, anima, escribe, diseña y programa en la misma mesa. La misma${BR} persona que te escucha en la primera reunión es la que crea tu solución.`]:
      `That was in 2016, in Cartagena de Indias. Ten years later we are still that:${BR} people who illustrate, animate, write, design and code at the same table. The same${BR} person who listens to you in the first meeting is the one who builds your solution.`,
    [`Con los años llevamos lo aprendido haciendo videojuegos a plataformas, apps y${BR} experiencias para empresas. Juntamos la solidez de un software que aguanta la${BR} operación diaria con el poder de un videojuego para enganchar de verdad, y esa${BR} combinación no abunda.`]:
      `Over the years we took what we learned making games to platforms, apps and${BR} business experiences. We combine the reliability of software that handles the${BR} daily operation with a video game's power to truly hook people, and that${BR} combination is rare.`,
    'Nuestro propósito': 'Our purpose',
    [`Que la tecnología de nuestros clientes deje de ser un trámite${BR} y se convierta en algo que sus usuarios quieran abrir.`]:
      `For our clients' technology to stop being a chore${BR} and become something their users want to open.`,
    '¿Cómo lo medimos?': 'How do we measure it?',
    [`Cuánta gente lo usa, cuánto tiempo lo usa y qué cambió en el negocio seis${BR} meses después. No por entregables cerrados ni por horas facturadas.`]:
      `How many people use it, for how long, and what changed in the business six${BR} months later. Not by closed deliverables or billed hours.`,

    // ---------- Sección 8 · Hablemos ----------
    'Cuéntanos qué quieres lograr.': 'Tell us what you want to achieve.',
    'Nosotros creamos cómo lograrlo.': "We'll create how to get there.",
    [`Cuéntanos tu problema y nosotros creamos la solución. En pocos días tienes un plan con alcance,${BR} entregables y fecha, sin compromiso y sin costo. Diez años convirtiendo retos en soluciones que${BR} funcionan, y el tuyo no será la excepción.`]:
      `Tell us your problem and we'll create the solution. In a few days you'll have a plan with scope,${BR} deliverables and dates, free and with no commitment. Ten years turning challenges into solutions that${BR} work, and yours won't be the exception.`,
    '¡Número copiado!': 'Number copied!',
    'Llámanos o escríbenos<br> por WhatsApp': 'Call us or message us<br> on WhatsApp',
    'Cuéntanos tu idea o proyecto': 'Tell us your idea or project',
    'Conoce más sobre nosotros<br> y nuestros servicios': 'Learn more about us<br> and our services',

    // ---------- Footer ----------
    'Estudio creativo de experiencias interactivas: plataformas, apps, videojuegos y experiencias inmersivas que funcionan.':
      'Creative studio for interactive experiences: platforms, apps, video games and immersive experiences that work.',
    'Cartagena de Indias, Colombia · Desde 2016': 'Cartagena de Indias, Colombia · Since 2016',
    'Explora': 'Explore',
    '¿Tienes un reto en mente?': 'Got a challenge in mind?',
    '© <span data-year=""></span> Biinyu Studio. Todos los derechos reservados.': '© <span data-year=""></span> Biinyu Studio. All rights reserved.',
    'Volver arriba': 'Back to top',

    // ---------- Textos alternativos y etiquetas de accesibilidad ----------
    'Biinyu Studio, ir al inicio': 'Biinyu Studio, go to home',
    'Navegación principal': 'Main navigation',
    'Abrir menú': 'Open menu',
    'Cerrar menú': 'Close menu',
    'Mascota de Biinyu Studio, un camaleón en patineta, frente a la Torre del Reloj de Cartagena': "Biinyu Studio's mascot, a skateboarding chameleon, in front of Cartagena's Clock Tower",
    'Biinyu Studio en cifras': 'Biinyu Studio in numbers',
    'Logo de COTECMAR': 'COTECMAR logo',
    'Logo de Esenttia': 'Esenttia logo',
    'Logo de Zona Franca Parque Central': 'Zona Franca Parque Central logo',
    'Logo de Fonrecar': 'Fonrecar logo',
    'Logo de 4PL SIL': '4PL SIL logo',
    'Logo de la Cámara de Comercio de Cartagena': 'Cartagena Chamber of Commerce logo',
    'Logo de Codesa': 'Codesa logo',
    'Logo de la Universidad del Sinú': 'Universidad del Sinú logo',
    'Logo de GemaTours': 'GemaTours logo',
    'OYYO, videojuego de puzzles con un gran reloj y engranajes': 'OYYO, a puzzle video game with a giant clock and gears',
    'Conoce más sobre OYYO': 'Learn more about OYYO',
    'SAFE, plataforma de gestión documental en un portátil': 'SAFE, a document management platform on a laptop',
    'Conoce más sobre SAFE': 'Learn more about SAFE',
    'ARRECIFE, plataforma de gestión de proyectos en un portátil': 'ARRECIFE, a project management platform on a laptop',
    'Conoce más sobre ARRECIFE': 'Learn more about ARRECIFE',
    'Entre Cuentos, videojuego con dos personajes en un bosque mágico': 'Entre Cuentos, a video game with two characters in a magical forest',
    'Conoce más sobre Entre Cuentos': 'Learn more about Entre Cuentos',
    'Copiar número de teléfono': 'Copy phone number',
    'Biinyu Studio, volver al inicio': 'Biinyu Studio, back to home',
    'Secciones': 'Sections',
    'Cambiar idioma': 'Change language',
  };

  // Mensajes prellenados de WhatsApp y asunto del correo
  const HREF = {
    'Hola%20Biinyu%2C%20quiero%20contarles%20mi%20reto': 'Hi%20Biinyu%2C%20I%27d%20like%20to%20tell%20you%20about%20my%20challenge',
    'Quiero%20contarles%20mi%20reto': 'I%27d%20like%20to%20tell%20you%20about%20my%20challenge',
  };

  const META = {
    es: {
      title: 'Biinyu Studio | Experiencias interactivas que funcionan',
      description: document.querySelector('meta[name="description"]')?.content || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.content || '',
    },
    en: {
      title: 'Biinyu Studio | Interactive experiences that work',
      description: 'We turn your company\'s challenges into interactive experiences that work: platforms, apps, video games and immersive experiences. A creative studio from Cartagena, Colombia.',
      ogTitle: 'Biinyu Studio | Interactive experiences that work',
      ogDescription: 'Platforms, apps, video games and immersive experiences built with the imagination and care of a video game.',
    },
  };

  const norm = (s) => s.replace(/\s+/g, ' ').replace(/<span data-year="">\d*<\/span>/, '<span data-year=""></span>').trim();
  const INLINE = new Set(['BR', 'SPAN', 'B', 'STRONG', 'EM']);

  // Elementos con marcado interno (negritas, saltos, acentos de color): se traducen completos
  const htmlTargets = [];
  document.querySelectorAll('body *').forEach((el) => {
    if (el.closest('svg, script, style')) return;
    if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) return;
    if (!el.children.length || [...el.children].some((c) => !INLINE.has(c.tagName))) return;
    const key = norm(el.innerHTML);
    if (EN[key]) htmlTargets.push({ el, es: el.innerHTML, en: EN[key] });
  });

  // Nodos de texto simples (incluye botones con ícono)
  const textTargets = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, svg')) continue;
    if (htmlTargets.some((t) => t.el.contains(node))) continue;
    const key = node.textContent.trim();
    if (key && EN[key]) textTargets.push({ node, es: node.textContent, en: node.textContent.replace(key, EN[key]) });
  }

  // Atributos (alt, aria-label) y enlaces con mensaje prellenado
  const attrTargets = [];
  document.querySelectorAll('[alt], [aria-label]').forEach((el) => {
    ['alt', 'aria-label'].forEach((a) => {
      const v = el.getAttribute(a);
      if (v && EN[v]) attrTargets.push({ el, a, es: v, en: EN[v] });
    });
  });
  document.querySelectorAll('a[href*="wa.me"], a[href^="mailto:"]').forEach((el) => {
    const v = el.getAttribute('href');
    const k = Object.keys(HREF).find((s) => v.includes(s));
    if (k) attrTargets.push({ el, a: 'href', es: v, en: v.replace(k, HREF[k]) });
  });

  const setYear = () => document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  let current = 'es';
  const apply = (lang) => {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    current = lang;
    htmlTargets.forEach((t) => { t.el.innerHTML = lang === 'en' ? t.en : t.es; });
    textTargets.forEach((t) => { t.node.textContent = lang === 'en' ? t.en : t.es; });
    attrTargets.forEach((t) => t.el.setAttribute(t.a, lang === 'en' ? t.en : t.es));
    setYear();

    const m = META[lang];
    document.documentElement.lang = lang;
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', m.ogTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', m.ogDescription);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'en' ? 'en_US' : 'es_CO');

    document.querySelectorAll('.lang-switch [data-lang]').forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem('biinyu-lang', lang); } catch (e) { /* sin almacenamiento */ }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  };

  // Idioma inicial: ?lang=en en la URL > preferencia guardada > idioma del navegador
  let initial = new URLSearchParams(location.search).get('lang');
  if (!initial) { try { initial = localStorage.getItem('biinyu-lang'); } catch (e) { /* */ } }
  if (!initial) initial = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  apply(initial);

  document.addEventListener('click', (e) => {
    const b = e.target.closest('.lang-switch [data-lang]');
    if (!b || b.dataset.lang === current) return;
    apply(b.dataset.lang);
    if (window.dataLayer) window.dataLayer.push({ event: 'lang_change', lang: current });
  });

  window.biinyuI18n = { apply, get lang() { return current; }, t: (s) => (current === 'en' && EN[s]) || s };
})();
