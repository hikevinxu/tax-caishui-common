(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3cd6f40"],{"031c":function(t,e,i){"use strict";var s=i("b2ec"),a=i.n(s);a.a},1146:function(t,e,i){},"25ad":function(t,e,i){t.exports=i.p+"img/image_2_1.79c02a83.png"},"565f":function(t,e,i){"use strict";var s=i("861b"),a=i.n(s),n=i("1988"),r=i("ad06"),o=i("7744"),l=i("dfaf"),c=i("1325"),u=i("a8c1"),h=i("d282"),d=i("a142"),g=i("ea8e");function f(){return!d["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var b=Object(h["a"])("field"),A=b[0],p=b[1];e["a"]=A({inheritAttrs:!1,props:Object(n["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(n["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(g["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,s=this.$attrs.maxlength;return"number"===this.type&&Object(d["b"])(s)&&i.length>s&&(i=i.slice(0,s),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),f()&&window.scrollTo(0,Object(u["a"])())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),s=e>=48&&e<=57||46===e&&i||45===e;s||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d["c"])(this.autosize)){var i=this.autosize,s=i.maxHeight,a=i.minHeight;s&&(e=Math.min(e,s)),a&&(e=Math.max(e,a))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:p("control",this.inputAlign)},[e]);var i={ref:"input",class:p("control",this.inputAlign),domProps:{value:this.value},attrs:Object(n["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",a()([{},i])):t("input",a()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:p("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:p("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])}},render:function(t){var e,i=this.slots,s=this.labelAlign,a={icon:this.renderLeftIcon};return i("label")&&(a.title=function(){return i("label")}),t(o["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[p("label",s),this.labelClass],arrowDirection:this.arrowDirection},class:p((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+s]=s,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:a,on:{click:this.onClick}},[t("div",{class:p("body")},[this.renderInput(),this.showClear&&t(r["a"],{attrs:{name:"clear"},class:p("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:p("button")},[i("button")])]),this.errorMessage&&t("div",{class:p("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},"6ecb":function(t,e,i){t.exports=i.p+"img/image_2_2.eef948b8.png"},7662:function(t,e){t.exports="data:image/png;base64,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"},7744:function(t,e,i){"use strict";var s=i("1988"),a=i("861b"),n=i.n(a),r=i("d282"),o=i("a142"),l=i("dfaf"),c=i("ba31"),u=i("48f4"),h=i("ad06"),d=Object(r["a"])("cell"),g=d[0],f=d[1];function b(t,e,i,s){var a=e.icon,r=e.size,l=e.title,d=e.label,g=e.value,b=e.isLink,A=e.arrowDirection,p=i.title||Object(o["b"])(l),v=i.default||Object(o["b"])(g),w=i.label||Object(o["b"])(d),C=w&&t("div",{class:[f("label"),e.labelClass]},[i.label?i.label():d]),m=p&&t("div",{class:[f("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[l]),C]),y=v&&t("div",{class:[f("value",{alone:!i.title&&!l}),e.valueClass]},[i.default?i.default():t("span",[g])]),S=i.icon?i.icon():a&&t(h["a"],{class:f("left-icon"),attrs:{name:a}}),k=i["right-icon"],j=k?k():b&&t(h["a"],{class:f("right-icon"),attrs:{name:A?"arrow-"+A:"arrow"}});function D(t){Object(c["a"])(s,"click",t),Object(u["a"])(s)}var B={center:e.center,required:e.required,borderless:!e.border,clickable:b||e.clickable};return r&&(B[r]=r),t("div",n()([{class:f(B),on:{click:D}},Object(c["b"])(s)]),[S,m,y,j,i.extra&&i.extra()])}b.props=Object(s["a"])({},l["a"],u["b"]),e["a"]=g(b)},b2ec:function(t,e,i){},be7f:function(t,e,i){"use strict";i("68ef"),i("09fe"),i("1146")},c52c:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"agencyAccount",staticClass:"downloadAgencyAccount"},[t.isWechat&&t.isAndroid?s("div",{staticClass:"weixin"},[s("p",{staticClass:"guide_text"},[t._v("点击右上角按钮，然后在弹出的菜单中，点击 "),s("strong",{staticStyle:{"font-weight":"bold"}},[t._v("在"+t._s(t.isIos?"Safari":"浏览器")+"中打开")]),t._v("，即可安装")]),s("img",{staticClass:"arrow",attrs:{src:i("7662"),alt:""}})]):t._e(),s("div",[t._m(0),s("div",{staticClass:"download"},[s("div",{attrs:{id:"captcha"}}),s("div",{staticClass:"inputItem downloadBtn"},[s("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.download}},[t._v("立 即 下 载")])],1)]),t._m(1)])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro"},[s("img",{attrs:{src:i("25ad"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"intro bottom"},[s("img",{attrs:{src:i("6ecb"),alt:""}})])}],n=(i("be7f"),i("565f")),r=(i("66b9"),i("b650")),o=(i("e7e5"),i("d399")),l=i("2b0e"),c=i("93eb"),u=i.n(c),h=(i("8c4e"),i("403a"));l["a"].use(n["a"]).use(r["a"]).use(o["a"]);var d={data:function(){return{phone:"",password:"",second:60,getting:!1,captchaIns:"",isWechat:!1,isAndroid:!1,isIos:!1}},mounted:function(){this.isWechat=h["a"].platform.weixin,this.isAndroid=h["a"].platform.android,this.isIos=h["a"].platform.iPhone||h["a"].platform.iPad,u.a.quick("autoTrackSinglePage",{$title:"海外注册推广_D02"})},methods:{download:function(){var t="";this.isAndroid?(console.log("安卓端"),this.isWechat?Object(o["a"])("请点击右上角按钮,选择在浏览器中打开"):(t="https://res.caishuiyu.com/common/pkg/android/caishuiyu_sgbs1cs1.apk",u.a.track("WebDownloadClick",{target:"海外注册推广_D02",url:location.href}),location.href=t)):this.isIos&&(console.log("ios"),Object(o["a"])("IOS暂不可下载，可前往各大安卓应用市场下载安装！感谢大家！"),u.a.track("WebDownloadClick",{target:"海外注册推广_D02",url:location.href}),t="https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8")}}},g=d,f=(i("031c"),i("2877")),b=Object(f["a"])(g,s,a,!1,null,"c2fea340",null);e["default"]=b.exports},dfaf:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-f3cd6f40.e2d383d8.js.map