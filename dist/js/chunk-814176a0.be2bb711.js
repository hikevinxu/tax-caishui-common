(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-814176a0"],{"021e":function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{ref:"agencyAccount",staticClass:"downloadAgencyAccount"},[t.isWechat&&t.isAndroid?o("div",{staticClass:"weixin"},[o("p",{staticClass:"guide_text"},[t._v("点击右上角按钮，然后在弹出的菜单中，点击 "),o("strong",{staticStyle:{"font-weight":"bold"}},[t._v("在"+t._s(t.isIos?"Safari":"浏览器")+"中打开")]),t._v("，即可安装")]),o("img",{staticClass:"arrow",attrs:{src:s("7662")}})]):t._e(),o("div",[t._m(0),o("div",{staticClass:"download"},[o("div",{attrs:{id:"captcha"}}),o("div",{staticClass:"inputItem downloadBtn"},[o("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.download}},[t._v("立 即 下 载")])],1)]),t._m(1)])])},i=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"intro"},[o("img",{attrs:{src:s("25ad"),alt:""}})])},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"intro bottom"},[o("img",{attrs:{src:s("6ecb"),alt:""}})])}],e=(s("be7f"),s("565f")),A=(s("66b9"),s("b650")),n=(s("e7e5"),s("d399")),g=s("2b0e"),r=s("93eb"),c=s.n(r),l=(s("8c4e"),s("403a"));g["a"].use(e["a"]).use(A["a"]).use(n["a"]);var d={data:function(){return{phone:"",password:"",second:60,getting:!1,captchaIns:"",isWechat:!1,isAndroid:!1,isIos:!1}},mounted:function(){this.isWechat=l["a"].platform.weixin,this.isAndroid=l["a"].platform.android,this.isIos=l["a"].platform.iPhone||l["a"].platform.iPad,c.a.quick("autoTrackSinglePage",{$title:"海外注册推广_D02"})},methods:{download:function(){var t="";this.isAndroid?(console.log("安卓端"),this.isWechat?Object(n["a"])("请点击右上角按钮,选择在浏览器中打开"):(t="https://res.caishuiyu.com/common/pkg/android/caishuiyu_bdyf1cs1.apk",c.a.track("WebDownloadClick",{target:"海外注册推广_D02",url:location.href}),location.href=t)):this.isIos&&(console.log("ios"),Object(n["a"])("IOS暂不可下载，可前往各大安卓应用市场下载安装！感谢大家！"),t="https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8",c.a.track("WebDownloadClick",{target:"海外注册推广_D02",url:location.href}))}}},u=d,w=(s("04bd"),s("2877")),C=Object(w["a"])(u,o,i,!1,null,"59d24016",null);a["default"]=C.exports},"04bd":function(t,a,s){"use strict";var o=s("80d5"),i=s.n(o);i.a},"25ad":function(t,a,s){t.exports=s.p+"img/image_2_1.79c02a83.png"},"6ecb":function(t,a,s){t.exports=s.p+"img/image_2_2.eef948b8.png"},7662:function(t,a){t.exports="data:image/png;base64,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"},"80d5":function(t,a,s){}}]);
//# sourceMappingURL=chunk-814176a0.be2bb711.js.map