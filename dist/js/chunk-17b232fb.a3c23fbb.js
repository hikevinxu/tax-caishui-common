(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17b232fb"],{1146:function(t,e,i){},3364:function(t,e,i){t.exports=i.p+"img/image_4.19f41c6b.png"},"3b30":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"agencyAccount",staticClass:"downloadAgencyAccount"},[t._m(0),i("div",{staticClass:"register"},[i("div",{staticClass:"inputItem"},[i("van-field",{attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),11==t.phone.length?i("div",{staticClass:"inputItem"},[i("div",{staticClass:"password"},[i("van-field",{attrs:{placeholder:"输入验证码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("div",{staticClass:"getYZM"},[i("van-button",{attrs:{plain:"",type:"primary"},on:{click:t.getYZM}},[t.getting?i("span",[t._v(t._s(t.second))]):i("span",[t._v("获取验证码")])])],1)]):t._e(),i("div",{attrs:{id:"captcha"}}),i("div",{staticClass:"inputItem submitBtn"},[i("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.register}},[t._v("立 即 注 册")])],1)]),t._m(1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[n("img",{attrs:{src:i("eff5"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro bottom"},[n("img",{attrs:{src:i("3364"),alt:""}})])}],s=(i("be7f"),i("565f")),r=(i("66b9"),i("b650")),o=(i("e7e5"),i("d399")),c=i("2b0e"),l=i("93eb"),u=i.n(l),d=i("8c4e"),h=i("403a");c["default"].use(s["a"]).use(r["a"]).use(o["a"]);var f={data:function(){return{phone:"",password:"",second:60,getting:!1,captchaIns:""}},mounted:function(){u.a.quick("autoTrackSinglePage",{$title:"代理记账推广_01"}),window.addEventListener("resize",function(){"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||window.setTimeout(function(){document.activeElement.scrollIntoViewIfNeeded()},0)});var t=this;initNECaptcha({captchaId:h["b"].captchaId,element:"#captcha",mode:"bind",width:"320px",enableClose:!0,onVerify:function(e,i){if(!e&&(t.captchaIns.close(),i)){console.log(i);var n={clientType:"h5",verifyType:"sms",captchaId:h["b"].captchaId,captchaValidate:i.validate,phone:t.phone};t.captchaIns&&t.captchaIns.refresh(),d["a"].sendVerifycode(n).then(function(e){if(0===e.code&&!t.getting){t.getting=!0;var i=setInterval(function(){t.second--,t.second<=0&&(clearInterval(i),t.second=60,t.getting=!1)},1e3)}})}}},function(e){t.captchaIns=e},function(t){})},methods:{getYZM:function(){11===this.phone.length?this.captchaIns&&this.captchaIns.verify():Object(o["a"])("请输入11位合法手机号！")},register:function(){var t=this;if(11===this.phone.length)if(""!=this.password){var e={clientType:"h5",phone:this.phone,verifyType:"sms",verifycode:this.password};d["a"].authVerifycodeLogin(e).then(function(e){0==e.code&&(1==e.data.authInfo.newRegistration&&(u.a.track("WebSignUp",{target:"代理记账推广_01",phone:t.phone}),u.a.login(e.data.authInfo.uid)),Object(o["a"])("恭喜您，注册成功！"),t.$router.push("/downloadAPP"))})}else Object(o["a"])("请输入短信验证码！");else Object(o["a"])("请输入11位合法手机号！")}}},b=f,p=(i("6400"),i("2877")),g=Object(p["a"])(b,n,a,!1,null,"5b362aa8",null);e["default"]=g.exports},"48f4":function(t,e,i){"use strict";function n(t,e){var i=e.to,n=e.url,a=e.replace;i&&t?t[a?"replace":"push"](i):n&&(a?location.replace(n):location.href=n)}function a(t){n(t.parent&&t.parent.$router,t.props)}i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s});var s={url:String,replace:Boolean,to:[String,Object]}},"565f":function(t,e,i){"use strict";var n=i("861b"),a=i.n(n),s=i("1988"),r=i("ad06"),o=i("7744"),c=i("dfaf"),l=i("1325"),u=i("a8c1"),d=i("d282"),h=i("a142"),f=i("ea8e");function b(){return!h["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var p=Object(d["a"])("field"),g=p[0],v=p[1];e["a"]=g({inheritAttrs:!1,props:Object(s["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(h["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(s["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(f["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(h["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),b()&&window.scrollTo(0,Object(u["a"])())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(h["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,a=i.minHeight;n&&(e=Math.min(e,n)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:v("control",this.inputAlign)},[e]);var i={ref:"input",class:v("control",this.inputAlign),domProps:{value:this.value},attrs:Object(s["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",a()([{},i])):t("input",a()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:v("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:v("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,a={icon:this.renderLeftIcon};return i("label")&&(a.title=function(){return i("label")}),t(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[v("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:v((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:a,on:{click:this.onClick}},[t("div",{class:v("body")},[this.renderInput(),this.showClear&&t(r["a"],{attrs:{name:"clear"},class:v("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:v("button")},[i("button")])]),this.errorMessage&&t("div",{class:v("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},6400:function(t,e,i){"use strict";var n=i("ea87"),a=i.n(n);a.a},"66b9":function(t,e,i){"use strict";i("68ef"),i("09fe")},7744:function(t,e,i){"use strict";var n=i("1988"),a=i("861b"),s=i.n(a),r=i("d282"),o=i("a142"),c=i("dfaf"),l=i("ba31"),u=i("48f4"),d=i("ad06"),h=Object(r["a"])("cell"),f=h[0],b=h[1];function p(t,e,i,n){var a=e.icon,r=e.size,c=e.title,h=e.label,f=e.value,p=e.isLink,g=e.arrowDirection,v=i.title||Object(o["b"])(c),m=i.default||Object(o["b"])(f),y=i.label||Object(o["b"])(h),O=y&&t("div",{class:[b("label"),e.labelClass]},[i.label?i.label():h]),j=v&&t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),O]),k=m&&t("div",{class:[b("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[f])]),S=i.icon?i.icon():a&&t(d["a"],{class:b("left-icon"),attrs:{name:a}}),I=i["right-icon"],w=I?I():p&&t(d["a"],{class:b("right-icon"),attrs:{name:g?"arrow-"+g:"arrow"}});function C(t){Object(l["a"])(n,"click",t),Object(u["a"])(n)}var $={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return r&&($[r]=r),t("div",s()([{class:b($),on:{click:C}},Object(l["b"])(n)]),[S,j,k,w,i.extra&&i.extra()])}p.props=Object(n["a"])({},c["a"],u["b"]),e["a"]=f(p)},"8c4e":function(t,e,i){"use strict";var n=i("0d5e"),a=i("4328"),s=i.n(a);e["a"]={getAddressAreas:function(t){return Object(n["a"])("/address/areas",t)},getAddressCitys:function(t){return Object(n["a"])("/address/citys",t)},getAddressProvinces:function(t){return Object(n["a"])("/address/provinces",t)},getAddressTrees:function(t){return Object(n["a"])("/address/trees",t)},getFileuploadUpload:function(t){return Object(n["b"])("/fileupload/upload",t)},authVerifycodeLogin:function(t){return Object(n["b"])("/auth/verifycode/login",t)},sendVerifycode:function(t){return Object(n["b"])("/auth/verifycode/login/send_verifycode",t)},channelPageObtainDetail:function(t){return Object(n["a"])("/api/channelPage/obtainDetail",t)},channelPageObtainFormSendVerifycode:function(t){return Object(n["b"])("/api/channelPage/obtainForm/send_verifycode",t)},channelPageObtainFormSave:function(t){var e=s.a.stringify(t);return Object(n["b"])("/api/channelPage/obtainForm/save",e)},channelPageObtainFormValidateSave:function(t){var e=s.a.stringify(t);return Object(n["b"])("/api/channelPage/obtainForm/validate/save",e)}}},b650:function(t,e,i){"use strict";var n=i("1988"),a=i("861b"),s=i.n(a),r=i("d282"),o=i("ba31"),c=i("48f4"),l=i("ad06"),u=i("543e"),d=Object(r["a"])("button"),h=d[0],f=d[1];function b(t,e,i,n){var a=e.tag,r=e.icon,d=e.type,h=e.disabled,b=e.loading,p=e.hairline,g=e.loadingText;function v(t){b||h||(Object(o["a"])(n,"click",t),Object(c["a"])(n))}function m(t){Object(o["a"])(n,"touchstart",t)}var y=[f([d,e.size,{disabled:h,hairline:p,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":p}];function O(){var n,a=[];return b?a.push(t(u["a"],{class:f("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===d?void 0:""}})):r&&a.push(t(l["a"],{attrs:{name:r},class:f("icon")})),n=b?g:i.default?i.default():e.text,n&&a.push(t("span",{class:f("text")},[n])),a}return t(a,s()([{class:y,attrs:{type:e.nativeType,disabled:h},on:{click:v,touchstart:m}},Object(o["b"])(n)]),[O()])}b.props=Object(n["a"])({},c["b"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=h(b)},be7f:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146")},dfaf:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},ea87:function(t,e,i){},eff5:function(t,e,i){t.exports=i.p+"img/image_3.4258de7b.png"}}]);
//# sourceMappingURL=chunk-17b232fb.a3c23fbb.js.map