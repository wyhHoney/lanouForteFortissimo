<template>
  <div class="">
    <!--动画-->
    <Loading v-if="if_show_load"></Loading>
    <!--组件头-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <!--提示框组件-->
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    <!--人头标-->
    <router-link :to="{path:'/glogin'}"><img src="../../assets/personhead1.png" alt="" class="personhead"
                                             @click="back_inshop"></router-link>
    <!--添加收货地址-->
   <router-link :to="{path:'/tochooseaddress'}">
     <a href="" class="address_container">
       <div class="address_empty_left">
         <img src="../../assets/position.png" alt="">
       </div>
       <span class="address" ref="address">
        请添加一个地址
      </span>
       <img src="../../assets/右箭头.png" alt="" class="xiangyou">
     </a>
   </router-link>
    <!--送的时间-->
    <section class="cotainer_style">
      <p class="diliver_text">送达时间</p>
      <section class="diliver_time">
        <p>尽快送达 | 预计 02:09</p>
        <p>蜂鸟专送</p>
      </section>
    </section>
    <!--支付方式-->
    <section class="pay_way">
      <header class="head_style" @click="choosePay">
        <span>支付方式</span>
        <div class="more_type">
          <span>在线支付</span>
          <img src="../../assets/右箭头.png" alt="">
        </div>
      </header>
      <section class="hongbao">
        <span>红包</span>
        <span>暂时只在饿了么 APP 中支持</span>
      </section>
    </section>
    <!--商品信息-->
    <section class="foodList">
      <!--存放商品名字和图片-->
      <header>
        <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="">
        <span>效果演示</span>
      </header>
      <!--具体信息-->
      <ul class="food_list_ul">
        <li class="food_item_style" v-for="item in $store.state.buy_specs_arr">
          <div class="food_name">{{item.pro.specs_name}}</div>
          <div class="num_price">
            <span class="first">x{{item.count}}</span>
            <span>{{item.pro.price}}</span>
          </div>
        </li>
      </ul>
      <div class="food_item_style">
        <p class="food_name">餐盒</p>
        <div class="num_price">
          <span></span>
          <span>￥17324</span>
        </div>
      </div>
      <div class="food_item_style">
        <p class="food_name">配送费</p>
        <div class="num_price">
          <span></span>
          <span>￥4</span>
        </div>
      </div>
      <!--订单价格-->
      <div class="food_item_style">
        <p class="food_name">订单 ¥{{$store.state.allPrice+4+17324}}</p>
        <div class="num_price">
          <span class="allPrice">待支付 ¥{{$store.state.allPrice+4+17324}}</span>
        </div>
      </div>
      <section class="pay_way">
        <a href="">
          <span>订单备注</span>
          <div class="more_type">
            <span class="kouwei"> 口味、偏好等</span>
            <img src="../../assets/右箭头.png" alt="">
          </div>
        </a>
        <a href="">
          <span>发票抬头</span>
          <div class="more_type">
            <router-link :to="{path:'/toinvoice'}">
              <span class="kouwei"> 不需要开发票</span>
              <img src="../../assets/右箭头.png" alt="" class="fapiao">
            </router-link>
          </div>
        </a>
      </section>

    </section>
    <!--确认下单-->
    <section class="confirm_order">
      <p>待支付 ¥{{$store.state.allPrice+4+17324}}</p>
      <p @click="surepaymoney">确认下单</p>
    </section>
    <div class="cover" v-if="if_show_cover" @click="click_cover"></div>
    <!--选择支付方式界面-->
    <section class="choose_type_container animated bounceInUp" v-if="if_show_choose_pay" >
      <header>支付方式</header>
      <ul>
        <li class="unchecked">
          <span>货到付款（商家不支持货到付款）</span>
          <img src="../../assets/未选中.png" alt="" class="xuanze">
        </li>
        <li class="choose" @click="click_online">
          <span>在线支付</span>
          <img src="../../assets/选中.png" alt="" class="xuanze">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import Loading from "./Loading";
  import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件
  export default {
    name: "SureOrder",
    components: {
      Loading,
      PublicHeader,
      PublicPrompt
    }, data() {
      return {
        PageTitle: '确认订单',
        routejump: 'intoShop',
        //是否显示选择方式
        if_show_choose_pay: false,
        //  是否显示蒙版
        if_show_cover: false,
        //设置变量接受vuex里的数组，待会再赋值回去 保证返回界面不丢失数据
        buy_specs_arr1: [],
        //  是否显示组件动画
        if_show_load: true,
        showcom:'',
        promptContent:'',//提示框内容
      }
    },
    mounted() {
      //判断是点击收货地址
      if(this.$store.state.waimaiAddress===''){
        this.$refs.address.innerHTML='请添加收货地址'
      }else{
        this.$refs.address.innerHTML=this.$store.state.waimaiAddress
      }
      console.log(this.$store.state.buy_specs_arr)
      this.$store.state.buy_specs_ar = this.buy_specs_arr1;
      setTimeout(()=>{
        this.if_show_load = false;
      }, 2000)
    },
    methods: {
      getMsg(data){
        this.showcom=data;
      },
      //确认下单
      surepaymoney(){
        console.log('确认下单')
        //弹出提示框

        if(this.$store.state.waimaiAddress===''){
          this.promptContent='请添加一个收货地址';
          this.showcom=true;
        }else{
         this.$router.push({path:'Payment'})
        }

      },
      //点击返回确保购买商品还在
      back_inshop() {
        this.$store.state.buy_specs_ar = this.buy_specs_arr1
      },
      //点击在线支付
      click_online() {
        this.if_show_cover = false;
        this.if_show_choose_pay = false;
      },
      //点击蒙版让其隐藏
      click_cover() {
        this.if_show_cover = false;
        this.if_show_choose_pay = false;
      },
      //是否显示支付界面
      choosePay() {
        console.log('选择支付')
        this.if_show_choose_pay = !this.if_show_choose_pay;
        this.if_show_cover = true;
      }
    }
  }
</script>

<style scoped>
  .fapiao{
    margin-top: .6rem;
  }
  .cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 203;
  }

  .headzujian {
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .xuanze {
    width: .8rem;
    height: .8rem;
    fill: grey;
  }

  .choose_type_container li {

    display: flex;
    justify-content: space-between;
    padding: 0 .7rem;
    line-height: 2.5rem;
    align-items: center;
  }

  .unchecked {
    font-size: .7rem;
    color: #ccc;
  }

  .choose_type_container header {
    background-color: #fafafa;
    font-size: .7rem;
    color: #333;
    text-align: center;
    line-height: 2rem;
  }

  .choose_type_container {
   animation: bounceInUp;
    height: 10rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 204;
  }

  .confirm_order p:nth-of-type(2) {
    width: 30%;
    background-color: #56d176;
    text-align: center;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
    height: 100%;
  }

  .confirm_order p:nth-of-type(1) {
    background-color: #3c3c3c;
    width: 70%;
    padding-left: .7rem;
    line-height: 2rem;
    font-size: .75rem;
    color: #fff;
    height: 100%;
  }

  .confirm_order {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
  }

  .pay_way a {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
  }

  .more_type img {
    width: .5rem;
    height: .5rem;
    fill: #ccc;
  }

  .kouwei {
    font-size: .6rem;
    color: #aaa;
    width: 8rem;
    display: inline-block;
    text-align: right;
    vertical-align: middle;
  }

  .pay_way a span:first-of-type {
    font-size: .7rem;
    color: #666;
  }

  .allPrice {
    color: #f60;
  }

  .first {
    color: #f60 !important;
  }

  .num_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  .food_name {
    width: 11rem;
    font-size: .65rem;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }

  .food_item_style {
    display: flex;
    justify-content: space-between;
    line-height: 1.8rem;
    padding: 0 .7rem;
  }

  .food_list_ul {
    padding-top: .5rem;
  }

  .foodList header span {
    font-size: .8rem;
    color: #333;
  }

  .foodList header img {
    width: 1.2rem;
    height: 1.2rem;
    vertical-align: middle;
  }

  .foodList header {
    padding: .7rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .foodList {
    background-color: #fff;
    margin-top: .4rem;
    margin-bottom: 5rem;
  }

  .hongbao span {
    font-size: .6rem;
    color: #aaa;
    line-height: 2rem;
  }

  .hongbao {
    display: flex;
    justify-content: space-between;
    border-top: .025rem solid #f5f5f5;
  }

  .more_type img {
    width: .8rem;
    height: .8rem;
    fill: #ccc;
    margin-bottom: .3rem;
  }

  .more_type span:nth-of-type(1) {
    font-size: .6rem;
    color: #aaa;
    width: 10rem;
    display: inline-block;
    text-align: right;
  }

  .head_style span:nth-of-type(1) {
    font-size: .7rem;
    color: #666;
  }

  .head_style {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
  }

  .pay_way {
    background-color: #fff;
    margin-top: .4rem;
    padding: 0 .7rem;
  }

  .diliver_time p:nth-of-type(2) {
    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
    margin-right: 0.5rem;
  }

  .diliver_time p:nth-of-type(1) {
    margin-right: 0.5rem;
    padding-top: 1rem;
    font-size: .7rem;
    color: #3190e8;
  }

  .diliver_time {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .diliver_text {
    font-size: .8rem;
    color: #333;
    font-weight: 700;
    padding-left: 1rem;
  }

  .cotainer_style {
    margin: 0.5rem 0;
    border-left: .2rem solid #3190e8;
    height: 4rem;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .xiangyou {
    width: 1rem;
    height: 1rem;
    fill: #999;
  }

  .address {
    position: absolute;
    left: 2rem;
    font-size: .7rem;
    color: #333;
  }

  .address_empty_left img {
    width: 1.2rem;
    height: 1.2rem;
    fill: #3190e8;
    margin-right: .2rem;
  }

  .address_empty_left {
    display: flex;
    align-items: center;
  }

  .address_container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    height: 3.5rem;
    justify-content: space-between;
    padding: 0 .6rem;
    background: url('../../assets/address_bottom.png') 0 100% repeat-x;
    background-color: #fff;
    background-size: auto .12rem;
  }

  .personhead {
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 3%;
    transform: translateY(-50%);
    fill: #fff;
    width: 1.2rem;
    height: 1.2rem;
  }
</style>
