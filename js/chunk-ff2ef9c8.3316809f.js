(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff2ef9c8"],{"0609":function(e,t,n){"use strict";var r=n("eed4");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"0630":function(e,t,n){"use strict";var r=n("eed4");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},"085e":function(e,t,n){},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),a=n("2d00"),s=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1e58":function(e,t,n){"use strict";var r=n("eed4"),o=n("4c1f"),a=n("3b0f"),s=n("f938");function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||s.adapter;return t(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"1ecf":function(e,t,n){"use strict";n("26a4")},"26a3":function(e,t,n){},"26a4":function(e,t,n){},"27fe":function(e,t,n){"use strict";var r=n("eed4"),o=n("d481"),a=n("cb66"),s=n("1e58"),i=n("f701");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"2a5f":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"2a83":function(e,t,n){"use strict";var r=n("a541");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"2bd7":function(e,t,n){"use strict";var r=n("eed4"),o=n("e670"),a=n("27fe"),s=n("f701"),i=n("f938");function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var u=c(i);u.Axios=a,u.create=function(e){return c(s(u.defaults,e))},u.Cancel=n("72cc"),u.CancelToken=n("f0fd"),u.isCancel=n("3b0f"),u.all=function(e){return Promise.all(e)},u.spread=n("b815"),u.isAxiosError=n("aa61"),e.exports=u,e.exports.default=u},"372f":function(e,t,n){"use strict";n("26a3")},"3b0f":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"4c1f":function(e,t,n){"use strict";var r=n("eed4");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"601b":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6136:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),s=a("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6cba":function(e,t,n){e.exports=n("2bd7")},"72cc":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"76cb":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nou"},[n("Tabla"),n("Footer")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"pb-2"},[n("icons",{attrs:{icon:["fas","star"]}}),e._v(" Taula que obte dades d'una API Json externa "),n("icons",{attrs:{icon:["fas","award"]}})],1),n("table",{staticClass:"table"},[e._m(0),n("tbody",e._l(e.showRepos,(function(t){return n("tr",{key:t.id,staticClass:"mt-2"},[n("th",{attrs:{scope:"row"}},[e._v(" "+e._s(e.repositories.indexOf(t)+1)+" ")]),n("td",[e._v(" "+e._s(t.name)+" ")]),n("td",[e._v(" "+e._s(t.stargazers_count.toLocaleString())+" ")]),n("td",[t.owner.avatar_url?n("img",{staticClass:"avatar",attrs:{src:t.owner.avatar_url}}):e._e()]),n("td",[n("a",{attrs:{href:t.html_url,target:"_blank"}},[e._v("Link")])]),n("td",[t.homepage?n("a",{attrs:{href:t.homepage,target:"_blank"}},[e._v("Homepage")]):n("p",[e._v("No homepage")])])])})),0)]),e.loading?n("div",{staticClass:"justify-content-center"},[n("icons",{staticClass:"fa-spinner",attrs:{icon:["fas","spinner"]}})],1):e._e(),n("div",{staticClass:"my-4"},[n("ul",{staticClass:"pagination pagination-md justify-content-center text-center"},[n("li",{staticClass:"page-item",class:1===e.page?"disabled":""},[n("a",{staticClass:"page-link",on:{click:e.prevPage}},[e._v(" Previous ")])]),n("li",{staticClass:"page-link",staticStyle:{"background-color":"inherit"}},[e._v(" "+e._s(e.page)+" of "+e._s(e.lastPage)+" ")]),n("li",{staticClass:"page-item",class:e.page===e.lastPage?"disabled":""},[n("a",{staticClass:"page-link",on:{click:e.nextPage}},[e._v(" Next ")])])])])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Rank")]),n("th",{attrs:{scope:"col"}},[e._v("Name")]),n("th",{attrs:{scope:"col"}},[e._v("Stars")]),n("th",{attrs:{scope:"col"}},[e._v("Avatar")]),n("th",{attrs:{scope:"col"}},[e._v("Github Link")]),n("th",{attrs:{scope:"col"}},[e._v("Homepage")])])])}],i=(n("99af"),n("fb6a"),n("6cba")),c=n.n(i),u="https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page=",f={props:{name:{type:String,default:"Tabla"}},data:function(){return{githubPage:1,repositories:[],page:1,loading:!1,perPage:5}},mounted:function(){this.fetchData()},computed:{showRepos:function(){var e=(this.page-1)*this.perPage,t=e+this.perPage;return this.repositories.slice(e,t)},lastPage:function(){var e=this.repositories.length;return e/this.perPage}},methods:{fetchData:function(){var e=this;this.loading=!0,c.a.get(u+this.githubPage).then((function(t){var n=t.data;e.repositories=e.repositories.concat(n.items),e.loading=!1})).catch((function(e){throw e}))},prevPage:function(){this.page--,window.scrollTo({top:0,behavior:"smooth"})},nextPage:function(){this.page==this.lastPage-1&&(this.githubPage++,this.fetchData()),this.page++,window.scrollTo({top:0,behavior:"smooth"})}}},l=f,p=(n("372f"),n("2877")),d=Object(p["a"])(l,a,s,!1,null,null,null),h=d.exports,m=n("fd2d"),v={name:"Nou",components:{Tabla:h,Footer:m["a"]}},g=v,b=(n("1ecf"),Object(p["a"])(g,r,o,!1,null,"1a64fb9d",null));t["default"]=b.exports},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),a=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?o.f(e,s,a(0,n)):e[s]=n}},"8e69":function(e,t,n){"use strict";var r=n("eed4");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},9850:function(e,t,n){"use strict";var r=n("601b"),o=n("2a5f");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),s=n("861d"),i=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),p=n("b622"),d=n("2d00"),h=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=d>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),b=l("concat"),y=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)},x=!g||!b;r({target:"Array",proto:!0,forced:x},{concat:function(e){var t,n,r,o,a,s=i(this),l=f(s,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?s:arguments[t],y(a)){if(o=c(a.length),p+o>m)throw TypeError(v);for(n=0;n<o;n++,p++)n in a&&u(l,p,a[n])}else{if(p>=m)throw TypeError(v);u(l,p++,a)}return l.length=p,l}})},a541:function(e,t,n){"use strict";var r=n("6136");e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},aa61:function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},ae40:function(e,t,n){var r=n("83ab"),o=n("d039"),a=n("5135"),s=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(a(i,e))return i[e];t||(t={});var n=[][e],u=!!a(t,"ACCESSORS")&&t.ACCESSORS,f=a(t,0)?t[0]:c,l=a(t,1)?t[1]:void 0;return i[e]=!!n&&!o((function(){if(u&&!r)return!0;var e={length:-1};u?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,f,l)}))}},b815:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},cb66:function(e,t,n){"use strict";var r=n("eed4");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},d481:function(e,t,n){"use strict";var r=n("eed4");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),a=s.join("&")}if(a){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},e670:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ebfb:function(e,t,n){"use strict";n("085e")},eed4:function(e,t,n){"use strict";var r=n("e670"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return"undefined"===typeof e}function i(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function l(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function b(e){return"[object Function]"===o.call(e)}function y(e){return d(e)&&b(e.pipe)}function x(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function C(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function S(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=S(e[n],t):h(t)?e[n]=S({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)E(arguments[n],t);return e}function _(e,t,n){return E(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function A(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:a,isArrayBuffer:c,isBuffer:i,isFormData:u,isArrayBufferView:f,isString:l,isNumber:p,isObject:d,isPlainObject:h,isUndefined:s,isDate:m,isFile:v,isBlob:g,isFunction:b,isStream:y,isURLSearchParams:x,isStandardBrowserEnv:C,forEach:E,merge:S,extend:_,trim:w,stripBOM:A}},f0fd:function(e,t,n){"use strict";var r=n("72cc");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},f49c:function(e,t,n){"use strict";var r=n("eed4"),o=n("2a83"),a=n("0609"),s=n("d481"),i=n("9850"),c=n("fd7a"),u=n("8e69"),f=n("a541");e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,a=e.responseType&&"text"!==e.responseType?d.response:d.responseText,s={data:a,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,s),d=null}},d.onabort=function(){d&&(n(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){"undefined"===typeof l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},f701:function(e,t,n){"use strict";var r=n("eed4");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,u),r.forEach(s,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(i,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(a).concat(s).concat(i),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},f938:function(e,t,n){"use strict";(function(t){var r=n("eed4"),o=n("0630"),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function i(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("f49c")),e}var c={adapter:i(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c}).call(this,n("4362"))},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),s=n("23cb"),i=n("50c4"),c=n("fc6a"),u=n("8418"),f=n("b622"),l=n("1dde"),p=n("ae40"),d=l("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),m=f("species"),v=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!d||!h},{slice:function(e,t){var n,r,f,l=c(this),p=i(l.length),d=s(e,p),h=s(void 0===t?p:t,p);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return v.call(l,d,h);for(r=new(void 0===n?Array:n)(g(h-d,0)),f=0;d<h;d++,f++)d in l&&u(r,f,l[d]);return r.length=f,r}})},fd2d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{id:"footer",toggleable:"md",type:"light",variant:"white"}},[n("b-navbar-brand",{attrs:{href:"#"}}),n("b-container",[n("b-navbar-nav",{staticClass:"nav-fill"},[n("b-nav-item",{staticClass:"nav-link",attrs:{to:"#"}},[e._v("Política de Privacitat")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"#"}},[e._v("Servei al client")]),n("b-nav-item",{staticClass:"nav-link",attrs:{to:"#"}},[e._v("Treballa amb nosaltres")])],1)],1)],1)},o=[],a={},s=a,i=(n("ebfb"),n("2877")),c=Object(i["a"])(s,r,o,!1,null,"bf6bf43a",null);t["a"]=c.exports},fd7a:function(e,t,n){"use strict";var r=n("eed4"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,s={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}}}]);
//# sourceMappingURL=chunk-ff2ef9c8.3316809f.js.map