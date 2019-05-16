<template>
  <!--我的优惠-->
  <div class="My_Discount">
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <div v-if="ShowRed">
    <!--二级路由选择器-->
    <div class="discountser clearfix">
      <router-link :to="{path:'redpacket'}"><div class="Red_left" @click="redpacket"><span :style="{color:textcole,borderBottom:textborderBottom}">红包</span></div></router-link>
      <router-link :to="{path:'voucher'}"><div class="Red_right" @click="Voucher"><span :style="{color:textcole2,borderBottom:textborderBottom2}">商家代金券</span></div></router-link>
    </div>
    <router-view></router-view>
    </div>
    <!--未登陆显示-->
    <div class="NotLogIn" v-if="ShowHint">
      <h3>您还未登陆</h3>
      <p>请返回后登陆~</p>
      <img src="../../../wyhImg/denglu.png" alt="">
    </div>
  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
  import Vue from 'vue'
    export default {
        name: "wyh_Discount",
        data(){
          return {
            PageTitle:'我的优惠',
            routejump:'myhomepage',
            textcole:'#3190e8',
            textborderBottom:'.1rem solid #3190e8',
            textcole2:'',
            textborderBottom2:'',
            ShowRed:false,//
            ShowHint:true,//显示提示

          }
        },
      methods:{
        redpacket(){
          this.textcole2='#333';
          this.textborderBottom2='.1rem solid #fff';
          this.textcole='#3190e8';
          this.textborderBottom='.1rem solid #3190e8'
        },
        Voucher(){
          this.textcole='#333';
          this.textborderBottom='.1rem solid #fff';
          this.textcole2='#3190e8';
          this.textborderBottom2='.1rem solid #3190e8'
        }

      },
      components:{
        PublicHeader
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            if (res.data.message==='通过session获取用户信息失败') {
              this.ShowHint=true;
              this.ShowRed=false;
            }else {
              this.ShowRed=true;
              this.ShowHint=false;
            }
          })
      }
    }
</script>

<style scoped>
  .My_Discount{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #F5F5F5;
  }
  .discountser{
    align-items: center;
    height: 2rem;
    background-color: #fff;
    font-size: 0;
  }
  .Red_left{
    width: 50%;
    line-height: 2rem;
    float: left;
    text-align: center;
    font-size: .65rem;
    color: #333;
  }
  .discountser>a>div>span{
    padding-bottom: .2rem;
  }
  .Red_right{
    width: 50%;
    line-height: 2rem;
    float: right;
    text-align: center;
    font-size: .65rem;
    color: #333;
  }
  .NotLogIn{
    width: 100%;
    text-align: center;
    position: relative;
    top: 45%;
    transform: translate(0,-90%);
  }
  .NotLogIn>h3{
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
    margin-top: 0;
    font-weight: 600;
  }
  .NotLogIn>p{
    font-size: 14px;
    color: #666;
    margin-bottom: 19px;
  }
  .NotLogIn>img{
    width: 176px;
    height: 60px;
  }

</style>
