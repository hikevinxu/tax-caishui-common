<template>
  <div class="landPagePC" :style="'background: ' + formData.pageBgColor">
    <div class="landPagePC-center">
      <div class="headImgContent">
        <img class="headImg" v-if="formData.headImg" :src="formData.headImg" alt="">
        <div class="headContent">
          <div class="form" :style="{'background': formData.preRegisterBgColor}">
            <div class="taxCalculator" v-if="formData.showCounter">
              <div class="taxCalculator-header">
                <div class="title">节税计算器</div>
                <ul class="tab">
                  <li :class="activeTab == 1 ? 'active' : ''" @click="activeTab = 1">企业</li>
                  <li :class="activeTab == 2 ? 'active' : ''" @click="activeTab = 2">个人</li>
                </ul>
              </div>
              <div v-if="activeTab == 1" class="taxCalculator-content">
                <div class="tax-form">
                  <div class="tax-formItem">
                    <label>企业增值税率</label>
                    <div class="select">
                      <input readonly v-model="companyTaxData.rate" @click="toggleSelectShow" type="text" placeholder="请选择">
                      <ul v-if="selectShow" class="selectList">
                        <li :class="companyTaxData.rate == '6%' ? 'activeLi' : ''" @click="selectRate('6%')">6%</li>
                        <li :class="companyTaxData.rate == '9%' ? 'activeLi' : ''" @click="selectRate('9%')">9%</li>
                        <li :class="companyTaxData.rate == '15%' ? 'activeLi' : ''" @click="selectRate('15%')">15%</li>
                      </ul>
                      <i :class="selectShow ? 'selectIcon' : ''"></i>
                    </div>
                  </div>
                  <div class="tax-formItem">
                    <label>企业开票金额</label>
                    <input type="tel" v-model="companyTaxData.money" placeholder="请输入整数">
                    <span>万元</span>
                  </div>
                  <div class="tax-formItem">
                    <label>企业年利润</label>
                    <input type="tel"  v-model="companyTaxData.profits" placeholder="请输入整数">
                    <span>万元</span>
                  </div>
                </div>
                <div class="tax-bottom">
                  <p><span>应缴纳税</span><span>{{ companyTaxDataShouldPayTax }}万元</span></p>
                  <p><span>预计节税</span><span>{{ companyTaxDataSaveTax }}万元</span></p>
                </div>
              </div>
              <div v-if="activeTab == 2" class="taxCalculator-content">
                <div class="tax-form">
                  <div class="tax-formItem">
                    <label>工资薪金（月）</label>
                    <input type="tel" v-model="personTaxData.salary" placeholder="如：8000">
                    <span>元</span>
                  </div>
                  <div class="tax-formItem">
                    <label>劳务报酬（月）</label>
                    <input type="tel"  v-model="personTaxData.remuneration" placeholder="如：8000">
                    <span>元</span>
                  </div>
                  <div class="tax-formItem">
                    <label>年终奖（年）</label>
                    <input type="tel" v-model="personTaxData.bonus" placeholder="如：8000">
                    <span>元</span>
                  </div>
                </div>
                <div class="tax-bottom">
                  <p><span>应缴纳税</span><span>{{ personTaxDataShouldPayTax }}元</span></p>
                  <p><span>预计节税</span><span>{{ personTaxDataSaveTax }}元</span></p>
                </div>
              </div>
            </div>
            <div class="register" v-if="formData.pageType == 1">
              <div class="formTitle"  v-if="formData.formTitle && formData.showCounter == false">{{formData.formTitle}}</div>
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
            <div class="download"  v-if="formData.pageType == 2 && formData.showCounter == false">
              <div class="qrcode">
                <canvas id="canvas"></canvas>
              </div>
              <div class="buttonUnder" :style="{'color': formData.dimensionalColor}" v-if="formData.dimensionalText" v-html="handleText(formData.dimensionalText)"></div>
              <div id="captcha"></div>
            </div>
            <div class="download"  v-if="formData.pageType == 2 && formData.showCounter == true">
              <div :style="{'background': formData.buttonBgColor, color: formData.buttonRemarkColor}" @click="download" class="submitForm">{{formData.buttonRemark}}</div>
              <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
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
      </div>
      <img class="footerImg" v-if="formData.tailImg" :src="formData.tailImg" alt="">
      <div class="footContent">
        <div class="topText" v-if="formData.riskInfo"><span :style="{'color': formData.riskInfoColor}" v-html="handleText(formData.riskInfo)"></span></div>
        <div class="bottomText" v-if="formData.companyInfo">
          <span :style="{'color': formData.companyInfoColor}" v-html="handleText(formData.companyInfo)"></span>
        </div>
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
  computed: {
    companyTaxDataShouldPayTax: function(){
      var rateNum = (this.companyTaxData.rate.replace("%",""))/100
      var zengzhi = Number(this.companyTaxData.money)/(1+rateNum)*rateNum
      var fujia = zengzhi*0.12
      var qysds = Number(this.companyTaxData.profits)*0.25
      var gdfhgs = (Number(this.companyTaxData.profits) - qysds)*0.2
      return (zengzhi + fujia + qysds + gdfhgs).toFixed(2)
    },
    companyTaxDataSaveTax: function() {
      var zengzhi = Number(this.companyTaxData.money)/(1+0.03)*0.03
      var fujia = zengzhi*0.12
      var qysds = Number(this.companyTaxData.profits)*0
      var gesds = Number(this.companyTaxData.money)/(1+0.03)*0.015
      var yjjs = this.companyTaxDataShouldPayTax - (zengzhi + fujia + qysds + gesds)
      if (yjjs < 0) {
        yjjs = 0
      }
      return yjjs.toFixed(2)
    },
    personTaxDataShouldPayTax: function(){
      var rate,sskcs
      if (Number(this.personTaxData.salary) <= 3000) {
        rate = 0.03
        sskcs = 0
      }else if(Number(this.personTaxData.salary) > 3000 && Number(this.personTaxData.salary) <= 12000){
        rate = 0.1
        sskcs = 210
      }else if(Number(this.personTaxData.salary) > 12000 && Number(this.personTaxData.salary) <= 25000){
        rate = 0.2
        sskcs = 1410
      }else if(Number(this.personTaxData.salary) > 25000 && Number(this.personTaxData.salary) <= 35000){
        rate = 0.25
        sskcs = 2660
      }else if(Number(this.personTaxData.salary) > 35000 && Number(this.personTaxData.salary) <= 55000){
        rate = 0.3
        sskcs = 4410
      }else if(Number(this.personTaxData.salary) > 55000 && Number(this.personTaxData.salary) <= 80000){
        rate = 0.35
        sskcs = 7160
      }else if(Number(this.personTaxData.salary) > 80000){
        rate = 0.45
        sskcs = 15160
      }

      var rateYear,sskcsYear
      if (Number(this.personTaxData.bonus)/12 <= 3000) {
        rateYear = 0.03
        sskcsYear = 0
      }else if(Number(this.personTaxData.bonus)/12 > 3000 && Number(this.personTaxData.bonus)/12 <= 12000){
        rateYear = 0.1
        sskcsYear = 210
      }else if(Number(this.personTaxData.bonus)/12 > 12000 && Number(this.personTaxData.bonus)/12 <= 25000){
        rateYear = 0.2
        sskcsYear = 1410
      }else if(Number(this.personTaxData.bonus)/12 > 25000 && Number(this.personTaxData.bonus)/12 <= 35000){
        rateYear = 0.25
        sskcsYear = 2660
      }else if(Number(this.personTaxData.bonus)/12 > 35000 && Number(this.personTaxData.bonus)/12 <= 55000){
        rateYear = 0.3
        sskcsYear = 4410
      }else if(Number(this.personTaxData.bonus)/12 > 55000 && Number(this.personTaxData.bonus)/12 <= 80000){
        rateYear = 0.35
        sskcsYear = 7160
      }else if(Number(this.personTaxData.bonus)/12 > 80000){
        rateYear = 0.45
        sskcsYear = 15160
      }
      var grsds = Number(this.personTaxData.salary) * rate - sskcs
      var nzj = Number(this.personTaxData.bonus) * rateYear - sskcsYear
      var lwbc = 0
      if (Number(this.personTaxData.remuneration) > 800){
        lwbc = (Number(this.personTaxData.remuneration) - 800) * 0.2
      }
      return (grsds + nzj + lwbc).toFixed(2)
    },
    personTaxDataSaveTax: function(){
      var zzs = Number(this.personTaxData.salary)/(1+0.03)*0.03
      var fjs = zzs * 0.12
      var grsds = Number(this.personTaxData.salary)/(1+0.03)*0.015
      var yjjs = this.personTaxDataShouldPayTax - (zzs + fjs + grsds)
      if(yjjs < 0) {
        yjjs = 0
      }
      return yjjs.toFixed(2)
    }
  },
  data() {
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
      },
      activeTab: 1,
      selectShow: false,
      companyTaxData: {
        rate: '',
        money: '',
        profits: ''
      },
      personTaxData: {
        salary: '',
        remuneration: '',
        bonus: ''
      },
    }
  },
  beforeCreate: function() {
      document.getElementsByTagName("body")[0].style.overflowX="hidden"
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
        width: '350px',
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
          if (res.data.pageType == 2 && res.data.showCounter == false){
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
        // this.getYZMType = 'register'
        this.getYZMType = 'intention'
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

      let formJson = {
        phone: this.phone
      }

      let params = {
        clientType: 'h5',
        phone: this.phone,
        verifyType: 'sms',
        verifycode: this.password,
        pageType: this.formData.pageType,
        pageId: this.$route.query.id,
        formJson: JSON.stringify(formJson),
        sourceChannel: this.$route.query.utm_medium
      }
      globalApi.channelPageObtainFormValidateSave(params).then(res => {
        if(res.code == 0){
          if(res.data.newRegistration == true){
            sa.track('WebSignUp', {
                target: this.formData.channelRemark,
                phone: this.phone
            })
            sa.login(res.data.uid)
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
          this.formData.showCounter = false
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
        verifyType: 'sms',
        verifycode: this.password,
        phone: this.phone,
        pageId: this.$route.query.id,
        pageType: this.formData.pageType,
        formType: this.formData.formType,
        formJson: JSON.stringify(formJson),
        sourceChannel: this.$route.query.utm_medium
      }

      globalApi.channelPageObtainFormValidateSave(params).then(res => {
        if(res.code == 0) {
          this.$message({
            message: '提交成功!',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          if(res.data.newRegistration == true){
            sa.track('WebSignUp', {
                target: this.formData.channelRemark,
                phone: this.phone
            })
            sa.login(res.data.uid)
          }
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
          this.formData.showCounter = false
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
    },
    download() {
      this.formData.showCounter = false
      this.$nextTick(() => {
        this.useqrcode()
      })
    },
    selectRate(val){
      this.companyTaxData.rate = val
      this.selectShow = false
    },
    toggleSelectShow() {
      this.selectShow = !this.selectShow
      this.intentionShow = false
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
.landPagePC {
  width: 100%;
  margin: 0 auto;
  position: relative;
  .landPagePC-center {
    width: 1440Px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .headImgContent {
    position: relative;
  }
  .footerImg,
  .headImg {
    display: block;
    width: 100%;
  }
  .headContent {
    width: 1000Px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -500Px;
    .form {
      width: 400Px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      margin-top: -30Px;
      border-radius: 4Px;
      box-sizing: border-box;
      padding: 24PX 36Px;
      .taxCalculator {
        width: 100%;
        padding: 24Px 0;
        .taxCalculator-header {
          width: 100%;
          height: 36Px;
          .title {
            float: left;
            font-family: PingFangSC-Medium;
            font-size: 20Px;
            color: rgba(0,0,0,0.87);
            line-height: 36Px;
          }
          .tab {
            float: right;
            font-family: PingFangSC-Medium;
            font-size: 14Px;
            color: #FF7F4A;
            text-align: left;
            line-height: 32Px;
            border: 2Px solid #FF7F4A;
            background-color: #FF7F4A;
            border-radius: 18Px;
            li {
              float: left;
              width: 96Px;
              height: 32Px;
              border-radius: 16Px;
              text-align: center;
              color: #fff;
              cursor: pointer;
            }
            li.active {
              background-color: #fff;
              color: #FF7F4A;
            }
          }
        }
        .taxCalculator-content {
          width: 100%;
          .tax-form {
            padding: 16Px 0;
            .tax-formItem {
              margin-top: 8Px;
              position: relative;
              display: flex;
              label {
                width: 100Px;
                font-family: PingFangSC-Regular;
                font-size: 13Px;
                color: rgba(0,0,0,0.60);
                text-align: left;
                line-height: 36Px;
              }
              .select,
              input {
                flex: 1;
                height: 36Px;
                padding: 8Px 40Px 8Px 12Px;
                box-sizing: border-box;
                border: 1px solid rgba(0,0,0,0.12);
                border-radius: 2Px;
                outline: none;
                font-size: 13Px;
                color: rgba(0,0,0,0.60);
                line-height: 20Px;
              }
              span {
                position: absolute;
                right: 12Px;
                top: 0;
                font-family: PingFangSC-Regular;
                font-size: 13Px;
                color: rgba(0,0,0,0.60);
                text-align: right;
                line-height: 36Px;
              }
              i {
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
                top: 12Px;
              }
              .select {
                position: relative;
                padding: 0;
                input {
                  width: 100%;
                  height: 100%;
                  border: 0;
                  cursor: pointer;
                }
                .selectList {
                  width: 100%;
                  line-height: 36Px;
                  font-size: 13Px;
                  text-align: center;
                  color: rgba(0,0,0,0.60);
                  position: absolute;
                  top: 36Px;
                  right: -1Px;
                  background-color: #fff;
                  border: 1px solid rgba(0,0,0,0.12);
                  z-index: 999;
                  cursor: pointer;
                  li {
                    &:hover{
                      background-color: #FF7F4A;
                    }
                  }
                  .activeLi {
                    background-color: #FF7F4A;
                  }
                }
              }
            }
          }
          .tax-bottom {
            width: 100%;
            height: 88Px;
            background: #FFEADA;
            border-radius: 2Px;
            font-family: PingFangSC-Medium;
            font-size: 14Px;
            color: rgba(0,0,0,0.38);
            text-align: left;
            line-height: 20Px;
            box-sizing: border-box;
            padding: 8Px 0;
            p {
              display: block;
              width: 100%;
              line-height: 36Px;
              overflow: hidden;
              span {
                float: left;
                margin-left: 24Px;
                &:last-child {
                  float: right;
                  margin-right: 24Px;
                }
              }
              &:last-child{
                color: #FF7F4A;
              }
            }
          }
        }
      }
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
          background-color: transparent;
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
            background-color: #fff;
          }
        }
        .qrcode {
          width: 300Px;
          height: 300Px;
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
  }
  .footContent {
    text-align: center;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 12Px;
    line-height: 30Px;
    padding: 10Px 0 20Px 0;
    .topText {
      line-height: 30Px;
    }
  }
}
body,html {
  overflow-x: hidden!important;
}
::-webkit-input-placeholder { /* WebKit browsers */
  font-size: 14Px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0,0,0,0.60);
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  font-size: 14Px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0,0,0,0.60);
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  font-size: 14Px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(0,0,0,0.60);
}
</style>
