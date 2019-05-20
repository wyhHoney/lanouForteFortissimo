<template>
 <div class="Zg_head">
  <router-link :to="{path:'MyHomePage'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
  <div class="search">
    <span>我的优惠</span>
  </div>
   <div>
     <!--红包页面路由的跳转-->
     <router-link style="position: absolute;top: 2.8rem;left: 2.8rem;" :to="{path:'IDiscount'}">红包</router-link>
     <!--商家代金卷路由跳转-->
     <router-link :to="{path:'/MerchantVoucher'}" style="position: absolute;right: 2rem;top: 2.8rem;" class="zg_voucher">商家代金卷</router-link>
   </div>
   <div style="list-style: none">
   <div v-for="i in RedPacket"></div>
   <div style="position: absolute;top: 5rem;left: 1.5rem;font-size: .2rem">有 <span style="color: red">{{RedPacket.length}}</span> 个红包即将过期
     <!--跳转到红包说明的地方-->
  <router-link :to="{path:'BalanceProblem'}"style="position: fixed;right: 2rem;top: 5rem;color: blue">红包说明</router-link>
   </div>
    <div>

      <div class="zg_numb">
      <ul v-for="i in RedPacket" class="none">
        <li class="zg_hongbao"></li>
        <li style="color: red;font-size: .7rem;list-style: none;border-right: 1px dashed grey;">￥
          <span style="font-size: 1.4rem;">{{i.amount}}</span>
          <span style="font-size: .8rem;font-weight: 600">.{{i.status}}</span>
        </li>
        <li style="color: grey">{{i.description_map.sum_condition}}
        </li>
      </ul>
      </div>
      <div class="zg_txt">
        <ul v-for="i in RedPacket" style="margin: 1.5rem 0 ">
          <li style="font-size: .7rem;font-weight: 400;list-style: none;">{{i.name}}</li>
          <li style="font-size: 0.5rem;color: grey;list-style: none;" class="zg_data">{{i.end_date}}</li>
          <li style="font-size: 0.5rem;color: grey;list-style: none;">限收货手机号为:{{i.phone}}</li>
        </ul>
      </div>
      <div>
      <div class="beijing"></div>
      <div class="beijing1"></div>
      <div class="beijing4"></div>
      </div>
      <div class="daysRest">
      <div v-for="i in RedPacket">
        <ul style="list-style: none;">
          <li style="color: red;font-size: .9rem;margin-top: 3rem;font-weight: 200;">{{i.description_map.validity_delta}}</li>
        </ul>
      </div>
    </div>
      <!--下边这段话像一个烟火,我看到一眼又回去找,我找不到了! -->
   <p class="zg_textBottom" v-for="i in RedPacket">限品类:快餐便当、特色菜系、小吃夜宵、甜品饮食、异国料理</p>
    </div>
    <router-link :to="{path:'EnvelopeHistory'}"class="zg_bottom">查看历史红包</router-link>
   </div>
   <div class="zg_recommend">
     <span class="zg_recommend_1"@click="zg_conversion">兑换红包</span>
     <span class="zg_recommend_2" @click="ReferralBonuses">推荐有奖</span>
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
      methods:{
        zg_conversion(){
          this.$router.push({path:'ForARedEnvelope'})
        },
        ReferralBonuses(){
          this.$router.push({path:'ReferralBonuses'})
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
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    width: 100%;

  }
  .zg_numb{
    list-style: none;
    position: absolute;
    top: 7rem;
    left: 1.5rem;
  }
  .zg_txt{
    background-size: .5rem .2rem;
    position: absolute;
    top: 7rem;
    left: 4.7rem;
    padding: 0 2rem;

  }
  .daysRest{
    position: absolute;
    top:5.7rem;
    right: .5rem;
  }
  .beijing{
    background: #fff url("../../zg_img/hongbao.png") repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    width: 100%;
    height: 0.3rem;
    position: absolute;
    top: 11.3rem;
  }
  .beijing1{
    background: #fff url("../../zg_img/hongbao.png") repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    width: 100%;
    height: 0.3rem;
    position: absolute;
    top: 15.5rem;
  }
  .beijing4{
    background: #fff url("../../zg_img/hongbao.png") repeat-x;
    background-size: .5rem .2rem;
    margin-bottom: .5rem;
    border-radius: .25rem;
    width: 100%;
    height: 0.3rem;
    position: absolute;
    top: 7rem;
  }
  .zg_textBottom{
    position: absolute;
    top: 21rem;
    margin: 0 1.6rem;
    color: grey;
    font-size: .6rem;
  }
  .none{
    list-style: none;
    height: 4rem;
  }
  .zg_bottom{
    position: absolute;
    top: 24rem;
    left: 6rem;
    color: grey;
  }
  .zg_recommend{
    position: absolute;
    bottom: .5rem;
    padding: 0 2.5rem;
    color: #555;
    font-size: .8rem;
  }
  .zg_recommend_1{
    margin: 0 1.5rem;
  }
</style>
