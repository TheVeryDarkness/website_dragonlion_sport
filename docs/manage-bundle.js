(()=>{"use strict";var e={99:e=>{e.exports=JSON.parse('{"root":[{"value":"舞龙","sub":[{"value":"2019","sub":[{"value":"全国龙狮锦标赛男子规定","src":"http://videoflv.sports.cn/201911/20191110wlgd.mp4","origin":"http://dragonlion.sport.org.cn/home/zhxw/2019/1121/325648.html","sub":[{"value":"南京理工大学","range":["45","570"],"sub":[{"value":"开场造型","range":["68","124"]},{"value":"绕场跳龙五次","range":["126","152"]},{"value":"正反腾跃前进","range":["156","176"]},{"value":"快速游龙","range":["180","190"]},{"value":"连续快腾进三次","range":["190","210"]},{"value":"造型（尾盘，龙头戏珠）","range":["210","230"]},{"value":"大横8字花（成型四次）","range":["230","260"]},{"value":"左右螺旋跳龙接摇船","range":["260","281"]},{"value":"大立圆螺旋行进","range":["282","305"]},{"value":"起伏圆盘","range":["305","321"]},{"value":"双杆","range":["321","357"]},{"value":"造型（菱形）","range":["356","363"]},{"value":"换位跳龙","range":["363","377"]},{"value":"绕身舞龙","range":["377","386"]},{"value":"站腿","range":["386","397"]},{"value":"起伏圆盘接穿龙尾","range":["397","406"]},{"value":"卧龙腾飞","range":["405","414"]},{"value":"躺肩挂腰（直躺挂腰）","range":["413","427"]},{"value":"造型（立龙）","range":["427","448"]},{"value":"龙脱衣","range":["445","455"]},{"value":"跳龙行进","range":["458","476"]},{"value":"斜盘跳龙连续三次","range":["475","490"]},{"value":"原地螺旋跳龙连续五次接直躺","range":["490","509"]},{"value":"造型（龙腾九霄）","range":["509","533"]}]},{"value":"湖南师范大学","range":["592","1533"],"sub":[]},{"value":"湖北队","range":["1597","2133"],"sub":[]},{"value":"台州学院","range":["2195","2723"],"sub":[]},{"value":"上海三林","range":["2791","3300"],"sub":[]},{"value":"集美大学","range":["3348","3888"],"sub":[]}]},{"value":"全国龙狮锦标赛女子传统","range":["0","2502"],"src":"http://videoflv.sports.cn/201911/20191109ctwl.mp4","origin":"http://dragonlion.sport.org.cn/home/zhxw/2019/1121/325639.html","sub":[{"value":"常州大学","range":["24","542"],"sub":[]},{"value":"扬州工职院","range":["644","1151"],"sub":[]},{"value":"江阴职院","range":["1335","1841"],"sub":[]},{"value":"湖北队","range":["1929","2463"],"sub":[]}]},{"value":"全国龙狮锦标赛男子传统","range":["2502","4250"],"src":"http://videoflv.sports.cn/201911/20191109ctwl.mp4","origin":"http://dragonlion.sport.org.cn/home/zhxw/2019/1121/325639.html","sub":[{"value":"南理工紫金学院","range":["2499","2870"],"sub":[]},{"value":"扬州工职院","range":["3026","3512"],"sub":[]},{"value":"常州大学","range":["3626","4155"],"sub":[]}]},{"value":"上海市舞龙舞狮锦标赛青少年组","origin":"https://v.youku.com/v_show/id_XNDM2OTkzMDE1Ng==.html","frame":"https://player.youku.com/embed/XNDM2OTkzMDE1Ng==","from":"youku","height":498,"width":510,"sub":[{"value":"上海市松江区九亭中学","range":["811","1160"],"sub":[]},{"value":"上海市工商职业技术学院","range":["1398","1747"],"score":8.59,"sub":[]},{"value":"上海市行知实验中学","range":["1756","2158"],"score":8.25,"sub":[]},{"value":"上海市嘉定民办斌心学校","range":["2168","2723"],"score":8.71}]},{"value":"同济大学校运会","range":["0","282"],"origin":"https://www.bilibili.com/video/BV1f4411k7dd","frame":"https://player.bilibili.com/player.html?aid=66976421&bvid=BV1f4411k7dd&cid=116141312&page=1","from":"bilibili","comment":[{"name":"不愿透露姓名的某开发者","content":"头掉了嘎嘎嘎"}],"sub":[]}]},{"value":"2018","sub":[{"value":"亚洲龙狮锦标赛","sub":[{"value":"台湾","range":["0","545"],"origin":"https://haokan.baidu.com/v?vid=1349428518790328525&pd=pcshare","sub":[]}]}]},{"value":"2017","sub":[{"value":"全国运动会","sub":[{"value":"华东交通大学","range":["0","528"],"origin":"https://v.qq.com/x/page/h0394te13o9.html","frame":"https://v.qq.com/txp/iframe/player.html?vid=h0394te13o9","from":"vqq","sub":[]}]}]}]},{"value":"舞狮","sub":[]}]}')},103:(e,t,n)=>{var o="",a=n(920);const r={method:"GET",mode:"cors",referrer:"no-referrer"};function s(){return new Promise(((e,t)=>{sessionStorage||t("Not support action");const n=sessionStorage.getItem("video");if(!n)return t("No such item in local storage.");try{e(JSON.parse(n))}catch(e){console.log("Data in local storage not available."),t(e)}}))}async function l(){const e=await fetch(o+"data/video.json",r);if(e.ok)return e.json();throw e.statusText}async function u(){const e=await fetch("https://raw.githubusercontent.com/TheVeryDarkness/sport_data/main/video.json",r);if(e.ok)return e.json();throw e.statusText}sessionStorage||console.log("Local storage not supported.");var c=[[],[],[],[],[]],i={};function d(e){const t=document.getElementById("loadStatus");t?t.value=e?"重置":"重试":console.error("Name an element to show the status of loading.")}function g(e="全选"){return{value:e,sub:[]}}function v(e,t){return new Array(g("全选")).concat(function(e,t){var n=new Array;for(const o of function(e,t){return 0===t?e:new Array(e[t])}(e,t))o.sub?n=n.concat(o.sub):console.log("Node '",o.value,"' miss property 'sub'.");return n}(e,t))}var h=[document.getElementById("s0"),document.getElementById("s1"),document.getElementById("s2"),document.getElementById("s3"),document.getElementById("s4")],m=()=>{console.log("Not specified.")};function p(e){(function(e){(Promise.any?Promise.any([s(),l(),u()]):s().catch((e=>(console.log(e),l()))).catch((e=>(console.log(e),u()))).catch((e=>{throw console.log(e),alert("Can't load by any mean."),"Load failure."}))).then((t=>{i=t,e(),d(!0),function(e){sessionStorage&&sessionStorage.setItem("video",JSON.stringify(e))}(i),console.log("Video data stored.")})).catch((t=>{console.log(t),sessionStorage&&sessionStorage.removeItem("video"),console.error("Can't fecth from outside."),console.log("Local storage removed. Refresh to reload."),alert("Using embeded data."),function(){const e=n(99);return new Promise(((t,n)=>{t(e)}))}().then((t=>{i=t,e(),d(!0)})).catch((e=>{console.log(e),d(!1),alert("Failed to load video data properly by any means.")}))}))})((()=>{b(-1)})),e?m=e:console.error("Callback not available.")}function f(e,t){!function(e,t){e.options.length=t.length;for(const n in t)e.options[n].text=t[n].value}(e,t)}function b(e){switch(e>0&&0==h[e-1].selectedIndex&&function(e){switch(e){case 4:y(h[3],h[4],c[3]);case 3:y(h[2],h[3],c[2]);case 2:y(h[1],h[2],c[1]);case 1:y(h[0],h[1],c[0])}}(e),e){case-1:c[0]=new Array(g()).concat(i.root),f(h[0],c[0]);case 0:c[1]=v(c[0],h[0].selectedIndex),f(h[1],c[1]),h[1].selectedIndex=0;case 1:c[2]=v(c[1],h[1].selectedIndex),f(h[2],c[2]),h[2].selectedIndex=0;case 2:c[3]=v(c[2],h[2].selectedIndex),f(h[3],c[3]),h[3].selectedIndex=0;case 3:c[4]=v(c[3],h[3].selectedIndex),f(h[4],c[4]),h[4].selectedIndex=0;case 4:m();break;default:console.error("Unexpected index ",e)}}function y(e,t,n){var o=1,a=0;for(const e of n){if((o+=e.sub.length)>t.selectedIndex)break;++a}e.selectedIndex=a}var x={};function w(e=h.length){!function(e){x=e;const t=document.getElementById("nodeProperties");if(t){for(;t.childNodes.length>0;)t.removeChild(t.lastChild);var n=0;for(const r in e)if(e.hasOwnProperty(r)){++n;const s=e[r],l=document.createElement("li"),u=document.createElement("label");u.innerText=r,u.for="display-li-"+n;const c=document.createElement("p");var o;if(c.className="sub","sub"!=r)(o=document.createElement("input")).value=s,o.onchange=e=>{x[r]=e.target.value,console.log(JSON.stringify(i))};else{var a=[];for(const e of s)a.push(e.value);o=document.createTextNode(a)}o.id="display-li-"+n,c.appendChild(o),u.appendChild(c),l.appendChild(u),t.appendChild(l)}}else console.error("No display target.")}(function(e=h.length){h.length<e&&(console.error("Out of Range"),e=h.length);var t=-1;for(let n=0;n<e;n++)h[n].selectedIndex>0&&(t=n);return t>=0?c[t][h[t].selectedIndex]:{}}(e))}o="../",(0,a.i)(),p(w);for(let e=0;e<h.length;e++)h[e].onchange=()=>b(e);lightSwitch.onclick=a.m,document.getElementById("selectItem").onsubmit=e=>{e.preventDefault(),p(w)},document.getElementById("generateJSON").onclick=function(){var e,t;result.textContent=JSON.stringify(i,null,1),e=result.textContent,(t=document.createElement("a")).setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","result.json"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={383:0},t=[[103,920]],o=()=>{};function a(){for(var o,a=0;a<t.length;a++){for(var r=t[a],s=!0,l=1;l<r.length;l++){var u=r[l];0!==e[u]&&(s=!1)}s&&(t.splice(a--,1),o=n(n.s=r[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),o}n.x=()=>{n.x=()=>{},s=s.slice();for(var e=0;e<s.length;e++)r(s[e]);return(o=a)()};var r=a=>{for(var r,s,[u,c,i,d]=a,g=0,v=[];g<u.length;g++)s=u[g],n.o(e,s)&&e[s]&&v.push(e[s][0]),e[s]=0;for(r in c)n.o(c,r)&&(n.m[r]=c[r]);for(i&&i(n),l(a);v.length;)v.shift()();return d&&t.push.apply(t,d),o()},s=self.webpackChunkwebsite_dragonlion_sport=self.webpackChunkwebsite_dragonlion_sport||[],l=s.push.bind(s);s.push=r})(),n.x()})();