(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3703a69a"],{"157c":function(e,t,n){e.exports=n.p+"img/image_3_2.1cfd38ba.png"},"178a":function(e,t,n){"use strict";var a=n("21c9"),i=n.n(a);i.a},"21c9":function(e,t,n){},"56f3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"agencyAccount",staticClass:"downloadAgencyAccount"},[e._m(0),n("div",{staticClass:"register"},[n("div",{staticClass:"inputItem"},[n("van-field",{attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),11==e.phone.length?n("div",{staticClass:"inputItem"},[n("div",{staticClass:"password"},[n("van-field",{attrs:{placeholder:"输入验证码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("div",{staticClass:"getYZM"},[n("van-button",{attrs:{plain:"",type:"primary"},on:{click:e.getYZM}},[e.getting?n("span",[e._v(e._s(e.second))]):n("span",[e._v("获取验证码")])])],1)]):e._e(),n("div",{attrs:{id:"captcha"}}),n("div",{staticClass:"inputItem submitBtn"},[n("van-button",{attrs:{type:"primary",size:"large"},on:{click:e.register}},[e._v("立 即 注 册")])],1)]),e._m(1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro"},[a("img",{attrs:{src:n("ff86"),alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"intro bottom"},[a("img",{attrs:{src:n("157c"),alt:""}})])}],o=(n("be7f"),n("565f")),s=(n("66b9"),n("b650")),c=(n("e7e5"),n("d399")),r=n("2b0e"),d=n("93eb"),l=n.n(d),p=n("8c4e"),u=n("403a");r["a"].use(o["a"]).use(s["a"]).use(c["a"]);var h={data:function(){return{phone:"",password:"",second:60,getting:!1,captchaIns:""}},mounted:function(){window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||window.setTimeout(function(){document.activeElement.scrollIntoViewIfNeeded()},0)});var e=this;initNECaptcha({captchaId:u["b"].captchaId,element:"#captcha",mode:"bind",width:"320px",enableClose:!0,onVerify:function(t,n){if(!t&&(e.captchaIns.close(),n)){console.log(n);var a={clientType:"h5",verifyType:"sms",captchaValidate:n.validate,phone:e.phone};e.captchaIns&&e.captchaIns.refresh(),p["a"].sendVerifycode(a).then(function(t){if(0===t.code&&!e.getting){e.getting=!0;var n=setInterval(function(){e.second--,e.second<=0&&(clearInterval(n),e.second=60,e.getting=!1)},1e3)}})}}},function(t){e.captchaIns=t},function(e){})},methods:{getYZM:function(){11===this.phone.length?this.captchaIns&&this.captchaIns.verify():Object(c["a"])("请输入11位合法手机号！")},register:function(){var e=this;if(11===this.phone.length)if(""!=this.password){var t={clientType:"h5",phone:this.phone,verifyType:"sms",verifycode:this.password};p["a"].authVerifycodeLogin(t).then(function(t){0==t.code&&(1==t.data.authInfo.newRegistration&&(l.a.track("WebSignUp",{target:"代理记账推广_02",phone:e.phone}),l.a.login(t.data.authInfo.uid)),Object(c["a"])("恭喜您，注册成功！"),e.download())})}else Object(c["a"])("请输入短信验证码！");else Object(c["a"])("请输入11位合法手机号！")},download:function(){var e={platform:function(){var e=navigator.userAgent;navigator.appVersion;return{android:e.indexOf("Android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iPhone")>-1,iPad:e.indexOf("iPad")>-1,weixin:e.indexOf("MicroMessenger")>-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()},t="";e.platform.android?e.platform.weixin?alert("请复制链接到其他浏览器打开"):(t="https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk",location.href=t,console.log("安卓")):(e.platform.iPhone?t="https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8":e.platform.iPad&&(t="https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8"),console.log("ios"))}}},f=h,g=(n("178a"),n("2877")),m=Object(g["a"])(f,a,i,!1,null,"1eb5d53e",null);t["default"]=m.exports},ff86:function(e,t,n){e.exports=n.p+"img/image_3_1.87a4265d.png"}}]);
//# sourceMappingURL=chunk-3703a69a.805b4211.js.map