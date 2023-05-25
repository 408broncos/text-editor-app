/*! For license information please see database.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=(t,e)=>e.some((e=>t instanceof e));let e,r;const n=new WeakMap,o=new WeakMap,a=new WeakMap,i=new WeakMap,c=new WeakMap;let u={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return l(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function s(i){return"function"==typeof i?(c=i)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(c)?function(...t){return c.apply(f(this),t),l(n.get(this))}:function(...t){return l(c.apply(f(this),t))}:function(t,...e){const r=c.call(f(this),t,...e);return a.set(r,t.sort?t.sort():[t]),l(r)}:(i instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{e(),n()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)}));o.set(t,e)}(i),t(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(i,u):i);var c}function l(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{e(l(t.result)),n()},a=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&n.set(e,t)})).catch((()=>{})),c.set(e,t),e}(t);if(i.has(t))return i.get(t);const e=s(t);return e!==t&&(i.set(t,e),c.set(e,t)),e}const f=t=>c.get(t);function h(t,e,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),c=l(i);return n&&i.addEventListener("upgradeneeded",(t=>{n(l(i.result),t.oldVersion,t.newVersion,l(i.transaction))})),r&&i.addEventListener("blocked",(()=>r())),c.then((t=>{a&&t.addEventListener("close",(()=>a())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const p=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],v=new Map;function y(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(v.get(e))return v.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=d.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!p.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;return n&&(i=i.index(e.shift())),(await Promise.all([i[r](...e),o&&a.done]))[0]};return v.set(e,a),a}function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(k([])));b&&b!==e&&r.call(b,a)&&(v=b);var w=d.prototype=h.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,a,i,c){var u=l(t[n],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==g(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return p.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),u(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function b(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){b(a,n,o,i,c,"next",t)}function c(t){b(a,n,o,i,c,"throw",t)}i(void 0)}))}}var x;x=u,u={...x,get:(t,e,r)=>y(t,e)||x.get(t,e,r),has:(t,e)=>!!y(t,e)||x.has(t,e)};var L=function(){var t=w(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h("jate",1,{upgrade:function(t){t.objectStoreNames.contains("jate")?console.log("jate database already exists"):(t.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=(L(),function(){var t=w(m().mark((function t(){var e,r,n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("PUT to the database"),e=function(){var t=w(m().mark((function t(e){var r,n,o,a,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h("jate",1);case 3:return r=t.sent,n=r.transaction("jate","readwrite"),o=n.objectStore("jate"),a=o.put({id:1,value:e}),t.next=9,a;case 9:i=t.sent,console.log("🚀 - data saved to the database",i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error("Error saving data to the database",t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),r=function(){var t=w(m().mark((function t(){var e,r,n,o,a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h("jate",1);case 3:return e=t.sent,r=e.transaction("jate","readonly"),n=r.objectStore("jate"),o=n.getAll(),t.next=9,o;case 9:return a=t.sent,console.log("result.value",a),t.abrupt("return",null==a?void 0:a.value);case 14:return t.prev=14,t.t0=t.catch(0),console.error("Error retrieving data from the database",t.t0),t.abrupt("return",null);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),t.next=5,e("Content to be saved");case 5:return t.next=7,r();case 7:return n=t.sent,console.log("Database initialization complete"),t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());L(),E()})();