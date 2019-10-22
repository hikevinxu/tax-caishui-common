<template>
  <div class="serviceDetail" >
    <div class="companyInfo">
      <h4 class="title">{{data.title}}</h4>
      <div class="imgList">
        <div class="img" v-for="(item,index) in data.imgs" :key="index" @click="preview(index)">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="info">
        <div class="areaContent">
          <!-- <div class="area">
            <div class="label">
              <img style="display:block;width:16px;height: 16px;margin-right: 8px;" src="@/assets/appDetail/ic_firm_region@3x.png" alt="">
              <span>服务区域</span>
            </div>
            <div class="areaList" >
              <span v-for="(item,index) in areaList" :key="index">{{item}}</span>
            </div>
          </div> -->
          <div class="adress">
            <img style="display:block;width:16px;height: 16px;margin-right: 8px;" src="@/assets/appDetail/firm_ic_address@3x.png" alt="">
            <div class="adressText">
              <span>{{data.company.address}}</span>
              <!-- <span style="color: #FFAD71;">距您612m</span> -->
            </div>
          </div>
        </div>
        <!-- <div class="phone" @click="call">
          <img style="display:block;width: 24px; height: 24px;" src="@/assets/appDetail/ic_firm_call@3x.png" alt="">
        </div> -->
      </div>
    </div>
    <div class="service_security">
       <div class="security_title">
         <img style="display:block;width:16px;height:16px;margin-right: 10px;" src="@/assets/appDetail/ic_service_guarantee@3x.png" alt="">
         <h4>服务保障</h4>
       </div>
       <div class="security_content" v-show="data.company.bindMerchant">
         <div class="securityList" v-for="(item,index) in data.serviceAssuranceVoList" :key="index">
           <div class="security" style="background: rgba(255,173,113,0.06)">
             <img :src="item.icon" alt="">
             <span class="security_txt">{{item.title}}</span>
           </div>
         </div>
       </div>
       <div class="security_content" v-show="!data.company.bindMerchant">
         <div class="securityList" v-for="(item,index) in data.serviceAssuranceVoList" :key="index">
           <div class="security">
             <img :src="item.iconGrey" alt="">
             <span class="security_txt">{{item.title}}</span>
           </div>
         </div>
       </div>
    </div>
    <div class="company" @click="goCompany">
      <div class="companyInfo_footer">
        <img class="logo" :src="data.company.logo" alt="">
        <div class="info">
          <span class="name">{{data.company.name}}<img :src="levelSrc" alt="" srcset=""></span>
          <div class="businessList">
            <span class="business" >{{data.company.levelLabel}}</span>
          </div>
        </div>
      </div>
      <img style="display: block;width:16px;height: 16px;margin-right: 10px;" src="@/assets/appDetail/ic_chevron_right_small@3x.png" alt="">
    </div>
    <div class="hidden" id="detail" ref="detailMore">
      <div class="serviceIntroduction">
        <div class="Introduction_title">
          <img style="display:block;width:16px;height:16px;margin-right: 10px;" src="@/assets/appDetail/ic_service_information @3x.png" alt="">
          <h4>服务介绍</h4>
        </div>
        <!-- <div class="content" v-html="data.introduce"></div> -->
        <div class="content">
          <div class="Introduction">
            <span style="font-family: PingFangSC-Medium;font-size: 14px;color: rgba(0,0,0,0.87);" class="label">
              办理步骤及所需时间
            </span>
            <div class="txt" v-show='data.handleProcessDuration' v-html="data.handleProcessDuration">
            </div>
            <div class="txt" v-show='!data.handleProcessDuration'>
              暂无
            </div>
          </div>
          <div class="Introduction">
            <span style="font-family: PingFangSC-Medium;font-size: 14px;color: rgba(0,0,0,0.87);" class="label">
              办理所需材料
            </span>
            <div class="txt" v-show='data.handleProcessDuration' v-html="data.handleMaterial">
            </div>
            <div class="txt" v-show='!data.handleProcessDuration'>
              暂无
            </div>
          </div>
          <div class="Introduction">
            <span style="font-family: PingFangSC-Medium;font-size: 14px;color: rgba(0,0,0,0.87);" class="label">
              交付材料
            </span>
            <div class="txt" v-show='data.handleProcessDuration' v-html="data.deliveryMaterial">
            </div>
            <div class="txt" v-show='!data.handleProcessDuration'>
              暂无
            </div>
          </div>
          <div class="Introduction">
            <span style="font-family: PingFangSC-Medium;font-size: 14px;color: rgba(0,0,0,0.87);" class="label">
              交付时长
            </span>
            <div class="txt" v-show='data.handleProcessDuration' v-html="data.deliveryDuration">
            </div>
            <div class="txt" v-show='!data.handleProcessDuration'>
              暂无
            </div>
          </div>
        </div>
      </div>
      <div class="offer" v-show="data.items && data.items.length != 0 &&showOffer">
        <h4 class="title">服务报价</h4>
        <div class="tabel">
          <div class="header">
            <span class="name">服务项</span>
            <span class="price">报价</span>
          </div>
          <div class="serviceList">
            <div class="service" v-for="(item,index) in data.items" :key="index">
              <div class="service_name">{{item.name}}</div>
              <div class="service_price">{{item.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="close" v-show="showMore" @click="close">
        <span>点击收起</span>
        <img src="@/assets/appDetail/ic_arrow_drop_up@3x.png" alt="">
      </div>
      <div class="loadmore" v-show="!showMore && showBtn" @click="moreDetail">
        <span>查看更多</span>
        <img style="display:block;width:12px;height: 12px;margin-right: 8px;" src="@/assets/appDetail/ic_arrow_drop_down@3x.png" alt="">
      </div> -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
import api from '@/api/api'
import { nativeJumpTo, nativeClose, nativeSetShare,nativePostMessage  } from '@/utils/nativeFunction'
import { pathList } from '@/utils/global'
Vue.use(Toast)
export default {
  data () {
    return {
      imgList: [],
      content: '',
      showMore: false,
      showBtn: true,
      showOffer: true,
      serviceList: [
      ],
      businessList: [],
      logo: '',
      levelSrc: require('../../assets/appDetail/V1_12@3x.png'),
      level: 3,
      data: {
        company:{
          address: '',
          logo: '',
          levelLabel: '',
          bindMerchant: false
        }
      },
      securityList: [
        {
          title: '诚信商家',
          logo: require('../../assets/appDetail/V1_12@3x.png')
        },
        {
          title: '诚信商家',
          logo: require('../../assets/appDetail/V1_12@3x.png')
        },
        {
          title: '诚信商家',
          logo: require('../../assets/appDetail/V1_12@3x.png')
        }
      ]
    }
  },
  created(){
    if(this.$route.query.id){
      this.isEdit = true
      let data = {
        id: this.$route.query.id
      }
      this.getDetail(data)
    }
    
  },
  mounted(){
    setTimeout(()=>{
    // console.log(document.getElementById('detail').clientHeight)
     console.log(this.$refs.detailMore.clientHeight)
     if(this.$refs.detailMore.offsetHeight < 288){
        this.showBtn = false
      }else {
        this.showBtn = true
      }
    },2000)
    // window.onresize = function() {
    //   console.log(1111)
    // }
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    },
    getDetail(data){
      api.serviceDetail(data).then(res => {
        console.log(res)
        if(res.code == 0){
          if(!res.data || res.data.length == 0){
            return
          }else{
            this.data = res.data
            //判断公司的等级
            if(this.data.company.level == 1){
              this.levelSrc = require('../../assets/appDetail/V1_12@3x.png')
            }else if(this.data.company.level == 2){
              this.levelSrc = require('../../assets/appDetail/V2_20@3x.png')
            }else if(this.data.company.level == 3){
              this.levelSrc = require('../../assets/appDetail/V3_20@3x.png')
            }
            //替换文本换行
            if(this.data.handleProcessDuration){
              this.data.handleProcessDuration = this.data.handleProcessDuration.replace(/\n/g,'<br/>')
              console.log(this.data.handleProcessDuration)
              this.data.handleMaterial =  this.data.handleMaterial.replace(/\n/g,'<br/>')
              this.data.deliveryMaterial = this.data.deliveryMaterial.replace(/\n/g,'<br/>')
              this.data.deliveryDuration = this.data.deliveryDuration.replace(/\n/g,'<br/>')
            }
            //判断报价是否有值
            if(res.data.items.length == 1 && res.data.items[0].name == '' && res.data.items[0].price == ''){
              this.showOffer = false
            }

            let imgList = []
            for (let i = 0; i < res.data.imgs.length; i++) {
              imgList.push(res.data.imgs[i].img)
            }
            this.imgList = imgList

            //发送imAccid
            let data = {
              imAccid: this.data.company.imAccid,
              name: this.data.company.name,
              phone: this.data.company.phones[0],
              title: this.data.title
            }
            let jsonMessage = {
              data: data,
              handlerName: 'imAccid',
              callbackId: ''
            }

            //发送服务信息
            let serviceData = {
              serviceCode: this.data.serviceCode,
              serviceName: this.data.serviceName,
              intentionStatus: this.data.intentionStatus,
              companyId: this.data.company.id,
              companyName: this.data.company.name,
              bindMerchant: this.data.company.bindMerchant
            }

            let serviceJson = {
              data: serviceData,
              handlerName: 'service',
              callbackId: ''
            }
            nativePostMessage(jsonMessage)
            nativePostMessage(serviceJson)
          }
        }
      })
    },
    preview(index){
      console.log(index)
      let data = {
        index: index,
        imgs: this.imgList
      }
      let jsonMessage = {
        data: data,
        handlerName: 'showImgs',
        callbackId: ''
      }
      nativePostMessage(jsonMessage)
    },
    call(){
      let data = {
        phone: this.data.company.phones[0]
      }
      let jsonMessage = {
        data: data,
        handlerName: 'call',
        callbackId: ''
      }
      nativePostMessage(jsonMessage)
    },
    goCompany(){
      let data = {
        pagePath: pathList.companyDetailPath,
        pageArgs: {firmId: this.data.company.id + ''}
      }
      nativeJumpTo(data)
    },
    moreDetail(){
      this.$refs.detailMore.style.overflow = 'auto'
      this.$refs.detailMore.style.maxHeight = 'none'
      this.$refs.detailMore.style.height = 'auto'
      this.showMore = true
    },
    close(){
      this.$refs.detailMore.style.maxHeight = '288px'
      this.$refs.detailMore.style.overflow = 'hidden'
      this.showMore = false
    }
  }
}
</script>
<style lang="scss" scoped>
.serviceDetail{
  height: 100%;
  width: 100%;
  font-family: PingFangSC-Regular;
  position: relative;
  padding-bottom: 32px;
  .loadmore{
    width: 100%;
    height: 66px;
    background: linear-gradient(180deg, rgba(255,255,255,0.80) 0%, #FFFFFF 67%);
    // border-radius: 3PX;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(0,0,0,0.60);
    cursor: pointer;
    position: absolute;
    bottom: -5px;
    left: 0;
    z-index: 99;
  }
  .companyInfo{
    width: 100%;
    padding-top: 16px;
    .title{
      font-family: PingFangSC-Medium;
      display: block;
      width: 299px;
      font-size: 20px;
      color: rgba(0,0,0,0.87);
      margin-left: 24px;
      line-height: 30px;
      // margin-right: auto;
    }
    .imgList{
      margin-left: 24px;
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-top: 16px;
      .img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 80px;
        margin-right: 8px;
        border-radius: 4px;
        flex: none;
        img{
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 4px;
        }
      }
    }
    .info{
      display: flex;
      align-items: flex-start;
      margin-left: 24px;
      margin-top: 16px;
      .areaContent{
        // border-right: 1px solid rgba(0,0,0,0.04);
        padding-right: 10px;
        .adress{
          display: flex;
          align-items: flex-start;
          .adressText{
            width: 232px;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            span{
              font-size: 12px;
              color: rgba(0,0,0,0.38);
              line-height: 18px;
            }
          }
        }
      }
      .phone{
        display: flex;
        align-items: center;
        width: 63px;
        justify-content: center;
      }
    }
  }
  .service_security{
    width: 100%;
    margin-top: 15px;
    .security_title{
      width: 312px;
      padding-top: 13px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(0,0,0,0.04);
      h4{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.87);
        text-align: left;
        line-height: 20px;
      }
    }
    .security_content{
      width: 312px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 16px;
      .security{
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        background: rgba(0,0,0,0.02);
        img{
          margin-bottom: 4px;
          display: block;
          width: 28px;
          height: 28px;
        }
        span{
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: rgba(0,0,0,0.60);
          text-align: left;
          font-weight: 100;
          line-height: 20px;
        }
      }
    }
  }
  .hidden{
    // max-height: 288px;
    overflow: hidden;
    position: relative;
  }
  .serviceIntroduction{
    width: 100%;
    margin-top: 30px;
    .title{
      font-size: 16px;
      color: rgba(0,0,0,0.87);
      padding-left: 10px;
      margin-left: 24px;
      border-left: 3px solid #FF7F4A;
    }
    .Introduction_title{
      width: 312px;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      align-items: center;
      h4{
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: rgba(0,0,0,0.87);
        text-align: left;
        line-height: 20px;
      }
    }
    .content{
      width: 312px;
      margin-left: 24px;
      margin-top: 16px;
      font-size: 13px !important;
      color: rgba(0,0,0,0.38) !important;
      line-height: 22px;
      .Introduction{
        margin-bottom: 12px;
        .label{
          margin-bottom: 4px;
        }
      }
    }
  }
  .offer{
    width: 100%;
    margin-top: 30px;
    .title{
      font-size: 16px;
      color: rgba(0,0,0,0.87);
      padding-left: 10px;
      margin-left: 24px;
      border-left: 3px solid #FF7F4A;
    }
    .tabel{
      margin-top: 25px;
      width: 312px;
      margin-left: 24px;
      .header{
        display: flex;
        border-radius: 2px 2px 0 0;
        align-items: center;
        background: rgba(0,0,0,0.02);
        height: 40px;
        .name{
          display: flex;
          width: 200px;
          box-sizing: border-box;
          border: 1px solid rgba(0,0,0,0.08);
          border-top-left-radius: 2px;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          height: 100%;
          color: rgba(0,0,0,0.87);
        }
        .price{
          display: flex;
          width: 110px;
          box-sizing: border-box;
          border: 1px solid rgba(0,0,0,0.08);
          border-left: 0;
          border-top-right-radius: 2px;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: rgba(0,0,0,0.87);
          height: 100%;
        }
      }
      .serviceList{
        display: flex;
        border-radius: 0px 0px 2px 2px;
        flex-flow: column;
        .service{
          width: 100%;
          display: -webkit-box;
          -webkit-box-align: none;
          align-items: center;
          min-height: 40px;
          background: rgba(255,255,255,0.02);
          .service_name{
            font-family: PingFangSC-Light;
            display: flex;
            width: 200px;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.08);
            border-top: 0;
            border-top-left-radius: 2px;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            height: auto;
            color: rgba(0,0,0,0.87);
            padding: 5px;
            white-space:normal; 
            word-break:break-all;
            line-height: 18px;
          }
          .service_price{
            font-family: PingFangSC-Light;
            display: flex;
            width: 110px;
            box-sizing: border-box;
            border: 1px solid rgba(0,0,0,0.08);
            border-left: 0;
            border-top: 0;
            border-top-right-radius: 2px;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: rgba(0,0,0,0.87);
            height: auto;
            padding: 5px;
            white-space:normal;
            word-break:break-all;
            line-height: 18px;
          }
        }
      }
    }
  }
  .close{
    width: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    cursor: pointer;
    img{
      display: block;
      width: 12px;
      height: 12px;
    }
    span{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: rgba(0,0,0,0.60);
    }
  }
  .company{
    width: 328px;
    background: rgba(0,0,0,0.02);
    border-radius: 4px;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    .companyInfo_footer{
      display: flex;
      margin-left: 16px;
      align-items: flex-start;
      width: 100%;
      .logo{
        display: block;
        // border: 1px solid rgba(0,0,0,0.04);
        border-radius: 4px;
        width: 48px;
        height: 48px;
        margin-right: 13px;
      }
      .info{
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        width: 80%;
        margin-left: 0;
        .name{
          display: flex;
          align-items: flex-start;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(0,0,0,0.60);
          margin-bottom: 8px;
          line-height: 18px;
          img{
            display: block;
            width: 16px;
            height: 16px;
            margin-left: 1px;
          }
        }
        .businessList{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .business{
            display: block;
            font-family: PingFangSC-Regular;
            font-size: 11px;
            color: #Ff7F4A;
            padding: 4px;
            margin-right: 4px;
            background: rgba(255,173,113,.26);
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>
