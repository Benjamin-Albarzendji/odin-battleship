(()=>{var t={982:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([t.id,"body{\n    \n}",""]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=n.base?c[0]+n.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=r(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var v=o(d,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:v,references:1})}a.push(f)}return a}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=n(t,o),u=0;u<i.length;u++){var l=r(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},624:(t,e,r)=>{const n=r(601);t.exports=()=>{const t=[];let e="horizontal",r=0;return{gridCreator:()=>{for(let e=0;e<10;e+=1){t[e]=[];for(let r=0;r<10;r+=1)t[e][r]=0}return!0},shipPlacer:(r,o,i)=>{if(!((r,n,o)=>{if(r<1||r>4)return!1;if(0!==t[n][o])return!1;if("horizontal"===e){if(r+o>10)return!1;for(let e=0;e<r;e+=1)if(0!==t[n][o+e])return!1}if("vertical"===e){if(r+n>10)return!1;for(let e=0;e<r;e+=1)if(0!==t[n+e][o])return!1}return!0})(r,o,i))return!1;((r,n,o)=>{if("horizontal"===e){if(o>0&&(t[n][o-1]=1),r+o<=9&&(t[n][o+r]=1),n>=0&&n<9)for(let e=-1;e<r+1;e+=1)o+e<0||o+e>9||(t[n+1][o+e]=1);if(n<=9&&n>0)for(let e=-1;e<r+1;e+=1)o+e<0||o+e>9||(t[n-1][o+e]=1)}if("vertical"===e){if(n>0&&(t[n-1][o]=1),r+n<=9&&(t[n+r][o]=1),o>=0&&o<9)for(let e=-1;e<r+1;e+=1)n+e<0||n+e>9||(t[n+e][o+1]=1);if(o<=9&&o>0)for(let e=-1;e<r+1;e+=1)n+e<0||n+e>9||(t[n+e][o-1]=1)}})(r,o,i);const a=n(r);if("horizontal"===e)for(let e=0;e<r;e+=1)t[o][i+e]=a;if("vertical"===e)for(let e=0;e<r;e+=1)t[o+e][i]=a;return!0},toggleAlignment:()=>"horizontal"===e?(e="vertical","vertical"):(e="horizontal","horizontal"),receiveHit:(e,n)=>0===t[e][n]||1===t[e][n]?(t[e][n]="M","M"):"M"!==t[e][n]&&"H"!==t[e][n]&&("object"==typeof t[e][n]?(t[e][n].hit(),!0===t[e][n].isSunk()&&(r+=1),t[e][n]="H","H"):void 0),getBoard:()=>t}}},704:(t,e,r)=>{r(624)},601:t=>{t.exports=t=>{if(t<1||t>4)return!1;let e=0;const r=()=>e,n=()=>t;return{isSunk:(t=r(),e=n())=>t>=e,hit:()=>e+=1}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{"use strict";var t=r(379),e=r.n(t),n=r(795),o=r.n(n),i=r(569),a=r.n(i),s=r(565),c=r.n(s),u=r(216),l=r.n(u),f=r(589),p=r.n(f),d=r(982),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),e()(d.Z,v),d.Z&&d.Z.locals&&d.Z.locals;const h=r(624);r(704),h().gridCreator()})()})();