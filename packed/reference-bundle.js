(()=>{"use strict";var e,c="";function t(){linkSchemeStyle.href=c+"./css/light.css",e=!0}function i(){linkSchemeStyle.href=c+"./css/dark.css",e=!1}c="../",function(){if(window.matchMedia("(prefers-color-scheme: dark)").matches)i();else if(window.matchMedia("(prefers-color-scheme: light)").matches)t();else if(window.matchMedia("(prefers-color-scheme: no-preference)").matches)t();else{var e=new Date;e.getHours()>=22||e.getHours()<=6?i():t()}}(),document.getElementById("lightSwitch").onclick=function(){e?(i(),lightIndication.innerText="一熄灯一切被纪念"):(t(),lightIndication.innerText="一开灯一切变妄念")}})();