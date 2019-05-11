<template>
 <div class="Zg_head">
  <router-link :to="{path:''}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
  <div class="search">
    <span></span>
  </div>
   <div>
     <!--红包页面路由的跳转-->
     <router-link style="position: absolute;top: 2.8rem;left: 2.8rem;" :to="{path:'IDiscount'}">红包</router-link>
     <!--商家代金卷路由跳转-->
     <router-link :to="{path:'/'}" style="position: absolute;right: 2rem;top: 2.8rem;" class="zg_voucher">商家代金卷</router-link>
   </div>

   <div v-for="i in RedPacket"></div>
   <div style="position: absolute;top: 5rem;left: 1.5rem;font-size: .2rem">有 <span style="color: red">{{RedPacket.length}}</span> 个红包即将过期
  <router-link :to="{path:'TheMoneyThat'}"style="position: fixed;right: 2rem;top: 5rem;color: blue">红包说明</router-link>
   </div>
    <div >
      <div class="zg_numb">
      <ul v-for="i in RedPacket">
        <li class="zg_hongbao"></li>
        <li style="color: red;font-size: .7rem;">￥
          <span style="font-size: 1.4rem">{{i.amount}}</span>
          <span style="font-size: .8rem;font-weight: 600">.{{i.status}}</span>
        </li>
        <li style="color: grey">{{i.description_map.sum_condition}}
        </li>
      </ul>
      </div>
      <div class="zg_txt">
        <ul v-for="i in RedPacket" style="margin: 1.7rem 0 " class="beijing">
          <li style="font-size: .7rem;font-weight: 400;list-style: none;">{{i.name}}</li>
          <li style="font-size: 0.5rem;color: grey;list-style: none;" class="zg_data">{{i.end_date}}</li>
          <li style="font-size: 0.5rem;color: grey;list-style: none;">限收货手机号为:{{i.phone}}</li>
        </ul>
      </div>
      <div v-for="i in RedPacket">
        <ul>
          <li>{{i.description_map.validity_delta}}</li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "IDiscount",
      mounted(){
          let a ='https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0'
          this.$http.get(a).then(res=>{
           this.RedPacket=res.data
            console.log(res.data)
          },res=>{
            console.log('error')
            })
      },
      data(){
          return{
            RedPacket:[],
          }
      },
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
  .zg_hongbao{
    background: #fff url("../../zg_img/hongbao.png") repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
  }
  .zg_numb{
    list-style: none;
    display: block;
    position: absolute;
    top: 7rem;
  }
  .zg_txt{
    background: #fff url("../../zg_img/hongbao.png") repeat-x;
    background-size: .5rem .2rem;
    position: absolute;
    top: 7rem;
    left: 3.7rem;
    padding: 0 1rem;
  }
</style>
