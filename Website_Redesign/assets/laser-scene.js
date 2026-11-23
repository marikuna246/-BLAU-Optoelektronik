/* BLAU Optoelektronik – Live-Laseranimation im Hero
   Lichtschnittverfahren: Ein Linienlaser projiziert seine Linie auf ein Förderband.
   Die Linie folgt der Kontur der Teile, dahinter entsteht eine 3D-Punktwolke.
   Reines Canvas 2D, keine Bibliotheken. Pausiert automatisch außerhalb des Sichtbereichs. */
(function () {
  "use strict";
  var EN = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0; // eslint-disable-line no-unused-vars -- Szene enthält keine sichtbaren Texte
  var canvas = document.querySelector(".laser-scene");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var hero = canvas.parentElement;

  var W = 0, H = 0, DPR = 1, mobile = false;
  var cx = 0, horizon = 0, f = 1;
  var camX = 0, camXT = 0, camLift = 0, camLiftT = 0;
  var CAM_Y = 2.2, Z_NEAR = 2.3, Z_FAR = 17, Z_LASER = 6.2, EMIT_Y = 3.2;
  var X_MAX = 2.7, SPEED = 0.85;
  var scroll = 0, last = 0, running = false, visible = true, raf = 0;

  /* ---------- Szene: Teile auf dem Förderband ---------- */
  function rand(k) { var x = Math.sin(k * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  function smooth(e0, e1, x) { var t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); }
  var PITCH = 3.1;
  function height(x, s) {
    var h = 0;
    // Seitliche Führungsschienen
    var ax = Math.abs(x);
    if (ax > 2.45) h = 0.16 * smooth(2.45, 2.55, ax);
    var k = Math.floor(s / PITCH), local = s - k * PITCH - PITCH * 0.5;
    var type = Math.floor(rand(k) * 4), off = (rand(k + 9.3) - 0.5) * 1.6;
    var dx = x - off, dz = local;
    var inZ;
    if (type === 0) { // Quader mit weichen Kanten
      inZ = smooth(0.75, 0.6, Math.abs(dz)) ;
      h = Math.max(h, 0.5 * inZ * smooth(0.8, 0.65, Math.abs(dx)));
    } else if (type === 1) { // liegender Zylinder
      var r = 0.6; inZ = smooth(0.9, 0.75, Math.abs(dz));
      if (Math.abs(dx) < r) h = Math.max(h, inZ * Math.sqrt(1 - (dx / r) * (dx / r)) * 0.6);
    } else if (type === 2) { // Stufenteil
      inZ = smooth(0.7, 0.55, Math.abs(dz));
      var step = dx < -0.2 ? 0.25 : 0.55;
      h = Math.max(h, inZ * step * smooth(0.95, 0.8, Math.abs(dx + 0.1)));
    } else { // zwei Kuppeln
      inZ = smooth(0.6, 0.35, Math.abs(dz));
      var b1 = Math.max(0, 1 - ((dx + 0.5) * (dx + 0.5)) / 0.16), b2 = Math.max(0, 1 - ((dx - 0.5) * (dx - 0.5)) / 0.16);
      h = Math.max(h, inZ * 0.38 * (Math.sqrt(b1) + Math.sqrt(b2)));
    }
    return h;
  }

  /* ---------- Projektion ---------- */
  function px(x, z) { return cx + (x - camX) * f / z; }
  function py(y, z) { return horizon + (CAM_Y + camLift - y) * f / z; }

  /* ---------- Punktwolke (Ringpuffer) ---------- */
  var MAXP = 7000, P = new Float32Array(MAXP * 3), pHead = 0, pCount = 0, sampleAcc = 0;
  function addProfile() {
    var s = Z_LASER + scroll;
    for (var x = -X_MAX + 0.02; x < X_MAX; x += 0.085) {
      var i = pHead * 3;
      P[i] = x; P[i + 1] = height(x, s); P[i + 2] = s;
      pHead = (pHead + 1) % MAXP; if (pCount < MAXP) pCount++;
    }
  }

  /* ---------- Funken im Laserfächer ---------- */
  var sparks = [];
  for (var i = 0; i < 26; i++) sparks.push({ u: Math.random(), v: Math.random(), p: Math.random() * 6.28, s: 0.6 + Math.random() * 1.4 });

  /* ---------- Größe ---------- */
  function resize() {
    var r = hero.getBoundingClientRect();
    W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
    DPR = Math.min(window.devicePixelRatio || 1, 1.75);
    canvas.width = Math.round(W * DPR); canvas.height = Math.round(H * DPR);
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    mobile = W < 1024;
    /* Laserlinie: Desktop auf ~55 % Höhe rechts der Mitte, Smartphone im unteren Bereich */
    var lineY;
    if (mobile) {
      /* eigene Bühne unter den Buttons: Linie knapp über der Faktenleiste */
      var facts = hero.querySelector(".hero-facts");
      var factsTop = facts ? facts.getBoundingClientRect().top - r.top : H * 0.8;
      cx = W * 0.5; f = Math.min(W * 0.9, 330); lineY = factsTop - 46;
    }
    else { var vh = Math.min(H, window.innerHeight || H); cx = W * 0.62; f = Math.min(vh * 0.66, W * 0.66); lineY = vh * 0.5; }
    horizon = lineY - CAM_Y * f / Z_LASER;
  }

  /* ---------- Zeichnen ---------- */
  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    camX += (camXT - camX) * 0.04; camLift += (camLiftT - camLift) * 0.04;

    // Gitter des Förderbands (Längslinien)
    ctx.lineWidth = 1;
    for (var gx = -2.4; gx <= 2.401; gx += 0.4) {
      ctx.beginPath();
      for (var z = Z_FAR; z >= Z_NEAR; z -= 0.22) {
        var y = height(gx, z + scroll), X = px(gx, z), Y = py(y, z);
        if (z === Z_FAR) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      }
      var g = ctx.createLinearGradient(0, py(0, Z_FAR), 0, py(0, Z_NEAR));
      g.addColorStop(0, "rgba(120,170,240,0)"); g.addColorStop(1, "rgba(120,170,240,.22)");
      ctx.strokeStyle = g; ctx.stroke();
    }
    // Querlinien, die sich mit dem Band bewegen
    var first = Math.ceil((Z_NEAR + scroll) / 0.5) * 0.5;
    for (var s = first; s - scroll < Z_FAR; s += 0.5) {
      var zz = s - scroll, a = 0.2 * (1 - (zz - Z_NEAR) / (Z_FAR - Z_NEAR));
      if (a <= 0.005) continue;
      ctx.beginPath();
      for (var x = -2.7; x <= 2.701; x += 0.1) {
        var X2 = px(x, zz), Y2 = py(height(x, s), zz);
        if (x === -2.7) ctx.moveTo(X2, Y2); else ctx.lineTo(X2, Y2);
      }
      ctx.strokeStyle = "rgba(120,170,240," + a.toFixed(3) + ")"; ctx.stroke();
    }

    // Punktwolke (bereits gescannte Profile kommen auf den Betrachter zu)
    ctx.globalCompositeOperation = "lighter";
    for (var n = 0; n < pCount; n++) {
      var j = n * 3, zp = P[j + 2] - scroll;
      if (zp < Z_NEAR || zp > Z_LASER) continue;
      var age = (Z_LASER - zp) / (Z_LASER - Z_NEAR);
      var hy = P[j + 1];
      var al = (1 - age) * (0.35 + hy * 1.1);
      if (al <= 0.02) continue;
      var sz = Math.max(1, 2.2 * f / zp / 260);
      ctx.fillStyle = "rgba(" + (90 + hy * 200 | 0) + "," + (180 + hy * 100 | 0) + ",255," + Math.min(0.9, al).toFixed(3) + ")";
      ctx.fillRect(px(P[j], zp) - sz / 2, py(hy, zp) - sz / 2, sz, sz);
    }

    // Laserprofil an der Laserebene
    var ex = px(0, Z_LASER), ey = py(EMIT_Y, Z_LASER);
    var pts = [];
    for (var lx = -X_MAX; lx <= X_MAX + 0.001; lx += 0.035) pts.push([px(lx, Z_LASER), py(height(lx, Z_LASER + scroll) + 0.004, Z_LASER)]);

    // Laserfächer
    var fan = ctx.createLinearGradient(0, ey, 0, pts[0][1]);
    fan.addColorStop(0, "rgba(0,205,218,.30)"); fan.addColorStop(1, "rgba(0,205,218,.05)");
    ctx.fillStyle = fan;
    ctx.beginPath(); ctx.moveTo(ex, ey);
    for (var q = 0; q < pts.length; q++) ctx.lineTo(pts[q][0], pts[q][1]);
    ctx.closePath(); ctx.fill();

    // Funken im Fächer
    for (var k = 0; k < sparks.length; k++) {
      var sp = sparks[k]; sp.v += 0.004 * sp.s; if (sp.v > 1) { sp.v = 0; sp.u = Math.random(); }
      var tgt = pts[Math.floor(sp.u * (pts.length - 1))];
      var sx = ex + (tgt[0] - ex) * sp.v, sy = ey + (tgt[1] - ey) * sp.v;
      var tw = 0.35 + 0.35 * Math.sin(t * 0.004 + sp.p);
      ctx.fillStyle = "rgba(255,150,165," + tw.toFixed(3) + ")";
      ctx.fillRect(sx, sy, 1.6, 1.6);
    }

    // Laserlinie mit Glühen (mehrere Striche)
    var strokes = [[14, "rgba(0,166,193,.10)"], [7, "rgba(0,205,218,.28)"], [3, "rgba(0,205,218,.95)"], [1.2, "rgba(220,250,252,.95)"]];
    for (var w = 0; w < strokes.length; w++) {
      ctx.lineWidth = strokes[w][0]; ctx.strokeStyle = strokes[w][1]; ctx.lineJoin = "round"; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
      for (var m = 1; m < pts.length; m++) ctx.lineTo(pts[m][0], pts[m][1]);
      ctx.stroke();
    }

    // Lasermodul (stilisiert) und Austrittsöffnung
    ctx.globalCompositeOperation = "source-over";
    var mw = Math.max(16, f / Z_LASER * 0.42), mh = mw * 3.4;
    var body = ctx.createLinearGradient(ex - mw / 2, 0, ex + mw / 2, 0);
    body.addColorStop(0, "#0b4a8f"); body.addColorStop(0.35, "#2d8de8"); body.addColorStop(0.55, "#5fb0ff"); body.addColorStop(1, "#0a3d78");
    ctx.fillStyle = body; roundRect(ex - mw / 2, ey - mh - mw * 0.55, mw, mh, mw * 0.18); ctx.fill();
    var cap = ctx.createLinearGradient(ex - mw / 2, 0, ex + mw / 2, 0);
    cap.addColorStop(0, "#050608"); cap.addColorStop(0.5, "#3a3f47"); cap.addColorStop(1, "#050608");
    ctx.fillStyle = cap; roundRect(ex - mw * 0.55, ey - mw * 0.62, mw * 1.1, mw * 0.62, mw * 0.12); ctx.fill();
    ctx.globalCompositeOperation = "lighter";
    var glow = ctx.createRadialGradient(ex, ey, 0, ex, ey, mw * 1.4);
    glow.addColorStop(0, "rgba(120,235,240,.95)"); glow.addColorStop(0.25, "rgba(0,205,218,.45)"); glow.addColorStop(1, "rgba(0,205,218,0)");
    ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(ex, ey, mw * 1.4, 0, 6.2832); ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  }
  function roundRect(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h); ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r); ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
  }

  /* ---------- Schleife ---------- */
  function frame(t) {
    raf = 0;
    if (!running) return;
    var dt = last ? Math.min(0.05, (t - last) / 1000) : 0.016; last = t;
    scroll += SPEED * dt;
    sampleAcc += dt; if (sampleAcc > 0.045) { sampleAcc = 0; addProfile(); }
    draw(t);
    raf = requestAnimationFrame(frame);
  }
  function start() { if (running || !visible || document.hidden) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

  // Vorlauf, damit die Punktwolke sofort sichtbar ist
  resize();
  for (var pre = 0; pre < 90; pre++) { scroll += SPEED * 0.045; addProfile(); }
  draw(0);
  canvas.classList.add("is-ready");

  /* Testhilfe: Szene um n Sekunden vorspulen und zeichnen */
  canvas.advance = function (sec) { for (var a = 0; a < sec / 0.045; a++) { scroll += SPEED * 0.045; addProfile(); } draw(performance.now()); };
  window.addEventListener("resize", function () { resize(); draw(performance.now()); });
  hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect();
    camXT = ((e.clientX - r.left) / r.width - 0.5) * 0.9;
    camLiftT = ((e.clientY - r.top) / r.height - 0.5) * -0.5;
  });
  hero.addEventListener("pointerleave", function () { camXT = 0; camLiftT = 0; });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); else stop(); }, { threshold: 0 }).observe(hero);
  }
  start();
})();
