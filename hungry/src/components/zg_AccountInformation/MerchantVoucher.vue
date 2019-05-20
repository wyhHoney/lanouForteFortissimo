<template>
<div>
  <div class="Zg_head">
    <div class="search">
      <span>我的优惠</span>
    </div>
  </div>
  <div style="color: black">
    <!--红包页面路由的跳转-->
    <router-link style="position: absolute;top: 2.8rem;left: 2.8rem;" :to="{path:'IDiscount'}">红包</router-link>
    <!--商家代金卷路由跳转-->
    <router-link :to="{path:'/MerchantVoucher'}" style="position: absolute;right: 2rem;top: 2.8rem;" class="zg_voucher">商家代金卷</router-link>
  </div>
  <router-link :to="{path:''}" class="zg_voucher_shuoming">商家代金卷说明</router-link>
  <img src="../../zg_img/小孩.png" alt="" class="img">
  <div class="txt">
  <p class="p1">无法使用代金卷</p>
  <p class="p2">非客户端或客户端版本过低</p>
  </div>
 <div class="btn" @click="skip_download">下载或升级客户端</div>
</div>
</template>

<script>
    export default {
        name: "MerchantVoucher",
      data(){
          return{}
      },
      methods:{
        skip_download(){
          this.$router.push({path:'DownloadAPP'})

        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none
  }
  body{
    font-size: 10px;
    background: red!important;
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
  .img{
    width: 3rem;
    height: 2.8rem;
    position: absolute;
    top: 11rem;
    left: 6.4rem;
  }
  .txt{
    position: relative;
    top: 12.2rem;
    left: 5rem;
  }
  .p1{
    position: absolute;
    left: .7rem;
    font-size: .7rem;
  }
  .p2{
    position: absolute;
    top:1.4rem ;
    color: grey;
    font-size: .6rem;
  }
  .zg_voucher_shuoming{
    position: absolute;
    right: .7rem;
    top: 5rem;
  }
  .btn{
    width: 6rem;
    background-color: #56d176;
    height: 1.5rem;
    color: white;
    position: absolute;
    top: 17rem;
    left: 5rem;
    padding: .3rem 0;
  }
</style>
