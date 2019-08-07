<template>
  <div class="downloadCommon">
		<div class="header">
			<div class="icon">
				<img src="@/assets/downLoadPages/icon.png" alt="">
			</div>
			<div class="title">
				<p>财税鱼</p>
				<p>一站式财税服务推荐平台</p>
			</div>
		</div>
    <div class="btn" id="btn" @click="download">立即下载</div>
    <div class="info">
      <p>Copyright 2019 | 杭州税牛科技有限公司</p>
      <p>浙ICP备19028668号</p>
    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
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
.downloadCommon {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background: url('../../assets/downLoadPages/background.png') 100% 100% no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  .header {
    margin-top: 48px;
    margin-left: 84px;
  }
  .header .icon {
    float: left;
    width: 48px;
    height: 48px;
  }
  .header .icon img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .header .title {
    float: left;
  }
  .header .title p {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: rgba(0,0,0,0.60);
    letter-spacing: 0;
    text-align: left;
    margin-left: 12px;
    line-height: 1.5;
  }
  .header .title p:first-child {
    font-size: 20px;
    color: rgba(0,0,0,0.87);
  }
  .btn {
    width: 276px;
    height: 42px;
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #DCA143;
    box-shadow: 0 2px 6px 0 rgba(220,161,67,0.26);
    border-radius: 2px;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 42px;
  }
  .info {
    width: 100%;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: rgba(0,0,0,0.40);
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    line-height: 1.5;
  }
}
</style>
