<template>
  <div class="downloadOverseasCompany">
    <div class="intro">
      <img src="@/assets/downLoadPages/cut_part_01.png" alt="">
    </div>
    <div class="register">
      <div class="inputItem">
        <van-field v-model="value" placeholder="请输入手机号" />
      </div>
      <div class="inputItem">
        <div class="password">
          <van-field v-model="value" placeholder="输入验证码" />
        </div>
        <div class="getYZM">
          <van-button plain type="primary">获取验证码</van-button>
        </div>
      </div>
      <div class="inputItem submitBtn">
        <van-button type="primary" size="large">立即注册</van-button>
      </div>
      <div class="copyRight">
        <p>Copyright 2019 | 杭州税牛科技有限公司</p>
        <p>浙ICP19028668号</p>
      </div>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import { Field, Button } from 'vant'
Vue.use(Field).use(Button)

export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.downloadOverseasCompany {
  font-family: PingFangSC-Medium;
  .intro {
    width: 100%;
    height: auto;
    img {
      display: block;
      width: 100%;
    }
  }
  .register {
    background-color: #fbfbfb;
    overflow: hidden;
    .inputItem {
      width:268px;
      height:40px;
      background:rgba(255,255,255,1);
      margin: 0 auto;
      margin-top: 30px;
      .van-field {
        height: 40px;
        font-size:15px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        border:1px solid rgba(201,201,201,1);
        border-radius: 3px;
      }
      .van-cell {
        padding: 7px 16px;
      }
    }
    .inputItem:nth-child(2){
      margin-top: 12px;
    }
    .inputItem:last-child{
      margin-top: 33px;
    }
    .password {
      width: 160px;
      float: left;
    }
    .getYZM {
      width: 93px;
      height: 40px;
      box-sizing: border-box;
      padding: 1px;
      float: right;
      background: linear-gradient(0deg,rgba(52,85,239,1) 0%,rgba(104,161,245,1) 100%);
      border-radius: 3px;
      .van-button {
        width: 91px;
        height: 38px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color: rgba(67,100,237,1);
        line-height: 40px;
      }
      .van-button--normal {
        padding: 0;
      }
      .van-button--primary {
        border: 0;
      }
    }
    .submitBtn {
      .van-button {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255,255,255,1);
        border: 0px solid rgba(201,201,201,1);
        background: linear-gradient(0deg,rgba(52,85,239,1) 0%,rgba(104,161,245,1) 100%);
        border-radius: 3px;
      }
      .van-button--large {
        height: 40px;
        line-height: 40px;
      }
    }
    .copyRight {
      margin-top: 33px;
      margin-bottom: 12px;
      text-align: center;
      font-size: 10px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153,153,153,1);
      line-height: 20px;
    }
  }
}
</style>
<style lang="scss">
.downloadOverseasCompany {
  .getYZM {
    .van-button {
      border-radius: 3px;
    }
  }
}
</style>
