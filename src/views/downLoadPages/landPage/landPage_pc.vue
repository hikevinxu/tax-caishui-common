<template>
  <div class="landPage_pc" :style="'background: ' + formData.pageBgColor">
    <div class="landPage_pc_header">
      <img v-if="formData.headImg" :src="formData.headImg" alt="">
      <div :style="{'background': formData.preRegisterBgColor}" :class="formData.pageType == 3 ? 'form' : 'form otherForm'">
        <div class="register" v-if="formData.pageType == 1">
          <div class="formTitle"  v-if="formData.formTitle">{{formData.formTitle}}</div>
          <div class="form_item">
            <input type="text" maxlength="11" v-model="phone" placeholder="您的手机号" />
          </div>
          <div id="captcha"></div>
          <div class="form_item getYzm" v-if="phone.length == 11">
            <input type="text" v-model="password" placeholder="验证码" />
            <button :style="{'border-color': formData.buttonBgColor, 'color': formData.buttonBgColor}" @click="getYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}</span></button>
          </div>
          <div :style="{'background': formData.buttonBgColor, 'color': formData.buttonRemarkColor}" @click="register" class="submitForm">{{formData.buttonRemark}}</div>
          <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
        </div>
        <div class="download"  v-if="formData.pageType == 2">
          <!-- <div class="formTitle"  v-if="formData.formTitle">{{formData.formTitle}}</div> -->
          <div class="qrcode">
            <!-- <vue-qr :logoSrc="config.logo" :text="config.value" :size="300"></vue-qr> -->
            <canvas id="canvas"></canvas>
          </div>
          <div class="buttonUnder" :style="{'color': formData.dimensionalColor}" v-if="formData.dimensionalText" v-html="handleText(formData.dimensionalText)"></div>
          <div id="captcha"></div>
        </div>
        <div class="intention" v-if="formData.pageType == 3">
          <div class="formTitle"  v-if="formData.formTitle">{{formData.formTitle}}</div>
          <div class="form_item" v-if="formData.formType == 1">
            <div class="select">
              <label :style="countries != '' ? {color: '#333'} : {color: '#666'}" @click="openCountriesList">{{countries != '' ? countries : '请选择国家和地区' }} <span :class="show ? 'selectIcon' : ''"></span></label>
              <ul v-if="show">
                <li v-for="(item,index) in countriesList" :key="item + index" @click="selectItem(item)" :class="intention == item ? 'countries' : ''">{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="form_item" v-if="formData.formType == 1">
            <div class="select">
              <label :style="intention != '' ? {color: '#333'} : {color: '#666'}" @click="toogleIntentionShow">{{intention != '' ? intention : '注册意向' }} <span :class="intentionShow ? 'selectIcon' : ''"></span></label>
              <ul v-if="intentionShow">
                <li v-for="(item,index) in intentionList" :key="item + index" @click="selectIntentionItem(item)" :class="intention == item ? 'active' : ''">{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="form_item" v-if="formData.formType == 2">
            <input type="text" v-model="address" placeholder="城市/地区 如：杭州-西湖区" />
          </div>
          <div class="form_item">
            <input type="text" v-model="name" placeholder="您的称呼" />
          </div>
          <div class="form_item">
            <input type="text" maxlength="11" v-model="phone" placeholder="您的手机号" />
          </div>
          <div class="form_item getYzm" v-if="phone.length == 11">
            <input type="text" v-model="password" placeholder="验证码" />
            <button :style="{'border-color': formData.buttonBgColor, 'color': formData.buttonBgColor}" @click="intentionGetYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}</span></button>
          </div>
          <div :style="{'background': formData.buttonBgColor, color: formData.buttonRemarkColor}" @click="submitForm" class="submitForm">{{formData.buttonRemark}}</div>
          <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
          <div id="captcha"></div>
        </div>
      </div>
    </div>
    <div class="landPage_pc_footer">
      <img v-if="formData.tailImg" :src="formData.tailImg" alt="">
    </div>
    <div class="bottomCopyRight">
      <div class="topText" v-if="formData.riskInfo"><span :style="{'color': formData.riskInfoColor}" v-html="handleText(formData.riskInfo)"></span></div>
      <div class="bottomText" v-if="formData.companyInfo">
        <span :style="{'color': formData.companyInfoColor}" v-html="handleText(formData.companyInfo)"></span>
      </div>
    </div>
  </div>
</template>
<script>
import sa from 'sa-sdk-javascript'
import globalApi from '@/api/globalApi'
import { config, Terminal } from '@/utils/global'
import VueQr from 'vue-qr'
import QRCode from 'qrcode'

export default {
  components: { 
    VueQr,
    QRCode: QRCode
  },
  data () {
    return {
      second: 60,
      getting: false,
      captchaIns: '',
      getYZMStatus: true,
      downloadUrl: 'https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk',
      formData: {},
      checked: false,
      show: false,
      countriesList: ['美国', '中国香港', '英国', '德国', '日本', '加拿大', '澳大利亚', '新加坡', '开曼群岛', '塞舌尔', '印度', '英属维尔京群岛', '萨摩亚', '马绍尔', '马耳他', '百慕大', '巴哈马', '其他'],
      countries: '',
      intentionShow: false,
      intentionList: ['注册便宜，不一定会实际运作', '用于开设电商，税费低，免税州', '利于办理签证和移民', '提升公司国际形象及名气', '运作成本低，税费便宜', '暂不清楚，咨询得到结果'],
      intention: '',
      address: '',
      phone: '',
      name: '',
      password: '',
      getYZMType: '',
      config: {
        value: 'https://res.caishuiyu.com/common/pkg/android/caishuiyu.apk',
        logo: require('@/assets/logo.png')
      }
    }
  },
  created() {
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
        width: '320Px',
        enableClose: true, // 由业务方控制验证码弹框关闭
        onVerify: function(err, data){
          // 用户验证码验证成功后，进行实际的提交行为
          if (!err) {
            // 验证成功后，调用close方法关闭弹框（enableClose为true时调用）
            that.captchaIns.close()
            if (data) {
              console.log(data)
              if (that.getYZMType == 'register') {
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
              } else if(that.getYZMType == 'intention') {
                let params = {
                  captchaId: config.captchaId,
                  captchaValidate: data.validate,
                  phone: that.phone
                }
                that.captchaIns && that.captchaIns.refresh()
                globalApi.channelPageObtainFormSendVerifycode(params).then(res => {
                  if(res.code == 0){
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
          if (res.data.formJson) {
            res.data.formType = JSON.parse(res.data.formJson).formType
            res.data.formTypeName = JSON.parse(res.data.formJson).formTypeName
            res.data.formTitle = JSON.parse(res.data.formJson).formTitle
          }

          this.formData = res.data
          document.title = this.formData.title
          if (this.formData.dowloadUrl && this.formData.dowloadUrl != '') {
            this.downloadUrl = this.formData.dowloadUrl
          }
          if (this.formData.jsBase) {
            let jsBase = this.formData.jsBase.replace('<script>', '').replace('<script type="text/javascript">', '').replace(/<\/script>/, '')
            this.$emit('running', jsBase)
          }
          sa.quick("autoTrackSinglePage",{
            $title: this.formData.title,
            appname: `${this.formData.packageName}渠道页`
          })
          this.initNECaptcha()
          if (res.data.pageType == 2){
            this.$nextTick(() => {
              this.useqrcode()
            })
          }
        }
      })
    },
    getYZM () {
      if (this.getYZMStatus) {
        this.getYZMStatus = false
        if (this.phone.length !== 11) {
          this.$message({
            message: '请输入11位合法手机号！',
            type: 'error',
            showClose: true,
            duration: 1000
          })
          return
        }
        this.getYZMType = 'register'
        this.captchaIns && this.captchaIns.verify()
      }
    },
    register () {
      // if (!this.checked) {
      //   this.$message({
      //     message: '请先勾选平台服务协议！',
      //     type: 'error',
      //     showClose: true,
      //     duration: 1000
      //   })
      //   return
      // }
      if (this.phone.length !== 11) {
        this.$message({
          message: '请输入11位合法手机号！',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }
      if (this.password == '') {
        this.$message({
          message: '请输入短信验证码！',
          type: 'error',
          showClose: true,
          duration: 1000
        })
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
                target: this.formData.channelRemark,
                phone: this.phone
            })
            sa.login(res.data.authInfo.uid)
          }
          if (this.formData.jsReport) {
            try {
              eval(this.formData.jsReport)
            }
            catch {
              console.log("jsReport代码 运行时报错")
            }
          }
          this.$message({
            message: '恭喜您，注册成功!',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          this.formData.pageType = 2
          this.$nextTick(() => {
            this.useqrcode()
          })
        }
      })
    },
    intentionGetYZM() {
      if (this.getYZMStatus) {
        this.getYZMStatus = false
        if (this.phone.length != 11) {
          this.$message({
            message: '请输入11位合法手机号！',
            type: 'error',
            showClose: true,
            duration: 1000
          })
          return
        }
        this.getYZMType = 'intention'
        this.captchaIns && this.captchaIns.verify()
      }
    },
    submitForm() {
      if (this.formData.formType == 1 && this.countries == '') {
        this.$message({
          message: '请先选择国家/地区！',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }
      if (this.formData.formType == 2 && this.address == '') {
        this.$message({
          message: '请先填写城市/地区！',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }
      if(this.phone == '') {
        this.$message({
          message: '请先填写联系方式！',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }

      let reg = new RegExp(/1[0-9]{10}/)

      if(this.phone.length < 11 || !reg.test(this.phone)) {
        this.$message({
          message: '请输入11位合法手机号!',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }

      if(!this.password || this.password == '') {
        this.$message({
          message: '请输入短信验证码!',
          type: 'error',
          showClose: true,
          duration: 1000
        })
        return
      }

      let formJson = {
        country: this.formData.formType == 1 ? this.countries : this.address,
        phone: this.phone
      }

      let subject = this.formData.formTypeName + ',' + formJson.country

      if (this.intention && this.intention != '') {
        formJson.intention = this.intention
        subject = subject + ',' + this.intention
      }

      if (this.name && this.name != '') {
        formJson.name = this.name
        subject = subject + ',' + this.name
      }

      subject = subject + ',' + formJson.phone

      let params = {
        clientType: 'pc',
        verifycode: this.password,
        phone: this.phone,
        pageId: this.$route.query.id,
        pageType: this.formData.pageType,
        formType: this.formData.formType,
        formJson: JSON.stringify(formJson)
      }

      globalApi.channelPageObtainFormValidateSave(params).then(res => {
        if(res.code == 0) {
          this.$message({
            message: '提交成功!',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          if (this.formData.jsReport) {
            try {
              eval(this.formData.jsReport)
            }
            catch {
              console.log("jsReport代码 运行时报错")
            }
          }
          sa.track('WebIntentionInfoSubmit', {
            target: this.formData.channelRemark,
            subject: subject
          })

          this.formData.pageType = 2
          this.$nextTick(() => {
            this.useqrcode()
          })
        }
      })

    },
    handleText(text) {
      let str = text.replace(/\n/g,"<br/>")
      return str
    },
    openCountriesList() {
      this.show = !this.show
      this.intentionShow = false
    },
    toogleIntentionShow() {
      this.intentionShow = !this.intentionShow
      this.show = false
    },
    selectItem(item){
      console.log(item)
      this.countries = item
      this.show = false
    },
    selectIntentionItem(item) {
      console.log(item)
      this.intention = item
      this.intentionShow = false
    },
    useqrcode(){
      let httpUrl = window.location.protocol + "//" + window.location.host + "/downloadAPP?id=" + this.$route.query.id + '&channelRemark=' + this.$route.query.channelRemark
      console.log(httpUrl)
      var canvas = document.getElementById('canvas')
      QRCode.toCanvas(canvas, httpUrl, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.landPage_pc {
  width: 100%;
  min-width: 1080Px;
  .landPage_pc_header {
    width: 100%;
    position: relative;
    img {
      display: block;
      width: 100%;
    }
    .form {
      position: absolute;
      top: 35px;
      right: 30px;
      width: 105px;
      background:rgba(255,255,255,1);
      border-radius: 3Px;
      box-sizing: border-box;
      padding: 8px;
      .register,
      .download,
      .intention {
        .formTitle {
          font-size: 5px;
          margin-bottom: 5px;
          font-family: Alibaba PuHuiTi;
          font-weight: 400;
          color: rgba(252,96,57,1);
          line-height: 10px;
          text-align: center;
        }
        .form_item {
          width: 100%;
          height: 13px;
          box-sizing: border-box;
          background-color: #fff;
          margin-bottom: 4px;
          cursor: pointer;
          input {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 5px;
            line-height: 6px;
            font-size: 4px;
            font-family:PingFang SC;
            font-weight: 400;
            color:rgba(51,51,51,1);
            border: 1px solid rgba(211,211,211,1);
            border-radius: 3Px;
            outline: none;
          }
          .select {
            width: 100%;
            height: 100%;
            line-height: 4px;
            font-size: 4px;
            font-family: PingFang SC;
            font-weight: 400;
            color:rgba(51,51,51,1);
            -webkit-user-select:none;
            -moz-user-select:none;
            -ms-user-select:none;
            user-select:none;
            label {
              display: block;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              padding: 5px;
              font-size: 4px;
              font-family: PingFang SC;
              font-weight: 400;
              color:rgba(51,51,51,1);
              border: 1px solid rgba(211,211,211,1);
              border-radius: 3Px;
              position: relative;
              cursor: pointer;
              span {
                width: 0px;           /*  宽高设置为0，很重要，否则达不到效果 */
                height: 0px;
                border: 2px solid #666;
                border-bottom-color: transparent;   /* 设置透明背景色 */
                border-left-color: transparent;
                border-right-color: transparent;
                position: absolute;
                right: 5px;
                top: 5px;
              }
              .selectIcon {
                border: 2px solid #666;
                border-top-color: transparent;   /* 设置透明背景色 */
                border-left-color: transparent;
                border-right-color: transparent;
                top: 3px;
              }
            }
            ul {
              max-height: 70px;
              overflow: scroll;
              background-color: #fff;
              border: 1px solid rgba(211,211,211,1);
              border-radius: 3Px;
              position: relative;
              z-index: 999;
              &::-webkit-scrollbar {
                display: none;
              }
              li {
                display: block;
                width: 100%;
                height: 13px;
                box-sizing: border-box;
                padding: 5px;
                font-size: 4px;
                font-family: PingFang SC;
                font-weight: 400;
                color:rgba(51,51,51,1);
                &:hover {
                  background-color: #FF7F4A;
                }
              }
              .active {
                background-color: #FF7F4A;
              }
            }
          }
        }
        .getYzm {
          display: flex;
          input {
            flex: 1
          }
          button {
            margin-left: 5px;
            width: 30px;
            height: 13px;
            font-size: 4px;
            border: 1px solid #ccc;
            border-radius: 3Px;
            outline: none;
            cursor: pointer;
            font-family: PingFang SC;
            font-weight: 400;
          }
        }
        .qrcode {
          width: 66px;
          height: 66px;
          margin: 0 auto;
          #canvas {
            width: 100%!important;
            height: 100%!important;
          }
        }
        .submitForm {
          margin-top: 8px;
          width: 100%;
          height: 13px;
          background: linear-gradient(0deg,rgba(251,87,52,1) 0%,rgba(255,124,72,1) 100%);
          border-radius: 3Px;
          cursor: pointer;
          font-size: 4px;
          line-height: 13px;
          color: #fff;
          text-align: center;
        }
        .buttonUnder {
          text-align: center;
          font-family: PingFang SC;
          font-weight: 400;
          font-size: 3.5px;
          margin-top: 3px;
        }
      }
    }
    .otherForm {
      top: 60px;
    }
  }
  .landPage_pc_footer {
    width: 100%;
    img {
      display: block;
      width: 100%;
    }
  }
  .bottomCopyRight {
    margin: 0 65px;
    text-align: center;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 12Px;
    margin-top: 10Px;
    line-height: 30Px;
    margin-bottom: 20Px;
    .topText {
      line-height: 30Px;
      border-bottom: 1px solid #ccc;
    }
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-size: 4px;
    font-family: PingFang SC;
    font-weight: 400;
    color:#666;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 4px;
    font-family: PingFang SC;
    font-weight: 400;
    color:#666;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size: 4px;
    font-family: PingFang SC;
    font-weight: 400;
    color:#666;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

@media screen and (max-width: 1080Px) {
  .landPage_pc {
    .landPage_pc_header {
      width: 100%;
      position: relative;
      img {
        display: block;
        width: 100%;
      }
      .form {
        position: absolute;
        top: 106Px;
        right: 90Px;
        width: 315Px;
        background:rgba(255,255,255,1);
        border-radius: 3Px;
        box-sizing: border-box;
        padding: 20Px;
        .register,
        .download,
        .intention {
          .formTitle {
            font-size: 16Px;
            margin-bottom: 20Px;
            font-family: Alibaba PuHuiTi;
            font-weight: 400;
            color: rgba(252,96,57,1);
            line-height: 30Px;
            text-align: center;
          }
          .form_item {
            width: 100%;
            height: 40Px;
            box-sizing: border-box;
            background-color: #fff;
            margin-bottom: 12Px;
            cursor: pointer;
            input {
              display: block;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              padding: 14Px;
              line-height: 18Px;
              font-size: 14Px;
              font-family:PingFang SC;
              font-weight: 400;
              color:rgba(51,51,51,1);
              border: 1Px solid rgba(211,211,211,1);
              border-radius: 3Px;
              outline: none;
            }
            .select {
              width: 100%;
              height: 100%;
              line-height: 10Px;
              font-size: 14Px;
              font-family: PingFang SC;
              font-weight: 400;
              color:rgba(51,51,51,1);
              -webkit-user-select:none;
              -moz-user-select:none;
              -ms-user-select:none;
              user-select:none;
              label {
                display: block;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 14Px;
                font-size: 14Px;
                font-family: PingFang SC;
                font-weight: 400;
                color:rgba(51,51,51,1);
                border: 1Px solid rgba(211,211,211,1);
                border-radius: 3Px;
                position: relative;
                cursor: pointer;
                span {
                  width: 0px;           /*  宽高设置为0，很重要，否则达不到效果 */
                  height: 0px;
                  border: 5Px solid #666;
                  border-bottom-color: transparent;   /* 设置透明背景色 */
                  border-left-color: transparent;
                  border-right-color: transparent;
                  position: absolute;
                  right: 14Px;
                  top: 17Px;
                }
                .selectIcon {
                  border: 5Px solid #666;
                  border-top-color: transparent;   /* 设置透明背景色 */
                  border-left-color: transparent;
                  border-right-color: transparent;
                  top: 11Px;
                }
              }
              ul {
                max-height: 240Px;
                overflow: scroll;
                background-color: #fff;
                border: 1Px solid rgba(211,211,211,1);
                border-radius: 3Px;
                position: relative;
                z-index: 999;
                &::-webkit-scrollbar {
                  display: none;
                }
                li {
                  display: block;
                  width: 100%;
                  height: 40Px;
                  box-sizing: border-box;
                  padding: 14Px;
                  font-size: 14Px;
                  font-family: PingFang SC;
                  font-weight: 400;
                  color:rgba(51,51,51,1);
                  &:hover {
                    background-color: #FF7F4A;
                  }
                }
                .active {
                  background-color: #FF7F4A;
                }
              }
            }
          }
          .getYzm {
            display: flex;
            input {
              flex: 1
            }
            button {
              margin-left: 5px;
              width: 100Px;
              height: 40Px;
              font-size: 14Px;
              border: 1Px solid #ccc;
              border-radius: 3Px;
              outline: none;
              cursor: pointer;
              font-family: PingFang SC;
              font-weight: 400;
            }
          }
          .qrcode {
            width: 200Px;
            height: 200Px;
            margin: 0 auto;
            #canvas {
              width: 100%!important;
              height: 100%!important;
            }
          }
          .submitForm {
            margin-top: 24Px;
            width: 100%;
            height: 40Px;
            background: linear-gradient(0deg,rgba(251,87,52,1) 0%,rgba(255,124,72,1) 100%);
            border-radius: 3Px;
            cursor: pointer;
            font-size: 14Px;
            line-height: 40Px;
            color: #fff;
            text-align: center;
          }
          .buttonUnder {
            text-align: center;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 12Px;
            margin-top: 8Px;
          }
        }
      }
      .otherForm {
        top: 180Px;
      }
      ::-webkit-input-placeholder { /* WebKit browsers */
        font-size: 14Px;
        font-family: PingFang SC;
        font-weight: 400;
        color:rgba(51,51,51,1);
      }

      ::-moz-placeholder { /* Mozilla Firefox 19+ */
        font-size: 14Px;
        font-family: PingFang SC;
        font-weight: 400;
        color:rgba(51,51,51,1);
      }

      :-ms-input-placeholder { /* Internet Explorer 10+ */
        font-size: 14Px;
        font-family: PingFang SC;
        font-weight: 400;
        color:rgba(51,51,51,1);
      }
      input[type=number] {
          -moz-appearance:textfield;
      }
      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
    }
  }
}
</style>
