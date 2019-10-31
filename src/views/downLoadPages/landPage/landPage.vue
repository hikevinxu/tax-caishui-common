<template>
  <div class="landPage" :style="'background: ' + formData.pageBgColor">
    <div class="wechat" v-if="isWechat && isAndroid">
      <p class="guide_text">点击右上角按钮，然后在弹出的菜单中，点击 <strong style="font-weight: bold">在{{isIos ? 'Safari' : '浏览器'}}中打开</strong>，即可安装</p>
			<img class="arrow" src="@/assets/downLoadPages/the-arrow.png">
    </div>
    <div class="container">
      <div class="head">
        <div class="banner" v-if="formData.headImg">
          <img :src="formData.headImg" alt="">
        </div>
        <div class="topImg" v-if="formData.topImg" :style="{'top': formData.topSpace / 36 + 'rem'}">
          <img :src="formData.topImg" alt="">
        </div>
      </div>
      <div class="taxCalculator"  v-if="formData.showCounter" :style="{'background': formData.preRegisterBgColor}">
        <div class="tax-top">
          <van-tabs v-model="active">
            <van-tab title="企业节税计算器">
              <div class="tax-Content">
                <div class="tax_form_item">
                  <label>企业增值税率</label>
                  <input style="text-align: right;" type="text" v-model="companyTaxData.rate" readonly @click="rateShow = true" placeholder="请选择">
                  <span style="margin-top: 2px;"><van-icon name="arrow" /></span>
                  <van-popup v-model="rateShow" position="bottom">
                    <van-picker show-toolbar title="请选择" :columns="rateList" @cancel="rateShow = false" @confirm="onRateConfirm" />
                  </van-popup>
                </div>
                <div class="tax_form_item">
                  <label>企业开票金额</label>
                  <input style="text-align: right;" type="tel" v-model="companyTaxData.money" placeholder="请输入整数">
                  <span>万元</span>
                </div>
                <div class="tax_form_item">
                  <label>企业年利润</label>
                  <input style="text-align: right;" type="tel" v-model="companyTaxData.profits" placeholder="请输入整数">
                  <span>万元</span>
                </div>
              </div>
              <div class="tax-Content_bottom">
                <p><span>应缴纳税</span><span>{{ companyTaxDataShouldPayTax }}万元</span></p>
                <p><span>预计节税</span><span>{{ companyTaxDataSaveTax }}万元</span></p>
              </div>
            </van-tab>
            <van-tab title="个人节税计算器">
              <div class="tax-Content">
                <div class="tax_form_item">
                  <label>工资薪金（月）</label>
                  <input style="text-align: right;" type="tel" v-model="personTaxData.salary" placeholder="如：8000">
                  <span>元</span>
                </div>
                <div class="tax_form_item">
                  <label>劳务报酬（月）</label>
                  <input style="text-align: right;" type="tel" v-model="personTaxData.remuneration" placeholder="如：8000">
                  <span>元</span>
                </div>
                <div class="tax_form_item">
                  <label>年终奖（年）</label>
                  <input style="text-align: right;" type="tel" v-model="personTaxData.bonus" placeholder="如：8000">
                  <span>元</span>
                </div>
              </div>
              <div class="tax-Content_bottom">
                <p><span>应缴纳税</span><span>{{ personTaxDataShouldPayTax }}元</span></p>
                <p><span>预计节税</span><span>{{ personTaxDataSaveTax }}元</span></p>
              </div>
            </van-tab>
          </van-tabs>
        </div>
        <span :style="{'background': formData.preRegisterBgColor}" class="yuan"></span>
        <span :style="{'background': formData.preRegisterBgColor}" class="yuan"></span>
      </div>
      <div class="register" v-if="formData.pageType == 1" :style="{'background': formData.preRegisterBgColor}">
        <div class="inputItem">
          <van-field v-model="phone" maxlength="11" type="number" placeholder="请输入手机号" />
        </div>
        <div class="inputItem" v-if="phone.length == 11">
          <div class="password">
            <van-field v-model="password" placeholder="输入验证码" />
          </div>
          <div class="getYZM">
            <button @click="getYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}</span></button>
          </div>
        </div>
        <div id="captcha"></div>
        <!-- <div class="inputItem xieyi" v-if="phone.length == 11">
          <div class="xieyiInner">
             <van-checkbox :checked-color="formData.buttonBgColor" v-model="checked">我已阅读并同意</van-checkbox>
             <span :style="{'color': formData.buttonBgColor}" class="agreement" @click="jumpAgreement">《用户服务协议》</span>
          </div>
        </div> -->
        <div class="inputItem submitBtn">
          <button :style="{'background': formData.buttonBgColor, 'color': formData.buttonRemarkColor}" @click="register">{{formData.buttonRemark}}</button>
        </div>
        <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
      </div>
      <div class="download" v-if="formData.pageType == 2" :style="{'background': formData.preRegisterBgColor}">
        <div class="inputItem downloadBtn">
          <button :style="{'background': formData.buttonBgColor, 'color': formData.buttonRemarkColor}" @click="download">{{formData.buttonRemark}}</button>
        </div>
        <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
        <div id="captcha"></div>
      </div>
      <div class="intentionCollect" v-if="formData.pageType == 3" :style="{'background': formData.preRegisterBgColor}">
        <div class="intentionCollect_form">
          <div class="title" v-if="formData.formTitle">{{formData.formTitle}}</div>
          <div class="form_item" v-if="formData.formType == 1">
            <label>国家/地区<span>*</span></label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" v-model="countries" type="text" readonly @click="show = true" placeholder="请选择"></div>
            <van-popup v-model="show" position="bottom">
              <van-picker show-toolbar title="请选择" :columns="countriesList" @cancel="show = false" @confirm="onCityConfirm" />
            </van-popup>
          </div>
          <div class="form_item" v-if="formData.formType == 1">
            <label>注册意向</label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" type="text" v-model="intention" readonly @click="intentionShow = true" placeholder="请选择"></div>
            <van-popup v-model="intentionShow" position="bottom">
              <van-picker show-toolbar title="请选择" :columns="intentionList" @cancel="intentionShow = false" @confirm="onIntentionConfirm" />
            </van-popup>
          </div>
          <div class="form_item"  v-if="formData.formType == 2">
            <label>城市/地区<span>*</span></label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" v-model="address" type="text" placeholder="如：杭州-西湖区"></div>
          </div>
          <div class="form_item">
            <label>如何称呼</label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" v-model="name" type="text" placeholder="姓名已加密，请放心填写"></div>
          </div>
          <div class="form_item">
            <label>手机号码<span>*</span></label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" maxlength="11" v-model="phone" type="tel" placeholder="仅官方可见，请放心填写"></div>
          </div>
          <div class="form_item" v-if="phone.length == 11">
            <label>短信验证码<span>*</span></label>
            <div class="select"><input :style="{background: formData.preRegisterBgColor}" maxlength="11" v-model="password" type="tel" placeholder="请输入正确验证码"></div>
            <div class="intentionCollect_getYZM" @click="intentionGetYZM"><span v-if="!getting">获取验证码</span><span v-else>{{second}}s后重新获取</span></div>
          </div>
          <div id="captcha"></div>
        </div>
        <div class="intentionCollect_btn">
          <button :style="{'background': formData.buttonBgColor, 'color': formData.buttonRemarkColor}" @click="submitForm">{{formData.buttonRemark}}</button>
        </div>
        <div v-if="formData.buttonUnder" :style="{'color': formData.buttonUnderColor}" class="buttonUnder" v-html="handleText(formData.buttonUnder)"></div>
      </div>
      <div class="bottomImg" v-if="formData.tailImg">
        <img :src="formData.tailImg" alt="">
      </div>
      <div class="bottomCopyRight">
        <div class="topText" v-if="formData.riskInfo"><span :style="{'color': formData.riskInfoColor}" v-html="handleText(formData.riskInfo)"></span></div>
        <div class="bottomText" v-if="formData.companyInfo">
          <span :style="{'color': formData.companyInfoColor}" v-html="handleText(formData.companyInfo)"></span>
        </div>
      </div>
      <div class="fixedButton" v-if="formData.adviceShow">
        <a :href="'tel:' + formData.advicePhone" :style="{background: formData.adviceButtonColor, color: formData.adviceContentColor}">{{formData.adviceButtonContent}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import sa from 'sa-sdk-javascript'
import { Field, Button, Toast, Checkbox, Picker, Popup, Tab, Tabs, Icon, Dialog } from 'vant'
import globalApi from '@/api/globalApi'
import { config, Terminal } from '@/utils/global'
Vue.use(Field).use(Button).use(Toast).use(Checkbox).use(Picker).use(Popup).use(Tab).use(Tabs).use(Icon).use(Dialog)
export default {
  name: 'landPage',
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
      tel: '',
      name: '',
      getYZMType: '',
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
      rateShow: false,
      rateList: ['6%','9%','13%'],
      active: 0
    }
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
        // this.getYZMType = 'register'
        this.getYZMType = 'intention'
        this.captchaIns && this.captchaIns.verify()
      }
    },
    intentionGetYZM() {
      if (this.getYZMStatus) {
        this.getYZMStatus = false
        if (this.phone.length != 11) {
          Toast('请输入11位合法手机号！')
          return
        }
        this.getYZMType = 'intention'
        this.captchaIns && this.captchaIns.verify()
      }
    },
    register () {
      // if (!this.checked) {
      //   Toast('请先勾选平台服务协议！')
      //   return
      // }
      if (this.phone.length !== 11) {
        Toast('请输入11位合法手机号！')
        return
      }
      if (this.password == '') {
        Toast('请输入短信验证码！')
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
        utm_medium: this.$route.query.utm_medium
      }
      globalApi.channelPageObtainFormValidateSave(params).then(res => {
        if(res.code == 0){
          if(res.data.newRegistration && res.data.newRegistration == true){
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
          Toast('恭喜您，注册成功！')
          this.$router.push('/downloadAPP?id=' + this.$route.query.id + '&channelRemark=' + this.$route.query.channelRemark)
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
          sa.track('WebDownloadClick', {
            target: this.formData.channelRemark,
            url: location.href
          })
          location.href = theUrl
        }
      } else {
        if(this.isIos){
          console.log('ios')
          sa.track('WebDownloadClick', {
            target: this.formData.channelRemark,
            url: location.href
          })
          theUrl = 'https://apps.apple.com/cn/app/id1475755025'
          location.href = theUrl
        } 
      }
    },
    submitForm() {
      if (this.formData.formType == 1 && this.countries == '') {
        Toast('请先选择国家/地区！')
        return
      }
      if (this.formData.formType == 2 && this.address == '') {
        Toast('请先填写城市/地区！')
        return
      }
      if(this.phone == '') {
        Toast('请先填写联系方式！')
        return
      }

      let reg = new RegExp(/1[0-9]{10}/)

      if(this.phone.length < 11 || !reg.test(this.phone)) {
        Toast('请输入11位合法手机号!')
        return
      }

      if(!this.password || this.password == '') {
        Toast('请输入短信验证码!')
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
        clientType: 'h5',
        verifyType: 'sms',
        verifycode: this.password,
        phone: this.phone,
        pageId: this.$route.query.id,
        pageType: this.formData.pageType,
        formType: this.formData.formType,
        formJson: JSON.stringify(formJson),
        utm_medium: this.$route.query.utm_medium
      }

      globalApi.channelPageObtainFormValidateSave(params).then(res => {
        if(res.code == 0) {
          Toast('提交成功!')
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
          if(this.formData.formType && this.formData.formType == 3) {
            Dialog.alert({
              title: '恭喜您信息提交成功',
              message: '稍后会有专属顾问联系您'
            }).then(() => {
              // on close
            })
            return
          } else {
            if(res.data.newRegistration && res.data.newRegistration == true){
              sa.track('WebSignUp', {
                  target: this.formData.channelRemark,
                  phone: this.phone
              })
              sa.login(res.data.uid)
            }
            this.$router.push('/downloadAPP?id=' + this.$route.query.id + '&channelRemark=' + this.$route.query.channelRemark)
          }
        }
      })

    },
    handleText(text) {
      let str = text.replace(/\n/g,"<br/>")
      return str
    },
    jumpAgreement() {
      this.$router.push('agreement')
    },
    onCityConfirm(val) {
      console.log(val)
      this.countries = val
      this.show = false
    },
    onIntentionConfirm(val) {
      console.log(val)
      this.intention = val
      this.intentionShow = false
    },
    onRateConfirm(val) {
      this.companyTaxData.rate = val
      this.rateShow = false
      console.log(this.companyTaxData.rate)
    }
  }
}
</script>
<style lang="scss" scoped>
.landPage {
  width: 100%;
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
      .topImg {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
        }
      }
    }
    .register {
      background: transparent;
      overflow: hidden;
      .inputItem {
        width: 300px;
        height: 40px;
        border-radius: 3px;
        margin: 0 auto;
        margin-top: 16px;
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
        margin-bottom: 16px;
      }
      .inputItem:last-child{
        margin-top: 16px;
      }
      .password {
        width: 180px;
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
          font-size: 12px;
          box-sizing: border-box;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #000;
          line-height: 40px;
          background-color: #fff;
          border-radius: 3px;
          border: 1px solid #000;
          outline: none;
        }
      }
      .xieyi {
        margin-top: 0px;
        margin-bottom: 0px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: rgba(0,0,0,0.60);
        text-align: left;
        line-height: 18px;
        position: relative;
        height: 20px;
        span {
          color: #FF7F4A;
        }
      }
      .submitBtn {
        border-radius: 3px;
        margin-top: 10px;
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
        margin-bottom: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(153,153,153,1);
        line-height: 16px;
      }
    }
    .download {
      width: 100%;
      overflow: hidden;
      .downloadBtn {
        width: 300px;
        margin: 16px auto 10px;
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
        width: 300px;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: PingFangSC-Regular;
        color: rgba(153,153,153,1);
        line-height: 16px;
      }
    }
    .intentionCollect {
      width: 100%;
      padding: 16px 0;
      background-color: #fbfbfb;
      .title {
        margin-bottom: 20px;
        line-height: 20px;
      }
      .intentionCollect_form {
        width: 300px;
        margin: 0 auto;
        .form_item {
          margin-bottom: 20px;
          position: relative;
          label {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            font-weight: 400;
            span {
              color: red;
            }
          }
          .select {
            height: 40px;
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
            line-height: 20px;
            padding: 10px 0px;
            font-size: 14px;
            color: #666666;
            input {
              width: 100%;
              background-color: #ffffff;
            }
          }
          .intentionCollect_getYZM {
            height: 40px;
            line-height: 20px;
            padding: 10px;
            box-sizing: border-box;
            color: #666;
            font-size: 14px;
            position: absolute;
            bottom: 0;
            right: 0;
            cursor: pointer;
          }
        }
      }
      .intentionCollect_btn {
        width: 300px;
        margin: 0 auto;
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
        margin-bottom: 16px;
        font-family: PingFangSC-Regular;
        color: rgba(153,153,153,1);
        line-height: 16px;
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
      margin-top: 20px;
      margin-bottom: 40px;
      padding-bottom: 20px;
      font-size: 10px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(153,153,153,1);
      text-align: center;
      .bottomText,
      .topText {
        width: 100%;
        padding: 5px 0;
        span {
          font-size: 10px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(153,153,153,1);
          line-height: 16px;
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
    .fixedButton {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: pink;
      a {
        display: block;
        text-align: center;
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
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 14px;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 14px;
  }

  :-ms-input-placeholder { /* Internet Explorer 10+ */
    font-family: PingFangSC-Light, sans-serif;
    color:rgba(153,153,153,1);
    font-size: 14px;
  }
}
</style>
<style lang="scss">
.landPage {
  .xieyi {
    .xieyiInner {
      display: flex;
      // align-items: center;
      // justify-content: center;
      margin-left: auto;
      margin-right: auto;
      .agreement{
        line-height: 18px;
      }
    }
    .van-checkbox {
      display: inline-flex;
    }
    .van-checkbox__label {
      color: rgba(0,0,0,0.60);
      width: 90px;
    }
    .van-checkbox__icon {
      height: auto;
    }
    .van-checkbox__icon .van-icon {
      width: 14px;
      height: 14px;
    }
    .van-icon-success:before {
      position: relative;
      top: -3px;
      left: -1px;
    }
  }
  .taxCalculator {
    width: 100%;
    position: relative;
    .yuan {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      position: absolute;
      bottom: 62px;
      right: 25px;
      &:last-child{
        left: 25px;
      }
    }
    .tax-top {
      width: 300px;
      margin: 0 auto;
      background: transparent;
      .van-tabs--line .van-tabs__wrap{
        height: 40px;
      }
      .van-tabs__nav--line {
        padding-bottom: 0;
      }
      .van-tabs__nav {
        background-color: transparent;
      }
      .van-tab {
        background-color: #fff;
        border-radius: 8px 8px 0 0;
        background-image: linear-gradient(180deg, #F5F5F5 0%, #FAFAFA 100%);
        color: rgba(0,0,0,0.60);
        font-family: PingFangSC-Medium;
        font-size: 14px;
        line-height: 40px;
      }
      .van-tabs--line {
        padding-top: 40px;
      }
      .van-tabs__line{
        bottom: 0;
        background-color: #FF7F4A;
      }
      .van-tab--active {
        color: #FF7F4A;
        background-image: linear-gradient(180deg, #FFF 0%, #FFF 100%);
      }
      .van-hairline--top-bottom::after{
        border-width: 0;
      }
      .tax-Content {
        background-color: #fff;
        padding: 16px;
        .tax_form_item {
          height: 36px;
          background: #FAFAFA;
          box-sizing: border-box;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 2px;
          padding: 8px;
          overflow: hidden;
          margin-bottom: 8px;
          position: relative;
          label {
            float: left;
            width: 100px;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: rgba(0,0,0,0.60);
            text-align: left;
            line-height: 20px;
          }
          input {
            float: right;
            width: 100px;
            height: 20px;
            background-color: #FAFAFA;
            font-family: PingFangSC-Regular;
            text-align: right;
            line-height: 20px;
            padding-right: 38px;
            font-size: 13px;
            color: rgba(0,0,0,0.60);
          }
          span {
            position: absolute;
            top: 8px;
            right: 12px;
            font-family: PingFangSC-Regular;
            font-size: 13px;
            color: rgba(0,0,0,0.60);
            text-align: right;
            line-height: 20px;
          }
          &:last-child {
            margin-bottom: 0px;
          }
          ::-webkit-input-placeholder { /* WebKit browsers */
            font-family: PingFangSC-Light, sans-serif;
            color: rgba(0,0,0,0.26);
            font-size: 13px;
          }

          ::-moz-placeholder { /* Mozilla Firefox 19+ */
            font-family: PingFangSC-Light, sans-serif;
            color: rgba(0,0,0,0.26);
            font-size: 13px;
          }

          :-ms-input-placeholder { /* Internet Explorer 10+ */
            font-family: PingFangSC-Light, sans-serif;
            color: rgba(0,0,0,0.26);
            font-size: 13px;
          }
        }
      }
      .tax-Content_bottom {
        margin-top: 2px;
        background: #FFEADA;
        padding: 4px 0;
        border-radius: 2px;
        p {
          line-height: 30px;
          font-family: PingFangSC-Medium;
          font-size: 14px;
          color: rgba(0,0,0,0.38);
          text-align: left;
          padding: 0 28px 0 24px;
          overflow: hidden;
          span {
            display: block;
            width: 50%;
            float: left;
            &:nth-last-child(1) {
              text-align: right;
            }
          }
          &:nth-last-child(1) {
            color: #FF7F4A;
          }
        }
      }
    }
  }
}
</style>

