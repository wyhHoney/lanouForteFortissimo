<template>
  <div class="Zg_head">
    <router-link :to="{path:'./basice'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>购买记录</span>
    </div>
    <div style="position: absolute;top: 12rem;left: 6.3rem">
      <img src="../../zg_img/xiaoren.png" height="107" width="89"/></div>
  </div>
</template>

<script>
    export default {  
        name: "PurchaseHistory",
        mounted(){
          let  zg_connector ='https://elm.cangdu.org/bos/v2/users/1/orders?limit=20&offset=10&restaurant_id=this.zg_user_id'
          this.$http.get(zg_connector).then(res=>{
            this.OrderForm=res.data
            console.log(res.data)
          },res=>{
            console.log('error')
          })
        },
      data(){
          return{
            OrderForm:[],
            zg_user_id:'3222',
            methods:{
            }
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
</style>
