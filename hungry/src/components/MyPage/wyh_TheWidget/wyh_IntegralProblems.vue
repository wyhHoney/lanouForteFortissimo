<template>
  <div class="IntegralDescription">
    <!--余额说明-->
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <!--内容-->
    <div class="wenti">
      <h4>Q1: 怎么获得积分？</h4>
      <p>在线支付的订单将获得订单积分奖励：</p>
      <p>积分将在用户完成评价后获得。</p>
      <p>可获得积分=订单金额×10（即1元=10点积分）。</p>
      <p>订单金额指实际付款金额，不包含活动优惠金额。</p>
      <p>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
      <h4>Q2: 积分用来做什么？</h4>
      <p>可以在积分商城兑换各种礼品。</p>
      <h4>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h4>
      <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
      <h4>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h4>
      <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
    </div>
  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_IntegralProblems",
      data(){
        return {
          PageTitle:'积分问题',
          routejump:'myhomepage',
        }
      },
      components:{
        PublicHeader
      }
    }
</script>

<style scoped>
  .IntegralDescription{
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
  .wenti{
    font-size: .6rem;
    color: #666;
    padding: 0 .5rem .5rem;
  }
  .wenti>h4{
    color: #333;
    line-height: 2rem;
    margin: 0;
    font-weight: 400;
    font-size: 1.17em;
  }
  .wenti>p{
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
    margin: 0;
  }
</style>
