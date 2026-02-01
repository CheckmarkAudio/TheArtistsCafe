(() => {
  const content = window.SiteContent;
  if (!content) return;

  const navLinks = document.getElementById("nav-links");
  const mobileDock = document.getElementById("mobile-dock");

  const buildImageLink = (href, src, label, className = "img-link") => {
    const link = document.createElement("a");
    link.href = href;
    link.className = className;
    link.setAttribute("aria-label", label);
    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    link.appendChild(img);
    return link;
  };

  const buildTextLink = (href, label, className = "cta-button") => {
    const link = document.createElement("a");
    link.href = href;
    link.className = className;
    link.textContent = label;
    link.setAttribute("aria-label", label);
    return link;
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

  document.getElementById("hero-headline").textContent = content.hero.headline;
  document.getElementById("hero-subhead").textContent = content.hero.subhead;
  const heroCtas = document.getElementById("hero-ctas");
  content.hero.ctas.forEach((cta) => {
    const className =
      cta.label === "Apply" ? "cta-button is-primary" : "cta-button";
    heroCtas.appendChild(buildTextLink(cta.href, cta.label, className));
  });

  document.getElementById("proof-title").textContent = content.proofStripTitle;
  document.getElementById("proof-subtitle").textContent = content.proofStripSentence;
  const proofStrip = document.getElementById("proof-strip");
  content.proofStrip.forEach((item) => {
    const outer = document.createElement("div");
    outer.className = "float-plane";
    outer.setAttribute("data-parallax", "");
    const card = document.createElement("div");
    card.className = "plane-inner open-plane proof-card reveal";
    card.textContent = item;
    outer.appendChild(card);
    proofStrip.appendChild(outer);
  });

  document.getElementById("how-title").textContent = content.howItWorks.headline;
  document.getElementById("how-subtitle").textContent = content.howItWorks.sentence;
  const howSteps = document.getElementById("how-steps");
  content.howItWorks.steps.forEach((step, index) => {
    const outer = document.createElement("div");
    outer.className = "float-plane";
    outer.setAttribute("data-parallax", "");
    const card = document.createElement("div");
    card.className = "plane-inner open-plane step-card reveal";
    card.textContent = `${index + 1}. ${step}`;
    outer.appendChild(card);
    howSteps.appendChild(outer);
  });

  document.getElementById("features-title").textContent = content.features.headline;
  document.getElementById("features-subtitle").textContent = content.features.sentence;
  const featureGrid = document.getElementById("feature-grid");
  content.features.items.forEach((feature) => {
    const outer = document.createElement("div");
    outer.className = "float-plane";
    outer.setAttribute("data-parallax", "");
    const card = document.createElement("div");
    card.className = "plane-inner open-plane feature-card reveal";
    const title = document.createElement("h3");
    title.textContent = feature.title;
    const list = document.createElement("ul");
    feature.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      list.appendChild(li);
    });
    card.appendChild(title);
    card.appendChild(list);
    outer.appendChild(card);
    featureGrid.appendChild(outer);
  });

  const immersiveSpotlight = document.getElementById("immersive-spotlight");
  const immersiveOuter = document.createElement("div");
  immersiveOuter.className = "float-plane";
  immersiveOuter.setAttribute("data-parallax", "");
  const immersiveCard = document.createElement("div");
  immersiveCard.className = "plane-inner open-plane spotlight-card reveal";
  immersiveCard.innerHTML = `
    <h3>${content.immersive.headline}</h3>
    <p>${content.immersive.sentence}</p>
    <p><strong>${content.immersive.scanLine}</strong></p>
  `;
  const immersiveList = document.createElement("ul");
  content.immersive.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    immersiveList.appendChild(li);
  });
  immersiveCard.appendChild(immersiveList);
  immersiveOuter.appendChild(immersiveCard);
  immersiveSpotlight.appendChild(immersiveOuter);

  const playlistSpotlight = document.getElementById("playlisting-spotlight");
  const playlistOuter = document.createElement("div");
  playlistOuter.className = "float-plane";
  playlistOuter.setAttribute("data-parallax", "");
  const playlistCard = document.createElement("div");
  playlistCard.className = "plane-inner open-plane spotlight-card reveal";
  const playlistTitle = document.createElement("h3");
  playlistTitle.textContent = content.playlisting.headline;
  const playlistList = document.createElement("ul");
  content.playlisting.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    playlistList.appendChild(li);
  });
  const honesty = document.createElement("p");
  honesty.textContent = content.playlisting.honesty;
  playlistCard.appendChild(playlistTitle);
  playlistCard.appendChild(playlistList);
  playlistCard.appendChild(honesty);
  playlistOuter.appendChild(playlistCard);
  playlistSpotlight.appendChild(playlistOuter);

  document.getElementById("tiers-title").textContent = content.tiers.headline;
  document.getElementById("tiers-subtitle").textContent = content.tiers.sentence;
  const tierGrid = document.getElementById("tier-grid");
  content.tiers.cards.forEach((tier) => {
    const outer = document.createElement("div");
    outer.className = "float-plane";
    outer.setAttribute("data-parallax", "");
    const card = document.createElement("div");
    card.className = "plane-inner open-plane tier-card reveal";
    if (tier.recommended) {
      card.classList.add("is-recommended");
      const badge = document.createElement("span");
      badge.className = "tier-badge";
      badge.textContent = "Recommended";
      card.appendChild(badge);
    }
    const header = document.createElement("div");
    header.className = "tier-header";
    const title = document.createElement("h3");
    title.textContent = tier.name;
    const tagline = document.createElement("p");
    tagline.className = "tier-tagline";
    tagline.textContent = tier.tagline || "";
    header.appendChild(title);
    header.appendChild(tagline);
    const price = document.createElement("div");
    price.className = "tier-price";
    if (tier.priceAmount) {
      const amount = document.createElement("span");
      amount.className = "tier-price-amount";
      amount.textContent = tier.priceAmount;
      const period = document.createElement("span");
      period.className = "tier-price-period";
      period.textContent = tier.pricePeriod || "";
      price.appendChild(amount);
      price.appendChild(period);
    } else {
      const priceText = document.createElement("span");
      priceText.className = "tier-price-text";
      priceText.textContent = tier.price || "";
      price.appendChild(priceText);
    }
    const cta = document.createElement("a");
    cta.className = "tier-select";
    cta.href = `apply.html?tier=${tier.id}`;
    cta.textContent = tier.ctaLabel || "Select";
    const list = document.createElement("ul");
    list.className = "tier-features";
    tier.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      list.appendChild(li);
    });
    card.appendChild(header);
    card.appendChild(price);
    card.appendChild(cta);
    card.appendChild(list);
    if (tier.note) {
      const note = document.createElement("div");
      note.className = "tier-note";
      note.textContent = tier.note;
      card.appendChild(note);
    }
    outer.appendChild(card);
    tierGrid.appendChild(outer);
  });

  document.getElementById("movement-title").textContent = content.movement.headline;
  document.getElementById("movement-line").textContent = content.brand.movementLine;
  document.getElementById("movement-quote").textContent = content.brand.quote;
  document.getElementById("movement-coowner").textContent = content.brand.coOwnerLine;

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
