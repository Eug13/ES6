!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=document.querySelectorAll(".num"),c=document.querySelectorAll(".symbol"),u=(document.querySelector(".result"),document.querySelector(".cancel"),document.getElementById("screen"));function i(e){var n=e.target,t=parseInt(n.innerText);console.log(void 0===t?"undefined":o(t)),u.innerText+=n.innerText}function l(e){var n=e.target;n.innerText;console.log(o(n.innerText)),u.innerText+=n.innerText}r.forEach(function(e,n){e.addEventListener("click",i,!1)}),c.forEach(function(e,n){e.addEventListener("click",l,!1)})}]);
//# sourceMappingURL=bundle.js.map