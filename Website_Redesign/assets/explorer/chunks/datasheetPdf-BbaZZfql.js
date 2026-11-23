import { s as Dl } from "./explorer-embed-D4kuvY39.js";
function xe(n) {
  "@babel/helpers - typeof";
  return xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xe(n);
}
var tr = Uint8Array, Tn = Uint16Array, Qo = Int32Array, tl = new tr([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), el = new tr([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), ql = new tr([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), nh = function(n, t) {
  for (var e = new Tn(31), i = 0; i < 31; ++i)
    e[i] = t += 1 << n[i - 1];
  for (var s = new Qo(e[30]), i = 1; i < 30; ++i)
    for (var a = e[i]; a < e[i + 1]; ++a)
      s[a] = a - e[i] << 5 | i;
  return { b: e, r: s };
}, rh = nh(tl, 2), jf = rh.b, zo = rh.r;
jf[28] = 258, zo[258] = 28;
var Bf = nh(el, 0), Ul = Bf.r, Ho = new Tn(32768);
for (var Ee = 0; Ee < 32768; ++Ee) {
  var $r = (Ee & 43690) >> 1 | (Ee & 21845) << 1;
  $r = ($r & 52428) >> 2 | ($r & 13107) << 2, $r = ($r & 61680) >> 4 | ($r & 3855) << 4, Ho[Ee] = (($r & 65280) >> 8 | ($r & 255) << 8) >> 1;
}
var Fa = (function(n, t, e) {
  for (var i = n.length, s = 0, a = new Tn(t); s < i; ++s)
    n[s] && ++a[n[s] - 1];
  var c = new Tn(t);
  for (s = 1; s < t; ++s)
    c[s] = c[s - 1] + a[s - 1] << 1;
  var l;
  if (e) {
    l = new Tn(1 << t);
    var h = 15 - t;
    for (s = 0; s < i; ++s)
      if (n[s])
        for (var d = s << 4 | n[s], p = t - n[s], y = c[n[s] - 1]++ << p, N = y | (1 << p) - 1; y <= N; ++y)
          l[Ho[y] >> h] = d;
  } else
    for (l = new Tn(i), s = 0; s < i; ++s)
      n[s] && (l[s] = Ho[c[n[s] - 1]++] >> 15 - n[s]);
  return l;
}), xi = new tr(288);
for (var Ee = 0; Ee < 144; ++Ee)
  xi[Ee] = 8;
for (var Ee = 144; Ee < 256; ++Ee)
  xi[Ee] = 9;
for (var Ee = 256; Ee < 280; ++Ee)
  xi[Ee] = 7;
for (var Ee = 280; Ee < 288; ++Ee)
  xi[Ee] = 8;
var Fs = new tr(32);
for (var Ee = 0; Ee < 32; ++Ee)
  Fs[Ee] = 5;
var Mf = /* @__PURE__ */ Fa(xi, 9, 0), Tf = /* @__PURE__ */ Fa(Fs, 5, 0), ih = function(n) {
  return (n + 7) / 8 | 0;
}, Rf = function(n, t, e) {
  return (e == null || e > n.length) && (e = n.length), new tr(n.subarray(t, e));
}, Er = function(n, t, e) {
  e <<= t & 7;
  var i = t / 8 | 0;
  n[i] |= e, n[i + 1] |= e >> 8;
}, Ia = function(n, t, e) {
  e <<= t & 7;
  var i = t / 8 | 0;
  n[i] |= e, n[i + 1] |= e >> 8, n[i + 2] |= e >> 16;
}, wo = function(n, t) {
  for (var e = [], i = 0; i < n.length; ++i)
    n[i] && e.push({ s: i, f: n[i] });
  var s = e.length, a = e.slice();
  if (!s)
    return { t: sh, l: 0 };
  if (s == 1) {
    var c = new tr(e[0].s + 1);
    return c[e[0].s] = 1, { t: c, l: 1 };
  }
  e.sort(function(rt, mt) {
    return rt.f - mt.f;
  }), e.push({ s: -1, f: 25001 });
  var l = e[0], h = e[1], d = 0, p = 1, y = 2;
  for (e[0] = { s: -1, f: l.f + h.f, l, r: h }; p != s - 1; )
    l = e[e[d].f < e[y].f ? d++ : y++], h = e[d != p && e[d].f < e[y].f ? d++ : y++], e[p++] = { s: -1, f: l.f + h.f, l, r: h };
  for (var N = a[0].s, i = 1; i < s; ++i)
    a[i].s > N && (N = a[i].s);
  var g = new Tn(N + 1), F = Wo(e[p - 1], g, 0);
  if (F > t) {
    var i = 0, P = 0, M = F - t, L = 1 << M;
    for (a.sort(function(mt, ht) {
      return g[ht.s] - g[mt.s] || mt.f - ht.f;
    }); i < s; ++i) {
      var z = a[i].s;
      if (g[z] > t)
        P += L - (1 << F - g[z]), g[z] = t;
      else
        break;
    }
    for (P >>= M; P > 0; ) {
      var H = a[i].s;
      g[H] < t ? P -= 1 << t - g[H]++ - 1 : ++i;
    }
    for (; i >= 0 && P; --i) {
      var D = a[i].s;
      g[D] == t && (--g[D], ++P);
    }
    F = t;
  }
  return { t: new tr(g), l: F };
}, Wo = function(n, t, e) {
  return n.s == -1 ? Math.max(Wo(n.l, t, e + 1), Wo(n.r, t, e + 1)) : t[n.s] = e;
}, zl = function(n) {
  for (var t = n.length; t && !n[--t]; )
    ;
  for (var e = new Tn(++t), i = 0, s = n[0], a = 1, c = function(h) {
    e[i++] = h;
  }, l = 1; l <= t; ++l)
    if (n[l] == s && l != t)
      ++a;
    else {
      if (!s && a > 2) {
        for (; a > 138; a -= 138)
          c(32754);
        a > 2 && (c(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
      } else if (a > 3) {
        for (c(s), --a; a > 6; a -= 6)
          c(8304);
        a > 2 && (c(a - 3 << 5 | 8208), a = 0);
      }
      for (; a--; )
        c(s);
      a = 1, s = n[l];
    }
  return { c: e.subarray(0, i), n: t };
}, Ca = function(n, t) {
  for (var e = 0, i = 0; i < t.length; ++i)
    e += n[i] * t[i];
  return e;
}, ah = function(n, t, e) {
  var i = e.length, s = ih(t + 2);
  n[s] = i & 255, n[s + 1] = i >> 8, n[s + 2] = n[s] ^ 255, n[s + 3] = n[s + 1] ^ 255;
  for (var a = 0; a < i; ++a)
    n[s + a + 4] = e[a];
  return (s + 4 + i) * 8;
}, Hl = function(n, t, e, i, s, a, c, l, h, d, p) {
  Er(t, p++, e), ++s[256];
  for (var y = wo(s, 15), N = y.t, g = y.l, F = wo(a, 15), P = F.t, M = F.l, L = zl(N), z = L.c, H = L.n, D = zl(P), rt = D.c, mt = D.n, ht = new Tn(19), X = 0; X < z.length; ++X)
    ++ht[z[X] & 31];
  for (var X = 0; X < rt.length; ++X)
    ++ht[rt[X] & 31];
  for (var T = wo(ht, 7), tt = T.t, S = T.l, j = 19; j > 4 && !tt[ql[j - 1]]; --j)
    ;
  var W = d + 5 << 3, U = Ca(s, xi) + Ca(a, Fs) + c, it = Ca(s, N) + Ca(a, P) + c + 14 + 3 * j + Ca(ht, tt) + 2 * ht[16] + 3 * ht[17] + 7 * ht[18];
  if (h >= 0 && W <= U && W <= it)
    return ah(t, p, n.subarray(h, h + d));
  var ot, ft, nt, dt;
  if (Er(t, p, 1 + (it < U)), p += 2, it < U) {
    ot = Fa(N, g, 0), ft = N, nt = Fa(P, M, 0), dt = P;
    var At = Fa(tt, S, 0);
    Er(t, p, H - 257), Er(t, p + 5, mt - 1), Er(t, p + 10, j - 4), p += 14;
    for (var X = 0; X < j; ++X)
      Er(t, p + 3 * X, tt[ql[X]]);
    p += 3 * j;
    for (var wt = [z, rt], _ = 0; _ < 2; ++_)
      for (var B = wt[_], X = 0; X < B.length; ++X) {
        var R = B[X] & 31;
        Er(t, p, At[R]), p += tt[R], R > 15 && (Er(t, p, B[X] >> 5 & 127), p += B[X] >> 12);
      }
  } else
    ot = Mf, ft = xi, nt = Tf, dt = Fs;
  for (var X = 0; X < l; ++X) {
    var G = i[X];
    if (G > 255) {
      var R = G >> 18 & 31;
      Ia(t, p, ot[R + 257]), p += ft[R + 257], R > 7 && (Er(t, p, G >> 23 & 31), p += tl[R]);
      var J = G & 31;
      Ia(t, p, nt[J]), p += dt[J], J > 3 && (Ia(t, p, G >> 5 & 8191), p += el[J]);
    } else
      Ia(t, p, ot[G]), p += ft[G];
  }
  return Ia(t, p, ot[256]), p + ft[256];
}, Df = /* @__PURE__ */ new Qo([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), sh = /* @__PURE__ */ new tr(0), qf = function(n, t, e, i, s, a) {
  var c = a.z || n.length, l = new tr(i + c + 5 * (1 + Math.ceil(c / 7e3)) + s), h = l.subarray(i, l.length - s), d = a.l, p = (a.r || 0) & 7;
  if (t) {
    p && (h[0] = a.r >> 3);
    for (var y = Df[t - 1], N = y >> 13, g = y & 8191, F = (1 << e) - 1, P = a.p || new Tn(32768), M = a.h || new Tn(F + 1), L = Math.ceil(e / 3), z = 2 * L, H = function(Dt) {
      return (n[Dt] ^ n[Dt + 1] << L ^ n[Dt + 2] << z) & F;
    }, D = new Qo(25e3), rt = new Tn(288), mt = new Tn(32), ht = 0, X = 0, T = a.i || 0, tt = 0, S = a.w || 0, j = 0; T + 2 < c; ++T) {
      var W = H(T), U = T & 32767, it = M[W];
      if (P[U] = it, M[W] = U, S <= T) {
        var ot = c - T;
        if ((ht > 7e3 || tt > 24576) && (ot > 423 || !d)) {
          p = Hl(n, h, 0, D, rt, mt, X, tt, j, T - j, p), tt = ht = X = 0, j = T;
          for (var ft = 0; ft < 286; ++ft)
            rt[ft] = 0;
          for (var ft = 0; ft < 30; ++ft)
            mt[ft] = 0;
        }
        var nt = 2, dt = 0, At = g, wt = U - it & 32767;
        if (ot > 2 && W == H(T - wt))
          for (var _ = Math.min(N, ot) - 1, B = Math.min(32767, T), R = Math.min(258, ot); wt <= B && --At && U != it; ) {
            if (n[T + nt] == n[T + nt - wt]) {
              for (var G = 0; G < R && n[T + G] == n[T + G - wt]; ++G)
                ;
              if (G > nt) {
                if (nt = G, dt = wt, G > _)
                  break;
                for (var J = Math.min(wt, G - 2), Z = 0, ft = 0; ft < J; ++ft) {
                  var at = T - wt + ft & 32767, st = P[at], gt = at - st & 32767;
                  gt > Z && (Z = gt, it = at);
                }
              }
            }
            U = it, it = P[U], wt += U - it & 32767;
          }
        if (dt) {
          D[tt++] = 268435456 | zo[nt] << 18 | Ul[dt];
          var _t = zo[nt] & 31, kt = Ul[dt] & 31;
          X += tl[_t] + el[kt], ++rt[257 + _t], ++mt[kt], S = T + nt, ++ht;
        } else
          D[tt++] = n[T], ++rt[n[T]];
      }
    }
    for (T = Math.max(T, S); T < c; ++T)
      D[tt++] = n[T], ++rt[n[T]];
    p = Hl(n, h, d, D, rt, mt, X, tt, j, T - j, p), d || (a.r = p & 7 | h[p / 8 | 0] << 3, p -= 7, a.h = M, a.p = P, a.i = T, a.w = S);
  } else {
    for (var T = a.w || 0; T < c + d; T += 65535) {
      var St = T + 65535;
      St >= c && (h[p / 8 | 0] = d, St = c), p = ah(h, p + 1, n.subarray(T, St));
    }
    a.i = c;
  }
  return Rf(l, 0, i + ih(p) + s);
}, oh = function() {
  var n = 1, t = 0;
  return {
    p: function(e) {
      for (var i = n, s = t, a = e.length | 0, c = 0; c != a; ) {
        for (var l = Math.min(c + 2655, a); c < l; ++c)
          s += i += e[c];
        i = (i & 65535) + 15 * (i >> 16), s = (s & 65535) + 15 * (s >> 16);
      }
      n = i, t = s;
    },
    d: function() {
      return n %= 65521, t %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, Uf = function(n, t, e, i, s) {
  if (!s && (s = { l: 1 }, t.dictionary)) {
    var a = t.dictionary.subarray(-32768), c = new tr(a.length + n.length);
    c.set(a), c.set(n, a.length), n = c, s.w = a.length;
  }
  return qf(n, t.level == null ? 6 : t.level, t.mem == null ? s.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + t.mem, e, i, s);
}, lh = function(n, t, e) {
  for (; e; ++t)
    n[t] = e, e >>>= 8;
}, zf = function(n, t) {
  var e = t.level, i = e == 0 ? 0 : e < 6 ? 1 : e == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = i << 6 | (t.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, t.dictionary) {
    var s = oh();
    s.p(t.dictionary), lh(n, 2, s.d());
  }
};
function Go(n, t) {
  t || (t = {});
  var e = oh();
  e.p(n);
  var i = Uf(n, t, t.dictionary ? 6 : 2, 4);
  return zf(i, t), lh(i, i.length - 4, e.d()), i;
}
var Hf = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Wf = 0;
try {
  Hf.decode(sh, { stream: !0 }), Wf = 1;
} catch {
}
function Gf(n) {
  if (Array.isArray(n)) return n;
}
function Vf(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var i, s, a, c, l = [], h = !0, d = !1;
    try {
      if (a = (e = e.call(n)).next, t !== 0) for (; !(h = (i = a.call(e)).done) && (l.push(i.value), l.length !== t); h = !0) ;
    } catch (p) {
      d = !0, s = p;
    } finally {
      try {
        if (!h && e.return != null && (c = e.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw s;
      }
    }
    return l;
  }
}
function Wl(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, i = Array(t); e < t; e++) i[e] = n[e];
  return i;
}
function Yf(n, t) {
  if (n) {
    if (typeof n == "string") return Wl(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Wl(n, t) : void 0;
  }
}
function Jf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gl(n, t) {
  return Gf(n) || Vf(n, t) || Yf(n, t) || Jf();
}
function Vl(n, t = "utf8") {
  return new TextDecoder(t).decode(n);
}
const $f = new TextEncoder();
function Xf(n) {
  return $f.encode(n);
}
const Kf = 1024 * 8, Zf = (() => {
  const n = new Uint8Array(4), t = new Uint32Array(n.buffer);
  return !((t[0] = 1) & n[0]);
})(), yo = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
class nl {
  /**
   * Reference to the internal ArrayBuffer object.
   */
  buffer;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  byteLength;
  /**
   * Byte offset of the internal ArrayBuffer.
   */
  byteOffset;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  length;
  /**
   * The current offset of the buffer's pointer.
   */
  offset;
  lastWrittenByte;
  littleEndian;
  _data;
  _mark;
  _marks;
  /**
   * Create a new IOBuffer.
   * @param data - The data to construct the IOBuffer with.
   * If data is a number, it will be the new buffer's length<br>
   * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
   * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
   * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
   * @param options - An object for the options.
   * @returns A new IOBuffer instance.
   */
  constructor(t = Kf, e = {}) {
    let i = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (i = !0, this.lastWrittenByte = t.byteLength);
    const s = e.offset ? e.offset >>> 0 : 0, a = t.byteLength - s;
    let c = s;
    (ArrayBuffer.isView(t) || t instanceof nl) && (t.byteLength !== t.buffer.byteLength && (c = t.byteOffset + s), t = t.buffer), i ? this.lastWrittenByte = a : this.lastWrittenByte = 0, this.buffer = t, this.length = a, this.byteLength = a, this.byteOffset = c, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, c, a), this._mark = 0, this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */
  available(t = 1) {
    return this.offset + t <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte
   * values.
   * @returns `true` if little-endian mode is used, `false` otherwise.
   */
  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setLittleEndian() {
    return this.littleEndian = !0, this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values.
   * @returns `true` if big-endian mode is used, `false` otherwise.
   */
  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setBigEndian() {
    return this.littleEndian = !1, this;
  }
  /**
   * Move the pointer n bytes forward.
   * @param n - Number of bytes to skip.
   * @returns This.
   */
  skip(t = 1) {
    return this.offset += t, this;
  }
  /**
   * Move the pointer n bytes backward.
   * @param n - Number of bytes to move back.
   * @returns This.
   */
  back(t = 1) {
    return this.offset -= t, this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset - The offset to move to.
   * @returns This.
   */
  seek(t) {
    return this.offset = t, this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   * @returns This.
   */
  mark() {
    return this._mark = this.offset, this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark.
   * @see {@link IOBuffer#mark}
   * @returns This.
   */
  reset() {
    return this.offset = this._mark, this;
  }
  /**
   * Push the current pointer offset to the mark stack.
   * @see {@link IOBuffer#popMark}
   * @returns This.
   */
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current
   * pointer offset to the popped value.
   * @see {@link IOBuffer#pushMark}
   * @returns This.
   */
  popMark() {
    const t = this._marks.pop();
    if (t === void 0)
      throw new Error("Mark stack empty");
    return this.seek(t), this;
  }
  /**
   * Move the pointer offset back to 0.
   * @returns This.
   */
  rewind() {
    return this.offset = 0, this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at
   * the current pointer offset.
   * If the buffer's memory is insufficient, this method will create a new
   * buffer (a copy) with a length that is twice (byteLength + current offset).
   * @param byteLength - The needed memory in bytes.
   * @returns This.
   */
  ensureAvailable(t = 1) {
    if (!this.available(t)) {
      const i = (this.offset + t) * 2, s = new Uint8Array(i);
      s.set(new Uint8Array(this.buffer)), this.buffer = s.buffer, this.length = i, this.byteLength = i, this._data = new DataView(this.buffer);
    }
    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise.
   * Moves pointer forward by one byte.
   * @returns The read boolean.
   */
  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}.
   * @returns The read byte.
   */
  readByte() {
    return this.readUint8();
  }
  /**
   * Read `n` bytes and move pointer forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The read bytes.
   */
  readBytes(t = 1) {
    return this.readArray(t, "uint8");
  }
  /**
   * Creates an array of corresponding to the type `type` and size `size`.
   * For example type `uint8` will create a `Uint8Array`.
   * @param size - size of the resulting array
   * @param type - number type of elements to read
   * @returns The read array.
   */
  readArray(t, e) {
    const i = yo[e].BYTES_PER_ELEMENT * t, s = this.byteOffset + this.offset, a = this.buffer.slice(s, s + i);
    if (this.littleEndian === Zf && e !== "uint8" && e !== "int8") {
      const l = new Uint8Array(this.buffer.slice(s, s + i));
      l.reverse();
      const h = new yo[e](l.buffer);
      return this.offset += i, h.reverse(), h;
    }
    const c = new yo[e](a);
    return this.offset += i, c;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readInt16() {
    const t = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readUint16() {
    const t = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readInt32() {
    const t = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readUint32() {
    const t = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readFloat32() {
    const t = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readFloat64() {
    const t = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigInt64() {
    const t = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigUint64() {
    const t = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 1-byte ASCII character and move pointer forward by 1 byte.
   * @returns The read character.
   */
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
   * @param n - Number of characters to read.
   * @returns The read characters.
   */
  readChars(t = 1) {
    let e = "";
    for (let i = 0; i < t; i++)
      e += this.readChar();
    return e;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(t = 1) {
    return Vl(this.readBytes(t));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(t = 1, e = "utf8") {
    return Vl(this.readBytes(t), e);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeBoolean(t) {
    return this.writeUint8(t ? 255 : 0), this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt8(t) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint8(t) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   * @param value - The value to write.
   * @returns This.
   */
  writeByte(t) {
    return this.writeUint8(t);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   * @param bytes - The array of bytes to write.
   * @returns This.
   */
  writeBytes(t) {
    this.ensureAvailable(t.length);
    for (let e = 0; e < t.length; e++)
      this._data.setUint8(this.offset++, t[e]);
    return this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt16(t) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint16(t) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt32(t) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint32(t) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat32(t) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat64(t) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit signed bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigInt64(t) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigUint64(t) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   * @param str - The character to write.
   * @returns This.
   */
  writeChar(t) {
    return this.writeUint8(t.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   * @param str - The characters to write.
   * @returns This.
   */
  writeChars(t) {
    for (let e = 0; e < t.length; e++)
      this.writeUint8(t.charCodeAt(e));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(t) {
    return this.writeBytes(Xf(t));
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   * @returns A new Uint8Array view.
   */
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  /**
   *  Get the total number of bytes written so far, regardless of the current offset.
   * @returns - Total number of bytes.
   */
  getWrittenByteLength() {
    return this.lastWrittenByte - this.byteOffset;
  }
  /**
   * Update the last written byte offset
   * @private
   */
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
}
function aa(n) {
  let t = n.length;
  for (; --t >= 0; )
    n[t] = 0;
}
const Qf = 3, tc = 258, uh = 29, ec = 256, nc = ec + 1 + uh, hh = 30, rc = 512, ic = new Array((nc + 2) * 2);
aa(ic);
const ac = new Array(hh * 2);
aa(ac);
const sc = new Array(rc);
aa(sc);
const oc = new Array(tc - Qf + 1);
aa(oc);
const lc = new Array(uh);
aa(lc);
const uc = new Array(hh);
aa(uc);
const hc = (n, t, e, i) => {
  let s = n & 65535 | 0, a = n >>> 16 & 65535 | 0, c = 0;
  for (; e !== 0; ) {
    c = e > 2e3 ? 2e3 : e, e -= c;
    do
      s = s + t[i++] | 0, a = a + s | 0;
    while (--c);
    s %= 65521, a %= 65521;
  }
  return s | a << 16 | 0;
};
var Vo = hc;
const fc = () => {
  let n, t = [];
  for (var e = 0; e < 256; e++) {
    n = e;
    for (var i = 0; i < 8; i++)
      n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
    t[e] = n;
  }
  return t;
}, cc = new Uint32Array(fc()), dc = (n, t, e, i) => {
  const s = cc, a = i + e;
  n ^= -1;
  for (let c = i; c < a; c++)
    n = n >>> 8 ^ s[(n ^ t[c]) & 255];
  return n ^ -1;
};
var dr = dc, Yo = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, fh = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const pc = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
var gc = function(n) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const i in e)
        pc(e, i) && (n[i] = e[i]);
    }
  }
  return n;
}, mc = (n) => {
  let t = 0;
  for (let i = 0, s = n.length; i < s; i++)
    t += n[i].length;
  const e = new Uint8Array(t);
  for (let i = 0, s = 0, a = n.length; i < a; i++) {
    let c = n[i];
    e.set(c, s), s += c.length;
  }
  return e;
}, ch = {
  assign: gc,
  flattenChunks: mc
};
let dh = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  dh = !1;
}
const ja = new Uint8Array(256);
for (let n = 0; n < 256; n++)
  ja[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
ja[254] = ja[255] = 1;
var vc = (n) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(n);
  let t, e, i, s, a, c = n.length, l = 0;
  for (s = 0; s < c; s++)
    e = n.charCodeAt(s), (e & 64512) === 55296 && s + 1 < c && (i = n.charCodeAt(s + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), s++)), l += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(l), a = 0, s = 0; a < l; s++)
    e = n.charCodeAt(s), (e & 64512) === 55296 && s + 1 < c && (i = n.charCodeAt(s + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), s++)), e < 128 ? t[a++] = e : e < 2048 ? (t[a++] = 192 | e >>> 6, t[a++] = 128 | e & 63) : e < 65536 ? (t[a++] = 224 | e >>> 12, t[a++] = 128 | e >>> 6 & 63, t[a++] = 128 | e & 63) : (t[a++] = 240 | e >>> 18, t[a++] = 128 | e >>> 12 & 63, t[a++] = 128 | e >>> 6 & 63, t[a++] = 128 | e & 63);
  return t;
};
const bc = (n, t) => {
  if (t < 65534 && n.subarray && dh)
    return String.fromCharCode.apply(null, n.length === t ? n : n.subarray(0, t));
  let e = "";
  for (let i = 0; i < t; i++)
    e += String.fromCharCode(n[i]);
  return e;
};
var wc = (n, t) => {
  const e = t || n.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(n.subarray(0, t));
  let i, s;
  const a = new Array(e * 2);
  for (s = 0, i = 0; i < e; ) {
    let c = n[i++];
    if (c < 128) {
      a[s++] = c;
      continue;
    }
    let l = ja[c];
    if (l > 4) {
      a[s++] = 65533, i += l - 1;
      continue;
    }
    for (c &= l === 2 ? 31 : l === 3 ? 15 : 7; l > 1 && i < e; )
      c = c << 6 | n[i++] & 63, l--;
    if (l > 1) {
      a[s++] = 65533;
      continue;
    }
    c < 65536 ? a[s++] = c : (c -= 65536, a[s++] = 55296 | c >> 10 & 1023, a[s++] = 56320 | c & 1023);
  }
  return bc(a, s);
}, yc = (n, t) => {
  t = t || n.length, t > n.length && (t = n.length);
  let e = t - 1;
  for (; e >= 0 && (n[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + ja[n[e]] > t ? e : t;
}, Jo = {
  string2buf: vc,
  buf2string: wc,
  utf8border: yc
};
function xc() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var _c = xc;
const ms = 16209, Ac = 16191;
var Nc = function(t, e) {
  let i, s, a, c, l, h, d, p, y, N, g, F, P, M, L, z, H, D, rt, mt, ht, X, T, tt;
  const S = t.state;
  i = t.next_in, T = t.input, s = i + (t.avail_in - 5), a = t.next_out, tt = t.output, c = a - (e - t.avail_out), l = a + (t.avail_out - 257), h = S.dmax, d = S.wsize, p = S.whave, y = S.wnext, N = S.window, g = S.hold, F = S.bits, P = S.lencode, M = S.distcode, L = (1 << S.lenbits) - 1, z = (1 << S.distbits) - 1;
  t:
    do {
      F < 15 && (g += T[i++] << F, F += 8, g += T[i++] << F, F += 8), H = P[g & L];
      e:
        for (; ; ) {
          if (D = H >>> 24, g >>>= D, F -= D, D = H >>> 16 & 255, D === 0)
            tt[a++] = H & 65535;
          else if (D & 16) {
            rt = H & 65535, D &= 15, D && (F < D && (g += T[i++] << F, F += 8), rt += g & (1 << D) - 1, g >>>= D, F -= D), F < 15 && (g += T[i++] << F, F += 8, g += T[i++] << F, F += 8), H = M[g & z];
            n:
              for (; ; ) {
                if (D = H >>> 24, g >>>= D, F -= D, D = H >>> 16 & 255, D & 16) {
                  if (mt = H & 65535, D &= 15, F < D && (g += T[i++] << F, F += 8, F < D && (g += T[i++] << F, F += 8)), mt += g & (1 << D) - 1, mt > h) {
                    t.msg = "invalid distance too far back", S.mode = ms;
                    break t;
                  }
                  if (g >>>= D, F -= D, D = a - c, mt > D) {
                    if (D = mt - D, D > p && S.sane) {
                      t.msg = "invalid distance too far back", S.mode = ms;
                      break t;
                    }
                    if (ht = 0, X = N, y === 0) {
                      if (ht += d - D, D < rt) {
                        rt -= D;
                        do
                          tt[a++] = N[ht++];
                        while (--D);
                        ht = a - mt, X = tt;
                      }
                    } else if (y < D) {
                      if (ht += d + y - D, D -= y, D < rt) {
                        rt -= D;
                        do
                          tt[a++] = N[ht++];
                        while (--D);
                        if (ht = 0, y < rt) {
                          D = y, rt -= D;
                          do
                            tt[a++] = N[ht++];
                          while (--D);
                          ht = a - mt, X = tt;
                        }
                      }
                    } else if (ht += y - D, D < rt) {
                      rt -= D;
                      do
                        tt[a++] = N[ht++];
                      while (--D);
                      ht = a - mt, X = tt;
                    }
                    for (; rt > 2; )
                      tt[a++] = X[ht++], tt[a++] = X[ht++], tt[a++] = X[ht++], rt -= 3;
                    rt && (tt[a++] = X[ht++], rt > 1 && (tt[a++] = X[ht++]));
                  } else {
                    ht = a - mt;
                    do
                      tt[a++] = tt[ht++], tt[a++] = tt[ht++], tt[a++] = tt[ht++], rt -= 3;
                    while (rt > 2);
                    rt && (tt[a++] = tt[ht++], rt > 1 && (tt[a++] = tt[ht++]));
                  }
                } else if ((D & 64) === 0) {
                  H = M[(H & 65535) + (g & (1 << D) - 1)];
                  continue n;
                } else {
                  t.msg = "invalid distance code", S.mode = ms;
                  break t;
                }
                break;
              }
          } else if ((D & 64) === 0) {
            H = P[(H & 65535) + (g & (1 << D) - 1)];
            continue e;
          } else if (D & 32) {
            S.mode = Ac;
            break t;
          } else {
            t.msg = "invalid literal/length code", S.mode = ms;
            break t;
          }
          break;
        }
    } while (i < s && a < l);
  rt = F >> 3, i -= rt, F -= rt << 3, g &= (1 << F) - 1, t.next_in = i, t.next_out = a, t.avail_in = i < s ? 5 + (s - i) : 5 - (i - s), t.avail_out = a < l ? 257 + (l - a) : 257 - (a - l), S.hold = g, S.bits = F;
};
const Ji = 15, Yl = 852, Jl = 592, $l = 0, xo = 1, Xl = 2, Lc = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Sc = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  199,
  75
]), kc = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Pc = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Ic = (n, t, e, i, s, a, c, l) => {
  const h = l.bits;
  let d = 0, p = 0, y = 0, N = 0, g = 0, F = 0, P = 0, M = 0, L = 0, z = 0, H, D, rt, mt, ht, X = null, T;
  const tt = new Uint16Array(Ji + 1), S = new Uint16Array(Ji + 1);
  let j = null, W, U, it;
  for (d = 0; d <= Ji; d++)
    tt[d] = 0;
  for (p = 0; p < i; p++)
    tt[t[e + p]]++;
  for (g = h, N = Ji; N >= 1 && tt[N] === 0; N--)
    ;
  if (g > N && (g = N), N === 0)
    return s[a++] = 1 << 24 | 64 << 16 | 0, s[a++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
  for (y = 1; y < N && tt[y] === 0; y++)
    ;
  for (g < y && (g = y), M = 1, d = 1; d <= Ji; d++)
    if (M <<= 1, M -= tt[d], M < 0)
      return -1;
  if (M > 0 && (n === $l || N !== 1))
    return -1;
  for (S[1] = 0, d = 1; d < Ji; d++)
    S[d + 1] = S[d] + tt[d];
  for (p = 0; p < i; p++)
    t[e + p] !== 0 && (c[S[t[e + p]]++] = p);
  if (n === $l ? (X = j = c, T = 20) : n === xo ? (X = Lc, j = Sc, T = 257) : (X = kc, j = Pc, T = 0), z = 0, p = 0, d = y, ht = a, F = g, P = 0, rt = -1, L = 1 << g, mt = L - 1, n === xo && L > Yl || n === Xl && L > Jl)
    return 1;
  for (; ; ) {
    W = d - P, c[p] + 1 < T ? (U = 0, it = c[p]) : c[p] >= T ? (U = j[c[p] - T], it = X[c[p] - T]) : (U = 96, it = 0), H = 1 << d - P, D = 1 << F, y = D;
    do
      D -= H, s[ht + (z >> P) + D] = W << 24 | U << 16 | it | 0;
    while (D !== 0);
    for (H = 1 << d - 1; z & H; )
      H >>= 1;
    if (H !== 0 ? (z &= H - 1, z += H) : z = 0, p++, --tt[d] === 0) {
      if (d === N)
        break;
      d = t[e + c[p]];
    }
    if (d > g && (z & mt) !== rt) {
      for (P === 0 && (P = g), ht += y, F = d - P, M = 1 << F; F + P < N && (M -= tt[F + P], !(M <= 0)); )
        F++, M <<= 1;
      if (L += 1 << F, n === xo && L > Yl || n === Xl && L > Jl)
        return 1;
      rt = z & mt, s[rt] = g << 24 | F << 16 | ht - a | 0;
    }
  }
  return z !== 0 && (s[ht + z] = d - P << 24 | 64 << 16 | 0), l.bits = g, 0;
};
var Ea = Ic;
const Cc = 0, ph = 1, gh = 2, {
  Z_FINISH: Kl,
  Z_BLOCK: Fc,
  Z_TREES: vs,
  Z_OK: _i,
  Z_STREAM_END: Ec,
  Z_NEED_DICT: Oc,
  Z_STREAM_ERROR: Gn,
  Z_DATA_ERROR: mh,
  Z_MEM_ERROR: vh,
  Z_BUF_ERROR: jc,
  Z_DEFLATED: Zl
} = fh, Bs = 16180, Ql = 16181, tu = 16182, eu = 16183, nu = 16184, ru = 16185, iu = 16186, au = 16187, su = 16188, ou = 16189, Es = 16190, Or = 16191, _o = 16192, lu = 16193, Ao = 16194, uu = 16195, hu = 16196, fu = 16197, cu = 16198, bs = 16199, ws = 16200, du = 16201, pu = 16202, gu = 16203, mu = 16204, vu = 16205, No = 16206, bu = 16207, wu = 16208, Be = 16209, bh = 16210, wh = 16211, Bc = 852, Mc = 592, Tc = 15, Rc = Tc, yu = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
function Dc() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Ni = (n) => {
  if (!n)
    return 1;
  const t = n.state;
  return !t || t.strm !== n || t.mode < Bs || t.mode > wh ? 1 : 0;
}, yh = (n) => {
  if (Ni(n))
    return Gn;
  const t = n.state;
  return n.total_in = n.total_out = t.total = 0, n.msg = "", t.wrap && (n.adler = t.wrap & 1), t.mode = Bs, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Bc), t.distcode = t.distdyn = new Int32Array(Mc), t.sane = 1, t.back = -1, _i;
}, xh = (n) => {
  if (Ni(n))
    return Gn;
  const t = n.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, yh(n);
}, _h = (n, t) => {
  let e;
  if (Ni(n))
    return Gn;
  const i = n.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? Gn : (i.window !== null && i.wbits !== t && (i.window = null), i.wrap = e, i.wbits = t, xh(n));
}, Ah = (n, t) => {
  if (!n)
    return Gn;
  const e = new Dc();
  n.state = e, e.strm = n, e.window = null, e.mode = Bs;
  const i = _h(n, t);
  return i !== _i && (n.state = null), i;
}, qc = (n) => Ah(n, Rc);
let xu = !0, Lo, So;
const Uc = (n) => {
  if (xu) {
    Lo = new Int32Array(512), So = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      n.lens[t++] = 8;
    for (; t < 256; )
      n.lens[t++] = 9;
    for (; t < 280; )
      n.lens[t++] = 7;
    for (; t < 288; )
      n.lens[t++] = 8;
    for (Ea(ph, n.lens, 0, 288, Lo, 0, n.work, { bits: 9 }), t = 0; t < 32; )
      n.lens[t++] = 5;
    Ea(gh, n.lens, 0, 32, So, 0, n.work, { bits: 5 }), xu = !1;
  }
  n.lencode = Lo, n.lenbits = 9, n.distcode = So, n.distbits = 5;
}, Nh = (n, t, e, i) => {
  let s;
  const a = n.state;
  return a.window === null && (a.window = new Uint8Array(1 << a.wbits)), a.wsize === 0 && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0), i >= a.wsize ? (a.window.set(t.subarray(e - a.wsize, e), 0), a.wnext = 0, a.whave = a.wsize) : (s = a.wsize - a.wnext, s > i && (s = i), a.window.set(t.subarray(e - i, e - i + s), a.wnext), i -= s, i ? (a.window.set(t.subarray(e - i, e), 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += s, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += s))), 0;
}, zc = (n, t) => {
  let e, i, s, a, c, l, h, d, p, y, N, g, F, P, M = 0, L, z, H, D, rt, mt, ht, X;
  const T = new Uint8Array(4);
  let tt, S;
  const j = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Ni(n) || !n.output || !n.input && n.avail_in !== 0)
    return Gn;
  e = n.state, e.mode === Or && (e.mode = _o), c = n.next_out, s = n.output, h = n.avail_out, a = n.next_in, i = n.input, l = n.avail_in, d = e.hold, p = e.bits, y = l, N = h, X = _i;
  t:
    for (; ; )
      switch (e.mode) {
        case Bs:
          if (e.wrap === 0) {
            e.mode = _o;
            break;
          }
          for (; p < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if (e.wrap & 2 && d === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, T[0] = d & 255, T[1] = d >>> 8 & 255, e.check = dr(e.check, T, 2, 0), d = 0, p = 0, e.mode = Ql;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || /* check if zlib header allowed */
          (((d & 255) << 8) + (d >> 8)) % 31) {
            n.msg = "incorrect header check", e.mode = Be;
            break;
          }
          if ((d & 15) !== Zl) {
            n.msg = "unknown compression method", e.mode = Be;
            break;
          }
          if (d >>>= 4, p -= 4, ht = (d & 15) + 8, e.wbits === 0 && (e.wbits = ht), ht > 15 || ht > e.wbits) {
            n.msg = "invalid window size", e.mode = Be;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, n.adler = e.check = 1, e.mode = d & 512 ? ou : Or, d = 0, p = 0;
          break;
        case Ql:
          for (; p < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if (e.flags = d, (e.flags & 255) !== Zl) {
            n.msg = "unknown compression method", e.mode = Be;
            break;
          }
          if (e.flags & 57344) {
            n.msg = "unknown header flags set", e.mode = Be;
            break;
          }
          e.head && (e.head.text = d >> 8 & 1), e.flags & 512 && e.wrap & 4 && (T[0] = d & 255, T[1] = d >>> 8 & 255, e.check = dr(e.check, T, 2, 0)), d = 0, p = 0, e.mode = tu;
        /* falls through */
        case tu:
          for (; p < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          e.head && (e.head.time = d), e.flags & 512 && e.wrap & 4 && (T[0] = d & 255, T[1] = d >>> 8 & 255, T[2] = d >>> 16 & 255, T[3] = d >>> 24 & 255, e.check = dr(e.check, T, 4, 0)), d = 0, p = 0, e.mode = eu;
        /* falls through */
        case eu:
          for (; p < 16; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          e.head && (e.head.xflags = d & 255, e.head.os = d >> 8), e.flags & 512 && e.wrap & 4 && (T[0] = d & 255, T[1] = d >>> 8 & 255, e.check = dr(e.check, T, 2, 0)), d = 0, p = 0, e.mode = nu;
        /* falls through */
        case nu:
          if (e.flags & 1024) {
            for (; p < 16; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            e.length = d, e.head && (e.head.extra_len = d), e.flags & 512 && e.wrap & 4 && (T[0] = d & 255, T[1] = d >>> 8 & 255, e.check = dr(e.check, T, 2, 0)), d = 0, p = 0;
          } else e.head && (e.head.extra = null);
          e.mode = ru;
        /* falls through */
        case ru:
          if (e.flags & 1024 && (g = e.length, g > l && (g = l), g && (e.head && (ht = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            i.subarray(
              a,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              a + g
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            ht
          )), e.flags & 512 && e.wrap & 4 && (e.check = dr(e.check, i, g, a)), l -= g, a += g, e.length -= g), e.length))
            break t;
          e.length = 0, e.mode = iu;
        /* falls through */
        case iu:
          if (e.flags & 2048) {
            if (l === 0)
              break t;
            g = 0;
            do
              ht = i[a + g++], e.head && ht && e.length < 65536 && (e.head.name += String.fromCharCode(ht));
            while (ht && g < l);
            if (e.flags & 512 && e.wrap & 4 && (e.check = dr(e.check, i, g, a)), l -= g, a += g, ht)
              break t;
          } else e.head && (e.head.name = null);
          e.length = 0, e.mode = au;
        /* falls through */
        case au:
          if (e.flags & 4096) {
            if (l === 0)
              break t;
            g = 0;
            do
              ht = i[a + g++], e.head && ht && e.length < 65536 && (e.head.comment += String.fromCharCode(ht));
            while (ht && g < l);
            if (e.flags & 512 && e.wrap & 4 && (e.check = dr(e.check, i, g, a)), l -= g, a += g, ht)
              break t;
          } else e.head && (e.head.comment = null);
          e.mode = su;
        /* falls through */
        case su:
          if (e.flags & 512) {
            for (; p < 16; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            if (e.wrap & 4 && d !== (e.check & 65535)) {
              n.msg = "header crc mismatch", e.mode = Be;
              break;
            }
            d = 0, p = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), n.adler = e.check = 0, e.mode = Or;
          break;
        case ou:
          for (; p < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          n.adler = e.check = yu(d), d = 0, p = 0, e.mode = Es;
        /* falls through */
        case Es:
          if (e.havedict === 0)
            return n.next_out = c, n.avail_out = h, n.next_in = a, n.avail_in = l, e.hold = d, e.bits = p, Oc;
          n.adler = e.check = 1, e.mode = Or;
        /* falls through */
        case Or:
          if (t === Fc || t === vs)
            break t;
        /* falls through */
        case _o:
          if (e.last) {
            d >>>= p & 7, p -= p & 7, e.mode = No;
            break;
          }
          for (; p < 3; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          switch (e.last = d & 1, d >>>= 1, p -= 1, d & 3) {
            case 0:
              e.mode = lu;
              break;
            case 1:
              if (Uc(e), e.mode = bs, t === vs) {
                d >>>= 2, p -= 2;
                break t;
              }
              break;
            case 2:
              e.mode = hu;
              break;
            case 3:
              n.msg = "invalid block type", e.mode = Be;
          }
          d >>>= 2, p -= 2;
          break;
        case lu:
          for (d >>>= p & 7, p -= p & 7; p < 32; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if ((d & 65535) !== (d >>> 16 ^ 65535)) {
            n.msg = "invalid stored block lengths", e.mode = Be;
            break;
          }
          if (e.length = d & 65535, d = 0, p = 0, e.mode = Ao, t === vs)
            break t;
        /* falls through */
        case Ao:
          e.mode = uu;
        /* falls through */
        case uu:
          if (g = e.length, g) {
            if (g > l && (g = l), g > h && (g = h), g === 0)
              break t;
            s.set(i.subarray(a, a + g), c), l -= g, a += g, h -= g, c += g, e.length -= g;
            break;
          }
          e.mode = Or;
          break;
        case hu:
          for (; p < 14; ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if (e.nlen = (d & 31) + 257, d >>>= 5, p -= 5, e.ndist = (d & 31) + 1, d >>>= 5, p -= 5, e.ncode = (d & 15) + 4, d >>>= 4, p -= 4, e.nlen > 286 || e.ndist > 30) {
            n.msg = "too many length or distance symbols", e.mode = Be;
            break;
          }
          e.have = 0, e.mode = fu;
        /* falls through */
        case fu:
          for (; e.have < e.ncode; ) {
            for (; p < 3; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            e.lens[j[e.have++]] = d & 7, d >>>= 3, p -= 3;
          }
          for (; e.have < 19; )
            e.lens[j[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, tt = { bits: e.lenbits }, X = Ea(Cc, e.lens, 0, 19, e.lencode, 0, e.work, tt), e.lenbits = tt.bits, X) {
            n.msg = "invalid code lengths set", e.mode = Be;
            break;
          }
          e.have = 0, e.mode = cu;
        /* falls through */
        case cu:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; M = e.lencode[d & (1 << e.lenbits) - 1], L = M >>> 24, z = M >>> 16 & 255, H = M & 65535, !(L <= p); ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            if (H < 16)
              d >>>= L, p -= L, e.lens[e.have++] = H;
            else {
              if (H === 16) {
                for (S = L + 2; p < S; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[a++] << p, p += 8;
                }
                if (d >>>= L, p -= L, e.have === 0) {
                  n.msg = "invalid bit length repeat", e.mode = Be;
                  break;
                }
                ht = e.lens[e.have - 1], g = 3 + (d & 3), d >>>= 2, p -= 2;
              } else if (H === 17) {
                for (S = L + 3; p < S; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[a++] << p, p += 8;
                }
                d >>>= L, p -= L, ht = 0, g = 3 + (d & 7), d >>>= 3, p -= 3;
              } else {
                for (S = L + 7; p < S; ) {
                  if (l === 0)
                    break t;
                  l--, d += i[a++] << p, p += 8;
                }
                d >>>= L, p -= L, ht = 0, g = 11 + (d & 127), d >>>= 7, p -= 7;
              }
              if (e.have + g > e.nlen + e.ndist) {
                n.msg = "invalid bit length repeat", e.mode = Be;
                break;
              }
              for (; g--; )
                e.lens[e.have++] = ht;
            }
          }
          if (e.mode === Be)
            break;
          if (e.lens[256] === 0) {
            n.msg = "invalid code -- missing end-of-block", e.mode = Be;
            break;
          }
          if (e.lenbits = 9, tt = { bits: e.lenbits }, X = Ea(ph, e.lens, 0, e.nlen, e.lencode, 0, e.work, tt), e.lenbits = tt.bits, X) {
            n.msg = "invalid literal/lengths set", e.mode = Be;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, tt = { bits: e.distbits }, X = Ea(gh, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, tt), e.distbits = tt.bits, X) {
            n.msg = "invalid distances set", e.mode = Be;
            break;
          }
          if (e.mode = bs, t === vs)
            break t;
        /* falls through */
        case bs:
          e.mode = ws;
        /* falls through */
        case ws:
          if (l >= 6 && h >= 258) {
            n.next_out = c, n.avail_out = h, n.next_in = a, n.avail_in = l, e.hold = d, e.bits = p, Nc(n, N), c = n.next_out, s = n.output, h = n.avail_out, a = n.next_in, i = n.input, l = n.avail_in, d = e.hold, p = e.bits, e.mode === Or && (e.back = -1);
            break;
          }
          for (e.back = 0; M = e.lencode[d & (1 << e.lenbits) - 1], L = M >>> 24, z = M >>> 16 & 255, H = M & 65535, !(L <= p); ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if (z && (z & 240) === 0) {
            for (D = L, rt = z, mt = H; M = e.lencode[mt + ((d & (1 << D + rt) - 1) >> D)], L = M >>> 24, z = M >>> 16 & 255, H = M & 65535, !(D + L <= p); ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            d >>>= D, p -= D, e.back += D;
          }
          if (d >>>= L, p -= L, e.back += L, e.length = H, z === 0) {
            e.mode = vu;
            break;
          }
          if (z & 32) {
            e.back = -1, e.mode = Or;
            break;
          }
          if (z & 64) {
            n.msg = "invalid literal/length code", e.mode = Be;
            break;
          }
          e.extra = z & 15, e.mode = du;
        /* falls through */
        case du:
          if (e.extra) {
            for (S = e.extra; p < S; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            e.length += d & (1 << e.extra) - 1, d >>>= e.extra, p -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = pu;
        /* falls through */
        case pu:
          for (; M = e.distcode[d & (1 << e.distbits) - 1], L = M >>> 24, z = M >>> 16 & 255, H = M & 65535, !(L <= p); ) {
            if (l === 0)
              break t;
            l--, d += i[a++] << p, p += 8;
          }
          if ((z & 240) === 0) {
            for (D = L, rt = z, mt = H; M = e.distcode[mt + ((d & (1 << D + rt) - 1) >> D)], L = M >>> 24, z = M >>> 16 & 255, H = M & 65535, !(D + L <= p); ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            d >>>= D, p -= D, e.back += D;
          }
          if (d >>>= L, p -= L, e.back += L, z & 64) {
            n.msg = "invalid distance code", e.mode = Be;
            break;
          }
          e.offset = H, e.extra = z & 15, e.mode = gu;
        /* falls through */
        case gu:
          if (e.extra) {
            for (S = e.extra; p < S; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            e.offset += d & (1 << e.extra) - 1, d >>>= e.extra, p -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            n.msg = "invalid distance too far back", e.mode = Be;
            break;
          }
          e.mode = mu;
        /* falls through */
        case mu:
          if (h === 0)
            break t;
          if (g = N - h, e.offset > g) {
            if (g = e.offset - g, g > e.whave && e.sane) {
              n.msg = "invalid distance too far back", e.mode = Be;
              break;
            }
            g > e.wnext ? (g -= e.wnext, F = e.wsize - g) : F = e.wnext - g, g > e.length && (g = e.length), P = e.window;
          } else
            P = s, F = c - e.offset, g = e.length;
          g > h && (g = h), h -= g, e.length -= g;
          do
            s[c++] = P[F++];
          while (--g);
          e.length === 0 && (e.mode = ws);
          break;
        case vu:
          if (h === 0)
            break t;
          s[c++] = e.length, h--, e.mode = ws;
          break;
        case No:
          if (e.wrap) {
            for (; p < 32; ) {
              if (l === 0)
                break t;
              l--, d |= i[a++] << p, p += 8;
            }
            if (N -= h, n.total_out += N, e.total += N, e.wrap & 4 && N && (n.adler = e.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            e.flags ? dr(e.check, s, N, c - N) : Vo(e.check, s, N, c - N)), N = h, e.wrap & 4 && (e.flags ? d : yu(d)) !== e.check) {
              n.msg = "incorrect data check", e.mode = Be;
              break;
            }
            d = 0, p = 0;
          }
          e.mode = bu;
        /* falls through */
        case bu:
          if (e.wrap && e.flags) {
            for (; p < 32; ) {
              if (l === 0)
                break t;
              l--, d += i[a++] << p, p += 8;
            }
            if (e.wrap & 4 && d !== (e.total & 4294967295)) {
              n.msg = "incorrect length check", e.mode = Be;
              break;
            }
            d = 0, p = 0;
          }
          e.mode = wu;
        /* falls through */
        case wu:
          X = Ec;
          break t;
        case Be:
          X = mh;
          break t;
        case bh:
          return vh;
        case wh:
        /* falls through */
        default:
          return Gn;
      }
  return n.next_out = c, n.avail_out = h, n.next_in = a, n.avail_in = l, e.hold = d, e.bits = p, (e.wsize || N !== n.avail_out && e.mode < Be && (e.mode < No || t !== Kl)) && Nh(n, n.output, n.next_out, N - n.avail_out), y -= n.avail_in, N -= n.avail_out, n.total_in += y, n.total_out += N, e.total += N, e.wrap & 4 && N && (n.adler = e.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  e.flags ? dr(e.check, s, N, n.next_out - N) : Vo(e.check, s, N, n.next_out - N)), n.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === Or ? 128 : 0) + (e.mode === bs || e.mode === Ao ? 256 : 0), (y === 0 && N === 0 || t === Kl) && X === _i && (X = jc), X;
}, Hc = (n) => {
  if (Ni(n))
    return Gn;
  let t = n.state;
  return t.window && (t.window = null), n.state = null, _i;
}, Wc = (n, t) => {
  if (Ni(n))
    return Gn;
  const e = n.state;
  return (e.wrap & 2) === 0 ? Gn : (e.head = t, t.done = !1, _i);
}, Gc = (n, t) => {
  const e = t.length;
  let i, s, a;
  return Ni(n) || (i = n.state, i.wrap !== 0 && i.mode !== Es) ? Gn : i.mode === Es && (s = 1, s = Vo(s, t, e, 0), s !== i.check) ? mh : (a = Nh(n, t, e, e), a ? (i.mode = bh, vh) : (i.havedict = 1, _i));
};
var Vc = xh, Yc = _h, Jc = yh, $c = qc, Xc = Ah, Kc = zc, Zc = Hc, Qc = Wc, t1 = Gc, e1 = "pako inflate (from Nodeca project)", gr = {
  inflateReset: Vc,
  inflateReset2: Yc,
  inflateResetKeep: Jc,
  inflateInit: $c,
  inflateInit2: Xc,
  inflate: Kc,
  inflateEnd: Zc,
  inflateGetHeader: Qc,
  inflateSetDictionary: t1,
  inflateInfo: e1
};
function n1() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var r1 = n1;
const Lh = Object.prototype.toString, {
  Z_NO_FLUSH: i1,
  Z_FINISH: _u,
  Z_OK: ta,
  Z_STREAM_END: ko,
  Z_NEED_DICT: Po,
  Z_STREAM_ERROR: a1,
  Z_DATA_ERROR: Au,
  Z_MEM_ERROR: s1,
  Z_BUF_ERROR: Nu
} = fh, o1 = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  to: ""
};
function Ba(n) {
  this.options = ch.assign({}, o1, n || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(n && n.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _c(), this.strm.avail_out = 0;
  let e = gr.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== ta)
    throw new Error(Yo[e]);
  if (this.header = new r1(), gr.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Jo.string2buf(t.dictionary) : Lh.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = gr.inflateSetDictionary(this.strm, t.dictionary), e !== ta)))
    throw new Error(Yo[e]);
}
Ba.prototype.push = function(n, t) {
  const e = this.strm, i = this.options.chunkSize, s = this.options.dictionary;
  let a, c, l;
  if (this.ended) return !1;
  for (t === ~~t ? c = t : c = t === !0 ? _u : i1, Lh.call(n) === "[object ArrayBuffer]" ? e.input = new Uint8Array(n) : e.input = n, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(i), e.next_out = 0, e.avail_out = i), a = gr.inflate(e, c), a === Po && s && (a = gr.inflateSetDictionary(e, s), a === ta ? a = gr.inflate(e, c) : a === Au && (a = Po)); e.avail_in > 0 && a === ko && e.state.wrap & 2 && e.state.flags !== 0 && e.input[e.next_in] !== 0; )
      gr.inflateReset(e), a = gr.inflate(e, c);
    switch (a) {
      case a1:
      case Au:
      case Po:
      case s1:
        return this.onEnd(a), this.ended = !0, !1;
    }
    if (l = e.avail_out, e.next_out && (e.avail_out === 0 || a === ko || c > 0))
      if (this.options.to === "string") {
        let h = Jo.utf8border(e.output, e.next_out), d = e.next_out - h, p = Jo.buf2string(e.output, h);
        e.next_out = d, e.avail_out = i - d, d && e.output.set(e.output.subarray(h, h + d), 0), this.onData(p);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out)), e.avail_out = 0, e.next_out = 0;
    if (!((a === ta || a === Nu) && l === 0)) {
      if (a === ko)
        return a = gr.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
      if (e.avail_in === 0) {
        if (c === _u)
          return a = gr.inflateEnd(this.strm), this.onEnd(a === ta ? Nu : a), this.ended = !0, !1;
        break;
      }
    }
  }
  return !0;
};
Ba.prototype.onData = function(n) {
  this.chunks.push(n);
};
Ba.prototype.onEnd = function(n) {
  n === ta && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ch.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
};
function l1(n, t) {
  const e = new Ba(t);
  if (e.push(n, !0), e.err) throw e.msg || Yo[e.err];
  return e.result;
}
var u1 = Ba, h1 = l1, f1 = {
  Inflate: u1,
  inflate: h1
};
const { Inflate: c1, inflate: d1 } = f1;
var Lu = c1, p1 = d1;
const Sh = [];
for (let n = 0; n < 256; n++) {
  let t = n;
  for (let e = 0; e < 8; e++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  Sh[n] = t;
}
const Su = 4294967295;
function g1(n, t, e) {
  let i = n;
  for (let s = 0; s < e; s++)
    i = Sh[(i ^ t[s]) & 255] ^ i >>> 8;
  return i;
}
function m1(n, t) {
  return (g1(Su, n, t) ^ Su) >>> 0;
}
function ku(n, t, e) {
  const i = n.readUint32(), s = m1(new Uint8Array(n.buffer, n.byteOffset + n.offset - t - 4, t), t);
  if (s !== i)
    throw new Error(`CRC mismatch for chunk ${e}. Expected ${i}, found ${s}`);
}
function kh(n, t, e) {
  for (let i = 0; i < e; i++)
    t[i] = n[i];
}
function Ph(n, t, e, i) {
  let s = 0;
  for (; s < i; s++)
    t[s] = n[s];
  for (; s < e; s++)
    t[s] = n[s] + t[s - i] & 255;
}
function Ih(n, t, e, i) {
  let s = 0;
  if (e.length === 0)
    for (; s < i; s++)
      t[s] = n[s];
  else
    for (; s < i; s++)
      t[s] = n[s] + e[s] & 255;
}
function Ch(n, t, e, i, s) {
  let a = 0;
  if (e.length === 0) {
    for (; a < s; a++)
      t[a] = n[a];
    for (; a < i; a++)
      t[a] = n[a] + (t[a - s] >> 1) & 255;
  } else {
    for (; a < s; a++)
      t[a] = n[a] + (e[a] >> 1) & 255;
    for (; a < i; a++)
      t[a] = n[a] + (t[a - s] + e[a] >> 1) & 255;
  }
}
function Fh(n, t, e, i, s) {
  let a = 0;
  if (e.length === 0) {
    for (; a < s; a++)
      t[a] = n[a];
    for (; a < i; a++)
      t[a] = n[a] + t[a - s] & 255;
  } else {
    for (; a < s; a++)
      t[a] = n[a] + e[a] & 255;
    for (; a < i; a++)
      t[a] = n[a] + v1(t[a - s], e[a], e[a - s]) & 255;
  }
}
function v1(n, t, e) {
  const i = n + t - e, s = Math.abs(i - n), a = Math.abs(i - t), c = Math.abs(i - e);
  return s <= a && s <= c ? n : a <= c ? t : e;
}
function b1(n, t, e, i, s, a) {
  switch (n) {
    case 0:
      kh(t, e, s);
      break;
    case 1:
      Ph(t, e, s, a);
      break;
    case 2:
      Ih(t, e, i, s);
      break;
    case 3:
      Ch(t, e, i, s, a);
      break;
    case 4:
      Fh(t, e, i, s, a);
      break;
    default:
      throw new Error(`Unsupported filter: ${n}`);
  }
}
const w1 = new Uint16Array([255]), y1 = new Uint8Array(w1.buffer), x1 = y1[0] === 255;
function _1(n) {
  const { data: t, width: e, height: i, channels: s, depth: a } = n, c = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    // Pass 1
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    // Pass 2
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    // Pass 3
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    // Pass 4
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    // Pass 5
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    // Pass 6
    { x: 0, y: 1, xStep: 1, yStep: 2 }
    // Pass 7
  ], l = Math.ceil(a / 8) * s, h = new Uint8Array(i * e * l);
  let d = 0;
  for (let p = 0; p < 7; p++) {
    const y = c[p], N = Math.ceil((e - y.x) / y.xStep), g = Math.ceil((i - y.y) / y.yStep);
    if (N <= 0 || g <= 0)
      continue;
    const F = N * l, P = new Uint8Array(F);
    for (let M = 0; M < g; M++) {
      const L = t[d++], z = t.subarray(d, d + F);
      d += F;
      const H = new Uint8Array(F);
      b1(L, z, H, P, F, l), P.set(H);
      for (let D = 0; D < N; D++) {
        const rt = y.x + D * y.xStep, mt = y.y + M * y.yStep;
        if (!(rt >= e || mt >= i))
          for (let ht = 0; ht < l; ht++)
            h[(mt * e + rt) * l + ht] = H[D * l + ht];
      }
    }
  }
  if (a === 16) {
    const p = new Uint16Array(h.buffer);
    if (x1)
      for (let y = 0; y < p.length; y++)
        p[y] = A1(p[y]);
    return p;
  } else
    return h;
}
function A1(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const N1 = new Uint16Array([255]), L1 = new Uint8Array(N1.buffer), S1 = L1[0] === 255, k1 = new Uint8Array(0);
function Pu(n) {
  const { data: t, width: e, height: i, channels: s, depth: a } = n, c = Math.ceil(a / 8) * s, l = Math.ceil(a / 8 * s * e), h = new Uint8Array(i * l);
  let d = k1, p = 0, y, N;
  for (let g = 0; g < i; g++) {
    switch (y = t.subarray(p + 1, p + 1 + l), N = h.subarray(g * l, (g + 1) * l), t[p]) {
      case 0:
        kh(y, N, l);
        break;
      case 1:
        Ph(y, N, l, c);
        break;
      case 2:
        Ih(y, N, d, l);
        break;
      case 3:
        Ch(y, N, d, l, c);
        break;
      case 4:
        Fh(y, N, d, l, c);
        break;
      default:
        throw new Error(`Unsupported filter: ${t[p]}`);
    }
    d = N, p += l + 1;
  }
  if (a === 16) {
    const g = new Uint16Array(h.buffer);
    if (S1)
      for (let F = 0; F < g.length; F++)
        g[F] = P1(g[F]);
    return g;
  } else
    return h;
}
function P1(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const Ls = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function Iu(n) {
  if (!I1(n.readBytes(Ls.length)))
    throw new Error("wrong PNG signature");
}
function I1(n) {
  if (n.length < Ls.length)
    return !1;
  for (let t = 0; t < Ls.length; t++)
    if (n[t] !== Ls[t])
      return !1;
  return !0;
}
const C1 = "tEXt", F1 = 0, Eh = new TextDecoder("latin1");
function E1(n) {
  if (j1(n), n.length === 0 || n.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const O1 = /^[\u0000-\u00FF]*$/;
function j1(n) {
  if (!O1.test(n))
    throw new Error("invalid latin1 text");
}
function B1(n, t, e) {
  const i = Oh(t);
  n[i] = M1(t, e - i.length - 1);
}
function Oh(n) {
  for (n.mark(); n.readByte() !== F1; )
    ;
  const t = n.offset;
  n.reset();
  const e = Eh.decode(n.readBytes(t - n.offset - 1));
  return n.skip(1), E1(e), e;
}
function M1(n, t) {
  return Eh.decode(n.readBytes(t));
}
const Mn = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, Io = {
  UNKNOWN: -1,
  DEFLATE: 0
}, Cu = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, Co = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, ys = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, Fo = {
  SOURCE: 0,
  OVER: 1
};
class T1 extends nl {
  _checkCrc;
  _inflator;
  _png;
  _apng;
  _end;
  _hasPalette;
  _palette;
  _hasTransparency;
  _transparency;
  _compressionMethod;
  _filterMethod;
  _interlaceMethod;
  _colorType;
  _isAnimated;
  _numberOfFrames;
  _numberOfPlays;
  _frames;
  _writingDataChunks;
  constructor(t, e = {}) {
    super(t);
    const { checkCrc: i = !1 } = e;
    this._checkCrc = i, this._inflator = new Lu(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    }, this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = Io.UNKNOWN, this._filterMethod = Cu.UNKNOWN, this._interlaceMethod = Co.UNKNOWN, this._colorType = Mn.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (Iu(this); !this._end; ) {
      const t = this.readUint32(), e = this.readChars(4);
      this.decodeChunk(t, e);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (Iu(this); !this._end; ) {
      const t = this.readUint32(), e = this.readChars(4);
      this.decodeApngChunk(t, e);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, e) {
    const i = this.offset;
    switch (e) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(t);
        break;
      case "IDAT":
        this.decodeIDAT(t);
        break;
      case "IEND":
        this._end = !0;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(t);
        break;
      case "iCCP":
        this.decodeiCCP(t);
        break;
      case C1:
        B1(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${e}`);
    this._checkCrc ? ku(this, t + 4, e) : this.skip(4);
  }
  decodeApngChunk(t, e) {
    const i = this.offset;
    switch (e !== "fdAT" && e !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), e) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(t);
        break;
      default:
        this.decodeChunk(t, e), this.offset = i + t;
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${e}`);
    this._checkCrc ? ku(this, t + 4, e) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = R1(this.readUint8());
    const e = this.readUint8();
    this._colorType = e;
    let i;
    switch (e) {
      case Mn.GREYSCALE:
        i = 1;
        break;
      case Mn.TRUECOLOUR:
        i = 3;
        break;
      case Mn.INDEXED_COLOUR:
        i = 1;
        break;
      case Mn.GREYSCALE_ALPHA:
        i = 2;
        break;
      case Mn.TRUECOLOUR_ALPHA:
        i = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case Mn.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${e}`);
    }
    if (this._png.channels = i, this._compressionMethod = this.readUint8(), this._compressionMethod !== Io.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = !0;
  }
  decodeFCTL() {
    const t = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0)
    };
    this._frames.push(t);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(t) {
    if (t % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);
    const e = t / 3;
    this._hasPalette = !0;
    const i = [];
    this._palette = i;
    for (let s = 0; s < e; s++)
      i.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const e = t, i = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, i, e)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let e = t, i = this.offset + this.byteOffset;
    if (i += 4, e -= 4, this._inflator.push(new Uint8Array(this.buffer, i, e)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case Mn.GREYSCALE:
      case Mn.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let e = 0; e < t / 2; e++)
          this._transparency[e] = this.readUint16();
        break;
      }
      case Mn.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let e = 0;
        for (; e < t; e++) {
          const i = this.readByte();
          this._palette[e].push(i);
        }
        for (; e < this._palette.length; e++)
          this._palette[e].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case Mn.UNKNOWN:
      case Mn.GREYSCALE_ALPHA:
      case Mn.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const e = Oh(this), i = this.readUint8();
    if (i !== Io.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${i}`);
    const s = this.readBytes(t - e.length - 2);
    this._png.iccEmbeddedProfile = {
      name: e,
      profile: p1(s)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), e = this.readUint32(), i = this.readByte();
    this._png.resolution = { x: t, y: e, unit: i };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const e = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, i = this._frames.at(t);
      if (i) {
        if (i.data = Pu({
          data: i.data,
          width: i.width,
          height: i.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || i.xOffset === 0 && i.yOffset === 0 && i.width === this._png.width && i.height === this._png.height)
          e.data = i.data;
        else {
          const s = this._apng.frames.at(t - 1);
          this.disposeFrame(i, s, e), this.addFrameDataToCanvas(e, i);
        }
        this._apng.frames.push(e);
      }
    }
    return this._apng;
  }
  disposeFrame(t, e, i) {
    switch (t.disposeOp) {
      case ys.NONE:
        break;
      case ys.BACKGROUND:
        for (let s = 0; s < this._png.height; s++)
          for (let a = 0; a < this._png.width; a++) {
            const c = (s * t.width + a) * this._png.channels;
            for (let l = 0; l < this._png.channels; l++)
              i.data[c + l] = 0;
          }
        break;
      case ys.PREVIOUS:
        i.data.set(e.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, e) {
    const i = 1 << this._png.depth, s = (a, c) => {
      const l = ((a + e.yOffset) * this._png.width + e.xOffset + c) * this._png.channels, h = (a * e.width + c) * this._png.channels;
      return { index: l, frameIndex: h };
    };
    switch (e.blendOp) {
      case Fo.SOURCE:
        for (let a = 0; a < e.height; a++)
          for (let c = 0; c < e.width; c++) {
            const { index: l, frameIndex: h } = s(a, c);
            for (let d = 0; d < this._png.channels; d++)
              t.data[l + d] = e.data[h + d];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case Fo.OVER:
        for (let a = 0; a < e.height; a++)
          for (let c = 0; c < e.width; c++) {
            const { index: l, frameIndex: h } = s(a, c);
            for (let d = 0; d < this._png.channels; d++) {
              const p = e.data[h + this._png.channels - 1] / i, y = d % (this._png.channels - 1) === 0 ? 1 : e.data[h + d], N = Math.floor(p * y + (1 - p) * t.data[l + d]);
              t.data[l + d] += N;
            }
          }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    if (this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    const t = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== Cu.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Co.NO_INTERLACE)
      this._png.data = Pu({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === Co.ADAM7)
      this._png.data = _1({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
  }
  pushDataToFrame() {
    const t = this._inflator.result, e = this._frames.at(-1);
    e ? e.data = t : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: ys.NONE,
      blendOp: Fo.SOURCE,
      data: t
    }), this._inflator = new Lu(), this._writingDataChunks = !1;
  }
}
function R1(n) {
  if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16)
    throw new Error(`invalid bit depth: ${n}`);
  return n;
}
var Fu;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
})(Fu || (Fu = {}));
function D1(n, t) {
  return new T1(n, t).decode();
}
/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 4.2.1 Built on 2026-03-17T11:11:27.057Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2025 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2025 yWorks GmbH, http://www.yworks.com
 *               2015-2025 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */
var $t = /* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
})();
function Eo() {
  $t.console && typeof $t.console.log == "function" && $t.console.log.apply($t.console, arguments);
}
var Le = { log: Eo, warn: function(n) {
  $t.console && (typeof $t.console.warn == "function" ? $t.console.warn.apply($t.console, arguments) : Eo.call(null, arguments));
}, error: function(n) {
  $t.console && (typeof $t.console.error == "function" ? $t.console.error.apply($t.console, arguments) : Eo(n));
} };
function Oo(n, t, e) {
  var i = new XMLHttpRequest();
  i.open("GET", n), i.responseType = "blob", i.onload = function() {
    bi(i.response, t, e);
  }, i.onerror = function() {
    Le.error("could not download file");
  }, i.send();
}
function Eu(n) {
  var t = new XMLHttpRequest();
  t.open("HEAD", n, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function xs(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(t);
  }
}
var bi = $t.saveAs || ((typeof window > "u" ? "undefined" : xe(window)) !== "object" || window !== $t ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, t, e) {
  var i = $t.URL || $t.webkitURL, s = document.createElement("a");
  t = t || n.name || "download", s.download = t, s.rel = "noopener", typeof n == "string" ? (s.href = n, s.origin !== location.origin ? Eu(s.href) ? Oo(n, t, e) : xs(s, s.target = "_blank") : xs(s)) : (s.href = i.createObjectURL(n), setTimeout(function() {
    i.revokeObjectURL(s.href);
  }, 4e4), setTimeout(function() {
    xs(s);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, t, e) {
  if (t = t || n.name || "download", typeof n == "string") if (Eu(n)) Oo(n, t, e);
  else {
    var i = document.createElement("a");
    i.href = n, i.target = "_blank", setTimeout(function() {
      xs(i);
    });
  }
  else navigator.msSaveOrOpenBlob((function(s, a) {
    return a === void 0 ? a = { autoBom: !1 } : xe(a) !== "object" && (Le.warn("Deprecated: Expected third argument to be a object"), a = { autoBom: !a }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(s.type) ? new Blob(["\uFEFF", s], { type: s.type }) : s;
  })(n, e), t);
} : function(n, t, e, i) {
  if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof n == "string") return Oo(n, t, e);
  var s = n.type === "application/octet-stream", a = /constructor/i.test($t.HTMLElement) || $t.safari, c = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((c || s && a) && (typeof FileReader > "u" ? "undefined" : xe(FileReader)) === "object") {
    var l = new FileReader();
    l.onloadend = function() {
      var p = l.result;
      p = c ? p : p.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = p : location = p, i = null;
    }, l.readAsDataURL(n);
  } else {
    var h = $t.URL || $t.webkitURL, d = h.createObjectURL(n);
    i ? i.location = d : location.href = d, i = null, setTimeout(function() {
      h.revokeObjectURL(d);
    }, 4e4);
  }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */
function jh(n) {
  var t;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var e = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(l) {
    return [parseInt(l[1]), parseInt(l[2]), parseInt(l[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(l) {
    return [parseInt(l[1], 16), parseInt(l[2], 16), parseInt(l[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(l) {
    return [parseInt(l[1] + l[1], 16), parseInt(l[2] + l[2], 16), parseInt(l[3] + l[3], 16)];
  } }], i = 0; i < e.length; i++) {
    var s = e[i].re, a = e[i].process, c = s.exec(n);
    c && (t = a(c), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var l = this.r.toString(16), h = this.g.toString(16), d = this.b.toString(16);
    return l.length == 1 && (l = "0" + l), h.length == 1 && (h = "0" + h), d.length == 1 && (d = "0" + d), "#" + l + h + d;
  };
}
var Ss = $t.atob.bind($t), Ou = $t.btoa.bind($t);
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */
function jo(n, t) {
  var e = n[0], i = n[1], s = n[2], a = n[3];
  e = gn(e, i, s, a, t[0], 7, -680876936), a = gn(a, e, i, s, t[1], 12, -389564586), s = gn(s, a, e, i, t[2], 17, 606105819), i = gn(i, s, a, e, t[3], 22, -1044525330), e = gn(e, i, s, a, t[4], 7, -176418897), a = gn(a, e, i, s, t[5], 12, 1200080426), s = gn(s, a, e, i, t[6], 17, -1473231341), i = gn(i, s, a, e, t[7], 22, -45705983), e = gn(e, i, s, a, t[8], 7, 1770035416), a = gn(a, e, i, s, t[9], 12, -1958414417), s = gn(s, a, e, i, t[10], 17, -42063), i = gn(i, s, a, e, t[11], 22, -1990404162), e = gn(e, i, s, a, t[12], 7, 1804603682), a = gn(a, e, i, s, t[13], 12, -40341101), s = gn(s, a, e, i, t[14], 17, -1502002290), e = mn(e, i = gn(i, s, a, e, t[15], 22, 1236535329), s, a, t[1], 5, -165796510), a = mn(a, e, i, s, t[6], 9, -1069501632), s = mn(s, a, e, i, t[11], 14, 643717713), i = mn(i, s, a, e, t[0], 20, -373897302), e = mn(e, i, s, a, t[5], 5, -701558691), a = mn(a, e, i, s, t[10], 9, 38016083), s = mn(s, a, e, i, t[15], 14, -660478335), i = mn(i, s, a, e, t[4], 20, -405537848), e = mn(e, i, s, a, t[9], 5, 568446438), a = mn(a, e, i, s, t[14], 9, -1019803690), s = mn(s, a, e, i, t[3], 14, -187363961), i = mn(i, s, a, e, t[8], 20, 1163531501), e = mn(e, i, s, a, t[13], 5, -1444681467), a = mn(a, e, i, s, t[2], 9, -51403784), s = mn(s, a, e, i, t[7], 14, 1735328473), e = vn(e, i = mn(i, s, a, e, t[12], 20, -1926607734), s, a, t[5], 4, -378558), a = vn(a, e, i, s, t[8], 11, -2022574463), s = vn(s, a, e, i, t[11], 16, 1839030562), i = vn(i, s, a, e, t[14], 23, -35309556), e = vn(e, i, s, a, t[1], 4, -1530992060), a = vn(a, e, i, s, t[4], 11, 1272893353), s = vn(s, a, e, i, t[7], 16, -155497632), i = vn(i, s, a, e, t[10], 23, -1094730640), e = vn(e, i, s, a, t[13], 4, 681279174), a = vn(a, e, i, s, t[0], 11, -358537222), s = vn(s, a, e, i, t[3], 16, -722521979), i = vn(i, s, a, e, t[6], 23, 76029189), e = vn(e, i, s, a, t[9], 4, -640364487), a = vn(a, e, i, s, t[12], 11, -421815835), s = vn(s, a, e, i, t[15], 16, 530742520), e = bn(e, i = vn(i, s, a, e, t[2], 23, -995338651), s, a, t[0], 6, -198630844), a = bn(a, e, i, s, t[7], 10, 1126891415), s = bn(s, a, e, i, t[14], 15, -1416354905), i = bn(i, s, a, e, t[5], 21, -57434055), e = bn(e, i, s, a, t[12], 6, 1700485571), a = bn(a, e, i, s, t[3], 10, -1894986606), s = bn(s, a, e, i, t[10], 15, -1051523), i = bn(i, s, a, e, t[1], 21, -2054922799), e = bn(e, i, s, a, t[8], 6, 1873313359), a = bn(a, e, i, s, t[15], 10, -30611744), s = bn(s, a, e, i, t[6], 15, -1560198380), i = bn(i, s, a, e, t[13], 21, 1309151649), e = bn(e, i, s, a, t[4], 6, -145523070), a = bn(a, e, i, s, t[11], 10, -1120210379), s = bn(s, a, e, i, t[2], 15, 718787259), i = bn(i, s, a, e, t[9], 21, -343485551), n[0] = Kr(e, n[0]), n[1] = Kr(i, n[1]), n[2] = Kr(s, n[2]), n[3] = Kr(a, n[3]);
}
function Ms(n, t, e, i, s, a) {
  return t = Kr(Kr(t, n), Kr(i, a)), Kr(t << s | t >>> 32 - s, e);
}
function gn(n, t, e, i, s, a, c) {
  return Ms(t & e | ~t & i, n, t, s, a, c);
}
function mn(n, t, e, i, s, a, c) {
  return Ms(t & i | e & ~i, n, t, s, a, c);
}
function vn(n, t, e, i, s, a, c) {
  return Ms(t ^ e ^ i, n, t, s, a, c);
}
function bn(n, t, e, i, s, a, c) {
  return Ms(e ^ (t | ~i), n, t, s, a, c);
}
function Bh(n) {
  var t, e = n.length, i = [1732584193, -271733879, -1732584194, 271733878];
  for (t = 64; t <= n.length; t += 64) jo(i, q1(n.substring(t - 64, t)));
  n = n.substring(t - 64);
  var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (t = 0; t < n.length; t++) s[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
  if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (jo(i, s), t = 0; t < 16; t++) s[t] = 0;
  return s[14] = 8 * e, jo(i, s), i;
}
function q1(n) {
  var t, e = [];
  for (t = 0; t < 64; t += 4) e[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
  return e;
}
var ju = "0123456789abcdef".split("");
function U1(n) {
  for (var t = "", e = 0; e < 4; e++) t += ju[n >> 8 * e + 4 & 15] + ju[n >> 8 * e & 15];
  return t;
}
function z1(n) {
  return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function $o(n) {
  return Bh(n).map(z1).join("");
}
var H1 = (function(n) {
  for (var t = 0; t < n.length; t++) n[t] = U1(n[t]);
  return n.join("");
})(Bh("hello")) != "5d41402abc4b2a76b9719d911017c592";
function Kr(n, t) {
  if (H1) {
    var e = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
  }
  return n + t & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */
function Xo(n, t) {
  var e, i, s, a;
  if (n !== e) {
    for (var c = (s = n, a = 1 + (256 / n.length | 0), new Array(a + 1).join(s)), l = [], h = 0; h < 256; h++) l[h] = h;
    var d = 0;
    for (h = 0; h < 256; h++) {
      var p = l[h];
      d = (d + p + c.charCodeAt(h)) % 256, l[h] = l[d], l[d] = p;
    }
    e = n, i = l;
  } else l = i;
  var y = t.length, N = 0, g = 0, F = "";
  for (h = 0; h < y; h++) g = (g + (p = l[N = (N + 1) % 256])) % 256, l[N] = l[g], l[g] = p, c = l[(l[N] + l[g]) % 256], F += String.fromCharCode(t.charCodeAt(h) ^ c);
  return F;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */
var Bu = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function Ki(n, t, e, i) {
  this.v = 1, this.r = 2;
  var s = 192;
  n.forEach(function(l) {
    if (Bu.perm !== void 0) throw new Error("Invalid permission: " + l);
    s += Bu[l];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var a = (t + this.padding).substr(0, 32), c = (e + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(a, c), this.P = -(1 + (255 ^ s)), this.encryptionKey = $o(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = Xo(this.encryptionKey, this.padding);
}
function Zi(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var t = "", e = n.length, i = 0; i < e; i++) {
    var s = n.charCodeAt(i);
    t += s < 33 || s === 35 || s === 37 || s === 40 || s === 41 || s === 47 || s === 60 || s === 62 || s === 91 || s === 93 || s === 123 || s === 125 || s > 126 ? "#" + ("0" + s.toString(16)).slice(-2) : n[i];
  }
  return t;
}
function Mu(n) {
  if (xe(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var t = {};
  this.subscribe = function(e, i, s) {
    if (s = s || !1, typeof e != "string" || typeof i != "function" || typeof s != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    t.hasOwnProperty(e) || (t[e] = {});
    var a = Math.random().toString(35);
    return t[e][a] = [i, !!s], a;
  }, this.unsubscribe = function(e) {
    for (var i in t) if (t[i][e]) return delete t[i][e], Object.keys(t[i]).length === 0 && delete t[i], !0;
    return !1;
  }, this.publish = function(e) {
    if (t.hasOwnProperty(e)) {
      var i = Array.prototype.slice.call(arguments, 1), s = [];
      for (var a in t[e]) {
        var c = t[e][a];
        try {
          c[0].apply(n, i);
        } catch (l) {
          $t.console && Le.error("jsPDF PubSub Error", l.message, l);
        }
        c[1] && s.push(a);
      }
      s.length && s.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return t;
  };
}
function Os(n) {
  if (!(this instanceof Os)) return new Os(n);
  var t = "opacity,stroke-opacity".split(",");
  for (var e in n) n.hasOwnProperty(e) && t.indexOf(e) >= 0 && (this[e] = n[e]);
  this.id = "", this.objectNumber = -1;
}
function Mh(n, t) {
  this.gState = n, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function wi(n, t, e, i, s) {
  if (!(this instanceof wi)) return new wi(n, t, e, i, s);
  this.type = n === "axial" ? 2 : 3, this.coords = t, this.colors = e, Mh.call(this, i, s);
}
function Qi(n, t, e, i, s) {
  if (!(this instanceof Qi)) return new Qi(n, t, e, i, s);
  this.boundingBox = n, this.xStep = t, this.yStep = e, this.stream = "", this.cloneIndex = 0, Mh.call(this, i, s);
}
function Tt(n) {
  var t, e = typeof arguments[0] == "string" ? arguments[0] : "p", i = arguments[1], s = arguments[2], a = arguments[3], c = [], l = 1, h = 16, d = "S", p = null;
  xe(n = n || {}) === "object" && (e = n.orientation, i = n.unit || i, s = n.format || s, a = n.compress || n.compressPdf || a, (p = n.encryption || null) !== null && (p.userPassword = p.userPassword || "", p.ownerPassword = p.ownerPassword || "", p.userPermissions = p.userPermissions || []), l = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (t = n.precision), n.floatPrecision !== void 0 && (h = n.floatPrecision), d = n.defaultPathOperation || "S"), c = n.filters || (a === !0 ? ["FlateEncode"] : c), i = i || "mm", e = ("" + (e || "P")).toLowerCase();
  var y = n.putOnlyUsedFonts || !1, N = {}, g = { internal: {}, __private__: {} };
  g.__private__.PubSub = Mu;
  var F = "1.3", P = g.__private__.getPdfVersion = function() {
    return F;
  };
  g.__private__.setPdfVersion = function(u) {
    F = u;
  };
  var M = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  g.__private__.getPageFormats = function() {
    return M;
  };
  var L = g.__private__.getPageFormat = function(u) {
    return M[u];
  };
  s = s || "a4";
  var z = "compat", H = "advanced", D = z;
  function rt() {
    this.saveGraphicsState(), I(new Vt(ne, 0, 0, -ne, 0, ai() * ne).toString() + " cm"), this.setFontSize(this.getFontSize() / ne), d = "n", D = H;
  }
  function mt() {
    this.restoreGraphicsState(), d = "S", D = z;
  }
  var ht = g.__private__.combineFontStyleAndFontWeight = function(u, v) {
    if (u == "bold" && v == "normal" || u == "bold" && v == 400 || u == "normal" && v == "italic" || u == "bold" && v == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return v && (u = v == 400 || v === "normal" ? u === "italic" ? "italic" : "normal" : v != 700 && v !== "bold" || u !== "normal" ? (v == 700 ? "bold" : v) + "" + u : "bold"), u;
  };
  g.advancedAPI = function(u) {
    var v = D === z;
    return v && rt.call(this), typeof u != "function" || (u(this), v && mt.call(this)), this;
  }, g.compatAPI = function(u) {
    var v = D === H;
    return v && mt.call(this), typeof u != "function" || (u(this), v && rt.call(this)), this;
  }, g.isAdvancedAPI = function() {
    return D === H;
  };
  var X, T = function(u) {
    if (D !== H) throw new Error(u + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, tt = g.roundToPrecision = g.__private__.roundToPrecision = function(u, v) {
    var C = t || v;
    if (isNaN(u) || isNaN(C)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return u.toFixed(C).replace(/0+$/, "");
  };
  X = g.hpf = g.__private__.hpf = typeof h == "number" ? function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return tt(u, h);
  } : h === "smart" ? function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return tt(u, u > -1 && u < 1 ? 16 : 5);
  } : function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return tt(u, 16);
  };
  var S = g.f2 = g.__private__.f2 = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f2");
    return tt(u, 2);
  }, j = g.__private__.f3 = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.f3");
    return tt(u, 3);
  }, W = g.scale = g.__private__.scale = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.scale");
    return D === z ? u * ne : D === H ? u : void 0;
  }, U = function(u) {
    return W((function(v) {
      return D === z ? ai() - v : D === H ? v : void 0;
    })(u));
  };
  g.__private__.setPrecision = g.setPrecision = function(u) {
    typeof parseInt(u, 10) == "number" && (t = parseInt(u, 10));
  };
  var it, ot = "00000000000000000000000000000000", ft = g.__private__.getFileId = function() {
    return ot;
  }, nt = g.__private__.setFileId = function(u) {
    return ot = u !== void 0 && /^[a-fA-F0-9]{32}$/.test(u) ? u.toUpperCase() : ot.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), p !== null && (sn = new Ki(p.userPermissions, p.userPassword, p.ownerPassword, ot)), ot;
  };
  g.setFileId = function(u) {
    return nt(u), this;
  }, g.getFileId = function() {
    return ft();
  };
  var dt = g.__private__.convertDateToPDFDate = function(u) {
    var v = u.getTimezoneOffset(), C = v < 0 ? "+" : "-", q = Math.floor(Math.abs(v / 60)), $ = Math.abs(v % 60), lt = [C, R(q), "'", R($), "'"].join("");
    return ["D:", u.getFullYear(), R(u.getMonth() + 1), R(u.getDate()), R(u.getHours()), R(u.getMinutes()), R(u.getSeconds()), lt].join("");
  }, At = g.__private__.convertPDFDateToDate = function(u) {
    var v = parseInt(u.substr(2, 4), 10), C = parseInt(u.substr(6, 2), 10) - 1, q = parseInt(u.substr(8, 2), 10), $ = parseInt(u.substr(10, 2), 10), lt = parseInt(u.substr(12, 2), 10), vt = parseInt(u.substr(14, 2), 10);
    return new Date(v, C, q, $, lt, vt, 0);
  }, wt = g.__private__.setCreationDate = function(u) {
    var v;
    if (u === void 0 && (u = /* @__PURE__ */ new Date()), u instanceof Date) v = dt(u);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(u)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      v = u;
    }
    return it = v;
  }, _ = g.__private__.getCreationDate = function(u) {
    var v = it;
    return u === "jsDate" && (v = At(it)), v;
  };
  g.setCreationDate = function(u) {
    return wt(u), this;
  }, g.getCreationDate = function(u) {
    return _(u);
  };
  var B, R = g.__private__.padd2 = function(u) {
    return ("0" + parseInt(u)).slice(-2);
  }, G = g.__private__.padd2Hex = function(u) {
    return ("00" + (u = u.toString())).substr(u.length);
  }, J = 0, Z = [], at = [], st = 0, gt = [], _t = [], kt = !1, St = at;
  g.__private__.setCustomOutputDestination = function(u) {
    kt = !0, St = u;
  };
  var Dt = function(u) {
    kt || (St = u);
  };
  g.__private__.resetCustomOutputDestination = function() {
    kt = !1, St = at;
  };
  var I = g.__private__.out = function(u) {
    return u = u.toString(), st += u.length + 1, St.push(u), St;
  }, Lt = g.__private__.write = function(u) {
    return I(arguments.length === 1 ? u.toString() : Array.prototype.join.call(arguments, " "));
  }, ae = g.__private__.getArrayBuffer = function(u) {
    for (var v = u.length, C = new ArrayBuffer(v), q = new Uint8Array(C); v--; ) q[v] = u.charCodeAt(v);
    return C;
  }, Ht = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  g.__private__.getStandardFonts = function() {
    return Ht;
  };
  var yt = n.fontSize || 16;
  g.__private__.setFontSize = g.setFontSize = function(u) {
    return yt = D === H ? u / ne : u, this;
  };
  var Wt, It = g.__private__.getFontSize = g.getFontSize = function() {
    return D === z ? yt : yt * ne;
  }, zt = n.R2L || !1;
  g.__private__.setR2L = g.setR2L = function(u) {
    return zt = u, this;
  }, g.__private__.getR2L = g.getR2L = function() {
    return zt;
  };
  var qt, ve = g.__private__.setZoomMode = function(u) {
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(u)) Wt = u;
    else if (isNaN(u)) {
      if ([void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(u) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + u + '" is not recognized.');
      Wt = u;
    } else Wt = parseInt(u, 10);
  };
  g.__private__.getZoomMode = function() {
    return Wt;
  };
  var ue, Zt = g.__private__.setPageMode = function(u) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(u) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + u + '" is not recognized.');
    qt = u;
  };
  g.__private__.getPageMode = function() {
    return qt;
  };
  var fe = g.__private__.setLayoutMode = function(u) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(u) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + u + '" is not recognized.');
    ue = u;
  };
  g.__private__.getLayoutMode = function() {
    return ue;
  }, g.__private__.setDisplayMode = g.setDisplayMode = function(u, v, C) {
    return ve(u), fe(v), Zt(C), this;
  };
  var he = { title: "", subject: "", author: "", keywords: "", creator: "" };
  g.__private__.getDocumentProperty = function(u) {
    if (Object.keys(he).indexOf(u) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return he[u];
  }, g.__private__.getDocumentProperties = function() {
    return he;
  }, g.__private__.setDocumentProperties = g.setProperties = g.setDocumentProperties = function(u) {
    for (var v in he) he.hasOwnProperty(v) && u[v] && (he[v] = u[v]);
    return this;
  }, g.__private__.setDocumentProperty = function(u, v) {
    if (Object.keys(he).indexOf(u) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return he[u] = v;
  };
  var Bt, ne, Rt, ze, ge, se = {}, oe = {}, Oe = [], Ut = {}, Se = {}, Yt = {}, Qt = {}, je = null, le = 0, Gt = [], be = new Mu(g), Qr = n.hotfixes || [], hn = {}, br = {}, rr = [], Vt = function u(v, C, q, $, lt, vt) {
    if (!(this instanceof u)) return new u(v, C, q, $, lt, vt);
    isNaN(v) && (v = 1), isNaN(C) && (C = 0), isNaN(q) && (q = 0), isNaN($) && ($ = 1), isNaN(lt) && (lt = 0), isNaN(vt) && (vt = 0), this._matrix = [v, C, q, $, lt, vt];
  };
  Object.defineProperty(Vt.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(u) {
    this._matrix[0] = u;
  } }), Object.defineProperty(Vt.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(u) {
    this._matrix[1] = u;
  } }), Object.defineProperty(Vt.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(u) {
    this._matrix[2] = u;
  } }), Object.defineProperty(Vt.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(u) {
    this._matrix[3] = u;
  } }), Object.defineProperty(Vt.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(u) {
    this._matrix[4] = u;
  } }), Object.defineProperty(Vt.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(u) {
    this._matrix[5] = u;
  } }), Object.defineProperty(Vt.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(u) {
    this._matrix[0] = u;
  } }), Object.defineProperty(Vt.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(u) {
    this._matrix[1] = u;
  } }), Object.defineProperty(Vt.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(u) {
    this._matrix[2] = u;
  } }), Object.defineProperty(Vt.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(u) {
    this._matrix[3] = u;
  } }), Object.defineProperty(Vt.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(u) {
    this._matrix[4] = u;
  } }), Object.defineProperty(Vt.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(u) {
    this._matrix[5] = u;
  } }), Object.defineProperty(Vt.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(Vt.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(Vt.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(Vt.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), Vt.prototype.join = function(u) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(X).join(u);
  }, Vt.prototype.multiply = function(u) {
    var v = u.sx * this.sx + u.shy * this.shx, C = u.sx * this.shy + u.shy * this.sy, q = u.shx * this.sx + u.sy * this.shx, $ = u.shx * this.shy + u.sy * this.sy, lt = u.tx * this.sx + u.ty * this.shx + this.tx, vt = u.tx * this.shy + u.ty * this.sy + this.ty;
    return new Vt(v, C, q, $, lt, vt);
  }, Vt.prototype.decompose = function() {
    var u = this.sx, v = this.shy, C = this.shx, q = this.sy, $ = this.tx, lt = this.ty, vt = Math.sqrt(u * u + v * v), Et = (u /= vt) * C + (v /= vt) * q;
    C -= u * Et, q -= v * Et;
    var Ft = Math.sqrt(C * C + q * q);
    return Et /= Ft, u * (q /= Ft) < v * (C /= Ft) && (u = -u, v = -v, Et = -Et, vt = -vt), { scale: new Vt(vt, 0, 0, Ft, 0, 0), translate: new Vt(1, 0, 0, 1, $, lt), rotate: new Vt(u, v, -v, u, 0, 0), skew: new Vt(1, 0, Et, 1, 0, 0) };
  }, Vt.prototype.toString = function(u) {
    return this.join(" ");
  }, Vt.prototype.inversed = function() {
    var u = this.sx, v = this.shy, C = this.shx, q = this.sy, $ = this.tx, lt = this.ty, vt = 1 / (u * q - v * C), Et = q * vt, Ft = -v * vt, Xt = -C * vt, te = u * vt;
    return new Vt(Et, Ft, Xt, te, -Et * $ - Xt * lt, -Ft * $ - te * lt);
  }, Vt.prototype.applyToPoint = function(u) {
    var v = u.x * this.sx + u.y * this.shx + this.tx, C = u.x * this.shy + u.y * this.sy + this.ty;
    return new ii(v, C);
  }, Vt.prototype.applyToRectangle = function(u) {
    var v = this.applyToPoint(u), C = this.applyToPoint(new ii(u.x + u.w, u.y + u.h));
    return new pa(v.x, v.y, C.x - v.x, C.y - v.y);
  }, Vt.prototype.clone = function() {
    var u = this.sx, v = this.shy, C = this.shx, q = this.sy, $ = this.tx, lt = this.ty;
    return new Vt(u, v, C, q, $, lt);
  }, g.Matrix = Vt;
  var wr = g.matrixMult = function(u, v) {
    return v.multiply(u);
  }, yr = new Vt(1, 0, 0, 1, 0, 0);
  g.unitMatrix = g.identityMatrix = yr;
  var Rn = function(u, v) {
    if (!Se[u]) {
      var C = (v instanceof wi ? "Sh" : "P") + (Object.keys(Ut).length + 1).toString(10);
      v.id = C, Se[u] = C, Ut[C] = v, be.publish("addPattern", v);
    }
  };
  g.ShadingPattern = wi, g.TilingPattern = Qi, g.addShadingPattern = function(u, v) {
    return T("addShadingPattern()"), Rn(u, v), this;
  }, g.beginTilingPattern = function(u) {
    T("beginTilingPattern()"), ga(u.boundingBox[0], u.boundingBox[1], u.boundingBox[2] - u.boundingBox[0], u.boundingBox[3] - u.boundingBox[1], u.matrix);
  }, g.endTilingPattern = function(u, v) {
    T("endTilingPattern()"), v.stream = _t[B].join(`
`), Rn(u, v), be.publish("endTilingPattern", v), rr.pop().restore();
  };
  var Dn, Re = g.__private__.newObject = function() {
    var u = nn();
    return an(u, !0), u;
  }, nn = g.__private__.newObjectDeferred = function() {
    return J++, Z[J] = function() {
      return st;
    }, J;
  }, an = function(u, v) {
    return v = typeof v == "boolean" && v, Z[u] = st, v && I(u + " 0 obj"), u;
  }, ti = g.__private__.newAdditionalObject = function() {
    var u = { objId: nn(), content: "" };
    return gt.push(u), u;
  }, jr = nn(), Vn = nn(), ir = g.__private__.decodeColorString = function(u) {
    var v = u.split(" ");
    if (v.length !== 2 || v[1] !== "g" && v[1] !== "G") v.length !== 5 || v[4] !== "k" && v[4] !== "K" || (v = [(1 - v[0]) * (1 - v[3]), (1 - v[1]) * (1 - v[3]), (1 - v[2]) * (1 - v[3]), "r"]);
    else {
      var C = parseFloat(v[0]);
      v = [C, C, C, "r"];
    }
    for (var q = "#", $ = 0; $ < 3; $++) q += ("0" + Math.floor(255 * parseFloat(v[$])).toString(16)).slice(-2);
    return q;
  }, Yn = g.__private__.encodeColorString = function(u) {
    var v;
    typeof u == "string" && (u = { ch1: u });
    var C = u.ch1, q = u.ch2, $ = u.ch3, lt = u.ch4, vt = u.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof C == "string" && C.charAt(0) !== "#") {
      var Et = new jh(C);
      if (Et.ok) C = Et.toHex();
      else if (!/^\d*\.?\d*$/.test(C)) throw new Error('Invalid color "' + C + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof C == "string" && /^#[0-9A-Fa-f]{3}$/.test(C) && (C = "#" + C[1] + C[1] + C[2] + C[2] + C[3] + C[3]), typeof C == "string" && /^#[0-9A-Fa-f]{6}$/.test(C)) {
      var Ft = parseInt(C.substr(1), 16);
      C = Ft >> 16 & 255, q = Ft >> 8 & 255, $ = 255 & Ft;
    }
    if (q === void 0 || lt === void 0 && C === q && q === $) v = typeof C == "string" ? C + " " + vt[0] : u.precision === 2 ? S(C / 255) + " " + vt[0] : j(C / 255) + " " + vt[0];
    else if (lt === void 0 || xe(lt) === "object") {
      if (lt && !isNaN(lt.a) && lt.a === 0) return ["1.", "1.", "1.", vt[1]].join(" ");
      v = typeof C == "string" ? [C, q, $, vt[1]].join(" ") : u.precision === 2 ? [S(C / 255), S(q / 255), S($ / 255), vt[1]].join(" ") : [j(C / 255), j(q / 255), j($ / 255), vt[1]].join(" ");
    } else v = typeof C == "string" ? [C, q, $, lt, vt[2]].join(" ") : u.precision === 2 ? [S(C), S(q), S($), S(lt), vt[2]].join(" ") : [j(C), j(q), j($), j(lt), vt[2]].join(" ");
    return v;
  }, Jn = g.__private__.getFilters = function() {
    return c;
  }, qn = g.__private__.putStream = function(u) {
    var v = (u = u || {}).data || "", C = u.filters || Jn(), q = u.alreadyAppliedFilters || [], $ = u.addLength1 || !1, lt = v.length, vt = u.objectId, Et = function(Ce) {
      return Ce;
    };
    if (p !== null && vt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    p !== null && (Et = sn.encryptor(vt, 0));
    var Ft = {};
    C === !0 && (C = ["FlateEncode"]);
    var Xt = u.additionalKeyValues || [], te = (Ft = Tt.API.processDataByFilters !== void 0 ? Tt.API.processDataByFilters(v, C) : { data: v, reverseChain: [] }).reverseChain + (Array.isArray(q) ? q.join(" ") : q.toString());
    if (Ft.data.length !== 0 && (Xt.push({ key: "Length", value: Ft.data.length }), $ === !0 && Xt.push({ key: "Length1", value: lt })), te.length != 0) if (te.split("/").length - 1 == 1) Xt.push({ key: "Filter", value: te });
    else {
      Xt.push({ key: "Filter", value: "[" + te + "]" });
      for (var de = 0; de < Xt.length; de += 1) if (Xt[de].key === "DecodeParms") {
        for (var Xe = [], Ae = 0; Ae < Ft.reverseChain.split("/").length - 1; Ae += 1) Xe.push("null");
        Xe.push(Xt[de].value), Xt[de].value = "[" + Xe.join(" ") + "]";
      }
    }
    I("<<");
    for (var _e = 0; _e < Xt.length; _e++) I("/" + Xt[_e].key + " " + Xt[_e].value);
    I(">>"), Ft.data.length !== 0 && (I("stream"), I(Et(Ft.data)), I("endstream"));
  }, ei = g.__private__.putPage = function(u) {
    var v = u.number, C = u.data, q = u.objId, $ = u.contentsObjId;
    an(q, !0), I("<</Type /Page"), I("/Parent " + u.rootDictionaryObjId + " 0 R"), I("/Resources " + u.resourceDictionaryObjId + " 0 R"), I("/MediaBox [" + parseFloat(X(u.mediaBox.bottomLeftX)) + " " + parseFloat(X(u.mediaBox.bottomLeftY)) + " " + X(u.mediaBox.topRightX) + " " + X(u.mediaBox.topRightY) + "]"), u.cropBox !== null && I("/CropBox [" + X(u.cropBox.bottomLeftX) + " " + X(u.cropBox.bottomLeftY) + " " + X(u.cropBox.topRightX) + " " + X(u.cropBox.topRightY) + "]"), u.bleedBox !== null && I("/BleedBox [" + X(u.bleedBox.bottomLeftX) + " " + X(u.bleedBox.bottomLeftY) + " " + X(u.bleedBox.topRightX) + " " + X(u.bleedBox.topRightY) + "]"), u.trimBox !== null && I("/TrimBox [" + X(u.trimBox.bottomLeftX) + " " + X(u.trimBox.bottomLeftY) + " " + X(u.trimBox.topRightX) + " " + X(u.trimBox.topRightY) + "]"), u.artBox !== null && I("/ArtBox [" + X(u.artBox.bottomLeftX) + " " + X(u.artBox.bottomLeftY) + " " + X(u.artBox.topRightX) + " " + X(u.artBox.topRightY) + "]"), typeof u.userUnit == "number" && u.userUnit !== 1 && I("/UserUnit " + u.userUnit), be.publish("putPage", { objId: q, pageContext: Gt[v], pageNumber: v, page: C }), I("/Contents " + $ + " 0 R"), I(">>"), I("endobj");
    var lt = C.join(`
`);
    return D === H && (lt += `
Q`), an($, !0), qn({ data: lt, filters: Jn(), objectId: $ }), I("endobj"), q;
  }, ar = g.__private__.putPages = function() {
    var u, v, C = [];
    for (u = 1; u <= le; u++) Gt[u].objId = nn(), Gt[u].contentsObjId = nn();
    for (u = 1; u <= le; u++) C.push(ei({ number: u, data: _t[u], objId: Gt[u].objId, contentsObjId: Gt[u].contentsObjId, mediaBox: Gt[u].mediaBox, cropBox: Gt[u].cropBox, bleedBox: Gt[u].bleedBox, trimBox: Gt[u].trimBox, artBox: Gt[u].artBox, userUnit: Gt[u].userUnit, rootDictionaryObjId: jr, resourceDictionaryObjId: Vn }));
    an(jr, !0), I("<</Type /Pages");
    var q = "/Kids [";
    for (v = 0; v < le; v++) q += C[v] + " 0 R ";
    I(q + "]"), I("/Count " + le), I(">>"), I("endobj"), be.publish("postPutPages");
  }, ni = function(u) {
    be.publish("putFont", { font: u, out: I, newObject: Re, putStream: qn }), u.isAlreadyPutted !== !0 && (u.objectNumber = Re(), I("<<"), I("/Type /Font"), I("/BaseFont /" + Zi(u.postScriptName)), I("/Subtype /Type1"), typeof u.encoding == "string" && I("/Encoding /" + u.encoding), I("/FirstChar 32"), I("/LastChar 255"), I(">>"), I("endobj"));
  }, Si = function(u) {
    u.objectNumber = Re();
    var v = [];
    v.push({ key: "Type", value: "/XObject" }), v.push({ key: "Subtype", value: "/Form" }), v.push({ key: "BBox", value: "[" + [X(u.x), X(u.y), X(u.x + u.width), X(u.y + u.height)].join(" ") + "]" }), v.push({ key: "Matrix", value: "[" + u.matrix.toString() + "]" });
    var C = u.pages[1].join(`
`);
    qn({ data: C, additionalKeyValues: v, objectId: u.objectNumber }), I("endobj");
  }, ki = function(u, v) {
    v || (v = 21);
    var C = Re(), q = (function(vt, Et) {
      var Ft, Xt = [], te = 1 / (Et - 1);
      for (Ft = 0; Ft < 1; Ft += te) Xt.push(Ft);
      if (Xt.push(1), vt[0].offset != 0) {
        var de = { offset: 0, color: vt[0].color };
        vt.unshift(de);
      }
      if (vt[vt.length - 1].offset != 1) {
        var Xe = { offset: 1, color: vt[vt.length - 1].color };
        vt.push(Xe);
      }
      for (var Ae = "", _e = 0, Ce = 0; Ce < Xt.length; Ce++) {
        for (Ft = Xt[Ce]; Ft > vt[_e + 1].offset; ) _e++;
        var Me = vt[_e].offset, Te = (Ft - Me) / (vt[_e + 1].offset - Me), fn = vt[_e].color, Sr = vt[_e + 1].color;
        Ae += G(Math.round((1 - Te) * fn[0] + Te * Sr[0]).toString(16)) + G(Math.round((1 - Te) * fn[1] + Te * Sr[1]).toString(16)) + G(Math.round((1 - Te) * fn[2] + Te * Sr[2]).toString(16));
      }
      return Ae.trim();
    })(u.colors, v), $ = [];
    $.push({ key: "FunctionType", value: "0" }), $.push({ key: "Domain", value: "[0.0 1.0]" }), $.push({ key: "Size", value: "[" + v + "]" }), $.push({ key: "BitsPerSample", value: "8" }), $.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), $.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), qn({ data: q, additionalKeyValues: $, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: C }), I("endobj"), u.objectNumber = Re(), I("<< /ShadingType " + u.type), I("/ColorSpace /DeviceRGB");
    var lt = "/Coords [" + X(parseFloat(u.coords[0])) + " " + X(parseFloat(u.coords[1])) + " ";
    u.type === 2 ? lt += X(parseFloat(u.coords[2])) + " " + X(parseFloat(u.coords[3])) : lt += X(parseFloat(u.coords[2])) + " " + X(parseFloat(u.coords[3])) + " " + X(parseFloat(u.coords[4])) + " " + X(parseFloat(u.coords[5])), I(lt += "]"), u.matrix && I("/Matrix [" + u.matrix.toString() + "]"), I("/Function " + C + " 0 R"), I("/Extend [true true]"), I(">>"), I("endobj");
  }, Pi = function(u, v) {
    var C = nn(), q = Re();
    v.push({ resourcesOid: C, objectOid: q }), u.objectNumber = q;
    var $ = [];
    $.push({ key: "Type", value: "/Pattern" }), $.push({ key: "PatternType", value: "1" }), $.push({ key: "PaintType", value: "1" }), $.push({ key: "TilingType", value: "1" }), $.push({ key: "BBox", value: "[" + u.boundingBox.map(X).join(" ") + "]" }), $.push({ key: "XStep", value: X(u.xStep) }), $.push({ key: "YStep", value: X(u.yStep) }), $.push({ key: "Resources", value: C + " 0 R" }), u.matrix && $.push({ key: "Matrix", value: "[" + u.matrix.toString() + "]" }), qn({ data: u.stream, additionalKeyValues: $, objectId: u.objectNumber }), I("endobj");
  }, Ts = function(u) {
    for (var v in u.objectNumber = Re(), I("<<"), u) switch (v) {
      case "opacity":
        I("/ca " + S(u[v]));
        break;
      case "stroke-opacity":
        I("/CA " + S(u[v]));
    }
    I(">>"), I("endobj");
  }, sa = function(u) {
    an(u.resourcesOid, !0), I("<<"), I("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), (function() {
      for (var v in I("/Font <<"), se) se.hasOwnProperty(v) && (y === !1 || y === !0 && N.hasOwnProperty(v)) && I("/" + v + " " + se[v].objectNumber + " 0 R");
      I(">>");
    })(), (function() {
      if (Object.keys(Ut).length > 0) {
        for (var v in I("/Shading <<"), Ut) Ut.hasOwnProperty(v) && Ut[v] instanceof wi && Ut[v].objectNumber >= 0 && I("/" + v + " " + Ut[v].objectNumber + " 0 R");
        be.publish("putShadingPatternDict"), I(">>");
      }
    })(), (function(v) {
      if (Object.keys(Ut).length > 0) {
        for (var C in I("/Pattern <<"), Ut) Ut.hasOwnProperty(C) && Ut[C] instanceof g.TilingPattern && Ut[C].objectNumber >= 0 && Ut[C].objectNumber < v && I("/" + C + " " + Ut[C].objectNumber + " 0 R");
        be.publish("putTilingPatternDict"), I(">>");
      }
    })(u.objectOid), (function() {
      if (Object.keys(Yt).length > 0) {
        var v;
        for (v in I("/ExtGState <<"), Yt) Yt.hasOwnProperty(v) && Yt[v].objectNumber >= 0 && I("/" + v + " " + Yt[v].objectNumber + " 0 R");
        be.publish("putGStateDict"), I(">>");
      }
    })(), (function() {
      for (var v in I("/XObject <<"), hn) hn.hasOwnProperty(v) && hn[v].objectNumber >= 0 && I("/" + v + " " + hn[v].objectNumber + " 0 R");
      be.publish("putXobjectDict"), I(">>");
    })(), I(">>"), I("endobj");
  }, Ma = function(u) {
    oe[u.fontName] = oe[u.fontName] || {}, oe[u.fontName][u.fontStyle] = u.id;
  }, Ta = function(u, v, C, q, $) {
    var lt = { id: "F" + (Object.keys(se).length + 1).toString(10), postScriptName: u, fontName: v, fontStyle: C, encoding: q, isStandardFont: $ || !1, metadata: {} };
    return be.publish("addFont", { font: lt, instance: this }), se[lt.id] = lt, Ma(lt), lt.id;
  }, Un = g.__private__.pdfEscape = g.pdfEscape = function(u, v) {
    return (function(C, q) {
      var $, lt, vt, Et, Ft, Xt, te, de, Xe;
      if (vt = (q = q || {}).sourceEncoding || "Unicode", Ft = q.outputEncoding, (q.autoencode || Ft) && se[Bt].metadata && se[Bt].metadata[vt] && se[Bt].metadata[vt].encoding && (Et = se[Bt].metadata[vt].encoding, !Ft && se[Bt].encoding && (Ft = se[Bt].encoding), !Ft && Et.codePages && (Ft = Et.codePages[0]), typeof Ft == "string" && (Ft = Et[Ft]), Ft)) {
        for (te = !1, Xt = [], $ = 0, lt = C.length; $ < lt; $++) (de = Ft[C.charCodeAt($)]) ? Xt.push(String.fromCharCode(de)) : Xt.push(C[$]), Xt[$].charCodeAt(0) >> 8 && (te = !0);
        C = Xt.join("");
      }
      for ($ = C.length; te === void 0 && $ !== 0; ) C.charCodeAt($ - 1) >> 8 && (te = !0), $--;
      if (!te) return C;
      for (Xt = q.noBOM ? [] : [254, 255], $ = 0, lt = C.length; $ < lt; $++) {
        if ((Xe = (de = C.charCodeAt($)) >> 8) >> 8) throw new Error("Character at position " + $ + " of string '" + C + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
        Xt.push(Xe), Xt.push(de - (Xe << 8));
      }
      return String.fromCharCode.apply(void 0, Xt);
    })(u, v).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, oa = g.__private__.beginPage = function(u) {
    _t[++le] = [], Gt[le] = { objId: 0, contentsObjId: 0, userUnit: Number(l), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(u[0]), topRightY: Number(u[1]) } }, Da(le), Dt(_t[B]);
  }, Ra = function(u, v) {
    var C, q, $;
    switch (e = v || e, typeof u == "string" && (C = L(u.toLowerCase()), Array.isArray(C) && (q = C[0], $ = C[1])), Array.isArray(u) && (q = u[0] * ne, $ = u[1] * ne), isNaN(q) && (q = s[0], $ = s[1]), (q > 14400 || $ > 14400) && (Le.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), q = Math.min(14400, q), $ = Math.min(14400, $)), s = [q, $], e.substr(0, 1)) {
      case "l":
        $ > q && (s = [$, q]);
        break;
      case "p":
        q > $ && (s = [$, q]);
    }
    oa(s), Ys(Jt), I(ji), ca !== 0 && I(ca + " J"), Tr !== 0 && I(Tr + " j"), be.publish("addPage", { pageNumber: le });
  }, la = function(u) {
    u > 0 && u <= le && (_t.splice(u, 1), Gt.splice(u, 1), le--, B > le && (B = le), this.setPage(B));
  }, Da = function(u) {
    u > 0 && u <= le && (B = u);
  }, qa = g.__private__.getNumberOfPages = g.getNumberOfPages = function() {
    return _t.length - 1;
  }, Ua = function(u, v, C) {
    var q, $ = void 0;
    return C = C || {}, u = u !== void 0 ? u : se[Bt].fontName, v = v !== void 0 ? v : se[Bt].fontStyle, q = u.toLowerCase(), oe[q] !== void 0 && oe[q][v] !== void 0 ? $ = oe[q][v] : oe[u] !== void 0 && oe[u][v] !== void 0 ? $ = oe[u][v] : C.disableWarning === !1 && Le.warn("Unable to look up font label for font '" + u + "', '" + v + "'. Refer to getFontList() for available fonts."), $ || C.noFallback || ($ = oe.times[v]) == null && ($ = oe.times.normal), $;
  }, sr = g.__private__.putInfo = function() {
    var u = Re(), v = function(q) {
      return q;
    };
    for (var C in p !== null && (v = sn.encryptor(u, 0)), I("<<"), I("/Producer (" + Un(v("jsPDF " + Tt.version)) + ")"), he) he.hasOwnProperty(C) && he[C] && I("/" + C.substr(0, 1).toUpperCase() + C.substr(1) + " (" + Un(v(he[C])) + ")");
    I("/CreationDate (" + Un(v(it)) + ")"), I(">>"), I("endobj");
  }, Ii = g.__private__.putCatalog = function(u) {
    var v = (u = u || {}).rootDictionaryObjId || jr;
    switch (Re(), I("<<"), I("/Type /Catalog"), I("/Pages " + v + " 0 R"), Wt || (Wt = "fullwidth"), Wt) {
      case "fullwidth":
        I("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        I("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        I("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        I("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var C = "" + Wt;
        C.substr(C.length - 1) === "%" && (Wt = parseInt(Wt) / 100), typeof Wt == "number" && I("/OpenAction [3 0 R /XYZ null null " + S(Wt) + "]");
    }
    switch (ue || (ue = "continuous"), ue) {
      case "continuous":
        I("/PageLayout /OneColumn");
        break;
      case "single":
        I("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        I("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        I("/PageLayout /TwoColumnRight");
    }
    qt && I("/PageMode /" + qt), be.publish("putCatalog"), I(">>"), I("endobj");
  }, Rs = g.__private__.putTrailer = function() {
    I("trailer"), I("<<"), I("/Size " + (J + 1)), I("/Root " + J + " 0 R"), I("/Info " + (J - 1) + " 0 R"), p !== null && I("/Encrypt " + sn.oid + " 0 R"), I("/ID [ <" + ot + "> <" + ot + "> ]"), I(">>");
  }, $e = g.__private__.putHeader = function() {
    I("%PDF-" + F), I("%ºß¬à");
  }, za = g.__private__.putXRef = function() {
    var u = "0000000000";
    I("xref"), I("0 " + (J + 1)), I("0000000000 65535 f ");
    for (var v = 1; v <= J; v++) typeof Z[v] == "function" ? I((u + Z[v]()).slice(-10) + " 00000 n ") : Z[v] !== void 0 ? I((u + Z[v]).slice(-10) + " 00000 n ") : I("0000000000 00000 n ");
  }, or = g.__private__.buildDocument = function() {
    var u;
    J = 0, st = 0, at = [], Z = [], gt = [], jr = nn(), Vn = nn(), Dt(at), be.publish("buildDocument"), $e(), ar(), (function() {
      be.publish("putAdditionalObjects");
      for (var C = 0; C < gt.length; C++) {
        var q = gt[C];
        an(q.objId, !0), I(q.content), I("endobj");
      }
      be.publish("postPutAdditionalObjects");
    })(), u = [], (function() {
      for (var C in se) se.hasOwnProperty(C) && (y === !1 || y === !0 && N.hasOwnProperty(C)) && ni(se[C]);
    })(), (function() {
      var C;
      for (C in Yt) Yt.hasOwnProperty(C) && Ts(Yt[C]);
    })(), (function() {
      for (var C in hn) hn.hasOwnProperty(C) && Si(hn[C]);
    })(), (function(C) {
      var q;
      for (q in Ut) Ut.hasOwnProperty(q) && (Ut[q] instanceof wi ? ki(Ut[q]) : Ut[q] instanceof Qi && Pi(Ut[q], C));
    })(u), be.publish("putResources"), u.forEach(sa), sa({ resourcesOid: Vn, objectOid: Number.MAX_SAFE_INTEGER }), be.publish("postPutResources"), p !== null && (sn.oid = Re(), I("<<"), I("/Filter /Standard"), I("/V " + sn.v), I("/R " + sn.r), I("/U <" + sn.toHexString(sn.U) + ">"), I("/O <" + sn.toHexString(sn.O) + ">"), I("/P " + sn.P), I(">>"), I("endobj")), sr(), Ii();
    var v = st;
    return za(), Rs(), I("startxref"), I("" + v), I("%%EOF"), Dt(_t[B]), at.join(`
`);
  }, Ci = g.__private__.getBlob = function(u) {
    return new Blob([ae(u)], { type: "application/pdf" });
  }, ua = function(u) {
    for (; u.firstChild; ) u.removeChild(u.firstChild);
  }, In = function(u) {
    var v, C = u.document, q = C.documentElement, $ = C.head, lt = C.body;
    return $ || ($ = C.createElement("head"), q.appendChild($)), lt || (lt = C.createElement("body"), q.appendChild(lt)), ua($), ua(lt), (v = C.createElement("style")).appendChild(C.createTextNode("html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}")), $.appendChild(v), { document: C, body: lt };
  }, Fi = g.output = g.__private__.output = (Dn = function(u, v) {
    switch (typeof (v = v || {}) == "string" ? v = { filename: v } : v.filename = v.filename || "generated.pdf", u) {
      case void 0:
        return or();
      case "save":
        g.save(v.filename);
        break;
      case "arraybuffer":
        return ae(or());
      case "blob":
        return Ci(or());
      case "bloburi":
      case "bloburl":
        if ($t.URL !== void 0 && typeof $t.URL.createObjectURL == "function") return $t.URL && $t.URL.createObjectURL(Ci(or())) || void 0;
        Le.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var C = "", q = or();
        try {
          C = Ou(q);
        } catch {
          C = Ou(unescape(encodeURIComponent(q)));
        }
        return "data:application/pdf;filename=" + encodeURIComponent(v.filename) + ";base64," + C;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call($t) === "[object Window]") {
          var $ = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", lt = !v.pdfObjectUrl;
          lt || ($ = v.pdfObjectUrl);
          var vt = $t.open();
          if (vt !== null) {
            var Et = In(vt), Ft = Et.document.createElement("script"), Xt = this;
            Ft.src = $, lt && (Ft.integrity = "sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==", Ft.crossOrigin = "anonymous"), Ft.onload = function() {
              vt.PDFObject.embed(Xt.output("dataurlstring"), v);
            }, Et.body.appendChild(Ft);
          }
          return vt;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call($t) === "[object Window]") {
          var te = v.pdfJsUrl || "examples/PDF.js/web/viewer.html", de = $t.open();
          if (de !== null) {
            var Xe = In(de), Ae = Xe.document.createElement("iframe"), _e = te.indexOf("?") === -1 ? "?" : "&";
            Xt = this, Ae.id = "pdfViewer", Ae.width = "500px", Ae.height = "400px", Ae.src = te + _e + "file=&downloadName=" + encodeURIComponent(v.filename), Ae.onload = function() {
              de.document.title = v.filename, Ae.contentWindow.PDFViewerApplication.open(Xt.output("bloburl"));
            }, Xe.body.appendChild(Ae);
          }
          return de;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call($t) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var Ce = $t.open();
        if (Ce !== null) {
          var Me = In(Ce), Te = Me.document.createElement("iframe");
          Te.src = this.output("datauristring", v), Me.body.appendChild(Te), Ce.document.title = v.filename;
        }
        if (Ce || typeof safari > "u") return Ce;
        break;
      case "datauri":
      case "dataurl":
        return $t.document.location.href = this.output("datauristring", v);
      default:
        return null;
    }
  }, Dn.foo = function() {
    try {
      return Dn.apply(this, arguments);
    } catch (C) {
      var u = C.stack || "";
      ~u.indexOf(" at ") && (u = u.split(" at ")[1]);
      var v = "Error in function " + u.split(`
`)[0].split("<")[0] + ": " + C.message;
      if (!$t.console) throw new Error(v);
      $t.console.error(v, C), $t.alert && alert(v);
    }
  }, Dn.foo.bar = Dn, Dn.foo), xr = function(u) {
    return Array.isArray(Qr) === !0 && Qr.indexOf(u) > -1;
  };
  switch (i) {
    case "pt":
      ne = 1;
      break;
    case "mm":
      ne = 72 / 25.4;
      break;
    case "cm":
      ne = 72 / 2.54;
      break;
    case "in":
      ne = 72;
      break;
    case "px":
      ne = xr("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      ne = 12;
      break;
    case "ex":
      ne = 6;
      break;
    default:
      if (typeof i != "number") throw new Error("Invalid unit: " + i);
      ne = i;
  }
  var sn = null;
  wt(), nt();
  var Ha = g.__private__.getPageInfo = g.getPageInfo = function(u) {
    if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: Gt[u].objId, pageNumber: u, pageContext: Gt[u] };
  }, Ds = g.__private__.getPageInfoByObjId = function(u) {
    if (isNaN(u) || u % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var v in Gt) if (Gt[v].objId === u) break;
    return Ha(v);
  }, qs = g.__private__.getCurrentPageInfo = g.getCurrentPageInfo = function() {
    return { objId: Gt[B].objId, pageNumber: B, pageContext: Gt[B] };
  };
  g.addPage = function() {
    return Ra.apply(this, arguments), this;
  }, g.setPage = function() {
    return Da.apply(this, arguments), Dt.call(this, _t[B]), this;
  }, g.insertPage = function(u) {
    return this.addPage(), this.movePage(B, u), this;
  }, g.movePage = function(u, v) {
    var C, q;
    if (u > v) {
      C = _t[u], q = Gt[u];
      for (var $ = u; $ > v; $--) _t[$] = _t[$ - 1], Gt[$] = Gt[$ - 1];
      _t[v] = C, Gt[v] = q, this.setPage(v);
    } else if (u < v) {
      C = _t[u], q = Gt[u];
      for (var lt = u; lt < v; lt++) _t[lt] = _t[lt + 1], Gt[lt] = Gt[lt + 1];
      _t[v] = C, Gt[v] = q, this.setPage(v);
    }
    return this;
  }, g.deletePage = function() {
    return la.apply(this, arguments), this;
  }, g.__private__.text = g.text = function(u, v, C, q, $) {
    var lt, vt, Et, Ft, Xt, te, de, Xe, Ae, _e = (q = q || {}).scope || this;
    if (typeof u == "number" && typeof v == "number" && (typeof C == "string" || Array.isArray(C))) {
      var Ce = C;
      C = v, v = u, u = Ce;
    }
    if (arguments[3] instanceof Vt == 0 ? (Et = arguments[4], Ft = arguments[5], xe(de = arguments[3]) === "object" && de !== null || (typeof Et == "string" && (Ft = Et, Et = null), typeof de == "string" && (Ft = de, de = null), typeof de == "number" && (Et = de, de = null), q = { flags: de, angle: Et, align: Ft })) : (T("The transform parameter of text() with a Matrix value"), Ae = $), isNaN(v) || isNaN(C) || u == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (u.length === 0) return _e;
    var Me, Te = "", fn = typeof q.lineHeightFactor == "number" ? q.lineHeightFactor : ri, Sr = _e.internal.scaleFactor;
    function ma(ke) {
      return ke = ke.split("	").join(Array(q.TabLen || 9).join(" ")), Un(ke, de);
    }
    function si(ke) {
      for (var Pe, He = ke.concat(), Ze = [], Pr = He.length; Pr--; ) typeof (Pe = He.shift()) == "string" ? Ze.push(Pe) : Array.isArray(ke) && (Pe.length === 1 || Pe[1] === void 0 && Pe[2] === void 0) ? Ze.push(Pe[0]) : Ze.push([Pe[0], Pe[1], Pe[2]]);
      return Ze;
    }
    function oi(ke, Pe) {
      var He;
      if (typeof ke == "string") He = Pe(ke)[0];
      else if (Array.isArray(ke)) {
        for (var Ze, Pr, _a = ke.concat(), Vi = [], Qa = _a.length; Qa--; ) typeof (Ze = _a.shift()) == "string" ? Vi.push(Pe(Ze)[0]) : Array.isArray(Ze) && typeof Ze[0] == "string" && (Pr = Pe(Ze[0], Ze[1], Ze[2]), Vi.push([Pr[0], Pr[1], Pr[2]]));
        He = Vi;
      }
      return He;
    }
    var Rr = !1, li = !0;
    if (typeof u == "string") Rr = !0;
    else if (Array.isArray(u)) {
      var Ri = u.concat();
      vt = [];
      for (var Di, cn = Ri.length; cn--; ) (typeof (Di = Ri.shift()) != "string" || Array.isArray(Di) && typeof Di[0] != "string") && (li = !1);
      Rr = li;
    }
    if (Rr === !1) throw new Error('Type of text must be string or Array. "' + u + '" is not recognized.');
    typeof u == "string" && (u = u.match(/[\r?\n]/) ? u.split(/\r\n|\r|\n/g) : [u]);
    var ui = yt / _e.internal.scaleFactor, hi = ui * (fn - 1);
    switch (q.baseline) {
      case "bottom":
        C -= hi;
        break;
      case "top":
        C += ui - hi;
        break;
      case "hanging":
        C += ui - 2 * hi;
        break;
      case "middle":
        C += ui / 2 - hi;
    }
    if ((te = q.maxWidth || 0) > 0 && (typeof u == "string" ? u = _e.splitTextToSize(u, te) : Object.prototype.toString.call(u) === "[object Array]" && (u = u.reduce(function(ke, Pe) {
      return ke.concat(_e.splitTextToSize(Pe, te));
    }, []))), lt = { text: u, x: v, y: C, options: q, mutex: { pdfEscape: Un, activeFontKey: Bt, fonts: se, activeFontSize: yt } }, be.publish("preProcessText", lt), u = lt.text, Et = (q = lt.options).angle, Ae instanceof Vt == 0 && Et && typeof Et == "number") {
      Et *= Math.PI / 180, q.rotationDirection === 0 && (Et = -Et), D === H && (Et = -Et);
      var va = Math.cos(Et), hr = Math.sin(Et);
      Ae = new Vt(va, hr, -hr, va, 0, 0);
    } else Et && Et instanceof Vt && (Ae = Et);
    D !== H || Ae || (Ae = yr), (Xt = q.charSpace || Bi) !== void 0 && (Te += X(W(Xt)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (Xe = q.horizontalScale) !== void 0 && (Te += X(100 * Xe) + ` Tz
`), q.lang;
    var wn = -1, Ka = q.renderingMode !== void 0 ? q.renderingMode : q.stroke, qi = _e.internal.getCurrentPageInfo().pageContext;
    switch (Ka) {
      case 0:
      case !1:
      case "fill":
        wn = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        wn = 1;
        break;
      case 2:
      case "fillThenStroke":
        wn = 2;
        break;
      case 3:
      case "invisible":
        wn = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        wn = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        wn = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        wn = 6;
        break;
      case 7:
      case "addToPathForClipping":
        wn = 7;
    }
    var Za = qi.usedRenderingMode !== void 0 ? qi.usedRenderingMode : -1;
    wn !== -1 ? Te += wn + ` Tr
` : Za !== -1 && (Te += `0 Tr
`), wn !== -1 && (qi.usedRenderingMode = wn), Ft = q.align || "left";
    var zn, fi = yt * fn, ba = _e.internal.pageSize.getWidth(), Ui = se[Bt];
    Xt = q.charSpace || Bi, te = q.maxWidth || 0, de = Object.assign({ autoencode: !0, noBOM: !0 }, q.flags);
    var ci = [], wa = function(ke) {
      return _e.getStringUnitWidth(ke, { font: Ui, charSpace: Xt, fontSize: yt, doKerning: !1 }) * yt / Sr;
    };
    if (Object.prototype.toString.call(u) === "[object Array]") {
      var yn;
      vt = si(u), Ft !== "left" && (zn = vt.map(wa));
      var Nn, zi = 0;
      if (Ft === "right") {
        v -= zn[0], u = [], cn = vt.length;
        for (var Dr = 0; Dr < cn; Dr++) Dr === 0 ? (Nn = _r(v), yn = Ar(C)) : (Nn = W(zi - zn[Dr]), yn = -fi), u.push([vt[Dr], Nn, yn]), zi = zn[Dr];
      } else if (Ft === "center") {
        v -= zn[0] / 2, u = [], cn = vt.length;
        for (var qr = 0; qr < cn; qr++) qr === 0 ? (Nn = _r(v), yn = Ar(C)) : (Nn = W((zi - zn[qr]) / 2), yn = -fi), u.push([vt[qr], Nn, yn]), zi = zn[qr];
      } else if (Ft === "left") {
        u = [], cn = vt.length;
        for (var Hi = 0; Hi < cn; Hi++) u.push(vt[Hi]);
      } else if (Ft === "justify" && Ui.encoding === "Identity-H") {
        u = [], cn = vt.length, te = te !== 0 ? te : ba;
        for (var di = 0, Ke = 0; Ke < cn; Ke++) if (yn = Ke === 0 ? Ar(C) : -fi, Nn = Ke === 0 ? _r(v) : di, Ke < cn - 1) {
          var eo = W((te - zn[Ke]) / (vt[Ke].split(" ").length - 1)), fr = vt[Ke].split(" ");
          u.push([fr[0] + " ", Nn, yn]), di = 0;
          for (var $n = 1; $n < fr.length; $n++) {
            var pi = (wa(fr[$n - 1] + " " + fr[$n]) - wa(fr[$n])) * Sr + eo;
            $n == fr.length - 1 ? u.push([fr[$n], pi, 0]) : u.push([fr[$n] + " ", pi, 0]), di -= pi;
          }
        } else u.push([vt[Ke], Nn, yn]);
        u.push(["", di, 0]);
      } else {
        if (Ft !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (u = [], cn = vt.length, te = te !== 0 ? te : ba, Ke = 0; Ke < cn; Ke++) {
          yn = Ke === 0 ? Ar(C) : -fi, Nn = Ke === 0 ? _r(v) : 0;
          var ya = vt[Ke].split(" ").length - 1, xa = ya > 0 ? (te - zn[Ke]) / ya : 0;
          Ke < cn - 1 ? ci.push(X(W(xa))) : ci.push(0), u.push([vt[Ke], Nn, yn]);
        }
      }
    }
    (typeof q.R2L == "boolean" ? q.R2L : zt) === !0 && (u = oi(u, function(ke, Pe, He) {
      return [ke.split("").reverse().join(""), Pe, He];
    })), lt = { text: u, x: v, y: C, options: q, mutex: { pdfEscape: Un, activeFontKey: Bt, fonts: se, activeFontSize: yt } }, be.publish("postProcessText", lt), u = lt.text, Me = lt.mutex.isHex || !1;
    var Wi = se[Bt].encoding;
    Wi !== "WinAnsiEncoding" && Wi !== "StandardEncoding" || (u = oi(u, function(ke, Pe, He) {
      return [ma(ke), Pe, He];
    })), vt = si(u), u = [];
    for (var gi, mi, Ur, kr = Array.isArray(vt[0]) ? 1 : 0, zr = "", Gi = function(ke, Pe, He) {
      var Ze = "";
      return He instanceof Vt ? (He = typeof q.angle == "number" ? wr(He, new Vt(1, 0, 0, 1, ke, Pe)) : wr(new Vt(1, 0, 0, 1, ke, Pe), He), D === H && (He = wr(new Vt(1, 0, 0, -1, 0, 0), He)), Ze = He.join(" ") + ` Tm
`) : Ze = X(ke) + " " + X(Pe) + ` Td
`, Ze;
    }, dn = 0; dn < vt.length; dn++) {
      switch (zr = "", kr) {
        case 1:
          Ur = (Me ? "<" : "(") + vt[dn][0] + (Me ? ">" : ")"), gi = parseFloat(vt[dn][1]), mi = parseFloat(vt[dn][2]);
          break;
        case 0:
          Ur = (Me ? "<" : "(") + vt[dn] + (Me ? ">" : ")"), gi = _r(v), mi = Ar(C);
      }
      ci !== void 0 && ci[dn] !== void 0 && (zr = ci[dn] + ` Tw
`), dn === 0 ? u.push(zr + Gi(gi, mi, Ae) + Ur) : kr === 0 ? u.push(zr + Ur) : kr === 1 && u.push(zr + Gi(gi, mi, Ae) + Ur);
    }
    u = kr === 0 ? u.join(` Tj
T* `) : u.join(` Tj
`), u += ` Tj
`;
    var cr = `BT
/`;
    return cr += Bt + " " + yt + ` Tf
`, cr += X(yt * fn) + ` TL
`, cr += ur + `
`, cr += Te, cr += u, I(cr += "ET"), N[Bt] = !0, _e;
  };
  var Us = g.__private__.clip = g.clip = function(u) {
    return I(u === "evenodd" ? "W*" : "W"), this;
  };
  g.clipEvenOdd = function() {
    return Us("evenodd");
  }, g.__private__.discardPath = g.discardPath = function() {
    return I("n"), this;
  };
  var lr = g.__private__.isValidStyle = function(u) {
    var v = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(u) !== -1 && (v = !0), v;
  };
  g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function(u) {
    return lr(u) && (d = u), this;
  };
  var Wa = g.__private__.getStyle = g.getStyle = function(u) {
    var v = d;
    switch (u) {
      case "D":
      case "S":
        v = "S";
        break;
      case "F":
        v = "f";
        break;
      case "FD":
      case "DF":
        v = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        v = u;
    }
    return v;
  }, Ei = g.close = function() {
    return I("h"), this;
  };
  g.stroke = function() {
    return I("S"), this;
  }, g.fill = function(u) {
    return Oi("f", u), this;
  }, g.fillEvenOdd = function(u) {
    return Oi("f*", u), this;
  }, g.fillStroke = function(u) {
    return Oi("B", u), this;
  }, g.fillStrokeEvenOdd = function(u) {
    return Oi("B*", u), this;
  };
  var Oi = function(u, v) {
    xe(v) === "object" ? Hs(v, u) : I(u);
  }, ha = function(u) {
    u === null || D === H && u === void 0 || (u = Wa(u), I(u));
  };
  function zs(u, v, C, q, $) {
    var lt = new Qi(v || this.boundingBox, C || this.xStep, q || this.yStep, this.gState, $ || this.matrix);
    lt.stream = this.stream;
    var vt = u + "$$" + this.cloneIndex++ + "$$";
    return Rn(vt, lt), lt;
  }
  var Hs = function(u, v) {
    var C = Se[u.key], q = Ut[C];
    if (q instanceof wi) I("q"), I(Ws(v)), q.gState && g.setGState(q.gState), I(u.matrix.toString() + " cm"), I("/" + C + " sh"), I("Q");
    else if (q instanceof Qi) {
      var $ = new Vt(1, 0, 0, -1, 0, ai());
      u.matrix && ($ = $.multiply(u.matrix || yr), C = zs.call(q, u.key, u.boundingBox, u.xStep, u.yStep, $).id), I("q"), I("/Pattern cs"), I("/" + C + " scn"), q.gState && g.setGState(q.gState), I(v), I("Q");
    }
  }, Ws = function(u) {
    switch (u) {
      case "f":
      case "F":
      case "n":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
      case "S":
        return "W S";
      case "B*":
        return "W* S";
    }
  }, Br = g.moveTo = function(u, v) {
    return I(X(W(u)) + " " + X(U(v)) + " m"), this;
  }, Ga = g.lineTo = function(u, v) {
    return I(X(W(u)) + " " + X(U(v)) + " l"), this;
  }, Mr = g.curveTo = function(u, v, C, q, $, lt) {
    return I([X(W(u)), X(U(v)), X(W(C)), X(U(q)), X(W($)), X(U(lt)), "c"].join(" ")), this;
  };
  g.__private__.line = g.line = function(u, v, C, q, $) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || isNaN(q) || !lr($)) throw new Error("Invalid arguments passed to jsPDF.line");
    return D === z ? this.lines([[C - u, q - v]], u, v, [1, 1], $ || "S") : this.lines([[C - u, q - v]], u, v, [1, 1]).stroke();
  }, g.__private__.lines = g.lines = function(u, v, C, q, $, lt) {
    var vt, Et, Ft, Xt, te, de, Xe, Ae, _e, Ce, Me, Te;
    if (typeof u == "number" && (Te = C, C = v, v = u, u = Te), q = q || [1, 1], lt = lt || !1, isNaN(v) || isNaN(C) || !Array.isArray(u) || !Array.isArray(q) || !lr($) || typeof lt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (Br(v, C), vt = q[0], Et = q[1], Xt = u.length, Ce = v, Me = C, Ft = 0; Ft < Xt; Ft++) (te = u[Ft]).length === 2 ? (Ce = te[0] * vt + Ce, Me = te[1] * Et + Me, Ga(Ce, Me)) : (de = te[0] * vt + Ce, Xe = te[1] * Et + Me, Ae = te[2] * vt + Ce, _e = te[3] * Et + Me, Ce = te[4] * vt + Ce, Me = te[5] * Et + Me, Mr(de, Xe, Ae, _e, Ce, Me));
    return lt && Ei(), ha($), this;
  }, g.path = function(u) {
    for (var v = 0; v < u.length; v++) {
      var C = u[v], q = C.c;
      switch (C.op) {
        case "m":
          Br(q[0], q[1]);
          break;
        case "l":
          Ga(q[0], q[1]);
          break;
        case "c":
          Mr.apply(this, q);
          break;
        case "h":
          Ei();
      }
    }
    return this;
  }, g.__private__.rect = g.rect = function(u, v, C, q, $) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || isNaN(q) || !lr($)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return D === z && (q = -q), I([X(W(u)), X(U(v)), X(W(C)), X(W(q)), "re"].join(" ")), ha($), this;
  }, g.__private__.triangle = g.triangle = function(u, v, C, q, $, lt, vt) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || isNaN(q) || isNaN($) || isNaN(lt) || !lr(vt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[C - u, q - v], [$ - C, lt - q], [u - $, v - lt]], u, v, [1, 1], vt, !0), this;
  }, g.__private__.roundedRect = g.roundedRect = function(u, v, C, q, $, lt, vt) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || isNaN(q) || isNaN($) || isNaN(lt) || !lr(vt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Et = 4 / 3 * (Math.SQRT2 - 1);
    return $ = Math.min($, 0.5 * C), lt = Math.min(lt, 0.5 * q), this.lines([[C - 2 * $, 0], [$ * Et, 0, $, lt - lt * Et, $, lt], [0, q - 2 * lt], [0, lt * Et, -$ * Et, lt, -$, lt], [2 * $ - C, 0], [-$ * Et, 0, -$, -lt * Et, -$, -lt], [0, 2 * lt - q], [0, -lt * Et, $ * Et, -lt, $, -lt]], u + $, v, [1, 1], vt, !0), this;
  }, g.__private__.ellipse = g.ellipse = function(u, v, C, q, $) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || isNaN(q) || !lr($)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var lt = 4 / 3 * (Math.SQRT2 - 1) * C, vt = 4 / 3 * (Math.SQRT2 - 1) * q;
    return Br(u + C, v), Mr(u + C, v - vt, u + lt, v - q, u, v - q), Mr(u - lt, v - q, u - C, v - vt, u - C, v), Mr(u - C, v + vt, u - lt, v + q, u, v + q), Mr(u + lt, v + q, u + C, v + vt, u + C, v), ha($), this;
  }, g.__private__.circle = g.circle = function(u, v, C, q) {
    if (isNaN(u) || isNaN(v) || isNaN(C) || !lr(q)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(u, v, C, C, q);
  }, g.setFont = function(u, v, C) {
    return C && (v = ht(v, C)), Bt = Ua(u, v, { disableWarning: !1 }), this;
  };
  var Gs = g.__private__.getFont = g.getFont = function() {
    return se[Ua.apply(g, arguments)];
  };
  g.__private__.getFontList = g.getFontList = function() {
    var u, v, C = {};
    for (u in oe) if (oe.hasOwnProperty(u)) for (v in C[u] = [], oe[u]) oe[u].hasOwnProperty(v) && C[u].push(v);
    return C;
  }, g.addFont = function(u, v, C, q, $) {
    var lt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && lt.indexOf(arguments[3]) !== -1 ? $ = arguments[3] : arguments[3] && lt.indexOf(arguments[3]) == -1 && (C = ht(C, q)), Ta.call(this, u, v, C, $ = $ || "Identity-H");
  };
  var ri, Jt = n.lineWidth || 0.200025, Vs = g.__private__.getLineWidth = g.getLineWidth = function() {
    return Jt;
  }, Ys = g.__private__.setLineWidth = g.setLineWidth = function(u) {
    return Jt = u, I(X(W(u)) + " w"), this;
  };
  g.__private__.setLineDash = Tt.API.setLineDash = Tt.API.setLineDashPattern = function(u, v) {
    if (u = u || [], v = v || 0, isNaN(v) || !Array.isArray(u)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return u = u.map(function(C) {
      return X(W(C));
    }).join(" "), v = X(W(v)), I("[" + u + "] " + v + " d"), this;
  };
  var Js = g.__private__.getLineHeight = g.getLineHeight = function() {
    return yt * ri;
  };
  g.__private__.getLineHeight = g.getLineHeight = function() {
    return yt * ri;
  };
  var $s = g.__private__.setLineHeightFactor = g.setLineHeightFactor = function(u) {
    return typeof (u = u || 1.15) == "number" && (ri = u), this;
  }, Xs = g.__private__.getLineHeightFactor = g.getLineHeightFactor = function() {
    return ri;
  };
  $s(n.lineHeight);
  var _r = g.__private__.getHorizontalCoordinate = function(u) {
    return W(u);
  }, Ar = g.__private__.getVerticalCoordinate = function(u) {
    return D === H ? u : Gt[B].mediaBox.topRightY - Gt[B].mediaBox.bottomLeftY - W(u);
  }, Ks = g.__private__.getHorizontalCoordinateString = g.getHorizontalCoordinateString = function(u) {
    return X(_r(u));
  }, Zs = g.__private__.getVerticalCoordinateString = g.getVerticalCoordinateString = function(u) {
    return X(Ar(u));
  }, ji = n.strokeColor || "0 G";
  g.__private__.getStrokeColor = g.getDrawColor = function() {
    return ir(ji);
  }, g.__private__.setStrokeColor = g.setDrawColor = function(u, v, C, q) {
    return ji = Yn({ ch1: u, ch2: v, ch3: C, ch4: q, pdfColorType: "draw", precision: 2 }), I(ji), this;
  };
  var fa = n.fillColor || "0 g";
  g.__private__.getFillColor = g.getFillColor = function() {
    return ir(fa);
  }, g.__private__.setFillColor = g.setFillColor = function(u, v, C, q) {
    return fa = Yn({ ch1: u, ch2: v, ch3: C, ch4: q, pdfColorType: "fill", precision: 2 }), I(fa), this;
  };
  var ur = n.textColor || "0 g", Qs = g.__private__.getTextColor = g.getTextColor = function() {
    return ir(ur);
  };
  g.__private__.setTextColor = g.setTextColor = function(u, v, C, q) {
    return ur = Yn({ ch1: u, ch2: v, ch3: C, ch4: q, pdfColorType: "text", precision: 3 }), this;
  };
  var Bi = n.charSpace, to = g.__private__.getCharSpace = g.getCharSpace = function() {
    return parseFloat(Bi || 0);
  };
  g.__private__.setCharSpace = g.setCharSpace = function(u) {
    if (isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return Bi = u, this;
  };
  var ca = 0;
  g.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, g.__private__.setLineCap = g.setLineCap = function(u) {
    var v = g.CapJoinStyles[u];
    if (v === void 0) throw new Error("Line cap style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ca = v, I(v + " J"), this;
  };
  var Tr = 0;
  g.__private__.setLineJoin = g.setLineJoin = function(u) {
    var v = g.CapJoinStyles[u];
    if (v === void 0) throw new Error("Line join style of '" + u + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Tr = v, I(v + " j"), this;
  }, g.__private__.setLineMiterLimit = g.__private__.setMiterLimit = g.setLineMiterLimit = g.setMiterLimit = function(u) {
    if (u = u || 0, isNaN(u)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return I(X(W(u)) + " M"), this;
  }, g.GState = Os, g.setGState = function(u) {
    (u = typeof u == "string" ? Yt[Qt[u]] : da(null, u)).equals(je) || (I("/" + u.id + " gs"), je = u);
  };
  var da = function(u, v) {
    if (!u || !Qt[u]) {
      var C = !1;
      for (var q in Yt) if (Yt.hasOwnProperty(q) && Yt[q].equals(v)) {
        C = !0;
        break;
      }
      if (C) v = Yt[q];
      else {
        var $ = "GS" + (Object.keys(Yt).length + 1).toString(10);
        Yt[$] = v, v.id = $;
      }
      return u && (Qt[u] = v.id), be.publish("addGState", v), v;
    }
  };
  g.addGState = function(u, v) {
    return da(u, v), this;
  }, g.saveGraphicsState = function() {
    return I("q"), Oe.push({ key: Bt, size: yt, color: ur }), this;
  }, g.restoreGraphicsState = function() {
    I("Q");
    var u = Oe.pop();
    return Bt = u.key, yt = u.size, ur = u.color, je = null, this;
  }, g.setCurrentTransformationMatrix = function(u) {
    return I(u.toString() + " cm"), this;
  }, g.comment = function(u) {
    return I("#" + u), this;
  };
  var ii = function(u, v) {
    var C = u || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return C;
    }, set: function(lt) {
      isNaN(lt) || (C = parseFloat(lt));
    } });
    var q = v || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return q;
    }, set: function(lt) {
      isNaN(lt) || (q = parseFloat(lt));
    } });
    var $ = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return $;
    }, set: function(lt) {
      $ = lt.toString();
    } }), this;
  }, pa = function(u, v, C, q) {
    ii.call(this, u, v), this.type = "rect";
    var $ = C || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return $;
    }, set: function(vt) {
      isNaN(vt) || ($ = parseFloat(vt));
    } });
    var lt = q || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return lt;
    }, set: function(vt) {
      isNaN(vt) || (lt = parseFloat(vt));
    } }), this;
  }, Mi = function() {
    this.page = le, this.currentPage = B, this.pages = _t.slice(0), this.pagesContext = Gt.slice(0), this.x = Rt, this.y = ze, this.matrix = ge, this.width = Va(B), this.height = Lr(B), this.outputDestination = St, this.id = "", this.objectNumber = -1;
  };
  Mi.prototype.restore = function() {
    le = this.page, B = this.currentPage, Gt = this.pagesContext, _t = this.pages, Rt = this.x, ze = this.y, ge = this.matrix, Nr(B, this.width), Ya(B, this.height), St = this.outputDestination;
  };
  var ga = function(u, v, C, q, $) {
    rr.push(new Mi()), le = B = 0, _t = [], Rt = u, ze = v, ge = $, oa([C, q]);
  };
  for (var Ti in g.beginFormObject = function(u, v, C, q, $) {
    return ga(u, v, C, q, $), this;
  }, g.endFormObject = function(u) {
    return (function(v) {
      if (br[v]) rr.pop().restore();
      else {
        var C = new Mi(), q = "Xo" + (Object.keys(hn).length + 1).toString(10);
        C.id = q, br[v] = q, hn[q] = C, be.publish("addFormObject", C), rr.pop().restore();
      }
    })(u), this;
  }, g.doFormObject = function(u, v) {
    var C = hn[br[u]];
    return I("q"), I(v.toString() + " cm"), I("/" + C.id + " Do"), I("Q"), this;
  }, g.getFormObject = function(u) {
    var v = hn[br[u]];
    return { x: v.x, y: v.y, width: v.width, height: v.height, matrix: v.matrix };
  }, g.save = function(u, v) {
    return u = u || "generated.pdf", (v = v || {}).returnPromise = v.returnPromise || !1, v.returnPromise === !1 ? (bi(Ci(or()), u), typeof bi.unload == "function" && $t.setTimeout && setTimeout(bi.unload, 911), this) : new Promise(function(C, q) {
      try {
        var $ = bi(Ci(or()), u);
        typeof bi.unload == "function" && $t.setTimeout && setTimeout(bi.unload, 911), C($);
      } catch (lt) {
        q(lt.message);
      }
    });
  }, Tt.API) Tt.API.hasOwnProperty(Ti) && (Ti === "events" && Tt.API.events.length ? (function(u, v) {
    var C, q, $;
    for ($ = v.length - 1; $ !== -1; $--) C = v[$][0], q = v[$][1], u.subscribe.apply(u, [C].concat(typeof q == "function" ? [q] : q));
  })(be, Tt.API.events) : g[Ti] = Tt.API[Ti]);
  function Va(u) {
    return Gt[u].mediaBox.topRightX - Gt[u].mediaBox.bottomLeftX;
  }
  function Nr(u, v) {
    Gt[u].mediaBox.topRightX = v + Gt[u].mediaBox.bottomLeftX;
  }
  function Lr(u) {
    return Gt[u].mediaBox.topRightY - Gt[u].mediaBox.bottomLeftY;
  }
  function Ya(u, v) {
    Gt[u].mediaBox.topRightY = v + Gt[u].mediaBox.bottomLeftY;
  }
  var Ja = g.getPageWidth = function(u) {
    return Va(u = u || B) / ne;
  }, $a = g.setPageWidth = function(u, v) {
    Nr(u, v * ne);
  }, ai = g.getPageHeight = function(u) {
    return Lr(u = u || B) / ne;
  }, Xa = g.setPageHeight = function(u, v) {
    Ya(u, v * ne);
  };
  return g.internal = { pdfEscape: Un, getStyle: Wa, getFont: Gs, getFontSize: It, getCharSpace: to, getTextColor: Qs, getLineHeight: Js, getLineHeightFactor: Xs, getLineWidth: Vs, write: Lt, getHorizontalCoordinate: _r, getVerticalCoordinate: Ar, getCoordinateString: Ks, getVerticalCoordinateString: Zs, collections: {}, newObject: Re, newAdditionalObject: ti, newObjectDeferred: nn, newObjectDeferredBegin: an, getFilters: Jn, putStream: qn, events: be, scaleFactor: ne, pageSize: { getWidth: function() {
    return Ja(B);
  }, setWidth: function(u) {
    $a(B, u);
  }, getHeight: function() {
    return ai(B);
  }, setHeight: function(u) {
    Xa(B, u);
  } }, encryptionOptions: p, encryption: sn, getEncryptor: function(u) {
    return p !== null ? sn.encryptor(u, 0) : function(v) {
      return v;
    };
  }, output: Fi, getNumberOfPages: qa, get pages() {
    return _t;
  }, out: I, f2: S, f3: j, getPageInfo: Ha, getPageInfoByObjId: Ds, getCurrentPageInfo: qs, getPDFVersion: P, Point: ii, Rectangle: pa, Matrix: Vt, hasHotfix: xr }, Object.defineProperty(g.internal.pageSize, "width", { get: function() {
    return Ja(B);
  }, set: function(u) {
    $a(B, u);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(g.internal.pageSize, "height", { get: function() {
    return ai(B);
  }, set: function(u) {
    Xa(B, u);
  }, enumerable: !0, configurable: !0 }), (function(u) {
    for (var v = 0, C = Ht.length; v < C; v++) {
      var q = Ta.call(this, u[v][0], u[v][1], u[v][2], Ht[v][3], !0);
      y === !1 && (N[q] = !0);
      var $ = u[v][0].split("-");
      Ma({ id: q, fontName: $[0], fontStyle: $[1] || "" });
    }
    be.publish("addFonts", { fonts: se, dictionary: oe });
  }).call(g, Ht), Bt = "F1", Ra(s, e), be.publish("initialized"), g;
}
Ki.prototype.lsbFirstWord = function(n) {
  return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
}, Ki.prototype.toHexString = function(n) {
  return n.split("").map(function(t) {
    return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, Ki.prototype.hexToBytes = function(n) {
  for (var t = [], e = 0; e < n.length; e += 2) t.push(String.fromCharCode(parseInt(n.substr(e, 2), 16)));
  return t.join("");
}, Ki.prototype.processOwnerPassword = function(n, t) {
  return Xo($o(t).substr(0, 5), n);
}, Ki.prototype.encryptor = function(n, t) {
  var e = $o(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(i) {
    return Xo(e, i);
  };
}, Os.prototype.equals = function(n) {
  var t, e = "id,objectNumber,equals";
  if (!n || xe(n) !== xe(this)) return !1;
  var i = 0;
  for (t in this) if (!(e.indexOf(t) >= 0)) {
    if (this.hasOwnProperty(t) && !n.hasOwnProperty(t) || this[t] !== n[t]) return !1;
    i++;
  }
  for (t in n) n.hasOwnProperty(t) && e.indexOf(t) < 0 && i--;
  return i === 0;
}, Tt.API = { events: [] }, Tt.version = "4.2.1";
var Ue = Tt.API, rl = 1, Li = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, $i = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Ai = function(n) {
  return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(t) {
    var e = t.charCodeAt(0).toString(16).toUpperCase();
    return "#" + (e.length === 1 ? "0" + e : e);
  });
}, Kt = function(n) {
  return n.toFixed(2);
}, Xr = function(n) {
  return n.toFixed(5);
};
Ue.__acroform__ = {};
var Pn = function(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n;
}, Tu = function(n) {
  return n * rl;
}, pr = function(n) {
  var t = new Rh(), e = Ct.internal.getHeight(n) || 0, i = Ct.internal.getWidth(n) || 0;
  return t.BBox = [0, 0, Number(Kt(i)), Number(Kt(e))], t;
}, W1 = Ue.__acroform__.setBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n | 1 << t;
}, G1 = Ue.__acroform__.clearBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n & ~(1 << t);
}, V1 = Ue.__acroform__.getBit = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return n & 1 << t ? 1 : 0;
}, Ve = Ue.__acroform__.getBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return V1(n, t - 1);
}, Ye = Ue.__acroform__.setBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return W1(n, t - 1);
}, Je = Ue.__acroform__.clearBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return G1(n, t - 1);
}, Y1 = Ue.__acroform__.calculateCoordinates = function(n, t) {
  var e = t.internal.getHorizontalCoordinate, i = t.internal.getVerticalCoordinate, s = n[0], a = n[1], c = n[2], l = n[3], h = {};
  return h.lowerLeft_X = e(s) || 0, h.lowerLeft_Y = i(a + l) || 0, h.upperRight_X = e(s + c) || 0, h.upperRight_Y = i(a) || 0, [Number(Kt(h.lowerLeft_X)), Number(Kt(h.lowerLeft_Y)), Number(Kt(h.upperRight_X)), Number(Kt(h.upperRight_Y))];
}, J1 = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var t = [], e = n._V || n.DV, i = Ko(n, e), s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(n.scope.__private__.encodeColorString(n.color)), t.push("/" + s + " " + Kt(i.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(i.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var a = pr(n);
    return a.scope = n.scope, a.stream = t.join(`
`), a;
  }
}, Ko = function(n, t) {
  var e = n.fontSize === 0 ? n.maxFontSize : n.fontSize, i = { text: "", fontSize: "" }, s = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  s = n.multiline ? s.map(function(S) {
    return S.split(`
`);
  }) : s.map(function(S) {
    return [S];
  });
  var a = e, c = Ct.internal.getHeight(n) || 0;
  c = c < 0 ? -c : c;
  var l = Ct.internal.getWidth(n) || 0;
  l = l < 0 ? -l : l;
  var h = function(S, j, W) {
    if (S + 1 < s.length) {
      var U = j + " " + s[S + 1][0];
      return _s(U, n, W).width <= l - 4;
    }
    return !1;
  };
  a++;
  t: for (; a > 0; ) {
    t = "", a--;
    var d, p, y = _s("3", n, a).height, N = n.multiline ? c - a : (c - y) / 2, g = N += 2, F = 0, P = 0, M = 0;
    if (a <= 0) {
      t = `(...) Tj
`, t += "% Width of Text: " + _s(t, n, a = 12).width + ", FieldWidth:" + l + `
`;
      break;
    }
    for (var L = "", z = 0, H = 0; H < s.length; H++) if (s.hasOwnProperty(H)) {
      var D = !1;
      if (s[H].length !== 1 && M !== s[H].length - 1) {
        if ((y + 2) * (z + 2) + 2 > c) continue t;
        L += s[H][M], D = !0, P = H, H--;
      } else {
        L = (L += s[H][M] + " ").substr(L.length - 1) == " " ? L.substr(0, L.length - 1) : L;
        var rt = parseInt(H), mt = h(rt, L, a), ht = H >= s.length - 1;
        if (mt && !ht) {
          L += " ", M = 0;
          continue;
        }
        if (mt || ht) {
          if (ht) P = rt;
          else if (n.multiline && (y + 2) * (z + 2) + 2 > c) continue t;
        } else {
          if (!n.multiline || (y + 2) * (z + 2) + 2 > c) continue t;
          P = rt;
        }
      }
      for (var X = "", T = F; T <= P; T++) {
        var tt = s[T];
        if (n.multiline) {
          if (T === P) {
            X += tt[M] + " ", M = (M + 1) % tt.length;
            continue;
          }
          if (T === F) {
            X += tt[tt.length - 1] + " ";
            continue;
          }
        }
        X += tt[0] + " ";
      }
      switch (X = X.substr(X.length - 1) == " " ? X.substr(0, X.length - 1) : X, p = _s(X, n, a).width, n.textAlign) {
        case "right":
          d = l - p - 2;
          break;
        case "center":
          d = (l - p) / 2;
          break;
        default:
          d = 2;
      }
      t += Kt(d) + " " + Kt(g) + ` Td
`, t += "(" + Li(X) + `) Tj
`, t += -Kt(d) + ` 0 Td
`, g = -(a + 2), p = 0, F = D ? P : P + 1, z++, L = "";
    }
    break;
  }
  return i.text = t, i.fontSize = a, i;
}, _s = function(n, t, e) {
  var i = t.scope.internal.getFont(t.fontName, t.fontStyle), s = t.scope.getStringUnitWidth(n, { font: i, fontSize: parseFloat(e), charSpace: 0 }) * parseFloat(e);
  return { height: t.scope.getStringUnitWidth("3", { font: i, fontSize: parseFloat(e), charSpace: 0 }) * parseFloat(e) * 1.5, width: s };
}, $1 = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, X1 = function(n, t) {
  var e = { type: "reference", object: n };
  t.internal.getPageInfo(n.page).pageContext.annotations.find(function(i) {
    return i.type === e.type && i.object === e.object;
  }) === void 0 && t.internal.getPageInfo(n.page).pageContext.annotations.push(e);
}, K1 = function(n, t) {
  if (t.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (er.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify($1)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    rl = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Dh(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(e) {
        e.internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID, e.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(e) {
        e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var i = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var s in i) if (i.hasOwnProperty(s)) {
          var a = i[s];
          a.objId = void 0, a.hasAnnotation && X1(a, e);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(e) {
        if (e.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        e.internal.write("/AcroForm " + e.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(e) {
      (function(i, s) {
        var a = !i;
        for (var c in i || (s.internal.newObjectDeferredBegin(s.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (i.hasOwnProperty(c)) {
          var l = i[c], h = [], d = l.Rect;
          if (l.Rect && (l.Rect = Y1(l.Rect, s)), s.internal.newObjectDeferredBegin(l.objId, !0), l.DA = Ct.createDefaultAppearanceStream(l), xe(l) === "object" && typeof l.getKeyValueListForStream == "function" && (h = l.getKeyValueListForStream()), l.Rect = d, l.hasAppearanceStream && !l.appearanceStreamContent) {
            var p = J1(l);
            h.push({ key: "AP", value: "<</N " + p + ">>" }), s.internal.acroformPlugin.xForms.push(p);
          }
          if (l.appearanceStreamContent) {
            var y = "";
            for (var N in l.appearanceStreamContent) if (l.appearanceStreamContent.hasOwnProperty(N)) {
              var g = l.appearanceStreamContent[N];
              if (y += "/" + N + " ", y += "<<", Object.keys(g).length >= 1 || Array.isArray(g)) {
                for (var c in g) if (g.hasOwnProperty(c)) {
                  var F = g[c];
                  typeof F == "function" && (F = F.call(s, l)), y += "/" + c + " " + F + " ", s.internal.acroformPlugin.xForms.indexOf(F) >= 0 || s.internal.acroformPlugin.xForms.push(F);
                }
              } else typeof (F = g) == "function" && (F = F.call(s, l)), y += "/" + c + " " + F, s.internal.acroformPlugin.xForms.indexOf(F) >= 0 || s.internal.acroformPlugin.xForms.push(F);
              y += ">>";
            }
            h.push({ key: "AP", value: `<<
` + y + ">>" });
          }
          s.internal.putStream({ additionalKeyValues: h, objectId: l.objId }), s.internal.out("endobj");
        }
        a && (function(P, M) {
          for (var L in P) if (P.hasOwnProperty(L)) {
            var z = L, H = P[L];
            M.internal.newObjectDeferredBegin(H.objId, !0), xe(H) === "object" && typeof H.putStream == "function" && H.putStream(), delete P[z];
          }
        })(s.internal.acroformPlugin.xForms, s);
      })(e, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, Th = Ue.__acroform__.arrayToPdfArray = function(n, t, e) {
  var i = function(c) {
    return c;
  };
  if (Array.isArray(n)) {
    for (var s = "[", a = 0; a < n.length; a++) switch (a !== 0 && (s += " "), xe(n[a])) {
      case "boolean":
      case "number":
      case "object":
        s += n[a].toString();
        break;
      case "string":
        n[a].substr(0, 1) === "/" ? s += "/" + Ai(n[a].substr(1)) : (t !== void 0 && e && (i = e.internal.getEncryptor(t)), s += "(" + Li(i(n[a].toString())) + ")");
    }
    return s + "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, Bo = function(n, t, e) {
  var i = function(s) {
    return s;
  };
  return t !== void 0 && e && (i = e.internal.getEncryptor(t)), (n = n || "").toString(), "(" + Li(i(n)) + ")";
}, mr = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(n) {
    this._objId = n;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
mr.prototype.toString = function() {
  return this.objId + " 0 R";
}, mr.prototype.putStream = function() {
  var n = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: n, objectId: this.objId }), this.scope.internal.out("endobj");
}, mr.prototype.getKeyValueListForStream = function() {
  var n = [], t = Object.getOwnPropertyNames(this).filter(function(a) {
    return a != "content" && a != "appearanceStreamContent" && a != "scope" && a != "objId" && a.substring(0, 1) != "_";
  });
  for (var e in t) if (Object.getOwnPropertyDescriptor(this, t[e]).configurable === !1) {
    var i = t[e], s = this[i];
    s && (Array.isArray(s) ? n.push({ key: i, value: Th(s, this.objId, this.scope) }) : s instanceof mr ? (s.scope = this.scope, n.push({ key: i, value: s.objId + " 0 R" })) : typeof s != "function" && n.push({ key: i, value: s }));
  }
  return n;
};
var Rh = function() {
  mr.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var n, t = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return t;
  }, set: function(e) {
    t = e;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(e) {
    n = e.trim();
  }, get: function() {
    return n || null;
  } });
};
Pn(Rh, mr);
var Dh = function() {
  mr.call(this);
  var n, t = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return t.length > 0 ? t : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return t;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var e = function(i) {
        return i;
      };
      return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + Li(e(n)) + ")";
    }
  }, set: function(e) {
    n = e;
  } });
};
Pn(Dh, mr);
var er = function n() {
  mr.call(this);
  var t = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(L) {
    if (isNaN(L)) throw new Error('Invalid value "' + L + '" for attribute F supplied.');
    t = L;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(t, 3);
  }, set: function(L) {
    L ? this.F = Ye(t, 3) : this.F = Je(t, 3);
  } });
  var e = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(L) {
    if (isNaN(L)) throw new Error('Invalid value "' + L + '" for attribute Ff supplied.');
    e = L;
  } });
  var i = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (i.length !== 0) return i;
  }, set: function(L) {
    i = L !== void 0 ? L : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[0]) ? 0 : i[0];
  }, set: function(L) {
    i[0] = L;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[1]) ? 0 : i[1];
  }, set: function(L) {
    i[1] = L;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[2]) ? 0 : i[2];
  }, set: function(L) {
    i[2] = L;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[3]) ? 0 : i[3];
  }, set: function(L) {
    i[3] = L;
  } });
  var s = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return s;
  }, set: function(L) {
    switch (L) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        s = L;
        break;
      default:
        throw new Error('Invalid value "' + L + '" for attribute FT supplied.');
    }
  } });
  var a = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!a || a.length < 1) {
      if (this instanceof js) return;
      a = "FieldObject" + n.FieldNum++;
    }
    var L = function(z) {
      return z;
    };
    return this.scope && (L = this.scope.internal.getEncryptor(this.objId)), "(" + Li(L(a)) + ")";
  }, set: function(L) {
    a = L.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return a;
  }, set: function(L) {
    a = L;
  } });
  var c = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return c;
  }, set: function(L) {
    c = L;
  } });
  var l = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(L) {
    l = L;
  } });
  var h = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return h;
  }, set: function(L) {
    h = L;
  } });
  var d = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return d === void 0 ? 50 / rl : d;
  }, set: function(L) {
    d = L;
  } });
  var p = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return p;
  }, set: function(L) {
    p = L;
  } });
  var y = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!y || this instanceof js || this instanceof yi)) return Bo(y, this.objId, this.scope);
  }, set: function(L) {
    L = L.toString(), y = L;
  } });
  var N = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (N) return this instanceof rn == 0 ? Bo(N, this.objId, this.scope) : N;
  }, set: function(L) {
    L = L.toString(), N = this instanceof rn == 0 ? L.substr(0, 1) === "(" ? $i(L.substr(1, L.length - 2)) : $i(L) : L;
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof rn == 1 ? $i(N.substr(1, N.length - 1)) : N;
  }, set: function(L) {
    L = L.toString(), N = this instanceof rn == 1 ? "/" + Ai(L) : L;
  } });
  var g = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return g;
  }, set: function(L) {
    this.V = L;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return this instanceof rn == 0 ? Bo(g, this.objId, this.scope) : g;
  }, set: function(L) {
    L = L.toString(), g = this instanceof rn == 0 ? L.substr(0, 1) === "(" ? $i(L.substr(1, L.length - 2)) : $i(L) : L;
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof rn == 1 ? $i(g.substr(1, g.length - 1)) : g;
  }, set: function(L) {
    L = L.toString(), g = this instanceof rn == 1 ? "/" + Ai(L) : L;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var F, P = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return P;
  }, set: function(L) {
    L = !!L, P = L;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (F) return F;
  }, set: function(L) {
    F = L;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 1);
  }, set: function(L) {
    L ? this.Ff = Ye(this.Ff, 1) : this.Ff = Je(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 2);
  }, set: function(L) {
    L ? this.Ff = Ye(this.Ff, 2) : this.Ff = Je(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 3);
  }, set: function(L) {
    L ? this.Ff = Ye(this.Ff, 3) : this.Ff = Je(this.Ff, 3);
  } });
  var M = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (M !== null) return M;
  }, set: function(L) {
    if ([0, 1, 2].indexOf(L) === -1) throw new Error('Invalid value "' + L + '" for attribute Q supplied.');
    M = L;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var L;
    switch (M) {
      case 0:
      default:
        L = "left";
        break;
      case 1:
        L = "center";
        break;
      case 2:
        L = "right";
    }
    return L;
  }, configurable: !0, enumerable: !0, set: function(L) {
    switch (L) {
      case "right":
      case 2:
        M = 2;
        break;
      case "center":
      case 1:
        M = 1;
        break;
      default:
        M = 0;
    }
  } });
};
Pn(er, mr);
var ea = function() {
  er.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var n = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    n = e;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(e) {
    n = e;
  } });
  var t = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return Th(t, this.objId, this.scope);
  }, set: function(e) {
    var i, s;
    s = [], typeof (i = e) == "string" && (s = (function(a, c, l) {
      l || (l = 1);
      for (var h, d = []; h = c.exec(a); ) d.push(h[l]);
      return d;
    })(i, /\((.*?)\)/g)), t = s;
  } }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(e) {
    t = e, this.sort && t.sort();
  }, this.addOption = function(e) {
    e = (e = e || "").toString(), t.push(e), this.sort && t.sort();
  }, this.removeOption = function(e, i) {
    for (i = i || !1, e = (e = e || "").toString(); t.indexOf(e) !== -1 && (t.splice(t.indexOf(e), 1), i !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 18);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 18) : this.Ff = Je(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 19);
  }, set: function(e) {
    this.combo === !0 && (e ? this.Ff = Ye(this.Ff, 19) : this.Ff = Je(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 20);
  }, set: function(e) {
    e ? (this.Ff = Ye(this.Ff, 20), t.sort()) : this.Ff = Je(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 22);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 22) : this.Ff = Je(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 23) : this.Ff = Je(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 27);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 27) : this.Ff = Je(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Pn(ea, er);
var na = function() {
  ea.call(this), this.fontName = "helvetica", this.combo = !1;
};
Pn(na, ea);
var ra = function() {
  na.call(this), this.combo = !0;
};
Pn(ra, na);
var ks = function() {
  ra.call(this), this.edit = !0;
};
Pn(ks, ra);
var rn = function() {
  er.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 15);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 15) : this.Ff = Je(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 16);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 16) : this.Ff = Je(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 17);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 17) : this.Ff = Je(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = Ye(this.Ff, 26) : this.Ff = Je(this.Ff, 26);
  } });
  var n, t = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var e = function(a) {
      return a;
    };
    if (this.scope && (e = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
      var i, s = [];
      for (i in s.push("<<"), t) s.push("/" + i + " (" + Li(e(t[i])) + ")");
      return s.push(">>"), s.join(`
`);
    }
  }, set: function(e) {
    xe(e) === "object" && (t = e);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return t.CA || "";
  }, set: function(e) {
    typeof e == "string" && (t.CA = e);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    var i = e == null ? "" : e.toString();
    i.substr(0, 1) === "/" && (i = i.substr(1)), n = "/" + Ai(i);
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(e) {
    n = "/" + Ai(e);
  } });
};
Pn(rn, er);
var Ps = function() {
  rn.call(this), this.pushButton = !0;
};
Pn(Ps, rn);
var ia = function() {
  rn.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t !== void 0 ? t : [];
  } });
};
Pn(ia, rn);
var js = function() {
  var n, t;
  er.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(s) {
    n = s;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return t;
  }, set: function(s) {
    t = s;
  } });
  var e, i = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var s = function(l) {
      return l;
    };
    this.scope && (s = this.scope.internal.getEncryptor(this.objId));
    var a, c = [];
    for (a in c.push("<<"), i) c.push("/" + a + " (" + Li(s(i[a])) + ")");
    return c.push(">>"), c.join(`
`);
  }, set: function(s) {
    xe(s) === "object" && (i = s);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return i.CA || "";
  }, set: function(s) {
    typeof s == "string" && (i.CA = s);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(s) {
    var a = s == null ? "" : s.toString();
    a.substr(0, 1) === "/" && (a = a.substr(1)), e = "/" + Ai(a);
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return e.substr(1, e.length - 1);
  }, set: function(s) {
    var a = s == null ? "" : s.toString();
    a.substr(0, 1) === "/" && (a = a.substr(1)), e = "/" + Ai(a);
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = Ct.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Pn(js, er), ia.prototype.setAppearance = function(n) {
  if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var e = this.Kids[t];
    e.appearanceStreamContent = n.createAppearanceStream(e.optionName), e.caption = n.getCA();
  }
}, ia.prototype.createOption = function(n) {
  var t = new js();
  return t.Parent = this, t.optionName = n, this.Kids.push(t), Z1.call(this.scope, t), t;
};
var Is = function() {
  rn.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = Ct.CheckBox.createAppearanceStream();
};
Pn(Is, rn);
var yi = function() {
  er.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 13);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 13) : this.Ff = Je(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 21);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 21) : this.Ff = Je(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 23) : this.Ff = Je(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 24);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 24) : this.Ff = Je(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 25);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 25) : this.Ff = Je(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = Ye(this.Ff, 26) : this.Ff = Je(this.Ff, 26);
  } });
  var n = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(t) {
    Number.isInteger(t) && (n = t);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Pn(yi, er);
var Cs = function() {
  yi.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Ve(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = Ye(this.Ff, 14) : this.Ff = Je(this.Ff, 14);
  } }), this.password = !0;
};
Pn(Cs, yi);
var Ct = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: Ct.CheckBox.YesNormal }, D: { On: Ct.CheckBox.YesPushDown, Off: Ct.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [], i = n.scope.internal.getFont(n.fontName, n.fontStyle).id, s = n.scope.__private__.encodeColorString(n.color), a = Ko(n, n.caption);
  return e.push("0.749023 g"), e.push("0 0 " + Kt(Ct.internal.getWidth(n)) + " " + Kt(Ct.internal.getHeight(n)) + " re"), e.push("f"), e.push("BMC"), e.push("q"), e.push("0 0 1 rg"), e.push("/" + i + " " + Kt(a.fontSize) + " Tf " + s), e.push("BT"), e.push(a.text), e.push("ET"), e.push("Q"), e.push("EMC"), t.stream = e.join(`
`), t;
}, YesNormal: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, i = n.scope.__private__.encodeColorString(n.color), s = [], a = Ct.internal.getHeight(n), c = Ct.internal.getWidth(n), l = Ko(n, n.caption);
  return s.push("1 g"), s.push("0 0 " + Kt(c) + " " + Kt(a) + " re"), s.push("f"), s.push("q"), s.push("0 0 1 rg"), s.push("0 0 " + Kt(c - 1) + " " + Kt(a - 1) + " re"), s.push("W"), s.push("n"), s.push("0 g"), s.push("BT"), s.push("/" + e + " " + Kt(l.fontSize) + " Tf " + i), s.push(l.text), s.push("ET"), s.push("Q"), t.stream = s.join(`
`), t;
}, OffPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [];
  return e.push("0.749023 g"), e.push("0 0 " + Kt(Ct.internal.getWidth(n)) + " " + Kt(Ct.internal.getHeight(n)) + " re"), e.push("f"), t.stream = e.join(`
`), t;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var t = { D: { Off: Ct.RadioButton.Circle.OffPushDown }, N: {} };
  return t.N[n] = Ct.RadioButton.Circle.YesNormal, t.D[n] = Ct.RadioButton.Circle.YesPushDown, t;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [], i = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Ct.internal.Bezier_C, a = Number((i * s).toFixed(5));
  return e.push("q"), e.push("1 0 0 1 " + Xr(Ct.internal.getWidth(n) / 2) + " " + Xr(Ct.internal.getHeight(n) / 2) + " cm"), e.push(i + " 0 m"), e.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), e.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), e.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), e.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
}, YesPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [], i = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), a = Number((s * Ct.internal.Bezier_C).toFixed(5)), c = Number((i * Ct.internal.Bezier_C).toFixed(5));
  return e.push("0.749023 g"), e.push("q"), e.push("1 0 0 1 " + Xr(Ct.internal.getWidth(n) / 2) + " " + Xr(Ct.internal.getHeight(n) / 2) + " cm"), e.push(s + " 0 m"), e.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), e.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), e.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), e.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), e.push("f"), e.push("Q"), e.push("0 g"), e.push("q"), e.push("1 0 0 1 " + Xr(Ct.internal.getWidth(n) / 2) + " " + Xr(Ct.internal.getHeight(n) / 2) + " cm"), e.push(i + " 0 m"), e.push(i + " " + c + " " + c + " " + i + " 0 " + i + " c"), e.push("-" + c + " " + i + " -" + i + " " + c + " -" + i + " 0 c"), e.push("-" + i + " -" + c + " -" + c + " -" + i + " 0 -" + i + " c"), e.push(c + " -" + i + " " + i + " -" + c + " " + i + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
}, OffPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [], i = Ct.internal.getWidth(n) <= Ct.internal.getHeight(n) ? Ct.internal.getWidth(n) / 4 : Ct.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var s = Number((2 * i).toFixed(5)), a = Number((s * Ct.internal.Bezier_C).toFixed(5));
  return e.push("0.749023 g"), e.push("q"), e.push("1 0 0 1 " + Xr(Ct.internal.getWidth(n) / 2) + " " + Xr(Ct.internal.getHeight(n) / 2) + " cm"), e.push(s + " 0 m"), e.push(s + " " + a + " " + a + " " + s + " 0 " + s + " c"), e.push("-" + a + " " + s + " -" + s + " " + a + " -" + s + " 0 c"), e.push("-" + s + " -" + a + " -" + a + " -" + s + " 0 -" + s + " c"), e.push(a + " -" + s + " " + s + " -" + a + " " + s + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
} }, Cross: { createAppearanceStream: function(n) {
  var t = { D: { Off: Ct.RadioButton.Cross.OffPushDown }, N: {} };
  return t.N[n] = Ct.RadioButton.Cross.YesNormal, t.D[n] = Ct.RadioButton.Cross.YesPushDown, t;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [], i = Ct.internal.calculateCross(n);
  return e.push("q"), e.push("1 1 " + Kt(Ct.internal.getWidth(n) - 2) + " " + Kt(Ct.internal.getHeight(n) - 2) + " re"), e.push("W"), e.push("n"), e.push(Kt(i.x1.x) + " " + Kt(i.x1.y) + " m"), e.push(Kt(i.x2.x) + " " + Kt(i.x2.y) + " l"), e.push(Kt(i.x4.x) + " " + Kt(i.x4.y) + " m"), e.push(Kt(i.x3.x) + " " + Kt(i.x3.y) + " l"), e.push("s"), e.push("Q"), t.stream = e.join(`
`), t;
}, YesPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = Ct.internal.calculateCross(n), i = [];
  return i.push("0.749023 g"), i.push("0 0 " + Kt(Ct.internal.getWidth(n)) + " " + Kt(Ct.internal.getHeight(n)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + Kt(Ct.internal.getWidth(n) - 2) + " " + Kt(Ct.internal.getHeight(n) - 2) + " re"), i.push("W"), i.push("n"), i.push(Kt(e.x1.x) + " " + Kt(e.x1.y) + " m"), i.push(Kt(e.x2.x) + " " + Kt(e.x2.y) + " l"), i.push(Kt(e.x4.x) + " " + Kt(e.x4.y) + " m"), i.push(Kt(e.x3.x) + " " + Kt(e.x3.y) + " l"), i.push("s"), i.push("Q"), t.stream = i.join(`
`), t;
}, OffPushDown: function(n) {
  var t = pr(n);
  t.scope = n.scope;
  var e = [];
  return e.push("0.749023 g"), e.push("0 0 " + Kt(Ct.internal.getWidth(n)) + " " + Kt(Ct.internal.getHeight(n)) + " re"), e.push("f"), t.stream = e.join(`
`), t;
} } }, createDefaultAppearanceStream: function(n) {
  var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, e = n.scope.__private__.encodeColorString(n.color);
  return "/" + t + " " + n.fontSize + " Tf " + e;
} };
Ct.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var t = Ct.internal.getWidth(n), e = Ct.internal.getHeight(n), i = Math.min(t, e);
  return { x1: { x: (t - i) / 2, y: (e - i) / 2 + i }, x2: { x: (t - i) / 2 + i, y: (e - i) / 2 }, x3: { x: (t - i) / 2, y: (e - i) / 2 }, x4: { x: (t - i) / 2 + i, y: (e - i) / 2 + i } };
} }, Ct.internal.getWidth = function(n) {
  var t = 0;
  return xe(n) === "object" && (t = Tu(n.Rect[2])), t;
}, Ct.internal.getHeight = function(n) {
  var t = 0;
  return xe(n) === "object" && (t = Tu(n.Rect[3])), t;
};
var Z1 = Ue.addField = function(n) {
  if (K1(this, n), !(n instanceof er)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = n).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Ue.AcroFormChoiceField = ea, Ue.AcroFormListBox = na, Ue.AcroFormComboBox = ra, Ue.AcroFormEditBox = ks, Ue.AcroFormButton = rn, Ue.AcroFormPushButton = Ps, Ue.AcroFormRadioButton = ia, Ue.AcroFormCheckBox = Is, Ue.AcroFormTextField = yi, Ue.AcroFormPasswordField = Cs, Ue.AcroFormAppearance = Ct, Ue.AcroForm = { ChoiceField: ea, ListBox: na, ComboBox: ra, EditBox: ks, Button: rn, PushButton: Ps, RadioButton: ia, CheckBox: Is, TextField: yi, PasswordField: Cs, Appearance: Ct }, Tt.AcroForm = { ChoiceField: ea, ListBox: na, ComboBox: ra, EditBox: ks, Button: rn, PushButton: Ps, RadioButton: ia, CheckBox: Is, TextField: yi, PasswordField: Cs, Appearance: Ct };
Tt.AcroForm;
function qh(n) {
  return n.reduce(function(t, e, i) {
    return t[e] = i, t;
  }, {});
}
(function(n) {
  var t = "addImage_";
  n.__addimage__ = {};
  var e = "UNKNOWN", i = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, s = n.__addimage__.getImageFileTypeByImageData = function(S, j) {
    var W, U, it, ot, ft, nt = e;
    if ((j = j || e) === "RGBA" || S.data !== void 0 && S.data instanceof Uint8ClampedArray && "height" in S && "width" in S) return "RGBA";
    if (mt(S)) for (ft in i) for (it = i[ft], W = 0; W < it.length; W += 1) {
      for (ot = !0, U = 0; U < it[W].length; U += 1) if (it[W][U] !== void 0 && it[W][U] !== S[U]) {
        ot = !1;
        break;
      }
      if (ot === !0) {
        nt = ft;
        break;
      }
    }
    else for (ft in i) for (it = i[ft], W = 0; W < it.length; W += 1) {
      for (ot = !0, U = 0; U < it[W].length; U += 1) if (it[W][U] !== void 0 && it[W][U] !== S.charCodeAt(U)) {
        ot = !1;
        break;
      }
      if (ot === !0) {
        nt = ft;
        break;
      }
    }
    return nt === e && j !== e && (nt = j), nt;
  }, a = function S(j) {
    for (var W = this.internal.write, U = this.internal.putStream, it = (0, this.internal.getFilters)(); it.indexOf("FlateEncode") !== -1; ) it.splice(it.indexOf("FlateEncode"), 1);
    j.objectId = this.internal.newObject();
    var ot = [];
    if (ot.push({ key: "Type", value: "/XObject" }), ot.push({ key: "Subtype", value: "/Image" }), ot.push({ key: "Width", value: j.width }), ot.push({ key: "Height", value: j.height }), j.colorSpace === L.INDEXED ? ot.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (j.palette.length / 3 - 1) + " " + ("sMask" in j && j.sMask !== void 0 ? j.objectId + 2 : j.objectId + 1) + " 0 R]" }) : (ot.push({ key: "ColorSpace", value: "/" + j.colorSpace }), j.colorSpace === L.DEVICE_CMYK && ot.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), ot.push({ key: "BitsPerComponent", value: j.bitsPerComponent }), "decodeParameters" in j && j.decodeParameters !== void 0 && ot.push({ key: "DecodeParms", value: "<<" + j.decodeParameters + ">>" }), "transparency" in j && Array.isArray(j.transparency) && j.transparency.length > 0) {
      for (var ft = "", nt = 0, dt = j.transparency.length; nt < dt; nt++) ft += j.transparency[nt] + " " + j.transparency[nt] + " ";
      ot.push({ key: "Mask", value: "[" + ft + "]" });
    }
    j.sMask !== void 0 && ot.push({ key: "SMask", value: j.objectId + 1 + " 0 R" });
    var At = j.filter !== void 0 ? ["/" + j.filter] : void 0;
    if (U({ data: j.data, additionalKeyValues: ot, alreadyAppliedFilters: At, objectId: j.objectId }), W("endobj"), "sMask" in j && j.sMask !== void 0) {
      var wt, _ = (wt = j.sMaskBitsPerComponent) !== null && wt !== void 0 ? wt : j.bitsPerComponent, B = { width: j.width, height: j.height, colorSpace: "DeviceGray", bitsPerComponent: _, data: j.sMask };
      "filter" in j && (B.decodeParameters = "/Predictor ".concat(j.predictor, " /Colors 1 /BitsPerComponent ").concat(_, " /Columns ").concat(j.width), B.filter = j.filter), S.call(this, B);
    }
    if (j.colorSpace === L.INDEXED) {
      var R = this.internal.newObject();
      U({ data: X(new Uint8Array(j.palette)), objectId: R }), W("endobj");
    }
  }, c = function() {
    var S = this.internal.collections[t + "images"];
    for (var j in S) a.call(this, S[j]);
  }, l = function() {
    var S, j = this.internal.collections[t + "images"], W = this.internal.write;
    for (var U in j) W("/I" + (S = j[U]).index, S.objectId, "0", "R");
  }, h = function() {
    this.internal.collections[t + "images"] || (this.internal.collections[t + "images"] = {}, this.internal.events.subscribe("putResources", c), this.internal.events.subscribe("putXobjectDict", l));
  }, d = function() {
    var S = this.internal.collections[t + "images"];
    return h.call(this), S;
  }, p = function() {
    return Object.keys(this.internal.collections[t + "images"]).length;
  }, y = function(S) {
    return typeof n["process" + S.toUpperCase()] == "function";
  }, N = function(S) {
    return xe(S) === "object" && S.nodeType === 1;
  }, g = function(S, j) {
    if (S.nodeName === "IMG" && S.hasAttribute("src")) {
      var W = "" + S.getAttribute("src");
      if (W.indexOf("data:image/") === 0) return Ss(unescape(W).split("base64,").pop());
      var U = n.loadFile(W, !0);
      if (U !== void 0) return U;
    }
    if (S.nodeName === "CANVAS") {
      if (S.width === 0 || S.height === 0) throw new Error("Given canvas must have data. Canvas width: " + S.width + ", height: " + S.height);
      var it;
      switch (j) {
        case "PNG":
          it = "image/png";
          break;
        case "WEBP":
          it = "image/webp";
          break;
        default:
          it = "image/jpeg";
      }
      return Ss(S.toDataURL(it, 1).split("base64,").pop());
    }
  }, F = function(S) {
    var j = this.internal.collections[t + "images"];
    if (j) {
      for (var W in j) if (S === j[W].alias) return j[W];
    }
  }, P = function(S, j, W) {
    return S || j || (S = -96, j = -96), S < 0 && (S = -1 * W.width * 72 / S / this.internal.scaleFactor), j < 0 && (j = -1 * W.height * 72 / j / this.internal.scaleFactor), S === 0 && (S = j * W.width / W.height), j === 0 && (j = S * W.height / W.width), [S, j];
  }, M = function(S, j, W, U, it, ot) {
    var ft = P.call(this, W, U, it), nt = this.internal.getCoordinateString, dt = this.internal.getVerticalCoordinateString, At = d.call(this);
    if (W = ft[0], U = ft[1], At[it.index] = it, ot) {
      ot *= Math.PI / 180;
      var wt = Math.cos(ot), _ = Math.sin(ot), B = function(G) {
        return G.toFixed(4);
      }, R = [B(wt), B(_), B(-1 * _), B(wt), 0, 0, "cm"];
    }
    this.internal.write("q"), ot ? (this.internal.write([1, "0", "0", 1, nt(S), dt(j + U), "cm"].join(" ")), this.internal.write(R.join(" ")), this.internal.write([nt(W), "0", "0", nt(U), "0", "0", "cm"].join(" "))) : this.internal.write([nt(W), "0", "0", nt(U), nt(S), dt(j + U), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + it.index + " Do"), this.internal.write("Q");
  }, L = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var z = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, H = n.__addimage__.sHashCode = function(S) {
    var j, W, U = 0;
    if (typeof S == "string") for (W = S.length, j = 0; j < W; j++) U = (U << 5) - U + S.charCodeAt(j), U |= 0;
    else if (mt(S)) for (W = S.byteLength / 2, j = 0; j < W; j++) U = (U << 5) - U + S[j], U |= 0;
    return U;
  }, D = n.__addimage__.validateStringAsBase64 = function(S) {
    (S = S || "").toString().trim();
    var j = !0;
    return S.length === 0 && (j = !1), S.length % 4 != 0 && (j = !1), /^[A-Za-z0-9+/]+$/.test(S.substr(0, S.length - 2)) === !1 && (j = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(S.substr(-2)) === !1 && (j = !1), j;
  }, rt = n.__addimage__.extractImageFromDataUrl = function(S) {
    if (S == null || !(S = S.trim()).startsWith("data:")) return null;
    var j = S.indexOf(",");
    return j < 0 ? null : S.substring(0, j).trim().endsWith("base64") ? S.substring(j + 1) : null;
  };
  n.__addimage__.isArrayBuffer = function(S) {
    return S instanceof ArrayBuffer;
  };
  var mt = n.__addimage__.isArrayBufferView = function(S) {
    return S instanceof Int8Array || S instanceof Uint8Array || S instanceof Uint8ClampedArray || S instanceof Int16Array || S instanceof Uint16Array || S instanceof Int32Array || S instanceof Uint32Array || S instanceof Float32Array || S instanceof Float64Array;
  }, ht = n.__addimage__.binaryStringToUint8Array = function(S) {
    for (var j = S.length, W = new Uint8Array(j), U = 0; U < j; U++) W[U] = S.charCodeAt(U);
    return W;
  }, X = n.__addimage__.arrayBufferToBinaryString = function(S) {
    for (var j = "", W = mt(S) ? S : new Uint8Array(S), U = 0; U < W.length; U += 8192) j += String.fromCharCode.apply(null, W.subarray(U, U + 8192));
    return j;
  };
  n.addImage = function() {
    var S, j, W, U, it, ot, ft, nt, dt;
    if (typeof arguments[1] == "number" ? (j = e, W = arguments[1], U = arguments[2], it = arguments[3], ot = arguments[4], ft = arguments[5], nt = arguments[6], dt = arguments[7]) : (j = arguments[1], W = arguments[2], U = arguments[3], it = arguments[4], ot = arguments[5], ft = arguments[6], nt = arguments[7], dt = arguments[8]), xe(S = arguments[0]) === "object" && !N(S) && "imageData" in S) {
      var At = S;
      S = At.imageData, j = At.format || j || e, W = At.x || W || 0, U = At.y || U || 0, it = At.w || At.width || it, ot = At.h || At.height || ot, ft = At.alias || ft, nt = At.compression || nt, dt = At.rotation || At.angle || dt;
    }
    var wt = this.internal.getFilters();
    if (nt === void 0 && wt.indexOf("FlateEncode") !== -1 && (nt = "SLOW"), isNaN(W) || isNaN(U)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    h.call(this);
    var _ = T.call(this, S, j, ft, nt);
    return M.call(this, W, U, it, ot, _, dt), this;
  };
  var T = function(S, j, W, U) {
    var it, ot, ft;
    if (typeof S == "string" && s(S) === e) {
      S = unescape(S);
      var nt = tt(S, !1);
      (nt !== "" || (nt = n.loadFile(S, !0)) !== void 0) && (S = nt);
    }
    if (N(S) && (S = g(S, j)), j = s(S, j), !y(j)) throw new Error("addImage does not support files of type '" + j + "', please ensure that a plugin for '" + j + "' support is added.");
    if (((ft = W) == null || ft.length === 0) && (W = (function(dt) {
      return typeof dt == "string" || mt(dt) ? H(dt) : mt(dt.data) ? H(dt.data) : null;
    })(S)), (it = F.call(this, W)) || (S instanceof Uint8Array || j === "RGBA" || (ot = S, S = ht(S)), it = this["process" + j.toUpperCase()](S, p.call(this), W, (function(dt) {
      return dt && typeof dt == "string" && (dt = dt.toUpperCase()), dt in n.image_compression ? dt : z.NONE;
    })(U), ot)), !it) throw new Error("An unknown error occurred whilst processing the image.");
    return it;
  }, tt = n.__addimage__.convertBase64ToBinaryString = function(S, j) {
    j = typeof j != "boolean" || j;
    var W, U = "";
    if (typeof S == "string") {
      var it;
      W = (it = rt(S)) !== null && it !== void 0 ? it : S;
      try {
        U = Ss(W);
      } catch (ot) {
        if (j) throw D(W) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + ot.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return U;
  };
  n.getImageProperties = function(S) {
    var j, W, U = "";
    if (N(S) && (S = g(S)), typeof S == "string" && s(S) === e && ((U = tt(S, !1)) === "" && (U = n.loadFile(S) || ""), S = U), W = s(S), !y(W)) throw new Error("addImage does not support files of type '" + W + "', please ensure that a plugin for '" + W + "' support is added.");
    if (S instanceof Uint8Array || (S = ht(S)), !(j = this["process" + W.toUpperCase()](S))) throw new Error("An unknown error occurred whilst processing the image");
    return j.fileType = W, j;
  };
})(Tt.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(e) {
    if (e !== void 0 && e != "") return !0;
  };
  Tt.API.events.push(["addPage", function(e) {
    this.internal.getPageInfo(e.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(e) {
    for (var i, s, a, c = this.internal.getCoordinateString, l = this.internal.getVerticalCoordinateString, h = this.internal.getPageInfoByObjId(e.objId), d = e.pageContext.annotations, p = !1, y = 0; y < d.length && !p; y++) switch ((i = d[y]).type) {
      case "link":
        (t(i.options.url) || t(i.options.pageNumber)) && (p = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        p = !0;
    }
    if (p != 0) {
      this.internal.write("/Annots [");
      for (var N = 0; N < d.length; N++) {
        i = d[N];
        var g = this.internal.pdfEscape, F = this.internal.getEncryptor(e.objId);
        switch (i.type) {
          case "reference":
            this.internal.write(" " + i.object.objId + " 0 R ");
            break;
          case "text":
            var P = this.internal.newAdditionalObject(), M = this.internal.newAdditionalObject(), L = this.internal.getEncryptor(P.objId), z = i.title || "Note";
            a = "<</Type /Annot /Subtype /Text " + (s = "/Rect [" + c(i.bounds.x) + " " + l(i.bounds.y + i.bounds.h) + " " + c(i.bounds.x + i.bounds.w) + " " + l(i.bounds.y) + "] ") + "/Contents (" + g(L(i.contents)) + ")", a += " /Popup " + M.objId + " 0 R", a += " /P " + h.objId + " 0 R", a += " /T (" + g(L(z)) + ") >>", P.content = a;
            var H = P.objId + " 0 R";
            a = "<</Type /Annot /Subtype /Popup " + (s = "/Rect [" + c(i.bounds.x + 30) + " " + l(i.bounds.y + i.bounds.h) + " " + c(i.bounds.x + i.bounds.w + 30) + " " + l(i.bounds.y) + "] ") + " /Parent " + H, i.open && (a += " /Open true"), a += " >>", M.content = a, this.internal.write(P.objId, "0 R", M.objId, "0 R");
            break;
          case "freetext":
            s = "/Rect [" + c(i.bounds.x) + " " + l(i.bounds.y) + " " + c(i.bounds.x + i.bounds.w) + " " + l(i.bounds.y + i.bounds.h) + "] ";
            var D = "font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + (i.color || "#000000");
            a = "<</Type /Annot /Subtype /FreeText " + s + "/Contents (" + g(F(i.contents)) + ")", a += " /DS(" + g(F(D)) + ")", a += " /Border [0 0 0]", a += " >>", this.internal.write(a);
            break;
          case "link":
            if (i.options.name) {
              var rt = this.annotations._nameMap[i.options.name];
              i.options.pageNumber = rt.page, i.options.top = rt.y;
            } else i.options.top || (i.options.top = 0);
            if (s = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", a = "", i.options.url) a = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /A <</S /URI /URI (" + g(F(i.options.url)) + ") >>";
            else if (i.options.pageNumber) switch (a = "<</Type /Annot /Subtype /Link " + s + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
              case "Fit":
                a += " /Fit]";
                break;
              case "FitH":
                a += " /FitH " + i.options.top + "]";
                break;
              case "FitV":
                i.options.left = i.options.left || 0, a += " /FitV " + i.options.left + "]";
                break;
              default:
                var mt = l(i.options.top);
                i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), a += " /XYZ " + i.options.left + " " + mt + " " + i.options.zoom + "]";
            }
            a != "" && (a += " >>", this.internal.write(a));
        }
      }
      this.internal.write("]");
    }
  }]), n.createAnnotation = function(e) {
    var i = this.internal.getCurrentPageInfo();
    switch (e.type) {
      case "link":
        this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
        break;
      case "text":
      case "freetext":
        i.pageContext.annotations.push(e);
    }
  }, n.link = function(e, i, s, a, c) {
    var l = this.internal.getCurrentPageInfo(), h = this.internal.getCoordinateString, d = this.internal.getVerticalCoordinateString;
    l.pageContext.annotations.push({ finalBounds: { x: h(e), y: d(i), w: h(e + s), h: d(i + a) }, options: c, type: "link" });
  }, n.textWithLink = function(e, i, s, a) {
    var c, l, h = this.getTextWidth(e), d = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (a.maxWidth !== void 0) {
      l = a.maxWidth;
      var p = this.splitTextToSize(e, l).length;
      c = Math.ceil(d * p);
    } else l = h, c = d;
    return this.text(e, i, s, a), s += 0.2 * d, a.align === "center" && (i -= h / 2), a.align === "right" && (i -= h), this.link(i, s - d, l, c, a), h;
  }, n.getTextWidth = function(e) {
    var i = this.internal.getFontSize();
    return this.getStringUnitWidth(e) * i / this.internal.scaleFactor;
  };
})(Tt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, e = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, s = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var a = n.__arabicParser__.isInArabicSubstitutionA = function(P) {
    return t[P.charCodeAt(0)] !== void 0;
  }, c = n.__arabicParser__.isArabicLetter = function(P) {
    return typeof P == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(P);
  }, l = n.__arabicParser__.isArabicEndLetter = function(P) {
    return c(P) && a(P) && t[P.charCodeAt(0)].length <= 2;
  }, h = n.__arabicParser__.isArabicAlfLetter = function(P) {
    return c(P) && s.indexOf(P.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(P) {
    return c(P) && a(P) && t[P.charCodeAt(0)].length >= 1;
  };
  var d = n.__arabicParser__.arabicLetterHasFinalForm = function(P) {
    return c(P) && a(P) && t[P.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(P) {
    return c(P) && a(P) && t[P.charCodeAt(0)].length >= 3;
  };
  var p = n.__arabicParser__.arabicLetterHasMedialForm = function(P) {
    return c(P) && a(P) && t[P.charCodeAt(0)].length == 4;
  }, y = n.__arabicParser__.resolveLigatures = function(P) {
    var M = 0, L = e, z = "", H = 0;
    for (M = 0; M < P.length; M += 1) L[P.charCodeAt(M)] !== void 0 ? (H++, typeof (L = L[P.charCodeAt(M)]) == "number" && (z += String.fromCharCode(L), L = e, H = 0), M === P.length - 1 && (L = e, z += P.charAt(M - (H - 1)), M -= H - 1, H = 0)) : (L = e, z += P.charAt(M - H), M -= H, H = 0);
    return z;
  };
  n.__arabicParser__.isArabicDiacritic = function(P) {
    return P !== void 0 && i[P.charCodeAt(0)] !== void 0;
  };
  var N = n.__arabicParser__.getCorrectForm = function(P, M, L) {
    return c(P) ? a(P) === !1 ? -1 : !d(P) || !c(M) && !c(L) || !c(L) && l(M) || l(P) && !c(M) || l(P) && h(M) || l(P) && l(M) ? 0 : p(P) && c(M) && !l(M) && c(L) && d(L) ? 3 : l(P) || !c(L) ? 1 : 2 : -1;
  }, g = function(P) {
    var M = 0, L = 0, z = 0, H = "", D = "", rt = "", mt = (P = P || "").split("\\s+"), ht = [];
    for (M = 0; M < mt.length; M += 1) {
      for (ht.push(""), L = 0; L < mt[M].length; L += 1) H = mt[M][L], D = mt[M][L - 1], rt = mt[M][L + 1], c(H) ? (z = N(H, D, rt), ht[M] += z !== -1 ? String.fromCharCode(t[H.charCodeAt(0)][z]) : H) : ht[M] += H;
      ht[M] = y(ht[M]);
    }
    return ht.join(" ");
  }, F = n.__arabicParser__.processArabic = n.processArabic = function() {
    var P, M = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, L = [];
    if (Array.isArray(M)) {
      var z = 0;
      for (L = [], z = 0; z < M.length; z += 1) Array.isArray(M[z]) ? L.push([g(M[z][0]), M[z][1], M[z][2]]) : L.push([g(M[z])]);
      P = L;
    } else P = g(M);
    return typeof arguments[0] == "string" ? P : (arguments[0].text = P, arguments[0]);
  };
  n.events.push(["preProcessText", F]);
})(Tt.API), Tt.API.autoPrint = function(n) {
  var t;
  return (n = n || {}).variant = n.variant || "non-conform", n.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    this.internal.out("/OpenAction " + t + " 0 R");
  })), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function() {
    var e = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return e;
    }, set: function(l) {
      e = l;
    } });
    var i = 150;
    Object.defineProperty(this, "width", { get: function() {
      return i;
    }, set: function(l) {
      i = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 150 : l, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1);
    } });
    var s = 300;
    Object.defineProperty(this, "height", { get: function() {
      return s;
    }, set: function(l) {
      s = isNaN(l) || Number.isInteger(l) === !1 || l < 0 ? 300 : l, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = s + 1);
    } });
    var a = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return a;
    }, set: function(l) {
      a = l;
    } });
    var c = {};
    Object.defineProperty(this, "style", { get: function() {
      return c;
    }, set: function(l) {
      c = l;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(e, i) {
    var s;
    if ((e = e || "2d") !== "2d") return null;
    for (s in i) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = i[s]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
})(Tt.API), (function(n) {
  var t = { left: 0, top: 0, bottom: 0, right: 0 }, e = !1, i = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), s.call(this));
  }, s = function() {
    this.internal.__cell__.lastCell = new a(), this.internal.__cell__.pages = 1;
  }, a = function() {
    var h = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return h;
    }, set: function(P) {
      h = P;
    } });
    var d = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return d;
    }, set: function(P) {
      d = P;
    } });
    var p = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return p;
    }, set: function(P) {
      p = P;
    } });
    var y = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return y;
    }, set: function(P) {
      y = P;
    } });
    var N = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return N;
    }, set: function(P) {
      N = P;
    } });
    var g = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return g;
    }, set: function(P) {
      g = P;
    } });
    var F = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return F;
    }, set: function(P) {
      F = P;
    } }), this;
  };
  a.prototype.clone = function() {
    return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, a.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(h) {
    return i.call(this), this.internal.__cell__.headerFunction = typeof h == "function" ? h : void 0, this;
  }, n.getTextDimensions = function(h, d) {
    i.call(this);
    var p = (d = d || {}).fontSize || this.getFontSize(), y = d.font || this.getFont(), N = d.scaleFactor || this.internal.scaleFactor, g = 0, F = 0, P = 0, M = this;
    if (!Array.isArray(h) && typeof h != "string") {
      if (typeof h != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      h = String(h);
    }
    var L = d.maxWidth;
    L > 0 ? typeof h == "string" ? h = this.splitTextToSize(h, L) : Object.prototype.toString.call(h) === "[object Array]" && (h = h.reduce(function(H, D) {
      return H.concat(M.splitTextToSize(D, L));
    }, [])) : h = Array.isArray(h) ? h : [h];
    for (var z = 0; z < h.length; z++) g < (P = this.getStringUnitWidth(h[z], { font: y }) * p) && (g = P);
    return g !== 0 && (F = h.length), { w: g /= N, h: Math.max((F * p * this.getLineHeightFactor() - p * (this.getLineHeightFactor() - 1)) / N, 0) };
  }, n.cellAddPage = function() {
    i.call(this), this.addPage();
    var h = this.internal.__cell__.margins || t;
    return this.internal.__cell__.lastCell = new a(h.left, h.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var c = n.cell = function() {
    var h;
    h = arguments[0] instanceof a ? arguments[0] : new a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), i.call(this);
    var d = this.internal.__cell__.lastCell, p = this.internal.__cell__.padding, y = this.internal.__cell__.margins || t, N = this.internal.__cell__.tableHeaderRow, g = this.internal.__cell__.printHeaders;
    return d.lineNumber !== void 0 && (d.lineNumber === h.lineNumber ? (h.x = (d.x || 0) + (d.width || 0), h.y = d.y || 0) : d.y + d.height + h.height + y.bottom > this.getPageHeight() ? (this.cellAddPage(), h.y = y.top, g && N && (this.printHeaderRow(h.lineNumber, !0), h.y += N[0].height)) : h.y = d.y + d.height || h.y), h.text[0] !== void 0 && (this.rect(h.x, h.y, h.width, h.height, e === !0 ? "FD" : void 0), h.align === "right" ? this.text(h.text, h.x + h.width - p, h.y + p, { align: "right", baseline: "top" }) : h.align === "center" ? this.text(h.text, h.x + h.width / 2, h.y + p, { align: "center", baseline: "top", maxWidth: h.width - p - p }) : this.text(h.text, h.x + p, h.y + p, { align: "left", baseline: "top", maxWidth: h.width - p - p })), this.internal.__cell__.lastCell = h, this;
  };
  n.table = function(h, d, p, y, N) {
    if (i.call(this), !p) throw new Error("No data for PDF table.");
    var g, F, P, M, L = [], z = [], H = [], D = {}, rt = {}, mt = [], ht = [], X = (N = N || {}).autoSize || !1, T = N.printHeaders !== !1, tt = N.css && N.css["font-size"] !== void 0 ? 16 * N.css["font-size"] : N.fontSize || 12, S = N.margins || Object.assign({ width: this.getPageWidth() }, t), j = typeof N.padding == "number" ? N.padding : 3, W = N.headerBackgroundColor || "#c8c8c8", U = N.headerTextColor || "#000";
    if (s.call(this), this.internal.__cell__.printHeaders = T, this.internal.__cell__.margins = S, this.internal.__cell__.table_font_size = tt, this.internal.__cell__.padding = j, this.internal.__cell__.headerBackgroundColor = W, this.internal.__cell__.headerTextColor = U, this.setFontSize(tt), y == null) z = L = Object.keys(p[0]), H = L.map(function() {
      return "left";
    });
    else if (Array.isArray(y) && xe(y[0]) === "object") for (L = y.map(function(At) {
      return At.name;
    }), z = y.map(function(At) {
      return At.prompt || At.name || "";
    }), H = y.map(function(At) {
      return At.align || "left";
    }), g = 0; g < y.length; g += 1) rt[y[g].name] = 0.7499990551181103 * y[g].width;
    else Array.isArray(y) && typeof y[0] == "string" && (z = L = y, H = L.map(function() {
      return "left";
    }));
    if (X || Array.isArray(y) && typeof y[0] == "string") for (g = 0; g < L.length; g += 1) {
      for (D[M = L[g]] = p.map(function(At) {
        return At[M];
      }), this.setFont(void 0, "bold"), mt.push(this.getTextDimensions(z[g], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), F = D[M], this.setFont(void 0, "normal"), P = 0; P < F.length; P += 1) mt.push(this.getTextDimensions(F[P], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      rt[M] = Math.max.apply(null, mt) + j + j, mt = [];
    }
    if (T) {
      var it = {};
      for (g = 0; g < L.length; g += 1) it[L[g]] = {}, it[L[g]].text = z[g], it[L[g]].align = H[g];
      var ot = l.call(this, it, rt);
      ht = L.map(function(At) {
        return new a(h, d, rt[At], ot, it[At].text, void 0, it[At].align);
      }), this.setTableHeaderRow(ht), this.printHeaderRow(1, !1);
    }
    var ft = y.reduce(function(At, wt) {
      return At[wt.name] = wt.align, At;
    }, {});
    for (g = 0; g < p.length; g += 1) {
      "rowStart" in N && N.rowStart instanceof Function && N.rowStart({ row: g, data: p[g] }, this);
      var nt = l.call(this, p[g], rt);
      for (P = 0; P < L.length; P += 1) {
        var dt = p[g][L[P]];
        "cellStart" in N && N.cellStart instanceof Function && N.cellStart({ row: g, col: P, data: dt }, this), c.call(this, new a(h, d, rt[L[P]], nt, dt, g + 2, ft[L[P]]));
      }
    }
    return this.internal.__cell__.table_x = h, this.internal.__cell__.table_y = d, this;
  };
  var l = function(h, d) {
    var p = this.internal.__cell__.padding, y = this.internal.__cell__.table_font_size, N = this.internal.scaleFactor;
    return Object.keys(h).map(function(g) {
      var F = h[g];
      return this.splitTextToSize(F.hasOwnProperty("text") ? F.text : F, d[g] - p - p);
    }, this).map(function(g) {
      return this.getLineHeightFactor() * g.length * y / N + p + p;
    }, this).reduce(function(g, F) {
      return Math.max(g, F);
    }, 0);
  };
  n.setTableHeaderRow = function(h) {
    i.call(this), this.internal.__cell__.tableHeaderRow = h;
  }, n.printHeaderRow = function(h, d) {
    if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var p;
    if (e = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var y = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new a(y[0], y[1], y[2], y[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var N = [], g = 0; g < this.internal.__cell__.tableHeaderRow.length; g += 1) {
      p = this.internal.__cell__.tableHeaderRow[g].clone(), d && (p.y = this.internal.__cell__.margins.top || 0, N.push(p)), p.lineNumber = h;
      var F = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), c.call(this, p), this.setTextColor(F);
    }
    N.length > 0 && this.setTableHeaderRow(N), this.setFont(void 0, "normal"), e = !1;
  };
})(Tt.API);
var Uh = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, zh = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Zo = qh(zh), Hh = [100, 200, 300, 400, 500, 600, 700, 800, 900], Q1 = qh(Hh);
function Mo(n) {
  var t = n.family.replace(/"|'/g, "").toLowerCase(), e = (function(a) {
    return Uh[a = a || "normal"] ? a : "normal";
  })(n.style), i = (function(a) {
    return a ? typeof a == "number" ? a >= 100 && a <= 900 && a % 100 == 0 ? a : 400 : /^\d00$/.test(a) ? parseInt(a) : a === "bold" ? 700 : 400 : 400;
  })(n.weight), s = (function(a) {
    return typeof Zo[a = a || "normal"] == "number" ? a : "normal";
  })(n.stretch);
  return { family: t, style: e, weight: i, stretch: s, src: n.src || [], ref: n.ref || { name: t, style: [s, e, i].join(" ") } };
}
function Ru(n, t, e, i) {
  var s;
  for (s = e; s >= 0 && s < t.length; s += i) if (n[t[s]]) return n[t[s]];
  for (s = e; s >= 0 && s < t.length; s -= i) if (n[t[s]]) return n[t[s]];
}
var t2 = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, Du = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function qu(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function Uu(n) {
  return n.trimLeft();
}
function e2(n, t) {
  for (var e = 0; e < n.length; ) {
    if (n.charAt(e) === t) return [n.substring(0, e), n.substring(e + 1)];
    e += 1;
  }
  return null;
}
function n2(n) {
  var t = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], n.substring(t[0].length)];
}
var Xi, As, zu, Hu, Wu, To = ["times"];
function Gu(n, t, e, i, s) {
  var a = 4, c = Yu;
  switch (s) {
    case Tt.API.image_compression.FAST:
      a = 1, c = Vu;
      break;
    case Tt.API.image_compression.MEDIUM:
      a = 6, c = Ju;
      break;
    case Tt.API.image_compression.SLOW:
      a = 9, c = $u;
  }
  n = (function(h, d, p, y) {
    for (var N, g = h.length / d, F = new Uint8Array(h.length + g), P = [r2, Vu, Yu, Ju, $u], M = 0; M < g; M += 1) {
      var L = M * d, z = h.subarray(L, L + d);
      if (y) F.set(y(z, p, N), L + M);
      else {
        for (var H = P.length, D = [], rt = 0; rt < H; rt += 1) D[rt] = P[rt](z, p, N);
        var mt = a2(D.concat());
        F.set(D[mt], L + M);
      }
      N = z;
    }
    return F;
  })(n, t, Math.ceil(e * i / 8), c);
  var l = Go(n, { level: a });
  return Tt.API.__addimage__.arrayBufferToBinaryString(l);
}
function r2(n) {
  var t = Array.apply([], n);
  return t.unshift(0), t;
}
function Vu(n, t) {
  var e = n.length, i = [];
  i[0] = 1;
  for (var s = 0; s < e; s += 1) {
    var a = n[s - t] || 0;
    i[s + 1] = n[s] - a + 256 & 255;
  }
  return i;
}
function Yu(n, t, e) {
  var i = n.length, s = [];
  s[0] = 2;
  for (var a = 0; a < i; a += 1) {
    var c = e && e[a] || 0;
    s[a + 1] = n[a] - c + 256 & 255;
  }
  return s;
}
function Ju(n, t, e) {
  var i = n.length, s = [];
  s[0] = 3;
  for (var a = 0; a < i; a += 1) {
    var c = n[a - t] || 0, l = e && e[a] || 0;
    s[a + 1] = n[a] + 256 - (c + l >>> 1) & 255;
  }
  return s;
}
function $u(n, t, e) {
  var i = n.length, s = [];
  s[0] = 4;
  for (var a = 0; a < i; a += 1) {
    var c = i2(n[a - t] || 0, e && e[a] || 0, e && e[a - t] || 0);
    s[a + 1] = n[a] - c + 256 & 255;
  }
  return s;
}
function i2(n, t, e) {
  if (n === t && t === e) return n;
  var i = Math.abs(t - e), s = Math.abs(n - e), a = Math.abs(n + t - e - e);
  return i <= s && i <= a ? n : s <= a ? t : e;
}
function a2(n) {
  var t = n.map(function(e) {
    return e.reduce(function(i, s) {
      return i + Math.abs(s);
    }, 0);
  });
  return t.indexOf(Math.min.apply(null, t));
}
function Ro(n, t, e) {
  var i = t * e, s = Math.floor(i / 8), a = 16 - (i - 8 * s + e), c = (1 << e) - 1;
  return Wh(n, s) >> a & c;
}
function Xu(n, t, e, i) {
  var s = e * i, a = Math.floor(s / 8), c = 16 - (s - 8 * a + i), l = (1 << i) - 1, h = (t & l) << c;
  (function(d, p, y) {
    if (p + 1 < d.byteLength) d.setUint16(p, y, !1);
    else {
      var N = y >> 8 & 255;
      d.setUint8(p, N);
    }
  })(n, a, Wh(n, a) & ~(l << c) & 65535 | h);
}
function Wh(n, t) {
  return t + 1 < n.byteLength ? n.getUint16(t, !1) : n.getUint8(t) << 8;
}
function s2(n) {
  var t = 0;
  if (n[t++] !== 71 || n[t++] !== 73 || n[t++] !== 70 || n[t++] !== 56 || (n[t++] + 1 & 253) != 56 || n[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var e = n[t++] | n[t++] << 8, i = n[t++] | n[t++] << 8, s = n[t++], a = s >> 7, c = 1 << 1 + (7 & s);
  n[t++], n[t++];
  var l = null, h = null;
  a && (l = t, h = c, t += 3 * c);
  var d = !0, p = [], y = 0, N = null, g = 0, F = null;
  for (this.width = e, this.height = i; d && t < n.length; ) switch (n[t++]) {
    case 33:
      switch (n[t++]) {
        case 255:
          if (n[t] !== 11 || n[t + 1] == 78 && n[t + 2] == 69 && n[t + 3] == 84 && n[t + 4] == 83 && n[t + 5] == 67 && n[t + 6] == 65 && n[t + 7] == 80 && n[t + 8] == 69 && n[t + 9] == 50 && n[t + 10] == 46 && n[t + 11] == 48 && n[t + 12] == 3 && n[t + 13] == 1 && n[t + 16] == 0) t += 14, F = n[t++] | n[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((S = n[t++]) >= 0)) throw Error("Invalid block size");
            if (S === 0) break;
            t += S;
          }
          break;
        case 249:
          if (n[t++] !== 4 || n[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var P = n[t++];
          y = n[t++] | n[t++] << 8, N = n[t++], 1 & P || (N = null), g = P >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((S = n[t++]) >= 0)) throw Error("Invalid block size");
            if (S === 0) break;
            t += S;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[t - 1].toString(16));
      }
      break;
    case 44:
      var M = n[t++] | n[t++] << 8, L = n[t++] | n[t++] << 8, z = n[t++] | n[t++] << 8, H = n[t++] | n[t++] << 8, D = n[t++], rt = D >> 6 & 1, mt = 1 << 1 + (7 & D), ht = l, X = h, T = !1;
      D >> 7 && (T = !0, ht = t, X = mt, t += 3 * mt);
      var tt = t;
      for (t++; ; ) {
        var S;
        if (!((S = n[t++]) >= 0)) throw Error("Invalid block size");
        if (S === 0) break;
        t += S;
      }
      p.push({ x: M, y: L, width: z, height: H, has_local_palette: T, palette_offset: ht, palette_size: X, data_offset: tt, data_length: t - tt, transparent_index: N, interlaced: !!rt, delay: y, disposal: g });
      break;
    case 59:
      d = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[t - 1].toString(16));
  }
  this.numFrames = function() {
    return p.length;
  }, this.loopCount = function() {
    return F;
  }, this.frameInfo = function(j) {
    if (j < 0 || j >= p.length) throw new Error("Frame index out of range.");
    return p[j];
  }, this.decodeAndBlitFrameBGRA = function(j, W) {
    var U = this.frameInfo(j), it = U.width * U.height;
    if (it > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    var ot = new Uint8Array(it);
    Ku(n, U.data_offset, ot, it);
    var ft = U.palette_offset, nt = U.transparent_index;
    nt === null && (nt = 256);
    var dt = U.width, At = e - dt, wt = dt, _ = 4 * (U.y * e + U.x), B = 4 * ((U.y + U.height) * e + U.x), R = _, G = 4 * At;
    U.interlaced === !0 && (G += 4 * e * 7);
    for (var J = 8, Z = 0, at = ot.length; Z < at; ++Z) {
      var st = ot[Z];
      if (wt === 0 && (wt = dt, (R += G) >= B && (G = 4 * At + 4 * e * (J - 1), R = _ + (dt + At) * (J << 1), J >>= 1)), st === nt) R += 4;
      else {
        var gt = n[ft + 3 * st], _t = n[ft + 3 * st + 1], kt = n[ft + 3 * st + 2];
        W[R++] = kt, W[R++] = _t, W[R++] = gt, W[R++] = 255;
      }
      --wt;
    }
  }, this.decodeAndBlitFrameRGBA = function(j, W) {
    var U = this.frameInfo(j), it = U.width * U.height;
    if (it > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    var ot = new Uint8Array(it);
    Ku(n, U.data_offset, ot, it);
    var ft = U.palette_offset, nt = U.transparent_index;
    nt === null && (nt = 256);
    var dt = U.width, At = e - dt, wt = dt, _ = 4 * (U.y * e + U.x), B = 4 * ((U.y + U.height) * e + U.x), R = _, G = 4 * At;
    U.interlaced === !0 && (G += 4 * e * 7);
    for (var J = 8, Z = 0, at = ot.length; Z < at; ++Z) {
      var st = ot[Z];
      if (wt === 0 && (wt = dt, (R += G) >= B && (G = 4 * At + 4 * e * (J - 1), R = _ + (dt + At) * (J << 1), J >>= 1)), st === nt) R += 4;
      else {
        var gt = n[ft + 3 * st], _t = n[ft + 3 * st + 1], kt = n[ft + 3 * st + 2];
        W[R++] = gt, W[R++] = _t, W[R++] = kt, W[R++] = 255;
      }
      --wt;
    }
  };
}
function Ku(n, t, e, i) {
  for (var s = n[t++], a = 1 << s, c = a + 1, l = c + 1, h = s + 1, d = (1 << h) - 1, p = 0, y = 0, N = 0, g = n[t++], F = new Int32Array(4096), P = null; ; ) {
    for (; p < 16 && g !== 0; ) y |= n[t++] << p, p += 8, g === 1 ? g = n[t++] : --g;
    if (p < h) break;
    var M = y & d;
    if (y >>= h, p -= h, M !== a) {
      if (M === c) break;
      for (var L = M < l ? M : P, z = 0, H = L; H > a; ) H = F[H] >> 8, ++z;
      var D = H;
      if (N + z + (L !== M ? 1 : 0) > i) return void Le.log("Warning, gif stream longer than expected.");
      e[N++] = D;
      var rt = N += z;
      for (L !== M && (e[N++] = D), H = L; z--; ) H = F[H], e[--rt] = 255 & H, H >>= 8;
      P !== null && l < 4096 && (F[l++] = P << 8 | D, l >= d + 1 && h < 12 && (++h, d = d << 1 | 1)), P = M;
    } else l = c + 1, d = (1 << (h = s + 1)) - 1, P = null;
  }
  return N !== i && Le.log("Warning, gif stream shorter than expected."), e;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function Do(n) {
  var t, e, i, s, a, c = Math.floor, l = new Array(64), h = new Array(64), d = new Array(64), p = new Array(64), y = new Array(65535), N = new Array(65535), g = new Array(64), F = new Array(64), P = [], M = 0, L = 7, z = new Array(64), H = new Array(64), D = new Array(64), rt = new Array(256), mt = new Array(2048), ht = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], X = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], T = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], tt = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], S = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], j = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], W = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], U = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], it = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function ot(_, B) {
    for (var R = 0, G = 0, J = new Array(), Z = 1; Z <= 16; Z++) {
      for (var at = 1; at <= _[Z]; at++) J[B[G]] = [], J[B[G]][0] = R, J[B[G]][1] = Z, G++, R++;
      R *= 2;
    }
    return J;
  }
  function ft(_) {
    for (var B = _[0], R = _[1] - 1; R >= 0; ) B & 1 << R && (M |= 1 << L), R--, --L < 0 && (M == 255 ? (nt(255), nt(0)) : nt(M), L = 7, M = 0);
  }
  function nt(_) {
    P.push(_);
  }
  function dt(_) {
    nt(_ >> 8 & 255), nt(255 & _);
  }
  function At(_, B, R, G, J) {
    for (var Z, at = J[0], st = J[240], gt = (function(yt, Wt) {
      var It, zt, qt, ve, ue, Zt, fe, he, Bt, ne, Rt = 0;
      for (Bt = 0; Bt < 8; ++Bt) {
        It = yt[Rt], zt = yt[Rt + 1], qt = yt[Rt + 2], ve = yt[Rt + 3], ue = yt[Rt + 4], Zt = yt[Rt + 5], fe = yt[Rt + 6];
        var ze = It + (he = yt[Rt + 7]), ge = It - he, se = zt + fe, oe = zt - fe, Oe = qt + Zt, Ut = qt - Zt, Se = ve + ue, Yt = ve - ue, Qt = ze + Se, je = ze - Se, le = se + Oe, Gt = se - Oe;
        yt[Rt] = Qt + le, yt[Rt + 4] = Qt - le;
        var be = 0.707106781 * (Gt + je);
        yt[Rt + 2] = je + be, yt[Rt + 6] = je - be;
        var Qr = 0.382683433 * ((Qt = Yt + Ut) - (Gt = oe + ge)), hn = 0.5411961 * Qt + Qr, br = 1.306562965 * Gt + Qr, rr = 0.707106781 * (le = Ut + oe), Vt = ge + rr, wr = ge - rr;
        yt[Rt + 5] = wr + hn, yt[Rt + 3] = wr - hn, yt[Rt + 1] = Vt + br, yt[Rt + 7] = Vt - br, Rt += 8;
      }
      for (Rt = 0, Bt = 0; Bt < 8; ++Bt) {
        It = yt[Rt], zt = yt[Rt + 8], qt = yt[Rt + 16], ve = yt[Rt + 24], ue = yt[Rt + 32], Zt = yt[Rt + 40], fe = yt[Rt + 48];
        var yr = It + (he = yt[Rt + 56]), Rn = It - he, Dn = zt + fe, Re = zt - fe, nn = qt + Zt, an = qt - Zt, ti = ve + ue, jr = ve - ue, Vn = yr + ti, ir = yr - ti, Yn = Dn + nn, Jn = Dn - nn;
        yt[Rt] = Vn + Yn, yt[Rt + 32] = Vn - Yn;
        var qn = 0.707106781 * (Jn + ir);
        yt[Rt + 16] = ir + qn, yt[Rt + 48] = ir - qn;
        var ei = 0.382683433 * ((Vn = jr + an) - (Jn = Re + Rn)), ar = 0.5411961 * Vn + ei, ni = 1.306562965 * Jn + ei, Si = 0.707106781 * (Yn = an + Re), ki = Rn + Si, Pi = Rn - Si;
        yt[Rt + 40] = Pi + ar, yt[Rt + 24] = Pi - ar, yt[Rt + 8] = ki + ni, yt[Rt + 56] = ki - ni, Rt++;
      }
      for (Bt = 0; Bt < 64; ++Bt) ne = yt[Bt] * Wt[Bt], g[Bt] = ne > 0 ? ne + 0.5 | 0 : ne - 0.5 | 0;
      return g;
    })(_, B), _t = 0; _t < 64; ++_t) F[ht[_t]] = gt[_t];
    var kt = F[0] - R;
    R = F[0], kt == 0 ? ft(G[0]) : (ft(G[N[Z = 32767 + kt]]), ft(y[Z]));
    for (var St = 63; St > 0 && F[St] == 0; ) St--;
    if (St == 0) return ft(at), R;
    for (var Dt, I = 1; I <= St; ) {
      for (var Lt = I; F[I] == 0 && I <= St; ) ++I;
      var ae = I - Lt;
      if (ae >= 16) {
        Dt = ae >> 4;
        for (var Ht = 1; Ht <= Dt; ++Ht) ft(st);
        ae &= 15;
      }
      Z = 32767 + F[I], ft(J[(ae << 4) + N[Z]]), ft(y[Z]), I++;
    }
    return St != 63 && ft(at), R;
  }
  function wt(_) {
    _ = Math.min(Math.max(_, 1), 100), a != _ && ((function(B) {
      for (var R = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], G = 0; G < 64; G++) {
        var J = c((R[G] * B + 50) / 100);
        J = Math.min(Math.max(J, 1), 255), l[ht[G]] = J;
      }
      for (var Z = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], at = 0; at < 64; at++) {
        var st = c((Z[at] * B + 50) / 100);
        st = Math.min(Math.max(st, 1), 255), h[ht[at]] = st;
      }
      for (var gt = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], _t = 0, kt = 0; kt < 8; kt++) for (var St = 0; St < 8; St++) d[_t] = 1 / (l[ht[_t]] * gt[kt] * gt[St] * 8), p[_t] = 1 / (h[ht[_t]] * gt[kt] * gt[St] * 8), _t++;
    })(_ < 50 ? Math.floor(5e3 / _) : Math.floor(200 - 2 * _)), a = _);
  }
  this.encode = function(_, B) {
    B && wt(B), P = new Array(), M = 0, L = 7, dt(65496), dt(65504), dt(16), nt(74), nt(70), nt(73), nt(70), nt(0), nt(1), nt(1), nt(0), dt(1), dt(1), nt(0), nt(0), (function() {
      dt(65499), dt(132), nt(0);
      for (var zt = 0; zt < 64; zt++) nt(l[zt]);
      nt(1);
      for (var qt = 0; qt < 64; qt++) nt(h[qt]);
    })(), (function(zt, qt) {
      dt(65472), dt(17), nt(8), dt(qt), dt(zt), nt(3), nt(1), nt(17), nt(0), nt(2), nt(17), nt(1), nt(3), nt(17), nt(1);
    })(_.width, _.height), (function() {
      dt(65476), dt(418), nt(0);
      for (var zt = 0; zt < 16; zt++) nt(X[zt + 1]);
      for (var qt = 0; qt <= 11; qt++) nt(T[qt]);
      nt(16);
      for (var ve = 0; ve < 16; ve++) nt(tt[ve + 1]);
      for (var ue = 0; ue <= 161; ue++) nt(S[ue]);
      nt(1);
      for (var Zt = 0; Zt < 16; Zt++) nt(j[Zt + 1]);
      for (var fe = 0; fe <= 11; fe++) nt(W[fe]);
      nt(17);
      for (var he = 0; he < 16; he++) nt(U[he + 1]);
      for (var Bt = 0; Bt <= 161; Bt++) nt(it[Bt]);
    })(), dt(65498), dt(12), nt(3), nt(1), nt(0), nt(2), nt(17), nt(3), nt(17), nt(0), nt(63), nt(0);
    var R = 0, G = 0, J = 0;
    M = 0, L = 7, this.encode.displayName = "_encode_";
    for (var Z, at, st, gt, _t, kt, St, Dt, I, Lt = _.data, ae = _.width, Ht = _.height, yt = 4 * ae, Wt = 0; Wt < Ht; ) {
      for (Z = 0; Z < yt; ) {
        for (_t = yt * Wt + Z, St = -1, Dt = 0, I = 0; I < 64; I++) kt = _t + (Dt = I >> 3) * yt + (St = 4 * (7 & I)), Wt + Dt >= Ht && (kt -= yt * (Wt + 1 + Dt - Ht)), Z + St >= yt && (kt -= Z + St - yt + 4), at = Lt[kt++], st = Lt[kt++], gt = Lt[kt++], z[I] = (mt[at] + mt[st + 256 | 0] + mt[gt + 512 | 0] >> 16) - 128, H[I] = (mt[at + 768 | 0] + mt[st + 1024 | 0] + mt[gt + 1280 | 0] >> 16) - 128, D[I] = (mt[at + 1280 | 0] + mt[st + 1536 | 0] + mt[gt + 1792 | 0] >> 16) - 128;
        R = At(z, d, R, t, i), G = At(H, p, G, e, s), J = At(D, p, J, e, s), Z += 32;
      }
      Wt += 8;
    }
    if (L >= 0) {
      var It = [];
      It[1] = L + 1, It[0] = (1 << L + 1) - 1, ft(It);
    }
    return dt(65497), new Uint8Array(P);
  }, n = n || 50, (function() {
    for (var _ = String.fromCharCode, B = 0; B < 256; B++) rt[B] = _(B);
  })(), t = ot(X, T), e = ot(j, W), i = ot(tt, S), s = ot(U, it), (function() {
    for (var _ = 1, B = 2, R = 1; R <= 15; R++) {
      for (var G = _; G < B; G++) N[32767 + G] = R, y[32767 + G] = [], y[32767 + G][1] = R, y[32767 + G][0] = G;
      for (var J = -(B - 1); J <= -_; J++) N[32767 + J] = R, y[32767 + J] = [], y[32767 + J][1] = R, y[32767 + J][0] = B - 1 + J;
      _ <<= 1, B <<= 1;
    }
  })(), (function() {
    for (var _ = 0; _ < 256; _++) mt[_] = 19595 * _, mt[_ + 256 | 0] = 38470 * _, mt[_ + 512 | 0] = 7471 * _ + 32768, mt[_ + 768 | 0] = -11059 * _, mt[_ + 1024 | 0] = -21709 * _, mt[_ + 1280 | 0] = 32768 * _ + 8421375, mt[_ + 1536 | 0] = -27439 * _, mt[_ + 1792 | 0] = -5329 * _;
  })(), wt(n);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
function Qn(n, t) {
  if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Zu(n) {
  function t(T) {
    if (!T) throw Error("assert :P");
  }
  function e(T, tt, S) {
    for (var j = 0; 4 > j; j++) if (T[tt + j] != S.charCodeAt(j)) return !0;
    return !1;
  }
  function i(T, tt, S, j, W) {
    for (var U = 0; U < W; U++) T[tt + U] = S[j + U];
  }
  function s(T, tt, S, j) {
    for (var W = 0; W < j; W++) T[tt + W] = S;
  }
  function a(T) {
    return new Int32Array(T);
  }
  function c(T, tt) {
    for (var S = [], j = 0; j < T; j++) S.push(new tt());
    return S;
  }
  function l(T, tt) {
    var S = [];
    return (function j(W, U, it) {
      for (var ot = it[U], ft = 0; ft < ot && (W.push(it.length > U + 1 ? [] : new tt()), !(it.length < U + 1)); ft++) j(W[ft], U + 1, it);
    })(S, 0, T), S;
  }
  var h = function() {
    var T = this;
    function tt(r, o) {
      for (var f = 1 << o - 1 >>> 0; r & f; ) f >>>= 1;
      return f ? (r & f - 1) + f : r;
    }
    function S(r, o, f, m, b) {
      t(!(m % f));
      do
        r[o + (m -= f)] = b;
      while (0 < m);
    }
    function j(r, o, f, m, b) {
      if (t(2328 >= b), 512 >= b) var w = a(512);
      else if ((w = a(b)) == null) return 0;
      return (function(x, A, k, E, V, et) {
        var O, Y, K = A, ut = 1 << k, Q = a(16), ct = a(16);
        for (t(V != 0), t(E != null), t(x != null), t(0 < k), Y = 0; Y < V; ++Y) {
          if (15 < E[Y]) return 0;
          ++Q[E[Y]];
        }
        if (Q[0] == V) return 0;
        for (ct[1] = 0, O = 1; 15 > O; ++O) {
          if (Q[O] > 1 << O) return 0;
          ct[O + 1] = ct[O] + Q[O];
        }
        for (Y = 0; Y < V; ++Y) O = E[Y], 0 < E[Y] && (et[ct[O]++] = Y);
        if (ct[15] == 1) return (E = new W()).g = 0, E.value = et[0], S(x, K, 1, ut, E), ut;
        var pt, xt = -1, bt = ut - 1, Mt = 0, Pt = 1, re = 1, Ot = 1 << k;
        for (Y = 0, O = 1, V = 2; O <= k; ++O, V <<= 1) {
          if (Pt += re <<= 1, 0 > (re -= Q[O])) return 0;
          for (; 0 < Q[O]; --Q[O]) (E = new W()).g = O, E.value = et[Y++], S(x, K + Mt, V, Ot, E), Mt = tt(Mt, O);
        }
        for (O = k + 1, V = 2; 15 >= O; ++O, V <<= 1) {
          if (Pt += re <<= 1, 0 > (re -= Q[O])) return 0;
          for (; 0 < Q[O]; --Q[O]) {
            if (E = new W(), (Mt & bt) != xt) {
              for (K += Ot, pt = 1 << (xt = O) - k; 15 > xt && !(0 >= (pt -= Q[xt])); ) ++xt, pt <<= 1;
              ut += Ot = 1 << (pt = xt - k), x[A + (xt = Mt & bt)].g = pt + k, x[A + xt].value = K - A - xt;
            }
            E.g = O - k, E.value = et[Y++], S(x, K + (Mt >> k), V, Ot, E), Mt = tt(Mt, O);
          }
        }
        return Pt != 2 * ct[15] - 1 ? 0 : ut;
      })(r, o, f, m, b, w);
    }
    function W() {
      this.value = this.g = 0;
    }
    function U() {
      this.value = this.g = 0;
    }
    function it() {
      this.G = c(5, W), this.H = a(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = c(Ui, U);
    }
    function ot(r, o, f, m) {
      t(r != null), t(o != null), t(2147483648 > m), r.Ca = 254, r.I = 0, r.b = -8, r.Ka = 0, r.oa = o, r.pa = f, r.Jd = o, r.Yc = f + m, r.Zc = 4 <= m ? f + m - 4 + 1 : f, at(r);
    }
    function ft(r, o) {
      for (var f = 0; 0 < o--; ) f |= gt(r, 128) << o;
      return f;
    }
    function nt(r, o) {
      var f = ft(r, o);
      return st(r) ? -f : f;
    }
    function dt(r, o, f, m) {
      var b, w = 0;
      for (t(r != null), t(o != null), t(4294967288 > m), r.Sb = m, r.Ra = 0, r.u = 0, r.h = 0, 4 < m && (m = 4), b = 0; b < m; ++b) w += o[f + b] << 8 * b;
      r.Ra = w, r.bb = m, r.oa = o, r.pa = f;
    }
    function At(r) {
      for (; 8 <= r.u && r.bb < r.Sb; ) r.Ra >>>= 8, r.Ra += r.oa[r.pa + r.bb] << yn - 8 >>> 0, ++r.bb, r.u -= 8;
      G(r) && (r.h = 1, r.u = 0);
    }
    function wt(r, o) {
      if (t(0 <= o), !r.h && o <= wa) {
        var f = R(r) & ci[o];
        return r.u += o, At(r), f;
      }
      return r.h = 1, r.u = 0;
    }
    function _() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function B() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function R(r) {
      return r.Ra >>> (r.u & yn - 1) >>> 0;
    }
    function G(r) {
      return t(r.bb <= r.Sb), r.h || r.bb == r.Sb && r.u > yn;
    }
    function J(r, o) {
      r.u = o, r.h = G(r);
    }
    function Z(r) {
      r.u >= Nn && (t(r.u >= Nn), At(r));
    }
    function at(r) {
      t(r != null && r.oa != null), r.pa < r.Zc ? (r.I = (r.oa[r.pa++] | r.I << 8) >>> 0, r.b += 8) : (t(r != null && r.oa != null), r.pa < r.Yc ? (r.b += 8, r.I = r.oa[r.pa++] | r.I << 8) : r.Ka ? r.b = 0 : (r.I <<= 8, r.b += 8, r.Ka = 1));
    }
    function st(r) {
      return ft(r, 1);
    }
    function gt(r, o) {
      var f = r.Ca;
      0 > r.b && at(r);
      var m = r.b, b = f * o >>> 8, w = (r.I >>> m > b) + 0;
      for (w ? (f -= b, r.I -= b + 1 << m >>> 0) : f = b + 1, m = f, b = 0; 256 <= m; ) b += 8, m >>= 8;
      return m = 7 ^ b + zi[m], r.b -= m, r.Ca = (f << m) - 1, w;
    }
    function _t(r, o, f) {
      r[o + 0] = f >> 24 & 255, r[o + 1] = f >> 16 & 255, r[o + 2] = f >> 8 & 255, r[o + 3] = 255 & f;
    }
    function kt(r, o) {
      return r[o + 0] | r[o + 1] << 8;
    }
    function St(r, o) {
      return kt(r, o) | r[o + 2] << 16;
    }
    function Dt(r, o) {
      return kt(r, o) | kt(r, o + 2) << 16;
    }
    function I(r, o) {
      var f = 1 << o;
      return t(r != null), t(0 < o), r.X = a(f), r.X == null ? 0 : (r.Mb = 32 - o, r.Xa = o, 1);
    }
    function Lt(r, o) {
      t(r != null), t(o != null), t(r.Xa == o.Xa), i(o.X, 0, r.X, 0, 1 << o.Xa);
    }
    function ae() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Ht(r, o, f, m) {
      t(f != null), t(m != null);
      var b = f[0], w = m[0];
      return b == 0 && (b = (r * w + o / 2) / o), w == 0 && (w = (o * b + r / 2) / r), 0 >= b || 0 >= w ? 0 : (f[0] = b, m[0] = w, 1);
    }
    function yt(r, o) {
      return r + (1 << o) - 1 >>> o;
    }
    function Wt(r, o) {
      return ((4278255360 & r) + (4278255360 & o) >>> 0 & 4278255360) + ((16711935 & r) + (16711935 & o) >>> 0 & 16711935) >>> 0;
    }
    function It(r, o) {
      T[o] = function(f, m, b, w, x, A, k) {
        var E;
        for (E = 0; E < x; ++E) {
          var V = T[r](A[k + E - 1], b, w + E);
          A[k + E] = Wt(f[m + E], V);
        }
      };
    }
    function zt() {
      this.ud = this.hd = this.jd = 0;
    }
    function qt(r, o) {
      return ((4278124286 & (r ^ o)) >>> 1) + (r & o) >>> 0;
    }
    function ve(r) {
      return 0 <= r && 256 > r ? r : 0 > r ? 0 : 255 < r ? 255 : void 0;
    }
    function ue(r, o) {
      return ve(r + (r - o + 0.5 >> 1));
    }
    function Zt(r, o, f) {
      return Math.abs(o - f) - Math.abs(r - f);
    }
    function fe(r, o, f, m, b, w, x) {
      for (m = w[x - 1], f = 0; f < b; ++f) w[x + f] = m = Wt(r[o + f], m);
    }
    function he(r, o, f, m, b) {
      var w;
      for (w = 0; w < f; ++w) {
        var x = r[o + w], A = x >> 8 & 255, k = 16711935 & (k = (k = 16711935 & x) + ((A << 16) + A));
        m[b + w] = (4278255360 & x) + k >>> 0;
      }
    }
    function Bt(r, o) {
      o.jd = 255 & r, o.hd = r >> 8 & 255, o.ud = r >> 16 & 255;
    }
    function ne(r, o, f, m, b, w) {
      var x;
      for (x = 0; x < m; ++x) {
        var A = o[f + x], k = A >>> 8, E = A, V = 255 & (V = (V = A >>> 16) + ((r.jd << 24 >> 24) * (k << 24 >> 24) >>> 5));
        E = 255 & (E = (E += (r.hd << 24 >> 24) * (k << 24 >> 24) >>> 5) + ((r.ud << 24 >> 24) * (V << 24 >> 24) >>> 5)), b[w + x] = (4278255360 & A) + (V << 16) + E;
      }
    }
    function Rt(r, o, f, m, b) {
      T[o] = function(w, x, A, k, E, V, et, O, Y) {
        for (k = et; k < O; ++k) for (et = 0; et < Y; ++et) E[V++] = b(A[m(w[x++])]);
      }, T[r] = function(w, x, A, k, E, V, et) {
        var O = 8 >> w.b, Y = w.Ea, K = w.K[0], ut = w.w;
        if (8 > O) for (w = (1 << w.b) - 1, ut = (1 << O) - 1; x < A; ++x) {
          var Q, ct = 0;
          for (Q = 0; Q < Y; ++Q) Q & w || (ct = m(k[E++])), V[et++] = b(K[ct & ut]), ct >>= O;
        }
        else T["VP8LMapColor" + f](k, E, K, ut, V, et, x, A, Y);
      };
    }
    function ze(r, o, f, m, b) {
      for (f = o + f; o < f; ) {
        var w = r[o++];
        m[b++] = w >> 16 & 255, m[b++] = w >> 8 & 255, m[b++] = 255 & w;
      }
    }
    function ge(r, o, f, m, b) {
      for (f = o + f; o < f; ) {
        var w = r[o++];
        m[b++] = w >> 16 & 255, m[b++] = w >> 8 & 255, m[b++] = 255 & w, m[b++] = w >> 24 & 255;
      }
    }
    function se(r, o, f, m, b) {
      for (f = o + f; o < f; ) {
        var w = (x = r[o++]) >> 16 & 240 | x >> 12 & 15, x = 240 & x | x >> 28 & 15;
        m[b++] = w, m[b++] = x;
      }
    }
    function oe(r, o, f, m, b) {
      for (f = o + f; o < f; ) {
        var w = (x = r[o++]) >> 16 & 248 | x >> 13 & 7, x = x >> 5 & 224 | x >> 3 & 31;
        m[b++] = w, m[b++] = x;
      }
    }
    function Oe(r, o, f, m, b) {
      for (f = o + f; o < f; ) {
        var w = r[o++];
        m[b++] = 255 & w, m[b++] = w >> 8 & 255, m[b++] = w >> 16 & 255;
      }
    }
    function Ut(r, o, f, m, b, w) {
      if (w == 0) for (f = o + f; o < f; ) _t(m, ((w = r[o++])[0] >> 24 | w[1] >> 8 & 65280 | w[2] << 8 & 16711680 | w[3] << 24) >>> 0), b += 32;
      else i(m, b, r, o, f);
    }
    function Se(r, o) {
      T[o][0] = T[r + "0"], T[o][1] = T[r + "1"], T[o][2] = T[r + "2"], T[o][3] = T[r + "3"], T[o][4] = T[r + "4"], T[o][5] = T[r + "5"], T[o][6] = T[r + "6"], T[o][7] = T[r + "7"], T[o][8] = T[r + "8"], T[o][9] = T[r + "9"], T[o][10] = T[r + "10"], T[o][11] = T[r + "11"], T[o][12] = T[r + "12"], T[o][13] = T[r + "13"], T[o][14] = T[r + "0"], T[o][15] = T[r + "0"];
    }
    function Yt(r) {
      return r == io || r == ao || r == as || r == so;
    }
    function Qt() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function je() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function le() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new Qt(), this.f.kb = new je(), this.sd = null;
    }
    function Gt() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function be() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function Qr(r) {
      return alert("todo:WebPSamplerProcessPlane"), r.T;
    }
    function hn(r, o) {
      var f = r.T, m = o.ba.f.RGBA, b = m.eb, w = m.fb + r.ka * m.A, x = Wn[o.ba.S], A = r.y, k = r.O, E = r.f, V = r.N, et = r.ea, O = r.W, Y = o.cc, K = o.dc, ut = o.Mc, Q = o.Nc, ct = r.ka, pt = r.ka + r.T, xt = r.U, bt = xt + 1 >> 1;
      for (ct == 0 ? x(A, k, null, null, E, V, et, O, E, V, et, O, b, w, null, null, xt) : (x(o.ec, o.fc, A, k, Y, K, ut, Q, E, V, et, O, b, w - m.A, b, w, xt), ++f); ct + 2 < pt; ct += 2) Y = E, K = V, ut = et, Q = O, V += r.Rc, O += r.Rc, w += 2 * m.A, x(A, (k += 2 * r.fa) - r.fa, A, k, Y, K, ut, Q, E, V, et, O, b, w - m.A, b, w, xt);
      return k += r.fa, r.j + pt < r.o ? (i(o.ec, o.fc, A, k, xt), i(o.cc, o.dc, E, V, bt), i(o.Mc, o.Nc, et, O, bt), f--) : 1 & pt || x(A, k, null, null, E, V, et, O, E, V, et, O, b, w + m.A, null, null, xt), f;
    }
    function br(r, o, f) {
      var m = r.F, b = [r.J];
      if (m != null) {
        var w = r.U, x = o.ba.S, A = x == is || x == as;
        o = o.ba.f.RGBA;
        var k = [0], E = r.ka;
        k[0] = r.T, r.Kb && (E == 0 ? --k[0] : (--E, b[0] -= r.width), r.j + r.ka + r.T == r.o && (k[0] = r.o - r.j - E));
        var V = o.eb;
        E = o.fb + E * o.A, r = ul(m, b[0], r.width, w, k, V, E + (A ? 0 : 3), o.A), t(f == k), r && Yt(x) && Aa(V, E, A, w, k, o.A);
      }
      return 0;
    }
    function rr(r) {
      var o = r.ma, f = o.ba.S, m = 11 > f, b = f == ns || f == rs || f == is || f == ro || f == 12 || Yt(f);
      if (o.memory = null, o.Ib = null, o.Jb = null, o.Nd = null, !zn(o.Oa, r, b ? 11 : 12)) return 0;
      if (b && Yt(f) && Sr(), r.da) alert("todo:use_scaling");
      else {
        if (m) {
          if (o.Ib = Qr, r.Kb) {
            if (f = r.U + 1 >> 1, o.memory = a(r.U + 2 * f), o.memory == null) return 0;
            o.ec = o.memory, o.fc = 0, o.cc = o.ec, o.dc = o.fc + r.U, o.Mc = o.cc, o.Nc = o.dc + f, o.Ib = hn, Sr();
          }
        } else alert("todo:EmitYUV");
        b && (o.Jb = br, m && Te());
      }
      if (m && !Ll) {
        for (r = 0; 256 > r; ++r) gf[r] = 89858 * (r - 128) + os >> ss, bf[r] = -22014 * (r - 128) + os, vf[r] = -45773 * (r - 128), mf[r] = 113618 * (r - 128) + os >> ss;
        for (r = La; r < uo; ++r) o = 76283 * (r - 16) + os >> ss, wf[r - La] = sr(o, 255), yf[r - La] = sr(o + 8 >> 4, 15);
        Ll = 1;
      }
      return 1;
    }
    function Vt(r) {
      var o = r.ma, f = r.U, m = r.T;
      return t(!(1 & r.ka)), 0 >= f || 0 >= m ? 0 : (f = o.Ib(r, o), o.Jb != null && o.Jb(r, o, f), o.Dc += f, 1);
    }
    function wr(r) {
      r.ma.memory = null;
    }
    function yr(r, o, f, m) {
      return wt(r, 8) != 47 ? 0 : (o[0] = wt(r, 14) + 1, f[0] = wt(r, 14) + 1, m[0] = wt(r, 1), wt(r, 3) != 0 ? 0 : !r.h);
    }
    function Rn(r, o) {
      if (4 > r) return r + 1;
      var f = r - 2 >> 1;
      return (2 + (1 & r) << f) + wt(o, f) + 1;
    }
    function Dn(r, o) {
      return 120 < o ? o - 120 : 1 <= (f = ((f = tf[o - 1]) >> 4) * r + (8 - (15 & f))) ? f : 1;
      var f;
    }
    function Re(r, o, f) {
      var m = R(f), b = r[o += 255 & m].g - 8;
      return 0 < b && (J(f, f.u + 8), m = R(f), o += r[o].value, o += m & (1 << b) - 1), J(f, f.u + r[o].g), r[o].value;
    }
    function nn(r, o, f) {
      return f.g += r.g, f.value += r.value << o >>> 0, t(8 >= f.g), r.g;
    }
    function an(r, o, f) {
      var m = r.xc;
      return t((o = m == 0 ? 0 : r.vc[r.md * (f >> m) + (o >> m)]) < r.Wb), r.Ya[o];
    }
    function ti(r, o, f, m) {
      var b = r.ab, w = r.c * o, x = r.C;
      o = x + o;
      var A = f, k = m;
      for (m = r.Ta, f = r.Ua; 0 < b--; ) {
        var E = r.gc[b], V = x, et = o, O = A, Y = k, K = (k = m, A = f, E.Ea);
        switch (t(V < et), t(et <= E.nc), E.hc) {
          case 2:
            Hi(O, Y, (et - V) * K, k, A);
            break;
          case 0:
            var ut = V, Q = et, ct = k, pt = A, xt = (Ot = E).Ea;
            ut == 0 && (Dr(O, Y, null, null, 1, ct, pt), fe(O, Y + 1, 0, 0, xt - 1, ct, pt + 1), Y += xt, pt += xt, ++ut);
            for (var bt = 1 << Ot.b, Mt = bt - 1, Pt = yt(xt, Ot.b), re = Ot.K, Ot = Ot.w + (ut >> Ot.b) * Pt; ut < Q; ) {
              var ce = re, Qe = Ot, ie = 1;
              for (qr(O, Y, ct, pt - xt, 1, ct, pt); ie < xt; ) {
                var jt = (ie & ~Mt) + bt;
                jt > xt && (jt = xt), (0, $n[ce[Qe++] >> 8 & 15])(O, Y + +ie, ct, pt + ie - xt, jt - ie, ct, pt + ie), ie = jt;
              }
              Y += xt, pt += xt, ++ut & Mt || (Ot += Pt);
            }
            et != E.nc && i(k, A - K, k, A + (et - V - 1) * K, K);
            break;
          case 1:
            for (K = O, Q = Y, xt = (O = E.Ea) - (pt = O & ~(ct = (Y = 1 << E.b) - 1)), ut = yt(O, E.b), bt = E.K, E = E.w + (V >> E.b) * ut; V < et; ) {
              for (Mt = bt, Pt = E, re = new zt(), Ot = Q + pt, ce = Q + O; Q < Ot; ) Bt(Mt[Pt++], re), pi(re, K, Q, Y, k, A), Q += Y, A += Y;
              Q < ce && (Bt(Mt[Pt++], re), pi(re, K, Q, xt, k, A), Q += xt, A += xt), ++V & ct || (E += ut);
            }
            break;
          case 3:
            if (O == k && Y == A && 0 < E.b) {
              for (Q = k, O = K = A + (et - V) * K - (pt = (et - V) * yt(E.Ea, E.b)), Y = k, ct = A, ut = [], pt = (xt = pt) - 1; 0 <= pt; --pt) ut[pt] = Y[ct + pt];
              for (pt = xt - 1; 0 <= pt; --pt) Q[O + pt] = ut[pt];
              di(E, V, et, k, K, k, A);
            } else di(E, V, et, O, Y, k, A);
        }
        A = m, k = f;
      }
      k != f && i(m, f, A, k, w);
    }
    function jr(r, o) {
      var f = r.V, m = r.Ba + r.c * r.C, b = o - r.C;
      if (t(o <= r.l.o), t(16 >= b), 0 < b) {
        var w = r.l, x = r.Ta, A = r.Ua, k = w.width;
        if (ti(r, b, f, m), b = A = [A], t((f = r.C) < (m = o)), t(w.v < w.va), m > w.o && (m = w.o), f < w.j) {
          var E = w.j - f;
          f = w.j, b[0] += E * k;
        }
        if (f >= m ? f = 0 : (b[0] += 4 * w.v, w.ka = f - w.j, w.U = w.va - w.v, w.T = m - f, f = 1), f) {
          if (A = A[0], 11 > (f = r.ca).S) {
            var V = f.f.RGBA, et = (m = f.S, b = w.U, w = w.T, E = V.eb, V.A), O = w;
            for (V = V.fb + r.Ma * V.A; 0 < O--; ) {
              var Y = x, K = A, ut = b, Q = E, ct = V;
              switch (m) {
                case es:
                  ya(Y, K, ut, Q, ct);
                  break;
                case ns:
                  xa(Y, K, ut, Q, ct);
                  break;
                case io:
                  xa(Y, K, ut, Q, ct), Aa(Q, ct, 0, ut, 1, 0);
                  break;
                case ml:
                  mi(Y, K, ut, Q, ct);
                  break;
                case rs:
                  Ut(Y, K, ut, Q, ct, 1);
                  break;
                case ao:
                  Ut(Y, K, ut, Q, ct, 1), Aa(Q, ct, 0, ut, 1, 0);
                  break;
                case is:
                  Ut(Y, K, ut, Q, ct, 0);
                  break;
                case as:
                  Ut(Y, K, ut, Q, ct, 0), Aa(Q, ct, 1, ut, 1, 0);
                  break;
                case ro:
                  Wi(Y, K, ut, Q, ct);
                  break;
                case so:
                  Wi(Y, K, ut, Q, ct), ll(Q, ct, ut, 1, 0);
                  break;
                case vl:
                  gi(Y, K, ut, Q, ct);
                  break;
                default:
                  t(0);
              }
              A += k, V += et;
            }
            r.Ma += w;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(r.Ma <= f.height);
        }
      }
      r.C = o, t(r.C <= r.i);
    }
    function Vn(r) {
      var o;
      if (0 < r.ua) return 0;
      for (o = 0; o < r.Wb; ++o) {
        var f = r.Ya[o].G, m = r.Ya[o].H;
        if (0 < f[1][m[1] + 0].g || 0 < f[2][m[2] + 0].g || 0 < f[3][m[3] + 0].g) return 0;
      }
      return 1;
    }
    function ir(r, o, f, m, b, w) {
      if (r.Z != 0) {
        var x = r.qd, A = r.rd;
        for (t(Wr[r.Z] != null); o < f; ++o) Wr[r.Z](x, A, m, b, m, b, w), x = m, A = b, b += w;
        r.qd = x, r.rd = A;
      }
    }
    function Yn(r, o) {
      var f = r.l.ma, m = f.Z == 0 || f.Z == 1 ? r.l.j : r.C;
      if (m = r.C < m ? m : r.C, t(o <= r.l.o), o > m) {
        var b = r.l.width, w = f.ca, x = f.tb + b * m, A = r.V, k = r.Ba + r.c * m, E = r.gc;
        t(r.ab == 1), t(E[0].hc == 3), eo(E[0], m, o, A, k, w, x), ir(f, m, o, w, x, b);
      }
      r.C = r.Ma = o;
    }
    function Jn(r, o, f, m, b, w, x) {
      var A = r.$ / m, k = r.$ % m, E = r.m, V = r.s, et = f + r.$, O = et;
      b = f + m * b;
      var Y = f + m * w, K = 280 + V.ua, ut = r.Pb ? A : 16777216, Q = 0 < V.ua ? V.Wa : null, ct = V.wc, pt = et < Y ? an(V, k, A) : null;
      t(r.C < w), t(Y <= b);
      var xt = !1;
      t: for (; ; ) {
        for (; xt || et < Y; ) {
          var bt = 0;
          if (A >= ut) {
            var Mt = et - f;
            t((ut = r).Pb), ut.wd = ut.m, ut.xd = Mt, 0 < ut.s.ua && Lt(ut.s.Wa, ut.s.vb), ut = A + nf;
          }
          if (k & ct || (pt = an(V, k, A)), t(pt != null), pt.Qb && (o[et] = pt.qb, xt = !0), !xt) if (Z(E), pt.jc) {
            bt = E, Mt = o;
            var Pt = et, re = pt.pd[R(bt) & Ui - 1];
            t(pt.jc), 256 > re.g ? (J(bt, bt.u + re.g), Mt[Pt] = re.value, bt = 0) : (J(bt, bt.u + re.g - 256), t(256 <= re.value), bt = re.value), bt == 0 && (xt = !0);
          } else bt = Re(pt.G[0], pt.H[0], E);
          if (E.h) break;
          if (xt || 256 > bt) {
            if (!xt) if (pt.nd) o[et] = (pt.qb | bt << 8) >>> 0;
            else {
              if (Z(E), xt = Re(pt.G[1], pt.H[1], E), Z(E), Mt = Re(pt.G[2], pt.H[2], E), Pt = Re(pt.G[3], pt.H[3], E), E.h) break;
              o[et] = (Pt << 24 | xt << 16 | bt << 8 | Mt) >>> 0;
            }
            if (xt = !1, ++et, ++k >= m && (k = 0, ++A, x != null && A <= w && !(A % 16) && x(r, A), Q != null)) for (; O < et; ) bt = o[O++], Q.X[(506832829 * bt & 4294967295) >>> Q.Mb] = bt;
          } else if (280 > bt) {
            if (bt = Rn(bt - 256, E), Mt = Re(pt.G[4], pt.H[4], E), Z(E), Mt = Dn(m, Mt = Rn(Mt, E)), E.h) break;
            if (et - f < Mt || b - et < bt) break t;
            for (Pt = 0; Pt < bt; ++Pt) o[et + Pt] = o[et + Pt - Mt];
            for (et += bt, k += bt; k >= m; ) k -= m, ++A, x != null && A <= w && !(A % 16) && x(r, A);
            if (t(et <= b), k & ct && (pt = an(V, k, A)), Q != null) for (; O < et; ) bt = o[O++], Q.X[(506832829 * bt & 4294967295) >>> Q.Mb] = bt;
          } else {
            if (!(bt < K)) break t;
            for (xt = bt - 280, t(Q != null); O < et; ) bt = o[O++], Q.X[(506832829 * bt & 4294967295) >>> Q.Mb] = bt;
            bt = et, t(!(xt >>> (Mt = Q).Xa)), o[bt] = Mt.X[xt], xt = !0;
          }
          xt || t(E.h == G(E));
        }
        if (r.Pb && E.h && et < b) t(r.m.h), r.a = 5, r.m = r.wd, r.$ = r.xd, 0 < r.s.ua && Lt(r.s.vb, r.s.Wa);
        else {
          if (E.h) break t;
          x?.(r, A > w ? w : A), r.a = 0, r.$ = et - f;
        }
        return 1;
      }
      return r.a = 3, 0;
    }
    function qn(r) {
      t(r != null), r.vc = null, r.yc = null, r.Ya = null;
      var o = r.Wa;
      o != null && (o.X = null), r.vb = null, t(r != null);
    }
    function ei() {
      var r = new Et();
      return r == null ? null : (r.a = 0, r.xb = yl, Se("Predictor", "VP8LPredictors"), Se("Predictor", "VP8LPredictors_C"), Se("PredictorAdd", "VP8LPredictorsAdd"), Se("PredictorAdd", "VP8LPredictorsAdd_C"), Hi = he, pi = ne, ya = ze, xa = ge, Wi = se, gi = oe, mi = Oe, T.VP8LMapColor32b = Ke, T.VP8LMapColor8b = fr, r);
    }
    function ar(r, o, f, m, b) {
      var w = 1, x = [r], A = [o], k = m.m, E = m.s, V = null, et = 0;
      t: for (; ; ) {
        if (f) for (; w && wt(k, 1); ) {
          var O = x, Y = A, K = m, ut = 1, Q = K.m, ct = K.gc[K.ab], pt = wt(Q, 2);
          if (K.Oc & 1 << pt) w = 0;
          else {
            switch (K.Oc |= 1 << pt, ct.hc = pt, ct.Ea = O[0], ct.nc = Y[0], ct.K = [null], ++K.ab, t(4 >= K.ab), pt) {
              case 0:
              case 1:
                ct.b = wt(Q, 3) + 2, ut = ar(yt(ct.Ea, ct.b), yt(ct.nc, ct.b), 0, K, ct.K), ct.K = ct.K[0];
                break;
              case 3:
                var xt, bt = wt(Q, 8) + 1, Mt = 16 < bt ? 0 : 4 < bt ? 1 : 2 < bt ? 2 : 3;
                if (O[0] = yt(ct.Ea, Mt), ct.b = Mt, xt = ut = ar(bt, 1, 0, K, ct.K)) {
                  var Pt, re = bt, Ot = ct, ce = 1 << (8 >> Ot.b), Qe = a(ce);
                  if (Qe == null) xt = 0;
                  else {
                    var ie = Ot.K[0], jt = Ot.w;
                    for (Qe[0] = Ot.K[0][0], Pt = 1; Pt < 1 * re; ++Pt) Qe[Pt] = Wt(ie[jt + Pt], Qe[Pt - 1]);
                    for (; Pt < 4 * ce; ++Pt) Qe[Pt] = 0;
                    Ot.K[0] = null, Ot.K[0] = Qe, xt = 1;
                  }
                }
                ut = xt;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            w = ut;
          }
        }
        if (x = x[0], A = A[0], w && wt(k, 1) && !(w = 1 <= (et = wt(k, 4)) && 11 >= et)) {
          m.a = 3;
          break t;
        }
        var Nt;
        if (Nt = w) e: {
          var We, ee, pe, Fe = m, on = x, xn = A, De = et, pn = f, _n = Fe.m, tn = Fe.s, me = [null], we = 1, qe = 0, ye = ef[De];
          n: for (; ; ) {
            if (pn && wt(_n, 1)) {
              var ln = wt(_n, 3) + 2, Kn = yt(on, ln), Ge = yt(xn, ln), Ln = Kn * Ge;
              if (!ar(Kn, Ge, 0, Fe, me)) break n;
              for (me = me[0], tn.xc = ln, We = 0; We < Ln; ++We) {
                var Ne = me[We] >> 8 & 65535;
                me[We] = Ne, Ne >= we && (we = Ne + 1);
              }
            }
            if (_n.h) break n;
            for (ee = 0; 5 > ee; ++ee) {
              var en = bl[ee];
              !ee && 0 < De && (en += 1 << De), qe < en && (qe = en);
            }
            var Fn = c(we * ye, W), An = we, En = c(An, it);
            if (En == null) var On = null;
            else t(65536 >= An), On = En;
            var Sn = a(qe);
            if (On == null || Sn == null || Fn == null) {
              Fe.a = 1;
              break n;
            }
            var jn = Fn;
            for (We = pe = 0; We < we; ++We) {
              var Ie = On[We], Bn = Ie.G, Zn = Ie.H, vi = 0, Cr = 1, un = 0;
              for (ee = 0; 5 > ee; ++ee) {
                en = bl[ee], Bn[ee] = jn, Zn[ee] = pe, !ee && 0 < De && (en += 1 << De);
                i: {
                  var us, ho = en, hs = Fe, Sa = Sn, Af = jn, Nf = pe, fo = 0, Gr = hs.m, Lf = wt(Gr, 1);
                  if (s(Sa, 0, 0, ho), Lf) {
                    var Sf = wt(Gr, 1) + 1, kf = wt(Gr, 1), Pl = wt(Gr, kf == 0 ? 1 : 8);
                    Sa[Pl] = 1, Sf == 2 && (Sa[Pl = wt(Gr, 8)] = 1);
                    var fs = 1;
                  } else {
                    var Il = a(19), Cl = wt(Gr, 4) + 4;
                    if (19 < Cl) {
                      hs.a = 3;
                      var cs = 0;
                      break i;
                    }
                    for (us = 0; us < Cl; ++us) Il[Qh[us]] = wt(Gr, 3);
                    var co = void 0, ka = void 0, Fl = hs, Pf = Il, ds = ho, El = Sa, po = 0, Vr = Fl.m, Ol = 8, jl = c(128, W);
                    r: for (; j(jl, 0, 7, Pf, 19); ) {
                      if (wt(Vr, 1)) {
                        var If = 2 + 2 * wt(Vr, 3);
                        if ((co = 2 + wt(Vr, If)) > ds) break r;
                      } else co = ds;
                      for (ka = 0; ka < ds && co--; ) {
                        Z(Vr);
                        var Bl = jl[0 + (127 & R(Vr))];
                        J(Vr, Vr.u + Bl.g);
                        var Yi = Bl.value;
                        if (16 > Yi) El[ka++] = Yi, Yi != 0 && (Ol = Yi);
                        else {
                          var Cf = Yi == 16, Ml = Yi - 16, Ff = Kh[Ml], Tl = wt(Vr, Xh[Ml]) + Ff;
                          if (ka + Tl > ds) break r;
                          for (var Ef = Cf ? Ol : 0; 0 < Tl--; ) El[ka++] = Ef;
                        }
                      }
                      po = 1;
                      break r;
                    }
                    po || (Fl.a = 3), fs = po;
                  }
                  (fs = fs && !Gr.h) && (fo = j(Af, Nf, 8, Sa, ho)), fs && fo != 0 ? cs = fo : (hs.a = 3, cs = 0);
                }
                if (cs == 0) break n;
                if (Cr && Zh[ee] == 1 && (Cr = jn[pe].g == 0), vi += jn[pe].g, pe += cs, 3 >= ee) {
                  var Pa, go = Sn[0];
                  for (Pa = 1; Pa < en; ++Pa) Sn[Pa] > go && (go = Sn[Pa]);
                  un += go;
                }
              }
              if (Ie.nd = Cr, Ie.Qb = 0, Cr && (Ie.qb = (Bn[3][Zn[3] + 0].value << 24 | Bn[1][Zn[1] + 0].value << 16 | Bn[2][Zn[2] + 0].value) >>> 0, vi == 0 && 256 > Bn[0][Zn[0] + 0].value && (Ie.Qb = 1, Ie.qb += Bn[0][Zn[0] + 0].value << 8)), Ie.jc = !Ie.Qb && 6 > un, Ie.jc) {
                var ps, Fr = Ie;
                for (ps = 0; ps < Ui; ++ps) {
                  var Yr = ps, Jr = Fr.pd[Yr], gs = Fr.G[0][Fr.H[0] + Yr];
                  256 <= gs.value ? (Jr.g = gs.g + 256, Jr.value = gs.value) : (Jr.g = 0, Jr.value = 0, Yr >>= nn(gs, 8, Jr), Yr >>= nn(Fr.G[1][Fr.H[1] + Yr], 16, Jr), Yr >>= nn(Fr.G[2][Fr.H[2] + Yr], 0, Jr), nn(Fr.G[3][Fr.H[3] + Yr], 24, Jr));
                }
              }
            }
            tn.vc = me, tn.Wb = we, tn.Ya = On, tn.yc = Fn, Nt = 1;
            break e;
          }
          Nt = 0;
        }
        if (!(w = Nt)) {
          m.a = 3;
          break t;
        }
        if (0 < et) {
          if (E.ua = 1 << et, !I(E.Wa, et)) {
            m.a = 1, w = 0;
            break t;
          }
        } else E.ua = 0;
        var mo = m, Rl = x, Of = A, vo = mo.s, bo = vo.xc;
        if (mo.c = Rl, mo.i = Of, vo.md = yt(Rl, bo), vo.wc = bo == 0 ? -1 : (1 << bo) - 1, f) {
          m.xb = hf;
          break t;
        }
        if ((V = a(x * A)) == null) {
          m.a = 1, w = 0;
          break t;
        }
        w = (w = Jn(m, V, 0, x, A, A, null)) && !k.h;
        break t;
      }
      return w ? (b != null ? b[0] = V : (t(V == null), t(f)), m.$ = 0, f || qn(E)) : qn(E), w;
    }
    function ni(r, o) {
      var f = r.c * r.i, m = f + o + 16 * o;
      return t(r.c <= o), r.V = a(m), r.V == null ? (r.Ta = null, r.Ua = 0, r.a = 1, 0) : (r.Ta = r.V, r.Ua = r.Ba + f + o, 1);
    }
    function Si(r, o) {
      var f = r.C, m = o - f, b = r.V, w = r.Ba + r.c * f;
      for (t(o <= r.l.o); 0 < m; ) {
        var x = 16 < m ? 16 : m, A = r.l.ma, k = r.l.width, E = k * x, V = A.ca, et = A.tb + k * f, O = r.Ta, Y = r.Ua;
        ti(r, x, b, w), hl(O, Y, V, et, E), ir(A, f, f + x, V, et, k), m -= x, b += x * r.c, f += x;
      }
      t(f == o), r.C = r.Ma = o;
    }
    function ki() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Pi() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function Ts() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = a(4), this.Lb = a(4);
    }
    function sa() {
      this.Yb = (function() {
        var r = [];
        return (function o(f, m, b) {
          for (var w = b[m], x = 0; x < w && (f.push(b.length > m + 1 ? [] : 0), !(b.length < m + 1)); x++) o(f[x], m + 1, b);
        })(r, 0, [3, 11]), r;
      })();
    }
    function Ma() {
      this.jb = a(3), this.Wc = l([4, 8], sa), this.Xc = l([4, 17], sa);
    }
    function Ta() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a(4), this.od = new a(4);
    }
    function Un() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function oa() {
      this.Na = this.la = 0;
    }
    function Ra() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function la() {
      this.ad = a(384), this.Za = 0, this.Ob = a(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function Da() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new Un()), this.Y = 0, this.ya = Array(new la()), this.aa = 0, this.l = new Ii();
    }
    function qa() {
      this.y = a(16), this.f = a(8), this.ea = a(8);
    }
    function Ua() {
      this.cb = this.a = 0, this.sc = "", this.m = new _(), this.Od = new ki(), this.Kc = new Pi(), this.ed = new Ta(), this.Qa = new Ts(), this.Ic = this.$c = this.Aa = 0, this.D = new Da(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = c(8, _), this.ia = 0, this.pb = c(4, Ra), this.Pa = new Ma(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new qa()), this.Hd = 0, this.rb = Array(new oa()), this.sb = 0, this.wa = Array(new Un()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new la()), this.L = this.aa = 0, this.gd = l([4, 2], Un), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function sr(r, o) {
      return 0 > r ? 0 : r > o ? o : r;
    }
    function Ii() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function Rs() {
      var r = new Ua();
      return r != null && (r.a = 0, r.sc = "OK", r.cb = 0, r.Xb = 0, Na || (Na = Ci)), r;
    }
    function $e(r, o, f) {
      return r.a == 0 && (r.a = o, r.sc = f, r.cb = 0), 0;
    }
    function za(r, o, f) {
      return 3 <= f && r[o + 0] == 157 && r[o + 1] == 1 && r[o + 2] == 42;
    }
    function or(r, o) {
      if (r == null) return 0;
      if (r.a = 0, r.sc = "OK", o == null) return $e(r, 2, "null VP8Io passed to VP8GetHeaders()");
      var f = o.data, m = o.w, b = o.ha;
      if (4 > b) return $e(r, 7, "Truncated header.");
      var w = f[m + 0] | f[m + 1] << 8 | f[m + 2] << 16, x = r.Od;
      if (x.Rb = !(1 & w), x.td = w >> 1 & 7, x.yd = w >> 4 & 1, x.ub = w >> 5, 3 < x.td) return $e(r, 3, "Incorrect keyframe parameters.");
      if (!x.yd) return $e(r, 4, "Frame not displayable.");
      m += 3, b -= 3;
      var A = r.Kc;
      if (x.Rb) {
        if (7 > b) return $e(r, 7, "cannot parse picture header");
        if (!za(f, m, b)) return $e(r, 3, "Bad code word");
        A.c = 16383 & (f[m + 4] << 8 | f[m + 3]), A.Td = f[m + 4] >> 6, A.i = 16383 & (f[m + 6] << 8 | f[m + 5]), A.Ud = f[m + 6] >> 6, m += 7, b -= 7, r.za = A.c + 15 >> 4, r.Ub = A.i + 15 >> 4, o.width = A.c, o.height = A.i, o.Da = 0, o.j = 0, o.v = 0, o.va = o.width, o.o = o.height, o.da = 0, o.ib = o.width, o.hb = o.height, o.U = o.width, o.T = o.height, s((w = r.Pa).jb, 0, 255, w.jb.length), t((w = r.Qa) != null), w.Cb = 0, w.Bb = 0, w.Fb = 1, s(w.Zb, 0, 0, w.Zb.length), s(w.Lb, 0, 0, w.Lb);
      }
      if (x.ub > b) return $e(r, 7, "bad partition length");
      ot(w = r.m, f, m, x.ub), m += x.ub, b -= x.ub, x.Rb && (A.Ld = st(w), A.Kd = st(w)), A = r.Qa;
      var k, E = r.Pa;
      if (t(w != null), t(A != null), A.Cb = st(w), A.Cb) {
        if (A.Bb = st(w), st(w)) {
          for (A.Fb = st(w), k = 0; 4 > k; ++k) A.Zb[k] = st(w) ? nt(w, 7) : 0;
          for (k = 0; 4 > k; ++k) A.Lb[k] = st(w) ? nt(w, 6) : 0;
        }
        if (A.Bb) for (k = 0; 3 > k; ++k) E.jb[k] = st(w) ? ft(w, 8) : 255;
      } else A.Bb = 0;
      if (w.Ka) return $e(r, 3, "cannot parse segment header");
      if ((A = r.ed).zd = st(w), A.Tb = ft(w, 6), A.wb = ft(w, 3), A.Pc = st(w), A.Pc && st(w)) {
        for (E = 0; 4 > E; ++E) st(w) && (A.vd[E] = nt(w, 6));
        for (E = 0; 4 > E; ++E) st(w) && (A.od[E] = nt(w, 6));
      }
      if (r.L = A.Tb == 0 ? 0 : A.zd ? 1 : 2, w.Ka) return $e(r, 3, "cannot parse filter header");
      var V = b;
      if (b = k = m, m = k + V, A = V, r.Xb = (1 << ft(r.m, 2)) - 1, V < 3 * (E = r.Xb)) f = 7;
      else {
        for (k += 3 * E, A -= 3 * E, V = 0; V < E; ++V) {
          var et = f[b + 0] | f[b + 1] << 8 | f[b + 2] << 16;
          et > A && (et = A), ot(r.Jc[+V], f, k, et), k += et, A -= et, b += 3;
        }
        ot(r.Jc[+E], f, k, A), f = k < m ? 0 : 5;
      }
      if (f != 0) return $e(r, f, "cannot parse partitions");
      for (f = ft(k = r.m, 7), b = st(k) ? nt(k, 4) : 0, m = st(k) ? nt(k, 4) : 0, A = st(k) ? nt(k, 4) : 0, E = st(k) ? nt(k, 4) : 0, k = st(k) ? nt(k, 4) : 0, V = r.Qa, et = 0; 4 > et; ++et) {
        if (V.Cb) {
          var O = V.Zb[et];
          V.Fb || (O += f);
        } else {
          if (0 < et) {
            r.pb[et] = r.pb[0];
            continue;
          }
          O = f;
        }
        var Y = r.pb[et];
        Y.Sc[0] = oo[sr(O + b, 127)], Y.Sc[1] = lo[sr(O + 0, 127)], Y.Eb[0] = 2 * oo[sr(O + m, 127)], Y.Eb[1] = 101581 * lo[sr(O + A, 127)] >> 16, 8 > Y.Eb[1] && (Y.Eb[1] = 8), Y.Qc[0] = oo[sr(O + E, 117)], Y.Qc[1] = lo[sr(O + k, 127)], Y.lc = O + k;
      }
      if (!x.Rb) return $e(r, 4, "Not a key frame.");
      for (st(w), x = r.Pa, f = 0; 4 > f; ++f) {
        for (b = 0; 8 > b; ++b) for (m = 0; 3 > m; ++m) for (A = 0; 11 > A; ++A) E = gt(w, lf[f][b][m][A]) ? ft(w, 8) : sf[f][b][m][A], x.Wc[f][b].Yb[m][A] = E;
        for (b = 0; 17 > b; ++b) x.Xc[f][b] = x.Wc[f][uf[b]];
      }
      return r.kc = st(w), r.kc && (r.Bd = ft(w, 8)), r.cb = 1;
    }
    function Ci(r, o, f, m, b, w, x) {
      var A = o[b].Yb[f];
      for (f = 0; 16 > b; ++b) {
        if (!gt(r, A[f + 0])) return b;
        for (; !gt(r, A[f + 1]); ) if (A = o[++b].Yb[0], f = 0, b == 16) return 16;
        var k = o[b + 1].Yb;
        if (gt(r, A[f + 2])) {
          var E = r, V = 0;
          if (gt(E, (O = A)[(et = f) + 3])) if (gt(E, O[et + 6])) {
            for (A = 0, et = 2 * (V = gt(E, O[et + 8])) + (O = gt(E, O[et + 9 + V])), V = 0, O = rf[et]; O[A]; ++A) V += V + gt(E, O[A]);
            V += 3 + (8 << et);
          } else gt(E, O[et + 7]) ? (V = 7 + 2 * gt(E, 165), V += gt(E, 145)) : V = 5 + gt(E, 159);
          else V = gt(E, O[et + 4]) ? 3 + gt(E, O[et + 5]) : 2;
          A = k[2];
        } else V = 1, A = k[1];
        k = x + af[b], 0 > (E = r).b && at(E);
        var et, O = E.b, Y = (et = E.Ca >> 1) - (E.I >> O) >> 31;
        --E.b, E.Ca += Y, E.Ca |= 1, E.I -= (et + 1 & Y) << O, w[k] = ((V ^ Y) - Y) * m[(0 < b) + 0];
      }
      return 16;
    }
    function ua(r) {
      var o = r.rb[r.sb - 1];
      o.la = 0, o.Na = 0, s(r.zc, 0, 0, r.zc.length), r.ja = 0;
    }
    function In(r, o, f, m, b) {
      b = r[o + f + 32 * m] + (b >> 3), r[o + f + 32 * m] = -256 & b ? 0 > b ? 0 : 255 : b;
    }
    function Fi(r, o, f, m, b, w) {
      In(r, o, 0, f, m + b), In(r, o, 1, f, m + w), In(r, o, 2, f, m - w), In(r, o, 3, f, m - b);
    }
    function xr(r) {
      return (20091 * r >> 16) + r;
    }
    function sn(r, o, f, m) {
      var b, w = 0, x = a(16);
      for (b = 0; 4 > b; ++b) {
        var A = r[o + 0] + r[o + 8], k = r[o + 0] - r[o + 8], E = (35468 * r[o + 4] >> 16) - xr(r[o + 12]), V = xr(r[o + 4]) + (35468 * r[o + 12] >> 16);
        x[w + 0] = A + V, x[w + 1] = k + E, x[w + 2] = k - E, x[w + 3] = A - V, w += 4, o++;
      }
      for (b = w = 0; 4 > b; ++b) A = (r = x[w + 0] + 4) + x[w + 8], k = r - x[w + 8], E = (35468 * x[w + 4] >> 16) - xr(x[w + 12]), In(f, m, 0, 0, A + (V = xr(x[w + 4]) + (35468 * x[w + 12] >> 16))), In(f, m, 1, 0, k + E), In(f, m, 2, 0, k - E), In(f, m, 3, 0, A - V), w++, m += 32;
    }
    function Ha(r, o, f, m) {
      var b = r[o + 0] + 4, w = 35468 * r[o + 4] >> 16, x = xr(r[o + 4]), A = 35468 * r[o + 1] >> 16;
      Fi(f, m, 0, b + x, r = xr(r[o + 1]), A), Fi(f, m, 1, b + w, r, A), Fi(f, m, 2, b - w, r, A), Fi(f, m, 3, b - x, r, A);
    }
    function Ds(r, o, f, m, b) {
      sn(r, o, f, m), b && sn(r, o + 16, f, m + 4);
    }
    function qs(r, o, f, m) {
      kr(r, o + 0, f, m, 1), kr(r, o + 32, f, m + 128, 1);
    }
    function Us(r, o, f, m) {
      var b;
      for (r = r[o + 0] + 4, b = 0; 4 > b; ++b) for (o = 0; 4 > o; ++o) In(f, m, o, b, r);
    }
    function lr(r, o, f, m) {
      r[o + 0] && dn(r, o + 0, f, m), r[o + 16] && dn(r, o + 16, f, m + 4), r[o + 32] && dn(r, o + 32, f, m + 128), r[o + 48] && dn(r, o + 48, f, m + 128 + 4);
    }
    function Wa(r, o, f, m) {
      var b, w = a(16);
      for (b = 0; 4 > b; ++b) {
        var x = r[o + 0 + b] + r[o + 12 + b], A = r[o + 4 + b] + r[o + 8 + b], k = r[o + 4 + b] - r[o + 8 + b], E = r[o + 0 + b] - r[o + 12 + b];
        w[0 + b] = x + A, w[8 + b] = x - A, w[4 + b] = E + k, w[12 + b] = E - k;
      }
      for (b = 0; 4 > b; ++b) x = (r = w[0 + 4 * b] + 3) + w[3 + 4 * b], A = w[1 + 4 * b] + w[2 + 4 * b], k = w[1 + 4 * b] - w[2 + 4 * b], E = r - w[3 + 4 * b], f[m + 0] = x + A >> 3, f[m + 16] = E + k >> 3, f[m + 32] = x - A >> 3, f[m + 48] = E - k >> 3, m += 64;
    }
    function Ei(r, o, f) {
      var m, b = o - 32, w = Cn, x = 255 - r[b - 1];
      for (m = 0; m < f; ++m) {
        var A, k = w, E = x + r[o - 1];
        for (A = 0; A < f; ++A) r[o + A] = k[E + r[b + A]];
        o += 32;
      }
    }
    function Oi(r, o) {
      Ei(r, o, 4);
    }
    function ha(r, o) {
      Ei(r, o, 8);
    }
    function zs(r, o) {
      Ei(r, o, 16);
    }
    function Hs(r, o) {
      var f;
      for (f = 0; 16 > f; ++f) i(r, o + 32 * f, r, o - 32, 16);
    }
    function Ws(r, o) {
      var f;
      for (f = 16; 0 < f; --f) s(r, o, r[o - 1], 16), o += 32;
    }
    function Br(r, o, f) {
      var m;
      for (m = 0; 16 > m; ++m) s(o, f + 32 * m, r, 16);
    }
    function Ga(r, o) {
      var f, m = 16;
      for (f = 0; 16 > f; ++f) m += r[o - 1 + 32 * f] + r[o + f - 32];
      Br(m >> 5, r, o);
    }
    function Mr(r, o) {
      var f, m = 8;
      for (f = 0; 16 > f; ++f) m += r[o - 1 + 32 * f];
      Br(m >> 4, r, o);
    }
    function Gs(r, o) {
      var f, m = 8;
      for (f = 0; 16 > f; ++f) m += r[o + f - 32];
      Br(m >> 4, r, o);
    }
    function ri(r, o) {
      Br(128, r, o);
    }
    function Jt(r, o, f) {
      return r + 2 * o + f + 2 >> 2;
    }
    function Vs(r, o) {
      var f, m = o - 32;
      for (m = new Uint8Array([Jt(r[m - 1], r[m + 0], r[m + 1]), Jt(r[m + 0], r[m + 1], r[m + 2]), Jt(r[m + 1], r[m + 2], r[m + 3]), Jt(r[m + 2], r[m + 3], r[m + 4])]), f = 0; 4 > f; ++f) i(r, o + 32 * f, m, 0, m.length);
    }
    function Ys(r, o) {
      var f = r[o - 1], m = r[o - 1 + 32], b = r[o - 1 + 64], w = r[o - 1 + 96];
      _t(r, o + 0, 16843009 * Jt(r[o - 1 - 32], f, m)), _t(r, o + 32, 16843009 * Jt(f, m, b)), _t(r, o + 64, 16843009 * Jt(m, b, w)), _t(r, o + 96, 16843009 * Jt(b, w, w));
    }
    function Js(r, o) {
      var f, m = 4;
      for (f = 0; 4 > f; ++f) m += r[o + f - 32] + r[o - 1 + 32 * f];
      for (m >>= 3, f = 0; 4 > f; ++f) s(r, o + 32 * f, m, 4);
    }
    function $s(r, o) {
      var f = r[o - 1 + 0], m = r[o - 1 + 32], b = r[o - 1 + 64], w = r[o - 1 - 32], x = r[o + 0 - 32], A = r[o + 1 - 32], k = r[o + 2 - 32], E = r[o + 3 - 32];
      r[o + 0 + 96] = Jt(m, b, r[o - 1 + 96]), r[o + 1 + 96] = r[o + 0 + 64] = Jt(f, m, b), r[o + 2 + 96] = r[o + 1 + 64] = r[o + 0 + 32] = Jt(w, f, m), r[o + 3 + 96] = r[o + 2 + 64] = r[o + 1 + 32] = r[o + 0 + 0] = Jt(x, w, f), r[o + 3 + 64] = r[o + 2 + 32] = r[o + 1 + 0] = Jt(A, x, w), r[o + 3 + 32] = r[o + 2 + 0] = Jt(k, A, x), r[o + 3 + 0] = Jt(E, k, A);
    }
    function Xs(r, o) {
      var f = r[o + 1 - 32], m = r[o + 2 - 32], b = r[o + 3 - 32], w = r[o + 4 - 32], x = r[o + 5 - 32], A = r[o + 6 - 32], k = r[o + 7 - 32];
      r[o + 0 + 0] = Jt(r[o + 0 - 32], f, m), r[o + 1 + 0] = r[o + 0 + 32] = Jt(f, m, b), r[o + 2 + 0] = r[o + 1 + 32] = r[o + 0 + 64] = Jt(m, b, w), r[o + 3 + 0] = r[o + 2 + 32] = r[o + 1 + 64] = r[o + 0 + 96] = Jt(b, w, x), r[o + 3 + 32] = r[o + 2 + 64] = r[o + 1 + 96] = Jt(w, x, A), r[o + 3 + 64] = r[o + 2 + 96] = Jt(x, A, k), r[o + 3 + 96] = Jt(A, k, k);
    }
    function _r(r, o) {
      var f = r[o - 1 + 0], m = r[o - 1 + 32], b = r[o - 1 + 64], w = r[o - 1 - 32], x = r[o + 0 - 32], A = r[o + 1 - 32], k = r[o + 2 - 32], E = r[o + 3 - 32];
      r[o + 0 + 0] = r[o + 1 + 64] = w + x + 1 >> 1, r[o + 1 + 0] = r[o + 2 + 64] = x + A + 1 >> 1, r[o + 2 + 0] = r[o + 3 + 64] = A + k + 1 >> 1, r[o + 3 + 0] = k + E + 1 >> 1, r[o + 0 + 96] = Jt(b, m, f), r[o + 0 + 64] = Jt(m, f, w), r[o + 0 + 32] = r[o + 1 + 96] = Jt(f, w, x), r[o + 1 + 32] = r[o + 2 + 96] = Jt(w, x, A), r[o + 2 + 32] = r[o + 3 + 96] = Jt(x, A, k), r[o + 3 + 32] = Jt(A, k, E);
    }
    function Ar(r, o) {
      var f = r[o + 0 - 32], m = r[o + 1 - 32], b = r[o + 2 - 32], w = r[o + 3 - 32], x = r[o + 4 - 32], A = r[o + 5 - 32], k = r[o + 6 - 32], E = r[o + 7 - 32];
      r[o + 0 + 0] = f + m + 1 >> 1, r[o + 1 + 0] = r[o + 0 + 64] = m + b + 1 >> 1, r[o + 2 + 0] = r[o + 1 + 64] = b + w + 1 >> 1, r[o + 3 + 0] = r[o + 2 + 64] = w + x + 1 >> 1, r[o + 0 + 32] = Jt(f, m, b), r[o + 1 + 32] = r[o + 0 + 96] = Jt(m, b, w), r[o + 2 + 32] = r[o + 1 + 96] = Jt(b, w, x), r[o + 3 + 32] = r[o + 2 + 96] = Jt(w, x, A), r[o + 3 + 64] = Jt(x, A, k), r[o + 3 + 96] = Jt(A, k, E);
    }
    function Ks(r, o) {
      var f = r[o - 1 + 0], m = r[o - 1 + 32], b = r[o - 1 + 64], w = r[o - 1 + 96];
      r[o + 0 + 0] = f + m + 1 >> 1, r[o + 2 + 0] = r[o + 0 + 32] = m + b + 1 >> 1, r[o + 2 + 32] = r[o + 0 + 64] = b + w + 1 >> 1, r[o + 1 + 0] = Jt(f, m, b), r[o + 3 + 0] = r[o + 1 + 32] = Jt(m, b, w), r[o + 3 + 32] = r[o + 1 + 64] = Jt(b, w, w), r[o + 3 + 64] = r[o + 2 + 64] = r[o + 0 + 96] = r[o + 1 + 96] = r[o + 2 + 96] = r[o + 3 + 96] = w;
    }
    function Zs(r, o) {
      var f = r[o - 1 + 0], m = r[o - 1 + 32], b = r[o - 1 + 64], w = r[o - 1 + 96], x = r[o - 1 - 32], A = r[o + 0 - 32], k = r[o + 1 - 32], E = r[o + 2 - 32];
      r[o + 0 + 0] = r[o + 2 + 32] = f + x + 1 >> 1, r[o + 0 + 32] = r[o + 2 + 64] = m + f + 1 >> 1, r[o + 0 + 64] = r[o + 2 + 96] = b + m + 1 >> 1, r[o + 0 + 96] = w + b + 1 >> 1, r[o + 3 + 0] = Jt(A, k, E), r[o + 2 + 0] = Jt(x, A, k), r[o + 1 + 0] = r[o + 3 + 32] = Jt(f, x, A), r[o + 1 + 32] = r[o + 3 + 64] = Jt(m, f, x), r[o + 1 + 64] = r[o + 3 + 96] = Jt(b, m, f), r[o + 1 + 96] = Jt(w, b, m);
    }
    function ji(r, o) {
      var f;
      for (f = 0; 8 > f; ++f) i(r, o + 32 * f, r, o - 32, 8);
    }
    function fa(r, o) {
      var f;
      for (f = 0; 8 > f; ++f) s(r, o, r[o - 1], 8), o += 32;
    }
    function ur(r, o, f) {
      var m;
      for (m = 0; 8 > m; ++m) s(o, f + 32 * m, r, 8);
    }
    function Qs(r, o) {
      var f, m = 8;
      for (f = 0; 8 > f; ++f) m += r[o + f - 32] + r[o - 1 + 32 * f];
      ur(m >> 4, r, o);
    }
    function Bi(r, o) {
      var f, m = 4;
      for (f = 0; 8 > f; ++f) m += r[o + f - 32];
      ur(m >> 3, r, o);
    }
    function to(r, o) {
      var f, m = 4;
      for (f = 0; 8 > f; ++f) m += r[o - 1 + 32 * f];
      ur(m >> 3, r, o);
    }
    function ca(r, o) {
      ur(128, r, o);
    }
    function Tr(r, o, f) {
      var m = r[o - f], b = r[o + 0], w = 3 * (b - m) + no[1020 + r[o - 2 * f] - r[o + f]], x = ts[112 + (w + 4 >> 3)];
      r[o - f] = Cn[255 + m + ts[112 + (w + 3 >> 3)]], r[o + 0] = Cn[255 + b - x];
    }
    function da(r, o, f, m) {
      var b = r[o + 0], w = r[o + f];
      return Hn[255 + r[o - 2 * f] - r[o - f]] > m || Hn[255 + w - b] > m;
    }
    function ii(r, o, f, m) {
      return 4 * Hn[255 + r[o - f] - r[o + 0]] + Hn[255 + r[o - 2 * f] - r[o + f]] <= m;
    }
    function pa(r, o, f, m, b) {
      var w = r[o - 3 * f], x = r[o - 2 * f], A = r[o - f], k = r[o + 0], E = r[o + f], V = r[o + 2 * f], et = r[o + 3 * f];
      return 4 * Hn[255 + A - k] + Hn[255 + x - E] > m ? 0 : Hn[255 + r[o - 4 * f] - w] <= b && Hn[255 + w - x] <= b && Hn[255 + x - A] <= b && Hn[255 + et - V] <= b && Hn[255 + V - E] <= b && Hn[255 + E - k] <= b;
    }
    function Mi(r, o, f, m) {
      var b = 2 * m + 1;
      for (m = 0; 16 > m; ++m) ii(r, o + m, f, b) && Tr(r, o + m, f);
    }
    function ga(r, o, f, m) {
      var b = 2 * m + 1;
      for (m = 0; 16 > m; ++m) ii(r, o + m * f, 1, b) && Tr(r, o + m * f, 1);
    }
    function Ti(r, o, f, m) {
      var b;
      for (b = 3; 0 < b; --b) Mi(r, o += 4 * f, f, m);
    }
    function Va(r, o, f, m) {
      var b;
      for (b = 3; 0 < b; --b) ga(r, o += 4, f, m);
    }
    function Nr(r, o, f, m, b, w, x, A) {
      for (w = 2 * w + 1; 0 < b--; ) {
        if (pa(r, o, f, w, x)) if (da(r, o, f, A)) Tr(r, o, f);
        else {
          var k = r, E = o, V = f, et = k[E - 2 * V], O = k[E - V], Y = k[E + 0], K = k[E + V], ut = k[E + 2 * V], Q = 27 * (pt = no[1020 + 3 * (Y - O) + no[1020 + et - K]]) + 63 >> 7, ct = 18 * pt + 63 >> 7, pt = 9 * pt + 63 >> 7;
          k[E - 3 * V] = Cn[255 + k[E - 3 * V] + pt], k[E - 2 * V] = Cn[255 + et + ct], k[E - V] = Cn[255 + O + Q], k[E + 0] = Cn[255 + Y - Q], k[E + V] = Cn[255 + K - ct], k[E + 2 * V] = Cn[255 + ut - pt];
        }
        o += m;
      }
    }
    function Lr(r, o, f, m, b, w, x, A) {
      for (w = 2 * w + 1; 0 < b--; ) {
        if (pa(r, o, f, w, x)) if (da(r, o, f, A)) Tr(r, o, f);
        else {
          var k = r, E = o, V = f, et = k[E - V], O = k[E + 0], Y = k[E + V], K = ts[112 + (4 + (ut = 3 * (O - et)) >> 3)], ut = ts[112 + (ut + 3 >> 3)], Q = K + 1 >> 1;
          k[E - 2 * V] = Cn[255 + k[E - 2 * V] + Q], k[E - V] = Cn[255 + et + ut], k[E + 0] = Cn[255 + O - K], k[E + V] = Cn[255 + Y - Q];
        }
        o += m;
      }
    }
    function Ya(r, o, f, m, b, w) {
      Nr(r, o, f, 1, 16, m, b, w);
    }
    function Ja(r, o, f, m, b, w) {
      Nr(r, o, 1, f, 16, m, b, w);
    }
    function $a(r, o, f, m, b, w) {
      var x;
      for (x = 3; 0 < x; --x) Lr(r, o += 4 * f, f, 1, 16, m, b, w);
    }
    function ai(r, o, f, m, b, w) {
      var x;
      for (x = 3; 0 < x; --x) Lr(r, o += 4, 1, f, 16, m, b, w);
    }
    function Xa(r, o, f, m, b, w, x, A) {
      Nr(r, o, b, 1, 8, w, x, A), Nr(f, m, b, 1, 8, w, x, A);
    }
    function u(r, o, f, m, b, w, x, A) {
      Nr(r, o, 1, b, 8, w, x, A), Nr(f, m, 1, b, 8, w, x, A);
    }
    function v(r, o, f, m, b, w, x, A) {
      Lr(r, o + 4 * b, b, 1, 8, w, x, A), Lr(f, m + 4 * b, b, 1, 8, w, x, A);
    }
    function C(r, o, f, m, b, w, x, A) {
      Lr(r, o + 4, 1, b, 8, w, x, A), Lr(f, m + 4, 1, b, 8, w, x, A);
    }
    function q() {
      this.ba = new le(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new be(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function $() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function lt() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function vt() {
      this.ua = 0, this.Wa = new ae(), this.vb = new ae(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new it(), this.yc = new W();
    }
    function Et() {
      this.xb = this.a = 0, this.l = new Ii(), this.ca = new le(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new B(), this.Pb = 0, this.wd = new B(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new vt(), this.ab = 0, this.gc = c(4, lt), this.Oc = 0;
    }
    function Ft() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Ii(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function Xt(r, o, f, m, b, w, x) {
      for (r = r == null ? 0 : r[o + 0], o = 0; o < x; ++o) b[w + o] = r + f[m + o] & 255, r = b[w + o];
    }
    function te(r, o, f, m, b, w, x) {
      var A;
      if (r == null) Xt(null, null, f, m, b, w, x);
      else for (A = 0; A < x; ++A) b[w + A] = r[o + A] + f[m + A] & 255;
    }
    function de(r, o, f, m, b, w, x) {
      if (r == null) Xt(null, null, f, m, b, w, x);
      else {
        var A, k = r[o + 0], E = k, V = k;
        for (A = 0; A < x; ++A) E = V + (k = r[o + A]) - E, V = f[m + A] + (-256 & E ? 0 > E ? 0 : 255 : E) & 255, E = k, b[w + A] = V;
      }
    }
    function Xe(r, o, f, m) {
      var b = o.width, w = o.o;
      if (t(r != null && o != null), 0 > f || 0 >= m || f + m > w) return null;
      if (!r.Cc) {
        if (r.ga == null) {
          var x;
          if (r.ga = new Ft(), (x = r.ga == null) || (x = o.width * o.o, t(r.Gb.length == 0), r.Gb = a(x), r.Uc = 0, r.Gb == null ? x = 0 : (r.mb = r.Gb, r.nb = r.Uc, r.rc = null, x = 1), x = !x), !x) {
            x = r.ga;
            var A = r.Fa, k = r.P, E = r.qc, V = r.mb, et = r.nb, O = k + 1, Y = E - 1, K = x.l;
            if (t(A != null && V != null && o != null), Wr[0] = null, Wr[1] = Xt, Wr[2] = te, Wr[3] = de, x.ca = V, x.tb = et, x.c = o.width, x.i = o.height, t(0 < x.c && 0 < x.i), 1 >= E) o = 0;
            else if (x.$a = 3 & A[k + 0], x.Z = A[k + 0] >> 2 & 3, x.Lc = A[k + 0] >> 4 & 3, k = A[k + 0] >> 6 & 3, 0 > x.$a || 1 < x.$a || 4 <= x.Z || 1 < x.Lc || k) o = 0;
            else if (K.put = Vt, K.ac = rr, K.bc = wr, K.ma = x, K.width = o.width, K.height = o.height, K.Da = o.Da, K.v = o.v, K.va = o.va, K.j = o.j, K.o = o.o, x.$a) t: {
              t(x.$a == 1), o = ei();
              e: for (; ; ) {
                if (o == null) {
                  o = 0;
                  break t;
                }
                if (t(x != null), x.mc = o, o.c = x.c, o.i = x.i, o.l = x.l, o.l.ma = x, o.l.width = x.c, o.l.height = x.i, o.a = 0, dt(o.m, A, O, Y), !ar(x.c, x.i, 1, o, null) || (o.ab == 1 && o.gc[0].hc == 3 && Vn(o.s) ? (x.ic = 1, A = o.c * o.i, o.Ta = null, o.Ua = 0, o.V = a(A), o.Ba = 0, o.V == null ? (o.a = 1, o = 0) : o = 1) : (x.ic = 0, o = ni(o, x.c)), !o)) break e;
                o = 1;
                break t;
              }
              x.mc = null, o = 0;
            }
            else o = Y >= x.c * x.i;
            x = !o;
          }
          if (x) return null;
          r.ga.Lc != 1 ? r.Ga = 0 : m = w - f;
        }
        t(r.ga != null), t(f + m <= w);
        t: {
          if (o = (A = r.ga).c, w = A.l.o, A.$a == 0) {
            if (O = r.rc, Y = r.Vc, K = r.Fa, k = r.P + 1 + f * o, E = r.mb, V = r.nb + f * o, t(k <= r.P + r.qc), A.Z != 0) for (t(Wr[A.Z] != null), x = 0; x < m; ++x) Wr[A.Z](O, Y, K, k, E, V, o), O = E, Y = V, V += o, k += o;
            else for (x = 0; x < m; ++x) i(E, V, K, k, o), O = E, Y = V, V += o, k += o;
            r.rc = O, r.Vc = Y;
          } else {
            if (t(A.mc != null), o = f + m, t((x = A.mc) != null), t(o <= x.i), x.C >= o) o = 1;
            else if (A.ic || Te(), A.ic) {
              A = x.V, O = x.Ba, Y = x.c;
              var ut = x.i, Q = (K = 1, k = x.$ / Y, E = x.$ % Y, V = x.m, et = x.s, x.$), ct = Y * ut, pt = Y * o, xt = et.wc, bt = Q < pt ? an(et, E, k) : null;
              t(Q <= ct), t(o <= ut), t(Vn(et));
              e: for (; ; ) {
                for (; !V.h && Q < pt; ) {
                  if (E & xt || (bt = an(et, E, k)), t(bt != null), Z(V), 256 > (ut = Re(bt.G[0], bt.H[0], V))) A[O + Q] = ut, ++Q, ++E >= Y && (E = 0, ++k <= o && !(k % 16) && Yn(x, k));
                  else {
                    if (!(280 > ut)) {
                      K = 0;
                      break e;
                    }
                    ut = Rn(ut - 256, V);
                    var Mt, Pt = Re(bt.G[4], bt.H[4], V);
                    if (Z(V), !(Q >= (Pt = Dn(Y, Pt = Rn(Pt, V))) && ct - Q >= ut)) {
                      K = 0;
                      break e;
                    }
                    for (Mt = 0; Mt < ut; ++Mt) A[O + Q + Mt] = A[O + Q + Mt - Pt];
                    for (Q += ut, E += ut; E >= Y; ) E -= Y, ++k <= o && !(k % 16) && Yn(x, k);
                    Q < pt && E & xt && (bt = an(et, E, k));
                  }
                  t(V.h == G(V));
                }
                Yn(x, k > o ? o : k);
                break e;
              }
              !K || V.h && Q < ct ? (K = 0, x.a = V.h ? 5 : 3) : x.$ = Q, o = K;
            } else o = Jn(x, x.V, x.Ba, x.c, x.i, o, Si);
            if (!o) {
              m = 0;
              break t;
            }
          }
          f + m >= w && (r.Cc = 1), m = 1;
        }
        if (!m) return null;
        if (r.Cc && ((m = r.ga) != null && (m.mc = null), r.ga = null, 0 < r.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return r.nb + f * b;
    }
    function Ae(r, o, f, m, b, w) {
      for (; 0 < b--; ) {
        var x, A = r, k = o + (f ? 1 : 0), E = r, V = o + (f ? 0 : 3);
        for (x = 0; x < m; ++x) {
          var et = E[V + 4 * x];
          et != 255 && (et *= 32897, A[k + 4 * x + 0] = A[k + 4 * x + 0] * et >> 23, A[k + 4 * x + 1] = A[k + 4 * x + 1] * et >> 23, A[k + 4 * x + 2] = A[k + 4 * x + 2] * et >> 23);
        }
        o += w;
      }
    }
    function _e(r, o, f, m, b) {
      for (; 0 < m--; ) {
        var w;
        for (w = 0; w < f; ++w) {
          var x = r[o + 2 * w + 0], A = 15 & (E = r[o + 2 * w + 1]), k = 4369 * A, E = (240 & E | E >> 4) * k >> 16;
          r[o + 2 * w + 0] = (240 & x | x >> 4) * k >> 16 & 240 | (15 & x | x << 4) * k >> 16 >> 4 & 15, r[o + 2 * w + 1] = 240 & E | A;
        }
        o += b;
      }
    }
    function Ce(r, o, f, m, b, w, x, A) {
      var k, E, V = 255;
      for (E = 0; E < b; ++E) {
        for (k = 0; k < m; ++k) {
          var et = r[o + k];
          w[x + 4 * k] = et, V &= et;
        }
        o += f, x += A;
      }
      return V != 255;
    }
    function Me(r, o, f, m, b) {
      var w;
      for (w = 0; w < b; ++w) f[m + w] = r[o + w] >> 8;
    }
    function Te() {
      Aa = Ae, ll = _e, ul = Ce, hl = Me;
    }
    function fn(r, o, f) {
      T[r] = function(m, b, w, x, A, k, E, V, et, O, Y, K, ut, Q, ct, pt, xt) {
        var bt, Mt = xt - 1 >> 1, Pt = A[k + 0] | E[V + 0] << 16, re = et[O + 0] | Y[K + 0] << 16;
        t(m != null);
        var Ot = 3 * Pt + re + 131074 >> 2;
        for (o(m[b + 0], 255 & Ot, Ot >> 16, ut, Q), w != null && (Ot = 3 * re + Pt + 131074 >> 2, o(w[x + 0], 255 & Ot, Ot >> 16, ct, pt)), bt = 1; bt <= Mt; ++bt) {
          var ce = A[k + bt] | E[V + bt] << 16, Qe = et[O + bt] | Y[K + bt] << 16, ie = Pt + ce + re + Qe + 524296, jt = ie + 2 * (ce + re) >> 3;
          Ot = jt + Pt >> 1, Pt = (ie = ie + 2 * (Pt + Qe) >> 3) + ce >> 1, o(m[b + 2 * bt - 1], 255 & Ot, Ot >> 16, ut, Q + (2 * bt - 1) * f), o(m[b + 2 * bt - 0], 255 & Pt, Pt >> 16, ut, Q + (2 * bt - 0) * f), w != null && (Ot = ie + re >> 1, Pt = jt + Qe >> 1, o(w[x + 2 * bt - 1], 255 & Ot, Ot >> 16, ct, pt + (2 * bt - 1) * f), o(w[x + 2 * bt + 0], 255 & Pt, Pt >> 16, ct, pt + (2 * bt + 0) * f)), Pt = ce, re = Qe;
        }
        1 & xt || (Ot = 3 * Pt + re + 131074 >> 2, o(m[b + xt - 1], 255 & Ot, Ot >> 16, ut, Q + (xt - 1) * f), w != null && (Ot = 3 * re + Pt + 131074 >> 2, o(w[x + xt - 1], 255 & Ot, Ot >> 16, ct, pt + (xt - 1) * f)));
      };
    }
    function Sr() {
      Wn[es] = ff, Wn[ns] = xl, Wn[ml] = cf, Wn[rs] = _l, Wn[is] = Al, Wn[ro] = Nl, Wn[vl] = df, Wn[io] = xl, Wn[ao] = _l, Wn[as] = Al, Wn[so] = Nl;
    }
    function ma(r) {
      return r & -16384 ? 0 > r ? 0 : 255 : r >> pf;
    }
    function si(r, o) {
      return ma((19077 * r >> 8) + (26149 * o >> 8) - 14234);
    }
    function oi(r, o, f) {
      return ma((19077 * r >> 8) - (6419 * o >> 8) - (13320 * f >> 8) + 8708);
    }
    function Rr(r, o) {
      return ma((19077 * r >> 8) + (33050 * o >> 8) - 17685);
    }
    function li(r, o, f, m, b) {
      m[b + 0] = si(r, f), m[b + 1] = oi(r, o, f), m[b + 2] = Rr(r, o);
    }
    function Ri(r, o, f, m, b) {
      m[b + 0] = Rr(r, o), m[b + 1] = oi(r, o, f), m[b + 2] = si(r, f);
    }
    function Di(r, o, f, m, b) {
      var w = oi(r, o, f);
      o = w << 3 & 224 | Rr(r, o) >> 3, m[b + 0] = 248 & si(r, f) | w >> 5, m[b + 1] = o;
    }
    function cn(r, o, f, m, b) {
      var w = 240 & Rr(r, o) | 15;
      m[b + 0] = 240 & si(r, f) | oi(r, o, f) >> 4, m[b + 1] = w;
    }
    function ui(r, o, f, m, b) {
      m[b + 0] = 255, li(r, o, f, m, b + 1);
    }
    function hi(r, o, f, m, b) {
      Ri(r, o, f, m, b), m[b + 3] = 255;
    }
    function va(r, o, f, m, b) {
      li(r, o, f, m, b), m[b + 3] = 255;
    }
    function hr(r, o, f) {
      T[r] = function(m, b, w, x, A, k, E, V, et) {
        for (var O = V + (-2 & et) * f; V != O; ) o(m[b + 0], w[x + 0], A[k + 0], E, V), o(m[b + 1], w[x + 0], A[k + 0], E, V + f), b += 2, ++x, ++k, V += 2 * f;
        1 & et && o(m[b + 0], w[x + 0], A[k + 0], E, V);
      };
    }
    function wn(r, o, f) {
      return f == 0 ? r == 0 ? o == 0 ? 6 : 5 : o == 0 ? 4 : 0 : f;
    }
    function Ka(r, o, f, m, b) {
      switch (r >>> 30) {
        case 3:
          kr(o, f, m, b, 0);
          break;
        case 2:
          zr(o, f, m, b);
          break;
        case 1:
          dn(o, f, m, b);
      }
    }
    function qi(r, o) {
      var f, m, b = o.M, w = o.Nb, x = r.oc, A = r.pc + 40, k = r.oc, E = r.pc + 584, V = r.oc, et = r.pc + 600;
      for (f = 0; 16 > f; ++f) x[A + 32 * f - 1] = 129;
      for (f = 0; 8 > f; ++f) k[E + 32 * f - 1] = 129, V[et + 32 * f - 1] = 129;
      for (0 < b ? x[A - 1 - 32] = k[E - 1 - 32] = V[et - 1 - 32] = 129 : (s(x, A - 32 - 1, 127, 21), s(k, E - 32 - 1, 127, 9), s(V, et - 32 - 1, 127, 9)), m = 0; m < r.za; ++m) {
        var O = o.ya[o.aa + m];
        if (0 < m) {
          for (f = -1; 16 > f; ++f) i(x, A + 32 * f - 4, x, A + 32 * f + 12, 4);
          for (f = -1; 8 > f; ++f) i(k, E + 32 * f - 4, k, E + 32 * f + 4, 4), i(V, et + 32 * f - 4, V, et + 32 * f + 4, 4);
        }
        var Y = r.Gd, K = r.Hd + m, ut = O.ad, Q = O.Hc;
        if (0 < b && (i(x, A - 32, Y[K].y, 0, 16), i(k, E - 32, Y[K].f, 0, 8), i(V, et - 32, Y[K].ea, 0, 8)), O.Za) {
          var ct = x, pt = A - 32 + 16;
          for (0 < b && (m >= r.za - 1 ? s(ct, pt, Y[K].y[15], 4) : i(ct, pt, Y[K + 1].y, 0, 4)), f = 0; 4 > f; f++) ct[pt + 128 + f] = ct[pt + 256 + f] = ct[pt + 384 + f] = ct[pt + 0 + f];
          for (f = 0; 16 > f; ++f, Q <<= 2) ct = x, pt = A + Sl[f], Xn[O.Ob[f]](ct, pt), Ka(Q, ut, 16 * +f, ct, pt);
        } else if (ct = wn(m, b, O.Ob[0]), Hr[ct](x, A), Q != 0) for (f = 0; 16 > f; ++f, Q <<= 2) Ka(Q, ut, 16 * +f, x, A + Sl[f]);
        for (f = O.Gc, ct = wn(m, b, O.Dd), Ir[ct](k, E), Ir[ct](V, et), Q = ut, ct = k, pt = E, 255 & (O = 0 | f) && (170 & O ? Gi(Q, 256, ct, pt) : cr(Q, 256, ct, pt)), O = V, Q = et, 255 & (f >>= 8) && (170 & f ? Gi(ut, 320, O, Q) : cr(ut, 320, O, Q)), b < r.Ub - 1 && (i(Y[K].y, 0, x, A + 480, 16), i(Y[K].f, 0, k, E + 224, 8), i(Y[K].ea, 0, V, et + 224, 8)), f = 8 * w * r.B, Y = r.sa, K = r.ta + 16 * m + 16 * w * r.R, ut = r.qa, O = r.ra + 8 * m + f, Q = r.Ha, ct = r.Ia + 8 * m + f, f = 0; 16 > f; ++f) i(Y, K + f * r.R, x, A + 32 * f, 16);
        for (f = 0; 8 > f; ++f) i(ut, O + f * r.B, k, E + 32 * f, 8), i(Q, ct + f * r.B, V, et + 32 * f, 8);
      }
    }
    function Za(r, o, f, m, b, w, x, A, k) {
      var E = [0], V = [0], et = 0, O = k != null ? k.kd : 0, Y = k ?? new $();
      if (r == null || 12 > f) return 7;
      Y.data = r, Y.w = o, Y.ha = f, o = [o], f = [f], Y.gb = [Y.gb];
      t: {
        var K = o, ut = f, Q = Y.gb;
        if (t(r != null), t(ut != null), t(Q != null), Q[0] = 0, 12 <= ut[0] && !e(r, K[0], "RIFF")) {
          if (e(r, K[0] + 8, "WEBP")) {
            Q = 3;
            break t;
          }
          var ct = Dt(r, K[0] + 4);
          if (12 > ct || 4294967286 < ct) {
            Q = 3;
            break t;
          }
          if (O && ct > ut[0] - 8) {
            Q = 7;
            break t;
          }
          Q[0] = ct, K[0] += 12, ut[0] -= 12;
        }
        Q = 0;
      }
      if (Q != 0) return Q;
      for (ct = 0 < Y.gb[0], f = f[0]; ; ) {
        t: {
          var pt = r;
          ut = o, Q = f;
          var xt = E, bt = V, Mt = K = [0];
          if ((Ot = et = [et])[0] = 0, 8 > Q[0]) Q = 7;
          else {
            if (!e(pt, ut[0], "VP8X")) {
              if (Dt(pt, ut[0] + 4) != 10) {
                Q = 3;
                break t;
              }
              if (18 > Q[0]) {
                Q = 7;
                break t;
              }
              var Pt = Dt(pt, ut[0] + 8), re = 1 + St(pt, ut[0] + 12);
              if (2147483648 <= re * (pt = 1 + St(pt, ut[0] + 15))) {
                Q = 3;
                break t;
              }
              Mt != null && (Mt[0] = Pt), xt != null && (xt[0] = re), bt != null && (bt[0] = pt), ut[0] += 18, Q[0] -= 18, Ot[0] = 1;
            }
            Q = 0;
          }
        }
        if (et = et[0], K = K[0], Q != 0) return Q;
        if (ut = !!(2 & K), !ct && et) return 3;
        if (w != null && (w[0] = !!(16 & K)), x != null && (x[0] = ut), A != null && (A[0] = 0), x = E[0], K = V[0], et && ut && k == null) {
          Q = 0;
          break;
        }
        if (4 > f) {
          Q = 7;
          break;
        }
        if (ct && et || !ct && !et && !e(r, o[0], "ALPH")) {
          f = [f], Y.na = [Y.na], Y.P = [Y.P], Y.Sa = [Y.Sa];
          t: {
            Pt = r, Q = o, ct = f;
            var Ot = Y.gb;
            xt = Y.na, bt = Y.P, Mt = Y.Sa, re = 22, t(Pt != null), t(ct != null), pt = Q[0];
            var ce = ct[0];
            for (t(xt != null), t(Mt != null), xt[0] = null, bt[0] = null, Mt[0] = 0; ; ) {
              if (Q[0] = pt, ct[0] = ce, 8 > ce) {
                Q = 7;
                break t;
              }
              var Qe = Dt(Pt, pt + 4);
              if (4294967286 < Qe) {
                Q = 3;
                break t;
              }
              var ie = 8 + Qe + 1 & -2;
              if (re += ie, 0 < Ot && re > Ot) {
                Q = 3;
                break t;
              }
              if (!e(Pt, pt, "VP8 ") || !e(Pt, pt, "VP8L")) {
                Q = 0;
                break t;
              }
              if (ce[0] < ie) {
                Q = 7;
                break t;
              }
              e(Pt, pt, "ALPH") || (xt[0] = Pt, bt[0] = pt + 8, Mt[0] = Qe), pt += ie, ce -= ie;
            }
          }
          if (f = f[0], Y.na = Y.na[0], Y.P = Y.P[0], Y.Sa = Y.Sa[0], Q != 0) break;
        }
        f = [f], Y.Ja = [Y.Ja], Y.xa = [Y.xa];
        t: if (Ot = r, Q = o, ct = f, xt = Y.gb[0], bt = Y.Ja, Mt = Y.xa, Pt = Q[0], pt = !e(Ot, Pt, "VP8 "), re = !e(Ot, Pt, "VP8L"), t(Ot != null), t(ct != null), t(bt != null), t(Mt != null), 8 > ct[0]) Q = 7;
        else {
          if (pt || re) {
            if (Ot = Dt(Ot, Pt + 4), 12 <= xt && Ot > xt - 12) {
              Q = 3;
              break t;
            }
            if (O && Ot > ct[0] - 8) {
              Q = 7;
              break t;
            }
            bt[0] = Ot, Q[0] += 8, ct[0] -= 8, Mt[0] = re;
          } else Mt[0] = 5 <= ct[0] && Ot[Pt + 0] == 47 && !(Ot[Pt + 4] >> 5), bt[0] = ct[0];
          Q = 0;
        }
        if (f = f[0], Y.Ja = Y.Ja[0], Y.xa = Y.xa[0], o = o[0], Q != 0) break;
        if (4294967286 < Y.Ja) return 3;
        if (A == null || ut || (A[0] = Y.xa ? 2 : 1), x = [x], K = [K], Y.xa) {
          if (5 > f) {
            Q = 7;
            break;
          }
          A = x, O = K, ut = w, r == null || 5 > f ? r = 0 : 5 <= f && r[o + 0] == 47 && !(r[o + 4] >> 5) ? (ct = [0], Ot = [0], xt = [0], dt(bt = new B(), r, o, f), yr(bt, ct, Ot, xt) ? (A != null && (A[0] = ct[0]), O != null && (O[0] = Ot[0]), ut != null && (ut[0] = xt[0]), r = 1) : r = 0) : r = 0;
        } else {
          if (10 > f) {
            Q = 7;
            break;
          }
          A = K, r == null || 10 > f || !za(r, o + 3, f - 3) ? r = 0 : (O = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16, ut = 16383 & (r[o + 7] << 8 | r[o + 6]), r = 16383 & (r[o + 9] << 8 | r[o + 8]), 1 & O || 3 < (O >> 1 & 7) || !(O >> 4 & 1) || O >> 5 >= Y.Ja || !ut || !r ? r = 0 : (x && (x[0] = ut), A && (A[0] = r), r = 1));
        }
        if (!r || (x = x[0], K = K[0], et && (E[0] != x || V[0] != K))) return 3;
        k != null && (k[0] = Y, k.offset = o - k.w, t(4294967286 > o - k.w), t(k.offset == k.ha - f));
        break;
      }
      return Q == 0 || Q == 7 && et && k == null ? (w != null && (w[0] |= Y.na != null && 0 < Y.na.length), m != null && (m[0] = x), b != null && (b[0] = K), 0) : Q;
    }
    function zn(r, o, f) {
      var m = o.width, b = o.height, w = 0, x = 0, A = m, k = b;
      if (o.Da = r != null && 0 < r.Da, o.Da && (A = r.cd, k = r.bd, w = r.v, x = r.j, 11 > f || (w &= -2, x &= -2), 0 > w || 0 > x || 0 >= A || 0 >= k || w + A > m || x + k > b)) return 0;
      if (o.v = w, o.j = x, o.va = w + A, o.o = x + k, o.U = A, o.T = k, o.da = r != null && 0 < r.da, o.da) {
        if (!Ht(A, k, f = [r.ib], w = [r.hb])) return 0;
        o.ib = f[0], o.hb = w[0];
      }
      return o.ob = r != null && r.ob, o.Kb = r == null || !r.Sd, o.da && (o.ob = o.ib < 3 * m / 4 && o.hb < 3 * b / 4, o.Kb = 0), 1;
    }
    function fi(r) {
      if (r == null) return 2;
      if (11 > r.S) {
        var o = r.f.RGBA;
        o.fb += (r.height - 1) * o.A, o.A = -o.A;
      } else o = r.f.kb, r = r.height, o.O += (r - 1) * o.fa, o.fa = -o.fa, o.N += (r - 1 >> 1) * o.Ab, o.Ab = -o.Ab, o.W += (r - 1 >> 1) * o.Db, o.Db = -o.Db, o.F != null && (o.J += (r - 1) * o.lb, o.lb = -o.lb);
      return 0;
    }
    function ba(r, o, f, m) {
      if (m == null || 0 >= r || 0 >= o) return 2;
      if (f != null) {
        if (f.Da) {
          var b = f.cd, w = f.bd, x = -2 & f.v, A = -2 & f.j;
          if (0 > x || 0 > A || 0 >= b || 0 >= w || x + b > r || A + w > o) return 2;
          r = b, o = w;
        }
        if (f.da) {
          if (!Ht(r, o, b = [f.ib], w = [f.hb])) return 2;
          r = b[0], o = w[0];
        }
      }
      m.width = r, m.height = o;
      t: {
        var k = m.width, E = m.height;
        if (r = m.S, 0 >= k || 0 >= E || !(r >= es && 13 > r)) r = 2;
        else {
          if (0 >= m.Rd && m.sd == null) {
            x = w = b = o = 0;
            var V = (A = k * kl[r]) * E;
            if (11 > r || (w = (E + 1) / 2 * (o = (k + 1) / 2), r == 12 && (x = (b = k) * E)), (E = a(V + 2 * w + x)) == null) {
              r = 1;
              break t;
            }
            m.sd = E, 11 > r ? ((k = m.f.RGBA).eb = E, k.fb = 0, k.A = A, k.size = V) : ((k = m.f.kb).y = E, k.O = 0, k.fa = A, k.Fd = V, k.f = E, k.N = 0 + V, k.Ab = o, k.Cd = w, k.ea = E, k.W = 0 + V + w, k.Db = o, k.Ed = w, r == 12 && (k.F = E, k.J = 0 + V + 2 * w), k.Tc = x, k.lb = b);
          }
          if (o = 1, b = m.S, w = m.width, x = m.height, b >= es && 13 > b) if (11 > b) r = m.f.RGBA, o &= (A = Math.abs(r.A)) * (x - 1) + w <= r.size, o &= A >= w * kl[b], o &= r.eb != null;
          else {
            r = m.f.kb, A = (w + 1) / 2, V = (x + 1) / 2, k = Math.abs(r.fa), E = Math.abs(r.Ab);
            var et = Math.abs(r.Db), O = Math.abs(r.lb), Y = O * (x - 1) + w;
            o &= k * (x - 1) + w <= r.Fd, o &= E * (V - 1) + A <= r.Cd, o = (o &= et * (V - 1) + A <= r.Ed) & k >= w & E >= A & et >= A, o &= r.y != null, o &= r.f != null, o &= r.ea != null, b == 12 && (o &= O >= w, o &= Y <= r.Tc, o &= r.F != null);
          }
          else o = 0;
          r = o ? 0 : 2;
        }
      }
      return r != 0 || f != null && f.fd && (r = fi(m)), r;
    }
    var Ui = 64, ci = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], wa = 24, yn = 32, Nn = 8, zi = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    It("Predictor0", "PredictorAdd0"), T.Predictor0 = function() {
      return 4278190080;
    }, T.Predictor1 = function(r) {
      return r;
    }, T.Predictor2 = function(r, o, f) {
      return o[f + 0];
    }, T.Predictor3 = function(r, o, f) {
      return o[f + 1];
    }, T.Predictor4 = function(r, o, f) {
      return o[f - 1];
    }, T.Predictor5 = function(r, o, f) {
      return qt(qt(r, o[f + 1]), o[f + 0]);
    }, T.Predictor6 = function(r, o, f) {
      return qt(r, o[f - 1]);
    }, T.Predictor7 = function(r, o, f) {
      return qt(r, o[f + 0]);
    }, T.Predictor8 = function(r, o, f) {
      return qt(o[f - 1], o[f + 0]);
    }, T.Predictor9 = function(r, o, f) {
      return qt(o[f + 0], o[f + 1]);
    }, T.Predictor10 = function(r, o, f) {
      return qt(qt(r, o[f - 1]), qt(o[f + 0], o[f + 1]));
    }, T.Predictor11 = function(r, o, f) {
      var m = o[f + 0];
      return 0 >= Zt(m >> 24 & 255, r >> 24 & 255, (o = o[f - 1]) >> 24 & 255) + Zt(m >> 16 & 255, r >> 16 & 255, o >> 16 & 255) + Zt(m >> 8 & 255, r >> 8 & 255, o >> 8 & 255) + Zt(255 & m, 255 & r, 255 & o) ? m : r;
    }, T.Predictor12 = function(r, o, f) {
      var m = o[f + 0];
      return (ve((r >> 24 & 255) + (m >> 24 & 255) - ((o = o[f - 1]) >> 24 & 255)) << 24 | ve((r >> 16 & 255) + (m >> 16 & 255) - (o >> 16 & 255)) << 16 | ve((r >> 8 & 255) + (m >> 8 & 255) - (o >> 8 & 255)) << 8 | ve((255 & r) + (255 & m) - (255 & o))) >>> 0;
    }, T.Predictor13 = function(r, o, f) {
      var m = o[f - 1];
      return (ue((r = qt(r, o[f + 0])) >> 24 & 255, m >> 24 & 255) << 24 | ue(r >> 16 & 255, m >> 16 & 255) << 16 | ue(r >> 8 & 255, m >> 8 & 255) << 8 | ue(255 & r, 255 & m)) >>> 0;
    };
    var Dr = T.PredictorAdd0;
    T.PredictorAdd1 = fe, It("Predictor2", "PredictorAdd2"), It("Predictor3", "PredictorAdd3"), It("Predictor4", "PredictorAdd4"), It("Predictor5", "PredictorAdd5"), It("Predictor6", "PredictorAdd6"), It("Predictor7", "PredictorAdd7"), It("Predictor8", "PredictorAdd8"), It("Predictor9", "PredictorAdd9"), It("Predictor10", "PredictorAdd10"), It("Predictor11", "PredictorAdd11"), It("Predictor12", "PredictorAdd12"), It("Predictor13", "PredictorAdd13");
    var qr = T.PredictorAdd2;
    Rt("ColorIndexInverseTransform", "MapARGB", "32b", function(r) {
      return r >> 8 & 255;
    }, function(r) {
      return r;
    }), Rt("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(r) {
      return r;
    }, function(r) {
      return r >> 8 & 255;
    });
    var Hi, di = T.ColorIndexInverseTransform, Ke = T.MapARGB, eo = T.VP8LColorIndexInverseTransformAlpha, fr = T.MapAlpha, $n = T.VP8LPredictorsAdd = [];
    $n.length = 16, (T.VP8LPredictors = []).length = 16, (T.VP8LPredictorsAdd_C = []).length = 16, (T.VP8LPredictors_C = []).length = 16;
    var pi, ya, xa, Wi, gi, mi, Ur, kr, zr, Gi, dn, cr, ke, Pe, He, Ze, Pr, _a, Vi, Qa, il, al, sl, ol, Aa, ll, ul, hl, fl = a(511), cl = a(2041), dl = a(225), pl = a(767), gl = 0, no = cl, ts = dl, Cn = pl, Hn = fl, es = 0, ns = 1, ml = 2, rs = 3, is = 4, ro = 5, vl = 6, io = 7, ao = 8, as = 9, so = 10, Xh = [2, 3, 7], Kh = [3, 3, 11], bl = [280, 256, 256, 256, 40], Zh = [0, 1, 1, 1, 0], Qh = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], tf = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], ef = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], nf = 8, oo = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], lo = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], Na = null, rf = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], af = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], wl = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], sf = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], of = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], lf = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], uf = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], Hr = [], Xn = [], Ir = [], hf = 1, yl = 2, Wr = [], Wn = [];
    fn("UpsampleRgbLinePair", li, 3), fn("UpsampleBgrLinePair", Ri, 3), fn("UpsampleRgbaLinePair", va, 4), fn("UpsampleBgraLinePair", hi, 4), fn("UpsampleArgbLinePair", ui, 4), fn("UpsampleRgba4444LinePair", cn, 2), fn("UpsampleRgb565LinePair", Di, 2);
    var ff = T.UpsampleRgbLinePair, cf = T.UpsampleBgrLinePair, xl = T.UpsampleRgbaLinePair, _l = T.UpsampleBgraLinePair, Al = T.UpsampleArgbLinePair, Nl = T.UpsampleRgba4444LinePair, df = T.UpsampleRgb565LinePair, ss = 16, os = 1 << ss - 1, La = -227, uo = 482, pf = 6, Ll = 0, gf = a(256), mf = a(256), vf = a(256), bf = a(256), wf = a(uo - La), yf = a(uo - La);
    hr("YuvToRgbRow", li, 3), hr("YuvToBgrRow", Ri, 3), hr("YuvToRgbaRow", va, 4), hr("YuvToBgraRow", hi, 4), hr("YuvToArgbRow", ui, 4), hr("YuvToRgba4444Row", cn, 2), hr("YuvToRgb565Row", Di, 2);
    var Sl = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], ls = [0, 2, 8], xf = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], _f = 1;
    this.WebPDecodeRGBA = function(r, o, f, m, b) {
      var w = ns, x = new q(), A = new le();
      x.ba = A, A.S = w, A.width = [A.width], A.height = [A.height];
      var k = A.width, E = A.height, V = new Gt();
      if (V == null || r == null) var et = 2;
      else t(V != null), et = Za(r, o, f, V.width, V.height, V.Pd, V.Qd, V.format, null);
      if (et != 0 ? k = 0 : (k != null && (k[0] = V.width[0]), E != null && (E[0] = V.height[0]), k = 1), k) {
        A.width = A.width[0], A.height = A.height[0], m != null && (m[0] = A.width), b != null && (b[0] = A.height);
        t: {
          if (m = new Ii(), (b = new $()).data = r, b.w = o, b.ha = f, b.kd = 1, o = [0], t(b != null), ((r = Za(b.data, b.w, b.ha, null, null, null, o, null, b)) == 0 || r == 7) && o[0] && (r = 4), (o = r) == 0) {
            if (t(x != null), m.data = b.data, m.w = b.w + b.offset, m.ha = b.ha - b.offset, m.put = Vt, m.ac = rr, m.bc = wr, m.ma = x, b.xa) {
              if ((r = ei()) == null) {
                x = 1;
                break t;
              }
              if ((function(O, Y) {
                var K = [0], ut = [0], Q = [0];
                e: for (; ; ) {
                  if (O == null) return 0;
                  if (Y == null) return O.a = 2, 0;
                  if (O.l = Y, O.a = 0, dt(O.m, Y.data, Y.w, Y.ha), !yr(O.m, K, ut, Q)) {
                    O.a = 3;
                    break e;
                  }
                  if (O.xb = yl, Y.width = K[0], Y.height = ut[0], !ar(K[0], ut[0], 1, O, null)) break e;
                  return 1;
                }
                return t(O.a != 0), 0;
              })(r, m)) {
                if (m = (o = ba(m.width, m.height, x.Oa, x.ba)) == 0) {
                  e: {
                    m = r;
                    n: for (; ; ) {
                      if (m == null) {
                        m = 0;
                        break e;
                      }
                      if (t(m.s.yc != null), t(m.s.Ya != null), t(0 < m.s.Wb), t((f = m.l) != null), t((b = f.ma) != null), m.xb != 0) {
                        if (m.ca = b.ba, m.tb = b.tb, t(m.ca != null), !zn(b.Oa, f, rs)) {
                          m.a = 2;
                          break n;
                        }
                        if (!ni(m, f.width) || f.da) break n;
                        if ((f.da || Yt(m.ca.S)) && Te(), 11 > m.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), m.ca.f.kb.F != null && Te()), m.Pb && 0 < m.s.ua && m.s.vb.X == null && !I(m.s.vb, m.s.Wa.Xa)) {
                          m.a = 1;
                          break n;
                        }
                        m.xb = 0;
                      }
                      if (!Jn(m, m.V, m.Ba, m.c, m.i, f.o, jr)) break n;
                      b.Dc = m.Ma, m = 1;
                      break e;
                    }
                    t(m.a != 0), m = 0;
                  }
                  m = !m;
                }
                m && (o = r.a);
              } else o = r.a;
            } else {
              if ((r = new Rs()) == null) {
                x = 1;
                break t;
              }
              if (r.Fa = b.na, r.P = b.P, r.qc = b.Sa, or(r, m)) {
                if ((o = ba(m.width, m.height, x.Oa, x.ba)) == 0) {
                  if (r.Aa = 0, f = x.Oa, t((b = r) != null), f != null) {
                    if (0 < (k = 0 > (k = f.Md) ? 0 : 100 < k ? 255 : 255 * k / 100)) {
                      for (E = V = 0; 4 > E; ++E) 12 > (et = b.pb[E]).lc && (et.ia = k * xf[0 > et.lc ? 0 : et.lc] >> 3), V |= et.ia;
                      V && (alert("todo:VP8InitRandom"), b.ia = 1);
                    }
                    b.Ga = f.Id, 100 < b.Ga ? b.Ga = 100 : 0 > b.Ga && (b.Ga = 0);
                  }
                  (function(O, Y) {
                    if (O == null) return 0;
                    if (Y == null) return $e(O, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!O.cb && !or(O, Y)) return 0;
                    if (t(O.cb), Y.ac == null || Y.ac(Y)) {
                      Y.ob && (O.L = 0);
                      var K = ls[O.L];
                      if (O.L == 2 ? (O.yb = 0, O.zb = 0) : (O.yb = Y.v - K >> 4, O.zb = Y.j - K >> 4, 0 > O.yb && (O.yb = 0), 0 > O.zb && (O.zb = 0)), O.Va = Y.o + 15 + K >> 4, O.Hb = Y.va + 15 + K >> 4, O.Hb > O.za && (O.Hb = O.za), O.Va > O.Ub && (O.Va = O.Ub), 0 < O.L) {
                        var ut = O.ed;
                        for (K = 0; 4 > K; ++K) {
                          var Q;
                          if (O.Qa.Cb) {
                            var ct = O.Qa.Lb[K];
                            O.Qa.Fb || (ct += ut.Tb);
                          } else ct = ut.Tb;
                          for (Q = 0; 1 >= Q; ++Q) {
                            var pt = O.gd[K][Q], xt = ct;
                            if (ut.Pc && (xt += ut.vd[0], Q && (xt += ut.od[0])), 0 < (xt = 0 > xt ? 0 : 63 < xt ? 63 : xt)) {
                              var bt = xt;
                              0 < ut.wb && (bt = 4 < ut.wb ? bt >> 2 : bt >> 1) > 9 - ut.wb && (bt = 9 - ut.wb), 1 > bt && (bt = 1), pt.dd = bt, pt.tc = 2 * xt + bt, pt.ld = 40 <= xt ? 2 : 15 <= xt ? 1 : 0;
                            } else pt.tc = 0;
                            pt.La = Q;
                          }
                        }
                      }
                      K = 0;
                    } else $e(O, 6, "Frame setup failed"), K = O.a;
                    if (K = K == 0) {
                      if (K) {
                        O.$c = 0, 0 < O.Aa || (O.Ic = _f);
                        e: {
                          K = O.Ic, ut = 4 * (bt = O.za);
                          var Mt = 32 * bt, Pt = bt + 1, re = 0 < O.L ? bt * (0 < O.Aa ? 2 : 1) : 0, Ot = (O.Aa == 2 ? 2 : 1) * bt;
                          if ((pt = ut + 832 + (Q = 3 * (16 * K + ls[O.L]) / 2 * Mt) + (ct = O.Fa != null && 0 < O.Fa.length ? O.Kc.c * O.Kc.i : 0)) != pt) K = 0;
                          else {
                            if (pt > O.Vb) {
                              if (O.Vb = 0, O.Ec = a(pt), O.Fc = 0, O.Ec == null) {
                                K = $e(O, 1, "no memory during frame initialization.");
                                break e;
                              }
                              O.Vb = pt;
                            }
                            pt = O.Ec, xt = O.Fc, O.Ac = pt, O.Bc = xt, xt += ut, O.Gd = c(Mt, qa), O.Hd = 0, O.rb = c(Pt + 1, oa), O.sb = 1, O.wa = re ? c(re, Un) : null, O.Y = 0, O.D.Nb = 0, O.D.wa = O.wa, O.D.Y = O.Y, 0 < O.Aa && (O.D.Y += bt), t(!0), O.oc = pt, O.pc = xt, xt += 832, O.ya = c(Ot, la), O.aa = 0, O.D.ya = O.ya, O.D.aa = O.aa, O.Aa == 2 && (O.D.aa += bt), O.R = 16 * bt, O.B = 8 * bt, bt = (Mt = ls[O.L]) * O.R, Mt = Mt / 2 * O.B, O.sa = pt, O.ta = xt + bt, O.qa = O.sa, O.ra = O.ta + 16 * K * O.R + Mt, O.Ha = O.qa, O.Ia = O.ra + 8 * K * O.B + Mt, O.$c = 0, xt += Q, O.mb = ct ? pt : null, O.nb = ct ? xt : null, t(xt + ct <= O.Fc + O.Vb), ua(O), s(O.Ac, O.Bc, 0, ut), K = 1;
                          }
                        }
                        if (K) {
                          if (Y.ka = 0, Y.y = O.sa, Y.O = O.ta, Y.f = O.qa, Y.N = O.ra, Y.ea = O.Ha, Y.Vd = O.Ia, Y.fa = O.R, Y.Rc = O.B, Y.F = null, Y.J = 0, !gl) {
                            for (K = -255; 255 >= K; ++K) fl[255 + K] = 0 > K ? -K : K;
                            for (K = -1020; 1020 >= K; ++K) cl[1020 + K] = -128 > K ? -128 : 127 < K ? 127 : K;
                            for (K = -112; 112 >= K; ++K) dl[112 + K] = -16 > K ? -16 : 15 < K ? 15 : K;
                            for (K = -255; 510 >= K; ++K) pl[255 + K] = 0 > K ? 0 : 255 < K ? 255 : K;
                            gl = 1;
                          }
                          Ur = Wa, kr = Ds, Gi = qs, dn = Us, cr = lr, zr = Ha, ke = Ya, Pe = Ja, He = Xa, Ze = u, Pr = $a, _a = ai, Vi = v, Qa = C, il = Mi, al = ga, sl = Ti, ol = Va, Xn[0] = Js, Xn[1] = Oi, Xn[2] = Vs, Xn[3] = Ys, Xn[4] = $s, Xn[5] = _r, Xn[6] = Xs, Xn[7] = Ar, Xn[8] = Zs, Xn[9] = Ks, Hr[0] = Ga, Hr[1] = zs, Hr[2] = Hs, Hr[3] = Ws, Hr[4] = Mr, Hr[5] = Gs, Hr[6] = ri, Ir[0] = Qs, Ir[1] = ha, Ir[2] = ji, Ir[3] = fa, Ir[4] = to, Ir[5] = Bi, Ir[6] = ca, K = 1;
                        } else K = 0;
                      }
                      K && (K = (function(ce, Qe) {
                        for (ce.M = 0; ce.M < ce.Va; ++ce.M) {
                          var ie, jt = ce.Jc[ce.M & ce.Xb], Nt = ce.m, We = ce;
                          for (ie = 0; ie < We.za; ++ie) {
                            var ee = Nt, pe = We, Fe = pe.Ac, on = pe.Bc + 4 * ie, xn = pe.zc, De = pe.ya[pe.aa + ie];
                            if (pe.Qa.Bb ? De.$b = gt(ee, pe.Pa.jb[0]) ? 2 + gt(ee, pe.Pa.jb[2]) : gt(ee, pe.Pa.jb[1]) : De.$b = 0, pe.kc && (De.Ad = gt(ee, pe.Bd)), De.Za = !gt(ee, 145) + 0, De.Za) {
                              var pn = De.Ob, _n = 0;
                              for (pe = 0; 4 > pe; ++pe) {
                                var tn, me = xn[0 + pe];
                                for (tn = 0; 4 > tn; ++tn) {
                                  me = of[Fe[on + tn]][me];
                                  for (var we = wl[gt(ee, me[0])]; 0 < we; ) we = wl[2 * we + gt(ee, me[we])];
                                  me = -we, Fe[on + tn] = me;
                                }
                                i(pn, _n, Fe, on, 4), _n += 4, xn[0 + pe] = me;
                              }
                            } else me = gt(ee, 156) ? gt(ee, 128) ? 1 : 3 : gt(ee, 163) ? 2 : 0, De.Ob[0] = me, s(Fe, on, me, 4), s(xn, 0, me, 4);
                            De.Dd = gt(ee, 142) ? gt(ee, 114) ? gt(ee, 183) ? 1 : 3 : 2 : 0;
                          }
                          if (We.m.Ka) return $e(ce, 7, "Premature end-of-partition0 encountered.");
                          for (; ce.ja < ce.za; ++ce.ja) {
                            if (We = jt, ee = (Nt = ce).rb[Nt.sb - 1], Fe = Nt.rb[Nt.sb + Nt.ja], ie = Nt.ya[Nt.aa + Nt.ja], on = Nt.kc ? ie.Ad : 0) ee.la = Fe.la = 0, ie.Za || (ee.Na = Fe.Na = 0), ie.Hc = 0, ie.Gc = 0, ie.ia = 0;
                            else {
                              var qe, ye;
                              if (ee = Fe, Fe = We, on = Nt.Pa.Xc, xn = Nt.ya[Nt.aa + Nt.ja], De = Nt.pb[xn.$b], pe = xn.ad, pn = 0, _n = Nt.rb[Nt.sb - 1], me = tn = 0, s(pe, pn, 0, 384), xn.Za) var ln = 0, Kn = on[3];
                              else {
                                we = a(16);
                                var Ge = ee.Na + _n.Na;
                                if (Ge = Na(Fe, on[1], Ge, De.Eb, 0, we, 0), ee.Na = _n.Na = (0 < Ge) + 0, 1 < Ge) Ur(we, 0, pe, pn);
                                else {
                                  var Ln = we[0] + 3 >> 3;
                                  for (we = 0; 256 > we; we += 16) pe[pn + we] = Ln;
                                }
                                ln = 1, Kn = on[0];
                              }
                              var Ne = 15 & ee.la, en = 15 & _n.la;
                              for (we = 0; 4 > we; ++we) {
                                var Fn = 1 & en;
                                for (Ln = ye = 0; 4 > Ln; ++Ln) Ne = Ne >> 1 | (Fn = (Ge = Na(Fe, Kn, Ge = Fn + (1 & Ne), De.Sc, ln, pe, pn)) > ln) << 7, ye = ye << 2 | (3 < Ge ? 3 : 1 < Ge ? 2 : pe[pn + 0] != 0), pn += 16;
                                Ne >>= 4, en = en >> 1 | Fn << 7, tn = (tn << 8 | ye) >>> 0;
                              }
                              for (Kn = Ne, ln = en >> 4, qe = 0; 4 > qe; qe += 2) {
                                for (ye = 0, Ne = ee.la >> 4 + qe, en = _n.la >> 4 + qe, we = 0; 2 > we; ++we) {
                                  for (Fn = 1 & en, Ln = 0; 2 > Ln; ++Ln) Ge = Fn + (1 & Ne), Ne = Ne >> 1 | (Fn = 0 < (Ge = Na(Fe, on[2], Ge, De.Qc, 0, pe, pn))) << 3, ye = ye << 2 | (3 < Ge ? 3 : 1 < Ge ? 2 : pe[pn + 0] != 0), pn += 16;
                                  Ne >>= 2, en = en >> 1 | Fn << 5;
                                }
                                me |= ye << 4 * qe, Kn |= Ne << 4 << qe, ln |= (240 & en) << qe;
                              }
                              ee.la = Kn, _n.la = ln, xn.Hc = tn, xn.Gc = me, xn.ia = 43690 & me ? 0 : De.ia, on = !(tn | me);
                            }
                            if (0 < Nt.L && (Nt.wa[Nt.Y + Nt.ja] = Nt.gd[ie.$b][ie.Za], Nt.wa[Nt.Y + Nt.ja].La |= !on), We.Ka) return $e(ce, 7, "Premature end-of-file encountered.");
                          }
                          if (ua(ce), Nt = Qe, We = 1, ie = (jt = ce).D, ee = 0 < jt.L && jt.M >= jt.zb && jt.M <= jt.Va, jt.Aa == 0) e: {
                            if (ie.M = jt.M, ie.uc = ee, qi(jt, ie), We = 1, ie = (ye = jt.D).Nb, ee = (me = ls[jt.L]) * jt.R, Fe = me / 2 * jt.B, we = 16 * ie * jt.R, Ln = 8 * ie * jt.B, on = jt.sa, xn = jt.ta - ee + we, De = jt.qa, pe = jt.ra - Fe + Ln, pn = jt.Ha, _n = jt.Ia - Fe + Ln, en = (Ne = ye.M) == 0, tn = Ne >= jt.Va - 1, jt.Aa == 2 && qi(jt, ye), ye.uc) for (Fn = (Ge = jt).D.M, t(Ge.D.uc), ye = Ge.yb; ye < Ge.Hb; ++ye) {
                              ln = ye, Kn = Fn;
                              var An = (En = (un = Ge).D).Nb;
                              qe = un.R;
                              var En = En.wa[En.Y + ln], On = un.sa, Sn = un.ta + 16 * An * qe + 16 * ln, jn = En.dd, Ie = En.tc;
                              if (Ie != 0) if (t(3 <= Ie), un.L == 1) 0 < ln && al(On, Sn, qe, Ie + 4), En.La && ol(On, Sn, qe, Ie), 0 < Kn && il(On, Sn, qe, Ie + 4), En.La && sl(On, Sn, qe, Ie);
                              else {
                                var Bn = un.B, Zn = un.qa, vi = un.ra + 8 * An * Bn + 8 * ln, Cr = un.Ha, un = un.Ia + 8 * An * Bn + 8 * ln;
                                An = En.ld, 0 < ln && (Pe(On, Sn, qe, Ie + 4, jn, An), Ze(Zn, vi, Cr, un, Bn, Ie + 4, jn, An)), En.La && (_a(On, Sn, qe, Ie, jn, An), Qa(Zn, vi, Cr, un, Bn, Ie, jn, An)), 0 < Kn && (ke(On, Sn, qe, Ie + 4, jn, An), He(Zn, vi, Cr, un, Bn, Ie + 4, jn, An)), En.La && (Pr(On, Sn, qe, Ie, jn, An), Vi(Zn, vi, Cr, un, Bn, Ie, jn, An));
                              }
                            }
                            if (jt.ia && alert("todo:DitherRow"), Nt.put != null) {
                              if (ye = 16 * Ne, Ne = 16 * (Ne + 1), en ? (Nt.y = jt.sa, Nt.O = jt.ta + we, Nt.f = jt.qa, Nt.N = jt.ra + Ln, Nt.ea = jt.Ha, Nt.W = jt.Ia + Ln) : (ye -= me, Nt.y = on, Nt.O = xn, Nt.f = De, Nt.N = pe, Nt.ea = pn, Nt.W = _n), tn || (Ne -= me), Ne > Nt.o && (Ne = Nt.o), Nt.F = null, Nt.J = null, jt.Fa != null && 0 < jt.Fa.length && ye < Ne && (Nt.J = Xe(jt, Nt, ye, Ne - ye), Nt.F = jt.mb, Nt.F == null && Nt.F.length == 0)) {
                                We = $e(jt, 3, "Could not decode alpha data.");
                                break e;
                              }
                              ye < Nt.j && (me = Nt.j - ye, ye = Nt.j, t(!(1 & me)), Nt.O += jt.R * me, Nt.N += jt.B * (me >> 1), Nt.W += jt.B * (me >> 1), Nt.F != null && (Nt.J += Nt.width * me)), ye < Ne && (Nt.O += Nt.v, Nt.N += Nt.v >> 1, Nt.W += Nt.v >> 1, Nt.F != null && (Nt.J += Nt.v), Nt.ka = ye - Nt.j, Nt.U = Nt.va - Nt.v, Nt.T = Ne - ye, We = Nt.put(Nt));
                            }
                            ie + 1 != jt.Ic || tn || (i(jt.sa, jt.ta - ee, on, xn + 16 * jt.R, ee), i(jt.qa, jt.ra - Fe, De, pe + 8 * jt.B, Fe), i(jt.Ha, jt.Ia - Fe, pn, _n + 8 * jt.B, Fe));
                          }
                          if (!We) return $e(ce, 6, "Output aborted.");
                        }
                        return 1;
                      })(O, Y)), Y.bc != null && Y.bc(Y), K &= 1;
                    }
                    return K ? (O.cb = 0, K) : 0;
                  })(r, m) || (o = r.a);
                }
              } else o = r.a;
            }
            o == 0 && x.Oa != null && x.Oa.fd && (o = fi(x.ba));
          }
          x = o;
        }
        w = x != 0 ? null : 11 > w ? A.f.RGBA.eb : A.f.kb.y;
      } else w = null;
      return w;
    };
    var kl = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function d(T, tt) {
    for (var S = "", j = 0; j < 4; j++) S += String.fromCharCode(T[tt++]);
    return S;
  }
  function p(T, tt) {
    return T[tt + 0] | T[tt + 1] << 8;
  }
  function y(T, tt) {
    return (T[tt + 0] | T[tt + 1] << 8 | T[tt + 2] << 16) >>> 0;
  }
  function N(T, tt) {
    return (T[tt + 0] | T[tt + 1] << 8 | T[tt + 2] << 16 | T[tt + 3] << 24) >>> 0;
  }
  new h();
  var g = [0], F = [0], P = [], M = new h(), L = n, z = (function(T, tt) {
    var S = {}, j = 0, W = !1, U = 0, it = 0;
    if (S.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    (function(_, B) {
      for (var R = 0; R < 4; R++) if (_[B + R] != "RIFF".charCodeAt(R)) return !0;
      return !1;
    })(T, tt)) {
      for (N(T, tt += 4), tt += 8; tt < T.length; ) {
        var ot = d(T, tt), ft = N(T, tt += 4);
        tt += 4;
        var nt = ft + (1 & ft);
        switch (ot) {
          case "VP8 ":
          case "VP8L":
            S.frames[j] === void 0 && (S.frames[j] = {}), (wt = S.frames[j]).src_off = W ? it : tt - 8, wt.src_size = U + ft + 8, j++, W && (W = !1, U = 0, it = 0);
            break;
          case "VP8X":
            (wt = S.header = {}).feature_flags = T[tt];
            var dt = tt + 4;
            wt.canvas_width = 1 + y(T, dt), dt += 3, wt.canvas_height = 1 + y(T, dt), dt += 3;
            break;
          case "ALPH":
            W = !0, U = nt + 8, it = tt - 8;
            break;
          case "ANIM":
            (wt = S.header).bgcolor = N(T, tt), dt = tt + 4, wt.loop_count = p(T, dt), dt += 2;
            break;
          case "ANMF":
            var At, wt;
            (wt = S.frames[j] = {}).offset_x = 2 * y(T, tt), tt += 3, wt.offset_y = 2 * y(T, tt), tt += 3, wt.width = 1 + y(T, tt), tt += 3, wt.height = 1 + y(T, tt), tt += 3, wt.duration = y(T, tt), tt += 3, At = T[tt++], wt.dispose = 1 & At, wt.blend = At >> 1 & 1;
        }
        ot != "ANMF" && (tt += nt);
      }
      return S;
    }
  })(L, 0);
  z.response = L, z.rgbaoutput = !0, z.dataurl = !1;
  var H = z.header ? z.header : null, D = z.frames ? z.frames : null;
  if (H) {
    H.loop_counter = H.loop_count, g = [H.canvas_height], F = [H.canvas_width];
    for (var rt = 0; rt < D.length && D[rt].blend != 0; rt++) ;
  }
  var mt = D[0], ht = M.WebPDecodeRGBA(L, mt.src_off, mt.src_size, F, g);
  mt.rgba = ht, mt.imgwidth = F[0], mt.imgheight = g[0];
  for (var X = 0; X < F[0] * g[0] * 4; X++) P[X] = ht[X];
  return this.width = F, this.height = g, this.data = P, this;
}
/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */
function o2() {
  var n, t = this.internal.__metadata__.metadata, e = unescape(encodeURIComponent(t));
  n = this.internal.__metadata__.rawXml ? e : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
}
function l2() {
  this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
}
(function(n) {
  var t, e, i, s, a, c, l, h, d, p = function(_) {
    return _ = _ || {}, this.isStrokeTransparent = _.isStrokeTransparent || !1, this.strokeOpacity = _.strokeOpacity || 1, this.strokeStyle = _.strokeStyle || "#000000", this.fillStyle = _.fillStyle || "#000000", this.isFillTransparent = _.isFillTransparent || !1, this.fillOpacity = _.fillOpacity || 1, this.font = _.font || "10px sans-serif", this.textBaseline = _.textBaseline || "alphabetic", this.textAlign = _.textAlign || "left", this.lineWidth = _.lineWidth || 1, this.lineJoin = _.lineJoin || "miter", this.lineCap = _.lineCap || "butt", this.path = _.path || [], this.transform = _.transform !== void 0 ? _.transform.clone() : new h(), this.globalCompositeOperation = _.globalCompositeOperation || "normal", this.globalAlpha = _.globalAlpha || 1, this.clip_path = _.clip_path || [], this.currentPoint = _.currentPoint || new c(), this.miterLimit = _.miterLimit || 10, this.lastPoint = _.lastPoint || new c(), this.lineDashOffset = _.lineDashOffset || 0, this.lineDash = _.lineDash || [], this.margin = _.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = _.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof _.ignoreClearRect != "boolean" || _.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new y(this), t = this.internal.f2, e = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, s = this.internal.getHorizontalCoordinate, a = this.internal.getVerticalCoordinate, c = this.internal.Point, l = this.internal.Rectangle, h = this.internal.Matrix, d = new p();
  }]);
  var y = function(_) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var B = _;
    Object.defineProperty(this, "pdf", { get: function() {
      return B;
    } });
    var R = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return R;
    }, set: function(I) {
      R = !!I;
    } });
    var G = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return G;
    }, set: function(I) {
      G = !!I;
    } });
    var J = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return J;
    }, set: function(I) {
      isNaN(I) || (J = I);
    } });
    var Z = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return Z;
    }, set: function(I) {
      isNaN(I) || (Z = I);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return d.margin;
    }, set: function(I) {
      var Lt;
      typeof I == "number" ? Lt = [I, I, I, I] : ((Lt = new Array(4))[0] = I[0], Lt[1] = I.length >= 2 ? I[1] : Lt[0], Lt[2] = I.length >= 3 ? I[2] : Lt[0], Lt[3] = I.length >= 4 ? I[3] : Lt[1]), d.margin = Lt;
    } });
    var at = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return at;
    }, set: function(I) {
      at = I;
    } });
    var st = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return st;
    }, set: function(I) {
      st = I;
    } });
    var gt = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return gt;
    }, set: function(I) {
      gt = I;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return d;
    }, set: function(I) {
      I instanceof p && (d = I);
    } }), Object.defineProperty(this, "path", { get: function() {
      return d.path;
    }, set: function(I) {
      d.path = I;
    } });
    var _t = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return _t;
    }, set: function(I) {
      _t = I;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(I) {
      var Lt;
      Lt = N(I), this.ctx.fillStyle = Lt.style, this.ctx.isFillTransparent = Lt.a === 0, this.ctx.fillOpacity = Lt.a, this.pdf.setFillColor(Lt.r, Lt.g, Lt.b, { a: Lt.a }), this.pdf.setTextColor(Lt.r, Lt.g, Lt.b, { a: Lt.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(I) {
      var Lt = N(I);
      this.ctx.strokeStyle = Lt.style, this.ctx.isStrokeTransparent = Lt.a === 0, this.ctx.strokeOpacity = Lt.a, Lt.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Lt.a, this.pdf.setDrawColor(Lt.r, Lt.g, Lt.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(I) {
      ["butt", "round", "square"].indexOf(I) !== -1 && (this.ctx.lineCap = I, this.pdf.setLineCap(I));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(I) {
      isNaN(I) || (this.ctx.lineWidth = I, this.pdf.setLineWidth(I));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(I) {
      ["bevel", "round", "miter"].indexOf(I) !== -1 && (this.ctx.lineJoin = I, this.pdf.setLineJoin(I));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(I) {
      isNaN(I) || (this.ctx.miterLimit = I, this.pdf.setMiterLimit(I));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(I) {
      this.ctx.textBaseline = I;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(I) {
      ["right", "end", "center", "left", "start"].indexOf(I) !== -1 && (this.ctx.textAlign = I);
    } });
    var kt = null, St = null, Dt = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Dt;
    }, set: function(I) {
      kt = null, St = null, Dt = I;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(I) {
      var Lt;
      if (this.ctx.font = I, (Lt = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(I)) !== null) {
        var ae = Lt[1];
        Lt[2];
        var Ht = Lt[3], yt = Lt[4];
        Lt[5];
        var Wt = Lt[6], It = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(yt)[2];
        yt = Math.floor(It === "px" ? parseFloat(yt) * this.pdf.internal.scaleFactor : It === "em" ? parseFloat(yt) * this.pdf.getFontSize() : parseFloat(yt) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(yt);
        var zt = (function(Rt) {
          var ze, ge, se = [], oe = Rt.trim();
          if (oe === "") return To;
          if (oe in Du) return [Du[oe]];
          for (; oe !== ""; ) {
            switch (ge = null, ze = (oe = Uu(oe)).charAt(0)) {
              case '"':
              case "'":
                ge = e2(oe.substring(1), ze);
                break;
              default:
                ge = n2(oe);
            }
            if (ge === null || (se.push(ge[0]), (oe = Uu(ge[1])) !== "" && oe.charAt(0) !== ",")) return To;
            oe = oe.replace(/^,/, "");
          }
          return se;
        })(Wt);
        if (this.fontFaces) {
          var qt = (function(Rt, ze) {
            var ge = Rt.getFontList(), se = JSON.stringify(ge);
            if (kt === null || St !== se) {
              var oe = (function(Oe) {
                var Ut = [];
                return Object.keys(Oe).forEach(function(Se) {
                  Oe[Se].forEach(function(Yt) {
                    var Qt = null;
                    switch (Yt) {
                      case "bold":
                        Qt = { family: Se, weight: "bold" };
                        break;
                      case "italic":
                        Qt = { family: Se, style: "italic" };
                        break;
                      case "bolditalic":
                        Qt = { family: Se, weight: "bold", style: "italic" };
                        break;
                      case "":
                      case "normal":
                        Qt = { family: Se };
                    }
                    Qt !== null && (Qt.ref = { name: Se, style: Yt }, Ut.push(Qt));
                  });
                }), Ut;
              })(ge);
              kt = (function(Oe) {
                for (var Ut = {}, Se = 0; Se < Oe.length; ++Se) {
                  var Yt = Mo(Oe[Se]), Qt = Yt.family, je = Yt.stretch, le = Yt.style, Gt = Yt.weight;
                  Ut[Qt] = Ut[Qt] || {}, Ut[Qt][je] = Ut[Qt][je] || {}, Ut[Qt][je][le] = Ut[Qt][je][le] || {}, Ut[Qt][je][le][Gt] = Yt;
                }
                return Ut;
              })(oe.concat(ze)), St = se;
            }
            return kt;
          })(this.pdf, this.fontFaces), ve = zt.map(function(Rt) {
            return { family: Rt, stretch: "normal", weight: Ht, style: ae };
          }), ue = (function(Rt, ze, ge) {
            for (var se = (ge = ge || {}).defaultFontFamily || "times", oe = Object.assign({}, t2, ge.genericFontFamilies || {}), Oe = null, Ut = null, Se = 0; Se < ze.length; ++Se) if (oe[(Oe = Mo(ze[Se])).family] && (Oe.family = oe[Oe.family]), Rt.hasOwnProperty(Oe.family)) {
              Ut = Rt[Oe.family];
              break;
            }
            if (!(Ut = Ut || Rt[se])) throw new Error("Could not find a font-family for the rule '" + qu(Oe) + "' and default family '" + se + "'.");
            if (Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              var je = Zo[Yt], le = je <= Zo.normal ? -1 : 1, Gt = Ru(Qt, zh, je, le);
              if (!Gt) throw new Error("Could not find a matching font-stretch value for " + Yt);
              return Gt;
            })(Oe.stretch, Ut), Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              for (var je = Uh[Yt], le = 0; le < je.length; ++le) if (Qt[je[le]]) return Qt[je[le]];
              throw new Error("Could not find a matching font-style for " + Yt);
            })(Oe.style, Ut), !(Ut = (function(Yt, Qt) {
              if (Qt[Yt]) return Qt[Yt];
              if (Yt === 400 && Qt[500]) return Qt[500];
              if (Yt === 500 && Qt[400]) return Qt[400];
              var je = Q1[Yt], le = Ru(Qt, Hh, je, Yt < 400 ? -1 : 1);
              if (!le) throw new Error("Could not find a matching font-weight for value " + Yt);
              return le;
            })(Oe.weight, Ut))) throw new Error("Failed to resolve a font for the rule '" + qu(Oe) + "'.");
            return Ut;
          })(qt, ve);
          this.pdf.setFont(ue.ref.name, ue.ref.style);
        } else {
          var Zt = "";
          (Ht === "bold" || parseInt(Ht, 10) >= 700 || ae === "bold") && (Zt = "bold"), ae === "italic" && (Zt += "italic"), Zt.length === 0 && (Zt = "normal");
          for (var fe = "", he = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, Bt = 0; Bt < zt.length; Bt++) {
            if (this.pdf.internal.getFont(zt[Bt], Zt, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              fe = zt[Bt];
              break;
            }
            if (Zt === "bolditalic" && this.pdf.internal.getFont(zt[Bt], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) fe = zt[Bt], Zt = "bold";
            else if (this.pdf.internal.getFont(zt[Bt], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              fe = zt[Bt], Zt = "normal";
              break;
            }
          }
          if (fe === "") {
            for (var ne = 0; ne < zt.length; ne++) if (he[zt[ne]]) {
              fe = he[zt[ne]];
              break;
            }
          }
          fe = fe === "" ? "Times" : fe, this.pdf.setFont(fe, Zt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(I) {
      this.ctx.globalCompositeOperation = I;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(I) {
      this.ctx.globalAlpha = I;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(I) {
      this.ctx.lineDashOffset = I, wt.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(I) {
      this.ctx.lineDash = I, wt.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(I) {
      this.ctx.ignoreClearRect = !!I;
    } });
  };
  y.prototype.setLineDash = function(_) {
    this.lineDash = _;
  }, y.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, y.prototype.fill = function() {
    D.call(this, "fill", !1);
  }, y.prototype.stroke = function() {
    D.call(this, "stroke", !1);
  }, y.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, y.prototype.moveTo = function(_, B) {
    if (isNaN(_) || isNaN(B)) throw Le.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var R = this.ctx.transform.applyToPoint(new c(_, B));
    this.path.push({ type: "mt", x: R.x, y: R.y }), this.ctx.lastPoint = new c(_, B);
  }, y.prototype.closePath = function() {
    var _ = new c(0, 0), B = 0;
    for (B = this.path.length - 1; B !== -1; B--) if (this.path[B].type === "begin" && xe(this.path[B + 1]) === "object" && typeof this.path[B + 1].x == "number") {
      _ = new c(this.path[B + 1].x, this.path[B + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new c(_.x, _.y);
  }, y.prototype.lineTo = function(_, B) {
    if (isNaN(_) || isNaN(B)) throw Le.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var R = this.ctx.transform.applyToPoint(new c(_, B));
    this.path.push({ type: "lt", x: R.x, y: R.y }), this.ctx.lastPoint = new c(R.x, R.y);
  }, y.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), D.call(this, null, !0);
  }, y.prototype.quadraticCurveTo = function(_, B, R, G) {
    if (isNaN(R) || isNaN(G) || isNaN(_) || isNaN(B)) throw Le.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var J = this.ctx.transform.applyToPoint(new c(R, G)), Z = this.ctx.transform.applyToPoint(new c(_, B));
    this.path.push({ type: "qct", x1: Z.x, y1: Z.y, x: J.x, y: J.y }), this.ctx.lastPoint = new c(J.x, J.y);
  }, y.prototype.bezierCurveTo = function(_, B, R, G, J, Z) {
    if (isNaN(J) || isNaN(Z) || isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G)) throw Le.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var at = this.ctx.transform.applyToPoint(new c(J, Z)), st = this.ctx.transform.applyToPoint(new c(_, B)), gt = this.ctx.transform.applyToPoint(new c(R, G));
    this.path.push({ type: "bct", x1: st.x, y1: st.y, x2: gt.x, y2: gt.y, x: at.x, y: at.y }), this.ctx.lastPoint = new c(at.x, at.y);
  }, y.prototype.arc = function(_, B, R, G, J, Z) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G) || isNaN(J)) throw Le.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (Z = !!Z, !this.ctx.transform.isIdentity) {
      var at = this.ctx.transform.applyToPoint(new c(_, B));
      _ = at.x, B = at.y;
      var st = this.ctx.transform.applyToPoint(new c(0, R)), gt = this.ctx.transform.applyToPoint(new c(0, 0));
      R = Math.sqrt(Math.pow(st.x - gt.x, 2) + Math.pow(st.y - gt.y, 2));
    }
    Math.abs(J - G) >= 2 * Math.PI && (G = 0, J = 2 * Math.PI), this.path.push({ type: "arc", x: _, y: B, radius: R, startAngle: G, endAngle: J, counterclockwise: Z });
  }, y.prototype.arcTo = function(_, B, R, G, J) {
    throw new Error("arcTo not implemented.");
  }, y.prototype.rect = function(_, B, R, G) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G)) throw Le.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(_, B), this.lineTo(_ + R, B), this.lineTo(_ + R, B + G), this.lineTo(_, B + G), this.lineTo(_, B), this.lineTo(_ + R, B), this.lineTo(_, B);
  }, y.prototype.fillRect = function(_, B, R, G) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G)) throw Le.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!g.call(this)) {
      var J = {};
      this.lineCap !== "butt" && (J.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (J.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(_, B, R, G), this.fill(), J.hasOwnProperty("lineCap") && (this.lineCap = J.lineCap), J.hasOwnProperty("lineJoin") && (this.lineJoin = J.lineJoin);
    }
  }, y.prototype.strokeRect = function(_, B, R, G) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G)) throw Le.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    F.call(this) || (this.beginPath(), this.rect(_, B, R, G), this.stroke());
  }, y.prototype.clearRect = function(_, B, R, G) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G)) throw Le.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(_, B, R, G));
  }, y.prototype.save = function(_) {
    _ = typeof _ != "boolean" || _;
    for (var B = this.pdf.internal.getCurrentPageInfo().pageNumber, R = 0; R < this.pdf.internal.getNumberOfPages(); R++) this.pdf.setPage(R + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(B), _) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var G = new p(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = G;
    }
  }, y.prototype.restore = function(_) {
    _ = typeof _ != "boolean" || _;
    for (var B = this.pdf.internal.getCurrentPageInfo().pageNumber, R = 0; R < this.pdf.internal.getNumberOfPages(); R++) this.pdf.setPage(R + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(B), _ && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, y.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var N = function(_) {
    var B, R, G, J;
    if (_.isCanvasGradient === !0 && (_ = _.getColor()), !_) return { r: 0, g: 0, b: 0, a: 0, style: _ };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(_)) B = 0, R = 0, G = 0, J = 0;
    else {
      var Z = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(_);
      if (Z !== null) B = parseInt(Z[1]), R = parseInt(Z[2]), G = parseInt(Z[3]), J = 1;
      else if ((Z = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(_)) !== null) B = parseInt(Z[1]), R = parseInt(Z[2]), G = parseInt(Z[3]), J = parseFloat(Z[4]);
      else {
        if (J = 1, typeof _ == "string" && _.charAt(0) !== "#") {
          var at = new jh(_);
          _ = at.ok ? at.toHex() : "#000000";
        }
        _.length === 4 ? (B = _.substring(1, 2), B += B, R = _.substring(2, 3), R += R, G = _.substring(3, 4), G += G) : (B = _.substring(1, 3), R = _.substring(3, 5), G = _.substring(5, 7)), B = parseInt(B, 16), R = parseInt(R, 16), G = parseInt(G, 16);
      }
    }
    return { r: B, g: R, b: G, a: J, style: _ };
  }, g = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, F = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  y.prototype.fillText = function(_, B, R, G) {
    if (isNaN(B) || isNaN(R) || typeof _ != "string") throw Le.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (G = isNaN(G) ? void 0 : G, !g.call(this)) {
      var J = nt(this.ctx.transform.rotation), Z = this.ctx.transform.scaleX;
      j.call(this, { text: _, x: B, y: R, scale: Z, angle: J, align: this.textAlign, maxWidth: G });
    }
  }, y.prototype.strokeText = function(_, B, R, G) {
    if (isNaN(B) || isNaN(R) || typeof _ != "string") throw Le.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!F.call(this)) {
      G = isNaN(G) ? void 0 : G;
      var J = nt(this.ctx.transform.rotation), Z = this.ctx.transform.scaleX;
      j.call(this, { text: _, x: B, y: R, scale: Z, renderingMode: "stroke", angle: J, align: this.textAlign, maxWidth: G });
    }
  }, y.prototype.measureText = function(_) {
    if (typeof _ != "string") throw Le.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var B = this.pdf, R = this.pdf.internal.scaleFactor, G = B.internal.getFontSize(), J = B.getStringUnitWidth(_) * G / B.internal.scaleFactor;
    return new function(Z) {
      var at = (Z = Z || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return at;
      } }), this;
    }({ width: J *= Math.round(96 * R / 72 * 1e4) / 1e4 });
  }, y.prototype.scale = function(_, B) {
    if (isNaN(_) || isNaN(B)) throw Le.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var R = new h(_, 0, 0, B, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(R);
  }, y.prototype.rotate = function(_) {
    if (isNaN(_)) throw Le.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var B = new h(Math.cos(_), Math.sin(_), -Math.sin(_), Math.cos(_), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(B);
  }, y.prototype.translate = function(_, B) {
    if (isNaN(_) || isNaN(B)) throw Le.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var R = new h(1, 0, 0, 1, _, B);
    this.ctx.transform = this.ctx.transform.multiply(R);
  }, y.prototype.transform = function(_, B, R, G, J, Z) {
    if (isNaN(_) || isNaN(B) || isNaN(R) || isNaN(G) || isNaN(J) || isNaN(Z)) throw Le.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var at = new h(_, B, R, G, J, Z);
    this.ctx.transform = this.ctx.transform.multiply(at);
  }, y.prototype.setTransform = function(_, B, R, G, J, Z) {
    _ = isNaN(_) ? 1 : _, B = isNaN(B) ? 0 : B, R = isNaN(R) ? 0 : R, G = isNaN(G) ? 1 : G, J = isNaN(J) ? 0 : J, Z = isNaN(Z) ? 0 : Z, this.ctx.transform = new h(_, B, R, G, J, Z);
  };
  var P = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  y.prototype.drawImage = function(_, B, R, G, J, Z, at, st, gt) {
    var _t = this.pdf.getImageProperties(_), kt = 1, St = 1, Dt = 1, I = 1;
    G !== void 0 && st !== void 0 && (Dt = st / G, I = gt / J, kt = _t.width / G * st / G, St = _t.height / J * gt / J), Z === void 0 && (Z = B, at = R, B = 0, R = 0), G !== void 0 && st === void 0 && (st = G, gt = J), G === void 0 && st === void 0 && (st = _t.width, gt = _t.height);
    var Lt = this.ctx.transform.decompose(), ae = nt(Lt.rotate.shx), Ht = new h(), yt = (Ht = (Ht = (Ht = Ht.multiply(Lt.translate)).multiply(Lt.skew)).multiply(Lt.scale)).applyToRectangle(new l(Z - B * Dt, at - R * I, G * kt, J * St));
    if (this.autoPaging) {
      for (var Wt, It = M.call(this, yt), zt = [], qt = 0; qt < It.length; qt += 1) zt.indexOf(It[qt]) === -1 && zt.push(It[qt]);
      H(zt);
      for (var ve = zt[0], ue = zt[zt.length - 1], Zt = ve; Zt < ue + 1; Zt++) {
        this.pdf.setPage(Zt);
        var fe = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], he = Zt === 1 ? this.posY + this.margin[0] : this.margin[0], Bt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ne = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Rt = Zt === 1 ? 0 : Bt + (Zt - 2) * ne;
        if (this.ctx.clip_path.length !== 0) {
          var ze = this.path;
          Wt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(Wt, this.posX + this.margin[3], -Rt + he + this.ctx.prevPageLastElemOffset), rt.call(this, "fill", !0), this.path = ze;
        }
        var ge = JSON.parse(JSON.stringify(yt));
        ge = z([ge], this.posX + this.margin[3], -Rt + he + this.ctx.prevPageLastElemOffset)[0];
        var se = (Zt > ve || Zt < ue) && P.call(this);
        se && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], fe, ne, null).clip().discardPath()), this.pdf.addImage(_, "JPEG", ge.x, ge.y, ge.w, ge.h, null, null, ae), se && this.pdf.restoreGraphicsState();
      }
    } else this.pdf.addImage(_, "JPEG", yt.x, yt.y, yt.w, yt.h, null, null, ae);
  };
  var M = function(_, B, R) {
    var G = [];
    B = B || this.pdf.internal.pageSize.width, R = R || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var J = this.posY + this.ctx.prevPageLastElemOffset;
    switch (_.type) {
      default:
      case "mt":
      case "lt":
        G.push(Math.floor((_.y + J) / R) + 1);
        break;
      case "arc":
        G.push(Math.floor((_.y + J - _.radius) / R) + 1), G.push(Math.floor((_.y + J + _.radius) / R) + 1);
        break;
      case "qct":
        var Z = dt(this.ctx.lastPoint.x, this.ctx.lastPoint.y, _.x1, _.y1, _.x, _.y);
        G.push(Math.floor((Z.y + J) / R) + 1), G.push(Math.floor((Z.y + Z.h + J) / R) + 1);
        break;
      case "bct":
        var at = At(this.ctx.lastPoint.x, this.ctx.lastPoint.y, _.x1, _.y1, _.x2, _.y2, _.x, _.y);
        G.push(Math.floor((at.y + J) / R) + 1), G.push(Math.floor((at.y + at.h + J) / R) + 1);
        break;
      case "rect":
        G.push(Math.floor((_.y + J) / R) + 1), G.push(Math.floor((_.y + _.h + J) / R) + 1);
    }
    for (var st = 0; st < G.length; st += 1) for (; this.pdf.internal.getNumberOfPages() < G[st]; ) L.call(this);
    return G;
  }, L = function() {
    var _ = this.fillStyle, B = this.strokeStyle, R = this.font, G = this.lineCap, J = this.lineWidth, Z = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = _, this.strokeStyle = B, this.font = R, this.lineCap = G, this.lineWidth = J, this.lineJoin = Z;
  }, z = function(_, B, R) {
    for (var G = 0; G < _.length; G++) switch (_[G].type) {
      case "bct":
        _[G].x2 += B, _[G].y2 += R;
      case "qct":
        _[G].x1 += B, _[G].y1 += R;
      default:
        _[G].x += B, _[G].y += R;
    }
    return _;
  }, H = function(_) {
    return _.sort(function(B, R) {
      return B - R;
    });
  }, D = function(_, B) {
    var R = this.fillStyle, G = this.strokeStyle, J = this.lineCap, Z = this.lineWidth, at = Math.abs(Z * this.ctx.transform.scaleX), st = this.lineJoin;
    if (this.autoPaging) {
      for (var gt, _t, kt = JSON.parse(JSON.stringify(this.path)), St = JSON.parse(JSON.stringify(this.path)), Dt = [], I = 0; I < St.length; I++) if (St[I].x !== void 0) for (var Lt = M.call(this, St[I]), ae = 0; ae < Lt.length; ae += 1) Dt.indexOf(Lt[ae]) === -1 && Dt.push(Lt[ae]);
      for (var Ht = 0; Ht < Dt.length; Ht++) for (; this.pdf.internal.getNumberOfPages() < Dt[Ht]; ) L.call(this);
      H(Dt);
      for (var yt = Dt[0], Wt = Dt[Dt.length - 1], It = yt; It < Wt + 1; It++) {
        this.pdf.setPage(It), this.fillStyle = R, this.strokeStyle = G, this.lineCap = J, this.lineWidth = at, this.lineJoin = st;
        var zt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], qt = It === 1 ? this.posY + this.margin[0] : this.margin[0], ve = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], ue = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Zt = It === 1 ? 0 : ve + (It - 2) * ue;
        if (this.ctx.clip_path.length !== 0) {
          var fe = this.path;
          gt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(gt, this.posX + this.margin[3], -Zt + qt + this.ctx.prevPageLastElemOffset), rt.call(this, _, !0), this.path = fe;
        }
        if (_t = JSON.parse(JSON.stringify(kt)), this.path = z(_t, this.posX + this.margin[3], -Zt + qt + this.ctx.prevPageLastElemOffset), B === !1 || It === 0) {
          var he = (It > yt || It < Wt) && P.call(this);
          he && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], zt, ue, null).clip().discardPath()), rt.call(this, _, B), he && this.pdf.restoreGraphicsState();
        }
        this.lineWidth = Z;
      }
      this.path = kt;
    } else this.lineWidth = at, rt.call(this, _, B), this.lineWidth = Z;
  }, rt = function(_, B) {
    if ((_ !== "stroke" || B || !F.call(this)) && (_ === "stroke" || B || !g.call(this))) {
      for (var R, G, J = [], Z = this.path, at = 0; at < Z.length; at++) {
        var st = Z[at];
        switch (st.type) {
          case "begin":
            J.push({ begin: !0 });
            break;
          case "close":
            J.push({ close: !0 });
            break;
          case "mt":
            J.push({ start: st, deltas: [], abs: [] });
            break;
          case "lt":
            var gt = J.length;
            if (Z[at - 1] && !isNaN(Z[at - 1].x) && (R = [st.x - Z[at - 1].x, st.y - Z[at - 1].y], gt > 0)) {
              for (; gt >= 0; gt--) if (J[gt - 1].close !== !0 && J[gt - 1].begin !== !0) {
                J[gt - 1].deltas.push(R), J[gt - 1].abs.push(st);
                break;
              }
            }
            break;
          case "bct":
            R = [st.x1 - Z[at - 1].x, st.y1 - Z[at - 1].y, st.x2 - Z[at - 1].x, st.y2 - Z[at - 1].y, st.x - Z[at - 1].x, st.y - Z[at - 1].y], J[J.length - 1].deltas.push(R);
            break;
          case "qct":
            var _t = Z[at - 1].x + 2 / 3 * (st.x1 - Z[at - 1].x), kt = Z[at - 1].y + 2 / 3 * (st.y1 - Z[at - 1].y), St = st.x + 2 / 3 * (st.x1 - st.x), Dt = st.y + 2 / 3 * (st.y1 - st.y), I = st.x, Lt = st.y;
            R = [_t - Z[at - 1].x, kt - Z[at - 1].y, St - Z[at - 1].x, Dt - Z[at - 1].y, I - Z[at - 1].x, Lt - Z[at - 1].y], J[J.length - 1].deltas.push(R);
            break;
          case "arc":
            J.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(J[J.length - 1].abs) && J[J.length - 1].abs.push(st);
        }
      }
      G = B ? null : _ === "stroke" ? "stroke" : "fill";
      for (var ae = !1, Ht = 0; Ht < J.length; Ht++) if (J[Ht].arc) for (var yt = J[Ht].abs, Wt = 0; Wt < yt.length; Wt++) {
        var It = yt[Wt];
        It.type === "arc" ? X.call(this, It.x, It.y, It.radius, It.startAngle, It.endAngle, It.counterclockwise, void 0, B, !ae) : W.call(this, It.x, It.y), ae = !0;
      }
      else if (J[Ht].close === !0) this.pdf.internal.out("h"), ae = !1;
      else if (J[Ht].begin !== !0) {
        var zt = J[Ht].start.x, qt = J[Ht].start.y;
        U.call(this, J[Ht].deltas, zt, qt), ae = !0;
      }
      G && T.call(this, G), B && tt.call(this);
    }
  }, mt = function(_) {
    var B = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, R = B * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return _ - R;
      case "top":
        return _ + B - R;
      case "hanging":
        return _ + B - 2 * R;
      case "middle":
        return _ + B / 2 - R;
      default:
        return _;
    }
  }, ht = function(_) {
    return _ + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  y.prototype.createLinearGradient = function() {
    var _ = function() {
    };
    return _.colorStops = [], _.addColorStop = function(B, R) {
      this.colorStops.push([B, R]);
    }, _.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, _.isCanvasGradient = !0, _;
  }, y.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, y.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var X = function(_, B, R, G, J, Z, at, st, gt) {
    for (var _t = ot.call(this, R, G, J, Z), kt = 0; kt < _t.length; kt++) {
      var St = _t[kt];
      kt === 0 && (gt ? S.call(this, St.x1 + _, St.y1 + B) : W.call(this, St.x1 + _, St.y1 + B)), it.call(this, _, B, St.x2, St.y2, St.x3, St.y3, St.x4, St.y4);
    }
    st ? tt.call(this) : T.call(this, at);
  }, T = function(_) {
    switch (_) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, tt = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, S = function(_, B) {
    this.pdf.internal.out(e(_) + " " + i(B) + " m");
  }, j = function(_) {
    var B;
    switch (_.align) {
      case "right":
      case "end":
        B = "right";
        break;
      case "center":
        B = "center";
        break;
      default:
        B = "left";
    }
    var R, G, J, Z = this.pdf.getTextDimensions(_.text), at = mt.call(this, _.y), st = ht.call(this, at) - Z.h, gt = this.ctx.transform.applyToPoint(new c(_.x, at));
    if (this.autoPaging) {
      var _t = this.ctx.transform.decompose(), kt = new h();
      kt = (kt = (kt = kt.multiply(_t.translate)).multiply(_t.skew)).multiply(_t.scale);
      for (var St = this.ctx.transform.applyToRectangle(new l(_.x, at, Z.w, Z.h)), Dt = kt.applyToRectangle(new l(_.x, st, Z.w, Z.h)), I = M.call(this, Dt), Lt = [], ae = 0; ae < I.length; ae += 1) Lt.indexOf(I[ae]) === -1 && Lt.push(I[ae]);
      H(Lt);
      for (var Ht = Lt[0], yt = Lt[Lt.length - 1], Wt = Ht; Wt < yt + 1; Wt++) {
        this.pdf.setPage(Wt);
        var It = Wt === 1 ? this.posY + this.margin[0] : this.margin[0], zt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], qt = this.pdf.internal.pageSize.height - this.margin[2], ve = qt - this.margin[0], ue = this.pdf.internal.pageSize.width - this.margin[1], Zt = ue - this.margin[3], fe = Wt === 1 ? 0 : zt + (Wt - 2) * ve;
        if (this.ctx.clip_path.length !== 0) {
          var he = this.path;
          R = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = z(R, this.posX + this.margin[3], -1 * fe + It), rt.call(this, "fill", !0), this.path = he;
        }
        var Bt = z([JSON.parse(JSON.stringify(Dt))], this.posX + this.margin[3], -fe + It + this.ctx.prevPageLastElemOffset)[0];
        _.scale >= 0.01 && (G = this.pdf.internal.getFontSize(), this.pdf.setFontSize(G * _.scale), J = this.lineWidth, this.lineWidth = J * _.scale);
        var ne = this.autoPaging !== "text";
        if (ne || Bt.y + Bt.h <= qt) {
          if (ne || Bt.y >= It && Bt.x <= ue) {
            var Rt = ne ? _.text : this.pdf.splitTextToSize(_.text, _.maxWidth || ue - Bt.x)[0], ze = z([JSON.parse(JSON.stringify(St))], this.posX + this.margin[3], -fe + It + this.ctx.prevPageLastElemOffset)[0], ge = ne && (Wt > Ht || Wt < yt) && P.call(this);
            ge && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Zt, ve, null).clip().discardPath()), this.pdf.text(Rt, ze.x, ze.y, { angle: _.angle, align: B, renderingMode: _.renderingMode }), ge && this.pdf.restoreGraphicsState();
          }
        } else Bt.y < qt && (this.ctx.prevPageLastElemOffset += qt - Bt.y);
        _.scale >= 0.01 && (this.pdf.setFontSize(G), this.lineWidth = J);
      }
    } else _.scale >= 0.01 && (G = this.pdf.internal.getFontSize(), this.pdf.setFontSize(G * _.scale), J = this.lineWidth, this.lineWidth = J * _.scale), this.pdf.text(_.text, gt.x + this.posX, gt.y + this.posY, { angle: _.angle, align: B, renderingMode: _.renderingMode, maxWidth: _.maxWidth }), _.scale >= 0.01 && (this.pdf.setFontSize(G), this.lineWidth = J);
  }, W = function(_, B, R, G) {
    R = R || 0, G = G || 0, this.pdf.internal.out(e(_ + R) + " " + i(B + G) + " l");
  }, U = function(_, B, R) {
    return this.pdf.lines(_, B, R, null, null);
  }, it = function(_, B, R, G, J, Z, at, st) {
    this.pdf.internal.out([t(s(R + _)), t(a(G + B)), t(s(J + _)), t(a(Z + B)), t(s(at + _)), t(a(st + B)), "c"].join(" "));
  }, ot = function(_, B, R, G) {
    for (var J = 2 * Math.PI, Z = Math.PI / 2; B > R; ) B -= J;
    var at = Math.abs(R - B);
    at < J && G && (at = J - at);
    for (var st = [], gt = G ? -1 : 1, _t = B; at > 1e-5; ) {
      var kt = _t + gt * Math.min(at, Z);
      st.push(ft.call(this, _, _t, kt)), at -= Math.abs(kt - _t), _t = kt;
    }
    return st;
  }, ft = function(_, B, R) {
    var G = (R - B) / 2, J = _ * Math.cos(G), Z = _ * Math.sin(G), at = J, st = -Z, gt = at * at + st * st, _t = gt + at * J + st * Z, kt = 4 / 3 * (Math.sqrt(2 * gt * _t) - _t) / (at * Z - st * J), St = at - kt * st, Dt = st + kt * at, I = St, Lt = -Dt, ae = G + B, Ht = Math.cos(ae), yt = Math.sin(ae);
    return { x1: _ * Math.cos(B), y1: _ * Math.sin(B), x2: St * Ht - Dt * yt, y2: St * yt + Dt * Ht, x3: I * Ht - Lt * yt, y3: I * yt + Lt * Ht, x4: _ * Math.cos(R), y4: _ * Math.sin(R) };
  }, nt = function(_) {
    return 180 * _ / Math.PI;
  }, dt = function(_, B, R, G, J, Z) {
    var at = _ + 0.5 * (R - _), st = B + 0.5 * (G - B), gt = J + 0.5 * (R - J), _t = Z + 0.5 * (G - Z), kt = Math.min(_, J, at, gt), St = Math.max(_, J, at, gt), Dt = Math.min(B, Z, st, _t), I = Math.max(B, Z, st, _t);
    return new l(kt, Dt, St - kt, I - Dt);
  }, At = function(_, B, R, G, J, Z, at, st) {
    var gt, _t, kt, St, Dt, I, Lt, ae, Ht, yt, Wt, It, zt, qt, ve = R - _, ue = G - B, Zt = J - R, fe = Z - G, he = at - J, Bt = st - Z;
    for (_t = 0; _t < 41; _t++) Ht = (Lt = (kt = _ + (gt = _t / 40) * ve) + gt * ((Dt = R + gt * Zt) - kt)) + gt * (Dt + gt * (J + gt * he - Dt) - Lt), yt = (ae = (St = B + gt * ue) + gt * ((I = G + gt * fe) - St)) + gt * (I + gt * (Z + gt * Bt - I) - ae), _t == 0 ? (Wt = Ht, It = yt, zt = Ht, qt = yt) : (Wt = Math.min(Wt, Ht), It = Math.min(It, yt), zt = Math.max(zt, Ht), qt = Math.max(qt, yt));
    return new l(Math.round(Wt), Math.round(It), Math.round(zt - Wt), Math.round(qt - It));
  }, wt = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var _, B, R = (_ = this.ctx.lineDash, B = this.ctx.lineDashOffset, JSON.stringify({ lineDash: _, lineDashOffset: B }));
      this.prevLineDash !== R && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = R);
    }
  };
})(Tt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(c) {
    var l, h, d, p, y, N, g, F, P, M;
    for (h = [], d = 0, p = (c += l = "\0\0\0\0".slice(c.length % 4 || 4)).length; p > d; d += 4) (y = (c.charCodeAt(d) << 24) + (c.charCodeAt(d + 1) << 16) + (c.charCodeAt(d + 2) << 8) + c.charCodeAt(d + 3)) !== 0 ? (N = (y = ((y = ((y = ((y = (y - (M = y % 85)) / 85) - (P = y % 85)) / 85) - (F = y % 85)) / 85) - (g = y % 85)) / 85) % 85, h.push(N + 33, g + 33, F + 33, P + 33, M + 33)) : h.push(122);
    return (function(L, z) {
      for (var H = z; H > 0; H--) L.pop();
    })(h, l.length), String.fromCharCode.apply(String, h) + "~>";
  }, e = function(c) {
    var l, h, d, p, y, N = String, g = "length", F = 255, P = "charCodeAt", M = "slice", L = "replace";
    for (c[M](-2), c = c[M](0, -2)[L](/\s/g, "")[L]("z", "!!!!!"), d = [], p = 0, y = (c += l = "uuuuu"[M](c[g] % 5 || 5))[g]; y > p; p += 5) h = 52200625 * (c[P](p) - 33) + 614125 * (c[P](p + 1) - 33) + 7225 * (c[P](p + 2) - 33) + 85 * (c[P](p + 3) - 33) + (c[P](p + 4) - 33), d.push(F & h >> 24, F & h >> 16, F & h >> 8, F & h);
    return (function(z, H) {
      for (var D = H; D > 0; D--) z.pop();
    })(d, l[g]), N.fromCharCode.apply(N, d);
  }, i = function(c) {
    return c.split("").map(function(l) {
      return ("0" + l.charCodeAt().toString(16)).slice(-2);
    }).join("") + ">";
  }, s = function(c) {
    var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((c = c.replace(/\s/g, "")).indexOf(">") !== -1 && (c = c.substr(0, c.indexOf(">"))), c.length % 2 && (c += "0"), l.test(c) === !1) return "";
    for (var h = "", d = 0; d < c.length; d += 2) h += String.fromCharCode("0x" + (c[d] + c[d + 1]));
    return h;
  }, a = function(c) {
    for (var l = new Uint8Array(c.length), h = c.length; h--; ) l[h] = c.charCodeAt(h);
    return (l = Go(l)).reduce(function(d, p) {
      return d + String.fromCharCode(p);
    }, "");
  };
  n.processDataByFilters = function(c, l) {
    var h = 0, d = c || "", p = [];
    for (typeof (l = l || []) == "string" && (l = [l]), h = 0; h < l.length; h += 1) switch (l[h]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        d = e(d), p.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        d = t(d), p.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        d = s(d), p.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        d = i(d), p.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        d = a(d), p.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + l[h] + '" is not implemented');
    }
    return { data: d, reverseChain: p.reverse().join(" ") };
  };
})(Tt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.loadFile = function(t, e, i) {
    return (function(s, a, c) {
      a = a !== !1, c = typeof c == "function" ? c : function() {
      };
      var l = void 0;
      try {
        l = (function(h, d, p) {
          var y = new XMLHttpRequest(), N = 0, g = function(F) {
            var P = F.length, M = [], L = String.fromCharCode;
            for (N = 0; N < P; N += 1) M.push(L(255 & F.charCodeAt(N)));
            return M.join("");
          };
          if (y.open("GET", h, !d), y.overrideMimeType("text/plain; charset=x-user-defined"), d === !1 && (y.onload = function() {
            y.status === 200 ? p(g(this.responseText)) : p(void 0);
          }), y.send(null), d && y.status === 200) return g(y.responseText);
        })(s, a, c);
      } catch {
      }
      return l;
    })(t, e, i);
  }, n.allowFsRead = void 0, n.loadImageFile = n.loadFile;
})(Tt.API), (function(n) {
  function t() {
    return ($t.html2canvas ? Promise.resolve($t.html2canvas) : import("./html2canvas.esm-Dmi1NfiH.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load html2canvas: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  function e() {
    return ($t.DOMPurify ? Promise.resolve($t.DOMPurify) : import("./purify.es-BVVticlc.js")).catch(function(l) {
      return Promise.reject(new Error("Could not load dompurify: " + l));
    }).then(function(l) {
      return l.default ? l.default : l;
    });
  }
  var i = function(l) {
    var h = xe(l);
    return h === "undefined" ? "undefined" : h === "string" || l instanceof String ? "string" : h === "number" || l instanceof Number ? "number" : h === "function" || l instanceof Function ? "function" : l && l.constructor === Array ? "array" : l && l.nodeType === 1 ? "element" : h === "object" ? "object" : "unknown";
  }, s = function(l, h) {
    var d = document.createElement(l);
    for (var p in h.className && (d.className = h.className), h.innerHTML && h.dompurify && (d.innerHTML = h.dompurify.sanitize(h.innerHTML)), h.style) d.style[p] = h.style[p];
    return d;
  }, a = function l(h, d) {
    for (var p = h.nodeType === 3 ? document.createTextNode(h.nodeValue) : h.cloneNode(!1), y = h.firstChild; y; y = y.nextSibling) d !== !0 && y.nodeType === 1 && y.nodeName === "SCRIPT" || p.appendChild(l(y, d));
    return h.nodeType === 1 && (h.nodeName === "CANVAS" ? (p.width = h.width, p.height = h.height, p.getContext("2d").drawImage(h, 0, 0)) : h.nodeName !== "TEXTAREA" && h.nodeName !== "SELECT" || (p.value = h.value), p.addEventListener("load", function() {
      p.scrollTop = h.scrollTop, p.scrollLeft = h.scrollLeft;
    }, !0)), p;
  }, c = function l(h) {
    var d = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))), p = l.convert(Promise.resolve(), d);
    return (p = p.setProgress(1, l, 1, [l])).set(h);
  };
  (c.prototype = Object.create(Promise.prototype)).constructor = c, c.convert = function(l, h) {
    return l.__proto__ = h || c.prototype, l;
  }, c.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, c.prototype.from = function(l, h) {
    return this.then(function() {
      switch (h = h || (function(d) {
        switch (i(d)) {
          case "string":
            return "string";
          case "element":
            return d.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      })(l), h) {
        case "string":
          return this.then(e).then(function(d) {
            return this.set({ src: s("div", { innerHTML: l, dompurify: d }) });
          });
        case "element":
          return this.set({ src: l });
        case "canvas":
          return this.set({ canvas: l });
        case "img":
          return this.set({ img: l });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, c.prototype.to = function(l) {
    switch (l) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, c.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var l = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, h = a(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      h.tagName === "BODY" && (l.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = s("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = s("div", { className: "html2pdf__container", style: l }), this.prop.container.appendChild(h), this.prop.container.firstChild.appendChild(s("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, c.prototype.toCanvas = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(t).then(function(h) {
      var d = Object.assign({}, this.opt.html2canvas);
      return delete d.onrendered, h(this.prop.container, d);
    }).then(function(h) {
      (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, c.prototype.toContext2d = function() {
    var l = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(l).then(t).then(function(h) {
      var d = this.opt.jsPDF, p = this.opt.fontFaces, y = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, N = Object.assign({ async: !0, allowTaint: !0, scale: y, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete N.onrendered, d.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, d.context2d.posX = this.opt.x, d.context2d.posY = this.opt.y, d.context2d.margin = this.opt.margin, d.context2d.fontFaces = p, p) for (var g = 0; g < p.length; ++g) {
        var F = p[g], P = F.src.find(function(M) {
          return M.format === "truetype";
        });
        P && d.addFont(P.url, F.ref.name, F.ref.style);
      }
      return N.windowHeight = N.windowHeight || 0, N.windowHeight = N.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : N.windowHeight, d.context2d.save(!0), h(this.prop.container, N);
    }).then(function(h) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(h), this.prop.canvas = h, document.body.removeChild(this.prop.overlay);
    });
  }, c.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var l = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = l;
    });
  }, c.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, c.prototype.output = function(l, h, d) {
    return (d = d || "pdf").toLowerCase() === "img" || d.toLowerCase() === "image" ? this.outputImg(l, h) : this.outputPdf(l, h);
  }, c.prototype.outputPdf = function(l, h) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(l, h);
    });
  }, c.prototype.outputImg = function(l) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (l) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + l + '" is not supported.';
      }
    });
  }, c.prototype.save = function(l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(l ? { filename: l } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, c.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, c.prototype.set = function(l) {
    if (i(l) !== "object") return this;
    var h = Object.keys(l || {}).map(function(d) {
      if (d in c.template.prop) return function() {
        this.prop[d] = l[d];
      };
      switch (d) {
        case "margin":
          return this.setMargin.bind(this, l.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = l.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, l.pageSize);
        default:
          return function() {
            this.opt[d] = l[d];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(h);
    });
  }, c.prototype.get = function(l, h) {
    return this.then(function() {
      var d = l in c.template.prop ? this.prop[l] : this.opt[l];
      return h ? h(d) : d;
    });
  }, c.prototype.setMargin = function(l) {
    return this.then(function() {
      switch (i(l)) {
        case "number":
          l = [l, l, l, l];
        case "array":
          if (l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = l;
    }).then(this.setPageSize);
  }, c.prototype.setPageSize = function(l) {
    function h(d, p) {
      return Math.floor(d * p / 72 * 96);
    }
    return this.then(function() {
      (l = l || Tt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (l.inner = { width: l.width - this.opt.margin[1] - this.opt.margin[3], height: l.height - this.opt.margin[0] - this.opt.margin[2] }, l.inner.px = { width: h(l.inner.width, l.k), height: h(l.inner.height, l.k) }, l.inner.ratio = l.inner.height / l.inner.width), this.prop.pageSize = l;
    });
  }, c.prototype.setProgress = function(l, h, d, p) {
    return l != null && (this.progress.val = l), h != null && (this.progress.state = h), d != null && (this.progress.n = d), p != null && (this.progress.stack = p), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, c.prototype.updateProgress = function(l, h, d, p) {
    return this.setProgress(l ? this.progress.val + l : null, h || null, d ? this.progress.n + d : null, p ? this.progress.stack.concat(p) : null);
  }, c.prototype.then = function(l, h) {
    var d = this;
    return this.thenCore(l, h, function(p, y) {
      return d.updateProgress(null, null, 1, [p]), Promise.prototype.then.call(this, function(N) {
        return d.updateProgress(null, p), N;
      }).then(p, y).then(function(N) {
        return d.updateProgress(1), N;
      });
    });
  }, c.prototype.thenCore = function(l, h, d) {
    d = d || Promise.prototype.then;
    var p = this;
    l && (l = l.bind(p)), h && (h = h.bind(p));
    var y = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? p : c.convert(Object.assign({}, p), Promise.prototype), N = d.call(y, l, h);
    return c.convert(N, p.__proto__);
  }, c.prototype.thenExternal = function(l, h) {
    return Promise.prototype.then.call(this, l, h);
  }, c.prototype.thenList = function(l) {
    var h = this;
    return l.forEach(function(d) {
      h = h.thenCore(d);
    }), h;
  }, c.prototype.catch = function(l) {
    l && (l = l.bind(this));
    var h = Promise.prototype.catch.call(this, l);
    return c.convert(h, this);
  }, c.prototype.catchExternal = function(l) {
    return Promise.prototype.catch.call(this, l);
  }, c.prototype.error = function(l) {
    return this.then(function() {
      throw new Error(l);
    });
  }, c.prototype.using = c.prototype.set, c.prototype.saveAs = c.prototype.save, c.prototype.export = c.prototype.output, c.prototype.run = c.prototype.then, Tt.getPageSize = function(l, h, d) {
    if (xe(l) === "object") {
      var p = l;
      l = p.orientation, h = p.unit || h, d = p.format || d;
    }
    h = h || "mm", d = d || "a4", l = ("" + (l || "P")).toLowerCase();
    var y, N = ("" + d).toLowerCase(), g = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (h) {
      case "pt":
        y = 1;
        break;
      case "mm":
        y = 72 / 25.4;
        break;
      case "cm":
        y = 72 / 2.54;
        break;
      case "in":
        y = 72;
        break;
      case "px":
        y = 0.75;
        break;
      case "pc":
      case "em":
        y = 12;
        break;
      case "ex":
        y = 6;
        break;
      default:
        throw "Invalid unit: " + h;
    }
    var F, P = 0, M = 0;
    if (g.hasOwnProperty(N)) P = g[N][1] / y, M = g[N][0] / y;
    else try {
      P = d[1], M = d[0];
    } catch {
      throw new Error("Invalid format: " + d);
    }
    if (l === "p" || l === "portrait") l = "p", M > P && (F = M, M = P, P = F);
    else {
      if (l !== "l" && l !== "landscape") throw "Invalid orientation: " + l;
      l = "l", P > M && (F = M, M = P, P = F);
    }
    return { width: M, height: P, unit: h, k: y, orientation: l };
  }, n.html = function(l, h) {
    (h = h || {}).callback = h.callback || function() {
    }, h.html2canvas = h.html2canvas || {}, h.html2canvas.canvas = h.html2canvas.canvas || this.canvas, h.jsPDF = h.jsPDF || this, h.fontFaces = h.fontFaces ? h.fontFaces.map(Mo) : null;
    var d = new c(h);
    return h.worker ? d : d.from(l).doCallback();
  };
})(Tt.API), Tt.API.addJS = function(n) {
  var t, e, i = (function(s) {
    for (var a = "", c = 0; c < s.length; c++) {
      var l = s[c];
      if (l === "(" || l === ")") {
        for (var h = 0, d = c - 1; d >= 0 && s[d] === "\\"; d--) h++;
        a += h % 2 == 0 ? "\\" + l : l;
      } else a += l;
    }
    return a;
  })(n);
  return this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (t + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + i + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    t !== void 0 && e !== void 0 && this.internal.out("/Names <</JavaScript " + t + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t;
  n.events.push(["postPutResources", function() {
    var e = this, i = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var s = e.outline.render().split(/\r\n/), a = 0; a < s.length; a++) {
      var c = s[a], l = i.exec(c);
      if (l != null) {
        var h = l[1];
        e.internal.newObjectDeferredBegin(h, !1);
      }
      e.internal.write(c);
    }
    if (this.outline.createNamedDestinations) {
      var d = this.internal.pages.length, p = [];
      for (a = 0; a < d; a++) {
        var y = e.internal.newObject();
        p.push(y);
        var N = e.internal.getPageInfo(a + 1);
        e.internal.write("<< /D[" + N.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var g = e.internal.newObject();
      for (e.internal.write("<< /Names [ "), a = 0; a < p.length; a++) e.internal.write("(page_" + (a + 1) + ")" + p[a] + " 0 R");
      e.internal.write(" ] >>", "endobj"), t = e.internal.newObject(), e.internal.write("<< /Dests " + g + " 0 R"), e.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    var e = this;
    e.outline.root.children.length > 0 && (e.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && e.internal.write("/Names " + t + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var e = this;
    e.outline = { createNamedDestinations: !1, root: { children: [] } }, e.outline.add = function(i, s, a) {
      var c = { title: s, options: a, children: [] };
      return i == null && (i = this.root), i.children.push(c), c;
    }, e.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, e.outline.genIds_r = function(i) {
      i.id = e.internal.newObjectDeferred();
      for (var s = 0; s < i.children.length; s++) this.genIds_r(i.children[s]);
    }, e.outline.renderRoot = function(i) {
      this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, i)), this.objEnd();
    }, e.outline.renderItems = function(i) {
      for (var s = this.ctx.pdf.internal.getVerticalCoordinateString, a = 0; a < i.children.length; a++) {
        var c = i.children[a];
        this.objStart(c), this.line("/Title " + this.makeString(c.title)), this.line("/Parent " + this.makeRef(i)), a > 0 && this.line("/Prev " + this.makeRef(i.children[a - 1])), a < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[a + 1])), c.children.length > 0 && (this.line("/First " + this.makeRef(c.children[0])), this.line("/Last " + this.makeRef(c.children[c.children.length - 1])));
        var l = this.count = this.count_r({ count: 0 }, c);
        if (l > 0 && this.line("/Count " + l), c.options && c.options.pageNumber) {
          var h = e.internal.getPageInfo(c.options.pageNumber);
          this.line("/Dest [" + h.objId + " 0 R /XYZ 0 " + s(0) + " 0]");
        }
        this.objEnd();
      }
      for (var d = 0; d < i.children.length; d++) this.renderItems(i.children[d]);
    }, e.outline.line = function(i) {
      this.ctx.val += i + `\r
`;
    }, e.outline.makeRef = function(i) {
      return i.id + " 0 R";
    }, e.outline.makeString = function(i) {
      return "(" + e.internal.pdfEscape(i) + ")";
    }, e.outline.objStart = function(i) {
      this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`;
    }, e.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, e.outline.count_r = function(i, s) {
      for (var a = 0; a < s.children.length; a++) i.count++, this.count_r(i, s.children[a]);
      return i.count;
    };
  }]);
})(Tt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(e, i, s, a, c, l) {
    var h, d = this.decode.DCT_DECODE, p = null;
    if (typeof e == "string" || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
      switch (e = c || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, h = (function(y) {
        for (var N, g = 256 * y.charCodeAt(4) + y.charCodeAt(5), F = y.length, P = { width: 0, height: 0, numcomponents: 1 }, M = 4; M < F; M += 2) {
          if (M += g, t.indexOf(y.charCodeAt(M + 1)) !== -1) {
            N = 256 * y.charCodeAt(M + 5) + y.charCodeAt(M + 6), P = { width: 256 * y.charCodeAt(M + 7) + y.charCodeAt(M + 8), height: N, numcomponents: y.charCodeAt(M + 9) };
            break;
          }
          g = 256 * y.charCodeAt(M + 2) + y.charCodeAt(M + 3);
        }
        return P;
      })(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e), h.numcomponents) {
        case 1:
          l = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          l = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          l = this.color_spaces.DEVICE_RGB;
      }
      p = { data: e, width: h.width, height: h.height, colorSpace: l, bitsPerComponent: 8, filter: d, index: i, alias: s };
    }
    return p;
  };
})(Tt.API), Tt.API.processPNG = function(n, t, e, i) {
  if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
    var s, a = D1(n, { checkCrc: !0 }), c = a.width, l = a.height, h = a.channels, d = a.palette, p = a.depth;
    s = d && h === 1 ? (function(X) {
      for (var T = X.width, tt = X.height, S = X.data, j = X.palette, W = X.depth, U = !1, it = [], ot = [], ft = void 0, nt = !1, dt = 0, At = 0; At < j.length; At++) {
        var wt = Gl(j[At], 4), _ = wt[0], B = wt[1], R = wt[2], G = wt[3];
        it.push(_, B, R), G != null && (G === 0 ? (dt++, ot.length < 1 && ot.push(At)) : G < 255 && (nt = !0));
      }
      if (nt || dt > 1) {
        U = !0, ot = void 0;
        var J = T * tt;
        ft = new Uint8Array(J);
        for (var Z = new DataView(S.buffer), at = 0; at < J; at++) {
          var st = Ro(Z, at, W), gt = Gl(j[st], 4)[3];
          ft[at] = gt;
        }
      } else dt === 0 && (ot = void 0);
      return { colorSpace: "Indexed", colorsPerPixel: 1, sMaskBitsPerComponent: U ? 8 : void 0, colorBytes: S, alphaBytes: ft, needSMask: U, palette: it, mask: ot };
    })(a) : h === 2 || h === 4 ? (function(X) {
      for (var T = X.data, tt = X.width, S = X.height, j = X.channels, W = X.depth, U = j === 2 ? "DeviceGray" : "DeviceRGB", it = j - 1, ot = tt * S, ft = it, nt = ot * ft, dt = 1 * ot, At = Math.ceil(nt * W / 8), wt = Math.ceil(dt * W / 8), _ = new Uint8Array(At), B = new Uint8Array(wt), R = new DataView(T.buffer), G = new DataView(_.buffer), J = new DataView(B.buffer), Z = !1, at = 0; at < ot; at++) {
        for (var st = at * j, gt = 0; gt < ft; gt++) Xu(G, Ro(R, st + gt, W), at * ft + gt, W);
        var _t = Ro(R, st + ft, W);
        _t < (1 << W) - 1 && (Z = !0), Xu(J, _t, 1 * at, W);
      }
      return { colorSpace: U, colorsPerPixel: it, sMaskBitsPerComponent: Z ? W : void 0, colorBytes: _, alphaBytes: B, needSMask: Z };
    })(a) : (function(X) {
      var T = X.data, tt = X.channels === 1 ? "DeviceGray" : "DeviceRGB";
      return { colorSpace: tt, colorsPerPixel: tt === "DeviceGray" ? 1 : 3, colorBytes: T instanceof Uint16Array ? (function(S) {
        for (var j = S.length, W = new Uint8Array(2 * j), U = new DataView(W.buffer, W.byteOffset, W.byteLength), it = 0; it < j; it++) U.setUint16(2 * it, S[it], !1);
        return W;
      })(T) : T, needSMask: !1 };
    })(a);
    var y, N, g, F = s, P = F.colorSpace, M = F.colorsPerPixel, L = F.sMaskBitsPerComponent, z = F.colorBytes, H = F.alphaBytes, D = F.needSMask, rt = F.palette, mt = F.mask, ht = null;
    return i !== Tt.API.image_compression.NONE && typeof Go == "function" ? (ht = (function(X) {
      var T;
      switch (X) {
        case Tt.API.image_compression.FAST:
          T = 11;
          break;
        case Tt.API.image_compression.MEDIUM:
          T = 13;
          break;
        case Tt.API.image_compression.SLOW:
          T = 14;
          break;
        default:
          T = 12;
      }
      return T;
    })(i), y = this.decode.FLATE_DECODE, N = "/Predictor ".concat(ht, " /Colors ").concat(M, " /BitsPerComponent ").concat(p, " /Columns ").concat(c), n = Gu(z, Math.ceil(c * M * p / 8), M, p, i), D && (g = Gu(H, Math.ceil(c * L / 8), 1, L, i))) : (y = void 0, N = void 0, n = z, D && (g = H)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (g && this.__addimage__.isArrayBuffer(g) || this.__addimage__.isArrayBufferView(g)) && (g = this.__addimage__.arrayBufferToBinaryString(g)), { alias: e, data: n, index: t, filter: y, decodeParameters: N, transparency: mt, palette: rt, sMask: g, predictor: ht, width: c, height: l, bitsPerComponent: p, sMaskBitsPerComponent: L, colorSpace: P };
  }
}, (function(n) {
  n.processGIF89A = function(t, e, i, s) {
    var a = new s2(t), c = a.width, l = a.height, h = [];
    a.decodeAndBlitFrameRGBA(0, h);
    var d = { data: h, width: c, height: l }, p = new Do(100).encode(d, 100);
    return n.processJPEG.call(this, p, e, i, s);
  }, n.processGIF87A = n.processGIF89A;
})(Tt.API), Qn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var t = 0; t < n; t++) {
      var e = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0);
      this.palette[t] = { red: s, green: i, blue: e, quad: a };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, Qn.prototype.parseBGR = function() {
  this.pos = this.offset;
  var n = "bit" + this.bitPP, t = this.width * this.height * 4;
  if (t > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
  this.data = new Uint8Array(t);
  try {
    this[n]();
  } catch (e) {
    Le.log("bit decode error:" + e);
  }
}, Qn.prototype.bit1 = function() {
  var n, t = Math.ceil(this.width / 8), e = t % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var i = this.bottom_up ? n : this.height - 1 - n, s = 0; s < t; s++) for (var a = this.datav.getUint8(this.pos++, !0), c = i * this.width * 4 + 8 * s * 4, l = 0; l < 8 && 8 * s + l < this.width; l++) {
      var h = this.palette[a >> 7 - l & 1];
      this.data[c + 4 * l] = h.blue, this.data[c + 4 * l + 1] = h.green, this.data[c + 4 * l + 2] = h.red, this.data[c + 4 * l + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, Qn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), t = n % 4, e = this.height - 1; e >= 0; e--) {
    for (var i = this.bottom_up ? e : this.height - 1 - e, s = 0; s < n; s++) {
      var a = this.datav.getUint8(this.pos++, !0), c = i * this.width * 4 + 2 * s * 4, l = a >> 4, h = 15 & a, d = this.palette[l];
      if (this.data[c] = d.blue, this.data[c + 1] = d.green, this.data[c + 2] = d.red, this.data[c + 3] = 255, 2 * s + 1 >= this.width) break;
      d = this.palette[h], this.data[c + 4] = d.blue, this.data[c + 4 + 1] = d.green, this.data[c + 4 + 2] = d.red, this.data[c + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, Qn.prototype.bit8 = function() {
  for (var n = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var e = this.bottom_up ? t : this.height - 1 - t, i = 0; i < this.width; i++) {
      var s = this.datav.getUint8(this.pos++, !0), a = e * this.width * 4 + 4 * i;
      if (s < this.palette.length) {
        var c = this.palette[s];
        this.data[a] = c.red, this.data[a + 1] = c.green, this.data[a + 2] = c.blue, this.data[a + 3] = 255;
      } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, Qn.prototype.bit15 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), e = this.height - 1; e >= 0; e--) {
    for (var i = this.bottom_up ? e : this.height - 1 - e, s = 0; s < this.width; s++) {
      var a = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var c = (a & t) / t * 255 | 0, l = (a >> 5 & t) / t * 255 | 0, h = (a >> 10 & t) / t * 255 | 0, d = a >> 15 ? 255 : 0, p = i * this.width * 4 + 4 * s;
      this.data[p] = h, this.data[p + 1] = l, this.data[p + 2] = c, this.data[p + 3] = d;
    }
    this.pos += n;
  }
}, Qn.prototype.bit16 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), e = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
    for (var s = this.bottom_up ? i : this.height - 1 - i, a = 0; a < this.width; a++) {
      var c = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var l = (c & t) / t * 255 | 0, h = (c >> 5 & e) / e * 255 | 0, d = (c >> 11) / t * 255 | 0, p = s * this.width * 4 + 4 * a;
      this.data[p] = d, this.data[p + 1] = h, this.data[p + 2] = l, this.data[p + 3] = 255;
    }
    this.pos += n;
  }
}, Qn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var t = this.bottom_up ? n : this.height - 1 - n, e = 0; e < this.width; e++) {
      var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), c = t * this.width * 4 + 4 * e;
      this.data[c] = a, this.data[c + 1] = s, this.data[c + 2] = i, this.data[c + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, Qn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var t = this.bottom_up ? n : this.height - 1 - n, e = 0; e < this.width; e++) {
    var i = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), c = this.datav.getUint8(this.pos++, !0), l = t * this.width * 4 + 4 * e;
    this.data[l] = a, this.data[l + 1] = s, this.data[l + 2] = i, this.data[l + 3] = c;
  }
}, Qn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.processBMP = function(t, e, i, s) {
    var a = new Qn(t, !1), c = a.width, l = a.height, h = { data: a.getData(), width: c, height: l }, d = new Do(100).encode(h, 100);
    return n.processJPEG.call(this, d, e, i, s);
  };
})(Tt.API), Zu.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.processWEBP = function(t, e, i, s) {
    var a = new Zu(t), c = a.width, l = a.height, h = { data: a.getData(), width: c, height: l }, d = new Do(100).encode(h, 100);
    return n.processJPEG.call(this, d, e, i, s);
  };
})(Tt.API), Tt.API.processRGBA = function(n, t, e) {
  for (var i = n.data, s = i.length, a = new Uint8Array(s / 4 * 3), c = new Uint8Array(s / 4), l = 0, h = 0, d = 0; d < s; d += 4) {
    var p = i[d], y = i[d + 1], N = i[d + 2], g = i[d + 3];
    a[l++] = p, a[l++] = y, a[l++] = N, c[h++] = g;
  }
  var F = this.__addimage__.arrayBufferToBinaryString(a);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(c), data: F, index: t, alias: e, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, Tt.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, Xi = Tt.API, As = Xi.getCharWidthsArray = function(n, t) {
  var e, i, s = (t = t || {}).font || this.internal.getFont(), a = t.fontSize || this.internal.getFontSize(), c = t.charSpace || this.internal.getCharSpace(), l = t.widths ? t.widths : s.metadata.Unicode.widths, h = l.fof ? l.fof : 1, d = t.kerning ? t.kerning : s.metadata.Unicode.kerning, p = d.fof ? d.fof : 1, y = t.doKerning !== !1, N = 0, g = n.length, F = 0, P = l[0] || h, M = [];
  for (e = 0; e < g; e++) i = n.charCodeAt(e), typeof s.metadata.widthOfString == "function" ? M.push((s.metadata.widthOfGlyph(s.metadata.characterToGlyph(i)) + c * (1e3 / a) || 0) / 1e3) : (N = y && xe(d[i]) === "object" && !isNaN(parseInt(d[i][F], 10)) ? d[i][F] / p : 0, M.push((l[i] || P) / h + N)), F = i;
  return M;
}, zu = Xi.getStringUnitWidth = function(n, t) {
  var e = (t = t || {}).fontSize || this.internal.getFontSize(), i = t.font || this.internal.getFont(), s = t.charSpace || this.internal.getCharSpace();
  return Xi.processArabic && (n = Xi.processArabic(n)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(n, e, s) / e : As.apply(this, arguments).reduce(function(a, c) {
    return a + c;
  }, 0);
}, Hu = function(n, t, e, i) {
  for (var s = [], a = 0, c = n.length, l = 0; a !== c && l + t[a] < e; ) l += t[a], a++;
  s.push(n.slice(0, a));
  var h = a;
  for (l = 0; a !== c; ) l + t[a] > i && (s.push(n.slice(h, a)), l = 0, h = a), l += t[a], a++;
  return h !== a && s.push(n.slice(h, a)), s;
}, Wu = function(n, t, e) {
  e || (e = {});
  var i, s, a, c, l, h, d, p = [], y = [p], N = e.textIndent || 0, g = 0, F = 0, P = n.split(" "), M = As.apply(this, [" ", e])[0];
  if (h = e.lineIndent === -1 ? P[0].length + 2 : e.lineIndent || 0) {
    var L = Array(h).join(" "), z = [];
    P.map(function(D) {
      (D = D.split(/\s*\n/)).length > 1 ? z = z.concat(D.map(function(rt, mt) {
        return (mt && rt.length ? `
` : "") + rt;
      })) : z.push(D[0]);
    }), P = z, h = zu.apply(this, [L, e]);
  }
  for (a = 0, c = P.length; a < c; a++) {
    var H = 0;
    if (i = P[a], h && i[0] == `
` && (i = i.substr(1), H = 1), N + g + (F = (s = As.apply(this, [i, e])).reduce(function(D, rt) {
      return D + rt;
    }, 0)) > t || H) {
      if (F > t) {
        for (l = Hu.apply(this, [i, s, t - (N + g), t]), p.push(l.shift()), p = [l.pop()]; l.length; ) y.push([l.shift()]);
        F = s.slice(i.length - (p[0] ? p[0].length : 0)).reduce(function(D, rt) {
          return D + rt;
        }, 0);
      } else p = [i];
      y.push(p), N = F + h, g = M;
    } else p.push(i), N += g + F, g = M;
  }
  return d = h ? function(D, rt) {
    return (rt ? L : "") + D.join(" ");
  } : function(D) {
    return D.join(" ");
  }, y.map(d);
}, Xi.splitTextToSize = function(n, t, e) {
  var i, s = (e = e || {}).fontSize || this.internal.getFontSize(), a = (function(p) {
    if (p.widths && p.kerning) return { widths: p.widths, kerning: p.kerning };
    var y = this.internal.getFont(p.fontName, p.fontStyle), N = "Unicode";
    return y.metadata[N] ? { widths: y.metadata[N].widths || { 0: 1 }, kerning: y.metadata[N].kerning || {} } : { font: y.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }).call(this, e);
  i = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var c = 1 * this.internal.scaleFactor * t / s;
  a.textIndent = e.textIndent ? 1 * e.textIndent * this.internal.scaleFactor / s : 0, a.lineIndent = e.lineIndent;
  var l, h, d = [];
  for (l = 0, h = i.length; l < h; l++) d = d.concat(Wu.apply(this, [i[l], c, a]));
  return d;
}, (function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var t = "0123456789abcdef", e = "klmnopqrstuvwxyz", i = {}, s = {}, a = 0; a < 16; a++) i[e[a]] = t[a], s[t[a]] = e[a];
  var c = function(N) {
    return "0x" + parseInt(N, 10).toString(16);
  }, l = n.__fontmetrics__.compress = function(N) {
    var g, F, P, M, L = ["{"];
    for (var z in N) {
      if (g = N[z], isNaN(parseInt(z, 10)) ? F = "'" + z + "'" : (z = parseInt(z, 10), F = (F = c(z).slice(2)).slice(0, -1) + s[F.slice(-1)]), typeof g == "number") g < 0 ? (P = c(g).slice(3), M = "-") : (P = c(g).slice(2), M = ""), P = M + P.slice(0, -1) + s[P.slice(-1)];
      else {
        if (xe(g) !== "object") throw new Error("Don't know what to do with value type " + xe(g) + ".");
        P = l(g);
      }
      L.push(F + P);
    }
    return L.push("}"), L.join("");
  }, h = n.__fontmetrics__.uncompress = function(N) {
    if (typeof N != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var g, F, P, M, L = {}, z = 1, H = L, D = [], rt = "", mt = "", ht = N.length - 1, X = 1; X < ht; X += 1) (M = N[X]) == "'" ? g ? (P = g.join(""), g = void 0) : g = [] : g ? g.push(M) : M == "{" ? (D.push([H, P]), H = {}, P = void 0) : M == "}" ? ((F = D.pop())[0][F[1]] = H, P = void 0, H = F[0]) : M == "-" ? z = -1 : P === void 0 ? i.hasOwnProperty(M) ? (rt += i[M], P = parseInt(rt, 16) * z, z = 1, rt = "") : rt += M : i.hasOwnProperty(M) ? (mt += i[M], H[P] = parseInt(mt, 16) * z, z = 1, P = void 0, mt = "") : mt += M;
    return L;
  }, d = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: h("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, p = { Unicode: { Courier: d, "Courier-Bold": d, "Courier-BoldOblique": d, "Courier-Oblique": d, Helvetica: d, "Helvetica-Bold": d, "Helvetica-BoldOblique": d, "Helvetica-Oblique": d, "Times-Roman": d, "Times-Bold": d, "Times-BoldItalic": d, "Times-Italic": d } }, y = { Unicode: { "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": h("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": h("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: h("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": h("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": h("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": h("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": h("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(N) {
    var g = N.font, F = y.Unicode[g.postScriptName];
    F && (g.metadata.Unicode = {}, g.metadata.Unicode.widths = F.widths, g.metadata.Unicode.kerning = F.kerning);
    var P = p.Unicode[g.postScriptName];
    P && (g.metadata.Unicode.encoding = P, g.encoding = P.codePages[0]);
  }]);
})(Tt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(e) {
    for (var i = e.length, s = new Uint8Array(i), a = 0; a < i; a++) s[a] = e.charCodeAt(a);
    return s;
  };
  n.API.events.push(["addFont", function(e) {
    var i = void 0, s = e.font, a = e.instance;
    if (!s.isStandardFont) {
      if (a === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      if (typeof (i = a.existsFileInVFS(s.postScriptName) === !1 ? a.loadFile(s.postScriptName) : a.getFileFromVFS(s.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + s.postScriptName + "').");
      (function(c, l) {
        l = /^\x00\x01\x00\x00/.test(l) ? t(l) : t(Ss(l)), c.metadata = n.API.TTFFont.open(l), c.metadata.Unicode = c.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, c.metadata.glyIdsUsed = [0];
      })(s, i);
    }
  }]);
})(Tt), Tt.API.addSvgAsImage = function(n, t, e, i, s, a, c, l) {
  if (isNaN(t) || isNaN(e)) throw Le.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
  if (isNaN(i) || isNaN(s)) throw Le.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
  var h = document.createElement("canvas");
  h.width = i, h.height = s;
  var d = h.getContext("2d");
  d.fillStyle = "#fff", d.fillRect(0, 0, h.width, h.height);
  var p = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, y = this;
  return ($t.canvg ? Promise.resolve($t.canvg) : import("./index.es-C4rLve-F.js")).catch(function(N) {
    return Promise.reject(new Error("Could not load canvg: " + N));
  }).then(function(N) {
    return N.default ? N.default : N;
  }).then(function(N) {
    return N.fromString(d, n, p);
  }, function() {
    return Promise.reject(new Error("Could not load canvg."));
  }).then(function(N) {
    return N.render(p);
  }).then(function() {
    y.addImage(h.toDataURL("image/jpeg", 1), t, e, i, s, c, l);
  });
}, Tt.API.putTotalPages = function(n) {
  var t, e = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(n, "g"), e = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), e = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var i = 1; i <= this.internal.getNumberOfPages(); i++) for (var s = 0; s < this.internal.pages[i].length; s++) this.internal.pages[i][s] = this.internal.pages[i][s].replace(t, e);
  return this;
}, Tt.API.viewerPreferences = function(n, t) {
  var e;
  n = n || {}, t = t || !1;
  var i, s, a, c = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, l = Object.keys(c), h = [], d = 0, p = 0, y = 0;
  function N(F, P) {
    var M, L = !1;
    for (M = 0; M < F.length; M += 1) F[M] === P && (L = !0);
    return L;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(c)), this.internal.viewerpreferences.isSubscribed = !1), e = this.internal.viewerpreferences.configuration, n === "reset" || t === !0) {
    var g = l.length;
    for (y = 0; y < g; y += 1) e[l[y]].value = e[l[y]].defaultValue, e[l[y]].explicitSet = !1;
  }
  if (xe(n) === "object") {
    for (s in n) if (a = n[s], N(l, s) && a !== void 0) {
      if (e[s].type === "boolean" && typeof a == "boolean") e[s].value = a;
      else if (e[s].type === "name" && N(e[s].valueSet, a)) e[s].value = a;
      else if (e[s].type === "integer" && Number.isInteger(a)) e[s].value = a;
      else if (e[s].type === "array") {
        for (d = 0; d < a.length; d += 1) if (i = !0, a[d].length === 1 && typeof a[d][0] == "number") h.push(String(a[d] - 1));
        else if (a[d].length > 1) {
          for (p = 0; p < a[d].length; p += 1) typeof a[d][p] != "number" && (i = !1);
          i === !0 && h.push([a[d][0] - 1, a[d][1] - 1].join(" "));
        }
        e[s].value = "[" + h.join(" ") + "]";
      } else e[s].value = e[s].defaultValue;
      e[s].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var F, P = [];
    for (F in e) e[F].explicitSet === !0 && (e[F].type === "name" ? P.push("/" + F + " /" + e[F].value) : P.push("/" + F + " " + e[F].value));
    P.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + P.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = e, this;
}, Tt.API.addMetadata = function(n, t) {
  return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: n, namespaceUri: t ?? "http://jspdf.default.namespaceuri/", rawXml: typeof t == "boolean" && t }, this.internal.events.subscribe("putCatalog", l2), this.internal.events.subscribe("postPutResources", o2)), this;
}, (function(n) {
  var t = n.API, e = t.pdfEscape16 = function(a, c) {
    for (var l, h = c.metadata.Unicode.widths, d = ["", "0", "00", "000", "0000"], p = [""], y = 0, N = a.length; y < N; ++y) {
      if (l = c.metadata.characterToGlyph(a.charCodeAt(y)), c.metadata.glyIdsUsed.push(l), c.metadata.toUnicode[l] = a.charCodeAt(y), h.indexOf(l) == -1 && (h.push(l), h.push([parseInt(c.metadata.widthOfGlyph(l), 10)])), l == "0") return p.join("");
      l = l.toString(16), p.push(d[4 - l.length], l);
    }
    return p.join("");
  }, i = function(a) {
    var c, l, h, d, p, y, N;
    for (p = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, h = [], y = 0, N = (l = Object.keys(a).sort(function(g, F) {
      return g - F;
    })).length; y < N; y++) c = l[y], h.length >= 100 && (p += `
` + h.length + ` beginbfchar
` + h.join(`
`) + `
endbfchar`, h = []), a[c] !== void 0 && a[c] !== null && typeof a[c].toString == "function" && (d = ("0000" + a[c].toString(16)).slice(-4), c = ("0000" + (+c).toString(16)).slice(-4), h.push("<" + c + "><" + d + ">"));
    return h.length && (p += `
` + h.length + ` beginbfchar
` + h.join(`
`) + `
endbfchar
`), p + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  t.events.push(["putFont", function(a) {
    (function(c) {
      var l = c.font, h = c.out, d = c.newObject, p = c.putStream;
      if (l.metadata instanceof n.API.TTFFont && l.encoding === "Identity-H") {
        for (var y = l.metadata.Unicode.widths, N = l.metadata.subset.encode(l.metadata.glyIdsUsed, 1), g = "", F = 0; F < N.length; F++) g += String.fromCharCode(N[F]);
        var P = d();
        p({ data: g, addLength1: !0, objectId: P }), h("endobj");
        var M = d();
        p({ data: i(l.metadata.toUnicode), addLength1: !0, objectId: M }), h("endobj");
        var L = d();
        h("<<"), h("/Type /FontDescriptor"), h("/FontName /" + Zi(l.fontName)), h("/FontFile2 " + P + " 0 R"), h("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), h("/Flags " + l.metadata.flags), h("/StemV " + l.metadata.stemV), h("/ItalicAngle " + l.metadata.italicAngle), h("/Ascent " + l.metadata.ascender), h("/Descent " + l.metadata.decender), h("/CapHeight " + l.metadata.capHeight), h(">>"), h("endobj");
        var z = d();
        h("<<"), h("/Type /Font"), h("/BaseFont /" + Zi(l.fontName)), h("/FontDescriptor " + L + " 0 R"), h("/W " + n.API.PDFObject.convert(y)), h("/CIDToGIDMap /Identity"), h("/DW 1000"), h("/Subtype /CIDFontType2"), h("/CIDSystemInfo"), h("<<"), h("/Supplement 0"), h("/Registry (Adobe)"), h("/Ordering (" + l.encoding + ")"), h(">>"), h(">>"), h("endobj"), l.objectNumber = d(), h("<<"), h("/Type /Font"), h("/Subtype /Type0"), h("/ToUnicode " + M + " 0 R"), h("/BaseFont /" + Zi(l.fontName)), h("/Encoding /" + l.encoding), h("/DescendantFonts [" + z + " 0 R]"), h(">>"), h("endobj"), l.isAlreadyPutted = !0;
      }
    })(a);
  }]), t.events.push(["putFont", function(a) {
    (function(c) {
      var l = c.font, h = c.out, d = c.newObject, p = c.putStream;
      if (l.metadata instanceof n.API.TTFFont && l.encoding === "WinAnsiEncoding") {
        for (var y = l.metadata.rawData, N = "", g = 0; g < y.length; g++) N += String.fromCharCode(y[g]);
        var F = d();
        p({ data: N, addLength1: !0, objectId: F }), h("endobj");
        var P = d();
        p({ data: i(l.metadata.toUnicode), addLength1: !0, objectId: P }), h("endobj");
        var M = d();
        h("<<"), h("/Descent " + l.metadata.decender), h("/CapHeight " + l.metadata.capHeight), h("/StemV " + l.metadata.stemV), h("/Type /FontDescriptor"), h("/FontFile2 " + F + " 0 R"), h("/Flags 96"), h("/FontBBox " + n.API.PDFObject.convert(l.metadata.bbox)), h("/FontName /" + Zi(l.fontName)), h("/ItalicAngle " + l.metadata.italicAngle), h("/Ascent " + l.metadata.ascender), h(">>"), h("endobj"), l.objectNumber = d();
        for (var L = 0; L < l.metadata.hmtx.widths.length; L++) l.metadata.hmtx.widths[L] = parseInt(l.metadata.hmtx.widths[L] * (1e3 / l.metadata.head.unitsPerEm));
        h("<</Subtype/TrueType/Type/Font/ToUnicode " + P + " 0 R/BaseFont/" + Zi(l.fontName) + "/FontDescriptor " + M + " 0 R/Encoding/" + l.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(l.metadata.hmtx.widths) + ">>"), h("endobj"), l.isAlreadyPutted = !0;
      }
    })(a);
  }]);
  var s = function(a) {
    var c, l = a.text || "", h = a.x, d = a.y, p = a.options || {}, y = a.mutex || {}, N = y.pdfEscape, g = y.activeFontKey, F = y.fonts, P = g, M = "", L = 0, z = "", H = F[P].encoding;
    if (F[P].encoding !== "Identity-H") return { text: l, x: h, y: d, options: p, mutex: y };
    for (z = l, P = g, Array.isArray(l) && (z = l[0]), L = 0; L < z.length; L += 1) F[P].metadata.hasOwnProperty("cmap") && (c = F[P].metadata.cmap.unicode.codeMap[z[L].charCodeAt(0)]), c || z[L].charCodeAt(0) < 256 && F[P].metadata.hasOwnProperty("Unicode") ? M += z[L] : M += "";
    var D = "";
    return parseInt(P.slice(1)) < 14 || H === "WinAnsiEncoding" ? D = N(M, P).split("").map(function(rt) {
      return rt.charCodeAt(0).toString(16);
    }).join("") : H === "Identity-H" && (D = e(M, F[P])), y.isHex = !0, { text: D, x: h, y: d, options: p, mutex: y };
  };
  t.events.push(["postProcessText", function(a) {
    var c = a.text || "", l = [], h = { text: c, x: a.x, y: a.y, options: a.options, mutex: a.mutex };
    if (Array.isArray(c)) {
      var d = 0;
      for (d = 0; d < c.length; d += 1) Array.isArray(c[d]) && c[d].length === 3 ? l.push([s(Object.assign({}, h, { text: c[d][0] })).text, c[d][1], c[d][2]]) : l.push(s(Object.assign({}, h, { text: c[d] })).text);
      a.text = l;
    } else a.text = s(Object.assign({}, h, { text: c })).text;
  }]);
})(Tt), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  n.existsFileInVFS = function(e) {
    return t.call(this), this.internal.vFS[e] !== void 0;
  }, n.addFileToVFS = function(e, i) {
    return t.call(this), this.internal.vFS[e] = i, this;
  }, n.getFileFromVFS = function(e) {
    return t.call(this), this.internal.vFS[e] !== void 0 ? this.internal.vFS[e] : null;
  };
})(Tt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
(function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(i) {
    var s, a, c, l, h, d, p, y = t, N = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], g = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], F = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, P = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, M = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], L = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), z = !1, H = 0;
    this.__bidiEngine__ = {};
    var D = function(S) {
      var j = S.charCodeAt(), W = j >> 8, U = P[W];
      return U !== void 0 ? y[256 * U + (255 & j)] : W === 252 || W === 253 ? "AL" : L.test(W) ? "L" : W === 8 ? "R" : "N";
    }, rt = function(S) {
      for (var j, W = 0; W < S.length; W++) {
        if ((j = D(S.charAt(W))) === "L") return !1;
        if (j === "R") return !0;
      }
      return !1;
    }, mt = function(S, j, W, U) {
      var it, ot, ft, nt, dt = j[U];
      switch (dt) {
        case "L":
        case "R":
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          z = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          z && (dt = "AN");
          break;
        case "AL":
          z = !0, dt = "R";
          break;
        case "WS":
        case "BN":
          dt = "N";
          break;
        case "CS":
          U < 1 || U + 1 >= j.length || (it = W[U - 1]) !== "EN" && it !== "AN" || (ot = j[U + 1]) !== "EN" && ot !== "AN" ? dt = "N" : z && (ot = "AN"), dt = ot === it ? ot : "N";
          break;
        case "ES":
          dt = (it = U > 0 ? W[U - 1] : "B") === "EN" && U + 1 < j.length && j[U + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (U > 0 && W[U - 1] === "EN") {
            dt = "EN";
            break;
          }
          if (z) {
            dt = "N";
            break;
          }
          for (ft = U + 1, nt = j.length; ft < nt && j[ft] === "ET"; ) ft++;
          dt = ft < nt && j[ft] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (c && !l) {
            for (nt = j.length, ft = U + 1; ft < nt && j[ft] === "NSM"; ) ft++;
            if (ft < nt) {
              var At = S[U], wt = At >= 1425 && At <= 2303 || At === 64286;
              if (it = j[ft], wt && (it === "R" || it === "AL")) {
                dt = "R";
                break;
              }
            }
          }
          dt = U < 1 || (it = j[U - 1]) === "B" ? "N" : W[U - 1];
          break;
        case "B":
          z = !1, s = !0, dt = H;
          break;
        case "S":
          a = !0, dt = "N";
      }
      return dt;
    }, ht = function(S, j, W) {
      var U = S.split("");
      return W && X(U, W, { hiLevel: H }), U.reverse(), j && j.reverse(), U.join("");
    }, X = function(S, j, W) {
      var U, it, ot, ft, nt, dt = -1, At = S.length, wt = 0, _ = [], B = H ? g : N, R = [];
      for (z = !1, s = !1, a = !1, it = 0; it < At; it++) R[it] = D(S[it]);
      for (ot = 0; ot < At; ot++) {
        if (nt = wt, _[ot] = mt(S, R, _, ot), U = 240 & (wt = B[nt][F[_[ot]]]), wt &= 15, j[ot] = ft = B[wt][5], U > 0) if (U === 16) {
          for (it = dt; it < ot; it++) j[it] = 1;
          dt = -1;
        } else dt = -1;
        if (B[wt][6]) dt === -1 && (dt = ot);
        else if (dt > -1) {
          for (it = dt; it < ot; it++) j[it] = ft;
          dt = -1;
        }
        R[ot] === "B" && (j[ot] = 0), W.hiLevel |= ft;
      }
      a && (function(G, J, Z) {
        for (var at = 0; at < Z; at++) if (G[at] === "S") {
          J[at] = H;
          for (var st = at - 1; st >= 0 && G[st] === "WS"; st--) J[st] = H;
        }
      })(R, j, At);
    }, T = function(S, j, W, U, it) {
      if (!(it.hiLevel < S)) {
        if (S === 1 && H === 1 && !s) return j.reverse(), void (W && W.reverse());
        for (var ot, ft, nt, dt, At = j.length, wt = 0; wt < At; ) {
          if (U[wt] >= S) {
            for (nt = wt + 1; nt < At && U[nt] >= S; ) nt++;
            for (dt = wt, ft = nt - 1; dt < ft; dt++, ft--) ot = j[dt], j[dt] = j[ft], j[ft] = ot, W && (ot = W[dt], W[dt] = W[ft], W[ft] = ot);
            wt = nt;
          }
          wt++;
        }
      }
    }, tt = function(S, j, W) {
      var U = S.split(""), it = { hiLevel: H };
      return W || (W = []), X(U, W, it), (function(ot, ft, nt) {
        if (nt.hiLevel !== 0 && p) for (var dt, At = 0; At < ot.length; At++) ft[At] === 1 && (dt = M.indexOf(ot[At])) >= 0 && (ot[At] = M[dt + 1]);
      })(U, W, it), T(2, U, j, W, it), T(1, U, j, W, it), U.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(S, j, W) {
      if ((function(it, ot) {
        if (ot) for (var ft = 0; ft < it.length; ft++) ot[ft] = ft;
        l === void 0 && (l = rt(it)), d === void 0 && (d = rt(it));
      })(S, j), c || !h || d) if (c && h && l ^ d) H = l ? 1 : 0, S = ht(S, j, W);
      else if (!c && h && d) H = l ? 1 : 0, S = tt(S, j, W), S = ht(S, j);
      else if (!c || l || h || d) {
        if (c && !h && l ^ d) S = ht(S, j), l ? (H = 0, S = tt(S, j, W)) : (H = 1, S = tt(S, j, W), S = ht(S, j));
        else if (c && l && !h && d) H = 1, S = tt(S, j, W), S = ht(S, j);
        else if (!c && !h && l ^ d) {
          var U = p;
          l ? (H = 1, S = tt(S, j, W), H = 0, p = !1, S = tt(S, j, W), p = U) : (H = 0, S = tt(S, j, W), S = ht(S, j), H = 1, p = !1, S = tt(S, j, W), p = U, S = ht(S, j));
        }
      } else H = 0, S = tt(S, j, W);
      else H = l ? 1 : 0, S = tt(S, j, W);
      return S;
    }, this.__bidiEngine__.setOptions = function(S) {
      S && (c = S.isInputVisual, h = S.isOutputVisual, l = S.isInputRtl, d = S.isOutputRtl, p = S.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(i), this.__bidiEngine__;
  };
  var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], e = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(i) {
    var s = i.text;
    i.x, i.y;
    var a = i.options || {};
    i.mutex, a.lang;
    var c = [];
    if (a.isInputVisual = typeof a.isInputVisual != "boolean" || a.isInputVisual, e.setOptions(a), Object.prototype.toString.call(s) === "[object Array]") {
      var l = 0;
      for (c = [], l = 0; l < s.length; l += 1) Object.prototype.toString.call(s[l]) === "[object Array]" ? c.push([e.doBidiReorder(s[l][0]), s[l][1], s[l][2]]) : c.push([e.doBidiReorder(s[l])]);
      i.text = c;
    } else i.text = e.doBidiReorder(s);
    e.setOptions({ isInputVisual: !0 });
  }]);
})(Tt), Tt.API.TTFFont = (function() {
  function n(t) {
    var e;
    if (this.rawData = t, e = this.contents = new Zr(t), this.contents.pos = 4, e.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    e.pos = 0, this.parse(), this.subset = new A2(this), this.registerTTF();
  }
  return n.open = function(t) {
    return new n(t);
  }, n.prototype.parse = function() {
    return this.directory = new u2(this.contents), this.head = new f2(this), this.name = new m2(this), this.cmap = new Gh(this), this.toUnicode = {}, this.hhea = new c2(this), this.maxp = new v2(this), this.hmtx = new b2(this), this.post = new p2(this), this.os2 = new d2(this), this.loca = new _2(this), this.glyf = new w2(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var t, e, i, s, a;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
      var c, l, h, d;
      for (d = [], c = 0, l = (h = this.bbox).length; c < l; c++) t = h[c], d.push(Math.round(t * this.scaleFactor));
      return d;
    }).call(this), this.stemV = 0, this.post.exists ? (i = 255 & (s = this.post.italic_angle), 32768 & (e = s >> 16) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(t) {
    var e;
    return ((e = this.cmap.unicode) != null ? e.codeMap[t] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(t) {
    var e;
    return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
  }, n.prototype.widthOfString = function(t, e, i) {
    var s, a, c, l;
    for (c = 0, a = 0, l = (t = "" + t).length; 0 <= l ? a < l : a > l; a = 0 <= l ? ++a : --a) s = t.charCodeAt(a), c += this.widthOfGlyph(this.characterToGlyph(s)) + i * (1e3 / e) || 0;
    return c * (e / 1e3);
  }, n.prototype.lineHeight = function(t, e) {
    var i;
    return e == null && (e = !1), i = e ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * t;
  }, n;
})();
var nr, Zr = (function() {
  function n(t) {
    this.data = t ?? [], this.pos = 0, this.length = this.data.length;
  }
  return n.prototype.readByte = function() {
    return this.data[this.pos++];
  }, n.prototype.writeByte = function(t) {
    return this.data[this.pos++] = t;
  }, n.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, n.prototype.writeUInt32 = function(t) {
    return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt32 = function() {
    var t;
    return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
  }, n.prototype.writeInt32 = function(t) {
    return t < 0 && (t += 4294967296), this.writeUInt32(t);
  }, n.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, n.prototype.writeUInt16 = function(t) {
    return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt16 = function() {
    var t;
    return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
  }, n.prototype.writeInt16 = function(t) {
    return t < 0 && (t += 65536), this.writeUInt16(t);
  }, n.prototype.readString = function(t) {
    var e, i;
    for (i = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e) i[e] = String.fromCharCode(this.readByte());
    return i.join("");
  }, n.prototype.writeString = function(t) {
    var e, i, s;
    for (s = [], e = 0, i = t.length; 0 <= i ? e < i : e > i; e = 0 <= i ? ++e : --e) s.push(this.writeByte(t.charCodeAt(e)));
    return s;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(t) {
    return this.writeInt16(t);
  }, n.prototype.readLongLong = function() {
    var t, e, i, s, a, c, l, h;
    return t = this.readByte(), e = this.readByte(), i = this.readByte(), s = this.readByte(), a = this.readByte(), c = this.readByte(), l = this.readByte(), h = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ s) + 16777216 * (255 ^ a) + 65536 * (255 ^ c) + 256 * (255 ^ l) + (255 ^ h) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * i + 4294967296 * s + 16777216 * a + 65536 * c + 256 * l + h;
  }, n.prototype.writeLongLong = function(t) {
    var e, i;
    return e = Math.floor(t / 4294967296), i = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(t) {
    return this.writeInt32(t);
  }, n.prototype.read = function(t) {
    var e, i;
    for (e = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) e.push(this.readByte());
    return e;
  }, n.prototype.write = function(t) {
    var e, i, s, a;
    for (a = [], i = 0, s = t.length; i < s; i++) e = t[i], a.push(this.writeByte(e));
    return a;
  }, n;
})(), u2 = (function() {
  var n;
  function t(e) {
    var i, s, a;
    for (this.scalarType = e.readInt(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), this.tables = {}, s = 0, a = this.tableCount; 0 <= a ? s < a : s > a; s = 0 <= a ? ++s : --s) i = { tag: e.readString(4), checksum: e.readInt(), offset: e.readInt(), length: e.readInt() }, this.tables[i.tag] = i;
  }
  return t.prototype.encode = function(e) {
    var i, s, a, c, l, h, d, p, y, N, g, F, P;
    for (P in g = Object.keys(e).length, h = Math.log(2), y = 16 * Math.floor(Math.log(g) / h), c = Math.floor(y / h), p = 16 * g - y, (s = new Zr()).writeInt(this.scalarType), s.writeShort(g), s.writeShort(y), s.writeShort(c), s.writeShort(p), a = 16 * g, d = s.pos + a, l = null, F = [], e) for (N = e[P], s.writeString(P), s.writeInt(n(N)), s.writeInt(d), s.writeInt(N.length), F = F.concat(N), P === "head" && (l = d), d += N.length; d % 4; ) F.push(0), d++;
    return s.write(F), i = 2981146554 - n(s.data), s.pos = l + 8, s.writeUInt32(i), s.data;
  }, n = function(e) {
    var i, s, a, c;
    for (e = Vh.call(e); e.length % 4; ) e.push(0);
    for (a = new Zr(e), s = 0, i = 0, c = e.length; i < c; i = i += 4) s += a.readUInt32();
    return 4294967295 & s;
  }, t;
})(), h2 = {}.hasOwnProperty, vr = function(n, t) {
  for (var e in t) h2.call(t, e) && (n[e] = t[e]);
  function i() {
    this.constructor = n;
  }
  return i.prototype = t.prototype, n.prototype = new i(), n.__super__ = t.prototype, n;
};
nr = (function() {
  function n(t) {
    var e;
    this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
  }
  return n.prototype.parse = function() {
  }, n.prototype.encode = function() {
  }, n.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, n;
})();
var f2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "head", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
  }, n.prototype.encode = function(t) {
    var e;
    return (e = new Zr()).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data;
  }, n;
})(), Qu = (function() {
  function n(t, e) {
    var i, s, a, c, l, h, d, p, y, N, g, F, P, M, L, z, H;
    switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), y = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (h = 0; h < 256; ++h) this.codeMap[h] = t.readByte();
        break;
      case 4:
        for (g = t.readUInt16(), N = g / 2, t.pos += 6, a = (function() {
          var D, rt;
          for (rt = [], h = D = 0; 0 <= N ? D < N : D > N; h = 0 <= N ? ++D : --D) rt.push(t.readUInt16());
          return rt;
        })(), t.pos += 2, P = (function() {
          var D, rt;
          for (rt = [], h = D = 0; 0 <= N ? D < N : D > N; h = 0 <= N ? ++D : --D) rt.push(t.readUInt16());
          return rt;
        })(), d = (function() {
          var D, rt;
          for (rt = [], h = D = 0; 0 <= N ? D < N : D > N; h = 0 <= N ? ++D : --D) rt.push(t.readUInt16());
          return rt;
        })(), p = (function() {
          var D, rt;
          for (rt = [], h = D = 0; 0 <= N ? D < N : D > N; h = 0 <= N ? ++D : --D) rt.push(t.readUInt16());
          return rt;
        })(), s = (this.length - t.pos + this.offset) / 2, l = (function() {
          var D, rt;
          for (rt = [], h = D = 0; 0 <= s ? D < s : D > s; h = 0 <= s ? ++D : --D) rt.push(t.readUInt16());
          return rt;
        })(), h = L = 0, H = a.length; L < H; h = ++L) for (M = a[h], i = z = F = P[h]; F <= M ? z <= M : z >= M; i = F <= M ? ++z : --z) p[h] === 0 ? c = i + d[h] : (c = l[p[h] / 2 + (i - F) - (N - h)] || 0) !== 0 && (c += d[h]), this.codeMap[i] = 65535 & c;
    }
    t.pos = y;
  }
  return n.encode = function(t, e) {
    var i, s, a, c, l, h, d, p, y, N, g, F, P, M, L, z, H, D, rt, mt, ht, X, T, tt, S, j, W, U, it, ot, ft, nt, dt, At, wt, _, B, R, G, J, Z, at, st, gt, _t, kt;
    switch (U = new Zr(), c = Object.keys(t).sort(function(St, Dt) {
      return St - Dt;
    }), e) {
      case "macroman":
        for (P = 0, M = (function() {
          var St = [];
          for (F = 0; F < 256; ++F) St.push(0);
          return St;
        })(), z = { 0: 0 }, a = {}, it = 0, dt = c.length; it < dt; it++) z[st = t[s = c[it]]] == null && (z[st] = ++P), a[s] = { old: t[s], new: z[t[s]] }, M[s] = z[t[s]];
        return U.writeUInt16(1), U.writeUInt16(0), U.writeUInt32(12), U.writeUInt16(0), U.writeUInt16(262), U.writeUInt16(0), U.write(M), { charMap: a, subtable: U.data, maxGlyphID: P + 1 };
      case "unicode":
        for (j = [], y = [], H = 0, z = {}, i = {}, L = d = null, ot = 0, At = c.length; ot < At; ot++) z[rt = t[s = c[ot]]] == null && (z[rt] = ++H), i[s] = { old: rt, new: z[rt] }, l = z[rt] - s, L != null && l === d || (L && y.push(L), j.push(s), d = l), L = s;
        for (L && y.push(L), y.push(65535), j.push(65535), tt = 2 * (T = j.length), X = 2 * Math.pow(Math.log(T) / Math.LN2, 2), N = Math.log(X / 2) / Math.LN2, ht = 2 * T - X, h = [], mt = [], g = [], F = ft = 0, wt = j.length; ft < wt; F = ++ft) {
          if (S = j[F], p = y[F], S === 65535) {
            h.push(0), mt.push(0);
            break;
          }
          if (S - (W = i[S].new) >= 32768) for (h.push(0), mt.push(2 * (g.length + T - F)), s = nt = S; S <= p ? nt <= p : nt >= p; s = S <= p ? ++nt : --nt) g.push(i[s].new);
          else h.push(W - S), mt.push(0);
        }
        for (U.writeUInt16(3), U.writeUInt16(1), U.writeUInt32(12), U.writeUInt16(4), U.writeUInt16(16 + 8 * T + 2 * g.length), U.writeUInt16(0), U.writeUInt16(tt), U.writeUInt16(X), U.writeUInt16(N), U.writeUInt16(ht), Z = 0, _ = y.length; Z < _; Z++) s = y[Z], U.writeUInt16(s);
        for (U.writeUInt16(0), at = 0, B = j.length; at < B; at++) s = j[at], U.writeUInt16(s);
        for (gt = 0, R = h.length; gt < R; gt++) l = h[gt], U.writeUInt16(l);
        for (_t = 0, G = mt.length; _t < G; _t++) D = mt[_t], U.writeUInt16(D);
        for (kt = 0, J = g.length; kt < J; kt++) P = g[kt], U.writeUInt16(P);
        return { charMap: i, subtable: U.data, maxGlyphID: H + 1 };
    }
  }, n;
})(), Gh = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "cmap", n.prototype.parse = function(t) {
    var e, i, s;
    for (t.pos = this.offset, this.version = t.readUInt16(), s = t.readUInt16(), this.tables = [], this.unicode = null, i = 0; 0 <= s ? i < s : i > s; i = 0 <= s ? ++i : --i) e = new Qu(t, this.offset), this.tables.push(e), e.isUnicode && this.unicode == null && (this.unicode = e);
    return !0;
  }, n.encode = function(t, e) {
    var i, s;
    return e == null && (e = "macroman"), i = Qu.encode(t, e), (s = new Zr()).writeUInt16(0), s.writeUInt16(1), i.table = s.data.concat(i.subtable), i;
  }, n;
})(), c2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "hhea", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
  }, n;
})(), d2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "OS/2", n.prototype.parse = function(t) {
    if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = (function() {
      var e, i;
      for (i = [], e = 0; e < 10; ++e) i.push(t.readByte());
      return i;
    })(), this.charRange = (function() {
      var e, i;
      for (i = [], e = 0; e < 4; ++e) i.push(t.readInt());
      return i;
    })(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = (function() {
      var e, i;
      for (i = [], e = 0; e < 2; e = ++e) i.push(t.readInt());
      return i;
    })(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort();
  }, n;
})(), p2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "post", n.prototype.parse = function(t) {
    var e, i, s;
    switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
      case 65536:
      case 196608:
        break;
      case 131072:
        var a;
        for (i = t.readUInt16(), this.glyphNameIndex = [], a = 0; 0 <= i ? a < i : a > i; a = 0 <= i ? ++a : --a) this.glyphNameIndex.push(t.readUInt16());
        for (this.names = [], s = []; t.pos < this.offset + this.length; ) e = t.readByte(), s.push(this.names.push(t.readString(e)));
        return s;
      case 151552:
        return i = t.readUInt16(), this.offsets = t.read(i);
      case 262144:
        return this.map = (function() {
          var c, l, h;
          for (h = [], a = c = 0, l = this.file.maxp.numGlyphs; 0 <= l ? c < l : c > l; a = 0 <= l ? ++c : --c) h.push(t.readUInt32());
          return h;
        }).call(this);
    }
  }, n;
})(), g2 = function(n, t) {
  this.raw = n, this.length = n.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
}, m2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "name", n.prototype.parse = function(t) {
    var e, i, s, a, c, l, h, d, p, y, N;
    for (t.pos = this.offset, t.readShort(), e = t.readShort(), l = t.readShort(), i = [], a = 0; 0 <= e ? a < e : a > e; a = 0 <= e ? ++a : --a) i.push({ platformID: t.readShort(), encodingID: t.readShort(), languageID: t.readShort(), nameID: t.readShort(), length: t.readShort(), offset: this.offset + l + t.readShort() });
    for (h = {}, a = p = 0, y = i.length; p < y; a = ++p) s = i[a], t.pos = s.offset, d = t.readString(s.length), c = new g2(d, s), h[N = s.nameID] == null && (h[N] = []), h[s.nameID].push(c);
    this.strings = h, this.copyright = h[0], this.fontFamily = h[1], this.fontSubfamily = h[2], this.uniqueSubfamily = h[3], this.fontName = h[4], this.version = h[5];
    try {
      this.postscriptName = h[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = h[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = h[7], this.manufacturer = h[8], this.designer = h[9], this.description = h[10], this.vendorUrl = h[11], this.designerUrl = h[12], this.license = h[13], this.licenseUrl = h[14], this.preferredFamily = h[15], this.preferredSubfamily = h[17], this.compatibleFull = h[18], this.sampleText = h[19];
  }, n;
})(), v2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "maxp", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
  }, n;
})(), b2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "hmtx", n.prototype.parse = function(t) {
    var e, i, s, a, c, l, h;
    for (t.pos = this.offset, this.metrics = [], e = 0, l = this.file.hhea.numberOfMetrics; 0 <= l ? e < l : e > l; e = 0 <= l ? ++e : --e) this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() });
    for (s = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
      var d, p;
      for (p = [], e = d = 0; 0 <= s ? d < s : d > s; e = 0 <= s ? ++d : --d) p.push(t.readInt16());
      return p;
    })(), this.widths = (function() {
      var d, p, y, N;
      for (N = [], d = 0, p = (y = this.metrics).length; d < p; d++) a = y[d], N.push(a.advance);
      return N;
    }).call(this), i = this.widths[this.widths.length - 1], h = [], e = c = 0; 0 <= s ? c < s : c > s; e = 0 <= s ? ++c : --c) h.push(this.widths.push(i));
    return h;
  }, n.prototype.forGlyph = function(t) {
    return t in this.metrics ? this.metrics[t] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t - this.metrics.length] };
  }, n;
})(), Vh = [].slice, w2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "glyf", n.prototype.parse = function() {
    return this.cache = {};
  }, n.prototype.glyphFor = function(t) {
    var e, i, s, a, c, l, h, d, p, y;
    return t in this.cache ? this.cache[t] : (a = this.file.loca, e = this.file.contents, i = a.indexOf(t), (s = a.lengthOf(t)) === 0 ? this.cache[t] = null : (e.pos = this.offset + i, c = (l = new Zr(e.read(s))).readShort(), d = l.readShort(), y = l.readShort(), h = l.readShort(), p = l.readShort(), this.cache[t] = c === -1 ? new x2(l, d, y, h, p) : new y2(l, c, d, y, h, p), this.cache[t]));
  }, n.prototype.encode = function(t, e, i) {
    var s, a, c, l, h;
    for (c = [], a = [], l = 0, h = e.length; l < h; l++) s = t[e[l]], a.push(c.length), s && (c = c.concat(s.encode(i)));
    return a.push(c.length), { table: c, offsets: a };
  }, n;
})(), y2 = (function() {
  function n(t, e, i, s, a, c) {
    this.raw = t, this.numberOfContours = e, this.xMin = i, this.yMin = s, this.xMax = a, this.yMax = c, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
})(), x2 = (function() {
  function n(t, e, i, s, a) {
    var c, l;
    for (this.raw = t, this.xMin = e, this.yMin = i, this.xMax = s, this.yMax = a, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], c = this.raw; l = c.readShort(), this.glyphOffsets.push(c.pos), this.glyphIDs.push(c.readUInt16()), 32 & l; ) c.pos += 1 & l ? 4 : 2, 128 & l ? c.pos += 8 : 64 & l ? c.pos += 4 : 8 & l && (c.pos += 2);
  }
  return n.prototype.encode = function() {
    var t, e, i;
    for (e = new Zr(Vh.call(this.raw.data)), t = 0, i = this.glyphIDs.length; t < i; ++t) e.pos = this.glyphOffsets[t];
    return e.data;
  }, n;
})(), _2 = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return vr(n, nr), n.prototype.tag = "loca", n.prototype.parse = function(t) {
    var e, i;
    return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = e === 0 ? (function() {
      var s, a;
      for (a = [], i = 0, s = this.length; i < s; i += 2) a.push(2 * t.readUInt16());
      return a;
    }).call(this) : (function() {
      var s, a;
      for (a = [], i = 0, s = this.length; i < s; i += 4) a.push(t.readUInt32());
      return a;
    }).call(this);
  }, n.prototype.indexOf = function(t) {
    return this.offsets[t];
  }, n.prototype.lengthOf = function(t) {
    return this.offsets[t + 1] - this.offsets[t];
  }, n.prototype.encode = function(t, e) {
    for (var i = new Uint32Array(this.offsets.length), s = 0, a = 0, c = 0; c < i.length; ++c) if (i[c] = s, a < e.length && e[a] == c) {
      ++a, i[c] = s;
      var l = this.offsets[c], h = this.offsets[c + 1] - l;
      h > 0 && (s += h);
    }
    for (var d = new Array(4 * i.length), p = 0; p < i.length; ++p) d[4 * p + 3] = 255 & i[p], d[4 * p + 2] = (65280 & i[p]) >> 8, d[4 * p + 1] = (16711680 & i[p]) >> 16, d[4 * p] = (4278190080 & i[p]) >> 24;
    return d;
  }, n;
})(), A2 = (function() {
  function n(t) {
    this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var t, e, i, s, a;
    for (e in s = this.font.cmap.tables[0].codeMap, t = {}, a = this.subset) i = a[e], t[e] = s[i];
    return t;
  }, n.prototype.glyphsFor = function(t) {
    var e, i, s, a, c, l, h;
    for (s = {}, c = 0, l = t.length; c < l; c++) s[a = t[c]] = this.font.glyf.glyphFor(a);
    for (a in e = [], s) (i = s[a]) != null && i.compound && e.push.apply(e, i.glyphIDs);
    if (e.length > 0) for (a in h = this.glyphsFor(e)) i = h[a], s[a] = i;
    return s;
  }, n.prototype.encode = function(t, e) {
    var i, s, a, c, l, h, d, p, y, N, g, F, P, M, L;
    for (s in i = Gh.encode(this.generateCmap(), "unicode"), c = this.glyphsFor(t), g = { 0: 0 }, L = i.charMap) g[(h = L[s]).old] = h.new;
    for (F in N = i.maxGlyphID, c) F in g || (g[F] = N++);
    return p = (function(z) {
      var H, D;
      for (H in D = {}, z) D[z[H]] = H;
      return D;
    })(g), y = Object.keys(p).sort(function(z, H) {
      return z - H;
    }), P = (function() {
      var z, H, D;
      for (D = [], z = 0, H = y.length; z < H; z++) l = y[z], D.push(p[l]);
      return D;
    })(), a = this.font.glyf.encode(c, P, g), d = this.font.loca.encode(a.offsets, P), M = { cmap: this.font.cmap.raw(), glyf: a.table, loca: d, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e) }, this.font.os2.exists && (M["OS/2"] = this.font.os2.raw()), this.font.directory.encode(M);
  }, n;
})();
Tt.API.PDFObject = (function() {
  var n;
  function t() {
  }
  return n = function(e, i) {
    return (Array(i + 1).join("0") + e).slice(-i);
  }, t.convert = function(e) {
    var i, s, a, c;
    if (Array.isArray(e)) return "[" + (function() {
      var l, h, d;
      for (d = [], l = 0, h = e.length; l < h; l++) i = e[l], d.push(t.convert(i));
      return d;
    })().join(" ") + "]";
    if (typeof e == "string") return "/" + e;
    if (e?.isString) return "(" + e + ")";
    if (e instanceof Date) return "(D:" + n(e.getUTCFullYear(), 4) + n(e.getUTCMonth(), 2) + n(e.getUTCDate(), 2) + n(e.getUTCHours(), 2) + n(e.getUTCMinutes(), 2) + n(e.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(e) === "[object Object]") {
      for (s in a = ["<<"], e) c = e[s], a.push("/" + s + " " + t.convert(c));
      return a.push(">>"), a.join(`
`);
    }
    return "" + e;
  }, t;
})();
const N2 = {
  1: { eh6: 5.5, eh9: 8.1 },
  5: { eh6: 5.2, eh9: 7.8 },
  10: { eh6: 5, eh9: 7.5 },
  15: { eh6: 4.8, eh9: 7 },
  20: { eh6: 4.5, eh9: 6.7 },
  30: { eh6: 4, eh9: 5.9 },
  45: { eh6: 3.9, eh9: 4.6 },
  60: { eh6: 3.5, eh9: 5.1 },
  75: { eh6: 2.9, eh9: 4.3 },
  90: { eh6: 2.3, eh9: 3.4 }
}, L2 = { 6: { min: 5.5, max: 5.9 }, 9: { min: 8.2, max: 8.9 } };
function S2(n) {
  const t = N2[n.fan] ?? { eh6: 4, eh9: 6 }, e = L2[n.diameter] ?? { min: n.diameter * 0.9, max: n.diameter }, i = n.diameter === 6 ? t.eh6 : t.eh9;
  return { d: n.diameter, eh: i, hMin: e.min, hMax: e.max, hNom: (e.min + e.max) / 2 };
}
const Oa = [0, 51, 102], Yh = [31, 56, 100], kn = 22, qo = 94, Ns = 188, Uo = 280, k2 = {
  basic: "Basic properties/ Allgemeine Eigenschaften:",
  beam: "Beam properties/ Optische Eigenschaften:",
  mech: "Mechanical properties/ Mechanische Eigenschaften:"
}, P2 = [
  "Fächerwinkel",
  "Optik",
  "Liniendicke",
  "Strahlprofil",
  "DOE-Muster",
  "Fokus",
  "Homogenität",
  "Geradheit",
  "Strahlrichtungsfehler",
  "Pointing-Stabilität",
  "Linienausrichtung",
  "Strahlaustritt",
  "Strahldurchmesser"
], I2 = [
  "Gehäuse",
  "Abmessungen",
  "Gehäusematerial",
  "Anschluss",
  "Aderbelegung",
  "Laserklasse",
  "MTTF",
  "Linsendurchmesser",
  "Werkstoff",
  "Höhe zylindrischer Teil"
], C2 = (n) => P2.some((t) => n.startsWith(t)) ? "beam" : I2.some((t) => n.startsWith(t)) ? "mech" : "basic", Jh = () => globalThis.__BLAU_ASSET_BASE__ ?? "/";
async function th(n, t, e) {
  const i = await (await fetch(`${Jh()}fonts/${t}`)).arrayBuffer();
  let s = "";
  const a = new Uint8Array(i);
  for (let c = 0; c < a.length; c += 32768) s += String.fromCharCode.apply(null, Array.from(a.subarray(c, c + 32768)));
  n.addFileToVFS(t, btoa(s)), n.addFont(t, "Carlito", e);
}
async function eh(n = `${Jh()}logo-blau.png`) {
  try {
    const t = await (await fetch(n)).blob();
    return await new Promise((e) => {
      const i = new FileReader();
      i.onload = () => e(i.result), i.onerror = () => e(null), i.readAsDataURL(t);
    });
  } catch {
    return null;
  }
}
async function F2({ config: n, code: t, seriesName: e, isEnglish: i, lineClass: s = null, hideLaserClass: a = !1 }) {
  let c = Dl(n, "de", s), l = Dl(n, "en", s), h = i ? l : c;
  if (a) {
    const d = (p) => p.filter(([y]) => y !== "Laserklasse" && y !== "Laser class");
    c = d(c), l = d(l), h = d(h), h = i ? l : c;
  }
  return $h({ code: t, moduleName: e, de: c, en: l, isEnglish: i });
}
async function $h({
  code: n,
  moduleName: t,
  de: e,
  en: i,
  isEnglish: s,
  figure: a
}) {
  const c = s ? "en" : "de", l = s ? i : e, h = e.length === i.length, d = l.map(([L, z], H) => ({
    label: (h && i[H][0] !== e[H][0] ? `${i[H][0]}/ ${e[H][0]}` : L).replace(/ \((tolerance|Toleranz)\)/g, ""),
    value: z,
    section: C2(h ? e[H][0] : L)
  })), p = new Tt({ unit: "mm", format: "a4" });
  await th(p, "Carlito-Regular.ttf", "normal"), await th(p, "Carlito-Bold.ttf", "bold");
  const y = await eh(), N = () => (p.setFont("Carlito", "normal"), p.setFontSize(30), p.setTextColor(...Oa), p.text("Datasheet/ Datenblatt", kn, 30), y && p.addImage(y, "PNG", 141, 8, 47, 16.96), 44), g = (L, z) => (p.setFillColor(...Oa), p.rect(kn - 2, L - 4.2, Ns - kn + 4, 6, "F"), p.setFont("Carlito", "normal"), p.setFontSize(11), p.setTextColor(255, 255, 255), p.text(z, kn, L), z && (p.setDrawColor(255, 255, 255), p.setLineWidth(0.2), p.line(kn, L + 0.6, kn + p.getTextWidth(z), L + 0.6)), L + 8), F = 4.4;
  let P = N();
  const M = (L, z) => {
    p.setFont("Carlito", "normal"), p.setFontSize(10.5);
    const H = p.splitTextToSize(L, qo - kn - 3), D = p.splitTextToSize(z, Ns - qo), rt = Math.max(H.length, D.length) * F;
    P + rt > Uo && (p.addPage(), P = N()), p.setFont("Carlito", "normal"), p.setFontSize(10.5), p.setTextColor(...Yh), p.text(H, kn, P), (z === "sichtbar nach Anmeldung" || z === "visible after login") && p.setTextColor(120, 120, 120), p.text(D, qo, P), P += rt + 1;
  };
  if (M("Order number/ Artikelnummer", n), M("Module/ Bezeichnung", `${t} – ${s ? "configured product datasheet" : "Datenblatt zur Konfiguration"}`), P += 3, a) {
    const z = a.photoUrl ? await eh(a.photoUrl) : null;
    if (z) {
      const H = z.startsWith("data:image/png") ? "PNG" : "JPEG";
      p.addImage(z, H, kn, P, 52, 52), p.setDrawColor(200, 205, 215), p.setLineWidth(0.2), p.rect(kn, P, 52, 52);
    }
    a.powellSketch && E2(p, kn + 52 + 8, P, Ns - kn - 52 - 8, 52, a.powellSketch, s), P += 60;
  }
  for (const L of ["basic", "beam", "mech"]) {
    const z = d.filter((H) => H.section === L);
    if (z.length) {
      P + 16 > Uo && (p.addPage(), P = N()), P = g(P, k2[L]);
      for (const H of z) M(H.label, H.value);
      P += 4;
    }
  }
  P + 14 > Uo && (p.addPage(), P = N()), P = g(P, ""), p.setFont("Carlito", "normal"), p.setFontSize(9), p.setTextColor(110, 110, 110), p.text(
    p.splitTextToSize(
      s ? "Typical values for the selected configuration. The datasheet supplied with the quotation is binding." : "Typische Werte zur gewählten Konfiguration. Verbindlich ist das Datenblatt zum Angebot.",
      Ns - kn
    ),
    kn,
    P
  ), p.save(`${n || "BLAU"}_Datasheet${c === "de" ? "_DE" : ""}.pdf`.replace(/[^\w.\-]+/g, "_"));
}
function E2(n, t, e, i, s, a, c) {
  const l = S2(a), h = (M) => M.toLocaleString(c ? "en-US" : "de-DE", { maximumFractionDigits: 1, minimumFractionDigits: 1 }), d = s * 0.55 / l.d, p = t + 18, y = e + s * 0.36, N = l.d / 2 * d, g = p + l.eh * d, F = p + l.hNom * d;
  n.setDrawColor(...Oa), n.setFillColor(224, 231, 239), n.setLineWidth(0.35), n.lines(
    [
      [g - p, 0],
      [F - g, N],
      [g - F, N],
      [p - g, 0]
    ],
    p,
    y - N,
    [1, 1],
    "FD",
    !0
  ), n.setLineWidth(0.15), n.setLineDashPattern([2, 0.8, 0.4, 0.8], 0), n.line(p - 3, y, F + 10, y), n.setLineDashPattern([], 0);
  const P = (M, L, z, H) => {
    n.setLineWidth(0.2), n.line(M, L, z, H);
    const D = Math.atan2(H - L, z - M);
    for (const [rt, mt, ht] of [[M, L, D], [z, H, D + Math.PI]])
      n.triangle(rt, mt, rt + 1.6 * Math.cos(ht + 0.35), mt + 1.6 * Math.sin(ht + 0.35), rt + 1.6 * Math.cos(ht - 0.35), mt + 1.6 * Math.sin(ht - 0.35), "F");
  };
  n.setFillColor(...Oa), n.setDrawColor(150, 160, 175), n.setLineWidth(0.15), n.line(p - 10, y - N, p, y - N), n.line(p - 10, y + N, p, y + N), n.line(p, y + N, p, y + N + 14), n.line(g, y + N, g, y + N + 7), n.line(F, y + 1, F, y + N + 14), n.setDrawColor(...Oa), P(p - 7, y - N, p - 7, y + N), P(p, y + N + 5, g, y + N + 5), P(p, y + N + 12, F, y + N + 12), n.setFont("Carlito", "normal"), n.setFontSize(8.5), n.setTextColor(...Yh), n.text(`Ø ${l.d} mm`, p - 9, y, { angle: 90, align: "center" }), n.text(`EH ${h(l.eh)} mm`, (p + g) / 2, y + N + 4, { align: "center" }), n.text(`H ${h(l.hMin)}–${h(l.hMax)} mm`, (p + F) / 2, y + N + 11, { align: "center" }), n.setFont("Carlito", "bold"), n.text(c ? "Roof apex" : "Dachfirst", F + 3, y - N + 2), n.setFont("Carlito", "normal"), n.setDrawColor(227, 36, 43), n.setFillColor(227, 36, 43), n.setLineWidth(0.6), n.line(F + 22, y, F + 3, y), n.triangle(F + 1.5, y, F + 4, y - 1.2, F + 4, y + 1.2, "F"), n.setTextColor(227, 36, 43), n.text("Laser", F + 12, y - 2, { align: "center" }), n.setTextColor(110, 110, 110), n.setFontSize(8), n.text(c ? "Dimensional sketch (schematic)" : "Maßskizze (schematisch)", t + i / 2, e + s - 1, { align: "center" });
}
const j2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadDatasheet: F2,
  downloadDatasheetRows: $h
}, Symbol.toStringTag, { value: "Module" }));
export {
  xe as _,
  j2 as d
};
