<template>
  <div class="Zg_head">
    <router-link :to="{path:'IDiscount'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>历史红包</span>
    </div>
    <div class="fuji">
      <ul  v-for="i in arr">
        <li class="toutu"></li>
        <li  style="color:#ccc;margin: 0 1rem;list-style: none;width: 100%;display: inline-block">
          <span style="font-size: .6rem">￥</span>
          <span style="font-size: 2rem">{{i.amount}}</span>
          <span style="font-size: 1rem;font-weight: 700;color: #ccc">.</span>
          <span style="font-size: 1rem;font-weight: 700;color: #ccc">{{i.status}}</span>
          <p style="font-size: .4rem;color: #999">{{i.description_map.sum_condition}}</p>
     <div class="abc">
          <p >{{i.name}}</p>
          <p style="font-size: .4rem;color: #999">{{i.begin_date}}</p>
          <p style="color: #999;font-size: .4rem">{{i.description_map.phone}}</p>
          <img src="../../zg_img/zuihou.png" alt="" class="tupian_1">
     </div>
          <p v-for="ko in arr">{{ko.description_map.restaurant_flavor_ids}}</p>
        </li>
      </ul>
      <ul style="list-style: none"v-for="aa in arr">
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EnvelopeHstory",
      data(){
          return{
            arr:[],

          }
      },
     mounted(){
          this.$http.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then(res=>{
            this.arr=res.data
            console.log(res.data)
          },res=>{
            console.log(666)
          })
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
    position: absolute;
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
  .toutu{
    width: 90%;
    background: url("../../zg_img/灰色.png")repeat-x;
    margin: 1rem .5rem;
  }
  .tupian_1{
    width: 5.5rem;
    position: relative;
    left: 3rem;
    bottom: 3rem;
  }
  .abc{
    width: 100%;
    position:absolute;
   left: 5.6rem;
    margin-top: -2.6rem;
  }
  .fuji{
    position: relative;
    width: 100%;
  }
</style>
