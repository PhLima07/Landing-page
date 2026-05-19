/* =============================================================
   PHL · script.js — interações da página
   ============================================================= */
(() => {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* =========================================================
     1. Tema claro/escuro (obrigatório)
     - Persiste em localStorage
     - Respeita prefers-color-scheme na primeira visita
     - Alterna data-theme em <html>
     ========================================================= */
  const Theme = (() => {
    const STORAGE_KEY = "phl-theme";
    const root = document.documentElement;
    const btn  = $("#theme-toggle");

    const systemPref = () =>
      window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";

    const apply = (theme) => {
      root.setAttribute("data-theme", theme);
      btn?.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      btn?.setAttribute(
        "title",
        theme === "light" ? "Trocar para tema escuro" : "Trocar para tema claro"
      );
    };

    const init = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      apply(saved || systemPref());

      btn?.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        apply(next);
        localStorage.setItem(STORAGE_KEY, next);
      });

      window.matchMedia?.("(prefers-color-scheme: light)")
        .addEventListener?.("change", (e) => {
          if (!localStorage.getItem(STORAGE_KEY)) apply(e.matches ? "light" : "dark");
        });
    };

    return { init };
  })();

  /* =========================================================
     2. Copiar e-mail (obrigatório)
     - Clipboard API com fallback
     - Feedback visual por ~2s
     ========================================================= */
  const CopyEmail = (() => {
    const btn = $("#copy-email");
    if (!btn) return { init: () => {} };

    const FEEDBACK_MS = 2000;
    let timer = null;

    const fallbackCopy = (text) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) { ok = false; }
      ta.remove();
      return ok;
    };

    const flash = () => {
      btn.classList.add("is-copied");
      btn.setAttribute("aria-label", "E-mail copiado para a área de transferência");
      clearTimeout(timer);
      timer = setTimeout(() => {
        btn.classList.remove("is-copied");
        btn.setAttribute("aria-label", "Copiar e-mail");
      }, FEEDBACK_MS);
    };

    const init = () => {
      btn.addEventListener("click", async () => {
        const email = btn.dataset.email || "";
        if (!email) return;
        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(email);
          } else if (!fallbackCopy(email)) {
            throw new Error("copy failed");
          }
          flash();
        } catch {
          btn.querySelector(".copy-btn__label").textContent = "Falhou";
          setTimeout(() => {
            btn.querySelector(".copy-btn__label").textContent = "Copiar";
          }, FEEDBACK_MS);
        }
      });
    };

    return { init };
  })();

  /* =========================================================
     3. Animação de entrada com IntersectionObserver (obrigatório)
     - Marca seções/elementos para fade-in suave
     - Dispara apenas uma vez por elemento
     ========================================================= */
  const Reveal = (() => {
    const targets = [
      "section",
      ".about__body p",
      ".about__stats",
      ".charm",
      ".gallery__item",
      ".video-frame",
      ".contact__card",
    ];

    const init = () => {
      const els = $$(targets.join(","));
      els.forEach((el) => el.classList.add("reveal"));

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      els.forEach((el) => io.observe(el));
    };

    return { init };
  })();

  /* =========================================================
     4. Filtro de Encantos (interação extra escolhida)
     - Clica num chip, filtra os charms por data-category
     - Estado acessível com aria-selected
     ========================================================= */
  const CharmFilter = (() => {
    const chips  = $$(".charms__filters .chip");
    const charms = $$(".charm");
    if (!chips.length || !charms.length) return { init: () => {} };

    const apply = (filter) => {
      charms.forEach((c) => {
        const match = filter === "all" || c.dataset.category === filter;
        c.classList.toggle("is-hidden", !match);
      });
    };

    const init = () => {
      chips.forEach((chip) => {
        chip.addEventListener("click", () => {
          chips.forEach((c) => {
            c.classList.remove("is-active");
            c.setAttribute("aria-selected", "false");
          });
          chip.classList.add("is-active");
          chip.setAttribute("aria-selected", "true");
          apply(chip.dataset.filter);
        });
      });
    };

    return { init };
  })();

  /* =========================================================
     5. Partículas de Soul (canvas — elemento criativo)
     - Pontos luminosos sobem lentamente, leve atração ao mouse
     - Desliga em prefers-reduced-motion
     ========================================================= */
  const SoulParticles = (() => {
    const canvas = $("#soul-canvas");
    if (!canvas) return { init: () => {} };

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return { init: () => {} };

    const ctx = canvas.getContext("2d");
    let w = 0, h = 0, dpr = 1, raf = 0;
    let particles = [];
    const mouse = { x: -9999, y: -9999, active: false };
    const coarse = window.matchMedia?.("(pointer: coarse)").matches;

    const COUNT = () => {
      const max = coarse ? 55 : 110;
      const density = coarse ? 36000 : 18000;
      return Math.min(max, Math.floor((w * h) / density));
    };

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue("--soul-glow").trim() || "#6ab7d4";

    const spawn = () => {
      particles = Array.from({ length: COUNT() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.6,
        vy: -(Math.random() * 0.35 + 0.08),
        vx: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.5 + 0.25,
        twinkle: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const color = accent();

      particles.forEach((p) => {
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14400) {
            const f = (1 - Math.sqrt(d2) / 120) * 0.6;
            p.vx += (dx / Math.sqrt(d2 || 1)) * f * 0.05;
            p.vy += (dy / Math.sqrt(d2 || 1)) * f * 0.05;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.twinkle += 0.04;

        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const a = p.alpha * (0.7 + Math.sin(p.twinkle) * 0.3);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = a;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };

    const onMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    let resizeT;
    const onResize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(resize, 120);
    };

    const init = () => {
      resize();
      tick();
      window.addEventListener("resize", onResize);
      window.addEventListener("pointermove", onMouse, { passive: true });
      window.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else raf = requestAnimationFrame(tick);
      });
    };

    return { init };
  })();

  /* =========================================================
     6. Konami code → Dream Nail (easter egg criativo)
     ↑ ↑ ↓ ↓ ← → ← → B A  → ativa overlay onírica
     Usa máquina de estado: avança o índice quando a tecla bate,
     reseta quando erra (ou volta pra 1 se errou pra um Up inicial).
     Mostra um indicador discreto no canto após 3 teclas corretas.
     ========================================================= */
  const DreamNail = (() => {
    const overlay = $("#dream-overlay");
    if (!overlay) return { init: () => {} };

    const SEQ = [
      "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
      "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
      "b","a",
    ];
    let idx = 0;
    let active = false;
    let progress = null;

    const buildProgress = () => {
      const el = document.createElement("div");
      el.id = "konami-progress";
      el.setAttribute("aria-hidden", "true");
      el.textContent = "";
      document.body.appendChild(el);
      return el;
    };

    const renderProgress = () => {
      if (!progress) progress = buildProgress();
      if (idx >= 3) {
        progress.textContent = "●".repeat(idx) + "○".repeat(SEQ.length - idx);
        progress.classList.add("is-active");
      } else {
        progress.classList.remove("is-active");
      }
    };

    const open = () => {
      if (active) return;
      active = true;
      overlay.classList.add("is-active");
      document.body.classList.add("is-dreaming");
      if (progress) progress.classList.remove("is-active");
    };

    const close = () => {
      if (!active) return;
      active = false;
      overlay.classList.remove("is-active");
      document.body.classList.remove("is-dreaming");
    };

    const init = () => {
      document.addEventListener("keydown", (e) => {
        if (active) { close(); return; }

        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;

        if (k === SEQ[idx]) {
          idx++;
          if (idx === SEQ.length) {
            open();
            idx = 0;
          }
        } else if (k === SEQ[0]) {
          idx = 1;
        } else {
          idx = 0;
        }
        renderProgress();
      });

      overlay.addEventListener("click", close);
    };

    return { init };
  })();

  /* =========================================================
     7. Menu mobile
     ========================================================= */
  const MobileNav = (() => {
    const toggle = $(".nav-toggle");
    const list   = $("#primary-menu");
    if (!toggle || !list) return { init: () => {} };

    const close = () => {
      list.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    };
    const open = () => {
      list.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fechar menu");
    };

    const init = () => {
      toggle.addEventListener("click", () => {
        list.classList.contains("is-open") ? close() : open();
      });
      list.addEventListener("click", (e) => {
        if (e.target.tagName === "A") close();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
      });
      document.addEventListener("click", (e) => {
        if (!list.contains(e.target) && !toggle.contains(e.target)) close();
      });
    };

    return { init };
  })();

  /* =========================================================
     8. Geo counter (anima quando entra na viewport)
     ========================================================= */
  const GeoCounter = (() => {
    const el = $(".geo-counter");
    if (!el) return { init: () => {} };

    const target = parseInt(el.dataset.countTo || "0", 10);

    const run = () => {
      const start = performance.now();
      const dur = 1400;
      const step = (now) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString("pt-BR");
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const init = () => {
      if (!("IntersectionObserver" in window)) { el.textContent = target; return; }
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      io.observe(el);
    };

    return { init };
  })();

  /* =========================================================
     9. Barra de progresso de leitura (gauge de Geo)
     ========================================================= */
  const ScrollProgress = (() => {
    const bar = $("#scroll-progress > span");
    if (!bar) return { init: () => {} };

    let ticking = false;
    const update = () => {
      const scrolled = window.scrollY;
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
      const pct = Math.min(100, Math.max(0, (scrolled / max) * 100));
      bar.style.width = pct + "%";
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    const init = () => {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    };

    return { init };
  })();

  /* =========================================================
     10. Ano no rodapé
     ========================================================= */
  const FooterYear = (() => {
    const init = () => {
      const el = $("#year");
      if (el) el.textContent = new Date().getFullYear();
    };
    return { init };
  })();

  /* ============ Boot ============ */
  const boot = () => {
    Theme.init();
    CopyEmail.init();
    Reveal.init();
    CharmFilter.init();
    SoulParticles.init();
    DreamNail.init();
    MobileNav.init();
    GeoCounter.init();
    ScrollProgress.init();
    FooterYear.init();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
