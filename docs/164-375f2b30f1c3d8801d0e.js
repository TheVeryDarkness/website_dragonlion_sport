(self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[]).push([[164],{164:(r,n,o)=>{"use strict";o.d(n,{m:()=>k});var A=o(781),e=o(379),t=o.n(e),i=o(465);t()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a,l=o(811),c=0,s={injectType:"lazyStyleTag",insert:"head",singleton:!1},d={};d.locals=l.Z.locals||{},d.use=function(){return c++||(a=t()(l.Z,s)),d},d.unuse=function(){c>0&&!--c&&(a(),a=null)};const C=d;var E,B=o(82),b=0,u={injectType:"lazyStyleTag",insert:"head",singleton:!1},h={};h.locals=B.Z.locals||{},h.use=function(){return b++||(E=t()(B.Z,u)),h},h.unuse=function(){b>0&&!--b&&(E(),E=null)};const g=h;g.use(),C.use();var m,f=document.getElementById("curtain");function v(){C.unuse(),g.use(),m=!0}function p(){C.use(),g.unuse(),m=!1}function k(r){m?(function(r){p(),r&&(r.innerText="一熄灯一切被纪念")}(r),(0,A.set)("scheme","dark")):(function(r){v(),r&&(r.innerText="一开灯一切变妄念")}(r),(0,A.set)("scheme","light"))}f?f.remove():console.error("No curtain style"),(()=>{const r=(0,A.get)("scheme");if("dark"==r)return p();if("light"==r)return v();if(window.matchMedia){if(window.matchMedia("(prefers-color-scheme: dark)").matches)return p();if(window.matchMedia("(prefers-color-scheme: light)").matches)return v();if(window.matchMedia("(prefers-color-scheme: no-preference)").matches)return v()}var n=new Date;n.getHours()>=22||n.getHours()<=6?p():v()})()},465:(r,n,o)=>{"use strict";o.d(n,{Z:()=>C});var A=o(15),e=o.n(A),t=o(645),i=o.n(t),a=o(667),l=o.n(a),c=o(947),s=i()(e()),d=l()(c.Z);s.push([r.id,':root {\r\n  font-family: "Cursive", "KaiTi_GB2312", "DFKai-SB", "FangSong",\r\n    "FangSong_GB2312";\r\n  /* To be overriden */\r\n  font-size: 32px;\r\n}\r\n@media (max-width: 720px) {\r\n  :root {\r\n    font-size: 28px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  :root {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  :root {\r\n    font-size: 16px;\r\n  }\r\n}\r\n@media (max-width: 240px) {\r\n  :root {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\nheader > h1 {\r\n  padding-top: 12%;\r\n  margin-left: 1%;\r\n}\r\n\r\nheader {\r\n  background-position: right top;\r\n  background-repeat: no-repeat;\r\n  background-clip: content-box;\r\n  background-size: contain;\r\n  background-color: transparent;\r\n  background-image: url('+d+");\r\n}\r\n\r\nul.menu {\r\n  text-align: left;\r\n  list-style: none;\r\n  display: inline;\r\n  clear: both;\r\n}\r\n\r\nul.menu > li {\r\n  font-size: 1.3em;\r\n  text-align: left;\r\n  display: block;\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nul.menu > li > a {\r\n  text-decoration: none;\r\n}\r\n\r\nfieldset.top {\r\n  vertical-align: bottom;\r\n  border-style: ridge;\r\n}\r\n\r\ndiv.area {\r\n  margin-bottom: 0.4em;\r\n  clear: both;\r\n}\r\n\r\np {\r\n  text-indent: 2em;\r\n}\r\np.sub {\r\n  margin: 0;\r\n  text-indent: 2em;\r\n}\r\np.info {\r\n  margin: 0;\r\n  text-indent: 0;\r\n}\r\ndiv.selectSet {\r\n  clear: none;\r\n  color: inherit;\r\n  float: left;\r\n  vertical-align: bottom;\r\n}\r\n\r\nselect.search {\r\n  color: inherit;\r\n  width: 100%;\r\n}\r\nselect {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: inherit;\r\n}\r\n\r\nselect#searchResults {\r\n  overflow-y: auto;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\ninput {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\ninput.wholeline {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\nfieldset.top > form > input.button {\r\n  color: inherit;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  float: left;\r\n  padding: 0;\r\n  vertical-align: bottom;\r\n}\r\n\r\ninput.textSearch {\r\n  width: calc(100% - 5em);\r\n  float: left;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.buttonSearch {\r\n  float: right;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.left {\r\n  text-align: end;\r\n  float: right;\r\n}\r\n\r\ndiv.sideBar {\r\n  border-style: groove;\r\n}\r\n\r\nvideo.video {\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: block;\r\n}\r\niframe.video {\r\n  border: 0;\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: none;\r\n}\r\n@media (min-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: calc(20% - 6px);\r\n    font-size: 0.9em;\r\n    float: right;\r\n  }\r\n  video.video {\r\n    width: 79%;\r\n    height: 79%;\r\n  }\r\n  iframe.video {\r\n    width: 76vw;\r\n    height: 42.75vw;\r\n  }\r\n}\r\n@media (max-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: fit-content;\r\n    clear: both;\r\n    float: left;\r\n  }\r\n  video.video {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  iframe.video {\r\n    width: 96vw;\r\n    height: 54vw;\r\n  }\r\n}\r\n\r\n.bottom.info {\r\n  margin: auto;\r\n  margin-top: initial;\r\n  color: inherit;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nfooter {\r\n  color: inherit;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n}\r\n\r\nsmall.switch {\r\n  font-size: 0.8em;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\ntd {\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 0;\r\n}\r\n\r\n.text.normal {\r\n  overflow-wrap: break-word;\r\n}\r\ntable > caption,\r\ntable > th,\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\ntextarea {\r\n  font-size: inherit;\r\n  width: 100%;\r\n  height: fit-content;\r\n  min-height: 10em;\r\n  resize: vertical;\r\n}\r\n","",{version:3,sources:["webpack://./css/basic.css"],names:[],mappings:"AAAA;EACE;qBACmB;EACnB,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF;AACA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,4BAA4B;EAC5B,4BAA4B;EAC5B,wBAAwB;EACxB,6BAA6B;EAC7B,yDAAgE;AAClE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,cAAc;AAChB;AACA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,iDAAiD;AACnD;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;EACrB,WAAW;EACX,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,cAAc;AAChB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;AACA;EACE;IACE,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;EACd;EACA;IACE,UAAU;IACV,WAAW;EACb;EACA;IACE,WAAW;IACX,eAAe;EACjB;AACF;AACA;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,WAAW;EACb;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;AACA;;;EAGE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB",sourcesContent:[':root {\r\n  font-family: "Cursive", "KaiTi_GB2312", "DFKai-SB", "FangSong",\r\n    "FangSong_GB2312";\r\n  /* To be overriden */\r\n  font-size: 32px;\r\n}\r\n@media (max-width: 720px) {\r\n  :root {\r\n    font-size: 28px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  :root {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  :root {\r\n    font-size: 16px;\r\n  }\r\n}\r\n@media (max-width: 240px) {\r\n  :root {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\nheader > h1 {\r\n  padding-top: 12%;\r\n  margin-left: 1%;\r\n}\r\n\r\nheader {\r\n  background-position: right top;\r\n  background-repeat: no-repeat;\r\n  background-clip: content-box;\r\n  background-size: contain;\r\n  background-color: transparent;\r\n  background-image: url("../pic/background/sakura-background.png");\r\n}\r\n\r\nul.menu {\r\n  text-align: left;\r\n  list-style: none;\r\n  display: inline;\r\n  clear: both;\r\n}\r\n\r\nul.menu > li {\r\n  font-size: 1.3em;\r\n  text-align: left;\r\n  display: block;\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nul.menu > li > a {\r\n  text-decoration: none;\r\n}\r\n\r\nfieldset.top {\r\n  vertical-align: bottom;\r\n  border-style: ridge;\r\n}\r\n\r\ndiv.area {\r\n  margin-bottom: 0.4em;\r\n  clear: both;\r\n}\r\n\r\np {\r\n  text-indent: 2em;\r\n}\r\np.sub {\r\n  margin: 0;\r\n  text-indent: 2em;\r\n}\r\np.info {\r\n  margin: 0;\r\n  text-indent: 0;\r\n}\r\ndiv.selectSet {\r\n  clear: none;\r\n  color: inherit;\r\n  float: left;\r\n  vertical-align: bottom;\r\n}\r\n\r\nselect.search {\r\n  color: inherit;\r\n  width: 100%;\r\n}\r\nselect {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: inherit;\r\n}\r\n\r\nselect#searchResults {\r\n  overflow-y: auto;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\ninput {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\ninput.wholeline {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\nfieldset.top > form > input.button {\r\n  color: inherit;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  float: left;\r\n  padding: 0;\r\n  vertical-align: bottom;\r\n}\r\n\r\ninput.textSearch {\r\n  width: calc(100% - 5em);\r\n  float: left;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.buttonSearch {\r\n  float: right;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.left {\r\n  text-align: end;\r\n  float: right;\r\n}\r\n\r\ndiv.sideBar {\r\n  border-style: groove;\r\n}\r\n\r\nvideo.video {\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: block;\r\n}\r\niframe.video {\r\n  border: 0;\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: none;\r\n}\r\n@media (min-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: calc(20% - 6px);\r\n    font-size: 0.9em;\r\n    float: right;\r\n  }\r\n  video.video {\r\n    width: 79%;\r\n    height: 79%;\r\n  }\r\n  iframe.video {\r\n    width: 76vw;\r\n    height: 42.75vw;\r\n  }\r\n}\r\n@media (max-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: fit-content;\r\n    clear: both;\r\n    float: left;\r\n  }\r\n  video.video {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  iframe.video {\r\n    width: 96vw;\r\n    height: 54vw;\r\n  }\r\n}\r\n\r\n.bottom.info {\r\n  margin: auto;\r\n  margin-top: initial;\r\n  color: inherit;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nfooter {\r\n  color: inherit;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n}\r\n\r\nsmall.switch {\r\n  font-size: 0.8em;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\ntd {\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 0;\r\n}\r\n\r\n.text.normal {\r\n  overflow-wrap: break-word;\r\n}\r\ntable > caption,\r\ntable > th,\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\ntextarea {\r\n  font-size: inherit;\r\n  width: 100%;\r\n  height: fit-content;\r\n  min-height: 10em;\r\n  resize: vertical;\r\n}\r\n'],sourceRoot:""}]);const C=s},811:(r,n,o)=>{"use strict";o.d(n,{Z:()=>a});var A=o(15),e=o.n(A),t=o(645),i=o.n(t)()(e());i.push([r.id,":root {\r\n  --main-text-color: #70707a;\r\n  --main-background-color: #212023;\r\n  --main-border-color: #555555;\r\n  --sub-text-color: #626460;\r\n  --sub-background-color: #2e2b2c;\r\n  --sub-border-color: #444444;\r\n  --sub-sub-background-color: #1f1c24;\r\n  --normal-text-color: #777777;\r\n\t--arrow-color: #111111;\r\n  scrollbar-color: dark;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(0.5);\r\n}\r\n\r\nheader > h1,\r\nheader > div {\r\n  filter: brightness(2);\r\n}\r\n\r\nhr {\r\n  filter: brightness(0.5);\r\n}\r\n\r\niframe {\r\n  filter: brightness(0.8);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--main-border-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n","",{version:3,sources:["webpack://./css/dark.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,gCAAgC;EAChC,4BAA4B;EAC5B,yBAAyB;EACzB,+BAA+B;EAC/B,2BAA2B;EAC3B,mCAAmC;EACnC,4BAA4B;CAC7B,sBAAsB;EACrB,qBAAqB;EACrB,yCAAyC;EACzC,6CAA6C;AAC/C;;AAEA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,6CAA6C;EAC7C,sCAAsC;AACxC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,6CAA6C;EAC7C,qCAAqC;EACrC,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC",sourcesContent:[":root {\r\n  --main-text-color: #70707a;\r\n  --main-background-color: #212023;\r\n  --main-border-color: #555555;\r\n  --sub-text-color: #626460;\r\n  --sub-background-color: #2e2b2c;\r\n  --sub-border-color: #444444;\r\n  --sub-sub-background-color: #1f1c24;\r\n  --normal-text-color: #777777;\r\n\t--arrow-color: #111111;\r\n  scrollbar-color: dark;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(0.5);\r\n}\r\n\r\nheader > h1,\r\nheader > div {\r\n  filter: brightness(2);\r\n}\r\n\r\nhr {\r\n  filter: brightness(0.5);\r\n}\r\n\r\niframe {\r\n  filter: brightness(0.8);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--main-border-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n"],sourceRoot:""}]);const a=i},82:(r,n,o)=>{"use strict";o.d(n,{Z:()=>a});var A=o(15),e=o.n(A),t=o(645),i=o.n(t)()(e());i.push([r.id,":root {\r\n  --main-text-color: #585048;\r\n  --main-background-color: #fffaf8;\r\n  --sub-text-color: rosybrown;\r\n  --sub-background-color: #f0efe7;\r\n  --sub-border-color: #999999;\r\n  --sub-sub-background-color: #fffbfa;\r\n  --normal-text-color: #200000;\r\n\t--arrow-color: #cccccc;\r\n  scrollbar-color: auto;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(1);\r\n}\r\n\r\nheader > h1,\r\nheader > div,\r\nhr,\r\niframe {\r\n  filter: brightness(1);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n","",{version:3,sources:["webpack://./css/light.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,gCAAgC;EAChC,2BAA2B;EAC3B,+BAA+B;EAC/B,2BAA2B;EAC3B,mCAAmC;EACnC,4BAA4B;CAC7B,sBAAsB;EACrB,qBAAqB;EACrB,yCAAyC;EACzC,6CAA6C;AAC/C;;AAEA;EACE,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;;;;EAIE,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;EAC7B,6CAA6C;AAC/C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;EAEE,6CAA6C;EAC7C,qCAAqC;EACrC,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;AACjC",sourcesContent:[":root {\r\n  --main-text-color: #585048;\r\n  --main-background-color: #fffaf8;\r\n  --sub-text-color: rosybrown;\r\n  --sub-background-color: #f0efe7;\r\n  --sub-border-color: #999999;\r\n  --sub-sub-background-color: #fffbfa;\r\n  --normal-text-color: #200000;\r\n\t--arrow-color: #cccccc;\r\n  scrollbar-color: auto;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(1);\r\n}\r\n\r\nheader > h1,\r\nheader > div,\r\nhr,\r\niframe {\r\n  filter: brightness(1);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n"],sourceRoot:""}]);const a=i},947:(r,n,o)=>{"use strict";o.d(n,{Z:()=>A});const A=o.p+"images/sakura-background.a4561ac3244d09b5bd0804c1949138f6.png"}}]);
//# sourceMappingURL=164-375f2b30f1c3d8801d0e.js.map