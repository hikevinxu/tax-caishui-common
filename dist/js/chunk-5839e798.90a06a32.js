(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5839e798"],{"0c93":function(t,i,e){},"2a87":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"agencyAccount",on:{change:t.onChange}},[t._m(0),e("van-swipe",{staticClass:"swiper",attrs:{"show-indicators":!1,autoplay:3e3,"indicator-color":"white"}},[e("van-swipe-item",[t._v("1")]),e("van-swipe-item",[t._v("2")]),e("van-swipe-item",[t._v("3")]),e("van-swipe-item",[t._v("4")])],1)],1)},s=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"header"},[n("img",{attrs:{src:e("c6f9"),alt:""}})])}],o=(e("e7e5"),e("d399")),a=(e("7844"),e("5596")),c=(e("4b0a"),e("2bb1")),r=e("2b0e");r["a"].use(a["a"]).use(c["a"]),r["a"].use(o["a"]);var h={data:function(){return{}},methods:{onChange:function(t){Object(o["a"])("当前 Swipe 索引："+t)}}},u=h,f=(e("c29a"),e("2877")),l=Object(f["a"])(u,n,s,!1,null,"10de8d57",null);i["default"]=l.exports},"2bb1":function(t,i,e){"use strict";var n=e("1988"),s=e("d282"),o=Object(s["a"])("swipe-item"),a=o[0],c=o[1];i["a"]=a({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,s=i.computedWidth,o=i.computedHeight,a={width:s+"px",height:e?o+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:c(),style:a,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},4598:function(t,i,e){"use strict";(function(t){e.d(i,"b",function(){return r}),e.d(i,"a",function(){return h});var n=e("a142"),s=Date.now();function o(t){var i=Date.now(),e=Math.max(0,16-(i-s)),n=setTimeout(t,e);return s=i+e,n}var a=n["d"]?t:window,c=a.requestAnimationFrame||o;a.cancelAnimationFrame||a.clearTimeout;function r(t){return c.call(a,t)}function h(t){r(function(){r(t)})}}).call(this,e("c8ba"))},"482d":function(t,i,e){"use strict";function n(t,i,e){return Math.min(Math.max(t,i),e)}e.d(i,"a",function(){return n})},"4b0a":function(t,i,e){"use strict";e("68ef"),e("786d")},5596:function(t,i,e){"use strict";var n=e("d282"),s=e("1325"),o=e("3875");function a(t){function i(){this.binded||(t.call(this,s["b"],!0),this.binded=!0)}function e(){this.binded&&(t.call(this,s["a"],!1),this.binded=!1)}return{mounted:i,activated:i,deactivated:e,beforeDestroy:e}}var c=e("4598"),r=e("482d"),h=Object(n["a"])("swipe"),u=h[0],f=h[1];i["a"]=u({mixins:[o["a"],a(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(s["c"])(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(r["a"])(i+t,-1,e):Object(r["a"])(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var n=Math.round(i-e);return this.loop||(n=Object(r["a"])(n,this.minOffset,0)),n},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,s=void 0===n?0:n,o=t.emitChange,a=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,f=this.minOffset;if(!(c<=1)){var l=this.getTargetActive(e),d=this.getTargetOffset(l,s);if(a){if(h[0]){var v=d<f;h[0].offset=v?u:0}if(h[c-1]){var p=d>0;h[c-1].offset=p?-u:0}}this.active=l,this.offset=d,o&&l!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(c["a"])(function(){e.move({pace:t%e.count-e.active,emitChange:!0}),i.immediate?Object(c["a"])(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(c["a"])(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,n=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&e>1?i("div",{class:f("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,s){return i("i",{class:f("indicator",{active:s===n}),style:s===n?t.indicatorStyle:null})})]):void 0)}},render:function(t){return t("div",{class:f()},[t("div",{ref:"track",style:this.trackStyle,class:f("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}})},7844:function(t,i,e){"use strict";e("68ef"),e("8270")},"786d":function(t,i,e){},8270:function(t,i,e){},c29a:function(t,i,e){"use strict";var n=e("0c93"),s=e.n(n);s.a},c6f9:function(t,i,e){t.exports=e.p+"img/bookkeeping_head.8f84347a.png"}}]);
//# sourceMappingURL=chunk-5839e798.90a06a32.js.map