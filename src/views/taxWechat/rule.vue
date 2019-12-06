<template>
  <div class="rule">
    <p class="title">什么情况下能退单</p>
    <p class="warning">若客户有以下问题，审核通过无忧补偿。</p>
    <p class="warning">1、反馈客户手机号码空号、停机：全额补偿</p>
    <p class="content">购单后24小时内反馈客户手机号码为空号、持续停机的，平台审核回访客户，证实客户手机确实处于空号、停机状态，给予全额补偿。</p>
    <p class="warning">2、反馈客户需求区域与服务区域不符：全额补偿</p>
    <p class="content">抢单后24小时内反馈客户实际需求地址和服务区域不符合，且能提供聊天记录证明属实的，将全额补偿。</p>
    <p class="warning">3、反馈同行测试单：全额补偿</p>
    <p class="content">抢单24小时内，遇到同行试单的情况，提供聊天截图或能证明对方是同行的证据给客服反馈核实受理，属实将全额补偿。</p>
    <p class="warning">4、反馈不接电话：全额补偿</p>
    <p class="content">抢单后，24小时内拨打必须3次以上，且每次拨打时间间隔不低于2小时，客户依然无人接听的，提供电话拨打记录，可反馈核实（核实结果以核实人员拨打结果为准，因拨打号为外地号码，所以如果需求方接听的情况下，核实结果视为不属实）属实的将全额补偿。</p>
    <p class="warning">5、反馈重复客户：全额补偿</p>
    <p class="content">客户两个星期内，同一需求，重复被同一个商户抢到的，提供两个订单详情，属实将给予全额补偿。</p>
    <p class="warning" style="text-indent: 1.5em;">备注：请严格按照补偿服务规则申请，所有售后受理时间为72小时，符合补偿的，工作日当天补偿，周末节假日顺延，不符合补偿条件概不受理，（另全额补偿根据订单实际金额补偿赠币，请知悉）本规则最终解释权归财税鱼所有。</p>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.rule {
  padding: 16px;
  font-family: PingFangSC-Regular;
  p {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: rgba(0,0,0,0.50);
    text-align: left;
    line-height: 24px;
  }
  .title {
    font-size: 16px;
    color: rgba(0,0,0,0.87);
  }
  .warning {
    color: rgba(0,0,0,0.87);
    font-size: 14px;
  }
  .content {
    text-indent: 1.5em;
    margin-bottom: 8px;
  }
}
</style>
