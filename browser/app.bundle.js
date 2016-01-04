!function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";var r=e("webworkify"),o=e("main-loop"),i=e("local-links"),s=i.getLocalPathname,a=e("events").EventEmitter,u=new a,c=u.emit.bind(u),l=r(e("./worker.thread")),f=e("../views/index").bind(null,c),p=document.getElementById("app"),v=o({url:window.location.pathname,count:0},f,{create:e("virtual-dom/create-element"),diff:e("virtual-dom/diff"),patch:e("virtual-dom/patch")});window.requestAnimationFrame(function(){p.replaceChild(v.target,p.firstChild)}),l.onmessage=function(e){var t=e.data,n=t.url;v.update(t),window.location.pathname!==n&&window.history.pushState(null,null,n)},l.postMessage({type:"start",payload:{url:window.location.pathname}}),window.addEventListener("popstate",function(){l.postMessage({type:"setUrl",payload:window.location.pathname})}),document.body.addEventListener("click",function(e){var t=s(e);return t?(e.preventDefault(),void l.postMessage({type:"setUrl",payload:t})):void 0}),u.on("increment",function(){l.postMessage({type:"increment"})}),u.on("decrement",function(){l.postMessage({type:"decrement"})})},{"../views/index":50,"./worker.thread":2,events:10,"local-links":15,"main-loop":16,"virtual-dom/create-element":20,"virtual-dom/diff":21,"virtual-dom/patch":23,webworkify:46}],2:[function(e,t,n){"use strict";t.exports=function(e){var t={count:0};e.onmessage=function(n){var r=n.data,o=r.type,i=r.payload,s={start:function(){t.url=i.url},setUrl:function(){t.url=i},increment:function(){t.count++},decrement:function(){t.count--}};s[o](),e.postMessage(t)}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){t.exports=function(e){var t,n=String.prototype.split,r=/()??/.exec("")[1]===e;return t=function(t,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return n.call(t,o,i);var s,a,u,c,l=[],f=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),p=0,o=new RegExp(o.source,f+"g");for(t+="",r||(s=new RegExp("^"+o.source+"$(?!\\s)",f)),i=i===e?-1>>>0:i>>>0;(a=o.exec(t))&&(u=a.index+a[0].length,!(u>p&&(l.push(t.slice(p,a.index)),!r&&a.length>1&&a[0].replace(s,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(a[t]=e)}),a.length>1&&a.index<t.length&&Array.prototype.push.apply(l,a.slice(1)),c=a[0].length,p=u,l.length>=i)));)o.lastIndex===a.index&&o.lastIndex++;return p===t.length?(c||!o.test(""))&&l.push(""):l.push(t.slice(p)),l.length>i?l.slice(0,i):l}}()},{}],5:[function(e,t,n){function r(){l=!1,a.length?c=a.concat(c):f=-1,c.length&&o()}function o(){if(!l){var e=setTimeout(r);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function s(){}var a,u=t.exports={},c=[],l=!1,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new i(e,t)),1!==c.length||l||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],6:[function(e,t,n){function r(e){return e&&"object"==typeof e?u(e)||c(e)?e:a(e)?i(e,r):s(f(e),function(t,n){var i=o(n);return t[i]=r(e[n]),t},{}):e}function o(e){return e.replace(/[_.-](\w|$)/g,function(e,t){return t.toUpperCase()})}function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}function s(e,t,n){if(e.reduce)return e.reduce(t,n);for(var r=0;r<e.length;r++)n=t(n,e[r],r);return n}t.exports=function(e){return"string"==typeof e?o(e):r(e)};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},u=function(e){return"[object Date]"===Object.prototype.toString.call(e)},c=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},l=Object.prototype.hasOwnProperty,f=Object.keys||function(e){var t=[];for(var n in e)l.call(e,n)&&t.push(n);return t}},{}],7:[function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)o.call(n,r)&&(e[r]=n[r])}return e}t.exports=r;var o=Object.prototype.hasOwnProperty},{}],8:[function(e,t,n){function r(e){function t(t){var r=new Error;Object.defineProperty(r,"type",{value:r.type,enumerable:!0,writable:!0,configurable:!0});var o=s({},e,t);return s(r,o),r.message=i(n,o),r}if(!e)throw new Error("args is required");if(!e.type)throw new Error("args.type is required");if(!e.message)throw new Error("args.message is required");var n=e.message;if(e.type&&!e.name){var r=o(e.type)+"Error";e.name=r[0].toUpperCase()+r.substr(1)}return s(t,e),t._name=e.name,t}var o=e("camelize"),i=e("string-template"),s=e("xtend/mutable");t.exports=r},{camelize:6,"string-template":19,"xtend/mutable":7}],9:[function(e,t,n){"use strict";function r(e){var t=e[s];return t||(t=e[s]={}),t}var o=e("individual/one-version"),i="7";o("ev-store",i);var s="__EV_STORE_KEY@"+i;t.exports=r},{"individual/one-version":13}],10:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!i(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,u,c;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(s(n))for(i=Array.prototype.slice.call(arguments,1),c=n.slice(),r=c.length,u=0;r>u;u++)c[u].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,i,a;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],i=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=i;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],11:[function(e,t,n){(function(n){var r="undefined"!=typeof n?n:"undefined"!=typeof window?window:{},o=e("min-document");if("undefined"!=typeof document)t.exports=document;else{var i=r["__GLOBAL_DOCUMENT_CACHE@4"];i||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=o),t.exports=i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":3}],12:[function(e,t,n){(function(e){"use strict";function n(e,t){return e in r?r[e]:(r[e]=t,t)}var r="undefined"!=typeof window?window:"undefined"!=typeof e?e:{};t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(e,t,n){"use strict";function r(e,t,n){var r="__INDIVIDUAL_ONE_VERSION_"+e,i=r+"_ENFORCE_SINGLETON",s=o(i,t);if(s!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+s+" installed.\nThis means you cannot install version "+t);return o(r,n)}var o=e("./index.js");t.exports=r},{"./index.js":12}],14:[function(e,t,n){"use strict";t.exports=function(e){return"object"==typeof e&&null!==e}},{}],15:[function(e,t,n){function r(e){return e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}function o(e){return r(e)&&"A"===e.tagName}function i(e){do if(o(e))return e;while(e=e.parentNode)}function s(e){return"/"!==e.charAt(0)&&(e="/"+e),e}function a(e){return"object"==typeof e&&"button"in e&&0!==e.button}function u(e,t,n){if(e||(e={}),e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return null;if(a(e))return null;if(t&&!o(t)&&(t=i(t)),!t||!o(t))return null;if("_blank"===t.target)return null;var r,u=s(t.pathname),c=s(window.location.pathname),l=t.host,f=t.port,p=window.location.host,v=window.location.port,h=t.hash||(t.href.indexOf("#")>-1?"#"+t.href.split("#")[1]:null);return v||!f||"80"!==f&&"443"!==f||(p+=":"+f,l+=-1===l.indexOf(f,l.length-f.length)?":"+f:""),l===p?(r=u===c&&t.search===window.location.search&&h,n===!0?r:r?null:u+(t.search||"")+(h||"")):null}function c(e,t){var n=null,o=null;return 2===arguments.length?(n=e,o=t):r(e)?o=e:n=e,!o&&n&&n.target&&(o=n.target),[n,o]}function l(){return u.apply(null,c.apply(null,arguments))}function f(){return u.apply(null,c.apply(null,arguments).concat(!0))}function p(){var e=Array.prototype.slice.call(arguments),t=e[e.length-1],n=window.location.pathname;return"string"==typeof t&&(n=t,e=e.slice(0,-1)),l.apply(null,e)===s(n)}t.exports={isLocal:u,pathname:l,getLocalPathname:l,hash:f,getLocalHash:f,active:p,isActive:p}},{}],16:[function(e,t,n){function r(e,t,n){function r(e){if(h)throw s({diff:e._diff,stringDiff:JSON.stringify(e._diff)});null!==a||f||(f=!0,o(i)),a=e,d.state=e}function i(){if(f=!1,null!==a){h=!0;var e=t(a);if(n.createOnly)h=!1,u(e,n);else{var r=c(p,e,n);h=!1,v=l(v,r,n)}p=e,a=null}}n=n||{};var a=e,u=n.create,c=n.diff,l=n.patch,f=!1,p=n.initialTree||t(a),v=n.target||u(p,n),h=!1;a=null;var d={state:e,target:v,update:r};return d}var o=e("raf"),i=e("error/typed"),s=i({type:"main-loop.invalid.update.in-render",message:"main-loop: Unexpected update occurred in loop.\nWe are currently rendering a view, you can't change state right now.\nThe diff is: {stringDiff}.\nSUGGESTED FIX: find the state mutation in your view or rendering function and remove it.\nThe view should not have any side effects.\n",diff:null,stringDiff:null});t.exports=r},{"error/typed":8,raf:18}],17:[function(e,t,n){(function(e){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:5}],18:[function(e,t,n){for(var r=e("performance-now"),o="undefined"==typeof window?{}:window,i=["moz","webkit"],s="AnimationFrame",a=o["request"+s],u=o["cancel"+s]||o["cancelRequest"+s],c=!0,l=0;l<i.length&&!a;l++)a=o[i[l]+"Request"+s],u=o[i[l]+"Cancel"+s]||o[i[l]+"CancelRequest"+s];if(!a||!u){c=!1;var f=0,p=0,v=[],h=1e3/60;a=function(e){if(0===v.length){var t=r(),n=Math.max(0,h-(t-f));f=n+t,setTimeout(function(){var e=v.slice(0);v.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return v.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<v.length;t++)v[t].handle===e&&(v[t].cancelled=!0)}}t.exports=function(e){return c?a.call(o,function(){try{e.apply(this,arguments)}catch(t){setTimeout(function(){throw t},0)}}):a.call(o,e)},t.exports.cancel=function(){u.apply(o,arguments)}},{"performance-now":17}],19:[function(e,t,n){function r(e){var t;return t=2===arguments.length&&"object"==typeof arguments[1]?arguments[1]:i.call(arguments,1),t&&t.hasOwnProperty||(t={}),e.replace(o,function(n,r,o){var i;return"{"===e[o-1]&&"}"===e[o+n.length]?r:(i=t.hasOwnProperty(r)?t[r]:null,null===i||void 0===i?"":i)})}var o=/\{([0-9a-zA-Z]+)\}/g,i=Array.prototype.slice;t.exports=r},{}],20:[function(e,t,n){var r=e("./vdom/create-element.js");t.exports=r},{"./vdom/create-element.js":25}],21:[function(e,t,n){var r=e("./vtree/diff.js");t.exports=r},{"./vtree/diff.js":45}],22:[function(e,t,n){var r=e("./virtual-hyperscript/index.js");t.exports=r},{"./virtual-hyperscript/index.js":32}],23:[function(e,t,n){var r=e("./vdom/patch.js");t.exports=r},{"./vdom/patch.js":28}],24:[function(e,t,n){function r(e,t,n){for(var r in t){var s=t[r];void 0===s?o(e,r,s,n):u(s)?(o(e,r,s,n),s.hook&&s.hook(e,r,n?n[r]:void 0)):a(s)?i(e,t,n,r,s):e[r]=s}}function o(e,t,n,r){if(r){var o=r[t];if(u(o))o.unhook&&o.unhook(e,t,n);else if("attributes"===t)for(var i in o)e.removeAttribute(i);else if("style"===t)for(var s in o)e.style[s]="";else"string"==typeof o?e[t]="":e[t]=null}}function i(e,t,n,r,o){var i=n?n[r]:void 0;if("attributes"!==r){if(i&&a(i)&&s(i)!==s(o))return void(e[r]=o);a(e[r])||(e[r]={});var u="style"===r?"":void 0;for(var c in o){var l=o[c];e[r][c]=void 0===l?u:l}}else for(var f in o){var p=o[f];void 0===p?e.removeAttribute(f):e.setAttribute(f,p)}}function s(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var a=e("is-object"),u=e("../vnode/is-vhook.js");t.exports=r},{"../vnode/is-vhook.js":36,"is-object":14}],25:[function(e,t,n){function r(e,t){var n=t?t.document||o:o,l=t?t.warn:null;if(e=c(e).a,u(e))return e.init();if(a(e))return n.createTextNode(e.text);if(!s(e))return l&&l("Item is not a valid virtual dom node",e),null;var f=null===e.namespace?n.createElement(e.tagName):n.createElementNS(e.namespace,e.tagName),p=e.properties;i(f,p);for(var v=e.children,h=0;h<v.length;h++){var d=r(v[h],t);d&&f.appendChild(d)}return f}var o=e("global/document"),i=e("./apply-properties"),s=e("../vnode/is-vnode.js"),a=e("../vnode/is-vtext.js"),u=e("../vnode/is-widget.js"),c=e("../vnode/handle-thunk.js");t.exports=r},{"../vnode/handle-thunk.js":34,"../vnode/is-vnode.js":37,"../vnode/is-vtext.js":38,"../vnode/is-widget.js":39,"./apply-properties":24,"global/document":11}],26:[function(e,t,n){function r(e,t,n,r){return n&&0!==n.length?(n.sort(s),o(e,t,n,r,0)):{}}function o(e,t,n,r,s){if(r=r||{},e){i(n,s,s)&&(r[s]=e);var u=t.children;if(u)for(var c=e.childNodes,l=0;l<t.children.length;l++){s+=1;var f=u[l]||a,p=s+(f.count||0);i(n,s,p)&&o(c[l],f,n,r,s),s=p}}return r}function i(e,t,n){if(0===e.length)return!1;for(var r,o,i=0,s=e.length-1;s>=i;){if(r=(s+i)/2>>0,o=e[r],i===s)return o>=t&&n>=o;if(t>o)i=r+1;else{if(!(o>n))return!0;s=r-1}}return!1}function s(e,t){return e>t?1:-1}var a={};t.exports=r},{}],27:[function(e,t,n){function r(e,t,n){var r=e.type,c=e.vNode,v=e.patch;switch(r){case h.REMOVE:return o(t,c);case h.INSERT:return i(t,v,n);case h.VTEXT:return s(t,c,v,n);case h.WIDGET:return a(t,c,v,n);case h.VNODE:return u(t,c,v,n);case h.ORDER:return l(t,v),t;case h.PROPS:return p(t,v,c.properties),t;case h.THUNK:return f(t,n.patch(t,v,n));default:return t}}function o(e,t){var n=e.parentNode;return n&&n.removeChild(e),c(e,t),null}function i(e,t,n){var r=n.render(t,n);return e&&e.appendChild(r),e}function s(e,t,n,r){var o;if(3===e.nodeType)e.replaceData(0,e.length,n.text),o=e;else{var i=e.parentNode;o=r.render(n,r),i&&o!==e&&i.replaceChild(o,e)}return o}function a(e,t,n,r){var o,i=d(t,n);o=i?n.update(t,e)||e:r.render(n,r);var s=e.parentNode;return s&&o!==e&&s.replaceChild(o,e),i||c(e,t),o}function u(e,t,n,r){var o=e.parentNode,i=r.render(n,r);return o&&i!==e&&o.replaceChild(i,e),i}function c(e,t){"function"==typeof t.destroy&&v(t)&&t.destroy(e)}function l(e,t){for(var n,r,o,i=e.childNodes,s={},a=0;a<t.removes.length;a++)r=t.removes[a],n=i[r.from],r.key&&(s[r.key]=n),e.removeChild(n);for(var u=i.length,c=0;c<t.inserts.length;c++)o=t.inserts[c],n=s[o.key],e.insertBefore(n,o.to>=u++?null:i[o.to])}function f(e,t){return e&&t&&e!==t&&e.parentNode&&e.parentNode.replaceChild(t,e),t}var p=e("./apply-properties"),v=e("../vnode/is-widget.js"),h=e("../vnode/vpatch.js"),d=e("./update-widget");t.exports=r},{"../vnode/is-widget.js":39,"../vnode/vpatch.js":42,"./apply-properties":24,"./update-widget":29}],28:[function(e,t,n){function r(e,t,n){return n=n||{},n.patch=n.patch&&n.patch!==r?n.patch:o,n.render=n.render||c,n.patch(e,t,n)}function o(e,t,n){var r=s(t);if(0===r.length)return e;var o=l(e,t.a,r),u=e.ownerDocument;n.document||u===a||(n.document=u);for(var c=0;c<r.length;c++){var f=r[c];e=i(e,o[f],t[f],n)}return e}function i(e,t,n,r){if(!t)return e;var o;if(u(n))for(var i=0;i<n.length;i++)o=f(n[i],t,r),t===e&&(e=o);else o=f(n,t,r),t===e&&(e=o);return e}function s(e){var t=[];for(var n in e)"a"!==n&&t.push(Number(n));return t}var a=e("global/document"),u=e("x-is-array"),c=e("./create-element"),l=e("./dom-index"),f=e("./patch-op");t.exports=r},{"./create-element":25,"./dom-index":26,"./patch-op":27,"global/document":11,"x-is-array":47}],29:[function(e,t,n){function r(e,t){return o(e)&&o(t)?"name"in e&&"name"in t?e.id===t.id:e.init===t.init:!1}var o=e("../vnode/is-widget.js");t.exports=r},{"../vnode/is-widget.js":39}],30:[function(e,t,n){"use strict";function r(e){return this instanceof r?void(this.value=e):new r(e)}var o=e("ev-store");t.exports=r,r.prototype.hook=function(e,t){var n=o(e),r=t.substr(3);n[r]=this.value},r.prototype.unhook=function(e,t){var n=o(e),r=t.substr(3);n[r]=void 0}},{"ev-store":9}],31:[function(e,t,n){"use strict";function r(e){return this instanceof r?void(this.value=e):new r(e)}t.exports=r,r.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},{}],32:[function(e,t,n){"use strict";function r(e,t,n){var r,s,u,c,l=[];return!n&&a(t)&&(n=t,s={}),s=s||t||{},r=g(e,s),s.hasOwnProperty("key")&&(u=s.key,s.key=void 0),s.hasOwnProperty("namespace")&&(c=s.namespace,s.namespace=void 0),"INPUT"!==r||c||!s.hasOwnProperty("value")||void 0===s.value||m(s.value)||(s.value=w(s.value)),i(s),void 0!==n&&null!==n&&o(n,l,r,s),new f(r,s,l,u,c)}function o(e,t,n,r){if("string"==typeof e)t.push(new p(e));else if("number"==typeof e)t.push(new p(String(e)));else if(s(e))t.push(e);else{if(!l(e)){if(null===e||void 0===e)return;throw u({foreignObject:e,parentVnode:{tagName:n,properties:r}})}for(var i=0;i<e.length;i++)o(e[i],t,n,r)}}function i(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];if(m(n))continue;"ev-"===t.substr(0,3)&&(e[t]=x(n))}}function s(e){return v(e)||h(e)||d(e)||y(e)}function a(e){return"string"==typeof e||l(e)||s(e)}function u(e){var t=new Error;return t.type="virtual-hyperscript.unexpected.virtual-element",t.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+c(e.foreignObject)+".\nThe parent vnode is:\n"+c(e.parentVnode),t.foreignObject=e.foreignObject,t.parentVnode=e.parentVnode,t}function c(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}var l=e("x-is-array"),f=e("../vnode/vnode.js"),p=e("../vnode/vtext.js"),v=e("../vnode/is-vnode"),h=e("../vnode/is-vtext"),d=e("../vnode/is-widget"),m=e("../vnode/is-vhook"),y=e("../vnode/is-thunk"),g=e("./parse-tag.js"),w=e("./hooks/soft-set-hook.js"),x=e("./hooks/ev-hook.js");t.exports=r},{"../vnode/is-thunk":35,"../vnode/is-vhook":36,"../vnode/is-vnode":37,"../vnode/is-vtext":38,"../vnode/is-widget":39,"../vnode/vnode.js":41,"../vnode/vtext.js":43,"./hooks/ev-hook.js":30,"./hooks/soft-set-hook.js":31,"./parse-tag.js":33,"x-is-array":47}],33:[function(e,t,n){"use strict";function r(e,t){if(!e)return"DIV";var n=!t.hasOwnProperty("id"),r=o(e,i),a=null;s.test(r[1])&&(a="DIV");var u,c,l,f;for(f=0;f<r.length;f++)c=r[f],c&&(l=c.charAt(0),a?"."===l?(u=u||[],u.push(c.substring(1,c.length))):"#"===l&&n&&(t.id=c.substring(1,c.length)):a=c);return u&&(t.className&&u.push(t.className),t.className=u.join(" ")),t.namespace?a:a.toUpperCase()}var o=e("browser-split"),i=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,s=/^\.|#/;t.exports=r},{"browser-split":4}],34:[function(e,t,n){function r(e,t){var n=e,r=t;return u(t)&&(r=o(t,e)),u(e)&&(n=o(e,null)),{a:n,b:r}}function o(e,t){var n=e.vnode;if(n||(n=e.vnode=e.render(t)),!(i(n)||s(n)||a(n)))throw new Error("thunk did not return a valid node");return n}var i=e("./is-vnode"),s=e("./is-vtext"),a=e("./is-widget"),u=e("./is-thunk");t.exports=r},{"./is-thunk":35,"./is-vnode":37,"./is-vtext":38,"./is-widget":39}],35:[function(e,t,n){function r(e){return e&&"Thunk"===e.type}t.exports=r},{}],36:[function(e,t,n){function r(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}t.exports=r},{}],37:[function(e,t,n){function r(e){return e&&"VirtualNode"===e.type&&e.version===o}var o=e("./version");t.exports=r},{"./version":40}],38:[function(e,t,n){function r(e){return e&&"VirtualText"===e.type&&e.version===o}var o=e("./version");t.exports=r},{"./version":40}],39:[function(e,t,n){function r(e){return e&&"Widget"===e.type}t.exports=r},{}],40:[function(e,t,n){t.exports="2"},{}],41:[function(e,t,n){function r(e,t,n,r,o){this.tagName=e,this.properties=t||c,this.children=n||l,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof o?o:null;var f,p=n&&n.length||0,v=0,h=!1,d=!1,m=!1;for(var y in t)if(t.hasOwnProperty(y)){var g=t[y];u(g)&&g.unhook&&(f||(f={}),f[y]=g)}for(var w=0;p>w;w++){var x=n[w];i(x)?(v+=x.count||0,!h&&x.hasWidgets&&(h=!0),!d&&x.hasThunks&&(d=!0),m||!x.hooks&&!x.descendantHooks||(m=!0)):!h&&s(x)?"function"==typeof x.destroy&&(h=!0):!d&&a(x)&&(d=!0)}this.count=p+v,this.hasWidgets=h,this.hasThunks=d,this.hooks=f,this.descendantHooks=m}var o=e("./version"),i=e("./is-vnode"),s=e("./is-widget"),a=e("./is-thunk"),u=e("./is-vhook");t.exports=r;var c={},l=[];r.prototype.version=o,r.prototype.type="VirtualNode"},{"./is-thunk":35,"./is-vhook":36,"./is-vnode":37,"./is-widget":39,"./version":40}],42:[function(e,t,n){function r(e,t,n){this.type=Number(e),this.vNode=t,this.patch=n}var o=e("./version");r.NONE=0,r.VTEXT=1,r.VNODE=2,r.WIDGET=3,r.PROPS=4,r.ORDER=5,r.INSERT=6,r.REMOVE=7,r.THUNK=8,t.exports=r,r.prototype.version=o,r.prototype.type="VirtualPatch"},{"./version":40}],43:[function(e,t,n){function r(e){this.text=String(e)}var o=e("./version");t.exports=r,r.prototype.version=o,r.prototype.type="VirtualText"},{"./version":40}],44:[function(e,t,n){function r(e,t){var n;for(var a in e){a in t||(n=n||{},n[a]=void 0);var u=e[a],c=t[a];if(u!==c)if(i(u)&&i(c))if(o(c)!==o(u))n=n||{},n[a]=c;else if(s(c))n=n||{},n[a]=c;else{var l=r(u,c);l&&(n=n||{},n[a]=l)}else n=n||{},n[a]=c}for(var f in t)f in e||(n=n||{},n[f]=t[f]);return n}function o(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var i=e("is-object"),s=e("../vnode/is-vhook");t.exports=r},{"../vnode/is-vhook":36,"is-object":14}],45:[function(e,t,n){function r(e,t){var n={a:e};return o(e,t,n,0),n}function o(e,t,n,r){if(e!==t){var o=n[r],a=!1;if(k(e)||k(t))u(e,t,n,r);else if(null==t)x(e)||(s(e,n,r),o=n[r]),o=d(o,new y(y.REMOVE,e,t));else if(g(t))if(g(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var c=_(e.properties,t.properties);c&&(o=d(o,new y(y.PROPS,e,c))),o=i(e,t,n,o,r)}else o=d(o,new y(y.VNODE,e,t)),a=!0;else o=d(o,new y(y.VNODE,e,t)),a=!0;else w(t)?w(e)?e.text!==t.text&&(o=d(o,new y(y.VTEXT,e,t))):(o=d(o,new y(y.VTEXT,e,t)),a=!0):x(t)&&(x(e)||(a=!0),o=d(o,new y(y.WIDGET,e,t)));o&&(n[r]=o),a&&s(e,n,r)}}function i(e,t,n,r,i){for(var s=e.children,a=p(s,t.children),u=a.children,c=s.length,l=u.length,f=c>l?c:l,v=0;f>v;v++){var h=s[v],m=u[v];i+=1,h?o(h,m,n,i):m&&(r=d(r,new y(y.INSERT,null,m))),g(h)&&h.count&&(i+=h.count)}return a.moves&&(r=d(r,new y(y.ORDER,e,a.moves))),r}function s(e,t,n){l(e,t,n),a(e,t,n)}function a(e,t,n){if(x(e))"function"==typeof e.destroy&&(t[n]=d(t[n],new y(y.REMOVE,e,null)));else if(g(e)&&(e.hasWidgets||e.hasThunks))for(var r=e.children,o=r.length,i=0;o>i;i++){var s=r[i];n+=1,a(s,t,n),g(s)&&s.count&&(n+=s.count)}else k(e)&&u(e,null,t,n)}function u(e,t,n,o){var i=b(e,t),s=r(i.a,i.b);c(s)&&(n[o]=new y(y.THUNK,null,s))}function c(e){for(var t in e)if("a"!==t)return!0;return!1}function l(e,t,n){if(g(e)){if(e.hooks&&(t[n]=d(t[n],new y(y.PROPS,e,f(e.hooks)))),e.descendantHooks||e.hasThunks)for(var r=e.children,o=r.length,i=0;o>i;i++){var s=r[i];n+=1,l(s,t,n),g(s)&&s.count&&(n+=s.count)}}else k(e)&&u(e,null,t,n)}function f(e){var t={};for(var n in e)t[n]=void 0;return t}function p(e,t){var n=h(t),r=n.keys,o=n.free;if(o.length===t.length)return{children:t,moves:null};var i=h(e),s=i.keys,a=i.free;if(a.length===e.length)return{children:t,moves:null};for(var u=[],c=0,l=o.length,f=0,p=0;p<e.length;p++){var d,m=e[p];m.key?r.hasOwnProperty(m.key)?(d=r[m.key],u.push(t[d])):(d=p-f++,u.push(null)):l>c?(d=o[c++],u.push(t[d])):(d=p-f++,u.push(null))}for(var y=c>=o.length?t.length:o[c],g=0;g<t.length;g++){var w=t[g];w.key?s.hasOwnProperty(w.key)||u.push(w):g>=y&&u.push(w)}for(var x,k=u.slice(),b=0,_=[],j=[],E=0;E<t.length;){var O=t[E];for(x=k[b];null===x&&k.length;)_.push(v(k,b,null)),x=k[b];x&&x.key===O.key?(b++,E++):O.key?(x&&x.key&&r[x.key]!==E+1?(_.push(v(k,b,x.key)),x=k[b],x&&x.key===O.key?b++:j.push({key:O.key,to:E})):j.push({key:O.key,to:E}),E++):x&&x.key&&_.push(v(k,b,x.key))}for(;b<k.length;)x=k[b],_.push(v(k,b,x&&x.key));return _.length!==f||j.length?{children:u,moves:{removes:_,inserts:j}}:{children:u,moves:null}}function v(e,t,n){return e.splice(t,1),{from:t,key:n}}function h(e){for(var t={},n=[],r=e.length,o=0;r>o;o++){var i=e[o];i.key?t[i.key]=o:n.push(o)}return{keys:t,free:n}}function d(e,t){return e?(m(e)?e.push(t):e=[e,t],e):t}var m=e("x-is-array"),y=e("../vnode/vpatch"),g=e("../vnode/is-vnode"),w=e("../vnode/is-vtext"),x=e("../vnode/is-widget"),k=e("../vnode/is-thunk"),b=e("../vnode/handle-thunk"),_=e("./diff-props");t.exports=r},{"../vnode/handle-thunk":34,"../vnode/is-thunk":35,"../vnode/is-vnode":37,"../vnode/is-vtext":38,"../vnode/is-widget":39,"../vnode/vpatch":42,"./diff-props":44,"x-is-array":47}],46:[function(e,t,n){var r=arguments[3],o=arguments[4],i=arguments[5],s=JSON.stringify;t.exports=function(e){for(var t,n=Object.keys(i),a=0,u=n.length;u>a;a++){var c=n[a],l=i[c].exports;if(l===e||l["default"]===e){t=c;break}}if(!t){t=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var f={},a=0,u=n.length;u>a;a++){var c=n[a];f[c]=c}o[t]=[Function(["require","module","exports"],"("+e+")(self)"),f]}var p=Math.floor(Math.pow(16,8)*Math.random()).toString(16),v={};v[t]=t,o[p]=[Function(["require"],"var f = require("+s(t)+");(f.default ? f.default : f)(self);"),v];var h="("+r+")({"+Object.keys(o).map(function(e){return s(e)+":["+o[e][0]+","+s(o[e][1])+"]"}).join(",")+"},{},["+s(p)+"])",d=window.URL||window.webkitURL||window.mozURL||window.msURL;return new Worker(d.createObjectURL(new Blob([h],{type:"text/javascript"})))}},{}],47:[function(e,t,n){function r(e){return"[object Array]"===i.call(e)}var o=Array.isArray,i=Object.prototype.toString;t.exports=o||r},{}],48:[function(e,t,n){"use strict";var r=e("virtual-dom/h");t.exports=function(){return r("div",["Tiny app inspired from ",r("a",{attributes:{href:"https://github.com/HenrikJoreteg/feather-app"}},["feather-app."]),r("p",["However, this uses ",r("a",{attributes:{href:"http://browserify.org/"}},["browserify"])," and ",r("a",{attributes:{href:"https://github.com/Raynos/main-loop"}},["main-loop"])," instead."])])}},{"virtual-dom/h":22}],49:[function(e,t,n){"use strict";var r=e("virtual-dom/h");t.exports=function(e,t){return r("div",[r("p",["Welcome Home"]),r("button",{onclick:function(){e("decrement")}},["-"]),r("span",[t.count]),r("button",{onclick:function(){e("increment")}},["+"])])}},{"virtual-dom/h":22}],50:[function(e,t,n){"use strict";var r=e("virtual-dom/h"),o=e("./home"),i=e("./about");t.exports=function(e,t){t||(t={}),e||(e=function(){});var n=void 0,s=t.url;return"/"===s?n=o(e,t):"/about"===s&&(n=i()),r("main",[r("h1",["example webworker & virtual-dom app"]),r("nav",[r("a",{attributes:{href:"/"}},["home"]),"|",r("a",{attributes:{href:"/about"}},["about"])]),n])}},{"./about":48,"./home":49,"virtual-dom/h":22}]},{},[1]);