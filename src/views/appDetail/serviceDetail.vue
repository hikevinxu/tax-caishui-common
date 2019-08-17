<template>
  <div class="serviceDetail" @change="onChange">
    <div class="companyInfo">
      <h4 class="title">代理记账公司 杭州0元公司注册提供注册地址 专业代理记账</h4>
      <div class="imgList">
        <div class="img" v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="info">
        <div class="areaContent">
          <div class="area">
            <div class="label">
              <img style="display:block;width:16px;height: 16px;margin-right: 8px;" src="@/assets/appDetail/ic_firm_region@3x.png" alt="">
              <span>服务区域</span>
            </div>
            <div class="areaList" >
              <span v-for="(item,index) in areaList" :key="index">{{item}}</span>
            </div>
          </div>
          <div class="adress">
            <img style="display:block;width:16px;height: 16px;margin-right: 8px;" src="@/assets/appDetail/firm_ic_address@3x.png" alt="">
            <div class="adressText">
              <span>浙江省杭州市西湖区双龙街199号金色西溪B座8楼</span>
              <span style="color: #FFAD71;">距您612m</span>
            </div>
          </div>
        </div>
        <div class="phone">
          <img style="display:block;width: 24px; height: 24px;" src="@/assets/appDetail/ic_firm_call@3x.png" alt="">
        </div>
      </div>
    </div>
    <div class="serviceIntroduction">
      <h4 class="title">服务介绍</h4>
      <div class="content" v-html="content"></div>
    </div>
    <div class="offer">
      <h4 class="title">服务报价</h4>
      <div class="tabel">
        <div class="header">
          <span class="name">服务项</span>
          <span class="price">报价</span>
        </div>
        <div class="serviceList">
          <div class="service" v-for="(item,index) in serviceList" :key="index">
            <span class="name">{{item.name}}</span>
            <span class="price">{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="close">
      <span>点击收起</span>
      <img src="@/assets/appDetail/ic_arrow_drop_up@3x.png" alt="">
    </div>
    <div class="company">
      <div class="companyInfo_footer">
        <img class="logo" :src="logo" alt="">
        <div class="info">
          <span class="name">杭州顶呱呱会计师事务所<img :src="levelSrc" alt="" srcset=""></span>
          <div class="businessList">
            <span class="business" v-for="(item,index) in businessList" :key="index">{{item.name}}</span>
          </div>
        </div>
      </div>
      <img style="display: block;width:16px;height: 16px;margin-right: 10px;" src="@/assets/appDetail/ic_chevron_right_small@3x.png" alt="">
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
export default {
  data () {
    return {
      imgList: [
        require('../../assets/global/bookkeeping_head.png'),
        require('../../assets/global/bookkeeping_head.png'),
        require('../../assets/global/bookkeeping_head.png'),
        require('../../assets/global/bookkeeping_head.png'),
        require('../../assets/global/bookkeeping_head.png'),
        require('../../assets/global/bookkeeping_head.png'),
      ],
      areaList: [
        '余杭','西湖','拱墅','上城','建德','下城','下城',
        '余杭','西湖',
      ],
      content: '<h1>养老金占工资50%是什么水平？</h1><p>养老金占工资的比例，用专业的术语就是养老金替代率。那么养老金替代率50%是什么水平呢？</p><div class="pgc-img"><p class="pgc-img-caption">目前全国企业退休人员的养老金替代率大约是40%左右，所以50%的替代率是略高于企业退休人员的替代率平均水平的。</p></div><p>举个例子，假如你的月工资有6000元，按照50%的替代率计算，养老金可以达到3000元，3000元的养老金水平是高于目前的全国企业退休人员的平均养老水平的。</p><p>按照目前思之想之的工资，如果养老金占工资的50%的话，养老金可以拿到4、5千元，这个水平大概是全国平均养老金水平的两倍，也超过了北京的近4000元的养老金水平，还是比较可观的数目。</p><h1>&nbsp;</h1><h1>提前退休会导致养老金减少</h1><p>提前退休，会影响养老金。退休人员的养老金一般包括基础养老金和个人账户养老金，其中基础养老金与养老保险缴费年限挂钩，每缴费满1年发给1%。个人账户养老金也与缴费水平和缴费年限挂钩。</p><div class="pgc-img"><p class="pgc-img-caption">提前退休，就会少缴几年的养老保险，缴费年限将会减少，个人账户养老金也会少几年的积累，所以相对正常退休，提前退休会导致养老金基数减少。</p></div>',
      serviceList: [
        {
          name: '服务项目1/项',
          price: '1200元'
        },
        {
          name: '服务项目2/项',
          price: '1800元'
        },
        {
          name: '服务项目3/项',
          price: '2200元'
        }
      ],
      businessList: [
        {
          name: '公司注册'
        },
        {
          name: '公司注册'
        },
        {
          name: '公司注册'
        },
      ],
      logo: require('../../assets/appDetail/V2_20@3x.png'),
      levelSrc: require('../../assets/appDetail/V1_12@3x.png'),
      level: 3
    }
  },
  created(){
    if(this.level == 1){
      this.levelSrc = require('../../assets/appDetail/V1_12@3x.png')
    }else if(this.level == 2){
      this.levelSrc = require('../../assets/appDetail/V2_20@3x.png')
    }else if(this.level == 3){
      this.levelSrc = require('../../assets/appDetail/V3_20@3x.png')
    }
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    }
  }
}
</script>
<style lang="scss" scoped>
.serviceDetail{
  height: 100%;
  width: 100%;
  font-family: PingFangSC-Regular;
  padding-bottom: 32px;
  .companyInfo{
    width: 100%;
    padding-top: 16px;
    .title{
      display: block;
      width: 299px;
      font-size: 20px;
      color: rgba(0,0,0,0.87);
      margin-left: 24px;
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
      align-items: center;
      margin-left: 24px;
      .areaContent{
        border-right: 1px solid rgba(0,0,0,0.04);
        padding-right: 10px;
        margin-top: 16px;
        .area{
          display: flex;
          align-items: flex-start;
          
          .label{
            display: flex;
            align-items: center;
            border-right: 1px solid rgba(0,0,0,0.04);
            padding-right: 11px;
            font-size: 12px;
            color: rgba(0,0,0,0.38);
          }
          .areaList{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 10px;
            width: 160px;
            span{
              font-size: 12px;
              color: rgba(0,0,0,0.87);
              display: block;
              margin-right: 8px;
              // margin-bottom: 4px;
              line-height: 18px;
            }
          }
        }
        .adress{
          display: flex;
          align-items: flex-start;
          margin-top: 8px;
          .adressText{
            width: 232px;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            span{
              font-size: 12px;
              color: rgba(0,0,0,0.38);
              // margin-bottom: 4px;
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
    .content{
      width: 312px;
      margin-left: 24px;
      margin-top: 16px;
      font-size: 13px !important;
      color: rgba(0,0,0,0.38) !important;
      line-height: 18px;
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
          display: flex;
          align-items: center;
          height: 40px;
          background: rgba(255,255,255,0.02);
          .name{
            font-family: PingFangSC-Light;
            display: flex;
            width: 200px;
            border: 1px solid rgba(0,0,0,0.08);
            border-top: 0;
            border-top-left-radius: 2px;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            height: 100%;
            color: rgba(0,0,0,0.87);
          }
          .price{
            font-family: PingFangSC-Light;
            display: flex;
            width: 110px;
            border: 1px solid rgba(0,0,0,0.08);
            border-left: 0;
            border-top: 0;
            border-top-right-radius: 2px;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: rgba(0,0,0,0.87);
            height: 100%;
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
    margin-top: 32px;
    .companyInfo_footer{
      display: flex;
      margin-left: 16px;
      align-items: flex-start;
      width: 100%;
      .logo{
        display: block;
        border: 1px solid rgba(0,0,0,0.04);
        border-radius: 4px;
        width: 48px;
        height: 48px;
        margin-right: 13px;
      }
      .info{
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        width: 65%;
        margin-left: 0;
        .name{
          display: flex;
          align-items: center;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: rgba(0,0,0,0.60);
          margin-bottom: 8px;
          img{
            display: block;
            width: 16px;
            height: 16px;
            margin-left: 6px;
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
