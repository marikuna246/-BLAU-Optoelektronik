/* Inline editor for the datasheet.
   Active only when the page is served by serve.ps1 (http://localhost) — never in the PDF render (file://).
   Everything it injects carries data-editor-ui and is stripped before saving. */
(function () {
  if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

  var EDITABLE = [
    '.cover-top .eyebrow', 'h1', '.lead', '.fact .v', '.fact .l', '.chip', '.ident .k', '.ident .v',
    '.rhead .p', '.rhead .t', '.sec-h h2', '.sec-h .de', '.sub-h', '.cap', '.tag',
    'table.spec td', '.company > div', '.meta b', '.meta span', '.web', '.contact .cols > div'
  ].join(',');

  var dirty = false, editing = true, lastRow = null, removed = null;

  // ---------- UI ----------
  var css = document.createElement('style');
  css.setAttribute('data-editor-ui', '');
  css.textContent = [
    '#ed-bar{position:fixed;top:0;left:0;right:0;z-index:9999;display:flex;align-items:center;gap:8px;flex-wrap:wrap;',
    ' padding:8px 14px;background:#0F1E33;color:#fff;font:500 13px/1.2 Barlow,Segoe UI,Arial,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,.25)}',
    '#ed-bar b{font-weight:600;margin-right:6px;letter-spacing:.02em}',
    '#ed-bar button,#ed-bar a{font:inherit;color:#fff;background:#24364F;border:1px solid #3A4E6B;border-radius:6px;padding:6px 11px;cursor:pointer;text-decoration:none}',
    '#ed-bar button:hover,#ed-bar a:hover{background:#30476A}',
    '#ed-bar button.pri{background:#E51837;border-color:#E51837}',
    '#ed-bar button.pri:hover{background:#C9112D}',
    '#ed-bar button[disabled]{opacity:.45;cursor:default}',
    '#ed-bar .sep{width:1px;height:22px;background:#3A4E6B;margin:0 2px}',
    '#ed-status{margin-left:auto;font-size:12.5px;color:#C9D4E3;max-width:46vw;text-align:right}',
    '#ed-status.warn{color:#FFC857}#ed-status.ok{color:#7EE2A8}#ed-status.err{color:#FF8A8A}',
    '#ed-report{position:fixed;top:52px;right:14px;z-index:9999;width:430px;max-height:60vh;overflow:auto;background:#fff;color:#0F1E33;',
    ' border:1px solid #D9E1EA;border-left:4px solid #FFC857;border-radius:8px;padding:12px 14px;font:13px/1.45 Barlow,Arial,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.18)}',
    '#ed-report h4{font-size:14px;margin:0 0 6px}#ed-report code{font-size:12px;background:#F2F5F9;padding:1px 4px;border-radius:3px}',
    '#ed-report li{margin:3px 0 3px 16px}#ed-report button{margin-top:8px}',
    'body.ed-on{padding-top:50px}',
    'body.ed-on [contenteditable]{outline:1px dashed transparent;outline-offset:2px;border-radius:2px;cursor:text;transition:outline-color .12s}',
    'body.ed-on [contenteditable]:hover{outline-color:#9FB2C8}',
    'body.ed-on [contenteditable]:focus{outline:2px solid #E51837;background:rgba(229,24,55,.04)}',
    'body.ed-on svg text{cursor:pointer}body.ed-on svg text:hover{fill:#E51837}',
    'body.ed-on tr.ed-row td{background:rgba(0,51,104,.035)}',
    '.page.ed-overflow{outline:3px solid #FFC857;outline-offset:-3px}',
    '#ed-pop{position:absolute;z-index:10000;display:flex;gap:4px;background:#fff;border:1px solid #9FB2C8;border-radius:6px;padding:4px;box-shadow:0 4px 14px rgba(0,0,0,.18)}',
    '#ed-pop input{font:13px Barlow,Arial;border:1px solid #D9E1EA;border-radius:4px;padding:4px 6px;min-width:200px}',
    '#ed-pop button{font:12px Barlow,Arial;border:0;border-radius:4px;padding:4px 8px;background:#003368;color:#fff;cursor:pointer}',
    '@media print{[data-editor-ui]{display:none!important}body.ed-on{padding-top:0}}'
  ].join('\n');
  document.head.appendChild(css);

  var bar = document.createElement('div');
  bar.id = 'ed-bar'; bar.setAttribute('data-editor-ui', '');
  bar.innerHTML =
    '<b>Datenblatt-Editor</b>' +
    '<button id="ed-toggle" title="Bearbeitungsmodus ein/aus">✎ Bearbeiten: an</button>' +
    '<span class="sep"></span>' +
    '<button id="ed-addrow" title="Fügt unter der zuletzt angeklickten Tabellenzeile eine neue Zeile ein">＋ Zeile</button>' +
    '<button id="ed-delrow" title="Löscht die zuletzt angeklickte Tabellenzeile">－ Zeile</button>' +
    '<span class="sep"></span>' +
    '<button id="ed-save" title="Strg+S">Speichern</button>' +
    '<button id="ed-savepdf" class="pri">Speichern &amp; PDF erzeugen</button>' +
    '<a id="ed-openpdf" href="FP-MVnano-25_Datasheet_Redesign.pdf" target="_blank">PDF öffnen</a>' +
    '<span id="ed-status">Klicke auf einen Text, um ihn zu ändern.</span>';
  document.body.insertBefore(bar, document.body.firstChild);

  var $ = function (id) { return document.getElementById(id); };
  function status(msg, cls) { var s = $('ed-status'); s.textContent = msg; s.className = cls || ''; }

  // ---------- editing ----------
  function setEditing(on) {
    editing = on;
    document.body.classList.toggle('ed-on', on);
    document.querySelectorAll(EDITABLE).forEach(function (el) {
      if (el.closest('[data-editor-ui]')) return;
      if (on) { el.setAttribute('contenteditable', 'true'); el.setAttribute('spellcheck', 'false'); }
      else { el.removeAttribute('contenteditable'); el.removeAttribute('spellcheck'); }
    });
    $('ed-toggle').textContent = on ? '✎ Bearbeiten: an' : '✎ Bearbeiten: aus';
    $('ed-addrow').disabled = $('ed-delrow').disabled = !on;
  }
  function markDirty() { if (!dirty) { dirty = true; status('Ungespeicherte Änderungen', 'warn'); } checkOverflow(); }

  document.addEventListener('input', function (e) { if (!e.target.closest('[data-editor-ui]')) markDirty(); });
  document.addEventListener('focusin', function (e) {
    var tr = e.target.closest && e.target.closest('table.spec tr');
    if (tr) { if (lastRow) lastRow.classList.remove('ed-row'); lastRow = tr; tr.classList.add('ed-row'); }
  });
  // paste as plain text only (keeps typography consistent)
  document.addEventListener('paste', function (e) {
    if (!e.target.closest || !e.target.closest('[contenteditable]')) return;
    e.preventDefault();
    var t = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, t);
  });

  // ---------- SVG labels (diagram texts) ----------
  var pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  document.addEventListener('click', function (e) {
    if (!editing) return;
    var t = e.target;
    if (!(t instanceof SVGElement) || (t.tagName !== 'text' && t.tagName !== 'tspan')) return;
    if (t.closest('#fans')) { status('Die Öffnungswinkel-Grafik wird automatisch erzeugt (siehe Skript am Ende der HTML-Datei).', 'warn'); return; }
    e.stopPropagation(); closePop();
    // a <text> with mixed children: edit only its own text nodes, keep styled <tspan>s
    var nodes = t.tagName === 'tspan' ? [t] : Array.prototype.filter.call(t.childNodes, function (n) { return n.nodeType === 3; });
    if (!nodes.length) return;
    var current = nodes.map(function (n) { return n.textContent; }).join('');
    var r = t.getBoundingClientRect();
    pop = document.createElement('div'); pop.id = 'ed-pop'; pop.setAttribute('data-editor-ui', '');
    pop.style.left = (r.left + window.scrollX) + 'px'; pop.style.top = (r.bottom + window.scrollY + 4) + 'px';
    pop.innerHTML = '<input><button>OK</button>';
    var inp = pop.querySelector('input'); inp.value = current;
    function apply() {
      if (inp.value !== current) {
        if (t.tagName === 'tspan') t.textContent = inp.value;
        else { nodes[0].textContent = inp.value; for (var i = 1; i < nodes.length; i++) nodes[i].remove(); }
        markDirty();
      }
      closePop();
    }
    pop.querySelector('button').onclick = apply;
    inp.onkeydown = function (k) { if (k.key === 'Enter') apply(); if (k.key === 'Escape') closePop(); };
    document.body.appendChild(pop); inp.focus(); inp.select();
  }, true);
  document.addEventListener('mousedown', function (e) { if (pop && !pop.contains(e.target)) closePop(); });

  // ---------- table rows ----------
  $('ed-addrow').onclick = function () {
    if (!lastRow) { status('Erst in eine Tabellenzeile klicken, dann „＋ Zeile".', 'warn'); return; }
    var n = lastRow.cloneNode(true);
    n.classList.remove('ed-row');
    var k = n.querySelector('td.k'), v = n.querySelector('td.v');
    if (k) k.innerHTML = '<span class="en">Neue Eigenschaft</span><span class="dl">Bezeichnung</span>';
    if (v) v.innerHTML = 'Wert';
    lastRow.parentNode.insertBefore(n, lastRow.nextSibling);
    setEditing(true); markDirty(); status('Zeile eingefügt – Texte anklicken und ausfüllen.', 'warn');
  };
  $('ed-delrow').onclick = function () {
    if (!lastRow) { status('Erst in die zu löschende Tabellenzeile klicken.', 'warn'); return; }
    removed = { row: lastRow, parent: lastRow.parentNode, next: lastRow.nextSibling };
    lastRow.remove(); lastRow = null; markDirty();
    var s = $('ed-status'); s.className = 'warn';
    s.innerHTML = 'Zeile gelöscht. <button id="ed-undo" data-editor-ui>Rückgängig</button>';
    $('ed-undo').onclick = function () {
      removed.parent.insertBefore(removed.row, removed.next); removed = null; checkOverflow();
      status('Zeile wiederhergestellt.', 'warn');
    };
  };

  // ---------- overflow guard (A4 pages clip content) ----------
  function checkOverflow() {
    var over = [];
    document.querySelectorAll('.page').forEach(function (p, i) {
      var limit = Infinity;
      p.querySelectorAll(':scope > .foot, :scope > .contact').forEach(function (f) { limit = Math.min(limit, f.getBoundingClientRect().top); });
      var bottom = 0;
      Array.prototype.forEach.call(p.children, function (c) {
        if (c.matches('.foot, .contact')) return;
        bottom = Math.max(bottom, c.getBoundingClientRect().bottom);
      });
      var bad = bottom > limit - 4;
      p.classList.toggle('ed-overflow', bad);
      if (bad) over.push(i + 1);
    });
    if (over.length) status('Achtung: Seite ' + over.join(', ') + ' ist zu voll – Inhalt würde abgeschnitten.', 'err');
    return over;
  }

  // ---------- save ----------
  function serialize() {
    var root = document.documentElement.cloneNode(true);
    root.querySelectorAll('[data-editor-ui]').forEach(function (n) { n.remove(); });
    root.querySelectorAll('[contenteditable],[spellcheck]').forEach(function (n) { n.removeAttribute('contenteditable'); n.removeAttribute('spellcheck'); });
    root.querySelectorAll('.ed-row').forEach(function (n) { n.classList.remove('ed-row'); if (!n.className) n.removeAttribute('class'); });
    root.querySelectorAll('.ed-overflow').forEach(function (n) { n.classList.remove('ed-overflow'); });
    var body = root.querySelector('body'); body.classList.remove('ed-on'); if (!body.className) body.removeAttribute('class');
    var fans = root.querySelector('#fans'); if (fans) fans.innerHTML = '';   // regenerated by script on load
    return '<!doctype html>\n' + root.outerHTML + '\n';
  }

  function showReport(r) {
    var old = $('ed-report'); if (old) old.remove();
    if (!r.problems) return;
    var box = document.createElement('div'); box.id = 'ed-report'; box.setAttribute('data-editor-ui', '');
    var items = r.details.map(function (d) { return '<li><code>' + d.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></li>'; }).join('');
    box.innerHTML = '<h4>Hinweis: ' + r.problems + ' Originalwert(e) nicht mehr unverändert enthalten</h4>' +
      '<div>Gespeichert wurde trotzdem. Bitte prüfen, ob die Änderung beabsichtigt ist:</div><ul>' + items + '</ul>' +
      '<div style="color:#6B7A8F;font-size:12px">Bei gewollten Änderungen die Referenzliste in <code>verify-content.ps1</code> anpassen. Eine Sicherung der vorherigen Version liegt im Ordner <code>backups</code>.</div>' +
      '<button onclick="this.parentNode.remove()">Schließen</button>';
    document.body.appendChild(box);
  }

  function save(withPdf) {
    closePop();
    var over = checkOverflow();
    status(withPdf ? 'Speichere und erzeuge PDF …' : 'Speichere …');
    $('ed-save').disabled = $('ed-savepdf').disabled = true;
    fetch('/api/save' + (withPdf ? '?pdf=1' : ''), { method: 'POST', headers: { 'Content-Type': 'text/html; charset=utf-8' }, body: serialize() })
      .then(function (res) { return res.json(); })
      .then(function (r) {
        if (!r.ok) throw new Error(r.error || 'Unbekannter Fehler');
        dirty = false;
        var msg = 'Gespeichert ' + new Date().toLocaleTimeString('de-DE') + '. ';
        msg += r.problems ? r.problems + ' Abweichung(en) zu Originalwerten.' : 'Alle ' + r.checked + ' Originalwerte unverändert.';
        if (withPdf) msg += r.pdf ? ' PDF aktualisiert.' : ' PDF-Erzeugung fehlgeschlagen!';
        if (over.length) msg += ' Seite ' + over.join(', ') + ' zu voll!';
        status(msg, (r.problems || over.length || (withPdf && !r.pdf)) ? 'warn' : 'ok');
        showReport(r);
        if (withPdf && r.pdf) $('ed-openpdf').href = 'FP-MVnano-25_Datasheet_Redesign.pdf?t=' + Date.now();
      })
      .catch(function (err) { status('Speichern fehlgeschlagen: ' + err.message, 'err'); })
      .then(function () { $('ed-save').disabled = $('ed-savepdf').disabled = false; });
  }

  $('ed-save').onclick = function () { save(false); };
  $('ed-savepdf').onclick = function () { save(true); };
  $('ed-toggle').onclick = function () { setEditing(!editing); };
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save(false); }
  });
  window.addEventListener('beforeunload', function (e) { if (dirty) { e.preventDefault(); e.returnValue = ''; } });

  setEditing(true);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(checkOverflow); else setTimeout(checkOverflow, 800);
})();
