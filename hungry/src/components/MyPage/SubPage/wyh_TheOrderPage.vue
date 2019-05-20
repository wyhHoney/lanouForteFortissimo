<template>
  <div class="TheOrderPage">
      <!--头部-->
    <loading v-if="load"></loading>
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <!--内容-->
      <ul class="TheOrderPage_nr">
        <li class="TheOrderPage_nr_li clearfix" v-for="(pie,index) in dataArr" @click="AnotherList(pie)">
          <img :src="'//elm.cangdu.org/img/'+pie.pro1.image_path" alt="" class="IndentLogo">
          <div class="TheOrderPage_nr_li_div">
            <h4>{{pie.pro1.name}} <img src="../../../assets/jiantou.png" alt=""><span>等待支付</span></h4>
            <!--<p class="shijian">{{pie.formatted_created_at}}</p>-->
            <p class="jiage">{{pie.pro.name}}-{{pie.count}}<span>￥{{$store.state.allPrice}}.00</span></p>
            <span class="zhifu">去支付(还剩{{Minute}}分{{Second}}秒)</span>
          </div>
        </li>
      </ul>


      <!--底部按钮按钮组-->
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

      <!--弹出提示框-->
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'//引入头部组件
  import Vue from 'vue'
  import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'
  import Loading from "../../zpcomponent/Loading";
  //引入提示框组件
  export default {
    name: "wyh_TheOrderPage",
    data() {
      return {
        PageTitle: '订单列表',
        routejump: 'myhomepage',
        TheOrderList: [],//请求的订单列表数据
        GoodsInDetail: [],//存储商品详细信息
        Second: 60,//秒
        Minute: 15,//分
        showcom: '',//提示框显示隐藏
        promptContent: '',//提示框内容
        dataArr: [],
        load:true
      }
    },
    components: {
      Loading,
      PublicHeader,
      PublicPrompt
    },
    created() {
      this.dataArr = this.$store.state.buy_specs_arr;
      // console.log(this.dataArr)
      //发起请求从后台提取订单数据
      // Vue.axios.get("https://elm.cangdu.org/v1/user").then((res) => {
      //   Vue.axios.get("https://elm.cangdu.org/bos/v2/users/" + res.data.id + "/orders?limit=1&offset=0").then((res) => {
      //     console.log(res.data);
      //     this.TheOrderList = res.data;
          this.load=false
      //   });
      // });

      //开启计时器
      let countdown = setInterval(() => {
        if (this.Second !== 0) {
          this.Second--;
          if(this.Second===0&&this.Minute!==0){
            this.Second = 60;
            this.Minute--;
          }
        }
        if (this.Minute <= 0&&this.Second===0) {
          clearInterval(countdown);
          //弹出提示框
          this.promptContent = '支付超时';
          this.showcom = true;
        }
      }, 1000)
    },
    methods: {
      //底部按钮按钮的点击事件
      TakeOutFood() {
        this.$router.push({path: 'zp_toMyHome'});
      },
      //底部搜索按钮的点击事件
      SearchButton() {
        this.$router.push({path: 'seek'})
      },
      //底部订单按钮的点击事件
      OrderButton() {
        this.$router.push({path: 'theorderoage'});
      },
      //底部我的按钮的点击事件
      MyInformation() {
        this.$router.push({path: 'myhomepage'})
      },
      //接受提示框返回的数据
      getMsg(data) {
        this.showcom = data;
      },

      //点击跳转再来一单页面
      AnotherList(data) {
        this.$router.push({path: 'anotherlist', query: {GetDate: data}})
      },
    }
  }
</script>

<style scoped>
  .TheOrderPage {
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }

  .TheOrderPage_nr {
    margin: 0;
    font-size: 0;
    list-style: none;
    background-color: white;
  }

  .TheOrderPage_nr_li {
    font-size: .7rem;
    border-bottom: 1px solid #F5F5F5;
  }

  .TheOrderPage_nr_li:last-of-type {
    margin-bottom: 2rem;
  }

  .IndentLogo {
    width: 3rem;
    height: 3rem;
    background-color: red;
    display: inline-block;
    font-size: .6rem;
    float: left;
    margin-top: .5rem;
    margin-left: .5rem;
  }

  .TheOrderPage_nr_li_div {
    width: 76%;
    float: right;
    padding-right: .4rem;
  }

  .TheOrderPage_nr_li_div > h4 {
    font-size: .9rem;
    margin-bottom: 0;
  }

  .TheOrderPage_nr_li_div > p {
    margin: 0;
    color: #A5B6BC;
  }

  .TheOrderPage_nr_li_div > h4 > img {
    display: inline-block;
    width: .6rem;
    height: 1.2rem;
    padding: .4rem 0;
  }

  .TheOrderPage_nr_li_div > h4 > span {
    float: right;
    font-size: .7rem;
    font-weight: 500;
  }

  .shijian {
    font-size: .6rem;
    padding-bottom: .4rem;
    border-bottom: 1px solid #F5F5F5;
  }

  .jiage {
    font-size: .7rem;
    color: #697279;
    line-height: 2.5rem;
    border-bottom: 1px solid #F5F5F5;
  }

  .jiage > span {
    float: right;
    font-weight: 700;
    color: #FF620E;
  }

  .zhifu {
    color: #FF620E;
    float: right;
    text-align: right;
    margin: .5rem 0;
    padding: .3rem .2rem;
    font-size: .6rem;
    border-radius: 3px;
    border: 1px solid #FF620E;
  }

  /*底部导航样式*/
  .BottomPart {
    width: 100%;
    background-color: white;
    font-size: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .BottomPart > div {
    box-sizing: border-box;
    padding-top: .3rem;
    width: 25%;
    display: inline-block;
    text-align: center;
    font-size: .45rem;
    color: #666666;
    margin-bottom: 0;
  }

  .BottomPart > div > p {
    margin-bottom: .2rem;
  }

  .bottom_logo {
    width: .8rem;
    height: .8rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: .3rem;

  }

  .bottom_logo_span1 {
    background: url("../../../assets/bottom1.png") no-repeat center center;
    background-size: 110% 110%;
  }

  .bottom_logo_span2 {
    background: url("../../../assets/bottom2.png") no-repeat center center;
    background-size: 110% 110%;
  }

  .bottom_logo_span3 {
    background: url("../../../assets/bottom33.png") no-repeat center center;
    background-size: 110% 80%;
  }

  .bottom_logo_span4 {
    background: url("../../../assets/bottom4.png") no-repeat center center;
    background-size: 100% 100%;
  }
</style>
