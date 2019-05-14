<template>
  <div>
    <!--头组件-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="head_style"></PublicHeader>
    <section class="sort_container">
      <div class="sort_item">
        <div class="sort_item_container">
          <div class="sort_item_border" @click="clickFoodKind">
            <!--从上一级传过来-->
            <span v-if="showfoodup">{{this.$store.state.foodKindName}}</span>
            <img src="../../assets/上箭头1.png" alt="" v-if="showfoodup">
            <span v-if="showfooddown" style="color: #3D97E9">分类</span>
            <img src="../../assets/下箭头1.png" alt="" v-if="showfooddown">
          </div>
        </div>
      </div>
      <section class="category_container  sort_detail_type" v-if="ifshowkindFood">
        <section class="category_left">
          <ul>
            <li class="category_left_li" v-for="(item,i) in allShopClassArr"
                @click="selfkind(item.sub_categories)">
              <section>
                <img :src="imgArr[i]" alt="" class="category_icon">
                <span class="xixixi">{{item.name}}</span>
              </section>
              <section>
                <span class="category_count">{{item.count}}</span>
              </section>
            </li>
          </ul>
        </section>
        <section class="category_right">
          <ul>
            <li class="category_right_li" v-for="item in selfKindArr" @click="fengleiclass(item.name)">
              <span>{{item.name}}</span><span>{{item.count}}</span>
            </li>
          </ul>
        </section>
      </section>
      <div class="sort_item">
        <div class="sort_item_container" @click="sortFood">
          <div class="sort_item_border">
            <span v-if="showsortup">排序</span>
            <img src="../../assets/上箭头1.png" alt="" v-if="showsortup">
            <span v-if="showsortdown" style="color: #3D97E9">排序</span>
            <img src="../../assets/下箭头1.png" alt="" v-if="showsortdown">
          </div>
        </div>
      </div>
      <section class="sort_detail_type" v-if="ifshowshort">
        <ul class="sort_list_container">
          <li class="sort_list_li" @click="chooseSort4">
            <img src="../../assets/updown.png" alt="">
            <p class="sort_select">
              <span>智能排序</span>
              <img src="" alt="">
            </p>
          </li>
          <li class="sort_list_li" @click="chooseSort5">
            <img src="../../assets/定位.png" alt="">
            <p class="sort_select">
              <span>距离最近</span>
              <img src="" alt="">
            </p>
          </li>
          <li class="sort_list_li" @click="chooseSort6">
            <img src="../../assets/热度.png" alt="">
            <p class="sort_select">
              <span>销量最高</span>
              <img src="" alt="">
            </p>
          </li>
          <li class="sort_list_li" @click="chooseSort1">
            <img src="../../assets/emi价格.png" alt="">
            <p class="sort_select">
              <span>起送价最低</span>
              <img src="" alt="">
            </p>
          </li>
          <li class="sort_list_li" @click="chooseSort2">
            <img src="../../assets/时间.png" alt="">
            <p class="sort_select">
              <span>配送速度最快</span>
              <img src="" alt="">
            </p>
          </li>
          <li class="sort_list_li" @click="chooseSort3">
            <img src="../../assets/评价.png" alt="">
            <p class="sort_select">
              <span>评价最高</span>
              <img src="" alt="">
            </p>
          </li>
        </ul>
      </section>
      <div class="sort_item">
        <div class="sort_item_container">
          <div class="sort_item_border" @click="filterFood">
            <span v-if="showfilterup">筛选</span>
            <img src="../../assets/上箭头1.png" alt="" v-if="showfilterup">
            <span v-if="showfilterdown" style="color: #3D97E9">筛选</span>
            <img src="../../assets/下箭头1.png" alt="" v-if="showfilterdown">
          </div>
        </div>
      </div>
      <section class="sort_detail_type filter_container" v-if="ifshowfilter">
        <section>
          <header class="filter_header_style"> 配送方式</header>
          <ul class="filter_ul">
            <li class="filter_li">
              <img src="../../assets/蜜蜂.png" alt="">
              <span>蜂鸟专送</span>
            </li>
          </ul>
        </section>
        <section>
          <header class="filter_header_style">
            商家属性（可以多选）
          </header>
          <ul class="filter_ul" style="padding-bottom: 0.5rem">
            <li class="filter_li" @click="ifshuxing1">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing1">
              <span class="filter_icon"
                    style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);" v-if="ifshowshuxing11">品</span><span>品牌商家</span>
            </li>
            <li class="filter_li" @click="ifshuxing2">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing2">
              <span class="filter_icon"
                    style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);" v-if="ifshowshuxing22">品</span><span>外卖保</span>
            </li>
            <li class="filter_li" @click="ifshuxing3">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing3">
              <span class="filter_icon"
                    style="color: rgb(63, 189, 230); border-color: rgb(63, 189, 230);" v-if="ifshowshuxing33">准</span><span>准时达</span>
            </li>
            <li class="filter_li" @click="ifshuxing4">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing4">
              <span class="filter_icon"
                    style="color: rgb(232, 132, 45); border-color: rgb(232, 132, 45);" v-if="ifshowshuxing44">新</span><span>新店</span>
            </li>
            <li class="filter_li" @click="ifshuxing5">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing5">
              <span class="filter_icon" style="color: rgb(255, 78, 0); border-color: rgb(255, 78, 0);" v-if="ifshowshuxing55">付</span><span>在线支付</span>
            </li>
            <li class="filter_li" @click="ifshuxing6">
              <img src="../../assets/选择勾号1.png" alt="" v-if="ifshowshuxing6">
              <span class="filter_icon"
                    style="color: rgb(153, 153, 153); border-color: rgb(153, 153, 153);" v-if="ifshowshuxing66">票</span><span>开发票</span>
            </li>

          </ul>
        </section>
        <footer class="confirm_filter">
          <div class="clearall">
            清空
          </div>
          <div class="confirm_select">
            确定
          </div>
        </footer>
      </section>
    </section>
    <div class="back_cover" v-if="ifshowkindFood"></div>
    <div class="back_cover" v-if="ifshowshort"></div>
    <div class="back_cover" v-if="ifshowfilter"></div>

    <!--复制过来-->
    <div class="zp_shopList" style="margin-left: 0.5rem">
      <header class="zp_shopListHeader">
        <!--<img src="../../assets/shangcheng.png" alt="">-->
        <span class="zp_shopHeaderTitle">附近商家</span>
      </header>
      <div class="zp_shopListContainer">
        <ul>
          <router-link :to="{path:'/intoShop'}">
            <li class="zp_shop_li" v-for="item in doneArr" @click="intoShop(item.id)">
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
                    <span class="zp_arte_num_right_left">蜂鸟专送</span>
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
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'//引入头部组件
  import Vue from 'vue'

  export default {
    name: "FoodClass",
    components: {
      PublicHeader
    }, data() {
      return {
        PageTitle: this.$store.state.foodKindName,
        routejump: 'zp_toMyHome',//返回编辑地址页面
        //  控制商品分类
        showfoodup: true,
        showfooddown: false,
        //  控制排序下来
        showsortup: true,
        showsortdown: false,
        //  控制筛选下拉
        showfilterup: true,
        showfilterdown: false,
        //  所有商品分类数组
        allShopClassArr: [],
        //  接受商品分类图标
        imgArr: [],
        //  各自商铺分类
        selfKindArr: [],
        ifshowkindFood: false,
        ifshowback: false,
        ifshowshort: false,
        ifshowfilter: false,
        shopPro: [],
        //  定义数组 存储处理过的数据 然后v-for
        doneArr: [],
        ifshowshuxing1:false,
        ifshowshuxing11:true,
        ifshowshuxing2:false,
        ifshowshuxing22:true,
        ifshowshuxing3:false,
        ifshowshuxing33:true,
        ifshowshuxing4:false,
        ifshowshuxing44:true,
        ifshowshuxing5:false,
        ifshowshuxing55:true,
        ifshowshuxing6:false,
        ifshowshuxing66:true,
      }
    },
    methods: {
      ifshuxing1(){
        this.ifshowshuxing1=!this.ifshowshuxing1
        this.ifshowshuxing11=!this.ifshowshuxing11
      },
      ifshuxing2(){
        this.ifshowshuxing2=!this.ifshowshuxing2
        this.ifshowshuxing22=!this.ifshowshuxing22
      },
      ifshuxing3(){
        this.ifshowshuxing3=!this.ifshowshuxing3
        this.ifshowshuxing33=!this.ifshowshuxing33
      },
      ifshuxing4(){
        this.ifshowshuxing4=!this.ifshowshuxing4
        this.ifshowshuxing44=!this.ifshowshuxing44
      },
      ifshuxing5(){
        this.ifshowshuxing5=!this.ifshowshuxing5
        this.ifshowshuxing55=!this.ifshowshuxing55
      },
      ifshuxing6(){
        this.ifshowshuxing6=!this.ifshowshuxing6
        this.ifshowshuxing66=!this.ifshowshuxing66
      },
      chooseSort1() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=1').then((res) => {
          this.doneArr = res.data
          console.log(res.data, 1)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      chooseSort2() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=2').then((res) => {
          this.doneArr = res.data
          // console.log(res.data)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      chooseSort3() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=3').then((res) => {
          this.doneArr = res.data
          // console.log(res.data)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      chooseSort4() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=4').then((res) => {
          this.doneArr = res.data
          // console.log(res.data)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      chooseSort5() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=5').then((res) => {
          this.doneArr = res.data
          // console.log(res.data)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      chooseSort6() {
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '&order_by=6').then((res) => {
          this.doneArr = res.data
          // console.log(res.data)
        });
        this.showsortup = true
        this.showsortdown = false
        this.ifshowshort = false
      },
      //点击分类
      fengleiclass(q) {
        for (let i in this.shopPro) {
          if (this.shopPro[i].category.slice(this.shopPro[i].category.indexOf('/') + 1, this.shopPro[i].category.length) === q) {
            console.log('相同')
            this.doneArr.push(this.shopPro[i]);
            console.log(this.doneArr)
          } else {
            this.doneArr = []
          }
        }

      },
      //进入各个具体的商铺分类
      selfkind(i) {
        this.selfKindArr = i;
      },
      //  点击下拉商铺分类
      clickFoodKind() {
        this.showfoodup = !this.showfoodup;
        this.showfooddown = !this.showfooddown;
        this.ifshowkindFood = !this.ifshowkindFood
        this.ifshowback = !this.ifshowback
        this.ifshowshort = false
        this.ifshowfilter = false
      },
      //  点击下拉排序
      sortFood() {
        this.showsortup = !this.showsortup;
        this.showsortdown = !this.showsortdown;
        this.ifshowshort = !this.ifshowshort
        this.ifshowback = !this.ifshowback
        this.ifshowkindFood = false
        this.ifshowfilter = false
      },
      //  点击下啦排序
      filterFood() {
        this.showfilterup = !this.showfilterup;
        this.showfilterdown = !this.showfilterdown;
        this.ifshowfilter = !this.ifshowfilter
        this.ifshowshort = false
        this.ifshowkindFood = false
      }
    },
    mounted() {
      Vue.axios.get('https://elm.cangdu.org/shopping/v2/restaurant/category').then((res) => {
        console.log(res.data)
        this.allShopClassArr = res.data;
        //处理图片格式
        for (let s of this.allShopClassArr) {
          let len = s.image_url.length;
          if (s.image_url.slice(len - 4) === 'jpeg') {
            this.srcS = 'https://fuss10.elemecdn.com/' + s.image_url.slice(0, 1) + '/' + s.image_url.slice(1, 3) + '/' + s.image_url.slice(3) + '.jpeg';
          } else if (s.image_url.slice(len - 3) === 'png') {
            this.srcS = 'https://fuss10.elemecdn.com/' + s.image_url.slice(0, 1) + '/' + s.image_url.slice(1, 3) + '/' + s.image_url.slice(3) + '.png';
          } else {
            this.srcS = '//elm.cangdu.org/img/default.jpg'
          }
          this.imgArr.push(this.srcS);
        }
        console.log(res.data)
      });
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=' + this.$store.state.afterSearchLatitude + '&longitude=' + this.$store.state.afterSearchLongitude + '').then((res) => {
        this.doneArr = this.shopPro = res.data
        // console.log(res.data)
      });
    }
  }
</script>

<style scoped>
  .filter_li img{
    width: .8rem;
    height: .8rem;
    margin-right: 0.25rem;
  }
  .sort_container {
    border-bottom: .05rem solid #f1f1f1 !important;
  }

  .zp_shopList {
    margin-top: 4rem;
  }

  .head_style {
    z-index: 50;
    position: fixed;
    top: 0;
    background-color: #3190E8 !important;
  }

  .confirm_filter div {
    text-align: center;
  }

  .confirm_select {
    background-color: #56d176;
    color: #fff;
    border: .025rem solid #56d176;
    width: 50%;
    height: 1.8rem;
    font-size: .8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
  }

  .clearall {
    background-color: #fff;
    margin-right: .5rem;
    border: .025rem solid #fff;
    width: 50%;
    height: 1.8rem;
    font-size: .8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
  }

  .confirm_filter {
    display: flex;
    background-color: #f1f1f1;
    width: 100%;
    padding: .3rem .2rem;
  }

  .filter_icon {
    width: .8rem;
    height: .8rem;
    font-size: .5rem;
    border: .025rem solid #e4e4e4;
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    text-align: center;
  }

  .filter_li img {
    font-size: .4rem;
    color: #333;
  }

  .filter_li span {
    font-size: .4rem;
    color: #333;
  }

  .filter_li {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.7rem;
    height: 1.4rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;

  }

  .filter_ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 0 .5rem;
  }

  .filter_header_style {
    margin-top: 0.2rem;
    font-size: .4rem;
    color: #333;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .5rem;
    background-color: #fff;
  }

  .filter_container {
    flex-direction: column;
    -ms-flex-align: start;
    align-items: flex-start;
    min-height: 10.6rem;
    background-color: #f1f1f1;
    width: 100%;
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: .025rem solid #e4e4e4;
  }

  .sort_list_li img:nth-of-type(1) {
    width: .7rem;
    height: .7rem;
    margin: 0 .3rem 0 .8rem;
    margin-bottom: 0.5rem;
  }

  .sort_select {
    line-height: 2.5rem;
    -ms-flex: auto;
    flex: auto;
    text-align: left;
    text-indent: .25rem;
    border-bottom: .025rem solid #e4e4e4;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }

  .sort_list_li {
    height: 2.5rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
  }

  .sort_list_container {
    width: 100%;
  }

  .sort_detail_type {
    width: 100%;
    position: absolute;
    display: -ms-flexbox;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: .025rem solid #e4e4e4;
    background-color: #fff;
  }

  .back_cover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, .3);
  }

  .category_right_li {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-right: .5rem;
    border-bottom: .025rem solid #e4e4e4;
  }

  .category_icon {
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
    margin-right: 0rem;
  }

  .category_count {
    background-color: #ccc;
    font-size: 0.4rem !important;
    color: white !important;
    padding: 0 .1rem;
    border: .025rem solid #ccc;
    border-radius: .8rem;
    vertical-align: middle;
    margin-left: 2.25rem;
  }

  .category_left span {
    font-size: .5rem;
    color: #666;
    line-height: 1.8rem;

  }

  .category_left_li {
    display: flex;
    justify-content: space-between;
    padding: 0 .5rem;
  }

  .category_left {

    background-color: #f1f1f1;
    height: 16rem;
    overflow-y: auto;
  }

  .category_right {
    flex: 1;
    background-color: #fff;
    padding-left: .5rem;
    height: 16rem;
    overflow-y: auto;
  }

  .sort_detail_type {
    width: 100%;
    position: absolute;
    display: flex;
    top: 1.6rem;
    left: 0;
    border-top: .025rem solid #e4e4e4;
    background-color: #fff;
  }

  .sort_item_border img {
    vertical-align: middle;
    transition: all .3s;
    fill: #666;
    width: 0.6rem;
    height: 0.6rem;
  }

  .sort_item_border {
    height: 1rem;
    border-right: .025rem solid #e4e4e4;
  }

  .sort_item_container {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 14;
    background-color: #fff;
    box-sizing: border-box;
    padding-top: .3rem;
  }

  .sort_item {
    font-size: .55rem;
    color: #444;
    width: 33.3%;
    height: 1.6rem;
    text-align: center;
    line-height: 1rem;
  }

  .sort_container {
    background-color: #fff;
    border-bottom: .025rem solid #f1f1f1;
    position: fixed;
    top: 1.95rem;
    right: 0;
    width: 100%;
    display: flex;
    z-index: 13;
    box-sizing: border-box;
  }

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

  .zp_nav .swiper-container .swiper-slide:nth-of-type(2) {
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
