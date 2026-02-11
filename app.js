(() => {
  const content = window.SiteContent;
  if (!content) return;

  const navLinks = document.getElementById("nav-links");
  const mobileDock = document.getElementById("mobile-dock");

  const buildTextLink = (href, label, className = "cta-button") => {
    const link = document.createElement("a");
    link.href = href;
    link.className = className;
    link.textContent = label;
    link.setAttribute("aria-label", label);
    return link;
  };

  const renderCopy = (container, text) => {
    if (!container) return;
    container.innerHTML = "";
    const blocks = String(text || "").split(/\n{2,}/g);
    blocks.forEach((block) => {
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      const bulletLines = lines.filter((line) => line.startsWith("- "));
      if (bulletLines.length === lines.length && bulletLines.length) {
        const ul = document.createElement("ul");
        bulletLines.forEach((line) => {
          const li = document.createElement("li");
          li.textContent = line.replace(/^- /, "");
          ul.appendChild(li);
        });
        container.appendChild(ul);
        return;
      }
      const p = document.createElement("p");
      p.textContent = lines.join("\n");
      container.appendChild(p);
    });
  };

  content.nav.forEach((item) => {
    const link = buildTextLink(item.href, item.label, "nav-pill");
    if (item.id === "apply") link.classList.add("is-primary");
    navLinks.appendChild(link);
    const dockLink = buildTextLink(item.href, item.label, "nav-pill");
    if (item.id === "apply") dockLink.classList.add("is-primary");
    mobileDock.appendChild(dockLink);
  });

  const brandLink = document.querySelector("nav.top-nav a.img-link");
  const brandImg = document.querySelector(".brand-mark");
  if (brandLink) brandLink.setAttribute("aria-label", content.accessibility.homeLabel);
  if (brandImg) brandImg.alt = content.brand.name;
  const fixedApply = document.querySelector(".fixed-apply");
  if (fixedApply) {
    fixedApply.setAttribute("aria-label", content.accessibility.applyNowLabel);
    const img = fixedApply.querySelector("img");
    if (img) img.alt = content.finalCta.applyLabel;
  }

  const heroHeadline = document.getElementById("hero-headline");
  if (heroHeadline) {
    const highlightText = "open label";
    if (content.hero.headline.includes(highlightText)) {
      heroHeadline.innerHTML = content.hero.headline.replace(
        highlightText,
        `<span class="hero-highlight">${highlightText}</span>`
      );
    } else {
      heroHeadline.textContent = content.hero.headline;
    }
  }
  const heroSubhead = document.getElementById("hero-subhead");
  if (heroSubhead) heroSubhead.textContent = content.hero.subhead;
  const heroCtas = document.getElementById("hero-ctas");
  if (heroCtas && content.hero?.ctas?.length) {
    content.hero.ctas.forEach((cta, index) => {
      const className =
        index === 0 ? "cta-button is-primary" : "cta-button";
      heroCtas.appendChild(buildTextLink(cta.href, cta.label, className));
    });
  }

  const membershipTitle = document.getElementById("membership-title");
  const membershipSubtitle = document.getElementById("membership-subtitle");
  const membershipAllTitle = document.getElementById("membership-all-title");
  const membershipBullets = document.getElementById("membership-bullets");
  const membershipSupportNote = document.getElementById("membership-support-note");

  if (membershipTitle) membershipTitle.textContent = content.membership?.headline || "";
  if (membershipSubtitle) membershipSubtitle.textContent = content.membership?.sentence || "";
  if (membershipAllTitle) membershipAllTitle.textContent = content.membership?.allMembersTitle || "";
  if (membershipBullets) {
    membershipBullets.innerHTML = "";
    (content.membership?.bullets || []).forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      membershipBullets.appendChild(li);
    });
  }
  if (membershipSupportNote) membershipSupportNote.textContent = content.membership?.supportNote || "";

  const supportTitle = document.getElementById("support-title");
  const supportSubtitle = document.getElementById("support-subtitle");
  const supportBullets = document.getElementById("support-bullets");
  const statusGrid = document.getElementById("status-grid");

  if (supportTitle) supportTitle.textContent = content.support?.headline || "";
  if (supportSubtitle) supportSubtitle.textContent = content.support?.sentence || "";
  if (supportBullets) {
    supportBullets.innerHTML = "";
    (content.support?.bullets || []).forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      supportBullets.appendChild(li);
    });
  }
  if (statusGrid) {
    statusGrid.innerHTML = "";
    (content.support?.statuses || []).forEach((status) => {
      const outer = document.createElement("div");
      outer.className = "float-plane";
      outer.setAttribute("data-parallax", "");
      const card = document.createElement("div");
      card.className = "plane-inner open-plane status-card reveal";
      const title = document.createElement("h3");
      title.textContent = status.name;
      const body = document.createElement("div");
      body.className = "status-copy";
      renderCopy(body, status.copy);
      card.appendChild(title);
      card.appendChild(body);
      outer.appendChild(card);
      statusGrid.appendChild(outer);
    });
  }

  const disclaimersTitle = document.getElementById("disclaimers-title");
  if (disclaimersTitle) disclaimersTitle.textContent = content.disclaimers?.headline || "";
  const disclaimerGrid = document.getElementById("disclaimer-grid");
  if (disclaimerGrid) {
    disclaimerGrid.innerHTML = "";
    const items = [
      {
        title: content.disclaimers?.editorialTitle,
        copy: content.disclaimers?.editorialCopy,
      },
      {
        title: content.disclaimers?.verificationTitle,
        copy: content.disclaimers?.verificationCopy,
      },
    ].filter((item) => item.title && item.copy);
    items.forEach((item) => {
      const outer = document.createElement("div");
      outer.className = "float-plane";
      outer.setAttribute("data-parallax", "");
      const card = document.createElement("div");
      card.className = "plane-inner open-plane disclaimer-card reveal";
      const title = document.createElement("h3");
      title.textContent = item.title;
      const body = document.createElement("div");
      body.className = "disclaimer-copy";
      renderCopy(body, item.copy);
      card.appendChild(title);
      card.appendChild(body);
      outer.appendChild(card);
      disclaimerGrid.appendChild(outer);
    });
  }

  const optionalServicesTitle = document.getElementById("optional-services-title");
  if (optionalServicesTitle) {
    optionalServicesTitle.textContent = content.optionalServices?.headline || "";
  }
  const optionalServicesCopy = document.getElementById("optional-services-copy");
  if (optionalServicesCopy) renderCopy(optionalServicesCopy, content.optionalServices?.copy || "");

  document.getElementById("faq-title").textContent = content.faq.headline;
  const faqGrid = document.getElementById("faq-grid");
  content.faq.items.forEach((item) => {
    const outer = document.createElement("div");
    outer.className = "float-plane";
    outer.setAttribute("data-parallax", "");
    const card = document.createElement("div");
    card.className = "plane-inner glass-plane faq-item reveal";
    const q = document.createElement("h4");
    q.textContent = item.q;
    const a = document.createElement("p");
    a.textContent = item.a;
    card.appendChild(q);
    card.appendChild(a);
    outer.appendChild(card);
    faqGrid.appendChild(outer);
  });

  document.getElementById("final-title").textContent = content.finalCta.headline;
  document.getElementById("final-subtitle").textContent = content.finalCta.sentence;
  const finalCtas = document.getElementById("final-ctas");
  finalCtas.appendChild(
    buildTextLink("apply.html", content.finalCta.applyLabel, "cta-button is-primary")
  );
  finalCtas.appendChild(
    buildTextLink(
      `mailto:${content.brand.email}`,
      content.finalCta.emailLabel,
      "cta-button"
    )
  );

  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  revealElements.forEach((el, index) => {
    const delay = (index % 6) * 80;
    el.style.transitionDelay = `${delay}ms`;
  });
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          document.body.classList.toggle("nav-hidden", !entry.isIntersecting);
        });
      },
      { threshold: 0.08 }
    );
    navObserver.observe(heroSection);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  revealElements.forEach((el) => observer.observe(el));

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sidebar = document.getElementById("expandable-sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarPanel = document.getElementById("sidebar-panel");
  const sidebarClose = document.getElementById("sidebar-close");

  const setSidebarExpanded = (isExpanded) => {
    if (!sidebar) return;
    sidebar.classList.toggle("is-expanded", isExpanded);
    if (sidebarToggle) sidebarToggle.setAttribute("aria-expanded", String(isExpanded));
    if (sidebarPanel) sidebarPanel.setAttribute("aria-hidden", String(!isExpanded));
  };

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      const nextState = !sidebar?.classList.contains("is-expanded");
      setSidebarExpanded(nextState);
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener("click", () => setSidebarExpanded(false));
  }

  const adRotator = document.querySelector("[data-ad-rotator]");
  const adPrev = document.querySelector("[data-ad-prev]");
  const adNext = document.querySelector("[data-ad-next]");
  const adSlides = adRotator
    ? Array.from(adRotator.querySelectorAll(".ad-slide"))
    : [];
  let adIndex = 0;
  let adTimer = null;

  const showAdSlide = (index) => {
    if (!adSlides.length) return;
    adSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });
  };

  const queueAdRotation = () => {
    if (!adSlides.length) return;
    if (adTimer) window.clearInterval(adTimer);
    if (!prefersReducedMotion) {
      adTimer = window.setInterval(() => {
        adIndex = (adIndex + 1) % adSlides.length;
        showAdSlide(adIndex);
      }, 4200);
    }
  };

  if (adSlides.length) {
    showAdSlide(adIndex);
    queueAdRotation();
  }

  if (adPrev) {
    adPrev.addEventListener("click", () => {
      if (!adSlides.length) return;
      adIndex = (adIndex - 1 + adSlides.length) % adSlides.length;
      showAdSlide(adIndex);
      queueAdRotation();
    });
  }

  if (adNext) {
    adNext.addEventListener("click", () => {
      if (!adSlides.length) return;
      adIndex = (adIndex + 1) % adSlides.length;
      showAdSlide(adIndex);
      queueAdRotation();
    });
  }

  if (prefersReducedMotion) {
    document.body.classList.add("reduced-motion");
    return;
  }

  const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
  let pointerX = 0;
  let pointerY = 0;
  let rafId = null;

  const updateParallax = () => {
    const maxOffset = 6;
    const xOffset = (pointerX - window.innerWidth / 2) / (window.innerWidth / 2);
    const yOffset = (pointerY - window.innerHeight / 2) / (window.innerHeight / 2);
    parallaxItems.forEach((item, index) => {
      const depth = (index % 3) + 1;
      const x = xOffset * maxOffset * (depth / 3);
      const y = yOffset * maxOffset * (depth / 3);
      item.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
      item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    });
    rafId = null;
  };

  window.addEventListener("mousemove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!rafId) {
      rafId = window.requestAnimationFrame(updateParallax);
    }
  });

  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    const particles = [];
    const state = { width: 0, height: 0, pointerX: 0, pointerY: 0 };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      state.width = innerWidth;
      state.height = innerHeight;
      const count = Math.min(80, Math.floor(innerWidth / 14));
      particles.length = 0;
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          r: Math.random() * 1.6 + 0.6,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, state.width, state.height);
      ctx.fillStyle = "rgba(92, 150, 176, 0.35)";
      particles.forEach((p) => {
        const dx = (state.pointerX - p.x) * 0.0008;
        const dy = (state.pointerY - p.y) * 0.0008;
        p.x += p.vx + dx;
        p.y += p.vy + dy;
        if (p.x < 0) p.x = state.width;
        if (p.x > state.width) p.x = 0;
        if (p.y < 0) p.y = state.height;
        if (p.y > state.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      window.requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (event) => {
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
    });
    window.addEventListener("scroll", () => {
      state.pointerY = window.scrollY % state.height;
    });

    resize();
    draw();
  }
})();
