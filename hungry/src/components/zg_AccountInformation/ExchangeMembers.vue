<template>
  <div class="Zg_head">
    <router-link :to="{path:'./basice'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>兑换会员</span>
    </div>
    <div class="zg_text">
      <!--登录输入框的帐号-->
      <span >成功兑换后将关联到当前帐号:{{$store.state.zg_name}}</span>
    </div>
    <div style="position: absolute;top: 4rem;">
      <input type="text"placeholder="请输入10位卡号"style="width: 100%;height: 2rem;border-top:grey;outline:none;padding: 0 .7rem;font-size: .62rem">
      <input type="text"placeholder="请输入6位卡密"style="width: 100%;height: 2rem;border-top:white;outline:none;padding: 0 .8rem;font-size: .62rem">
    </div>
      <div style="text-align: center;font-size: .8rem;color: white;">
        <div class=""style="width: 85%;height: 2rem;position: absolute;top: 9rem;left: 1.5rem;background-color:  rgba(169,169,169,0.6);border-radius: 3%">
          <span style="position: relative;top: 0.4rem">兑换</span>
        </div>
      </div>
    <div class="zg_annotation" style="text-align: center;position: absolute;top: 13rem;color: #aaa">
      <p style="margin-bottom:1rem ">----温馨提示----</p>
      <div style="font-size: 0.5rem;color: #aaa">
      <p>新兑换的会员服务,权益已[会员说明]为准.</p>
      <p>月卡:30次减免配送费</p>
      <p>季卡:90次减免费送费</p>
      <p>年卡:360次减免配送费</p>
      <p>*仅限蜂鸟专送订单,每日最多减免3单,每单最高减免4元(一个月按31天计算)</p>
      </div>
    </div>
  </div>
  </template>
<script>
    export default {
      mounted(){
        let zg_username ='https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags'+this.zg_name_1
        this.$http.get(zg_username).then(response=>{
          this.searchArr_1=response.data
          console.log(response.data );
        },response=>{
          console.log('error')
        })
      },
        name: "ExchangeMembers",
      data(){
        return{
          searchArr_1:{},
          zg_name_1:'',

        }

      },
      methods:{

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none
  }
  html body{
    font-size: 10px;
    background-color: grey;
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
    background-color: rgba(169,169,169,0.3);
    padding: .7rem .8rem;
    width: 100%;
    position: absolute;
    top: 1.8rem;
    font-size: .6rem;
  }
</style>
