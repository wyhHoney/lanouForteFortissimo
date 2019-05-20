<template>
  <div>
    <!--头部-->
    <header class="head_top">
      <router-link :to="{path:'toinshop'}">
        <img src="../../assets/fanhui.png" alt="" class="back">
      </router-link>
      <section class="title_head">
        {{$store.state.shop_head_title}}
      </section>
    </header>
    <!--中间图像-->
    <section class="header_img">
      <img :src="'//elm.cangdu.org/img/'+$store.state.image_path" alt="">
      <div class="cover"></div>
    </section>
    <p class="description">{{$store.state.shop_head_description}}</p>
    <!--商品信息部分-->
    <section class="detail_left">
      <section class="detail">
        <!--种类名-->
        <p class="kind_name">{{$store.state.shop_head_title}}</p>
        <!--评分-->
        <div class="rating_sale">
          <span class="rating_sale_chat">评分</span>
          <span class="rating_sale_count">4.7</span>
        </div>
        <p class="sale_content">
          <span>月售29单</span><span>售价21</span><span>起</span>
        </p>
        <p class="sale_chat">
          <span>评论数{{$store.state.rating_count}}</span>
          <span>好评率{{$store.state.satisfy_rate}}%</span>
        </p>
      </section>
    </section>
    <section class="food_container">

      <!--底部购物车部分-->
      <section class="buy_cart_container">
        <section class="buy_icon_num" ref="buy_icon_num">
          <div class="cart_icon_container" ref="cart_icon_container">
              <span class="cart_list_length" ref="cart_list_length">
                {{allNum}}
              </span>
            <img src="../../assets/购物车.png" alt="" class="cart_icon" @click="show_cart_list">
          </div>
          <div class="cart_num_foot">
            <div class="cart_num_money1" ref="allprice">{{allPrice}}</div>
            <div class="cart_num_money2">配送费5元</div>
          </div>
        </section>
        <section class="gotopay" ref="gotopay">
          <a href="###" class="gotopay_btn" ref="gotopay_btn">去结算</a>
        </section>
      </section>
      <section class="cart_food_list" v-if="if_show_cart_list1">
        <header>
          <h4>购物车</h4>
          <div @click="clearall">
            <img src="../../assets/delete.png" alt="" class="clearall">
            <span class="clear_cart">清空</span>
          </div>
        </header>
        <section class="cart_food">
          <ul>
            <li class="cart_food_li" v-for="item in  buy_specs_arr">
              <div class="art_list_num">
                <p class="art_list_num1">{{item.pro.name}}</p>
                <p class="art_list_num2">{{item.pro.specs_name}}</p>
              </div>
              <div class="cart_list_price">
                <span>$</span><span>{{item.pro.price}}</span>
              </div>
              <section class="cart_list_control">
                <img src="../../assets/减小.png" alt="" class="jianxiao" @click="jianshao1(item)">
                <span class="op">{{item.count}}</span>
                <img src="../../assets/增加.png" alt="" class="jianxiao" @click="zengjia1(item)">
              </section>
            </li>
          </ul>
        </section>
      </section>
      <div class="screen_cover" v-if="if_show_cart_list" @click="if_hidden_list">
      </div>
    </section>

  </div>
</template>

<script>
  import Vue from 'vue'

  export default {

    name: "InShop",
    data() {
      return {
        if_show_cart: false,
        if_show_gray: false,
        if_show_cart_list: false,//蒙版的显示隐藏
        if_show_cart_list1: false,
        buy_specs_name: '',//将要购买的物品名称
        buy_specs_arr: [],//购买特殊食物的数组
        buy_specs_kind: '',//将要购买的特殊商品的种类
        allNum: 0,
        allPrice: 0
      }
    },
    beforeUpdate() {
      //调用总价格和总数函数
      this.allNumAndPrice1();
      this.allNumAndPrice2();
      //调用显示购物车的css样式函数
      this.shopcartcss();
    },
    mounted() {
      this.buy_specs_arr = this.$store.state.buy_specs_arr;
      this.buy_specs_kind = this.$store.state.buy_specs_kind
      this.buy_specs_name = this.$store.state.buy_specs_name
      console.log(this.buy_specs_arr, '看看我')
      this.shopcartcss();
      this.allNum = this.$store.state.allNum;
      this.allPrice = this.$store.state.allPrice;
    }
    ,
    methods: {
      allNumAndPrice1() {
        let NumSum = 0;
        for (let i in this.buy_specs_arr) {
          NumSum += this.buy_specs_arr[i].count;
        }
        this.allNum = NumSum;
      },
      allNumAndPrice2() {
        let PricSum = 0;
        for (let i in this.buy_specs_arr) {
          PricSum += this.buy_specs_arr[i].count * this.buy_specs_arr[i].pro.price;
        }
        this.allPrice = PricSum;
      }
      ,
      //定义函数判断有无东西来显示购物车的css样式
      shopcartcss() {
        // console.log('css样式')
        if (this.buy_specs_arr.length === 0) {
          this.$refs.allprice.innerHTML = '$0.00';
          this.$refs.gotopay.style.backgroundColor = '#535356';
          this.$refs.gotopay_btn.innerHTML = '还差￥20起送';
          this.$refs.gotopay_btn.style.fontSize = '.7rem';
          this.$refs.gotopay_btn.style.fontWeight = '700';
          this.$refs.cart_icon_container.style.backgroundColor = '#3d3d3f';
          this.$refs.cart_list_length.style.opacity = '0'
        } else {
          this.$refs.gotopay.style.backgroundColor = '#4cd964';
          this.$refs.gotopay_btn.innerHTML = '去结算';
          this.$refs.cart_icon_container.style.backgroundColor = '#3190e8';
          this.$refs.cart_list_length.style.opacity = '1';
          this.$refs.allprice.innerHTML = this.allPrice;
        }
      },
      //清空购物车
      clearall() {
        this.buy_specs_arr = [];
      },
      //点击减少
      //点击减少
      jianshao1() {
        for (let i in this.buy_specs_arr) {
          if (this.buy_specs_arr[i].pro.specs_name === this.buy_specs_name) {
            if (this.buy_specs_arr[i].count > 1) {
              this.buy_specs_arr[i].count--;
            } else {
              this.buy_specs_arr = [];
            }
          }
        }
      }
      ,
      //点击购物清单界面增加
      zengjia1() {
        for (let i in this.buy_specs_arr) {
          if (this.buy_specs_arr[i].pro.specs_name === this.buy_specs_name) {
            if (this.buy_specs_arr[i].count > 0) {
              this.buy_specs_arr[i].count ++
            }
          }
        }
      }
      ,
      //点击蒙版显示主页面
      if_hidden_list() {
        this.if_show_cart_list = false;
        this.if_show_cart_list1 = false;
      },
      //是否显示购物清单
      show_cart_list() {
        this.if_show_cart_list1 = !this.if_show_cart_list1;
        this.if_show_cart_list = !this.if_show_cart_list;

      }
    }
  }
</script>

<style scoped>
  .sale_chat span:nth-of-type(2){
    font-size: .6rem;
    color: #666;
  }
  .sale_chat span:nth-of-type(1){
    font-size: .6rem;
    color: #666;
  }
  .sale_chat{
    line-height: 0.5rem;
    margin: 0;
  }
  .sale_content{
    margin: 0;
  }
  .sale_content span:nth-of-type(3){
    font-size: .6rem;
    color: #f60;
    margin-right: .2rem;
  }
  .sale_content span:nth-of-type(2){
    font-size: .6rem;
    color: #f60;
    margin-right: .2rem;
  }
  .sale_content span:nth-of-type(1){
    font-size: .6rem;
    color: #666;
    margin-right: .4rem;
  }
  .rating_sale_count {
    font-size: .55rem;
    color: #f60;
    margin-left: .2rem;
  }

  .rating_sale_chat {
    font-size: .6rem;
    color: #666;
    margin-right: .2rem;
  }

  .rating_sale {
    display: flex;
    align-items: center;
  }

  .kind_name {
    font-size: .7rem;
    color: #333;
    margin-bottom: .2rem;
  }

  .detail_left {
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description {
    font-size: .6rem;
    color: #666;
    margin-top: .5rem;
    line-height: .8rem;
    bottom: .2rem;
    padding: 0 .4rem;
  }

  .header_img {
    position: relative;
  }

  .header_img > img {
    width: 100%;
    display: block;
  }

  .back {
    line-height: 2.2rem;
    left: .4rem;
    width: .6rem;
    height: 1rem;
    margin-left: .4rem;
  }

  .title_head {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  .op {
    font-size: .65rem;
    color: #666;
    min-width: 1rem;
    text-align: center;
  }

  .cart_list_control {
    display: flex;
    align-items: center;
  }

  .cart_list_price > span {
    font-size: .6rem;
    color: #f60;
  }

  .art_list_num2 {
    margin: 0;
    padding: 0;
    font-size: .4rem;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .art_list_num1 {
    margin: 0;
    padding: 0;
    font-size: .7rem;
    color: #666;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .art_list_num {
    width: 55%;
  }

  .cart_food_li {
    display: flex;
    justify-content: space-between;
    padding: .6rem .5rem;
    list-style: none;
  }

  .cart_food {
    background-color: #fff;
    max-height: 20rem;
    overflow-y: auto;
  }

  .clear_cart {
    font-size: .6rem;
    color: #666;
  }

  .clearall {
    width: .6rem;
    height: .6rem;
    vertical-align: middle;
    overflow: hidden;
  }

  .cart_food_list > header > h4 {
    font-size: .7rem;
    color: #666;
  }

  .cart_food_list > header {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding: .3rem .6rem;
    background-color: #eceff1;
  }

  .screen_cover {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 11;
  }

  .cart_food_list {
    position: fixed;
    width: 100%;
    padding-bottom: 2rem;
    z-index: 12;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  .show_chooseList {
    vertical-align: -0.2rem;
    margin-top: 2rem !important;
    margin-left: 1rem;
    font-size: .55rem;
    color: #fff;
    padding: .1rem .2rem;
    background-color: #3190e8;
    border-radius: .2rem;
    border: 1px solid #3190e8;
  }

  .shuliang {
    margin-left: 3rem;
    width: 100px;
    display: inline-block;
  }

  .jianxiao {
    width: .9rem;
    height: .9rem;
    fill: #999;

  }

  .cart_num {
    font-size: .65rem;
    color: #666;
    min-width: 1rem;
    text-align: center;
    /*position: absolute;*/
    /*right: -2rem;*/
    /*top: -50rem;*/
    margin-left: 5.2rem;
    margin-top: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3.5rem;
  }

  .zp_delete_img {
    position: absolute;
    right: .5rem;
    top: .3rem;
    width: 1rem;
    height: 1rem;
  }

  .specs_cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .4);
    z-index: 17;
  }

  .specs_cart {
    width: 4rem;
    height: 1.3rem;
    background-color: #3199e8;
    border: 1px;
    border-radius: .15rem;
    font-size: .6rem;
    color: #fff;
    text-align: center;
    line-height: 1.3rem;
  }

  .span2 {
    font-size: .8rem;
    font-weight: 700;
    color: #ff6000;
  }

  .specs_price .span1 {
    font-size: .5rem;
    color: #ff6000;
  }

  .specs_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    padding: .5rem;
    border: 1px;
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
  }

  .specs_details ul li {
    font-size: .6rem;
    padding: .3rem .5rem;
    border: .025rem solid #ddd;
    border-radius: .2rem;
    margin-right: .5rem;
    margin-bottom: .2rem;
  }

  .pecs_activity {
    border: .025rem solid blue;
    color: #3199e8;
    z-index: 100;
  }

  .specs_details ul {
    display: flex;
    flex-wrap: wrap;
    padding: .4rem 0;
    list-style: none;
  }

  .specs_details_title {
    font-size: .6rem;
    color: #666;
  }

  .specs_list_head h4 {
    font-size: .7rem;
    color: #222;
    font-weight: 400;
    text-align: center;
    padding: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .specs_list {
    position: fixed;
    top: 35%;
    left: 15%;
    width: 70%;
    background-color: #fff;
    z-index: 18;
    border: 1px;
    border-radius: .2rem;
  }

  .choose_icon_container {
    display: flex;
    align-items: center;
  }

  .food_price3 {
    font-size: .5rem;
    color: #666;
  }

  .food_price2 {
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin-right: .3rem;
  }

  .food_price1 {
    font-size: .5rem;
    color: #f60;
    margin-right: .05rem;
  }

  .menu_detail_footer {
    margin-top: 0;
    margin-left: 2.4rem;
    font-size: 0;
    margin-top: .3rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .food_activity {
    font-size: .3rem;
    border: 1px solid currentColor;
    border-radius: .3rem;
    padding: .08rem;
    display: inline-block;
    transform: scale(.8);
    margin-left: -.35rem;
    color: rgb(241, 136, 79);
    border-color: rgb(240, 115, 115);
  }

  .food_activity {
    line-height: .4rem;
    margin: 0;

  }

  .food_sale_rating {
    font-size: .5rem;
    color: #333;
  }

  .food_sale_rating {
    line-height: .8rem;
    margin: 0;
  }

  .food_description_content {
    font-size: .5rem;
    color: #999;
    line-height: .6rem;
    margin: 0;
  }

  .description_foodname {
    font-size: .7rem;
    color: #333;
    font-weight: bold;
  }

  .food_description_head {
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
  }

  .menu_fooddescription {
    width: 100%;
  }

  .menu_food_img img {
    width: 2rem;
    height: 2rem;
    display: block;
  }

  .menu_food_img {
    margin-right: .4rem;
  }

  .menu_detail_link {
    display: flex;
  }

  .menu_item_description {
    font-size: .5rem;
    color: #999;
    width: 30%;
    overflow: hidden;
  }

  .menu_item_title {
    font-size: .7rem;
    color: #666;
    font-weight: 700;
  }

  .menu_detail_header {
    width: 100%;
    padding: .4rem;
    background-color: gainsboro;
  }

  .menu_detail_list {
    background-color: #fff;
    padding: .6rem .4rem;
    border-bottom: 1px solid #f8f8f8;
    position: relative;
    overflow: hidden;
  }

  .menu_detail_header_left {
    width: 11rem;
    white-space: nowrap;
    overflow: hidden;
  }

  .menu_left_li {
    font-weight: 700;
    font-size: .6rem;
    color: #666;
  }

  .category_num {
    position: absolute;
    top: .1rem;
    right: .1rem;
    background-color: #ff461d;
    line-height: .6rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    min-width: .6rem;
    height: .6rem;
    font-size: .5rem;
    color: #fff;
  }

  .menu_left_li {
    border-left: .15rem solid #3190e8;
    background-color: #fff;
    padding: .7rem .3rem;
    border-bottom: .025rem solid #ededed;
    box-sizing: border-box;
    border-left: .15rem solid #f8f8f8;
    position: relative;
  }

  .gotopay_btn {
    font-size: .9rem;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
  }

  .gotopay {
    background-color: #4cd964;
    position: absolute;
    right: 0;
    width: 5rem;
    height: 100%;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .cart_num_money2 {
    font-size: .4rem;
    color: #fff;
    margin: 0;
  }

  .cart_num_money1 {
    font-size: .8rem;
    font-weight: 700;
    color: #fff;
  }

  .cart_num_foot {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3.5rem;
  }

  .cart_icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  .cart_list_length {
    position: absolute;
    top: -.25rem;
    right: -.25rem;
    background-color: #ff461d;
    line-height: .7rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    min-width: .7rem;
    height: .7rem;
    font-size: .5rem;
    color: #fff;
  }

  .cart_icon_container {
    display: flex;
    /*background-color: #3d3d3f;*/
    position: absolute;
    padding: .4rem;
    border: .18rem solid #444;
    border-radius: 50%;
    left: .5rem;
    top: -.7rem;
    background-color: #3190e8;
  }

  .buy_cart_container {
    position: fixed;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: !important;
    display: flex;
    width: 100%;
    height: 2rem;
  }

  .menu_left {
    width: 3.8rem;
  }

  .menu_container {
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
  }

  .food_container {
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }

  .activity_show {
    color: #3190e8;
    border-color: #3190e8;
    border-bottom: .12rem solid blue;
  }

  .change_show_type div span {
    font-size: .65rem;
    color: #666;
    padding: .2rem .1rem;
    border-bottom: .12rem solid #fff;
  }

  .change_show_type div {
    flex: 1;
    text-align: center;
  }

  .change_show_type {
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
  }

  .shop_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
  }

  .menu_right {
    width: 12.2rem;
  }
</style>
