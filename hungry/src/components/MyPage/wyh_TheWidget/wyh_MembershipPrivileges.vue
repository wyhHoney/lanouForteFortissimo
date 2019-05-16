<template>
    <div class="MembershipPrivileges">
      <!--会员说明-->
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <div class="MembershipPrivileges_nr">
        <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
          购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
          注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
        <div class="wenti">
          <h4>Q1: 特权介绍</h4>
          <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
          <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
          <p>更多特权，敬请期待！</p>
          <h4>Q2: 资费介绍</h4>
          <p>饿了么会员卡：20元</p>
          <h4>Q3: 使用说明</h4>
          <p>当用户满足以下任一条件，会员服务自动失效：</p>
          <p>自绑定之日起超过31天；</p>
          <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
          <h4>Q4: 购卡说明</h4>
          <p>在线购买：饿了么App>我的>饿了么会员卡</p>
          <h4>Q5: 温馨提示</h4>
          <p>用户在当前会员服务失效前，无法购买新卡。</p>
          <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>

        </div>


      </div>
    </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_MembershipPrivileges",
      data(){
        return {
          PageTitle:'我的优惠',
          routejump:'basice',
        }
      },
      components:{
        PublicHeader
      }
    }
</script>

<style scoped>
  .MembershipPrivileges{
    width: 100%;
    background-color: white;
  }
  .MembershipPrivileges_nr{
    color: #999;
    font-size: .6rem;
    padding: 0.5rem .7rem 0;
  }
  .MembershipPrivileges_nr>p:nth-child(1){
    width: 12.4rem;
    color: #333;
    margin: 0 auto;
  }
  .wenti{
    font-size: .6rem;
    color: #666;
    padding: 0 .5rem .5rem;
  }
  .wenti>h4{
    color: #333;
    line-height: 1.5rem;
    margin: 0;
    font-weight: 600;
    font-size: 1.17em;
  }
  .wenti>p{
    font-size: .6rem;
    color: #666;
    /*line-height: 1rem;*/
    margin: 0;
  }
</style>
