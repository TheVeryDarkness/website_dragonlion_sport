(self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[]).push([[164],{164:(r,n,e)=>{"use strict";e.d(n,{m:()=>y,i:()=>v});var o=e(379),t=e.n(o),i=e(465);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a,c=e(811),l=0,s={injectType:"lazyStyleTag",insert:"head",singleton:!1},d={};d.locals=c.Z.locals||{},d.use=function(){return l++||(a=t()(c.Z,s)),d},d.unuse=function(){l>0&&!--l&&(a(),a=null)};const u=d;var f,b=e(82),h=0,m={injectType:"lazyStyleTag",insert:"head",singleton:!1},g={};g.locals=b.Z.locals||{},g.use=function(){return h++||(f=t()(b.Z,m)),g},g.unuse=function(){h>0&&!--h&&(f(),f=null)};const p=g;function v(){if(window.matchMedia("(prefers-color-scheme: dark)").matches)k();else if(window.matchMedia("(prefers-color-scheme: light)").matches)w();else if(window.matchMedia("(prefers-color-scheme: no-preference)").matches)w();else{var r=new Date;r.getHours()>=22||r.getHours()<=6?k():w()}}var x;function w(){u.unuse(),p.use(),x=!0}function k(){u.use(),p.unuse(),x=!1}function y(){x?(k(),lightIndication.innerText="一熄灯一切被纪念"):(w(),lightIndication.innerText="一开灯一切变妄念")}p.use(),u.use()},465:(r,n,e)=>{"use strict";e.d(n,{Z:()=>d});var o=e(645),t=e.n(o),i=e(667),a=e.n(i),c=e(744),l=t()((function(r){return r[1]})),s=a()(c.Z);l.push([r.id,':root {\r\n  font-family: "Cursive", "KaiTi_GB2312", "DFKai-SB", "FangSong",\r\n    "FangSong_GB2312";\r\n  /* To be overriden */\r\n  font-size: 32px;\r\n}\r\n@media (max-width: 720px) {\r\n  :root {\r\n    font-size: 28px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  :root {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  :root {\r\n    font-size: 16px;\r\n  }\r\n}\r\n@media (max-width: 240px) {\r\n  :root {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\nheader > h1 {\r\n  padding-top: 12%;\r\n  margin-left: 1%;\r\n}\r\n\r\nheader {\r\n  background-position: right top;\r\n  background-repeat: no-repeat;\r\n  background-clip: content-box;\r\n  background-size: contain;\r\n  background-color: transparent;\r\n  background-image: url('+s+");\r\n}\r\n\r\nul.menu {\r\n  text-align: left;\r\n  list-style: none;\r\n  display: inline;\r\n  clear: both;\r\n}\r\n\r\nul.menu > li {\r\n  font-size: 1.3em;\r\n  text-align: left;\r\n  display: block;\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nul.menu > li > a {\r\n  text-decoration: none;\r\n}\r\n\r\nfieldset.top {\r\n  vertical-align: bottom;\r\n  border-style: ridge;\r\n}\r\n\r\ndiv.area {\r\n  margin-bottom: 0.4em;\r\n  clear: both;\r\n}\r\n\r\np {\r\n  text-indent: 2em;\r\n}\r\np.sub {\r\n  margin: 0;\r\n  text-indent: 2em;\r\n}\r\np.info {\r\n  margin: 0;\r\n}\r\n\r\ndiv.selectSet {\r\n  clear: none;\r\n  color: inherit;\r\n  float: left;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\nselect {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n}\r\n\r\nselect#searchResults {\r\n  overflow-y: auto;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\ninput {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\ninput.wholeline {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\ninput.buttonReplay {\r\n  color: inherit;\r\n  border-color: inherit;\r\n  float: left;\r\n  vertical-align: bottom;\r\n}\r\n\r\ninput.textSearch {\r\n  width: calc(100% - 5em);\r\n  float: left;\r\n}\r\n\r\ninput.buttonSearch {\r\n  float: right;\r\n}\r\n\r\ninput.left {\r\n  text-align: end;\r\n  float: right;\r\n}\r\n\r\nselect.search {\r\n  color: inherit;\r\n  width: 100%;\r\n}\r\n\r\ndiv.sideBar {\r\n  border-style: groove;\r\n}\r\n\r\nvideo.video {\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: block;\r\n}\r\niframe.video {\r\n  border: 0;\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: none;\r\n}\r\n@media (min-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: calc(20% - 6px);\r\n    font-size: 0.9em;\r\n    float: right;\r\n  }\r\n  video.video {\r\n    width: 79%;\r\n    height: 79%;\r\n  }\r\n  iframe.video {\r\n    width: 76vw;\r\n    height: 42.75vw;\r\n  }\r\n}\r\n@media (max-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: fit-content;\r\n    clear: both;\r\n    float: left;\r\n  }\r\n  video.video {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  iframe.video {\r\n    width: 96vw;\r\n    height: 54vw;\r\n  }\r\n}\r\n\r\n.bottom.info {\r\n  margin: auto;\r\n  margin-top: initial;\r\n  color: inherit;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nfooter {\r\n  color: inherit;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n}\r\n\r\nsmall.switch {\r\n  font-size: 0.8em;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\ntd {\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 0;\r\n}\r\n\r\n.text.normal {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\ntextarea {\r\n  font-size: inherit;\r\n  width: 100%;\r\n  height: fit-content;\r\n  min-height: 10em;\r\n}\r\n",""]);const d=l},811:(r,n,e)=>{"use strict";e.d(n,{Z:()=>i});var o=e(645),t=e.n(o)()((function(r){return r[1]}));t.push([r.id,":root {\r\n  --main-text-color: #70707a;\r\n  --main-background-color: #212023;\r\n  --main-border-color: #555555;\r\n  --sub-text-color: #626460;\r\n  --sub-background-color: #2e2b2c;\r\n  --sub-border-color: #444444;\r\n  --sub-sub-background-color: #1f1c24;\r\n  --normal-text-color: #777777;\r\n  --arrow-color: #111111;\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(0.5);\r\n}\r\n\r\nheader > h1,\r\nheader > div {\r\n  filter: brightness(2);\r\n}\r\n\r\nhr {\r\n  filter: brightness(0.5);\r\n}\r\n\r\niframe {\r\n  filter: brightness(0.8);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--main-border-color);\r\n  scrollbar-color: dark;\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n  scrollbar-color: dark;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ninput.buttonReplay {\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n}\r\n\r\ninput.textSearch {\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.buttonSearch {\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\nselect.search {\r\n  background-color: inherit;\r\n  scrollbar-color: dark;\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n",""]);const i=t},82:(r,n,e)=>{"use strict";e.d(n,{Z:()=>i});var o=e(645),t=e.n(o)()((function(r){return r[1]}));t.push([r.id,":root {\r\n  --main-text-color: #585048;\r\n  --main-background-color: #fffaf8;\r\n  --sub-text-color: rosybrown;\r\n  --sub-background-color: #f0efe7;\r\n  --sub-border-color: #999999;\r\n  --sub-sub-background-color: #fffbfa;\r\n  --normal-text-color: #200000;\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n",""]);const i=t},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,o){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(t[a]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);o&&t[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},667:r=>{"use strict";r.exports=function(r,n){return n||(n={}),"string"!=typeof(r=r&&r.__esModule?r.default:r)?r:(/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r)}},379:(r,n,e)=>{"use strict";var o,t=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},o=[],t=0;t<r.length;t++){var c=r[t],l=n.base?c[0]+n.base:c[0],s=e[l]||0,d="".concat(l," ").concat(s);e[l]=s+1;var u=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:m(f,n),references:1}),o.push(d)}return o}function l(r){var n=document.createElement("style"),o=r.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(r){n.setAttribute(r,o[r])})),"function"==typeof r.insert)r.insert(n);else{var a=t(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,d=(s=[],function(r,n){return s[r]=n,s.filter(Boolean).join("\n")});function u(r,n,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet)r.styleSheet.cssText=d(n,t);else{var i=document.createTextNode(t),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function f(r,n,e){var o=e.css,t=e.media,i=e.sourceMap;if(t?r.setAttribute("media",t):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}var b=null,h=0;function m(r,n){var e,o,t;if(n.singleton){var i=h++;e=b||(b=l(n)),o=u.bind(null,e,i,!1),t=u.bind(null,e,i,!0)}else e=l(n),o=f.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var o=0;o<e.length;o++){var t=a(e[o]);i[t].references--}for(var l=c(r,n),s=0;s<e.length;s++){var d=a(e[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=l}}}},744:(r,n,e)=>{"use strict";e.d(n,{Z:()=>o});const o=e.p+"images/sakura-background.a4561ac3244d09b5bd0804c1949138f6.png"}}]);