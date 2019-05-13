<template>
  <div class="container zp_container">
    <header class="zp_head_top">
      <router-link :to="{path:'/seek'}">
        <a href="###"><img src="../../assets/fangdajing.png" alt=""></a>
      </router-link>
      <router-link :to="{path:'/glogin'}" v-if=" ifshowdenglu">
        <a href="###" class="zp_head_top_right">
          <span>登陆|注册</span>
        </a>
      </router-link>
      <router-link :to="{path:'/glogin'}" v-if="ifshouheadimg">
        <img src="../../assets/personhead1.png" alt="" class="zp_head_top_right1">
      </router-link>
      <a href="###" class="zp_head_top_middle">
        <!--定位地址-->
        <span>{{$store.state.afterSearchName}}</span>
      </a>
    </header>
    <nav class="zp_nav msite_nav">
      <div class="swiper-container ">
        <div class="swiper-wrapper lunbotu">
          <div class="swiper-slide zp_food_types">
            <a href="###" v-for="item in halfGoodsCateory1">
              <router-link :to="{path:'/toFoodClass'}">
                <figure @click="inFoodClass(item.title)">
                  <img :src="'//fuss10.elemecdn.com/'+item.image_url" alt="">
                  <figcaption>{{item.title}}</figcaption>
                </figure>
              </router-link>
            </a>
          </div>
          <div class="swiper-slide zp_food_types">
            <a href="###" v-for="item in halfGoodsCateory2">
              <figure @click="inFoodClass(item.title)">
                <img :src="'//fuss10.elemecdn.com/'+item.image_url" alt="">
                <figcaption>{{item.title}}</figcaption>
              </figure>
            </a>
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <Loading v-if="ifShowLoading"></Loading>
    <div class="zp_shopList">
      <header class="zp_shopListHeader">
        <!--<img src="../../assets/shangcheng.png" alt="">-->
        <span class="zp_shopHeaderTitle">附近商家</span>
      </header>
      <div class="zp_shopListContainer">
        <ul>
          <router-link :to="{path:'/intoShop'}">
            <li class="zp_shop_li" v-for="item in shopPro" @click="intoShop(item.id)">
              <section>
                <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="" class="zp_shop_img">
              </section>
              <div class="zp_shop_right">
                <header class="zp_shopDetailHeader">

                  <h4 class="zp_shop_title">{{item.name}}</h4>

                  <ul class="zp-shop-detail-ul">
                    <li>保</li>
                    <li>准</li>
                    <li>票</li>
                  </ul>
                </header>
                <h5 class="zp_shopDetailOrderNum">
                  <section class="zp_rate_num_left">
                    <section class="zp_rating_section">
                      <span class="rating_num">{{item.rating}}</span>
                    </section>
                    <section class="zp_order_section">月售{{item.recent_order_num}}单</section>
                  </section>
                  <section class="zp_rate_num_right">
                    <span class="zp_arte_num_right_left">{{item.delivery_mode.text}}</span>
                    <span class="zp_arte_num_right_right">准时达</span>
                  </section>
                </h5>
                <h5 class="zp_shopDetailDistance">
                  <p class="zp_fee">
                    ￥{{item.float_minimum_order_amount}}起送
                    <span class="segmentation">/</span>{{item.piecewise_agent_fee.tips}}
                  </p>
                  <p class="zp_distance_time">
                    <span>{{item.distance}}</span>
                    <span class="segmentation">/</span>
                    <span class="order_time">{{item.order_lead_time}}</span>
                  </p>
                </h5>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="BottomPart">
      <div @click="TakeOutFood">
        <div class="bottom_logo bottom_logo_span1"></div>
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
  import Vue from 'vue'
  import Swiper from 'swiper'
  import Loading from "./Loading";

  export default {
    name: "ZpTakeOut",
    components: {Loading},
    methods: {
      //进入商品列表
      inFoodClass(i){
      this.$store.state.foodKindName=i;
      },
      intoShop(i) {
        this.$store.state.shopId = i
      },
      adjustifshowimg() {
        if (this.$store.state.nameArrAdjustIn.length === 0) {
          this.ifshowdenglu = true;
          this.ifshouheadimg = false
        } else {
          this.ifshowdenglu = false;
          this.ifshouheadimg = true
        }
      },

      //底部按钮按钮的点击事件
      TakeOutFood() {
        this.$router.push({path: 'zp_toMyHome'})
      },
      //底部搜索按钮的点击事件
      SearchButton() {
        this.$router.push({path: 'seek'});
      },
      //底部订单按钮的点击事件
      OrderButton() {
        this.$router.push({path: 'theorderoage'});
      },
      //底部我的按钮的点击事件
      MyInformation() {
        this.$router.push({path: 'myhomepage'})
      },
    },
    beforeMount() {

    },

    created() {
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '').then((res) => {
        this.shopPro = res.data;
        // console.log(res.data)
      });
      Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res) => {
        this.goodsCategory = res.data
        this.halfGoodsCateory1 = this.goodsCategory.slice(0, this.goodsCategory.length / 2);
        this.halfGoodsCateory2 = this.goodsCategory.slice(this.goodsCategory.length / 2, this.goodsCategory.length)
        this.ifShowLoading = false;

      })
    },
    data() {
      return {
        goodsCategory: [],
        halfGoodsCateory1: [],
        halfGoodsCateory2: [],
        shopPro: [],
        ifShowLoading: true,//显示动画
        ifshowdenglu: true,
        ifshouheadimg: false,//判断是否登陆过显示那个头像
      }
    },

    mounted() {
      //判断是否有登陆
      this.adjustifshowimg();
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
      });

    }
  }
</script>

<style scoped>
  .lunbotu {
    height: 7rem;
  }

  .ppp {
    display: inline-block;
    font-size: .5rem;
    line-height: 0.8rem;
    font-weight: 800;
    color: #333;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
    width: 1.5rem;

  }

  .zp_head_top_right1 {
    margin-left: 14rem;
  }

  .zp-shop-detail-ul {
    display: flex;
    transform: scale(0.8);
    margin-right: -.3rem;
  }

  .zp-shop-detail-ul li {
    list-style: none;
    font-style: normal;
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }

  .rating_num {
    font-size: .4rem;
    color: #ff6000;
    margin: 0 .2rem;
  }

  .order_time {
    color: blue;
  }

  .zp_arte_num_right_left {
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .4rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
  }

  .zp_arte_num_right_right {
    color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .4rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
    margin-left: .08rem;
  }

  .zp_distance_time {
    transform: scale(.9);
  }

  .zp_fee {
    transform: scale(.9);
    font-size: .5rem;
    color: #666;

  }

  .zp_shopDetailDistance {
    margin-top: .52rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
  }

  .zp_rate_num_right {
    display: flex;
    align-items: center;
    transform: scale(.7);
    min-width: 5rem;
    justify-content: flex-end;
    margin-right: -.8rem;
  }

  .zp_order_section {
    transform: scale(.8);
    margin-left: -.2rem;
    font-size: .4rem;
    color: #666;
  }

  .zp_rating_section {
    display: flex;
  }

  .zp_rate_num_left {
    display: flex;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .zp_shopDetailOrderNum {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: .6rem;
    margin-top: .52rem;
  }

  .zp_shop_title {
    width: 8.5rem;
    color: #333;
    padding-top: .01rem;
    font: .65rem/.65rem PingFangSC-Regular;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zp_shopListContainer {
    background-color: #fff;
    margin-bottom: 2rem;
  }

  .zp_shop_li {
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .4rem;
  }

  .zp_shop_img {
    width: 2.7rem;
    height: 2.7rem;
    display: block;
    margin-right: .4rem;
  }

  .zp_shop_right {
    flex: auto;
    display: block;
  }

  .zp_shopDetailHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .zp_head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  .zp_head_top img {
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
    position: fixed;
    left: 0.4rem;
    top: 0.4rem;
  }

  .zp_shopList {
    padding-right: 2rem;
  }

  .zp_head_top_right {
    right: .55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .zp_head_top_right a {
    color: #fff;
  }

  .zp_head_top_middle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
    margin-left: -.5rem;
  }

  .zp_head_top_middle > span {
    font-size: .5rem;
    color: #fff;
    text-align: center;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .zp_shopHeaderTitle {
    color: #999;
    font: .55rem/1.6rem Microsoft YaHei;
  }

  .zp_shopListContainer {
    background-color: #fff;
    margin-bottom: 2rem;
  }

  .zp_food_types {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    position: relative;
  }

  .zp_food_types a {
    width: 25%;
    padding: .3rem 0;
    /*display: flex;*/
    /*justify-content: center;*/
  }

  .zp_food_types figure img {
    margin-left: 1rem;
    margin-bottom: .3rem;
    width: 1.8rem;
    height: 1.8rem;
  }

  .zp_food_types figure figcaption {
    text-align: center;
    font-size: .55rem;
    color: #666;
  }
  .zp_nav .swiper-container .swiper-slide:nth-of-type(2){
    position: relative;
    top: -7rem;
    left: 14.5rem;
  }
  .zp_nav .swiper-container {
    width: 100%;
    height: auto;
    padding-bottom: .6rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .zp_nav {
    padding-top: 2.1rem;
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    height: 10.6rem;
  }

  .BottomPart {
    width: 100%;
    height: 1.95rem;
    background-color: white;
    font-size: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.2);
  }

  .BottomPart > div {
    box-sizing: border-box;
    padding-top: .3rem;
    width: 25%;
    height: 100%;
    display: inline-block;
    text-align: center;
    font-size: .45rem;
    color: #666666;
  }

  .bottom_logo {
    width: .8rem;
    height: .8rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: .3rem;

  }

  .bottom_logo_span1 {
    background: url("../../assets/bottom11.png") no-repeat center center;
    background-size: 110% 110%;
  }

  .bottom_logo_span2 {
    background: url("../../assets/bottom2.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .bottom_logo_span3 {
    background: url("../../assets/bottom3.png") no-repeat center center;
    background-size: 100% 100%;
  }

  .bottom_logo_span4 {
    background: url("../../assets/bottom4.png") no-repeat center center;
    background-size: 100% 100%;
  }
</style>
