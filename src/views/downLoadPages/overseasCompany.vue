<template>
  <div class="downloadOverseasCompany">
    <div class="intro">
      <img src="@/assets/downLoadPages/image_1.png" alt="">
    </div>
    <div class="register">
      <div class="inputItem">
        <van-field v-model="phone" maxlength="11" type="number" placeholder="请输入手机号" />
      </div>
      <div class="inputItem"  v-if="phone.length == 11">
        <div class="password">
          <van-field v-model="password" placeholder="输入验证码" />
        </div>
        <div class="getYZM">
          <van-button plain type="primary" @click="getYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}</span></van-button>
        </div>
      </div>
      <div id="captcha"></div>
      <div class="inputItem submitBtn">
        <van-button type="primary" size="large" @click="register">立&nbsp;即&nbsp;注&nbsp;册</van-button>
      </div>
    </div>
    <div class="intro bottom">
      <img src="@/assets/downLoadPages/image_2.png" alt="">
    </div>
  </div>
</template>
<script>

import Vue from 'vue'
import sa from 'sa-sdk-javascript'
import { Field, Button, Toast } from 'vant'
import globalApi from '@/api/globalApi'
import { config } from '@/utils/global'
Vue.use(Field).use(Button).use(Toast)

export default {
  data () {
    return {
      phone: '',
      password: '',
      second: 60,
      getting: false,
      captchaIns: ''
    }
  },
  mounted(){
    sa.quick("autoTrackSinglePage",{$title: '海外注册推广_01'})
    // 微信内置浏览器浏览H5页面弹出的键盘遮盖文本框的解决办法
    window.addEventListener('resize', function () {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        window.setTimeout(function () {
          document.activeElement.scrollIntoViewIfNeeded()
        }, 0)
      }
    })
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
                        }
                      }, 1000)
                    }
                  }
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
  methods: {
    getYZM () {
      if (this.phone.length !== 11) {
        Toast('请输入11位合法手机号！')
        return
      }
      this.captchaIns && this.captchaIns.verify()
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
                target: '海外注册推广_01',
                phone: this.phone
            })
            sa.login(res.data.authInfo.uid)
          }
          Toast('恭喜您，注册成功！')
          this.$router.push('/downloadAPP')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.downloadOverseasCompany {
  font-family: PingFangSC-Medium;
  background-color: #fbfbfb;
  .intro {
    width: 100%;
    height: auto;
    img {
      display: block;
      width: 100%;
    }
  }
  .register {
    overflow: hidden;
    .inputItem {
      width:268px;
      height:40px;
      background:rgba(255,255,255,1);
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 12px;
      .van-field {
        height: 40px;
        font-size:15px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        border:1px solid #e1e1e1;
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
