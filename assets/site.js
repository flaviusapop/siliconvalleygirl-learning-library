/* Progressive enhancement: notes themselves never depend on JavaScript. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const all = (s, root = document) => [...root.querySelectorAll(s)];
  const fold = value => String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const flatten = value => value && typeof value === 'object' ? Object.values(value).map(flatten).join(' ') : String(value ?? '');
  const revealHash = () => {
    const id = location.hash.slice(1);
    const card = document.getElementById(id);
    if (card?.classList.contains('video-card')) {
      card.hidden = false;
      $('details', card).open = true;
      card.scrollIntoView({block: 'start'});
    }
  };
  const data = $('#library-data');
  if (data) {
    const records = JSON.parse(data.textContent);
    const cards = all('.video-card');
    const byId = new Map(records.map(record => [record.id, {...record, search: fold(flatten(record))}]));
    const key = document.body.dataset.storageKey;
    let saved = {}, storageWorks = true;
    const storageWarning = () => {
      storageWorks = false;
      $('#storage-status').textContent = 'Browser storage is unavailable. Read marks and bookmarks work for this page session only and will be lost on reload.';
    };
    try {
      const parsed = JSON.parse(localStorage.getItem(key) || '{}');
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) saved = parsed;
      localStorage.setItem(key, JSON.stringify(saved));
    } catch (_) { storageWarning(); }
    const state = id => saved[id] && typeof saved[id] === 'object' ? saved[id] : {};
    const paintState = card => {
      const current = state(card.dataset.id);
      const read = $('[data-action=read]', card), bookmark = $('[data-action=bookmark]', card);
      read.setAttribute('aria-pressed', String(!!current.read));
      read.textContent = current.read ? 'Mark as unread' : 'Mark as read';
      bookmark.setAttribute('aria-pressed', String(!!current.bookmarked));
      bookmark.textContent = current.bookmarked ? 'Remove bookmark' : 'Bookmark';
      $('.card-state', card).textContent = [current.read ? 'Read' : '', current.bookmarked ? 'Bookmarked' : ''].filter(Boolean).join(' · ');
    };
    const apply = () => {
      const query = fold($('#search').value.trim());
      const topic = $('#topic').value, progress = $('#progress').value;
      let count = 0;
      const sorted = [...cards].sort((a, b) => {
        const av = byId.get(a.dataset.id), bv = byId.get(b.dataset.id);
        const cmp = av.upload_date.localeCompare(bv.upload_date) || bv.rank - av.rank;
        return $('#sort').value === 'oldest' ? cmp : -cmp;
      });
      for (const card of sorted) {
        const record = byId.get(card.dataset.id), current = state(record.id);
        const matchesProgress = progress === 'all' || (progress === 'read' && current.read) || (progress === 'unread' && !current.read) || (progress === 'bookmarked' && current.bookmarked);
        const matches = query.split(/\s+/).every(term => record.search.includes(term)) && (!topic || record.topics.includes(topic)) && matchesProgress;
        card.hidden = !matches;
        if (matches) count++;
        $('#library').append(card);
      }
      $('#result-count').textContent = `${count} of ${cards.length} notes`;
      $('#empty-state').hidden = count !== 0;
    };
    cards.forEach(card => {
      paintState(card);
      all('[data-action]', card).forEach(button => button.addEventListener('click', () => {
        const id = card.dataset.id;
        const field = button.dataset.action === 'read' ? 'read' : 'bookmarked';
        saved[id] = {...state(id), [field]: !state(id)[field]};
        if (storageWorks) {
          try { localStorage.setItem(key, JSON.stringify(saved)); } catch (_) { storageWarning(); }
        }
        paintState(card);
        apply();
      }));
    });
    const clear = () => {
      $('#search').value = ''; $('#topic').value = ''; $('#sort').value = 'latest'; $('#progress').value = 'all';
      apply();
    };
    $('#search').addEventListener('input', apply);
    ['topic', 'sort', 'progress'].forEach(id => document.getElementById(id).addEventListener('change', apply));
    $('#clear-filters').addEventListener('click', clear);
    $('[data-clear]').addEventListener('click', clear);
    all('[data-enhance]').forEach(element => { element.hidden = false; });
    apply();
    revealHash();
    window.addEventListener('hashchange', () => { clear(); revealHash(); });
  }
  if ($('#wiki-search')) {
    const entries = all('.wiki-entry');
    const search = () => {
      const terms = fold($('#wiki-search').value.trim()).split(/\s+/);
      let count = 0;
      entries.forEach(entry => {
        entry.hidden = !terms.every(term => fold(entry.dataset.search).includes(term));
        if (!entry.hidden) count++;
      });
      $('#wiki-result-count').textContent = `${count} of ${entries.length} notes`;
      $('#wiki-empty').hidden = count !== 0;
    };
    $('#wiki-search').addEventListener('input', search);
    $('#wiki-clear').addEventListener('click', () => { $('#wiki-search').value = ''; search(); });
    all('[data-enhance]').forEach(element => { element.hidden = false; });
    search();
  }
})();
