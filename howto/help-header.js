/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=globalThis,rr=Sn.ShadowRoot&&(Sn.ShadyCSS===void 0||Sn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sr=Symbol(),qr=new WeakMap;let go=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(rr&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=qr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&qr.set(n,e))}return e}toString(){return this.cssText}};const de=t=>new go(typeof t=="string"?t:t+"",void 0,sr),cn=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new go(n,t,sr)},uc=(t,e)=>{if(rr)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),r=Sn.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},Yr=rr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return de(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dc,defineProperty:fc,getOwnPropertyDescriptor:pc,getOwnPropertyNames:mc,getOwnPropertySymbols:gc,getPrototypeOf:yc}=Object,qe=globalThis,Jr=qe.trustedTypes,bc=Jr?Jr.emptyScript:"",ki=qe.reactiveElementPolyfillSupport,Ht=(t,e)=>t,On={toAttribute(t,e){switch(e){case Boolean:t=t?bc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},or=(t,e)=>!dc(t,e),Xr={attribute:!0,type:String,converter:On,reflect:!1,useDefault:!1,hasChanged:or};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qe.litPropertyMetadata??(qe.litPropertyMetadata=new WeakMap);let bt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Xr){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&fc(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=pc(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);s==null||s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xr}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;const e=yc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){const n=this.properties,i=[...mc(n),...gc(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(Yr(r))}else e!==void 0&&n.push(Yr(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return uc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:On).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var s,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:On;this._$Em=r;const u=c.fromAttribute(n,a.type);this[r]=u??((o=this._$Ej)==null?void 0:o.get(r))??u,this._$Em=null}}requestUpdate(e,n,i,r=!1,s){var o;if(e!==void 0){const a=this.constructor;if(r===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??or)(s,n)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:a}=o,c=this[s];a!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[Ht("elementProperties")]=new Map,bt[Ht("finalized")]=new Map,ki==null||ki({ReactiveElement:bt}),(qe.reactiveElementVersions??(qe.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=globalThis,Zr=t=>t,Mn=jt.trustedTypes,Qr=Mn?Mn.createPolicy("lit-html",{createHTML:t=>t}):void 0,yo="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,bo="?"+Be,wc=`<${bo}>`,ht=document,Yt=()=>ht.createComment(""),Jt=t=>t===null||typeof t!="object"&&typeof t!="function",ar=Array.isArray,vc=t=>ar(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",_i=`[ 	
\f\r]`,Ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,es=/-->/g,ts=/>/g,et=RegExp(`>|${_i}(?:([^\\s"'>=/]+)(${_i}*=${_i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ns=/'/g,is=/"/g,wo=/^(?:script|style|textarea|title)$/i,vo=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=vo(1),B=vo(2),Et=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),rs=new WeakMap,rt=ht.createTreeWalker(ht,129);function ko(t,e){if(!ar(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qr!==void 0?Qr.createHTML(e):e}const kc=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=Ot;for(let a=0;a<n;a++){const c=t[a];let u,y,b=-1,v=0;for(;v<c.length&&(o.lastIndex=v,y=o.exec(c),y!==null);)v=o.lastIndex,o===Ot?y[1]==="!--"?o=es:y[1]!==void 0?o=ts:y[2]!==void 0?(wo.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=et):y[3]!==void 0&&(o=et):o===et?y[0]===">"?(o=r??Ot,b=-1):y[1]===void 0?b=-2:(b=o.lastIndex-y[2].length,u=y[1],o=y[3]===void 0?et:y[3]==='"'?is:ns):o===is||o===ns?o=et:o===es||o===ts?o=Ot:(o=et,r=void 0);const S=o===et&&t[a+1].startsWith("/>")?" ":"";s+=o===Ot?c+wc:b>=0?(i.push(u),c.slice(0,b)+yo+c.slice(b)+Be+S):c+Be+(b===-2?a:S)}return[ko(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Fi=class _o{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[u,y]=kc(e,n);if(this.el=_o.createElement(u,i),rt.currentNode=this.el.content,n===2||n===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(r=rt.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const b of r.getAttributeNames())if(b.endsWith(yo)){const v=y[o++],S=r.getAttribute(b).split(Be),A=/([.?@])?(.*)/.exec(v);c.push({type:1,index:s,name:A[2],strings:S,ctor:A[1]==="."?Tc:A[1]==="?"?Ec:A[1]==="@"?Sc:ai}),r.removeAttribute(b)}else b.startsWith(Be)&&(c.push({type:6,index:s}),r.removeAttribute(b));if(wo.test(r.tagName)){const b=r.textContent.split(Be),v=b.length-1;if(v>0){r.textContent=Mn?Mn.emptyScript:"";for(let S=0;S<v;S++)r.append(b[S],Yt()),rt.nextNode(),c.push({type:2,index:++s});r.append(b[v],Yt())}}}else if(r.nodeType===8)if(r.data===bo)c.push({type:2,index:s});else{let b=-1;for(;(b=r.data.indexOf(Be,b+1))!==-1;)c.push({type:7,index:s}),b+=Be.length-1}s++}}static createElement(e,n){const i=ht.createElement("template");return i.innerHTML=e,i}};function St(t,e,n=t,i){var o,a;if(e===Et)return e;let r=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const s=Jt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=r:n._$Cl=r),r!==void 0&&(e=St(t,r._$AS(t,e.values),r,i)),e}class _c{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ht).importNode(n,!0);rt.currentNode=r;let s=rt.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let u;c.type===2?u=new cr(s,s.nextSibling,this,e):c.type===1?u=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(u=new Ic(s,this,e)),this._$AV.push(u),c=i[++a]}o!==(c==null?void 0:c.index)&&(s=rt.nextNode(),o++)}return rt.currentNode=ht,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}let cr=class To{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=St(this,e,n),Jt(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&Jt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ht.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Fi.createElement(ko(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(n);else{const o=new _c(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=rs.get(e.strings);return n===void 0&&rs.set(e.strings,n=new Fi(e)),n}k(e){ar(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new To(this.O(Yt()),this.O(Yt()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e!==this._$AB;){const r=Zr(e).nextSibling;Zr(e).remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},ai=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=St(this,e,n,0),o=!Jt(e)||e!==this._$AH&&e!==Et,o&&(this._$AH=e);else{const a=e;let c,u;for(e=s[0],c=0;c<s.length-1;c++)u=St(this,a[i+c],n,c),u===Et&&(u=this._$AH[c]),o||(o=!Jt(u)||u!==this._$AH[c]),u===P?e=P:e!==P&&(e+=(u??"")+s[c+1]),this._$AH[c]=u}o&&!r&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Tc extends ai{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class Ec extends ai{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}let Sc=class extends ai{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=St(this,e,n,0)??P)===Et)return;const i=this._$AH,r=e===P&&i!==P||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==P&&(i===P||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},Ic=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){St(this,e)}};const Ti=jt.litHtmlPolyfillSupport;Ti==null||Ti(Fi,cr),(jt.litHtmlVersions??(jt.litHtmlVersions=[])).push("3.3.3");const Ac=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new cr(e.insertBefore(Yt(),s),s,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis;class ct extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ac(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}}var mo;ct._$litElement$=!0,ct.finalized=!0,(mo=at.litElementHydrateSupport)==null||mo.call(at,{LitElement:ct});const Ei=at.litElementPolyfillSupport;Ei==null||Ei({LitElement:ct});(at.litElementVersions??(at.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lr=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pc={attribute:!0,type:String,converter:On,reflect:!1,hasChanged:or},$c=(t=Pc,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=n;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Y(t){return(e,n)=>typeof n=="object"?$c(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function K(t){return Y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hr(t,e){return(n,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(t))??null};if(e){const{get:o,set:a}=typeof i=="object"?n:r??(()=>{const c=Symbol();return{get(){return this[c]},set(u){this[c]=u}}})();return ss(n,i,{get(){let c=o.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&a.call(this,c)),c}})}return ss(n,i,{get(){return s(this)}})}}const Nc=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Dc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},So={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,y=s>>2,b=(s&3)<<4|a>>4;let v=(a&15)<<2|u>>6,S=u&63;c||(S=64,o||(v=64)),i.push(n[y],n[b],n[v],n[S])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const b=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||b==null)throw new xc;const v=s<<2|a>>4;if(i.push(v),u!==64){const S=a<<4&240|u>>2;if(i.push(S),b!==64){const A=u<<6&192|b;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cc=function(t){const e=Eo(t);return So.encodeByteArray(e,!0)},Vn=function(t){return Cc(t).replace(/\./g,"")},Io=function(t){try{return So.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=()=>Rc().__FIREBASE_DEFAULTS__,Oc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Mc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Io(t[1]);return e&&JSON.parse(e)},ur=()=>{try{return Nc()||Lc()||Oc()||Mc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ao=t=>{var e,n;return(n=(e=ur())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Vc=t=>{const e=Ao(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Po=()=>{var t;return(t=ur())==null?void 0:t.config},$o=t=>{var e;return(e=ur())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Vn(JSON.stringify(n)),Vn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function zc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jc(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="FirebaseError";class Me extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Gc,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ln.prototype.create)}}class ln{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?qc(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Me(r,a,i)}}function qc(t,e){try{let n=0,i="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){i+=t.substring(n);break}const s=t.indexOf("}",r+2);if(s===-1){i+=t.substring(n);break}const o=t.substring(r+2,s),a=e[o];i+=t.substring(n,r)+(a!=null?String(a):`<${o}?>`),n=s+1}return i}catch{return t}}function Yc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ut(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(os(s)&&os(o)){if(!ut(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function os(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Vt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ut(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jc(t,e){const n=new Xc(t,e);return n.subscribe.bind(n)}class Xc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Zc(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Si),r.error===void 0&&(r.error=Si),r.complete===void 0&&(r.complete=Si);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Si(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Do(t){return(await fetch(t,{credentials:"include"})).ok}class dt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new No;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tl(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:el(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function el(t){return t===tt?void 0:t}function tl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const il={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},rl=N.INFO,sl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},ol=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=sl[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dr{constructor(e){this.name=e,this._logLevel=rl,this._logHandler=ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?il[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const al=(t,e)=>e.some(n=>t instanceof n);let as,cs;function cl(){return as||(as=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ll(){return cs||(cs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,zi=new WeakMap,Co=new WeakMap,Ii=new WeakMap,fr=new WeakMap;function hl(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ye(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xo.set(n,t)}).catch(()=>{}),fr.set(e,t),e}function ul(t){if(zi.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zi.set(t,e)}let Bi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Co.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dl(t){Bi=t(Bi)}function fl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ai(this),e,...n);return Co.set(i,e.sort?e.sort():[e]),Ye(i)}:ll().includes(t)?function(...e){return t.apply(Ai(this),e),Ye(xo.get(this))}:function(...e){return Ye(t.apply(Ai(this),e))}}function pl(t){return typeof t=="function"?fl(t):(t instanceof IDBTransaction&&ul(t),al(t,cl())?new Proxy(t,Bi):t)}function Ye(t){if(t instanceof IDBRequest)return hl(t);if(Ii.has(t))return Ii.get(t);const e=pl(t);return e!==t&&(Ii.set(t,e),fr.set(e,t)),e}const Ai=t=>fr.get(t);function ml(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ye(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ye(o.result),c.oldVersion,c.newVersion,Ye(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gl=["get","getKey","getAll","getAllKeys","count"],yl=["put","add","delete","clear"],Pi=new Map;function ls(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pi.get(e))return Pi.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=yl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gl.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Pi.set(e,s),s}dl(t=>({...t,get:(e,n,i)=>ls(e,n)||t.get(e,n,i),has:(e,n)=>!!ls(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hi="@firebase/app",hs="0.16.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new dr("@firebase/app"),vl="@firebase/app-compat",kl="@firebase/analytics-compat",_l="@firebase/analytics",Tl="@firebase/app-check-compat",El="@firebase/app-check",Sl="@firebase/auth",Il="@firebase/auth-compat",Al="@firebase/crashlytics",Pl="@firebase/database",$l="@firebase/data-connect",Nl="@firebase/database-compat",Dl="@firebase/functions",xl="@firebase/functions-compat",Cl="@firebase/installations",Rl="@firebase/installations-compat",Ll="@firebase/messaging",Ol="@firebase/messaging-compat",Ml="@firebase/performance",Vl="@firebase/performance-compat",Ul="@firebase/remote-config",Fl="@firebase/remote-config-compat",zl="@firebase/storage",Bl="@firebase/storage-compat",Hl="@firebase/firestore",jl="@firebase/ai",Wl="@firebase/firestore-compat",Kl="firebase",Gl="13.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]",ql={[Hi]:"fire-core",[vl]:"fire-core-compat",[_l]:"fire-analytics",[kl]:"fire-analytics-compat",[El]:"fire-app-check",[Tl]:"fire-app-check-compat",[Sl]:"fire-auth",[Il]:"fire-auth-compat",[Al]:"fire-cls",[Pl]:"fire-rtdb",[$l]:"fire-data-connect",[Nl]:"fire-rtdb-compat",[Dl]:"fire-fn",[xl]:"fire-fn-compat",[Cl]:"fire-iid",[Rl]:"fire-iid-compat",[Ll]:"fire-fcm",[Ol]:"fire-fcm-compat",[Ml]:"fire-perf",[Vl]:"fire-perf-compat",[Ul]:"fire-rc",[Fl]:"fire-rc-compat",[zl]:"fire-gcs",[Bl]:"fire-gcs-compat",[Hl]:"fire-fst",[Wl]:"fire-fst-compat",[jl]:"fire-vertex","fire-js":"fire-js",[Kl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,Yl=new Map,Wi=new Map;function us(t,e){try{t.container.addComponent(e)}catch(n){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(Wi.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;Wi.set(e,t);for(const n of Un.values())us(n,t);for(const n of Yl.values())us(n,t);return!0}function pr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Q(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$e=new ln("app","Firebase",Jl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=Gl;function Ro(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:ji,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw $e.create("bad-app-name",{appName:String(r)});if(n||(n=Po()),!n)throw $e.create("no-options");const s=Un.get(r);if(s)if(ut(n,s.options)){if(ut(i,s.config))return s;throw $e.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(i)})}else throw $e.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new nl(r);for(const c of Wi.values())o.addComponent(c);const a=new Xl(n,i,o);return Un.set(r,a),a}function Lo(t=ji){const e=Un.get(t);if(!e&&t===ji&&Po())return Ro();if(!e)throw $e.create("no-app",{appName:t});return e}function Je(t,e,n){let i=ql[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(o.join(" "));return}It(new dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="firebase-heartbeat-database",Ql=1,Xt="firebase-heartbeat-store";let $i=null;function Oo(){return $i||($i=ml(Zl,Ql,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xt)}catch(n){console.warn(n)}}}}).catch(t=>{throw $e.create("idb-open",{originalErrorMessage:t.message})})),$i}async function eh(t){try{const n=(await Oo()).transaction(Xt),i=await n.objectStore(Xt).get(Mo(t));return await n.done,i}catch(e){if(e instanceof Me)Le.warn(e.message);else{const n=$e.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(n.message)}}}async function ds(t,e){try{const i=(await Oo()).transaction(Xt,"readwrite");await i.objectStore(Xt).put(e,Mo(t)),await i.done}catch(n){if(n instanceof Me)Le.warn(n.message);else{const i=$e.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Le.warn(i.message)}}}function Mo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=1024,nh=30;class ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fs();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>nh){const o=oh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Le.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fs(),{heartbeatsToSend:i,unsentEntries:r}=rh(this._heartbeatsCache.heartbeats),s=Vn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Le.warn(n),""}}}function fs(){return new Date().toISOString().substring(0,10)}function rh(t,e=th){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ps(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ps(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class sh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ds(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ds(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ps(t){return Vn(JSON.stringify({version:2,heartbeats:t})).length}function oh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){It(new dt("platform-logger",e=>new bl(e),"PRIVATE")),It(new dt("heartbeat",e=>new ih(e),"PRIVATE")),Je(Hi,hs,t),Je(Hi,hs,"esm2020"),Je("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ah("");var ch="firebase",lh="13.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(ch,lh,"app");function Vo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hh=Vo,Uo=new ln("auth","Firebase",Vo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new dr("@firebase/auth");function In(t,...e){Fn.logLevel<=N.WARN&&Fn.warn(`Auth (${xt}): ${t}`,...e)}function An(t,...e){Fn.logLevel<=N.ERROR&&Fn.error(`Auth (${xt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,...e){throw mr(t,...e)}function he(t,...e){return mr(t,...e)}function ci(t,e,n){const i={...hh(),[e]:n};return new ln("auth","Firebase",i).create(e,{appName:t.name})}function Re(t){return ci(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uh(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ae(t,"argument-error"),ci(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mr(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Uo.create(t,...e)}function T(t,e,...n){if(!t)throw mr(e,...n)}function Ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw An(e),new Error(e)}function Oe(t,e){t||Ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dh(){return ms()==="http:"||ms()==="https:"}function ms(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dh()||Bc()||"connection"in navigator)?navigator.onLine:!0}function ph(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Oe(n>e,"Short delay should be less than long delay!"),this.isMobile=Fc()||Hc()}get(){return fh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){Oe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yh=new dn(3e4,6e4);function Ve(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ve(t,e,n,i,r={}){return zo(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=hn({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return zc()||(u.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&un(t.emulatorConfig.host)&&(u.credentials="include"),Fo.fetch()(await Bo(t,t.config.apiHost,n,a),u)})}async function zo(t,e,n){t._canInitEmulator=!1;const i={...mh,...e};try{const r=new wh(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wn(t,"user-disabled",o);const y=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ci(t,y,u);ae(t,y)}}catch(r){if(r instanceof Me)throw r;ae(t,"network-request-failed",{message:String(r)})}}async function fn(t,e,n,i,r={}){const s=await ve(t,e,n,i,r);return"mfaPendingCredential"in s&&ae(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Bo(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?gr(t.config,r):`${t.config.apiScheme}://${r}`;return gh.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function bh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(he(this.auth,"network-request-failed")),yh.get())})}}function wn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=he(t,e,i);return r.customData._tokenResponse=n,r}function gs(t){return t!==void 0&&t.enterprise!==void 0}class vh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kh(t,e){return ve(t,"GET","/v2/recaptchaConfig",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t,e){return ve(t,"POST","/v1/accounts:delete",e)}async function zn(t,e){return ve(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Th(t,e=!1){const n=U(t),i=await n.getIdToken(e),r=yr(i);T(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Wt(Ni(r.auth_time)),issuedAtTime:Wt(Ni(r.iat)),expirationTime:Wt(Ni(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ni(t){return Number(t)*1e3}function yr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return An("JWT malformed, contained fewer than 3 sections"),null;try{const r=Io(n);return r?JSON.parse(r):(An("Failed to decode base64 JWT payload"),null)}catch(r){return An("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ys(t){const e=yr(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw Ho(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ho(t){return t instanceof Me?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t){var b;const e=t.auth,n=await t.getIdToken(),i=await At(t,zn(e,{idToken:n}));T(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=(b=r.providerUserInfo)!=null&&b.length?jo(r.providerUserInfo):[],o=Ih(t.providerData,s),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),u=a?c:!1,y={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Gi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,y)}async function Sh(t){const e=U(t);await Bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ih(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function jo(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ah(t,e){const n=await zo(t,{},async()=>{const i=hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await Bo(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return t.emulatorConfig&&un(t.emulatorConfig.host)&&(c.credentials="include"),Fo.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ph(t,e){return ve(t,"POST","/v2/accounts:revokeToken",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ys(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){T(e.length!==0,"internal-error");const n=ys(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(T(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Ah(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new _t;return i&&(T(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(T(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _t,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class le{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new Eh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Gi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await At(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Th(this,e)}reload(){return Sh(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Bn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Re(this.auth));const e=await this.getIdToken();return await At(this,_h(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:b,emailVerified:v,isAnonymous:S,providerData:A,stsTokenManager:O}=n;T(b&&O,e,"internal-error");const D=_t.fromJSON(this.name,O);T(typeof b=="string",e,"internal-error"),ze(i,e.name),ze(r,e.name),T(typeof v=="boolean",e,"internal-error"),T(typeof S=="boolean",e,"internal-error"),ze(s,e.name),ze(o,e.name),ze(a,e.name),ze(c,e.name),ze(u,e.name),ze(y,e.name);const J=new le({uid:b,auth:e,email:r,emailVerified:v,displayName:i,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:D,createdAt:u,lastLoginAt:y});return A&&Array.isArray(A)&&(J.providerData=A.map(re=>({...re}))),c&&(J._redirectEventId=c),J}static async _fromIdTokenResponse(e,n,i=!1){const r=new _t;r.updateFromServerResponse(n);const s=new le({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Bn(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];T(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?jo(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new _t;a.updateFromIdToken(i);const c=new le({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Gi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Map;function De(t){Oe(t instanceof Function,"Expected a class definition");let e=bs.get(t);return e?(Oe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bs.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wo.type="NONE";const ws=Wo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Pn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zn(this.auth,{idToken:e}).catch(()=>{});return n?le._fromGetAccountInfoResponse(this.auth,n,e):null}return le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new lt(De(ws),e,i);const r=(await Promise.all(n.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=r[0]||De(ws);const o=Pn(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const y=await u._get(o);if(y){let b;if(typeof y=="string"){const v=await zn(e,{idToken:y}).catch(()=>{});if(!v)break;b=await le._fromGetAccountInfoResponse(e,v,y)}else b=le._fromJSON(e,y);u!==s&&(a=b),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new lt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new lt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ko(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xo(e))return"Blackberry";if(Zo(e))return"Webos";if(Go(e))return"Safari";if((e.includes("chrome/")||qo(e))&&!e.includes("edge/"))return"Chrome";if(Jo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ko(t=q()){return/firefox\//i.test(t)}function Go(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qo(t=q()){return/crios\//i.test(t)}function Yo(t=q()){return/iemobile/i.test(t)}function Jo(t=q()){return/android/i.test(t)}function Xo(t=q()){return/blackberry/i.test(t)}function Zo(t=q()){return/webos/i.test(t)}function br(t=q()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $h(t=q()){var e;return br(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Nh(){return jc()&&document.documentMode===10}function Qo(t=q()){return br(t)||Jo(t)||Zo(t)||Xo(t)||/windows phone/i.test(t)||Yo(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e=[]){let n;switch(t){case"Browser":n=vs(q());break;case"Worker":n=`${vs(q())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(t,e={}){return ve(t,"GET","/v2/passwordPolicy",Ve(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=6;class Rh{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Ch,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ks(this),this.idTokenSubscription=new ks(this),this.beforeStateQueue=new Dh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=De(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted){try{this.persistenceManager=await lt.create(this,e)}catch(o){In(`Failed to initialize persistence: ${o}`),this.persistenceManager=await lt.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){In(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zn(this,{idToken:e}),i=await le._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Q(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bn(e)}catch(n){if(Ho(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ph()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(Re(this));const n=e?U(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(Re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xh(this),n=new Rh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ln("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ph(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&De(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[De(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(i)i(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),r=ci(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw r.customData={originalError:n},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ea(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&In(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ue(t){return U(t)}class ks{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jc(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Oh(t){li=t}function ta(t){return li.loadJS(t)}function Mh(){return li.recaptchaEnterpriseScript}function Vh(){return li.gapiScript}function Uh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Fh{constructor(){this.enterprise=new zh}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zh{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="recaptcha-enterprise",na="NO_RECAPTCHA",_s="onFirebaseAuthREInstanceReady";class He{constructor(e){this.type=Bh,this.auth=Ue(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{kh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new vh(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;gs(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(na)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Fh().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(async a=>{if(!n&&gs(window.grecaptcha)&&He.scriptInjectionDeferred)await He.scriptInjectionDeferred.promise,r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Mh();c.length!==0&&(c+=a+`&onload=${_s}`),He.scriptInjectionDeferred=new No,window[_s]=()=>{var u;(u=He.scriptInjectionDeferred)==null||u.resolve()},ta(c).then(()=>{var u;return(u=He.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{r(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}He.scriptInjectionDeferred=null;async function Mt(t,e,n,i=!1,r=!1){const s=new He(t);let o;if(r)o=na;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hn(t,e,n,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Mt(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Mt(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Mt(t,e,n);return i(t,a).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const y=await Mt(t,e,n,!1,!0);return i(t,y)}return Promise.reject(c)})}else{const a=await Mt(t,e,n,!1,!0);return i(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e){const n=pr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(ut(s,e??{}))return r;ae(r,"already-initialized")}return n.initialize({options:e})}function jh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(De);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Wh(t,e,n){const i=Ue(t);T(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=ia(e),{host:o,port:a}=Kh(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},y=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){T(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),T(ut(u,i.config.emulator)&&ut(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,un(o)?Do(`${s}//${o}${c}`):r||Gh()}function ia(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kh(t){const e=ia(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ts(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ts(o)}}}function Ts(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,n){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}async function qh(t,e){return ve(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e){return fn(t,"POST","/v1/accounts:signInWithPassword",Ve(t,e))}async function ra(t,e){return ve(t,"POST","/v1/accounts:sendOobCode",Ve(t,e))}async function Jh(t,e){return ra(t,e)}async function Xh(t,e){return ra(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t,e){return fn(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}async function Qh(t,e){return fn(t,"POST","/v1/accounts:signInWithEmailLink",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends wr{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Zt(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Zt(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,n,"signInWithPassword",Yh,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Zh(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hn(e,i,"signUpPassword",qh,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Qh(e,{idToken:n,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return fn(t,"POST","/v1/accounts:signInWithIdp",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="http://localhost";class ft extends wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new ft(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Tt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tt(e,n)}buildRequest(){const e={requestUri:eu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nu(t){const e=Vt(Ut(t)).link,n=e?Vt(Ut(e)).deep_link_id:null,i=Vt(Ut(t)).deep_link_id;return(i?Vt(Ut(i)).link:null)||i||n||e||t}class vr{constructor(e){const n=Vt(Ut(e)),i=n.apiKey??null,r=n.oobCode??null,s=tu(n.mode??null);T(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=nu(e);try{return new vr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.providerId=Ct.PROVIDER_ID}static credential(e,n){return Zt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=vr.parseLink(n);return T(i,"argument-error"),Zt._fromEmailAndCode(e,i.code,i.tenantId)}}Ct.PROVIDER_ID="password";Ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends pn{constructor(){super("facebook.com")}static credential(e){return ft._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ft._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ie.credential(n,i)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends pn{constructor(){super("github.com")}static credential(e){return ft._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.GITHUB_SIGN_IN_METHOD="github.com";We.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends pn{constructor(){super("twitter.com")}static credential(e,n){return ft._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ke.credential(n,i)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(t,e){return fn(t,"POST","/v1/accounts:signUp",Ve(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await le._fromIdTokenResponse(e,i,r),o=Es(i);return new pt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Es(i);return new pt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Es(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Me{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,jn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new jn(e,n,i,r)}}function sa(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jn._fromErrorAndOperation(t,s,e,i):s})}async function ru(t,e,n=!1){const i=await At(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pt._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t,e,n=!1){const{auth:i}=t;if(Q(i.app))return Promise.reject(Re(i));const r="reauthenticate";try{const s=await At(t,sa(i,r,e,t),n);T(s.idToken,i,"internal-error");const o=yr(s.idToken);T(o,i,"internal-error");const{sub:a}=o;return T(t.uid===a,i,"user-mismatch"),pt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ae(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t,e,n=!1){if(Q(t.app))return Promise.reject(Re(t));const i="signIn",r=await sa(t,i,e),s=await pt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ou(t,e){return oa(Ue(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,n){var i;T(((i=n.url)==null?void 0:i.length)>0,t,"invalid-continue-uri"),T(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),T(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ca(t){const e=Ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function au(t,e,n){const i=Ue(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&aa(i,r,n),await Hn(i,r,"getOobCode",Xh,"EMAIL_PASSWORD_PROVIDER")}async function cu(t,e,n){if(Q(t.app))return Promise.reject(Re(t));const i=Ue(t),o=await Hn(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iu,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ca(t),c}),a=await pt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function lu(t,e,n){return Q(t.app)?Promise.reject(Re(t)):ou(U(t),Ct.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ca(t),i})}async function hu(t,e){const n=U(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&aa(n.auth,r,e);const{email:s}=await Jh(n.auth,r);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(t,e){return ve(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const r=U(t),o={idToken:await r.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await At(r,uu(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function fu(t,e,n,i){return U(t).onIdTokenChanged(e,n,i)}function pu(t,e,n){return U(t).beforeAuthStateChanged(e,n)}function mu(t,e,n,i){return U(t).onAuthStateChanged(e,n,i)}function gu(t){return U(t).signOut()}const Wn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wn,"1"),this.storage.removeItem(Wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=1e3,bu=10;class ha extends la{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Nh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,bu):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},yu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ha.type="LOCAL";const wu=ha;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends la{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ua.type="SESSION";const da=ua;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new hi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await vu(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=_r("",20);r.port1.start();const y=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(b){const v=b;if(v.data.eventId===u)switch(v.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(y),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function _u(t){ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Tu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Eu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Su(){return fa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="firebaseLocalStorageDb",Iu=1,Kn="firebaseLocalStorage",ma="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ui(t,e){return t.transaction([Kn],e?"readwrite":"readonly").objectStore(Kn)}function Au(){const t=indexedDB.deleteDatabase(pa);return new mn(t).toPromise()}function ga(){const t=indexedDB.open(pa,Iu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Kn,{keyPath:ma})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Kn)?e(i):(i.close(),await Au(),e(await ga()))})})}async function Ss(t,e,n){const i=ui(t,!0).put({[ma]:e,value:n});return new mn(i).toPromise()}async function Pu(t,e){const n=ui(t,!1).get(e),i=await new mn(n).toPromise();return i===void 0?null:i.value}function Is(t,e){const n=ui(t,!0).delete(e);return new mn(n).toPromise()}const $u=800,Nu=3;class ya{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=ga(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Nu)throw i;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return fa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(Su()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Tu(),!this.activeServiceWorker)return;this.sender=new ku(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Eu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ss(e,Wn,"1"),await Is(e,Wn)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ss(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Pu(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Is(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const s=ui(r,!1).getAll();return new mn(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}catch(e){return this.isClosing||In(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$u)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e).catch(()=>{})),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}ya.type="LOCAL";const Du=ya;new dn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){return e?De(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xu(t){return oa(t.auth,new Tr(t),t.bypassAuthState)}function Cu(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),su(n,new Tr(t),t.bypassAuthState)}async function Ru(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),ru(n,new Tr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(i){this.pendingPromise&&this.reject(i)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xu;case"linkViaPopup":case"linkViaRedirect":return Ru;case"reauthViaPopup":case"reauthViaRedirect":return Cu;default:ae(this.auth,"internal-error")}}resolve(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new dn(2e3,1e4);async function Ou(t,e,n){if(Q(t.app))return Promise.reject(he(t,"operation-not-supported-in-this-environment"));const i=Ue(t);uh(t,e,kr);const r=ba(i,n);return new st(i,"signInViaPopup",e,r).executeNotNull()}class st extends wa{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Oe(this.filter.length===1,"Popup operations only handle one event");const e=_r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lu.get())};e()}}st.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="pendingRedirect",$n=new Map;class Vu extends wa{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const i=await Uu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uu(t,e){const n=Bu(e),i=zu(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Fu(t,e){$n.set(t._key(),e)}function zu(t){return De(t._redirectPersistence)}function Bu(t){return Pn(Mu,t.config.apiKey,t.name)}async function Hu(t,e,n=!1){if(Q(t.app))return Promise.reject(Re(t));const i=Ue(t),r=ba(i,e),o=await new Vu(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=10*60*1e3;class Wu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ku(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!va(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(he(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ju&&this.cachedEventUids.clear(),this.cachedEventUids.has(As(e))}saveEventToCache(e){this.cachedEventUids.add(As(e)),this.lastProcessedEventTime=Date.now()}}function As(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function va({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ku(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return va(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(t,e={}){return ve(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yu=/^https?/;async function Ju(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gu(t);for(const n of e)try{if(Xu(n))return}catch{}ae(t,"unauthorized-domain")}function Xu(t){const e=Ki(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Yu.test(n))return!1;if(qu.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new dn(3e4,6e4);function Ps(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qu(t){return new Promise((e,n)=>{var r,s,o;function i(){Ps(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ps(),n(he(t,"network-request-failed"))},timeout:Zu.get()})}if((s=(r=ge().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ge().gapi)!=null&&o.load)i();else{const a=Uh("iframefcb");return ge()[a]=()=>{gapi.load?i():n(he(t,"network-request-failed"))},ta(`${Vh()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Nn=null,e})}let Nn=null;function ed(t){return Nn=Nn||Qu(t),Nn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new dn(5e3,15e3),nd="__/auth/iframe",id="emulator/auth/iframe",rd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function od(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gr(e,id):`https://${t.config.authDomain}/${nd}`,i={apiKey:e.apiKey,appName:t.name,v:xt},r=sd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${hn(i).slice(1)}`}async function ad(t){const e=await ed(t),n=ge().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:od(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rd,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=he(t,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},td.get());function c(){ge().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ld=500,hd=600,ud="_blank",dd="http://localhost";class $s{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fd(t,e,n,i=ld,r=hd){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c={...cd,width:i.toString(),height:r.toString(),top:s,left:o},u=q().toLowerCase();n&&(a=qo(u)?ud:n),Ko(u)&&(e=e||dd,c.scrollbars="yes");const y=Object.entries(c).reduce((v,[S,A])=>`${v}${S}=${A},`,"");if($h(u)&&a!=="_self")return pd(e||"",a),new $s(null);const b=window.open(e||"",a,y);T(b,t,"popup-blocked");try{b.focus()}catch{}return new $s(b)}function pd(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="__/auth/handler",gd="emulator/auth/handler",yd=encodeURIComponent("fac");async function Ns(t,e,n,i,r,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:xt,eventId:r};if(e instanceof kr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries(s||{}))o[y]=b}if(e instanceof pn){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(o.scopes=y.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const y of Object.keys(a))a[y]===void 0&&delete a[y];const c=await t._getAppCheckToken(),u=c?`#${yd}=${encodeURIComponent(c)}`:"";return`${bd(t)}?${hn(a).slice(1)}${u}`}function bd({config:t}){return t.emulator?gr(t,gd):`https://${t.authDomain}/${md}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="webStorageSupport";class wd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=da,this._completeRedirectFn=Hu,this._overrideRedirectResult=Fu}async _openPopup(e,n,i,r){var o;Oe((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ns(e,n,i,Ki(),r);return fd(e,s,_r())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Ns(e,n,i,Ki(),r);return _u(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Oe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ad(e),i=new Wu(e);return n.register("authEvent",r=>(T(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Di,{type:Di},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[Di];s!==void 0&&n(!!s),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ju(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qo()||Go()||br()}}const vd=wd;var Ds="@firebase/auth",xs="1.13.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Td(t){It(new dt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ea(t)},u=new Lh(i,r,s,c);return jh(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(i=>new kd(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Ds,xs,_d(t)),Je(Ds,xs,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=5*60,Sd=$o("authIdTokenMaxAge")||Ed;let Cs=null;const Id=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Sd)return;const r=n==null?void 0:n.token;Cs!==r&&(Cs=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ad(t=Lo()){const e=pr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hh(t,{popupRedirectResolver:vd,persistence:[Du,wu,da]}),i=$o("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=Id(s.toString());pu(n,o,()=>o(n.currentUser)),fu(n,a=>o(a))}}const r=Ao("auth");return r&&Wh(n,`http://${r}`),n}function Pd(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Oh({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=he("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Pd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Td("Browser");var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ka;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,l){function d(){}d.prototype=l.prototype,f.F=l.prototype,f.prototype=new d,f.prototype.constructor=f,f.D=function(m,p,g){for(var h=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)h[Qe-2]=arguments[Qe];return l.prototype[p].apply(m,h)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(f,l,d){d||(d=0);const m=Array(16);if(typeof l=="string")for(var p=0;p<16;++p)m[p]=l.charCodeAt(d++)|l.charCodeAt(d++)<<8|l.charCodeAt(d++)<<16|l.charCodeAt(d++)<<24;else for(p=0;p<16;++p)m[p]=l[d++]|l[d++]<<8|l[d++]<<16|l[d++]<<24;l=f.g[0],d=f.g[1],p=f.g[2];let g=f.g[3],h;h=l+(g^d&(p^g))+m[0]+3614090360&4294967295,l=d+(h<<7&4294967295|h>>>25),h=g+(p^l&(d^p))+m[1]+3905402710&4294967295,g=l+(h<<12&4294967295|h>>>20),h=p+(d^g&(l^d))+m[2]+606105819&4294967295,p=g+(h<<17&4294967295|h>>>15),h=d+(l^p&(g^l))+m[3]+3250441966&4294967295,d=p+(h<<22&4294967295|h>>>10),h=l+(g^d&(p^g))+m[4]+4118548399&4294967295,l=d+(h<<7&4294967295|h>>>25),h=g+(p^l&(d^p))+m[5]+1200080426&4294967295,g=l+(h<<12&4294967295|h>>>20),h=p+(d^g&(l^d))+m[6]+2821735955&4294967295,p=g+(h<<17&4294967295|h>>>15),h=d+(l^p&(g^l))+m[7]+4249261313&4294967295,d=p+(h<<22&4294967295|h>>>10),h=l+(g^d&(p^g))+m[8]+1770035416&4294967295,l=d+(h<<7&4294967295|h>>>25),h=g+(p^l&(d^p))+m[9]+2336552879&4294967295,g=l+(h<<12&4294967295|h>>>20),h=p+(d^g&(l^d))+m[10]+4294925233&4294967295,p=g+(h<<17&4294967295|h>>>15),h=d+(l^p&(g^l))+m[11]+2304563134&4294967295,d=p+(h<<22&4294967295|h>>>10),h=l+(g^d&(p^g))+m[12]+1804603682&4294967295,l=d+(h<<7&4294967295|h>>>25),h=g+(p^l&(d^p))+m[13]+4254626195&4294967295,g=l+(h<<12&4294967295|h>>>20),h=p+(d^g&(l^d))+m[14]+2792965006&4294967295,p=g+(h<<17&4294967295|h>>>15),h=d+(l^p&(g^l))+m[15]+1236535329&4294967295,d=p+(h<<22&4294967295|h>>>10),h=l+(p^g&(d^p))+m[1]+4129170786&4294967295,l=d+(h<<5&4294967295|h>>>27),h=g+(d^p&(l^d))+m[6]+3225465664&4294967295,g=l+(h<<9&4294967295|h>>>23),h=p+(l^d&(g^l))+m[11]+643717713&4294967295,p=g+(h<<14&4294967295|h>>>18),h=d+(g^l&(p^g))+m[0]+3921069994&4294967295,d=p+(h<<20&4294967295|h>>>12),h=l+(p^g&(d^p))+m[5]+3593408605&4294967295,l=d+(h<<5&4294967295|h>>>27),h=g+(d^p&(l^d))+m[10]+38016083&4294967295,g=l+(h<<9&4294967295|h>>>23),h=p+(l^d&(g^l))+m[15]+3634488961&4294967295,p=g+(h<<14&4294967295|h>>>18),h=d+(g^l&(p^g))+m[4]+3889429448&4294967295,d=p+(h<<20&4294967295|h>>>12),h=l+(p^g&(d^p))+m[9]+568446438&4294967295,l=d+(h<<5&4294967295|h>>>27),h=g+(d^p&(l^d))+m[14]+3275163606&4294967295,g=l+(h<<9&4294967295|h>>>23),h=p+(l^d&(g^l))+m[3]+4107603335&4294967295,p=g+(h<<14&4294967295|h>>>18),h=d+(g^l&(p^g))+m[8]+1163531501&4294967295,d=p+(h<<20&4294967295|h>>>12),h=l+(p^g&(d^p))+m[13]+2850285829&4294967295,l=d+(h<<5&4294967295|h>>>27),h=g+(d^p&(l^d))+m[2]+4243563512&4294967295,g=l+(h<<9&4294967295|h>>>23),h=p+(l^d&(g^l))+m[7]+1735328473&4294967295,p=g+(h<<14&4294967295|h>>>18),h=d+(g^l&(p^g))+m[12]+2368359562&4294967295,d=p+(h<<20&4294967295|h>>>12),h=l+(d^p^g)+m[5]+4294588738&4294967295,l=d+(h<<4&4294967295|h>>>28),h=g+(l^d^p)+m[8]+2272392833&4294967295,g=l+(h<<11&4294967295|h>>>21),h=p+(g^l^d)+m[11]+1839030562&4294967295,p=g+(h<<16&4294967295|h>>>16),h=d+(p^g^l)+m[14]+4259657740&4294967295,d=p+(h<<23&4294967295|h>>>9),h=l+(d^p^g)+m[1]+2763975236&4294967295,l=d+(h<<4&4294967295|h>>>28),h=g+(l^d^p)+m[4]+1272893353&4294967295,g=l+(h<<11&4294967295|h>>>21),h=p+(g^l^d)+m[7]+4139469664&4294967295,p=g+(h<<16&4294967295|h>>>16),h=d+(p^g^l)+m[10]+3200236656&4294967295,d=p+(h<<23&4294967295|h>>>9),h=l+(d^p^g)+m[13]+681279174&4294967295,l=d+(h<<4&4294967295|h>>>28),h=g+(l^d^p)+m[0]+3936430074&4294967295,g=l+(h<<11&4294967295|h>>>21),h=p+(g^l^d)+m[3]+3572445317&4294967295,p=g+(h<<16&4294967295|h>>>16),h=d+(p^g^l)+m[6]+76029189&4294967295,d=p+(h<<23&4294967295|h>>>9),h=l+(d^p^g)+m[9]+3654602809&4294967295,l=d+(h<<4&4294967295|h>>>28),h=g+(l^d^p)+m[12]+3873151461&4294967295,g=l+(h<<11&4294967295|h>>>21),h=p+(g^l^d)+m[15]+530742520&4294967295,p=g+(h<<16&4294967295|h>>>16),h=d+(p^g^l)+m[2]+3299628645&4294967295,d=p+(h<<23&4294967295|h>>>9),h=l+(p^(d|~g))+m[0]+4096336452&4294967295,l=d+(h<<6&4294967295|h>>>26),h=g+(d^(l|~p))+m[7]+1126891415&4294967295,g=l+(h<<10&4294967295|h>>>22),h=p+(l^(g|~d))+m[14]+2878612391&4294967295,p=g+(h<<15&4294967295|h>>>17),h=d+(g^(p|~l))+m[5]+4237533241&4294967295,d=p+(h<<21&4294967295|h>>>11),h=l+(p^(d|~g))+m[12]+1700485571&4294967295,l=d+(h<<6&4294967295|h>>>26),h=g+(d^(l|~p))+m[3]+2399980690&4294967295,g=l+(h<<10&4294967295|h>>>22),h=p+(l^(g|~d))+m[10]+4293915773&4294967295,p=g+(h<<15&4294967295|h>>>17),h=d+(g^(p|~l))+m[1]+2240044497&4294967295,d=p+(h<<21&4294967295|h>>>11),h=l+(p^(d|~g))+m[8]+1873313359&4294967295,l=d+(h<<6&4294967295|h>>>26),h=g+(d^(l|~p))+m[15]+4264355552&4294967295,g=l+(h<<10&4294967295|h>>>22),h=p+(l^(g|~d))+m[6]+2734768916&4294967295,p=g+(h<<15&4294967295|h>>>17),h=d+(g^(p|~l))+m[13]+1309151649&4294967295,d=p+(h<<21&4294967295|h>>>11),h=l+(p^(d|~g))+m[4]+4149444226&4294967295,l=d+(h<<6&4294967295|h>>>26),h=g+(d^(l|~p))+m[11]+3174756917&4294967295,g=l+(h<<10&4294967295|h>>>22),h=p+(l^(g|~d))+m[2]+718787259&4294967295,p=g+(h<<15&4294967295|h>>>17),h=d+(g^(p|~l))+m[9]+3951481745&4294967295,f.g[0]=f.g[0]+l&4294967295,f.g[1]=f.g[1]+(p+(h<<21&4294967295|h>>>11))&4294967295,f.g[2]=f.g[2]+p&4294967295,f.g[3]=f.g[3]+g&4294967295}i.prototype.v=function(f,l){l===void 0&&(l=f.length);const d=l-this.blockSize,m=this.C;let p=this.h,g=0;for(;g<l;){if(p==0)for(;g<=d;)r(this,f,g),g+=this.blockSize;if(typeof f=="string"){for(;g<l;)if(m[p++]=f.charCodeAt(g++),p==this.blockSize){r(this,m),p=0;break}}else for(;g<l;)if(m[p++]=f[g++],p==this.blockSize){r(this,m),p=0;break}}this.h=p,this.o+=l},i.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var l=1;l<f.length-8;++l)f[l]=0;l=this.o*8;for(var d=f.length-8;d<f.length;++d)f[d]=l&255,l/=256;for(this.v(f),f=Array(16),l=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)f[l++]=this.g[d]>>>m&255;return f};function s(f,l){var d=a;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=l(f)}function o(f,l){this.h=l;const d=[];let m=!0;for(let p=f.length-1;p>=0;p--){const g=f[p]|0;m&&g==l||(d[p]=g,m=!1)}this.g=d}var a={};function c(f){return-128<=f&&f<128?s(f,function(l){return new o([l|0],l<0?-1:0)}):new o([f|0],f<0?-1:0)}function u(f){if(isNaN(f)||!isFinite(f))return b;if(f<0)return D(u(-f));const l=[];let d=1;for(let m=0;f>=d;m++)l[m]=f/d|0,d*=4294967296;return new o(l,0)}function y(f,l){if(f.length==0)throw Error("number format error: empty string");if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(f.charAt(0)=="-")return D(y(f.substring(1),l));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=u(Math.pow(l,8));let m=b;for(let g=0;g<f.length;g+=8){var p=Math.min(8,f.length-g);const h=parseInt(f.substring(g,g+p),l);p<8?(p=u(Math.pow(l,p)),m=m.j(p).add(u(h))):(m=m.j(d),m=m.add(u(h)))}return m}var b=c(0),v=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();let f=0,l=1;for(let d=0;d<this.g.length;d++){const m=this.i(d);f+=(m>=0?m:4294967296+m)*l,l*=4294967296}return f},t.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(A(this))return"0";if(O(this))return"-"+D(this).toString(f);const l=u(Math.pow(f,6));var d=this;let m="";for(;;){const p=Ze(d,l).g;d=J(d,p.j(l));let g=((d.g.length>0?d.g[0]:d.h)>>>0).toString(f);if(d=p,A(d))return g+m;for(;g.length<6;)g="0"+g;m=g+m}},t.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function A(f){if(f.h!=0)return!1;for(let l=0;l<f.g.length;l++)if(f.g[l]!=0)return!1;return!0}function O(f){return f.h==-1}t.l=function(f){return f=J(this,f),O(f)?-1:A(f)?0:1};function D(f){const l=f.g.length,d=[];for(let m=0;m<l;m++)d[m]=~f.g[m];return new o(d,~f.h).add(v)}t.abs=function(){return O(this)?D(this):this},t.add=function(f){const l=Math.max(this.g.length,f.g.length),d=[];let m=0;for(let p=0;p<=l;p++){let g=m+(this.i(p)&65535)+(f.i(p)&65535),h=(g>>>16)+(this.i(p)>>>16)+(f.i(p)>>>16);m=h>>>16,g&=65535,h&=65535,d[p]=h<<16|g}return new o(d,d[d.length-1]&-2147483648?-1:0)};function J(f,l){return f.add(D(l))}t.j=function(f){if(A(this)||A(f))return b;if(O(this))return O(f)?D(this).j(D(f)):D(D(this).j(f));if(O(f))return D(this.j(D(f)));if(this.l(S)<0&&f.l(S)<0)return u(this.m()*f.m());const l=this.g.length+f.g.length,d=[];for(var m=0;m<2*l;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<f.g.length;p++){const g=this.i(m)>>>16,h=this.i(m)&65535,Qe=f.i(p)>>>16,Gr=f.i(p)&65535;d[2*m+2*p]+=h*Gr,re(d,2*m+2*p),d[2*m+2*p+1]+=g*Gr,re(d,2*m+2*p+1),d[2*m+2*p+1]+=h*Qe,re(d,2*m+2*p+1),d[2*m+2*p+2]+=g*Qe,re(d,2*m+2*p+2)}for(f=0;f<l;f++)d[f]=d[2*f+1]<<16|d[2*f];for(f=l;f<2*l;f++)d[f]=0;return new o(d,0)};function re(f,l){for(;(f[l]&65535)!=f[l];)f[l+1]+=f[l]>>>16,f[l]&=65535,l++}function Fe(f,l){this.g=f,this.h=l}function Ze(f,l){if(A(l))throw Error("division by zero");if(A(f))return new Fe(b,b);if(O(f))return l=Ze(D(f),l),new Fe(D(l.g),D(l.h));if(O(l))return l=Ze(f,D(l)),new Fe(D(l.g),l.h);if(f.g.length>30){if(O(f)||O(l))throw Error("slowDivide_ only works with positive integers.");for(var d=v,m=l;m.l(f)<=0;)d=Lt(d),m=Lt(m);var p=_e(d,1),g=_e(m,1);for(m=_e(m,2),d=_e(d,2);!A(m);){var h=g.add(m);h.l(f)<=0&&(p=p.add(d),g=h),m=_e(m,1),d=_e(d,1)}return l=J(f,p.j(l)),new Fe(p,l)}for(p=b;f.l(l)>=0;){for(d=Math.max(1,Math.floor(f.m()/l.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),g=u(d),h=g.j(l);O(h)||h.l(f)>0;)d-=m,g=u(d),h=g.j(l);A(g)&&(g=v),p=p.add(g),f=J(f,h)}return new Fe(p,f)}t.B=function(f){return Ze(this,f).h},t.and=function(f){const l=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<l;m++)d[m]=this.i(m)&f.i(m);return new o(d,this.h&f.h)},t.or=function(f){const l=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<l;m++)d[m]=this.i(m)|f.i(m);return new o(d,this.h|f.h)},t.xor=function(f){const l=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<l;m++)d[m]=this.i(m)^f.i(m);return new o(d,this.h^f.h)};function Lt(f){const l=f.g.length+1,d=[];for(let m=0;m<l;m++)d[m]=f.i(m)<<1|f.i(m-1)>>>31;return new o(d,f.h)}function _e(f,l){const d=l>>5;l%=32;const m=f.g.length-d,p=[];for(let g=0;g<m;g++)p[g]=l>0?f.i(g+d)>>>l|f.i(g+d+1)<<32-l:f.i(g+d);return new o(p,f.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=y,ka=o}).apply(typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{});function H(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt="13.2.0";function $d(t){Rt=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new dr("@firebase/firestore");function mt(t,...e){if(Pt.logLevel<=N.DEBUG){const n=e.map(Er);Pt.debug(`Firestore (${Rt}): ${t}`,...n)}}function di(t,...e){if(Pt.logLevel<=N.ERROR){const n=e.map(Er);Pt.error(`Firestore (${Rt}): ${t}`,...n)}}function _a(t,...e){if(Pt.logLevel<=N.WARN){const n=e.map(Er);Pt.warn(`Firestore (${Rt}): ${t}`,...n)}}function Er(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Ta(t,i,n)}function Ta(t,e,n){let i=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw di(i),new Error(i)}function ne(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||Ta(e,r,i)}function Ea(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Me{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class Dd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xd{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ne(typeof e.accessToken=="string",42297,{Z:e}),new Sa(e.accessToken,new X(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Cd{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=X.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Rd{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new Cd(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ls{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ld{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,Q(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit(i=>{this.appCheck=i})}getToken(){return this.oe?Promise.resolve(new Ls(this.oe)):this.appCheck?this.appCheck.getToken().then(e=>e?(ne(typeof e.token=="string",3470,{tokenResult:e}),new Ls(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,i,r,s,o,a,c,u,y,b,v,S){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=y,this.apiKey=b,this._customHeaders=v,this.grpcFlowControlWindow=S}}const qi="(default)";class Qt{constructor(e,n){this.projectId=e,this.database=n||qi}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database===qi}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}function Md(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qt(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Vd(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%62))}return i}}function be(t,e){return t<e?-1:t>e?1:0}function Sr(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const r=t.charAt(i),s=e.charAt(i);if(r!==s)return xi(r)===xi(s)?be(r,s):xi(r)?1:-1}return be(t.length,e.length)}const Fd=55296,zd=57343;function xi(t){const e=t.charCodeAt(0);return e>=Fd&&e<=zd}function Ia(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="__name__";class fe{constructor(e,n,i){n===void 0?n=0:n>e.length&&R(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&R(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return fe.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fe?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=fe.compareSegments(e.get(r),n.get(r));if(s!==0)return s}return be(e.length,n.length)}static compareSegments(e,n){const i=fe.isNumericId(e),r=fe.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?fe.extractNumericId(e).compare(fe.extractNumericId(n)):Sr(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ka.fromString(e.substring(4,e.length-2))}}class z extends fe{construct(e,n,i){return new z(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new z(n)}static emptyPath(){return new z([])}}const Bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let en=class wt extends fe{construct(e,n,i){return new wt(e,n,i)}static isValidIdentifier(e){return Bd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Os}static keyField(){return new wt([Os])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(z.fromString(e))}static fromName(e){return new te(z.fromString(e).popFirst(5))}static empty(){return new te(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new z(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ms(t){if(!te.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Aa(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ir(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R(12329,{type:typeof t})}function Ar(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ir(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn=null;function jd(){return vn===null?vn=function(){return 268435456+Math.round(2147483648*Math.random())}():vn++,"0x"+vn.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){return t==null}function Gn(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="RestConnection",Kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gd{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${r}`,this.ce=this.databaseId.database===qi?`project_id=${i}`:`project_id=${i}&database_id=${r}`}le(e,n,i,r,s){const o=jd(),a=this.fe(e,n.toUriEncodedString());mt(Ci,`Sending RPC '${e}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(c,r,s);const{host:u}=new URL(a),y=un(u);return this.de(e,a,c,i,y).then(b=>(mt(Ci,`Received RPC '${e}' ${o}: `,b),b),b=>{throw _a(Ci,`RPC '${e}' ${o} failed with error: `,b,"url: ",a,"request:",i),b})}me(e,n,i,r,s,o){return this.le(e,n,i,r,s)}he(e,n,i){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}fe(e,n){const i=Kd[e];let r=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vs,I,F,vt,Yi,Dn,xn,Ft;function qd(t){switch(t){case w.OK:return R(64938);case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0;default:return R(15467,{code:t})}}function Us(t){if(t===void 0)return di("RPC_ERROR","HTTP error has no status"),w.UNKNOWN;switch(t){case 200:return w.OK;case 400:return w.FAILED_PRECONDITION;case 401:return w.UNAUTHENTICATED;case 403:return w.PERMISSION_DENIED;case 404:return w.NOT_FOUND;case 409:return w.ABORTED;case 416:return w.OUT_OF_RANGE;case 429:return w.RESOURCE_EXHAUSTED;case 499:return w.CANCELLED;case 500:return w.UNKNOWN;case 501:return w.UNIMPLEMENTED;case 503:return w.UNAVAILABLE;case 504:return w.DEADLINE_EXCEEDED;default:return t>=200&&t<300?w.OK:t>=400&&t<500?w.FAILED_PRECONDITION:t>=500&&t<600?w.INTERNAL:w.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(I=Vs||(Vs={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";class Yd extends Gd{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,r,s){var c;const o=JSON.stringify(r);let a;try{const u={method:"POST",headers:i,body:o};s&&(u.credentials="include"),a=await fetch(n,u)}catch(u){const y=u,b=y==null?void 0:y.message,v=y!=null&&y.cause?String(y.cause):void 0,S=(b&&v?`${b} (${v})`:b??v)??(y==null?void 0:y.statusText)??String(u);throw new E(Us(y==null?void 0:y.status),`Request failed with error: ${S}`)}if(!a.ok){let u=await a.json();Array.isArray(u)&&(u=u[0]);const y=(c=u==null?void 0:u.error)==null?void 0:c.message;throw new E(Us(a.status),`Request failed with error: ${y??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jd("Invalid base64 string: "+s):s}}(e);return new ce(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function tn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}ce.EMPTY_BYTE_STRING=new ce("");/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new _;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,r=this.be(e,i);if(r==0&&this.isEmpty(i)||(n+=r)<_.we)return;if(n>_.ge)return void(this.exponent=Number(_.Fe));let s=this.ve(n,i);this.xe(n,s,i)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let r=-i;if(e.length-i>_.De){let s=e[_.De]>=5,o=new Array(_.De).fill(0);for(let a=0;a<_.De;a++)o[a]=e[a+i];s&&(r+=this.Ne(o)),e=o,i=0}for(let s=e.length-1;s>=i;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return r}Se(e){let n=e.length;for(let i=0;i<n;i++){let r=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=r<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,r=Number(i)/_.Ce;return Math.floor(Number(e)*_.Be+this.log2(r))}log2(e){return _.Qe*Math.log(e)}xe(e,n,i){let r=this.Ie;this.Oe(-n,r);let s=this.pe;this.Me(i,r,s),this.qe(s),BigInt(r[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=_.Ue)<=0||(n+=this.$e(s),BigInt(n)>=_.Fe?this.exponent=Number(_.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(_.je[0],n);let i=_.je;e<0&&(e=-e,i=_.Ke);let r=_.ze,s=32,o=!0;for(;e>0;)e>=r&&(o?(this.ke(i[s],n),o=!1):this.We(n,i[s],n),e-=r),s-=1,r*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let r=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(r)}Ge(e,n,i){for(let r=0;r<i.length;r++)i[r]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let r=5;r>=0;r--)for(let s=5;s>=0;s--){let o=this.Ae[r]*this.Re[s];i[s+r+1]=i[s+r+1]+(o&_.Xe)&0xffffffffffffffffn,i[s+r]=i[s+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)i[r-1]=i[r-1]+(i[r]>>32n)&0xffffffffffffffffn,i[r]&=_.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let r=this.Re;this.Ye(n,r);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let c=e[o]*r[a];i[a+o+1]=i[a+o+1]+(c&_.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(c>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=_.Xe}qe(e){let n=e.length-1;e[0]&=_.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=_.Xe}Le(e){let n=31-_.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&_.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&_.Xe,n[2]=e[2]>>32n,n[3]=e[2]&_.Xe,n[4]=e[3]>>32n,n[5]=e[3]&_.Xe}tt(e,n){let i=e.length-1,r=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<r&_.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>r);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&_.Xe|e[o+1]>>r);e[i]=e[i]<<s&_.Xe}}rt(e,n,i){let r=n;e[r]=e[r]+i&0xffffffffffffffffn;for(let s=r+1-1;s>=1&&(e[s]&_.nt)!=0n;s--)e[s]&=_.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}_.De=59,_.ge=646456993,_.we=-646457032,_.Ce=0xccccccccccccd00,_.it=0x8000000000000000n,_.ze=2147483648,_.Xe=0x00000000ffffffffn,_.nt=0xffffffff00000000n,_.Be=Math.log(10)/Math.log(2),_.Qe=1/Math.log(2),_.Ue=2147483647,_.Fe=0xffffffffn,_.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],_.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class k{constructor(e,n,i,r){this.negative=e,this.st=n,this.Ve=i,this.Te=r}exponent(){return this.st-_.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===H(k,F,"f",vt)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===H(k,F,"f",vt)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+H(k,F,"m",Yi).call(k,this.Ve)+H(k,F,"m",Yi).call(k,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return k.NaN;if(!isFinite(e))return e<0?k._t:k.ct;if(e===0)return Math.sign(1/e)>0?k.lt:k.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let r=BigInt.asUintN(64,i<<12n),s=2047&Number(i>>52n);if(s===0){const o=_.et(r);r=o<63?r<<BigInt(o+1):0n,s=-o}return new k(e<0,H(k,F,"m",Ft).call(k,s-1023),r,0n)}static fromString(e){if(e==="NaN")return k.NaN;if(e==="-Infinity")return k._t;if(e==="Infinity"||e==="+Infinity")return k.ct;const n=new Array(e.length).fill(0);let i=0,r=0,s=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;H(k,F,"m",Dn).call(k,e,i);)n[r++]=H(k,F,"m",xn).call(k,e,i++);if(e[i]==="."){const c=++i;for(;H(k,F,"m",Dn).call(k,e,i);)n[r++]=H(k,F,"m",xn).call(k,e,i++);s=c-i}if(e[i]==="e"||e[i]==="E"){let c=0;i++;let u=1;e[i]==="-"?(u=-1,i++):e[i]==="+"&&i++;const y=i;for(;H(k,F,"m",Dn).call(k,e,i);)if(c=10*c+H(k,F,"m",xn).call(k,e,i++),i-y>9)throw new Error("Exponent too large "+e);if(i===y)throw new Error("Invalid number "+e);s+=c*u}if(r===0||i!==e.length)throw new Error("Invalid number "+e);const a=_.ye(n.slice(0,r),s);return new k(o,a.exponent,a.Ve,a.Te)}}F=k,Yi=function(e){return e.toString(16).padStart(16,"0")},Dn=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},xn=function(e,n){return e.codePointAt(n)-48},Ft=function(e){return e+_.Ue},vt={value:Number(_.Fe)},k.lt=new k(!1,0,0n,0n),k.ft=new k(!0,0,0n,0n),k.NaN=new k(!1,H(k,F,"f",vt),1n<<63n,0n),k._t=new k(!0,H(k,F,"f",vt),0n,0n),k.ct=new k(!1,H(k,F,"f",vt),0n,0n),new k(!0,H(k,F,"m",Ft).call(k,63),0n,0n),new k(!1,H(k,F,"m",Ft).call(k,0),0n,0n),new k(!0,H(k,F,"m",Ft).call(k,0),0n,0n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(t){if(ne(!!t,39018),typeof t=="string"){let e=0;const n=Xd.exec(t);if(ne(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Z(t.seconds),nanos:Z(t.nanos)}}function Z(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qn(t){return typeof t=="string"?ce.fromBase64String(t):ce.fromUint8Array(t)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e){const n={typeString:t};return e&&(n.value=e),n}function yn(t,e){if(!Aa(t))throw new E(w.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(r&&typeof a!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new E(w.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=-62135596800,zs=1e6;class M{static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*zs);return new M(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new E(w.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return M._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(r+1000000000n))}return new M(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fs)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zs}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(w.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:M._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yn(e,M._jsonSchema))return new M(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}M._jsonSchemaVersion="firestore/timestamp/1.0",M._jsonSchema={type:ie("string",M._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};function Zd(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function $a(t){const e=t.mapValue.fields.__previous_value__;return Zd(e)?$a(e):e}function Ji(t){const e=nn(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="__type__",Da="__vector__",xa="value",Qd="server_timestamp",Ca="__min__",Pr="__max__",Ge="__regex__",Yn="pattern",Jn="options",rn="__oid__",bn="__int__",$t="__decimal128__",ot="__request_timestamp__",Xn="seconds",Zn="increment",fi="__binary__";var x,se;(se=x||(x={})).dt="regexValue",se.Et="bsonObjectIdValue",se.Vt="int32Value",se.Tt="decimal128Value",se.It="bsonTimestampValue",se.At="bsonBinaryValue",se.Rt="minKeyValue",se.Pt="maxKeyValue",se.yt="maxValue",se.bt="vectorValue",se.wt="serverTimestampValue",se.gt="regularMapValue";const Bs={[Da]:x.bt,[Pr]:x.yt,[Qd]:x.wt},Ra={[Ge]:x.dt,[rn]:x.Et,[bn]:x.Vt,[$t]:x.Tt,[ot]:x.It,[fi]:x.At,[Ca]:x.Rt,[Pr]:x.Pt};function Xi(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return R(28295,{value:t});switch(function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return x.gt;const r=i.mapValue.fields,s=(a=r[Na])==null?void 0:a.stringValue;if(s&&Bs[s])return Bs[s];if(tn(r)===1){const c=Object.keys(r);return Ra[c[0]]??x.gt}return x.gt}(t)){case x.wt:return 6;case x.yt:return 9007199254740991;case x.bt:return 14;case x.dt:return 12;case x.Et:return 10;case x.Vt:case x.Tt:return 3;case x.It:return 5;case x.At:return 8;case x.Rt:return 1;case x.Pt:return 16;default:return 15}}function Zi(t,e,n){if(t===e)return!0;const i=Xi(t);if(i!==Xi(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return Ji(t).isEqual(Ji(e));case 4:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=nn(s.timestampValue),c=nn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 7:return t.stringValue===e.stringValue;case 8:return function(s,o){return nf(s,o)===0}(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(t,e);case 3:return function(s,o,a){if(Nt(s)&&Nt(o))return La(s,o)===0;if("integerValue"in s&&"integerValue"in o||Qn(s)&&Qn(o))return sn(s)===sn(o);let c,u;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(c=Z(s.doubleValue),u=Z(o.doubleValue),c===u?Gn(c)===Gn(u):!!(a===void 0||a.vt)&&isNaN(c)&&isNaN(u))}(t,e,n);case 13:return Ia(t.arrayValue.values||[],e.arrayValue.values||[],(r,s)=>Zi(r,s,n));case 14:case 15:return function(s,o,a){const c=s.mapValue.fields||{},u=o.mapValue.fields||{};if(tn(c)!==tn(u))return!1;for(const y in c)if(c.hasOwnProperty(y)&&(u[y]===void 0||!Zi(c[y],u[y],a)))return!1;return!0}(t,e,n);case 5:return tf(t,e)===0;case 12:return rf(t,e)===0;case 10:return sf(t,e)===0;default:return R(52216,{left:t})}}function sn(t){let e;return e=Qn(t)?t.mapValue.fields[bn].integerValue:t.integerValue||t.doubleValue,Z(e)}function ef(t){return t.mapValue.fields[$t].stringValue}function Hs(t,e){if(Nt(t)||Nt(e))return La(t,e);const n=sn(t),i=sn(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:be(n,i)}function La(t,e){const n=js(t),i=js(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function js(t){return Nt(t)?k.fromString(ef(t)):k.fromNumber(sn(t))}function tf(t,e){var a,c,u,y,b,v,S,A,O,D,J,re;const n=(u=(c=(a=t.mapValue.fields)==null?void 0:a[ot].mapValue)==null?void 0:c.fields)==null?void 0:u[Xn],i=(v=(b=(y=e.mapValue.fields)==null?void 0:y[ot].mapValue)==null?void 0:b.fields)==null?void 0:v[Xn],r=(O=(A=(S=t.mapValue.fields)==null?void 0:S[ot].mapValue)==null?void 0:A.fields)==null?void 0:O[Zn],s=(re=(J=(D=e.mapValue.fields)==null?void 0:D[ot].mapValue)==null?void 0:J.fields)==null?void 0:re[Zn],o=Hs(n,i);return o!==0?o:Hs(r,s)}function Ws(t){var a;if("bytesValue"in t)return{subtype:0,bytes:qn(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[fi],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const r=qn(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const s=r[0],o=r.slice(1);return{subtype:s,bytes:ce.fromUint8Array(o)}}function nf(t,e){const n=Ws(t),i=Ws(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function rf(t,e){var u,y,b,v,S,A,O,D,J,re,Fe,Ze,Lt,_e,f,l;const n=t.mapValue.fields,i=((v=(b=(y=(u=n==null?void 0:n[Ge])==null?void 0:u.mapValue)==null?void 0:y.fields)==null?void 0:b[Yn])==null?void 0:v.stringValue)??"",r=((D=(O=(A=(S=n==null?void 0:n[Ge])==null?void 0:S.mapValue)==null?void 0:A.fields)==null?void 0:O[Jn])==null?void 0:D.stringValue)??"",s=e.mapValue.fields,o=((Ze=(Fe=(re=(J=s==null?void 0:s[Ge])==null?void 0:J.mapValue)==null?void 0:re.fields)==null?void 0:Fe[Yn])==null?void 0:Ze.stringValue)??"",a=((l=(f=(_e=(Lt=s==null?void 0:s[Ge])==null?void 0:Lt.mapValue)==null?void 0:_e.fields)==null?void 0:f[Jn])==null?void 0:l.stringValue)??"",c=Sr(i,o);return c!==0?c:be(r,a)}function sf(t,e){var n,i,r,s;return Sr(((i=(n=t.mapValue.fields)==null?void 0:n[rn])==null?void 0:i.stringValue)??"",((s=(r=e.mapValue.fields)==null?void 0:r[rn])==null?void 0:s.stringValue)??"")}function Nt(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return tn(e)===1&&e[$t]&&!!e[$t].stringValue}function Qn(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return tn(e)===1&&((i=e[bn])==null?void 0:i.integerValue)!==void 0}function Ri(t){return!!t&&"mapValue"in t}function Kt(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return gn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Kt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kt(t.arrayValue.values[n]);return e}return{...t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Set(Object.values(Ra));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static fromTimestamp(e){return new V(e)}static min(){return new V(new M(0,0))}static max(){return new V(new M(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.comparator=e,this.root=n||j.EMPTY}insert(e,n){return new ei(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(e){return new ei(this.comparator,this.root.remove(e,this.comparator).copy(null,null,j.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kn(this.root,e,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kn(this.root,e,this.comparator,!0)}}class kn{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class j{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??j.RED,this.left=r??j.EMPTY,this.right=s??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new j(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return j.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R(43730,{key:this.key,value:this.value});if(this.right.isRed())throw R(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw R(27949);return e+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw R(57766)}get value(){throw R(16141)}get color(){throw R(16727)}get left(){throw R(29726)}get right(){throw R(36894)}copy(e,n,i,r,s){return this}insert(e,n,i){return new j(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.comparator=e,this.data=new ei(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ks(this.data.getIterator())}getIteratorFrom(e){return new Ks(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ti)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ti(this.comparator);return n.data=e,n}}class Ks{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new gt([])}unionWith(e){let n=new ti(en.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ia(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.value=e}static empty(){return new oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ri(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kt(n)}setAll(e){let n=en.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Kt(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Ri(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Ri(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){gn(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new oe(Kt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Se(e,0,V.min(),V.min(),V.min(),oe.empty(),0)}static newFoundDocument(e,n,i,r){return new Se(e,1,n,V.min(),i,r,0)}static newNoDocument(e,n){return new Se(e,2,n,V.min(),V.min(),oe.empty(),0)}static newUnknownDocument(e,n){return new Se(e,3,n,V.min(),V.min(),oe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(e)?"-0":e}}function Cn(t){return{integerValue:""+t}}function af(t,e,n){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?Cn(e):Oa(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this._=void 0}}class Ma extends pi{}class cf extends pi{constructor(e){super(),this.elements=e}}class lf extends pi{constructor(e){super(),this.elements=e}}class $r extends pi{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class hf extends $r{}class uf extends $r{}class df extends $r{}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.field=e,this.transform=n}}class Ae{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class mi{}class Va extends mi{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Nr extends mi{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Ua extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fa extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class pf{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rn(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gs(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function mf(t,e){return Rn(t,e.toTimestamp())}function Li(t){return ne(!!t,49232),V.fromTimestamp(function(n){const i=nn(n);return new M(i.seconds,i.nanos)}(t))}function za(t,e){return Qi(t,e).canonicalString()}function Qi(t,e){const n=function(r){return new z(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ni(t,e){return za(t.databaseId,e.path)}function qs(t,e){const n=function(r){const s=z.fromString(r);return ne(Ba(s),10190,{key:s.toString()}),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(function(r){return ne(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}(n))}function Ys(t,e,n){return{name:ni(t,e),fields:n.value.mapValue.fields}}function gf(t,e){return"found"in e?function(i,r){ne(!!r.found,43571),r.found.name,r.found.updateTime;const s=qs(i,r.found.name),o=Li(r.found.updateTime),a=r.found.createTime?Li(r.found.createTime):V.min(),c=new oe({mapValue:{fields:r.found.fields}});return Se.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(i,r){ne(!!r.missing,3894),ne(!!r.readTime,22933);const s=qs(i,r.missing),o=Li(r.readTime);return Se.newNoDocument(s,o)}(t,e):R(7234,{result:e})}function yf(t,e){let n;if(e instanceof Va)n={update:Ys(t,e.key,e.value)};else if(e instanceof Ua)n={delete:ni(t,e.key)};else if(e instanceof Nr)n={update:Ys(t,e.key,e.data),updateMask:bf(e.fieldMask)};else{if(!(e instanceof Fa))return R(16599,{Ot:e.type});n={verify:ni(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof cf)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lf)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hf)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof uf)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof df)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw R(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:mf(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R(27497)}(t,e.precondition)),n}function bf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ba(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Ha(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){return new pf(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{}class vf extends wf{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.qt=!1}Lt(){if(this.qt)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.le(e,Qi(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(w.UNKNOWN,s.toString())})}me(e,n,i,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.me(e,Qi(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(w.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}}async function kf(t,e){const n=Ea(t),i={writes:e.map(r=>yf(n.serializer,r))};await n.le("Commit",n.serializer.databaseId,z.emptyPath(),i)}async function ja(t,e){const n=Ea(t),i={documents:e.map(a=>ni(n.serializer,a))},r=await n.me("BatchGetDocuments",n.serializer.databaseId,z.emptyPath(),i,e.length),s=new Map;r.forEach(a=>{const c=gf(n.serializer,a);s.set(c.key.toString(),c)});const o=[];return e.forEach(a=>{const c=s.get(a.toString());ne(!!c,55234,{key:a}),o.push(c)}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="ComponentProvider",Gt=new Map;function Ka(t){if(t._terminated)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.");if(!Gt.has(t)){mt(Wa,"Initializing Datastore");const e=function(s){return new Yd(s)}(function(s,o,a,c,u){return new Od(s,o,a,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Pa(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator,c,u._customHeaders,u.grpcFlowControlWindow)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Dr(t._databaseId),i=function(s,o,a,c){return new vf(s,o,a,c)}(t._authCredentials,t._appCheckCredentials,e,n);Gt.set(t,i)}return Gt.get(t)}const _f=1048576,Ga="firestore.googleapis.com",Js=!0;class Xs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ga,this.ssl=Js}else this.host=e.host,this.ssl=e.ssl??Js;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_f)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(i,r,s,o){if(r===!0&&o===!0)throw new E(w.INVALID_ARGUMENT,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pa(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new E(w.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(i,r){if(i===r)return!0;if(!i||!r)return!1;const s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(const a of s)if(i[a]!==r[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}class gi{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Nd;switch(i.type){case"firstParty":return new Rd(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Gt.get(n);i&&(mt(Wa,"Removing Datastore"),Gt.delete(n),i.terminate())}(this),Promise.resolve()}}function Tf(t,e){const n=typeof t=="object"?t:Lo(),i=typeof t=="string"?t:e||"(default)",r=pr(n,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const s=Vc("firestore");s&&Ef(r,...s)}return r}function Ef(t,e,n,i={}){var u;t=Ar(t,gi);const r=un(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&Do(`https://${a}`),s.host!==Ga&&s.host!==a&&_a("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:a,ssl:r,emulatorOptions:i};if(!ut(c,o)&&(t._setSettings(c),i.mockUserToken)){let y,b;if(typeof i.mockUserToken=="string")y=i.mockUserToken,b=X.MOCK_USER;else{y=Uc(i.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new X(v)}t._authCredentials=new Dd(new Sa(y,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class W{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new W(this.firestore,e,this._key)}toJSON(){return{type:W._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(yn(n,W._jsonSchema))return new W(e,i||null,new te(z.fromString(n.referencePath)))}}W._jsonSchemaVersion="firestore/documentReference/1.0",W._jsonSchema={type:ie("string",W._jsonSchemaVersion),referencePath:ie("string")};class on extends xr{constructor(e,n,i){super(e,n,function(s){return new of(s)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new te(e))}withConverter(e){return new on(this.firestore,e,this._path)}}function qt(t,e,...n){if(t=U(t),arguments.length===1&&(e=Ud.newId()),Hd("doc","path",e),t instanceof gi){const i=z.fromString(e,...n);return Ms(i),new W(t,null,new te(i))}{if(!(t instanceof W||t instanceof on))throw new E(w.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(z.fromString(e,...n));return Ms(i),new W(t.firestore,t instanceof on?t.converter:null,new te(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new E(w.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new ee(ce.fromBase64String(e),n)}catch(i){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new ee(ce.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:ee._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(yn(e,ee._jsonSchema)){const n=e.subtype??0;return ee.fromBase64String(e.bytes,n)}}}ee._jsonSchemaVersion="firestore/bytes/1.0",ee._jsonSchema={type:ie("string",ee._jsonSchemaVersion),bytes:ie("string"),subtype:{...ie("number"),optional:!0}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.stringValue=e,this.value=k.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ye._jsonSchemaVersion}}static fromJSON(e){if(yn(e,ye._jsonSchema))return new ye(e.latitude,e.longitude)}}ye._jsonSchemaVersion="firestore/geoPoint/1.0",ye._jsonSchema={type:ie("string",ye._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.type="MaxKey"}static instance(){return xe.MAX_KEY_VALUE_INSTANCE||(xe.MAX_KEY_VALUE_INSTANCE=new xe),xe.MAX_KEY_VALUE_INSTANCE}}xe.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.type="MinKey"}static instance(){return Ce.MIN_KEY_VALUE_INSTANCE||(Ce.MIN_KEY_VALUE_INSTANCE=new Ce),Ce.MIN_KEY_VALUE_INSTANCE}}Ce.MIN_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yn(e,ue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ue(e.vectorValues);throw new E(w.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ue._jsonSchemaVersion="firestore/vectorValue/1.0",ue._jsonSchema={type:ie("string",ue._jsonSchemaVersion),vectorValues:ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=/^__.*__$/;class If{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class qa{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ya(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R(40011,{dataSource:t})}}class Ur{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ur({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ri(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Ya(this.dataSource)&&Sf.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Af{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Dr(e)}createContext(e,n,i,r=!1){return new Ur({dataSource:e,methodName:n,targetDoc:i,path:en.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pf(t){const e=t._freezeSettings(),n=Dr(t._databaseId);return new Af(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $f(t,e,n,i,r,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,r);zr("Data must be an object, but it was:",o,i);const a=Ja(i,o);let c,u;if(s.merge)c=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const y=[];for(const b of s.mergeFields){const v=ii(e,b,n);if(!o.contains(v))throw new E(w.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);ec(y,v)||y.push(v)}c=new gt(y),u=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,u=o.fieldTransforms;return new If(new oe(a),c,u)}class bi extends yi{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}class Fr extends yi{_toFieldTransform(e){return new ff(e.path,new Ma)}isEqual(e){return e instanceof Fr}}function Nf(t,e,n,i){const r=t.createContext(1,e,n);zr("Data must be an object, but it was:",r,i);const s=[],o=oe.empty();gn(i,(c,u)=>{const y=Qa(e,c,n);u=U(u);const b=r.childContextForFieldPath(y);if(u instanceof bi)s.push(y);else{const v=wi(u,b);v!=null&&(s.push(y),o.set(y,v))}});const a=new gt(s);return new qa(o,a,r.fieldTransforms)}function Df(t,e,n,i,r,s){const o=t.createContext(1,e,n),a=[ii(e,i,n)],c=[r];if(s.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)a.push(ii(e,s[v])),c.push(s[v+1]);const u=[],y=oe.empty();for(let v=a.length-1;v>=0;--v)if(!ec(u,a[v])){const S=a[v];let A=c[v];A=U(A);const O=o.childContextForFieldPath(S);if(A instanceof bi)u.push(S);else{const D=wi(A,O);D!=null&&(u.push(S),y.set(S,D))}}const b=new gt(u);return new qa(y,b,o.fieldTransforms)}function wi(t,e,n){if(Za(t=U(t)))return zr("Unsupported field value:",e,t),Ja(t,e);if(t instanceof yi)return function(r,s){if(!Ya(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let u=wi(c,s.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,s,o){if((r=U(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return af(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=M.fromDate(r);return{timestampValue:Rn(s.serializer,a)}}if(r instanceof M){const a=new M(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rn(s.serializer,a)}}if(Xa(r)){const a=M.fromInstant(r),c=new M(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Rn(s.serializer,c)}}if(r instanceof ye)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ee)return r.subtype===0?{bytesValue:Gs(s.serializer,r._byteString)}:function(c,u){const y=u.toUint8Array(),b=new Uint8Array(y.length+1);return b[0]=u.subtype,b.set(y,1),{mapValue:{fields:{[fi]:{bytesValue:Gs(c,ce.fromUint8Array(b))}}}}}(s.serializer,r);if(r instanceof W){const a=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw s.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:za(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ue)return function(c,u){const y=c instanceof ue?c.toArray():c;return{mapValue:{fields:{[Na]:{stringValue:Da},[xa]:{arrayValue:{values:y.map(v=>{if(typeof v!="number")throw u.createError("VectorValues must only contain numeric values.");return Oa(u.serializer,v)})}}}}}}(r,s);if(r instanceof Vr)return function(c){return{mapValue:{fields:{[Ge]:{mapValue:{fields:{[Yn]:{stringValue:c.pattern},[Jn]:{stringValue:c.options}}}}}}}}(r);if(r instanceof Rr)return function(c){return{mapValue:{fields:{[rn]:{stringValue:c.value}}}}}(r);if(r instanceof Mr)return function(c){return{mapValue:{fields:{[bn]:Cn(c.value)}}}}(r);if(r instanceof Or)return function(c){return{mapValue:{fields:{[$t]:{stringValue:c.stringValue}}}}}(r);if(r instanceof Lr)return function(c){return{mapValue:{fields:{[ot]:{mapValue:{fields:{[Xn]:Cn(c.seconds),[Zn]:Cn(c.increment)}}}}}}}(r);if(r instanceof Ce)return function(){return{mapValue:{fields:{[Ca]:{nullValue:"NULL_VALUE"}}}}}();if(r instanceof xe)return function(){return{mapValue:{fields:{[Pr]:{nullValue:"NULL_VALUE"}}}}}();if(Ha(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ir(r)}`)}(t,e)}function Ja(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gn(t,(i,r)=>{const s=wi(r,e.childContextForField(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Xa(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Za(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof M||t instanceof ye||t instanceof ee||t instanceof W||t instanceof yi||t instanceof ue||t instanceof Ce||t instanceof xe||t instanceof Mr||t instanceof Or||t instanceof Vr||t instanceof Rr||t instanceof Lr||Xa(t)||Ha(t))}function zr(t,e,n){if(!Za(n)||!Aa(n)){const i=Ir(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function ii(t,e,n){if((e=U(e))instanceof Cr)return e._internalPath;if(typeof e=="string")return Qa(t,e);throw ri("Field path arguments must be of type string or ",t,!1,void 0,n)}const xf=new RegExp("[~\\*/\\[\\]]");function Qa(t,e,n){if(e.search(xf)>=0)throw ri(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cr(...e.split("."))._internalPath}catch{throw ri(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ri(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function ec(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ii("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cf extends si{data(){return super.data()}}class Rf{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Qn(e))return this.convertToInt32Value(e.mapValue);if(Nt(e))return this.convertToDecimal128Value(e.mapValue)}return Z(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(qn(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return xe.instance();case 1:return Ce.instance();default:throw R(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return gn(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var i,r,s;const n=(s=(r=(i=e.fields)==null?void 0:i[xa].arrayValue)==null?void 0:r.values)==null?void 0:s.map(o=>Z(o.doubleValue));return new ue(n)}convertToBsonObjectId(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[rn])==null?void 0:r.stringValue)??"";return new Rr(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[fi],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=qn(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const s=r[0],o=r.slice(1);return new ee(ce.fromUint8Array(o),s)}convertToBsonTimestamp(e){var s,o,a,c,u,y,b;const n=(s=e.fields)==null?void 0:s[ot],i=Number((c=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[Xn])==null?void 0:c.integerValue),r=Number((b=(y=(u=n==null?void 0:n.mapValue)==null?void 0:u.fields)==null?void 0:y[Zn])==null?void 0:b.integerValue);return new Lr(i,r)}convertToRegexValue(e){var r,s,o,a,c,u,y,b,v,S;const n=((c=(a=(o=(s=(r=e.fields)==null?void 0:r[Ge])==null?void 0:s.mapValue)==null?void 0:o.fields)==null?void 0:a[Yn])==null?void 0:c.stringValue)??"",i=((S=(v=(b=(y=(u=e.fields)==null?void 0:u[Ge])==null?void 0:y.mapValue)==null?void 0:b.fields)==null?void 0:v[Jn])==null?void 0:S.stringValue)??"";return new Vr(n,i)}convertToInt32Value(e){var i,r;const n=Number((r=(i=e.fields)==null?void 0:i[bn])==null?void 0:r.integerValue);return new Mr(n)}convertToDecimal128Value(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[$t])==null?void 0:r.stringValue)??"";return new Or(n)}convertGeoPoint(e){return new ye(Z(e.latitude),Z(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=$a(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=nn(e);return new M(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=z.fromString(e);ne(Ba(i),9688,{name:e});const r=new Qt(i.get(1),i.get(3)),s=new te(i.popFirst(5));return r.isEqual(n)||di(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class tc extends Rf{constructor(e){super(),this.firestore=e}convertBytes(e){return new ee(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,n)}}function nc(t){const e=Ka((t=Ar(t,W)).firestore),n=new tc(t.firestore);return ja(e,[t._key]).then(i=>{ne(i.length===1,15618);const r=i[0];return new si(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)})}function Of(){return new Fr("serverTimestamp")}const Zs="4.19.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,i=1e3,r=1.5,s=6e4){this.t=e,this.timerId=n,this.i=i,this.o=r,this.h=s,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(e){this.cancel();const n=Math.floor(this.u+this.p()),i=Math.max(0,Date.now()-this._),r=Math.max(0,n-i);r>0&&mt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.u} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,r,()=>(this._=Date.now(),e())),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}function _n(t,e){if((t=U(t)).firestore!==e)throw new E(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mf=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new E(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await ja(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ua(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=te.fromPath(i);this.mutations.push(new Fa(r,this.precondition(r)))}),await kf(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw R(50498,{R:e.constructor.name});n=V.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new E(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(V.min())?Ae.exists(!1):Ae.updateTime(n):Ae.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(V.min()))throw new E(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(n)}return Ae.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.I=i.maxAttempts,this.P=new ic(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A(async()=>{const e=new Mf(this.datastore),n=this.v(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.F(r)}))}).catch(i=>{this.F(i)})})}v(e){try{const n=this.updateFunction(e);return!Wd(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}F(e){this.I>0&&this.B(e)?(this.I-=1,this.asyncQueue.enqueueAndForget(()=>(this.D(),Promise.resolve()))):this.deferred.reject(e)}B(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!qd(n)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Hr(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="AsyncQueue";class Ff{constructor(e=Promise.resolve()){this.k=[],this.O=!1,this.C=[],this.S=null,this.q=!1,this.M=!1,this.N=[],this.P=new ic(this,"async_queue_retry"),this.L=()=>{const i=Oi();i&&mt(Qs,"Visibility state changed to "+i.visibilityState),this.P.T()},this.W=e;const n=Oi();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.U(),this.j(e)}enterRestrictedMode(e){if(!this.O){this.O=!0,this.M=e||!1;const n=Oi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.L)}}enqueue(e){if(this.U(),this.O)return new Promise(()=>{});const n=new Br;return this.j(()=>this.O&&this.M?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.k.push(e),this.$()))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(e){if(!function(i){return i.name==="IndexedDbTransactionError"}(e))throw e;mt(Qs,"Operation failed with retryable error: "+e)}this.k.length>0&&this.P.A(()=>this.$())}}j(e){const n=this.W.then(()=>(this.q=!0,e().catch(i=>{this.S=i,this.q=!1;const r=eo(i);throw di("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.q=!1,i))));return this.W=n,n}enqueueAfterDelay(e,n,i){this.U(),this.N.indexOf(e)>-1&&(n=0);const r=Hr.createAndSchedule(this,e,n,i,s=>this.G(s));return this.C.push(r),r}U(){this.S&&R(47125,{K:eo(this.S)})}verifyOperationInProgress(){}async H(){let e;do e=this.W,await e;while(e!==this.W)}J(e){for(const n of this.C)if(n.timerId===e)return!0;return!1}X(e){return this.H().then(()=>{this.C.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.C)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.H()})}Y(e){this.N.push(e)}G(e){const n=this.C.indexOf(e);this.C.splice(n,1)}}function eo(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Pf(e)}get(e){const n=_n(e,this._firestore),i=new tc(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return R(24041);const s=r[0];if(s.isFoundDocument())return new si(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new si(this._firestore,i,n._key,null,n.converter);throw R(18433,{doc:s})})}set(e,n,i){const r=_n(e,this._firestore),s=Lf(r.converter,n,i),o=$f(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=_n(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof Cr?Df(this._dataReader,"Transaction.update",s._key,n,i,r):Nf(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=_n(e,this._firestore);return this._transaction.delete(n._key),this}}function Bf(t,e,n){t=Ar(t,gi);const i=Ka(t),r={...Vf,...n};(function(a){if(a.maxAttempts<1)throw new E(w.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=new Br;return new Uf(function(){return new Ff}(),i,r,o=>e(new zf(t,o)),s).V(),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){$d(`${xt}_lite`),It(new dt("firestore/lite",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new gi(new xd(e.getProvider("auth-internal")),new Ld(r,e.getProvider("app-check-internal")),Md(r,n),r);return i&&s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Je("firestore-lite",Zs,""),Je("firestore-lite",Zs,"esm2020")})();const Hf={C:0,Cs:1,Ds:3,E:4,Fs:6,G:7,A:9},rc=t=>{const[,e,n]=/^([A-G]s?)(\d)$/.exec(t);return(Number(n)+1)*12+Hf[e]},jf=["A0","C1","Ds1","Fs1","A1","C2","Ds2","Fs2","A2","C3","Ds3","Fs3","A3","C4","Ds4","Fs4","A4","C5","Ds5","Fs5","A5","C6","Ds6","Fs6","A6","C7","Ds7","Fs7","A7","C8"],Wf=["C1","G1","C2","G2","C3","G3","C4","G4","C5","G5","C6","G6","C7","G7"].map(rc),Kf=Array.from({length:23},(t,e)=>e===22?108:21+e*4),to=(t,e)=>e.flatMap(n=>[1,2,3].map(i=>({key:n,layer:i,url:`${t}/${n}-${i}.mp3`})));jf.map(t=>({key:rc(t),layer:1,url:`piano/${t}.mp3`})),to("upright1",Wf),to("upright2",Kf);const no=1024;Float32Array.from({length:no},(t,e)=>.5-.5*Math.cos(2*Math.PI*e/no));const nt=(t,e,n)=>`${t} ${t===1?e:n}`,Te=["Romantik","diese Musik","Klassik","Barock","Volksmusik","Fiddle-Musik","Klezmer","diesen Stil"],io=(t,e)=>[t&&nt(t,"Glissando","Glissandi"),e&&nt(e,"Schleifer","Schleifer")].filter(Boolean).join(", "),yt=(t,e)=>t.toFixed(e).replace(".",","),Gf={versionTitle:(t,e)=>`Version ${t}, Commit ${e}`,darkMode:"Dunkles Design",lightMode:"Helles Design",themeMenu:"Aussehen: hell oder dunkel, Farben",schemes:{blue:"Ozean",violet:"Pflaume",teal:"Lagune",rose:"Himbeere",graphite:"Graphit"},helpTitle:"Anleitung (?)",helpLabel:"Anleitung zu Violin Hero",tools:{key:"Werkzeuge",title:"Werkzeuge: Stimmgerät und mehr",tuner:"Stimmgerät",tunerLead:"Geige stimmen",setup:"Audio-Einrichtung",setupLead:"Mikrofon und Lautsprecher, Eingangspegel, Verzögerung",more:"Mehr Werkzeuge",moreLead:"Werkzeuge wie den Vibralizer im Marketplace hinzufügen",moduleFailed:"Dieses Werkzeug ließ sich nicht laden. Prüf deine Verbindung und versuch es noch einmal.",close:"Schließen"},marketTitle:"Violin Hero Marketplace: mehr Content Packs",overlay:{marketplace:"Content Packs und Tools für Violin Hero",halloffame:"Die besten Aufnahmen, Spieler und Stücke",close:"Zurück zu Violin Hero"},languageTitle:t=>`Sprache: ${t}`,languageMenu:"Sprache wählen",tempo:"Tempo",click:"Klick",metronome:"Metronom",practice:"Üben",fullscreen:"Seitenansicht der Geigenstimme",leaveFullscreen:"Zurück zur normalen Ansicht (Esc)",dragBar:"Ziehen, um die Leiste zu verschieben",pageSize:"Notengröße",pageSizes:{small:"Klein: mehr Takte pro Zeile",medium:"Mittel",large:"Groß: besser lesbar und leichter zu bearbeiten"},piano:"Klavier",pianoModel:"Instrument",staves:"Noten",violin:"Violine",humanize:"Ausdruck",reverb:"Hall",volume:"Lautstärke",pianos:{grand:"Flügel",upright1:"Klavier 1",upright2:"Klavier 2"},startStop:"Wiedergabe",play:"Start",pause:"Pause",playTitle:"Start / Pause (P; Doppelklick: zurück zum Anfang)",navigation:"Navigation",back:"Zurück",forward:"Vor",backTitle:"Einen Takt zurück (Doppelklick: zum Anfang)",forwardTitle:"Einen Takt vor (Doppelklick: zum Ende)",take:"Aufnahme",record:"Aufnehmen",stop:"Stopp",recordTitle:"Aufnehmen (R)",finishMarking:"Erst das Bezeichnen abschließen (Esc)",clear:"Löschen",sure:"Sicher?",clearTitle:"Aufnahme löschen",clearConfirmTitle:"Noch einmal drücken, um die Aufnahme zu löschen",share:"Teilen",shareTitle:"Deine Aufnahme teilen",shareScoreTitle:"Deine Einrichtung dieses Stücks teilen (als Link)",section:"Abschnitt",marker:"Marke",markerTitle:"Einen Abschnitt markieren (M)",repeat:"Wiederholen",repeatTitle:"Den Abschnitt wiederholen (L; Doppelklick: zu seinem Anfang)",input:"Eingang",inputGain:"Eingangspegel",level:"Schwierigkeitsgrad",levels:["Anfänger","Leicht","Mittel","Fortgeschritten","Virtuos"],genre:"Genre",allGenres:"Alle",allLevels:"Alle",genres:{early:"Alte Musik",baroque:"Barock",classical:"Klassik",romantic:"Romantik",modern:"Moderne & Gegenwart",concertos:"Konzerte",sonatas:"Sonaten",showpieces:"Virtuosenstücke",salon:"Salonstücke",dances:"Tänze",opera:"Oper & Operette",sacred:"Geistliche Musik",etudes:"Etüden",carols:"Weihnachten",wedding:"Hochzeit",children:"Kinderlieder",folk:"Volkslieder",celtic:"Keltisch & Fiddle",bluegrass:"Bluegrass & Country",hungarian:"Ungarisch & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & Swing",film:"Film- & Spielmusik",pop:"Pop, Rock & Musical"},piece:"Stück",placeOf:(t,e)=>`${t} von ${e}`,scoreLabel:"Noten",scorePdfTitle:"Die Violinstimme als PDF, zum Drucken oder Herunterladen",fingeringsBy:t=>`Noten wurden eingerichtet von ${t}`,fingeringsAdded:"Noten wurden eingerichtet",pieceCount:t=>t?nt(t,"Stück","Stücke"):"Keine Stücke",lockedCount:t=>`${t} gesperrt`,noneUnlocked:"keins freigeschaltet",noPieces:"Hier gibt es keine Stücke: probier einen anderen Schwierigkeitsgrad",interpretation:"Interpretation",defaultWritten:"Standard",defaultNone:"Keine Interpretationen",recordings:"Aufnahmen",recordingsNone:"Keine",recordingsEmpty:"Noch keine Aufnahmen",you:"Du",loop:"Schleife",playTake:(t,e)=>`Deine Aufnahme abspielen (${t}, ${e})`,stopRecording:"Die Aufnahme anhalten",playRecording:(t,e)=>`Die Aufnahme abspielen (${t}${e?", auf YouTube":""})`,chooseRecording:"Wähle eine Aufnahme, um sie abzuspielen",hints:{playPause:"Start / Pause",record:"aufnehmen",bar:"Takt",marker:"Marke",repeat:"wiederholen",violin:"Violine",piece:"Stück",yourTake:"deine Aufnahme",recording:"Aufnahme",help:"Hilfe"},panels:{navigation:"Transport",playback:"Einstellungen",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Einst.",repertoire:"Rep."},panelOpen:t=>`${t} zeigen`,panelClose:t=>`${t} ausblenden`,controls:"Steuerung",stopVideo:"Das Video anhalten",resizeVideo:"Ziehen, um die Größe des Videos zu ändern",flags:{loadingRecording:"Aufnahme lädt",aligning:(t,e)=>t==="spectrum"?`Spektrum wird analysiert ${e} %`:t==="aligning"?`Tempo wird erkannt: ${e} % der Noten`:`Klaviertöne werden abgeglichen ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violine stummgeschaltet",pianoOff:"Klavier stummgeschaltet",rec:"Rec",yourTake:"▶ Deine Aufnahme",takeOf:t=>`▶ Aufnahme von ${t}`,repeat:"Wiederholung",loadingSounds:"Klänge laden",loadingPiano:"Klaviersound laden",loadingViolin:"Violine lädt",noMicrophone:"Kein Mikrofon",savingToAccount:"Wird in deinem Benutzerkonto gespeichert",savedToAccount:"✓ In deinem Konto gespeichert",keptForLater:"Im Speicher: wird später in deinem Konto gespeichert",openingTake:"Deine Aufnahme lädt",takeNotOpened:"Deine Aufnahme konnte nicht geladen werden",syncing:t=>`${nt(t,"Aufnahme wird","Aufnahmen werden")} in deinem Konto gespeichert`,synced:t=>`✓ ${nt(t,"Aufnahme","Aufnahmen")} in deinem Konto gespeichert`,sharing:"Link zu deiner Aufnahme wird erstellt",shareFailed:"Die Aufnahme konnte nicht geteilt werden",signInToShare:"Melde dich an, um deine Aufnahmen zu teilen",openingShared:"Freigegebene Aufnahme lädt",sharedNotOpened:"Die freigegebene Aufnahme konnte nicht geladen werden",tapToPlay:"Tippe irgendwo, um abzuspielen",speakersHeard:"Klavier im Mikrofon gehört: nimm Kopfhörer",phoneMode:"Bluetooth-Headset im Telefonmodus: nimm Kopfhörer mit Kabel oder das eingebaute Mikrofon"},messages:{soundsFailed:"Die Sounds konnten nicht geladen werden",scoreFailed:"Die Noten konnten nicht geladen werden",pianoFailed:"Das Klavier konnte nicht geladen werden",recordingFailed:"Die Aufnahme konnte nicht geladen werden",noTimingYet:t=>`Noch kein Timing: braucht ${t}`,noTimingVideo:"Kein Timing für dieses Video",videoFailed:"Das Video konnte nicht geladen werden",loadingScore:"Noten laden…",engraving:"Noten werden gesetzt…"},edited:"↺ Bearbeitet",revertQuestion:"Zurücksetzen?",editedTitle:"Bearbeitet: klicken, um alle Änderungen zu verwerfen",revertConfirmTitle:"Noch einmal klicken, um alle Änderungen zu verwerfen",versionClearTitle:"Die Einrichtung dieser Version verwerfen",versionClearConfirmTitle:"Noch einmal klicken, um alle Einrichtungen dieser Version zu verwerfen",curveDefault:"Standard",curveDefaultTitle:"Wie notiert, mit Ausdruck",curveRecordingTitle:t=>`Die Aufnahme: ${t}`,wrongNote:"Falscher Ton!",noteMissed:"Ton fehlt!",wrongShort:"Falsch",missedShort:"Fehlt",stickerTimeShort:t=>`${yt(t,2)} s`,stickerPitch:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,stickerPitchTitle:(t,e)=>`${e?"Zu hoch":"Zu tief"}: ${t}`,stickerTime:(t,e)=>`${yt(t,2)} s zu ${e?"spät":"früh"}`,annotate:"Die ausgewählten Noten bezeichnen",notesSelected:t=>nt(t,"Note","Noten"),finger:t=>`Finger ${t}`,openString:"Leere Saite (0)",downBow:"Abstrich",upBow:"Aufstrich",staccato:"Staccato",accent:"Akzent",tenuto:"Tenuto",harmonic:"Flageolett",dynamicTitle:t=>`Dynamik: ${t}`,fermata:"Fermate",slur:"Bindebogen",crescendo:"Crescendo (<)",diminuendo:"Decrescendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Nicht solange eine Aufnahme gewählt ist: sie passt nur zu ihrem Timing",revert:"Zurücksetzen",revertTitle:"Zurück zu den Zeichen in den Noten",fx:{boo:["Buh!","Autsch!","Huch!","Hoppla!","Igitt!"],late:["Zu spät!","Aufwachen!","Zu langsam!"],early:["Warte!","Zu früh!","Halt!"],short:["Zu kurz!","Länger halten!","Bogen weiter!"],surf:["Welle!","Cowabunga!","Reite sie!"],snowboard:["Yeah!","Cooler Slide!","Wusch!"],ski:["Juhu!","Abfahrt!","Wusch!"],penguin:["Juhuu!","Bauchrutscher!","Rutsch!"],tweet:"Piep!",buzz:"Summ!",trill:"Trrriller!",chirp:"Zirp!",vibrato:["Vibrato!","So warm!","Herrlich!","Es singt!"]},signIn:"Anmelden",signedInAs:t=>`Angemeldet als ${t}`,createAccount:"Konto erstellen",createAccountButton:"Konto erstellen",haveAccount:"Schon ein Konto? Anmelden",forgotPassword:"Passwort vergessen?",or:"oder",google:"Mit Google anmelden",agree:["Wenn du fortfährst, stimmst du unseren "," zu und hast unsere "," gelesen."],termsName:"Nutzungsbedingungen",privacyName:"Datenschutzerklärung",close:"Schließen",email:"E-Mail",password:"Passwort",passwordHint:t=>`Mindestens ${t} Zeichen`,accountLead:t=>`Violin Hero funktioniert auch ohne Konto. Angemeldet werden deine Aufnahmen in deinem Konto gespeichert${t?`, auch ${t===1?"die Aufnahme":`die ${t} Aufnahmen`}, die in diesem Browser warten`:""}.`,enterEmailFirst:"Gib zuerst deine E-Mail-Adresse ein.",resetSent:t=>`Wir haben dir einen Link zum Zurücksetzen an ${t} geschickt.`,confirmEmail:"Bitte bestätige deine E-Mail-Adresse: Der Link ist in deinem Posteingang.",anonymous:"Anonym",save:"Speichern",nicknameTaken:t=>`„${t}“ ist schon vergeben. Probier einen anderen!`,nicknameInvalid:"Ein Spitzname darf kein „/“ enthalten.",pickNickname:"Spitznamen wählen",nicknameDialog:{title:"Wähl deinen Spitznamen",lead:"Er steht bei deinen Aufnahmen in den Bestenlisten und der Hall of Fame. Andere sehen nur diesen Namen, also nimm einen, der öffentlich sein darf.",label:"Spitzname",save:"Spitznamen speichern",later:"Später"},signOut:"Abmelden",profile:"Profil",creatorDashboard:"Dein Creator-Dashboard",invite:"Freund oder Freundin einladen",inviteCopied:"Link kopiert: schick ihn weiter!",inviteFailed:"Der Link ließ sich nicht kopieren",inviteText:"Üb mit mir in Violin Hero: spiel mit dem Klavier, sieh, wie sauber du spielst, und nimm dich auf.",feedback:"Feedback & Fehler melden",hintTitle:"Melde dich an, um deine Aufnahmen und deine Fortschritte zu speichern",scoreHintTitle:"Melde dich an, um Noten zu drucken",scoreHintText:"Druckbare Noten mit deinen Fingersätzen und Zeichen gibt es für angemeldete Spieler.",shareHintTitle:"Melde dich an, um deine Einrichtung zu teilen",shareHintText:"Deine Fingersätze, Striche und Dynamik bekommen einen eigenen Link: Schick ihn deiner Lehrkraft oder deinem Pultnachbarn.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"deine",shareScoreDone:{headlines:[["Link kopiert!","Deine Einrichtung kann geteilt werden."],["Ab damit!","Deine Fingersätze und Dynamik haben jetzt einen eigenen Link."],["Bereit zum Teilen!","Selbst eingerichtete Noten: Das ist echte Musikalität."]],ready:["Dein Link","Kopier ihn, und deine Einrichtung kann geteilt werden."],anywhere:"Schick ihn, wie du magst. Wer ihn öffnet, bekommt das Stück mit deinen Fingersätzen, Strichen und deiner Dynamik, unter deinem Namen bei seinen Stücken.",who:["Deine Lehrkraft","Dein Pultnachbar","Dein Orchester","Deine Freunde"],cheers:["Gute Fingersätze sind ein Geschenk: Gib sie weiter.","Deine Lehrkraft wird sehen wollen, wie du über die Musik denkst.","Ling Ling richtet jede Stimme ein. Jetzt du auch.","Geteilte Einrichtung, weniger falsche Töne, mehr Musik."]},sharedScore:{sharedBy:t=>`${t} hat die Einrichtung mit dir geteilt`,sharedByAnyone:"Jemand hat die Einrichtung mit dir geteilt",yours:"Deine eigene Einrichtung",you:"deine",someone:"geteilt",intro:"Eingerichtete Noten zum Üben: Fingersätze, Striche und Dynamik an den Noten, so gespielt wie eingetragen.",kinds:{fingerings:"Fingersätze",bowings:"Striche",articulations:"Artikulationen",dynamics:"Dynamik",phrasing:"Bögen, Fermaten und rit."},cheers:["Voneinander lernen: So wachsen Musiker.","Jemand hat beim Einrichten an dich gedacht.","Neue Fingersätze, neue Ideen: Probier sie aus!","Gemeinsam üben, auch aus der Ferne."],open:"Noten öffnen",later:"Nicht jetzt",addedAs:(t,e)=>`Bei deinen Stücken als „${t} – ${e}“ neben dem Original.`},hintText:t=>`${t>1?`${t} Aufnahmen warten`:"Deine Aufnahme wartet"} in diesem Browser, bis du dich anmeldest, und ${t>1?"werden":"wird"} dann in deinem Konto gespeichert, mit den Stücken, die du freigeschaltet hast.`,hintDismiss:"Nicht mehr anzeigen",graphShow:"Tempo- und Lautstärkekurve zeigen",graphHide:"Tempo- und Lautstärkekurve ausblenden",logoHintTitle:"Deine Startseite ist hier oben",startPage:"Zur Startseite",logoHintText:"Tipp auf das Violin-Hero-Symbol, um die Startseiten wieder zu öffnen: Geige stimmen und ein Stück wählen.",recordHints:["Noch ein Versuch? Starte eine neue Aufnahme!","Jede Aufnahme bringt dich dem nächsten Stück näher. Gleich noch eine!","Übung macht den Meister: Tipp hier für eine neue Aufnahme."],navHintTitle:"Takt für Takt",navHintText:"Zurück und Vor springen jeweils einen Takt, so hörst du eine Stelle noch einmal. Oder zieh die Noten.",pageHintTitle:"Da gibt es noch mehr",pageHintText:"Schließ hier die Seitenansicht: In der normalen Ansicht findest du alle Stücke, Aufnahmen großer Geiger zum Mitspielen, deine Aufnahmen und die Einstellungen.",guide:{passed:"Super! Weiter zum nächsten Stück",passedLead:t=>`${t} wartet auf dich.`,again:"Noch eine Aufnahme?",againLead:(t,e)=>e===1?`Erreiche ${t} % oder nimm noch einmal auf, dann öffnet sich das nächste Stück.`:`Erreiche ${t} % oder nimm noch ${e}-mal auf, dann öffnet sich das nächste Stück.`,allDone:"Du hast alle Einstiegsstücke gespielt!",allDoneLead:"In der normalen Ansicht findest du die ganze Bibliothek, Aufnahmen großer Geiger und mehr.",play:t=>`${t} spielen`,recordAgain:"Noch mal aufnehmen",onceMore:"Noch einmal",tryOther:t=>`${t} probieren`,toNormal:"Zur normalen Ansicht",leave:"Keine Vorschläge mehr"},auth:{wrongPassword:"E-Mail oder Passwort falsch.",emailInUse:"Mit dieser E-Mail gibt es schon ein Konto: melde dich stattdessen an.",weakPassword:t=>`Das Passwort braucht mindestens ${t} Zeichen.`,invalidEmail:"Diese E-Mail-Adresse sieht nicht richtig aus.",tooMany:"Zu viele Versuche: bitte warte einen Moment und versuch es noch einmal.",popupClosed:"Das Google-Fenster wurde vor der Anmeldung geschlossen.",popupBlocked:"Der Browser hat das Google-Fenster blockiert: erlaube Pop-ups für diese Seite.",unauthorizedDomain:"Die Anmeldung ist für diese Adresse noch nicht freigeschaltet.",network:"Keine Verbindung: prüfe dein Netzwerk und versuch es noch einmal.",failed:t=>`Das hat nicht geklappt (${t}).`},deleteTake:{title:"Diese Aufnahme löschen?",account:"Sie wird endgültig aus deinem Konto gelöscht: die Aufnahme und alles, was mit ihr gespeichert ist.",ranked:"Sie steht auch in der Bestenliste dieses Stücks: Sie wird daraus entfernt, für alle.",place:t=>`Sie steht auf Platz ${t} der Bestenliste: Sie wird daraus entfernt, für alle.`,keepsProgress:"Die Stücke, die du freigeschaltet hast, bleiben freigeschaltet.",confirm:"Löschen",cancel:"Behalten",deleting:"Wird gelöscht…",failed:"Die Aufnahme konnte nicht gelöscht werden. Bitte versuch es noch einmal."},shareDone:{headlines:[["Link kopiert!","Deine Aufnahme ist bereit, gehört zu werden."],["Ab die Post!","Deine Aufnahme hat jetzt ihren eigenen Link."],["Bereit zum Teilen!","Sei stolz darauf: Das hast du gespielt."]],ready:["Dein Link","Kopiere ihn, und deine Aufnahme ist bereit, gehört zu werden."],anywhere:"Schick ihn, wie du magst: per Nachricht, E-Mail oder Chat. Wer ihn öffnet, hört deine Aufnahme mit dem Klavier, genau so, wie du gespielt hast.",who:["Deine Lehrerin oder dein Lehrer","Deine Eltern","Oma und Opa","Deine Freunde"],cheers:["Jede Aufnahme, die du teilst, ist ein kleines Konzert.","Deine Lehrkraft hört bestimmt gern, wie du übst.","Ling Ling teilt jede Aufnahme. Na gut, die guten. Diese zählt.","Musik ist zum Zuhören da. Lass sie dich hören!"],playedAlong:"Mitgespielt zu",copy:"Kopieren",copyAgain:"Noch mal kopieren",copiedAgain:"✓ Kopiert",done:"Fertig",text:t=>`Hör mal, wie ich ${t} in Violin Hero spiele!`},install:{title:"Installiere Violin Hero als App",tap:"Tippe auf",share:"Teilen",then:"dann",add:"Zum Home-Bildschirm",openInSafari:"Öffne diese Seite in Safari, tippe auf",chromeToo:"Neuere Chrome-Versionen haben es auch unter dem Teilen-Symbol in der Adressleiste.",close:"Schließen"},practiceTips:{title:"Übetipps",video:"Video ansehen",videoTitle:"Öffnet das Video auf YouTube, in einem neuen Tab",start:"Jetzt starten",close:"Schließen",open:"Übetipps",openTitle:"Die Übetipps zu diesem Stück zeigen",festiveTitle:"Weihnachtliche Übetipps",festiveLead:"Es ist Weihnachtszeit, die schönste Zeit für dieses Stück: Üb es jetzt und spiel es unterm Baum für Familie und Freunde."},headphones:{title:"Setz Kopfhörer mit Kabel auf",wired:"Mit Kabel:",wiredWhy:"das Mikrofon hört nur deine Violine.",speakers:"Lautsprecher:",speakersWhy:"das Klavier wird mit aufgenommen.",bluetooth:"Bluetooth:",bluetoothWhy:"verzögert und kann deine Aufnahme verzerren.",gotIt:"Verstanden!",appleAdapter:"Nimm Apples eigenen 3,5-mm-Adapter: andere können verstummen."},welcome:{loading:["Bogen wird kolophoniert…","Das Klavier wird gestimmt…","Noten werden ausgepackt…","Das Orchester wärmt sich auf…","Saiten werden poliert…","Das Licht wird gedimmt…"],progress:t=>`${t} %`,loadingFailed:"Manche Klänge ließen sich nicht laden. Prüfe deine Verbindung.",continueAnyway:"Trotzdem weiter",begin:"Los geht’s",skipIntro:"Intro überspringen",beginNote:"Dein Browser fragt nach dem Mikrofon, damit Violin Hero deine Geige hören kann.",hearString:t=>`${t} anhören`,stopTone:"Ton aus",byEar:"Nach Gehör stimmen: Die Schwebung wird langsamer, je näher du kommst",tuner:"Stimmgerät",level:"Pegel",gain:"Eingang",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t).toLocaleString("de")} dB`,gainTitle:"Die Verstärkung des Mikrofons: so einstellen, dass deine lautesten Töne den grünen Bereich erreichen (Doppelklick: +12 dB)",cal:{key:"Kalibrieren",keyTitle:"Die Verzögerung von den Lautsprechern zum Mikrofon messen, damit deine Aufnahmen genau zum Klavier passen",ms:t=>`${t} ms`,title:"Verzögerung kompensieren",lead:"Jedes Gerät braucht etwas Zeit, um einen Ton abzuspielen und aufzunehmen. Violin Hero spielt ein paar Klicks und hört auf sie, damit deine Aufnahmen genau zum Klavier passen.",speakers:"Steck die Kopfhörer ein, mit denen du spielst, und dreh die Lautstärke auf.",micOn:"Halt eine Hörmuschel direkt an das Mikrofon deines Geräts.",quiet:"Sei ein paar Sekunden still, während die Klicks spielen.",measuring:(t,e)=>`Ich höre zu … Klick ${t} von ${e}`,sent:"gespielt",heard:"gehört",result:t=>`Verzögerung: ${t} ms`,applied:"Deine Aufnahmen und deine Linie werden jetzt danach ausgerichtet.",notHeard:"Die Klicks waren nicht zu hören.",unsteady:"Die Klicks kamen ungleichmäßig an.",tryAgain:"Dreh die Lautstärke auf, halt die Hörmuschel direkt ans Mikrofon, sei still und versuch es noch einmal.",needMic:"Dafür braucht es das Mikrofon: erlaube es zuerst.",back:"Fertig",start:"Messung starten",again:"Noch einmal messen",newMeasurement:"Neue Messung",save:"Speichern"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Mikrofon",inputTitle:"Der verwendete Eingang, wie dein System ihn nennt; bei Stereo der Pegel jeder Seite",setupTitle:"Audio-Einrichtung",inputDevice:"Mikrofoneingang",outputDevice:"Kopfhörerausgang",systemDefault:"Systemstandard",sidesTitle:"Jede Seite des Eingangs für sich: eine stumme oder rauschende Seite zeigt sich hier",loudHint:"Spiel deine lautesten Töne: Der Balken sollte den grünen Bereich erreichen.",newInput:t=>`Neuer Eingang: ${t}`,useInput:"Verwenden",levelTitle:"Der Eingangspegel: deine lautesten Töne im grünen Bereich ergeben eine saubere Aufnahme; im roten verzerren sie",startTuning:"Stimmen starten",micWhy:"Violin Hero hört dir über das Mikrofon zu.",micAsking:"Erlaube das Mikrofon in deinem Browser…",micDenied:"Kein Mikrofon. Erlaube es im Browser, um zu stimmen und aufzunehmen.",playString:t=>`Spiel deine ${t}-Saite`,tuneUp:"Höher stimmen",tuneDown:"Tiefer stimmen",inTune:"Sauber!",offBy:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,wrongString:(t,e)=>`Das klingt nach deiner ${t}-Saite. Spiel die ${e}.`,farOff:"Weit daneben: langsam drehen und hinhören",stringTitle:t=>`Die ${t}-Saite stimmen`,aDone:"Dein A ist sauber!",others:"Jetzt D, G und E, oder du stimmst sie selbst.",skip:"Die anderen stimme ich selbst",alreadyInTune:"Meine Geige ist schon gestimmt",closeTool:"Fertig",allDone:"Alle vier Saiten sauber. Wunderbar!",next:"Weiter",ready:"Bereit?",firstPiece:"Dein erstes Stück",firstPieceLead:"Leicht zum Einstieg, schön zu spielen. Neue Stücke werden freigeschaltet, wenn du dieses Stück gut kannst.",accountTitle:"Behalte, was du spielst",accountLead:"Kostenlos: deine Aufnahmen und dein Fortschritt, auf jedem Gerät.",signIn:"Anmelden",signedIn:t=>`Angemeldet als ${t}: deine Aufnahmen und dein Fortschritt werden gespeichert.`,offline:"Offline: deine Aufnahmen warten auf diesem Gerät und werden gespeichert, sobald du wieder online bist.",go:"Bogen hoch!",goNote:"Zwei Takte zählen dich ein, dann beginnt deine erste Aufnahme.",backToTuner:"Zurück zum Stimmgerät"},deleteAccount:{menu:"Konto löschen…",title:"Dein Konto löschen?",loading:"Was gespeichert ist, wird gesucht…",lead:"Das wird endgültig gelöscht:",nickname:t=>`Dein Spitzname „${t}“`,takes:(t,e)=>`${t===1?"1 Aufnahme":`${t} Aufnahmen`}${e?` (${e} in der Hall of Fame)`:""}, mit ihren geteilten Links`,progress:(t,e)=>`Dein Fortschritt: ${t===1?"1 Stück":`${t} Stücke`} bestanden, ${e===1?"1 Aufnahme":`${e} Aufnahmen`} gezählt`,practice:t=>`Deine Übezeit (${t})`,markings:(t,e)=>`Deine Eintragungen in ${t===1?"1 Stück":`${t} Stücken`}${e?`, ${e} geteilt`:""}`,packsAdded:t=>`Content Packs, die du hinzugefügt hast: ${t}`,packsMade:t=>`Content Packs, die du erstellt hast: ${t}`,creatorProfile:"Dein Creator-Profil",invitations:t=>`Deine Einladungen${t?` (${t} Karma)`:""}`,feedback:(t,e,n)=>`Dein Feedback: ${t===1?"1 Beitrag":`${t} Beiträge`}, ${e===1?"1 Stimme":`${e} Stimmen`}${n?", deine Bewertung":""}`,browser:"Was dieser Browser speichert (Einstellungen, wartende Aufnahmen)",packsBought:t=>`Deine gekauften Content Packs gehen verloren: ${t}. Käufe gehören zu diesem Konto; mit einem neuen Konto müsstest du sie noch einmal kaufen.`,packsKept:t=>`Bleibt erhalten: ${t}. Diese Packs wurden schon hinzugefügt und bleiben daher, mit deinem Creator-Profil.`,creatorStays:"Dein Creator-Profil und deine Content Packs bleiben. Um sie zu löschen, wähl auf der Creator-Seite im Kontomenü „Creator-Daten löschen…“.",login:"Dein Login wird ebenfalls gelöscht.",loginSchool:"Dein Login bleibt: er wird anderswo in Crescendu noch gebraucht.",loginCreator:"Dein Login bleibt, für deine Creator-Daten.",creatorMenu:"Creator-Daten löschen…",creatorTitle:"Deine Creator-Daten löschen?",creatorNothing:"Es lässt sich nichts löschen: Alle deine Content Packs wurden schon hinzugefügt.",creatorLoginPacks:"Dein Login bleibt, für die Content Packs, die schon hinzugefügt wurden.",creatorLoginPlayer:"Dein Login und deine Violin-Hero-Daten bleiben. Um sie zu löschen, wähl in Violin Hero im Kontomenü „Konto löschen…“.",creatorCancel:"Creator-Daten behalten",creatorConfirm:"Creator-Daten löschen",doneCreator:"Deine Violin-Hero-Daten sind gelöscht. Dein Login bleibt für deine Creator-Daten: Lösch sie auf der Creator-Seite, dann geht der Login mit.",creatorDoneLogin:"Deine Creator-Daten und dein Login sind gelöscht. Danke, dass du für Violin Hero erstellt hast!",creatorDoneSchool:"Deine Creator-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",creatorDonePacks:"Die Packs, die niemand hinzugefügt hatte, sind gelöscht. Die anderen bleiben, mit deinem Creator-Profil und deinem Login.",creatorDonePlayer:"Deine Creator-Daten sind gelöscht. Dein Login und deine Violin-Hero-Daten bleiben.",understood:"Mir ist klar, dass sich das nicht rückgängig machen lässt.",cancel:"Konto behalten",confirm:"Alles löschen",deleting:"Wird gelöscht…",steps:{takes:"Deine Aufnahmen werden gelöscht…",library:"Hinzugefügte Packs werden entfernt…",packs:"Deine erstellten Packs werden gelöscht…",profile:"Dein Creator-Profil wird gelöscht…",feedback:"Dein Feedback wird gelöscht…",messages:"Deine Nachrichten und dein Lob werden gelöscht…",rest:"Fortschritt und Übezeit werden gelöscht…",browser:"Dieser Browser wird geleert…",login:"Dein Login wird gelöscht…"},failed:"Es ließ sich nicht alles löschen. Bitte versuch es noch einmal.",doneTitle:"Deine Daten sind gelöscht",doneLogin:"Dein Konto gibt es nicht mehr. Danke, dass du mit Violin Hero geübt hast!",doneSchool:"Deine Violin-Hero-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",doneAgain:"Deine Daten sind gelöscht. Um auch den Login zu löschen, melde dich noch einmal an und wähle wieder „Konto löschen“.",ok:"OK"},nextPack:{title:"Du hast das ganze Starter Pack freigeschaltet!",text:"Lust auf mehr? „Beliebte Violinstücke“ hat 25 Lieblingsstücke, von der Méditation bis zum Csárdás, alle sofort offen, sobald du es hinzufügst.",signIn:"Melde dich im Marketplace an, um es hinzuzufügen.",show:"Zeig mir",later:"Später"},packUpdates:{title:t=>t===1?"Ein Inhaltspaket hat ein Update":`${t} Inhaltspakete haben Updates`,untitled:"Inhaltspaket",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Aktualisieren",updating:"Wird aktualisiert…",keep:t=>`Version ${t} behalten`,later:"Später entscheiden",note:"Deine Aufnahmen bleiben in jedem Fall erhalten."},sharedTake:{sharedBy:t=>`${t} hat eine Aufnahme mit dir geteilt`,sharedByAnyone:"Jemand hat eine Aufnahme mit dir geteilt",yours:"Deine eigene Aufnahme, über deinen Link",played:"Gespielt",tempo:"Tempo",originalTempo:"Originaltempo",section:"Abschnitt",playedAlong:"Mitgespielt zu",bars:(t,e)=>`Takte ${t}–${e}`,score:"Punkte",withPiano:"Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.",listen:"Anhören",playsOnClose:"Die Wiedergabe beginnt, wenn du diese Karte schließt."},unlock:{locked:"Gesperrt: Schalte es frei, indem du Stücke bestehst oder übst",next:"Als Nächstes freischalten",all:"Alle Stücke sind freigeschaltet. Ling Ling wäre stolz!",pass:(t,e)=>`Schaffe ${t} % bei einem Stück, das du noch nicht bestanden hast (mit mindestens ${e} % Tempo)`,thisTake:t=>`Diese Aufnahme: ${t} %`,passedNow:"✓ Bestanden!",passedBefore:"Dieses Stück hast du schon bestanden: probier ein anderes.",or:"oder",signIn:"Melde dich an, damit dein Fortschritt sicher ist, auf jedem Gerät.",takes:t=>`nimm noch ${t} ${t===1?"Aufnahme":"Aufnahmen"} auf`,nudges:["Ling Ling übt 40 Stunden am Tag. Ein paar Aufnahmen mehr schaden nicht!","Üb wie Ling Ling: 40 Stunden am Tag (ein paar Minuten sind ein guter Anfang).","Ling Ling schaut zu. Nimm die Violine in die Hand!","Sei keine Bratsche. Nimm es noch einmal auf!","Emotional Damage? Nein: Emotional Progress!","Jede Aufnahme bringt dich Ling Ling ein Stück näher.","Für Ling Ling auf Schlaf verzichten? Eine Aufnahme mehr reicht schon.","Ling Ling spielt das mit Kater. Du kannst es jetzt spielen!"],title:"Neues Stück freigeschaltet!",titleMany:t=>`${t} neue Stücke freigeschaltet!`,newLevel:t=>`Neuer Schwierigkeitsgrad: ${t}!`,play:"Gleich spielen",later:"Später",cheers:["Ling Ling wäre stolz!","Das ist der 40-Stunden-am-Tag-Geist!","Ling Ling ist einverstanden. Weiter so!","Dein Üben hat sich gelohnt. Auf zum nächsten!","Großartig! Da würde sogar eine Bratsche jubeln."],levelCheers:["Ein ganz neuer Schwierigkeitsgrad! Auch Ling Ling hat mal als Anfänger angefangen.","Level up! Ling Ling wird langsam nervös.","Willkommen auf der nächsten Stufe: Jetzt fängt das echte Üben an!"]},best:(t,e,n)=>`Bestleistung: ${t} · ${e}/${n}`,bestTitle:"Die Bestenliste für dieses Stück zeigen",practising:t=>t===1?"Gerade übt noch 1 Person dieses Stück":`Gerade üben noch ${t} Personen dieses Stück`,invites:["Noch keine Bestleistung: deine Chance, ganz nach oben zu kommen!","Das Treppchen ist leer. Nimm das ganze Stück auf und hol dir Platz eins!","Hier hat noch niemand Punkte geholt. Sei die oder der Erste!","Platz eins ist noch zu haben: erst üben, dann aufnehmen!","Eine leere Bestenliste wartet auf deinen Namen.","Sei die Leistung, die alle anderen schlagen müssen.","Neues Stück, neues Glück: setz die Marke, die es zu schlagen gilt!","Gold ist für dieses Stück noch frei. Hol es dir!"],board:{title:"Bestenliste",of:t=>`Bestenliste für ${t}`,practise:"Los, üben!",you:"du",play:t=>`Aufnahme von ${t} abspielen`,openPodium:t=>`${t===1?"Ein Platz auf dem Treppchen ist":`${t} Plätze auf dem Treppchen sind`} noch frei: Er könnte dir gehören!`,toEnter:t=>`Schaffe mehr als ${t} Punkte, um in die Liste zu kommen.`,onBoard:t=>`Du bist auf Platz ${t}: Schaffst du es noch höher?`,top:"Du bist ganz oben. Kannst du deine eigene Bestleistung schlagen?",signIn:"Melde dich an, damit deine Aufnahmen zählen.",howTo:"Nimm das ganze Stück auf, vom Anfang bis zum Ende, im Originaltempo (100 %), um in die Liste zu kommen.",tips:["Üb zuerst die schweren Takte: markier sie mit der Marke und lass sie wiederholen.","Nimm das Tempo zurück, bis jeder Ton sitzt, und steigere es dann wieder.","Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Hör dir unter Interpretation eine großartige Aufnahme an und mach sie dir zu eigen."]},yourScore:"Dein Ergebnis",yourScoreOpen:"Dein Ergebnis: ganz anzeigen",yourScoreTitle:"Dein Ergebnis: klicken für die Einzelheiten",outOf:t=>`von ${t}`,stars:t=>`${t} von 5 Sternen`,reportSteps:{next:"Wie geht’s weiter?",done:"Fertig",practise:"Weiter üben",back:"Zurück zur Wertung",title:"Deine nächsten Schritte"},shareSignIn:"Stolz auf diese Aufnahme? Melde dich an, dann kannst du sie teilen: Schick den Link an deine Lehrkraft, deine Familie oder deine Freunde, und sie hören genau, wie du gespielt hast.",unranked:t=>`Mit ${t} % des Tempos gespielt, deshalb zählt diese Aufnahme nicht für die Bestenliste: Nur Aufnahmen mit 100 % zählen. ${t<100?"Arbeite dich bis zum Originaltempo hoch und nimm sie dann noch einmal auf!":""}`,publish:{title:"Diese Aufnahme schafft es in die Hall of Fame!",text:"Veröffentliche sie und deine Aufnahme wird öffentlich: sie steht unter deinem Spitznamen in der Bestenliste dieses Stücks und in der Hall of Fame, und alle können sie dort anhören.",signInText:"Melde dich an, um sie zu veröffentlichen: deine Aufnahme wird dann öffentlich und steht in der Bestenliste dieses Stücks und in der Hall of Fame.",publish:"Veröffentlichen",publishing:"Wird veröffentlicht…",saving:"Wird gespeichert…",signIn:"Anmelden",failed:"Das Veröffentlichen hat nicht geklappt. Bitte versuch es noch einmal.",doneTitle:"Du bist in der Hall of Fame!",doneText:"Deine Aufnahme steht jetzt in der Bestenliste dieses Stücks und in der Hall of Fame.",see:"Ansehen"},topScores:t=>`Bestenliste für ${t}`,scoreHeadline:"Punkte",loading:"Lädt…",noScores:"Für dieses Stück gibt es noch keine Ergebnisse.",thisTake:"(diese Aufnahme)",styleBonus:"Stilbonus",badTaste:"Stilbruch",bonus:"Bonus",penalty:"Abzug",categories:{intonation:"Intonation",timing:"Timing",sound:"Klang",dynamics:"Dynamik",trills:"Triller",missed:"Fehlende Töne",wrong:"Richtige Töne"},details:{nothingHeard:()=>"Nichts gehört",spotOn:()=>"Genau getroffen",centsOff:t=>`Im Schnitt ${t} ¢ daneben`,landedLate:t=>` · ${t} spät angekommen`,noEntries:()=>"Keine Einsätze gehört",earlyLate:(t,e)=>[t&&`${t} zu früh`,e&&`${e} zu spät`].filter(Boolean).join(", "),onTime:()=>"Immer pünktlich",heldShort:t=>`Pünktlich, ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,alsoHeldShort:t=>` · ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,playedOnly:(t,e)=>` · nur ${t} von ${e} Tönen gespielt`,shaping:t=>`Gestaltung zu ${t} % gefolgt`,allFollowed:t=>`Allen ${t} Wechseln gefolgt`,wrongWay:(t,e)=>`${t} von ${e} in die falsche Richtung`,tooFewNotes:()=>"Zu wenige Töne gehört",trills:(t,e,n)=>`${t} von ${nt(e,"Triller","Trillern")}${t?` · ${n.toFixed(0)} Töne/s`:""}`,notesOf:(t,e)=>`${t} von ${e} Tönen`,rightOf:(t,e)=>`${t} von ${e} Tönen richtig`,noneMissed:()=>"Kein Ton fehlt",noneWrong:()=>"Alle Töne richtig",noLongNotes:()=>"Keine langen Töne gehört",vibrato:(t,e)=>`Vibrato auf ${t} von ${e} langen Tönen`,openStrings:()=>"Lange leere Saiten ruhig gehalten",vibratoFast:(t,e)=>` · schnell für ${Te[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoSlow:(t,e)=>` · langsam für ${Te[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoWide:(t,e)=>` · breit für ${Te[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · schmal für ${Te[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · für volle Punkte: ein langsameres Vibrato, ${yt(e,e%1?1:0)}–${yt(n,n%1?1:0)} Schwingungen pro Sekunde in ${Te[i]} (deins ${String(t).replace(".",",")})`,vibratoFaster:(t,e,n,i)=>` · für volle Punkte: ein schnelleres Vibrato, ${yt(e,e%1?1:0)}–${yt(n,n%1?1:0)} Schwingungen pro Sekunde in ${Te[i]} (deins ${String(t).replace(".",",")})`,vibratoNarrower:(t,e,n,i)=>` · für volle Punkte: ein schmaleres Vibrato, ${e}–${n} ¢ in ${Te[i]} (deins ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · für volle Punkte: ein breiteres Vibrato, ${e}–${n} ¢ in ${Te[i]} (deins ${t} ¢)`,vibratoMore:t=>` · für volle Punkte: Vibrato auf ${t===1?"dem Ton":`den ${t} Tönen`} ohne`,vibratoSteadier:t=>` · für volle Punkte: ${t===1?"einen langen Ton":`${t} lange Töne`} ruhiger halten oder Vibrato spielen`,vibratoOptional:t=>` · in ${Te[t]} freiwillig`,slidesInStyle:(t,e,n)=>`${io(t,e)}, stilecht für ${n}`,slidesBadTaste:(t,e,n)=>`${io(t,e)}: ein Stilbruch für ${n}`},silent:[["Hast du gespielt?","Wir haben keinen einzigen Ton gehört."],["Hallo? Jemand da?","Kein Ton ist bei uns angekommen."],["Stille Nacht?","Das war sehr leise. Zu leise."],["Hast du gespielt?","Ling Ling hat nichts gehört, und Ling Ling hört alles."]],silentTip:"Prüfe, ob das Mikrofon erlaubt ist und sich die Anzeige bei „Eingang“ beim Spielen bewegt.",praise:[[["Brillant!","Das war reif für die Bühne."],["Bravo!","Das Publikum steht auf."],["Herausragend!","Kaum ein Ton daneben."],["Großartig!","Du hast das Stück zum Singen gebracht."]],[["Glückwunsch!","Ein schöner Vortrag."],["Wunderschön!","Es war eine Freude zuzuhören."],["Wunderbar!","Du kennst dieses Stück richtig gut."],["Schön gespielt!","Nur noch ein paar Feinheiten bis perfekt."]],[["Gut gespielt!","Schön gemacht. Ein bisschen Feinschliff, und es glänzt."],["Gute Arbeit!","Das Stück nimmt Gestalt an."],["Prima!","Du bist auf einem guten Weg."],["Solide Aufnahme!","Bleib dran, dann funkelt es."]],[["Gut versucht!","Da geht noch mehr. Probier es noch einmal!"],["Es wird!","Mit jedem Durchgang wird es runder."],["Nicht schlecht!","Noch ein paar Runden, und du hast es."],["Weiter so!","Das Schwerste hast du hinter dir."]],[["Bleib dran!","Jede Aufnahme macht dich besser."],["Guter Anfang!","Nimm das Tempo raus und versuch es noch einmal."],["Nicht aufgeben!","Auch die Großen haben das geübt."],["Übung macht den Meister!","Markier einen schwierigen Takt und wiederhole ihn."]]],highlights:{intonation:["Deine Intonation war der Star dieser Aufnahme.","Wunderbar sauber!","Dein Gehör hat großartige Arbeit geleistet."],timing:["Genau im Takt, von Anfang bis Ende.","Dein Timing war bombenfest.","Du und das Klavier wart perfekt zusammen."],sound:["Was für ein schönes Vibrato!","Deine langen Töne haben richtig gesungen.","Ein warmer, singender Ton."],dynamics:["Deine Dynamik hat die Musik lebendig gemacht.","Schön gestaltet, laut und leise.","Du bist jedem Crescendo und Diminuendo gefolgt."],trills:["Funkelnde Triller, schön schnell!","Deine Triller waren eine Freude: schnell und sauber.","Wie ein Singvogel: schöne Triller."],missed:["Kein einziger Ton ausgelassen.","Jeder Ton war da.","Du hast nie den Faden verloren."],wrong:["Blitzsauber: kein falscher Ton.","Jeder Ton war der richtige.","Wunderbar treffsichere Finger."],glide:["Schöne, ausdrucksvolle Glissandi: ganz romantisch!","Deine Glissandi gaben ihm echte romantische Wärme.","Schönes Portamento, genau richtig für diese Musik."]},tips:{intonation:["Tipp: Stimm die langen Töne gegen das Klavier ab.","Tipp: Spiel die schwierigen Takte langsam und hör auf jeden Ton.","Tipp: Prüf deine Intonation an den leeren Saiten."],timing:["Tipp: Schalte den Klick ein und setz mit dem Schlag ein.","Tipp: Zähl die Pausen laut mit, bevor du einsetzt.","Tipp: Nimm das Tempo zurück und steigere es dann wieder."],sound:["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Lass die langen Töne klingen und singen."],dynamics:["Tipp: Achte auf die p und f und mach den Unterschied größer.","Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Spiel die leisen Stellen wirklich leise, dann lass die lauten heraus."],trills:["Tipp: Üb die Triller langsam und gleichmäßig, dann schneller.","Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Fang den Triller ruhig an und lass ihn dann immer schneller werden."],missed:["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Markier die Takte mit fehlenden Tönen und wiederhole sie."],wrong:["Tipp: Markier die schwierigen Takte und wiederhole sie langsam.","Tipp: Prüf den Fingersatz dort, wo die falschen Töne waren.","Tipp: Spiel die schwere Stelle langsamer, bis jeder Ton stimmt."],glide:["Tipp: Wechsle sauber zwischen den Tönen: kein Rutschen in diesem Stil.","Tipp: In Klassik und Barock die Lagenwechsel sauber und schnell halten.","Tipp: Lass die Glissandi weg: Lagenwechsel ohne Rutschen."]}},it=(t,e,n)=>`${t} ${t===1?e:n}`,Ee=["Romantic music","this music","Classical music","Baroque music","folk music","fiddle music","klezmer","this style"],ro=(t,e)=>[t&&it(t,"glissando","glissandi"),e&&it(e,"slide","slides")].filter(Boolean).join(", "),qf={versionTitle:(t,e)=>`Version ${t}, commit ${e}`,darkMode:"Dark mode",lightMode:"Light mode",themeMenu:"Look: light or dark, colours",schemes:{blue:"Ocean",violet:"Plum",teal:"Lagoon",rose:"Raspberry",graphite:"Graphite"},helpTitle:"How to use (?)",helpLabel:"How to use Violin Hero",tools:{key:"Tools",title:"Tools: tuner and more",tuner:"Tuner",tunerLead:"Tune your violin",setup:"Audio setup",setupLead:"Microphone and speakers, input level, delay",more:"More tools",moreLead:"Add tools like the Vibralizer in the Marketplace",moduleFailed:"This tool could not be loaded. Check your connection and try again.",close:"Close"},marketTitle:"Violin Hero Marketplace: more content packs",overlay:{marketplace:"Content packs and tools for Violin Hero",halloffame:"The best takes, players and pieces",close:"Back to Violin Hero"},languageTitle:t=>`Language: ${t}`,languageMenu:"Choose the language",tempo:"Tempo",click:"Click",fullscreen:"Violin part in full screen mode",leaveFullscreen:"Back to the normal view (Esc)",dragBar:"Drag to move the bar",pageSize:"Score size",pageSizes:{small:"Small: more bars to a line",medium:"Medium",large:"Large: easier to read and to mark up"},metronome:"Metronome",practice:"Practice",piano:"Piano",pianoModel:"Sound",staves:"Staves",violin:"Violin",humanize:"Humanize",reverb:"Reverb",volume:"Volume",pianos:{grand:"Grand",upright1:"Upright 1",upright2:"Upright 2"},startStop:"Start/Stop",play:"Play",pause:"Pause",playTitle:"Play / pause (P; double-click: back to the start)",navigation:"Navigation",back:"Back",forward:"Forward",backTitle:"One bar back (double-click: the start)",forwardTitle:"One bar on (double-click: the end)",take:"Take",record:"Record",stop:"Stop",recordTitle:"Record (R)",finishMarking:"Finish marking up first (Esc)",clear:"Clear",sure:"Sure?",clearTitle:"Clear the take",clearConfirmTitle:"Press again to clear the take",share:"Share",shareTitle:"Share your take",shareScoreTitle:"Share your markings of this piece (a link)",section:"Section",marker:"Marker",markerTitle:"Mark a section (M)",repeat:"Repeat",repeatTitle:"Repeat the section (L; double-click: to its start)",input:"Input",inputGain:"Input gain",level:"Level",levels:["Beginner","Easy","Intermediate","Advanced","Expert"],genre:"Genre",allGenres:"All",allLevels:"All",genres:{early:"Early music",baroque:"Baroque",classical:"Classical",romantic:"Romantic",modern:"Modern & contemporary",concertos:"Concertos",sonatas:"Sonatas",showpieces:"Showpieces",salon:"Salon pieces",dances:"Dances",opera:"Opera & operetta",sacred:"Sacred & hymns",etudes:"Études",carols:"Christmas & carols",wedding:"Wedding",children:"Children’s songs",folk:"Folk songs",celtic:"Celtic & fiddle",bluegrass:"Bluegrass & country",hungarian:"Hungarian & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & swing",film:"Film & game music",pop:"Pop, rock & musicals"},piece:"Piece",placeOf:(t,e)=>`${t} of ${e}`,scoreLabel:"Score",scorePdfTitle:"The violin part as a PDF, to print or download",fingeringsBy:t=>`Score has been marked up by ${t}`,fingeringsAdded:"Score has been marked up",pieceCount:t=>t?it(t,"piece","pieces"):"No pieces",lockedCount:t=>`${t} locked`,noneUnlocked:"none unlocked",noPieces:"No pieces here: try another level",interpretation:"Interpretation",defaultWritten:"Default",defaultNone:"No interpretations",recordings:"Recordings",recordingsNone:"None",recordingsEmpty:"No recordings yet",you:"You",loop:"Loop",playTake:(t,e)=>`Play your take (${t}, ${e})`,stopRecording:"Stop the recording",playRecording:(t,e)=>`Play the recording (${t}${e?", on YouTube":""})`,chooseRecording:"Choose a recording to play it",hints:{playPause:"play / pause",record:"record",bar:"bar",marker:"marker",repeat:"repeat",violin:"violin",piece:"piece",yourTake:"your take",recording:"recording",help:"help"},panels:{navigation:"Transport",playback:"Settings",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Sett.",repertoire:"Rep."},panelOpen:t=>`Show ${t}`,panelClose:t=>`Hide ${t}`,controls:"Controls",stopVideo:"Stop the video",resizeVideo:"Drag to resize the video",flags:{loadingRecording:"Loading recording",aligning:(t,e)=>t==="spectrum"?`Analysing the spectrum ${e} %`:t==="aligning"?`Detecting the tempo: ${e} % of the score`:`Matching the piano notes ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violin muted",pianoOff:"Piano muted",rec:"Rec",yourTake:"▶ Your take",takeOf:t=>`▶ ${t}’s take`,repeat:"Repeat",loadingSounds:"Loading sounds",loadingPiano:"Loading piano",loadingViolin:"Loading violin",noMicrophone:"No microphone",savingToAccount:"Saving to your account",savedToAccount:"✓ Saved to your account",keptForLater:"Kept here: saved to your account later",openingTake:"Loading your take",takeNotOpened:"Your take could not be loaded",syncing:t=>`Saving ${it(t,"recording","recordings")} to your account`,synced:t=>`✓ ${it(t,"recording","recordings")} saved to your account`,sharing:"Making a link to your take",shareFailed:"The take could not be shared",signInToShare:"Sign in to share your takes",openingShared:"Loading the shared take",sharedNotOpened:"The shared take could not be loaded",tapToPlay:"Tap anywhere to play",speakersHeard:"Piano heard through the microphone: use headphones",phoneMode:"Bluetooth headset in phone-call mode: use wired headphones or the device’s microphone"},messages:{soundsFailed:"Sounds could not be loaded",scoreFailed:"Score could not be loaded",pianoFailed:"Piano could not be loaded",recordingFailed:"Recording could not be loaded",noTimingYet:t=>`No timing yet: needs ${t}`,noTimingVideo:"No timing for this video",videoFailed:"Video could not be loaded",loadingScore:"Loading score…",engraving:"Engraving…"},edited:"↺ Edited",revertQuestion:"Revert?",editedTitle:"Annotated: click to go back to the score as written",revertConfirmTitle:"Click again to take every annotation off",versionClearTitle:"Take this version’s markings off",versionClearConfirmTitle:"Click again to take every marking of this version off",curveDefault:"Default",curveDefaultTitle:"As written, humanized",curveRecordingTitle:t=>`The recording: ${t}`,wrongNote:"Wrong note!",noteMissed:"Note missed!",wrongShort:"Wrong",missedShort:"Missed",stickerTimeShort:t=>`${t.toFixed(2)} s`,stickerPitch:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,stickerPitchTitle:(t,e)=>`${e?"Too high":"Too low"}: ${t}`,stickerTime:(t,e)=>`${t.toFixed(2)} s ${e?"late":"early"}`,annotate:"Annotate the notes selected",notesSelected:t=>it(t,"note","notes"),finger:t=>`Finger ${t}`,openString:"Open string (0)",downBow:"Down-bow",upBow:"Up-bow",staccato:"Staccato",accent:"Accent",tenuto:"Tenuto",harmonic:"Harmonic (flageolet)",dynamicTitle:t=>`Dynamic: ${t}`,fermata:"Fermata",slur:"Slur",crescendo:"Crescendo (<)",diminuendo:"Diminuendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Not while a take is kept: it lines up only with its timing",revert:"Revert",revertTitle:"Back to the marks written in the score",fx:{boo:["Boo!","Ouch!","Yikes!","Oops!","Eek!"],late:["Late!","Wake up!","Too slow!"],early:["Wait!","Too soon!","Hold it!"],short:["Too short!","Hold it longer!","Keep the bow going!"],surf:["Surf's up!","Cowabunga!","Ride it!"],snowboard:["Shred it!","Sick slide!","Whoosh!"],ski:["Whee!","Downhill!","Swoosh!"],penguin:["Wheee!","Belly slide!","Sliiide!"],tweet:"Tweet!",buzz:"Bzzz!",trill:"Trrrill!",chirp:"Chirp!",vibrato:["Vibrato!","So warm!","Lovely!","It sings!"]},signIn:"Sign in",signedInAs:t=>`Signed in as ${t}`,createAccount:"Create an account",createAccountButton:"Create account",haveAccount:"I have an account",forgotPassword:"Forgot your password?",or:"or",google:"Continue with Google",agree:["By continuing you agree to our "," and have read our ","."],termsName:"terms of use",privacyName:"privacy policy",close:"Close",email:"Email",password:"Password",passwordHint:t=>`At least ${t} characters`,accountLead:t=>`Violin Hero works without an account. Signed in, your recordings are saved to your account${t?`, and the ${t===1?"take":`${t} takes`} kept in this browser with them`:""}.`,enterEmailFirst:"Enter your email address first.",resetSent:t=>`We sent a link to reset your password to ${t}.`,confirmEmail:"Please confirm your email address: the link is in your inbox.",anonymous:"Anonymous",save:"Save",nicknameTaken:t=>`“${t}” is already taken. Try another one!`,nicknameInvalid:"A nickname can’t contain “/”.",pickNickname:"Pick a nickname",nicknameDialog:{title:"Pick your nickname",lead:"It shows with your recordings in the top scores and the Hall of Fame. Other players see only this name, so choose one you’re happy to have public.",label:"Nickname",save:"Save nickname",later:"Later"},signOut:"Sign out",profile:"Profile",creatorDashboard:"Your creator dashboard",invite:"Invite a violinist",inviteCopied:"Link copied: send it to a violinist!",inviteFailed:"The link could not be copied",inviteText:"Practise with me on Violin Hero: play along with the piano, see how in tune you are and record your takes.",feedback:"Feedback & bug reports",hintTitle:"Sign in to save your recordings and your progress",scoreHintTitle:"Sign in to print scores",scoreHintText:"Printable scores with your fingerings and marks are for signed-in players.",shareHintTitle:"Sign in to share your markings",shareHintText:"Your fingerings, bowings and dynamics get a link of their own: send it to your teacher or your stand partner.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"yours",shareScoreDone:{headlines:[["Link copied!","Your markings are ready to be shared."],["Off it goes!","Your fingerings and dynamics now have a link of their own."],["Ready to share!","A score marked up by you: that is real musicianship."]],ready:["Your link","Copy it, and your markings are ready to be shared."],anywhere:"Send it any way you like. Whoever opens it gets the piece with your fingerings, bowings and dynamics, added to their pieces under your name.",who:["Your teacher","Your stand partner","Your orchestra","Your friends"],cheers:["Good fingerings are a gift: pass them on.","Your teacher will love seeing how you think about the music.","Ling Ling marks every score. Now so do you.","Shared markings, fewer wrong notes, more music."]},sharedScore:{sharedBy:t=>`${t} shared their markings with you`,sharedByAnyone:"Someone shared their markings with you",yours:"Your own markings",you:"yours",someone:"shared",intro:"A marked-up score, ready to practise with: their fingerings, bowings and dynamics on the notes, played as marked.",kinds:{fingerings:"fingerings",bowings:"bowings",articulations:"articulations",dynamics:"dynamics",phrasing:"slurs, fermatas and rit."},cheers:["Learning from each other is how musicians grow.","Somebody thought of you while marking this score.","New fingerings, new ideas: give them a try!","Practising together, even apart."],open:"Open the score",later:"Not now",addedAs:(t,e)=>`Added to your pieces as “${t} – ${e}”, beside the original.`},hintText:t=>`${t>1?`${t} takes are`:"Your take is"} kept in this browser until you sign in, then saved to your account, with the pieces you have unlocked.`,hintDismiss:"Don’t show this again",graphShow:"Show the tempo and loudness graph",graphHide:"Hide the tempo and loudness graph",logoHintTitle:"Your start page is up here",startPage:"To the start page",logoHintText:"Tap the Violin Hero icon to open the start screens again: tune your violin and pick a piece.",recordHints:["One more go? Start a new take!","Every take brings the next piece closer. Record another!","Practice makes perfect: tap here for a new take."],navHintTitle:"Step through the bars",navHintText:"Back and Forward jump a bar at a time, so you can hear a passage again. Or drag the score.",pageHintTitle:"There’s more to discover",pageHintText:"Close the page view here: the normal view has all the pieces, recordings of great violinists to play along with, your takes and the settings.",guide:{passed:"Well done! On to the next piece",passedLead:t=>`${t} is waiting for you.`,again:"One more take?",againLead:(t,e)=>e===1?`Reach ${t} %, or record one more take, to open the next piece.`:`Reach ${t} %, or record ${e} more takes, to open the next piece.`,allDone:"You’ve played every starter piece!",allDoneLead:"The normal view has the whole library, recordings of great violinists and more.",play:t=>`Play ${t}`,recordAgain:"Record again",onceMore:"Once more",tryOther:t=>`Try ${t}`,toNormal:"To the normal view",leave:"No more suggestions"},auth:{wrongPassword:"Wrong email or password.",emailInUse:"There is already an account with this email: sign in instead.",weakPassword:t=>`The password needs at least ${t} characters.`,invalidEmail:"That email address doesn’t look right.",tooMany:"Too many attempts: please wait a moment and try again.",popupClosed:"The Google window was closed before signing in.",popupBlocked:"The browser blocked the Google window: allow pop-ups for this page.",unauthorizedDomain:"Signing in isn’t enabled for this address yet.",network:"No connection: check your network and try again.",failed:t=>`That didn’t work (${t}).`},deleteTake:{title:"Delete this take?",account:"It will be deleted from your account for good: the recording and everything saved with it.",ranked:"It is in the top scores of this piece too: it will be removed from them, for everyone.",place:t=>`It is number ${t} in the hall of fame: it will be removed from it, for everyone.`,keepsProgress:"The pieces you have unlocked stay unlocked.",confirm:"Delete it",cancel:"Keep it",deleting:"Deleting…",failed:"The take could not be deleted. Please try again."},shareDone:{headlines:[["Link copied!","Your recording is ready to be heard."],["Off it goes!","Your take now has a link of its own."],["Ready to share!","Be proud of it: you played that."]],ready:["Your link","Copy it, and your recording is ready to be heard."],anywhere:"Send it any way you like: by message, email or chat. Whoever opens it hears your recording, with the piano, just as you played it.",who:["Your teacher","Your parents","Grandma and Grandpa","Your friends"],cheers:["Every take you share is a little concert.","Your teacher will love hearing how you practise.","Ling Ling shares every take. Well, the good ones. This one counts.","Music is for listening to. Let them hear you!"],playedAlong:"Played along with",copy:"Copy",copyAgain:"Copy again",copiedAgain:"✓ Copied",done:"Done",text:t=>`Listen to me playing ${t} on Violin Hero!`},install:{title:"Install Violin Hero as an app",tap:"Tap",share:"Share",then:"then",add:"Add to Home Screen",openInSafari:"Open this page in Safari, tap",chromeToo:"Newer Chrome versions have it under the share icon in the address bar too.",close:"Close"},practiceTips:{title:"Practice tips",video:"Watch the video",videoTitle:"Opens the video on YouTube, in a new tab",start:"Start now",close:"Close",open:"Practice tips",openTitle:"Show the practice tips for this piece",festiveTitle:"Christmas practice tips",festiveLead:"It’s Christmas time, the best time of year for this one: practise it now and play it under the tree for family and friends."},headphones:{title:"Put on wired headphones",wired:"Wired:",wiredWhy:"the microphone hears only your violin.",speakers:"Speakers:",speakersWhy:"the piano gets recorded too.",bluetooth:"Bluetooth:",bluetoothWhy:"lags and can distort your take.",gotIt:"Got it!",appleAdapter:"Use Apple’s own 3.5 mm adapter: others may go silent."},welcome:{loading:["Rosining the bow…","Tuning the piano…","Unpacking the scores…","Warming up the orchestra…","Polishing the strings…","Dimming the lights…"],progress:t=>`${t} %`,loadingFailed:"Some sounds could not be loaded. Check your connection.",continueAnyway:"Continue anyway",begin:"Let’s go",skipIntro:"Skip intro",beginNote:"Your browser will ask to use the microphone, so Violin Hero can hear your violin.",hearString:t=>`Hear the ${t}`,stopTone:"Stop the tone",byEar:"Tune by ear: the beats slow down as you get close",tuner:"Tuner",level:"Level",gain:"Input",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t)} dB`,gainTitle:"The microphone’s gain: set it so your loudest notes reach the green area (double-click: +12 dB)",cal:{key:"Calibrate",keyTitle:"Measure the delay from the speakers to the microphone, so your recordings line up with the piano",ms:t=>`${t} ms`,title:"Compensate delay",lead:"Every device takes a little time to play a sound and to record it. Violin Hero plays a few clicks and listens for them, to line your recordings up exactly with the piano.",speakers:"Plug in the headphones you play with and turn the volume up.",micOn:"Hold one earpiece right at your device’s microphone.",quiet:"Keep quiet for a few seconds while the clicks play.",measuring:(t,e)=>`Listening… click ${t} of ${e}`,sent:"played",heard:"heard",result:t=>`Delay: ${t} ms`,applied:"Your recordings and your line are now placed by it.",notHeard:"The clicks weren’t heard.",unsteady:"The clicks were heard unevenly.",tryAgain:"Turn the volume up, hold the earpiece right at the microphone, keep quiet and try again.",needMic:"The microphone is needed: allow it first.",back:"Done",start:"Start measuring",again:"Measure again",newMeasurement:"New measurement",save:"Save"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Microphone",inputTitle:"The input in use, as your system names it; for a stereo one, each side’s level",setupTitle:"Audio setup",inputDevice:"Microphone input",outputDevice:"Headphone output",systemDefault:"System default",sidesTitle:"Each side of the input on its own: a silent or noisy side shows here",loudHint:"Play your loudest notes: the bar should reach the green area.",newInput:t=>`New input: ${t}`,useInput:"Use it",levelTitle:"The input level: your loudest notes in the green area make a clean take; in the red one they distort",startTuning:"Start tuning",micWhy:"Violin Hero listens through your microphone.",micAsking:"Allow the microphone in your browser…",micDenied:"No microphone. Allow it in your browser to tune and record.",playString:t=>`Play your ${t} string`,tuneUp:"Tune up",tuneDown:"Tune down",inTune:"In tune!",offBy:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,wrongString:(t,e)=>`That sounds like your ${t} string. Play the ${e}.`,farOff:"Far off: turn slowly and listen",stringTitle:t=>`Tune the ${t} string`,aDone:"Your A is in tune!",others:"Now the D, G and E, or tune them yourself.",skip:"I’ll tune the others myself",alreadyInTune:"My violin is already in tune",closeTool:"Done",allDone:"All four strings in tune. Beautiful!",next:"Continue",ready:"Ready to go",firstPiece:"Your first piece",firstPieceLead:"Easy to start with, lovely to play. New pieces unlock once you can play this one well.",accountTitle:"Keep what you play",accountLead:"Free: your takes and progress, on every device.",signIn:"Sign in",signedIn:t=>`Signed in as ${t}: your takes and progress are saved.`,offline:"Offline: your takes wait on this device and are saved once you are back online.",go:"Bows up!",goNote:"Two bars count you in, then your first take starts.",backToTuner:"Back to the tuner"},deleteAccount:{menu:"Delete account…",title:"Delete your account?",loading:"Looking up what is stored…",lead:"This is what will be deleted for good:",nickname:t=>`Your nickname “${t}”`,takes:(t,e)=>`${t===1?"1 recording":`${t} recordings`}${e?` (${e} in the hall of fame)`:""}, with their share links`,progress:(t,e)=>`Your progress: ${t===1?"1 piece":`${t} pieces`} passed, ${e===1?"1 take":`${e} takes`} counted`,practice:t=>`Your practice time (${t})`,markings:(t,e)=>`Your markings on ${t===1?"1 piece":`${t} pieces`}${e?`, ${e} shared`:""}`,packsAdded:t=>`Content packs you added: ${t}`,packsMade:t=>`Content packs you made: ${t}`,creatorProfile:"Your creator profile",invitations:t=>`Your invitations${t?` (${t} karma)`:""}`,feedback:(t,e,n)=>`Your feedback: ${t===1?"1 post":`${t} posts`}, ${e===1?"1 vote":`${e} votes`}${n?", your rating":""}`,browser:"What this browser keeps (settings, takes waiting to upload)",packsBought:t=>`Content packs you bought will be lost: ${t}. Your purchases belong to this account; with a new one you would have to buy them again.`,packsKept:t=>`Kept: ${t}. Players have added these packs, so they stay, with your creator profile.`,creatorStays:"Your creator profile and your content packs stay. To delete them, choose “Delete creator data…” in the account menu on the creator page.",login:"Your login is deleted too.",loginSchool:"Your login stays: it is still in use elsewhere in Crescendu.",loginCreator:"Your login stays, for your creator data.",creatorMenu:"Delete creator data…",creatorTitle:"Delete your creator data?",creatorNothing:"Nothing can be deleted: players have added all your content packs.",creatorLoginPacks:"Your login stays, for the content packs players have.",creatorLoginPlayer:"Your login and your Violin Hero data stay. To delete them, choose “Delete account…” in Violin Hero’s account menu.",creatorCancel:"Keep my creator data",creatorConfirm:"Delete creator data",doneCreator:"Your Violin Hero data is gone. Your login stays for your creator data: delete that on the creator page, and the login goes with it.",creatorDoneLogin:"Your creator data and your login are gone. Thank you for creating for Violin Hero!",creatorDoneSchool:"Your creator data is gone; your login stays, as it is still in use elsewhere in Crescendu.",creatorDonePacks:"The packs no player had are gone. The others stay, with your creator profile and your login.",creatorDonePlayer:"Your creator data is gone. Your login and your Violin Hero data stay.",understood:"I understand that this can’t be undone.",cancel:"Keep my account",confirm:"Delete everything",deleting:"Deleting…",steps:{takes:"Deleting your recordings…",library:"Removing the packs you added…",packs:"Deleting the packs you made…",profile:"Deleting your creator profile…",feedback:"Deleting your feedback…",messages:"Deleting your messages and praise…",rest:"Deleting your progress and practice time…",browser:"Clearing this browser…",login:"Deleting your login…"},failed:"Not everything could be deleted. Please try again.",doneTitle:"Your data is deleted",doneLogin:"Your account is gone. Thank you for practising with Violin Hero!",doneSchool:"Your Violin Hero data is gone; your login stays, as it is still in use elsewhere in Crescendu.",doneAgain:"Your data is gone. To delete your login too, sign in once more and choose Delete account again.",ok:"OK"},nextPack:{title:"You’ve opened the whole starter pack!",text:"Ready for more? “Popular violin pieces” has 25 favourites, from the Méditation to the Czardas, all open as soon as you add it.",signIn:"Sign in in the marketplace to add it.",show:"Show me",later:"Later"},packUpdates:{title:t=>t===1?"A content pack has an update":`${t} content packs have updates`,untitled:"Content pack",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Update",updating:"Updating…",keep:t=>`Keep version ${t}`,later:"Decide later",note:"Your takes stay either way."},sharedTake:{sharedBy:t=>`${t} shared a recording with you`,sharedByAnyone:"Someone shared a recording with you",yours:"Your own recording, from your link",played:"Played",tempo:"Tempo",originalTempo:"Original tempo",section:"Section",playedAlong:"Played along with",bars:(t,e)=>`Bars ${t}–${e}`,score:"Score",withPiano:"You will hear the violin as it was played, with the piano, the notes scrolling along.",listen:"Listen",playsOnClose:"It starts playing when you close this card."},unlock:{locked:"Locked: unlock it by passing pieces or by practising",next:"Next to unlock",all:"Every piece is unlocked. Ling Ling would be proud!",pass:(t,e)=>`Score ${t} % on a piece you haven’t passed yet (at ${e} % tempo or faster)`,thisTake:t=>`This take: ${t} %`,passedNow:"✓ Passed!",passedBefore:"This piece is passed already: try another one.",or:"or",signIn:"Sign in to keep your progress safe, on every device.",takes:t=>`record ${t} more ${t===1?"take":"takes"}`,nudges:["Ling Ling practises 40 hours a day. A few more takes won’t hurt!","Practise like Ling Ling: 40 hours a day (a few minutes is a fine start).","Ling Ling is watching. Pick up the violin!","Don’t be a viola. Record it once more!","Emotional damage? No: emotional progress!","Every take brings you a little closer to Ling Ling.","Sacrifice your sleep for Ling Ling? Just one more take will do.","Ling Ling would play it with a hangover. You can play it now!"],title:"New piece unlocked!",titleMany:t=>`${t} new pieces unlocked!`,newLevel:t=>`New level: ${t}!`,play:"Play it now",later:"Later",cheers:["Ling Ling would be proud!","That’s the 40-hours-a-day spirit!","Ling Ling approves. Keep going!","Your practice paid off. On to the next one!","Brilliant! Even a viola would cheer for that."],levelCheers:["A whole new level! Even Ling Ling started as a Beginner once.","Level up! Ling Ling is getting nervous.","Welcome to the next level: the real practice starts now!"]},best:(t,e,n)=>`Best: ${t} · ${e}/${n}`,bestTitle:"Show the top scores for this piece",practising:t=>t===1?"1 other player is currently practising this piece":`${t} other players are currently practising this piece`,invites:["No top score yet: your chance to make it to the top!","The podium is empty. Record the whole piece and claim first place!","Nobody has scored this one yet. Be the first!","First place is up for grabs: practise, then record!","An empty hall of fame is waiting for your name.","Be the one everybody else has to beat.","Fresh piece, clean slate: set the score to beat!","Gold is still free for this piece. Go and get it!"],board:{title:"Hall of fame",of:t=>`Top scores for ${t}`,practise:"Let’s practise",you:"you",play:t=>`Play ${t}’s take`,openPodium:t=>`${t===1?"One place on the podium is":`${t} places on the podium are`} still free: it could be yours!`,toEnter:t=>`Score more than ${t} points to make it onto the board.`,onBoard:t=>`You are number ${t}: can you climb even higher?`,top:"You are at the top. Can you beat your own best?",signIn:"Sign in so that your takes count.",howTo:"Record the whole piece, from its start to its end, at full tempo (100 %), to make it onto the board.",tips:["Practise the hard bars first: mark them with Marker and let Repeat go round.","Slow the tempo down until every note sits, then build it up again.","Play along with the violin first, then switch it off and take over.","Listen to a great performance under Interpretation, then make it your own."]},yourScore:"Your score",yourScoreOpen:"Your score: show it in full",yourScoreTitle:"Your score: click for the details",outOf:t=>`of ${t}`,stars:t=>`${t} of 5 stars`,reportSteps:{next:"What’s next",done:"Done",practise:"Keep practising",back:"Back to your score",title:"Your next steps"},shareSignIn:"Proud of this take? Sign in and you can share it: send the link to your teacher, your family or your friends, and they hear exactly how you played.",unranked:t=>`Played at ${t} % of the tempo, so this take doesn’t count for the top scores: only takes at 100 % do. ${t<100?"Work your way up to full speed, then record it again!":""}`,publish:{title:"This take qualifies for the Hall of Fame!",text:"Publish it and your recording becomes public: it is listed on this piece’s board and in the Hall of Fame under your nickname, and anyone can listen to it there.",signInText:"Sign in to publish it: your recording then becomes public, listed on this piece’s board and in the Hall of Fame.",publish:"Publish",publishing:"Publishing…",saving:"Saving…",signIn:"Sign in",failed:"It couldn’t be published. Please try again.",doneTitle:"You’re in the Hall of Fame!",doneText:"Your recording is published on this piece’s board and in the Hall of Fame.",see:"See it"},topScores:t=>`Top scores for ${t}`,scoreHeadline:"Score",loading:"Loading…",noScores:"No scores for this piece yet.",thisTake:"(this take)",styleBonus:"Style bonus",badTaste:"Bad taste",bonus:"Bonus",penalty:"Penalty",categories:{intonation:"Intonation",timing:"Timing",sound:"Sound",dynamics:"Dynamics",trills:"Trills",missed:"Missed notes",wrong:"Right notes"},details:{nothingHeard:()=>"Nothing heard",spotOn:()=>"Spot on",centsOff:t=>`${t} ¢ off on average`,landedLate:t=>` · ${t} landed late`,noEntries:()=>"No entries heard",earlyLate:(t,e)=>[t&&`${t} early`,e&&`${e} late`].filter(Boolean).join(", "),onTime:()=>"Always on time",heldShort:t=>`On time, ${t} long ${t===1?"note":"notes"} cut short`,alsoHeldShort:t=>` · ${t} long ${t===1?"note":"notes"} cut short`,playedOnly:(t,e)=>` · only ${t} of ${e} notes played`,shaping:t=>`Shaping followed ${t} %`,allFollowed:t=>`All ${t} changes followed`,wrongWay:(t,e)=>`${t} of ${e} played the wrong way`,tooFewNotes:()=>"Too few notes heard",trills:(t,e,n)=>`${t} of ${it(e,"trill","trills")}${t?` · ${n.toFixed(0)} notes/s`:""}`,notesOf:(t,e)=>`${t} of ${e} notes`,rightOf:(t,e)=>`${t} of ${e} notes right`,noneMissed:()=>"None missed",noneWrong:()=>"All notes right",noLongNotes:()=>"No long notes heard",vibrato:(t,e)=>`Vibrato on ${t} of ${e} long notes`,openStrings:()=>"Long open strings held steady",vibratoFast:(t,e)=>` · fast for ${Ee[e]} (${t} per second)`,vibratoSlow:(t,e)=>` · slow for ${Ee[e]} (${t} per second)`,vibratoWide:(t,e)=>` · wide for ${Ee[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · narrow for ${Ee[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · for full points: a slower vibrato, ${e}–${n} swings a second in ${Ee[i]} (yours ${t})`,vibratoFaster:(t,e,n,i)=>` · for full points: a faster vibrato, ${e}–${n} swings a second in ${Ee[i]} (yours ${t})`,vibratoNarrower:(t,e,n,i)=>` · for full points: a narrower vibrato, ${e}–${n} ¢ in ${Ee[i]} (yours ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · for full points: a wider vibrato, ${e}–${n} ¢ in ${Ee[i]} (yours ${t} ¢)`,vibratoMore:t=>` · for full points: vibrato on the ${t===1?"note":`${t} notes`} played without`,vibratoSteadier:t=>` · for full points: hold ${t===1?"one long note":`${t} long notes`} steadier, or add vibrato`,vibratoOptional:t=>` · optional in ${Ee[t]}`,slidesInStyle:(t,e,n)=>`${ro(t,e)}, in ${n} style`,slidesBadTaste:(t,e,n)=>`${ro(t,e)}: bad taste in ${n} music`},silent:[["Did you play?","We didn’t hear a single note."],["Hello? Anyone there?","Not one note reached us."],["Silent night?","That was very quiet. Too quiet."],["Did you play?","Ling Ling heard nothing, and Ling Ling hears everything."]],silentTip:"Check that the microphone is allowed and the level under Input moves while you play.",praise:[[["Brilliant!","That was concert ready."],["Bravo!","The audience is on its feet."],["Outstanding!","Hardly a note out of place."],["Magnificent!","You made that piece sing."]],[["Congratulations!","A lovely performance."],["Beautiful!","That was a pleasure to listen to."],["Wonderful!","You really know this piece."],["Lovely playing!","Just a few details from perfect."]],[["Well played!","Nicely done. A little polish and it shines."],["Good job!","The piece is coming together."],["Nice work!","You are well on your way."],["Solid take!","Keep at it and it will sparkle."]],[["Good effort!","You can do better. Try it once more!"],["Getting there!","Every run makes it smoother."],["Not bad!","A few more rounds and you have it."],["Keep it up!","The hard part is behind you."]],[["Keep going!","Every take makes you better."],["Good start!","Slow it down and try again."],["Don’t give up!","Even the greats practised this."],["Practice makes perfect!","Mark a tricky bar and loop it."]]],highlights:{intonation:["Your intonation was the star of this take.","Beautifully in tune!","Your ear did a great job."],timing:["Right on the beat, all the way through.","Your timing was rock solid.","You and the piano were perfectly together."],sound:["What a lovely vibrato!","Your long notes really sang.","A warm, singing tone."],dynamics:["Your dynamics brought the music to life.","Lovely shaping, loud and soft.","You followed every crescendo and diminuendo."],trills:["Sparkling trills, nice and quick!","Your trills were a joy: quick and clean.","Like a songbird: lovely trills."],missed:["Not a single note left out.","Every note was there.","You never lost your place."],wrong:["Clean as a whistle: no wrong notes.","Every note was the right one.","Wonderfully accurate fingers."],glide:["Beautiful, expressive slides: very Romantic!","Your glissandi gave it real Romantic warmth.","Lovely portamento, just right for this music."]},tips:{intonation:["Tip: tune the long notes against the piano.","Tip: play the tricky bars slowly and listen to each note.","Tip: check your intonation against the open strings."],timing:["Tip: switch on Click and come in with the beat.","Tip: count the rests out loud before you come in.","Tip: slow the tempo down and build it up again."],sound:["Tip: try a little vibrato on the long notes.","Tip: keep the bow moving evenly through the long notes.","Tip: let the long notes ring and sing."],dynamics:["Tip: watch the p and f marks and make the contrast bigger.","Tip: shape the hairpins: grow and fade with the bow.","Tip: play the soft passages really soft, then let the loud ones out."],trills:["Tip: practise the trills slowly and evenly, then speed them up.","Tip: keep the trilling finger light and close to the string.","Tip: start the trill calmly, then let it get faster and faster."],missed:["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: keep the bow on the string so every note sounds.","Tip: mark the bars where notes went missing and loop them."],wrong:["Tip: mark the tricky bars and repeat them slowly.","Tip: check the fingering where the wrong notes were.","Tip: play the hard passage slower until every note is right."],glide:["Tip: shift cleanly between notes: no sliding in this style.","Tip: in Classical and Baroque music, keep the shifts clean and quick.","Tip: lift the slides out: change position without a glissando."]}},Yf=[0,1,2,3,4].flatMap(t=>[0,1,2,3].map(e=>[1.5+e*2.6+t%2*1.3,1.3+t*2.05])).filter(([t])=>t<10.5),Jf=B`<rect width="24" height="24" fill="#b22234" />
  ${[1,3,5,7,9,11].map(t=>B`<rect y=${t*24/13} width="24" height=${24/13} fill="#fff" />`)}
  <rect width="11" height=${7*24/13} fill="#3c3b6e" />
  ${Yf.map(([t,e])=>B`<circle cx=${t} cy=${e} r="0.55" fill="#fff" />`)}`,Xf=B`<rect width="24" height="8" fill="#000" /><rect y="8" width="24" height="8" fill="#dd0000" /><rect y="16" width="24" height="8" fill="#ffce00" />`,Pe={en:{name:"English",locale:"en-US",flag:Jf,messages:qf},de:{name:"Deutsch",locale:"de-DE",flag:Xf,messages:Gf}},sc="violinhero-language";function Zf(){try{const t=localStorage.getItem(sc);if(t&&t in Pe)return t}catch{}for(const t of navigator.languages??[navigator.language]){const e=t.slice(0,2).toLowerCase();if(e in Pe)return e}return"en"}let an=Zf();const er=new Set;document.documentElement.lang=an;function pe(){return an}function G(){return Pe[an].messages}function oc(t,e=!0){if(t!==an){if(an=t,document.documentElement.lang=t,e)try{localStorage.setItem(sc,t)}catch{}for(const n of er)n()}}function jr(t){return er.add(t),()=>er.delete(t)}class Wr{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.stop=jr(()=>this.host.requestUpdate())}hostDisconnected(){var e;(e=this.stop)==null||e.call(this)}}const Qf={apiKey:"AIzaSyAYev6vpeTmN9xSDoEyUAMwLYD0abE6Sr4",authDomain:"www.crescendu.com",projectId:"crescendu",storageBucket:"crescendu.firebasestorage.app",messagingSenderId:"546406424194",appId:"1:546406424194:web:360ebdab42c0baa5c01e9b"},zt=8,ac=Ro(Qf),ke=Ad(ac),kt=Tf(ac);ke.languageCode=pe();jr(()=>ke.languageCode=pe());function ep(t){return mu(ke,t)}async function tp(){const t=ke.currentUser;t&&(await t.reload(),await t.getIdToken(!0))}async function np(t,e){await lu(ke,t.trim(),e)}async function ip(t,e){const{user:n}=await cu(ke,t.trim(),e);await hu(n)}async function rp(){await Ou(ke,new Ie)}function sp(t){return au(ke,t.trim())}function op(){return gu(ke)}function Tn(t){const e=t.code??"",n=G().auth;return["auth/invalid-credential","auth/wrong-password","auth/user-not-found"].includes(e)?n.wrongPassword:e==="auth/email-already-in-use"?n.emailInUse:e==="auth/weak-password"?n.weakPassword(zt):e==="auth/invalid-email"?n.invalidEmail:e==="auth/too-many-requests"?n.tooMany:e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?n.popupClosed:e==="auth/popup-blocked"?n.popupBlocked:e==="auth/unauthorized-domain"?n.unauthorizedDomain:e==="auth/network-request-failed"?n.network:n.failed(e||String(t))}async function ap(t){try{return(await nc(qt(kt,"creators",t))).exists()}catch{return!1}}async function cp(t){try{const e=await nc(qt(kt,"players",t));if(!e.exists())return;const n=e.data().nickname;return typeof n=="string"&&n?n:null}catch{return}}async function lp(t){const e=ke.currentUser;if(!e)return;const n=t.trim().slice(0,60)||null;if(n&&!hp(n))throw new Bt("invalid");const i=e.uid;await Bf(kt,async r=>{const s=qt(kt,"players",i),o=await r.get(s),a=o.exists()&&typeof o.data().nickname=="string"?o.data().nickname:null,c=a&&(!n||En(a)!==En(n))?qt(kt,"nicknames",En(a)):void 0,u=c?await r.get(c):void 0;if(n){const y=qt(kt,"nicknames",En(n)),b=await r.get(y);if(b.exists()&&b.data().uid!==i)throw new Bt("taken");r.set(y,{uid:i,nickname:n})}c&&(u!=null&&u.exists())&&u.data().uid===i&&r.delete(c),r.set(s,{nickname:n,updated:Of()})}).catch(r=>{throw r instanceof Bt?r:r.code==="permission-denied"?new Bt("taken"):r}),await du(e,{displayName:n??""}),await e.getIdToken(!0)}class Bt extends Error{constructor(e){super(e),this.reason=e}}function En(t){return t.toLowerCase()}function hp(t){return!t.includes("/")&&!/^\.{1,2}$/.test(t)&&!/^__.*__$/.test(t)}function up(t,e="./"){const n=new URL(e,location.href);return n.search="",n.hash="",n.searchParams.set("ref",t),n.href}async function dp(t,e){if(matchMedia("(hover: none) and (pointer: coarse)").matches&&navigator.share)try{return await navigator.share({title:"Violin Hero",text:e,url:t}),"shared"}catch(i){if(i.name==="AbortError")return"failed"}try{return await navigator.clipboard.writeText(t),"copied"}catch{return"failed"}}const fp="https://www.crescendu.com",pp={imprint:{en:"imprint",de:"impressum"},privacy:{en:"privacy",de:"datenschutz"},terms:{en:"terms",de:"nutzungsbedingungen"}};function so(t,e=""){const n=pe()==="de"?"de":"en";return`${fp}/${n}/${pp[t][n]}${e?`#${e}`:""}`}const Kr=["blue","violet","teal","rose","graphite"],tr={light:"#eef0f2",dark:"#121417"},me={blue:{light:{accent:"#2563eb",hover:"#1d4fd7"},dark:{accent:"#336fea",hover:"#4d85f2"}},violet:{light:{accent:"#6d44dc",hover:"#5b34c4"},dark:{accent:"#7a58ee",hover:"#8f72f4"}},teal:{light:{accent:"#0d7488",hover:"#0a6071"},dark:{accent:"#0c8296",hover:"#1196ad"}},rose:{light:{accent:"#c8255f",hover:"#a81d4f"},dark:{accent:"#d6316c",hover:"#e34f84"}},graphite:{light:{accent:"#434b5a",hover:"#323945"},dark:{accent:"#66728a",hover:"#7b879e"}}},oi=.05;function mp(t,e){const n=(s,o)=>parseInt(s.slice(1+2*o,3+2*o),16),i=me[t][e].accent,r=tr[e];return`#${[0,1,2].map(s=>Math.round(n(i,s)*oi+n(r,s)*(1-oi)).toString(16).padStart(2,"0")).join("")}`}const oo=t=>`--m-accent: ${t.accent}; --m-accent-hover: ${t.hover};`,gp=Kr.map(t=>`:host([scheme='${t}']) { ${oo(me[t].light)} }
:host([scheme='${t}'][theme='dark']) { ${oo(me[t].dark)} }`).join(`
`);function ao(t){return Kr.includes(t)}const cc=B`
    <path d="M50,39C43,39 38,42.5 38,48C38,51.5 39.5,53.5 37.5,55.8C42.6,55.6 44.4,57.8 44.4,60.8C44.4,63.8 42.6,66 37.5,65.8C36,68.4 34.5,71 34.5,74.2C34.5,80.2 41.5,83.2 50,83.2C58.5,83.2 65.5,80.2 65.5,74.2C65.5,71 64,68.4 62.5,65.8C57.4,66 55.6,63.8 55.6,60.8C55.6,57.8 57.4,55.6 62.5,55.8C60.5,53.5 62,51.5 62,48C62,42.5 57,39 50,39Z" />
    <path d="M50,39V23" />
    <circle cx="50" cy="18" r="4" />`,yp=B`
  <g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" />
    ${cc}
  </g>`,lc={marketplace:B`<path d="M5.5 8h13l-1 12h-11z" /><path d="M9 10V6.5a3 3 0 0 1 6 0V10" />`,halloffame:B`<path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />`,creator:B`<path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v8" />`,profile:B`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,help:B`<path d="M8.6 8.6a3.5 3.5 0 1 1 5.1 3.1c-1 .5-1.7 1.3-1.7 2.4v.6" /><path d="M12 18.4v.1" />`},co={app:"Violin Hero",marketplace:"Violin Hero Marketplace",halloffame:"Violin Hero Hall of Fame",creator:"Violin Hero Creator",profile:"Violin Hero Profile",help:"Violin Hero Help"};function Ln(t,e,n=e==="app"?"./":"../"){return t==="app"?e==="app"||e==="help"?n:`${n}?from=${e}`:`${n}${t}`}function bp(t){return t==="app"?yp:B`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" stroke-width="5.5" />
    <g transform="translate(20 20) scale(2.5)" stroke-width="2.1">${lc[t]}</g>
  </g>`}function wp(t,e){return["app","halloffame","marketplace"].filter(i=>i!==t).map(i=>$`<a class="m-help m-place ${i}" href=${Ln(i,t,e)} title=${co[i]} aria-label=${co[i]}>
        ${i==="app"?B`<svg viewBox="24 10 52 78" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">${cc}</g></svg>`:B`<svg viewBox="0 0 24 24" aria-hidden="true">${lc[i]}</svg>`}
      </a>`)}const vp=parseFloat("0.193")<1;function kp(t){return $`<span class="m-version-line">
    <span class="m-version" title=${t}>v${"0.193"}</span>
    ${vp?$`<span class="m-beta">Beta</span>`:""}
  </span>`}const _p=cn`
    /*
     * The whole window, light surfaces on a cool grey, the system's type at reading sizes, one
     * blue for what is active, red for recording
     */
    :host {
      /* Greys with a touch of the theme colour (themes.ts's TINT), so they go with each scheme */
      --m-bg: color-mix(in srgb, var(--m-accent) ${de(oi*100)}%, ${de(tr.light)});
      --m-surface: #ffffff;
      --m-text: color-mix(in srgb, var(--m-accent) 8%, #1b1f24);
      --m-muted: color-mix(in srgb, var(--m-accent) 8%, #5a616a);
      --m-line: color-mix(in srgb, var(--m-accent) 7%, #dde0e4);
      /* The header's round keys (theme, help, language, account): a firmer edge and a soft drop */
      --m-key-edge: color-mix(in srgb, var(--m-accent) 10%, #bdc2c8);
      --m-key-shadow: 0 1px 2px rgba(16, 24, 40, 0.08), 0 2px 6px -1px rgba(16, 24, 40, 0.1);
      /* The controls (keys, switches, lists): their edge, a hair of a drop, their fill under the pointer */
      --m-edge: color-mix(in srgb, var(--m-accent) 9%, #d0d5db);
      --m-control-shadow: 0 1px 1.5px rgba(16, 24, 40, 0.06);
      --m-hover: color-mix(in srgb, var(--m-accent) 6%, var(--m-surface));
      /*
       * A lit control (Play, a switch on): the theme colour, a shade deeper at its foot (the same
       * shading over the colour, so only the colour changes under the pointer, --m-lit-hover, and
       * fades; a gradient swapped for a plain colour flashed), a glow of it below
       */
      --m-lit: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.12)) var(--m-accent);
      --m-lit-hover: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.12)) var(--m-accent-hover);
      --m-lit-shadow: 0 1px 2px rgba(16, 24, 40, 0.12), 0 4px 10px -4px color-mix(in srgb, var(--m-accent) 65%, transparent);
      /* The cards: a hairline, a close drop and a wide soft one */
      --m-card-shadow: 0 0 0 1px rgba(16, 24, 40, 0.04), 0 1px 2px rgba(16, 24, 40, 0.05), 0 8px 24px -12px rgba(16, 24, 40, 0.14);
      /* The scheme's two colours (Ocean's here; themes.ts sets each scheme's) */
      --m-accent: ${de(me.blue.light.accent)};
      --m-accent-hover: ${de(me.blue.light.hover)};
      /* Soft fills from the theme colour, so they follow the scheme */
      --m-accent-soft: color-mix(in srgb, var(--m-accent) 10%, var(--m-surface));
      --m-accent-edge: color-mix(in srgb, var(--m-accent) 35%, var(--m-surface));
      --m-red: #e03131;
      --m-red-hover: #c92a2a;
      --m-green: #2f9e44;
      --m-green-soft: #ebf8ee;
      --m-green-edge: #b2e2bd;
      --m-amber: #b8650a;
      --m-amber-soft: #fff4e6;
      --m-amber-edge: #ffd8a8;
      --m-shadow: rgba(16, 24, 40, 0.09);
      /* The phone's bars along the foot: the surface with a touch of the accent (follows the scheme and mode) */
      --m-card: color-mix(in srgb, var(--m-accent) 5%, var(--m-surface));
      /* Every list, button, switch and group of them: one height, one corner radius */
      --m-control: 44px;
      --m-radius: 10px;
      width: 100%;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      color-scheme: light;
    }
    /* Dark: neutral dark greys, the scheme's colours a little lighter, soft fills mixed darker */
    :host([theme='dark']) {
      --m-bg: color-mix(in srgb, var(--m-accent) ${de(oi*100)}%, ${de(tr.dark)});
      --m-surface: color-mix(in srgb, var(--m-accent) 5%, #1d2024);
      --m-text: #e9ebee;
      --m-muted: color-mix(in srgb, var(--m-accent) 8%, #a1a7af);
      --m-line: color-mix(in srgb, var(--m-accent) 9%, #32363c);
      --m-key-edge: color-mix(in srgb, var(--m-accent) 12%, #4a4f57);
      --m-key-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
      --m-edge: color-mix(in srgb, var(--m-accent) 12%, #3a3f46);
      --m-control-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      --m-hover: color-mix(in srgb, var(--m-accent) 12%, var(--m-surface));
      --m-lit-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 12px -4px color-mix(in srgb, var(--m-accent) 60%, transparent);
      --m-card-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04), 0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 24px -12px rgba(0, 0, 0, 0.5);
      --m-accent: ${de(me.blue.dark.accent)};
      --m-accent-hover: ${de(me.blue.dark.hover)};
      --m-accent-soft: color-mix(in srgb, var(--m-accent) 18%, var(--m-surface));
      --m-accent-edge: color-mix(in srgb, var(--m-accent) 45%, var(--m-surface));
      --m-red: #ff5c5c;
      --m-red-hover: #ff7676;
      --m-green: #51cf66;
      --m-green-soft: #18301f;
      --m-green-edge: #2b5a35;
      --m-amber: #ffb547;
      --m-amber-soft: #33270f;
      --m-amber-edge: #6b4f1c;
      --m-shadow: rgba(0, 0, 0, 0.35);
      --m-card: color-mix(in srgb, var(--m-accent) 7%, var(--m-surface));
      color-scheme: dark;
    }
    /* The colour schemes (themes.ts) */
    ${de(gp)}
`,Tp=cn`
    .m-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.65rem 1.25rem;
      background: var(--m-surface);
      border-bottom: 1px solid var(--m-line);
    }
    .m-brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      min-width: 0;
    }
    .m-logo {
      flex: none;
      width: 30px;
      height: 30px;
      color: var(--m-accent);
      cursor: pointer;
    }
    .m-name {
      max-width: 100%;
      overflow: hidden;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    /* The keys keep their room; the name gives way (cut with "…") where there is too little */
    .m-header-end {
      display: flex;
      flex: none;
      align-items: center;
      gap: 0.75rem;
    }
    /* A phone held upright: the round keys closer together, so they all fit beside the name */
    @media (max-width: 560px) and (orientation: portrait) {
      .m-header {
        gap: 0.5rem;
        padding-inline: 0.75rem;
      }
      .m-header-end {
        gap: 0.35rem;
      }
      .m-header-end .m-help {
        width: 32px;
        height: 32px;
      }
    }
    /* The name with the build's version ("0.193") under it, left aligned; cut where the keys need the room */
    .m-titles {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      min-width: 0;
      overflow: hidden;
    }
    .m-name {
      line-height: 1.1;
    }
    .m-version {
      font: 500 0.68rem/1 ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
      color: var(--m-muted);
      white-space: nowrap;
    }
    /* The version and, before 1, the Beta badge beside it (versionLine()) */
    .m-version-line {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    /* Its line trimmed to the capitals and the baseline (text-box), so the even padding centres
       the word; a fixed height and flex centring where text-box isn't known */
    .m-beta {
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      height: 13px;
      padding: 0 4px;
      font: 500 0.6rem/1 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      text-box: trim-both cap alphabetic;
      letter-spacing: 0.03em;
      color: #fff;
      /* The version's grey, lighter */
      background: color-mix(in srgb, var(--m-muted) 60%, transparent);
      border-radius: 3px;
      white-space: nowrap;
    }
    /* Round header keys: help (the language and look key is <language-menu>, drawn alike) */
    .m-help {
      display: grid;
      flex: none;
      place-items: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 1px solid var(--m-key-edge);
      border-radius: 50%;
      box-shadow: var(--m-key-shadow);
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      color: var(--m-muted);
      background: var(--m-surface);
      cursor: pointer;
    }
    .m-help:hover {
      color: var(--m-text);
      background: var(--m-bg);
    }
    /*
     * Each place's mark in its colour (the app's in the theme colour); the keys to the other
     * places (navKeys()) drawn as the help key: its edge, drop and grey, darker on hover
     */
    .m-header {
      --place-marketplace: #e8590c;
      --place-halloffame: #e0a800;
      --place-creator: #7048e8;
      --place-profile: #0c8599;
    }
    /* Help keys (.m-help: their shape, size and hover), their icons in the theme colour */
    .m-help.m-place,
    .m-help.m-place:hover {
      color: var(--m-accent);
    }
    .m-logo.marketplace {
      --place: var(--place-marketplace);
    }
    .m-logo.halloffame {
      --place: var(--place-halloffame);
    }
    .m-logo.creator {
      --place: var(--place-creator);
    }
    .m-logo.profile {
      --place: var(--place-profile);
    }
    .m-place svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.9;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .m-place.app svg {
      width: 24px;
      height: 24px;
    }
    .m-logo.marketplace,
    .m-logo.halloffame,
    .m-logo.creator,
    .m-logo.profile {
      color: var(--place);
    }
    /* The marketplace key: a round key like help's, a bag drawn in it */
    .m-market svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.9;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
`,Ep="violinhero-profile";var Sp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,L=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ip(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Sp(e,n,r),r};const hc="violinhero-nickname-asked",Ap=3e3,Pp="https://www.crescendu.com/feedback",$p=B`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,Np=B`<path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
  <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24z" />
  <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
  <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />`;let C=class extends ct{constructor(){super(),this.hint=!1,this.reason="save",this.waiting=0,this.place="app",this.creator=!1,this.menuOpen=!1,this.creating=!1,this.email="",this.password="",this.error="",this.info="",this.busy=!1,this.askName="",this.askNote="",this.askBusy=!1,this.justSignedIn=!1,this.profileOpen=!1,this.brokenPicture=!1,this.fromProfile=t=>{var e,n;t.origin!==location.origin||((e=t.data)==null?void 0:e.type)!==Ep||(t.data.action==="close"&&((n=this.profileDialog)==null||n.close()),t.data.action==="saved"&&(this.claimed=typeof t.data.nickname=="string"?t.data.nickname:null,tp().then(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("user-refresh",{bubbles:!0,composed:!0}))})))},this.outside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.invitedTimer=0,new Wr(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside),window.addEventListener("message",this.fromProfile)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside),window.removeEventListener("message",this.fromProfile)}openProfile(t){this.place!=="profile"&&(t.preventDefault(),this.menuOpen=!1,this.profileOpen=!0,this.updateComplete.then(()=>{var e;return(e=this.profileDialog)==null?void 0:e.showModal()}))}willUpdate(t){var e,n,i,r,s,o;if(t.has("user")){if(this.brokenPicture=!1,((e=t.get("user"))==null?void 0:e.uid)!==((n=this.user)==null?void 0:n.uid)){this.claimed=void 0,(i=this.profileDialog)==null||i.close();const a=(r=this.user)==null?void 0:r.uid;a&&cp(a).then(u=>{var y;((y=this.user)==null?void 0:y.uid)===a&&(this.claimed=u??null,this.askNickname())}),this.creator=!1;const c=(s=this.user)==null?void 0:s.uid;c&&this.place!=="creator"&&ap(c).then(u=>{var y;return((y=this.user)==null?void 0:y.uid)===c&&(this.creator=u)})}this.user?(o=this.dialog)==null||o.close():this.menuOpen=!1}}openSignIn(){var t;this.user||(this.error=this.info="",(t=this.dialog)==null||t.showModal())}press(){var t;if(this.user!==void 0){if(this.user){this.menuOpen=!this.menuOpen;return}this.error=this.info="",(t=this.dialog)==null||t.showModal()}}render(){const t=this.user,e=t!=null&&t.photoURL&&!this.brokenPicture?t.photoURL:"",n=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"",i=G(),r=t?i.signedInAs(n):i.signIn;return $`
      <button
        class="key ${t?"signed-in":""}"
        aria-label=${r}
        title=${r}
        aria-haspopup=${t?"menu":"dialog"}
        aria-expanded=${t?this.menuOpen:!1}
        ?disabled=${t===void 0}
        @click=${this.press}
      >
        ${e?$`<img src=${e} alt="" referrerpolicy="no-referrer" @error=${()=>this.brokenPicture=!0} />`:t?$`<span class="initial">${Dp(n)}</span>`:$`<svg viewBox="0 0 24 24" aria-hidden="true">${$p}</svg>`}
      </button>
      ${t&&this.menuOpen?this.menu(t):P} ${this.hint&&t===null?this.hintBubble():P} ${this.signInDialog()}
      ${this.nicknameDialog()} ${this.profileOverlay()}
    `}profileOverlay(){return $`<dialog
      class="profile"
      aria-label=${G().profile}
      @close=${()=>this.profileOpen=!1}
      @click=${t=>{var e;return t.target===t.currentTarget&&((e=this.profileDialog)==null?void 0:e.close())}}
    >
      ${this.profileOpen?$`<iframe src=${`${Ln("profile",this.place,this.root)}?embedded`} title=${G().profile}></iframe>`:P}
    </dialog>`}hintBubble(){const t=G();return $`
      <div class="hint" role="status">
        <button class="hint-text" @click=${this.fromHint}>
          <strong>${this.reason==="score"?t.scoreHintTitle:this.reason==="share"?t.shareHintTitle:t.hintTitle}</strong>
          <span>${this.reason==="score"?t.scoreHintText:this.reason==="share"?t.shareHintText:t.hintText(this.waiting)}</span>
        </button>
        <button class="hint-close" aria-label=${t.hintDismiss} title=${t.hintDismiss} @click=${()=>this.fire("hint-dismiss")}>×</button>
      </div>
    `}fromHint(){this.fire("hint-close"),this.press()}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}menu(t){const e=G(),n=!t.emailVerified&&t.providerData.some(i=>i.providerId==="password");return $`
      <div class="menu" role="menu" @keydown=${i=>i.key==="Escape"&&(this.menuOpen=!1)}>
        <div class="who">
          ${t.displayName?$`<strong>${t.displayName}</strong>`:P}
          <span class="email">${t.email}</span>
        </div>
        ${n?$`<p class="note warn">${e.confirmEmail}</p>`:P}
        <a class="item invite-item" role="menuitem" href=${Ln("profile",this.place,this.root)} @click=${this.openProfile}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></svg>
          ${e.profile}
        </a>
        ${this.creator&&this.place!=="creator"?$`<a class="item creator-link" role="menuitem" href=${Ln("creator",this.place,this.root)}
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></svg>${e.creatorDashboard}</a
            >`:P}
        <button class="item invite-item ${this.invited??""}" role="menuitem" @click=${()=>void this.invite(t)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5" /><circle cx="10" cy="8" r="3.5" /><path d="M18 8v6M15 11h6" /></svg>
          ${this.invited==="copied"?e.inviteCopied:this.invited==="failed"?e.inviteFailed:e.invite}
        </button>
        <a class="item invite-item" role="menuitem" href=${Pp} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4.5" /></svg>
          ${e.feedback}
        </a>
        <button class="item" role="menuitem" @click=${()=>void op()}>${e.signOut}</button>
        ${this.place==="app"||this.place==="creator"?$`<button
              class="item delete-item"
              role="menuitem"
              @click=${()=>{this.menuOpen=!1,this.dispatchEvent(new CustomEvent("delete-account",{bubbles:!0,composed:!0}))}}
            >
              ${this.place==="creator"?e.deleteAccount.creatorMenu:e.deleteAccount.menu}
            </button>`:P}
      </div>
    `}async invite(t){const e=up(t.uid,this.root??(this.place==="app"?"./":"../")),n=await dp(e,G().inviteText);this.invited=n==="shared"?void 0:n,clearTimeout(this.invitedTimer),this.invitedTimer=window.setTimeout(()=>this.invited=void 0,Ap)}signInDialog(){const t=G();return $`
      <dialog @close=${()=>this.password=""} @click=${this.backdrop}>
        <form @submit=${this.submit} novalidate>
          <div class="head">
            <h2>${this.creating?t.createAccount:t.signIn}</h2>
            <button class="close" type="button" aria-label=${t.close} @click=${()=>{var e;return(e=this.dialog)==null?void 0:e.close()}}>×</button>
          </div>
          <p class="lead">${t.accountLead(this.waiting)}</p>
          <label class="field"
            >${t.email}
            <input type="email" autocomplete="email" required .value=${this.email} @input=${e=>this.email=e.target.value} />
          </label>
          <label class="field"
            >${t.password}
            <input
              type="password"
              autocomplete=${this.creating?"new-password":"current-password"}
              required
              minlength=${zt}
              placeholder=${this.creating?t.passwordHint(zt):""}
              .value=${this.password}
              @input=${e=>this.password=e.target.value}
            />
          </label>
          ${this.error?$`<p class="error" role="alert">${this.error}</p>`:P}
          ${this.info?$`<p class="info">${this.info}</p>`:P}
          <button class="primary" type="submit" ?disabled=${this.busy}>${this.creating?t.createAccountButton:t.signIn}</button>
          <div class="links">
            <button class="link" type="button" @click=${()=>(this.creating=!this.creating,this.error=this.info="")}>
              ${this.creating?t.haveAccount:t.createAccount}
            </button>
            ${this.creating?P:$`<button class="link" type="button" @click=${this.reset}>${t.forgotPassword}</button>`}
          </div>
          <div class="divider">${t.or}</div>
          <button class="google" type="button" ?disabled=${this.busy} @click=${this.google}>
            <svg viewBox="0 0 24 24" aria-hidden="true">${Np}</svg>
            ${t.google}
          </button>
          <p class="agree">
            ${t.agree[0]}<a href=${so("terms")} target="_blank" rel="noopener">${t.termsName}</a>${t.agree[1]}<a
              href=${so("privacy")}
              target="_blank"
              rel="noopener"
              >${t.privacyName}</a
            >${t.agree[2]}
          </p>
        </form>
      </dialog>
    `}backdrop(t){var e;t.target===this.dialog&&((e=this.dialog)==null||e.close())}askNickname(){var n;const t=this.user;if(!t||this.claimed!==null||(n=this.askDialog)!=null&&n.open)return;const e=Cp();!this.justSignedIn&&e.includes(t.uid)||(this.justSignedIn=!1,Rp([...e.filter(i=>i!==t.uid),t.uid]),this.askName=xp(t),this.askNote="",this.menuOpen=!1,this.updateComplete.then(()=>{var r,s,o;if(((r=this.user)==null?void 0:r.uid)!==t.uid||this.claimed!==null)return;(s=this.askDialog)==null||s.showModal();const i=(o=this.askDialog)==null?void 0:o.querySelector("input");i==null||i.focus(),i==null||i.select()}))}async saveAsked(t){var n;t.preventDefault();const e=this.askName.trim();if(e){this.askBusy=!0,this.askNote="";try{await lp(e),this.claimed=e.slice(0,60),(n=this.askDialog)==null||n.close()}catch(i){this.askNote=i instanceof Bt?i.reason==="taken"?G().nicknameTaken(e):G().nicknameInvalid:Tn(i)}finally{this.askBusy=!1}}}nicknameDialog(){const t=G(),e=t.nicknameDialog;return $`
      <dialog class="ask" aria-labelledby="ask-title" @cancel=${()=>this.askNote=""}>
        <form @submit=${this.saveAsked}>
          <div class="head">
            <h2 id="ask-title">${e.title}</h2>
            <button class="close" type="button" aria-label=${t.close} @click=${()=>{var n;return(n=this.askDialog)==null?void 0:n.close()}}>×</button>
          </div>
          <p class="lead">${e.lead}</p>
          <label class="field"
            >${e.label}
            <input
              maxlength="60"
              autocomplete="nickname"
              placeholder=${t.pickNickname}
              required
              .value=${this.askName}
              @input=${n=>(this.askName=n.target.value,this.askNote="")}
            />
          </label>
          ${this.askNote?$`<p class="error" role="alert">${this.askNote}</p>`:P}
          <button class="primary" type="submit" ?disabled=${this.askBusy||!this.askName.trim()}>${e.save}</button>
          <button class="link later" type="button" @click=${()=>{var n;return(n=this.askDialog)==null?void 0:n.close()}}>${e.later}</button>
        </form>
      </dialog>
    `}async submit(t){if(t.preventDefault(),this.error=this.info="",this.creating&&this.password.length<zt){this.error=G().auth.weakPassword(zt);return}this.busy=!0;try{this.justSignedIn=!0,await(this.creating?ip(this.email,this.password):np(this.email,this.password)),this.askNickname()}catch(e){this.justSignedIn=!1,this.error=Tn(e)}finally{this.busy=!1}}async google(){this.error=this.info="";try{this.justSignedIn=!0,await rp(),this.askNickname()}catch(t){this.justSignedIn=!1,this.error=Tn(t)}}async reset(){if(this.error=this.info="",!this.email.trim()){this.error=G().enterEmailFirst;return}try{await sp(this.email),this.info=G().resetSent(this.email.trim())}catch(t){this.error=Tn(t)}}};C.styles=cn`
    :host {
      position: relative;
      display: block;
      flex: none;
      --size: 36px;
    }
    .key {
      display: grid;
      place-items: center;
      width: var(--size);
      height: var(--size);
      padding: 0;
      overflow: hidden;
      color: var(--m-muted);
      background: var(--m-surface);
      border: 1px solid var(--m-key-edge, var(--m-line));
      border-radius: 50%;
      box-shadow: var(--m-key-shadow, none);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    .key:hover:not(:disabled) {
      color: var(--m-text);
      background: var(--m-bg);
    }
    /* The picture or initial fills the key: it dims a little on hover, as the other keys grey */
    .key img,
    .initial {
      transition: filter 0.15s;
    }
    .key:hover:not(:disabled) img,
    .key:hover:not(:disabled) .initial {
      filter: brightness(0.9);
    }
    .key:disabled {
      cursor: default;
      opacity: 0.5;
    }
    .key:focus-visible,
    button:focus-visible,
    input:focus-visible {
      outline: 2px solid var(--m-accent);
      outline-offset: 2px;
    }
    .key svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    /* The picture (or initial) fills the round key, as the language key's flag does */
    .key img,
    .initial {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    .key img {
      object-fit: cover;
    }
    .initial {
      display: grid;
      place-items: center;
      font: 700 calc(var(--size) * 0.36) / 1 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #fff;
      background: var(--m-accent);
    }

    /* Signed in: who it is and Sign out, under the key */
    .menu {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 30;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      width: max-content;
      max-width: min(300px, calc(100vw - 24px));
      padding: 0.9rem;
      font: 0.9rem/1.4 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 12px;
      box-shadow: 0 8px 28px var(--m-shadow);
    }
    .who {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .email {
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--m-muted);
    }
    .note {
      margin: 0;
      font-size: 0.82rem;
      color: var(--m-muted);
    }
    .note.warn {
      color: var(--m-amber);
    }
    .note.refused {
      color: var(--m-red);
    }
    .item {
      padding: 0.55rem 0.8rem;
      font: 600 0.9rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 10px;
      cursor: pointer;
    }
    .item:hover {
      background: var(--m-bg);
    }
    /* Invite a violinist: an item, its person-plus in the theme colour; green once copied */
    .invite-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-align: left;
      text-decoration: none;
    }
    .invite-item svg {
      flex: none;
      width: 18px;
      height: 18px;
      fill: none;
      stroke: var(--m-accent);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    /* Delete account (the app only): small, in red, last */
    .delete-item {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--m-red, #c92a2a);
      background: none;
      border-color: transparent;
    }
    .invite-item.copied {
      color: var(--m-green, #16a34a);
    }
    /* A creator's link to their dashboard: an item, its pencil in the theme colour */
    .creator-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }
    .creator-link svg {
      flex: none;
      width: 18px;
      height: 18px;
      fill: none;
      stroke: var(--m-accent);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* The hint: a bubble under the key, its tip pointing up at it, in the accent blue */
    .hint {
      position: absolute;
      top: calc(100% + 12px);
      right: calc(var(--size) / 2 - 22px);
      z-index: 30;
      display: flex;
      align-items: flex-start;
      gap: 0.25rem;
      width: max-content;
      max-width: min(270px, calc(100vw - 24px));
      padding: 0.6rem 0.4rem 0.65rem 0.85rem;
      color: #fff;
      background: var(--m-accent);
      border-radius: 12px;
      box-shadow: 0 8px 24px var(--m-shadow);
      animation: hint-in 0.35s cubic-bezier(0.2, 1.3, 0.4, 1);
    }
    .hint::before {
      content: '';
      position: absolute;
      top: -6px;
      right: 16px;
      width: 12px;
      height: 12px;
      background: var(--m-accent);
      border-radius: 2px;
      transform: rotate(45deg);
    }
    @keyframes hint-in {
      from {
        opacity: 0;
        translate: 0 -6px;
      }
    }
    .hint-text {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      padding: 0;
      font: 0.82rem/1.35 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      text-align: left;
      color: inherit;
      background: none;
      border: 0;
      cursor: pointer;
    }
    .hint-text strong {
      font-size: 0.9rem;
    }
    .hint-text span {
      opacity: 0.85;
    }
    .hint-close {
      flex: none;
      width: 24px;
      height: 24px;
      padding: 0;
      font-size: 1.1rem;
      line-height: 1;
      color: inherit;
      background: none;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }
    .hint-close:hover {
      background: rgba(255, 255, 255, 0.18);
    }
    .hint button:focus-visible {
      outline-color: #fff;
    }
    @media (prefers-reduced-motion: reduce) {
      .hint {
        animation: none;
      }
    }

    /* Signed out: the sign-in dialog, a card over the dimmed page */
    dialog {
      width: min(380px, calc(100vw - 32px));
      padding: 0;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 16px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    }
    dialog::backdrop {
      background: rgba(18, 20, 23, 0.45);
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      padding: 1.2rem 1.3rem 1.3rem;
      font: 0.95rem/1.4 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h2 {
      margin: 0;
      font-size: 1.2rem;
    }
    .close {
      width: 32px;
      height: 32px;
      font-size: 1.4rem;
      line-height: 1;
      color: var(--m-muted);
      background: none;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
    }
    .close:hover {
      background: var(--m-bg);
    }
    .lead {
      margin: 0;
      font-size: 0.85rem;
      color: var(--m-muted);
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--m-muted);
    }
    input {
      height: 40px;
      padding: 0 0.75rem;
      font: 0.95rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 10px;
    }
    .error,
    .info {
      margin: 0;
      font-size: 0.85rem;
    }
    .error {
      color: var(--m-red);
    }
    .info {
      color: var(--m-green);
    }
    .primary,
    .google {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      height: var(--m-control, 44px);
      font: 600 0.95rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      border-radius: var(--m-radius, 10px);
      cursor: pointer;
    }
    .primary {
      color: #fff;
      background: var(--m-accent);
      border: 1px solid var(--m-accent);
    }
    .primary:hover:not(:disabled) {
      background: var(--m-accent-hover);
    }
    .google {
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
    }
    .google:hover:not(:disabled) {
      background: var(--m-bg);
    }
    .google svg {
      width: 18px;
      height: 18px;
    }
    button:disabled {
      opacity: 0.55;
      cursor: default;
    }
    .links {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.5rem;
    }
    /* The nickname dialog's Later, under its key */
    .link.later {
      align-self: center;
      color: var(--m-muted);
    }
    .link {
      padding: 0;
      font: 600 0.85rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-accent);
      background: none;
      border: 0;
      cursor: pointer;
    }
    /* Under the sign-in: the terms and the privacy policy */
    .agree {
      margin: 0.25rem 0 0;
      font-size: 0.78rem;
      line-height: 1.45;
      text-align: center;
      color: var(--m-muted);
    }
    .agree a {
      color: var(--m-accent);
    }
    .divider {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.8rem;
      color: var(--m-muted);
    }
    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-top: 1px solid var(--m-line);
    }

    /* The profile page over everything: a large card, edge to edge on phones, rising in */
    dialog.profile {
      box-sizing: border-box;
      width: min(1040px, calc(100vw - 32px));
      max-width: none;
      height: calc(100dvh - 48px);
      max-height: none;
      overflow: hidden;
      background: var(--m-bg);
    }
    dialog.profile[open] {
      animation: profile-in 0.3s cubic-bezier(0.2, 1.1, 0.4, 1);
    }
    @keyframes profile-in {
      from {
        opacity: 0;
        translate: 0 24px;
        scale: 0.98;
      }
    }
    dialog.profile iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
    }
    @media (max-width: 560px), (max-height: 560px) {
      dialog.profile {
        width: 100vw;
        height: 100dvh;
        border: 0;
        border-radius: 0;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      dialog.profile[open] {
        animation: none;
      }
    }
  `;L([Y({attribute:!1})],C.prototype,"user",2);L([Y({type:Boolean})],C.prototype,"hint",2);L([Y()],C.prototype,"reason",2);L([Y({type:Number})],C.prototype,"waiting",2);L([Y()],C.prototype,"place",2);L([Y()],C.prototype,"root",2);L([K()],C.prototype,"creator",2);L([K()],C.prototype,"menuOpen",2);L([K()],C.prototype,"creating",2);L([K()],C.prototype,"email",2);L([K()],C.prototype,"password",2);L([K()],C.prototype,"error",2);L([K()],C.prototype,"info",2);L([K()],C.prototype,"busy",2);L([K()],C.prototype,"claimed",2);L([K()],C.prototype,"askName",2);L([K()],C.prototype,"askNote",2);L([K()],C.prototype,"askBusy",2);L([hr("dialog.ask")],C.prototype,"askDialog",2);L([hr("dialog.profile")],C.prototype,"profileDialog",2);L([K()],C.prototype,"profileOpen",2);L([K()],C.prototype,"brokenPicture",2);L([hr("dialog")],C.prototype,"dialog",2);L([K()],C.prototype,"invited",2);C=L([lr("account-menu")],C);function Dp(t){return(t.trim()[0]??"?").toUpperCase()}function xp(t){var i,r;const n=(((i=t.displayName)==null?void 0:i.trim())||((r=t.email)==null?void 0:r.split("@")[0])||"").replace(/\//g,"").replace(/^_+|_+$/g,"").trim().slice(0,60);return/^\.{1,2}$/.test(n)?"":n}function Cp(){try{const t=JSON.parse(localStorage.getItem(hc)??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}function Rp(t){try{localStorage.setItem(hc,JSON.stringify(t.slice(-20)))}catch{}}var Lp=Object.defineProperty,Op=Object.getOwnPropertyDescriptor,vi=(t,e,n,i)=>{for(var r=i>1?void 0:i?Op(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Lp(e,n,r),r};const lo=B`<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />`,ho=B`<circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />`;let Dt=class extends ct{constructor(){super(),this.theme="light",this.scheme="blue",this.open=!1,this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},new Wr(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside)}choose(t){this.open=!1,oc(t)}fire(t,e){this.open=!1,this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){const t=G(),e=Pe[pe()],n=this.theme==="dark",i=`${t.languageTitle(e.name)} · ${t.themeMenu}`;return $`
      <button class="key" aria-label=${i} title=${i} aria-haspopup="menu" aria-expanded=${this.open} @click=${()=>this.open=!this.open}>
        ${this.split()}
      </button>
      ${this.open?$`<div class="menu" role="menu" aria-label=${i} @keydown=${r=>r.key==="Escape"&&(this.open=!1)}>
            ${Object.keys(Pe).map(r=>$`<button
                role="menuitemradio"
                aria-checked=${r===pe()}
                class=${r===pe()?"on":""}
                @click=${()=>this.choose(r)}
              >
                ${this.flag(r)}
                <span>${Pe[r].name}</span>
                ${r===pe()?$`<span class="tick" aria-hidden="true">✓</span>`:P}
              </button>`)}
            <hr />
            <button role="menuitem" @click=${()=>this.fire("theme-change",n?"light":"dark")}>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${n?ho:lo}</svg>
              <span>${n?t.lightMode:t.darkMode}</span>
            </button>
            <hr />
            ${Kr.map(r=>$`<button
                role="menuitemradio"
                aria-checked=${r===this.scheme}
                class=${r===this.scheme?"on":""}
                @click=${()=>this.fire("scheme-change",r)}
              >
                <span class="swatch" style="background: ${me[r][this.theme].accent}" aria-hidden="true"></span>
                <span>${t.schemes[r]}</span>
                ${r===this.scheme?$`<span class="tick" aria-hidden="true">✓</span>`:P}
              </button>`)}
          </div>`:P}
    `}split(){const t=pe(),e=this.theme==="dark";return $`<svg class="face" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id="key-left"><rect x="0" y="0" width="12" height="24" /></clipPath>
        <clipPath id="key-round"><circle cx="12" cy="12" r="12" /></clipPath>
      </defs>
      <g clip-path="url(#key-round)">
        <g clip-path="url(#key-left)">${Pe[t].flag}</g>
        <rect x="12" y="0" width="12" height="24" fill=${me[this.scheme][this.theme].accent} />
        <line x1="12" y1="0" x2="12" y2="24" class="seam" />
        <g class="mode" transform="translate(11.5 6.3) scale(0.475)">${e?lo:ho}</g>
      </g>
    </svg>`}flag(t){return $`<svg class="flag" viewBox="0 0 24 24" aria-hidden="true">
      <defs><clipPath id="round-${t}"><circle cx="12" cy="12" r="12" /></clipPath></defs>
      <g clip-path="url(#round-${t})">${Pe[t].flag}</g>
    </svg>`}};Dt.styles=cn`
    :host {
      position: relative;
      display: block;
      flex: none;
      --size: 36px;
    }
    .key {
      display: grid;
      place-items: center;
      width: var(--size);
      height: var(--size);
      padding: 0;
      overflow: hidden;
      background: var(--m-surface);
      border: 1px solid var(--m-key-edge, var(--m-line));
      border-radius: 50%;
      box-shadow: var(--m-key-shadow, none);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    /* The face fills the key: it dims a little on hover, as the other keys grey */
    .face {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: filter 0.15s;
    }
    .key:hover .face {
      filter: brightness(0.9);
    }
    .seam {
      stroke: rgba(255, 255, 255, 0.85);
      stroke-width: 0.8;
    }
    .mode {
      fill: none;
      stroke: #fff;
      stroke-width: 3.4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .key:focus-visible,
    .menu button:focus-visible {
      outline: 2px solid var(--m-accent);
      outline-offset: 2px;
    }
    .menu {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 30;
      min-width: 180px;
      padding: 0.35rem;
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 12px;
      box-shadow: 0 8px 28px var(--m-shadow);
    }
    .menu button {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      width: 100%;
      padding: 0.5rem 0.6rem;
      font: 600 0.92rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      text-align: left;
      background: none;
      border: 0;
      border-radius: 8px;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    .menu button:hover {
      background: var(--m-bg);
    }
    .menu button.on {
      color: var(--m-accent);
    }
    .menu span:not(.tick):not(.swatch) {
      flex: 1;
    }
    .menu .flag {
      flex: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(20, 22, 26, 0.15);
    }
    .icon {
      flex: none;
      width: 20px;
      height: 20px;
      fill: none;
      stroke: var(--m-muted);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    hr {
      margin: 0.35rem 0.25rem;
      border: 0;
      border-top: 1px solid var(--m-line);
    }
    .swatch {
      flex: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
    }
  `;vi([Y()],Dt.prototype,"theme",2);vi([Y()],Dt.prototype,"scheme",2);vi([K()],Dt.prototype,"open",2);Dt=vi([lr("language-menu")],Dt);const nr="crescendu-look",Mi="crescendu.com",Mp=400*24*3600;function ir(){var t;try{const e=(t=document.cookie.split(";").map(r=>r.trim()).find(r=>r.startsWith(`${nr}=`)))==null?void 0:t.slice(nr.length+1);if(!e)return{};const n=new URLSearchParams(decodeURIComponent(e)),i=n.get("theme");return{scheme:n.get("scheme")??void 0,theme:i==="light"||i==="dark"?i:void 0}}catch{return{}}}function uo(t){try{const e={...ir(),...t},n=new URLSearchParams;e.scheme&&n.set("scheme",e.scheme),e.theme&&n.set("theme",e.theme);const i=location.hostname,r=i===Mi||i.endsWith(`.${Mi}`)?`; Domain=${Mi}`:"",s=location.protocol==="https:"?"; Secure":"";document.cookie=`${nr}=${encodeURIComponent(n.toString())}; Path=/; Max-Age=${Mp}; SameSite=Lax${r}${s}`}catch{}}var Vp=Object.defineProperty,Up=Object.getOwnPropertyDescriptor,Xe=(t,e,n,i)=>{for(var r=i>1?void 0:i?Up(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Vp(e,n,r),r};const Vi=matchMedia("(prefers-color-scheme: dark)"),Ui="violinhero-settings",fo={manual:{en:"Help",de:"Hilfe"},creator:{en:"Creator Help",de:"Creator-Hilfe"}},po={en:"Open Violin Hero",de:"Violin Hero öffnen"};let we=class extends ct{constructor(){super(),this.guide="manual",this.language="en",this.root="../",this.pages="",this.theme=Vi.matches?"dark":"light",this.scheme="blue",this.followSystem=e=>{ir().theme||(this.theme=e.matches?"dark":"light",this.applyTheme())},new Wr(this);try{const e=JSON.parse(localStorage.getItem(Ui)??"{}");ao(e.scheme)&&(this.scheme=e.scheme)}catch{}const t=ir();ao(t.scheme)&&(this.scheme=t.scheme),t.theme&&(this.theme=t.theme)}connectedCallback(){super.connectedCallback(),this.language in Pe&&oc(this.language,!1),this.applyTheme(),Vi.addEventListener("change",this.followSystem),this.stopWatching=ep(t=>this.user=t),this.stopLanguage=jr(()=>{const t=this.pageIn(pe());pe()!==this.language&&t&&(location.href=t+location.hash)})}disconnectedCallback(){var t,e;super.disconnectedCallback(),Vi.removeEventListener("change",this.followSystem),(t=this.stopWatching)==null||t.call(this),(e=this.stopLanguage)==null||e.call(this)}pageIn(t){for(const e of this.pages.split(/\s+/)){const[n,i]=e.split("=");if(n===t&&i)return i}}applyTheme(){var n;const t=document.documentElement;t.dataset.theme=this.theme;const e=me[this.scheme][this.theme];t.style.setProperty("--accent",e.accent),t.style.setProperty("--accent-hover",e.hover),(n=document.querySelector('meta[name="theme-color"]'))==null||n.setAttribute("content",mp(this.scheme,this.theme))}setScheme(t){this.scheme=t,uo({scheme:t});try{const e=JSON.parse(localStorage.getItem(Ui)??"{}");localStorage.setItem(Ui,JSON.stringify({...e,scheme:t}))}catch{}this.applyTheme()}render(){var e;const t=((e=fo[this.guide])==null?void 0:e[this.language])??fo.manual.en;return $`
      <header class="m-header">
        <a class="m-brand home" href=${this.root} title=${po[this.language]??po.en}>
          <svg class="m-logo" viewBox="0 0 100 100" aria-hidden="true">${bp("help")}</svg>
          <span class="m-titles">
            <!-- The app's name as it is, the help's in the theme colour -->
            <span class="m-name">Violin Hero <span class="accent">${t}</span></span>
            ${kp(G().versionTitle("0.193","0a3b538"))}
          </span>
        </a>
        <div class="m-header-end">
          ${wp("help",this.root)}
          <language-menu
            .theme=${this.theme}
            .scheme=${this.scheme}
            @theme-change=${n=>{this.theme=n.detail,uo({theme:n.detail}),this.applyTheme()}}
            @scheme-change=${n=>this.setScheme(n.detail)}
          ></language-menu>
          <account-menu .user=${this.user} place="help" root=${this.root}></account-menu>
        </div>
      </header>
    `}};we.styles=[_p,Tp,cn`
      :host {
        display: block;
        /* The page's own size is larger (17px); the header as on the other pages */
        font-size: 16px;
        line-height: normal;
      }
      .m-header {
        padding-inline: max(1.25rem, env(safe-area-inset-left)) max(1.25rem, env(safe-area-inset-right));
      }
      .home {
        color: inherit;
        text-decoration: none;
      }
      .accent {
        color: var(--m-accent);
      }
    `];Xe([Y()],we.prototype,"guide",2);Xe([Y()],we.prototype,"language",2);Xe([Y()],we.prototype,"root",2);Xe([Y()],we.prototype,"pages",2);Xe([Y({reflect:!0})],we.prototype,"theme",2);Xe([Y({reflect:!0})],we.prototype,"scheme",2);Xe([K()],we.prototype,"user",2);we=Xe([lr("help-header")],we);
