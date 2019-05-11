<template>
    <div class="TheOrderPage">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>



      <!--底部按钮按钮组-->
      <div class="BottomPart">
        <div @click="TakeOutFood">
          <div class="bottom_logo bottom_logo_span1" ></div>
          <p>外卖</p>
        </div>
        <div @click="SearchButton">
          <div class="bottom_logo bottom_logo_span2"></div>
          <p>搜索</p>
        </div>
        <div @click="OrderButton">
          <div class="bottom_logo bottom_logo_span3"></div>
          <p>订单</p>
        </div>
        <div @click="MyInformation">
          <div class="bottom_logo bottom_logo_span4"></div>
          <p>我的</p>
        </div>
      </div>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'//引入头部组件
    export default {
        name: "wyh_TheOrderPage",
        data(){
        return {
            PageTitle:'订单列表',
            routejump:'myhomepage',
          }
         },
        components:{
          PublicHeader,
        },
        methods:{
          //底部按钮按钮的点击事件
          TakeOutFood(){
            this.$router.push({path:'zp_toMyHome'});
          },
          //底部搜索按钮的点击事件
          SearchButton(){
            this.$router.push({path:'seek'})
          },
          //底部订单按钮的点击事件
          OrderButton(){
            this.$router.push({path:'theorderoage'});
          },
          //底部我的按钮的点击事件
          MyInformation(){
            this.$router.push({path:'myhomepage'})
          },
        }
    }
</script>

<style scoped>
.TheOrderPage{
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
}


/*底部导航样式*/
.BottomPart{
  width: 100%;
  background-color: white;
  font-size: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}
.BottomPart>div{
  box-sizing: border-box;
  padding-top: .3rem;
  width: 25%;
  display: inline-block;
  text-align: center;
  font-size: .45rem;
  color: #666666;
  margin-bottom: 0;
}
.BottomPart>div>p{
  margin-bottom: .2rem;
}
.bottom_logo{
  width: .8rem;
  height: .8rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: .3rem;

}
.bottom_logo_span1{
  background: url("../../../assets/bottom1.png") no-repeat center center;
  background-size: 110% 110%;
}
.bottom_logo_span2{
  background: url("../../../assets/bottom2.png") no-repeat center center;
  background-size: 110% 110%;
}
.bottom_logo_span3{
  background: url("../../../assets/bottom33.png") no-repeat center center;
  background-size: 110% 80%;
}
.bottom_logo_span4{
  background: url("../../../assets/bottom4.png") no-repeat center center;
  background-size: 100% 100%;
}
</style>
