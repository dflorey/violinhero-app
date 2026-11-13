const $c="violinhero",Pc="violin",Nc="Violin Hero",Dc="violinhero.crescendu.com",Cc="https://github.com/dflorey/violinhero-app.git";const xc={paths:["M50,39C43,39 38,42.5 38,48C38,51.5 39.5,53.5 37.5,55.8C42.6,55.6 44.4,57.8 44.4,60.8C44.4,63.8 42.6,66 37.5,65.8C36,68.4 34.5,71 34.5,74.2C34.5,80.2 41.5,83.2 50,83.2C58.5,83.2 65.5,80.2 65.5,74.2C65.5,71 64,68.4 62.5,65.8C57.4,66 55.6,63.8 55.6,60.8C55.6,57.8 57.4,55.6 62.5,55.8C60.5,53.5 62,51.5 62,48C62,42.5 57,39 50,39Z","M50,39V23"],circles:[[50,18,4]]},Ki={id:$c,instrument:Pc,name:Nc,domain:Dc,siteRepo:Cc,cacheVersion:2,mark:xc},zt=t=>`https://${t}.crescendu.com/`,It={violin:{id:"violin",app:{id:"violinhero",name:"Violin Hero",url:zt("violinhero")},name:{en:"violin",de:"Geige"},label:{en:"Violin",de:"Geige"},strings:[{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69},{name:"E",midi:76}],tuneOrder:[2,1,0,3],open:[55,62,69,76],range:[55,100],hz:[180,2800],programs:[41],partName:/viol|vln|^vn\b|geige/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},viola:{id:"viola",app:{id:"violahero",name:"Viola Hero",url:zt("violahero")},name:{en:"viola",de:"Bratsche"},label:{en:"Viola",de:"Bratsche"},strings:[{name:"C",midi:48},{name:"G",midi:55},{name:"D",midi:62},{name:"A",midi:69}],tuneOrder:[3,2,1,0],open:[48,55,62,69],range:[48,91],hz:[120,2e3],programs:[42],partName:/viola|bratsche|^vla\b|alto/i,clef:{sign:"C",line:3},middleLine:60,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},cello:{id:"cello",app:{id:"cellohero",name:"Cello Hero",url:zt("cellohero")},name:{en:"cello",de:"Cello"},label:{en:"Cello",de:"Cello"},strings:[{name:"C",midi:36},{name:"G",midi:43},{name:"D",midi:50},{name:"A",midi:57}],tuneOrder:[3,2,1,0],open:[36,43,50,57],range:[36,84],hz:[60,1400],programs:[43],partName:/cello|vc\b|vlc/i,clef:{sign:"F",line:4},middleLine:50,marks:{fingers:[0,1,2,3,4],bows:!0,harmonics:!0},bowed:!0,vibrato:!0},recorder:{id:"recorder",app:{id:"recorderhero",name:"Recorder Hero",url:zt("recorderhero")},name:{en:"recorder",de:"Blockflöte"},label:{en:"Recorder",de:"Blockflöte"},strings:[],tuneOrder:[],open:[],range:[72,98],hz:[450,3200],programs:[75,74],partName:/recorder|blockfl|flöte|flute|flauto/i,clef:{sign:"G",line:2,octave:1},middleLine:83,marks:{fingers:[],bows:!1,harmonics:!1},bowed:!1,vibrato:!1},voice:{id:"voice",app:{id:"voicehero",name:"Voice Hero",url:zt("voicehero")},name:{en:"voice",de:"Stimme"},label:{en:"Voice",de:"Gesang"},strings:[],tuneOrder:[],open:[],range:[55,84],hz:[70,1200],programs:[53,54,55],partName:/voice|vocal|voc\b|gesang|stimme|sing|sopran|alto|tenor|bass|canto|chant/i,clef:{sign:"G",line:2},middleLine:71,marks:{fingers:[],bows:!1,harmonics:!1},bowed:!1,vibrato:!0}};let Rc=It[Ki.instrument]??It.violin;function ut(){return Rc}Object.values(It).map(t=>t.app.id);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,fr=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),os=new WeakMap;let No=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(fr&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=os.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&os.set(n,e))}return e}toString(){return this.cssText}};const fe=t=>new No(typeof t=="string"?t:t+"",void 0,pr),fn=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[s+1],t[0]);return new No(n,t,pr)},Lc=(t,e)=>{if(fr)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),r=Nn.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=n.cssText,t.appendChild(i)}},as=fr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return fe(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oc,defineProperty:Vc,getOwnPropertyDescriptor:Mc,getOwnPropertyNames:Uc,getOwnPropertySymbols:Fc,getPrototypeOf:zc}=Object,qe=globalThis,cs=qe.trustedTypes,Bc=cs?cs.emptyScript:"",Ai=qe.reactiveElementPolyfillSupport,Yt=(t,e)=>t,Bn={toAttribute(t,e){switch(e){case Boolean:t=t?Bc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},mr=(t,e)=>!Oc(t,e),ls={attribute:!0,type:String,converter:Bn,reflect:!1,useDefault:!1,hasChanged:mr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qe.litPropertyMetadata??(qe.litPropertyMetadata=new WeakMap);let vt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=ls){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,n);r!==void 0&&Vc(this.prototype,e,r)}}static getPropertyDescriptor(e,n,i){const{get:r,set:s}=Mc(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);s==null||s.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ls}static _$Ei(){if(this.hasOwnProperty(Yt("elementProperties")))return;const e=zc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yt("properties"))){const n=this.properties,i=[...Uc(n),...Fc(n)];for(const r of i)this.createProperty(r,n[r])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,r]of n)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const r=this._$Eu(n,i);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)n.unshift(as(r))}else e!==void 0&&n.push(as(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ET(e,n){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Bn).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,n){var s,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Bn;this._$Em=r;const l=c.fromAttribute(n,a.type);this[r]=l??((o=this._$Ej)==null?void 0:o.get(r))??l,this._$Em=null}}requestUpdate(e,n,i,r=!1,s){var o;if(e!==void 0){const a=this.constructor;if(r===!1&&(s=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??mr)(s,n)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:a}=o,c=this[s];a!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(n=>this._$ET(n,this[n]))),this._$EM()}updated(e){}firstUpdated(e){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[Yt("elementProperties")]=new Map,vt[Yt("finalized")]=new Map,Ai==null||Ai({ReactiveElement:vt}),(qe.reactiveElementVersions??(qe.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=globalThis,hs=t=>t,Hn=Jt.trustedTypes,us=Hn?Hn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Do="$lit$",Be=`lit$${Math.random().toFixed(9).slice(2)}$`,Co="?"+Be,Hc=`<${Co}>`,dt=document,tn=()=>dt.createComment(""),nn=t=>t===null||typeof t!="object"&&typeof t!="function",gr=Array.isArray,jc=t=>gr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",$i=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ds=/-->/g,fs=/>/g,tt=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ps=/'/g,ms=/"/g,xo=/^(?:script|style|textarea|title)$/i,Ro=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),P=Ro(1),M=Ro(2),At=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),gs=new WeakMap,st=dt.createTreeWalker(dt,129);function Lo(t,e){if(!gr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return us!==void 0?us.createHTML(e):e}const Wc=(t,e)=>{const n=t.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=Bt;for(let a=0;a<n;a++){const c=t[a];let l,y,b=-1,v=0;for(;v<c.length&&(o.lastIndex=v,y=o.exec(c),y!==null);)v=o.lastIndex,o===Bt?y[1]==="!--"?o=ds:y[1]!==void 0?o=fs:y[2]!==void 0?(xo.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=tt):y[3]!==void 0&&(o=tt):o===tt?y[0]===">"?(o=r??Bt,b=-1):y[1]===void 0?b=-2:(b=o.lastIndex-y[2].length,l=y[1],o=y[3]===void 0?tt:y[3]==='"'?ms:ps):o===ms||o===ps?o=tt:o===ds||o===fs?o=Bt:(o=tt,r=void 0);const S=o===tt&&t[a+1].startsWith("/>")?" ":"";s+=o===Bt?c+Hc:b>=0?(i.push(l),c.slice(0,b)+Do+c.slice(b)+Be+S):c+Be+(b===-2?a:S)}return[Lo(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let qi=class Oo{constructor({strings:e,_$litType$:n},i){let r;this.parts=[];let s=0,o=0;const a=e.length-1,c=this.parts,[l,y]=Wc(e,n);if(this.el=Oo.createElement(l,i),st.currentNode=this.el.content,n===2||n===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(r=st.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const b of r.getAttributeNames())if(b.endsWith(Do)){const v=y[o++],S=r.getAttribute(b).split(Be),A=/([.?@])?(.*)/.exec(v);c.push({type:1,index:s,name:A[2],strings:S,ctor:A[1]==="."?Kc:A[1]==="?"?qc:A[1]==="@"?Yc:fi}),r.removeAttribute(b)}else b.startsWith(Be)&&(c.push({type:6,index:s}),r.removeAttribute(b));if(xo.test(r.tagName)){const b=r.textContent.split(Be),v=b.length-1;if(v>0){r.textContent=Hn?Hn.emptyScript:"";for(let S=0;S<v;S++)r.append(b[S],tn()),st.nextNode(),c.push({type:2,index:++s});r.append(b[v],tn())}}}else if(r.nodeType===8)if(r.data===Co)c.push({type:2,index:s});else{let b=-1;for(;(b=r.data.indexOf(Be,b+1))!==-1;)c.push({type:7,index:s}),b+=Be.length-1}s++}}static createElement(e,n){const i=dt.createElement("template");return i.innerHTML=e,i}};function $t(t,e,n=t,i){var o,a;if(e===At)return e;let r=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const s=nn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),s===void 0?r=void 0:(r=new s(t),r._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=r:n._$Cl=r),r!==void 0&&(e=$t(t,r._$AS(t,e.values),r,i)),e}class Gc{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??dt).importNode(n,!0);st.currentNode=r;let s=st.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new yr(s,s.nextSibling,this,e):c.type===1?l=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(l=new Jc(s,this,e)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(s=st.nextNode(),o++)}return st.currentNode=dt,r}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}let yr=class Vo{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=$t(this,e,n),nn(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==At&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&nn(this._$AH)?this._$AA.nextSibling.data=e:this.T(dt.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=qi.createElement(Lo(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(n);else{const o=new Gc(r,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=gs.get(e.strings);return n===void 0&&gs.set(e.strings,n=new qi(e)),n}k(e){gr(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const s of e)r===n.length?n.push(i=new Vo(this.O(tn()),this.O(tn()),this,this.options)):i=n[r],i._$AI(s),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e!==this._$AB;){const r=hs(e).nextSibling;hs(e).remove(),e=r}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},fi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,n=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=$t(this,e,n,0),o=!nn(e)||e!==this._$AH&&e!==At,o&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=$t(this,a[i+c],n,c),l===At&&(l=this._$AH[c]),o||(o=!nn(l)||l!==this._$AH[c]),l===$?e=$:e!==$&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}o&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class Kc extends fi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class qc extends fi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}let Yc=class extends fi{constructor(e,n,i,r,s){super(e,n,i,r,s),this.type=5}_$AI(e,n=this){if((e=$t(this,e,n,0)??$)===At)return;const i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},Jc=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}};const Pi=Jt.litHtmlPolyfillSupport;Pi==null||Pi(qi,yr),(Jt.litHtmlVersions??(Jt.litHtmlVersions=[])).push("3.3.3");const Xc=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(n==null?void 0:n.renderBefore)??null;i._$litPart$=r=new yr(e.insertBefore(tn(),s),s,void 0,n??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis;class lt extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xc(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return At}}var Po;lt._$litElement$=!0,lt.finalized=!0,(Po=ct.litElementHydrateSupport)==null||Po.call(ct,{LitElement:lt});const Ni=ct.litElementPolyfillSupport;Ni==null||Ni({LitElement:lt});(ct.litElementVersions??(ct.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc={attribute:!0,type:String,converter:Bn,reflect:!1,hasChanged:mr},Qc=(t=Zc,e,n)=>{const{kind:i,metadata:r}=n;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(n.name,t),i==="accessor"){const{name:o}=n;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=n;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Y(t){return(e,n)=>typeof n=="object"?Qc(t,e,n):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(t){return Y({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ys=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wr(t,e){return(n,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(t))??null};if(e){const{get:o,set:a}=typeof i=="object"?n:r??(()=>{const c=Symbol();return{get(){return this[c]},set(l){this[c]=l}}})();return ys(n,i,{get(){let c=o.call(this);return c===void 0&&(c=s(this),(c!==null||this.hasUpdated)&&a.call(this,c)),c}})}return ys(n,i,{get(){return s(this)}})}}const el=()=>{};/**
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
 */const Mo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,y=s>>2,b=(s&3)<<4|a>>4;let v=(a&15)<<2|l>>6,S=l&63;c||(S=64,o||(v=64)),i.push(n[y],n[b],n[v],n[S])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const b=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||b==null)throw new nl;const v=s<<2|a>>4;if(i.push(v),l!==64){const S=a<<4&240|l>>2;if(i.push(S),b!==64){const A=l<<6&192|b;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const il=function(t){const e=Mo(t);return Uo.encodeByteArray(e,!0)},jn=function(t){return il(t).replace(/\./g,"")},Fo=function(t){try{return Uo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sl=()=>rl().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},al=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fo(t[1]);return e&&JSON.parse(e)},vr=()=>{try{return el()||sl()||ol()||al()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zo=t=>{var e,n;return(n=(e=vr())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},cl=t=>{const e=zo(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Bo=()=>{var t;return(t=vr())==null?void 0:t.config},Ho=t=>{var e;return(e=vr())==null?void 0:e[`_${t}`]};/**
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
 */class jo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function ll(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[jn(JSON.stringify(n)),jn(JSON.stringify(o)),a].join(".")}/**
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
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function ul(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pl(){const t=q();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ml(){try{return typeof indexedDB=="object"}catch{return!1}}function gl(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yl="FirebaseError";class Ue extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=yl,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?bl(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ue(r,a,i)}}function bl(t,e){try{let n=0,i="";for(;n<t.length;){const r=t.indexOf("{$",n);if(r===-1){i+=t.substring(n);break}const s=t.indexOf("}",r+2);if(s===-1){i+=t.substring(n);break}const o=t.substring(r+2,s),a=e[o];i+=t.substring(n,r)+(a!=null?String(a):`<${o}?>`),n=s+1}return i}catch{return t}}function wl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ft(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(bs(s)&&bs(o)){if(!ft(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function bs(t){return t!==null&&typeof t=="object"}/**
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
 */function mn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function jt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Wt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vl(t,e){const n=new kl(t,e);return n.subscribe.bind(n)}class kl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Tl(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Di),r.error===void 0&&(r.error=Di),r.complete===void 0&&(r.complete=Di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Di(){}/**
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
 */function F(t){return t&&t._delegate?t._delegate:t}/**
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
 */function gn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wo(t){return(await fetch(t,{credentials:"include"})).ok}class pt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nt="[DEFAULT]";/**
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
 */class _l{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new jo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sl(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:El(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function El(t){return t===nt?void 0:t}function Sl(t){return t.instantiationMode==="EAGER"}/**
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
 */class Il{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _l(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const Al={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},$l=N.INFO,Pl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Nl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Pl[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kr{constructor(e){this.name=e,this._logLevel=$l,this._logHandler=Nl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Al[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Dl=(t,e)=>e.some(n=>t instanceof n);let ws,vs;function Cl(){return ws||(ws=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return vs||(vs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Go=new WeakMap,Yi=new WeakMap,Ko=new WeakMap,Ci=new WeakMap,Tr=new WeakMap;function Rl(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ye(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Go.set(n,t)}).catch(()=>{}),Tr.set(e,t),e}function Ll(t){if(Yi.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yi.set(t,e)}let Ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ko.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ol(t){Ji=t(Ji)}function Vl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(xi(this),e,...n);return Ko.set(i,e.sort?e.sort():[e]),Ye(i)}:xl().includes(t)?function(...e){return t.apply(xi(this),e),Ye(Go.get(this))}:function(...e){return Ye(t.apply(xi(this),e))}}function Ml(t){return typeof t=="function"?Vl(t):(t instanceof IDBTransaction&&Ll(t),Dl(t,Cl())?new Proxy(t,Ji):t)}function Ye(t){if(t instanceof IDBRequest)return Rl(t);if(Ci.has(t))return Ci.get(t);const e=Ml(t);return e!==t&&(Ci.set(t,e),Tr.set(e,t)),e}const xi=t=>Tr.get(t);function Ul(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ye(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ye(o.result),c.oldVersion,c.newVersion,Ye(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Fl=["get","getKey","getAll","getAllKeys","count"],zl=["put","add","delete","clear"],Ri=new Map;function ks(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=zl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Fl.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Ri.set(e,s),s}Ol(t=>({...t,get:(e,n,i)=>ks(e,n)||t.get(e,n,i),has:(e,n)=>!!ks(e,n)||t.has(e,n)}));/**
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
 */class Bl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Hl(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xi="@firebase/app",Ts="0.16.5";/**
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
 */const Ve=new kr("@firebase/app"),jl="@firebase/app-compat",Wl="@firebase/analytics-compat",Gl="@firebase/analytics",Kl="@firebase/app-check-compat",ql="@firebase/app-check",Yl="@firebase/auth",Jl="@firebase/auth-compat",Xl="@firebase/crashlytics",Zl="@firebase/database",Ql="@firebase/data-connect",eh="@firebase/database-compat",th="@firebase/functions",nh="@firebase/functions-compat",ih="@firebase/installations",rh="@firebase/installations-compat",sh="@firebase/messaging",oh="@firebase/messaging-compat",ah="@firebase/performance",ch="@firebase/performance-compat",lh="@firebase/remote-config",hh="@firebase/remote-config-compat",uh="@firebase/storage",dh="@firebase/storage-compat",fh="@firebase/firestore",ph="@firebase/ai",mh="@firebase/firestore-compat",gh="firebase",yh="13.2.0";/**
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
 */const Zi="[DEFAULT]",bh={[Xi]:"fire-core",[jl]:"fire-core-compat",[Gl]:"fire-analytics",[Wl]:"fire-analytics-compat",[ql]:"fire-app-check",[Kl]:"fire-app-check-compat",[Yl]:"fire-auth",[Jl]:"fire-auth-compat",[Xl]:"fire-cls",[Zl]:"fire-rtdb",[Ql]:"fire-data-connect",[eh]:"fire-rtdb-compat",[th]:"fire-fn",[nh]:"fire-fn-compat",[ih]:"fire-iid",[rh]:"fire-iid-compat",[sh]:"fire-fcm",[oh]:"fire-fcm-compat",[ah]:"fire-perf",[ch]:"fire-perf-compat",[lh]:"fire-rc",[hh]:"fire-rc-compat",[uh]:"fire-gcs",[dh]:"fire-gcs-compat",[fh]:"fire-fst",[mh]:"fire-fst-compat",[ph]:"fire-vertex","fire-js":"fire-js",[gh]:"fire-js-all"};/**
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
 */const Wn=new Map,wh=new Map,Qi=new Map;function _s(t,e){try{t.container.addComponent(e)}catch(n){Ve.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(Qi.has(e))return Ve.debug(`There were multiple attempts to register component ${e}.`),!1;Qi.set(e,t);for(const n of Wn.values())_s(n,t);for(const n of wh.values())_s(n,t);return!0}function _r(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Z(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new pn("app","Firebase",vh);/**
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
 */class kh{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Ot=yh;function qo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Zi,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Ce.create("bad-app-name",{appName:String(r)});if(n||(n=Bo()),!n)throw Ce.create("no-options");const s=Wn.get(r);if(s)if(ft(n,s.options)){if(ft(i,s.config))return s;throw Ce.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(i)})}else throw Ce.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new Il(r);for(const c of Qi.values())o.addComponent(c);const a=new kh(n,i,o);return Wn.set(r,a),a}function Yo(t=Zi){const e=Wn.get(t);if(!e&&t===Zi&&Bo())return qo();if(!e)throw Ce.create("no-app",{appName:t});return e}function Je(t,e,n){let i=bh[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ve.warn(o.join(" "));return}Pt(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",_h=1,rn="firebase-heartbeat-store";let Li=null;function Jo(){return Li||(Li=Ul(Th,_h,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ce.create("idb-open",{originalErrorMessage:t.message})})),Li}async function Eh(t){try{const n=(await Jo()).transaction(rn),i=await n.objectStore(rn).get(Xo(t));return await n.done,i}catch(e){if(e instanceof Ue)Ve.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ve.warn(n.message)}}}async function Es(t,e){try{const i=(await Jo()).transaction(rn,"readwrite");await i.objectStore(rn).put(e,Xo(t)),await i.done}catch(n){if(n instanceof Ue)Ve.warn(n.message);else{const i=Ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ve.warn(i.message)}}}function Xo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sh=1024,Ih=30;class Ah{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ss();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Ih){const o=Nh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ve.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ss(),{heartbeatsToSend:i,unsentEntries:r}=$h(this._heartbeatsCache.heartbeats),s=jn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ve.warn(n),""}}}function Ss(){return new Date().toISOString().substring(0,10)}function $h(t,e=Sh){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Is(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Is(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ph{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ml()?gl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Eh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Es(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Is(t){return jn(JSON.stringify({version:2,heartbeats:t})).length}function Nh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Dh(t){Pt(new pt("platform-logger",e=>new Bl(e),"PRIVATE")),Pt(new pt("heartbeat",e=>new Ah(e),"PRIVATE")),Je(Xi,Ts,t),Je(Xi,Ts,"esm2020"),Je("fire-js","")}/**
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
 */Dh("");var Ch="firebase",xh="13.2.0";/**
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
 */Je(Ch,xh,"app");function Zo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=Zo,Qo=new pn("auth","Firebase",Zo());/**
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
 */const Gn=new kr("@firebase/auth");function Dn(t,...e){Gn.logLevel<=N.WARN&&Gn.warn(`Auth (${Ot}): ${t}`,...e)}function Cn(t,...e){Gn.logLevel<=N.ERROR&&Gn.error(`Auth (${Ot}): ${t}`,...e)}/**
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
 */function ae(t,...e){throw Er(t,...e)}function he(t,...e){return Er(t,...e)}function pi(t,e,n){const i={...Rh(),[e]:n};return new pn("auth","Firebase",i).create(e,{appName:t.name})}function ye(t){return pi(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lh(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ae(t,"argument-error"),pi(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Er(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qo.create(t,...e)}function _(t,e,...n){if(!t)throw Er(e,...n)}function xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cn(e),new Error(e)}function Me(t,e){t||xe(e)}/**
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
 */function er(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Oh(){return As()==="http:"||As()==="https:"}function As(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Vh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oh()||dl()||"connection"in navigator)?navigator.onLine:!0}function Mh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Me(n>e,"Short delay should be less than long delay!"),this.isMobile=hl()||fl()}get(){return Vh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sr(t,e){Me(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ea{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zh=new yn(3e4,6e4);function Te(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _e(t,e,n,i,r={}){return ta(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=mn({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...s};return ul()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&gn(t.emulatorConfig.host)&&(l.credentials="include"),ea.fetch()(await na(t,t.config.apiHost,n,a),l)})}async function ta(t,e,n){t._canInitEmulator=!1;const i={...Uh,...e};try{const r=new Hh(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _n(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _n(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _n(t,"user-disabled",o);const y=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw pi(t,y,l);ae(t,y)}}catch(r){if(r instanceof Ue)throw r;ae(t,"network-request-failed",{message:String(r)})}}async function Vt(t,e,n,i,r={}){const s=await _e(t,e,n,i,r);return"mfaPendingCredential"in s&&ae(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function na(t,e,n,i){const r=`${e}${n}?${i}`,s=t,o=s.config.emulator?Sr(t.config,r):`${t.config.apiScheme}://${r}`;return Fh.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Bh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(he(this.auth,"network-request-failed")),zh.get())})}}function _n(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=he(t,e,i);return r.customData._tokenResponse=n,r}function $s(t){return t!==void 0&&t.enterprise!==void 0}class jh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Wh(t,e){return _e(t,"GET","/v2/recaptchaConfig",Te(t,e))}/**
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
 */async function Gh(t,e){return _e(t,"POST","/v1/accounts:delete",e)}async function Kn(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kh(t,e=!1){const n=F(t),i=await n.getIdToken(e),r=Ir(i);_(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Xt(Oi(r.auth_time)),issuedAtTime:Xt(Oi(r.iat)),expirationTime:Xt(Oi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oi(t){return Number(t)*1e3}function Ir(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Cn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Fo(n);return r?JSON.parse(r):(Cn("Failed to decode base64 JWT payload"),null)}catch(r){return Cn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ps(t){const e=Ir(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw ia(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ia(t){return t instanceof Ue?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
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
 */class qh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xt(this.lastLoginAt),this.creationTime=Xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qn(t){var b;const e=t.auth,n=await t.getIdToken(),i=await Nt(t,Kn(e,{idToken:n}));_(i==null?void 0:i.users.length,e,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const s=(b=r.providerUserInfo)!=null&&b.length?ra(r.providerUserInfo):[],o=Jh(t.providerData,s),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,y={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new tr(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,y)}async function Yh(t){const e=F(t);await qn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ra(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Xh(t,e){const n=await ta(t,{},async()=>{const i=mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=await na(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:i};return t.emulatorConfig&&gn(t.emulatorConfig.host)&&(c.credentials="include"),ea.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zh(t,e){return _e(t,"POST","/v2/accounts:revokeToken",Te(t,e))}/**
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
 */class Et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ps(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_(e.length!==0,"internal-error");const n=Ps(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Xh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Et;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(_(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(_(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Et,this.toJSON())}_performRefresh(){return xe("not implemented")}}/**
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
 */function ze(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class le{constructor({uid:e,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kh(this,e)}reload(){return Yh(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new le({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await qn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Z(this.auth.app))return Promise.reject(ye(this.auth));const e=await this.getIdToken();return await Nt(this,Gh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:b,emailVerified:v,isAnonymous:S,providerData:A,stsTokenManager:O}=n;_(b&&O,e,"internal-error");const D=Et.fromJSON(this.name,O);_(typeof b=="string",e,"internal-error"),ze(i,e.name),ze(r,e.name),_(typeof v=="boolean",e,"internal-error"),_(typeof S=="boolean",e,"internal-error"),ze(s,e.name),ze(o,e.name),ze(a,e.name),ze(c,e.name),ze(l,e.name),ze(y,e.name);const J=new le({uid:b,auth:e,email:r,emailVerified:v,displayName:i,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:D,createdAt:l,lastLoginAt:y});return A&&Array.isArray(A)&&(J.providerData=A.map(re=>({...re}))),c&&(J._redirectEventId=c),J}static async _fromIdTokenResponse(e,n,i=!1){const r=new Et;r.updateFromServerResponse(n);const s=new le({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await qn(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];_(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ra(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Et;a.updateFromIdToken(i);const c=new le({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new tr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
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
 */const Ns=new Map;function Re(t){Me(t instanceof Function,"Expected a class definition");let e=Ns.get(t);return e?(Me(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ns.set(t,e),e)}/**
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
 */class sa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sa.type="NONE";const Ds=sa;/**
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
 */function xn(t,e,n){return`firebase:${t}:${e}:${n}`}class ht{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=xn(this.userKey,r.apiKey,s),this.fullPersistenceKey=xn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Kn(this.auth,{idToken:e}).catch(()=>{});return n?le._fromGetAccountInfoResponse(this.auth,n,e):null}return le._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new ht(Re(Ds),e,i);const r=(await Promise.all(n.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let s=r[0]||Re(Ds);const o=xn(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const y=await l._get(o);if(y){let b;if(typeof y=="string"){const v=await Kn(e,{idToken:y}).catch(()=>{});if(!v)break;b=await le._fromGetAccountInfoResponse(e,v,y)}else b=le._fromJSON(e,y);l!==s&&(a=b),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ht(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ht(s,e,i))}}/**
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
 */function Cs(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(la(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ua(e))return"Blackberry";if(da(e))return"Webos";if(aa(e))return"Safari";if((e.includes("chrome/")||ca(e))&&!e.includes("edge/"))return"Chrome";if(ha(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function oa(t=q()){return/firefox\//i.test(t)}function aa(t=q()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ca(t=q()){return/crios\//i.test(t)}function la(t=q()){return/iemobile/i.test(t)}function ha(t=q()){return/android/i.test(t)}function ua(t=q()){return/blackberry/i.test(t)}function da(t=q()){return/webos/i.test(t)}function Ar(t=q()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qh(t=q()){var e;return Ar(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eu(){return pl()&&document.documentMode===10}function fa(t=q()){return Ar(t)||ha(t)||da(t)||ua(t)||/windows phone/i.test(t)||la(t)}/**
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
 */function pa(t,e=[]){let n;switch(t){case"Browser":n=Cs(q());break;case"Worker":n=`${Cs(q())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ot}/${i}`}/**
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
 */class tu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function nu(t,e={}){return _e(t,"GET","/v2/passwordPolicy",Te(t,e))}/**
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
 */const iu=6;class ru{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??iu,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class su{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xs(this),this.idTokenSubscription=new xs(this),this.beforeStateQueue=new tu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Re(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted){try{this.persistenceManager=await ht.create(this,e)}catch(o){Dn(`Failed to initialize persistence: ${o}`),this.persistenceManager=await ht.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Dn(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kn(this,{idToken:e}),i=await le._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Z(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qn(e)}catch(n){if(ia(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Z(this.app))return Promise.reject(ye(this));const n=e?F(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Z(this.app)?Promise.reject(ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Z(this.app)?Promise.reject(ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Re(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nu(this),n=new ru(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zh(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Re(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await ht.create(this,[Re(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(c=>{if(!o)if(typeof n!="function"&&n.error)n.error(c);else if(i)i(c);else throw c}),typeof n=="function"){const c=e.addObserver(n,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),r=pi(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw r.customData={originalError:n},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Dn(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ee(t){return F(t)}class xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=vl(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ou(t){mi=t}function ma(t){return mi.loadJS(t)}function au(){return mi.recaptchaEnterpriseScript}function cu(){return mi.gapiScript}function lu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hu{constructor(){this.enterprise=new uu}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class uu{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const du="recaptcha-enterprise",ga="NO_RECAPTCHA",Rs="onFirebaseAuthREInstanceReady";class He{constructor(e){this.type=du,this.auth=Ee(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Wh(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new jh(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;$s(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(ga)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hu().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(async a=>{if(!n&&$s(window.grecaptcha)&&He.scriptInjectionDeferred)await He.scriptInjectionDeferred.promise,r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=au();c.length!==0&&(c+=a+`&onload=${Rs}`),He.scriptInjectionDeferred=new jo,window[Rs]=()=>{var l;(l=He.scriptInjectionDeferred)==null||l.resolve()},ma(c).then(()=>{var l;return(l=He.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}He.scriptInjectionDeferred=null;async function Ht(t,e,n,i=!1,r=!1){const s=new He(t);let o;if(r)o=ga;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yn(t,e,n,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ht(t,e,n,n==="getOobCode");return i(t,a)}else return i(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ht(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ht(t,e,n);return i(t,a).catch(async c=>{var l;if(((l=t._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const y=await Ht(t,e,n,!1,!0);return i(t,y)}return Promise.reject(c)})}else{const a=await Ht(t,e,n,!1,!0);return i(t,a)}else return Promise.reject(r+" provider is not supported.")}/**
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
 */function fu(t,e){const n=_r(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(ft(s,e??{}))return r;ae(r,"already-initialized")}return n.initialize({options:e})}function pu(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Re);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mu(t,e,n){const i=Ee(t);_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=ya(e),{host:o,port:a}=gu(e),c=a===null?"":`:${a}`,l={url:`${s}//${o}${c}/`},y=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){_(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_(ft(l,i.config.emulator)&&ft(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,gn(o)?Wo(`${s}//${o}${c}`):r||yu()}function ya(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gu(t){const e=ya(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ls(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ls(o)}}}function Ls(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $r{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xe("not implemented")}_getIdTokenResponse(e){return xe("not implemented")}_linkToIdToken(e,n){return xe("not implemented")}_getReauthenticationResolver(e){return xe("not implemented")}}async function bu(t,e){return _e(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wu(t,e){return Vt(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}async function ba(t,e){return _e(t,"POST","/v1/accounts:sendOobCode",Te(t,e))}async function vu(t,e){return ba(t,e)}async function ku(t,e){return ba(t,e)}/**
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
 */async function Tu(t,e){return Vt(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}async function _u(t,e){return Vt(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}/**
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
 */class sn extends $r{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new sn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new sn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yn(e,n,"signInWithPassword",wu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Tu(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yn(e,i,"signUpPassword",bu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _u(e,{idToken:n,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function St(t,e){return Vt(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}/**
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
 */const Eu="http://localhost";class mt extends $r{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ae("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const o=new mt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return St(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,St(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,St(e,n)}buildRequest(){const e={requestUri:Eu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mn(n)}return e}}/**
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
 */function Su(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Iu(t){const e=jt(Wt(t)).link,n=e?jt(Wt(e)).deep_link_id:null,i=jt(Wt(t)).deep_link_id;return(i?jt(Wt(i)).link:null)||i||n||e||t}class Pr{constructor(e){const n=jt(Wt(e)),i=n.apiKey??null,r=n.oobCode??null,s=Su(n.mode??null);_(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Iu(e);try{return new Pr(n)}catch{return null}}}/**
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
 */class Mt{constructor(){this.providerId=Mt.PROVIDER_ID}static credential(e,n){return sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Pr.parseLink(n);return _(i,"argument-error"),sn._fromEmailAndCode(e,i.code,i.tenantId)}}Mt.PROVIDER_ID="password";Mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bn extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class je extends bn{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
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
 */class Pe extends bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Pe.credential(n,i)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
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
 */class We extends bn{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.GITHUB_SIGN_IN_METHOD="github.com";We.PROVIDER_ID="github.com";/**
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
 */class Ge extends bn{constructor(){super("twitter.com")}static credential(e,n){return mt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Ge.credential(n,i)}catch{return null}}}Ge.TWITTER_SIGN_IN_METHOD="twitter.com";Ge.PROVIDER_ID="twitter.com";/**
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
 */async function Au(t,e){return Vt(t,"POST","/v1/accounts:signUp",Te(t,e))}/**
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
 */class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await le._fromIdTokenResponse(e,i,r),o=Os(i);return new Xe({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Os(i);return new Xe({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Os(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jn extends Ue{constructor(e,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Jn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Jn(e,n,i,r)}}function wa(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jn._fromErrorAndOperation(t,s,e,i):s})}async function $u(t,e,n=!1){const i=await Nt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xe._forOperation(t,"link",i)}/**
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
 */async function Pu(t,e,n=!1){const{auth:i}=t;if(Z(i.app))return Promise.reject(ye(i));const r="reauthenticate";try{const s=await Nt(t,wa(i,r,e,t),n);_(s.idToken,i,"internal-error");const o=Ir(s.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),Xe._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ae(i,"user-mismatch"),s}}/**
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
 */async function va(t,e,n=!1){if(Z(t.app))return Promise.reject(ye(t));const i="signIn",r=await wa(t,i,e),s=await Xe._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Nu(t,e){return va(Ee(t),e)}/**
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
 */async function Du(t,e){return Vt(t,"POST","/v1/accounts:signInWithCustomToken",Te(t,e))}/**
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
 */async function Cu(t,e){if(Z(t.app))return Promise.reject(ye(t));const n=Ee(t),i=await Du(n,{token:e,returnSecureToken:!0}),r=await Xe._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */function ka(t,e,n){var i;_(((i=n.url)==null?void 0:i.length)>0,t,"invalid-continue-uri"),_(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),_(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ta(t){const e=Ee(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xu(t,e,n){const i=Ee(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ka(i,r,n),await Yn(i,r,"getOobCode",ku,"EMAIL_PASSWORD_PROVIDER")}async function Ru(t,e,n){if(Z(t.app))return Promise.reject(ye(t));const i=Ee(t),o=await Yn(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Au,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ta(t),c}),a=await Xe._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Lu(t,e,n){return Z(t.app)?Promise.reject(ye(t)):Nu(F(t),Mt.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ta(t),i})}async function Ou(t,e){const n=F(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ka(n.auth,r,e);const{email:s}=await vu(n.auth,r);s!==t.email&&await t.reload()}/**
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
 */async function Vu(t,e){return _e(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Mu(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const r=F(t),o={idToken:await r.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await Nt(r,Vu(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Uu(t,e,n,i){return F(t).onIdTokenChanged(e,n,i)}function Fu(t,e,n){return F(t).beforeAuthStateChanged(e,n)}function _a(t,e,n,i){return F(t).onAuthStateChanged(e,n,i)}function zu(t){return F(t).signOut()}const Xn="__sak";/**
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
 */class Ea{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xn,"1"),this.storage.removeItem(Xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Bu=1e3,Hu=10;class Sa extends Ea{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);eu()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Hu):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Bu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sa.type="LOCAL";const ju=Sa;/**
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
 */class Ia extends Ea{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ia.type="SESSION";const Aa=Ia;/**
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
 */function Wu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new gi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Wu(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gi.receivers=[];/**
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
 */function Dr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Gu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Dr("",20);r.port1.start();const y=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(b){const v=b;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(y),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(y),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function be(){return window}function Ku(t){be().location.href=t}/**
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
 */function $a(){return typeof be().WorkerGlobalScope<"u"&&typeof be().importScripts=="function"}async function qu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yu(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ju(){return $a()?self:null}/**
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
 */const Pa="firebaseLocalStorageDb",Xu=1,Zn="firebaseLocalStorage",Na="fbase_key";class wn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yi(t,e){return t.transaction([Zn],e?"readwrite":"readonly").objectStore(Zn)}function Zu(){const t=indexedDB.deleteDatabase(Pa);return new wn(t).toPromise()}function Da(){const t=indexedDB.open(Pa,Xu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Zn,{keyPath:Na})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Zn)?e(i):(i.close(),await Zu(),e(await Da()))})})}async function Vs(t,e,n){const i=yi(t,!0).put({[Na]:e,value:n});return new wn(i).toPromise()}async function Qu(t,e){const n=yi(t,!1).get(e),i=await new wn(n).toPromise();return i===void 0?null:i.value}function Ms(t,e){const n=yi(t,!0).delete(e);return new wn(n).toPromise()}const ed=800,td=3;class Ca{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Da(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>td)throw i;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return $a()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gi._getInstance(Ju()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await qu(),!this.activeServiceWorker)return;this.sender=new Gu(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Vs(e,Xn,"1"),await Ms(e,Xn)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vs(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Qu(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ms(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const s=yi(r,!1).getAll();return new wn(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}catch(e){return this.isClosing||Dn(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ed)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e).catch(()=>{})),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Ca.type="LOCAL";const nd=Ca;new yn(3e4,6e4);/**
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
 */function xa(t,e){return e?Re(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cr extends $r{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return St(e,this._buildIdpRequest())}_linkToIdToken(e,n){return St(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return St(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function id(t){return va(t.auth,new Cr(t),t.bypassAuthState)}function rd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Pu(n,new Cr(t),t.bypassAuthState)}async function sd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),$u(n,new Cr(t),t.bypassAuthState)}/**
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
 */class Ra{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise||(await this.onExecution(),!this.pendingPromise))return;this.eventManager.registerConsumer(this)}catch(i){this.pendingPromise&&this.reject(i)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return id;case"linkViaPopup":case"linkViaRedirect":return sd;case"reauthViaPopup":case"reauthViaRedirect":return rd;default:ae(this.auth,"internal-error")}}resolve(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const od=new yn(2e3,1e4);async function ad(t,e,n){if(Z(t.app))return Promise.reject(he(t,"operation-not-supported-in-this-environment"));const i=Ee(t);Lh(t,e,Nr);const r=xa(i,n);return new ot(i,"signInViaPopup",e,r).executeNotNull()}class ot extends Ra{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Me(this.filter.length===1,"Popup operations only handle one event");const e=Dr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,od.get())};e()}}ot.currentPopupAction=null;/**
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
 */const cd="pendingRedirect",Rn=new Map;class ld extends Ra{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Rn.get(this.auth._key());if(!e){try{const i=await hd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Rn.set(this.auth._key(),e)}return this.bypassAuthState||Rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hd(t,e){const n=fd(e),i=dd(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function ud(t,e){Rn.set(t._key(),e)}function dd(t){return Re(t._redirectPersistence)}function fd(t){return xn(cd,t.config.apiKey,t.name)}async function pd(t,e,n=!1){if(Z(t.app))return Promise.reject(ye(t));const i=Ee(t),r=xa(i,e),o=await new ld(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const md=10*60*1e3;class gd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!La(e)){const r=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(he(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=md&&this.cachedEventUids.clear(),this.cachedEventUids.has(Us(e))}saveEventToCache(e){this.cachedEventUids.add(Us(e)),this.lastProcessedEventTime=Date.now()}}function Us(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function La({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return La(t);default:return!1}}/**
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
 */async function bd(t,e={}){return _e(t,"GET","/v1/projects",e)}/**
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
 */const wd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vd=/^https?/;async function kd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bd(t);for(const n of e)try{if(Td(n))return}catch{}ae(t,"unauthorized-domain")}function Td(t){const e=er(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!vd.test(n))return!1;if(wd.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const _d=new yn(3e4,6e4);function Fs(){const t=be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ed(t){return new Promise((e,n)=>{var r,s,o;function i(){Fs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fs(),n(he(t,"network-request-failed"))},timeout:_d.get()})}if((s=(r=be().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=be().gapi)!=null&&o.load)i();else{const a=lu("iframefcb");return be()[a]=()=>{gapi.load?i():n(he(t,"network-request-failed"))},ma(`${cu()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ln=null,e})}let Ln=null;function Sd(t){return Ln=Ln||Ed(t),Ln}/**
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
 */const Id=new yn(5e3,15e3),Ad="__/auth/iframe",$d="emulator/auth/iframe",Pd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dd(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sr(e,$d):`https://${t.config.authDomain}/${Ad}`,i={apiKey:e.apiKey,appName:t.name,v:Ot},r=Nd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${mn(i).slice(1)}`}async function Cd(t){const e=await Sd(t),n=be().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:Dd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pd,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=he(t,"network-request-failed"),a=be().setTimeout(()=>{s(o)},Id.get());function c(){be().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const xd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rd=500,Ld=600,Od="_blank",Vd="http://localhost";class zs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Md(t,e,n,i=Rd,r=Ld){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c={...xd,width:i.toString(),height:r.toString(),top:s,left:o},l=q().toLowerCase();n&&(a=ca(l)?Od:n),oa(l)&&(e=e||Vd,c.scrollbars="yes");const y=Object.entries(c).reduce((v,[S,A])=>`${v}${S}=${A},`,"");if(Qh(l)&&a!=="_self")return Ud(e||"",a),new zs(null);const b=window.open(e||"",a,y);_(b,t,"popup-blocked");try{b.focus()}catch{}return new zs(b)}function Ud(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Fd="__/auth/handler",zd="emulator/auth/handler",Bd=encodeURIComponent("fac");async function Bs(t,e,n,i,r,s){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ot,eventId:r};if(e instanceof Nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,b]of Object.entries(s||{}))o[y]=b}if(e instanceof bn){const y=e.getScopes().filter(b=>b!=="");y.length>0&&(o.scopes=y.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const y of Object.keys(a))a[y]===void 0&&delete a[y];const c=await t._getAppCheckToken(),l=c?`#${Bd}=${encodeURIComponent(c)}`:"";return`${Hd(t)}?${mn(a).slice(1)}${l}`}function Hd({config:t}){return t.emulator?Sr(t,zd):`https://${t.authDomain}/${Fd}`}/**
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
 */const Vi="webStorageSupport";class jd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aa,this._completeRedirectFn=pd,this._overrideRedirectResult=ud}async _openPopup(e,n,i,r){var o;Me((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Bs(e,n,i,er(),r);return Md(e,s,Dr())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Bs(e,n,i,er(),r);return Ku(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Me(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Cd(e),i=new gd(e);return n.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vi,{type:Vi},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[Vi];s!==void 0&&n(!!s),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fa()||aa()||Ar()}}const Wd=jd;var Hs="@firebase/auth",js="1.13.9";/**
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
 */class Gd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Kd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qd(t){Pt(new pt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(t)},l=new su(i,r,s,c);return pu(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Pt(new pt("auth-internal",e=>{const n=Ee(e.getProvider("auth").getImmediate());return(i=>new Gd(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Hs,js,Kd(t)),Je(Hs,js,"esm2020")}/**
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
 */const Yd=5*60,Jd=Ho("authIdTokenMaxAge")||Yd;let Ws=null;const Xd=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Jd)return;const r=n==null?void 0:n.token;Ws!==r&&(Ws=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Zd(t=Yo()){const e=_r(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fu(t,{popupRedirectResolver:Wd,persistence:[nd,ju,Aa]}),i=Ho("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=Xd(s.toString());Fu(n,o,()=>o(n.currentUser)),Uu(n,a=>o(a))}}const r=zo("auth");return r&&mu(n,`http://${r}`),n}function Qd(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ou({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=he("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Qd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qd("Browser");var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oa;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,h){function d(){}d.prototype=h.prototype,f.F=h.prototype,f.prototype=new d,f.prototype.constructor=f,f.D=function(m,p,g){for(var u=Array(arguments.length-2),et=2;et<arguments.length;et++)u[et-2]=arguments[et];return h.prototype[p].apply(m,u)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(f,h,d){d||(d=0);const m=Array(16);if(typeof h=="string")for(var p=0;p<16;++p)m[p]=h.charCodeAt(d++)|h.charCodeAt(d++)<<8|h.charCodeAt(d++)<<16|h.charCodeAt(d++)<<24;else for(p=0;p<16;++p)m[p]=h[d++]|h[d++]<<8|h[d++]<<16|h[d++]<<24;h=f.g[0],d=f.g[1],p=f.g[2];let g=f.g[3],u;u=h+(g^d&(p^g))+m[0]+3614090360&4294967295,h=d+(u<<7&4294967295|u>>>25),u=g+(p^h&(d^p))+m[1]+3905402710&4294967295,g=h+(u<<12&4294967295|u>>>20),u=p+(d^g&(h^d))+m[2]+606105819&4294967295,p=g+(u<<17&4294967295|u>>>15),u=d+(h^p&(g^h))+m[3]+3250441966&4294967295,d=p+(u<<22&4294967295|u>>>10),u=h+(g^d&(p^g))+m[4]+4118548399&4294967295,h=d+(u<<7&4294967295|u>>>25),u=g+(p^h&(d^p))+m[5]+1200080426&4294967295,g=h+(u<<12&4294967295|u>>>20),u=p+(d^g&(h^d))+m[6]+2821735955&4294967295,p=g+(u<<17&4294967295|u>>>15),u=d+(h^p&(g^h))+m[7]+4249261313&4294967295,d=p+(u<<22&4294967295|u>>>10),u=h+(g^d&(p^g))+m[8]+1770035416&4294967295,h=d+(u<<7&4294967295|u>>>25),u=g+(p^h&(d^p))+m[9]+2336552879&4294967295,g=h+(u<<12&4294967295|u>>>20),u=p+(d^g&(h^d))+m[10]+4294925233&4294967295,p=g+(u<<17&4294967295|u>>>15),u=d+(h^p&(g^h))+m[11]+2304563134&4294967295,d=p+(u<<22&4294967295|u>>>10),u=h+(g^d&(p^g))+m[12]+1804603682&4294967295,h=d+(u<<7&4294967295|u>>>25),u=g+(p^h&(d^p))+m[13]+4254626195&4294967295,g=h+(u<<12&4294967295|u>>>20),u=p+(d^g&(h^d))+m[14]+2792965006&4294967295,p=g+(u<<17&4294967295|u>>>15),u=d+(h^p&(g^h))+m[15]+1236535329&4294967295,d=p+(u<<22&4294967295|u>>>10),u=h+(p^g&(d^p))+m[1]+4129170786&4294967295,h=d+(u<<5&4294967295|u>>>27),u=g+(d^p&(h^d))+m[6]+3225465664&4294967295,g=h+(u<<9&4294967295|u>>>23),u=p+(h^d&(g^h))+m[11]+643717713&4294967295,p=g+(u<<14&4294967295|u>>>18),u=d+(g^h&(p^g))+m[0]+3921069994&4294967295,d=p+(u<<20&4294967295|u>>>12),u=h+(p^g&(d^p))+m[5]+3593408605&4294967295,h=d+(u<<5&4294967295|u>>>27),u=g+(d^p&(h^d))+m[10]+38016083&4294967295,g=h+(u<<9&4294967295|u>>>23),u=p+(h^d&(g^h))+m[15]+3634488961&4294967295,p=g+(u<<14&4294967295|u>>>18),u=d+(g^h&(p^g))+m[4]+3889429448&4294967295,d=p+(u<<20&4294967295|u>>>12),u=h+(p^g&(d^p))+m[9]+568446438&4294967295,h=d+(u<<5&4294967295|u>>>27),u=g+(d^p&(h^d))+m[14]+3275163606&4294967295,g=h+(u<<9&4294967295|u>>>23),u=p+(h^d&(g^h))+m[3]+4107603335&4294967295,p=g+(u<<14&4294967295|u>>>18),u=d+(g^h&(p^g))+m[8]+1163531501&4294967295,d=p+(u<<20&4294967295|u>>>12),u=h+(p^g&(d^p))+m[13]+2850285829&4294967295,h=d+(u<<5&4294967295|u>>>27),u=g+(d^p&(h^d))+m[2]+4243563512&4294967295,g=h+(u<<9&4294967295|u>>>23),u=p+(h^d&(g^h))+m[7]+1735328473&4294967295,p=g+(u<<14&4294967295|u>>>18),u=d+(g^h&(p^g))+m[12]+2368359562&4294967295,d=p+(u<<20&4294967295|u>>>12),u=h+(d^p^g)+m[5]+4294588738&4294967295,h=d+(u<<4&4294967295|u>>>28),u=g+(h^d^p)+m[8]+2272392833&4294967295,g=h+(u<<11&4294967295|u>>>21),u=p+(g^h^d)+m[11]+1839030562&4294967295,p=g+(u<<16&4294967295|u>>>16),u=d+(p^g^h)+m[14]+4259657740&4294967295,d=p+(u<<23&4294967295|u>>>9),u=h+(d^p^g)+m[1]+2763975236&4294967295,h=d+(u<<4&4294967295|u>>>28),u=g+(h^d^p)+m[4]+1272893353&4294967295,g=h+(u<<11&4294967295|u>>>21),u=p+(g^h^d)+m[7]+4139469664&4294967295,p=g+(u<<16&4294967295|u>>>16),u=d+(p^g^h)+m[10]+3200236656&4294967295,d=p+(u<<23&4294967295|u>>>9),u=h+(d^p^g)+m[13]+681279174&4294967295,h=d+(u<<4&4294967295|u>>>28),u=g+(h^d^p)+m[0]+3936430074&4294967295,g=h+(u<<11&4294967295|u>>>21),u=p+(g^h^d)+m[3]+3572445317&4294967295,p=g+(u<<16&4294967295|u>>>16),u=d+(p^g^h)+m[6]+76029189&4294967295,d=p+(u<<23&4294967295|u>>>9),u=h+(d^p^g)+m[9]+3654602809&4294967295,h=d+(u<<4&4294967295|u>>>28),u=g+(h^d^p)+m[12]+3873151461&4294967295,g=h+(u<<11&4294967295|u>>>21),u=p+(g^h^d)+m[15]+530742520&4294967295,p=g+(u<<16&4294967295|u>>>16),u=d+(p^g^h)+m[2]+3299628645&4294967295,d=p+(u<<23&4294967295|u>>>9),u=h+(p^(d|~g))+m[0]+4096336452&4294967295,h=d+(u<<6&4294967295|u>>>26),u=g+(d^(h|~p))+m[7]+1126891415&4294967295,g=h+(u<<10&4294967295|u>>>22),u=p+(h^(g|~d))+m[14]+2878612391&4294967295,p=g+(u<<15&4294967295|u>>>17),u=d+(g^(p|~h))+m[5]+4237533241&4294967295,d=p+(u<<21&4294967295|u>>>11),u=h+(p^(d|~g))+m[12]+1700485571&4294967295,h=d+(u<<6&4294967295|u>>>26),u=g+(d^(h|~p))+m[3]+2399980690&4294967295,g=h+(u<<10&4294967295|u>>>22),u=p+(h^(g|~d))+m[10]+4293915773&4294967295,p=g+(u<<15&4294967295|u>>>17),u=d+(g^(p|~h))+m[1]+2240044497&4294967295,d=p+(u<<21&4294967295|u>>>11),u=h+(p^(d|~g))+m[8]+1873313359&4294967295,h=d+(u<<6&4294967295|u>>>26),u=g+(d^(h|~p))+m[15]+4264355552&4294967295,g=h+(u<<10&4294967295|u>>>22),u=p+(h^(g|~d))+m[6]+2734768916&4294967295,p=g+(u<<15&4294967295|u>>>17),u=d+(g^(p|~h))+m[13]+1309151649&4294967295,d=p+(u<<21&4294967295|u>>>11),u=h+(p^(d|~g))+m[4]+4149444226&4294967295,h=d+(u<<6&4294967295|u>>>26),u=g+(d^(h|~p))+m[11]+3174756917&4294967295,g=h+(u<<10&4294967295|u>>>22),u=p+(h^(g|~d))+m[2]+718787259&4294967295,p=g+(u<<15&4294967295|u>>>17),u=d+(g^(p|~h))+m[9]+3951481745&4294967295,f.g[0]=f.g[0]+h&4294967295,f.g[1]=f.g[1]+(p+(u<<21&4294967295|u>>>11))&4294967295,f.g[2]=f.g[2]+p&4294967295,f.g[3]=f.g[3]+g&4294967295}i.prototype.v=function(f,h){h===void 0&&(h=f.length);const d=h-this.blockSize,m=this.C;let p=this.h,g=0;for(;g<h;){if(p==0)for(;g<=d;)r(this,f,g),g+=this.blockSize;if(typeof f=="string"){for(;g<h;)if(m[p++]=f.charCodeAt(g++),p==this.blockSize){r(this,m),p=0;break}}else for(;g<h;)if(m[p++]=f[g++],p==this.blockSize){r(this,m),p=0;break}}this.h=p,this.o+=h},i.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var h=1;h<f.length-8;++h)f[h]=0;h=this.o*8;for(var d=f.length-8;d<f.length;++d)f[d]=h&255,h/=256;for(this.v(f),f=Array(16),h=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)f[h++]=this.g[d]>>>m&255;return f};function s(f,h){var d=a;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=h(f)}function o(f,h){this.h=h;const d=[];let m=!0;for(let p=f.length-1;p>=0;p--){const g=f[p]|0;m&&g==h||(d[p]=g,m=!1)}this.g=d}var a={};function c(f){return-128<=f&&f<128?s(f,function(h){return new o([h|0],h<0?-1:0)}):new o([f|0],f<0?-1:0)}function l(f){if(isNaN(f)||!isFinite(f))return b;if(f<0)return D(l(-f));const h=[];let d=1;for(let m=0;f>=d;m++)h[m]=f/d|0,d*=4294967296;return new o(h,0)}function y(f,h){if(f.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(f.charAt(0)=="-")return D(y(f.substring(1),h));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=l(Math.pow(h,8));let m=b;for(let g=0;g<f.length;g+=8){var p=Math.min(8,f.length-g);const u=parseInt(f.substring(g,g+p),h);p<8?(p=l(Math.pow(h,p)),m=m.j(p).add(l(u))):(m=m.j(d),m=m.add(l(u)))}return m}var b=c(0),v=c(1),S=c(16777216);t=o.prototype,t.m=function(){if(O(this))return-D(this).m();let f=0,h=1;for(let d=0;d<this.g.length;d++){const m=this.i(d);f+=(m>=0?m:4294967296+m)*h,h*=4294967296}return f},t.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(A(this))return"0";if(O(this))return"-"+D(this).toString(f);const h=l(Math.pow(f,6));var d=this;let m="";for(;;){const p=Qe(d,h).g;d=J(d,p.j(h));let g=((d.g.length>0?d.g[0]:d.h)>>>0).toString(f);if(d=p,A(d))return g+m;for(;g.length<6;)g="0"+g;m=g+m}},t.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function A(f){if(f.h!=0)return!1;for(let h=0;h<f.g.length;h++)if(f.g[h]!=0)return!1;return!0}function O(f){return f.h==-1}t.l=function(f){return f=J(this,f),O(f)?-1:A(f)?0:1};function D(f){const h=f.g.length,d=[];for(let m=0;m<h;m++)d[m]=~f.g[m];return new o(d,~f.h).add(v)}t.abs=function(){return O(this)?D(this):this},t.add=function(f){const h=Math.max(this.g.length,f.g.length),d=[];let m=0;for(let p=0;p<=h;p++){let g=m+(this.i(p)&65535)+(f.i(p)&65535),u=(g>>>16)+(this.i(p)>>>16)+(f.i(p)>>>16);m=u>>>16,g&=65535,u&=65535,d[p]=u<<16|g}return new o(d,d[d.length-1]&-2147483648?-1:0)};function J(f,h){return f.add(D(h))}t.j=function(f){if(A(this)||A(f))return b;if(O(this))return O(f)?D(this).j(D(f)):D(D(this).j(f));if(O(f))return D(this.j(D(f)));if(this.l(S)<0&&f.l(S)<0)return l(this.m()*f.m());const h=this.g.length+f.g.length,d=[];for(var m=0;m<2*h;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<f.g.length;p++){const g=this.i(m)>>>16,u=this.i(m)&65535,et=f.i(p)>>>16,ss=f.i(p)&65535;d[2*m+2*p]+=u*ss,re(d,2*m+2*p),d[2*m+2*p+1]+=g*ss,re(d,2*m+2*p+1),d[2*m+2*p+1]+=u*et,re(d,2*m+2*p+1),d[2*m+2*p+2]+=g*et,re(d,2*m+2*p+2)}for(f=0;f<h;f++)d[f]=d[2*f+1]<<16|d[2*f];for(f=h;f<2*h;f++)d[f]=0;return new o(d,0)};function re(f,h){for(;(f[h]&65535)!=f[h];)f[h+1]+=f[h]>>>16,f[h]&=65535,h++}function Fe(f,h){this.g=f,this.h=h}function Qe(f,h){if(A(h))throw Error("division by zero");if(A(f))return new Fe(b,b);if(O(f))return h=Qe(D(f),h),new Fe(D(h.g),D(h.h));if(O(h))return h=Qe(f,D(h)),new Fe(D(h.g),h.h);if(f.g.length>30){if(O(f)||O(h))throw Error("slowDivide_ only works with positive integers.");for(var d=v,m=h;m.l(f)<=0;)d=Ft(d),m=Ft(m);var p=Se(d,1),g=Se(m,1);for(m=Se(m,2),d=Se(d,2);!A(m);){var u=g.add(m);u.l(f)<=0&&(p=p.add(d),g=u),m=Se(m,1),d=Se(d,1)}return h=J(f,p.j(h)),new Fe(p,h)}for(p=b;f.l(h)>=0;){for(d=Math.max(1,Math.floor(f.m()/h.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),g=l(d),u=g.j(h);O(u)||u.l(f)>0;)d-=m,g=l(d),u=g.j(h);A(g)&&(g=v),p=p.add(g),f=J(f,u)}return new Fe(p,f)}t.B=function(f){return Qe(this,f).h},t.and=function(f){const h=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<h;m++)d[m]=this.i(m)&f.i(m);return new o(d,this.h&f.h)},t.or=function(f){const h=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<h;m++)d[m]=this.i(m)|f.i(m);return new o(d,this.h|f.h)},t.xor=function(f){const h=Math.max(this.g.length,f.g.length),d=[];for(let m=0;m<h;m++)d[m]=this.i(m)^f.i(m);return new o(d,this.h^f.h)};function Ft(f){const h=f.g.length+1,d=[];for(let m=0;m<h;m++)d[m]=f.i(m)<<1|f.i(m-1)>>>31;return new o(d,f.h)}function Se(f,h){const d=h>>5;h%=32;const m=f.g.length-d,p=[];for(let g=0;g<m;g++)p[g]=h>0?f.i(g+d)>>>h|f.i(g+d+1)<<32-h:f.i(g+d);return new o(p,f.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=y,Oa=o}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});function H(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
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
 */let Ut="13.2.0";function ef(t){Ut=t}/**
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
 */const Dt=new kr("@firebase/firestore");function gt(t,...e){if(Dt.logLevel<=N.DEBUG){const n=e.map(xr);Dt.debug(`Firestore (${Ut}): ${t}`,...n)}}function bi(t,...e){if(Dt.logLevel<=N.ERROR){const n=e.map(xr);Dt.error(`Firestore (${Ut}): ${t}`,...n)}}function Va(t,...e){if(Dt.logLevel<=N.WARN){const n=e.map(xr);Dt.warn(`Firestore (${Ut}): ${t}`,...n)}}function xr(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function R(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Ma(t,i,n)}function Ma(t,e,n){let i=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw bi(i),new Error(i)}function ne(t,e,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,t||Ma(e,r,i)}function Ua(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Ue{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fa{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class nf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rf{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ne(typeof e.accessToken=="string",42297,{Z:e}),new Fa(e.accessToken,new X(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class sf{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=X.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class of{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new sf(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ks{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class af{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,Z(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit(i=>{this.appCheck=i})}getToken(){return this.oe?Promise.resolve(new Ks(this.oe)):this.appCheck?this.appCheck.getToken().then(e=>e?(ne(typeof e.token=="string",3470,{tokenResult:e}),new Ks(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class cf{constructor(e,n,i,r,s,o,a,c,l,y,b,v,S){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=y,this.apiKey=b,this._customHeaders=v,this.grpcFlowControlWindow=S}}const nr="(default)";class on{constructor(e,n){this.projectId=e,this.database=n||nr}static empty(){return new on("","")}get isDefaultDatabase(){return this.database===nr}isEqual(e){return e instanceof on&&e.projectId===this.projectId&&e.database===this.database}}function lf(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new on(t.options.projectId,e)}/**
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
 */function hf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=hf(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%62))}return i}}function ve(t,e){return t<e?-1:t>e?1:0}function Rr(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const r=t.charAt(i),s=e.charAt(i);if(r!==s)return Mi(r)===Mi(s)?ve(r,s):Mi(r)?1:-1}return ve(t.length,e.length)}const df=55296,ff=57343;function Mi(t){const e=t.charCodeAt(0);return e>=df&&e<=ff}function za(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
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
 */const qs="__name__";class pe{constructor(e,n,i){n===void 0?n=0:n>e.length&&R(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&R(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return pe.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pe?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=pe.compareSegments(e.get(r),n.get(r));if(s!==0)return s}return ve(e.length,n.length)}static compareSegments(e,n){const i=pe.isNumericId(e),r=pe.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?pe.extractNumericId(e).compare(pe.extractNumericId(n)):Rr(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Oa.fromString(e.substring(4,e.length-2))}}class B extends pe{construct(e,n,i){return new B(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new B(n)}static emptyPath(){return new B([])}}const pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let an=class kt extends pe{construct(e,n,i){return new kt(e,n,i)}static isValidIdentifier(e){return pf.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qs}static keyField(){return new kt([qs])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}};/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(B.fromString(e))}static fromName(e){return new te(B.fromString(e).popFirst(5))}static empty(){return new te(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&B.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return B.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new B(e.slice()))}}/**
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
 */function mf(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ys(t){if(!te.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ba(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Lr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":R(12329,{type:typeof t})}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lr(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ha(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let En=null;function gf(){return En===null?En=function(){return 268435456+Math.round(2147483648*Math.random())}():En++,"0x"+En.toString(16)}/**
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
 */function yf(t){return t==null}function Qn(t){return t===0&&1/t==-1/0}/**
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
 */const Ui="RestConnection",bf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wf{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${r}`,this.ce=this.databaseId.database===nr?`project_id=${i}`:`project_id=${i}&database_id=${r}`}le(e,n,i,r,s){const o=gf(),a=this.fe(e,n.toUriEncodedString());gt(Ui,`Sending RPC '${e}' ${o}:`,a,i);const c={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(c,r,s);const{host:l}=new URL(a),y=gn(l);return this.de(e,a,c,i,y).then(b=>(gt(Ui,`Received RPC '${e}' ${o}: `,b),b),b=>{throw Va(Ui,`RPC '${e}' ${o} failed with error: `,b,"url: ",a,"request:",i),b})}me(e,n,i,r,s,o){return this.le(e,n,i,r,s)}he(e,n,i){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ut}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}fe(e,n){const i=bf[e];let r=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */var Js,I,z,Tt,ir,On,Vn,Gt;function vf(t){switch(t){case w.OK:return R(64938);case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0;default:return R(15467,{code:t})}}function Xs(t){if(t===void 0)return bi("RPC_ERROR","HTTP error has no status"),w.UNKNOWN;switch(t){case 200:return w.OK;case 400:return w.FAILED_PRECONDITION;case 401:return w.UNAUTHENTICATED;case 403:return w.PERMISSION_DENIED;case 404:return w.NOT_FOUND;case 409:return w.ABORTED;case 416:return w.OUT_OF_RANGE;case 429:return w.RESOURCE_EXHAUSTED;case 499:return w.CANCELLED;case 500:return w.UNKNOWN;case 501:return w.UNIMPLEMENTED;case 503:return w.UNAVAILABLE;case 504:return w.DEADLINE_EXCEEDED;default:return t>=200&&t<300?w.OK:t>=400&&t<500?w.FAILED_PRECONDITION:t>=500&&t<600?w.INTERNAL:w.UNKNOWN}}/**
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
 */(I=Js||(Js={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";class kf extends wf{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,r,s){var c;const o=JSON.stringify(r);let a;try{const l={method:"POST",headers:i,body:o};s&&(l.credentials="include"),a=await fetch(n,l)}catch(l){const y=l,b=y==null?void 0:y.message,v=y!=null&&y.cause?String(y.cause):void 0,S=(b&&v?`${b} (${v})`:b??v)??(y==null?void 0:y.statusText)??String(l);throw new E(Xs(y==null?void 0:y.status),`Request failed with error: ${S}`)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const y=(c=l==null?void 0:l.error)==null?void 0:c.message;throw new E(Xs(a.status),`Request failed with error: ${y??a.statusText}`)}return a.json()}}/**
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
 */class Tf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tf("Invalid base64 string: "+s):s}}(e);return new ce(n)}static fromUint8Array(e){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(e);return new ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function cn(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}ce.EMPTY_BYTE_STRING=new ce("");/**
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
 */class T{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new T;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,r=this.be(e,i);if(r==0&&this.isEmpty(i)||(n+=r)<T.we)return;if(n>T.ge)return void(this.exponent=Number(T.Fe));let s=this.ve(n,i);this.xe(n,s,i)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let r=-i;if(e.length-i>T.De){let s=e[T.De]>=5,o=new Array(T.De).fill(0);for(let a=0;a<T.De;a++)o[a]=e[a+i];s&&(r+=this.Ne(o)),e=o,i=0}for(let s=e.length-1;s>=i;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return r}Se(e){let n=e.length;for(let i=0;i<n;i++){let r=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=r<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,r=Number(i)/T.Ce;return Math.floor(Number(e)*T.Be+this.log2(r))}log2(e){return T.Qe*Math.log(e)}xe(e,n,i){let r=this.Ie;this.Oe(-n,r);let s=this.pe;this.Me(i,r,s),this.qe(s),BigInt(r[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=T.Ue)<=0||(n+=this.$e(s),BigInt(n)>=T.Fe?this.exponent=Number(T.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(T.je[0],n);let i=T.je;e<0&&(e=-e,i=T.Ke);let r=T.ze,s=32,o=!0;for(;e>0;)e>=r&&(o?(this.ke(i[s],n),o=!1):this.We(n,i[s],n),e-=r),s-=1,r*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let r=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(r)}Ge(e,n,i){for(let r=0;r<i.length;r++)i[r]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let r=5;r>=0;r--)for(let s=5;s>=0;s--){let o=this.Ae[r]*this.Re[s];i[s+r+1]=i[s+r+1]+(o&T.Xe)&0xffffffffffffffffn,i[s+r]=i[s+r]+(o>>32n)&0xffffffffffffffffn}for(let r=11;r>=1;r--)i[r-1]=i[r-1]+(i[r]>>32n)&0xffffffffffffffffn,i[r]&=T.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let r=this.Re;this.Ye(n,r);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let c=e[o]*r[a];i[a+o+1]=i[a+o+1]+(c&T.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(c>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=T.Xe}qe(e){let n=e.length-1;e[0]&=T.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=T.Xe}Le(e){let n=31-T.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&T.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&T.Xe,n[2]=e[2]>>32n,n[3]=e[2]&T.Xe,n[4]=e[3]>>32n,n[5]=e[3]&T.Xe}tt(e,n){let i=e.length-1,r=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<r&T.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>r);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&T.Xe|e[o+1]>>r);e[i]=e[i]<<s&T.Xe}}rt(e,n,i){let r=n;e[r]=e[r]+i&0xffffffffffffffffn;for(let s=r+1-1;s>=1&&(e[s]&T.nt)!=0n;s--)e[s]&=T.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}T.De=59,T.ge=646456993,T.we=-646457032,T.Ce=0xccccccccccccd00,T.it=0x8000000000000000n,T.ze=2147483648,T.Xe=0x00000000ffffffffn,T.nt=0xffffffff00000000n,T.Be=Math.log(10)/Math.log(2),T.Qe=1/Math.log(2),T.Ue=2147483647,T.Fe=0xffffffffn,T.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],T.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class k{constructor(e,n,i,r){this.negative=e,this.st=n,this.Ve=i,this.Te=r}exponent(){return this.st-T.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===H(k,z,"f",Tt)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===H(k,z,"f",Tt)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+H(k,z,"m",ir).call(k,this.Ve)+H(k,z,"m",ir).call(k,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return k.NaN;if(!isFinite(e))return e<0?k._t:k.ct;if(e===0)return Math.sign(1/e)>0?k.lt:k.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let r=BigInt.asUintN(64,i<<12n),s=2047&Number(i>>52n);if(s===0){const o=T.et(r);r=o<63?r<<BigInt(o+1):0n,s=-o}return new k(e<0,H(k,z,"m",Gt).call(k,s-1023),r,0n)}static fromString(e){if(e==="NaN")return k.NaN;if(e==="-Infinity")return k._t;if(e==="Infinity"||e==="+Infinity")return k.ct;const n=new Array(e.length).fill(0);let i=0,r=0,s=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;H(k,z,"m",On).call(k,e,i);)n[r++]=H(k,z,"m",Vn).call(k,e,i++);if(e[i]==="."){const c=++i;for(;H(k,z,"m",On).call(k,e,i);)n[r++]=H(k,z,"m",Vn).call(k,e,i++);s=c-i}if(e[i]==="e"||e[i]==="E"){let c=0;i++;let l=1;e[i]==="-"?(l=-1,i++):e[i]==="+"&&i++;const y=i;for(;H(k,z,"m",On).call(k,e,i);)if(c=10*c+H(k,z,"m",Vn).call(k,e,i++),i-y>9)throw new Error("Exponent too large "+e);if(i===y)throw new Error("Invalid number "+e);s+=c*l}if(r===0||i!==e.length)throw new Error("Invalid number "+e);const a=T.ye(n.slice(0,r),s);return new k(o,a.exponent,a.Ve,a.Te)}}z=k,ir=function(e){return e.toString(16).padStart(16,"0")},On=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},Vn=function(e,n){return e.codePointAt(n)-48},Gt=function(e){return e+T.Ue},Tt={value:Number(T.Fe)},k.lt=new k(!1,0,0n,0n),k.ft=new k(!0,0,0n,0n),k.NaN=new k(!1,H(k,z,"f",Tt),1n<<63n,0n),k._t=new k(!0,H(k,z,"f",Tt),0n,0n),k.ct=new k(!1,H(k,z,"f",Tt),0n,0n),new k(!0,H(k,z,"m",Gt).call(k,63),0n,0n),new k(!1,H(k,z,"m",Gt).call(k,0),0n,0n),new k(!0,H(k,z,"m",Gt).call(k,0),0n,0n);/**
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
 */const _f=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(t){if(ne(!!t,39018),typeof t=="string"){let e=0;const n=_f.exec(t);if(ne(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Q(t.seconds),nanos:Q(t.nanos)}}function Q(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?ce.fromBase64String(t):ce.fromUint8Array(t)}/**
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
 */function ie(t,e){const n={typeString:t};return e&&(n.value=e),n}function kn(t,e){if(!Ba(t))throw new E(w.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(r&&typeof a!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new E(w.INVALID_ARGUMENT,n);return!0}/**
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
 */const Zs=-62135596800,Qs=1e6;class V{static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Qs);return new V(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new E(w.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return V._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(r+1000000000n))}return new V(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zs)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qs}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new E(w.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:V._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kn(e,V._jsonSchema))return new V(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zs;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}V._jsonSchemaVersion="firestore/timestamp/1.0",V._jsonSchema={type:ie("string",V._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};function Ef(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function ja(t){const e=t.mapValue.fields.__previous_value__;return Ef(e)?ja(e):e}function rr(t){const e=ln(t.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}/**
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
 */const Wa="__type__",Ga="__vector__",Ka="value",Sf="server_timestamp",qa="__min__",Vr="__max__",Ke="__regex__",ti="pattern",ni="options",hn="__oid__",Tn="__int__",Ct="__decimal128__",at="__request_timestamp__",ii="seconds",ri="increment",wi="__binary__";var C,se;(se=C||(C={})).dt="regexValue",se.Et="bsonObjectIdValue",se.Vt="int32Value",se.Tt="decimal128Value",se.It="bsonTimestampValue",se.At="bsonBinaryValue",se.Rt="minKeyValue",se.Pt="maxKeyValue",se.yt="maxValue",se.bt="vectorValue",se.wt="serverTimestampValue",se.gt="regularMapValue";const eo={[Ga]:C.bt,[Vr]:C.yt,[Sf]:C.wt},Ya={[Ke]:C.dt,[hn]:C.Et,[Tn]:C.Vt,[Ct]:C.Tt,[at]:C.It,[wi]:C.At,[qa]:C.Rt,[Vr]:C.Pt};function sr(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return R(28295,{value:t});switch(function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return C.gt;const r=i.mapValue.fields,s=(a=r[Wa])==null?void 0:a.stringValue;if(s&&eo[s])return eo[s];if(cn(r)===1){const c=Object.keys(r);return Ya[c[0]]??C.gt}return C.gt}(t)){case C.wt:return 6;case C.yt:return 9007199254740991;case C.bt:return 14;case C.dt:return 12;case C.Et:return 10;case C.Vt:case C.Tt:return 3;case C.It:return 5;case C.At:return 8;case C.Rt:return 1;case C.Pt:return 16;default:return 15}}function or(t,e,n){if(t===e)return!0;const i=sr(t);if(i!==sr(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return rr(t).isEqual(rr(e));case 4:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ln(s.timestampValue),c=ln(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 7:return t.stringValue===e.stringValue;case 8:return function(s,o){return $f(s,o)===0}(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return function(s,o){return Q(s.geoPointValue.latitude)===Q(o.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(o.geoPointValue.longitude)}(t,e);case 3:return function(s,o,a){if(xt(s)&&xt(o))return Ja(s,o)===0;if("integerValue"in s&&"integerValue"in o||si(s)&&si(o))return un(s)===un(o);let c,l;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(c=Q(s.doubleValue),l=Q(o.doubleValue),c===l?Qn(c)===Qn(l):!!(a===void 0||a.vt)&&isNaN(c)&&isNaN(l))}(t,e,n);case 13:return za(t.arrayValue.values||[],e.arrayValue.values||[],(r,s)=>or(r,s,n));case 14:case 15:return function(s,o,a){const c=s.mapValue.fields||{},l=o.mapValue.fields||{};if(cn(c)!==cn(l))return!1;for(const y in c)if(c.hasOwnProperty(y)&&(l[y]===void 0||!or(c[y],l[y],a)))return!1;return!0}(t,e,n);case 5:return Af(t,e)===0;case 12:return Pf(t,e)===0;case 10:return Nf(t,e)===0;default:return R(52216,{left:t})}}function un(t){let e;return e=si(t)?t.mapValue.fields[Tn].integerValue:t.integerValue||t.doubleValue,Q(e)}function If(t){return t.mapValue.fields[Ct].stringValue}function to(t,e){if(xt(t)||xt(e))return Ja(t,e);const n=un(t),i=un(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:ve(n,i)}function Ja(t,e){const n=no(t),i=no(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function no(t){return xt(t)?k.fromString(If(t)):k.fromNumber(un(t))}function Af(t,e){var a,c,l,y,b,v,S,A,O,D,J,re;const n=(l=(c=(a=t.mapValue.fields)==null?void 0:a[at].mapValue)==null?void 0:c.fields)==null?void 0:l[ii],i=(v=(b=(y=e.mapValue.fields)==null?void 0:y[at].mapValue)==null?void 0:b.fields)==null?void 0:v[ii],r=(O=(A=(S=t.mapValue.fields)==null?void 0:S[at].mapValue)==null?void 0:A.fields)==null?void 0:O[ri],s=(re=(J=(D=e.mapValue.fields)==null?void 0:D[at].mapValue)==null?void 0:J.fields)==null?void 0:re[ri],o=to(n,i);return o!==0?o:to(r,s)}function io(t){var a;if("bytesValue"in t)return{subtype:0,bytes:ei(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[wi],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const r=ei(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const s=r[0],o=r.slice(1);return{subtype:s,bytes:ce.fromUint8Array(o)}}function $f(t,e){const n=io(t),i=io(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function Pf(t,e){var l,y,b,v,S,A,O,D,J,re,Fe,Qe,Ft,Se,f,h;const n=t.mapValue.fields,i=((v=(b=(y=(l=n==null?void 0:n[Ke])==null?void 0:l.mapValue)==null?void 0:y.fields)==null?void 0:b[ti])==null?void 0:v.stringValue)??"",r=((D=(O=(A=(S=n==null?void 0:n[Ke])==null?void 0:S.mapValue)==null?void 0:A.fields)==null?void 0:O[ni])==null?void 0:D.stringValue)??"",s=e.mapValue.fields,o=((Qe=(Fe=(re=(J=s==null?void 0:s[Ke])==null?void 0:J.mapValue)==null?void 0:re.fields)==null?void 0:Fe[ti])==null?void 0:Qe.stringValue)??"",a=((h=(f=(Se=(Ft=s==null?void 0:s[Ke])==null?void 0:Ft.mapValue)==null?void 0:Se.fields)==null?void 0:f[ni])==null?void 0:h.stringValue)??"",c=Rr(i,o);return c!==0?c:ve(r,a)}function Nf(t,e){var n,i,r,s;return Rr(((i=(n=t.mapValue.fields)==null?void 0:n[hn])==null?void 0:i.stringValue)??"",((s=(r=e.mapValue.fields)==null?void 0:r[hn])==null?void 0:s.stringValue)??"")}function xt(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return cn(e)===1&&e[Ct]&&!!e[Ct].stringValue}function si(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return cn(e)===1&&((i=e[Tn])==null?void 0:i.integerValue)!==void 0}function Fi(t){return!!t&&"mapValue"in t}function Zt(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return vn(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Zt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zt(t.arrayValue.values[n]);return e}return{...t}}/**
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
 */new Set(Object.values(Ya));/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new V(0,0))}static max(){return new U(new V(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oi{constructor(e,n){this.comparator=e,this.root=n||j.EMPTY}insert(e,n){return new oi(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(e){return new oi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,j.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sn(this.root,e,this.comparator,!0)}}class Sn{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class j{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??j.RED,this.left=r??j.EMPTY,this.right=s??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new j(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return j.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw R(43730,{key:this.key,value:this.value});if(this.right.isRed())throw R(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw R(27949);return e+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw R(57766)}get value(){throw R(16141)}get color(){throw R(16727)}get left(){throw R(29726)}get right(){throw R(36894)}copy(e,n,i,r,s){return this}insert(e,n,i){return new j(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ai{constructor(e){this.comparator=e,this.data=new oi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(e){return new ro(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ai)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ai(this.comparator);return n.data=e,n}}class ro{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yt{constructor(e){this.fields=e,e.sort(an.comparator)}static empty(){return new yt([])}unionWith(e){let n=new ai(an.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return za(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class oe{constructor(e){this.value=e}static empty(){return new oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Fi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zt(n)}setAll(e){let n=an.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Zt(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Fi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Fi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){vn(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new oe(Zt(this.value))}}/**
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
 */class $e{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $e(e,0,U.min(),U.min(),U.min(),oe.empty(),0)}static newFoundDocument(e,n,i,r){return new $e(e,1,n,U.min(),i,r,0)}static newNoDocument(e,n){return new $e(e,2,n,U.min(),U.min(),oe.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,U.min(),U.min(),oe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Df{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}/**
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
 */function Xa(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(e)?"-0":e}}function Mn(t){return{integerValue:""+t}}function Cf(t,e,n){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Qn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?Mn(e):Xa(t,e)}/**
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
 */class vi{constructor(){this._=void 0}}class Za extends vi{}class xf extends vi{constructor(e){super(),this.elements=e}}class Rf extends vi{constructor(e){super(),this.elements=e}}class Mr extends vi{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class Lf extends Mr{}class Of extends Mr{}class Vf extends Mr{}/**
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
 */class Mf{constructor(e,n){this.field=e,this.transform=n}}class Ne{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ki{}class Qa extends ki{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ur extends ki{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class ec extends ki{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tc extends ki{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Uf{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Un(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function so(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ff(t,e){return Un(t,e.toTimestamp())}function zi(t){return ne(!!t,49232),U.fromTimestamp(function(n){const i=ln(n);return new V(i.seconds,i.nanos)}(t))}function nc(t,e){return ar(t,e).canonicalString()}function ar(t,e){const n=function(r){return new B(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ci(t,e){return nc(t.databaseId,e.path)}function oo(t,e){const n=function(r){const s=B.fromString(r);return ne(ic(s),10190,{key:s.toString()}),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(function(r){return ne(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}(n))}function ao(t,e,n){return{name:ci(t,e),fields:n.value.mapValue.fields}}function zf(t,e){return"found"in e?function(i,r){ne(!!r.found,43571),r.found.name,r.found.updateTime;const s=oo(i,r.found.name),o=zi(r.found.updateTime),a=r.found.createTime?zi(r.found.createTime):U.min(),c=new oe({mapValue:{fields:r.found.fields}});return $e.newFoundDocument(s,o,a,c)}(t,e):"missing"in e?function(i,r){ne(!!r.missing,3894),ne(!!r.readTime,22933);const s=oo(i,r.missing),o=zi(r.readTime);return $e.newNoDocument(s,o)}(t,e):R(7234,{result:e})}function Bf(t,e){let n;if(e instanceof Qa)n={update:ao(t,e.key,e.value)};else if(e instanceof ec)n={delete:ci(t,e.key)};else if(e instanceof Ur)n={update:ao(t,e.key,e.data),updateMask:Hf(e.fieldMask)};else{if(!(e instanceof tc))return R(16599,{Ot:e.type});n={verify:ci(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xf)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rf)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lf)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof Of)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof Vf)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw R(20930,{transform:o.transform})}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ff(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:R(27497)}(t,e.precondition)),n}function Hf(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ic(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function rc(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */function Fr(t){return new Uf(t,!0)}/**
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
 */class jf{}class Wf extends jf{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.qt=!1}Lt(){if(this.qt)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.le(e,ar(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(w.UNKNOWN,s.toString())})}me(e,n,i,r,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.me(e,ar(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(w.UNKNOWN,o.toString())})}terminate(){this.qt=!0,this.connection.terminate()}}async function Gf(t,e){const n=Ua(t),i={writes:e.map(r=>Bf(n.serializer,r))};await n.le("Commit",n.serializer.databaseId,B.emptyPath(),i)}async function sc(t,e){const n=Ua(t),i={documents:e.map(a=>ci(n.serializer,a))},r=await n.me("BatchGetDocuments",n.serializer.databaseId,B.emptyPath(),i,e.length),s=new Map;r.forEach(a=>{const c=zf(n.serializer,a);s.set(c.key.toString(),c)});const o=[];return e.forEach(a=>{const c=s.get(a.toString());ne(!!c,55234,{key:a}),o.push(c)}),o}/**
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
 */const oc="ComponentProvider",Qt=new Map;function ac(t){if(t._terminated)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.");if(!Qt.has(t)){gt(oc,"Initializing Datastore");const e=function(s){return new kf(s)}(function(s,o,a,c,l){return new cf(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ha(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator,c,l._customHeaders,l.grpcFlowControlWindow)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Fr(t._databaseId),i=function(s,o,a,c){return new Wf(s,o,a,c)}(t._authCredentials,t._appCheckCredentials,e,n);Qt.set(t,i)}return Qt.get(t)}const Kf=1048576,cc="firestore.googleapis.com",co=!0;class lo{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=co}else this.host=e.host,this.ssl=e.ssl??co;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Kf)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(function(i,r,s,o){if(r===!0&&o===!0)throw new E(w.INVALID_ARGUMENT,`${i} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ha(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new E(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new E(w.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(i,r){if(i===r)return!0;if(!i||!r)return!1;const s=Object.keys(i),o=Object.keys(r);if(s.length!==o.length)return!1;for(const a of s)if(i[a]!==r[a])return!1;return!0}(this._customHeaders,e._customHeaders)}}class Ti{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lo(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new tf;switch(i.type){case"firstParty":return new of(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Qt.get(n);i&&(gt(oc,"Removing Datastore"),Qt.delete(n),i.terminate())}(this),Promise.resolve()}}function qf(t,e){const n=typeof t=="object"?t:Yo(),i=typeof t=="string"?t:e||"(default)",r=_r(n,"firestore/lite").getImmediate({identifier:i});if(!r._initialized){const s=cl("firestore");s&&Yf(r,...s)}return r}function Yf(t,e,n,i={}){var l;t=Or(t,Ti);const r=gn(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;r&&Wo(`https://${a}`),s.host!==cc&&s.host!==a&&Va("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:a,ssl:r,emulatorOptions:i};if(!ft(c,o)&&(t._setSettings(c),i.mockUserToken)){let y,b;if(typeof i.mockUserToken=="string")y=i.mockUserToken,b=X.MOCK_USER;else{y=ll(i.mockUserToken,(l=t._app)==null?void 0:l.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new X(v)}t._authCredentials=new nf(new Fa(y,b))}}/**
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
 */class zr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new zr(this.firestore,e,this._query)}}class W{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new W(this.firestore,e,this._key)}toJSON(){return{type:W._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(kn(n,W._jsonSchema))return new W(e,i||null,new te(B.fromString(n.referencePath)))}}W._jsonSchemaVersion="firestore/documentReference/1.0",W._jsonSchema={type:ie("string",W._jsonSchemaVersion),referencePath:ie("string")};class dn extends zr{constructor(e,n,i){super(e,n,function(s){return new Df(s)}(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new W(this.firestore,null,new te(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function en(t,e,...n){if(t=F(t),arguments.length===1&&(e=uf.newId()),mf("doc","path",e),t instanceof Ti){const i=B.fromString(e,...n);return Ys(i),new W(t,null,new te(i))}{if(!(t instanceof W||t instanceof dn))throw new E(w.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(B.fromString(e,...n));return Ys(i),new W(t.firestore,t instanceof dn?t.converter:null,new te(i))}}/**
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
 */class ee{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new E(w.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new ee(ce.fromBase64String(e),n)}catch(i){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new ee(ce.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:ee._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(kn(e,ee._jsonSchema)){const n=e.subtype??0;return ee.fromBase64String(e.bytes,n)}}}ee._jsonSchemaVersion="firestore/bytes/1.0",ee._jsonSchema={type:ie("string",ee._jsonSchemaVersion),bytes:ie("string"),subtype:{...ie("number"),optional:!0}};/**
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
 */class Br{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Hr{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class jr{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Wr{constructor(e){this.stringValue=e,this.value=k.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
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
 */class _i{constructor(e){this._methodName=e}}/**
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
 */class we{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:we._jsonSchemaVersion}}static fromJSON(e){if(kn(e,we._jsonSchema))return new we(e.latitude,e.longitude)}}we._jsonSchemaVersion="firestore/geoPoint/1.0",we._jsonSchema={type:ie("string",we._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};/**
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
 */class Gr{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Le{constructor(){this.type="MaxKey"}static instance(){return Le.MAX_KEY_VALUE_INSTANCE||(Le.MAX_KEY_VALUE_INSTANCE=new Le),Le.MAX_KEY_VALUE_INSTANCE}}Le.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class Oe{constructor(){this.type="MinKey"}static instance(){return Oe.MIN_KEY_VALUE_INSTANCE||(Oe.MIN_KEY_VALUE_INSTANCE=new Oe),Oe.MIN_KEY_VALUE_INSTANCE}}Oe.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class Kr{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class ue{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kn(e,ue._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ue(e.vectorValues);throw new E(w.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ue._jsonSchemaVersion="firestore/vectorValue/1.0",ue._jsonSchema={type:ie("string",ue._jsonSchemaVersion),vectorValues:ie("object")};/**
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
 */const Jf=/^__.*__$/;class Xf{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}class lc{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R(40011,{dataSource:t})}}class qr{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new qr({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var r;const n=(r=this.path)==null?void 0:r.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return hi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(hc(this.dataSource)&&Jf.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Zf{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Fr(e)}createContext(e,n,i,r=!1){return new qr({dataSource:e,methodName:n,targetDoc:i,path:an.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qf(t){const e=t._freezeSettings(),n=Fr(t._databaseId);return new Zf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ep(t,e,n,i,r,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,r);Jr("Data must be an object, but it was:",o,i);const a=uc(i,o);let c,l;if(s.merge)c=new yt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const y=[];for(const b of s.mergeFields){const v=li(e,b,n);if(!o.contains(v))throw new E(w.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);mc(y,v)||y.push(v)}c=new yt(y),l=o.fieldTransforms.filter(b=>c.covers(b.field))}else c=null,l=o.fieldTransforms;return new Xf(new oe(a),c,l)}class Ei extends _i{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ei}}class Yr extends _i{_toFieldTransform(e){return new Mf(e.path,new Za)}isEqual(e){return e instanceof Yr}}function tp(t,e,n,i){const r=t.createContext(1,e,n);Jr("Data must be an object, but it was:",r,i);const s=[],o=oe.empty();vn(i,(c,l)=>{const y=pc(e,c,n);l=F(l);const b=r.childContextForFieldPath(y);if(l instanceof Ei)s.push(y);else{const v=Si(l,b);v!=null&&(s.push(y),o.set(y,v))}});const a=new yt(s);return new lc(o,a,r.fieldTransforms)}function np(t,e,n,i,r,s){const o=t.createContext(1,e,n),a=[li(e,i,n)],c=[r];if(s.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)a.push(li(e,s[v])),c.push(s[v+1]);const l=[],y=oe.empty();for(let v=a.length-1;v>=0;--v)if(!mc(l,a[v])){const S=a[v];let A=c[v];A=F(A);const O=o.childContextForFieldPath(S);if(A instanceof Ei)l.push(S);else{const D=Si(A,O);D!=null&&(l.push(S),y.set(S,D))}}const b=new yt(l);return new lc(y,b,o.fieldTransforms)}function Si(t,e,n){if(fc(t=F(t)))return Jr("Unsupported field value:",e,t),uc(t,e);if(t instanceof _i)return function(r,s){if(!hc(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let l=Si(c,s.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}}(t,e)}return function(r,s,o){if((r=F(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Cf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=V.fromDate(r);return{timestampValue:Un(s.serializer,a)}}if(r instanceof V){const a=new V(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Un(s.serializer,a)}}if(dc(r)){const a=V.fromInstant(r),c=new V(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Un(s.serializer,c)}}if(r instanceof we)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ee)return r.subtype===0?{bytesValue:so(s.serializer,r._byteString)}:function(c,l){const y=l.toUint8Array(),b=new Uint8Array(y.length+1);return b[0]=l.subtype,b.set(y,1),{mapValue:{fields:{[wi]:{bytesValue:so(c,ce.fromUint8Array(b))}}}}}(s.serializer,r);if(r instanceof W){const a=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw s.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:nc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ue)return function(c,l){const y=c instanceof ue?c.toArray():c;return{mapValue:{fields:{[Wa]:{stringValue:Ga},[Ka]:{arrayValue:{values:y.map(v=>{if(typeof v!="number")throw l.createError("VectorValues must only contain numeric values.");return Xa(l.serializer,v)})}}}}}}(r,s);if(r instanceof Kr)return function(c){return{mapValue:{fields:{[Ke]:{mapValue:{fields:{[ti]:{stringValue:c.pattern},[ni]:{stringValue:c.options}}}}}}}}(r);if(r instanceof Hr)return function(c){return{mapValue:{fields:{[hn]:{stringValue:c.value}}}}}(r);if(r instanceof Gr)return function(c){return{mapValue:{fields:{[Tn]:Mn(c.value)}}}}(r);if(r instanceof Wr)return function(c){return{mapValue:{fields:{[Ct]:{stringValue:c.stringValue}}}}}(r);if(r instanceof jr)return function(c){return{mapValue:{fields:{[at]:{mapValue:{fields:{[ii]:Mn(c.seconds),[ri]:Mn(c.increment)}}}}}}}(r);if(r instanceof Oe)return function(){return{mapValue:{fields:{[qa]:{nullValue:"NULL_VALUE"}}}}}();if(r instanceof Le)return function(){return{mapValue:{fields:{[Vr]:{nullValue:"NULL_VALUE"}}}}}();if(rc(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Lr(r)}`)}(t,e)}function uc(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(t,(i,r)=>{const s=Si(r,e.childContextForField(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function dc(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function fc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof V||t instanceof we||t instanceof ee||t instanceof W||t instanceof _i||t instanceof ue||t instanceof Oe||t instanceof Le||t instanceof Gr||t instanceof Wr||t instanceof Kr||t instanceof Hr||t instanceof jr||dc(t)||rc(t))}function Jr(t,e,n){if(!fc(n)||!Ba(n)){const i=Lr(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function li(t,e,n){if((e=F(e))instanceof Br)return e._internalPath;if(typeof e=="string")return pc(t,e);throw hi("Field path arguments must be of type string or ",t,!1,void 0,n)}const ip=new RegExp("[~\\*/\\[\\]]");function pc(t,e,n){if(e.search(ip)>=0)throw hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Br(...e.split("."))._internalPath}catch{throw hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hi(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function mc(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ui{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new W(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rp extends ui{data(){return super.data()}}class sp{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(si(e))return this.convertToInt32Value(e.mapValue);if(xt(e))return this.convertToDecimal128Value(e.mapValue)}return Q(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(ei(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Le.instance();case 1:return Oe.instance();default:throw R(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return vn(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(e){var i,r,s;const n=(s=(r=(i=e.fields)==null?void 0:i[Ka].arrayValue)==null?void 0:r.values)==null?void 0:s.map(o=>Q(o.doubleValue));return new ue(n)}convertToBsonObjectId(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[hn])==null?void 0:r.stringValue)??"";return new Hr(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[wi],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const r=ei(i).toUint8Array();if(r.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const s=r[0],o=r.slice(1);return new ee(ce.fromUint8Array(o),s)}convertToBsonTimestamp(e){var s,o,a,c,l,y,b;const n=(s=e.fields)==null?void 0:s[at],i=Number((c=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[ii])==null?void 0:c.integerValue),r=Number((b=(y=(l=n==null?void 0:n.mapValue)==null?void 0:l.fields)==null?void 0:y[ri])==null?void 0:b.integerValue);return new jr(i,r)}convertToRegexValue(e){var r,s,o,a,c,l,y,b,v,S;const n=((c=(a=(o=(s=(r=e.fields)==null?void 0:r[Ke])==null?void 0:s.mapValue)==null?void 0:o.fields)==null?void 0:a[ti])==null?void 0:c.stringValue)??"",i=((S=(v=(b=(y=(l=e.fields)==null?void 0:l[Ke])==null?void 0:y.mapValue)==null?void 0:b.fields)==null?void 0:v[ni])==null?void 0:S.stringValue)??"";return new Kr(n,i)}convertToInt32Value(e){var i,r;const n=Number((r=(i=e.fields)==null?void 0:i[Tn])==null?void 0:r.integerValue);return new Gr(n)}convertToDecimal128Value(e){var i,r;const n=((r=(i=e.fields)==null?void 0:i[Ct])==null?void 0:r.stringValue)??"";return new Wr(n)}convertGeoPoint(e){return new we(Q(e.latitude),Q(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ja(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(rr(e));default:return null}}convertTimestamp(e){const n=ln(e);return new V(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=B.fromString(e);ne(ic(i),9688,{name:e});const r=new on(i.get(1),i.get(3)),s=new te(i.popFirst(5));return r.isEqual(n)||bi(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function op(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class gc extends sp{constructor(e){super(),this.firestore=e}convertBytes(e){return new ee(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new W(this.firestore,null,n)}}function yc(t){const e=ac((t=Or(t,W)).firestore),n=new gc(t.firestore);return sc(e,[t._key]).then(i=>{ne(i.length===1,15618);const r=i[0];return new ui(t.firestore,n,t._key,r.isFoundDocument()?r:null,t.converter)})}function ap(){return new Yr("serverTimestamp")}const ho="4.19.1";/**
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
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bc{constructor(e,n,i=1e3,r=1.5,s=6e4){this.t=e,this.timerId=n,this.i=i,this.o=r,this.h=s,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(e){this.cancel();const n=Math.floor(this.u+this.p()),i=Math.max(0,Date.now()-this._),r=Math.max(0,n-i);r>0&&gt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.u} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,r,()=>(this._=Date.now(),e())),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}function In(t,e){if((t=F(t)).firestore!==e)throw new E(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let cp=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new E(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await sc(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new ec(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=te.fromPath(i);this.mutations.push(new tc(r,this.precondition(r)))}),await Gf(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw R(50498,{R:e.constructor.name});n=U.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new E(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(U.min())?Ne.exists(!1):Ne.updateTime(n):Ne.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(U.min()))throw new E(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ne.updateTime(n)}return Ne.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
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
 */const lp={maxAttempts:5};/**
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
 */class hp{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.I=i.maxAttempts,this.P=new bc(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A(async()=>{const e=new cp(this.datastore),n=this.v(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.F(r)}))}).catch(i=>{this.F(i)})})}v(e){try{const n=this.updateFunction(e);return!yf(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}F(e){this.I>0&&this.B(e)?(this.I-=1,this.asyncQueue.enqueueAndForget(()=>(this.D(),Promise.resolve()))):this.deferred.reject(e)}B(e){if((e==null?void 0:e.name)==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!vf(n)}return!1}}/**
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
 */function Bi(){return typeof document<"u"?document:null}/**
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
 */class Zr{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Zr(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
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
 */const uo="AsyncQueue";class up{constructor(e=Promise.resolve()){this.k=[],this.O=!1,this.C=[],this.S=null,this.q=!1,this.M=!1,this.N=[],this.P=new bc(this,"async_queue_retry"),this.L=()=>{const i=Bi();i&&gt(uo,"Visibility state changed to "+i.visibilityState),this.P.T()},this.W=e;const n=Bi();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.U(),this.j(e)}enterRestrictedMode(e){if(!this.O){this.O=!0,this.M=e||!1;const n=Bi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.L)}}enqueue(e){if(this.U(),this.O)return new Promise(()=>{});const n=new Xr;return this.j(()=>this.O&&this.M?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.k.push(e),this.$()))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(e){if(!function(i){return i.name==="IndexedDbTransactionError"}(e))throw e;gt(uo,"Operation failed with retryable error: "+e)}this.k.length>0&&this.P.A(()=>this.$())}}j(e){const n=this.W.then(()=>(this.q=!0,e().catch(i=>{this.S=i,this.q=!1;const r=fo(i);throw bi("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.q=!1,i))));return this.W=n,n}enqueueAfterDelay(e,n,i){this.U(),this.N.indexOf(e)>-1&&(n=0);const r=Zr.createAndSchedule(this,e,n,i,s=>this.G(s));return this.C.push(r),r}U(){this.S&&R(47125,{K:fo(this.S)})}verifyOperationInProgress(){}async H(){let e;do e=this.W,await e;while(e!==this.W)}J(e){for(const n of this.C)if(n.timerId===e)return!0;return!1}X(e){return this.H().then(()=>{this.C.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.C)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.H()})}Y(e){this.N.push(e)}G(e){const n=this.C.indexOf(e);this.C.splice(n,1)}}function fo(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */class dp{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Qf(e)}get(e){const n=In(e,this._firestore),i=new gc(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return R(24041);const s=r[0];if(s.isFoundDocument())return new ui(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new ui(this._firestore,i,n._key,null,n.converter);throw R(18433,{doc:s})})}set(e,n,i){const r=In(e,this._firestore),s=op(r.converter,n,i),o=ep(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=In(e,this._firestore);let o;return o=typeof(n=F(n))=="string"||n instanceof Br?np(this._dataReader,"Transaction.update",s._key,n,i,r):tp(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=In(e,this._firestore);return this._transaction.delete(n._key),this}}function fp(t,e,n){t=Or(t,Ti);const i=ac(t),r={...lp,...n};(function(a){if(a.maxAttempts<1)throw new E(w.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const s=new Xr;return new hp(function(){return new up}(),i,r,o=>e(new dp(t,o)),s).V(),s.promise}/**
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
 */(function(){ef(`${Ot}_lite`),Pt(new pt("firestore/lite",(e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new Ti(new rf(e.getProvider("auth-internal")),new af(r,e.getProvider("app-check-internal")),lf(r,n),r);return i&&s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Je("firestore-lite",ho,""),Je("firestore-lite",ho,"esm2020")})();const pp={C:0,Cs:1,Ds:3,E:4,Fs:6,G:7,A:9},wc=t=>{const[,e,n]=/^([A-G]s?)(\d)$/.exec(t);return(Number(n)+1)*12+pp[e]},mp=["A0","C1","Ds1","Fs1","A1","C2","Ds2","Fs2","A2","C3","Ds3","Fs3","A3","C4","Ds4","Fs4","A4","C5","Ds5","Fs5","A5","C6","Ds6","Fs6","A6","C7","Ds7","Fs7","A7","C8"],gp=["C1","G1","C2","G2","C3","G3","C4","G4","C5","G5","C6","G6","C7","G7"].map(wc),yp=Array.from({length:23},(t,e)=>e===22?108:21+e*4),po=(t,e)=>e.flatMap(n=>[1,2,3].map(i=>({key:n,layer:i,url:`${t}/${n}-${i}.mp3`})));mp.map(t=>({key:wc(t),layer:1,url:`piano/${t}.mp3`})),po("upright1",gp),po("upright2",yp);const mo=1024;Float32Array.from({length:mo},(t,e)=>.5-.5*Math.cos(2*Math.PI*e/mo));const An={en:[["Bows up!","Deep breath!"],["Keep the bow going!","Keep the air going!"],["Tip: keep the bow moving evenly through the long notes.","Tip: keep your breath steady through the long notes."],[/fingerings, bowings and dynamics/g,"articulations and dynamics"],[/fingerings and dynamics/g,"articulations and dynamics"],["Good fingerings are a gift: pass them on.","Good markings are a gift: pass them on."],[/New fingerings, new ideas/g,"New markings, new ideas"],[/with your fingerings and marks/g,"with your marks"],[/All four strings in tune\./g,"In tune."]],de:[["Bogen hoch!","Tief Luft holen!"],[/deinen Fingersätzen, Strichen und deiner Dynamik/g,"deiner Artikulation und Dynamik"],[/Fingersätze, Striche und Dynamik/g,"Artikulation und Dynamik"]]},vc={viola:{en:[[/violinists/g,"violists"],[/violinist/g,"violist"],[/Violin/g,"Viola"],[/violin/g,"viola"]],de:[[/Geigerinnen und Geiger/g,"Bratschistinnen und Bratschisten"],[/großer Geiger/g,"großer Bratschisten"],[/Geigenstimme|Violinstimme/g,"Bratschenstimme"],[/Violinstücke/g,"Bratschenstücke"],[/Geige|Violine/g,"Bratsche"]]},cello:{en:[[/violinists/g,"cellists"],[/violinist/g,"cellist"],[/Violin/g,"Cello"],[/violin/g,"cello"]],de:[["Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.","Du hörst das Cello so, wie es gespielt wurde, mit dem Klavier, und die Noten laufen mit."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Spiel zuerst mit dem Cello mit, dann schalte es aus und übernimm."],[/Geigerinnen und Geiger/g,"Cellistinnen und Cellisten"],[/großer Geiger/g,"großer Cellisten"],[/Geigenstimme|Violinstimme/g,"Cellostimme"],[/Violinstücke/g,"Cellostücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Cello`],[/Meine (Geige|Violine)/g,"Mein Cello"],[/die (Geige|Violine)/g,"das Cello"],[/der (Geige|Violine)/g,"dem Cello"],[/Geige|Violine/g,"Cello"]]},recorder:{en:[["Rosining the bow…","Warming up the recorder…"],["Polishing the strings…","Checking the finger holes…"],["Tip: try a little vibrato on the long notes.","Tip: hold the long notes still and even."],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins gently, without letting the pitch drift."],["Tip: keep the trilling finger light and close to the string.","Tip: keep the trilling finger light and close to its hole."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Give each one a clear start with the tongue."],["Tip: keep the bow on the string so every note sounds.","Tip: cover the holes fully so every note sounds."],["Tip: check your intonation against the open strings.","Tip: blow gently: too much air makes the notes sharp."],...An.en,[/violinists/g,"recorder players"],[/violinist/g,"recorder player"],[/Violin/g,"Recorder"],[/violin/g,"recorder"]],de:[["Bogen wird kolophoniert…","Die Blockflöte wird warm gespielt…"],["Saiten werden poliert…","Grifflöcher werden geprüft…"],["Bogen weiter!","Weiter blasen!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Blas sanft: Zu viel Luft macht die Töne zu hoch."],["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Halte die langen Töne ruhig und gleichmäßig."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Halte den Atem ruhig durch die langen Töne."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln behutsam, ohne dass die Tonhöhe wandert."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Halte den Trillerfinger locker und nah am Griffloch."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Stoß jeden Ton klar mit der Zunge an."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Deck die Löcher ganz ab, damit jeder Ton klingt."],...An.de,[/Geigerinnen und Geiger/g,"Blockflötistinnen und Blockflötisten"],[/großer Geiger/g,"großer Blockflötisten"],[/Geigenstimme|Violinstimme/g,"Blockflötenstimme"],[/Violinstücke/g,"Blockflötenstücke"],[/Geige|Violine/g,"Blockflöte"]]},voice:{en:[["Rosining the bow…","Warming up the voice…"],["Polishing the strings…","Clearing the throat…"],["Ling Ling is watching. Pick up the violin!","Ling Ling is listening. Warm up your voice!"],["Tip: shape the hairpins: grow and fade with the bow.","Tip: shape the hairpins: grow and fade with your breath."],["Tip: keep the trilling finger light and close to the string.","Tip: keep trills light and even."],["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: some notes weren’t heard. Sing them out clearly."],["Tip: keep the bow on the string so every note sounds.","Tip: start each note clearly so every one sounds."],["Tip: check your intonation against the open strings.","Tip: check your pitch against the piano."],["Tip: check the fingering where the wrong notes were.","Tip: sing the places with wrong notes slowly, with the piano."],["Wonderfully accurate fingers.","Wonderfully accurate."],["Play along with the violin first, then switch it off and take over.","Sing along with the melody first, then switch it off and take over."],...An.en,["Keep the air going!","Keep the breath going!"],[/violinists/g,"singers"],[/violinist/g,"singer"],[/Violin/g,"Voice"],[/violin/g,"voice"]],de:[["Bogen wird kolophoniert…","Die Stimme wird aufgewärmt…"],["Saiten werden poliert…","Noch ein Schluck Wasser…"],["Bogen weiter!","Weiter singen!"],["Ling Ling schaut zu. Nimm die Violine in die Hand!","Ling Ling hört zu. Sing dich ein!"],["Tipp: Prüf deine Intonation an den leeren Saiten.","Tipp: Prüf deine Tonhöhe am Klavier."],["Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Stütz die langen Töne mit ruhigem Atem."],["Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Gestalte die Gabeln: mit dem Atem wachsen und abklingen."],["Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Sing Triller leicht und gleichmäßig."],["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Manche Töne waren nicht zu hören. Sing sie klar aus."],["Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Setz jeden Ton klar an, damit er klingt."],["Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Sing zuerst mit der Melodie mit, dann schalte sie aus und übernimm."],...An.de,[/Geigerinnen und Geiger/g,"Sängerinnen und Sänger"],[/großer Geiger/g,"großer Sänger"],[/Geigenstimme|Violinstimme/g,"Gesangsstimme"],[/Violinstücke/g,"Lieder"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}eine Stimme`],[/Meine (Geige|Violine)/g,"Meine Stimme"],[/(die|der) (Geige|Violine)/g,"$1 Stimme"],[/Geige|Violine/g,"Gesang"]]}};({...It.violin});vc.any={en:[[/violinists/g,"musicians"],[/violinist/g,"musician"],[/Violin/g,"Instrument"],[/violin/g,"instrument"],[/([Aa]) (?=[Ii]nstrument)/g,"$1n "]],de:[[/Geigerinnen und Geiger/g,"Musikerinnen und Musiker"],[/großer Geiger/g,"großer Musiker"],[/Geigenstimme|Violinstimme/g,"Solostimme"],[/Violinstücke/g,"Stücke"],[/[Dd]eine (Geige|Violine)/g,t=>`${t[0]}ein Instrument`],[/Meine (Geige|Violine)/g,"Mein Instrument"],[/die (Geige|Violine)/g,"das Instrument"],[/der (Geige|Violine)/g,"dem Instrument"],[/Geige|Violine/g,"Instrument"]]};const Hi="";function bp(t,e,n){var o;const i=((o=vc[e.id])==null?void 0:o[n])??[],r=i.find(([a])=>a===t);if(r)return r[1];let s=t.split("violinhero.crescendu.com").join(new URL(e.app.url).host).split("Violin-Hero").join(Hi).split("Violin Hero").join(Hi);for(const[a,c]of i)typeof a!="string"&&(s=s.replace(a,c));return s.split(Hi).join(e.app.name)}function Fn(t,e,n){return typeof t=="string"?bp(t,e,n):typeof t=="function"?(...i)=>Fn(t(...i),e,n):Array.isArray(t)?t.map(i=>Fn(i,e,n)):t&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype?Object.fromEntries(Object.entries(t).map(([i,r])=>[i,Fn(r,e,n)])):t}const go=new WeakMap;function wp(t,e){const n=ut();if(n===It.violin)return t;let i=go.get(t);i||go.set(t,i=new Map);const r=`${n.id}/${e}`;return i.has(r)||i.set(r,Fn(t,n,e==="de"?"de":"en")),i.get(r)}const it=(t,e,n)=>`${t} ${t===1?e:n}`,Ie=["Romantik","diese Musik","Klassik","Barock","Volksmusik","Fiddle-Musik","Klezmer","diesen Stil"],yo=(t,e)=>[t&&it(t,"Glissando","Glissandi"),e&&it(e,"Schleifer","Schleifer")].filter(Boolean).join(", "),bt=(t,e)=>t.toFixed(e).replace(".",","),vp={versionTitle:(t,e)=>`Version ${t}, Commit ${e}`,darkMode:"Dunkles Design",lightMode:"Helles Design",themeMenu:"Aussehen: hell oder dunkel, Farben",schemes:{blue:"Ozean",violet:"Pflaume",teal:"Lagune",rose:"Himbeere",graphite:"Graphit"},helpTitle:"Anleitung (?)",helpLabel:"Anleitung zu Violin Hero",tools:{key:"Werkzeuge",title:"Werkzeuge: Stimmgerät und mehr",tuner:"Stimmgerät",tunerLead:"Geige stimmen",setup:"Audio-Einrichtung",setupLead:"Mikrofon und Lautsprecher, Eingangspegel, Verzögerung",more:"Mehr Werkzeuge",moreLead:"Werkzeuge wie den Vibralizer im Marketplace hinzufügen",moduleFailed:"Dieses Werkzeug ließ sich nicht laden. Prüf deine Verbindung und versuch es noch einmal.",close:"Schließen"},marketTitle:"Violin Hero Marketplace: mehr Content Packs",overlay:{marketplace:"Content Packs und Tools für Violin Hero",halloffame:"Die besten Aufnahmen, Spieler und Stücke",close:"Zurück zu Violin Hero"},languageTitle:t=>`Sprache: ${t}`,languageMenu:"Sprache wählen",tempo:"Tempo",click:"Klick",metronome:"Metronom",practice:"Üben",fullscreen:"Seitenansicht der Geigenstimme",leaveFullscreen:"Zurück zur normalen Ansicht (Esc)",dragBar:"Ziehen, um die Leiste zu verschieben",pageSize:"Notengröße",pageSizes:{small:"Klein: mehr Takte pro Zeile",medium:"Mittel",large:"Groß: besser lesbar und leichter zu bearbeiten"},piano:"Klavier",pianoModel:"Instrument",staves:"Noten",violin:"Violine",humanize:"Ausdruck",reverb:"Hall",volume:"Lautstärke",pianos:{grand:"Flügel",upright1:"Klavier 1",upright2:"Klavier 2"},startStop:"Wiedergabe",play:"Start",pause:"Pause",playTitle:"Start / Pause (P; Doppelklick: zurück zum Anfang)",navigation:"Navigation",back:"Zurück",forward:"Vor",backTitle:"Einen Takt zurück (Doppelklick: zum Anfang)",forwardTitle:"Einen Takt vor (Doppelklick: zum Ende)",take:"Aufnahme",record:"Aufnehmen",stop:"Stopp",recordTitle:"Aufnehmen (R)",finishMarking:"Erst das Bezeichnen abschließen (Esc)",clear:"Löschen",sure:"Sicher?",clearTitle:"Aufnahme löschen",clearConfirmTitle:"Noch einmal drücken, um die Aufnahme zu löschen",share:"Teilen",shareTitle:"Deine Aufnahme teilen",shareScoreTitle:"Deine Einrichtung dieses Stücks teilen (als Link)",section:"Abschnitt",marker:"Marke",markerTitle:"Einen Abschnitt markieren (M)",repeat:"Wiederholen",repeatTitle:"Den Abschnitt wiederholen (L; Doppelklick: zu seinem Anfang)",input:"Eingang",inputGain:"Eingangspegel",level:"Schwierigkeitsgrad",levels:["Anfänger","Leicht","Mittel","Fortgeschritten","Virtuos"],genre:"Genre",allGenres:"Alle",allLevels:"Alle",genres:{early:"Alte Musik",baroque:"Barock",classical:"Klassik",romantic:"Romantik",modern:"Moderne & Gegenwart",concertos:"Konzerte",sonatas:"Sonaten",showpieces:"Virtuosenstücke",salon:"Salonstücke",dances:"Tänze",opera:"Oper & Operette",sacred:"Geistliche Musik",etudes:"Etüden",carols:"Weihnachten",wedding:"Hochzeit",children:"Kinderlieder",folk:"Volkslieder",celtic:"Keltisch & Fiddle",bluegrass:"Bluegrass & Country",hungarian:"Ungarisch & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & Swing",film:"Film- & Spielmusik",pop:"Pop, Rock & Musical"},piece:"Stück",placeOf:(t,e)=>`${t} von ${e}`,scoreLabel:"Noten",scorePdfTitle:"Die Violinstimme als PDF, zum Drucken oder Herunterladen",fingeringsBy:t=>`Noten wurden eingerichtet von ${t}`,fingeringsAdded:"Noten wurden eingerichtet",pieceCount:t=>t?it(t,"Stück","Stücke"):"Keine Stücke",lockedCount:t=>`${t} gesperrt`,noneUnlocked:"keins freigeschaltet",noPieces:"Hier gibt es keine Stücke: probier einen anderen Schwierigkeitsgrad",interpretation:"Interpretation",defaultWritten:"Standard",defaultNone:"Keine Interpretationen",recordings:"Aufnahmen",recordingsNone:"Keine",recordingsEmpty:"Noch keine Aufnahmen",you:"Du",loop:"Schleife",playTake:(t,e)=>`Deine Aufnahme abspielen (${t}, ${e})`,stopRecording:"Die Aufnahme anhalten",playRecording:(t,e)=>`Die Aufnahme abspielen (${t}${e?", auf YouTube":""})`,chooseRecording:"Wähle eine Aufnahme, um sie abzuspielen",hints:{playPause:"Start / Pause",record:"aufnehmen",bar:"Takt",marker:"Marke",repeat:"wiederholen",violin:"Violine",piece:"Stück",yourTake:"deine Aufnahme",recording:"Aufnahme",help:"Hilfe"},panels:{navigation:"Transport",playback:"Einstellungen",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Einst.",repertoire:"Rep."},panelOpen:t=>`${t} zeigen`,panelClose:t=>`${t} ausblenden`,controls:"Steuerung",stopVideo:"Das Video anhalten",resizeVideo:"Ziehen, um die Größe des Videos zu ändern",flags:{loadingRecording:"Aufnahme lädt",aligning:(t,e)=>t==="spectrum"?`Spektrum wird analysiert ${e} %`:t==="aligning"?`Tempo wird erkannt: ${e} % der Noten`:`Klaviertöne werden abgeglichen ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violine stummgeschaltet",pianoOff:"Klavier stummgeschaltet",rec:"Rec",yourTake:"▶ Deine Aufnahme",takeOf:t=>`▶ Aufnahme von ${t}`,repeat:"Wiederholung",loadingSounds:"Klänge laden",loadingPiano:"Klaviersound laden",loadingViolin:"Violine lädt",noMicrophone:"Kein Mikrofon",savingToAccount:"Wird in deinem Benutzerkonto gespeichert",savedToAccount:"✓ In deinem Konto gespeichert",keptForLater:"Im Speicher: wird später in deinem Konto gespeichert",openingTake:"Deine Aufnahme lädt",takeNotOpened:"Deine Aufnahme konnte nicht geladen werden",syncing:t=>`${it(t,"Aufnahme wird","Aufnahmen werden")} in deinem Konto gespeichert`,synced:t=>`✓ ${it(t,"Aufnahme","Aufnahmen")} in deinem Konto gespeichert`,sharing:"Link zu deiner Aufnahme wird erstellt",shareFailed:"Die Aufnahme konnte nicht geteilt werden",signInToShare:"Melde dich an, um deine Aufnahmen zu teilen",openingShared:"Freigegebene Aufnahme lädt",sharedNotOpened:"Die freigegebene Aufnahme konnte nicht geladen werden",tapToPlay:"Tippe irgendwo, um abzuspielen",speakersHeard:"Klavier im Mikrofon gehört: nimm Kopfhörer",phoneMode:"Bluetooth-Headset im Telefonmodus: nimm Kopfhörer mit Kabel oder das eingebaute Mikrofon"},messages:{soundsFailed:"Die Sounds konnten nicht geladen werden",scoreFailed:"Die Noten konnten nicht geladen werden",pianoFailed:"Das Klavier konnte nicht geladen werden",recordingFailed:"Die Aufnahme konnte nicht geladen werden",noTimingYet:t=>`Noch kein Timing: braucht ${t}`,noTimingVideo:"Kein Timing für dieses Video",videoFailed:"Das Video konnte nicht geladen werden",loadingScore:"Noten laden…",engraving:"Noten werden gesetzt…"},edited:"↺ Bearbeitet",revertQuestion:"Zurücksetzen?",editedTitle:"Bearbeitet: klicken, um alle Änderungen zu verwerfen",revertConfirmTitle:"Noch einmal klicken, um alle Änderungen zu verwerfen",versionClearTitle:"Die Einrichtung dieser Version verwerfen",versionClearConfirmTitle:"Noch einmal klicken, um alle Einrichtungen dieser Version zu verwerfen",curveDefault:"Standard",curveDefaultTitle:"Wie notiert, mit Ausdruck",curveRecordingTitle:t=>`Die Aufnahme: ${t}`,wrongNote:"Falscher Ton!",noteMissed:"Ton fehlt!",wrongShort:"Falsch",missedShort:"Fehlt",stickerTimeShort:t=>`${bt(t,2)} s`,stickerPitch:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,stickerPitchTitle:(t,e)=>`${e?"Zu hoch":"Zu tief"}: ${t}`,stickerTime:(t,e)=>`${bt(t,2)} s zu ${e?"spät":"früh"}`,annotate:"Die ausgewählten Noten bezeichnen",notesSelected:t=>it(t,"Note","Noten"),finger:t=>`Finger ${t}`,openString:"Leere Saite (0)",downBow:"Abstrich",upBow:"Aufstrich",staccato:"Staccato",accent:"Akzent",tenuto:"Tenuto",harmonic:"Flageolett",dynamicTitle:t=>`Dynamik: ${t}`,fermata:"Fermate",slur:"Bindebogen",crescendo:"Crescendo (<)",diminuendo:"Decrescendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Nicht solange eine Aufnahme gewählt ist: sie passt nur zu ihrem Timing",revert:"Zurücksetzen",revertTitle:"Zurück zu den Zeichen in den Noten",fx:{boo:["Buh!","Autsch!","Huch!","Hoppla!","Igitt!"],late:["Zu spät!","Aufwachen!","Zu langsam!"],early:["Warte!","Zu früh!","Halt!"],short:["Zu kurz!","Länger halten!","Bogen weiter!"],surf:["Welle!","Cowabunga!","Reite sie!"],snowboard:["Yeah!","Cooler Slide!","Wusch!"],ski:["Juhu!","Abfahrt!","Wusch!"],penguin:["Juhuu!","Bauchrutscher!","Rutsch!"],tweet:"Piep!",buzz:"Summ!",trill:"Trrriller!",chirp:"Zirp!",vibrato:["Vibrato!","So warm!","Herrlich!","Es singt!"]},signIn:"Anmelden",signedInAs:t=>`Angemeldet als ${t}`,createAccount:"Konto erstellen",createAccountButton:"Konto erstellen",haveAccount:"Schon ein Konto? Anmelden",forgotPassword:"Passwort vergessen?",or:"oder",google:"Mit Google anmelden",agree:["Wenn du fortfährst, stimmst du unseren "," zu und hast unsere "," gelesen."],termsName:"Nutzungsbedingungen",privacyName:"Datenschutzerklärung",close:"Schließen",email:"E-Mail",password:"Passwort",passwordHint:t=>`Mindestens ${t} Zeichen`,accountLead:t=>`Violin Hero funktioniert auch ohne Konto. Angemeldet werden deine Aufnahmen in deinem Konto gespeichert${t?`, auch ${t===1?"die Aufnahme":`die ${t} Aufnahmen`}, die in diesem Browser warten`:""}.`,enterEmailFirst:"Gib zuerst deine E-Mail-Adresse ein.",resetSent:t=>`Wir haben dir einen Link zum Zurücksetzen an ${t} geschickt.`,confirmEmail:"Bitte bestätige deine E-Mail-Adresse: Der Link ist in deinem Posteingang.",anonymous:"Anonym",save:"Speichern",nicknameTaken:t=>`„${t}“ ist schon vergeben. Probier einen anderen!`,nicknameInvalid:"Ein Spitzname darf kein „/“ enthalten.",pickNickname:"Spitznamen wählen",nicknameDialog:{title:"Wähl deinen Spitznamen",lead:"Er steht bei deinen Aufnahmen in den Bestenlisten und der Hall of Fame. Andere sehen nur diesen Namen, also nimm einen, der öffentlich sein darf.",label:"Spitzname",save:"Spitznamen speichern",later:"Später"},signOut:"Abmelden",profile:"Profil",creatorDashboard:"Dein Creator-Dashboard",invite:"Freund oder Freundin einladen",inviteCopied:"Link kopiert: schick ihn weiter!",inviteFailed:"Der Link ließ sich nicht kopieren",inviteText:"Üb mit mir in Violin Hero: spiel mit dem Klavier, sieh, wie sauber du spielst, und nimm dich auf.",feedback:"Feedback & Fehler melden",hintTitle:"Melde dich an, um deine Aufnahmen und deine Fortschritte zu speichern",scoreHintTitle:"Melde dich an, um Noten zu drucken",scoreHintText:"Druckbare Noten mit deinen Fingersätzen und Zeichen gibt es für angemeldete Spieler.",shareHintTitle:"Melde dich an, um deine Einrichtung zu teilen",shareHintText:"Deine Fingersätze, Striche und Dynamik bekommen einen eigenen Link: Schick ihn deiner Lehrkraft oder deinem Pultnachbarn.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"deine",shareScoreDone:{headlines:[["Link kopiert!","Deine Einrichtung kann geteilt werden."],["Ab damit!","Deine Fingersätze und Dynamik haben jetzt einen eigenen Link."],["Bereit zum Teilen!","Selbst eingerichtete Noten: Das ist echte Musikalität."]],ready:["Dein Link","Kopier ihn, und deine Einrichtung kann geteilt werden."],anywhere:"Schick ihn, wie du magst. Wer ihn öffnet, bekommt das Stück mit deinen Fingersätzen, Strichen und deiner Dynamik, unter deinem Namen bei seinen Stücken.",who:["Deine Lehrkraft","Dein Pultnachbar","Dein Orchester","Deine Freunde"],cheers:["Gute Fingersätze sind ein Geschenk: Gib sie weiter.","Deine Lehrkraft wird sehen wollen, wie du über die Musik denkst.","Ling Ling richtet jede Stimme ein. Jetzt du auch.","Geteilte Einrichtung, weniger falsche Töne, mehr Musik."]},sharedScore:{sharedBy:t=>`${t} hat die Einrichtung mit dir geteilt`,sharedByAnyone:"Jemand hat die Einrichtung mit dir geteilt",yours:"Deine eigene Einrichtung",you:"deine",someone:"geteilt",intro:"Eingerichtete Noten zum Üben: Fingersätze, Striche und Dynamik an den Noten, so gespielt wie eingetragen.",kinds:{fingerings:"Fingersätze",bowings:"Striche",articulations:"Artikulationen",dynamics:"Dynamik",phrasing:"Bögen, Fermaten und rit."},cheers:["Voneinander lernen: So wachsen Musiker.","Jemand hat beim Einrichten an dich gedacht.","Neue Fingersätze, neue Ideen: Probier sie aus!","Gemeinsam üben, auch aus der Ferne."],open:"Noten öffnen",later:"Nicht jetzt",addedAs:(t,e)=>`Bei deinen Stücken als „${t} – ${e}“ neben dem Original.`},hintText:t=>`${t>1?`${t} Aufnahmen warten`:"Deine Aufnahme wartet"} in diesem Browser, bis du dich anmeldest, und ${t>1?"werden":"wird"} dann in deinem Konto gespeichert, mit den Stücken, die du freigeschaltet hast.`,hintDismiss:"Nicht mehr anzeigen",graphShow:"Tempo- und Lautstärkekurve zeigen",graphHide:"Tempo- und Lautstärkekurve ausblenden",logoHintTitle:"Deine Startseite ist hier oben",startPage:"Zur Startseite",logoHintText:"Tipp auf das Violin-Hero-Symbol, um die Startseiten wieder zu öffnen: Geige stimmen und ein Stück wählen.",recordHints:["Noch ein Versuch? Starte eine neue Aufnahme!","Jede Aufnahme bringt dich dem nächsten Stück näher. Gleich noch eine!","Übung macht den Meister: Tipp hier für eine neue Aufnahme."],navHintTitle:"Takt für Takt",navHintText:"Zurück und Vor springen jeweils einen Takt, so hörst du eine Stelle noch einmal. Oder zieh die Noten.",pageHintTitle:"Da gibt es noch mehr",pageHintText:"Schließ hier die Seitenansicht: In der normalen Ansicht findest du alle Stücke, Aufnahmen großer Geiger zum Mitspielen, deine Aufnahmen und die Einstellungen.",guide:{passed:"Super! Weiter zum nächsten Stück",passedLead:t=>`${t} wartet auf dich.`,again:"Noch eine Aufnahme?",againLead:(t,e)=>e===1?`Erreiche ${t} % oder nimm noch einmal auf, dann öffnet sich das nächste Stück.`:`Erreiche ${t} % oder nimm noch ${e}-mal auf, dann öffnet sich das nächste Stück.`,allDone:"Du hast alle Einstiegsstücke gespielt!",allDoneLead:"In der normalen Ansicht findest du die ganze Bibliothek, Aufnahmen großer Geiger und mehr.",play:t=>`${t} spielen`,recordAgain:"Noch mal aufnehmen",onceMore:"Noch einmal",tryOther:t=>`${t} probieren`,toNormal:"Zur normalen Ansicht",leave:"Keine Vorschläge mehr"},auth:{wrongPassword:"E-Mail oder Passwort falsch.",emailInUse:"Mit dieser E-Mail gibt es schon ein Konto: melde dich stattdessen an.",weakPassword:t=>`Das Passwort braucht mindestens ${t} Zeichen.`,invalidEmail:"Diese E-Mail-Adresse sieht nicht richtig aus.",tooMany:"Zu viele Versuche: bitte warte einen Moment und versuch es noch einmal.",popupClosed:"Das Google-Fenster wurde vor der Anmeldung geschlossen.",popupBlocked:"Der Browser hat das Google-Fenster blockiert: erlaube Pop-ups für diese Seite.",unauthorizedDomain:"Die Anmeldung ist für diese Adresse noch nicht freigeschaltet.",network:"Keine Verbindung: prüfe dein Netzwerk und versuch es noch einmal.",failed:t=>`Das hat nicht geklappt (${t}).`},deleteTake:{title:"Diese Aufnahme löschen?",account:"Sie wird endgültig aus deinem Konto gelöscht: die Aufnahme und alles, was mit ihr gespeichert ist.",ranked:"Sie steht auch in der Bestenliste dieses Stücks: Sie wird daraus entfernt, für alle.",place:t=>`Sie steht auf Platz ${t} der Bestenliste: Sie wird daraus entfernt, für alle.`,keepsProgress:"Die Stücke, die du freigeschaltet hast, bleiben freigeschaltet.",confirm:"Löschen",cancel:"Behalten",deleting:"Wird gelöscht…",failed:"Die Aufnahme konnte nicht gelöscht werden. Bitte versuch es noch einmal."},shareDone:{headlines:[["Link kopiert!","Deine Aufnahme ist bereit, gehört zu werden."],["Ab die Post!","Deine Aufnahme hat jetzt ihren eigenen Link."],["Bereit zum Teilen!","Sei stolz darauf: Das hast du gespielt."]],ready:["Dein Link","Kopiere ihn, und deine Aufnahme ist bereit, gehört zu werden."],anywhere:"Schick ihn, wie du magst: per Nachricht, E-Mail oder Chat. Wer ihn öffnet, hört deine Aufnahme mit dem Klavier, genau so, wie du gespielt hast.",who:["Deine Lehrerin oder dein Lehrer","Deine Eltern","Oma und Opa","Deine Freunde"],cheers:["Jede Aufnahme, die du teilst, ist ein kleines Konzert.","Deine Lehrkraft hört bestimmt gern, wie du übst.","Ling Ling teilt jede Aufnahme. Na gut, die guten. Diese zählt.","Musik ist zum Zuhören da. Lass sie dich hören!"],playedAlong:"Mitgespielt zu",copy:"Kopieren",copyAgain:"Noch mal kopieren",copiedAgain:"✓ Kopiert",done:"Fertig",text:t=>`Hör mal, wie ich ${t} in Violin Hero spiele!`},install:{title:"Installiere Violin Hero als App",tap:"Tippe auf",share:"Teilen",then:"dann",add:"Zum Home-Bildschirm",openInSafari:"Öffne diese Seite in Safari, tippe auf",chromeToo:"Neuere Chrome-Versionen haben es auch unter dem Teilen-Symbol in der Adressleiste.",close:"Schließen"},practiceTips:{title:"Übetipps",video:"Video ansehen",videoTitle:"Öffnet das Video auf YouTube, in einem neuen Tab",start:"Jetzt starten",close:"Schließen",open:"Übetipps",openTitle:"Die Übetipps zu diesem Stück zeigen",festiveTitle:"Weihnachtliche Übetipps",festiveLead:"Es ist Weihnachtszeit, die schönste Zeit für dieses Stück: Üb es jetzt und spiel es unterm Baum für Familie und Freunde."},headphones:{title:"Setz Kopfhörer mit Kabel auf",wired:"Mit Kabel:",wiredWhy:"das Mikrofon hört nur deine Violine.",speakers:"Lautsprecher:",speakersWhy:"das Klavier wird mit aufgenommen.",bluetooth:"Bluetooth:",bluetoothWhy:"verzögert und kann deine Aufnahme verzerren.",gotIt:"Verstanden!",appleAdapter:"Nimm Apples eigenen 3,5-mm-Adapter: andere können verstummen."},welcome:{loading:["Bogen wird kolophoniert…","Das Klavier wird gestimmt…","Noten werden ausgepackt…","Das Orchester wärmt sich auf…","Saiten werden poliert…","Das Licht wird gedimmt…"],progress:t=>`${t} %`,loadingFailed:"Manche Klänge ließen sich nicht laden. Prüfe deine Verbindung.",continueAnyway:"Trotzdem weiter",begin:"Los geht’s",skipIntro:"Intro überspringen",beginNote:"Dein Browser fragt nach dem Mikrofon, damit Violin Hero deine Geige hören kann.",hearString:t=>`${t} anhören`,stopTone:"Ton aus",byEar:"Nach Gehör stimmen: Die Schwebung wird langsamer, je näher du kommst",tuner:"Stimmgerät",level:"Pegel",gain:"Eingang",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t).toLocaleString("de")} dB`,gainTitle:"Die Verstärkung des Mikrofons: so einstellen, dass deine lautesten Töne den grünen Bereich erreichen (Doppelklick: +12 dB)",cal:{key:"Kalibrieren",keyTitle:"Die Verzögerung von den Lautsprechern zum Mikrofon messen, damit deine Aufnahmen genau zum Klavier passen",ms:t=>`${t} ms`,title:"Verzögerung kompensieren",lead:"Jedes Gerät braucht etwas Zeit, um einen Ton abzuspielen und aufzunehmen. Violin Hero spielt ein paar Klicks und hört auf sie, damit deine Aufnahmen genau zum Klavier passen.",speakers:"Steck die Kopfhörer ein, mit denen du spielst, und dreh die Lautstärke auf.",micOn:"Halt eine Hörmuschel direkt an das Mikrofon deines Geräts.",quiet:"Sei ein paar Sekunden still, während die Klicks spielen.",measuring:(t,e)=>`Ich höre zu … Klick ${t} von ${e}`,sent:"gespielt",heard:"gehört",result:t=>`Verzögerung: ${t} ms`,applied:"Deine Aufnahmen und deine Linie werden jetzt danach ausgerichtet.",notHeard:"Die Klicks waren nicht zu hören.",unsteady:"Die Klicks kamen ungleichmäßig an.",tryAgain:"Dreh die Lautstärke auf, halt die Hörmuschel direkt ans Mikrofon, sei still und versuch es noch einmal.",needMic:"Dafür braucht es das Mikrofon: erlaube es zuerst.",back:"Fertig",start:"Messung starten",again:"Noch einmal messen",newMeasurement:"Neue Messung",save:"Speichern"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Mikrofon",inputTitle:"Der verwendete Eingang, wie dein System ihn nennt; bei Stereo der Pegel jeder Seite",setupTitle:"Audio-Einrichtung",inputDevice:"Mikrofoneingang",outputDevice:"Kopfhörerausgang",systemDefault:"Systemstandard",sidesTitle:"Jede Seite des Eingangs für sich: eine stumme oder rauschende Seite zeigt sich hier",loudHint:"Spiel deine lautesten Töne: Der Balken sollte den grünen Bereich erreichen.",newInput:t=>`Neuer Eingang: ${t}`,useInput:"Verwenden",levelTitle:"Der Eingangspegel: deine lautesten Töne im grünen Bereich ergeben eine saubere Aufnahme; im roten verzerren sie",startTuning:"Stimmen starten",micWhy:"Violin Hero hört dir über das Mikrofon zu.",micAsking:"Erlaube das Mikrofon in deinem Browser…",micDenied:"Kein Mikrofon. Erlaube es im Browser, um zu stimmen und aufzunehmen.",playString:t=>`Spiel deine ${t}-Saite`,tuneUp:"Höher stimmen",tuneDown:"Tiefer stimmen",inTune:"Sauber!",offBy:(t,e)=>`${t} ¢ zu ${e?"hoch":"tief"}`,wrongString:(t,e)=>`Das klingt nach deiner ${t}-Saite. Spiel die ${e}.`,farOff:"Weit daneben: langsam drehen und hinhören",stringTitle:t=>`Die ${t}-Saite stimmen`,aDone:t=>`Dein ${t} ist sauber!`,others:t=>`Jetzt ${t.length>1?`${t.slice(0,-1).join(", ")} und ${t[t.length-1]}`:t[0]}, oder du stimmst sie selbst.`,skip:"Die anderen stimme ich selbst",alreadyInTune:"Meine Geige ist schon gestimmt",closeTool:"Fertig",allDone:"Alle vier Saiten sauber. Wunderbar!",next:"Weiter",ready:"Bereit?",firstPiece:"Dein erstes Stück",firstPieceLead:"Leicht zum Einstieg, schön zu spielen. Neue Stücke werden freigeschaltet, wenn du dieses Stück gut kannst.",accountTitle:"Behalte, was du spielst",accountLead:"Kostenlos: deine Aufnahmen und dein Fortschritt, auf jedem Gerät.",signIn:"Anmelden",signedIn:t=>`Angemeldet als ${t}: deine Aufnahmen und dein Fortschritt werden gespeichert.`,offline:"Offline: deine Aufnahmen warten auf diesem Gerät und werden gespeichert, sobald du wieder online bist.",go:"Bogen hoch!",goNote:"Zwei Takte zählen dich ein, dann beginnt deine erste Aufnahme.",backToTuner:"Zurück zum Stimmgerät"},deleteAccount:{menu:"Konto löschen…",title:"Dein Konto löschen?",loading:"Was gespeichert ist, wird gesucht…",lead:"Das wird endgültig gelöscht:",nickname:t=>`Dein Spitzname „${t}“`,takes:(t,e)=>`${t===1?"1 Aufnahme":`${t} Aufnahmen`}${e?` (${e} in der Hall of Fame)`:""}, mit ihren geteilten Links`,progress:(t,e)=>`Dein Fortschritt: ${t===1?"1 Stück":`${t} Stücke`} bestanden, ${e===1?"1 Aufnahme":`${e} Aufnahmen`} gezählt`,practice:t=>`Deine Übezeit (${t})`,markings:(t,e)=>`Deine Eintragungen in ${t===1?"1 Stück":`${t} Stücken`}${e?`, ${e} geteilt`:""}`,packsAdded:t=>`Content Packs, die du hinzugefügt hast: ${t}`,packsMade:t=>`Content Packs, die du erstellt hast: ${t}`,creatorProfile:"Dein Creator-Profil",invitations:t=>`Deine Einladungen${t?` (${t} Karma)`:""}`,feedback:(t,e,n)=>`Dein Feedback: ${t===1?"1 Beitrag":`${t} Beiträge`}, ${e===1?"1 Stimme":`${e} Stimmen`}${n?", deine Bewertung":""}`,browser:"Was dieser Browser speichert (Einstellungen, wartende Aufnahmen)",packsBought:t=>`Deine gekauften Content Packs gehen verloren: ${t}. Käufe gehören zu diesem Konto; mit einem neuen Konto müsstest du sie noch einmal kaufen.`,packsKept:t=>`Bleibt erhalten: ${t}. Diese Packs wurden schon hinzugefügt und bleiben daher, mit deinem Creator-Profil.`,creatorStays:"Dein Creator-Profil und deine Content Packs bleiben. Um sie zu löschen, wähl auf der Creator-Seite im Kontomenü „Creator-Daten löschen…“.",login:"Dein Login wird ebenfalls gelöscht.",loginSchool:"Dein Login bleibt: er wird anderswo in Crescendu noch gebraucht.",loginCreator:"Dein Login bleibt, für deine Creator-Daten.",creatorMenu:"Creator-Daten löschen…",creatorTitle:"Deine Creator-Daten löschen?",creatorNothing:"Es lässt sich nichts löschen: Alle deine Content Packs wurden schon hinzugefügt.",creatorLoginPacks:"Dein Login bleibt, für die Content Packs, die schon hinzugefügt wurden.",creatorLoginPlayer:"Dein Login und deine Violin-Hero-Daten bleiben. Um sie zu löschen, wähl in Violin Hero im Kontomenü „Konto löschen…“.",creatorCancel:"Creator-Daten behalten",creatorConfirm:"Creator-Daten löschen",doneCreator:"Deine Violin-Hero-Daten sind gelöscht. Dein Login bleibt für deine Creator-Daten: Lösch sie auf der Creator-Seite, dann geht der Login mit.",creatorDoneLogin:"Deine Creator-Daten und dein Login sind gelöscht. Danke, dass du für Violin Hero erstellt hast!",creatorDoneSchool:"Deine Creator-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",creatorDonePacks:"Die Packs, die niemand hinzugefügt hatte, sind gelöscht. Die anderen bleiben, mit deinem Creator-Profil und deinem Login.",creatorDonePlayer:"Deine Creator-Daten sind gelöscht. Dein Login und deine Violin-Hero-Daten bleiben.",understood:"Mir ist klar, dass sich das nicht rückgängig machen lässt.",cancel:"Konto behalten",confirm:"Alles löschen",deleting:"Wird gelöscht…",steps:{takes:"Deine Aufnahmen werden gelöscht…",library:"Hinzugefügte Packs werden entfernt…",packs:"Deine erstellten Packs werden gelöscht…",profile:"Dein Creator-Profil wird gelöscht…",feedback:"Dein Feedback wird gelöscht…",messages:"Deine Nachrichten und dein Lob werden gelöscht…",rest:"Fortschritt und Übezeit werden gelöscht…",browser:"Dieser Browser wird geleert…",login:"Dein Login wird gelöscht…"},failed:"Es ließ sich nicht alles löschen. Bitte versuch es noch einmal.",doneTitle:"Deine Daten sind gelöscht",doneLogin:"Dein Konto gibt es nicht mehr. Danke, dass du mit Violin Hero geübt hast!",doneSchool:"Deine Violin-Hero-Daten sind gelöscht; dein Login bleibt, da er anderswo in Crescendu noch gebraucht wird.",doneAgain:"Deine Daten sind gelöscht. Um auch den Login zu löschen, melde dich noch einmal an und wähle wieder „Konto löschen“.",ok:"OK"},nextPack:{title:"Du hast das ganze Starter Pack freigeschaltet!",text:"Lust auf mehr? „Beliebte Violinstücke“ hat 25 Lieblingsstücke, von der Méditation bis zum Csárdás, alle sofort offen, sobald du es hinzufügst.",signIn:"Melde dich im Marketplace an, um es hinzuzufügen.",show:"Zeig mir",later:"Später"},packUpdates:{title:t=>t===1?"Ein Inhaltspaket hat ein Update":`${t} Inhaltspakete haben Updates`,untitled:"Inhaltspaket",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Aktualisieren",updating:"Wird aktualisiert…",keep:t=>`Version ${t} behalten`,later:"Später entscheiden",note:"Deine Aufnahmen bleiben in jedem Fall erhalten."},sharedTake:{sharedBy:t=>`${t} hat eine Aufnahme mit dir geteilt`,sharedByAnyone:"Jemand hat eine Aufnahme mit dir geteilt",yours:"Deine eigene Aufnahme, über deinen Link",played:"Gespielt",tempo:"Tempo",originalTempo:"Originaltempo",section:"Abschnitt",playedAlong:"Mitgespielt zu",bars:(t,e)=>`Takte ${t}–${e}`,score:"Punkte",withPiano:"Du hörst die Violine so, wie sie gespielt wurde, mit dem Klavier, und die Noten laufen mit.",listen:"Anhören",playsOnClose:"Die Wiedergabe beginnt, wenn du diese Karte schließt."},unlock:{locked:"Gesperrt: Schalte es frei, indem du Stücke bestehst oder übst",next:"Als Nächstes freischalten",all:"Alle Stücke sind freigeschaltet. Ling Ling wäre stolz!",pass:(t,e)=>`Schaffe ${t} % bei einem Stück, das du noch nicht bestanden hast (mit mindestens ${e} % Tempo)`,thisTake:t=>`Diese Aufnahme: ${t} %`,passedNow:"✓ Bestanden!",passedBefore:"Dieses Stück hast du schon bestanden: probier ein anderes.",or:"oder",signIn:"Melde dich an, damit dein Fortschritt sicher ist, auf jedem Gerät.",takes:t=>`nimm noch ${t} ${t===1?"Aufnahme":"Aufnahmen"} auf`,nudges:["Ling Ling übt 40 Stunden am Tag. Ein paar Aufnahmen mehr schaden nicht!","Üb wie Ling Ling: 40 Stunden am Tag (ein paar Minuten sind ein guter Anfang).","Ling Ling schaut zu. Nimm die Violine in die Hand!","Sei keine Bratsche. Nimm es noch einmal auf!","Emotional Damage? Nein: Emotional Progress!","Jede Aufnahme bringt dich Ling Ling ein Stück näher.","Für Ling Ling auf Schlaf verzichten? Eine Aufnahme mehr reicht schon.","Ling Ling spielt das mit Kater. Du kannst es jetzt spielen!"],title:"Neues Stück freigeschaltet!",titleMany:t=>`${t} neue Stücke freigeschaltet!`,newLevel:t=>`Neuer Schwierigkeitsgrad: ${t}!`,play:"Gleich spielen",later:"Später",cheers:["Ling Ling wäre stolz!","Das ist der 40-Stunden-am-Tag-Geist!","Ling Ling ist einverstanden. Weiter so!","Dein Üben hat sich gelohnt. Auf zum nächsten!","Großartig! Da würde sogar eine Bratsche jubeln."],levelCheers:["Ein ganz neuer Schwierigkeitsgrad! Auch Ling Ling hat mal als Anfänger angefangen.","Level up! Ling Ling wird langsam nervös.","Willkommen auf der nächsten Stufe: Jetzt fängt das echte Üben an!"]},best:(t,e,n)=>`Bestleistung: ${t} · ${e}/${n}`,bestTitle:"Die Bestenliste für dieses Stück zeigen",practising:t=>t===1?"Gerade übt noch 1 Person dieses Stück":`Gerade üben noch ${t} Personen dieses Stück`,invites:["Noch keine Bestleistung: deine Chance, ganz nach oben zu kommen!","Das Treppchen ist leer. Nimm das ganze Stück auf und hol dir Platz eins!","Hier hat noch niemand Punkte geholt. Sei die oder der Erste!","Platz eins ist noch zu haben: erst üben, dann aufnehmen!","Eine leere Bestenliste wartet auf deinen Namen.","Sei die Leistung, die alle anderen schlagen müssen.","Neues Stück, neues Glück: setz die Marke, die es zu schlagen gilt!","Gold ist für dieses Stück noch frei. Hol es dir!"],board:{title:"Bestenliste",of:t=>`Bestenliste für ${t}`,practise:"Los, üben!",you:"du",play:t=>`Aufnahme von ${t} abspielen`,openPodium:t=>`${t===1?"Ein Platz auf dem Treppchen ist":`${t} Plätze auf dem Treppchen sind`} noch frei: Er könnte dir gehören!`,toEnter:t=>`Schaffe mehr als ${t} Punkte, um in die Liste zu kommen.`,onBoard:t=>`Du bist auf Platz ${t}: Schaffst du es noch höher?`,top:"Du bist ganz oben. Kannst du deine eigene Bestleistung schlagen?",signIn:"Melde dich an, damit deine Aufnahmen zählen.",howTo:"Nimm das ganze Stück auf, vom Anfang bis zum Ende, im Originaltempo (100 %), um in die Liste zu kommen.",tips:["Üb zuerst die schweren Takte: markier sie mit der Marke und lass sie wiederholen.","Nimm das Tempo zurück, bis jeder Ton sitzt, und steigere es dann wieder.","Spiel zuerst mit der Violine mit, dann schalte sie aus und übernimm.","Hör dir unter Interpretation eine großartige Aufnahme an und mach sie dir zu eigen."]},yourScore:"Dein Ergebnis",yourScoreOpen:"Dein Ergebnis: ganz anzeigen",yourScoreTitle:"Dein Ergebnis: klicken für die Einzelheiten",outOf:t=>`von ${t}`,stars:t=>`${t} von 5 Sternen`,reportSteps:{next:"Wie geht’s weiter?",done:"Fertig",practise:"Weiter üben",back:"Zurück zur Wertung",title:"Deine nächsten Schritte"},shareSignIn:"Stolz auf diese Aufnahme? Melde dich an, dann kannst du sie teilen: Schick den Link an deine Lehrkraft, deine Familie oder deine Freunde, und sie hören genau, wie du gespielt hast.",unranked:t=>`Mit ${t} % des Tempos gespielt, deshalb zählt diese Aufnahme nicht für die Bestenliste: Nur Aufnahmen mit 100 % zählen. ${t<100?"Arbeite dich bis zum Originaltempo hoch und nimm sie dann noch einmal auf!":""}`,publish:{title:"Diese Aufnahme schafft es in die Hall of Fame!",text:"Veröffentliche sie und deine Aufnahme wird öffentlich: sie steht unter deinem Spitznamen in der Bestenliste dieses Stücks und in der Hall of Fame, und alle können sie dort anhören.",signInText:"Melde dich an, um sie zu veröffentlichen: deine Aufnahme wird dann öffentlich und steht in der Bestenliste dieses Stücks und in der Hall of Fame.",publish:"Veröffentlichen",publishing:"Wird veröffentlicht…",saving:"Wird gespeichert…",signIn:"Anmelden",failed:"Das Veröffentlichen hat nicht geklappt. Bitte versuch es noch einmal.",doneTitle:"Du bist in der Hall of Fame!",doneText:"Deine Aufnahme steht jetzt in der Bestenliste dieses Stücks und in der Hall of Fame.",see:"Ansehen"},topScores:t=>`Bestenliste für ${t}`,scoreHeadline:"Punkte",loading:"Lädt…",noScores:"Für dieses Stück gibt es noch keine Ergebnisse.",thisTake:"(diese Aufnahme)",styleBonus:"Stilbonus",badTaste:"Stilbruch",bonus:"Bonus",penalty:"Abzug",categories:{intonation:"Intonation",timing:"Timing",sound:"Klang",dynamics:"Dynamik",trills:"Triller",missed:"Fehlende Töne",wrong:"Richtige Töne"},details:{nothingHeard:()=>"Nichts gehört",spotOn:()=>"Genau getroffen",centsOff:t=>`Im Schnitt ${t} ¢ daneben`,landedLate:t=>` · ${t} spät angekommen`,noEntries:()=>"Keine Einsätze gehört",earlyLate:(t,e)=>[t&&`${t} zu früh`,e&&`${e} zu spät`].filter(Boolean).join(", "),onTime:()=>"Immer pünktlich",heldShort:t=>`Pünktlich, ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,alsoHeldShort:t=>` · ${t} ${t===1?"lange Note":"lange Noten"} zu kurz`,playedOnly:(t,e)=>` · nur ${t} von ${e} Tönen gespielt`,shaping:t=>`Gestaltung zu ${t} % gefolgt`,allFollowed:t=>`Allen ${t} Wechseln gefolgt`,wrongWay:(t,e)=>`${t} von ${e} in die falsche Richtung`,tooFewNotes:()=>"Zu wenige Töne gehört",trills:(t,e,n)=>`${t} von ${it(e,"Triller","Trillern")}${t?` · ${n.toFixed(0)} Töne/s`:""}`,notesOf:(t,e)=>`${t} von ${e} Tönen`,rightOf:(t,e)=>`${t} von ${e} Tönen richtig`,noneMissed:()=>"Kein Ton fehlt",noneWrong:()=>"Alle Töne richtig",noLongNotes:()=>"Keine langen Töne gehört",vibrato:(t,e)=>`Vibrato auf ${t} von ${e} langen Tönen`,openStrings:()=>"Lange leere Saiten ruhig gehalten",vibratoFast:(t,e)=>` · schnell für ${Ie[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoSlow:(t,e)=>` · langsam für ${Ie[e]} (${String(t).replace(".",",")} pro Sekunde)`,vibratoWide:(t,e)=>` · breit für ${Ie[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · schmal für ${Ie[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · für volle Punkte: ein langsameres Vibrato, ${bt(e,e%1?1:0)}–${bt(n,n%1?1:0)} Schwingungen pro Sekunde in ${Ie[i]} (deins ${String(t).replace(".",",")})`,vibratoFaster:(t,e,n,i)=>` · für volle Punkte: ein schnelleres Vibrato, ${bt(e,e%1?1:0)}–${bt(n,n%1?1:0)} Schwingungen pro Sekunde in ${Ie[i]} (deins ${String(t).replace(".",",")})`,vibratoNarrower:(t,e,n,i)=>` · für volle Punkte: ein schmaleres Vibrato, ${e}–${n} ¢ in ${Ie[i]} (deins ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · für volle Punkte: ein breiteres Vibrato, ${e}–${n} ¢ in ${Ie[i]} (deins ${t} ¢)`,vibratoMore:t=>` · für volle Punkte: Vibrato auf ${t===1?"dem Ton":`den ${t} Tönen`} ohne`,vibratoSteadier:t=>` · für volle Punkte: ${t===1?"einen langen Ton":`${t} lange Töne`} ruhiger halten oder Vibrato spielen`,vibratoOptional:t=>` · in ${Ie[t]} freiwillig`,slidesInStyle:(t,e,n)=>`${yo(t,e)}, stilecht für ${n}`,slidesBadTaste:(t,e,n)=>`${yo(t,e)}: ein Stilbruch für ${n}`},silent:[["Hast du gespielt?","Wir haben keinen einzigen Ton gehört."],["Hallo? Jemand da?","Kein Ton ist bei uns angekommen."],["Stille Nacht?","Das war sehr leise. Zu leise."],["Hast du gespielt?","Ling Ling hat nichts gehört, und Ling Ling hört alles."]],silentTip:"Prüfe, ob das Mikrofon erlaubt ist und sich die Anzeige bei „Eingang“ beim Spielen bewegt.",praise:[[["Brillant!","Das war reif für die Bühne."],["Bravo!","Das Publikum steht auf."],["Herausragend!","Kaum ein Ton daneben."],["Großartig!","Du hast das Stück zum Singen gebracht."]],[["Glückwunsch!","Ein schöner Vortrag."],["Wunderschön!","Es war eine Freude zuzuhören."],["Wunderbar!","Du kennst dieses Stück richtig gut."],["Schön gespielt!","Nur noch ein paar Feinheiten bis perfekt."]],[["Gut gespielt!","Schön gemacht. Ein bisschen Feinschliff, und es glänzt."],["Gute Arbeit!","Das Stück nimmt Gestalt an."],["Prima!","Du bist auf einem guten Weg."],["Solide Aufnahme!","Bleib dran, dann funkelt es."]],[["Gut versucht!","Da geht noch mehr. Probier es noch einmal!"],["Es wird!","Mit jedem Durchgang wird es runder."],["Nicht schlecht!","Noch ein paar Runden, und du hast es."],["Weiter so!","Das Schwerste hast du hinter dir."]],[["Bleib dran!","Jede Aufnahme macht dich besser."],["Guter Anfang!","Nimm das Tempo raus und versuch es noch einmal."],["Nicht aufgeben!","Auch die Großen haben das geübt."],["Übung macht den Meister!","Markier einen schwierigen Takt und wiederhole ihn."]]],highlights:{intonation:["Deine Intonation war der Star dieser Aufnahme.","Wunderbar sauber!","Dein Gehör hat großartige Arbeit geleistet."],timing:["Genau im Takt, von Anfang bis Ende.","Dein Timing war bombenfest.","Du und das Klavier wart perfekt zusammen."],sound:["Was für ein schönes Vibrato!","Deine langen Töne haben richtig gesungen.","Ein warmer, singender Ton."],dynamics:["Deine Dynamik hat die Musik lebendig gemacht.","Schön gestaltet, laut und leise.","Du bist jedem Crescendo und Diminuendo gefolgt."],trills:["Funkelnde Triller, schön schnell!","Deine Triller waren eine Freude: schnell und sauber.","Wie ein Singvogel: schöne Triller."],missed:["Kein einziger Ton ausgelassen.","Jeder Ton war da.","Du hast nie den Faden verloren."],wrong:["Blitzsauber: kein falscher Ton.","Jeder Ton war der richtige.","Wunderbar treffsichere Finger."],glide:["Schöne, ausdrucksvolle Glissandi: ganz romantisch!","Deine Glissandi gaben ihm echte romantische Wärme.","Schönes Portamento, genau richtig für diese Musik."]},tips:{intonation:["Tipp: Stimm die langen Töne gegen das Klavier ab.","Tipp: Spiel die schwierigen Takte langsam und hör auf jeden Ton.","Tipp: Prüf deine Intonation an den leeren Saiten."],timing:["Tipp: Schalte den Klick ein und setz mit dem Schlag ein.","Tipp: Zähl die Pausen laut mit, bevor du einsetzt.","Tipp: Nimm das Tempo zurück und steigere es dann wieder."],sound:["Tipp: Probier ein wenig Vibrato auf den langen Tönen.","Tipp: Führ den Bogen gleichmäßig durch die langen Töne.","Tipp: Lass die langen Töne klingen und singen."],dynamics:["Tipp: Achte auf die p und f und mach den Unterschied größer.","Tipp: Gestalte die Gabeln: mit dem Bogen wachsen und abklingen.","Tipp: Spiel die leisen Stellen wirklich leise, dann lass die lauten heraus."],trills:["Tipp: Üb die Triller langsam und gleichmäßig, dann schneller.","Tipp: Halte den Trillerfinger locker und nah an der Saite.","Tipp: Fang den Triller ruhig an und lass ihn dann immer schneller werden."],missed:["Tipp: Manche Töne waren nicht zu hören. Spiel sie mit vollem Bogen aus.","Tipp: Lass den Bogen auf der Saite, damit jeder Ton klingt.","Tipp: Markier die Takte mit fehlenden Tönen und wiederhole sie."],wrong:["Tipp: Markier die schwierigen Takte und wiederhole sie langsam.","Tipp: Prüf den Fingersatz dort, wo die falschen Töne waren.","Tipp: Spiel die schwere Stelle langsamer, bis jeder Ton stimmt."],glide:["Tipp: Wechsle sauber zwischen den Tönen: kein Rutschen in diesem Stil.","Tipp: In Klassik und Barock die Lagenwechsel sauber und schnell halten.","Tipp: Lass die Glissandi weg: Lagenwechsel ohne Rutschen."]}},rt=(t,e,n)=>`${t} ${t===1?e:n}`,Ae=["Romantic music","this music","Classical music","Baroque music","folk music","fiddle music","klezmer","this style"],bo=(t,e)=>[t&&rt(t,"glissando","glissandi"),e&&rt(e,"slide","slides")].filter(Boolean).join(", "),kp={versionTitle:(t,e)=>`Version ${t}, commit ${e}`,darkMode:"Dark mode",lightMode:"Light mode",themeMenu:"Look: light or dark, colours",schemes:{blue:"Ocean",violet:"Plum",teal:"Lagoon",rose:"Raspberry",graphite:"Graphite"},helpTitle:"How to use (?)",helpLabel:"How to use Violin Hero",tools:{key:"Tools",title:"Tools: tuner and more",tuner:"Tuner",tunerLead:"Tune your violin",setup:"Audio setup",setupLead:"Microphone and speakers, input level, delay",more:"More tools",moreLead:"Add tools like the Vibralizer in the Marketplace",moduleFailed:"This tool could not be loaded. Check your connection and try again.",close:"Close"},marketTitle:"Violin Hero Marketplace: more content packs",overlay:{marketplace:"Content packs and tools for Violin Hero",halloffame:"The best takes, players and pieces",close:"Back to Violin Hero"},languageTitle:t=>`Language: ${t}`,languageMenu:"Choose the language",tempo:"Tempo",click:"Click",fullscreen:"Violin part in full screen mode",leaveFullscreen:"Back to the normal view (Esc)",dragBar:"Drag to move the bar",pageSize:"Score size",pageSizes:{small:"Small: more bars to a line",medium:"Medium",large:"Large: easier to read and to mark up"},metronome:"Metronome",practice:"Practice",piano:"Piano",pianoModel:"Sound",staves:"Staves",violin:"Violin",humanize:"Humanize",reverb:"Reverb",volume:"Volume",pianos:{grand:"Grand",upright1:"Upright 1",upright2:"Upright 2"},startStop:"Start/Stop",play:"Play",pause:"Pause",playTitle:"Play / pause (P; double-click: back to the start)",navigation:"Navigation",back:"Back",forward:"Forward",backTitle:"One bar back (double-click: the start)",forwardTitle:"One bar on (double-click: the end)",take:"Take",record:"Record",stop:"Stop",recordTitle:"Record (R)",finishMarking:"Finish marking up first (Esc)",clear:"Clear",sure:"Sure?",clearTitle:"Clear the take",clearConfirmTitle:"Press again to clear the take",share:"Share",shareTitle:"Share your take",shareScoreTitle:"Share your markings of this piece (a link)",section:"Section",marker:"Marker",markerTitle:"Mark a section (M)",repeat:"Repeat",repeatTitle:"Repeat the section (L; double-click: to its start)",input:"Input",inputGain:"Input gain",level:"Level",levels:["Beginner","Easy","Intermediate","Advanced","Expert"],genre:"Genre",allGenres:"All",allLevels:"All",genres:{early:"Early music",baroque:"Baroque",classical:"Classical",romantic:"Romantic",modern:"Modern & contemporary",concertos:"Concertos",sonatas:"Sonatas",showpieces:"Showpieces",salon:"Salon pieces",dances:"Dances",opera:"Opera & operetta",sacred:"Sacred & hymns",etudes:"Études",carols:"Christmas & carols",wedding:"Wedding",children:"Children’s songs",folk:"Folk songs",celtic:"Celtic & fiddle",bluegrass:"Bluegrass & country",hungarian:"Hungarian & Roma",klezmer:"Klezmer",tango:"Tango & Latin",jazz:"Jazz & swing",film:"Film & game music",pop:"Pop, rock & musicals"},piece:"Piece",placeOf:(t,e)=>`${t} of ${e}`,scoreLabel:"Score",scorePdfTitle:"The violin part as a PDF, to print or download",fingeringsBy:t=>`Score has been marked up by ${t}`,fingeringsAdded:"Score has been marked up",pieceCount:t=>t?rt(t,"piece","pieces"):"No pieces",lockedCount:t=>`${t} locked`,noneUnlocked:"none unlocked",noPieces:"No pieces here: try another level",interpretation:"Interpretation",defaultWritten:"Default",defaultNone:"No interpretations",recordings:"Recordings",recordingsNone:"None",recordingsEmpty:"No recordings yet",you:"You",loop:"Loop",playTake:(t,e)=>`Play your take (${t}, ${e})`,stopRecording:"Stop the recording",playRecording:(t,e)=>`Play the recording (${t}${e?", on YouTube":""})`,chooseRecording:"Choose a recording to play it",hints:{playPause:"play / pause",record:"record",bar:"bar",marker:"marker",repeat:"repeat",violin:"violin",piece:"piece",yourTake:"your take",recording:"recording",help:"help"},panels:{navigation:"Transport",playback:"Settings",repertoire:"Repertoire"},panelsShort:{navigation:"Transp.",playback:"Sett.",repertoire:"Rep."},panelOpen:t=>`Show ${t}`,panelClose:t=>`Hide ${t}`,controls:"Controls",stopVideo:"Stop the video",resizeVideo:"Drag to resize the video",flags:{loadingRecording:"Loading recording",aligning:(t,e)=>t==="spectrum"?`Analysing the spectrum ${e} %`:t==="aligning"?`Detecting the tempo: ${e} % of the score`:`Matching the piano notes ${e} %`,listening:t=>`▶ ${t}`,timing:t=>`Timing ${t}`,violinOff:"Violin muted",pianoOff:"Piano muted",rec:"Rec",yourTake:"▶ Your take",takeOf:t=>`▶ ${t}’s take`,repeat:"Repeat",loadingSounds:"Loading sounds",loadingPiano:"Loading piano",loadingViolin:"Loading violin",noMicrophone:"No microphone",savingToAccount:"Saving to your account",savedToAccount:"✓ Saved to your account",keptForLater:"Kept here: saved to your account later",openingTake:"Loading your take",takeNotOpened:"Your take could not be loaded",syncing:t=>`Saving ${rt(t,"recording","recordings")} to your account`,synced:t=>`✓ ${rt(t,"recording","recordings")} saved to your account`,sharing:"Making a link to your take",shareFailed:"The take could not be shared",signInToShare:"Sign in to share your takes",openingShared:"Loading the shared take",sharedNotOpened:"The shared take could not be loaded",tapToPlay:"Tap anywhere to play",speakersHeard:"Piano heard through the microphone: use headphones",phoneMode:"Bluetooth headset in phone-call mode: use wired headphones or the device’s microphone"},messages:{soundsFailed:"Sounds could not be loaded",scoreFailed:"Score could not be loaded",pianoFailed:"Piano could not be loaded",recordingFailed:"Recording could not be loaded",noTimingYet:t=>`No timing yet: needs ${t}`,noTimingVideo:"No timing for this video",videoFailed:"Video could not be loaded",loadingScore:"Loading score…",engraving:"Engraving…"},edited:"↺ Edited",revertQuestion:"Revert?",editedTitle:"Annotated: click to go back to the score as written",revertConfirmTitle:"Click again to take every annotation off",versionClearTitle:"Take this version’s markings off",versionClearConfirmTitle:"Click again to take every marking of this version off",curveDefault:"Default",curveDefaultTitle:"As written, humanized",curveRecordingTitle:t=>`The recording: ${t}`,wrongNote:"Wrong note!",noteMissed:"Note missed!",wrongShort:"Wrong",missedShort:"Missed",stickerTimeShort:t=>`${t.toFixed(2)} s`,stickerPitch:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,stickerPitchTitle:(t,e)=>`${e?"Too high":"Too low"}: ${t}`,stickerTime:(t,e)=>`${t.toFixed(2)} s ${e?"late":"early"}`,annotate:"Annotate the notes selected",notesSelected:t=>rt(t,"note","notes"),finger:t=>`Finger ${t}`,openString:"Open string (0)",downBow:"Down-bow",upBow:"Up-bow",staccato:"Staccato",accent:"Accent",tenuto:"Tenuto",harmonic:"Harmonic (flageolet)",dynamicTitle:t=>`Dynamic: ${t}`,fermata:"Fermata",slur:"Slur",crescendo:"Crescendo (<)",diminuendo:"Diminuendo (>)",ritardando:"Ritardando (rit.)",timingLocked:"Not while a take is kept: it lines up only with its timing",revert:"Revert",revertTitle:"Back to the marks written in the score",fx:{boo:["Boo!","Ouch!","Yikes!","Oops!","Eek!"],late:["Late!","Wake up!","Too slow!"],early:["Wait!","Too soon!","Hold it!"],short:["Too short!","Hold it longer!","Keep the bow going!"],surf:["Surf's up!","Cowabunga!","Ride it!"],snowboard:["Shred it!","Sick slide!","Whoosh!"],ski:["Whee!","Downhill!","Swoosh!"],penguin:["Wheee!","Belly slide!","Sliiide!"],tweet:"Tweet!",buzz:"Bzzz!",trill:"Trrrill!",chirp:"Chirp!",vibrato:["Vibrato!","So warm!","Lovely!","It sings!"]},signIn:"Sign in",signedInAs:t=>`Signed in as ${t}`,createAccount:"Create an account",createAccountButton:"Create account",haveAccount:"I have an account",forgotPassword:"Forgot your password?",or:"or",google:"Continue with Google",agree:["By continuing you agree to our "," and have read our ","."],termsName:"terms of use",privacyName:"privacy policy",close:"Close",email:"Email",password:"Password",passwordHint:t=>`At least ${t} characters`,accountLead:t=>`Violin Hero works without an account. Signed in, your recordings are saved to your account${t?`, and the ${t===1?"take":`${t} takes`} kept in this browser with them`:""}.`,enterEmailFirst:"Enter your email address first.",resetSent:t=>`We sent a link to reset your password to ${t}.`,confirmEmail:"Please confirm your email address: the link is in your inbox.",anonymous:"Anonymous",save:"Save",nicknameTaken:t=>`“${t}” is already taken. Try another one!`,nicknameInvalid:"A nickname can’t contain “/”.",pickNickname:"Pick a nickname",nicknameDialog:{title:"Pick your nickname",lead:"It shows with your recordings in the top scores and the Hall of Fame. Other players see only this name, so choose one you’re happy to have public.",label:"Nickname",save:"Save nickname",later:"Later"},signOut:"Sign out",profile:"Profile",creatorDashboard:"Your creator dashboard",invite:"Invite a violinist",inviteCopied:"Link copied: send it to a violinist!",inviteFailed:"The link could not be copied",inviteText:"Practise with me on Violin Hero: play along with the piano, see how in tune you are and record your takes.",feedback:"Feedback & bug reports",hintTitle:"Sign in to save your recordings and your progress",scoreHintTitle:"Sign in to print scores",scoreHintText:"Printable scores with your fingerings and marks are for signed-in players.",shareHintTitle:"Sign in to share your markings",shareHintText:"Your fingerings, bowings and dynamics get a link of their own: send it to your teacher or your stand partner.",versionName:(t,e)=>`${t} – ${e}`,yourVersion:"yours",shareScoreDone:{headlines:[["Link copied!","Your markings are ready to be shared."],["Off it goes!","Your fingerings and dynamics now have a link of their own."],["Ready to share!","A score marked up by you: that is real musicianship."]],ready:["Your link","Copy it, and your markings are ready to be shared."],anywhere:"Send it any way you like. Whoever opens it gets the piece with your fingerings, bowings and dynamics, added to their pieces under your name.",who:["Your teacher","Your stand partner","Your orchestra","Your friends"],cheers:["Good fingerings are a gift: pass them on.","Your teacher will love seeing how you think about the music.","Ling Ling marks every score. Now so do you.","Shared markings, fewer wrong notes, more music."]},sharedScore:{sharedBy:t=>`${t} shared their markings with you`,sharedByAnyone:"Someone shared their markings with you",yours:"Your own markings",you:"yours",someone:"shared",intro:"A marked-up score, ready to practise with: their fingerings, bowings and dynamics on the notes, played as marked.",kinds:{fingerings:"fingerings",bowings:"bowings",articulations:"articulations",dynamics:"dynamics",phrasing:"slurs, fermatas and rit."},cheers:["Learning from each other is how musicians grow.","Somebody thought of you while marking this score.","New fingerings, new ideas: give them a try!","Practising together, even apart."],open:"Open the score",later:"Not now",addedAs:(t,e)=>`Added to your pieces as “${t} – ${e}”, beside the original.`},hintText:t=>`${t>1?`${t} takes are`:"Your take is"} kept in this browser until you sign in, then saved to your account, with the pieces you have unlocked.`,hintDismiss:"Don’t show this again",graphShow:"Show the tempo and loudness graph",graphHide:"Hide the tempo and loudness graph",logoHintTitle:"Your start page is up here",startPage:"To the start page",logoHintText:"Tap the Violin Hero icon to open the start screens again: tune your violin and pick a piece.",recordHints:["One more go? Start a new take!","Every take brings the next piece closer. Record another!","Practice makes perfect: tap here for a new take."],navHintTitle:"Step through the bars",navHintText:"Back and Forward jump a bar at a time, so you can hear a passage again. Or drag the score.",pageHintTitle:"There’s more to discover",pageHintText:"Close the page view here: the normal view has all the pieces, recordings of great violinists to play along with, your takes and the settings.",guide:{passed:"Well done! On to the next piece",passedLead:t=>`${t} is waiting for you.`,again:"One more take?",againLead:(t,e)=>e===1?`Reach ${t} %, or record one more take, to open the next piece.`:`Reach ${t} %, or record ${e} more takes, to open the next piece.`,allDone:"You’ve played every starter piece!",allDoneLead:"The normal view has the whole library, recordings of great violinists and more.",play:t=>`Play ${t}`,recordAgain:"Record again",onceMore:"Once more",tryOther:t=>`Try ${t}`,toNormal:"To the normal view",leave:"No more suggestions"},auth:{wrongPassword:"Wrong email or password.",emailInUse:"There is already an account with this email: sign in instead.",weakPassword:t=>`The password needs at least ${t} characters.`,invalidEmail:"That email address doesn’t look right.",tooMany:"Too many attempts: please wait a moment and try again.",popupClosed:"The Google window was closed before signing in.",popupBlocked:"The browser blocked the Google window: allow pop-ups for this page.",unauthorizedDomain:"Signing in isn’t enabled for this address yet.",network:"No connection: check your network and try again.",failed:t=>`That didn’t work (${t}).`},deleteTake:{title:"Delete this take?",account:"It will be deleted from your account for good: the recording and everything saved with it.",ranked:"It is in the top scores of this piece too: it will be removed from them, for everyone.",place:t=>`It is number ${t} in the hall of fame: it will be removed from it, for everyone.`,keepsProgress:"The pieces you have unlocked stay unlocked.",confirm:"Delete it",cancel:"Keep it",deleting:"Deleting…",failed:"The take could not be deleted. Please try again."},shareDone:{headlines:[["Link copied!","Your recording is ready to be heard."],["Off it goes!","Your take now has a link of its own."],["Ready to share!","Be proud of it: you played that."]],ready:["Your link","Copy it, and your recording is ready to be heard."],anywhere:"Send it any way you like: by message, email or chat. Whoever opens it hears your recording, with the piano, just as you played it.",who:["Your teacher","Your parents","Grandma and Grandpa","Your friends"],cheers:["Every take you share is a little concert.","Your teacher will love hearing how you practise.","Ling Ling shares every take. Well, the good ones. This one counts.","Music is for listening to. Let them hear you!"],playedAlong:"Played along with",copy:"Copy",copyAgain:"Copy again",copiedAgain:"✓ Copied",done:"Done",text:t=>`Listen to me playing ${t} on Violin Hero!`},install:{title:"Install Violin Hero as an app",tap:"Tap",share:"Share",then:"then",add:"Add to Home Screen",openInSafari:"Open this page in Safari, tap",chromeToo:"Newer Chrome versions have it under the share icon in the address bar too.",close:"Close"},practiceTips:{title:"Practice tips",video:"Watch the video",videoTitle:"Opens the video on YouTube, in a new tab",start:"Start now",close:"Close",open:"Practice tips",openTitle:"Show the practice tips for this piece",festiveTitle:"Christmas practice tips",festiveLead:"It’s Christmas time, the best time of year for this one: practise it now and play it under the tree for family and friends."},headphones:{title:"Put on wired headphones",wired:"Wired:",wiredWhy:"the microphone hears only your violin.",speakers:"Speakers:",speakersWhy:"the piano gets recorded too.",bluetooth:"Bluetooth:",bluetoothWhy:"lags and can distort your take.",gotIt:"Got it!",appleAdapter:"Use Apple’s own 3.5 mm adapter: others may go silent."},welcome:{loading:["Rosining the bow…","Tuning the piano…","Unpacking the scores…","Warming up the orchestra…","Polishing the strings…","Dimming the lights…"],progress:t=>`${t} %`,loadingFailed:"Some sounds could not be loaded. Check your connection.",continueAnyway:"Continue anyway",begin:"Let’s go",skipIntro:"Skip intro",beginNote:"Your browser will ask to use the microphone, so Violin Hero can hear your violin.",hearString:t=>`Hear the ${t}`,stopTone:"Stop the tone",byEar:"Tune by ear: the beats slow down as you get close",tuner:"Tuner",level:"Level",gain:"Input",gainDb:t=>`${t>0?"+":t<0?"−":"±"}${Math.abs(t)} dB`,gainTitle:"The microphone’s gain: set it so your loudest notes reach the green area (double-click: +12 dB)",cal:{key:"Calibrate",keyTitle:"Measure the delay from the speakers to the microphone, so your recordings line up with the piano",ms:t=>`${t} ms`,title:"Compensate delay",lead:"Every device takes a little time to play a sound and to record it. Violin Hero plays a few clicks and listens for them, to line your recordings up exactly with the piano.",speakers:"Plug in the headphones you play with and turn the volume up.",micOn:"Hold one earpiece right at your device’s microphone.",quiet:"Keep quiet for a few seconds while the clicks play.",measuring:(t,e)=>`Listening… click ${t} of ${e}`,sent:"played",heard:"heard",result:t=>`Delay: ${t} ms`,applied:"Your recordings and your line are now placed by it.",notHeard:"The clicks weren’t heard.",unsteady:"The clicks were heard unevenly.",tryAgain:"Turn the volume up, hold the earpiece right at the microphone, keep quiet and try again.",needMic:"The microphone is needed: allow it first.",back:"Done",start:"Start measuring",again:"Measure again",newMeasurement:"New measurement",save:"Save"},stereo:"Stereo",mono:"Mono",inputUnnamed:"Microphone",inputTitle:"The input in use, as your system names it; for a stereo one, each side’s level",setupTitle:"Audio setup",inputDevice:"Microphone input",outputDevice:"Headphone output",systemDefault:"System default",sidesTitle:"Each side of the input on its own: a silent or noisy side shows here",loudHint:"Play your loudest notes: the bar should reach the green area.",newInput:t=>`New input: ${t}`,useInput:"Use it",levelTitle:"The input level: your loudest notes in the green area make a clean take; in the red one they distort",startTuning:"Start tuning",micWhy:"Violin Hero listens through your microphone.",micAsking:"Allow the microphone in your browser…",micDenied:"No microphone. Allow it in your browser to tune and record.",playString:t=>`Play your ${t} string`,tuneUp:"Tune up",tuneDown:"Tune down",inTune:"In tune!",offBy:(t,e)=>`${t} ¢ ${e?"sharp":"flat"}`,wrongString:(t,e)=>`That sounds like your ${t} string. Play the ${e}.`,farOff:"Far off: turn slowly and listen",stringTitle:t=>`Tune the ${t} string`,aDone:t=>`Your ${t} is in tune!`,others:t=>`Now the ${t.length>1?`${t.slice(0,-1).join(", ")} and ${t[t.length-1]}`:t[0]}, or tune them yourself.`,skip:"I’ll tune the others myself",alreadyInTune:"My violin is already in tune",closeTool:"Done",allDone:"All four strings in tune. Beautiful!",next:"Continue",ready:"Ready to go",firstPiece:"Your first piece",firstPieceLead:"Easy to start with, lovely to play. New pieces unlock once you can play this one well.",accountTitle:"Keep what you play",accountLead:"Free: your takes and progress, on every device.",signIn:"Sign in",signedIn:t=>`Signed in as ${t}: your takes and progress are saved.`,offline:"Offline: your takes wait on this device and are saved once you are back online.",go:"Bows up!",goNote:"Two bars count you in, then your first take starts.",backToTuner:"Back to the tuner"},deleteAccount:{menu:"Delete account…",title:"Delete your account?",loading:"Looking up what is stored…",lead:"This is what will be deleted for good:",nickname:t=>`Your nickname “${t}”`,takes:(t,e)=>`${t===1?"1 recording":`${t} recordings`}${e?` (${e} in the hall of fame)`:""}, with their share links`,progress:(t,e)=>`Your progress: ${t===1?"1 piece":`${t} pieces`} passed, ${e===1?"1 take":`${e} takes`} counted`,practice:t=>`Your practice time (${t})`,markings:(t,e)=>`Your markings on ${t===1?"1 piece":`${t} pieces`}${e?`, ${e} shared`:""}`,packsAdded:t=>`Content packs you added: ${t}`,packsMade:t=>`Content packs you made: ${t}`,creatorProfile:"Your creator profile",invitations:t=>`Your invitations${t?` (${t} karma)`:""}`,feedback:(t,e,n)=>`Your feedback: ${t===1?"1 post":`${t} posts`}, ${e===1?"1 vote":`${e} votes`}${n?", your rating":""}`,browser:"What this browser keeps (settings, takes waiting to upload)",packsBought:t=>`Content packs you bought will be lost: ${t}. Your purchases belong to this account; with a new one you would have to buy them again.`,packsKept:t=>`Kept: ${t}. Players have added these packs, so they stay, with your creator profile.`,creatorStays:"Your creator profile and your content packs stay. To delete them, choose “Delete creator data…” in the account menu on the creator page.",login:"Your login is deleted too.",loginSchool:"Your login stays: it is still in use elsewhere in Crescendu.",loginCreator:"Your login stays, for your creator data.",creatorMenu:"Delete creator data…",creatorTitle:"Delete your creator data?",creatorNothing:"Nothing can be deleted: players have added all your content packs.",creatorLoginPacks:"Your login stays, for the content packs players have.",creatorLoginPlayer:"Your login and your Violin Hero data stay. To delete them, choose “Delete account…” in Violin Hero’s account menu.",creatorCancel:"Keep my creator data",creatorConfirm:"Delete creator data",doneCreator:"Your Violin Hero data is gone. Your login stays for your creator data: delete that on the creator page, and the login goes with it.",creatorDoneLogin:"Your creator data and your login are gone. Thank you for creating for Violin Hero!",creatorDoneSchool:"Your creator data is gone; your login stays, as it is still in use elsewhere in Crescendu.",creatorDonePacks:"The packs no player had are gone. The others stay, with your creator profile and your login.",creatorDonePlayer:"Your creator data is gone. Your login and your Violin Hero data stay.",understood:"I understand that this can’t be undone.",cancel:"Keep my account",confirm:"Delete everything",deleting:"Deleting…",steps:{takes:"Deleting your recordings…",library:"Removing the packs you added…",packs:"Deleting the packs you made…",profile:"Deleting your creator profile…",feedback:"Deleting your feedback…",messages:"Deleting your messages and praise…",rest:"Deleting your progress and practice time…",browser:"Clearing this browser…",login:"Deleting your login…"},failed:"Not everything could be deleted. Please try again.",doneTitle:"Your data is deleted",doneLogin:"Your account is gone. Thank you for practising with Violin Hero!",doneSchool:"Your Violin Hero data is gone; your login stays, as it is still in use elsewhere in Crescendu.",doneAgain:"Your data is gone. To delete your login too, sign in once more and choose Delete account again.",ok:"OK"},nextPack:{title:"You’ve opened the whole starter pack!",text:"Ready for more? “Popular violin pieces” has 25 favourites, from the Méditation to the Czardas, all open as soon as you add it.",signIn:"Sign in in the marketplace to add it.",show:"Show me",later:"Later"},packUpdates:{title:t=>t===1?"A content pack has an update":`${t} content packs have updates`,untitled:"Content pack",versions:(t,e)=>`Version ${t} → ${e}`,version:t=>`Version ${t}`,update:"Update",updating:"Updating…",keep:t=>`Keep version ${t}`,later:"Decide later",note:"Your takes stay either way."},sharedTake:{sharedBy:t=>`${t} shared a recording with you`,sharedByAnyone:"Someone shared a recording with you",yours:"Your own recording, from your link",played:"Played",tempo:"Tempo",originalTempo:"Original tempo",section:"Section",playedAlong:"Played along with",bars:(t,e)=>`Bars ${t}–${e}`,score:"Score",withPiano:"You will hear the violin as it was played, with the piano, the notes scrolling along.",listen:"Listen",playsOnClose:"It starts playing when you close this card."},unlock:{locked:"Locked: unlock it by passing pieces or by practising",next:"Next to unlock",all:"Every piece is unlocked. Ling Ling would be proud!",pass:(t,e)=>`Score ${t} % on a piece you haven’t passed yet (at ${e} % tempo or faster)`,thisTake:t=>`This take: ${t} %`,passedNow:"✓ Passed!",passedBefore:"This piece is passed already: try another one.",or:"or",signIn:"Sign in to keep your progress safe, on every device.",takes:t=>`record ${t} more ${t===1?"take":"takes"}`,nudges:["Ling Ling practises 40 hours a day. A few more takes won’t hurt!","Practise like Ling Ling: 40 hours a day (a few minutes is a fine start).","Ling Ling is watching. Pick up the violin!","Don’t be a viola. Record it once more!","Emotional damage? No: emotional progress!","Every take brings you a little closer to Ling Ling.","Sacrifice your sleep for Ling Ling? Just one more take will do.","Ling Ling would play it with a hangover. You can play it now!"],title:"New piece unlocked!",titleMany:t=>`${t} new pieces unlocked!`,newLevel:t=>`New level: ${t}!`,play:"Play it now",later:"Later",cheers:["Ling Ling would be proud!","That’s the 40-hours-a-day spirit!","Ling Ling approves. Keep going!","Your practice paid off. On to the next one!","Brilliant! Even a viola would cheer for that."],levelCheers:["A whole new level! Even Ling Ling started as a Beginner once.","Level up! Ling Ling is getting nervous.","Welcome to the next level: the real practice starts now!"]},best:(t,e,n)=>`Best: ${t} · ${e}/${n}`,bestTitle:"Show the top scores for this piece",practising:t=>t===1?"1 other player is currently practising this piece":`${t} other players are currently practising this piece`,invites:["No top score yet: your chance to make it to the top!","The podium is empty. Record the whole piece and claim first place!","Nobody has scored this one yet. Be the first!","First place is up for grabs: practise, then record!","An empty hall of fame is waiting for your name.","Be the one everybody else has to beat.","Fresh piece, clean slate: set the score to beat!","Gold is still free for this piece. Go and get it!"],board:{title:"Hall of fame",of:t=>`Top scores for ${t}`,practise:"Let’s practise",you:"you",play:t=>`Play ${t}’s take`,openPodium:t=>`${t===1?"One place on the podium is":`${t} places on the podium are`} still free: it could be yours!`,toEnter:t=>`Score more than ${t} points to make it onto the board.`,onBoard:t=>`You are number ${t}: can you climb even higher?`,top:"You are at the top. Can you beat your own best?",signIn:"Sign in so that your takes count.",howTo:"Record the whole piece, from its start to its end, at full tempo (100 %), to make it onto the board.",tips:["Practise the hard bars first: mark them with Marker and let Repeat go round.","Slow the tempo down until every note sits, then build it up again.","Play along with the violin first, then switch it off and take over.","Listen to a great performance under Interpretation, then make it your own."]},yourScore:"Your score",yourScoreOpen:"Your score: show it in full",yourScoreTitle:"Your score: click for the details",outOf:t=>`of ${t}`,stars:t=>`${t} of 5 stars`,reportSteps:{next:"What’s next",done:"Done",practise:"Keep practising",back:"Back to your score",title:"Your next steps"},shareSignIn:"Proud of this take? Sign in and you can share it: send the link to your teacher, your family or your friends, and they hear exactly how you played.",unranked:t=>`Played at ${t} % of the tempo, so this take doesn’t count for the top scores: only takes at 100 % do. ${t<100?"Work your way up to full speed, then record it again!":""}`,publish:{title:"This take qualifies for the Hall of Fame!",text:"Publish it and your recording becomes public: it is listed on this piece’s board and in the Hall of Fame under your nickname, and anyone can listen to it there.",signInText:"Sign in to publish it: your recording then becomes public, listed on this piece’s board and in the Hall of Fame.",publish:"Publish",publishing:"Publishing…",saving:"Saving…",signIn:"Sign in",failed:"It couldn’t be published. Please try again.",doneTitle:"You’re in the Hall of Fame!",doneText:"Your recording is published on this piece’s board and in the Hall of Fame.",see:"See it"},topScores:t=>`Top scores for ${t}`,scoreHeadline:"Score",loading:"Loading…",noScores:"No scores for this piece yet.",thisTake:"(this take)",styleBonus:"Style bonus",badTaste:"Bad taste",bonus:"Bonus",penalty:"Penalty",categories:{intonation:"Intonation",timing:"Timing",sound:"Sound",dynamics:"Dynamics",trills:"Trills",missed:"Missed notes",wrong:"Right notes"},details:{nothingHeard:()=>"Nothing heard",spotOn:()=>"Spot on",centsOff:t=>`${t} ¢ off on average`,landedLate:t=>` · ${t} landed late`,noEntries:()=>"No entries heard",earlyLate:(t,e)=>[t&&`${t} early`,e&&`${e} late`].filter(Boolean).join(", "),onTime:()=>"Always on time",heldShort:t=>`On time, ${t} long ${t===1?"note":"notes"} cut short`,alsoHeldShort:t=>` · ${t} long ${t===1?"note":"notes"} cut short`,playedOnly:(t,e)=>` · only ${t} of ${e} notes played`,shaping:t=>`Shaping followed ${t} %`,allFollowed:t=>`All ${t} changes followed`,wrongWay:(t,e)=>`${t} of ${e} played the wrong way`,tooFewNotes:()=>"Too few notes heard",trills:(t,e,n)=>`${t} of ${rt(e,"trill","trills")}${t?` · ${n.toFixed(0)} notes/s`:""}`,notesOf:(t,e)=>`${t} of ${e} notes`,rightOf:(t,e)=>`${t} of ${e} notes right`,noneMissed:()=>"None missed",noneWrong:()=>"All notes right",noLongNotes:()=>"No long notes heard",vibrato:(t,e)=>`Vibrato on ${t} of ${e} long notes`,openStrings:()=>"Long open strings held steady",vibratoFast:(t,e)=>` · fast for ${Ae[e]} (${t} per second)`,vibratoSlow:(t,e)=>` · slow for ${Ae[e]} (${t} per second)`,vibratoWide:(t,e)=>` · wide for ${Ae[e]} (${t} ¢)`,vibratoNarrow:(t,e)=>` · narrow for ${Ae[e]} (${t} ¢)`,vibratoSlower:(t,e,n,i)=>` · for full points: a slower vibrato, ${e}–${n} swings a second in ${Ae[i]} (yours ${t})`,vibratoFaster:(t,e,n,i)=>` · for full points: a faster vibrato, ${e}–${n} swings a second in ${Ae[i]} (yours ${t})`,vibratoNarrower:(t,e,n,i)=>` · for full points: a narrower vibrato, ${e}–${n} ¢ in ${Ae[i]} (yours ${t} ¢)`,vibratoWider:(t,e,n,i)=>` · for full points: a wider vibrato, ${e}–${n} ¢ in ${Ae[i]} (yours ${t} ¢)`,vibratoMore:t=>` · for full points: vibrato on the ${t===1?"note":`${t} notes`} played without`,vibratoSteadier:t=>` · for full points: hold ${t===1?"one long note":`${t} long notes`} steadier, or add vibrato`,vibratoOptional:t=>` · optional in ${Ae[t]}`,slidesInStyle:(t,e,n)=>`${bo(t,e)}, in ${n} style`,slidesBadTaste:(t,e,n)=>`${bo(t,e)}: bad taste in ${n} music`},silent:[["Did you play?","We didn’t hear a single note."],["Hello? Anyone there?","Not one note reached us."],["Silent night?","That was very quiet. Too quiet."],["Did you play?","Ling Ling heard nothing, and Ling Ling hears everything."]],silentTip:"Check that the microphone is allowed and the level under Input moves while you play.",praise:[[["Brilliant!","That was concert ready."],["Bravo!","The audience is on its feet."],["Outstanding!","Hardly a note out of place."],["Magnificent!","You made that piece sing."]],[["Congratulations!","A lovely performance."],["Beautiful!","That was a pleasure to listen to."],["Wonderful!","You really know this piece."],["Lovely playing!","Just a few details from perfect."]],[["Well played!","Nicely done. A little polish and it shines."],["Good job!","The piece is coming together."],["Nice work!","You are well on your way."],["Solid take!","Keep at it and it will sparkle."]],[["Good effort!","You can do better. Try it once more!"],["Getting there!","Every run makes it smoother."],["Not bad!","A few more rounds and you have it."],["Keep it up!","The hard part is behind you."]],[["Keep going!","Every take makes you better."],["Good start!","Slow it down and try again."],["Don’t give up!","Even the greats practised this."],["Practice makes perfect!","Mark a tricky bar and loop it."]]],highlights:{intonation:["Your intonation was the star of this take.","Beautifully in tune!","Your ear did a great job."],timing:["Right on the beat, all the way through.","Your timing was rock solid.","You and the piano were perfectly together."],sound:["What a lovely vibrato!","Your long notes really sang.","A warm, singing tone."],dynamics:["Your dynamics brought the music to life.","Lovely shaping, loud and soft.","You followed every crescendo and diminuendo."],trills:["Sparkling trills, nice and quick!","Your trills were a joy: quick and clean.","Like a songbird: lovely trills."],missed:["Not a single note left out.","Every note was there.","You never lost your place."],wrong:["Clean as a whistle: no wrong notes.","Every note was the right one.","Wonderfully accurate fingers."],glide:["Beautiful, expressive slides: very Romantic!","Your glissandi gave it real Romantic warmth.","Lovely portamento, just right for this music."]},tips:{intonation:["Tip: tune the long notes against the piano.","Tip: play the tricky bars slowly and listen to each note.","Tip: check your intonation against the open strings."],timing:["Tip: switch on Click and come in with the beat.","Tip: count the rests out loud before you come in.","Tip: slow the tempo down and build it up again."],sound:["Tip: try a little vibrato on the long notes.","Tip: keep the bow moving evenly through the long notes.","Tip: let the long notes ring and sing."],dynamics:["Tip: watch the p and f marks and make the contrast bigger.","Tip: shape the hairpins: grow and fade with the bow.","Tip: play the soft passages really soft, then let the loud ones out."],trills:["Tip: practise the trills slowly and evenly, then speed them up.","Tip: keep the trilling finger light and close to the string.","Tip: start the trill calmly, then let it get faster and faster."],missed:["Tip: some notes weren’t heard. Play them out with a full bow.","Tip: keep the bow on the string so every note sounds.","Tip: mark the bars where notes went missing and loop them."],wrong:["Tip: mark the tricky bars and repeat them slowly.","Tip: check the fingering where the wrong notes were.","Tip: play the hard passage slower until every note is right."],glide:["Tip: shift cleanly between notes: no sliding in this style.","Tip: in Classical and Baroque music, keep the shifts clean and quick.","Tip: lift the slides out: change position without a glissando."]}},Tp=[0,1,2,3,4].flatMap(t=>[0,1,2,3].map(e=>[1.5+e*2.6+t%2*1.3,1.3+t*2.05])).filter(([t])=>t<10.5),_p=M`<rect width="24" height="24" fill="#b22234" />
  ${[1,3,5,7,9,11].map(t=>M`<rect y=${t*24/13} width="24" height=${24/13} fill="#fff" />`)}
  <rect width="11" height=${7*24/13} fill="#3c3b6e" />
  ${Tp.map(([t,e])=>M`<circle cx=${t} cy=${e} r="0.55" fill="#fff" />`)}`,Ep=M`<rect width="24" height="8" fill="#000" /><rect y="8" width="24" height="8" fill="#dd0000" /><rect y="16" width="24" height="8" fill="#ffce00" />`,De={en:{name:"English",locale:"en-US",flag:_p,messages:kp},de:{name:"Deutsch",locale:"de-DE",flag:Ep,messages:vp}},kc="violinhero-language";function Sp(){try{const t=localStorage.getItem(kc);if(t&&t in De)return t}catch{}for(const t of navigator.languages??[navigator.language]){const e=t.slice(0,2).toLowerCase();if(e in De)return e}return"en"}let Rt=Sp();const cr=new Set;document.documentElement.lang=Rt;function me(){return Rt}function K(){return wp(De[Rt].messages,Rt)}function Tc(t,e=!0){if(t!==Rt){if(Rt=t,document.documentElement.lang=t,e)try{localStorage.setItem(kc,t)}catch{}for(const n of cr)n()}}function Qr(t){return cr.add(t),()=>cr.delete(t)}class es{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.stop=Qr(()=>this.host.requestUpdate())}hostDisconnected(){var e;(e=this.stop)==null||e.call(this)}}const Ip={apiKey:"AIzaSyAYev6vpeTmN9xSDoEyUAMwLYD0abE6Sr4",authDomain:"www.crescendu.com",projectId:"crescendu",storageBucket:"crescendu.firebasestorage.app",messagingSenderId:"546406424194",appId:"1:546406424194:web:360ebdab42c0baa5c01e9b"},Kt=8,_c=qo(Ip),de=Zd(_c),_t=qf(_c);de.languageCode=me();Qr(()=>de.languageCode=me());function ts(){return de}function Ap(t){return _a(de,t)}async function $p(){const t=de.currentUser;t&&(await t.reload(),await t.getIdToken(!0))}async function Pp(t,e){await Lu(de,t.trim(),e)}async function Np(t,e){const{user:n}=await Ru(de,t.trim(),e);await Ou(n)}async function Dp(){await ad(de,new Pe)}function Cp(t){return xu(de,t.trim())}function xp(){return zu(de)}function $n(t){const e=t.code??"",n=K().auth;return["auth/invalid-credential","auth/wrong-password","auth/user-not-found"].includes(e)?n.wrongPassword:e==="auth/email-already-in-use"?n.emailInUse:e==="auth/weak-password"?n.weakPassword(Kt):e==="auth/invalid-email"?n.invalidEmail:e==="auth/too-many-requests"?n.tooMany:e==="auth/popup-closed-by-user"||e==="auth/cancelled-popup-request"?n.popupClosed:e==="auth/popup-blocked"?n.popupBlocked:e==="auth/unauthorized-domain"?n.unauthorizedDomain:e==="auth/network-request-failed"?n.network:n.failed(e||String(t))}async function Rp(t){try{return(await yc(en(_t,"creators",t))).exists()}catch{return!1}}async function Lp(t){try{const e=await yc(en(_t,"players",t));if(!e.exists())return;const n=e.data().nickname;return typeof n=="string"&&n?n:null}catch{return}}async function Op(t){const e=de.currentUser;if(!e)return;const n=t.trim().slice(0,60)||null;if(n&&!Vp(n))throw new qt("invalid");const i=e.uid;await fp(_t,async r=>{const s=en(_t,"players",i),o=await r.get(s),a=o.exists()&&typeof o.data().nickname=="string"?o.data().nickname:null,c=a&&(!n||Pn(a)!==Pn(n))?en(_t,"nicknames",Pn(a)):void 0,l=c?await r.get(c):void 0;if(n){const y=en(_t,"nicknames",Pn(n)),b=await r.get(y);if(b.exists()&&b.data().uid!==i)throw new qt("taken");r.set(y,{uid:i,nickname:n})}c&&(l!=null&&l.exists())&&l.data().uid===i&&r.delete(c),r.set(s,{nickname:n,updated:ap()})}).catch(r=>{throw r instanceof qt?r:r.code==="permission-denied"?new qt("taken"):r}),await Mu(e,{displayName:n??""}),await e.getIdToken(!0)}class qt extends Error{constructor(e){super(e),this.reason=e}}function Pn(t){return t.toLowerCase()}function Vp(t){return!t.includes("/")&&!/^\.{1,2}$/.test(t)&&!/^__.*__$/.test(t)}const Ec="https://www.crescendu.com/",ns="https://profile.crescendu.com/",Mp=location.hostname===new URL(ns).hostname;function Up(t=!1){return t?"./":"../"}const Fp=()=>`instrument=${ut().id}`;function zp(t,e="../",n="",i=""){let r;t==="profile"?r=`${Mp?"/":ns}${encodeURIComponent(i)}`:r=`${Ec}${t}`;const s=[Fp(),n].filter(Boolean).join("&");return s?`${r}?${s}`:r}function Bp(t,e){const[n,i]=t.split("#");return`${n}${n.includes("?")?"&":"?"}${e}${i===void 0?"":`#${i}`}`}const Hp=[new URL(Ec).origin,new URL(ns).origin,"https://crescendu.com",...Object.values(It).map(t=>new URL(t.app.url).origin)];function is(t){return t===location.origin||Hp.includes(t)||!1}function wt(){return ut().app.name}const lr="hero-session",jp={}.VITE_SESSION_URL??"https://europe-west3-crescendu.cloudfunctions.net/heroSession";async function Wp(){const t=ts().currentUser;if(t)try{const e=await fetch(jp,{method:"POST",headers:{Authorization:`Bearer ${await t.getIdToken()}`}});if(!e.ok)return;const{token:n}=await e.json();return typeof n=="string"?n:void 0}catch{return}}function Gp(t,e,n){if(e===location.origin||!is(e))return()=>{};const i=ts(),r=c=>{var l;return(l=t())==null?void 0:l.postMessage({type:lr,...c},e)};let s=!1;const o=c=>{var y;const l=c.data;if(!(c.origin!==e||c.source!==t()||(l==null?void 0:l.type)!==lr))if("uid"in l){const b=((y=i.currentUser)==null?void 0:y.uid)??null;l.uid&&l.uid!==b&&(n||!b)&&!s&&(s=!0,r({want:!0}))}else"want"in l?Wp().then(b=>b&&r({token:b})):"token"in l&&(s=!1,Cu(i,l.token).catch(()=>{}))};window.addEventListener("message",o);const a=_a(i,c=>r({uid:(c==null?void 0:c.uid)??null}));return()=>{window.removeEventListener("message",o),a()}}const wo=new WeakSet;function Kp(t){var n,i;let e;try{e=new URL(t.src,location.href).origin}catch{return}e===location.origin||!is(e)||((i=t.contentWindow)==null||i.postMessage({type:lr,uid:((n=ts().currentUser)==null?void 0:n.uid)??null},e),!wo.has(t)&&(wo.add(t),Gp(()=>t.contentWindow,e,!1)))}function qp(t,e="./"){const n=new URL(e,location.href);return n.search="",n.hash="",n.searchParams.set("ref",t),n.href}async function Yp(t,e){if(matchMedia("(hover: none) and (pointer: coarse)").matches&&navigator.share)try{return await navigator.share({title:ut().app.name,text:e,url:t}),"shared"}catch(i){if(i.name==="AbortError")return"failed"}try{return await navigator.clipboard.writeText(t),"copied"}catch{return"failed"}}const Jp="https://www.crescendu.com",Xp={imprint:{en:"imprint",de:"impressum"},privacy:{en:"privacy",de:"datenschutz"},terms:{en:"terms",de:"nutzungsbedingungen"}};function vo(t,e=""){const n=me()==="de"?"de":"en";return`${Jp}/${n}/${Xp[t][n]}${e?`#${e}`:""}`}const rs=["blue","violet","teal","rose","graphite"],hr={light:"#eef0f2",dark:"#121417"},ge={blue:{light:{accent:"#2563eb",hover:"#1d4fd7"},dark:{accent:"#336fea",hover:"#4d85f2"}},violet:{light:{accent:"#6d44dc",hover:"#5b34c4"},dark:{accent:"#7a58ee",hover:"#8f72f4"}},teal:{light:{accent:"#0d7488",hover:"#0a6071"},dark:{accent:"#0c8296",hover:"#1196ad"}},rose:{light:{accent:"#c8255f",hover:"#a81d4f"},dark:{accent:"#d6316c",hover:"#e34f84"}},graphite:{light:{accent:"#434b5a",hover:"#323945"},dark:{accent:"#66728a",hover:"#7b879e"}}},di=.05;function Zp(t,e){const n=(s,o)=>parseInt(s.slice(1+2*o,3+2*o),16),i=ge[t][e].accent,r=hr[e];return`#${[0,1,2].map(s=>Math.round(n(i,s)*di+n(r,s)*(1-di)).toString(16).padStart(2,"0")).join("")}`}const ko=t=>`--m-accent: ${t.accent}; --m-accent-hover: ${t.hover};`,Qp=rs.map(t=>`:host([scheme='${t}']) { ${ko(ge[t].light)} }
:host([scheme='${t}'][theme='dark']) { ${ko(ge[t].dark)} }`).join(`
`);function To(t){return rs.includes(t)}const Sc=M`${Ki.mark.paths.map(t=>M`<path d=${t} />`)}${Ki.mark.circles.map(([t,e,n])=>M`<circle cx=${t} cy=${e} r=${n} />`)}`,em=M`
  <g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" />
    ${Sc}
  </g>`,Ic={marketplace:M`<path d="M5.5 8h13l-1 12h-11z" /><path d="M9 10V6.5a3 3 0 0 1 6 0V10" />`,halloffame:M`<path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4" />`,creator:M`<path d="M4 8l8-4 8 4v8l-8 4-8-4z" /><path d="M4 8l8 4 8-4M12 12v8" />`,profile:M`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,help:M`<path d="M8.6 8.6a3.5 3.5 0 1 1 5.1 3.1c-1 .5-1.7 1.3-1.7 2.4v.6" /><path d="M12 18.4v.1" />`},_o={app:wt(),marketplace:`${wt()} Marketplace`,halloffame:`${wt()} Hall of Fame`,creator:`${wt()} Creator`,profile:`${wt()} Profile`,help:`${wt()} Help`};function zn(t,e,n=e==="app"?"./":"../"){if(t==="marketplace"||t==="creator"||t==="profile")return zp(t,n);const i=n;return t==="app"?e==="app"||e==="help"?i:`${i}?from=${e}`:`${i}${t}`}function tm(t){return t==="app"?em:M`<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="50" cy="50" r="45" stroke-width="5.5" />
    <g transform="translate(20 20) scale(2.5)" stroke-width="2.1">${Ic[t]}</g>
  </g>`}function nm(t,e){return["app","halloffame","marketplace"].filter(i=>i!==t).map(i=>P`<a class="m-help m-place ${i}" href=${zn(i,t,e)} title=${_o[i]} aria-label=${_o[i]}>
        ${i==="app"?M`<svg viewBox="24 10 52 78" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">${Sc}</g></svg>`:M`<svg viewBox="0 0 24 24" aria-hidden="true">${Ic[i]}</svg>`}
      </a>`)}const im=parseFloat("0.207+")<1;function rm(t){return P`<span class="m-version-line">
    <span class="m-version" title=${t}>v${"0.207+"}</span>
    ${im?P`<span class="m-beta">Beta</span>`:""}
  </span>`}const sm=fn`
    /*
     * The whole window, light surfaces on a cool grey, the system's type at reading sizes, one
     * blue for what is active, red for recording
     */
    :host {
      /* Greys with a touch of the theme colour (themes.ts's TINT), so they go with each scheme */
      --m-bg: color-mix(in srgb, var(--m-accent) ${fe(di*100)}%, ${fe(hr.light)});
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
      --m-accent: ${fe(ge.blue.light.accent)};
      --m-accent-hover: ${fe(ge.blue.light.hover)};
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
      --m-bg: color-mix(in srgb, var(--m-accent) ${fe(di*100)}%, ${fe(hr.dark)});
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
      --m-accent: ${fe(ge.blue.dark.accent)};
      --m-accent-hover: ${fe(ge.blue.dark.hover)};
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
    ${fe(Qp)}
`,om=fn`
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
    /* The name with the build's version ("0.207+") under it, left aligned; cut where the keys need the room */
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
`,am="hero-profile";var cm=Object.defineProperty,lm=Object.getOwnPropertyDescriptor,L=(t,e,n,i)=>{for(var r=i>1?void 0:i?lm(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&cm(e,n,r),r};const Ac="violinhero-nickname-asked",hm=3e3,um="https://www.crescendu.com/feedback",dm=M`<circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />`,fm=M`<path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.7z" />
  <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24z" />
  <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
  <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />`;let x=class extends lt{constructor(){super(),this.hint=!1,this.reason="save",this.waiting=0,this.place="app",this.creator=!1,this.menuOpen=!1,this.creating=!1,this.email="",this.password="",this.error="",this.info="",this.busy=!1,this.askName="",this.askNote="",this.askBusy=!1,this.justSignedIn=!1,this.profileOpen=!1,this.brokenPicture=!1,this.fromProfile=t=>{var e,n;!is(t.origin)||((e=t.data)==null?void 0:e.type)!==am||(t.data.action==="close"&&((n=this.profileDialog)==null||n.close()),t.data.action==="saved"&&(this.claimed=typeof t.data.nickname=="string"?t.data.nickname:null,$p().then(()=>{this.requestUpdate(),this.dispatchEvent(new CustomEvent("user-refresh",{bubbles:!0,composed:!0}))})))},this.outside=t=>{this.menuOpen&&!t.composedPath().includes(this)&&(this.menuOpen=!1)},this.invitedTimer=0,new es(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside),window.addEventListener("message",this.fromProfile)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside),window.removeEventListener("message",this.fromProfile)}openProfile(t){this.place!=="profile"&&(t.preventDefault(),this.menuOpen=!1,this.profileOpen=!0,this.updateComplete.then(()=>{var e;return(e=this.profileDialog)==null?void 0:e.showModal()}))}willUpdate(t){var e,n,i,r,s,o;if(t.has("user")){if(this.brokenPicture=!1,((e=t.get("user"))==null?void 0:e.uid)!==((n=this.user)==null?void 0:n.uid)){this.claimed=void 0,(i=this.profileDialog)==null||i.close();const a=(r=this.user)==null?void 0:r.uid;a&&Lp(a).then(l=>{var y;((y=this.user)==null?void 0:y.uid)===a&&(this.claimed=l??null,this.askNickname())}),this.creator=!1;const c=(s=this.user)==null?void 0:s.uid;c&&this.place!=="creator"&&Rp(c).then(l=>{var y;return((y=this.user)==null?void 0:y.uid)===c&&(this.creator=l)})}this.user?(o=this.dialog)==null||o.close():this.menuOpen=!1}}openSignIn(){var t;this.user||(this.error=this.info="",(t=this.dialog)==null||t.showModal())}press(){var t;if(this.user!==void 0){if(this.user){this.menuOpen=!this.menuOpen;return}this.error=this.info="",(t=this.dialog)==null||t.showModal()}}render(){const t=this.user,e=t!=null&&t.photoURL&&!this.brokenPicture?t.photoURL:"",n=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"",i=K(),r=t?i.signedInAs(n):i.signIn;return P`
      <button
        class="key ${t?"signed-in":""}"
        aria-label=${r}
        title=${r}
        aria-haspopup=${t?"menu":"dialog"}
        aria-expanded=${t?this.menuOpen:!1}
        ?disabled=${t===void 0}
        @click=${this.press}
      >
        ${e?P`<img src=${e} alt="" referrerpolicy="no-referrer" @error=${()=>this.brokenPicture=!0} />`:t?P`<span class="initial">${pm(n)}</span>`:P`<svg viewBox="0 0 24 24" aria-hidden="true">${dm}</svg>`}
      </button>
      ${t&&this.menuOpen?this.menu(t):$} ${this.hint&&t===null?this.hintBubble():$} ${this.signInDialog()}
      ${this.nicknameDialog()} ${this.profileOverlay()}
    `}profileOverlay(){return P`<dialog
      class="profile"
      aria-label=${K().profile}
      @close=${()=>this.profileOpen=!1}
      @click=${t=>{var e;return t.target===t.currentTarget&&((e=this.profileDialog)==null?void 0:e.close())}}
    >
      ${this.profileOpen?P`<iframe src=${Bp(zn("profile",this.place,this.root),"embedded")} title=${K().profile} allow="clipboard-write" @load=${t=>Kp(t.target)}></iframe>`:$}
    </dialog>`}hintBubble(){const t=K();return P`
      <div class="hint" role="status">
        <button class="hint-text" @click=${this.fromHint}>
          <strong>${this.reason==="score"?t.scoreHintTitle:this.reason==="share"?t.shareHintTitle:t.hintTitle}</strong>
          <span>${this.reason==="score"?t.scoreHintText:this.reason==="share"?t.shareHintText:t.hintText(this.waiting)}</span>
        </button>
        <button class="hint-close" aria-label=${t.hintDismiss} title=${t.hintDismiss} @click=${()=>this.fire("hint-dismiss")}>×</button>
      </div>
    `}fromHint(){this.fire("hint-close"),this.press()}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}menu(t){const e=K(),n=!t.emailVerified&&t.providerData.some(i=>i.providerId==="password");return P`
      <div class="menu" role="menu" @keydown=${i=>i.key==="Escape"&&(this.menuOpen=!1)}>
        <div class="who">
          ${t.displayName?P`<strong>${t.displayName}</strong>`:$}
          <span class="email">${t.email}</span>
        </div>
        ${n?P`<p class="note warn">${e.confirmEmail}</p>`:$}
        <a class="item invite-item" role="menuitem" href=${zn("profile",this.place,this.root)} @click=${this.openProfile}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="3.8" /><path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" /></svg>
          ${e.profile}
        </a>
        ${this.creator&&this.place!=="creator"?P`<a class="item creator-link" role="menuitem" href=${zn("creator",this.place,this.root)}
              ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></svg>${e.creatorDashboard}</a
            >`:$}
        <button class="item invite-item ${this.invited??""}" role="menuitem" @click=${()=>void this.invite(t)}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5" /><circle cx="10" cy="8" r="3.5" /><path d="M18 8v6M15 11h6" /></svg>
          ${this.invited==="copied"?e.inviteCopied:this.invited==="failed"?e.inviteFailed:e.invite}
        </button>
        <a class="item invite-item" role="menuitem" href=${um} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4.5" /></svg>
          ${e.feedback}
        </a>
        <button class="item" role="menuitem" @click=${()=>void xp()}>${e.signOut}</button>
        ${this.place==="app"||this.place==="creator"?P`<button
              class="item delete-item"
              role="menuitem"
              @click=${()=>{this.menuOpen=!1,this.dispatchEvent(new CustomEvent("delete-account",{bubbles:!0,composed:!0}))}}
            >
              ${this.place==="creator"?e.deleteAccount.creatorMenu:e.deleteAccount.menu}
            </button>`:$}
      </div>
    `}async invite(t){const e=qp(t.uid,this.root??Up(this.place==="app")),n=await Yp(e,K().inviteText);this.invited=n==="shared"?void 0:n,clearTimeout(this.invitedTimer),this.invitedTimer=window.setTimeout(()=>this.invited=void 0,hm)}signInDialog(){const t=K();return P`
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
              minlength=${Kt}
              placeholder=${this.creating?t.passwordHint(Kt):""}
              .value=${this.password}
              @input=${e=>this.password=e.target.value}
            />
          </label>
          ${this.error?P`<p class="error" role="alert">${this.error}</p>`:$}
          ${this.info?P`<p class="info">${this.info}</p>`:$}
          <button class="primary" type="submit" ?disabled=${this.busy}>${this.creating?t.createAccountButton:t.signIn}</button>
          <div class="links">
            <button class="link" type="button" @click=${()=>(this.creating=!this.creating,this.error=this.info="")}>
              ${this.creating?t.haveAccount:t.createAccount}
            </button>
            ${this.creating?$:P`<button class="link" type="button" @click=${this.reset}>${t.forgotPassword}</button>`}
          </div>
          <div class="divider">${t.or}</div>
          <button class="google" type="button" ?disabled=${this.busy} @click=${this.google}>
            <svg viewBox="0 0 24 24" aria-hidden="true">${fm}</svg>
            ${t.google}
          </button>
          <p class="agree">
            ${t.agree[0]}<a href=${vo("terms")} target="_blank" rel="noopener">${t.termsName}</a>${t.agree[1]}<a
              href=${vo("privacy")}
              target="_blank"
              rel="noopener"
              >${t.privacyName}</a
            >${t.agree[2]}
          </p>
        </form>
      </dialog>
    `}backdrop(t){var e;t.target===this.dialog&&((e=this.dialog)==null||e.close())}askNickname(){var n;const t=this.user;if(!t||this.claimed!==null||(n=this.askDialog)!=null&&n.open)return;const e=gm();!this.justSignedIn&&e.includes(t.uid)||(this.justSignedIn=!1,ym([...e.filter(i=>i!==t.uid),t.uid]),this.askName=mm(t),this.askNote="",this.menuOpen=!1,this.updateComplete.then(()=>{var r,s,o;if(((r=this.user)==null?void 0:r.uid)!==t.uid||this.claimed!==null)return;(s=this.askDialog)==null||s.showModal();const i=(o=this.askDialog)==null?void 0:o.querySelector("input");i==null||i.focus(),i==null||i.select()}))}async saveAsked(t){var n;t.preventDefault();const e=this.askName.trim();if(e){this.askBusy=!0,this.askNote="";try{await Op(e),this.claimed=e.slice(0,60),(n=this.askDialog)==null||n.close()}catch(i){this.askNote=i instanceof qt?i.reason==="taken"?K().nicknameTaken(e):K().nicknameInvalid:$n(i)}finally{this.askBusy=!1}}}nicknameDialog(){const t=K(),e=t.nicknameDialog;return P`
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
          ${this.askNote?P`<p class="error" role="alert">${this.askNote}</p>`:$}
          <button class="primary" type="submit" ?disabled=${this.askBusy||!this.askName.trim()}>${e.save}</button>
          <button class="link later" type="button" @click=${()=>{var n;return(n=this.askDialog)==null?void 0:n.close()}}>${e.later}</button>
        </form>
      </dialog>
    `}async submit(t){if(t.preventDefault(),this.error=this.info="",this.creating&&this.password.length<Kt){this.error=K().auth.weakPassword(Kt);return}this.busy=!0;try{this.justSignedIn=!0,await(this.creating?Np(this.email,this.password):Pp(this.email,this.password)),this.askNickname()}catch(e){this.justSignedIn=!1,this.error=$n(e)}finally{this.busy=!1}}async google(){this.error=this.info="";try{this.justSignedIn=!0,await Dp(),this.askNickname()}catch(t){this.justSignedIn=!1,this.error=$n(t)}}async reset(){if(this.error=this.info="",!this.email.trim()){this.error=K().enterEmailFirst;return}try{await Cp(this.email),this.info=K().resetSent(this.email.trim())}catch(t){this.error=$n(t)}}};x.styles=fn`
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
  `;L([Y({attribute:!1})],x.prototype,"user",2);L([Y({type:Boolean})],x.prototype,"hint",2);L([Y()],x.prototype,"reason",2);L([Y({type:Number})],x.prototype,"waiting",2);L([Y()],x.prototype,"place",2);L([Y()],x.prototype,"root",2);L([G()],x.prototype,"creator",2);L([G()],x.prototype,"menuOpen",2);L([G()],x.prototype,"creating",2);L([G()],x.prototype,"email",2);L([G()],x.prototype,"password",2);L([G()],x.prototype,"error",2);L([G()],x.prototype,"info",2);L([G()],x.prototype,"busy",2);L([G()],x.prototype,"claimed",2);L([G()],x.prototype,"askName",2);L([G()],x.prototype,"askNote",2);L([G()],x.prototype,"askBusy",2);L([wr("dialog.ask")],x.prototype,"askDialog",2);L([wr("dialog.profile")],x.prototype,"profileDialog",2);L([G()],x.prototype,"profileOpen",2);L([G()],x.prototype,"brokenPicture",2);L([wr("dialog")],x.prototype,"dialog",2);L([G()],x.prototype,"invited",2);x=L([br("account-menu")],x);function pm(t){return(t.trim()[0]??"?").toUpperCase()}function mm(t){var i,r;const n=(((i=t.displayName)==null?void 0:i.trim())||((r=t.email)==null?void 0:r.split("@")[0])||"").replace(/\//g,"").replace(/^_+|_+$/g,"").trim().slice(0,60);return/^\.{1,2}$/.test(n)?"":n}function gm(){try{const t=JSON.parse(localStorage.getItem(Ac)??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"):[]}catch{return[]}}function ym(t){try{localStorage.setItem(Ac,JSON.stringify(t.slice(-20)))}catch{}}var bm=Object.defineProperty,wm=Object.getOwnPropertyDescriptor,Ii=(t,e,n,i)=>{for(var r=i>1?void 0:i?wm(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&bm(e,n,r),r};const Eo=M`<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />`,So=M`<circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />`;let Lt=class extends lt{constructor(){super(),this.theme="light",this.scheme="blue",this.open=!1,this.outside=t=>{this.open&&!t.composedPath().includes(this)&&(this.open=!1)},new es(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.outside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.outside)}choose(t){this.open=!1,Tc(t)}fire(t,e){this.open=!1,this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}render(){const t=K(),e=De[me()],n=this.theme==="dark",i=`${t.languageTitle(e.name)} · ${t.themeMenu}`;return P`
      <button class="key" aria-label=${i} title=${i} aria-haspopup="menu" aria-expanded=${this.open} @click=${()=>this.open=!this.open}>
        ${this.split()}
      </button>
      ${this.open?P`<div class="menu" role="menu" aria-label=${i} @keydown=${r=>r.key==="Escape"&&(this.open=!1)}>
            ${Object.keys(De).map(r=>P`<button
                role="menuitemradio"
                aria-checked=${r===me()}
                class=${r===me()?"on":""}
                @click=${()=>this.choose(r)}
              >
                ${this.flag(r)}
                <span>${De[r].name}</span>
                ${r===me()?P`<span class="tick" aria-hidden="true">✓</span>`:$}
              </button>`)}
            <hr />
            <button role="menuitem" @click=${()=>this.fire("theme-change",n?"light":"dark")}>
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${n?So:Eo}</svg>
              <span>${n?t.lightMode:t.darkMode}</span>
            </button>
            <hr />
            ${rs.map(r=>P`<button
                role="menuitemradio"
                aria-checked=${r===this.scheme}
                class=${r===this.scheme?"on":""}
                @click=${()=>this.fire("scheme-change",r)}
              >
                <span class="swatch" style="background: ${ge[r][this.theme].accent}" aria-hidden="true"></span>
                <span>${t.schemes[r]}</span>
                ${r===this.scheme?P`<span class="tick" aria-hidden="true">✓</span>`:$}
              </button>`)}
          </div>`:$}
    `}split(){const t=me(),e=this.theme==="dark";return P`<svg class="face" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id="key-left"><rect x="0" y="0" width="12" height="24" /></clipPath>
        <clipPath id="key-round"><circle cx="12" cy="12" r="12" /></clipPath>
      </defs>
      <g clip-path="url(#key-round)">
        <g clip-path="url(#key-left)">${De[t].flag}</g>
        <rect x="12" y="0" width="12" height="24" fill=${ge[this.scheme][this.theme].accent} />
        <line x1="12" y1="0" x2="12" y2="24" class="seam" />
        <g class="mode" transform="translate(11.5 6.3) scale(0.475)">${e?Eo:So}</g>
      </g>
    </svg>`}flag(t){return P`<svg class="flag" viewBox="0 0 24 24" aria-hidden="true">
      <defs><clipPath id="round-${t}"><circle cx="12" cy="12" r="12" /></clipPath></defs>
      <g clip-path="url(#round-${t})">${De[t].flag}</g>
    </svg>`}};Lt.styles=fn`
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
  `;Ii([Y()],Lt.prototype,"theme",2);Ii([Y()],Lt.prototype,"scheme",2);Ii([G()],Lt.prototype,"open",2);Lt=Ii([br("language-menu")],Lt);const ur="crescendu-look",ji="crescendu.com",vm=400*24*3600;function dr(){var t;try{const e=(t=document.cookie.split(";").map(r=>r.trim()).find(r=>r.startsWith(`${ur}=`)))==null?void 0:t.slice(ur.length+1);if(!e)return{};const n=new URLSearchParams(decodeURIComponent(e)),i=n.get("theme");return{scheme:n.get("scheme")??void 0,theme:i==="light"||i==="dark"?i:void 0}}catch{return{}}}function Io(t){try{const e={...dr(),...t},n=new URLSearchParams;e.scheme&&n.set("scheme",e.scheme),e.theme&&n.set("theme",e.theme);const i=location.hostname,r=i===ji||i.endsWith(`.${ji}`)?`; Domain=${ji}`:"",s=location.protocol==="https:"?"; Secure":"";document.cookie=`${ur}=${encodeURIComponent(n.toString())}; Path=/; Max-Age=${vm}; SameSite=Lax${r}${s}`}catch{}}var km=Object.defineProperty,Tm=Object.getOwnPropertyDescriptor,Ze=(t,e,n,i)=>{for(var r=i>1?void 0:i?Tm(e,n):e,s=t.length-1,o;s>=0;s--)(o=t[s])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&km(e,n,r),r};const Wi=matchMedia("(prefers-color-scheme: dark)"),Gi="violinhero-settings",Ao={manual:{en:"Help",de:"Hilfe"},creator:{en:"Creator Help",de:"Creator-Hilfe"}},$o={en:`Open ${ut().app.name}`,de:`${ut().app.name} öffnen`};let ke=class extends lt{constructor(){super(),this.guide="manual",this.language="en",this.root="../",this.pages="",this.theme=Wi.matches?"dark":"light",this.scheme="blue",this.followSystem=e=>{dr().theme||(this.theme=e.matches?"dark":"light",this.applyTheme())},new es(this);try{const e=JSON.parse(localStorage.getItem(Gi)??"{}");To(e.scheme)&&(this.scheme=e.scheme)}catch{}const t=dr();To(t.scheme)&&(this.scheme=t.scheme),t.theme&&(this.theme=t.theme)}connectedCallback(){super.connectedCallback(),this.language in De&&Tc(this.language,!1),this.applyTheme(),Wi.addEventListener("change",this.followSystem),this.stopWatching=Ap(t=>this.user=t),this.stopLanguage=Qr(()=>{const t=this.pageIn(me());me()!==this.language&&t&&(location.href=t+location.hash)})}disconnectedCallback(){var t,e;super.disconnectedCallback(),Wi.removeEventListener("change",this.followSystem),(t=this.stopWatching)==null||t.call(this),(e=this.stopLanguage)==null||e.call(this)}pageIn(t){for(const e of this.pages.split(/\s+/)){const[n,i]=e.split("=");if(n===t&&i)return i}}applyTheme(){var n;const t=document.documentElement;t.dataset.theme=this.theme;const e=ge[this.scheme][this.theme];t.style.setProperty("--accent",e.accent),t.style.setProperty("--accent-hover",e.hover),(n=document.querySelector('meta[name="theme-color"]'))==null||n.setAttribute("content",Zp(this.scheme,this.theme))}setScheme(t){this.scheme=t,Io({scheme:t});try{const e=JSON.parse(localStorage.getItem(Gi)??"{}");localStorage.setItem(Gi,JSON.stringify({...e,scheme:t}))}catch{}this.applyTheme()}render(){var e;const t=((e=Ao[this.guide])==null?void 0:e[this.language])??Ao.manual.en;return P`
      <header class="m-header">
        <a class="m-brand home" href=${this.root} title=${$o[this.language]??$o.en}>
          <svg class="m-logo" viewBox="0 0 100 100" aria-hidden="true">${tm("help")}</svg>
          <span class="m-titles">
            <!-- The app's name as it is, the help's in the theme colour -->
            <span class="m-name">${ut().app.name} <span class="accent">${t}</span></span>
            ${rm(K().versionTitle("0.207+","fb166a1 · c1d15cb"))}
          </span>
        </a>
        <div class="m-header-end">
          ${nm("help",this.root)}
          <language-menu
            .theme=${this.theme}
            .scheme=${this.scheme}
            @theme-change=${n=>{this.theme=n.detail,Io({theme:n.detail}),this.applyTheme()}}
            @scheme-change=${n=>this.setScheme(n.detail)}
          ></language-menu>
          <account-menu .user=${this.user} place="help" root=${this.root}></account-menu>
        </div>
      </header>
    `}};ke.styles=[sm,om,fn`
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
    `];Ze([Y()],ke.prototype,"guide",2);Ze([Y()],ke.prototype,"language",2);Ze([Y()],ke.prototype,"root",2);Ze([Y()],ke.prototype,"pages",2);Ze([Y({reflect:!0})],ke.prototype,"theme",2);Ze([Y({reflect:!0})],ke.prototype,"scheme",2);Ze([G()],ke.prototype,"user",2);ke=Ze([br("help-header")],ke);
