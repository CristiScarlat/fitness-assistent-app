(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9498:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[W]}function o(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===H}(e)||Array.isArray(e)||!!e[V]||!!(null===(t=e.constructor)||void 0===t?void 0:t[V])||d(e)||f(e))}function s(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:z)(e).forEach(function(n){r&&"symbol"==typeof n||t(n,e[n],e)}):e.forEach(function(r,n){return t(n,r,e)})}function a(e){var t=e[W];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:f(e)?3:0}function l(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function c(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return U&&e instanceof Map}function f(e){return F&&e instanceof Set}function h(e){return e.o||e.t}function p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Z(e);delete t[W];for(var r=z(t),n=0;n<r.length;n++){var i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){return void 0===t&&(t=!1),g(e)||i(e)||!o(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=v),Object.freeze(e),t&&s(e,function(e,t){return m(t,!0)},!0)),e}function v(){n(2)}function g(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function y(e){var t=K[e];return t||n(18,e),t}function b(e,t){t&&(y("Patches"),e.u=[],e.s=[],e.v=t)}function w(e){_(e),e.p.forEach(I),e.p=null}function _(e){e===L&&(L=e.l)}function E(e){return L={p:[],l:L,h:e,m:!0,_:0}}function I(e){var t=e[W];0===t.i||1===t.i?t.j():t.O=!0}function O(e,t){t._=t.p.length;var r=t.p[0],i=void 0!==e&&e!==r;return t.h.g||y("ES5").S(t,e,i),i?(r[W].P&&(w(t),n(4)),o(e)&&(e=S(t,e),t.l||k(t,e)),t.u&&y("Patches").M(r[W].t,e,t.u,t.s)):e=S(t,r,[]),w(t),t.u&&t.v(t.u,t.s),e!==B?e:void 0}function S(e,t,r){if(g(t))return t;var n=t[W];if(!n)return s(t,function(i,o){return T(e,n,t,i,o,r)},!0),t;if(n.A!==e)return t;if(!n.P)return k(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=p(n.k):n.o;s(3===n.i?new Set(i):i,function(t,o){return T(e,n,i,t,o,r)}),k(e,i,!1),r&&e.u&&y("Patches").R(n,r,e.u,e.s)}return n.o}function T(e,t,r,n,s,a){if(i(s)){var c=S(e,s,a&&t&&3!==t.i&&!l(t.D,n)?a.concat(n):void 0);if(u(r,n,c),!i(c))return;e.m=!1}if(o(s)&&!g(s)){if(!e.h.F&&e._<1)return;S(e,s),t&&t.A.l||k(e,s)}}function k(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&m(t,r)}function C(e,t){var r=e[W];return(r?h(r):e)[t]}function x(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function P(e){e.P||(e.P=!0,e.l&&P(e.l))}function N(e){e.o||(e.o=p(e.t))}function R(e,t,r){var n,i,o,s,a,l,u,c=d(t)?y("MapSet").N(t,r):f(t)?y("MapSet").T(t,r):e.g?(o=i={i:(n=Array.isArray(t))?1:0,A:r?r.A:L,P:!1,I:!1,D:{},l:r,t:t,k:null,o:null,j:null,C:!1},s=q,n&&(o=[i],s=G),l=(a=Proxy.revocable(o,s)).revoke,u=a.proxy,i.k=u,i.j=l,u):y("ES5").J(t,r);return(r?r.A:L).p.push(c),c}function A(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return p(e)}r.d(t,{xC:function(){return eI},oM:function(){return eT}});var j,D,L,M="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),U="undefined"!=typeof Map,F="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=M?Symbol.for("immer-nothing"):((D={})["immer-nothing"]=!0,D),V=M?Symbol.for("immer-draftable"):"__$immer_draftable",W=M?Symbol.for("immer-state"):"__$immer_state",H=""+Object.prototype.constructor,z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Z=Object.getOwnPropertyDescriptors||function(e){var t={};return z(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},K={},q={get:function(e,t){if(t===W)return e;var r,n,i=h(e);if(!l(i,t))return(n=x(i,t))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(e.k):void 0;var s=i[t];return e.I||!o(s)?s:s===C(e.t,t)?(N(e),e.o[t]=R(e.A.h,s,e)):s},has:function(e,t){return t in h(e)},ownKeys:function(e){return Reflect.ownKeys(h(e))},set:function(e,t,r){var n=x(h(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=C(h(e),t),o=null==i?void 0:i[W];if(o&&o.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||l(e.t,t)))return!0;N(e),P(e)}return e.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in e.o)||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==C(e.t,t)||t in e.t?(e.D[t]=!1,N(e),P(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=h(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},G={};s(q,function(e,t){G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),G.deleteProperty=function(e,t){return G.set.call(this,e,t,void 0)},G.set=function(e,t,r){return q.set.call(this,e[0],t,r,e[0])};var J=new(function(){function e(e){var t=this;this.g=$,this.F=!0,this.produce=function(e,r,i){if("function"==typeof e&&"function"!=typeof r){var s,a=r;return r=e,function(e){var n=this;void 0===e&&(e=a);for(var i=arguments.length,o=Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return t.produce(e,function(e){var t;return(t=r).call.apply(t,[n,e].concat(o))})}}if("function"!=typeof r&&n(6),void 0!==i&&"function"!=typeof i&&n(7),o(e)){var l=E(t),u=R(t,e,void 0),c=!0;try{s=r(u),c=!1}finally{c?w(l):_(l)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then(function(e){return b(l,i),O(e,l)},function(e){throw w(l),e}):(b(l,i),O(s,l))}if(!e||"object"!=typeof e){if(void 0===(s=r(e))&&(s=e),s===B&&(s=void 0),t.F&&m(s,!0),i){var d=[],f=[];y("Patches").M(e,s,d,f),i(d,f)}return s}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.produceWithPatches(r,function(t){return e.apply(void 0,[t].concat(i))})};var n,i,o=t.produce(e,r,function(e,t){n=e,i=t});return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return[e,n,i]}):[o,n,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){o(e)||n(8),i(e)&&(i(t=e)||n(22,t),e=function e(t){if(!o(t))return t;var r,n=t[W],i=a(t);if(n){if(!n.P&&(n.i<4||!y("ES5").K(n)))return n.t;n.I=!0,r=A(t,i),n.I=!1}else r=A(t,i);return s(r,function(t,i){var o;n&&(2===a(o=n.t)?o.get(t):o[t])===i||u(r,t,e(i))}),3===i?new Set(r):r}(t));var t,r=E(this),l=R(this,e,void 0);return l[W].C=!0,_(r),l},t.finishDraft=function(e,t){var r=(e&&e[W]).A;return b(r,t),O(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!$&&n(20),this.g=e},t.applyPatches=function(e,t){for(r=t.length-1;r>=0;r--){var r,n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var o=y("Patches").$;return i(e)?o(e,t):this.produce(e,function(e){return o(e,t)})},e}()),X=J.produce;function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){var n,i;n=e,i=r[t],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ee(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J),J.setUseProxies.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J);var et="function"==typeof Symbol&&Symbol.observable||"@@observable",er=function(){return Math.random().toString(36).substring(7).split("").join(".")},en={INIT:"@@redux/INIT"+er(),REPLACE:"@@redux/REPLACE"+er(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+er()}};function ei(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function eo(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw Error(ee(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map(function(e){return e(i)});return n=ei.apply(void 0,o)(r.dispatch),Q(Q({},r),{},{dispatch:n})}}}function es(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}var ea=es();ea.withExtraArgument=es,r(3454);var el=(j=function(e,t){return(j=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}j(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),eu=function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},ec=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},ed=Object.defineProperty,ef=Object.defineProperties,eh=Object.getOwnPropertyDescriptors,ep=Object.getOwnPropertySymbols,em=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,eg=function(e,t,r){return t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ey=function(e,t){for(var r in t||(t={}))em.call(t,r)&&eg(e,r,t[r]);if(ep)for(var n=0,i=ep(t);n<i.length;n++){var r=i[n];ev.call(t,r)&&eg(e,r,t[r])}return e},eb=function(e,t){return ef(e,eh(t))},ew="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?ei:ei.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var e_=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return el(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ec([void 0],e[0].concat(this)))):new(t.bind.apply(t,ec([void 0],e.concat(this))))},t}(Array);function eE(e){return o(e)?X(e,function(){}):e}function eI(e){var t,r=function(e){var t,r,n,i;return void 0===(t=e)&&(t={}),n=void 0===(r=t.thunk)||r,t.immutableCheck,t.serializableCheck,i=new e_,n&&("boolean"==typeof n?i.push(ea):i.push(ea.withExtraArgument(n.extraArgument))),i},n=e||{},i=n.reducer,o=void 0===i?void 0:i,s=n.middleware,a=void 0===s?r():s,l=n.devTools,u=void 0===l||l,c=n.preloadedState,d=n.enhancers,f=void 0===d?void 0:d;if("function"==typeof o)t=o;else if(function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}(o))t=function(e){for(var t,r=Object.keys(e),n={},i=0;i<r.length;i++){var o=r[i];"function"==typeof e[o]&&(n[o]=e[o])}var s=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:en.INIT}))throw Error(ee(12));if(void 0===r(void 0,{type:en.PROBE_UNKNOWN_ACTION()}))throw Error(ee(13))})}(n)}catch(a){t=a}return function(e,r){if(void 0===e&&(e={}),t)throw t;for(var i=!1,o={},a=0;a<s.length;a++){var l=s[a],u=n[l],c=e[l],d=u(c,r);if(void 0===d)throw r&&r.type,Error(ee(14));o[l]=d,i=i||d!==c}return(i=i||s.length!==Object.keys(e).length)?o:e}}(o);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;"function"==typeof h&&(h=h(r));var p=eo.apply(void 0,h),m=ei;u&&(m=ew(ey({trace:!1},"object"==typeof u&&u)));var v=[p];return Array.isArray(f)?v=ec([p],f):"function"==typeof f&&(v=f(v)),function e(t,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(ee(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(ee(1));return n(e)(t,r)}if("function"!=typeof t)throw Error(ee(2));var i,o=t,s=r,a=[],l=a,u=!1;function c(){l===a&&(l=a.slice())}function d(){if(u)throw Error(ee(3));return s}function f(e){if("function"!=typeof e)throw Error(ee(4));if(u)throw Error(ee(5));var t=!0;return c(),l.push(e),function(){if(t){if(u)throw Error(ee(6));t=!1,c();var r=l.indexOf(e);l.splice(r,1),a=null}}}function h(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(ee(7));if(void 0===e.type)throw Error(ee(8));if(u)throw Error(ee(9));try{u=!0,s=o(s,e)}finally{u=!1}for(var t=a=l,r=0;r<t.length;r++)(0,t[r])();return e}return h({type:en.INIT}),(i={dispatch:h,subscribe:f,getState:d,replaceReducer:function(e){if("function"!=typeof e)throw Error(ee(10));o=e,h({type:en.REPLACE})}})[et]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw Error(ee(11));function t(){e.next&&e.next(d())}return t(),{unsubscribe:f(t)}}})[et]=function(){return this},e},i}(t,void 0===c?void 0:c,m.apply(void 0,v))}function eO(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var i=t.apply(void 0,r);if(!i)throw Error("prepareAction did not return an object");return ey(ey({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function eS(e){var t,r={},n=[],i={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(n in r)throw Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,i},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[r,n,t]}function eT(e){var t,r=e.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof e.initialState?e.initialState:eE(e.initialState),s=e.reducers||{},a=Object.keys(s),l={},u={},c={};function d(){var t="function"==typeof e.extraReducers?eS(e.extraReducers):[e.extraReducers],r=t[0],s=t[1],a=void 0===s?[]:s,l=t[2],c=void 0===l?void 0:l,d=ey(ey({},void 0===r?{}:r),u);return function(e,t,r,n){void 0===r&&(r=[]);var s,a="function"==typeof t?eS(t):[t,r,void 0],l=a[0],u=a[1],c=a[2];if("function"==typeof e)s=function(){return eE(e())};else{var d=eE(e);s=function(){return d}}function f(e,t){void 0===e&&(e=s());var r=ec([l[t.type]],u.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===r.filter(function(e){return!!e}).length&&(r=[c]),r.reduce(function(e,r){if(r){if(i(e)){var n=r(e,t);return void 0===n?e:n}if(o(e))return X(e,function(e){return r(e,t)});var n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e},e)}return f.getInitialState=s,f}(n,function(e){for(var t in d)e.addCase(t,d[t]);for(var r=0;r<a.length;r++){var n=a[r];e.addMatcher(n.matcher,n.reducer)}c&&e.addDefaultCase(c)})}return a.forEach(function(e){var t,n,i=s[e],o=r+"/"+e;"reducer"in i?(t=i.reducer,n=i.prepare):t=i,l[e]=t,u[o]=t,c[e]=n?eO(o,n):eO(o)}),{name:r,reducer:function(e,r){return t||(t=d()),t(e,r)},actions:c,caseReducers:l,getInitialState:function(){return t||(t=d()),t.getInitialState()}}}var ek=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eC=["name","message","stack","code"],ex=function(e,t){this.payload=e,this.meta=t},eP=function(e,t){this.payload=e,this.meta=t},eN=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0;r<eC.length;r++){var n=eC[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function eR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,r){var n=eO(e+"/fulfilled",function(e,t,r,n){return{payload:e,meta:eb(ey({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}}),i=eO(e+"/pending",function(e,t,r){return{payload:void 0,meta:eb(ey({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),o=eO(e+"/rejected",function(e,t,n,i,o){return{payload:i,error:(r&&r.serializeError||eN)(e||"Rejected"),meta:eb(ey({},o||{}),{arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),s="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(a,l,u){var c,d=(null==r?void 0:r.idGenerator)?r.idGenerator(e):ek(),f=new s,h=new Promise(function(e,t){return f.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),p=!1;function m(e){p&&(c=e,f.abort())}var v=function(){var s,c;return s=this,c=function(){var s,c,v,g,y;return eu(this,function(b){switch(b.label){case 0:var w;if(b.trys.push([0,4,,5]),!(null!==(w=g=null==(s=null==r?void 0:r.condition)?void 0:s.call(r,e,{getState:l,extra:u}))&&"object"==typeof w&&"function"==typeof w.then))return[3,2];return[4,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return p=!0,a(i(d,e,null==(c=null==r?void 0:r.getPendingMeta)?void 0:c.call(r,{requestId:d,arg:e},{getState:l,extra:u}))),[4,Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:l,extra:u,requestId:d,signal:f.signal,abort:m,rejectWithValue:function(e,t){return new ex(e,t)},fulfillWithValue:function(e,t){return new eP(e,t)}})).then(function(t){if(t instanceof ex)throw t;return t instanceof eP?n(t.payload,d,e,t.meta):n(t,d,e)})])];case 3:return v=b.sent(),[3,5];case 4:return v=(y=b.sent())instanceof ex?o(null,d,e,y.payload,y.meta):o(y,d,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&o.match(v)&&v.meta.condition||a(v),[2,v]}})},new Promise(function(e,t){var r=function(e){try{i(c.next(e))}catch(r){t(r)}},n=function(e){try{i(c.throw(e))}catch(r){t(r)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,n)};i((c=c.apply(s,null)).next())})}();return Object.assign(v,{abort:m,requestId:d,arg:e,unwrap:function(){return v.then(eR)}})}},{pending:i,rejected:o,fulfilled:n,typePrefix:e})}e.withTypes=e}();var eA="listenerMiddleware";eO(eA+"/add"),eO(eA+"/removeAll"),eO(eA+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:r.g),function(){function e(e,t){var r=o[e];return r?r.enumerable=t:o[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[W];return q.get(t,e)},set:function(t){var r=this[W];q.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var i=e[t][W];if(!i.P)switch(i.i){case 5:n(i)&&P(i);break;case 4:r(i)&&P(i)}}}function r(e){for(var t=e.t,r=e.k,n=z(r),i=n.length-1;i>=0;i--){var o=n[i];if(o!==W){var s=t[o];if(void 0===s&&!l(t,o))return!0;var a=r[o],u=a&&a[W];if(u?u.t!==s:!c(a,s))return!0}}var d=!!t[W];return n.length!==z(t).length+(d?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var o={};K.ES5||(K.ES5={J:function(t,r){var n=Array.isArray(t),i=function(t,r){if(t){for(var n=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(n,""+i,e(i,!0));return n}var o=Z(r);delete o[W];for(var s=z(o),a=0;a<s.length;a++){var l=s[a];o[l]=e(l,t||!!o[l].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(n,t),o={i:n?5:4,A:r?r.A:L,P:!1,I:!1,D:{},l:r,t:t,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,W,{value:o,writable:!0}),i},S:function(e,r,o){o?i(r)&&r[W].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[W];if(r){var i=r.t,o=r.k,a=r.D,u=r.i;if(4===u)s(o,function(t){t!==W&&(void 0!==i[t]||l(i,t)?a[t]||e(o[t]):(a[t]=!0,P(r)))}),s(i,function(e){void 0!==o[e]||l(o,e)||(a[e]=!1,P(r))});else if(5===u){if(n(r)&&(P(r),a.length=!0),o.length<i.length)for(var c=o.length;c<i.length;c++)a[c]=!1;else for(var d=i.length;d<o.length;d++)a[d]=!0;for(var f=Math.min(o.length,i.length),h=0;h<f;h++)o.hasOwnProperty(h)||(a[h]=!0),void 0===a[h]&&e(o[h])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}()},2092:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(){return(0,n.useState)(null)}},2029:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=(0,n.useRef)(e);return(0,n.useEffect)(function(){t.current=e},[e]),t}},8146:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),i=r(2029);function o(e){var t=(0,i.Z)(e);return(0,n.useCallback)(function(){return t.current&&t.current.apply(t,arguments)},[t])}},5111:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7294),i=r(8146);function o(e,t,r,o){void 0===o&&(o=!1);var s=(0,i.Z)(r);(0,n.useEffect)(function(){var r="function"==typeof e?e():e;return r.addEventListener(t,s,o),function(){return r.removeEventListener(t,s,o)}},[e])}},4357:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(){return(0,n.useReducer)(function(e){return!e},!1)[1]}},9585:function(e,t,r){"use strict";var n=r(7294),i=void 0!==r.g&&r.g.navigator&&"ReactNative"===r.g.navigator.product;t.Z="undefined"!=typeof document||i?n.useLayoutEffect:n.useEffect},5654:function(e,t,r){"use strict";var n=r(7294),i=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.Z=function(e,t){return(0,n.useMemo)(function(){var r,n;return r=i(e),n=i(t),function(e){r&&r(e),n&&n(e)}},[e,t])}},6454:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(){var e=(0,n.useRef)(!0),t=(0,n.useRef)(function(){return e.current});return(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),t.current}},8833:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);function i(e){var t=(0,n.useRef)(null);return(0,n.useEffect)(function(){t.current=e}),t.current}},3551:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294);r(2092),r(2029);var i=r(8146);r(5111),r(6454),r(8833),r(9585),new WeakMap;var o=r(861),s=r(5893);let a=["onKeyDown"],l=n.forwardRef((e,t)=>{var r;let{onKeyDown:n}=e,l=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a),[u]=(0,o.FT)(Object.assign({tagName:"a"},l)),c=(0,i.Z)(e=>{u.onKeyDown(e),null==n||n(e)});return(r=l.href)&&"#"!==r.trim()&&"button"!==l.role?(0,s.jsx)("a",Object.assign({ref:t},l,{onKeyDown:n})):(0,s.jsx)("a",Object.assign({ref:t},l,u,{onKeyDown:c}))});l.displayName="Anchor";var u=l},861:function(e,t,r){"use strict";r.d(t,{FT:function(){return s}});var n=r(7294),i=r(5893);let o=["as","disabled"];function s({tagName:e,disabled:t,href:r,target:n,rel:i,role:o,onClick:s,tabIndex:a=0,type:l}){e||(e=null!=r||null!=n||null!=i?"a":"button");let u={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},u];let c=n=>{var i;if(!t&&("a"!==e||(i=r)&&"#"!==i.trim())||n.preventDefault(),t){n.stopPropagation();return}null==s||s(n)},d=e=>{" "===e.key&&(e.preventDefault(),c(e))};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:a,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:c,onKeyDown:d},u]}let a=n.forwardRef((e,t)=>{let{as:r,disabled:n}=e,a=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,o),[l,{tagName:u}]=s(Object.assign({tagName:r,disabled:n},a));return(0,i.jsx)(u,Object.assign({},a,l,{ref:t}))});a.displayName="Button",t.ZP=a},2747:function(e,t,r){"use strict";function n(e){return`data-rr-ui-${e}`}function i(e){return`rrUi${e}`}r.d(t,{$F:function(){return i},PB:function(){return n}})},6056:function(e,t,r){"use strict";var n=r(7294);let i=n.createContext(null);i.displayName="NavContext",t.Z=i},7126:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var n=r(7294);let i=n.createContext(null),o=(e,t=null)=>null!=e?String(e):t||null;t.Z=i},2963:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),i=r(3004);let o=(0,n.createContext)(i.Z?window:void 0);function s(){return(0,n.useContext)(o)}o.Provider},4184:function(e,t){var r; /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},9351:function(e,t,r){"use strict";var n=r(3004),i=!1,o=!1;try{var s={get passive(){return i=!0},get once(){return o=i=!0}};n.Z&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch(a){}t.ZP=function(e,t,r,n){if(n&&"boolean"!=typeof n&&!o){var s=n.once,a=n.capture,l=r;!o&&s&&(l=r.__once||function e(n){this.removeEventListener(t,e,a),r.call(this,n)},r.__once=l),e.addEventListener(t,l,i?n:a)}e.addEventListener(t,r,n)}},3004:function(e,t){"use strict";t.Z=!!("undefined"!=typeof window&&window.document&&window.document.createElement)},424:function(e,t,r){"use strict";function n(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}r.d(t,{Z:function(){return n}})},5096:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(9351),i=function(e,t,r,n){var i=n&&"boolean"!=typeof n?n.capture:n;e.removeEventListener(t,r,i),r.__once&&e.removeEventListener(t,r.__once,i)},o=function(e,t,r,o){return(0,n.ZP)(e,t,r,o),function(){i(e,t,r,o)}}},7216:function(e,t,r){"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:function(){return n}})},930:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(e,t){return n(e.querySelectorAll(t))}},8679:function(e,t,r){"use strict";var n=r(9864),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?s:a[e.$$typeof]||i}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=s;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(p){var i=h(r);i&&i!==p&&e(t,i,n)}var s=c(r);d&&(s=s.concat(d(r)));for(var a=l(t),m=l(r),v=0;v<s.length;++v){var g=s[v];if(!o[g]&&!(n&&n[g])&&!(m&&m[g])&&!(a&&a[g])){var y=f(r,g);try{u(t,g,y)}catch(b){}}}}return t}},1143:function(e){"use strict";e.exports=function(e,t,r,n,i,o,s,a){if(!e){var l;if(void 0===t)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,i,o,s,a],c=0;(l=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},3454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(7663)},1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4079)}])},1840:function(e,t,r){"use strict";let n,i;r.d(t,{hJ:function(){return tZ},I8:function(){return r8},Xb:function(){return t4},e5:function(){return t3},rh:function(){return rk},w7:function(){return t5}});var o,s,a,l,u=r(3454);/**
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
 */ let c=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},d=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){let s=e[r++],a=e[r++],l=e[r++],u=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&l)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{let c=e[r++],d=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&d)}}return t.join("")},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(3&o)<<4|a>>4,f=(15&a)<<2|u>>6,h=63&u;l||(h=64,s||(f=64)),n.push(r[c],r[d],r[f],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):d(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let o=r[e.charAt(i++)],s=i<e.length,a=s?r[e.charAt(i)]:0;++i;let l=i<e.length,u=l?r[e.charAt(i)]:64;++i;let c=i<e.length,d=c?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==u||null==d)throw Error();let f=o<<2|a>>4;if(n.push(f),64!==u){let h=a<<4&240|u>>2;if(n.push(h),64!==d){let p=u<<6&192|d;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){let t=c(e);return f.encodeByteArray(t,!0)},p=function(e){return h(e).replace(/\./g,"")},m=function(e){try{return f.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */ function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}/**
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
 */ let g=()=>(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,y=()=>{if(void 0===u||void 0===u.env)return;let e=u.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let r=e&&m(e[1]);return r&&JSON.parse(r)},w=()=>{try{return g()||y()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_=e=>{var t,r;return null===(r=null===(t=w())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},E=()=>{var e;return null===(e=w())||void 0===e?void 0:e.config},I=e=>{var t;return null===(t=w())||void 0===t?void 0:t[`_${e}`]};/**
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
 */ class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class S extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?i.replace(k,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",s=`${this.serviceName}: ${o} (${n}).`,a=new S(n,s,r);return a}}let k=/\{\$([^}]+)}/g;function C(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let o=e[i],s=t[i];if(x(o)&&x(s)){if(!C(o,s))return!1}else if(o!==s)return!1}for(let a of n)if(!r.includes(a))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}/**
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
 */ function P(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function N(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function R(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=j),void 0===n.error&&(n.error=j),void 0===n.complete&&(n.complete=j);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j(){}/**
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
 */ function D(e){return e&&e._delegate?e._delegate:e}class L{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */ let M="[DEFAULT]";/**
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
 */ class U{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new O;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:M})}catch(t){}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let o=this.getOrInitializeService({instanceIdentifier:i});n.resolve(o)}catch(s){}}}}clearInstance(e=M){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=M){return this.instances.has(e)}getOptions(e=M){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,o]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(i);r===s&&o.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===M?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=M){return this.component?this.component.multipleInstances?e:M:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */ class F{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new U(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */ let $=[];(s=l||(l={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";let B={debug:l.DEBUG,verbose:l.VERBOSE,info:l.INFO,warn:l.WARN,error:l.ERROR,silent:l.SILENT},V=l.INFO,W={[l.DEBUG]:"log",[l.VERBOSE]:"log",[l.INFO]:"info",[l.WARN]:"warn",[l.ERROR]:"error"},H=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=W[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class z{constructor(e){this.name=e,this._logLevel=V,this._logHandler=H,this._userLogHandler=null,$.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?B[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l.DEBUG,...e),this._logHandler(this,l.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l.VERBOSE,...e),this._logHandler(this,l.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l.INFO,...e),this._logHandler(this,l.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l.WARN,...e),this._logHandler(this,l.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l.ERROR,...e),this._logHandler(this,l.ERROR,...e)}}let Z=(e,t)=>t.some(t=>e instanceof t),K=new WeakMap,q=new WeakMap,G=new WeakMap,J=new WeakMap,X=new WeakMap,Y={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return q.get(e);if("objectStoreNames"===t)return e.objectStoreNames||G.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Q(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Q(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(Q(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&K.set(t,e)}).catch(()=>{}),X.set(t,e),t}(e);if(J.has(e))return J.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(ee(this),e),Q(K.get(this))}:function(...e){return Q(t.apply(ee(this),e))}:function(e,...r){let n=t.call(ee(this),e,...r);return G.set(n,e.sort?e.sort():[e]),Q(n)}:(t instanceof IDBTransaction&&function(e){if(q.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});q.set(e,t)}(t),Z(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,Y):t;return r!==e&&(J.set(e,r),X.set(r,e)),r}let ee=e=>X.get(e),et=["get","getKey","getAll","getAllKeys","count"],er=["put","add","delete","clear"],en=new Map;function ei(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(en.get(t))return en.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=er.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||et.includes(r)))return;let o=async function(e,...t){let o=this.transaction(e,i?"readwrite":"readonly"),s=o.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&o.done]))[0]};return en.set(t,o),o}Y={...o=Y,get:(e,t,r)=>ei(e,t)||o.get(e,t,r),has:(e,t)=>!!ei(e,t)||o.has(e,t)};/**
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
 */ class eo{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let es="@firebase/app",ea="0.8.4",el=new z("@firebase/app"),eu="[DEFAULT]",ec={[es]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ed=new Map,ef=new Map;function eh(e){let t=e.name;if(ef.has(t))return el.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(ef.set(t,e),ed.values()))!function(e,t){try{e.container.addComponent(t)}catch(r){el.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}function ep(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let em=new T("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */ class ev{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new L("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw em.create("app-deleted",{appName:this._name})}}/**
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
 */ let eg="9.14.0";function ey(e,t={}){let r=e;if("object"!=typeof t){let n=t;t={name:n}}let i=Object.assign({name:eu,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw em.create("bad-app-name",{appName:String(o)});if(r||(r=E()),!r)throw em.create("no-options");let s=ed.get(o);if(s){if(C(r,s.options)&&C(i,s.config))return s;throw em.create("duplicate-app",{appName:o})}let a=new F(o);for(let l of ef.values())a.addComponent(l);let u=new ev(r,i,a);return ed.set(o,u),u}function eb(e,t,r){var n;let i=null!==(n=ec[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){let a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),el.warn(a.join(" "));return}eh(new L(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let ew="firebase-heartbeat-store",e_=null;function eE(){return e_||(e_=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let s=indexedDB.open(e,1),a=Q(s);return n&&s.addEventListener("upgradeneeded",e=>{n(Q(s.result),e.oldVersion,e.newVersion,Q(s.transaction))}),r&&s.addEventListener("blocked",()=>r()),a.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade(e,t){0===t&&e.createObjectStore(ew)}}).catch(e=>{throw em.create("idb-open",{originalErrorMessage:e.message})})),e_}async function eI(e){try{let t=await eE();return t.transaction(ew).objectStore(ew).get(eS(e))}catch(n){if(n instanceof S)el.warn(n.message);else{let r=em.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});el.warn(r.message)}}}async function eO(e,t){try{let r=await eE(),n=r.transaction(ew,"readwrite"),i=n.objectStore(ew);return await i.put(t,eS(e)),n.done}catch(s){if(s instanceof S)el.warn(s.message);else{let o=em.create("idb-set",{originalErrorMessage:null==s?void 0:s.message});el.warn(o.message)}}}function eS(e){return`${e.name}!${e.options.appId}`}class eT{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eC(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=ek();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=ek(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let o=r.find(e=>e.agent===i.agent);if(o){if(o.dates.push(i.date),ex(r)>t){o.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),ex(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=p(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function ek(){let e=new Date;return e.toISOString().substring(0,10)}class eC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(o){t(o)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await eI(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return eO(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return eO(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ex(e){return p(JSON.stringify({version:2,heartbeats:e})).length}eh(new L("platform-logger",e=>new eo(e),"PRIVATE")),eh(new L("heartbeat",e=>new eT(e),"PRIVATE")),eb(es,ea,""),eb(es,ea,"esm2017"),eb("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ eb("firebase","9.14.0","app");function eP(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function eN(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let eR=new T("auth","Firebase",eN()),eA=new z("@firebase/auth");function ej(e,...t){eA.logLevel<=l.ERROR&&eA.error(`Auth (${eg}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eD(e,...t){throw eU(e,...t)}function eL(e,...t){return eU(e,...t)}function eM(e,t,r){let n=Object.assign(Object.assign({},eN()),{[t]:r}),i=new T("auth","Firebase",n);return i.create(t,{appName:e.name})}function eU(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return eR.create(e,...t)}function eF(e,t,...r){if(!e)throw eU(t,...r)}function e$(e){let t="INTERNAL ASSERTION FAILED: "+e;throw ej(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eB=new Map;function eV(e){e instanceof Function||e$("Expected a class definition");let t=eB.get(e);return t?(t instanceof e||e$("Instance stored in cache mismatched with class"),t):(t=new e,eB.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eW(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function eH(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ez{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||e$("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===eH()||"https:"===eH()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eZ(e,t){e.emulator||e$("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eK{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void e$("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void e$("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void e$("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eq={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},eG=new ez(3e4,6e4);function eJ(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function eX(e,t,r,n,i={}){return eY(e,i,async()=>{let i={},o={};n&&("GET"===t?o=n:i={body:JSON.stringify(n)});let s=P(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),eK.fetch()(e0(e,e.config.apiHost,r,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function eY(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},eq),t);try{let i=new e1(e),o=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();let s=await o.json();if("needConfirmation"in s)throw e2(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{let a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===l)throw e2(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===l)throw e2(e,"email-already-in-use",s);if("USER_DISABLED"===l)throw e2(e,"user-disabled",s);let c=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eM(e,c,u);eD(e,c)}}catch(d){if(d instanceof S)throw d;eD(e,"network-request-failed")}}async function eQ(e,t,r,n,i={}){let o=await eX(e,t,r,n,i);return"mfaPendingCredential"in o&&eD(e,"multi-factor-auth-required",{_serverResponse:o}),o}function e0(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?eZ(e.config,i):`${e.config.apiScheme}://${i}`}class e1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(eL(this.auth,"network-request-failed")),eG.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function e2(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=eL(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e6(e,t){return eX(e,"POST","/v1/accounts:delete",t)}async function e4(e,t){return eX(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e3(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(r){}}async function e5(e,t=!1){let r=D(e),n=await r.getIdToken(t),i=e8(n);eF(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let o="object"==typeof i.firebase?i.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:e3(e9(i.auth_time)),issuedAtTime:e3(e9(i.iat)),expirationTime:e3(e9(i.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function e9(e){return 1e3*Number(e)}function e8(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return ej("JWT malformed, contained fewer than 3 sections"),null;try{let i=m(r);if(!i)return ej("Failed to decode base64 JWT payload"),null;return JSON.parse(i)}catch(o){return ej("Caught error parsing JWT payload as JSON",null==o?void 0:o.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function e7(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof S&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}{this.errorBackoff=3e4;let n=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,i=n-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=e3(this.lastLoginAt),this.creationTime=e3(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */ async function tr(e){var t;let r=e.auth,n=await e.getIdToken(),i=await e7(e,e4(r,{idToken:n}));eF(null==i?void 0:i.users.length,r,"internal-error");let o=i.users[0];e._notifyReloadListener(o);let s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,r=eP(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],a=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null==a?void 0:a.length),c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new tt(o.createdAt,o.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}async function tn(e){let t=D(e);await tr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ti(e,t){let r=await eY(e,{},async()=>{let r=P({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,o=e0(e,n,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",eK.fetch()(o,{method:"POST",headers:s,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){eF(e.idToken,"internal-error"),eF(void 0!==e.idToken,"internal-error"),eF(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=e8(e);return eF(t,"internal-error"),eF(void 0!==t.exp,"internal-error"),eF(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(eF(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await ti(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,o=new to;return r&&(eF("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),n&&(eF("string"==typeof n,"internal-error",{appName:e}),o.accessToken=n),i&&(eF("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return e$("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ts(e,t){eF("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ta{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=eP(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await e7(this,this.stsTokenManager.getToken(this.auth,e));return eF(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return e5(this,e)}reload(){return tn(this)}_assign(e){this!==e&&(eF(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ta(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){eF(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await tr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await e7(this,e6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,o,s,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:E}=t;eF(y&&E,e,"internal-error");let I=to.fromJSON(this.name,E);eF("string"==typeof y,e,"internal-error"),ts(c,e.name),ts(d,e.name),eF("boolean"==typeof b,e,"internal-error"),eF("boolean"==typeof w,e,"internal-error"),ts(f,e.name),ts(h,e.name),ts(p,e.name),ts(m,e.name),ts(v,e.name),ts(g,e.name);let O=new ta({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:g});return _&&Array.isArray(_)&&(O.providerData=_.map(e=>Object.assign({},e))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,t,r=!1){let n=new to;n.updateFromServerResponse(t);let i=new ta({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await tr(i),i}}/**
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
 */ class tl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
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
 */ function tu(e,t,r){return`firebase:${e}:${t}:${r}`}tl.type="NONE";class tc{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=tu(this.userKey,n.apiKey,i),this.fullPersistenceKey=tu("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ta._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tc(eV(tl),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||eV(tl),o=tu(r,e.config.apiKey,e.name),s=null;for(let a of t)try{let l=await a._get(o);if(l){let u=ta._fromJSON(e,l);a!==i&&(s=u),i=a;break}}catch(c){}let d=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&d.length&&(i=d[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(t){}}))),new tc(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function td(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(tf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tg(t))return"Blackberry";if(ty(t))return"Webos";if(th(t))return"Safari";if((t.includes("chrome/")||tp(t))&&!t.includes("edge/"))return"Chrome";if(tv(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function tf(e=v()){return/firefox\//i.test(e)}function th(e=v()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tp(e=v()){return/crios\//i.test(e)}function tm(e=v()){return/iemobile/i.test(e)}function tv(e=v()){return/android/i.test(e)}function tg(e=v()){return/blackberry/i.test(e)}function ty(e=v()){return/webos/i.test(e)}function tb(e=v()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tw(e=v()){return tb(e)||tv(e)||ty(e)||tg(e)||/windows phone/i.test(e)||tm(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function t_(e,t=[]){let r;switch(e){case"Browser":r=td(v());break;case"Worker":r=`${td(v())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${eg}/${n}`}/**
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
 */ class tE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let i=e(t);r(i)}catch(o){n(o)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(o){for(let n of(t.reverse(),t))try{n()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==o?void 0:o.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tI{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tO(this),this.idTokenSubscription=new tO(this),this.beforeStateQueue=new tE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eR,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=eV(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await tc.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(eF(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tr(e)}catch(t){if((null==t?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?D(e):null;return t&&eF(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&eF(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(eV(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new T("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&eV(e)||this._popupRedirectResolver;eF(t,this,"argument-error"),this.redirectPersistenceManager=await tc.create(this,[eV(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return(eF(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t)?e.addObserver(t,r,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return eF(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}class tO{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new A(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return eF(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tS(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tT(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tk{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return e$("not implemented")}_getIdTokenResponse(e){return e$("not implemented")}_linkToIdToken(e,t){return e$("not implemented")}_getReauthenticationResolver(e){return e$("not implemented")}}async function tC(e,t){return eX(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tx(e,t){return eQ(e,"POST","/v1/accounts:signInWithPassword",eJ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tP(e,t){return eQ(e,"POST","/v1/accounts:signInWithEmailLink",eJ(e,t))}async function tN(e,t){return eQ(e,"POST","/v1/accounts:signInWithEmailLink",eJ(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tR extends tk{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new tR(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new tR(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return tx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tP(e,{email:this._email,oobCode:this._password});default:eD(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tC(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tN(e,{idToken:t,email:this._email,oobCode:this._password});default:eD(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tA(e,t){return eQ(e,"POST","/v1/accounts:signInWithIdp",eJ(e,t))}class tj extends tk{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new tj(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):eD("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=eP(t,["providerId","signInMethod"]);if(!r||!n)return null;let o=new tj(r,n);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return tA(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tA(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tA(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=P(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tD(e,t){return eX(e,"POST","/v1/accounts:sendVerificationCode",eJ(e,t))}async function tL(e,t){return eQ(e,"POST","/v1/accounts:signInWithPhoneNumber",eJ(e,t))}async function tM(e,t){let r=await eQ(e,"POST","/v1/accounts:signInWithPhoneNumber",eJ(e,t));if(r.temporaryProof)throw e2(e,"account-exists-with-different-credential",r);return r}let tU={USER_NOT_FOUND:"user-not-found"};async function tF(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return eQ(e,"POST","/v1/accounts:signInWithPhoneNumber",eJ(e,r),tU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t$ extends tk{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new t$({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new t$({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return tM(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tF(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new t$({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class tB{constructor(e){var t,r,n,i,o,s;let a=N(R(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(r=a.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=a.mode)&&void 0!==n?n:null);eF(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){let t=function(e){let t=N(R(e)).link,r=t?N(R(t)).deep_link_id:null,n=N(R(e)).deep_link_id,i=n?N(R(n)).link:null;return i||n||r||t||e}(e);try{return new tB(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tV{constructor(){this.providerId=tV.PROVIDER_ID}static credential(e,t){return tR._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=tB.parseLink(t);return eF(r,"argument-error"),tR._fromEmailAndCode(e,r.code,r.tenantId)}}tV.PROVIDER_ID="password",tV.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tV.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tW{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */ class tH extends tW{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tz extends tH{constructor(){super("facebook.com")}static credential(e){return tj._fromParams({providerId:tz.PROVIDER_ID,signInMethod:tz.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tz.credentialFromTaggedObject(e)}static credentialFromError(e){return tz.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tz.credential(e.oauthAccessToken)}catch(t){return null}}}tz.FACEBOOK_SIGN_IN_METHOD="facebook.com",tz.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tZ extends tH{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tj._fromParams({providerId:tZ.PROVIDER_ID,signInMethod:tZ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tZ.credentialFromTaggedObject(e)}static credentialFromError(e){return tZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tZ.credential(t,r)}catch(n){return null}}}tZ.GOOGLE_SIGN_IN_METHOD="google.com",tZ.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tK extends tH{constructor(){super("github.com")}static credential(e){return tj._fromParams({providerId:tK.PROVIDER_ID,signInMethod:tK.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tK.credentialFromTaggedObject(e)}static credentialFromError(e){return tK.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tK.credential(e.oauthAccessToken)}catch(t){return null}}}tK.GITHUB_SIGN_IN_METHOD="github.com",tK.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tq extends tH{constructor(){super("twitter.com")}static credential(e,t){return tj._fromParams({providerId:tq.PROVIDER_ID,signInMethod:tq.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tq.credentialFromTaggedObject(e)}static credentialFromError(e){return tq.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tq.credential(t,r)}catch(n){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tG(e,t){return eQ(e,"POST","/v1/accounts:signUp",eJ(e,t))}tq.TWITTER_SIGN_IN_METHOD="twitter.com",tq.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tJ{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await ta._fromIdTokenResponse(e,r,n),o=tX(r),s=new tJ({user:i,providerId:o,_tokenResponse:r,operationType:t});return s}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=tX(r);return new tJ({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function tX(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tY extends S{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,tY.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new tY(e,t,r,n)}}function tQ(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw tY._fromErrorAndOperation(e,r,t,n);throw r})}async function t0(e,t,r=!1){let n=await e7(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return tJ._forOperation(e,"link",n)}/**
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
 */ async function t1(e,t,r=!1){let{auth:n}=e,i="reauthenticate";try{let o=await e7(e,tQ(n,i,t,e),r);eF(o.idToken,n,"internal-error");let s=e8(o.idToken);eF(s,n,"internal-error");let{sub:a}=s;return eF(e.uid===a,n,"user-mismatch"),tJ._forOperation(e,i,o)}catch(l){throw(null==l?void 0:l.code)==="auth/user-not-found"&&eD(n,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function t2(e,t,r=!1){let n="signIn",i=await tQ(e,n,t),o=await tJ._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}async function t6(e,t){return t2(D(e),t)}async function t4(e,t,r){let n=D(e),i=await tG(n,{returnSecureToken:!0,email:t,password:r}),o=await tJ._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(o.user),o}function t3(e,t,r){return t6(D(e),tV.credential(t,r))}function t5(e){return D(e).signOut()}new WeakMap;let t9="__sak";/**
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
 */ class t8{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(t9,"1"),this.storage.removeItem(t9),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class t7 extends t8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(){let e=v();return th(e)||tb(e)}()&&function(){try{return!!(window&&window!==window.top)}catch(e){return!1}}(),this.fallbackToPolling=tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let n=this.storage.getItem(r);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let i=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);(function(){let e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}t7.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class re extends t8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}re.type="SESSION";/**
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
 */ class rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new rt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let o=Array.from(i).map(async t=>t(e.origin,n)),s=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(r){return{fulfilled:!1,reason:r}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rr(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}rt.receivers=[];/**
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
 */ class rn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable");return new Promise((s,a)=>{let l=rr("",20);o.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:o,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),s(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ri(){return window}/**
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
 */ function ro(){return void 0!==ri().WorkerGlobalScope&&"function"==typeof ri().importScripts}async function rs(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(t){return null}}/**
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
 */ let ra="firebaseLocalStorageDb",rl="firebaseLocalStorage",ru="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rd(e,t){return e.transaction([rl],t?"readwrite":"readonly").objectStore(rl)}function rf(){let e=indexedDB.open(ra,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rl,{keyPath:ru})}catch(n){r(n)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(rl)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(ra);return new rc(e).toPromise()}(),t(await rf()))})})}async function rh(e,t,r){let n=rd(e,!0).put({[ru]:t,value:r});return new rc(n).toPromise()}async function rp(e,t){let r=rd(e,!1).get(t),n=await new rc(r).toPromise();return void 0===n?null:n.value}function rm(e,t){let r=rd(e,!0).delete(t);return new rc(r).toPromise()}class rv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rf()),this.db}async _withRetries(e){let t=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ro()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rt._getInstance(ro()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rs(),!this.activeServiceWorker)return;this.sender=new rn(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(r){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rf();return await rh(e,t9,"1"),await rm(e,t9),!0}catch(t){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rp(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=rd(e,!1).getAll();return new rc(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function rg(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function ry(e,t,r){var n,i,o;let s=await r.verify();try{let a;if(eF("string"==typeof s,e,"argument-error"),eF("recaptcha"===r.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){let l=a.session;if("phoneNumber"in a){eF("enroll"===l.type,e,"internal-error");let u=await (i={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:s}},eX(e,"POST","/v2/accounts/mfaEnrollment:start",eJ(e,i)));return u.phoneSessionInfo.sessionInfo}{eF("signin"===l.type,e,"internal-error");let c=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;eF(c,e,"missing-multi-factor-info");let d=await (o={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:s}},eX(e,"POST","/v2/accounts/mfaSignIn:start",eJ(e,o)));return d.phoneResponseInfo.sessionInfo}}{let{sessionInfo:f}=await tD(e,{phoneNumber:a.phoneNumber,recaptchaToken:s});return f}}finally{r._reset()}}rv.type="LOCAL",rg("rcb"),new ez(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rb{constructor(e){this.providerId=rb.PROVIDER_ID,this.auth=D(e)}verifyPhoneNumber(e,t){return ry(this.auth,e,D(t))}static credential(e,t){return t$._fromVerification(e,t)}static credentialFromResult(e){return rb.credentialFromTaggedObject(e)}static credentialFromError(e){return rb.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?t$._fromTokenResponse(t,r):null}}/**
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
 */ function rw(e,t){return t?eV(t):(eF(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}rb.PROVIDER_ID="phone",rb.PHONE_SIGN_IN_METHOD="phone";/**
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
 */ class r_ extends tk{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tA(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tA(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tA(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rE(e){return t2(e.auth,new r_(e),e.bypassAuthState)}function rI(e){let{auth:t,user:r}=e;return eF(r,t,"internal-error"),t1(r,new r_(e),e.bypassAuthState)}async function rO(e){let{auth:t,user:r}=e;return eF(r,t,"internal-error"),t0(r,new r_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rS{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:o,type:s}=e;if(o){this.reject(o);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rE;case"linkViaPopup":case"linkViaRedirect":return rO;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:eD(this.auth,"internal-error")}}resolve(e){this.pendingPromise||e$("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||e$("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rT=new ez(2e3,1e4);async function rk(e,t,r){let n=D(e);!function(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&eD(e,"argument-error"),eM(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,tW);let i=rw(n,r),o=new rC(n,"signInViaPopup",t,i);return o.executeNotNull()}class rC extends rS{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,rC.currentPopupAction&&rC.currentPopupAction.cancel(),rC.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return eF(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||e$("Popup operations only handle one event");let e=rr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(eL(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(eL(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rC.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(eL(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rT.get())};e()}}rC.currentPopupAction=null;let rx=new Map;class rP extends rS{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rx.get(this.auth._key());if(!e){try{let t=await rN(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rx.set(this.auth._key(),e)}return this.bypassAuthState||rx.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rN(e,t){let r=tu("pendingRedirect",t.config.apiKey,t.name),n=eV(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function rR(e,t){rx.set(e._key(),t)}async function rA(e,t,r=!1){let n=D(e),i=rw(n,t),o=new rP(n,i,r),s=await o.execute();return s&&!r&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class rj{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rL(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!rL(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(eL(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rD(e))}saveEventToCache(e){this.cachedEventUids.add(rD(e)),this.lastProcessedEventTime=Date.now()}}function rD(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function rL({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function rM(e,t={}){return eX(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rU=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rF=/^https?/;async function r$(e){if(e.config.emulator)return;let{authorizedDomains:t}=await rM(e);for(let r of t)try{if(function(e){let t=eW(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!rF.test(r))return!1;if(rU.test(e))return n===e;let o=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+o+"|"+o+")$","i");return s.test(n)}(r))return}catch(n){}eD(e,"unauthorized-domain")}/**
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
 */ let rB=new ez(3e4,6e4);function rV(){let e=ri().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}let rW=null,rH=new ez(5e3,15e3),rz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rZ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function rK(e){let t=await (rW=rW||new Promise((t,r)=>{var n,i,o,s;function a(){rV(),gapi.load("gapi.iframes",{callback(){t(gapi.iframes.getContext())},ontimeout(){rV(),r(eL(e,"network-request-failed"))},timeout:rB.get()})}if(null===(i=null===(n=ri().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(o=ri().gapi)||void 0===o?void 0:o.load)a();else{let l=rg("iframefcb");return ri()[l]=()=>{gapi.load?a():r(eL(e,"network-request-failed"))},(s=`https://apis.google.com/js/api.js?onload=${l}`,new Promise((e,t)=>{var r,n;let i=document.createElement("script");i.setAttribute("src",s),i.onload=e,i.onerror=e=>{let r=eL("internal-error");r.customData=e,t(r)},i.type="text/javascript",i.charset="UTF-8",(null!==(n=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==n?n:document).appendChild(i)})).catch(e=>r(e))}}).catch(e=>{throw rW=null,e})),r=ri().gapi;return eF(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;eF(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?eZ(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:eg},i=rZ.get(e.config.apiHost);i&&(n.eid=i);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${P(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rz,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=eL(e,"network-request-failed"),o=ri().setTimeout(()=>{n(i)},rH.get());function s(){ri().clearTimeout(o),r(t)}t.ping(s).then(s,()=>{n(i)})}))}/**
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
 */ let rq={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class rG{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rJ(e,t,r,n,i,o){eF(e.config.authDomain,e,"auth-domain-config-required"),eF(e.config.apiKey,e,"invalid-api-key");let s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:eg,eventId:i};if(t instanceof tW)for(let[a,l]of(t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(s.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))s[a]=l;if(t instanceof tH){let u=t.getScopes().filter(e=>""!==e);u.length>0&&(s.scopes=u.join(","))}e.tenantId&&(s.tid=e.tenantId);let c=s;for(let d of Object.keys(c))void 0===c[d]&&delete c[d];return`${function({config:e}){return e.emulator?eZ(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${P(c).slice(1)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let rX="webStorageSupport",rY=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=re,this._completeRedirectFn=rA,this._overrideRedirectResult=rR}async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||e$("_initialize() not called before _openPopup()");let o=rJ(e,t,r,eW(),n);return function(e,t,r,n=500,i=600){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString(),a="",l=Object.assign(Object.assign({},rq),{width:n.toString(),height:i.toString(),top:o,left:s}),u=v().toLowerCase();r&&(a=tp(u)?"_blank":r),tf(u)&&(t=t||"http://localhost",l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=v()){var t;return tb(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",a),new rG(null);let d=window.open(t||"",a,c);eF(d,e,"popup-blocked");try{d.focus()}catch(f){}return new rG(d)}(e,o,rr())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=rJ(e,t,r,eW(),n),ri().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:n}=this.eventManagers[t];return r?Promise.resolve(r):(n||e$("If manager is not set, promise should be"),n)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await rK(e),r=new rj(e);return t.register("authEvent",t=>{eF(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(rX,{type:rX},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[rX];void 0!==i&&t(!!i),eD(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=r$(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tw()||th()||tb()}};class rQ{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return e$("unexpected MultiFactorSessionType")}}}class r0 extends rQ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new r0(e)}_finalizeEnroll(e,t,r){return eX(e,"POST","/v2/accounts/mfaEnrollment:finalize",eJ(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return eX(e,"POST","/v2/accounts/mfaSignIn:finalize",eJ(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}var r1="@firebase/auth",r2="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){eF(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let r4=I("authIdTokenMaxAge")||300,r3=null,r5=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>r4)return;let i=null==r?void 0:r.token;r3!==i&&(r3=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};a="Browser",eh(new L("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((e,r)=>{eF(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),eF(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});let n={apiKey:i,authDomain:o,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t_(a)},s=new tI(e,r,n);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(eV);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(r,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),eh(new L("auth-internal",e=>{let t=D(e.getProvider("auth").getImmediate());return new r6(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),eb(r1,r2,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(a)),eb(r1,r2,"esm2017");let r9=ey({apiKey:"AIzaSyCBq7EyP9V4TYFmrXcq_psEpiN_pIxyQp4",authDomain:"cris-web-apps.firebaseapp.com",projectId:"cris-web-apps",storageBucket:"cris-web-apps.appspot.com",messagingSenderId:"358125981958",appId:"1:358125981958:web:7a2168ecefa45825e44e87",measurementId:"G-M00E1FCCQM"}),r8=function(e=function(e=eu){let t=ed.get(e);if(!t&&e===eu)return ey();if(!t)throw em.create("no-app",{appName:e});return t}()){let t=ep(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){let r=ep(e,"auth");if(r.isInitialized()){let n=r.getImmediate(),i=r.getOptions();if(C(i,null!=t?t:{}))return n;eD(n,"already-initialized")}let o=r.initialize({options:t});return o}(e,{popupRedirectResolver:rY,persistence:[rv,t7,re]}),n=I("authTokenSyncURL");if(n){var i,o;let s=r5(n);i=()=>s(r.currentUser),D(r).beforeAuthStateChanged(s,i),o=e=>s(e),D(r).onIdTokenChanged(o,void 0,void 0)}let a=_("auth");return a&&function(e,t,r){let n=D(e);eF(n._canInitEmulator,n,"emulator-config-failed"),eF(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),o=tS(t),{host:s,port:a}=function(e){let t=tS(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let o=i[1];return{host:o,port:tT(n.substr(o.length+1))}}{let[s,a]=n.split(":");return{host:s,port:tT(a)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${o}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${a}`),r}(r9)},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,i=r(7273).Z,o=n(r(7294)),s=r(1003),a=r(7795),l=r(4465),u=r(2692),c=r(8245),d=r(9246),f=r(227),h=r(3468);let p=new Set;function m(e,t,r,n){if(s.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+i;if(p.has(o))return;p.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:a.formatUrl(e)}let g=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:p,children:g,prefetch:y,passHref:b,replace:w,shallow:_,scroll:E,locale:I,onClick:O,onMouseEnter:S,onTouchStart:T,legacyBehavior:k=!0!==Boolean(!0)}=e,C=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let x=!1!==y,P=o.default.useContext(u.RouterContext),N=o.default.useContext(c.AppRouterContext),R=null!=P?P:N,A=!P,{href:j,as:D}=o.default.useMemo(()=>{if(!P){let e=v(a);return{href:e,as:p?v(p):e}}let[t,r]=s.resolveHref(P,a,!0);return{href:t,as:p?s.resolveHref(P,p):r||t}},[P,a,p]),L=o.default.useRef(j),M=o.default.useRef(D);k&&(n=o.default.Children.only(r));let U=k?n&&"object"==typeof n&&n.ref:t,[F,$,B]=d.useIntersection({rootMargin:"200px"}),V=o.default.useCallback(e=>{(M.current!==D||L.current!==j)&&(B(),M.current=D,L.current=j),F(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,j,B,F]);o.default.useEffect(()=>{R&&$&&x&&m(R,j,D,{locale:I})},[D,j,$,I,x,null==P?void 0:P.locale,R]);let W={ref:V,onClick(e){k||"function"!=typeof O||O(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,i,a,l,u,c,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:u,scroll:l}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!d})};c?o.default.startTransition(p):p()}(e,R,j,D,w,_,E,I,A,x)},onMouseEnter(e){k||"function"!=typeof S||S(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(x||!A)&&m(R,j,D,{locale:I,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof T||T(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(x||!A)&&m(R,j,D,{locale:I,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||b||"a"===n.type&&!("href"in n.props)){let H=void 0!==I?I:null==P?void 0:P.locale,z=(null==P?void 0:P.isLocaleDomain)&&f.getDomainLocale(D,H,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);W.href=z||h.addBasePath(l.addLocale(D,H,null==P?void 0:P.defaultLocale))}return k?o.default.cloneElement(n,W):o.default.createElement("a",Object.assign({},C,W),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!o,[c,d]=n.useState(!1),[f,h]=n.useState(null);n.useEffect(()=>{if(o){if(!u&&!c&&f&&f.tagName){let e=function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:i},a.push(r),s.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(n);let t=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&a.splice(t,1)}}}(f,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!c){let n=i.requestIdleCallback(()=>d(!0));return()=>i.cancelIdleCallback(n)}},[f,u,r,t,c]);let p=n.useCallback(()=>{d(!1)},[]);return[h,c,p]};var n=r(7294),i=r(4686);let o="function"==typeof IntersectionObserver,s=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4079:function(e,t,r){"use strict";let n,i;r.r(t),r.d(t,{default:function(){return to}});var o=r(5893),s=r(9008),a=r.n(s),l=r(4184),u=r.n(l),c=r(7294),d=r(7126),f=r(7150),h=r(6611),p=r(6792);let m=c.forwardRef(({bsPrefix:e,className:t,as:r,...n},i)=>{e=(0,p.vE)(e,"navbar-brand");let s=r||(n.href?"a":"span");return(0,o.jsx)(s,{...n,ref:i,className:u()(t,e)})});m.displayName="NavbarBrand";var v=r(7216),g=/([A-Z])/g,y=/^ms-/;function b(e){return e.replace(g,"-$1").toLowerCase().replace(y,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,_=function(e,t){var r,n="",i="";if("string"==typeof t)return e.style.getPropertyValue(b(t))||((r=(0,v.Z)(e))&&r.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(b(t));Object.keys(t).forEach(function(r){var o=t[r];o||0===o?r&&w.test(r)?i+=r+"("+o+") ":n+=b(r)+": "+o+";":e.style.removeProperty(b(r))}),i&&(n+="transform: "+i+";"),e.style.cssText+=";"+n},E=r(3366);function I(e,t){return(I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var O=r(3935),S={disabled:!1},T=c.createContext(null),k="unmounted",C="exited",x="entering",P="entered",N="exiting",R=function(e){function t(t,r){n=e.call(this,t,r)||this;var n,i,o=r&&!r.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?o?(i=C,n.appearStatus=x):i=P:i=t.unmountOnExit||t.mountOnEnter?k:C,n.state={status:i},n.nextCallback=null,n}(r=t).prototype=Object.create(e.prototype),r.prototype.constructor=r,I(r,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===k?{status:C}:null};var r,n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var r=this.state.status;this.props.in?r!==x&&r!==P&&(t=x):(r===x||r===P)&&(t=N)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,r,n=this.props.timeout;return e=t=r=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,r=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:r}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===x){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);r&&r.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===C&&this.setState({status:k})},n.performEnter=function(e){var t=this,r=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[O.findDOMNode(this),n],o=i[0],s=i[1],a=this.getTimeouts(),l=n?a.appear:a.enter;if(!e&&!r||S.disabled){this.safeSetState({status:P},function(){t.props.onEntered(o)});return}this.props.onEnter(o,s),this.safeSetState({status:x},function(){t.props.onEntering(o,s),t.onTransitionEnd(l,function(){t.safeSetState({status:P},function(){t.props.onEntered(o,s)})})})},n.performExit=function(){var e=this,t=this.props.exit,r=this.getTimeouts(),n=this.props.nodeRef?void 0:O.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:C},function(){e.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:N},function(){e.props.onExiting(n),e.onTransitionEnd(r.exit,function(){e.safeSetState({status:C},function(){e.props.onExited(n)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,r=!0;return this.nextCallback=function(n){r&&(r=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(!r||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===k)return null;var t=this.props,r=t.children,n=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,E.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return c.createElement(T.Provider,{value:null},"function"==typeof r?r(e,n):c.cloneElement(c.Children.only(r),n))},t}(c.Component);function A(){}R.contextType=T,R.propTypes={},R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A},R.UNMOUNTED=k,R.EXITED=C,R.ENTERING=x,R.ENTERED=P,R.EXITING=N;var j=r(5096);function D(e,t){let r=_(e,t)||"",n=-1===r.indexOf("ms")?1e3:1;return parseFloat(r)*n}function L(e,t){var r,n,i,o,s,a,l,u,c,d,f,h;let p=D(e,"transitionDuration"),m=D(e,"transitionDelay"),v=(r=e,n=r=>{r.target===e&&(v(),t(r))},null==(i=p+m)&&(a=-1===(s=_(r,"transitionDuration")||"").indexOf("ms")?1e3:1,i=parseFloat(s)*a||0),f=(u=!1,c=setTimeout(function(){u||function(e,t,r,n){if(void 0===r&&(r=!1),void 0===n&&(n=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,r,n),e.dispatchEvent(i)}}(r,"transitionend",!0)},i+5),d=(0,j.Z)(r,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),d()}),h=(0,j.Z)(r,"transitionend",n),function(){f(),h()})}var M=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...r){e.apply(this,r),t.apply(this,r)}},null)};function U(e){e.offsetHeight}var F=r(5654);let $=c.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:i,onExited:s,addEndListener:a,children:l,childRef:u,...d},f)=>{let h=(0,c.useRef)(null),p=(0,F.Z)(h,u),m=e=>{p(e&&"setState"in e?O.findDOMNode(e):null!=e?e:null)},v=e=>t=>{e&&h.current&&e(h.current,t)},g=(0,c.useCallback)(v(e),[e]),y=(0,c.useCallback)(v(t),[t]),b=(0,c.useCallback)(v(r),[r]),w=(0,c.useCallback)(v(n),[n]),_=(0,c.useCallback)(v(i),[i]),E=(0,c.useCallback)(v(s),[s]),I=(0,c.useCallback)(v(a),[a]);return(0,o.jsx)(R,{ref:f,...d,onEnter:g,onEntered:b,onEntering:y,onExit:w,onExited:E,onExiting:_,addEndListener:I,nodeRef:h,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:m}):c.cloneElement(l,{ref:m})})}),B={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function V(e,t){let r=`offset${e[0].toUpperCase()}${e.slice(1)}`,n=t[r],i=B[e];return n+parseInt(_(t,i[0]),10)+parseInt(_(t,i[1]),10)}let W={[C]:"collapse",[N]:"collapsing",[x]:"collapsing",[P]:"collapse show"},H=c.forwardRef(({onEnter:e,onEntering:t,onEntered:r,onExit:n,onExiting:i,className:s,children:a,dimension:l="height",getDimensionValue:d=V,...f},h)=>{let p="function"==typeof l?l():l,m=(0,c.useMemo)(()=>M(e=>{e.style[p]="0"},e),[p,e]),v=(0,c.useMemo)(()=>M(e=>{let t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`},t),[p,t]),g=(0,c.useMemo)(()=>M(e=>{e.style[p]=null},r),[p,r]),y=(0,c.useMemo)(()=>M(e=>{e.style[p]=`${d(p,e)}px`,U(e)},n),[n,d,p]),b=(0,c.useMemo)(()=>M(e=>{e.style[p]=null},i),[p,i]);return(0,o.jsx)($,{ref:h,addEndListener:L,...f,"aria-expanded":f.role?f.in:null,onEnter:m,onEntering:v,onEntered:g,onExit:y,onExiting:b,childRef:a.ref,children:(e,t)=>c.cloneElement(a,{...t,className:u()(s,a.props.className,W[e],"width"===p&&"collapse-horizontal")})})});H.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:V};var z=r(4819);let Z=c.forwardRef(({children:e,bsPrefix:t,...r},n)=>{t=(0,p.vE)(t,"navbar-collapse");let i=(0,c.useContext)(z.Z);return(0,o.jsx)(H,{in:!!(i&&i.expanded),...r,children:(0,o.jsx)("div",{ref:n,className:t,children:e})})});Z.displayName="NavbarCollapse";var K=r(8146);let q=c.forwardRef(({bsPrefix:e,className:t,children:r,label:n,as:i="button",onClick:s,...a},l)=>{e=(0,p.vE)(e,"navbar-toggler");let{onToggle:d,expanded:f}=(0,c.useContext)(z.Z)||{},h=(0,K.Z)(e=>{s&&s(e),d&&d()});return"button"===i&&(a.type="button"),(0,o.jsx)(i,{...a,ref:l,onClick:h,"aria-label":n,className:u()(t,e,!f&&"collapsed"),children:r||(0,o.jsx)("span",{className:`${e}-icon`})})});q.displayName="NavbarToggle",q.defaultProps={label:"Toggle navigation"};var G=r(9585),J=new WeakMap,X=function(e,t){if(e&&t){var r=J.get(t)||new Map;J.set(t,r);var n=r.get(e);return n||((n=t.matchMedia(e)).refCount=0,r.set(n.media,n)),n}},Y=function(e){var t=Object.keys(e);function r(e,t){return e===t?t:e?e+" and "+t:t}return function(n,i,o){var s,a,l,u,d,f,h,p;return"object"==typeof n?(s=n,o=i,i=!0):(i=i||!0,(a={})[n]=i,s=a),l=(0,c.useMemo)(function(){return Object.entries(s).reduce(function(n,i){var o,s,a=i[0],l=i[1];return("up"===l||!0===l)&&(n=r(n,("number"==typeof(o=e[a])&&(o+="px"),"(min-width: "+o+")"))),("down"===l||!0===l)&&(n=r(n,"(max-width: "+(s="number"==typeof(s=e[t[Math.min(t.indexOf(a)+1,t.length-1)]])?s-.2+"px":"calc("+s+" - 0.2px)")+")")),n},"")},[JSON.stringify(s)]),void 0===(u=o)&&(u="undefined"==typeof window?void 0:window),d=X(l,u),h=(f=(0,c.useState)(function(){return!!d&&d.matches}))[0],p=f[1],(0,G.Z)(function(){var e=X(l,u);if(!e)return p(!1);var t=J.get(u),r=function(){p(e.matches)};return e.refCount++,e.addListener(r),r(),function(){e.removeListener(r),e.refCount--,e.refCount<=0&&(null==t||t.delete(e.media)),e=void 0}},[l]),h}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function Q(e){void 0===e&&(e=(0,v.Z)());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(r){return e.body}}var ee=r(424),et=r(3004),er=r(6454),en=r(8833),ei=r(2747);let eo=(0,ei.PB)("modal-open");var es=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:r=!1}={}){this.handleContainerOverflow=t,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",n=this.getElement();e.style={overflow:n.style.overflow,[r]:n.style[r]},e.scrollBarWidth&&(t[r]=`${parseInt(_(n,r)||"0",10)+e.scrollBarWidth}px`),n.setAttribute(eo,""),_(n,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(eo),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}},ea=r(2963);let el=(e,t)=>et.Z?null==e?(t||(0,v.Z)()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null,eu=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"],ec=(0,c.forwardRef)((e,t)=>{var r,i;let{show:s=!1,role:a="dialog",className:l,style:u,children:d,backdrop:f=!0,keyboard:h=!0,onBackdropClick:p,onEscapeKeyDown:m,transition:v,backdropTransition:g,autoFocus:y=!0,enforceFocus:b=!0,restoreFocus:w=!0,restoreFocusOptions:_,renderDialog:E,renderBackdrop:I=e=>(0,o.jsx)("div",Object.assign({},e)),manager:S,container:T,onShow:k,onHide:C=()=>{},onExit:x,onExited:P,onExiting:N,onEnter:R,onEntering:A,onEntered:D}=e,L=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,eu),M=function(e,t){let r=(0,ea.Z)(),[n,i]=(0,c.useState)(()=>el(e,null==r?void 0:r.document));if(!n){let o=el(e);o&&i(o)}return(0,c.useEffect)(()=>{t&&n&&t(n)},[t,n]),(0,c.useEffect)(()=>{let t=el(e);t!==n&&i(t)},[e,n]),n}(T),U=function(e){let t=(0,ea.Z)(),r=e||(n||(n=new es({ownerDocument:null==t?void 0:t.document})),n),i=(0,c.useRef)({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>r.add(i.current),remove:()=>r.remove(i.current),isTopModal:()=>r.isTopModal(i.current),setDialogRef:(0,c.useCallback)(e=>{i.current.dialog=e},[]),setBackdropRef:(0,c.useCallback)(e=>{i.current.backdrop=e},[])})}(S),F=(0,er.Z)(),$=(0,en.Z)(s),[B,V]=(0,c.useState)(!s),W=(0,c.useRef)(null);(0,c.useImperativeHandle)(t,()=>U,[U]),et.Z&&!$&&s&&(W.current=Q()),v||s||B?s&&B&&V(!1):V(!0);let H=(0,K.Z)(()=>{if(U.add(),X.current=(0,j.Z)(document,"keydown",G),J.current=(0,j.Z)(document,"focus",()=>setTimeout(Z),!0),k&&k(),y){let e=Q(document);U.dialog&&e&&!(0,ee.Z)(U.dialog,e)&&(W.current=e,U.dialog.focus())}}),z=(0,K.Z)(()=>{if(U.remove(),null==X.current||X.current(),null==J.current||J.current(),w){var e;null==(e=W.current)||null==e.focus||e.focus(_),W.current=null}});(0,c.useEffect)(()=>{s&&M&&H()},[s,M,H]),(0,c.useEffect)(()=>{B&&z()},[B,z]),r=()=>{z()},(i=(0,c.useRef)(r)).current=r,(0,c.useEffect)(function(){return function(){return i.current()}},[]);let Z=(0,K.Z)(()=>{if(!b||!F()||!U.isTopModal())return;let e=Q();U.dialog&&e&&!(0,ee.Z)(U.dialog,e)&&U.dialog.focus()}),q=(0,K.Z)(e=>{e.target===e.currentTarget&&(null==p||p(e),!0===f&&C())}),G=(0,K.Z)(e=>{h&&27===e.keyCode&&U.isTopModal()&&(null==m||m(e),e.defaultPrevented||C())}),J=(0,c.useRef)(),X=(0,c.useRef)(),Y=(...e)=>{V(!0),null==P||P(...e)};if(!M||!(s||v&&!B))return null;let ei=Object.assign({role:a,ref:U.setDialogRef,"aria-modal":"dialog"===a||void 0},L,{style:u,className:l,tabIndex:-1}),eo=E?E(ei):(0,o.jsx)("div",Object.assign({},ei,{children:c.cloneElement(d,{role:"document"})}));v&&(eo=(0,o.jsx)(v,{appear:!0,unmountOnExit:!0,in:!!s,onExit:x,onExiting:N,onExited:Y,onEnter:R,onEntering:A,onEntered:D,children:eo}));let ec=null;return f&&(ec=I({ref:U.setBackdropRef,onClick:q}),g&&(ec=(0,o.jsx)(g,{appear:!0,in:!!s,children:ec}))),(0,o.jsx)(o.Fragment,{children:O.createPortal((0,o.jsxs)(o.Fragment,{children:[ec,eo]}),M)})});ec.displayName="Modal";var ed=Object.assign(ec,{Manager:es});let ef={[x]:"show",[P]:"show"},eh=c.forwardRef(({className:e,children:t,transitionClasses:r={},...n},i)=>{let s=(0,c.useCallback)((e,t)=>{U(e),null==n.onEnter||n.onEnter(e,t)},[n]);return(0,o.jsx)($,{ref:i,addEndListener:L,...n,onEnter:s,childRef:t.ref,children:(n,i)=>c.cloneElement(t,{...i,className:u()("fade",e,t.props.className,ef[n],r[n])})})});eh.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},eh.displayName="Fade";var ep=(0,h.Z)("offcanvas-body");let em={[x]:"show",[P]:"show"},ev=c.forwardRef(({bsPrefix:e,className:t,children:r,...n},i)=>(e=(0,p.vE)(e,"offcanvas"),(0,o.jsx)($,{ref:i,addEndListener:L,...n,childRef:r.ref,children:(n,i)=>c.cloneElement(r,{...i,className:u()(t,r.props.className,(n===x||n===N)&&`${e}-toggling`,em[n])})})));ev.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ev.displayName="OffcanvasToggling";let eg=c.createContext({onHide(){}});var ey=r(5697),eb=r.n(ey);let ew={"aria-label":eb().string,onClick:eb().func,variant:eb().oneOf(["white"])},e_=c.forwardRef(({className:e,variant:t,...r},n)=>(0,o.jsx)("button",{ref:n,type:"button",className:u()("btn-close",t&&`btn-close-${t}`,e),...r}));e_.displayName="CloseButton",e_.propTypes=ew,e_.defaultProps={"aria-label":"Close"};let eE=c.forwardRef(({closeLabel:e,closeVariant:t,closeButton:r,onHide:n,children:i,...s},a)=>{let l=(0,c.useContext)(eg),u=(0,K.Z)(()=>{null==l||l.onHide(),null==n||n()});return(0,o.jsxs)("div",{ref:a,...s,children:[i,r&&(0,o.jsx)(e_,{"aria-label":e,variant:t,onClick:u})]})});eE.defaultProps={closeLabel:"Close",closeButton:!1};let eI=c.forwardRef(({bsPrefix:e,className:t,...r},n)=>(e=(0,p.vE)(e,"offcanvas-header"),(0,o.jsx)(eE,{ref:n,...r,className:u()(t,e)})));eI.displayName="OffcanvasHeader",eI.defaultProps={closeLabel:"Close",closeButton:!1};let eO=c.forwardRef((e,t)=>(0,o.jsx)("div",{...e,ref:t,className:u()(e.className,"h5")}));var eS=(0,h.Z)("offcanvas-title",{Component:eO}),eT=r(930);function ek(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}let eC={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class ex extends es{adjustAndStore(e,t,r){let n=t.style[e];t.dataset[e]=n,_(t,{[e]:`${parseFloat(_(t,e))+r}px`})}restore(e,t){let r=t.dataset[e];void 0!==r&&(delete t.dataset[e],_(t,{[e]:r}))}setContainerStyle(e){var t,r;super.setContainerStyle(e);let n=this.getElement();if(r="modal-open",(t=n).classList?t.classList.add(r):(t.classList?r&&t.classList.contains(r):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+r+" "))||("string"==typeof t.className?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r)),!e.scrollBarWidth)return;let i=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";(0,eT.Z)(n,eC.FIXED_CONTENT).forEach(t=>this.adjustAndStore(i,t,e.scrollBarWidth)),(0,eT.Z)(n,eC.STICKY_CONTENT).forEach(t=>this.adjustAndStore(o,t,-e.scrollBarWidth)),(0,eT.Z)(n,eC.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(o,t,e.scrollBarWidth))}removeContainerStyle(e){var t,r;super.removeContainerStyle(e);let n=this.getElement();r="modal-open",(t=n).classList?t.classList.remove(r):"string"==typeof t.className?t.className=ek(t.className,r):t.setAttribute("class",ek(t.className&&t.className.baseVal||"",r));let i=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";(0,eT.Z)(n,eC.FIXED_CONTENT).forEach(e=>this.restore(i,e)),(0,eT.Z)(n,eC.STICKY_CONTENT).forEach(e=>this.restore(o,e)),(0,eT.Z)(n,eC.NAVBAR_TOGGLER).forEach(e=>this.restore(o,e))}}function eP(e){return(0,o.jsx)(ev,{...e})}function eN(e){return(0,o.jsx)(eh,{...e})}let eR=c.forwardRef(({bsPrefix:e,className:t,children:r,"aria-labelledby":n,placement:s,responsive:a,show:l,backdrop:d,keyboard:f,scroll:h,onEscapeKeyDown:m,onShow:v,onHide:g,container:y,autoFocus:b,enforceFocus:w,restoreFocus:_,restoreFocusOptions:E,onEntered:I,onExit:O,onExiting:S,onEnter:T,onEntering:k,onExited:C,backdropClassName:x,manager:P,renderStaticNode:N,...R},A)=>{let j=(0,c.useRef)();e=(0,p.vE)(e,"offcanvas");let{onToggle:D}=(0,c.useContext)(z.Z)||{},[L,M]=(0,c.useState)(!1),U=Y(a||"xs","up");(0,c.useEffect)(()=>{M(a?l&&!U:l)},[l,a,U]);let F=(0,K.Z)(()=>{null==D||D(),null==g||g()}),$=(0,c.useMemo)(()=>({onHide:F}),[F]),B=(e,...t)=>{e&&(e.style.visibility="visible"),null==T||T(e,...t)},V=(e,...t)=>{e&&(e.style.visibility=""),null==C||C(...t)},W=(0,c.useCallback)(t=>(0,o.jsx)("div",{...t,className:u()(`${e}-backdrop`,x)}),[x,e]),H=i=>(0,o.jsx)("div",{...i,...R,className:u()(t,a?`${e}-${a}`:e,`${e}-${s}`),"aria-labelledby":n,children:r});return(0,o.jsxs)(o.Fragment,{children:[!L&&(a||N)&&H({}),(0,o.jsx)(eg.Provider,{value:$,children:(0,o.jsx)(ed,{show:L,ref:A,backdrop:d,container:y,keyboard:f,autoFocus:b,enforceFocus:w&&!h,restoreFocus:_,restoreFocusOptions:E,onEscapeKeyDown:m,onShow:v,onHide:F,onEnter:B,onEntering:k,onEntered:I,onExit:O,onExiting:S,onExited:V,manager:P||(h?(j.current||(j.current=new ex({handleContainerOverflow:!1})),j.current):(i||(i=new ex(void 0)),i)),transition:eP,backdropTransition:eN,renderBackdrop:W,renderDialog:H})})]})});eR.displayName="Offcanvas",eR.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var eA=Object.assign(eR,{Body:ep,Header:eI,Title:eS});let ej=c.forwardRef((e,t)=>{let r=(0,c.useContext)(z.Z);return(0,o.jsx)(eA,{ref:t,show:!!(null!=r&&r.expanded),...e,renderStaticNode:!0})});ej.displayName="NavbarOffcanvas";let eD=(0,h.Z)("navbar-text",{Component:"span"}),eL=c.forwardRef((e,t)=>{let{bsPrefix:r,expand:n,variant:i,bg:s,fixed:a,sticky:l,className:h,as:m="nav",expanded:v,onToggle:g,onSelect:y,collapseOnSelect:b,...w}=(0,f.Ch)(e,{expanded:"onToggle"}),_=(0,p.vE)(r,"navbar"),E=(0,c.useCallback)((...e)=>{null==y||y(...e),b&&v&&(null==g||g(!1))},[y,b,v,g]);void 0===w.role&&"nav"!==m&&(w.role="navigation");let I=`${_}-expand`;"string"==typeof n&&(I=`${I}-${n}`);let O=(0,c.useMemo)(()=>({onToggle:()=>null==g?void 0:g(!v),bsPrefix:_,expanded:!!v,expand:n}),[_,v,n,g]);return(0,o.jsx)(z.Z.Provider,{value:O,children:(0,o.jsx)(d.Z.Provider,{value:E,children:(0,o.jsx)(m,{ref:t,...w,className:u()(h,_,n&&I,i&&`${_}-${i}`,s&&`bg-${s}`,l&&`sticky-${l}`,a&&`fixed-${a}`)})})})});eL.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},eL.displayName="Navbar";var eM=Object.assign(eL,{Brand:m,Collapse:Z,Offcanvas:ej,Text:eD,Toggle:q});let eU=c.forwardRef(({bsPrefix:e,fluid:t,as:r="div",className:n,...i},s)=>{let a=(0,p.vE)(e,"container"),l="string"==typeof t?`-${t}`:"-fluid";return(0,o.jsx)(r,{ref:s,...i,className:u()(n,t?`${a}${l}`:a)})});eU.displayName="Container",eU.defaultProps={fluid:!1},r(4391);var eF=r(4357),e$=r(6056);let eB=c.createContext(null);var eV=r(861);let eW=["as","active","eventKey"];function eH({key:e,onClick:t,active:r,id:n,role:i,disabled:o}){let s=(0,c.useContext)(d.Z),a=(0,c.useContext)(e$.Z),l=(0,c.useContext)(eB),u=r,f={role:i};if(a){i||"tablist"!==a.role||(f.role="tab");let h=a.getControllerId(null!=e?e:null),p=a.getControlledId(null!=e?e:null);f[(0,ei.PB)("event-key")]=e,f.id=h||n,((u=null==r&&null!=e?a.activeKey===e:r)||!(null!=l&&l.unmountOnExit)&&!(null!=l&&l.mountOnEnter))&&(f["aria-controls"]=p)}return"tab"===f.role&&(f["aria-selected"]=u,u||(f.tabIndex=-1),o&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=(0,K.Z)(r=>{o||(null==t||t(r),null!=e&&s&&!r.isPropagationStopped()&&s(e,r))}),[f,{isActive:u}]}let ez=c.forwardRef((e,t)=>{let{as:r=eV.ZP,active:n,eventKey:i}=e,s=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,eW),[a,l]=eH(Object.assign({key:(0,d.h)(i,s.href),active:n},s));return a[(0,ei.PB)("active")]=l.isActive,(0,o.jsx)(r,Object.assign({},s,a,{ref:t}))});ez.displayName="NavItem";let eZ=["as","onSelect","activeKey","role","onKeyDown"],eK=()=>{},eq=(0,ei.PB)("event-key"),eG=c.forwardRef((e,t)=>{let r,n,{as:i="div",onSelect:s,activeKey:a,role:l,onKeyDown:u}=e,f=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,eZ),h=(0,eF.Z)(),p=(0,c.useRef)(!1),m=(0,c.useContext)(d.Z),v=(0,c.useContext)(eB);v&&(l=l||"tablist",a=v.activeKey,r=v.getControlledId,n=v.getControllerId);let g=(0,c.useRef)(null),y=e=>{let t=g.current;if(!t)return null;let r=(0,eT.Z)(t,`[${eq}]:not([aria-disabled=true])`),n=t.querySelector("[aria-selected=true]");if(!n||n!==document.activeElement)return null;let i=r.indexOf(n);if(-1===i)return null;let o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},b=(e,t)=>{null!=e&&(null==s||s(e,t),null==m||m(e,t))},w=e=>{let t;if(null==u||u(e),v){switch(e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),b(t.dataset[(0,ei.$F)("EventKey")]||null,e),p.current=!0,h())}};(0,c.useEffect)(()=>{if(g.current&&p.current){let e=g.current.querySelector(`[${eq}][aria-selected=true]`);null==e||e.focus()}p.current=!1});let _=(0,F.Z)(t,g);return(0,o.jsx)(d.Z.Provider,{value:b,children:(0,o.jsx)(e$.Z.Provider,{value:{role:l,activeKey:(0,d.h)(a),getControlledId:r||eK,getControllerId:n||eK},children:(0,o.jsx)(i,Object.assign({},f,{onKeyDown:w,ref:_,role:l}))})})});eG.displayName="Nav";var eJ=Object.assign(eG,{Item:ez});let eX=c.createContext(null);eX.displayName="CardHeaderContext";var eY=(0,h.Z)("nav-item"),eQ=r(3551);let e0=c.forwardRef(({bsPrefix:e,className:t,as:r=eQ.Z,active:n,eventKey:i,...s},a)=>{e=(0,p.vE)(e,"nav-link");let[l,c]=eH({key:(0,d.h)(i,s.href),active:n,...s});return(0,o.jsx)(r,{...s,...l,ref:a,className:u()(t,e,s.disabled&&"disabled",c.isActive&&"active")})});e0.displayName="NavLink",e0.defaultProps={disabled:!1};let e1=c.forwardRef((e,t)=>{let r,n;let{as:i="div",bsPrefix:s,variant:a,fill:l,justify:d,navbar:h,navbarScroll:m,className:v,activeKey:g,...y}=(0,f.Ch)(e,{activeKey:"onSelect"}),b=(0,p.vE)(s,"nav"),w=!1,_=(0,c.useContext)(z.Z),E=(0,c.useContext)(eX);return _?(r=_.bsPrefix,w=null==h||h):E&&({cardHeaderBsPrefix:n}=E),(0,o.jsx)(eJ,{as:i,ref:t,activeKey:g,className:u()(v,{[b]:!w,[`${r}-nav`]:w,[`${r}-nav-scroll`]:w&&m,[`${n}-${a}`]:!!n,[`${b}-${a}`]:!!a,[`${b}-fill`]:l,[`${b}-justified`]:d}),...y})});e1.displayName="Nav",e1.defaultProps={justify:!1,fill:!1};var e2=Object.assign(e1,{Item:eY,Link:e0}),e6=r(1676),e4=r(5005),e3=r(1664),e5=r.n(e3),e9=r(1163),e8=r(2664),e7=r(9565),te=r(1840);let tt=()=>{let e=(0,e8.v9)(e=>e.auth.user),t=(0,e9.useRouter)(),r=(0,e8.I0)(),n=()=>{e&&""!==e?(0,te.w7)(te.I8).then(e=>{console.log(e),r((0,e7.kX)())}).catch(e=>console.log(e)):t.push("/login")};return(0,o.jsx)(eM,{bg:"light",expand:"md",className:"mb-3",children:(0,o.jsxs)(eU,{fluid:!0,children:[(0,o.jsx)(eM.Brand,{href:"#",children:"Fitness Assistent App"}),(0,o.jsx)(eM.Toggle,{"aria-controls":"offcanvasNavbar-expand-md"}),(0,o.jsxs)(eM.Offcanvas,{id:"offcanvasNavbar-expand-md","aria-labelledby":"offcanvasNavbarLabel-expand-md",placement:"end",children:[(0,o.jsx)(eA.Header,{closeButton:!0,children:(0,o.jsx)(eA.Title,{id:"offcanvasNavbarLabel-expand-md",style:{color:"black"},children:"Offcanvas"})}),(0,o.jsxs)(eA.Body,{children:[(0,o.jsxs)(e2,{className:"justify-content-end flex-grow-1 pe-3",children:[(0,o.jsx)(e5(),{href:"/",style:{color:"black"},className:"nav-link",children:"Home"}),(0,o.jsx)("button",{className:"custom-link-button nav-link",onClick:n,children:e&&""!==e?"Logout":"Login"})]}),(0,o.jsxs)(e6.Z,{className:"d-flex",children:[(0,o.jsx)(e6.Z.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),(0,o.jsx)(e4.Z,{variant:"outline-primary",children:"Search"})]})]})]})]})})},tr=e=>{let{children:t}=e;return(0,o.jsxs)("div",{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:"Simple Next Example"}),(0,o.jsx)("meta",{name:"description",content:"Simple Next example project"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsx)(tt,{}),(0,o.jsx)("main",{children:t}),(0,o.jsx)("footer",{})]})};var tn=r(9498);let ti=(0,tn.xC)({reducer:{auth:e7.dX}});r(7475),r(1535);var to=function(e){let{Component:t,pageProps:r}=e;return(0,o.jsx)(e8.zt,{store:ti,children:(0,o.jsx)(tr,{children:(0,o.jsx)(t,{...r})})})}},9565:function(e,t,r){"use strict";r.d(t,{cn:function(){return a},dX:function(){return u},kX:function(){return l}});var n=r(9498);let i="",o="";console.log(i=localStorage.getItem("user"),o=localStorage.getItem("authToken"));let s=(0,n.oM)({name:"auth",initialState:{user:i,token:o},reducers:{addUser:(e,t)=>(localStorage.setItem("authToken",t.payload.accessToken),localStorage.setItem("user",t.payload.user),{...e,user:t.payload.user,token:t.payload.accessToken}),removeUser:(e,t)=>(localStorage.removeItem("authToken"),localStorage.removeItem("user"),{...e,user:"",token:""})}}),{addUser:a,removeUser:l}=s.actions,u=s.reducer},1535:function(){},7475:function(){},7663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(n){r=s}}();var l=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?l=n.concat(l):c=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(n){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},s=!0;try{t[e](o,o.exports,n),s=!1}finally{s&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)},4391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,i.default)(function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=null;return t.forEach(function(e){if(null==i){var t=e.apply(void 0,r);null!=t&&(i=t)}}),i})};var n,i=(n=r(2613))&&n.__esModule?n:{default:n};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,r,n,i,o,s){var a=i||"<<anonymous>>",l=s||n;if(null==r[n])return t?Error("Required "+o+" `"+l+"` was not specified in `"+a+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),d=6;d<u;d++)c[d-6]=arguments[d];return e.apply(void 0,[r,n,a,o,l].concat(c))}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r},e.exports=t.default},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5005:function(e,t,r){"use strict";var n=r(4184),i=r.n(n),o=r(7294),s=r(861),a=r(6792),l=r(5893);let u=o.forwardRef(({as:e,bsPrefix:t,variant:r,size:n,active:o,className:u,...c},d)=>{let f=(0,a.vE)(t,"btn"),[h,{tagName:p}]=(0,s.FT)({tagName:e,...c});return(0,l.jsx)(p,{...h,...c,ref:d,className:i()(u,f,o&&"active",r&&`${f}-${r}`,n&&`${f}-${n}`,c.href&&c.disabled&&"disabled")})});u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},1676:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(4184),i=r.n(n),o=r(5697),s=r.n(o),a=r(7294),l=r(5893);let u={type:s().string,tooltip:s().bool,as:s().elementType},c=a.forwardRef(({as:e="div",className:t,type:r="valid",tooltip:n=!1,...o},s)=>(0,l.jsx)(e,{...o,ref:s,className:i()(t,`${r}-${n?"tooltip":"feedback"}`)}));c.displayName="Feedback",c.propTypes=u;let d=a.createContext({});var f=r(6792);let h=a.forwardRef(({id:e,bsPrefix:t,className:r,type:n="checkbox",isValid:o=!1,isInvalid:s=!1,as:u="input",...c},h)=>{let{controlId:p}=(0,a.useContext)(d);return t=(0,f.vE)(t,"form-check-input"),(0,l.jsx)(u,{...c,ref:h,type:n,id:e||p,className:i()(r,t,o&&"is-valid",s&&"is-invalid")})});h.displayName="FormCheckInput";let p=a.forwardRef(({bsPrefix:e,className:t,htmlFor:r,...n},o)=>{let{controlId:s}=(0,a.useContext)(d);return e=(0,f.vE)(e,"form-check-label"),(0,l.jsx)("label",{...n,ref:o,htmlFor:r||s,className:i()(t,e)})});p.displayName="FormCheckLabel";let m=a.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:n=!1,reverse:o=!1,disabled:s=!1,isValid:u=!1,isInvalid:m=!1,feedbackTooltip:v=!1,feedback:g,feedbackType:y,className:b,style:w,title:_="",type:E="checkbox",label:I,children:O,as:S="input",...T},k)=>{t=(0,f.vE)(t,"form-check"),r=(0,f.vE)(r,"form-switch");let{controlId:C}=(0,a.useContext)(d),x=(0,a.useMemo)(()=>({controlId:e||C}),[C,e]),P=!O&&null!=I&&!1!==I||a.Children.toArray(O).some(e=>a.isValidElement(e)&&e.type===p),N=(0,l.jsx)(h,{...T,type:"switch"===E?"checkbox":E,ref:k,isValid:u,isInvalid:m,disabled:s,as:S});return(0,l.jsx)(d.Provider,{value:x,children:(0,l.jsx)("div",{style:w,className:i()(b,P&&t,n&&`${t}-inline`,o&&`${t}-reverse`,"switch"===E&&r),children:O||(0,l.jsxs)(l.Fragment,{children:[N,P&&(0,l.jsx)(p,{title:_,children:I}),g&&(0,l.jsx)(c,{type:y,tooltip:v,children:g})]})})})});m.displayName="FormCheck";var v=Object.assign(m,{Input:h,Label:p});r(2473);let g=a.forwardRef(({bsPrefix:e,type:t,size:r,htmlSize:n,id:o,className:s,isValid:u=!1,isInvalid:c=!1,plaintext:h,readOnly:p,as:m="input",...v},g)=>{let y;let{controlId:b}=(0,a.useContext)(d);return e=(0,f.vE)(e,"form-control"),y=h?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,l.jsx)(m,{...v,type:t,size:n,ref:g,readOnly:p,id:o||b,className:i()(s,y,u&&"is-valid",c&&"is-invalid","color"===t&&`${e}-color`)})});g.displayName="FormControl";var y=Object.assign(g,{Feedback:c}),b=(0,r(6611).Z)("form-floating");let w=a.forwardRef(({controlId:e,as:t="div",...r},n)=>{let i=(0,a.useMemo)(()=>({controlId:e}),[e]);return(0,l.jsx)(d.Provider,{value:i,children:(0,l.jsx)(t,{...r,ref:n})})});w.displayName="FormGroup";let _=a.forwardRef((e,t)=>{let[{className:r,...n},{as:o="div",bsPrefix:s,spans:a}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,f.vE)(t,"col");let o=(0,f.pi)(),s=(0,f.zG)(),a=[],l=[];return o.forEach(e=>{let r,i,o;let u=n[e];delete n[e],"object"==typeof u&&null!=u?{span:r,offset:i,order:o}=u:r=u;let c=e!==s?`-${e}`:"";r&&a.push(!0===r?`${t}${c}`:`${t}${c}-${r}`),null!=o&&l.push(`order${c}-${o}`),null!=i&&l.push(`offset${c}-${i}`)}),[{...n,className:i()(r,...a,...l)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,l.jsx)(o,{...n,ref:t,className:i()(r,!a.length&&s)})});_.displayName="Col";let E=a.forwardRef(({as:e="label",bsPrefix:t,column:r,visuallyHidden:n,className:o,htmlFor:s,...u},c)=>{let{controlId:h}=(0,a.useContext)(d);t=(0,f.vE)(t,"form-label");let p="col-form-label";"string"==typeof r&&(p=`${p} ${p}-${r}`);let m=i()(o,t,n&&"visually-hidden",r&&p);return(s=s||h,r)?(0,l.jsx)(_,{ref:c,as:"label",className:m,htmlFor:s,...u}):(0,l.jsx)(e,{ref:c,className:m,htmlFor:s,...u})});E.displayName="FormLabel",E.defaultProps={column:!1,visuallyHidden:!1};let I=a.forwardRef(({bsPrefix:e,className:t,id:r,...n},o)=>{let{controlId:s}=(0,a.useContext)(d);return e=(0,f.vE)(e,"form-range"),(0,l.jsx)("input",{...n,type:"range",ref:o,className:i()(t,e),id:r||s})});I.displayName="FormRange";let O=a.forwardRef(({bsPrefix:e,size:t,htmlSize:r,className:n,isValid:o=!1,isInvalid:s=!1,id:u,...c},h)=>{let{controlId:p}=(0,a.useContext)(d);return e=(0,f.vE)(e,"form-select"),(0,l.jsx)("select",{...c,size:r,ref:h,className:i()(n,e,t&&`${e}-${t}`,o&&"is-valid",s&&"is-invalid"),id:u||p})});O.displayName="FormSelect";let S=a.forwardRef(({bsPrefix:e,className:t,as:r="small",muted:n,...o},s)=>(e=(0,f.vE)(e,"form-text"),(0,l.jsx)(r,{...o,ref:s,className:i()(t,e,n&&"text-muted")})));S.displayName="FormText";let T=a.forwardRef((e,t)=>(0,l.jsx)(v,{...e,ref:t,type:"switch"}));T.displayName="Switch";var k=Object.assign(T,{Input:v.Input,Label:v.Label});let C=a.forwardRef(({bsPrefix:e,className:t,children:r,controlId:n,label:o,...s},a)=>(e=(0,f.vE)(e,"form-floating"),(0,l.jsxs)(w,{ref:a,className:i()(t,e),controlId:n,...s,children:[r,(0,l.jsx)("label",{htmlFor:n,children:o})]})));C.displayName="FloatingLabel";let x={_ref:s().any,validated:s().bool,as:s().elementType},P=a.forwardRef(({className:e,validated:t,as:r="form",...n},o)=>(0,l.jsx)(r,{...n,ref:o,className:i()(e,t&&"was-validated")}));P.displayName="Form",P.propTypes=x;var N=Object.assign(P,{Group:w,Control:y,Floating:b,Check:v,Switch:k,Label:E,Text:S,Range:I,Select:O,FloatingLabel:C})},4819:function(e,t,r){"use strict";var n=r(7294);let i=n.createContext(null);i.displayName="NavbarContext",t.Z=i},6792:function(e,t,r){"use strict";r.d(t,{SC:function(){return c},pi:function(){return l},vE:function(){return a},zG:function(){return u}});var n=r(7294);r(5893);let i=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:s}=i;function a(e,t){let{prefixes:r}=(0,n.useContext)(i);return e||r[t]||t}function l(){let{breakpoints:e}=(0,n.useContext)(i);return e}function u(){let{minBreakpoint:e}=(0,n.useContext)(i);return e}function c(){let{dir:e}=(0,n.useContext)(i);return"rtl"===e}},6611:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(4184),i=r.n(n),o=/-(.)/g,s=r(7294),a=r(6792),l=r(5893);let u=e=>e[0].toUpperCase()+e.replace(o,function(e,t){return t.toUpperCase()}).slice(1);function c(e,{displayName:t=u(e),Component:r,defaultProps:n}={}){let o=s.forwardRef(({className:t,bsPrefix:n,as:o=r||"div",...s},u)=>{let c=(0,a.vE)(n,e);return(0,l.jsx)(o,{ref:u,className:i()(t,c),...s})});return o.defaultProps=n,o.displayName=t,o}},9921:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,p=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function _(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case c:case d:case o:case a:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case f:case v:case m:case l:return e;default:return t}}case i:return t}}}function E(e){return _(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=f,t.Fragment=o,t.Lazy=v,t.Memo=m,t.Portal=i,t.Profiler=a,t.StrictMode=s,t.Suspense=h,t.isAsyncMode=function(e){return E(e)||_(e)===c},t.isConcurrentMode=E,t.isContextConsumer=function(e){return _(e)===u},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===f},t.isFragment=function(e){return _(e)===o},t.isLazy=function(e){return _(e)===v},t.isMemo=function(e){return _(e)===m},t.isPortal=function(e){return _(e)===i},t.isProfiler=function(e){return _(e)===a},t.isStrictMode=function(e){return _(e)===s},t.isSuspense=function(e){return _(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===a||e===s||e===h||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===l||e.$$typeof===u||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===g)},t.typeOf=_},9864:function(e,t,r){"use strict";e.exports=r(9921)},2664:function(e,t,r){"use strict";r.d(t,{zt:function(){return M},$j:function(){return L},I0:function(){return $},v9:function(){return p}});var n=r(1688),i=r(2798),o=r(3935);let s=function(e){e()},a=()=>s;var l=r(7294);let u=(0,l.createContext)(null);function c(){let e=(0,l.useContext)(u);return e}let d=()=>{throw Error("uSES not initialized!")},f=d,h=(e,t)=>e===t,p=function(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(e,r=h){let{store:n,subscription:i,getServerState:o}=t(),s=f(i.addNestedSub,n.getState,o||n.getState,e,r);return(0,l.useDebugValue)(s),s}}();var m=r(7462),v=r(3366),g=r(8679),y=r.n(g),b=r(2973);let w=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function _(e){return function(t){let r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function E(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function I(e,t){return function(t,{displayName:r}){let n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=E(e);let i=n(t,r);return"function"==typeof i&&(n.mapToProps=i,n.dependsOnOwnProps=E(i),i=n(t,r)),i},n}}function O(e,t){return(r,n)=>{throw Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function S(e,t,r){return(0,m.Z)({},r,e,t)}let T={notify(){},get:()=>[]};function k(e,t){let r;let n=T;function i(){s.onStateChange&&s.onStateChange()}function o(){r||(r=t?t.addNestedSub(i):e.subscribe(i),n=function(){let e=a(),t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,i=r={callback:e,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){n&&null!==t&&(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}let s={addNestedSub:function(e){return o(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:i,isSubscribed:function(){return Boolean(r)},trySubscribe:o,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=T)},getListeners:()=>n};return s}let C=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),x=C?l.useLayoutEffect:l.useEffect;function P(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function N(e,t){if(P(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let i=0;i<r.length;i++)if(!Object.prototype.hasOwnProperty.call(t,r[i])||!P(e[r[i]],t[r[i]]))return!1;return!0}let R=["reactReduxForwardedRef"],A=d,j=[null,null];function D(e,t){return e===t}var L=function(e,t,r,{pure:n,areStatesEqual:i=D,areOwnPropsEqual:o=N,areStatePropsEqual:s=N,areMergedPropsEqual:a=N,forwardRef:c=!1,context:d=u}={}){let f=e?"function"==typeof e?I(e,"mapStateToProps"):O(e,"mapStateToProps"):_(()=>({})),h=t&&"object"==typeof t?_(e=>(function(e,t){let r={};for(let n in e){let i=e[n];"function"==typeof i&&(r[n]=(...e)=>t(i(...e)))}return r})(t,e)):t?"function"==typeof t?I(t,"mapDispatchToProps"):O(t,"mapDispatchToProps"):_(e=>({dispatch:e})),p=r?"function"==typeof r?function(e,{displayName:t,areMergedPropsEqual:n}){let i,o=!1;return function(e,t,s){let a=r(e,t,s);return o?n(a,i)||(i=a):(o=!0,i=a),i}}:O(r,"mergeProps"):()=>S,g=Boolean(e),E=e=>{let t=e.displayName||e.name||"Component",r=`Connect(${t})`,n={shouldHandleStateChanges:g,displayName:r,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:f,initMapDispatchToProps:h,initMergeProps:p,areStatesEqual:i,areStatePropsEqual:s,areOwnPropsEqual:o,areMergedPropsEqual:a};function u(t){var r;let i;let[o,s,a]=(0,l.useMemo)(()=>{let{reactReduxForwardedRef:e}=t,r=(0,v.Z)(t,R);return[t.context,e,r]},[t]),u=(0,l.useMemo)(()=>o&&o.Consumer&&(0,b.isContextConsumer)(l.createElement(o.Consumer,null))?o:d,[o,d]),c=(0,l.useContext)(u),f=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),h=Boolean(c)&&Boolean(c.store),p=f?t.store:c.store,y=h?c.getServerState:p.getState,_=(0,l.useMemo)(()=>(function(e,t){let{initMapStateToProps:r,initMapDispatchToProps:n,initMergeProps:i}=t,o=(0,v.Z)(t,w),s=r(e,o),a=n(e,o),l=i(e,o);return function(e,t,r,n,{areStatesEqual:i,areOwnPropsEqual:o,areStatePropsEqual:s}){let a,l,u,c,d,f=!1;return function(h,p){return f?function(f,h){let p=!o(h,l),m=!i(f,a,h,l);return(a=f,l=h,p&&m)?(u=e(a,l),t.dependsOnOwnProps&&(c=t(n,l)),d=r(u,c,l)):p?(e.dependsOnOwnProps&&(u=e(a,l)),t.dependsOnOwnProps&&(c=t(n,l)),d=r(u,c,l)):m?function(){let t=e(a,l),n=!s(t,u);return u=t,n&&(d=r(u,c,l)),d}():d}(h,p):(d=r(u=e(a=h,l=p),c=t(n,l),l),f=!0,d)}}(s,a,l,e,o)})(p.dispatch,n),[p]),[E,I]=(0,l.useMemo)(()=>{if(!g)return j;let e=k(p,f?void 0:c.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]},[p,f,c]),O=(0,l.useMemo)(()=>f?c:(0,m.Z)({},c,{subscription:E}),[f,c,E]),S=(0,l.useRef)(),T=(0,l.useRef)(a),C=(0,l.useRef)(),P=(0,l.useRef)(!1);(0,l.useRef)(!1);let N=(0,l.useRef)(!1),D=(0,l.useRef)();x(()=>(N.current=!0,()=>{N.current=!1}),[]);let L=(0,l.useMemo)(()=>{let e=()=>C.current&&a===T.current?C.current:_(p.getState(),a);return e},[p,a]),M=(0,l.useMemo)(()=>{let e=e=>E?function(e,t,r,n,i,o,s,a,l,u,c){if(!e)return()=>{};let d=!1,f=null,h=()=>{let e,r;if(d||!a.current)return;let h=t.getState();try{e=n(h,i.current)}catch(p){r=p,f=p}r||(f=null),e===o.current?s.current||u():(o.current=e,l.current=e,s.current=!0,c())};r.onStateChange=h,r.trySubscribe(),h();let p=()=>{if(d=!0,r.tryUnsubscribe(),r.onStateChange=null,f)throw f};return p}(g,p,E,_,T,S,P,N,C,I,e):()=>{};return e},[E]);r=[T,S,P,a,C,I],x(()=>(function(e,t,r,n,i,o){e.current=n,r.current=!1,i.current&&(i.current=null,o())})(...r),void 0);try{i=A(M,L,y?()=>_(y(),a):L)}catch(U){throw D.current&&(U.message+=`
The error may be correlated with this previous error:
${D.current.stack}

`),U}x(()=>{D.current=void 0,C.current=void 0,S.current=i});let F=(0,l.useMemo)(()=>l.createElement(e,(0,m.Z)({},i,{ref:s})),[s,e,i]),$=(0,l.useMemo)(()=>g?l.createElement(u.Provider,{value:O},F):F,[u,F,O]);return $}let _=l.memo(u),E=_;if(E.WrappedComponent=e,E.displayName=u.displayName=r,c){let I=l.forwardRef(function(e,t){return l.createElement(E,(0,m.Z)({},e,{reactReduxForwardedRef:t}))}),O=I;return O.displayName=r,O.WrappedComponent=e,y()(O,e)}return y()(E,e)};return E},M=function({store:e,context:t,children:r,serverState:n}){let i=(0,l.useMemo)(()=>{let t=k(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0}},[e,n]),o=(0,l.useMemo)(()=>e.getState(),[e]);return x(()=>{let{subscription:t}=i;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),o!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[i,o]),l.createElement((t||u).Provider,{value:i},r)};function U(e=u){let t=e===u?c:()=>(0,l.useContext)(e);return function(){let{store:e}=t();return e}}let F=U(),$=function(e=u){let t=e===u?F:U(e);return function(){let e=t();return e.dispatch}}();f=i.useSyncExternalStoreWithSelector,A=n.useSyncExternalStore,s=o.unstable_batchedUpdates},8359:function(e,t){"use strict";/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),t.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case s:case o:case d:case f:return e;default:switch(e=e&&e.$$typeof){case u:case l:case c:case p:case h:case a:return e;default:return t}}case n:return t}}}(e)===l}},2973:function(e,t,r){"use strict";e.exports=r(8359)},7150:function(e,t,r){"use strict";r.d(t,{Ch:function(){return u},$c:function(){return l}});var n=r(7462),i=r(3366),o=r(7294);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t,r){var n=(0,o.useRef)(void 0!==e),i=(0,o.useState)(t),s=i[0],a=i[1],l=void 0!==e,u=n.current;return n.current=l,!l&&u&&s!==t&&a(t),[l?e:s,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];r&&r.apply(void 0,[e].concat(n)),a(e)},[r])]}function u(e,t){return Object.keys(t).reduce(function(r,o){var u,c=r[s(o)],d=r[o],f=(0,i.Z)(r,[s(o),o].map(a)),h=t[o],p=l(d,c,e[h]),m=p[0],v=p[1];return(0,n.Z)({},f,((u={})[o]=m,u[h]=v,u))},e)}r(1143)},3250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(n){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,c=n[1];return a(function(){i.value=r,i.getSnapshot=t,u(i)&&c({inst:i})},[e,r,t]),s(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},6742:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n=r(7294),i=r(1688),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,a=n.useRef,l=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var d=a(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=u(function(){function e(e){if(!l){if(l=!0,s=e,e=n(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return a=t}return a=e}if(t=a,o(s,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(s=e,a=r)}var s,a,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]);var h=s(e,d[0],d[1]);return l(function(){f.hasValue=!0,f.value=h},[h]),c(h),h}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(6742)},2473:function(e){"use strict";e.exports=function(){}},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);