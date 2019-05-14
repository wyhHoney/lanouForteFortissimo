<template>
    <!--店铺信息-->
    <div class="ShopHost">
      <div class="ShopHost_header clearfix">
        <img src="" alt="">
        <div>
          <h4>麦当劳</h4>
          <div>
            <p>商家配送/分钟送达/配送费5元</p>
            <p>公告:那么大</p>
            <img src="../../../assets/jiantou.png" alt="">
          </div>
        </div>
        <p><span><img src="" alt="">减30减5,满60减8(APP专享)</span> <span>2个活动 <img src="../../../assets/jiantou.png" alt=""></span></p>
        <span @click="GetBack"></span>
      </div>
      <div class="ShopSubfield">
        <div><span @click="ShangJia"><router-link :to="{path:'commodity'}" :style="{borderBottom:TborderBottom,color:Tcolor }">商家</router-link></span></div>
        <div><span @click="PingJia"><router-link :to="{path:'evaluate'}" :style="{borderBottom:PborderBottom,color:Pcolor }">评价</router-link></span></div>
      </div>
      <router-view></router-view>

      <div class="BottomShop clearfix">
        <div class="BottomShop_lift">
          <h4>400元</h4>
          <p>配送费5元</p>
        </div>
        <div class="BottomShop_right">
          <h4>还差20起送</h4>
        </div>
      </div>
      <div class="ShoppingTrolley"><span>6</span></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "wyh_ShopHost",
        data(){
          return {
            TborderBottom:'.12rem solid #3190e8',//商家和评价点击变化样式
            Tcolor:'#3190e8',//商家和评价点击变化样式
            PborderBottom:'',//评价
            Pcolor:'',//评价

          }
        },
        created(){
            Vue.axios.get("https://elm.cangdu.org/shopping/restaurant/1").then((res)=>{
              // console.log(res.data)
            });
            console.log(this.$store.state.shopId)
        },
        methods:{
          //返回上一层列表
          GetBack(){
            this.$router.push({path:'zp_toMyHome'})
          },
          //切换到商家
          ShangJia(){
            this.TborderBottom='.12rem solid #3190e8';
            this.Tcolor='#3190e8';
            this.PborderBottom='';
            this.Pcolor='';
          },
          //切换到评价
          PingJia(){
            this.PborderBottom='.12rem solid #3190e8';
            this.Pcolor='#3190e8';
            this.TborderBottom='';
            this.Tcolor='';
          }

        }
    }
</script>

<style scoped>
  .ShopHost{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  /*商家头部信息*/
  .ShopHost_header{
    background-color: rebeccapurple;
    padding: .4rem;
  }
  .ShopHost_header>img{
    display: inline-block;
    width: 2.9rem;
    height: 2.9rem;
    background-color: red;//店铺头像
    float: left;
  }
  .ShopHost_header>div{
    float: right;
    width: 80%;
    font-size: 0;
  }
  .ShopHost_header>div>h4{
    width: 100%;
    font-size: .8rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: .3rem;
    margin-top: 0;
  }
  .ShopHost_header>div>div>p{
    font-size: .5rem;
    color: #fff;
    margin-bottom: .3rem;
    width: 80%;
    float: left;
  }
  .ShopHost_header>div>div>p:nth-child(2){
    margin: 0;
  }
  .ShopHost_header>div>div>img{
    display: inline-block;
    float: right;
    width: .8rem;
    height: .8rem;
    position: relative;
    top: -.5rem;
  }
  .ShopHost_header>p{
    width: 100%;
    margin-top: .5rem;
    margin-bottom: 0;
    font-weight: 400;
    color: #fff;
    font-size: .5rem;
    float: left;
  }
  .ShopHost_header>p>span>img{
    width: .64rem;
    height: .64rem;
    display: inline-block;
  }
  .ShopHost_header>p>span:nth-child(2){
    float: right;
  }
  .ShopHost_header>span{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("../../../assets/fanhui.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    left: 0rem;
    top: .2rem;
  }

  /*商家分栏*/
  .ShopSubfield{
    width: 100%;
    background-color: white;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    font-size: 0;
  }
  .ShopSubfield>div{
    width: 50%;
    font-size: .8rem;
    display: inline-block;
    text-align: center;
  }
  .ShopSubfield>div>span>a{
    font-size: .65rem;
    color: #666;
    padding: .2rem .1rem;
    /*border-bottom: .12rem solid #3190e8;*/
    text-decoration: none;
  }
  .BottomShop{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #3D3D3F;
  }
  .BottomShop_lift{
    float: left;
    color: white;
    margin-left: 4rem;
  }
  .BottomShop_lift>h4{
    font-size: .8rem;
    font-weight: 700;
    margin-bottom: .1rem;
    margin-top: .15rem;
  }
  .BottomShop_lift>p{
    font-size: .4rem;
    margin-bottom: 0;
  }
  .BottomShop_right{
    float: right;
    padding: .55rem .4rem;
    background-color: #535356;
  }
  .BottomShop_right>h4{
    font-size: .7rem;
    color: #fff;
    font-weight: 700;
    margin: 0;
  }
.ShoppingTrolley{
  width: 2.7rem;
  height: 2.7rem;
  background-color: rebeccapurple;
  position: fixed;
  left: .7rem;
  bottom: .3rem;
  border-radius: 50%;
  border: 3px solid #444444;
}
  .ShoppingTrolley>span{
    float: right;
    display: inline-block;
    background-color: #FF461D;
    color: white;
    text-align: center;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .5rem;
    border-radius: 50%;
    position: relative;
    top: -.1rem;
    left: .2rem;
  }

</style>
