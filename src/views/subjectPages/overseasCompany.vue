<template>
  <div class="overseasCompany">
    <div class="headerImgIntro">
      <img src="@/assets/global/overseas_head.png" alt="">
      <div class="headerImgHelp" @click="goQA">
        <span>注册海外公司要注意什么?  |  了解一下</span>
      </div>
    </div>
    <div class="appRecommend">
      <div class="title">
        <img src="@/assets/global/overseas_ic_recomd.png" alt="">
        <span>财税鱼推荐</span>
      </div>
      <div class="swiper">
        <van-swipe class="swiper" :show-indicators="false" :autoplay="3000" indicator-color="white">
          <van-swipe-item @click="goCompany">
            <img :src="img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="companyRecommended">
      <div class="title">
        <img src="@/assets/global/overseas_ic_full.png" alt="">
        <span>全流程服务公司推荐</span>
      </div>
      <div class="companyList">
        <div class="img" v-for="(item, index) in companyList" :key="index" @click="goCompanyRecommend(item)">
          <img :src="item.img" alt="" srcset="" >
        </div>
      </div>
    </div>
    <div class="valuableService">
      <div class="title">
        <img src="@/assets/global/overseas_ic_worthy.png" alt="">
        <span>服务超值公司推荐</span>
      </div>
      <div class="valuableCompanyList">
        <div class="valuableCompany" v-for="(item,index) in valuableCompanyList" :key='index' @click="goCompanyRecommend(item)">
          <img :src="item.img" alt="" srcset="" >
        </div>
      </div>
    </div>
    <div class="hotCountries">
      <div class="title" @click="close">
        <img src="@/assets/global/overseas_ic_hot.png" alt="">
        <span>热门国家注册</span>
      </div>
      <div class="hotContent">
        <div class="btnList">
          <span :class="activeIndex == index ? 'active': ''" v-for="(item,index) in hotList" :key='index' @click="hotChange(item,index)">{{ item.countries }}</span>
        </div>
        <div class="countriesList">
          <div class="img" v-for="(item,index) in countriesList" :key="index" @click="goCompanyRecommend(item)">
            <img :src="item.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { nativeJumpTo, nativeClose } from '@/utils/nativeFunction'
import { Swipe, SwipeItem, Toast } from 'vant'
import { pathList } from '@/utils/global'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Toast)
export default {
  data () {
    return {
      activeIndex:0,
      img: require('../../assets/global/recomd_01.png'),
      companyList: [
        {
          img: require('../../assets/global/full_list_01.png'),
          firmId: '143760'
        },
        {
          img: require('../../assets/global/full_list_02.png'),
          firmId: '143762'
        },
      ],
      valuableCompanyList: [
        {
          img: require('../../assets/global/worthy_list_01.png'),
          firmId: '143755'
        },
        {
          img: require('../../assets/global/worthy_list_02.png'),
          firmId: '143696'
        },
        {
          img: require('../../assets/global/worthy_list_03.png'),
          firmId: '143748'
        }
      ],
      hotList: [
        {
          countries: '香港',
          companyList: [
            {
              img: require('../../assets/global/hot_list_hk_07.png'),
              firmId: '143683'
            },
            {
              img: require('../../assets/global/hot_list_hk_08.png'),
              firmId: '143671'
            }
          ]
        },
        {
          countries: '美国',
          companyList: [
            {
              img: require('../../assets/global/hot_list_hk_01.png'),
              firmId: '143682'
            },
            {
              img: require('../../assets/global/hot_list_hk_02.png'),
              firmId: '143688'
            }
          ]
        },
        {
          countries: '英国',
          companyList: [
            {
              img: require('../../assets/global/hot_list_hk_03.png'),
              firmId: '143701'
            },
            {
              img: require('../../assets/global/hot_list_hk_04.png'),
              firmId: '143702'
            }
          ]
        },
        {
          countries: 'BVI',
          companyList: [
            {
              img: require('../../assets/global/hot_list_hk_05.png'),
              firmId: '143706'
            },
            {
              img: require('../../assets/global/hot_list_hk_06.png'),
              firmId: '143711'
            }
          ]
        }
      ],
      countriesList: [
        {
          img: require('../../assets/global/hot_list_hk_07.png'),
          firmId: '143683'
        },
        {
          img: require('../../assets/global/hot_list_hk_08.png'),
          firmId: '143671'
        }
      ]
    }
  },
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    },
    goQA(){
      this.$router.push({path: '/QA'})
    },
    hotChange(item,index){
      this.activeIndex = index
      this.countriesList = item.companyList
    },
    goCompany(){
      let data = {
        pagePath: pathList.companyDetailPath,
        pageArgs: JSON.stringify({firmId: '143880'})
      }
      nativeJumpTo(data)
    },
    goCompanyRecommend(item){
      let data = {
        pagePath: pathList.companyDetailPath,
        pageArgs: JSON.stringify({firmId: item.firmId})
      }
      console.log(data)
      nativeJumpTo(data)
    },
    close() {
      nativeClose()
    }
  }
}
</script>
<style lang="scss" scoped>
.overseasCompany {
  font-family: PingFangSC-Medium;
  padding-bottom: 50px;
  .headerImgIntro {
    width: 100%;
    height: 190px;
    // background-color: pink;
    position: relative;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
    .headerImgHelp {
      height: 28px;
      background: #FF7F4A;
      box-shadow: 0 4px 4px 0 rgba(255,127,74,0.26);
      border-radius: 16px 0 0 16px;
      position: absolute;
      bottom: 14px;
      right: 0;
      span {
        font-size: 12px;
        color: #FFFFFF;
        text-align: left;
        line-height: 28px;
        margin-left: 12px;
        margin-right: 10px;
      }
    }
  }
  .appRecommend {
    width: 328px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    .van-swipe{
      width: 328px;
      height: 100px;
      background: skyblue;
      margin-left: auto;
      margin-right: auto;
      // background: #FFFFFF;
      box-shadow: 0 8px 16px 0 rgba(255,127,74,0.12);
      border-radius: 4px;
      margin-top: 17PX;
      .van-swipe-item{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .companyRecommended{
    width: 328px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    .companyList{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      height: 214px;
      overflow-x: auto;
      margin-top: 17px;
      .img{
        // background: #138572;
        width: 280px;
        height: 100%;
        margin-right: 16px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.04);
        border-radius: 4px;
        flex: none;
        img{
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 4px;
        }
      }
    }
  }
  .valuableService{
    width: 328px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    .valuableCompanyList{
      width: 328px;
      display: flex;
      align-items: center;
      flex-flow: column;
      margin-top: 17px;
      .valuableCompany{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-bottom: 1px solid rgba(0,0,0,0.04);
        height: 111px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .hotCountries{
    width: 328px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 24px;
    .hotContent{
      width: 100%;
      margin-top: 18px;
      .btnList{
        margin-top: 16px;
        width: 100%;
        display: flex;
        padding-bottom: 16px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0,0,0,0.04);
        span{
          display: block;
          width: 76px;
          height: 32px;
          background: #F5F5F5;
          border-radius: 16px;
          text-align: center;
          line-height: 32px;
          font-size: 14px;
          color: rgba(0,0,0,0.60);
          cursor: pointer;
        }
        .active{
          background: #138572;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
      .countriesList{
        width: 100%;
        display: flex;
        align-items: center;
        flex-flow: column;
        .img{
          width: 100%;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          height: 225px;
          img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .title{
    display: flex;
    align-items: center;
    width: 100%;
    img{
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    span{
      font-size: 16px;
      color: #138572;
    }
  }
}
</style>
