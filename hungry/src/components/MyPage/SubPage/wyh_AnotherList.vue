<template>
    <!--再来一单页面-->
    <div class="AnotherList">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <div class="recur">
        <img :src="'//elm.cangdu.org/img/'+ LogoImg" alt="">
        <h5>等待支付</h5>
        <div>再来一单</div>
      </div>
      <div class="Particular">
        <p><img :src="'//elm.cangdu.org/img/'+ LogoImg" alt=""><span>演示效果</span><img src="../../../assets/jiantou.png" alt=""></p>
        <p>{{groupname}} <span>*{{groupquantity}}</span><span>{{grouppirice}}</span></p>
        <p>{{delivername}} <span>{{deliverprice}}</span></p>
        <p>实付{{totalquantity}}</p>
      </div>
      <div class="distribution">
        <h4>配送信息</h4>
        <ul>
          <li>送达时间: <span>尽快送达</span></li>
          <li><span>送货地址:</span><span>阿斯达 <br>asdas</span></li>
          <li>配送方式: <span>蜂鸟专送</span></li>
        </ul>
      </div>
      <div class="distribution">
        <h4>订单信息</h4>
        <ul>
          <li>订单号: <span>{{addressid}}</span></li>
          <li>支付方式<span>在线支付</span></li>
          <li>下单时间 <span>{{formattedcreatedat}}</span></li>
        </ul>
      </div>
    </div>

</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'//引入头部组件
    export default {
        name: "wyh_AnotherList",
        data(){
          return {
            PageTitle:'订单详细',
            routejump:'theorderoage',
            LogoImg:'',//商家头像
            groupname:'',//商品名字
            grouppirice:0,//商品价格
            groupquantity:0,//商品数量
            delivername:'',//配送费
            deliverprice:0,//配送费钱
            totalquantity:0,//价格总量
            addressid:0,//订单编号
            formattedcreatedat:'',//下单时间

          }
        },
        components:{
          PublicHeader
        },
        created(){
          console.log(this.$route.query.GetDate);
          this.LogoImg=this.$route.query.GetDate.restaurant_image_url;
          this.groupname=this.$route.query.GetDate.basket.group[0][0].name;
          this.grouppirice=this.$route.query.GetDate.basket.group[0][0].price;
          this.groupquantity=this.$route.query.GetDate.basket.group[0][0].quantity;
          this.delivername=this.$route.query.GetDate.basket.deliver_fee.name;
          this.deliverprice=this.$route.query.GetDate.basket.deliver_fee.price;
          this.totalquantity=this.$route.query.GetDate.total_amount;
          this.addressid=this.$route.query.GetDate.address_id;
          this.formattedcreatedat=this.$route.query.GetDate.formatted_created_at;



        },
    }
</script>

<style scoped>
  .AnotherList{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
  .recur{
    width: 100%;
    background-color: white;
    text-align: center;
    padding: 1rem 0;
  }
  .recur>img{
    width: 3rem;
    height: 3rem;
    display: inline-block;
    border-radius: 50%;
  }
  .recur>h5{
    font-size: .8rem;
    font-weight: 700;
  }
  .recur>div{
    width: 3rem;
    margin: 0 auto;
    padding: .3rem .2rem;
    border-radius: 3px;
    border: 1px solid #3190E8;
    color: #3190E8;
    font-size: .5rem;
    font-weight: 600;
  }
  .Particular{
    margin-top: .5rem;
    background-color: white;

  }
  .Particular>p{
    margin: 0;
    line-height: 1rem;
    padding: .3rem .4rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: .6rem;
    font-weight: 600;
    color: #6C6D6F;
  }
  .Particular>p>img{
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
  .Particular>p:nth-child(1)>span{
    margin-left: .3rem;
    font-size: .7rem;
    font-weight: 700;
    color: #333333;
  }
  .Particular>p:nth-child(2)>span{
    float: right;
  }
  .Particular>p:nth-child(2)>span:nth-child(2){
   margin-right: 1.5rem;
  }
  .Particular>p>img:last-of-type{
    float: right;
  }
  .Particular>p:nth-child(3)>span{
   float: right;
  }
  .Particular>p:nth-child(4){
    text-align: right;
    color:#FC7026;
    font-size: .65rem;
    font-weight: 600;
  }
  .distribution{
    width: 100%;
    background-color: white;
    margin-top: .5rem;
  }
  .distribution>h4{
    font-size: .7rem;
    color: #333;
    margin: 0;
    padding: .5rem .4rem;
    border-bottom: 1px solid #f5f5f5;
    font-weight: 600;
  }
  .distribution>ul{
    padding: .5rem .4rem;
    margin: 0;
  }
  .distribution>ul>li{
    line-height: 1.6rem;
    font-size: .6rem;
    font-weight: 600;
    color: #333;
  }
  .distribution>ul>li:nth-child(2)>span{
    display: inline-block;
    margin: 0;
  }
  .distribution>ul>li>span{
    margin-left: .5rem;
  }
  .distribution>ul>li:nth-child(2)>span:nth-child(1){
    float: left;
    margin-right: .7rem;
  }

</style>
