(()=>{"use strict";var t={66:(t,e,r)=>{var n=r(164),o=r(163);document.getElementById("lightSwitch").onclick=n.m;const s=document.getElementById("tableAction");{const t=s.createTHead().insertRow();t.insertCell(),o._d.forEach((e=>{t.insertCell().textContent=e}))}o.TJ.forEach(((t,e)=>{var r=0;o.m2.forEach((t=>{const n=t[e];n.length>r&&(r=n.length)}));for(let i=0;i<r;++i){const c=s.insertRow();if(0==i){var n=c.insertCell();n.rowSpan=r,n.textContent=t}for(let t=0;t<o.m2.length;++t)c.insertCell().textContent=o.m2[t][e][i]}o.m2.forEach(((t,r)=>{t[e]}))}))},781:(t,e,r)=>{var n,o,s;if(r.d(e,{get:()=>n,set:()=>o}),sessionStorage||console.log("Local storage not supported."),sessionStorage){const t=sessionStorage;n=function(e){return t.getItem(e)},o=function(e,r){t.setItem(e,r)}}else n=function(t){return s[t]},o=function(t,e){s[t]=e}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={280:0},e=[[66,36,164,163]],n=()=>{};function o(){for(var n,o=0;o<e.length;o++){for(var s=e[o],i=!0,c=1;c<s.length;c++){var a=s[c];0!==t[a]&&(i=!1)}i&&(e.splice(o--,1),n=r(r.s=s[0]))}return 0===e.length&&(r.x(),r.x=()=>{}),n}r.x=()=>{r.x=()=>{},i=i.slice();for(var t=0;t<i.length;t++)s(i[t]);return(n=o)()};var s=o=>{for(var s,i,[a,l,u,p]=o,f=0,h=[];f<a.length;f++)i=a[f],r.o(t,i)&&t[i]&&h.push(t[i][0]),t[i]=0;for(s in l)r.o(l,s)&&(r.m[s]=l[s]);for(u&&u(r),c(o);h.length;)h.shift()();return p&&e.push.apply(e,p),n()},i=self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[],c=i.push.bind(i);i.push=s})(),r.x()})();