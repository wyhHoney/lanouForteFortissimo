<template>
    <!--服务中心-->
    <div class="ServiceCenter">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <!--在线客服-->
      <div class="CustomerService">
        <div class="CustomerService_lift" @click="Service_lift"><span class="CustomerService_span1">1</span><p>在线客服</p></div>
        <div class="CustomerService_right" @click="Service_right"><span class="CustomerService_span2">1</span><p>在线客服</p></div>
        <p class="empty"></p>
      </div>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_serviceCenter",
        data(){
          return {
            PageTitle:'服务中心',
            routejump:'myhomepage',
          }
        },
        components:{
          PublicHeader
        },
        methods:{
          //左边在线客服点击事件
          Service_lift(){
              console.log('点击了左边的在线客服');
          },
          //右边在线客服点击事件
          Service_right(){
            console.log('点击了右边的在线客服');
          },
        }

    }
</script>

<style scoped>
  .ServiceCenter{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  .CustomerService{
    width: 100%;
    font-size: 0;
  }
  .empty{
    clear: both;
  }
  .CustomerService_lift{
    float: left;
  }
  .CustomerService_right{
    float: right;
  }
  .CustomerService>div{
    width: 49.8%;
    display: inline-block;
    background-color: #FFFFFF;
    text-align: center;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
  .CustomerService>div>span{
    width: 1rem;
    height: 1rem;
    display: inline-block;
  }
  .CustomerService_span1{
    background: url("../../../assets/kefu1.png") no-repeat center center;
    background-size: 100% 100%;
  }
  .CustomerService_span2{
    background: url("../../../assets/dianhua.png") no-repeat center center;
    background-size: 90% 90%;
  }
  .CustomerService>div>p{
    margin-bottom: 0;
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }

</style>
