(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9f24282"],{"0037":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"landPage",style:"background: "+t.formData.pageBgColor},[t.isWechat&&t.isAndroid?i("div",{staticClass:"wechat"},[i("p",{staticClass:"guide_text"},[t._v("点击右上角按钮，然后在弹出的菜单中，点击 "),i("strong",{staticStyle:{"font-weight":"bold"}},[t._v("在"+t._s(t.isIos?"Safari":"浏览器")+"中打开")]),t._v("，即可安装")]),i("img",{staticClass:"arrow",attrs:{src:a("7662")}})]):t._e(),i("div",{staticClass:"container"},[i("div",{staticClass:"head"},[t.formData.headImg?i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.formData.headImg,alt:""}})]):t._e(),t.formData.topImg?i("div",{staticClass:"topImg",style:{top:t.formData.topSpace/36+"rem"}},[i("img",{attrs:{src:t.formData.topImg,alt:""}})]):t._e()]),1==t.formData.pageType?i("div",{staticClass:"register"},[i("div",{staticClass:"inputItem"},[i("van-field",{attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),11==t.phone.length?i("div",{staticClass:"inputItem"},[i("div",{staticClass:"password"},[i("van-field",{attrs:{placeholder:"输入验证码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("div",{staticClass:"getYZM"},[i("button",{style:{"border-color":t.formData.buttonBgColor,color:t.formData.buttonBgColor},on:{click:t.getYZM}},[t.getting?i("span",[t._v(t._s(t.second))]):i("span",[t._v("获取验证码")])])])]):t._e(),i("div",{attrs:{id:"captcha"}}),i("div",{staticClass:"inputItem submitBtn"},[i("button",{style:{background:t.formData.buttonBgColor},on:{click:t.register}},[t._v(t._s(t.formData.buttonRemark))])]),t.formData.buttonUnder?i("div",{staticClass:"buttonUnder",style:{color:t.formData.buttonUnderColor},domProps:{innerHTML:t._s(t.handleText(t.formData.buttonUnder))}}):t._e()]):t._e(),2==t.formData.pageType?i("div",{staticClass:"download"},[i("div",{staticClass:"inputItem downloadBtn"},[i("button",{style:{background:t.formData.buttonBgColor},on:{click:t.download}},[t._v(t._s(t.formData.buttonRemark))])]),t.formData.buttonUnder?i("div",{staticClass:"buttonUnder",style:{color:t.formData.buttonUnderColor},domProps:{innerHTML:t._s(t.handleText(t.formData.buttonUnder))}}):t._e(),i("div",{attrs:{id:"captcha"}})]):t._e(),t.formData.tailImg?i("div",{staticClass:"bottomImg"},[i("img",{attrs:{src:t.formData.tailImg,alt:""}})]):t._e(),i("div",{staticClass:"bottomCopyRight"},[t.formData.riskInfo?i("div",{staticClass:"topText"},[i("span",{style:{color:t.formData.riskInfoColor},domProps:{innerHTML:t._s(t.handleText(t.formData.riskInfo))}})]):t._e(),t.formData.companyInfo?i("div",{staticClass:"bottomText"},[i("span",{style:{color:t.formData.companyInfoColor},domProps:{innerHTML:t._s(t.handleText(t.formData.companyInfo))}})]):t._e()])])])},s=[],n=a("0b1b"),r=n["a"],o=(a("7f45"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,"2c70b3ea",null);e["default"]=l.exports},"0b1b":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),vant_es_field_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("be7f"),vant_es_field__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("565f"),vant_es_button_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("66b9"),vant_es_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b650"),vant_es_toast_style__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("e7e5"),vant_es_toast__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("d399"),vue__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2b0e"),sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("93eb"),sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9__),_api_globalApi__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("8c4e"),_utils_global__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("403a");vue__WEBPACK_IMPORTED_MODULE_8__["a"].use(vant_es_field__WEBPACK_IMPORTED_MODULE_3__["a"]).use(vant_es_button__WEBPACK_IMPORTED_MODULE_5__["a"]).use(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"]),__webpack_exports__["a"]={data:function(){return{isWechat:!1,isAndroid:!1,isIos:!1,phone:"",password:"",second:60,getting:!1,captchaIns:"",getYZMStatus:!0,downloadUrl:"https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk",formData:{}}},created:function(){this.isWechat=_utils_global__WEBPACK_IMPORTED_MODULE_11__["a"].platform.weixin,this.isAndroid=_utils_global__WEBPACK_IMPORTED_MODULE_11__["a"].platform.android,this.isIos=_utils_global__WEBPACK_IMPORTED_MODULE_11__["a"].platform.iPhone||_utils_global__WEBPACK_IMPORTED_MODULE_11__["a"].platform.iPad,window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||window.setTimeout(function(){document.activeElement.scrollIntoViewIfNeeded()},0)}),this.getDetail()},methods:{initNECaptcha:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;initNECaptcha({captchaId:_utils_global__WEBPACK_IMPORTED_MODULE_11__["b"].captchaId,element:"#captcha",mode:"bind",width:"320px",enableClose:!0,onVerify:function(e,a){if(!e&&(t.captchaIns.close(),a)){console.log(a);var i={clientType:"h5",verifyType:"sms",captchaId:_utils_global__WEBPACK_IMPORTED_MODULE_11__["b"].captchaId,captchaValidate:a.validate,phone:t.phone};t.captchaIns&&t.captchaIns.refresh(),_api_globalApi__WEBPACK_IMPORTED_MODULE_10__["a"].sendVerifycode(i).then(function(e){if(0===e.code&&!t.getting){t.getting=!0;var a=setInterval(function(){t.second--,t.second<=0&&(clearInterval(a),t.second=60,t.getting=!1,t.getYZMStatus=!0)},1e3)}}).catch(function(e){t.second=60,t.getting=!1,t.getYZMStatus=!0})}}},function(e){t.captchaIns=e},function(t){})}),getDetail:function(){var t=this,e={id:this.$route.query.id};_api_globalApi__WEBPACK_IMPORTED_MODULE_10__["a"].channelPageObtainDetail(e).then(function(e){if(0==e.code){if(t.formData=e.data,document.title=t.formData.title,t.formData.dowloadUrl&&""!=t.formData.dowloadUrl&&(t.downloadUrl=t.formData.dowloadUrl),t.formData.jsBase){var a=t.formData.jsBase.replace("<script>","").replace('<script type="text/javascript">',"").replace(/<\/script>/,"");t.$emit("running",a)}sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default.a.quick("autoTrackSinglePage",{$title:t.formData.title,appname:"".concat(t.formData.packageName,"渠道页")}),t.initNECaptcha()}})},getYZM:function(){if(this.getYZMStatus){if(this.getYZMStatus=!1,11!==this.phone.length)return void Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"])("请输入11位合法手机号！");this.captchaIns&&this.captchaIns.verify()}},register:function register(){var _this2=this;if(11===this.phone.length)if(""!=this.password){var params={clientType:"h5",phone:this.phone,verifyType:"sms",verifycode:this.password};_api_globalApi__WEBPACK_IMPORTED_MODULE_10__["a"].authVerifycodeLogin(params).then(function(res){if(0==res.code){if(1==res.data.authInfo.newRegistration&&(sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default.a.track("WebSignUp",{target:_this2.formData.title,phone:_this2.phone}),sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default.a.login(res.data.authInfo.uid)),_this2.formData.jsReport)try{eval(_this2.formData.jsReport)}catch(_unused){console.log("jsReport代码 运行时报错")}Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"])("恭喜您，注册成功！"),_this2.$router.push("/downloadAPP?id="+_this2.$route.query.id+"&channelRemark="+_this2.$route.query.channelRemark)}})}else Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"])("请输入短信验证码！");else Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"])("请输入11位合法手机号！")},download:function(){var t="";this.isAndroid?(console.log("安卓端"),this.isWechat?Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_7__["a"])("请点击右上角按钮,选择在浏览器中打开"):(t=this.downloadUrl,sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default.a.track("WebDownloadClick",{target:this.formData.channelRemark,url:location.href}),location.href=t)):this.isIos&&(console.log("ios"),sa_sdk_javascript__WEBPACK_IMPORTED_MODULE_9___default.a.track("WebDownloadClick",{target:this.formData.channelRemark,url:location.href}),t="https://apps.apple.com/cn/app/id1475755025",location.href=t)},handleText:function(t){var e=t.replace(/\n/g,"<br/>");return e}}}},1146:function(t,e,a){},"48f4":function(t,e,a){"use strict";function i(t,e){var a=e.to,i=e.url,s=e.replace;a&&t?t[s?"replace":"push"](a):i&&(s?location.replace(i):location.href=i)}function s(t){i(t.parent&&t.parent.$router,t.props)}a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n});var n={url:String,replace:Boolean,to:[String,Object]}},"565f":function(t,e,a){"use strict";var i=a("861b"),s=a.n(i),n=a("1988"),r=a("ad06"),o=a("7744"),l=a("dfaf"),c=a("1325"),_=a("a8c1"),u=a("d282"),d=a("a142"),h=a("ea8e");function f(){return!d["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var p=Object(u["a"])("field"),g=p[0],b=p[1];e["a"]=g({inheritAttrs:!1,props:Object(n["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(n["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(h["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,a=e.value,i=this.$attrs.maxlength;return"number"===this.type&&Object(d["b"])(i)&&a.length>i&&(a=a.slice(0,i),t.value=a),a}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),f()&&window.scrollTo(0,Object(_["a"])())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,a=-1===String(this.value).indexOf("."),i=e>=48&&e<=57||46===e&&a||45===e;i||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d["c"])(this.autosize)){var a=this.autosize,i=a.maxHeight,s=a.minHeight;i&&(e=Math.min(e,i)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:b("control",this.inputAlign)},[e]);var a={ref:"input",class:b("control",this.inputAlign),domProps:{value:this.value},attrs:Object(n["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},a])):t("input",s()([{attrs:{type:this.type}},a]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:b("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,a=e("right-icon")||this.rightIcon;if(a)return t("div",{class:b("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])}},render:function(t){var e,a=this.slots,i=this.labelAlign,s={icon:this.renderLeftIcon};return a("label")&&(s.title=function(){return a("label")}),t(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[b("label",i),this.labelClass],arrowDirection:this.arrowDirection},class:b((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+i]=i,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:s,on:{click:this.onClick}},[t("div",{class:b("body")},[this.renderInput(),this.showClear&&t(r["a"],{attrs:{name:"clear"},class:b("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),a("button")&&t("div",{class:b("button")},[a("button")])]),this.errorMessage&&t("div",{class:b("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"66b9":function(t,e,a){"use strict";a("68ef"),a("09fe")},7662:function(t,e){t.exports="data:image/png;base64,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"},7744:function(t,e,a){"use strict";var i=a("1988"),s=a("861b"),n=a.n(s),r=a("d282"),o=a("a142"),l=a("dfaf"),c=a("ba31"),_=a("48f4"),u=a("ad06"),d=Object(r["a"])("cell"),h=d[0],f=d[1];function p(t,e,a,i){var s=e.icon,r=e.size,l=e.title,d=e.label,h=e.value,p=e.isLink,g=e.arrowDirection,b=a.title||Object(o["b"])(l),D=a.default||Object(o["b"])(h),m=a.label||Object(o["b"])(d),v=m&&t("div",{class:[f("label"),e.labelClass]},[a.label?a.label():d]),A=b&&t("div",{class:[f("title"),e.titleClass],style:e.titleStyle},[a.title?a.title():t("span",[l]),v]),E=D&&t("div",{class:[f("value",{alone:!a.title&&!l}),e.valueClass]},[a.default?a.default():t("span",[h])]),C=a.icon?a.icon():s&&t(u["a"],{class:f("left-icon"),attrs:{name:s}}),O=a["right-icon"],P=O?O():p&&t(u["a"],{class:f("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function M(t){Object(c["a"])(i,"click",t),Object(_["a"])(i)}var w={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return r&&(w[r]=r),t("div",n()([{class:f(w),on:{click:M}},Object(c["b"])(i)]),[C,A,E,P,a.extra&&a.extra()])}p.props=Object(i["a"])({},l["a"],_["b"]),e["a"]=h(p)},"7f45":function(t,e,a){"use strict";var i=a("eea8"),s=a.n(i);s.a},"8c4e":function(t,e,a){"use strict";var i=a("0d5e");e["a"]={getAddressAreas:function(t){return Object(i["a"])("/address/areas",t)},getAddressCitys:function(t){return Object(i["a"])("/address/citys",t)},getAddressProvinces:function(t){return Object(i["a"])("/address/provinces",t)},getAddressTrees:function(t){return Object(i["a"])("/address/trees",t)},getFileuploadUpload:function(t){return Object(i["b"])("/fileupload/upload",t)},authVerifycodeLogin:function(t){return Object(i["b"])("/auth/verifycode/login",t)},sendVerifycode:function(t){return Object(i["b"])("/auth/verifycode/login/send_verifycode",t)},channelPageObtainDetail:function(t){return Object(i["a"])("/api/channelPage/obtainDetail",t)}}},b650:function(t,e,a){"use strict";var i=a("1988"),s=a("861b"),n=a.n(s),r=a("d282"),o=a("ba31"),l=a("48f4"),c=a("ad06"),_=a("543e"),u=Object(r["a"])("button"),d=u[0],h=u[1];function f(t,e,a,i){var s=e.tag,r=e.icon,u=e.type,d=e.disabled,f=e.loading,p=e.hairline,g=e.loadingText;function b(t){f||d||(Object(o["a"])(i,"click",t),Object(l["a"])(i))}function D(t){Object(o["a"])(i,"touchstart",t)}var m=[h([u,e.size,{disabled:d,hairline:p,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":p}];function v(){var i,s=[];return f?s.push(t(_["a"],{class:h("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===u?void 0:""}})):r&&s.push(t(c["a"],{attrs:{name:r},class:h("icon")})),i=f?g:a.default?a.default():e.text,i&&s.push(t("span",{class:h("text")},[i])),s}return t(s,n()([{class:m,attrs:{type:e.nativeType,disabled:d},on:{click:b,touchstart:D}},Object(o["b"])(i)]),[v()])}f.props=Object(i["a"])({},l["b"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(f)},be7f:function(t,e,a){"use strict";a("68ef"),a("09fe"),a("1146")},dfaf:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},eea8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-f9f24282.df034f05.js.map