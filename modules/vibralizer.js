const Ce = "violinhero", Re = "violin", ze = "Violin Hero", Ne = "violinhero.crescendu.com", Oe = "https://github.com/dflorey/violinhero-app.git";
const Pe = {
  paths: [
    "M50,39C43,39 38,42.5 38,48C38,51.5 39.5,53.5 37.5,55.8C42.6,55.6 44.4,57.8 44.4,60.8C44.4,63.8 42.6,66 37.5,65.8C36,68.4 34.5,71 34.5,74.2C34.5,80.2 41.5,83.2 50,83.2C58.5,83.2 65.5,80.2 65.5,74.2C65.5,71 64,68.4 62.5,65.8C57.4,66 55.6,63.8 55.6,60.8C55.6,57.8 57.4,55.6 62.5,55.8C60.5,53.5 62,51.5 62,48C62,42.5 57,39 50,39Z",
    "M50,39V23"
  ],
  circles: [
    [
      50,
      18,
      4
    ]
  ]
}, Le = {
  id: Ce,
  instrument: Re,
  name: ze,
  domain: Ne,
  siteRepo: Oe,
  cacheVersion: 2,
  mark: Pe
}, K = (e) => `https://${e}.crescendu.com/`, Mt = {
  violin: {
    id: "violin",
    app: { id: "violinhero", name: "Violin Hero", url: K("violinhero") },
    name: { en: "violin", de: "Geige" },
    label: { en: "Violin", de: "Geige" },
    strings: [
      { name: "G", midi: 55 },
      { name: "D", midi: 62 },
      { name: "A", midi: 69 },
      { name: "E", midi: 76 }
    ],
    tuneOrder: [2, 1, 0, 3],
    open: [55, 62, 69, 76],
    // Its open G to the E three octaves above its open E
    range: [55, 100],
    hz: [180, 2800],
    programs: [41],
    partName: /viol|vln|^vn\b|geige/i,
    clef: { sign: "G", line: 2 },
    middleLine: 71,
    marks: { fingers: [0, 1, 2, 3, 4], bows: !0, harmonics: !0 },
    bowed: !0,
    vibrato: !0
  },
  viola: {
    id: "viola",
    app: { id: "violahero", name: "Viola Hero", url: K("violahero") },
    name: { en: "viola", de: "Bratsche" },
    label: { en: "Viola", de: "Bratsche" },
    strings: [
      { name: "C", midi: 48 },
      { name: "G", midi: 55 },
      { name: "D", midi: 62 },
      { name: "A", midi: 69 }
    ],
    // A first, then down in fifths
    tuneOrder: [3, 2, 1, 0],
    open: [48, 55, 62, 69],
    range: [48, 91],
    hz: [120, 2e3],
    programs: [42],
    partName: /viola|bratsche|^vla\b|alto/i,
    clef: { sign: "C", line: 3 },
    middleLine: 60,
    marks: { fingers: [0, 1, 2, 3, 4], bows: !0, harmonics: !0 },
    bowed: !0,
    vibrato: !0
  },
  cello: {
    id: "cello",
    app: { id: "cellohero", name: "Cello Hero", url: K("cellohero") },
    name: { en: "cello", de: "Cello" },
    label: { en: "Cello", de: "Cello" },
    strings: [
      { name: "C", midi: 36 },
      { name: "G", midi: 43 },
      { name: "D", midi: 50 },
      { name: "A", midi: 57 }
    ],
    tuneOrder: [3, 2, 1, 0],
    open: [36, 43, 50, 57],
    range: [36, 84],
    hz: [60, 1400],
    programs: [43],
    partName: /cello|vc\b|vlc/i,
    clef: { sign: "F", line: 4 },
    middleLine: 50,
    marks: { fingers: [0, 1, 2, 3, 4], bows: !0, harmonics: !0 },
    bowed: !0,
    vibrato: !0
  },
  recorder: {
    id: "recorder",
    app: { id: "recorderhero", name: "Recorder Hero", url: K("recorderhero") },
    name: { en: "recorder", de: "Blockflöte" },
    label: { en: "Recorder", de: "Blockflöte" },
    // A recorder isn't tuned note by note
    strings: [],
    tuneOrder: [],
    open: [],
    // The soprano recorder, as it sounds: an octave above the notes written (C5 to D7)
    range: [72, 98],
    hz: [450, 3200],
    programs: [75, 74],
    partName: /recorder|blockfl|flöte|flute|flauto/i,
    // Treble clef with a small 8 above: written as recorder players read it, sounding an octave higher
    clef: { sign: "G", line: 2, octave: 1 },
    middleLine: 83,
    marks: { fingers: [], bows: !1, harmonics: !1 },
    bowed: !1,
    vibrato: !1
  },
  voice: {
    id: "voice",
    app: { id: "voicehero", name: "Voice Hero", url: K("voicehero") },
    name: { en: "voice", de: "Stimme" },
    label: { en: "Voice", de: "Gesang" },
    strings: [],
    tuneOrder: [],
    open: [],
    // Written for a high or medium voice; sung an octave lower, a note still counts (octaves are folded)
    range: [55, 84],
    hz: [70, 1200],
    programs: [53, 54, 55],
    partName: /voice|vocal|voc\b|gesang|stimme|sing|sopran|alto|tenor|bass|canto|chant/i,
    clef: { sign: "G", line: 2 },
    middleLine: 71,
    marks: { fingers: [], bows: !1, harmonics: !1 },
    bowed: !1,
    vibrato: !0
  }
};
let De = Mt[Le.instrument] ?? Mt.violin;
function Rt() {
  return De;
}
Object.values(Mt).map((e) => e.app.id);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, St = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = Symbol(), zt = /* @__PURE__ */ new WeakMap();
let ae = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== Et)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (St && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = zt.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && zt.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ie = (e) => new ae(typeof e == "string" ? e : e + "", void 0, Et), He = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((s, n, r) => s + ((o) => {
    if (o._$cssResult$ === !0)
      return o.cssText;
    if (typeof o == "number")
      return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + e[r + 1], e[0]);
  return new ae(i, e, Et);
}, Ve = (e, t) => {
  if (St)
    e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else
    for (const i of t) {
      const s = document.createElement("style"), n = rt.litNonce;
      n !== void 0 && s.setAttribute("nonce", n), s.textContent = i.cssText, e.appendChild(s);
    }
}, Nt = St ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules)
    i += s.cssText;
  return Ie(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fe, defineProperty: Ue, getOwnPropertyDescriptor: Be, getOwnPropertyNames: Ge, getOwnPropertySymbols: je, getPrototypeOf: Ke } = Object, L = globalThis, Ot = L.trustedTypes, qe = Ot ? Ot.emptyScript : "", pt = L.reactiveElementPolyfillSupport, Y = (e, t) => e, ot = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? qe : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, kt = (e, t) => !Fe(e, t), Pt = { attribute: !0, type: String, converter: ot, reflect: !1, useDefault: !1, hasChanged: kt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let U = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = Pt) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const s = Symbol(), n = this.getPropertyDescriptor(t, s, i);
      n !== void 0 && Ue(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    const { get: n, set: r } = Be(this.prototype, t) ?? { get() {
      return this[i];
    }, set(o) {
      this[i] = o;
    } };
    return { get: n, set(o) {
      const a = n == null ? void 0 : n.call(this);
      r == null || r.call(this, o), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Pt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties")))
      return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const i = this.properties, s = [...Ge(i), ...je(i)];
      for (const n of s)
        this.createProperty(n, i[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0)
        for (const [s, n] of i)
          this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, s] of this.elementProperties) {
      const n = this._$Eu(i, s);
      n !== void 0 && this._$Eh.set(n, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s)
        i.unshift(Nt(n));
    } else
      t !== void 0 && i.push(Nt(t));
    return i;
  }
  static _$Eu(t, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((i) => i(this));
  }
  addController(t) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$EO) == null || i.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const s of i.keys())
      this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ve(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$ET(t, i) {
    var r;
    const s = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, s);
    if (n !== void 0 && s.reflect === !0) {
      const o = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : ot).toAttribute(i, s.type);
      this._$Em = t, o == null ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var r, o;
    const s = this.constructor, n = s._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const a = s.getPropertyOptions(n), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((r = a.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? a.converter : ot;
      this._$Em = n;
      const h = l.fromAttribute(i, a.type);
      this[n] = h ?? ((o = this._$Ej) == null ? void 0 : o.get(n)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(t, i, s, n = !1, r) {
    var o;
    if (t !== void 0) {
      const a = this.constructor;
      if (n === !1 && (r = this[t]), s ?? (s = a.getPropertyOptions(t)), !((s.hasChanged ?? kt)(r, i) || s.useDefault && s.reflect && r === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(a._$Eu(t, s))))
        return;
      this.C(t, i, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: s, reflect: n, wrapped: r }, o) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? i ?? this[t]), r !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (i = void 0), this._$AL.set(t, i)), n === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, o] of this._$Ep)
          this[r] = o;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0)
        for (const [r, o] of n) {
          const { wrapped: a } = o, l = this[r];
          a !== !0 || this._$AL.has(r) || l === void 0 || this.C(r, void 0, o, l);
        }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (s = this._$EO) == null || s.forEach((n) => {
        var r;
        return (r = n.hostUpdate) == null ? void 0 : r.call(n);
      }), this.update(i)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$EO) == null || i.forEach((s) => {
      var n;
      return (n = s.hostUpdated) == null ? void 0 : n.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
U.elementStyles = [], U.shadowRootOptions = { mode: "open" }, U[Y("elementProperties")] = /* @__PURE__ */ new Map(), U[Y("finalized")] = /* @__PURE__ */ new Map(), pt == null || pt({ ReactiveElement: U }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Z = globalThis, Lt = (e) => e, at = Z.trustedTypes, Dt = at ? at.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, le = "$lit$", P = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + P, We = `<${he}>`, V = document, X = () => V.createComment(""), Q = (e) => e === null || typeof e != "object" && typeof e != "function", Tt = Array.isArray, Ye = (e) => Tt(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", ut = `[ 	
\f\r]`, q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, It = /-->/g, Ht = />/g, D = RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Vt = /'/g, Ft = /"/g, ce = /^(?:script|style|textarea|title)$/i, de = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), _ = de(1), R = de(2), B = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), Ut = /* @__PURE__ */ new WeakMap(), I = V.createTreeWalker(V, 129);
function pe(e, t) {
  if (!Tt(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Dt !== void 0 ? Dt.createHTML(t) : t;
}
const Ze = (e, t) => {
  const i = e.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = q;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    let h, d, c = -1, f = 0;
    for (; f < l.length && (o.lastIndex = f, d = o.exec(l), d !== null); )
      f = o.lastIndex, o === q ? d[1] === "!--" ? o = It : d[1] !== void 0 ? o = Ht : d[2] !== void 0 ? (ce.test(d[2]) && (n = RegExp("</" + d[2], "g")), o = D) : d[3] !== void 0 && (o = D) : o === D ? d[0] === ">" ? (o = n ?? q, c = -1) : d[1] === void 0 ? c = -2 : (c = o.lastIndex - d[2].length, h = d[1], o = d[3] === void 0 ? D : d[3] === '"' ? Ft : Vt) : o === Ft || o === Vt ? o = D : o === It || o === Ht ? o = q : (o = D, n = void 0);
    const u = o === D && e[a + 1].startsWith("/>") ? " " : "";
    r += o === q ? l + We : c >= 0 ? (s.push(h), l.slice(0, c) + le + l.slice(c) + P + u) : l + P + (c === -2 ? a : u);
  }
  return [pe(e, r + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class tt {
  constructor({ strings: t, _$litType$: i }, s) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, l = this.parts, [h, d] = Ze(t, i);
    if (this.el = tt.createElement(h, s), I.currentNode = this.el.content, i === 2 || i === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = I.nextNode()) !== null && l.length < a; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes())
          for (const c of n.getAttributeNames())
            if (c.endsWith(le)) {
              const f = d[o++], u = n.getAttribute(c).split(P), p = /([.?@])?(.*)/.exec(f);
              l.push({ type: 1, index: r, name: p[2], strings: u, ctor: p[1] === "." ? Xe : p[1] === "?" ? Qe : p[1] === "@" ? ti : ct }), n.removeAttribute(c);
            } else
              c.startsWith(P) && (l.push({ type: 6, index: r }), n.removeAttribute(c));
        if (ce.test(n.tagName)) {
          const c = n.textContent.split(P), f = c.length - 1;
          if (f > 0) {
            n.textContent = at ? at.emptyScript : "";
            for (let u = 0; u < f; u++)
              n.append(c[u], X()), I.nextNode(), l.push({ type: 2, index: ++r });
            n.append(c[f], X());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === he)
          l.push({ type: 2, index: r });
        else {
          let c = -1;
          for (; (c = n.data.indexOf(P, c + 1)) !== -1; )
            l.push({ type: 7, index: r }), c += P.length - 1;
        }
      r++;
    }
  }
  static createElement(t, i) {
    const s = V.createElement("template");
    return s.innerHTML = t, s;
  }
}
function G(e, t, i = e, s) {
  var o, a;
  if (t === B)
    return t;
  let n = s !== void 0 ? (o = i._$Co) == null ? void 0 : o[s] : i._$Cl;
  const r = Q(t) ? void 0 : t._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== r && ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1), r === void 0 ? n = void 0 : (n = new r(e), n._$AT(e, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = n : i._$Cl = n), n !== void 0 && (t = G(e, n._$AS(e, t.values), n, s)), t;
}
class Je {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: s } = this._$AD, n = ((t == null ? void 0 : t.creationScope) ?? V).importNode(i, !0);
    I.currentNode = n;
    let r = I.nextNode(), o = 0, a = 0, l = s[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let h;
        l.type === 2 ? h = new et(r, r.nextSibling, this, t) : l.type === 1 ? h = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (h = new ei(r, this, t)), this._$AV.push(h), l = s[++a];
      }
      o !== (l == null ? void 0 : l.index) && (r = I.nextNode(), o++);
    }
    return I.currentNode = V, n;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class et {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, s, n) {
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = G(this, t, i), Q(t) ? t === w || t == null || t === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t !== this._$AH && t !== B && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ye(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== w && Q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(V.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: i, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = tt.createElement(pe(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === n)
      this._$AH.p(i);
    else {
      const o = new Je(n, this), a = o.u(this.options);
      o.p(i), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let i = Ut.get(t.strings);
    return i === void 0 && Ut.set(t.strings, i = new tt(t)), i;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, n = 0;
    for (const r of t)
      n === i.length ? i.push(s = new et(this.O(X()), this.O(X()), this, this.options)) : s = i[n], s._$AI(r), n++;
    n < i.length && (this._$AR(s && s._$AB.nextSibling, n), i.length = n);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); t !== this._$AB; ) {
      const n = Lt(t).nextSibling;
      Lt(t).remove(), t = n;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, n, r) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t, this.name = i, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = w;
  }
  _$AI(t, i = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      t = G(this, t, i, 0), o = !Q(t) || t !== this._$AH && t !== B, o && (this._$AH = t);
    else {
      const a = t;
      let l, h;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        h = G(this, a[s + l], i, l), h === B && (h = this._$AH[l]), o || (o = !Q(h) || h !== this._$AH[l]), h === w ? t = w : t !== w && (t += (h ?? "") + r[l + 1]), this._$AH[l] = h;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Xe extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === w ? void 0 : t;
  }
}
class Qe extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== w);
  }
}
class ti extends ct {
  constructor(t, i, s, n, r) {
    super(t, i, s, n, r), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = G(this, t, i, 0) ?? w) === B)
      return;
    const s = this._$AH, n = t === w && s !== w || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== w && (s === w || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ei {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    G(this, t);
  }
}
const mt = Z.litHtmlPolyfillSupport;
mt == null || mt(tt, et), (Z.litHtmlVersions ?? (Z.litHtmlVersions = [])).push("3.3.3");
const ii = (e, t, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? t;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = n = new et(t.insertBefore(X(), r), r, void 0, i ?? {});
  }
  return n._$AI(e), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis;
class J extends U {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ii(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return B;
  }
}
var oe;
J._$litElement$ = !0, J.finalized = !0, (oe = H.litElementHydrateSupport) == null || oe.call(H, { LitElement: J });
const gt = H.litElementPolyfillSupport;
gt == null || gt({ LitElement: J });
(H.litElementVersions ?? (H.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const si = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer(() => {
    customElements.define(e, t);
  }) : customElements.define(e, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ni = { attribute: !0, type: String, converter: ot, reflect: !1, hasChanged: kt }, ri = (e = ni, t, i) => {
  const { kind: s, metadata: n } = i;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), s === "setter" && ((e = Object.create(e)).wrapped = !0), r.set(i.name, e), s === "accessor") {
    const { name: o } = i;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(o, l, e, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(o, void 0, e, a), a;
    } };
  }
  if (s === "setter") {
    const { name: o } = i;
    return function(a) {
      const l = this[o];
      t.call(this, a), this.requestUpdate(o, l, e, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function ue(e) {
  return (t, i) => typeof i == "object" ? ri(e, t, i) : ((s, n, r) => {
    const o = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, s), o ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function T(e) {
  return ue({ ...e, state: !0, attribute: !1 });
}
const me = {
  romantic: { id: "romantic", where: "all", rate: [5, 7.5], width: [30, 80], optional: !1 },
  intense: { id: "intense", where: "all", rate: [5.5, 8], width: [40, 90], optional: !1 },
  classical: { id: "classical", where: "phrase", rate: [5.5, 7.5], width: [20, 50], optional: !0 },
  ornamental: { id: "ornamental", where: "ornament", rate: [5, 7], width: [10, 40], optional: !0 },
  folk: { id: "folk", where: "longest", rate: [4.5, 7], width: [15, 60], optional: !0 },
  fiddle: { id: "fiddle", where: "longest", rate: [4, 6], width: [30, 80], optional: !0 },
  klezmer: { id: "klezmer", where: "longest", rate: [6.5, 9], width: [15, 45], optional: !0 },
  jazz: { id: "jazz", where: "all", rate: [4.5, 7], width: [20, 70], optional: !1, late: !0 }
}, Bt = Object.keys(me);
function oi(e, t, i, s = ge) {
  const { rateFit: n, widthFit: r } = fe(e, t, i, s);
  return n * r;
}
const ai = 0.35, li = 0.6, ge = { widen: 0, off: 1 };
function fe(e, t, i, { widen: s, off: n }) {
  const r = ([o, a]) => [o * (1 - s), a * (1 + s)];
  return {
    rateFit: t > 0 ? Gt(t, r(e.rate), ai * n) : 1,
    widthFit: Gt(i, r(e.width), li * n)
  };
}
function hi(e, t, i, s = ge) {
  const { rateFit: n, widthFit: r } = fe(e, t, i, s), o = 1 - n, a = 1 - r;
  return {
    fast: t > e.rate[1] ? o : 0,
    slow: t > 0 && t < e.rate[0] ? o : 0,
    wide: i > e.width[1] ? a : 0,
    narrow: i < e.width[0] ? a : 0
  };
}
const ci = 0.75;
function Gt(e, [t, i], s) {
  return e < t ? Math.max(0, 1 - (t - e) / (t * s)) : e > i ? Math.max(0, 1 - (e - i) / (i * s)) : 1;
}
const di = `
registerProcessor('vibralizer-module-capture', class extends AudioWorkletProcessor {
  constructor() {
    super();
    this.batch = new Float32Array(2048);
    this.fill = 0;
    this.start = 0;
  }
  process(inputs) {
    const input = inputs[0] && inputs[0][0];
    if (!input) return true;
    // A gap in the frames (nothing connected for a while) starts a new batch
    if (this.fill && currentFrame !== this.start + this.fill) this.flush();
    if (!this.fill) this.start = currentFrame;
    this.batch.set(input, this.fill);
    this.fill += input.length;
    if (this.fill + 128 > this.batch.length) this.flush();
    return true;
  }
  flush() {
    this.port.postMessage({ frame: this.start, samples: this.batch.slice(0, this.fill) });
    this.fill = 0;
  }
});`, ft = /* @__PURE__ */ new WeakMap();
function pi(e) {
  let t = ft.get(e);
  if (!t) {
    const i = URL.createObjectURL(new Blob([di], { type: "application/javascript" }));
    t = e.audioWorklet.addModule(i).finally(() => URL.revokeObjectURL(i)), t.catch(() => ft.delete(e)), ft.set(e, t);
  }
  return t;
}
class ui {
  constructor(t, i) {
    this.ctx = t, this.end = 0, this.ring = new Float32Array(Math.ceil(i * t.sampleRate));
  }
  /** Starts keeping what `input` carries. Rejects where audio worklets aren't available. */
  async attach(t) {
    await pi(this.ctx), this.node = new AudioWorkletNode(this.ctx, "vibralizer-module-capture", {
      channelCount: 1,
      channelCountMode: "explicit",
      channelInterpretation: "speakers"
    }), this.node.port.onmessage = ({ data: s }) => this.store(s.frame, s.samples);
    const i = this.ctx.createGain();
    i.gain.value = 0, t.connect(this.node).connect(i).connect(this.ctx.destination), this.silent = i;
  }
  /** Stops keeping (the module closed: the app's context lives on) */
  detach() {
    var t, i;
    (t = this.node) == null || t.disconnect(), (i = this.silent) == null || i.disconnect(), this.node && (this.node.port.onmessage = null), this.node = this.silent = void 0;
  }
  /**
   * The stretch from `from` to `to` (audio clock, s), as far as it is still kept, with when it
   * actually starts; null if none of it is.
   */
  cut(t, i) {
    const s = this.ctx.sampleRate, n = Math.max(Math.round(t * s), this.end - this.ring.length, 0), r = Math.min(Math.round(i * s), this.end);
    if (r <= n)
      return null;
    const o = this.ctx.createBuffer(1, r - n, s), a = o.getChannelData(0);
    for (let l = n; l < r; l++)
      a[l - n] = this.ring[l % this.ring.length];
    return { clip: o, start: n / s };
  }
  store(t, i) {
    for (let s = 0; s < i.length; s++)
      this.ring[(t + s) % this.ring.length] = i[s];
    this.end = Math.max(this.end, t + i.length);
  }
}
const mi = 0.15, gi = 4e-4, fi = 0.4, vi = 0.6;
function ve(e, t, i, s, n) {
  let r = 0;
  for (let v = 0; v < e.length; v++)
    r += e[v] * e[v];
  if (Math.sqrt(r / e.length) < gi)
    return null;
  const o = Math.min(Math.floor(t / i), Math.floor(e.length / 2)), a = Math.max(2, Math.floor(t / s)), l = e.length - o, h = new Float32Array(o + 1);
  h[0] = 1;
  let d = 0;
  for (let v = 1; v <= o; v++) {
    let g = 0;
    for (let b = 0; b < l; b++) {
      const y = e[b] - e[b + v];
      g += y * y;
    }
    d += g, h[v] = d ? g * v / d : 1;
  }
  let c = a;
  for (; c <= o && h[c] >= mi; )
    c++;
  if (c <= o) {
    for (; c + 1 <= o && h[c + 1] < h[c]; )
      c++;
    return t / jt(h, c, o);
  }
  if (!n)
    return null;
  const f = 2 ** (vi / 12), u = Math.max(a, Math.floor(t / (n * f))), p = Math.min(o - 1, Math.ceil(t / n * f));
  let m = -1;
  for (let v = u; v <= p; v++)
    (m < 0 || h[v] < h[m]) && (m = v);
  return m < 0 || h[m] >= fi ? null : t / jt(h, m, o);
}
function jt(e, t, i) {
  if (t <= 1 || t >= i)
    return t;
  const [s, n, r] = [e[t - 1], e[t], e[t + 1]], o = s - 2 * n + r;
  return o > 0 ? t + Math.max(-0.5, Math.min(0.5, (s - r) / (2 * o))) : t;
}
const be = 20, bi = 1.2, N = -80, yi = 0.1, Kt = 0.5, $i = 10, xi = 0.05, wi = 0.25, _i = 0.01, Mi = -3, Ai = 40, Si = 1e-4, At = 3.2, qt = [0.012, 0.019], vt = 0.08, Ei = 28, ki = 0.8, Ti = 0.12, Ci = 80, Wt = 0.7;
class Ri {
  constructor(t, i) {
    this.audio = t, this.microphone = i, this.disposed = !1, this.gainDbValue = 0, this.minHzValue = 60, this.maxHzValue = 3e3, this.level = N, this.buffer = new Float32Array(0), this.tailTimer = 0, this.lastTime = -1, this.lastPitch = { hz: 0, time: -1 / 0 }, this.playStarted = 0, this.recordings = /* @__PURE__ */ new Map(), this.exampleEnded = -1 / 0, this.volumeValue = 1, this.reverbAmount = 0;
  }
  /** The microphone is on */
  get running() {
    return this.mic !== void 0;
  }
  get playingExample() {
    return this.example !== void 0;
  }
  /** Input gain in dB, applied before level metering and pitch detection. */
  get gainDb() {
    return this.gainDbValue;
  }
  set gainDb(t) {
    this.gainDbValue = t, this.gain && (this.gain.gain.value = 10 ** (t / 20));
  }
  /** Sets the detection range; the analysis window follows the lowest pitch. */
  setRange(t, i) {
    this.minHzValue = t, this.maxHzValue = i, this.sizeWindow();
  }
  /** Asks for microphone access and starts listening. Rejects if access is denied or unavailable. */
  async start() {
    if (this.running)
      return;
    const t = await this.microphone();
    if (this.running || this.disposed)
      return;
    const i = this.context();
    i.resume(), this.mic = i.createMediaStreamSource(t), this.example || this.mic.connect(this.gain), this.analyse();
  }
  /**
   * Cuts the note played from `from` to `to` (audio clock, s, its first and last reading) from the
   * memory, for playing back with playYours(). Null if the memory doesn't hold it, or it is silent.
   */
  keepYours(t, i) {
    var l;
    const s = (l = this.memory) == null ? void 0 : l.cut(t - xi, i + wi);
    if (!s)
      return null;
    const n = s.clip.getChannelData(0);
    let r = 0;
    for (const h of n)
      r = Math.max(r, Math.abs(h));
    if (r < Si)
      return null;
    const o = Math.min(n.length, Math.round(_i * s.clip.sampleRate));
    for (let h = 0; h < o; h++)
      n[h] *= h / o;
    const a = Math.min(10 ** (Ai / 20), 10 ** (Mi / 20) / r);
    return { clip: s.clip, gain: a, lead: t - s.start };
  }
  /**
   * How far into the recording playing back the sound now heard is (s), allowing for the
   * output's latency; null while nothing plays.
   */
  playbackTime() {
    return !this.example || !this.ctx ? null : this.ctx.currentTime - this.outputLatency - this.playStarted;
  }
  /**
   * How long after the audio clock the speakers sound (s): a playback ended on the clock is still
   * heard this long (much longer over Bluetooth)
   */
  get outputLatency() {
    return this.ctx && (this.ctx.outputLatency || this.ctx.baseLatency) || 0;
  }
  /**
   * What the analyser heard from `from` to `to` (audio clock, s), microphone or recording, with
   * where it starts: for analysing a finished note again. Null if it isn't kept.
   */
  sound(t, i) {
    var n;
    const s = (n = this.memory) == null ? void 0 : n.cut(t, i);
    return s && { samples: s.clip.getChannelData(0), start: s.start, sampleRate: s.clip.sampleRate };
  }
  /** Plays a note kept by keepYours() like an example. */
  playYours(t) {
    this.play(t.clip, t.gain);
  }
  /** The audio clock (s), the frames' time base */
  get now() {
    var t;
    return ((t = this.ctx) == null ? void 0 : t.currentTime) ?? 0;
  }
  /** How long the reverb rings on after your note (s): the full tail at full reverb, none dry */
  get reverbTail() {
    return this.reverbAmount * At;
  }
  /**
   * Reverb on what plays back (your note and the examples), from 0 (dry) to 1 (full); the
   * analysis hears it dry.
   */
  get reverb() {
    return this.reverbAmount;
  }
  set reverb(t) {
    this.reverbAmount = Math.min(1, Math.max(0, t)), this.ctx && this.wet && this.wet.gain.setTargetAtTime(this.reverbAmount * Wt, this.ctx.currentTime, 0.03);
  }
  /** Loudness of what plays back to the speakers (your notes and the examples), 0–1; the analysis hears it unchanged. */
  get volume() {
    return this.volumeValue;
  }
  set volume(t) {
    this.volumeValue = Math.min(1, Math.max(0, t)), this.ctx && this.out && this.out.gain.setTargetAtTime(this.volumeValue, this.ctx.currentTime, 0.03);
  }
  /** Stops listening (the stream is the app's: it stays open); an example playing plays on. */
  stop() {
    var t;
    (t = this.mic) == null || t.disconnect(), this.mic = void 0, this.example || this.pause();
  }
  /** The module closed: everything of its own stopped and disconnected (the context is the app's) */
  dispose() {
    var t, i, s, n;
    this.disposed = !0, this.stop(), this.stopExample(), this.example = void 0, this.pause(), clearTimeout(this.tailTimer), (t = this.memory) == null || t.detach(), this.memory = void 0, (i = this.out) == null || i.disconnect(), (s = this.gain) == null || s.disconnect(), (n = this.tap) == null || n.disconnect();
  }
  /**
   * Plays an example recording (the first of `urls` that loads) through the speakers and analyses
   * it like the microphone, which is muted meanwhile. Call from a user gesture, as browsers
   * require for sound. Rejects if none of the files can be loaded. `prepare` gets the recording
   * once it has loaded, before it plays (to analyse it first); false from it cancels playing.
   */
  async playExample(t, i) {
    this.context().resume(), this.stopExample();
    const s = await this.load(t);
    i && !await i(s) || this.play(s);
  }
  /** Downloads and decodes a recording (the first of `urls` that loads) without playing it. */
  loadRecording(t) {
    return this.context(), this.load(t);
  }
  /** The pitch range searched (Hz), as set by setRange() */
  get range() {
    return { minHz: this.minHzValue, maxHz: this.maxHzValue };
  }
  /**
   * Plays a recording to the speakers (at `loudness`, a gain, and through the hall)
   * and to the analyser (as it is, dry), the microphone muted meanwhile.
   */
  play(t, i = 1) {
    var o;
    const s = this.context();
    s.resume(), this.stopExample();
    const n = s.createBufferSource();
    n.buffer = t;
    const r = s.createGain();
    r.gain.value = i, n.connect(r).connect(this.out), r.connect(this.hall()), n.connect(this.tap), (o = this.mic) == null || o.disconnect(), this.example = n, n.onended = () => {
      var a;
      this.example === n && (this.example = void 0, this.exampleEnded = s.currentTime, this.mic ? this.mic.connect(this.gain) : this.tailTimer = window.setTimeout(() => !this.example && !this.mic && this.pause(), Kt * 1e3), (a = this.onExampleEnd) == null || a.call(this));
    }, n.start(), this.playStarted = s.currentTime, this.analyse();
  }
  stopExample() {
    var t;
    (t = this.example) == null || t.stop();
  }
  /**
   * The reverb send, made on first use: high-passed, convolved with the hall and out to the
   * speakers only (beside the dry sound), so the analysis never hears it. Returns its input.
   */
  hall() {
    const t = this.ctx;
    if (!this.reverbSend) {
      this.reverbSend = t.createBiquadFilter(), this.reverbSend.type = "highpass", this.reverbSend.frequency.value = Ci;
      const i = t.createConvolver();
      i.buffer = zi(t), this.wet = t.createGain(), this.wet.gain.value = this.reverbAmount * Wt, this.reverbSend.connect(i).connect(this.wet).connect(this.out);
    }
    return this.reverbSend;
  }
  /**
   * The audio graph, made on first use: the microphone's input gain and the recordings played
   * meet in the tap, which feeds the analyser and the memory, so the memory holds exactly what
   * was analysed.
   */
  context() {
    if (!this.ctx) {
      this.ctx = this.audio, this.gain = this.ctx.createGain(), this.gainDb = this.gainDbValue, this.tap = this.ctx.createGain(), this.out = this.ctx.createGain(), this.out.gain.value = this.volumeValue, this.out.connect(this.ctx.destination), this.analyser = this.ctx.createAnalyser(), this.sizeWindow(), this.gain.connect(this.tap).connect(this.analyser);
      const t = new ui(this.ctx, $i);
      t.attach(this.tap).then(
        () => this.disposed ? t.detach() : this.memory = t,
        () => {
        }
      );
    }
    return this.ctx;
  }
  /** The first of the files that downloads and decodes; each is fetched only once. */
  async load(t) {
    for (const i of t) {
      let s = this.recordings.get(i);
      s || (s = fetch(i).then(async (n) => {
        if (!n.ok)
          throw new Error(`${n.status}`);
        return this.ctx.decodeAudioData(await n.arrayBuffer());
      }), this.recordings.set(i, s));
      try {
        return await s;
      } catch {
        this.recordings.delete(i);
      }
    }
    throw new Error("No recording");
  }
  /** Starts the analysis timer, from a fresh state, unless it runs already. */
  analyse() {
    clearTimeout(this.tailTimer), this.timerId === void 0 && (this.level = N, this.lastTime = -1, this.lastPitch = { hz: 0, time: -1 / 0 }, this.timerId = window.setInterval(() => this.detect(), be));
  }
  pause() {
    var t;
    window.clearInterval(this.timerId), this.timerId = void 0, (t = this.onLevel) == null || t.call(this, null);
  }
  sizeWindow() {
    if (!this.analyser || !this.ctx)
      return;
    const t = ye(this.ctx.sampleRate, this.minHzValue);
    this.analyser.fftSize = t, this.buffer = new Float32Array(t);
  }
  detect() {
    var c, f;
    const t = this.ctx;
    if (t.currentTime === this.lastTime)
      return;
    this.lastTime = t.currentTime, this.analyser.getFloatTimeDomainData(this.buffer);
    let i = 0, s = 0;
    for (let u = 0; u < this.buffer.length; u++) {
      const p = this.buffer[u];
      i = Math.max(i, Math.abs(p)), s += p * p;
    }
    const n = i > 0 ? 20 * Math.log10(i) : N;
    this.level = Math.max(n, this.level - bi, N), (c = this.onLevel) == null || c.call(this, this.level);
    const r = Math.sqrt(s / this.buffer.length), o = Math.max(N, r > 0 ? 20 * Math.log10(r) : N), a = t.currentTime - this.buffer.length / t.sampleRate / 2, l = a - this.lastPitch.time <= yi ? this.lastPitch.hz : void 0, h = ve(this.buffer, t.sampleRate, this.minHzValue, this.maxHzValue, l);
    h && (this.lastPitch = { hz: h, time: a });
    const d = this.example || a < this.exampleEnded + Kt ? "example" : "mic";
    (f = this.onFrame) == null || f.call(this, { time: a, hz: h, db: o, source: d });
  }
}
function ye(e, t) {
  return Math.min(32768, Math.max(1024, 2 ** Math.ceil(Math.log2(2.2 * e / t))));
}
function zi(e) {
  const t = e.sampleRate, i = Math.round((At + Math.max(...qt)) * t), s = e.createBuffer(2, i, t);
  for (let n = 0; n < 2; n++) {
    const r = s.getChannelData(n), o = Math.round(qt[n] * t);
    for (let d = 0; d < Ei; d++) {
      const c = Math.random() ** 1.5 * vt, f = Math.random() < 0.5 ? -1 : 1;
      r[o + Math.round(c * t)] += f * (0.3 + 0.7 * Math.random()) * (1 - c / vt);
    }
    let a = 0;
    for (let d = o; d < i; d++) {
      const c = (d - o) / t, f = Math.min(1, c / vt), u = Math.exp(-6.9 * c / At);
      a += (0.05 + 0.8 * Math.exp(-c / ki)) * (Math.random() * 2 - 1 - a), r[d] += a * f * u;
    }
    let l = 0;
    for (let d = 0; d < i; d++)
      l += r[d] * r[d];
    const h = Math.sqrt(Ti * t / l);
    for (let d = 0; d < i; d++)
      r[d] *= h;
  }
  return s;
}
const Yt = 0.01, Ni = 3, Oi = 0.015, Pi = 1, Li = 0.5, Zt = [-1, 4, 10, 4, -1].map((e) => e / 16), Jt = 60;
async function $e(e, t, i, s, n) {
  const r = e.points.filter((c) => c.midi !== null).map((c) => c.midi);
  if (!r.length)
    return null;
  const o = n * 2 ** ((xe(r) - 69) / 12), a = e.points[e.points.length - 1].t, l = (c) => Math.round((e.start + c - i) * s);
  if (l(0) < 0 || l(a) >= t.length)
    return null;
  const h = [];
  let d = null;
  for (let c = 0; c * Yt <= a; c++) {
    const f = c * Yt, u = l(f), m = Ii(t, u, s, d ?? o, d === null ? 1.5 : Pi);
    d = m;
    const v = s / (m ?? o);
    h.push({ t: f, midi: m ? 69 + 12 * Math.log2(m / n) : null, db: Hi(t, u, v, s) }), c % Jt === Jt - 1 && await new Promise((g) => setTimeout(g));
  }
  return h.some((c) => c.midi !== null) ? { ...e, points: Di(h), optimized: !0 } : null;
}
function Di(e) {
  const t = e.map((n, r) => {
    var a, l;
    const o = [(a = e[r - 1]) == null ? void 0 : a.midi, n.midi, (l = e[r + 1]) == null ? void 0 : l.midi];
    return n.midi !== null && o.every((h) => h != null) ? xe(o) : n.midi;
  }), i = Zt.length >> 1, s = t.map((n, r) => n === null ? null : Zt.reduce((o, a, l) => o + a * (t[r + l - i] ?? n), 0));
  return e.map((n, r) => ({ ...n, midi: s[r] }));
}
function Ii(e, t, i, s, n) {
  const r = 2 ** (n / 12), o = Math.max(2, Math.floor(i / (s * r))), a = Math.ceil(i / s * r), l = Math.round(Ni * i / s), h = t - Math.round((l + a) / 2);
  if (h < 0 || h + l + a + 1 >= e.length)
    return null;
  const d = (y) => {
    let $ = 0, A = 0;
    for (let M = h; M < h + l; M++) {
      const [k, C] = [e[M], e[M + y]];
      $ += k * C, A += k * k + C * C;
    }
    return A ? 2 * $ / A : 0;
  };
  let c = o, f = -1 / 0;
  const u = /* @__PURE__ */ new Map();
  for (let y = o; y <= a; y++) {
    const $ = d(y);
    u.set(y, $), $ > f && ([c, f] = [y, $]);
  }
  if (f < Li || c === o || c === a)
    return null;
  const [p, m, v] = [u.get(c - 1), f, u.get(c + 1)], g = p - 2 * m + v, b = g ? c + (p - v) / (2 * g) : c;
  return i / b;
}
function Hi(e, t, i, s) {
  const n = Math.round(i * Math.max(1, Math.ceil(Oi * s / i))), r = Math.max(0, t - Math.round(n / 2)), o = Math.min(e.length, r + n);
  let a = 0;
  for (let h = r; h < o; h++)
    a += e[h] * e[h];
  const l = Math.sqrt(a / Math.max(1, o - r));
  return Math.max(N, l > 0 ? 20 * Math.log10(l) : N);
}
function xe(e) {
  const t = [...e].sort((s, n) => s - n), i = t.length >> 1;
  return t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2;
}
const Vi = -42, Fi = 3, Ui = 0.4, Bi = 6, Gi = 1, ji = -52, Ki = 30, qi = 0.18, Wi = 0.3, Yi = 1.5, Zi = 0.35, Ji = 5, Xt = 0.15, Xi = 0.1, Qi = 1.5, ts = 25, es = 0.3, is = 6, ss = 3, ns = 10, rs = 0.3;
class we {
  constructor() {
    this.pending = [], this.start = 0, this.source = "mic", this.loudest = -1 / 0, this.history = [];
  }
  get recording() {
    var t;
    return !!((t = this.take) != null && t.live);
  }
  /** Puts a better analysis of a finished take in its place (also as the one kept to go back to). */
  replace(t, i) {
    this.take === t && (this.take = i), this.previous === t && (this.previous = i);
  }
  /** Forgets the current note (instrument changed, switched off). */
  reset() {
    this.take = this.previous = this.quietSince = this.unpitchedSince = this.sustained = void 0, this.pending = [], this.history = [];
  }
  get stopDb() {
    return Math.max(ji, this.loudest - Ki);
  }
  /** Takes the next frame; true when the take changed. */
  push(t, i) {
    const s = t.hz ? 69 + 12 * Math.log2(t.hz / i) : null;
    for (this.finished = void 0, this.history.push({ time: t.time, midi: s, db: t.db }); this.history[0].time < t.time - Gi; )
      this.history.shift();
    if (this.sustained) {
      const { midi: o, stopDb: a } = this.sustained;
      if (t.db >= a && (s === null || Math.abs(s - o) < Yi))
        return !1;
      this.sustained = void 0;
    }
    if (!this.recording)
      return t.db < Vi || s === null ? (this.pending = [], !1) : (this.pending.length || ([this.start, this.source] = [t.time, t.source]), this.pending.push({ t: t.time - this.start, midi: s, db: t.db }), this.pending.length < Fi ? !1 : (this.begin(), !0));
    const n = t.time - this.start, r = [...this.take.points, { t: n, midi: s, db: t.db }];
    if (this.loudest = Math.max(this.loudest, t.db), t.db >= this.stopDb ? this.quietSince = void 0 : this.quietSince ?? (this.quietSince = n), s !== null ? this.unpitchedSince = void 0 : this.unpitchedSince ?? (this.unpitchedSince = n), this.quietSince !== void 0 && n - this.quietSince >= qi) {
      const o = this.quietSince;
      this.finish(r.filter((a) => a.t < o));
    } else if (this.unpitchedSince !== void 0 && n - this.unpitchedSince >= Wi) {
      const o = this.unpitchedSince;
      this.finish(r.filter((a) => a.t < o));
    } else if (n >= Ji) {
      const o = r.filter((a) => a.midi !== null).map((a) => a.midi);
      this.sustained = o.length ? { midi: lt(o), stopDb: this.stopDb } : void 0, this.finish(r);
    } else
      this.take = { ...this.take, points: r };
    return !0;
  }
  /** Starts a take from the readings pending, after the readings of its attack. */
  begin() {
    const t = this.attack();
    if (t.length) {
      const i = this.start - t[0].time;
      this.start = t[0].time, this.pending = [
        ...t.map(({ time: s, midi: n, db: r }) => ({ t: s - this.start, midi: n, db: r })),
        ...this.pending.map((s) => ({ ...s, t: s.t + i }))
      ];
    }
    this.previous = this.take, this.take = { points: this.pending, live: !0, start: this.start, source: this.source }, this.loudest = Math.max(...this.pending.map((i) => i.db)), this.pending = [], this.quietSince = this.unpitchedSince = void 0;
  }
  /**
   * The readings just before the take's start that were already the note: back from the start,
   * while they stand PRE_ROLL_ABOVE_DB above the quietest of the last HISTORY_S, for at most
   * PRE_ROLL_S, and from the first of them with a pitch (before it, it was only noise).
   */
  attack() {
    const t = this.history.filter((n) => n.time < this.start);
    if (!t.length)
      return [];
    const i = Math.min(...t.map((n) => n.db));
    let s = t.length;
    for (; s > 0 && t[s - 1].time >= this.start - Ui && t[s - 1].db >= i + Bi; )
      s--;
    for (; s < t.length && t[s].midi === null; )
      s++;
    return t.slice(s);
  }
  finish(t) {
    (t.length ? t[t.length - 1].t : 0) < Zi ? this.take = this.previous : this.take = this.finished = { ...this.take, points: t, live: !1 }, this.quietSince = this.unpitchedSince = void 0;
  }
}
function st(e) {
  const { points: t } = e, i = t.filter((g) => g.midi !== null).map((g) => g.midi);
  if (!i.length)
    return null;
  const s = lt(i), n = Math.round(s), r = t.map((g) => g.midi !== null && Math.abs(g.midi - s) <= Qi ? (g.midi - n) * 100 : null), o = r.map((g, b) => {
    if (g === null)
      return null;
    const [y, $] = [r[b - 1] ?? null, r[b + 1] ?? null], M = (y !== null && $ !== null ? [y, g, $] : $ !== null ? [g, $, r[b + 2] ?? null] : [y, r[b - 2] ?? null, g]).filter((C) => C !== null);
    if (M.length < 3)
      return g;
    const k = lt(M);
    return Math.abs(g - k) > ts ? k : g;
  }), a = t[t.length - 1].t, l = a - Xi, h = (g) => {
    const { t: b } = t[g];
    return l - Xt < 0.2 || b >= Xt && b <= l;
  }, d = o.filter((g, b) => g !== null && h(b)), c = d.length ? d.reduce((g, b) => g + b, 0) / d.length : 0, f = (g, b) => {
    const y = [];
    let [$, A, M, k] = [0, 0, 0, 0];
    return g.forEach((C, O) => {
      const { t: F } = t[O];
      for (; A < t.length && t[A].t <= F + b / 2; A++)
        g[A] !== null && ([M, k] = [M + g[A], k + 1]);
      for (; t[$].t < F - b / 2; $++)
        g[$] !== null && ([M, k] = [M - g[$], k - 1]);
      C !== null && h(O) && y.push({ t: F, d: C - M / k });
    }), y;
  };
  let u = null, p = null, m = null;
  const v = f(o, es);
  if (v.length > 8) {
    const g = Math.sqrt(v.reduce((y, { d: $ }) => y + $ * $, 0) / v.length), b = 2 * Math.SQRT2 * g;
    if (b >= is)
      if (p = as(bt(v)), p) {
        u = 2 * Qt(bt(f(o, 2 / p)), p);
        const y = f(
          t.map(($) => $.db),
          2 / p
        );
        y.length > 8 && (m = 2 * Qt(bt(y), p));
      } else
        u = b;
  }
  return { target: n, cents: o, mean: c, width: u, rate: p, levelSwing: m, duration: a };
}
function os(e) {
  return e.map((t, i) => {
    const s = e[i - 1] ?? t, n = e[i + 1] ?? t;
    return (s + 2 * t + n) / 4;
  });
}
function bt(e) {
  const t = Math.max(5e-3, lt(e.slice(1).map((n, r) => n.t - e[r].t)) || 0.02), i = [];
  let s = 0;
  for (let n = e[0].t; n <= e[e.length - 1].t + 1e-9; n += t) {
    for (; s < e.length - 2 && e[s + 1].t < n; )
      s++;
    const [r, o] = [e[s], e[s + 1] ?? e[s]], a = o.t > r.t ? Math.min(1, Math.max(0, (n - r.t) / (o.t - r.t))) : 0;
    i.push(r.d + (o.d - r.d) * a);
  }
  return { step: t, values: i };
}
function as({ step: e, values: t }) {
  const i = Math.max(2, Math.floor(1 / (ns * e))), s = Math.min(Math.ceil(1 / (ss * e)), Math.floor(t.length / 2));
  if (s <= i + 1)
    return null;
  const n = (p) => {
    let [m, v, g] = [0, 0, 0];
    for (let b = 0; b + p < t.length; b++)
      m += t[b] * t[b + p], v += t[b] * t[b], g += t[b + p] * t[b + p];
    return v && g ? m / Math.sqrt(v * g) : 0;
  }, r = Array.from({ length: s + 2 }, (p, m) => m >= i - 1 ? n(m) : 0), o = [];
  for (let p = i; p <= s; p++)
    r[p] >= r[p - 1] && r[p] >= r[p + 1] && o.push(p);
  if (!o.length)
    return null;
  const a = Math.max(...o.map((p) => r[p]));
  if (a < rs)
    return null;
  const l = o.find((p) => r[p] >= a * 0.85), [h, d, c] = [r[l - 1], r[l], r[l + 1]], f = h - 2 * d + c;
  return 1 / ((f ? l + (h - c) / (2 * f) : l) * e);
}
function Qt({ step: e, values: t }, i) {
  const s = 1 / (i * e), n = Math.max(1, Math.floor(t.length / s));
  let r = 0;
  for (let o = 0; o < n; o++) {
    const [a, l] = [Math.round(o * s), Math.min(t.length, Math.round((o + 1) * s))];
    let [h, d] = [0, 0];
    for (let c = a; c < l; c++) {
      const f = 2 * Math.PI * i * c * e;
      h += t[c] * Math.sin(f), d += t[c] * Math.cos(f);
    }
    r += 2 * Math.hypot(h, d) / Math.max(1, l - a);
  }
  return r / n;
}
function lt(e) {
  const t = [...e].sort((s, n) => s - n), i = t.length >> 1;
  return t.length % 2 ? t[i] : (t[i - 1] + t[i]) / 2;
}
const ls = 0.1, hs = 0.5, te = 50;
async function cs(e, t, i, s) {
  const n = e.sampleRate, r = new Float32Array(e.length + Math.round(hs * n));
  for (let u = 0; u < e.numberOfChannels; u++) {
    const p = e.getChannelData(u);
    for (let m = 0; m < p.length; m++)
      r[m] += p[m] / e.numberOfChannels;
  }
  const o = ye(n, t), a = new we(), l = [];
  let h = { hz: 0, time: -1 / 0 }, d = 0;
  for (let u = o; u <= r.length; u += Math.round(be / 1e3 * n), d++) {
    const p = r.subarray(u - o, u);
    let m = 0;
    for (const A of p)
      m += A * A;
    const v = Math.sqrt(m / o), g = Math.max(N, v > 0 ? 20 * Math.log10(v) : N), b = (u - o / 2) / n, y = b - h.time <= ls ? h.hz : void 0, $ = ve(p, n, t, i, y);
    $ && (h = { hz: $, time: b }), a.push({ time: b, hz: $, db: g, source: "example" }, s), a.finished && l.push(a.finished), d % te === te - 1 && await new Promise((A) => setTimeout(A));
  }
  const c = (u) => u.points[u.points.length - 1].t, f = l.sort((u, p) => c(p) - c(u))[0];
  return f ? await $e(f, r, 0, n, s) ?? { ...f, optimized: !0 } : null;
}
const ds = {
  name: "Vibralizer",
  lead: "Play a long note and see your vibrato",
  close: "Close (Esc)",
  listen: "Listen",
  listening: "Listening",
  listenTitle: "Listen to the microphone (Space)",
  noMicrophone: "No microphone: allow it in the browser to analyse your notes",
  input: "Input",
  reverb: "Reverb",
  ready: "Play a long note",
  readyLead: "Hold it for two seconds or more, with your vibrato, and it is drawn here",
  off: "Press Listen, then play a long note",
  offLead: "Or play one of the recordings to see a master’s vibrato",
  recording: "Recording",
  playingYours: "Your note",
  analysing: "Analysing…",
  loading: "Loading…",
  loadFailed: "This recording could not be loaded",
  pitch: "Pitch",
  level: "Sound",
  seconds: "s",
  inTune: "In tune",
  sharp: "sharp",
  flat: "flat",
  stats: "Your note",
  width: "Width",
  widthNote: "peak to peak",
  rate: "Speed",
  rateNote: "swings a second",
  tuning: "Tuning",
  tuningNote: "average",
  swell: "Swell",
  swellNote: "with the vibrato",
  none: "–",
  noVibrato: "No vibrato",
  compare: "Style",
  compareTitle: "Compared with",
  fitsAll: "Fits this style",
  fitsMostly: "Nearly there",
  fitsNot: "Not this style yet",
  noVibratoYet: "Play a note with vibrato to compare it",
  optionalNote: "In this style vibrato is optional: a steady note is fine too",
  tooFast: "a little slower",
  tooSlow: "a little faster",
  tooWide: "a little narrower",
  tooNarrow: "a little wider",
  advice: (e) => `Try it ${e.join(" and ")}`,
  rateRange: (e, t) => `${e}–${t} per second`,
  widthRange: (e, t) => `${e}–${t} ¢`,
  recordings: "Recordings",
  yours: "Your notes",
  yoursEmpty: "Each note you play is kept here to play back",
  masters: "Masters",
  you: (e) => `You, ${e}`,
  play: "Play",
  stop: "Stop",
  styles: {
    romantic: "Romantic",
    intense: "Showpiece",
    classical: "Classical",
    ornamental: "Baroque",
    folk: "Folk",
    fiddle: "Fiddle",
    klezmer: "Klezmer",
    jazz: "Jazz & tango"
  },
  notes: ["C", "C♯", "D", "E♭", "E", "F", "F♯", "G", "A♭", "A", "B♭", "B"]
}, ps = {
  name: "Vibralizer",
  lead: "Spiel einen langen Ton und sieh dein Vibrato",
  close: "Schließen (Esc)",
  listen: "Zuhören",
  listening: "Hört zu",
  listenTitle: "Dem Mikrofon zuhören (Leertaste)",
  noMicrophone: "Kein Mikrofon: erlaube es im Browser, damit deine Töne analysiert werden",
  input: "Eingang",
  reverb: "Hall",
  ready: "Spiel einen langen Ton",
  readyLead: "Halte ihn zwei Sekunden oder länger, mit deinem Vibrato, dann wird er hier gezeichnet",
  off: "Drück auf Zuhören und spiel einen langen Ton",
  offLead: "Oder spiel eine der Aufnahmen ab und sieh das Vibrato eines großen Geigers",
  recording: "Aufnahme",
  playingYours: "Dein Ton",
  analysing: "Wird analysiert…",
  loading: "Wird geladen…",
  loadFailed: "Diese Aufnahme ließ sich nicht laden",
  pitch: "Tonhöhe",
  level: "Lautstärke",
  seconds: "s",
  inTune: "Sauber",
  sharp: "zu hoch",
  flat: "zu tief",
  stats: "Dein Ton",
  width: "Breite",
  widthNote: "Spitze zu Spitze",
  rate: "Tempo",
  rateNote: "Schwingungen pro Sekunde",
  tuning: "Intonation",
  tuningNote: "im Mittel",
  swell: "Schwellen",
  swellNote: "mit dem Vibrato",
  none: "–",
  noVibrato: "Kein Vibrato",
  compare: "Stil",
  compareTitle: "Verglichen mit",
  fitsAll: "Passt zu diesem Stil",
  fitsMostly: "Fast geschafft",
  fitsNot: "Noch nicht dieser Stil",
  noVibratoYet: "Spiel einen Ton mit Vibrato, um ihn zu vergleichen",
  optionalNote: "In diesem Stil ist Vibrato freiwillig: ein ruhiger Ton passt auch",
  tooFast: "etwas langsamer",
  tooSlow: "etwas schneller",
  tooWide: "etwas schmaler",
  tooNarrow: "etwas breiter",
  advice: (e) => `Versuch es ${e.join(" und ")}`,
  rateRange: (e, t) => `${e}–${t} pro Sekunde`,
  widthRange: (e, t) => `${e}–${t} ¢`,
  recordings: "Aufnahmen",
  yours: "Deine Töne",
  yoursEmpty: "Jeder Ton, den du spielst, bleibt hier zum Anhören",
  masters: "Große Geiger",
  you: (e) => `Du, ${e}`,
  play: "Abspielen",
  stop: "Stopp",
  styles: {
    romantic: "Romantik",
    intense: "Virtuosenstück",
    classical: "Klassik",
    ornamental: "Barock",
    folk: "Volksmusik",
    fiddle: "Fiddle",
    klezmer: "Klezmer",
    jazz: "Jazz & Tango"
  },
  notes: ["C", "Cis", "D", "Es", "E", "F", "Fis", "G", "As", "A", "B", "H"]
};
function yt(e) {
  return e === "de" ? ps : ds;
}
var us = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, E = (e, t, i, s) => {
  for (var n = s > 1 ? void 0 : s ? ms(t, i) : t, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (n = (s ? o(t, i, n) : o(n)) || n);
  return s && n && us(t, i, n), n;
};
const gs = 180, fs = 3e3, vs = 350, ee = 0.1, bs = 0.5, ys = 6, $s = 2, $t = [25, 50, 100, 200], ht = 5, xs = 40, ie = 36, W = 12, ws = [3, 10], _s = [0, 120], nt = -12, xt = 24, se = -60, ne = "violinhero-vibralizer", re = [
  { id: "heifetz", name: "Jascha Heifetz", file: "heifetz.wav" },
  { id: "oistrakh", name: "David Oistrakh", file: "ostrakh.wav" },
  { id: "hirschhorn", name: "Philippe Hirschhorn", file: "horschhorn.wav" },
  { id: "vengerov", name: "Maxim Vengerov", file: "vengerov.wav" }
], Ms = R`<rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6" />`, As = R`<path class="fill" d="M8 5.5v13l10.5-6.5z" />`, Ss = R`<rect class="fill" x="7" y="7" width="10" height="10" rx="1.5" />`, Es = R`<path d="M6 6l12 12M18 6L6 18" />`, ks = R`<path d="M3 12c1.8-6 4.2-6 6 0s4.2 6 6 0 4.2-6 6 0" />`;
let S = class extends J {
  constructor() {
    super(...arguments), this.texts = yt("en"), this.running = !1, this.micFailed = !1, this.kept = [], this.gainDb = 0, this.reverb = 0.3, this.styleId = "romantic", this.size = { width: 0, height: 0 }, this.recorder = new we(), this.reference = 440, this.replaying = !1, this.playLead = 0, this.deafUntil = 0, this.masterTakes = /* @__PURE__ */ new Map(), this.sizeObserver = new ResizeObserver(([e]) => {
      const { width: t, height: i } = e.contentRect;
      (Math.abs(t - this.size.width) > 0.5 || Math.abs(i - this.size.height) > 0.5) && (this.size = { width: t, height: i });
    }), this.frame = 0, this.follow = () => {
      var t;
      cancelAnimationFrame(this.frame);
      const e = ((t = this.engine) == null ? void 0 : t.playbackTime()) ?? null;
      if (!this.playing || !this.replaying || e === null) {
        this.playhead = void 0;
        return;
      }
      this.playhead = e - this.playLead, this.frame = requestAnimationFrame(this.follow);
    }, this.onKeyDown = (e) => {
      if (e.key !== " " || e.repeat || e.ctrlKey || e.metaKey || e.altKey)
        return;
      const t = e.composedPath()[0];
      t instanceof HTMLElement && t.closest("button, input, select, textarea, a") || (e.preventDefault(), this.toggleListening());
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this.onKeyDown);
  }
  disconnectedCallback() {
    var e, t;
    super.disconnectedCallback(), window.removeEventListener("keydown", this.onKeyDown), this.sizeObserver.disconnect(), cancelAnimationFrame(this.frame), (e = this.stopLanguage) == null || e.call(this), (t = this.engine) == null || t.dispose(), this.engine = void 0;
  }
  willUpdate(e) {
    e.has("host") && this.host && this.connectHost();
  }
  firstUpdated() {
    const e = this.renderRoot.querySelector(".plot");
    e && this.sizeObserver.observe(e);
  }
  connectHost() {
    const e = this.host;
    this.texts = yt(e.language), this.stopLanguage = e.onLanguage((s) => this.texts = yt(s)), this.reference = e.referenceHz || 440, Bt.includes(e.vibratoStyle) && (this.styleId = e.vibratoStyle), this.loadSettings();
    const t = new Ri(e.context, () => e.microphone()), i = this.reference / 440;
    t.setRange(gs * i, fs * i), t.gainDb = this.gainDb, t.reverb = this.reverb, t.onLevel = (s) => this.showLevel(s), t.onExampleEnd = () => {
      this.playing = void 0, this.playhead = void 0, this.deafUntil = t.now + bs + t.outputLatency + t.reverbTail;
    }, t.onFrame = (s) => {
      if (this.replaying && s.source === "example" || s.source === "mic" && (this.playing || s.time < this.deafUntil) || !this.recorder.push(s, this.reference))
        return;
      const n = this.recorder.finished;
      n && window.setTimeout(() => this.settle(n), vs), this.recorder.take !== this.take && (this.shown = void 0), this.take = this.recorder.take, this.analysis = this.take ? st(this.take) : void 0;
    }, this.engine = t;
  }
  /** The input level, straight onto the meter (50 times a second: not worth a render) */
  showLevel(e) {
    const t = this.renderRoot.querySelector(".meter");
    if (!t)
      return;
    const i = e === null ? 0 : Math.max(0, Math.min(1, (e - se) / -se));
    t.style.setProperty("--level", `${(i * 100).toFixed(1)}%`);
  }
  async toggleListening() {
    const e = this.engine;
    if (e) {
      if (this.running) {
        e.stop(), this.running = !1;
        return;
      }
      this.micFailed = !1;
      try {
        await e.start(), this.running = e.running;
      } catch {
        this.micFailed = !0;
      }
    }
  }
  /**
   * A note finished: one from the microphone kept to play back, and every note analysed again
   * from its sound, shown in place of the live readings if it is still the one shown
   */
  async settle(e) {
    const t = this.engine;
    if (!t)
      return;
    const i = e.start + e.points[e.points.length - 1].t;
    if (e.source === "mic") {
      const o = t.keepYours(e.start, i);
      if (o) {
        const a = (/* @__PURE__ */ new Date()).toLocaleTimeString(this.host.language, { hour: "2-digit", minute: "2-digit", second: "2-digit" }), l = { id: `you-${e.start.toFixed(3)}`, time: a, yours: o, take: e };
        this.kept = [l, ...this.kept].slice(0, ys), this.take === e && (this.shown = l.id);
      }
    }
    const s = t.sound(e.start - ee, i + ee), r = s && await $e(e, s.samples, s.start, s.sampleRate, this.reference) || { ...e, optimized: !0 };
    this.recorder.replace(e, r), this.kept = this.kept.map((o) => o.take === e ? { ...o, take: r } : o), this.take === e && (this.take = r, this.analysis = st(r));
  }
  stopPlaying() {
    var e;
    (e = this.engine) == null || e.stopExample(), this.playing = void 0, this.playhead = void 0;
  }
  /** One of your notes played back, shown at once with a needle following it */
  playKept(e) {
    var i;
    const t = this.engine;
    if (t) {
      if (((i = this.playing) == null ? void 0 : i.id) === e.id)
        return this.stopPlaying();
      this.failed = void 0, this.recorder.reset(), this.show(e.take, e.id, e.yours.lead), this.playing = { id: e.id, loading: !1 }, t.playYours(e.yours), this.follow();
    }
  }
  /** A master's held note: analysed whole before it plays, so it shows at once */
  playMaster(e) {
    var n;
    const t = this.engine;
    if (!t)
      return;
    if (((n = this.playing) == null ? void 0 : n.id) === e.id)
      return this.stopPlaying();
    this.failed = void 0, this.recorder.reset(), this.replaying = !1, this.playing = { id: e.id, loading: !0 };
    const i = () => {
      var r;
      return ((r = this.playing) == null ? void 0 : r.id) === e.id;
    }, s = new URL(`${this.host.assets}sounds/${e.file}`, document.baseURI).href;
    t.playExample([s], async (r) => {
      let o = this.masterTakes.get(e.id);
      if (!o) {
        const { minHz: l, maxHz: h } = t.range;
        o = cs(r, l, h, this.reference).catch(() => null), this.masterTakes.set(e.id, o);
      }
      const a = await o;
      return i() ? (a ? this.show(a, e.id, a.start) : [this.take, this.analysis, this.shown] = [void 0, void 0, e.id], this.playing = { id: e.id, loading: !1 }, !0) : !1;
    }).then(() => i() && this.follow()).catch(() => {
      i() && (this.playing = void 0, this.failed = e.id);
    });
  }
  show(e, t, i) {
    this.take = e, this.analysis = st(e), this.shown = t, this.replaying = !0, this.playLead = i;
  }
  setGain(e) {
    this.gainDb = e, this.engine && (this.engine.gainDb = e), this.saveSettings();
  }
  setReverb(e) {
    this.reverb = e, this.engine && (this.engine.reverb = e), this.saveSettings();
  }
  setStyle(e) {
    this.styleId = e, this.saveSettings();
  }
  loadSettings() {
    try {
      const e = JSON.parse(localStorage.getItem(ne) ?? "{}");
      Number.isFinite(e.gainDb) && (this.gainDb = Math.max(nt, Math.min(xt, e.gainDb))), Number.isFinite(e.reverb) && (this.reverb = Math.max(0, Math.min(1, e.reverb)));
    } catch {
    }
  }
  saveSettings() {
    try {
      localStorage.setItem(ne, JSON.stringify({ gainDb: this.gainDb, reverb: this.reverb }));
    } catch {
    }
  }
  render() {
    const e = this.texts;
    return _`
      <div class="vz">
        <header class="head">
          <span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true">${ks}</svg></span>
          <span class="titles">
            <h1 aria-label=${`${Rt().app.name} ${e.name}`}>${Rt().app.name} <span class="tool-place">${e.name}</span></h1>
            <span class="lead">${e.lead}</span>
          </span>
          <button class="round close" title=${e.close} aria-label=${e.close} @click=${() => this.host.close()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">${Es}</svg>
          </button>
        </header>
        <div class="body">
          ${this.graphCard()}
          <div class="side">${this.controlsCard()} ${this.recordingsCard()} ${this.styleCard()}</div>
        </div>
      </div>
    `;
  }
  /** The note: its name and tuning above the graphs of its pitch and its sound */
  graphCard() {
    var o;
    const e = this.texts, { take: t, analysis: i } = this, s = !!(t != null && t.live) && t.source === "mic", n = i ? this.noteName(i.target) : "", r = this.shownName();
    return _`
      <section class="card graph">
        <div class="graph-head">
          <span class="note">${n || _`<span class="muted">${e.none}</span>`}</span>
          ${i && t && !t.live ? this.offset(i.mean) : w}
          <span class="spacer"></span>
          ${s ? _`<span class="pill rec">● ${e.recording}</span>` : (o = this.playing) != null && o.loading ? _`<span class="pill">${e.loading}</span>` : r ? _`<span class="pill ${this.playing ? "on" : ""}">${this.playing ? "▶ " : ""}${r}</span>` : this.running ? _`<span class="pill ready">● ${e.listening}</span>` : w}
        </div>
        ${this.stats()}
        <div class="plot">${this.plot()}</div>
      </section>
    `;
  }
  shownName() {
    const e = this.shown;
    if (!e)
      return "";
    const t = re.find((s) => s.id === e);
    if (t)
      return t.name;
    const i = this.kept.find((s) => s.id === e);
    return i ? this.texts.you(i.time) : "";
  }
  noteName(e) {
    return `${this.texts.notes[(e % 12 + 12) % 12]}${Math.floor(e / 12) - 1}`;
  }
  offset(e) {
    const t = this.texts, i = Math.round(e), s = Math.abs(e) < ht ? t.inTune : `${i > 0 ? "+" : "−"}${Math.abs(i)} ¢ ${i > 0 ? t.sharp : t.flat}`;
    return _`<span class="offset" style="--hue: ${wt(e)}">${s}</span>`;
  }
  /** The graphs: pitch (cents from the note) above, the sound's level below, one time axis */
  plot() {
    const e = this.texts, { width: t, height: i } = this.size, { take: s, analysis: n } = this;
    if (!t || !i)
      return w;
    if (!s || !n || s.points.length < 2)
      return _`<div class="empty">
        <svg viewBox="0 0 120 40" aria-hidden="true"><path d="M4 20c9-24 19-24 28 0s19 24 28 0 19-24 28 0 19 24 28 0" /></svg>
        <strong>${this.failed ? e.loadFailed : this.running ? e.ready : e.off}</strong>
        <span>${this.failed ? "" : this.running ? e.readyLead : e.offLead}</span>
      </div>`;
    const { points: r } = s, o = r[r.length - 1].t, a = s.live ? Math.max($s, Math.ceil(o + 0.25)) : Math.max(o, 0.5), l = 44, h = 14, d = 26, c = 10, f = 22, u = Math.max(40, (i - c - f - d) * 0.64), p = c + u + d, m = Math.max(24, i - f - p), v = (x) => l + x / a * (t - l - h), g = n.cents.filter((x) => x !== null).map(Math.abs).sort((x, z) => x - z), b = Math.max(g[Math.floor(g.length * 0.95)] ?? 0, Math.abs(n.mean) + (n.width ?? 0) / 2), y = $t.find((x) => x >= b * 1.1) ?? $t[$t.length - 1], $ = (x) => c + (y - Math.max(-y, Math.min(y, x))) / (2 * y) * u, A = !s.live && s.optimized, M = r.map((x) => x.t), k = Cs(M, n.cents), C = [];
    let O = [];
    k.forEach((x, z) => {
      x === null ? (O.length > 1 && C.push(O), O = []) : O.push([v(M[z]), $(x)]);
    }), O.length > 1 && C.push(O);
    const F = os(r.map((x) => x.db)), _e = Math.max(...F), dt = Math.ceil(_e / 6) * 6, Me = dt - ie, Ae = (x) => p + (dt - Math.max(Me, Math.min(dt, x))) / ie * m, Ct = F.map((x, z) => [v(M[z]), Ae(x)]), Se = `${_t(Ct)}L${v(M[M.length - 1]).toFixed(1)},${(p + m).toFixed(1)}L${v(M[0]).toFixed(1)},${(p + m).toFixed(1)}Z`, Ee = Array.from({ length: Math.floor(a / (a > 3 ? 1 : 0.5)) + 1 }, (x, z) => z * (a > 3 ? 1 : 0.5)).filter((x) => v(x) < t - h - 18), it = n.width && n.width >= W ? n.width : 0, ke = [y, y / 2, 0, -y / 2, -y], j = this.playhead;
    return _`<svg class="chart ${A ? "ink" : "live"}" width=${t} height=${i} viewBox="0 0 ${t} ${i}" role="img" aria-label=${e.pitch}>
      <defs>
        <linearGradient id="zone" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${$(y)} y2=${$(-y)}>
          ${Array.from({ length: 25 }, (x, z) => {
      const Te = y - 2 * y * z / 24;
      return R`<stop offset=${z / 24} style="stop-color: hsl(${wt(Te)} 70% var(--m-hue-l, 42%))" />`;
    })}
        </linearGradient>
      </defs>
      <text class="axis-name" x=${l} y=${c - 1}>${e.pitch}</text>
      ${ke.map(
      (x) => R`<line class=${x === 0 ? "zero" : "grid"} x1=${l} x2=${t - h} y1=${$(x)} y2=${$(x)} />
          <text class="tick" x=${l - 6} y=${$(x) + 4} text-anchor="end">${x > 0 ? "+" : x < 0 ? "−" : ""}${Math.abs(x)}</text>`
    )}
      ${it && A ? R`<rect class="swing" x=${l} width=${t - l - h} y=${$(n.mean + it / 2)} height=${Math.max(1, $(n.mean - it / 2) - $(n.mean + it / 2))} />` : w}
      ${C.map((x) => R`<path class="trace" d=${_t(x)} />`)}
      ${s.live ? w : R`<line class="mean" x1=${l} x2=${t - h} y1=${$(n.mean)} y2=${$(n.mean)} />`}
      <text class="axis-name" x=${l} y=${p - 6}>${e.level}</text>
      <line class="grid" x1=${l} x2=${t - h} y1=${p + m} y2=${p + m} />
      <path class="level-area" d=${Se} />
      <path class="level" d=${_t(Ct)} />
      ${Ee.map((x) => R`<text class="tick" x=${v(x)} y=${i - 5} text-anchor="middle">${Ts(x)}</text>`)}
      <text class="tick unit" x=${t - h} y=${i - 5} text-anchor="end">${e.seconds}</text>
      ${j !== void 0 && j >= 0 && j <= o ? R`<line class="playhead" x1=${v(j)} x2=${v(j)} y1=${c} y2=${p + m} />` : w}
    </svg>`;
  }
  /** The listening key, the input (its level under the gain) and the reverb on playbacks */
  controlsCard() {
    const e = this.texts;
    return _`
      <section class="card controls">
        <button class="listen ${this.running ? "on" : ""}" role="switch" aria-checked=${this.running} title=${e.listenTitle} @click=${() => void this.toggleListening()}>
          <svg viewBox="0 0 24 24" aria-hidden="true">${Ms}</svg>
          <span>${this.running ? e.listening : e.listen}</span>
        </button>
        <label class="field">
          <span class="label">${e.input} <b>${this.gainDb > 0 ? "+" : ""}${this.gainDb} dB</b></span>
          <span class="gain">
            <span class="meter"></span>
            <input
              class="range"
              type="range"
              min=${nt}
              max=${xt}
              .value=${String(this.gainDb)}
              style="--fill: ${(this.gainDb - nt) / (xt - nt) * 100}%"
              @input=${(t) => this.setGain(Number(t.target.value))}
              @dblclick=${() => this.setGain(0)}
            />
          </span>
        </label>
        <label class="field">
          <span class="label">${e.reverb} <b>${Math.round(this.reverb * 100)} %</b></span>
          <input
            class="range"
            type="range"
            min="0"
            max="100"
            .value=${String(Math.round(this.reverb * 100))}
            style="--fill: ${this.reverb * 100}%"
            @input=${(t) => this.setReverb(Number(t.target.value) / 100)}
          />
        </label>
        ${this.micFailed ? _`<p class="note error">${e.noMicrophone}</p>` : w}
      </section>
    `;
  }
  /** The note's numbers, a row under its name: the vibrato's width and speed, the tuning, the swell */
  stats() {
    const e = this.texts, t = this.take && !this.take.live ? this.analysis : void 0, i = !!(t != null && t.width) && t.width >= W, s = (n, r, o, a = "") => _`<div class="stat" style=${a}><span class="stat-name">${n}</span><span class="stat-value">${r}</span><span class="stat-note">${o}</span></div>`;
    return _`
        <div class="stats" aria-label=${e.stats}>
          ${s(e.width, i ? `${Math.round(t.width)} ¢` : t ? e.noVibrato : e.none, e.widthNote)}
          ${s(e.rate, i && t.rate ? t.rate.toFixed(1) : e.none, e.rateNote)}
          ${s(
      e.tuning,
      t ? Math.abs(t.mean) < ht ? e.inTune : `${t.mean > 0 ? "+" : "−"}${Math.abs(Math.round(t.mean))} ¢` : e.none,
      e.tuningNote,
      t ? `--hue: ${wt(t.mean)}` : ""
    )}
          ${s(e.swell, i && t.levelSwing !== null ? `${t.levelSwing.toFixed(1)} dB` : e.none, e.swellNote)}
        </div>
    `;
  }
  /** The vibrato against a style's speed and width (vibrato-style.ts, as Violin Hero scores it) */
  styleCard() {
    const e = this.texts, t = me[this.styleId], i = this.take && !this.take.live ? this.analysis : void 0, s = !!(i != null && i.width) && i.width >= W && !!i.rate, n = s ? oi(t, i.rate, i.width) : 0, r = s ? hi(t, i.rate, i.width) : void 0, o = r ? [r.fast > 0.05 ? e.tooFast : "", r.slow > 0.05 ? e.tooSlow : "", r.wide > 0.05 ? e.tooWide : "", r.narrow > 0.05 ? e.tooNarrow : ""].filter(Boolean) : [], a = s ? n >= 0.9 ? "good" : n >= ci ? "near" : "off" : "";
    return _`
      <section class="card">
        <div class="card-head">
          <h2>${e.compareTitle}</h2>
          <select class="select" aria-label=${e.compare} .value=${this.styleId} @change=${(l) => this.setStyle(l.target.value)}>
            ${Bt.map((l) => _`<option value=${l} ?selected=${l === this.styleId}>${e.styles[l]}</option>`)}
          </select>
        </div>
        ${this.scale(e.rate, ws, t.rate, s ? i.rate : void 0, e.rateRange(t.rate[0], t.rate[1]))}
        ${this.scale(e.width, _s, t.width, s ? i.width : void 0, e.widthRange(t.width[0], t.width[1]))}
        ${s ? _`<p class="verdict ${a}">
              <b>${a === "good" ? e.fitsAll : a === "near" ? e.fitsMostly : e.fitsNot}</b>
              ${o.length && a !== "good" ? _`<span>${e.advice(o)}</span>` : w}
            </p>` : _`<p class="note">${i && t.optional ? e.optionalNote : e.noVibratoYet}</p>`}
      </section>
    `;
  }
  /** One scale: the style's range as a band, yours as a dot on it */
  scale(e, [t, i], [s, n], r, o) {
    const a = (h) => `${(Math.max(0, Math.min(1, (h - t) / (i - t))) * 100).toFixed(1)}%`, l = r !== void 0 && r >= s && r <= n;
    return _`<div class="scale">
      <span class="scale-name">${e} <span class="muted">${o}</span></span>
      <span class="track">
        <span class="band" style="left: ${a(s)}; right: calc(100% - ${a(n)})"></span>
        ${r !== void 0 ? _`<span class="dot ${l ? "inside" : ""}" style="left: ${a(r)}"></span>` : w}
      </span>
    </div>`;
  }
  /** Your notes kept, then the masters' */
  recordingsCard() {
    const e = this.texts, t = (i, s, n, r) => {
      var a;
      const o = ((a = this.playing) == null ? void 0 : a.id) === i;
      return _`<li class=${this.shown === i ? "shown" : ""}>
        <button class="round play ${o ? "on" : ""}" title=${o ? e.stop : e.play} aria-label=${`${o ? e.stop : e.play}: ${s}`} @click=${r}>
          <svg viewBox="0 0 24 24" aria-hidden="true">${o ? Ss : As}</svg>
        </button>
        <span class="row-text"><span class="row-name">${s}</span>${n ? _`<span class="row-meta">${n}</span>` : w}</span>
        ${this.failed === i ? _`<span class="error-dot" title=${e.loadFailed}>!</span>` : w}
      </li>`;
    };
    return _`
      <section class="card recordings">
        <h2>${e.recordings}</h2>
        <h3>${e.yours}</h3>
        ${this.kept.length ? _`<ul>${this.kept.map((i) => t(i.id, e.you(i.time), this.meta(i.take), () => this.playKept(i)))}</ul>` : _`<p class="note">${e.yoursEmpty}</p>`}
        <h3>${e.masters}</h3>
        <ul>${re.map((i) => t(i.id, i.name, "", () => this.playMaster(i)))}</ul>
      </section>
    `;
  }
  /** A kept note in short: its name, vibrato width and speed */
  meta(e) {
    const t = st(e);
    if (!t)
      return "";
    const i = [this.noteName(t.target)];
    return t.width && t.width >= W && i.push(`${Math.round(t.width)} ¢`), t.width && t.width >= W && t.rate && i.push(`${t.rate.toFixed(1)}/s`), i.join(" · ");
  }
};
S.styles = He`
    :host {
      display: block;
      height: 100%;
      color: var(--m-text);
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }
    * {
      box-sizing: border-box;
    }
    .vz {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--m-bg);
    }
    /*
     * The header bar over Violin Hero's own, exactly: its height, the mark as big as the app's
     * logo ring and where it is, the name where the app's name starts, the close key as far from
     * the right as the app's last key (measured by the app: --vh-*, its measureHeader())
     */
    .head {
      --mark: var(--vh-mark, 28.65px);
      --mark-x: var(--vh-mark-x, 35px);
      flex: none;
      display: flex;
      align-items: center;
      height: var(--vh-head-h, 58px);
      padding: 0 var(--vh-head-end, 1.25rem) 0 0;
      gap: 0.8rem;
      background: var(--m-surface);
      border-bottom: 1px solid var(--m-line);
    }
    .mark {
      display: grid;
      place-items: center;
      width: var(--mark);
      height: var(--mark);
      margin-left: calc(var(--mark-x) - var(--mark) / 2);
      margin-right: calc(var(--vh-name-x, 59.6px) - var(--mark-x) - var(--mark) / 2 - 0.8rem);
      flex: none;
      border-radius: 50%;
      color: var(--m-accent);
      background: var(--m-accent-soft);
      border: 2px solid var(--m-accent-edge);
    }
    .mark svg {
      width: 62%;
      height: 62%;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
    }
    /* As the app's header: the name, 2px, then a line in the version line's type and height (13px) */
    .titles {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
      flex: 1;
    }
    h1 {
      margin: 0;
      font-size: var(--vh-name-size, 1.25rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.01em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* "Violin Hero", then the tool's name in the theme colour */
    .tool-place {
      color: var(--m-accent);
    }
    .lead {
      color: var(--m-muted);
      font: 500 0.68rem/13px ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
      height: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .round {
      display: grid;
      place-items: center;
      flex: none;
      width: 38px;
      height: 38px;
      padding: 0;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-key-edge, var(--m-line));
      border-radius: 50%;
      box-shadow: var(--m-key-shadow, none);
      cursor: pointer;
    }
    .round:hover {
      background: var(--m-bg);
    }
    .round svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }
    .round svg .fill {
      fill: currentColor;
      stroke: none;
    }
    /* As big as the app's header keys */
    .close {
      width: 36px;
      height: 36px;
      color: #fff;
      background: var(--m-accent);
      border-color: var(--m-accent);
    }
    .close:hover {
      background: var(--m-accent-hover, var(--m-accent));
    }
    button:focus-visible,
    select:focus-visible {
      outline: none;
      box-shadow:
        inset 0 0 0 2px var(--m-accent),
        inset 0 0 0 3px var(--m-surface);
    }
    .body {
      flex: 1;
      min-height: 0;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(300px, 360px);
      gap: 0.9rem;
      padding: 0.9rem 1.1rem 1.1rem;
      /* Wide: the graph keeps the window's height, the column beside it scrolls by itself */
      overflow: hidden;
    }
    .side {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      min-width: 0;
      min-height: 0;
      overflow: auto;
      /* Room for the cards' shadows inside the scrolling */
      margin: -4px;
      padding: 4px;
    }
    .card {
      padding: 0.9rem 1.05rem;
      background: var(--m-surface);
      border-radius: 14px;
      box-shadow: 0 1px 2px var(--m-shadow);
    }
    h2 {
      margin: 0 0 0.6rem;
      font-size: 0.95rem;
      font-weight: 700;
    }
    h3 {
      margin: 0.7rem 0 0.35rem;
      font-size: 0.78rem;
      font-weight: 650;
      color: var(--m-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-bottom: 0.4rem;
    }
    .card-head h2 {
      margin: 0;
    }
    .muted {
      color: var(--m-muted);
      font-weight: 500;
    }
    .note {
      margin: 0.4rem 0 0;
      color: var(--m-muted);
      font-size: 0.85rem;
      line-height: 1.4;
    }
    .note.error {
      color: var(--m-red);
    }
    /* The graph card takes the height there is */
    .graph {
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    .graph-head {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 0.4rem 0.9rem;
      min-height: 2.6rem;
    }
    .note-name,
    .graph-head .note {
      font-size: 2rem;
      font-weight: 750;
      line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .offset {
      font-weight: 700;
      color: hsl(var(--hue) 70% var(--m-hue-l, 42%));
    }
    .spacer {
      flex: 1;
    }
    .pill {
      align-self: center;
      padding: 0.3rem 0.75rem;
      border-radius: 999px;
      font-size: 0.82rem;
      font-weight: 650;
      color: var(--m-muted);
      background: var(--m-bg);
      white-space: nowrap;
    }
    .pill.on {
      color: #fff;
      background: var(--m-accent);
    }
    .pill.rec {
      color: #fff;
      background: var(--m-red);
    }
    .pill.ready {
      color: var(--m-accent);
      background: var(--m-accent-soft);
      animation: breathe 1.6s ease-in-out infinite;
    }
    @keyframes breathe {
      50% {
        opacity: 0.55;
      }
    }
    .plot {
      position: relative;
      flex: 1;
      min-height: 0;
      margin-top: 0.5rem;
    }
    .chart {
      position: absolute;
      inset: 0;
      overflow: visible;
    }
    .chart text {
      font: 500 11px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      fill: var(--m-muted);
    }
    .chart .axis-name {
      font-weight: 700;
      fill: var(--m-text);
    }
    .chart .grid {
      stroke: var(--m-line);
      stroke-width: 1;
    }
    .chart .zero {
      stroke: var(--m-muted);
      stroke-width: 1;
      opacity: 0.6;
    }
    .chart .swing {
      fill: var(--m-accent-soft);
    }
    .chart .trace {
      fill: none;
      stroke: url(#zone);
      stroke-width: 3;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .chart.live .trace {
      stroke: var(--m-muted);
      opacity: 0.55;
      stroke-width: 2.5;
    }
    .chart .mean {
      stroke: var(--m-text);
      stroke-width: 1.2;
      stroke-dasharray: 5 4;
      opacity: 0.7;
    }
    .chart .level {
      fill: none;
      stroke: var(--m-accent);
      stroke-width: 2;
    }
    .chart.live .level {
      stroke: var(--m-muted);
      opacity: 0.55;
    }
    .chart .level-area {
      fill: var(--m-accent);
      opacity: 0.14;
    }
    .chart.live .level-area {
      fill: var(--m-muted);
    }
    .chart .playhead {
      stroke: var(--m-accent);
      stroke-width: 2;
    }
    .empty {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      padding: 1rem;
      text-align: center;
      color: var(--m-muted);
      border: 2px dashed var(--m-line);
      border-radius: 12px;
    }
    .empty svg {
      width: 120px;
      height: 40px;
      fill: none;
      stroke: var(--m-accent);
      stroke-width: 3;
      stroke-linecap: round;
      opacity: 0.6;
    }
    .empty strong {
      color: var(--m-text);
      font-size: 1.05rem;
    }
    .empty span {
      max-width: 32em;
      font-size: 0.9rem;
      line-height: 1.4;
    }
    /* Controls */
    .controls {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .listen {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      height: var(--m-control, 44px);
      padding: 0 1rem;
      font: 650 0.95rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: var(--m-radius, 10px);
      cursor: pointer;
    }
    .listen:hover {
      background: var(--m-bg);
    }
    .listen.on {
      color: #fff;
      background: var(--m-accent);
      border-color: var(--m-accent);
    }
    .listen svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .label {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--m-muted);
    }
    .label b {
      color: var(--m-text);
    }
    .gain {
      position: relative;
      display: block;
    }
    .meter {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: 10px;
      margin-top: -5px;
      border-radius: 5px;
      background: linear-gradient(90deg, var(--m-green) 0 70%, #f0b400 70% 88%, var(--m-red) 88%);
      clip-path: inset(0 calc(100% - var(--level, 0%)) 0 0 round 5px);
      opacity: 0.55;
      pointer-events: none;
    }
    .range {
      -webkit-appearance: none;
      appearance: none;
      position: relative;
      width: 100%;
      height: 24px;
      margin: 0;
      background: transparent;
      cursor: pointer;
      touch-action: none;
    }
    .range:focus {
      outline: none;
    }
    .range::-webkit-slider-runnable-track {
      height: 6px;
      border-radius: 3px;
      background: linear-gradient(90deg, var(--m-accent) var(--fill), var(--m-line) var(--fill));
    }
    .gain .range::-webkit-slider-runnable-track {
      background: linear-gradient(90deg, color-mix(in srgb, var(--m-accent) 45%, transparent) var(--fill), color-mix(in srgb, var(--m-line) 60%, transparent) var(--fill));
    }
    .range::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      margin-top: -7px;
      border: 2px solid var(--m-accent);
      border-radius: 50%;
      background: var(--m-surface);
      box-shadow: 0 1px 3px rgba(20, 22, 26, 0.25);
    }
    .range:focus-visible::-webkit-slider-thumb {
      box-shadow: 0 0 0 5px color-mix(in srgb, var(--m-accent) 25%, transparent);
    }
    .range::-moz-range-track {
      height: 6px;
      border-radius: 3px;
      background: var(--m-line);
    }
    .range::-moz-range-progress {
      height: 6px;
      border-radius: 3px;
      background: var(--m-accent);
    }
    .range::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border: 2px solid var(--m-accent);
      border-radius: 50%;
      background: var(--m-surface);
    }
    .select {
      -webkit-appearance: none;
      appearance: none;
      height: 36px;
      padding: 0 2rem 0 0.75rem;
      font: 600 0.9rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background:
        url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" fill="none" stroke="%23888" stroke-width="2" stroke-linecap="round"/></svg>') right 0.5rem center / 18px no-repeat,
        var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: var(--m-radius, 10px);
      cursor: pointer;
    }
    /* Numbers */
    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.55rem;
      margin-top: 0.7rem;
    }
    @media (max-width: 560px) {
      .stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      padding: 0.55rem 0.7rem;
      border-radius: 10px;
      background: var(--m-card, var(--m-bg));
      border: 1px solid var(--m-line);
    }
    .stat-name {
      font-size: 0.75rem;
      font-weight: 650;
      color: var(--m-muted);
    }
    .stat-value {
      font-size: 1.3rem;
      font-weight: 750;
      font-variant-numeric: tabular-nums;
    }
    .stat[style*='--hue'] .stat-value {
      color: hsl(var(--hue) 70% var(--m-hue-l, 42%));
    }
    .stat-note {
      font-size: 0.72rem;
      color: var(--m-muted);
    }
    /* Style check */
    .scale {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      margin: 0.55rem 0 0.2rem;
    }
    .scale-name {
      font-size: 0.82rem;
      font-weight: 650;
    }
    .track {
      position: relative;
      display: block;
      height: 10px;
      border-radius: 5px;
      background: var(--m-line);
    }
    .band {
      position: absolute;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background: var(--m-accent-edge);
    }
    .dot {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      border-radius: 50%;
      background: var(--m-amber);
      border: 2px solid var(--m-surface);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.4s ease;
    }
    .dot.inside {
      background: var(--m-green);
    }
    .verdict {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      margin: 0.7rem 0 0;
      padding: 0.55rem 0.7rem;
      border-radius: 10px;
      font-size: 0.88rem;
    }
    .verdict.good {
      color: var(--m-green);
      background: var(--m-green-soft);
    }
    .verdict.near,
    .verdict.off {
      color: var(--m-amber);
      background: var(--m-amber-soft);
    }
    .verdict span {
      color: var(--m-text);
    }
    /* Recordings */
    .recordings h2 {
      margin-bottom: 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      padding: 0.3rem 0.4rem;
      border-radius: 10px;
    }
    li.shown {
      background: var(--m-accent-soft);
    }
    .play {
      width: 34px;
      height: 34px;
      color: var(--m-accent);
    }
    .play.on {
      color: #fff;
      background: var(--m-accent);
      border-color: var(--m-accent);
    }
    .row-text {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .row-name {
      font-weight: 600;
      font-size: 0.92rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .row-meta {
      font-size: 0.78rem;
      color: var(--m-muted);
    }
    .error-dot {
      margin-left: auto;
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #fff;
      background: var(--m-red);
      font-weight: 800;
      font-size: 0.8rem;
    }
    /* Narrow: one column, the graph a good share of the window */
    @media (max-width: 760px) {
      /* One column, scrolling as a whole: each card as tall as it needs */
      .body {
        display: flex;
        flex-direction: column;
        padding: 0.6rem;
        gap: 0.6rem;
        overflow: auto;
      }
      .graph,
      .side {
        flex: none;
      }
      .side {
        overflow: visible;
        gap: 0.6rem;
      }
      .plot {
        flex: none;
        height: max(260px, 42vh);
      }
      .graph-head .note {
        font-size: 1.6rem;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .pill.ready {
        animation: none;
      }
      .dot {
        transition: none;
      }
    }
  `;
E([
  ue({ attribute: !1 })
], S.prototype, "host", 2);
E([
  T()
], S.prototype, "texts", 2);
E([
  T()
], S.prototype, "running", 2);
E([
  T()
], S.prototype, "micFailed", 2);
E([
  T()
], S.prototype, "take", 2);
E([
  T()
], S.prototype, "analysis", 2);
E([
  T()
], S.prototype, "kept", 2);
E([
  T()
], S.prototype, "playing", 2);
E([
  T()
], S.prototype, "failed", 2);
E([
  T()
], S.prototype, "playhead", 2);
E([
  T()
], S.prototype, "shown", 2);
E([
  T()
], S.prototype, "gainDb", 2);
E([
  T()
], S.prototype, "reverb", 2);
E([
  T()
], S.prototype, "styleId", 2);
E([
  T()
], S.prototype, "size", 2);
S = E([
  si("vibralizer-module")
], S);
function wt(e) {
  const t = Math.min(1, Math.max(0, (Math.abs(e) - ht) / (xs - ht)));
  return 120 * (1 - Math.sqrt(t));
}
function Ts(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(1);
}
function Cs(e, t) {
  const s = [...t], n = (o) => o >= 0 && o < t.length && t[o] !== null, r = (o, a) => (t[a] - t[o]) / (e[a] - e[o]);
  for (let o = 1; o < t.length; o++) {
    if (t[o] !== null || !n(o - 1))
      continue;
    let a = o;
    for (; a < t.length && t[a] === null; )
      a++;
    if (a === t.length)
      break;
    const l = o - 1, h = e[a] - e[l], d = r(l, a), c = Math.min(1, 0.08 / h), f = d + ((n(l - 1) ? r(l - 1, l) : d) - d) * c, u = d + ((n(a + 1) ? r(a, a + 1) : d) - d) * c;
    for (let p = l + 1; p < a; p++) {
      const m = (e[p] - e[l]) / h;
      s[p] = (2 * m ** 3 - 3 * m ** 2 + 1) * t[l] + (m ** 3 - 2 * m ** 2 + m) * h * f + (-2 * m ** 3 + 3 * m ** 2) * t[a] + (m ** 3 - m ** 2) * h * u;
    }
    o = a;
  }
  return s;
}
function _t(e) {
  const t = (s) => s.toFixed(1);
  let i = `M${t(e[0][0])},${t(e[0][1])}`;
  for (let s = 0; s < e.length - 1; s++) {
    const [n, r, o, a] = [e[s - 1] ?? e[s], e[s], e[s + 1], e[s + 2] ?? e[s + 1]], l = [r[0] + (o[0] - n[0]) / 6, r[1] + (o[1] - n[1]) / 6], h = [o[0] - (a[0] - r[0]) / 6, o[1] - (a[1] - r[1]) / 6];
    i += `C${t(l[0])},${t(l[1])} ${t(h[0])},${t(h[1])} ${t(o[0])},${t(o[1])}`;
  }
  return i;
}
function Ns(e, t) {
  const i = document.createElement("vibralizer-module");
  return i.host = t, e.append(i), () => i.remove();
}
export {
  Ns as mount
};
