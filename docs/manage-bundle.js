(()=>{"use strict";var e={435:(e,t,n)=>{var o=n(164),r=n(100),a=[document.getElementById("s0"),document.getElementById("s1"),document.getElementById("s2"),document.getElementById("s3"),document.getElementById("s4")],c=()=>{console.log("Not specified.")};function l(e){return e?c=e:console.error("Callback not available."),(0,r.ve)((()=>{s(-1)}))}function d(e,t){!function(e,t){e.options.length=t.length;for(const n in t)e.options[n].text=t[n].value}(e,t)}function s(e){switch(e>0&&0==a[e-1].selectedIndex&&function(e){switch(e){case 4:i(a[3],a[4],r.td[3]);case 3:i(a[2],a[3],r.td[2]);case 2:i(a[1],a[2],r.td[1]);case 1:i(a[0],a[1],r.td[0])}}(e),e){case-1:r.td[0]=new Array((0,r.ub)()).concat(r.G_.root),d(a[0],r.td[0]);case 0:r.td[1]=(0,r.Jq)(r.td[0],a[0].selectedIndex),d(a[1],r.td[1]),a[1].selectedIndex=0;case 1:r.td[2]=(0,r.Jq)(r.td[1],a[1].selectedIndex),d(a[2],r.td[2]),a[2].selectedIndex=0;case 2:r.td[3]=(0,r.Jq)(r.td[2],a[2].selectedIndex),d(a[3],r.td[3]),a[3].selectedIndex=0;case 3:r.td[4]=(0,r.Jq)(r.td[3],a[3].selectedIndex),d(a[4],r.td[4]),a[4].selectedIndex=0;case 4:c();break;default:console.error("Unexpected index ",e)}}function i(e,t,n){var o=1,r=0;for(const e of n){if((o+=e.sub.length)>t.selectedIndex)break;++r}e.selectedIndex=r}const u="somewhat";var m={};function p(){resultTreeJSON.textContent=JSON.stringify(r.G_,null,1)}function h(e,t,n){const o=document.createElement("li"),r=document.createElement("p");var a;r.className="sub",e!=u?((a=document.createElement("label")).innerText=e,a.for="display-li-"+nodeProperties.childNodes.length):((a=document.createElement("input")).value=e,a.onchange=e=>{m[e.target.value]=m.somewhat,delete m.somewhat,f(m),p()});var c=function(e,t,n){switch(e){case"sub":var o=[];for(const e of t)o.push(e.value);var r=document.createElement("div");return r.textContent="["+String(o)+"]",r.onclick=e=>{if(confirm("Sure to add a node?")){var t={value:""};m.sub.push(t),f(t),p()}},r;case"range":var a=document.createElement("form");!t instanceof Array?(n[e]=[0,0],console.error("Node '",n.value,"' should has a array range."),console.error("But it is ",typeof t,"'",JSON.stringify(t),"'."),console.error(t)):2==t.length||(console.error("Node '",n.value,"' should has a range with a length 2."),console.error("But it has a value '",JSON.stringify(t),"'."),t.length>2?n[e]=t.slice(0,2):1==t.length?n[e]=[t[0],t[0]]:n[e]=[0,0]),t=n[e];var c=document.createElement("input");c.value=t[0],c.onchange=t=>{m[e][0]=t.target.value,p()};var l=document.createElement("input");return l.value=t[1],l.onchange=t=>{m[e][1]=t.target.value,p()},a.appendChild(c),a.appendChild(l),a;case"comment":const s=function(e,t){var n=document.createElement("div");n.className="fieldset";var o=document.createElement("input");o.value=e.name,o.onchange=e=>{m.comment[t].name=e.target.value,p()},o.ondblclick=e=>{if(confirm("Sure to add a comment?")){var t={name:"unnamed",content:""};m.comment.push(t),p();const n=e.target.parentNode.parentNode;n.appendChild(s(t,n.childNodes.length))}};var r=document.createElement("input");return r.value=e.content,r.onchange=e=>{m.comment[t].content=e.target.value,p()},n.appendChild(o),n.appendChild(r),n};return a=document.createElement("form"),t.forEach(((e,t)=>{a.appendChild(s(e,t))})),a;default:"string"!=typeof t&&console.error("It's recommended to provide another tool for non-string preperty '",e,"'.");var d=document.createElement("input");return d.value=t,d.onchange=t=>{m[e]=t.target.value,p()},d}}(e,t,n);if(c)return c.id="display-li-"+nodeProperties.childNodes.length,o.onclick=t=>{"LI"==t.target.nodeName&&confirm("Sure to remove the property?")&&(delete m[e],t.target.remove(),p())},r.appendChild(c),o.appendChild(a),o.appendChild(r),o;console.error("Illegal value.")}function f(e){e==m&&console.log("This could be optimized for efficiency."),m=e;const t=document.getElementById("nodeProperties");if(t){for(;t.childNodes.length>0;)t.removeChild(t.lastChild);for(const n in e)if(e.hasOwnProperty(n)){const o=e[n];t.appendChild(h(n,o,e))}}else console.error("No display target.")}function g(e=a.length){f(function(e=a.length){a.length<e&&(console.error("Out of Range"),e=a.length);var t=-1;for(let n=0;n<e;n++)a[n].selectedIndex>0&&(t=n);return t>=0?r.td[t][a[t].selectedIndex]:{}}(e))}document.getElementById("lightSwitch").onclick=o.m,l(g).then((e=>{p()}));for(let e=0;e<a.length;e++)a[e].onchange=()=>s(e);document.getElementById("selectItem").onsubmit=e=>{e.preventDefault(),l(g)},document.getElementById("generateJSON").onclick=function(){var e,t;p(),e=resultTreeJSON.textContent,(t=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","result.json"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},document.getElementById("tagAddProperty").onclick=function(e){m.value?void 0===m.somewhat?confirm("Sure to add a property?")&&(m.somewhat="",document.getElementById("nodeProperties").appendChild(h(u,m.somewhat,m)),p()):alert("Fill empty-key property first."):alert("Choose a named node first.")}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={383:0},t=[[435,36,164,100]],o=()=>{};function r(){for(var o,r=0;r<t.length;r++){for(var a=t[r],c=!0,l=1;l<a.length;l++){var d=a[l];0!==e[d]&&(c=!1)}c&&(t.splice(r--,1),o=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),o}n.x=()=>{n.x=()=>{},c=c.slice();for(var e=0;e<c.length;e++)a(c[e]);return(o=r)()};var a=r=>{for(var a,c,[d,s,i,u]=r,m=0,p=[];m<d.length;m++)c=d[m],n.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(a in s)n.o(s,a)&&(n.m[a]=s[a]);for(i&&i(n),l(r);p.length;)p.shift()();return u&&t.push.apply(t,u),o()},c=self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[],l=c.push.bind(c);c.push=a})(),n.x()})();