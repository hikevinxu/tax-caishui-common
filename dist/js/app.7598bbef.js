(function(e){function n(n){for(var c,a,u=n[0],i=n[1],f=n[2],l=0,h=[];l<u.length;l++)a=u[l],o[a]&&h.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(h.length)h.shift()();return r.push.apply(r,f||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(c=!1)}c&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},o={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a41ea":"375f8e04","chunk-2f957e4e":"7032514b","chunk-0b468cdd":"26fda7cd","chunk-b7f38c62":"05e46af7","chunk-0be883ee":"41043d33","chunk-17134fda":"e9bc578d","chunk-19ca6448":"004eb44d","chunk-4c00a582":"4f2a6794","chunk-7cf0e2fc":"b4e72e50","chunk-814176a0":"be2bb711","chunk-83e2c66c":"9541eb51","chunk-8ee4e480":"abb9e876","chunk-9b8f4a74":"dc4e2f5b","chunk-c7d49fc4":"c03b8b84","chunk-f88c25a0":"2c6f7d32","chunk-59b53034":"cd3843ce","chunk-797963bc":"a259a367","chunk-b1ad4262":"04455aff"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2f957e4e":1,"chunk-0b468cdd":1,"chunk-b7f38c62":1,"chunk-0be883ee":1,"chunk-17134fda":1,"chunk-19ca6448":1,"chunk-4c00a582":1,"chunk-7cf0e2fc":1,"chunk-814176a0":1,"chunk-83e2c66c":1,"chunk-8ee4e480":1,"chunk-9b8f4a74":1,"chunk-c7d49fc4":1,"chunk-f88c25a0":1,"chunk-59b53034":1,"chunk-797963bc":1,"chunk-b1ad4262":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-2d0a41ea":"31d6cfe0","chunk-2f957e4e":"e39ccb7f","chunk-0b468cdd":"3827e9d1","chunk-b7f38c62":"c6a3030d","chunk-0be883ee":"a2412345","chunk-17134fda":"7778925b","chunk-19ca6448":"0c1b08a0","chunk-4c00a582":"f5aa7bf2","chunk-7cf0e2fc":"388dfd9e","chunk-814176a0":"de63840b","chunk-83e2c66c":"635dd7dc","chunk-8ee4e480":"38713d6d","chunk-9b8f4a74":"68d012a9","chunk-c7d49fc4":"2dfea264","chunk-f88c25a0":"c9ce9fb0","chunk-59b53034":"b3c607cf","chunk-797963bc":"8edc3b45","chunk-b1ad4262":"9c8c0287"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var f=r[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===c||l===o))return n()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){f=h[u],l=f.getAttribute("data-href");if(l===c||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],d.parentNode.removeChild(d),t(r)},d.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(d)}).then(function(){a[e]=0}));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var r=new Promise(function(n,t){c=o[e]=[n,t]});n.push(c[2]=r);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),f=function(n){l.onerror=l.onload=null,clearTimeout(h);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,r=new Error("Loading chunk "+e+" failed.\n("+c+": "+a+")");r.type=c,r.request=a,t[1](r)}o[e]=void 0}};var h=setTimeout(function(){f({type:"timeout",target:l})},12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var d=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var c=t("64a9"),a=t.n(c);a.a},"403a":function(e,n,t){"use strict";t.d(n,"b",function(){return c}),t.d(n,"a",function(){return a}),t.d(n,"c",function(){return o});t("386d"),t("4917"),t("3b2b");var c={IMAppKey:"7cb7efab05029f8c18576aa98a9cce96",amapKey:"54f7b2ff0b18deaefc0fd1925e434ead",captchaId:"542ca0c104ea48ffb746c922d27cdc5c",SC_server_prod_url:"https://sensors-api.caishuiyu.com/sa?project=caishuiyu",SC_server_sit_url:"https://sensors-api.caishuiyu.com/sa?project=default"},a={platform:function(){var e=navigator.userAgent;navigator.appVersion;return{android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,weixin:e.indexOf("MicroMessenger")>-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase(),deviceInfo:function(){var e,n=window.innerWidth;return e=n>750?"pc":"phone",{deviceWidth:n,deviceType:e}}},o={companyDetailPath:"main/home/queryService/company"}},"521d":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),a=(t("5cfb"),t("db4d"),t("93eb")),o=t.n(a),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.keepAlive}},[t("router-view")],1)],1)},u=[],i={data:function(){return{keepAlive:[]}},created:function(){}},f=i,l=(t("034f"),t("2877")),h=Object(l["a"])(f,r,u,!1,null,null,null),d=h.exports,s=t("a18c"),p=t("2f62"),m={activeLi:"",companyInfo:{}},b=m,k=t("f499"),v=t.n(k),g={update_activeLi:function(e,n){e.activeLi=n},update_companyInfo:function(e,n){e.companyInfo=n,localStorage.setItem("companyInfo",v()(n))}},y=g,_={getActiveLi:function(e){return e.activeLi},getCompanyInfo:function(e){return JSON.parse(localStorage.getItem("companyInfo"))}},w=_,P=t("795b"),A=t.n(P),O={save_activeLi:function(e,n){return new A.a(function(t){e.commit("update_activeLi",n),t()})},save_companyInfo:function(e,n){return new A.a(function(t){e.commit("update_companyInfo",n),t()})}},S=O;c["a"].use(p["a"]);var j=new p["a"].Store({state:b,mutations:y,getters:w,actions:S,plugins:[]}),x=(t("a287"),t("f762"),t("521d"),t("403a"));c["a"].config.productionTip=!1;var I="";I=x["b"].SC_server_prod_url,o.a.init({server_url:I,use_app_track:!0,is_track_single_page:!0,heatmap:{clickmap:"not_collect",scroll_notice_map:"not_collect",show_log:!1}}),new c["a"]({router:s["a"],store:j,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,n,t){},a18c:function(e,n,t){"use strict";var c=t("2b0e"),a=t("8c4f");a["a"].prototype.goBack=function(){this.isBack=!0,window.history.back()},c["a"].use(a["a"]),n["a"]=new a["a"]({mode:"history",base:"/",routes:[{path:"/overseasCompany",name:"overseasCompany",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-f88c25a0")]).then(t.bind(null,"0d17"))},meta:{title:"海外公司注册专题"}},{path:"/agencyAccountProject",name:"agencyAccountProject",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-0b468cdd")]).then(t.bind(null,"2a87"))},meta:{title:"代理记账专题"}},{path:"/QA",name:"QA",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-c7d49fc4")]).then(t.bind(null,"dbdd"))},meta:{title:"注册海外公司要注意什么？"}},{path:"/landPage",name:"landPage",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-8ee4e480")]).then(t.bind(null,"0037"))},meta:{title:"财税鱼渠道页"}},{path:"/downloadAPP",name:"downloadAPP",component:function(){return t.e("chunk-2d0a41ea").then(t.bind(null,"04a1"))},meta:{title:"财税鱼渠道页"}},{path:"/agencyAccount",name:"agencyAccount",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-83e2c66c")]).then(t.bind(null,"3b30"))},meta:{title:"代理记账推广_01"}},{path:"/kaihu",name:"kaihu",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-7cf0e2fc")]).then(t.bind(null,"0694"))},meta:{title:"公司注册"}},{path:"/agencyAccount_2",name:"agencyAccount_2",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-19ca6448")]).then(t.bind(null,"56f3"))},meta:{title:"代理记账推广_02"}},{path:"/overseasRegister",name:"overseasRegister",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-4c00a582")]).then(t.bind(null,"301f"))},meta:{title:"海外注册推广_01"}},{path:"/overseasRegister_2",name:"overseasRegister_2",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-17134fda")]).then(t.bind(null,"b502"))},meta:{title:"海外注册推广_02"}},{path:"/overseasDownload_sgbs1cs1",name:"overseasDownload_sgbs1cs1",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-0be883ee")]).then(t.bind(null,"c52c"))},meta:{title:"海外注册推广_D02"}},{path:"/overseasDownload_bdyf1cs1",name:"overseasDownload_bdyf1cs1",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-814176a0")]).then(t.bind(null,"021e"))},meta:{title:"海外注册推广_D02"}},{path:"/overseasDownload_360pz1cs1",name:"overseasDownload_360pz1cs1",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-9b8f4a74")]).then(t.bind(null,"126e"))},meta:{title:"海外注册推广_D02"}},{path:"/companyRegister",name:"companyRegister",component:function(){return Promise.all([t.e("chunk-2f957e4e"),t.e("chunk-b7f38c62"),t.e("chunk-7cf0e2fc")]).then(t.bind(null,"0694"))},meta:{title:"公司注册"}},{path:"/download",name:"download",component:function(){return t.e("chunk-797963bc").then(t.bind(null,"e54d"))},meta:{title:"财税鱼"}},{path:"/netError",name:"netError",component:function(){return t.e("chunk-b1ad4262").then(t.bind(null,"2eac"))},meta:{title:"网络错误"}},{path:"/404",name:"error404",component:function(){return t.e("chunk-59b53034").then(t.bind(null,"45a2"))},meta:{title:"404"}},{path:"*",redirect:"/404"}]})},a287:function(e,n,t){},f762:function(e,n,t){}});
//# sourceMappingURL=app.7598bbef.js.map