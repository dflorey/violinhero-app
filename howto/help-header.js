const Th="violinhero",Eh="violin",_h="Violin Hero",Ah="violinhero.crescendu.com",Ih="https://github.com/dflorey/violinhero-app.git";const $h={paths:["M50,39C43,39 38,42.5 38,48C38,51.5 39.5,53.5 37.5,55.8C42.6,55.6 44.4,57.8 44.4,60.8C44.4,63.8 42.6,66 37.5,65.8C36,68.4 34.5,71 34.5,74.2C34.5,80.2 41.5,83.2 50,83.2C58.5,83.2 65.5,80.2 65.5,74.2C65.5,71 64,68.4 62.5,65.8C57.4,66 55.6,63.8 55.6,60.8C55.6,57.8 57.4,55.6 62.5,55.8C60.5,53.5 62,51.5 62,48C62,42.5 57,39 50,39Z","M50,39V23"],circles:[[50,18,4]]},Kr={id:Th,instrument:Eh,name:_h,domain:Ah,siteRepo:Ih,cacheVersion:2,mark:$h},Ht=t=>`https://${t}.crescendu.com/`,tn={violin:{id:"violin",app:{id:"violinhero",name:"Violin Hero",url:Ht("violinhero")},name:{en:"violin",de:"Geige"},label:{en:"Violin",de:"Geige"},strings:[{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69},{name:"E",midi:76}],tuneOrder:[2,1,0,3],open:[55,62,69,76],range:[55,100],hz:[180,2800],programs:[41],partName:/viol|vln|^vn\b|geige/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0,breaths:!1,consonants:!1},bowed:!0,vibrato:!0},viola:{id:"viola",app:{id:"violahero",name:"Viola Hero",url:Ht("violahero")},name:{en:"viola",de:"Bratsche"},label:{en:"Viola",de:"Bratsche"},strings:[{name:"C",midi:48},{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69}],tuneOrder:[3,2,1,0],open:[48,55,62,69],range:[48,91],hz:[120,2e3],programs:[42],partName:/viola|bratsche|^vla\b|alto/i,clef:{sign:"C",line:3},middleLine:60,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0,breaths:!1,consonants:!1},bowed:!0,vibrato:!0},cello:{id:"cello",app:{id:"cellohero",name:"Cello Hero",url:Ht("cellohero")},name:{en:"cello",de:"Cello"},label:{en:"Cello",de:"Cello"},strings:[{name:"C",midi:36},{name:"G",midi:43},{name:"D",midi:50},{name:"A",midi:57}],tuneOrder:[3,2,1,0],open:[36,43,50,57],range:[36,84],hz:[60,1400],programs:[43],partName:/cello|vc\b|vlc/i,clef:{sign:"F",line:4},middleLine:50,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0,breaths:!1,consonants:!1},bowed:!0,vibrato:!0},recorder:{id:"recorder",app:{id:"recorderhero",name:"Recorder Hero",url:Ht("recorderhero")},name:{en:"recorder",de:"Blockflöte"},label:{en:"Recorder",de:"Blockflöte"},strings:[],tuneOrder:[],open:[],range:[72,98],hz:[450,3200],programs:[75,74],partName:/recorder|blockfl|flöte|flute|flauto/i,clef:{sign:"G",line:2,octave:1},middleLine:83,marks:{fingers:[],bows:!1,harmonics:!1,breaths:!0,consonants:!1},bowed:!1,vibrato:!1},voice:{id:"voice",app:{id:"voicehero",name:"Voice Hero",url:Ht("voicehero")},name:{en:"voice",de:"Stimme"},label:{en:"Voice",de:"Gesang"},strings:[],tuneOrder:[],open:[],range:[55,84],hz:[70,1200],programs:[53,54,55],partName:/voice|vocal|voc\b|gesang|stimme|sing|sopran|alto|tenor|bass|canto|chant/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[],bows:!1,harmonics:!1,breaths:!0,consonants:!0},bowed:!1,vibrato:!0},choir:{id:"choir",app:{id:"choirhero",name:"Choir Hero",url:Ht("choirhero")},name:{en:"voice",de:"Stimme"},label:{en:"Choir",de:"Chor"},strings:[],tuneOrder:[],open:[],range:[36,84],hz:[60,1200],programs:[53,54,55],partName:/voice|vocal|voc\b|gesang|stimme|sing|sopran|alt|tenor|bass|canto|cantus|chant|choir|chor|chorus/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[],bows:!1,harmonics:!1,breaths:!0,consonants:!0},bowed:!1,vibrato:!0}},xh=!1,al=xh;let Ph=tn[Kr.instrument]??tn.violin;function Qe(){return Ph}Object.values(tn).map(t=>t.app.id);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,ys=yi.ShadowRoot&&(yi.ShadyCSS===void 0||yi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ws=Symbol(),po=new WeakMap;let ll=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==ws)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ys&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=po.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&po.set(n,e))}return e}toString(){return this.cssText}};const Te=t=>new ll(typeof t=="string"?t:t+"",void 0,ws),Ve=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new ll(n,t,ws)},Nh=(t,e)=>{if(ys)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),r=yi.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},fo=ys?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return Te(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ch,defineProperty:Dh,getOwnPropertyDescriptor:Rh,getOwnPropertyNames:Lh,getOwnPropertySymbols:Mh,getPrototypeOf:Oh}=Object,ut=globalThis,mo=ut.trustedTypes,Vh=mo?mo.emptyScript:"",kr=ut.reactiveElementPolyfillSupport,Cn=(t,e)=>t,Di={toAttribute(t,e){switch(e){case Boolean:t=t?Vh:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},bs=(t,e)=>!Ch(t,e),go={attribute:!0,type:String,converter:Di,reflect:!1,useDefault:!1,hasChanged:bs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ut.litPropertyMetadata??(ut.litPropertyMetadata=new WeakMap);let Gt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=go){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Dh(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=Rh(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);s==null||s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??go}static _$Ei(){if(this.hasOwnProperty(Cn("elementProperties")))return;const e=Oh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Cn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Cn("properties"))){const n=this.properties,i=[...Lh(n),...Mh(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(fo(r))}else e!==void 0&&n.push(fo(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Nh(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Di).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var s,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Di;this._$Em=r;const c=l.fromAttribute(n,a.type);this[r]=c??((o=this._$Ej)==null?void 0:o.get(r))??c,this._$Em=null}}requestUpdate(e,n,i,r=!1,s){var o;if(e!==void 0){const a=this.constructor;if(r===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??bs)(s,n)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:a}=o,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};Gt.elementStyles=[],Gt.shadowRootOptions={mode:"open"},Gt[Cn("elementProperties")]=new Map,Gt[Cn("finalized")]=new Map,kr==null||kr({ReactiveElement:Gt}),(ut.reactiveElementVersions??(ut.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dn=globalThis,yo=t=>t,Ri=Dn.trustedTypes,wo=Ri?Ri.createPolicy("lit-html",{createHTML:t=>t}):void 0,cl="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,hl="?"+at,zh=`<${hl}>`,Mt=document,Vn=()=>Mt.createComment(""),zn=t=>t===null||typeof t!="object"&&typeof t!="function",ks=Array.isArray,Fh=t=>ks(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vr=`[ 	
\f\r]`,kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bo=/-->/g,ko=/>/g,Tt=RegExp(`>|${vr}(?:([^\\s"'>=/]+)(${vr}*=${vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,So=/"/g,dl=/^(?:script|style|textarea|title)$/i,ul=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),v=ul(1),K=ul(2),nn=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),To=new WeakMap,Pt=Mt.createTreeWalker(Mt,129);function pl(t,e){if(!ks(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return wo!==void 0?wo.createHTML(e):e}const Uh=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=kn;for(let a=0;a<n;a++){const l=t[a];let c,y,w=-1,b=0;for(;b<l.length&&(o.lastIndex=b,y=o.exec(l),y!==null);)b=o.lastIndex,o===kn?y[1]==="!--"?o=bo:y[1]!==void 0?o=ko:y[2]!==void 0?(dl.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=Tt):y[3]!==void 0&&(o=Tt):o===Tt?y[0]===">"?(o=r??kn,w=-1):y[1]===void 0?w=-2:(w=o.lastIndex-y[2].length,c=y[1],o=y[3]===void 0?Tt:y[3]==='"'?So:vo):o===So||o===vo?o=Tt:o===bo||o===ko?o=kn:(o=Tt,r=void 0);const I=o===Tt&&t[a+1].startsWith("/>")?" ":"";s+=o===kn?l+zh:w>=0?(i.push(c),l.slice(0,w)+cl+l.slice(w)+at+I):l+at+(w===-2?a:I)}return[pl(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let jr=class fl{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,y]=Uh(e,n);if(this.el=fl.createElement(c,i),Pt.currentNode=this.el.content,n===2||n===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(r=Pt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const w of r.getAttributeNames())if(w.endsWith(cl)){const b=y[o++],I=r.getAttribute(w).split(at),P=/([.?@])?(.*)/.exec(b);l.push({type:1,index:s,name:P[2],strings:I,ctor:P[1]==="."?Hh:P[1]==="?"?Wh:P[1]==="@"?Gh:rr}),r.removeAttribute(w)}else w.startsWith(at)&&(l.push({type:6,index:s}),r.removeAttribute(w));if(dl.test(r.tagName)){const w=r.textContent.split(at),b=w.length-1;if(b>0){r.textContent=Ri?Ri.emptyScript:"";for(let I=0;I<b;I++)r.append(w[I],Vn()),Pt.nextNode(),l.push({type:2,index:++s});r.append(w[b],Vn())}}}else if(r.nodeType===8)if(r.data===hl)l.push({type:2,index:s});else{let w=-1;for(;(w=r.data.indexOf(at,w+1))!==-1;)l.push({type:7,index:s}),w+=at.length-1}s++}}static createElement(e,n){const i=Mt.createElement("template");return i.innerHTML=e,i}};function rn(t,e,n=t,i){var o,a;if(e===nn)return e;let r=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const s=zn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=r:n._$Cl=r),r!==void 0&&(e=rn(t,r._$AS(t,e.values),r,i)),e}class Bh{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??Mt).importNode(n,!0);Pt.currentNode=r;let s=Pt.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new vs(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new Kh(s,this,e)),this._$AV.push(c),l=i[++a]}o!==(l==null?void 0:l.index)&&(s=Pt.nextNode(),o++)}return Pt.currentNode=Mt,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}let vs=class ml{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=rn(this,e,n),zn(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==nn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&zn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=jr.createElement(pl(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(n);else{const o=new Bh(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=To.get(e.strings);return n===void 0&&To.set(e.strings,n=new jr(e)),n}k(e){ks(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new ml(this.O(Vn()),this.O(Vn()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e!==this._$AB;){const r=yo(e).nextSibling;yo(e).remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},rr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=rn(this,e,n,0),o=!zn(e)||e!==this._$AH&&e!==nn,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=rn(this,a[i+l],n,l),c===nn&&(c=this._$AH[l]),o||(o=!zn(c)||c!==this._$AH[l]),c===$?e=$:e!==$&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Hh extends rr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Wh extends rr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}let Gh=class extends rr{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=rn(this,e,n,0)??$)===nn)return;const i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},Kh=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){rn(this,e)}};const Sr=Dn.litHtmlPolyfillSupport;Sr==null||Sr(jr,vs),(Dn.litHtmlVersions??(Dn.litHtmlVersions=[])).push("3.3.3");const jh=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new vs(e.insertBefore(Vn(),s),s,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=globalThis;class ke extends Gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jh(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return nn}}var ol;ke._$litElement$=!0,ke.finalized=!0,(ol=Rt.litElementHydrateSupport)==null||ol.call(Rt,{LitElement:ke});const Tr=Rt.litElementPolyfillSupport;Tr==null||Tr({LitElement:ke});(Rt.litElementVersions??(Rt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qh={attribute:!0,type:String,converter:Di,reflect:!1,hasChanged:bs},Yh=(t=qh,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=n;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function C(t){return(e,n)=>typeof n=="object"?Yh(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(t){return C({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t,e){return(n,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(t))??null};if(e){const{get:o,set:a}=typeof i=="object"?n:r??(()=>{const l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return Eo(n,i,{get(){let l=o.call(this);return l===void 0&&(l=s(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return Eo(n,i,{get(){return s(this)}})}}const Jh=()=>{};/**
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
 */const gl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zh=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,y=s>>2,w=(s&3)<<4|a>>4;let b=(a&15)<<2|c>>6,I=c&63;l||(I=64,o||(b=64)),i.push(n[y],n[w],n[b],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const w=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||w==null)throw new Xh;const b=s<<2|a>>4;if(i.push(b),c!==64){const I=a<<4&240|c>>2;if(i.push(I),w!==64){const P=c<<6&192|w;i.push(P)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qh=function(t){const e=gl(t);return yl.encodeByteArray(e,!0)},Li=function(t){return Qh(t).replace(/\./g,"")},wl=function(t){try{return yl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const td=()=>ed().__FIREBASE_DEFAULTS__,nd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},id=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wl(t[1]);return e&&JSON.parse(e)},Ss=()=>{try{return Jh()||td()||nd()||id()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bl=t=>{var e,n;return(n=(e=Ss())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rd=t=>{const e=bl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},kl=()=>{var t;return(t=Ss())==null?void 0:t.config},vl=t=>{var e;return(e=Ss())==null?void 0:e[`_${t}`]};/**
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
 */class Sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function sd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[Li(JSON.stringify(n)),Li(JSON.stringify(o)),a].join(".")}/**
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
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function ad(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ld(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hd(){const t=re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const pd="FirebaseError";class nt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=pd,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?fd(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nt(r,a,i)}}function fd(t,e){try{let n=0,i="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){i+=t.substring(n);break}const s=t.indexOf("}",r+2);if(s===-1){i+=t.substring(n);break}const o=t.substring(r+2,s),a=e[o];i+=t.substring(n,r)+(a!=null?String(a):`<${o}?>`),n=s+1}return i}catch{return t}}function md(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ot(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(_o(s)&&_o(o)){if(!Ot(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function _o(t){return t!==null&&typeof t=="object"}/**
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
 */function Zn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function An(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function In(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gd(t,e){const n=new yd(t,e);return n.subscribe.bind(n)}class yd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");wd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Er),r.error===void 0&&(r.error=Er),r.complete===void 0&&(r.complete=Er);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Er(){}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Xn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tl(t){return(await fetch(t,{credentials:"include"})).ok}class Vt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const At="[DEFAULT]";/**
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
 */class bd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Sl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vd(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(t){return t===At?void 0:t}function vd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const Td={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Ed=L.INFO,_d={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Ad=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=_d[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ts{constructor(e){this.name=e,this._logLevel=Ed,this._logHandler=Ad,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const Id=(t,e)=>e.some(n=>t instanceof n);let Ao,Io;function $d(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xd(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,qr=new WeakMap,_l=new WeakMap,_r=new WeakMap,Es=new WeakMap;function Pd(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pt(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&El.set(n,t)}).catch(()=>{}),Es.set(e,t),e}function Nd(t){if(qr.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qr.set(t,e)}let Yr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_l.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cd(t){Yr=t(Yr)}function Dd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ar(this),e,...n);return _l.set(i,e.sort?e.sort():[e]),pt(i)}:xd().includes(t)?function(...e){return t.apply(Ar(this),e),pt(El.get(this))}:function(...e){return pt(t.apply(Ar(this),e))}}function Rd(t){return typeof t=="function"?Dd(t):(t instanceof IDBTransaction&&Nd(t),Id(t,$d())?new Proxy(t,Yr):t)}function pt(t){if(t instanceof IDBRequest)return Pd(t);if(_r.has(t))return _r.get(t);const e=Rd(t);return e!==t&&(_r.set(t,e),Es.set(e,t)),e}const Ar=t=>Es.get(t);function Ld(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=pt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(pt(o.result),l.oldVersion,l.newVersion,pt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Md=["get","getKey","getAll","getAllKeys","count"],Od=["put","add","delete","clear"],Ir=new Map;function $o(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ir.get(e))return Ir.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Od.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Md.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ir.set(e,s),s}Cd(t=>({...t,get:(e,n,i)=>$o(e,n)||t.get(e,n,i),has:(e,n)=>!!$o(e,n)||t.has(e,n)}));/**
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
 */class Vd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zd(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function zd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jr="@firebase/app",xo="0.16.5";/**
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
 */const et=new Ts("@firebase/app"),Fd="@firebase/app-compat",Ud="@firebase/analytics-compat",Bd="@firebase/analytics",Hd="@firebase/app-check-compat",Wd="@firebase/app-check",Gd="@firebase/auth",Kd="@firebase/auth-compat",jd="@firebase/crashlytics",qd="@firebase/database",Yd="@firebase/data-connect",Jd="@firebase/database-compat",Zd="@firebase/functions",Xd="@firebase/functions-compat",Qd="@firebase/installations",eu="@firebase/installations-compat",tu="@firebase/messaging",nu="@firebase/messaging-compat",iu="@firebase/performance",ru="@firebase/performance-compat",su="@firebase/remote-config",ou="@firebase/remote-config-compat",au="@firebase/storage",lu="@firebase/storage-compat",cu="@firebase/firestore",hu="@firebase/ai",du="@firebase/firestore-compat",uu="firebase",pu="13.2.0";/**
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
 */const Zr="[DEFAULT]",fu={[Jr]:"fire-core",[Fd]:"fire-core-compat",[Bd]:"fire-analytics",[Ud]:"fire-analytics-compat",[Wd]:"fire-app-check",[Hd]:"fire-app-check-compat",[Gd]:"fire-auth",[Kd]:"fire-auth-compat",[jd]:"fire-cls",[qd]:"fire-rtdb",[Yd]:"fire-data-connect",[Jd]:"fire-rtdb-compat",[Zd]:"fire-fn",[Xd]:"fire-fn-compat",[Qd]:"fire-iid",[eu]:"fire-iid-compat",[tu]:"fire-fcm",[nu]:"fire-fcm-compat",[iu]:"fire-perf",[ru]:"fire-perf-compat",[su]:"fire-rc",[ou]:"fire-rc-compat",[au]:"fire-gcs",[lu]:"fire-gcs-compat",[cu]:"fire-fst",[du]:"fire-fst-compat",[hu]:"fire-vertex","fire-js":"fire-js",[uu]:"fire-js-all"};/**
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
 */const Mi=new Map,mu=new Map,Xr=new Map;function Po(t,e){try{t.container.addComponent(e)}catch(n){et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function sn(t){const e=t.name;if(Xr.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;Xr.set(e,t);for(const n of Mi.values())Po(n,t);for(const n of mu.values())Po(n,t);return!0}function _s(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ae(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new Jn("app","Firebase",gu);/**
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
 */class yu{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
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
 */const pn=pu;function As(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Zr,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw qe.create("bad-app-name",{appName:String(r)});if(n||(n=kl()),!n)throw qe.create("no-options");const s=Mi.get(r);if(s)if(Ot(n,s.options)){if(Ot(i,s.config))return s;throw qe.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(i)})}else throw qe.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Sd(r);for(const l of Xr.values())o.addComponent(l);const a=new yu(n,i,o);return Mi.set(r,a),a}function Al(t=Zr){const e=Mi.get(t);if(!e&&t===Zr&&kl())return As();if(!e)throw qe.create("no-app",{appName:t});return e}function ft(t,e,n){let i=fu[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(o.join(" "));return}sn(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const wu="firebase-heartbeat-database",bu=1,Fn="firebase-heartbeat-store";let $r=null;function Il(){return $r||($r=Ld(wu,bu,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fn)}catch(n){console.warn(n)}}}}).catch(t=>{throw qe.create("idb-open",{originalErrorMessage:t.message})})),$r}async function ku(t){try{const n=(await Il()).transaction(Fn),i=await n.objectStore(Fn).get($l(t));return await n.done,i}catch(e){if(e instanceof nt)et.warn(e.message);else{const n=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(n.message)}}}async function No(t,e){try{const i=(await Il()).transaction(Fn,"readwrite");await i.objectStore(Fn).put(e,$l(t)),await i.done}catch(n){if(n instanceof nt)et.warn(n.message);else{const i=qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});et.warn(i.message)}}}function $l(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vu=1024,Su=30;class Tu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _u(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Su){const o=Au(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){et.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Co(),{heartbeatsToSend:i,unsentEntries:r}=Eu(this._heartbeatsCache.heartbeats),s=Li(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return et.warn(n),""}}}function Co(){return new Date().toISOString().substring(0,10)}function Eu(t,e=vu){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Do(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Do(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class _u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ku(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return No(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return No(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Do(t){return Li(JSON.stringify({version:2,heartbeats:t})).length}function Au(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Iu(t){sn(new Vt("platform-logger",e=>new Vd(e),"PRIVATE")),sn(new Vt("heartbeat",e=>new Tu(e),"PRIVATE")),ft(Jr,xo,t),ft(Jr,xo,"esm2020"),ft("fire-js","")}/**
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
 */Iu("");var $u="firebase",xu="13.2.0";/**
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
 */ft($u,xu,"app");function xl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pu=xl,Pl=new Jn("auth","Firebase",xl());/**
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
 */const Oi=new Ts("@firebase/auth");function wi(t,...e){Oi.logLevel<=L.WARN&&Oi.warn(`Auth (${pn}): ${t}`,...e)}function bi(t,...e){Oi.logLevel<=L.ERROR&&Oi.error(`Auth (${pn}): ${t}`,...e)}/**
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
 */function ve(t,...e){throw Is(t,...e)}function _e(t,...e){return Is(t,...e)}function sr(t,e,n){const i={...Pu(),[e]:n};return new Jn("auth","Firebase",i).create(e,{appName:t.name})}function De(t){return sr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Nu(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ve(t,"argument-error"),sr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Is(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Pl.create(t,...e)}function E(t,e,...n){if(!t)throw Is(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bi(e),new Error(e)}function tt(t,e){t||Ye(e)}/**
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
 */function Qr(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Cu(){return Ro()==="http:"||Ro()==="https:"}function Ro(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Du(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cu()||ld()||"connection"in navigator)?navigator.onLine:!0}function Ru(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=od()||cd()}get(){return Du()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $s(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nl{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Mu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ou=new Qn(3e4,6e4);function ze(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fe(t,e,n,i,r={}){return Cl(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Zn({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return ad()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Xn(t.emulatorConfig.host)&&(c.credentials="include"),Nl.fetch()(await Dl(t,t.config.apiHost,n,a),c)})}async function Cl(t,e,n){t._canInitEmulator=!1;const i={...Lu,...e};try{const r=new zu(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ai(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ai(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ai(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ai(t,"user-disabled",o);const y=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sr(t,y,c);ve(t,y)}}catch(r){if(r instanceof nt)throw r;ve(t,"network-request-failed",{message:String(r)})}}async function fn(t,e,n,i,r={}){const s=await Fe(t,e,n,i,r);return"mfaPendingCredential"in s&&ve(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Dl(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?$s(t.config,r):`${t.config.apiScheme}://${r}`;return Mu.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Vu(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_e(this.auth,"network-request-failed")),Ou.get())})}}function ai(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_e(t,e,i);return r.customData._tokenResponse=n,r}function Lo(t){return t!==void 0&&t.enterprise!==void 0}class Fu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Vu(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uu(t,e){return Fe(t,"GET","/v2/recaptchaConfig",ze(t,e))}/**
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
 */async function Bu(t,e){return Fe(t,"POST","/v1/accounts:delete",e)}async function Vi(t,e){return Fe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hu(t,e=!1){const n=j(t),i=await n.getIdToken(e),r=xs(i);E(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rn(xr(r.auth_time)),issuedAtTime:Rn(xr(r.iat)),expirationTime:Rn(xr(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xr(t){return Number(t)*1e3}function xs(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const r=wl(n);return r?JSON.parse(r):(bi("Failed to decode base64 JWT payload"),null)}catch(r){return bi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Mo(t){const e=xs(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function on(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw Rl(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Rl(t){return t instanceof nt?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
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
 */class Wu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class es{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rn(this.lastLoginAt),this.creationTime=Rn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Un(t){var w;const e=t.auth,n=await t.getIdToken(),i=await on(t,Vi(e,{idToken:n}));E(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=(w=r.providerUserInfo)!=null&&w.length?Ll(r.providerUserInfo):[],o=Ku(t.providerData,s),a=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,y={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new es(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,y)}async function Gu(t){const e=j(t);await Un(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ku(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ll(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function ju(t,e){const n=await Cl(t,{},async()=>{const i=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await Dl(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Xn(t.emulatorConfig.host)&&(l.credentials="include"),Nl.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qu(t,e){return Fe(t,"POST","/v2/accounts:revokeToken",ze(t,e))}/**
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
 */class Zt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){E(e.length!==0,"internal-error");const n=Mo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(E(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await ju(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Zt;return i&&(E(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zt,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function rt(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ee{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new Wu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new es(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await on(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hu(this,e)}reload(){return Gu(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ee({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Un(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ae(this.auth.app))return Promise.reject(De(this.auth));const e=await this.getIdToken();return await on(this,Bu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:w,emailVerified:b,isAnonymous:I,providerData:P,stsTokenManager:U}=n;E(w&&U,e,"internal-error");const V=Zt.fromJSON(this.name,U);E(typeof w=="string",e,"internal-error"),rt(i,e.name),rt(r,e.name),E(typeof b=="boolean",e,"internal-error"),E(typeof I=="boolean",e,"internal-error"),rt(s,e.name),rt(o,e.name),rt(a,e.name),rt(l,e.name),rt(c,e.name),rt(y,e.name);const se=new Ee({uid:w,auth:e,email:r,emailVerified:b,displayName:i,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:V,createdAt:c,lastLoginAt:y});return P&&Array.isArray(P)&&(se.providerData=P.map(me=>({...me}))),l&&(se._redirectEventId=l),se}static async _fromIdTokenResponse(e,n,i=!1){const r=new Zt;r.updateFromServerResponse(n);const s=new Ee({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Un(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];E(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ll(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Zt;a.updateFromIdToken(i);const l=new Ee({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new es(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Oo=new Map;function Je(t){tt(t instanceof Function,"Expected a class definition");let e=Oo.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oo.set(t,e),e)}/**
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
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ml.type="NONE";const ts=Ml;/**
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
 */function ki(t,e,n){return`firebase:${t}:${e}:${n}`}class Lt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=ki(this.userKey,r.apiKey,s),this.fullPersistenceKey=ki("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vi(this.auth,{idToken:e}).catch(()=>{});return n?Ee._fromGetAccountInfoResponse(this.auth,n,e):null}return Ee._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new Lt(Je(ts),e,i);const r=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let s=r[0]||Je(ts);const o=ki(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const y=await c._get(o);if(y){let w;if(typeof y=="string"){const b=await Vi(e,{idToken:y}).catch(()=>{});if(!b)break;w=await Ee._fromGetAccountInfoResponse(e,b,y)}else w=Ee._fromJSON(e,y);c!==s&&(a=w),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lt(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Lt(s,e,i))}}/**
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
 */function Vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ol(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bl(e))return"Blackberry";if(Hl(e))return"Webos";if(Vl(e))return"Safari";if((e.includes("chrome/")||zl(e))&&!e.includes("edge/"))return"Chrome";if(Ul(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ol(t=re()){return/firefox\//i.test(t)}function Vl(t=re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zl(t=re()){return/crios\//i.test(t)}function Fl(t=re()){return/iemobile/i.test(t)}function Ul(t=re()){return/android/i.test(t)}function Bl(t=re()){return/blackberry/i.test(t)}function Hl(t=re()){return/webos/i.test(t)}function Ps(t=re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yu(t=re()){var e;return Ps(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Ju(){return hd()&&document.documentMode===10}function Wl(t=re()){return Ps(t)||Ul(t)||Hl(t)||Bl(t)||/windows phone/i.test(t)||Fl(t)}/**
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
 */function Gl(t,e=[]){let n;switch(t){case"Browser":n=Vo(re());break;case"Worker":n=`${Vo(re())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pn}/${i}`}/**
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
 */class Zu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Xu(t,e={}){return Fe(t,"GET","/v2/passwordPolicy",ze(t,e))}/**
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
 */const Qu=6;class ep{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Qu,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class tp{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new Zu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted){try{this.persistenceManager=await Lt.create(this,e)}catch(o){wi(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Lt.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){wi(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vi(this,{idToken:e}),i=await Ee._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Un(e)}catch(n){if(Rl(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ru()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ae(this.app))return Promise.reject(De(this));const n=e?j(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ae(this.app)?Promise.reject(De(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ae(this.app)?Promise.reject(De(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xu(this),n=new ep(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await qu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await Lt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(E(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(i)i(l);else throw l}),typeof n=="function"){const l=e.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),r=sr(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw r.customData={originalError:n},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(ae(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wi(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ue(t){return j(t)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=gd(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let or={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function np(t){or=t}function Kl(t){return or.loadJS(t)}function ip(){return or.recaptchaEnterpriseScript}function rp(){return or.gapiScript}function sp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class op{constructor(){this.enterprise=new ap}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ap{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const lp="recaptcha-enterprise",jl="NO_RECAPTCHA",Fo="onFirebaseAuthREInstanceReady";class lt{constructor(e){this.type=lp,this.auth=Ue(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Uu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;Lo(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(jl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new op().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(async a=>{if(!n&&Lo(window.grecaptcha)&&lt.scriptInjectionDeferred)await lt.scriptInjectionDeferred.promise,r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ip();l.length!==0&&(l+=a+`&onload=${Fo}`),lt.scriptInjectionDeferred=new Sl,window[Fo]=()=>{var c;(c=lt.scriptInjectionDeferred)==null||c.resolve()},Kl(l).then(()=>{var c;return(c=lt.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}lt.scriptInjectionDeferred=null;async function vn(t,e,n,i=!1,r=!1){const s=new lt(t);let o;if(r)o=jl;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function zi(t,e,n,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await vn(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await vn(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await vn(t,e,n);return i(t,a).catch(async l=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const y=await vn(t,e,n,!1,!0);return i(t,y)}return Promise.reject(l)})}else{const a=await vn(t,e,n,!1,!0);return i(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function ql(t,e){const n=_s(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ot(s,e??{}))return r;ve(r,"already-initialized")}return n.initialize({options:e})}function cp(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function hp(t,e,n){const i=Ue(t);E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Yl(e),{host:o,port:a}=dp(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},y=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){E(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),E(Ot(c,i.config.emulator)&&Ot(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Xn(o)?Tl(`${s}//${o}${l}`):r||up()}function Yl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dp(t){const e=Yl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Uo(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Uo(o)}}}function Uo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function up(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ns{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function pp(t,e){return Fe(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fp(t,e){return fn(t,"POST","/v1/accounts:signInWithPassword",ze(t,e))}async function Jl(t,e){return Fe(t,"POST","/v1/accounts:sendOobCode",ze(t,e))}async function mp(t,e){return Jl(t,e)}async function gp(t,e){return Jl(t,e)}/**
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
 */async function yp(t,e){return fn(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}async function wp(t,e){return fn(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}/**
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
 */class Bn extends Ns{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Bn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,n,"signInWithPassword",fp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return yp(e,{email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zi(e,i,"signUpPassword",pp,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return wp(e,{idToken:n,email:this._email,oobCode:this._password});default:ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xt(t,e){return fn(t,"POST","/v1/accounts:signInWithIdp",ze(t,e))}/**
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
 */const bp="http://localhost";class zt extends Ns{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new zt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Xt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:bp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
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
 */function kp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vp(t){const e=An(In(t)).link,n=e?An(In(e)).deep_link_id:null,i=An(In(t)).deep_link_id;return(i?An(In(i)).link:null)||i||n||e||t}class Cs{constructor(e){const n=An(In(e)),i=n.apiKey??null,r=n.oobCode??null,s=kp(n.mode??null);E(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vp(e);try{return new Cs(n)}catch{return null}}}/**
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
 */class mn{constructor(){this.providerId=mn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Cs.parseLink(n);return E(i,"argument-error"),Bn._fromEmailAndCode(e,i.code,i.tenantId)}}mn.PROVIDER_ID="password";mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ds{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ei extends Ds{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xe extends ei{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
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
 */class Pe extends ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pe.credential(n,i)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
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
 */class ct extends ei{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
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
 */class ht extends ei{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ht.credential(n,i)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */async function Sp(t,e){return fn(t,"POST","/v1/accounts:signUp",ze(t,e))}/**
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
 */class mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ee._fromIdTokenResponse(e,i,r),o=Bo(i);return new mt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Bo(i);return new mt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Bo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fi extends nt{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Fi(e,n,i,r)}}function Zl(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(t,s,e,i):s})}/**
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
 */function Tp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function Xl(t,e,n=!1){const i=await on(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mt._forOperation(t,"link",i)}async function Ep(t,e,n){await Un(e);const i=Tp(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";E(i.has(n)===t,e.auth,r)}/**
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
 */async function _p(t,e,n=!1){const{auth:i}=t;if(ae(i.app))return Promise.reject(De(i));const r="reauthenticate";try{const s=await on(t,Zl(i,r,e,t),n);E(s.idToken,i,"internal-error");const o=xs(s.idToken);E(o,i,"internal-error");const{sub:a}=o;return E(t.uid===a,i,"user-mismatch"),mt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ve(i,"user-mismatch"),s}}/**
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
 */async function Ql(t,e,n=!1){if(ae(t.app))return Promise.reject(De(t));const i="signIn",r=await Zl(t,i,e),s=await mt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Ap(t,e){return Ql(Ue(t),e)}async function Ip(t,e){const n=j(t);return await Ep(!1,n,e.providerId),Xl(n,e)}/**
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
 */async function $p(t,e){return fn(t,"POST","/v1/accounts:signInWithCustomToken",ze(t,e))}/**
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
 */async function ec(t,e){if(ae(t.app))return Promise.reject(De(t));const n=Ue(t),i=await $p(n,{token:e,returnSecureToken:!0}),r=await mt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */function tc(t,e,n){var i;E(((i=n.url)==null?void 0:i.length)>0,t,"invalid-continue-uri"),E(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),E(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function nc(t){const e=Ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xp(t,e,n){const i=Ue(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&tc(i,r,n),await zi(i,r,"getOobCode",gp,"EMAIL_PASSWORD_PROVIDER")}async function Pp(t,e,n){if(ae(t.app))return Promise.reject(De(t));const i=Ue(t),o=await zi(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sp,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&nc(t),l}),a=await mt._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function ic(t,e,n){return ae(t.app)?Promise.reject(De(t)):Ap(j(t),mn.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&nc(t),i})}async function rc(t,e){const n=j(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&tc(n.auth,r,e);const{email:s}=await mp(n.auth,r);s!==t.email&&await t.reload()}/**
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
 */async function Np(t,e){return Fe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Cp(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const r=j(t),o={idToken:await r.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await on(r,Np(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Dp(t,e,n,i){return j(t).onIdTokenChanged(e,n,i)}function Rp(t,e,n){return j(t).beforeAuthStateChanged(e,n)}function an(t,e,n,i){return j(t).onAuthStateChanged(e,n,i)}function sc(t){return j(t).signOut()}const Ui="__sak";/**
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
 */class oc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Lp=1e3,Mp=10;class ac extends oc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Ju()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Mp):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ac.type="LOCAL";const Op=ac;/**
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
 */class lc extends oc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lc.type="SESSION";const cc=lc;/**
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
 */function Vp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new ar(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Vp(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
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
 */function Rs(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Rs("",20);r.port1.start();const y=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(w){const b=w;if(b.data.eventId===c)switch(b.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(b.data.response);break;default:clearTimeout(y),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Re(){return window}function Fp(t){Re().location.href=t}/**
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
 */function hc(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function Up(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Hp(){return hc()?self:null}/**
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
 */const dc="firebaseLocalStorageDb",Wp=1,Bi="firebaseLocalStorage",uc="fbase_key";class ti{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lr(t,e){return t.transaction([Bi],e?"readwrite":"readonly").objectStore(Bi)}function Gp(){const t=indexedDB.deleteDatabase(dc);return new ti(t).toPromise()}function pc(){const t=indexedDB.open(dc,Wp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Bi,{keyPath:uc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Bi)?e(i):(i.close(),await Gp(),e(await pc()))})})}async function Ho(t,e,n){const i=lr(t,!0).put({[uc]:e,value:n});return new ti(i).toPromise()}async function Kp(t,e){const n=lr(t,!1).get(e),i=await new ti(n).toPromise();return i===void 0?null:i.value}function Wo(t,e){const n=lr(t,!0).delete(e);return new ti(n).toPromise()}const jp=800,qp=3;class fc{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=pc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>qp)throw i;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return hc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(Hp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Up(),!this.activeServiceWorker)return;this.sender=new zp(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ho(e,Ui,"1"),await Wo(e,Ui)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ho(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Kp(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const s=lr(r,!1).getAll();return new ti(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}catch(e){return this.isClosing||wi(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e).catch(()=>{})),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}fc.type="LOCAL";const Yp=fc;new Qn(3e4,6e4);/**
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
 */function mc(t,e){return e?Je(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ls extends Ns{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jp(t){return Ql(t.auth,new Ls(t),t.bypassAuthState)}function Zp(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),_p(n,new Ls(t),t.bypassAuthState)}async function Xp(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),Xl(n,new Ls(t),t.bypassAuthState)}/**
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
 */class gc{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(i){this.pendingPromise&&this.reject(i)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jp;case"linkViaPopup":case"linkViaRedirect":return Xp;case"reauthViaPopup":case"reauthViaRedirect":return Zp;default:ve(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qp=new Qn(2e3,1e4);async function Ms(t,e,n){if(ae(t.app))return Promise.reject(_e(t,"operation-not-supported-in-this-environment"));const i=Ue(t);Nu(t,e,Ds);const r=mc(i,n);return new Nt(i,"signInViaPopup",e,r).executeNotNull()}class Nt extends gc{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qp.get())};e()}}Nt.currentPopupAction=null;/**
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
 */const ef="pendingRedirect",vi=new Map;class tf extends gc{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=vi.get(this.auth._key());if(!e){try{const i=await nf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}vi.set(this.auth._key(),e)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nf(t,e){const n=of(e),i=sf(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function rf(t,e){vi.set(t._key(),e)}function sf(t){return Je(t._redirectPersistence)}function of(t){return ki(ef,t.config.apiKey,t.name)}async function af(t,e,n=!1){if(ae(t.app))return Promise.reject(De(t));const i=Ue(t),r=mc(i,e),o=await new tf(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const lf=10*60*1e3;class cf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!yc(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(_e(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Go(e))}saveEventToCache(e){this.cachedEventUids.add(Go(e)),this.lastProcessedEventTime=Date.now()}}function Go(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yc(t);default:return!1}}/**
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
 */async function df(t,e={}){return Fe(t,"GET","/v1/projects",e)}/**
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
 */const uf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pf=/^https?/;async function ff(t){if(t.config.emulator)return;const{authorizedDomains:e}=await df(t);for(const n of e)try{if(mf(n))return}catch{}ve(t,"unauthorized-domain")}function mf(t){const e=Qr(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!pf.test(n))return!1;if(uf.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const gf=new Qn(3e4,6e4);function Ko(){const t=Re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yf(t){return new Promise((e,n)=>{var r,s,o;function i(){Ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ko(),n(_e(t,"network-request-failed"))},timeout:gf.get()})}if((s=(r=Re().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Re().gapi)!=null&&o.load)i();else{const a=sp("iframefcb");return Re()[a]=()=>{gapi.load?i():n(_e(t,"network-request-failed"))},Kl(`${rp()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Si=null,e})}let Si=null;function wf(t){return Si=Si||yf(t),Si}/**
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
 */const bf=new Qn(5e3,15e3),kf="__/auth/iframe",vf="emulator/auth/iframe",Sf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ef(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$s(e,vf):`https://${t.config.authDomain}/${kf}`,i={apiKey:e.apiKey,appName:t.name,v:pn},r=Tf.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Zn(i).slice(1)}`}async function _f(t){const e=await wf(t),n=Re().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:Ef(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sf,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=_e(t,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},bf.get());function l(){Re().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Af={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},If=500,$f=600,xf="_blank",Pf="http://localhost";class jo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nf(t,e,n,i=If,r=$f){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...Af,width:i.toString(),height:r.toString(),top:s,left:o},c=re().toLowerCase();n&&(a=zl(c)?xf:n),Ol(c)&&(e=e||Pf,l.scrollbars="yes");const y=Object.entries(l).reduce((b,[I,P])=>`${b}${I}=${P},`,"");if(Yu(c)&&a!=="_self")return Cf(e||"",a),new jo(null);const w=window.open(e||"",a,y);E(w,t,"popup-blocked");try{w.focus()}catch{}return new jo(w)}function Cf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Df="__/auth/handler",Rf="emulator/auth/handler",Lf=encodeURIComponent("fac");async function qo(t,e,n,i,r,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:pn,eventId:r};if(e instanceof Ds){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",md(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,w]of Object.entries(s||{}))o[y]=w}if(e instanceof ei){const y=e.getScopes().filter(w=>w!=="");y.length>0&&(o.scopes=y.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const y of Object.keys(a))a[y]===void 0&&delete a[y];const l=await t._getAppCheckToken(),c=l?`#${Lf}=${encodeURIComponent(l)}`:"";return`${Mf(t)}?${Zn(a).slice(1)}${c}`}function Mf({config:t}){return t.emulator?$s(t,Rf):`https://${t.authDomain}/${Df}`}/**
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
 */const Pr="webStorageSupport";class Of{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cc,this._completeRedirectFn=af,this._overrideRedirectResult=rf}async _openPopup(e,n,i,r){var o;tt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await qo(e,n,i,Qr(),r);return Nf(e,s,Rs())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await qo(e,n,i,Qr(),r);return Fp(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(tt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await _f(e),i=new cf(e);return n.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pr,{type:Pr},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[Pr];s!==void 0&&n(!!s),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ff(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wl()||Vl()||Ps()}}const Vf=Of;var Yo="@firebase/auth",Jo="1.13.9";/**
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
 */class zf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ff(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Uf(t){sn(new Vt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gl(t)},c=new tp(i,r,s,l);return cp(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),sn(new Vt("auth-internal",e=>{const n=Ue(e.getProvider("auth").getImmediate());return(i=>new zf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Yo,Jo,Ff(t)),ft(Yo,Jo,"esm2020")}/**
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
 */const Bf=5*60,Hf=vl("authIdTokenMaxAge")||Bf;let Zo=null;const Wf=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Hf)return;const r=n==null?void 0:n.token;Zo!==r&&(Zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wc(t=Al()){const e=_s(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ql(t,{popupRedirectResolver:Vf,persistence:[Yp,Op,cc]}),i=vl("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=Wf(s.toString());Rp(n,o,()=>o(n.currentUser)),Dp(n,a=>o(a))}}const r=bl("auth");return r&&hp(n,`http://${r}`),n}function Gf(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}np({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=_e("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Gf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Uf("Browser");var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(p,h){function u(){}u.prototype=h.prototype,p.F=h.prototype,p.prototype=new u,p.prototype.constructor=p,p.D=function(m,f,g){for(var d=Array(arguments.length-2),St=2;St<arguments.length;St++)d[St-2]=arguments[St];return h.prototype[f].apply(m,d)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(p,h,u){u||(u=0);const m=Array(16);if(typeof h=="string")for(var f=0;f<16;++f)m[f]=h.charCodeAt(u++)|h.charCodeAt(u++)<<8|h.charCodeAt(u++)<<16|h.charCodeAt(u++)<<24;else for(f=0;f<16;++f)m[f]=h[u++]|h[u++]<<8|h[u++]<<16|h[u++]<<24;h=p.g[0],u=p.g[1],f=p.g[2];let g=p.g[3],d;d=h+(g^u&(f^g))+m[0]+3614090360&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[1]+3905402710&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[2]+606105819&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[3]+3250441966&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[4]+4118548399&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[5]+1200080426&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[6]+2821735955&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[7]+4249261313&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[8]+1770035416&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[9]+2336552879&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[10]+4294925233&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[11]+2304563134&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(g^u&(f^g))+m[12]+1804603682&4294967295,h=u+(d<<7&4294967295|d>>>25),d=g+(f^h&(u^f))+m[13]+4254626195&4294967295,g=h+(d<<12&4294967295|d>>>20),d=f+(u^g&(h^u))+m[14]+2792965006&4294967295,f=g+(d<<17&4294967295|d>>>15),d=u+(h^f&(g^h))+m[15]+1236535329&4294967295,u=f+(d<<22&4294967295|d>>>10),d=h+(f^g&(u^f))+m[1]+4129170786&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[6]+3225465664&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[11]+643717713&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[0]+3921069994&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[5]+3593408605&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[10]+38016083&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[15]+3634488961&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[4]+3889429448&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[9]+568446438&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[14]+3275163606&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[3]+4107603335&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[8]+1163531501&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(f^g&(u^f))+m[13]+2850285829&4294967295,h=u+(d<<5&4294967295|d>>>27),d=g+(u^f&(h^u))+m[2]+4243563512&4294967295,g=h+(d<<9&4294967295|d>>>23),d=f+(h^u&(g^h))+m[7]+1735328473&4294967295,f=g+(d<<14&4294967295|d>>>18),d=u+(g^h&(f^g))+m[12]+2368359562&4294967295,u=f+(d<<20&4294967295|d>>>12),d=h+(u^f^g)+m[5]+4294588738&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[8]+2272392833&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[11]+1839030562&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[14]+4259657740&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[1]+2763975236&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[4]+1272893353&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[7]+4139469664&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[10]+3200236656&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[13]+681279174&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[0]+3936430074&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[3]+3572445317&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[6]+76029189&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(u^f^g)+m[9]+3654602809&4294967295,h=u+(d<<4&4294967295|d>>>28),d=g+(h^u^f)+m[12]+3873151461&4294967295,g=h+(d<<11&4294967295|d>>>21),d=f+(g^h^u)+m[15]+530742520&4294967295,f=g+(d<<16&4294967295|d>>>16),d=u+(f^g^h)+m[2]+3299628645&4294967295,u=f+(d<<23&4294967295|d>>>9),d=h+(f^(u|~g))+m[0]+4096336452&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[7]+1126891415&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[14]+2878612391&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[5]+4237533241&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[12]+1700485571&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[3]+2399980690&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[10]+4293915773&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[1]+2240044497&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[8]+1873313359&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[15]+4264355552&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[6]+2734768916&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[13]+1309151649&4294967295,u=f+(d<<21&4294967295|d>>>11),d=h+(f^(u|~g))+m[4]+4149444226&4294967295,h=u+(d<<6&4294967295|d>>>26),d=g+(u^(h|~f))+m[11]+3174756917&4294967295,g=h+(d<<10&4294967295|d>>>22),d=f+(h^(g|~u))+m[2]+718787259&4294967295,f=g+(d<<15&4294967295|d>>>17),d=u+(g^(f|~h))+m[9]+3951481745&4294967295,p.g[0]=p.g[0]+h&4294967295,p.g[1]=p.g[1]+(f+(d<<21&4294967295|d>>>11))&4294967295,p.g[2]=p.g[2]+f&4294967295,p.g[3]=p.g[3]+g&4294967295}i.prototype.v=function(p,h){h===void 0&&(h=p.length);const u=h-this.blockSize,m=this.C;let f=this.h,g=0;for(;g<h;){if(f==0)for(;g<=u;)r(this,p,g),g+=this.blockSize;if(typeof p=="string"){for(;g<h;)if(m[f++]=p.charCodeAt(g++),f==this.blockSize){r(this,m),f=0;break}}else for(;g<h;)if(m[f++]=p[g++],f==this.blockSize){r(this,m),f=0;break}}this.h=f,this.o+=h},i.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var h=1;h<p.length-8;++h)p[h]=0;h=this.o*8;for(var u=p.length-8;u<p.length;++u)p[u]=h&255,h/=256;for(this.v(p),p=Array(16),h=0,u=0;u<4;++u)for(let m=0;m<32;m+=8)p[h++]=this.g[u]>>>m&255;return p};function s(p,h){var u=a;return Object.prototype.hasOwnProperty.call(u,p)?u[p]:u[p]=h(p)}function o(p,h){this.h=h;const u=[];let m=!0;for(let f=p.length-1;f>=0;f--){const g=p[f]|0;m&&g==h||(u[f]=g,m=!1)}this.g=u}var a={};function l(p){return-128<=p&&p<128?s(p,function(h){return new o([h|0],h<0?-1:0)}):new o([p|0],p<0?-1:0)}function c(p){if(isNaN(p)||!isFinite(p))return w;if(p<0)return V(c(-p));const h=[];let u=1;for(let m=0;p>=u;m++)h[m]=p/u|0,u*=4294967296;return new o(h,0)}function y(p,h){if(p.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(p.charAt(0)=="-")return V(y(p.substring(1),h));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const u=c(Math.pow(h,8));let m=w;for(let g=0;g<p.length;g+=8){var f=Math.min(8,p.length-g);const d=parseInt(p.substring(g,g+f),h);f<8?(f=c(Math.pow(h,f)),m=m.j(f).add(c(d))):(m=m.j(u),m=m.add(c(d)))}return m}var w=l(0),b=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(U(this))return-V(this).m();let p=0,h=1;for(let u=0;u<this.g.length;u++){const m=this.i(u);p+=(m>=0?m:4294967296+m)*h,h*=4294967296}return p},t.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(P(this))return"0";if(U(this))return"-"+V(this).toString(p);const h=c(Math.pow(p,6));var u=this;let m="";for(;;){const f=vt(u,h).g;u=se(u,f.j(h));let g=((u.g.length>0?u.g[0]:u.h)>>>0).toString(p);if(u=f,P(u))return g+m;for(;g.length<6;)g="0"+g;m=g+m}},t.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function P(p){if(p.h!=0)return!1;for(let h=0;h<p.g.length;h++)if(p.g[h]!=0)return!1;return!0}function U(p){return p.h==-1}t.l=function(p){return p=se(this,p),U(p)?-1:P(p)?0:1};function V(p){const h=p.g.length,u=[];for(let m=0;m<h;m++)u[m]=~p.g[m];return new o(u,~p.h).add(b)}t.abs=function(){return U(this)?V(this):this},t.add=function(p){const h=Math.max(this.g.length,p.g.length),u=[];let m=0;for(let f=0;f<=h;f++){let g=m+(this.i(f)&65535)+(p.i(f)&65535),d=(g>>>16)+(this.i(f)>>>16)+(p.i(f)>>>16);m=d>>>16,g&=65535,d&=65535,u[f]=d<<16|g}return new o(u,u[u.length-1]&-2147483648?-1:0)};function se(p,h){return p.add(V(h))}t.j=function(p){if(P(this)||P(p))return w;if(U(this))return U(p)?V(this).j(V(p)):V(V(this).j(p));if(U(p))return V(this.j(V(p)));if(this.l(I)<0&&p.l(I)<0)return c(this.m()*p.m());const h=this.g.length+p.g.length,u=[];for(var m=0;m<2*h;m++)u[m]=0;for(m=0;m<this.g.length;m++)for(let f=0;f<p.g.length;f++){const g=this.i(m)>>>16,d=this.i(m)&65535,St=p.i(f)>>>16,uo=p.i(f)&65535;u[2*m+2*f]+=d*uo,me(u,2*m+2*f),u[2*m+2*f+1]+=g*uo,me(u,2*m+2*f+1),u[2*m+2*f+1]+=d*St,me(u,2*m+2*f+1),u[2*m+2*f+2]+=g*St,me(u,2*m+2*f+2)}for(p=0;p<h;p++)u[p]=u[2*p+1]<<16|u[2*p];for(p=h;p<2*h;p++)u[p]=0;return new o(u,0)};function me(p,h){for(;(p[h]&65535)!=p[h];)p[h+1]+=p[h]>>>16,p[h]&=65535,h++}function it(p,h){this.g=p,this.h=h}function vt(p,h){if(P(h))throw Error("division by zero");if(P(p))return new it(w,w);if(U(p))return h=vt(V(p),h),new it(V(h.g),V(h.h));if(U(h))return h=vt(p,V(h)),new it(V(h.g),h.h);if(p.g.length>30){if(U(p)||U(h))throw Error("slowDivide_ only works with positive integers.");for(var u=b,m=h;m.l(p)<=0;)u=bn(u),m=bn(m);var f=Be(u,1),g=Be(m,1);for(m=Be(m,2),u=Be(u,2);!P(m);){var d=g.add(m);d.l(p)<=0&&(f=f.add(u),g=d),m=Be(m,1),u=Be(u,1)}return h=se(p,f.j(h)),new it(f,h)}for(f=w;p.l(h)>=0;){for(u=Math.max(1,Math.floor(p.m()/h.m())),m=Math.ceil(Math.log(u)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),g=c(u),d=g.j(h);U(d)||d.l(p)>0;)u-=m,g=c(u),d=g.j(h);P(g)&&(g=b),f=f.add(g),p=se(p,d)}return new it(f,p)}t.B=function(p){return vt(this,p).h},t.and=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)&p.i(m);return new o(u,this.h&p.h)},t.or=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)|p.i(m);return new o(u,this.h|p.h)},t.xor=function(p){const h=Math.max(this.g.length,p.g.length),u=[];for(let m=0;m<h;m++)u[m]=this.i(m)^p.i(m);return new o(u,this.h^p.h)};function bn(p){const h=p.g.length+1,u=[];for(let m=0;m<h;m++)u[m]=p.i(m)<<1|p.i(m-1)>>>31;return new o(u,p.h)}function Be(p,h){const u=h>>5;h%=32;const m=p.g.length-u,f=[];for(let g=0;g<m;g++)f[g]=h>0?p.i(g+u)>>>h|p.i(g+u+1)<<32-h:p.i(g+u);return new o(f,p.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=y,bc=o}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});function ee(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let gn="13.2.0";function Kf(t){gn=t}/**
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
 */const ln=new Ts("@firebase/firestore");function Ft(t,...e){if(ln.logLevel<=L.DEBUG){const n=e.map(Os);ln.debug(`Firestore (${gn}): ${t}`,...n)}}function cr(t,...e){if(ln.logLevel<=L.ERROR){const n=e.map(Os);ln.error(`Firestore (${gn}): ${t}`,...n)}}function kc(t,...e){if(ln.logLevel<=L.WARN){const n=e.map(Os);ln.warn(`Firestore (${gn}): ${t}`,...n)}}function Os(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function W(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,vc(t,i,n)}function vc(t,e,n){let i=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw cr(i),new Error(i)}function ue(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||vc(e,r,i)}function Sc(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(oe.UNAUTHENTICATED))}shutdown(){}}class qf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Yf{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ue(typeof e.accessToken=="string",42297,{Z:e}),new Tc(e.accessToken,new oe(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Jf{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Zf{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new Jf(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable(()=>n(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xf{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,ae(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit(i=>{this.appCheck=i})}getToken(){return this.oe?Promise.resolve(new Qo(this.oe)):this.appCheck?this.appCheck.getToken().then(e=>e?(ue(typeof e.token=="string",3470,{tokenResult:e}),new Qo(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Qf{constructor(e,n,i,r,s,o,a,l,c,y,w,b,I){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=y,this.apiKey=w,this._customHeaders=b,this.grpcFlowControlWindow=I}}const ns="(default)";class Hn{constructor(e,n){this.projectId=e,this.database=n||ns}static empty(){return new Hn("","")}get isDefaultDatabase(){return this.database===ns}isEqual(e){return e instanceof Hn&&e.projectId===this.projectId&&e.database===this.database}}function em(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new A(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hn(t.options.projectId,e)}/**
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
 */function tm(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class nm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=tm(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%62))}return i}}function Me(t,e){return t<e?-1:t>e?1:0}function Vs(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const r=t.charAt(i),s=e.charAt(i);if(r!==s)return Nr(r)===Nr(s)?Me(r,s):Nr(r)?1:-1}return Me(t.length,e.length)}const im=55296,rm=57343;function Nr(t){const e=t.charCodeAt(0);return e>=im&&e<=rm}function Ec(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */const ea="__name__";class $e{constructor(e,n,i){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&W(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return $e.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $e?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=$e.compareSegments(e.get(r),n.get(r));if(s!==0)return s}return Me(e.length,n.length)}static compareSegments(e,n){const i=$e.isNumericId(e),r=$e.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?$e.extractNumericId(e).compare($e.extractNumericId(n)):Vs(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bc.fromString(e.substring(4,e.length-2))}}class Z extends $e{construct(e,n,i){return new Z(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new A(k.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Wn=class Kt extends $e{construct(e,n,i){return new Kt(e,n,i)}static isValidIdentifier(e){return sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ea}static keyField(){return new Kt([ea])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new A(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new A(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new A(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}};/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Z.fromString(e))}static fromName(e){return new de(Z.fromString(e).popFirst(5))}static empty(){return new de(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Z(e.slice()))}}/**
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
 */function om(t,e,n){if(!n)throw new A(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ta(t){if(!de.isDocumentKey(t))throw new A(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _c(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function zs(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function hr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zs(t);throw new A(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ac(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let li=null;function am(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
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
 */function lm(t){return t==null}function Hi(t){return t===0&&1/t==-1/0}/**
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
 */const Cr="RestConnection",cm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hm{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${r}`,this.ce=this.databaseId.database===ns?`project_id=${i}`:`project_id=${i}&database_id=${r}`}le(e,n,i,r,s){const o=am(),a=this.fe(e,n.toUriEncodedString());Ft(Cr,`Sending RPC '${e}' ${o}:`,a,i);const l={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(l,r,s);const{host:c}=new URL(a),y=Xn(c);return this.de(e,a,l,i,y).then(w=>(Ft(Cr,`Received RPC '${e}' ${o}: `,w),w),w=>{throw kc(Cr,`RPC '${e}' ${o} failed with error: `,w,"url: ",a,"request:",i),w})}me(e,n,i,r,s,o){return this.le(e,n,i,r,s)}he(e,n,i){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}fe(e,n){const i=cm[e];let r=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */var na,D,J,qt,is,Ti,Ei,$n;function dm(t){switch(t){case k.OK:return W(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function ia(t){if(t===void 0)return cr("RPC_ERROR","HTTP error has no status"),k.UNKNOWN;switch(t){case 200:return k.OK;case 400:return k.FAILED_PRECONDITION;case 401:return k.UNAUTHENTICATED;case 403:return k.PERMISSION_DENIED;case 404:return k.NOT_FOUND;case 409:return k.ABORTED;case 416:return k.OUT_OF_RANGE;case 429:return k.RESOURCE_EXHAUSTED;case 499:return k.CANCELLED;case 500:return k.UNKNOWN;case 501:return k.UNIMPLEMENTED;case 503:return k.UNAVAILABLE;case 504:return k.DEADLINE_EXCEEDED;default:return t>=200&&t<300?k.OK:t>=400&&t<500?k.FAILED_PRECONDITION:t>=500&&t<600?k.INTERNAL:k.UNKNOWN}}/**
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
 */(D=na||(na={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";class um extends hm{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,r,s){var l;const o=JSON.stringify(r);let a;try{const c={method:"POST",headers:i,body:o};s&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const y=c,w=y==null?void 0:y.message,b=y!=null&&y.cause?String(y.cause):void 0,I=(w&&b?`${w} (${b})`:w??b)??(y==null?void 0:y.statusText)??String(c);throw new A(ia(y==null?void 0:y.status),`Request failed with error: ${I}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const y=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new A(ia(a.status),`Request failed with error: ${y??a.statusText}`)}return a.json()}}/**
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
 */class pm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pm("Invalid base64 string: "+s):s}}(e);return new Se(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new Se(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function Gn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}Se.EMPTY_BYTE_STRING=new Se("");/**
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
 */class _{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new _;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,r=this.be(e,i);if(r==0&&this.isEmpty(i)||(n+=r)<_.we)return;if(n>_.ge)return void(this.exponent=Number(_.Fe));let s=this.ve(n,i);this.xe(n,s,i)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let r=-i;if(e.length-i>_.De){let s=e[_.De]>=5,o=new Array(_.De).fill(0);for(let a=0;a<_.De;a++)o[a]=e[a+i];s&&(r+=this.Ne(o)),e=o,i=0}for(let s=e.length-1;s>=i;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return r}Se(e){let n=e.length;for(let i=0;i<n;i++){let r=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=r<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,r=Number(i)/_.Ce;return Math.floor(Number(e)*_.Be+this.log2(r))}log2(e){return _.Qe*Math.log(e)}xe(e,n,i){let r=this.Ie;this.Oe(-n,r);let s=this.pe;this.Me(i,r,s),this.qe(s),BigInt(r[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=_.Ue)<=0||(n+=this.$e(s),BigInt(n)>=_.Fe?this.exponent=Number(_.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(_.je[0],n);let i=_.je;e<0&&(e=-e,i=_.Ke);let r=_.ze,s=32,o=!0;for(;e>0;)e>=r&&(o?(this.ke(i[s],n),o=!1):this.We(n,i[s],n),e-=r),s-=1,r*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let r=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(r)}Ge(e,n,i){for(let r=0;r<i.length;r++)i[r]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let r=5;r>=0;r--)for(let s=5;s>=0;s--){let o=this.Ae[r]*this.Re[s];i[s+r+1]=i[s+r+1]+(o&_.Xe)&0xffffffffffffffffn,i[s+r]=i[s+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)i[r-1]=i[r-1]+(i[r]>>32n)&0xffffffffffffffffn,i[r]&=_.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let r=this.Re;this.Ye(n,r);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let l=e[o]*r[a];i[a+o+1]=i[a+o+1]+(l&_.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=_.Xe}qe(e){let n=e.length-1;e[0]&=_.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=_.Xe}Le(e){let n=31-_.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&_.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&_.Xe,n[2]=e[2]>>32n,n[3]=e[2]&_.Xe,n[4]=e[3]>>32n,n[5]=e[3]&_.Xe}tt(e,n){let i=e.length-1,r=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<r&_.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>r);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&_.Xe|e[o+1]>>r);e[i]=e[i]<<s&_.Xe}}rt(e,n,i){let r=n;e[r]=e[r]+i&0xffffffffffffffffn;for(let s=r+1-1;s>=1&&(e[s]&_.nt)!=0n;s--)e[s]&=_.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}_.De=59,_.ge=646456993,_.we=-646457032,_.Ce=0xccccccccccccd00,_.it=0x8000000000000000n,_.ze=2147483648,_.Xe=0x00000000ffffffffn,_.nt=0xffffffff00000000n,_.Be=Math.log(10)/Math.log(2),_.Qe=1/Math.log(2),_.Ue=2147483647,_.Fe=0xffffffffn,_.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],_.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class S{constructor(e,n,i,r){this.negative=e,this.st=n,this.Ve=i,this.Te=r}exponent(){return this.st-_.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===ee(S,J,"f",qt)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===ee(S,J,"f",qt)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+ee(S,J,"m",is).call(S,this.Ve)+ee(S,J,"m",is).call(S,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return S.NaN;if(!isFinite(e))return e<0?S._t:S.ct;if(e===0)return Math.sign(1/e)>0?S.lt:S.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let r=BigInt.asUintN(64,i<<12n),s=2047&Number(i>>52n);if(s===0){const o=_.et(r);r=o<63?r<<BigInt(o+1):0n,s=-o}return new S(e<0,ee(S,J,"m",$n).call(S,s-1023),r,0n)}static fromString(e){if(e==="NaN")return S.NaN;if(e==="-Infinity")return S._t;if(e==="Infinity"||e==="+Infinity")return S.ct;const n=new Array(e.length).fill(0);let i=0,r=0,s=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;ee(S,J,"m",Ti).call(S,e,i);)n[r++]=ee(S,J,"m",Ei).call(S,e,i++);if(e[i]==="."){const l=++i;for(;ee(S,J,"m",Ti).call(S,e,i);)n[r++]=ee(S,J,"m",Ei).call(S,e,i++);s=l-i}if(e[i]==="e"||e[i]==="E"){let l=0;i++;let c=1;e[i]==="-"?(c=-1,i++):e[i]==="+"&&i++;const y=i;for(;ee(S,J,"m",Ti).call(S,e,i);)if(l=10*l+ee(S,J,"m",Ei).call(S,e,i++),i-y>9)throw new Error("Exponent too large "+e);if(i===y)throw new Error("Invalid number "+e);s+=l*c}if(r===0||i!==e.length)throw new Error("Invalid number "+e);const a=_.ye(n.slice(0,r),s);return new S(o,a.exponent,a.Ve,a.Te)}}J=S,is=function(e){return e.toString(16).padStart(16,"0")},Ti=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},Ei=function(e,n){return e.codePointAt(n)-48},$n=function(e){return e+_.Ue},qt={value:Number(_.Fe)},S.lt=new S(!1,0,0n,0n),S.ft=new S(!0,0,0n,0n),S.NaN=new S(!1,ee(S,J,"f",qt),1n<<63n,0n),S._t=new S(!0,ee(S,J,"f",qt),0n,0n),S.ct=new S(!1,ee(S,J,"f",qt),0n,0n),new S(!0,ee(S,J,"m",$n).call(S,63),0n,0n),new S(!1,ee(S,J,"m",$n).call(S,0),0n,0n),new S(!0,ee(S,J,"m",$n).call(S,0),0n,0n);/**
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
 */const fm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=fm.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ce(t.seconds),nanos:ce(t.nanos)}}function ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wi(t){return typeof t=="string"?Se.fromBase64String(t):Se.fromUint8Array(t)}/**
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
 */function pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ii(t,e){if(!_c(t))throw new A(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(r&&typeof a!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new A(k.INVALID_ARGUMENT,n);return!0}/**
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
 */const ra=-62135596800,sa=1e6;class G{static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*sa);return new G(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new A(k.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return G._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(r+1000000000n))}return new G(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ra)throw new A(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sa}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new A(k.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:G._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ii(e,G._jsonSchema))return new G(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ra;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}G._jsonSchemaVersion="firestore/timestamp/1.0",G._jsonSchema={type:pe("string",G._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};function mm(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function Ic(t){const e=t.mapValue.fields.__previous_value__;return mm(e)?Ic(e):e}function rs(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new G(e.seconds,e.nanos)}/**
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
 */const $c="__type__",xc="__vector__",Pc="value",gm="server_timestamp",Nc="__min__",Fs="__max__",dt="__regex__",Gi="pattern",Ki="options",jn="__oid__",ri="__int__",cn="__decimal128__",Ct="__request_timestamp__",ji="seconds",qi="increment",dr="__binary__";var z,ge;(ge=z||(z={})).dt="regexValue",ge.Et="bsonObjectIdValue",ge.Vt="int32Value",ge.Tt="decimal128Value",ge.It="bsonTimestampValue",ge.At="bsonBinaryValue",ge.Rt="minKeyValue",ge.Pt="maxKeyValue",ge.yt="maxValue",ge.bt="vectorValue",ge.wt="serverTimestampValue",ge.gt="regularMapValue";const oa={[xc]:z.bt,[Fs]:z.yt,[gm]:z.wt},Cc={[dt]:z.dt,[jn]:z.Et,[ri]:z.Vt,[cn]:z.Tt,[Ct]:z.It,[dr]:z.At,[Nc]:z.Rt,[Fs]:z.Pt};function ss(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return W(28295,{value:t});switch(function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return z.gt;const r=i.mapValue.fields,s=(a=r[$c])==null?void 0:a.stringValue;if(s&&oa[s])return oa[s];if(Gn(r)===1){const l=Object.keys(r);return Cc[l[0]]??z.gt}return z.gt}(t)){case z.wt:return 6;case z.yt:return 9007199254740991;case z.bt:return 14;case z.dt:return 12;case z.Et:return 10;case z.Vt:case z.Tt:return 3;case z.It:return 5;case z.At:return 8;case z.Rt:return 1;case z.Pt:return 16;default:return 15}}function os(t,e,n){if(t===e)return!0;const i=ss(t);if(i!==ss(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return rs(t).isEqual(rs(e));case 4:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Kn(s.timestampValue),l=Kn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 7:return t.stringValue===e.stringValue;case 8:return function(s,o){return bm(s,o)===0}(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return function(s,o){return ce(s.geoPointValue.latitude)===ce(o.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(o.geoPointValue.longitude)}(t,e);case 3:return function(s,o,a){if(hn(s)&&hn(o))return Dc(s,o)===0;if("integerValue"in s&&"integerValue"in o||Yi(s)&&Yi(o))return qn(s)===qn(o);let l,c;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(l=ce(s.doubleValue),c=ce(o.doubleValue),l===c?Hi(l)===Hi(c):!!(a===void 0||a.vt)&&isNaN(l)&&isNaN(c))}(t,e,n);case 13:return Ec(t.arrayValue.values||[],e.arrayValue.values||[],(r,s)=>os(r,s,n));case 14:case 15:return function(s,o,a){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Gn(l)!==Gn(c))return!1;for(const y in l)if(l.hasOwnProperty(y)&&(c[y]===void 0||!os(l[y],c[y],a)))return!1;return!0}(t,e,n);case 5:return wm(t,e)===0;case 12:return km(t,e)===0;case 10:return vm(t,e)===0;default:return W(52216,{left:t})}}function qn(t){let e;return e=Yi(t)?t.mapValue.fields[ri].integerValue:t.integerValue||t.doubleValue,ce(e)}function ym(t){return t.mapValue.fields[cn].stringValue}function aa(t,e){if(hn(t)||hn(e))return Dc(t,e);const n=qn(t),i=qn(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:Me(n,i)}function Dc(t,e){const n=la(t),i=la(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function la(t){return hn(t)?S.fromString(ym(t)):S.fromNumber(qn(t))}function wm(t,e){var a,l,c,y,w,b,I,P,U,V,se,me;const n=(c=(l=(a=t.mapValue.fields)==null?void 0:a[Ct].mapValue)==null?void 0:l.fields)==null?void 0:c[ji],i=(b=(w=(y=e.mapValue.fields)==null?void 0:y[Ct].mapValue)==null?void 0:w.fields)==null?void 0:b[ji],r=(U=(P=(I=t.mapValue.fields)==null?void 0:I[Ct].mapValue)==null?void 0:P.fields)==null?void 0:U[qi],s=(me=(se=(V=e.mapValue.fields)==null?void 0:V[Ct].mapValue)==null?void 0:se.fields)==null?void 0:me[qi],o=aa(n,i);return o!==0?o:aa(r,s)}function ca(t){var a;if("bytesValue"in t)return{subtype:0,bytes:Wi(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[dr],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const r=Wi(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const s=r[0],o=r.slice(1);return{subtype:s,bytes:Se.fromUint8Array(o)}}function bm(t,e){const n=ca(t),i=ca(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function km(t,e){var c,y,w,b,I,P,U,V,se,me,it,vt,bn,Be,p,h;const n=t.mapValue.fields,i=((b=(w=(y=(c=n==null?void 0:n[dt])==null?void 0:c.mapValue)==null?void 0:y.fields)==null?void 0:w[Gi])==null?void 0:b.stringValue)??"",r=((V=(U=(P=(I=n==null?void 0:n[dt])==null?void 0:I.mapValue)==null?void 0:P.fields)==null?void 0:U[Ki])==null?void 0:V.stringValue)??"",s=e.mapValue.fields,o=((vt=(it=(me=(se=s==null?void 0:s[dt])==null?void 0:se.mapValue)==null?void 0:me.fields)==null?void 0:it[Gi])==null?void 0:vt.stringValue)??"",a=((h=(p=(Be=(bn=s==null?void 0:s[dt])==null?void 0:bn.mapValue)==null?void 0:Be.fields)==null?void 0:p[Ki])==null?void 0:h.stringValue)??"",l=Vs(i,o);return l!==0?l:Me(r,a)}function vm(t,e){var n,i,r,s;return Vs(((i=(n=t.mapValue.fields)==null?void 0:n[jn])==null?void 0:i.stringValue)??"",((s=(r=e.mapValue.fields)==null?void 0:r[jn])==null?void 0:s.stringValue)??"")}function hn(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return Gn(e)===1&&e[cn]&&!!e[cn].stringValue}function Yi(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return Gn(e)===1&&((i=e[ri])==null?void 0:i.integerValue)!==void 0}function Dr(t){return!!t&&"mapValue"in t}function Ln(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ln(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ln(t.arrayValue.values[n]);return e}return{...t}}/**
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
 */new Set(Object.values(Cc));/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new G(0,0))}static max(){return new Y(new G(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ji{constructor(e,n){this.comparator=e,this.root=n||te.EMPTY}insert(e,n){return new Ji(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,te.BLACK,null,null))}remove(e){return new Ji(this.comparator,this.root.remove(e,this.comparator).copy(null,null,te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class te{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??te.RED,this.left=r??te.EMPTY,this.right=s??te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new te(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return te.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,i,r,s){return this}insert(e,n,i){return new te(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Zi{constructor(e){this.comparator=e,this.data=new Ji(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(e){return new ha(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Zi(this.comparator);return n.data=e,n}}class ha{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Wn.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Zi(Wn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ec(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class we{constructor(e){this.value=e}static empty(){return new we({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Dr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ln(n)}setAll(e){let n=Wn.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Ln(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Dr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return os(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Dr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){ni(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new we(Ln(this.value))}}/**
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
 */class Ke{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,Y.min(),Y.min(),Y.min(),we.empty(),0)}static newFoundDocument(e,n,i,r){return new Ke(e,1,n,Y.min(),i,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,Y.min(),Y.min(),we.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,Y.min(),Y.min(),we.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=we.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=we.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sm{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}/**
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
 */function Rc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function _i(t){return{integerValue:""+t}}function Tm(t,e,n){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Hi(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?_i(e):Rc(t,e)}/**
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
 */class ur{constructor(){this._=void 0}}class Lc extends ur{}class Em extends ur{constructor(e){super(),this.elements=e}}class _m extends ur{constructor(e){super(),this.elements=e}}class Us extends ur{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class Am extends Us{}class Im extends Us{}class $m extends Us{}/**
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
 */class xm{constructor(e,n){this.field=e,this.transform=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class pr{}class Mc extends pr{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Bs extends pr{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Oc extends pr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vc extends pr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Pm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ai(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function da(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Nm(t,e){return Ai(t,e.toTimestamp())}function Rr(t){return ue(!!t,49232),Y.fromTimestamp(function(n){const i=Kn(n);return new G(i.seconds,i.nanos)}(t))}function zc(t,e){return as(t,e).canonicalString()}function as(t,e){const n=function(r){return new Z(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Xi(t,e){return zc(t.databaseId,e.path)}function ua(t,e){const n=function(r){const s=Z.fromString(r);return ue(Fc(s),10190,{key:s.toString()}),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new A(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(function(r){return ue(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}(n))}function pa(t,e,n){return{name:Xi(t,e),fields:n.value.mapValue.fields}}function Cm(t,e){return"found"in e?function(i,r){ue(!!r.found,43571),r.found.name,r.found.updateTime;const s=ua(i,r.found.name),o=Rr(r.found.updateTime),a=r.found.createTime?Rr(r.found.createTime):Y.min(),l=new we({mapValue:{fields:r.found.fields}});return Ke.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(i,r){ue(!!r.missing,3894),ue(!!r.readTime,22933);const s=ua(i,r.missing),o=Rr(r.readTime);return Ke.newNoDocument(s,o)}(t,e):W(7234,{result:e})}function Dm(t,e){let n;if(e instanceof Mc)n={update:pa(t,e.key,e.value)};else if(e instanceof Oc)n={delete:Xi(t,e.key)};else if(e instanceof Bs)n={update:pa(t,e.key,e.data),updateMask:Rm(e.fieldMask)};else{if(!(e instanceof Vc))return W(16599,{Ot:e.type});n={verify:Xi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Em)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _m)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Am)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof Im)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof $m)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw W(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Nm(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function Rm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Uc(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */function Hs(t){return new Pm(t,!0)}/**
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
 */class Lm{}class Mm extends Lm{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.qt=!1}Lt(){if(this.qt)throw new A(k.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.le(e,as(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(k.UNKNOWN,s.toString())})}me(e,n,i,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.me(e,as(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new A(k.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}}async function Bc(t,e){const n=Sc(t),i={writes:e.map(r=>Dm(n.serializer,r))};await n.le("Commit",n.serializer.databaseId,Z.emptyPath(),i)}async function Hc(t,e){const n=Sc(t),i={documents:e.map(a=>Xi(n.serializer,a))},r=await n.me("BatchGetDocuments",n.serializer.databaseId,Z.emptyPath(),i,e.length),s=new Map;r.forEach(a=>{const l=Cm(n.serializer,a);s.set(l.key.toString(),l)});const o=[];return e.forEach(a=>{const l=s.get(a.toString());ue(!!l,55234,{key:a}),o.push(l)}),o}/**
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
 */const Wc="ComponentProvider",Mn=new Map;function Ws(t){if(t._terminated)throw new A(k.FAILED_PRECONDITION,"The client has already been terminated.");if(!Mn.has(t)){Ft(Wc,"Initializing Datastore");const e=function(s){return new um(s)}(function(s,o,a,l,c){return new Qf(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Ac(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l,c._customHeaders,c.grpcFlowControlWindow)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Hs(t._databaseId),i=function(s,o,a,l){return new Mm(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Mn.set(t,i)}return Mn.get(t)}const Om=1048576,Gc="firestore.googleapis.com",fa=!0;class ma{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new A(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gc,this.ssl=fa}else this.host=e.host,this.ssl=e.ssl??fa;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Om)throw new A(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(i,r,s,o){if(r===!0&&o===!0)throw new A(k.INVALID_ARGUMENT,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ac(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new A(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new A(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new A(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new A(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(i,r){if(i===r)return!0;if(!i||!r)return!1;const s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(const a of s)if(i[a]!==r[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}class fr{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ma({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new A(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new A(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ma(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new jf;switch(i.type){case"firstParty":return new Zf(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new A(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Mn.get(n);i&&(Ft(Wc,"Removing Datastore"),Mn.delete(n),i.terminate())}(this),Promise.resolve()}}function Vm(t,e){const n=typeof t=="object"?t:Al(),i=typeof t=="string"?t:e||"(default)",r=_s(n,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const s=rd("firestore");s&&zm(r,...s)}return r}function zm(t,e,n,i={}){var c;t=hr(t,fr);const r=Xn(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&Tl(`https://${a}`),s.host!==Gc&&s.host!==a&&kc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:r,emulatorOptions:i};if(!Ot(l,o)&&(t._setSettings(l),i.mockUserToken)){let y,w;if(typeof i.mockUserToken=="string")y=i.mockUserToken,w=oe.MOCK_USER;else{y=sd(i.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new A(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new oe(b)}t._authCredentials=new qf(new Tc(y,w))}}/**
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
 */class Gs{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Gs(this.firestore,e,this._query)}}class X{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new X(this.firestore,e,this._key)}toJSON(){return{type:X._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(ii(n,X._jsonSchema))return new X(e,i||null,new de(Z.fromString(n.referencePath)))}}X._jsonSchemaVersion="firestore/documentReference/1.0",X._jsonSchema={type:pe("string",X._jsonSchemaVersion),referencePath:pe("string")};class Yn extends Gs{constructor(e,n,i){super(e,n,function(s){return new Sm(s)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new de(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Qt(t,e,...n){if(t=j(t),arguments.length===1&&(e=nm.newId()),om("doc","path",e),t instanceof fr){const i=Z.fromString(e,...n);return ta(i),new X(t,null,new de(i))}{if(!(t instanceof X||t instanceof Yn))throw new A(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Z.fromString(e,...n));return ta(i),new X(t.firestore,t instanceof Yn?t.converter:null,new de(i))}}/**
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
 */class he{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new A(k.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new he(Se.fromBase64String(e),n)}catch(i){throw new A(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new he(Se.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:he._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(ii(e,he._jsonSchema)){const n=e.subtype??0;return he.fromBase64String(e.bytes,n)}}}he._jsonSchemaVersion="firestore/bytes/1.0",he._jsonSchema={type:pe("string",he._jsonSchemaVersion),bytes:pe("string"),subtype:{...pe("number"),optional:!0}};/**
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
 */class Ks{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class js{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class qs{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Ys{constructor(e){this.stringValue=e,this.value=S.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
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
 */class mr{constructor(e){this._methodName=e}}/**
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
 */class Le{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Le._jsonSchemaVersion}}static fromJSON(e){if(ii(e,Le._jsonSchema))return new Le(e.latitude,e.longitude)}}Le._jsonSchemaVersion="firestore/geoPoint/1.0",Le._jsonSchema={type:pe("string",Le._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
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
 */class Js{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Ze{constructor(){this.type="MaxKey"}static instance(){return Ze.MAX_KEY_VALUE_INSTANCE||(Ze.MAX_KEY_VALUE_INSTANCE=new Ze),Ze.MAX_KEY_VALUE_INSTANCE}}Ze.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class Xe{constructor(){this.type="MinKey"}static instance(){return Xe.MIN_KEY_VALUE_INSTANCE||(Xe.MIN_KEY_VALUE_INSTANCE=new Xe),Xe.MIN_KEY_VALUE_INSTANCE}}Xe.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class Zs{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class Ae{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ae._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ii(e,Ae._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ae(e.vectorValues);throw new A(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ae._jsonSchemaVersion="firestore/vectorValue/1.0",Ae._jsonSchema={type:pe("string",Ae._jsonSchemaVersion),vectorValues:pe("object")};/**
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
 */const Fm=/^__.*__$/;class Um{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Bs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mc(e,this.data,n,this.fieldTransforms)}}class Kc{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Bs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function jc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{dataSource:t})}}class Xs{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Xs({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return er(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(jc(this.dataSource)&&Fm.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Bm{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Hs(e)}createContext(e,n,i,r=!1){return new Xs({dataSource:e,methodName:n,targetDoc:i,path:Wn.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qc(t){const e=t._freezeSettings(),n=Hs(t._databaseId);return new Bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yc(t,e,n,i,r,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,r);eo("Data must be an object, but it was:",o,i);const a=Jc(i,o);let l,c;if(s.merge)l=new Ut(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const y=[];for(const w of s.mergeFields){const b=Qi(e,w,n);if(!o.contains(b))throw new A(k.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);eh(y,b)||y.push(b)}l=new Ut(y),c=o.fieldTransforms.filter(w=>l.covers(w.field))}else l=null,c=o.fieldTransforms;return new Um(new we(a),l,c)}class gr extends mr{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gr}}class Qs extends mr{_toFieldTransform(e){return new xm(e.path,new Lc)}isEqual(e){return e instanceof Qs}}function Hm(t,e,n,i){const r=t.createContext(1,e,n);eo("Data must be an object, but it was:",r,i);const s=[],o=we.empty();ni(i,(l,c)=>{const y=Qc(e,l,n);c=j(c);const w=r.childContextForFieldPath(y);if(c instanceof gr)s.push(y);else{const b=yr(c,w);b!=null&&(s.push(y),o.set(y,b))}});const a=new Ut(s);return new Kc(o,a,r.fieldTransforms)}function Wm(t,e,n,i,r,s){const o=t.createContext(1,e,n),a=[Qi(e,i,n)],l=[r];if(s.length%2!=0)throw new A(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)a.push(Qi(e,s[b])),l.push(s[b+1]);const c=[],y=we.empty();for(let b=a.length-1;b>=0;--b)if(!eh(c,a[b])){const I=a[b];let P=l[b];P=j(P);const U=o.childContextForFieldPath(I);if(P instanceof gr)c.push(I);else{const V=yr(P,U);V!=null&&(c.push(I),y.set(I,V))}}const w=new Ut(c);return new Kc(y,w,o.fieldTransforms)}function yr(t,e,n){if(Xc(t=j(t)))return eo("Unsupported field value:",e,t),Jc(t,e);if(t instanceof mr)return function(r,s){if(!jc(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let c=yr(l,s.childContextForArray(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,s,o){if((r=j(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=G.fromDate(r);return{timestampValue:Ai(s.serializer,a)}}if(r instanceof G){const a=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ai(s.serializer,a)}}if(Zc(r)){const a=G.fromInstant(r),l=new G(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Ai(s.serializer,l)}}if(r instanceof Le)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return r.subtype===0?{bytesValue:da(s.serializer,r._byteString)}:function(l,c){const y=c.toUint8Array(),w=new Uint8Array(y.length+1);return w[0]=c.subtype,w.set(y,1),{mapValue:{fields:{[dr]:{bytesValue:da(l,Se.fromUint8Array(w))}}}}}(s.serializer,r);if(r instanceof X){const a=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:zc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ae)return function(l,c){const y=l instanceof Ae?l.toArray():l;return{mapValue:{fields:{[$c]:{stringValue:xc},[Pc]:{arrayValue:{values:y.map(b=>{if(typeof b!="number")throw c.createError("VectorValues must only contain numeric values.");return Rc(c.serializer,b)})}}}}}}(r,s);if(r instanceof Zs)return function(l){return{mapValue:{fields:{[dt]:{mapValue:{fields:{[Gi]:{stringValue:l.pattern},[Ki]:{stringValue:l.options}}}}}}}}(r);if(r instanceof js)return function(l){return{mapValue:{fields:{[jn]:{stringValue:l.value}}}}}(r);if(r instanceof Js)return function(l){return{mapValue:{fields:{[ri]:_i(l.value)}}}}(r);if(r instanceof Ys)return function(l){return{mapValue:{fields:{[cn]:{stringValue:l.stringValue}}}}}(r);if(r instanceof qs)return function(l){return{mapValue:{fields:{[Ct]:{mapValue:{fields:{[ji]:_i(l.seconds),[qi]:_i(l.increment)}}}}}}}(r);if(r instanceof Xe)return function(){return{mapValue:{fields:{[Nc]:{nullValue:"NULL_VALUE"}}}}}();if(r instanceof Ze)return function(){return{mapValue:{fields:{[Fs]:{nullValue:"NULL_VALUE"}}}}}();if(Uc(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${zs(r)}`)}(t,e)}function Jc(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(i,r)=>{const s=yr(r,e.childContextForField(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Zc(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Xc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof G||t instanceof Le||t instanceof he||t instanceof X||t instanceof mr||t instanceof Ae||t instanceof Xe||t instanceof Ze||t instanceof Js||t instanceof Ys||t instanceof Zs||t instanceof js||t instanceof qs||Zc(t)||Uc(t))}function eo(t,e,n){if(!Xc(n)||!_c(n)){const i=zs(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function Qi(t,e,n){if((e=j(e))instanceof Ks)return e._internalPath;if(typeof e=="string")return Qc(t,e);throw er("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gm=new RegExp("[~\\*/\\[\\]]");function Qc(t,e,n){if(e.search(Gm)>=0)throw er(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ks(...e.split("."))._internalPath}catch{throw er(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function er(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new A(k.INVALID_ARGUMENT,a+t+l)}function eh(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tr{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Km(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Km extends tr{data(){return super.data()}}class jm{convertValue(e,n="none"){switch(ss(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Yi(e))return this.convertToInt32Value(e.mapValue);if(hn(e))return this.convertToDecimal128Value(e.mapValue)}return ce(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Wi(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Ze.instance();case 1:return Xe.instance();default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ni(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var i,r,s;const n=(s=(r=(i=e.fields)==null?void 0:i[Pc].arrayValue)==null?void 0:r.values)==null?void 0:s.map(o=>ce(o.doubleValue));return new Ae(n)}convertToBsonObjectId(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[jn])==null?void 0:r.stringValue)??"";return new js(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[dr],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=Wi(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const s=r[0],o=r.slice(1);return new he(Se.fromUint8Array(o),s)}convertToBsonTimestamp(e){var s,o,a,l,c,y,w;const n=(s=e.fields)==null?void 0:s[Ct],i=Number((l=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[ji])==null?void 0:l.integerValue),r=Number((w=(y=(c=n==null?void 0:n.mapValue)==null?void 0:c.fields)==null?void 0:y[qi])==null?void 0:w.integerValue);return new qs(i,r)}convertToRegexValue(e){var r,s,o,a,l,c,y,w,b,I;const n=((l=(a=(o=(s=(r=e.fields)==null?void 0:r[dt])==null?void 0:s.mapValue)==null?void 0:o.fields)==null?void 0:a[Gi])==null?void 0:l.stringValue)??"",i=((I=(b=(w=(y=(c=e.fields)==null?void 0:c[dt])==null?void 0:y.mapValue)==null?void 0:w.fields)==null?void 0:b[Ki])==null?void 0:I.stringValue)??"";return new Zs(n,i)}convertToInt32Value(e){var i,r;const n=Number((r=(i=e.fields)==null?void 0:i[ri])==null?void 0:r.integerValue);return new Js(n)}convertToDecimal128Value(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[cn])==null?void 0:r.stringValue)??"";return new Ys(n)}convertGeoPoint(e){return new Le(ce(e.latitude),ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ic(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(rs(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new G(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Z.fromString(e);ue(Fc(i),9688,{name:e});const r=new Hn(i.get(1),i.get(3)),s=new de(i.popFirst(5));return r.isEqual(n)||cr(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function th(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class nh extends jm{constructor(e){super(),this.firestore=e}convertBytes(e){return new he(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,n)}}function to(t){const e=Ws((t=hr(t,X)).firestore),n=new nh(t.firestore);return Hc(e,[t._key]).then(i=>{ue(i.length===1,15618);const r=i[0];return new tr(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)})}function qm(t,e,n){const i=th((t=hr(t,X)).converter,e,n),r=Yc(qc(t.firestore),"setDoc",t._key,i,t.converter!==null,n);return Bc(Ws(t.firestore),[r.toMutation(t._key,Ne.none())])}function ih(){return new Qs("serverTimestamp")}const ga="4.19.1";/**
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
 */class no{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rh{constructor(e,n,i=1e3,r=1.5,s=6e4){this.t=e,this.timerId=n,this.i=i,this.o=r,this.h=s,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(e){this.cancel();const n=Math.floor(this.u+this.p()),i=Math.max(0,Date.now()-this._),r=Math.max(0,n-i);r>0&&Ft("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.u} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,r,()=>(this._=Date.now(),e())),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}function hi(t,e){if((t=j(t)).firestore!==e)throw new A(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let Ym=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new A(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await Hc(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Oc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=de.fromPath(i);this.mutations.push(new Vc(r,this.precondition(r)))}),await Bc(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw W(50498,{R:e.constructor.name});n=Y.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new A(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?Ne.exists(!1):Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new A(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */const Jm={maxAttempts:5};/**
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
 */class Zm{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.I=i.maxAttempts,this.P=new rh(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A(async()=>{const e=new Ym(this.datastore),n=this.v(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.F(r)}))}).catch(i=>{this.F(i)})})}v(e){try{const n=this.updateFunction(e);return!lm(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}F(e){this.I>0&&this.B(e)?(this.I-=1,this.asyncQueue.enqueueAndForget(()=>(this.D(),Promise.resolve()))):this.deferred.reject(e)}B(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!dm(n)}return!1}}/**
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
 */function Lr(){return typeof document<"u"?document:null}/**
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
 */class io{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new no,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new io(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */const ya="AsyncQueue";class Xm{constructor(e=Promise.resolve()){this.k=[],this.O=!1,this.C=[],this.S=null,this.q=!1,this.M=!1,this.N=[],this.P=new rh(this,"async_queue_retry"),this.L=()=>{const i=Lr();i&&Ft(ya,"Visibility state changed to "+i.visibilityState),this.P.T()},this.W=e;const n=Lr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.U(),this.j(e)}enterRestrictedMode(e){if(!this.O){this.O=!0,this.M=e||!1;const n=Lr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.L)}}enqueue(e){if(this.U(),this.O)return new Promise(()=>{});const n=new no;return this.j(()=>this.O&&this.M?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.k.push(e),this.$()))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(e){if(!function(i){return i.name==="IndexedDbTransactionError"}(e))throw e;Ft(ya,"Operation failed with retryable error: "+e)}this.k.length>0&&this.P.A(()=>this.$())}}j(e){const n=this.W.then(()=>(this.q=!0,e().catch(i=>{this.S=i,this.q=!1;const r=wa(i);throw cr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.q=!1,i))));return this.W=n,n}enqueueAfterDelay(e,n,i){this.U(),this.N.indexOf(e)>-1&&(n=0);const r=io.createAndSchedule(this,e,n,i,s=>this.G(s));return this.C.push(r),r}U(){this.S&&W(47125,{K:wa(this.S)})}verifyOperationInProgress(){}async H(){let e;do e=this.W,await e;while(e!==this.W)}J(e){for(const n of this.C)if(n.timerId===e)return!0;return!1}X(e){return this.H().then(()=>{this.C.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.C)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.H()})}Y(e){this.N.push(e)}G(e){const n=this.C.indexOf(e);this.C.splice(n,1)}}function wa(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */class Qm{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=qc(e)}get(e){const n=hi(e,this._firestore),i=new nh(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return W(24041);const s=r[0];if(s.isFoundDocument())return new tr(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new tr(this._firestore,i,n._key,null,n.converter);throw W(18433,{doc:s})})}set(e,n,i){const r=hi(e,this._firestore),s=th(r.converter,n,i),o=Yc(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=hi(e,this._firestore);let o;return o=typeof(n=j(n))=="string"||n instanceof Ks?Wm(this._dataReader,"Transaction.update",s._key,n,i,r):Hm(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=hi(e,this._firestore);return this._transaction.delete(n._key),this}}function eg(t,e,n){t=hr(t,fr);const i=Ws(t),r={...Jm,...n};(function(a){if(a.maxAttempts<1)throw new A(k.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=new no;return new Zm(function(){return new Xm}(),i,r,o=>e(new Qm(t,o)),s).V(),s.promise}/**
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
 */(function(){Kf(`${pn}_lite`),sn(new Vt("firestore/lite",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new fr(new Yf(e.getProvider("auth-internal")),new Xf(r,e.getProvider("app-check-internal")),em(r,n),r);return i&&s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),ft("firestore-lite",ga,""),ft("firestore-lite",ga,"esm2020")})();Qe().id;const tg={C:0,Cs:1,Ds:3,E:4,Fs:6,G:7,A:9},sh=t=>{const[,e,n]=/^([A-G]s?)(\d)$/.exec(t);return(Number(n)+1)*12+tg[e]},ng=["A0","C1","Ds1","Fs1","A1","C2","Ds2","Fs2","A2","C3","Ds3","Fs3","A3","C4","Ds4","Fs4","A4","C5","Ds5","Fs5","A5","C6","Ds6","Fs6","A6","C7","Ds7","Fs7","A7","C8"],ig=["C1","G1","C2","G2","C3","G3","C4","G4","C5","G5","C6","G6","C7","G7"].map(sh),rg=Array.from({length:23},(t,e)=>e===22?108:21+e*4),ba=(t,e)=>e.flatMap(n=>[1,2,3].map(i=>({key:n,layer:i,url:`${t}/${n}-${i}.mp3`})));ng.map(t=>({key:sh(t),layer:1,url:`piano/${t}.mp3`})),ba("upright1",ig),ba("upright2",rg);const ka=1024;Float32Array.from({length:ka},(t,e)=>.5-.5*Math.cos(2*Math.PI*e/ka));const Yt={en:[["Bows up!","Deep breath!"],["Keep the bow going!","Keep the air going!"],["Tip: keep the bow moving evenly through the long notes.","Tip: keep your breath steady through the long notes."],[/fingerings, bowings and dynamics/g,"articulations and dynamics"],[/fingerings and dynamics/g,"articulations and dynamics"],["Good fingerings are a gift: pass them on.","Good markings are a gift: pass them on."],[/New fingerings, new ideas/g,"New markings, new ideas"],[/with your fingerings and marks/g,"with your marks"],[/All four strings in tune\./g,"In tune."]],de:[["Bogen hoch!","Tief Luft holen!"],[/deinen Fingersätzen, Strichen und deiner Dynamik/g,"deiner Artikulation und Dynamik"],[/Fingersätze, Striche und Dynamik/g,"Artikulation und Dynamik"]]},On={viola:{en:[[/violinists/g,"violists"],[/violinist/g,"violist"],[/Violin/g,"Viola"],[/violin/g,"viola"]],de:[[/Geigerinnen und Geiger/g,"Bratschistinnen und Bratschisten"],[/großer Geiger/g,"großer Bratschisten"],[/Geigenstimme|Violinstimme/g,"Bratschenstimme"],[/Violinstücke/g,"Bratschenstücke"],[/Geige|Violine/g,"Bratsche"]]},cello:{en:[[/violinists/g,"cellists"],[/violinist/g,"cellist"],[/Violin/g,"Cello"],[/violin/g,"cello"]],de:[["Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.","Du hörst das Cello so, wie es gespielt wurde, mit dem Klavier, und die Noten laufen mit."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Spiel zuerst mit dem Cello mit, dann schalte es aus und übernimm."],[/Geigerinnen und Geiger/g,"Cellistinnen und Cellisten"],[/großer Geiger/g,"großer Cellisten"],[/Geigenstimme|Violinstimme/g,"Cellostimme"],[/Violinstücke/g,"Cellostücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Cello`],[/Meine (Geige|Violine)/g,"Mein Cello"],[/die (Geige|Violine)/g,"das Cello"],[/der (Geige|Violine)/g,"dem Cello"],[/Geige|Violine/g,"Cello"]]},recorder:{en:[["Rosining the bow…","Warming up the recorder…"],["Polishing the strings…","Checking the finger holes…"],["Tip: try a little vibrato on the long notes.","Tip: hold the long notes still and even."],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins gently, without letting the pitch drift."],["Tip: keep the trilling finger light and close to the string.","Tip: keep the trilling finger light and close to its hole."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Give each one a clear start with the tongue."],["Tip: keep the bow on the string so every note sounds.","Tip: cover the holes fully so every note sounds."],["Tip: check your intonation against the open strings.","Tip: blow gently: too much air makes the notes sharp."],...Yt.en,[/violinists/g,"recorder players"],[/violinist/g,"recorder player"],[/Violin/g,"Recorder"],[/violin/g,"recorder"]],de:[["Bogen wird kolophoniert…","Die Blockflöte wird warm gespielt…"],["Saiten werden poliert…","Grifflöcher werden geprüft…"],["Bogen weiter!","Weiter blasen!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Blas sanft: Zu viel Luft macht die Töne zu hoch."],["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Halte die langen Töne ruhig und gleichmäßig."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Halte den Atem ruhig durch die langen Töne."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln behutsam, ohne dass die Tonhöhe wandert."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Halte den Trillerfinger locker und nah am Griffloch."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Stoß jeden Ton klar mit der Zunge an."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Deck die Löcher ganz ab, damit jeder Ton klingt."],...Yt.de,[/Geigerinnen und Geiger/g,"Blockflötistinnen und Blockflötisten"],[/großer Geiger/g,"großer Blockflötisten"],[/Geigenstimme|Violinstimme/g,"Blockflötenstimme"],[/Violinstücke/g,"Blockflötenstücke"],[/Geige|Violine/g,"Blockflöte"]]},voice:{en:[["Rosining the bow…","Warming up the voice…"],["Polishing the strings…","Clearing the throat…"],["Ling Ling is watching. Pick up the violin!","Ling Ling is listening. Warm up your voice!"],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins: grow and fade with your breath."],["Tip: keep the trilling finger light and close to the string.","Tip: keep trills light and even."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Sing them out clearly."],["Tip: keep the bow on the string so every note sounds.","Tip: start each note clearly so every one sounds."],["Tip: check your intonation against the open strings.","Tip: check your pitch against the piano."],["Tip: check the fingering where the wrong notes were.","Tip: sing the places with wrong notes slowly, with the piano."],["Wonderfully accurate fingers.","Wonderfully accurate."],["Play along with the violin first, then switch it off and take over.","Sing along with the melody first, then switch it off and take over."],...Yt.en,["Keep the air going!","Keep the breath going!"],[/violinists/g,"singers"],[/violinist/g,"singer"],[/Violin/g,"Voice"],[/violin/g,"voice"]],de:[["Bogen wird kolophoniert…","Die Stimme wird aufgewärmt…"],["Saiten werden poliert…","Noch ein Schluck Wasser…"],["Bogen weiter!","Weiter singen!"],["Ling Ling schaut zu. Nimm die Violine in die Hand!","Ling Ling hört zu. Sing dich ein!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Prüf deine Tonhöhe am Klavier."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Stütz die langen Töne mit ruhigem Atem."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln: mit dem Atem wachsen und abklingen."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Sing Triller leicht und gleichmäßig."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Sing sie klar aus."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Setz jeden Ton klar an, damit er klingt."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Sing zuerst mit der Melodie mit, dann schalte sie aus und übernimm."],...Yt.de,[/Geigerinnen und Geiger/g,"Sängerinnen und Sänger"],[/großer Geiger/g,"großer Sänger"],[/Geigenstimme|Violinstimme/g,"Gesangsstimme"],[/Violinstücke/g,"Lieder"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}eine Stimme`],[/Meine (Geige|Violine)/g,"Meine Stimme"],[/(die|der) (Geige|Violine)/g,"$1 Stimme"],[/Geige|Violine/g,"Gesang"]]}};On.choir={en:[["Rosining the bow…","Warming up the choir…"],["Polishing the strings…","Handing out the scores…"],["Ling Ling is watching. Pick up the violin!","Ling Ling is listening. Warm up your voice!"],["Tip: check your intonation against the open strings.","Tip: check your pitch against the other voices on the piano."],["Tip: check the fingering where the wrong notes were.","Tip: sing the places with wrong notes slowly, with your voice on the piano."],["Play along with the violin first, then switch it off and take over.","Sing along with your voice on the piano first, then switch it off and take over."],...On.voice.en.filter(([t])=>typeof t=="string"&&!["Rosining the bow…","Polishing the strings…","Ling Ling is watching. Pick up the violin!","Tip: check your intonation against the open strings.","Tip: check the fingering where the wrong notes were.","Play along with the violin first, then switch it off and take over."].includes(t)),...Yt.en.filter(([t])=>typeof t!="string"),[/violinists/g,"singers"],[/violinist/g,"singer"],[/Violin part/g,"Voice"],[/violin part/g,"voice"],[/Violin/g,"Voice"],[/violin/g,"voice"]],de:[["Bogen wird kolophoniert…","Der Chor singt sich ein…"],["Saiten werden poliert…","Die Noten werden verteilt…"],["Bogen weiter!","Weiter singen!"],["Ling Ling schaut zu. Nimm die Violine in die Hand!","Ling Ling hört zu. Sing dich ein!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Prüf deine Tonhöhe an den anderen Stimmen am Klavier."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Sing zuerst mit deiner Stimme am Klavier mit, dann schalte sie aus und übernimm."],...On.voice.de.filter(([t])=>typeof t=="string"&&!["Bogen wird kolophoniert…","Saiten werden poliert…","Bogen weiter!","Ling Ling schaut zu. Nimm die Violine in die Hand!","Tipp: Prüf deine Intonation an den leeren Saiten.","Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm."].includes(t)),...Yt.de.filter(([t])=>typeof t!="string"),[/Geigerinnen und Geiger/g,"Sängerinnen und Sänger"],[/großer Geiger/g,"großer Sänger"],[/Geigenstimme|Violinstimme/g,"Stimme"],[/Violinstücke/g,"Chorstücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}eine Stimme`],[/Meine (Geige|Violine)/g,"Meine Stimme"],[/(die|der) (Geige|Violine)/g,"$1 Stimme"],[/Geige|Violine/g,"Stimme"]]};({...tn.violin});On.any={en:[[/violinists/g,"musicians"],[/violinist/g,"musician"],[/Violin/g,"Instrument"],[/violin/g,"instrument"],[/([Aa]) (?=[Ii]nstrument)/g,"$1n "]],de:[[/Geigerinnen und Geiger/g,"Musikerinnen und Musiker"],[/großer Geiger/g,"großer Musiker"],[/Geigenstimme|Violinstimme/g,"Solostimme"],[/Violinstücke/g,"Stücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Instrument`],[/Meine (Geige|Violine)/g,"Mein Instrument"],[/die (Geige|Violine)/g,"das Instrument"],[/der (Geige|Violine)/g,"dem Instrument"],[/Geige|Violine/g,"Instrument"]]};const Mr="";function sg(t,e,n){var o;const i=((o=On[e.id])==null?void 0:o[n])??[],r=i.find(([a])=>a===t);if(r)return r[1];let s=t.split("violinhero.crescendu.com").join(new URL(e.app.url).host).split("Violin-Hero").join(Mr).split("Violin Hero").join(Mr);for(const[a,l]of i)typeof a!="string"&&(s=s.replace(a,l));return s.split(Mr).join(e.app.name)}function Ii(t,e,n){return typeof t=="string"?sg(t,e,n):typeof t=="function"?(...i)=>{const r=[],s=i.map(a=>typeof a=="string"?`${r.push(a)-1}`:a),o=Ii(t(...s),e,n);return typeof o=="string"?o.replace(/\u0002(\d+)\u0003/g,(a,l)=>r[Number(l)]):o}:Array.isArray(t)?t.map(i=>Ii(i,e,n)):t&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype?Object.fromEntries(Object.entries(t).map(([i,r])=>[i,Ii(r,e,n)])):t}const va=new WeakMap;function og(t,e){const n=Qe();if(n===tn.violin)return t;let i=va.get(t);i||va.set(t,i=new Map);const r=`${n.id}/${e}`;return i.has(r)||i.set(r,Ii(t,n,e==="de"?"de":"en")),i.get(r)}const $t=(t,e,n)=>`${t} ${t===1?e:n}`,He=["Romantik","diese Musik","Klassik","Barock","Volksmusik","Fiddle-Musik","Klezmer","diesen Stil"],Sa=(t,e)=>[t&&$t(t,"Glissando","Glissandi"),e&&$t(e,"Schleifer","Schleifer")].filter(Boolean).join(", "),Wt=(t,e)=>t.toFixed(e).replace(".",","),ag={versionTitle:(t,e)=>`Version ${t}, Commit ${e}`,darkMode:"Dunkles Design",lightMode:"Helles Design",themeMenu:"Aussehen: hell oder dunkel, Farben",schemes:{blue:"Ozean",violet:"Pflaume",teal:"Lagune",rose:"Himbeere",graphite:"Graphit"},helpTitle:"Anleitung (?)",helpLabel:"Anleitung zu Violin Hero",tools:{key:"Werkzeuge",title:"Werkzeuge: Stimmgerät und mehr",tuner:"Stimmgerät",tunerLead:"Geige stimmen",setup:"Audio-Einrichtung",setupLead:"Mikrofon und Lautsprecher, Eingangspegel, Verzögerung",setupVideo:"Audio-/Video-Einrichtung",setupVideoLead:"Mikrofon, Lautsprecher und Kamera, Eingangspegel, Verzögerung",more:"Mehr Werkzeuge",moreLead:"Werkzeuge wie den Vibralizer im Marketplace hinzufügen",moduleFailed:"Dieses Werkzeug ließ sich nicht laden. Prüf deine Verbindung und versuch es noch einmal.",close:"Schließen"},marketTitle:"Violin Hero Marketplace: mehr Content Packs",overlay:{marketplace:"Content Packs und Tools für Violin Hero",halloffame:"Die besten Aufnahmen, Spieler und Stücke",close:"Zurück zu Violin Hero"},languageTitle:t=>`Sprache: ${t}`,languageMenu:"Sprache wählen",tempo:"Tempo",click:"Klick",metronome:"Metronom",practice:"Üben",fullscreen:"Seitenansicht der Geigenstimme",leaveFullscreen:"Zurück zur normalen Ansicht (Esc)",dragBar:"Ziehen, um die Leiste zu verschieben",pageSize:"Notengröße",pageVoices:"Alle Stimmen",pageVoicesTitle:"Alle Stimmen des Chors in den Noten zeigen oder nur deine",pageSizes:{small:"Klein: mehr Takte pro Zeile",medium:"Mittel",large:"Groß: besser lesbar und leichter zu bearbeiten"},piano:"Klavier",pianoModel:"Instrument",staves:"Noten",violin:"Violine",humanize:"Ausdruck",reverb:"Hall",volume:"Lautstärke",pianos:{grand:"Flügel",upright1:"Klavier 1",upright2:"Klavier 2"},startStop:"Wiedergabe",play:"Start",pause:"Pause",playTitle:"Start / Pause (P; Doppelklick: zurück zum Anfang)",navigation:"Navigation",back:"Zurück",forward:"Vor",backTitle:"Einen Takt zurück (Doppelklick: zum Anfang)",forwardTitle:"Einen Takt vor (Doppelklick: zum Ende)",take:"Aufnahme",record:"Aufnehmen",stop:"Stopp",recordTitle:"Aufnehmen (R)",finishMarking:"Erst das Bezeichnen abschließen (Esc)",clear:"Löschen",sure:"Sicher?",clearTitle:"Aufnahme löschen",clearConfirmTitle:"Noch einmal drücken, um die Aufnahme zu löschen",share:"Teilen",shareTitle:"Deine Aufnahme teilen",shareScoreTitle:"Deine Einrichtung dieses Stücks teilen (als Link)",section:"Abschnitt",marker:"Marke",markerTitle:"Einen Abschnitt markieren (M)",repeat:"Wiederholen",repeatTitle:"Den Abschnitt wiederholen (L; Doppelklick: zu seinem Anfang)",input:"Eingang",inputGain:"Eingangspegel",level:"Schwierigkeitsgrad",levels:["Anfänger","Leicht","Mittel","Fortgeschritten","Virtuos"],genre:"Genre",allGenres:"Alle",allLevels:"Alle",genres:{early:"Alte Musik",baroque:"Barock",classical:"Klassik",romantic:"Romantik",modern:"Moderne & Gegenwart",concertos:"Konzerte",sonatas:"Sonaten",showpieces:"Virtuosenstücke",salon:"Salonstücke",dances:"Tänze",opera:"Oper & Operette",sacred:"Geistliche Musik",etudes:"Etüden",carols:"Weihnachten",wedding:"Hochzeit",children:"Kinderlieder",folk:"Volkslieder",celtic:"Keltisch & Fiddle",bluegrass:"Bluegrass & Country",hungarian:"Ungarisch & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & Swing",film:"Film- & Spielmusik",pop:"Pop, Rock & Musical",warmups:"Einspielübungen",scales:"Tonleitern",technique:"Technik & Übungen"},piece:"Stück",placeOf:(t,e)=>`${t} von ${e}`,scoreLabel:"Noten",scorePdfTitle:"Die Violinstimme als PDF, zum Drucken oder Herunterladen",fingeringsBy:t=>`Noten wurden eingerichtet von ${t}`,fingeringsAdded:"Noten wurden eingerichtet",pieceCount:t=>t?$t(t,"Stück","Stücke"):"Keine Stücke",lockedCount:t=>`${t} gesperrt`,noneUnlocked:"keins freigeschaltet",noPieces:"Hier gibt es keine Stücke: probier einen anderen Schwierigkeitsgrad",interpretation:"Interpretation",choirVoice:"Deine Stimme",mixer:{choir:"Chor",timeline:{bar:"Takt",zoom:"Zoom",ruler:"Zeitleiste: klicken setzt den Abspielkopf, ziehen verschiebt die Ansicht",barsShort:"T.",lane:"Szenen",edit:"Szenen schneiden und kleben",hand:"Hand: klicken wählt eine Szene, ziehen verschiebt die Ansicht (H)",razor:"Rasierklinge: in eine Szene klicken teilt sie dort (B)",glue:"Klebetube: nahe einem Schnitt klicken fügt die beiden Szenen zusammen (G)",snap:"Auf den Schlag einrasten"},video:{title:"Video",popOut:"In eigenem Fenster öffnen",popBack:"Zurück in die Seite",credits:"Es sangen",brand:"Choir Hero",points:"Punkte",general:"Video",format:"Format",formats:{landscape:"Quer 16:9",portrait:"Hoch 9:16"},fps:"Bildrate",fpsKinds:{30:"30 Bilder pro Sekunde",60:"60 Bilder pro Sekunde: flüssiger, dauert doppelt so lange"},fpsTitle:"Bilder pro Sekunde des fertigen Videos: 60 läuft flüssiger und dauert etwa doppelt so lange",intro:"Intro",outro:"Abspann",scoreBadge:"Punkte",effects:"Effekte",effectKinds:{none:"Keine",grayscale:"Graustufen",grain16:"Film 16mm",grain8:"Film 8mm",vhs:"VHS",super8:"Super 8",anime:"Anime"},intensity:"Intensität",grade:"Farbkorrektur",assets:"Assets",backdrop:"Hintergrund",overlay:"Overlay",overlayBlends:{screen:"Aufhellen",add:"Addieren",overlay:"Überlagern",soft:"Weich",multiply:"Abdunkeln",normal:"Normal"},backdropKinds:{theme:"Thema",photo:"Foto",video:"Video"},backdropTheme:"Die Hintergrundfarbe des Themas",assetsDrop:"Bilder und Videos hierher ziehen",assetsChoose:"Dateien wählen",assetsStock:"Stock",assetsOwn:"Deine Medien",assetsNoStock:"Noch kein Stock-Material",assetsNoOwn:"Noch nichts: Was du hochlädst, landet in deinen Medien (auch deine Profilseiten können es nutzen)",assetsSignIn:"Melde dich an, um Bilder und Videos hochzuladen",assetUse:"Als Hintergrund nehmen",assetInUse:"Der Hintergrund (Klick: zurück zum Thema)",assetRemove:"Aus deinen Medien nehmen (die Datei bleibt)",assetSure:"Sicher?",overlayUse:"Als Overlay nehmen",overlayInUse:"Das Overlay (Klick: kein Overlay)",editorCompact:"Nur die ersten Reihen zeigen",editorExpand:"Alle Einstellungen zeigen",gradeLooks:{neutral:"Neutral",warm:"Warm",cool:"Kühl",vivid:"Lebhaft",cinema:"Kino",faded:"Verblasst",custom:"Eigene"},gradeKeys:{brightness:"Helligkeit",contrast:"Kontrast",saturation:"Sättigung",temperature:"Temperatur"},gradeScope:{videos:"Singende",whole:"Ganzes Bild"},gradeScopeTitle:{videos:"die Videos der Singenden werden korrigiert (der Hintergrund hat eigene Regler)",whole:"das ganze Bild wird korrigiert, auch Titel, Hintergrund und Noten"},paperOpacity:"Deckkraft",logo:"Logo",autoScenes:"Auto",autoScenesTitle:"Die Noten auswerten und Schnitte und Szenen vorschlagen (ersetzt die vorhandenen Szenen)",autoSure:"Ersetzen?",scene:"Szene",sceneOf:(t,e)=>`Szene ${t} von ${e}`,pickScene:"Wähle eine Szene in der Zeitleiste",previewRate:"Die Vorschau gerade: Bildhöhe und Bilder pro Sekunde (von selbst gesenkt, um 10 pro Sekunde zu halten)",previewOff:"Öffne den Videoplayer, um die Qualität der Vorschau zu sehen",mood:"Thema",variant:"Variante",variants:{original:"Original",pastel:"Pastell",vivid:"Kräftig",dark:"Dunkel"},moods:{none:"Keins",plain:"Schlicht",spring:"Frühling",summer:"Sommer",autumn:"Herbst",winter:"Winter",christmas:"Weihnachten",night:"Nacht",gala:"Gala",romantic:"Romantisch",party:"Party",retro:"Retro",pop:"Pop"},colours:"Farben",transitions:"Übergänge",transitionKinds:{none:"Aus",fade:"Blende",animate:"Animiert",playful:"Verspielt"},duration:"Dauer",notesShort:"Noten",notesPlaces:{below:"Unten",top:"Oben",over:"Mitte"},notesLayers:{separate:"Getrennt",overlay:"Überlagert"},notesLayersTitle:{separate:"Die Noten in einem eigenen Streifen, die Sänger·innen machen ihnen Platz",overlay:"Die Noten über den Sänger·innen, ohne Platz zu nehmen (in der Mitte immer)"},off:"Aus",notesStyles:{simple:"Einfach",pages:"Seiten",float:"Schweben",wave:"Welle",spot:"Spot"},shapes:"Formen / Muster",shapesPlaces:{top:"Oben",bottom:"Unten",left:"Links",right:"Rechts",border:"Rand",everywhere:"Überall"},shapesMotions:{draw:"Zeichnen",pattern:"Muster",fall:"Fallen",grow:"Wachsen",pulse:"Pulsieren",glow:"Leuchten",blur:"Weich"},groupsShort:"Stimmgruppe",sceneBackTitle:"Zum Anfang der Szene, dann zur vorigen (Doppelklick: zum Anfang)",sceneForwardTitle:"Zur nächsten Szene (Doppelklick: zum Ende)",choirName:"Chor",size:"Größe",animation:"Animation",shapesTitle:"Formen über dem Video, in dieser Szene: am Rand oder übers ganze Bild, im Stil des Themas, eines Malers oder verspielt",notesTitle:"Die Noten in dieser Szene: unter den Sänger·innen oder darüber, der Abspielkopf folgt der Musik",primary:"Primär",secondary:"Sekundär",arrangement:"Anordnung",scenes:"Fokus",faces:"Gesicht",facesTitle:"Wie nah jede Kachel den Kopf der Sängerin oder des Sängers zeigt: links das ganze Bild, rechts der Kopf in Nahaufnahme",grid:"Raster",fullPicture:"Vollbild",side:"Nebeneinander",stack:"Übereinander",featureLeft:"Groß links",featureRight:"Groß rechts",featureTop:"Groß oben",pip:"Bild im Bild",twoBig:"Zwei groß",mosaic:"Mosaik",depth:"Tiefe",crane:"Kranfahrt",tileCount:"Kacheln",tileCountTitle:"Wie viele Sänger·innen diese Szene zeigt (Zahl eintippen oder durchschalten). Ein Klick auf eine Kachel im Videoplayer zeigt dort jemand anderen",allTiles:t=>`Alle (${t})`,autoLook:"Auto",autoLookTitle:"Anordnung, Zahl der Kacheln und wer groß ist danach wählen, was die Noten in dieser Szene tun (wie Auto für alle Szenen)",shape:"Form",tileShapes:{rect:"Rechteck",square:"Quadrat",circle:"Kreis",heart:"Herz",hexagon:"Sechseck",diamond:"Raute"},animAdd:"Animation hinzufügen",animRemove:"Animation entfernen",animStart:"Anfang der Animation",animEnd:"Ende der Animation",animNames:{face:"Gesicht",tilt:"Neigung",borderWidth:"Rahmenbreite",glow:"Leuchten",opacity:"Deckkraft",shapeSize:"Größe",rotation:"Drehung",radius:"Ecken",notesSize:"Noten: Größe",notesAmount:"Noten: Deckkraft",notesMix:"Noten: Effekt",shapesSize:"Formen: Größe"},animHeld:"Setze den Abspielkopf in diese Szene, um Anfang oder Ende der Animation zu verschieben",animStartShort:"Anfang",animEndShort:"Ende",animPinTitle:(t,e)=>`${t}: ${e} (ziehen verschiebt es)`,animSceneOnly:"Nur die Regler im Tab Szene lassen sich animieren",animOff:"Zum Animieren erst einschalten",animStartTitle:"Wo die Animation beginnt: auf ihren Wert ziehen, sie übernimmt den Moment des Abspielkopfs",animEndTitle:"Wo die Animation endet: auf ihren Wert ziehen, sie übernimmt den Moment des Abspielkopfs",tileOpacity:"Deckkraft",rotation:"Drehung",ringWidth:"Ringbreite",outlineWidth:"Konturbreite",rounding:"Rundung",tileBack:"Vorherige Person",tileNext:"Nächste Person",pickSinger:"Hier zeigen",shownElsewhere:"In einer anderen Kachel dieser Szene: Auswählen tauscht die beiden",voices:"Nach Stimmen",risers:"Chorstufen",wallLeft:"Wand links",wallRight:"Wand rechts",rows:"Reihen",cols:"Spalten",wallLeftFade:"Wand links, laufend",wallRightFade:"Wand rechts, laufend",cubes:"Würfel",carousel:"Karussell",shuffle:"Puzzle",wave:"Welle",orbit:"Kamerafahrt",gallery:"Galerie",notesMix:{none:"Kein Effekt",effect:t=>`Effekt ${t} %`,withPaper:(t,e)=>`Effekt ${t} % · Papier ${e} %`},motion:{still:"Bewegung",stillTitle:"Nur die bewegten Anordnungen bewegen sich",title:"Wie sich die Kacheln in dieser Anordnung bewegen",speed:t=>`Tempo ${t} Kacheln/s`,turn:t=>`Eine Runde in ${t} s`,rest:t=>`Je Seite ${t} s`,swap:t=>`Tausch alle ${t} s`,height:t=>`Höhe ${t} %`,swing:t=>`Ein Schwenk in ${t} s`},tilt:{none:"Keine Neigung",by:(t,e)=>`Neigung ${t}° ${e}`,left:"links",right:"rechts",top:"oben",bottom:"unten",title:"Neigt die Kacheln perspektivisch, die linke oder rechte Seite nach hinten (Doppelklick: wieder flach)",titleUpright:"Neigt die Kacheln perspektivisch, oben oder unten nach hinten (Doppelklick: wieder flach)"},lines:"Kacheln",borderKinds:{primary:"Primärfarbe",secondary:"Sekundärfarbe",voices:"Stimmfarbe"},glow:"Leuchten",glowTitle:"Wie stark jede Kachel in ihrer Stimmfarbe leuchtet, während die Sängerin oder der Sänger singt (0: gar nicht)",border:"Rahmen",borderWidth:"Rahmenbreite",background:"Hintergrund",spacing:"Abstand",corners:"Ecken",overlays:"Einblendungen",titles:"Titel",names:"Namen",previousChoice:"Vorherige",nextChoice:"Nächste"},choirOn:"Chor",pan:"Panorama",left:"L",panShort:"Pan",tuning:"Tuning",right:"R",centre:"M",volume:"Lautstärke",on:"An",onHint:"An: im Mix zu hören",offHint:"Aus: stumm",mute:"Stumm",muteHint:"Mute: diesen Kanal stumm schalten",mutedHint:"Stumm: drücken, um ihn wieder zu hören",silencedHint:"Stumm, solange ein anderer Kanal solo ist",solo:"Solo",soloHint:"Solo: nur diesen Kanal hören (mit jedem anderen auf Solo)",soloedHint:"Solo: drücken, um wieder alle Kanäle zu hören",tune:"Autotune",tuneValue:t=>t?`Autotune ${t}: ${t<35?"sanfte":t<75?"deutliche":"harte"} Tonhöhenkorrektur`:"Autotune aus: die Aufnahme, wie gesungen",deviation:"Abweichung (der äußere Ring): wie weit die Stimme gerade neben dem Ton liegt, rechts nach oben, links nach unten zu korrigieren. Korrektur (der Bogen innen): wie viel Autotune davon zurückholt",intonation:"Stimmung",intonationHint:"Worauf Klavier und Autotune stimmen: gleichstufig, oder rein, die Töne jedes Akkords sauber zu seinem Grundton",equal:"Gleichstufig",equalShort:"Gleich",just:"Rein",groupPan:"Panorama aller Stimmen der Gruppe",master:"Master",reverb:"Hall",noPart:"Andere",loading:"Wird geladen…",noTake:"Noch keine Aufnahme dieses Stücks",failed:"Die Aufnahme ließ sich nicht laden",choirOff:"Der Chor ist ausgeschaltet",whileListening:"Stumm, während du einer Interpretation zuhörst",standardView:"Spielt in der Standardansicht",ownChosen:"Deine in der App gewählte Aufnahme spielt schon mit",otherSettings:"Mit anderen Einstellungen aufgenommen: sie spielt nur bei 100 % Tempo mit, ohne Humanisieren und ohne Interpretation",signIn:"Melde dich an, um deinen Chor zu hören: die Aufnahmen aller Mitglieder von diesem Stück, mit dir zusammen gesungen.",noChoir:"Sing in einem Chor auf Crescendu mit, dann singen hier die Aufnahmen der anderen Mitglieder mit dir.",notFitting:"Die Aufnahmen deines Chors spielen nur bei 100 % Tempo mit, ohne Humanisieren und ohne Interpretation.",empty:"In diesem Chor hat noch niemand eine Aufnahme dieses Stücks veröffentlicht: veröffentliche deine über ihre Bewertungskarte.",takes:t=>t===1?"1 Aufnahme":`${t} Aufnahmen`,transport:"Transport",recording:{published:"Aufnahme im Chor veröffentlicht",local:"Deine Aufnahme, nicht veröffentlicht: von hier durchs Mischpult gespielt",none:"Noch keine Aufnahme"},compact:"Autotune, Pan und EQ ausblenden",loadLevels:["niedrig","mittel","hoch","kritisch"],loadSources:{render:"die Audioverarbeitung selbst",pressure:"der ganze Computer"},loadDropouts:"Dieser Browser meldet die Auslastung nicht: Die Lampe blinkt rot, wenn der Ton aussetzt (der Computer kam nicht mit)",loadTitle:(t,e)=>`Auslastung: ${t} (${e}). Rot heißt: Der Computer kommt nicht mehr mit. Schalte Autotune auf einigen Kanälen aus oder schließe andere Programme.`,loadUnknown:"Auslastung: noch unbekannt",loadGlitch:"Der Ton ist eben kurz ausgesetzt: Der Computer kam nicht mit. Schalte Autotune auf einigen Kanälen aus oder schließe andere Programme.",expand:"Autotune, Pan und EQ einblenden",groups:"Gruppen",groupsHint:"Die Fader der Stimmgruppen zeigen (ausgeblendet lassen sie die Mischung, wie sie ist)",eq:"Equalizer",eqTitle:t=>`EQ · ${t}`,eqOpen:"Equalizer: klicken zum Einstellen",lowCut:"Low Cut",mid:"Mitten",highShelf:"High Shelf",close:"Schließen",gate:"Gate",comp:"Kompressor",gateTitle:t=>`Gate · ${t}`,compTitle:t=>`Kompressor · ${t}`,gateHint:"Gate: macht Atmer und Geräusche zwischen den Phrasen leise. Klicken zum Einstellen",compHint:"Kompressor: gleicht die Lautstärke der Stimme aus. Klicken zum Einstellen",threshold:"Schwelle",range:"Absenkung",ratio:"Verhältnis",makeup:"Ausgleich",off:"Aus",switchOff:"Ausschalten",dynInput:"Eingang",dynOutput:"Ausgang",preEq:"Vor dem EQ",postEq:"Nach dem EQ",gateOpen:"Offen",gateClosed:t=>`Geschlossen · ${t}`,reducing:t=>`Reduziert ${t}`,notReducing:"Reduziert nicht",silent:"Kein Ton",gr:"GR",plugOn:"An",plugOff:"Aus",plugSwitch:t=>`${t} an oder aus`,memberOn:t=>`${t}: zu hören (drücken zum Stummschalten)`,memberOff:t=>`${t}: stumm (drücken zum Abspielen)`},choirMe:"Ich",accompaniment:"Begleitung",choirOthers:"Andere",mixLabel:"Mix",choirShare:{key:"Veröffentlichen",keyTitle:"Diese Aufnahme mit deinem Chor teilen oder per Link senden",title:"Aufnahme teilen",lead:"Veröffentliche sie in deinem Chor: Die Mitglieder hören sie in ihrem Mischpult und singen mit ihr.",replaces:"Ersetzt deine bisherige Aufnahme dieses Stücks dort.",done:"Veröffentlicht",notEligible:"In den Chor kommt nur eine Aufnahme des ganzen Stücks bei 100 % Tempo mit ihrer Wertung. Per Link senden kannst du sie trotzdem.",linkTitle:"Per Link senden",linkLead:"Alle mit dem Link können sie anhören.",link:"Link senden"},choirGroups:{soprano:"Sopran",alto:"Alt",tenor:"Tenor",bass:"Bass"},defaultWritten:"Standard",defaultNone:"Keine Interpretationen",recordings:"Aufnahmen",recordingsNone:"Keine",recordingsEmpty:"Noch keine Aufnahmen",you:"Du",loop:"Schleife",playTake:(t,e)=>`Deine Aufnahme abspielen (${t}, ${e})`,stopRecording:"Die Aufnahme anhalten",playRecording:(t,e)=>`Die Aufnahme abspielen (${t}${e?", auf YouTube":""})`,chooseRecording:"Wähle eine Aufnahme, um sie abzuspielen",hints:{playPause:"Start / Pause",record:"aufnehmen",bar:"Takt",marker:"Marke",repeat:"wiederholen",violin:"Violine",piece:"Stück",yourTake:"deine Aufnahme",recording:"Aufnahme",help:"Hilfe"},panels:{navigation:"Transport",playback:"Einstellungen",repertoire:"Repertoire",mixer:"Mischpult"},panelsShort:{navigation:"Transp.",playback:"Einst.",repertoire:"Rep.",mixer:"Misch."},panelOpen:t=>`${t} zeigen`,panelClose:t=>`${t} ausblenden`,controls:"Steuerung",stopVideo:"Das Video anhalten",resizeVideo:"Ziehen, um die Größe des Videos zu ändern",flags:{loadingRecording:"Aufnahme lädt",aligning:(t,e)=>t==="spectrum"?`Spektrum wird analysiert ${e} %`:t==="aligning"?`Tempo wird erkannt: ${e} % der Noten`:`Klaviertöne werden abgeglichen ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violine stummgeschaltet",muted:t=>`${t}: stumm`,pianoOff:"Klavier stummgeschaltet",rec:"Rec",yourTake:"▶ Deine Aufnahme",takeOf:t=>`▶ Aufnahme von ${t}`,repeat:"Wiederholung",loadingSounds:"Klänge laden",loadingPiano:"Klaviersound laden",loadingViolin:"Violine lädt",noMicrophone:"Kein Mikrofon",savingToAccount:"Wird in deinem Benutzerkonto gespeichert",savedToAccount:"✓ In deinem Konto gespeichert",keptForLater:"Im Speicher: wird später in deinem Konto gespeichert",openingTake:"Deine Aufnahme lädt",takeNotOpened:"Deine Aufnahme konnte nicht geladen werden",syncing:t=>`${$t(t,"Aufnahme wird","Aufnahmen werden")} in deinem Konto gespeichert`,synced:t=>`✓ ${$t(t,"Aufnahme","Aufnahmen")} in deinem Konto gespeichert`,sharing:"Link zu deiner Aufnahme wird erstellt",shareFailed:"Die Aufnahme konnte nicht geteilt werden",signInToShare:"Melde dich an, um deine Aufnahmen zu teilen",openingShared:"Freigegebene Aufnahme lädt",sharedNotOpened:"Die freigegebene Aufnahme konnte nicht geladen werden",tapToPlay:"Tippe irgendwo, um abzuspielen",speakersHeard:"Klavier im Mikrofon gehört: nimm Kopfhörer",phoneMode:"Bluetooth-Headset im Telefonmodus: nimm Kopfhörer mit Kabel oder das eingebaute Mikrofon"},messages:{soundsFailed:"Die Sounds konnten nicht geladen werden",scoreFailed:"Die Noten konnten nicht geladen werden",pianoFailed:"Das Klavier konnte nicht geladen werden",recordingFailed:"Die Aufnahme konnte nicht geladen werden",noTimingYet:t=>`Noch kein Timing: braucht ${t}`,noTimingVideo:"Kein Timing für dieses Video",videoFailed:"Das Video konnte nicht geladen werden",loadingScore:"Noten laden…",engraving:"Noten werden gesetzt…"},edited:"↺ Bearbeitet",revertQuestion:"Zurücksetzen?",editedTitle:"Bearbeitet: klicken, um alle Änderungen zu verwerfen",revertConfirmTitle:"Noch einmal klicken, um alle Änderungen zu verwerfen",versionClearTitle:"Die Einrichtung dieser Version verwerfen",versionClearConfirmTitle:"Noch einmal klicken, um alle Einrichtungen dieser Version zu verwerfen",curveDefault:"Standard",curveDefaultTitle:"Wie notiert, mit Ausdruck",curveRecordingTitle:t=>`Die Aufnahme: ${t}`,wrongNote:"Falscher Ton!",noteMissed:"Ton fehlt!",wrongShort:"Falsch",missedShort:"Fehlt",stickerTimeShort:t=>`${Wt(t,2)} s`,stickerPitch:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,stickerPitchTitle:(t,e)=>`${e?"Zu hoch":"Zu tief"}: ${t}`,stickerTime:(t,e)=>`${Wt(t,2)} s zu ${e?"spät":"früh"}`,annotate:"Die ausgewählten Noten bezeichnen",notesSelected:t=>$t(t,"Note","Noten"),finger:t=>`Finger ${t}`,openString:"Leere Saite (0)",downBow:"Abstrich",upBow:"Aufstrich",staccato:"Staccato",accent:"Akzent",tenuto:"Tenuto",harmonic:"Flageolett",breath:"Atemzeichen: hier atmen",consonantGroup:"Schlusskonsonant",consonantAt:t=>t?`Schlusskonsonant ${t===.5?"eine Achtel":t===1?"eine Viertel":"eine Halbe"} vor dem Notenende`:"Schlusskonsonant genau aufs Notenende",consonantMark:(t,e,n)=>e==="unheard"?`„${t}“ hier nicht gehört`:e==="on"?`„${t}“ genau an seinem Platz`:`„${t}“ ${Math.abs(n??0)} ms zu ${e==="late"?"spät":"früh"}`,dynamicTitle:t=>`Dynamik: ${t}`,fermata:"Fermate",slur:"Bindebogen",crescendo:"Crescendo (<)",diminuendo:"Decrescendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Nicht solange eine Aufnahme gewählt ist: sie passt nur zu ihrem Timing",revert:"Zurücksetzen",revertTitle:"Zurück zu den Zeichen in den Noten",fx:{boo:["Buh!","Autsch!","Huch!","Hoppla!","Igitt!"],late:["Zu spät!","Aufwachen!","Zu langsam!"],early:["Warte!","Zu früh!","Halt!"],short:["Zu kurz!","Länger halten!","Bogen weiter!"],surf:["Welle!","Cowabunga!","Reite sie!"],snowboard:["Yeah!","Cooler Slide!","Wusch!"],ski:["Juhu!","Abfahrt!","Wusch!"],penguin:["Juhuu!","Bauchrutscher!","Rutsch!"],tweet:"Piep!",buzz:"Summ!",trill:"Trrriller!",chirp:"Zirp!",vibrato:["Vibrato!","So warm!","Herrlich!","Es singt!"]},signIn:"Anmelden",signedInAs:t=>`Angemeldet als ${t}`,createAccount:"Konto erstellen",createAccountButton:"Konto erstellen",haveAccount:"Schon ein Konto? Anmelden",forgotPassword:"Passwort vergessen?",or:"oder",google:"Mit Google anmelden",facebook:"Mit Facebook anmelden",merge:{title:"Konten zusammenführen",lead:"Du hast schon ein Crescendu-Konto mit",steps:["Wir legen kein zweites Konto an: Facebook wird zu deinem bestehenden Konto hinzugefügt.","Melde dich dafür einmal so an wie bisher, mit Google oder deinem Passwort, und klick auf „Zusammenführen“.","Danach kommst du mit beidem in dasselbe Konto, mit allem, was darin ist."],google:"Mit Google zusammenführen",orPassword:"oder mit deinem Passwort",button:"Zusammenführen",cancel:"Jetzt nicht",otherAccount:t=>`Das war ein anderes Konto. Melde dich mit ${t} an.`},agree:["Wenn du fortfährst, stimmst du unseren "," zu und hast unsere "," gelesen."],termsName:"Nutzungsbedingungen",privacyName:"Datenschutzerklärung",close:"Schließen",email:"E-Mail",password:"Passwort",passwordHint:t=>`Mindestens ${t} Zeichen`,accountLead:t=>`Violin Hero funktioniert auch ohne Konto. Angemeldet werden deine Aufnahmen in deinem Konto gespeichert${t?`, auch ${t===1?"die Aufnahme":`die ${t} Aufnahmen`}, die in diesem Browser warten`:""}.`,enterEmailFirst:"Gib zuerst deine E-Mail-Adresse ein.",resetSent:t=>`Wir haben dir einen Link zum Zurücksetzen an ${t} geschickt.`,confirmEmail:"Bitte bestätige deine E-Mail-Adresse: Der Link ist in deinem Posteingang.",anonymous:"Anonym",save:"Speichern",nicknameTaken:t=>`„${t}“ ist schon vergeben. Probier einen anderen!`,nicknameInvalid:"Ein Spitzname darf kein „/“ enthalten.",pickNickname:"Spitznamen wählen",nicknameDialog:{title:"Wähl deinen Spitznamen",lead:"Er steht bei deinen Aufnahmen in den Bestenlisten und der Hall of Fame. Andere sehen nur diesen Namen, also nimm einen, der öffentlich sein darf.",label:"Spitzname",save:"Spitznamen speichern",later:"Später"},signOut:"Abmelden",profile:"Profil",roles:"Was hast du vor?",creatorDashboard:"Dein Creator-Dashboard",invite:"Freund oder Freundin einladen",inviteCopied:"Link kopiert: schick ihn weiter!",inviteFailed:"Der Link ließ sich nicht kopieren",inviteText:"Üb mit mir in Violin Hero: spiel mit dem Klavier, sieh, wie sauber du spielst, und nimm dich auf.",feedback:"Feedback & Fehler melden",hintTitle:"Melde dich an, um deine Aufnahmen und deine Fortschritte zu speichern",scoreHintTitle:"Melde dich an, um Noten zu drucken",scoreHintText:"Druckbare Noten mit deinen Fingersätzen und Zeichen gibt es für angemeldete Spieler.",shareHintTitle:"Melde dich an, um deine Einrichtung zu teilen",shareHintText:"Deine Fingersätze, Striche und Dynamik bekommen einen eigenen Link: Schick ihn deiner Lehrkraft oder deinem Pultnachbarn.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"deine",shareScoreDone:{headlines:[["Link kopiert!","Deine Einrichtung kann geteilt werden."],["Ab damit!","Deine Fingersätze und Dynamik haben jetzt einen eigenen Link."],["Bereit zum Teilen!","Selbst eingerichtete Noten: Das ist echte Musikalität."]],ready:["Dein Link","Kopier ihn, und deine Einrichtung kann geteilt werden."],anywhere:"Schick ihn, wie du magst. Wer ihn öffnet, bekommt das Stück mit deinen Fingersätzen, Strichen und deiner Dynamik, unter deinem Namen bei seinen Stücken.",who:["Deine Lehrkraft","Dein Pultnachbar","Dein Orchester","Deine Freunde"],cheers:["Gute Fingersätze sind ein Geschenk: Gib sie weiter.","Deine Lehrkraft wird sehen wollen, wie du über die Musik denkst.","Ling Ling richtet jede Stimme ein. Jetzt du auch.","Geteilte Einrichtung, weniger falsche Töne, mehr Musik."]},sharedScore:{sharedBy:t=>`${t} hat die Einrichtung mit dir geteilt`,sharedByAnyone:"Jemand hat die Einrichtung mit dir geteilt",yours:"Deine eigene Einrichtung",you:"deine",someone:"geteilt",intro:"Eingerichtete Noten zum Üben: Fingersätze, Striche und Dynamik an den Noten, so gespielt wie eingetragen.",kinds:{fingerings:"Fingersätze",bowings:"Striche",articulations:"Artikulationen",dynamics:"Dynamik",phrasing:"Bögen, Fermaten und rit."},cheers:["Voneinander lernen: So wachsen Musiker.","Jemand hat beim Einrichten an dich gedacht.","Neue Fingersätze, neue Ideen: Probier sie aus!","Gemeinsam üben, auch aus der Ferne."],open:"Noten öffnen",later:"Nicht jetzt",addedAs:(t,e)=>`Bei deinen Stücken als „${t} – ${e}“ neben dem Original.`},hintText:t=>`${t>1?`${t} Aufnahmen warten`:"Deine Aufnahme wartet"} in diesem Browser, bis du dich anmeldest, und ${t>1?"werden":"wird"} dann in deinem Konto gespeichert, mit den Stücken, die du freigeschaltet hast.`,hintDismiss:"Nicht mehr anzeigen",graphShow:"Tempo- und Lautstärkekurve zeigen",graphHide:"Tempo- und Lautstärkekurve ausblenden",logoHintTitle:"Deine Startseite ist hier oben",startPage:"Zur Startseite",logoHintText:"Tipp auf das Violin-Hero-Symbol, um die Startseiten wieder zu öffnen: Geige stimmen und ein Stück wählen.",recordHints:["Noch ein Versuch? Starte eine neue Aufnahme!","Jede Aufnahme bringt dich dem nächsten Stück näher. Gleich noch eine!","Übung macht den Meister: Tipp hier für eine neue Aufnahme."],navHintTitle:"Takt für Takt",navHintText:"Zurück und Vor springen jeweils einen Takt, so hörst du eine Stelle noch einmal. Oder zieh die Noten.",pageHintTitle:"Da gibt es noch mehr",pageHintText:"Schließ hier die Seitenansicht: In der normalen Ansicht findest du alle Stücke, Aufnahmen großer Geiger zum Mitspielen, deine Aufnahmen und die Einstellungen.",guide:{passed:"Super! Weiter zum nächsten Stück",passedLead:t=>`${t} wartet auf dich.`,again:"Noch eine Aufnahme?",againLead:(t,e)=>e===1?`Erreiche ${t} % oder nimm noch einmal auf, dann öffnet sich das nächste Stück.`:`Erreiche ${t} % oder nimm noch ${e}-mal auf, dann öffnet sich das nächste Stück.`,allDone:"Du hast alle Einstiegsstücke gespielt!",allDoneLead:"In der normalen Ansicht findest du die ganze Bibliothek, Aufnahmen großer Geiger und mehr.",play:t=>`${t} spielen`,recordAgain:"Noch mal aufnehmen",onceMore:"Noch einmal",tryOther:t=>`${t} probieren`,toNormal:"Zur normalen Ansicht",leave:"Keine Vorschläge mehr"},auth:{wrongPassword:"E-Mail oder Passwort falsch.",emailInUse:"Mit dieser E-Mail gibt es schon ein Konto: melde dich stattdessen an.",weakPassword:t=>`Das Passwort braucht mindestens ${t} Zeichen.`,invalidEmail:"Diese E-Mail-Adresse sieht nicht richtig aus.",tooMany:"Zu viele Versuche: bitte warte einen Moment und versuch es noch einmal.",popupClosed:"Das Google-Fenster wurde vor der Anmeldung geschlossen.",otherWay:"Mit dieser E-Mail-Adresse gibt es schon ein Konto. Melde dich so an wie bisher (mit Google oder deinem Passwort).",popupBlocked:"Der Browser hat das Google-Fenster blockiert: erlaube Pop-ups für diese Seite.",unauthorizedDomain:"Die Anmeldung ist für diese Adresse noch nicht freigeschaltet.",network:"Keine Verbindung: prüfe dein Netzwerk und versuch es noch einmal.",failed:t=>`Das hat nicht geklappt (${t}).`},deleteTake:{title:"Diese Aufnahme löschen?",account:"Sie wird endgültig aus deinem Konto gelöscht: die Aufnahme und alles, was mit ihr gespeichert ist.",ranked:"Sie steht auch in der Bestenliste dieses Stücks: Sie wird daraus entfernt, für alle.",place:t=>`Sie steht auf Platz ${t} der Bestenliste: Sie wird daraus entfernt, für alle.`,keepsProgress:"Die Stücke, die du freigeschaltet hast, bleiben freigeschaltet.",confirm:"Löschen",cancel:"Behalten",deleting:"Wird gelöscht…",failed:"Die Aufnahme konnte nicht gelöscht werden. Bitte versuch es noch einmal."},shareDone:{headlines:[["Link kopiert!","Deine Aufnahme ist bereit, gehört zu werden."],["Ab die Post!","Deine Aufnahme hat jetzt ihren eigenen Link."],["Bereit zum Teilen!","Sei stolz darauf: Das hast du gespielt."]],ready:["Dein Link","Kopiere ihn, und deine Aufnahme ist bereit, gehört zu werden."],anywhere:"Schick ihn, wie du magst: per Nachricht, E-Mail oder Chat. Wer ihn öffnet, hört deine Aufnahme mit dem Klavier, genau so, wie du gespielt hast.",who:["Deine Lehrerin oder dein Lehrer","Deine Eltern","Oma und Opa","Deine Freunde"],cheers:["Jede Aufnahme, die du teilst, ist ein kleines Konzert.","Deine Lehrkraft hört bestimmt gern, wie du übst.","Ling Ling teilt jede Aufnahme. Na gut, die guten. Diese zählt.","Musik ist zum Zuhören da. Lass sie dich hören!"],playedAlong:"Mitgespielt zu",copy:"Kopieren",copyAgain:"Noch mal kopieren",copiedAgain:"✓ Kopiert",done:"Fertig",text:t=>`Hör mal, wie ich ${t} in Violin Hero spiele!`},install:{title:"Installiere Violin Hero als App",tap:"Tippe auf",share:"Teilen",then:"dann",add:"Zum Home-Bildschirm",openInSafari:"Öffne diese Seite in Safari, tippe auf",chromeToo:"Neuere Chrome-Versionen haben es auch unter dem Teilen-Symbol in der Adressleiste.",close:"Schließen"},practiceTips:{title:"Übetipps",video:"Video ansehen",videoTitle:"Öffnet das Video auf YouTube, in einem neuen Tab",start:"Jetzt starten",close:"Schließen",open:"Übetipps",openTitle:"Die Übetipps zu diesem Stück zeigen",festiveTitle:"Weihnachtliche Übetipps",festiveLead:"Es ist Weihnachtszeit, die schönste Zeit für dieses Stück: Üb es jetzt und spiel es unterm Baum für Familie und Freunde."},headphones:{title:"Setz Kopfhörer mit Kabel auf",wired:"Mit Kabel:",wiredWhy:"das Mikrofon hört nur deine Violine.",speakers:"Lautsprecher:",speakersWhy:"das Klavier wird mit aufgenommen.",bluetooth:"Bluetooth:",bluetoothWhy:"verzögert und kann deine Aufnahme verzerren.",gotIt:"Verstanden!",appleAdapter:"Nimm Apples eigenen 3,5-mm-Adapter: andere können verstummen."},singAlong:{start:"Mitsingen",startNote:"Noch wird nichts aufgenommen: Du singst einfach mit.",claim:"Sing mit!",claimLead:"Die Wiedergabe führt dich.",firstNoteTitle:"Deine erste Note",firstNote:"Das Klavier gibt dir den Ton an",notRecording:"Noch wird nichts aufgenommen",again:[{title:"Noch einmal!",text:"Probiere so oft du willst, noch wird nichts aufgenommen."},{title:"Sing mit!",text:"Die Begleitung trägt dich."},{title:"Von vorn",text:"So oft du magst."},{title:"Weiter so!",text:"Wenn du dich bereit fühlst: Aufnehmen."}],stop:"Stopp",record:"Aufnehmen",tryAgain:"Noch einmal",barBack:"Ein Takt zurück",metronome:"Klick",volume:"Ton laut genug? Du wirst es brauchen!",play:"Weiter",setupNext:"Weiter",setupNeedsDelay:"Miss zuerst die Verzögerung, dann geht es weiter.",setupNeedsDelays:"Miss zuerst die Audio- und die Videoverzögerung, dann geht es weiter.",readyTitle:"Bereit?",readyHint:"Starte deine erste Aufnahme.",choirTitle:"Dein Chor ist schon da",choirHint:t=>t===1?"Jemand aus deinem Chor hat dieses Stück schon aufgenommen. Schalte den Chor ein und sing mit.":`${t} andere aus deinem Chor haben dieses Stück schon aufgenommen. Schalte den Chor ein und sing mit ihnen.`,choirOn:"Chor einschalten"},welcome:{loading:["Bogen wird kolophoniert…","Das Klavier wird gestimmt…","Noten werden ausgepackt…","Das Orchester wärmt sich auf…","Saiten werden poliert…","Das Licht wird gedimmt…"],progress:t=>`${t} %`,loadingFailed:"Manche Klänge ließen sich nicht laden. Prüfe deine Verbindung.",continueAnyway:"Trotzdem weiter",begin:"Los geht’s",skipIntro:"Überspringen",beginNote:"Dein Browser fragt nach dem Mikrofon, damit Violin Hero deine Geige hören kann.",points:{wired:"Kopfhörer:",wiredWhy:"aufsetzen, um die Wiedergabe zu hören.",mic:"Mikrofon:",micWhy:"erlauben, um dein Spiel aufzunehmen.",speakers:"Lautsprecher:",speakersWhy:"ausschalten.",bluetooth:"Bluetooth:",bluetoothWhy:"vermeiden, es kann deine Aufnahme verzerren."},hearString:t=>`${t} anhören`,stopTone:"Ton aus",byEar:"Nach Gehör stimmen: Die Schwebung wird langsamer, je näher du kommst",tuner:"Stimmgerät",level:"Pegel",gain:"Eingang",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t).toLocaleString("de")} dB`,gainTitle:"Die Verstärkung des Mikrofons: so einstellen, dass deine lautesten Töne den grünen Bereich erreichen (Doppelklick: +12 dB)",cal:{key:"Kalibrieren",keyTitle:"Die Verzögerung von den Lautsprechern zum Mikrofon messen, damit deine Aufnahmen genau zum Klavier passen",ms:t=>`${t} ms`,title:"Audio-Latenz messen",speakers:"Steck die Kopfhörer ein, mit denen du spielst, und dreh die Lautstärke auf.",micOn:"Halt eine Hörmuschel direkt an das Mikrofon deines Geräts.",quiet:"Sei ein paar Sekunden still, während die Klicks spielen.",measuring:(t,e)=>`Ich höre zu … Klick ${t} von ${e}`,result:t=>`Verzögerung: ${t} ms`,notHeard:"Die Klicks waren nicht zu hören.",unsteady:"Die Klicks kamen ungleichmäßig an.",tryAgain:"Dreh die Lautstärke auf, halt die Hörmuschel direkt ans Mikrofon, sei still und versuch es noch einmal.",needMic:"Dafür braucht es das Mikrofon: erlaube es zuerst.",back:"Fertig",start:"Messung starten",again:"Noch einmal messen",newMeasurement:"Neue Messung",save:"Speichern"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Mikrofon",inputTitle:"Der verwendete Eingang, wie dein System ihn nennt; bei Stereo der Pegel jeder Seite",setupTitle:"Audio-Einrichtung",setupTitleVideo:"Audio-/Video-Einrichtung",filmTakes:"Aufnahmen filmen",camera:"Kamera",cameraNoFilm:"Aus (kein Video)",cameraOff:"Wähle eine Kamera, um deine Aufnahmen zu filmen",cameraRefused:"Die Kamera wurde nicht erlaubt: Erlaube sie in den Einstellungen des Browsers für diese Seite.",cameraNone:"Dieser Browser kann nicht filmen.",cameraGuarded:"Das ist ein Kinderkonto: Übers Filmen entscheiden deine Eltern, und ihre Seite kann es noch nicht erlauben.",videoCal:{title:"Videoverzögerung messen",inView:"Setz dich so, dass die Kamera deine Hände sieht.",clap:"Klatsche kräftig, immer wieder, bis die Zeit um ist.",micOn:"Das Mikrofon hört die Klatscher: Lass es an.",clapNow:t=>`Jetzt klatschen! ${t} s`,analysing:"Die Klatscher werden gesucht …",result:t=>`Aus ${t} Klatschern`,guess:t=>`Noch nicht gemessen: ${t} ms angenommen`,failed:"Nicht genug deutliche Klatscher gefunden.",tryAgain:"Klatsche kräftig, die Hände im Bild, und versuch es noch einmal."},inputDevice:"Mikrofoneingang",outputDevice:"Kopfhörerausgang",systemDefault:"Systemstandard",sidesTitle:"Jede Seite des Eingangs für sich: eine stumme oder rauschende Seite zeigt sich hier",newInput:t=>`Neuer Eingang: ${t}`,useInput:"Verwenden",levelTitle:"Der Eingangspegel: deine lautesten Töne im grünen Bereich ergeben eine saubere Aufnahme; im roten verzerren sie",startTuning:"Stimmen starten",micWhy:"Violin Hero hört dir über das Mikrofon zu.",micAsking:"Erlaube das Mikrofon in deinem Browser…",micDenied:"Kein Mikrofon. Erlaube es im Browser, um zu stimmen und aufzunehmen.",playString:t=>`Spiel deine ${t}-Saite`,tuneUp:"Höher stimmen",tuneDown:"Tiefer stimmen",inTune:"Sauber!",offBy:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,wrongString:(t,e)=>`Das klingt nach deiner ${t}-Saite. Spiel die ${e}.`,farOff:"Weit daneben: langsam drehen und hinhören",stringTitle:t=>`Die ${t}-Saite stimmen`,aDone:t=>`Dein ${t} ist sauber!`,others:t=>`Jetzt ${t.length>1?`${t.slice(0,-1).join(", ")} und ${t[t.length-1]}`:t[0]}, oder du stimmst sie selbst.`,skip:"Die anderen stimme ich selbst",alreadyInTune:"Meine Geige ist schon gestimmt",closeTool:"Fertig",allDone:"Alle vier Saiten sauber. Wunderbar!",next:"Weiter",ready:"Bereit?",firstPiece:"Dein erstes Stück",firstPieceLead:"Leicht zum Einstieg, schön zu spielen. Neue Stücke werden freigeschaltet, wenn du dieses Stück gut kannst.",accountTitle:"Behalte, was du spielst",accountLead:"Kostenlos: deine Aufnahmen und dein Fortschritt, auf jedem Gerät.",signIn:"Anmelden",signedIn:t=>`Angemeldet als ${t}: deine Aufnahmen und dein Fortschritt werden gespeichert.`,offline:"Offline: deine Aufnahmen warten auf diesem Gerät und werden gespeichert, sobald du wieder online bist.",go:"Bogen hoch!",goNote:"Zwei Takte zählen dich ein, dann beginnt deine erste Aufnahme.",backToTuner:"Zurück zum Stimmgerät"},deleteAccount:{menu:"Konto löschen…",title:"Dein Konto löschen?",loading:"Was gespeichert ist, wird gesucht…",lead:"Das wird endgültig gelöscht:",nickname:t=>`Dein Spitzname „${t}“`,takes:(t,e)=>`${t===1?"1 Aufnahme":`${t} Aufnahmen`}${e?` (${e} in der Hall of Fame)`:""}, mit ihren geteilten Links`,progress:(t,e)=>`Dein Fortschritt: ${t===1?"1 Stück":`${t} Stücke`} bestanden, ${e===1?"1 Aufnahme":`${e} Aufnahmen`} gezählt`,practice:t=>`Deine Übezeit (${t})`,markings:(t,e)=>`Deine Eintragungen in ${t===1?"1 Stück":`${t} Stücken`}${e?`, ${e} geteilt`:""}`,packsAdded:t=>`Content Packs, die du hinzugefügt hast: ${t}`,packsMade:t=>`Content Packs, die du erstellt hast: ${t}`,creatorProfile:"Dein Creator-Profil",invitations:t=>`Deine Einladungen${t?` (${t} Karma)`:""}`,feedback:(t,e,n)=>`Dein Feedback: ${t===1?"1 Beitrag":`${t} Beiträge`}, ${e===1?"1 Stimme":`${e} Stimmen`}${n?", deine Bewertung":""}`,family:(t,e)=>`Deine Familienverbindungen: ${t===1?"1 Kind, das nur du betreust":`${t} Kinder, die nur du betreust`}, ${e===1?"1 Partner":`${e} Partner`}`,teaching:t=>`Dein Unterricht: ${t===1?"1 Raum":`${t} Räume`}, die Sprachnotizen deiner Stundennotizen`,browser:"Was dieser Browser speichert (Einstellungen, wartende Aufnahmen)",packsBought:t=>`Deine gekauften Content Packs gehen verloren: ${t}. Käufe gehören zu diesem Konto; mit einem neuen Konto müsstest du sie noch einmal kaufen.`,packsKept:t=>`Bleibt erhalten: ${t}. Diese Packs wurden schon hinzugefügt und bleiben daher, mit deinem Creator-Profil.`,creatorStays:"Dein Creator-Profil und deine Content Packs bleiben. Um sie zu löschen, wähl auf der Creator-Seite im Kontomenü „Creator-Daten löschen…“.",login:"Dein Login wird ebenfalls gelöscht.",loginSchool:"Dein Login bleibt: er wird anderswo in Crescendu noch gebraucht.",loginCreator:"Dein Login bleibt, für deine Creator-Daten.",creatorMenu:"Creator-Daten löschen…",creatorTitle:"Deine Creator-Daten löschen?",creatorNothing:"Es lässt sich nichts löschen: Alle deine Content Packs wurden schon hinzugefügt.",creatorLoginPacks:"Dein Login bleibt, für die Content Packs, die schon hinzugefügt wurden.",creatorLoginPlayer:"Dein Login und deine Violin-Hero-Daten bleiben. Um sie zu löschen, wähl in Violin Hero im Kontomenü „Konto löschen…“.",creatorCancel:"Creator-Daten behalten",creatorConfirm:"Creator-Daten löschen",doneCreator:"Deine Violin-Hero-Daten sind gelöscht. Dein Login bleibt für deine Creator-Daten: Lösch sie auf der Creator-Seite, dann geht der Login mit.",creatorDoneLogin:"Deine Creator-Daten und dein Login sind gelöscht. Danke, dass du für Violin Hero erstellt hast!",creatorDoneSchool:"Deine Creator-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",creatorDonePacks:"Die Packs, die niemand hinzugefügt hatte, sind gelöscht. Die anderen bleiben, mit deinem Creator-Profil und deinem Login.",creatorDonePlayer:"Deine Creator-Daten sind gelöscht. Dein Login und deine Violin-Hero-Daten bleiben.",understood:"Mir ist klar, dass sich das nicht rückgängig machen lässt.",cancel:"Konto behalten",confirm:"Alles löschen",deleting:"Wird gelöscht…",steps:{takes:"Deine Aufnahmen werden gelöscht…",library:"Hinzugefügte Packs werden entfernt…",packs:"Deine erstellten Packs werden gelöscht…",profile:"Dein Creator-Profil wird gelöscht…",feedback:"Dein Feedback wird gelöscht…",messages:"Deine Nachrichten und dein Lob werden gelöscht…",rest:"Fortschritt und Übezeit werden gelöscht…",family:"Deine Familienverbindungen werden gelöscht…",teaching:"Deine Räume und Sprachnotizen werden gelöscht…",other:"Deine übrigen Crescendu-Daten werden gelöscht…",browser:"Dieser Browser wird geleert…",login:"Dein Login wird gelöscht…"},failed:"Es ließ sich nicht alles löschen. Bitte versuch es noch einmal.",doneTitle:"Deine Daten sind gelöscht",doneLogin:"Dein Konto gibt es nicht mehr. Danke, dass du mit Violin Hero geübt hast!",doneSchool:"Deine Violin-Hero-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",doneAgain:"Deine Daten sind gelöscht. Um auch den Login zu löschen, melde dich noch einmal an und wähle wieder „Konto löschen“.",ok:"OK"},nextPack:{title:"Du hast das ganze Starter Pack freigeschaltet!",text:"Lust auf mehr? „Beliebte Violinstücke“ hat 25 Lieblingsstücke, von der Méditation bis zum Csárdás, alle sofort offen, sobald du es hinzufügst.",signIn:"Melde dich im Marketplace an, um es hinzuzufügen.",show:"Zeig mir",later:"Später"},packUpdates:{title:t=>t===1?"Ein Inhaltspaket hat ein Update":`${t} Inhaltspakete haben Updates`,untitled:"Inhaltspaket",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Aktualisieren",updating:"Wird aktualisiert…",keep:t=>`Version ${t} behalten`,later:"Später entscheiden",note:"Deine Aufnahmen bleiben in jedem Fall erhalten."},sharedTake:{sharedBy:t=>`${t} hat eine Aufnahme mit dir geteilt`,sharedByAnyone:"Jemand hat eine Aufnahme mit dir geteilt",yours:"Deine eigene Aufnahme, über deinen Link",played:"Gespielt",tempo:"Tempo",originalTempo:"Originaltempo",section:"Abschnitt",playedAlong:"Mitgespielt zu",bars:(t,e)=>`Takte ${t}–${e}`,score:"Punkte",withPiano:"Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.",listen:"Anhören",playsOnClose:"Die Wiedergabe beginnt, wenn du diese Karte schließt."},unlock:{locked:"Gesperrt: Schalte es frei, indem du Stücke bestehst oder übst",next:"Als Nächstes freischalten",all:"Alle Stücke sind freigeschaltet. Ling Ling wäre stolz!",pass:(t,e)=>`Schaffe ${t} % bei einem Stück, das du noch nicht bestanden hast (mit mindestens ${e} % Tempo)`,thisTake:t=>`Diese Aufnahme: ${t} %`,passedNow:"✓ Bestanden!",passedBefore:"Dieses Stück hast du schon bestanden: probier ein anderes.",or:"oder",signIn:"Melde dich an, damit dein Fortschritt sicher ist, auf jedem Gerät.",takes:t=>`nimm noch ${t} ${t===1?"Aufnahme":"Aufnahmen"} auf`,nudges:["Ling Ling übt 40 Stunden am Tag. Ein paar Aufnahmen mehr schaden nicht!","Üb wie Ling Ling: 40 Stunden am Tag (ein paar Minuten sind ein guter Anfang).","Ling Ling schaut zu. Nimm die Violine in die Hand!","Sei keine Bratsche. Nimm es noch einmal auf!","Emotional Damage? Nein: Emotional Progress!","Jede Aufnahme bringt dich Ling Ling ein Stück näher.","Für Ling Ling auf Schlaf verzichten? Eine Aufnahme mehr reicht schon.","Ling Ling spielt das mit Kater. Du kannst es jetzt spielen!"],title:"Neues Stück freigeschaltet!",titleMany:t=>`${t} neue Stücke freigeschaltet!`,newLevel:t=>`Neuer Schwierigkeitsgrad: ${t}!`,play:"Gleich spielen",later:"Später",cheers:["Ling Ling wäre stolz!","Das ist der 40-Stunden-am-Tag-Geist!","Ling Ling ist einverstanden. Weiter so!","Dein Üben hat sich gelohnt. Auf zum nächsten!","Großartig! Da würde sogar eine Bratsche jubeln."],levelCheers:["Ein ganz neuer Schwierigkeitsgrad! Auch Ling Ling hat mal als Anfänger angefangen.","Level up! Ling Ling wird langsam nervös.","Willkommen auf der nächsten Stufe: Jetzt fängt das echte Üben an!"]},best:(t,e,n)=>`Bestleistung: ${t} · ${e}/${n}`,bestTitle:"Die Bestenliste für dieses Stück zeigen",practising:t=>t===1?"Gerade übt noch 1 Person dieses Stück":`Gerade üben noch ${t} Personen dieses Stück`,invites:["Noch keine Bestleistung: deine Chance, ganz nach oben zu kommen!","Das Treppchen ist leer. Nimm das ganze Stück auf und hol dir Platz eins!","Hier hat noch niemand Punkte geholt. Sei die oder der Erste!","Platz eins ist noch zu haben: erst üben, dann aufnehmen!","Eine leere Bestenliste wartet auf deinen Namen.","Sei die Leistung, die alle anderen schlagen müssen.","Neues Stück, neues Glück: setz die Marke, die es zu schlagen gilt!","Gold ist für dieses Stück noch frei. Hol es dir!"],board:{title:"Bestenliste",of:t=>`Bestenliste für ${t}`,practise:"Los, üben!",you:"du",play:t=>`Aufnahme von ${t} abspielen`,openPodium:t=>`${t===1?"Ein Platz auf dem Treppchen ist":`${t} Plätze auf dem Treppchen sind`} noch frei: Er könnte dir gehören!`,toEnter:t=>`Schaffe mehr als ${t} Punkte, um in die Liste zu kommen.`,onBoard:t=>`Du bist auf Platz ${t}: Schaffst du es noch höher?`,top:"Du bist ganz oben. Kannst du deine eigene Bestleistung schlagen?",signIn:"Melde dich an, damit deine Aufnahmen zählen.",howTo:"Nimm das ganze Stück auf, vom Anfang bis zum Ende, im Originaltempo (100 %), um in die Liste zu kommen.",tips:["Üb zuerst die schweren Takte: markier sie mit der Marke und lass sie wiederholen.","Nimm das Tempo zurück, bis jeder Ton sitzt, und steigere es dann wieder.","Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Hör dir unter Interpretation eine großartige Aufnahme an und mach sie dir zu eigen."]},yourScore:"Dein Ergebnis",yourScoreOpen:"Dein Ergebnis: ganz anzeigen",yourScoreTitle:"Dein Ergebnis: klicken für die Einzelheiten",outOf:t=>`von ${t}`,stars:t=>`${t} von 5 Sternen`,reportSteps:{next:"Wie geht’s weiter?",done:"Fertig",practise:"Weiter üben",back:"Zurück zur Wertung",title:"Deine nächsten Schritte",applause:"Applaus"},shareSignIn:"Stolz auf diese Aufnahme? Melde dich an, dann kannst du sie teilen: Schick den Link an deine Lehrkraft, deine Familie oder deine Freunde, und sie hören genau, wie du gespielt hast.",unranked:t=>`Mit ${t} % des Tempos gespielt, deshalb zählt diese Aufnahme nicht für die Bestenliste: Nur Aufnahmen mit 100 % zählen. ${t<100?"Arbeite dich bis zum Originaltempo hoch und nimm sie dann noch einmal auf!":""}`,publish:{title:"Diese Aufnahme schafft es in die Hall of Fame!",text:"Veröffentliche sie und deine Aufnahme wird öffentlich: sie steht unter deinem Spitznamen in der Bestenliste dieses Stücks und in der Hall of Fame, und alle können sie dort anhören.",signInText:"Melde dich an, um sie zu veröffentlichen: deine Aufnahme wird dann öffentlich und steht in der Bestenliste dieses Stücks und in der Hall of Fame.",publish:"Veröffentlichen",publishing:"Wird veröffentlicht…",saving:"Wird gespeichert…",signIn:"Anmelden",failed:"Das Veröffentlichen hat nicht geklappt. Bitte versuch es noch einmal.",doneTitle:"Du bist in der Hall of Fame!",doneText:"Deine Aufnahme steht jetzt in der Bestenliste dieses Stücks und in der Hall of Fame.",see:"Ansehen"},choirPublish:{title:"Teile diese Aufnahme mit deinem Chor",text:"Veröffentliche sie in deinem Chor: die Mitglieder hören sie in ihrem Mischpult mit ihren zusammen, und die Chorleitung kann die Aufnahmen des Chors für die Hall of Fame zusammenstellen.",signInText:"Melde dich an, um sie mit deinem Chor zu teilen: die Mitglieder hören sie dann mit ihren zusammen.",noChoir:"Aufnahmen wie diese kannst du mit einem Chor auf Crescendu teilen: sobald du in einem mitsingst, veröffentlichst du sie dort, und die anderen singen dazu.",publish:t=>`In ${t} veröffentlichen`,again:t=>`Erneut in ${t} veröffentlichen`,choir:"Chor",publishKey:"Veröffentlichen",againKey:"Erneut veröffentlichen",published:"✓ Veröffentlicht",publishing:"Wird veröffentlicht…",uploading:(t,e)=>`Video ${t} %${e?` · noch ${e}`:""}`,withdraw:"Zurückziehen",signIn:"Anmelden",failed:"Das hat nicht geklappt. Bitte versuch es noch einmal.",doneTitle:"Dein Chor hat dieses Stück von dir",doneText:"Die Mitglieder hören es in ihrem Mischpult. Erneut veröffentlichen ersetzt es durch diese Aufnahme."},topScores:t=>`Bestenliste für ${t}`,scoreHeadline:"Punkte",loading:"Lädt…",noScores:"Für dieses Stück gibt es noch keine Ergebnisse.",thisTake:"(diese Aufnahme)",styleBonus:"Stilbonus",badTaste:"Stilbruch",bonus:"Bonus",penalty:"Abzug",categories:{intonation:"Intonation",timing:"Timing",sound:"Klang",dynamics:"Dynamik",trills:"Triller",consonants:"Konsonanten",missed:"Fehlende Töne",wrong:"Richtige Töne"},details:{nothingHeard:()=>"Nichts gehört",spotOn:()=>"Genau getroffen",centsOff:t=>`Im Schnitt ${t} ¢ daneben`,landedLate:t=>` · ${t} spät angekommen`,noEntries:()=>"Keine Einsätze gehört",earlyLate:(t,e)=>[t&&`${t} zu früh`,e&&`${e} zu spät`].filter(Boolean).join(", "),onTime:()=>"Immer pünktlich",heldShort:t=>`Pünktlich, ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,alsoHeldShort:t=>` · ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,playedOnly:(t,e)=>` · nur ${t} von ${e} Tönen gespielt`,shaping:t=>`Gestaltung zu ${t} % gefolgt`,allFollowed:t=>`Allen ${t} Wechseln gefolgt`,wrongWay:(t,e)=>`${t} von ${e} in die falsche Richtung`,tooFewNotes:()=>"Zu wenige Töne gehört",consonantsTogether:(t,e)=>`${t} von ${e} Konsonanten genau an ihrem Platz`,consonantsOnset:t=>` · vor dem Vokal ${t>0?`${t} ms zu spät`:`${-t} ms zu früh`}`,consonantsCoda:t=>` · am Schluss ${t>0?`${t} ms zu spät`:`${-t} ms zu früh`}`,trills:(t,e,n)=>`${t} von ${$t(e,"Triller","Trillern")}${t?` · ${n.toFixed(0)} Töne/s`:""}`,notesOf:(t,e)=>`${t} von ${e} Tönen`,rightOf:(t,e)=>`${t} von ${e} Tönen richtig`,noneMissed:()=>"Kein Ton fehlt",noneWrong:()=>"Alle Töne richtig",noLongNotes:()=>"Keine langen Töne gehört",vibrato:(t,e)=>`Vibrato auf ${t} von ${e} langen Tönen`,openStrings:()=>"Lange leere Saiten ruhig gehalten",vibratoFast:(t,e)=>` · schnell für ${He[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoSlow:(t,e)=>` · langsam für ${He[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoWide:(t,e)=>` · breit für ${He[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · schmal für ${He[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · für volle Punkte: ein langsameres Vibrato, ${Wt(e,e%1?1:0)}–${Wt(n,n%1?1:0)} Schwingungen pro Sekunde in ${He[i]} (deins ${String(t).replace(".",",")})`,vibratoFaster:(t,e,n,i)=>` · für volle Punkte: ein schnelleres Vibrato, ${Wt(e,e%1?1:0)}–${Wt(n,n%1?1:0)} Schwingungen pro Sekunde in ${He[i]} (deins ${String(t).replace(".",",")})`,vibratoNarrower:(t,e,n,i)=>` · für volle Punkte: ein schmaleres Vibrato, ${e}–${n} ¢ in ${He[i]} (deins ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · für volle Punkte: ein breiteres Vibrato, ${e}–${n} ¢ in ${He[i]} (deins ${t} ¢)`,vibratoMore:t=>` · für volle Punkte: Vibrato auf ${t===1?"dem Ton":`den ${t} Tönen`} ohne`,vibratoSteadier:t=>` · für volle Punkte: ${t===1?"einen langen Ton":`${t} lange Töne`} ruhiger halten oder Vibrato spielen`,vibratoOptional:t=>` · in ${He[t]} freiwillig`,slidesInStyle:(t,e,n)=>`${Sa(t,e)}, stilecht für ${n}`,slidesBadTaste:(t,e,n)=>`${Sa(t,e)}: ein Stilbruch für ${n}`},silent:[["Hast du gespielt?","Wir haben keinen einzigen Ton gehört."],["Hallo? Jemand da?","Kein Ton ist bei uns angekommen."],["Stille Nacht?","Das war sehr leise. Zu leise."],["Hast du gespielt?","Ling Ling hat nichts gehört, und Ling Ling hört alles."]],silentTip:"Prüfe, ob das Mikrofon erlaubt ist und sich die Anzeige bei „Eingang“ beim Spielen bewegt.",praise:[[["Brillant!","Das war reif für die Bühne."],["Bravo!","Das Publikum steht auf."],["Herausragend!","Kaum ein Ton daneben."],["Großartig!","Du hast das Stück zum Singen gebracht."]],[["Glückwunsch!","Ein schöner Vortrag."],["Wunderschön!","Es war eine Freude zuzuhören."],["Wunderbar!","Du kennst dieses Stück richtig gut."],["Schön gespielt!","Nur noch ein paar Feinheiten bis perfekt."]],[["Gut gespielt!","Schön gemacht. Ein bisschen Feinschliff, und es glänzt."],["Gute Arbeit!","Das Stück nimmt Gestalt an."],["Prima!","Du bist auf einem guten Weg."],["Solide Aufnahme!","Bleib dran, dann funkelt es."]],[["Gut versucht!","Da geht noch mehr. Probier es noch einmal!"],["Es wird!","Mit jedem Durchgang wird es runder."],["Nicht schlecht!","Noch ein paar Runden, und du hast es."],["Weiter so!","Das Schwerste hast du hinter dir."]],[["Bleib dran!","Jede Aufnahme macht dich besser."],["Guter Anfang!","Nimm das Tempo raus und versuch es noch einmal."],["Nicht aufgeben!","Auch die Großen haben das geübt."],["Übung macht den Meister!","Markier einen schwierigen Takt und wiederhole ihn."]]],highlights:{intonation:["Deine Intonation war der Star dieser Aufnahme.","Wunderbar sauber!","Dein Gehör hat großartige Arbeit geleistet."],timing:["Genau im Takt, von Anfang bis Ende.","Dein Timing war bombenfest.","Du und das Klavier wart perfekt zusammen."],sound:["Was für ein schönes Vibrato!","Deine langen Töne haben richtig gesungen.","Ein warmer, singender Ton."],dynamics:["Deine Dynamik hat die Musik lebendig gemacht.","Schön gestaltet, laut und leise.","Du bist jedem Crescendo und Diminuendo gefolgt."],trills:["Funkelnde Triller, schön schnell!","Deine Triller waren eine Freude: schnell und sauber.","Wie ein Singvogel: schöne Triller."],consonants:["Knackige Konsonanten, genau auf dem Schlag!","Deine Konsonanten saßen perfekt.","Ein Traum für jede Chorleitung: jeder Konsonant zusammen."],missed:["Kein einziger Ton ausgelassen.","Jeder Ton war da.","Du hast nie den Faden verloren."],wrong:["Blitzsauber: kein falscher Ton.","Jeder Ton war der richtige.","Wunderbar treffsichere Finger."],glide:["Schöne, ausdrucksvolle Glissandi: ganz romantisch!","Deine Glissandi gaben ihm echte romantische Wärme.","Schönes Portamento, genau richtig für diese Musik."]},tips:{intonation:["Tipp: Stimm die langen Töne gegen das Klavier ab.","Tipp: Spiel die schwierigen Takte langsam und hör auf jeden Ton.","Tipp: Prüf deine Intonation an den leeren Saiten."],timing:["Tipp: Schalte den Klick ein und setz mit dem Schlag ein.","Tipp: Zähl die Pausen laut mit, bevor du einsetzt.","Tipp: Nimm das Tempo zurück und steigere es dann wieder."],sound:["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Lass die langen Töne klingen und singen."],dynamics:["Tipp: Achte auf die p und f und mach den Unterschied größer.","Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Spiel die leisen Stellen wirklich leise, dann lass die lauten heraus."],trills:["Tipp: Üb die Triller langsam und gleichmäßig, dann schneller.","Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Fang den Triller ruhig an und lass ihn dann immer schneller werden."],consonants:["Tipp: Sing den Konsonanten kurz vor dem Schlag, damit der Vokal genau darauf kommt.","Tipp: Setz die Schlusskonsonanten genau aufs Notenende, kurz und knackig.","Tipp: Markier in den Noten, wo deine Schlusskonsonanten hingehören, und sing sie genau dort."],missed:["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Markier die Takte mit fehlenden Tönen und wiederhole sie."],wrong:["Tipp: Markier die schwierigen Takte und wiederhole sie langsam.","Tipp: Prüf den Fingersatz dort, wo die falschen Töne waren.","Tipp: Spiel die schwere Stelle langsamer, bis jeder Ton stimmt."],glide:["Tipp: Wechsle sauber zwischen den Tönen: kein Rutschen in diesem Stil.","Tipp: In Klassik und Barock die Lagenwechsel sauber und schnell halten.","Tipp: Lass die Glissandi weg: Lagenwechsel ohne Rutschen."]}},xt=(t,e,n)=>`${t} ${t===1?e:n}`,We=["Romantic music","this music","Classical music","Baroque music","folk music","fiddle music","klezmer","this style"],Ta=(t,e)=>[t&&xt(t,"glissando","glissandi"),e&&xt(e,"slide","slides")].filter(Boolean).join(", "),lg={versionTitle:(t,e)=>`Version ${t}, commit ${e}`,darkMode:"Dark mode",lightMode:"Light mode",themeMenu:"Look: light or dark, colours",schemes:{blue:"Ocean",violet:"Plum",teal:"Lagoon",rose:"Raspberry",graphite:"Graphite"},helpTitle:"How to use (?)",helpLabel:"How to use Violin Hero",tools:{key:"Tools",title:"Tools: tuner and more",tuner:"Tuner",tunerLead:"Tune your violin",setup:"Audio setup",setupLead:"Microphone and speakers, input level, delay",setupVideo:"Audio/video setup",setupVideoLead:"Microphone, speakers and camera, input level, delay",more:"More tools",moreLead:"Add tools like the Vibralizer in the Marketplace",moduleFailed:"This tool could not be loaded. Check your connection and try again.",close:"Close"},marketTitle:"Violin Hero Marketplace: more content packs",overlay:{marketplace:"Content packs and tools for Violin Hero",halloffame:"The best takes, players and pieces",close:"Back to Violin Hero"},languageTitle:t=>`Language: ${t}`,languageMenu:"Choose the language",tempo:"Tempo",click:"Click",fullscreen:"Violin part in full screen mode",leaveFullscreen:"Back to the normal view (Esc)",dragBar:"Drag to move the bar",pageSize:"Score size",pageVoices:"All voices",pageVoicesTitle:"Show every voice of the choir in the score, or only yours",pageSizes:{small:"Small: more bars to a line",medium:"Medium",large:"Large: easier to read and to mark up"},metronome:"Metronome",practice:"Practice",piano:"Piano",pianoModel:"Sound",staves:"Staves",violin:"Violin",humanize:"Humanize",reverb:"Reverb",volume:"Volume",pianos:{grand:"Grand",upright1:"Upright 1",upright2:"Upright 2"},startStop:"Start/Stop",play:"Play",pause:"Pause",playTitle:"Play / pause (P; double-click: back to the start)",navigation:"Navigation",back:"Back",forward:"Forward",backTitle:"One bar back (double-click: the start)",forwardTitle:"One bar on (double-click: the end)",take:"Take",record:"Record",stop:"Stop",recordTitle:"Record (R)",finishMarking:"Finish marking up first (Esc)",clear:"Clear",sure:"Sure?",clearTitle:"Clear the take",clearConfirmTitle:"Press again to clear the take",share:"Share",shareTitle:"Share your take",shareScoreTitle:"Share your markings of this piece (a link)",section:"Section",marker:"Marker",markerTitle:"Mark a section (M)",repeat:"Repeat",repeatTitle:"Repeat the section (L; double-click: to its start)",input:"Input",inputGain:"Input gain",level:"Level",levels:["Beginner","Easy","Intermediate","Advanced","Expert"],genre:"Genre",allGenres:"All",allLevels:"All",genres:{early:"Early music",baroque:"Baroque",classical:"Classical",romantic:"Romantic",modern:"Modern & contemporary",concertos:"Concertos",sonatas:"Sonatas",showpieces:"Showpieces",salon:"Salon pieces",dances:"Dances",opera:"Opera & operetta",sacred:"Sacred & hymns",etudes:"Études",carols:"Christmas & carols",wedding:"Wedding",children:"Children’s songs",folk:"Folk songs",celtic:"Celtic & fiddle",bluegrass:"Bluegrass & country",hungarian:"Hungarian & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & swing",film:"Film & game music",pop:"Pop, rock & musicals",warmups:"Warm-ups",scales:"Scales",technique:"Technique & exercises"},piece:"Piece",placeOf:(t,e)=>`${t} of ${e}`,scoreLabel:"Score",scorePdfTitle:"The violin part as a PDF, to print or download",fingeringsBy:t=>`Score has been marked up by ${t}`,fingeringsAdded:"Score has been marked up",pieceCount:t=>t?xt(t,"piece","pieces"):"No pieces",lockedCount:t=>`${t} locked`,noneUnlocked:"none unlocked",noPieces:"No pieces here: try another level",interpretation:"Interpretation",choirVoice:"Your voice",mixer:{choir:"Choir",timeline:{bar:"Bar",zoom:"Zoom",ruler:"Timeline: click to put the playhead there, drag to move along",barsShort:"Bars",lane:"Scenes",edit:"Cut and join scenes",hand:"Hand: click a scene to select it, drag to move along (H)",razor:"Razor: click in a scene to split it there (B)",glue:"Glue: click near a cut to join the two scenes (G)",snap:"Snap to the beat"},video:{title:"Video",popOut:"Open in its own window",popBack:"Back into the page",credits:"Sung by",brand:"Choir Hero",points:"points",general:"Video",format:"Format",formats:{landscape:"Landscape 16:9",portrait:"Portrait 9:16"},fps:"Frame rate",fpsKinds:{30:"30 frames a second",60:"60 frames a second: smoother, takes twice as long to make"},fpsTitle:"Frames a second of the rendered video: 60 moves more smoothly and takes about twice as long to make",intro:"Intro",outro:"Outro",scoreBadge:"Score",effects:"Effects",effectKinds:{none:"None",grayscale:"Grayscale",grain16:"16mm film",grain8:"8mm film",vhs:"VHS",super8:"Super 8",anime:"Anime"},intensity:"Intensity",grade:"Color grading",assets:"Assets",backdrop:"Background",overlay:"Overlay",overlayBlends:{screen:"Screen",add:"Add",overlay:"Overlay",soft:"Soft",multiply:"Multiply",normal:"Normal"},backdropKinds:{theme:"Theme",photo:"Photo",video:"Video"},backdropTheme:"The theme’s background colour",assetsDrop:"Drop pictures and videos here",assetsChoose:"Choose files",assetsStock:"Stock",assetsOwn:"Your media",assetsNoStock:"No stock footage yet",assetsNoOwn:"Nothing yet: what you upload lands in your media (your profile pages can use it too)",assetsSignIn:"Sign in to upload pictures and videos",assetUse:"Use as the background",assetInUse:"The background (click: back to the theme)",assetRemove:"Take out of your media (the file stays)",assetSure:"Sure?",overlayUse:"Use as the overlay",overlayInUse:"The overlay (click: no overlay)",editorCompact:"Show only the first rows",editorExpand:"Show all settings",gradeLooks:{neutral:"Neutral",warm:"Warm",cool:"Cool",vivid:"Vivid",cinema:"Cinema",faded:"Faded",custom:"Custom"},gradeKeys:{brightness:"Brightness",contrast:"Contrast",saturation:"Saturation",temperature:"Temperature"},gradeScope:{videos:"Singers",whole:"Whole picture"},gradeScopeTitle:{videos:"the singers’ videos are graded (the background has its own sliders)",whole:"the whole picture is graded, titles, background and score included"},paperOpacity:"Opacity",logo:"Logo",autoScenes:"Auto",autoScenesTitle:"Analyse the score and propose cuts and scenes (replaces the scenes there)",autoSure:"Replace?",scene:"Scene",sceneOf:(t,e)=>`Scene ${t} of ${e}`,pickScene:"Select a scene on the timeline",previewRate:"The preview now: its picture’s height and frames a second (lowered by itself to keep 10 a second)",previewOff:"Open the video player to see the preview’s quality",mood:"Theme",variant:"Variant",variants:{original:"Original",pastel:"Pastel",vivid:"Vivid",dark:"Dark"},moods:{none:"None",plain:"Plain",spring:"Spring",summer:"Summer",autumn:"Autumn",winter:"Winter",christmas:"Christmas",night:"Night",gala:"Gala",romantic:"Romantic",party:"Party",retro:"Retro",pop:"Pop"},colours:"Colours",transitions:"Transitions",transitionKinds:{none:"Off",fade:"Fade",animate:"Animate",playful:"Playful"},duration:"Duration",notesShort:"Score",notesPlaces:{below:"Bottom",top:"Top",over:"Middle"},notesLayers:{separate:"Separate",overlay:"Overlay"},notesLayersTitle:{separate:"The score in a strip of its own, the singers make room for it",overlay:"The score over the singers, taking no room (in the middle always)"},off:"Off",notesStyles:{simple:"Simple",pages:"Pages",float:"Float",wave:"Wave",spot:"Spot"},shapes:"Shapes / Patterns",shapesPlaces:{top:"Top",bottom:"Bottom",left:"Left",right:"Right",border:"Border",everywhere:"Everywhere"},shapesMotions:{draw:"Drawing",pattern:"Pattern",fall:"Falling",grow:"Growing",pulse:"Pulsing",glow:"Glowing",blur:"Blurred"},groupsShort:"Voice group",sceneBackTitle:"To the start of the scene, then the one before (double-click: the start)",sceneForwardTitle:"To the next scene (double-click: the end)",choirName:"Choir",size:"Size",animation:"Animation",shapesTitle:"Shapes over the video in this scene: along the edges or across the picture, in the theme's style, a painter's or a playful one",notesTitle:"The score in this scene: below the singers or on top of them, its playhead following the music",primary:"Primary",secondary:"Secondary",arrangement:"Arrangement",scenes:"Focus",faces:"Face",facesTitle:"How close every tile frames the singer’s head: left the whole picture, right a close-up of the head",grid:"Grid",fullPicture:"Full picture",side:"Side by side",stack:"Stacked",featureLeft:"Large left",featureRight:"Large right",featureTop:"Large on top",pip:"Picture in picture",twoBig:"Two large",mosaic:"Mosaic",depth:"Depth",crane:"Crane shot",tileCount:"Tiles",tileCountTitle:"How many singers this scene shows (type a number or step through them). Click a tile in the video player to show another singer there",allTiles:t=>`All (${t})`,autoLook:"Auto",autoLookTitle:"Choose the arrangement, the number of tiles and who is large from what the score does in this scene (as the Auto for all scenes does)",shape:"Shape",tileShapes:{rect:"Rectangle",square:"Square",circle:"Circle",heart:"Heart",hexagon:"Hexagon",diamond:"Diamond"},animAdd:"Add animation",animRemove:"Remove animation",animStart:"Animation start",animEnd:"Animation end",animNames:{face:"Face",tilt:"Tilt",borderWidth:"Border width",glow:"Glow",opacity:"Opacity",shapeSize:"Size",rotation:"Rotation",radius:"Corners",notesSize:"Score: size",notesAmount:"Score: opacity",notesMix:"Score: effect",shapesSize:"Shapes: size"},animHeld:"Put the playhead in this scene to move the animation’s start or end",animStartShort:"start",animEndShort:"end",animPinTitle:(t,e)=>`${t}: ${e} (drag to move it)`,animSceneOnly:"Only the Scene tab’s sliders can be animated",animOff:"Switch it on to animate it",animStartTitle:"Where the animation starts: drag it to its value, it takes the playhead’s moment",animEndTitle:"Where the animation ends: drag it to its value, it takes the playhead’s moment",tileOpacity:"Opacity",rotation:"Rotation",ringWidth:"Ring width",outlineWidth:"Outline width",rounding:"Rounding",tileBack:"Previous singer",tileNext:"Next singer",pickSinger:"Show here",shownElsewhere:"In another tile of this scene: picking them swaps the two",voices:"By voice",risers:"Risers",wallLeft:"Wall left",wallRight:"Wall right",rows:"Rows",cols:"Columns",wallLeftFade:"Wall left, running",wallRightFade:"Wall right, running",cubes:"Cubes",carousel:"Carousel",shuffle:"Puzzle",wave:"Wave",orbit:"Camera orbit",gallery:"Gallery",notesMix:{none:"No effect",effect:t=>`Effect ${t} %`,withPaper:(t,e)=>`Effect ${t} % · paper ${e} %`},motion:{still:"Motion",stillTitle:"Only the moving arrangements move",title:"How the tiles move in this arrangement",speed:t=>`Speed ${t} tiles/s`,turn:t=>`One turn in ${t} s`,rest:t=>`Each side ${t} s`,swap:t=>`Swap every ${t} s`,height:t=>`Height ${t} %`,swing:t=>`One sweep in ${t} s`},tilt:{none:"No tilt",by:(t,e)=>`Tilt ${t}° ${e}`,left:"left",right:"right",top:"top",bottom:"bottom",title:"Tilts the tiles in perspective, the left or right side away (double-click: flat again)",titleUpright:"Tilts the tiles in perspective, the top or bottom away (double-click: flat again)"},lines:"Tiles",borderKinds:{primary:"Primary colour",secondary:"Secondary colour",voices:"Voice colour"},glow:"Glow",glowTitle:"How strongly each tile lights up in its voice colour while the singer sings (0: not at all)",border:"Border",borderWidth:"Border width",background:"Background",spacing:"Spacing",corners:"Corners",overlays:"Overlays",titles:"Titles",names:"Names",previousChoice:"Previous",nextChoice:"Next"},choirOn:"Choir",pan:"Pan",left:"L",panShort:"Pan",tuning:"Tuning",right:"R",centre:"C",volume:"Volume",on:"On",onHint:"On: heard in the mix",offHint:"Off: silent",mute:"Mute",muteHint:"Mute: silence this channel",mutedHint:"Muted: press to hear it again",silencedHint:"Silent while another channel is soloed",solo:"Solo",soloHint:"Solo: hear this channel alone (with any other soloed one)",soloedHint:"Soloed: press to hear every channel again",tune:"Autotune",tuneValue:t=>t?`Autotune ${t}: ${t<35?"gentle":t<75?"clear":"hard"} pitch correction`:"Autotune off: the recording as sung",deviation:"Deviation (the outer ring): how far the voice is off the note now, right to be corrected up, left down. Correction (the arc inside): how much Autotune pulls it back",intonation:"Intonation",intonationHint:"What the piano and Autotune tune to: equal temperament, or just intonation, each chord’s notes pure against its root",equal:"Equal",equalShort:"Equal",just:"Just",groupPan:"Pan of every voice in the group",master:"Master",reverb:"Reverb",noPart:"Other",loading:"Loading…",noTake:"No recording of this piece yet",failed:"The recording couldn’t be loaded",choirOff:"The choir is switched off",whileListening:"Silent while you listen to an interpretation",standardView:"Plays in the standard view",ownChosen:"Your recording chosen in the app plays already",otherSettings:"Recorded at other settings: it plays along only at 100 % tempo, without humanizing or an interpretation",signIn:"Sign in to hear your choir: every member’s recording of this piece, sung along with you.",noChoir:"Sing in a choir on Crescendu and its members’ recordings of a piece sing along with you here.",notFitting:"Your choir’s recordings play along only at 100 % tempo, without humanizing or an interpretation.",empty:"Nobody in this choir has published a recording of this piece yet: publish yours from its score card.",takes:t=>t===1?"1 recording":`${t} recordings`,transport:"Transport",recording:{published:"Recording published to the choir",local:"Your recording, not published: played through the mixer from here",none:"No recording yet"},compact:"Hide Autotune, pan and EQ",loadLevels:["low","moderate","high","critical"],loadSources:{render:"the audio’s own processing",pressure:"the whole computer"},loadDropouts:"This browser doesn’t report the computer’s load: the lamp flashes red when the sound drops out (the computer couldn’t keep up)",loadTitle:(t,e)=>`Load: ${t} (${e}). Red means the computer can’t keep up: switch off Autotune on some channels, or close other programs.`,loadUnknown:"Load: not known yet",loadGlitch:"The sound just dropped out: the computer couldn’t keep up. Switch off Autotune on some channels, or close other programs.",expand:"Show Autotune, pan and EQ",groups:"Groups",groupsHint:"Show the voice groups’ faders (hidden, they leave the mix as it is)",eq:"Equalizer",eqTitle:t=>`EQ · ${t}`,eqOpen:"Equalizer: click to adjust",lowCut:"Low cut",mid:"Mid",highShelf:"High shelf",close:"Close",gate:"Gate",comp:"Compressor",gateTitle:t=>`Gate · ${t}`,compTitle:t=>`Compressor · ${t}`,gateHint:"Gate: silences breaths and noise between phrases. Click to adjust",compHint:"Compressor: evens out the voice’s level. Click to adjust",threshold:"Threshold",range:"Range",ratio:"Ratio",makeup:"Make-up",off:"Off",switchOff:"Switch off",dynInput:"Input",dynOutput:"Output",preEq:"Before the EQ",postEq:"After the EQ",gateOpen:"Open",gateClosed:t=>`Closed · ${t}`,reducing:t=>`Reducing ${t}`,notReducing:"Not reducing",silent:"No sound",gr:"GR",plugOn:"On",plugOff:"Off",plugSwitch:t=>`${t} on or off`,memberOn:t=>`${t}: heard (press to silence)`,memberOff:t=>`${t}: silent (press to play)`},choirMe:"Me",accompaniment:"Accompaniment",choirOthers:"Others",mixLabel:"Mix",choirShare:{key:"Publish",keyTitle:"Share this recording with your choir, or send it by link",title:"Share your recording",lead:"Publish it to your choir: the members hear it in their Mixer, singing along with them.",replaces:"Replaces your recording of this piece there.",done:"Published",notEligible:"Only a whole take of the piece at 100 % tempo, with its score, can go to your choir. You can still send it by link.",linkTitle:"Send by link",linkLead:"Anyone with the link can listen to it.",link:"Send a link"},choirGroups:{soprano:"Soprano",alto:"Alto",tenor:"Tenor",bass:"Bass"},defaultWritten:"Default",defaultNone:"No interpretations",recordings:"Recordings",recordingsNone:"None",recordingsEmpty:"No recordings yet",you:"You",loop:"Loop",playTake:(t,e)=>`Play your take (${t}, ${e})`,stopRecording:"Stop the recording",playRecording:(t,e)=>`Play the recording (${t}${e?", on YouTube":""})`,chooseRecording:"Choose a recording to play it",hints:{playPause:"play / pause",record:"record",bar:"bar",marker:"marker",repeat:"repeat",violin:"violin",piece:"piece",yourTake:"your take",recording:"recording",help:"help"},panels:{navigation:"Transport",playback:"Settings",repertoire:"Repertoire",mixer:"Mixer"},panelsShort:{navigation:"Transp.",playback:"Sett.",repertoire:"Rep.",mixer:"Mixer"},panelOpen:t=>`Show ${t}`,panelClose:t=>`Hide ${t}`,controls:"Controls",stopVideo:"Stop the video",resizeVideo:"Drag to resize the video",flags:{loadingRecording:"Loading recording",aligning:(t,e)=>t==="spectrum"?`Analysing the spectrum ${e} %`:t==="aligning"?`Detecting the tempo: ${e} % of the score`:`Matching the piano notes ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violin muted",muted:t=>`${t}: muted`,pianoOff:"Piano muted",rec:"Rec",yourTake:"▶ Your take",takeOf:t=>`▶ ${t}’s take`,repeat:"Repeat",loadingSounds:"Loading sounds",loadingPiano:"Loading piano",loadingViolin:"Loading violin",noMicrophone:"No microphone",savingToAccount:"Saving to your account",savedToAccount:"✓ Saved to your account",keptForLater:"Kept here: saved to your account later",openingTake:"Loading your take",takeNotOpened:"Your take could not be loaded",syncing:t=>`Saving ${xt(t,"recording","recordings")} to your account`,synced:t=>`✓ ${xt(t,"recording","recordings")} saved to your account`,sharing:"Making a link to your take",shareFailed:"The take could not be shared",signInToShare:"Sign in to share your takes",openingShared:"Loading the shared take",sharedNotOpened:"The shared take could not be loaded",tapToPlay:"Tap anywhere to play",speakersHeard:"Piano heard through the microphone: use headphones",phoneMode:"Bluetooth headset in phone-call mode: use wired headphones or the device’s microphone"},messages:{soundsFailed:"Sounds could not be loaded",scoreFailed:"Score could not be loaded",pianoFailed:"Piano could not be loaded",recordingFailed:"Recording could not be loaded",noTimingYet:t=>`No timing yet: needs ${t}`,noTimingVideo:"No timing for this video",videoFailed:"Video could not be loaded",loadingScore:"Loading score…",engraving:"Engraving…"},edited:"↺ Edited",revertQuestion:"Revert?",editedTitle:"Annotated: click to go back to the score as written",revertConfirmTitle:"Click again to take every annotation off",versionClearTitle:"Take this version’s markings off",versionClearConfirmTitle:"Click again to take every marking of this version off",curveDefault:"Default",curveDefaultTitle:"As written, humanized",curveRecordingTitle:t=>`The recording: ${t}`,wrongNote:"Wrong note!",noteMissed:"Note missed!",wrongShort:"Wrong",missedShort:"Missed",stickerTimeShort:t=>`${t.toFixed(2)} s`,stickerPitch:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,stickerPitchTitle:(t,e)=>`${e?"Too high":"Too low"}: ${t}`,stickerTime:(t,e)=>`${t.toFixed(2)} s ${e?"late":"early"}`,annotate:"Annotate the notes selected",notesSelected:t=>xt(t,"note","notes"),finger:t=>`Finger ${t}`,openString:"Open string (0)",downBow:"Down-bow",upBow:"Up-bow",staccato:"Staccato",accent:"Accent",tenuto:"Tenuto",harmonic:"Harmonic (flageolet)",breath:"Breath mark: breathe here",consonantGroup:"Final consonant",consonantAt:t=>t?`Final consonant ${t===.5?"an eighth":t===1?"a quarter":"a half note"} before the note ends`:"Final consonant exactly at the note’s end",consonantMark:(t,e,n)=>e==="unheard"?`“${t}” not heard here`:e==="on"?`“${t}” right on its place`:`“${t}” ${Math.abs(n??0)} ms ${e==="late"?"late":"early"}`,dynamicTitle:t=>`Dynamic: ${t}`,fermata:"Fermata",slur:"Slur",crescendo:"Crescendo (<)",diminuendo:"Diminuendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Not while a take is kept: it lines up only with its timing",revert:"Revert",revertTitle:"Back to the marks written in the score",fx:{boo:["Boo!","Ouch!","Yikes!","Oops!","Eek!"],late:["Late!","Wake up!","Too slow!"],early:["Wait!","Too soon!","Hold it!"],short:["Too short!","Hold it longer!","Keep the bow going!"],surf:["Surf's up!","Cowabunga!","Ride it!"],snowboard:["Shred it!","Sick slide!","Whoosh!"],ski:["Whee!","Downhill!","Swoosh!"],penguin:["Wheee!","Belly slide!","Sliiide!"],tweet:"Tweet!",buzz:"Bzzz!",trill:"Trrrill!",chirp:"Chirp!",vibrato:["Vibrato!","So warm!","Lovely!","It sings!"]},signIn:"Sign in",signedInAs:t=>`Signed in as ${t}`,createAccount:"Create an account",createAccountButton:"Create account",haveAccount:"I have an account",forgotPassword:"Forgot your password?",or:"or",google:"Continue with Google",facebook:"Continue with Facebook",merge:{title:"Merge your accounts",lead:"You already have a Crescendu account with",steps:["We won’t create a second account: Facebook is added to the account you have.","To do so, sign in once the way you did before, with Google or your password, and click “Merge”.","From then on both take you into the same account, with everything in it."],google:"Merge with Google",orPassword:"or with your password",button:"Merge",cancel:"Not now",otherAccount:t=>`That was another account. Sign in with ${t}.`},agree:["By continuing you agree to our "," and have read our ","."],termsName:"terms of use",privacyName:"privacy policy",close:"Close",email:"Email",password:"Password",passwordHint:t=>`At least ${t} characters`,accountLead:t=>`Violin Hero works without an account. Signed in, your recordings are saved to your account${t?`, and the ${t===1?"take":`${t} takes`} kept in this browser with them`:""}.`,enterEmailFirst:"Enter your email address first.",resetSent:t=>`We sent a link to reset your password to ${t}.`,confirmEmail:"Please confirm your email address: the link is in your inbox.",anonymous:"Anonymous",save:"Save",nicknameTaken:t=>`“${t}” is already taken. Try another one!`,nicknameInvalid:"A nickname can’t contain “/”.",pickNickname:"Pick a nickname",nicknameDialog:{title:"Pick your nickname",lead:"It shows with your recordings in the top scores and the Hall of Fame. Other players see only this name, so choose one you’re happy to have public.",label:"Nickname",save:"Save nickname",later:"Later"},signOut:"Sign out",profile:"Profile",roles:"What are you up to?",creatorDashboard:"Your creator dashboard",invite:"Invite a violinist",inviteCopied:"Link copied: send it to a violinist!",inviteFailed:"The link could not be copied",inviteText:"Practise with me on Violin Hero: play along with the piano, see how in tune you are and record your takes.",feedback:"Feedback & bug reports",hintTitle:"Sign in to save your recordings and your progress",scoreHintTitle:"Sign in to print scores",scoreHintText:"Printable scores with your fingerings and marks are for signed-in players.",shareHintTitle:"Sign in to share your markings",shareHintText:"Your fingerings, bowings and dynamics get a link of their own: send it to your teacher or your stand partner.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"yours",shareScoreDone:{headlines:[["Link copied!","Your markings are ready to be shared."],["Off it goes!","Your fingerings and dynamics now have a link of their own."],["Ready to share!","A score marked up by you: that is real musicianship."]],ready:["Your link","Copy it, and your markings are ready to be shared."],anywhere:"Send it any way you like. Whoever opens it gets the piece with your fingerings, bowings and dynamics, added to their pieces under your name.",who:["Your teacher","Your stand partner","Your orchestra","Your friends"],cheers:["Good fingerings are a gift: pass them on.","Your teacher will love seeing how you think about the music.","Ling Ling marks every score. Now so do you.","Shared markings, fewer wrong notes, more music."]},sharedScore:{sharedBy:t=>`${t} shared their markings with you`,sharedByAnyone:"Someone shared their markings with you",yours:"Your own markings",you:"yours",someone:"shared",intro:"A marked-up score, ready to practise with: their fingerings, bowings and dynamics on the notes, played as marked.",kinds:{fingerings:"fingerings",bowings:"bowings",articulations:"articulations",dynamics:"dynamics",phrasing:"slurs, fermatas and rit."},cheers:["Learning from each other is how musicians grow.","Somebody thought of you while marking this score.","New fingerings, new ideas: give them a try!","Practising together, even apart."],open:"Open the score",later:"Not now",addedAs:(t,e)=>`Added to your pieces as “${t} – ${e}”, beside the original.`},hintText:t=>`${t>1?`${t} takes are`:"Your take is"} kept in this browser until you sign in, then saved to your account, with the pieces you have unlocked.`,hintDismiss:"Don’t show this again",graphShow:"Show the tempo and loudness graph",graphHide:"Hide the tempo and loudness graph",logoHintTitle:"Your start page is up here",startPage:"To the start page",logoHintText:"Tap the Violin Hero icon to open the start screens again: tune your violin and pick a piece.",recordHints:["One more go? Start a new take!","Every take brings the next piece closer. Record another!","Practice makes perfect: tap here for a new take."],navHintTitle:"Step through the bars",navHintText:"Back and Forward jump a bar at a time, so you can hear a passage again. Or drag the score.",pageHintTitle:"There’s more to discover",pageHintText:"Close the page view here: the normal view has all the pieces, recordings of great violinists to play along with, your takes and the settings.",guide:{passed:"Well done! On to the next piece",passedLead:t=>`${t} is waiting for you.`,again:"One more take?",againLead:(t,e)=>e===1?`Reach ${t} %, or record one more take, to open the next piece.`:`Reach ${t} %, or record ${e} more takes, to open the next piece.`,allDone:"You’ve played every starter piece!",allDoneLead:"The normal view has the whole library, recordings of great violinists and more.",play:t=>`Play ${t}`,recordAgain:"Record again",onceMore:"Once more",tryOther:t=>`Try ${t}`,toNormal:"To the normal view",leave:"No more suggestions"},auth:{wrongPassword:"Wrong email or password.",emailInUse:"There is already an account with this email: sign in instead.",weakPassword:t=>`The password needs at least ${t} characters.`,invalidEmail:"That email address doesn’t look right.",tooMany:"Too many attempts: please wait a moment and try again.",popupClosed:"The Google window was closed before signing in.",otherWay:"There is already an account with this email address. Sign in the way you did before (with Google or your password).",popupBlocked:"The browser blocked the Google window: allow pop-ups for this page.",unauthorizedDomain:"Signing in isn’t enabled for this address yet.",network:"No connection: check your network and try again.",failed:t=>`That didn’t work (${t}).`},deleteTake:{title:"Delete this take?",account:"It will be deleted from your account for good: the recording and everything saved with it.",ranked:"It is in the top scores of this piece too: it will be removed from them, for everyone.",place:t=>`It is number ${t} in the hall of fame: it will be removed from it, for everyone.`,keepsProgress:"The pieces you have unlocked stay unlocked.",confirm:"Delete it",cancel:"Keep it",deleting:"Deleting…",failed:"The take could not be deleted. Please try again."},shareDone:{headlines:[["Link copied!","Your recording is ready to be heard."],["Off it goes!","Your take now has a link of its own."],["Ready to share!","Be proud of it: you played that."]],ready:["Your link","Copy it, and your recording is ready to be heard."],anywhere:"Send it any way you like: by message, email or chat. Whoever opens it hears your recording, with the piano, just as you played it.",who:["Your teacher","Your parents","Grandma and Grandpa","Your friends"],cheers:["Every take you share is a little concert.","Your teacher will love hearing how you practise.","Ling Ling shares every take. Well, the good ones. This one counts.","Music is for listening to. Let them hear you!"],playedAlong:"Played along with",copy:"Copy",copyAgain:"Copy again",copiedAgain:"✓ Copied",done:"Done",text:t=>`Listen to me playing ${t} on Violin Hero!`},install:{title:"Install Violin Hero as an app",tap:"Tap",share:"Share",then:"then",add:"Add to Home Screen",openInSafari:"Open this page in Safari, tap",chromeToo:"Newer Chrome versions have it under the share icon in the address bar too.",close:"Close"},practiceTips:{title:"Practice tips",video:"Watch the video",videoTitle:"Opens the video on YouTube, in a new tab",start:"Start now",close:"Close",open:"Practice tips",openTitle:"Show the practice tips for this piece",festiveTitle:"Christmas practice tips",festiveLead:"It’s Christmas time, the best time of year for this one: practise it now and play it under the tree for family and friends."},headphones:{title:"Put on wired headphones",wired:"Wired:",wiredWhy:"the microphone hears only your violin.",speakers:"Speakers:",speakersWhy:"the piano gets recorded too.",bluetooth:"Bluetooth:",bluetoothWhy:"lags and can distort your take.",gotIt:"Got it!",appleAdapter:"Use Apple’s own 3.5 mm adapter: others may go silent."},singAlong:{start:"Sing along",startNote:"Nothing is recorded yet: you simply sing along.",claim:"Sing along!",claimLead:"The playback will guide you.",firstNoteTitle:"Your first note",firstNote:"The piano gives you your note",notRecording:"Nothing is recorded yet",again:[{title:"Once more!",text:"Try as often as you like: nothing is recorded yet."},{title:"Sing along!",text:"The accompaniment carries you."},{title:"From the start",text:"As often as you like."},{title:"Keep going!",text:"Whenever you feel ready: Record."}],stop:"Stop",record:"Record",tryAgain:"Start again",barBack:"One bar back",metronome:"Click",volume:"Sound loud enough? You’ll need it!",play:"Continue",setupNext:"Continue",setupNeedsDelay:"Measure the delay first, then go on.",setupNeedsDelays:"Measure the audio and the video delay first, then go on.",readyTitle:"Ready?",readyHint:"Start your first recording.",choirTitle:"Your choir is here",choirHint:t=>t===1?"Someone in your choir has already recorded this piece. Switch the choir on and sing along with them.":`${t} others in your choir have already recorded this piece. Switch the choir on and sing along with them.`,choirOn:"Switch the choir on"},welcome:{loading:["Rosining the bow…","Tuning the piano…","Unpacking the scores…","Warming up the orchestra…","Polishing the strings…","Dimming the lights…"],progress:t=>`${t} %`,loadingFailed:"Some sounds could not be loaded. Check your connection.",continueAnyway:"Continue anyway",begin:"Let’s go",skipIntro:"Skip",beginNote:"Your browser will ask to use the microphone, so Violin Hero can hear your violin.",points:{wired:"Headphones:",wiredWhy:"put on to hear the playback.",mic:"Microphone:",micWhy:"allow to record your performance.",speakers:"Speakers:",speakersWhy:"turn them off.",bluetooth:"Bluetooth:",bluetoothWhy:"avoid, it can distort your take."},hearString:t=>`Hear the ${t}`,stopTone:"Stop the tone",byEar:"Tune by ear: the beats slow down as you get close",tuner:"Tuner",level:"Level",gain:"Input",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t)} dB`,gainTitle:"The microphone’s gain: set it so your loudest notes reach the green area (double-click: +12 dB)",cal:{key:"Calibrate",keyTitle:"Measure the delay from the speakers to the microphone, so your recordings line up with the piano",ms:t=>`${t} ms`,title:"Measure audio latency",speakers:"Plug in the headphones you play with and turn the volume up.",micOn:"Hold one earpiece right at your device’s microphone.",quiet:"Keep quiet for a few seconds while the clicks play.",measuring:(t,e)=>`Listening… click ${t} of ${e}`,result:t=>`Delay: ${t} ms`,notHeard:"The clicks weren’t heard.",unsteady:"The clicks were heard unevenly.",tryAgain:"Turn the volume up, hold the earpiece right at the microphone, keep quiet and try again.",needMic:"The microphone is needed: allow it first.",back:"Done",start:"Start measuring",again:"Measure again",newMeasurement:"New measurement",save:"Save"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Microphone",inputTitle:"The input in use, as your system names it; for a stereo one, each side’s level",setupTitle:"Audio setup",setupTitleVideo:"Audio/video setup",filmTakes:"Film my takes",camera:"Camera",cameraNoFilm:"Off (no video)",cameraOff:"Choose a camera to film your takes",cameraRefused:"The camera wasn’t allowed: allow it in the browser’s settings for this site.",cameraNone:"This browser can’t film.",cameraGuarded:"This is a child’s account: your parents decide about filming, and their page doesn’t let them allow it yet.",videoCal:{title:"Measure video latency",inView:"Sit so the camera sees your hands.",clap:"Clap firmly, again and again, until the time is up.",micOn:"The microphone hears the claps: keep it on.",clapNow:t=>`Clap now! ${t} s`,analysing:"Finding the claps …",result:t=>`From ${t} claps`,guess:t=>`Not measured yet: ${t} ms assumed`,failed:"Not enough clear claps were found.",tryAgain:"Clap firmly with your hands in view, and try again."},inputDevice:"Microphone input",outputDevice:"Headphone output",systemDefault:"System default",sidesTitle:"Each side of the input on its own: a silent or noisy side shows here",newInput:t=>`New input: ${t}`,useInput:"Use it",levelTitle:"The input level: your loudest notes in the green area make a clean take; in the red one they distort",startTuning:"Start tuning",micWhy:"Violin Hero listens through your microphone.",micAsking:"Allow the microphone in your browser…",micDenied:"No microphone. Allow it in your browser to tune and record.",playString:t=>`Play your ${t} string`,tuneUp:"Tune up",tuneDown:"Tune down",inTune:"In tune!",offBy:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,wrongString:(t,e)=>`That sounds like your ${t} string. Play the ${e}.`,farOff:"Far off: turn slowly and listen",stringTitle:t=>`Tune the ${t} string`,aDone:t=>`Your ${t} is in tune!`,others:t=>`Now the ${t.length>1?`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`:t[0]}, or tune them yourself.`,skip:"I’ll tune the others myself",alreadyInTune:"My violin is already in tune",closeTool:"Done",allDone:"All four strings in tune. Beautiful!",next:"Continue",ready:"Ready to go",firstPiece:"Your first piece",firstPieceLead:"Easy to start with, lovely to play. New pieces unlock once you can play this one well.",accountTitle:"Keep what you play",accountLead:"Free: your takes and progress, on every device.",signIn:"Sign in",signedIn:t=>`Signed in as ${t}: your takes and progress are saved.`,offline:"Offline: your takes wait on this device and are saved once you are back online.",go:"Bows up!",goNote:"Two bars count you in, then your first take starts.",backToTuner:"Back to the tuner"},deleteAccount:{menu:"Delete account…",title:"Delete your account?",loading:"Looking up what is stored…",lead:"This is what will be deleted for good:",nickname:t=>`Your nickname “${t}”`,takes:(t,e)=>`${t===1?"1 recording":`${t} recordings`}${e?` (${e} in the hall of fame)`:""}, with their share links`,progress:(t,e)=>`Your progress: ${t===1?"1 piece":`${t} pieces`} passed, ${e===1?"1 take":`${e} takes`} counted`,practice:t=>`Your practice time (${t})`,markings:(t,e)=>`Your markings on ${t===1?"1 piece":`${t} pieces`}${e?`, ${e} shared`:""}`,packsAdded:t=>`Content packs you added: ${t}`,packsMade:t=>`Content packs you made: ${t}`,creatorProfile:"Your creator profile",invitations:t=>`Your invitations${t?` (${t} karma)`:""}`,feedback:(t,e,n)=>`Your feedback: ${t===1?"1 post":`${t} posts`}, ${e===1?"1 vote":`${e} votes`}${n?", your rating":""}`,family:(t,e)=>`Your family links: ${t===1?"1 child only you look after":`${t} children only you look after`}, ${e===1?"1 partner":`${e} partners`}`,teaching:t=>`Your teaching: ${t===1?"1 room":`${t} rooms`}, the voice memos of your lesson notes`,browser:"What this browser keeps (settings, takes waiting to upload)",packsBought:t=>`Content packs you bought will be lost: ${t}. Your purchases belong to this account; with a new one you would have to buy them again.`,packsKept:t=>`Kept: ${t}. Players have added these packs, so they stay, with your creator profile.`,creatorStays:"Your creator profile and your content packs stay. To delete them, choose “Delete creator data…” in the account menu on the creator page.",login:"Your login is deleted too.",loginSchool:"Your login stays: it is still in use elsewhere in Crescendu.",loginCreator:"Your login stays, for your creator data.",creatorMenu:"Delete creator data…",creatorTitle:"Delete your creator data?",creatorNothing:"Nothing can be deleted: players have added all your content packs.",creatorLoginPacks:"Your login stays, for the content packs players have.",creatorLoginPlayer:"Your login and your Violin Hero data stay. To delete them, choose “Delete account…” in Violin Hero’s account menu.",creatorCancel:"Keep my creator data",creatorConfirm:"Delete creator data",doneCreator:"Your Violin Hero data is gone. Your login stays for your creator data: delete that on the creator page, and the login goes with it.",creatorDoneLogin:"Your creator data and your login are gone. Thank you for creating for Violin Hero!",creatorDoneSchool:"Your creator data is gone; your login stays, as it is still in use elsewhere in Crescendu.",creatorDonePacks:"The packs no player had are gone. The others stay, with your creator profile and your login.",creatorDonePlayer:"Your creator data is gone. Your login and your Violin Hero data stay.",understood:"I understand that this can’t be undone.",cancel:"Keep my account",confirm:"Delete everything",deleting:"Deleting…",steps:{takes:"Deleting your recordings…",library:"Removing the packs you added…",packs:"Deleting the packs you made…",profile:"Deleting your creator profile…",feedback:"Deleting your feedback…",messages:"Deleting your messages and praise…",rest:"Deleting your progress and practice time…",family:"Deleting your family links…",teaching:"Deleting your rooms and voice memos…",other:"Deleting the rest of your Crescendu data…",browser:"Clearing this browser…",login:"Deleting your login…"},failed:"Not everything could be deleted. Please try again.",doneTitle:"Your data is deleted",doneLogin:"Your account is gone. Thank you for practising with Violin Hero!",doneSchool:"Your Violin Hero data is gone; your login stays, as it is still in use elsewhere in Crescendu.",doneAgain:"Your data is gone. To delete your login too, sign in once more and choose Delete account again.",ok:"OK"},nextPack:{title:"You’ve opened the whole starter pack!",text:"Ready for more? “Popular violin pieces” has 25 favourites, from the Méditation to the Czardas, all open as soon as you add it.",signIn:"Sign in in the marketplace to add it.",show:"Show me",later:"Later"},packUpdates:{title:t=>t===1?"A content pack has an update":`${t} content packs have updates`,untitled:"Content pack",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Update",updating:"Updating…",keep:t=>`Keep version ${t}`,later:"Decide later",note:"Your takes stay either way."},sharedTake:{sharedBy:t=>`${t} shared a recording with you`,sharedByAnyone:"Someone shared a recording with you",yours:"Your own recording, from your link",played:"Played",tempo:"Tempo",originalTempo:"Original tempo",section:"Section",playedAlong:"Played along with",bars:(t,e)=>`Bars ${t}–${e}`,score:"Score",withPiano:"You will hear the violin as it was played, with the piano, the notes scrolling along.",listen:"Listen",playsOnClose:"It starts playing when you close this card."},unlock:{locked:"Locked: unlock it by passing pieces or by practising",next:"Next to unlock",all:"Every piece is unlocked. Ling Ling would be proud!",pass:(t,e)=>`Score ${t} % on a piece you haven’t passed yet (at ${e} % tempo or faster)`,thisTake:t=>`This take: ${t} %`,passedNow:"✓ Passed!",passedBefore:"This piece is passed already: try another one.",or:"or",signIn:"Sign in to keep your progress safe, on every device.",takes:t=>`record ${t} more ${t===1?"take":"takes"}`,nudges:["Ling Ling practises 40 hours a day. A few more takes won’t hurt!","Practise like Ling Ling: 40 hours a day (a few minutes is a fine start).","Ling Ling is watching. Pick up the violin!","Don’t be a viola. Record it once more!","Emotional damage? No: emotional progress!","Every take brings you a little closer to Ling Ling.","Sacrifice your sleep for Ling Ling? Just one more take will do.","Ling Ling would play it with a hangover. You can play it now!"],title:"New piece unlocked!",titleMany:t=>`${t} new pieces unlocked!`,newLevel:t=>`New level: ${t}!`,play:"Play it now",later:"Later",cheers:["Ling Ling would be proud!","That’s the 40-hours-a-day spirit!","Ling Ling approves. Keep going!","Your practice paid off. On to the next one!","Brilliant! Even a viola would cheer for that."],levelCheers:["A whole new level! Even Ling Ling started as a Beginner once.","Level up! Ling Ling is getting nervous.","Welcome to the next level: the real practice starts now!"]},best:(t,e,n)=>`Best: ${t} · ${e}/${n}`,bestTitle:"Show the top scores for this piece",practising:t=>t===1?"1 other player is currently practising this piece":`${t} other players are currently practising this piece`,invites:["No top score yet: your chance to make it to the top!","The podium is empty. Record the whole piece and claim first place!","Nobody has scored this one yet. Be the first!","First place is up for grabs: practise, then record!","An empty hall of fame is waiting for your name.","Be the one everybody else has to beat.","Fresh piece, clean slate: set the score to beat!","Gold is still free for this piece. Go and get it!"],board:{title:"Hall of fame",of:t=>`Top scores for ${t}`,practise:"Let’s practise",you:"you",play:t=>`Play ${t}’s take`,openPodium:t=>`${t===1?"One place on the podium is":`${t} places on the podium are`} still free: it could be yours!`,toEnter:t=>`Score more than ${t} points to make it onto the board.`,onBoard:t=>`You are number ${t}: can you climb even higher?`,top:"You are at the top. Can you beat your own best?",signIn:"Sign in so that your takes count.",howTo:"Record the whole piece, from its start to its end, at full tempo (100 %), to make it onto the board.",tips:["Practise the hard bars first: mark them with Marker and let Repeat go round.","Slow the tempo down until every note sits, then build it up again.","Play along with the violin first, then switch it off and take over.","Listen to a great performance under Interpretation, then make it your own."]},yourScore:"Your score",yourScoreOpen:"Your score: show it in full",yourScoreTitle:"Your score: click for the details",outOf:t=>`of ${t}`,stars:t=>`${t} of 5 stars`,reportSteps:{next:"What’s next",done:"Done",practise:"Keep practising",back:"Back to your score",title:"Your next steps",applause:"Applause"},shareSignIn:"Proud of this take? Sign in and you can share it: send the link to your teacher, your family or your friends, and they hear exactly how you played.",unranked:t=>`Played at ${t} % of the tempo, so this take doesn’t count for the top scores: only takes at 100 % do. ${t<100?"Work your way up to full speed, then record it again!":""}`,publish:{title:"This take qualifies for the Hall of Fame!",text:"Publish it and your recording becomes public: it is listed on this piece’s board and in the Hall of Fame under your nickname, and anyone can listen to it there.",signInText:"Sign in to publish it: your recording then becomes public, listed on this piece’s board and in the Hall of Fame.",publish:"Publish",publishing:"Publishing…",saving:"Saving…",signIn:"Sign in",failed:"It couldn’t be published. Please try again.",doneTitle:"You’re in the Hall of Fame!",doneText:"Your recording is published on this piece’s board and in the Hall of Fame.",see:"See it"},choirPublish:{title:"Share this take with your choir",text:"Publish it to your choir: its members hear it in their Mixer, sung along with theirs, and the choir’s leaders can put the choir’s recordings together for the Hall of Fame.",signInText:"Sign in to share it with your choir: its members then hear it sung along with theirs.",noChoir:"Recordings like this one can be shared with a choir on Crescendu: once you sing in one, you publish them there for the other members to sing along with.",publish:t=>`Publish to ${t}`,again:t=>`Publish again to ${t}`,choir:"Choir",publishKey:"Publish",againKey:"Publish again",published:"✓ Published",publishing:"Publishing…",uploading:(t,e)=>`Video ${t} %${e?` · ${e} left`:""}`,withdraw:"Withdraw",signIn:"Sign in",failed:"That didn’t work. Please try again.",doneTitle:"Your choir has this piece from you",doneText:"The members hear it in their Mixer. Publishing again replaces it with this take."},topScores:t=>`Top scores for ${t}`,scoreHeadline:"Score",loading:"Loading…",noScores:"No scores for this piece yet.",thisTake:"(this take)",styleBonus:"Style bonus",badTaste:"Bad taste",bonus:"Bonus",penalty:"Penalty",categories:{intonation:"Intonation",timing:"Timing",sound:"Sound",dynamics:"Dynamics",trills:"Trills",consonants:"Consonants",missed:"Missed notes",wrong:"Right notes"},details:{nothingHeard:()=>"Nothing heard",spotOn:()=>"Spot on",centsOff:t=>`${t} ¢ off on average`,landedLate:t=>` · ${t} landed late`,noEntries:()=>"No entries heard",earlyLate:(t,e)=>[t&&`${t} early`,e&&`${e} late`].filter(Boolean).join(", "),onTime:()=>"Always on time",heldShort:t=>`On time, ${t} long ${t===1?"note":"notes"} cut short`,alsoHeldShort:t=>` · ${t} long ${t===1?"note":"notes"} cut short`,playedOnly:(t,e)=>` · only ${t} of ${e} notes played`,shaping:t=>`Shaping followed ${t} %`,allFollowed:t=>`All ${t} changes followed`,wrongWay:(t,e)=>`${t} of ${e} played the wrong way`,tooFewNotes:()=>"Too few notes heard",trills:(t,e,n)=>`${t} of ${xt(e,"trill","trills")}${t?` · ${n.toFixed(0)} notes/s`:""}`,consonantsTogether:(t,e)=>`${t} of ${e} consonants right on their place`,consonantsOnset:t=>` · before the vowel ${t>0?`${t} ms late`:`${-t} ms early`}`,consonantsCoda:t=>` · final ones ${t>0?`${t} ms late`:`${-t} ms early`}`,notesOf:(t,e)=>`${t} of ${e} notes`,rightOf:(t,e)=>`${t} of ${e} notes right`,noneMissed:()=>"None missed",noneWrong:()=>"All notes right",noLongNotes:()=>"No long notes heard",vibrato:(t,e)=>`Vibrato on ${t} of ${e} long notes`,openStrings:()=>"Long open strings held steady",vibratoFast:(t,e)=>` · fast for ${We[e]} (${t} per second)`,vibratoSlow:(t,e)=>` · slow for ${We[e]} (${t} per second)`,vibratoWide:(t,e)=>` · wide for ${We[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · narrow for ${We[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · for full points: a slower vibrato, ${e}–${n} swings a second in ${We[i]} (yours ${t})`,vibratoFaster:(t,e,n,i)=>` · for full points: a faster vibrato, ${e}–${n} swings a second in ${We[i]} (yours ${t})`,vibratoNarrower:(t,e,n,i)=>` · for full points: a narrower vibrato, ${e}–${n} ¢ in ${We[i]} (yours ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · for full points: a wider vibrato, ${e}–${n} ¢ in ${We[i]} (yours ${t} ¢)`,vibratoMore:t=>` · for full points: vibrato on the ${t===1?"note":`${t} notes`} played without`,vibratoSteadier:t=>` · for full points: hold ${t===1?"one long note":`${t} long notes`} steadier, or add vibrato`,vibratoOptional:t=>` · optional in ${We[t]}`,slidesInStyle:(t,e,n)=>`${Ta(t,e)}, in ${n} style`,slidesBadTaste:(t,e,n)=>`${Ta(t,e)}: bad taste in ${n} music`},silent:[["Did you play?","We didn’t hear a single note."],["Hello? Anyone there?","Not one note reached us."],["Silent night?","That was very quiet. Too quiet."],["Did you play?","Ling Ling heard nothing, and Ling Ling hears everything."]],silentTip:"Check that the microphone is allowed and the level under Input moves while you play.",praise:[[["Brilliant!","That was concert ready."],["Bravo!","The audience is on its feet."],["Outstanding!","Hardly a note out of place."],["Magnificent!","You made that piece sing."]],[["Congratulations!","A lovely performance."],["Beautiful!","That was a pleasure to listen to."],["Wonderful!","You really know this piece."],["Lovely playing!","Just a few details from perfect."]],[["Well played!","Nicely done. A little polish and it shines."],["Good job!","The piece is coming together."],["Nice work!","You are well on your way."],["Solid take!","Keep at it and it will sparkle."]],[["Good effort!","You can do better. Try it once more!"],["Getting there!","Every run makes it smoother."],["Not bad!","A few more rounds and you have it."],["Keep it up!","The hard part is behind you."]],[["Keep going!","Every take makes you better."],["Good start!","Slow it down and try again."],["Don’t give up!","Even the greats practised this."],["Practice makes perfect!","Mark a tricky bar and loop it."]]],highlights:{intonation:["Your intonation was the star of this take.","Beautifully in tune!","Your ear did a great job."],timing:["Right on the beat, all the way through.","Your timing was rock solid.","You and the piano were perfectly together."],sound:["What a lovely vibrato!","Your long notes really sang.","A warm, singing tone."],dynamics:["Your dynamics brought the music to life.","Lovely shaping, loud and soft.","You followed every crescendo and diminuendo."],trills:["Sparkling trills, nice and quick!","Your trills were a joy: quick and clean.","Like a songbird: lovely trills."],consonants:["Crisp consonants, right on the beat!","Your consonants were perfectly placed.","A choir director’s dream: every consonant together."],missed:["Not a single note left out.","Every note was there.","You never lost your place."],wrong:["Clean as a whistle: no wrong notes.","Every note was the right one.","Wonderfully accurate fingers."],glide:["Beautiful, expressive slides: very Romantic!","Your glissandi gave it real Romantic warmth.","Lovely portamento, just right for this music."]},tips:{intonation:["Tip: tune the long notes against the piano.","Tip: play the tricky bars slowly and listen to each note.","Tip: check your intonation against the open strings."],timing:["Tip: switch on Click and come in with the beat.","Tip: count the rests out loud before you come in.","Tip: slow the tempo down and build it up again."],sound:["Tip: try a little vibrato on the long notes.","Tip: keep the bow moving evenly through the long notes.","Tip: let the long notes ring and sing."],dynamics:["Tip: watch the p and f marks and make the contrast bigger.","Tip: shape the hairpins: grow and fade with the bow.","Tip: play the soft passages really soft, then let the loud ones out."],trills:["Tip: practise the trills slowly and evenly, then speed them up.","Tip: keep the trilling finger light and close to the string.","Tip: start the trill calmly, then let it get faster and faster."],consonants:["Tip: sing the consonant just before the beat, so the vowel lands right on it.","Tip: place the final consonants exactly where the note ends, crisp and short.","Tip: mark where your final consonants go in the score, then sing them right there."],missed:["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: keep the bow on the string so every note sounds.","Tip: mark the bars where notes went missing and loop them."],wrong:["Tip: mark the tricky bars and repeat them slowly.","Tip: check the fingering where the wrong notes were.","Tip: play the hard passage slower until every note is right."],glide:["Tip: shift cleanly between notes: no sliding in this style.","Tip: in Classical and Baroque music, keep the shifts clean and quick.","Tip: lift the slides out: change position without a glissando."]}},cg=[0,1,2,3,4].flatMap(t=>[0,1,2,3].map(e=>[1.5+e*2.6+t%2*1.3,1.3+t*2.05])).filter(([t])=>t<10.5),hg=K`<rect width="24" height="24" fill="#b22234" />
  ${[1,3,5,7,9,11].map(t=>K`<rect y=${t*24/13} width="24" height=${24/13} fill="#fff" />`)}
  <rect width="11" height=${7*24/13} fill="#3c3b6e" />
  ${cg.map(([t,e])=>K`<circle cx=${t} cy=${e} r="0.55" fill="#fff" />`)}`,dg=K`<rect width="24" height="8" fill="#000" /><rect y="8" width="24" height="8" fill="#dd0000" /><rect y="16" width="24" height="8" fill="#ffce00" />`,je={en:{name:"English",locale:"en-US",flag:hg,messages:lg},de:{name:"Deutsch",locale:"de-DE",flag:dg,messages:ag}},oh="violinhero-language";function ug(){try{const t=localStorage.getItem(oh);if(t&&t in je)return t}catch{}for(const t of navigator.languages??[navigator.language]){const e=t.slice(0,2).toLowerCase();if(e in je)return e}return"en"}let dn=ug();const ls=new Set;document.documentElement.lang=dn;function be(){return dn}function q(){return og(je[dn].messages,dn)}function ah(t,e=!0){if(t!==dn){if(dn=t,document.documentElement.lang=t,e)try{localStorage.setItem(oh,t)}catch{}for(const n of ls)n()}}function ro(t){return ls.add(t),()=>ls.delete(t)}class so{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.stop=ro(()=>this.host.requestUpdate())}hostDisconnected(){var e;(e=this.stop)==null||e.call(this)}}const $i="https://www.crescendu.com",pg=`${$i}/session.html`,Ea="crescendu-session",lh="crescendu-session-at",fg="https://europe-west3-crescendu.cloudfunctions.net/heroSession",_a=3e3;function mg(t){try{const e=new URL(t);return e.protocol==="https:"&&(e.hostname==="crescendu.com"||e.hostname.endsWith(".crescendu.com"))}catch{return!1}}function gg(){try{return Number(localStorage.getItem(lh))||0}catch{return 0}}function di(t){try{localStorage.setItem(lh,String(t))}catch{}}async function yg(t){const e=t.currentUser;if(e)try{const n=await fetch(fg,{method:"POST",headers:{Authorization:`Bearer ${await e.getIdToken()}`}});if(!n.ok)return;const{token:i}=await n.json();return typeof i=="string"?i:void 0}catch{return}}let Aa=!1;function wg(t){if(Aa||!mg(location.origin))return;Aa=!0;let e=!1,n=!1;if(location.origin===$i){an(t,()=>{e&&di(Date.now()),e=!0});return}const i=document.createElement("iframe");i.src=pg,i.title="Crescendu session",i.tabIndex=-1,i.setAttribute("aria-hidden","true"),i.style.cssText="position:absolute;width:0;height:0;border:0;visibility:hidden";let r,s=!1;const o=w=>{var b;return(b=i.contentWindow)==null?void 0:b.postMessage({type:Ea,...w},$i)},a=async()=>{var P;if(!r||!e)return;const w=((P=t.currentUser)==null?void 0:P.uid)??null;if(r.uid===w)return;const b=gg();if(r.at>b||r.at===b&&r.uid!==null){r.uid?s||(s=!0,o({want:!0})):(n=!0,di(r.at),await sc(t).catch(()=>n=!1));return}if(w){const U=await yg(t);U&&o({token:U,at:b})}else o({signOut:!0,at:b})};window.addEventListener("message",w=>{const b=w.data;w.origin!==$i||w.source!==i.contentWindow||(b==null?void 0:b.type)!==Ea||("token"in b?(s=!1,n=!0,di(b.at),ec(t,b.token).catch(()=>n=!1)):"uid"in b&&(r={uid:b.uid,at:Number(b.at)||0},a()))}),an(t,w=>{e?n?n=!1:di(Date.now()):e=!0,w||(s=!1),a()}),i.addEventListener("load",()=>o({hello:!0}));const l=()=>document.body.append(i),c=globalThis.requestIdleCallback,y=()=>c?c(l,{timeout:_a}):setTimeout(l,_a/3);document.readyState==="complete"?y():addEventListener("load",y,{once:!0})}const bg=100,kg=300,vg=2*6e4,Sg=10*6e4,ch=["instagram","facebook","tiktok","google","youtube","reddit","friend","teacher","school","press","other"],Or={question:{de:"Wie hast du von Crescendu erfahren? (freiwillig)",en:"How did you hear about Crescendu? (optional)"},none:{de:"Keine Angabe",en:"Rather not say"},answers:{instagram:{de:"Instagram",en:"Instagram"},facebook:{de:"Facebook",en:"Facebook"},tiktok:{de:"TikTok",en:"TikTok"},google:{de:"Google-Suche",en:"Google search"},youtube:{de:"YouTube",en:"YouTube"},reddit:{de:"Reddit",en:"Reddit"},friend:{de:"Freunde oder Familie",en:"Friends or family"},teacher:{de:"Meine Lehrerin / mein Lehrer",en:"My teacher"},school:{de:"Meine Musikschule",en:"My music school"},press:{de:"Presse, Zeitschrift, Blog",en:"Press, magazine, blog"},other:{de:"Anders",en:"Something else"}}},Sn=(t,e=bg)=>(t??"").trim().slice(0,e);function Tg(t,e){const n=e.split("/").map(i=>/^(?=.*\d)[A-Za-z0-9_-]{16,}$/.test(i)?":id":i).join("/");return`${t}${n}`.slice(0,kg)}function Eg(){try{const t=new URLSearchParams(location.search);return{source:Sn(t.get("utm_source")).toLowerCase(),medium:Sn(t.get("utm_medium")).toLowerCase(),campaign:Sn(t.get("utm_campaign")).toLowerCase(),content:Sn(t.get("utm_content")),term:Sn(t.get("utm_term")),landing:Tg(location.hostname,location.pathname)}}catch{return{source:"",medium:"",campaign:"",content:"",term:"",landing:""}}}const xi=Eg(),_g=Date.now();let oo="",hh=!1;function Ag(){return{...xi}}function Ig(){return!!(xi.source||xi.medium||xi.campaign)}function $g(t){oo=ch.includes(t)?t:""}function Ia(){return oo}function si(){hh=!0}function xg(t,e=Date.now()){const n=t?Date.parse(t):NaN;return!Number.isFinite(n)||n<_g-vg||e-n>Sg?!1:hh||Ig()}function Pg(t){return{...Ag(),selfReported:oo,app:t}}const Ng={apiKey:"AIzaSyAYev6vpeTmN9xSDoEyUAMwLYD0abE6Sr4",authDomain:"www.crescendu.com",projectId:"crescendu",storageBucket:"crescendu.firebasestorage.app",messagingSenderId:"546406424194",appId:"1:546406424194:web:360ebdab42c0baa5c01e9b"},xn=8,dh=Ng,wr=new URLSearchParams(location.search).get("manage")??"",uh=As(dh),cs=wr?As(dh,"manage"):uh,Q=wr?ql(cs,{persistence:ts}):wc(cs),Cg=wr?wc(uh):Q,Dt=Vm(cs);Q.languageCode=be();ro(()=>Q.languageCode=be());wg(Cg);const $a=new Set;async function Dg(t){if(!($a.has(t.uid)||!xg(t.metadata.creationTime))){$a.add(t.uid);try{const e=Qt(Dt,"attribution",t.uid);if((await to(e)).exists())return;await qm(e,{...Pg("violinhero"),at:ih()})}catch{}}}wr||an(Q,t=>t&&void Dg(t));an(Q,t=>{t!=null&&t.emailVerified&&t.getIdTokenResult().then(e=>{if(e.claims.email_verified!==!0)return t.getIdToken(!0)}).catch(()=>{})});function ao(){return Q}function Rg(t){return an(Q,t)}async function Lg(){const t=Q.currentUser;t&&(await t.reload(),await t.getIdToken(!0))}async function Mg(t,e){si(),await ic(Q,t.trim(),e)}async function Og(t,e){si();const{user:n}=await Pp(Q,t.trim(),e);await rc(n)}async function Vg(){si(),await Ms(Q,new Pe)}async function zg(){si();const{user:t}=await Ms(Q,new xe);t.email&&!t.emailVerified&&await rc(t).catch(()=>{})}function Fg(t){var i;if(t.code!=="auth/account-exists-with-different-credential")return null;const e=xe.credentialFromError(t),n=((i=t.customData)==null?void 0:i.email)??"";return e&&n?{email:n,credential:e}:null}async function Ug(t,e,n=""){si();const i=new Pe;i.setCustomParameters({login_hint:t.email});const{user:r}=e==="google"?await Ms(Q,i):await ic(Q,t.email,n);if((r.email??"").toLowerCase()!==t.email.toLowerCase())return"other";try{await Ip(r,t.credential)}catch(s){const o=s.code??"";if(o!=="auth/provider-already-linked"&&o!=="auth/credential-already-in-use")throw s}return"merged"}function xa(t){return xp(Q,t.trim())}function Bg(){return sc(Q)}function Et(t){const e=t.code??"",n=q().auth;return["auth/invalid-credential","auth/wrong-password","auth/user-not-found"].includes(e)?n.wrongPassword:e==="auth/email-already-in-use"?n.emailInUse:e==="auth/weak-password"?n.weakPassword(xn):e==="auth/invalid-email"?n.invalidEmail:e==="auth/too-many-requests"?n.tooMany:e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?n.popupClosed:e==="auth/popup-blocked"?n.popupBlocked:e==="auth/account-exists-with-different-credential"?n.otherWay:e==="auth/unauthorized-domain"?n.unauthorizedDomain:e==="auth/network-request-failed"?n.network:n.failed(e||String(t))}async function Hg(t){try{return(await to(Qt(Dt,"creators",t))).exists()}catch{return!1}}function Wg(){var t;return((t=Q.currentUser)==null?void 0:t.uid)??null}async function ph(t){try{const e=await to(Qt(Dt,"players",t));if(!e.exists())return;const n=e.data().nickname;return typeof n=="string"&&n?n:null}catch{return}}async function Gg(t){const e=Q.currentUser;if(!e)return;const n=t.trim().slice(0,60)||null;if(n&&!Kg(n))throw new Pn("invalid");const i=e.uid;await eg(Dt,async r=>{const s=Qt(Dt,"players",i),o=await r.get(s),a=o.exists()&&typeof o.data().nickname=="string"?o.data().nickname:null,l=a&&(!n||ui(a)!==ui(n))?Qt(Dt,"nicknames",ui(a)):void 0,c=l?await r.get(l):void 0;if(n){const y=Qt(Dt,"nicknames",ui(n)),w=await r.get(y);if(w.exists()&&w.data().uid!==i)throw new Pn("taken");r.set(y,{uid:i,nickname:n})}l&&(c!=null&&c.exists())&&c.data().uid===i&&r.delete(l),r.set(s,{nickname:n,updated:ih()})}).catch(r=>{throw r instanceof Pn?r:r.code==="permission-denied"?new Pn("taken"):r}),await Cp(e,{displayName:n??""}),await e.getIdToken(!0)}class Pn extends Error{constructor(e){super(e),this.reason=e}}function ui(t){return t.toLowerCase()}function Kg(t){return!t.includes("/")&&!/^\.{1,2}$/.test(t)&&!/^__.*__$/.test(t)}const nr="https://www.crescendu.com/",fh="https://www.crescendu.com/profile",jg="https://marketplace.crescendu.com/",qg="https://creator.crescendu.com/",Yg="https://halloffame.crescendu.com/",hs={marketplace:jg,halloffame:Yg,creator:qg};function Jg(t=!1){return t?"./":"../"}const Zg=()=>`instrument=${Qe().id}`;function Xg(t,e="../",n="",i=""){let r;if(t==="profile")r=i?`${nr}${encodeURIComponent(i)}`:fh;else if(hs[t]){const o=hs[t];r=location.hostname===new URL(o).hostname?"/":o}else r=`${nr}${t}`;const s=[Zg(),n].filter(Boolean).join("&");return s?`${r}?${s}`:r}function Qg(t,e){const[n,i]=t.split("#");return`${n}${n.includes("?")?"&":"?"}${e}${i===void 0?"":`#${i}`}`}const ey=[new URL(nr).origin,...Object.values(hs).map(t=>new URL(t).origin),"https://crescendu.com",...Object.values(tn).map(t=>new URL(t.app.url).origin)];function lo(t){return t===location.origin||ey.includes(t)||!1}function It(){return Qe().app.name}const ds="hero-session",ty={}.VITE_SESSION_URL??"https://europe-west3-crescendu.cloudfunctions.net/heroSession";async function ny(){const t=ao().currentUser;if(t)try{const e=await fetch(ty,{method:"POST",headers:{Authorization:`Bearer ${await t.getIdToken()}`}});if(!e.ok)return;const{token:n}=await e.json();return typeof n=="string"?n:void 0}catch{return}}function iy(t,e,n){if(e===location.origin||!lo(e))return()=>{};const i=ao(),r=l=>{var c;return(c=t())==null?void 0:c.postMessage({type:ds,...l},e)};let s=!1;const o=l=>{var y;const c=l.data;if(!(l.origin!==e||l.source!==t()||(c==null?void 0:c.type)!==ds))if("uid"in c){const w=((y=i.currentUser)==null?void 0:y.uid)??null;c.uid&&c.uid!==w&&(n||!w)&&!s&&(s=!0,r({want:!0}))}else"want"in c?ny().then(w=>w&&r({token:w})):"token"in c&&(s=!1,ec(i,c.token).catch(()=>{}))};window.addEventListener("message",o);const a=an(i,l=>r({uid:(l==null?void 0:l.uid)??null}));return()=>{window.removeEventListener("message",o),a()}}const Pa=new WeakSet;function ry(t){var n,i;let e;try{e=new URL(t.src,location.href).origin}catch{return}e===location.origin||!lo(e)||((i=t.contentWindow)==null||i.postMessage({type:ds,uid:((n=ao().currentUser)==null?void 0:n.uid)??null},e),!Pa.has(t)&&(Pa.add(t),iy(()=>t.contentWindow,e,!1)))}var sy=Object.defineProperty,oy=Object.getOwnPropertyDescriptor,Ie=(t,e,n,i)=>{for(var r=i>1?void 0:i?oy(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&sy(e,n,r),r};function ay(){const t=[document];for(;t.length;){const e=t.shift();for(const n of e.querySelectorAll("header, .m-header")){const i=n.querySelector(".logo, .m-logo"),r=n.querySelector(".brand-name, .m-name");if(i&&r&&n.getBoundingClientRect().height)return{header:n,logo:i,name:r,end:n.querySelector(".end, .m-header-end")}}for(const n of e.querySelectorAll("*"))n.shadowRoot&&t.push(n.shadowRoot)}}const ly=.955,cy=v`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg>`;let fe=class extends ke{constructor(){super(...arguments),this.src="",this.open=!1,this.dark=!1,this.name="",this.place="",this.lead="",this.closeLabel="Close",this.geometry={},this.pageGutter=""}get shown(){return!!this.src||this.open}lock(t){const e=document.documentElement;t&&this.pageOverflow===void 0?(this.pageOverflow=e.style.overflow,this.pageGutter=e.style.scrollbarGutter,e.style.overflow="hidden",e.style.scrollbarGutter="auto"):!t&&this.pageOverflow!==void 0&&(e.style.overflow=this.pageOverflow,e.style.scrollbarGutter=this.pageGutter,this.pageOverflow=void 0)}willUpdate(t){if(!(!t.has("src")&&!t.has("open")&&!t.has("parts"))&&(this.lock(this.shown),this.shown)){const e=this.parts??ay();e&&this.measure(e)}}disconnectedCallback(){super.disconnectedCallback(),this.lock(!1)}updated(t){if(!t.has("src")&&!t.has("open"))return;const e=this.renderRoot.querySelector("dialog");e&&(this.shown&&!e.open&&e.showModal(),!this.shown&&e.open&&e.close())}measure({header:t,logo:e,name:n,end:i}){const r=t.getBoundingClientRect();if(!r.height)return;const s=e.getBoundingClientRect(),o=l=>`${l.toFixed(2)}px`,a=getComputedStyle(n);this.geometry={"--top":o(Math.max(0,r.top)),"--left":o(r.left),"--width":o(r.width),"--head-h":o(r.height),"--mark":o(s.width*ly),"--mark-x":o(s.left+s.width/2-r.left),"--name-x":o(n.getBoundingClientRect().left-r.left),"--name-size":a.fontSize,"--name-weight":a.fontWeight,"--head-end":o(i?r.right-i.getBoundingClientRect().right:20),"--radius":getComputedStyle(t).borderRadius}}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){const t=Object.entries(this.geometry).map(([e,n])=>`${e}: ${n}`).join("; ");return v`<dialog style=${t} @cancel=${e=>(e.preventDefault(),this.close())}>
      ${this.shown?v`<header>
              <span class="mark">${this.icon??cy}</span>
              <span class="titles">
                <span class="title">${this.name} <span class="place">${this.place}</span></span>
                ${this.lead?v`<span class="lead">${this.lead}</span>`:$}
              </span>
              <button class="close" title=${this.closeLabel} aria-label=${this.closeLabel} @click=${()=>this.close()}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </header>
            ${this.src?v`<iframe
                  src=${this.src}
                  title=${`${this.name} ${this.place}`}
                  allow="clipboard-write"
                  @load=${e=>this.dispatchEvent(new CustomEvent("frame-load",{detail:e.target}))}
                ></iframe>`:v`<div class="body"><slot></slot></div>`}`:$}
    </dialog>`}};fe.styles=Ve`
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
  `;Ie([C()],fe.prototype,"src",2);Ie([C({type:Boolean})],fe.prototype,"open",2);Ie([C({type:Boolean,reflect:!0})],fe.prototype,"dark",2);Ie([C({attribute:!1})],fe.prototype,"icon",2);Ie([C()],fe.prototype,"name",2);Ie([C()],fe.prototype,"place",2);Ie([C()],fe.prototype,"lead",2);Ie([C()],fe.prototype,"closeLabel",2);Ie([C({attribute:!1})],fe.prototype,"parts",2);Ie([B()],fe.prototype,"geometry",2);fe=Ie([Bt("cr-preview-overlay")],fe);function hy(t,e="./"){const n=new URL(e,location.href);return n.search="",n.hash="",n.searchParams.set("ref",t),n.href}async function dy(t,e){if(matchMedia("(hover: none) and (pointer: coarse)").matches&&navigator.share)try{return await navigator.share({title:Qe().app.name,text:e,url:t}),"shared"}catch(i){if(i.name==="AbortError")return"failed"}try{return await navigator.clipboard.writeText(t),"copied"}catch{return"failed"}}const uy="https://www.crescendu.com",py={imprint:{en:"imprint",de:"impressum"},privacy:{en:"privacy",de:"datenschutz"},terms:{en:"terms",de:"nutzungsbedingungen"}};function Na(t,e=""){const n=be()==="de"?"de":"en";return`${uy}/${n}/${py[t][n]}${e?`#${e}`:""}`}const fy=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),my=function(t,e){return new URL(t,e).href},Ca={},gy=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=my(s,i),s in Ca)return;Ca[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!i)for(let y=r.length-1;y>=0;y--){const w=r[y];if(w.href===s&&(!o||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":fy,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((y,w)=>{c.addEventListener("load",y),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function M(t,e=document){const n=e.querySelector(t);if(n)return n;for(const i of e.querySelectorAll("*"))if(i.shadowRoot){const r=M(t,i.shadowRoot);if(r)return r}return null}function ie(t,e=document){const n=[...e.querySelectorAll(t)];for(const i of e.querySelectorAll("*"))i.shadowRoot&&n.push(...ie(t,i.shadowRoot));return n}function x(t){return ie(t).find(e=>N(e))??null}const T=t=>()=>M(`[data-guide="${t}"]`);function N(t){if(!t||!t.isConnected)return!1;const e=t.getBoundingClientRect();return e.width>0&&e.height>0}const Da=t=>()=>ie(t).find(e=>N(e))??null,Ra=t=>{var e;return(((e=M(t))==null?void 0:e.value)??"").trim()},Vr='[data-guide="collab-email"]',yy={id:"collaborators",title:{de:"Andere mitverwalten lassen",en:"Letting others help manage"},available:()=>N(M('[data-guide="collab"]')),steps:[{say:{de:"Hallo, unter „Zugriff“ lässt du andere diese Seite mitverwalten, zum Beispiel eine Kollegin oder einen Assistenten.",en:"Hi, under “Access” you let others help manage this page, for example a colleague or an assistant."},target:T("collab"),wave:!0},{when:()=>N(M(Vr)),say:{de:"Gib hier die E-Mail-Adresse der Person ein.",en:"Type the person’s email address here."},target:T("collab-email"),action:"type",done:()=>!!Ra(Vr)},{when:()=>N(M('[data-guide="collab-invite"]')),say:{de:"Klick auf „Einladen“. Hat die Person ein Crescendu-Konto, bekommt sie eine Nachricht, sonst eine E-Mail mit dem Link.",en:"Click “Invite”. If they have a Crescendu account they get a message, otherwise an email with the link."},target:T("collab-invite"),action:"click",done:()=>!Ra(Vr)},{when:()=>N(Da('[data-guide="collab-levels"]')()),say:{de:"Für jeden Bereich stellst du ein, was die Person darf: nichts, ansehen oder bearbeiten. Das gilt sofort.",en:"For each area you set what they may do: nothing, view or edit. It applies at once."},target:Da('[data-guide="collab-levels"]')},{when:()=>N(M('[data-guide="collab-managed"]')),say:{de:"Hier unten stehen die Seiten, die du für andere mitverwaltest. „Öffnen“ bringt dich hin.",en:"Down here are the pages you help others manage. “Open” takes you there."},target:T("collab-managed")},{say:{de:"Mit „Löschen“ nimmst du jemandem den Zugriff wieder, nach einer Rückfrage. Das war’s!",en:"“Delete” takes someone’s access away again, after asking you. That’s it!"},target:T("collab"),wave:!0}]},wy=[yy],en=t=>()=>x(`[data-guide="${t}"]`),Jt=t=>()=>N(x(`[data-guide="${t}"]`)),by={id:"student-homework",page:"profile",title:{de:"Deine Hausaufgaben",en:"Your homework"},available:()=>N(M('[data-guide="homework-panel"]')),steps:[{say:{de:"Hallo, hier stehen deine Hausaufgaben aus dem Unterricht: was du üben sollst, wie lange am Tag und bis wann.",en:"Hi, here is your homework from your lessons: what to practise, how long a day and until when."},target:T("homework-panel"),wave:!0},{when:Jt("homework-days"),say:{de:"Tippe jeden Tag an, an dem du geübt hast. Deine Lehrkraft sieht die Haken in der nächsten Stunde.",en:"Tap each day you practised. Your teacher sees the ticks in the next lesson."},target:en("homework-days")}]},ky={id:"student-absences",page:"profile",title:{de:"Eine Stunde absagen",en:"Calling a lesson off"},available:()=>N(M('[data-guide="family-lessons"]')),steps:[{say:{de:"Hallo, hier stehen deine nächsten Stunden.",en:"Hi, here are your next lessons."},target:T("family-lessons"),wave:!0},{when:Jt("call-off"),say:{de:"Bist du krank, tippst du auf „Fällt aus (krank)“ und dann noch einmal zur Bestätigung. Deine Lehrkraft bekommt sofort Bescheid.",en:"If you are ill, tap “Off sick” and once more to confirm. Your teacher is told at once."},target:en("call-off")}]},vy={id:"student-calendar",page:"profile",title:{de:"Kalender abonnieren",en:"Subscribing to the calendar"},available:()=>N(M('[data-guide="calendar-feed"]')),steps:[{say:{de:"Hallo, so kommen alle deine Unterrichtstermine in deinen Kalender, auf dem Handy wie am Computer.",en:"Hi, this is how all your lesson dates get into your calendar, on your phone and your computer."},target:T("calendar-feed"),wave:!0},{when:Jt("calendar-feed-make"),say:{de:"Klick auf „Link erstellen“.",en:"Click “Make the link”."},target:en("calendar-feed-make"),action:"click",done:Jt("calendar-feed-open")},{when:Jt("calendar-feed-open"),say:{de:"„Im Kalender öffnen“ abonniert ihn in deiner Kalender-App. Abgesagte und verschobene Stunden ändern sich dort von selbst.",en:"“Open in the calendar” subscribes in your calendar app. Cancelled and moved lessons change there by themselves."},target:en("calendar-feed-open")},{when:Jt("calendar-feed-new"),say:{de:"Ein neuer Link schaltet den alten ab, falls du ihn weitergegeben hast und das nicht mehr willst.",en:"A new link switches the old one off, if you shared it and don’t want that any more."},target:en("calendar-feed-new"),wave:!0}]},Sy={id:"student-reminders",page:"profile",title:{de:"Erinnerung am Vorabend",en:"The reminder the evening before"},available:()=>N(M('[data-guide="reminders-switch"]')),steps:[{say:{de:"Hallo, mit diesem Schalter bekommst du am Abend vor jeder Stunde eine Erinnerung: Uhrzeit, Raum und Weg dorthin. Dann speichern.",en:"Hi, with this switch you get a reminder the evening before each lesson: the time, the room and how to get there. Then save."},target:en("reminders-switch"),wave:!0}]},Ty=[by,ky,vy,Sy],Ey=()=>N(M('[data-guide="banner-provided"]'))||N(M('[data-guide="banner-own"]'));function La(t="banner",e){return{id:t,...e?{page:e}:{},title:{de:"Das Banner der Seite ändern",en:"Changing the page’s banner"},available:()=>N(M('[data-guide="banner-change"]')),steps:[{say:{de:"Hallo, ich zeige dir das Banner oben auf der Seite und wie du es änderst.",en:"Hi, I’ll show you the banner at the top of the page and how to change it."},target:T("banner-change"),wave:!0},{say:{de:"Jede Seite hat ein Standard-Banner in ihrer Farbe und mit ihrem Zeichen. So sieht man sofort, auf welcher Seite man ist.",en:"Every page has a standard banner in its colour and with its sign, so you can tell at once which page you’re on."},target:T("banner-change")},{say:{de:"Unter „Banner ändern“ findest du sechs Banner, die für diese Seite gemacht sind: das Standard-Banner, vier weitere gezeichnete und ein Foto.",en:"Under “Change banner” you’ll find six banners made for this page: the standard one, four more drawn ones and a photograph."},target:T("banner-change")},{say:{de:"Darunter liegen deine eigenen Banner. Was du einmal hochlädst, kannst du auf all deinen Seiten wieder auswählen. Ein Bild kannst du auch einfach auf das Banner ziehen.",en:"Below them are your own banners. Whatever you put up once, you can pick again on all your pages. You can also just drag a picture onto the banner."},target:T("banner-change")},{say:{de:"Ein Klick auf ein Banner nimmt es sofort für diese Seite, „Standard“ bringt das ursprüngliche zurück. Probier es aus: Klick auf „Banner ändern“.",en:"A click on a banner uses it on this page at once, “Standard” brings the original back. Try it: click “Change banner”."},target:T("banner-change"),action:"click",done:Ey}]}}function Ma(t,e,n,i){return{id:t,page:e,title:{de:"Was diese Seite für dich hat",en:"What this page has for you"},available:()=>N(M('[data-guide="home-login"]')),steps:[{say:{de:"Hallo, hier meldest du dich an. Mit demselben Konto kommst du auf alle Seiten von Crescendu.",en:"Hi, here you log in. With the same account you get onto every Crescendu page."},target:T("home-login"),wave:!0},{say:n,target:T("home-second")},{say:i,target:T("home-features"),wave:!0}]}}const _y=[Ma("splash-home","profile",{de:"Daneben findest du eine Lehrkraft oder Musikschule in deiner Nähe, auch ohne Konto.",en:"Beside it you find a teacher or music school near you, even without an account."},{de:"Darunter steht, was dich als Schülerin oder Schüler erwartet: Stunden, Apps, Übe-Timer. Viel Freude beim Lernen!",en:"Below is what awaits you as a student: lessons, apps, the practice timer. Enjoy learning!"}),Ma("splash-creator","creator",{de:"Daneben der Marketplace: dort siehst du, welche Content Packs es schon gibt.",en:"Beside it the marketplace: there you see which content packs there are already."},{de:"Darunter, was ein Content Pack enthält und wie du es teilst oder verkaufst. Melde dich an, und leg los!",en:"Below, what a content pack holds and how you share or sell it. Log in, and off you go!"})],Ge=t=>()=>N(x(`[data-guide="${t}"]`)),Tn=()=>M('[data-guide="work-title"]'),Ay={id:"work-create",page:"creator",title:{de:"Ein Werk für Chor oder Ensemble anlegen",en:"Making a work for a choir or ensemble"},available:()=>Ge("new-work")()||N(Tn()),steps:[{say:{de:"Hallo, ich zeige dir, wie du ein Werk für einen Chor oder ein Ensemble anlegst: Partitur, Stimmen und Übe-Audio für jede Stimme.",en:"Hi, I’ll show you how to make a work for a choir or ensemble: the score, the parts and practice audio for each part."},target:()=>x('[data-guide="new-work"]')??Tn(),wave:!0},{say:{de:"Klick hier, um ein neues Werk anzulegen.",en:"Click here to make a new work."},target:T("new-work"),action:"click",done:()=>N(Tn())},{say:{de:"Wähle zuerst, ob es für einen Chor oder ein Ensemble ist.",en:"First choose whether it’s for a choir or an ensemble."},target:T("work-kind")},{say:{de:"Gib dem Werk seinen Titel.",en:"Give the work its title."},target:Tn,action:"type",done:()=>{var t;return!!((t=Tn())!=null&&t.value.trim())}},{say:{de:"Kreuze jede Besetzung an, für die es passt. Danach filtern Chöre und Ensembles im Marktplatz.",en:"Tick every line-up it suits. Choirs and ensembles filter the marketplace by it."},target:T("work-lineup")},{say:{de:"Hier lädst du die Partitur hoch: als MusicXML, dann entsteht das Vorschaubild und die Stimmen werden erkannt, und als PDF. Dazu eine Aufnahme oder ein YouTube-Video.",en:"Upload the score here: as MusicXML, which makes the preview picture and finds the parts, and as PDF. And a recording or a YouTube video."},target:T("work-files")},{say:{de:"Jede Stimme bekommt ihre Noten als PDF und ihr Übe-Audio. Mit diesem Knopf übernimmst du alle Stimmen der Besetzung auf einmal.",en:"Each part gets its own PDF and practice audio. This key takes all of the line-up’s parts at once."},target:T("work-parts-lineup")},{when:Ge("work-part"),say:{de:"Klapp eine Stimme auf, ordne sie einer Stimme der Besetzung zu und lade ihre Dateien hoch. So sieht jedes Mitglied zuerst seine eigene.",en:"Open a part, match it to a part of the line-up and upload its files. So every member sees their own first."},target:T("work-part")},{say:{de:"Zum Schluss: anbieten, für alle im Marktplatz oder nur für die Ensembles, die du leitest. Vorher bestätigst du, dass du die Rechte hast.",en:"Finally: offer it, to everyone in the marketplace or only to the ensembles you lead. First you confirm that you hold the rights."},target:T("work-offer")},{say:{de:"Und speichern nicht vergessen. Viel Freude damit!",en:"And don’t forget to save. Enjoy!"},target:T("work-save"),wave:!0}]},Iy={id:"work-find",page:"marketplace",title:{de:"Werke für dein Ensemble finden",en:"Finding works for your ensemble"},available:()=>Ge("works-market")()||Ge("work-page")(),steps:[{say:{de:"Hallo, ich zeige dir, wie du Werke für deinen Chor oder dein Ensemble findest und ins Repertoire aufnimmst.",en:"Hi, I’ll show you how to find works for your choir or ensemble and add them to its repertoire."},target:()=>x('[data-guide="works-market"]')??x('[data-guide="work-page"]'),wave:!0},{when:Ge("work-filters"),say:{de:"Filtere nach Chor oder Ensemble, Besetzung, Schwierigkeit, Länge, Anlass und Genre.",en:"Filter by choir or ensemble, line-up, difficulty, length, occasion and genre."},target:T("work-filters")},{when:Ge("work-fits"),say:{de:"„Passt zu deinem Ensemble“ zeigt nur Werke für die Besetzung, die du leitest.",en:"“Fits your ensemble” shows only works for the line-up you lead."},target:T("work-fits")},{when:Ge("work-listen"),say:{de:"Hier hörst du die ersten 30 Sekunden der Aufnahme.",en:"Here you hear the recording’s first 30 seconds."},target:T("work-listen")},{when:Ge("work-add"),say:{de:"Und hier nimmst du das Werk ins Repertoire deines Ensembles auf. Jedes Mitglied findet dort dann seine Stimme.",en:"And here you add the work to your ensemble’s repertoire. Every member then finds their part there."},target:T("work-add"),wave:!0},{when:()=>!Ge("work-add")(),say:{de:"Öffne ein Werk mit „Ansehen“: Dort hörst du hinein und nimmst es ins Repertoire auf, wenn du dein Ensemble leitest oder die Kasse führst.",en:"Open a work with “Explore”: there you listen and add it to the repertoire if you run your ensemble or keep its accounts."},target:()=>x('[data-guide="works-market"]'),wave:!0}]},$y=[Ay,Iy],xy=[La("banner","profile"),La("banner-creator","creator")],_t=t=>()=>ie(t).filter(e=>N(e)).at(-1)??null,En=()=>M('[data-guide="pack-title"]'),Py={id:"content-pack",page:"creator",title:{de:"Ein Content Pack erstellen",en:"Making a content pack"},available:()=>N(M('[data-guide="new-pack"]'))||N(En()),steps:[{say:{de:"Hallo, ich zeige dir, wie du ein Content Pack machst: Stücke, Etüden, Einspielübungen, Tonleitern und Technik, für alle im Marktplatz oder nur für deine Schüler.",en:"Hi, I’ll show you how to make a content pack: pieces, études, warm-ups, scales and technique, for everyone in the marketplace or just for your students."},target:()=>x('[data-guide="new-pack"]')??En(),wave:!0},{say:{de:"Klick hier, um ein neues Content Pack anzulegen.",en:"Click here to make a new content pack."},target:()=>x('[data-guide="new-pack"]'),action:"click",done:()=>N(En())},{say:{de:"Zuerst wählst du, für welche Hero-App das Pack ist. Das geht nur, bis die ersten Noten drin sind.",en:"First choose which hero app the pack is for. You can change that only until the first score is in."},target:T("pack-instrument")},{say:{de:"Gib dem Pack einen Titel, zum Beispiel „Barocke Sonaten für Anfänger“.",en:"Give the pack a title, for example “Baroque sonatas for beginners”."},target:En,action:"type",done:()=>{var t;return!!((t=En())!=null&&t.value.trim())}},{say:{de:"Darunter beschreibst du, was drin ist und für wen. Das steht später im Marktplatz.",en:"Below, describe what’s in it and who it’s for. That’s what the marketplace will show."},target:T("pack-description")},{say:{de:"Ein Bild macht das Pack im Marktplatz schöner. Zieh einfach eins hierher.",en:"A picture makes the pack look good in the marketplace. Just drag one here."},target:T("pack-picture")},{say:{de:"Ein Pack hat Reiter: Stücke, Etüden, Einspielen, Tonleitern und Technik. Lehrkräfte füllen damit die Abschnitte ihrer Übepläne.",en:"A pack has tabs: pieces, études, warm-ups, scales and technique. Teachers fill the parts of their practice plans with them."},target:T("item-kinds")},{say:{de:"Füge jetzt etwas hinzu: Klick hier.",en:"Now add something: click here."},target:T("add-item"),action:"click",done:()=>N(_t('[data-guide="item-title"]')())},{say:{de:"Gib ihm einen Titel.",en:"Give it a title."},target:_t('[data-guide="item-title"]'),action:"type",done:()=>{var t;return!!((t=_t('[data-guide="item-title"]')())!=null&&t.value.trim())}},{say:{de:"Wähle die Stufe, von Anfänger bis Virtuos. Danach richtet sich auch, wie streng die App bewertet.",en:"Choose the level, from Beginner to Expert. How strictly the app scores it follows from that too."},target:_t('[data-guide="item-level"]')},{say:{de:"Hier steht, was es ist. Wählst du eine andere Art, wandert es in deren Reiter.",en:"This says what it is. Choose another kind and it moves to that tab."},target:_t('[data-guide="item-kind"]')},{say:{de:"Das Wichtigste: die Noten als MusicXML, zum Beispiel aus MuseScore oder Dorico. Zieh die Datei hierher. Crescendu prüft sie und sagt dir, wenn etwas fehlt.",en:"The main thing: the score as MusicXML, for example from MuseScore or Dorico. Drag the file here. Crescendu checks it and tells you if anything is missing."},target:_t('[data-guide="item-score"]')},{say:{de:"Hier kommen Aufnahmen und YouTube-Videos dazu. Crescendu richtet sie nach den Noten aus, damit die App im Takt mitspielt.",en:"Here you add recordings and YouTube videos. Crescendu lines them up with the score, so the app plays along in time."},target:_t('[data-guide="item-interpretations"]')},{say:{de:"Ist das Pack fertig, veröffentlichst du es hier: für alle im Marktplatz, oder nur für deine Schüler.",en:"When the pack is ready, publish it here: for everyone in the marketplace, or only for your students."},target:T("pack-publish")},{say:{de:"Jetzt klick auf „Speichern“.",en:"Now click “Save”."},target:T("pack-save"),action:"click",done:()=>{var t;return!((t=M('[data-guide="save-bar"]'))!=null&&t.classList.contains("dirty"))}},{say:{de:"Gespeichert! Du kannst jederzeit weitere Stücke, Etüden oder Übungen hinzufügen. Viel Freude damit!",en:"Saved! You can add more pieces, études or exercises at any time. Have fun with it!"},target:T("item-kinds"),wave:!0}]},pi=()=>x("button.m-btn.marker"),zr=t=>()=>ie("button.m-btn.marker").some(e=>e.classList.contains(t)),Ny={id:"passage",page:"app",title:{de:"Eine Stelle üben",en:"Practising a passage"},available:()=>N(M("score-display"))&&!!pi(),steps:[{say:{de:"Hallo, ich zeige dir, wie du eine schwierige Stelle immer wieder übst, bis sie sitzt.",en:"Hi, I’ll show you how to practise a tricky passage again and again until it’s solid."},target:()=>x("score-display"),wave:!0},{say:{de:"Geh zuerst zu dem Takt, in dem die Stelle beginnt: Zieh die Noten mit der Maus oder dem Finger, oder spring mit Zurück und Vor.",en:"First go to the bar where the passage begins: drag the score with the mouse or your finger, or step with Back and Forward."},target:()=>x("button.m-btn.back")??x("score-display")},{say:{de:"Jetzt drück auf „Marke“. Der Takt wird zum Anfang der Stelle.",en:"Now press “Marker”. That bar becomes the start of the passage."},target:pi,action:"click",done:()=>zr("waiting")()||zr("on")()},{say:{de:"Gut! Geh jetzt zum letzten Takt der Stelle und drück noch einmal auf „Marke“.",en:"Good! Now go to the passage’s last bar and press “Marker” once more."},target:pi,action:"click",done:zr("on")},{say:{de:"Die Stelle ist markiert, und „Wiederholen“ ist an: Sie läuft immer wieder von vorn.",en:"The passage is marked, and Repeat is on: it plays round and round."},target:()=>x("button.m-btn.repeat")},{say:{de:"Drück auf „Start“ und spiel mit.",en:"Press “Play” and play along."},target:()=>x("button.m-btn.play"),action:"click",done:()=>ie("button.m-btn.play").some(t=>t.classList.contains("on"))},{when:()=>!!(x(".m-slider.m-tempo")??x(".m-quick-tempo")),say:{de:"Zu schnell? Stell das Tempo hier langsamer, und dann Schritt für Schritt wieder schneller.",en:"Too fast? Slow the tempo down here, then bring it up again step by step."},target:()=>x(".m-slider.m-tempo")??x(".m-quick-tempo")},{say:{de:"Wenn die Stelle sitzt, drück noch einmal auf „Marke“, dann ist die Markierung weg. Viel Spaß beim Üben!",en:"Once the passage is solid, press “Marker” once more and the marks are gone. Happy practising!"},target:pi,wave:!0}]},Cy={"m-transport":0,"m-sound":1,"m-library":2,"m-mixer":3},Dy={"m-transport":{de:"Transport",en:"Transport"},"m-sound":{de:"Einstellungen",en:"Settings"},"m-library":{de:"Repertoire",en:"Repertoire"},"m-mixer":{de:"Mischpult",en:"Mixer"}},Pi=()=>N(M("nav.m-tabs")),gt=t=>M(`section.${t}`),H=(t,e)=>()=>{const n=gt(t);return n?ie(e,n).find(i=>N(i)&&!i.closest(".m-panel-quick"))??null:null},us=()=>!!M(".m-controls.m-phone-closed"),mh=t=>ie("button.m-tab")[Cy[t]]??null;function Oa(t){var n;const e=gt(t);return e?Pi()?!us()&&!!((n=mh(t))!=null&&n.classList.contains("on")):!e.classList.contains("m-closed"):!1}function oi(t){const e=Dy[t];return[{when:()=>Pi()&&us(),say:{de:"Öffne zuerst die Bedienfelder: Tipp auf das kleine Dreieck über ihnen.",en:"First open the controls: tap the little triangle above them."},target:()=>x(".m-phone-fold button"),action:"click",done:()=>!us()},{when:Pi,say:{de:`Tipp unten auf „${e.de}“.`,en:`Tap “${e.en}” at the bottom.`},target:()=>mh(t),action:"click",done:()=>Oa(t)},{when:()=>!Pi(),say:{de:`Öffne das Feld „${e.de}“: Klick auf das Dreieck.`,en:`Open the “${e.en}” panel: click its triangle.`},target:()=>{var n;return((n=gt(t))==null?void 0:n.querySelector(".m-fold"))??null},action:"click",done:()=>Oa(t)}]}const Va=()=>ie("button.m-btn.play").some(t=>t.classList.contains("on")),za=H("m-transport",".m-recordings select"),Ry={id:"takes",page:"app",title:{de:"Dich aufnehmen und anhören",en:"Recording yourself and listening back"},available:()=>N(M("score-display"))&&!!M("button.m-btn.record"),steps:[{say:{de:"Hallo, ich zeige dir, wie du dich beim Spielen aufnimmst und danach hörst, wie es geklungen hat.",en:"Hi, I’ll show you how to record yourself playing and then hear how it sounded."},target:()=>x("score-display"),wave:!0},...oi("m-transport"),{say:{de:"Hör dir das Stück zuerst an: Drück auf „Start“. Die App spielt es mit Klavier, und die Noten laufen mit.",en:"Listen to the piece first: press “Play”. The app plays it with the piano, and the score moves along."},target:()=>H("m-transport","button.m-btn.play")()??x("button.m-btn.play"),action:"click",done:Va},{after:6,say:{de:"Genug gehört? Drück noch einmal, dann hält es an.",en:"Heard enough? Press it again to pause."},target:()=>H("m-transport","button.m-btn.play")()??x("button.m-btn.play"),action:"click",done:()=>!Va()},{say:{de:"Setz zum Aufnehmen Kopfhörer mit Kabel auf. Dann hört das Mikrofon nur dich und nicht das Klavier.",en:"For recording, put on wired headphones. Then the microphone hears only you, not the piano."},target:()=>H("m-transport","button.m-btn.record")()},{say:{de:"Jetzt drück auf „Aufnehmen“. Nach dem Einzählen spielst du mit. Spielst du bis zum Ende, bekommst du eine Wertung.",en:"Now press “Record”. After the count-in, you play along. Play to the end and your take gets a score."},target:()=>H("m-transport","button.m-btn.record")(),action:"click",done:()=>{var t;return ie("button.m-btn.record").some(e=>e.classList.contains("on"))||(((t=za())==null?void 0:t.options.length)??0)>1}},{say:{de:"Die Linie über den Noten zeigt, was du spielst: grün ist sauber, rot zu hoch oder zu tief. Zum Aufhören drück noch einmal auf „Aufnehmen“.",en:"The line over the score shows what you play: green is in tune, red too high or too low. To stop, press “Record” again."},target:()=>x("score-display")},{say:{de:"Danach spielt die App deine Aufnahme mit dem Klavier ab, und die Wertungskarte zeigt Intonation, Timing und mehr.",en:"Afterwards the app plays your take back with the piano, and the score card shows your intonation, timing and more."},target:()=>x("score-display")},{say:{de:"Hier unter „Aufnahmen“ findest du alle deine Aufnahmen des Stücks. Wähl eine, und „Start“ spielt sie mit dem Klavier.",en:"Under “Recordings” you find all your takes of the piece. Choose one, and “Play” plays it with the piano."},target:za},{say:{de:"Und dieser Schalter ist die Stimme deines Instruments, die die App spielt. Beim Aufnehmen schaltet sie sich von selbst aus, damit nur das Klavier mit dir spielt. Schaltest du sie an, während deine Aufnahme läuft, hörst du statt dir die App: So vergleichst du, wie es klingen soll.",en:"And this switch is your instrument’s part, played by the app. When you record it switches itself off, so only the piano plays with you. Switch it on while your take plays and you hear the app instead of yourself: a way to compare how it should sound."},target:()=>x(".m-violin-switch .m-toggle")??ie(".m-sound-keys .m-toggle").filter(t=>N(t)).at(-1)??null},{say:{de:"„Löschen“ entfernt die gewählte Aufnahme: Drück zweimal, damit nichts aus Versehen verloren geht.",en:"“Clear” deletes the take chosen: press it twice, so nothing goes by accident."},target:H("m-transport","button.m-btn.clear")},{say:{de:"Und mit „Teilen“ schickst du deine Aufnahme als Link an deine Lehrkraft oder Freunde. Viel Spaß beim Aufnehmen!",en:"And with “Share” you send your take as a link to your teacher or friends. Have fun recording!"},target:H("m-transport","button.m-btn.share"),wave:!0}]},fi=H("m-sound",".m-violin-switch .m-toggle"),Ly={id:"settings",page:"app",title:{de:"Die Begleitung einstellen",en:"Setting up the accompaniment"},available:()=>N(M("score-display"))&&!!gt("m-sound"),steps:[{say:{de:"Hallo, ich zeige dir, wie du die Begleitung so einstellst, dass sie zu dir passt.",en:"Hi, I’ll show you how to set up the accompaniment so it suits you."},target:()=>x("score-display"),wave:!0},...oi("m-sound"),{say:{de:"Zu schnell? Stell das Tempo hier langsamer. Daneben steht, wie viele Schläge pro Minute das sind. Ein Doppelklick bringt es auf 100 Prozent zurück.",en:"Too fast? Slow the tempo down here. Beside it you see the beats per minute. A double click brings it back to 100 percent."},target:H("m-sound",".m-slider.m-tempo")},{say:{de:"Dieser Schalter spielt die Stimme deines Instruments. Schalt ihn aus: Dann spielst du sie selbst, nur mit dem Klavier.",en:"This switch plays your instrument’s part. Switch it off: then you play it yourself, with just the piano."},target:fi,action:"click",done:()=>!!fi()&&!fi().classList.contains("on")},{say:{de:"Mit „Klavier“ schaltest du die Begleitung aus, zum Üben ganz allein. „Noten“ zeigt die Klavierstimme unter deiner.",en:"“Piano” switches the accompaniment off, for practising on your own. “Staves” shows the piano’s part under yours."},target:H("m-sound",".m-piano-switches")},{when:()=>!!H("m-sound",".m-piano-model select")(),say:{de:"Hier wählst du das Klavier: einen Flügel oder eins von zwei Klavieren.",en:"Here you choose the piano: a grand or one of two uprights."},target:H("m-sound",".m-piano-model select")},{say:{de:"„Ausdruck“ sagt, wie frei das Klavier spielt: Es atmet mit den Phrasen. Bei null spielt es genau nach Noten.",en:"“Humanize” says how freely the piano plays: it breathes with the phrases. At zero it plays exactly as written."},target:H("m-sound",".m-slider.m-humanize")},{say:{de:"„Hall“ lässt es klingen wie in einem Konzertsaal.",en:"“Reverb” makes it sound like a concert hall."},target:H("m-sound",".m-slider.m-reverb")},{when:()=>!!H("m-sound",".m-slider.m-volume")(),say:{de:"Und hier stellst du die Lautstärke ein.",en:"And here you set the volume."},target:H("m-sound",".m-slider.m-volume")},{say:{de:"Die App merkt sich alles für das nächste Mal. Schalt deine Stimme wieder ein, wann immer du hören willst, wie es klingen soll. Viel Spaß!",en:"The app remembers it all for next time. Switch your part back on whenever you want to hear how it should sound. Have fun!"},target:fi,wave:!0}]},My={id:"repertoire",page:"app",title:{de:"Ein Stück finden",en:"Finding a piece"},available:()=>!!gt("m-library"),steps:[{say:{de:"Hallo, ich zeige dir, wie du ein Stück findest, das zu dir passt.",en:"Hi, I’ll show you how to find a piece that suits you."},target:()=>x("score-display"),wave:!0},...oi("m-library"),{say:{de:"Wähl zuerst deinen Schwierigkeitsgrad, von Anfänger bis Virtuos. Die Liste zeigt nur Stufen, in denen du schon etwas spielen kannst.",en:"First choose your level, from Beginner to Expert. The list only shows levels where there is something you can play."},target:H("m-library",".m-level-pick select")},{say:{de:"Dann die Richtung: Barock, Romantik, Volkslieder, Weihnachten und mehr.",en:"Then the style: Baroque, Romantic, folk songs, Christmas and more."},target:H("m-library",".m-genre select")},{say:{de:"Hier wählst du das Stück. Stücke mit Schloss öffnen sich, wenn du übst: Schaffst du ein Stück oder nimmst du dich oft auf, kommt das nächste dazu.",en:"Here you choose the piece. Pieces with a lock open as you practise: pass a piece or record yourself often, and the next one opens."},target:H("m-library",".m-piece-pick select"),action:"click"},{say:{de:"Mit diesem Knopf bekommst du die Noten deiner Stimme als PDF zum Ausdrucken, mit deinen Eintragungen.",en:"This button gives you your part’s score as a PDF to print, with your markings."},target:H("m-library",".m-print button")},{say:{de:"Mehr Stücke gibt es im Marktplatz: Content Packs, die du hinzufügst, erscheinen hier in der Liste. Viel Freude beim Spielen!",en:"There are more pieces in the marketplace: content packs you add show up here in the list. Enjoy playing!"},target:H("m-library",".m-piece-pick select"),wave:!0}]},Ni=H("m-library",".m-interpretation select"),Fa=()=>{const t=Ni();return!!t&&t.options.length>1},Oy={id:"interpretations",page:"app",title:{de:"Großen Künstlern zuhören",en:"Listening to great performers"},available:()=>!!gt("m-library"),steps:[{say:{de:"Hallo, zu vielen Stücken gibt es Aufnahmen echter Künstler. Du kannst sie anhören und in ihrem Tempo mitspielen.",en:"Hi, many pieces have recordings of real performers. You can listen to them and play along in their timing."},target:()=>x("score-display"),wave:!0},...oi("m-library"),{when:()=>!Fa(),say:{de:"Zu diesem Stück gibt es noch keine Aufnahme. Wähl ein anderes Stück: Wo es welche gibt, steht neben „Interpretation“ eine Zahl.",en:"This piece has no recordings yet. Choose another piece: where there are some, a number shows beside “Interpretation”."},target:H("m-library",".m-piece-pick select"),action:"click",done:Fa},{say:{de:"Öffne die Liste und wähl eine Aufnahme.",en:"Open the list and choose a recording."},target:Ni,action:"click",done:()=>{var t;return(((t=Ni())==null?void 0:t.value)??"0")!=="0"}},{say:{de:"Mit diesem Knopf hörst du sie an. Die Noten laufen mit, im Tempo der Künstlerin oder des Künstlers.",en:"This button plays it. The score moves along, in the performer’s timing."},target:H("m-library",".m-interpretation .m-listen")},{say:{de:"Hier siehst du unter den Noten, wie schnell und wie laut gespielt wird, verglichen mit den Noten. So erkennst du, wo sie sich Zeit nehmen.",en:"Here you see under the score how fast and how loud it is played, compared with the written score. So you see where they take their time."},target:H("m-library",".m-graph-key")},{say:{de:"Und jetzt das Beste: „Start“ und „Aufnehmen“ folgen ihrem Tempo. Das Klavier atmet wie in der Aufnahme, und du spielst mit.",en:"And now the best part: “Play” and “Record” follow their timing. The piano breathes as in the recording, and you play along."},target:()=>x("button.m-btn.play")},{say:{de:"Mit „Standard“ in der Liste kommst du zurück zum Tempo der Noten. Viel Freude beim Zuhören!",en:"Choose “Default” in the list to go back to the written tempo. Enjoy listening!"},target:Ni,wave:!0}]},ye=t=>()=>x(`.page-setup.current ${t}`),st=t=>()=>x(`.page-tune.current ${t}`),Ua=()=>!!ye(".gain-range:not(:disabled)")(),Vy=t=>!!M(`.page-setup.current .cal-inline.${t}, .page-setup.current .cal-card.${t}`),zy={id:"audio-setup",page:"app",title:{de:"Audio einrichten",en:"Setting up your audio"},available:()=>!!x(".page-setup.current"),steps:[{say:{de:"Hallo, wir stellen jetzt dein Mikrofon ein, damit die App dich gut hört und dein Spiel genau an die richtige Stelle legt.",en:"Hi, let’s set up your microphone, so the app hears you well and places your playing exactly where it belongs."},target:ye(".headline"),wave:!0},{when:()=>!Ua(),say:{de:"Zuerst braucht die App dein Mikrofon. Drück hier und erlaube es in deinem Browser.",en:"First the app needs your microphone. Press here and allow it in your browser."},target:ye(".mic-state .key"),action:"click",done:Ua},{say:{de:"Hier wählst du, welches Mikrofon zuhört und wohin der Ton geht. Hast du Kopfhörer mit Kabel, wähl sie als Ausgabe.",en:"Here you choose which microphone listens and where the sound goes. With wired headphones, choose them as the output."},target:ye(".devices")},{say:{de:"Spiel jetzt ein paar laute Töne. Der Balken soll bis in den grünen Bereich reichen, aber nicht ins Rote.",en:"Now play a few loud notes. The bar should reach the green zone, but not the red."},target:ye(".meter-row")},{say:{de:"Zu leise oder zu laut? Schieb diesen Regler, bis deine lautesten Töne im Grünen landen.",en:"Too quiet or too loud? Move this slider until your loudest notes land in the green."},target:ye(".gain-range")},{when:()=>!!ye(".sides-row:not(.off)")(),say:{de:"Dein Mikrofon hat zwei Seiten. Beide sollten sich bewegen, wenn du spielst.",en:"Your microphone has two sides. Both should move when you play."},target:ye(".sides-row")},{when:()=>!!ye(".cal-keys")(),say:{de:"Zum Schluss die Verzögerung: Jedes Gerät braucht einen Moment vom Ton bis zum Mikrofon. Halt einen Hörer deiner Kopfhörer ans Mikrofon, sei leise, und drück auf „Messung starten“.",en:"Last, the delay: every device takes a moment from the sound to the microphone. Hold one side of your headphones to the microphone, keep quiet, and press “Start measuring”."},target:ye(".cal-keys .key"),action:"click",done:()=>Vy("done")},{say:{de:"Fertig! Jetzt weiß die App, wie dein Gerät klingt, und deine Aufnahmen liegen genau im Takt. Viel Spaß!",en:"Done! Now the app knows your device, and your takes line up exactly with the music. Have fun!"},target:()=>ye(".cal-keys .key.primary")()??ye(".headline")(),wave:!0}]},Fy={id:"tuner",page:"app",title:{de:"Dein Instrument stimmen",en:"Tuning your instrument"},available:()=>!!x(".page-tune.current .strings"),steps:[{say:{de:"Hallo, ich helfe dir, dein Instrument zu stimmen, Saite für Saite.",en:"Hi, I’ll help you tune your instrument, string by string."},target:()=>st(".graph")(),wave:!0},{when:()=>!!st(".mic-cover .mic-key")(),say:{de:"Der Stimmer braucht dein Mikrofon. Drück hier und erlaube es.",en:"The tuner needs your microphone. Press here and allow it."},target:st(".mic-cover .mic-key"),action:"click",done:()=>!st(".mic-cover")()},{say:{de:"Hier sind deine Saiten. Die hervorgehobene stimmst du jetzt. Tipp eine andere an, um sie zu stimmen.",en:"Here are your strings. The one highlighted is the one to tune now. Tap another to tune that one."},target:st(".strings")},{say:{de:"Streich die Saite an. Die Linie zeigt deinen Ton: über der Mitte zu hoch, darunter zu tief. Der Pfeil sagt dir, wohin. Dreh am Wirbel oder Feinstimmer, bis sie grün ist.",en:"Play the string. The line shows your pitch: above the middle too high, below too low. The arrow tells you which way. Turn the peg or fine tuner until it turns green."},target:st(".graph")},{say:{de:"Lieber nach Gehör? Dieser Knopf spielt den Ton der Saite, und du stimmst mit.",en:"Rather by ear? This button plays the string’s note, and you tune along with it."},target:st(".tone-key")},{say:{de:"Bleibt die Saite eine Weile sauber, füllt sich ihr Kreis und sie bekommt einen Haken. Dann ist die nächste dran. Viel Spaß beim Stimmen!",en:"When the string stays in tune for a moment, its circle fills and gets a tick. Then it’s the next one’s turn. Happy tuning!"},target:st(".strings"),wave:!0}]},Nn=t=>()=>x(`.page-ready.current ${t}`),ot=()=>{const t=Nn("start-modes")();return t!=null&&t.shadowRoot?t.shadowRoot:null},Uy=t=>()=>{const e=ot();return e?ie(t,e).find(n=>N(n))??null:null},Fr=t=>()=>{const e=ot();return e?ie(".tabs button",e)[t]??null:null},By={id:"ready",page:"app",title:{de:"Loslegen",en:"Getting started"},available:()=>!!x(".page-ready.current"),steps:[{say:{de:"Hallo, gleich geht es los! Ich zeige dir, wie du wählst, was du spielst.",en:"Hi, you’re almost ready! I’ll show you how to choose what to play."},target:Nn(".ready-title"),wave:!0},{when:()=>!!ot(),say:{de:"Oben wählst du, wie du üben willst: Challenge, Übeplan oder Repertoire.",en:"At the top you choose how to practise: Challenge, Practice plan or Repertoire."},target:Uy(".tabs")},{when:()=>!!ot(),say:{de:"In der Challenge gibt es drei Pfade: Leicht, Mittel und Schwer. Schaffst du ein Stück, öffnet sich das nächste.",en:"The Challenge has three tracks: Easy, Medium and Hard. Pass a piece and the next one opens."},target:Fr(0)},{when:()=>!!ot(),say:{de:"Mit den Pfeilen, den Pfeiltasten oder einem Wisch blätterst du durch die Stücke. Gesperrte kannst du dir schon ansehen.",en:"Flip through the pieces with the arrows, the arrow keys or a swipe. You can already look at locked ones."},target:()=>{const t=ot();return t?ie(".panel.on .picker",t).filter(e=>N(e)).at(-1)??null:null}},{when:()=>!!ot(),say:{de:"Beim Übeplan führt dich ein Zeitplan durch Einspielen, Tonleitern, Etüden und dein Stück. Pläne deiner Lehrkraft stehen hier ganz vorn.",en:"A Practice plan leads you through warm-up, scales, études and your piece on a timer. Plans from your teacher come first here."},target:Fr(1)},{when:()=>!!ot(),say:{de:"Und im Repertoire wählst du frei aus allen Stücken, die du schon spielen kannst, nach Stufe und Genre.",en:"And in Repertoire you choose freely from every piece you can play already, by level and genre."},target:Fr(2)},{when:()=>!!Nn(".card.account .key")(),say:{de:"Melde dich an, dann bleiben deine Aufnahmen und dein Fortschritt erhalten, auf jedem Gerät.",en:"Sign in and your takes and progress are kept, on every device."},target:Nn(".card.account")},{say:{de:"Bist du bereit? Drück auf den großen Knopf. Viel Spaß!",en:"Ready? Press the big button. Have fun!"},target:Nn(".go"),wave:!0}]},Hy={id:"mixer",page:"app",title:{de:"Das Mischpult deines Chors",en:"Your choir’s mixer"},available:()=>N(M("score-display"))&&!!gt("m-mixer"),steps:[{say:{de:"Hallo, ich zeige dir das Mischpult: Hier singen die Aufnahmen deines Chors mit dir, und du mischst sie wie im Studio.",en:"Hi, I’ll show you the mixer: here your choir’s recordings sing along with you, and you mix them as in a studio."},target:()=>gt("m-mixer"),wave:!0},...oi("m-mixer"),{when:()=>!!T("mixer-tune")(),say:{de:"Jedes Mitglied hat einen Kanal. Oben sitzt der Autotune-Regler: Er korrigiert die Tonhöhe zu den Noten der Stimme. Ein wenig aufgedreht klingt es sanft, die Stimme gleitet zum Ton und behält ihr Vibrato. Ganz aufgedreht springt jeder Ton sofort: der harte Autotune-Klang.",en:"Each member has a channel. At the top sits the Autotune knob: it corrects the pitch towards the notes of their part. Turned up a little it is gentle, the voice glides to the note and keeps its vibrato. Turned all the way, every note snaps at once: the hard autotune sound."},target:T("mixer-tune")},{when:()=>!!T("mixer-tune")(),say:{de:"Der äußere Ring leuchtet, während das Stück spielt, auch wenn Autotune aus ist: wie weit die Stimme gerade neben dem Ton liegt. Nach rechts müsste nach oben korrigiert werden, nach links nach unten; grün ist knapp daneben, rot weit, die grüne Mitte heißt sauber. Ist Autotune an, zeigt der Bogen innen, wie viel davon gerade korrigiert wird: ganz aufgedreht genauso viel, wenig aufgedreht weniger.",en:"The outer ring lights up while the piece plays, also with Autotune off: how far the voice is off the note right now. Lit to the right it needs pulling up, to the left down; green is a little off, red far off, the green middle means in tune. With Autotune on, the arc inside shows how much of it is corrected right now: as much at full, less when turned up a little."},target:T("mixer-tune")},{when:()=>!!T("mixer-fader")(),say:{de:"Darunter das Panorama, links oder rechts, und der Fader für die Lautstärke. Ein Doppelklick bringt beide in die Mitte zurück.",en:"Below it the pan, left or right, and the fader for the volume. A double click puts either back in the middle."},target:T("mixer-fader")},{when:()=>!!T("mixer-eq")(),say:{de:"Das kleine Feld darüber ist der Equalizer des Kanals: Es zeigt seine Kurve. Klick darauf, dann ziehst du drei Punkte: den Low Cut gegen Brummen und Rumpeln, die Mitten und die Höhen. Ein Doppelklick auf einen Punkt setzt ihn zurück.",en:"The small field above it is the channel’s equalizer: it shows its curve. Click it and drag three points: the low cut against hum and rumble, the mids and the highs. A double click on a point resets it."},target:T("mixer-eq")},{when:()=>!!T("mixer-on")(),say:{de:"M schaltet einen Kanal stumm, S hört ihn solo, allein mit allen anderen auf Solo. Ein grauer Kanal spielt nicht; zeig mit der Maus darauf, dann steht da, warum. Die Aufnahmen singen übrigens nur in der normalen Ansicht mit, nicht in der Seitenansicht.",en:"M mutes a channel, S solos it: you hear it alone, with any other soloed one. A grey channel doesn’t play; point at it to see why. The recordings sing along in the standard view only, not in the page view."},target:T("mixer-on")},{when:()=>!!T("mixer-groups")(),say:{de:"Mit der Taste „Gruppen“ am Master blendest du für jede Stimmgruppe der Partitur einen eigenen Kanal ein.",en:"The Groups key on the master shows a strip of its own for each voice group of the score."},target:T("mixer-groups")},{when:()=>!!T("mixer-buses")(),say:{de:"Die farbigen Bänder unten zeigen die Stimmgruppen. Rechts hat jede Gruppe der Partitur ihren eigenen Kanal: Fader und Lautsprecher-Taste wirken auf die ganze Gruppe, und ihr Panorama verschiebt die Panoramen aller ihrer Mitglieder mit.",en:"The coloured bands at the foot show the voice groups. On the right each group of the score has its own strip: its fader and speaker key act on the whole group, and turning its pan moves every member’s pan with it."},target:T("mixer-buses")},{when:()=>!!T("mixer-master")(),say:{de:"Ganz rechts der Master: die Lautstärke des ganzen Chors und sein Hall. Der Hall in den Einstellungen gilt nur für das Klavier und deine eigene Aufnahme.",en:"Far right the master: the whole choir’s volume and its reverb. The Reverb in the Settings is only for the piano and your own recording."},target:T("mixer-master")},{when:()=>!!T("mixer-intonation")(),say:{de:"Hier wählst du, worauf Autotune stimmt: gleichstufig wie ein Klavier, oder rein, wie ein guter Chor singt. Rein wird jeder Ton passend zum Akkord gestimmt, die große Terz etwas tiefer, die Quinte etwas höher. Viel Spaß beim Mischen!",en:"Here you choose what Autotune tunes to: equal, as a piano, or just, as a good choir sings. In just intonation each note is tuned to its chord, the major third a little low, the fifth a little high. Have fun mixing!"},target:T("mixer-intonation"),wave:!0}]},Wy={id:"consonants",page:"app",title:{de:"Konsonanten auf den Punkt",en:"Consonants on the spot"},available:()=>N(M("score-display"))&&Qe().marks.consonants,steps:[{say:{de:"Hallo, ich zeige dir die Konsonanten: Bei Stücken mit Text hört die App, wo du t, k, s und sch singst, und vergleicht das mit den Noten.",en:"Hi, I’ll show you the consonants: in pieces with words the app hears where you sing t, k, s and sch, and compares it with the score."},target:()=>x("score-display"),wave:!0},{say:{de:"Klick auf eine Note, deren Silbe auf einem Konsonanten endet, zum Beispiel „Herz“ oder „steht“.",en:"Click a note whose syllable ends on a consonant, “heart” or “Christ” for example."},target:()=>x("score-display"),action:"click",done:()=>!!x('[data-guide="consonant-marks"]')},{say:{de:"Hier legst du fest, wo der Schlusskonsonant hingehört: genau aufs Notenende, oder eine Achtel, eine Viertel oder eine Halbe früher. Er steht dann in Klammern über den Noten, etwa „(t)“, und so wird er auch bewertet.",en:"Here you set where the final consonant belongs: exactly on the note’s end, or an eighth, a quarter or a half note earlier. It then stands in brackets over the score, “(t)” say, and is scored there."},target:T("consonant-marks")},{say:{de:"Nimmst du das ganze Stück auf, bekommst du Punkte für die Konsonanten, und über den Noten zeigt eine kleine Marke jeden einzelnen: grün genau richtig, orange zu spät, blau zu früh, gestrichelt nicht gehört.",en:"Record the whole piece and you get points for your consonants, and a small mark over the score shows each one: green right on, orange late, blue early, dashed not heard."},target:()=>x("score-display")},{say:{de:"Ein Tipp: Konsonanten vor einem Vokal singst du kurz vor dem Schlag, damit der Vokal genau darauf kommt. Viel Spaß!",en:"A tip: sing a consonant before a vowel just ahead of the beat, so the vowel lands right on it. Have fun!"},target:()=>x("score-display"),wave:!0}]},Gy=[Py,zy,Fy,By,Ry,Ly,My,Oy,Ny,Hy,Wy,...Ty,...wy,...xy,..._y,...$y],Ba={de:"de-DE",en:"en-GB"},Ha=/natural|neural|online|google|premium|enhanced/i,Ky=1.2,jy=2.4,qy=t=>t.split(/\s+/).filter(Boolean).length,ps=(t,e=1)=>Math.max(1,qy(t)/jy/e),Yy=1.2,Jy=2e3,Zy=120,Xy=150;class Qy{constructor(){this.turn=0,this.fallback=0,this.cancelledAt=-1/0,this.watch=0}get available(){return typeof speechSynthesis<"u"}voiceFor(e){if(!this.available)return;const n=speechSynthesis.getVoices().filter(i=>i.lang.toLowerCase().startsWith(e));return n.find(i=>Ha.test(i.name)&&i.lang===Ba[e])??n.find(i=>Ha.test(i.name))??n.find(i=>i.lang===Ba[e])??n[0]}speak(e,n,i=1){return this.stop(),new Promise(r=>{const s={text:e,language:n,rate:i,reached:0,resolve:r};this.current=s,this.utter(s)})}setRate(e){const n=this.current;!n||n.rate===e||(n.rate=e,window.clearTimeout(this.fallback),window.clearInterval(this.watch),this.mode=void 0,this.turn++,this.cancel(),this.utter(n))}cancel(){this.available&&((speechSynthesis.speaking||speechSynthesis.pending)&&(this.cancelledAt=performance.now()),speechSynthesis.cancel(),this.utterance&&(this.utterance.onboundary=this.utterance.onend=this.utterance.onerror=this.utterance.onstart=null),this.utterance=void 0)}utter(e){const n=++this.turn,i=()=>n===this.turn&&this.start(e,n);if(this.available&&!speechSynthesis.getVoices().length){gh().then(i);return}const r=Zy-(performance.now()-this.cancelledAt);r>0?this.fallback=window.setTimeout(i,r):i()}start(e,n){const i=c=>{n!==this.turn||this.current!==e||(this.current=void 0,this.mode=void 0,window.clearTimeout(this.fallback),window.clearInterval(this.watch),e.resolve(c))},r=e.reached,s=e.text.slice(r),o=this.voiceFor(e.language);if(!o||!s.trim()){this.mode=s.trim()?"silent":void 0,this.fallback=window.setTimeout(()=>i(!0),s.trim()?ps(s,e.rate)*1e3:0);return}const a=new SpeechSynthesisUtterance(s);a.voice=o,a.lang=o.lang,a.rate=e.rate,a.pitch=Ky,a.onboundary=c=>{var y;n!==this.turn||c.name!=="word"||(e.reached=r+c.charIndex,(y=this.onWord)==null||y.call(this))},a.onend=()=>i(!0),a.onerror=()=>i(!1),this.utterance=a,this.mode="voice";let l=!1;a.onstart=()=>l=!0,this.watch=window.setInterval(()=>{if(n!==this.turn)return window.clearInterval(this.watch);speechSynthesis.speaking?l=!0:l&&!speechSynthesis.pending&&i(!0)},Xy),speechSynthesis.paused&&speechSynthesis.resume(),speechSynthesis.speak(a),this.fallback=window.setTimeout(()=>i(!0),(ps(s,e.rate)*2+4)*1e3)}get sounding(){return!this.current||!this.mode?!1:this.mode==="silent"?!0:this.available&&speechSynthesis.speaking&&!speechSynthesis.paused}stop(){this.turn++,this.current=void 0,this.mode=void 0,window.clearTimeout(this.fallback),window.clearInterval(this.watch),this.cancel()}}let Ur;function gh(){return typeof speechSynthesis>"u"||speechSynthesis.getVoices().length?Promise.resolve():(Ur??(Ur=new Promise(t=>{const e=()=>{window.clearInterval(i),window.clearTimeout(r),speechSynthesis.removeEventListener("voiceschanged",n),Ur=void 0,t()},n=()=>{speechSynthesis.getVoices().length&&e()};speechSynthesis.addEventListener("voiceschanged",n);const i=window.setInterval(n,100),r=window.setTimeout(e,Jy)})),Ur)}function ew(){gh()}function jt(t,e,n={}){let i=t[e==="de"?"de":"en"];for(const[r,s]of Object.entries(n))i=i.replaceAll(`{${r}}`,String(s));return i}function yh(t=".key"){const e=Te(t);return Ve`
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
  `}const co=yh(".key");var tw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,yn=(t,e,n,i)=>{for(var r=i>1?void 0:i?nw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&tw(e,n,r),r};const iw=["--m-accent","--m-accent-soft","--m-surface","--m-text","--m-muted","--m-line","--m-bg"],mi={help:{de:"Hilfe",en:"Help"},online:{de:"Online-Hilfe",en:"Online help"},guides:{de:"Quick Guides",en:"Quick guides"}};let yt=class extends ke{constructor(){super(...arguments),this.page="",this.language="de",this.help="",this.label="",this.open=!1,this.started=t=>{const e=this.mine.find(n=>n.id===t.detail);e&&this.launch(e)},this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},this.escape=t=>{this.open&&t.key==="Escape"&&(this.open=!1)}}connectedCallback(){super.connectedCallback(),document.addEventListener("start-guide",this.started),document.addEventListener("click",this.outside,!0),document.addEventListener("keydown",this.escape)}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("start-guide",this.started),document.removeEventListener("click",this.outside,!0),document.removeEventListener("keydown",this.escape),(t=this.agent)==null||t.remove()}updated(t){t.has("language")&&this.agent&&(this.agent.language=this.language)}get mine(){return Gy.filter(t=>t.page===this.page)}async launch(t){var s;this.open=!1;const e=Wg(),[n]=await Promise.all([e?ph(e).catch(()=>null):null,gy(()=>Promise.resolve().then(()=>Jw),void 0,import.meta.url)]);(s=this.agent)==null||s.remove();const i=document.createElement("cr-guide");i.guide=t,i.language=this.language,i.nickname=n??"",i.person=e??"",i.addEventListener("close",()=>{i.remove(),this.agent===i&&(this.agent=void 0)});for(const o of iw){const a=getComputedStyle(this).getPropertyValue(o);a&&i.style.setProperty(o,a)}const r=ie("dialog").filter(o=>o.open&&o.matches(":modal")).at(-1);if((r??document.body).append(i),r){const o=a=>{a.target===r&&(r.removeEventListener("close",o),i.isConnected&&i.dispatchEvent(new Event("close")))};r.addEventListener("close",o)}this.agent=i}toggle(){this.open=!this.open,this.open&&ew()}render(){const t=i=>jt(i,this.language),e=this.label||t(mi.help),n=this.open?this.mine.filter(i=>i.available()):[];return v`
      <button class="key" title=${e} aria-label=${e} aria-haspopup="menu" aria-expanded=${this.open} @click=${this.toggle}>?</button>
      ${this.open?v`<div class="menu" role="menu">
            <!-- As the account menu's items (account-menu.ts): bordered, an icon in the theme colour -->
            <span class="separator">${t(mi.online)}</span>
            <a class="item" role="menuitem" href=${this.help} target="_blank" rel="noopener" @click=${()=>this.open=!1}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10.4 5.2 8 4.5 4 4.5v13c4 0 6.4.7 8 2 1.6-1.3 4-2 8-2v-13c-4 0-6.4.7-8 2z" /><path d="M12 6.5v13" /></svg>
              ${t(mi.help)}
            </a>
            ${n.length?v`<span class="separator">${t(mi.guides)}</span>`:$}
            ${n.map(i=>v`<button class="item" role="menuitem" @click=${()=>void this.launch(i)}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10.5h-9l-4.5 3.5V16H4z" /><path d="M10.5 8.5l3.5 2.25-3.5 2.25z" /></svg>
                ${t(i.title)}
              </button>`)}
          </div>`:$}
    `}};yt.styles=[co,Ve`
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
  `];yn([C()],yt.prototype,"page",2);yn([C()],yt.prototype,"language",2);yn([C()],yt.prototype,"help",2);yn([C()],yt.prototype,"label",2);yn([B()],yt.prototype,"open",2);yt=yn([Bt("cr-guide-menu")],yt);const ho=["blue","violet","teal","rose","graphite"],fs={light:"#eef0f2",dark:"#121417"},Ce={blue:{light:{accent:"#2563eb",hover:"#1d4fd7"},dark:{accent:"#336fea",hover:"#4d85f2"}},violet:{light:{accent:"#6d44dc",hover:"#5b34c4"},dark:{accent:"#7a58ee",hover:"#8f72f4"}},teal:{light:{accent:"#0d7488",hover:"#0a6071"},dark:{accent:"#0c8296",hover:"#1196ad"}},rose:{light:{accent:"#c8255f",hover:"#a81d4f"},dark:{accent:"#d6316c",hover:"#e34f84"}},graphite:{light:{accent:"#434b5a",hover:"#323945"},dark:{accent:"#66728a",hover:"#7b879e"}}},ir=.05;function rw(t,e){const n=(s,o)=>parseInt(s.slice(1+2*o,3+2*o),16),i=Ce[t][e].accent,r=fs[e];return`#${[0,1,2].map(s=>Math.round(n(i,s)*ir+n(r,s)*(1-ir)).toString(16).padStart(2,"0")).join("")}`}const Wa=t=>`--m-accent: ${t.accent}; --m-accent-hover: ${t.hover};`,sw=ho.map(t=>`:host([scheme='${t}']) { ${Wa(Ce[t].light)} }
:host([scheme='${t}'][theme='dark']) { ${Wa(Ce[t].dark)} }`).join(`
`);function Ga(t){return ho.includes(t)}const ow=Ve`
    /*
     * The whole window, light surfaces on a cool grey, the system's type at reading sizes, one
     * blue for what is active, red for recording
     */
    :host {
      /* Greys with a touch of the theme colour (themes.ts's TINT), so they go with each scheme */
      --m-bg: color-mix(in srgb, var(--m-accent) ${Te(ir*100)}%, ${Te(fs.light)});
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
      --m-accent: ${Te(Ce.blue.light.accent)};
      --m-accent-hover: ${Te(Ce.blue.light.hover)};
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
      --m-bg: color-mix(in srgb, var(--m-accent) ${Te(ir*100)}%, ${Te(fs.dark)});
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
      --m-accent: ${Te(Ce.blue.dark.accent)};
      --m-accent-hover: ${Te(Ce.blue.dark.hover)};
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
    ${Te(sw)}
`,wh=K`${Kr.mark.paths.map(t=>K`<path d=${t} />`)}${Kr.mark.circles.map(([t,e,n])=>K`<circle cx=${t} cy=${e} r=${n} />`)}`,aw=K`
  <g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" />
    ${wh}
  </g>`,bh={marketplace:K`<path d="M5.5 8h13l-1 12h-11z" /><path d="M9 10V6.5a3 3 0 0 1 6 0V10" />`,halloffame:K`<path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />`,creator:K`<path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v8" />`,profile:K`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,help:K`<path d="M8.6 8.6a3.5 3.5 0 1 1 5.1 3.1c-1 .5-1.7 1.3-1.7 2.4v.6" /><path d="M12 18.4v.1" />`},Ka={app:It(),marketplace:`${It()} Marketplace`,halloffame:`${It()} Hall of Fame`,creator:`${It()} Creator`,profile:`${It()} Profile`,help:`${It()} Help`};function Ci(t,e,n=e==="app"?"./":"../"){if(t!=="app"&&t!=="help")return Xg(t,n);if(t==="app"&&al)return nr;const i=n;return t==="app"?e==="app"||e==="help"?i:`${i}?from=${e}`:`${i}${t}`}function lw(t){return t==="app"?aw:K`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" stroke-width="5.5" />
    <g transform="translate(20 20) scale(2.5)" stroke-width="2.1">${bh[t]}</g>
  </g>`}const cw={app:["halloffame"],creator:["marketplace"]};function hw(t,e,n={}){n.home;const i=$,r=[...t!=="app"&&!al?["app"]:[],...cw[t]??[]];return v`${i}${n.afterHome??$}${r.filter(s=>s!==t).map(s=>v`<a class="m-help m-place ${s}" href=${Ci(s,t,e)} title=${Ka[s]} aria-label=${Ka[s]}>
        ${s==="app"?K`<svg viewBox="24 10 52 78" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">${wh}</g></svg>`:K`<svg viewBox="0 0 24 24" aria-hidden="true">${bh[s]}</svg>`}
      </a>`)}`}const dw=parseFloat("0.244+")<1;function uw(t){return v`<hero-version-line .tip=${t}></hero-version-line>`}const ja={en:{word:"Offline",title:"No internet connection: signing in, saving and the choir’s recordings wait until you are back online."},de:{word:"Offline",title:"Keine Internetverbindung: Anmelden, Speichern und die Aufnahmen warten, bis du wieder online bist."}},pw=K`<path d="M7 18h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.5 4.5 0 0 0 7 18z" /><path d="M4 4l16 16" />`;class kh extends ke{constructor(){super(...arguments),this.tip="",this.offline=!navigator.onLine,this.changed=()=>this.offline=!navigator.onLine}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.changed(),window.addEventListener("online",this.changed),window.addEventListener("offline",this.changed)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("online",this.changed),window.removeEventListener("offline",this.changed)}render(){if(this.offline){const e=be()==="de"?ja.de:ja.en;return v`<span class="m-version-line m-offline" role="status" title=${e.title}>
        <svg viewBox="0 0 24 24" aria-hidden="true">${pw}</svg>${e.word}
      </span>`}return v`<span class="m-version-line">
      <span class="m-version" title=${this.tip}>v${"0.244+"}</span>
      ${dw?v`<span class="m-beta">Beta</span>`:""}
    </span>`}}kh.properties={tip:{},offline:{state:!0}};customElements.get("hero-version-line")||customElements.define("hero-version-line",kh);const fw=Ve`
    /* The round keys (help, home, the places): header-key.ts, the one look of every header key */
    ${yh(".m-help")}
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
    /* The name with the build's version ("0.244+") under it, left aligned; cut where the keys need the room */
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
    hero-version-line {
      display: block;
      min-width: 0;
    }
    /* Offline, in the version's place: amber, one line as high as the Beta badge */
    .m-offline {
      gap: 3px;
      height: 13px;
      font: 600 0.68rem/1 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #d97706;
      white-space: nowrap;
    }
    .m-offline svg {
      flex: none;
      width: 13px;
      height: 13px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
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
`,mw="hero-profile";var gw=Object.defineProperty,yw=Object.getOwnPropertyDescriptor,F=(t,e,n,i)=>{for(var r=i>1?void 0:i?yw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&gw(e,n,r),r};const vh="violinhero-nickname-asked",ww=3e3,bw="https://www.crescendu.com/feedback",kw=K`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,vw="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z",qa=K`<path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
  <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24z" />
  <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
  <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />`;let O=class extends ke{constructor(){super(),this.hint=!1,this.reason="save",this.waiting=0,this.place="app",this.holdAsk=!1,this.creator=!1,this.menuOpen=!1,this.creating=!1,this.email="",this.password="",this.error="",this.info="",this.busy=!1,this.merging=null,this.mergePassword="",this.askName="",this.askNote="",this.askBusy=!1,this.justSignedIn=!1,this.profileOpen=!1,this.brokenPicture=!1,this.fromProfile=t=>{var e;!lo(t.origin)||((e=t.data)==null?void 0:e.type)!==mw||(t.data.action==="close"&&(this.profileOpen=!1),t.data.action==="saved"&&(this.claimed=typeof t.data.nickname=="string"?t.data.nickname:null,Lg().then(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("user-refresh",{bubbles:!0,composed:!0}))})))},this.openProfile=t=>{this.place!=="app"||!this.user||(t.preventDefault(),this.menuOpen=!1,this.profileOpen=!0)},this.outside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.invitedTimer=0,new so(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside),window.addEventListener("message",this.fromProfile),window.addEventListener("open-profile",this.openProfile)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside),window.removeEventListener("message",this.fromProfile),window.removeEventListener("open-profile",this.openProfile)}willUpdate(t){var e,n,i,r,s;if(t.has("holdAsk")&&!this.holdAsk&&t.get("holdAsk")&&this.askNickname(),t.has("user")){if(this.brokenPicture=!1,((e=t.get("user"))==null?void 0:e.uid)!==((n=this.user)==null?void 0:n.uid)){this.claimed=void 0,this.profileOpen=!1;const o=(i=this.user)==null?void 0:i.uid;o&&ph(o).then(l=>{var c;((c=this.user)==null?void 0:c.uid)===o&&(this.claimed=l??null,this.askNickname())}),this.creator=!1;const a=(r=this.user)==null?void 0:r.uid;a&&this.place!=="creator"&&Hg(a).then(l=>{var c;return((c=this.user)==null?void 0:c.uid)===a&&(this.creator=l)})}this.user?(s=this.dialog)==null||s.close():this.menuOpen=!1}}openSignIn(){var t;this.user||(this.error=this.info="",(t=this.dialog)==null||t.showModal())}press(){var t;if(this.user!==void 0){if(this.user){this.menuOpen=!this.menuOpen;return}this.error=this.info="",(t=this.dialog)==null||t.showModal()}}render(){const t=this.user,e=t!=null&&t.photoURL&&!this.brokenPicture?t.photoURL:"",n=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"",i=q(),r=t?i.signedInAs(n):i.signIn;return v`
      <button
        class="key ${t?"signed-in":""}"
        aria-label=${r}
        title=${r}
        aria-haspopup=${t?"menu":"dialog"}
        aria-expanded=${t?this.menuOpen:!1}
        ?disabled=${t===void 0}
        @click=${this.press}
      >
        ${e?v`<img src=${e} alt="" referrerpolicy="no-referrer" @error=${()=>this.brokenPicture=!0} />`:t?v`<span class="initial">${Sw(n)}</span>`:v`<svg viewBox="0 0 24 24" aria-hidden="true">${kw}</svg>`}
      </button>
      ${t&&this.menuOpen?this.menu(t):$} ${this.hint&&t===null?this.hintBubble():$} ${this.signInDialog()}
      ${this.nicknameDialog()} ${this.profileOverlay()}
    `}profileOverlay(){return v`<cr-preview-overlay
      .src=${this.profileOpen?Qg(Ci("profile",this.place,this.root),"embedded&bar"):""}
      .icon=${v`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11L12 4l8.5 7" /><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5" /></svg>`}
      .name=${It()}
      .place=${q().profile}
      .closeLabel=${q().close}
      @close=${()=>this.profileOpen=!1}
      @frame-load=${t=>ry(t.detail)}
    ></cr-preview-overlay>`}hintBubble(){const t=q();return v`
      <div class="hint" role="status">
        <button class="hint-text" @click=${this.fromHint}>
          <strong>${this.reason==="score"?t.scoreHintTitle:this.reason==="share"?t.shareHintTitle:t.hintTitle}</strong>
          <span>${this.reason==="score"?t.scoreHintText:this.reason==="share"?t.shareHintText:t.hintText(this.waiting)}</span>
        </button>
        <button class="hint-close" aria-label=${t.hintDismiss} title=${t.hintDismiss} @click=${()=>this.fire("hint-dismiss")}>×</button>
      </div>
    `}fromHint(){this.fire("hint-close"),this.press()}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}menu(t){const e=q(),n=!t.emailVerified&&t.providerData.some(i=>i.providerId==="password"||i.providerId==="facebook.com");return v`
      <div class="menu" role="menu" @keydown=${i=>i.key==="Escape"&&(this.menuOpen=!1)}>
        <div class="who">
          ${t.displayName?v`<strong>${t.displayName}</strong>`:$}
          <span class="email">${t.email}</span>
        </div>
        ${n?v`<p class="note warn">${e.confirmEmail}</p>`:$}
        ${this.creator&&this.place!=="creator"?v`<a class="item creator-link" role="menuitem" href=${Ci("creator",this.place,this.root)}
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></svg>${e.creatorDashboard}</a
            >`:$}
        <!-- The person's profile (home): no header key any more; in a hero app over the app, so its session goes on -->
        <a
          class="item invite-item"
          role="menuitem"
          href=${this.place==="profile"?fh:Ci("profile",this.place,this.root)}
          @click=${i=>{this.menuOpen=!1,this.place==="app"&&this.openProfile(i)}}
          ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 11L12 4l8.5 7" /><path d="M5.5 9.5V20h5v-5.5h3V20h5V9.5" /></svg>${e.profile}</a
        >
        <button class="item invite-item ${this.invited??""}" role="menuitem" @click=${()=>void this.invite(t)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5" /><circle cx="10" cy="8" r="3.5" /><path d="M18 8v6M15 11h6" /></svg>
          ${this.invited==="copied"?e.inviteCopied:this.invited==="failed"?e.inviteFailed:e.invite}
        </button>
        <a class="item invite-item" role="menuitem" href=${bw} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4.5" /></svg>
          ${e.feedback}
        </a>
        <button class="item" role="menuitem" @click=${()=>void Bg()}>${e.signOut}</button>
        ${this.place==="app"||this.place==="creator"?v`<button
              class="item delete-item"
              role="menuitem"
              @click=${()=>{this.menuOpen=!1,this.dispatchEvent(new CustomEvent("delete-account",{bubbles:!0,composed:!0}))}}
            >
              ${this.place==="creator"?e.deleteAccount.creatorMenu:e.deleteAccount.menu}
            </button>`:$}
      </div>
    `}async invite(t){const e=hy(t.uid,this.root??Jg(this.place==="app")),n=await dy(e,q().inviteText);this.invited=n==="shared"?void 0:n,clearTimeout(this.invitedTimer),this.invitedTimer=window.setTimeout(()=>this.invited=void 0,ww)}heardField(){const t=be()==="de"?"de":"en";return v`<label class="field"
      >${Or.question[t]}
      <select @change=${e=>$g(e.target.value)}>
        <option value="" ?selected=${!Ia()}>${Or.none[t]}</option>
        ${ch.map(e=>v`<option value=${e} ?selected=${Ia()===e}>${Or.answers[e][t]}</option>`)}
      </select>
    </label>`}signInDialog(){const t=q();return v`
      <dialog @close=${()=>(this.password=this.mergePassword="",this.merging=null)} @click=${this.backdrop}>
        ${this.merging?this.mergeView(this.merging):v`<form @submit=${this.submit} novalidate>
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
              minlength=${xn}
              placeholder=${this.creating?t.passwordHint(xn):""}
              .value=${this.password}
              @input=${e=>this.password=e.target.value}
            />
          </label>
          ${this.creating?this.heardField():$}
          ${this.error?v`<p class="error" role="alert">${this.error}</p>`:$}
          ${this.info?v`<p class="info">${this.info}</p>`:$}
          <button class="primary" type="submit" ?disabled=${this.busy}>${this.creating?t.createAccountButton:t.signIn}</button>
          <div class="links">
            <button class="link" type="button" @click=${()=>(this.creating=!this.creating,this.error=this.info="")}>
              ${this.creating?t.haveAccount:t.createAccount}
            </button>
            ${this.creating?$:v`<button class="link" type="button" @click=${this.reset}>${t.forgotPassword}</button>`}
          </div>
          <div class="divider">${t.or}</div>
          <button class="google" type="button" ?disabled=${this.busy} @click=${this.google}>
            <svg viewBox="0 0 24 24" aria-hidden="true">${qa}</svg>
            ${t.google}
          </button>
          <button class="google facebook" type="button" ?disabled=${this.busy} @click=${this.facebook}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${vw} /></svg>
            ${t.facebook}
          </button>
          <p class="agree">
            ${t.agree[0]}<a href=${Na("terms")} target="_blank" rel="noopener">${t.termsName}</a>${t.agree[1]}<a
              href=${Na("privacy")}
              target="_blank"
              rel="noopener"
              >${t.privacyName}</a
            >${t.agree[2]}
          </p>
        </form>`}
      </dialog>
    `}backdrop(t){var e;t.target===this.dialog&&((e=this.dialog)==null||e.close())}askNickname(){var n;const t=this.user;if(!t||this.claimed!==null||(n=this.askDialog)!=null&&n.open||this.holdAsk)return;const e=Ew();!this.justSignedIn&&e.includes(t.uid)||(this.justSignedIn=!1,_w([...e.filter(i=>i!==t.uid),t.uid]),this.askName=Tw(t),this.askNote="",this.menuOpen=!1,this.updateComplete.then(()=>{var r,s,o;if(((r=this.user)==null?void 0:r.uid)!==t.uid||this.claimed!==null)return;(s=this.askDialog)==null||s.showModal();const i=(o=this.askDialog)==null?void 0:o.querySelector("input");i==null||i.focus(),i==null||i.select()}))}async saveAsked(t){var n;t.preventDefault();const e=this.askName.trim();if(e){this.askBusy=!0,this.askNote="";try{await Gg(e),this.claimed=e.slice(0,60),(n=this.askDialog)==null||n.close()}catch(i){this.askNote=i instanceof Pn?i.reason==="taken"?q().nicknameTaken(e):q().nicknameInvalid:Et(i)}finally{this.askBusy=!1}}}nicknameDialog(){const t=q(),e=t.nicknameDialog;return v`
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
          ${this.askNote?v`<p class="error" role="alert">${this.askNote}</p>`:$}
          <!-- As every form ends: on the right, Later first, then Save -->
          <div class="ask-actions">
            <button class="google later" type="button" @click=${()=>{var n;return(n=this.askDialog)==null?void 0:n.close()}}>${e.later}</button>
            <button class="primary" type="submit" ?disabled=${this.askBusy||!this.askName.trim()}>${e.save}</button>
          </div>
        </form>
      </dialog>
    `}async submit(t){if(t.preventDefault(),this.error=this.info="",this.creating&&this.password.length<xn){this.error=q().auth.weakPassword(xn);return}this.busy=!0;try{this.justSignedIn=!0,await(this.creating?Og(this.email,this.password):Mg(this.email,this.password)),this.askNickname()}catch(e){this.justSignedIn=!1,this.error=Et(e)}finally{this.busy=!1}}async facebook(){this.error=this.info="";try{this.justSignedIn=!0,await zg(),this.askNickname()}catch(t){this.justSignedIn=!1;const e=Fg(t);if(e){this.merging=e,this.mergePassword="";return}this.error=Et(t)}}mergeView(t){const e=q();return v`<div class="merge">
      <div class="head">
        <h2>${e.merge.title}</h2>
        <button class="close" type="button" aria-label=${e.close} @click=${()=>{var n;return(n=this.dialog)==null?void 0:n.close()}}>×</button>
      </div>
      <p class="lead">${e.merge.lead} <strong class="merge-email">${t.email}</strong>.</p>
      <ol class="merge-steps">
        ${e.merge.steps.map(n=>v`<li>${n}</li>`)}
      </ol>
      ${this.error?v`<p class="error" role="alert">${this.error}</p>`:$}
      ${this.info?v`<p class="info">${this.info}</p>`:$}
      <button class="google" type="button" ?disabled=${this.busy} @click=${()=>void this.merge("google")}>
        <svg viewBox="0 0 24 24" aria-hidden="true">${qa}</svg>
        ${e.merge.google}
      </button>
      <div class="divider">${e.merge.orPassword}</div>
      <label class="field"
        >${e.password}
        <input
          type="password"
          autocomplete="current-password"
          .value=${this.mergePassword}
          @input=${n=>this.mergePassword=n.target.value}
          @keydown=${n=>n.key==="Enter"&&void this.merge("password")}
        />
      </label>
      <button class="primary" type="button" ?disabled=${this.busy||!this.mergePassword} @click=${()=>void this.merge("password")}>${e.merge.button}</button>
      <div class="links">
        <button class="link" type="button" @click=${()=>void this.mergeReset(t.email)}>${e.forgotPassword}</button>
        <button class="link" type="button" @click=${()=>{var n;return(n=this.dialog)==null?void 0:n.close()}}>${e.merge.cancel}</button>
      </div>
    </div>`}async merge(t){const e=this.merging;if(e){this.error=this.info="",this.busy=!0;try{if(this.justSignedIn=!0,await Ug(e,t,this.mergePassword)==="other"){this.justSignedIn=!1,this.error=q().merge.otherAccount(e.email);return}this.merging=null,this.askNickname()}catch(n){this.justSignedIn=!1,this.error=Et(n)}finally{this.busy=!1}}}async mergeReset(t){this.error=this.info="";try{await xa(t),this.info=q().resetSent(t)}catch(e){this.error=Et(e)}}async google(){this.error=this.info="";try{this.justSignedIn=!0,await Vg(),this.askNickname()}catch(t){this.justSignedIn=!1,this.error=Et(t)}}async reset(){if(this.error=this.info="",!this.email.trim()){this.error=q().enterEmailFirst;return}try{await xa(this.email),this.info=q().resetSent(this.email.trim())}catch(t){this.error=Et(t)}}};O.styles=[co,Ve`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      flex: none;
      --size: 36px;
    }
    /*
     * The profile overlay (closed nearly always) out of the row: as an empty flex item it still took
     * the row's 8px gap, so the picture stood that far in from the header's end
     */
    cr-preview-overlay {
      position: absolute;
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
    input,
    select {
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
    .facebook svg {
      fill: #1877f2;
    }
    .merge {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }
    .merge-email {
      overflow-wrap: anywhere;
    }
    .merge-steps {
      margin: 0;
      padding-left: 1.2rem;
      display: grid;
      gap: 0.3rem;
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

  `];F([C({attribute:!1})],O.prototype,"user",2);F([C({type:Boolean})],O.prototype,"hint",2);F([C()],O.prototype,"reason",2);F([C({type:Number})],O.prototype,"waiting",2);F([C()],O.prototype,"place",2);F([C({type:Boolean})],O.prototype,"holdAsk",2);F([C()],O.prototype,"root",2);F([B()],O.prototype,"creator",2);F([B()],O.prototype,"menuOpen",2);F([B()],O.prototype,"creating",2);F([B()],O.prototype,"email",2);F([B()],O.prototype,"password",2);F([B()],O.prototype,"error",2);F([B()],O.prototype,"info",2);F([B()],O.prototype,"busy",2);F([B()],O.prototype,"merging",2);F([B()],O.prototype,"mergePassword",2);F([B()],O.prototype,"claimed",2);F([B()],O.prototype,"askName",2);F([B()],O.prototype,"askNote",2);F([B()],O.prototype,"askBusy",2);F([bt("dialog.ask")],O.prototype,"askDialog",2);F([B()],O.prototype,"profileOpen",2);F([B()],O.prototype,"brokenPicture",2);F([bt("dialog")],O.prototype,"dialog",2);F([B()],O.prototype,"invited",2);O=F([Bt("account-menu")],O);function Sw(t){return(t.trim()[0]??"?").toUpperCase()}function Tw(t){var i,r;const n=(((i=t.displayName)==null?void 0:i.trim())||((r=t.email)==null?void 0:r.split("@")[0])||"").replace(/\//g,"").replace(/^_+|_+$/g,"").trim().slice(0,60);return/^\.{1,2}$/.test(n)?"":n}function Ew(){try{const t=JSON.parse(localStorage.getItem(vh)??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}function _w(t){try{localStorage.setItem(vh,JSON.stringify(t.slice(-20)))}catch{}}var Aw=Object.defineProperty,Iw=Object.getOwnPropertyDescriptor,br=(t,e,n,i)=>{for(var r=i>1?void 0:i?Iw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Aw(e,n,r),r};const Ya=K`<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />`,Ja=K`<circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />`;let un=class extends ke{constructor(){super(),this.theme="light",this.scheme="blue",this.open=!1,this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},new so(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside)}choose(t){this.open=!1,ah(t)}fire(t,e){this.open=!1,this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){const t=q(),e=je[be()],n=this.theme==="dark",i=`${t.languageTitle(e.name)} · ${t.themeMenu}`;return v`
      <button class="key" aria-label=${i} title=${i} aria-haspopup="menu" aria-expanded=${this.open} @click=${()=>this.open=!this.open}>
        ${this.split()}
      </button>
      ${this.open?v`<div class="menu" role="menu" aria-label=${i} @keydown=${r=>r.key==="Escape"&&(this.open=!1)}>
            ${Object.keys(je).map(r=>v`<button
                role="menuitemradio"
                aria-checked=${r===be()}
                class=${r===be()?"on":""}
                @click=${()=>this.choose(r)}
              >
                ${this.flag(r)}
                <span>${je[r].name}</span>
                ${r===be()?v`<span class="tick" aria-hidden="true">✓</span>`:$}
              </button>`)}
            <hr />
            <button role="menuitem" @click=${()=>this.fire("theme-change",n?"light":"dark")}>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${n?Ja:Ya}</svg>
              <span>${n?t.lightMode:t.darkMode}</span>
            </button>
            <hr />
            ${ho.map(r=>v`<button
                role="menuitemradio"
                aria-checked=${r===this.scheme}
                class=${r===this.scheme?"on":""}
                @click=${()=>this.fire("scheme-change",r)}
              >
                <span class="swatch" style="background: ${Ce[r][this.theme].accent}" aria-hidden="true"></span>
                <span>${t.schemes[r]}</span>
                ${r===this.scheme?v`<span class="tick" aria-hidden="true">✓</span>`:$}
              </button>`)}
          </div>`:$}
    `}split(){const t=be(),e=this.theme==="dark";return v`<svg class="face" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id="key-left"><rect x="0" y="0" width="12" height="24" /></clipPath>
        <clipPath id="key-round"><circle cx="12" cy="12" r="12" /></clipPath>
      </defs>
      <g clip-path="url(#key-round)">
        <g clip-path="url(#key-left)">${je[t].flag}</g>
        <rect x="12" y="0" width="12" height="24" fill=${Ce[this.scheme][this.theme].accent} />
        <line x1="12" y1="0" x2="12" y2="24" class="seam" />
        <g class="mode" transform="translate(11.5 6.3) scale(0.475)">${e?Ya:Ja}</g>
      </g>
    </svg>`}flag(t){return v`<svg class="flag" viewBox="0 0 24 24" aria-hidden="true">
      <defs><clipPath id="round-${t}"><circle cx="12" cy="12" r="12" /></clipPath></defs>
      <g clip-path="url(#round-${t})">${je[t].flag}</g>
    </svg>`}};un.styles=[co,Ve`
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
  `];br([C()],un.prototype,"theme",2);br([C()],un.prototype,"scheme",2);br([B()],un.prototype,"open",2);un=br([Bt("language-menu")],un);const ms="crescendu-look",Br="crescendu.com",$w=400*24*3600;function gs(){var t;try{const e=(t=document.cookie.split(";").map(r=>r.trim()).find(r=>r.startsWith(`${ms}=`)))==null?void 0:t.slice(ms.length+1);if(!e)return{};const n=new URLSearchParams(decodeURIComponent(e)),i=n.get("theme");return{scheme:n.get("scheme")??void 0,theme:i==="light"||i==="dark"?i:void 0}}catch{return{}}}function Za(t){try{const e={...gs(),...t},n=new URLSearchParams;e.scheme&&n.set("scheme",e.scheme),e.theme&&n.set("theme",e.theme);const i=location.hostname,r=i===Br||i.endsWith(`.${Br}`)?`; Domain=${Br}`:"",s=location.protocol==="https:"?"; Secure":"";document.cookie=`${ms}=${encodeURIComponent(n.toString())}; Path=/; Max-Age=${$w}; SameSite=Lax${r}${s}`}catch{}}var xw=Object.defineProperty,Pw=Object.getOwnPropertyDescriptor,kt=(t,e,n,i)=>{for(var r=i>1?void 0:i?Pw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&xw(e,n,r),r};const Hr=matchMedia("(prefers-color-scheme: dark)"),Wr="violinhero-settings",Xa={manual:{en:"Help",de:"Hilfe"},creator:{en:"Creator Help",de:"Creator-Hilfe"}},Qa={en:`Open ${Qe().app.name}`,de:`${Qe().app.name} öffnen`};let Oe=class extends ke{constructor(){super(),this.guide="manual",this.language="en",this.root="../",this.pages="",this.theme=Hr.matches?"dark":"light",this.scheme="blue",this.followSystem=e=>{gs().theme||(this.theme=e.matches?"dark":"light",this.applyTheme())},new so(this);try{const e=JSON.parse(localStorage.getItem(Wr)??"{}");Ga(e.scheme)&&(this.scheme=e.scheme)}catch{}const t=gs();Ga(t.scheme)&&(this.scheme=t.scheme),t.theme&&(this.theme=t.theme)}connectedCallback(){super.connectedCallback(),this.language in je&&ah(this.language,!1),this.applyTheme(),Hr.addEventListener("change",this.followSystem),this.stopWatching=Rg(t=>this.user=t),this.stopLanguage=ro(()=>{const t=this.pageIn(be());be()!==this.language&&t&&(location.href=t+location.hash)})}disconnectedCallback(){var t,e;super.disconnectedCallback(),Hr.removeEventListener("change",this.followSystem),(t=this.stopWatching)==null||t.call(this),(e=this.stopLanguage)==null||e.call(this)}pageIn(t){for(const e of this.pages.split(/\s+/)){const[n,i]=e.split("=");if(n===t&&i)return i}}applyTheme(){var n;const t=document.documentElement;t.dataset.theme=this.theme;const e=Ce[this.scheme][this.theme];t.style.setProperty("--accent",e.accent),t.style.setProperty("--accent-hover",e.hover),(n=document.querySelector('meta[name="theme-color"]'))==null||n.setAttribute("content",rw(this.scheme,this.theme))}setScheme(t){this.scheme=t,Za({scheme:t});try{const e=JSON.parse(localStorage.getItem(Wr)??"{}");localStorage.setItem(Wr,JSON.stringify({...e,scheme:t}))}catch{}this.applyTheme()}render(){var e;const t=((e=Xa[this.guide])==null?void 0:e[this.language])??Xa.manual.en;return v`
      <header class="m-header">
        <a class="m-brand home" href=${this.root} title=${Qa[this.language]??Qa.en}>
          <svg class="m-logo" viewBox="0 0 100 100" aria-hidden="true">${lw("help")}</svg>
          <span class="m-titles">
            <!-- The app's name as it is, the help's in the theme colour -->
            <span class="m-name">${Qe().app.name} <span class="accent">${t}</span></span>
            ${uw(q().versionTitle("0.244+","ee454ce · b058f8e"))}
          </span>
        </a>
        <div class="m-header-end">
          ${hw("help",this.root)}
          <language-menu
            .theme=${this.theme}
            .scheme=${this.scheme}
            @theme-change=${n=>{this.theme=n.detail,Za({theme:n.detail}),this.applyTheme()}}
            @scheme-change=${n=>this.setScheme(n.detail)}
          ></language-menu>
          <account-menu .user=${this.user} place="help" root=${this.root}></account-menu>
        </div>
      </header>
    `}};Oe.styles=[ow,fw,Ve`
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
    `];kt([C()],Oe.prototype,"guide",2);kt([C()],Oe.prototype,"language",2);kt([C()],Oe.prototype,"root",2);kt([C()],Oe.prototype,"pages",2);kt([C({reflect:!0})],Oe.prototype,"theme",2);kt([C({reflect:!0})],Oe.prototype,"scheme",2);kt([B()],Oe.prototype,"user",2);Oe=kt([Bt("help-header")],Oe);var Nw=Object.defineProperty,Cw=Object.getOwnPropertyDescriptor,wn=(t,e,n,i)=>{for(var r=i>1?void 0:i?Cw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Nw(e,n,r),r};let wt=class extends ke{constructor(){super(...arguments),this.speaking=!1,this.waiting=!1,this.gesture=""}mouth(t){var n,i,r,s;const e=Math.max(0,Math.min(1,t));(n=this.open)==null||n.setAttribute("ry",(.6+e*5.4).toFixed(2)),(i=this.open)==null||i.setAttribute("rx",(5.5+e*1.5).toFixed(2)),(r=this.open)==null||r.setAttribute("opacity",e>.06?"1":"0"),(s=this.smile)==null||s.setAttribute("opacity",e>.06?"0":"1")}render(){return v`<svg viewBox="0 0 100 100" role="img" aria-hidden="true">
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
    </svg>`}};wt.styles=Ve`
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
  `;wn([C({type:Boolean,reflect:!0})],wt.prototype,"speaking",2);wn([C({type:Boolean,reflect:!0})],wt.prototype,"waiting",2);wn([C({reflect:!0})],wt.prototype,"gesture",2);wn([bt(".mouth-open")],wt.prototype,"open",2);wn([bt(".mouth-smile")],wt.prototype,"smile",2);wt=wn([Bt("cr-guide-avatar")],wt);var Dw=Object.defineProperty,Rw=Object.getOwnPropertyDescriptor,le=(t,e,n,i)=>{for(var r=i>1?void 0:i?Rw(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Dw(e,n,r),r};const R={name:{de:"Mira",en:"Mira"},hello:{de:"Hallo {name}, ich heiße Mira.",en:"Hello {name}, my name is Mira."},helloNoName:{de:"Hallo, ich heiße Mira.",en:"Hello, my name is Mira."},back:{de:"Zurück",en:"Back"},pause:{de:"Pause",en:"Pause"},resume:{de:"Weiter",en:"Resume"},next:{de:"Überspringen",en:"Skip"},close:{de:"Assistentin ausschalten",en:"Switch the assistant off"},left:{de:"noch {time}",en:"{time} left"},step:{de:"Schritt {n} von {m}",en:"Step {n} of {m}"},yourTurn:{de:"Du bist dran",en:"Your turn"},finished:{de:"Fertig!",en:"All done!"},again:{de:"Noch einmal",en:"Once more"},closeDone:{de:"Schließen",en:"Close"},paused:{de:"Angehalten",en:"Paused"},speed:{de:"Sprechtempo",en:"Speaking speed"},slow:{de:"Langsam",en:"Slow"},fast:{de:"Schnell",en:"Fast"},nudgeClick:{de:"Lass dir ruhig Zeit. Wenn du so weit bist, klick einfach auf das, was ich markiert habe.",en:"Take your time. When you’re ready, just click what I’ve outlined."},nudgeType:{de:"Lass dir ruhig Zeit. Schreib einfach etwas in das markierte Feld.",en:"Take your time. Just type something into the outlined field."},still:{de:"Hallo? Bist du noch da? Ich warte hier auf dich.",en:"Hello? Are you still there? I’m waiting here for you."},bye:{de:"Ich lass dich jetzt in Ruhe. Wenn du mich wieder brauchst, klick einfach auf das Fragezeichen. Tschüss!",en:"I’ll leave you to it. Whenever you need me again, just click the question mark. Bye!"}},Lw=6,el=.7,Mw=450,_n=9,Ow=.14,tl=matchMedia("(prefers-reduced-motion: reduce)"),Vw=["left","right","top"],zw=16,gi=12,Fw=15,Uw=25,Bw=50,Hw=90,nl=2400,il=2e3,Gr=2400,Sh="guide-fast";function Ww(){try{return localStorage.getItem(Sh)==="1"}catch{return!1}}const Gw="guide-met";function Kw(t){try{const e=`${Gw}-${t||"guest"}`,n=localStorage.getItem(e)==="1";return localStorage.setItem(e,"1"),n}catch{return!0}}const jw=/^(Hallo|Hi|Hello)\s*,\s*/;function rl(t){const e=t.replace(jw,"");return e===t?t:e.charAt(0).toUpperCase()+e.slice(1)}const sl=["pointermove","pointerdown","keydown","wheel","scroll","input"],qw=2e3;function Yw(){var e;let t=document.activeElement;for(;(e=t==null?void 0:t.shadowRoot)!=null&&e.activeElement;)t=t.shadowRoot.activeElement;return t}let ne=class extends ke{constructor(){super(...arguments),this.language="de",this.nickname="",this.person="",this.introduce=!1,this.first=-1,this.index=-1,this.phase="speaking",this.gesture="",this.fast=Ww(),this.spent=0,this.speaker=new Qy,this.frame=0,this.last=0,this.turn=0,this.settle=0,this.gestureTimer=0,this.talking=!1,this.kick=0,this.talk=0,this.yawnFrom=0,this.active=performance.now(),this.waitingSince=0,this.idleLevel=0,this.at={x:0,y:0,w:0,h:0,ready:!1},this.typed=0,this.activity=t=>{t.type==="input"&&(this.typed=performance.now()),this.active=performance.now(),this.gesture==="bored"&&this.gestureFor(""),this.idleLevel&&!this.talking&&this.phase==="waiting"&&(this.caption=void 0),this.talking||(this.idleLevel=0)},this.clicked=t=>{var r;const e=this.step;if(!e||e.action!=="click"||this.phase==="paused"||this.phase==="bye")return;const n=(r=e.target)==null?void 0:r.call(e);if(!n||!t.composedPath().includes(n))return;const i=++this.turn;this.speaker.stop(),this.talking=!1,window.clearTimeout(this.settle),this.settle=window.setTimeout(()=>{i===this.turn&&(!e.done||e.done()?this.enter(this.index+1,"forward"):this.wait())},Mw)},this.tick=t=>{const e=Math.min(.1,(t-this.last)/1e3);this.last=t,(this.phase==="speaking"||this.phase==="waiting"||this.phase==="holding")&&(this.spent+=e,Math.floor(this.spent*2)!==Math.floor((this.spent-e)*2)&&this.requestUpdate()),this.follow(),this.mouthMoves(e,t);const n=this.step;n!=null&&n.action&&n.done&&(this.phase==="waiting"||this.phase==="speaking"&&n.action==="click")&&this.complete(n)&&this.enter(this.index+1,"forward"),this.idle(t),this.frame=requestAnimationFrame(this.tick)},this.where="left"}connectedCallback(){var t;super.connectedCallback(),this.speaker.onWord=()=>this.kick=1,this.introduce=!Kw(this.person),document.addEventListener("click",this.clicked,!0);for(const e of sl)document.addEventListener(e,this.activity,{capture:!0,passive:!0});this.last=performance.now(),this.frame=requestAnimationFrame(this.tick);for(const e of ie("cr-fold-panel"))(t=e.unfold)==null||t.call(e);queueMicrotask(()=>this.enter(0,"forward"))}disconnectedCallback(){super.disconnectedCallback(),this.speaker.stop(),cancelAnimationFrame(this.frame),window.clearTimeout(this.settle),window.clearTimeout(this.gestureTimer),document.removeEventListener("click",this.clicked,!0);for(const t of sl)document.removeEventListener(t,this.activity,{capture:!0})}updated(t){t.has("language")&&t.get("language")!==void 0&&this.index>=0&&(this.phase==="speaking"||this.phase==="waiting")&&this.enter(this.index,"replay")}say(t){return jt(t,this.language)}words(t){if(this.first<0||t!==this.guide.steps[this.first])return t.say;const e=this.nickname.trim(),n=i=>this.introduce?`${jt(e?R.hello:R.helloNoName,i,{name:e})} `:"";return{de:n("de")+rl(t.say.de),en:n("en")+rl(t.say.en)}}get rate(){return this.fast?Yy:1}seconds(t){return(t.after??0)+ps(this.say(this.words(t)),this.rate)+(t.action?Lw:el)}toggleFast(){this.fast=!this.fast;try{localStorage.setItem(Sh,this.fast?"1":"0")}catch{}this.speaker.setRate(this.rate)}get step(){return this.guide.steps[this.index]}included(t){const e=this.guide.steps[t];return!!e&&(!e.when||e.when())}gestureFor(t,e){window.clearTimeout(this.gestureTimer),this.gesture=t,t==="yawn"&&(this.yawnFrom=performance.now()),e&&(this.gestureTimer=window.setTimeout(()=>this.gesture===t&&(this.gesture=""),e))}speak(t,e){const n=this.turn;this.talking=!0,this.speaker.speak(this.say(t),this.language==="de"?"de":"en",this.rate).then(()=>{n===this.turn&&(this.talking=!1,e())})}enter(t,e,n=!1){var s,o;const i=this.guide.steps;if(e==="forward")for(;t<i.length&&(!this.included(t)||i[t].action&&((o=(s=i[t]).done)!=null&&o.call(s)));)t++;else if(e==="back")for(;t>0&&!this.included(t);)t--;if(window.clearTimeout(this.settle),t>=i.length)return this.finish();const r=i[t].after;if(e==="forward"&&r&&!n){const a=++this.turn;this.phase="holding",this.settle=window.setTimeout(()=>a===this.turn&&this.enter(t,"forward",!0),r*1e3);return}++this.turn,this.first<0&&(this.first=t),this.index=t,this.spent=0,this.phase="speaking",this.caption=void 0,this.idleLevel=0,i[t].wave?this.gestureFor("wave",nl):this.gesture==="bored"&&this.gestureFor(""),this.revealTarget(),this.speak(this.words(i[t]),()=>this.said())}said(){const t=this.step;if(t){if(!t.action){const e=this.turn;this.phase="waiting",this.settle=window.setTimeout(()=>e===this.turn&&this.enter(this.index+1,"forward"),el*1e3);return}if(this.complete(t))return this.enter(this.index+1,"forward");this.wait()}}wait(){this.phase="waiting",this.waitingSince=performance.now(),this.gestureFor("turn",il)}finish(){++this.turn,this.speaker.stop(),this.talking=!1,this.index=this.guide.steps.length,this.phase="done",this.caption=void 0}complete(t){var n,i;if(!((n=t.done)!=null&&n.call(t)))return!1;if(t.action!=="type")return!0;const e=(i=t.target)==null?void 0:i.call(t);return performance.now()-this.typed>=qw||!e||Yw()!==e}idle(t){const e=this.step;if(this.phase!=="waiting"||!(e!=null&&e.action)||this.talking)return;const n=(t-Math.max(this.active,this.waitingSince))/1e3;if(n>=Fw&&!this.gesture&&this.gestureFor("bored"),n>=Uw&&this.idleLevel===0)this.idleLevel=1,this.gestureFor("turn",il),this.nudge(e.action==="type"?R.nudgeType:R.nudgeClick);else if(n>=Bw&&this.idleLevel===1){this.idleLevel=2,this.gestureFor("yawn",Gr);const i=this.turn;window.setTimeout(()=>i===this.turn&&this.phase==="waiting"&&this.nudge(R.still,"bored"),Gr)}else n>=Hw&&this.idleLevel===2&&(this.idleLevel=3,this.goodbye())}nudge(t,e){this.caption=t,this.speak(t,()=>{e&&this.gestureFor(e)})}goodbye(){++this.turn,window.clearTimeout(this.settle),this.phase="bye",this.caption=R.bye,this.gestureFor("wave",nl),this.speak(R.bye,()=>window.setTimeout(()=>this.close(),600))}revealTarget(){var n,i;const t=(i=(n=this.step)==null?void 0:n.target)==null?void 0:i.call(n);if(!N(t))return;const e=t.getBoundingClientRect();(e.top<60||e.bottom>innerHeight-180)&&t.scrollIntoView({block:"center",behavior:tl.matches?"auto":"smooth"})}place(t){const e=this.card;if(!e)return;const n=e.offsetWidth,i=e.offsetHeight,r=zw,s={left:{l:r,t:innerHeight-r-i},right:{l:innerWidth-r-n,t:innerHeight-r-i},top:{l:innerWidth-r-n,t:r}},o=l=>{const c=s[l];return c.l<t.right+gi&&c.l+n>t.left-gi&&c.t<t.bottom+gi&&c.t+i>t.top-gi};if(!o(this.where))return;const a=Vw.find(l=>!o(l));a&&(this.where=a,e.dataset.place=a)}follow(){var w,b,I;const t=this.pointer,e=this.spot;if(!t||!e)return;const n=this.phase==="done"||this.phase==="bye"?null:(b=(w=this.step)==null?void 0:w.target)==null?void 0:b.call(w);if(!N(n)){t.classList.add("hidden"),e.classList.add("hidden");return}const i=n.getBoundingClientRect();this.place(i);const r={x:i.left-_n,y:i.top-_n,w:i.width+2*_n,h:i.height+2*_n},s=this.at,o=tl.matches||!s.ready?1:Ow;s.x+=(r.x-s.x)*o,s.y+=(r.y-s.y)*o,s.w+=(r.w-s.w)*o,s.h+=(r.h-s.h)*o,s.ready=!0,e.style.transform=`translate(${s.x}px, ${s.y}px)`,e.style.width=`${s.w}px`,e.style.height=`${s.h}px`;const a=parseFloat(getComputedStyle(n).borderTopLeftRadius)||0;e.style.borderRadius=`${Math.min(a+_n,Math.min(s.w,s.h)/2)}px`;const l=s.x+Math.min(s.w-12,s.w*.62),c=s.y+Math.min(s.h-8,s.h*.65);t.style.transform=`translate(${l}px, ${c}px)`,t.classList.remove("hidden"),e.classList.remove("hidden");const y=this.phase==="waiting"&&!!((I=this.step)!=null&&I.action);t.classList.toggle("act",y),e.classList.toggle("act",y)}mouthMoves(t,e){const n=this.avatar;if(!n)return;if(this.gesture==="yawn"){const a=Math.min(1,(e-this.yawnFrom)/Gr);this.talk=Math.sin(Math.PI*a)**.7,n.mouth(this.talk);return}if(!this.talking||!this.speaker.sounding){this.talk=Math.max(0,this.talk-t*8),n.mouth(this.talk);return}this.kick=Math.max(0,this.kick-t*4);const i=e/1e3,r=.5+.5*Math.sin(i*Math.PI*2*4.2*this.rate),s=.55+.45*Math.sin(i*Math.PI*2*1.1*this.rate+1),o=Math.min(1,r*s*.85+this.kick*.5);this.talk+=(o-this.talk)*Math.min(1,t*18),n.mouth(this.talk)}back(){if(this.phase==="done")return this.enter(this.guide.steps.length-1,"back");let t=this.index-1;for(;t>0&&!this.included(t);)t--;this.enter(Math.max(0,t),"back")}togglePause(){if(this.phase==="paused")return this.enter(this.index,"replay");++this.turn,this.speaker.stop(),this.talking=!1,window.clearTimeout(this.settle),this.phase="paused",this.gestureFor("")}close(){this.speaker.stop(),this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0}))}get left(){const t=this.guide.steps;if(this.phase==="done"||this.phase==="bye")return 0;let e=this.step?Math.max(0,this.seconds(this.step)-this.spent):0;for(let n=this.index+1;n<t.length;n++)this.included(n)&&(e+=this.seconds(t[n]));return e}get total(){return this.guide.steps.reduce((t,e,n)=>t+(this.included(n)?this.seconds(e):0),0)}render(){var y;const e=this.guide.steps.map((w,b)=>b).filter(w=>this.included(w)),n=Math.max(1,e.filter(w=>w<=this.index).length),i=this.left,r=Math.max(1,this.total),s=this.phase==="done",o=s?1:Math.max(0,Math.min(1,1-i/r)),a=`${Math.floor(Math.ceil(i)/60)}:${String(Math.ceil(i)%60).padStart(2,"0")}`,l=this.phase==="waiting"&&!!((y=this.step)!=null&&y.action),c=s?R.finished:this.caption??(this.step&&this.words(this.step));return v`
      <div class="spot hidden" aria-hidden="true"></div>
      <div class="pointer hidden" aria-hidden="true">
        <span class="ripple"></span>
        <svg viewBox="0 0 40 48"><path d="M3 2l32 24-14 2.4L28.5 44l-6.6 2.8-7.4-15.6L3 40z" /></svg>
      </div>
      <section class="card" role="dialog" aria-label=${`${this.say(R.name)}: ${this.say(this.guide.title)}`}>
        <div class="main">
          <cr-guide-avatar ?speaking=${this.talking&&this.gesture!=="yawn"} ?waiting=${l} .gesture=${this.gesture}></cr-guide-avatar>
          <div class="words">
            <div class="who">
              <strong>${this.say(R.name)}</strong>
              <span>${this.say(this.guide.title)}</span>
            </div>
            <p class="say" aria-live="polite">${c?this.say(c):""}</p>
            ${l?v`<span class="turn">${this.say(R.yourTurn)}</span>`:this.phase==="paused"?v`<span class="turn quiet">${this.say(R.paused)}</span>`:$}
          </div>
        </div>
        <div class="keys">
          ${s?v`<button @click=${()=>this.enter(0,"forward")}>↺ ${this.say(R.again)}</button>
                <button class="primary" @click=${this.close}>${this.say(R.closeDone)}</button>`:v`<button class="round" title=${this.say(R.back)} aria-label=${this.say(R.back)} @click=${this.back}>
                  <svg viewBox="0 0 24 24"><path d="M11 6l-6 6 6 6M5 12h14" /></svg>
                </button>
                <button class="round" title=${this.phase==="paused"?this.say(R.resume):this.say(R.pause)} aria-label=${this.phase==="paused"?this.say(R.resume):this.say(R.pause)} @click=${this.togglePause}>
                  ${this.phase==="paused"?v`<svg viewBox="0 0 24 24"><path class="fill" d="M8 5l11 7-11 7z" /></svg>`:v`<svg viewBox="0 0 24 24"><path d="M9 5v14M15 5v14" /></svg>`}
                </button>
                <button class="round" title=${this.say(R.next)} aria-label=${this.say(R.next)} @click=${()=>this.enter(this.index+1,"forward")}>
                  <svg viewBox="0 0 24 24"><path d="M6 5l8 7-8 7M17 5v14" /></svg>
                </button>
                <span class="grow"></span>
                <!-- The voice's speed: a switch, Slow (as the voice speaks) or Fast (FAST_RATE), the one chosen lit -->
                <div class="speed" role="radiogroup" aria-label=${this.say(R.speed)} title=${this.say(R.speed)}>
                  ${[!1,!0].map(w=>v`<button
                      role="radio"
                      aria-checked=${this.fast===w}
                      class=${this.fast===w?"on":""}
                      @click=${()=>this.fast!==w&&this.toggleFast()}
                    >
                      ${this.say(w?R.fast:R.slow)}
                    </button>`)}
                </div>
                <button class="round quiet" title=${this.say(R.close)} aria-label=${this.say(R.close)} @click=${this.close}>
                  <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </button>`}
        </div>
        <div class="progress">
          <div class="track"><i style="width: ${(o*100).toFixed(1)}%"></i></div>
          <span>${s?jt(R.step,this.language,{n:e.length,m:e.length}):`${jt(R.step,this.language,{n,m:e.length})} · ${jt(R.left,this.language,{time:a})}`}</span>
        </div>
      </section>
    `}};ne.styles=Ve`
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
  `;le([C({attribute:!1})],ne.prototype,"guide",2);le([C()],ne.prototype,"language",2);le([C()],ne.prototype,"nickname",2);le([C()],ne.prototype,"person",2);le([B()],ne.prototype,"index",2);le([B()],ne.prototype,"phase",2);le([B()],ne.prototype,"gesture",2);le([B()],ne.prototype,"caption",2);le([B()],ne.prototype,"fast",2);le([bt("cr-guide-avatar")],ne.prototype,"avatar",2);le([bt(".pointer")],ne.prototype,"pointer",2);le([bt(".spot")],ne.prototype,"spot",2);le([bt(".card")],ne.prototype,"card",2);ne=le([Bt("cr-guide")],ne);const Jw=Object.freeze(Object.defineProperty({__proto__:null,get GuideAgent(){return ne}},Symbol.toStringTag,{value:"Module"}));
