<template>
  <div class="downloadAgencyAccount" ref="agencyAccount">
    <div class="weixin" v-if="isWechat && isAndroid">
      <p class="guide_text">点击右上角按钮，然后在弹出的菜单中，点击 <strong style="font-weight: bold">在{{isIos ? 'Safari' : '浏览器'}}中打开</strong>，即可安装</p>
			<img class="arrow" src="@/assets/downLoadPages/the-arrow.png">
    </div>
    <div v-else>
      <div class="intro">
        <img src="@/assets/downLoadPages/image_2_1.png" alt="">
      </div>
      <div class="download">
        <div id="captcha"></div>
        <div class="inputItem downloadBtn">
          <van-button type="primary" size="large" @click="download">立&nbsp;即&nbsp;下&nbsp;载</van-button>
        </div>
      </div>
      <div class="intro bottom">
        <img src="@/assets/downLoadPages/image_2_2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import sa from 'sa-sdk-javascript'
import { Field, Button, Toast } from 'vant'
import globalApi from '@/api/globalApi'
import { config, Terminal } from '@/utils/global'
Vue.use(Field).use(Button).use(Toast)

export default {
  data () {
    return {
      phone: '',
      password: '',
      second: 60,
      getting: false,
      captchaIns: '',
      isWechat: false,
      isAndroid: false,
      isIos: false
    }
  },
  mounted() {
    this.isWechat = Terminal.platform.weixin
    this.isAndroid = Terminal.platform.android
    this.isIos = Terminal.platform.iPhone || Terminal.platform.iPad
    sa.quick("autoTrackSinglePage",{$title: '海外注册推广_D02'})
  },
  methods: {
    download() {
      // 根据不同的终端，跳转到不同的地址
      var theUrl = '';
      if(this.isAndroid){
        // 安卓端
        console.log("安卓端")
        if(this.isWechat){
          Toast('请点击右上角按钮,选择在浏览器中打开')
        }else{
          theUrl = 'https://res.caishuiyu.com/common/pkg/android/caishuiyu_360pz1cs1.apk'
          sa.track('WebDownloadClick', {
            target: '海外注册推广_D02',
            url: location.href
          })
          location.href = theUrl
        }
      } else {
        if(this.isIos){
          console.log('ios')
          theUrl = 'https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8'
          sa.track('WebDownloadClick', {
            target: '海外注册推广_D02',
            url: location.href
          })
        }
        // location.href = theUrl;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.downloadAgencyAccount {
  font-family: PingFangSC-Medium;
  background-color: #fbfbfb;
  .weixin {
    padding: 0 24px;
		width: 100%;
		height: 80px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
    background: greenyellow;
    .guide_text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: rgba(0,0,0,1);
      line-height: 24px;
    }
    .arrow {
      margin-top: 8px;
      width: 32px;
      height: 31px;
      align-self: flex-start;
    }
  }
  .intro {
    width: 100%;
    height: auto;
    img {
      display: block;
      width: 100%;
    }
  }
  .download {
    width:268px;
    height:40px;
    margin: 30px auto;
    margin-top: 0px;
    .downloadBtn {
      border-radius: 3px;
      .van-button {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255,255,255,1);
        border: 0px solid rgba(201,201,201,1);
        background: linear-gradient(0deg,rgba(55,179,230,1) 1%,rgba(80,197,247,1) 100%);
        border-radius: 3px;
      }
      .van-button--large {
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .bottom {
    margin-top: 23px;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 12px;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 12px;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 12px;
  }
}
</style>
