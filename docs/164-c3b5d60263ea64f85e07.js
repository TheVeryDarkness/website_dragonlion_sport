(self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[]).push([[164],{164:(r,n,o)=>{"use strict";o.d(n,{m:()=>z});var e=o(781),t=o(379),i=o.n(t),a=o(465);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var l,c=o(811),s=0,d={injectType:"lazyStyleTag",insert:"head",singleton:!1},u={};u.locals=c.Z.locals||{},u.use=function(){return s++||(l=i()(c.Z,d)),u},u.unuse=function(){s>0&&!--s&&(l(),l=null)};const b=u;var h,f=o(82),g=0,m={injectType:"lazyStyleTag",insert:"head",singleton:!1},v={};v.locals=f.Z.locals||{},v.use=function(){return g++||(h=i()(f.Z,m)),v},v.unuse=function(){g>0&&!--g&&(h(),h=null)};const p=v;p.use(),b.use();var w,x=document.getElementById("curtain");function k(){b.unuse(),p.use(),w=!0}function y(){b.use(),p.unuse(),w=!1}function z(r){w?(function(r){y(),r&&(r.innerText="一熄灯一切被纪念")}(r),(0,e.set)("scheme","dark")):(function(r){k(),r&&(r.innerText="一开灯一切变妄念")}(r),(0,e.set)("scheme","light"))}x?x.remove():console.error("No curtain style"),(()=>{const r=(0,e.get)("scheme");if("dark"==r)return y();if("light"==r)return k();if(window.matchMedia){if(window.matchMedia("(prefers-color-scheme: dark)").matches)return y();if(window.matchMedia("(prefers-color-scheme: light)").matches)return k();if(window.matchMedia("(prefers-color-scheme: no-preference)").matches)return k()}var n=new Date;n.getHours()>=22||n.getHours()<=6?y():k()})()},465:(r,n,o)=>{"use strict";o.d(n,{Z:()=>d});var e=o(645),t=o.n(e),i=o(667),a=o.n(i),l=o(947),c=t()((function(r){return r[1]})),s=a()(l.Z);c.push([r.id,':root {\r\n  font-family: "Cursive", "KaiTi_GB2312", "DFKai-SB", "FangSong",\r\n    "FangSong_GB2312";\r\n  /* To be overriden */\r\n  font-size: 32px;\r\n}\r\n@media (max-width: 720px) {\r\n  :root {\r\n    font-size: 28px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  :root {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  :root {\r\n    font-size: 16px;\r\n  }\r\n}\r\n@media (max-width: 240px) {\r\n  :root {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\nhr {\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\nheader > h1 {\r\n  padding-top: 12%;\r\n  margin-left: 1%;\r\n}\r\n\r\nheader {\r\n  background-position: right top;\r\n  background-repeat: no-repeat;\r\n  background-clip: content-box;\r\n  background-size: contain;\r\n  background-color: transparent;\r\n  background-image: url('+s+");\r\n}\r\n\r\nul.menu {\r\n  text-align: left;\r\n  list-style: none;\r\n  display: inline;\r\n  clear: both;\r\n}\r\n\r\nul.menu > li {\r\n  font-size: 1.3em;\r\n  text-align: left;\r\n  display: block;\r\n  float: left;\r\n  width: 10%;\r\n}\r\n\r\nul.menu > li > a {\r\n  text-decoration: none;\r\n}\r\n\r\nfieldset.top {\r\n  vertical-align: bottom;\r\n  border-style: ridge;\r\n}\r\n\r\ndiv.area {\r\n  margin-bottom: 0.4em;\r\n  clear: both;\r\n}\r\n\r\np {\r\n  text-indent: 2em;\r\n}\r\np.sub {\r\n  margin: 0;\r\n  text-indent: 2em;\r\n}\r\np.info {\r\n  margin: 0;\r\n  text-indent: 0;\r\n}\r\ndiv.selectSet {\r\n  clear: none;\r\n  color: inherit;\r\n  float: left;\r\n  vertical-align: bottom;\r\n}\r\n\r\nselect.search {\r\n  color: inherit;\r\n  width: 100%;\r\n}\r\nselect {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: inherit;\r\n}\r\n\r\nselect#searchResults {\r\n  overflow-y: auto;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n}\r\n\r\ninput {\r\n  font-size: inherit;\r\n  font-family: inherit;\r\n  color: inherit;\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\ninput.wholeline {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\nfieldset.top > form > input.button {\r\n  color: inherit;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  float: left;\r\n  padding: 0;\r\n  vertical-align: bottom;\r\n}\r\n\r\ninput.textSearch {\r\n  width: calc(100% - 5em);\r\n  float: left;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.buttonSearch {\r\n  float: right;\r\n  background-color: inherit;\r\n  border-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\ninput.left {\r\n  text-align: end;\r\n  float: right;\r\n}\r\n\r\ndiv.sideBar {\r\n  border-style: groove;\r\n}\r\n\r\nvideo.video {\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: block;\r\n}\r\niframe.video {\r\n  border: 0;\r\n  margin-top: 0.6em;\r\n  float: left;\r\n  display: none;\r\n}\r\n@media (min-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: calc(20% - 6px);\r\n    font-size: 0.9em;\r\n    float: right;\r\n  }\r\n  video.video {\r\n    width: 79%;\r\n    height: 79%;\r\n  }\r\n  iframe.video {\r\n    width: 76vw;\r\n    height: 42.75vw;\r\n  }\r\n}\r\n@media (max-aspect-ratio: 16/9) {\r\n  div.sideBar {\r\n    width: fit-content;\r\n    clear: both;\r\n    float: left;\r\n  }\r\n  video.video {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  iframe.video {\r\n    width: 96vw;\r\n    height: 54vw;\r\n  }\r\n}\r\n\r\n.bottom.info {\r\n  margin: auto;\r\n  margin-top: initial;\r\n  color: inherit;\r\n  margin-bottom: 1em;\r\n}\r\n\r\nfooter {\r\n  color: inherit;\r\n  vertical-align: bottom;\r\n  text-align: center;\r\n}\r\n\r\nsmall.switch {\r\n  font-size: 0.8em;\r\n}\r\n\r\ntable {\r\n  margin: auto;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n}\r\n\r\ntd {\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  padding: 0;\r\n}\r\n\r\n.text.normal {\r\n  overflow-wrap: break-word;\r\n}\r\ntable > caption,\r\ntable > th,\r\ntd {\r\n  text-align: center;\r\n}\r\n\r\ntextarea {\r\n  font-size: inherit;\r\n  width: 100%;\r\n  height: fit-content;\r\n  min-height: 10em;\r\n  resize: vertical;\r\n}\r\n",""]);const d=c},811:(r,n,o)=>{"use strict";o.d(n,{Z:()=>i});var e=o(645),t=o.n(e)()((function(r){return r[1]}));t.push([r.id,":root {\r\n  --main-text-color: #70707a;\r\n  --main-background-color: #212023;\r\n  --main-border-color: #555555;\r\n  --sub-text-color: #626460;\r\n  --sub-background-color: #2e2b2c;\r\n  --sub-border-color: #444444;\r\n  --sub-sub-background-color: #1f1c24;\r\n  --normal-text-color: #777777;\r\n\t--arrow-color: #111111;\r\n  scrollbar-color: dark;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(0.5);\r\n}\r\n\r\nheader > h1,\r\nheader > div {\r\n  filter: brightness(2);\r\n}\r\n\r\nhr {\r\n  filter: brightness(0.5);\r\n}\r\n\r\niframe {\r\n  filter: brightness(0.8);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--main-border-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n",""]);const i=t},82:(r,n,o)=>{"use strict";o.d(n,{Z:()=>i});var e=o(645),t=o.n(e)()((function(r){return r[1]}));t.push([r.id,":root {\r\n  --main-text-color: #585048;\r\n  --main-background-color: #fffaf8;\r\n  --sub-text-color: rosybrown;\r\n  --sub-background-color: #f0efe7;\r\n  --sub-border-color: #999999;\r\n  --sub-sub-background-color: #fffbfa;\r\n  --normal-text-color: #200000;\r\n\t--arrow-color: #cccccc;\r\n  scrollbar-color: auto;\r\n  scrollbar-arrow-color: var(--arrow-color);\r\n  -ms-scrollbar-arrow-color: var(--arrow-color);\r\n}\r\n\r\nheader {\r\n  color: var(--main-text-color);\r\n  filter: brightness(1);\r\n}\r\n\r\nheader > h1,\r\nheader > div,\r\nhr,\r\niframe {\r\n  filter: brightness(1);\r\n}\r\n\r\nfieldset.top {\r\n  color: var(--main-text-color);\r\n  background-color: var(--sub-background-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--main-background-color);\r\n}\r\n\r\nselect {\r\n  background-color: var(--sub-sub-background-color);\r\n}\r\n\r\nsmall.videoInfo {\r\n  color: var(--sub-text-color);\r\n}\r\n\r\ndiv.sideBar,\r\ntextarea {\r\n  background-color: var(--sub-background-color);\r\n  border-color: var(--sub-border-color);\r\n  color: var(--sub-text-color);\r\n}\r\n\r\n.text.normal {\r\n  color: var(--normal-text-color);\r\n}\r\n",""]);const i=t},947:(r,n,o)=>{"use strict";o.d(n,{Z:()=>e});const e=o.p+"images/sakura-background.a4561ac3244d09b5bd0804c1949138f6.png"}}]);