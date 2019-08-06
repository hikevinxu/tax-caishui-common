<template>
  <div class="agencyAccount" @change="onChange">
    <div class="header">
      <img src="@/assets/global/bookkeeping_head.png" alt="">
    </div>
    <van-swipe class="swiper" :show-indicators="false" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Toast } from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Toast)
export default {
  data () {
    return {

    }
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    }
  }
}
</script>
<style lang="scss" scoped>
.agencyAccount{
  height: 100%;
  width: 100%;
  .header{
    width: 100%;
    height: 210px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .van-swipe{
    width: 328px;
    height: 114px;
    background: skyblue;
    margin-left: auto;
    margin-right: auto;
    // background: #FFFFFF;
    box-shadow: 0 8px 16px 0 rgba(255,127,74,0.12);
    border-radius: 4px;
    margin-top: -40px;
    .van-swipe-item{
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }
  }
}
</style>
