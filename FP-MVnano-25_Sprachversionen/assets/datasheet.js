/* Shared data tables for the EN and DE datasheets (language-neutral values only).
   Sources: LASER COMPONENTS "MVnano Series (Edition 2025)" datasheet, p.3 (focus factors) and p.5 (modulation combinations). */
(function () {
  // ---- Focus option conversion factors: [λ nm, P_out mW, Δλ nm, DLSE LT, DOF, DLE LT, DOF, DL LT, DOF, STD LT, DOF, TS1 LT, DOF, TS2 LT, DOF]
  var FOCUS = [
    ['405', '1 – 30',   '±5',  '0.27','0.12','0.35','0.20','0.49','0.39','0.71','0.81','1.04','1.76','1.53','3.80'],
    ['405', '30 – 100', '±6',  '0.27','0.12','0.35','0.20','0.49','0.39','0.71','0.81','1.04','1.76','1.53','3.80'],
    ['450', '1 – 75',   '±10', '0.25','0.10','0.33','0.16','0.45','0.30','0.69','0.69','1.49','3.25','2.20','7.06'],
    ['520', '1 – 10',   '±10', '0.29','0.11','0.39','0.19','0.53','0.36','0.78','0.78','1.71','3.69','2.55','8.23'],
    ['520', '11 – 40',  '±10', '0.29','0.11','0.39','0.19','0.53','0.36','0.78','0.78','1.71','3.69','2.55','8.23'],
    ['640', '1 – 20',   '±5',  '0.39','0.16','0.51','0.27','0.69','0.48','1.02','1.07','1.65','2.79','2.43','6.08'],
    ['640', '21 – 30',  '±5',  '0.39','0.16','0.51','0.27','0.69','0.48','1.02','1.07','1.47','2.23','2.18','4.87'],
    ['640', '31 – 100', '±5',  '0.47','0.23','0.59','0.36','0.80','0.67','1.20','1.47','1.65','2.79','2.43','6.08'],
    ['660', '1 – 30',   '±5',  '0.39','0.15','0.49','0.24','0.67','0.44','1.00','1.00','1.51','2.27','2.25','5.07'],
    ['660', '31 – 100', '±5',  '0.51','0.26','0.65','0.42','0.88','0.78','1.31','1.72','1.51','2.27','2.25','5.07'],
    ['685', '1 – 40',   '±10', '0.45','0.20','0.57','0.31','0.76','0.56','1.14','1.24','1.43','1.97','2.12','4.31'],
    ['785', '1 – 10',   '±10', '0.35','0.10','0.45','0.17','0.61','0.31','0.90','0.68','1.65','2.28','2.43','4.96'],
    ['785', '11 – 100', '±10', '0.65','0.35','0.82','0.57','1.12','1.05','1.65','2.28','2.00','3.36','2.98','7.45'],
    ['830', '1 – 40',   '±10', '0.69','0.37','0.88','0.62','1.22','1.17','1.78','2.53','2.29','4.18','3.39','9.13'],
    ['845', '1 – 40',   '±10', '0.35','0.10','0.45','0.16','0.61','0.29','0.90','0.63','1.63','2.05','2.41','4.51']
  ];
  var REF_ROW = 8; // 660 nm, 1 – 30 mW: STD = reference laser (marked red)

  // ---- Modulation combinations. Cell: 's:...' standard availability, 'm:...' available with modification, '-' not available
  var A = ['s:a', 's:e', 's:a', 'm:c, d', 's:a, a', 's:e, a', 'm:a, c, d', 'm:e, c, d'];
  var B = ['s:a, e', 's:b, e', 'm:c', 'm:b, c, d', 'm:a, e, c', 'm:b, e, c', 'm:a, e, b, c, d', 'm:b, e, b, c, d'];
  var R520lo10 = ['s:a, e', 's:b, e', 's:a', 'm:b, c', 's:a, e, a', 's:b, e, a', 'm:a, e, b, c', 'm:b, e, b, c'];
  var R520lo45 = ['s:a, e', 's:b, e', 's:a', 'm:c', 's:a, e, a', 's:b, e, a', 'm:a, e, c', 'm:b, e, c'];
  var R520hi   = ['s:a, e', 's:b, e', 'm:c', '-', 'm:a, e, c', 'm:b, e, c', '-', '-'];
  var MOD = [
    ['405', '1 – 25',   '10 – 30',  ['s:a', 's:b, e', 'm:a, d', '-', 'm:a, a, d', 'm:b, e, a, d', 's:a', 's:b, e']],
    ['405', '1 – 25',   '4.5 – 6', ['s:a, e', 's:b, e', '-', '-', '-', '-', '-', '-']],
    ['405', '25 – 100', '10 – 30',  ['s:a, e', 's:b, e', 'm:c', 'm:b, d', 'm:a, e, c', 'm:b, e, c', 'm:a, e, b, d', 'm:b, e, b, d']],
    ['405', '25 – 100', '4.5 – 6',  ['s:a, e', 's:b, e', 'm:c', '-', 'm:a, e, c', 'm:b, e, c', '-', '-']],
    ['450', '1 – 75',   '10 – 30',  B],
    ['450', '1 – 75',   '4.5 – 6',  ['s:a, e', 's:a, e', 's:b, e', 'm:b, c', 's:a, e, b, e', 's:a, e, b, e', 'm:a, e, b, c', 'm:a, e, b, c']],
    ['520', '1 – 8',    '10 – 30',  R520lo10],
    ['520', '1 – 8',    '4.5 – 6',  R520lo45],
    ['520', '9 – 45',   '10 – 30',  R520lo10],
    ['520', '9 – 45',   '4.5 – 6',  R520lo45],
    ['520', '45 – 80',  '10 – 30',  R520hi],
    ['520', '45 – 80',  '4.5 – 6',  R520hi],
    ['640', '1 – 20',   '4.5 – 30', A],
    ['640', '20 – 100', '4.5 – 30', B],
    ['660', '1 – 30',   '4.5 – 30', A],
    ['660', '30 – 100', '4.5 – 30', B],
    ['685', '1 – 40',   '4.5 – 30', A],
    ['785', '1 – 9',    '4.5 – 30', A],
    ['785', '10 – 100', '4.5 – 30', B],
    ['830', '1 – 180',  '4.5 – 30', B],
    ['845', '1 – 40',   '4.5 – 30', A]
  ];

  function td(text, cls) { return '<td' + (cls ? ' class="' + cls + '"' : '') + '>' + text + '</td>'; }

  var f = document.getElementById('focus-rows');
  if (f) f.innerHTML = FOCUS.map(function (r, i) {
    return '<tr>' + r.map(function (v, j) {
      var cls = j < 3 ? '' : (j % 2 ? 'lt' : 'dof');
      if (i === REF_ROW && (j === 9 || j === 10)) cls += ' ref';
      return td(v, cls);
    }).join('') + '</tr>';
  }).join('');

  var m = document.getElementById('mod-rows');
  if (m) m.innerHTML = MOD.map(function (r) {
    return '<tr>' + td(r[0]) + td(r[1]) + td(r[2], 'u') + r[3].map(function (c) {
      if (c === '-') return td('–', 'na');
      var kind = c.charAt(0), txt = c.slice(2);
      return td('<i class="sq ' + (kind === 's' ? 'std' : 'mod') + '"></i>' + txt);
    }).join('') + '</tr>';
  }).join('');

  // Layout self-check (used by verify-tables.ps1 via "#measure"): free space in px above footer/contact per page
  if (location.hash === '#measure') {
    var run = function () {
      var out = Array.prototype.map.call(document.querySelectorAll('.page'), function (p, i) {
        var lim = Infinity, bottom = 0;
        Array.prototype.forEach.call(p.children, function (c) {
          var r = c.getBoundingClientRect();
          if (c.matches('.ftr, .contact, .company')) lim = Math.min(lim, r.top);
          else bottom = Math.max(bottom, r.bottom);
          Array.prototype.forEach.call(c.querySelectorAll('*'), function (d) { bottom = Math.max(bottom, c.matches('.ftr, .contact, .company') ? 0 : d.getBoundingClientRect().bottom); });
        });
        return (i + 1) + ':' + Math.round(lim - bottom);
      });
      document.body.setAttribute('data-free-space', out.join(' '));
    };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { setTimeout(run, 300); });
  }
})();
