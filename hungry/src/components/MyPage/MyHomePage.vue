<template>
  <div class="MyHomePage1">
    <!--头部-->
    <div class="MyHomePage_header">
      <div class="Return" @click="$router.back(-1)"></div>
      <div class="Mynav"><p>我的</p></div>
    </div>

    <!--中间内容-->
    <div class="PersonalData">
      <!--用户信息页-->
      <div class="PersonalData_Header" @click="PersonalData_Header">
        <div class="PersonalData_Header_left">

          <div class="HeadPortrait"><img :src="HeadPortrait" alt=""></div>

          <div class="HeadPortrait_right">
            <h3 class="UserName">{{UserName}}</h3>
            <p class="CellPhoneNumber"><span class="CellPhoneNumber_shouji"></span>{{Phone}}</p>
          </div>
        </div>
        <div class="PersonalData_Header_right">
          <span>></span>
        </div>
        <div class="empty"></div>
      </div>
      <!--我的余额,我的优惠,我的积分-->
      <ul class="PersonalData_tobody">
        <li @click="balance1"><div class="PersonalData_tobody_padding"><p><span class="numerical balance">{{MyBalance}}</span>元</p></div><div class="PersonalData_tobody_bottom">我的余额</div></li>
        <li @click="Discount"><div class="PersonalData_tobody_padding"><p><span class="numerical Discount">{{GiftAmount}}</span>个</p></div><div class="PersonalData_tobody_bottom">我的优惠</div></li>
        <li @click="integral"><div class="PersonalData_tobody_padding"><p><span class="numerical integral">{{IsActive}}</span>分</p></div><div class="PersonalData_tobody_bottom">我的积分</div></li>
      </ul>

      <!--三个列表-->
      <div class="ThreeLists">
        <div class="ThreeLists_nr1" @click="TheOrderPage">
          <span class="ThreeLists_logo ThreeLists_balance"></span>
          <div class="ThreeLists_nr_left"><p>我的订单</p></div>
          <div class="ThreeLists_nr_right">></div>
          <div class="empty"></div>
        </div>
        <div class="ThreeLists_nr1"  @click="jifenshangcheng">
          <span class="ThreeLists_logo ThreeLists_Discount"></span>
          <div class="ThreeLists_nr_left"><p >积分商场</p></div>
          <div class="ThreeLists_nr_right">></div>
          <div class="empty"></div>
        </div>

        <div class="ThreeLists_nr1" @click="MembershipCard">

        <div class="ThreeLists_nr1" @click="member">

          <span class="ThreeLists_logo ThreeLists_integral"></span>
          <div class="ThreeLists_nr_left" ><p>饿了么会员卡</p></div>
          <div class="ThreeLists_nr_right">></div>
          <div class="empty"></div>
        </div>
      </div>

      <!--两个列表-->
      <div class="ThreeLists">
        <div class="ThreeLists_nr1" @click="serviceCenter">
          <span class="ThreeLists_logo ThreeLists_service"></span>
          <div class="ThreeLists_nr_left"><p>服务中心</p></div>
          <div class="ThreeLists_nr_right">></div>
          <div class="empty"></div>
        </div>
        <div class="ThreeLists_nr1" @click="DownloadAPP">
          <span class="ThreeLists_logo ThreeLists_download"></span>
          <div class="ThreeLists_nr_left"><p>下载饿了么APP</p></div>
          <div class="ThreeLists_nr_right">></div>
          <div class="empty"></div>
        </div>
      </div>
      </div>
    </div>



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
  import Vue from 'vue'
  export default {
    name: "MyHomePage1",
    data(){
      return {
        NoLogiIn:'',//判断是否登陆
        UserName:'登陆或注册',//存储用户名字
        Phone:'暂无绑定手机号',//存储用户电话
        HeadPortrait:'',//存储用户头像
        MyBalance:'0.00',//我的余额
        GiftAmount:'0',//我的优惠
        IsActive:'0',//我的积分
      }
    },
    created(){
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
        this.NoLogiIn=res.data.message;//判断是否登陆
        //此时用户没有登陆不进行任何操作
        if(res.data.message==='通过session获取用户信息失败'){
          this.HeadPortrait=require('../../assets/yonghu.jpg');
        }else { //已经登陆
            if(this.$store.state.UserName11==''){
              // console.log("123456");
              this.UserName=res.data.username;//修改用户名
            }else {
              this.UserName=this.$store.state.UserName11;
            }

          //判断是手机号是否存在
          if (res.data.point===0){

          } else {
            this.Phone=res.data.point;
          }
          this.HeadPortrait='//elm.cangdu.org/img/'+res.data.avatar;//修改用户头像
          this.MyBalance=res.data.balance.toFixed(2);//显示余额
          this.GiftAmount=res.data.gift_amount;//我的优惠
          this.IsActive=res.data.is_active;//我的积分
        }
      })
    },
    methods:{
      //用户信息的点击事件
      PersonalData_Header(){
        if(this.NoLogiIn==='通过session获取用户信息失败'){
          this.$router.push({path:'publicheader'});
          this.NoLogiIn='';
        }else {
          this.$router.push({path:'accountinformation'});
        }
      },

      //我的余额点击事件
      balance1(){
        this.$router.push({path:'balance'});
      },
      //我的优惠点击事件
      Discount(){

        this.$router.push({path:'discount'});//王义豪写的空白页面

        // this.$router.push({path:'IDiscount'});//曾光写的优惠页面
      },
      //我的积分点击事件
      integral(){
        this.$router.push({path:'integral'});
      },
      //我的会员卡页面
      MembershipCard(){
        this.$router.push({path:'basice'});
      },

      //我的订单点击事件
      TheOrderPage(){
        this.$router.push({path:'theorderoage'})
      },
      //积分商场点击事件
      IntegralMall(){
        this.$router.push({path:'integralstore'})
      },


      //服务中心点击事件
      serviceCenter(){
        this.$router.push({path:'serviceCenter'})
      },
      //下载饿了么APP的点击事件
      DownloadAPP(){
        this.$router.push({path:'downloadapp'})
      },


      //底部按钮按钮的点击事件
      TakeOutFood(){
        this.$router.push({path:'zp_toMyHome'})
      },
      //底部搜索按钮的点击事件
      SearchButton(){
        this.$router.push({path:'seek'});
      },
      //底部订单按钮的点击事件
      OrderButton(){
        this.$router.push({path:'theorderoage'});
      },
      //底部我的按钮的点击事件
      MyInformation(){
        this.$router.push({path:'myhomepage'})
      },
      //积分商城按钮点击事件
      jifenshangcheng(){
        this.$router.push({path:'IntearalStore'})
        console.log(666)
      },
      //会员卡跳转
      member(){
        this.$router.push({path:'basice'})
      }
    },
    components:{

    },
  }
</script>

<style scoped>
  .MyHomePage1{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  /*头部css样式*/
  .MyHomePage_header{
    width: 100%;
    height: 1.95rem;
    background-color: #3190E8;
    color: white;
    font-weight: 700;
    position:relative;
  }
  .MyHomePage_header>div{
    display: inline-block;
  }
  .Return{
    width: 1rem;
    height: 100%;
    line-height: 1.95rem;
    position: absolute;
    left: .2rem;
    background: url("../../assets/fanhui.png") no-repeat center center;
    background-size: 100% 55%;
  }
  .Mynav{
    width: 100%;
    line-height: 1.95rem;
    display: inline-block;
    text-align: center;
    font-size: .8rem;
  }

  /*中间内容*/
  .empty{
    clear: both;
  }
  .PersonalData_Header{
    width: 100%;
    background-color: #3190E8;
    padding: 4.1% 4%;
  }
  .PersonalData_Header_left{
    float: left;
    font-size: 0;
  }
  .PersonalData_Header_right{
    color: white;
    float: right;
    line-height: 2.5rem;
    font-size: .8rem;
  }
  .HeadPortrait{
    width: 2.5rem;
    height: 2.5rem;
    /*background: url("../../assets/yonghu.png") no-repeat center 0rem;*/
    /*background-size: 110% 110%;*/
    border-radius: 50%;
    display: inline-block;
    margin-right: .2rem;
  }
  .HeadPortrait>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .UserName{
    margin-top: 0;
    margin-bottom: .2rem;
    font-size: .8rem;
    color: white;
    font-weight: 700;
  }
  .CellPhoneNumber{
    font-size: .57333rem;
    color: white;
    line-height:0.5rem;
    margin: 0;
  }
  .CellPhoneNumber_shouji{
    display: inline-block;
    width: .7rem;
    height: 0.7rem;
    background: url("../../assets/shouji.png") no-repeat center center;
    background-size: 100% 100%;
  }
  .HeadPortrait_right{
    display: inline-block;
    line-height: 2rem;
    float: right;
    top: -0.4rem;
    margin-left: .2rem;
  }

  /*我余额.优惠券.积分*/
  .PersonalData_tobody{
    width: 100%;
    list-style: none;
    font-size: 0;
    margin-bottom: .4rem;
  }
  .PersonalData_tobody>li{
    display: inline-block;
    width: 33.12%;
    text-align: center;
    background-color: white;
    font-size: 0.5733rem;
    font-weight: 400;
    color: #666666;
  }
  .PersonalData_tobody_padding{
    padding-top: .45rem;
    margin-bottom: 0.2rem;
  }
  .PersonalData_tobody_padding>p{
    margin: 0;
  }
  .PersonalData_tobody>li:nth-child(2){
    margin: 0 .27%;
  }
  .numerical{
    font-size: 1.2rem;
    font-weight: 700;
  }
  /*余额*/
  .balance{
    color: #f90;
  }
  /*优惠*/
  .Discount{
    color: #ff5f3e;
  }
  /*积分*/
  .integral{
    color: #6ac20b;
  }
  .PersonalData_tobody_bottom{
    padding-bottom: .45rem;
  }


  /*三个列表*/
  .ThreeLists{
    width: 100%;
    background-color: blueviolet;
    margin-bottom: .4rem;
  }
  .ThreeLists_nr1{
    padding: .4rem 0;
    width: 100%;
    background-color: white;
    font-size: .7rem;
    color: #333;
    position: relative;
    border-bottom: 1px solid #F5F5F5;
  }
  .ThreeLists_logo{
    width: .7rem;
    height: .7rem;
    position: absolute;
    left: .5rem;
    top: .6rem;
  }
  .ThreeLists_nr_left{
    float: left;
    padding-left: 1.6rem;
  }
  .ThreeLists_nr_left>p{
    margin: 0;
  }
  .ThreeLists_nr_right{
    float: right;
    padding-right: 0.5rem;
    color: rgba(187,187,187,1);
  }
  /*订单*/
  .ThreeLists_balance{
    background: url("../../assets/wodedingdan.png") no-repeat center center;
    background-size: 100% 100%;
  }
  /*积分商场*/
  .ThreeLists_Discount{
    background: url("../../assets/shangcheng.png") no-repeat center center;
    background-size: 100% 100%;
  }
  /*饿了么会员卡*/
  .ThreeLists_integral{
    background: url("../../assets/huangguan.png") no-repeat center center;
    background-size: 100% 100%;
  }
  /*服务中心*/
  .ThreeLists_service{
    background: url("../../assets/fuwu.png") no-repeat center center;
    background-size: 100% 100%;
  }
  /*下载*/
  .ThreeLists_download{
    background: url("../../assets/eleme.png") no-repeat center center;
    background-size: 100% 100%;
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
    background: url("../../assets/bottom1.png") no-repeat center center;
    background-size: 110% 110%;
  }
  .bottom_logo_span2{
    background: url("../../assets/bottom2.png") no-repeat center center;
    background-size: 110% 110%;
  }
  .bottom_logo_span3{
    background: url("../../assets/bottom3.png") no-repeat center center;
    background-size: 110% 80%;
  }
  .bottom_logo_span4{
    background: url("../../assets/bottom44.png") no-repeat center center;
    background-size: 100% 100%;
  }

</style>
