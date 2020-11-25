(()=>{"use strict";var e={765:(e,t,n)=>{var r=n(164),o=n(100),d=[document.getElementById("s0"),document.getElementById("s1"),document.getElementById("s2"),document.getElementById("s3"),document.getElementById("s4")],s=()=>{console.log("Not specified.")};function c(e){return e?s=e:console.error("Callback not available."),(0,o.ve)((()=>{i(-1)}))}function l(e,t){!function(e,t){e.options.length=t.length;for(const n in t)e.options[n].text=t[n].value}(e,t)}function i(e){switch(e>0&&0==d[e-1].selectedIndex&&function(e){switch(e){case 4:a(d[3],d[4],o.td[3]);case 3:a(d[2],d[3],o.td[2]);case 2:a(d[1],d[2],o.td[1]);case 1:a(d[0],d[1],o.td[0])}}(e),e){case-1:o.td[0]=new Array((0,o.ub)()).concat(o.G_.root),l(d[0],o.td[0]);case 0:o.td[1]=(0,o.Jq)(o.td[0],d[0].selectedIndex),l(d[1],o.td[1]),d[1].selectedIndex=0;case 1:o.td[2]=(0,o.Jq)(o.td[1],d[1].selectedIndex),l(d[2],o.td[2]),d[2].selectedIndex=0;case 2:o.td[3]=(0,o.Jq)(o.td[2],d[2].selectedIndex),l(d[3],o.td[3]),d[3].selectedIndex=0;case 3:o.td[4]=(0,o.Jq)(o.td[3],d[3].selectedIndex),l(d[4],o.td[4]),d[4].selectedIndex=0;case 4:s();break;default:console.error("Unexpected index ",e)}}function a(e,t,n){var r=1,o=0;for(const e of n){if((r+=e.sub.length)>t.selectedIndex)break;++o}e.selectedIndex=o}var u=0,m=NaN;const f="javascript:void(0)",h="about:blank";var g="html5",p={src:"",from:"",origin:h};function b(e,t){g=t,p=e,"html5"==t?(sourceVideo.src=e.src,y("video"),video.load(),video.currentTime=u,video.addEventListener("timeupdate",I)):"player"==t?("bilibili"==e.from?embededFrame.src=e.frame+"&high_quality=1&t="+u:"vqq"==e.from?embededFrame.src=e.frame+"&show1080p=1&starttime="+u:"youku"==e.from?embededFrame.src=e.frame+"?starttime="+u+"&endtime="+m:(embededFrame.src=e.frame,console.log("Unrecognized video source: '",e.from,"'")),y("iframe")):"page"==t?(embededFrame.src=e.origin,y("iframe")):console.error("Unrecognized mode '",t,"'.")}function v(e){if(originVideoURL.href=e.src?e.src:f,originWebpage.href=e.origin?e.origin:h,e.src)b(e,"html5");else if(e.frame)b(e,"player");else{if(!e.origin)return!1;b(e,"page")}return!0}function x(e){if(e.range){if(e.range[0]&&e.range[1]){const t=e.range[0],n=e.range[1];return u=t,m=n,!0}console.log("Node '",e.value,"' has a illegal value for property 'range'")}return!1}function I(){video.currentTime>=m&&(video.pause(),video.removeEventListener("timeupdate",I))}function y(e){"video"==e?(video.style.display="block",embededFrame.style.display="none"):"iframe"==e?(video.style.display="none",embededFrame.style.display="block"):console.error("Unrecognized mode '",e,"'.")}function w(){u=0,m=NaN,originVideoURL.href=f,sourceVideo.src="",originWebpage.href=h,embededFrame.src=h,video.load()}function E(e){return e&&e.comment?e.comment[0].content:""}function N(e){return Math.floor(e/3600)+":"+Math.floor(e%3600/60)+":"+e%60}function B(){w(),0!==d[4].selectedIndex&&x(o.td[4][d[4].selectedIndex])||0!==d[3].selectedIndex&&x(o.td[3][d[3].selectedIndex])||0!==d[2].selectedIndex&&x(o.td[2][d[2].selectedIndex])||(displayVideoTimeRange.innerText=""),0!==d[4].selectedIndex&&v(o.td[4][d[4].selectedIndex])||0!==d[3].selectedIndex&&v(o.td[3][d[3].selectedIndex])||0!==d[2].selectedIndex&&v(o.td[2][d[2].selectedIndex])||w();for(let e=0;e<o.td.length;e++){const t=document.getElementById("i"+String(e)),n=o.td[e],r=d[e].selectedIndex;0!==r&&n[r]&&(t.innerText=n[r].value+": "+E(n[r])),t.hidden=!t.innerText}displayVideoTimeRange.innerText=N(u)+", "+N(m)}const k=[[["原地8字舞龙","行进8字舞龙","单跪舞龙","套头舞龙","搁脚舞龙","扯旗舞龙","靠背舞龙","横移(跳)步舞龙","起伏8字舞龙"],["直线行进","曲线行进","走(跑)圆场","滑步行进","起伏行进","单侧起伏小圆场","矮步跑圆场","直线(曲线、圆场)行进越障碍"],["穿龙尾","越龙尾","首尾穿(越)肚"],["龙翻身"],["龙门造型","塔盘造型","尾盘造型","曲线造型","龙出宫造型","蝴蝶盘花造型","组字造型","龙舟造型","螺丝结顶造型","卧(垛)龙造型"]],[["原地快速8字舞龙","行进快速8字舞龙","跪步行进快舞龙","抱腰舞龙","绕身舞龙","双人换位舞龙","快舞龙磨转","连续抛接龙头横移(跑)步舞龙"],["快速曲线起伏行进","快速顺逆连续跑圆场","快速矮步跑圆场越障碍","快速跑斜圆场","骑肩双杆起伏行进"],["龙穿身","龙脱衣","龙戏尾","连续腾越行进","腾身穿尾","穿尾越龙身","卧龙飞腾","穿八五节","首(尾)穿花缠身行进"],["快速逆(顺)向跳龙行进(2次以上)","连续游龙跳龙(2次以上)","大立圆螺旋行进(3次以上)"],["上肩高塔造型自转一周","龙尾高翘寻珠、追珠","首尾盘柱","龙翻身接滚翻成造型","单臂侧手翻接滚翻成造型"]],[["跳龙接一蹲一躺快舞龙","跳龙接摇船快舞龙","跳龙接直躺快舞龙","依次滚翻接单跪快舞龙","挂腰舞龙(两人一组)","K式舞龙(3人一组)","站腿舞龙(两人一组)","双杆舞龙(一人持两杆)"],["站肩平盘起伏(二周以上)","直线后倒、鲤鱼打挺接擎龙行进"],["快速连续穿越行进(3次以上)","连续穿越腾越行进(4次以上)"],["快速连续斜盘跳龙(3次以上)","快速连续螺旋跳龙(4次以上)","快速连续螺旋跳龙磨转(6次以上)","快速左右螺旋跳龙(左右各3次以上)","快速连续磨盘跳龙(3次以上)"],["大横8字花慢行进(成型4次以上)","坐肩后仰成平盘起伏旋转(一周以上)"]]];3!=k.length&&console.log("Debug failed! There should be 3 levels.");for(const e of k)5!=e.length&&console.log("Debug failed! There should be 5 categories.");var A=new Array;function T(){var e=new Array;for(const t of arguments)e.push(t.value.toString());return e}function R(e){if(null!=e){searchResults.options.length=0,A.length=0;for(const t in o.td[0]){if(0==t)continue;const n=o.td[0][t];n.value.match(e)&&(q(searchResults,T(n)),A.push(new Array(t,0,0,0,0)));for(const r in n.sub){const o=n.sub[r];o.value.match(e)&&(q(searchResults,T(o,n)),A.push(new Array(t,Number(r)+1,0,0,0)));for(const d in o.sub){const s=o.sub[d];s.value.match(e)&&(q(searchResults,T(s,o,n)),A.push(new Array(t,Number(r)+1,Number(d)+1,0,0)));for(const c in s.sub){const l=s.sub[c];l.value.match(e)&&(q(searchResults,T(l,s,o,n)),A.push(new Array(t,Number(r)+1,Number(d)+1,Number(c)+1,0)));for(const i in l.sub){const a=l.sub[i];a.value.match(e)&&(q(searchResults,T(a,l,s,o,n)),A.push(new Array(t,Number(r)+1,Number(d)+1,Number(c)+1,Number(i)+1)))}}}}}}}function q(e,t){e.options.length=e.options.length+1,e.options[e.options.length-1].text=t}function S(){if(-1!==a1.selectedIndex&&-1!==a2.selectedIndex){a3.options.length=0;for(const e of k[a1.selectedIndex][a2.selectedIndex])q(a3,e)}}const F=document.getElementById("lightSwitch");F.onclick=()=>{(0,r.m)(F)},c(B),S();for(let e=0;e<d.length;e++)d[e].onchange=()=>i(e);document.getElementById("chooseItem").onsubmit=e=>{e.preventDefault(),c(B)},document.getElementById("playMode").onclick=function(){const e=["html5","player","page"],t=p,n=e.indexOf(g);b(t,e[(n+1)%e.length])},document.getElementById("replayVideo").onclick=B,document.getElementById("chooseAction").onsubmit=e=>{var t;e.preventDefault(),a3.selectedIndex<0?S():(t=a3.options[a3.selectedIndex].text,textSearchInAll.value=t,R(t))},document.getElementById("searchName").onsubmit=e=>{e.preventDefault(),R(textSearchInAll.value)},document.getElementById("textSearchInAll").oninput=()=>R(textSearchInAll.value),document.getElementById("searchResults").onchange=function(){var e=A[searchResults.selectedIndex];s0.selectedIndex=e[0],o.td[1]=(0,o.Jq)(o.td[0],e[0]),l(d[1],o.td[1]),d[1].selectedIndex=e[1],o.td[2]=(0,o.Jq)(o.td[1],e[1]),l(d[2],o.td[2]),d[2].selectedIndex=e[2],o.td[3]=(0,o.Jq)(o.td[2],e[2]),l(d[3],o.td[3]),d[3].selectedIndex=e[3],o.td[4]=(0,o.Jq)(o.td[3],e[3]),l(d[4],o.td[4]),d[4].selectedIndex=e[4],B()}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={826:0},t=[[765,36,164,100]],r=()=>{};function o(){for(var r,o=0;o<t.length;o++){for(var d=t[o],s=!0,c=1;c<d.length;c++){var l=d[c];0!==e[l]&&(s=!1)}s&&(t.splice(o--,1),r=n(n.s=d[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},s=s.slice();for(var e=0;e<s.length;e++)d(s[e]);return(r=o)()};var d=o=>{for(var d,s,[l,i,a,u]=o,m=0,f=[];m<l.length;m++)s=l[m],n.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(d in i)n.o(i,d)&&(n.m[d]=i[d]);for(a&&a(n),c(o);f.length;)f.shift()();return u&&t.push.apply(t,u),r()},s=self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[],c=s.push.bind(s);s.push=d})(),n.x()})();