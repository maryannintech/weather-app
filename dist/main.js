(()=>{"use strict";var n,e,t,r,o,c,a,i,s,d,u,l,p,f,g={426:(n,e,t)=>{t.d(e,{Z:()=>L});var r=t(81),o=t.n(r),c=t(645),a=t.n(c),i=t(667),s=t.n(i),d=new URL(t(487),t.b),u=new URL(t(357),t.b),l=new URL(t(842),t.b),p=new URL(t(145),t.b),f=new URL(t(166),t.b),g=new URL(t(853),t.b),m=new URL(t(938),t.b),b=a()(o());b.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap);"]);var h=s()(d),y=s()(u),v=s()(l),x=s()(p),w=s()(f),k=s()(g),S=s()(m);b.push([n.id,`* {\n  font-family: "Work Sans", sans-serif;\n  box-sizing: border-box;\n}\n\n:root {\n  --background-color: #15050b;\n  --primary-color: #6a4865;\n  --secondary-color: #f9fbfb;\n  --text-color: #ffffff;\n}\n\n::selection {\n  background: var(--primary-color);\n}\n\nbody {\n  background-image: url(${h});\n  height: 100vh;\n  margin: 0;\n  background-color: var(--background-color);\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: var(--text-color);\n  padding: 20px;\n}\n\n.weather-modal {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  flex-direction: column;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n\n.modal-content {\n  background-color: var(--background-color);\n  padding: 15px;\n  border-radius: 30px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  box-shadow: -10px 10px 0 1px gray;\n}\n\n.title {\n  font-weight: 500;\n  margin: 5px 0;\n  text-align: center;\n}\n\ninput,\nbutton {\n  border-radius: 30px;\n  border: none;\n  margin-bottom: 3px;\n}\n\ninput {\n  padding: 8px;\n  margin-right: 10px;\n}\n\n.error {\n  margin: 0 5px;\n  color: var(--text-color);\n}\n\nbutton:not(.switch, .fah, .cel) {\n  cursor: pointer;\n  padding: 6px 7px;\n  font-size: 1rem;\n  background-color: var(--secondary-color);\n}\n\np {\n  margin: 0;\n}\n\n.loader {\n  text-align: center;\n  margin: 10px;\n  font-size: 1.7rem;\n}\n\n.weather-img {\n  width: 100%;\n  height: 10vh;\n  background-color: var(--primary-color);\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  margin: 10px 0;\n}\n\n/* backgrounds by SVGBackgrounds.com */\n.sunny-bg {\n  background-image: url(${y});\n}\n\n.cloudy-bg {\n  background-image: url(${v});\n}\n\n.rainy-bg {\n  background-image: url(${x});\n}\n\n.snowy-bg {\n  background-image: url(${w});\n}\n\n.thunder-bg {\n  background-image: url(${k});\n}\n\n.windy-bg {\n  background-image: url(${S});\n}\n\n.container {\n  text-align: center;\n}\n\n.cel,\n.fah {\n  margin: 5px;\n  padding: 0 5px;\n  background-color: var(--primary-color);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n.bxl-github {\n  background-color: var(--primary-color);\n  border-radius: 10px;\n  padding: 3px;\n  margin: 0;\n}\n\n.buttons {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  justify-content: space-between;\n}\n\nbutton:hover {\n  background-color: #3f2a3c;\n}\n\nform > button:hover {\n  background-color: #b8b8b8;\n}\n\n.hide {\n  display: none;\n}\n\na {\n  text-decoration: none;\n  color: var(--text-color);\n}\n\n.bxl-github:hover {\n  background-color: #3f2a3c;\n}\n\nfooter {\n  text-align: center;\n}\n`,""]);const L=b},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,c){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&a[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var c={},a=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],u=c[d]||0,l="".concat(d," ").concat(u);c[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var g=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:l,updater:g,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var c=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<c.length;a++){var i=t(c[a]);e[i].references--}for(var s=r(n,o),d=0;d<c.length;d++){var u=t(c[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}c=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},842:(n,e,t)=>{n.exports=t.p+"87457dbce1938cd038f7.svg"},487:(n,e,t)=>{n.exports=t.p+"00f8e62a69e5c7f08bdb.svg"},145:(n,e,t)=>{n.exports=t.p+"1c816dba154c6eeb8a35.svg"},166:(n,e,t)=>{n.exports=t.p+"380e0cf828019305dbf4.svg"},357:(n,e,t)=>{n.exports=t.p+"c78405581de054b54341.svg"},853:(n,e,t)=>{n.exports=t.p+"97d553f580907c86ebc4.svg"},938:(n,e,t)=>{n.exports=t.p+"e1344e0740c49e30bd59.svg"}},m={};function b(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return g[n](t,t.exports,b),t.exports}b.m=g,b.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return b.d(e,{a:e}),e},b.d=(n,e)=>{for(var t in e)b.o(e,t)&&!b.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),b.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;b.g.importScripts&&(n=b.g.location+"");var e=b.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=n})(),b.b=document.baseURI||self.location.href,b.nc=void 0,n=b(379),e=b.n(n),t=b(795),r=b.n(t),o=b(569),c=b.n(o),a=b(565),i=b.n(a),s=b(216),d=b.n(s),u=b(589),l=b.n(u),p=b(426),(f={}).styleTagTransform=l(),f.setAttributes=i(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector(".formsearch").addEventListener("submit",(n=>{n.preventDefault(),async function(){const n=document.querySelector("#search-location").value,e=document.querySelector(".error"),t=document.querySelector(".loader"),r=document.querySelector(".content-weather");try{t.classList.remove("hide");const o=await fetch(`https://api.weatherapi.com/v1/current.json?key=43de531f62bb4ccbb8961404230806&q=${n}`,{mode:"cors"}),c=await o.json();t.classList.add("hide"),e.classList.add("hide"),r.classList.remove("hide"),function(n){const e=document.querySelector(".location-name"),t=document.querySelector(".country"),r=document.querySelector(".date"),o=document.querySelector(".tempt"),c=document.querySelector(".condition"),a=document.querySelector(".wind-dir"),i=document.querySelector(".humidity"),s=document.querySelector(".weather-img"),d=document.querySelector(".fah"),u=document.querySelector(".cel");d.addEventListener("click",(()=>{!function(n,e){e.textContent=`${n.temptF}°F`}(n,o)})),u.addEventListener("click",(()=>{!function(n,e){e.textContent=`${n.temptC}°C`}(n,o)})),e.textContent=`${n.location},`,t.textContent=n.country,r.textContent=n.date,o.textContent=`${n.temptF}°F`,c.textContent=n.condition,a.textContent=n.windDirection,i.textContent=n.humidity,s.classList.remove("sunny-bg","cloudy-bg","rainy-bg","snowy-bg","thunder-bg","windy-bg");const l=n.condition.toLowerCase();l.includes("sunny")||l.includes("clear")?s.classList.add("sunny-bg"):l.includes("cloudy")||l.includes("overcast")?s.classList.add("cloudy-bg"):l.includes("rain")||l.includes("drizzle")?s.classList.add("rainy-bg"):l.includes("snow")||l.includes("ice")||l.includes("sleet")?s.classList.add("snowy-bg"):l.includes("thunder")?s.classList.add("thunder-bg"):(l.includes("windy")||l.includes("fog")||l.includes("mist"))&&s.classList.add("windy-bg")}({location:c.location.name,country:c.location.country,date:c.location.localtime,temptF:c.current.temp_f,temptC:c.current.temp_c,condition:c.current.condition.text,windDirection:c.current.wind_dir,humidity:c.current.humidity})}catch(n){r.classList.add("hide"),t.classList.add("hide"),e.classList.remove("hide"),e.textContent="location not found 😥"}}()}))})();