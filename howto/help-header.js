const Zc="violinhero",Xc="violin",Qc="Violin Hero",eh="violinhero.crescendu.com",th="https://github.com/dflorey/violinhero-app.git";const nh={paths:["M50,39C43,39 38,42.5 38,48C38,51.5 39.5,53.5 37.5,55.8C42.6,55.6 44.4,57.8 44.4,60.8C44.4,63.8 42.6,66 37.5,65.8C36,68.4 34.5,71 34.5,74.2C34.5,80.2 41.5,83.2 50,83.2C58.5,83.2 65.5,80.2 65.5,74.2C65.5,71 64,68.4 62.5,65.8C57.4,66 55.6,63.8 55.6,60.8C55.6,57.8 57.4,55.6 62.5,55.8C60.5,53.5 62,51.5 62,48C62,42.5 57,39 50,39Z","M50,39V23"],circles:[[50,18,4]]},Or={id:Zc,instrument:Xc,name:Qc,domain:eh,siteRepo:th,cacheVersion:2,mark:nh},fn=t=>`https://${t}.crescendu.com/`,Yt={violin:{id:"violin",app:{id:"violinhero",name:"Violin Hero",url:fn("violinhero")},name:{en:"violin",de:"Geige"},label:{en:"Violin",de:"Geige"},strings:[{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69},{name:"E",midi:76}],tuneOrder:[2,1,0,3],open:[55,62,69,76],range:[55,100],hz:[180,2800],programs:[41],partName:/viol|vln|^vn\b|geige/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},viola:{id:"viola",app:{id:"violahero",name:"Viola Hero",url:fn("violahero")},name:{en:"viola",de:"Bratsche"},label:{en:"Viola",de:"Bratsche"},strings:[{name:"C",midi:48},{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69}],tuneOrder:[3,2,1,0],open:[48,55,62,69],range:[48,91],hz:[120,2e3],programs:[42],partName:/viola|bratsche|^vla\b|alto/i,clef:{sign:"C",line:3},middleLine:60,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},cello:{id:"cello",app:{id:"cellohero",name:"Cello Hero",url:fn("cellohero")},name:{en:"cello",de:"Cello"},label:{en:"Cello",de:"Cello"},strings:[{name:"C",midi:36},{name:"G",midi:43},{name:"D",midi:50},{name:"A",midi:57}],tuneOrder:[3,2,1,0],open:[36,43,50,57],range:[36,84],hz:[60,1400],programs:[43],partName:/cello|vc\b|vlc/i,clef:{sign:"F",line:4},middleLine:50,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},recorder:{id:"recorder",app:{id:"recorderhero",name:"Recorder Hero",url:fn("recorderhero")},name:{en:"recorder",de:"Blockflöte"},label:{en:"Recorder",de:"Blockflöte"},strings:[],tuneOrder:[],open:[],range:[72,98],hz:[450,3200],programs:[75,74],partName:/recorder|blockfl|flöte|flute|flauto/i,clef:{sign:"G",line:2,octave:1},middleLine:83,marks:{fingers:[],bows:!1,harmonics:!1},bowed:!1,vibrato:!1},voice:{id:"voice",app:{id:"voicehero",name:"Voice Hero",url:fn("voicehero")},name:{en:"voice",de:"Stimme"},label:{en:"Voice",de:"Gesang"},strings:[],tuneOrder:[],open:[],range:[55,84],hz:[70,1200],programs:[53,54,55],partName:/voice|vocal|voc\b|gesang|stimme|sing|sopran|alto|tenor|bass|canto|chant/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[],bows:!1,harmonics:!1},bowed:!1,vibrato:!0}},ih=!1,Ha=ih;let rh=Yt[Or.instrument]??Yt.violin;function Dt(){return rh}Object.values(Yt).map(t=>t.app.id);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=globalThis,ls=ci.ShadowRoot&&(ci.ShadyCSS===void 0||ci.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cs=Symbol(),to=new WeakMap;let Wa=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==cs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ls&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=to.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&to.set(n,e))}return e}toString(){return this.cssText}};const ke=t=>new Wa(typeof t=="string"?t:t+"",void 0,cs),Le=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new Wa(n,t,cs)},sh=(t,e)=>{if(ls)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),r=ci.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},no=ls?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return ke(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:oh,defineProperty:ah,getOwnPropertyDescriptor:lh,getOwnPropertyNames:ch,getOwnPropertySymbols:hh,getPrototypeOf:dh}=Object,ht=globalThis,io=ht.trustedTypes,uh=io?io.emptyScript:"",ur=ht.reactiveElementPolyfillSupport,En=(t,e)=>t,Si={toAttribute(t,e){switch(e){case Boolean:t=t?uh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},hs=(t,e)=>!oh(t,e),ro={attribute:!0,type:String,converter:Si,reflect:!1,useDefault:!1,hasChanged:hs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ht.litPropertyMetadata??(ht.litPropertyMetadata=new WeakMap);let zt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ro){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&ah(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=lh(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);s==null||s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ro}static _$Ei(){if(this.hasOwnProperty(En("elementProperties")))return;const e=dh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(En("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(En("properties"))){const n=this.properties,i=[...ch(n),...hh(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(no(r))}else e!==void 0&&n.push(no(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sh(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Si).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var s,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Si;this._$Em=r;const c=l.fromAttribute(n,a.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(e,n,i,r=!1,s){var o;if(e!==void 0){const a=this.constructor;if(r===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??hs)(s,n)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:a}=o,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};zt.elementStyles=[],zt.shadowRootOptions={mode:"open"},zt[En("elementProperties")]=new Map,zt[En("finalized")]=new Map,ur==null||ur({ReactiveElement:zt}),(ht.reactiveElementVersions??(ht.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const An=globalThis,so=t=>t,_i=An.trustedTypes,oo=_i?_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,ja="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ga="?"+rt,ph=`<${Ga}>`,Nt=document,Dn=()=>Nt.createComment(""),Nn=t=>t===null||typeof t!="object"&&typeof t!="function",ds=Array.isArray,fh=t=>ds(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",pr=`[ 	
\f\r]`,mn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ao=/-->/g,lo=/>/g,vt=RegExp(`>|${pr}(?:([^\\s"'>=/]+)(${pr}*=${pr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),co=/'/g,ho=/"/g,Ka=/^(?:script|style|textarea|title)$/i,qa=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),E=qa(1),j=qa(2),Jt=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),uo=new WeakMap,At=Nt.createTreeWalker(Nt,129);function Ya(t,e){if(!ds(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return oo!==void 0?oo.createHTML(e):e}const mh=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=mn;for(let a=0;a<n;a++){const l=t[a];let c,y,w=-1,b=0;for(;b<l.length&&(o.lastIndex=b,y=o.exec(l),y!==null);)b=o.lastIndex,o===mn?y[1]==="!--"?o=ao:y[1]!==void 0?o=lo:y[2]!==void 0?(Ka.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=vt):y[3]!==void 0&&(o=vt):o===vt?y[0]===">"?(o=r??mn,w=-1):y[1]===void 0?w=-2:(w=o.lastIndex-y[2].length,c=y[1],o=y[3]===void 0?vt:y[3]==='"'?ho:co):o===ho||o===co?o=vt:o===ao||o===lo?o=mn:(o=vt,r=void 0);const A=o===vt&&t[a+1].startsWith("/>")?" ":"";s+=o===mn?l+ph:w>=0?(i.push(c),l.slice(0,w)+ja+l.slice(w)+rt+A):l+rt+(w===-2?a:A)}return[Ya(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Vr=class Ja{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,y]=mh(e,n);if(this.el=Ja.createElement(c,i),At.currentNode=this.el.content,n===2||n===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(r=At.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const w of r.getAttributeNames())if(w.endsWith(ja)){const b=y[o++],A=r.getAttribute(w).split(rt),x=/([.?@])?(.*)/.exec(b);l.push({type:1,index:s,name:x[2],strings:A,ctor:x[1]==="."?yh:x[1]==="?"?wh:x[1]==="@"?bh:Zi}),r.removeAttribute(w)}else w.startsWith(rt)&&(l.push({type:6,index:s}),r.removeAttribute(w));if(Ka.test(r.tagName)){const w=r.textContent.split(rt),b=w.length-1;if(b>0){r.textContent=_i?_i.emptyScript:"";for(let A=0;A<b;A++)r.append(w[A],Dn()),At.nextNode(),l.push({type:2,index:++s});r.append(w[b],Dn())}}}else if(r.nodeType===8)if(r.data===Ga)l.push({type:2,index:s});else{let w=-1;for(;(w=r.data.indexOf(rt,w+1))!==-1;)l.push({type:7,index:s}),w+=rt.length-1}s++}}static createElement(e,n){const i=Nt.createElement("template");return i.innerHTML=e,i}};function Zt(t,e,n=t,i){var o,a;if(e===Jt)return e;let r=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const s=Nn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=r:n._$Cl=r),r!==void 0&&(e=Zt(t,r._$AS(t,e.values),r,i)),e}class gh{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Nt).importNode(n,!0);At.currentNode=r;let s=At.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new us(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new vh(s,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(s=At.nextNode(),o++)}return At.currentNode=Nt,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}let us=class Za{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Zt(this,e,n),Nn(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==Jt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==I&&Nn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Vr.createElement(Ya(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(n);else{const o=new gh(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=uo.get(e.strings);return n===void 0&&uo.set(e.strings,n=new Vr(e)),n}k(e){ds(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new Za(this.O(Dn()),this.O(Dn()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e!==this._$AB;){const r=so(e).nextSibling;so(e).remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},Zi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=Zt(this,e,n,0),o=!Nn(e)||e!==this._$AH&&e!==Jt,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Zt(this,a[i+l],n,l),c===Jt&&(c=this._$AH[l]),o||(o=!Nn(c)||c!==this._$AH[l]),c===I?e=I:e!==I&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class yh extends Zi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}}class wh extends Zi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==I)}}let bh=class extends Zi{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=Zt(this,e,n,0)??I)===Jt)return;const i=this._$AH,r=e===I&&i!==I||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==I&&(i===I||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},vh=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}};const fr=An.litHtmlPolyfillSupport;fr==null||fr(Vr,us),(An.litHtmlVersions??(An.litHtmlVersions=[])).push("3.3.3");const kh=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new us(e.insertBefore(Dn(),s),s,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis;class _e extends zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kh(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Jt}}var Ba;_e._$litElement$=!0,_e.finalized=!0,(Ba=$t.litElementHydrateSupport)==null||Ba.call($t,{LitElement:_e});const mr=$t.litElementPolyfillSupport;mr==null||mr({LitElement:_e});($t.litElementVersions??($t.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th={attribute:!0,type:String,converter:Si,reflect:!1,hasChanged:hs},Sh=(t=Th,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=n;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function $(t){return(e,n)=>typeof n=="object"?Sh(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(t){return $({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t,e){return(n,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(t))??null};if(e){const{get:o,set:a}=typeof i=="object"?n:r??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return po(n,i,{get(){let l=o.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return po(n,i,{get(){return s(this)}})}}const _h=()=>{};/**
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
 */const Xa=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Eh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,y=s>>2,w=(s&3)<<4|a>>4;let b=(a&15)<<2|c>>6,A=c&63;l||(A=64,o||(b=64)),i.push(n[y],n[w],n[b],n[A])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const w=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||w==null)throw new Ah;const b=s<<2|a>>4;if(i.push(b),c!==64){const A=a<<4&240|c>>2;if(i.push(A),w!==64){const x=c<<6&192|w;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ah extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ih=function(t){const e=Xa(t);return Qa.encodeByteArray(e,!0)},Ei=function(t){return Ih(t).replace(/\./g,"")},el=function(t){try{return Qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $h=()=>xh().__FIREBASE_DEFAULTS__,Ph=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},ps=()=>{try{return _h()||$h()||Ph()||Dh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tl=t=>{var e,n;return(n=(e=ps())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Nh=t=>{const e=tl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},nl=()=>{var t;return(t=ps())==null?void 0:t.config},il=t=>{var e;return(e=ps())==null?void 0:e[`_${t}`]};/**
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
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Ch(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Ei(JSON.stringify(n)),Ei(JSON.stringify(o)),a].join(".")}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function Lh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Oh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vh(){const t=ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uh(){try{return typeof indexedDB=="object"}catch{return!1}}function zh(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fh="FirebaseError";class Qe extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Fh,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}}class Bn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Bh(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qe(r,a,i)}}function Bh(t,e){try{let n=0,i="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){i+=t.substring(n);break}const s=t.indexOf("}",r+2);if(s===-1){i+=t.substring(n);break}const o=t.substring(r+2,s),a=e[o];i+=t.substring(n,r)+(a!=null?String(a):`<${o}?>`),n=s+1}return i}catch{return t}}function Hh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ct(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(fo(s)&&fo(o)){if(!Ct(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function fo(t){return t!==null&&typeof t=="object"}/**
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
 */function Hn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function vn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Wh(t,e){const n=new jh(t,e);return n.subscribe.bind(n)}class jh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Gh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=gr),r.error===void 0&&(r.error=gr),r.complete===void 0&&(r.complete=gr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gr(){}/**
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
 */function K(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Wn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sl(t){return(await fetch(t,{credentials:"include"})).ok}class Rt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tt="[DEFAULT]";/**
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
 */class Kh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new rl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yh(e))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tt){return this.instances.has(e)}getOptions(e=Tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qh(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Tt){return this.component?this.component.multipleInstances?e:Tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qh(t){return t===Tt?void 0:t}function Yh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const Zh={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Xh=C.INFO,Qh={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},ed=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Qh[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fs{constructor(e){this.name=e,this._logLevel=Xh,this._logHandler=ed,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const td=(t,e)=>e.some(n=>t instanceof n);let mo,go;function nd(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function id(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ol=new WeakMap,Ur=new WeakMap,al=new WeakMap,yr=new WeakMap,ms=new WeakMap;function rd(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ol.set(n,t)}).catch(()=>{}),ms.set(e,t),e}function sd(t){if(Ur.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||al.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function od(t){zr=t(zr)}function ad(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(wr(this),e,...n);return al.set(i,e.sort?e.sort():[e]),dt(i)}:id().includes(t)?function(...e){return t.apply(wr(this),e),dt(ol.get(this))}:function(...e){return dt(t.apply(wr(this),e))}}function ld(t){return typeof t=="function"?ad(t):(t instanceof IDBTransaction&&sd(t),td(t,nd())?new Proxy(t,zr):t)}function dt(t){if(t instanceof IDBRequest)return rd(t);if(yr.has(t))return yr.get(t);const e=ld(t);return e!==t&&(yr.set(t,e),ms.set(e,t)),e}const wr=t=>ms.get(t);function cd(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=dt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(dt(o.result),l.oldVersion,l.newVersion,dt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],br=new Map;function yo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=dd.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||hd.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return br.set(e,s),s}od(t=>({...t,get:(e,n,i)=>yo(e,n)||t.get(e,n,i),has:(e,n)=>!!yo(e,n)||t.has(e,n)}));/**
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
 */class ud{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function pd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fr="@firebase/app",wo="0.16.5";/**
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
 */const Ze=new fs("@firebase/app"),fd="@firebase/app-compat",md="@firebase/analytics-compat",gd="@firebase/analytics",yd="@firebase/app-check-compat",wd="@firebase/app-check",bd="@firebase/auth",vd="@firebase/auth-compat",kd="@firebase/crashlytics",Td="@firebase/database",Sd="@firebase/data-connect",_d="@firebase/database-compat",Ed="@firebase/functions",Ad="@firebase/functions-compat",Id="@firebase/installations",xd="@firebase/installations-compat",$d="@firebase/messaging",Pd="@firebase/messaging-compat",Dd="@firebase/performance",Nd="@firebase/performance-compat",Cd="@firebase/remote-config",Rd="@firebase/remote-config-compat",Ld="@firebase/storage",Md="@firebase/storage-compat",Od="@firebase/firestore",Vd="@firebase/ai",Ud="@firebase/firestore-compat",zd="firebase",Fd="13.2.0";/**
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
 */const Br="[DEFAULT]",Bd={[Fr]:"fire-core",[fd]:"fire-core-compat",[gd]:"fire-analytics",[md]:"fire-analytics-compat",[wd]:"fire-app-check",[yd]:"fire-app-check-compat",[bd]:"fire-auth",[vd]:"fire-auth-compat",[kd]:"fire-cls",[Td]:"fire-rtdb",[Sd]:"fire-data-connect",[_d]:"fire-rtdb-compat",[Ed]:"fire-fn",[Ad]:"fire-fn-compat",[Id]:"fire-iid",[xd]:"fire-iid-compat",[$d]:"fire-fcm",[Pd]:"fire-fcm-compat",[Dd]:"fire-perf",[Nd]:"fire-perf-compat",[Cd]:"fire-rc",[Rd]:"fire-rc-compat",[Ld]:"fire-gcs",[Md]:"fire-gcs-compat",[Od]:"fire-fst",[Ud]:"fire-fst-compat",[Vd]:"fire-vertex","fire-js":"fire-js",[zd]:"fire-js-all"};/**
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
 */const Ai=new Map,Hd=new Map,Hr=new Map;function bo(t,e){try{t.container.addComponent(e)}catch(n){Ze.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Hr.has(e))return Ze.debug(`There were multiple attempts to register component ${e}.`),!1;Hr.set(e,t);for(const n of Ai.values())bo(n,t);for(const n of Hd.values())bo(n,t);return!0}function gs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function oe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Wd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ge=new Bn("app","Firebase",Wd);/**
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
 */class jd{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
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
 */const on=Fd;function ys(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Br,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Ge.create("bad-app-name",{appName:String(r)});if(n||(n=nl()),!n)throw Ge.create("no-options");const s=Ai.get(r);if(s)if(Ct(n,s.options)){if(Ct(i,s.config))return s;throw Ge.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(i)})}else throw Ge.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Jh(r);for(const l of Hr.values())o.addComponent(l);const a=new jd(n,i,o);return Ai.set(r,a),a}function ll(t=Br){const e=Ai.get(t);if(!e&&t===Br&&nl())return ys();if(!e)throw Ge.create("no-app",{appName:t});return e}function ut(t,e,n){let i=Bd[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ze.warn(o.join(" "));return}Xt(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Gd="firebase-heartbeat-database",Kd=1,Cn="firebase-heartbeat-store";let vr=null;function cl(){return vr||(vr=cd(Gd,Kd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ge.create("idb-open",{originalErrorMessage:t.message})})),vr}async function qd(t){try{const n=(await cl()).transaction(Cn),i=await n.objectStore(Cn).get(hl(t));return await n.done,i}catch(e){if(e instanceof Qe)Ze.warn(e.message);else{const n=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ze.warn(n.message)}}}async function vo(t,e){try{const i=(await cl()).transaction(Cn,"readwrite");await i.objectStore(Cn).put(e,hl(t)),await i.done}catch(n){if(n instanceof Qe)Ze.warn(n.message);else{const i=Ge.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(i.message)}}}function hl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yd=1024,Jd=30;class Zd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ko();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Jd){const o=eu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ze.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ko(),{heartbeatsToSend:i,unsentEntries:r}=Xd(this._heartbeatsCache.heartbeats),s=Ei(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ze.warn(n),""}}}function ko(){return new Date().toISOString().substring(0,10)}function Xd(t,e=Yd){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),To(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),To(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Qd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uh()?zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return vo(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function To(t){return Ei(JSON.stringify({version:2,heartbeats:t})).length}function eu(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function tu(t){Xt(new Rt("platform-logger",e=>new ud(e),"PRIVATE")),Xt(new Rt("heartbeat",e=>new Zd(e),"PRIVATE")),ut(Fr,wo,t),ut(Fr,wo,"esm2020"),ut("fire-js","")}/**
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
 */tu("");var nu="firebase",iu="13.2.0";/**
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
 */ut(nu,iu,"app");function dl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ru=dl,ul=new Bn("auth","Firebase",dl());/**
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
 */const Ii=new fs("@firebase/auth");function hi(t,...e){Ii.logLevel<=C.WARN&&Ii.warn(`Auth (${on}): ${t}`,...e)}function di(t,...e){Ii.logLevel<=C.ERROR&&Ii.error(`Auth (${on}): ${t}`,...e)}/**
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
 */function be(t,...e){throw ws(t,...e)}function Ee(t,...e){return ws(t,...e)}function Xi(t,e,n){const i={...ru(),[e]:n};return new Bn("auth","Firebase",i).create(e,{appName:t.name})}function Pe(t){return Xi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function su(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&be(t,"argument-error"),Xi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ws(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ul.create(t,...e)}function S(t,e,...n){if(!t)throw ws(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw di(e),new Error(e)}function Xe(t,e){t||Ke(e)}/**
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
 */function Wr(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ou(){return So()==="http:"||So()==="https:"}function So(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function au(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ou()||Mh()||"connection"in navigator)?navigator.onLine:!0}function lu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Rh()||Oh()}get(){return au()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bs(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pl{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],du=new jn(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Oe(t,e,n,i,r={}){return fl(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Hn({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return Lh()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Wn(t.emulatorConfig.host)&&(c.credentials="include"),pl.fetch()(await ml(t,t.config.apiHost,n,a),c)})}async function fl(t,e,n){t._canInitEmulator=!1;const i={...cu,...e};try{const r=new pu(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zn(t,"user-disabled",o);const y=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xi(t,y,c);be(t,y)}}catch(r){if(r instanceof Qe)throw r;be(t,"network-request-failed",{message:String(r)})}}async function an(t,e,n,i,r={}){const s=await Oe(t,e,n,i,r);return"mfaPendingCredential"in s&&be(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ml(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?bs(t.config,r):`${t.config.apiScheme}://${r}`;return hu.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function uu(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),du.get())})}}function Zn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ee(t,e,i);return r.customData._tokenResponse=n,r}function _o(t){return t!==void 0&&t.enterprise!==void 0}class fu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uu(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mu(t,e){return Oe(t,"GET","/v2/recaptchaConfig",Me(t,e))}/**
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
 */async function gu(t,e){return Oe(t,"POST","/v1/accounts:delete",e)}async function xi(t,e){return Oe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function In(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yu(t,e=!1){const n=K(t),i=await n.getIdToken(e),r=vs(i);S(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:In(kr(r.auth_time)),issuedAtTime:In(kr(r.iat)),expirationTime:In(kr(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kr(t){return Number(t)*1e3}function vs(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{const r=el(n);return r?JSON.parse(r):(di("Failed to decode base64 JWT payload"),null)}catch(r){return di("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Eo(t){const e=vs(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw gl(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function gl(t){return t instanceof Qe?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
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
 */class wu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(t){var w;const e=t.auth,n=await t.getIdToken(),i=await Qt(t,xi(e,{idToken:n}));S(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=(w=r.providerUserInfo)!=null&&w.length?yl(r.providerUserInfo):[],o=vu(t.providerData,s),a=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,y={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new jr(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,y)}async function bu(t){const e=K(t);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vu(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function yl(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ku(t,e){const n=await fl(t,{},async()=>{const i=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await ml(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Wn(t.emulatorConfig.host)&&(l.credentials="include"),pl.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tu(t,e){return Oe(t,"POST","/v2/accounts:revokeToken",Me(t,e))}/**
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
 */class Gt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){S(e.length!==0,"internal-error");const n=Eo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await ku(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Gt;return i&&(S(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(S(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gt,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
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
 */function tt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new wu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yu(this,e)}reload(){return bu(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Se({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oe(this.auth.app))return Promise.reject(Pe(this.auth));const e=await this.getIdToken();return await Qt(this,gu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:w,emailVerified:b,isAnonymous:A,providerData:x,stsTokenManager:V}=n;S(w&&V,e,"internal-error");const R=Gt.fromJSON(this.name,V);S(typeof w=="string",e,"internal-error"),tt(i,e.name),tt(r,e.name),S(typeof b=="boolean",e,"internal-error"),S(typeof A=="boolean",e,"internal-error"),tt(s,e.name),tt(o,e.name),tt(a,e.name),tt(l,e.name),tt(c,e.name),tt(y,e.name);const re=new Se({uid:w,auth:e,email:r,emailVerified:b,displayName:i,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:R,createdAt:c,lastLoginAt:y});return x&&Array.isArray(x)&&(re.providerData=x.map(me=>({...me}))),l&&(re._redirectEventId=l),re}static async _fromIdTokenResponse(e,n,i=!1){const r=new Gt;r.updateFromServerResponse(n);const s=new Se({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await $i(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];S(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?yl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Gt;a.updateFromIdToken(i);const l=new Se({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new jr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Ao=new Map;function qe(t){Xe(t instanceof Function,"Expected a class definition");let e=Ao.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ao.set(t,e),e)}/**
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
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const Gr=wl;/**
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
 */function ui(t,e,n){return`firebase:${t}:${e}:${n}`}class Pt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ui(this.userKey,r.apiKey,s),this.fullPersistenceKey=ui("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xi(this.auth,{idToken:e}).catch(()=>{});return n?Se._fromGetAccountInfoResponse(this.auth,n,e):null}return Se._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new Pt(qe(Gr),e,i);const r=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let s=r[0]||qe(Gr);const o=ui(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const y=await c._get(o);if(y){let w;if(typeof y=="string"){const b=await xi(e,{idToken:y}).catch(()=>{});if(!b)break;w=await Se._fromGetAccountInfoResponse(e,b,y)}else w=Se._fromJSON(e,y);c!==s&&(a=w),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Pt(s,e,i))}}/**
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
 */function Io(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_l(e))return"Blackberry";if(El(e))return"Webos";if(vl(e))return"Safari";if((e.includes("chrome/")||kl(e))&&!e.includes("edge/"))return"Chrome";if(Sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function bl(t=ie()){return/firefox\//i.test(t)}function vl(t=ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kl(t=ie()){return/crios\//i.test(t)}function Tl(t=ie()){return/iemobile/i.test(t)}function Sl(t=ie()){return/android/i.test(t)}function _l(t=ie()){return/blackberry/i.test(t)}function El(t=ie()){return/webos/i.test(t)}function ks(t=ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Su(t=ie()){var e;return ks(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _u(){return Vh()&&document.documentMode===10}function Al(t=ie()){return ks(t)||Sl(t)||El(t)||_l(t)||/windows phone/i.test(t)||Tl(t)}/**
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
 */function Il(t,e=[]){let n;switch(t){case"Browser":n=Io(ie());break;case"Worker":n=`${Io(ie())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${on}/${i}`}/**
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
 */class Eu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Au(t,e={}){return Oe(t,"GET","/v2/passwordPolicy",Me(t,e))}/**
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
 */const Iu=6;class xu{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Iu,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $u{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xo(this),this.idTokenSubscription=new xo(this),this.beforeStateQueue=new Eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qe(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted){try{this.persistenceManager=await Pt.create(this,e)}catch(o){hi(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Pt.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){hi(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xi(this,{idToken:e}),i=await Se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(n){if(gl(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oe(this.app))return Promise.reject(Pe(this));const n=e?K(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oe(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oe(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Au(this),n=new xu(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Bn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Tu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qe(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(i)i(l);else throw l}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),r=Xi(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw r.customData={originalError:n},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Il(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&hi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ve(t){return K(t)}class xo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wh(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pu(t){Qi=t}function xl(t){return Qi.loadJS(t)}function Du(){return Qi.recaptchaEnterpriseScript}function Nu(){return Qi.gapiScript}function Cu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ru{constructor(){this.enterprise=new Lu}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Lu{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const Mu="recaptcha-enterprise",$l="NO_RECAPTCHA",$o="onFirebaseAuthREInstanceReady";class st{constructor(e){this.type=Mu,this.auth=Ve(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;_o(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($l)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ru().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(async a=>{if(!n&&_o(window.grecaptcha)&&st.scriptInjectionDeferred)await st.scriptInjectionDeferred.promise,r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Du();l.length!==0&&(l+=a+`&onload=${$o}`),st.scriptInjectionDeferred=new rl,window[$o]=()=>{var c;(c=st.scriptInjectionDeferred)==null||c.resolve()},xl(l).then(()=>{var c;return(c=st.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}st.scriptInjectionDeferred=null;async function gn(t,e,n,i=!1,r=!1){const s=new st(t);let o;if(r)o=$l;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Pi(t,e,n,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await gn(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await gn(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await gn(t,e,n);return i(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const y=await gn(t,e,n,!1,!0);return i(t,y)}return Promise.reject(l)})}else{const a=await gn(t,e,n,!1,!0);return i(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function Pl(t,e){const n=gs(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ct(s,e??{}))return r;be(r,"already-initialized")}return n.initialize({options:e})}function Ou(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(qe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Vu(t,e,n){const i=Ve(t);S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Dl(e),{host:o,port:a}=Uu(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},y=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){S(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),S(Ct(c,i.config.emulator)&&Ct(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Wn(o)?sl(`${s}//${o}${l}`):r||zu()}function Dl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Uu(t){const e=Dl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Po(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Po(o)}}}function Po(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ts{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function Fu(t,e){return Oe(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Bu(t,e){return an(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function Nl(t,e){return Oe(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function Hu(t,e){return Nl(t,e)}async function Wu(t,e){return Nl(t,e)}/**
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
 */async function ju(t,e){return an(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function Gu(t,e){return an(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
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
 */class Rn extends Ts{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Rn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Rn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(e,n,"signInWithPassword",Bu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ju(e,{email:this._email,oobCode:this._password});default:be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pi(e,i,"signUpPassword",Fu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Gu(e,{idToken:n,email:this._email,oobCode:this._password});default:be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Kt(t,e){return an(t,"POST","/v1/accounts:signInWithIdp",Me(t,e))}/**
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
 */const Ku="http://localhost";class Lt extends Ts{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new Lt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Kt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:Ku,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hn(n)}return e}}/**
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
 */function qu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yu(t){const e=bn(vn(t)).link,n=e?bn(vn(e)).deep_link_id:null,i=bn(vn(t)).deep_link_id;return(i?bn(vn(i)).link:null)||i||n||e||t}class Ss{constructor(e){const n=bn(vn(e)),i=n.apiKey??null,r=n.oobCode??null,s=qu(n.mode??null);S(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Yu(e);try{return new Ss(n)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Rn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ss.parseLink(n);return S(i,"argument-error"),Rn._fromEmailAndCode(e,i.code,i.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gn extends _s{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ot extends Gn{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
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
 */class He extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return He.credential(n,i)}catch{return null}}}He.GOOGLE_SIGN_IN_METHOD="google.com";He.PROVIDER_ID="google.com";/**
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
 */class at extends Gn{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
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
 */class lt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Lt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return lt.credential(n,i)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
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
 */async function Ju(t,e){return an(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
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
 */class pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Se._fromIdTokenResponse(e,i,r),o=Do(i);return new pt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Do(i);return new pt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Do(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Di extends Qe{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Di.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Di(e,n,i,r)}}function Cl(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Di._fromErrorAndOperation(t,s,e,i):s})}async function Zu(t,e,n=!1){const i=await Qt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pt._forOperation(t,"link",i)}/**
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
 */async function Xu(t,e,n=!1){const{auth:i}=t;if(oe(i.app))return Promise.reject(Pe(i));const r="reauthenticate";try{const s=await Qt(t,Cl(i,r,e,t),n);S(s.idToken,i,"internal-error");const o=vs(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(t.uid===a,i,"user-mismatch"),pt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&be(i,"user-mismatch"),s}}/**
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
 */async function Rl(t,e,n=!1){if(oe(t.app))return Promise.reject(Pe(t));const i="signIn",r=await Cl(t,i,e),s=await pt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Qu(t,e){return Rl(Ve(t),e)}/**
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
 */async function ep(t,e){return an(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
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
 */async function Ll(t,e){if(oe(t.app))return Promise.reject(Pe(t));const n=Ve(t),i=await ep(n,{token:e,returnSecureToken:!0}),r=await pt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */function Ml(t,e,n){var i;S(((i=n.url)==null?void 0:i.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),S(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ol(t){const e=Ve(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tp(t,e,n){const i=Ve(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ml(i,r,n),await Pi(i,r,"getOobCode",Wu,"EMAIL_PASSWORD_PROVIDER")}async function np(t,e,n){if(oe(t.app))return Promise.reject(Pe(t));const i=Ve(t),o=await Pi(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ju,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ol(t),l}),a=await pt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function ip(t,e,n){return oe(t.app)?Promise.reject(Pe(t)):Qu(K(t),ln.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ol(t),i})}async function rp(t,e){const n=K(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Ml(n.auth,r,e);const{email:s}=await Hu(n.auth,r);s!==t.email&&await t.reload()}/**
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
 */async function sp(t,e){return Oe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function op(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const r=K(t),o={idToken:await r.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await Qt(r,sp(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function ap(t,e,n,i){return K(t).onIdTokenChanged(e,n,i)}function lp(t,e,n){return K(t).beforeAuthStateChanged(e,n)}function Ni(t,e,n,i){return K(t).onAuthStateChanged(e,n,i)}function Vl(t){return K(t).signOut()}const Ci="__sak";/**
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
 */class Ul{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cp=1e3,hp=10;class zl extends Ul{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);_u()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hp):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zl.type="LOCAL";const dp=zl;/**
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
 */class Fl extends Ul{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fl.type="SESSION";const Bl=Fl;/**
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
 */function up(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new er(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await up(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
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
 */function Es(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Es("",20);r.port1.start();const y=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(w){const b=w;if(b.data.eventId===c)switch(b.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(b.data.response);break;default:clearTimeout(y),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function De(){return window}function fp(t){De().location.href=t}/**
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
 */function Hl(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function mp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yp(){return Hl()?self:null}/**
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
 */const Wl="firebaseLocalStorageDb",wp=1,Ri="firebaseLocalStorage",jl="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tr(t,e){return t.transaction([Ri],e?"readwrite":"readonly").objectStore(Ri)}function bp(){const t=indexedDB.deleteDatabase(Wl);return new Kn(t).toPromise()}function Gl(){const t=indexedDB.open(Wl,wp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ri,{keyPath:jl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ri)?e(i):(i.close(),await bp(),e(await Gl()))})})}async function No(t,e,n){const i=tr(t,!0).put({[jl]:e,value:n});return new Kn(i).toPromise()}async function vp(t,e){const n=tr(t,!1).get(e),i=await new Kn(n).toPromise();return i===void 0?null:i.value}function Co(t,e){const n=tr(t,!0).delete(e);return new Kn(n).toPromise()}const kp=800,Tp=3;class Kl{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Gl(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Tp)throw i;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(yp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await mp(),!this.activeServiceWorker)return;this.sender=new pp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await No(e,Ci,"1"),await Co(e,Ci)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>No(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>vp(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const s=tr(r,!1).getAll();return new Kn(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}catch(e){return this.isClosing||hi(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e).catch(()=>{})),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Kl.type="LOCAL";const Sp=Kl;new jn(3e4,6e4);/**
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
 */function ql(t,e){return e?qe(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class As extends Ts{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _p(t){return Rl(t.auth,new As(t),t.bypassAuthState)}function Ep(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Xu(n,new As(t),t.bypassAuthState)}async function Ap(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Zu(n,new As(t),t.bypassAuthState)}/**
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
 */class Yl{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(i){this.pendingPromise&&this.reject(i)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _p;case"linkViaPopup":case"linkViaRedirect":return Ap;case"reauthViaPopup":case"reauthViaRedirect":return Ep;default:be(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ip=new jn(2e3,1e4);async function xp(t,e,n){if(oe(t.app))return Promise.reject(Ee(t,"operation-not-supported-in-this-environment"));const i=Ve(t);su(t,e,_s);const r=ql(i,n);return new It(i,"signInViaPopup",e,r).executeNotNull()}class It extends Yl{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,It.currentPopupAction&&It.currentPopupAction.cancel(),It.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=Es();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,It.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ip.get())};e()}}It.currentPopupAction=null;/**
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
 */const $p="pendingRedirect",pi=new Map;class Pp extends Yl{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=pi.get(this.auth._key());if(!e){try{const i=await Dp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}pi.set(this.auth._key(),e)}return this.bypassAuthState||pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dp(t,e){const n=Rp(e),i=Cp(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Np(t,e){pi.set(t._key(),e)}function Cp(t){return qe(t._redirectPersistence)}function Rp(t){return ui($p,t.config.apiKey,t.name)}async function Lp(t,e,n=!1){if(oe(t.app))return Promise.reject(Pe(t));const i=Ve(t),r=ql(i,e),o=await new Pp(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Mp=10*60*1e3;class Op{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Jl(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ee(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ro(e))}saveEventToCache(e){this.cachedEventUids.add(Ro(e)),this.lastProcessedEventTime=Date.now()}}function Ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jl(t);default:return!1}}/**
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
 */async function Up(t,e={}){return Oe(t,"GET","/v1/projects",e)}/**
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
 */const zp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fp=/^https?/;async function Bp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Up(t);for(const n of e)try{if(Hp(n))return}catch{}be(t,"unauthorized-domain")}function Hp(t){const e=Wr(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Fp.test(n))return!1;if(zp.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Wp=new jn(3e4,6e4);function Lo(){const t=De().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jp(t){return new Promise((e,n)=>{var r,s,o;function i(){Lo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lo(),n(Ee(t,"network-request-failed"))},timeout:Wp.get()})}if((s=(r=De().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=De().gapi)!=null&&o.load)i();else{const a=Cu("iframefcb");return De()[a]=()=>{gapi.load?i():n(Ee(t,"network-request-failed"))},xl(`${Nu()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fi=null,e})}let fi=null;function Gp(t){return fi=fi||jp(t),fi}/**
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
 */const Kp=new jn(5e3,15e3),qp="__/auth/iframe",Yp="emulator/auth/iframe",Jp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xp(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bs(e,Yp):`https://${t.config.authDomain}/${qp}`,i={apiKey:e.apiKey,appName:t.name,v:on},r=Zp.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Hn(i).slice(1)}`}async function Qp(t){const e=await Gp(t),n=De().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:Xp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jp,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Ee(t,"network-request-failed"),a=De().setTimeout(()=>{s(o)},Kp.get());function l(){De().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ef={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tf=500,nf=600,rf="_blank",sf="http://localhost";class Mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function of(t,e,n,i=tf,r=nf){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...ef,width:i.toString(),height:r.toString(),top:s,left:o},c=ie().toLowerCase();n&&(a=kl(c)?rf:n),bl(c)&&(e=e||sf,l.scrollbars="yes");const y=Object.entries(l).reduce((b,[A,x])=>`${b}${A}=${x},`,"");if(Su(c)&&a!=="_self")return af(e||"",a),new Mo(null);const w=window.open(e||"",a,y);S(w,t,"popup-blocked");try{w.focus()}catch{}return new Mo(w)}function af(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const lf="__/auth/handler",cf="emulator/auth/handler",hf=encodeURIComponent("fac");async function Oo(t,e,n,i,r,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:on,eventId:r};if(e instanceof _s){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries(s||{}))o[y]=w}if(e instanceof Gn){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(o.scopes=y.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const y of Object.keys(a))a[y]===void 0&&delete a[y];const l=await t._getAppCheckToken(),c=l?`#${hf}=${encodeURIComponent(l)}`:"";return`${df(t)}?${Hn(a).slice(1)}${c}`}function df({config:t}){return t.emulator?bs(t,cf):`https://${t.authDomain}/${lf}`}/**
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
 */const Tr="webStorageSupport";class uf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=Lp,this._overrideRedirectResult=Np}async _openPopup(e,n,i,r){var o;Xe((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Oo(e,n,i,Wr(),r);return of(e,s,Es())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Oo(e,n,i,Wr(),r);return fp(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Xe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Qp(e),i=new Op(e);return n.register("authEvent",r=>(S(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tr,{type:Tr},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[Tr];s!==void 0&&n(!!s),be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Bp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||vl()||ks()}}const pf=uf;var Vo="@firebase/auth",Uo="1.13.9";/**
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
 */class ff{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gf(t){Xt(new Rt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Il(t)},c=new $u(i,r,s,l);return Ou(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Xt(new Rt("auth-internal",e=>{const n=Ve(e.getProvider("auth").getImmediate());return(i=>new ff(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(Vo,Uo,mf(t)),ut(Vo,Uo,"esm2020")}/**
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
 */const yf=5*60,wf=il("authIdTokenMaxAge")||yf;let zo=null;const bf=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>wf)return;const r=n==null?void 0:n.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zl(t=ll()){const e=gs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pl(t,{popupRedirectResolver:pf,persistence:[Sp,dp,Bl]}),i=il("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=bf(s.toString());lp(n,o,()=>o(n.currentUser)),ap(n,a=>o(a))}}const r=tl("auth");return r&&Vu(n,`http://${r}`),n}function vf(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Pu({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Ee("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",vf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gf("Browser");var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xl;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,h){function u(){}u.prototype=h.prototype,p.F=h.prototype,p.prototype=new u,p.prototype.constructor=p,p.D=function(m,f,g){for(var d=Array(arguments.length-2),bt=2;bt<arguments.length;bt++)d[bt-2]=arguments[bt];return h.prototype[f].apply(m,d)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(p,h,u){u||(u=0);const m=Array(16);if(typeof h=="string")for(var f=0;f<16;++f)m[f]=h.charCodeAt(u++)|h.charCodeAt(u++)<<8|h.charCodeAt(u++)<<16|h.charCodeAt(u++)<<24;else for(f=0;f<16;++f)m[f]=h[u++]|h[u++]<<8|h[u++]<<16|h[u++]<<24;h=p.g[0],u=p.g[1],f=p.g[2];let g=p.g[3],d;d=h+(g^u&(f^g))+m[0]+3614090360&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[1]+3905402710&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[2]+606105819&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[3]+3250441966&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[4]+4118548399&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[5]+1200080426&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[6]+2821735955&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[7]+4249261313&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[8]+1770035416&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[9]+2336552879&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[10]+4294925233&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[11]+2304563134&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[12]+1804603682&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[13]+4254626195&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[14]+2792965006&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[15]+1236535329&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(f^g&(u^f))+m[1]+4129170786&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[6]+3225465664&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[11]+643717713&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[0]+3921069994&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[5]+3593408605&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[10]+38016083&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[15]+3634488961&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[4]+3889429448&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[9]+568446438&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[14]+3275163606&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[3]+4107603335&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[8]+1163531501&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[13]+2850285829&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[2]+4243563512&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[7]+1735328473&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[12]+2368359562&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(u^f^g)+m[5]+4294588738&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[8]+2272392833&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[11]+1839030562&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[14]+4259657740&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[1]+2763975236&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[4]+1272893353&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[7]+4139469664&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[10]+3200236656&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[13]+681279174&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[0]+3936430074&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[3]+3572445317&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[6]+76029189&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[9]+3654602809&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[12]+3873151461&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[15]+530742520&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[2]+3299628645&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(f^(u|~g))+m[0]+4096336452&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[7]+1126891415&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[14]+2878612391&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[5]+4237533241&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[12]+1700485571&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[3]+2399980690&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[10]+4293915773&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[1]+2240044497&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[8]+1873313359&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[15]+4264355552&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[6]+2734768916&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[13]+1309151649&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[4]+4149444226&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[11]+3174756917&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[2]+718787259&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[9]+3951481745&4294967295,p.g[0]=p.g[0]+h&4294967295,p.g[1]=p.g[1]+(f+(d<<21&4294967295|d>>>11))&4294967295,p.g[2]=p.g[2]+f&4294967295,p.g[3]=p.g[3]+g&4294967295}i.prototype.v=function(p,h){h===void 0&&(h=p.length);const u=h-this.blockSize,m=this.C;let f=this.h,g=0;for(;g<h;){if(f==0)for(;g<=u;)r(this,p,g),g+=this.blockSize;if(typeof p=="string"){for(;g<h;)if(m[f++]=p.charCodeAt(g++),f==this.blockSize){r(this,m),f=0;break}}else for(;g<h;)if(m[f++]=p[g++],f==this.blockSize){r(this,m),f=0;break}}this.h=f,this.o+=h},i.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var h=1;h<p.length-8;++h)p[h]=0;h=this.o*8;for(var u=p.length-8;u<p.length;++u)p[u]=h&255,h/=256;for(this.v(p),p=Array(16),h=0,u=0;u<4;++u)for(let m=0;m<32;m+=8)p[h++]=this.g[u]>>>m&255;return p};function s(p,h){var u=a;return Object.prototype.hasOwnProperty.call(u,p)?u[p]:u[p]=h(p)}function o(p,h){this.h=h;const u=[];let m=!0;for(let f=p.length-1;f>=0;f--){const g=p[f]|0;m&&g==h||(u[f]=g,m=!1)}this.g=u}var a={};function l(p){return-128<=p&&p<128?s(p,function(h){return new o([h|0],h<0?-1:0)}):new o([p|0],p<0?-1:0)}function c(p){if(isNaN(p)||!isFinite(p))return w;if(p<0)return R(c(-p));const h=[];let u=1;for(let m=0;p>=u;m++)h[m]=p/u|0,u*=4294967296;return new o(h,0)}function y(p,h){if(p.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(p.charAt(0)=="-")return R(y(p.substring(1),h));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const u=c(Math.pow(h,8));let m=w;for(let g=0;g<p.length;g+=8){var f=Math.min(8,p.length-g);const d=parseInt(p.substring(g,g+f),h);f<8?(f=c(Math.pow(h,f)),m=m.j(f).add(c(d))):(m=m.j(u),m=m.add(c(d)))}return m}var w=l(0),b=l(1),A=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-R(this).m();let p=0,h=1;for(let u=0;u<this.g.length;u++){const m=this.i(u);p+=(m>=0?m:4294967296+m)*h,h*=4294967296}return p},t.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(x(this))return"0";if(V(this))return"-"+R(this).toString(p);const h=c(Math.pow(p,6));var u=this;let m="";for(;;){const f=wt(u,h).g;u=re(u,f.j(h));let g=((u.g.length>0?u.g[0]:u.h)>>>0).toString(p);if(u=f,x(u))return g+m;for(;g.length<6;)g="0"+g;m=g+m}},t.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function x(p){if(p.h!=0)return!1;for(let h=0;h<p.g.length;h++)if(p.g[h]!=0)return!1;return!0}function V(p){return p.h==-1}t.l=function(p){return p=re(this,p),V(p)?-1:x(p)?0:1};function R(p){const h=p.g.length,u=[];for(let m=0;m<h;m++)u[m]=~p.g[m];return new o(u,~p.h).add(b)}t.abs=function(){return V(this)?R(this):this},t.add=function(p){const h=Math.max(this.g.length,p.g.length),u=[];let m=0;for(let f=0;f<=h;f++){let g=m+(this.i(f)&65535)+(p.i(f)&65535),d=(g>>>16)+(this.i(f)>>>16)+(p.i(f)>>>16);m=d>>>16,g&=65535,d&=65535,u[f]=d<<16|g}return new o(u,u[u.length-1]&-2147483648?-1:0)};function re(p,h){return p.add(R(h))}t.j=function(p){if(x(this)||x(p))return w;if(V(this))return V(p)?R(this).j(R(p)):R(R(this).j(p));if(V(p))return R(this.j(R(p)));if(this.l(A)<0&&p.l(A)<0)return c(this.m()*p.m());const h=this.g.length+p.g.length,u=[];for(var m=0;m<2*h;m++)u[m]=0;for(m=0;m<this.g.length;m++)for(let f=0;f<p.g.length;f++){const g=this.i(m)>>>16,d=this.i(m)&65535,bt=p.i(f)>>>16,eo=p.i(f)&65535;u[2*m+2*f]+=d*eo,me(u,2*m+2*f),u[2*m+2*f+1]+=g*eo,me(u,2*m+2*f+1),u[2*m+2*f+1]+=d*bt,me(u,2*m+2*f+1),u[2*m+2*f+2]+=g*bt,me(u,2*m+2*f+2)}for(p=0;p<h;p++)u[p]=u[2*p+1]<<16|u[2*p];for(p=h;p<2*h;p++)u[p]=0;return new o(u,0)};function me(p,h){for(;(p[h]&65535)!=p[h];)p[h+1]+=p[h]>>>16,p[h]&=65535,h++}function et(p,h){this.g=p,this.h=h}function wt(p,h){if(x(h))throw Error("division by zero");if(x(p))return new et(w,w);if(V(p))return h=wt(R(p),h),new et(R(h.g),R(h.h));if(V(h))return h=wt(p,R(h)),new et(R(h.g),h.h);if(p.g.length>30){if(V(p)||V(h))throw Error("slowDivide_ only works with positive integers.");for(var u=b,m=h;m.l(p)<=0;)u=pn(u),m=pn(m);var f=Ue(u,1),g=Ue(m,1);for(m=Ue(m,2),u=Ue(u,2);!x(m);){var d=g.add(m);d.l(p)<=0&&(f=f.add(u),g=d),m=Ue(m,1),u=Ue(u,1)}return h=re(p,f.j(h)),new et(f,h)}for(f=w;p.l(h)>=0;){for(u=Math.max(1,Math.floor(p.m()/h.m())),m=Math.ceil(Math.log(u)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),g=c(u),d=g.j(h);V(d)||d.l(p)>0;)u-=m,g=c(u),d=g.j(h);x(g)&&(g=b),f=f.add(g),p=re(p,d)}return new et(f,p)}t.B=function(p){return wt(this,p).h},t.and=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)&p.i(m);return new o(u,this.h&p.h)},t.or=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)|p.i(m);return new o(u,this.h|p.h)},t.xor=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)^p.i(m);return new o(u,this.h^p.h)};function pn(p){const h=p.g.length+1,u=[];for(let m=0;m<h;m++)u[m]=p.i(m)<<1|p.i(m-1)>>>31;return new o(u,p.h)}function Ue(p,h){const u=h>>5;h%=32;const m=p.g.length-u,f=[];for(let g=0;g<m;g++)f[g]=h>0?p.i(g+u)>>>h|p.i(g+u+1)<<32-h:p.i(g+u);return new o(f,p.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=y,Xl=o}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});function J(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
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
 */class se{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
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
 */let cn="13.2.0";function kf(t){cn=t}/**
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
 */const en=new fs("@firebase/firestore");function Mt(t,...e){if(en.logLevel<=C.DEBUG){const n=e.map(Is);en.debug(`Firestore (${cn}): ${t}`,...n)}}function nr(t,...e){if(en.logLevel<=C.ERROR){const n=e.map(Is);en.error(`Firestore (${cn}): ${t}`,...n)}}function Ql(t,...e){if(en.logLevel<=C.WARN){const n=e.map(Is);en.warn(`Firestore (${cn}): ${t}`,...n)}}function Is(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function z(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,ec(t,i,n)}function ec(t,e,n){let i=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw nr(i),new Error(i)}function de(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||ec(e,r,i)}function tc(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends Qe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(se.UNAUTHENTICATED))}shutdown(){}}class Sf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _f{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(de(typeof e.accessToken=="string",42297,{Z:e}),new nc(e.accessToken,new se(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Ef{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=se.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Af{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new Ef(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable(()=>n(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class If{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,oe(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit(i=>{this.appCheck=i})}getToken(){return this.oe?Promise.resolve(new Bo(this.oe)):this.appCheck?this.appCheck.getToken().then(e=>e?(de(typeof e.token=="string",3470,{tokenResult:e}),new Bo(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class xf{constructor(e,n,i,r,s,o,a,l,c,y,w,b,A){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=y,this.apiKey=w,this._customHeaders=b,this.grpcFlowControlWindow=A}}const Kr="(default)";class Ln{constructor(e,n){this.projectId=e,this.database=n||Kr}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database===Kr}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}function $f(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(t.options.projectId,e)}/**
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
 */function Pf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Pf(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%62))}return i}}function Ce(t,e){return t<e?-1:t>e?1:0}function xs(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const r=t.charAt(i),s=e.charAt(i);if(r!==s)return Sr(r)===Sr(s)?Ce(r,s):Sr(r)?1:-1}return Ce(t.length,e.length)}const Nf=55296,Cf=57343;function Sr(t){const e=t.charCodeAt(0);return e>=Nf&&e<=Cf}function ic(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */const Ho="__name__";class xe{constructor(e,n,i){n===void 0?n=0:n>e.length&&z(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&z(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xe.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xe?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=xe.compareSegments(e.get(r),n.get(r));if(s!==0)return s}return Ce(e.length,n.length)}static compareSegments(e,n){const i=xe.isNumericId(e),r=xe.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?xe.extractNumericId(e).compare(xe.extractNumericId(n)):xs(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xl.fromString(e.substring(4,e.length-2))}}class Y extends xe{construct(e,n,i){return new Y(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new _(v.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const Rf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Mn=class Ft extends xe{construct(e,n,i){return new Ft(e,n,i)}static isValidIdentifier(e){return Rf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ho}static keyField(){return new Ft([Ho])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new _(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new _(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new _(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new _(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}};/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Y.fromString(e))}static fromName(e){return new he(Y.fromString(e).popFirst(5))}static empty(){return new he(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Y(e.slice()))}}/**
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
 */function Lf(t,e,n){if(!n)throw new _(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wo(t){if(!he.isDocumentKey(t))throw new _(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rc(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function $s(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z(12329,{type:typeof t})}function Ps(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$s(t);throw new _(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function sc(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Xn=null;function Mf(){return Xn===null?Xn=function(){return 268435456+Math.round(2147483648*Math.random())}():Xn++,"0x"+Xn.toString(16)}/**
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
 */function Of(t){return t==null}function Li(t){return t===0&&1/t==-1/0}/**
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
 */const _r="RestConnection",Vf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Uf{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${r}`,this.ce=this.databaseId.database===Kr?`project_id=${i}`:`project_id=${i}&database_id=${r}`}le(e,n,i,r,s){const o=Mf(),a=this.fe(e,n.toUriEncodedString());Mt(_r,`Sending RPC '${e}' ${o}:`,a,i);const l={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(l,r,s);const{host:c}=new URL(a),y=Wn(c);return this.de(e,a,l,i,y).then(w=>(Mt(_r,`Received RPC '${e}' ${o}: `,w),w),w=>{throw Ql(_r,`RPC '${e}' ${o} failed with error: `,w,"url: ",a,"request:",i),w})}me(e,n,i,r,s,o){return this.le(e,n,i,r,s)}he(e,n,i){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}fe(e,n){const i=Vf[e];let r=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */var jo,P,q,Ht,qr,mi,gi,kn;function zf(t){switch(t){case v.OK:return z(64938);case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0;default:return z(15467,{code:t})}}function Go(t){if(t===void 0)return nr("RPC_ERROR","HTTP error has no status"),v.UNKNOWN;switch(t){case 200:return v.OK;case 400:return v.FAILED_PRECONDITION;case 401:return v.UNAUTHENTICATED;case 403:return v.PERMISSION_DENIED;case 404:return v.NOT_FOUND;case 409:return v.ABORTED;case 416:return v.OUT_OF_RANGE;case 429:return v.RESOURCE_EXHAUSTED;case 499:return v.CANCELLED;case 500:return v.UNKNOWN;case 501:return v.UNIMPLEMENTED;case 503:return v.UNAVAILABLE;case 504:return v.DEADLINE_EXCEEDED;default:return t>=200&&t<300?v.OK:t>=400&&t<500?v.FAILED_PRECONDITION:t>=500&&t<600?v.INTERNAL:v.UNKNOWN}}/**
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
 */(P=jo||(jo={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";class Ff extends Uf{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,r,s){var l;const o=JSON.stringify(r);let a;try{const c={method:"POST",headers:i,body:o};s&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const y=c,w=y==null?void 0:y.message,b=y!=null&&y.cause?String(y.cause):void 0,A=(w&&b?`${w} (${b})`:w??b)??(y==null?void 0:y.statusText)??String(c);throw new _(Go(y==null?void 0:y.status),`Request failed with error: ${A}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const y=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new _(Go(a.status),`Request failed with error: ${y??a.statusText}`)}return a.json()}}/**
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
 */class Bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Bf("Invalid base64 string: "+s):s}}(e);return new ve(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function On(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}ve.EMPTY_BYTE_STRING=new ve("");/**
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
 */class T{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new T;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,r=this.be(e,i);if(r==0&&this.isEmpty(i)||(n+=r)<T.we)return;if(n>T.ge)return void(this.exponent=Number(T.Fe));let s=this.ve(n,i);this.xe(n,s,i)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let r=-i;if(e.length-i>T.De){let s=e[T.De]>=5,o=new Array(T.De).fill(0);for(let a=0;a<T.De;a++)o[a]=e[a+i];s&&(r+=this.Ne(o)),e=o,i=0}for(let s=e.length-1;s>=i;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return r}Se(e){let n=e.length;for(let i=0;i<n;i++){let r=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=r<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,r=Number(i)/T.Ce;return Math.floor(Number(e)*T.Be+this.log2(r))}log2(e){return T.Qe*Math.log(e)}xe(e,n,i){let r=this.Ie;this.Oe(-n,r);let s=this.pe;this.Me(i,r,s),this.qe(s),BigInt(r[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=T.Ue)<=0||(n+=this.$e(s),BigInt(n)>=T.Fe?this.exponent=Number(T.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(T.je[0],n);let i=T.je;e<0&&(e=-e,i=T.Ke);let r=T.ze,s=32,o=!0;for(;e>0;)e>=r&&(o?(this.ke(i[s],n),o=!1):this.We(n,i[s],n),e-=r),s-=1,r*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let r=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(r)}Ge(e,n,i){for(let r=0;r<i.length;r++)i[r]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let r=5;r>=0;r--)for(let s=5;s>=0;s--){let o=this.Ae[r]*this.Re[s];i[s+r+1]=i[s+r+1]+(o&T.Xe)&0xffffffffffffffffn,i[s+r]=i[s+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)i[r-1]=i[r-1]+(i[r]>>32n)&0xffffffffffffffffn,i[r]&=T.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let r=this.Re;this.Ye(n,r);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let l=e[o]*r[a];i[a+o+1]=i[a+o+1]+(l&T.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=T.Xe}qe(e){let n=e.length-1;e[0]&=T.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=T.Xe}Le(e){let n=31-T.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&T.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&T.Xe,n[2]=e[2]>>32n,n[3]=e[2]&T.Xe,n[4]=e[3]>>32n,n[5]=e[3]&T.Xe}tt(e,n){let i=e.length-1,r=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<r&T.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>r);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&T.Xe|e[o+1]>>r);e[i]=e[i]<<s&T.Xe}}rt(e,n,i){let r=n;e[r]=e[r]+i&0xffffffffffffffffn;for(let s=r+1-1;s>=1&&(e[s]&T.nt)!=0n;s--)e[s]&=T.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}T.De=59,T.ge=646456993,T.we=-646457032,T.Ce=0xccccccccccccd00,T.it=0x8000000000000000n,T.ze=2147483648,T.Xe=0x00000000ffffffffn,T.nt=0xffffffff00000000n,T.Be=Math.log(10)/Math.log(2),T.Qe=1/Math.log(2),T.Ue=2147483647,T.Fe=0xffffffffn,T.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],T.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class k{constructor(e,n,i,r){this.negative=e,this.st=n,this.Ve=i,this.Te=r}exponent(){return this.st-T.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===J(k,q,"f",Ht)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===J(k,q,"f",Ht)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+J(k,q,"m",qr).call(k,this.Ve)+J(k,q,"m",qr).call(k,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return k.NaN;if(!isFinite(e))return e<0?k._t:k.ct;if(e===0)return Math.sign(1/e)>0?k.lt:k.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let r=BigInt.asUintN(64,i<<12n),s=2047&Number(i>>52n);if(s===0){const o=T.et(r);r=o<63?r<<BigInt(o+1):0n,s=-o}return new k(e<0,J(k,q,"m",kn).call(k,s-1023),r,0n)}static fromString(e){if(e==="NaN")return k.NaN;if(e==="-Infinity")return k._t;if(e==="Infinity"||e==="+Infinity")return k.ct;const n=new Array(e.length).fill(0);let i=0,r=0,s=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;J(k,q,"m",mi).call(k,e,i);)n[r++]=J(k,q,"m",gi).call(k,e,i++);if(e[i]==="."){const l=++i;for(;J(k,q,"m",mi).call(k,e,i);)n[r++]=J(k,q,"m",gi).call(k,e,i++);s=l-i}if(e[i]==="e"||e[i]==="E"){let l=0;i++;let c=1;e[i]==="-"?(c=-1,i++):e[i]==="+"&&i++;const y=i;for(;J(k,q,"m",mi).call(k,e,i);)if(l=10*l+J(k,q,"m",gi).call(k,e,i++),i-y>9)throw new Error("Exponent too large "+e);if(i===y)throw new Error("Invalid number "+e);s+=l*c}if(r===0||i!==e.length)throw new Error("Invalid number "+e);const a=T.ye(n.slice(0,r),s);return new k(o,a.exponent,a.Ve,a.Te)}}q=k,qr=function(e){return e.toString(16).padStart(16,"0")},mi=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},gi=function(e,n){return e.codePointAt(n)-48},kn=function(e){return e+T.Ue},Ht={value:Number(T.Fe)},k.lt=new k(!1,0,0n,0n),k.ft=new k(!0,0,0n,0n),k.NaN=new k(!1,J(k,q,"f",Ht),1n<<63n,0n),k._t=new k(!0,J(k,q,"f",Ht),0n,0n),k.ct=new k(!1,J(k,q,"f",Ht),0n,0n),new k(!0,J(k,q,"m",kn).call(k,63),0n,0n),new k(!1,J(k,q,"m",kn).call(k,0),0n,0n),new k(!0,J(k,q,"m",kn).call(k,0),0n,0n);/**
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
 */const Hf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=Hf.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:le(t.seconds),nanos:le(t.nanos)}}function le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?ve.fromBase64String(t):ve.fromUint8Array(t)}/**
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
 */function ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function Yn(t,e){if(!rc(t))throw new _(v.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(r&&typeof a!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new _(v.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ko=-62135596800,qo=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(e){return H.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*qo);return new H(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new _(v.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return H._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(r+1000000000n))}return new H(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new _(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ko)throw new _(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qo}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new _(v.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yn(e,H._jsonSchema))return new H(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ko;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:ue("string",H._jsonSchemaVersion),seconds:ue("number"),nanoseconds:ue("number")};function Wf(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function oc(t){const e=t.mapValue.fields.__previous_value__;return Wf(e)?oc(e):e}function Yr(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new H(e.seconds,e.nanos)}/**
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
 */const ac="__type__",lc="__vector__",cc="value",jf="server_timestamp",hc="__min__",Ds="__max__",ct="__regex__",Oi="pattern",Vi="options",Un="__oid__",Jn="__int__",tn="__decimal128__",xt="__request_timestamp__",Ui="seconds",zi="increment",ir="__binary__";var L,ge;(ge=L||(L={})).dt="regexValue",ge.Et="bsonObjectIdValue",ge.Vt="int32Value",ge.Tt="decimal128Value",ge.It="bsonTimestampValue",ge.At="bsonBinaryValue",ge.Rt="minKeyValue",ge.Pt="maxKeyValue",ge.yt="maxValue",ge.bt="vectorValue",ge.wt="serverTimestampValue",ge.gt="regularMapValue";const Yo={[lc]:L.bt,[Ds]:L.yt,[jf]:L.wt},dc={[ct]:L.dt,[Un]:L.Et,[Jn]:L.Vt,[tn]:L.Tt,[xt]:L.It,[ir]:L.At,[hc]:L.Rt,[Ds]:L.Pt};function Jr(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return z(28295,{value:t});switch(function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return L.gt;const r=i.mapValue.fields,s=(a=r[ac])==null?void 0:a.stringValue;if(s&&Yo[s])return Yo[s];if(On(r)===1){const l=Object.keys(r);return dc[l[0]]??L.gt}return L.gt}(t)){case L.wt:return 6;case L.yt:return 9007199254740991;case L.bt:return 14;case L.dt:return 12;case L.Et:return 10;case L.Vt:case L.Tt:return 3;case L.It:return 5;case L.At:return 8;case L.Rt:return 1;case L.Pt:return 16;default:return 15}}function Zr(t,e,n){if(t===e)return!0;const i=Jr(t);if(i!==Jr(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return Yr(t).isEqual(Yr(e));case 4:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Vn(s.timestampValue),l=Vn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 7:return t.stringValue===e.stringValue;case 8:return function(s,o){return qf(s,o)===0}(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return function(s,o){return le(s.geoPointValue.latitude)===le(o.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(o.geoPointValue.longitude)}(t,e);case 3:return function(s,o,a){if(nn(s)&&nn(o))return uc(s,o)===0;if("integerValue"in s&&"integerValue"in o||Fi(s)&&Fi(o))return zn(s)===zn(o);let l,c;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(l=le(s.doubleValue),c=le(o.doubleValue),l===c?Li(l)===Li(c):!!(a===void 0||a.vt)&&isNaN(l)&&isNaN(c))}(t,e,n);case 13:return ic(t.arrayValue.values||[],e.arrayValue.values||[],(r,s)=>Zr(r,s,n));case 14:case 15:return function(s,o,a){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(On(l)!==On(c))return!1;for(const y in l)if(l.hasOwnProperty(y)&&(c[y]===void 0||!Zr(l[y],c[y],a)))return!1;return!0}(t,e,n);case 5:return Kf(t,e)===0;case 12:return Yf(t,e)===0;case 10:return Jf(t,e)===0;default:return z(52216,{left:t})}}function zn(t){let e;return e=Fi(t)?t.mapValue.fields[Jn].integerValue:t.integerValue||t.doubleValue,le(e)}function Gf(t){return t.mapValue.fields[tn].stringValue}function Jo(t,e){if(nn(t)||nn(e))return uc(t,e);const n=zn(t),i=zn(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:Ce(n,i)}function uc(t,e){const n=Zo(t),i=Zo(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function Zo(t){return nn(t)?k.fromString(Gf(t)):k.fromNumber(zn(t))}function Kf(t,e){var a,l,c,y,w,b,A,x,V,R,re,me;const n=(c=(l=(a=t.mapValue.fields)==null?void 0:a[xt].mapValue)==null?void 0:l.fields)==null?void 0:c[Ui],i=(b=(w=(y=e.mapValue.fields)==null?void 0:y[xt].mapValue)==null?void 0:w.fields)==null?void 0:b[Ui],r=(V=(x=(A=t.mapValue.fields)==null?void 0:A[xt].mapValue)==null?void 0:x.fields)==null?void 0:V[zi],s=(me=(re=(R=e.mapValue.fields)==null?void 0:R[xt].mapValue)==null?void 0:re.fields)==null?void 0:me[zi],o=Jo(n,i);return o!==0?o:Jo(r,s)}function Xo(t){var a;if("bytesValue"in t)return{subtype:0,bytes:Mi(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[ir],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const r=Mi(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const s=r[0],o=r.slice(1);return{subtype:s,bytes:ve.fromUint8Array(o)}}function qf(t,e){const n=Xo(t),i=Xo(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function Yf(t,e){var c,y,w,b,A,x,V,R,re,me,et,wt,pn,Ue,p,h;const n=t.mapValue.fields,i=((b=(w=(y=(c=n==null?void 0:n[ct])==null?void 0:c.mapValue)==null?void 0:y.fields)==null?void 0:w[Oi])==null?void 0:b.stringValue)??"",r=((R=(V=(x=(A=n==null?void 0:n[ct])==null?void 0:A.mapValue)==null?void 0:x.fields)==null?void 0:V[Vi])==null?void 0:R.stringValue)??"",s=e.mapValue.fields,o=((wt=(et=(me=(re=s==null?void 0:s[ct])==null?void 0:re.mapValue)==null?void 0:me.fields)==null?void 0:et[Oi])==null?void 0:wt.stringValue)??"",a=((h=(p=(Ue=(pn=s==null?void 0:s[ct])==null?void 0:pn.mapValue)==null?void 0:Ue.fields)==null?void 0:p[Vi])==null?void 0:h.stringValue)??"",l=xs(i,o);return l!==0?l:Ce(r,a)}function Jf(t,e){var n,i,r,s;return xs(((i=(n=t.mapValue.fields)==null?void 0:n[Un])==null?void 0:i.stringValue)??"",((s=(r=e.mapValue.fields)==null?void 0:r[Un])==null?void 0:s.stringValue)??"")}function nn(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return On(e)===1&&e[tn]&&!!e[tn].stringValue}function Fi(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return On(e)===1&&((i=e[Jn])==null?void 0:i.integerValue)!==void 0}function Er(t){return!!t&&"mapValue"in t}function xn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return qn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=xn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xn(t.arrayValue.values[n]);return e}return{...t}}/**
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
 */new Set(Object.values(dc));/**
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
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new H(0,0))}static max(){return new G(new H(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Bi{constructor(e,n){this.comparator=e,this.root=n||Z.EMPTY}insert(e,n){return new Bi(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new Bi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qn(this.root,e,this.comparator,!0)}}class Qn{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??Z.RED,this.left=r??Z.EMPTY,this.right=s??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new Z(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Z.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,n,i,r,s){return this}insert(e,n,i){return new Z(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Hi{constructor(e){this.comparator=e,this.data=new Bi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(e){return new Qo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Hi(this.comparator);return n.data=e,n}}class Qo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(Mn.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Hi(Mn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ic(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Er(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xn(n)}setAll(e){let n=Mn.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=xn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Er(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Er(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){qn(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new we(xn(this.value))}}/**
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
 */class Be{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Be(e,0,G.min(),G.min(),G.min(),we.empty(),0)}static newFoundDocument(e,n,i,r){return new Be(e,1,n,G.min(),i,r,0)}static newNoDocument(e,n){return new Be(e,2,n,G.min(),G.min(),we.empty(),0)}static newUnknownDocument(e,n){return new Be(e,3,n,G.min(),G.min(),we.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zf{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}/**
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
 */function pc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Li(e)?"-0":e}}function yi(t){return{integerValue:""+t}}function Xf(t,e,n){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Li(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?yi(e):pc(t,e)}/**
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
 */class rr{constructor(){this._=void 0}}class fc extends rr{}class Qf extends rr{constructor(e){super(),this.elements=e}}class em extends rr{constructor(e){super(),this.elements=e}}class Ns extends rr{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class tm extends Ns{}class nm extends Ns{}class im extends Ns{}/**
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
 */class rm{constructor(e,n){this.field=e,this.transform=n}}class We{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class sr{}class mc extends sr{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Cs extends sr{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class gc extends sr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yc extends sr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class sm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function om(t,e){return wi(t,e.toTimestamp())}function Ar(t){return de(!!t,49232),G.fromTimestamp(function(n){const i=Vn(n);return new H(i.seconds,i.nanos)}(t))}function wc(t,e){return Xr(t,e).canonicalString()}function Xr(t,e){const n=function(r){return new Y(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Wi(t,e){return wc(t.databaseId,e.path)}function ta(t,e){const n=function(r){const s=Y.fromString(r);return de(bc(s),10190,{key:s.toString()}),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new _(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(function(r){return de(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}(n))}function na(t,e,n){return{name:Wi(t,e),fields:n.value.mapValue.fields}}function am(t,e){return"found"in e?function(i,r){de(!!r.found,43571),r.found.name,r.found.updateTime;const s=ta(i,r.found.name),o=Ar(r.found.updateTime),a=r.found.createTime?Ar(r.found.createTime):G.min(),l=new we({mapValue:{fields:r.found.fields}});return Be.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(i,r){de(!!r.missing,3894),de(!!r.readTime,22933);const s=ta(i,r.missing),o=Ar(r.readTime);return Be.newNoDocument(s,o)}(t,e):z(7234,{result:e})}function lm(t,e){let n;if(e instanceof mc)n={update:na(t,e.key,e.value)};else if(e instanceof gc)n={delete:Wi(t,e.key)};else if(e instanceof Cs)n={update:na(t,e.key,e.data),updateMask:cm(e.fieldMask)};else{if(!(e instanceof yc))return z(16599,{Ot:e.type});n={verify:Wi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof fc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qf)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof em)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof tm)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof nm)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof im)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw z(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:om(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z(27497)}(t,e.precondition)),n}function cm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function vc(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */function Rs(t){return new sm(t,!0)}/**
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
 */class hm{}class dm extends hm{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.qt=!1}Lt(){if(this.qt)throw new _(v.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.le(e,Xr(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(v.UNKNOWN,s.toString())})}me(e,n,i,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.me(e,Xr(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new _(v.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}}async function um(t,e){const n=tc(t),i={writes:e.map(r=>lm(n.serializer,r))};await n.le("Commit",n.serializer.databaseId,Y.emptyPath(),i)}async function kc(t,e){const n=tc(t),i={documents:e.map(a=>Wi(n.serializer,a))},r=await n.me("BatchGetDocuments",n.serializer.databaseId,Y.emptyPath(),i,e.length),s=new Map;r.forEach(a=>{const l=am(n.serializer,a);s.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=s.get(a.toString());de(!!l,55234,{key:a}),o.push(l)}),o}/**
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
 */const Tc="ComponentProvider",$n=new Map;function Sc(t){if(t._terminated)throw new _(v.FAILED_PRECONDITION,"The client has already been terminated.");if(!$n.has(t)){Mt(Tc,"Initializing Datastore");const e=function(s){return new Ff(s)}(function(s,o,a,l,c){return new xf(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sc(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l,c._customHeaders,c.grpcFlowControlWindow)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Rs(t._databaseId),i=function(s,o,a,l){return new dm(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);$n.set(t,i)}return $n.get(t)}const pm=1048576,_c="firestore.googleapis.com",ia=!0;class ra{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new _(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_c,this.ssl=ia}else this.host=e.host,this.ssl=e.ssl??ia;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pm)throw new _(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(i,r,s,o){if(r===!0&&o===!0)throw new _(v.INVALID_ARGUMENT,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sc(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new _(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new _(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new _(v.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new _(v.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(i,r){if(i===r)return!0;if(!i||!r)return!1;const s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(const a of s)if(i[a]!==r[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}class or{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ra({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ra(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Tf;switch(i.type){case"firstParty":return new Af(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=$n.get(n);i&&(Mt(Tc,"Removing Datastore"),$n.delete(n),i.terminate())}(this),Promise.resolve()}}function fm(t,e){const n=typeof t=="object"?t:ll(),i=typeof t=="string"?t:e||"(default)",r=gs(n,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const s=Nh("firestore");s&&mm(r,...s)}return r}function mm(t,e,n,i={}){var c;t=Ps(t,or);const r=Wn(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&sl(`https://${a}`),s.host!==_c&&s.host!==a&&Ql("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:r,emulatorOptions:i};if(!Ct(l,o)&&(t._setSettings(l),i.mockUserToken)){let y,w;if(typeof i.mockUserToken=="string")y=i.mockUserToken,w=se.MOCK_USER;else{y=Ch(i.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new _(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new se(b)}t._authCredentials=new Sf(new nc(y,w))}}/**
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
 */class Ls{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ls(this.firestore,e,this._query)}}class X{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new X(this.firestore,e,this._key)}toJSON(){return{type:X._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Yn(n,X._jsonSchema))return new X(e,i||null,new he(Y.fromString(n.referencePath)))}}X._jsonSchemaVersion="firestore/documentReference/1.0",X._jsonSchema={type:ue("string",X._jsonSchemaVersion),referencePath:ue("string")};class Fn extends Ls{constructor(e,n,i){super(e,n,function(s){return new Zf(s)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new he(e))}withConverter(e){return new Fn(this.firestore,e,this._path)}}function Pn(t,e,...n){if(t=K(t),arguments.length===1&&(e=Df.newId()),Lf("doc","path",e),t instanceof or){const i=Y.fromString(e,...n);return Wo(i),new X(t,null,new he(i))}{if(!(t instanceof X||t instanceof Fn))throw new _(v.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Y.fromString(e,...n));return Wo(i),new X(t.firestore,t instanceof Fn?t.converter:null,new he(i))}}/**
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
 */class ce{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new _(v.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new ce(ve.fromBase64String(e),n)}catch(i){throw new _(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new ce(ve.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:ce._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Yn(e,ce._jsonSchema)){const n=e.subtype??0;return ce.fromBase64String(e.bytes,n)}}}ce._jsonSchemaVersion="firestore/bytes/1.0",ce._jsonSchema={type:ue("string",ce._jsonSchemaVersion),bytes:ue("string"),subtype:{...ue("number"),optional:!0}};/**
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
 */class Ms{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new _(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Os{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Vs{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Us{constructor(e){this.stringValue=e,this.value=k.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
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
 */class ar{constructor(e){this._methodName=e}}/**
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
 */class Ne{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new _(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new _(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ne._jsonSchemaVersion}}static fromJSON(e){if(Yn(e,Ne._jsonSchema))return new Ne(e.latitude,e.longitude)}}Ne._jsonSchemaVersion="firestore/geoPoint/1.0",Ne._jsonSchema={type:ue("string",Ne._jsonSchemaVersion),latitude:ue("number"),longitude:ue("number")};/**
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
 */class zs{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Ye{constructor(){this.type="MaxKey"}static instance(){return Ye.MAX_KEY_VALUE_INSTANCE||(Ye.MAX_KEY_VALUE_INSTANCE=new Ye),Ye.MAX_KEY_VALUE_INSTANCE}}Ye.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class Je{constructor(){this.type="MinKey"}static instance(){return Je.MIN_KEY_VALUE_INSTANCE||(Je.MIN_KEY_VALUE_INSTANCE=new Je),Je.MIN_KEY_VALUE_INSTANCE}}Je.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class Fs{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class Ae{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yn(e,Ae._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ae(e.vectorValues);throw new _(v.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ae._jsonSchemaVersion="firestore/vectorValue/1.0",Ae._jsonSchema={type:ue("string",Ae._jsonSchemaVersion),vectorValues:ue("object")};/**
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
 */const gm=/^__.*__$/;class ym{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new mc(e,this.data,n,this.fieldTransforms)}}class Ec{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ac(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:t})}}class Bs{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Bs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Gi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Ac(this.dataSource)&&gm.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class wm{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Rs(e)}createContext(e,n,i,r=!1){return new Bs({dataSource:e,methodName:n,targetDoc:i,path:Mn.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bm(t){const e=t._freezeSettings(),n=Rs(t._databaseId);return new wm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vm(t,e,n,i,r,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,r);Ws("Data must be an object, but it was:",o,i);const a=Ic(i,o);let l,c;if(s.merge)l=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const y=[];for(const w of s.mergeFields){const b=ji(e,w,n);if(!o.contains(b))throw new _(v.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);Dc(y,b)||y.push(b)}l=new Ot(y),c=o.fieldTransforms.filter(w=>l.covers(w.field))}else l=null,c=o.fieldTransforms;return new ym(new we(a),l,c)}class lr extends ar{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lr}}class Hs extends ar{_toFieldTransform(e){return new rm(e.path,new fc)}isEqual(e){return e instanceof Hs}}function km(t,e,n,i){const r=t.createContext(1,e,n);Ws("Data must be an object, but it was:",r,i);const s=[],o=we.empty();qn(i,(l,c)=>{const y=Pc(e,l,n);c=K(c);const w=r.childContextForFieldPath(y);if(c instanceof lr)s.push(y);else{const b=cr(c,w);b!=null&&(s.push(y),o.set(y,b))}});const a=new Ot(s);return new Ec(o,a,r.fieldTransforms)}function Tm(t,e,n,i,r,s){const o=t.createContext(1,e,n),a=[ji(e,i,n)],l=[r];if(s.length%2!=0)throw new _(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)a.push(ji(e,s[b])),l.push(s[b+1]);const c=[],y=we.empty();for(let b=a.length-1;b>=0;--b)if(!Dc(c,a[b])){const A=a[b];let x=l[b];x=K(x);const V=o.childContextForFieldPath(A);if(x instanceof lr)c.push(A);else{const R=cr(x,V);R!=null&&(c.push(A),y.set(A,R))}}const w=new Ot(c);return new Ec(y,w,o.fieldTransforms)}function cr(t,e,n){if($c(t=K(t)))return Ws("Unsupported field value:",e,t),Ic(t,e);if(t instanceof ar)return function(r,s){if(!Ac(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let c=cr(l,s.childContextForArray(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,s,o){if((r=K(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=H.fromDate(r);return{timestampValue:wi(s.serializer,a)}}if(r instanceof H){const a=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wi(s.serializer,a)}}if(xc(r)){const a=H.fromInstant(r),l=new H(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:wi(s.serializer,l)}}if(r instanceof Ne)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ce)return r.subtype===0?{bytesValue:ea(s.serializer,r._byteString)}:function(l,c){const y=c.toUint8Array(),w=new Uint8Array(y.length+1);return w[0]=c.subtype,w.set(y,1),{mapValue:{fields:{[ir]:{bytesValue:ea(l,ve.fromUint8Array(w))}}}}}(s.serializer,r);if(r instanceof X){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:wc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ae)return function(l,c){const y=l instanceof Ae?l.toArray():l;return{mapValue:{fields:{[ac]:{stringValue:lc},[cc]:{arrayValue:{values:y.map(b=>{if(typeof b!="number")throw c.createError("VectorValues must only contain numeric values.");return pc(c.serializer,b)})}}}}}}(r,s);if(r instanceof Fs)return function(l){return{mapValue:{fields:{[ct]:{mapValue:{fields:{[Oi]:{stringValue:l.pattern},[Vi]:{stringValue:l.options}}}}}}}}(r);if(r instanceof Os)return function(l){return{mapValue:{fields:{[Un]:{stringValue:l.value}}}}}(r);if(r instanceof zs)return function(l){return{mapValue:{fields:{[Jn]:yi(l.value)}}}}(r);if(r instanceof Us)return function(l){return{mapValue:{fields:{[tn]:{stringValue:l.stringValue}}}}}(r);if(r instanceof Vs)return function(l){return{mapValue:{fields:{[xt]:{mapValue:{fields:{[Ui]:yi(l.seconds),[zi]:yi(l.increment)}}}}}}}(r);if(r instanceof Je)return function(){return{mapValue:{fields:{[hc]:{nullValue:"NULL_VALUE"}}}}}();if(r instanceof Ye)return function(){return{mapValue:{fields:{[Ds]:{nullValue:"NULL_VALUE"}}}}}();if(vc(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${$s(r)}`)}(t,e)}function Ic(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(t,(i,r)=>{const s=cr(r,e.childContextForField(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function xc(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function $c(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof H||t instanceof Ne||t instanceof ce||t instanceof X||t instanceof ar||t instanceof Ae||t instanceof Je||t instanceof Ye||t instanceof zs||t instanceof Us||t instanceof Fs||t instanceof Os||t instanceof Vs||xc(t)||vc(t))}function Ws(t,e,n){if(!$c(n)||!rc(n)){const i=$s(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function ji(t,e,n){if((e=K(e))instanceof Ms)return e._internalPath;if(typeof e=="string")return Pc(t,e);throw Gi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sm=new RegExp("[~\\*/\\[\\]]");function Pc(t,e,n){if(e.search(Sm)>=0)throw Gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ms(...e.split("."))._internalPath}catch{throw Gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Gi(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new _(v.INVALID_ARGUMENT,a+t+l)}function Dc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ki{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ji("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _m extends Ki{data(){return super.data()}}class Em{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Fi(e))return this.convertToInt32Value(e.mapValue);if(nn(e))return this.convertToDecimal128Value(e.mapValue)}return le(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Mi(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Ye.instance();case 1:return Je.instance();default:throw z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return qn(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var i,r,s;const n=(s=(r=(i=e.fields)==null?void 0:i[cc].arrayValue)==null?void 0:r.values)==null?void 0:s.map(o=>le(o.doubleValue));return new Ae(n)}convertToBsonObjectId(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[Un])==null?void 0:r.stringValue)??"";return new Os(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[ir],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=Mi(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const s=r[0],o=r.slice(1);return new ce(ve.fromUint8Array(o),s)}convertToBsonTimestamp(e){var s,o,a,l,c,y,w;const n=(s=e.fields)==null?void 0:s[xt],i=Number((l=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[Ui])==null?void 0:l.integerValue),r=Number((w=(y=(c=n==null?void 0:n.mapValue)==null?void 0:c.fields)==null?void 0:y[zi])==null?void 0:w.integerValue);return new Vs(i,r)}convertToRegexValue(e){var r,s,o,a,l,c,y,w,b,A;const n=((l=(a=(o=(s=(r=e.fields)==null?void 0:r[ct])==null?void 0:s.mapValue)==null?void 0:o.fields)==null?void 0:a[Oi])==null?void 0:l.stringValue)??"",i=((A=(b=(w=(y=(c=e.fields)==null?void 0:c[ct])==null?void 0:y.mapValue)==null?void 0:w.fields)==null?void 0:b[Vi])==null?void 0:A.stringValue)??"";return new Fs(n,i)}convertToInt32Value(e){var i,r;const n=Number((r=(i=e.fields)==null?void 0:i[Jn])==null?void 0:r.integerValue);return new zs(n)}convertToDecimal128Value(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[tn])==null?void 0:r.stringValue)??"";return new Us(n)}convertGeoPoint(e){return new Ne(le(e.latitude),le(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=oc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new H(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Y.fromString(e);de(bc(i),9688,{name:e});const r=new Ln(i.get(1),i.get(3)),s=new he(i.popFirst(5));return r.isEqual(n)||nr(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Am(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Nc extends Em{constructor(e){super(),this.firestore=e}convertBytes(e){return new ce(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,n)}}function Cc(t){const e=Sc((t=Ps(t,X)).firestore),n=new Nc(t.firestore);return kc(e,[t._key]).then(i=>{de(i.length===1,15618);const r=i[0];return new Ki(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)})}function Im(){return new Hs("serverTimestamp")}const sa="4.19.1";/**
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
 */class js{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Rc{constructor(e,n,i=1e3,r=1.5,s=6e4){this.t=e,this.timerId=n,this.i=i,this.o=r,this.h=s,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(e){this.cancel();const n=Math.floor(this.u+this.p()),i=Math.max(0,Date.now()-this._),r=Math.max(0,n-i);r>0&&Mt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.u} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,r,()=>(this._=Date.now(),e())),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}function ei(t,e){if((t=K(t)).firestore!==e)throw new _(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let xm=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new _(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await kc(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new gc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=he.fromPath(i);this.mutations.push(new yc(r,this.precondition(r)))}),await um(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw z(50498,{R:e.constructor.name});n=G.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new _(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(G.min())?We.exists(!1):We.updateTime(n):We.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(G.min()))throw new _(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return We.updateTime(n)}return We.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */const $m={maxAttempts:5};/**
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
 */class Pm{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.I=i.maxAttempts,this.P=new Rc(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A(async()=>{const e=new xm(this.datastore),n=this.v(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.F(r)}))}).catch(i=>{this.F(i)})})}v(e){try{const n=this.updateFunction(e);return!Of(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}F(e){this.I>0&&this.B(e)?(this.I-=1,this.asyncQueue.enqueueAndForget(()=>(this.D(),Promise.resolve()))):this.deferred.reject(e)}B(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!zf(n)}return!1}}/**
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
 */function Ir(){return typeof document<"u"?document:null}/**
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
 */class Gs{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new js,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Gs(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */const oa="AsyncQueue";class Dm{constructor(e=Promise.resolve()){this.k=[],this.O=!1,this.C=[],this.S=null,this.q=!1,this.M=!1,this.N=[],this.P=new Rc(this,"async_queue_retry"),this.L=()=>{const i=Ir();i&&Mt(oa,"Visibility state changed to "+i.visibilityState),this.P.T()},this.W=e;const n=Ir();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.U(),this.j(e)}enterRestrictedMode(e){if(!this.O){this.O=!0,this.M=e||!1;const n=Ir();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.L)}}enqueue(e){if(this.U(),this.O)return new Promise(()=>{});const n=new js;return this.j(()=>this.O&&this.M?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.k.push(e),this.$()))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(e){if(!function(i){return i.name==="IndexedDbTransactionError"}(e))throw e;Mt(oa,"Operation failed with retryable error: "+e)}this.k.length>0&&this.P.A(()=>this.$())}}j(e){const n=this.W.then(()=>(this.q=!0,e().catch(i=>{this.S=i,this.q=!1;const r=aa(i);throw nr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.q=!1,i))));return this.W=n,n}enqueueAfterDelay(e,n,i){this.U(),this.N.indexOf(e)>-1&&(n=0);const r=Gs.createAndSchedule(this,e,n,i,s=>this.G(s));return this.C.push(r),r}U(){this.S&&z(47125,{K:aa(this.S)})}verifyOperationInProgress(){}async H(){let e;do e=this.W,await e;while(e!==this.W)}J(e){for(const n of this.C)if(n.timerId===e)return!0;return!1}X(e){return this.H().then(()=>{this.C.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.C)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.H()})}Y(e){this.N.push(e)}G(e){const n=this.C.indexOf(e);this.C.splice(n,1)}}function aa(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */class Nm{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=bm(e)}get(e){const n=ei(e,this._firestore),i=new Nc(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return z(24041);const s=r[0];if(s.isFoundDocument())return new Ki(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new Ki(this._firestore,i,n._key,null,n.converter);throw z(18433,{doc:s})})}set(e,n,i){const r=ei(e,this._firestore),s=Am(r.converter,n,i),o=vm(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=ei(e,this._firestore);let o;return o=typeof(n=K(n))=="string"||n instanceof Ms?Tm(this._dataReader,"Transaction.update",s._key,n,i,r):km(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ei(e,this._firestore);return this._transaction.delete(n._key),this}}function Cm(t,e,n){t=Ps(t,or);const i=Sc(t),r={...$m,...n};(function(a){if(a.maxAttempts<1)throw new _(v.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=new js;return new Pm(function(){return new Dm}(),i,r,o=>e(new Nm(t,o)),s).V(),s.promise}/**
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
 */(function(){kf(`${on}_lite`),Xt(new Rt("firestore/lite",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new or(new _f(e.getProvider("auth-internal")),new If(r,e.getProvider("app-check-internal")),$f(r,n),r);return i&&s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),ut("firestore-lite",sa,""),ut("firestore-lite",sa,"esm2020")})();const Rm={C:0,Cs:1,Ds:3,E:4,Fs:6,G:7,A:9},Lc=t=>{const[,e,n]=/^([A-G]s?)(\d)$/.exec(t);return(Number(n)+1)*12+Rm[e]},Lm=["A0","C1","Ds1","Fs1","A1","C2","Ds2","Fs2","A2","C3","Ds3","Fs3","A3","C4","Ds4","Fs4","A4","C5","Ds5","Fs5","A5","C6","Ds6","Fs6","A6","C7","Ds7","Fs7","A7","C8"],Mm=["C1","G1","C2","G2","C3","G3","C4","G4","C5","G5","C6","G6","C7","G7"].map(Lc),Om=Array.from({length:23},(t,e)=>e===22?108:21+e*4),la=(t,e)=>e.flatMap(n=>[1,2,3].map(i=>({key:n,layer:i,url:`${t}/${n}-${i}.mp3`})));Lm.map(t=>({key:Lc(t),layer:1,url:`piano/${t}.mp3`})),la("upright1",Mm),la("upright2",Om);const ca=1024;Float32Array.from({length:ca},(t,e)=>.5-.5*Math.cos(2*Math.PI*e/ca));const ti={en:[["Bows up!","Deep breath!"],["Keep the bow going!","Keep the air going!"],["Tip: keep the bow moving evenly through the long notes.","Tip: keep your breath steady through the long notes."],[/fingerings, bowings and dynamics/g,"articulations and dynamics"],[/fingerings and dynamics/g,"articulations and dynamics"],["Good fingerings are a gift: pass them on.","Good markings are a gift: pass them on."],[/New fingerings, new ideas/g,"New markings, new ideas"],[/with your fingerings and marks/g,"with your marks"],[/All four strings in tune\./g,"In tune."]],de:[["Bogen hoch!","Tief Luft holen!"],[/deinen Fingersätzen, Strichen und deiner Dynamik/g,"deiner Artikulation und Dynamik"],[/Fingersätze, Striche und Dynamik/g,"Artikulation und Dynamik"]]},Mc={viola:{en:[[/violinists/g,"violists"],[/violinist/g,"violist"],[/Violin/g,"Viola"],[/violin/g,"viola"]],de:[[/Geigerinnen und Geiger/g,"Bratschistinnen und Bratschisten"],[/großer Geiger/g,"großer Bratschisten"],[/Geigenstimme|Violinstimme/g,"Bratschenstimme"],[/Violinstücke/g,"Bratschenstücke"],[/Geige|Violine/g,"Bratsche"]]},cello:{en:[[/violinists/g,"cellists"],[/violinist/g,"cellist"],[/Violin/g,"Cello"],[/violin/g,"cello"]],de:[["Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.","Du hörst das Cello so, wie es gespielt wurde, mit dem Klavier, und die Noten laufen mit."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Spiel zuerst mit dem Cello mit, dann schalte es aus und übernimm."],[/Geigerinnen und Geiger/g,"Cellistinnen und Cellisten"],[/großer Geiger/g,"großer Cellisten"],[/Geigenstimme|Violinstimme/g,"Cellostimme"],[/Violinstücke/g,"Cellostücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Cello`],[/Meine (Geige|Violine)/g,"Mein Cello"],[/die (Geige|Violine)/g,"das Cello"],[/der (Geige|Violine)/g,"dem Cello"],[/Geige|Violine/g,"Cello"]]},recorder:{en:[["Rosining the bow…","Warming up the recorder…"],["Polishing the strings…","Checking the finger holes…"],["Tip: try a little vibrato on the long notes.","Tip: hold the long notes still and even."],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins gently, without letting the pitch drift."],["Tip: keep the trilling finger light and close to the string.","Tip: keep the trilling finger light and close to its hole."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Give each one a clear start with the tongue."],["Tip: keep the bow on the string so every note sounds.","Tip: cover the holes fully so every note sounds."],["Tip: check your intonation against the open strings.","Tip: blow gently: too much air makes the notes sharp."],...ti.en,[/violinists/g,"recorder players"],[/violinist/g,"recorder player"],[/Violin/g,"Recorder"],[/violin/g,"recorder"]],de:[["Bogen wird kolophoniert…","Die Blockflöte wird warm gespielt…"],["Saiten werden poliert…","Grifflöcher werden geprüft…"],["Bogen weiter!","Weiter blasen!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Blas sanft: Zu viel Luft macht die Töne zu hoch."],["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Halte die langen Töne ruhig und gleichmäßig."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Halte den Atem ruhig durch die langen Töne."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln behutsam, ohne dass die Tonhöhe wandert."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Halte den Trillerfinger locker und nah am Griffloch."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Stoß jeden Ton klar mit der Zunge an."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Deck die Löcher ganz ab, damit jeder Ton klingt."],...ti.de,[/Geigerinnen und Geiger/g,"Blockflötistinnen und Blockflötisten"],[/großer Geiger/g,"großer Blockflötisten"],[/Geigenstimme|Violinstimme/g,"Blockflötenstimme"],[/Violinstücke/g,"Blockflötenstücke"],[/Geige|Violine/g,"Blockflöte"]]},voice:{en:[["Rosining the bow…","Warming up the voice…"],["Polishing the strings…","Clearing the throat…"],["Ling Ling is watching. Pick up the violin!","Ling Ling is listening. Warm up your voice!"],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins: grow and fade with your breath."],["Tip: keep the trilling finger light and close to the string.","Tip: keep trills light and even."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Sing them out clearly."],["Tip: keep the bow on the string so every note sounds.","Tip: start each note clearly so every one sounds."],["Tip: check your intonation against the open strings.","Tip: check your pitch against the piano."],["Tip: check the fingering where the wrong notes were.","Tip: sing the places with wrong notes slowly, with the piano."],["Wonderfully accurate fingers.","Wonderfully accurate."],["Play along with the violin first, then switch it off and take over.","Sing along with the melody first, then switch it off and take over."],...ti.en,["Keep the air going!","Keep the breath going!"],[/violinists/g,"singers"],[/violinist/g,"singer"],[/Violin/g,"Voice"],[/violin/g,"voice"]],de:[["Bogen wird kolophoniert…","Die Stimme wird aufgewärmt…"],["Saiten werden poliert…","Noch ein Schluck Wasser…"],["Bogen weiter!","Weiter singen!"],["Ling Ling schaut zu. Nimm die Violine in die Hand!","Ling Ling hört zu. Sing dich ein!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Prüf deine Tonhöhe am Klavier."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Stütz die langen Töne mit ruhigem Atem."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln: mit dem Atem wachsen und abklingen."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Sing Triller leicht und gleichmäßig."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Sing sie klar aus."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Setz jeden Ton klar an, damit er klingt."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Sing zuerst mit der Melodie mit, dann schalte sie aus und übernimm."],...ti.de,[/Geigerinnen und Geiger/g,"Sängerinnen und Sänger"],[/großer Geiger/g,"großer Sänger"],[/Geigenstimme|Violinstimme/g,"Gesangsstimme"],[/Violinstücke/g,"Lieder"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}eine Stimme`],[/Meine (Geige|Violine)/g,"Meine Stimme"],[/(die|der) (Geige|Violine)/g,"$1 Stimme"],[/Geige|Violine/g,"Gesang"]]}};({...Yt.violin});Mc.any={en:[[/violinists/g,"musicians"],[/violinist/g,"musician"],[/Violin/g,"Instrument"],[/violin/g,"instrument"],[/([Aa]) (?=[Ii]nstrument)/g,"$1n "]],de:[[/Geigerinnen und Geiger/g,"Musikerinnen und Musiker"],[/großer Geiger/g,"großer Musiker"],[/Geigenstimme|Violinstimme/g,"Solostimme"],[/Violinstücke/g,"Stücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Instrument`],[/Meine (Geige|Violine)/g,"Mein Instrument"],[/die (Geige|Violine)/g,"das Instrument"],[/der (Geige|Violine)/g,"dem Instrument"],[/Geige|Violine/g,"Instrument"]]};const xr="";function Vm(t,e,n){var o;const i=((o=Mc[e.id])==null?void 0:o[n])??[],r=i.find(([a])=>a===t);if(r)return r[1];let s=t.split("violinhero.crescendu.com").join(new URL(e.app.url).host).split("Violin-Hero").join(xr).split("Violin Hero").join(xr);for(const[a,l]of i)typeof a!="string"&&(s=s.replace(a,l));return s.split(xr).join(e.app.name)}function bi(t,e,n){return typeof t=="string"?Vm(t,e,n):typeof t=="function"?(...i)=>{const r=[],s=i.map(a=>typeof a=="string"?`${r.push(a)-1}`:a),o=bi(t(...s),e,n);return typeof o=="string"?o.replace(/\u0002(\d+)\u0003/g,(a,l)=>r[Number(l)]):o}:Array.isArray(t)?t.map(i=>bi(i,e,n)):t&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype?Object.fromEntries(Object.entries(t).map(([i,r])=>[i,bi(r,e,n)])):t}const ha=new WeakMap;function Um(t,e){const n=Dt();if(n===Yt.violin)return t;let i=ha.get(t);i||ha.set(t,i=new Map);const r=`${n.id}/${e}`;return i.has(r)||i.set(r,bi(t,n,e==="de"?"de":"en")),i.get(r)}const _t=(t,e,n)=>`${t} ${t===1?e:n}`,ze=["Romantik","diese Musik","Klassik","Barock","Volksmusik","Fiddle-Musik","Klezmer","diesen Stil"],da=(t,e)=>[t&&_t(t,"Glissando","Glissandi"),e&&_t(e,"Schleifer","Schleifer")].filter(Boolean).join(", "),Ut=(t,e)=>t.toFixed(e).replace(".",","),zm={versionTitle:(t,e)=>`Version ${t}, Commit ${e}`,darkMode:"Dunkles Design",lightMode:"Helles Design",themeMenu:"Aussehen: hell oder dunkel, Farben",schemes:{blue:"Ozean",violet:"Pflaume",teal:"Lagune",rose:"Himbeere",graphite:"Graphit"},helpTitle:"Anleitung (?)",helpLabel:"Anleitung zu Violin Hero",tools:{key:"Werkzeuge",title:"Werkzeuge: Stimmgerät und mehr",tuner:"Stimmgerät",tunerLead:"Geige stimmen",setup:"Audio-Einrichtung",setupLead:"Mikrofon und Lautsprecher, Eingangspegel, Verzögerung",more:"Mehr Werkzeuge",moreLead:"Werkzeuge wie den Vibralizer im Marketplace hinzufügen",moduleFailed:"Dieses Werkzeug ließ sich nicht laden. Prüf deine Verbindung und versuch es noch einmal.",close:"Schließen"},marketTitle:"Violin Hero Marketplace: mehr Content Packs",overlay:{marketplace:"Content Packs und Tools für Violin Hero",halloffame:"Die besten Aufnahmen, Spieler und Stücke",close:"Zurück zu Violin Hero"},languageTitle:t=>`Sprache: ${t}`,languageMenu:"Sprache wählen",tempo:"Tempo",click:"Klick",metronome:"Metronom",practice:"Üben",fullscreen:"Seitenansicht der Geigenstimme",leaveFullscreen:"Zurück zur normalen Ansicht (Esc)",dragBar:"Ziehen, um die Leiste zu verschieben",pageSize:"Notengröße",pageSizes:{small:"Klein: mehr Takte pro Zeile",medium:"Mittel",large:"Groß: besser lesbar und leichter zu bearbeiten"},piano:"Klavier",pianoModel:"Instrument",staves:"Noten",violin:"Violine",humanize:"Ausdruck",reverb:"Hall",volume:"Lautstärke",pianos:{grand:"Flügel",upright1:"Klavier 1",upright2:"Klavier 2"},startStop:"Wiedergabe",play:"Start",pause:"Pause",playTitle:"Start / Pause (P; Doppelklick: zurück zum Anfang)",navigation:"Navigation",back:"Zurück",forward:"Vor",backTitle:"Einen Takt zurück (Doppelklick: zum Anfang)",forwardTitle:"Einen Takt vor (Doppelklick: zum Ende)",take:"Aufnahme",record:"Aufnehmen",stop:"Stopp",recordTitle:"Aufnehmen (R)",finishMarking:"Erst das Bezeichnen abschließen (Esc)",clear:"Löschen",sure:"Sicher?",clearTitle:"Aufnahme löschen",clearConfirmTitle:"Noch einmal drücken, um die Aufnahme zu löschen",share:"Teilen",shareTitle:"Deine Aufnahme teilen",shareScoreTitle:"Deine Einrichtung dieses Stücks teilen (als Link)",section:"Abschnitt",marker:"Marke",markerTitle:"Einen Abschnitt markieren (M)",repeat:"Wiederholen",repeatTitle:"Den Abschnitt wiederholen (L; Doppelklick: zu seinem Anfang)",input:"Eingang",inputGain:"Eingangspegel",level:"Schwierigkeitsgrad",levels:["Anfänger","Leicht","Mittel","Fortgeschritten","Virtuos"],genre:"Genre",allGenres:"Alle",allLevels:"Alle",genres:{early:"Alte Musik",baroque:"Barock",classical:"Klassik",romantic:"Romantik",modern:"Moderne & Gegenwart",concertos:"Konzerte",sonatas:"Sonaten",showpieces:"Virtuosenstücke",salon:"Salonstücke",dances:"Tänze",opera:"Oper & Operette",sacred:"Geistliche Musik",etudes:"Etüden",carols:"Weihnachten",wedding:"Hochzeit",children:"Kinderlieder",folk:"Volkslieder",celtic:"Keltisch & Fiddle",bluegrass:"Bluegrass & Country",hungarian:"Ungarisch & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & Swing",film:"Film- & Spielmusik",pop:"Pop, Rock & Musical",warmups:"Einspielübungen",scales:"Tonleitern",technique:"Technik & Übungen"},piece:"Stück",placeOf:(t,e)=>`${t} von ${e}`,scoreLabel:"Noten",scorePdfTitle:"Die Violinstimme als PDF, zum Drucken oder Herunterladen",fingeringsBy:t=>`Noten wurden eingerichtet von ${t}`,fingeringsAdded:"Noten wurden eingerichtet",pieceCount:t=>t?_t(t,"Stück","Stücke"):"Keine Stücke",lockedCount:t=>`${t} gesperrt`,noneUnlocked:"keins freigeschaltet",noPieces:"Hier gibt es keine Stücke: probier einen anderen Schwierigkeitsgrad",interpretation:"Interpretation",defaultWritten:"Standard",defaultNone:"Keine Interpretationen",recordings:"Aufnahmen",recordingsNone:"Keine",recordingsEmpty:"Noch keine Aufnahmen",you:"Du",loop:"Schleife",playTake:(t,e)=>`Deine Aufnahme abspielen (${t}, ${e})`,stopRecording:"Die Aufnahme anhalten",playRecording:(t,e)=>`Die Aufnahme abspielen (${t}${e?", auf YouTube":""})`,chooseRecording:"Wähle eine Aufnahme, um sie abzuspielen",hints:{playPause:"Start / Pause",record:"aufnehmen",bar:"Takt",marker:"Marke",repeat:"wiederholen",violin:"Violine",piece:"Stück",yourTake:"deine Aufnahme",recording:"Aufnahme",help:"Hilfe"},panels:{navigation:"Transport",playback:"Einstellungen",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Einst.",repertoire:"Rep."},panelOpen:t=>`${t} zeigen`,panelClose:t=>`${t} ausblenden`,controls:"Steuerung",stopVideo:"Das Video anhalten",resizeVideo:"Ziehen, um die Größe des Videos zu ändern",flags:{loadingRecording:"Aufnahme lädt",aligning:(t,e)=>t==="spectrum"?`Spektrum wird analysiert ${e} %`:t==="aligning"?`Tempo wird erkannt: ${e} % der Noten`:`Klaviertöne werden abgeglichen ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violine stummgeschaltet",pianoOff:"Klavier stummgeschaltet",rec:"Rec",yourTake:"▶ Deine Aufnahme",takeOf:t=>`▶ Aufnahme von ${t}`,repeat:"Wiederholung",loadingSounds:"Klänge laden",loadingPiano:"Klaviersound laden",loadingViolin:"Violine lädt",noMicrophone:"Kein Mikrofon",savingToAccount:"Wird in deinem Benutzerkonto gespeichert",savedToAccount:"✓ In deinem Konto gespeichert",keptForLater:"Im Speicher: wird später in deinem Konto gespeichert",openingTake:"Deine Aufnahme lädt",takeNotOpened:"Deine Aufnahme konnte nicht geladen werden",syncing:t=>`${_t(t,"Aufnahme wird","Aufnahmen werden")} in deinem Konto gespeichert`,synced:t=>`✓ ${_t(t,"Aufnahme","Aufnahmen")} in deinem Konto gespeichert`,sharing:"Link zu deiner Aufnahme wird erstellt",shareFailed:"Die Aufnahme konnte nicht geteilt werden",signInToShare:"Melde dich an, um deine Aufnahmen zu teilen",openingShared:"Freigegebene Aufnahme lädt",sharedNotOpened:"Die freigegebene Aufnahme konnte nicht geladen werden",tapToPlay:"Tippe irgendwo, um abzuspielen",speakersHeard:"Klavier im Mikrofon gehört: nimm Kopfhörer",phoneMode:"Bluetooth-Headset im Telefonmodus: nimm Kopfhörer mit Kabel oder das eingebaute Mikrofon"},messages:{soundsFailed:"Die Sounds konnten nicht geladen werden",scoreFailed:"Die Noten konnten nicht geladen werden",pianoFailed:"Das Klavier konnte nicht geladen werden",recordingFailed:"Die Aufnahme konnte nicht geladen werden",noTimingYet:t=>`Noch kein Timing: braucht ${t}`,noTimingVideo:"Kein Timing für dieses Video",videoFailed:"Das Video konnte nicht geladen werden",loadingScore:"Noten laden…",engraving:"Noten werden gesetzt…"},edited:"↺ Bearbeitet",revertQuestion:"Zurücksetzen?",editedTitle:"Bearbeitet: klicken, um alle Änderungen zu verwerfen",revertConfirmTitle:"Noch einmal klicken, um alle Änderungen zu verwerfen",versionClearTitle:"Die Einrichtung dieser Version verwerfen",versionClearConfirmTitle:"Noch einmal klicken, um alle Einrichtungen dieser Version zu verwerfen",curveDefault:"Standard",curveDefaultTitle:"Wie notiert, mit Ausdruck",curveRecordingTitle:t=>`Die Aufnahme: ${t}`,wrongNote:"Falscher Ton!",noteMissed:"Ton fehlt!",wrongShort:"Falsch",missedShort:"Fehlt",stickerTimeShort:t=>`${Ut(t,2)} s`,stickerPitch:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,stickerPitchTitle:(t,e)=>`${e?"Zu hoch":"Zu tief"}: ${t}`,stickerTime:(t,e)=>`${Ut(t,2)} s zu ${e?"spät":"früh"}`,annotate:"Die ausgewählten Noten bezeichnen",notesSelected:t=>_t(t,"Note","Noten"),finger:t=>`Finger ${t}`,openString:"Leere Saite (0)",downBow:"Abstrich",upBow:"Aufstrich",staccato:"Staccato",accent:"Akzent",tenuto:"Tenuto",harmonic:"Flageolett",dynamicTitle:t=>`Dynamik: ${t}`,fermata:"Fermate",slur:"Bindebogen",crescendo:"Crescendo (<)",diminuendo:"Decrescendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Nicht solange eine Aufnahme gewählt ist: sie passt nur zu ihrem Timing",revert:"Zurücksetzen",revertTitle:"Zurück zu den Zeichen in den Noten",fx:{boo:["Buh!","Autsch!","Huch!","Hoppla!","Igitt!"],late:["Zu spät!","Aufwachen!","Zu langsam!"],early:["Warte!","Zu früh!","Halt!"],short:["Zu kurz!","Länger halten!","Bogen weiter!"],surf:["Welle!","Cowabunga!","Reite sie!"],snowboard:["Yeah!","Cooler Slide!","Wusch!"],ski:["Juhu!","Abfahrt!","Wusch!"],penguin:["Juhuu!","Bauchrutscher!","Rutsch!"],tweet:"Piep!",buzz:"Summ!",trill:"Trrriller!",chirp:"Zirp!",vibrato:["Vibrato!","So warm!","Herrlich!","Es singt!"]},signIn:"Anmelden",signedInAs:t=>`Angemeldet als ${t}`,createAccount:"Konto erstellen",createAccountButton:"Konto erstellen",haveAccount:"Schon ein Konto? Anmelden",forgotPassword:"Passwort vergessen?",or:"oder",google:"Mit Google anmelden",agree:["Wenn du fortfährst, stimmst du unseren "," zu und hast unsere "," gelesen."],termsName:"Nutzungsbedingungen",privacyName:"Datenschutzerklärung",close:"Schließen",email:"E-Mail",password:"Passwort",passwordHint:t=>`Mindestens ${t} Zeichen`,accountLead:t=>`Violin Hero funktioniert auch ohne Konto. Angemeldet werden deine Aufnahmen in deinem Konto gespeichert${t?`, auch ${t===1?"die Aufnahme":`die ${t} Aufnahmen`}, die in diesem Browser warten`:""}.`,enterEmailFirst:"Gib zuerst deine E-Mail-Adresse ein.",resetSent:t=>`Wir haben dir einen Link zum Zurücksetzen an ${t} geschickt.`,confirmEmail:"Bitte bestätige deine E-Mail-Adresse: Der Link ist in deinem Posteingang.",anonymous:"Anonym",save:"Speichern",nicknameTaken:t=>`„${t}“ ist schon vergeben. Probier einen anderen!`,nicknameInvalid:"Ein Spitzname darf kein „/“ enthalten.",pickNickname:"Spitznamen wählen",nicknameDialog:{title:"Wähl deinen Spitznamen",lead:"Er steht bei deinen Aufnahmen in den Bestenlisten und der Hall of Fame. Andere sehen nur diesen Namen, also nimm einen, der öffentlich sein darf.",label:"Spitzname",save:"Spitznamen speichern",later:"Später"},signOut:"Abmelden",profile:"Profil",roles:"Was hast du vor?",creatorDashboard:"Dein Creator-Dashboard",invite:"Freund oder Freundin einladen",inviteCopied:"Link kopiert: schick ihn weiter!",inviteFailed:"Der Link ließ sich nicht kopieren",inviteText:"Üb mit mir in Violin Hero: spiel mit dem Klavier, sieh, wie sauber du spielst, und nimm dich auf.",feedback:"Feedback & Fehler melden",hintTitle:"Melde dich an, um deine Aufnahmen und deine Fortschritte zu speichern",scoreHintTitle:"Melde dich an, um Noten zu drucken",scoreHintText:"Druckbare Noten mit deinen Fingersätzen und Zeichen gibt es für angemeldete Spieler.",shareHintTitle:"Melde dich an, um deine Einrichtung zu teilen",shareHintText:"Deine Fingersätze, Striche und Dynamik bekommen einen eigenen Link: Schick ihn deiner Lehrkraft oder deinem Pultnachbarn.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"deine",shareScoreDone:{headlines:[["Link kopiert!","Deine Einrichtung kann geteilt werden."],["Ab damit!","Deine Fingersätze und Dynamik haben jetzt einen eigenen Link."],["Bereit zum Teilen!","Selbst eingerichtete Noten: Das ist echte Musikalität."]],ready:["Dein Link","Kopier ihn, und deine Einrichtung kann geteilt werden."],anywhere:"Schick ihn, wie du magst. Wer ihn öffnet, bekommt das Stück mit deinen Fingersätzen, Strichen und deiner Dynamik, unter deinem Namen bei seinen Stücken.",who:["Deine Lehrkraft","Dein Pultnachbar","Dein Orchester","Deine Freunde"],cheers:["Gute Fingersätze sind ein Geschenk: Gib sie weiter.","Deine Lehrkraft wird sehen wollen, wie du über die Musik denkst.","Ling Ling richtet jede Stimme ein. Jetzt du auch.","Geteilte Einrichtung, weniger falsche Töne, mehr Musik."]},sharedScore:{sharedBy:t=>`${t} hat die Einrichtung mit dir geteilt`,sharedByAnyone:"Jemand hat die Einrichtung mit dir geteilt",yours:"Deine eigene Einrichtung",you:"deine",someone:"geteilt",intro:"Eingerichtete Noten zum Üben: Fingersätze, Striche und Dynamik an den Noten, so gespielt wie eingetragen.",kinds:{fingerings:"Fingersätze",bowings:"Striche",articulations:"Artikulationen",dynamics:"Dynamik",phrasing:"Bögen, Fermaten und rit."},cheers:["Voneinander lernen: So wachsen Musiker.","Jemand hat beim Einrichten an dich gedacht.","Neue Fingersätze, neue Ideen: Probier sie aus!","Gemeinsam üben, auch aus der Ferne."],open:"Noten öffnen",later:"Nicht jetzt",addedAs:(t,e)=>`Bei deinen Stücken als „${t} – ${e}“ neben dem Original.`},hintText:t=>`${t>1?`${t} Aufnahmen warten`:"Deine Aufnahme wartet"} in diesem Browser, bis du dich anmeldest, und ${t>1?"werden":"wird"} dann in deinem Konto gespeichert, mit den Stücken, die du freigeschaltet hast.`,hintDismiss:"Nicht mehr anzeigen",graphShow:"Tempo- und Lautstärkekurve zeigen",graphHide:"Tempo- und Lautstärkekurve ausblenden",logoHintTitle:"Deine Startseite ist hier oben",startPage:"Zur Startseite",logoHintText:"Tipp auf das Violin-Hero-Symbol, um die Startseiten wieder zu öffnen: Geige stimmen und ein Stück wählen.",recordHints:["Noch ein Versuch? Starte eine neue Aufnahme!","Jede Aufnahme bringt dich dem nächsten Stück näher. Gleich noch eine!","Übung macht den Meister: Tipp hier für eine neue Aufnahme."],navHintTitle:"Takt für Takt",navHintText:"Zurück und Vor springen jeweils einen Takt, so hörst du eine Stelle noch einmal. Oder zieh die Noten.",pageHintTitle:"Da gibt es noch mehr",pageHintText:"Schließ hier die Seitenansicht: In der normalen Ansicht findest du alle Stücke, Aufnahmen großer Geiger zum Mitspielen, deine Aufnahmen und die Einstellungen.",guide:{passed:"Super! Weiter zum nächsten Stück",passedLead:t=>`${t} wartet auf dich.`,again:"Noch eine Aufnahme?",againLead:(t,e)=>e===1?`Erreiche ${t} % oder nimm noch einmal auf, dann öffnet sich das nächste Stück.`:`Erreiche ${t} % oder nimm noch ${e}-mal auf, dann öffnet sich das nächste Stück.`,allDone:"Du hast alle Einstiegsstücke gespielt!",allDoneLead:"In der normalen Ansicht findest du die ganze Bibliothek, Aufnahmen großer Geiger und mehr.",play:t=>`${t} spielen`,recordAgain:"Noch mal aufnehmen",onceMore:"Noch einmal",tryOther:t=>`${t} probieren`,toNormal:"Zur normalen Ansicht",leave:"Keine Vorschläge mehr"},auth:{wrongPassword:"E-Mail oder Passwort falsch.",emailInUse:"Mit dieser E-Mail gibt es schon ein Konto: melde dich stattdessen an.",weakPassword:t=>`Das Passwort braucht mindestens ${t} Zeichen.`,invalidEmail:"Diese E-Mail-Adresse sieht nicht richtig aus.",tooMany:"Zu viele Versuche: bitte warte einen Moment und versuch es noch einmal.",popupClosed:"Das Google-Fenster wurde vor der Anmeldung geschlossen.",popupBlocked:"Der Browser hat das Google-Fenster blockiert: erlaube Pop-ups für diese Seite.",unauthorizedDomain:"Die Anmeldung ist für diese Adresse noch nicht freigeschaltet.",network:"Keine Verbindung: prüfe dein Netzwerk und versuch es noch einmal.",failed:t=>`Das hat nicht geklappt (${t}).`},deleteTake:{title:"Diese Aufnahme löschen?",account:"Sie wird endgültig aus deinem Konto gelöscht: die Aufnahme und alles, was mit ihr gespeichert ist.",ranked:"Sie steht auch in der Bestenliste dieses Stücks: Sie wird daraus entfernt, für alle.",place:t=>`Sie steht auf Platz ${t} der Bestenliste: Sie wird daraus entfernt, für alle.`,keepsProgress:"Die Stücke, die du freigeschaltet hast, bleiben freigeschaltet.",confirm:"Löschen",cancel:"Behalten",deleting:"Wird gelöscht…",failed:"Die Aufnahme konnte nicht gelöscht werden. Bitte versuch es noch einmal."},shareDone:{headlines:[["Link kopiert!","Deine Aufnahme ist bereit, gehört zu werden."],["Ab die Post!","Deine Aufnahme hat jetzt ihren eigenen Link."],["Bereit zum Teilen!","Sei stolz darauf: Das hast du gespielt."]],ready:["Dein Link","Kopiere ihn, und deine Aufnahme ist bereit, gehört zu werden."],anywhere:"Schick ihn, wie du magst: per Nachricht, E-Mail oder Chat. Wer ihn öffnet, hört deine Aufnahme mit dem Klavier, genau so, wie du gespielt hast.",who:["Deine Lehrerin oder dein Lehrer","Deine Eltern","Oma und Opa","Deine Freunde"],cheers:["Jede Aufnahme, die du teilst, ist ein kleines Konzert.","Deine Lehrkraft hört bestimmt gern, wie du übst.","Ling Ling teilt jede Aufnahme. Na gut, die guten. Diese zählt.","Musik ist zum Zuhören da. Lass sie dich hören!"],playedAlong:"Mitgespielt zu",copy:"Kopieren",copyAgain:"Noch mal kopieren",copiedAgain:"✓ Kopiert",done:"Fertig",text:t=>`Hör mal, wie ich ${t} in Violin Hero spiele!`},install:{title:"Installiere Violin Hero als App",tap:"Tippe auf",share:"Teilen",then:"dann",add:"Zum Home-Bildschirm",openInSafari:"Öffne diese Seite in Safari, tippe auf",chromeToo:"Neuere Chrome-Versionen haben es auch unter dem Teilen-Symbol in der Adressleiste.",close:"Schließen"},practiceTips:{title:"Übetipps",video:"Video ansehen",videoTitle:"Öffnet das Video auf YouTube, in einem neuen Tab",start:"Jetzt starten",close:"Schließen",open:"Übetipps",openTitle:"Die Übetipps zu diesem Stück zeigen",festiveTitle:"Weihnachtliche Übetipps",festiveLead:"Es ist Weihnachtszeit, die schönste Zeit für dieses Stück: Üb es jetzt und spiel es unterm Baum für Familie und Freunde."},headphones:{title:"Setz Kopfhörer mit Kabel auf",wired:"Mit Kabel:",wiredWhy:"das Mikrofon hört nur deine Violine.",speakers:"Lautsprecher:",speakersWhy:"das Klavier wird mit aufgenommen.",bluetooth:"Bluetooth:",bluetoothWhy:"verzögert und kann deine Aufnahme verzerren.",gotIt:"Verstanden!",appleAdapter:"Nimm Apples eigenen 3,5-mm-Adapter: andere können verstummen."},welcome:{loading:["Bogen wird kolophoniert…","Das Klavier wird gestimmt…","Noten werden ausgepackt…","Das Orchester wärmt sich auf…","Saiten werden poliert…","Das Licht wird gedimmt…"],progress:t=>`${t} %`,loadingFailed:"Manche Klänge ließen sich nicht laden. Prüfe deine Verbindung.",continueAnyway:"Trotzdem weiter",begin:"Los geht’s",skipIntro:"Überspringen",beginNote:"Dein Browser fragt nach dem Mikrofon, damit Violin Hero deine Geige hören kann.",points:{wired:"Kopfhörer:",wiredWhy:"aufsetzen, um die Wiedergabe zu hören.",mic:"Mikrofon:",micWhy:"erlauben, um dein Spiel aufzunehmen.",speakers:"Lautsprecher:",speakersWhy:"ausschalten.",bluetooth:"Bluetooth:",bluetoothWhy:"vermeiden, es kann deine Aufnahme verzerren."},hearString:t=>`${t} anhören`,stopTone:"Ton aus",byEar:"Nach Gehör stimmen: Die Schwebung wird langsamer, je näher du kommst",tuner:"Stimmgerät",level:"Pegel",gain:"Eingang",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t).toLocaleString("de")} dB`,gainTitle:"Die Verstärkung des Mikrofons: so einstellen, dass deine lautesten Töne den grünen Bereich erreichen (Doppelklick: +12 dB)",cal:{key:"Kalibrieren",keyTitle:"Die Verzögerung von den Lautsprechern zum Mikrofon messen, damit deine Aufnahmen genau zum Klavier passen",ms:t=>`${t} ms`,title:"Audio-Latenz messen",speakers:"Steck die Kopfhörer ein, mit denen du spielst, und dreh die Lautstärke auf.",micOn:"Halt eine Hörmuschel direkt an das Mikrofon deines Geräts.",quiet:"Sei ein paar Sekunden still, während die Klicks spielen.",measuring:(t,e)=>`Ich höre zu … Klick ${t} von ${e}`,result:t=>`Verzögerung: ${t} ms`,notHeard:"Die Klicks waren nicht zu hören.",unsteady:"Die Klicks kamen ungleichmäßig an.",tryAgain:"Dreh die Lautstärke auf, halt die Hörmuschel direkt ans Mikrofon, sei still und versuch es noch einmal.",needMic:"Dafür braucht es das Mikrofon: erlaube es zuerst.",back:"Fertig",start:"Messung starten",again:"Noch einmal messen",newMeasurement:"Neue Messung",save:"Speichern"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Mikrofon",inputTitle:"Der verwendete Eingang, wie dein System ihn nennt; bei Stereo der Pegel jeder Seite",setupTitle:"Audio-Einrichtung",inputDevice:"Mikrofoneingang",outputDevice:"Kopfhörerausgang",systemDefault:"Systemstandard",sidesTitle:"Jede Seite des Eingangs für sich: eine stumme oder rauschende Seite zeigt sich hier",newInput:t=>`Neuer Eingang: ${t}`,useInput:"Verwenden",levelTitle:"Der Eingangspegel: deine lautesten Töne im grünen Bereich ergeben eine saubere Aufnahme; im roten verzerren sie",startTuning:"Stimmen starten",micWhy:"Violin Hero hört dir über das Mikrofon zu.",micAsking:"Erlaube das Mikrofon in deinem Browser…",micDenied:"Kein Mikrofon. Erlaube es im Browser, um zu stimmen und aufzunehmen.",playString:t=>`Spiel deine ${t}-Saite`,tuneUp:"Höher stimmen",tuneDown:"Tiefer stimmen",inTune:"Sauber!",offBy:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,wrongString:(t,e)=>`Das klingt nach deiner ${t}-Saite. Spiel die ${e}.`,farOff:"Weit daneben: langsam drehen und hinhören",stringTitle:t=>`Die ${t}-Saite stimmen`,aDone:t=>`Dein ${t} ist sauber!`,others:t=>`Jetzt ${t.length>1?`${t.slice(0,-1).join(", ")} und ${t[t.length-1]}`:t[0]}, oder du stimmst sie selbst.`,skip:"Die anderen stimme ich selbst",alreadyInTune:"Meine Geige ist schon gestimmt",closeTool:"Fertig",allDone:"Alle vier Saiten sauber. Wunderbar!",next:"Weiter",ready:"Bereit?",firstPiece:"Dein erstes Stück",firstPieceLead:"Leicht zum Einstieg, schön zu spielen. Neue Stücke werden freigeschaltet, wenn du dieses Stück gut kannst.",accountTitle:"Behalte, was du spielst",accountLead:"Kostenlos: deine Aufnahmen und dein Fortschritt, auf jedem Gerät.",signIn:"Anmelden",signedIn:t=>`Angemeldet als ${t}: deine Aufnahmen und dein Fortschritt werden gespeichert.`,offline:"Offline: deine Aufnahmen warten auf diesem Gerät und werden gespeichert, sobald du wieder online bist.",go:"Bogen hoch!",goNote:"Zwei Takte zählen dich ein, dann beginnt deine erste Aufnahme.",backToTuner:"Zurück zum Stimmgerät"},deleteAccount:{menu:"Konto löschen…",title:"Dein Konto löschen?",loading:"Was gespeichert ist, wird gesucht…",lead:"Das wird endgültig gelöscht:",nickname:t=>`Dein Spitzname „${t}“`,takes:(t,e)=>`${t===1?"1 Aufnahme":`${t} Aufnahmen`}${e?` (${e} in der Hall of Fame)`:""}, mit ihren geteilten Links`,progress:(t,e)=>`Dein Fortschritt: ${t===1?"1 Stück":`${t} Stücke`} bestanden, ${e===1?"1 Aufnahme":`${e} Aufnahmen`} gezählt`,practice:t=>`Deine Übezeit (${t})`,markings:(t,e)=>`Deine Eintragungen in ${t===1?"1 Stück":`${t} Stücken`}${e?`, ${e} geteilt`:""}`,packsAdded:t=>`Content Packs, die du hinzugefügt hast: ${t}`,packsMade:t=>`Content Packs, die du erstellt hast: ${t}`,creatorProfile:"Dein Creator-Profil",invitations:t=>`Deine Einladungen${t?` (${t} Karma)`:""}`,feedback:(t,e,n)=>`Dein Feedback: ${t===1?"1 Beitrag":`${t} Beiträge`}, ${e===1?"1 Stimme":`${e} Stimmen`}${n?", deine Bewertung":""}`,family:(t,e)=>`Deine Familienverbindungen: ${t===1?"1 Kind, das nur du betreust":`${t} Kinder, die nur du betreust`}, ${e===1?"1 Partner":`${e} Partner`}`,teaching:t=>`Dein Unterricht: ${t===1?"1 Raum":`${t} Räume`}, die Sprachnotizen deiner Stundennotizen`,browser:"Was dieser Browser speichert (Einstellungen, wartende Aufnahmen)",packsBought:t=>`Deine gekauften Content Packs gehen verloren: ${t}. Käufe gehören zu diesem Konto; mit einem neuen Konto müsstest du sie noch einmal kaufen.`,packsKept:t=>`Bleibt erhalten: ${t}. Diese Packs wurden schon hinzugefügt und bleiben daher, mit deinem Creator-Profil.`,creatorStays:"Dein Creator-Profil und deine Content Packs bleiben. Um sie zu löschen, wähl auf der Creator-Seite im Kontomenü „Creator-Daten löschen…“.",login:"Dein Login wird ebenfalls gelöscht.",loginSchool:"Dein Login bleibt: er wird anderswo in Crescendu noch gebraucht.",loginCreator:"Dein Login bleibt, für deine Creator-Daten.",creatorMenu:"Creator-Daten löschen…",creatorTitle:"Deine Creator-Daten löschen?",creatorNothing:"Es lässt sich nichts löschen: Alle deine Content Packs wurden schon hinzugefügt.",creatorLoginPacks:"Dein Login bleibt, für die Content Packs, die schon hinzugefügt wurden.",creatorLoginPlayer:"Dein Login und deine Violin-Hero-Daten bleiben. Um sie zu löschen, wähl in Violin Hero im Kontomenü „Konto löschen…“.",creatorCancel:"Creator-Daten behalten",creatorConfirm:"Creator-Daten löschen",doneCreator:"Deine Violin-Hero-Daten sind gelöscht. Dein Login bleibt für deine Creator-Daten: Lösch sie auf der Creator-Seite, dann geht der Login mit.",creatorDoneLogin:"Deine Creator-Daten und dein Login sind gelöscht. Danke, dass du für Violin Hero erstellt hast!",creatorDoneSchool:"Deine Creator-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",creatorDonePacks:"Die Packs, die niemand hinzugefügt hatte, sind gelöscht. Die anderen bleiben, mit deinem Creator-Profil und deinem Login.",creatorDonePlayer:"Deine Creator-Daten sind gelöscht. Dein Login und deine Violin-Hero-Daten bleiben.",understood:"Mir ist klar, dass sich das nicht rückgängig machen lässt.",cancel:"Konto behalten",confirm:"Alles löschen",deleting:"Wird gelöscht…",steps:{takes:"Deine Aufnahmen werden gelöscht…",library:"Hinzugefügte Packs werden entfernt…",packs:"Deine erstellten Packs werden gelöscht…",profile:"Dein Creator-Profil wird gelöscht…",feedback:"Dein Feedback wird gelöscht…",messages:"Deine Nachrichten und dein Lob werden gelöscht…",rest:"Fortschritt und Übezeit werden gelöscht…",family:"Deine Familienverbindungen werden gelöscht…",teaching:"Deine Räume und Sprachnotizen werden gelöscht…",other:"Deine übrigen Crescendu-Daten werden gelöscht…",browser:"Dieser Browser wird geleert…",login:"Dein Login wird gelöscht…"},failed:"Es ließ sich nicht alles löschen. Bitte versuch es noch einmal.",doneTitle:"Deine Daten sind gelöscht",doneLogin:"Dein Konto gibt es nicht mehr. Danke, dass du mit Violin Hero geübt hast!",doneSchool:"Deine Violin-Hero-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",doneAgain:"Deine Daten sind gelöscht. Um auch den Login zu löschen, melde dich noch einmal an und wähle wieder „Konto löschen“.",ok:"OK"},nextPack:{title:"Du hast das ganze Starter Pack freigeschaltet!",text:"Lust auf mehr? „Beliebte Violinstücke“ hat 25 Lieblingsstücke, von der Méditation bis zum Csárdás, alle sofort offen, sobald du es hinzufügst.",signIn:"Melde dich im Marketplace an, um es hinzuzufügen.",show:"Zeig mir",later:"Später"},packUpdates:{title:t=>t===1?"Ein Inhaltspaket hat ein Update":`${t} Inhaltspakete haben Updates`,untitled:"Inhaltspaket",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Aktualisieren",updating:"Wird aktualisiert…",keep:t=>`Version ${t} behalten`,later:"Später entscheiden",note:"Deine Aufnahmen bleiben in jedem Fall erhalten."},sharedTake:{sharedBy:t=>`${t} hat eine Aufnahme mit dir geteilt`,sharedByAnyone:"Jemand hat eine Aufnahme mit dir geteilt",yours:"Deine eigene Aufnahme, über deinen Link",played:"Gespielt",tempo:"Tempo",originalTempo:"Originaltempo",section:"Abschnitt",playedAlong:"Mitgespielt zu",bars:(t,e)=>`Takte ${t}–${e}`,score:"Punkte",withPiano:"Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.",listen:"Anhören",playsOnClose:"Die Wiedergabe beginnt, wenn du diese Karte schließt."},unlock:{locked:"Gesperrt: Schalte es frei, indem du Stücke bestehst oder übst",next:"Als Nächstes freischalten",all:"Alle Stücke sind freigeschaltet. Ling Ling wäre stolz!",pass:(t,e)=>`Schaffe ${t} % bei einem Stück, das du noch nicht bestanden hast (mit mindestens ${e} % Tempo)`,thisTake:t=>`Diese Aufnahme: ${t} %`,passedNow:"✓ Bestanden!",passedBefore:"Dieses Stück hast du schon bestanden: probier ein anderes.",or:"oder",signIn:"Melde dich an, damit dein Fortschritt sicher ist, auf jedem Gerät.",takes:t=>`nimm noch ${t} ${t===1?"Aufnahme":"Aufnahmen"} auf`,nudges:["Ling Ling übt 40 Stunden am Tag. Ein paar Aufnahmen mehr schaden nicht!","Üb wie Ling Ling: 40 Stunden am Tag (ein paar Minuten sind ein guter Anfang).","Ling Ling schaut zu. Nimm die Violine in die Hand!","Sei keine Bratsche. Nimm es noch einmal auf!","Emotional Damage? Nein: Emotional Progress!","Jede Aufnahme bringt dich Ling Ling ein Stück näher.","Für Ling Ling auf Schlaf verzichten? Eine Aufnahme mehr reicht schon.","Ling Ling spielt das mit Kater. Du kannst es jetzt spielen!"],title:"Neues Stück freigeschaltet!",titleMany:t=>`${t} neue Stücke freigeschaltet!`,newLevel:t=>`Neuer Schwierigkeitsgrad: ${t}!`,play:"Gleich spielen",later:"Später",cheers:["Ling Ling wäre stolz!","Das ist der 40-Stunden-am-Tag-Geist!","Ling Ling ist einverstanden. Weiter so!","Dein Üben hat sich gelohnt. Auf zum nächsten!","Großartig! Da würde sogar eine Bratsche jubeln."],levelCheers:["Ein ganz neuer Schwierigkeitsgrad! Auch Ling Ling hat mal als Anfänger angefangen.","Level up! Ling Ling wird langsam nervös.","Willkommen auf der nächsten Stufe: Jetzt fängt das echte Üben an!"]},best:(t,e,n)=>`Bestleistung: ${t} · ${e}/${n}`,bestTitle:"Die Bestenliste für dieses Stück zeigen",practising:t=>t===1?"Gerade übt noch 1 Person dieses Stück":`Gerade üben noch ${t} Personen dieses Stück`,invites:["Noch keine Bestleistung: deine Chance, ganz nach oben zu kommen!","Das Treppchen ist leer. Nimm das ganze Stück auf und hol dir Platz eins!","Hier hat noch niemand Punkte geholt. Sei die oder der Erste!","Platz eins ist noch zu haben: erst üben, dann aufnehmen!","Eine leere Bestenliste wartet auf deinen Namen.","Sei die Leistung, die alle anderen schlagen müssen.","Neues Stück, neues Glück: setz die Marke, die es zu schlagen gilt!","Gold ist für dieses Stück noch frei. Hol es dir!"],board:{title:"Bestenliste",of:t=>`Bestenliste für ${t}`,practise:"Los, üben!",you:"du",play:t=>`Aufnahme von ${t} abspielen`,openPodium:t=>`${t===1?"Ein Platz auf dem Treppchen ist":`${t} Plätze auf dem Treppchen sind`} noch frei: Er könnte dir gehören!`,toEnter:t=>`Schaffe mehr als ${t} Punkte, um in die Liste zu kommen.`,onBoard:t=>`Du bist auf Platz ${t}: Schaffst du es noch höher?`,top:"Du bist ganz oben. Kannst du deine eigene Bestleistung schlagen?",signIn:"Melde dich an, damit deine Aufnahmen zählen.",howTo:"Nimm das ganze Stück auf, vom Anfang bis zum Ende, im Originaltempo (100 %), um in die Liste zu kommen.",tips:["Üb zuerst die schweren Takte: markier sie mit der Marke und lass sie wiederholen.","Nimm das Tempo zurück, bis jeder Ton sitzt, und steigere es dann wieder.","Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Hör dir unter Interpretation eine großartige Aufnahme an und mach sie dir zu eigen."]},yourScore:"Dein Ergebnis",yourScoreOpen:"Dein Ergebnis: ganz anzeigen",yourScoreTitle:"Dein Ergebnis: klicken für die Einzelheiten",outOf:t=>`von ${t}`,stars:t=>`${t} von 5 Sternen`,reportSteps:{next:"Wie geht’s weiter?",done:"Fertig",practise:"Weiter üben",back:"Zurück zur Wertung",title:"Deine nächsten Schritte",applause:"Applaus"},shareSignIn:"Stolz auf diese Aufnahme? Melde dich an, dann kannst du sie teilen: Schick den Link an deine Lehrkraft, deine Familie oder deine Freunde, und sie hören genau, wie du gespielt hast.",unranked:t=>`Mit ${t} % des Tempos gespielt, deshalb zählt diese Aufnahme nicht für die Bestenliste: Nur Aufnahmen mit 100 % zählen. ${t<100?"Arbeite dich bis zum Originaltempo hoch und nimm sie dann noch einmal auf!":""}`,publish:{title:"Diese Aufnahme schafft es in die Hall of Fame!",text:"Veröffentliche sie und deine Aufnahme wird öffentlich: sie steht unter deinem Spitznamen in der Bestenliste dieses Stücks und in der Hall of Fame, und alle können sie dort anhören.",signInText:"Melde dich an, um sie zu veröffentlichen: deine Aufnahme wird dann öffentlich und steht in der Bestenliste dieses Stücks und in der Hall of Fame.",publish:"Veröffentlichen",publishing:"Wird veröffentlicht…",saving:"Wird gespeichert…",signIn:"Anmelden",failed:"Das Veröffentlichen hat nicht geklappt. Bitte versuch es noch einmal.",doneTitle:"Du bist in der Hall of Fame!",doneText:"Deine Aufnahme steht jetzt in der Bestenliste dieses Stücks und in der Hall of Fame.",see:"Ansehen"},topScores:t=>`Bestenliste für ${t}`,scoreHeadline:"Punkte",loading:"Lädt…",noScores:"Für dieses Stück gibt es noch keine Ergebnisse.",thisTake:"(diese Aufnahme)",styleBonus:"Stilbonus",badTaste:"Stilbruch",bonus:"Bonus",penalty:"Abzug",categories:{intonation:"Intonation",timing:"Timing",sound:"Klang",dynamics:"Dynamik",trills:"Triller",missed:"Fehlende Töne",wrong:"Richtige Töne"},details:{nothingHeard:()=>"Nichts gehört",spotOn:()=>"Genau getroffen",centsOff:t=>`Im Schnitt ${t} ¢ daneben`,landedLate:t=>` · ${t} spät angekommen`,noEntries:()=>"Keine Einsätze gehört",earlyLate:(t,e)=>[t&&`${t} zu früh`,e&&`${e} zu spät`].filter(Boolean).join(", "),onTime:()=>"Immer pünktlich",heldShort:t=>`Pünktlich, ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,alsoHeldShort:t=>` · ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,playedOnly:(t,e)=>` · nur ${t} von ${e} Tönen gespielt`,shaping:t=>`Gestaltung zu ${t} % gefolgt`,allFollowed:t=>`Allen ${t} Wechseln gefolgt`,wrongWay:(t,e)=>`${t} von ${e} in die falsche Richtung`,tooFewNotes:()=>"Zu wenige Töne gehört",trills:(t,e,n)=>`${t} von ${_t(e,"Triller","Trillern")}${t?` · ${n.toFixed(0)} Töne/s`:""}`,notesOf:(t,e)=>`${t} von ${e} Tönen`,rightOf:(t,e)=>`${t} von ${e} Tönen richtig`,noneMissed:()=>"Kein Ton fehlt",noneWrong:()=>"Alle Töne richtig",noLongNotes:()=>"Keine langen Töne gehört",vibrato:(t,e)=>`Vibrato auf ${t} von ${e} langen Tönen`,openStrings:()=>"Lange leere Saiten ruhig gehalten",vibratoFast:(t,e)=>` · schnell für ${ze[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoSlow:(t,e)=>` · langsam für ${ze[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoWide:(t,e)=>` · breit für ${ze[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · schmal für ${ze[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · für volle Punkte: ein langsameres Vibrato, ${Ut(e,e%1?1:0)}–${Ut(n,n%1?1:0)} Schwingungen pro Sekunde in ${ze[i]} (deins ${String(t).replace(".",",")})`,vibratoFaster:(t,e,n,i)=>` · für volle Punkte: ein schnelleres Vibrato, ${Ut(e,e%1?1:0)}–${Ut(n,n%1?1:0)} Schwingungen pro Sekunde in ${ze[i]} (deins ${String(t).replace(".",",")})`,vibratoNarrower:(t,e,n,i)=>` · für volle Punkte: ein schmaleres Vibrato, ${e}–${n} ¢ in ${ze[i]} (deins ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · für volle Punkte: ein breiteres Vibrato, ${e}–${n} ¢ in ${ze[i]} (deins ${t} ¢)`,vibratoMore:t=>` · für volle Punkte: Vibrato auf ${t===1?"dem Ton":`den ${t} Tönen`} ohne`,vibratoSteadier:t=>` · für volle Punkte: ${t===1?"einen langen Ton":`${t} lange Töne`} ruhiger halten oder Vibrato spielen`,vibratoOptional:t=>` · in ${ze[t]} freiwillig`,slidesInStyle:(t,e,n)=>`${da(t,e)}, stilecht für ${n}`,slidesBadTaste:(t,e,n)=>`${da(t,e)}: ein Stilbruch für ${n}`},silent:[["Hast du gespielt?","Wir haben keinen einzigen Ton gehört."],["Hallo? Jemand da?","Kein Ton ist bei uns angekommen."],["Stille Nacht?","Das war sehr leise. Zu leise."],["Hast du gespielt?","Ling Ling hat nichts gehört, und Ling Ling hört alles."]],silentTip:"Prüfe, ob das Mikrofon erlaubt ist und sich die Anzeige bei „Eingang“ beim Spielen bewegt.",praise:[[["Brillant!","Das war reif für die Bühne."],["Bravo!","Das Publikum steht auf."],["Herausragend!","Kaum ein Ton daneben."],["Großartig!","Du hast das Stück zum Singen gebracht."]],[["Glückwunsch!","Ein schöner Vortrag."],["Wunderschön!","Es war eine Freude zuzuhören."],["Wunderbar!","Du kennst dieses Stück richtig gut."],["Schön gespielt!","Nur noch ein paar Feinheiten bis perfekt."]],[["Gut gespielt!","Schön gemacht. Ein bisschen Feinschliff, und es glänzt."],["Gute Arbeit!","Das Stück nimmt Gestalt an."],["Prima!","Du bist auf einem guten Weg."],["Solide Aufnahme!","Bleib dran, dann funkelt es."]],[["Gut versucht!","Da geht noch mehr. Probier es noch einmal!"],["Es wird!","Mit jedem Durchgang wird es runder."],["Nicht schlecht!","Noch ein paar Runden, und du hast es."],["Weiter so!","Das Schwerste hast du hinter dir."]],[["Bleib dran!","Jede Aufnahme macht dich besser."],["Guter Anfang!","Nimm das Tempo raus und versuch es noch einmal."],["Nicht aufgeben!","Auch die Großen haben das geübt."],["Übung macht den Meister!","Markier einen schwierigen Takt und wiederhole ihn."]]],highlights:{intonation:["Deine Intonation war der Star dieser Aufnahme.","Wunderbar sauber!","Dein Gehör hat großartige Arbeit geleistet."],timing:["Genau im Takt, von Anfang bis Ende.","Dein Timing war bombenfest.","Du und das Klavier wart perfekt zusammen."],sound:["Was für ein schönes Vibrato!","Deine langen Töne haben richtig gesungen.","Ein warmer, singender Ton."],dynamics:["Deine Dynamik hat die Musik lebendig gemacht.","Schön gestaltet, laut und leise.","Du bist jedem Crescendo und Diminuendo gefolgt."],trills:["Funkelnde Triller, schön schnell!","Deine Triller waren eine Freude: schnell und sauber.","Wie ein Singvogel: schöne Triller."],missed:["Kein einziger Ton ausgelassen.","Jeder Ton war da.","Du hast nie den Faden verloren."],wrong:["Blitzsauber: kein falscher Ton.","Jeder Ton war der richtige.","Wunderbar treffsichere Finger."],glide:["Schöne, ausdrucksvolle Glissandi: ganz romantisch!","Deine Glissandi gaben ihm echte romantische Wärme.","Schönes Portamento, genau richtig für diese Musik."]},tips:{intonation:["Tipp: Stimm die langen Töne gegen das Klavier ab.","Tipp: Spiel die schwierigen Takte langsam und hör auf jeden Ton.","Tipp: Prüf deine Intonation an den leeren Saiten."],timing:["Tipp: Schalte den Klick ein und setz mit dem Schlag ein.","Tipp: Zähl die Pausen laut mit, bevor du einsetzt.","Tipp: Nimm das Tempo zurück und steigere es dann wieder."],sound:["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Lass die langen Töne klingen und singen."],dynamics:["Tipp: Achte auf die p und f und mach den Unterschied größer.","Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Spiel die leisen Stellen wirklich leise, dann lass die lauten heraus."],trills:["Tipp: Üb die Triller langsam und gleichmäßig, dann schneller.","Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Fang den Triller ruhig an und lass ihn dann immer schneller werden."],missed:["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Markier die Takte mit fehlenden Tönen und wiederhole sie."],wrong:["Tipp: Markier die schwierigen Takte und wiederhole sie langsam.","Tipp: Prüf den Fingersatz dort, wo die falschen Töne waren.","Tipp: Spiel die schwere Stelle langsamer, bis jeder Ton stimmt."],glide:["Tipp: Wechsle sauber zwischen den Tönen: kein Rutschen in diesem Stil.","Tipp: In Klassik und Barock die Lagenwechsel sauber und schnell halten.","Tipp: Lass die Glissandi weg: Lagenwechsel ohne Rutschen."]}},Et=(t,e,n)=>`${t} ${t===1?e:n}`,Fe=["Romantic music","this music","Classical music","Baroque music","folk music","fiddle music","klezmer","this style"],ua=(t,e)=>[t&&Et(t,"glissando","glissandi"),e&&Et(e,"slide","slides")].filter(Boolean).join(", "),Fm={versionTitle:(t,e)=>`Version ${t}, commit ${e}`,darkMode:"Dark mode",lightMode:"Light mode",themeMenu:"Look: light or dark, colours",schemes:{blue:"Ocean",violet:"Plum",teal:"Lagoon",rose:"Raspberry",graphite:"Graphite"},helpTitle:"How to use (?)",helpLabel:"How to use Violin Hero",tools:{key:"Tools",title:"Tools: tuner and more",tuner:"Tuner",tunerLead:"Tune your violin",setup:"Audio setup",setupLead:"Microphone and speakers, input level, delay",more:"More tools",moreLead:"Add tools like the Vibralizer in the Marketplace",moduleFailed:"This tool could not be loaded. Check your connection and try again.",close:"Close"},marketTitle:"Violin Hero Marketplace: more content packs",overlay:{marketplace:"Content packs and tools for Violin Hero",halloffame:"The best takes, players and pieces",close:"Back to Violin Hero"},languageTitle:t=>`Language: ${t}`,languageMenu:"Choose the language",tempo:"Tempo",click:"Click",fullscreen:"Violin part in full screen mode",leaveFullscreen:"Back to the normal view (Esc)",dragBar:"Drag to move the bar",pageSize:"Score size",pageSizes:{small:"Small: more bars to a line",medium:"Medium",large:"Large: easier to read and to mark up"},metronome:"Metronome",practice:"Practice",piano:"Piano",pianoModel:"Sound",staves:"Staves",violin:"Violin",humanize:"Humanize",reverb:"Reverb",volume:"Volume",pianos:{grand:"Grand",upright1:"Upright 1",upright2:"Upright 2"},startStop:"Start/Stop",play:"Play",pause:"Pause",playTitle:"Play / pause (P; double-click: back to the start)",navigation:"Navigation",back:"Back",forward:"Forward",backTitle:"One bar back (double-click: the start)",forwardTitle:"One bar on (double-click: the end)",take:"Take",record:"Record",stop:"Stop",recordTitle:"Record (R)",finishMarking:"Finish marking up first (Esc)",clear:"Clear",sure:"Sure?",clearTitle:"Clear the take",clearConfirmTitle:"Press again to clear the take",share:"Share",shareTitle:"Share your take",shareScoreTitle:"Share your markings of this piece (a link)",section:"Section",marker:"Marker",markerTitle:"Mark a section (M)",repeat:"Repeat",repeatTitle:"Repeat the section (L; double-click: to its start)",input:"Input",inputGain:"Input gain",level:"Level",levels:["Beginner","Easy","Intermediate","Advanced","Expert"],genre:"Genre",allGenres:"All",allLevels:"All",genres:{early:"Early music",baroque:"Baroque",classical:"Classical",romantic:"Romantic",modern:"Modern & contemporary",concertos:"Concertos",sonatas:"Sonatas",showpieces:"Showpieces",salon:"Salon pieces",dances:"Dances",opera:"Opera & operetta",sacred:"Sacred & hymns",etudes:"Études",carols:"Christmas & carols",wedding:"Wedding",children:"Children’s songs",folk:"Folk songs",celtic:"Celtic & fiddle",bluegrass:"Bluegrass & country",hungarian:"Hungarian & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & swing",film:"Film & game music",pop:"Pop, rock & musicals",warmups:"Warm-ups",scales:"Scales",technique:"Technique & exercises"},piece:"Piece",placeOf:(t,e)=>`${t} of ${e}`,scoreLabel:"Score",scorePdfTitle:"The violin part as a PDF, to print or download",fingeringsBy:t=>`Score has been marked up by ${t}`,fingeringsAdded:"Score has been marked up",pieceCount:t=>t?Et(t,"piece","pieces"):"No pieces",lockedCount:t=>`${t} locked`,noneUnlocked:"none unlocked",noPieces:"No pieces here: try another level",interpretation:"Interpretation",defaultWritten:"Default",defaultNone:"No interpretations",recordings:"Recordings",recordingsNone:"None",recordingsEmpty:"No recordings yet",you:"You",loop:"Loop",playTake:(t,e)=>`Play your take (${t}, ${e})`,stopRecording:"Stop the recording",playRecording:(t,e)=>`Play the recording (${t}${e?", on YouTube":""})`,chooseRecording:"Choose a recording to play it",hints:{playPause:"play / pause",record:"record",bar:"bar",marker:"marker",repeat:"repeat",violin:"violin",piece:"piece",yourTake:"your take",recording:"recording",help:"help"},panels:{navigation:"Transport",playback:"Settings",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Sett.",repertoire:"Rep."},panelOpen:t=>`Show ${t}`,panelClose:t=>`Hide ${t}`,controls:"Controls",stopVideo:"Stop the video",resizeVideo:"Drag to resize the video",flags:{loadingRecording:"Loading recording",aligning:(t,e)=>t==="spectrum"?`Analysing the spectrum ${e} %`:t==="aligning"?`Detecting the tempo: ${e} % of the score`:`Matching the piano notes ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violin muted",pianoOff:"Piano muted",rec:"Rec",yourTake:"▶ Your take",takeOf:t=>`▶ ${t}’s take`,repeat:"Repeat",loadingSounds:"Loading sounds",loadingPiano:"Loading piano",loadingViolin:"Loading violin",noMicrophone:"No microphone",savingToAccount:"Saving to your account",savedToAccount:"✓ Saved to your account",keptForLater:"Kept here: saved to your account later",openingTake:"Loading your take",takeNotOpened:"Your take could not be loaded",syncing:t=>`Saving ${Et(t,"recording","recordings")} to your account`,synced:t=>`✓ ${Et(t,"recording","recordings")} saved to your account`,sharing:"Making a link to your take",shareFailed:"The take could not be shared",signInToShare:"Sign in to share your takes",openingShared:"Loading the shared take",sharedNotOpened:"The shared take could not be loaded",tapToPlay:"Tap anywhere to play",speakersHeard:"Piano heard through the microphone: use headphones",phoneMode:"Bluetooth headset in phone-call mode: use wired headphones or the device’s microphone"},messages:{soundsFailed:"Sounds could not be loaded",scoreFailed:"Score could not be loaded",pianoFailed:"Piano could not be loaded",recordingFailed:"Recording could not be loaded",noTimingYet:t=>`No timing yet: needs ${t}`,noTimingVideo:"No timing for this video",videoFailed:"Video could not be loaded",loadingScore:"Loading score…",engraving:"Engraving…"},edited:"↺ Edited",revertQuestion:"Revert?",editedTitle:"Annotated: click to go back to the score as written",revertConfirmTitle:"Click again to take every annotation off",versionClearTitle:"Take this version’s markings off",versionClearConfirmTitle:"Click again to take every marking of this version off",curveDefault:"Default",curveDefaultTitle:"As written, humanized",curveRecordingTitle:t=>`The recording: ${t}`,wrongNote:"Wrong note!",noteMissed:"Note missed!",wrongShort:"Wrong",missedShort:"Missed",stickerTimeShort:t=>`${t.toFixed(2)} s`,stickerPitch:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,stickerPitchTitle:(t,e)=>`${e?"Too high":"Too low"}: ${t}`,stickerTime:(t,e)=>`${t.toFixed(2)} s ${e?"late":"early"}`,annotate:"Annotate the notes selected",notesSelected:t=>Et(t,"note","notes"),finger:t=>`Finger ${t}`,openString:"Open string (0)",downBow:"Down-bow",upBow:"Up-bow",staccato:"Staccato",accent:"Accent",tenuto:"Tenuto",harmonic:"Harmonic (flageolet)",dynamicTitle:t=>`Dynamic: ${t}`,fermata:"Fermata",slur:"Slur",crescendo:"Crescendo (<)",diminuendo:"Diminuendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Not while a take is kept: it lines up only with its timing",revert:"Revert",revertTitle:"Back to the marks written in the score",fx:{boo:["Boo!","Ouch!","Yikes!","Oops!","Eek!"],late:["Late!","Wake up!","Too slow!"],early:["Wait!","Too soon!","Hold it!"],short:["Too short!","Hold it longer!","Keep the bow going!"],surf:["Surf's up!","Cowabunga!","Ride it!"],snowboard:["Shred it!","Sick slide!","Whoosh!"],ski:["Whee!","Downhill!","Swoosh!"],penguin:["Wheee!","Belly slide!","Sliiide!"],tweet:"Tweet!",buzz:"Bzzz!",trill:"Trrrill!",chirp:"Chirp!",vibrato:["Vibrato!","So warm!","Lovely!","It sings!"]},signIn:"Sign in",signedInAs:t=>`Signed in as ${t}`,createAccount:"Create an account",createAccountButton:"Create account",haveAccount:"I have an account",forgotPassword:"Forgot your password?",or:"or",google:"Continue with Google",agree:["By continuing you agree to our "," and have read our ","."],termsName:"terms of use",privacyName:"privacy policy",close:"Close",email:"Email",password:"Password",passwordHint:t=>`At least ${t} characters`,accountLead:t=>`Violin Hero works without an account. Signed in, your recordings are saved to your account${t?`, and the ${t===1?"take":`${t} takes`} kept in this browser with them`:""}.`,enterEmailFirst:"Enter your email address first.",resetSent:t=>`We sent a link to reset your password to ${t}.`,confirmEmail:"Please confirm your email address: the link is in your inbox.",anonymous:"Anonymous",save:"Save",nicknameTaken:t=>`“${t}” is already taken. Try another one!`,nicknameInvalid:"A nickname can’t contain “/”.",pickNickname:"Pick a nickname",nicknameDialog:{title:"Pick your nickname",lead:"It shows with your recordings in the top scores and the Hall of Fame. Other players see only this name, so choose one you’re happy to have public.",label:"Nickname",save:"Save nickname",later:"Later"},signOut:"Sign out",profile:"Profile",roles:"What are you up to?",creatorDashboard:"Your creator dashboard",invite:"Invite a violinist",inviteCopied:"Link copied: send it to a violinist!",inviteFailed:"The link could not be copied",inviteText:"Practise with me on Violin Hero: play along with the piano, see how in tune you are and record your takes.",feedback:"Feedback & bug reports",hintTitle:"Sign in to save your recordings and your progress",scoreHintTitle:"Sign in to print scores",scoreHintText:"Printable scores with your fingerings and marks are for signed-in players.",shareHintTitle:"Sign in to share your markings",shareHintText:"Your fingerings, bowings and dynamics get a link of their own: send it to your teacher or your stand partner.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"yours",shareScoreDone:{headlines:[["Link copied!","Your markings are ready to be shared."],["Off it goes!","Your fingerings and dynamics now have a link of their own."],["Ready to share!","A score marked up by you: that is real musicianship."]],ready:["Your link","Copy it, and your markings are ready to be shared."],anywhere:"Send it any way you like. Whoever opens it gets the piece with your fingerings, bowings and dynamics, added to their pieces under your name.",who:["Your teacher","Your stand partner","Your orchestra","Your friends"],cheers:["Good fingerings are a gift: pass them on.","Your teacher will love seeing how you think about the music.","Ling Ling marks every score. Now so do you.","Shared markings, fewer wrong notes, more music."]},sharedScore:{sharedBy:t=>`${t} shared their markings with you`,sharedByAnyone:"Someone shared their markings with you",yours:"Your own markings",you:"yours",someone:"shared",intro:"A marked-up score, ready to practise with: their fingerings, bowings and dynamics on the notes, played as marked.",kinds:{fingerings:"fingerings",bowings:"bowings",articulations:"articulations",dynamics:"dynamics",phrasing:"slurs, fermatas and rit."},cheers:["Learning from each other is how musicians grow.","Somebody thought of you while marking this score.","New fingerings, new ideas: give them a try!","Practising together, even apart."],open:"Open the score",later:"Not now",addedAs:(t,e)=>`Added to your pieces as “${t} – ${e}”, beside the original.`},hintText:t=>`${t>1?`${t} takes are`:"Your take is"} kept in this browser until you sign in, then saved to your account, with the pieces you have unlocked.`,hintDismiss:"Don’t show this again",graphShow:"Show the tempo and loudness graph",graphHide:"Hide the tempo and loudness graph",logoHintTitle:"Your start page is up here",startPage:"To the start page",logoHintText:"Tap the Violin Hero icon to open the start screens again: tune your violin and pick a piece.",recordHints:["One more go? Start a new take!","Every take brings the next piece closer. Record another!","Practice makes perfect: tap here for a new take."],navHintTitle:"Step through the bars",navHintText:"Back and Forward jump a bar at a time, so you can hear a passage again. Or drag the score.",pageHintTitle:"There’s more to discover",pageHintText:"Close the page view here: the normal view has all the pieces, recordings of great violinists to play along with, your takes and the settings.",guide:{passed:"Well done! On to the next piece",passedLead:t=>`${t} is waiting for you.`,again:"One more take?",againLead:(t,e)=>e===1?`Reach ${t} %, or record one more take, to open the next piece.`:`Reach ${t} %, or record ${e} more takes, to open the next piece.`,allDone:"You’ve played every starter piece!",allDoneLead:"The normal view has the whole library, recordings of great violinists and more.",play:t=>`Play ${t}`,recordAgain:"Record again",onceMore:"Once more",tryOther:t=>`Try ${t}`,toNormal:"To the normal view",leave:"No more suggestions"},auth:{wrongPassword:"Wrong email or password.",emailInUse:"There is already an account with this email: sign in instead.",weakPassword:t=>`The password needs at least ${t} characters.`,invalidEmail:"That email address doesn’t look right.",tooMany:"Too many attempts: please wait a moment and try again.",popupClosed:"The Google window was closed before signing in.",popupBlocked:"The browser blocked the Google window: allow pop-ups for this page.",unauthorizedDomain:"Signing in isn’t enabled for this address yet.",network:"No connection: check your network and try again.",failed:t=>`That didn’t work (${t}).`},deleteTake:{title:"Delete this take?",account:"It will be deleted from your account for good: the recording and everything saved with it.",ranked:"It is in the top scores of this piece too: it will be removed from them, for everyone.",place:t=>`It is number ${t} in the hall of fame: it will be removed from it, for everyone.`,keepsProgress:"The pieces you have unlocked stay unlocked.",confirm:"Delete it",cancel:"Keep it",deleting:"Deleting…",failed:"The take could not be deleted. Please try again."},shareDone:{headlines:[["Link copied!","Your recording is ready to be heard."],["Off it goes!","Your take now has a link of its own."],["Ready to share!","Be proud of it: you played that."]],ready:["Your link","Copy it, and your recording is ready to be heard."],anywhere:"Send it any way you like: by message, email or chat. Whoever opens it hears your recording, with the piano, just as you played it.",who:["Your teacher","Your parents","Grandma and Grandpa","Your friends"],cheers:["Every take you share is a little concert.","Your teacher will love hearing how you practise.","Ling Ling shares every take. Well, the good ones. This one counts.","Music is for listening to. Let them hear you!"],playedAlong:"Played along with",copy:"Copy",copyAgain:"Copy again",copiedAgain:"✓ Copied",done:"Done",text:t=>`Listen to me playing ${t} on Violin Hero!`},install:{title:"Install Violin Hero as an app",tap:"Tap",share:"Share",then:"then",add:"Add to Home Screen",openInSafari:"Open this page in Safari, tap",chromeToo:"Newer Chrome versions have it under the share icon in the address bar too.",close:"Close"},practiceTips:{title:"Practice tips",video:"Watch the video",videoTitle:"Opens the video on YouTube, in a new tab",start:"Start now",close:"Close",open:"Practice tips",openTitle:"Show the practice tips for this piece",festiveTitle:"Christmas practice tips",festiveLead:"It’s Christmas time, the best time of year for this one: practise it now and play it under the tree for family and friends."},headphones:{title:"Put on wired headphones",wired:"Wired:",wiredWhy:"the microphone hears only your violin.",speakers:"Speakers:",speakersWhy:"the piano gets recorded too.",bluetooth:"Bluetooth:",bluetoothWhy:"lags and can distort your take.",gotIt:"Got it!",appleAdapter:"Use Apple’s own 3.5 mm adapter: others may go silent."},welcome:{loading:["Rosining the bow…","Tuning the piano…","Unpacking the scores…","Warming up the orchestra…","Polishing the strings…","Dimming the lights…"],progress:t=>`${t} %`,loadingFailed:"Some sounds could not be loaded. Check your connection.",continueAnyway:"Continue anyway",begin:"Let’s go",skipIntro:"Skip",beginNote:"Your browser will ask to use the microphone, so Violin Hero can hear your violin.",points:{wired:"Headphones:",wiredWhy:"put on to hear the playback.",mic:"Microphone:",micWhy:"allow to record your performance.",speakers:"Speakers:",speakersWhy:"turn them off.",bluetooth:"Bluetooth:",bluetoothWhy:"avoid, it can distort your take."},hearString:t=>`Hear the ${t}`,stopTone:"Stop the tone",byEar:"Tune by ear: the beats slow down as you get close",tuner:"Tuner",level:"Level",gain:"Input",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t)} dB`,gainTitle:"The microphone’s gain: set it so your loudest notes reach the green area (double-click: +12 dB)",cal:{key:"Calibrate",keyTitle:"Measure the delay from the speakers to the microphone, so your recordings line up with the piano",ms:t=>`${t} ms`,title:"Measure audio latency",speakers:"Plug in the headphones you play with and turn the volume up.",micOn:"Hold one earpiece right at your device’s microphone.",quiet:"Keep quiet for a few seconds while the clicks play.",measuring:(t,e)=>`Listening… click ${t} of ${e}`,result:t=>`Delay: ${t} ms`,notHeard:"The clicks weren’t heard.",unsteady:"The clicks were heard unevenly.",tryAgain:"Turn the volume up, hold the earpiece right at the microphone, keep quiet and try again.",needMic:"The microphone is needed: allow it first.",back:"Done",start:"Start measuring",again:"Measure again",newMeasurement:"New measurement",save:"Save"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Microphone",inputTitle:"The input in use, as your system names it; for a stereo one, each side’s level",setupTitle:"Audio setup",inputDevice:"Microphone input",outputDevice:"Headphone output",systemDefault:"System default",sidesTitle:"Each side of the input on its own: a silent or noisy side shows here",newInput:t=>`New input: ${t}`,useInput:"Use it",levelTitle:"The input level: your loudest notes in the green area make a clean take; in the red one they distort",startTuning:"Start tuning",micWhy:"Violin Hero listens through your microphone.",micAsking:"Allow the microphone in your browser…",micDenied:"No microphone. Allow it in your browser to tune and record.",playString:t=>`Play your ${t} string`,tuneUp:"Tune up",tuneDown:"Tune down",inTune:"In tune!",offBy:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,wrongString:(t,e)=>`That sounds like your ${t} string. Play the ${e}.`,farOff:"Far off: turn slowly and listen",stringTitle:t=>`Tune the ${t} string`,aDone:t=>`Your ${t} is in tune!`,others:t=>`Now the ${t.length>1?`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`:t[0]}, or tune them yourself.`,skip:"I’ll tune the others myself",alreadyInTune:"My violin is already in tune",closeTool:"Done",allDone:"All four strings in tune. Beautiful!",next:"Continue",ready:"Ready to go",firstPiece:"Your first piece",firstPieceLead:"Easy to start with, lovely to play. New pieces unlock once you can play this one well.",accountTitle:"Keep what you play",accountLead:"Free: your takes and progress, on every device.",signIn:"Sign in",signedIn:t=>`Signed in as ${t}: your takes and progress are saved.`,offline:"Offline: your takes wait on this device and are saved once you are back online.",go:"Bows up!",goNote:"Two bars count you in, then your first take starts.",backToTuner:"Back to the tuner"},deleteAccount:{menu:"Delete account…",title:"Delete your account?",loading:"Looking up what is stored…",lead:"This is what will be deleted for good:",nickname:t=>`Your nickname “${t}”`,takes:(t,e)=>`${t===1?"1 recording":`${t} recordings`}${e?` (${e} in the hall of fame)`:""}, with their share links`,progress:(t,e)=>`Your progress: ${t===1?"1 piece":`${t} pieces`} passed, ${e===1?"1 take":`${e} takes`} counted`,practice:t=>`Your practice time (${t})`,markings:(t,e)=>`Your markings on ${t===1?"1 piece":`${t} pieces`}${e?`, ${e} shared`:""}`,packsAdded:t=>`Content packs you added: ${t}`,packsMade:t=>`Content packs you made: ${t}`,creatorProfile:"Your creator profile",invitations:t=>`Your invitations${t?` (${t} karma)`:""}`,feedback:(t,e,n)=>`Your feedback: ${t===1?"1 post":`${t} posts`}, ${e===1?"1 vote":`${e} votes`}${n?", your rating":""}`,family:(t,e)=>`Your family links: ${t===1?"1 child only you look after":`${t} children only you look after`}, ${e===1?"1 partner":`${e} partners`}`,teaching:t=>`Your teaching: ${t===1?"1 room":`${t} rooms`}, the voice memos of your lesson notes`,browser:"What this browser keeps (settings, takes waiting to upload)",packsBought:t=>`Content packs you bought will be lost: ${t}. Your purchases belong to this account; with a new one you would have to buy them again.`,packsKept:t=>`Kept: ${t}. Players have added these packs, so they stay, with your creator profile.`,creatorStays:"Your creator profile and your content packs stay. To delete them, choose “Delete creator data…” in the account menu on the creator page.",login:"Your login is deleted too.",loginSchool:"Your login stays: it is still in use elsewhere in Crescendu.",loginCreator:"Your login stays, for your creator data.",creatorMenu:"Delete creator data…",creatorTitle:"Delete your creator data?",creatorNothing:"Nothing can be deleted: players have added all your content packs.",creatorLoginPacks:"Your login stays, for the content packs players have.",creatorLoginPlayer:"Your login and your Violin Hero data stay. To delete them, choose “Delete account…” in Violin Hero’s account menu.",creatorCancel:"Keep my creator data",creatorConfirm:"Delete creator data",doneCreator:"Your Violin Hero data is gone. Your login stays for your creator data: delete that on the creator page, and the login goes with it.",creatorDoneLogin:"Your creator data and your login are gone. Thank you for creating for Violin Hero!",creatorDoneSchool:"Your creator data is gone; your login stays, as it is still in use elsewhere in Crescendu.",creatorDonePacks:"The packs no player had are gone. The others stay, with your creator profile and your login.",creatorDonePlayer:"Your creator data is gone. Your login and your Violin Hero data stay.",understood:"I understand that this can’t be undone.",cancel:"Keep my account",confirm:"Delete everything",deleting:"Deleting…",steps:{takes:"Deleting your recordings…",library:"Removing the packs you added…",packs:"Deleting the packs you made…",profile:"Deleting your creator profile…",feedback:"Deleting your feedback…",messages:"Deleting your messages and praise…",rest:"Deleting your progress and practice time…",family:"Deleting your family links…",teaching:"Deleting your rooms and voice memos…",other:"Deleting the rest of your Crescendu data…",browser:"Clearing this browser…",login:"Deleting your login…"},failed:"Not everything could be deleted. Please try again.",doneTitle:"Your data is deleted",doneLogin:"Your account is gone. Thank you for practising with Violin Hero!",doneSchool:"Your Violin Hero data is gone; your login stays, as it is still in use elsewhere in Crescendu.",doneAgain:"Your data is gone. To delete your login too, sign in once more and choose Delete account again.",ok:"OK"},nextPack:{title:"You’ve opened the whole starter pack!",text:"Ready for more? “Popular violin pieces” has 25 favourites, from the Méditation to the Czardas, all open as soon as you add it.",signIn:"Sign in in the marketplace to add it.",show:"Show me",later:"Later"},packUpdates:{title:t=>t===1?"A content pack has an update":`${t} content packs have updates`,untitled:"Content pack",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Update",updating:"Updating…",keep:t=>`Keep version ${t}`,later:"Decide later",note:"Your takes stay either way."},sharedTake:{sharedBy:t=>`${t} shared a recording with you`,sharedByAnyone:"Someone shared a recording with you",yours:"Your own recording, from your link",played:"Played",tempo:"Tempo",originalTempo:"Original tempo",section:"Section",playedAlong:"Played along with",bars:(t,e)=>`Bars ${t}–${e}`,score:"Score",withPiano:"You will hear the violin as it was played, with the piano, the notes scrolling along.",listen:"Listen",playsOnClose:"It starts playing when you close this card."},unlock:{locked:"Locked: unlock it by passing pieces or by practising",next:"Next to unlock",all:"Every piece is unlocked. Ling Ling would be proud!",pass:(t,e)=>`Score ${t} % on a piece you haven’t passed yet (at ${e} % tempo or faster)`,thisTake:t=>`This take: ${t} %`,passedNow:"✓ Passed!",passedBefore:"This piece is passed already: try another one.",or:"or",signIn:"Sign in to keep your progress safe, on every device.",takes:t=>`record ${t} more ${t===1?"take":"takes"}`,nudges:["Ling Ling practises 40 hours a day. A few more takes won’t hurt!","Practise like Ling Ling: 40 hours a day (a few minutes is a fine start).","Ling Ling is watching. Pick up the violin!","Don’t be a viola. Record it once more!","Emotional damage? No: emotional progress!","Every take brings you a little closer to Ling Ling.","Sacrifice your sleep for Ling Ling? Just one more take will do.","Ling Ling would play it with a hangover. You can play it now!"],title:"New piece unlocked!",titleMany:t=>`${t} new pieces unlocked!`,newLevel:t=>`New level: ${t}!`,play:"Play it now",later:"Later",cheers:["Ling Ling would be proud!","That’s the 40-hours-a-day spirit!","Ling Ling approves. Keep going!","Your practice paid off. On to the next one!","Brilliant! Even a viola would cheer for that."],levelCheers:["A whole new level! Even Ling Ling started as a Beginner once.","Level up! Ling Ling is getting nervous.","Welcome to the next level: the real practice starts now!"]},best:(t,e,n)=>`Best: ${t} · ${e}/${n}`,bestTitle:"Show the top scores for this piece",practising:t=>t===1?"1 other player is currently practising this piece":`${t} other players are currently practising this piece`,invites:["No top score yet: your chance to make it to the top!","The podium is empty. Record the whole piece and claim first place!","Nobody has scored this one yet. Be the first!","First place is up for grabs: practise, then record!","An empty hall of fame is waiting for your name.","Be the one everybody else has to beat.","Fresh piece, clean slate: set the score to beat!","Gold is still free for this piece. Go and get it!"],board:{title:"Hall of fame",of:t=>`Top scores for ${t}`,practise:"Let’s practise",you:"you",play:t=>`Play ${t}’s take`,openPodium:t=>`${t===1?"One place on the podium is":`${t} places on the podium are`} still free: it could be yours!`,toEnter:t=>`Score more than ${t} points to make it onto the board.`,onBoard:t=>`You are number ${t}: can you climb even higher?`,top:"You are at the top. Can you beat your own best?",signIn:"Sign in so that your takes count.",howTo:"Record the whole piece, from its start to its end, at full tempo (100 %), to make it onto the board.",tips:["Practise the hard bars first: mark them with Marker and let Repeat go round.","Slow the tempo down until every note sits, then build it up again.","Play along with the violin first, then switch it off and take over.","Listen to a great performance under Interpretation, then make it your own."]},yourScore:"Your score",yourScoreOpen:"Your score: show it in full",yourScoreTitle:"Your score: click for the details",outOf:t=>`of ${t}`,stars:t=>`${t} of 5 stars`,reportSteps:{next:"What’s next",done:"Done",practise:"Keep practising",back:"Back to your score",title:"Your next steps",applause:"Applause"},shareSignIn:"Proud of this take? Sign in and you can share it: send the link to your teacher, your family or your friends, and they hear exactly how you played.",unranked:t=>`Played at ${t} % of the tempo, so this take doesn’t count for the top scores: only takes at 100 % do. ${t<100?"Work your way up to full speed, then record it again!":""}`,publish:{title:"This take qualifies for the Hall of Fame!",text:"Publish it and your recording becomes public: it is listed on this piece’s board and in the Hall of Fame under your nickname, and anyone can listen to it there.",signInText:"Sign in to publish it: your recording then becomes public, listed on this piece’s board and in the Hall of Fame.",publish:"Publish",publishing:"Publishing…",saving:"Saving…",signIn:"Sign in",failed:"It couldn’t be published. Please try again.",doneTitle:"You’re in the Hall of Fame!",doneText:"Your recording is published on this piece’s board and in the Hall of Fame.",see:"See it"},topScores:t=>`Top scores for ${t}`,scoreHeadline:"Score",loading:"Loading…",noScores:"No scores for this piece yet.",thisTake:"(this take)",styleBonus:"Style bonus",badTaste:"Bad taste",bonus:"Bonus",penalty:"Penalty",categories:{intonation:"Intonation",timing:"Timing",sound:"Sound",dynamics:"Dynamics",trills:"Trills",missed:"Missed notes",wrong:"Right notes"},details:{nothingHeard:()=>"Nothing heard",spotOn:()=>"Spot on",centsOff:t=>`${t} ¢ off on average`,landedLate:t=>` · ${t} landed late`,noEntries:()=>"No entries heard",earlyLate:(t,e)=>[t&&`${t} early`,e&&`${e} late`].filter(Boolean).join(", "),onTime:()=>"Always on time",heldShort:t=>`On time, ${t} long ${t===1?"note":"notes"} cut short`,alsoHeldShort:t=>` · ${t} long ${t===1?"note":"notes"} cut short`,playedOnly:(t,e)=>` · only ${t} of ${e} notes played`,shaping:t=>`Shaping followed ${t} %`,allFollowed:t=>`All ${t} changes followed`,wrongWay:(t,e)=>`${t} of ${e} played the wrong way`,tooFewNotes:()=>"Too few notes heard",trills:(t,e,n)=>`${t} of ${Et(e,"trill","trills")}${t?` · ${n.toFixed(0)} notes/s`:""}`,notesOf:(t,e)=>`${t} of ${e} notes`,rightOf:(t,e)=>`${t} of ${e} notes right`,noneMissed:()=>"None missed",noneWrong:()=>"All notes right",noLongNotes:()=>"No long notes heard",vibrato:(t,e)=>`Vibrato on ${t} of ${e} long notes`,openStrings:()=>"Long open strings held steady",vibratoFast:(t,e)=>` · fast for ${Fe[e]} (${t} per second)`,vibratoSlow:(t,e)=>` · slow for ${Fe[e]} (${t} per second)`,vibratoWide:(t,e)=>` · wide for ${Fe[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · narrow for ${Fe[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · for full points: a slower vibrato, ${e}–${n} swings a second in ${Fe[i]} (yours ${t})`,vibratoFaster:(t,e,n,i)=>` · for full points: a faster vibrato, ${e}–${n} swings a second in ${Fe[i]} (yours ${t})`,vibratoNarrower:(t,e,n,i)=>` · for full points: a narrower vibrato, ${e}–${n} ¢ in ${Fe[i]} (yours ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · for full points: a wider vibrato, ${e}–${n} ¢ in ${Fe[i]} (yours ${t} ¢)`,vibratoMore:t=>` · for full points: vibrato on the ${t===1?"note":`${t} notes`} played without`,vibratoSteadier:t=>` · for full points: hold ${t===1?"one long note":`${t} long notes`} steadier, or add vibrato`,vibratoOptional:t=>` · optional in ${Fe[t]}`,slidesInStyle:(t,e,n)=>`${ua(t,e)}, in ${n} style`,slidesBadTaste:(t,e,n)=>`${ua(t,e)}: bad taste in ${n} music`},silent:[["Did you play?","We didn’t hear a single note."],["Hello? Anyone there?","Not one note reached us."],["Silent night?","That was very quiet. Too quiet."],["Did you play?","Ling Ling heard nothing, and Ling Ling hears everything."]],silentTip:"Check that the microphone is allowed and the level under Input moves while you play.",praise:[[["Brilliant!","That was concert ready."],["Bravo!","The audience is on its feet."],["Outstanding!","Hardly a note out of place."],["Magnificent!","You made that piece sing."]],[["Congratulations!","A lovely performance."],["Beautiful!","That was a pleasure to listen to."],["Wonderful!","You really know this piece."],["Lovely playing!","Just a few details from perfect."]],[["Well played!","Nicely done. A little polish and it shines."],["Good job!","The piece is coming together."],["Nice work!","You are well on your way."],["Solid take!","Keep at it and it will sparkle."]],[["Good effort!","You can do better. Try it once more!"],["Getting there!","Every run makes it smoother."],["Not bad!","A few more rounds and you have it."],["Keep it up!","The hard part is behind you."]],[["Keep going!","Every take makes you better."],["Good start!","Slow it down and try again."],["Don’t give up!","Even the greats practised this."],["Practice makes perfect!","Mark a tricky bar and loop it."]]],highlights:{intonation:["Your intonation was the star of this take.","Beautifully in tune!","Your ear did a great job."],timing:["Right on the beat, all the way through.","Your timing was rock solid.","You and the piano were perfectly together."],sound:["What a lovely vibrato!","Your long notes really sang.","A warm, singing tone."],dynamics:["Your dynamics brought the music to life.","Lovely shaping, loud and soft.","You followed every crescendo and diminuendo."],trills:["Sparkling trills, nice and quick!","Your trills were a joy: quick and clean.","Like a songbird: lovely trills."],missed:["Not a single note left out.","Every note was there.","You never lost your place."],wrong:["Clean as a whistle: no wrong notes.","Every note was the right one.","Wonderfully accurate fingers."],glide:["Beautiful, expressive slides: very Romantic!","Your glissandi gave it real Romantic warmth.","Lovely portamento, just right for this music."]},tips:{intonation:["Tip: tune the long notes against the piano.","Tip: play the tricky bars slowly and listen to each note.","Tip: check your intonation against the open strings."],timing:["Tip: switch on Click and come in with the beat.","Tip: count the rests out loud before you come in.","Tip: slow the tempo down and build it up again."],sound:["Tip: try a little vibrato on the long notes.","Tip: keep the bow moving evenly through the long notes.","Tip: let the long notes ring and sing."],dynamics:["Tip: watch the p and f marks and make the contrast bigger.","Tip: shape the hairpins: grow and fade with the bow.","Tip: play the soft passages really soft, then let the loud ones out."],trills:["Tip: practise the trills slowly and evenly, then speed them up.","Tip: keep the trilling finger light and close to the string.","Tip: start the trill calmly, then let it get faster and faster."],missed:["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: keep the bow on the string so every note sounds.","Tip: mark the bars where notes went missing and loop them."],wrong:["Tip: mark the tricky bars and repeat them slowly.","Tip: check the fingering where the wrong notes were.","Tip: play the hard passage slower until every note is right."],glide:["Tip: shift cleanly between notes: no sliding in this style.","Tip: in Classical and Baroque music, keep the shifts clean and quick.","Tip: lift the slides out: change position without a glissando."]}},Bm=[0,1,2,3,4].flatMap(t=>[0,1,2,3].map(e=>[1.5+e*2.6+t%2*1.3,1.3+t*2.05])).filter(([t])=>t<10.5),Hm=j`<rect width="24" height="24" fill="#b22234" />
  ${[1,3,5,7,9,11].map(t=>j`<rect y=${t*24/13} width="24" height=${24/13} fill="#fff" />`)}
  <rect width="11" height=${7*24/13} fill="#3c3b6e" />
  ${Bm.map(([t,e])=>j`<circle cx=${t} cy=${e} r="0.55" fill="#fff" />`)}`,Wm=j`<rect width="24" height="8" fill="#000" /><rect y="8" width="24" height="8" fill="#dd0000" /><rect y="16" width="24" height="8" fill="#ffce00" />`,je={en:{name:"English",locale:"en-US",flag:Hm,messages:Fm},de:{name:"Deutsch",locale:"de-DE",flag:Wm,messages:zm}},Oc="violinhero-language";function jm(){try{const t=localStorage.getItem(Oc);if(t&&t in je)return t}catch{}for(const t of navigator.languages??[navigator.language]){const e=t.slice(0,2).toLowerCase();if(e in je)return e}return"en"}let rn=jm();const Qr=new Set;document.documentElement.lang=rn;function Te(){return rn}function ee(){return Um(je[rn].messages,rn)}function Vc(t,e=!0){if(t!==rn){if(rn=t,document.documentElement.lang=t,e)try{localStorage.setItem(Oc,t)}catch{}for(const n of Qr)n()}}function Ks(t){return Qr.add(t),()=>Qr.delete(t)}class qs{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.stop=Ks(()=>this.host.requestUpdate())}hostDisconnected(){var e;(e=this.stop)==null||e.call(this)}}const vi="https://www.crescendu.com",Gm=`${vi}/session.html`,pa="crescendu-session",Uc="crescendu-session-at",Km="https://europe-west3-crescendu.cloudfunctions.net/heroSession",fa=3e3;function qm(t){try{const e=new URL(t);return e.protocol==="https:"&&(e.hostname==="crescendu.com"||e.hostname.endsWith(".crescendu.com"))}catch{return!1}}function Ym(){try{return Number(localStorage.getItem(Uc))||0}catch{return 0}}function ni(t){try{localStorage.setItem(Uc,String(t))}catch{}}async function Jm(t){const e=t.currentUser;if(e)try{const n=await fetch(Km,{method:"POST",headers:{Authorization:`Bearer ${await e.getIdToken()}`}});if(!n.ok)return;const{token:i}=await n.json();return typeof i=="string"?i:void 0}catch{return}}let ma=!1;function Zm(t){if(ma||!qm(location.origin))return;ma=!0;let e=!1,n=!1;if(location.origin===vi){Ni(t,()=>{e&&ni(Date.now()),e=!0});return}const i=document.createElement("iframe");i.src=Gm,i.title="Crescendu session",i.tabIndex=-1,i.setAttribute("aria-hidden","true"),i.style.cssText="position:absolute;width:0;height:0;border:0;visibility:hidden";let r,s=!1;const o=w=>{var b;return(b=i.contentWindow)==null?void 0:b.postMessage({type:pa,...w},vi)},a=async()=>{var x;if(!r||!e)return;const w=((x=t.currentUser)==null?void 0:x.uid)??null;if(r.uid===w)return;const b=Ym();if(r.at>b||r.at===b&&r.uid!==null){r.uid?s||(s=!0,o({want:!0})):(n=!0,ni(r.at),await Vl(t).catch(()=>n=!1));return}if(w){const V=await Jm(t);V&&o({token:V,at:b})}else o({signOut:!0,at:b})};window.addEventListener("message",w=>{const b=w.data;w.origin!==vi||w.source!==i.contentWindow||(b==null?void 0:b.type)!==pa||("token"in b?(s=!1,n=!0,ni(b.at),Ll(t,b.token).catch(()=>n=!1)):"uid"in b&&(r={uid:b.uid,at:Number(b.at)||0},a()))}),Ni(t,w=>{e?n?n=!1:ni(Date.now()):e=!0,w||(s=!1),a()}),i.addEventListener("load",()=>o({hello:!0}));const l=()=>document.body.append(i),c=globalThis.requestIdleCallback,y=()=>c?c(l,{timeout:fa}):setTimeout(l,fa/3);document.readyState==="complete"?y():addEventListener("load",y,{once:!0})}const Xm={apiKey:"AIzaSyAYev6vpeTmN9xSDoEyUAMwLYD0abE6Sr4",authDomain:"www.crescendu.com",projectId:"crescendu",storageBucket:"crescendu.firebasestorage.app",messagingSenderId:"546406424194",appId:"1:546406424194:web:360ebdab42c0baa5c01e9b"},Tn=8,zc=Xm,Ys=new URLSearchParams(location.search).get("manage")??"",Fc=ys(zc),es=Ys?ys(zc,"manage"):Fc,fe=Ys?Pl(es,{persistence:Gr}):Zl(es),Qm=Ys?Zl(Fc):fe,Wt=fm(es);fe.languageCode=Te();Ks(()=>fe.languageCode=Te());Zm(Qm);function Js(){return fe}function eg(t){return Ni(fe,t)}async function tg(){const t=fe.currentUser;t&&(await t.reload(),await t.getIdToken(!0))}async function ng(t,e){await ip(fe,t.trim(),e)}async function ig(t,e){const{user:n}=await np(fe,t.trim(),e);await rp(n)}async function rg(){await xp(fe,new He)}function sg(t){return tp(fe,t.trim())}function og(){return Vl(fe)}function ii(t){const e=t.code??"",n=ee().auth;return["auth/invalid-credential","auth/wrong-password","auth/user-not-found"].includes(e)?n.wrongPassword:e==="auth/email-already-in-use"?n.emailInUse:e==="auth/weak-password"?n.weakPassword(Tn):e==="auth/invalid-email"?n.invalidEmail:e==="auth/too-many-requests"?n.tooMany:e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?n.popupClosed:e==="auth/popup-blocked"?n.popupBlocked:e==="auth/unauthorized-domain"?n.unauthorizedDomain:e==="auth/network-request-failed"?n.network:n.failed(e||String(t))}async function ag(t){try{return(await Cc(Pn(Wt,"creators",t))).exists()}catch{return!1}}function lg(){var t;return((t=fe.currentUser)==null?void 0:t.uid)??null}async function Bc(t){try{const e=await Cc(Pn(Wt,"players",t));if(!e.exists())return;const n=e.data().nickname;return typeof n=="string"&&n?n:null}catch{return}}async function cg(t){const e=fe.currentUser;if(!e)return;const n=t.trim().slice(0,60)||null;if(n&&!hg(n))throw new Sn("invalid");const i=e.uid;await Cm(Wt,async r=>{const s=Pn(Wt,"players",i),o=await r.get(s),a=o.exists()&&typeof o.data().nickname=="string"?o.data().nickname:null,l=a&&(!n||ri(a)!==ri(n))?Pn(Wt,"nicknames",ri(a)):void 0,c=l?await r.get(l):void 0;if(n){const y=Pn(Wt,"nicknames",ri(n)),w=await r.get(y);if(w.exists()&&w.data().uid!==i)throw new Sn("taken");r.set(y,{uid:i,nickname:n})}l&&(c!=null&&c.exists())&&c.data().uid===i&&r.delete(l),r.set(s,{nickname:n,updated:Im()})}).catch(r=>{throw r instanceof Sn?r:r.code==="permission-denied"?new Sn("taken"):r}),await op(e,{displayName:n??""}),await e.getIdToken(!0)}class Sn extends Error{constructor(e){super(e),this.reason=e}}function ri(t){return t.toLowerCase()}function hg(t){return!t.includes("/")&&!/^\.{1,2}$/.test(t)&&!/^__.*__$/.test(t)}const qi="https://www.crescendu.com/",Hc="https://www.crescendu.com/profile",dg="https://marketplace.crescendu.com/",ug="https://creator.crescendu.com/",pg="https://halloffame.crescendu.com/",ts={marketplace:dg,halloffame:pg,creator:ug};function fg(t=!1){return t?"./":"../"}const mg=()=>`instrument=${Dt().id}`;function gg(t,e="../",n="",i=""){let r;if(t==="profile")r=i?`${qi}${encodeURIComponent(i)}`:Hc;else if(ts[t]){const o=ts[t];r=location.hostname===new URL(o).hostname?"/":o}else r=`${qi}${t}`;const s=[mg(),n].filter(Boolean).join("&");return s?`${r}?${s}`:r}function yg(t,e){const[n,i]=t.split("#");return`${n}${n.includes("?")?"&":"?"}${e}${i===void 0?"":`#${i}`}`}const wg=[new URL(qi).origin,...Object.values(ts).map(t=>new URL(t).origin),"https://crescendu.com",...Object.values(Yt).map(t=>new URL(t.app.url).origin)];function Zs(t){return t===location.origin||wg.includes(t)||!1}function St(){return Dt().app.name}const ns="hero-session",bg={}.VITE_SESSION_URL??"https://europe-west3-crescendu.cloudfunctions.net/heroSession";async function vg(){const t=Js().currentUser;if(t)try{const e=await fetch(bg,{method:"POST",headers:{Authorization:`Bearer ${await t.getIdToken()}`}});if(!e.ok)return;const{token:n}=await e.json();return typeof n=="string"?n:void 0}catch{return}}function kg(t,e,n){if(e===location.origin||!Zs(e))return()=>{};const i=Js(),r=l=>{var c;return(c=t())==null?void 0:c.postMessage({type:ns,...l},e)};let s=!1;const o=l=>{var y;const c=l.data;if(!(l.origin!==e||l.source!==t()||(c==null?void 0:c.type)!==ns))if("uid"in c){const w=((y=i.currentUser)==null?void 0:y.uid)??null;c.uid&&c.uid!==w&&(n||!w)&&!s&&(s=!0,r({want:!0}))}else"want"in c?vg().then(w=>w&&r({token:w})):"token"in c&&(s=!1,Ll(i,c.token).catch(()=>{}))};window.addEventListener("message",o);const a=Ni(i,l=>r({uid:(l==null?void 0:l.uid)??null}));return()=>{window.removeEventListener("message",o),a()}}const ga=new WeakSet;function Tg(t){var n,i;let e;try{e=new URL(t.src,location.href).origin}catch{return}e===location.origin||!Zs(e)||((i=t.contentWindow)==null||i.postMessage({type:ns,uid:((n=Js().currentUser)==null?void 0:n.uid)??null},e),!ga.has(t)&&(ga.add(t),kg(()=>t.contentWindow,e,!1)))}var Sg=Object.defineProperty,_g=Object.getOwnPropertyDescriptor,Ie=(t,e,n,i)=>{for(var r=i>1?void 0:i?_g(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Sg(e,n,r),r};function Eg(){const t=[document];for(;t.length;){const e=t.shift();for(const n of e.querySelectorAll("header, .m-header")){const i=n.querySelector(".logo, .m-logo"),r=n.querySelector(".brand-name, .m-name");if(i&&r&&n.getBoundingClientRect().height)return{header:n,logo:i,name:r,end:n.querySelector(".end, .m-header-end")}}for(const n of e.querySelectorAll("*"))n.shadowRoot&&t.push(n.shadowRoot)}}const Ag=.955,Ig=E`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg>`;let pe=class extends _e{constructor(){super(...arguments),this.src="",this.open=!1,this.dark=!1,this.name="",this.place="",this.lead="",this.closeLabel="Close",this.geometry={}}get shown(){return!!this.src||this.open}lock(t){const e=document.documentElement;t&&this.pageOverflow===void 0?(this.pageOverflow=e.style.overflow,e.style.overflow="hidden"):!t&&this.pageOverflow!==void 0&&(e.style.overflow=this.pageOverflow,this.pageOverflow=void 0)}willUpdate(t){if(!(!t.has("src")&&!t.has("open")&&!t.has("parts"))&&(this.lock(this.shown),this.shown)){const e=this.parts??Eg();e&&this.measure(e)}}disconnectedCallback(){super.disconnectedCallback(),this.lock(!1)}updated(t){if(!t.has("src")&&!t.has("open"))return;const e=this.renderRoot.querySelector("dialog");e&&(this.shown&&!e.open&&e.showModal(),!this.shown&&e.open&&e.close())}measure({header:t,logo:e,name:n,end:i}){const r=t.getBoundingClientRect();if(!r.height)return;const s=e.getBoundingClientRect(),o=l=>`${l.toFixed(2)}px`,a=getComputedStyle(n);this.geometry={"--top":o(Math.max(0,r.top)),"--left":o(r.left),"--width":o(r.width),"--head-h":o(r.height),"--mark":o(s.width*Ag),"--mark-x":o(s.left+s.width/2-r.left),"--name-x":o(n.getBoundingClientRect().left-r.left),"--name-size":a.fontSize,"--name-weight":a.fontWeight,"--head-end":o(i?r.right-i.getBoundingClientRect().right:20),"--radius":getComputedStyle(t).borderRadius}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){const t=Object.entries(this.geometry).map(([e,n])=>`${e}: ${n}`).join("; ");return E`<dialog style=${t} @cancel=${e=>(e.preventDefault(),this.close())}>
      ${this.shown?E`<header>
              <span class="mark">${this.icon??Ig}</span>
              <span class="titles">
                <span class="title">${this.name} <span class="place">${this.place}</span></span>
                ${this.lead?E`<span class="lead">${this.lead}</span>`:I}
              </span>
              <button class="close" title=${this.closeLabel} aria-label=${this.closeLabel} @click=${()=>this.close()}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </header>
            ${this.src?E`<iframe
                  src=${this.src}
                  title=${`${this.name} ${this.place}`}
                  allow="clipboard-write"
                  @load=${e=>this.dispatchEvent(new CustomEvent("frame-load",{detail:e.target}))}
                ></iframe>`:E`<div class="body"><slot></slot></div>`}`:I}
    </dialog>`}};pe.styles=Le`
    /* The visible window exactly (100vw would reach under a page scrollbar and hide the frame's) */
    dialog {
      --surface: var(--m-surface, var(--card-bg, #fff));
      --accent-c: var(--m-accent, var(--accent, #1c7ed6));
      position: fixed;
      inset: 0;
      width: auto;
      max-width: none;
      height: auto;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      overflow: hidden;
      color: var(--m-text, var(--text, #111));
      background: var(--m-bg, var(--bg, #f6f7f9));
    }
    dialog::backdrop {
      background: var(--m-bg, var(--bg, #f6f7f9));
    }
    /* Exactly where the page's header is, as tall and as wide (the headers' own layout without one) */
    header {
      position: absolute;
      top: var(--top, 0);
      left: var(--left, 0);
      width: var(--width, 100%);
      height: var(--head-h, 58px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 0 var(--head-end, 20px) 0 0;
      border-radius: var(--radius, 0);
      background: var(--m-surface, var(--surface));
      border-bottom: 1px solid var(--m-line, var(--line, #e3e5e8));
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      z-index: 1;
    }
    .mark {
      flex: none;
      display: grid;
      place-items: center;
      box-sizing: border-box;
      width: var(--mark, 28.65px);
      height: var(--mark, 28.65px);
      margin-left: calc(var(--mark-x, 35px) - var(--mark, 28.65px) / 2);
      margin-right: calc(var(--name-x, 59.6px) - var(--mark-x, 35px) - var(--mark, 28.65px) / 2 - 0.8rem);
      border-radius: 50%;
      color: var(--accent-c);
      border: 2px solid var(--accent-c);
    }
    .mark svg {
      width: 62%;
      height: 62%;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .titles {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
      flex: 1;
    }
    .title {
      font-size: var(--name-size, 1.25rem);
      font-weight: var(--name-weight, 700);
      line-height: 1.1;
      letter-spacing: -0.01em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .place {
      color: var(--accent-c);
    }
    .lead {
      color: var(--m-muted, var(--muted, #667085));
      font-size: 0.75rem;
      line-height: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .close {
      flex: none;
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      padding: 0;
      border: 1px solid var(--accent-c);
      border-radius: 50%;
      color: #fff;
      background: var(--accent-c);
      cursor: pointer;
    }
    .close:hover:where(:not(:disabled)) {
      filter: brightness(0.92);
    }
    .close:focus-visible {
      outline: 2px solid var(--accent-c);
      outline-offset: 2px;
    }
    .close svg {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
    }
    /* Slotted content below the bar, scrolling on its own (the page behind never does) */
    .body {
      position: absolute;
      top: calc(var(--top, 0px) + var(--head-h, 58px));
      left: 0;
      right: 0;
      bottom: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
    }
    :host([dark]) .body {
      color: #fff;
      background: #000;
    }
    /* The view below the bar, the rest of the window */
    iframe {
      position: absolute;
      top: calc(var(--top, 0px) + var(--head-h, 58px));
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      width: 100%;
      height: calc(100% - var(--top, 0px) - var(--head-h, 58px));
      border: 0;
      background: inherit;
    }
  `;Ie([$()],pe.prototype,"src",2);Ie([$({type:Boolean})],pe.prototype,"open",2);Ie([$({type:Boolean,reflect:!0})],pe.prototype,"dark",2);Ie([$({attribute:!1})],pe.prototype,"icon",2);Ie([$()],pe.prototype,"name",2);Ie([$()],pe.prototype,"place",2);Ie([$()],pe.prototype,"lead",2);Ie([$()],pe.prototype,"closeLabel",2);Ie([$({attribute:!1})],pe.prototype,"parts",2);Ie([B()],pe.prototype,"geometry",2);pe=Ie([Vt("cr-preview-overlay")],pe);function xg(t,e="./"){const n=new URL(e,location.href);return n.search="",n.hash="",n.searchParams.set("ref",t),n.href}async function $g(t,e){if(matchMedia("(hover: none) and (pointer: coarse)").matches&&navigator.share)try{return await navigator.share({title:Dt().app.name,text:e,url:t}),"shared"}catch(i){if(i.name==="AbortError")return"failed"}try{return await navigator.clipboard.writeText(t),"copied"}catch{return"failed"}}const Pg="https://www.crescendu.com",Dg={imprint:{en:"imprint",de:"impressum"},privacy:{en:"privacy",de:"datenschutz"},terms:{en:"terms",de:"nutzungsbedingungen"}};function ya(t,e=""){const n=Te()==="de"?"de":"en";return`${Pg}/${n}/${Dg[t][n]}${e?`#${e}`:""}`}const Ng=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Cg=function(t,e){return new URL(t,e).href},wa={},Rg=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Cg(s,i),s in wa)return;wa[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let y=r.length-1;y>=0;y--){const w=r[y];if(w.href===s&&(!o||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Ng,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((y,w)=>{c.addEventListener("load",y),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function W(t,e=document){const n=e.querySelector(t);if(n)return n;for(const i of e.querySelectorAll("*"))if(i.shadowRoot){const r=W(t,i.shadowRoot);if(r)return r}return null}function ne(t,e=document){const n=[...e.querySelectorAll(t)];for(const i of e.querySelectorAll("*"))i.shadowRoot&&n.push(...ne(t,i.shadowRoot));return n}function N(t){return ne(t).find(e=>M(e))??null}const te=t=>()=>W(`[data-guide="${t}"]`);function M(t){if(!t||!t.isConnected)return!1;const e=t.getBoundingClientRect();return e.width>0&&e.height>0}const ba=t=>()=>ne(t).find(e=>M(e))??null,va=t=>{var e;return(((e=W(t))==null?void 0:e.value)??"").trim()},$r='[data-guide="collab-email"]',Lg={id:"collaborators",title:{de:"Andere mitverwalten lassen",en:"Letting others help manage"},available:()=>M(W('[data-guide="collab"]')),steps:[{say:{de:"Hallo, unter „Zugriff“ lässt du andere diese Seite mitverwalten, zum Beispiel eine Kollegin oder einen Assistenten.",en:"Hi, under “Access” you let others help manage this page, for example a colleague or an assistant."},target:te("collab"),wave:!0},{when:()=>M(W($r)),say:{de:"Gib hier die E-Mail-Adresse der Person ein.",en:"Type the person’s email address here."},target:te("collab-email"),action:"type",done:()=>!!va($r)},{when:()=>M(W('[data-guide="collab-invite"]')),say:{de:"Klick auf „Einladen“. Hat die Person ein Crescendu-Konto, bekommt sie eine Nachricht, sonst eine E-Mail mit dem Link.",en:"Click “Invite”. If they have a Crescendu account they get a message, otherwise an email with the link."},target:te("collab-invite"),action:"click",done:()=>!va($r)},{when:()=>M(ba('[data-guide="collab-levels"]')()),say:{de:"Für jeden Bereich stellst du ein, was die Person darf: nichts, ansehen oder bearbeiten. Das gilt sofort.",en:"For each area you set what they may do: nothing, view or edit. It applies at once."},target:ba('[data-guide="collab-levels"]')},{when:()=>M(W('[data-guide="collab-managed"]')),say:{de:"Hier unten stehen die Seiten, die du für andere mitverwaltest. „Öffnen“ bringt dich hin.",en:"Down here are the pages you help others manage. “Open” takes you there."},target:te("collab-managed")},{say:{de:"Mit „Löschen“ nimmst du jemandem den Zugriff wieder, nach einer Rückfrage. Das war’s!",en:"“Delete” takes someone’s access away again, after asking you. That’s it!"},target:te("collab"),wave:!0}]},Mg=[Lg],qt=t=>()=>N(`[data-guide="${t}"]`),jt=t=>()=>M(N(`[data-guide="${t}"]`)),Og={id:"student-homework",page:"profile",title:{de:"Deine Hausaufgaben",en:"Your homework"},available:()=>M(W('[data-guide="homework-panel"]')),steps:[{say:{de:"Hallo, hier stehen deine Hausaufgaben aus dem Unterricht: was du üben sollst, wie lange am Tag und bis wann.",en:"Hi, here is your homework from your lessons: what to practise, how long a day and until when."},target:te("homework-panel"),wave:!0},{when:jt("homework-days"),say:{de:"Tippe jeden Tag an, an dem du geübt hast. Deine Lehrkraft sieht die Haken in der nächsten Stunde.",en:"Tap each day you practised. Your teacher sees the ticks in the next lesson."},target:qt("homework-days")}]},Vg={id:"student-absences",page:"profile",title:{de:"Eine Stunde absagen",en:"Calling a lesson off"},available:()=>M(W('[data-guide="family-lessons"]')),steps:[{say:{de:"Hallo, hier stehen deine nächsten Stunden.",en:"Hi, here are your next lessons."},target:te("family-lessons"),wave:!0},{when:jt("call-off"),say:{de:"Bist du krank, tippst du auf „Fällt aus (krank)“ und dann noch einmal zur Bestätigung. Deine Lehrkraft bekommt sofort Bescheid.",en:"If you are ill, tap “Off sick” and once more to confirm. Your teacher is told at once."},target:qt("call-off")}]},Ug={id:"student-calendar",page:"profile",title:{de:"Kalender abonnieren",en:"Subscribing to the calendar"},available:()=>M(W('[data-guide="calendar-feed"]')),steps:[{say:{de:"Hallo, so kommen alle deine Unterrichtstermine in deinen Kalender, auf dem Handy wie am Computer.",en:"Hi, this is how all your lesson dates get into your calendar, on your phone and your computer."},target:te("calendar-feed"),wave:!0},{when:jt("calendar-feed-make"),say:{de:"Klick auf „Link erstellen“.",en:"Click “Make the link”."},target:qt("calendar-feed-make"),action:"click",done:jt("calendar-feed-open")},{when:jt("calendar-feed-open"),say:{de:"„Im Kalender öffnen“ abonniert ihn in deiner Kalender-App. Abgesagte und verschobene Stunden ändern sich dort von selbst.",en:"“Open in the calendar” subscribes in your calendar app. Cancelled and moved lessons change there by themselves."},target:qt("calendar-feed-open")},{when:jt("calendar-feed-new"),say:{de:"Ein neuer Link schaltet den alten ab, falls du ihn weitergegeben hast und das nicht mehr willst.",en:"A new link switches the old one off, if you shared it and don’t want that any more."},target:qt("calendar-feed-new"),wave:!0}]},zg={id:"student-reminders",page:"profile",title:{de:"Erinnerung am Vorabend",en:"The reminder the evening before"},available:()=>M(W('[data-guide="reminders-switch"]')),steps:[{say:{de:"Hallo, mit diesem Schalter bekommst du am Abend vor jeder Stunde eine Erinnerung: Uhrzeit, Raum und Weg dorthin. Dann speichern.",en:"Hi, with this switch you get a reminder the evening before each lesson: the time, the room and how to get there. Then save."},target:qt("reminders-switch"),wave:!0}]},Fg=[Og,Vg,Ug,zg],kt=t=>()=>ne(t).filter(e=>M(e)).at(-1)??null,yn=()=>W('[data-guide="pack-title"]'),Bg={id:"content-pack",page:"creator",title:{de:"Ein Content Pack erstellen",en:"Making a content pack"},available:()=>M(W('[data-guide="new-pack"]'))||M(yn()),steps:[{say:{de:"Hallo, ich zeige dir, wie du ein Content Pack machst: Stücke, Etüden, Einspielübungen, Tonleitern und Technik, für alle im Marktplatz oder nur für deine Schüler.",en:"Hi, I’ll show you how to make a content pack: pieces, études, warm-ups, scales and technique, for everyone in the marketplace or just for your students."},target:()=>N('[data-guide="new-pack"]')??yn(),wave:!0},{say:{de:"Klick hier, um ein neues Content Pack anzulegen.",en:"Click here to make a new content pack."},target:()=>N('[data-guide="new-pack"]'),action:"click",done:()=>M(yn())},{say:{de:"Zuerst wählst du, für welche Hero-App das Pack ist. Das geht nur, bis die ersten Noten drin sind.",en:"First choose which hero app the pack is for. You can change that only until the first score is in."},target:te("pack-instrument")},{say:{de:"Gib dem Pack einen Titel, zum Beispiel „Barocke Sonaten für Anfänger“.",en:"Give the pack a title, for example “Baroque sonatas for beginners”."},target:yn,action:"type",done:()=>{var t;return!!((t=yn())!=null&&t.value.trim())}},{say:{de:"Darunter beschreibst du, was drin ist und für wen. Das steht später im Marktplatz.",en:"Below, describe what’s in it and who it’s for. That’s what the marketplace will show."},target:te("pack-description")},{say:{de:"Ein Bild macht das Pack im Marktplatz schöner. Zieh einfach eins hierher.",en:"A picture makes the pack look good in the marketplace. Just drag one here."},target:te("pack-picture")},{say:{de:"Ein Pack hat Reiter: Stücke, Etüden, Einspielen, Tonleitern und Technik. Lehrkräfte füllen damit die Abschnitte ihrer Übepläne.",en:"A pack has tabs: pieces, études, warm-ups, scales and technique. Teachers fill the parts of their practice plans with them."},target:te("item-kinds")},{say:{de:"Füge jetzt etwas hinzu: Klick hier.",en:"Now add something: click here."},target:te("add-item"),action:"click",done:()=>M(kt('[data-guide="item-title"]')())},{say:{de:"Gib ihm einen Titel.",en:"Give it a title."},target:kt('[data-guide="item-title"]'),action:"type",done:()=>{var t;return!!((t=kt('[data-guide="item-title"]')())!=null&&t.value.trim())}},{say:{de:"Wähle die Stufe, von Anfänger bis Virtuos. Danach richtet sich auch, wie streng die App bewertet.",en:"Choose the level, from Beginner to Expert. How strictly the app scores it follows from that too."},target:kt('[data-guide="item-level"]')},{say:{de:"Hier steht, was es ist. Wählst du eine andere Art, wandert es in deren Reiter.",en:"This says what it is. Choose another kind and it moves to that tab."},target:kt('[data-guide="item-kind"]')},{say:{de:"Das Wichtigste: die Noten als MusicXML, zum Beispiel aus MuseScore oder Dorico. Zieh die Datei hierher. Crescendu prüft sie und sagt dir, wenn etwas fehlt.",en:"The main thing: the score as MusicXML, for example from MuseScore or Dorico. Drag the file here. Crescendu checks it and tells you if anything is missing."},target:kt('[data-guide="item-score"]')},{say:{de:"Hier kommen Aufnahmen und YouTube-Videos dazu. Crescendu richtet sie nach den Noten aus, damit die App im Takt mitspielt.",en:"Here you add recordings and YouTube videos. Crescendu lines them up with the score, so the app plays along in time."},target:kt('[data-guide="item-interpretations"]')},{say:{de:"Ist das Pack fertig, veröffentlichst du es hier: für alle im Marktplatz, oder nur für deine Schüler.",en:"When the pack is ready, publish it here: for everyone in the marketplace, or only for your students."},target:te("pack-publish")},{say:{de:"Jetzt klick auf „Speichern“.",en:"Now click “Save”."},target:te("pack-save"),action:"click",done:()=>{var t;return!((t=W('[data-guide="save-bar"]'))!=null&&t.classList.contains("dirty"))}},{say:{de:"Gespeichert! Du kannst jederzeit weitere Stücke, Etüden oder Übungen hinzufügen. Viel Freude damit!",en:"Saved! You can add more pieces, études or exercises at any time. Have fun with it!"},target:te("item-kinds"),wave:!0}]},si=()=>N("button.m-btn.marker"),Pr=t=>()=>ne("button.m-btn.marker").some(e=>e.classList.contains(t)),Hg={id:"passage",page:"app",title:{de:"Eine Stelle üben",en:"Practising a passage"},available:()=>M(W("score-display"))&&!!si(),steps:[{say:{de:"Hallo, ich zeige dir, wie du eine schwierige Stelle immer wieder übst, bis sie sitzt.",en:"Hi, I’ll show you how to practise a tricky passage again and again until it’s solid."},target:()=>N("score-display"),wave:!0},{say:{de:"Geh zuerst zu dem Takt, in dem die Stelle beginnt: Zieh die Noten mit der Maus oder dem Finger, oder spring mit Zurück und Vor.",en:"First go to the bar where the passage begins: drag the score with the mouse or your finger, or step with Back and Forward."},target:()=>N("button.m-btn.back")??N("score-display")},{say:{de:"Jetzt drück auf „Marke“. Der Takt wird zum Anfang der Stelle.",en:"Now press “Marker”. That bar becomes the start of the passage."},target:si,action:"click",done:()=>Pr("waiting")()||Pr("on")()},{say:{de:"Gut! Geh jetzt zum letzten Takt der Stelle und drück noch einmal auf „Marke“.",en:"Good! Now go to the passage’s last bar and press “Marker” once more."},target:si,action:"click",done:Pr("on")},{say:{de:"Die Stelle ist markiert, und „Wiederholen“ ist an: Sie läuft immer wieder von vorn.",en:"The passage is marked, and Repeat is on: it plays round and round."},target:()=>N("button.m-btn.repeat")},{say:{de:"Drück auf „Start“ und spiel mit.",en:"Press “Play” and play along."},target:()=>N("button.m-btn.play"),action:"click",done:()=>ne("button.m-btn.play").some(t=>t.classList.contains("on"))},{when:()=>!!(N(".m-slider.m-tempo")??N(".m-quick-tempo")),say:{de:"Zu schnell? Stell das Tempo hier langsamer, und dann Schritt für Schritt wieder schneller.",en:"Too fast? Slow the tempo down here, then bring it up again step by step."},target:()=>N(".m-slider.m-tempo")??N(".m-quick-tempo")},{say:{de:"Wenn die Stelle sitzt, drück noch einmal auf „Marke“, dann ist die Markierung weg. Viel Spaß beim Üben!",en:"Once the passage is solid, press “Marker” once more and the marks are gone. Happy practising!"},target:si,wave:!0}]},Wg={"m-transport":0,"m-sound":1,"m-library":2},jg={"m-transport":{de:"Transport",en:"Transport"},"m-sound":{de:"Einstellungen",en:"Settings"},"m-library":{de:"Repertoire",en:"Repertoire"}},ki=()=>M(W("nav.m-tabs")),hn=t=>W(`section.${t}`),U=(t,e)=>()=>{const n=hn(t);return n?ne(e,n).find(i=>M(i)&&!i.closest(".m-panel-quick"))??null:null},is=()=>!!W(".m-controls.m-phone-closed"),Wc=t=>ne("button.m-tab")[Wg[t]]??null;function ka(t){var n;const e=hn(t);return e?ki()?!is()&&!!((n=Wc(t))!=null&&n.classList.contains("on")):!e.classList.contains("m-closed"):!1}function hr(t){const e=jg[t];return[{when:()=>ki()&&is(),say:{de:"Öffne zuerst die Bedienfelder: Tipp auf das kleine Dreieck über ihnen.",en:"First open the controls: tap the little triangle above them."},target:()=>N(".m-phone-fold button"),action:"click",done:()=>!is()},{when:ki,say:{de:`Tipp unten auf „${e.de}“.`,en:`Tap “${e.en}” at the bottom.`},target:()=>Wc(t),action:"click",done:()=>ka(t)},{when:()=>!ki(),say:{de:`Öffne das Feld „${e.de}“: Klick auf das Dreieck.`,en:`Open the “${e.en}” panel: click its triangle.`},target:()=>{var n;return((n=hn(t))==null?void 0:n.querySelector(".m-fold"))??null},action:"click",done:()=>ka(t)}]}const Ta=()=>ne("button.m-btn.play").some(t=>t.classList.contains("on")),Sa=U("m-transport",".m-recordings select"),Gg={id:"takes",page:"app",title:{de:"Dich aufnehmen und anhören",en:"Recording yourself and listening back"},available:()=>M(W("score-display"))&&!!W("button.m-btn.record"),steps:[{say:{de:"Hallo, ich zeige dir, wie du dich beim Spielen aufnimmst und danach hörst, wie es geklungen hat.",en:"Hi, I’ll show you how to record yourself playing and then hear how it sounded."},target:()=>N("score-display"),wave:!0},...hr("m-transport"),{say:{de:"Hör dir das Stück zuerst an: Drück auf „Start“. Die App spielt es mit Klavier, und die Noten laufen mit.",en:"Listen to the piece first: press “Play”. The app plays it with the piano, and the score moves along."},target:()=>U("m-transport","button.m-btn.play")()??N("button.m-btn.play"),action:"click",done:Ta},{after:6,say:{de:"Genug gehört? Drück noch einmal, dann hält es an.",en:"Heard enough? Press it again to pause."},target:()=>U("m-transport","button.m-btn.play")()??N("button.m-btn.play"),action:"click",done:()=>!Ta()},{say:{de:"Setz zum Aufnehmen Kopfhörer mit Kabel auf. Dann hört das Mikrofon nur dich und nicht das Klavier.",en:"For recording, put on wired headphones. Then the microphone hears only you, not the piano."},target:()=>U("m-transport","button.m-btn.record")()},{say:{de:"Jetzt drück auf „Aufnehmen“. Nach dem Einzählen spielst du mit. Spielst du bis zum Ende, bekommst du eine Wertung.",en:"Now press “Record”. After the count-in, you play along. Play to the end and your take gets a score."},target:()=>U("m-transport","button.m-btn.record")(),action:"click",done:()=>{var t;return ne("button.m-btn.record").some(e=>e.classList.contains("on"))||(((t=Sa())==null?void 0:t.options.length)??0)>1}},{say:{de:"Die Linie über den Noten zeigt, was du spielst: grün ist sauber, rot zu hoch oder zu tief. Zum Aufhören drück noch einmal auf „Aufnehmen“.",en:"The line over the score shows what you play: green is in tune, red too high or too low. To stop, press “Record” again."},target:()=>N("score-display")},{say:{de:"Danach spielt die App deine Aufnahme mit dem Klavier ab, und die Wertungskarte zeigt Intonation, Timing und mehr.",en:"Afterwards the app plays your take back with the piano, and the score card shows your intonation, timing and more."},target:()=>N("score-display")},{say:{de:"Hier unter „Aufnahmen“ findest du alle deine Aufnahmen des Stücks. Wähl eine, und „Start“ spielt sie mit dem Klavier.",en:"Under “Recordings” you find all your takes of the piece. Choose one, and “Play” plays it with the piano."},target:Sa},{say:{de:"Und dieser Schalter ist die Stimme deines Instruments, die die App spielt. Beim Aufnehmen schaltet sie sich von selbst aus, damit nur das Klavier mit dir spielt. Schaltest du sie an, während deine Aufnahme läuft, hörst du statt dir die App: So vergleichst du, wie es klingen soll.",en:"And this switch is your instrument’s part, played by the app. When you record it switches itself off, so only the piano plays with you. Switch it on while your take plays and you hear the app instead of yourself: a way to compare how it should sound."},target:()=>N(".m-violin-switch .m-toggle")??ne(".m-sound-keys .m-toggle").filter(t=>M(t)).at(-1)??null},{say:{de:"„Löschen“ entfernt die gewählte Aufnahme: Drück zweimal, damit nichts aus Versehen verloren geht.",en:"“Clear” deletes the take chosen: press it twice, so nothing goes by accident."},target:U("m-transport","button.m-btn.clear")},{say:{de:"Und mit „Teilen“ schickst du deine Aufnahme als Link an deine Lehrkraft oder Freunde. Viel Spaß beim Aufnehmen!",en:"And with “Share” you send your take as a link to your teacher or friends. Have fun recording!"},target:U("m-transport","button.m-btn.share"),wave:!0}]},oi=U("m-sound",".m-violin-switch .m-toggle"),Kg={id:"settings",page:"app",title:{de:"Die Begleitung einstellen",en:"Setting up the accompaniment"},available:()=>M(W("score-display"))&&!!hn("m-sound"),steps:[{say:{de:"Hallo, ich zeige dir, wie du die Begleitung so einstellst, dass sie zu dir passt.",en:"Hi, I’ll show you how to set up the accompaniment so it suits you."},target:()=>N("score-display"),wave:!0},...hr("m-sound"),{say:{de:"Zu schnell? Stell das Tempo hier langsamer. Daneben steht, wie viele Schläge pro Minute das sind. Ein Doppelklick bringt es auf 100 Prozent zurück.",en:"Too fast? Slow the tempo down here. Beside it you see the beats per minute. A double click brings it back to 100 percent."},target:U("m-sound",".m-slider.m-tempo")},{say:{de:"Dieser Schalter spielt die Stimme deines Instruments. Schalt ihn aus: Dann spielst du sie selbst, nur mit dem Klavier.",en:"This switch plays your instrument’s part. Switch it off: then you play it yourself, with just the piano."},target:oi,action:"click",done:()=>!!oi()&&!oi().classList.contains("on")},{say:{de:"Mit „Klavier“ schaltest du die Begleitung aus, zum Üben ganz allein. „Noten“ zeigt die Klavierstimme unter deiner.",en:"“Piano” switches the accompaniment off, for practising on your own. “Staves” shows the piano’s part under yours."},target:U("m-sound",".m-piano-switches")},{when:()=>!!U("m-sound",".m-piano-model select")(),say:{de:"Hier wählst du das Klavier: einen Flügel oder eins von zwei Klavieren.",en:"Here you choose the piano: a grand or one of two uprights."},target:U("m-sound",".m-piano-model select")},{say:{de:"„Ausdruck“ sagt, wie frei das Klavier spielt: Es atmet mit den Phrasen. Bei null spielt es genau nach Noten.",en:"“Humanize” says how freely the piano plays: it breathes with the phrases. At zero it plays exactly as written."},target:U("m-sound",".m-slider.m-humanize")},{say:{de:"„Hall“ lässt es klingen wie in einem Konzertsaal.",en:"“Reverb” makes it sound like a concert hall."},target:U("m-sound",".m-slider.m-reverb")},{when:()=>!!U("m-sound",".m-slider.m-volume")(),say:{de:"Und hier stellst du die Lautstärke ein.",en:"And here you set the volume."},target:U("m-sound",".m-slider.m-volume")},{say:{de:"Die App merkt sich alles für das nächste Mal. Schalt deine Stimme wieder ein, wann immer du hören willst, wie es klingen soll. Viel Spaß!",en:"The app remembers it all for next time. Switch your part back on whenever you want to hear how it should sound. Have fun!"},target:oi,wave:!0}]},qg={id:"repertoire",page:"app",title:{de:"Ein Stück finden",en:"Finding a piece"},available:()=>!!hn("m-library"),steps:[{say:{de:"Hallo, ich zeige dir, wie du ein Stück findest, das zu dir passt.",en:"Hi, I’ll show you how to find a piece that suits you."},target:()=>N("score-display"),wave:!0},...hr("m-library"),{say:{de:"Wähl zuerst deinen Schwierigkeitsgrad, von Anfänger bis Virtuos. Die Liste zeigt nur Stufen, in denen du schon etwas spielen kannst.",en:"First choose your level, from Beginner to Expert. The list only shows levels where there is something you can play."},target:U("m-library",".m-level-pick select")},{say:{de:"Dann die Richtung: Barock, Romantik, Volkslieder, Weihnachten und mehr.",en:"Then the style: Baroque, Romantic, folk songs, Christmas and more."},target:U("m-library",".m-genre select")},{say:{de:"Hier wählst du das Stück. Stücke mit Schloss öffnen sich, wenn du übst: Schaffst du ein Stück oder nimmst du dich oft auf, kommt das nächste dazu.",en:"Here you choose the piece. Pieces with a lock open as you practise: pass a piece or record yourself often, and the next one opens."},target:U("m-library",".m-piece-pick select"),action:"click"},{say:{de:"Mit diesem Knopf bekommst du die Noten deiner Stimme als PDF zum Ausdrucken, mit deinen Eintragungen.",en:"This button gives you your part’s score as a PDF to print, with your markings."},target:U("m-library",".m-print button")},{say:{de:"Mehr Stücke gibt es im Marktplatz: Content Packs, die du hinzufügst, erscheinen hier in der Liste. Viel Freude beim Spielen!",en:"There are more pieces in the marketplace: content packs you add show up here in the list. Enjoy playing!"},target:U("m-library",".m-piece-pick select"),wave:!0}]},Ti=U("m-library",".m-interpretation select"),_a=()=>{const t=Ti();return!!t&&t.options.length>1},Yg={id:"interpretations",page:"app",title:{de:"Großen Künstlern zuhören",en:"Listening to great performers"},available:()=>!!hn("m-library"),steps:[{say:{de:"Hallo, zu vielen Stücken gibt es Aufnahmen echter Künstler. Du kannst sie anhören und in ihrem Tempo mitspielen.",en:"Hi, many pieces have recordings of real performers. You can listen to them and play along in their timing."},target:()=>N("score-display"),wave:!0},...hr("m-library"),{when:()=>!_a(),say:{de:"Zu diesem Stück gibt es noch keine Aufnahme. Wähl ein anderes Stück: Wo es welche gibt, steht neben „Interpretation“ eine Zahl.",en:"This piece has no recordings yet. Choose another piece: where there are some, a number shows beside “Interpretation”."},target:U("m-library",".m-piece-pick select"),action:"click",done:_a},{say:{de:"Öffne die Liste und wähl eine Aufnahme.",en:"Open the list and choose a recording."},target:Ti,action:"click",done:()=>{var t;return(((t=Ti())==null?void 0:t.value)??"0")!=="0"}},{say:{de:"Mit diesem Knopf hörst du sie an. Die Noten laufen mit, im Tempo der Künstlerin oder des Künstlers.",en:"This button plays it. The score moves along, in the performer’s timing."},target:U("m-library",".m-interpretation .m-listen")},{say:{de:"Hier siehst du unter den Noten, wie schnell und wie laut gespielt wird, verglichen mit den Noten. So erkennst du, wo sie sich Zeit nehmen.",en:"Here you see under the score how fast and how loud it is played, compared with the written score. So you see where they take their time."},target:U("m-library",".m-graph-key")},{say:{de:"Und jetzt das Beste: „Start“ und „Aufnehmen“ folgen ihrem Tempo. Das Klavier atmet wie in der Aufnahme, und du spielst mit.",en:"And now the best part: “Play” and “Record” follow their timing. The piano breathes as in the recording, and you play along."},target:()=>N("button.m-btn.play")},{say:{de:"Mit „Standard“ in der Liste kommst du zurück zum Tempo der Noten. Viel Freude beim Zuhören!",en:"Choose “Default” in the list to go back to the written tempo. Enjoy listening!"},target:Ti,wave:!0}]},ye=t=>()=>N(`.page-setup.current ${t}`),nt=t=>()=>N(`.page-tune.current ${t}`),Ea=()=>!!ye(".gain-range:not(:disabled)")(),Jg=t=>!!W(`.page-setup.current .cal-inline.${t}, .page-setup.current .cal-card.${t}`),Zg={id:"audio-setup",page:"app",title:{de:"Audio einrichten",en:"Setting up your audio"},available:()=>!!N(".page-setup.current"),steps:[{say:{de:"Hallo, wir stellen jetzt dein Mikrofon ein, damit die App dich gut hört und dein Spiel genau an die richtige Stelle legt.",en:"Hi, let’s set up your microphone, so the app hears you well and places your playing exactly where it belongs."},target:ye(".headline"),wave:!0},{when:()=>!Ea(),say:{de:"Zuerst braucht die App dein Mikrofon. Drück hier und erlaube es in deinem Browser.",en:"First the app needs your microphone. Press here and allow it in your browser."},target:ye(".mic-state .key"),action:"click",done:Ea},{say:{de:"Hier wählst du, welches Mikrofon zuhört und wohin der Ton geht. Hast du Kopfhörer mit Kabel, wähl sie als Ausgabe.",en:"Here you choose which microphone listens and where the sound goes. With wired headphones, choose them as the output."},target:ye(".devices")},{say:{de:"Spiel jetzt ein paar laute Töne. Der Balken soll bis in den grünen Bereich reichen, aber nicht ins Rote.",en:"Now play a few loud notes. The bar should reach the green zone, but not the red."},target:ye(".meter-row")},{say:{de:"Zu leise oder zu laut? Schieb diesen Regler, bis deine lautesten Töne im Grünen landen.",en:"Too quiet or too loud? Move this slider until your loudest notes land in the green."},target:ye(".gain-range")},{when:()=>!!ye(".sides-row:not(.off)")(),say:{de:"Dein Mikrofon hat zwei Seiten. Beide sollten sich bewegen, wenn du spielst.",en:"Your microphone has two sides. Both should move when you play."},target:ye(".sides-row")},{when:()=>!!ye(".cal-keys")(),say:{de:"Zum Schluss die Verzögerung: Jedes Gerät braucht einen Moment vom Ton bis zum Mikrofon. Halt einen Hörer deiner Kopfhörer ans Mikrofon, sei leise, und drück auf „Messung starten“.",en:"Last, the delay: every device takes a moment from the sound to the microphone. Hold one side of your headphones to the microphone, keep quiet, and press “Start measuring”."},target:ye(".cal-keys .key"),action:"click",done:()=>Jg("done")},{say:{de:"Fertig! Jetzt weiß die App, wie dein Gerät klingt, und deine Aufnahmen liegen genau im Takt. Viel Spaß!",en:"Done! Now the app knows your device, and your takes line up exactly with the music. Have fun!"},target:()=>ye(".cal-keys .key.primary")()??ye(".headline")(),wave:!0}]},Xg={id:"tuner",page:"app",title:{de:"Dein Instrument stimmen",en:"Tuning your instrument"},available:()=>!!N(".page-tune.current .strings"),steps:[{say:{de:"Hallo, ich helfe dir, dein Instrument zu stimmen, Saite für Saite.",en:"Hi, I’ll help you tune your instrument, string by string."},target:()=>nt(".graph")(),wave:!0},{when:()=>!!nt(".mic-cover .mic-key")(),say:{de:"Der Stimmer braucht dein Mikrofon. Drück hier und erlaube es.",en:"The tuner needs your microphone. Press here and allow it."},target:nt(".mic-cover .mic-key"),action:"click",done:()=>!nt(".mic-cover")()},{say:{de:"Hier sind deine Saiten. Die hervorgehobene stimmst du jetzt. Tipp eine andere an, um sie zu stimmen.",en:"Here are your strings. The one highlighted is the one to tune now. Tap another to tune that one."},target:nt(".strings")},{say:{de:"Streich die Saite an. Die Linie zeigt deinen Ton: über der Mitte zu hoch, darunter zu tief. Der Pfeil sagt dir, wohin. Dreh am Wirbel oder Feinstimmer, bis sie grün ist.",en:"Play the string. The line shows your pitch: above the middle too high, below too low. The arrow tells you which way. Turn the peg or fine tuner until it turns green."},target:nt(".graph")},{say:{de:"Lieber nach Gehör? Dieser Knopf spielt den Ton der Saite, und du stimmst mit.",en:"Rather by ear? This button plays the string’s note, and you tune along with it."},target:nt(".tone-key")},{say:{de:"Bleibt die Saite eine Weile sauber, füllt sich ihr Kreis und sie bekommt einen Haken. Dann ist die nächste dran. Viel Spaß beim Stimmen!",en:"When the string stays in tune for a moment, its circle fills and gets a tick. Then it’s the next one’s turn. Happy tuning!"},target:nt(".strings"),wave:!0}]},_n=t=>()=>N(`.page-ready.current ${t}`),it=()=>{const t=_n("start-modes")();return t!=null&&t.shadowRoot?t.shadowRoot:null},Qg=t=>()=>{const e=it();return e?ne(t,e).find(n=>M(n))??null:null},Dr=t=>()=>{const e=it();return e?ne(".tabs button",e)[t]??null:null},ey={id:"ready",page:"app",title:{de:"Loslegen",en:"Getting started"},available:()=>!!N(".page-ready.current"),steps:[{say:{de:"Hallo, gleich geht es los! Ich zeige dir, wie du wählst, was du spielst.",en:"Hi, you’re almost ready! I’ll show you how to choose what to play."},target:_n(".ready-title"),wave:!0},{when:()=>!!it(),say:{de:"Oben wählst du, wie du üben willst: Challenge, Übeplan oder Repertoire.",en:"At the top you choose how to practise: Challenge, Practice plan or Repertoire."},target:Qg(".tabs")},{when:()=>!!it(),say:{de:"In der Challenge gibt es drei Pfade: Leicht, Mittel und Schwer. Schaffst du ein Stück, öffnet sich das nächste.",en:"The Challenge has three tracks: Easy, Medium and Hard. Pass a piece and the next one opens."},target:Dr(0)},{when:()=>!!it(),say:{de:"Mit den Pfeilen, den Pfeiltasten oder einem Wisch blätterst du durch die Stücke. Gesperrte kannst du dir schon ansehen.",en:"Flip through the pieces with the arrows, the arrow keys or a swipe. You can already look at locked ones."},target:()=>{const t=it();return t?ne(".panel.on .picker",t).filter(e=>M(e)).at(-1)??null:null}},{when:()=>!!it(),say:{de:"Beim Übeplan führt dich ein Zeitplan durch Einspielen, Tonleitern, Etüden und dein Stück. Pläne deiner Lehrkraft stehen hier ganz vorn.",en:"A Practice plan leads you through warm-up, scales, études and your piece on a timer. Plans from your teacher come first here."},target:Dr(1)},{when:()=>!!it(),say:{de:"Und im Repertoire wählst du frei aus allen Stücken, die du schon spielen kannst, nach Stufe und Genre.",en:"And in Repertoire you choose freely from every piece you can play already, by level and genre."},target:Dr(2)},{when:()=>!!_n(".card.account .key")(),say:{de:"Melde dich an, dann bleiben deine Aufnahmen und dein Fortschritt erhalten, auf jedem Gerät.",en:"Sign in and your takes and progress are kept, on every device."},target:_n(".card.account")},{say:{de:"Bist du bereit? Drück auf den großen Knopf. Viel Spaß!",en:"Ready? Press the big button. Have fun!"},target:_n(".go"),wave:!0}]},ty=[Bg,Zg,Xg,ey,Gg,Kg,qg,Yg,Hg,...Fg,...Mg],Aa={de:"de-DE",en:"en-GB"},Ia=/natural|neural|online|google|premium|enhanced/i,ny=1.2,iy=2.4,ry=t=>t.split(/\s+/).filter(Boolean).length,rs=(t,e=1)=>Math.max(1,ry(t)/iy/e),sy=1.2,oy=2e3,ay=120,ly=150;class cy{constructor(){this.turn=0,this.fallback=0,this.cancelledAt=-1/0,this.watch=0}get available(){return typeof speechSynthesis<"u"}voiceFor(e){if(!this.available)return;const n=speechSynthesis.getVoices().filter(i=>i.lang.toLowerCase().startsWith(e));return n.find(i=>Ia.test(i.name)&&i.lang===Aa[e])??n.find(i=>Ia.test(i.name))??n.find(i=>i.lang===Aa[e])??n[0]}speak(e,n,i=1){return this.stop(),new Promise(r=>{const s={text:e,language:n,rate:i,reached:0,resolve:r};this.current=s,this.utter(s)})}setRate(e){const n=this.current;!n||n.rate===e||(n.rate=e,window.clearTimeout(this.fallback),window.clearInterval(this.watch),this.mode=void 0,this.turn++,this.cancel(),this.utter(n))}cancel(){this.available&&((speechSynthesis.speaking||speechSynthesis.pending)&&(this.cancelledAt=performance.now()),speechSynthesis.cancel(),this.utterance&&(this.utterance.onboundary=this.utterance.onend=this.utterance.onerror=this.utterance.onstart=null),this.utterance=void 0)}utter(e){const n=++this.turn,i=()=>n===this.turn&&this.start(e,n);if(this.available&&!speechSynthesis.getVoices().length){jc().then(i);return}const r=ay-(performance.now()-this.cancelledAt);r>0?this.fallback=window.setTimeout(i,r):i()}start(e,n){const i=c=>{n!==this.turn||this.current!==e||(this.current=void 0,this.mode=void 0,window.clearTimeout(this.fallback),window.clearInterval(this.watch),e.resolve(c))},r=e.reached,s=e.text.slice(r),o=this.voiceFor(e.language);if(!o||!s.trim()){this.mode=s.trim()?"silent":void 0,this.fallback=window.setTimeout(()=>i(!0),s.trim()?rs(s,e.rate)*1e3:0);return}const a=new SpeechSynthesisUtterance(s);a.voice=o,a.lang=o.lang,a.rate=e.rate,a.pitch=ny,a.onboundary=c=>{var y;n!==this.turn||c.name!=="word"||(e.reached=r+c.charIndex,(y=this.onWord)==null||y.call(this))},a.onend=()=>i(!0),a.onerror=()=>i(!1),this.utterance=a,this.mode="voice";let l=!1;a.onstart=()=>l=!0,this.watch=window.setInterval(()=>{if(n!==this.turn)return window.clearInterval(this.watch);speechSynthesis.speaking?l=!0:l&&!speechSynthesis.pending&&i(!0)},ly),speechSynthesis.paused&&speechSynthesis.resume(),speechSynthesis.speak(a),this.fallback=window.setTimeout(()=>i(!0),(rs(s,e.rate)*2+4)*1e3)}get sounding(){return!this.current||!this.mode?!1:this.mode==="silent"?!0:this.available&&speechSynthesis.speaking&&!speechSynthesis.paused}stop(){this.turn++,this.current=void 0,this.mode=void 0,window.clearTimeout(this.fallback),window.clearInterval(this.watch),this.cancel()}}let Nr;function jc(){return typeof speechSynthesis>"u"||speechSynthesis.getVoices().length?Promise.resolve():(Nr??(Nr=new Promise(t=>{const e=()=>{window.clearInterval(i),window.clearTimeout(r),speechSynthesis.removeEventListener("voiceschanged",n),Nr=void 0,t()},n=()=>{speechSynthesis.getVoices().length&&e()};speechSynthesis.addEventListener("voiceschanged",n);const i=window.setInterval(n,100),r=window.setTimeout(e,oy)})),Nr)}function hy(){jc()}function Bt(t,e,n={}){let i=t[e==="de"?"de":"en"];for(const[r,s]of Object.entries(n))i=i.replaceAll(`{${r}}`,String(s));return i}function Gc(t=".key"){const e=ke(t);return Le`
    ${e} {
      position: relative;
      display: grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      width: var(--size, 36px);
      height: var(--size, 36px);
      min-height: 0;
      margin: 0;
      padding: 0;
      border: 1px solid var(--m-key-edge, var(--key-edge, var(--m-line, var(--line))));
      border-radius: 50%;
      box-shadow: var(--m-key-shadow, var(--key-shadow, none));
      font: 700 1rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      text-decoration: none;
      color: var(--m-muted, var(--muted));
      background: var(--m-surface, var(--surface));
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    ${e}:hover:where(:not(:disabled)),
    ${e}[aria-expanded='true'] {
      color: var(--m-text, var(--text));
      background: var(--m-bg, var(--bg));
      border-color: var(--m-key-edge, var(--key-edge, var(--m-line, var(--line))));
      text-decoration: none;
    }
    ${e}:disabled {
      cursor: default;
      opacity: 0.5;
    }
    ${e}:focus-visible {
      outline: 2px solid var(--m-accent, var(--accent));
      outline-offset: 2px;
    }
    ${e} > svg:not(.face) {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 1.8;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `}const Xs=Gc(".key");var dy=Object.defineProperty,uy=Object.getOwnPropertyDescriptor,dn=(t,e,n,i)=>{for(var r=i>1?void 0:i?uy(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&dy(e,n,r),r};const py=["--m-accent","--m-accent-soft","--m-surface","--m-text","--m-muted","--m-line","--m-bg"],ai={help:{de:"Hilfe",en:"Help"},online:{de:"Online-Hilfe",en:"Online help"},guides:{de:"Quick Guides",en:"Quick guides"}};let ft=class extends _e{constructor(){super(...arguments),this.page="",this.language="de",this.help="",this.label="",this.open=!1,this.started=t=>{const e=this.mine.find(n=>n.id===t.detail);e&&this.launch(e)},this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this.escape=t=>{this.open&&t.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("start-guide",this.started),document.addEventListener("click",this.outside,!0),document.addEventListener("keydown",this.escape)}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("start-guide",this.started),document.removeEventListener("click",this.outside,!0),document.removeEventListener("keydown",this.escape),(t=this.agent)==null||t.remove()}updated(t){t.has("language")&&this.agent&&(this.agent.language=this.language)}get mine(){return ty.filter(t=>t.page===this.page)}async launch(t){var s;this.open=!1;const e=lg(),[n]=await Promise.all([e?Bc(e).catch(()=>null):null,Rg(()=>Promise.resolve().then(()=>sw),void 0,import.meta.url)]);(s=this.agent)==null||s.remove();const i=document.createElement("cr-guide");i.guide=t,i.language=this.language,i.nickname=n??"",i.person=e??"",i.addEventListener("close",()=>{i.remove(),this.agent===i&&(this.agent=void 0)});for(const o of py){const a=getComputedStyle(this).getPropertyValue(o);a&&i.style.setProperty(o,a)}const r=ne("dialog").filter(o=>o.open&&o.matches(":modal")).at(-1);if((r??document.body).append(i),r){const o=a=>{a.target===r&&(r.removeEventListener("close",o),i.isConnected&&i.dispatchEvent(new Event("close")))};r.addEventListener("close",o)}this.agent=i}toggle(){this.open=!this.open,this.open&&hy()}render(){const t=i=>Bt(i,this.language),e=this.label||t(ai.help),n=this.open?this.mine.filter(i=>i.available()):[];return E`
      <button class="key" title=${e} aria-label=${e} aria-haspopup="menu" aria-expanded=${this.open} @click=${this.toggle}>?</button>
      ${this.open?E`<div class="menu" role="menu">
            <!-- As the account menu's items (account-menu.ts): bordered, an icon in the theme colour -->
            <span class="separator">${t(ai.online)}</span>
            <a class="item" role="menuitem" href=${this.help} target="_blank" rel="noopener" @click=${()=>this.open=!1}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10.4 5.2 8 4.5 4 4.5v13c4 0 6.4.7 8 2 1.6-1.3 4-2 8-2v-13c-4 0-6.4.7-8 2z" /><path d="M12 6.5v13" /></svg>
              ${t(ai.help)}
            </a>
            ${n.length?E`<span class="separator">${t(ai.guides)}</span>`:I}
            ${n.map(i=>E`<button class="item" role="menuitem" @click=${()=>void this.launch(i)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10.5h-9l-4.5 3.5V16H4z" /><path d="M10.5 8.5l3.5 2.25-3.5 2.25z" /></svg>
                ${t(i.title)}
              </button>`)}
          </div>`:I}
    `}};ft.styles=[Xs,Le`
    :host {
      position: relative;
      display: inline-flex;
      flex: none;
    }
    /* The header key itself: HEADER_KEY_CSS, as every header key */
    .key:focus-visible,
    .item:focus-visible {
      outline: 2px solid var(--m-accent);
      outline-offset: 2px;
    }
    /* As the account menu (account-menu.ts): its frame, and its items bordered with an icon in the theme colour */
    .menu {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      z-index: 50;
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
      box-shadow: 0 8px 28px var(--m-shadow, rgba(0, 0, 0, 0.18));
    }
    /* A part's name: small capitals in muted type, a line running on to the menu's edge */
    .separator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--m-muted);
    }
    .separator::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--m-line);
    }
    .separator:not(:first-child) {
      margin-top: 0.3rem;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.55rem 0.8rem;
      font: 600 0.9rem system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--m-text);
      background: var(--m-surface);
      border: 1px solid var(--m-line);
      border-radius: 10px;
      text-align: left;
      text-decoration: none;
      cursor: pointer;
    }
    .item:hover:where(:not(:disabled)) {
      background: var(--m-bg);
    }
    .item svg {
      flex: none;
      width: 18px;
      height: 18px;
      fill: none;
      stroke: var(--m-accent);
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    /* A phone held upright: as the other header keys there */
    @media (max-width: 560px) and (orientation: portrait) {
      .key {
        width: 32px;
        height: 32px;
      }
    }
  `];dn([$()],ft.prototype,"page",2);dn([$()],ft.prototype,"language",2);dn([$()],ft.prototype,"help",2);dn([$()],ft.prototype,"label",2);dn([B()],ft.prototype,"open",2);ft=dn([Vt("cr-guide-menu")],ft);const Qs=["blue","violet","teal","rose","graphite"],ss={light:"#eef0f2",dark:"#121417"},$e={blue:{light:{accent:"#2563eb",hover:"#1d4fd7"},dark:{accent:"#336fea",hover:"#4d85f2"}},violet:{light:{accent:"#6d44dc",hover:"#5b34c4"},dark:{accent:"#7a58ee",hover:"#8f72f4"}},teal:{light:{accent:"#0d7488",hover:"#0a6071"},dark:{accent:"#0c8296",hover:"#1196ad"}},rose:{light:{accent:"#c8255f",hover:"#a81d4f"},dark:{accent:"#d6316c",hover:"#e34f84"}},graphite:{light:{accent:"#434b5a",hover:"#323945"},dark:{accent:"#66728a",hover:"#7b879e"}}},Yi=.05;function fy(t,e){const n=(s,o)=>parseInt(s.slice(1+2*o,3+2*o),16),i=$e[t][e].accent,r=ss[e];return`#${[0,1,2].map(s=>Math.round(n(i,s)*Yi+n(r,s)*(1-Yi)).toString(16).padStart(2,"0")).join("")}`}const xa=t=>`--m-accent: ${t.accent}; --m-accent-hover: ${t.hover};`,my=Qs.map(t=>`:host([scheme='${t}']) { ${xa($e[t].light)} }
:host([scheme='${t}'][theme='dark']) { ${xa($e[t].dark)} }`).join(`
`);function $a(t){return Qs.includes(t)}const Kc=j`${Or.mark.paths.map(t=>j`<path d=${t} />`)}${Or.mark.circles.map(([t,e,n])=>j`<circle cx=${t} cy=${e} r=${n} />`)}`,gy=j`
  <g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" />
    ${Kc}
  </g>`,qc={marketplace:j`<path d="M5.5 8h13l-1 12h-11z" /><path d="M9 10V6.5a3 3 0 0 1 6 0V10" />`,halloffame:j`<path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />`,creator:j`<path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v8" />`,profile:j`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,help:j`<path d="M8.6 8.6a3.5 3.5 0 1 1 5.1 3.1c-1 .5-1.7 1.3-1.7 2.4v.6" /><path d="M12 18.4v.1" />`},Pa={app:St(),marketplace:`${St()} Marketplace`,halloffame:`${St()} Hall of Fame`,creator:`${St()} Creator`,profile:`${St()} Profile`,help:`${St()} Help`};function Ji(t,e,n=e==="app"?"./":"../"){if(t!=="app"&&t!=="help")return gg(t,n);if(t==="app"&&Ha)return qi;const i=n;return t==="app"?e==="app"||e==="help"?i:`${i}?from=${e}`:`${i}${t}`}function yy(t){return t==="app"?gy:j`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" stroke-width="5.5" />
    <g transform="translate(20 20) scale(2.5)" stroke-width="2.1">${qc[t]}</g>
  </g>`}const wy={app:["halloffame"],creator:["marketplace"]};function by(t,e,n={}){const i=Te()==="de"?"Profil":"Profile",r=t!=="profile"||n.home?E`<a
          class="m-help m-place home"
          href=${t==="profile"?Hc:Ji("profile",t,e)}
          title=${i}
          aria-label=${i}
          @click=${o=>t==="app"&&!window.dispatchEvent(new CustomEvent("open-profile",{cancelable:!0}))&&o.preventDefault()}
        >
          ${j`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11L12 4l8.5 7" /><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5" /></svg>`}
        </a>`:I,s=[...t!=="app"&&!Ha?["app"]:[],...wy[t]??[]];return E`${r}${s.filter(o=>o!==t).map(o=>E`<a class="m-help m-place ${o}" href=${Ji(o,t,e)} title=${Pa[o]} aria-label=${Pa[o]}>
        ${o==="app"?j`<svg viewBox="24 10 52 78" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">${Kc}</g></svg>`:j`<svg viewBox="0 0 24 24" aria-hidden="true">${qc[o]}</svg>`}
      </a>`)}`}const vy=parseFloat("0.238+")<1;function ky(t){return E`<span class="m-version-line">
    <span class="m-version" title=${t}>v${"0.238+"}</span>
    ${vy?E`<span class="m-beta">Beta</span>`:""}
  </span>`}const Ty=Le`
    /*
     * The whole window, light surfaces on a cool grey, the system's type at reading sizes, one
     * blue for what is active, red for recording
     */
    :host {
      /* Greys with a touch of the theme colour (themes.ts's TINT), so they go with each scheme */
      --m-bg: color-mix(in srgb, var(--m-accent) ${ke(Yi*100)}%, ${ke(ss.light)});
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
      --m-accent: ${ke($e.blue.light.accent)};
      --m-accent-hover: ${ke($e.blue.light.hover)};
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
      --m-bg: color-mix(in srgb, var(--m-accent) ${ke(Yi*100)}%, ${ke(ss.dark)});
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
      --m-accent: ${ke($e.blue.dark.accent)};
      --m-accent-hover: ${ke($e.blue.dark.hover)};
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
    ${ke(my)}
`,Sy=Le`
    /* The round keys (help, home, the places): header-key.ts, the one look of every header key */
    ${Gc(".m-help")}
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
    /* The name with the build's version ("0.238+") under it, left aligned; cut where the keys need the room */
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
    /*
     * The place keys are help keys (.m-help: shape, size, hover), their line icons in the one grey
     * of every header key (help, bell, home, Crescendu's alike), darker under the pointer
     */
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
`,_y="hero-profile";var Ey=Object.defineProperty,Ay=Object.getOwnPropertyDescriptor,F=(t,e,n,i)=>{for(var r=i>1?void 0:i?Ay(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Ey(e,n,r),r};const Yc="violinhero-nickname-asked",Iy=3e3,xy="https://www.crescendu.com/feedback",$y=j`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,Py=j`<path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
  <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24z" />
  <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
  <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />`;let O=class extends _e{constructor(){super(),this.hint=!1,this.reason="save",this.waiting=0,this.place="app",this.holdAsk=!1,this.creator=!1,this.menuOpen=!1,this.creating=!1,this.email="",this.password="",this.error="",this.info="",this.busy=!1,this.askName="",this.askNote="",this.askBusy=!1,this.justSignedIn=!1,this.profileOpen=!1,this.brokenPicture=!1,this.fromProfile=t=>{var e;!Zs(t.origin)||((e=t.data)==null?void 0:e.type)!==_y||(t.data.action==="close"&&(this.profileOpen=!1),t.data.action==="saved"&&(this.claimed=typeof t.data.nickname=="string"?t.data.nickname:null,tg().then(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("user-refresh",{bubbles:!0,composed:!0}))})))},this.openProfile=t=>{this.place!=="app"||!this.user||(t.preventDefault(),this.menuOpen=!1,this.profileOpen=!0)},this.outside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.invitedTimer=0,new qs(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside),window.addEventListener("message",this.fromProfile),window.addEventListener("open-profile",this.openProfile)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside),window.removeEventListener("message",this.fromProfile),window.removeEventListener("open-profile",this.openProfile)}willUpdate(t){var e,n,i,r,s;if(t.has("holdAsk")&&!this.holdAsk&&t.get("holdAsk")&&this.askNickname(),t.has("user")){if(this.brokenPicture=!1,((e=t.get("user"))==null?void 0:e.uid)!==((n=this.user)==null?void 0:n.uid)){this.claimed=void 0,this.profileOpen=!1;const o=(i=this.user)==null?void 0:i.uid;o&&Bc(o).then(l=>{var c;((c=this.user)==null?void 0:c.uid)===o&&(this.claimed=l??null,this.askNickname())}),this.creator=!1;const a=(r=this.user)==null?void 0:r.uid;a&&this.place!=="creator"&&ag(a).then(l=>{var c;return((c=this.user)==null?void 0:c.uid)===a&&(this.creator=l)})}this.user?(s=this.dialog)==null||s.close():this.menuOpen=!1}}openSignIn(){var t;this.user||(this.error=this.info="",(t=this.dialog)==null||t.showModal())}press(){var t;if(this.user!==void 0){if(this.user){this.menuOpen=!this.menuOpen;return}this.error=this.info="",(t=this.dialog)==null||t.showModal()}}render(){const t=this.user,e=t!=null&&t.photoURL&&!this.brokenPicture?t.photoURL:"",n=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"",i=ee(),r=t?i.signedInAs(n):i.signIn;return E`
      <button
        class="key ${t?"signed-in":""}"
        aria-label=${r}
        title=${r}
        aria-haspopup=${t?"menu":"dialog"}
        aria-expanded=${t?this.menuOpen:!1}
        ?disabled=${t===void 0}
        @click=${this.press}
      >
        ${e?E`<img src=${e} alt="" referrerpolicy="no-referrer" @error=${()=>this.brokenPicture=!0} />`:t?E`<span class="initial">${Dy(n)}</span>`:E`<svg viewBox="0 0 24 24" aria-hidden="true">${$y}</svg>`}
      </button>
      ${t&&this.menuOpen?this.menu(t):I} ${this.hint&&t===null?this.hintBubble():I} ${this.signInDialog()}
      ${this.nicknameDialog()} ${this.profileOverlay()}
    `}profileOverlay(){return E`<cr-preview-overlay
      .src=${this.profileOpen?yg(Ji("profile",this.place,this.root),"embedded&bar"):""}
      .icon=${E`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11L12 4l8.5 7" /><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5" /></svg>`}
      .name=${St()}
      .place=${ee().profile}
      .closeLabel=${ee().close}
      @close=${()=>this.profileOpen=!1}
      @frame-load=${t=>Tg(t.detail)}
    ></cr-preview-overlay>`}hintBubble(){const t=ee();return E`
      <div class="hint" role="status">
        <button class="hint-text" @click=${this.fromHint}>
          <strong>${this.reason==="score"?t.scoreHintTitle:this.reason==="share"?t.shareHintTitle:t.hintTitle}</strong>
          <span>${this.reason==="score"?t.scoreHintText:this.reason==="share"?t.shareHintText:t.hintText(this.waiting)}</span>
        </button>
        <button class="hint-close" aria-label=${t.hintDismiss} title=${t.hintDismiss} @click=${()=>this.fire("hint-dismiss")}>×</button>
      </div>
    `}fromHint(){this.fire("hint-close"),this.press()}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}menu(t){const e=ee(),n=!t.emailVerified&&t.providerData.some(i=>i.providerId==="password");return E`
      <div class="menu" role="menu" @keydown=${i=>i.key==="Escape"&&(this.menuOpen=!1)}>
        <div class="who">
          ${t.displayName?E`<strong>${t.displayName}</strong>`:I}
          <span class="email">${t.email}</span>
        </div>
        ${n?E`<p class="note warn">${e.confirmEmail}</p>`:I}
        ${this.creator&&this.place!=="creator"?E`<a class="item creator-link" role="menuitem" href=${Ji("creator",this.place,this.root)}
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></svg>${e.creatorDashboard}</a
            >`:I}
        <button class="item invite-item ${this.invited??""}" role="menuitem" @click=${()=>void this.invite(t)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5" /><circle cx="10" cy="8" r="3.5" /><path d="M18 8v6M15 11h6" /></svg>
          ${this.invited==="copied"?e.inviteCopied:this.invited==="failed"?e.inviteFailed:e.invite}
        </button>
        <a class="item invite-item" role="menuitem" href=${xy} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4.5" /></svg>
          ${e.feedback}
        </a>
        <button class="item" role="menuitem" @click=${()=>void og()}>${e.signOut}</button>
        ${this.place==="app"||this.place==="creator"?E`<button
              class="item delete-item"
              role="menuitem"
              @click=${()=>{this.menuOpen=!1,this.dispatchEvent(new CustomEvent("delete-account",{bubbles:!0,composed:!0}))}}
            >
              ${this.place==="creator"?e.deleteAccount.creatorMenu:e.deleteAccount.menu}
            </button>`:I}
      </div>
    `}async invite(t){const e=xg(t.uid,this.root??fg(this.place==="app")),n=await $g(e,ee().inviteText);this.invited=n==="shared"?void 0:n,clearTimeout(this.invitedTimer),this.invitedTimer=window.setTimeout(()=>this.invited=void 0,Iy)}signInDialog(){const t=ee();return E`
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
              minlength=${Tn}
              placeholder=${this.creating?t.passwordHint(Tn):""}
              .value=${this.password}
              @input=${e=>this.password=e.target.value}
            />
          </label>
          ${this.error?E`<p class="error" role="alert">${this.error}</p>`:I}
          ${this.info?E`<p class="info">${this.info}</p>`:I}
          <button class="primary" type="submit" ?disabled=${this.busy}>${this.creating?t.createAccountButton:t.signIn}</button>
          <div class="links">
            <button class="link" type="button" @click=${()=>(this.creating=!this.creating,this.error=this.info="")}>
              ${this.creating?t.haveAccount:t.createAccount}
            </button>
            ${this.creating?I:E`<button class="link" type="button" @click=${this.reset}>${t.forgotPassword}</button>`}
          </div>
          <div class="divider">${t.or}</div>
          <button class="google" type="button" ?disabled=${this.busy} @click=${this.google}>
            <svg viewBox="0 0 24 24" aria-hidden="true">${Py}</svg>
            ${t.google}
          </button>
          <p class="agree">
            ${t.agree[0]}<a href=${ya("terms")} target="_blank" rel="noopener">${t.termsName}</a>${t.agree[1]}<a
              href=${ya("privacy")}
              target="_blank"
              rel="noopener"
              >${t.privacyName}</a
            >${t.agree[2]}
          </p>
        </form>
      </dialog>
    `}backdrop(t){var e;t.target===this.dialog&&((e=this.dialog)==null||e.close())}askNickname(){var n;const t=this.user;if(!t||this.claimed!==null||(n=this.askDialog)!=null&&n.open||this.holdAsk)return;const e=Cy();!this.justSignedIn&&e.includes(t.uid)||(this.justSignedIn=!1,Ry([...e.filter(i=>i!==t.uid),t.uid]),this.askName=Ny(t),this.askNote="",this.menuOpen=!1,this.updateComplete.then(()=>{var r,s,o;if(((r=this.user)==null?void 0:r.uid)!==t.uid||this.claimed!==null)return;(s=this.askDialog)==null||s.showModal();const i=(o=this.askDialog)==null?void 0:o.querySelector("input");i==null||i.focus(),i==null||i.select()}))}async saveAsked(t){var n;t.preventDefault();const e=this.askName.trim();if(e){this.askBusy=!0,this.askNote="";try{await cg(e),this.claimed=e.slice(0,60),(n=this.askDialog)==null||n.close()}catch(i){this.askNote=i instanceof Sn?i.reason==="taken"?ee().nicknameTaken(e):ee().nicknameInvalid:ii(i)}finally{this.askBusy=!1}}}nicknameDialog(){const t=ee(),e=t.nicknameDialog;return E`
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
          ${this.askNote?E`<p class="error" role="alert">${this.askNote}</p>`:I}
          <!-- As every form ends: on the right, Later first, then Save -->
          <div class="ask-actions">
            <button class="google later" type="button" @click=${()=>{var n;return(n=this.askDialog)==null?void 0:n.close()}}>${e.later}</button>
            <button class="primary" type="submit" ?disabled=${this.askBusy||!this.askName.trim()}>${e.save}</button>
          </div>
        </form>
      </dialog>
    `}async submit(t){if(t.preventDefault(),this.error=this.info="",this.creating&&this.password.length<Tn){this.error=ee().auth.weakPassword(Tn);return}this.busy=!0;try{this.justSignedIn=!0,await(this.creating?ig(this.email,this.password):ng(this.email,this.password)),this.askNickname()}catch(e){this.justSignedIn=!1,this.error=ii(e)}finally{this.busy=!1}}async google(){this.error=this.info="";try{this.justSignedIn=!0,await rg(),this.askNickname()}catch(t){this.justSignedIn=!1,this.error=ii(t)}}async reset(){if(this.error=this.info="",!this.email.trim()){this.error=ee().enterEmailFirst;return}try{await sg(this.email),this.info=ee().resetSent(this.email.trim())}catch(t){this.error=ii(t)}}};O.styles=[Xs,Le`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      flex: none;
      --size: 36px;
    }
    /* The picture or initial fills the key (HEADER_KEY_CSS the rest) */
    .key {
      overflow: hidden;
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
    .item:hover:where(:not(:disabled)) {
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
    .hint-close:hover:where(:not(:disabled)) {
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
    .close:hover:where(:not(:disabled)) {
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
    /* The nickname dialog's keys: on the right, Later (a secondary key) before Save */
    .ask-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 0.5rem;
    }
    .ask-actions button {
      padding: 0 1.1rem;
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

  `];F([$({attribute:!1})],O.prototype,"user",2);F([$({type:Boolean})],O.prototype,"hint",2);F([$()],O.prototype,"reason",2);F([$({type:Number})],O.prototype,"waiting",2);F([$()],O.prototype,"place",2);F([$({type:Boolean})],O.prototype,"holdAsk",2);F([$()],O.prototype,"root",2);F([B()],O.prototype,"creator",2);F([B()],O.prototype,"menuOpen",2);F([B()],O.prototype,"creating",2);F([B()],O.prototype,"email",2);F([B()],O.prototype,"password",2);F([B()],O.prototype,"error",2);F([B()],O.prototype,"info",2);F([B()],O.prototype,"busy",2);F([B()],O.prototype,"claimed",2);F([B()],O.prototype,"askName",2);F([B()],O.prototype,"askNote",2);F([B()],O.prototype,"askBusy",2);F([gt("dialog.ask")],O.prototype,"askDialog",2);F([B()],O.prototype,"profileOpen",2);F([B()],O.prototype,"brokenPicture",2);F([gt("dialog")],O.prototype,"dialog",2);F([B()],O.prototype,"invited",2);O=F([Vt("account-menu")],O);function Dy(t){return(t.trim()[0]??"?").toUpperCase()}function Ny(t){var i,r;const n=(((i=t.displayName)==null?void 0:i.trim())||((r=t.email)==null?void 0:r.split("@")[0])||"").replace(/\//g,"").replace(/^_+|_+$/g,"").trim().slice(0,60);return/^\.{1,2}$/.test(n)?"":n}function Cy(){try{const t=JSON.parse(localStorage.getItem(Yc)??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}function Ry(t){try{localStorage.setItem(Yc,JSON.stringify(t.slice(-20)))}catch{}}var Ly=Object.defineProperty,My=Object.getOwnPropertyDescriptor,dr=(t,e,n,i)=>{for(var r=i>1?void 0:i?My(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Ly(e,n,r),r};const Da=j`<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />`,Na=j`<circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />`;let sn=class extends _e{constructor(){super(),this.theme="light",this.scheme="blue",this.open=!1,this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},new qs(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside)}choose(t){this.open=!1,Vc(t)}fire(t,e){this.open=!1,this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){const t=ee(),e=je[Te()],n=this.theme==="dark",i=`${t.languageTitle(e.name)} · ${t.themeMenu}`;return E`
      <button class="key" aria-label=${i} title=${i} aria-haspopup="menu" aria-expanded=${this.open} @click=${()=>this.open=!this.open}>
        ${this.split()}
      </button>
      ${this.open?E`<div class="menu" role="menu" aria-label=${i} @keydown=${r=>r.key==="Escape"&&(this.open=!1)}>
            ${Object.keys(je).map(r=>E`<button
                role="menuitemradio"
                aria-checked=${r===Te()}
                class=${r===Te()?"on":""}
                @click=${()=>this.choose(r)}
              >
                ${this.flag(r)}
                <span>${je[r].name}</span>
                ${r===Te()?E`<span class="tick" aria-hidden="true">✓</span>`:I}
              </button>`)}
            <hr />
            <button role="menuitem" @click=${()=>this.fire("theme-change",n?"light":"dark")}>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${n?Na:Da}</svg>
              <span>${n?t.lightMode:t.darkMode}</span>
            </button>
            <hr />
            ${Qs.map(r=>E`<button
                role="menuitemradio"
                aria-checked=${r===this.scheme}
                class=${r===this.scheme?"on":""}
                @click=${()=>this.fire("scheme-change",r)}
              >
                <span class="swatch" style="background: ${$e[r][this.theme].accent}" aria-hidden="true"></span>
                <span>${t.schemes[r]}</span>
                ${r===this.scheme?E`<span class="tick" aria-hidden="true">✓</span>`:I}
              </button>`)}
          </div>`:I}
    `}split(){const t=Te(),e=this.theme==="dark";return E`<svg class="face" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id="key-left"><rect x="0" y="0" width="12" height="24" /></clipPath>
        <clipPath id="key-round"><circle cx="12" cy="12" r="12" /></clipPath>
      </defs>
      <g clip-path="url(#key-round)">
        <g clip-path="url(#key-left)">${je[t].flag}</g>
        <rect x="12" y="0" width="12" height="24" fill=${$e[this.scheme][this.theme].accent} />
        <line x1="12" y1="0" x2="12" y2="24" class="seam" />
        <g class="mode" transform="translate(11.5 6.3) scale(0.475)">${e?Da:Na}</g>
      </g>
    </svg>`}flag(t){return E`<svg class="flag" viewBox="0 0 24 24" aria-hidden="true">
      <defs><clipPath id="round-${t}"><circle cx="12" cy="12" r="12" /></clipPath></defs>
      <g clip-path="url(#round-${t})">${je[t].flag}</g>
    </svg>`}};sn.styles=[Xs,Le`
    :host {
      position: relative;
      display: block;
      flex: none;
      --size: 36px;
    }
    /* The face fills the key (HEADER_KEY_CSS the rest) */
    .key {
      overflow: hidden;
    }
    /* The face fills the key: it dims a little on hover, as the other keys grey */
    .face {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: filter 0.15s;
    }
    .key:hover:where(:not(:disabled)) .face {
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
    .menu button:hover:where(:not(:disabled)) {
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
  `];dr([$()],sn.prototype,"theme",2);dr([$()],sn.prototype,"scheme",2);dr([B()],sn.prototype,"open",2);sn=dr([Vt("language-menu")],sn);const os="crescendu-look",Cr="crescendu.com",Oy=400*24*3600;function as(){var t;try{const e=(t=document.cookie.split(";").map(r=>r.trim()).find(r=>r.startsWith(`${os}=`)))==null?void 0:t.slice(os.length+1);if(!e)return{};const n=new URLSearchParams(decodeURIComponent(e)),i=n.get("theme");return{scheme:n.get("scheme")??void 0,theme:i==="light"||i==="dark"?i:void 0}}catch{return{}}}function Ca(t){try{const e={...as(),...t},n=new URLSearchParams;e.scheme&&n.set("scheme",e.scheme),e.theme&&n.set("theme",e.theme);const i=location.hostname,r=i===Cr||i.endsWith(`.${Cr}`)?`; Domain=${Cr}`:"",s=location.protocol==="https:"?"; Secure":"";document.cookie=`${os}=${encodeURIComponent(n.toString())}; Path=/; Max-Age=${Oy}; SameSite=Lax${r}${s}`}catch{}}var Vy=Object.defineProperty,Uy=Object.getOwnPropertyDescriptor,yt=(t,e,n,i)=>{for(var r=i>1?void 0:i?Uy(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Vy(e,n,r),r};const Rr=matchMedia("(prefers-color-scheme: dark)"),Lr="violinhero-settings",Ra={manual:{en:"Help",de:"Hilfe"},creator:{en:"Creator Help",de:"Creator-Hilfe"}},La={en:`Open ${Dt().app.name}`,de:`${Dt().app.name} öffnen`};let Re=class extends _e{constructor(){super(),this.guide="manual",this.language="en",this.root="../",this.pages="",this.theme=Rr.matches?"dark":"light",this.scheme="blue",this.followSystem=e=>{as().theme||(this.theme=e.matches?"dark":"light",this.applyTheme())},new qs(this);try{const e=JSON.parse(localStorage.getItem(Lr)??"{}");$a(e.scheme)&&(this.scheme=e.scheme)}catch{}const t=as();$a(t.scheme)&&(this.scheme=t.scheme),t.theme&&(this.theme=t.theme)}connectedCallback(){super.connectedCallback(),this.language in je&&Vc(this.language,!1),this.applyTheme(),Rr.addEventListener("change",this.followSystem),this.stopWatching=eg(t=>this.user=t),this.stopLanguage=Ks(()=>{const t=this.pageIn(Te());Te()!==this.language&&t&&(location.href=t+location.hash)})}disconnectedCallback(){var t,e;super.disconnectedCallback(),Rr.removeEventListener("change",this.followSystem),(t=this.stopWatching)==null||t.call(this),(e=this.stopLanguage)==null||e.call(this)}pageIn(t){for(const e of this.pages.split(/\s+/)){const[n,i]=e.split("=");if(n===t&&i)return i}}applyTheme(){var n;const t=document.documentElement;t.dataset.theme=this.theme;const e=$e[this.scheme][this.theme];t.style.setProperty("--accent",e.accent),t.style.setProperty("--accent-hover",e.hover),(n=document.querySelector('meta[name="theme-color"]'))==null||n.setAttribute("content",fy(this.scheme,this.theme))}setScheme(t){this.scheme=t,Ca({scheme:t});try{const e=JSON.parse(localStorage.getItem(Lr)??"{}");localStorage.setItem(Lr,JSON.stringify({...e,scheme:t}))}catch{}this.applyTheme()}render(){var e;const t=((e=Ra[this.guide])==null?void 0:e[this.language])??Ra.manual.en;return E`
      <header class="m-header">
        <a class="m-brand home" href=${this.root} title=${La[this.language]??La.en}>
          <svg class="m-logo" viewBox="0 0 100 100" aria-hidden="true">${yy("help")}</svg>
          <span class="m-titles">
            <!-- The app's name as it is, the help's in the theme colour -->
            <span class="m-name">${Dt().app.name} <span class="accent">${t}</span></span>
            ${ky(ee().versionTitle("0.238+","7f346a1 · 6a4e63b"))}
          </span>
        </a>
        <div class="m-header-end">
          ${by("help",this.root)}
          <language-menu
            .theme=${this.theme}
            .scheme=${this.scheme}
            @theme-change=${n=>{this.theme=n.detail,Ca({theme:n.detail}),this.applyTheme()}}
            @scheme-change=${n=>this.setScheme(n.detail)}
          ></language-menu>
          <account-menu .user=${this.user} place="help" root=${this.root}></account-menu>
        </div>
      </header>
    `}};Re.styles=[Ty,Sy,Le`
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
    `];yt([$()],Re.prototype,"guide",2);yt([$()],Re.prototype,"language",2);yt([$()],Re.prototype,"root",2);yt([$()],Re.prototype,"pages",2);yt([$({reflect:!0})],Re.prototype,"theme",2);yt([$({reflect:!0})],Re.prototype,"scheme",2);yt([B()],Re.prototype,"user",2);Re=yt([Vt("help-header")],Re);var zy=Object.defineProperty,Fy=Object.getOwnPropertyDescriptor,un=(t,e,n,i)=>{for(var r=i>1?void 0:i?Fy(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&zy(e,n,r),r};let mt=class extends _e{constructor(){super(...arguments),this.speaking=!1,this.waiting=!1,this.gesture=""}mouth(t){var n,i,r,s;const e=Math.max(0,Math.min(1,t));(n=this.open)==null||n.setAttribute("ry",(.6+e*5.4).toFixed(2)),(i=this.open)==null||i.setAttribute("rx",(5.5+e*1.5).toFixed(2)),(r=this.open)==null||r.setAttribute("opacity",e>.06?"1":"0"),(s=this.smile)==null||s.setAttribute("opacity",e>.06?"0":"1")}render(){return E`<svg viewBox="0 0 100 100" role="img" aria-hidden="true">
      <defs>
        <clipPath id="round"><circle cx="50" cy="50" r="50" /></clipPath>
      </defs>
      <g clip-path="url(#round)">
        <circle class="disc" cx="50" cy="50" r="50" />
        <g class="figure">
          <!-- Shoulders in a soft top -->
          <path class="top" d="M14 104c2-17 17-26 36-26s34 9 36 26z" />
          <path class="collar" d="M42 79l8 8 8-8" />
          <!-- Hair behind, then the face -->
          <path class="hair" d="M22 52c-2-22 11-34 28-34s30 12 28 34c-1 9-3 15-6 19l-2-20H30l-2 20c-3-4-5-10-6-19z" />
          <circle class="ear" cx="23.5" cy="55" r="4.2" />
          <circle class="ear" cx="76.5" cy="55" r="4.2" />
          <ellipse class="face" cx="50" cy="54" rx="26" ry="27" />
          <path class="hair" d="M24 50c1-17 12-26 26-26 13 0 24 8 26 23-9-2-17-7-22-14-5 9-17 15-30 17z" />
          <g class="look">
            <g class="eyes">
              <ellipse class="eye" cx="40" cy="54" rx="3.1" ry="3.8" />
              <ellipse class="eye" cx="60" cy="54" rx="3.1" ry="3.8" />
              <circle class="glint" cx="41.1" cy="52.6" r="1" />
              <circle class="glint" cx="61.1" cy="52.6" r="1" />
            </g>
            <!-- Eyelids, down over the eyes from above: half when bored, shut while yawning -->
            <rect class="lid" x="36.3" y="49.6" width="7.4" height="9" rx="3" />
            <rect class="lid" x="56.3" y="49.6" width="7.4" height="9" rx="3" />
            <path class="brow" d="M35 46.5q5-3 10 0M55 46.5q5-3 10 0" />
          </g>
          <circle class="cheek" cx="33.5" cy="63" r="4.2" />
          <circle class="cheek" cx="66.5" cy="63" r="4.2" />
          <!-- The mouth: a smile while shut (flat when bored), an opening while speaking -->
          <path class="mouth-smile" d="M43 67q7 6 14 0" />
          <path class="mouth-flat" d="M44.5 68.5h11" />
          <ellipse class="mouth-open" cx="50" cy="69" rx="5.5" ry="0.6" opacity="0" />
        </g>
        <!-- Her hand, below the circle until a gesture brings it up: its wrist at the group's origin -->
        <g class="arm">
          <path class="sleeve" d="M-7 44l1-38h12l1 38z" />
          <ellipse class="palm" cx="0" cy="0" rx="6.4" ry="7" />
          <path class="fingers" d="M-4.3-3.5v-7.5M-1.4-5v-9.5M1.5-5v-9.5M4.3-3.5v-7.5M5.8 1.5l4.3-3.8" />
        </g>
      </g>
    </svg>`}};mt.styles=Le`
    :host {
      display: block;
      width: 76px;
      height: 76px;
      border-radius: 50%;
      box-shadow: 0 0 0 3px var(--surface, var(--m-surface, #fff)), 0 4px 14px rgba(0, 0, 0, 0.22);
    }
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    .disc {
      fill: var(--accent, var(--m-accent, #1c7ed6));
    }
    .top,
    .sleeve {
      fill: #fff;
    }
    .top {
      opacity: 0.92;
    }
    .collar {
      fill: none;
      stroke: var(--accent, var(--m-accent, #1c7ed6));
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      opacity: 0.6;
    }
    .hair {
      fill: #5b3a29;
    }
    .face,
    .ear,
    .palm,
    .lid {
      fill: #f6cba6;
    }
    .fingers {
      fill: none;
      stroke: #f6cba6;
      stroke-width: 3;
      stroke-linecap: round;
    }
    .palm,
    .sleeve {
      stroke: rgba(0, 0, 0, 0.08);
      stroke-width: 0.6;
    }
    .eye {
      fill: #2b2b33;
    }
    .glint {
      fill: #fff;
    }
    .brow {
      fill: none;
      stroke: #5b3a29;
      stroke-width: 1.8;
      stroke-linecap: round;
      transition: transform 0.3s;
    }
    .cheek {
      fill: #f28b8b;
      opacity: 0.45;
    }
    .mouth-smile,
    .mouth-flat {
      fill: none;
      stroke: #8a3b3b;
      stroke-width: 2.2;
      stroke-linecap: round;
    }
    .mouth-flat {
      opacity: 0;
    }
    .mouth-open {
      fill: #8a2f3a;
      stroke: #6d2330;
      stroke-width: 0.8;
    }
    /* Blinking every few seconds */
    .eyes {
      transform-box: fill-box;
      transform-origin: center;
      animation: blink 4.6s infinite;
    }
    @keyframes blink {
      0%,
      93%,
      100% {
        transform: scaleY(1);
      }
      96% {
        transform: scaleY(0.1);
      }
    }
    .lid {
      transform-box: fill-box;
      transform-origin: top;
      transform: scaleY(0);
      transition: transform 0.5s;
    }
    /* Speaking: a little nod; waiting for the user: a glance aside, towards the pointer */
    .figure {
      transform-box: fill-box;
      transform-origin: 50% 90%;
      transition: transform 0.5s;
    }
    :host([speaking]) .figure {
      animation: nod 1.8s ease-in-out infinite;
    }
    @keyframes nod {
      0%,
      100% {
        transform: rotate(0deg) translateY(0);
      }
      30% {
        transform: rotate(-2deg) translateY(-0.6px);
      }
      70% {
        transform: rotate(1.5deg) translateY(0.4px);
      }
    }
    .look {
      transition: transform 0.4s;
    }
    :host([waiting]) .look {
      transform: translate(2px, -1px);
    }

    /* The hand: below the circle, brought up by a gesture */
    .arm {
      transform: translate(80px, 116px);
    }
    :host([gesture='wave']) .arm {
      animation: wave 2.4s ease-in-out both;
    }
    @keyframes wave {
      0% {
        transform: translate(80px, 116px) rotate(0deg);
      }
      14% {
        transform: translate(80px, 70px) rotate(-14deg);
      }
      28% {
        transform: translate(80px, 70px) rotate(16deg);
      }
      42% {
        transform: translate(80px, 70px) rotate(-14deg);
      }
      56% {
        transform: translate(80px, 70px) rotate(16deg);
      }
      70% {
        transform: translate(80px, 70px) rotate(-10deg);
      }
      84% {
        transform: translate(80px, 70px) rotate(4deg);
      }
      100% {
        transform: translate(80px, 116px) rotate(0deg);
      }
    }
    /* "Your turn": the hand up, palm out towards the page, twice; eyebrows raised */
    :host([gesture='turn']) .arm {
      animation: over 2s ease-in-out both;
    }
    @keyframes over {
      0% {
        transform: translate(80px, 116px) rotate(0deg);
      }
      18% {
        transform: translate(80px, 72px) rotate(8deg);
      }
      34% {
        transform: translate(82px, 70px) rotate(30deg);
      }
      50% {
        transform: translate(80px, 72px) rotate(8deg);
      }
      66% {
        transform: translate(82px, 70px) rotate(30deg);
      }
      84% {
        transform: translate(80px, 72px) rotate(10deg);
      }
      100% {
        transform: translate(80px, 116px) rotate(0deg);
      }
    }
    :host([gesture='turn']) .brow {
      transform: translateY(-1.8px);
    }

    /* Bored: heavy eyelids, a flat mouth, the head on one side, looking about */
    :host([gesture='bored']) .lid {
      transform: scaleY(0.5);
    }
    :host([gesture='bored']) .mouth-smile {
      opacity: 0;
    }
    :host([gesture='bored']) .mouth-flat {
      opacity: 1;
    }
    :host([gesture='bored']) .figure {
      transform: rotate(-5deg);
    }
    :host([gesture='bored']) .look {
      animation: about 5s ease-in-out infinite;
    }
    @keyframes about {
      0%,
      100% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(-2.4px, -0.5px);
      }
      55% {
        transform: translate(2.4px, -0.8px);
      }
      75% {
        transform: translate(0, 0.6px);
      }
    }
    /* Yawning: eyes shut, head back (the mouth opened wide by the guide) */
    :host([gesture='yawn']) .lid {
      transform: scaleY(1);
    }
    :host([gesture='yawn']) .figure {
      transform: rotate(4deg) translateY(-1px);
    }

    @media (prefers-reduced-motion: reduce) {
      .eyes,
      :host([speaking]) .figure,
      :host([gesture='bored']) .look {
        animation: none;
      }
      :host([gesture='wave']) .arm,
      :host([gesture='turn']) .arm {
        animation: none;
        transform: translate(80px, 70px);
      }
    }
  `;un([$({type:Boolean,reflect:!0})],mt.prototype,"speaking",2);un([$({type:Boolean,reflect:!0})],mt.prototype,"waiting",2);un([$({reflect:!0})],mt.prototype,"gesture",2);un([gt(".mouth-open")],mt.prototype,"open",2);un([gt(".mouth-smile")],mt.prototype,"smile",2);mt=un([Vt("cr-guide-avatar")],mt);var By=Object.defineProperty,Hy=Object.getOwnPropertyDescriptor,ae=(t,e,n,i)=>{for(var r=i>1?void 0:i?Hy(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&By(e,n,r),r};const D={name:{de:"Mira",en:"Mira"},hello:{de:"Hallo {name}, ich heiße Mira.",en:"Hello {name}, my name is Mira."},helloNoName:{de:"Hallo, ich heiße Mira.",en:"Hello, my name is Mira."},back:{de:"Zurück",en:"Back"},pause:{de:"Pause",en:"Pause"},resume:{de:"Weiter",en:"Resume"},next:{de:"Überspringen",en:"Skip"},close:{de:"Assistentin ausschalten",en:"Switch the assistant off"},left:{de:"noch {time}",en:"{time} left"},step:{de:"Schritt {n} von {m}",en:"Step {n} of {m}"},yourTurn:{de:"Du bist dran",en:"Your turn"},finished:{de:"Fertig!",en:"All done!"},again:{de:"Noch einmal",en:"Once more"},closeDone:{de:"Schließen",en:"Close"},paused:{de:"Angehalten",en:"Paused"},speed:{de:"Sprechtempo",en:"Speaking speed"},slow:{de:"Langsam",en:"Slow"},fast:{de:"Schnell",en:"Fast"},nudgeClick:{de:"Lass dir ruhig Zeit. Wenn du so weit bist, klick einfach auf das, was ich markiert habe.",en:"Take your time. When you’re ready, just click what I’ve outlined."},nudgeType:{de:"Lass dir ruhig Zeit. Schreib einfach etwas in das markierte Feld.",en:"Take your time. Just type something into the outlined field."},still:{de:"Hallo? Bist du noch da? Ich warte hier auf dich.",en:"Hello? Are you still there? I’m waiting here for you."},bye:{de:"Ich lass dich jetzt in Ruhe. Wenn du mich wieder brauchst, klick einfach auf das Fragezeichen. Tschüss!",en:"I’ll leave you to it. Whenever you need me again, just click the question mark. Bye!"}},Wy=6,Ma=.7,jy=450,wn=9,Gy=.14,Oa=matchMedia("(prefers-reduced-motion: reduce)"),Ky=["left","right","top"],qy=16,li=12,Yy=15,Jy=25,Zy=50,Xy=90,Va=2400,Ua=2e3,Mr=2400,Jc="guide-fast";function Qy(){try{return localStorage.getItem(Jc)==="1"}catch{return!1}}const ew="guide-met";function tw(t){try{const e=`${ew}-${t||"guest"}`,n=localStorage.getItem(e)==="1";return localStorage.setItem(e,"1"),n}catch{return!0}}const nw=/^(Hallo|Hi|Hello)\s*,\s*/;function za(t){const e=t.replace(nw,"");return e===t?t:e.charAt(0).toUpperCase()+e.slice(1)}const Fa=["pointermove","pointerdown","keydown","wheel","scroll","input"],iw=2e3;function rw(){var e;let t=document.activeElement;for(;(e=t==null?void 0:t.shadowRoot)!=null&&e.activeElement;)t=t.shadowRoot.activeElement;return t}let Q=class extends _e{constructor(){super(...arguments),this.language="de",this.nickname="",this.person="",this.introduce=!1,this.first=-1,this.index=-1,this.phase="speaking",this.gesture="",this.fast=Qy(),this.spent=0,this.speaker=new cy,this.frame=0,this.last=0,this.turn=0,this.settle=0,this.gestureTimer=0,this.talking=!1,this.kick=0,this.talk=0,this.yawnFrom=0,this.active=performance.now(),this.waitingSince=0,this.idleLevel=0,this.at={x:0,y:0,w:0,h:0,ready:!1},this.typed=0,this.activity=t=>{t.type==="input"&&(this.typed=performance.now()),this.active=performance.now(),this.gesture==="bored"&&this.gestureFor(""),this.idleLevel&&!this.talking&&this.phase==="waiting"&&(this.caption=void 0),this.talking||(this.idleLevel=0)},this.clicked=t=>{var r;const e=this.step;if(!e||e.action!=="click"||this.phase==="paused"||this.phase==="bye")return;const n=(r=e.target)==null?void 0:r.call(e);if(!n||!t.composedPath().includes(n))return;const i=++this.turn;this.speaker.stop(),this.talking=!1,window.clearTimeout(this.settle),this.settle=window.setTimeout(()=>{i===this.turn&&(!e.done||e.done()?this.enter(this.index+1,"forward"):this.wait())},jy)},this.tick=t=>{const e=Math.min(.1,(t-this.last)/1e3);this.last=t,(this.phase==="speaking"||this.phase==="waiting"||this.phase==="holding")&&(this.spent+=e,Math.floor(this.spent*2)!==Math.floor((this.spent-e)*2)&&this.requestUpdate()),this.follow(),this.mouthMoves(e,t);const n=this.step;n!=null&&n.action&&n.done&&(this.phase==="waiting"||this.phase==="speaking"&&n.action==="click")&&this.complete(n)&&this.enter(this.index+1,"forward"),this.idle(t),this.frame=requestAnimationFrame(this.tick)},this.where="left"}connectedCallback(){var t;super.connectedCallback(),this.speaker.onWord=()=>this.kick=1,this.introduce=!tw(this.person),document.addEventListener("click",this.clicked,!0);for(const e of Fa)document.addEventListener(e,this.activity,{capture:!0,passive:!0});this.last=performance.now(),this.frame=requestAnimationFrame(this.tick);for(const e of ne("cr-fold-panel"))(t=e.unfold)==null||t.call(e);queueMicrotask(()=>this.enter(0,"forward"))}disconnectedCallback(){super.disconnectedCallback(),this.speaker.stop(),cancelAnimationFrame(this.frame),window.clearTimeout(this.settle),window.clearTimeout(this.gestureTimer),document.removeEventListener("click",this.clicked,!0);for(const t of Fa)document.removeEventListener(t,this.activity,{capture:!0})}updated(t){t.has("language")&&t.get("language")!==void 0&&this.index>=0&&(this.phase==="speaking"||this.phase==="waiting")&&this.enter(this.index,"replay")}say(t){return Bt(t,this.language)}words(t){if(this.first<0||t!==this.guide.steps[this.first])return t.say;const e=this.nickname.trim(),n=i=>this.introduce?`${Bt(e?D.hello:D.helloNoName,i,{name:e})} `:"";return{de:n("de")+za(t.say.de),en:n("en")+za(t.say.en)}}get rate(){return this.fast?sy:1}seconds(t){return(t.after??0)+rs(this.say(this.words(t)),this.rate)+(t.action?Wy:Ma)}toggleFast(){this.fast=!this.fast;try{localStorage.setItem(Jc,this.fast?"1":"0")}catch{}this.speaker.setRate(this.rate)}get step(){return this.guide.steps[this.index]}included(t){const e=this.guide.steps[t];return!!e&&(!e.when||e.when())}gestureFor(t,e){window.clearTimeout(this.gestureTimer),this.gesture=t,t==="yawn"&&(this.yawnFrom=performance.now()),e&&(this.gestureTimer=window.setTimeout(()=>this.gesture===t&&(this.gesture=""),e))}speak(t,e){const n=this.turn;this.talking=!0,this.speaker.speak(this.say(t),this.language==="de"?"de":"en",this.rate).then(()=>{n===this.turn&&(this.talking=!1,e())})}enter(t,e,n=!1){var s,o;const i=this.guide.steps;if(e==="forward")for(;t<i.length&&(!this.included(t)||i[t].action&&((o=(s=i[t]).done)!=null&&o.call(s)));)t++;else if(e==="back")for(;t>0&&!this.included(t);)t--;if(window.clearTimeout(this.settle),t>=i.length)return this.finish();const r=i[t].after;if(e==="forward"&&r&&!n){const a=++this.turn;this.phase="holding",this.settle=window.setTimeout(()=>a===this.turn&&this.enter(t,"forward",!0),r*1e3);return}++this.turn,this.first<0&&(this.first=t),this.index=t,this.spent=0,this.phase="speaking",this.caption=void 0,this.idleLevel=0,i[t].wave?this.gestureFor("wave",Va):this.gesture==="bored"&&this.gestureFor(""),this.revealTarget(),this.speak(this.words(i[t]),()=>this.said())}said(){const t=this.step;if(t){if(!t.action){const e=this.turn;this.phase="waiting",this.settle=window.setTimeout(()=>e===this.turn&&this.enter(this.index+1,"forward"),Ma*1e3);return}if(this.complete(t))return this.enter(this.index+1,"forward");this.wait()}}wait(){this.phase="waiting",this.waitingSince=performance.now(),this.gestureFor("turn",Ua)}finish(){++this.turn,this.speaker.stop(),this.talking=!1,this.index=this.guide.steps.length,this.phase="done",this.caption=void 0}complete(t){var n,i;if(!((n=t.done)!=null&&n.call(t)))return!1;if(t.action!=="type")return!0;const e=(i=t.target)==null?void 0:i.call(t);return performance.now()-this.typed>=iw||!e||rw()!==e}idle(t){const e=this.step;if(this.phase!=="waiting"||!(e!=null&&e.action)||this.talking)return;const n=(t-Math.max(this.active,this.waitingSince))/1e3;if(n>=Yy&&!this.gesture&&this.gestureFor("bored"),n>=Jy&&this.idleLevel===0)this.idleLevel=1,this.gestureFor("turn",Ua),this.nudge(e.action==="type"?D.nudgeType:D.nudgeClick);else if(n>=Zy&&this.idleLevel===1){this.idleLevel=2,this.gestureFor("yawn",Mr);const i=this.turn;window.setTimeout(()=>i===this.turn&&this.phase==="waiting"&&this.nudge(D.still,"bored"),Mr)}else n>=Xy&&this.idleLevel===2&&(this.idleLevel=3,this.goodbye())}nudge(t,e){this.caption=t,this.speak(t,()=>{e&&this.gestureFor(e)})}goodbye(){++this.turn,window.clearTimeout(this.settle),this.phase="bye",this.caption=D.bye,this.gestureFor("wave",Va),this.speak(D.bye,()=>window.setTimeout(()=>this.close(),600))}revealTarget(){var n,i;const t=(i=(n=this.step)==null?void 0:n.target)==null?void 0:i.call(n);if(!M(t))return;const e=t.getBoundingClientRect();(e.top<60||e.bottom>innerHeight-180)&&t.scrollIntoView({block:"center",behavior:Oa.matches?"auto":"smooth"})}place(t){const e=this.card;if(!e)return;const n=e.offsetWidth,i=e.offsetHeight,r=qy,s={left:{l:r,t:innerHeight-r-i},right:{l:innerWidth-r-n,t:innerHeight-r-i},top:{l:innerWidth-r-n,t:r}},o=l=>{const c=s[l];return c.l<t.right+li&&c.l+n>t.left-li&&c.t<t.bottom+li&&c.t+i>t.top-li};if(!o(this.where))return;const a=Ky.find(l=>!o(l));a&&(this.where=a,e.dataset.place=a)}follow(){var w,b,A;const t=this.pointer,e=this.spot;if(!t||!e)return;const n=this.phase==="done"||this.phase==="bye"?null:(b=(w=this.step)==null?void 0:w.target)==null?void 0:b.call(w);if(!M(n)){t.classList.add("hidden"),e.classList.add("hidden");return}const i=n.getBoundingClientRect();this.place(i);const r={x:i.left-wn,y:i.top-wn,w:i.width+2*wn,h:i.height+2*wn},s=this.at,o=Oa.matches||!s.ready?1:Gy;s.x+=(r.x-s.x)*o,s.y+=(r.y-s.y)*o,s.w+=(r.w-s.w)*o,s.h+=(r.h-s.h)*o,s.ready=!0,e.style.transform=`translate(${s.x}px, ${s.y}px)`,e.style.width=`${s.w}px`,e.style.height=`${s.h}px`;const a=parseFloat(getComputedStyle(n).borderTopLeftRadius)||0;e.style.borderRadius=`${Math.min(a+wn,Math.min(s.w,s.h)/2)}px`;const l=s.x+Math.min(s.w-12,s.w*.62),c=s.y+Math.min(s.h-8,s.h*.65);t.style.transform=`translate(${l}px, ${c}px)`,t.classList.remove("hidden"),e.classList.remove("hidden");const y=this.phase==="waiting"&&!!((A=this.step)!=null&&A.action);t.classList.toggle("act",y),e.classList.toggle("act",y)}mouthMoves(t,e){const n=this.avatar;if(!n)return;if(this.gesture==="yawn"){const a=Math.min(1,(e-this.yawnFrom)/Mr);this.talk=Math.sin(Math.PI*a)**.7,n.mouth(this.talk);return}if(!this.talking||!this.speaker.sounding){this.talk=Math.max(0,this.talk-t*8),n.mouth(this.talk);return}this.kick=Math.max(0,this.kick-t*4);const i=e/1e3,r=.5+.5*Math.sin(i*Math.PI*2*4.2*this.rate),s=.55+.45*Math.sin(i*Math.PI*2*1.1*this.rate+1),o=Math.min(1,r*s*.85+this.kick*.5);this.talk+=(o-this.talk)*Math.min(1,t*18),n.mouth(this.talk)}back(){if(this.phase==="done")return this.enter(this.guide.steps.length-1,"back");let t=this.index-1;for(;t>0&&!this.included(t);)t--;this.enter(Math.max(0,t),"back")}togglePause(){if(this.phase==="paused")return this.enter(this.index,"replay");++this.turn,this.speaker.stop(),this.talking=!1,window.clearTimeout(this.settle),this.phase="paused",this.gestureFor("")}close(){this.speaker.stop(),this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0}))}get left(){const t=this.guide.steps;if(this.phase==="done"||this.phase==="bye")return 0;let e=this.step?Math.max(0,this.seconds(this.step)-this.spent):0;for(let n=this.index+1;n<t.length;n++)this.included(n)&&(e+=this.seconds(t[n]));return e}get total(){return this.guide.steps.reduce((t,e,n)=>t+(this.included(n)?this.seconds(e):0),0)}render(){var y;const e=this.guide.steps.map((w,b)=>b).filter(w=>this.included(w)),n=Math.max(1,e.filter(w=>w<=this.index).length),i=this.left,r=Math.max(1,this.total),s=this.phase==="done",o=s?1:Math.max(0,Math.min(1,1-i/r)),a=`${Math.floor(Math.ceil(i)/60)}:${String(Math.ceil(i)%60).padStart(2,"0")}`,l=this.phase==="waiting"&&!!((y=this.step)!=null&&y.action),c=s?D.finished:this.caption??(this.step&&this.words(this.step));return E`
      <div class="spot hidden" aria-hidden="true"></div>
      <div class="pointer hidden" aria-hidden="true">
        <span class="ripple"></span>
        <svg viewBox="0 0 40 48"><path d="M3 2l32 24-14 2.4L28.5 44l-6.6 2.8-7.4-15.6L3 40z" /></svg>
      </div>
      <section class="card" role="dialog" aria-label=${`${this.say(D.name)}: ${this.say(this.guide.title)}`}>
        <div class="main">
          <cr-guide-avatar ?speaking=${this.talking&&this.gesture!=="yawn"} ?waiting=${l} .gesture=${this.gesture}></cr-guide-avatar>
          <div class="words">
            <div class="who">
              <strong>${this.say(D.name)}</strong>
              <span>${this.say(this.guide.title)}</span>
            </div>
            <p class="say" aria-live="polite">${c?this.say(c):""}</p>
            ${l?E`<span class="turn">${this.say(D.yourTurn)}</span>`:this.phase==="paused"?E`<span class="turn quiet">${this.say(D.paused)}</span>`:I}
          </div>
        </div>
        <div class="keys">
          ${s?E`<button @click=${()=>this.enter(0,"forward")}>↺ ${this.say(D.again)}</button>
                <button class="primary" @click=${this.close}>${this.say(D.closeDone)}</button>`:E`<button class="round" title=${this.say(D.back)} aria-label=${this.say(D.back)} @click=${this.back}>
                  <svg viewBox="0 0 24 24"><path d="M11 6l-6 6 6 6M5 12h14" /></svg>
                </button>
                <button class="round" title=${this.phase==="paused"?this.say(D.resume):this.say(D.pause)} aria-label=${this.phase==="paused"?this.say(D.resume):this.say(D.pause)} @click=${this.togglePause}>
                  ${this.phase==="paused"?E`<svg viewBox="0 0 24 24"><path class="fill" d="M8 5l11 7-11 7z" /></svg>`:E`<svg viewBox="0 0 24 24"><path d="M9 5v14M15 5v14" /></svg>`}
                </button>
                <button class="round" title=${this.say(D.next)} aria-label=${this.say(D.next)} @click=${()=>this.enter(this.index+1,"forward")}>
                  <svg viewBox="0 0 24 24"><path d="M6 5l8 7-8 7M17 5v14" /></svg>
                </button>
                <span class="grow"></span>
                <!-- The voice's speed: a switch, Slow (as the voice speaks) or Fast (FAST_RATE), the one chosen lit -->
                <div class="speed" role="radiogroup" aria-label=${this.say(D.speed)} title=${this.say(D.speed)}>
                  ${[!1,!0].map(w=>E`<button
                      role="radio"
                      aria-checked=${this.fast===w}
                      class=${this.fast===w?"on":""}
                      @click=${()=>this.fast!==w&&this.toggleFast()}
                    >
                      ${this.say(w?D.fast:D.slow)}
                    </button>`)}
                </div>
                <button class="round quiet" title=${this.say(D.close)} aria-label=${this.say(D.close)} @click=${this.close}>
                  <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>`}
        </div>
        <div class="progress">
          <div class="track"><i style="width: ${(o*100).toFixed(1)}%"></i></div>
          <span>${s?Bt(D.step,this.language,{n:e.length,m:e.length}):`${Bt(D.step,this.language,{n,m:e.length})} · ${Bt(D.left,this.language,{time:a})}`}</span>
        </div>
      </section>
    `}};Q.styles=Le`
    :host {
      position: fixed;
      inset: 0;
      z-index: 2147483000;
      pointer-events: none;
      font: 400 15px/1.45 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: var(--text, var(--m-text));
    }
    /* What the step is about, outlined in the theme colour; breathing while it is the user's turn */
    .spot {
      position: fixed;
      left: 0;
      top: 0;
      /* The border inside the size follow() sets, so the gap to what it outlines is the same all round */
      box-sizing: border-box;
      border: 3px solid var(--accent, var(--m-accent));
      border-radius: 12px;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent, var(--m-accent)) 22%, transparent), 0 0 24px color-mix(in srgb, var(--accent, var(--m-accent)) 35%, transparent);
      transition: opacity 0.3s;
    }
    .spot.act {
      animation: breathe 1.1s ease-in-out infinite;
    }
    @keyframes breathe {
      50% {
        box-shadow: 0 0 0 9px color-mix(in srgb, var(--accent, var(--m-accent)) 16%, transparent), 0 0 30px color-mix(in srgb, var(--accent, var(--m-accent)) 45%, transparent);
      }
    }
    /* The big pointer: its tip at the transform's point; blinking and rippling while the user is to act */
    .pointer {
      position: fixed;
      left: 0;
      top: 0;
      width: 44px;
      height: 52px;
      margin: -3px 0 0 -4px;
      transition: opacity 0.3s;
      filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.35));
    }
    .pointer svg {
      width: 100%;
      height: 100%;
    }
    .pointer path {
      fill: #fff;
      stroke: #1f2328;
      stroke-width: 2.6;
      stroke-linejoin: round;
    }
    .pointer.act svg {
      animation: blink 0.9s ease-in-out infinite;
    }
    @keyframes blink {
      50% {
        opacity: 0.35;
        transform: scale(0.88);
      }
    }
    .ripple {
      position: absolute;
      left: -18px;
      top: -18px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 3px solid var(--accent, var(--m-accent));
      opacity: 0;
    }
    .pointer.act .ripple {
      animation: ripple 1.2s ease-out infinite;
    }
    @keyframes ripple {
      0% {
        opacity: 0.9;
        transform: scale(0.3);
      }
      100% {
        opacity: 0;
        transform: scale(1.6);
      }
    }
    .hidden {
      opacity: 0;
    }
    /* The agent's card, bottom left, like the practice timer */
    .card {
      position: fixed;
      left: max(16px, env(safe-area-inset-left));
      bottom: max(16px, env(safe-area-inset-bottom));
      width: min(400px, calc(100vw - 32px));
      display: grid;
      gap: 0.6rem;
      padding: 14px 14px 12px;
      border: 1px solid var(--line, var(--m-line));
      border-radius: 20px;
      background: var(--surface, var(--m-surface));
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
      pointer-events: auto;
      animation: arrive 0.35s ease-out;
    }
    @keyframes arrive {
      from {
        opacity: 0;
        transform: translateY(16px) scale(0.97);
      }
    }
    /* Moved out of the way of what the pointer shows (place()) */
    .card[data-place='right'] {
      left: auto;
      right: max(16px, env(safe-area-inset-right));
    }
    .card[data-place='top'] {
      left: auto;
      right: max(16px, env(safe-area-inset-right));
      bottom: auto;
      top: max(16px, env(safe-area-inset-top));
    }
    .main {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }
    cr-guide-avatar {
      flex: none;
    }
    .words {
      display: grid;
      gap: 0.25rem;
      min-width: 0;
      flex: 1;
    }
    .who {
      display: flex;
      align-items: baseline;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: var(--muted, var(--m-muted));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .who strong {
      color: var(--accent, var(--m-accent));
      font-size: 0.9rem;
    }
    .say {
      margin: 0;
      font-size: 0.98rem;
      line-height: 1.4;
      min-height: 2.8em;
    }
    .turn {
      justify-self: start;
      padding: 0.1rem 0.55rem;
      border-radius: 999px;
      background: var(--accent, var(--m-accent));
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      animation: blink 0.9s ease-in-out infinite;
    }
    .turn.quiet {
      background: var(--line, var(--m-line));
      color: var(--muted, var(--m-muted));
      animation: none;
    }
    .keys {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .grow {
      flex: 1;
    }
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      min-height: 36px;
      padding: 0 0.9rem;
      border: 1px solid var(--line, var(--m-line));
      border-radius: 999px;
      background: var(--surface, var(--m-surface));
      color: var(--text, var(--m-text));
      font: inherit;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover:where(:not(:disabled)) {
      background: var(--bg, var(--m-bg));
    }
    button:focus-visible {
      outline: 2px solid var(--accent, var(--m-accent));
      outline-offset: 2px;
    }
    button.primary {
      background: var(--accent, var(--m-accent));
      border-color: var(--accent, var(--m-accent));
      color: #fff;
    }
    button.round {
      width: 36px;
      padding: 0;
    }
    /* The speed switch: Slow | Fast in one pill, the one chosen in the theme colour */
    .speed {
      display: inline-flex;
      padding: 2px;
      border: 1px solid var(--line, var(--m-line));
      border-radius: 999px;
      background: var(--surface, var(--m-surface));
    }
    .speed button {
      min-height: 30px;
      padding: 0 0.7rem;
      border: none;
      border-radius: 999px;
      background: none;
      color: var(--muted, var(--m-muted));
      font-size: 0.8rem;
    }
    .speed button.on {
      background: var(--accent, var(--m-accent));
      color: #fff;
    }
    .speed button:not(.on):hover:where(:not(:disabled)) {
      background: var(--bg, var(--m-bg));
      color: var(--text, var(--m-text));
    }
    /* The chosen one under the pointer: darker, as a primary button */
    .speed button.on:hover:where(:not(:disabled)) {
      background: var(--accent-hover, var(--m-accent-hover, var(--accent, var(--m-accent))));
    }
    /* A narrow phone: the keys a little smaller, so the row with the switch still fits */
    @media (max-width: 400px) {
      .keys {
        gap: 0.25rem;
      }
      button.round {
        width: 32px;
        min-height: 32px;
      }
      .speed button {
        padding: 0 0.5rem;
        font-size: 0.75rem;
      }
    }
    button.quiet {
      border-color: transparent;
      color: var(--muted, var(--m-muted));
    }
    button svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    button svg .fill {
      fill: currentColor;
      stroke: none;
    }
    .progress {
      display: grid;
      gap: 0.3rem;
      font-size: 0.75rem;
      color: var(--muted, var(--m-muted));
    }
    .track {
      height: 5px;
      border-radius: 999px;
      background: var(--line, var(--m-line));
      overflow: hidden;
    }
    .track i {
      display: block;
      height: 100%;
      border-radius: inherit;
      background: var(--accent, var(--m-accent));
      transition: width 0.5s linear;
    }
    @media (prefers-reduced-motion: reduce) {
      .card,
      .spot.act,
      .pointer.act svg,
      .pointer.act .ripple,
      .turn {
        animation: none;
      }
    }
  `;ae([$({attribute:!1})],Q.prototype,"guide",2);ae([$()],Q.prototype,"language",2);ae([$()],Q.prototype,"nickname",2);ae([$()],Q.prototype,"person",2);ae([B()],Q.prototype,"index",2);ae([B()],Q.prototype,"phase",2);ae([B()],Q.prototype,"gesture",2);ae([B()],Q.prototype,"caption",2);ae([B()],Q.prototype,"fast",2);ae([gt("cr-guide-avatar")],Q.prototype,"avatar",2);ae([gt(".pointer")],Q.prototype,"pointer",2);ae([gt(".spot")],Q.prototype,"spot",2);ae([gt(".card")],Q.prototype,"card",2);Q=ae([Vt("cr-guide")],Q);const sw=Object.freeze(Object.defineProperty({__proto__:null,get GuideAgent(){return Q}},Symbol.toStringTag,{value:"Module"}));
