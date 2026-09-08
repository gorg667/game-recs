/* GameRecs app — renders everything from window.GAMES + window.CONTENT (js/data-content.js, data/games-*.js) */
(function () {
  'use strict';
  const GAMES = (window.GAMES || []).map(normalize);
  const C = window.CONTENT || {};
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Priority weights from user profile: gameplay > challenge > exploration > progression > creativity > story > atmosphere
  const WEIGHTS = { gameplay: 0.26, challenge: 0.18, exploration: 0.16, progression: 0.14, creativity: 0.11, story: 0.08, atmosphere: 0.07 };
  const AXES = Object.keys(WEIGHTS);

  function normalize(g) {
    const r = g.ratings || {};
    let fit = 0;
    AXES.forEach(a => { fit += (r[a] ?? 5) * WEIGHTS[a]; });
    // quality multiplier: critic score nudges fit (max ±0.6)
    const crit = g.critic ?? 80;
    fit = fit + (crit - 80) / 33;
    g.fit = Math.round(Math.min(10, Math.max(1, fit)) * 10) / 10;
    g.lengthBucket = g.hours >= 100 ? 'endless' : g.hours >= 40 ? 'long' : g.hours >= 15 ? 'medium' : 'short';
    g.modes = g.modes || ['single'];
    g.tags = g.tags || [];
    g.id = g.id || g.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return g;
  }

  const byId = Object.fromEntries(GAMES.map(g => [g.id, g]));
  const fitClass = f => f >= 8.5 ? 'hi' : f >= 7 ? 'mid' : 'lo';
  const hoursLabel = g => g.hoursLabel || (g.hours >= 100 ? '100h+' : `~${g.hours}h`);
  const diffDots = d => `<span class="diff" title="Difficulty ${d}/5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= d ? 'on' : ''}"></i>`).join('')}</span>`;

  function card(g, rank) {
    const c = el('article', 'card');
    c.style.setProperty('--c1', g.colors?.[0] || '#3b3f6b');
    c.style.setProperty('--c2', g.colors?.[1] || '#1f7a8c');
    c.innerHTML = `
      <div class="card-banner">
        ${rank ? `<span class="card-rank">#${rank}</span>` : ''}
        <span class="fit-badge ${fitClass(g.fit)}" title="Personal fit score">${g.fit.toFixed(1)}</span>
        <h3>${esc(g.title)}</h3>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${g.year}</span><span>${esc(g.developer)}</span><span>${hoursLabel(g)}</span>${g.critic ? `<span>MC ${g.critic}</span>` : ''}</div>
        <p class="card-desc">${esc(g.short)}</p>
        <div class="tags">${g.genres.map(x => `<span class="tag genre">${esc(x)}</span>`).join('')}${g.modes.map(m => `<span class="tag mode">${modeLabel(m, g)}</span>`).join('')}</div>
        <div class="card-foot"><span>${diffDots(g.difficulty)}</span><span>${g.price ? esc(g.price) : ''}</span></div>
      </div>`;
    c.addEventListener('click', () => openModal(g));
    return c;
  }
  function modeLabel(m, g) {
    if (m === 'single') return 'Single-player';
    if (m === 'coop') return g.players ? `Co-op ${g.players}` : 'Co-op';
    if (m === 'pvp') return 'PvP';
    return m;
  }

  /* ---------- HERO STATS ---------- */
  function renderStats() {
    const s = $('#hero-stats'); if (!s) return;
    const genres = new Set(GAMES.flatMap(g => g.genres));
    const coop = GAMES.filter(g => g.modes.includes('coop')).length;
    const hours = GAMES.reduce((a, g) => a + Math.min(g.hours, 150), 0);
    [[GAMES.length, 'games reviewed'], [genres.size, 'genres covered'], [coop, 'co-op picks'], [`${Math.round(hours / 100) / 10}k+`, 'hours of play']]
      .forEach(([b, t]) => s.appendChild(el('div', 'stat', `<b>${b}</b><span>${t}</span>`)));
  }

  /* ---------- TOP PICKS ---------- */
  function renderTop() {
    const grid = $('#top-picks-grid'); if (!grid) return;
    [...GAMES].sort((a, b) => b.fit - a.fit).slice(0, 12).forEach((g, i) => grid.appendChild(card(g, i + 1)));
  }

  /* ---------- MOOD LISTS ---------- */
  function renderMoods() {
    const tabs = $('#mood-tabs'), content = $('#mood-content'); if (!tabs || !C.moods) return;
    C.moods.forEach((m, i) => {
      const b = el('button', i === 0 ? 'active' : '', m.label);
      b.addEventListener('click', () => { tabs.querySelectorAll('button').forEach(x => x.classList.remove('active')); b.classList.add('active'); show(m); });
      tabs.appendChild(b);
    });
    function show(m) {
      content.innerHTML = '';
      content.appendChild(el('p', 'mood-desc', m.desc));
      const grid = el('div', 'grid');
      m.games.forEach(id => { const g = byId[id]; if (g) grid.appendChild(card(g)); });
      content.appendChild(grid);
    }
    show(C.moods[0]);
  }

  /* ---------- LIBRARY + FILTERS ---------- */
  const state = { q: '', genre: '', mode: '', length: '', diff: '', sort: 'fit', tag: '' };
  function renderLibrary() {
    const grid = $('#library-grid'); if (!grid) return;
    const genreSel = $('#f-genre');
    [...new Set(GAMES.flatMap(g => g.genres))].sort().forEach(x => genreSel.appendChild(new Option(x, x)));
    const tagCounts = {};
    GAMES.forEach(g => g.tags.forEach(t => tagCounts[t] = (tagCounts[t] || 0) + 1));
    const cloud = $('#tag-cloud');
    Object.entries(tagCounts).sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([t, n]) => {
      const s = el('span', 'tag', `${esc(t)} <small>${n}</small>`);
      s.addEventListener('click', () => { state.tag = state.tag === t ? '' : t; cloud.querySelectorAll('.tag').forEach(x => x.classList.toggle('active', x.dataset.t === state.tag)); apply(); });
      s.dataset.t = t; cloud.appendChild(s);
    });
    $('#search').addEventListener('input', e => { state.q = e.target.value.toLowerCase(); apply(); });
    ['genre', 'mode', 'length', 'diff', 'sort'].forEach(k => $(`#f-${k}`).addEventListener('change', e => { state[k] = e.target.value; apply(); }));
    $('#clear-filters').addEventListener('click', () => {
      Object.assign(state, { q: '', genre: '', mode: '', length: '', diff: '', sort: 'fit', tag: '' });
      $('#search').value = ''; ['genre', 'mode', 'length', 'diff'].forEach(k => $(`#f-${k}`).value = ''); $('#f-sort').value = 'fit';
      cloud.querySelectorAll('.tag').forEach(x => x.classList.remove('active')); apply();
    });
    apply();
    function apply() {
      let list = GAMES.filter(g =>
        (!state.genre || g.genres.includes(state.genre)) &&
        (!state.mode || g.modes.includes(state.mode)) &&
        (!state.length || g.lengthBucket === state.length) &&
        (!state.diff || g.difficulty === +state.diff) &&
        (!state.tag || g.tags.includes(state.tag)) &&
        (!state.q || [g.title, g.developer, g.short, ...g.genres, ...g.tags].join(' ').toLowerCase().includes(state.q)));
      const sorters = {
        fit: (a, b) => b.fit - a.fit, critic: (a, b) => (b.critic || 0) - (a.critic || 0), year: (a, b) => b.year - a.year,
        yearAsc: (a, b) => a.year - b.year, name: (a, b) => a.title.localeCompare(b.title), length: (a, b) => a.hours - b.hours
      };
      list.sort(sorters[state.sort]);
      grid.innerHTML = '';
      $('#results-count').textContent = `${list.length} of ${GAMES.length} games`;
      if (!list.length) grid.appendChild(el('p', 'empty', 'No games match. Try loosening the filters.'));
      list.forEach(g => grid.appendChild(card(g)));
    }
  }

  /* ---------- CO-OP ---------- */
  function renderCoop() {
    const root = $('#coop-groups'); if (!root) return;
    const groups = [
      ['2 players — duo nights', g => g.playersMax === 2],
      ['3–4 players — the squad', g => g.playersMax >= 3 && g.playersMax <= 4],
      ['5–8 players — full lobby', g => g.playersMax >= 5 && g.playersMax <= 8],
      ['Massive — 9+ players / servers', g => g.playersMax >= 9]
    ];
    groups.forEach(([label, fn]) => {
      const list = GAMES.filter(g => g.modes.includes('coop') && fn(g)).sort((a, b) => b.fit - a.fit);
      if (!list.length) return;
      const wrap = el('div', 'coop-group');
      wrap.appendChild(el('h3', '', `${label} <span class="pill">${list.length} games</span>`));
      const grid = el('div', 'grid'); list.forEach(g => grid.appendChild(card(g))); wrap.appendChild(grid); root.appendChild(wrap);
    });
  }

  /* ---------- PVP ---------- */
  function renderPvp() {
    const grid = $('#pvp-grid'); if (!grid) return;
    GAMES.filter(g => g.modes.includes('pvp')).sort((a, b) => b.fit - a.fit).forEach(g => grid.appendChild(card(g)));
  }

  /* ---------- GENRE GUIDES ---------- */
  function renderGuides() {
    const root = $('#genre-guides'); if (!root || !C.genreGuides) return;
    C.genreGuides.forEach(gd => {
      const d = el('div', 'guide');
      d.innerHTML = `<h3>${gd.icon} ${esc(gd.name)}</h3><div class="fit-line">Fit for you: ${esc(gd.fit)}</div><p>${gd.body}</p><strong style="font-size:.85rem">Start with:</strong><ul>${gd.picks.map(id => byId[id] ? `<li><a data-id="${id}">${esc(byId[id].title)}</a> — ${esc(byId[id].short)}</li>` : '').join('')}</ul>`;
      d.querySelectorAll('a[data-id]').forEach(a => a.addEventListener('click', () => openModal(byId[a.dataset.id])));
      root.appendChild(d);
    });
  }

  /* ---------- ROADMAP ---------- */
  function renderRoadmap() {
    const root = $('#roadmap-list'); if (!root || !C.roadmap) return;
    C.roadmap.forEach(r => {
      const d = el('div', 'rm-item');
      d.innerHTML = `<div class="month">${esc(r.month)}</div><h4>${esc(r.title)}</h4><p>${r.why}</p><div class="rm-games tags">${r.games.map(id => byId[id] ? `<span class="tag genre" data-id="${id}">${esc(byId[id].title)}</span>` : '').join('')}</div>`;
      d.querySelectorAll('[data-id]').forEach(s => s.addEventListener('click', () => openModal(byId[s.dataset.id])));
      root.appendChild(d);
    });
  }

  /* ---------- HARDWARE + FAQ ---------- */
  function renderHardware() {
    const root = $('#hardware-tips'); if (!root || !C.hardware) return;
    C.hardware.forEach(h => root.appendChild(el('div', 'hcard', `<h3>${h.title}</h3>${h.body}`)));
  }
  function renderFaq() {
    const root = $('#faq-list'); if (!root || !C.faq) return;
    C.faq.forEach(f => root.appendChild(el('details', '', `<summary>${esc(f.q)}</summary><div>${f.a}</div>`)));
  }

  /* ---------- MODAL ---------- */
  const modal = $('#modal'), body = $('#modal-body');
  function openModal(g) {
    if (!g) return;
    const r = g.ratings || {};
    body.innerHTML = `
      <div class="m-banner" style="--c1:${g.colors?.[0] || '#3b3f6b'};--c2:${g.colors?.[1] || '#1f7a8c'}">
        <div><h2>${esc(g.title)}</h2><p class="sub">${g.year} · ${esc(g.developer)} · ${g.genres.map(esc).join(' / ')}</p></div>
      </div>
      <div class="m-body">
        <div class="m-scores">
          <div class="score-box"><b class="${fitClass(g.fit)}" style="color:var(--${fitClass(g.fit) === 'hi' ? 'good' : fitClass(g.fit) === 'mid' ? 'warn' : 'muted'})">${g.fit.toFixed(1)}</b><span>Fit score</span></div>
          ${g.critic ? `<div class="score-box"><b>${g.critic}</b><span>Critic</span></div>` : ''}
          <div class="score-box"><b>${hoursLabel(g)}</b><span>Length</span></div>
          <div class="score-box"><b>${g.difficulty}/5</b><span>Difficulty</span></div>
          ${g.players ? `<div class="score-box"><b>${esc(g.players)}</b><span>Players</span></div>` : ''}
          ${g.price ? `<div class="score-box"><b style="font-size:1.1rem">${esc(g.price)}</b><span>Price</span></div>` : ''}
        </div>
        <div class="verdict"><b>Verdict:</b> ${g.verdict}</div>
        <div class="m-section"><h4>What it is</h4><p>${g.description}</p></div>
        <div class="m-section"><h4>Why it fits you</h4><p>${g.why}</p></div>
        ${g.caveats ? `<div class="m-section"><h4>Caveats</h4><p>${g.caveats}</p></div>` : ''}
        ${g.tips ? `<div class="m-section"><h4>Tips before you start</h4><ul>${g.tips.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
        <div class="m-section"><h4>Priority breakdown</h4><div class="fit-bars">${AXES.map(a => `<div class="fit-bar"><span>${a[0].toUpperCase() + a.slice(1)}</span><div class="bar"><i style="width:${(r[a] ?? 5) * 10}%"></i></div><span>${r[a] ?? 5}/10</span></div>`).join('')}</div></div>
        <div class="m-section"><h4>Tags</h4><div class="tags">${g.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}${g.modes.map(m => `<span class="tag mode">${modeLabel(m, g)}</span>`).join('')}</div></div>
        ${g.similar?.length ? `<div class="m-section"><h4>If you like this, also try</h4><div class="similar">${g.similar.map(id => byId[id] ? `<span data-id="${id}">${esc(byId[id].title)}</span>` : `<span style="cursor:default">${esc(id)}</span>`).join('')}</div></div>` : ''}
        <div class="m-links">
          <a class="btn btn-small" target="_blank" rel="noopener" href="https://store.steampowered.com/search/?term=${encodeURIComponent(g.title)}">Steam ↗</a>
          <a class="btn btn-small" target="_blank" rel="noopener" href="https://howlongtobeat.com/?q=${encodeURIComponent(g.title)}">HowLongToBeat ↗</a>
          <a class="btn btn-small" target="_blank" rel="noopener" href="https://www.protondb.com/search?q=${encodeURIComponent(g.title)}">ProtonDB ↗</a>
          <a class="btn btn-small" target="_blank" rel="noopener" href="https://www.pcgamingwiki.com/w/index.php?search=${encodeURIComponent(g.title)}">PCGamingWiki ↗</a>
        </div>
      </div>`;
    body.querySelectorAll('.similar [data-id]').forEach(s => s.addEventListener('click', () => openModal(byId[s.dataset.id])));
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    $('.modal-dialog').scrollTop = 0;
    history.replaceState(null, '', '#g=' + g.id);
  }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; history.replaceState(null, '', location.pathname); }
  $('#modal-close').addEventListener('click', closeModal);
  $('#modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ---------- MISC UI ---------- */
  $('#nav-toggle').addEventListener('click', () => $('#main-nav').classList.toggle('open'));
  $('#main-nav').addEventListener('click', () => $('#main-nav').classList.remove('open'));
  const bt = $('#back-top');
  window.addEventListener('scroll', () => bt.classList.toggle('show', scrollY > 600));
  bt.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  renderStats(); renderTop(); renderMoods(); renderLibrary(); renderCoop(); renderPvp(); renderGuides(); renderRoadmap(); renderHardware(); renderFaq();
  const m = location.hash.match(/^#g=(.+)$/); if (m && byId[m[1]]) openModal(byId[m[1]]);
})();
