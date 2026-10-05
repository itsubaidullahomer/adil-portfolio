// Interactive behaviour for the QuranCaseStudy page: background-story toggle,
// evidence galleries + lightbox, image zoom, phone-strip carousels, onboarding tour
// and the annotated screenshot lightbox. Everything is scoped to `root` and every
// listener is removed by the returned cleanup function (safe under React StrictMode).

const RESOURCES = {
  surveyResp: '/caseStudy/1ffc8d51-89aa-40ab-8b83-d303c268ea09.jpg',
  sessionsRec: '/caseStudy/5a9c2ba7-9810-47c3-a483-e2e7e5ba42f6.jpg',
};

const TOUR_META = [
  { title: 'Splash', desc: 'First glance, the new brand. A clean intro before anything is asked.' },
  { title: 'Choose language', desc: 'English only, or English + Urdu. Live preview so the choice is concrete.' },
  { title: 'Home', desc: 'Where each kind of content lives, explained tab by tab. Starting with Home.' },
  { title: 'Browse', desc: 'A lighter, topic-led entry point for users without a destination yet.' },
  { title: 'Library', desc: 'The full catalog, organised by language. Familiar to the 200K returning users.' },
  { title: 'Search', desc: 'Promoted to its own tab so it stops hiding behind a kebab menu.' },
  { title: 'Daily reminder', desc: "Permission ask with Don't Allow given equal weight. Skippable, never shown again." },
  { title: 'Welcome', desc: 'The tour ends here, on the new Welcome screen. One sentence and one button, since by this point the user already knows what each tab does.' },
];

// Annotations keyed by image src (UUID match). Coordinates are percent of the phone screen.
const ANNOTATIONS = {
  // Full-screen player
  '1cc83ad8-8495-4c98-a21c-3e9484bcafe9': [
    { kind: 'point', x: 9, y: 10, eyebrow: 'Back', label: 'Chevron-down collapses to mini player. Not a "Close" button.' },
    { kind: 'point', x: 92, y: 10, eyebrow: 'Share', label: 'Share lives at the top, away from playback controls.' },
    { kind: 'box', x1: 6, y1: 61, x2: 94, y2: 68, eyebrow: 'Scrub bar', label: 'Real scrub bar with timestamps. Replaces the old unlabeled slider.' },
    { kind: 'box', x1: 6, y1: 71, x2: 94, y2: 79, eyebrow: 'Transport', label: 'Play/Pause is the single dominant control. ±15s flanks it for thumb-reach.' },
    { kind: 'box', x1: 6, y1: 83, x2: 94, y2: 91, eyebrow: 'Inline actions', label: 'Speed, Download, Favorite all live inside the player. No back-out mid-listen.' },
  ],
  // New Home dashboard
  '051a098b-2344-4b55-8614-21b5f2989e80': [
    { kind: 'point', x: 88, y: 9, eyebrow: 'Settings', label: 'Switch Language lives in Settings, not on Home.' },
    { kind: 'box', x1: 6, y1: 22, x2: 94, y2: 41, eyebrow: 'Recently Played', label: 'At the top of Home. One tap to resume the last lecture.' },
    { kind: 'box', x1: 6, y1: 47, x2: 94, y2: 86, eyebrow: 'Daily rows', label: 'Four daily-use rows up front. Home works as a dashboard instead of a catalogue.' },
    { kind: 'box', x1: 6, y1: 90, x2: 94, y2: 98, eyebrow: 'Tab bar', label: 'Persistent four-tab nav. Replaces the hidden kebab.' },
  ],
};

export default function initQuranCaseStudyInteractions(root) {
  if (!root) return undefined;

  const cleanups = [];
  const listen = (target, type, handler, opts) => {
    if (!target) return;
    target.addEventListener(type, handler, opts);
    cleanups.push(() => target.removeEventListener(type, handler, opts));
  };
  const timers = [];

  // ---- Background story toggle -------------------------------------------------
  const bgBtns = root.querySelectorAll('[data-bg-toggle]');
  const bgWrap = root.querySelector('[data-bg-story]');
  if (bgBtns.length && bgWrap) {
    bgBtns.forEach((btn) => {
      listen(btn, 'click', () => {
        const open = bgWrap.classList.toggle('is-open');
        bgBtns.forEach((b) => b.setAttribute('aria-expanded', open ? 'true' : 'false'));
      });
    });
  }

  // ---- Evidence galleries + their lightbox --------------------------------------
  const evBox = root.querySelector('#evLightbox');
  const evImg = evBox ? evBox.querySelector('img') : null;
  const evCap = evBox ? evBox.querySelector('.ev-lightbox-cap') : null;
  const evPrev = evBox ? evBox.querySelector('.ev-lightbox-nav--prev') : null;
  const evNext = evBox ? evBox.querySelector('.ev-lightbox-nav--next') : null;
  const evState = { images: [], idx: 0 };
  const resolveSrc = (item) => (item.resId && RESOURCES[item.resId]) || item.src;

  const renderEv = () => {
    if (!evState.images.length) return;
    const item = evState.images[evState.idx];
    evImg.src = resolveSrc(item);
    evCap.textContent = item.cap || '';
    const multi = evState.images.length > 1;
    if (evPrev) evPrev.style.display = multi ? '' : 'none';
    if (evNext) evNext.style.display = multi ? '' : 'none';
  };
  const openEv = (images, idx) => {
    if (!evBox) return;
    evState.images = images;
    evState.idx = idx || 0;
    renderEv();
    evBox.hidden = false;
    requestAnimationFrame(() => evBox.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
  };
  const stepEv = (d) => {
    if (!evState.images.length) return;
    evState.idx = (evState.idx + d + evState.images.length) % evState.images.length;
    renderEv();
  };
  const closeEv = () => {
    if (!evBox) return;
    evBox.classList.remove('is-open');
    document.body.style.overflow = '';
    timers.push(setTimeout(() => {
      evBox.hidden = true;
      evImg.removeAttribute('src');
    }, 180));
  };

  if (evBox) {
    listen(evBox.querySelector('.ev-lightbox-close'), 'click', closeEv);
    listen(evBox, 'click', (e) => { if (e.target === evBox) closeEv(); });
    listen(evPrev, 'click', (e) => { e.stopPropagation(); stepEv(-1); });
    listen(evNext, 'click', (e) => { e.stopPropagation(); stepEv(1); });
    listen(document, 'keydown', (e) => {
      if (!evBox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeEv();
      else if (e.key === 'ArrowLeft') stepEv(-1);
      else if (e.key === 'ArrowRight') stepEv(1);
    });
  }

  root.querySelectorAll('[data-gallery]').forEach((g) => {
    let images;
    try { images = JSON.parse(g.getAttribute('data-images') || '[]'); } catch { images = []; }
    if (!images.length) return;
    const imgEl = g.querySelector('[data-mg-img]');
    const dotsEl = g.querySelector('[data-mg-dots]');
    let idx = 0;
    if (dotsEl) {
      dotsEl.innerHTML = '';
      images.forEach(() => dotsEl.appendChild(document.createElement('span')));
    }
    const dots = dotsEl ? dotsEl.querySelectorAll('span') : [];
    const render = () => {
      imgEl.src = resolveSrc(images[idx]);
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    };
    const go = (d) => { idx = (idx + d + images.length) % images.length; render(); };
    listen(g.querySelector('[data-mg-frame]'), 'click', () => openEv(images, idx));
    listen(g.querySelector('[data-mg-prev]'), 'click', (e) => { e.stopPropagation(); go(-1); });
    listen(g.querySelector('[data-mg-next]'), 'click', (e) => { e.stopPropagation(); go(1); });
    if (images.length < 2) {
      g.querySelectorAll('.mg-nav, .mg-dots').forEach((n) => { n.style.display = 'none'; });
    } else if (images.length > 10 && dotsEl) {
      dotsEl.style.display = 'none';
    }
    render();
  });

  // ---- Body-wide image zoom (opens the evidence lightbox) -------------------------
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();
  const isExcluded = (img) =>
    !!img.closest('.ev-lightbox, [data-gallery], #tweaks, [data-no-zoom], .phone, .lightbox');
  const captionFor = (img) => {
    const card = img.closest('.before-card, .after-card');
    if (card) {
      const tag = card.querySelector('.tag');
      const note = card.querySelector('.note');
      const prefix = tag ? `${clean(tag.textContent)} — ` : '';
      return prefix + clean(note ? note.textContent : img.alt);
    }
    const fp = img.closest('.feature-pair');
    if (fp) {
      const lbl = fp.querySelector('.feature-pair__label');
      if (lbl) return clean(lbl.textContent);
    }
    const phones = img.closest('.phones');
    if (phones) {
      let sib = phones.nextElementSibling;
      while (sib && sib.tagName === 'BR') sib = sib.nextElementSibling;
      if (sib && sib.matches('p.cap')) return clean(sib.textContent);
    }
    return clean(img.alt);
  };

  root.querySelectorAll('img').forEach((img) => {
    if (isExcluded(img)) return;
    const target = img.closest('.phone') || img;
    target.classList.add('cs-zoom');
    target.setAttribute('role', 'button');
    target.setAttribute('tabindex', '0');
    target.setAttribute('aria-label', 'Open larger view');
    const open = (e) => {
      if (e) e.preventDefault();
      const src = img.currentSrc || img.src;
      if (!src) return;
      openEv([{ src, cap: captionFor(img) }], 0);
    };
    listen(target, 'click', open);
    listen(target, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') open(e); });
    cleanups.push(() => {
      target.classList.remove('cs-zoom');
      target.removeAttribute('role');
      target.removeAttribute('tabindex');
      target.removeAttribute('aria-label');
    });
  });

  // ---- Phone strip carousels ----------------------------------------------------
  root.querySelectorAll('[data-phones-strip]').forEach((wrap) => {
    const strip = wrap.querySelector('.phones-strip');
    const prev = wrap.querySelector('.phones-strip-btn--prev');
    const next = wrap.querySelector('.phones-strip-btn--next');
    if (!strip || !prev || !next) return;
    const step = () => {
      const first = strip.querySelector('.phone-step, .phone');
      return first ? first.offsetWidth + 18 : 200;
    };
    const update = () => {
      prev.disabled = strip.scrollLeft <= 2;
      next.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
    };
    listen(prev, 'click', () => strip.scrollBy({ left: -step(), behavior: 'smooth' }));
    listen(next, 'click', () => strip.scrollBy({ left: step(), behavior: 'smooth' }));
    listen(strip, 'scroll', update, { passive: true });
    listen(window, 'resize', update);
    update();
  });

  // ---- Onboarding tour ----------------------------------------------------------
  const tour = root.querySelector('[data-onboarding-tour]');
  if (tour) {
    const stage = tour.querySelector('[data-ot-stage]');
    const tourImgs = Array.from(stage.querySelectorAll('img'));
    const counter = tour.querySelector('[data-ot-counter]');
    const title = tour.querySelector('[data-ot-title]');
    const desc = tour.querySelector('[data-ot-desc]');
    const prevBtn = tour.querySelector('[data-ot-prev]');
    const nextBtn = tour.querySelector('[data-ot-next]');
    const thumbs = Array.from(tour.querySelectorAll('.ot-thumb'));
    let cur = 0;
    const show = (i) => {
      if (i < 0 || i >= tourImgs.length) return;
      cur = i;
      tourImgs.forEach((im, idx) => im.classList.toggle('is-active', idx === i));
      thumbs.forEach((t, idx) => t.classList.toggle('is-active', idx === i));
      counter.textContent = `${String(i + 1).padStart(2, '0')} / ${String(tourImgs.length).padStart(2, '0')}`;
      title.textContent = TOUR_META[i].title;
      desc.textContent = TOUR_META[i].desc;
      prevBtn.disabled = i === 0;
      nextBtn.disabled = i === tourImgs.length - 1;
    };
    thumbs.forEach((t, idx) => listen(t, 'click', () => show(idx)));
    listen(prevBtn, 'click', () => show(cur - 1));
    listen(nextBtn, 'click', () => show(cur + 1));
    show(0);
  }

  // ---- Annotated screenshot lightbox (pins + legend) ------------------------------
  const lb = root.querySelector('#lightbox');
  if (lb) {
    const lbImg = root.querySelector('#lightbox-img');
    const lbPrev = root.querySelector('#lightbox-prev');
    const lbNext = root.querySelector('#lightbox-next');
    const lbClose = root.querySelector('#lightbox-close');
    const lbCounter = root.querySelector('#lightbox-counter');
    const lbInner = root.querySelector('#lightbox-inner');
    const lbOverlay = root.querySelector('#lightbox-overlay');
    const lbPinLayer = root.querySelector('#lightbox-pin-layer');
    const lbLegend = root.querySelector('#lightbox-legend-list');

    const findAnno = (src) => {
      if (!src) return null;
      const key = Object.keys(ANNOTATIONS).find((k) => src.indexOf(k) !== -1);
      return key ? ANNOTATIONS[key] : null;
    };

    let imgs = [];
    let cur = 0;
    let curAnno = null;

    const layoutAnno = (anno) => {
      if (!anno) return;
      lbPinLayer.innerHTML = '';
      lbOverlay.innerHTML = '';
      const rect = lbInner.getBoundingClientRect();
      lbOverlay.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
      lbOverlay.setAttribute('width', rect.width);
      lbOverlay.setAttribute('height', rect.height);
      anno.forEach((a, idx) => {
        let pinX;
        let pinY;
        if (a.kind === 'box') {
          // No outline, just the pin at the section's start (top-center of the box)
          pinX = (((a.x1 / 100) * rect.width) + ((a.x2 / 100) * rect.width)) / 2;
          pinY = (a.y1 / 100) * rect.height + 14;
        } else {
          pinX = (a.x / 100) * rect.width;
          pinY = (a.y / 100) * rect.height;
        }
        const pin = document.createElement('div');
        pin.className = 'lightbox__pin';
        pin.style.left = `${pinX}px`;
        pin.style.top = `${pinY}px`;
        pin.textContent = idx + 1;
        lbPinLayer.appendChild(pin);
      });
    };

    const renderAnno = (anno) => {
      lbPinLayer.innerHTML = '';
      lbOverlay.innerHTML = '';
      lbLegend.innerHTML = '';
      curAnno = null;
      if (!anno || !anno.length) { lb.classList.remove('has-anno'); return; }
      lb.classList.add('has-anno');
      anno.forEach((a, idx) => {
        const li = document.createElement('li');
        const num = document.createElement('span');
        num.className = 'lightbox__legend-num';
        num.textContent = idx + 1;
        const body = document.createElement('span');
        if (a.eyebrow) {
          const eyebrow = document.createElement('span');
          eyebrow.className = 'lightbox__legend-eyebrow';
          eyebrow.textContent = a.eyebrow;
          body.appendChild(eyebrow);
        }
        const text = document.createElement('span');
        text.className = 'lightbox__legend-text';
        text.textContent = a.label;
        body.appendChild(text);
        li.append(num, body);
        lbLegend.appendChild(li);
      });
      curAnno = anno;
      requestAnimationFrame(() => layoutAnno(anno));
    };

    const show = (i) => {
      if (i < 0 || i >= imgs.length) return;
      cur = i;
      const item = imgs[i];
      lbImg.src = item.src;
      lbImg.alt = item.alt || '';
      renderAnno(findAnno(item.fullsrc || item.src));
      lbCounter.textContent = `${i + 1} / ${imgs.length}`;
      lbPrev.disabled = i === 0;
      lbNext.disabled = i === imgs.length - 1;
      const single = imgs.length <= 1;
      lbPrev.style.display = single ? 'none' : '';
      lbNext.style.display = single ? 'none' : '';
      lbCounter.style.display = single ? 'none' : '';
    };
    const open = (items, idx) => {
      imgs = items;
      show(idx);
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lb.classList.remove('is-open');
      lb.classList.remove('has-anno');
      document.body.style.overflow = '';
    };

    const itemFromPhone = (p) => {
      const im = p.querySelector('img');
      return {
        src: im ? im.src : '',
        alt: im ? im.alt : '',
        fullsrc: p.dataset.fullsrc || (im ? im.getAttribute('src') : ''),
      };
    };

    root.querySelectorAll('.phone').forEach((phone) => {
      // Onboarding stage: each <img> inside is a separate screen, open them as a group
      if (phone.matches('[data-ot-stage]')) {
        listen(phone, 'click', () => {
          const imgEls = Array.from(phone.querySelectorAll('img'));
          const items = imgEls.map((im) => ({
            src: im.getAttribute('src'),
            alt: im.getAttribute('alt') || '',
            fullsrc: im.getAttribute('src'),
          }));
          const activeIdx = imgEls.findIndex((im) => im.classList.contains('is-active'));
          open(items, activeIdx >= 0 ? activeIdx : 0);
        });
        return;
      }
      const group = phone.closest('.phones-strip, .phones, .ba-pair, .callout-pair, .feature-pair') || phone.parentElement;
      listen(phone, 'click', () => {
        const siblings = Array.from(group.querySelectorAll('.phone'));
        const idx = siblings.indexOf(phone);
        open(siblings.map(itemFromPhone), idx >= 0 ? idx : 0);
      });
    });

    listen(lbPrev, 'click', () => show(cur - 1));
    listen(lbNext, 'click', () => show(cur + 1));
    listen(lbClose, 'click', close);
    listen(lb, 'click', (e) => {
      if (e.target.closest('#lightbox-img, .lightbox__btn, .lightbox__close, .lightbox__legend, #lightbox-pin-layer, #lightbox-overlay')) return;
      close();
    });
    listen(document, 'keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(cur - 1);
      else if (e.key === 'ArrowRight') show(cur + 1);
    });
    listen(window, 'resize', () => { if (curAnno) layoutAnno(curAnno); });
    listen(lbImg, 'load', () => { if (curAnno) layoutAnno(curAnno); });
  }

  return () => {
    cleanups.forEach((fn) => fn());
    timers.forEach(clearTimeout);
    document.body.style.overflow = '';
  };
}
