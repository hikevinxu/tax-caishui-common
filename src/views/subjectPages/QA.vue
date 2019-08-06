<template>
  <div class="QA">
    <van-collapse v-model="activeName" accordion @change="collapseChange">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="4">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="5">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="6">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="7">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import Vue from 'vue'
import { Collapse, CollapseItem, Toast } from 'vant'
Vue.use(Collapse).use(CollapseItem);
Vue.use(Toast)
export default {
  data () {
    return {
      activeName: '1'
    }
  },
  methods: {
    collapseChange(e){
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.QA{
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss">
.QA {
  .van-collapse-item__title--expanded{
    .van-cell__title{
      span{
        color: #138572;
      }
    }
  }
}
</style>
