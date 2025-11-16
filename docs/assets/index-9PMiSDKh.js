(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var dh={};/**
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
 */const fd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Xy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),r.push(t[h],t[c],t[f],t[d])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Xy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const c=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new Jy;const f=s<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),c!==64){const w=u<<6&192|c;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zy=function(n){const e=fd(n);return dd.encodeByteArray(e,!0)},Oo=function(n){return Zy(n).replace(/\./g,"")},pd=function(n){try{return dd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function No(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ev(t)||(n[t]=No(n[t],e[t]));return n}function ev(n){return n!=="__proto__"}/**
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
 */function tv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nv=()=>tv().__FIREBASE_DEFAULTS__,rv=()=>{if(typeof process>"u"||typeof dh>"u")return;const n=dh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pd(n[1]);return e&&JSON.parse(e)},wu=()=>{try{return nv()||rv()||iv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},md=()=>{var n;return(n=wu())===null||n===void 0?void 0:n.config},sv=n=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ov{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function av(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Oo(JSON.stringify(t)),Oo(JSON.stringify(o)),""].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function _u(){var n;const e=(n=wu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uv(){return typeof self=="object"&&self.self===self}function gd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yd(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cv(){return!_u()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ns(){try{return typeof indexedDB=="object"}catch{return!1}}function hv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const fv="FirebaseError";class vt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=fv,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vt(i,a,r)}}function dv(n,e){return n.replace(pv,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pv=/\{\$([^}]+)}/g;/**
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
 */function ph(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tl(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(mh(s)&&mh(o)){if(!Tl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function mh(n){return n!==null&&typeof n=="object"}/**
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
 */function di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function vd(n,e){const t=new gv(n,e);return t.subscribe.bind(t)}class gv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");yv(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Za),i.error===void 0&&(i.error=Za),i.complete===void 0&&(i.complete=Za);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Za(){}/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class Zt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class vv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ov;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_v(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wv(n){return n===Xn?void 0:n}function _v(n){return n.instantiationMode==="EAGER"}/**
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
 */class bv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Eu=[];var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const wd={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ev=Ee.INFO,Iv={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Tv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Iv[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class na{constructor(e){this.name=e,this._logLevel=Ev,this._logHandler=Tv,this._userLogHandler=null,Eu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}function Sv(n){Eu.forEach(e=>{e.setLogLevel(n)})}function Av(n,e){for(const t of Eu){let r=null;e&&e.level&&(r=wd[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&n({level:Ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}const kv=(n,e)=>e.some(t=>n instanceof t);let gh,yh;function Ov(){return gh||(gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nv(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _d=new WeakMap,Sl=new WeakMap,bd=new WeakMap,el=new WeakMap,Iu=new WeakMap;function Rv(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(On(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_d.set(t,n)}).catch(()=>{}),Iu.set(e,n),e}function xv(n){if(Sl.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sl.set(n,e)}let Al={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return On(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Cv(n){Al=n(Al)}function Dv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(tl(this),e,...t);return bd.set(r,e.sort?e.sort():[e]),On(r)}:Nv().includes(n)?function(...e){return n.apply(tl(this),e),On(_d.get(this))}:function(...e){return On(n.apply(tl(this),e))}}function Pv(n){return typeof n=="function"?Dv(n):(n instanceof IDBTransaction&&xv(n),kv(n,Ov())?new Proxy(n,Al):n)}function On(n){if(n instanceof IDBRequest)return Rv(n);if(el.has(n))return el.get(n);const e=Pv(n);return e!==n&&(el.set(n,e),Iu.set(e,n)),e}const tl=n=>Iu.get(n);function Lv(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=On(o);return r&&o.addEventListener("upgradeneeded",l=>{r(On(o.result),l.oldVersion,l.newVersion,On(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Mv=["get","getKey","getAll","getAllKeys","count"],Fv=["put","add","delete","clear"],nl=new Map;function vh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nl.get(e))return nl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Fv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mv.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),i&&l.done]))[0]};return nl.set(e,s),s}Cv(n=>({...n,get:(e,t,r)=>vh(e,t)||n.get(e,t,r),has:(e,t)=>!!vh(e,t)||n.has(e,t)}));/**
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
 */class qv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bv(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kl="@firebase/app",wh="0.9.13";/**
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
 */const pr=new na("@firebase/app"),Uv="@firebase/app-compat",Vv="@firebase/analytics-compat",jv="@firebase/analytics",zv="@firebase/app-check-compat",$v="@firebase/app-check",Kv="@firebase/auth",Gv="@firebase/auth-compat",Hv="@firebase/database",Wv="@firebase/database-compat",Qv="@firebase/functions",Yv="@firebase/functions-compat",Xv="@firebase/installations",Jv="@firebase/installations-compat",Zv="@firebase/messaging",ew="@firebase/messaging-compat",tw="@firebase/performance",nw="@firebase/performance-compat",rw="@firebase/remote-config",iw="@firebase/remote-config-compat",sw="@firebase/storage",ow="@firebase/storage-compat",aw="@firebase/firestore",lw="@firebase/firestore-compat",uw="firebase",cw="9.23.0";/**
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
 */const Nn="[DEFAULT]",hw={[kl]:"fire-core",[Uv]:"fire-core-compat",[jv]:"fire-analytics",[Vv]:"fire-analytics-compat",[$v]:"fire-app-check",[zv]:"fire-app-check-compat",[Kv]:"fire-auth",[Gv]:"fire-auth-compat",[Hv]:"fire-rtdb",[Wv]:"fire-rtdb-compat",[Qv]:"fire-fn",[Yv]:"fire-fn-compat",[Xv]:"fire-iid",[Jv]:"fire-iid-compat",[Zv]:"fire-fcm",[ew]:"fire-fcm-compat",[tw]:"fire-perf",[nw]:"fire-perf-compat",[rw]:"fire-rc",[iw]:"fire-rc-compat",[sw]:"fire-gcs",[ow]:"fire-gcs-compat",[aw]:"fire-fst",[lw]:"fire-fst-compat","fire-js":"fire-js",[uw]:"fire-js-all"};/**
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
 */const Rn=new Map,rs=new Map;function Ro(n,e){try{n.container.addComponent(e)}catch(t){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ed(n,e){n.container.addOrOverwriteComponent(e)}function xn(n){const e=n.name;if(rs.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;rs.set(e,n);for(const t of Rn.values())Ro(t,n);return!0}function Id(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fw(n,e,t=Nn){Id(n,e).clearInstance(t)}function dw(){rs.clear()}/**
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
 */const pw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new kr("app","Firebase",pw);/**
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
 */let mw=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}};/**
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
 */const jn=cw;function Tu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(t||(t=md()),!t)throw un.create("no-options");const s=Rn.get(i);if(s){if(Tl(t,s.options)&&Tl(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new bv(i);for(const l of rs.values())o.addComponent(l);const a=new mw(t,r,o);return Rn.set(i,a),a}function gw(n=Nn){const e=Rn.get(n);if(!e&&n===Nn&&md())return Tu();if(!e)throw un.create("no-app",{appName:n});return e}function yw(){return Array.from(Rn.values())}async function Td(n){const e=n.name;Rn.has(e)&&(Rn.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function Qt(n,e,t){var r;let i=(r=hw[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}xn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Sd(n,e){if(n!==null&&typeof n!="function")throw un.create("invalid-log-argument");Av(n,e)}function Ad(n){Sv(n)}/**
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
 */const vw="firebase-heartbeat-database",ww=1,is="firebase-heartbeat-store";let rl=null;function kd(){return rl||(rl=Lv(vw,ww,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(is)}}}).catch(n=>{throw un.create("idb-open",{originalErrorMessage:n.message})})),rl}async function _w(n){try{return await(await kd()).transaction(is).objectStore(is).get(Od(n))}catch(e){if(e instanceof vt)pr.warn(e.message);else{const t=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(t.message)}}}async function _h(n,e){try{const r=(await kd()).transaction(is,"readwrite");await r.objectStore(is).put(e,Od(n)),await r.done}catch(t){if(t instanceof vt)pr.warn(t.message);else{const r=un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pr.warn(r.message)}}}function Od(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bw=1024,Ew=30*24*60*60*1e3;class Iw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sw(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ew}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bh(),{heartbeatsToSend:t,unsentEntries:r}=Tw(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bh(){return new Date().toISOString().substring(0,10)}function Tw(n,e=bw){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Eh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Eh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ns()?hv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _w(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Eh(n){return Oo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Aw(n){xn(new Zt("platform-logger",e=>new qv(e),"PRIVATE")),xn(new Zt("heartbeat",e=>new Iw(e),"PRIVATE")),Qt(kl,wh,n),Qt(kl,wh,"esm2017"),Qt("fire-js","")}Aw("");const kw=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:vt,SDK_VERSION:jn,_DEFAULT_ENTRY_NAME:Nn,_addComponent:Ro,_addOrOverwriteComponent:Ed,_apps:Rn,_clearComponents:dw,_components:rs,_getProvider:Id,_registerComponent:xn,_removeServiceInstance:fw,deleteApp:Td,getApp:gw,getApps:yw,initializeApp:Tu,onLog:Sd,registerVersion:Qt,setLogLevel:Ad},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e,t){this._delegate=e,this.firebase=t,Ro(e,new Zt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Td(this._delegate)))}_getService(e,t=Nn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=Nn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ro(this._delegate,e)}_addOrOverwriteComponent(e){Ed(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ih=new kr("app-compat","Firebase",Nw);/**
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
 */function Rw(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Qt,setLogLevel:Ad,onLog:Sd,apps:null,SDK_VERSION:jn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:kw}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Nn,!ph(e,u))throw Ih.create("no-app",{appName:u});return e[u]}i.App=n;function s(u,h={}){const c=Tu(u,h);if(ph(e,c.name))return e[c.name];const f=new n(c,t);return e[c.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,c=h.replace("-compat","");if(xn(u)&&u.type==="PUBLIC"){const f=(d=i())=>{if(typeof d[c]!="function")throw Ih.create("invalid-app-argument",{appName:h});return d[c]()};u.serviceProps!==void 0&&No(f,u.serviceProps),t[c]=f,n.prototype[c]=function(...d){return this._getService.bind(this,h).apply(this,u.multipleInstances?d:[])}}return u.type==="PUBLIC"?t[c]:null}function l(u,h){return h==="serverAuth"?null:h}return t}/**
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
 */function Nd(){const n=Rw(Ow);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Nd,extendNamespace:e,createSubscribe:vd,ErrorFactory:kr,deepExtend:No});function e(t){No(n,t)}return n}const xw=Nd();/**
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
 */const Th=new na("@firebase/app-compat"),Cw="@firebase/app-compat",Dw="0.2.13";/**
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
 */function Pw(n){Qt(Cw,Dw,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(uv()&&self.firebase!==void 0){Th.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Th.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Yt=xw;Pw();var Lw="firebase",Mw="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.registerVersion(Lw,Mw,"app-compat");function Su(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Oi={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Lr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend."}}function Rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qw=Fw,Bw=Rd,xd=new kr("auth","Firebase",Rd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new na("@firebase/auth");function Uw(n,...e){xo.logLevel<=Ee.WARN&&xo.warn(`Auth (${jn}): ${n}`,...e)}function go(n,...e){xo.logLevel<=Ee.ERROR&&xo.error(`Auth (${jn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,...e){throw Au(n,...e)}function at(n,...e){return Au(n,...e)}function Cd(n,e,t){const r=Object.assign(Object.assign({},Bw()),{[e]:t});return new kr("auth","Firebase",r).create(e,{appName:n.name})}function pi(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ut(n,"argument-error"),Cd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Au(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xd.create(n,...e)}function ee(n,e,...t){if(!n)throw Au(e,...t)}function $t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw go(e),new Error(e)}function Mt(n,e){n||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ku(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ku()||gd()||"connection"in navigator)?navigator.onLine:!0}function jw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=lv()||bu()}get(){return Vw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new xs(3e4,6e4);function He(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ye(n,e,t,r,i={}){return Pd(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=di(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Dd.fetch()(Ld(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Pd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zw),e);try{const i=new Kw(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ui(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ui(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ui(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cd(n,h,u);ut(n,h)}}catch(i){if(i instanceof vt)throw i;ut(n,"network-request-failed",{message:String(i)})}}async function pn(n,e,t,r,i={}){const s=await Ye(n,e,t,r,i);return"mfaPendingCredential"in s&&ut(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ld(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ou(n.config,i):`${n.config.apiScheme}://${i}`}class Kw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),$w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ui(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=at(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e){return Ye(n,"POST","/v1/accounts:delete",e)}async function Hw(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function Ww(n,e){return Ye(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qw(n,e=!1){const t=ce(n),r=await t.getIdToken(e),i=ra(r);ee(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gi(il(i.auth_time)),issuedAtTime:Gi(il(i.iat)),expirationTime:Gi(il(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function il(n){return Number(n)*1e3}function ra(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=pd(t);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yw(n){const e=ra(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&Xw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Xw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function os(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hn(n,Ww(t,{idToken:r}));ee(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t_(s.providerUserInfo):[],a=e_(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Md(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,c)}async function Zw(n){const e=ce(n);await os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t_(n){return n.map(e=>{var{providerId:t}=e,r=Su(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){const t=await Pd(n,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ld(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await n_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new as;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hn(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qw(this,e)}reload(){return Zw(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await os(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hn(this,Gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,u,h;const c=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,d=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=t.createdAt)!==null&&u!==void 0?u:void 0,y=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:p,isAnonymous:b,providerData:k,stsTokenManager:S}=t;ee(_&&S,e,"internal-error");const A=as.fromJSON(this.name,S);ee(typeof _=="string",e,"internal-error"),_n(c,e.name),_n(f,e.name),ee(typeof p=="boolean",e,"internal-error"),ee(typeof b=="boolean",e,"internal-error"),_n(d,e.name),_n(w,e.name),_n(g,e.name),_n(v,e.name),_n(m,e.name),_n(y,e.name);const R=new ur({uid:_,auth:e,email:f,emailVerified:p,displayName:c,isAnonymous:b,photoURL:w,phoneNumber:d,tenantId:g,stsTokenManager:A,createdAt:m,lastLoginAt:y});return k&&Array.isArray(k)&&(R.providerData=k.map(T=>Object.assign({},T))),v&&(R._redirectEventId=v),R}static async _fromIdTokenResponse(e,t,r=!1){const i=new as;i.updateFromServerResponse(t);const s=new ur({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await os(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=new Map;function Ot(n){Mt(n instanceof Function,"Expected a class definition");let e=Ah.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ah.set(n,e),e)}/**
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
 */class Fd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fd.type="NONE";const Jr=Fd;/**
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
 */function cr(n,e,t){return`firebase:${n}:${e}:${t}`}class $r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cr(this.userKey,i.apiKey,s),this.fullPersistenceKey=cr("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $r(Ot(Jr),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(Jr);const o=cr(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const c=ur._fromJSON(e,h);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $r(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $r(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vd(e))return"Blackberry";if(jd(e))return"Webos";if(Nu(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(Cs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qd(n=Me()){return/firefox\//i.test(n)}function Nu(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(n=Me()){return/crios\//i.test(n)}function Ud(n=Me()){return/iemobile/i.test(n)}function Cs(n=Me()){return/android/i.test(n)}function Vd(n=Me()){return/blackberry/i.test(n)}function jd(n=Me()){return/webos/i.test(n)}function mi(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function r_(n=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function i_(n=Me()){var e;return mi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s_(){return yd()&&document.documentMode===10}function zd(n=Me()){return mi(n)||Cs(n)||jd(n)||Vd(n)||/windows phone/i.test(n)||Ud(n)}function o_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,e=[]){let t;switch(n){case"Browser":t=kh(Me());break;case"Worker":t=`${kh(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(n){return(await Ye(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Kd(n,e){return Ye(n,"GET","/v2/recaptchaConfig",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n){return n!==void 0&&n.getResponse!==void 0}function Nh(n){return n!==void 0&&n.enterprise!==void 0}class Gd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ru(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",l_().appendChild(r)})}function Hd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const u_="https://www.google.com/recaptcha/enterprise.js?render=",c_="recaptcha-enterprise",h_="NO_RECAPTCHA";class Wd{constructor(e){this.type=c_,this.auth=ze(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Kd(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Gd(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Nh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(h_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Nh(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ru(u_+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Cn(n,e,t,r=!1){const i=new Wd(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class f_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new f_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await os(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ce(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}async initializeRecaptchaConfig(){const e=await Kd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Gd(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Wd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Uw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ze(n){return ce(n)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=vd(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function p_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m_(n,e,t){const r=ze(n);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Qd(e),{host:o,port:a}=g_(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||y_()}function Qd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function g_(n){const e=Qd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xh(o)}}}function xh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function y_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd(n,e){return Ye(n,"POST","/v1/accounts:resetPassword",He(n,e))}async function Xd(n,e){return Ye(n,"POST","/v1/accounts:update",e)}async function v_(n,e){return Ye(n,"POST","/v1/accounts:update",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){return pn(n,"POST","/v1/accounts:signInWithPassword",He(n,e))}async function ia(n,e){return Ye(n,"POST","/v1/accounts:sendOobCode",He(n,e))}async function w_(n,e){return ia(n,e)}async function ol(n,e){return ia(n,e)}async function al(n,e){return ia(n,e)}async function __(n,e){return ia(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",He(n,e))}async function E_(n,e){return pn(n,"POST","/v1/accounts:signInWithEmailLink",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends gi{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ls(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ls(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const i=await Cn(e,r,"signInWithPassword");return sl(e,i)}else return sl(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Cn(e,r,"signInWithPassword");return sl(e,s)}else return Promise.reject(i)});case"emailLink":return b_(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Xd(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E_(e,{idToken:t,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n,e){return pn(n,"POST","/v1/accounts:signInWithIdp",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="http://localhost";class en extends gi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ut("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Su(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new en(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}buildRequest(){const e={requestUri:I_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e){return Ye(n,"POST","/v1/accounts:sendVerificationCode",He(n,e))}async function S_(n,e){return pn(n,"POST","/v1/accounts:signInWithPhoneNumber",He(n,e))}async function A_(n,e){const t=await pn(n,"POST","/v1/accounts:signInWithPhoneNumber",He(n,e));if(t.temporaryProof)throw Ui(n,"account-exists-with-different-credential",t);return t}const k_={USER_NOT_FOUND:"user-not-found"};async function O_(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return pn(n,"POST","/v1/accounts:signInWithPhoneNumber",He(n,t),k_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends gi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new hr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new hr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return S_(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return A_(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return O_(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new hr({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R_(n){const e=jr(Bi(n)).link,t=e?jr(Bi(e)).deep_link_id:null,r=jr(Bi(n)).deep_link_id;return(r?jr(Bi(r)).link:null)||r||t||e||n}class sa{constructor(e){var t,r,i,s,o,a;const l=jr(Bi(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,c=N_((i=l.mode)!==null&&i!==void 0?i:null);ee(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=R_(e);try{return new sa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,t){return ls._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=sa.parseLink(t);return ee(r,"argument-error"),ls._fromEmailAndCode(e,r.code,r.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends mn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Kr extends yi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ee("providerId"in t&&"signInMethod"in t,"argument-error"),en._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ee(e.idToken||e.accessToken,"argument-error"),en._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Kr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Kr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!t&&!s||!a)return null;try{return new Kr(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends yi{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return en._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ut.credential(t,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends yi{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="http://localhost";class Zr extends gi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new Zr(r,s)}static _create(e,t){return new Zr(e,t)}buildRequest(){return{requestUri:x_,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="saml.";class Co extends mn{constructor(e){ee(e.startsWith(C_),"argument-error"),super(e)}static credentialFromResult(e){return Co.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Co.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Zr.fromJSON(e);return ee(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Zr._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends yi{constructor(){super("twitter.com")}static credential(e,t){return en._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jt.credential(t,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(n,e){return pn(n,"POST","/v1/accounts:signUp",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ur._fromIdTokenResponse(e,r,i),o=Ch(r);return new Pt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ch(r);return new Pt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ch(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n){var e;const t=ze(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Pt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await yo(t,{returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends vt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Do(e,t,r,i)}}function Jd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function P_(n,e){const t=ce(n);await oa(!0,t,e);const{providerUserInfo:r}=await Hw(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=Zd(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function xu(n,e,t=!1){const r=await hn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pt._forOperation(n,"link",r)}async function oa(n,e,t){await os(e);const r=Zd(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";ee(r.has(t)===n,e.auth,i)}/**
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
 */async function ep(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await hn(n,Jd(r,i,e,n),t);ee(s.idToken,r,"internal-error");const o=ra(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(n.uid===a,r,"user-mismatch"),Pt._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(n,e,t=!1){const r="signIn",i=await Jd(n,r,e),s=await Pt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function aa(n,e){return tp(ze(n),e)}async function np(n,e){const t=ce(n);return await oa(!1,t,e.providerId),xu(t,e)}async function rp(n,e){return ep(ce(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(n,e){return pn(n,"POST","/v1/accounts:signInWithCustomToken",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(n,e){const t=ze(n),r=await L_(t,{token:e,returnSecureToken:!0}),i=await Pt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Cu._fromServerResponse(e,t):"totpInfo"in t?Du._fromServerResponse(e,t):ut(e,"internal-error")}}class Cu extends Ds{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Cu(t)}}class Du extends Ds{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Du(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n,e,t){var r;ee(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),ee(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ee(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ee(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(n,e,t){var r;const i=ze(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await Cn(i,s,"getOobCode",!0);t&&Gr(i,o,t),await ol(i,o)}else t&&Gr(i,s,t),await ol(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Cn(i,s,"getOobCode",!0);t&&Gr(i,a,t),await ol(i,a)}else return Promise.reject(o)})}async function q_(n,e,t){await Yd(ce(n),{oobCode:e,newPassword:t})}async function B_(n,e){await v_(ce(n),{oobCode:e})}async function ip(n,e){const t=ce(n),r=await Yd(t,{oobCode:e}),i=r.requestType;switch(ee(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ee(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ee(r.mfaInfo,t,"internal-error");default:ee(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Ds._fromServerResponse(ze(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function U_(n,e){const{data:t}=await ip(ce(n),e);return t.email}async function V_(n,e,t){var r;const i=ze(n),s={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Cn(i,s,"signUpPassword");o=yo(i,u)}else o=yo(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await Cn(i,s,"signUpPassword");return yo(i,h)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Pt._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function j_(n,e,t){return aa(ce(n),zn.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e,t){var r;const i=ze(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){ee(l.handleCodeInApp,i,"argument-error"),l&&Gr(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Cn(i,s,"getOobCode",!0);o(a,t),await al(i,a)}else o(s,t),await al(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Cn(i,s,"getOobCode",!0);o(l,t),await al(i,l)}else return Promise.reject(a)})}function $_(n,e){const t=sa.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function K_(n,e,t){const r=ce(n),i=zn.credentialWithLink(e,t||ss());return ee(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),aa(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(n,e){return Ye(n,"POST","/v1/accounts:createAuthUri",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(n,e){const t=ku()?ss():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await G_(ce(n),r);return i||[]}async function W_(n,e){const t=ce(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Gr(t.auth,i,e);const{email:s}=await w_(t.auth,i);s!==n.email&&await n.reload()}async function Q_(n,e,t){const r=ce(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Gr(r.auth,s,t);const{email:o}=await __(r.auth,s);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e){return Ye(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ce(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await hn(r,Y_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function J_(n,e){return sp(ce(n),e,null)}function Z_(n,e){return sp(ce(n),null,e)}async function sp(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await hn(n,Xd(r,s));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function eb(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=ra(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Hr(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new tb(s,i);case"github.com":return new nb(s,i);case"google.com":return new rb(s,i);case"twitter.com":return new ib(s,i,n.screenName||null);case"custom":case"anonymous":return new Hr(s,null);default:return new Hr(s,r,i)}}class Hr{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class op extends Hr{constructor(e,t,r,i){super(e,t,r),this.username=i}}class tb extends Hr{constructor(e,t){super(e,"facebook.com",t)}}class nb extends op{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class rb extends Hr{constructor(e,t){super(e,"google.com",t)}}class ib extends op{constructor(e,t,r){super(e,"twitter.com",t,r)}}function sb(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:eb(t)}class ir{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new ir("enroll",e,t)}static _fromMfaPendingCredential(e){return new ir("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return ir._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ir._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=ze(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ds._fromServerResponse(r,a));ee(i.mfaPendingCredential,r,"internal-error");const o=ir._fromMfaPendingCredential(i.mfaPendingCredential);return new Pu(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const h=await Pt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return ee(t.user,r,"internal-error"),Pt._forOperation(t.user,t.operationType,u);default:ut(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ob(n,e){var t;const r=ce(n),i=e;return ee(e.customData.operationType,r,"argument-error"),ee((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Pu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:start",He(n,e))}function lb(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:finalize",He(n,e))}function ub(n,e){return Ye(n,"POST","/v2/accounts/mfaEnrollment:withdraw",He(n,e))}class Lu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Ds._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Lu(e)}async getSession(){return ir._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,i=await this.getSession(),s=await hn(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await hn(this.user,ub(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ll=new WeakMap;function cb(n){const e=ce(n);return ll.has(e)||ll.set(e,Lu._fromUser(e)),ll.get(e)}const Po="__sak";/**
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
 */class ap{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){const n=Me();return Nu(n)||mi(n)}const fb=1e3,db=10;class lp extends ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hb()&&o_(),this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,db):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lp.type="LOCAL";const Mu=lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}up.type="SESSION";const mr=up;/**
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
 */function pb(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new la(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(t.origin,s)),l=await pb(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ps("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function gb(n){Ge().location.href=n}/**
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
 */function Fu(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function yb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wb(){return Fu()?self:null}/**
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
 */const cp="firebaseLocalStorageDb",_b=1,Lo="firebaseLocalStorage",hp="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ua(n,e){return n.transaction([Lo],e?"readwrite":"readonly").objectStore(Lo)}function bb(){const n=indexedDB.deleteDatabase(cp);return new Ls(n).toPromise()}function Ol(){const n=indexedDB.open(cp,_b);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Lo,{keyPath:hp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Lo)?e(r):(r.close(),await bb(),e(await Ol()))})})}async function Dh(n,e,t){const r=ua(n,!0).put({[hp]:e,value:t});return new Ls(r).toPromise()}async function Eb(n,e){const t=ua(n,!1).get(e),r=await new Ls(t).toPromise();return r===void 0?null:r.value}function Ph(n,e){const t=ua(n,!0).delete(e);return new Ls(t).toPromise()}const Ib=800,Tb=3;class fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ol(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(wb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yb(),!this.activeServiceWorker)return;this.sender=new mb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ol();return await Dh(e,Po,"1"),await Ph(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Eb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ua(i,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fp.type="LOCAL";const us=fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:start",He(n,e))}function Ab(n,e){return Ye(n,"POST","/v2/accounts/mfaSignIn:finalize",He(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=500,Ob=6e4,no=1e12;class Nb{constructor(e){this.auth=e,this.counter=no,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Rb(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||no;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||no;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||no;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Rb{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;ee(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=xb(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Ob)},kb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function xb(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=Hd("rcb"),Cb=new xs(3e4,6e4),Db="https://www.google.com/recaptcha/api.js?";class Pb{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ge().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ee(Lb(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Oh(Ge().grecaptcha)?Promise.resolve(Ge().grecaptcha):new Promise((r,i)=>{const s=Ge().setTimeout(()=>{i(at(e,"network-request-failed"))},Cb.get());Ge()[ul]=()=>{Ge().clearTimeout(s),delete Ge()[ul];const a=Ge().grecaptcha;if(!a||!Oh(a)){i(at(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const c=l(u,h);return this.counter++,c},this.hostLanguage=t,r(a)};const o=`${Db}?${di({onload:ul,render:"explicit",hl:t})}`;Ru(o).catch(()=>{clearTimeout(s),i(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ge().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Lb(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Mb{async load(e){return new Nb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="recaptcha",Fb={theme:"light",type:"image"};let qb=class{constructor(e,t=Object.assign({},Fb),r){this.parameters=t,this.type=dp,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ze(r),this.isInvisible=this.parameters.size==="invisible",ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;ee(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mb:new Pb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ee(!this.parameters.sitekey,this.auth,"argument-error"),ee(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Ge()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){ee(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ee(ku()&&!Fu(),this.auth,"internal-error"),await Bb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await a_(this.auth);ee(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ee(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Bb(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=hr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ub(n,e,t){const r=ze(n),i=await ca(r,e,ce(t));return new qu(i,s=>aa(r,s))}async function Vb(n,e,t){const r=ce(n);await oa(!1,r,"phone");const i=await ca(r.auth,e,ce(t));return new qu(i,s=>np(r,s))}async function jb(n,e,t){const r=ce(n),i=await ca(r.auth,e,ce(t));return new qu(i,s=>rp(r,s))}async function ca(n,e,t){var r;const i=await t.verify();try{ee(typeof i=="string",n,"argument-error"),ee(t.type===dp,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return ee(o.type==="enroll",n,"internal-error"),(await ab(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{ee(o.type==="signin",n,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return ee(a,n,"missing-multi-factor-info"),(await Sb(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await T_(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function zb(n,e){await xu(ce(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr=class vo{constructor(e){this.providerId=vo.PROVIDER_ID,this.auth=ze(e)}verifyPhoneNumber(e,t){return ca(this.auth,e,ce(t))}static credential(e,t){return hr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vo.credentialFromTaggedObject(t)}static credentialFromError(e){return vo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?hr._fromTokenResponse(t,r):null}};gr.PROVIDER_ID="phone";gr.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Or(n,e){return e?Ot(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bu extends gi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $b(n){return tp(n.auth,new Bu(n),n.bypassAuthState)}function Kb(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),ep(t,new Bu(n),n.bypassAuthState)}async function Gb(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),xu(t,new Bu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return Gb;case"reauthViaPopup":case"reauthViaRedirect":return Kb;default:ut(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new xs(2e3,1e4);async function Wb(n,e,t){const r=ze(n);pi(n,e,mn);const i=Or(r,t);return new sn(r,"signInViaPopup",e,i).executeNotNull()}async function Qb(n,e,t){const r=ce(n);pi(r.auth,e,mn);const i=Or(r.auth,t);return new sn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Yb(n,e,t){const r=ce(n);pi(r.auth,e,mn);const i=Or(r.auth,t);return new sn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class sn extends pp{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=Ps();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hb.get())};e()}}sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="pendingRedirect",Hi=new Map;class Jb extends pp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await Zb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zb(n,e){const t=gp(e),r=mp(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Uu(n,e){return mp(n)._set(gp(e),"true")}function e0(){Hi.clear()}function Vu(n,e){Hi.set(n._key(),e)}function mp(n){return Ot(n._redirectPersistence)}function gp(n){return cr(Xb,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(n,e,t){return n0(n,e,t)}async function n0(n,e,t){const r=ze(n);pi(n,e,mn),await r._initializationPromise;const i=Or(r,t);return await Uu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function r0(n,e,t){return i0(n,e,t)}async function i0(n,e,t){const r=ce(n);pi(r.auth,e,mn),await r.auth._initializationPromise;const i=Or(r.auth,t);await Uu(i,r.auth);const s=await yp(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function s0(n,e,t){return o0(n,e,t)}async function o0(n,e,t){const r=ce(n);pi(r.auth,e,mn),await r.auth._initializationPromise;const i=Or(r.auth,t);await oa(!1,r,e.providerId),await Uu(i,r.auth);const s=await yp(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function a0(n,e){return await ze(n)._initializationPromise,ha(n,e,!1)}async function ha(n,e,t=!1){const r=ze(n),i=Or(r,e),o=await new Jb(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function yp(n){const e=Ps(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=10*60*1e3;class vp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!u0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!wp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(at(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lh(e))}saveEventToCache(e){this.cachedEventUids.add(Lh(e)),this.lastProcessedEventTime=Date.now()}}function Lh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function u0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n,e={}){return Ye(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h0=/^https?/;async function f0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await _p(n);for(const t of e)try{if(d0(t))return}catch{}ut(n,"unauthorized-domain")}function d0(n){const e=ss(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!h0.test(t))return!1;if(c0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const p0=new xs(3e4,6e4);function Mh(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function m0(n){return new Promise((e,t)=>{var r,i,s;function o(){Mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mh(),t(at(n,"network-request-failed"))},timeout:p0.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const a=Hd("iframefcb");return Ge()[a]=()=>{gapi.load?o():t(at(n,"network-request-failed"))},Ru(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function g0(n){return wo=wo||m0(n),wo}/**
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
 */const y0=new xs(5e3,15e3),v0="__/auth/iframe",w0="emulator/auth/iframe",_0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function E0(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ou(e,w0):`https://${n.config.authDomain}/${v0}`,r={apiKey:e.apiKey,appName:n.name,v:jn},i=b0.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${di(r).slice(1)}`}async function I0(n){const e=await g0(n),t=Ge().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:E0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),a=Ge().setTimeout(()=>{s(o)},y0.get());function l(){Ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const T0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},S0=500,A0=600,k0="_blank",O0="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N0(n,e,t,r=S0,i=A0){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},T0),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Me().toLowerCase();t&&(a=Bd(u)?k0:t),qd(u)&&(e=e||O0,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[d,w])=>`${f}${d}=${w},`,"");if(i_(u)&&a!=="_self")return R0(e||"",a),new Fh(null);const c=window.open(e||"",a,h);ee(c,n,"popup-blocked");try{c.focus()}catch{}return new Fh(c)}function R0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const x0="__/auth/handler",C0="emulator/auth/handler",D0=encodeURIComponent("fac");async function Nl(n,e,t,r,i,s){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:jn,eventId:i};if(e instanceof mn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",mv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries(s||{}))o[h]=c}if(e instanceof yi){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${D0}=${encodeURIComponent(l)}`:"";return`${P0(n)}?${di(a).slice(1)}${u}`}function P0({config:n}){return n.emulator?Ou(n,C0):`https://${n.authDomain}/${x0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl="webStorageSupport";class L0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mr,this._completeRedirectFn=ha,this._overrideRedirectResult=Vu}async _openPopup(e,t,r,i){var s;Mt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Nl(e,t,r,ss(),i);return N0(e,o,Ps())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Nl(e,t,r,ss(),i);return gb(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Mt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await I0(e),r=new vp(e);return t.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cl,{type:cl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cl];o!==void 0&&t(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=f0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zd()||Nu()||mi()}}const M0=L0;class F0{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return $t("unexpected MultiFactorSessionType")}}}class ju extends F0{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ju(e)}_finalizeEnroll(e,t,r){return lb(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ab(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bp{constructor(){}static assertion(e){return ju._fromCredential(e)}}bp.FACTOR_ID="phone";var qh="@firebase/auth",Bh="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function U0(n){xn(new Zt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$d(n)},u=new d_(r,i,s,l);return p_(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),xn(new Zt("auth-internal",e=>{const t=ze(e.getProvider("auth").getImmediate());return(r=>new q0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(qh,Bh,B0(n)),Qt(qh,Bh,"esm2017")}/**
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
 */const V0=5*60;sv("authIdTokenMaxAge");U0("Browser");/**
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
 */function yr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=2e3;async function z0(n,e,t){var r;const{BuildInfo:i}=yr();Mt(e.sessionId,"AuthEvent did not contain a session ID");const s=await W0(e.sessionId),o={};return mi()?o.ibi=i.packageName:Cs()?o.apn=i.packageName:ut(n,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Nl(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function $0(n){const{BuildInfo:e}=yr(),t={};mi()?t.iosBundleId=e.packageName:Cs()?t.androidPackageName=e.packageName:ut(n,"operation-not-supported-in-this-environment"),await _p(n,t)}function K0(n){const{cordova:e}=yr();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,r_()?"_blank":"_system","location=yes"),t(i)})})}async function G0(n,e,t){const{cordova:r}=yr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var c;s();const f=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof f=="function"&&f(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(at(n,"redirect-cancelled-by-user"))},j0))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Cs()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function H0(n){var e,t,r,i,s,o,a,l,u,h;const c=yr();ee(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ee(typeof((t=c==null?void 0:c.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ee(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ee(typeof((l=(a=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ee(typeof((h=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function W0(n){const e=Q0(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Q0(n){if(Mt(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=20;class X0 extends vp{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function J0(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:tE(),postBody:null,tenantId:n.tenantId,error:at(n,"no-auth-event")}}function Z0(n,e){return Rl()._set(xl(n),e)}async function Uh(n){const e=await Rl()._get(xl(n));return e&&await Rl()._remove(xl(n)),e}function eE(n,e){var t,r;const i=rE(e);if(i.includes("/__/auth/callback")){const s=_o(i),o=s.firebaseError?nE(decodeURIComponent(s.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],l=a?at(a):null;return l?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function tE(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Y0;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Rl(){return Ot(Mu)}function xl(n){return cr("authEvent",n.config.apiKey,n.name)}function nE(n){try{return JSON.parse(n)}catch{return null}}function rE(n){const e=_o(n),t=e.link?decodeURIComponent(e.link):void 0,r=_o(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _o(i).link||i||r||t||n}function _o(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return jr(t.join("?"))}/**
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
 */const iE=500;class sE{constructor(){this._redirectPersistence=mr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ha,this._overrideRedirectResult=Vu}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new X0(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ut(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){H0(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),e0(),await this._originValidation(e);const o=J0(e,r,i);await Z0(e,o);const a=await z0(e,o,t),l=await K0(a);return G0(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$0(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=yr(),o=setTimeout(async()=>{await Uh(e),t.onEvent(Vh())},iE),a=async h=>{clearTimeout(o);const c=await Uh(e);let f=null;c&&(h!=null&&h.url)&&(f=eE(c,h.url)),t.onEvent(f||Vh())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;yr().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(u)&&a({url:h}),typeof l=="function")try{l(h)}catch(c){console.error(c)}}}}const oE=sE;function Vh(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
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
 */function aE(n,e){ze(n)._logFramework(e)}var lE="@firebase/auth-compat",uE="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=1e3;function Wi(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function hE(){return Wi()==="http:"||Wi()==="https:"}function Ep(n=Me()){return!!((Wi()==="file:"||Wi()==="ionic:"||Wi()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function fE(){return bu()||_u()}function dE(){return yd()&&(document==null?void 0:document.documentMode)===11}function pE(n=Me()){return/Edge\/\d+/.test(n)}function mE(n=Me()){return dE()||pE(n)}function Ip(){try{const n=self.localStorage,e=Ps();if(n)return n.setItem(e,"1"),n.removeItem(e),mE()?ns():!0}catch{return zu()&&ns()}return!1}function zu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function hl(){return(hE()||gd()||Ep())&&!fE()&&Ip()&&!zu()}function Tp(){return Ep()&&typeof document<"u"}async function gE(){return Tp()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},cE);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function yE(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt={LOCAL:"local",NONE:"none",SESSION:"session"},Ni=ee,Sp="persistence";function vE(n,e){if(Ni(Object.values(kt).includes(e),n,"invalid-persistence-type"),bu()){Ni(e!==kt.SESSION,n,"unsupported-persistence-type");return}if(_u()){Ni(e===kt.NONE,n,"unsupported-persistence-type");return}if(zu()){Ni(e===kt.NONE||e===kt.LOCAL&&ns(),n,"unsupported-persistence-type");return}Ni(e===kt.NONE||Ip(),n,"unsupported-persistence-type")}async function Cl(n){await n._initializationPromise;const e=Ap(),t=cr(Sp,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function wE(n,e){const t=Ap();if(!t)return[];const r=cr(Sp,n,e);switch(t.getItem(r)){case kt.NONE:return[Jr];case kt.LOCAL:return[us,mr];case kt.SESSION:return[mr];default:return[]}}function Ap(){var n;try{return((n=yE())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=ee;class An{constructor(){this.browserResolver=Ot(M0),this.cordovaResolver=Ot(oE),this.underlyingResolver=null,this._redirectPersistence=mr,this._completeRedirectFn=ha,this._overrideRedirectResult=Vu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Tp()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return _E(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await gE();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n){return n.unwrap()}function bE(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(n){return Op(n)}function IE(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new TE(n,ob(n,e))}else if(r){const i=Op(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Op(n){const{_tokenResponse:e}=n instanceof vt?n.customData:n;if(!e)return null;if(!(n instanceof vt)&&"temporaryProof"in e&&"phoneNumber"in e)return gr.credentialFromResult(n);const t=e.providerId;if(!t||t===Oi.PASSWORD)return null;let r;switch(t){case Oi.GOOGLE:r=Ut;break;case Oi.FACEBOOK:r=Bt;break;case Oi.GITHUB:r=Vt;break;case Oi.TWITTER:r=jt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?t.startsWith("saml.")?Zr._create(t,a):en._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:i,accessToken:s}):new Kr(t).credential({idToken:i,accessToken:s,rawNonce:l})}return n instanceof vt?r.credentialFromError(n):r.credentialFromResult(n)}function bt(n,e){return e.catch(t=>{throw t instanceof vt&&IE(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:EE(t),additionalUserInfo:sb(t),user:on.getOrCreate(i)}})}async function Dl(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>bt(n,t.confirm(r))}}class TE{constructor(e,t){this.resolver=t,this.auth=bE(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return bt(kp(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this._delegate=e,this.multiFactor=cb(e)}static getOrCreate(e){return on.USER_MAP.has(e)||on.USER_MAP.set(e,new on(e)),on.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return bt(this.auth,np(this._delegate,e))}async linkWithPhoneNumber(e,t){return Dl(this.auth,Vb(this._delegate,e,t))}async linkWithPopup(e){return bt(this.auth,Yb(this._delegate,e,An))}async linkWithRedirect(e){return await Cl(ze(this.auth)),s0(this._delegate,e,An)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return bt(this.auth,rp(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Dl(this.auth,jb(this._delegate,e,t))}reauthenticateWithPopup(e){return bt(this.auth,Qb(this._delegate,e,An))}async reauthenticateWithRedirect(e){return await Cl(ze(this.auth)),r0(this._delegate,e,An)}sendEmailVerification(e){return W_(this._delegate,e)}async unlink(e){return await P_(this._delegate,e),this}updateEmail(e){return J_(this._delegate,e)}updatePassword(e){return Z_(this._delegate,e)}updatePhoneNumber(e){return zb(this._delegate,e)}updateProfile(e){return X_(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return Q_(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}on.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=ee;class Pl{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ri(r,"invalid-api-key",{appName:e.name}),Ri(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?An:void 0;this._delegate=t.initialize({options:{persistence:SE(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(qw),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?on.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){m_(this._delegate,e,t)}applyActionCode(e){return B_(this._delegate,e)}checkActionCode(e){return ip(this._delegate,e)}confirmPasswordReset(e,t){return q_(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return bt(this._delegate,V_(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return H_(this._delegate,e)}isSignInWithEmailLink(e){return $_(this._delegate,e)}async getRedirectResult(){Ri(hl(),this._delegate,"operation-not-supported-in-this-environment");const e=await a0(this._delegate,An);return e?bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){aE(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:o}=jh(e,t,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:o}=jh(e,t,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return z_(this._delegate,e,t)}sendPasswordResetEmail(e,t){return F_(this._delegate,e,t||void 0)}async setPersistence(e){vE(this._delegate,e);let t;switch(e){case kt.SESSION:t=mr;break;case kt.LOCAL:t=await Ot(us)._isAvailable()?us:Mu;break;case kt.NONE:t=Jr;break;default:return ut("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return bt(this._delegate,D_(this._delegate))}signInWithCredential(e){return bt(this._delegate,aa(this._delegate,e))}signInWithCustomToken(e){return bt(this._delegate,M_(this._delegate,e))}signInWithEmailAndPassword(e,t){return bt(this._delegate,j_(this._delegate,e,t))}signInWithEmailLink(e,t){return bt(this._delegate,K_(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Dl(this._delegate,Ub(this._delegate,e,t))}async signInWithPopup(e){return Ri(hl(),this._delegate,"operation-not-supported-in-this-environment"),bt(this._delegate,Wb(this._delegate,e,An))}async signInWithRedirect(e){return Ri(hl(),this._delegate,"operation-not-supported-in-this-environment"),await Cl(this._delegate),t0(this._delegate,e,An)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return U_(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pl.Persistence=kt;function jh(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:o=>i(o&&on.getOrCreate(o)),error:e,complete:t}}function SE(n,e){const t=wE(n,e);if(typeof self<"u"&&!t.includes(us)&&t.push(us),typeof window<"u")for(const r of[Mu,mr])t.includes(r)||t.push(r);return t.includes(Jr)||t.push(Jr),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.providerId="phone",this._delegate=new gr(kp(Yt.auth()))}static credential(e,t){return gr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}$u.PHONE_SIGN_IN_METHOD=gr.PHONE_SIGN_IN_METHOD;$u.PROVIDER_ID=gr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=ee;class kE{constructor(e,t,r=Yt.app()){var i;AE((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new qb(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="auth-compat";function NE(n){n.INTERNAL.registerComponent(new Zt(OE,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pl(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Lr.EMAIL_SIGNIN,PASSWORD_RESET:Lr.PASSWORD_RESET,RECOVER_EMAIL:Lr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Lr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Lr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Lr.VERIFY_EMAIL}},EmailAuthProvider:zn,FacebookAuthProvider:Bt,GithubAuthProvider:Vt,GoogleAuthProvider:Ut,OAuthProvider:Kr,SAMLAuthProvider:Co,PhoneAuthProvider:$u,PhoneMultiFactorGenerator:bp,RecaptchaVerifier:kE,TwitterAuthProvider:jt,Auth:Pl,AuthCredential:gi,Error:vt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(lE,uE)}NE(Yt);var RE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},re,Ku=Ku||{},fe=RE||self;function fa(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function da(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function xE(n,e,t){return n.call.apply(n.bind,arguments)}function CE(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function dt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=xE:dt=CE,dt.apply(null,arguments)}function ro(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function tt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function $n(){this.s=this.s,this.o=this.o}var DE=0;$n.prototype.s=!1;$n.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),DE!=0)};$n.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Np=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Gu(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function zh(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(fa(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function pt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var PE=function(){if(!fe.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{fe.addEventListener("test",()=>{},e),fe.removeEventListener("test",()=>{},e)}catch{}return n}();function cs(n){return/^[\s\xa0]*$/.test(n)}function pa(){var n=fe.navigator;return n&&(n=n.userAgent)?n:""}function zt(n){return pa().indexOf(n)!=-1}function Hu(n){return Hu[" "](n),n}Hu[" "]=function(){};function LE(n,e){var t=OI;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var ME=zt("Opera"),ei=zt("Trident")||zt("MSIE"),Rp=zt("Edge"),Ll=Rp||ei,xp=zt("Gecko")&&!(pa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),FE=pa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Cp(){var n=fe.document;return n?n.documentMode:void 0}var Ml;e:{var fl="",dl=function(){var n=pa();if(xp)return/rv:([^\);]+)(\)|;)/.exec(n);if(Rp)return/Edge\/([\d\.]+)/.exec(n);if(ei)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(FE)return/WebKit\/(\S+)/.exec(n);if(ME)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(dl&&(fl=dl?dl[1]:""),ei){var pl=Cp();if(pl!=null&&pl>parseFloat(fl)){Ml=String(pl);break e}}Ml=fl}var Fl;if(fe.document&&ei){var $h=Cp();Fl=$h||parseInt(Ml,10)||void 0}else Fl=void 0;var qE=Fl;function hs(n,e){if(pt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(xp){e:{try{Hu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:BE[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&hs.$.h.call(this)}}tt(hs,pt);var BE={2:"touch",3:"pen",4:"mouse"};hs.prototype.h=function(){hs.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ma="closure_listenable_"+(1e6*Math.random()|0),UE=0;function VE(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++UE,this.fa=this.ia=!1}function ga(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Wu(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function jE(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Dp(n){const e={};for(const t in n)e[t]=n[t];return e}const Kh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pp(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Kh.length;s++)t=Kh[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function ya(n){this.src=n,this.g={},this.h=0}ya.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Bl(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new VE(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function ql(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Np(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ga(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Bl(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),ml={};function Lp(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lp(n,e[s],t,r,i);return null}return t=qp(t),n&&n[ma]?n.O(e,t,da(r)?!!r.capture:!1,i):zE(n,e,t,!1,r,i)}function zE(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=da(i)?!!i.capture:!!i,a=Xu(n);if(a||(n[Qu]=a=new ya(n)),t=a.add(e,t,r,o,s),t.proxy)return t;if(r=$E(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)PE||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(Fp(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function $E(){function n(t){return e.call(n.src,n.listener,t)}const e=KE;return n}function Mp(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Mp(n,e[s],t,r,i);else r=da(r)?!!r.capture:!!r,t=qp(t),n&&n[ma]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Bl(s,t,r,i),-1<t&&(ga(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=Xu(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Bl(e,t,r,i)),(t=-1<n?e[n]:null)&&Yu(t))}function Yu(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[ma])ql(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Fp(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Xu(e))?(ql(t,n),t.h==0&&(t.src=null,e[Qu]=null)):ga(n)}}}function Fp(n){return n in ml?ml[n]:ml[n]="on"+n}function KE(n,e){if(n.fa)n=!0;else{e=new hs(e,this);var t=n.listener,r=n.la||n.src;n.ia&&Yu(n),n=t.call(r,e)}return n}function Xu(n){return n=n[Qu],n instanceof ya?n:null}var gl="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(n){return typeof n=="function"?n:(n[gl]||(n[gl]=function(e){return n.handleEvent(e)}),n[gl])}function et(){$n.call(this),this.i=new ya(this),this.S=this,this.J=null}tt(et,$n);et.prototype[ma]=!0;et.prototype.removeEventListener=function(n,e,t,r){Mp(this,n,e,t,r)};function lt(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new pt(e,n);else if(e instanceof pt)e.target=e.target||n;else{var i=e;e=new pt(r,n),Pp(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=io(o,r,!0,e)&&i}if(o=e.g=n,i=io(o,r,!0,e)&&i,i=io(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=io(o,r,!1,e)&&i}et.prototype.N=function(){if(et.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ga(t[r]);delete n.g[e],n.h--}}this.J=null};et.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};et.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function io(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var a=o.listener,l=o.la||o.src;o.ia&&ql(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ju=fe.JSON.stringify;class GE{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function HE(){var n=Zu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class WE{constructor(){this.h=this.g=null}add(e,t){const r=Bp.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Bp=new GE(()=>new QE,n=>n.reset());class QE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function YE(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function XE(n){fe.setTimeout(()=>{throw n},0)}let fs,ds=!1,Zu=new WE,Up=()=>{const n=fe.Promise.resolve(void 0);fs=()=>{n.then(JE)}};var JE=()=>{for(var n;n=HE();){try{n.h.call(n.g)}catch(t){XE(t)}var e=Bp;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ds=!1};function va(n,e){et.call(this),this.h=n||1,this.g=e||fe,this.j=dt(this.qb,this),this.l=Date.now()}tt(va,et);re=va.prototype;re.ga=!1;re.T=null;re.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),lt(this,"tick"),this.ga&&(ec(this),this.start()))}};re.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ec(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}re.N=function(){va.$.N.call(this),ec(this),delete this.g};function tc(n,e,t){if(typeof n=="function")t&&(n=dt(n,t));else if(n&&typeof n.handleEvent=="function")n=dt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:fe.setTimeout(n,e||0)}function Vp(n){n.g=tc(()=>{n.g=null,n.i&&(n.i=!1,Vp(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class ZE extends $n{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vp(this)}N(){super.N(),this.g&&(fe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(n){$n.call(this),this.h=n,this.g={}}tt(ps,$n);var Gh=[];function jp(n,e,t,r){Array.isArray(t)||(t&&(Gh[0]=t.toString()),t=Gh);for(var i=0;i<t.length;i++){var s=Lp(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function zp(n){Wu(n.g,function(e,t){this.g.hasOwnProperty(t)&&Yu(e)},n),n.g={}}ps.prototype.N=function(){ps.$.N.call(this),zp(this)};ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function wa(){this.g=!0}wa.prototype.Ea=function(){this.g=!1};function eI(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function tI(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function zr(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+rI(n,t)+(r?" "+r:"")})}function nI(n,e){n.info(function(){return"TIMEOUT: "+e})}wa.prototype.info=function(){};function rI(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ju(t)}catch{return e}}var Nr={},Hh=null;function _a(){return Hh=Hh||new et}Nr.Ta="serverreachability";function $p(n){pt.call(this,Nr.Ta,n)}tt($p,pt);function ms(n){const e=_a();lt(e,new $p(e))}Nr.STAT_EVENT="statevent";function Kp(n,e){pt.call(this,Nr.STAT_EVENT,n),this.stat=e}tt(Kp,pt);function yt(n){const e=_a();lt(e,new Kp(e,n))}Nr.Ua="timingevent";function Gp(n,e){pt.call(this,Nr.Ua,n),this.size=e}tt(Gp,pt);function Ms(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return fe.setTimeout(function(){n()},e)}var ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hp={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nc(){}nc.prototype.h=null;function Wh(n){return n.h||(n.h=n.i())}function Wp(){}var Fs={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rc(){pt.call(this,"d")}tt(rc,pt);function ic(){pt.call(this,"c")}tt(ic,pt);var Ul;function Ea(){}tt(Ea,nc);Ea.prototype.g=function(){return new XMLHttpRequest};Ea.prototype.i=function(){return{}};Ul=new Ea;function qs(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new ps(this),this.P=iI,n=Ll?125:void 0,this.V=new va(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var iI=45e3,Vl={},Mo={};re=qs.prototype;re.setTimeout=function(n){this.P=n};function jl(n,e,t){n.L=1,n.v=Ta(fn(e)),n.s=t,n.S=!0,Yp(n,null)}function Yp(n,e){n.G=Date.now(),Bs(n),n.A=fn(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),im(t.i,"t",r),n.C=0,t=n.l.J,n.h=new Qp,n.g=Sm(n.l,t?e:null,!n.s),0<n.O&&(n.M=new ZE(dt(n.Pa,n,n.g),n.O)),jp(n.U,n.g,"readystatechange",n.nb),e=n.I?Dp(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),ms(),eI(n.j,n.u,n.A,n.m,n.W,n.s)}re.nb=function(n){n=n.target;const e=this.M;e&&Kt(n)==3?e.l():this.Pa(n)};re.Pa=function(n){try{if(n==this.g)e:{const h=Kt(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||Ll||this.g&&(this.h.h||this.g.ja()||Jh(this.g)))){this.J||h!=4||e==7||(e==8||0>=c?ms(3):ms(2)),Ia(this);var t=this.g.da();this.ca=t;t:if(Xp(this)){var r=Jh(this.g);n="";var i=r.length,s=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Qi(this);var o="";break t}this.h.i=new fe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,tI(this.j,this.u,this.A,this.m,this.W,h,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cs(a)){var u=a;break t}}u=null}if(t=u)zr(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zl(this,t);else{this.i=!1,this.o=3,yt(12),sr(this),Qi(this);break e}}this.S?(Jp(this,h,o),Ll&&this.i&&h==3&&(jp(this.U,this.V,"tick",this.mb),this.V.start())):(zr(this.j,this.m,o,null),zl(this,o)),h==4&&sr(this),this.i&&!this.J&&(h==4?bm(this.l,this):(this.i=!1,Bs(this)))}else SI(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),sr(this),Qi(this)}}}catch{}finally{}};function Xp(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Jp(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=sI(n,t),i==Mo){e==4&&(n.o=4,yt(14),r=!1),zr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Vl){n.o=4,yt(15),zr(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else zr(n.j,n.m,i,null),zl(n,i);Xp(n)&&i!=Mo&&i!=Vl&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,yt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),cc(e),e.M=!0,yt(11))):(zr(n.j,n.m,t,"[Invalid Chunked Response]"),sr(n),Qi(n))}re.mb=function(){if(this.g){var n=Kt(this.g),e=this.g.ja();this.C<e.length&&(Ia(this),Jp(this,n,e),this.i&&n!=4&&Bs(this))}};function sI(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Mo:(t=Number(e.substring(t,r)),isNaN(t)?Vl:(r+=1,r+t>e.length?Mo:(e=e.slice(r,r+t),n.C=r+t,e)))}re.cancel=function(){this.J=!0,sr(this)};function Bs(n){n.Y=Date.now()+n.P,Zp(n,n.P)}function Zp(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ms(dt(n.lb,n),e)}function Ia(n){n.B&&(fe.clearTimeout(n.B),n.B=null)}re.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(nI(this.j,this.A),this.L!=2&&(ms(),yt(17)),sr(this),this.o=2,Qi(this)):Zp(this,this.Y-n)};function Qi(n){n.l.H==0||n.J||bm(n.l,n)}function sr(n){Ia(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,ec(n.V),zp(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function zl(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||$l(t.i,n))){if(!n.K&&$l(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Bo(t),ka(t);else break e;uc(t),yt(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=Ms(dt(t.ib,t),6e3));if(1>=am(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else or(t,11)}else if((n.K||t.g==n)&&Bo(t),!cs(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(t.V=u[0],u=u[1],t.H==2)if(u[0]=="c"){t.K=u[1],t.pa=u[2];const h=u[3];h!=null&&(t.ra=h,t.l.info("VER="+t.ra));const c=u[4];c!=null&&(t.Ga=c,t.l.info("SVER="+t.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const d=n.g;if(d){const w=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(sc(s,s.h),s.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,Ne(r.I,r.F,g))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=Tm(r,r.J?r.pa:null,r.Y),o.K){lm(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ia(a),Bs(a)),r.g=o}else wm(r);0<t.j.length&&Oa(t)}else u[0]!="stop"&&u[0]!="close"||or(t,7);else t.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?or(t,7):lc(t):u[0]!="noop"&&t.h&&t.h.Aa(u),t.A=0)}}ms(4)}catch{}}function oI(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(fa(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function aI(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(fa(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function em(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(fa(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=aI(n),r=oI(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fr(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof fr){this.h=n.h,Fo(this,n.j),this.s=n.s,this.g=n.g,qo(this,n.m),this.l=n.l;var e=n.i,t=new gs;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Qh(this,t),this.o=n.o}else n&&(e=String(n).match(tm))?(this.h=!1,Fo(this,e[1]||"",!0),this.s=Vi(e[2]||""),this.g=Vi(e[3]||"",!0),qo(this,e[4]),this.l=Vi(e[5]||"",!0),Qh(this,e[6]||"",!0),this.o=Vi(e[7]||"")):(this.h=!1,this.i=new gs(null,this.h))}fr.prototype.toString=function(){var n=[],e=this.j;e&&n.push(ji(e,Yh,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(ji(e,Yh,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(ji(t,t.charAt(0)=="/"?hI:cI,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",ji(t,dI)),n.join("")};function fn(n){return new fr(n)}function Fo(n,e,t){n.j=t?Vi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function qo(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Qh(n,e,t){e instanceof gs?(n.i=e,pI(n.i,n.h)):(t||(e=ji(e,fI)),n.i=new gs(e,n.h))}function Ne(n,e,t){n.i.set(e,t)}function Ta(n){return Ne(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Vi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ji(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,uI),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function uI(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Yh=/[#\/\?@]/g,cI=/[#\?:]/g,hI=/[#\?]/g,fI=/[#\?@]/g,dI=/#/g;function gs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Kn(n){n.g||(n.g=new Map,n.h=0,n.i&&lI(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}re=gs.prototype;re.add=function(n,e){Kn(this),this.i=null,n=vi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function nm(n,e){Kn(n),e=vi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function rm(n,e){return Kn(n),e=vi(n,e),n.g.has(e)}re.forEach=function(n,e){Kn(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};re.ta=function(){Kn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};re.Z=function(n){Kn(this);let e=[];if(typeof n=="string")rm(this,n)&&(e=e.concat(this.g.get(vi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};re.set=function(n,e){return Kn(this),this.i=null,n=vi(this,n),rm(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};re.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function im(n,e,t){nm(n,e),0<t.length&&(n.i=null,n.g.set(vi(n,e),Gu(t)),n.h+=t.length)}re.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function vi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function pI(n,e){e&&!n.j&&(Kn(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(nm(this,r),im(this,i,t))},n)),n.j=e}var mI=class{constructor(n,e){this.g=n,this.map=e}};function sm(n){this.l=n||gI,fe.PerformanceNavigationTiming?(n=fe.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(fe.g&&fe.g.Ka&&fe.g.Ka()&&fe.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gI=10;function om(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function am(n){return n.h?1:n.g?n.g.size:0}function $l(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function sc(n,e){n.g?n.g.add(e):n.h=e}function lm(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}sm.prototype.cancel=function(){if(this.i=um(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function um(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Gu(n.i)}var yI=class{stringify(n){return fe.JSON.stringify(n,void 0)}parse(n){return fe.JSON.parse(n,void 0)}};function vI(){this.g=new yI}function wI(n,e,t){const r=t||"";try{em(n,function(i,s){let o=i;da(i)&&(o=Ju(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _I(n,e){const t=new wa;if(fe.Image){const r=new Image;r.onload=ro(so,t,r,"TestLoadImage: loaded",!0,e),r.onerror=ro(so,t,r,"TestLoadImage: error",!1,e),r.onabort=ro(so,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=ro(so,t,r,"TestLoadImage: timeout",!1,e),fe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function so(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Us(n){this.l=n.fc||null,this.j=n.ob||!1}tt(Us,nc);Us.prototype.g=function(){return new Sa(this.l,this.j)};Us.prototype.i=function(n){return function(){return n}}({});function Sa(n,e){et.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=oc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Sa,et);var oc=0;re=Sa.prototype;re.open=function(n,e){if(this.readyState!=oc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ys(this)};re.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||fe).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};re.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=oc};re.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof fe.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cm(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function cm(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}re.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Vs(this):ys(this),this.readyState==3&&cm(this)}};re.Za=function(n){this.g&&(this.response=this.responseText=n,Vs(this))};re.Ya=function(n){this.g&&(this.response=n,Vs(this))};re.ka=function(){this.g&&Vs(this)};function Vs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ys(n)}re.setRequestHeader=function(n,e){this.v.append(n,e)};re.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};re.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ys(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var bI=fe.JSON.parse;function qe(n){et.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hm,this.L=this.M=!1}tt(qe,et);var hm="",EI=/^https?$/i,II=["POST","PUT"];re=qe.prototype;re.Oa=function(n){this.M=n};re.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ul.g(),this.C=this.u?Wh(this.u):Wh(Ul),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Xh(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=fe.FormData&&n instanceof fe.FormData,!(0<=Np(II,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{pm(this),0<this.B&&((this.L=TI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=tc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Xh(this,s)}};function TI(n){return ei&&typeof n.timeout=="number"&&n.ontimeout!==void 0}re.ua=function(){typeof Ku<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Xh(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,fm(n),Aa(n)}function fm(n){n.F||(n.F=!0,lt(n,"complete"),lt(n,"error"))}re.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,lt(this,"complete"),lt(this,"abort"),Aa(this))};re.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Aa(this,!0)),qe.$.N.call(this)};re.La=function(){this.s||(this.G||this.v||this.l?dm(this):this.kb())};re.kb=function(){dm(this)};function dm(n){if(n.h&&typeof Ku<"u"&&(!n.C[1]||Kt(n)!=4||n.da()!=2)){if(n.v&&Kt(n)==4)tc(n.La,0,n);else if(lt(n,"readystatechange"),Kt(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(tm)[1]||null;!i&&fe.self&&fe.self.location&&(i=fe.self.location.protocol.slice(0,-1)),r=!EI.test(i?i.toLowerCase():"")}t=r}if(t)lt(n,"complete"),lt(n,"success");else{n.m=6;try{var s=2<Kt(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",fm(n)}}finally{Aa(n)}}}}function Aa(n,e){if(n.g){pm(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||lt(n,"ready");try{t.onreadystatechange=r}catch{}}}function pm(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(fe.clearTimeout(n.A),n.A=null)}re.isActive=function(){return!!this.g};function Kt(n){return n.g?n.g.readyState:0}re.da=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};re.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};re.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),bI(e)}};function Jh(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case hm:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function SI(n){const e={};n=(n.g&&2<=Kt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(cs(n[r]))continue;var t=YE(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}jE(e,function(r){return r.join(", ")})}re.Ia=function(){return this.m};re.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function mm(n){let e="";return Wu(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function ac(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=mm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ne(n,e,t))}function xi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function gm(n){this.Ga=0,this.j=[],this.l=new wa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=xi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=xi("baseRetryDelayMs",5e3,n),this.hb=xi("retryDelaySeedMs",1e4,n),this.eb=xi("forwardChannelMaxRetries",2,n),this.xa=xi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new sm(n&&n.concurrentRequestLimit),this.Ja=new vI,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}re=gm.prototype;re.ra=8;re.H=1;function lc(n){if(ym(n),n.H==3){var e=n.W++,t=fn(n.I);if(Ne(t,"SID",n.K),Ne(t,"RID",e),Ne(t,"TYPE","terminate"),js(n,t),e=new qs(n,n.l,e),e.L=2,e.v=Ta(fn(t)),t=!1,fe.navigator&&fe.navigator.sendBeacon)try{t=fe.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&fe.Image&&(new Image().src=e.v,t=!0),t||(e.g=Sm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Bs(e)}Im(n)}function ka(n){n.g&&(cc(n),n.g.cancel(),n.g=null)}function ym(n){ka(n),n.u&&(fe.clearTimeout(n.u),n.u=null),Bo(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&fe.clearTimeout(n.m),n.m=null)}function Oa(n){if(!om(n.i)&&!n.m){n.m=!0;var e=n.Na;fs||Up(),ds||(fs(),ds=!0),Zu.add(e,n),n.C=0}}function AI(n,e){return am(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Ms(dt(n.Na,n,e),Em(n,n.C)),n.C++,!0)}re.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new qs(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Dp(s),Pp(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=vm(this,i,e),t=fn(this.I),Ne(t,"RID",n),Ne(t,"CVER",22),this.F&&Ne(t,"X-HTTP-Session-Id",this.F),js(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(mm(s)))+"&"+e:this.o&&ac(t,this.o,s)),sc(this.i,i),this.bb&&Ne(t,"TYPE","init"),this.P?(Ne(t,"$req",e),Ne(t,"SID","null"),i.aa=!0,jl(i,t,null)):jl(i,t,e),this.H=2}}else this.H==3&&(n?Zh(this,n):this.j.length==0||om(this.i)||Zh(this))};function Zh(n,e){var t;e?t=e.m:t=n.W++;const r=fn(n.I);Ne(r,"SID",n.K),Ne(r,"RID",t),Ne(r,"AID",n.V),js(n,r),n.o&&n.s&&ac(r,n.o,n.s),t=new qs(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=vm(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),sc(n.i,t),jl(t,r,e)}function js(n,e){n.na&&Wu(n.na,function(t,r){Ne(e,r,t)}),n.h&&em({},function(t,r){Ne(e,r,t)})}function vm(n,e,t){t=Math.min(n.j.length,t);var r=n.h?dt(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<t;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{wI(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function wm(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;fs||Up(),ds||(fs(),ds=!0),Zu.add(e,n),n.A=0}}function uc(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Ms(dt(n.Ma,n),Em(n,n.A)),n.A++,!0)}re.Ma=function(){if(this.u=null,_m(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Ms(dt(this.jb,this),n)}};re.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),ka(this),_m(this))};function cc(n){n.B!=null&&(fe.clearTimeout(n.B),n.B=null)}function _m(n){n.g=new qs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=fn(n.wa);Ne(e,"RID","rpc"),Ne(e,"SID",n.K),Ne(e,"AID",n.V),Ne(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Ne(e,"TO",n.qa),Ne(e,"TYPE","xmlhttp"),js(n,e),n.o&&n.s&&ac(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Ta(fn(e)),t.s=null,t.S=!0,Yp(t,n)}re.ib=function(){this.v!=null&&(this.v=null,ka(this),uc(this),yt(19))};function Bo(n){n.v!=null&&(fe.clearTimeout(n.v),n.v=null)}function bm(n,e){var t=null;if(n.g==e){Bo(n),cc(n),n.g=null;var r=2}else if($l(n.i,e))t=e.F,lm(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=_a(),lt(r,new Gp(r,t)),Oa(n)}else wm(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&AI(n,e)||r==2&&uc(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:or(n,5);break;case 4:or(n,10);break;case 3:or(n,6);break;default:or(n,2)}}}function Em(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function or(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=dt(n.pb,n);t||(t=new fr("//www.google.com/images/cleardot.gif"),fe.location&&fe.location.protocol=="http"||Fo(t,"https"),Ta(t)),_I(t.toString(),r)}else yt(2);n.H=0,n.h&&n.h.za(e),Im(n),ym(n)}re.pb=function(n){n?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function Im(n){if(n.H=0,n.ma=[],n.h){const e=um(n.i);(e.length!=0||n.j.length!=0)&&(zh(n.ma,e),zh(n.ma,n.j),n.i.i.length=0,Gu(n.j),n.j.length=0),n.h.ya()}}function Tm(n,e,t){var r=t instanceof fr?fn(t):new fr(t);if(r.g!="")e&&(r.g=e+"."+r.g),qo(r,r.m);else{var i=fe.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fr(null);r&&Fo(s,r),e&&(s.g=e),i&&qo(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Ne(r,t,e),Ne(r,"VER",n.ra),js(n,r),r}function Sm(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new qe(new Us({ob:!0})):new qe(n.va),e.Oa(n.J),e}re.isActive=function(){return!!this.h&&this.h.isActive(this)};function Am(){}re=Am.prototype;re.Ba=function(){};re.Aa=function(){};re.za=function(){};re.ya=function(){};re.isActive=function(){return!0};re.Va=function(){};function Uo(){if(ei&&!(10<=Number(qE)))throw Error("Environmental error: no available transport.")}Uo.prototype.g=function(n,e){return new Nt(n,e)};function Nt(n,e){et.call(this),this.g=new gm(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!cs(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cs(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new wi(this)}tt(Nt,et);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;yt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Tm(n,null,n.Y),Oa(n)};Nt.prototype.close=function(){lc(this.g)};Nt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ju(n),n=t);e.j.push(new mI(e.fb++,n)),e.H==3&&Oa(e)};Nt.prototype.N=function(){this.g.h=null,delete this.j,lc(this.g),delete this.g,Nt.$.N.call(this)};function km(n){rc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}tt(km,rc);function Om(){ic.call(this),this.status=1}tt(Om,ic);function wi(n){this.g=n}tt(wi,Am);wi.prototype.Ba=function(){lt(this.g,"a")};wi.prototype.Aa=function(n){lt(this.g,new km(n))};wi.prototype.za=function(n){lt(this.g,new Om)};wi.prototype.ya=function(){lt(this.g,"b")};function kI(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}tt(Ft,kI);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yl(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Ft.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)yl(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){yl(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){yl(this,r),i=0;break}}this.h=i,this.i+=e};Ft.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function ke(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var OI={};function hc(n){return-128<=n&&128>n?LE(n,function(e){return new ke([e|0],0>e?-1:0)}):new ke([n|0],0>n?-1:0)}function Gt(n){if(isNaN(n)||!isFinite(n))return Wr;if(0>n)return st(Gt(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Kl;return new ke(e,0)}function Nm(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return st(Nm(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Gt(Math.pow(e,8)),r=Wr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=Gt(Math.pow(e,s)),r=r.R(s).add(Gt(o))):(r=r.R(t),r=r.add(Gt(o)))}return r}var Kl=4294967296,Wr=hc(0),Gl=hc(1),ef=hc(16777216);re=ke.prototype;re.ea=function(){if(Ct(this))return-st(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Kl+r)*e,e*=Kl}return n};re.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(an(this))return"0";if(Ct(this))return"-"+st(this).toString(n);for(var e=Gt(Math.pow(n,6)),t=this,r="";;){var i=jo(t,e).g;t=Vo(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,an(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};re.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function an(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function Ct(n){return n.h==-1}re.X=function(n){return n=Vo(this,n),Ct(n)?-1:an(n)?0:1};function st(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new ke(t,~n.h).add(Gl)}re.abs=function(){return Ct(this)?st(this):this};re.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new ke(t,t[t.length-1]&-2147483648?-1:0)};function Vo(n,e){return n.add(st(e))}re.R=function(n){if(an(this)||an(n))return Wr;if(Ct(this))return Ct(n)?st(this).R(st(n)):st(st(this).R(n));if(Ct(n))return st(this.R(st(n)));if(0>this.X(ef)&&0>n.X(ef))return Gt(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;t[2*r+2*i]+=o*l,oo(t,2*r+2*i),t[2*r+2*i+1]+=s*l,oo(t,2*r+2*i+1),t[2*r+2*i+1]+=o*a,oo(t,2*r+2*i+1),t[2*r+2*i+2]+=s*a,oo(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new ke(t,0)};function oo(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Ci(n,e){this.g=n,this.h=e}function jo(n,e){if(an(e))throw Error("division by zero");if(an(n))return new Ci(Wr,Wr);if(Ct(n))return e=jo(st(n),e),new Ci(st(e.g),st(e.h));if(Ct(e))return e=jo(n,st(e)),new Ci(st(e.g),e.h);if(30<n.g.length){if(Ct(n)||Ct(e))throw Error("slowDivide_ only works with positive integers.");for(var t=Gl,r=e;0>=r.X(n);)t=tf(t),r=tf(r);var i=Mr(t,1),s=Mr(r,1);for(r=Mr(r,2),t=Mr(t,2);!an(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=Mr(r,1),t=Mr(t,1)}return e=Vo(n,i.R(e)),new Ci(i,e)}for(i=Wr;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Gt(t),o=s.R(e);Ct(o)||0<o.X(n);)t-=r,s=Gt(t),o=s.R(e);an(s)&&(s=Gl),i=i.add(s),n=Vo(n,o)}return new Ci(i,n)}re.gb=function(n){return jo(this,n).h};re.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new ke(t,this.h&n.h)};re.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new ke(t,this.h|n.h)};re.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new ke(t,this.h^n.h)};function tf(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ke(t,n.h)}function Mr(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new ke(i,n.h)}Uo.prototype.createWebChannel=Uo.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;Hp.COMPLETE="complete";Wp.EventType=Fs;Fs.OPEN="a";Fs.CLOSE="b";Fs.ERROR="c";Fs.MESSAGE="d";et.prototype.listen=et.prototype.O;qe.prototype.listenOnce=qe.prototype.P;qe.prototype.getLastError=qe.prototype.Sa;qe.prototype.getLastErrorCode=qe.prototype.Ia;qe.prototype.getStatus=qe.prototype.da;qe.prototype.getResponseJson=qe.prototype.Wa;qe.prototype.getResponseText=qe.prototype.ja;qe.prototype.send=qe.prototype.ha;qe.prototype.setWithCredentials=qe.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Gt;ke.fromString=Nm;var NI=function(){return new Uo},RI=function(){return _a()},vl=ba,xI=Hp,CI=Nr,nf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},DI=Us,ao=Wp,PI=qe,LI=Ft,Qr=ke,MI={};const rf="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let _i="9.23.0";/**
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
 */const Dn=new na("@firebase/firestore");function Hl(){return Dn.logLevel}function FI(n){Dn.setLogLevel(n)}function X(n,...e){if(Dn.logLevel<=Ee.DEBUG){const t=e.map(fc);Dn.debug(`Firestore (${_i}): ${n}`,...t)}}function Ue(n,...e){if(Dn.logLevel<=Ee.ERROR){const t=e.map(fc);Dn.error(`Firestore (${_i}): ${n}`,...t)}}function qt(n,...e){if(Dn.logLevel<=Ee.WARN){const t=e.map(fc);Dn.warn(`Firestore (${_i}): ${n}`,...t)}}function fc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
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
 */function oe(n="Unexpected state"){const e=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: `+n;throw Ue(e),new Error(e)}function ue(n,e){n||oe()}function qI(n,e){n||oe()}function ne(n,e){return n}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Rm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Je.UNAUTHENTICATED))}shutdown(){}}class UI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class VI{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Ze;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ze,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ze)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new Rm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Je(e)}}class jI{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class zI{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new jI(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $I{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KI{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ue(typeof t.token=="string"),this.T=t.token,new $I(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class xm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=GI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function ti(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Cm(n){return n+"\0"}/**
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
 */class Pe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Pe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new Pe(0,0))}static max(){return new le(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vs{constructor(e,t,r){t===void 0?t=0:t>e.length&&oe(),r===void 0?r=e.length-t:r>e.length-t&&oe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ie extends vs{construct(e,t,r){return new Ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Ie(t)}static emptyPath(){return new Ie([])}}const HI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends vs{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return HI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Q($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Ie.fromString(e))}static fromName(e){return new te(Ie.fromString(e).popFirst(5))}static empty(){return new te(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Ie(e.slice()))}}/**
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
 */class Dm{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Wl(n){return n.fields.find(e=>e.kind===2)}function Jn(n){return n.fields.filter(e=>e.kind!==2)}Dm.UNKNOWN_ID=-1;class WI{constructor(e,t){this.fieldPath=e,this.kind=t}}class zo{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new zo(0,Rt.min())}}function Pm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new Pe(t+1,0):new Pe(t,r));return new Rt(i,te.empty(),e)}function Lm(n){return new Rt(n.readTime,n.key,-1)}class Rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rt(le.min(),te.empty(),-1)}static max(){return new Rt(le.max(),te.empty(),-1)}}function dc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=te.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gn(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==Mm)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,r)=>{t(e)})}static reject(e){return new z((t,r)=>{r(e)})}static waitFor(e){return new z((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next(i=>i?z.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,t){return new z((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
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
 */class Na{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new Ze,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new Yi(e,t.error)):this.v.resolve()},this.transaction.onerror=r=>{const i=pc(r.target.error);this.v.reject(new Yi(e,i))}}static open(e,t,r,i){try{return new Na(t,e.transaction(i,r))}catch(s){throw new Yi(t,s)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(X("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new YI(t)}}class Lt{constructor(e,t,r){this.name=e,this.version=t,this.V=r,Lt.S(Me())===12.2&&Ue("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return X("SimpleDb","Removing database:",e),Zn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ns())return!1;if(Lt.C())return!0;const e=Me(),t=Lt.S(e),r=0<t&&t<10,i=Lt.N(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=MI)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(X("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new Yi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new Q($.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Q($.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Yi(e,o))},i.onupgradeneeded=s=>{X("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.V.O(o,i.transaction,s.oldVersion,this.version).next(()=>{X("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Na.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),z.reject(u))).toPromise();return l.catch(()=>{}),await a.R,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(X("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class QI{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Zn(this.L.delete())}}class Yi extends Q{constructor(e,t){super($.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Hn(n){return n.name==="IndexedDbTransactionError"}class YI{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(X("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(X("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zn(r)}add(e){return X("SimpleDb","ADD",this.store.name,e,e),Zn(this.store.add(e))}get(e){return Zn(this.store.get(e)).next(t=>(t===void 0&&(t=null),X("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return X("SimpleDb","DELETE",this.store.name,e),Zn(this.store.delete(e))}count(){return X("SimpleDb","COUNT",this.store.name),Zn(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.W(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new z((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new z((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){X("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.W(i,t)}Z(e){const t=this.cursor({});return new z((r,i)=>{t.onerror=s=>{const o=pc(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new z((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new QI(a),u=t(a.primaryKey,a.value,l);if(u instanceof z){const h=u.catch(c=>(l.done(),z.reject(c)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>z.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Zn(n){return new z((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=pc(r.target.error);t(i)}})}let sf=!1;function pc(n){const e=Lt.S(Me());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Q("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sf||(sf=!0,setTimeout(()=>{throw r},0)),r}}return n}class XI{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){X("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{X("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Hn(t)?X("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Gn(t)}await this.et(6e4)})}}class JI{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let i=t,s=!0;return z.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return X("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>t-i)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(i,s)).next(a=>(X("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Lm(s);dc(o,r)>0&&(r=o)}),new Rt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class It{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}It.ct=-1;function zs(n){return n==null}function ws(n){return n===0&&1/n==-1/0}function qm(n){return typeof n=="number"&&Number.isInteger(n)&&!ws(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function wt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=of(e)),e=ZI(n.get(t),e);return of(e)}function ZI(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function of(n){return n+""}function Ht(n){const e=n.length;if(ue(e>=2),e===2)return ue(n.charAt(0)===""&&n.charAt(1)===""),Ie.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&oe(),n.charAt(o+1)){case"":const a=n.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:oe()}s=o+2}return new Ie(r)}/**
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
 */const af=["userId","batchId"];/**
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
 */function bo(n,e){return[n,wt(e)]}function Bm(n,e,t){return[n,wt(e),t]}const eT={},tT=["prefixPath","collectionGroup","readTime","documentId"],nT=["prefixPath","collectionGroup","documentId"],rT=["collectionGroup","readTime","prefixPath","documentId"],iT=["canonicalId","targetId"],sT=["targetId","path"],oT=["path","targetId"],aT=["collectionId","parent"],lT=["indexId","uid"],uT=["uid","sequenceNumber"],cT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hT=["indexId","uid","orderedDocumentKey"],fT=["userId","collectionPath","documentId"],dT=["userId","collectionPath","largestBatchId"],pT=["userId","collectionGroup","largestBatchId"],Um=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mT=[...Um,"documentOverlays"],Vm=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jm=Vm,gT=[...jm,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Fm{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function nt(n,e){const t=ne(n);return Lt.M(t.ht,e)}/**
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
 */function lf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Rr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||it.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new it(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(n,e,t,r,i){return this}insert(n,e,t){return new it(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xe{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(e){return new uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xe(this.comparator);return t.data=e,t}}class uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Fr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Tt([])}unionWith(e){let t=new xe(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ti(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class $m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $m("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const vT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(n){if(ue(!!n),typeof n=="string"){let e=0;const t=vT.exec(n);if(ue(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ln(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function mc(n){const e=n.mapValue.fields.__previous_value__;return Ra(e)?mc(e):e}function _s(n){const e=Pn(n.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class wT{constructor(e,t,r,i,s,o,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Mn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Eo={nullValue:"NULL_VALUE"};function vr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ra(n)?4:Km(n)?9007199254740991:10:oe()}function tn(n,e){if(n===e)return!0;const t=vr(n);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _s(n).isEqual(_s(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pn(r.timestampValue),o=Pn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Ln(r.bytesValue).isEqual(Ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Fe(r.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(r.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Fe(r.integerValue)===Fe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Fe(r.doubleValue),o=Fe(i.doubleValue);return s===o?ws(s)===ws(o):isNaN(s)&&isNaN(o)}return!1}(n,e);case 9:return ti(n.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(lf(s)!==lf(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!tn(s[a],o[a])))return!1;return!0}(n,e);default:return oe()}}function bs(n,e){return(n.values||[]).find(t=>tn(t,e))!==void 0}function Fn(n,e){if(n===e)return 0;const t=vr(n),r=vr(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Fe(i.integerValue||i.doubleValue),a=Fe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return cf(n.timestampValue,e.timestampValue);case 4:return cf(_s(n),_s(e));case 5:return de(n.stringValue,e.stringValue);case 6:return function(i,s){const o=Ln(i),a=Ln(s);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(Fe(i.latitude),Fe(s.latitude));return o!==0?o:de(Fe(i.longitude),Fe(s.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Fn(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===kn.mapValue&&s===kn.mapValue)return 0;if(i===kn.mapValue)return 1;if(s===kn.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const c=de(a[h],u[h]);if(c!==0)return c;const f=Fn(o[a[h]],l[u[h]]);if(f!==0)return f}return de(a.length,u.length)}(n.mapValue,e.mapValue);default:throw oe()}}function cf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=Pn(n),r=Pn(e),i=de(t.seconds,r.seconds);return i!==0?i:de(t.nanos,r.nanos)}function ni(n){return Yl(n)}function Yl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const i=Pn(r);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ln(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,te.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yl(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yl(r.fields[a])}`;return s+"}"}(n.mapValue):oe();var e,t}function wr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xl(n){return!!n&&"integerValue"in n}function Es(n){return!!n&&"arrayValue"in n}function hf(n){return!!n&&"nullValue"in n}function ff(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Io(n){return!!n&&"mapValue"in n}function Xi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Rr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Km(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function _T(n){return"nullValue"in n?Eo:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?wr(Mn.empty(),te.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:oe()}function bT(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?wr(Mn.empty(),te.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?kn:oe()}function df(n,e){const t=Fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pf(n,e){const t=Fn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xi(t)}setAll(e){let t=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Xi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Io(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Rr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ot(Xi(this.value))}}function Gm(n){const e=[];return Rr(n.fields,(t,r)=>{const i=new Ve([t]);if(Io(r)){const s=Gm(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class Re{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Re(e,0,le.min(),le.min(),le.min(),ot.empty(),0)}static newFoundDocument(e,t,r,i){return new Re(e,1,t,le.min(),r,i,0)}static newNoDocument(e,t){return new Re(e,2,t,le.min(),le.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,le.min(),le.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class qn{constructor(e,t){this.position=e,this.inclusive=t}}function mf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),t.key):r=Fn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function gf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yr{constructor(e,t="asc"){this.field=e,this.dir=t}}function ET(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Hm{}class we extends Hm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new IT(e,t,r):t==="array-contains"?new AT(e,r):t==="in"?new Zm(e,r):t==="not-in"?new kT(e,r):t==="array-contains-any"?new OT(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new TT(e,r):new ST(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Fn(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison(Fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ae extends Hm{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ae(e,t)}matches(e){return ri(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ri(n){return n.op==="and"}function Jl(n){return n.op==="or"}function gc(n){return Wm(n)&&ri(n)}function Wm(n){for(const e of n.filters)if(e instanceof Ae)return!1;return!0}function Zl(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+ni(n.value);if(gc(n))return n.filters.map(e=>Zl(e)).join(",");{const e=n.filters.map(t=>Zl(t)).join(",");return`${n.op}(${e})`}}function Qm(n,e){return n instanceof we?function(t,r){return r instanceof we&&t.op===r.op&&t.field.isEqual(r.field)&&tn(t.value,r.value)}(n,e):n instanceof Ae?function(t,r){return r instanceof Ae&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((i,s,o)=>i&&Qm(s,r.filters[o]),!0):!1}(n,e):void oe()}function Ym(n,e){const t=n.filters.concat(e);return Ae.create(t,n.op)}function Xm(n){return n instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${ni(e.value)}`}(n):n instanceof Ae?function(e){return e.op.toString()+" {"+e.getFilters().map(Xm).join(" ,")+"}"}(n):"Filter"}class IT extends we{constructor(e,t,r){super(e,t,r),this.key=te.fromName(r.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class TT extends we{constructor(e,t){super(e,"in",t),this.keys=Jm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ST extends we{constructor(e,t){super(e,"not-in",t),this.keys=Jm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>te.fromName(r.referenceValue))}class AT extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Es(t)&&bs(t.arrayValue,this.value)}}class Zm extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bs(this.value.arrayValue,t)}}class kT extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!bs(this.value.arrayValue,t)}}class OT extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Es(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>bs(this.value.arrayValue,r))}}/**
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
 */class NT{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function eu(n,e=null,t=[],r=[],i=null,s=null,o=null){return new NT(n,e,t,r,i,s,o)}function _r(n){const e=ne(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ni(r)).join(",")),e.dt=t}return e.dt}function $s(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ET(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Qm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gf(n.startAt,e.startAt)&&gf(n.endAt,e.endAt)}function $o(n){return te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Ko(n,e){return n.filters.filter(t=>t instanceof we&&t.field.isEqual(e))}function yf(n,e,t){let r=Eo,i=!0;for(const s of Ko(n,e)){let o=Eo,a=!0;switch(s.op){case"<":case"<=":o=_T(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Eo}df({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];df({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function vf(n,e,t){let r=kn,i=!0;for(const s of Ko(n,e)){let o=kn,a=!0;switch(s.op){case">=":case">":o=bT(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=kn}pf({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];pf({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class gn{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function eg(n,e,t,r,i,s,o,a){return new gn(n,e,t,r,i,s,o,a)}function bi(n){return new gn(n)}function wf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yc(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function xa(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function vc(n){return n.collectionGroup!==null}function dr(n){const e=ne(n);if(e.wt===null){e.wt=[];const t=xa(e),r=yc(e);if(t!==null&&r===null)t.isKeyField()||e.wt.push(new Yr(t)),e.wt.push(new Yr(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yr(Ve.keyField(),s))}}}return e.wt}function At(n){const e=ne(n);if(!e._t)if(e.limitType==="F")e._t=eu(e.path,e.collectionGroup,dr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of dr(e)){const o=s.dir==="desc"?"asc":"desc";t.push(new Yr(s.field,o))}const r=e.endAt?new qn(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new qn(e.startAt.position,e.startAt.inclusive):null;e._t=eu(e.path,e.collectionGroup,t,e.filters,e.limit,r,i)}return e._t}function tu(n,e){e.getFirstInequalityField(),xa(n);const t=n.filters.concat([e]);return new gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Go(n,e,t){return new gn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ks(n,e){return $s(At(n),At(e))&&n.limitType===e.limitType}function tg(n){return`${_r(At(n))}|lt:${n.limitType}`}function nu(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>Xm(r)).join(", ")}]`),zs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>ni(r)).join(",")),`Target(${t})`}(At(n))}; limitType=${n.limitType})`}function Gs(n,e){return e.isFoundDocument()&&function(t,r){const i=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):te.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,r){for(const i of dr(t))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const i of t.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(i,s,o){const a=mf(i,s,o);return i.inclusive?a<=0:a<0}(t.startAt,dr(t),r)||t.endAt&&!function(i,s,o){const a=mf(i,s,o);return i.inclusive?a>=0:a>0}(t.endAt,dr(t),r))}(n,e)}function ng(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rg(n){return(e,t)=>{let r=!1;for(const i of dr(n)){const s=RT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function RT(n,e,t){const r=n.field.isKeyField()?te.comparator(e.key,t.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fn(a,l):oe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
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
 */class Wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zm(this.inner)}size(){return this.innerSize}}/**
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
 */const xT=new Oe(te.comparator);function St(){return xT}const ig=new Oe(te.comparator);function zi(...n){let e=ig;for(const t of n)e=e.insert(t.key,t);return e}function sg(n){let e=ig;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wt(){return Ji()}function og(){return Ji()}function Ji(){return new Wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const CT=new Oe(te.comparator),DT=new xe(te.comparator);function me(...n){let e=DT;for(const t of n)e=e.add(t);return e}const PT=new xe(de);function wc(){return PT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(e)?"-0":e}}function lg(n){return{integerValue:""+n}}function ug(n,e){return qm(e)?lg(e):ag(n,e)}/**
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
 */class Ca{constructor(){this._=void 0}}function LT(n,e,t){return n instanceof ii?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ra(i)&&(i=mc(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(t,e):n instanceof br?hg(n,e):n instanceof Er?fg(n,e):function(r,i){const s=cg(r,i),o=_f(s)+_f(r.gt);return Xl(s)&&Xl(r.gt)?lg(o):ag(r.serializer,o)}(n,e)}function MT(n,e,t){return n instanceof br?hg(n,e):n instanceof Er?fg(n,e):t}function cg(n,e){return n instanceof si?Xl(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class ii extends Ca{}class br extends Ca{constructor(e){super(),this.elements=e}}function hg(n,e){const t=dg(e);for(const r of n.elements)t.some(i=>tn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Er extends Ca{constructor(e){super(),this.elements=e}}function fg(n,e){let t=dg(e);for(const r of n.elements)t=t.filter(i=>!tn(i,r));return{arrayValue:{values:t}}}class si extends Ca{constructor(e,t){super(),this.serializer=e,this.gt=t}}function _f(n){return Fe(n.integerValue||n.doubleValue)}function dg(n){return Es(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Hs{constructor(e,t){this.field=e,this.transform=t}}function FT(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof br&&r instanceof br||t instanceof Er&&r instanceof Er?ti(t.elements,r.elements,tn):t instanceof si&&r instanceof si?tn(t.gt,r.gt):t instanceof ii&&r instanceof ii}(n.transform,e.transform)}class qT{constructor(e,t){this.version=e,this.transformResults=t}}class De{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Da{}function pg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ii(n.key,De.none()):new Ei(n.key,n.data,De.none());{const t=n.data,r=ot.empty();let i=new xe(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yn(n.key,r,new Tt(i.toArray()),De.none())}}function BT(n,e,t){n instanceof Ei?function(r,i,s){const o=r.value.clone(),a=Ef(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(n,e,t):n instanceof yn?function(r,i,s){if(!To(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Ef(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(mg(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(n,e,t):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,t)}function Zi(n,e,t,r){return n instanceof Ei?function(i,s,o,a){if(!To(i.precondition,s))return o;const l=i.value.clone(),u=If(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(n,e,t,r):n instanceof yn?function(i,s,o,a){if(!To(i.precondition,s))return o;const l=If(i.fieldTransforms,a,s),u=s.data;return u.setAll(mg(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(i,s,o){return To(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(n,e,t)}function UT(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=cg(r.transform,i||null);s!=null&&(t===null&&(t=ot.empty()),t.set(r.field,s))}return t||null}function bf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&ti(t,r,(i,s)=>FT(i,s))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ei extends Da{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yn extends Da{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ef(n,e,t){const r=new Map;ue(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,MT(o,a,t[i]))}return r}function If(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,LT(s,o,e))}return r}class Ii extends Da{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _c extends Da{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bc{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=og();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=pg(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),me())}isEqual(e){return this.batchId===e.batchId&&ti(this.mutations,e.mutations,(t,r)=>bf(t,r))&&ti(this.baseMutations,e.baseMutations,(t,r)=>bf(t,r))}}class Ec{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length);let i=CT;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ec(e,t,r,i)}}/**
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
 */class Ic{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class VT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ke,be;function gg(n){switch(n){default:return oe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function yg(n){if(n===void 0)return Ue("GRPC error has no .code"),$.UNKNOWN;switch(n){case Ke.OK:return $.OK;case Ke.CANCELLED:return $.CANCELLED;case Ke.UNKNOWN:return $.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return $.INTERNAL;case Ke.UNAVAILABLE:return $.UNAVAILABLE;case Ke.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ke.NOT_FOUND:return $.NOT_FOUND;case Ke.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ke.ABORTED:return $.ABORTED;case Ke.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ke.DATA_LOSS:return $.DATA_LOSS;default:return oe()}}(be=Ke||(Ke={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Tc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return uo}static getOrCreateInstance(){return uo===null&&(uo=new Tc),uo}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let uo=null;/**
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
 */function vg(){return new TextEncoder}/**
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
 */const jT=new Qr([4294967295,4294967295],0);function Tf(n){const e=vg().encode(n),t=new LI;return t.update(e),new Uint8Array(t.digest())}function Sf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([t,r],0),new Qr([i,s],0)]}class Sc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $i(`Invalid padding: ${t}`);if(r<0)throw new $i(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $i(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $i(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Qr.fromNumber(this.It)}Et(e,t,r){let i=e.add(t.multiply(Qr.fromNumber(r)));return i.compare(jT)===1&&(i=new Qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Tf(e),[r,i]=Sf(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Sc(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Tf(e),[r,i]=Sf(t);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ws{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ws(le.min(),i,new Oe(de),St(),me())}}class Qs{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Qs(r,t,me(),me(),me())}}/**
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
 */class So{constructor(e,t,r,i){this.Pt=e,this.removedTargetIds=t,this.key=r,this.bt=i}}class wg{constructor(e,t){this.targetId=e,this.Vt=t}}class _g{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Af{constructor(){this.St=0,this.Dt=Of(),this.Ct=Qe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=me(),t=me(),r=me();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Qs(this.Ct,this.xt,e,t,r)}Ft(){this.Nt=!1,this.Dt=Of()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class zT{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=St(),this.zt=kf(),this.Wt=new Oe(de)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const r=this.Zt(t);switch(e.state){case 0:this.te(t)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(t);break;case 3:this.te(t)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),r.$t(e.resumeToken));break;default:oe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((r,i)=>{this.te(i)&&t(i)})}ne(e){var t;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if($o(o))if(i===0){const a=new te(o.path);this.Yt(r,a,Re.newNoDocument(a,le.min()))}else ue(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(t=Tc.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(u,h,c){var f,d,w,g,v,m;const y={localCacheCount:h,existenceFilterCount:c.count},_=c.unchangedNames;return _&&(y.bloomFilter={applied:u===0,hashCount:(f=_==null?void 0:_.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(g=(w=(d=_==null?void 0:_.bits)===null||d===void 0?void 0:d.bitmap)===null||w===void 0?void 0:w.length)!==null&&g!==void 0?g:0,padding:(m=(v=_==null?void 0:_.bits)===null||v===void 0?void 0:v.padding)!==null&&m!==void 0?m:0}),y}(l,a,e.Vt))}}}}re(e,t){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Ln(s).toUint8Array()}catch(h){if(h instanceof $m)return qt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{u=new Sc(l,o,a)}catch(h){return qt(h instanceof $i?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return u.It===0?1:i!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const t=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&$o(a.target)){const l=new te(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Re.newNoDocument(l,e))}s.Mt&&(t.set(o,s.Ot()),s.Ft())}});let r=me();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Ws(e,t,this.Wt,this.jt,r);return this.jt=St(),this.zt=kf(),this.Wt=new Oe(de),i}Jt(e,t){if(!this.te(e))return;const r=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,r),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),r&&(this.jt=this.jt.insert(t,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Af,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new xe(de),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Af),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function kf(){return new Oe(te.comparator)}function Of(){return new Oe(te.comparator)}const $T={asc:"ASCENDING",desc:"DESCENDING"},KT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GT={and:"AND",or:"OR"};class HT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ru(n,e){return n.useProto3Json||zs(e)?e:{value:e}}function oi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function WT(n,e){return oi(n,e.toTimestamp())}function je(n){return ue(!!n),le.fromTimestamp(function(e){const t=Pn(e);return new Pe(t.seconds,t.nanos)}(n))}function Ac(n,e){return function(t){return new Ie(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Eg(n){const e=Ie.fromString(n);return ue(xg(e)),e}function Is(n,e){return Ac(n.databaseId,e.path)}function Xt(n,e){const t=Eg(e);if(t.get(1)!==n.databaseId.projectId)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new te(Tg(t))}function iu(n,e){return Ac(n.databaseId,e)}function Ig(n){const e=Eg(n);return e.length===4?Ie.emptyPath():Tg(e)}function Ts(n){return new Ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tg(n){return ue(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Nf(n,e,t){return{name:Is(n,e),fields:t.value.mapValue.fields}}function Sg(n,e,t){const r=Xt(n,e.name),i=je(e.updateTime),s=e.createTime?je(e.createTime):le.min(),o=new ot({mapValue:{fields:e.fields}}),a=Re.newFoundDocument(r,i,s,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function QT(n,e){return"found"in e?function(t,r){ue(!!r.found),r.found.name,r.found.updateTime;const i=Xt(t,r.found.name),s=je(r.found.updateTime),o=r.found.createTime?je(r.found.createTime):le.min(),a=new ot({mapValue:{fields:r.found.fields}});return Re.newFoundDocument(i,s,o,a)}(n,e):"missing"in e?function(t,r){ue(!!r.missing),ue(!!r.readTime);const i=Xt(t,r.missing),s=je(r.readTime);return Re.newNoDocument(i,s)}(n,e):oe()}function YT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ue(u===void 0||typeof u=="string"),Qe.fromBase64String(u||"")):(ue(u===void 0||u instanceof Uint8Array),Qe.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?$.UNKNOWN:yg(l.code);return new Q(u,l.message||"")}(o);t=new _g(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xt(n,r.document.name),s=je(r.document.updateTime),o=r.document.createTime?je(r.document.createTime):le.min(),a=new ot({mapValue:{fields:r.document.fields}}),l=Re.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];t=new So(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xt(n,r.document),s=r.readTime?je(r.readTime):le.min(),o=Re.newNoDocument(i,s),a=r.removedTargetIds||[];t=new So([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xt(n,r.document),s=r.removedTargetIds||[];t=new So([],s,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new VT(i,s),a=r.targetId;t=new wg(a,o)}}return t}function Ss(n,e){let t;if(e instanceof Ei)t={update:Nf(n,e.key,e.value)};else if(e instanceof Ii)t={delete:Is(n,e.key)};else if(e instanceof yn)t={update:Nf(n,e.key,e.data),updateMask:n1(e.fieldMask)};else{if(!(e instanceof _c))return oe();t={verify:Is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ii)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof br)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Er)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof si)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw oe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:WT(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(n,e.precondition)),t}function su(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?De.updateTime(je(i.updateTime)):i.exists!==void 0?De.exists(i.exists):De.none()}(e.currentDocument):De.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)ue(o.setToServerValue==="REQUEST_TIME"),a=new ii;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new br(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Er(u)}else"increment"in o?a=new si(s,o.increment):oe();const l=Ve.fromServerFormat(o.fieldPath);return new Hs(l,a)}(n,i)):[];if(e.update){e.update.name;const i=Xt(n,e.update.name),s=new ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new Tt(l.map(u=>Ve.fromServerFormat(u)))}(e.updateMask);return new yn(i,s,o,t,r)}return new Ei(i,s,t,r)}if(e.delete){const i=Xt(n,e.delete);return new Ii(i,t)}if(e.verify){const i=Xt(n,e.verify);return new _c(i,t)}return oe()}function XT(n,e){return n&&n.length>0?(ue(e!==void 0),n.map(t=>function(r,i){let s=r.updateTime?je(r.updateTime):je(i);return s.isEqual(le.min())&&(s=je(i)),new qT(s,r.transformResults||[])}(t,e))):[]}function Ag(n,e){return{documents:[iu(n,e.path)]}}function kg(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=iu(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=iu(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Rg(Ae.create(l,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Br(h.field),direction:ZT(h.dir)}}(u))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=ru(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),t}function Og(n){let e=Ig(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1);const h=t.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(h){const c=Ng(h);return c instanceof Ae&&gc(c)?c.getFilters():[c]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(h=>function(c){return new Yr(Ur(c.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(h)));let a=null;t.limit&&(a=function(h){let c;return c=typeof h=="object"?h.value:h,zs(c)?null:c}(t.limit));let l=null;t.startAt&&(l=function(h){const c=!!h.before,f=h.values||[];return new qn(f,c)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const c=!h.before,f=h.values||[];return new qn(f,c)}(t.endAt)),eg(e,i,o,s,a,"F",l,u)}function JT(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ng(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ur(e.unaryFilter.field);return we.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Ur(e.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(e.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ur(e.unaryFilter.field);return we.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(n):n.fieldFilter!==void 0?function(e){return we.create(Ur(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ae.create(e.compositeFilter.filters.map(t=>Ng(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return oe()}}(e.compositeFilter.op))}(n):oe()}function ZT(n){return $T[n]}function e1(n){return KT[n]}function t1(n){return GT[n]}function Br(n){return{fieldPath:n.canonicalString()}}function Ur(n){return Ve.fromServerFormat(n.fieldPath)}function Rg(n){return n instanceof we?function(e){if(e.op==="=="){if(ff(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NAN"}};if(hf(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ff(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NAN"}};if(hf(e.value))return{unaryFilter:{field:Br(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Br(e.field),op:e1(e.op),value:e.value}}}(n):n instanceof Ae?function(e){const t=e.getFilters().map(r=>Rg(r));return t.length===1?t[0]:{compositeFilter:{op:t1(e.op),filters:t}}}(n):oe()}function n1(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ln{constructor(e,t,r,i,s=le.min(),o=le.min(),a=Qe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cg{constructor(e){this.fe=e}}function r1(n,e){let t;if(e.document)t=Sg(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=te.fromSegments(e.noDocument.path),i=Tr(e.noDocument.readTime);t=Re.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return oe();{const r=te.fromSegments(e.unknownDocument.path),i=Tr(e.unknownDocument.version);t=Re.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(r){const i=new Pe(r[0],r[1]);return le.fromTimestamp(i)}(e.readTime)),t}function Rf(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ho(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:Is(i,s.key),fields:s.data.value.mapValue.fields,updateTime:oi(i,s.version.toTimestamp()),createTime:oi(i,s.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ir(e.version)};else{if(!e.isUnknownDocument())return oe();r.unknownDocument={path:t.path.toArray(),version:Ir(e.version)}}return r}function Ho(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ir(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Tr(n){const e=new Pe(n.seconds,n.nanoseconds);return le.fromTimestamp(e)}function er(n,e){const t=(e.baseMutations||[]).map(s=>su(n.fe,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>su(n.fe,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new bc(e.batchId,i,t,r)}function Ki(n){const e=Tr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Tr(n.lastLimboFreeSnapshotVersion):le.min();let r;var i;return n.query.documents!==void 0?(ue((i=n.query).documents.length===1),r=At(bi(Ig(i.documents[0])))):r=function(s){return At(Og(s))}(n.query),new ln(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Qe.fromBase64String(n.resumeToken))}function Dg(n,e){const t=Ir(e.snapshotVersion),r=Ir(e.lastLimboFreeSnapshotVersion);let i;i=$o(e.target)?Ag(n.fe,e.target):kg(n.fe,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_r(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function kc(n){const e=Og({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Go(e,e.limit,"L"):e}function wl(n,e){return new Ic(e.largestBatchId,su(n.fe,e.overlayMutation))}function xf(n,e){const t=e.path.lastSegment();return[n,wt(e.path.popLast()),t]}function Cf(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Ir(r.readTime),documentKey:wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{getBundleMetadata(e,t){return Df(e).get(t).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Tr(i.createTime),version:i.version};var i})}saveBundleMetadata(e,t){return Df(e).put({bundleId:(r=t).id,createTime:Ir(je(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Pf(e).get(t).next(r=>{if(r)return{name:(i=r).name,query:kc(i.bundledQuery),readTime:Tr(i.readTime)};var i})}saveNamedQuery(e,t){return Pf(e).put(function(r){return{name:r.name,readTime:Ir(je(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Df(n){return nt(n,"bundles")}function Pf(n){return nt(n,"namedQueries")}/**
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
 */class Pa{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const r=t.uid||"";return new Pa(e,r)}getOverlay(e,t){return Di(e).get(xf(this.userId,t)).next(r=>r?wl(this.serializer,r):null)}getOverlays(e,t){const r=Wt();return z.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const a=new Ic(t,o);i.push(this.we(e,a))}),z.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(wt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Di(e).J("collectionPathOverlayIndex",a))}),z.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Wt(),s=wt(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Di(e).j("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=wl(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Wt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Di(e).X({index:"collectionGroupOverlayIndex",range:a},(l,u,h)=>{const c=wl(this.serializer,u);s.size()<i||c.largestBatchId===o?(s.set(c.getKey(),c),o=c.largestBatchId):h.done()}).next(()=>s)}we(e,t){return Di(e).put(function(r,i,s){const[o,a,l]=xf(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:l,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:Ss(r.fe,s.mutation)}}(this.serializer,this.userId,t))}}function Di(n){return nt(n,"documentOverlays")}/**
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
 */class tr{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.ye(t,13):(this.ye(t,15),ws(r)?t.pe(0):t.pe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ye(t,20),typeof r=="string"?t.Ie(r):(t.Ie(`${r.seconds||""}`),t.pe(r.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ln(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ye(t,45),t.pe(r.latitude||0),t.pe(r.longitude||0)}else"mapValue"in e?Km(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):oe()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const r=e.fields||{};this.ye(t,55);for(const i of Object.keys(r))this.Te(i,t),this.me(r[i],t)}Pe(e,t){const r=e.values||[];this.ye(t,50);for(const i of r)this.me(i,t)}ve(e,t){this.ye(t,37),te.fromName(e).path.forEach(r=>{this.ye(t,60),this.be(r,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}tr.Ve=new tr;function s1(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function Lf(n){const e=64-function(t){let r=0;for(let i=0;i<8;++i){const s=s1(255&t[i]);if(r+=s,s!==8)break}return r}(n);return Math.ceil(e/8)}class o1{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.De(r.value),r=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ne(r.value),r=t.next();this.ke()}Me(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.De(r);else if(r<2048)this.De(960|r>>>6),this.De(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|r>>>12),this.De(128|63&r>>>6),this.De(128|63&r);else{const i=t.codePointAt(0);this.De(240|i>>>18),this.De(128|63&i>>>12),this.De(128|63&i>>>6),this.De(128|63&i)}}this.Ce()}$e(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ne(r);else if(r<2048)this.Ne(960|r>>>6),this.Ne(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r);else{const i=t.codePointAt(0);this.Ne(240|i>>>18),this.Ne(128|63&i>>>12),this.Ne(128|63&i>>>6),this.Ne(128|63&i)}}this.ke()}Oe(e){const t=this.Fe(e),r=Lf(t);this.Be(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Le(e){const t=this.Fe(e),r=Lf(t);this.Be(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class a1{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class l1{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class Pi{constructor(){this.je=new o1,this.ze=new a1(this.je),this.We=new l1(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class nr{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new nr(this.indexId,this.documentKey,this.arrayValue,r)}}function bn(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Mf(n.arrayValue,e.arrayValue),t!==0?t:(t=Mf(n.directionalValue,e.directionalValue),t!==0?t:te.comparator(n.documentKey,e.documentKey)))}function Mf(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class u1{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ze=r:this.Xe.push(r)}}tn(e){ue(e.collectionGroup===this.collectionId);const t=Wl(e);if(t!==void 0&&!this.en(t))return!1;const r=Jn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.en(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Ze!==void 0){if(!i.has(this.Ze.field.canonicalString())){const a=r[s];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Pg(n){var e,t;if(ue(n instanceof we||n instanceof Ae),n instanceof we){if(n instanceof Zm){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>we.create(n.field,"==",s)))||[];return Ae.create(i,"or")}return n}const r=n.filters.map(i=>Pg(i));return Ae.create(r,n.op)}function c1(n){if(n.getFilters().length===0)return[];const e=lu(Pg(n));return ue(Lg(e)),ou(e)||au(e)?[e]:e.getFilters()}function ou(n){return n instanceof we}function au(n){return n instanceof Ae&&gc(n)}function Lg(n){return ou(n)||au(n)||function(e){if(e instanceof Ae&&Jl(e)){for(const t of e.getFilters())if(!ou(t)&&!au(t))return!1;return!0}return!1}(n)}function lu(n){if(ue(n instanceof we||n instanceof Ae),n instanceof we)return n;if(n.filters.length===1)return lu(n.filters[0]);const e=n.filters.map(r=>lu(r));let t=Ae.create(e,n.op);return t=Wo(t),Lg(t)?t:(ue(t instanceof Ae),ue(ri(t)),ue(t.filters.length>1),t.filters.reduce((r,i)=>Oc(r,i)))}function Oc(n,e){let t;return ue(n instanceof we||n instanceof Ae),ue(e instanceof we||e instanceof Ae),t=n instanceof we?e instanceof we?function(r,i){return Ae.create([r,i],"and")}(n,e):Ff(n,e):e instanceof we?Ff(e,n):function(r,i){if(ue(r.filters.length>0&&i.filters.length>0),ri(r)&&ri(i))return Ym(r,i.getFilters());const s=Jl(r)?r:i,o=Jl(r)?i:r,a=s.filters.map(l=>Oc(l,o));return Ae.create(a,"or")}(n,e),Wo(t)}function Ff(n,e){if(ri(e))return Ym(e,n.getFilters());{const t=e.filters.map(r=>Oc(n,r));return Ae.create(t,"or")}}function Wo(n){if(ue(n instanceof we||n instanceof Ae),n instanceof we)return n;const e=n.getFilters();if(e.length===1)return Wo(e[0]);if(Wm(n))return n;const t=e.map(i=>Wo(i)),r=[];return t.forEach(i=>{i instanceof we?r.push(i):i instanceof Ae&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ae.create(r,n.op)}/**
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
 */class h1{constructor(){this.rn=new Nc}addToCollectionParentIndex(e,t){return this.rn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(Rt.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class Nc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new xe(Ie.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new xe(Ie.comparator)).toArray()}}/**
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
 */const co=new Uint8Array(0);class f1{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Nc,this.un=new Wn(r=>_r(r),(r,i)=>$s(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const s={collectionId:r,parent:wt(i)};return qf(e).put(s)}return z.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Cm(t),""],!1,!0);return qf(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Ht(o.parent))}return r})}addFieldIndex(e,t){const r=ho(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Mi(e);return s.next(a=>{o.put(Cf(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=ho(e),i=Mi(e),s=Li(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Li(e);let i=!0;const s=new Map;return z.forEach(this.cn(t),o=>this.an(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=me();const a=[];return z.forEach(s,(l,u)=>{var h;X("IndexedDbIndexManager",`Using index ${h=l,`id=${h.indexId}|cg=${h.collectionGroup}|f=${h.fields.map(_=>`${_.fieldPath}:${_.kind}`).join(",")}`} to execute ${_r(t)}`);const c=function(_,p){const b=Wl(p);if(b===void 0)return null;for(const k of Ko(_,b.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,l),f=function(_,p){const b=new Map;for(const k of Jn(p))for(const S of Ko(_,k.fieldPath))switch(S.op){case"==":case"in":b.set(k.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return b.set(k.fieldPath.canonicalString(),S.value),Array.from(b.values())}return null}(u,l),d=function(_,p){const b=[];let k=!0;for(const S of Jn(p)){const A=S.kind===0?yf(_,S.fieldPath,_.startAt):vf(_,S.fieldPath,_.startAt);b.push(A.value),k&&(k=A.inclusive)}return new qn(b,k)}(u,l),w=function(_,p){const b=[];let k=!0;for(const S of Jn(p)){const A=S.kind===0?vf(_,S.fieldPath,_.endAt):yf(_,S.fieldPath,_.endAt);b.push(A.value),k&&(k=A.inclusive)}return new qn(b,k)}(u,l),g=this.hn(l,u,d),v=this.hn(l,u,w),m=this.ln(l,u,f),y=this.fn(l.indexId,c,g,d.inclusive,v,w.inclusive,m);return z.forEach(y,_=>r.H(_,t.limit).next(p=>{p.forEach(b=>{const k=te.fromSegments(b.documentKey);o.has(k)||(o=o.add(k),a.push(k))})}))}).next(()=>a)}return z.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=c1(Ae.create(e.filters,"and")).map(r=>eu(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,r,i,s,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,s.length),u=l/(t!=null?t.length:1),h=[];for(let c=0;c<l;++c){const f=t?this.dn(t[c/u]):co,d=this.wn(e,f,r[c%u],i),w=this._n(e,f,s[c%u],o),g=a.map(v=>this.wn(e,f,v,!0));h.push(...this.createRange(d,w,g))}return h}wn(e,t,r,i){const s=new nr(e,te.empty(),t,r);return i?s:s.Je()}_n(e,t,r,i){const s=new nr(e,te.empty(),t,r);return i?s.Je():s}an(e,t){const r=new u1(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const i=this.cn(t);return z.forEach(i,s=>this.an(e,s).next(o=>{o?r!==0&&o.fields.length<function(a){let l=new xe(Ve.comparator),u=!1;for(const h of a.filters)for(const c of h.getFlattenedFilters())c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:l=l.add(c.field));for(const h of a.orderBy)h.field.isKeyField()||(l=l.add(h.field));return l.size+(u?1:0)}(s)&&(r=1):r=0})).next(()=>function(s){return s.limit!==null}(t)&&i.length>1&&r===2?1:r)}mn(e,t){const r=new Pi;for(const i of Jn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.He(i.kind);tr.Ve._e(s,o)}return r.Qe()}dn(e){const t=new Pi;return tr.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const r=new Pi;return tr.Ve._e(wr(this.databaseId,t),r.He(function(i){const s=Jn(i);return s.length===0?0:s[s.length-1].kind}(e))),r.Qe()}ln(e,t,r){if(r===null)return[];let i=[];i.push(new Pi);let s=0;for(const o of Jn(e)){const a=r[s++];for(const l of i)if(this.yn(t,o.fieldPath)&&Es(a))i=this.pn(i,o,a);else{const u=l.He(o.kind);tr.Ve._e(a,u)}}return this.In(i)}hn(e,t,r){return this.ln(e,t,r.position)}In(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Qe();return t}pn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Pi;l.seed(a.Qe()),tr.Ve._e(o,l.He(t.kind)),s.push(l)}return s}yn(e,t){return!!e.filters.find(r=>r instanceof we&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=ho(e),i=Mi(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return z.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(u,h){const c=h?new zo(h.sequenceNumber,new Rt(Tr(h.readTime),new te(Ht(h.documentKey)),h.largestBatchId)):zo.empty(),f=u.fields.map(([d,w])=>new WI(Ve.fromServerFormat(d),w));return new Dm(u.indexId,u.collectionGroup,f,c)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:de(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=ho(e),s=Mi(e);return this.Tn(e).next(o=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>z.forEach(a,l=>s.put(Cf(l.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return z.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?z.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),z.forEach(a,l=>this.En(e,i,l).next(u=>{const h=this.An(s,l);return u.isEqual(h)?z.resolve():this.vn(e,s,l,u,h)}))))})}Rn(e,t,r,i){return Li(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.gn(r,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,r,i){return Li(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.gn(r,t.key),t.key.path.toArray()])}En(e,t,r){const i=Li(e);let s=new xe(bn);return i.X({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.gn(r,t)])},(o,a)=>{s=s.add(new nr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>s)}An(e,t){let r=new xe(bn);const i=this.mn(t,e);if(i==null)return r;const s=Wl(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Es(o))for(const a of o.arrayValue.values||[])r=r.add(new nr(t.indexId,e.key,this.dn(a),i))}else r=r.add(new nr(t.indexId,e.key,co,i));return r}vn(e,t,r,i,s){X("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,l,u,h,c){const f=a.getIterator(),d=l.getIterator();let w=Fr(f),g=Fr(d);for(;w||g;){let v=!1,m=!1;if(w&&g){const y=u(w,g);y<0?m=!0:y>0&&(v=!0)}else w!=null?m=!0:v=!0;v?(h(g),g=Fr(d)):m?(c(w),w=Fr(f)):(w=Fr(f),g=Fr(d))}}(i,s,bn,a=>{o.push(this.Rn(e,t,r,a))},a=>{o.push(this.Pn(e,t,r,a))}),z.waitFor(o)}Tn(e){let t=1;return Mi(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>bn(o,a)).filter((o,a,l)=>!a||bn(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=bn(o,e),l=bn(o,t);if(a===0)i[0]=e.Je();else if(a>0&&l<0)i.push(o),i.push(o.Je());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,co,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,co,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,t){return bn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Bf)}getMinOffset(e,t){return z.mapArray(this.cn(t),r=>this.an(e,r).next(i=>i||oe())).next(Bf)}}function qf(n){return nt(n,"collectionParents")}function Li(n){return nt(n,"indexEntries")}function ho(n){return nt(n,"indexConfiguration")}function Mi(n){return nt(n,"indexState")}function Bf(n){ue(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;dc(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Rt(e.readTime,e.documentKey,t)}/**
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
 */const Uf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.X({range:o},(h,c,f)=>(a++,f.delete()));s.push(l.next(()=>{ue(a===1)}));const u=[];for(const h of t.mutations){const c=Bm(e,h.key.path,t.batchId);s.push(i.delete(c)),u.push(h.key)}return z.waitFor(s).next(()=>u)}function Qo(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw oe();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class La{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Vn={}}static de(e,t,r,i){ue(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new La(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return En(e).X({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=Vr(e),o=En(e);return o.add({}).next(a=>{ue(typeof a=="number");const l=new bc(a,t,r,i),u=function(f,d,w){const g=w.baseMutations.map(m=>Ss(f.fe,m)),v=w.mutations.map(m=>Ss(f.fe,m));return{userId:d,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:g,mutations:v}}(this.serializer,this.userId,l),h=[];let c=new xe((f,d)=>de(f.canonicalString(),d.canonicalString()));for(const f of i){const d=Bm(this.userId,f.key.path,a);c=c.add(f.key.path.popLast()),h.push(o.put(u)),h.push(s.put(d,eT))}return c.forEach(f=>{h.push(this.indexManager.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Vn[a]=l.keys()}),z.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return En(e).get(t).next(r=>r?(ue(r.userId===this.userId),er(this.serializer,r)):null)}Sn(e,t){return this.Vn[t]?z.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Vn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return En(e).X({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(ue(a.batchId>=r),s=er(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return En(e).X({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return En(e).j("userMutationsIndex",t).next(r=>r.map(i=>er(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=bo(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return Vr(e).X({range:i},(o,a,l)=>{const[u,h,c]=o,f=Ht(h);if(u===this.userId&&t.path.isEqual(f))return En(e).get(c).next(d=>{if(!d)throw oe();ue(d.userId===this.userId),s.push(er(this.serializer,d))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(de);const i=[];return t.forEach(s=>{const o=bo(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Vr(e).X({range:a},(u,h,c)=>{const[f,d,w]=u,g=Ht(d);f===this.userId&&s.path.isEqual(g)?r=r.add(w):c.done()});i.push(l)}),z.waitFor(i).next(()=>this.Dn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=bo(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new xe(de);return Vr(e).X({range:o},(l,u,h)=>{const[c,f,d]=l,w=Ht(f);c===this.userId&&r.isPrefixOf(w)?w.length===i&&(a=a.add(d)):h.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(En(e).get(s).next(o=>{if(o===null)throw oe();ue(o.userId===this.userId),r.push(er(this.serializer,o))}))}),z.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return Mg(e.ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),z.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return z.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return Vr(e).X({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Ht(s[1]);i.push(l)}else a.done()}).next(()=>{ue(i.length===0)})})}containsKey(e,t){return Fg(e,this.userId,t)}xn(e){return qg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Fg(n,e,t){const r=bo(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vr(n).X({range:s,Y:!0},(a,l,u)=>{const[h,c,f]=a;h===e&&c===i&&(o=!0),u.done()}).next(()=>o)}function En(n){return nt(n,"mutations")}function Vr(n){return nt(n,"documentMutations")}function qg(n){return nt(n,"mutationQueues")}/**
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
 */class Sr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Sr(0)}static Mn(){return new Sr(-1)}}/**
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
 */class d1{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const r=new Sr(t.highestTargetId);return t.highestTargetId=r.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>le.fromTimestamp(new Pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.$n(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.On(e,i)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(r=>(r.targetCount+=1,this.Bn(t,r),this.On(e,r))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>qr(e).delete(t.targetId)).next(()=>this.$n(e)).next(r=>(ue(r.targetCount>0),r.targetCount-=1,this.On(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return qr(e).X((o,a)=>{const l=Ki(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>z.waitFor(s)).next(()=>i)}forEachTarget(e,t){return qr(e).X((r,i)=>{const s=Ki(i);t(s)})}$n(e){return Vf(e).get("targetGlobalKey").next(t=>(ue(t!==null),t))}On(e,t){return Vf(e).put("targetGlobalKey",t)}Fn(e,t){return qr(e).put(Dg(this.serializer,t))}Bn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const r=_r(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return qr(e).X({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Ki(a);$s(t,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Tn(e);return t.forEach(o=>{const a=wt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),z.waitFor(i)}removeMatchingKeys(e,t,r){const i=Tn(e);return z.forEach(t,s=>{const o=wt(s.path);return z.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Tn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Tn(e);let s=me();return i.X({range:r,Y:!0},(o,a,l)=>{const u=Ht(o[1]),h=new te(u);s=s.add(h)}).next(()=>s)}containsKey(e,t){const r=wt(t.path),i=IDBKeyRange.bound([r],[Cm(r)],!1,!0);let s=0;return Tn(e).X({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}le(e,t){return qr(e).get(t).next(r=>r?Ki(r):null)}}function qr(n){return nt(n,"targets")}function Vf(n){return nt(n,"targetGlobal")}function Tn(n){return nt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf([n,e],[t,r]){const i=de(n,t);return i===0?de(e,r):i}class p1{constructor(e){this.Ln=e,this.buffer=new xe(jf),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class m1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){X("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hn(t)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Gn(t)}await this.Qn(3e5)})}}class g1{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return z.resolve(It.ct);const r=new p1(t);return this.jn.forEachTarget(e,i=>r.Kn(i.sequenceNumber)).next(()=>this.jn.Wn(e,i=>r.Kn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.jn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Uf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uf):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(c=>(c>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${c}`),i=this.params.maximumSequenceNumbersToCollect):i=c,o=Date.now(),this.nthSequenceNumber(e,i))).next(c=>(r=c,a=Date.now(),this.removeTargets(e,r,t))).next(c=>(s=c,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(c=>(u=Date.now(),Hl()<=Ee.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${c} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:c})))}}function y1(n,e){return new g1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t){this.db=e,this.garbageCollector=y1(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Jn(e){let t=0;return this.Wn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(r,i)=>t(i))}addReference(e,t,r){return fo(e,r)}removeReference(e,t,r){return fo(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return fo(e,t)}Xn(e,t){return function(r,i){let s=!1;return qg(r).Z(o=>Fg(r,o,i).next(a=>(a&&(s=!0),z.resolve(!a)))).next(()=>s)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Yn(e,(o,a)=>{if(a<=t){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,le.min()),Tn(e).delete([0,wt(o.path)])))});i.push(l)}}).next(()=>z.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return fo(e,t)}Yn(e,t){const r=Tn(e);let i,s=It.ct;return r.X({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==It.ct&&t(new te(Ht(i)),s),s=u,i=l):s=It.ct}).next(()=>{s!==It.ct&&t(new te(Ht(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function fo(n,e){return Tn(n).put(function(t,r){return{targetId:0,path:wt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class Bg{constructor(){this.changes=new Wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class w1{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Yn(e).put(r)}removeEntry(e,t,r){return Yn(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Ho(s),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Zn(e,r)))}getEntry(e,t){let r=Re.newInvalidDocument(t);return Yn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Fi(t))},(i,s)=>{r=this.ts(t,s)}).next(()=>r)}es(e,t){let r={size:0,document:Re.newInvalidDocument(t)};return Yn(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(Fi(t))},(i,s)=>{r={document:this.ts(t,s),size:Qo(s)}}).next(()=>r)}getEntries(e,t){let r=St();return this.ns(e,t,(i,s)=>{const o=this.ts(i,s);r=r.insert(i,o)}).next(()=>r)}ss(e,t){let r=St(),i=new Oe(te.comparator);return this.ns(e,t,(s,o)=>{const a=this.ts(s,o);r=r.insert(s,a),i=i.insert(s,Qo(o))}).next(()=>({documents:r,rs:i}))}ns(e,t,r){if(t.isEmpty())return z.resolve();let i=new xe(Kf);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Fi(i.first()),Fi(i.last())),o=i.getIterator();let a=o.getNext();return Yn(e).X({index:"documentKeyIndex",range:s},(l,u,h)=>{const c=te.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Kf(a,c)<0;)r(a,null),a=o.getNext();a&&a.isEqual(c)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.G(Fi(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Ho(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Yn(e).j(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=St();for(const h of l){const c=this.ts(te.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);c.isFoundDocument()&&(Gs(t,c)||i.has(c.key))&&(u=u.insert(c.key,c))}return u})}getAllFromCollectionGroup(e,t,r,i){let s=St();const o=$f(t,r),a=$f(t,Rt.max());return Yn(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const c=this.ts(te.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(c.key,c),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new _1(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return zf(e).get("remoteDocumentGlobalKey").next(t=>(ue(!!t),t))}Zn(e,t){return zf(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const r=r1(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(le.min())))return r}return Re.newInvalidDocument(e)}}function Ug(n){return new w1(n)}class _1 extends Bg{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Wn(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new xe((s,o)=>de(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.us.get(s);if(t.push(this.os.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Rf(this.os.serializer,o);i=i.add(s.path.popLast());const u=Qo(l);r+=u-a.size,t.push(this.os.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Rf(this.os.serializer,o.convertToNoDocument(le.min()));t.push(this.os.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.os.updateMetadata(e,r)),z.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(r=>(this.us.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:r,rs:i})=>(i.forEach((s,o)=>{this.us.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function zf(n){return nt(n,"remoteDocumentGlobal")}function Yn(n){return nt(n,"remoteDocumentsV14")}function Fi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function $f(n,e){const t=e.documentKey.path.toArray();return[n,Ho(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Kf(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=de(t[s],r[s]),i)return i;return i=de(t.length,r.length),i||(i=de(t[t.length-2],r[r.length-2]),i||de(t[t.length-1],r[r.length-1]))}/**
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
 */class b1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Vg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Zi(r.mutation,i,Tt.empty(),Pe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,t,r=me()){const i=Wt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=zi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,me()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=St();const o=Ji(),a=Ji();return t.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof yn)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Zi(h.mutation,u,h.mutation.getFieldMask(),Pe.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var c;return a.set(u,new b1(h,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ji();let i=new Oe((o,a)=>o-a),s=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||Tt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const c=(i.get(a.batchId)||me()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,c=og();h.forEach(f=>{if(!s.has(f)){const d=pg(t.get(f),r.get(f));d!==null&&c.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,c))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(i){return te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):z.resolve(Wt());let a=-1,l=s;return o.next(u=>z.forEach(u,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,me())).next(h=>({batchId:a,changes:sg(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next(r=>{let i=zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=zi();return this.indexManager.getCollectionParents(e,i).next(o=>z.forEach(o,a=>{const l=function(u,h){return new gn(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Re.newInvalidDocument(u)))});let o=zi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Zi(u.mutation,l,Tt.empty(),Pe.now()),Gs(t,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return z.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var r;return this.cs.set(t.id,{id:(r=t).id,version:r.version,createTime:je(r.createTime)}),z.resolve()}getNamedQuery(e,t){return z.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(r){return{name:r.name,query:kc(r.bundledQuery),readTime:je(r.readTime)}}(t)),z.resolve()}}/**
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
 */class I1{constructor(){this.overlays=new Oe(te.comparator),this.ls=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wt();return z.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.we(e,t,s)}),z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const i=Wt(),s=t.length+1,o=new te(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Oe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Wt(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Wt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return z.resolve(a)}we(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ic(t,r));let s=this.ls.get(t);s===void 0&&(s=me(),this.ls.set(t,s)),this.ls.set(t,s.add(r.key))}}/**
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
 */class Rc{constructor(){this.fs=new xe(Xe.ds),this.ws=new xe(Xe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const r=new Xe(e,t);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.ys(new Xe(e,t))}ps(e,t){e.forEach(r=>this.removeReference(r,t))}Is(e){const t=new te(new Ie([])),r=new Xe(t,e),i=new Xe(t,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new te(new Ie([])),r=new Xe(t,e),i=new Xe(t,e+1);let s=me();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Xe(e,0),r=this.fs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return te.comparator(e.key,t.key)||de(e.As,t.As)}static _s(e,t){return de(e.As,t.As)||te.comparator(e.key,t.key)}}/**
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
 */class T1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new xe(Xe.ds)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bc(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,t){return z.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.bs(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Xe(t,0),i=new Xe(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new xe(de);return t.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),z.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new te(s),0);let a=new xe(de);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),z.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ue(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return z.forEach(t.mutations,i=>{const s=new Xe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,t){const r=new Xe(t,0),i=this.Rs.firstAfterOrEqual(r);return z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class S1{constructor(e){this.Ds=e,this.docs=new Oe(te.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=St();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Re.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=St();const o=t.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dc(Lm(h),r)<=0||(i.has(h.key)||Gs(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,t,r,i){oe()}Cs(e,t){return z.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new A1(this)}getSize(e){return z.resolve(this.size)}}class A1 extends Bg{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),z.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class k1{constructor(e){this.persistence=e,this.xs=new Wn(t=>_r(t),$s),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Rc,this.targetCount=0,this.Ms=Sr.kn()}forEachTarget(e,t){return this.xs.forEach((r,i)=>t(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Ns&&(this.Ns=t),z.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Sr(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Fn(t),z.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.xs.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this.ks.gs(t,r),z.resolve()}removeMatchingKeys(e,t,r){this.ks.ps(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ks.Es(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this.ks.containsKey(t))}}/**
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
 */class jg{constructor(e,t){this.$s={},this.overlays={},this.Os=new It(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new k1(this),this.indexManager=new h1,this.remoteDocumentCache=function(r){return new S1(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new Cg(t),this.qs=new E1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new I1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.$s[e.toKey()];return r||(r=new T1(t,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const i=new O1(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,t){return z.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,t)))}}class O1 extends Fm{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Qs=new Rc,this.js=null}static zs(e){return new Ma(e)}get Ws(){if(this.js)return this.js;throw oe()}addReference(e,t,r){return this.Qs.addReference(r,t),this.Ws.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.Qs.removeReference(r,t),this.Ws.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),z.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Ws,r=>{const i=te.fromPath(r);return this.Hs(e,i).next(s=>{s||t.removeEntry(i,le.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(r=>{r?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return z.or([()=>z.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.serializer=e}O(e,t,r,i){const s=new Na("createOrUpgrade",t);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",af,{unique:!0}),a.createObjectStore("documentMutations")}(e),Gf(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=z.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Gf(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:le.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",af,{unique:!0});const h=l.store("mutations"),c=u.map(f=>h.put(f));return z.waitFor(c)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ys(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(s)))),r<7&&i>=7&&(o=o.next(()=>this.Zs(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ei(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:fT});l.createIndex("collectionPathOverlayIndex",dT,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",pT,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:tT});l.createIndex("documentKeyIndex",nT),l.createIndex("collectionGroupIndex",rT)}(e)).next(()=>this.ni(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:lT}).createIndex("sequenceNumberIndex",uT,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:cT}).createIndex("documentKeyIndex",hT,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((r,i)=>{t+=Qo(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Ys(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(i=>z.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>z.forEach(a,l=>{ue(l.userId===s.userId);const u=er(this.serializer,l);return Mg(e,s.userId,u).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.X((o,a)=>{const l=new Ie(o),u=function(h){return[0,wt(h)]}(l);s.push(t.get(u).next(h=>h?z.resolve():(c=>t.put({targetId:0,path:wt(c),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>z.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:aT});const r=t.store("collectionParents"),i=new Nc,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:wt(l)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const l=new Ie(o);return s(l.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,l],u)=>{const h=Ht(a);return s(h.popLast())}))}ei(e){const t=e.store("targets");return t.X((r,i)=>{const s=Ki(i),o=Dg(this.serializer,s);return t.put(o)})}ni(e,t){const r=t.store("remoteDocuments"),i=[];return r.X((s,o)=>{const a=t.store("remoteDocumentsV14"),l=(u=o,u.document?new te(Ie.fromString(u.document.name).popFirst(5)):u.noDocument?te.fromSegments(u.noDocument.path):u.unknownDocument?te.fromSegments(u.unknownDocument.path):oe()).path.toArray();var u;/**
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
*/const h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(h))}).next(()=>z.waitFor(i))}si(e,t){const r=t.store("mutations"),i=Ug(this.serializer),s=new jg(Ma.zs,this.serializer.fe);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let h=(u=a.get(l.userId))!==null&&u!==void 0?u:me();er(this.serializer,l).keys().forEach(c=>h=h.add(c)),a.set(l.userId,h)}),z.forEach(a,(l,u)=>{const h=new Je(u),c=Pa.de(this.serializer,h),f=s.getIndexManager(h),d=La.de(h,this.serializer,f,s.referenceDelegate);return new Vg(i,d,c,f).recalculateAndSaveOverlaysForDocumentKeys(new Ql(t,It.ct),l).next()})})}}function Gf(n){n.createObjectStore("targetDocuments",{keyPath:sT}).createIndex("documentTargetsIndex",oT,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",iT,{unique:!0}),n.createObjectStore("targetGlobal")}const _l="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class xc{constructor(e,t,r,i,s,o,a,l,u,h,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.ii=s,this.window=o,this.document=a,this.ri=u,this.oi=h,this.ui=c,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=f=>Promise.resolve(),!xc.D())throw new Q($.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new v1(this,i),this.di=t+"main",this.serializer=new Cg(l),this.wi=new Lt(this.di,this.ui,new N1(this.serializer)),this.Bs=new d1(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ug(this.serializer),this.qs=new i1,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,h===!1&&Ue("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Q($.FAILED_PRECONDITION,_l);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new It(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>po(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(Hn(e))return X("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return X("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return qi(e).get("owner").next(t=>z.resolve(this.Ri(t)))}Pi(e){return po(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=nt(t,"clientMetadata");return r.j().next(i=>{const s=this.Si(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return z.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?z.resolve(!0):qi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new Q($.FAILED_PRECONDITION,_l);return!1}}return!(!this.networkEnabled||!this.inForeground)||po(e).j().next(r=>this.Si(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&X("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ql(e,It.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(r=>this.Vi(r.updateTimeMs,t)&&!this.Ci(r.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>po(e).j().next(t=>this.Si(t,18e5).map(r=>r.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return La.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new f1(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return Pa.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,r){X("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(o=this.ui)===15?gT:o===14?jm:o===13?Vm:o===12?mT:o===11?Um:void oe();var o;let a;return this.wi.runTransaction(e,i,s,l=>(a=new Ql(l,this.Os?this.Os.next():It.ct),t==="readwrite-primary"?this.Ti(a).next(u=>!!u||this.Ei(a)).next(u=>{if(!u)throw Ue(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new Q($.FAILED_PRECONDITION,Mm);return r(a)}).next(u=>this.vi(a).next(()=>u)):this.Oi(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Oi(e){return qi(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Q($.FAILED_PRECONDITION,_l)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return qi(e).put("owner",t)}static D(){return Lt.D()}Ai(e){const t=qi(e);return t.get("owner").next(r=>this.Ri(r)?(X("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):z.resolve())}Vi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Ue(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;cv()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const r=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return X("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ue("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){Ue("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function qi(n){return nt(n,"owner")}function po(n){return nt(n,"clientMetadata")}function Cc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Dc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Fi=r,this.Bi=i}static Li(e,t){let r=me(),i=me();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dc(e,t.fromCache,r,i)}}/**
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
 */class zg{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ki(e,t).next(s=>s||this.Gi(e,t,i,r)).next(s=>s||this.Qi(e,t))}Ki(e,t){if(wf(t))return z.resolve(null);let r=At(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Go(t,null,"F"),r=At(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=me(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(t,a);return this.zi(t,u,o,l.readTime)?this.Ki(e,Go(t,null,"F")):this.Wi(e,u,t,l)}))})))}Gi(e,t,r,i){return wf(t)||i.isEqual(le.min())?this.Qi(e,t):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(t,s);return this.zi(t,o,r,i)?this.Qi(e,t):(Hl()<=Ee.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),nu(t)),this.Wi(e,o,t,Pm(i,-1)))})}ji(e,t){let r=new xe(rg(e));return t.forEach((i,s)=>{Gs(e,s)&&(r=r.add(s))}),r}zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return Hl()<=Ee.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",nu(t)),this.Ui.getDocumentsMatchingQuery(e,t,Rt.min())}Wi(e,t,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,r,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new Oe(de),this.Yi=new Wn(s=>_r(s),$s),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vg(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function $g(n,e,t,r){return new R1(n,e,t,r)}async function Kg(n,e){const t=ne(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.tr(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=me();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function x1(n,e){const t=ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,c=h.keys();let f=z.resolve();return c.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(w=>{const g=l.docVersions.get(d);ue(g!==null),w.version.compareTo(g)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=me();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gg(n){const e=ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function C1(n,e){const t=ne(n),r=e.snapshotVersion;let i=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});i=t.Ji;const a=[];e.targetChanges.forEach((h,c)=>{const f=i.get(c);if(!f)return;a.push(t.Bs.removeMatchingKeys(s,h.removedDocuments,c).next(()=>t.Bs.addMatchingKeys(s,h.addedDocuments,c)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(c)!==null?d=d.withResumeToken(Qe.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(h.resumeToken,r)),i=i.insert(c,d),function(w,g,v){return w.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,d,h)&&a.push(t.Bs.updateTargetData(s,d))});let l=St(),u=me();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(Hg(s,o,e.documentUpdates).next(h=>{l=h.nr,u=h.sr})),!r.isEqual(le.min())){const h=t.Bs.getLastRemoteSnapshotVersion(s).next(c=>t.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.Ji=i,s))}function Hg(n,e,t){let r=me(),i=me();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=St();return t.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function D1(n,e){const t=ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ai(n,e){const t=ne(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Bs.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):t.Bs.allocateTargetId(r).next(o=>(i=new ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(r.targetId,r),t.Yi.set(e,r.targetId)),r})}async function li(n,e,t){const r=ne(n),i=r.Ji.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hn(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Yo(n,e,t){const r=ne(n);let i=le.min(),s=me();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=ne(a),c=h.Yi.get(u);return c!==void 0?z.resolve(h.Ji.get(c)):h.Bs.getTargetData(l,u)}(r,o,At(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,t?i:le.min(),t?s:me())).next(a=>(Yg(r,ng(e),a),{documents:a,ir:s})))}function Wg(n,e){const t=ne(n),r=ne(t.Bs),i=t.Ji.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.le(s,e).next(o=>o?o.target:null))}function Qg(n,e){const t=ne(n),r=t.Xi.get(e)||le.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Zi.getAllFromCollectionGroup(i,e,Pm(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(Yg(t,e,i),i))}function Yg(n,e,t){let r=n.Xi.get(e)||le.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}async function P1(n,e,t,r){const i=ne(n);let s=me(),o=St();for(const u of t){const h=e.rr(u.metadata.name);u.document&&(s=s.add(h));const c=e.ur(u);c.setReadTime(e.cr(u.metadata.readTime)),o=o.insert(h,c)}const a=i.Zi.newChangeBuffer({trackRemovals:!0}),l=await ai(i,function(u){return At(bi(Ie.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Hg(u,a,o).next(h=>(a.apply(u),h)).next(h=>i.Bs.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Bs.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,h.nr,h.sr)).next(()=>h.nr)))}async function L1(n,e,t=me()){const r=await ai(n,At(kc(e.bundledQuery))),i=ne(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=je(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.qs.saveNamedQuery(s,e);const a=r.withResumeToken(Qe.EMPTY_BYTE_STRING,o);return i.Ji=i.Ji.insert(a.targetId,a),i.Bs.updateTargetData(s,a).next(()=>i.Bs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Bs.addMatchingKeys(s,t,r.targetId)).next(()=>i.qs.saveNamedQuery(s,e))})}function Hf(n,e){return`firestore_clients_${n}_${e}`}function Wf(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function bl(n,e){return`firestore_targets_${n}_${e}`}class Xo{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ar(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new Q(i.error.code,i.error.message))),o?new Xo(e,t,i.state,s):(Ue("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class es{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ar(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new Q(r.error.code,r.error.message))),s?new es(e,r.state,i):(Ue("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jo{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=wc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=qm(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Jo(e,s):(Ue("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Pc{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Pc(t.clientId,t.onlineState):(Ue("SharedClientState",`Failed to parse online state: ${e}`),null)}}class uu{constructor(){this.activeTargetIds=wc()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class El{constructor(e,t,r,i,s){this.window=e,this.ii=t,this.persistenceKey=r,this.wr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new Oe(de),this.started=!1,this.yr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.pr=Hf(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new uu),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const r of e){if(r===this.wr)continue;const i=this.getItem(Hf(this.persistenceKey,r));if(i){const s=Jo.ar(r,i);s&&(this.gr=this.gr.insert(s.clientId,s))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const r=this.br(t);r&&this.Vr(r)}for(const r of this.yr)this.mr(r);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,r){this.Dr(e,t,r),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(bl(this.persistenceKey,e));if(r){const i=es.ar(e,r);i&&(t=i.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(bl(this.persistenceKey,e))}updateQueryState(e,t,r){this.kr(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Cr(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return X("SharedClientState","READ",e,t),t}setItem(e,t){X("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){X("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(X("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void Ue("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const r=this.Or(t.key);return this.Fr(r,null)}{const r=this.Br(t.key,t.newValue);if(r)return this.Fr(r.clientId,r)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const r=this.Lr(t.key,t.newValue);if(r)return this.qr(r)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const r=this.Ur(t.key,t.newValue);if(r)return this.Kr(r)}}else if(t.key===this.vr){if(t.newValue!==null){const r=this.br(t.newValue);if(r)return this.Vr(r)}}else if(t.key===this.Ir){const r=function(i){let s=It.ct;if(i!=null)try{const o=JSON.parse(i);ue(typeof o=="number"),s=o}catch(o){Ue("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(t.newValue);r!==It.ct&&this.sequenceNumberHandler(r)}else if(t.key===this.Rr){const r=this.Gr(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Qr(i)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,r){const i=new Xo(this.currentUser,e,t,r),s=Wf(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hr())}Cr(e){const t=Wf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,r){const i=bl(this.persistenceKey,e),s=new es(e,t,r);this.setItem(i,s.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const r=this.Or(e);return Jo.ar(r,t)}Lr(e,t){const r=this.Er.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Xo.ar(new Je(s),i,t)}Ur(e,t){const r=this.Ar.exec(e),i=Number(r[1]);return es.ar(i,t)}br(e){return Pc.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);X("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const r=t?this.gr.insert(e,t):this.gr.remove(e),i=this.Sr(this.gr),s=this.Sr(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=r})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=wc();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Xg{constructor(){this.Hr=new uu,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,r){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new uu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class M1{Yr(e){}shutdown(){}}/**
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
 */class Qf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mo=null;function Il(){return mo===null?mo=268435456+Math.round(2147483648*Math.random()):mo++,"0x"+mo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class q1{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const ht="WebChannelConnection";class B1 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,r,i,s){const o=Il(),a=this.To(e,t);X("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(X("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw qt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,t,r,i,s,o){return this.Io(e,t,r,i,s)}Eo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+_i,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,t){const r=F1[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,r,i){const s=Il();return new Promise((o,a)=>{const l=new PI;l.setWithCredentials(!0),l.listenOnce(xI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vl.NO_ERROR:const h=l.getResponseJson();X(ht,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case vl.TIMEOUT:X(ht,`RPC '${e}' ${s} timed out`),a(new Q($.DEADLINE_EXCEEDED,"Request time out"));break;case vl.HTTP_ERROR:const c=l.getStatus();if(X(ht,`RPC '${e}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const w=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(v)>=0?v:$.UNKNOWN}(d.status);a(new Q(w,d.message))}else a(new Q($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q($.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{X(ht,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);X(ht,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",u,r,15)})}Ro(e,t,r){const i=Il(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=NI(),a=RI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new DI({})),this.Eo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=s.join("");X(ht,`Creating RPC '${e}' stream ${i}: ${h}`,l);const c=o.createWebChannel(h,l);let f=!1,d=!1;const w=new q1({ro:v=>{d?X(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(f||(X(ht,`Opening RPC '${e}' stream ${i} transport.`),c.open(),f=!0),X(ht,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},oo:()=>c.close()}),g=(v,m,y)=>{v.listen(m,_=>{try{y(_)}catch(p){setTimeout(()=>{throw p},0)}})};return g(c,ao.EventType.OPEN,()=>{d||X(ht,`RPC '${e}' stream ${i} transport opened.`)}),g(c,ao.EventType.CLOSE,()=>{d||(d=!0,X(ht,`RPC '${e}' stream ${i} transport closed`),w.wo())}),g(c,ao.EventType.ERROR,v=>{d||(d=!0,qt(ht,`RPC '${e}' stream ${i} transport errored:`,v),w.wo(new Q($.UNAVAILABLE,"The operation could not be completed")))}),g(c,ao.EventType.MESSAGE,v=>{var m;if(!d){const y=v.data[0];ue(!!y);const _=y,p=_.error||((m=_[0])===null||m===void 0?void 0:m.error);if(p){X(ht,`RPC '${e}' stream ${i} received error:`,p);const b=p.status;let k=function(A){const R=Ke[A];if(R!==void 0)return yg(R)}(b),S=p.message;k===void 0&&(k=$.INTERNAL,S="Unknown error status: "+b+" with message "+p.message),d=!0,w.wo(new Q(k,S)),c.close()}else X(ht,`RPC '${e}' stream ${i} received:`,y),w._o(y)}}),g(a,CI.STAT_EVENT,v=>{v.stat===nf.PROXY?X(ht,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===nf.NOPROXY&&X(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Jg(){return typeof window<"u"?window:null}function Ao(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n){return new HT(n,!0)}/**
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
 */class Lc{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Zg{constructor(e,t,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Lc(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ue(t.toString()),Ue("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===t&&this.Zo(r,i)},r=>{e(()=>{const i=new Q($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,t){const r=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class U1 extends Zg{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=YT(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?le.min():s.readTime?je(s.readTime):le.min()}(e);return this.listener.nu(t,r)}su(e){const t={};t.database=Ts(this.serializer),t.addTarget=function(i,s){let o;const a=s.target;if(o=$o(a)?{documents:Ag(i,a)}:{query:kg(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=bg(i,s.resumeToken);const l=ru(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(le.min())>0){o.readTime=oi(i,s.snapshotVersion.toTimestamp());const l=ru(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=JT(this.serializer,e);r&&(t.labels=r),this.Wo(t)}iu(e){const t={};t.database=Ts(this.serializer),t.removeTarget=e,this.Wo(t)}}class V1 extends Zg{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=XT(e.writeResults,e.commitTime),r=je(e.commitTime);return this.listener.cu(r,t)}return ue(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ts(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Ss(this.serializer,r))};this.Wo(t)}}/**
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
 */class j1 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q($.UNKNOWN,i.toString())})}vo(e,t,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q($.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class z1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Ue(t),this.mu=!1):X("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class $1{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Qn(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l.vu.add(4),await Ti(l),l.bu.set("Unknown"),l.vu.delete(4),await Xs(l)}(this))})}),this.bu=new z1(r,i)}}async function Xs(n){if(Qn(n))for(const e of n.Ru)await e(!0)}async function Ti(n){for(const e of n.Ru)await e(!1)}function Fa(n,e){const t=ne(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),qc(t)?Fc(t):Ai(t).Ko()&&Mc(t,e))}function As(n,e){const t=ne(n),r=Ai(t);t.Au.delete(e),r.Ko()&&ey(t,e),t.Au.size===0&&(r.Ko()?r.jo():Qn(t)&&t.bu.set("Unknown"))}function Mc(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ai(n).su(e)}function ey(n,e){n.Vu.qt(e),Ai(n).iu(e)}function Fc(n){n.Vu=new zT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),Ai(n).start(),n.bu.gu()}function qc(n){return Qn(n)&&!Ai(n).Uo()&&n.Au.size>0}function Qn(n){return ne(n).vu.size===0}function ty(n){n.Vu=void 0}async function K1(n){n.Au.forEach((e,t)=>{Mc(n,e)})}async function G1(n,e){ty(n),qc(n)?(n.bu.Iu(e),Fc(n)):n.bu.set("Unknown")}async function H1(n,e,t){if(n.bu.set("Online"),e instanceof _g&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(n,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(n,r)}else if(e instanceof So?n.Vu.Ht(e):e instanceof wg?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(le.min()))try{const r=await Gg(n.localStore);t.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),ey(i,a);const h=new ln(u.target,a,l,u.sequenceNumber);Mc(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Zo(n,r)}}async function Zo(n,e,t){if(!Hn(e))throw e;n.vu.add(1),await Ti(n),n.bu.set("Offline"),t||(t=()=>Gg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Xs(n)})}function ny(n,e){return e().catch(t=>Zo(n,t,e))}async function Si(n){const e=ne(n),t=Bn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;W1(e);)try{const i=await D1(e.localStore,r);if(i===null){e.Eu.length===0&&t.jo();break}r=i.batchId,Q1(e,i)}catch(i){await Zo(e,i)}ry(e)&&iy(e)}function W1(n){return Qn(n)&&n.Eu.length<10}function Q1(n,e){n.Eu.push(e);const t=Bn(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function ry(n){return Qn(n)&&!Bn(n).Uo()&&n.Eu.length>0}function iy(n){Bn(n).start()}async function Y1(n){Bn(n).hu()}async function X1(n){const e=Bn(n);for(const t of n.Eu)e.uu(t.mutations)}async function J1(n,e,t){const r=n.Eu.shift(),i=Ec.from(r,e,t);await ny(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Si(n)}async function Z1(n,e){e&&Bn(n).ou&&await async function(t,r){if(i=r.code,gg(i)&&i!==$.ABORTED){const s=t.Eu.shift();Bn(t).Qo(),await ny(t,()=>t.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Si(t)}var i}(n,e),ry(n)&&iy(n)}async function Yf(n,e){const t=ne(n);t.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.vu.add(3),await Ti(t),r&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Xs(t)}async function cu(n,e){const t=ne(n);e?(t.vu.delete(2),await Xs(t)):e||(t.vu.add(2),await Ti(t),t.bu.set("Unknown"))}function Ai(n){return n.Su||(n.Su=function(e,t,r){const i=ne(e);return i.fu(),new U1(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:K1.bind(null,n),ao:G1.bind(null,n),nu:H1.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),qc(n)?Fc(n):n.bu.set("Unknown")):(await n.Su.stop(),ty(n))})),n.Su}function Bn(n){return n.Du||(n.Du=function(e,t,r){const i=ne(e);return i.fu(),new V1(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{uo:Y1.bind(null,n),ao:Z1.bind(null,n),au:X1.bind(null,n),cu:J1.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await Si(n)):(await n.Du.stop(),n.Eu.length>0&&(X("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class Bc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new Bc(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(n,e){if(Ue("AsyncQueue",`${e}: ${n}`),Hn(n))return new Q($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Xr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||te.comparator(t.key,r.key):(t,r)=>te.comparator(t.key,r.key),this.keyedMap=zi(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xf{constructor(){this.Cu=new Oe(te.comparator)}track(e){const t=e.doc.key,r=this.Cu.get(t);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(t):e.type===1&&r.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):oe():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ui{constructor(e,t,r,i,s,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ui(e,t,Xr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ks(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class eS{constructor(){this.Nu=void 0,this.listeners=[]}}class tS{constructor(){this.queries=new Wn(e=>tg(e),Ks),this.onlineState="Unknown",this.ku=new Set}}async function Uc(n,e){const t=ne(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new eS),i)try{s.Nu=await t.onListen(r)}catch(o){const a=ki(o,`Initialization of query '${nu(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,s),s.listeners.push(e),e.Mu(t.onlineState),s.Nu&&e.$u(s.Nu)&&jc(t)}async function Vc(n,e){const t=ne(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function nS(n,e){const t=ne(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&jc(t)}function rS(n,e,t){const r=ne(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function jc(n){n.ku.forEach(e=>{e.next()})}class zc{constructor(e,t,r){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.serializer=e}rr(e){return Xt(this.serializer,e)}ur(e){return e.metadata.exists?Sg(this.serializer,e.document,!1):Re.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return je(e)}}class sS{constructor(e,t,r){this.ju=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=sy(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const r=Ie.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,r=new Jf(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.rr(i.metadata.name);for(const o of i.metadata.queries){const a=(t.get(o)||me()).add(s);t.set(o,a)}}return t}async complete(){const e=await P1(this.localStore,new Jf(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const r of this.queries)await L1(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function sy(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class oy{constructor(e){this.key=e}}class ay{constructor(e){this.key=e}}class ly{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=me(),this.mutatedKeys=me(),this.tc=rg(e),this.ec=new Xr(this.tc)}get nc(){return this.Yu}sc(e,t){const r=t?t.ic:new Xf,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,c)=>{const f=i.get(h),d=Gs(this.query,c)?c:null,w=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;f&&d?f.data.isEqual(d.data)?w!==g&&(r.track({type:3,doc:d}),v=!0):this.rc(f,d)||(r.track({type:2,doc:d}),v=!0,(l&&this.tc(d,l)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),v=!0):f&&!d&&(r.track({type:1,doc:f}),v=!0,(l||u)&&(a=!0)),v&&(d?(o=o.add(d),s=g?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,h)=>function(c,f){const d=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return d(c)-d(f)}(u.type,h.type)||this.tc(u.doc,h.doc)),this.oc(r);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ui(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Xf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=me(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const t=[];return e.forEach(r=>{this.Zu.has(r)||t.push(new ay(r))}),this.Zu.forEach(r=>{e.has(r)||t.push(new oy(r))}),t}hc(e){this.Yu=e.ir,this.Zu=me();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return ui.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class oS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aS{constructor(e){this.key=e,this.fc=!1}}class lS{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Wn(a=>tg(a),Ks),this._c=new Map,this.mc=new Set,this.gc=new Oe(te.comparator),this.yc=new Map,this.Ic=new Rc,this.Tc={},this.Ec=new Map,this.Ac=Sr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function uS(n,e){const t=Wc(n);let r,i;const s=t.wc.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await ai(t.localStore,At(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $c(t,e,r,a==="current",o.resumeToken),t.isPrimaryClient&&Fa(t.remoteStore,o)}return i}async function $c(n,e,t,r,i){n.Rc=(c,f,d)=>async function(w,g,v,m){let y=g.view.sc(v);y.zi&&(y=await Yo(w.localStore,g.query,!1).then(({documents:b})=>g.view.sc(b,y)));const _=m&&m.targetChanges.get(g.targetId),p=g.view.applyChanges(y,w.isPrimaryClient,_);return hu(w,g.targetId,p.cc),p.snapshot}(n,c,f,d);const s=await Yo(n.localStore,e,!0),o=new ly(e,s.ir),a=o.sc(s.documents),l=Qs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);hu(n,t,u.cc);const h=new oS(e,t,o);return n.wc.set(e,h),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),u.snapshot}async function cS(n,e){const t=ne(n),r=t.wc.get(e),i=t._c.get(r.targetId);if(i.length>1)return t._c.set(r.targetId,i.filter(s=>!Ks(s,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await li(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),As(t.remoteStore,r.targetId),ci(t,r.targetId)}).catch(Gn)):(ci(t,r.targetId),await li(t.localStore,r.targetId,!0))}async function hS(n,e,t){const r=Qc(n);try{const i=await function(s,o){const a=ne(s),l=Pe.now(),u=o.reduce((f,d)=>f.add(d.key),me());let h,c;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=St(),w=me();return a.Zi.getEntries(f,u).next(g=>{d=g,d.forEach((v,m)=>{m.isValidDocument()||(w=w.add(v))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(g=>{h=g;const v=[];for(const m of o){const y=UT(m,h.get(m.key).overlayedDocument);y!=null&&v.push(new yn(m.key,y,Gm(y.value.mapValue),De.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,v,o)}).next(g=>{c=g;const v=g.applyToLocalDocumentSet(h,w);return a.documentOverlayCache.saveOverlays(f,g.batchId,v)})}).then(()=>({batchId:c.batchId,changes:sg(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Oe(de)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,t),await vn(r,i.changes),await Si(r.remoteStore)}catch(i){const s=ki(i,"Failed to persist write");t.reject(s)}}async function uy(n,e){const t=ne(n);try{const r=await C1(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.yc.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ue(o.fc):i.removedDocuments.size>0&&(ue(o.fc),o.fc=!1))}),await vn(t,r,e)}catch(r){await Gn(r)}}function Zf(n,e,t){const r=ne(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ne(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const c of h.listeners)c.Mu(o)&&(l=!0)}),l&&jc(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fS(n,e,t){const r=ne(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Oe(te.comparator);o=o.insert(s,Re.newNoDocument(s,le.min()));const a=me().add(s),l=new Ws(le.min(),new Map,new Oe(de),o,a);await uy(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Hc(r)}else await li(r.localStore,e,!1).then(()=>ci(r,e,t)).catch(Gn)}async function dS(n,e){const t=ne(n),r=e.batch.batchId;try{const i=await x1(t.localStore,e);Gc(t,r,null),Kc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vn(t,i)}catch(i){await Gn(i)}}async function pS(n,e,t){const r=ne(n);try{const i=await function(s,o){const a=ne(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(ue(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Gc(r,e,t),Kc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vn(r,i)}catch(i){await Gn(i)}}async function mS(n,e){const t=ne(n);Qn(t.remoteStore)||X("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=ne(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const i=t.Ec.get(r)||[];i.push(e),t.Ec.set(r,i)}catch(r){const i=ki(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Kc(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function Gc(n,e,t){const r=ne(n);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function ci(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n._c.get(e))n.wc.delete(r),t&&n.dc.Pc(r,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(r=>{n.Ic.containsKey(r)||cy(n,r)})}function cy(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(As(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),Hc(n))}function hu(n,e,t){for(const r of t)r instanceof oy?(n.Ic.addReference(r.key,e),gS(n,r)):r instanceof ay?(X("SyncEngine","Document no longer in limbo: "+r.key),n.Ic.removeReference(r.key,e),n.Ic.containsKey(r.key)||cy(n,r.key)):oe()}function gS(n,e){const t=e.key,r=t.path.canonicalString();n.gc.get(t)||n.mc.has(r)||(X("SyncEngine","New document in limbo: "+t),n.mc.add(r),Hc(n))}function Hc(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new te(Ie.fromString(e)),r=n.Ac.next();n.yc.set(r,new aS(t)),n.gc=n.gc.insert(t,r),Fa(n.remoteStore,new ln(At(bi(t.path)),r,"TargetPurposeLimboResolution",It.ct))}}async function vn(n,e,t){const r=ne(n),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Dc.Li(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=ne(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>z.forEach(l,c=>z.forEach(c.Fi,f=>u.persistence.referenceDelegate.addReference(h,c.targetId,f)).next(()=>z.forEach(c.Bi,f=>u.persistence.referenceDelegate.removeReference(h,c.targetId,f)))))}catch(h){if(!Hn(h))throw h;X("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const c=h.targetId;if(!h.fromCache){const f=u.Ji.get(c),d=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(c,w)}}}(r.localStore,s))}async function yS(n,e){const t=ne(n);if(!t.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Kg(t.localStore,e);t.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new Q($.CANCELLED,s))})}),i.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vn(t,r.er)}}function vS(n,e){const t=ne(n),r=t.yc.get(e);if(r&&r.fc)return me().add(r.key);{let i=me();const s=t._c.get(e);if(!s)return i;for(const o of s){const a=t.wc.get(o);i=i.unionWith(a.view.nc)}return i}}async function wS(n,e){const t=ne(n),r=await Yo(t.localStore,e.query,!0),i=e.view.hc(r);return t.isPrimaryClient&&hu(t,e.targetId,i.cc),i}async function _S(n,e){const t=ne(n);return Qg(t.localStore,e).then(r=>vn(t,r))}async function bS(n,e,t,r){const i=ne(n),s=await function(o,a){const l=ne(o),u=ne(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",h=>u.Sn(h,a).next(c=>c?l.localDocuments.getDocuments(h,c):z.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await Si(i.remoteStore):t==="acknowledged"||t==="rejected"?(Gc(i,e,r||null),Kc(i,e),function(o,a){ne(ne(o).mutationQueue).Cn(a)}(i.localStore,e)):oe(),await vn(i,s)):X("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ES(n,e){const t=ne(n);if(Wc(t),Qc(t),e===!0&&t.vc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await ed(t,r.toArray());t.vc=!0,await cu(t.remoteStore,!0);for(const s of i)Fa(t.remoteStore,s)}else if(e===!1&&t.vc!==!1){const r=[];let i=Promise.resolve();t._c.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ci(t,o),li(t.localStore,o,!0))),As(t.remoteStore,o)}),await i,await ed(t,r),function(s){const o=ne(s);o.yc.forEach((a,l)=>{As(o.remoteStore,l)}),o.Ic.Ts(),o.yc=new Map,o.gc=new Oe(te.comparator)}(t),t.vc=!1,await cu(t.remoteStore,!1)}}async function ed(n,e,t){const r=ne(n),i=[],s=[];for(const o of e){let a;const l=r._c.get(o);if(l&&l.length!==0){a=await ai(r.localStore,At(l[0]));for(const u of l){const h=r.wc.get(u),c=await wS(r,h);c.snapshot&&s.push(c.snapshot)}}else{const u=await Wg(r.localStore,o);a=await ai(r.localStore,u),await $c(r,hy(u),o,!1,a.resumeToken)}i.push(a)}return r.dc.nu(s),i}function hy(n){return eg(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function IS(n){const e=ne(n);return ne(ne(e.localStore).persistence).$i()}async function TS(n,e,t,r){const i=ne(n);if(i.vc)return void X("SyncEngine","Ignoring unexpected query state notification.");const s=i._c.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await Qg(i.localStore,ng(s[0])),a=Ws.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Qe.EMPTY_BYTE_STRING);await vn(i,o,a);break}case"rejected":await li(i.localStore,e,!0),ci(i,e,r);break;default:oe()}}async function SS(n,e,t){const r=Wc(n);if(r.vc){for(const i of e){if(r._c.has(i)){X("SyncEngine","Adding an already active target "+i);continue}const s=await Wg(r.localStore,i),o=await ai(r.localStore,s);await $c(r,hy(s),o.targetId,!1,o.resumeToken),Fa(r.remoteStore,o)}for(const i of t)r._c.has(i)&&await li(r.localStore,i,!1).then(()=>{As(r.remoteStore,i),ci(r,i)}).catch(Gn)}}function Wc(n){const e=ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fS.bind(null,e),e.dc.nu=nS.bind(null,e.eventManager),e.dc.Pc=rS.bind(null,e.eventManager),e}function Qc(n){const e=ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pS.bind(null,e),e}function AS(n,e,t){const r=ne(n);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(c,f){const d=ne(c),w=je(f.createTime);return d.persistence.runTransaction("hasNewerBundle","readonly",g=>d.qs.getBundleMetadata(g,f.id)).then(g=>!!g&&g.createTime.compareTo(w)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(c){return{taskState:"Success",documentsLoaded:c.totalDocuments,bytesLoaded:c.totalBytes,totalDocuments:c.totalDocuments,totalBytes:c.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(sy(a));const l=new sS(a,i.localStore,s.serializer);let u=await s.bc();for(;u;){const c=await l.zu(u);c&&o._updateProgress(c),u=await s.bc()}const h=await l.complete();return await vn(i,h.Ju,void 0),await function(c,f){const d=ne(c);return d.persistence.runTransaction("Save bundle","readwrite",w=>d.qs.saveBundleMetadata(w,f))}(i.localStore,a),o._completeWith(h.progress),Promise.resolve(h.Hu)}catch(a){return qt("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class fu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ys(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return $g(this.persistence,new zg,e.initialUser,this.serializer)}createPersistence(e){return new jg(Ma.zs,this.serializer)}createSharedClientState(e){return new Xg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fy extends fu{constructor(e,t,r){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await Qc(this.Vc.syncEngine),await Si(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return $g(this.persistence,new zg,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new m1(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new JI(t,this.persistence);return new XI(e.asyncQueue,r)}createPersistence(e){const t=Cc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new xc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Jg(),Ao(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Xg}}class kS extends fy{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof El&&(this.sharedClientState.syncEngine={jr:bS.bind(null,t),zr:TS.bind(null,t),Wr:SS.bind(null,t),$i:IS.bind(null,t),Qr:_S.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async r=>{await ES(this.Vc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=Jg();if(!El.D(t))throw new Q($.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Cc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new El(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Yc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yS.bind(null,this.syncEngine),await cu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tS}createDatastore(e){const t=Ys(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new B1(i));var i;return function(s,o,a,l){return new j1(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Zf(this.syncEngine,a,0),o=Qf.D()?new Qf:new M1,new $1(t,r,i,s,o);var t,r,i,s,o}createSyncEngine(e,t){return function(r,i,s,o,a,l,u){const h=new lS(r,i,s,o,a,l);return u&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ne(e);X("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Ti(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qa{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Ue("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new Ze,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(r=>{r&&r.Qu()?this.metadata.resolve(r.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Gu)}`))},r=>this.metadata.reject(r))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),r=Number(t);isNaN(r)&&this.Mc(`length string (${t}) is not valid number`);const i=await this.$c(r);return new iS(JSON.parse(i),e.length+r)}Oc(){return this.buffer.findIndex(e=>e===123)}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class NS{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Q($.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,i){const s=ne(r),o=Ts(s.serializer)+"/documents",a={documents:i.map(c=>Is(s.serializer,c))},l=await s.vo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(c=>{const f=QT(s.serializer,c);u.set(f.key.toString(),f)});const h=[];return i.forEach(c=>{const f=u.get(c.toString());ue(!!f),h.push(f)}),h}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ii(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=te.fromPath(r);this.mutations.push(new _c(i,this.precondition(i)))}),await async function(t,r){const i=ne(t),s=Ts(i.serializer)+"/documents",o={writes:r.map(a=>Ss(i.serializer,a))};await i.Io("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw oe();t=le.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new Q($.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(le.min())?De.exists(!1):De.updateTime(t):De.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(le.min()))throw new Q($.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return De.updateTime(t)}return De.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class RS{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Bc=r.maxAttempts,this.qo=new Lc(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new NS(this.datastore),t=this.qc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Uc(i)}))}).catch(r=>{this.Uc(r)})})}qc(e){try{const t=this.updateFunction(e);return!zs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gg(t)}return!1}}/**
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
 */class xS{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=xm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ki(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ko(n,e){n.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function du(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xc(n);X("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>Yf(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Yf(e.remoteStore,s)),n._onlineComponents=e}function dy(n){return n.name==="FirebaseError"?n.code===$.FAILED_PRECONDITION||n.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Xc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await ko(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!dy(t))throw t;qt("Error using user provided cache. Falling back to memory cache: "+t),await ko(n,new fu)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await ko(n,new fu);return n._offlineComponents}async function Ba(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await du(n,n._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await du(n,new Yc))),n._onlineComponents}function py(n){return Xc(n).then(e=>e.persistence)}function Jc(n){return Xc(n).then(e=>e.localStore)}function my(n){return Ba(n).then(e=>e.remoteStore)}function Zc(n){return Ba(n).then(e=>e.syncEngine)}function CS(n){return Ba(n).then(e=>e.datastore)}async function hi(n){const e=await Ba(n),t=e.eventManager;return t.onListen=uS.bind(null,e.syncEngine),t.onUnlisten=cS.bind(null,e.syncEngine),t}function DS(n){return n.asyncQueue.enqueue(async()=>{const e=await py(n),t=await my(n);return e.setNetworkEnabled(!0),function(r){const i=ne(r);return i.vu.delete(0),Xs(i)}(t)})}function PS(n){return n.asyncQueue.enqueue(async()=>{const e=await py(n),t=await my(n);return e.setNetworkEnabled(!1),async function(r){const i=ne(r);i.vu.add(0),await Ti(i),i.bu.set("Offline")}(t)})}function LS(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,l){const u=ne(a);return u.persistence.runTransaction("read document","readonly",h=>u.localDocuments.getDocument(h,l))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new Q($.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=ki(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Jc(n),e,t)),t.promise}function gy(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new qa({next:c=>{s.enqueueAndForget(()=>Vc(i,h));const f=c.docs.has(o);!f&&c.fromCache?l.reject(new Q($.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&c.fromCache&&a&&a.source==="server"?l.reject(new Q($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(c)},error:c=>l.reject(c)}),h=new zc(bi(o.path),u,{includeMetadataChanges:!0,Ku:!0});return Uc(i,h)}(await hi(n),n.asyncQueue,e,t,r)),r.promise}function MS(n,e){const t=new Ze;return n.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Yo(r,i,!0),a=new ly(i,o.ir),l=a.sc(o.documents),u=a.applyChanges(l,!1);s.resolve(u.snapshot)}catch(o){const a=ki(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Jc(n),e,t)),t.promise}function yy(n,e,t={}){const r=new Ze;return n.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new qa({next:c=>{s.enqueueAndForget(()=>Vc(i,h)),c.fromCache&&a.source==="server"?l.reject(new Q($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(c)},error:c=>l.reject(c)}),h=new zc(o,u,{includeMetadataChanges:!0,Ku:!0});return Uc(i,h)}(await hi(n),n.asyncQueue,e,t,r)),r.promise}function FS(n,e){const t=new qa(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,i){ne(r).ku.add(i),i.next()}(await hi(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(r,i){ne(r).ku.delete(i)}(await hi(n),t))}}function qS(n,e,t,r){const i=function(s,o){let a;return a=typeof s=="string"?vg().encode(s):s,function(l,u){return new OS(l,u)}(function(l,u){if(l instanceof Uint8Array)return td(l,u);if(l instanceof ArrayBuffer)return td(new Uint8Array(l),u);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Ys(e));n.asyncQueue.enqueueAndForget(async()=>{AS(await Zc(n),i,r)})}function BS(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const i=ne(t);return i.persistence.runTransaction("Get named query","readonly",s=>i.qs.getNamedQuery(s,r))}(await Jc(n),e))}/**
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
 */function vy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=new Map;/**
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
 */function eh(n,e,t){if(!t)throw new Q($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wy(n,e,t,r){if(e===!0&&r===!0)throw new Q($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rd(n){if(!te.isDocumentKey(n))throw new Q($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function id(n){if(te.isDocumentKey(n))throw new Q($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ua(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe()}function Te(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ua(n);throw new Q($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function _y(n,e){if(e<=0)throw new Q($.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,r}}class Js{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Q($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Q($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sd(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new BI;switch(t.type){case"firstParty":return new zI(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Q($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=nd.get(e);t&&(X("ComponentProvider","Removing Datastore"),nd.delete(e),t.terminate())}(this),Promise.resolve()}}function US(n,e,t,r={}){var i;const s=(n=Te(n,Js))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Je.MOCK_USER;else{a=av(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Q($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(u)}n._authCredentials=new UI(new Rm(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}}class ct{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ct(this.firestore,e,this._query)}}class Jt extends ct{constructor(e,t,r){super(e,t,bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new te(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function by(n,e,...t){if(n=ce(n),eh("collection","path",e),n instanceof Js){const r=Ie.fromString(e,...t);return id(r),new Jt(n,null,r)}{if(!(n instanceof Ce||n instanceof Jt))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return id(r),new Jt(n.firestore,null,r)}}function VS(n,e){if(n=Te(n,Js),eh("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Q($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ct(n,null,function(t){return new gn(Ie.emptyPath(),t)}(e))}function ea(n,e,...t){if(n=ce(n),arguments.length===1&&(e=xm.A()),eh("doc","path",e),n instanceof Js){const r=Ie.fromString(e,...t);return rd(r),new Ce(n,null,new te(r))}{if(!(n instanceof Ce||n instanceof Jt))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ie.fromString(e,...t));return rd(r),new Ce(n.firestore,n instanceof Jt?n.converter:null,new te(r))}}function Ey(n,e){return n=ce(n),e=ce(e),(n instanceof Ce||n instanceof Jt)&&(e instanceof Ce||e instanceof Jt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Iy(n,e){return n=ce(n),e=ce(e),n instanceof ct&&e instanceof ct&&n.firestore===e.firestore&&Ks(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Lc(this,"async_queue_retry"),this.Xc=()=>{const t=Ao();t&&X("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ao();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new Ze;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Hn(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Ue("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=t,t}enqueueAfterDelay(e,t,r){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=Bc.createAndSchedule(this,e,t,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&oe()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function pu(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of t)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class zS{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ze,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=-1;class Be extends Js{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new jS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ty(this),this._firestoreClient.terminate()}}function rt(n){return n._firestoreClient||Ty(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ty(n){var e,t,r;const i=n._freezeSettings(),s=function(o,a,l,u){return new wT(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,vy(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new xS(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}function KS(n,e){Ay(n=Te(n,Be));const t=rt(n);if(t._uninitializedComponentsProvider)throw new Q($.FAILED_PRECONDITION,"SDK cache is already specified.");qt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new Yc;return Sy(t,i,new fy(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function GS(n){Ay(n=Te(n,Be));const e=rt(n);if(e._uninitializedComponentsProvider)throw new Q($.FAILED_PRECONDITION,"SDK cache is already specified.");qt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Yc;return Sy(e,r,new kS(r,t.cacheSizeBytes))}function Sy(n,e,t){const r=new Ze;return n.asyncQueue.enqueue(async()=>{try{await ko(n,t),await du(n,e),r.resolve()}catch(i){const s=i;if(!dy(s))throw s;qt("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function HS(n){if(n._initialized&&!n._terminated)throw new Q($.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ze;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Lt.D())return Promise.resolve();const r=t+"main";await Lt.delete(r)}(Cc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function WS(n){return function(e){const t=new Ze;return e.asyncQueue.enqueueAndForget(async()=>mS(await Zc(e),t)),t.promise}(rt(n=Te(n,Be)))}function QS(n){return DS(rt(n=Te(n,Be)))}function YS(n){return PS(rt(n=Te(n,Be)))}function XS(n,e){const t=rt(n=Te(n,Be)),r=new zS;return qS(t,n._databaseId,e,r),r}function JS(n,e){return BS(rt(n=Te(n,Be)),e).then(t=>t?new ct(n,null,t.query):null)}function Ay(n){if(n._initialized||n._terminated)throw new Q($.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(Qe.fromBase64String(e))}catch(t){throw new Q($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nn(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this._methodName=e}}/**
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
 */class Va{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const ZS=/^__.*__$/;class eA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ei(e,this.data,t,this.fieldTransforms)}}class ky{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new yn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Oy(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class ja{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ja(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ta(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Oy(this.ca)&&ZS.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class tA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ys(e)}ya(e,t,r,i=!1){return new ja({ca:e,methodName:t,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cr(n){const e=n._freezeSettings(),t=Ys(n._databaseId);return new tA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function za(n,e,t,r,i,s={}){const o=n.ya(s.merge||s.mergeFields?2:0,e,t,i);ih("Data must be an object, but it was:",o,r);const a=xy(r,o);let l,u;if(s.merge)l=new Tt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const f=mu(e,c,t);if(!o.contains(f))throw new Q($.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Dy(h,f)||h.push(f)}l=new Tt(h),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new eA(new ot(a),l,u)}class Zs extends xr{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zs}}function Ny(n,e,t){return new ja({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class th extends xr{_toFieldTransform(e){return new Hs(e.path,new ii)}isEqual(e){return e instanceof th}}class nA extends xr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Ny(this,e,!0),r=this.pa.map(s=>Dr(s,t)),i=new br(r);return new Hs(e.path,i)}isEqual(e){return this===e}}class rA extends xr{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Ny(this,e,!0),r=this.pa.map(s=>Dr(s,t)),i=new Er(r);return new Hs(e.path,i)}isEqual(e){return this===e}}class iA extends xr{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new si(e.serializer,ug(e.serializer,this.Ia));return new Hs(e.path,t)}isEqual(e){return this===e}}function nh(n,e,t,r){const i=n.ya(1,e,t);ih("Data must be an object, but it was:",i,r);const s=[],o=ot.empty();Rr(r,(l,u)=>{const h=sh(e,l,t);u=ce(u);const c=i.da(h);if(u instanceof Zs)s.push(h);else{const f=Dr(u,c);f!=null&&(s.push(h),o.set(h,f))}});const a=new Tt(s);return new ky(o,a,i.fieldTransforms)}function rh(n,e,t,r,i,s){const o=n.ya(1,e,t),a=[mu(e,r,t)],l=[i];if(s.length%2!=0)throw new Q($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(mu(e,s[f])),l.push(s[f+1]);const u=[],h=ot.empty();for(let f=a.length-1;f>=0;--f)if(!Dy(u,a[f])){const d=a[f];let w=l[f];w=ce(w);const g=o.da(d);if(w instanceof Zs)u.push(d);else{const v=Dr(w,g);v!=null&&(u.push(d),h.set(d,v))}}const c=new Tt(u);return new ky(h,c,o.fieldTransforms)}function Ry(n,e,t,r=!1){return Dr(t,n.ya(r?4:3,e))}function Dr(n,e){if(Cy(n=ce(n)))return ih("Unsupported field value:",e,n),xy(n,e);if(n instanceof xr)return function(t,r){if(!Oy(r.ca))throw r._a(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,r){const i=[];let s=0;for(const o of t){let a=Dr(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(n,e)}return function(t,r){if((t=ce(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return ug(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Pe.fromDate(t);return{timestampValue:oi(r.serializer,i)}}if(t instanceof Pe){const i=new Pe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:oi(r.serializer,i)}}if(t instanceof Va)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof nn)return{bytesValue:bg(r.serializer,t._byteString)};if(t instanceof Ce){const i=r.databaseId,s=t.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ac(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r._a(`Unsupported field value: ${Ua(t)}`)}(n,e)}function xy(n,e){const t={};return zm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(n,(r,i)=>{const s=Dr(i,e.ha(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Cy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pe||n instanceof Va||n instanceof nn||n instanceof Ce||n instanceof xr)}function ih(n,e,t){if(!Cy(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ua(t);throw r==="an object"?e._a(n+" a custom object"):e._a(n+" "+r)}}function mu(n,e,t){if((e=ce(e))instanceof Un)return e._internalPath;if(typeof e=="string")return sh(n,e);throw ta("Field path arguments must be of type string or ",n,!1,void 0,t)}const sA=new RegExp("[~\\*/\\[\\]]");function sh(n,e,t){if(e.search(sA)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Un(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ta(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Q($.INVALID_ARGUMENT,a+n+l)}function Dy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field($a("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oA extends ks{data(){return super.data()}}function $a(n,e){return typeof e=="string"?sh(n,e):e instanceof Un?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class oh{}class eo extends oh{}function In(n,e,...t){let r=[];e instanceof oh&&r.push(e),r=r.concat(t),function(i){const s=i.filter(a=>a instanceof ah).length,o=i.filter(a=>a instanceof Ka).length;if(s>1||s>0&&o>0)throw new Q($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Ka extends eo{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ka(e,t,r)}_apply(e){const t=this._parse(e);return My(e._query,t),new ct(e.firestore,e.converter,tu(e._query,t))}_parse(e){const t=Cr(e.firestore);return function(i,s,o,a,l,u,h){let c;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new Q($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ad(h,u);const f=[];for(const d of h)f.push(od(a,i,d));c={arrayValue:{values:f}}}else c=od(a,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ad(h,u),c=Ry(o,s,h,u==="in"||u==="not-in");return we.create(l,u,c)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aA(n,e,t){const r=e,i=$a("where",n);return Ka._create(i,r,t)}class ah extends oh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ah(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)My(s,a),s=tu(s,a)}(e._query,t),new ct(e.firestore,e.converter,tu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lh extends eo{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new lh(e,t)}_apply(e){const t=function(r,i,s){if(r.startAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Yr(i,s);return function(a,l){if(yc(a)===null){const u=xa(a);u!==null&&Fy(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new ct(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new gn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function lA(n,e="asc"){const t=e,r=$a("orderBy",n);return lh._create(r,t)}class Ga extends eo{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ga(e,t,r)}_apply(e){return new ct(e.firestore,e.converter,Go(e._query,this._limit,this._limitType))}}function uA(n){return _y("limit",n),Ga._create("limit",n,"F")}function cA(n){return _y("limitToLast",n),Ga._create("limitToLast",n,"L")}class Ha extends eo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Ha(e,t,r)}_apply(e){const t=Ly(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(r,i){return new gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,t))}}function hA(...n){return Ha._create("startAt",n,!0)}function fA(...n){return Ha._create("startAfter",n,!1)}class Wa extends eo{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Wa(e,t,r)}_apply(e){const t=Ly(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(r,i){return new gn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,t))}}function dA(...n){return Wa._create("endBefore",n,!1)}function pA(...n){return Wa._create("endAt",n,!0)}function Ly(n,e,t,r){if(t[0]=ce(t[0]),t[0]instanceof ks)return function(i,s,o,a,l){if(!a)throw new Q($.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const h of dr(i))if(h.field.isKeyField())u.push(wr(s,a.key));else{const c=a.data.field(h.field);if(Ra(c))throw new Q($.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(c===null){const f=h.field.canonicalString();throw new Q($.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}u.push(c)}return new qn(u,l)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=Cr(n.firestore);return function(s,o,a,l,u,h){const c=s.explicitOrderBy;if(u.length>c.length)throw new Q($.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let d=0;d<u.length;d++){const w=u[d];if(c[d].field.isKeyField()){if(typeof w!="string")throw new Q($.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof w}`);if(!vc(s)&&w.indexOf("/")!==-1)throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${w}' contains a slash.`);const g=s.path.child(Ie.fromString(w));if(!te.isDocumentKey(g))throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${g}' is not because it contains an odd number of segments.`);const v=new te(g);f.push(wr(o,v))}else{const g=Ry(a,l,w);f.push(g)}}return new qn(f,h)}(n._query,n.firestore._databaseId,i,e,t,r)}}function od(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new Q($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vc(e)&&t.indexOf("/")!==-1)throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ie.fromString(t));if(!te.isDocumentKey(r))throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wr(n,new te(r))}if(t instanceof Ce)return wr(n,t._key);throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ua(t)}.`)}function ad(n,e){if(!Array.isArray(n)||n.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function My(n,e){if(e.isInequality()){const r=xa(n),i=e.field;if(r!==null&&!r.isEqual(i))throw new Q($.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=yc(n);s!==null&&Fy(n,i,s)}const t=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Fy(n,e,t){if(!t.isEqual(e))throw new Q($.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class uh{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw oe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Rr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Va(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=mc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(_s(e));default:return null}}convertTimestamp(e){const t=Pn(e);return new Pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ie.fromString(e);ue(xg(r));const i=new Mn(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(t)||Ue(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class mA extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dn extends ks{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field($a("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ts extends dn{data(e={}){return super.data(e)}}class Vn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ar(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ts(this._firestore,this._userDataWriter,r.key,r,new ar(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ts(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ar(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ts(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ar(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:gA(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}function qy(n,e){return n instanceof dn&&e instanceof dn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Vn&&e instanceof Vn&&n._firestore===e._firestore&&Iy(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(n){n=Te(n,Ce);const e=Te(n.firestore,Be);return gy(rt(e),n._key).then(t=>ch(e,n,t))}class Pr extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}function vA(n){n=Te(n,Ce);const e=Te(n.firestore,Be),t=rt(e),r=new Pr(e);return LS(t,n._key).then(i=>new dn(e,r,n._key,i,new ar(i!==null&&i.hasLocalMutations,!0),n.converter))}function wA(n){n=Te(n,Ce);const e=Te(n.firestore,Be);return gy(rt(e),n._key,{source:"server"}).then(t=>ch(e,n,t))}function _A(n){n=Te(n,ct);const e=Te(n.firestore,Be),t=rt(e),r=new Pr(e);return Py(n._query),yy(t,n._query).then(i=>new Vn(e,r,n,i))}function bA(n){n=Te(n,ct);const e=Te(n.firestore,Be),t=rt(e),r=new Pr(e);return MS(t,n._query).then(i=>new Vn(e,r,n,i))}function EA(n){n=Te(n,ct);const e=Te(n.firestore,Be),t=rt(e),r=new Pr(e);return yy(t,n._query,{source:"server"}).then(i=>new Vn(e,r,n,i))}function ld(n,e,t){n=Te(n,Ce);const r=Te(n.firestore,Be),i=Qa(n.converter,e,t);return to(r,[za(Cr(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,De.none())])}function ud(n,e,t,...r){n=Te(n,Ce);const i=Te(n.firestore,Be),s=Cr(i);let o;return o=typeof(e=ce(e))=="string"||e instanceof Un?rh(s,"updateDoc",n._key,e,t,r):nh(s,"updateDoc",n._key,e),to(i,[o.toMutation(n._key,De.exists(!0))])}function IA(n){return to(Te(n.firestore,Be),[new Ii(n._key,De.none())])}function TA(n,e){const t=Te(n.firestore,Be),r=ea(n),i=Qa(n.converter,e);return to(t,[za(Cr(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function By(n,...e){var t,r,i;n=ce(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||pu(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(pu(e[o])){const c=e[o];e[o]=(t=c.next)===null||t===void 0?void 0:t.bind(c),e[o+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[o+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let l,u,h;if(n instanceof Ce)u=Te(n.firestore,Be),h=bi(n._key.path),l={next:c=>{e[o]&&e[o](ch(u,n,c))},error:e[o+1],complete:e[o+2]};else{const c=Te(n,ct);u=Te(c.firestore,Be),h=c._query;const f=new Pr(u);l={next:d=>{e[o]&&e[o](new Vn(u,f,c,d))},error:e[o+1],complete:e[o+2]},Py(n._query)}return function(c,f,d,w){const g=new qa(w),v=new zc(f,g,d);return c.asyncQueue.enqueueAndForget(async()=>Uc(await hi(c),v)),()=>{g.Dc(),c.asyncQueue.enqueueAndForget(async()=>Vc(await hi(c),v))}}(rt(u),h,a,l)}function SA(n,e){return FS(rt(n=Te(n,Be)),pu(e)?e:{next:e})}function to(n,e){return function(t,r){const i=new Ze;return t.asyncQueue.enqueueAndForget(async()=>hS(await Zc(t),r,i)),i.promise}(rt(n),e)}function ch(n,e,t){const r=t.docs.get(e._key),i=new Pr(n);return new dn(n,i,e._key,r,new ar(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const AA={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Cr(e)}set(e,t,r){this._verifyNotCommitted();const i=Sn(e,this._firestore),s=Qa(i.converter,t,r),o=za(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,De.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Sn(e,this._firestore);let o;return o=typeof(t=ce(t))=="string"||t instanceof Un?rh(this._dataReader,"WriteBatch.update",s._key,t,r,i):nh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Sn(e,this._firestore);return this._mutations=this._mutations.concat(new Ii(t._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Q($.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Sn(n,e){if((n=ce(n)).firestore!==e)throw new Q($.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OA extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Cr(e)}get(e){const t=Sn(e,this._firestore),r=new mA(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return oe();const s=i[0];if(s.isFoundDocument())return new ks(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new ks(this._firestore,r,t._key,null,t.converter);throw oe()})}set(e,t,r){const i=Sn(e,this._firestore),s=Qa(i.converter,t,r),o=za(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Sn(e,this._firestore);let o;return o=typeof(t=ce(t))=="string"||t instanceof Un?rh(this._dataReader,"Transaction.update",s._key,t,r,i):nh(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Sn(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Sn(e,this._firestore),r=new Pr(this._firestore);return super.get(e).then(i=>new dn(this._firestore,r,t._key,i._document,new ar(!1,!1),t.converter))}}function NA(n,e,t){n=Te(n,Be);const r=Object.assign(Object.assign({},AA),t);return function(i){if(i.maxAttempts<1)throw new Q($.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Ze;return i.asyncQueue.enqueueAndForget(async()=>{const l=await CS(i);new RS(i.asyncQueue,l,o,s,a).run()}),a.promise}(rt(n),i=>e(new OA(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(){return new Zs("deleteField")}function xA(){return new th("serverTimestamp")}function CA(...n){return new nA("arrayUnion",n)}function DA(...n){return new rA("arrayRemove",n)}function PA(n){return new iA("increment",n)}(function(n,e=!0){(function(t){_i=t})(jn),xn(new Zt("firestore",(t,{instanceIdentifier:r,options:i})=>{const s=t.getProvider("app").getImmediate(),o=new Be(new VI(t.getProvider("auth-internal")),new KI(t.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Q($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Qt(rf,"3.13.0",n),Qt(rf,"3.13.0","esm2017")})();const LA="@firebase/firestore-compat",MA="0.3.12";/**
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
 */function hh(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Q("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function cd(){if(typeof Uint8Array>"u")throw new Q("unimplemented","Uint8Arrays are not available in this environment.")}function hd(){if(!yT())throw new Q("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Os{constructor(e){this._delegate=e}static fromBase64String(e){return hd(),new Os(nn.fromBase64String(e))}static fromUint8Array(e){return cd(),new Os(nn.fromUint8Array(e))}toBase64(){return hd(),this._delegate.toBase64()}toUint8Array(){return cd(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function gu(n){return FA(n,["next","error","complete"])}function FA(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class qA{enableIndexedDbPersistence(e,t){return KS(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return GS(e._delegate)}clearIndexedDbPersistence(e){return HS(e._delegate)}}class Uy{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&qt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){US(this._delegate,e,t,r)}enableNetwork(){return QS(this._delegate)}disableNetwork(){return YS(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,wy("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return WS(this._delegate)}onSnapshotsInSync(e){return SA(this._delegate,e)}get app(){if(!this._appCompat)throw new Q("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new fi(this,by(this._delegate,e))}catch(t){throw gt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Dt(this,ea(this._delegate,e))}catch(t){throw gt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new mt(this,VS(this._delegate,e))}catch(t){throw gt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return NA(this._delegate,t=>e(new Vy(this,t)))}batch(){return rt(this._delegate),new jy(new kA(this._delegate,e=>to(this._delegate,e)))}loadBundle(e){return XS(this._delegate,e)}namedQuery(e){return JS(this._delegate,e).then(t=>t?new mt(this,t):null)}}class Ya extends uh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Os(new nn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Dt.forKey(t,this.firestore,null)}}function BA(n){FI(n)}class Vy{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Ya(e)}get(e){const t=lr(e);return this._delegate.get(t).then(r=>new Ns(this._firestore,new dn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=lr(e);return r?(hh("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=lr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=lr(e);return this._delegate.delete(t),this}}class jy{constructor(e){this._delegate=e}set(e,t,r){const i=lr(e);return r?(hh("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=lr(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=lr(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Ar{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new ts(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rs(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Ar.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new Ar(e,new Ya(e),t),i.set(t,s)),s}}Ar.INSTANCES=new WeakMap;class Dt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ya(e)}static forPath(e,t,r){if(e.length%2!==0)throw new Q("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Dt(t,new Ce(t._delegate,r,new te(e)))}static forKey(e,t,r){return new Dt(t,new Ce(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new fi(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new fi(this.firestore,by(this._delegate,e))}catch(t){throw gt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ce(e),e instanceof Ce?Ey(this._delegate,e):!1}set(e,t){t=hh("DocumentReference.set",t);try{return t?ld(this._delegate,e,t):ld(this._delegate,e)}catch(r){throw gt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?ud(this._delegate,e):ud(this._delegate,e,t,...r)}catch(i){throw gt(i,"updateDoc()","DocumentReference.update()")}}delete(){return IA(this._delegate)}onSnapshot(...e){const t=zy(e),r=$y(e,i=>new Ns(this.firestore,new dn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return By(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=vA(this._delegate):(e==null?void 0:e.source)==="server"?t=wA(this._delegate):t=yA(this._delegate),t.then(r=>new Ns(this.firestore,new dn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Dt(this.firestore,e?this._delegate.withConverter(Ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gt(n,e,t){return n.message=n.message.replace(e,t),n}function zy(n){for(const e of n)if(typeof e=="object"&&!gu(e))return e;return{}}function $y(n,e){var t,r;let i;return gu(n[0])?i=n[0]:gu(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ns{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Dt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return qy(this._delegate,e._delegate)}}class Rs extends Ns{data(e){const t=this._delegate.data(e);return qI(t!==void 0),t}}class mt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Ya(e)}where(e,t,r){try{return new mt(this.firestore,In(this._delegate,aA(e,t,r)))}catch(i){throw gt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new mt(this.firestore,In(this._delegate,lA(e,t)))}catch(r){throw gt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new mt(this.firestore,In(this._delegate,uA(e)))}catch(t){throw gt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new mt(this.firestore,In(this._delegate,cA(e)))}catch(t){throw gt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new mt(this.firestore,In(this._delegate,hA(...e)))}catch(t){throw gt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new mt(this.firestore,In(this._delegate,fA(...e)))}catch(t){throw gt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new mt(this.firestore,In(this._delegate,dA(...e)))}catch(t){throw gt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new mt(this.firestore,In(this._delegate,pA(...e)))}catch(t){throw gt(t,"endAt()","Query.endAt()")}}isEqual(e){return Iy(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=bA(this._delegate):(e==null?void 0:e.source)==="server"?t=EA(this._delegate):t=_A(this._delegate),t.then(r=>new yu(this.firestore,new Vn(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=zy(e),r=$y(e,i=>new yu(this.firestore,new Vn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return By(this._delegate,t,r)}withConverter(e){return new mt(this.firestore,e?this._delegate.withConverter(Ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class UA{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Rs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yu{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new mt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Rs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new UA(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new Rs(this._firestore,r))})}isEqual(e){return qy(this._delegate,e._delegate)}}class fi extends mt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Dt(this.firestore,e):null}doc(e){try{return e===void 0?new Dt(this.firestore,ea(this._delegate)):new Dt(this.firestore,ea(this._delegate,e))}catch(t){throw gt(t,"doc()","CollectionReference.doc()")}}add(e){return TA(this._delegate,e).then(t=>new Dt(this.firestore,t))}isEqual(e){return Ey(this._delegate,e._delegate)}withConverter(e){return new fi(this.firestore,e?this._delegate.withConverter(Ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function lr(n){return Te(n,Ce)}/**
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
 */class fh{constructor(...e){this._delegate=new Un(...e)}static documentId(){return new fh(Ve.keyField().canonicalString())}isEqual(e){return e=ce(e),e instanceof Un?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class rr{constructor(e){this._delegate=e}static serverTimestamp(){const e=xA();return e._methodName="FieldValue.serverTimestamp",new rr(e)}static delete(){const e=RA();return e._methodName="FieldValue.delete",new rr(e)}static arrayUnion(...e){const t=CA(...e);return t._methodName="FieldValue.arrayUnion",new rr(t)}static arrayRemove(...e){const t=DA(...e);return t._methodName="FieldValue.arrayRemove",new rr(t)}static increment(e){const t=PA(e);return t._methodName="FieldValue.increment",new rr(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const VA={Firestore:Uy,GeoPoint:Va,Timestamp:Pe,Blob:Os,Transaction:Vy,WriteBatch:jy,DocumentReference:Dt,DocumentSnapshot:Ns,Query:mt,QueryDocumentSnapshot:Rs,QuerySnapshot:yu,CollectionReference:fi,FieldPath:fh,FieldValue:rr,setLogLevel:BA,CACHE_SIZE_UNLIMITED:$S};function jA(n,e){n.INTERNAL.registerComponent(new Zt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},VA)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){jA(n,(e,t)=>new Uy(e,t,new qA)),n.registerVersion(LA,MA)}zA(Yt);const $A={apiKey:"AIzaSyATvGgxA0O8st0A_CsmfFE03l3S4CVM_yA",authDomain:"lms-interactive.firebaseapp.com",projectId:"lms-interactive",storageBucket:"lms-interactive.firebasestorage.app",messagingSenderId:"835834812112",appId:"1:835834812112:web:9f81146d7d33c0a1f870d5",measurementId:"G-MS3M53M8SS"};Yt.apps.length?Yt.app():Yt.initializeApp($A);const Ky=Yt.auth(),Xa=Yt.firestore();async function KA(n){try{const t=await Xa.collection("submissions").doc(n).get();return t.exists?t.data():{}}catch(e){return console.error("Error fetching submission for printing:",e),{}}}function GA(n,e){let t=`<h1>${n.assignmentTitle}</h1><hr>`;return n.pages.forEach(i=>{t+=`<div class="page-section"><h2>${i.title}</h2>`,i.elements.forEach(s=>{var o;if(s.type==="quill"){const a=((o=e==null?void 0:e[i.id])==null?void 0:o[s.id])||"<p><i>Keine Antwort abgegeben.</i></p>";t+=`
                    <div class="question-answer-pair">
                        <p class="question-text">${s.question}</p>
                        <div class="answer-box">${a}</div>
                    </div>
                `}}),t+="</div>"}),`<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><title>Druckansicht: ${n.assignmentTitle}</title><style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.5; margin: 2em; }
        h1 { font-size: 2em; border-bottom: 2px solid #ccc; padding-bottom: 0.5em; margin-bottom: 1em; }
        h2 { font-size: 1.5em; background-color: #f0f0f0; padding: 0.5em; margin-top: 2em; border-left: 5px solid #007bff; }
        .page-section { page-break-inside: avoid; margin-bottom: 2em; }
        .question-answer-pair { margin-bottom: 1.5em; padding-left: 1em; border-left: 3px solid #e9ecef; }
        .question-text { font-weight: bold; color: #333; }
        .answer-box { padding: 10px; border: 1px solid #ddd; border-radius: 4px; margin-top: 0.5em; background-color: #f9f9f9; }
        .answer-box p:first-child { margin-top: 0; }
        .answer-box p:last-child { margin-bottom: 0; }
        hr { border: 0; border-top: 1px solid #ccc; }
        @media print { 
            h2 { background-color: #f0f0f0 !important; -webkit-print-color-adjust: exact; } 
        }
    </style></head><body>${t}</body></html>`}async function HA(n,e){if(!n||!e){alert("Fehler: Aufgabendaten oder Benutzer-ID fehlen.");return}const t=await KA(e),r=GA(n,t),i=window.open("","_blank");if(!i){alert("Popup-Fenster wurde blockiert. Bitte erlaube Popups für diese Seite.");return}i.document.write(r),i.document.close(),setTimeout(()=>{i.focus(),i.print()},500)}var WA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function QA(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gy={exports:{}};/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */(function(n,e){(function(r,i){n.exports=i()})(typeof self<"u"?self:WA,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:a})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=109)}([function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(17),o=i(18),a=i(19),l=i(45),u=i(46),h=i(47),c=i(48),f=i(49),d=i(12),w=i(32),g=i(33),v=i(31),m=i(1),y={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,Container:s.default,Format:o.default,Leaf:a.default,Embed:c.default,Scroll:l.default,Block:h.default,Inline:u.default,Text:f.default,Attributor:{Attribute:d.default,Class:w.default,Style:g.default,Store:v.default}};r.default=y},function(t,r,i){var s=this&&this.__extends||function(){var v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(m,y){m.__proto__=y}||function(m,y){for(var _ in y)y.hasOwnProperty(_)&&(m[_]=y[_])};return function(m,y){v(m,y);function _(){this.constructor=m}m.prototype=y===null?Object.create(y):(_.prototype=y.prototype,new _)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=function(v){s(m,v);function m(y){var _=this;return y="[Parchment] "+y,_=v.call(this,y)||this,_.message=y,_.name=_.constructor.name,_}return m}(Error);r.ParchmentError=o;var a={},l={},u={},h={};r.DATA_KEY="__blot";var c;(function(v){v[v.TYPE=3]="TYPE",v[v.LEVEL=12]="LEVEL",v[v.ATTRIBUTE=13]="ATTRIBUTE",v[v.BLOT=14]="BLOT",v[v.INLINE=7]="INLINE",v[v.BLOCK=11]="BLOCK",v[v.BLOCK_BLOT=10]="BLOCK_BLOT",v[v.INLINE_BLOT=6]="INLINE_BLOT",v[v.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",v[v.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",v[v.ANY=15]="ANY"})(c=r.Scope||(r.Scope={}));function f(v,m){var y=w(v);if(y==null)throw new o("Unable to create "+v+" blot");var _=y,p=v instanceof Node||v.nodeType===Node.TEXT_NODE?v:_.create(m);return new _(p,m)}r.create=f;function d(v,m){return m===void 0&&(m=!1),v==null?null:v[r.DATA_KEY]!=null?v[r.DATA_KEY].blot:m?d(v.parentNode,m):null}r.find=d;function w(v,m){m===void 0&&(m=c.ANY);var y;if(typeof v=="string")y=h[v]||a[v];else if(v instanceof Text||v.nodeType===Node.TEXT_NODE)y=h.text;else if(typeof v=="number")v&c.LEVEL&c.BLOCK?y=h.block:v&c.LEVEL&c.INLINE&&(y=h.inline);else if(v instanceof HTMLElement){var _=(v.getAttribute("class")||"").split(/\s+/);for(var p in _)if(y=l[_[p]],y)break;y=y||u[v.tagName]}return y==null?null:m&c.LEVEL&y.scope&&m&c.TYPE&y.scope?y:null}r.query=w;function g(){for(var v=[],m=0;m<arguments.length;m++)v[m]=arguments[m];if(v.length>1)return v.map(function(p){return g(p)});var y=v[0];if(typeof y.blotName!="string"&&typeof y.attrName!="string")throw new o("Invalid definition");if(y.blotName==="abstract")throw new o("Cannot register abstract class");if(h[y.blotName||y.attrName]=y,typeof y.keyName=="string")a[y.keyName]=y;else if(y.className!=null&&(l[y.className]=y),y.tagName!=null){Array.isArray(y.tagName)?y.tagName=y.tagName.map(function(p){return p.toUpperCase()}):y.tagName=y.tagName.toUpperCase();var _=Array.isArray(y.tagName)?y.tagName:[y.tagName];_.forEach(function(p){(u[p]==null||y.className==null)&&(u[p]=y)})}return y}r.register=g},function(t,r,i){var s=i(51),o=i(11),a=i(3),l=i(20),u="\0",h=function(c){Array.isArray(c)?this.ops=c:c!=null&&Array.isArray(c.ops)?this.ops=c.ops:this.ops=[]};h.prototype.insert=function(c,f){var d={};return c.length===0?this:(d.insert=c,f!=null&&typeof f=="object"&&Object.keys(f).length>0&&(d.attributes=f),this.push(d))},h.prototype.delete=function(c){return c<=0?this:this.push({delete:c})},h.prototype.retain=function(c,f){if(c<=0)return this;var d={retain:c};return f!=null&&typeof f=="object"&&Object.keys(f).length>0&&(d.attributes=f),this.push(d)},h.prototype.push=function(c){var f=this.ops.length,d=this.ops[f-1];if(c=a(!0,{},c),typeof d=="object"){if(typeof c.delete=="number"&&typeof d.delete=="number")return this.ops[f-1]={delete:d.delete+c.delete},this;if(typeof d.delete=="number"&&c.insert!=null&&(f-=1,d=this.ops[f-1],typeof d!="object"))return this.ops.unshift(c),this;if(o(c.attributes,d.attributes)){if(typeof c.insert=="string"&&typeof d.insert=="string")return this.ops[f-1]={insert:d.insert+c.insert},typeof c.attributes=="object"&&(this.ops[f-1].attributes=c.attributes),this;if(typeof c.retain=="number"&&typeof d.retain=="number")return this.ops[f-1]={retain:d.retain+c.retain},typeof c.attributes=="object"&&(this.ops[f-1].attributes=c.attributes),this}}return f===this.ops.length?this.ops.push(c):this.ops.splice(f,0,c),this},h.prototype.chop=function(){var c=this.ops[this.ops.length-1];return c&&c.retain&&!c.attributes&&this.ops.pop(),this},h.prototype.filter=function(c){return this.ops.filter(c)},h.prototype.forEach=function(c){this.ops.forEach(c)},h.prototype.map=function(c){return this.ops.map(c)},h.prototype.partition=function(c){var f=[],d=[];return this.forEach(function(w){var g=c(w)?f:d;g.push(w)}),[f,d]},h.prototype.reduce=function(c,f){return this.ops.reduce(c,f)},h.prototype.changeLength=function(){return this.reduce(function(c,f){return f.insert?c+l.length(f):f.delete?c-f.delete:c},0)},h.prototype.length=function(){return this.reduce(function(c,f){return c+l.length(f)},0)},h.prototype.slice=function(c,f){c=c||0,typeof f!="number"&&(f=1/0);for(var d=[],w=l.iterator(this.ops),g=0;g<f&&w.hasNext();){var v;g<c?v=w.next(c-g):(v=w.next(f-g),d.push(v)),g+=l.length(v)}return new h(d)},h.prototype.compose=function(c){var f=l.iterator(this.ops),d=l.iterator(c.ops),w=[],g=d.peek();if(g!=null&&typeof g.retain=="number"&&g.attributes==null){for(var v=g.retain;f.peekType()==="insert"&&f.peekLength()<=v;)v-=f.peekLength(),w.push(f.next());g.retain-v>0&&d.next(g.retain-v)}for(var m=new h(w);f.hasNext()||d.hasNext();)if(d.peekType()==="insert")m.push(d.next());else if(f.peekType()==="delete")m.push(f.next());else{var y=Math.min(f.peekLength(),d.peekLength()),_=f.next(y),p=d.next(y);if(typeof p.retain=="number"){var b={};typeof _.retain=="number"?b.retain=y:b.insert=_.insert;var k=l.attributes.compose(_.attributes,p.attributes,typeof _.retain=="number");if(k&&(b.attributes=k),m.push(b),!d.hasNext()&&o(m.ops[m.ops.length-1],b)){var S=new h(f.rest());return m.concat(S).chop()}}else typeof p.delete=="number"&&typeof _.retain=="number"&&m.push(p)}return m.chop()},h.prototype.concat=function(c){var f=new h(this.ops.slice());return c.ops.length>0&&(f.push(c.ops[0]),f.ops=f.ops.concat(c.ops.slice(1))),f},h.prototype.diff=function(c,f){if(this.ops===c.ops)return new h;var d=[this,c].map(function(y){return y.map(function(_){if(_.insert!=null)return typeof _.insert=="string"?_.insert:u;var p=y===c?"on":"with";throw new Error("diff() called "+p+" non-document")}).join("")}),w=new h,g=s(d[0],d[1],f),v=l.iterator(this.ops),m=l.iterator(c.ops);return g.forEach(function(y){for(var _=y[1].length;_>0;){var p=0;switch(y[0]){case s.INSERT:p=Math.min(m.peekLength(),_),w.push(m.next(p));break;case s.DELETE:p=Math.min(_,v.peekLength()),v.next(p),w.delete(p);break;case s.EQUAL:p=Math.min(v.peekLength(),m.peekLength(),_);var b=v.next(p),k=m.next(p);o(b.insert,k.insert)?w.retain(p,l.attributes.diff(b.attributes,k.attributes)):w.push(k).delete(p);break}_-=p}}),w.chop()},h.prototype.eachLine=function(c,f){f=f||`
`;for(var d=l.iterator(this.ops),w=new h,g=0;d.hasNext();){if(d.peekType()!=="insert")return;var v=d.peek(),m=l.length(v)-d.peekLength(),y=typeof v.insert=="string"?v.insert.indexOf(f,m)-m:-1;if(y<0)w.push(d.next());else if(y>0)w.push(d.next(y));else{if(c(w,d.next(1).attributes||{},g)===!1)return;g+=1,w=new h}}w.length()>0&&c(w,{},g)},h.prototype.transform=function(c,f){if(f=!!f,typeof c=="number")return this.transformPosition(c,f);for(var d=l.iterator(this.ops),w=l.iterator(c.ops),g=new h;d.hasNext()||w.hasNext();)if(d.peekType()==="insert"&&(f||w.peekType()!=="insert"))g.retain(l.length(d.next()));else if(w.peekType()==="insert")g.push(w.next());else{var v=Math.min(d.peekLength(),w.peekLength()),m=d.next(v),y=w.next(v);if(m.delete)continue;y.delete?g.push(y):g.retain(v,l.attributes.transform(m.attributes,y.attributes,f))}return g.chop()},h.prototype.transformPosition=function(c,f){f=!!f;for(var d=l.iterator(this.ops),w=0;d.hasNext()&&w<=c;){var g=d.peekLength(),v=d.peekType();if(d.next(),v==="delete"){c-=Math.min(g,c-w);continue}else v==="insert"&&(w<c||!f)&&(c+=g);w+=g}return c},t.exports=h},function(t,r){var i=Object.prototype.hasOwnProperty,s=Object.prototype.toString,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=function(d){return typeof Array.isArray=="function"?Array.isArray(d):s.call(d)==="[object Array]"},u=function(d){if(!d||s.call(d)!=="[object Object]")return!1;var w=i.call(d,"constructor"),g=d.constructor&&d.constructor.prototype&&i.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!w&&!g)return!1;var v;for(v in d);return typeof v>"u"||i.call(d,v)},h=function(d,w){o&&w.name==="__proto__"?o(d,w.name,{enumerable:!0,configurable:!0,value:w.newValue,writable:!0}):d[w.name]=w.newValue},c=function(d,w){if(w==="__proto__")if(i.call(d,w)){if(a)return a(d,w).value}else return;return d[w]};t.exports=function f(){var d,w,g,v,m,y,_=arguments[0],p=1,b=arguments.length,k=!1;for(typeof _=="boolean"&&(k=_,_=arguments[1]||{},p=2),(_==null||typeof _!="object"&&typeof _!="function")&&(_={});p<b;++p)if(d=arguments[p],d!=null)for(w in d)g=c(_,w),v=c(d,w),_!==v&&(k&&v&&(u(v)||(m=l(v)))?(m?(m=!1,y=g&&l(g)?g:[]):y=g&&u(g)?g:{},h(_,{name:w,newValue:f(k,y,v)})):typeof v<"u"&&h(_,{name:w,newValue:v}));return _}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.BlockEmbed=r.bubbleFormats=void 0;var s=function(){function E(I,N){for(var x=0;x<N.length;x++){var L=N[x];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(I,L.key,L)}}return function(I,N,x){return N&&E(I.prototype,N),x&&E(I,x),I}}(),o=function E(I,N,x){I===null&&(I=Function.prototype);var L=Object.getOwnPropertyDescriptor(I,N);if(L===void 0){var U=Object.getPrototypeOf(I);return U===null?void 0:E(U,N,x)}else{if("value"in L)return L.value;var V=L.get;return V===void 0?void 0:V.call(x)}},a=i(3),l=_(a),u=i(2),h=_(u),c=i(0),f=_(c),d=i(16),w=_(d),g=i(6),v=_(g),m=i(7),y=_(m);function _(E){return E&&E.__esModule?E:{default:E}}function p(E,I){if(!(E instanceof I))throw new TypeError("Cannot call a class as a function")}function b(E,I){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:E}function k(E,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);E.prototype=Object.create(I&&I.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(E,I):E.__proto__=I)}var S=1,A=function(E){k(I,E);function I(){return p(this,I),b(this,(I.__proto__||Object.getPrototypeOf(I)).apply(this,arguments))}return s(I,[{key:"attach",value:function(){o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"attach",this).call(this),this.attributes=new f.default.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return new h.default().insert(this.value(),(0,l.default)(this.formats(),this.attributes.values()))}},{key:"format",value:function(x,L){var U=f.default.query(x,f.default.Scope.BLOCK_ATTRIBUTE);U!=null&&this.attributes.attribute(U,L)}},{key:"formatAt",value:function(x,L,U,V){this.format(U,V)}},{key:"insertAt",value:function(x,L,U){if(typeof L=="string"&&L.endsWith(`
`)){var V=f.default.create(R.blotName);this.parent.insertBefore(V,x===0?this:this.next),V.insertAt(0,L.slice(0,-1))}else o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"insertAt",this).call(this,x,L,U)}}]),I}(f.default.Embed);A.scope=f.default.Scope.BLOCK_BLOT;var R=function(E){k(I,E);function I(N){p(this,I);var x=b(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,N));return x.cache={},x}return s(I,[{key:"delta",value:function(){return this.cache.delta==null&&(this.cache.delta=this.descendants(f.default.Leaf).reduce(function(x,L){return L.length()===0?x:x.insert(L.value(),T(L))},new h.default).insert(`
`,T(this))),this.cache.delta}},{key:"deleteAt",value:function(x,L){o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"deleteAt",this).call(this,x,L),this.cache={}}},{key:"formatAt",value:function(x,L,U,V){L<=0||(f.default.query(U,f.default.Scope.BLOCK)?x+L===this.length()&&this.format(U,V):o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"formatAt",this).call(this,x,Math.min(L,this.length()-x-1),U,V),this.cache={})}},{key:"insertAt",value:function(x,L,U){if(U!=null)return o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"insertAt",this).call(this,x,L,U);if(L.length!==0){var V=L.split(`
`),J=V.shift();J.length>0&&(x<this.length()-1||this.children.tail==null?o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"insertAt",this).call(this,Math.min(x,this.length()-1),J):this.children.tail.insertAt(this.children.tail.length(),J),this.cache={});var q=this;V.reduce(function(M,O){return q=q.split(M,!0),q.insertAt(0,O),O.length},x+J.length)}}},{key:"insertBefore",value:function(x,L){var U=this.children.head;o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"insertBefore",this).call(this,x,L),U instanceof w.default&&U.remove(),this.cache={}}},{key:"length",value:function(){return this.cache.length==null&&(this.cache.length=o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"length",this).call(this)+S),this.cache.length}},{key:"moveChildren",value:function(x,L){o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"moveChildren",this).call(this,x,L),this.cache={}}},{key:"optimize",value:function(x){o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"optimize",this).call(this,x),this.cache={}}},{key:"path",value:function(x){return o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"path",this).call(this,x,!0)}},{key:"removeChild",value:function(x){o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"removeChild",this).call(this,x),this.cache={}}},{key:"split",value:function(x){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(L&&(x===0||x>=this.length()-S)){var U=this.clone();return x===0?(this.parent.insertBefore(U,this),this):(this.parent.insertBefore(U,this.next),U)}else{var V=o(I.prototype.__proto__||Object.getPrototypeOf(I.prototype),"split",this).call(this,x,L);return this.cache={},V}}}]),I}(f.default.Block);R.blotName="block",R.tagName="P",R.defaultChild="break",R.allowedChildren=[v.default,f.default.Embed,y.default];function T(E){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return E==null||(typeof E.formats=="function"&&(I=(0,l.default)(I,E.formats())),E.parent==null||E.parent.blotName=="scroll"||E.parent.statics.scope!==E.statics.scope)?I:T(E.parent,I)}r.bubbleFormats=T,r.BlockEmbed=A,r.default=R},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.overload=r.expandConfig=void 0;var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},o=function(){function q(M,O){var D=[],P=!0,j=!1,B=void 0;try{for(var C=M[Symbol.iterator](),F;!(P=(F=C.next()).done)&&(D.push(F.value),!(O&&D.length===O));P=!0);}catch(K){j=!0,B=K}finally{try{!P&&C.return&&C.return()}finally{if(j)throw B}}return D}return function(M,O){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return q(M,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function q(M,O){for(var D=0;D<O.length;D++){var P=O[D];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(M,P.key,P)}}return function(M,O,D){return O&&q(M.prototype,O),D&&q(M,D),M}}();i(50);var l=i(2),u=T(l),h=i(14),c=T(h),f=i(8),d=T(f),w=i(9),g=T(w),v=i(0),m=T(v),y=i(15),_=T(y),p=i(3),b=T(p),k=i(10),S=T(k),A=i(34),R=T(A);function T(q){return q&&q.__esModule?q:{default:q}}function E(q,M,O){return M in q?Object.defineProperty(q,M,{value:O,enumerable:!0,configurable:!0,writable:!0}):q[M]=O,q}function I(q,M){if(!(q instanceof M))throw new TypeError("Cannot call a class as a function")}var N=(0,S.default)("quill"),x=function(){a(q,null,[{key:"debug",value:function(O){O===!0&&(O="log"),S.default.level(O)}},{key:"find",value:function(O){return O.__quill||m.default.find(O)}},{key:"import",value:function(O){return this.imports[O]==null&&N.error("Cannot import "+O+". Are you sure it was registered?"),this.imports[O]}},{key:"register",value:function(O,D){var P=this,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(typeof O!="string"){var B=O.attrName||O.blotName;typeof B=="string"?this.register("formats/"+B,O,D):Object.keys(O).forEach(function(C){P.register(C,O[C],D)})}else this.imports[O]!=null&&!j&&N.warn("Overwriting "+O+" with",D),this.imports[O]=D,(O.startsWith("blots/")||O.startsWith("formats/"))&&D.blotName!=="abstract"?m.default.register(D):O.startsWith("modules")&&typeof D.register=="function"&&D.register()}}]);function q(M){var O=this,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(I(this,q),this.options=L(M,D),this.container=this.options.container,this.container==null)return N.error("Invalid Quill container",M);this.options.debug&&q.debug(this.options.debug);var P=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new d.default,this.scroll=m.default.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new c.default(this.scroll),this.selection=new _.default(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(d.default.events.EDITOR_CHANGE,function(B){B===d.default.events.TEXT_CHANGE&&O.root.classList.toggle("ql-blank",O.editor.isBlank())}),this.emitter.on(d.default.events.SCROLL_UPDATE,function(B,C){var F=O.selection.lastRange,K=F&&F.length===0?F.index:void 0;U.call(O,function(){return O.editor.update(null,C,K)},B)});var j=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">`+P+"<p><br></p></div>");this.setContents(j),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return a(q,[{key:"addContainer",value:function(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(typeof O=="string"){var P=O;O=document.createElement("div"),O.classList.add(P)}return this.container.insertBefore(O,D),O}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(O,D,P){var j=this,B=V(O,D,P),C=o(B,4);return O=C[0],D=C[1],P=C[3],U.call(this,function(){return j.editor.deleteText(O,D)},P,O,-1*D)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.scroll.enable(O),this.container.classList.toggle("ql-disabled",!O)}},{key:"focus",value:function(){var O=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=O,this.scrollIntoView()}},{key:"format",value:function(O,D){var P=this,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:d.default.sources.API;return U.call(this,function(){var B=P.getSelection(!0),C=new u.default;if(B==null)return C;if(m.default.query(O,m.default.Scope.BLOCK))C=P.editor.formatLine(B.index,B.length,E({},O,D));else{if(B.length===0)return P.selection.format(O,D),C;C=P.editor.formatText(B.index,B.length,E({},O,D))}return P.setSelection(B,d.default.sources.SILENT),C},j)}},{key:"formatLine",value:function(O,D,P,j,B){var C=this,F=void 0,K=V(O,D,P,j,B),G=o(K,4);return O=G[0],D=G[1],F=G[2],B=G[3],U.call(this,function(){return C.editor.formatLine(O,D,F)},B,O,0)}},{key:"formatText",value:function(O,D,P,j,B){var C=this,F=void 0,K=V(O,D,P,j,B),G=o(K,4);return O=G[0],D=G[1],F=G[2],B=G[3],U.call(this,function(){return C.editor.formatText(O,D,F)},B,O,0)}},{key:"getBounds",value:function(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,P=void 0;typeof O=="number"?P=this.selection.getBounds(O,D):P=this.selection.getBounds(O.index,O.length);var j=this.container.getBoundingClientRect();return{bottom:P.bottom-j.top,height:P.height,left:P.left-j.left,right:P.right-j.left,top:P.top-j.top,width:P.width}}},{key:"getContents",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-O,P=V(O,D),j=o(P,2);return O=j[0],D=j[1],this.editor.getContents(O,D)}},{key:"getFormat",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.getSelection(!0),D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return typeof O=="number"?this.editor.getFormat(O,D):this.editor.getFormat(O.index,O.length)}},{key:"getIndex",value:function(O){return O.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(O){return this.scroll.leaf(O)}},{key:"getLine",value:function(O){return this.scroll.line(O)}},{key:"getLines",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE;return typeof O!="number"?this.scroll.lines(O.index,O.length):this.scroll.lines(O,D)}},{key:"getModule",value:function(O){return this.theme.modules[O]}},{key:"getSelection",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return O&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getLength()-O,P=V(O,D),j=o(P,2);return O=j[0],D=j[1],this.editor.getText(O,D)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(O,D,P){var j=this,B=arguments.length>3&&arguments[3]!==void 0?arguments[3]:q.sources.API;return U.call(this,function(){return j.editor.insertEmbed(O,D,P)},B,O)}},{key:"insertText",value:function(O,D,P,j,B){var C=this,F=void 0,K=V(O,0,P,j,B),G=o(K,4);return O=G[0],F=G[2],B=G[3],U.call(this,function(){return C.editor.insertText(O,D,F)},B,O,D.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(O,D,P){this.clipboard.dangerouslyPasteHTML(O,D,P)}},{key:"removeFormat",value:function(O,D,P){var j=this,B=V(O,D,P),C=o(B,4);return O=C[0],D=C[1],P=C[3],U.call(this,function(){return j.editor.removeFormat(O,D)},P,O)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(O){var D=this,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API;return U.call(this,function(){O=new u.default(O);var j=D.getLength(),B=D.editor.deleteText(0,j),C=D.editor.applyDelta(O),F=C.ops[C.ops.length-1];F!=null&&typeof F.insert=="string"&&F.insert[F.insert.length-1]===`
`&&(D.editor.deleteText(D.getLength()-1,1),C.delete(1));var K=B.compose(C);return K},P)}},{key:"setSelection",value:function(O,D,P){if(O==null)this.selection.setRange(null,D||q.sources.API);else{var j=V(O,D,P),B=o(j,4);O=B[0],D=B[1],P=B[3],this.selection.setRange(new y.Range(O,D),P),P!==d.default.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API,P=new u.default().insert(O);return this.setContents(P,D)}},{key:"update",value:function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:d.default.sources.USER,D=this.scroll.update(O);return this.selection.update(O),D}},{key:"updateContents",value:function(O){var D=this,P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:d.default.sources.API;return U.call(this,function(){return O=new u.default(O),D.editor.applyDelta(O,P)},P,!0)}}]),q}();x.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},x.events=d.default.events,x.sources=d.default.sources,x.version="1.3.7",x.imports={delta:u.default,parchment:m.default,"core/module":g.default,"core/theme":R.default};function L(q,M){if(M=(0,b.default)(!0,{container:q,modules:{clipboard:!0,keyboard:!0,history:!0}},M),!M.theme||M.theme===x.DEFAULTS.theme)M.theme=R.default;else if(M.theme=x.import("themes/"+M.theme),M.theme==null)throw new Error("Invalid theme "+M.theme+". Did you register it?");var O=(0,b.default)(!0,{},M.theme.DEFAULTS);[O,M].forEach(function(j){j.modules=j.modules||{},Object.keys(j.modules).forEach(function(B){j.modules[B]===!0&&(j.modules[B]={})})});var D=Object.keys(O.modules).concat(Object.keys(M.modules)),P=D.reduce(function(j,B){var C=x.import("modules/"+B);return C==null?N.error("Cannot load "+B+" module. Are you sure you registered it?"):j[B]=C.DEFAULTS||{},j},{});return M.modules!=null&&M.modules.toolbar&&M.modules.toolbar.constructor!==Object&&(M.modules.toolbar={container:M.modules.toolbar}),M=(0,b.default)(!0,{},x.DEFAULTS,{modules:P},O,M),["bounds","container","scrollingContainer"].forEach(function(j){typeof M[j]=="string"&&(M[j]=document.querySelector(M[j]))}),M.modules=Object.keys(M.modules).reduce(function(j,B){return M.modules[B]&&(j[B]=M.modules[B]),j},{}),M}function U(q,M,O,D){if(this.options.strict&&!this.isEnabled()&&M===d.default.sources.USER)return new u.default;var P=O==null?null:this.getSelection(),j=this.editor.delta,B=q();if(P!=null&&(O===!0&&(O=P.index),D==null?P=J(P,B,M):D!==0&&(P=J(P,O,D,M)),this.setSelection(P,d.default.sources.SILENT)),B.length()>0){var C,F=[d.default.events.TEXT_CHANGE,B,j,M];if((C=this.emitter).emit.apply(C,[d.default.events.EDITOR_CHANGE].concat(F)),M!==d.default.sources.SILENT){var K;(K=this.emitter).emit.apply(K,F)}}return B}function V(q,M,O,D,P){var j={};return typeof q.index=="number"&&typeof q.length=="number"?typeof M!="number"?(P=D,D=O,O=M,M=q.length,q=q.index):(M=q.length,q=q.index):typeof M!="number"&&(P=D,D=O,O=M,M=0),(typeof O>"u"?"undefined":s(O))==="object"?(j=O,P=D):typeof O=="string"&&(D!=null?j[O]=D:P=O),P=P||d.default.sources.API,[q,M,j,P]}function J(q,M,O,D){if(q==null)return null;var P=void 0,j=void 0;if(M instanceof u.default){var B=[q.index,q.index+q.length].map(function(G){return M.transformPosition(G,D!==d.default.sources.USER)}),C=o(B,2);P=C[0],j=C[1]}else{var F=[q.index,q.index+q.length].map(function(G){return G<M||G===M&&D===d.default.sources.USER?G:O>=0?G+O:Math.max(M,G+O)}),K=o(F,2);P=K[0],j=K[1]}return new y.Range(P,j-P)}r.expandConfig=L,r.overload=V,r.default=x},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function v(m,y){for(var _=0;_<y.length;_++){var p=y[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,y,_){return y&&v(m.prototype,y),_&&v(m,_),m}}(),o=function v(m,y,_){m===null&&(m=Function.prototype);var p=Object.getOwnPropertyDescriptor(m,y);if(p===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:v(b,y,_)}else{if("value"in p)return p.value;var k=p.get;return k===void 0?void 0:k.call(_)}},a=i(7),l=c(a),u=i(0),h=c(u);function c(v){return v&&v.__esModule?v:{default:v}}function f(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}function d(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:v}function w(v,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);v.prototype=Object.create(m&&m.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(v,m):v.__proto__=m)}var g=function(v){w(m,v);function m(){return f(this,m),d(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return s(m,[{key:"formatAt",value:function(_,p,b,k){if(m.compare(this.statics.blotName,b)<0&&h.default.query(b,h.default.Scope.BLOT)){var S=this.isolate(_,p);k&&S.wrap(b,k)}else o(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"formatAt",this).call(this,_,p,b,k)}},{key:"optimize",value:function(_){if(o(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"optimize",this).call(this,_),this.parent instanceof m&&m.compare(this.statics.blotName,this.parent.statics.blotName)>0){var p=this.parent.isolate(this.offset(),this.length());this.moveChildren(p),p.wrap(this)}}}],[{key:"compare",value:function(_,p){var b=m.order.indexOf(_),k=m.order.indexOf(p);return b>=0||k>=0?b-k:_===p?0:_<p?-1:1}}]),m}(h.default.Inline);g.allowedChildren=[g,h.default.Embed,l.default],g.order=["cursor","inline","underline","strike","italic","bold","script","link","code"],r.default=g},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}function l(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function u(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function h(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var c=function(f){h(d,f);function d(){return l(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(o.default.Text);r.default=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function y(_,p){for(var b=0;b<p.length;b++){var k=p[b];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(_,k.key,k)}}return function(_,p,b){return p&&y(_.prototype,p),b&&y(_,b),_}}(),o=function y(_,p,b){_===null&&(_=Function.prototype);var k=Object.getOwnPropertyDescriptor(_,p);if(k===void 0){var S=Object.getPrototypeOf(_);return S===null?void 0:y(S,p,b)}else{if("value"in k)return k.value;var A=k.get;return A===void 0?void 0:A.call(b)}},a=i(54),l=c(a),u=i(10),h=c(u);function c(y){return y&&y.__esModule?y:{default:y}}function f(y,_){if(!(y instanceof _))throw new TypeError("Cannot call a class as a function")}function d(y,_){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:y}function w(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(y,_):y.__proto__=_)}var g=(0,h.default)("quill:events"),v=["selectionchange","mousedown","mouseup","click"];v.forEach(function(y){document.addEventListener(y,function(){for(var _=arguments.length,p=Array(_),b=0;b<_;b++)p[b]=arguments[b];[].slice.call(document.querySelectorAll(".ql-container")).forEach(function(k){if(k.__quill&&k.__quill.emitter){var S;(S=k.__quill.emitter).handleDOM.apply(S,p)}})})});var m=function(y){w(_,y);function _(){f(this,_);var p=d(this,(_.__proto__||Object.getPrototypeOf(_)).call(this));return p.listeners={},p.on("error",g.error),p}return s(_,[{key:"emit",value:function(){g.log.apply(g,arguments),o(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(b){for(var k=arguments.length,S=Array(k>1?k-1:0),A=1;A<k;A++)S[A-1]=arguments[A];(this.listeners[b.type]||[]).forEach(function(R){var T=R.node,E=R.handler;(b.target===T||T.contains(b.target))&&E.apply(void 0,[b].concat(S))})}},{key:"listenDOM",value:function(b,k,S){this.listeners[b]||(this.listeners[b]=[]),this.listeners[b].push({node:k,handler:S})}}]),_}(l.default);m.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},m.sources={API:"api",SILENT:"silent",USER:"user"},r.default=m},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});function s(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}var o=function a(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};s(this,a),this.quill=l,this.options=u};o.DEFAULTS={},r.default=o},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=["error","warn","log","info"],o="warn";function a(u){if(s.indexOf(u)<=s.indexOf(o)){for(var h,c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];(h=console)[u].apply(h,f)}}function l(u){return s.reduce(function(h,c){return h[c]=a.bind(console,c,u),h},{})}a.level=l.level=function(u){o=u},r.default=l},function(t,r,i){var s=Array.prototype.slice,o=i(52),a=i(53),l=t.exports=function(f,d,w){return w||(w={}),f===d?!0:f instanceof Date&&d instanceof Date?f.getTime()===d.getTime():!f||!d||typeof f!="object"&&typeof d!="object"?w.strict?f===d:f==d:c(f,d,w)};function u(f){return f==null}function h(f){return!(!f||typeof f!="object"||typeof f.length!="number"||typeof f.copy!="function"||typeof f.slice!="function"||f.length>0&&typeof f[0]!="number")}function c(f,d,w){var g,v;if(u(f)||u(d)||f.prototype!==d.prototype)return!1;if(a(f))return a(d)?(f=s.call(f),d=s.call(d),l(f,d,w)):!1;if(h(f)){if(!h(d)||f.length!==d.length)return!1;for(g=0;g<f.length;g++)if(f[g]!==d[g])return!1;return!0}try{var m=o(f),y=o(d)}catch{return!1}if(m.length!=y.length)return!1;for(m.sort(),y.sort(),g=m.length-1;g>=0;g--)if(m[g]!=y[g])return!1;for(g=m.length-1;g>=0;g--)if(v=m[g],!l(f[v],d[v],w))return!1;return typeof f==typeof d}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=function(){function a(l,u,h){h===void 0&&(h={}),this.attrName=l,this.keyName=u;var c=s.Scope.TYPE&s.Scope.ATTRIBUTE;h.scope!=null?this.scope=h.scope&s.Scope.LEVEL|c:this.scope=s.Scope.ATTRIBUTE,h.whitelist!=null&&(this.whitelist=h.whitelist)}return a.keys=function(l){return[].map.call(l.attributes,function(u){return u.name})},a.prototype.add=function(l,u){return this.canAdd(l,u)?(l.setAttribute(this.keyName,u),!0):!1},a.prototype.canAdd=function(l,u){var h=s.query(l,s.Scope.BLOT&(this.scope|s.Scope.TYPE));return h==null?!1:this.whitelist==null?!0:typeof u=="string"?this.whitelist.indexOf(u.replace(/["']/g,""))>-1:this.whitelist.indexOf(u)>-1},a.prototype.remove=function(l){l.removeAttribute(this.keyName)},a.prototype.value=function(l){var u=l.getAttribute(this.keyName);return this.canAdd(l,u)&&u?u:""},a}();r.default=o},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.Code=void 0;var s=function(){function A(R,T){var E=[],I=!0,N=!1,x=void 0;try{for(var L=R[Symbol.iterator](),U;!(I=(U=L.next()).done)&&(E.push(U.value),!(T&&E.length===T));I=!0);}catch(V){N=!0,x=V}finally{try{!I&&L.return&&L.return()}finally{if(N)throw x}}return E}return function(R,T){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return A(R,T);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function A(R,T){for(var E=0;E<T.length;E++){var I=T[E];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(R,I.key,I)}}return function(R,T,E){return T&&A(R.prototype,T),E&&A(R,E),R}}(),a=function A(R,T,E){R===null&&(R=Function.prototype);var I=Object.getOwnPropertyDescriptor(R,T);if(I===void 0){var N=Object.getPrototypeOf(R);return N===null?void 0:A(N,T,E)}else{if("value"in I)return I.value;var x=I.get;return x===void 0?void 0:x.call(E)}},l=i(2),u=y(l),h=i(0),c=y(h),f=i(4),d=y(f),w=i(6),g=y(w),v=i(7),m=y(v);function y(A){return A&&A.__esModule?A:{default:A}}function _(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}function p(A,R){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return R&&(typeof R=="object"||typeof R=="function")?R:A}function b(A,R){if(typeof R!="function"&&R!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof R);A.prototype=Object.create(R&&R.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),R&&(Object.setPrototypeOf?Object.setPrototypeOf(A,R):A.__proto__=R)}var k=function(A){b(R,A);function R(){return _(this,R),p(this,(R.__proto__||Object.getPrototypeOf(R)).apply(this,arguments))}return R}(g.default);k.blotName="code",k.tagName="CODE";var S=function(A){b(R,A);function R(){return _(this,R),p(this,(R.__proto__||Object.getPrototypeOf(R)).apply(this,arguments))}return o(R,[{key:"delta",value:function(){var E=this,I=this.domNode.textContent;return I.endsWith(`
`)&&(I=I.slice(0,-1)),I.split(`
`).reduce(function(N,x){return N.insert(x).insert(`
`,E.formats())},new u.default)}},{key:"format",value:function(E,I){if(!(E===this.statics.blotName&&I)){var N=this.descendant(m.default,this.length()-1),x=s(N,1),L=x[0];L!=null&&L.deleteAt(L.length()-1,1),a(R.prototype.__proto__||Object.getPrototypeOf(R.prototype),"format",this).call(this,E,I)}}},{key:"formatAt",value:function(E,I,N,x){if(I!==0&&!(c.default.query(N,c.default.Scope.BLOCK)==null||N===this.statics.blotName&&x===this.statics.formats(this.domNode))){var L=this.newlineIndex(E);if(!(L<0||L>=E+I)){var U=this.newlineIndex(E,!0)+1,V=L-U+1,J=this.isolate(U,V),q=J.next;J.format(N,x),q instanceof R&&q.formatAt(0,E-U+I-V,N,x)}}}},{key:"insertAt",value:function(E,I,N){if(N==null){var x=this.descendant(m.default,E),L=s(x,2),U=L[0],V=L[1];U.insertAt(V,I)}}},{key:"length",value:function(){var E=this.domNode.textContent.length;return this.domNode.textContent.endsWith(`
`)?E:E+1}},{key:"newlineIndex",value:function(E){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(I)return this.domNode.textContent.slice(0,E).lastIndexOf(`
`);var N=this.domNode.textContent.slice(E).indexOf(`
`);return N>-1?E+N:-1}},{key:"optimize",value:function(E){this.domNode.textContent.endsWith(`
`)||this.appendChild(c.default.create("text",`
`)),a(R.prototype.__proto__||Object.getPrototypeOf(R.prototype),"optimize",this).call(this,E);var I=this.next;I!=null&&I.prev===this&&I.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===I.statics.formats(I.domNode)&&(I.optimize(E),I.moveChildren(this),I.remove())}},{key:"replace",value:function(E){a(R.prototype.__proto__||Object.getPrototypeOf(R.prototype),"replace",this).call(this,E),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(I){var N=c.default.find(I);N==null?I.parentNode.removeChild(I):N instanceof c.default.Embed?N.remove():N.unwrap()})}}],[{key:"create",value:function(E){var I=a(R.__proto__||Object.getPrototypeOf(R),"create",this).call(this,E);return I.setAttribute("spellcheck",!1),I}},{key:"formats",value:function(){return!0}}]),R}(d.default);S.blotName="code-block",S.tagName="PRE",S.TAB="  ",r.Code=k,r.default=S},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},o=function(){function q(M,O){var D=[],P=!0,j=!1,B=void 0;try{for(var C=M[Symbol.iterator](),F;!(P=(F=C.next()).done)&&(D.push(F.value),!(O&&D.length===O));P=!0);}catch(K){j=!0,B=K}finally{try{!P&&C.return&&C.return()}finally{if(j)throw B}}return D}return function(M,O){if(Array.isArray(M))return M;if(Symbol.iterator in Object(M))return q(M,O);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function q(M,O){for(var D=0;D<O.length;D++){var P=O[D];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(M,P.key,P)}}return function(M,O,D){return O&&q(M.prototype,O),D&&q(M,D),M}}(),l=i(2),u=I(l),h=i(20),c=I(h),f=i(0),d=I(f),w=i(13),g=I(w),v=i(24),m=I(v),y=i(4),_=I(y),p=i(16),b=I(p),k=i(21),S=I(k),A=i(11),R=I(A),T=i(3),E=I(T);function I(q){return q&&q.__esModule?q:{default:q}}function N(q,M,O){return M in q?Object.defineProperty(q,M,{value:O,enumerable:!0,configurable:!0,writable:!0}):q[M]=O,q}function x(q,M){if(!(q instanceof M))throw new TypeError("Cannot call a class as a function")}var L=/^[ -~]*$/,U=function(){function q(M){x(this,q),this.scroll=M,this.delta=this.getDelta()}return a(q,[{key:"applyDelta",value:function(O){var D=this,P=!1;this.scroll.update();var j=this.scroll.length();return this.scroll.batchStart(),O=J(O),O.reduce(function(B,C){var F=C.retain||C.delete||C.insert.length||1,K=C.attributes||{};if(C.insert!=null){if(typeof C.insert=="string"){var G=C.insert;G.endsWith(`
`)&&P&&(P=!1,G=G.slice(0,-1)),B>=j&&!G.endsWith(`
`)&&(P=!0),D.scroll.insertAt(B,G);var Y=D.scroll.line(B),ae=o(Y,2),he=ae[0],pe=ae[1],_e=(0,E.default)({},(0,y.bubbleFormats)(he));if(he instanceof _.default){var Se=he.descendant(d.default.Leaf,pe),_t=o(Se,1),We=_t[0];_e=(0,E.default)(_e,(0,y.bubbleFormats)(We))}K=c.default.attributes.diff(_e,K)||{}}else if(s(C.insert)==="object"){var H=Object.keys(C.insert)[0];if(H==null)return B;D.scroll.insertAt(B,H,C.insert[H])}j+=F}return Object.keys(K).forEach(function(W){D.scroll.formatAt(B,F,W,K[W])}),B+F},0),O.reduce(function(B,C){return typeof C.delete=="number"?(D.scroll.deleteAt(B,C.delete),B):B+(C.retain||C.insert.length||1)},0),this.scroll.batchEnd(),this.update(O)}},{key:"deleteText",value:function(O,D){return this.scroll.deleteAt(O,D),this.update(new u.default().retain(O).delete(D))}},{key:"formatLine",value:function(O,D){var P=this,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.scroll.update(),Object.keys(j).forEach(function(B){if(!(P.scroll.whitelist!=null&&!P.scroll.whitelist[B])){var C=P.scroll.lines(O,Math.max(D,1)),F=D;C.forEach(function(K){var G=K.length();if(!(K instanceof g.default))K.format(B,j[B]);else{var Y=O-K.offset(P.scroll),ae=K.newlineIndex(Y+F)-Y+1;K.formatAt(Y,ae,B,j[B])}F-=G})}}),this.scroll.optimize(),this.update(new u.default().retain(O).retain(D,(0,S.default)(j)))}},{key:"formatText",value:function(O,D){var P=this,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Object.keys(j).forEach(function(B){P.scroll.formatAt(O,D,B,j[B])}),this.update(new u.default().retain(O).retain(D,(0,S.default)(j)))}},{key:"getContents",value:function(O,D){return this.delta.slice(O,O+D)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(O,D){return O.concat(D.delta())},new u.default)}},{key:"getFormat",value:function(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,P=[],j=[];D===0?this.scroll.path(O).forEach(function(C){var F=o(C,1),K=F[0];K instanceof _.default?P.push(K):K instanceof d.default.Leaf&&j.push(K)}):(P=this.scroll.lines(O,D),j=this.scroll.descendants(d.default.Leaf,O,D));var B=[P,j].map(function(C){if(C.length===0)return{};for(var F=(0,y.bubbleFormats)(C.shift());Object.keys(F).length>0;){var K=C.shift();if(K==null)return F;F=V((0,y.bubbleFormats)(K),F)}return F});return E.default.apply(E.default,B)}},{key:"getText",value:function(O,D){return this.getContents(O,D).filter(function(P){return typeof P.insert=="string"}).map(function(P){return P.insert}).join("")}},{key:"insertEmbed",value:function(O,D,P){return this.scroll.insertAt(O,D,P),this.update(new u.default().retain(O).insert(N({},D,P)))}},{key:"insertText",value:function(O,D){var P=this,j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return D=D.replace(/\r\n/g,`
`).replace(/\r/g,`
`),this.scroll.insertAt(O,D),Object.keys(j).forEach(function(B){P.scroll.formatAt(O,D.length,B,j[B])}),this.update(new u.default().retain(O).insert(D,(0,S.default)(j)))}},{key:"isBlank",value:function(){if(this.scroll.children.length==0)return!0;if(this.scroll.children.length>1)return!1;var O=this.scroll.children.head;return O.statics.blotName!==_.default.blotName||O.children.length>1?!1:O.children.head instanceof b.default}},{key:"removeFormat",value:function(O,D){var P=this.getText(O,D),j=this.scroll.line(O+D),B=o(j,2),C=B[0],F=B[1],K=0,G=new u.default;C!=null&&(C instanceof g.default?K=C.newlineIndex(F)-F+1:K=C.length()-F,G=C.delta().slice(F,F+K-1).insert(`
`));var Y=this.getContents(O,D+K),ae=Y.diff(new u.default().insert(P).concat(G)),he=new u.default().retain(O).concat(ae);return this.applyDelta(he)}},{key:"update",value:function(O){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0,j=this.delta;if(D.length===1&&D[0].type==="characterData"&&D[0].target.data.match(L)&&d.default.find(D[0].target)){var B=d.default.find(D[0].target),C=(0,y.bubbleFormats)(B),F=B.offset(this.scroll),K=D[0].oldValue.replace(m.default.CONTENTS,""),G=new u.default().insert(K),Y=new u.default().insert(B.value()),ae=new u.default().retain(F).concat(G.diff(Y,P));O=ae.reduce(function(he,pe){return pe.insert?he.insert(pe.insert,C):he.push(pe)},new u.default),this.delta=j.compose(O)}else this.delta=this.getDelta(),(!O||!(0,R.default)(j.compose(O),this.delta))&&(O=j.diff(this.delta,P));return O}}]),q}();function V(q,M){return Object.keys(M).reduce(function(O,D){return q[D]==null||(M[D]===q[D]?O[D]=M[D]:Array.isArray(M[D])?M[D].indexOf(q[D])<0&&(O[D]=M[D].concat([q[D]])):O[D]=[M[D],q[D]]),O},{})}function J(q){return q.reduce(function(M,O){if(O.insert===1){var D=(0,S.default)(O.attributes);return delete D.image,M.insert({image:O.attributes.image},D)}if(O.attributes!=null&&(O.attributes.list===!0||O.attributes.bullet===!0)&&(O=(0,S.default)(O),O.attributes.list?O.attributes.list="ordered":(O.attributes.list="bullet",delete O.attributes.bullet)),typeof O.insert=="string"){var P=O.insert.replace(/\r\n/g,`
`).replace(/\r/g,`
`);return M.insert(P,O.attributes)}return M.push(O)},new u.default)}r.default=U},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.Range=void 0;var s=function(){function A(R,T){var E=[],I=!0,N=!1,x=void 0;try{for(var L=R[Symbol.iterator](),U;!(I=(U=L.next()).done)&&(E.push(U.value),!(T&&E.length===T));I=!0);}catch(V){N=!0,x=V}finally{try{!I&&L.return&&L.return()}finally{if(N)throw x}}return E}return function(R,T){if(Array.isArray(R))return R;if(Symbol.iterator in Object(R))return A(R,T);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function A(R,T){for(var E=0;E<T.length;E++){var I=T[E];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(R,I.key,I)}}return function(R,T,E){return T&&A(R.prototype,T),E&&A(R,E),R}}(),a=i(0),l=m(a),u=i(21),h=m(u),c=i(11),f=m(c),d=i(8),w=m(d),g=i(10),v=m(g);function m(A){return A&&A.__esModule?A:{default:A}}function y(A){if(Array.isArray(A)){for(var R=0,T=Array(A.length);R<A.length;R++)T[R]=A[R];return T}else return Array.from(A)}function _(A,R){if(!(A instanceof R))throw new TypeError("Cannot call a class as a function")}var p=(0,v.default)("quill:selection"),b=function A(R){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;_(this,A),this.index=R,this.length=T},k=function(){function A(R,T){var E=this;_(this,A),this.emitter=T,this.scroll=R,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=l.default.create("cursor",this),this.lastRange=this.savedRange=new b(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,function(){E.mouseDown||setTimeout(E.update.bind(E,w.default.sources.USER),1)}),this.emitter.on(w.default.events.EDITOR_CHANGE,function(I,N){I===w.default.events.TEXT_CHANGE&&N.length()>0&&E.update(w.default.sources.SILENT)}),this.emitter.on(w.default.events.SCROLL_BEFORE_UPDATE,function(){if(E.hasFocus()){var I=E.getNativeRange();I!=null&&I.start.node!==E.cursor.textNode&&E.emitter.once(w.default.events.SCROLL_UPDATE,function(){try{E.setNativeRange(I.start.node,I.start.offset,I.end.node,I.end.offset)}catch{}})}}),this.emitter.on(w.default.events.SCROLL_OPTIMIZE,function(I,N){if(N.range){var x=N.range,L=x.startNode,U=x.startOffset,V=x.endNode,J=x.endOffset;E.setNativeRange(L,U,V,J)}}),this.update(w.default.sources.SILENT)}return o(A,[{key:"handleComposition",value:function(){var T=this;this.root.addEventListener("compositionstart",function(){T.composing=!0}),this.root.addEventListener("compositionend",function(){if(T.composing=!1,T.cursor.parent){var E=T.cursor.restore();if(!E)return;setTimeout(function(){T.setNativeRange(E.startNode,E.startOffset,E.endNode,E.endOffset)},1)}})}},{key:"handleDragging",value:function(){var T=this;this.emitter.listenDOM("mousedown",document.body,function(){T.mouseDown=!0}),this.emitter.listenDOM("mouseup",document.body,function(){T.mouseDown=!1,T.update(w.default.sources.USER)})}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(T,E){if(!(this.scroll.whitelist!=null&&!this.scroll.whitelist[T])){this.scroll.update();var I=this.getNativeRange();if(!(I==null||!I.native.collapsed||l.default.query(T,l.default.Scope.BLOCK))){if(I.start.node!==this.cursor.textNode){var N=l.default.find(I.start.node,!1);if(N==null)return;if(N instanceof l.default.Leaf){var x=N.split(I.start.offset);N.parent.insertBefore(this.cursor,x)}else N.insertBefore(this.cursor,I.start.node);this.cursor.attach()}this.cursor.format(T,E),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(T){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,I=this.scroll.length();T=Math.min(T,I-1),E=Math.min(T+E,I-1)-T;var N=void 0,x=this.scroll.leaf(T),L=s(x,2),U=L[0],V=L[1];if(U==null)return null;var J=U.position(V,!0),q=s(J,2);N=q[0],V=q[1];var M=document.createRange();if(E>0){M.setStart(N,V);var O=this.scroll.leaf(T+E),D=s(O,2);if(U=D[0],V=D[1],U==null)return null;var P=U.position(V,!0),j=s(P,2);return N=j[0],V=j[1],M.setEnd(N,V),M.getBoundingClientRect()}else{var B="left",C=void 0;return N instanceof Text?(V<N.data.length?(M.setStart(N,V),M.setEnd(N,V+1)):(M.setStart(N,V-1),M.setEnd(N,V),B="right"),C=M.getBoundingClientRect()):(C=U.domNode.getBoundingClientRect(),V>0&&(B="right")),{bottom:C.top+C.height,height:C.height,left:C[B],right:C[B],top:C.top,width:0}}}},{key:"getNativeRange",value:function(){var T=document.getSelection();if(T==null||T.rangeCount<=0)return null;var E=T.getRangeAt(0);if(E==null)return null;var I=this.normalizeNative(E);return p.info("getNativeRange",I),I}},{key:"getRange",value:function(){var T=this.getNativeRange();if(T==null)return[null,null];var E=this.normalizedToRange(T);return[E,T]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(T){var E=this,I=[[T.start.node,T.start.offset]];T.native.collapsed||I.push([T.end.node,T.end.offset]);var N=I.map(function(U){var V=s(U,2),J=V[0],q=V[1],M=l.default.find(J,!0),O=M.offset(E.scroll);return q===0?O:M instanceof l.default.Container?O+M.length():O+M.index(J,q)}),x=Math.min(Math.max.apply(Math,y(N)),this.scroll.length()-1),L=Math.min.apply(Math,[x].concat(y(N)));return new b(L,x-L)}},{key:"normalizeNative",value:function(T){if(!S(this.root,T.startContainer)||!T.collapsed&&!S(this.root,T.endContainer))return null;var E={start:{node:T.startContainer,offset:T.startOffset},end:{node:T.endContainer,offset:T.endOffset},native:T};return[E.start,E.end].forEach(function(I){for(var N=I.node,x=I.offset;!(N instanceof Text)&&N.childNodes.length>0;)if(N.childNodes.length>x)N=N.childNodes[x],x=0;else if(N.childNodes.length===x)N=N.lastChild,x=N instanceof Text?N.data.length:N.childNodes.length+1;else break;I.node=N,I.offset=x}),E}},{key:"rangeToNative",value:function(T){var E=this,I=T.collapsed?[T.index]:[T.index,T.index+T.length],N=[],x=this.scroll.length();return I.forEach(function(L,U){L=Math.min(x-1,L);var V=void 0,J=E.scroll.leaf(L),q=s(J,2),M=q[0],O=q[1],D=M.position(O,U!==0),P=s(D,2);V=P[0],O=P[1],N.push(V,O)}),N.length<2&&(N=N.concat(N)),N}},{key:"scrollIntoView",value:function(T){var E=this.lastRange;if(E!=null){var I=this.getBounds(E.index,E.length);if(I!=null){var N=this.scroll.length()-1,x=this.scroll.line(Math.min(E.index,N)),L=s(x,1),U=L[0],V=U;if(E.length>0){var J=this.scroll.line(Math.min(E.index+E.length,N)),q=s(J,1);V=q[0]}if(!(U==null||V==null)){var M=T.getBoundingClientRect();I.top<M.top?T.scrollTop-=M.top-I.top:I.bottom>M.bottom&&(T.scrollTop+=I.bottom-M.bottom)}}}}},{key:"setNativeRange",value:function(T,E){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:T,N=arguments.length>3&&arguments[3]!==void 0?arguments[3]:E,x=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(p.info("setNativeRange",T,E,I,N),!(T!=null&&(this.root.parentNode==null||T.parentNode==null||I.parentNode==null))){var L=document.getSelection();if(L!=null)if(T!=null){this.hasFocus()||this.root.focus();var U=(this.getNativeRange()||{}).native;if(U==null||x||T!==U.startContainer||E!==U.startOffset||I!==U.endContainer||N!==U.endOffset){T.tagName=="BR"&&(E=[].indexOf.call(T.parentNode.childNodes,T),T=T.parentNode),I.tagName=="BR"&&(N=[].indexOf.call(I.parentNode.childNodes,I),I=I.parentNode);var V=document.createRange();V.setStart(T,E),V.setEnd(I,N),L.removeAllRanges(),L.addRange(V)}}else L.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(T){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:w.default.sources.API;if(typeof E=="string"&&(I=E,E=!1),p.info("setRange",T),T!=null){var N=this.rangeToNative(T);this.setNativeRange.apply(this,y(N).concat([E]))}else this.setNativeRange(null);this.update(I)}},{key:"update",value:function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:w.default.sources.USER,E=this.lastRange,I=this.getRange(),N=s(I,2),x=N[0],L=N[1];if(this.lastRange=x,this.lastRange!=null&&(this.savedRange=this.lastRange),!(0,f.default)(E,this.lastRange)){var U;!this.composing&&L!=null&&L.native.collapsed&&L.start.node!==this.cursor.textNode&&this.cursor.restore();var V=[w.default.events.SELECTION_CHANGE,(0,h.default)(this.lastRange),(0,h.default)(E),T];if((U=this.emitter).emit.apply(U,[w.default.events.EDITOR_CHANGE].concat(V)),T!==w.default.sources.SILENT){var J;(J=this.emitter).emit.apply(J,V)}}}}]),A}();function S(A,R){try{R.parentNode}catch{return!1}return R instanceof Text&&(R=R.parentNode),A.contains(R)}r.Range=b,r.default=k},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function w(g,v){for(var m=0;m<v.length;m++){var y=v[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(g,y.key,y)}}return function(g,v,m){return v&&w(g.prototype,v),m&&w(g,m),g}}(),o=function w(g,v,m){g===null&&(g=Function.prototype);var y=Object.getOwnPropertyDescriptor(g,v);if(y===void 0){var _=Object.getPrototypeOf(g);return _===null?void 0:w(_,v,m)}else{if("value"in y)return y.value;var p=y.get;return p===void 0?void 0:p.call(m)}},a=i(0),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(){return h(this,g),c(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return s(g,[{key:"insertInto",value:function(m,y){m.children.length===0?o(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"insertInto",this).call(this,m,y):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),g}(l.default.Embed);d.blotName="break",d.tagName="BR",r.default=d},function(t,r,i){var s=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,d){f.__proto__=d}||function(f,d){for(var w in d)d.hasOwnProperty(w)&&(f[w]=d[w])};return function(f,d){c(f,d);function w(){this.constructor=f}f.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(44),a=i(30),l=i(1),u=function(c){s(f,c);function f(d){var w=c.call(this,d)||this;return w.build(),w}return f.prototype.appendChild=function(d){this.insertBefore(d)},f.prototype.attach=function(){c.prototype.attach.call(this),this.children.forEach(function(d){d.attach()})},f.prototype.build=function(){var d=this;this.children=new o.default,[].slice.call(this.domNode.childNodes).reverse().forEach(function(w){try{var g=h(w);d.insertBefore(g,d.children.head||void 0)}catch(v){if(v instanceof l.ParchmentError)return;throw v}})},f.prototype.deleteAt=function(d,w){if(d===0&&w===this.length())return this.remove();this.children.forEachAt(d,w,function(g,v,m){g.deleteAt(v,m)})},f.prototype.descendant=function(d,w){var g=this.children.find(w),v=g[0],m=g[1];return d.blotName==null&&d(v)||d.blotName!=null&&v instanceof d?[v,m]:v instanceof f?v.descendant(d,m):[null,-1]},f.prototype.descendants=function(d,w,g){w===void 0&&(w=0),g===void 0&&(g=Number.MAX_VALUE);var v=[],m=g;return this.children.forEachAt(w,g,function(y,_,p){(d.blotName==null&&d(y)||d.blotName!=null&&y instanceof d)&&v.push(y),y instanceof f&&(v=v.concat(y.descendants(d,_,m))),m-=p}),v},f.prototype.detach=function(){this.children.forEach(function(d){d.detach()}),c.prototype.detach.call(this)},f.prototype.formatAt=function(d,w,g,v){this.children.forEachAt(d,w,function(m,y,_){m.formatAt(y,_,g,v)})},f.prototype.insertAt=function(d,w,g){var v=this.children.find(d),m=v[0],y=v[1];if(m)m.insertAt(y,w,g);else{var _=g==null?l.create("text",w):l.create(w,g);this.appendChild(_)}},f.prototype.insertBefore=function(d,w){if(this.statics.allowedChildren!=null&&!this.statics.allowedChildren.some(function(g){return d instanceof g}))throw new l.ParchmentError("Cannot insert "+d.statics.blotName+" into "+this.statics.blotName);d.insertInto(this,w)},f.prototype.length=function(){return this.children.reduce(function(d,w){return d+w.length()},0)},f.prototype.moveChildren=function(d,w){this.children.forEach(function(g){d.insertBefore(g,w)})},f.prototype.optimize=function(d){if(c.prototype.optimize.call(this,d),this.children.length===0)if(this.statics.defaultChild!=null){var w=l.create(this.statics.defaultChild);this.appendChild(w),w.optimize(d)}else this.remove()},f.prototype.path=function(d,w){w===void 0&&(w=!1);var g=this.children.find(d,w),v=g[0],m=g[1],y=[[this,d]];return v instanceof f?y.concat(v.path(m,w)):(v!=null&&y.push([v,m]),y)},f.prototype.removeChild=function(d){this.children.remove(d)},f.prototype.replace=function(d){d instanceof f&&d.moveChildren(this),c.prototype.replace.call(this,d)},f.prototype.split=function(d,w){if(w===void 0&&(w=!1),!w){if(d===0)return this;if(d===this.length())return this.next}var g=this.clone();return this.parent.insertBefore(g,this.next),this.children.forEachAt(d,this.length(),function(v,m,y){v=v.split(m,w),g.appendChild(v)}),g},f.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},f.prototype.update=function(d,w){var g=this,v=[],m=[];d.forEach(function(y){y.target===g.domNode&&y.type==="childList"&&(v.push.apply(v,y.addedNodes),m.push.apply(m,y.removedNodes))}),m.forEach(function(y){if(!(y.parentNode!=null&&y.tagName!=="IFRAME"&&document.body.compareDocumentPosition(y)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var _=l.find(y);_!=null&&(_.domNode.parentNode==null||_.domNode.parentNode===g.domNode)&&_.detach()}}),v.filter(function(y){return y.parentNode==g.domNode}).sort(function(y,_){return y===_?0:y.compareDocumentPosition(_)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(y){var _=null;y.nextSibling!=null&&(_=l.find(y.nextSibling));var p=h(y);(p.next!=_||p.next==null)&&(p.parent!=null&&p.parent.removeChild(g),g.insertBefore(p,_||void 0))})},f}(a.default);function h(c){var f=l.find(c);if(f==null)try{f=l.create(c)}catch{f=l.create(l.Scope.INLINE),[].slice.call(c.childNodes).forEach(function(w){f.domNode.appendChild(w)}),c.parentNode&&c.parentNode.replaceChild(f.domNode,c),f.attach()}return f}r.default=u},function(t,r,i){var s=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,d){f.__proto__=d}||function(f,d){for(var w in d)d.hasOwnProperty(w)&&(f[w]=d[w])};return function(f,d){c(f,d);function w(){this.constructor=f}f.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),a=i(31),l=i(17),u=i(1),h=function(c){s(f,c);function f(d){var w=c.call(this,d)||this;return w.attributes=new a.default(w.domNode),w}return f.formats=function(d){if(typeof this.tagName=="string")return!0;if(Array.isArray(this.tagName))return d.tagName.toLowerCase()},f.prototype.format=function(d,w){var g=u.query(d);g instanceof o.default?this.attributes.attribute(g,w):w&&g!=null&&(d!==this.statics.blotName||this.formats()[d]!==w)&&this.replaceWith(d,w)},f.prototype.formats=function(){var d=this.attributes.values(),w=this.statics.formats(this.domNode);return w!=null&&(d[this.statics.blotName]=w),d},f.prototype.replaceWith=function(d,w){var g=c.prototype.replaceWith.call(this,d,w);return this.attributes.copy(g),g},f.prototype.update=function(d,w){var g=this;c.prototype.update.call(this,d,w),d.some(function(v){return v.target===g.domNode&&v.type==="attributes"})&&this.attributes.build()},f.prototype.wrap=function(d,w){var g=c.prototype.wrap.call(this,d,w);return g instanceof f&&g.statics.scope===this.statics.scope&&this.attributes.move(g),g},f}(l.default);r.default=h},function(t,r,i){var s=this&&this.__extends||function(){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,c){h.__proto__=c}||function(h,c){for(var f in c)c.hasOwnProperty(f)&&(h[f]=c[f])};return function(h,c){u(h,c);function f(){this.constructor=h}h.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(30),a=i(1),l=function(u){s(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.value=function(c){return!0},h.prototype.index=function(c,f){return this.domNode===c||this.domNode.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(f,1):-1},h.prototype.position=function(c,f){var d=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return c>0&&(d+=1),[this.parent.domNode,d]},h.prototype.value=function(){var c;return c={},c[this.statics.blotName]=this.statics.value(this.domNode)||!0,c},h.scope=a.Scope.INLINE_BLOT,h}(o.default);r.default=l},function(t,r,i){var s=i(11),o=i(3),a={attributes:{compose:function(u,h,c){typeof u!="object"&&(u={}),typeof h!="object"&&(h={});var f=o(!0,{},h);c||(f=Object.keys(f).reduce(function(w,g){return f[g]!=null&&(w[g]=f[g]),w},{}));for(var d in u)u[d]!==void 0&&h[d]===void 0&&(f[d]=u[d]);return Object.keys(f).length>0?f:void 0},diff:function(u,h){typeof u!="object"&&(u={}),typeof h!="object"&&(h={});var c=Object.keys(u).concat(Object.keys(h)).reduce(function(f,d){return s(u[d],h[d])||(f[d]=h[d]===void 0?null:h[d]),f},{});return Object.keys(c).length>0?c:void 0},transform:function(u,h,c){if(typeof u!="object")return h;if(typeof h=="object"){if(!c)return h;var f=Object.keys(h).reduce(function(d,w){return u[w]===void 0&&(d[w]=h[w]),d},{});return Object.keys(f).length>0?f:void 0}}},iterator:function(u){return new l(u)},length:function(u){return typeof u.delete=="number"?u.delete:typeof u.retain=="number"?u.retain:typeof u.insert=="string"?u.insert.length:1}};function l(u){this.ops=u,this.index=0,this.offset=0}l.prototype.hasNext=function(){return this.peekLength()<1/0},l.prototype.next=function(u){u||(u=1/0);var h=this.ops[this.index];if(h){var c=this.offset,f=a.length(h);if(u>=f-c?(u=f-c,this.index+=1,this.offset=0):this.offset+=u,typeof h.delete=="number")return{delete:u};var d={};return h.attributes&&(d.attributes=h.attributes),typeof h.retain=="number"?d.retain=u:typeof h.insert=="string"?d.insert=h.insert.substr(c,u):d.insert=h.insert,d}else return{retain:1/0}},l.prototype.peek=function(){return this.ops[this.index]},l.prototype.peekLength=function(){return this.ops[this.index]?a.length(this.ops[this.index])-this.offset:1/0},l.prototype.peekType=function(){return this.ops[this.index]?typeof this.ops[this.index].delete=="number"?"delete":typeof this.ops[this.index].retain=="number"?"retain":"insert":"retain"},l.prototype.rest=function(){if(this.hasNext()){if(this.offset===0)return this.ops.slice(this.index);var u=this.offset,h=this.index,c=this.next(),f=this.ops.slice(this.index);return this.offset=u,this.index=h,[c].concat(f)}else return[]},t.exports=a},function(t,r){var i=function(){function s(g,v){return v!=null&&g instanceof v}var o;try{o=Map}catch{o=function(){}}var a;try{a=Set}catch{a=function(){}}var l;try{l=Promise}catch{l=function(){}}function u(g,v,m,y,_){typeof v=="object"&&(m=v.depth,y=v.prototype,_=v.includeNonEnumerable,v=v.circular);var p=[],b=[],k=typeof Buffer<"u";typeof v>"u"&&(v=!0),typeof m>"u"&&(m=1/0);function S(A,R){if(A===null)return null;if(R===0)return A;var T,E;if(typeof A!="object")return A;if(s(A,o))T=new o;else if(s(A,a))T=new a;else if(s(A,l))T=new l(function(M,O){A.then(function(D){M(S(D,R-1))},function(D){O(S(D,R-1))})});else if(u.__isArray(A))T=[];else if(u.__isRegExp(A))T=new RegExp(A.source,w(A)),A.lastIndex&&(T.lastIndex=A.lastIndex);else if(u.__isDate(A))T=new Date(A.getTime());else{if(k&&Buffer.isBuffer(A))return Buffer.allocUnsafe?T=Buffer.allocUnsafe(A.length):T=new Buffer(A.length),A.copy(T),T;s(A,Error)?T=Object.create(A):typeof y>"u"?(E=Object.getPrototypeOf(A),T=Object.create(E)):(T=Object.create(y),E=y)}if(v){var I=p.indexOf(A);if(I!=-1)return b[I];p.push(A),b.push(T)}s(A,o)&&A.forEach(function(M,O){var D=S(O,R-1),P=S(M,R-1);T.set(D,P)}),s(A,a)&&A.forEach(function(M){var O=S(M,R-1);T.add(O)});for(var N in A){var x;E&&(x=Object.getOwnPropertyDescriptor(E,N)),!(x&&x.set==null)&&(T[N]=S(A[N],R-1))}if(Object.getOwnPropertySymbols)for(var L=Object.getOwnPropertySymbols(A),N=0;N<L.length;N++){var U=L[N],V=Object.getOwnPropertyDescriptor(A,U);V&&!V.enumerable&&!_||(T[U]=S(A[U],R-1),V.enumerable||Object.defineProperty(T,U,{enumerable:!1}))}if(_)for(var J=Object.getOwnPropertyNames(A),N=0;N<J.length;N++){var q=J[N],V=Object.getOwnPropertyDescriptor(A,q);V&&V.enumerable||(T[q]=S(A[q],R-1),Object.defineProperty(T,q,{enumerable:!1}))}return T}return S(g,m)}u.clonePrototype=function(v){if(v===null)return null;var m=function(){};return m.prototype=v,new m};function h(g){return Object.prototype.toString.call(g)}u.__objToStr=h;function c(g){return typeof g=="object"&&h(g)==="[object Date]"}u.__isDate=c;function f(g){return typeof g=="object"&&h(g)==="[object Array]"}u.__isArray=f;function d(g){return typeof g=="object"&&h(g)==="[object RegExp]"}u.__isRegExp=d;function w(g){var v="";return g.global&&(v+="g"),g.ignoreCase&&(v+="i"),g.multiline&&(v+="m"),v}return u.__getRegExpFlags=w,u}();typeof t=="object"&&t.exports&&(t.exports=i)},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function T(E,I){var N=[],x=!0,L=!1,U=void 0;try{for(var V=E[Symbol.iterator](),J;!(x=(J=V.next()).done)&&(N.push(J.value),!(I&&N.length===I));x=!0);}catch(q){L=!0,U=q}finally{try{!x&&V.return&&V.return()}finally{if(L)throw U}}return N}return function(E,I){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return T(E,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function T(E,I){for(var N=0;N<I.length;N++){var x=I[N];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,I,N){return I&&T(E.prototype,I),N&&T(E,N),E}}(),a=function T(E,I,N){E===null&&(E=Function.prototype);var x=Object.getOwnPropertyDescriptor(E,I);if(x===void 0){var L=Object.getPrototypeOf(E);return L===null?void 0:T(L,I,N)}else{if("value"in x)return x.value;var U=x.get;return U===void 0?void 0:U.call(N)}},l=i(0),u=p(l),h=i(8),c=p(h),f=i(4),d=p(f),w=i(16),g=p(w),v=i(13),m=p(v),y=i(25),_=p(y);function p(T){return T&&T.__esModule?T:{default:T}}function b(T,E){if(!(T instanceof E))throw new TypeError("Cannot call a class as a function")}function k(T,E){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:T}function S(T,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);T.prototype=Object.create(E&&E.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(T,E):T.__proto__=E)}function A(T){return T instanceof d.default||T instanceof f.BlockEmbed}var R=function(T){S(E,T);function E(I,N){b(this,E);var x=k(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,I));return x.emitter=N.emitter,Array.isArray(N.whitelist)&&(x.whitelist=N.whitelist.reduce(function(L,U){return L[U]=!0,L},{})),x.domNode.addEventListener("DOMNodeInserted",function(){}),x.optimize(),x.enable(),x}return o(E,[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(N,x){var L=this.line(N),U=s(L,2),V=U[0],J=U[1],q=this.line(N+x),M=s(q,1),O=M[0];if(a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"deleteAt",this).call(this,N,x),O!=null&&V!==O&&J>0){if(V instanceof f.BlockEmbed||O instanceof f.BlockEmbed){this.optimize();return}if(V instanceof m.default){var D=V.newlineIndex(V.length(),!0);if(D>-1&&(V=V.split(D+1),V===O)){this.optimize();return}}else if(O instanceof m.default){var P=O.newlineIndex(0);P>-1&&O.split(P+1)}var j=O.children.head instanceof g.default?null:O.children.head;V.moveChildren(O,j),V.remove()}this.optimize()}},{key:"enable",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;this.domNode.setAttribute("contenteditable",N)}},{key:"formatAt",value:function(N,x,L,U){this.whitelist!=null&&!this.whitelist[L]||(a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"formatAt",this).call(this,N,x,L,U),this.optimize())}},{key:"insertAt",value:function(N,x,L){if(!(L!=null&&this.whitelist!=null&&!this.whitelist[x])){if(N>=this.length())if(L==null||u.default.query(x,u.default.Scope.BLOCK)==null){var U=u.default.create(this.statics.defaultChild);this.appendChild(U),L==null&&x.endsWith(`
`)&&(x=x.slice(0,-1)),U.insertAt(0,x,L)}else{var V=u.default.create(x,L);this.appendChild(V)}else a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"insertAt",this).call(this,N,x,L);this.optimize()}}},{key:"insertBefore",value:function(N,x){if(N.statics.scope===u.default.Scope.INLINE_BLOT){var L=u.default.create(this.statics.defaultChild);L.appendChild(N),N=L}a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"insertBefore",this).call(this,N,x)}},{key:"leaf",value:function(N){return this.path(N).pop()||[null,-1]}},{key:"line",value:function(N){return N===this.length()?this.line(N-1):this.descendant(A,N)}},{key:"lines",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Number.MAX_VALUE,L=function U(V,J,q){var M=[],O=q;return V.children.forEachAt(J,q,function(D,P,j){A(D)?M.push(D):D instanceof u.default.Container&&(M=M.concat(U(D,P,O))),O-=j}),M};return L(this,N,x)}},{key:"optimize",value:function(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.batch!==!0&&(a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"optimize",this).call(this,N,x),N.length>0&&this.emitter.emit(c.default.events.SCROLL_OPTIMIZE,N,x))}},{key:"path",value:function(N){return a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"path",this).call(this,N).slice(1)}},{key:"update",value:function(N){if(this.batch!==!0){var x=c.default.sources.USER;typeof N=="string"&&(x=N),Array.isArray(N)||(N=this.observer.takeRecords()),N.length>0&&this.emitter.emit(c.default.events.SCROLL_BEFORE_UPDATE,x,N),a(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"update",this).call(this,N.concat([])),N.length>0&&this.emitter.emit(c.default.events.SCROLL_UPDATE,x,N)}}}]),E}(u.default.Scroll);R.blotName="scroll",R.className="ql-editor",R.tagName="DIV",R.defaultChild="block",R.allowedChildren=[d.default,f.BlockEmbed,_.default],r.default=R},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.SHORTKEY=r.default=void 0;var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},o=function(){function C(F,K){var G=[],Y=!0,ae=!1,he=void 0;try{for(var pe=F[Symbol.iterator](),_e;!(Y=(_e=pe.next()).done)&&(G.push(_e.value),!(K&&G.length===K));Y=!0);}catch(Se){ae=!0,he=Se}finally{try{!Y&&pe.return&&pe.return()}finally{if(ae)throw he}}return G}return function(F,K){if(Array.isArray(F))return F;if(Symbol.iterator in Object(F))return C(F,K);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function C(F,K){for(var G=0;G<K.length;G++){var Y=K[G];Y.enumerable=Y.enumerable||!1,Y.configurable=!0,"value"in Y&&(Y.writable=!0),Object.defineProperty(F,Y.key,Y)}}return function(F,K,G){return K&&C(F.prototype,K),G&&C(F,G),F}}(),l=i(21),u=T(l),h=i(11),c=T(h),f=i(3),d=T(f),w=i(2),g=T(w),v=i(20),m=T(v),y=i(0),_=T(y),p=i(5),b=T(p),k=i(10),S=T(k),A=i(9),R=T(A);function T(C){return C&&C.__esModule?C:{default:C}}function E(C,F,K){return F in C?Object.defineProperty(C,F,{value:K,enumerable:!0,configurable:!0,writable:!0}):C[F]=K,C}function I(C,F){if(!(C instanceof F))throw new TypeError("Cannot call a class as a function")}function N(C,F){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F&&(typeof F=="object"||typeof F=="function")?F:C}function x(C,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof F);C.prototype=Object.create(F&&F.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),F&&(Object.setPrototypeOf?Object.setPrototypeOf(C,F):C.__proto__=F)}var L=(0,S.default)("quill:keyboard"),U=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",V=function(C){x(F,C),a(F,null,[{key:"match",value:function(G,Y){return Y=B(Y),["altKey","ctrlKey","metaKey","shiftKey"].some(function(ae){return!!Y[ae]!==G[ae]&&Y[ae]!==null})?!1:Y.key===(G.which||G.keyCode)}}]);function F(K,G){I(this,F);var Y=N(this,(F.__proto__||Object.getPrototypeOf(F)).call(this,K,G));return Y.bindings={},Object.keys(Y.options.bindings).forEach(function(ae){ae==="list autofill"&&K.scroll.whitelist!=null&&!K.scroll.whitelist.list||Y.options.bindings[ae]&&Y.addBinding(Y.options.bindings[ae])}),Y.addBinding({key:F.keys.ENTER,shiftKey:null},D),Y.addBinding({key:F.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),/Firefox/i.test(navigator.userAgent)?(Y.addBinding({key:F.keys.BACKSPACE},{collapsed:!0},q),Y.addBinding({key:F.keys.DELETE},{collapsed:!0},M)):(Y.addBinding({key:F.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},q),Y.addBinding({key:F.keys.DELETE},{collapsed:!0,suffix:/^.?$/},M)),Y.addBinding({key:F.keys.BACKSPACE},{collapsed:!1},O),Y.addBinding({key:F.keys.DELETE},{collapsed:!1},O),Y.addBinding({key:F.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},q),Y.listen(),Y}return a(F,[{key:"addBinding",value:function(G){var Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},ae=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},he=B(G);if(he==null||he.key==null)return L.warn("Attempted to add invalid keyboard binding",he);typeof Y=="function"&&(Y={handler:Y}),typeof ae=="function"&&(ae={handler:ae}),he=(0,d.default)(he,Y,ae),this.bindings[he.key]=this.bindings[he.key]||[],this.bindings[he.key].push(he)}},{key:"listen",value:function(){var G=this;this.quill.root.addEventListener("keydown",function(Y){if(!Y.defaultPrevented){var ae=Y.which||Y.keyCode,he=(G.bindings[ae]||[]).filter(function($e){return F.match(Y,$e)});if(he.length!==0){var pe=G.quill.getSelection();if(!(pe==null||!G.quill.hasFocus())){var _e=G.quill.getLine(pe.index),Se=o(_e,2),_t=Se[0],We=Se[1],H=G.quill.getLeaf(pe.index),W=o(H,2),ie=W[0],se=W[1],Z=pe.length===0?[ie,se]:G.quill.getLeaf(pe.index+pe.length),ge=o(Z,2),ye=ge[0],ve=ge[1],xt=ie instanceof _.default.Text?ie.value().slice(0,se):"",rn=ye instanceof _.default.Text?ye.value().slice(ve):"",Le={collapsed:pe.length===0,empty:pe.length===0&&_t.length()<=1,format:G.quill.getFormat(pe),offset:We,prefix:xt,suffix:rn},Yy=he.some(function($e){if($e.collapsed!=null&&$e.collapsed!==Le.collapsed||$e.empty!=null&&$e.empty!==Le.empty||$e.offset!=null&&$e.offset!==Le.offset)return!1;if(Array.isArray($e.format)){if($e.format.every(function(wn){return Le.format[wn]==null}))return!1}else if(s($e.format)==="object"&&!Object.keys($e.format).every(function(wn){return $e.format[wn]===!0?Le.format[wn]!=null:$e.format[wn]===!1?Le.format[wn]==null:(0,c.default)($e.format[wn],Le.format[wn])}))return!1;return $e.prefix!=null&&!$e.prefix.test(Le.prefix)||$e.suffix!=null&&!$e.suffix.test(Le.suffix)?!1:$e.handler.call(G,pe,Le)!==!0});Yy&&Y.preventDefault()}}}})}}]),F}(R.default);V.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},V.DEFAULTS={bindings:{bold:j("bold"),italic:j("italic"),underline:j("underline"),indent:{key:V.keys.TAB,format:["blockquote","indent","list"],handler:function(F,K){if(K.collapsed&&K.offset!==0)return!0;this.quill.format("indent","+1",b.default.sources.USER)}},outdent:{key:V.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(F,K){if(K.collapsed&&K.offset!==0)return!0;this.quill.format("indent","-1",b.default.sources.USER)}},"outdent backspace":{key:V.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(F,K){K.format.indent!=null?this.quill.format("indent","-1",b.default.sources.USER):K.format.list!=null&&this.quill.format("list",!1,b.default.sources.USER)}},"indent code-block":P(!0),"outdent code-block":P(!1),"remove tab":{key:V.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(F){this.quill.deleteText(F.index-1,1,b.default.sources.USER)}},tab:{key:V.keys.TAB,handler:function(F){this.quill.history.cutoff();var K=new g.default().retain(F.index).delete(F.length).insert("	");this.quill.updateContents(K,b.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(F.index+1,b.default.sources.SILENT)}},"list empty enter":{key:V.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(F,K){this.quill.format("list",!1,b.default.sources.USER),K.format.indent&&this.quill.format("indent",!1,b.default.sources.USER)}},"checklist enter":{key:V.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(F){var K=this.quill.getLine(F.index),G=o(K,2),Y=G[0],ae=G[1],he=(0,d.default)({},Y.formats(),{list:"checked"}),pe=new g.default().retain(F.index).insert(`
`,he).retain(Y.length()-ae-1).retain(1,{list:"unchecked"});this.quill.updateContents(pe,b.default.sources.USER),this.quill.setSelection(F.index+1,b.default.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:V.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(F,K){var G=this.quill.getLine(F.index),Y=o(G,2),ae=Y[0],he=Y[1],pe=new g.default().retain(F.index).insert(`
`,K.format).retain(ae.length()-he-1).retain(1,{header:null});this.quill.updateContents(pe,b.default.sources.USER),this.quill.setSelection(F.index+1,b.default.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(F,K){var G=K.prefix.length,Y=this.quill.getLine(F.index),ae=o(Y,2),he=ae[0],pe=ae[1];if(pe>G)return!0;var _e=void 0;switch(K.prefix.trim()){case"[]":case"[ ]":_e="unchecked";break;case"[x]":_e="checked";break;case"-":case"*":_e="bullet";break;default:_e="ordered"}this.quill.insertText(F.index," ",b.default.sources.USER),this.quill.history.cutoff();var Se=new g.default().retain(F.index-pe).delete(G+1).retain(he.length()-2-pe).retain(1,{list:_e});this.quill.updateContents(Se,b.default.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(F.index-G,b.default.sources.SILENT)}},"code exit":{key:V.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(F){var K=this.quill.getLine(F.index),G=o(K,2),Y=G[0],ae=G[1],he=new g.default().retain(F.index+Y.length()-ae-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(he,b.default.sources.USER)}},"embed left":J(V.keys.LEFT,!1),"embed left shift":J(V.keys.LEFT,!0),"embed right":J(V.keys.RIGHT,!1),"embed right shift":J(V.keys.RIGHT,!0)}};function J(C,F){var K,G=C===V.keys.LEFT?"prefix":"suffix";return K={key:C,shiftKey:F,altKey:null},E(K,G,/^$/),E(K,"handler",function(ae){var he=ae.index;C===V.keys.RIGHT&&(he+=ae.length+1);var pe=this.quill.getLeaf(he),_e=o(pe,1),Se=_e[0];return Se instanceof _.default.Embed?(C===V.keys.LEFT?F?this.quill.setSelection(ae.index-1,ae.length+1,b.default.sources.USER):this.quill.setSelection(ae.index-1,b.default.sources.USER):F?this.quill.setSelection(ae.index,ae.length+1,b.default.sources.USER):this.quill.setSelection(ae.index+ae.length+1,b.default.sources.USER),!1):!0}),K}function q(C,F){if(!(C.index===0||this.quill.getLength()<=1)){var K=this.quill.getLine(C.index),G=o(K,1),Y=G[0],ae={};if(F.offset===0){var he=this.quill.getLine(C.index-1),pe=o(he,1),_e=pe[0];if(_e!=null&&_e.length()>1){var Se=Y.formats(),_t=this.quill.getFormat(C.index-1,1);ae=m.default.attributes.diff(Se,_t)||{}}}var We=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(F.prefix)?2:1;this.quill.deleteText(C.index-We,We,b.default.sources.USER),Object.keys(ae).length>0&&this.quill.formatLine(C.index-We,We,ae,b.default.sources.USER),this.quill.focus()}}function M(C,F){var K=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(F.suffix)?2:1;if(!(C.index>=this.quill.getLength()-K)){var G={},Y=0,ae=this.quill.getLine(C.index),he=o(ae,1),pe=he[0];if(F.offset>=pe.length()-1){var _e=this.quill.getLine(C.index+1),Se=o(_e,1),_t=Se[0];if(_t){var We=pe.formats(),H=this.quill.getFormat(C.index,1);G=m.default.attributes.diff(We,H)||{},Y=_t.length()}}this.quill.deleteText(C.index,K,b.default.sources.USER),Object.keys(G).length>0&&this.quill.formatLine(C.index+Y-1,K,G,b.default.sources.USER)}}function O(C){var F=this.quill.getLines(C),K={};if(F.length>1){var G=F[0].formats(),Y=F[F.length-1].formats();K=m.default.attributes.diff(Y,G)||{}}this.quill.deleteText(C,b.default.sources.USER),Object.keys(K).length>0&&this.quill.formatLine(C.index,1,K,b.default.sources.USER),this.quill.setSelection(C.index,b.default.sources.SILENT),this.quill.focus()}function D(C,F){var K=this;C.length>0&&this.quill.scroll.deleteAt(C.index,C.length);var G=Object.keys(F.format).reduce(function(Y,ae){return _.default.query(ae,_.default.Scope.BLOCK)&&!Array.isArray(F.format[ae])&&(Y[ae]=F.format[ae]),Y},{});this.quill.insertText(C.index,`
`,G,b.default.sources.USER),this.quill.setSelection(C.index+1,b.default.sources.SILENT),this.quill.focus(),Object.keys(F.format).forEach(function(Y){G[Y]==null&&(Array.isArray(F.format[Y])||Y!=="link"&&K.quill.format(Y,F.format[Y],b.default.sources.USER))})}function P(C){return{key:V.keys.TAB,shiftKey:!C,format:{"code-block":!0},handler:function(K){var G=_.default.query("code-block"),Y=K.index,ae=K.length,he=this.quill.scroll.descendant(G,Y),pe=o(he,2),_e=pe[0],Se=pe[1];if(_e!=null){var _t=this.quill.getIndex(_e),We=_e.newlineIndex(Se,!0)+1,H=_e.newlineIndex(_t+Se+ae),W=_e.domNode.textContent.slice(We,H).split(`
`);Se=0,W.forEach(function(ie,se){C?(_e.insertAt(We+Se,G.TAB),Se+=G.TAB.length,se===0?Y+=G.TAB.length:ae+=G.TAB.length):ie.startsWith(G.TAB)&&(_e.deleteAt(We+Se,G.TAB.length),Se-=G.TAB.length,se===0?Y-=G.TAB.length:ae-=G.TAB.length),Se+=ie.length+1}),this.quill.update(b.default.sources.USER),this.quill.setSelection(Y,ae,b.default.sources.SILENT)}}}}function j(C){return{key:C[0].toUpperCase(),shortKey:!0,handler:function(K,G){this.quill.format(C,!G.format[C],b.default.sources.USER)}}}function B(C){if(typeof C=="string"||typeof C=="number")return B({key:C});if((typeof C>"u"?"undefined":s(C))==="object"&&(C=(0,u.default)(C,!1)),typeof C.key=="string")if(V.keys[C.key.toUpperCase()]!=null)C.key=V.keys[C.key.toUpperCase()];else if(C.key.length===1)C.key=C.key.toUpperCase().charCodeAt(0);else return null;return C.shortKey&&(C[U]=C.shortKey,delete C.shortKey),C}r.default=V,r.SHORTKEY=U},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function m(y,_){var p=[],b=!0,k=!1,S=void 0;try{for(var A=y[Symbol.iterator](),R;!(b=(R=A.next()).done)&&(p.push(R.value),!(_&&p.length===_));b=!0);}catch(T){k=!0,S=T}finally{try{!b&&A.return&&A.return()}finally{if(k)throw S}}return p}return function(y,_){if(Array.isArray(y))return y;if(Symbol.iterator in Object(y))return m(y,_);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function m(y,_,p){y===null&&(y=Function.prototype);var b=Object.getOwnPropertyDescriptor(y,_);if(b===void 0){var k=Object.getPrototypeOf(y);return k===null?void 0:m(k,_,p)}else{if("value"in b)return b.value;var S=b.get;return S===void 0?void 0:S.call(p)}},a=function(){function m(y,_){for(var p=0;p<_.length;p++){var b=_[p];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(y,b.key,b)}}return function(y,_,p){return _&&m(y.prototype,_),p&&m(y,p),y}}(),l=i(0),u=f(l),h=i(7),c=f(h);function f(m){return m&&m.__esModule?m:{default:m}}function d(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function w(m,y){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:m}function g(m,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);m.prototype=Object.create(y&&y.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(m,y):m.__proto__=y)}var v=function(m){g(y,m),a(y,null,[{key:"value",value:function(){}}]);function y(_,p){d(this,y);var b=w(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,_));return b.selection=p,b.textNode=document.createTextNode(y.CONTENTS),b.domNode.appendChild(b.textNode),b._length=0,b}return a(y,[{key:"detach",value:function(){this.parent!=null&&this.parent.removeChild(this)}},{key:"format",value:function(p,b){if(this._length!==0)return o(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"format",this).call(this,p,b);for(var k=this,S=0;k!=null&&k.statics.scope!==u.default.Scope.BLOCK_BLOT;)S+=k.offset(k.parent),k=k.parent;k!=null&&(this._length=y.CONTENTS.length,k.optimize(),k.formatAt(S,y.CONTENTS.length,p,b),this._length=0)}},{key:"index",value:function(p,b){return p===this.textNode?0:o(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"index",this).call(this,p,b)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){o(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!(this.selection.composing||this.parent==null)){var p=this.textNode,b=this.selection.getNativeRange(),k=void 0,S=void 0,A=void 0;if(b!=null&&b.start.node===p&&b.end.node===p){var R=[p,b.start.offset,b.end.offset];k=R[0],S=R[1],A=R[2]}for(;this.domNode.lastChild!=null&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==y.CONTENTS){var T=this.textNode.data.split(y.CONTENTS).join("");this.next instanceof c.default?(k=this.next.domNode,this.next.insertAt(0,T),this.textNode.data=y.CONTENTS):(this.textNode.data=T,this.parent.insertBefore(u.default.create(this.textNode),this),this.textNode=document.createTextNode(y.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),S!=null){var E=[S,A].map(function(N){return Math.max(0,Math.min(k.data.length,N-1))}),I=s(E,2);return S=I[0],A=I[1],{startNode:k,startOffset:S,endNode:k,endOffset:A}}}}},{key:"update",value:function(p,b){var k=this;if(p.some(function(A){return A.type==="characterData"&&A.target===k.textNode})){var S=this.restore();S&&(b.range=S)}}},{key:"value",value:function(){return""}}]),y}(u.default.Embed);v.blotName="cursor",v.className="ql-cursor",v.tagName="span",v.CONTENTS="\uFEFF",r.default=v},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=u(s),a=i(4),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(){return h(this,g),c(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return g}(o.default.Container);d.allowedChildren=[l.default,a.BlockEmbed,d],r.default=d},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.ColorStyle=r.ColorClass=r.ColorAttributor=void 0;var s=function(){function v(m,y){for(var _=0;_<y.length;_++){var p=y[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,y,_){return y&&v(m.prototype,y),_&&v(m,_),m}}(),o=function v(m,y,_){m===null&&(m=Function.prototype);var p=Object.getOwnPropertyDescriptor(m,y);if(p===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:v(b,y,_)}else{if("value"in p)return p.value;var k=p.get;return k===void 0?void 0:k.call(_)}},a=i(0),l=u(a);function u(v){return v&&v.__esModule?v:{default:v}}function h(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}function c(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:v}function f(v,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);v.prototype=Object.create(m&&m.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(v,m):v.__proto__=m)}var d=function(v){f(m,v);function m(){return h(this,m),c(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return s(m,[{key:"value",value:function(_){var p=o(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"value",this).call(this,_);return p.startsWith("rgb(")?(p=p.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+p.split(",").map(function(b){return("00"+parseInt(b).toString(16)).slice(-2)}).join("")):p}}]),m}(l.default.Attributor.Style),w=new l.default.Attributor.Class("color","ql-color",{scope:l.default.Scope.INLINE}),g=new d("color","color",{scope:l.default.Scope.INLINE});r.ColorAttributor=d,r.ColorClass=w,r.ColorStyle=g},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.sanitize=r.default=void 0;var s=function(){function g(v,m){for(var y=0;y<m.length;y++){var _=m[y];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,_.key,_)}}return function(v,m,y){return m&&g(v.prototype,m),y&&g(v,y),v}}(),o=function g(v,m,y){v===null&&(v=Function.prototype);var _=Object.getOwnPropertyDescriptor(v,m);if(_===void 0){var p=Object.getPrototypeOf(v);return p===null?void 0:g(p,m,y)}else{if("value"in _)return _.value;var b=_.get;return b===void 0?void 0:b.call(y)}},a=i(6),l=u(a);function u(g){return g&&g.__esModule?g:{default:g}}function h(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}function c(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:g}function f(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}var d=function(g){f(v,g);function v(){return h(this,v),c(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return s(v,[{key:"format",value:function(y,_){if(y!==this.statics.blotName||!_)return o(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"format",this).call(this,y,_);_=this.constructor.sanitize(_),this.domNode.setAttribute("href",_)}}],[{key:"create",value:function(y){var _=o(v.__proto__||Object.getPrototypeOf(v),"create",this).call(this,y);return y=this.sanitize(y),_.setAttribute("href",y),_.setAttribute("rel","noopener noreferrer"),_.setAttribute("target","_blank"),_}},{key:"formats",value:function(y){return y.getAttribute("href")}},{key:"sanitize",value:function(y){return w(y,this.PROTOCOL_WHITELIST)?y:this.SANITIZED_URL}}]),v}(l.default);d.blotName="link",d.tagName="A",d.SANITIZED_URL="about:blank",d.PROTOCOL_WHITELIST=["http","https","mailto","tel"];function w(g,v){var m=document.createElement("a");m.href=g;var y=m.href.slice(0,m.href.indexOf(":"));return v.indexOf(y)>-1}r.default=d,r.sanitize=w},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},o=function(){function v(m,y){for(var _=0;_<y.length;_++){var p=y[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,y,_){return y&&v(m.prototype,y),_&&v(m,_),m}}(),a=i(23),l=c(a),u=i(107),h=c(u);function c(v){return v&&v.__esModule?v:{default:v}}function f(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}var d=0;function w(v,m){v.setAttribute(m,v.getAttribute(m)!=="true")}var g=function(){function v(m){var y=this;f(this,v),this.select=m,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("mousedown",function(){y.togglePicker()}),this.label.addEventListener("keydown",function(_){switch(_.keyCode){case l.default.keys.ENTER:y.togglePicker();break;case l.default.keys.ESCAPE:y.escape(),_.preventDefault();break}}),this.select.addEventListener("change",this.update.bind(this))}return o(v,[{key:"togglePicker",value:function(){this.container.classList.toggle("ql-expanded"),w(this.label,"aria-expanded"),w(this.options,"aria-hidden")}},{key:"buildItem",value:function(y){var _=this,p=document.createElement("span");return p.tabIndex="0",p.setAttribute("role","button"),p.classList.add("ql-picker-item"),y.hasAttribute("value")&&p.setAttribute("data-value",y.getAttribute("value")),y.textContent&&p.setAttribute("data-label",y.textContent),p.addEventListener("click",function(){_.selectItem(p,!0)}),p.addEventListener("keydown",function(b){switch(b.keyCode){case l.default.keys.ENTER:_.selectItem(p,!0),b.preventDefault();break;case l.default.keys.ESCAPE:_.escape(),b.preventDefault();break}}),p}},{key:"buildLabel",value:function(){var y=document.createElement("span");return y.classList.add("ql-picker-label"),y.innerHTML=h.default,y.tabIndex="0",y.setAttribute("role","button"),y.setAttribute("aria-expanded","false"),this.container.appendChild(y),y}},{key:"buildOptions",value:function(){var y=this,_=document.createElement("span");_.classList.add("ql-picker-options"),_.setAttribute("aria-hidden","true"),_.tabIndex="-1",_.id="ql-picker-options-"+d,d+=1,this.label.setAttribute("aria-controls",_.id),this.options=_,[].slice.call(this.select.options).forEach(function(p){var b=y.buildItem(p);_.appendChild(b),p.selected===!0&&y.selectItem(b)}),this.container.appendChild(_)}},{key:"buildPicker",value:function(){var y=this;[].slice.call(this.select.attributes).forEach(function(_){y.container.setAttribute(_.name,_.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"escape",value:function(){var y=this;this.close(),setTimeout(function(){return y.label.focus()},1)}},{key:"close",value:function(){this.container.classList.remove("ql-expanded"),this.label.setAttribute("aria-expanded","false"),this.options.setAttribute("aria-hidden","true")}},{key:"selectItem",value:function(y){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=this.container.querySelector(".ql-selected");if(y!==p&&(p!=null&&p.classList.remove("ql-selected"),y!=null&&(y.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(y.parentNode.children,y),y.hasAttribute("data-value")?this.label.setAttribute("data-value",y.getAttribute("data-value")):this.label.removeAttribute("data-value"),y.hasAttribute("data-label")?this.label.setAttribute("data-label",y.getAttribute("data-label")):this.label.removeAttribute("data-label"),_))){if(typeof Event=="function")this.select.dispatchEvent(new Event("change"));else if((typeof Event>"u"?"undefined":s(Event))==="object"){var b=document.createEvent("Event");b.initEvent("change",!0,!0),this.select.dispatchEvent(b)}this.close()}}},{key:"update",value:function(){var y=void 0;if(this.select.selectedIndex>-1){var _=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];y=this.select.options[this.select.selectedIndex],this.selectItem(_)}else this.selectItem(null);var p=y!=null&&y!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",p)}}]),v}();r.default=g},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(0),o=L(s),a=i(5),l=L(a),u=i(4),h=L(u),c=i(16),f=L(c),d=i(25),w=L(d),g=i(24),v=L(g),m=i(35),y=L(m),_=i(6),p=L(_),b=i(22),k=L(b),S=i(7),A=L(S),R=i(55),T=L(R),E=i(42),I=L(E),N=i(23),x=L(N);function L(U){return U&&U.__esModule?U:{default:U}}l.default.register({"blots/block":h.default,"blots/block/embed":u.BlockEmbed,"blots/break":f.default,"blots/container":w.default,"blots/cursor":v.default,"blots/embed":y.default,"blots/inline":p.default,"blots/scroll":k.default,"blots/text":A.default,"modules/clipboard":T.default,"modules/history":I.default,"modules/keyboard":x.default}),o.default.register(h.default,f.default,v.default,p.default,k.default,A.default),r.default=l.default},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(1),o=function(){function a(l){this.domNode=l,this.domNode[s.DATA_KEY]={blot:this}}return Object.defineProperty(a.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),a.create=function(l){if(this.tagName==null)throw new s.ParchmentError("Blot definition missing tagName");var u;return Array.isArray(this.tagName)?(typeof l=="string"&&(l=l.toUpperCase(),parseInt(l).toString()===l&&(l=parseInt(l))),typeof l=="number"?u=document.createElement(this.tagName[l-1]):this.tagName.indexOf(l)>-1?u=document.createElement(l):u=document.createElement(this.tagName[0])):u=document.createElement(this.tagName),this.className&&u.classList.add(this.className),u},a.prototype.attach=function(){this.parent!=null&&(this.scroll=this.parent.scroll)},a.prototype.clone=function(){var l=this.domNode.cloneNode(!1);return s.create(l)},a.prototype.detach=function(){this.parent!=null&&this.parent.removeChild(this),delete this.domNode[s.DATA_KEY]},a.prototype.deleteAt=function(l,u){var h=this.isolate(l,u);h.remove()},a.prototype.formatAt=function(l,u,h,c){var f=this.isolate(l,u);if(s.query(h,s.Scope.BLOT)!=null&&c)f.wrap(h,c);else if(s.query(h,s.Scope.ATTRIBUTE)!=null){var d=s.create(this.statics.scope);f.wrap(d),d.format(h,c)}},a.prototype.insertAt=function(l,u,h){var c=h==null?s.create("text",u):s.create(u,h),f=this.split(l);this.parent.insertBefore(c,f)},a.prototype.insertInto=function(l,u){u===void 0&&(u=null),this.parent!=null&&this.parent.children.remove(this);var h=null;l.children.insertBefore(this,u),u!=null&&(h=u.domNode),(this.domNode.parentNode!=l.domNode||this.domNode.nextSibling!=h)&&l.domNode.insertBefore(this.domNode,h),this.parent=l,this.attach()},a.prototype.isolate=function(l,u){var h=this.split(l);return h.split(u),h},a.prototype.length=function(){return 1},a.prototype.offset=function(l){return l===void 0&&(l=this.parent),this.parent==null||this==l?0:this.parent.children.offset(this)+this.parent.offset(l)},a.prototype.optimize=function(l){this.domNode[s.DATA_KEY]!=null&&delete this.domNode[s.DATA_KEY].mutations},a.prototype.remove=function(){this.domNode.parentNode!=null&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},a.prototype.replace=function(l){l.parent!=null&&(l.parent.insertBefore(this,l.next),l.remove())},a.prototype.replaceWith=function(l,u){var h=typeof l=="string"?s.create(l,u):l;return h.replace(this),h},a.prototype.split=function(l,u){return l===0?this:this.next},a.prototype.update=function(l,u){},a.prototype.wrap=function(l,u){var h=typeof l=="string"?s.create(l,u):l;return this.parent!=null&&this.parent.insertBefore(h,this.next),h.appendChild(this),h},a.blotName="abstract",a}();r.default=o},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(12),o=i(32),a=i(33),l=i(1),u=function(){function h(c){this.attributes={},this.domNode=c,this.build()}return h.prototype.attribute=function(c,f){f?c.add(this.domNode,f)&&(c.value(this.domNode)!=null?this.attributes[c.attrName]=c:delete this.attributes[c.attrName]):(c.remove(this.domNode),delete this.attributes[c.attrName])},h.prototype.build=function(){var c=this;this.attributes={};var f=s.default.keys(this.domNode),d=o.default.keys(this.domNode),w=a.default.keys(this.domNode);f.concat(d).concat(w).forEach(function(g){var v=l.query(g,l.Scope.ATTRIBUTE);v instanceof s.default&&(c.attributes[v.attrName]=v)})},h.prototype.copy=function(c){var f=this;Object.keys(this.attributes).forEach(function(d){var w=f.attributes[d].value(f.domNode);c.format(d,w)})},h.prototype.move=function(c){var f=this;this.copy(c),Object.keys(this.attributes).forEach(function(d){f.attributes[d].remove(f.domNode)}),this.attributes={}},h.prototype.values=function(){var c=this;return Object.keys(this.attributes).reduce(function(f,d){return f[d]=c.attributes[d].value(c.domNode),f},{})},h}();r.default=u},function(t,r,i){var s=this&&this.__extends||function(){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,c){h.__proto__=c}||function(h,c){for(var f in c)c.hasOwnProperty(f)&&(h[f]=c[f])};return function(h,c){u(h,c);function f(){this.constructor=h}h.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(12);function a(u,h){var c=u.getAttribute("class")||"";return c.split(/\s+/).filter(function(f){return f.indexOf(h+"-")===0})}var l=function(u){s(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.keys=function(c){return(c.getAttribute("class")||"").split(/\s+/).map(function(f){return f.split("-").slice(0,-1).join("-")})},h.prototype.add=function(c,f){return this.canAdd(c,f)?(this.remove(c),c.classList.add(this.keyName+"-"+f),!0):!1},h.prototype.remove=function(c){var f=a(c,this.keyName);f.forEach(function(d){c.classList.remove(d)}),c.classList.length===0&&c.removeAttribute("class")},h.prototype.value=function(c){var f=a(c,this.keyName)[0]||"",d=f.slice(this.keyName.length+1);return this.canAdd(c,d)?d:""},h}(o.default);r.default=l},function(t,r,i){var s=this&&this.__extends||function(){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,c){h.__proto__=c}||function(h,c){for(var f in c)c.hasOwnProperty(f)&&(h[f]=c[f])};return function(h,c){u(h,c);function f(){this.constructor=h}h.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(12);function a(u){var h=u.split("-"),c=h.slice(1).map(function(f){return f[0].toUpperCase()+f.slice(1)}).join("");return h[0]+c}var l=function(u){s(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.keys=function(c){return(c.getAttribute("style")||"").split(";").map(function(f){var d=f.split(":");return d[0].trim()})},h.prototype.add=function(c,f){return this.canAdd(c,f)?(c.style[a(this.keyName)]=f,!0):!1},h.prototype.remove=function(c){c.style[a(this.keyName)]="",c.getAttribute("style")||c.removeAttribute("style")},h.prototype.value=function(c){var f=c.style[a(this.keyName)];return this.canAdd(c,f)?f:""},h}(o.default);r.default=l},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function l(u,h){for(var c=0;c<h.length;c++){var f=h[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,h,c){return h&&l(u.prototype,h),c&&l(u,c),u}}();function o(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}var a=function(){function l(u,h){o(this,l),this.quill=u,this.options=h,this.modules={}}return s(l,[{key:"init",value:function(){var h=this;Object.keys(this.options.modules).forEach(function(c){h.modules[c]==null&&h.addModule(c)})}},{key:"addModule",value:function(h){var c=this.quill.constructor.import("modules/"+h);return this.modules[h]=new c(this.quill,this.options.modules[h]||{}),this.modules[h]}}]),l}();a.DEFAULTS={modules:{}},a.themes={default:a},r.default=a},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function m(y,_){for(var p=0;p<_.length;p++){var b=_[p];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(y,b.key,b)}}return function(y,_,p){return _&&m(y.prototype,_),p&&m(y,p),y}}(),o=function m(y,_,p){y===null&&(y=Function.prototype);var b=Object.getOwnPropertyDescriptor(y,_);if(b===void 0){var k=Object.getPrototypeOf(y);return k===null?void 0:m(k,_,p)}else{if("value"in b)return b.value;var S=b.get;return S===void 0?void 0:S.call(p)}},a=i(0),l=c(a),u=i(7),h=c(u);function c(m){return m&&m.__esModule?m:{default:m}}function f(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function d(m,y){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:m}function w(m,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);m.prototype=Object.create(y&&y.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(m,y):m.__proto__=y)}var g="\uFEFF",v=function(m){w(y,m);function y(_){f(this,y);var p=d(this,(y.__proto__||Object.getPrototypeOf(y)).call(this,_));return p.contentNode=document.createElement("span"),p.contentNode.setAttribute("contenteditable",!1),[].slice.call(p.domNode.childNodes).forEach(function(b){p.contentNode.appendChild(b)}),p.leftGuard=document.createTextNode(g),p.rightGuard=document.createTextNode(g),p.domNode.appendChild(p.leftGuard),p.domNode.appendChild(p.contentNode),p.domNode.appendChild(p.rightGuard),p}return s(y,[{key:"index",value:function(p,b){return p===this.leftGuard?0:p===this.rightGuard?1:o(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"index",this).call(this,p,b)}},{key:"restore",value:function(p){var b=void 0,k=void 0,S=p.data.split(g).join("");if(p===this.leftGuard)if(this.prev instanceof h.default){var A=this.prev.length();this.prev.insertAt(A,S),b={startNode:this.prev.domNode,startOffset:A+S.length}}else k=document.createTextNode(S),this.parent.insertBefore(l.default.create(k),this),b={startNode:k,startOffset:S.length};else p===this.rightGuard&&(this.next instanceof h.default?(this.next.insertAt(0,S),b={startNode:this.next.domNode,startOffset:S.length}):(k=document.createTextNode(S),this.parent.insertBefore(l.default.create(k),this.next),b={startNode:k,startOffset:S.length}));return p.data=g,b}},{key:"update",value:function(p,b){var k=this;p.forEach(function(S){if(S.type==="characterData"&&(S.target===k.leftGuard||S.target===k.rightGuard)){var A=k.restore(S.target);A&&(b.range=A)}})}}]),y}(l.default.Embed);r.default=v},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.AlignStyle=r.AlignClass=r.AlignAttribute=void 0;var s=i(0),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}var l={scope:o.default.Scope.BLOCK,whitelist:["right","center","justify"]},u=new o.default.Attributor.Attribute("align","align",l),h=new o.default.Attributor.Class("align","ql-align",l),c=new o.default.Attributor.Style("align","text-align",l);r.AlignAttribute=u,r.AlignClass=h,r.AlignStyle=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.BackgroundStyle=r.BackgroundClass=void 0;var s=i(0),o=l(s),a=i(26);function l(c){return c&&c.__esModule?c:{default:c}}var u=new o.default.Attributor.Class("background","ql-bg",{scope:o.default.Scope.INLINE}),h=new a.ColorAttributor("background","background-color",{scope:o.default.Scope.INLINE});r.BackgroundClass=u,r.BackgroundStyle=h},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.DirectionStyle=r.DirectionClass=r.DirectionAttribute=void 0;var s=i(0),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}var l={scope:o.default.Scope.BLOCK,whitelist:["rtl"]},u=new o.default.Attributor.Attribute("direction","dir",l),h=new o.default.Attributor.Class("direction","ql-direction",l),c=new o.default.Attributor.Style("direction","direction",l);r.DirectionAttribute=u,r.DirectionClass=h,r.DirectionStyle=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.FontClass=r.FontStyle=void 0;var s=function(){function m(y,_){for(var p=0;p<_.length;p++){var b=_[p];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(y,b.key,b)}}return function(y,_,p){return _&&m(y.prototype,_),p&&m(y,p),y}}(),o=function m(y,_,p){y===null&&(y=Function.prototype);var b=Object.getOwnPropertyDescriptor(y,_);if(b===void 0){var k=Object.getPrototypeOf(y);return k===null?void 0:m(k,_,p)}else{if("value"in b)return b.value;var S=b.get;return S===void 0?void 0:S.call(p)}},a=i(0),l=u(a);function u(m){return m&&m.__esModule?m:{default:m}}function h(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function c(m,y){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y&&(typeof y=="object"||typeof y=="function")?y:m}function f(m,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof y);m.prototype=Object.create(y&&y.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),y&&(Object.setPrototypeOf?Object.setPrototypeOf(m,y):m.__proto__=y)}var d={scope:l.default.Scope.INLINE,whitelist:["serif","monospace"]},w=new l.default.Attributor.Class("font","ql-font",d),g=function(m){f(y,m);function y(){return h(this,y),c(this,(y.__proto__||Object.getPrototypeOf(y)).apply(this,arguments))}return s(y,[{key:"value",value:function(p){return o(y.prototype.__proto__||Object.getPrototypeOf(y.prototype),"value",this).call(this,p).replace(/["']/g,"")}}]),y}(l.default.Attributor.Style),v=new g("font","font-family",d);r.FontStyle=v,r.FontClass=w},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.SizeStyle=r.SizeClass=void 0;var s=i(0),o=a(s);function a(h){return h&&h.__esModule?h:{default:h}}var l=new o.default.Attributor.Class("size","ql-size",{scope:o.default.Scope.INLINE,whitelist:["small","large","huge"]}),u=new o.default.Attributor.Style("size","font-size",{scope:o.default.Scope.INLINE,whitelist:["10px","18px","32px"]});r.SizeClass=l,r.SizeStyle=u},function(t,r,i){t.exports={align:{"":i(76),center:i(77),right:i(78),justify:i(79)},background:i(80),blockquote:i(81),bold:i(82),clean:i(83),code:i(58),"code-block":i(58),color:i(84),direction:{"":i(85),rtl:i(86)},float:{center:i(87),full:i(88),left:i(89),right:i(90)},formula:i(91),header:{1:i(92),2:i(93)},italic:i(94),image:i(95),indent:{"+1":i(96),"-1":i(97)},link:i(98),list:{ordered:i(99),bullet:i(100),check:i(101)},script:{sub:i(102),super:i(103)},strike:i(104),underline:i(105),video:i(106)}},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.getLastChangeIndex=r.default=void 0;var s=function(){function _(p,b){for(var k=0;k<b.length;k++){var S=b[k];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(p,S.key,S)}}return function(p,b,k){return b&&_(p.prototype,b),k&&_(p,k),p}}(),o=i(0),a=f(o),l=i(5),u=f(l),h=i(9),c=f(h);function f(_){return _&&_.__esModule?_:{default:_}}function d(_,p){if(!(_ instanceof p))throw new TypeError("Cannot call a class as a function")}function w(_,p){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:_}function g(_,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);_.prototype=Object.create(p&&p.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(_,p):_.__proto__=p)}var v=function(_){g(p,_);function p(b,k){d(this,p);var S=w(this,(p.__proto__||Object.getPrototypeOf(p)).call(this,b,k));return S.lastRecorded=0,S.ignoreChange=!1,S.clear(),S.quill.on(u.default.events.EDITOR_CHANGE,function(A,R,T,E){A!==u.default.events.TEXT_CHANGE||S.ignoreChange||(!S.options.userOnly||E===u.default.sources.USER?S.record(R,T):S.transform(R))}),S.quill.keyboard.addBinding({key:"Z",shortKey:!0},S.undo.bind(S)),S.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},S.redo.bind(S)),/Win/i.test(navigator.platform)&&S.quill.keyboard.addBinding({key:"Y",shortKey:!0},S.redo.bind(S)),S}return s(p,[{key:"change",value:function(k,S){if(this.stack[k].length!==0){var A=this.stack[k].pop();this.stack[S].push(A),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(A[k],u.default.sources.USER),this.ignoreChange=!1;var R=y(A[k]);this.quill.setSelection(R)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(k,S){if(k.ops.length!==0){this.stack.redo=[];var A=this.quill.getContents().diff(S),R=Date.now();if(this.lastRecorded+this.options.delay>R&&this.stack.undo.length>0){var T=this.stack.undo.pop();A=A.compose(T.undo),k=T.redo.compose(k)}else this.lastRecorded=R;this.stack.undo.push({redo:k,undo:A}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(k){this.stack.undo.forEach(function(S){S.undo=k.transform(S.undo,!0),S.redo=k.transform(S.redo,!0)}),this.stack.redo.forEach(function(S){S.undo=k.transform(S.undo,!0),S.redo=k.transform(S.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),p}(c.default);v.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};function m(_){var p=_.ops[_.ops.length-1];return p==null?!1:p.insert!=null?typeof p.insert=="string"&&p.insert.endsWith(`
`):p.attributes!=null?Object.keys(p.attributes).some(function(b){return a.default.query(b,a.default.Scope.BLOCK)!=null}):!1}function y(_){var p=_.reduce(function(k,S){return k+=S.delete||0,k},0),b=_.length()-p;return m(_)&&(b-=1),b}r.default=v,r.getLastChangeIndex=y},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.BaseTooltip=void 0;var s=function(){function D(P,j){for(var B=0;B<j.length;B++){var C=j[B];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(P,C.key,C)}}return function(P,j,B){return j&&D(P.prototype,j),B&&D(P,B),P}}(),o=function D(P,j,B){P===null&&(P=Function.prototype);var C=Object.getOwnPropertyDescriptor(P,j);if(C===void 0){var F=Object.getPrototypeOf(P);return F===null?void 0:D(F,j,B)}else{if("value"in C)return C.value;var K=C.get;return K===void 0?void 0:K.call(B)}},a=i(3),l=R(a),u=i(2),h=R(u),c=i(8),f=R(c),d=i(23),w=R(d),g=i(34),v=R(g),m=i(59),y=R(m),_=i(60),p=R(_),b=i(28),k=R(b),S=i(61),A=R(S);function R(D){return D&&D.__esModule?D:{default:D}}function T(D,P){if(!(D instanceof P))throw new TypeError("Cannot call a class as a function")}function E(D,P){if(!D)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P&&(typeof P=="object"||typeof P=="function")?P:D}function I(D,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);D.prototype=Object.create(P&&P.prototype,{constructor:{value:D,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(D,P):D.__proto__=P)}var N=[!1,"center","right","justify"],x=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],L=[!1,"serif","monospace"],U=["1","2","3",!1],V=["small",!1,"large","huge"],J=function(D){I(P,D);function P(j,B){T(this,P);var C=E(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,j,B)),F=function K(G){if(!document.body.contains(j.root))return document.body.removeEventListener("click",K);C.tooltip!=null&&!C.tooltip.root.contains(G.target)&&document.activeElement!==C.tooltip.textbox&&!C.quill.hasFocus()&&C.tooltip.hide(),C.pickers!=null&&C.pickers.forEach(function(Y){Y.container.contains(G.target)||Y.close()})};return j.emitter.listenDOM("click",document.body,F),C}return s(P,[{key:"addModule",value:function(B){var C=o(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"addModule",this).call(this,B);return B==="toolbar"&&this.extendToolbar(C),C}},{key:"buildButtons",value:function(B,C){B.forEach(function(F){var K=F.getAttribute("class")||"";K.split(/\s+/).forEach(function(G){if(G.startsWith("ql-")&&(G=G.slice(3),C[G]!=null))if(G==="direction")F.innerHTML=C[G][""]+C[G].rtl;else if(typeof C[G]=="string")F.innerHTML=C[G];else{var Y=F.value||"";Y!=null&&C[G][Y]&&(F.innerHTML=C[G][Y])}})})}},{key:"buildPickers",value:function(B,C){var F=this;this.pickers=B.map(function(G){if(G.classList.contains("ql-align"))return G.querySelector("option")==null&&O(G,N),new p.default(G,C.align);if(G.classList.contains("ql-background")||G.classList.contains("ql-color")){var Y=G.classList.contains("ql-background")?"background":"color";return G.querySelector("option")==null&&O(G,x,Y==="background"?"#ffffff":"#000000"),new y.default(G,C[Y])}else return G.querySelector("option")==null&&(G.classList.contains("ql-font")?O(G,L):G.classList.contains("ql-header")?O(G,U):G.classList.contains("ql-size")&&O(G,V)),new k.default(G)});var K=function(){F.pickers.forEach(function(Y){Y.update()})};this.quill.on(f.default.events.EDITOR_CHANGE,K)}}]),P}(v.default);J.DEFAULTS=(0,l.default)(!0,{},v.default.DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var P=this,j=this.container.querySelector("input.ql-image[type=file]");j==null&&(j=document.createElement("input"),j.setAttribute("type","file"),j.setAttribute("accept","image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),j.classList.add("ql-image"),j.addEventListener("change",function(){if(j.files!=null&&j.files[0]!=null){var B=new FileReader;B.onload=function(C){var F=P.quill.getSelection(!0);P.quill.updateContents(new h.default().retain(F.index).delete(F.length).insert({image:C.target.result}),f.default.sources.USER),P.quill.setSelection(F.index+1,f.default.sources.SILENT),j.value=""},B.readAsDataURL(j.files[0])}}),this.container.appendChild(j)),j.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var q=function(D){I(P,D);function P(j,B){T(this,P);var C=E(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,j,B));return C.textbox=C.root.querySelector('input[type="text"]'),C.listen(),C}return s(P,[{key:"listen",value:function(){var B=this;this.textbox.addEventListener("keydown",function(C){w.default.match(C,"enter")?(B.save(),C.preventDefault()):w.default.match(C,"escape")&&(B.cancel(),C.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var B=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"link",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),C!=null?this.textbox.value=C:B!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+B)||""),this.root.setAttribute("data-mode",B)}},{key:"restoreFocus",value:function(){var B=this.quill.scrollingContainer.scrollTop;this.quill.focus(),this.quill.scrollingContainer.scrollTop=B}},{key:"save",value:function(){var B=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":{var C=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",B,f.default.sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",B,f.default.sources.USER)),this.quill.root.scrollTop=C;break}case"video":B=M(B);case"formula":{if(!B)break;var F=this.quill.getSelection(!0);if(F!=null){var K=F.index+F.length;this.quill.insertEmbed(K,this.root.getAttribute("data-mode"),B,f.default.sources.USER),this.root.getAttribute("data-mode")==="formula"&&this.quill.insertText(K+1," ",f.default.sources.USER),this.quill.setSelection(K+2,f.default.sources.USER)}break}}this.textbox.value="",this.hide()}}]),P}(A.default);function M(D){var P=D.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||D.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);return P?(P[1]||"https")+"://www.youtube.com/embed/"+P[2]+"?showinfo=0":(P=D.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))?(P[1]||"https")+"://player.vimeo.com/video/"+P[2]+"/":D}function O(D,P){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;P.forEach(function(B){var C=document.createElement("option");B===j?C.setAttribute("selected","selected"):C.setAttribute("value",B),D.appendChild(C)})}r.BaseTooltip=q,r.default=J},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function o(){this.head=this.tail=null,this.length=0}return o.prototype.append=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];this.insertBefore(a[0],null),a.length>1&&this.append.apply(this,a.slice(1))},o.prototype.contains=function(a){for(var l,u=this.iterator();l=u();)if(l===a)return!0;return!1},o.prototype.insertBefore=function(a,l){a&&(a.next=l,l!=null?(a.prev=l.prev,l.prev!=null&&(l.prev.next=a),l.prev=a,l===this.head&&(this.head=a)):this.tail!=null?(this.tail.next=a,a.prev=this.tail,this.tail=a):(a.prev=null,this.head=this.tail=a),this.length+=1)},o.prototype.offset=function(a){for(var l=0,u=this.head;u!=null;){if(u===a)return l;l+=u.length(),u=u.next}return-1},o.prototype.remove=function(a){this.contains(a)&&(a.prev!=null&&(a.prev.next=a.next),a.next!=null&&(a.next.prev=a.prev),a===this.head&&(this.head=a.next),a===this.tail&&(this.tail=a.prev),this.length-=1)},o.prototype.iterator=function(a){return a===void 0&&(a=this.head),function(){var l=a;return a!=null&&(a=a.next),l}},o.prototype.find=function(a,l){l===void 0&&(l=!1);for(var u,h=this.iterator();u=h();){var c=u.length();if(a<c||l&&a===c&&(u.next==null||u.next.length()!==0))return[u,a];a-=c}return[null,0]},o.prototype.forEach=function(a){for(var l,u=this.iterator();l=u();)a(l)},o.prototype.forEachAt=function(a,l,u){if(!(l<=0))for(var h=this.find(a),c=h[0],f=h[1],d,w=a-f,g=this.iterator(c);(d=g())&&w<a+l;){var v=d.length();a>w?u(d,a-w,Math.min(l,w+v-a)):u(d,0,Math.min(v,a+l-w)),w+=v}},o.prototype.map=function(a){return this.reduce(function(l,u){return l.push(a(u)),l},[])},o.prototype.reduce=function(a,l){for(var u,h=this.iterator();u=h();)l=a(l,u);return l},o}();r.default=s},function(t,r,i){var s=this&&this.__extends||function(){var c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,d){f.__proto__=d}||function(f,d){for(var w in d)d.hasOwnProperty(w)&&(f[w]=d[w])};return function(f,d){c(f,d);function w(){this.constructor=f}f.prototype=d===null?Object.create(d):(w.prototype=d.prototype,new w)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(17),a=i(1),l={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},u=100,h=function(c){s(f,c);function f(d){var w=c.call(this,d)||this;return w.scroll=w,w.observer=new MutationObserver(function(g){w.update(g)}),w.observer.observe(w.domNode,l),w.attach(),w}return f.prototype.detach=function(){c.prototype.detach.call(this),this.observer.disconnect()},f.prototype.deleteAt=function(d,w){this.update(),d===0&&w===this.length()?this.children.forEach(function(g){g.remove()}):c.prototype.deleteAt.call(this,d,w)},f.prototype.formatAt=function(d,w,g,v){this.update(),c.prototype.formatAt.call(this,d,w,g,v)},f.prototype.insertAt=function(d,w,g){this.update(),c.prototype.insertAt.call(this,d,w,g)},f.prototype.optimize=function(d,w){var g=this;d===void 0&&(d=[]),w===void 0&&(w={}),c.prototype.optimize.call(this,w);for(var v=[].slice.call(this.observer.takeRecords());v.length>0;)d.push(v.pop());for(var m=function(b,k){k===void 0&&(k=!0),!(b==null||b===g)&&b.domNode.parentNode!=null&&(b.domNode[a.DATA_KEY].mutations==null&&(b.domNode[a.DATA_KEY].mutations=[]),k&&m(b.parent))},y=function(b){b.domNode[a.DATA_KEY]==null||b.domNode[a.DATA_KEY].mutations==null||(b instanceof o.default&&b.children.forEach(y),b.optimize(w))},_=d,p=0;_.length>0;p+=1){if(p>=u)throw new Error("[Parchment] Maximum optimize iterations reached");for(_.forEach(function(b){var k=a.find(b.target,!0);k!=null&&(k.domNode===b.target&&(b.type==="childList"?(m(a.find(b.previousSibling,!1)),[].forEach.call(b.addedNodes,function(S){var A=a.find(S,!1);m(A,!1),A instanceof o.default&&A.children.forEach(function(R){m(R,!1)})})):b.type==="attributes"&&m(k.prev)),m(k))}),this.children.forEach(y),_=[].slice.call(this.observer.takeRecords()),v=_.slice();v.length>0;)d.push(v.pop())}},f.prototype.update=function(d,w){var g=this;w===void 0&&(w={}),d=d||this.observer.takeRecords(),d.map(function(v){var m=a.find(v.target,!0);return m==null?null:m.domNode[a.DATA_KEY].mutations==null?(m.domNode[a.DATA_KEY].mutations=[v],m):(m.domNode[a.DATA_KEY].mutations.push(v),null)}).forEach(function(v){v==null||v===g||v.domNode[a.DATA_KEY]==null||v.update(v.domNode[a.DATA_KEY].mutations||[],w)}),this.domNode[a.DATA_KEY].mutations!=null&&c.prototype.update.call(this,this.domNode[a.DATA_KEY].mutations,w),this.optimize(d,w)},f.blotName="scroll",f.defaultChild="block",f.scope=a.Scope.BLOCK_BLOT,f.tagName="DIV",f}(o.default);r.default=h},function(t,r,i){var s=this&&this.__extends||function(){var h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,f){c.__proto__=f}||function(c,f){for(var d in f)f.hasOwnProperty(d)&&(c[d]=f[d])};return function(c,f){h(c,f);function d(){this.constructor=c}c.prototype=f===null?Object.create(f):(d.prototype=f.prototype,new d)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(18),a=i(1);function l(h,c){if(Object.keys(h).length!==Object.keys(c).length)return!1;for(var f in h)if(h[f]!==c[f])return!1;return!0}var u=function(h){s(c,h);function c(){return h!==null&&h.apply(this,arguments)||this}return c.formats=function(f){if(f.tagName!==c.tagName)return h.formats.call(this,f)},c.prototype.format=function(f,d){var w=this;f===this.statics.blotName&&!d?(this.children.forEach(function(g){g instanceof o.default||(g=g.wrap(c.blotName,!0)),w.attributes.copy(g)}),this.unwrap()):h.prototype.format.call(this,f,d)},c.prototype.formatAt=function(f,d,w,g){if(this.formats()[w]!=null||a.query(w,a.Scope.ATTRIBUTE)){var v=this.isolate(f,d);v.format(w,g)}else h.prototype.formatAt.call(this,f,d,w,g)},c.prototype.optimize=function(f){h.prototype.optimize.call(this,f);var d=this.formats();if(Object.keys(d).length===0)return this.unwrap();var w=this.next;w instanceof c&&w.prev===this&&l(d,w.formats())&&(w.moveChildren(this),w.remove())},c.blotName="inline",c.scope=a.Scope.INLINE_BLOT,c.tagName="SPAN",c}(o.default);r.default=u},function(t,r,i){var s=this&&this.__extends||function(){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,c){h.__proto__=c}||function(h,c){for(var f in c)c.hasOwnProperty(f)&&(h[f]=c[f])};return function(h,c){u(h,c);function f(){this.constructor=h}h.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(18),a=i(1),l=function(u){s(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.formats=function(c){var f=a.query(h.blotName).tagName;if(c.tagName!==f)return u.formats.call(this,c)},h.prototype.format=function(c,f){a.query(c,a.Scope.BLOCK)!=null&&(c===this.statics.blotName&&!f?this.replaceWith(h.blotName):u.prototype.format.call(this,c,f))},h.prototype.formatAt=function(c,f,d,w){a.query(d,a.Scope.BLOCK)!=null?this.format(d,w):u.prototype.formatAt.call(this,c,f,d,w)},h.prototype.insertAt=function(c,f,d){if(d==null||a.query(f,a.Scope.INLINE)!=null)u.prototype.insertAt.call(this,c,f,d);else{var w=this.split(c),g=a.create(f,d);w.parent.insertBefore(g,w)}},h.prototype.update=function(c,f){navigator.userAgent.match(/Trident/)?this.build():u.prototype.update.call(this,c,f)},h.blotName="block",h.scope=a.Scope.BLOCK_BLOT,h.tagName="P",h}(o.default);r.default=l},function(t,r,i){var s=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var c in h)h.hasOwnProperty(c)&&(u[c]=h[c])};return function(u,h){l(u,h);function c(){this.constructor=u}u.prototype=h===null?Object.create(h):(c.prototype=h.prototype,new c)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(19),a=function(l){s(u,l);function u(){return l!==null&&l.apply(this,arguments)||this}return u.formats=function(h){},u.prototype.format=function(h,c){l.prototype.formatAt.call(this,0,this.length(),h,c)},u.prototype.formatAt=function(h,c,f,d){h===0&&c===this.length()?this.format(f,d):l.prototype.formatAt.call(this,h,c,f,d)},u.prototype.formats=function(){return this.statics.formats(this.domNode)},u}(o.default);r.default=a},function(t,r,i){var s=this&&this.__extends||function(){var u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,c){h.__proto__=c}||function(h,c){for(var f in c)c.hasOwnProperty(f)&&(h[f]=c[f])};return function(h,c){u(h,c);function f(){this.constructor=h}h.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=i(19),a=i(1),l=function(u){s(h,u);function h(c){var f=u.call(this,c)||this;return f.text=f.statics.value(f.domNode),f}return h.create=function(c){return document.createTextNode(c)},h.value=function(c){var f=c.data;return f.normalize&&(f=f.normalize()),f},h.prototype.deleteAt=function(c,f){this.domNode.data=this.text=this.text.slice(0,c)+this.text.slice(c+f)},h.prototype.index=function(c,f){return this.domNode===c?f:-1},h.prototype.insertAt=function(c,f,d){d==null?(this.text=this.text.slice(0,c)+f+this.text.slice(c),this.domNode.data=this.text):u.prototype.insertAt.call(this,c,f,d)},h.prototype.length=function(){return this.text.length},h.prototype.optimize=function(c){u.prototype.optimize.call(this,c),this.text=this.statics.value(this.domNode),this.text.length===0?this.remove():this.next instanceof h&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},h.prototype.position=function(c,f){return[this.domNode,c]},h.prototype.split=function(c,f){if(f===void 0&&(f=!1),!f){if(c===0)return this;if(c===this.length())return this.next}var d=a.create(this.domNode.splitText(c));return this.parent.insertBefore(d,this.next),this.text=this.statics.value(this.domNode),d},h.prototype.update=function(c,f){var d=this;c.some(function(w){return w.type==="characterData"&&w.target===d.domNode})&&(this.text=this.statics.value(this.domNode))},h.prototype.value=function(){return this.text},h.blotName="text",h.scope=a.Scope.INLINE_BLOT,h}(o.default);r.default=l},function(t,r,i){var s=document.createElement("div");if(s.classList.toggle("test-class",!1),s.classList.contains("test-class")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,l){return arguments.length>1&&!this.contains(a)==!l?l:o.call(this,a)}}String.prototype.startsWith||(String.prototype.startsWith=function(a,l){return l=l||0,this.substr(l,a.length)===a}),String.prototype.endsWith||(String.prototype.endsWith=function(a,l){var u=this.toString();(typeof l!="number"||!isFinite(l)||Math.floor(l)!==l||l>u.length)&&(l=u.length),l-=a.length;var h=u.indexOf(a,l);return h!==-1&&h===l}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(l){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof l!="function")throw new TypeError("predicate must be a function");for(var u=Object(this),h=u.length>>>0,c=arguments[1],f,d=0;d<h;d++)if(f=u[d],l.call(c,f,d,u))return f}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)})},function(t,r){var i=-1,s=1,o=0;function a(p,b,k){if(p==b)return p?[[o,p]]:[];(k<0||p.length<k)&&(k=null);var S=c(p,b),A=p.substring(0,S);p=p.substring(S),b=b.substring(S),S=f(p,b);var R=p.substring(p.length-S);p=p.substring(0,p.length-S),b=b.substring(0,b.length-S);var T=l(p,b);return A&&T.unshift([o,A]),R&&T.push([o,R]),w(T),k!=null&&(T=m(T,k)),T=y(T),T}function l(p,b){var k;if(!p)return[[s,b]];if(!b)return[[i,p]];var S=p.length>b.length?p:b,A=p.length>b.length?b:p,R=S.indexOf(A);if(R!=-1)return k=[[s,S.substring(0,R)],[o,A],[s,S.substring(R+A.length)]],p.length>b.length&&(k[0][0]=k[2][0]=i),k;if(A.length==1)return[[i,p],[s,b]];var T=d(p,b);if(T){var E=T[0],I=T[1],N=T[2],x=T[3],L=T[4],U=a(E,N),V=a(I,x);return U.concat([[o,L]],V)}return u(p,b)}function u(p,b){for(var k=p.length,S=b.length,A=Math.ceil((k+S)/2),R=A,T=2*A,E=new Array(T),I=new Array(T),N=0;N<T;N++)E[N]=-1,I[N]=-1;E[R+1]=0,I[R+1]=0;for(var x=k-S,L=x%2!=0,U=0,V=0,J=0,q=0,M=0;M<A;M++){for(var O=-M+U;O<=M-V;O+=2){var D=R+O,P;O==-M||O!=M&&E[D-1]<E[D+1]?P=E[D+1]:P=E[D-1]+1;for(var j=P-O;P<k&&j<S&&p.charAt(P)==b.charAt(j);)P++,j++;if(E[D]=P,P>k)V+=2;else if(j>S)U+=2;else if(L){var B=R+x-O;if(B>=0&&B<T&&I[B]!=-1){var C=k-I[B];if(P>=C)return h(p,b,P,j)}}}for(var F=-M+J;F<=M-q;F+=2){var B=R+F,C;F==-M||F!=M&&I[B-1]<I[B+1]?C=I[B+1]:C=I[B-1]+1;for(var K=C-F;C<k&&K<S&&p.charAt(k-C-1)==b.charAt(S-K-1);)C++,K++;if(I[B]=C,C>k)q+=2;else if(K>S)J+=2;else if(!L){var D=R+x-F;if(D>=0&&D<T&&E[D]!=-1){var P=E[D],j=R+P-D;if(C=k-C,P>=C)return h(p,b,P,j)}}}}return[[i,p],[s,b]]}function h(p,b,k,S){var A=p.substring(0,k),R=b.substring(0,S),T=p.substring(k),E=b.substring(S),I=a(A,R),N=a(T,E);return I.concat(N)}function c(p,b){if(!p||!b||p.charAt(0)!=b.charAt(0))return 0;for(var k=0,S=Math.min(p.length,b.length),A=S,R=0;k<A;)p.substring(R,A)==b.substring(R,A)?(k=A,R=k):S=A,A=Math.floor((S-k)/2+k);return A}function f(p,b){if(!p||!b||p.charAt(p.length-1)!=b.charAt(b.length-1))return 0;for(var k=0,S=Math.min(p.length,b.length),A=S,R=0;k<A;)p.substring(p.length-A,p.length-R)==b.substring(b.length-A,b.length-R)?(k=A,R=k):S=A,A=Math.floor((S-k)/2+k);return A}function d(p,b){var k=p.length>b.length?p:b,S=p.length>b.length?b:p;if(k.length<4||S.length*2<k.length)return null;function A(V,J,q){for(var M=V.substring(q,q+Math.floor(V.length/4)),O=-1,D="",P,j,B,C;(O=J.indexOf(M,O+1))!=-1;){var F=c(V.substring(q),J.substring(O)),K=f(V.substring(0,q),J.substring(0,O));D.length<K+F&&(D=J.substring(O-K,O)+J.substring(O,O+F),P=V.substring(0,q-K),j=V.substring(q+F),B=J.substring(0,O-K),C=J.substring(O+F))}return D.length*2>=V.length?[P,j,B,C,D]:null}var R=A(k,S,Math.ceil(k.length/4)),T=A(k,S,Math.ceil(k.length/2)),E;if(!R&&!T)return null;T?R?E=R[4].length>T[4].length?R:T:E=T:E=R;var I,N,x,L;p.length>b.length?(I=E[0],N=E[1],x=E[2],L=E[3]):(x=E[0],L=E[1],I=E[2],N=E[3]);var U=E[4];return[I,N,x,L,U]}function w(p){p.push([o,""]);for(var b=0,k=0,S=0,A="",R="",T;b<p.length;)switch(p[b][0]){case s:S++,R+=p[b][1],b++;break;case i:k++,A+=p[b][1],b++;break;case o:k+S>1?(k!==0&&S!==0&&(T=c(R,A),T!==0&&(b-k-S>0&&p[b-k-S-1][0]==o?p[b-k-S-1][1]+=R.substring(0,T):(p.splice(0,0,[o,R.substring(0,T)]),b++),R=R.substring(T),A=A.substring(T)),T=f(R,A),T!==0&&(p[b][1]=R.substring(R.length-T)+p[b][1],R=R.substring(0,R.length-T),A=A.substring(0,A.length-T))),k===0?p.splice(b-S,k+S,[s,R]):S===0?p.splice(b-k,k+S,[i,A]):p.splice(b-k-S,k+S,[i,A],[s,R]),b=b-k-S+(k?1:0)+(S?1:0)+1):b!==0&&p[b-1][0]==o?(p[b-1][1]+=p[b][1],p.splice(b,1)):b++,S=0,k=0,A="",R="";break}p[p.length-1][1]===""&&p.pop();var E=!1;for(b=1;b<p.length-1;)p[b-1][0]==o&&p[b+1][0]==o&&(p[b][1].substring(p[b][1].length-p[b-1][1].length)==p[b-1][1]?(p[b][1]=p[b-1][1]+p[b][1].substring(0,p[b][1].length-p[b-1][1].length),p[b+1][1]=p[b-1][1]+p[b+1][1],p.splice(b-1,1),E=!0):p[b][1].substring(0,p[b+1][1].length)==p[b+1][1]&&(p[b-1][1]+=p[b+1][1],p[b][1]=p[b][1].substring(p[b+1][1].length)+p[b+1][1],p.splice(b+1,1),E=!0)),b++;E&&w(p)}var g=a;g.INSERT=s,g.DELETE=i,g.EQUAL=o,t.exports=g;function v(p,b){if(b===0)return[o,p];for(var k=0,S=0;S<p.length;S++){var A=p[S];if(A[0]===i||A[0]===o){var R=k+A[1].length;if(b===R)return[S+1,p];if(b<R){p=p.slice();var T=b-k,E=[A[0],A[1].slice(0,T)],I=[A[0],A[1].slice(T)];return p.splice(S,1,E,I),[S+1,p]}else k=R}}throw new Error("cursor_pos is out of bounds!")}function m(p,b){var k=v(p,b),S=k[1],A=k[0],R=S[A],T=S[A+1];if(R==null)return p;if(R[0]!==o)return p;if(T!=null&&R[1]+T[1]===T[1]+R[1])return S.splice(A,2,T,R),_(S,A,2);if(T!=null&&T[1].indexOf(R[1])===0){S.splice(A,2,[T[0],R[1]],[0,R[1]]);var E=T[1].slice(R[1].length);return E.length>0&&S.splice(A+2,0,[T[0],E]),_(S,A,3)}else return p}function y(p){for(var b=!1,k=function(T){return T.charCodeAt(0)>=56320&&T.charCodeAt(0)<=57343},S=function(T){return T.charCodeAt(T.length-1)>=55296&&T.charCodeAt(T.length-1)<=56319},A=2;A<p.length;A+=1)p[A-2][0]===o&&S(p[A-2][1])&&p[A-1][0]===i&&k(p[A-1][1])&&p[A][0]===s&&k(p[A][1])&&(b=!0,p[A-1][1]=p[A-2][1].slice(-1)+p[A-1][1],p[A][1]=p[A-2][1].slice(-1)+p[A][1],p[A-2][1]=p[A-2][1].slice(0,-1));if(!b)return p;for(var R=[],A=0;A<p.length;A+=1)p[A][1].length>0&&R.push(p[A]);return R}function _(p,b,k){for(var S=b+k-1;S>=0&&S>=b-1;S--)if(S+1<p.length){var A=p[S],R=p[S+1];A[0]===R[1]&&p.splice(S,2,[A[0],A[1]+R[1]])}return p}},function(t,r){r=t.exports=typeof Object.keys=="function"?Object.keys:i,r.shim=i;function i(s){var o=[];for(var a in s)o.push(a);return o}},function(t,r){var i=function(){return Object.prototype.toString.call(arguments)}()=="[object Arguments]";r=t.exports=i?s:o,r.supported=s;function s(a){return Object.prototype.toString.call(a)=="[object Arguments]"}r.unsupported=o;function o(a){return a&&typeof a=="object"&&typeof a.length=="number"&&Object.prototype.hasOwnProperty.call(a,"callee")&&!Object.prototype.propertyIsEnumerable.call(a,"callee")||!1}},function(t,r){var i=Object.prototype.hasOwnProperty,s="~";function o(){}Object.create&&(o.prototype=Object.create(null),new o().__proto__||(s=!1));function a(u,h,c){this.fn=u,this.context=h,this.once=c||!1}function l(){this._events=new o,this._eventsCount=0}l.prototype.eventNames=function(){var h=[],c,f;if(this._eventsCount===0)return h;for(f in c=this._events)i.call(c,f)&&h.push(s?f.slice(1):f);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(c)):h},l.prototype.listeners=function(h,c){var f=s?s+h:h,d=this._events[f];if(c)return!!d;if(!d)return[];if(d.fn)return[d.fn];for(var w=0,g=d.length,v=new Array(g);w<g;w++)v[w]=d[w].fn;return v},l.prototype.emit=function(h,c,f,d,w,g){var v=s?s+h:h;if(!this._events[v])return!1;var m=this._events[v],y=arguments.length,_,p;if(m.fn){switch(m.once&&this.removeListener(h,m.fn,void 0,!0),y){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,f),!0;case 4:return m.fn.call(m.context,c,f,d),!0;case 5:return m.fn.call(m.context,c,f,d,w),!0;case 6:return m.fn.call(m.context,c,f,d,w,g),!0}for(p=1,_=new Array(y-1);p<y;p++)_[p-1]=arguments[p];m.fn.apply(m.context,_)}else{var b=m.length,k;for(p=0;p<b;p++)switch(m[p].once&&this.removeListener(h,m[p].fn,void 0,!0),y){case 1:m[p].fn.call(m[p].context);break;case 2:m[p].fn.call(m[p].context,c);break;case 3:m[p].fn.call(m[p].context,c,f);break;case 4:m[p].fn.call(m[p].context,c,f,d);break;default:if(!_)for(k=1,_=new Array(y-1);k<y;k++)_[k-1]=arguments[k];m[p].fn.apply(m[p].context,_)}}return!0},l.prototype.on=function(h,c,f){var d=new a(c,f||this),w=s?s+h:h;return this._events[w]?this._events[w].fn?this._events[w]=[this._events[w],d]:this._events[w].push(d):(this._events[w]=d,this._eventsCount++),this},l.prototype.once=function(h,c,f){var d=new a(c,f||this,!0),w=s?s+h:h;return this._events[w]?this._events[w].fn?this._events[w]=[this._events[w],d]:this._events[w].push(d):(this._events[w]=d,this._eventsCount++),this},l.prototype.removeListener=function(h,c,f,d){var w=s?s+h:h;if(!this._events[w])return this;if(!c)return--this._eventsCount===0?this._events=new o:delete this._events[w],this;var g=this._events[w];if(g.fn)g.fn===c&&(!d||g.once)&&(!f||g.context===f)&&(--this._eventsCount===0?this._events=new o:delete this._events[w]);else{for(var v=0,m=[],y=g.length;v<y;v++)(g[v].fn!==c||d&&!g[v].once||f&&g[v].context!==f)&&m.push(g[v]);m.length?this._events[w]=m.length===1?m[0]:m:--this._eventsCount===0?this._events=new o:delete this._events[w]}return this},l.prototype.removeAllListeners=function(h){var c;return h?(c=s?s+h:h,this._events[c]&&(--this._eventsCount===0?this._events=new o:delete this._events[c])):(this._events=new o,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prototype.setMaxListeners=function(){return this},l.prefixed=s,l.EventEmitter=l,typeof t<"u"&&(t.exports=l)},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.matchText=r.matchSpacing=r.matchNewline=r.matchBlot=r.matchAttributor=r.default=void 0;var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},o=function(){function H(W,ie){var se=[],Z=!0,ge=!1,ye=void 0;try{for(var ve=W[Symbol.iterator](),xt;!(Z=(xt=ve.next()).done)&&(se.push(xt.value),!(ie&&se.length===ie));Z=!0);}catch(rn){ge=!0,ye=rn}finally{try{!Z&&ve.return&&ve.return()}finally{if(ge)throw ye}}return se}return function(W,ie){if(Array.isArray(W))return W;if(Symbol.iterator in Object(W))return H(W,ie);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(){function H(W,ie){for(var se=0;se<ie.length;se++){var Z=ie[se];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(W,Z.key,Z)}}return function(W,ie,se){return ie&&H(W.prototype,ie),se&&H(W,se),W}}(),l=i(3),u=I(l),h=i(2),c=I(h),f=i(0),d=I(f),w=i(5),g=I(w),v=i(10),m=I(v),y=i(9),_=I(y),p=i(36),b=i(37),k=i(13),S=I(k),A=i(26),R=i(38),T=i(39),E=i(40);function I(H){return H&&H.__esModule?H:{default:H}}function N(H,W,ie){return W in H?Object.defineProperty(H,W,{value:ie,enumerable:!0,configurable:!0,writable:!0}):H[W]=ie,H}function x(H,W){if(!(H instanceof W))throw new TypeError("Cannot call a class as a function")}function L(H,W){if(!H)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W&&(typeof W=="object"||typeof W=="function")?W:H}function U(H,W){if(typeof W!="function"&&W!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof W);H.prototype=Object.create(W&&W.prototype,{constructor:{value:H,enumerable:!1,writable:!0,configurable:!0}}),W&&(Object.setPrototypeOf?Object.setPrototypeOf(H,W):H.__proto__=W)}var V=(0,m.default)("quill:clipboard"),J="__ql-matcher",q=[[Node.TEXT_NODE,We],[Node.TEXT_NODE,_e],["br",ae],[Node.ELEMENT_NODE,_e],[Node.ELEMENT_NODE,Y],[Node.ELEMENT_NODE,Se],[Node.ELEMENT_NODE,G],[Node.ELEMENT_NODE,_t],["li",pe],["b",K.bind(K,"bold")],["i",K.bind(K,"italic")],["style",he]],M=[p.AlignAttribute,R.DirectionAttribute].reduce(function(H,W){return H[W.keyName]=W,H},{}),O=[p.AlignStyle,b.BackgroundStyle,A.ColorStyle,R.DirectionStyle,T.FontStyle,E.SizeStyle].reduce(function(H,W){return H[W.keyName]=W,H},{}),D=function(H){U(W,H);function W(ie,se){x(this,W);var Z=L(this,(W.__proto__||Object.getPrototypeOf(W)).call(this,ie,se));return Z.quill.root.addEventListener("paste",Z.onPaste.bind(Z)),Z.container=Z.quill.addContainer("ql-clipboard"),Z.container.setAttribute("contenteditable",!0),Z.container.setAttribute("tabindex",-1),Z.matchers=[],q.concat(Z.options.matchers).forEach(function(ge){var ye=o(ge,2),ve=ye[0],xt=ye[1];!se.matchVisual&&xt===Se||Z.addMatcher(ve,xt)}),Z}return a(W,[{key:"addMatcher",value:function(se,Z){this.matchers.push([se,Z])}},{key:"convert",value:function(se){if(typeof se=="string")return this.container.innerHTML=se.replace(/\>\r?\n +\</g,"><"),this.convert();var Z=this.quill.getFormat(this.quill.selection.savedRange.index);if(Z[S.default.blotName]){var ge=this.container.innerText;return this.container.innerHTML="",new c.default().insert(ge,N({},S.default.blotName,Z[S.default.blotName]))}var ye=this.prepareMatching(),ve=o(ye,2),xt=ve[0],rn=ve[1],Le=F(this.container,xt,rn);return B(Le,`
`)&&Le.ops[Le.ops.length-1].attributes==null&&(Le=Le.compose(new c.default().retain(Le.length()-1).delete(1))),V.log("convert",this.container.innerHTML,Le),this.container.innerHTML="",Le}},{key:"dangerouslyPasteHTML",value:function(se,Z){var ge=arguments.length>2&&arguments[2]!==void 0?arguments[2]:g.default.sources.API;if(typeof se=="string")this.quill.setContents(this.convert(se),Z),this.quill.setSelection(0,g.default.sources.SILENT);else{var ye=this.convert(Z);this.quill.updateContents(new c.default().retain(se).concat(ye),ge),this.quill.setSelection(se+ye.length(),g.default.sources.SILENT)}}},{key:"onPaste",value:function(se){var Z=this;if(!(se.defaultPrevented||!this.quill.isEnabled())){var ge=this.quill.getSelection(),ye=new c.default().retain(ge.index),ve=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(g.default.sources.SILENT),setTimeout(function(){ye=ye.concat(Z.convert()).delete(ge.length),Z.quill.updateContents(ye,g.default.sources.USER),Z.quill.setSelection(ye.length()-ge.length,g.default.sources.SILENT),Z.quill.scrollingContainer.scrollTop=ve,Z.quill.focus()},1)}}},{key:"prepareMatching",value:function(){var se=this,Z=[],ge=[];return this.matchers.forEach(function(ye){var ve=o(ye,2),xt=ve[0],rn=ve[1];switch(xt){case Node.TEXT_NODE:ge.push(rn);break;case Node.ELEMENT_NODE:Z.push(rn);break;default:[].forEach.call(se.container.querySelectorAll(xt),function(Le){Le[J]=Le[J]||[],Le[J].push(rn)});break}}),[Z,ge]}}]),W}(_.default);D.DEFAULTS={matchers:[],matchVisual:!0};function P(H,W,ie){return(typeof W>"u"?"undefined":s(W))==="object"?Object.keys(W).reduce(function(se,Z){return P(se,Z,W[Z])},H):H.reduce(function(se,Z){return Z.attributes&&Z.attributes[W]?se.push(Z):se.insert(Z.insert,(0,u.default)({},N({},W,ie),Z.attributes))},new c.default)}function j(H){if(H.nodeType!==Node.ELEMENT_NODE)return{};var W="__ql-computed-style";return H[W]||(H[W]=window.getComputedStyle(H))}function B(H,W){for(var ie="",se=H.ops.length-1;se>=0&&ie.length<W.length;--se){var Z=H.ops[se];if(typeof Z.insert!="string")break;ie=Z.insert+ie}return ie.slice(-1*W.length)===W}function C(H){if(H.childNodes.length===0)return!1;var W=j(H);return["block","list-item"].indexOf(W.display)>-1}function F(H,W,ie){return H.nodeType===H.TEXT_NODE?ie.reduce(function(se,Z){return Z(H,se)},new c.default):H.nodeType===H.ELEMENT_NODE?[].reduce.call(H.childNodes||[],function(se,Z){var ge=F(Z,W,ie);return Z.nodeType===H.ELEMENT_NODE&&(ge=W.reduce(function(ye,ve){return ve(Z,ye)},ge),ge=(Z[J]||[]).reduce(function(ye,ve){return ve(Z,ye)},ge)),se.concat(ge)},new c.default):new c.default}function K(H,W,ie){return P(ie,H,!0)}function G(H,W){var ie=d.default.Attributor.Attribute.keys(H),se=d.default.Attributor.Class.keys(H),Z=d.default.Attributor.Style.keys(H),ge={};return ie.concat(se).concat(Z).forEach(function(ye){var ve=d.default.query(ye,d.default.Scope.ATTRIBUTE);ve!=null&&(ge[ve.attrName]=ve.value(H),ge[ve.attrName])||(ve=M[ye],ve!=null&&(ve.attrName===ye||ve.keyName===ye)&&(ge[ve.attrName]=ve.value(H)||void 0),ve=O[ye],ve!=null&&(ve.attrName===ye||ve.keyName===ye)&&(ve=O[ye],ge[ve.attrName]=ve.value(H)||void 0))}),Object.keys(ge).length>0&&(W=P(W,ge)),W}function Y(H,W){var ie=d.default.query(H);if(ie==null)return W;if(ie.prototype instanceof d.default.Embed){var se={},Z=ie.value(H);Z!=null&&(se[ie.blotName]=Z,W=new c.default().insert(se,ie.formats(H)))}else typeof ie.formats=="function"&&(W=P(W,ie.blotName,ie.formats(H)));return W}function ae(H,W){return B(W,`
`)||W.insert(`
`),W}function he(){return new c.default}function pe(H,W){var ie=d.default.query(H);if(ie==null||ie.blotName!=="list-item"||!B(W,`
`))return W;for(var se=-1,Z=H.parentNode;!Z.classList.contains("ql-clipboard");)(d.default.query(Z)||{}).blotName==="list"&&(se+=1),Z=Z.parentNode;return se<=0?W:W.compose(new c.default().retain(W.length()-1).retain(1,{indent:se}))}function _e(H,W){return B(W,`
`)||(C(H)||W.length()>0&&H.nextSibling&&C(H.nextSibling))&&W.insert(`
`),W}function Se(H,W){if(C(H)&&H.nextElementSibling!=null&&!B(W,`

`)){var ie=H.offsetHeight+parseFloat(j(H).marginTop)+parseFloat(j(H).marginBottom);H.nextElementSibling.offsetTop>H.offsetTop+ie*1.5&&W.insert(`
`)}return W}function _t(H,W){var ie={},se=H.style||{};return se.fontStyle&&j(H).fontStyle==="italic"&&(ie.italic=!0),se.fontWeight&&(j(H).fontWeight.startsWith("bold")||parseInt(j(H).fontWeight)>=700)&&(ie.bold=!0),Object.keys(ie).length>0&&(W=P(W,ie)),parseFloat(se.textIndent||0)>0&&(W=new c.default().insert("	").concat(W)),W}function We(H,W){var ie=H.data;if(H.parentNode.tagName==="O:P")return W.insert(ie.trim());if(ie.trim().length===0&&H.parentNode.classList.contains("ql-clipboard"))return W;if(!j(H.parentNode).whiteSpace.startsWith("pre")){var se=function(ge,ye){return ye=ye.replace(/[^\u00a0]/g,""),ye.length<1&&ge?" ":ye};ie=ie.replace(/\r\n/g," ").replace(/\n/g," "),ie=ie.replace(/\s\s+/g,se.bind(se,!0)),(H.previousSibling==null&&C(H.parentNode)||H.previousSibling!=null&&C(H.previousSibling))&&(ie=ie.replace(/^\s+/,se.bind(se,!1))),(H.nextSibling==null&&C(H.parentNode)||H.nextSibling!=null&&C(H.nextSibling))&&(ie=ie.replace(/\s+$/,se.bind(se,!1)))}return W.insert(ie)}r.default=D,r.matchAttributor=G,r.matchBlot=Y,r.matchNewline=_e,r.matchSpacing=Se,r.matchText=We},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function w(g,v){for(var m=0;m<v.length;m++){var y=v[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(g,y.key,y)}}return function(g,v,m){return v&&w(g.prototype,v),m&&w(g,m),g}}(),o=function w(g,v,m){g===null&&(g=Function.prototype);var y=Object.getOwnPropertyDescriptor(g,v);if(y===void 0){var _=Object.getPrototypeOf(g);return _===null?void 0:w(_,v,m)}else{if("value"in y)return y.value;var p=y.get;return p===void 0?void 0:p.call(m)}},a=i(6),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(){return h(this,g),c(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return s(g,[{key:"optimize",value:function(m){o(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"optimize",this).call(this,m),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return o(g.__proto__||Object.getPrototypeOf(g),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),g}(l.default);d.blotName="bold",d.tagName=["STRONG","B"],r.default=d},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.addControls=r.default=void 0;var s=function(){function E(I,N){var x=[],L=!0,U=!1,V=void 0;try{for(var J=I[Symbol.iterator](),q;!(L=(q=J.next()).done)&&(x.push(q.value),!(N&&x.length===N));L=!0);}catch(M){U=!0,V=M}finally{try{!L&&J.return&&J.return()}finally{if(U)throw V}}return x}return function(I,N){if(Array.isArray(I))return I;if(Symbol.iterator in Object(I))return E(I,N);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function E(I,N){for(var x=0;x<N.length;x++){var L=N[x];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(I,L.key,L)}}return function(I,N,x){return N&&E(I.prototype,N),x&&E(I,x),I}}(),a=i(2),l=m(a),u=i(0),h=m(u),c=i(5),f=m(c),d=i(10),w=m(d),g=i(9),v=m(g);function m(E){return E&&E.__esModule?E:{default:E}}function y(E,I,N){return I in E?Object.defineProperty(E,I,{value:N,enumerable:!0,configurable:!0,writable:!0}):E[I]=N,E}function _(E,I){if(!(E instanceof I))throw new TypeError("Cannot call a class as a function")}function p(E,I){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return I&&(typeof I=="object"||typeof I=="function")?I:E}function b(E,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);E.prototype=Object.create(I&&I.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(E,I):E.__proto__=I)}var k=(0,w.default)("quill:toolbar"),S=function(E){b(I,E);function I(N,x){_(this,I);var L=p(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,N,x));if(Array.isArray(L.options.container)){var U=document.createElement("div");R(U,L.options.container),N.container.parentNode.insertBefore(U,N.container),L.container=U}else typeof L.options.container=="string"?L.container=document.querySelector(L.options.container):L.container=L.options.container;if(!(L.container instanceof HTMLElement)){var V;return V=k.error("Container required for toolbar",L.options),p(L,V)}return L.container.classList.add("ql-toolbar"),L.controls=[],L.handlers={},Object.keys(L.options.handlers).forEach(function(J){L.addHandler(J,L.options.handlers[J])}),[].forEach.call(L.container.querySelectorAll("button, select"),function(J){L.attach(J)}),L.quill.on(f.default.events.EDITOR_CHANGE,function(J,q){J===f.default.events.SELECTION_CHANGE&&L.update(q)}),L.quill.on(f.default.events.SCROLL_OPTIMIZE,function(){var J=L.quill.selection.getRange(),q=s(J,1),M=q[0];L.update(M)}),L}return o(I,[{key:"addHandler",value:function(x,L){this.handlers[x]=L}},{key:"attach",value:function(x){var L=this,U=[].find.call(x.classList,function(J){return J.indexOf("ql-")===0});if(U){if(U=U.slice(3),x.tagName==="BUTTON"&&x.setAttribute("type","button"),this.handlers[U]==null){if(this.quill.scroll.whitelist!=null&&this.quill.scroll.whitelist[U]==null){k.warn("ignoring attaching to disabled format",U,x);return}if(h.default.query(U)==null){k.warn("ignoring attaching to nonexistent format",U,x);return}}var V=x.tagName==="SELECT"?"change":"click";x.addEventListener(V,function(J){var q=void 0;if(x.tagName==="SELECT"){if(x.selectedIndex<0)return;var M=x.options[x.selectedIndex];M.hasAttribute("selected")?q=!1:q=M.value||!1}else x.classList.contains("ql-active")?q=!1:q=x.value||!x.hasAttribute("value"),J.preventDefault();L.quill.focus();var O=L.quill.selection.getRange(),D=s(O,1),P=D[0];if(L.handlers[U]!=null)L.handlers[U].call(L,q);else if(h.default.query(U).prototype instanceof h.default.Embed){if(q=prompt("Enter "+U),!q)return;L.quill.updateContents(new l.default().retain(P.index).delete(P.length).insert(y({},U,q)),f.default.sources.USER)}else L.quill.format(U,q,f.default.sources.USER);L.update(P)}),this.controls.push([U,x])}}},{key:"update",value:function(x){var L=x==null?{}:this.quill.getFormat(x);this.controls.forEach(function(U){var V=s(U,2),J=V[0],q=V[1];if(q.tagName==="SELECT"){var M=void 0;if(x==null)M=null;else if(L[J]==null)M=q.querySelector("option[selected]");else if(!Array.isArray(L[J])){var O=L[J];typeof O=="string"&&(O=O.replace(/\"/g,'\\"')),M=q.querySelector('option[value="'+O+'"]')}M==null?(q.value="",q.selectedIndex=-1):M.selected=!0}else if(x==null)q.classList.remove("ql-active");else if(q.hasAttribute("value")){var D=L[J]===q.getAttribute("value")||L[J]!=null&&L[J].toString()===q.getAttribute("value")||L[J]==null&&!q.getAttribute("value");q.classList.toggle("ql-active",D)}else q.classList.toggle("ql-active",L[J]!=null)})}}]),I}(v.default);S.DEFAULTS={};function A(E,I,N){var x=document.createElement("button");x.setAttribute("type","button"),x.classList.add("ql-"+I),N!=null&&(x.value=N),E.appendChild(x)}function R(E,I){Array.isArray(I[0])||(I=[I]),I.forEach(function(N){var x=document.createElement("span");x.classList.add("ql-formats"),N.forEach(function(L){if(typeof L=="string")A(x,L);else{var U=Object.keys(L)[0],V=L[U];Array.isArray(V)?T(x,U,V):A(x,U,V)}}),E.appendChild(x)})}function T(E,I,N){var x=document.createElement("select");x.classList.add("ql-"+I),N.forEach(function(L){var U=document.createElement("option");L!==!1?U.setAttribute("value",L):U.setAttribute("selected","selected"),x.appendChild(U)}),E.appendChild(x)}S.DEFAULTS={container:null,handlers:{clean:function(){var I=this,N=this.quill.getSelection();if(N!=null)if(N.length==0){var x=this.quill.getFormat();Object.keys(x).forEach(function(L){h.default.query(L,h.default.Scope.INLINE)!=null&&I.quill.format(L,!1)})}else this.quill.removeFormat(N,f.default.sources.USER)},direction:function(I){var N=this.quill.getFormat().align;I==="rtl"&&N==null?this.quill.format("align","right",f.default.sources.USER):!I&&N==="right"&&this.quill.format("align",!1,f.default.sources.USER),this.quill.format("direction",I,f.default.sources.USER)},indent:function(I){var N=this.quill.getSelection(),x=this.quill.getFormat(N),L=parseInt(x.indent||0);if(I==="+1"||I==="-1"){var U=I==="+1"?1:-1;x.direction==="rtl"&&(U*=-1),this.quill.format("indent",L+U,f.default.sources.USER)}},link:function(I){I===!0&&(I=prompt("Enter link URL:")),this.quill.format("link",I,f.default.sources.USER)},list:function(I){var N=this.quill.getSelection(),x=this.quill.getFormat(N);I==="check"?x.list==="checked"||x.list==="unchecked"?this.quill.format("list",!1,f.default.sources.USER):this.quill.format("list","unchecked",f.default.sources.USER):this.quill.format("list",I,f.default.sources.USER)}}},r.default=S,r.addControls=R},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function w(g,v){for(var m=0;m<v.length;m++){var y=v[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(g,y.key,y)}}return function(g,v,m){return v&&w(g.prototype,v),m&&w(g,m),g}}(),o=function w(g,v,m){g===null&&(g=Function.prototype);var y=Object.getOwnPropertyDescriptor(g,v);if(y===void 0){var _=Object.getPrototypeOf(g);return _===null?void 0:w(_,v,m)}else{if("value"in y)return y.value;var p=y.get;return p===void 0?void 0:p.call(m)}},a=i(28),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(v,m){h(this,g);var y=c(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,v));return y.label.innerHTML=m,y.container.classList.add("ql-color-picker"),[].slice.call(y.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(_){_.classList.add("ql-primary")}),y}return s(g,[{key:"buildItem",value:function(m){var y=o(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"buildItem",this).call(this,m);return y.style.backgroundColor=m.getAttribute("value")||"",y}},{key:"selectItem",value:function(m,y){o(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"selectItem",this).call(this,m,y);var _=this.label.querySelector(".ql-color-label"),p=m&&m.getAttribute("data-value")||"";_&&(_.tagName==="line"?_.style.stroke=p:_.style.fill=p)}}]),g}(l.default);r.default=d},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function w(g,v){for(var m=0;m<v.length;m++){var y=v[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(g,y.key,y)}}return function(g,v,m){return v&&w(g.prototype,v),m&&w(g,m),g}}(),o=function w(g,v,m){g===null&&(g=Function.prototype);var y=Object.getOwnPropertyDescriptor(g,v);if(y===void 0){var _=Object.getPrototypeOf(g);return _===null?void 0:w(_,v,m)}else{if("value"in y)return y.value;var p=y.get;return p===void 0?void 0:p.call(m)}},a=i(28),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(v,m){h(this,g);var y=c(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,v));return y.container.classList.add("ql-icon-picker"),[].forEach.call(y.container.querySelectorAll(".ql-picker-item"),function(_){_.innerHTML=m[_.getAttribute("data-value")||""]}),y.defaultItem=y.container.querySelector(".ql-selected"),y.selectItem(y.defaultItem),y}return s(g,[{key:"selectItem",value:function(m,y){o(g.prototype.__proto__||Object.getPrototypeOf(g.prototype),"selectItem",this).call(this,m,y),m=m||this.defaultItem,this.label.innerHTML=m.innerHTML}}]),g}(l.default);r.default=d},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function l(u,h){for(var c=0;c<h.length;c++){var f=h[c];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}}return function(u,h,c){return h&&l(u.prototype,h),c&&l(u,c),u}}();function o(l,u){if(!(l instanceof u))throw new TypeError("Cannot call a class as a function")}var a=function(){function l(u,h){var c=this;o(this,l),this.quill=u,this.boundsContainer=h||document.body,this.root=u.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE,this.quill.root===this.quill.scrollingContainer&&this.quill.root.addEventListener("scroll",function(){c.root.style.marginTop=-1*c.quill.root.scrollTop+"px"}),this.hide()}return s(l,[{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(h){var c=h.left+h.width/2-this.root.offsetWidth/2,f=h.bottom+this.quill.root.scrollTop;this.root.style.left=c+"px",this.root.style.top=f+"px",this.root.classList.remove("ql-flip");var d=this.boundsContainer.getBoundingClientRect(),w=this.root.getBoundingClientRect(),g=0;if(w.right>d.right&&(g=d.right-w.right,this.root.style.left=c+g+"px"),w.left<d.left&&(g=d.left-w.left,this.root.style.left=c+g+"px"),w.bottom>d.bottom){var v=w.bottom-w.top,m=h.bottom-h.top+v;this.root.style.top=f-m+"px",this.root.classList.add("ql-flip")}return g}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),l}();r.default=a},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function T(E,I){var N=[],x=!0,L=!1,U=void 0;try{for(var V=E[Symbol.iterator](),J;!(x=(J=V.next()).done)&&(N.push(J.value),!(I&&N.length===I));x=!0);}catch(q){L=!0,U=q}finally{try{!x&&V.return&&V.return()}finally{if(L)throw U}}return N}return function(E,I){if(Array.isArray(E))return E;if(Symbol.iterator in Object(E))return T(E,I);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function T(E,I,N){E===null&&(E=Function.prototype);var x=Object.getOwnPropertyDescriptor(E,I);if(x===void 0){var L=Object.getPrototypeOf(E);return L===null?void 0:T(L,I,N)}else{if("value"in x)return x.value;var U=x.get;return U===void 0?void 0:U.call(N)}},a=function(){function T(E,I){for(var N=0;N<I.length;N++){var x=I[N];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(E,x.key,x)}}return function(E,I,N){return I&&T(E.prototype,I),N&&T(E,N),E}}(),l=i(3),u=_(l),h=i(8),c=_(h),f=i(43),d=_(f),w=i(27),g=_(w),v=i(15),m=i(41),y=_(m);function _(T){return T&&T.__esModule?T:{default:T}}function p(T,E){if(!(T instanceof E))throw new TypeError("Cannot call a class as a function")}function b(T,E){if(!T)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:T}function k(T,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);T.prototype=Object.create(E&&E.prototype,{constructor:{value:T,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(T,E):T.__proto__=E)}var S=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],A=function(T){k(E,T);function E(I,N){p(this,E),N.modules.toolbar!=null&&N.modules.toolbar.container==null&&(N.modules.toolbar.container=S);var x=b(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,I,N));return x.quill.container.classList.add("ql-snow"),x}return a(E,[{key:"extendToolbar",value:function(N){N.container.classList.add("ql-snow"),this.buildButtons([].slice.call(N.container.querySelectorAll("button")),y.default),this.buildPickers([].slice.call(N.container.querySelectorAll("select")),y.default),this.tooltip=new R(this.quill,this.options.bounds),N.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(x,L){N.handlers.link.call(N,!L.format.link)})}}]),E}(d.default);A.DEFAULTS=(0,u.default)(!0,{},d.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(E){if(E){var I=this.quill.getSelection();if(I==null||I.length==0)return;var N=this.quill.getText(I);/^\S+@\S+\.\S+$/.test(N)&&N.indexOf("mailto:")!==0&&(N="mailto:"+N);var x=this.quill.theme.tooltip;x.edit("link",N)}else this.quill.format("link",!1)}}}}});var R=function(T){k(E,T);function E(I,N){p(this,E);var x=b(this,(E.__proto__||Object.getPrototypeOf(E)).call(this,I,N));return x.preview=x.root.querySelector("a.ql-preview"),x}return a(E,[{key:"listen",value:function(){var N=this;o(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(x){N.root.classList.contains("ql-editing")?N.save():N.edit("link",N.preview.textContent),x.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(x){if(N.linkRange!=null){var L=N.linkRange;N.restoreFocus(),N.quill.formatText(L,"link",!1,c.default.sources.USER),delete N.linkRange}x.preventDefault(),N.hide()}),this.quill.on(c.default.events.SELECTION_CHANGE,function(x,L,U){if(x!=null){if(x.length===0&&U===c.default.sources.USER){var V=N.quill.scroll.descendant(g.default,x.index),J=s(V,2),q=J[0],M=J[1];if(q!=null){N.linkRange=new v.Range(x.index-M,q.length());var O=g.default.formats(q.domNode);N.preview.textContent=O,N.preview.setAttribute("href",O),N.show(),N.position(N.quill.getBounds(N.linkRange));return}}else delete N.linkRange;N.hide()}})}},{key:"show",value:function(){o(E.prototype.__proto__||Object.getPrototypeOf(E.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),E}(f.BaseTooltip);R.TEMPLATE=['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),r.default=A},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(29),o=Z(s),a=i(36),l=i(38),u=i(64),h=i(65),c=Z(h),f=i(66),d=Z(f),w=i(67),g=Z(w),v=i(37),m=i(26),y=i(39),_=i(40),p=i(56),b=Z(p),k=i(68),S=Z(k),A=i(27),R=Z(A),T=i(69),E=Z(T),I=i(70),N=Z(I),x=i(71),L=Z(x),U=i(72),V=Z(U),J=i(73),q=Z(J),M=i(13),O=Z(M),D=i(74),P=Z(D),j=i(75),B=Z(j),C=i(57),F=Z(C),K=i(41),G=Z(K),Y=i(28),ae=Z(Y),he=i(59),pe=Z(he),_e=i(60),Se=Z(_e),_t=i(61),We=Z(_t),H=i(108),W=Z(H),ie=i(62),se=Z(ie);function Z(ge){return ge&&ge.__esModule?ge:{default:ge}}o.default.register({"attributors/attribute/direction":l.DirectionAttribute,"attributors/class/align":a.AlignClass,"attributors/class/background":v.BackgroundClass,"attributors/class/color":m.ColorClass,"attributors/class/direction":l.DirectionClass,"attributors/class/font":y.FontClass,"attributors/class/size":_.SizeClass,"attributors/style/align":a.AlignStyle,"attributors/style/background":v.BackgroundStyle,"attributors/style/color":m.ColorStyle,"attributors/style/direction":l.DirectionStyle,"attributors/style/font":y.FontStyle,"attributors/style/size":_.SizeStyle},!0),o.default.register({"formats/align":a.AlignClass,"formats/direction":l.DirectionClass,"formats/indent":u.IndentClass,"formats/background":v.BackgroundStyle,"formats/color":m.ColorStyle,"formats/font":y.FontClass,"formats/size":_.SizeClass,"formats/blockquote":c.default,"formats/code-block":O.default,"formats/header":d.default,"formats/list":g.default,"formats/bold":b.default,"formats/code":M.Code,"formats/italic":S.default,"formats/link":R.default,"formats/script":E.default,"formats/strike":N.default,"formats/underline":L.default,"formats/image":V.default,"formats/video":q.default,"formats/list/item":w.ListItem,"modules/formula":P.default,"modules/syntax":B.default,"modules/toolbar":F.default,"themes/bubble":W.default,"themes/snow":se.default,"ui/icons":G.default,"ui/picker":ae.default,"ui/icon-picker":Se.default,"ui/color-picker":pe.default,"ui/tooltip":We.default},!0),r.default=o.default},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.IndentClass=void 0;var s=function(){function g(v,m){for(var y=0;y<m.length;y++){var _=m[y];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,_.key,_)}}return function(v,m,y){return m&&g(v.prototype,m),y&&g(v,y),v}}(),o=function g(v,m,y){v===null&&(v=Function.prototype);var _=Object.getOwnPropertyDescriptor(v,m);if(_===void 0){var p=Object.getPrototypeOf(v);return p===null?void 0:g(p,m,y)}else{if("value"in _)return _.value;var b=_.get;return b===void 0?void 0:b.call(y)}},a=i(0),l=u(a);function u(g){return g&&g.__esModule?g:{default:g}}function h(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}function c(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:g}function f(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}var d=function(g){f(v,g);function v(){return h(this,v),c(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return s(v,[{key:"add",value:function(y,_){if(_==="+1"||_==="-1"){var p=this.value(y)||0;_=_==="+1"?p+1:p-1}return _===0?(this.remove(y),!0):o(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"add",this).call(this,y,_)}},{key:"canAdd",value:function(y,_){return o(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"canAdd",this).call(this,y,_)||o(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"canAdd",this).call(this,y,parseInt(_))}},{key:"value",value:function(y){return parseInt(o(v.prototype.__proto__||Object.getPrototypeOf(v.prototype),"value",this).call(this,y))||void 0}}]),v}(l.default.Attributor.Class),w=new d("indent","ql-indent",{scope:l.default.Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});r.IndentClass=w},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(4),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}function l(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function u(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function h(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var c=function(f){h(d,f);function d(){return l(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(o.default);c.blotName="blockquote",c.tagName="blockquote",r.default=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function d(w,g){for(var v=0;v<g.length;v++){var m=g[v];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(w,m.key,m)}}return function(w,g,v){return g&&d(w.prototype,g),v&&d(w,v),w}}(),o=i(4),a=l(o);function l(d){return d&&d.__esModule?d:{default:d}}function u(d,w){if(!(d instanceof w))throw new TypeError("Cannot call a class as a function")}function h(d,w){if(!d)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:d}function c(d,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);d.prototype=Object.create(w&&w.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(d,w):d.__proto__=w)}var f=function(d){c(w,d);function w(){return u(this,w),h(this,(w.__proto__||Object.getPrototypeOf(w)).apply(this,arguments))}return s(w,null,[{key:"formats",value:function(v){return this.tagName.indexOf(v.tagName)+1}}]),w}(a.default);f.blotName="header",f.tagName=["H1","H2","H3","H4","H5","H6"],r.default=f},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.ListItem=void 0;var s=function(){function p(b,k){for(var S=0;S<k.length;S++){var A=k[S];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(b,A.key,A)}}return function(b,k,S){return k&&p(b.prototype,k),S&&p(b,S),b}}(),o=function p(b,k,S){b===null&&(b=Function.prototype);var A=Object.getOwnPropertyDescriptor(b,k);if(A===void 0){var R=Object.getPrototypeOf(b);return R===null?void 0:p(R,k,S)}else{if("value"in A)return A.value;var T=A.get;return T===void 0?void 0:T.call(S)}},a=i(0),l=d(a),u=i(4),h=d(u),c=i(25),f=d(c);function d(p){return p&&p.__esModule?p:{default:p}}function w(p,b,k){return b in p?Object.defineProperty(p,b,{value:k,enumerable:!0,configurable:!0,writable:!0}):p[b]=k,p}function g(p,b){if(!(p instanceof b))throw new TypeError("Cannot call a class as a function")}function v(p,b){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&(typeof b=="object"||typeof b=="function")?b:p}function m(p,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof b);p.prototype=Object.create(b&&b.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(p,b):p.__proto__=b)}var y=function(p){m(b,p);function b(){return g(this,b),v(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return s(b,[{key:"format",value:function(S,A){S===_.blotName&&!A?this.replaceWith(l.default.create(this.statics.scope)):o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"format",this).call(this,S,A)}},{key:"remove",value:function(){this.prev==null&&this.next==null?this.parent.remove():o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(S,A){return this.parent.isolate(this.offset(this.parent),this.length()),S===this.parent.statics.blotName?(this.parent.replaceWith(S,A),this):(this.parent.unwrap(),o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"replaceWith",this).call(this,S,A))}}],[{key:"formats",value:function(S){return S.tagName===this.tagName?void 0:o(b.__proto__||Object.getPrototypeOf(b),"formats",this).call(this,S)}}]),b}(h.default);y.blotName="list-item",y.tagName="LI";var _=function(p){m(b,p),s(b,null,[{key:"create",value:function(S){var A=S==="ordered"?"OL":"UL",R=o(b.__proto__||Object.getPrototypeOf(b),"create",this).call(this,A);return(S==="checked"||S==="unchecked")&&R.setAttribute("data-checked",S==="checked"),R}},{key:"formats",value:function(S){if(S.tagName==="OL")return"ordered";if(S.tagName==="UL")return S.hasAttribute("data-checked")?S.getAttribute("data-checked")==="true"?"checked":"unchecked":"bullet"}}]);function b(k){g(this,b);var S=v(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,k)),A=function(T){if(T.target.parentNode===k){var E=S.statics.formats(k),I=l.default.find(T.target);E==="checked"?I.format("list","unchecked"):E==="unchecked"&&I.format("list","checked")}};return k.addEventListener("touchstart",A),k.addEventListener("mousedown",A),S}return s(b,[{key:"format",value:function(S,A){this.children.length>0&&this.children.tail.format(S,A)}},{key:"formats",value:function(){return w({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(S,A){if(S instanceof y)o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"insertBefore",this).call(this,S,A);else{var R=A==null?this.length():A.offset(this),T=this.split(R);T.parent.insertBefore(S,T)}}},{key:"optimize",value:function(S){o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"optimize",this).call(this,S);var A=this.next;A!=null&&A.prev===this&&A.statics.blotName===this.statics.blotName&&A.domNode.tagName===this.domNode.tagName&&A.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(A.moveChildren(this),A.remove())}},{key:"replace",value:function(S){if(S.statics.blotName!==this.statics.blotName){var A=l.default.create(this.statics.defaultChild);S.moveChildren(A),this.appendChild(A)}o(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"replace",this).call(this,S)}}]),b}(f.default);_.blotName="list",_.scope=l.default.Scope.BLOCK_BLOT,_.tagName=["OL","UL"],_.defaultChild="list-item",_.allowedChildren=[y],r.ListItem=y,r.default=_},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(56),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}function l(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function u(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function h(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var c=function(f){h(d,f);function d(){return l(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(o.default);c.blotName="italic",c.tagName=["EM","I"],r.default=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function w(g,v){for(var m=0;m<v.length;m++){var y=v[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(g,y.key,y)}}return function(g,v,m){return v&&w(g.prototype,v),m&&w(g,m),g}}(),o=function w(g,v,m){g===null&&(g=Function.prototype);var y=Object.getOwnPropertyDescriptor(g,v);if(y===void 0){var _=Object.getPrototypeOf(g);return _===null?void 0:w(_,v,m)}else{if("value"in y)return y.value;var p=y.get;return p===void 0?void 0:p.call(m)}},a=i(6),l=u(a);function u(w){return w&&w.__esModule?w:{default:w}}function h(w,g){if(!(w instanceof g))throw new TypeError("Cannot call a class as a function")}function c(w,g){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:w}function f(w,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);w.prototype=Object.create(g&&g.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(w,g):w.__proto__=g)}var d=function(w){f(g,w);function g(){return h(this,g),c(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return s(g,null,[{key:"create",value:function(m){return m==="super"?document.createElement("sup"):m==="sub"?document.createElement("sub"):o(g.__proto__||Object.getPrototypeOf(g),"create",this).call(this,m)}},{key:"formats",value:function(m){if(m.tagName==="SUB")return"sub";if(m.tagName==="SUP")return"super"}}]),g}(l.default);d.blotName="script",d.tagName=["SUB","SUP"],r.default=d},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(6),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}function l(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function u(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function h(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var c=function(f){h(d,f);function d(){return l(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(o.default);c.blotName="strike",c.tagName="S",r.default=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(6),o=a(s);function a(f){return f&&f.__esModule?f:{default:f}}function l(f,d){if(!(f instanceof d))throw new TypeError("Cannot call a class as a function")}function u(f,d){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:f}function h(f,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);f.prototype=Object.create(d&&d.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(f,d):f.__proto__=d)}var c=function(f){h(d,f);function d(){return l(this,d),u(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return d}(o.default);c.blotName="underline",c.tagName="U",r.default=c},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function v(m,y){for(var _=0;_<y.length;_++){var p=y[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,y,_){return y&&v(m.prototype,y),_&&v(m,_),m}}(),o=function v(m,y,_){m===null&&(m=Function.prototype);var p=Object.getOwnPropertyDescriptor(m,y);if(p===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:v(b,y,_)}else{if("value"in p)return p.value;var k=p.get;return k===void 0?void 0:k.call(_)}},a=i(0),l=h(a),u=i(27);function h(v){return v&&v.__esModule?v:{default:v}}function c(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}function f(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:v}function d(v,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);v.prototype=Object.create(m&&m.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(v,m):v.__proto__=m)}var w=["alt","height","width"],g=function(v){d(m,v);function m(){return c(this,m),f(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return s(m,[{key:"format",value:function(_,p){w.indexOf(_)>-1?p?this.domNode.setAttribute(_,p):this.domNode.removeAttribute(_):o(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,_,p)}}],[{key:"create",value:function(_){var p=o(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,_);return typeof _=="string"&&p.setAttribute("src",this.sanitize(_)),p}},{key:"formats",value:function(_){return w.reduce(function(p,b){return _.hasAttribute(b)&&(p[b]=_.getAttribute(b)),p},{})}},{key:"match",value:function(_){return/\.(jpe?g|gif|png)$/.test(_)||/^data:image\/.+;base64/.test(_)}},{key:"sanitize",value:function(_){return(0,u.sanitize)(_,["http","https","data"])?_:"//:0"}},{key:"value",value:function(_){return _.getAttribute("src")}}]),m}(l.default.Embed);g.blotName="image",g.tagName="IMG",r.default=g},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function v(m,y){for(var _=0;_<y.length;_++){var p=y[_];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(m,p.key,p)}}return function(m,y,_){return y&&v(m.prototype,y),_&&v(m,_),m}}(),o=function v(m,y,_){m===null&&(m=Function.prototype);var p=Object.getOwnPropertyDescriptor(m,y);if(p===void 0){var b=Object.getPrototypeOf(m);return b===null?void 0:v(b,y,_)}else{if("value"in p)return p.value;var k=p.get;return k===void 0?void 0:k.call(_)}},a=i(4),l=i(27),u=h(l);function h(v){return v&&v.__esModule?v:{default:v}}function c(v,m){if(!(v instanceof m))throw new TypeError("Cannot call a class as a function")}function f(v,m){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:v}function d(v,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);v.prototype=Object.create(m&&m.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(v,m):v.__proto__=m)}var w=["height","width"],g=function(v){d(m,v);function m(){return c(this,m),f(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return s(m,[{key:"format",value:function(_,p){w.indexOf(_)>-1?p?this.domNode.setAttribute(_,p):this.domNode.removeAttribute(_):o(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"format",this).call(this,_,p)}}],[{key:"create",value:function(_){var p=o(m.__proto__||Object.getPrototypeOf(m),"create",this).call(this,_);return p.setAttribute("frameborder","0"),p.setAttribute("allowfullscreen",!0),p.setAttribute("src",this.sanitize(_)),p}},{key:"formats",value:function(_){return w.reduce(function(p,b){return _.hasAttribute(b)&&(p[b]=_.getAttribute(b)),p},{})}},{key:"sanitize",value:function(_){return u.default.sanitize(_)}},{key:"value",value:function(_){return _.getAttribute("src")}}]),m}(a.BlockEmbed);g.blotName="video",g.className="ql-video",g.tagName="IFRAME",r.default=g},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.FormulaBlot=void 0;var s=function(){function _(p,b){for(var k=0;k<b.length;k++){var S=b[k];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(p,S.key,S)}}return function(p,b,k){return b&&_(p.prototype,b),k&&_(p,k),p}}(),o=function _(p,b,k){p===null&&(p=Function.prototype);var S=Object.getOwnPropertyDescriptor(p,b);if(S===void 0){var A=Object.getPrototypeOf(p);return A===null?void 0:_(A,b,k)}else{if("value"in S)return S.value;var R=S.get;return R===void 0?void 0:R.call(k)}},a=i(35),l=d(a),u=i(5),h=d(u),c=i(9),f=d(c);function d(_){return _&&_.__esModule?_:{default:_}}function w(_,p){if(!(_ instanceof p))throw new TypeError("Cannot call a class as a function")}function g(_,p){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p&&(typeof p=="object"||typeof p=="function")?p:_}function v(_,p){if(typeof p!="function"&&p!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof p);_.prototype=Object.create(p&&p.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),p&&(Object.setPrototypeOf?Object.setPrototypeOf(_,p):_.__proto__=p)}var m=function(_){v(p,_);function p(){return w(this,p),g(this,(p.__proto__||Object.getPrototypeOf(p)).apply(this,arguments))}return s(p,null,[{key:"create",value:function(k){var S=o(p.__proto__||Object.getPrototypeOf(p),"create",this).call(this,k);return typeof k=="string"&&(window.katex.render(k,S,{throwOnError:!1,errorColor:"#f00"}),S.setAttribute("data-value",k)),S}},{key:"value",value:function(k){return k.getAttribute("data-value")}}]),p}(l.default);m.blotName="formula",m.className="ql-formula",m.tagName="SPAN";var y=function(_){v(p,_),s(p,null,[{key:"register",value:function(){h.default.register(m,!0)}}]);function p(){w(this,p);var b=g(this,(p.__proto__||Object.getPrototypeOf(p)).call(this));if(window.katex==null)throw new Error("Formula module requires KaTeX.");return b}return p}(f.default);r.FormulaBlot=m,r.default=y},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.CodeToken=r.CodeBlock=void 0;var s=function(){function k(S,A){for(var R=0;R<A.length;R++){var T=A[R];T.enumerable=T.enumerable||!1,T.configurable=!0,"value"in T&&(T.writable=!0),Object.defineProperty(S,T.key,T)}}return function(S,A,R){return A&&k(S.prototype,A),R&&k(S,R),S}}(),o=function k(S,A,R){S===null&&(S=Function.prototype);var T=Object.getOwnPropertyDescriptor(S,A);if(T===void 0){var E=Object.getPrototypeOf(S);return E===null?void 0:k(E,A,R)}else{if("value"in T)return T.value;var I=T.get;return I===void 0?void 0:I.call(R)}},a=i(0),l=g(a),u=i(5),h=g(u),c=i(9),f=g(c),d=i(13),w=g(d);function g(k){return k&&k.__esModule?k:{default:k}}function v(k,S){if(!(k instanceof S))throw new TypeError("Cannot call a class as a function")}function m(k,S){if(!k)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:k}function y(k,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);k.prototype=Object.create(S&&S.prototype,{constructor:{value:k,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(k,S):k.__proto__=S)}var _=function(k){y(S,k);function S(){return v(this,S),m(this,(S.__proto__||Object.getPrototypeOf(S)).apply(this,arguments))}return s(S,[{key:"replaceWith",value:function(R){this.domNode.textContent=this.domNode.textContent,this.attach(),o(S.prototype.__proto__||Object.getPrototypeOf(S.prototype),"replaceWith",this).call(this,R)}},{key:"highlight",value:function(R){var T=this.domNode.textContent;this.cachedText!==T&&((T.trim().length>0||this.cachedText==null)&&(this.domNode.innerHTML=R(T),this.domNode.normalize(),this.attach()),this.cachedText=T)}}]),S}(w.default);_.className="ql-syntax";var p=new l.default.Attributor.Class("token","hljs",{scope:l.default.Scope.INLINE}),b=function(k){y(S,k),s(S,null,[{key:"register",value:function(){h.default.register(p,!0),h.default.register(_,!0)}}]);function S(A,R){v(this,S);var T=m(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,A,R));if(typeof T.options.highlight!="function")throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");var E=null;return T.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){clearTimeout(E),E=setTimeout(function(){T.highlight(),E=null},T.options.interval)}),T.highlight(),T}return s(S,[{key:"highlight",value:function(){var R=this;if(!this.quill.selection.composing){this.quill.update(h.default.sources.USER);var T=this.quill.getSelection();this.quill.scroll.descendants(_).forEach(function(E){E.highlight(R.options.highlight)}),this.quill.update(h.default.sources.SILENT),T!=null&&this.quill.setSelection(T,h.default.sources.SILENT)}}}]),S}(f.default);b.DEFAULTS={highlight:function(){return window.hljs==null?null:function(k){var S=window.hljs.highlightAuto(k);return S.value}}(),interval:1e3},r.CodeBlock=_,r.CodeToken=p,r.default=b},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,r){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,r){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>'},function(t,r){t.exports='<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,r){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,r){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,r,i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.BubbleTooltip=void 0;var s=function S(A,R,T){A===null&&(A=Function.prototype);var E=Object.getOwnPropertyDescriptor(A,R);if(E===void 0){var I=Object.getPrototypeOf(A);return I===null?void 0:S(I,R,T)}else{if("value"in E)return E.value;var N=E.get;return N===void 0?void 0:N.call(T)}},o=function(){function S(A,R){for(var T=0;T<R.length;T++){var E=R[T];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(A,E.key,E)}}return function(A,R,T){return R&&S(A.prototype,R),T&&S(A,T),A}}(),a=i(3),l=v(a),u=i(8),h=v(u),c=i(43),f=v(c),d=i(15),w=i(41),g=v(w);function v(S){return S&&S.__esModule?S:{default:S}}function m(S,A){if(!(S instanceof A))throw new TypeError("Cannot call a class as a function")}function y(S,A){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A&&(typeof A=="object"||typeof A=="function")?A:S}function _(S,A){if(typeof A!="function"&&A!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof A);S.prototype=Object.create(A&&A.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(S,A):S.__proto__=A)}var p=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],b=function(S){_(A,S);function A(R,T){m(this,A),T.modules.toolbar!=null&&T.modules.toolbar.container==null&&(T.modules.toolbar.container=p);var E=y(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,R,T));return E.quill.container.classList.add("ql-bubble"),E}return o(A,[{key:"extendToolbar",value:function(T){this.tooltip=new k(this.quill,this.options.bounds),this.tooltip.root.appendChild(T.container),this.buildButtons([].slice.call(T.container.querySelectorAll("button")),g.default),this.buildPickers([].slice.call(T.container.querySelectorAll("select")),g.default)}}]),A}(f.default);b.DEFAULTS=(0,l.default)(!0,{},f.default.DEFAULTS,{modules:{toolbar:{handlers:{link:function(A){A?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var k=function(S){_(A,S);function A(R,T){m(this,A);var E=y(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,R,T));return E.quill.on(h.default.events.EDITOR_CHANGE,function(I,N,x,L){if(I===h.default.events.SELECTION_CHANGE)if(N!=null&&N.length>0&&L===h.default.sources.USER){E.show(),E.root.style.left="0px",E.root.style.width="",E.root.style.width=E.root.offsetWidth+"px";var U=E.quill.getLines(N.index,N.length);if(U.length===1)E.position(E.quill.getBounds(N));else{var V=U[U.length-1],J=E.quill.getIndex(V),q=Math.min(V.length()-1,N.index+N.length-J),M=E.quill.getBounds(new d.Range(J,q));E.position(M)}}else document.activeElement!==E.textbox&&E.quill.hasFocus()&&E.hide()}),E}return o(A,[{key:"listen",value:function(){var T=this;s(A.prototype.__proto__||Object.getPrototypeOf(A.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){T.root.classList.remove("ql-editing")}),this.quill.on(h.default.events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!T.root.classList.contains("ql-hidden")){var E=T.quill.getSelection();E!=null&&T.position(T.quill.getBounds(E))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(T){var E=s(A.prototype.__proto__||Object.getPrototypeOf(A.prototype),"position",this).call(this,T),I=this.root.querySelector(".ql-tooltip-arrow");if(I.style.marginLeft="",E===0)return E;I.style.marginLeft=-1*E-I.offsetWidth/2+"px"}}]),A}(c.BaseTooltip);k.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),r.BubbleTooltip=k,r.default=b},function(t,r,i){t.exports=i(63)}]).default})})(Gy);var YA=Gy.exports;const XA=QA(YA);function JA(n,e){let t;return function(...r){const i=this;clearTimeout(t),t=setTimeout(()=>n.apply(i,r),e)}}const ZA=JA(async(n,e)=>{try{await Xa.collection("submissions").doc(n).set(e,{merge:!0}),console.log("Saved to Firestore:",e)}catch(t){console.error("Error saving to Firestore:",t)}},1500);function ek(n,e){if(e.innerHTML="",n.helpText){const t=document.createElement("details");t.innerHTML=`<summary>Weitere Informationen</summary>${n.helpText}`,e.appendChild(t)}n.elements.forEach(t=>{t.type==="text"?rk(t,e):t.type==="quill"&&ik(t,e)})}async function tk(n,e){const r=await Xa.collection("submissions").doc(n).get(),i=r.exists?r.data():{};e.elements.forEach(s=>{var o;if(s.type==="quill"){const a=document.getElementById(`quill-editor-${s.id}`);if(a&&a.__quill){const l=((o=i==null?void 0:i[e.id])==null?void 0:o[s.id])||"";l&&(a.__quill.root.innerHTML=l)}}})}function nk(n,e){e.elements.forEach(t=>{if(t.type==="quill"){const r=document.getElementById(`quill-editor-${t.id}`);r&&r.__quill&&r.__quill.on("text-change",()=>{const i=r.__quill.root.innerHTML,s={[e.id]:{[t.id]:i}};ZA(n,s)})}})}function rk(n,e){const t=document.createElement("div");t.className="text-element",t.innerHTML=n.content,e.appendChild(t)}function ik(n,e){const t=document.createElement("div");t.className="quill-element";const r=document.createElement("p");r.className="question-prompt",r.textContent=n.question,t.appendChild(r);const i=document.createElement("div");i.id=`quill-editor-${n.id}`,t.appendChild(i),e.appendChild(t),new XA(i,{theme:"snow",modules:{toolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],["clean"]]}})}const sk=document.getElementById("assignment-title"),vu=document.getElementById("stepper-nav"),Hy=document.getElementById("stepper-content"),Wy=document.getElementById("prev-step-btn"),Qy=document.getElementById("next-step-btn"),ok=document.getElementById("print-btn"),ak=document.getElementById("logout-btn");let ft={assignmentData:null,currentStepIndex:0,firebaseUser:null};Ky.onAuthStateChanged(async n=>{n?(console.log("User is logged in:",n.uid),ft.firebaseUser=n,lk()):(console.log("User is not logged in. Redirecting to login page."),window.location.href="login.html")});async function lk(){try{const n="einfuehrungsaufgabe",t=await Xa.collection("assignments").doc(n).get();if(!t.exists)throw new Error(`Assignment "${n}" not found in Firestore.`);const r=t.data();ft.assignmentData=r,sk.textContent=r.assignmentTitle,hk(r.pages),await Ja(0)}catch(n){console.error("Application initialization failed:",n),Hy.innerHTML=`<p style="color: red;">Error loading assignment: ${n.message}</p>`}}async function Ja(n){if(!ft.assignmentData||n<0||n>=ft.assignmentData.pages.length)return;ft.currentStepIndex=n;const e=ft.assignmentData.pages[n];ek(e,Hy),await tk(ft.firebaseUser.uid,e),nk(ft.firebaseUser.uid,e),uk(),ck()}function uk(){vu.querySelectorAll("a").forEach((n,e)=>{n.classList.toggle("active",e===ft.currentStepIndex)})}function ck(){Wy.disabled=ft.currentStepIndex===0,Qy.disabled=ft.currentStepIndex===ft.assignmentData.pages.length-1}function hk(n){vu.innerHTML="",n.forEach((e,t)=>{const r=document.createElement("a");r.href="#",r.textContent=e.title,r.dataset.index=t,r.addEventListener("click",i=>{i.preventDefault(),Ja(t)}),vu.appendChild(r)})}Wy.addEventListener("click",()=>Ja(ft.currentStepIndex-1));Qy.addEventListener("click",()=>Ja(ft.currentStepIndex+1));ok.addEventListener("click",()=>HA(ft.assignmentData,ft.firebaseUser.uid));ak.addEventListener("click",()=>{Ky.signOut()});
