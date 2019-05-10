<template>
  <div class="Zg_head">
    <!--返回上一外卖的路由-->
    <router-link :to="{path:'./basice'}"><img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>我的优惠</span>
    </div>
   <p class="Explain">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
    <div class="zg_introduce">
      <h5 class="zg_h4">Q1:特权介绍</h5>
    <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。<br>
    减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
      更多特权，敬请期待！</p>
    </div>
    <div class="zg_txt">
    <h5>Q2:资费标准</h5>
    <p>饿了么会员卡:20元</p>
    <h5>Q3:使用说明</h5>
    <div>当用户满足以下任一条件，会员服务自动失效：
    <p class="zg_p">自绑定之日起超过31天；
      在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
    </div>
    <h5>Q4: 购卡说明</h5>
    <p>在线购买：饿了么App>我的>饿了么会员卡</p>
    <h5>Q5: 温馨提示</h5>
    <p>用户在当前会员服务失效前，无法购买新卡。
      请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Explain"
    }
</script>

<style scoped>
  html,body{
    font-size: 10px;
    background-color: #5e5e5e;
  }
  .Zg_head{
    background: #3190e8;
    width: 100%;
    height: 1.8rem;
  }
  .zg_fanhui4{
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
  .search{
    text-align: center;
    font-size: .8rem;
    padding-top:.4rem ;
    font-weight: 800;
    color: white;
  }
  .Explain{
    margin: 1.5rem 3rem;
    font-size: .5rem;
  }
  .zg_h4{
    color: black;
    font-weight: 800;
  }
  .zg_introduce{
    margin: 0 1.3rem;
    position: absolute;
    top: 8.8rem;
    font-size: .5rem;
    font-weight: 400;
  }
  .zg_txt{
    position: absolute;
    bottom: 0;
    left: 1rem;
  }
  .zg_txt,h5{
    color: black;
    font-weight: 800;
  }
  .zg_txt,p{
    color: gray;
    font-size: .6rem;
  }
  .zg_p{
    margin: 0 .9rem;
  }
</style>
