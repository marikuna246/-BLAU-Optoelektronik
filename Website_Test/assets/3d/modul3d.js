/* 3D-Modell des konfigurierten Lasermoduls (Konfigurator, letzter Schritt).
   Vereinfachtes Modell aus den Konfigurationsdaten: Serie (Maße), Gehäuse (ST / 2H / OH), Fokus (F / FIX),
   Wellenlänge (Strahlfarbe) und Fächerwinkel. Drehbar mit Maus/Finger; Export als STL (mm) und PNG.
   Nutzung: BlauModul3D.mount(element, { series, housing, focus, wl, fan, base }) -> Promise<{ png(), stl(name), dispose() }> */
(function () {
  var loaded = null;
  function load(src) { return new Promise(function (ok, fail) { var s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = fail; document.head.appendChild(s); }); }
  function libs(base) {
    if (window.THREE && THREE.OrbitControls) return Promise.resolve();
    if (!loaded) loaded = load(base + "three.min.js").then(function () { return load(base + "OrbitControls.js"); });
    return loaded;
  }
  // Maße [Durchmesser mm, Länge mm]; m12 = Steckeranschluss; box = Rechteckgehäuse
  var DIM = {
    mvnano: { d: 11.5, l: 54 }, mvpico: { d: 10, l: 50 }, mvfemto: { d: 8, l: 40 }, mvmicro: { d: 19, l: 65, m12: true },
    mv18: { d: 18, l: 65, m12: true }, mv12: { d: 12, l: 55 }, mvsquare: { box: [15, 15, 65] }, mvpulse: { d: 12, l: 60 },
    mvpulsehp: { d: 16, l: 70 }, mvgoldhp: { d: 48, l: 146 }, mvbasic: { d: 11.5, l: 54 },
  };
  var WL = { 405: 0x7b2cff, 445: 0x2a3cff, 450: 0x1f4dff, 520: 0x19b84a, 525: 0x19b84a, 532: 0x27c93f, 640: 0xff3b1f, 660: 0xe3121b, 685: 0xb00d1c };

  function build(cfg) {
    var T = THREE, root = new T.Group(), body = new T.Group(); root.add(body);
    function mat(hex, metal, rough) { var m = new T.MeshStandardMaterial({ color: hex, metalness: metal, roughness: rough, envMapIntensity: .85 }); m.color.convertSRGBToLinear(); return m; }
    var M = { blue: mat(0x0c46c8, .35, .32), black: mat(0x0a0a0c, .15, .5), silver: mat(0xc6ccd3, 1, .25), groove: mat(0x0e2c5c, .4, .5), cable: mat(0xf0f1f3, 0, .5),
      glass: new T.MeshPhysicalMaterial({ color: 0xe6f0f8, roughness: .03, transparent: true, opacity: .45, clearcoat: 1 }), bore: new T.MeshStandardMaterial({ color: 0x050506, roughness: .9 }) };
    // alle Teile entlang +X aufgebaut (Strahl zeigt nach +X); 1 Einheit = 1 mm
    function cyl(r, x0, x1, m, seg) { var g = new T.CylinderGeometry(r, r, x1 - x0, seg || 96); g.rotateZ(-Math.PI / 2); var me = new T.Mesh(g, m); me.position.x = (x0 + x1) / 2; body.add(me); return me; }
    function ring(r, x, w, m) { var g = new T.TorusGeometry(r, w, 10, 96); g.rotateY(Math.PI / 2); var me = new T.Mesh(g, m); me.position.x = x; body.add(me); }
    function front(r, x0, x1) {
      cyl(r * 1.01, x0, x1, M.black);
      var lr = r * .62; var g = new T.CylinderGeometry(lr, lr, .6, 48); g.rotateZ(-Math.PI / 2); var b = new T.Mesh(g, M.bore); b.position.x = x1 + .05; body.add(b);
      var l = new T.Mesh(new T.SphereGeometry(lr * 1.5, 32, 12, 0, Math.PI * 2, 0, .55), M.glass); l.rotation.z = -Math.PI / 2; l.position.x = x1 - lr * 1.5 * Math.cos(.55) + .4; body.add(l);
      ring(lr * .95, x1 + .1, .35, M.silver);
      if (cfg.focus !== "FIX") for (var k = 0; k < 7; k++) ring(r * 1.02, x0 + (x1 - x0) * (.18 + k * .1), .18, M.silver); // Rändel = Fokus einstellbar
    }
    function cable(x, y, r, len, bend) {
      var pts = [new T.Vector3(x, y, 0), new T.Vector3(x - len * .35, y, 0), new T.Vector3(x - len * .7, y - len * .12 * bend, len * .08 * bend), new T.Vector3(x - len, y - len * .3 * bend, len * .2 * bend)];
      body.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts), 60, r, 14, false), M.cable));
    }
    function m12(x) { cyl(5, x - 9, x, M.silver); for (var k = 0; k < 6; k++) ring(5.1, x - 1.5 - k * 1.2, .25, M.silver); var g = new T.CylinderGeometry(7, 7, 3, 6); g.rotateZ(-Math.PI / 2); var n = new T.Mesh(g, M.silver); n.position.x = x - 1.5; body.add(n); }

    var D = DIM[cfg.series] || DIM.mvnano, frontX;
    if (D.box) {
      var w = D.box[0], hgt = D.box[1], len = D.box[2];
      var bx = new T.Mesh(new T.BoxGeometry(len - 10, hgt, w), M.blue); bx.position.x = (len - 10) / 2; body.add(bx);
      var cp = new T.Mesh(new T.BoxGeometry(10, hgt * 1.01, w * 1.01), M.black); cp.position.x = len - 5; body.add(cp);
      var lg = new T.CylinderGeometry(4, 4, .6, 40); lg.rotateZ(-Math.PI / 2); var lm = new T.Mesh(lg, M.glass); lm.position.x = len + .2; body.add(lm);
      frontX = len + .3; cable(0, 0, 1.7, 45, 1);
    } else {
      var r = D.d / 2, L = D.l, cap = Math.min(L * .16, 11);
      if (cfg.housing === "2H" || cfg.housing === "OH") {
        // getrennter Optikkopf (kurz) + bei 2H separates Elektronikgehäuse
        var head = L * .42; cyl(r, 0, head - cap, M.blue); front(r, head - cap, head); frontX = head + .3;
        cable(0, 0, Math.max(1.2, r * .22), 16, .6);
        if (cfg.housing === "2H") {
          var eg = new T.CylinderGeometry(r, r, L * .55, 96); eg.rotateZ(-Math.PI / 2); var e = new T.Mesh(eg, M.blue); e.position.set(-16 - L * .275, -r * 1.6, r * .8); body.add(e);
          var cp2 = [new T.Vector3(-16 - L * .55, -r * 1.6, r * .8), new T.Vector3(-16 - L * .55 - 12, -r * 1.6, r * .8), new T.Vector3(-16 - L * .55 - 22, -r * 2.4, r * 1.6)];
          body.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(cp2), 30, Math.max(1.2, r * .22), 12, false), M.cable));
        }
      } else {
        cyl(r, 0, L - cap, M.blue); ring(r * 1.001, (L - cap) * .72, .2, M.groove); front(r, L - cap, L); frontX = L + .3;
        if (D.m12) m12(0); else cable(0, 0, Math.max(1.2, r * .25), Math.max(40, L * .8), 1);
      }
    }
    // Laserfächer in Wellenlängenfarbe (IR unsichtbar: grau-transparent)
    var col = WL[cfg.wl] || (cfg.wl > 700 ? 0x9aa4b0 : 0x00cdda), fan = Math.max(1, Math.min(90, cfg.fan || 45)) * Math.PI / 180, FL = Math.max(30, frontX * .8);
    var shape = new T.Shape(); shape.moveTo(0, 0); shape.lineTo(FL, -Math.tan(fan / 2) * FL); shape.lineTo(FL, Math.tan(fan / 2) * FL); shape.closePath();
    var fanMesh = new T.Mesh(new T.ShapeGeometry(shape), new T.MeshBasicMaterial({ color: col, transparent: true, opacity: cfg.wl > 700 ? .12 : .22, side: T.DoubleSide, depthWrite: false }));
    fanMesh.position.x = frontX; fanMesh.userData.beam = true; root.add(fanMesh);
    var edge = new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(frontX + FL, -Math.tan(fan / 2) * FL, 0), new T.Vector3(frontX + FL, Math.tan(fan / 2) * FL, 0)]), new T.LineBasicMaterial({ color: col }));
    edge.userData.beam = true; root.add(edge);
    return root;
  }

  function mount(el, cfg) {
    var base = cfg.base || "assets/3d/";
    return libs(base).then(function () {
      var T = THREE, w = el.clientWidth || 600, h = el.clientHeight || 380;
      var renderer = new T.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.setSize(w, h); renderer.outputEncoding = T.sRGBEncoding; renderer.toneMapping = T.ACESFilmicToneMapping;
      el.innerHTML = ""; el.appendChild(renderer.domElement);
      var scene = new T.Scene();
      (function () { var c = document.createElement("canvas"); c.width = 512; c.height = 256; var g = c.getContext("2d"), s = g.createLinearGradient(0, 0, 0, 256); s.addColorStop(0, "#fff"); s.addColorStop(.5, "#c9d0d8"); s.addColorStop(1, "#7d8793"); g.fillStyle = s; g.fillRect(0, 0, 512, 256); g.fillStyle = "#fff"; g.fillRect(60, 50, 100, 80); g.fillRect(310, 40, 130, 60);
        var t = new T.CanvasTexture(c); t.mapping = T.EquirectangularReflectionMapping; t.encoding = T.sRGBEncoding; scene.environment = new T.PMREMGenerator(renderer).fromEquirectangular(t).texture; })();
      scene.add(new T.HemisphereLight(0xffffff, 0x9aa4b0, .7)); var k = new T.DirectionalLight(0xffffff, 1.4); k.position.set(60, 120, 90); scene.add(k);
      var model = build(cfg); scene.add(model);
      var box = new T.Box3().setFromObject(model), size = box.getSize(new T.Vector3()), ctr = box.getCenter(new T.Vector3());
      model.position.sub(ctr);
      var cam = new T.PerspectiveCamera(30, w / h, 1, 5000), dist = Math.max(size.x, size.y * 1.8, size.z * 1.8) * 1.25;
      if (w / h < 1.6) dist *= 1.6 / (w / h); // schmale Ansicht (Handy): weiter weg, damit alles hineinpasst
      cam.position.set(dist * .35, dist * .45, dist); cam.lookAt(0, 0, 0);
      var ctl = new T.OrbitControls(cam, renderer.domElement); ctl.enableDamping = true; ctl.enablePan = false; ctl.autoRotate = true; ctl.autoRotateSpeed = 1.2;
      renderer.domElement.addEventListener("pointerdown", function () { ctl.autoRotate = false; });
      var alive = true;
      (function loop() { if (!alive) return; ctl.update(); renderer.render(scene, cam); requestAnimationFrame(loop); })();
      function resize() { var W = el.clientWidth, H = el.clientHeight; if (!W || !H) return; renderer.setSize(W, H); cam.aspect = W / H; cam.updateProjectionMatrix(); }
      addEventListener("resize", resize);
      return {
        png: function () { renderer.render(scene, cam); return renderer.domElement.toDataURL("image/png"); },
        stl: function (name) { // Binär-STL in Millimetern (kompakt), ohne Laserstrahl
          var tris = [], v = [new T.Vector3(), new T.Vector3(), new T.Vector3()], n = new T.Vector3(), a = new T.Vector3(), b = new T.Vector3();
          model.updateMatrixWorld(true);
          model.traverse(function (o) {
            if (!o.isMesh || o.userData.beam) return;
            var g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry, p = g.attributes.position;
            for (var i = 0; i < p.count; i += 3) {
              for (var j = 0; j < 3; j++) v[j].fromBufferAttribute(p, i + j).applyMatrix4(o.matrixWorld);
              a.subVectors(v[1], v[0]); b.subVectors(v[2], v[0]); n.crossVectors(a, b).normalize();
              tris.push([n.x, n.y, n.z, v[0].x, v[0].y, v[0].z, v[1].x, v[1].y, v[1].z, v[2].x, v[2].y, v[2].z]);
            }
          });
          var buf = new ArrayBuffer(84 + tris.length * 50), dv = new DataView(buf), head = ("BLAU Optoelektronik " + name).slice(0, 80);
          for (var c = 0; c < head.length; c++) dv.setUint8(c, head.charCodeAt(c) & 127);
          dv.setUint32(80, tris.length, true);
          tris.forEach(function (t, k) { var off = 84 + k * 50; for (var q = 0; q < 12; q++) dv.setFloat32(off + q * 4, t[q], true); dv.setUint16(off + 48, 0, true); });
          return new Blob([buf], { type: "model/stl" });
        },
        dispose: function () { alive = false; removeEventListener("resize", resize); renderer.dispose(); },
      };
    });
  }
  window.BlauModul3D = { mount: mount };
})();
