(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"*{\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif\n}\n\nheader{\n    margin: auto;\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n    margin-bottom: 30px;\n    width: 90%;\n}\n\n\nnav{\n    display: flex;\n    align-content: center;\n}\n\n.nav-button{\n    font-size: medium;\n    border: none;\n    cursor: pointer;\n    background-color: white;\n}\n\na{\n    margin: auto;\n    text-decoration: none;\n}\n\n.order{\n    font-size: medium;\n    border: none;\n    cursor: pointer;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: rgb(255, 188, 13)\n}\n\n#content{\n    margin: auto;\n    width: 90%;\n    display: block;\n}\n\n.promo{\n    width: 100%;\n    margin-bottom: 30px;\n}\n\n.textDiv{\n    display: block;\n    margin-bottom: 60px;\n}\n\nh2{\n    font-size: 2em;\n    margin: 0;\n}\n\n@media (min-width: 960px) {\n    header{\n        width: 960px;\n        margin-bottom: 60px;\n    }\n    #content{\n        width: 960px;\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n    }\n    .textDiv{\n        padding-left: 2em;\n    }\n}\n\n.menuTitle{\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),s=t.n(c),u=t(540),d=t.n(u),l=t(113),p=t.n(l),f=t(365),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;const h=t.p+"f35bafd3ab547d064eb8.jpg",v=t.p+"9c758010019f3a4cb6ab.jpg",g=t.p+"bff98cad83c95e7f77a8.jpg",y=document.querySelector("#logo"),b=document.querySelector("#home"),x=document.querySelector("#menu"),w=document.querySelector("#content"),C=new Image;function S(e,n,t){w.innerHTML="";const r=new Image;r.src=e,r.classList.add("promo"),w.appendChild(r);const o=document.createElement("div");o.classList.add("textDiv");const a=document.createElement("h2"),i=document.createTextNode(n),c=document.createElement("p"),s=document.createTextNode(t);c.appendChild(s),a.appendChild(i),o.appendChild(a),o.appendChild(c),w.appendChild(o)}function T(){S(h,"Try New Savory Chili WcDonald's Sauce","Discover the new Savory Chili WcDonald's Sauce,* straight from the WcDonald's universe. So savory and bold! It's the special move you'll shout Shounen-style when you activate and unlock 2x bonus points on your next 10 piece Chicken McNuggets® order in the app.^ Plus, enjoy four weekly, unique anime and manga exclusives."),S(v,"McD's Best Burgers Ever.” - Hamburglar","You're gonna love the hotter, juicier, tastier upgrades we've made to burgers like our Cheeseburger and Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet. Ask the Hamburglar, he can't keep his hands off of 'em. Robble, robble.")}C.src=g,y.appendChild(C),T(),b.addEventListener("click",T),x.addEventListener("click",(function(){w.innerHTML="",function(){const e=document.createElement("div"),n=document.createElement("h1"),t=document.createTextNode("McDonald's Menu");n.appendChild(t),e.appendChild(n),e.classList.add("menuTitle"),w.appendChild(e)}()}))})()})();