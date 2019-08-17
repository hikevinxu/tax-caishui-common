<template>
  <div class="landPage" :style="'background: ' + formData.pageBgColor">
    <div class="container">
      <div class="head">
        <div class="banner" v-if="formData.headImg">
          <img :src="formData.headImg" alt="">
        </div>
      </div>
      <div class="register" v-if="formData.pageType == 1">
        <div class="inputItem">
          <van-field v-model="phone" maxlength="11" type="number" placeholder="请输入手机号" />
        </div>
        <div class="inputItem" v-if="phone.length == 11">
          <div class="password">
            <van-field v-model="password" placeholder="输入验证码" />
          </div>
          <div class="getYZM">
            <button plain type="primary" @click="getYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}</span></button>
          </div>
        </div>
        <div id="captcha"></div>
        <div class="inputItem submitBtn">
          <button type="primary" size="large" @click="register">{{formData.buttonRemark}}</button>
        </div>
      </div>
      <div class="download" v-if="formData.pageType == 2">
        <div class="inputItem downloadBtn">
          <button type="primary" size="large" @click="download">{{formData.buttonRemark}}</button>
        </div>
        <div class="buttonUnder">{{formData.buttonUnder}}</div>
        <div id="captcha"></div>
      </div>
      <div class="bottomImg" v-if="formData.tailImg">
        <img :src="formData.tailImg" alt="">
      </div>
      <div class="bottomCopyRight">
        <div class="topText"><span>（以上数据均来源于杭州税牛科技有限公司）</span></div>
        <div class="bottomText">
          <span>Copyright 2019 | 杭州税牛科技有限公司<br />浙ICP19028668号</span>
        </div>
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
  data() {
    return {
      isWechat: false,
      isAndroid: false,
      isIos: false,
      phone: '',
      password: '',
      second: 60,
      getting: false,
      captchaIns: '',
      getYZMStatus: true,
      formData: {}
    }
  },
  created() {
    this.isWechat = Terminal.platform.weixin
    this.isAndroid = Terminal.platform.android
    this.isIos = Terminal.platform.iPhone || Terminal.platform.iPad
    // 微信内置浏览器浏览H5页面弹出的键盘遮盖文本框的解决办法
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
    this.getDetail()
  },
  methods: {
    initNECaptcha() {
      var that = this
      // initNECaptcha为全局函数，可直接调用
      initNECaptcha({
        // config对象，参数配置
        captchaId: config.captchaId,
        element: '#captcha',
        mode: 'bind',
        width: '320px',
        enableClose: true, // 由业务方控制验证码弹框关闭
        onVerify: function(err, data){
          // 用户验证码验证成功后，进行实际的提交行为
          if (!err) {
            // 验证成功后，调用close方法关闭弹框（enableClose为true时调用）
            that.captchaIns.close()
            if (data) {
              console.log(data)
              let params = {
                clientType: 'h5',
                verifyType: 'sms',
                captchaId: config.captchaId,
                captchaValidate: data.validate,
                phone: that.phone
              }
              that.captchaIns && that.captchaIns.refresh()
              globalApi.sendVerifycode(params).then(res => {
                if (res.code === 0) {
                  if (!that.getting) {
                    that.getting = true
                    let timer = setInterval(() => {
                      that.second--
                      if (that.second <= 0) {
                        clearInterval(timer)
                        that.second = 60
                        that.getting = false
                        that.getYZMStatus = true
                      }
                    }, 1000)
                  }
                }
              }).catch(err => {
                that.second = 60
                that.getting = false
                that.getYZMStatus = true
              })
            }
          } else {
            return
          }
        }
      }, function  onload (instance) {
          // 初始化成功后得到验证实例instance，可以调用实例的方法
          that.captchaIns = instance
      }, function  onerror (err) {
          // 初始化失败后触发该函数，err对象描述当前错误信息
      })
    },
    getDetail() {
      let params = {
        id: this.$route.query.id
      }
      globalApi.channelPageObtainDetail(params).then(res => {
        if(res.code == 0) {
          console.log(res)
          this.formData = res.data
          document.title = this.formData.title
          sa.quick("autoTrackSinglePage",{$title: this.formData.title})

          this.formData.pageType = 2
          this.formData.buttonUnder = '1234597654321234'
          this.initNECaptcha()
        }
      })
    },
    getYZM () {
      if (this.getYZMStatus) {
        this.getYZMStatus = false
        if (this.phone.length !== 11) {
          Toast('请输入11位合法手机号！')
          return
        }
        this.captchaIns && this.captchaIns.verify()
      }
    },
    register () {
      if (this.phone.length !== 11) {
        Toast('请输入11位合法手机号！')
        return
      }
      if (this.password == '') {
        Toast('请输入短信验证码！')
        return
      }
      let params = {
        clientType: 'h5',
        phone: this.phone,
        verifyType: 'sms',
        verifycode: this.password
      }
      globalApi.authVerifycodeLogin(params).then(res => {
        if(res.code == 0){
          if(res.data.authInfo.newRegistration == true){
            sa.track('WebSignUp', {
                target: '代理记账推广_01',
                phone: this.phone
            })
            sa.login(res.data.authInfo.uid)
          }
          Toast('恭喜您，注册成功！')
          this.$router.push({name: 'downloadAPP'})
        }
      })
    },
    download() {
      // 获取终端的相关信息
      var Terminal = {
        // 辨别移动终端类型
        platform : function(){
          var u = navigator.userAgent, app = navigator.appVersion;
          return {
            // android终端或者uc浏览器
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            // 是否为iPhone或者QQHD浏览器
            iPhone: u.indexOf('iPhone') > -1 ,
            // 是否iPad
            iPad: u.indexOf('iPad') > -1,
            weixin: u.indexOf('MicroMessenger') > -1
          };
        }(),
        // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
        language : (navigator.browserLanguage || navigator.language).toLowerCase()
      }
      
      // 根据不同的终端，跳转到不同的地址
      var theUrl = '';
      if(Terminal.platform.android){//安卓端
        if(Terminal.platform.weixin){
          alert('请复制链接到其他浏览器打开')
        }else{
          theUrl = 'https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk';
          location.href = theUrl;
          console.log('安卓')
        }
      } else {
        if(Terminal.platform.iPhone){//iPhone端
          theUrl = 'https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8';
        }else if(Terminal.platform.iPad){//iPad端
          theUrl = 'https://itunes.apple.com/cn/app/id1454790969?l=zh&ls=1&mt=8';
        }
        console.log('ios')
        // location.href = theUrl;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.landPage {
  width: 100%;
  .container {
    width: 100%;
    .head {
      width: 100%;
      .banner {
        width: 100%;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .register {
      background: transparent;
      overflow: hidden;
      .inputItem {
        width:268px;
        height:40px;
        border-radius: 3px;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 12px;
        .van-field {
          height: 40px;
          font-size: 15px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(51,51,51,1);
          border: 1px solid #e1e1e1;
          border-radius: 3px;
        }
        .van-cell {
          padding: 7px 16px;
        }
      }
      .inputItem:nth-child(2){
        margin-top: 0;
        margin-bottom: 33px;
      }
      .inputItem:last-child{
        margin-top: 28px;
      }
      .password {
        width: 160px;
        float: left;
      }
      .getYZM {
        width: 93px;
        height: 40px;
        box-sizing: border-box;
        float: right;
        border-radius: 3px;
        button {
          width: 100%;
          height: 100%;
          font-size: 0.12rem;
          box-sizing: border-box;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(67,100,237,1);
          line-height: 0.40rem;
          background-color: #fff;
          border-radius: 0.03rem;
          border: 1px solid rgba(67,100,237,1);
          outline: none;
        }
      }
      .submitBtn {
        border-radius: 3px;
        
      }
    }
    .download {
      width:268px;
      // height:40px;
      margin: 30px auto;
      .downloadBtn {
        border-radius: 3px;
        button {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          font-family: PingFangSC-Regular;
          font-size: 16px;
          font-weight: 600;
          color: rgba(255,255,255,1);
          line-height: 40px;
          background-color: #fff;
          border-radius: 3px;
          background: linear-gradient(0deg,rgba(52,85,239,1) 0%,rgba(104,161,245,1) 100%);
          letter-spacing: 4px;
          outline: none;
        }
      }
      .buttonUnder {
        text-align: center;
        font-size: 12px;
        margin-top: 10px;
        font-family: PingFangSC-Regular;
        color: rgba(153,153,153,1);
      }
    }
    .bottomImg {
      width: 100%;
      img {
        display: block;
        width: 100%;
      }
    }
    .bottomCopyRight {
      margin: 0 26px;
      padding-bottom: 20px;
      font-size: 10px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153,153,153,1);
      text-align: center;
      .bottomText,
      .topText {
        width: 100%;
        padding: 10px 0;
        span {
          font-size: 10px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(153,153,153,1);
        }
      }
      .topText {
        border-bottom: 1px solid rgba(230,230,220,1);
      }
      .bottomText {
        span {
          color:rgba(196,196,196,1);
          line-height: 16px;
        }
      }
    }
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
