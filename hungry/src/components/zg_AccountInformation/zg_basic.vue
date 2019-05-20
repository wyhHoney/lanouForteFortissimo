<template>
    <div>
      <div class="Zg_head">
        <router-link :to="{path:'MyHomePage'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
        <div class="search">
        <span>会员中心</span>
        </div>
      </div>
      <div class="zg_text">
        <p >为账户 <span style="color: green;font-size: .8rem">{{$store.state.zg_name}}</span> 购买会员</p>
      </div>
      <div  class="zg_span_father">
        <router-link :to="{path:'/membershipprivileges'}">
          <span class="zg_span_1">会员特权</span>
          <span class="zg_span_2">会员说明></span>
        </router-link>
      </div>
      <div class="zg_underline"></div>
      <div class="economize">


        <img src="../../assets/sheng.png" height="132" width="135"class="economize_img"/>
      </div>
      <p class="zg_explain_0">减免配送费</p>
      <p class="zg_explain_1">每月减免30单，每日可减免3单，每单最高减4元
      蜂鸟专送专享</p>
      <div class="zg_underline_1"></div>
      <img src="../../assets/jian.png" height="118" width="121"class="economize_img_1"/>
      <p class="zg_explain_2">减免配送费</p>
      <p class="zg_explain_3">每月减免30单，每日可减免3单，每单最高减4元
        蜂鸟专送专享</p>
      <span class="zg_member">开通会员</span>
      <p class="zg_underline_2"></p>
      <div class="zg_purchase">
          <span class="zg_Jan">一个月</span>
          <span class="zg_money">￥20</span>
        <button class=" TheBuyButton"@click="zg_payment">
          <span class="btn_span">购买</span>
        </button>
      </div>
      <router-link :to="{path:'/exchangeMembers'}">
        <span class="zg_ExchangeMembers">兑换会员</span>
        <span class="zg_UseTheCardNumber">使用卡号卡密&nbsp;&nbsp;></span>
      </router-link>
      <router-link :to="{path:'/PurchaseHistory'}">
        <span class="zg_purchaseHistory">购买记录</span>
        <span class="zg_invoice">开发票&nbsp;&nbsp;></span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "zg_basic",
      data(){
          return{}
      },
      methods:{
        zg_payment(){
          this.$router.push({path:'./Payment'})
        }
      }
      // methods:{
      //   Access:function () {
      //     this.$store.dispatch('setAName')
      //   }
      // },
      // computed:{
      //   A_1:function () {
      //     return this.$store.getters.getA()
      //   }
      // }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none
  }
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
  .zg_text{
    color: #5e5e5e;
    background-color: rgba(169,169,169,0.1);
    padding: .4rem .8rem;
    width: 100%;
  }
  .zg_span_1{
    color: #5e5e5e;
    font-size: .8rem;
    position: absolute;
    left: .7rem;
    padding: .5rem 0;
  }
  .zg_span_2{
    color: #5e5e5e;
    position: absolute;
    right: 3rem;
    padding: .5rem 0;
  }
  .zg_span_father{
    margin-top: .5rem;

  }
  .zg_underline{
    border: 1px solid rgba(169,169,169,0.1);
    height: 0.11rem;
    position: absolute;
    width: 100%;
    top: 6rem;
  }
  .economize{
    position: absolute;
    top: 7rem;
    left: .8rem;
    font-size: .6rem;
  }
  .economize_img{
    width: 1.8rem;
    height: 1.8rem;
  }
  .zg_explain_{
    position: absolute;

  }
  .zg_explain_0{
    font-size: .8rem;
    color: black;
    position: absolute;
    left: 2.9rem;
    top: 7rem;
    font-weight: 800;
  }
  .zg_explain_1{
    font-size: .6rem;
    color: gray;
    position: absolute;
    left: 2.9rem;
    top: 8rem;
  }
  .zg_underline_1{
    border: 1px solid rgba(169,169,169,0.1);
    height: 0.11rem;
    position: absolute;
    width: 100%;
    top: 10rem;
  }
  .economize_img_1{
    width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    top: 11rem;
    left: .8rem;
  }
  .zg_explain_2{
    font-size: .8rem;
    color: black;
    position: absolute;
    left: 2.9rem;
    top: 11rem;
    font-weight: 800;
  }
  .zg_explain_3{
    font-size: .6rem;
    color: gray;
    position: absolute;
    left: 2.9rem;
    top: 12rem;
  }
  .zg_member{
    position: absolute;
    top: 15rem;
    left: 1.5rem;
    height: 1rem;
    font-size: .85rem;
  }
  .zg_underline_2{
    border: 1px solid rgba(169,169,169,0.1);
    height: 0.11rem;
    position: absolute;
    width: 100%;
    top: 16.5rem;
    margin: 0 1rem;
    background-color: white;
  }
  .zg_purchase{
    position: absolute;
    top: 17.5rem;
    left: 1.5rem;
  }
  .zg_Jan{
    font-size: 0.8rem;
  }
  .zg_money{
    color: orange;
    font-size: .8rem;
  }
  .TheBuyButton{
    padding:  .3rem .4rem;
    color: #f60;
    position: fixed;
    right: 2rem;
    top: 17.5rem;
    background-color: white;
    border: 1px solid #f60;
  }
  .btn_span{
    font-size: .7rem;
  }
  .zg_ExchangeMembers{
    position: absolute;
    top: 21rem;
    left: 1.2rem;
    font-size: .8rem;
    color: black;
  }
  .zg_UseTheCardNumber{
    position: absolute;
    top: 21rem;
    right: 1.2rem;
    font-size: .7rem;
    color: grey;
  }
  .zg_purchaseHistory{
    position: absolute;
    top: 24rem;
    left: 1.2rem;
    font-size: .8rem;
    color: black;
  }
  .zg_invoice{
    position: absolute;
    top: 24rem;
    right: 1.2rem;
    font-size: .7rem;
    color: grey;
  }
</style>
