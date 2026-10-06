var __modules = Object.create(null);
var process = { env: { NODE_ENV: "production" } };
function __req(key){ var m = __modules[key]; if (m === null) throw new Error("circular import: " + key); if (!m.loaded) { m.loaded = true; m.exports = m.factory(__req); if (m.isCjs && m.exports && typeof m.exports === "object" && m.exports.default === undefined) { m.exports.default = m.exports; } } return m.exports; }
__modules["virtual/react"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"./cjs/react.production.min.js":"virtual/react/cjs/react.production.min.js","./cjs/react.development.js":"virtual/react/cjs/react.development.js"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}

return module.exports;
} };
__modules["virtual/react/cjs/react.production.min.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";

return module.exports;
} };
__modules["virtual/react/cjs/react.development.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
throw new Error("dev build excluded from production bundle: virtual/react/cjs/react.development.js");
} };
__modules["virtual/react-jsx-runtime"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"./cjs/react-jsx-runtime.production.min.js":"virtual/react/cjs/react-jsx-runtime.production.min.js","./cjs/react-jsx-runtime.development.js":"virtual/react/cjs/react-jsx-runtime.development.js"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-jsx-runtime.production.min.js');
} else {
  module.exports = require('./cjs/react-jsx-runtime.development.js');
}

return module.exports;
} };
__modules["virtual/react/cjs/react-jsx-runtime.production.min.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"react":"virtual/react"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var f=require("react"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;

return module.exports;
} };
__modules["virtual/react/cjs/react-jsx-runtime.development.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
throw new Error("dev build excluded from production bundle: virtual/react/cjs/react-jsx-runtime.development.js");
} };
__modules["virtual/react-dom"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"./cjs/react-dom.production.min.js":"virtual/react-dom/cjs/react-dom.production.min.js","./cjs/react-dom.development.js":"virtual/react-dom/cjs/react-dom.development.js"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (process.env.NODE_ENV === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}

return module.exports;
} };
__modules["virtual/react-dom/cjs/react-dom.production.min.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"react":"virtual/react","scheduler":"virtual/scheduler"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),ca=require("scheduler");function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";

return module.exports;
} };
__modules["virtual/react-dom/cjs/react-dom.development.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
throw new Error("dev build excluded from production bundle: virtual/react-dom/cjs/react-dom.development.js");
} };
__modules["virtual/react-dom-client"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"react-dom":"virtual/react-dom"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
'use strict';

var m = require('react-dom');
if (process.env.NODE_ENV === 'production') {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

return module.exports;
} };
__modules["virtual/scheduler"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({"./cjs/scheduler.production.min.js":"virtual/scheduler/cjs/scheduler.production.min.js","./cjs/scheduler.development.js":"virtual/scheduler/cjs/scheduler.development.js"})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}

return module.exports;
} };
__modules["virtual/scheduler/cjs/scheduler.production.min.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
var module = { exports: {} }; var exports = module.exports; var require = function(s){ var k = ({})[s]; if (!k) throw new Error("require miss: " + s); return __req(k); };
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};

return module.exports;
} };
__modules["virtual/scheduler/cjs/scheduler.development.js"] = { loaded: false, exports: {}, isCjs: true, factory: function(__req
) {
throw new Error("dev build excluded from production bundle: virtual/scheduler/cjs/scheduler.development.js");
} };
__modules[".tsbuild/main.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m_virtual_react = __req("virtual/react");
const m_virtual_react_dom_client = __req("virtual/react-dom-client");
const m__tsbuild_App_js = __req(".tsbuild/App.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const React = m_virtual_react.default !== undefined ? m_virtual_react.default : m_virtual_react;
const createRoot = m_virtual_react_dom_client.createRoot;
const App = m__tsbuild_App_js.App;




const rootEl = document.getElementById("root");
if (rootEl) {
    createRoot(rootEl).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
// PWA: offline support via service worker (https / localhost only; silent no-op otherwise)
if ("serviceWorker" in navigator && window.location.protocol === "https:") {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
            /* registration blocked or unsupported — app still works online */
        });
    });
}


return __exports;
} };
__modules[".tsbuild/App.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m_virtual_react = __req("virtual/react");
const m__tsbuild_screens_tourist_js = __req(".tsbuild/screens/tourist.js");
const m__tsbuild_screens_ops_js = __req(".tsbuild/screens/ops.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const _jsxs = m_virtual_react_jsx_runtime.jsxs;
const _Fragment = m_virtual_react_jsx_runtime.Fragment;
const useEffect = m_virtual_react.useEffect;
const useState = m_virtual_react.useState;
const HomeScreen = m__tsbuild_screens_tourist_js.HomeScreen;
const ExploreScreen = m__tsbuild_screens_tourist_js.ExploreScreen;
const MapScreen = m__tsbuild_screens_tourist_js.MapScreen;
const BusinessDetailScreen = m__tsbuild_screens_tourist_js.BusinessDetailScreen;
const SavedScreen = m__tsbuild_screens_tourist_js.SavedScreen;
const ProfileScreen = m__tsbuild_screens_tourist_js.ProfileScreen;
const RouteScreen = m__tsbuild_screens_tourist_js.RouteScreen;
const SubmitScreen = m__tsbuild_screens_ops_js.SubmitScreen;
const AdminConsole = m__tsbuild_screens_ops_js.AdminConsole;
const AssistantPanel = m__tsbuild_screens_ops_js.AssistantPanel;

// ─── App shell: routing, bottom nav, assistant FAB, PWA install ──────────────



function parseHash() {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    const [pathPart, queryPart] = raw.split("?");
    const parts = pathPart.split("/").filter(Boolean);
    return { name: parts[0] ?? "home", parts, query: new URLSearchParams(queryPart ?? "") };
}
function useHashRoute() {
    const [route, setRoute] = useState(parseHash);
    useEffect(() => {
        const h = () => setRoute(parseHash());
        window.addEventListener("hashchange", h);
        return () => window.removeEventListener("hashchange", h);
    }, []);
    return route;
}
const BRAND_MARK = (_jsxs("svg", { width: "18", height: "18", viewBox: "0 0 64 64", "aria-hidden": "true", children: [_jsx("circle", { cx: "32", cy: "30", r: "16", fill: "none", stroke: "currentColor", strokeWidth: "5" }), _jsx("circle", { cx: "32", cy: "30", r: "5", fill: "currentColor" }), _jsx("path", { d: "M32 46 v10 M22 56 h20", stroke: "currentColor", strokeWidth: "5", strokeLinecap: "round", fill: "none" })] }));
const ICONS = {
    home: _jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [_jsx("path", { d: "M3 10.5 12 3l9 7.5" }), _jsx("path", { d: "M5 9.5V21h14V9.5" })] }),
    explore: _jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: [_jsx("circle", { cx: "12", cy: "12", r: "9" }), _jsx("path", { d: "m15.5 8.5-2 5-5 2 2-5z" })] }),
    map: _jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", "aria-hidden": "true", children: [_jsx("path", { d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" }), _jsx("path", { d: "M9 4v14 M15 6v14" })] }),
    saved: _jsx("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinejoin: "round", "aria-hidden": "true", children: _jsx("path", { d: "M12 20s-7-4.6-9.2-9C1.2 7.9 3 4.5 6.4 4.5c2 0 3.5 1.1 4.3 2.6h2.6c.8-1.5 2.3-2.6 4.3-2.6 3.4 0 5.2 3.4 3.6 6.5C19 15.4 12 20 12 20z", transform: "scale(0.92) translate(1,1)" }) }),
    profile: _jsxs("svg", { width: "21", height: "21", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", "aria-hidden": "true", children: [_jsx("circle", { cx: "12", cy: "8", r: "4" }), _jsx("path", { d: "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" })] }),
};
function Tabbar({ active, go }) {
    const tabs = [
        { id: "home", label: "Home", hash: "#/", icon: ICONS.home },
        { id: "explore", label: "Explore", hash: "#/explore", icon: ICONS.explore },
        { id: "map", label: "Map", hash: "#/map", icon: ICONS.map },
        { id: "saved", label: "Saved", hash: "#/saved", icon: ICONS.saved },
        { id: "profile", label: "Profile", hash: "#/profile", icon: ICONS.profile },
    ];
    return (_jsx("nav", { className: "tabbar", "aria-label": "Main navigation", children: _jsx("div", { className: "tabbar-inner", children: tabs.map((t) => (_jsxs("button", { className: `tab ${active === t.id ? "active" : ""}`, onClick: () => go(t.hash), "aria-current": active === t.id ? "page" : undefined, children: [_jsx("span", { className: "tab-ico", children: t.icon }), t.label] }, t.id))) }) }));
}
function useInstallPrompt() {
    const [evt, setEvt] = useState(null);
    const [installed, setInstalled] = useState(false);
    useEffect(() => {
        const h = (e) => { e.preventDefault(); setEvt(e); };
        const hi = () => setInstalled(true);
        window.addEventListener("beforeinstallprompt", h);
        window.addEventListener("appinstalled", hi);
        return () => { window.removeEventListener("beforeinstallprompt", h); window.removeEventListener("appinstalled", hi); };
    }, []);
    const promptInstall = async () => {
        if (!evt)
            return false;
        evt.prompt();
        await evt.userChoice;
        setEvt(null);
        return true;
    };
    return { canInstall: !!evt, promptInstall, installed };
}
function App() {
    const route = useHashRoute();
    const [assistantOpen, setAssistantOpen] = useState(false);
    const { canInstall, promptInstall } = useInstallPrompt();
    const nav = { go: (h) => { window.location.hash = h.startsWith("#") ? h : `#${h}`; } };
    useEffect(() => {
        if (!window.location.hash)
            window.location.hash = "#/";
        window.scrollTo(0, 0);
    }, [route.name, route.parts.join("/")]);
    const active = route.name === "" ? "home" : route.name;
    const showAssistant = !["submit", "admin"].includes(active);
    let screen;
    switch (active) {
        case "explore":
            screen = _jsx(ExploreScreen, { nav: nav, initialCat: route.query.get("cat") ?? undefined });
            break;
        case "business":
            screen = _jsx(BusinessDetailScreen, { nav: nav, id: route.parts[1] ?? "" });
            break;
        case "map":
            screen = _jsx(MapScreen, { nav: nav });
            break;
        case "saved":
            screen = _jsx(SavedScreen, { nav: nav });
            break;
        case "profile":
            screen = _jsx(ProfileScreen, {});
            break;
        case "route":
            screen = _jsx(RouteScreen, { nav: nav, routeId: route.parts[1] ?? "" });
            break;
        case "submit":
            screen = _jsx(SubmitScreen, {});
            break;
        case "admin":
            screen = _jsx(AdminConsole, {});
            break;
        default:
            screen = _jsx(HomeScreen, { nav: nav });
    }
    const inDetail = active === "business" || active === "route" || active === "submit" || active === "admin";
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "app-shell", style: { paddingBottom: 0 }, children: _jsxs("div", { className: "topbar", children: [_jsxs("a", { className: "brand", href: "#/", "aria-label": "LocalLoop home", children: [_jsx("span", { className: "brand-mark", children: BRAND_MARK }), "LocalLoop"] }), _jsxs("div", { className: "row", children: [_jsx("span", { className: "demo-tag", children: "DEMO \u00B7 RIVERSTONE" }), canInstall && (_jsx("button", { className: "btn btn-secondary btn-sm", onClick: promptInstall, children: "Install app" }))] })] }) }), _jsx("main", { className: "app-shell", id: "main", children: screen }), showAssistant && (_jsx("button", { className: "fab", onClick: () => setAssistantOpen(true), "aria-label": "Open LocalLoop assistant", children: _jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", "aria-hidden": "true", children: [_jsx("path", { d: "M21 11.5a8.4 8.4 0 0 1-8.5 8.3c-1.5 0-2.9-.3-4.1-1L3 20l1.3-4.1a8 8 0 0 1-.8-3.4A8.4 8.4 0 0 1 12 4.2a8.4 8.4 0 0 1 9 7.3z" }), _jsx("path", { d: "M8.5 11.5h.01 M12.5 11.5h.01 M16.5 11.5h.01", strokeWidth: "2.6" })] }) })), assistantOpen && showAssistant && _jsx(AssistantPanel, { onClose: () => setAssistantOpen(false), nav: nav }), !inDetail && _jsx(Tabbar, { active: active, go: nav.go })] }));
}


__exports["App"] = App;
return __exports;
} };
__modules[".tsbuild/screens/tourist.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m_virtual_react = __req("virtual/react");
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const m__tsbuild_lib_map_js = __req(".tsbuild/lib/map.js");
const m__tsbuild_components_ui_js = __req(".tsbuild/components/ui.js");
const m__tsbuild_components_flavor_js = __req(".tsbuild/components/flavor.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const _jsxs = m_virtual_react_jsx_runtime.jsxs;
const _Fragment = m_virtual_react_jsx_runtime.Fragment;
const useEffect = m_virtual_react.useEffect;
const useMemo = m_virtual_react.useMemo;
const useRef = m_virtual_react.useRef;
const useState = m_virtual_react.useState;
const getApprovedBusinesses = m__tsbuild_lib_store_js.getApprovedBusinesses;
const getCategories = m__tsbuild_lib_store_js.getCategories;
const getDestination = m__tsbuild_lib_store_js.getDestination;
const getFavoriteBusinesses = m__tsbuild_lib_store_js.getFavoriteBusinesses;
const getImpactSummary = m__tsbuild_lib_store_js.getImpactSummary;
const getImpactEvents = m__tsbuild_lib_store_js.getImpactEvents;
const getReviewsFor = m__tsbuild_lib_store_js.getReviewsFor;
const getRoutes = m__tsbuild_lib_store_js.getRoutes;
const getBusinessById = m__tsbuild_lib_store_js.getBusinessById;
const isFavorite = m__tsbuild_lib_store_js.isFavorite;
const toggleFavorite = m__tsbuild_lib_store_js.toggleFavorite;
const addReview = m__tsbuild_lib_store_js.addReview;
const markVisited = m__tsbuild_lib_store_js.markVisited;
const hasMarkedVisited = m__tsbuild_lib_store_js.hasMarkedVisited;
const rankBusinesses = m__tsbuild_lib_store_js.rankBusinesses;
const isOpenNow = m__tsbuild_lib_store_js.isOpenNow;
const priceLabel = m__tsbuild_lib_store_js.priceLabel;
const formatDistance = m__tsbuild_lib_store_js.formatDistance;
const distanceFromCenter = m__tsbuild_lib_store_js.distanceFromCenter;
const distanceKm = m__tsbuild_lib_store_js.distanceKm;
const businessesInCategory = m__tsbuild_lib_store_js.businessesInCategory;
const MiniMap = m__tsbuild_lib_map_js.MiniMap;
const BusinessCard = m__tsbuild_components_ui_js.BusinessCard;
const ScoreDial = m__tsbuild_components_ui_js.ScoreDial;
const OwnershipBadge = m__tsbuild_components_ui_js.OwnershipBadge;
const PlaceholderArt = m__tsbuild_components_ui_js.PlaceholderArt;
const EmptyState = m__tsbuild_components_ui_js.EmptyState;
const Toast = m__tsbuild_components_ui_js.Toast;
const useToast = m__tsbuild_components_ui_js.useToast;
const ScoreBreakdown = m__tsbuild_components_ui_js.ScoreBreakdown;
const HoursTable = m__tsbuild_components_ui_js.HoursTable;
const catLabel = m__tsbuild_components_ui_js.catLabel;
const catEmoji = m__tsbuild_components_ui_js.catEmoji;
const FlavorBadge = m__tsbuild_components_flavor_js.FlavorBadge;
const FlavorCard = m__tsbuild_components_flavor_js.FlavorCard;
const MenuList = m__tsbuild_components_flavor_js.MenuList;
const hasGentleOption = m__tsbuild_lib_store_js.hasGentleOption;

// ─── Tourist screens ─────────────────────────────────────────────────────────






// ── Home ─────────────────────────────────────────────────────────────────────
function HomeScreen({ nav }) {
    const dest = getDestination();
    const cats = getCategories();
    const all = getApprovedBusinesses();
    const routes = getRoutes();
    const [userPos, setUserPos] = useState(null);
    const [locNote, setLocNote] = useState(null);
    const askLocation = () => {
        if (!navigator.geolocation) {
            setLocNote("Location isn't available on this device — showing Riverstone centre.");
            return;
        }
        setLocNote("Requesting location…");
        navigator.geolocation.getCurrentPosition((p) => {
            setUserPos({ lat: p.coords.latitude, lng: p.coords.longitude });
            setLocNote(null);
        }, () => setLocNote("Location permission denied — showing Riverstone centre instead."), { timeout: 8000 });
    };
    const origin = userPos ?? dest.center;
    const recommended = useMemo(() => rankBusinesses(all, "recommended", { userLat: origin.lat, userLng: origin.lng }).slice(0, 4), [all, origin.lat, origin.lng]);
    return (_jsxs("div", { className: "page", children: [_jsxs("section", { className: "hero", children: [_jsx("div", { className: "hero-kicker", children: "Tourism should benefit the people who live here" }), _jsxs("h1", { children: ["Discover the real ", _jsx("em", { children: dest.name }), "."] }), _jsx("p", { className: "hero-sub", children: "Find places owned by the people who live here \u2014 food stalls, family kitchens, craft workshops and homestays, not another chain." }), _jsxs("div", { className: "hero-ctas", children: [_jsx("a", { className: "btn btn-primary", href: "#/explore", children: "Explore Local" }), _jsx("a", { className: "btn btn-secondary", href: "#/submit", children: "I'm a Local Business" })] }), _jsxs("div", { className: "mt-16", children: [_jsxs("button", { className: "btn btn-ghost btn-sm", onClick: askLocation, children: ["\uD83D\uDCCD ", userPos ? "Using your location" : "Use my location"] }), locNote && _jsx("p", { className: "small faint", style: { marginTop: 6 }, children: locNote })] })] }), _jsx("section", { className: "hero-art", "aria-hidden": "true", children: _jsx(PlaceholderArtWithAttr, {}) }), _jsxs("section", { className: "sec", children: [_jsx("div", { className: "sec-head", children: _jsx("h2", { children: "What are you looking for?" }) }), _jsx("div", { className: "cat-grid", children: cats.map((c) => {
                            const count = all.filter((b) => b.categoryId === c.id || (b.alsoCategories ?? []).includes(c.id)).length;
                            return (_jsxs("button", { className: "cat-btn", onClick: () => nav.go(`#/explore?cat=${c.slug}`), children: [_jsx("span", { className: "cat-emoji", "aria-hidden": "true", children: c.emoji }), c.label, _jsxs("span", { className: "cat-count", children: [count, " local place", count === 1 ? "" : "s"] })] }, c.id));
                        }) })] }), _jsxs("section", { className: "sec", children: [_jsxs("div", { className: "sec-head", children: [_jsx("h2", { children: "Recommended local picks" }), _jsx("a", { className: "sec-link", href: "#/explore", children: "See all \u2192" })] }), _jsx("div", { className: "biz-list", children: recommended.map((b) => _jsx(BusinessCard, { b: b, onOpen: (id) => nav.go(`#/business/${id}`) }, b.id)) })] }), _jsxs("section", { className: "sec", children: [_jsxs("div", { className: "sec-head", children: [_jsx("h2", { children: "Walk Local routes" }), _jsx("a", { className: "sec-link", href: "#/explore", children: "All routes \u2192" })] }), routes.slice(0, 2).map((r) => (_jsxs("button", { className: "card card-pad card-tap", style: { width: "100%", textAlign: "left", border: "1px solid var(--line)", background: "var(--surface)" }, onClick: () => nav.go(`#/route/${r.id}`), children: [_jsx("h3", { children: r.name }), _jsx("p", { className: "muted small", style: { marginTop: 4 }, children: r.description }), _jsxs("p", { className: "small tnum faint", style: { marginTop: 8 }, children: [r.distanceKm, " km \u00B7 ~", r.minutes, " min walk \u00B7 ", r.stops.length, " stops \u00B7 est. RM", r.estimatedSpendRM, " local spend"] })] }, r.id)))] }), _jsx(LandingSections, { nav: nav })] }));
}
function PlaceholderArtWithAttr() {
    return (_jsx("div", { className: "ph", style: { height: 150 }, role: "img", "aria-label": "Illustrated riverside town", children: _jsxs("svg", { viewBox: "0 0 100 40", preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", children: [_jsx("rect", { width: "100", height: "40", fill: "#dcebee" }), _jsx("circle", { cx: "78", cy: "9", r: "5", fill: "#f6c88f" }), _jsx("path", { d: "M0 26 Q 25 20 50 24 T 100 22 V 40 H 0 Z", fill: "#a9cfdb" }), _jsx("path", { d: "M0 30 Q 30 26 55 30 T 100 29 V 40 H 0 Z", fill: "#2e6e82", opacity: "0.75" }), _jsx("path", { d: "M8 24 l5 -8 5 8 z M20 24 l4 -6 4 6 z", fill: "#ffffff", opacity: "0.8" })] }) }));
}
function LandingSections({ nav }) {
    const impact = getImpactSummary();
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "land-section", children: [_jsx("h2", { children: "Tourism should benefit the people who live there." }), _jsx("p", { className: "land-copy mt-8", children: "Visitors spend billions in destinations every year. Too much of that spending flows to large chains and companies outside the community. LocalLoop helps visitors discover independent businesses, local experiences and community-owned places \u2014 so the value stays where you're standing." })] }), _jsxs("section", { className: "land-section", children: [_jsxs("div", { className: "row-between", children: [_jsx("h2", { children: "Keep more tourism value local." }), _jsx("span", { className: "badge badge-demo", children: "Demo data" })] }), _jsxs("div", { className: "metrics", children: [_jsxs("div", { className: "stat", children: [_jsx("div", { className: "v tnum", children: getApprovedBusinesses().length }), _jsx("div", { className: "k", children: "Local businesses discovered" })] }), _jsxs("div", { className: "stat", children: [_jsx("div", { className: "v tnum", children: impact.businessesVisited }), _jsx("div", { className: "k", children: "Local places visited" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["RM", impact.estimatedSpendRM] }), _jsx("div", { className: "k", children: "Estimated local spending" })] })] }), _jsx("p", { className: "small faint mt-8", children: "Figures on this page are demo estimates from your activity in this app \u2014 not recorded transactions. Real spending isn't measured until payments happen in-product." })] }), _jsxs("section", { className: "land-section card card-pad", children: [_jsx("h2", { children: "Are you a local business?" }), _jsx("p", { className: "land-copy", children: "Let visitors discover you without needing a big marketing budget, a website, or any technical skills." }), _jsxs("div", { className: "mt-16 row", style: { flexWrap: "wrap" }, children: [_jsx("a", { className: "btn btn-primary", href: "#/submit", children: "Get Listed" }), _jsx("a", { className: "btn btn-ghost", href: "#/admin", children: "Admin console \u2192" })] })] }), _jsxs("section", { className: "land-section card card-pad", children: [_jsx("h2", { children: "Know a great local place?" }), _jsx("p", { className: "land-copy", children: "Recommend a business and our team will verify it before it appears." }), _jsx("a", { className: "btn btn-secondary mt-16", href: "#/submit?via=community", children: "Recommend a Business" })] }), _jsxs("footer", { className: "foot", children: [_jsx("span", { children: "LocalLoop \u2014 Travel local. Spend local. Keep the value local." }), _jsxs("span", { children: ["Fictional demo destination: ", getDestination().name] }), _jsx("a", { href: "#/admin", children: "Admin" })] })] }));
}
// ── Explore ──────────────────────────────────────────────────────────────────
function ExploreScreen({ nav, initialCat, initialRoute }) {
    const cats = getCategories();
    const all = getApprovedBusinesses();
    const routes = getRoutes();
    const [cat, setCat] = useState(initialCat ? (cats.find((c) => c.slug === initialCat)?.id ?? null) : null);
    const [sort, setSort] = useState("recommended");
    const [openOnly, setOpenOnly] = useState(false);
    const [filters, setFilters] = useState({
        locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false,
    });
    const [userPos, setUserPos] = useState(null);
    useEffect(() => {
        if (initialRoute) {
            const r = routes.find((x) => x.id === initialRoute);
            if (r)
                setCat(null);
        }
    }, [initialRoute, routes]);
    const filtered = useMemo(() => {
        let list = cat ? businessesInCategory(all, cat) : all;
        if (openOnly)
            list = list.filter((b) => isOpenNow(b));
        if (filters.locallyOwned)
            list = list.filter((b) => b.locallyOwned);
        if (filters.family)
            list = list.filter((b) => b.ownershipType === "family_owned");
        if (filters.eco)
            list = list.filter((b) => b.scoreInputs.sustainability >= 9);
        if (filters.highlyRated)
            list = list.filter((b) => b.ratingAvg >= 4.6 && b.ratingCount > 0);
        if (filters.under20)
            list = list.filter((b) => b.priceLevel === 1);
        if (filters.walk) {
            const origin = userPos ?? getDestination().center;
            list = list.filter((b) => distanceKm(origin.lat, origin.lng, b.latitude, b.longitude) <= 1.2);
        }
        if (filters.gentle)
            list = list.filter(hasGentleOption);
        return rankBusinesses(list, sort, { userLat: userPos?.lat, userLng: userPos?.lng, categorySlug: cat ?? undefined });
    }, [all, cat, sort, openOnly, filters, userPos]);
    const activeFilterCount = Object.values(filters).filter(Boolean).length + (openOnly ? 1 : 0);
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("h1", { children: "Explore Local" }) }), _jsxs("div", { className: "chip-row", role: "tablist", "aria-label": "Categories", children: [_jsx("button", { className: `chip ${cat === null ? "active" : ""}`, onClick: () => setCat(null), children: "All" }), cats.map((c) => (_jsxs("button", { className: `chip ${cat === c.id ? "active" : ""}`, onClick: () => setCat(c.id), "aria-pressed": cat === c.id, children: [c.emoji, " ", c.label] }, c.id)))] }), _jsxs("div", { className: "chip-row", role: "group", "aria-label": "Filters", children: [_jsx("button", { className: `chip ${openOnly ? "active" : ""}`, onClick: () => setOpenOnly(!openOnly), children: "Open now" }), _jsx("button", { className: `chip ${filters.locallyOwned ? "active" : ""}`, onClick: () => setFilters({ ...filters, locallyOwned: !filters.locallyOwned }), children: "Locally owned" }), _jsx("button", { className: `chip ${filters.family ? "active" : ""}`, onClick: () => setFilters({ ...filters, family: !filters.family }), children: "Family owned" }), _jsx("button", { className: `chip ${filters.eco ? "active" : ""}`, onClick: () => setFilters({ ...filters, eco: !filters.eco }), children: "Eco-friendly" }), _jsx("button", { className: `chip ${filters.highlyRated ? "active" : ""}`, onClick: () => setFilters({ ...filters, highlyRated: !filters.highlyRated }), children: "Highly rated" }), _jsx("button", { className: `chip ${filters.under20 ? "active" : ""}`, onClick: () => setFilters({ ...filters, under20: !filters.under20 }), children: "Under RM20" }), _jsx("button", { className: `chip ${filters.walk ? "active" : ""}`, onClick: () => setFilters({ ...filters, walk: !filters.walk }), children: "Walking distance" }), _jsx("button", { className: `chip ${filters.gentle ? "active" : ""}`, onClick: () => setFilters({ ...filters, gentle: !filters.gentle }), title: "Places with dishes gentle on spice, sweetness, sourness and MSG", children: "\uD83C\uDF36\uFE0F Gentle flavors" }), activeFilterCount > 0 && (_jsxs("button", { className: "chip", onClick: () => { setFilters({ locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false }); setOpenOnly(false); }, children: ["Clear (", activeFilterCount, ")"] }))] }), _jsxs("div", { className: "row-between", style: { margin: "6px 2px 12px" }, children: [_jsxs("span", { className: "small muted tnum", children: [filtered.length, " place", filtered.length === 1 ? "" : "s"] }), _jsx("div", { className: "seg", role: "group", "aria-label": "Sort", children: ["recommended", "distance", "score", "rating", "open"].map((s) => (_jsx("button", { className: sort === s ? "active" : "", onClick: () => setSort(s), children: s === "recommended" ? "Recommended" : s === "distance" ? "Distance" : s === "score" ? "Local Score" : s === "rating" ? "Rating" : "Open Now" }, s))) })] }), filtered.length === 0 ? (_jsx(EmptyState, { icon: "\uD83D\uDD0D", title: "No places match these filters", body: "Try removing a filter or switching category \u2014 the demo destination has places across five categories.", action: _jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => { setFilters({ locallyOwned: false, family: false, eco: false, highlyRated: false, under20: false, walk: false, gentle: false }); setOpenOnly(false); setCat(null); }, children: "Reset filters" }) })) : (_jsx("div", { className: "biz-list", children: filtered.map((b) => _jsx(BusinessCard, { b: b, onOpen: (id) => nav.go(`#/business/${id}`) }, b.id)) })), _jsxs("section", { className: "sec", children: [_jsx("div", { className: "sec-head", children: _jsx("h2", { children: "Walk Local" }) }), _jsx("p", { className: "muted small", style: { marginBottom: 10 }, children: "Guided walking loops that link local businesses. Distances and times are estimates; the environmental benefit of walking is real but we don't claim exact CO\u2082 numbers." }), routes.map((r) => (_jsxs("button", { className: "card card-pad card-tap", style: { width: "100%", textAlign: "left", border: "1px solid var(--line)", background: "var(--surface)", marginBottom: 10 }, onClick: () => nav.go(`#/route/${r.id}`), children: [_jsx("h3", { children: r.name }), _jsx("p", { className: "muted small", style: { marginTop: 4 }, children: r.description }), _jsxs("p", { className: "small tnum faint", style: { marginTop: 8 }, children: [r.distanceKm, " km \u00B7 ~", r.minutes, " min \u00B7 est. RM", r.estimatedSpendRM, " local spend"] })] }, r.id)))] })] }));
}
// ── Route detail ─────────────────────────────────────────────────────────────
function RouteScreen({ nav, routeId }) {
    const route = getRoutes().find((r) => r.id === routeId);
    if (!route) {
        return _jsx(EmptyState, { icon: "\uD83D\uDEB6", title: "Route not found", body: "This walking route doesn't exist.", action: _jsx("a", { className: "btn btn-secondary btn-sm", href: "#/explore", children: "Back to Explore" }) });
    }
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => nav.go("#/explore"), children: "\u2190 Explore" }) }), _jsx("h1", { children: route.name }), _jsx("p", { className: "muted", style: { marginTop: 8 }, children: route.description }), _jsxs("div", { className: "stat-grid mt-16", children: [_jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: [route.distanceKm, " km"] }), _jsx("div", { className: "k", children: "Distance" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["~", route.minutes, " min"] }), _jsx("div", { className: "k", children: "Walking time" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["RM", route.estimatedSpendRM] }), _jsx("div", { className: "k", children: "Est. local spend" })] })] }), _jsx("div", { className: "route-stops", children: route.stops.map((s) => {
                    const b = s.businessId ? getBusinessById(s.businessId) : undefined;
                    return (_jsxs("div", { className: "route-stop", children: [_jsxs("div", { className: "n", children: ["Stop ", s.order] }), _jsx("div", { className: "t", children: b ? (_jsx("a", { href: `#/business/${b.id}`, onClick: (e) => { e.preventDefault(); nav.go(`#/business/${b.id}`); }, children: b.name })) : (s.label) }), _jsx("div", { className: "d", children: s.note }), b && _jsxs("div", { className: "small faint", style: { marginTop: 2 }, children: [catLabel(b.categoryId), " \u00B7 ", formatDistance(distanceFromCenter(b)), " from centre \u00B7 Local Score ", b.localScore] })] }, s.order));
                }) }), _jsxs("div", { className: "notice notice-accent mt-8", children: [_jsx("span", { "aria-hidden": "true", children: "\uD83C\uDF3F" }), _jsx("span", { children: "Walking this loop keeps your spending on foot, in the neighbourhood. We describe the benefit qualitatively rather than quoting an exact CO\u2082 figure \u2014 we'd rather be honest than precise-sounding." })] })] }));
}
// ── Map screen ───────────────────────────────────────────────────────────────
function MapScreen({ nav }) {
    const all = getApprovedBusinesses();
    const cats = getCategories();
    const [cat, setCat] = useState(null);
    const [openOnly, setOpenOnly] = useState(false);
    const [selected, setSelected] = useState(null);
    const canvasRef = useRef(null);
    const mapRef = useRef(null);
    const filtered = useMemo(() => {
        let list = cat ? businessesInCategory(all, cat) : all;
        if (openOnly)
            list = list.filter((b) => isOpenNow(b));
        return list;
    }, [all, cat, openOnly]);
    useEffect(() => {
        if (!canvasRef.current)
            return;
        const m = new MiniMap(canvasRef.current, filtered, {
            onSelect: (id) => { setSelected(id); },
        });
        mapRef.current = m;
        return () => { m.destroy(); mapRef.current = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        mapRef.current?.setPoints(filtered);
        if (selected && !filtered.some((b) => b.id === selected))
            setSelected(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtered]);
    useEffect(() => {
        mapRef.current?.setSelected(selected);
    }, [selected]);
    const sel = selected ? getBusinessById(selected) : undefined;
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("h1", { children: "Map" }) }), _jsxs("div", { className: "map-wrap", children: [_jsx("canvas", { ref: canvasRef, className: "map-canvas", "aria-label": "Interactive map of local businesses" }), _jsx("div", { className: "map-filters", children: _jsxs("div", { className: "chip-row", children: [_jsx("button", { className: `chip ${cat === null ? "active" : ""}`, onClick: () => setCat(null), children: "All" }), cats.map((c) => (_jsxs("button", { className: `chip ${cat === c.id ? "active" : ""}`, onClick: () => setCat(c.id), children: [c.emoji, " ", c.label.split(" ")[0]] }, c.id))), _jsx("button", { className: `chip ${openOnly ? "active" : ""}`, onClick: () => setOpenOnly(!openOnly), children: "Open" })] }) }), _jsxs("div", { className: "map-ctrl", children: [_jsx("button", { "aria-label": "Zoom in", onClick: () => mapRef.current?.flyTo(getDestination().center.lat, getDestination().center.lng, Math.min(18, 16.5)), children: "+" }), _jsx("button", { "aria-label": "Zoom out", onClick: () => mapRef.current?.flyTo(getDestination().center.lat, getDestination().center.lng, 14.5), children: "\u2212" })] }), sel && (_jsxs("div", { className: "map-pop", children: [_jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [_jsxs("div", { className: "badge-row", style: { marginBottom: 4 }, children: [sel.isDemo && _jsx("span", { className: "badge badge-demo", children: "DEMO" }), _jsx(OwnershipBadge, { b: sel })] }), _jsx("h3", { style: { fontSize: 15.5 }, children: sel.name }), _jsxs("div", { className: "small muted", children: [catLabel(sel.categoryId), " \u00B7 ", priceLabel(sel.priceLevel), " \u00B7 Local Score ", sel.localScore] })] }), _jsx("button", { className: "btn btn-primary btn-sm", onClick: () => nav.go(`#/business/${sel.id}`), children: "View" }), _jsx("button", { className: "btn btn-ghost btn-sm", "aria-label": "Close", onClick: () => setSelected(null), children: "\u2715" })] }))] }), _jsxs("p", { className: "small faint", style: { marginTop: 8 }, children: ["Drag to pan, scroll or pinch to zoom, tap a marker for details. ", filtered.length, " of ", all.length, " places shown."] })] }));
}
// ── Business detail ──────────────────────────────────────────────────────────
function BusinessDetailScreen({ nav, id }) {
    const b = getBusinessById(id);
    const [toast, setToast] = useToast();
    const [fav, setFav] = useState(() => (id ? isFavorite(id) : false));
    const [visited, setVisited] = useState(() => (id ? hasMarkedVisited(id) : false));
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [visitDate, setVisitDate] = useState(new Date().toISOString().slice(0, 10));
    const [reviewErr, setReviewErr] = useState(null);
    const [showHours, setShowHours] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
    if (!b || b.status === "rejected") {
        return _jsx(EmptyState, { icon: "\uD83E\uDD14", title: "Business not found", body: "This listing doesn't exist or was removed.", action: _jsx("a", { className: "btn btn-secondary btn-sm", href: "#/explore", children: "Back to Explore" }) });
    }
    if (b.status === "pending") {
        return (_jsx(EmptyState, { icon: "\u23F3", title: "Awaiting verification", body: `"${b.name}" has been submitted and is pending admin verification. Local status: Unverified. It isn't publicly listed yet.`, action: _jsx("a", { className: "btn btn-secondary btn-sm", href: "#/explore", children: "Back to Explore" }) }));
    }
    const reviews = getReviewsFor(b.id);
    const open = isOpenNow(b);
    const dest = getDestination();
    const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${b.latitude},${b.longitude}`;
    const waMsg = encodeURIComponent(`Hi ${b.name}! I found your place on LocalLoop.`);
    const onSave = () => {
        const nowFav = toggleFavorite(b.id);
        setFav(nowFav);
        setToast(nowFav ? "Saved to your list" : "Removed from saved");
    };
    const onVisitYes = () => {
        markVisited(b.id);
        setVisited(true);
        const est = b.priceLevel === 1 ? 15 : b.priceLevel === 2 ? 35 : 80;
        setToast(`Thanks! Impact updated — est. RM${est} local spending (estimate)`);
    };
    const submitReview = () => {
        if (!rating) {
            setReviewErr("Pick a star rating first.");
            return;
        }
        if (reviewText.trim().length < 4) {
            setReviewErr("Please write a short comment (4+ characters).");
            return;
        }
        addReview(b.id, rating, reviewText, visitDate);
        setReviewText("");
        setRating(0);
        setReviewErr(null);
        setToast("Review added — thanks for helping other travellers");
    };
    return (_jsxs("div", { className: "page", children: [_jsxs("div", { className: "detail-hero", children: [_jsx("div", { className: "detail-back", children: _jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => nav.go("#/explore"), children: "\u2190 Back" }) }), _jsx(PlaceholderArt, { b: b, height: 200 })] }), _jsxs("div", { className: "detail-title-row", children: [_jsxs("div", { style: { flex: 1 }, children: [_jsxs("div", { className: "badge-row", style: { marginBottom: 8 }, children: [b.isDemo && _jsx("span", { className: "badge badge-demo", children: "DEMO" }), _jsx(OwnershipBadge, { b: b }), _jsx(FlavorBadge, { b: b }), _jsx("span", { className: `badge ${open ? "badge-open" : "badge-closed"}`, children: open ? "Open now" : "Closed" })] }), _jsx("h1", { style: { fontSize: 26 }, children: b.name }), _jsxs("p", { className: "muted", style: { marginTop: 6 }, children: [catEmoji(b.categoryId), " ", catLabel(b.categoryId), " \u00B7 ", formatDistance(distanceFromCenter(b)), " from ", dest.name, " centre \u00B7 ", priceLabel(b.priceLevel)] })] }), _jsx(ScoreDial, { value: b.localScore, size: 72 })] }), b.verificationNote && (_jsxs("div", { className: "notice mt-16", children: [_jsx("span", { "aria-hidden": "true", children: "\uD83D\uDEE1\uFE0F" }), _jsxs("span", { children: [_jsx("b", { children: b.verificationStatus.replace(/_/g, " ") }), " \u2014 ", b.verificationNote] })] })), _jsxs("div", { className: "detail-actions", children: [_jsxs("a", { className: "btn btn-primary", href: gmapsUrl, target: "_blank", rel: "noreferrer", children: ["\uD83E\uDDED", _jsx("span", { children: "Directions" })] }), _jsxs("a", { className: "btn btn-secondary", href: `tel:${b.phone.replace(/\s/g, "")}`, children: ["\uD83D\uDCDE", _jsx("span", { children: "Call" })] }), _jsxs("a", { className: "btn btn-secondary", href: `https://wa.me/${b.whatsapp.replace(/[^0-9]/g, "")}?text=${waMsg}`, target: "_blank", rel: "noreferrer", children: ["\uD83D\uDCAC", _jsx("span", { children: "WhatsApp" })] }), _jsxs("button", { className: "btn btn-secondary", onClick: onSave, children: [fav ? "♥" : "♡", _jsx("span", { children: fav ? "Saved" : "Save" })] })] }), b.description && _jsx("p", { className: "mt-16", style: { fontSize: 16 }, children: b.description }), b.story && (_jsxs("section", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Why this place matters" }), _jsx("p", { className: "muted", style: { marginTop: 8 }, children: b.story })] })), (b.flavorProfile || (b.menu && b.menu.length > 0)) && (_jsxs("section", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Taste guide & menu" }), _jsx("p", { className: "small muted", style: { marginTop: 4 }, children: "New to local food? These 0\u20133 dials show how intense each flavor runs here, so you can order with confidence." }), b.flavorProfile && _jsx("div", { className: "mt-16", children: _jsx(FlavorCard, { fp: b.flavorProfile }) }), b.menu && b.menu.length > 0 && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "row-between mt-16", children: [_jsx("h3", { style: { fontSize: 15.5 }, children: "Menu" }), _jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setShowMenu(!showMenu), "aria-expanded": showMenu, children: showMenu ? "Hide" : "Show" })] }), showMenu && _jsx(MenuList, { menu: b.menu }), _jsx("p", { className: "small faint", style: { marginTop: 8 }, children: "Prices and flavors are reported by the business and verified during listing review \u2014 ask the stall for today's version." })] }))] })), (b.whyVisit || b.whatsLocal) && (_jsxs("section", { className: "card card-pad mt-16", children: [b.whyVisit && (_jsxs(_Fragment, { children: [_jsx("h3", { children: "Why visit?" }), _jsx("p", { className: "muted", style: { marginTop: 6 }, children: b.whyVisit })] })), b.whatsLocal && (_jsxs(_Fragment, { children: [_jsx("h3", { className: "mt-16", children: "What's local here?" }), _jsx("p", { className: "muted", style: { marginTop: 6 }, children: b.whatsLocal })] }))] })), _jsxs("section", { className: "card card-pad mt-16", children: [_jsxs("button", { className: "row-between", style: { width: "100%", background: "none", border: "none", padding: 0, font: "inherit" }, onClick: () => setShowHours(!showHours), "aria-expanded": showHours, children: [_jsxs("h3", { children: ["Opening hours ", open ? "" : ""] }), _jsx("span", { className: "muted", children: showHours ? "▲" : "▼" })] }), _jsxs("p", { className: "small muted", style: { marginTop: 6 }, children: ["Today: ", b.hours[new Date().getDay()] ?? "Closed"] }), showHours && _jsx("div", { className: "mt-8", children: _jsx(HoursTable, { b: b }) })] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsxs("h3", { children: ["Local Score: ", b.localScore, "/100"] }), _jsx("p", { className: "small muted", style: { marginTop: 4 }, children: "A transparent, editable measure \u2014 not a scientific rating. Admins adjust the inputs below; the total recalculates." }), _jsx("div", { className: "mt-16", children: _jsx(ScoreBreakdown, { b: b }) })] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Did you visit this place?" }), visited ? (_jsx("p", { className: "small muted mt-8", children: "\u2713 Marked as visited \u2014 it's counted in your Local Impact. Thank you for supporting a local business." })) : (_jsxs(_Fragment, { children: [_jsx("p", { className: "small muted mt-8", children: "Your answer updates your estimated local impact (an estimate, not a transaction)." }), _jsxs("div", { className: "row mt-8", children: [_jsx("button", { className: "btn btn-primary btn-sm", onClick: onVisitYes, children: "Yes, I visited" }), _jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setToast("No problem — maybe next time!"), children: "No" })] })] }))] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsxs("div", { className: "row-between", children: [_jsx("h3", { children: "Reviews" }), _jsx("span", { className: "small muted tnum", children: b.ratingAvg > 0 ? `${b.ratingAvg.toFixed(1)} ★ · ${b.ratingCount}` : "No reviews yet" })] }), _jsxs("div", { className: "mt-8", children: [reviews.length === 0 && _jsx("p", { className: "small muted", children: "Be the first to leave a review." }), reviews.map((r) => (_jsxs("div", { className: "review", children: [_jsxs("div", { className: "review-head", children: [_jsxs("span", { className: "review-author", children: [r.author, " ", r.verifiedVisit && _jsx("span", { className: "badge badge-local", style: { fontSize: 10, padding: "2px 7px" }, children: "verified visit" })] }), _jsx("span", { className: "review-date", children: r.visitedDate })] }), _jsxs("div", { className: "stars", "aria-label": `${r.rating} out of 5`, children: ["★".repeat(r.rating), "☆".repeat(5 - r.rating)] }), _jsx("p", { className: "review-text", children: r.text })] }, r.id)))] }), _jsxs("div", { className: "mt-16", style: { borderTop: "1px solid var(--line)", paddingTop: 14 }, children: [_jsx("h4", { style: { fontSize: 15 }, children: "Leave a review" }), _jsx("div", { className: "rating-input mt-8", role: "radiogroup", "aria-label": "Rating", children: [1, 2, 3, 4, 5].map((n) => (_jsx("button", { className: n <= rating ? "on" : "", onClick: () => setRating(n), role: "radio", "aria-checked": n === rating, "aria-label": `${n} star${n > 1 ? "s" : ""}`, children: "\u2605" }, n))) }), _jsx("textarea", { className: "textarea mt-8", placeholder: "What did you think? (no spam, no business self-reviews)", value: reviewText, maxLength: 400, onChange: (e) => setReviewText(e.target.value) }), _jsxs("div", { className: "form-row mt-8", style: { alignItems: "end" }, children: [_jsxs("div", { className: "field", style: { marginBottom: 0 }, children: [_jsx("label", { htmlFor: "visit-date", children: "Visit date" }), _jsx("input", { id: "visit-date", type: "date", className: "input", value: visitDate, max: new Date().toISOString().slice(0, 10), onChange: (e) => setVisitDate(e.target.value) })] }), _jsx("button", { className: "btn btn-primary", onClick: submitReview, children: "Submit review" })] }), reviewErr && _jsx("p", { className: "small", style: { color: "var(--danger)", marginTop: 6 }, role: "alert", children: reviewErr })] })] }), toast && _jsx(Toast, { message: toast })] }));
}
// ── Saved ────────────────────────────────────────────────────────────────────
function SavedScreen({ nav }) {
    const favs = getFavoriteBusinesses();
    const [toast, setToast] = useToast();
    const [, force] = useState(0);
    useEffect(() => {
        const h = () => force((n) => n + 1);
        window.addEventListener("localloop:change", h);
        return () => window.removeEventListener("localloop:change", h);
    }, []);
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("h1", { children: "Saved" }) }), favs.length === 0 ? (_jsx(EmptyState, { icon: "\u2661", title: "Nothing saved yet", body: "Tap the heart on any business to keep it here while you plan your trip.", action: _jsx("a", { className: "btn btn-primary btn-sm", href: "#/explore", children: "Explore Local" }) })) : (_jsx("div", { className: "biz-list", children: favs.map((b) => (_jsxs("div", { children: [_jsx(BusinessCard, { b: b, onOpen: (id) => nav.go(`#/business/${id}`) }), _jsx("button", { className: "btn btn-ghost btn-sm", style: { marginTop: -6 }, onClick: () => { toggleFavorite(b.id); setToast("Removed from saved"); }, children: "Remove" })] }, b.id))) })), toast && _jsx(Toast, { message: toast })] }));
}
// ── Profile / Impact ─────────────────────────────────────────────────────────
function ProfileScreen() {
    const impact = getImpactSummary();
    const events = getImpactEvents();
    const visitedIds = [...new Set(events.map((e) => e.businessId))];
    return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("h1", { children: "Profile & Impact" }) }), _jsxs("div", { className: "notice notice-accent", children: [_jsx("span", { "aria-hidden": "true", children: "\u2139\uFE0F" }), _jsx("span", { children: "You can browse everything without an account. Saving, reviews and impact tracking live on this device for the demo \u2014 a real deployment would attach them to a Supabase Auth account." })] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsxs("div", { className: "row-between", children: [_jsx("h2", { children: "Your Local Impact" }), _jsx("span", { className: "badge badge-demo", children: "Demo estimates" })] }), _jsxs("div", { className: "stat-grid mt-16", children: [_jsxs("div", { className: "stat", children: [_jsx("div", { className: "v tnum", children: impact.businessesVisited }), _jsx("div", { className: "k", children: "Local businesses visited" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["RM", impact.estimatedSpendRM] }), _jsx("div", { className: "k", children: "Estimated local spending" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["RM", impact.thisTripRM] }), _jsx("div", { className: "k", children: "This trip (14 days)" })] })] }), _jsx("p", { className: "small faint mt-8", children: "These are clearly-labelled estimates based on the places you marked as visited and typical price bands. No actual transaction data exists in the MVP." })] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Impact log" }), events.length === 0 ? (_jsx("p", { className: "small muted mt-8", children: "No visits marked yet. Open a business and answer \"Did you visit this place?\" to start the log." })) : (_jsx("div", { className: "mt-8", children: visitedIds.map((idv) => {
                            const b = getBusinessById(idv);
                            const ev = events.find((e) => e.businessId === idv);
                            return (_jsxs("div", { className: "row-between", style: { padding: "8px 0", borderTop: "1px solid var(--line)" }, children: [_jsx("span", { className: "small", style: { fontWeight: 600 }, children: b?.name ?? idv }), _jsxs("span", { className: "small muted tnum", children: ["est. RM", ev.estimatedSpendRM, " \u00B7 ", ev.createdAt.slice(0, 10)] })] }, idv));
                        }) }))] }), _jsxs("section", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Preferences (optional)" }), _jsx("p", { className: "small muted", children: "Set once, used to tune recommendations later." }), _jsx("div", { className: "mt-8", children: ["Food & coffee", "Crafts & culture", "Nature & walking", "Family-friendly", "Budget picks"].map((p, i) => (_jsxs("label", { className: "check-row", children: [_jsx("input", { type: "checkbox", defaultChecked: i < 2, onChange: () => { } }), _jsx("span", { className: "txt", children: p })] }, p))) })] })] }));
}


__exports["HomeScreen"] = HomeScreen;
__exports["ExploreScreen"] = ExploreScreen;
__exports["RouteScreen"] = RouteScreen;
__exports["MapScreen"] = MapScreen;
__exports["BusinessDetailScreen"] = BusinessDetailScreen;
__exports["SavedScreen"] = SavedScreen;
__exports["ProfileScreen"] = ProfileScreen;
return __exports;
} };
__modules[".tsbuild/lib/store.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m__tsbuild_data_seed_js = __req(".tsbuild/data/seed.js");
const m__tsbuild_lib_types_js = __req(".tsbuild/lib/types.js");
const BUSINESSES = m__tsbuild_data_seed_js.BUSINESSES;
const CATEGORIES = m__tsbuild_data_seed_js.CATEGORIES;
const REVIEWS = m__tsbuild_data_seed_js.REVIEWS;
const ROUTES = m__tsbuild_data_seed_js.ROUTES;
const PRICE_ESTIMATES = m__tsbuild_data_seed_js.PRICE_ESTIMATES;
const DEST = m__tsbuild_data_seed_js.DEST;
const computeScore = m__tsbuild_lib_types_js.computeScore;
// ─── Data layer ──────────────────────────────────────────────────────────────
// In-browser store with localStorage persistence. Every async signature mirrors
// a future Supabase client, so the backend can be swapped behind this module.



const LS_KEY = "localloop.v1";
function load() {
    const fallback = {
        businesses: BUSINESSES,
        reviews: REVIEWS,
        favorites: [],
        impact: [],
        visits: [],
    };
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw)
            return fallback;
        const parsed = JSON.parse(raw);
        return {
            businesses: parsed.businesses?.length ? parsed.businesses : BUSINESSES,
            reviews: parsed.reviews ?? REVIEWS,
            favorites: parsed.favorites ?? [],
            impact: parsed.impact ?? [],
            visits: parsed.visits ?? [],
        };
    }
    catch {
        return fallback;
    }
}
let state = load();
function persist() {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(state));
    }
    catch {
        /* storage unavailable — session-only mode */
    }
    try {
        window.dispatchEvent(new CustomEvent("localloop:change"));
    }
    catch {
        /* non-DOM context */
    }
}
function resetDemoData() {
    state = { businesses: BUSINESSES, reviews: REVIEWS, favorites: [], impact: [], visits: [] };
    persist();
}
// ─── Read API ────────────────────────────────────────────────────────────────
const getDestination = () => DEST;
function getCategories() {
    return CATEGORIES;
}
function getApprovedBusinesses() {
    return state.businesses.filter((b) => b.status === "approved");
}
function businessesInCategory(list, categoryId) {
    return list.filter((b) => b.categoryId === categoryId || (b.alsoCategories ?? []).includes(categoryId));
}
function getAllBusinesses() {
    return state.businesses;
}
function getBusinessById(id) {
    return state.businesses.find((b) => b.id === id);
}
function getReviewsFor(businessId) {
    return state.reviews
        .filter((r) => r.businessId === businessId)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getAllReviews() {
    return [...state.reviews].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getRoutes() {
    return ROUTES;
}
function getRouteById(id) {
    return ROUTES.find((r) => r.id === id);
}
function getFavoriteIds() {
    return state.favorites.map((f) => f.businessId);
}
function getFavoriteBusinesses() {
    return getFavoriteIds()
        .map((id) => getBusinessById(id))
        .filter((b) => !!b);
}
function isFavorite(businessId) {
    return state.favorites.some((f) => f.businessId === businessId);
}
function getVisitedIds() {
    return [...state.visits];
}
function getImpactEvents() {
    return [...state.impact].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
function getImpactSummary() {
    const events = state.impact;
    const totalRM = events.reduce((s, e) => s + e.estimatedSpendRM, 0);
    const now = Date.now();
    const tripRM = events
        .filter((e) => now - new Date(e.createdAt).getTime() < 14 * 24 * 3600 * 1000)
        .reduce((s, e) => s + e.estimatedSpendRM, 0);
    return {
        businessesVisited: new Set(events.map((e) => e.businessId)).size,
        estimatedSpendRM: totalRM,
        thisTripRM: tripRM,
    };
}
// ─── Geo helpers ─────────────────────────────────────────────────────────────
function distanceKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function distanceFromCenter(b) {
    return distanceKm(DEST.center.lat, DEST.center.lng, b.latitude, b.longitude);
}
function formatDistance(km) {
    if (km < 1)
        return `${Math.round(km * 1000)} m away`;
    return `${km.toFixed(1)} km away`;
}
// ─── Open-now logic ──────────────────────────────────────────────────────────
function parseHourRange(range, now) {
    const m = range.trim().match(/^(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})$/);
    if (!m)
        return null;
    const start = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
    let end = parseInt(m[3], 10) * 60 + parseInt(m[4], 10);
    if (end <= start)
        end += 24 * 60; // past-midnight close
    const cur = now.getHours() * 60 + now.getMinutes();
    return { start, end, cur };
}
function isOpenNow(b, now = new Date()) {
    const today = b.hours[now.getDay()];
    if (!today) {
        // check yesterday's past-midnight hours
        const y = b.hours[(now.getDay() + 6) % 7];
        if (!y)
            return false;
        const span = parseHourRange(y, now);
        if (!span)
            return false;
        const curLate = now.getHours() * 60 + now.getMinutes() + 24 * 60;
        return curLate >= span.start && curLate <= span.end;
    }
    const span = parseHourRange(today, now);
    if (!span)
        return false;
    return span.cur >= span.start && span.cur <= span.end;
}
function hoursLabel(b) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days
        .map((d, i) => `${d} ${b.hours[i] ?? "Closed"}`)
        .join(" · ");
}
function priceLabel(level) {
    if (level <= 1)
        return "RM5–20";
    if (level === 2)
        return "RM20–60";
    return "RM60+";
}
// ─── Flavor guide (spice / sweet / sour / MSG) ───────────────────────────────
const FLAVOR_AXES = [
    { key: "spice", label: "Spiciness", icon: "🌶️", max: 3, words: ["No heat", "Gentle warmth", "Medium heat", "Very hot"] },
    { key: "sweet", label: "Sweetness", icon: "🍬", max: 3, words: ["Not sweet", "Lightly sweet", "Sweet", "Very sweet"] },
    { key: "sour", label: "Sour tempo", icon: "🍋", max: 3, words: ["No tang", "Hint of tang", "Tangy", "Very sour"] },
    { key: "msg", label: "MSG strength", icon: "🧂", max: 3, words: ["None added", "A little", "Seasoned", "Heavy seasoning"] },
];
function flavorWord(axis, level) {
    const a = FLAVOR_AXES[axis];
    return a.words[Math.max(0, Math.min(3, level))];
}
function flavorWordByKey(key, level) {
    const idx = FLAVOR_AXES.findIndex((a) => a.key === key);
    return flavorWord(idx, level);
}
function hasFlavorGuide(b) {
    return !!(b.flavorProfile || (b.menu && b.menu.length > 0));
}
/** Average flavor levels across a list (used by the assistant + list views). */
function avgFlavor(list) {
    const acc = { spice: { s: 0, n: 0 }, sweet: { s: 0, n: 0 }, sour: { s: 0, n: 0 }, msg: { s: 0, n: 0 } };
    for (const b of list) {
        const fp = b.flavorProfile;
        if (!fp)
            continue;
        for (const k of ["spice", "sweet", "sour", "msg"]) {
            acc[k].s += fp[k];
            acc[k].n += 1;
        }
    }
    const out = {};
    for (const k of ["spice", "sweet", "sour", "msg"]) {
        out[k] = acc[k].n ? Math.round((acc[k].s / acc[k].n) * 10) / 10 : 0;
    }
    return out;
}
function maxFlavor(list) {
    const out = { spice: 0, sweet: 0, sour: 0, msg: 0 };
    for (const b of list) {
        const fp = b.flavorProfile;
        if (!fp)
            continue;
        for (const k of ["spice", "sweet", "sour", "msg"])
            out[k] = Math.max(out[k], fp[k]);
    }
    return out;
}
/** True if every flavor axis is ≤ gentle (1). Used for the "gentle flavors" filter. */
function isGentleFlavors(b) {
    const fp = b.flavorProfile;
    if (!fp)
        return false;
    return fp.spice <= 1 && fp.sweet <= 1 && fp.sour <= 1 && fp.msg <= 1;
}
/** True if the place offers at least one menu item with all axes ≤ 1. */
function hasGentleOption(b) {
    if (b.menu && b.menu.some((m) => m.spice <= 1 && m.sweet <= 1 && m.sour <= 1 && m.msg <= 1))
        return true;
    return isGentleFlavors(b);
}
function flavorSummaryLine(b) {
    const fp = b.flavorProfile;
    if (!fp)
        return "";
    const parts = [];
    parts.push(fp.spice >= 2 ? `spice ${fp.spice}/3` : "mild-friendly");
    if (fp.sour >= 2)
        parts.push("tangy");
    if (fp.sweet >= 3)
        parts.push("very sweet");
    if (fp.msg >= 2)
        parts.push("seasoned");
    if (fp.msg === 0)
        parts.push("no MSG");
    return parts.join(" · ");
}
function rankBusinesses(list, sort, ctx = {}) {
    let items = [...list];
    if (ctx.requireOpen)
        items = items.filter((b) => isOpenNow(b));
    const dist = (b) => ctx.userLat != null && ctx.userLng != null
        ? distanceKm(ctx.userLat, ctx.userLng, b.latitude, b.longitude)
        : distanceFromCenter(b);
    switch (sort) {
        case "distance":
            return items.sort((a, b) => dist(a) - dist(b));
        case "score":
            return items.sort((a, b) => b.localScore - a.localScore);
        case "rating":
            return items.sort((a, b) => b.ratingAvg - a.ratingAvg || b.ratingCount - a.ratingCount);
        case "open":
            return items.sort((a, b) => Number(isOpenNow(b)) - Number(isOpenNow(a)) || b.localScore - a.localScore);
        case "recommended":
        default: {
            // MVP ranking formula:
            // 40% local score, 20% distance, 15% rating, 10% category relevance,
            // 10% open status, 5% popularity — normalized to 0–1.
            const maxDist = Math.max(...items.map(dist), 0.001);
            const scored = items.map((b) => {
                const localScore = b.localScore / 100;
                const proximity = 1 - dist(b) / maxDist;
                const rating = b.ratingCount > 0 ? b.ratingAvg / 5 : 0.35;
                const relevance = !ctx.categorySlug || b.categoryId.includes(ctx.categorySlug) ? 1 : 0.4;
                const open = isOpenNow(b) ? 1 : 0;
                const popularity = Math.min(b.ratingCount / 100, 1);
                return { b, rank: 0.4 * localScore + 0.2 * proximity + 0.15 * rating + 0.1 * relevance + 0.1 * open + 0.05 * popularity };
            });
            return scored.sort((x, y) => y.rank - x.rank).map((s) => s.b);
        }
    }
}
// ─── Write API (tourist) ─────────────────────────────────────────────────────
function toggleFavorite(businessId) {
    if (isFavorite(businessId)) {
        state.favorites = state.favorites.filter((f) => f.businessId !== businessId);
        persist();
        return false;
    }
    state.favorites.push({ businessId, createdAt: new Date().toISOString() });
    persist();
    return true;
}
function addReview(businessId, rating, text, visitedDate) {
    const review = {
        id: `rev-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        businessId,
        author: "Guest",
        rating,
        text: text.trim(),
        visitedDate,
        verifiedVisit: state.visits.includes(businessId),
        createdAt: new Date().toISOString(),
    };
    state.reviews.push(review);
    // recompute business rating aggregate
    const b = getBusinessById(businessId);
    if (b) {
        const all = state.reviews.filter((r) => r.businessId === businessId);
        b.ratingAvg = Math.round((all.reduce((s, r) => s + r.rating, 0) / all.length) * 10) / 10;
        b.ratingCount = all.length;
    }
    persist();
    return review;
}
function markVisited(businessId) {
    const b = getBusinessById(businessId);
    if (!b)
        return;
    if (!state.visits.includes(businessId))
        state.visits.push(businessId);
    const already = state.impact.some((e) => e.businessId === businessId);
    if (!already) {
        state.impact.push({
            id: `imp-${Date.now()}`,
            businessId,
            estimatedSpendRM: PRICE_ESTIMATES[b.priceLevel] ?? 25,
            createdAt: new Date().toISOString(),
        });
    }
    persist();
}
function hasMarkedVisited(businessId) {
    return state.visits.includes(businessId);
}
// ─── Write API (business + community submissions) ────────────────────────────
function submitBusiness(p) {
    const empCount = parseInt(p.localEmployees || "0", 10) || 0;
    const yrs = parseInt(p.yearsOperating || "0", 10) || 0;
    const inputs = {
        ownership: p.locallyOwned ? 30 : 10,
        community: Math.min(20, 8 + Math.min(empCount, 5) + (yrs >= 10 ? 4 : 0)),
        localProducts: 14,
        independence: 15,
        sustainability: 5,
        reviews: 0,
    };
    const b = {
        id: `biz-sub-${Date.now()}`,
        slug: p.businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new-business",
        name: p.businessName.trim(),
        description: p.description.trim(),
        categoryId: p.category,
        address: p.address.trim(),
        latitude: p.latitude ? parseFloat(p.latitude) : DEST.center.lat,
        longitude: p.longitude ? parseFloat(p.longitude) : DEST.center.lng,
        phone: p.phone,
        whatsapp: p.whatsapp,
        website: "",
        priceLevel: (parseInt(p.priceLevel, 10) || 1),
        ownershipType: p.ownershipType,
        locallyOwned: p.locallyOwned,
        locallyOperated: p.locallyOperated,
        verificationStatus: "COMMUNITY_SUBMITTED",
        verificationNote: "Submitted via onboarding form; not yet verified. Local status: Unverified.",
        localScore: computeScore(inputs),
        scoreInputs: inputs,
        yearsOperating: parseInt(p.yearsOperating, 10) || 0,
        localEmployeeCount: parseInt(p.localEmployees, 10) || 0,
        story: "",
        whyVisit: "",
        whatsLocal: p.products,
        status: "pending",
        ratingAvg: 0,
        ratingCount: 0,
        isDemo: false,
        photos: [],
        hours: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
        menu: (p.menu ?? []).map((m, i) => ({ id: `m-sub-${Date.now()}-${i}`, ...m })),
        flavorProfile: p.menu && p.menu.length ? avgFlavorFromMenuItems(p.menu) : undefined,
        alsoCategories: [],
        createdAt: new Date().toISOString(),
    };
    state.businesses.push(b);
    persist();
    return b;
}
function adminAct(action) {
    const b = getBusinessById(action.id);
    if (!b)
        return;
    switch (action.type) {
        case "approve":
            b.status = "approved";
            break;
        case "reject":
            b.status = "rejected";
            break;
        case "verify":
            b.verificationStatus = action.status;
            b.verificationNote =
                action.status === "ADMIN_VERIFIED"
                    ? "Verified by LocalLoop admin review."
                    : "Verified by the business owner with supporting documents.";
            break;
        case "setOwnership":
            b.ownershipType = action.ownershipType;
            break;
        case "editScore":
            b.scoreInputs = { ...b.scoreInputs, ...action.inputs };
            b.localScore = computeScore(b.scoreInputs);
            break;
    }
    persist();
}
function deleteReview(reviewId) {
    state.reviews = state.reviews.filter((r) => r.id !== reviewId);
    persist();
}
function avgFlavorFromMenuItems(items) {
    if (!items.length)
        return undefined;
    const avg = (f) => Math.round((items.reduce((s, m) => s + f(m), 0) / items.length) * 10) / 10;
    return { spice: avg((m) => m.spice), sweet: avg((m) => m.sweet), sour: avg((m) => m.sour), msg: avg((m) => m.msg) };
}


__exports["resetDemoData"] = resetDemoData;
__exports["getDestination"] = getDestination;
__exports["getCategories"] = getCategories;
__exports["getApprovedBusinesses"] = getApprovedBusinesses;
__exports["businessesInCategory"] = businessesInCategory;
__exports["getAllBusinesses"] = getAllBusinesses;
__exports["getBusinessById"] = getBusinessById;
__exports["getReviewsFor"] = getReviewsFor;
__exports["getAllReviews"] = getAllReviews;
__exports["getRoutes"] = getRoutes;
__exports["getRouteById"] = getRouteById;
__exports["getFavoriteIds"] = getFavoriteIds;
__exports["getFavoriteBusinesses"] = getFavoriteBusinesses;
__exports["isFavorite"] = isFavorite;
__exports["getVisitedIds"] = getVisitedIds;
__exports["getImpactEvents"] = getImpactEvents;
__exports["getImpactSummary"] = getImpactSummary;
__exports["distanceKm"] = distanceKm;
__exports["distanceFromCenter"] = distanceFromCenter;
__exports["formatDistance"] = formatDistance;
__exports["isOpenNow"] = isOpenNow;
__exports["hoursLabel"] = hoursLabel;
__exports["priceLabel"] = priceLabel;
__exports["FLAVOR_AXES"] = FLAVOR_AXES;
__exports["flavorWord"] = flavorWord;
__exports["flavorWordByKey"] = flavorWordByKey;
__exports["hasFlavorGuide"] = hasFlavorGuide;
__exports["avgFlavor"] = avgFlavor;
__exports["maxFlavor"] = maxFlavor;
__exports["isGentleFlavors"] = isGentleFlavors;
__exports["hasGentleOption"] = hasGentleOption;
__exports["flavorSummaryLine"] = flavorSummaryLine;
__exports["rankBusinesses"] = rankBusinesses;
__exports["toggleFavorite"] = toggleFavorite;
__exports["addReview"] = addReview;
__exports["markVisited"] = markVisited;
__exports["hasMarkedVisited"] = hasMarkedVisited;
__exports["submitBusiness"] = submitBusiness;
__exports["adminAct"] = adminAct;
__exports["deleteReview"] = deleteReview;
return __exports;
} };
__modules[".tsbuild/data/seed.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m__tsbuild_lib_types_js = __req(".tsbuild/lib/types.js");
const computeScore = m__tsbuild_lib_types_js.computeScore;

const CATEGORIES = [
    { id: "cat-food", slug: "food", label: "Local Food", emoji: "🍜", intent: "eat" },
    { id: "cat-shop", slug: "shop", label: "Shops & Crafts", emoji: "🎨", intent: "shop" },
    { id: "cat-stay", slug: "stay", label: "Homestays", emoji: "🏡", intent: "stay" },
    { id: "cat-experience", slug: "experience", label: "Experiences", emoji: "🧑‍🌾", intent: "experience" },
    { id: "cat-explore", slug: "explore", label: "Attractions", emoji: "🚶", intent: "explore" },
    { id: "cat-buy", slug: "buy", label: "Buy Local", emoji: "🎁", intent: "buy" },
];
const DEST = {
    name: "Riverstone",
    center: { lat: 2.042800, lng: 102.568500 },
    note: "A fictional riverside town used to demonstrate LocalLoop.",
};
const H = {
    all: { 0: "9:00–18:00", 1: "9:00–18:00", 2: "9:00–18:00", 3: "9:00–18:00", 4: "9:00–18:00", 5: "9:00–18:00", 6: "9:00–18:00" },
    notMon: { 0: "9:00–18:00", 1: null, 2: "9:00–18:00", 3: "9:00–18:00", 4: "9:00–18:00", 5: "9:00–18:00", 6: "9:00–18:00" },
    eve: { 0: "17:00–23:00", 1: "17:00–23:00", 2: "17:00–23:00", 3: "17:00–23:00", 4: "17:00–23:00", 5: "17:00–23:30", 6: "17:00–23:30" },
    morn: { 0: "6:30–14:00", 1: "6:30–14:00", 2: "6:30–14:00", 3: "6:30–14:00", 4: "6:30–14:00", 5: "6:30–14:00", 6: "6:30–14:00" },
};
function biz(p) {
    const inputs = p.scoreInputs ?? { ownership: 30, community: 20, localProducts: 20, independence: 15, sustainability: 10, reviews: 5 };
    const score = p.localScore ?? computeScore(inputs);
    return {
        slug: p.id.replace(/^biz-/, ""),
        description: "",
        address: "Riverstone",
        phone: "+60 6-000 0000",
        whatsapp: "+60 6-000 0000",
        website: "",
        priceLevel: 1,
        ownershipType: "locally_owned",
        locallyOwned: true,
        locallyOperated: true,
        verificationStatus: "ADMIN_VERIFIED",
        yearsOperating: 10,
        localEmployeeCount: 3,
        story: "",
        whyVisit: "",
        whatsLocal: "",
        status: "approved",
        ratingAvg: 4.5,
        ratingCount: 12,
        isDemo: true,
        photos: [],
        hours: H.all,
        menu: [],
        flavorProfile: undefined,
        alsoCategories: [],
        createdAt: "2026-09-01T09:00:00Z",
        ...p,
        scoreInputs: inputs,
        localScore: score,
    };
}
const BUSINESSES = [
    // ── FOOD (10) ──
    biz({
        id: "biz-ahmei", name: "Ah Mei's Family Kitchen", categoryId: "cat-food",
        latitude: 2.04312, longitude: 102.56873,
        flavorProfile: { spice: 1, sweet: 1, sour: 1, msg: 1 },
        menu: [
            { id: "m-ahmei-1", name: "Herbal Noodle Soup", description: "The house broth, six hours simmered.", priceRM: 12, spice: 0, sweet: 1, sour: 0, msg: 0, tip: "The gentlest dish here — a safe first bowl for newcomers." },
            { id: "m-ahmei-2", name: "Riverstone Rice Set", description: "Rice, two sides, house chilli on the side.", priceRM: 15, spice: 1, sweet: 1, sour: 1, msg: 1, tip: "Ask for the chilli on the side and add it yourself." },
            { id: "m-ahmei-3", name: "Assam-Style Noodles", description: "Tamarind-sour broth with pineapple.", priceRM: 14, spice: 2, sweet: 1, sour: 3, msg: 1, tip: "Noticeably sour and moderately spicy — skip if it's your first day." },
        ],
        description: "Family-run riverfront kitchen serving slow-cooked Riverstone herbal noodle soup and rice sets.",
        story: "Ah Mei learned this broth from her grandmother, who sold noodles from a river jetty cart in the 1960s. Three generations later, the same family still runs the kitchen and employs five neighbours from the same street.",
        whyVisit: "The herbal broth simmers for six hours every morning — a recipe you won't find in any mall food court.",
        whatsLocal: "House-made chilli paste, herbs from the family's backyard plot, noodles from the supplier two streets away.",
        priceLevel: 1, yearsOperating: 34, localEmployeeCount: 5,
        scoreInputs: { ownership: 30, community: 20, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        hours: H.morn, ratingAvg: 4.8, ratingCount: 64,
        verificationStatus: "ADMIN_VERIFIED", ownershipType: "family_owned",
    }),
    biz({
        id: "biz-riverjetty", name: "River Jetty Kopitiam", categoryId: "cat-food",
        latitude: 2.04221, longitude: 102.56961,
        flavorProfile: { spice: 1, sweet: 2, sour: 1, msg: 1 },
        menu: [
            { id: "m-rj-1", name: "White Coffee", description: "The house cup since 1979.", priceRM: 4, spice: 0, sweet: 2, sour: 0, msg: 0 },
            { id: "m-rj-2", name: "Kaya Toast Set", description: "Coconut jam, butter, soft eggs.", priceRM: 9, spice: 0, sweet: 2, sour: 0, msg: 0, tip: "Sweet and safe — the classic newcomer order." },
            { id: "m-rj-3", name: "Nasi Lemak", description: "Sambal on the side.", priceRM: 8, spice: 2, sweet: 1, sour: 0, msg: 1 },
        ],
        description: "Old-school coffee shop by the jetty — kaya toast, white coffee and gossip since 1979.",
        story: "Started by the Tan family when the jetty was still the town's main landing point. The same wooden chairs have been here for four decades.",
        whyVisit: "Riverside morning coffee exactly the way the town has drunk it for two generations.",
        whatsLocal: "Coffee beans roasted in Riverstone, kaya made weekly in the back kitchen.",
        priceLevel: 1, yearsOperating: 47, localEmployeeCount: 4,
        scoreInputs: { ownership: 30, community: 20, localProducts: 19, independence: 15, sustainability: 8, reviews: 5 },
        ratingAvg: 4.7, ratingCount: 58,
    }),
    biz({
        id: "biz-mamasatay", name: "Mama Suzie's Satay Stall", categoryId: "cat-food",
        latitude: 2.04405, longitude: 102.56781,
        flavorProfile: { spice: 2, sweet: 2, sour: 0, msg: 2 },
        menu: [
            { id: "m-su-1", name: "Chicken Satay (10 sticks)", description: "Charcoal-grilled, house peanut sauce.", priceRM: 18, spice: 1, sweet: 2, sour: 0, msg: 2, tip: "Peanut sauce is sweet-first, heat arrives later." },
            { id: "m-su-2", name: "Beef Satay (10 sticks)", description: "Darker marinade, deeper smoke.", priceRM: 20, spice: 1, sweet: 2, sour: 0, msg: 2 },
            { id: "m-su-3", name: "Tofu Satay (8 sticks)", description: "Crisp outside, soft inside.", priceRM: 12, spice: 1, sweet: 1, sour: 0, msg: 1, tip: "Mildest option — good for kids." },
        ],
        description: "Evening satay grill run by a mother-and-son team; beef, chicken and tofu skewers over charcoal.",
        story: "Suzie started with ten skewers and a bicycle grill in 1998. Her son now manages the charcoal line while she still hand-cuts every skewer.",
        whyVisit: "Satay by the river at dusk, cooked by the person who invented the house peanut sauce.",
        whatsLocal: "Peanuts and spices from the Riverstone wet market two lanes away.",
        priceLevel: 1, yearsOperating: 28, localEmployeeCount: 3,
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        hours: H.eve, ratingAvg: 4.9, ratingCount: 71,
    }),
    biz({
        id: "biz-tamannoodle", name: "Taman Laut Fish Head Noodles", categoryId: "cat-food",
        latitude: 2.04170, longitude: 102.57012,
        flavorProfile: { spice: 1, sweet: 1, sour: 2, msg: 2 },
        menu: [
            { id: "m-tl-1", name: "Milky Fish Head Soup", description: "The classic — ginger, tomato, salted veg.", priceRM: 24, spice: 0, sweet: 1, sour: 2, msg: 2, tip: "Sour from pickled greens, not chilli." },
            { id: "m-tl-2", name: "Sliced Fish Bee Hoon", description: "Gentler version for first-timers.", priceRM: 18, spice: 0, sweet: 1, sour: 1, msg: 1 },
        ],
        description: "Humble stall famous for milky fish head noodle soup using the morning's river catch.",
        story: "Uncle Dev buys directly from the Riverstone fishermen's cooperative at the 6 a.m. auction — nothing frozen, nothing imported.",
        whyVisit: "The clearest expression of Riverstone's river-to-table cooking.",
        whatsLocal: "Fish from the town's own fishermen's co-op; lime and ginger from valley farms.",
        priceLevel: 2, yearsOperating: 19, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 18, localProducts: 20, independence: 15, sustainability: 9, reviews: 4 },
        hours: H.morn, ratingAvg: 4.6, ratingCount: 43,
    }),
    biz({
        id: "biz-nyonya", name: "Rumah Nyonya Little Kitchen", categoryId: "cat-food",
        latitude: 2.04390, longitude: 102.56990,
        flavorProfile: { spice: 3, sweet: 2, sour: 2, msg: 1 },
        menu: [
            { id: "m-ny-1", name: "Nyonya Set Lunch", description: "Four dishes + rice, changes daily.", priceRM: 28, spice: 2, sweet: 2, sour: 2, msg: 1, tip: "Balanced intro to nyonya flavors." },
            { id: "m-ny-2", name: "Sambal Petai Rice", description: "Rosa's family sambal, stinky beans.", priceRM: 22, spice: 3, sweet: 1, sour: 1, msg: 1, tip: "The spiciest plate in town — order iced tea." },
            { id: "m-ny-3", name: "Pineapple Pajeri", description: "Sweet-sour curried pineapple.", priceRM: 12, spice: 1, sweet: 3, sour: 2, msg: 0, tip: "No chilli heat; very sweet and tangy." },
        ],
        description: "Eight-table nyonya kitchen inside a restored shophouse; set lunches only.",
        story: "Rosa reopened her grandmother's recipe book during the quiet years and rebuilt the family's nyonya menu dish by dish.",
        whyVisit: "Heritage recipes cooked in a heritage building, with the family's own sambal belacan.",
        whatsLocal: "All rempah pounded in-house; pussy willow leaves from the temple street.",
        priceLevel: 2, yearsOperating: 12, localEmployeeCount: 4,
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 8, reviews: 4 },
        hours: H.notMon, ratingAvg: 4.7, ratingCount: 39,
    }),
    biz({
        id: "biz-rotibeng", name: "Roti Beng Sunrise Stall", categoryId: "cat-food",
        latitude: 2.04250, longitude: 102.56740,
        flavorProfile: { spice: 2, sweet: 1, sour: 1, msg: 1 },
        menu: [
            { id: "m-rb-1", name: "Roti Canai (2 pcs)", description: "Flaky flatbread, dhal dip.", priceRM: 5, spice: 0, sweet: 1, sour: 1, msg: 0, tip: "Dhal is mild; the sambal on request is not." },
            { id: "m-rb-2", name: "Roti Canai Sambal", description: "With spicy sambal on the side.", priceRM: 7, spice: 3, sweet: 1, sour: 1, msg: 1 },
            { id: "m-rb-3", name: "Teh Tarik", description: "Pulled milk tea.", priceRM: 3, spice: 0, sweet: 3, sour: 0, msg: 0 },
        ],
        description: "Champions of the 5 a.m. crowd: flaky roti canai and dhal before the town wakes.",
        story: "Beng has flipped roti at this corner for 22 years; his brother runs the tea counter and knows the regulars' orders by heart.",
        whyVisit: "Breakfast like a local, at hours locals actually eat.",
        whatsLocal: "Flour milled in the state, dhal from the wet market grocers.",
        priceLevel: 1, yearsOperating: 22, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 20, localProducts: 18, independence: 15, sustainability: 8, reviews: 5 },
        hours: H.morn, ratingAvg: 4.5, ratingCount: 88,
    }),
    biz({
        id: "biz-duriankak", name: "Kak Lim's Cendol & Durian", categoryId: "cat-food",
        latitude: 2.04330, longitude: 102.57080,
        flavorProfile: { spice: 0, sweet: 3, sour: 1, msg: 0 },
        menu: [
            { id: "m-kl-1", name: "Classic Cendol", description: "Shaved ice, coconut milk, gula melaka.", priceRM: 8, spice: 0, sweet: 3, sour: 1, msg: 0, tip: "Palm sugar is intensely sweet — share one first." },
            { id: "m-kl-2", name: "Durian Cendol (seasonal)", description: "With local durian flesh.", priceRM: 16, spice: 0, sweet: 3, sour: 1, msg: 0 },
        ],
        description: "Afternoon cendol cart by the clock tower, durian season special.",
        story: "Kak Lim's gula melaka comes from her uncle's palm grove upriver — she drives out to collect it herself each month.",
        whyVisit: "The sweetest possible reason to stop under the clock tower shade.",
        whatsLocal: "Gula melaka from an upriver family grove, coconut milk pressed daily.",
        priceLevel: 1, yearsOperating: 15, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 18, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        hours: { 0: "12:00–18:00", 1: "12:00–18:00", 2: "12:00–18:00", 3: "12:00–18:00", 4: "12:00–18:00", 5: "12:00–18:00", 6: "12:00–18:00" }, ratingAvg: 4.8, ratingCount: 52,
    }),
    biz({
        id: "biz-steamboat", name: "Lantern Lane Steamboat", categoryId: "cat-food",
        latitude: 2.04100, longitude: 102.56890,
        flavorProfile: { spice: 1, sweet: 1, sour: 0, msg: 2 },
        menu: [
            { id: "m-ll-1", name: "Clear Broth Pot (2 pax)", description: "Chicken & cabbage, gentle.", priceRM: 45, spice: 0, sweet: 1, sour: 0, msg: 1, tip: "Ask for the chilli dip separately." },
            { id: "m-ll-2", name: "Mala Half-Pot", description: "Sichuan-style, numbing heat.", priceRM: 55, spice: 3, sweet: 0, sour: 0, msg: 2, tip: "Genuinely hot — grandmother Ong will warn you too." },
        ],
        description: "Family courtyard steamboat in a lantern-lit lane; reservation recommended on weekends.",
        story: "The Ong family turned their courtyard into a 12-table dining space in 2016. Grandmother Ong still supervises the soup bases.",
        whyVisit: "Slow dinner culture — one pot, three generations at the stove.",
        whatsLocal: "River prawns from the co-op, vegetables from Panorama Valley farms.",
        priceLevel: 2, yearsOperating: 10, localEmployeeCount: 6,
        scoreInputs: { ownership: 30, community: 19, localProducts: 18, independence: 15, sustainability: 8, reviews: 4 },
        hours: H.eve, ratingAvg: 4.6, ratingCount: 47,
    }),
    biz({
        id: "biz-bakeshop", name: "Harbour Road Bakehouse", categoryId: "cat-food",
        latitude: 2.04500, longitude: 102.56700,
        flavorProfile: { spice: 0, sweet: 2, sour: 1, msg: 0 },
        menu: [
            { id: "m-hb-1", name: "Coconut Buns", description: "Warm from the oven by 8 a.m.", priceRM: 4, spice: 0, sweet: 2, sour: 0, msg: 0 },
            { id: "m-hb-2", name: "Sourdough Loaf", description: "Naturally leavened, tangy.", priceRM: 14, spice: 0, sweet: 0, sour: 2, msg: 0, tip: "Noticeably tangy — the 'sour tempo' is the point." },
        ],
        description: "Micro-bakery above the old harbour office; sourdough and coconut buns till sold out.",
        story: "A former merchant-marine cook came home and started baking with Riverstone coconut and valley wheat blends.",
        whyVisit: "Warm buns by 8 a.m.; when they're gone, they're gone.",
        whatsLocal: "Fresh coconut from the town market, pandan from the bakery's own planter boxes.",
        priceLevel: 1, yearsOperating: 6, localEmployeeCount: 3,
        scoreInputs: { ownership: 30, community: 17, localProducts: 19, independence: 15, sustainability: 9, reviews: 5 },
        hours: H.morn, ratingAvg: 4.7, ratingCount: 31,
    }),
    biz({
        id: "biz-nightmarket", name: "Riverstone Riverside Food Stalls", categoryId: "cat-food",
        latitude: 2.04260, longitude: 102.56990,
        flavorProfile: { spice: 2, sweet: 2, sour: 2, msg: 2 },
        menu: [
            { id: "m-nm-1", name: "Assam Laksa", description: "Stall 7 — tamarind & mackerel broth.", priceRM: 10, spice: 2, sweet: 1, sour: 3, msg: 2, tip: "The sourest thing in Riverstone." },
            { id: "m-nm-2", name: "Char Kway Teow", description: "Stall 3 — wok-hei noodles.", priceRM: 9, spice: 1, sweet: 2, sour: 0, msg: 2 },
            { id: "m-nm-3", name: "Grilled Fish", description: "Stall 11 — banana leaf, chilli-lime.", priceRM: 22, spice: 2, sweet: 1, sour: 2, msg: 1 },
        ],
        description: "Cooperative night stall row with 14 independent hawkers — one association, zero franchises.",
        story: "The hawkers' association collectively runs the riverside row; every stall is an independent family business.",
        whyVisit: "Fourteen local kitchens in one riverside row — a showcase of the town's whole food scene.",
        whatsLocal: "Every stall is independently family-run; produce sourced at the town market.",
        priceLevel: 1, yearsOperating: 30, localEmployeeCount: 14,
        ownershipType: "cooperative",
        scoreInputs: { ownership: 30, community: 20, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        hours: H.eve, ratingAvg: 4.5, ratingCount: 96,
    }),
    // ── SHOPS (5) ──
    biz({
        id: "biz-basket", name: "Lim Basket Weaving House", categoryId: "cat-shop",
        latitude: 2.04420, longitude: 102.56820,
        alsoCategories: ["cat-buy"],
        description: "Third-generation rattan and pandan basket workshop; watch weavers at work.",
        story: "Grandfather Lim wove fish traps for the jetty fleet; the family now weaves baskets, bags and lamp shades in the same shopfront.",
        whyVisit: "Buy directly from the hands that wove it — and see it being made.",
        whatsLocal: "Rattan cured in-house; pandan leaves from valley growers.",
        priceLevel: 2, yearsOperating: 41, localEmployeeCount: 5,
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 10, reviews: 4 },
        ratingAvg: 4.8, ratingCount: 36,
    }),
    biz({
        id: "biz-batik", name: "Seri Palembang Batik Studio", categoryId: "cat-shop",
        latitude: 2.04180, longitude: 102.57060,
        alsoCategories: ["cat-buy"],
        description: "Hand-drawn batik studio with resident artists; short classes on request.",
        story: "Two Riverstone art teachers opened the studio to keep hand-drawn batik alive in the town.",
        whyVisit: "Every metre of cloth is drawn by a resident artist, not printed in bulk.",
        whatsLocal: "Original designs by local artists; wax and dyes prepared on site.",
        priceLevel: 2, yearsOperating: 9, localEmployeeCount: 4,
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 9, reviews: 4 },
        ratingAvg: 4.7, ratingCount: 28,
    }),
    biz({
        id: "biz-antique", name: "Chong's Curiosity Corner", categoryId: "cat-shop",
        latitude: 2.04300, longitude: 102.56790,
        description: "Second-hand books, jetty relics and vinyl in a crowded, wonderful shophouse.",
        story: "Mr Chong has collected Riverstone's forgotten objects for five decades — half the shop is local history you can hold.",
        whyVisit: "A museum that lets you buy the exhibits.",
        whatsLocal: "Photographs, maps and objects all from Riverstone families.",
        priceLevel: 1, yearsOperating: 35, localEmployeeCount: 1,
        scoreInputs: { ownership: 30, community: 20, localProducts: 18, independence: 15, sustainability: 10, reviews: 4 },
        hours: H.notMon, ratingAvg: 4.6, ratingCount: 22,
    }),
    biz({
        id: "biz-honey", name: "Valley Gold Honey Shop", categoryId: "cat-shop",
        latitude: 2.04080, longitude: 102.57010,
        alsoCategories: ["cat-buy"],
        description: "Family honey brand from the Panorama Valley hives; tastings daily.",
        story: "The Ali family keeps 200 hives in the valley and bottles everything in the shop's back room.",
        whyVisit: "Taste single-origin honeys you'll only find in this valley.",
        whatsLocal: "Honey from the family's own hives, beeswax candles made on site.",
        priceLevel: 2, yearsOperating: 14, localEmployeeCount: 3,
        scoreInputs: { ownership: 30, community: 18, localProducts: 20, independence: 15, sustainability: 10, reviews: 4 },
        ratingAvg: 4.8, ratingCount: 33,
    }),
    biz({
        id: "biz-grocer", name: "Sungai Trading General Store", categoryId: "cat-shop",
        latitude: 2.04240, longitude: 102.56810,
        alsoCategories: ["cat-buy"],
        menu: [
            { id: "m-sg-1", name: "Valley Honey (500g)", description: "From Valley Gold's hives.", priceRM: 32, spice: 0, sweet: 3, sour: 0, msg: 0 },
            { id: "m-sg-2", name: "Local Snack Box", description: "Six local treats, labelled by heat.", priceRM: 25, spice: 1, sweet: 3, sour: 1, msg: 1, tip: "Each snack labelled mild/medium/hot." },
        ],
        flavorProfile: { spice: 1, sweet: 3, sour: 1, msg: 1 },
        description: "Old general store stocking valley produce, snacks and household goods since 1985.",
        story: "Three generations of the Lim family have stocked these shelves; the neighbourhood's noticeboard is by the door.",
        whyVisit: "The town's pantry — and the best place to ask what's in season.",
        whatsLocal: "Valley produce, local kuih delivered fresh each morning.",
        priceLevel: 1, yearsOperating: 41, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 20, localProducts: 17, independence: 15, sustainability: 8, reviews: 5 },
        ratingAvg: 4.4, ratingCount: 19,
    }),
    // ── STAYS (5) ──
    biz({
        id: "biz-homestay-a", name: "Riverside Homestay (Ah Poh's House)", categoryId: "cat-stay",
        latitude: 2.04450, longitude: 102.56920,
        description: "Three-room homestay in a heritage house by the water; breakfast included.",
        story: "Ah Poh restored her grandparents' 1930s house room by room and hosts six guests at a time, maximum.",
        whyVisit: "Sleep in the town's history, hosted by the person who saved it.",
        whatsLocal: "Breakfast from the wet market; furniture from Chong's and Lim's up the street.",
        priceLevel: 2, yearsOperating: 8, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 20, localProducts: 18, independence: 15, sustainability: 9, reviews: 5 },
        ratingAvg: 4.9, ratingCount: 41,
    }),
    biz({
        id: "biz-homestay-b", name: "Orchard Lane Family Homestay", categoryId: "cat-stay",
        latitude: 2.04560, longitude: 102.56860,
        description: "Quiet homestay behind a mango orchard; family suites and long stays.",
        story: "The Rahman family converted their late-grandfather's orchard house; guests pick mangoes in season.",
        whyVisit: "A garden stay with actual mangoes, minutes from the clock tower.",
        whatsLocal: "Home-cooked dinners on request; all linens sewn in town.",
        priceLevel: 2, yearsOperating: 11, localEmployeeCount: 3,
        scoreInputs: { ownership: 30, community: 19, localProducts: 17, independence: 15, sustainability: 9, reviews: 4 },
        ratingAvg: 4.6, ratingCount: 27,
    }),
    biz({
        id: "biz-homestay-c", name: "Fisherman's Loft Riverstone", categoryId: "cat-stay",
        latitude: 2.04120, longitude: 102.57080,
        description: "Simple loft above the fishermen's co-op; sunrise over the water guaranteed.",
        story: "Co-op members rent out the loft to fund their safety-equipment fund — your stay supports the fleet.",
        whyVisit: "The most honest bed in town; every ringgit goes back to the fishing families.",
        whatsLocal: "Operated by the Riverstone fishermen's cooperative.",
        priceLevel: 1, yearsOperating: 5, localEmployeeCount: 1,
        ownershipType: "cooperative",
        scoreInputs: { ownership: 30, community: 20, localProducts: 16, independence: 15, sustainability: 10, reviews: 4 },
        ratingAvg: 4.5, ratingCount: 18,
    }),
    biz({
        id: "biz-homestay-d", name: "Paddy View Farmstay", categoryId: "cat-stay",
        latitude: 2.03900, longitude: 102.56650,
        description: "Small farmstay at the paddy edge, 15 minutes' walk from the old bridge.",
        story: "Farmer Wati hosts guests in rooms beside her family's fields; dinner is whatever the farm picked that day.",
        whyVisit: "Wake up to paddy mist and eat the farm's own harvest.",
        whatsLocal: "Produce from the farm; guided walks by Wati herself.",
        priceLevel: 2, yearsOperating: 7, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 18, localProducts: 20, independence: 15, sustainability: 10, reviews: 4 },
        ratingAvg: 4.7, ratingCount: 24,
    }),
    biz({
        id: "biz-homestay-e", name: "Clock Tower Guest Rooms", categoryId: "cat-stay",
        latitude: 2.04300, longitude: 102.57010,
        description: "Four no-fuss guest rooms above a bicycle shop in the town core.",
        story: "The Ling family rents out rooms above their shop; the bicycles downstairs are for guests.",
        whyVisit: "Cheapest local roof in the centre, with free bicycles.",
        whatsLocal: "Owned and run by the shop family downstairs.",
        priceLevel: 1, yearsOperating: 13, localEmployeeCount: 1,
        scoreInputs: { ownership: 30, community: 18, localProducts: 14, independence: 15, sustainability: 8, reviews: 4 },
        ratingAvg: 4.3, ratingCount: 30,
    }),
    // ── EXPERIENCES (5) ──
    biz({
        id: "biz-exp-cooking", name: "Ah Mei's Cooking Class", categoryId: "cat-experience",
        latitude: 2.04312, longitude: 102.56880,
        description: "Morning market tour + hands-on nyonya cooking class in the family kitchen.",
        story: "Run by the same family as Ah Mei's Family Kitchen — market first, stove second, lunch third.",
        whyVisit: "Learn three dishes and the story behind every ingredient.",
        whatsLocal: "Market visit with a resident cook; family recipes to take home.",
        priceLevel: 2, yearsOperating: 6, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        ratingAvg: 4.9, ratingCount: 35,
    }),
    biz({
        id: "biz-exp-river", name: "Riverstone River Safari (Co-op Boats)", categoryId: "cat-experience",
        latitude: 2.04210, longitude: 102.57030,
        description: "Fishermen-run boat trips: mangroves, eagles and fireflies at dusk.",
        story: "The fishermen's cooperative runs the boats between fishing shifts; guides grew up on this river.",
        whyVisit: "See the river through the eyes of the families who fish it.",
        whatsLocal: "Owned and operated by the fishermen's co-op.",
        priceLevel: 2, yearsOperating: 9, localEmployeeCount: 8,
        ownershipType: "cooperative",
        scoreInputs: { ownership: 30, community: 20, localProducts: 18, independence: 15, sustainability: 10, reviews: 5 },
        ratingAvg: 4.8, ratingCount: 44,
    }),
    biz({
        id: "biz-exp-farm", name: "Panorama Valley Farm Walk", categoryId: "cat-experience",
        latitude: 2.03850, longitude: 102.56550,
        description: "Guided farm walk and tasting across the valley's smallholder plots.",
        story: "Six farm families take turns hosting; the route changes with the planting calendar.",
        whyVisit: "Meet the growers who supply the town's kitchens.",
        whatsLocal: "Hosted by valley farming families; tastings from the plots you walk.",
        priceLevel: 1, yearsOperating: 4, localEmployeeCount: 6,
        ownershipType: "cooperative",
        scoreInputs: { ownership: 30, community: 19, localProducts: 20, independence: 15, sustainability: 10, reviews: 4 },
        ratingAvg: 4.6, ratingCount: 21,
    }),
    biz({
        id: "biz-exp-batik", name: "Batik Hand-Drawing Workshop", categoryId: "cat-experience",
        latitude: 2.04180, longitude: 102.57030,
        description: "Two-hour batik class inside Seri Palembang studio; take your piece home.",
        story: "Taught by the studio's resident artists — the same hands that draw the gallery pieces.",
        whyVisit: "Leave with cloth you drew yourself and a skill worth keeping.",
        whatsLocal: "Artists from Riverstone; wax pots warmed the traditional way.",
        priceLevel: 1, yearsOperating: 7, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 18, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        ratingAvg: 4.8, ratingCount: 26,
    }),
    biz({
        id: "biz-exp-bicycle", name: "Uncle Tan's Bicycle Heritage Ride", categoryId: "cat-experience",
        latitude: 2.04270, longitude: 102.56950,
        description: "Two-hour guided heritage loop by bicycle; stops at eight family landmarks.",
        story: "Uncle Tan, retired postman, has cycled every lane of Riverstone for 50 years and tells it like a letter.",
        whyVisit: "The best single orientation to the town — and its best storyteller.",
        whatsLocal: "One retired postman, one route, zero script.",
        priceLevel: 1, yearsOperating: 5, localEmployeeCount: 1,
        scoreInputs: { ownership: 30, community: 20, localProducts: 16, independence: 15, sustainability: 10, reviews: 5 },
        ratingAvg: 4.9, ratingCount: 38,
    }),
    // ── ATTRACTIONS (5) ──
    biz({
        id: "biz-attr-bridge", name: "Old Bridge Riverside Walk", categoryId: "cat-explore",
        latitude: 2.04150, longitude: 102.56950,
        description: "The 1949 iron bridge and its riverside promenade — the town's evening ritual.",
        story: "Maintained by the town council with a friends-of-the-river volunteer group.",
        whyVisit: "Sunset from the bridge is the local's own evening entertainment.",
        whatsLocal: "Free public space; riverside stalls nearby are all local.",
        priceLevel: 1, yearsOperating: 77, localEmployeeCount: 0,
        ownershipType: "unknown", locallyOwned: false, locallyOperated: true,
        verificationStatus: "COMMUNITY_VERIFIED",
        verificationNote: "Public space; community-verified landmark.",
        scoreInputs: { ownership: 10, community: 18, localProducts: 12, independence: 12, sustainability: 8, reviews: 5 },
        ratingAvg: 4.7, ratingCount: 63,
    }),
    biz({
        id: "biz-attr-market", name: "Riverstone Morning Market", categoryId: "cat-explore",
        latitude: 2.04350, longitude: 102.56760,
        description: "Daily wet market of 40+ independent stalls; peak 6–9 a.m.",
        story: "The market association of local growers and traders has run the square since the 1950s.",
        whyVisit: "The town's freshest hour — and where its kitchens shop.",
        whatsLocal: "Independent local traders and valley growers.",
        priceLevel: 1, yearsOperating: 70, localEmployeeCount: 40,
        ownershipType: "cooperative",
        scoreInputs: { ownership: 30, community: 20, localProducts: 20, independence: 15, sustainability: 9, reviews: 5 },
        hours: H.morn, ratingAvg: 4.6, ratingCount: 57,
    }),
    biz({
        id: "biz-attr-clocktower", name: "Clock Tower Square", categoryId: "cat-explore",
        latitude: 2.04330, longitude: 102.57060,
        description: "1936 clock tower, weekend stalls and the town's meeting point.",
        story: "Restored by public subscription — every plaque names a local family that chipped in.",
        whyVisit: "The centre of gravity for events and evening mamak stalls.",
        whatsLocal: "Free public square ringed by local shops.",
        priceLevel: 1, yearsOperating: 90, localEmployeeCount: 0,
        ownershipType: "unknown", locallyOwned: false, locallyOperated: true,
        verificationStatus: "COMMUNITY_VERIFIED",
        verificationNote: "Public space; community-verified landmark.",
        scoreInputs: { ownership: 10, community: 18, localProducts: 12, independence: 12, sustainability: 8, reviews: 4 },
        ratingAvg: 4.5, ratingCount: 48,
    }),
    biz({
        id: "biz-attr-temple", name: "Kuan Yin Riverside Temple", categoryId: "cat-explore",
        latitude: 2.04200, longitude: 102.56810,
        description: "Active riverside temple founded 1908; visitors welcome outside ceremony hours.",
        story: "Cared for by the founding families' descendants; the incense hall faces the water.",
        whyVisit: "A living heritage site, not a museum piece.",
        whatsLocal: "Maintained by the local temple association.",
        priceLevel: 1, yearsOperating: 118, localEmployeeCount: 0,
        ownershipType: "cooperative", locallyOwned: false,
        verificationStatus: "COMMUNITY_VERIFIED",
        verificationNote: "Community-verified heritage site.",
        scoreInputs: { ownership: 15, community: 20, localProducts: 12, independence: 12, sustainability: 8, reviews: 5 },
        hours: H.all, ratingAvg: 4.8, ratingCount: 52,
    }),
    biz({
        id: "biz-attr-gallery", name: "Riverstone Community Gallery", categoryId: "cat-explore",
        latitude: 2.04480, longitude: 102.56980,
        description: "Rotating exhibitions by Riverstone artists; free entry, donation-supported.",
        story: "Run by a volunteer arts collective in the old post office building.",
        whyVisit: "See the town through its own painters and photographers.",
        whatsLocal: "Artists and volunteers all from Riverstone.",
        priceLevel: 1, yearsOperating: 6, localEmployeeCount: 0,
        ownershipType: "cooperative", locallyOwned: false,
        verificationStatus: "COMMUNITY_VERIFIED",
        verificationNote: "Community-verified collective.",
        scoreInputs: { ownership: 20, community: 20, localProducts: 18, independence: 15, sustainability: 8, reviews: 4 },
        hours: H.notMon, ratingAvg: 4.6, ratingCount: 25,
    }),
    // ── PENDING SUBMISSIONS (for admin demo) ──
    biz({
        id: "biz-pending-1", name: "Wong's Coconut Ice Cream Cart", categoryId: "cat-food",
        latitude: 2.04480, longitude: 102.56730,
        menu: [
            { id: "m-wc-1", name: "Coconut Ice Cream", description: "With gula melaka drizzle.", priceRM: 6, spice: 0, sweet: 3, sour: 0, msg: 0 },
        ],
        flavorProfile: { spice: 0, sweet: 3, sour: 0, msg: 0 },
        description: "Weekend coconut ice cream cart by the bridge steps (submitted by owner — awaiting verification).",
        story: "Submitted via the business onboarding flow.",
        whyVisit: "", whatsLocal: "",
        status: "pending",
        verificationStatus: "COMMUNITY_SUBMITTED",
        verificationNote: "Owner-submitted; admin review required.",
        ratingAvg: 0, ratingCount: 0,
        yearsOperating: 2, localEmployeeCount: 2,
        scoreInputs: { ownership: 30, community: 12, localProducts: 16, independence: 15, sustainability: 6, reviews: 0 },
        createdAt: "2026-10-01T03:20:00Z",
    }),
    biz({
        id: "biz-pending-2", name: "Mek Nab's Kuih Lapis Corner", categoryId: "cat-food",
        latitude: 2.04290, longitude: 102.56840,
        menu: [
            { id: "m-mn-1", name: "Kuih Lapis (per piece)", description: "Steamed layered cake.", priceRM: 2, spice: 0, sweet: 2, sour: 0, msg: 0 },
        ],
        flavorProfile: { spice: 0, sweet: 2, sour: 0, msg: 0 },
        description: "Layered kuih steamed daily; submitted by a community recommendation.",
        story: "Submitted via the community recommendation flow.",
        whyVisit: "", whatsLocal: "",
        status: "pending",
        verificationStatus: "COMMUNITY_SUBMITTED",
        verificationNote: "Community-submitted; admin review required.",
        ratingAvg: 0, ratingCount: 0,
        yearsOperating: 9, localEmployeeCount: 1,
        scoreInputs: { ownership: 30, community: 15, localProducts: 18, independence: 15, sustainability: 7, reviews: 0 },
        createdAt: "2026-10-02T08:05:00Z",
    }),
];
const REVIEWS = [
    { id: "rev-1", businessId: "biz-ahmei", author: "Traveler_KL", rating: 5, text: "The herbal broth is worth the trip alone. Ah Mei's daughter explained every dish.", visitedDate: "2026-09-12", verifiedVisit: true, createdAt: "2026-09-12T10:00:00Z" },
    { id: "rev-2", businessId: "biz-ahmei", author: "foodie_jo", rating: 5, text: "Family run for real — three generations at the stove. Cash only, come early.", visitedDate: "2026-09-20", verifiedVisit: true, createdAt: "2026-09-20T09:30:00Z" },
    { id: "rev-3", businessId: "biz-ahmei", author: "WanderingTan", rating: 4, text: "Noodles great, limited seating at lunch. Go before noon.", visitedDate: "2026-09-25", verifiedVisit: false, createdAt: "2026-09-25T11:00:00Z" },
    { id: "rev-4", businessId: "biz-mamasatay", author: "satayhunter", rating: 5, text: "Best satay in Riverstone, and the peanut sauce is her own recipe.", visitedDate: "2026-09-18", verifiedVisit: true, createdAt: "2026-09-18T19:45:00Z" },
    { id: "rev-5", businessId: "biz-riverjetty", author: "coffee_cam", rating: 5, text: "White coffee by the jetty at 7 a.m. is the whole point of travel.", visitedDate: "2026-09-22", verifiedVisit: true, createdAt: "2026-09-22T08:10:00Z" },
    { id: "rev-6", businessId: "biz-basket", author: "craftfanatic", rating: 5, text: "Watched Mr Lim weave a basket in 40 minutes. Bought two.", visitedDate: "2026-09-15", verifiedVisit: true, createdAt: "2026-09-15T14:20:00Z" },
    { id: "rev-7", businessId: "biz-homestay-a", author: "quiet_stays", rating: 5, text: "Ah Poh's breakfast alone justifies the stay. Heritage house lovingly kept.", visitedDate: "2026-09-10", verifiedVisit: true, createdAt: "2026-09-10T12:00:00Z" },
    { id: "rev-8", businessId: "biz-exp-river", author: "birdwatcher88", rating: 5, text: "Fireflies at dusk, guides who grew up on the water. Perfect evening.", visitedDate: "2026-09-19", verifiedVisit: true, createdAt: "2026-09-19T21:00:00Z" },
    { id: "rev-9", businessId: "biz-exp-cooking", author: "cookbookcol", rating: 5, text: "Market tour then cooking with Ah Mei — the highlight of our trip.", visitedDate: "2026-09-21", verifiedVisit: true, createdAt: "2026-09-21T15:30:00Z" },
    { id: "rev-10", businessId: "biz-attr-bridge", author: "eveningwalker", rating: 4, text: "Lovely sunset spot; gets busy on weekends but that's part of the charm.", visitedDate: "2026-09-24", verifiedVisit: false, createdAt: "2026-09-24T18:40:00Z" },
];
const ROUTES = [
    {
        id: "route-heritage",
        name: "Riverstone Heritage Local Loop",
        description: "The classic Riverstone morning: breakfast, old-town coffee, craft shopping and a riverside finish.",
        distanceKm: 2.1, minutes: 55, estimatedSpendRM: 42,
        stops: [
            { order: 1, businessId: "biz-rotibeng", label: "Local breakfast", note: "Roti canai and dhal while the town wakes up." },
            { order: 2, businessId: "biz-riverjetty", label: "Traditional coffee shop", note: "White coffee by the jetty." },
            { order: 3, businessId: "biz-basket", label: "Independent craft shop", note: "Watch rattan baskets being woven." },
            { order: 4, businessId: "biz-duriankak", label: "Local dessert", note: "Cendol with upriver gula melaka." },
            { order: 5, businessId: "biz-attr-bridge", label: "Riverside walk", note: "Finish on the old iron bridge." },
        ],
    },
    {
        id: "route-evening",
        name: "Evening River & Skewers Loop",
        description: "An easy dusk walk: temple, riverside stalls, satay by the water, night market finish.",
        distanceKm: 1.6, minutes: 45, estimatedSpendRM: 35,
        stops: [
            { order: 1, businessId: "biz-attr-temple", label: "Riverside temple", note: "Visit outside ceremony hours." },
            { order: 2, businessId: "biz-mamasatay", label: "Satay by the river", note: "Charcoal skewers at dusk." },
            { order: 3, businessId: "biz-nightmarket", label: "Riverside food stalls", note: "Fourteen local kitchens in one row." },
        ],
    },
    {
        id: "route-maker",
        name: "Makers & Market Morning",
        description: "Meet the town's makers: wet market, batik studio, honey tasting and a gallery finish.",
        distanceKm: 2.4, minutes: 60, estimatedSpendRM: 55,
        stops: [
            { order: 1, businessId: "biz-attr-market", label: "Morning market", note: "Peak hours 6–9 a.m." },
            { order: 2, businessId: "biz-batik", label: "Batik studio", note: "Hand-drawn batik, resident artists." },
            { order: 3, businessId: "biz-honey", label: "Valley honey tasting", note: "Single-origin honeys from the valley." },
            { order: 4, businessId: "biz-attr-gallery", label: "Community gallery", note: "Rotating local exhibitions." },
        ],
    },
];
// Impact estimate per price level (clearly-labelled estimates, not transactions)
const PRICE_ESTIMATES = { 1: 15, 2: 35, 3: 80 };


__exports["CATEGORIES"] = CATEGORIES;
__exports["DEST"] = DEST;
__exports["BUSINESSES"] = BUSINESSES;
__exports["REVIEWS"] = REVIEWS;
__exports["ROUTES"] = ROUTES;
__exports["PRICE_ESTIMATES"] = PRICE_ESTIMATES;
return __exports;
} };
__modules[".tsbuild/lib/types.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
// ─── Domain types ────────────────────────────────────────────────────────────
// Mirrors the MVP schema (businesses, categories, reviews, routes, impact…)
// so the in-browser data layer can be swapped for Supabase later.
// ─── Scoring ─────────────────────────────────────────────────────────────────
const SCORE_FACTORS = [
    { key: "ownership", label: "Local ownership", max: 30, hint: "Is the owner a resident of the destination?" },
    { key: "community", label: "Community presence", max: 20, hint: "Local staff, local networks, years of service." },
    { key: "localProducts", label: "Local products & services", max: 20, hint: "Sourcing, ingredients, crafts made locally." },
    { key: "independence", label: "Independent business", max: 15, hint: "Not part of a national or foreign chain." },
    { key: "sustainability", label: "Sustainability & practices", max: 10, hint: "Community and environmental practices." },
    { key: "reviews", label: "Visitor reviews", max: 5, hint: "Consistent visitor feedback." },
];
function computeScore(b) {
    return (b.ownership + b.community + b.localProducts + b.independence + b.sustainability + b.reviews);
}


__exports["SCORE_FACTORS"] = SCORE_FACTORS;
__exports["computeScore"] = computeScore;
return __exports;
} };
__modules[".tsbuild/lib/map.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m__tsbuild_data_seed_js = __req(".tsbuild/data/seed.js");
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const DEST = m__tsbuild_data_seed_js.DEST;
const distanceKm = m__tsbuild_lib_store_js.distanceKm;
// ─── Canvas map renderer ─────────────────────────────────────────────────────
// Zero-dependency slippy-style map on <canvas>: tiles drawn procedurally
// (river, roads, blocks, greenery), businesses as tappable markers.
// No tile server, no external origin — works under strict CSP.


const TILE = 256;
function project(lat, lng, z) {
    const scale = TILE * 2 ** z;
    const x = ((lng + 180) / 360) * scale;
    const sinLat = Math.sin((lat * Math.PI) / 180);
    const y = (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * scale;
    return { x, y };
}
class MiniMap {
    constructor(canvas, businesses, opts) {
        this.z = 15;
        this.center = { ...DEST.center };
        this.points = [];
        this.selectedId = null;
        this.ctx = null;
        this.dragState = null;
        this.pinch = null;
        this.raf = 0;
        this.detached = false;
        this.cleanup = null;
        this.canvas = canvas;
        const ctx = canvas.getContext("2d");
        this.onSelect = opts.onSelect;
        if (!ctx) {
            // No 2D context (headless/odd env): stay inert but harmless.
            this.detached = true;
            this.setPoints(businesses);
            return;
        }
        this.ctx = ctx;
        if (opts.initialCenter)
            this.center = { ...opts.initialCenter };
        if (opts.initialZoom)
            this.z = opts.initialZoom;
        this.onSelect = opts.onSelect;
        this.setPoints(businesses);
        this.bindEvents();
        this.scheduleDraw();
    }
    setPoints(businesses) {
        const w = this.cssWidth(), h = this.cssHeight();
        this.points = businesses.map((b) => {
            const p = project(b.latitude, b.longitude, this.z);
            return { business: b, x: p.x, y: p.y };
        });
        void w;
        void h;
    }
    setSelected(id) {
        this.selectedId = id;
        this.scheduleDraw();
    }
    flyTo(lat, lng, z) {
        this.center = { lat, lng };
        if (z)
            this.z = z;
        this.scheduleDraw();
    }
    cssWidth() { return this.canvas.clientWidth || 360; }
    cssHeight() { return this.canvas.clientHeight || 420; }
    dpr() { return Math.min(window.devicePixelRatio || 1, 2); }
    resize() {
        if (!this.ctx)
            return;
        const d = this.dpr();
        const w = this.cssWidth(), h = this.cssHeight();
        if (this.canvas.width !== w * d || this.canvas.height !== h * d) {
            this.canvas.width = w * d;
            this.canvas.height = h * d;
        }
        this.ctx.setTransform(d, 0, 0, d, 0, 0);
    }
    worldToScreen(wx, wy) {
        const c = project(this.center.lat, this.center.lng, this.z);
        return { x: wx - c.x + this.cssWidth() / 2, y: wy - c.y + this.cssHeight() / 2 };
    }
    screenToLatLng(sx, sy) {
        const c = project(this.center.lat, this.center.lng, this.z);
        const wx = sx - this.cssWidth() / 2 + c.x;
        const wy = sy - this.cssHeight() / 2 + c.y;
        const scale = TILE * 2 ** this.z;
        const lng = (wx / scale) * 360 - 180;
        const n = Math.PI - 2 * Math.PI * (wy / scale);
        const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
        return { lat, lng };
    }
    // ── Base scenery (procedural, deterministic) ──
    drawBase() {
        if (!this.ctx)
            return;
        const ctx = this.ctx;
        const w = this.cssWidth(), h = this.cssHeight();
        ctx.fillStyle = "#eef0e4";
        ctx.fillRect(0, 0, w, h);
        // deterministic pseudo-random
        let seed = 7;
        const rnd = () => {
            seed = (seed * 1103515245 + 12345) & 0x7fffffff;
            return seed / 0x7fffffff;
        };
        const tl = this.screenToLatLng(0, 0);
        const br = this.screenToLatLng(w, h);
        const latSpan = Math.abs(tl.lat - br.lat);
        const lngSpan = Math.abs(br.lng - tl.lng);
        // greenery patches
        ctx.fillStyle = "#dfe8cf";
        for (let i = 0; i < 14; i++) {
            const lat = Math.min(tl.lat, br.lat) + rnd() * latSpan;
            const lng = Math.min(tl.lng, br.lng) + rnd() * lngSpan;
            const p = project(lat, lng, this.z);
            const s = this.worldToScreen(p.x, p.y);
            ctx.beginPath();
            ctx.ellipse(s.x, s.y, 30 + rnd() * 70, 22 + rnd() * 46, rnd() * Math.PI, 0, Math.PI * 2);
            ctx.fill();
        }
        // blocks
        ctx.fillStyle = "#e3e1d5";
        ctx.strokeStyle = "#d6d3c3";
        for (let i = 0; i < 26; i++) {
            const lat = Math.min(tl.lat, br.lat) + rnd() * latSpan;
            const lng = Math.min(tl.lng, br.lng) + rnd() * lngSpan;
            const p = project(lat, lng, this.z);
            const s = this.worldToScreen(p.x, p.y);
            const bw = 18 + rnd() * 54, bh = 14 + rnd() * 40;
            ctx.fillRect(s.x - bw / 2, s.y - bh / 2, bw, bh);
            ctx.strokeRect(s.x - bw / 2, s.y - bh / 2, bw, bh);
        }
        // river — a fixed S-curve through Riverstone
        ctx.strokeStyle = "#a9cbe0";
        ctx.lineWidth = Math.max(8, this.z * 2.2);
        ctx.lineCap = "round";
        ctx.beginPath();
        const riverPts = [
            { lat: 2.0472, lng: 102.5648 },
            { lat: 2.0452, lng: 102.5672 },
            { lat: 2.0430, lng: 102.5685 },
            { lat: 2.0412, lng: 102.5688 },
            { lat: 2.0394, lng: 102.5702 },
            { lat: 2.0372, lng: 102.5724 },
        ];
        riverPts.forEach((rp, i) => {
            const p = project(rp.lat, rp.lng, this.z);
            const s = this.worldToScreen(p.x, p.y);
            if (i === 0)
                ctx.moveTo(s.x, s.y);
            else
                ctx.lineTo(s.x, s.y);
        });
        ctx.stroke();
        ctx.lineWidth = 1;
        // roads
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = Math.max(3, this.z * 0.7);
        const roads = [
            [{ lat: 2.0448, lng: 102.5662 }, { lat: 2.0444, lng: 102.5690 }, { lat: 2.0440, lng: 102.5704 }],
            [{ lat: 2.0422, lng: 102.5660 }, { lat: 2.0424, lng: 102.5695 }, { lat: 2.0426, lng: 102.5710 }],
            [{ lat: 2.0404, lng: 102.5668 }, { lat: 2.0407, lng: 102.5698 }, { lat: 2.0410, lng: 102.5712 }],
            [{ lat: 2.0460, lng: 102.5686 }, { lat: 2.0422, lng: 102.5688 }, { lat: 2.0388, lng: 102.5684 }],
            [{ lat: 2.0450, lng: 102.5710 }, { lat: 2.0412, lng: 102.5706 }, { lat: 2.0378, lng: 102.5700 }],
            [{ lat: 2.0437, lng: 102.5654 }, { lat: 2.0433, lng: 102.5690 }, { lat: 2.0430, lng: 102.5716 }],
        ];
        for (const road of roads) {
            ctx.beginPath();
            road.forEach((rp, i) => {
                const p = project(rp.lat, rp.lng, this.z);
                const s = this.worldToScreen(p.x, p.y);
                if (i === 0)
                    ctx.moveTo(s.x, s.y);
                else
                    ctx.lineTo(s.x, s.y);
            });
            ctx.stroke();
        }
        ctx.lineWidth = 1;
        // destination label
        const d = project(DEST.center.lat, DEST.center.lng - 0.0009, this.z);
        const ds = this.worldToScreen(d.x, d.y);
        ctx.font = "600 13px system-ui, -apple-system, sans-serif";
        ctx.fillStyle = "#6b705c";
        ctx.textAlign = "center";
        ctx.fillText(DEST.name.toUpperCase(), ds.x, ds.y);
    }
    drawMarkers() {
        if (!this.ctx)
            return;
        const ctx = this.ctx;
        for (const pt of this.points) {
            const s = this.worldToScreen(pt.x, pt.y);
            if (s.x < -40 || s.x > this.cssWidth() + 40 || s.y < -40 || s.y > this.cssHeight() + 40)
                continue;
            const sel = pt.business.id === this.selectedId;
            const cat = pt.business.categoryId;
            const emoji = cat === "cat-food" ? "🍜" :
                cat === "cat-shop" ? "🎨" :
                    cat === "cat-stay" ? "🏡" :
                        cat === "cat-experience" ? "🧑‍🌾" : "🚶";
            const r = sel ? 17 : 13;
            // pin shadow
            ctx.beginPath();
            ctx.ellipse(s.x, s.y + r + 2, r * 0.7, 3.4, 0, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(20,40,20,0.18)";
            ctx.fill();
            // bubble
            ctx.beginPath();
            ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
            ctx.fillStyle = sel ? "#14532d" : "#ffffff";
            ctx.fill();
            ctx.lineWidth = sel ? 3 : 2;
            ctx.strokeStyle = "#f59e0b";
            ctx.stroke();
            ctx.font = `${sel ? 15 : 12}px system-ui, -apple-system, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(emoji, s.x, s.y + 1);
            ctx.textBaseline = "alphabetic";
        }
    }
    drawAttribution() {
        if (!this.ctx)
            return;
        const ctx = this.ctx;
        ctx.font = "10px system-ui, -apple-system, sans-serif";
        ctx.fillStyle = "rgba(60,60,50,0.55)";
        ctx.textAlign = "left";
        ctx.fillText("Illustrated demo map · not for navigation", 8, this.cssHeight() - 8);
    }
    draw() {
        if (this.detached)
            return;
        this.resize();
        this.drawBase();
        this.drawMarkers();
        this.drawAttribution();
    }
    scheduleDraw() {
        cancelAnimationFrame(this.raf);
        this.raf = requestAnimationFrame(() => this.draw());
    }
    bindEvents() {
        const el = this.canvas;
        const pos = (e) => {
            const r = el.getBoundingClientRect();
            return { x: e.clientX - r.left, y: e.clientY - r.top };
        };
        const onDown = (e) => {
            const p = pos(e);
            this.dragState = { startX: p.x, startY: p.y, startCx: this.center.lat, startCy: this.center.lng };
            el.setPointerCapture(e.pointerId);
        };
        const onMove = (e) => {
            if (!this.dragState)
                return;
            const p = pos(e);
            const dx = p.x - this.dragState.startX;
            const dy = p.y - this.dragState.startY;
            if (Math.abs(dx) + Math.abs(dy) > 4) {
                const a = this.screenToLatLng(0, 0);
                const b = this.screenToLatLng(1, 0);
                void a;
                void b;
                const metersPerPx = (156543.03392 * Math.cos((this.center.lat * Math.PI) / 180)) / 2 ** this.z;
                const dLat = (dy * metersPerPx) / 111320;
                const dLng = (-dx * metersPerPx) / (111320 * Math.cos((this.center.lat * Math.PI) / 180));
                this.center = { lat: this.dragState.startCx + dLat, lng: this.dragState.startCy + dLng };
                this.scheduleDraw();
            }
        };
        const onUp = (e) => {
            const p = pos(e);
            const moved = this.dragState &&
                Math.abs(p.x - this.dragState.startX) + Math.abs(p.y - this.dragState.startY) > 6;
            const wasDrag = !!moved;
            this.dragState = null;
            if (!wasDrag) {
                // hit-test markers (nearest within 22px)
                let best = null;
                for (const pt of this.points) {
                    const s = this.worldToScreen(pt.x, pt.y);
                    const d = Math.hypot(s.x - p.x, s.y - p.y);
                    if (d < 24 && (!best || d < best.d))
                        best = { id: pt.business.id, d };
                }
                this.onSelect(best ? best.id : null);
                this.selectedId = best ? best.id : this.selectedId;
                this.scheduleDraw();
            }
        };
        const onWheel = (e) => {
            e.preventDefault();
            const nz = Math.max(13, Math.min(18, this.z + (e.deltaY < 0 ? 0.5 : -0.5)));
            if (nz !== this.z) {
                const before = this.screenToLatLng(pos(e).x, pos(e).y);
                this.z = nz;
                // keep cursor point stable-ish
                const after = this.screenToLatLng(pos(e).x, pos(e).y);
                this.center.lat += before.lat - after.lat;
                this.center.lng += before.lng - after.lng;
                this.setPoints(this.points.map((p) => p.business));
                this.scheduleDraw();
            }
        };
        const touches = new Map();
        const onTouchStart = (e) => {
            for (const t of Array.from(e.changedTouches))
                touches.set(t.identifier, { x: t.clientX, y: t.clientY });
            if (e.touches.length === 2) {
                const [a, b] = Array.from(e.touches);
                this.pinch = { dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), z: this.z };
            }
        };
        const onTouchMove = (e) => {
            if (e.touches.length === 2 && this.pinch) {
                e.preventDefault();
                const [a, b] = Array.from(e.touches);
                const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
                const nz = Math.max(13, Math.min(18, this.pinch.z + Math.log2(d / this.pinch.dist)));
                if (Math.abs(nz - this.z) >= 0.05) {
                    this.z = nz;
                    this.setPoints(this.points.map((p) => p.business));
                    this.scheduleDraw();
                }
            }
        };
        const onTouchEnd = (e) => {
            for (const t of Array.from(e.changedTouches))
                touches.delete(t.identifier);
            if (e.touches.length < 2)
                this.pinch = null;
        };
        const ro = new ResizeObserver(() => {
            this.setPoints(this.points.map((p) => p.business));
            this.scheduleDraw();
        });
        ro.observe(el);
        el.addEventListener("pointerdown", onDown);
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerup", onUp);
        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchmove", onTouchMove, { passive: false });
        el.addEventListener("touchend", onTouchEnd, { passive: true });
        this.cleanup = () => {
            ro.disconnect();
            el.removeEventListener("pointerdown", onDown);
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerup", onUp);
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }
    destroy() {
        this.detached = true;
        cancelAnimationFrame(this.raf);
        this.cleanup?.();
    }
}
function nearbyWithin(list, lat, lng, km) {
    return list.filter((b) => distanceKm(lat, lng, b.latitude, b.longitude) <= km);
}


__exports["MiniMap"] = MiniMap;
__exports["nearbyWithin"] = nearbyWithin;
return __exports;
} };
__modules[".tsbuild/components/ui.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m_virtual_react = __req("virtual/react");
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const m__tsbuild_components_flavor_js = __req(".tsbuild/components/flavor.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const _jsxs = m_virtual_react_jsx_runtime.jsxs;
const useEffect = m_virtual_react.useEffect;
const useState = m_virtual_react.useState;
const formatDistance = m__tsbuild_lib_store_js.formatDistance;
const distanceFromCenter = m__tsbuild_lib_store_js.distanceFromCenter;
const isOpenNow = m__tsbuild_lib_store_js.isOpenNow;
const priceLabel = m__tsbuild_lib_store_js.priceLabel;
const hoursLabel = m__tsbuild_lib_store_js.hoursLabel;
const FlavorBadge = m__tsbuild_components_flavor_js.FlavorBadge;

// ─── Shared UI primitives ────────────────────────────────────────────────────



const SVG_NS = "http://www.w3.org/2000/svg";
void SVG_NS;
function el(name, attrs, children) {
    const n = document.createElementNS(SVG_NS, name);
    for (const [k, v] of Object.entries(attrs))
        n.setAttribute(k, String(v));
    for (const c of children ?? [])
        n.append(c);
    return n;
}
/** Deterministic warm illustrated placeholder per business. */
function PlaceholderArt({ b, height = 130 }) {
    let seed = 0;
    for (let i = 0; i < b.id.length; i++)
        seed = (seed * 31 + b.id.charCodeAt(i)) >>> 0;
    const hueSets = {
        "cat-food": ["#fde8cd", "#f6c88f", "#d97706"],
        "cat-shop": ["#e8e2f4", "#c9bce4", "#7c5cbf"],
        "cat-stay": ["#dff0e2", "#a9d4b4", "#2e7d4f"],
        "cat-experience": ["#fde3d5", "#f5b99c", "#c2571f"],
        "cat-explore": ["#dcebee", "#a9cfdb", "#2e6e82"],
    };
    const [c1, c2, c3] = hueSets[b.categoryId] ?? hueSets["cat-explore"];
    const rnd = () => {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        return seed / 0x7fffffff;
    };
    const hills = [];
    const n = 3;
    for (let i = 0; i < n; i++) {
        const y = 55 + i * 18 + rnd() * 10;
        const amp = 8 + rnd() * 10;
        hills.push(_jsx("path", { d: `M0 ${y + amp} Q 25 ${y - amp} 50 ${y} T 100 ${y - amp / 2} V 100 H 0 Z`, fill: i === 0 ? c1 : i === 1 ? c2 : c3, opacity: i === 2 ? 0.9 : 0.55 + i * 0.15 }, i));
    }
    const sunX = 12 + rnd() * 70;
    const glyphs = {
        "cat-food": "M30 62 q20 -14 40 0",
        "cat-shop": "M32 66 l10 -18 8 8 10 -12 8 22",
        "cat-stay": "M30 66 l20 -16 20 16 z",
        "cat-experience": "M28 60 q22 18 44 0",
        "cat-explore": "M30 64 h40 M50 50 v14",
    };
    return (_jsx("div", { className: "ph", style: { height }, role: "img", "aria-label": `${b.name} — illustrated placeholder`, children: _jsxs("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid slice", "aria-hidden": "true", children: [_jsx("rect", { width: "100", height: "100", fill: c1, opacity: "0.45" }), _jsx("circle", { cx: sunX, cy: 26, r: 9, fill: c3, opacity: "0.5" }), hills, _jsx("path", { d: glyphs[b.categoryId] ?? glyphs["cat-explore"], fill: "none", stroke: "#ffffff", strokeWidth: "3.2", strokeLinecap: "round", opacity: "0.85" })] }) }));
}
function ScoreDial({ value, size = 52 }) {
    const r = (size - 8) / 2;
    const c = 2 * Math.PI * r;
    const frac = Math.max(0, Math.min(1, value / 100));
    return (_jsxs("div", { className: "score-dial", style: { width: size, height: size }, title: `Local Score ${value}/100`, children: [_jsxs("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, "aria-hidden": "true", children: [_jsx("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: "var(--surface-2)", strokeWidth: "5" }), _jsx("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: "var(--accent)", strokeWidth: "5", strokeLinecap: "round", strokeDasharray: `${c * frac} ${c}`, transform: `rotate(-90 ${size / 2} ${size / 2})` })] }), _jsx("span", { className: "val", style: { fontSize: size * 0.28 }, children: value }), _jsx("span", { className: "score-label", children: "Local" })] }));
}
function OwnershipBadge({ b }) {
    const verified = b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED";
    if (verified && b.locallyOwned) {
        const label = b.verificationStatus === "ADMIN_VERIFIED" ? "✓ Locally owned · Verified" : "✓ Locally owned · Owner verified";
        return _jsx("span", { className: "badge badge-local", children: label });
    }
    if (verified && b.locallyOperated) {
        return _jsx("span", { className: "badge badge-local", children: "\u2713 Locally operated \u00B7 Verified" });
    }
    if (b.verificationStatus === "COMMUNITY_VERIFIED") {
        return _jsx("span", { className: "badge badge-amber", children: "\u2713 Community verified" });
    }
    return _jsx("span", { className: "badge badge-gray", children: "Local status: Unverified" });
}
function VerificationBadge({ status }) {
    const map = {
        UNVERIFIED: { label: "Unverified", cls: "badge-gray" },
        COMMUNITY_SUBMITTED: { label: "Community submitted", cls: "badge-amber" },
        OWNER_VERIFIED: { label: "Owner verified", cls: "badge-local" },
        ADMIN_VERIFIED: { label: "Admin verified", cls: "badge-local" },
        COMMUNITY_VERIFIED: { label: "Community verified", cls: "badge-amber" },
    };
    const v = map[status] ?? map.UNVERIFIED;
    return _jsx("span", { className: `badge ${v.cls}`, children: v.label });
}
function BusinessCard({ b, onOpen, showDemoTag = true }) {
    const open = isOpenNow(b);
    return (_jsxs("article", { className: "card card-tap biz-card", children: [_jsx(PlaceholderArt, { b: b, height: 110 }), _jsxs("div", { className: "biz-card-body", children: [_jsxs("div", { className: "biz-card-main", children: [_jsxs("div", { className: "badge-row", style: { marginBottom: 6 }, children: [showDemoTag && b.isDemo && _jsx("span", { className: "badge badge-demo", children: "DEMO" }), _jsx(OwnershipBadge, { b: b })] }), _jsx("h3", { className: "biz-name", children: _jsx("a", { href: `#/business/${b.id}`, onClick: (e) => { e.preventDefault(); onOpen(b.id); }, style: { color: "inherit", textDecoration: "none" }, children: b.name }) }), _jsxs("div", { className: "biz-meta", children: [_jsx("span", { children: catLabel(b.categoryId) }), _jsx("span", { children: "\u00B7" }), _jsx("span", { children: formatDistance(distanceFromCenter(b)) }), _jsx("span", { children: "\u00B7" }), _jsx("span", { className: open ? "badge-open badge" : "badge-closed badge", style: { padding: "1px 8px" }, children: open ? "Open now" : "Closed" })] }), b.description && _jsx("p", { className: "biz-desc", children: b.description }), _jsx("div", { className: "badge-row", style: { marginTop: 8 }, children: _jsx(FlavorBadge, { b: b }) }), _jsx("p", { className: "price-tag", children: priceLabel(b.priceLevel) })] }), _jsx("div", { className: "biz-card-side", children: _jsx(ScoreDial, { value: b.localScore }) })] }), _jsx("div", { style: { padding: "0 16px 15px" }, children: _jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => onOpen(b.id), children: "View Place \u2192" }) })] }));
}
function catLabel(categoryId) {
    switch (categoryId) {
        case "cat-food": return "Local Food";
        case "cat-shop": return "Shops & Crafts";
        case "cat-stay": return "Homestays";
        case "cat-experience": return "Experiences";
        case "cat-explore": return "Attractions";
        default: return "Local Place";
    }
}
function catEmoji(categoryId) {
    switch (categoryId) {
        case "cat-food": return "🍜";
        case "cat-shop": return "🎨";
        case "cat-stay": return "🏡";
        case "cat-experience": return "🧑‍🌾";
        case "cat-explore": return "🚶";
        default: return "📍";
    }
}
function EmptyState({ icon, title, body, action }) {
    return (_jsxs("div", { className: "state-block", children: [_jsx("div", { className: "big", "aria-hidden": "true", children: icon }), _jsx("h3", { children: title }), _jsx("p", { children: body }), action] }));
}
function Toast({ message }) {
    return _jsx("div", { className: "toast", role: "status", children: message });
}
function useToast() {
    const [msg, setMsg] = useState(null);
    useEffect(() => {
        if (!msg)
            return;
        const t = setTimeout(() => setMsg(null), 2600);
        return () => clearTimeout(t);
    }, [msg]);
    return [msg, setMsg];
}
function ScoreBreakdown({ b }) {
    const factors = [
        { name: "Local ownership", max: 30, v: b.scoreInputs.ownership, why: "Owner is a Riverstone resident" },
        { name: "Community presence", max: 20, v: b.scoreInputs.community, why: "Local staff, local networks, years of service" },
        { name: "Local products & services", max: 20, v: b.scoreInputs.localProducts, why: "Local sourcing, local craft" },
        { name: "Independent business", max: 15, v: b.scoreInputs.independence, why: "Not part of a chain" },
        { name: "Sustainability & practices", max: 10, v: b.scoreInputs.sustainability, why: "Community & environmental practices" },
        { name: "Visitor reviews", max: 5, v: b.scoreInputs.reviews, why: "Consistent visitor feedback" },
    ];
    return (_jsx("div", { className: "score-factors", children: factors.map((f) => (_jsxs("div", { className: "score-factor", children: [_jsx("span", { className: "name", children: f.name }), _jsxs("span", { className: "pts tnum", children: [f.v, "/", f.max] }), _jsx("span", { className: "bar", children: _jsx("i", { style: { width: `${(f.v / f.max) * 100}%` } }) }), _jsx("span", { className: "why", children: f.why })] }, f.name))) }));
}
function HoursTable({ b }) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    return (_jsx("div", { className: "small tnum", children: days.map((d, i) => (_jsxs("div", { className: "row-between", style: { padding: "3px 0", color: i === today ? "var(--ink)" : "var(--muted)", fontWeight: i === today ? 650 : 400 }, children: [_jsx("span", { children: d }), _jsx("span", { children: b.hours[i] ?? "Closed" })] }, d))) }));
}
function useNow() {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(t);
    }, []);
    return now;
}
function hoursOneLine(b) {
    return hoursLabel(b);
}
function elUnused() { return el; }


__exports["PlaceholderArt"] = PlaceholderArt;
__exports["ScoreDial"] = ScoreDial;
__exports["OwnershipBadge"] = OwnershipBadge;
__exports["VerificationBadge"] = VerificationBadge;
__exports["BusinessCard"] = BusinessCard;
__exports["catLabel"] = catLabel;
__exports["catEmoji"] = catEmoji;
__exports["EmptyState"] = EmptyState;
__exports["Toast"] = Toast;
__exports["useToast"] = useToast;
__exports["ScoreBreakdown"] = ScoreBreakdown;
__exports["HoursTable"] = HoursTable;
__exports["useNow"] = useNow;
__exports["hoursOneLine"] = hoursOneLine;
__exports["elUnused"] = elUnused;
return __exports;
} };
__modules[".tsbuild/components/flavor.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const _jsxs = m_virtual_react_jsx_runtime.jsxs;
const FLAVOR_AXES = m__tsbuild_lib_store_js.FLAVOR_AXES;
const flavorWord = m__tsbuild_lib_store_js.flavorWord;


/** Compact meter: level dots (0–3) + plain-language label for newcomers. */
function FlavorMeter({ axis, level, showWord = true }) {
    const lvl = Math.max(0, Math.min(3, level));
    return (_jsxs("div", { className: "flavor-meter", title: `${axis.label}: ${flavorWord(FLAVOR_AXES.indexOf(axis), lvl)}`, children: [_jsxs("div", { className: "fm-head", children: [_jsx("span", { className: "fm-icon", "aria-hidden": "true", children: axis.icon }), _jsx("span", { className: "fm-label", children: axis.label })] }), _jsxs("div", { className: "fm-dots", role: "img", "aria-label": `${axis.label} ${lvl} of 3`, children: [[1, 2, 3].map((n) => (_jsx("i", { className: `fm-dot ${n <= lvl ? (axis.key === "spice" && n === 3 ? "fm-hot" : "on") : ""}` }, n))), lvl === 0 && _jsx("i", { className: "fm-dot fm-zero" })] }), showWord && _jsx("div", { className: "fm-word", children: axis.words[lvl] })] }));
}
/** Four-axis summary for a business (place-level flavor profile). */
function FlavorCard({ fp, note }) {
    return (_jsxs("div", { className: "flavor-card", children: [_jsx("div", { className: "flavor-grid", children: FLAVOR_AXES.map((a) => _jsx(FlavorMeter, { axis: a, level: fp[a.key] }, a.key)) }), _jsxs("p", { className: "small faint", style: { marginTop: 10, marginBottom: 0 }, children: ["A 0\u20133 guide to help visitors new to local food \u2014 ", note ?? "levels describe the kitchen overall; each dish below has its own guide", ". Not a medical or dietary certification."] })] }));
}
/** Menu with per-dish flavor rows. */
function MenuList({ menu }) {
    if (!menu.length)
        return null;
    return (_jsx("div", { className: "menu-list", children: menu.map((m) => (_jsxs("div", { className: "menu-item", children: [_jsxs("div", { className: "menu-item-head", children: [_jsx("span", { className: "menu-item-name", children: m.name }), m.priceRM != null && _jsxs("span", { className: "menu-item-price tnum", children: ["RM", m.priceRM] })] }), m.description && _jsx("p", { className: "menu-item-desc", children: m.description }), _jsx("div", { className: "menu-item-flavors", children: FLAVOR_AXES.map((a) => (_jsxs("span", { className: "mf-chip", title: `${a.label}: ${a.words[m[a.key]]}`, children: [_jsx("span", { "aria-hidden": "true", children: a.icon }), " ", a.label, ": ", a.words[m[a.key]]] }, a.key))) }), m.tip && _jsxs("p", { className: "menu-item-tip", children: ["\uD83D\uDCA1 ", m.tip] })] }, m.id))) }));
}
/** Badge shown on business cards when a flavor guide exists. */
function FlavorBadge({ b }) {
    if (!b.flavorProfile && !(b.menu && b.menu.length))
        return null;
    const fp = b.flavorProfile;
    if (!fp)
        return _jsx("span", { className: "badge badge-gray", children: "Flavor guide inside" });
    const spice = fp.spice;
    const label = spice >= 3 ? "🌶️ Very spicy" : spice === 2 ? "🌶️ Medium spice" : spice === 1 ? "Mild heat" : "No heat";
    const extra = [];
    if (fp.sour >= 2)
        extra.push("tangy");
    if (fp.sweet >= 3)
        extra.push("very sweet");
    if (fp.msg === 0)
        extra.push("no MSG");
    else if (fp.msg >= 2)
        extra.push("seasoned");
    return (_jsxs("span", { className: "badge badge-amber", title: `Flavor guide: spiciness ${spice}/3, sweetness ${fp.sweet}/3, sour tempo ${fp.sour}/3, MSG ${fp.msg}/3`, children: [label, extra.length ? " · " + extra.join(", ") : ""] }));
}


__exports["FlavorMeter"] = FlavorMeter;
__exports["FlavorCard"] = FlavorCard;
__exports["MenuList"] = MenuList;
__exports["FlavorBadge"] = FlavorBadge;
return __exports;
} };
__modules[".tsbuild/screens/ops.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m_virtual_react_jsx_runtime = __req("virtual/react-jsx-runtime");
const m_virtual_react = __req("virtual/react");
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const m__tsbuild_lib_assistant_js = __req(".tsbuild/lib/assistant.js");
const m__tsbuild_components_ui_js = __req(".tsbuild/components/ui.js");
const _jsx = m_virtual_react_jsx_runtime.jsx;
const _jsxs = m_virtual_react_jsx_runtime.jsxs;
const useEffect = m_virtual_react.useEffect;
const useRef = m_virtual_react.useRef;
const useState = m_virtual_react.useState;
const getAllBusinesses = m__tsbuild_lib_store_js.getAllBusinesses;
const submitBusiness = m__tsbuild_lib_store_js.submitBusiness;
const adminAct = m__tsbuild_lib_store_js.adminAct;
const deleteReview = m__tsbuild_lib_store_js.deleteReview;
const getAllReviews = m__tsbuild_lib_store_js.getAllReviews;
const getCategories = m__tsbuild_lib_store_js.getCategories;
const resetDemoData = m__tsbuild_lib_store_js.resetDemoData;
const getApprovedBusinesses = m__tsbuild_lib_store_js.getApprovedBusinesses;
const getImpactSummary = m__tsbuild_lib_store_js.getImpactSummary;
const getBusinessById = m__tsbuild_lib_store_js.getBusinessById;
const answerQuery = m__tsbuild_lib_assistant_js.answerQuery;
const EmptyState = m__tsbuild_components_ui_js.EmptyState;
const Toast = m__tsbuild_components_ui_js.Toast;
const useToast = m__tsbuild_components_ui_js.useToast;
const VerificationBadge = m__tsbuild_components_ui_js.VerificationBadge;
const catLabel = m__tsbuild_components_ui_js.catLabel;
const FLAVOR_AXES = m__tsbuild_lib_store_js.FLAVOR_AXES;

// ─── Business onboarding + Admin console + Assistant panel ───────────────────





function SubmitScreen() {
    const cats = getCategories();
    const [form, setForm] = useState({
        businessName: "", ownerName: "", phone: "", whatsapp: "", email: "",
        category: "", address: "", latitude: "", longitude: "", description: "",
        yearsOperating: "", localEmployees: "", locallyOwned: false, locallyOperated: false,
        ownershipType: "locally_owned", products: "", priceLevel: "1", hours: "",
    });
    const [menuRows, setMenuRows] = useState([
        { name: "", priceRM: "", spice: 1, sweet: 1, sour: 0, msg: 1 },
    ]);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(null);
    const [busy, setBusy] = useState(false);
    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    const pickOnMap = () => {
        setForm((f) => ({
            ...f,
            latitude: (2.0428 + (Math.random() - 0.5) * 0.004).toFixed(6),
            longitude: (102.5685 + (Math.random() - 0.5) * 0.004).toFixed(6),
        }));
    };
    const submit = () => {
        const errs = {};
        if (form.businessName.trim().length < 2)
            errs.businessName = "Business name is required.";
        if (form.ownerName.trim().length < 2)
            errs.ownerName = "Owner name is required.";
        if (form.phone.trim().length < 6)
            errs.phone = "A contact number is required.";
        if (!form.category)
            errs.category = "Choose a category.";
        if (form.address.trim().length < 4)
            errs.address = "Address is required.";
        setErrors(errs);
        if (Object.keys(errs).length > 0)
            return;
        setBusy(true);
        const menu = menuRows
            .filter((m) => m.name.trim().length > 0)
            .map((m) => ({ name: m.name.trim(), priceRM: m.priceRM ? parseFloat(m.priceRM) : undefined, spice: m.spice, sweet: m.sweet, sour: m.sour, msg: m.msg }));
        // simulate short latency like a real API call
        setTimeout(() => {
            const b = submitBusiness({ ...form, menu });
            setBusy(false);
            setSubmitted(b);
            window.scrollTo(0, 0);
        }, 600);
    };
    if (submitted) {
        return (_jsxs("div", { className: "page", children: [_jsx("div", { className: "topbar", children: _jsx("h1", { children: "Submission received" }) }), _jsxs("div", { className: "card card-pad", style: { textAlign: "center", padding: "36px 20px" }, children: [_jsx("div", { style: { fontSize: 44, marginBottom: 8 }, "aria-hidden": "true", children: "\u2713" }), _jsx("h2", { children: "Thanks. Your business has been submitted for verification." }), _jsxs("p", { className: "muted mt-8", children: [_jsx("b", { children: submitted.name }), " is now queued as ", _jsx(VerificationBadge, { status: submitted.verificationStatus }), ". Local status: Unverified until an admin confirms ownership details."] }), _jsxs("div", { className: "mt-24 row", style: { justifyContent: "center", flexWrap: "wrap" }, children: [_jsx("a", { className: "btn btn-secondary", href: "#/admin", children: "See it in the Admin console" }), _jsx("button", { className: "btn btn-ghost", onClick: () => { setSubmitted(null); }, children: "Submit another" })] })] })] }));
    }
    return (_jsxs("div", { className: "page", children: [_jsxs("div", { className: "topbar", children: [_jsx("a", { className: "btn btn-ghost btn-sm", href: "#/", children: "\u2190 Home" }), _jsx("span", { className: "demo-tag", children: "DEMO FORM" })] }), _jsx("h1", { children: "List your business" }), _jsx("p", { className: "muted", style: { marginTop: 8 }, children: "Free to list. No website, marketing budget or SEO needed \u2014 just tell visitors who you are. Verification protects tourists from fake \"local\" claims, so ownership details matter." }), _jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Business" }), _jsxs("div", { className: "field mt-8", children: [_jsx("label", { htmlFor: "f-name", children: "Business name *" }), _jsx("input", { id: "f-name", className: "input", value: form.businessName, onChange: set("businessName"), "aria-invalid": !!errors.businessName, placeholder: "e.g. Ah Mei's Family Kitchen" }), errors.businessName && _jsx("p", { className: "hint", style: { color: "var(--danger)" }, role: "alert", children: errors.businessName })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-cat", children: "Category *" }), _jsxs("select", { id: "f-cat", className: "select", value: form.category, onChange: set("category"), "aria-invalid": !!errors.category, children: [_jsx("option", { value: "", children: "Choose a category\u2026" }), cats.map((c) => _jsxs("option", { value: c.id, children: [c.emoji, " ", c.label] }, c.id))] }), errors.category && _jsx("p", { className: "hint", style: { color: "var(--danger)" }, role: "alert", children: errors.category })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-desc", children: "Description" }), _jsx("textarea", { id: "f-desc", className: "textarea", value: form.description, onChange: set("description"), placeholder: "What do you make, serve or sell? What makes it special?" })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-addr", children: "Address *" }), _jsx("input", { id: "f-addr", className: "input", value: form.address, onChange: set("address"), "aria-invalid": !!errors.address, placeholder: "Street, town" }), errors.address && _jsx("p", { className: "hint", style: { color: "var(--danger)" }, role: "alert", children: errors.address }), _jsxs("div", { className: "row mt-8", children: [_jsx("button", { type: "button", className: "btn btn-secondary btn-sm", onClick: pickOnMap, children: "Use demo GPS pin" }), form.latitude && _jsxs("span", { className: "small faint tnum", children: [form.latitude, ", ", form.longitude] })] })] })] }), _jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Contact" }), _jsxs("div", { className: "form-row mt-8", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-owner", children: "Owner name *" }), _jsx("input", { id: "f-owner", className: "input", value: form.ownerName, onChange: set("ownerName"), "aria-invalid": !!errors.ownerName }), errors.ownerName && _jsx("p", { className: "hint", style: { color: "var(--danger)" }, role: "alert", children: errors.ownerName })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-phone", children: "Phone *" }), _jsx("input", { id: "f-phone", className: "input", type: "tel", value: form.phone, onChange: set("phone"), "aria-invalid": !!errors.phone, placeholder: "+60 \u2026" }), errors.phone && _jsx("p", { className: "hint", style: { color: "var(--danger)" }, role: "alert", children: errors.phone })] })] }), _jsxs("div", { className: "form-row", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-wa", children: "WhatsApp" }), _jsx("input", { id: "f-wa", className: "input", value: form.whatsapp, onChange: set("whatsapp"), placeholder: "Same as phone if unsure" })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-email", children: "Email" }), _jsx("input", { id: "f-email", className: "input", type: "email", value: form.email, onChange: set("email"), placeholder: "optional" })] })] })] }), _jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Local ownership" }), _jsx("p", { className: "small muted mt-8", children: "This is the heart of LocalLoop \u2014 every claim is checked before visitors see it as verified." }), _jsxs("label", { className: "check-row", children: [_jsx("input", { type: "checkbox", checked: form.locallyOwned, onChange: (e) => setForm({ ...form, locallyOwned: e.target.checked }) }), _jsxs("span", { className: "txt", children: [_jsx("b", { children: "Locally owned?" }), _jsx("br", {}), _jsx("span", { className: "sub", children: "The owner lives in or near this destination." })] })] }), _jsxs("label", { className: "check-row", children: [_jsx("input", { type: "checkbox", checked: form.locallyOperated, onChange: (e) => setForm({ ...form, locallyOperated: e.target.checked }) }), _jsxs("span", { className: "txt", children: [_jsx("b", { children: "Locally operated?" }), _jsx("br", {}), _jsx("span", { className: "sub", children: "Day-to-day operations are run by local residents." })] })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-own", children: "Ownership type" }), _jsxs("select", { id: "f-own", className: "select", value: form.ownershipType, onChange: set("ownershipType"), children: [_jsx("option", { value: "locally_owned", children: "Locally owned" }), _jsx("option", { value: "locally_operated", children: "Locally operated" }), _jsx("option", { value: "family_owned", children: "Family owned" }), _jsx("option", { value: "cooperative", children: "Cooperative" }), _jsx("option", { value: "independent", children: "Independent" }), _jsx("option", { value: "chain", children: "Part of a chain" }), _jsx("option", { value: "unknown", children: "Not sure" })] })] }), _jsxs("div", { className: "form-row", children: [_jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-years", children: "Years operating" }), _jsx("input", { id: "f-years", className: "input", type: "number", min: "0", value: form.yearsOperating, onChange: set("yearsOperating") })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-emp", children: "Local employees" }), _jsx("input", { id: "f-emp", className: "input", type: "number", min: "0", value: form.localEmployees, onChange: set("localEmployees") })] })] })] }), _jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Products & pricing" }), _jsxs("div", { className: "field mt-8", children: [_jsx("label", { htmlFor: "f-prod", children: "Products / services" }), _jsx("input", { id: "f-prod", className: "input", value: form.products, onChange: set("products"), placeholder: "e.g. Hand-pulled noodles, kaya toast" })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-price", children: "Price range" }), _jsxs("select", { id: "f-price", className: "select", value: form.priceLevel, onChange: set("priceLevel"), children: [_jsx("option", { value: "1", children: "Budget (RM5\u201320)" }), _jsx("option", { value: "2", children: "Mid (RM20\u201360)" }), _jsx("option", { value: "3", children: "Premium (RM60+)" })] })] }), _jsxs("div", { className: "field", children: [_jsx("label", { htmlFor: "f-hours", children: "Opening hours" }), _jsx("input", { id: "f-hours", className: "input", value: form.hours, onChange: set("hours"), placeholder: 'e.g. Mon\u2013Sat 9:00\u201318:00' }), _jsx("p", { className: "hint", children: "Added to your listing once verified; admins can structure it per day." })] })] }), _jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Menu & flavor guide" }), _jsx("p", { className: "small muted mt-8", children: "Visitors new to local food often ask: how spicy is it? How sweet? Does it have MSG? Add your dishes with 0\u20133 levels so tourists can order with confidence." }), menuRows.map((m, i) => (_jsxs("div", { className: "menu-editor-row", style: { borderTop: "1px solid var(--line)", paddingTop: 12, marginTop: 12 }, children: [_jsxs("div", { className: "form-row", children: [_jsxs("div", { className: "field", style: { marginBottom: 0 }, children: [_jsx("label", { htmlFor: `mn-${i}`, children: "Dish name" }), _jsx("input", { id: `mn-${i}`, className: "input", value: m.name, placeholder: "e.g. Herbal Noodle Soup", onChange: (e) => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, name: e.target.value } : r)) })] }), _jsxs("div", { className: "field", style: { marginBottom: 0 }, children: [_jsx("label", { htmlFor: `mp-${i}`, children: "Price (RM)" }), _jsx("input", { id: `mp-${i}`, className: "input", type: "number", min: "0", step: "0.5", value: m.priceRM, placeholder: "12", onChange: (e) => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, priceRM: e.target.value } : r)) })] })] }), _jsx("div", { className: "menu-editor-axes", children: FLAVOR_AXES.map((a) => (_jsxs("div", { className: "menu-editor-axis", children: [_jsxs("span", { className: "small muted", style: { fontWeight: 600 }, children: [a.icon, " ", a.label] }), _jsx("div", { className: "seg", role: "group", "aria-label": `${a.label} for ${m.name || "dish"}`, children: [0, 1, 2, 3].map((lvl) => (_jsx("button", { type: "button", className: m[a.key] === lvl ? "active" : "", onClick: () => setMenuRows(menuRows.map((r, j) => j === i ? { ...r, [a.key]: lvl } : r)), children: lvl }, lvl))) }), _jsx("span", { className: "small faint", children: a.words[m[a.key]] })] }, a.key))) }), menuRows.length > 1 && (_jsx("button", { type: "button", className: "btn btn-ghost btn-sm", onClick: () => setMenuRows(menuRows.filter((_, j) => j !== i)), children: "Remove dish" }))] }, i))), _jsx("button", { type: "button", className: "btn btn-secondary btn-sm mt-8", onClick: () => setMenuRows([...menuRows, { name: "", priceRM: "", spice: 1, sweet: 1, sour: 0, msg: 1 }]), children: "+ Add another dish" })] }), _jsxs("div", { className: "notice notice-amber mt-16", children: [_jsx("span", { "aria-hidden": "true", children: "\u26A0\uFE0F" }), _jsx("span", { children: "By submitting you confirm the ownership information is accurate. False \"local\" claims are the thing this platform exists to prevent \u2014 submissions are reviewed before going live." })] }), _jsx("button", { className: "btn btn-primary btn-block mt-16", style: { minHeight: 52 }, onClick: submit, disabled: busy, children: busy ? "Submitting…" : "Submit for verification" }), _jsx("p", { className: "small faint", style: { textAlign: "center", marginTop: 10 }, children: "No account required for this demo submission." })] }));
}
// ── Admin console ────────────────────────────────────────────────────────────
function AdminConsole() {
    const [tab, setTab] = useState("pending");
    const [, force] = useState(0);
    const [toast, setToast] = useToast();
    const [editing, setEditing] = useState(null);
    useEffect(() => {
        const h = () => force((n) => n + 1);
        window.addEventListener("localloop:change", h);
        return () => window.removeEventListener("localloop:change", h);
    }, []);
    const all = getAllBusinesses();
    const pending = all.filter((b) => b.status === "pending");
    const approved = all.filter((b) => b.status === "approved");
    const reviews = getAllReviews();
    const impact = getImpactSummary();
    const act = (fn, msg) => { fn(); setToast(msg); };
    return (_jsxs("div", { className: "page", children: [_jsxs("div", { className: "topbar", children: [_jsx("h1", { children: "Admin console" }), _jsx("span", { className: "badge badge-gray", children: "demo access" })] }), _jsxs("div", { className: "notice notice-amber", children: [_jsx("span", { "aria-hidden": "true", children: "\uD83D\uDD10" }), _jsx("span", { children: "Verification is the product's core promise. In production this console sits behind Supabase Auth + RLS with admin-only roles; demo access is intentionally open here so you can try the full flow." })] }), _jsxs("div", { className: "chip-row mt-16", children: [_jsxs("button", { className: `chip ${tab === "pending" ? "active" : ""}`, onClick: () => setTab("pending"), children: ["Verification queue (", pending.length, ")"] }), _jsxs("button", { className: `chip ${tab === "all" ? "active" : ""}`, onClick: () => setTab("all"), children: ["All businesses (", approved.length, ")"] }), _jsxs("button", { className: `chip ${tab === "reviews" ? "active" : ""}`, onClick: () => setTab("reviews"), children: ["Reviews (", reviews.length, ")"] }), _jsx("button", { className: `chip ${tab === "impact" ? "active" : ""}`, onClick: () => setTab("impact"), children: "Impact" })] }), tab === "pending" && (pending.length === 0 ? (_jsx(EmptyState, { icon: "\u2705", title: "Queue is clear", body: "No businesses are waiting for verification right now." })) : (pending.map((b) => (_jsxs("div", { className: "card card-pad mt-16", children: [_jsxs("div", { className: "row-between", children: [_jsxs("div", { children: [_jsx("h3", { children: b.name }), _jsxs("p", { className: "small muted", style: { marginTop: 4 }, children: [catLabel(b.categoryId), " \u00B7 submitted ", b.createdAt.slice(0, 10), " \u00B7 ", b.locallyOwned ? "claims locally owned" : "not claimed locally owned", " \u00B7 ", b.localEmployeeCount, " local employees"] })] }), _jsx(VerificationBadge, { status: b.verificationStatus })] }), b.description && _jsx("p", { className: "small muted mt-8", children: b.description }), _jsxs("div", { className: "admin-actions mt-16", children: [_jsx("button", { className: "btn btn-primary btn-sm", onClick: () => act(() => adminAct({ type: "approve", id: b.id }), `${b.name} approved & listed`), children: "Approve & list" }), _jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => act(() => { adminAct({ type: "verify", id: b.id, status: "ADMIN_VERIFIED" }); adminAct({ type: "approve", id: b.id }); }, `${b.name} verified (admin) & approved`), children: "Verify ownership + approve" }), _jsx("button", { className: "btn btn-danger btn-sm", onClick: () => act(() => adminAct({ type: "reject", id: b.id }), `${b.name} rejected`), children: "Reject" }), _jsxs("button", { className: "btn btn-ghost btn-sm", onClick: () => setEditing(editing === b.id ? null : b.id), children: ["Score inputs ", editing === b.id ? "▲" : "▼"] })] }), editing === b.id && (_jsx("div", { className: "mt-16", style: { borderTop: "1px solid var(--line)", paddingTop: 12 }, children: _jsx(ScoreEditor, { b: b, onDone: () => setEditing(null) }) }))] }, b.id))))), tab === "all" && (_jsx("div", { className: "card mt-16 admin-scroll", children: _jsxs("table", { className: "admin-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Business" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Score" }), _jsx("th", { children: "Actions" })] }) }), _jsx("tbody", { children: all.map((b) => (_jsxs("tr", { children: [_jsxs("td", { children: [_jsx("b", { children: b.name }), " ", b.isDemo && _jsx("span", { className: "badge badge-demo", style: { fontSize: 9, padding: "1px 6px" }, children: "DEMO" }), _jsxs("div", { className: "small muted", children: [catLabel(b.categoryId), " \u00B7 ", b.status] })] }), _jsx("td", { children: _jsx(VerificationBadge, { status: b.verificationStatus }) }), _jsx("td", { className: "tnum", children: b.localScore }), _jsxs("td", { children: [_jsxs("div", { className: "admin-actions", children: [b.status !== "approved" && _jsx("button", { className: "btn btn-secondary btn-sm", onClick: () => act(() => adminAct({ type: "approve", id: b.id }), "Approved"), children: "Approve" }), b.status === "approved" && _jsx("button", { className: "btn btn-danger btn-sm", onClick: () => act(() => adminAct({ type: "reject", id: b.id }), "Unlisted"), children: "Unlist" }), _jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setEditing(editing === b.id ? null : b.id), children: "Score" })] }), editing === b.id && (_jsx("div", { className: "mt-8", style: { minWidth: 260 }, children: _jsx(ScoreEditor, { b: b, onDone: () => setEditing(null) }) }))] })] }, b.id))) })] }) })), tab === "reviews" && (reviews.length === 0 ? (_jsx(EmptyState, { icon: "\u270D\uFE0F", title: "No reviews", body: "Tourist reviews will appear here for moderation." })) : (_jsx("div", { className: "card mt-16", children: _jsxs("table", { className: "admin-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Review" }), _jsx("th", { children: "Business" }), _jsx("th", {})] }) }), _jsx("tbody", { children: reviews.map((r) => {
                                const b = getBusinessById(r.businessId);
                                return (_jsxs("tr", { children: [_jsxs("td", { children: [_jsx("b", { children: r.author }), " ", _jsx("span", { className: "stars", children: "★".repeat(r.rating) }), _jsx("div", { className: "small muted", children: r.text }), _jsxs("div", { className: "small faint", children: [r.visitedDate, r.verifiedVisit ? " · verified visit" : ""] })] }), _jsx("td", { className: "small", children: b?.name ?? r.businessId }), _jsx("td", { children: _jsx("button", { className: "btn btn-danger btn-sm", onClick: () => act(() => deleteReview(r.id), "Review removed"), children: "Remove" }) })] }, r.id));
                            }) })] }) }))), tab === "impact" && (_jsxs("div", { className: "card card-pad mt-16", children: [_jsx("h3", { children: "Tourist activity & local impact" }), _jsxs("div", { className: "stat-grid mt-16", children: [_jsxs("div", { className: "stat", children: [_jsx("div", { className: "v tnum", children: getApprovedBusinesses().length }), _jsx("div", { className: "k", children: "Listed businesses" })] }), _jsxs("div", { className: "stat", children: [_jsx("div", { className: "v tnum", children: impact.businessesVisited }), _jsx("div", { className: "k", children: "Places visited" })] }), _jsxs("div", { className: "stat", children: [_jsxs("div", { className: "v tnum", children: ["RM", impact.estimatedSpendRM] }), _jsx("div", { className: "k", children: "Est. local spending" })] })] }), _jsx("p", { className: "small faint mt-8", children: "Demo numbers only. In production these aggregate from anonymized tourist sessions \u2014 never from fake data presented as real." }), _jsx("div", { className: "mt-16", children: _jsx("button", { className: "btn btn-danger btn-sm", onClick: () => { resetDemoData(); setToast("Demo data reset"); force((n) => n + 1); }, children: "Reset demo data" }) })] })), toast && _jsx(Toast, { message: toast })] }));
}
function ScoreEditor({ b, onDone }) {
    const [inputs, setInputs] = useState(b.scoreInputs);
    const clamp = (v, max) => Math.max(0, Math.min(max, Math.min(v, max)));
    const apply = () => {
        adminAct({ type: "editScore", id: b.id, inputs });
        onDone();
    };
    return (_jsxs("div", { className: "stack", children: [[
                ["ownership", "Local ownership", 30],
                ["community", "Community presence", 20],
                ["localProducts", "Local products", 20],
                ["independence", "Independent business", 15],
                ["sustainability", "Sustainability", 10],
                ["reviews", "Visitor reviews", 5],
            ].map(([key, label, max]) => (_jsxs("label", { className: "score-factor", children: [_jsx("span", { className: "name", children: label }), _jsx("input", { className: "input", type: "number", min: 0, max: max, value: inputs[key], style: { width: 84, minHeight: 36, textAlign: "right" }, onChange: (e) => setInputs({ ...inputs, [key]: clamp(parseInt(e.target.value || "0", 10) || 0, max) }) })] }, key))), _jsxs("div", { className: "row", children: [_jsxs("button", { className: "btn btn-primary btn-sm", onClick: apply, children: ["Save score (", Object.values(inputs).reduce((a, c) => a + c, 0), "/100)"] }), _jsx("button", { className: "btn btn-ghost btn-sm", onClick: onDone, children: "Cancel" })] })] }));
}
function AssistantPanel({ onClose, nav }) {
    const [msgs, setMsgs] = useState([
        {
            role: "bot",
            text: "Hi! I'm the LocalLoop assistant. Ask me where to eat, shop, or explore — I only recommend places in the LocalLoop database, and I'll say so when I can't find enough options.",
        },
    ]);
    const [input, setInput] = useState("");
    const logRef = useRef(null);
    useEffect(() => {
        logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
    }, [msgs]);
    const ask = (text) => {
        const q = text.trim();
        if (!q)
            return;
        const reply = answerQuery(q, null);
        setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: reply.text, reply }]);
        setInput("");
    };
    const suggestions = ["Where can I have breakfast near me?", "I only have RM30.", "Show me something genuinely local.", "I have 2 hours before my bus."];
    return (_jsxs("div", { className: "assistant-panel", role: "dialog", "aria-label": "LocalLoop assistant", children: [_jsxs("div", { className: "assistant-head", children: [_jsxs("div", { style: { flex: 1 }, children: [_jsx("b", { children: "LocalLoop Assistant" }), _jsx("div", { className: "small faint", children: "Grounded in the business database \u2014 no invented places" })] }), _jsx("button", { className: "btn btn-ghost btn-sm", onClick: onClose, "aria-label": "Close assistant", children: "\u2715" })] }), _jsx("div", { className: "assistant-log", ref: logRef, children: msgs.map((m, i) => (_jsxs("div", { className: `msg ${m.role === "user" ? "msg-user" : "msg-bot"}`, children: [m.text, m.reply && m.reply.cards.length > 0 && (_jsx("div", { className: "msg-cards", children: m.reply.cards.map((c) => (_jsxs("button", { className: "card card-tap", style: { padding: "10px 12px", textAlign: "left", display: "block", width: "100%" }, onClick: () => { onClose(); nav.go(`#/business/${c.id}`); }, children: [_jsx("b", { style: { fontSize: 14 }, children: c.name }), _jsxs("div", { className: "small muted tnum", style: { marginTop: 2 }, children: ["Local Score ", c.score, " \u00B7 ", c.price, " \u00B7 ", c.distance, " \u00B7 ", c.ownership] }), c.flavor && _jsxs("div", { className: "small faint", style: { marginTop: 2 }, children: ["Taste: ", c.flavor] })] }, c.id))) }))] }, i))) }), _jsx("div", { className: "assistant-chips", children: suggestions.map((s) => (_jsx("button", { className: "chip", style: { fontSize: 12.5, padding: "6px 11px", minHeight: 32 }, onClick: () => ask(s), children: s }, s))) }), _jsxs("form", { className: "assistant-input", onSubmit: (e) => { e.preventDefault(); ask(input); }, children: [_jsx("input", { className: "input", placeholder: "Ask about food, crafts, stays\u2026", value: input, onChange: (e) => setInput(e.target.value), "aria-label": "Ask the assistant" }), _jsx("button", { className: "btn btn-primary", type: "submit", "aria-label": "Send", children: "\u2191" })] })] }));
}


__exports["SubmitScreen"] = SubmitScreen;
__exports["AdminConsole"] = AdminConsole;
__exports["AssistantPanel"] = AssistantPanel;
return __exports;
} };
__modules[".tsbuild/lib/assistant.js"] = { loaded: false, exports: {}, isCjs: false, factory: function(__req
) {
var __exports = {};
const m__tsbuild_lib_store_js = __req(".tsbuild/lib/store.js");
const m__tsbuild_data_seed_js = __req(".tsbuild/data/seed.js");
const getApprovedBusinesses = m__tsbuild_lib_store_js.getApprovedBusinesses;
const isOpenNow = m__tsbuild_lib_store_js.isOpenNow;
const distanceKm = m__tsbuild_lib_store_js.distanceKm;
const flavorSummaryLine = m__tsbuild_lib_store_js.flavorSummaryLine;
const DEST = m__tsbuild_data_seed_js.DEST;
// ─── Rule-based assistant (deterministic, database-grounded) ─────────────────
// Answers ONLY from the approved-business registry. Never invents names,
// hours, or ownership. MVP stands in for the §24/§25 LLM endpoint; the
// server-side LLM API plugs in behind this same interface later.



const AFFORD_RE = /(?:rm|under|below|budget|max|less than)\s*(\d{1,4})|(\d{1,4})\s*(?:rm|ringgit)/i;
function priceMax(level) {
    return level <= 1 ? 20 : level === 2 ? 60 : 9999;
}
function budgetCap(list) {
    let cap = null;
    for (const m of list.flatMap((b) => b.description.matchAll(AFFORD_RE))) {
        void m;
    }
    return cap;
}
void budgetCap;
function timeBudget(list) {
    void list;
    return { urgent: false, hours: null };
}
function ownershipLabel(b) {
    if (b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED") {
        if (b.locallyOwned)
            return "Locally owned · verified";
        if (b.locallyOperated)
            return "Locally operated · verified";
    }
    return "Local status: Unverified";
}
function answerQuery(qRaw, userLoc) {
    const q = qRaw.toLowerCase();
    const list = getApprovedBusinesses();
    // intent detection
    const wantsEat = /eat|food|breakfast|lunch|dinner|hungry|meal|noodle|satay|coffee|kopi|cendol|dessert|steamboat|bakery|bun|roti/.test(q);
    const wantsShop = /shop|buy|craft|batik|basket|souvenir|honey|gift|book|antique/.test(q);
    const wantsStay = /stay|sleep|hotel|homestay|room|lodg/.test(q);
    const wantsExp = /experience|class|workshop|tour|boat|safari|farm|cooking|ride|bicycle/.test(q);
    const wantsWalk = /walk|walking/.test(q);
    const wantsLocalOnly = /local|authentic|genuine|real|not a chain|avoid chain|mall/.test(q);
    const budgetM = q.match(AFFORD_RE);
    const budget = budgetM ? parseInt(budgetM[1] || budgetM[2], 10) : null;
    const shortTime = /hour|minutes|before my bus|quick|hurry|2 hours|two hours/.test(q);
    const isGreeting = /^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(q.trim());
    const isThanks = /thank/.test(q);
    let pool = list;
    let intentLabel = "";
    if (wantsEat) {
        pool = pool.filter((b) => b.categoryId === "cat-food");
        intentLabel = "food";
    }
    else if (wantsShop) {
        pool = pool.filter((b) => b.categoryId === "cat-shop");
        intentLabel = "shops & crafts";
    }
    else if (wantsStay) {
        pool = pool.filter((b) => b.categoryId === "cat-stay");
        intentLabel = "places to stay";
    }
    else if (wantsExp) {
        pool = pool.filter((b) => b.categoryId === "cat-experience");
        intentLabel = "experiences";
    }
    const origin = userLoc ?? DEST.center;
    // budget filter (price levels: 1 → ≤RM20, 2 → ≤RM60)
    if (budget != null && intentLabel) {
        const cap = budget <= 20 ? 1 : budget <= 60 ? 2 : 3;
        const filtered = pool.filter((b) => b.priceLevel <= cap);
        if (filtered.length)
            pool = filtered;
    }
    // open-now preference
    const openNow = pool.filter((b) => isOpenNow(b));
    // proximity sort
    const byDist = (a, c) => distanceKm(origin.lat, origin.lng, a.latitude, a.longitude) -
        distanceKm(origin.lat, origin.lng, c.latitude, c.longitude);
    const base = (openNow.length >= 3 ? openNow : pool).slice().sort(byDist);
    // verified-local preference: verified first, then score
    const ranked = base.slice().sort((a, b) => {
        const av = a.locallyOwned && (a.verificationStatus === "ADMIN_VERIFIED" || a.verificationStatus === "OWNER_VERIFIED") ? 1 : 0;
        const bv = b.locallyOwned && (b.verificationStatus === "ADMIN_VERIFIED" || b.verificationStatus === "OWNER_VERIFIED") ? 1 : 0;
        if (av !== bv)
            return bv - av;
        return b.localScore - a.localScore;
    });
    const top = ranked.slice(0, 3);
    const fmtDist = (b) => {
        const km = distanceKm(origin.lat, origin.lng, b.latitude, b.longitude);
        return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
    };
    if (isGreeting && !wantsEat && !wantsShop && !wantsStay && !wantsExp) {
        return {
            text: `Hello! I'm the LocalLoop assistant for ${DEST.name}. I can point you to genuinely local places — food, crafts, stays, experiences. Try: "Where can I have breakfast near me?" or "Show me something genuinely local under RM30."`,
            cards: [],
            insufficient: false,
        };
    }
    if (isThanks) {
        return { text: "You're welcome. Every local place you visit keeps more of your travel budget in the community. Anything else?", cards: [], insufficient: false };
    }
    if (!intentLabel && !wantsLocalOnly && !shortTime && !wantsWalk) {
        return {
            text: "I can help you find local food, shops, homestays, experiences or attractions in Riverstone. Which are you looking for — something to eat, buy, or do?",
            cards: [],
            insufficient: false,
        };
    }
    const flavorQ = /spice|spicy|sweet|sour|msg|flavor|flavour|hot|gentle|mild/.test(q);
    if (flavorQ && !intentLabel) {
        // flavor-led query: rank food places by gentleness when asked for mild
        const wantsMild = /mild|gentle|not spicy|no spice|cant handle|can't handle/.test(q);
        const foodPool = pool.filter((b) => b.categoryId === "cat-food");
        const sorted = foodPool.slice().sort((a, b) => {
            const fa = (a.flavorProfile?.spice ?? 1) + (a.flavorProfile?.msg ?? 1);
            const fb = (b.flavorProfile?.spice ?? 1) + (b.flavorProfile?.msg ?? 1);
            return wantsMild ? fa - fb : fb - fa;
        });
        const picks = sorted.slice(0, 3);
        if (picks.length) {
            return {
                text: wantsMild
                    ? "These local kitchens have the gentlest flavors in town — spiciness, sweetness, sourness and MSG are all kept low. Every place also shows a per-dish taste guide so you can pick safely."
                    : "If you want bold local heat, these kitchens run spiciest — each dish shows a 0–3 taste guide for spiciness, sweetness, sour tempo and MSG strength.",
                cards: picks.map(toCard),
                insufficient: false,
            };
        }
    }
    if (top.length === 0) {
        return {
            text: "I couldn't find enough verified local options nearby. Try a different category or widen your budget.",
            cards: [],
            insufficient: true,
        };
    }
    const parts = [];
    if (wantsLocalOnly) {
        parts.push("These are the most strongly locally owned, verified places I know");
    }
    else if (shortTime) {
        parts.push("Given limited time, these are closest and open right now");
    }
    else if (budget != null) {
        parts.push(`Here are well-rated local picks around your RM${budget} budget`);
    }
    else {
        parts.push(`Here are top local picks for ${intentLabel || "exploring"}`);
    }
    if (wantsWalk)
        parts.push("— all within a short walk of the town core.");
    else
        parts.push("— sorted by proximity and Local Score.");
    if (openNow.length === 0 && intentLabel) {
        parts.push("Heads up: I couldn't confirm opening hours for right now, so check before you go.");
    }
    parts.push("Ownership details come straight from each business's verification record — nothing invented.");
    return {
        text: parts.join(" "),
        cards: top.map(toCard),
        insufficient: false,
    };
    function toCard(b) {
        const km = distanceKm(origin.lat, origin.lng, b.latitude, b.longitude);
        return {
            id: b.id,
            name: b.name,
            score: b.localScore,
            price: b.priceLevel === 1 ? "RM5–20" : b.priceLevel === 2 ? "RM20–60" : "RM60+",
            distance: km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`,
            ownership: ownershipLabel(b),
            flavor: flavorSummaryLine(b) || "taste guide inside",
        };
    }
}


__exports["answerQuery"] = answerQuery;
return __exports;
} };
__req(".tsbuild/main.js");
