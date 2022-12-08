(()=>{var e={982:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.gridContainer {\n  justify-content: center;\n  display: flex;\n  gap: 250px;\n  width: 350px;\n  height: 350px;\n  /* border: solid 1px black; */\n}\n\n.gridRow {\n  display: flex;\n}\n\n.gridCell {\n  width: 35px;\n  height: 35px;\n  border: 1px solid rgba(117, 117, 117, 0.332);\n}\n\n.gridCell.ship {\n  background: rgba(33, 107, 236, 0.585);\n  border: 1px solid rgb(45, 88, 230);\n}\n\n\n.grid2 .gridCell:hover {\n  border: 1px solid red;\n}\n\n.gridCellM {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 35px;\n  height: 35px;\n  border: 1px solid rgba(117, 117, 117, 0.332);\n  background-color: rgba(228, 225, 196, 0.282);\n}\n\n.gridCellM > * {\n  position: absolute;\n  top: -35%;\n\n  font-size: 2rem;\n  text-align: center;\n}\n\n.gridCellH {\n  width: 35px;\n  height: 35px;\n  border: 1px solid rgba(117, 117, 117, 0.332);\n  background-color: red;\n}\n\n.gameOverContainer {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n.finalTextDiv{\n    font-size: 3rem;\n    position: absolute;\n    top: 17%;\n}\n\n.playAgain{\n    position: absolute;\n    top: 24%;\n}\n\n.playAgainButton{\n    position: absolute;\n    top:28%;\n    width: 90px;\n    border-radius: 15px;\n    border: none;\n    padding: 10px;\n    background-color: bla;\n    font-weight: bold;\n    transition: 1s;\n}\n\n.playAgainButton:hover{\n    cursor:pointer;\n}\n.playAgainButton:active{\ntransform: scale(0.9);\ntransition: 1s;\n}",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var l=r(e,o),s=0;s<i.length;s++){var d=n(i[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},624:(e,t,n)=>{const r=n(601);e.exports=()=>{const e=[];let t="horizontal",n=0;const o=()=>{for(let t=0;t<10;t+=1){e[t]=[];for(let n=0;n<10;n+=1)e[t][n]=0}return!0},i=(n,o,i)=>{if(!a(n,o,i))return!1;c(n,o,i);const l=r(n);if(l.setAlignment(t),"horizontal"===t)for(let t=0;t<n;t+=1)e[o][i+t]=l;if("vertical"===t)for(let t=0;t<n;t+=1)e[o+t][i]=l;return!0},a=(n,r,o)=>{if(n<1||n>4)return!1;if(0!==e[r][o])return!1;if("horizontal"===t){if(n+o>10)return!1;for(let t=0;t<n;t+=1)if(0!==e[r][o+t])return!1}if("vertical"===t){if(n+r>10)return!1;for(let t=0;t<n;t+=1)if(0!==e[r+t][o])return!1}return!0},c=(n,r,o)=>{if("horizontal"===t){if(o>0&&(e[r][o-1]=1),n+o<=9&&(e[r][o+n]=1),r>=0&&r<9)for(let t=-1;t<n+1;t+=1)o+t<0||o+t>9||(e[r+1][o+t]=1);if(r<=9&&r>0)for(let t=-1;t<n+1;t+=1)o+t<0||o+t>9||(e[r-1][o+t]=1)}if("vertical"===t){if(r>0&&(e[r-1][o]=1),n+r<=9&&(e[r+n][o]=1),o>=0&&o<9)for(let t=-1;t<n+1;t+=1)r+t<0||r+t>9||(e[r+t][o+1]=1);if(o<=9&&o>0)for(let t=-1;t<n+1;t+=1)r+t<0||r+t>9||(e[r+t][o-1]=1)}},l=()=>"horizontal"===t?(t="vertical","vertical"):(t="horizontal","horizontal");return{gridCreator:o,shipPlacer:i,toggleAlignment:l,receiveHit:(t,r)=>0===e[t][r]||1===e[t][r]?(e[t][r]="M","M"):"M"!==e[t][r]&&"H"!==e[t][r]&&("object"==typeof e[t][r]?(e[t][r].hit(),!0===e[t][r].isSunk()&&(n+=1),e[t][r].getAlignment(),e[t][r]="H","H"):void 0),getBoard:()=>e,randomizer:()=>{o(),[4,3,3,2,2,2,1,1,1,1].forEach((e=>{let t=0,n=0,r=!1;for(1===Math.floor(2*Math.random())&&l();!r;)t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random()),i(e,t,n)&&(r=!0)}))},gameOver:()=>10===n}}},704:(e,t,n)=>{const r=n(624);e.exports=(e="Player")=>{const t=r();t.gridCreator();const n=[];return{board:t,getName:()=>e,CompSendHit:()=>{let e={x:0,y:0},t=!1;for(;!t;){e={x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())},t=!0;let r=0;for(let o=0;o<n.length;o+=1)n[o].x===e.x&&n[o].y===e.y&&(r+=1),t=0===r}return n.push(e),e}}}},601:e=>{e.exports=e=>{if(e<1||e>4)return!1;let t="notSet",n=0;const r=()=>n,o=()=>e;return{isSunk:(e=r(),t=o())=>e>=t,hit:()=>n+=1,setAlignment:e=>t=e,getAlignment:()=>t}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r={};(()=>{"use strict";function e(e,t){for(let n=0;n<10;n+=1){const r=document.createElement("div");r.className="gridRow",r.setAttribute("value",n),e.appendChild(r);for(let e=0;e<10;e+=1){const o=document.createElement("div");o.className="gridCell",o.id=`${n}${t}${e}`,r.appendChild(o)}}}function t(e,t){const n=e.x,r=e.y,o=document.getElementById(`${n}P${r}`),i=t(n,r);if(o.className="M"===i?"gridCellM":"gridCellH","M"===i){const e=document.createElement("div");e.textContent=".",o.appendChild(e)}}function o(e,t){e.board.gameOver()&&function(e){const t=document.createElement("div");t.className="gameOverContainer",document.body.appendChild(t);const n=document.createElement("div");n.className="finalTextDiv",t.appendChild(n);const r=document.createElement("div");r.className="playAgain",r.textContent="The war is not over! Ready for another battle, soldier?",t.appendChild(r);const o=document.createElement("button");o.className="playAgainButton",o.textContent="Next Battle",t.appendChild(o);o.addEventListener("click",(function(e){document.querySelector(".gridContainer").remove(),document.querySelector(".gameOverContainer").remove(),x()})),"Computer"===e.getName()?n.textContent="You lost the battle!":n.textContent=`${e.getName()} Won The Battle of Ships!`}(t)}n.d(r,{H:()=>x});var i=n(379),a=n.n(i),c=n(795),l=n.n(c),s=n(569),d=n.n(s),u=n(565),p=n.n(u),f=n(216),m=n.n(f),h=n(589),g=n.n(h),v=n(982),y={};y.styleTagTransform=g(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=m(),a()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const b=n(704);function x(n="You"){const r=b(n);r.board.randomizer();const i=r.board.getBoard(),a=b("Computer");a.board.randomizer(),function(){const t=document.createElement("div");t.className="gridContainer",document.body.appendChild(t);const n=document.createElement("div");n.className="grid1",t.appendChild(n),e(n,"P");const r=document.createElement("div");r.className="grid2",e(r,"C"),t.appendChild(r,"C")}(),function(e){for(let t=0;t<10;t+=1)for(let n=0;n<10;n+=1)"object"==typeof e[t][n]?document.getElementById(`${t}P${n}`).className="gridCell ship":document.getElementById(`${t}P${n}`).className="gridCell"}(i),function(e,n){const r=document.querySelectorAll(".grid2 > *>*"),i=function(r){!function(e,n,r,i){const[a,c]=e.id.split("C"),l=n.board.receiveHit(a,c);if(e.className="M"===l?"gridCellM":"gridCellH","M"===l){const t=document.createElement("div");t.textContent=".",e.appendChild(t)}e.removeEventListener("click",r),o(n,i),function(e,n){for(let r=0;r<100;r++)t(e.CompSendHit(),n.board.receiveHit),o(n,e)}(n,i)}(r.target,e,i,n)};r.forEach((e=>{e.addEventListener("click",i)}))}(a,r)}x()})()})();