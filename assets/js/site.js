/* Shared header, footer, page sections and popups.
   You normally don't need to edit this file; your content lives in data.js. */
(function () {
  const S = window.SITE || {};
  const P = window.PROJECTS || [];
  const C = window.CERTIFICATIONS || [];
  const R = window.RESUME || {};

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = {
    close: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5 5l10 10M15 5L5 15"/></svg>',
    out: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h7v7M13 3 4 12"/></svg>',
    down: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v9M4 7l4 4 4-4M3 14h10"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.15-.02-2.64-1.6-2.64-1.61 0-1.86 1.26-1.86 2.56v4.92h-4v-11Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 6.5L20.5 6"/></svg>',
  };
  const ext = 'target="_blank" rel="noopener"';

  /* ---------- Header & footer (same on every page) ---------- */
  const page = document.body.dataset.page;
  const links = [["index.html", "Home", "home"], ["about.html", "About", "about"], ["projects.html", "Projects", "projects"], ["resume.html", "Resume", "resume"]];
  const cur = (k) => (k === page ? ' aria-current="page"' : "");

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">${esc(S.name)}</a>
        <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
        <nav class="nav" id="nav">${links.map(([h, l, k]) => `<a href="${h}"${cur(k)}>${l}</a>`).join("")}</nav>
      </div>`;
    const btn = header.querySelector(".menu-btn");
    btn.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <h2>Website Information</h2>
        <nav class="foot-nav" aria-label="Footer">${links.map(([h, l, k]) => `<a href="${h}"${cur(k)}>${l}</a>`).join("")}</nav>
        <div class="foot-info">
          ${S.phone ? `<a href="tel:${esc(S.phone.replace(/[^\d+]/g, ""))}">Tel: ${esc(S.phone)}</a>` : ""}
          ${S.email ? `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>` : ""}
          ${S.location ? `<span>${esc(S.location)}</span>` : ""}
        </div>
      </div>`;
  }

  /* ---------- Simple text slots ---------- */
  document.querySelectorAll("[data-site]").forEach((el) => { if (S[el.dataset.site]) el.textContent = S[el.dataset.site]; });

  document.querySelectorAll('[data-render="social"]').forEach((el) => {
    const third = S.website
      ? `<a href="${esc(S.website)}" ${ext} aria-label="Website">${icon.link}</a>`
      : `<a href="mailto:${esc(S.email)}" aria-label="Email">${icon.mail}</a>`;
    el.innerHTML =
      (S.linkedin ? `<a href="${esc(S.linkedin)}" ${ext} aria-label="LinkedIn">${icon.linkedin}</a>` : "") +
      (S.github ? `<a href="${esc(S.github)}" ${ext} aria-label="GitHub">${icon.github}</a>` : "") +
      third;
  });

  /* ---------- Project covers ---------- */
  // Each project without an image gets a generated cover: its label plus a small bar motif.
  const bars = (id) => {
    let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return Array.from({ length: 6 }, (_, i) => `<i style="height:${30 + ((h >>> (i * 3)) % 7) * 10}%"></i>`).join("");
  };
  const cover = (p, i) =>
    p.image
      ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">`
      : `<div class="tile v${(i % 3) + 1}"><span class="t-cat">${esc(p.category)}</span><span class="t-mark">${esc(p.mark)}</span><span class="t-bars">${bars(p.id)}</span></div>`;

  /* ---------- Projects page ---------- */
  document.querySelectorAll('[data-render="projects"]').forEach((el) => {
    const list = el.dataset.limit ? P.slice(0, +el.dataset.limit) : P.slice();
    const holder = document.createElement("div");
    const draw = (cat) => {
      holder.innerHTML = list
        .map((p, i) => [p, i])
        .filter(([p]) => !cat || p.category === cat)
        .map(([p, i]) => `
          <article class="post">
            <button class="post-media" data-open="p/${esc(p.id)}" aria-label="Open ${esc(p.title)}">${cover(p, i)}</button>
            <div>
              ${p.date ? `<div class="post-date">${esc(p.date)}</div>` : ""}
              <h2><button data-open="p/${esc(p.id)}">${esc(p.title)}</button></h2>
              ${p.subtitle ? `<p class="post-sub">${esc(p.subtitle)}</p>` : ""}
              <button class="read-more" data-open="p/${esc(p.id)}">Read More</button>
            </div>
          </article>`).join("");
    };
    if (el.dataset.filters === "true") {
      const cats = [...new Set(list.map((p) => p.category))];
      const bar = document.createElement("div");
      bar.className = "filters";
      bar.setAttribute("role", "group");
      bar.setAttribute("aria-label", "Filter projects");
      bar.innerHTML = `<button class="filter" aria-pressed="true" data-cat="">All</button>` +
        cats.map((c) => `<button class="filter" aria-pressed="false" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
      bar.addEventListener("click", (e) => {
        const b = e.target.closest(".filter"); if (!b) return;
        bar.querySelectorAll(".filter").forEach((x) => x.setAttribute("aria-pressed", x === b));
        draw(b.dataset.cat);
      });
      el.appendChild(bar);
    }
    el.appendChild(holder);
    draw("");
  });

  /* ---------- Certifications ---------- */
  // Each block's background is, in order of preference:
  //   1. image: a picture of the certificate itself (set in data.js), or
  //   2. logo:  the issuer's logo (set in data.js), or
  //   3. assets/img/logos/<issuer>.png automatically (e.g. cfi.png, forage.png).
  // If no picture is found, the short "mark" text shows instead.
  const logoSrc = (c) => c.logo || (c.issuer ? `assets/img/logos/${c.issuer.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png` : "");
  const imgTag = (src, alt) =>
    `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.parentNode.classList.add('nologo');this.remove()">`;
  const logo = (c) => {
    const src = c.image || logoSrc(c);
    return `<span class="logo-box${src ? "" : " nologo"}">${src ? imgTag(src, c.image ? c.title : `${c.issuer} logo`) : ""}<b>${esc(c.mark)}</b></span>`;
  };

  document.querySelectorAll('[data-render="certs"]').forEach((el) => {
    el.className = "cert-grid";
    el.innerHTML = C.map((c) => {
      const src = c.image || logoSrc(c);
      return `
      <button class="ctile ${c.image ? "is-cert" : "is-logo"}${src ? "" : " nologo"}" data-open="c/${esc(c.id)}" aria-label="Open ${esc(c.title)}">
        <span class="ctile-bg">${src ? imgTag(src, "") : ""}<b>${esc(c.mark)}</b></span>
        <span class="ctile-body">
          <strong>${esc(c.title)}</strong>
          <small>${esc([c.issuer, c.date].filter(Boolean).join(", "))}</small>
          <span class="ctile-btn">View</span>
        </span>
      </button>`;
    }).join("");
  });

  /* ---------- Resume ---------- */
  const resumeEl = document.querySelector('[data-render="resume"]');
  if (resumeEl) {
    const block = (t, body) => (body ? `<section class="r-block"><h2>${t}</h2>${body}</section>` : "");
    const edu = (R.education || []).map((e) => `
      <div class="r-item">
        <div class="r-row"><h3>${esc(e.school)}</h3><span class="date">${esc(e.date)}</span></div>
        ${(e.lines || []).map((l) => `<p>${l.label ? `<b>${esc(l.label)}:</b> ` : ""}${esc(l.text)}</p>`).join("")}
      </div>`).join("");
    const exp = (R.experience || []).map((x) => `
      <div class="r-item">
        <div class="r-row"><h3>${esc(x.org)}</h3><span class="date">${esc(x.date)}</span></div>
        ${x.role ? `<p>${esc(x.role)}</p>` : ""}
        ${x.bullets && x.bullets.length ? `<ul>${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      </div>`).join("");
    const proj = P.length ? `<div class="r-item r-proj">${P.map((p) =>
      `<div class="r-row"><span><button class="r-link" data-open="p/${esc(p.id)}">${esc(p.title)}</button></span><span class="date">${esc(p.date)}</span></div>`).join("")}</div>` : "";
    const skills = (R.skills || []).length
      ? `<div class="r-item">${R.skills.map((s) => `<p><b>${esc(s.label)}:</b> ${esc(s.text)}</p>`).join("")}</div>` : "";

    resumeEl.innerHTML = `
      <h1 class="page-title">Resume</h1>
      ${S.resumePdf ? `<div class="dl"><a class="btn-line" href="${esc(S.resumePdf)}" download>${icon.down}Download PDF</a></div>` : ""}
      ${block("Education", edu)}
      ${block("Work Experience", exp)}
      ${block("Skills", skills)}`;
  }

  /* ---------- Popups ---------- */
  const dlg = document.createElement("dialog");
  dlg.className = "pop";
  dlg.setAttribute("aria-labelledby", "pop-title");
  document.body.appendChild(dlg);

  const linkBtn = (l, i) => {
    const file = /\.(pdf|xlsx?|pbix|docx?|pptx?|csv|zip)$/i.test(l.url);
    return `<a class="${i ? "btn-line" : "btn-solid"}" href="${esc(l.url)}" ${file ? "download" : ext}>${file ? icon.down : icon.out}${esc(l.label)}</a>`;
  };

  function projectHTML(p) {
    const i = P.indexOf(p);
    const prev = P[(i - 1 + P.length) % P.length];
    const next = P[(i + 1) % P.length];
    return `
      <div class="pop-side">${cover(p, i)}</div>
      <div class="pop-main">
        <div class="pop-date">${esc([p.category, p.date].filter(Boolean).join("  /  "))}</div>
        <h2 id="pop-title">${esc(p.title)}</h2>
        <p class="summary">${esc(p.summary)}</p>
        ${p.highlights && p.highlights.length ? `<h4>What I did</h4><ul class="checks">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${p.tools && p.tools.length ? `<h4>Tools</h4><div class="chips">${p.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
        ${p.links && p.links.length ? `<div class="btn-row">${p.links.map(linkBtn).join("")}</div>` : ""}
        ${P.length > 1 ? `<div class="pop-nav">
          <button data-open="p/${esc(prev.id)}">Previous<strong>${esc(prev.title)}</strong></button>
          <button data-open="p/${esc(next.id)}">Next<strong>${esc(next.title)}</strong></button>
        </div>` : ""}
      </div>`;
  }

  function certHTML(c) {
    const i = C.indexOf(c);
    const prev = C[(i - 1 + C.length) % C.length];
    const next = C[(i + 1) % C.length];
    return `
      <div class="pop-side cert-side">${logo(c)}</div>
      <div class="pop-main">
        <div class="pop-date">${esc([c.issuer, c.date].filter(Boolean).join("  /  ") || "Certification")}</div>
        <h2 id="pop-title">${esc(c.title)}</h2>
        <p class="summary">${esc(c.summary)}</p>
        ${c.covers && c.covers.length ? `<h4>What it covers</h4><ul class="checks">${c.covers.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""}
        ${c.credentialUrl ? `<div class="btn-row">${linkBtn({ label: "Verify credential", url: c.credentialUrl }, 0)}</div>` : ""}
        ${C.length > 1 ? `<div class="pop-nav">
          <button data-open="c/${esc(prev.id)}">Previous<strong>${esc(prev.title)}</strong></button>
          <button data-open="c/${esc(next.id)}">Next<strong>${esc(next.title)}</strong></button>
        </div>` : ""}
      </div>`;
  }

  let lastFocus = null;
  function open(key, push = true) {
    const [type, id] = key.split("/");
    let html = "";
    if (type === "p") { const p = P.find((x) => x.id === id); if (p) html = projectHTML(p); }
    if (type === "c") { const c = C.find((x) => x.id === id); if (c) html = certHTML(c); }
    if (!html) return;
    dlg.innerHTML = `<div class="pop-inner"><button class="pop-close" aria-label="Close">${icon.close}</button>${html}</div>`;
    if (!dlg.open) {
      lastFocus = document.activeElement;
      dlg.showModal();
      document.body.classList.add("modal-open");
    }
    dlg.querySelector(".pop-inner").scrollTop = 0;
    dlg.querySelector(".pop-close").focus();
    if (push) history.replaceState(null, "", "#" + key);
  }

  function close() {
    if (!dlg.open || dlg.classList.contains("closing")) return;
    const done = () => {
      dlg.classList.remove("closing");
      dlg.close();
      document.body.classList.remove("modal-open");
      history.replaceState(null, "", location.pathname + location.search);
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return done();
    dlg.classList.add("closing");
    setTimeout(done, 190);
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]");
    if (t) { e.preventDefault(); open(t.dataset.open); return; }
    if (e.target.closest(".pop-close") || e.target === dlg) close();
  });
  dlg.addEventListener("cancel", (e) => { e.preventDefault(); close(); });

  // Shareable links: projects.html#p/13-week-cash-flow or resume.html#c/bida
  const h = decodeURIComponent(location.hash.slice(1));
  if (/^(p|c)\/.+/.test(h)) open(h, false);
})();
