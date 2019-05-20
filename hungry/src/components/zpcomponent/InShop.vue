<template>
  <div class="aa">
    <!--<PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>-->
    <Loading v-if="loadload"></Loading>
    <section class="shop_container">
      <!--<section class="change_show_type">-->
      <!--<div><span class="activity_show">商品</span></div>-->
      <!--<div><span>评价</span></div>-->
      <!--</section>-->
      <section class="food_container">
        <section class="menu_container">
          <section class="menu_left" style="overflow: auto;height: 800px">
            <ul>
              <li v-for="(item1,index) in foodPro" class="menu_left_li" :key="index">
                <span><a :href="'#'+index" style="text-decoration: none">{{item1.name}}</a></span>
                <span :class="{category_num:hot_kind(item1.foods)>0?true:false}">{{hot_kind(item1.foods)}}</span>
              </li>
            </ul>
          </section>
          <section class="menu_right" style="overflow: auto ;height: 800px">
            <ul>
              <li v-for="(item, index) in foodPro" :key="index">
                <header class="menu_detail_header">
                  <section class="menu_detail_header_left">
                    <strong class="menu_item_title" :id="index">{{item.name}}</strong>
                    <span class="menu_item_description">{{item.description}}</span>
                  </section>
                </header>

                <section class="menu_detail_list" v-for="(pro,index1) in item.foods" :key="index1">
                  <div class="menu_detail_link">
                    <router-link :to="{path:'toshop'}">
                      <section class="menu_food_img" @click="inPerShop(pro)">
                        <img :src="'//elm.cangdu.org/img/'+pro.image_path" alt="">
                      </section>
                    </router-link>
                    <section class="menu_fooddescription">
                      <h3 class="food_description_head">
                        <strong class="description_foodname">
                          {{pro.name}}
                        </strong>
                      </h3>
                      <p class="food_description_content">{{pro.description}}</p>
                      <p class="food_sale_rating">
                        <span>月售{{pro.month_sales}}份</span>
                        <span>好评率{{pro.satisfy_rate}}%</span>
                      </p>
                      <p class="food_activity" ref="ppp">
                        {{ifNull(pro.activity)}}
                      </p>
                    </section>
                  </div>
                  <footer class="menu_detail_footer">
                    <section class="food_price">
                      <span class="food_price1">￥</span>
                      <span class="food_price2">{{popp(pro)}}</span>
                      <span class="food_price3">起</span>
                      <div class="shuliang">
                        <img src="../../assets/减小.png" alt="" @click="jianxiao(pro)"
                             :class="{hehehe:find_kind_count(pro.name)>0?false:true ,jianxiao:true}">
                        <p :class="{cart_num:true}">{{find_kind_count(pro.name)}}</p>
                        <span :class="{show_chooseList:true,vvv:ifspecialfood(pro.specfoods)==='+'?true:false}"
                              @click="zp_buy_shop(pro.specfoods,pro.name,pro,$event)">
                        {{ifspecialfood(pro.specfoods)}}
                      </span>
                      </div>
                    </section>

                  </footer>
                </section>
              </li>
            </ul>
          </section>
        </section>
        <!--底部购物车部分-->
        <section class="buy_cart_container bounce delay-1s">
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
            <!--<router-link :to="{path: '/tosureorder'}" ref="tosureorder">-->
            <a href="###" class="gotopay_btn" ref="gotopay_btn" @click="tosureorder">去结算</a>
            <!--</router-link>-->
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
                  <span>￥</span><span>{{item.pro.price}}</span>
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
        <div class="screen_cover" v-if="if_show_cart_list" @click="if_hidden_list">111
        </div>
      </section>
    </section>
    <!--点开特殊食品后的蒙版-->
    <section class="specs_cover" @click="if_show_cart1" v-if="if_show_gray"></section>
    <!--特殊视频购买界面-->
    <section class="specs_list" v-show='if_show_cart'>
      <header class="specs_list_head">
        <h4>{{buy_cart_name}}</h4>
        <img src="../../assets/shanchu.png" alt="" class="zp_delete_img" @click="zp_delete_cart">
      </header>
      <section class="specs_details" style="padding: .5rem">
        <h5 class="specs_details_title">规格</h5>
        <ul>
          <li class="pecs_activity" v-for="(item,i) in spec_food_array" @click="show_money(item,i,item.specs_name)"
              :key="i" ref="uuu">
            {{item.specs_name}}
          </li>
        </ul>
      </section>
      <footer class="specs_footer">
        <div class="specs_price">
          <span class="span1">￥</span><span class="span2">{{show_spec_money}}</span>
        </div>
        <div class="specs_cart" @click="in_cart()">
          加入购物车
        </div>
      </footer>
    </section>
    <!--提示框-->
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    <!--购物车小球动画-->
    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball">1</div>
    </transition>
  </div>


</template>

<script>
  import Vue from 'vue'
  import Loading from "./Loading";
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件

  export default {
    name: "InShop",
    components: {
      Loading, PublicHeader,
      PublicPrompt,
    },
    data() {
      return {
        PageTitle: '选择商品',
        routejump: 'zp_toMyHome',
        if_show_load: true,//是否显示动画
        foodPro: [],
        if_show_cart: false,
        if_show_gray: false,
        buy_cart_name: '',
        spec_food_array: [],
        show_spec_money: '',
        price_array: [],//用来存放食物的价格
        kind_price_obj: {},//用来放置商品类名字，购买数量，股买的各类的价格集合
        kind_price: [],//存放上面的对象
        kind_count: 0,//每类食品的数量
        kind_id: Number,
        if_show_cart_list: false,//蒙版的显示隐藏
        if_show_cart_list1: false,
        buy_specs_name: '',//将要购买的物品名称
        buy_specs_arr: [],//购买特殊食物的数组
        buy_specs_kind: '',//将要购买的特殊商品的种类
        buy_specs_price: Number,//特殊商品的单价
        allPrice: 0,//总价格
        allNum: 0,//总数
        kindSpec: Object,
        //  点击规格获取数据
        datainfor: {},
        //  往后台传的数组
        dataArr: [],
        showcom: '',
        promptContent: '',//提示框内容
        leftfoods: [],
        loadload: true,
        ballFlag: false,
        mouseevent: {},
      }
    },
    beforeDestroy() {
      this.$store.state.allPrice = this.allPrice;
      this.$store.state.allNum = this.allNum;
      this.$store.state.buy_specs_arr = this.buy_specs_arr
      this.$store.state.buy_specs_kind = this.buy_specs_kind
      this.$store.state.buy_specs_name = this.buy_specs_name
    },
    beforeUpdate() {
      //调用总价格和总数函数
      this.allNumAndPrice1();
      this.allNumAndPrice2();
      //调用显示购物车的css样式函数
      this.shopcartcss();
    },
    methods: {
      popp(i) {

        let a = []
        for (let q in i.specfoods) {
          a.push(i.specfoods[q].price)
        }
        a.sort();
        if (a[0] === null) {
          return 0
        } else {
          return a[0]
        }
      },
      beforeEnter(el) {
        el.style.transform = 'translate(0,0)'
      },
      enter(el, done) {
        el.offsetWidth;
        let dis = this.$refs.cart_icon_container.getBoundingClientRect()
        el.style.transform = 'translate(-6.5rem,6.4rem)'
        el.style.transition = 'all 0.7s ease-in'
        done()
      },
      afterEnter(el) {
        this.ballFlag = !this.ballFlag
      },
      getMsg(data) {
        this.showcom = data;
      },
      tosureorder() {
        if (this.allPrice < 20) {
          // alert('差钱啊 兄弟')
          //弹出提示框
          this.showcom = true;
          //提示内容
          let money = 20 - this.$store.state.allPrice

          this.promptContent = '你很穷啊兄弟，还差' + 20 + '元，我们才起送哦！';
        } else {
          this.$router.push({path: 'tosureorder'})
        }
      },
      //进入每一个具体的店铺
      inPerShop(pro) {
        this.$store.state.shop_head_title = pro.name;
        this.$store.state.shop_head_description = pro.description;
        this.$store.state.rating_count = pro.rating_count;
        this.$store.state.satisfy_rate = pro.satisfy_rate;
        this.$store.state.image_path = pro.image_path
      },
      //分栏的购买数量
      hot_kind(m) {
        // console.log(m)
        let sum = null;
        for (let i in m) {
          for (let j in this.buy_specs_arr) {
            if (m[i].item_id === this.buy_specs_arr[j].pro.item_id) {
              sum += this.buy_specs_arr[j].count;
            }
          }
        }
        return sum
      },
      //定义函数判断有无东西来显示购物车的css样式
      shopcartcss() {
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
      //计算总价格总件数
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
      },
      //清空购物车
      clearall() {
        this.buy_specs_arr = [];
      },
      //点击减少
      jianshao1(p) {
        // console.log(p )
        for (let i in this.buy_specs_arr) {
          if (this.buy_specs_arr[i].pro._id=== p.pro._id) {
            if (this.buy_specs_arr[i].count > 1) {
              this.buy_specs_arr[i].count--;
            } else {
              this.buy_specs_arr.splice(i, 1);
            }
          }
        }
      },
      //点击购物清单界面增加
      zengjia1(p) {
        for (let i in this.buy_specs_arr) {
          if (this.buy_specs_arr[i].pro.specs_name === p.pro.specs_name) {
            if (this.buy_specs_arr[i].count > 0) {
              this.buy_specs_arr[i].count++
            }
          }
        }
      },
      //点击蒙版显示主页面
      if_hidden_list() {
        this.if_show_cart_list = false;
        this.if_show_cart_list1 = false;
      },
      //是否显示购物清单
      show_cart_list() {
        this.if_show_cart_list1 = !this.if_show_cart_list1;
        this.if_show_cart_list = !this.if_show_cart_list;

      },
      jianxiao(m) {
        // console.log(m)
        if (m.specfoods.length !== 1) {
          //弹出提示框
          this.showcom = true;
          //提示内容
          let money = 20 - this.$store.state.allPrice

          this.promptContent = '只能减少当个商品！'
        } else {
          for (let i in this.buy_specs_arr) {
            if (this.buy_specs_arr[i].pro.item_id ===m.item_id) {
              if (this.buy_specs_arr[i].count > 1) {
                this.buy_specs_arr[i].count--;
              } else {
                this.buy_specs_arr.splice(i, 1);
              }
            }
          }
        }
      },
      //每一食品的个数
      find_kind_count(m) {
        let sum = null;
        for (let i in this.buy_specs_arr) {
          if (this.buy_specs_arr[i].pro.name === m) {
            sum += this.buy_specs_arr[i].count;
          }
        }
        return sum
      },
      //加入购物车
      in_cart() {
        this.ballFlag = !this.ballFlag
        this.$refs.cart_icon_container.style.animationName = 'bounceIn';
        this.$refs.cart_icon_container.style.animationDuration = '1.2s';
        this.$refs.cart_icon_container.style.animationDelay = '0.7s';
        setTimeout(() => {
          this.$refs.cart_icon_container.style.animationName = '';
          this.$refs.cart_icon_container.style.animationDuration = '';
        }, 2000)
        if (this.buy_specs_arr.length === 0) {
          let obj = {pro: this.kindSpec, count: 1, pro1: this.$store.state.shoppro1};
          this.buy_specs_arr.push(obj)
        } else {
          let obj = {pro: this.kindSpec, count: 1, pro1: this.$store.state.shoppro1};
          let isHas = this.buy_specs_arr.some((v) => {
            return v.pro._id === this.kindSpec._id;
          });
          if (!isHas) {
            this.buy_specs_arr.push(obj)
          } else {
            const arr = this.buy_specs_arr.filter((v) => {
              return v.pro._id === this.kindSpec._id
            })
            arr[0].count++
          }
        }
        this.if_show_gray = false;
        this.if_show_cart = false;
        //向后抬
        // [{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}]

        // let datapro = {
        //   attrs: this.datainfor.attrs,
        //   extra: {},
        //   id: this.kindSpec.food_id,
        //   name: this.kindSpec.name,
        //   packing_fee: this.kindSpec.packing_fee,
        //   price: this.kindSpec.price,
        //   quantity: 1,
        //   sku_id: this.kindSpec.sku_id,
        //   specs: this.buy_specs_name,
        //   stock: this.kindSpec.stock
        // }
        //
        // this.dataArr.push(datapro)
        // console.log(this.dataArr, this.$store.state.shopId, this.$store.state.weizhi, '测试数据')
        // console.log(this.show_spec_money)
        // //  向后台发起加入购物车
        // Vue.axios.post('https://elm.cangdu.org/v1/carts/checkout', {
        //   restaurant_id: this.$store.state.shopId,
        //   geohash: this.$store.state.weizhi,
        //   entities: qs.stringify(this.dataArr)
        // }).then((res) => {
        //   console.log(res.data,11111111);
        // })
      },
      //展示规格价格
      show_money(i, id, specs_name) {
        //食物种类名字
        this.buy_specs_kind = i.name;
        //ID
        this.kindSpec = i;
        //特殊食物的价格
        this.show_spec_money = i.price;
        //特殊食物的名字
        this.buy_specs_name = specs_name;
        for (let i in this.$refs.uuu) {
          this.$refs.uuu[i].style.borderColor = ''
        }
        this.$refs.uuu[id].style.borderColor = 'blue';
      },
      zp_delete_cart() {
        this.if_show_gray = false;
        this.if_show_cart = false
      },
      if_show_cart1() {
        this.if_show_cart = !this.if_show_cart;
        this.if_show_gray = false;
      },
      //点击规格
      zp_buy_shop(i, name, pro, e) {
        this.kindSpec = i[0];
        this.datainfor = pro;
        this.show_spec_money = i[0].price;
        //数组存放特殊食物。如果没点击，默认选取第一个name
        this.spec_food_array = i;
        this.buy_cart_name = name;
        this.if_show_cart = !this.if_show_cart;
        this.if_show_gray = true;
        let obj = {name: name, count: 0, arr: []};
        this.kind_price.push(obj);
      },
      ifNull(i) {
        if (i == null) {
          return ''
        } else {
          return i.image_text
        }
      },
      ifspecialfood(i) {
        if (i.length === 1) {
          return '+'
        } else {
          return '选规格'
        }
      },
    },

    created() {
      Vue.axios.get('https://elm.cangdu.org/shopping/getcategory/' + this.$store.state.shopId + '').then((res) => {
        this.foodPro = res.data.category_list;
        this.loadload = false
        console.log(res.data, 111)
      });
      this.buy_specs_arr = this.$store.state.buy_specs_arr;

    }

  }
</script>

<style scoped>
  .aa{
    width: 100%;
    height: 100%;
  }
  .ball {
    background-color: #ff461d;
    line-height: .7rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    min-width: .7rem;
    height: .7rem;
    font-size: .5rem;
    color: #fff;
    z-index: 1000;
    position: fixed;
    left: 9rem;
    top: 19rem;
    animate-delay: 1s;
  }

  .vvv {
    width: .9rem !important;
    height: .9rem !important;
    border-radius: 50% !important;
    z-index: 5;
  }

  .headzujian {
    position: fixed;
    top: 0;
    z-index: 100;
  }

  .hehehe {

    opacity: 0;
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
    z-index: 10;
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
    margin-left: 5.4rem;
    margin-top: 2.3rem;
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
    /*animation-name:bounce ;*/
    /*animation-duration: 2s;*/

  }

  .buy_cart_container {

    position: fixed;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
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

  .category_num1 {
    opacity: 1;
  }

  .food_container {
    width: 100%;
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
    height: 20%;
    overflow: hidden;
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
    margin-top: 2rem;
    display: flex;
    background-color: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
  }

  .shop_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 7.5rem;
    right: 0;
    left: 0;
  }

  .menu_right {
    width: 12.2rem;
  }
</style>
