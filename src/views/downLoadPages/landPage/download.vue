<template>
  <div class="download">
    <div class="wechat" v-if="isWechat && isAndroid">
      <p class="guide_text">点击右上角按钮，然后在弹出的菜单中，点击 <strong style="font-weight: bold">在{{isIos ? 'Safari' : '浏览器'}}中打开</strong>，即可安装</p>
			<img class="arrow" src="@/assets/downLoadPages/the-arrow.png">
    </div>
    <div class="download_info">
      <div class="logo">
        <img src="@/assets/downLoadPages/logo@3x.png" alt="">
      </div>
      <div class="success">
        <img src="@/assets/downLoadPages/ic_successful@3x.png" alt="">
      </div>
      <div class="success_info">
        <p>恭喜您注册成功！</p>
        <p>下载app即可解锁全部财税服务</p>
      </div>
      <div class="loading">
        <img src="@/assets/downLoadPages/loading.gif" class="loadingIcon" alt="">
      </div>
      <div class="warning">
        <p>如未自动开始下载APP，请点击</p>
      </div>
      <div class="downloadBtn">
        <van-button type="primary" size="large" @click="download">下载APP完成申请</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import sa from 'sa-sdk-javascript'
import { Button, Toast } from 'vant'
import { config, Terminal } from '@/utils/global'
import globalApi from '@/api/globalApi'
Vue.use(Button).use(Toast)

export default {
  data () {
    return {
      isWechat: false,
      isAndroid: false,
      isIos: false,
      downloadUrl: 'https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk',
      formData: {}
    }
  },
  created() {
    this.isWechat = Terminal.platform.weixin
    this.isAndroid = Terminal.platform.android
    this.isIos = Terminal.platform.iPhone || Terminal.platform.iPad
    if (this.$route.query.id) {
      this.getDetail()
    } else {
      sa.quick("autoTrackSinglePage",{
        $title: '初审通过',
        appname: `财税鱼渠道页`
      })
      if(!(this.isWechat && this.isAndroid)) {
        setTimeout(this.download(), 1000)
      }
    }
  },
  methods: {
    getDetail() {
      let params = {
        id: this.$route.query.id
      }
      globalApi.channelPageObtainDetail(params).then(res => {
        if(res.code == 0) {
          this.formData = res.data
          this.downloadUrl = this.formData.dowloadUrl
          sa.quick("autoTrackSinglePage",{
            $title: this.formData.title,
            appname: `${this.formData.packageName}渠道页`
          })
          if(!(this.isWechat && this.isAndroid)) {
            setTimeout(this.download(), 1000)
          }
        }
      })
    },
    download() {
      // 根据不同的终端，跳转到不同的地址
      var theUrl = ''
      if(this.isAndroid){
        // 安卓端
        console.log("安卓端")
        if(this.isWechat){
          Toast('请点击右上角按钮,选择在浏览器中打开')
        }else{
          theUrl = this.downloadUrl
          console.log(theUrl)
          sa.track('WebDownloadClick', {
            target: this.formData.channelRemark,
            url: location.href
          })
          location.href = theUrl
        }
      } else {
        if(this.isIos){
          console.log('ios')
          Toast('IOS暂不可下载，可前往各大安卓应用市场下载安装！感谢大家！')
          sa.track('WebDownloadClick', {
            target: this.formData.channelRemark,
            url: location.href
          })
          theUrl = 'https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8'
        }
        // location.href = theUrl;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.download {
  font-family: PingFangSC-Medium;
  font-size: 19.8px;
  color: #333333;
  text-align: center;
  line-height: 19.8px;
  .wechat {
    padding: 0 24px;
		width: 100%;
		height: 80px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
  .download_info {
    .logo {
      width: 182px;
      margin: 0 auto;
      margin-top: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .success {
      width: 93px;
      margin: 0 auto;
      margin-top: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .success_info {
      margin-top: 36.5px;
      p {
        font-family: PingFangSC-Medium;
        font-size: 19.8px;
        color: #333333;
        text-align: center;
        line-height: 19.8px;
      }
      p:last-child{
        font-family: PingFangSC-Regular;
        font-size: 14.52px;
        color: #151515;
        text-align: center;
        line-height: 19.8px;
        margin-top: 20px;
      }
    }
    .loading {
      width: 100%;
      margin-top: 40px;
      .loadingIcon {
        width: 30px;
        height: 30px;
      }
    }
    .warning {
      margin-top: 40px;
      text-align: center;
      p {
        font-family: PingFangSC-Regular;
        font-size: 11.22px;
        color: #666666;
        text-align: center;
      }
    }
    .downloadBtn {
      width: 264px;
      height: 40px;
      margin: 0 auto;
      margin-top: 14px;
      .van-button {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        color: rgba(255,255,255,1);
        background-image: linear-gradient(180deg, #FF7F4A 0%, #FB5332 100%);
        border-radius: 20px;
        border-radius: 20px;
      }
      .van-button--primary {
        background-color: #fff;
        border: 0;
      }
      .van-button--large {
        height: 40px;
        line-height: 40px;
      }
      .van-button__text {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
}
</style>
