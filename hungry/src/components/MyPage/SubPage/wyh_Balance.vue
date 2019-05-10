<template>
  <!--余额-->
  <div class="My_Balance">
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

    <!--内容部分-->
    <div class="CurrentBalance">
      <div class="CurrentBalance_nr">
        <div class="CurrentBalance_header">
         <p class="CurrentBalance_header_left">当前余额</p>
         <p class="CurrentBalance_header_right" @click="balanceProblem"><span></span>余额说明</p>
          <div class="empty"></div>
       </div>
       <div class="CurrentBalance_header_balance"><p><span>0.00</span>元</p></div>
       <button class="CurrentBalance_header_button">提现</button>
      </div>
    </div>


    <!--交易明细-->
    <div class="detail">
      <p class="detail_p">交易明细</p>
    </div>
    <!--详细记录-->
    <div class="record">
      <img src="" alt="">
      <p>暂无明细记录</p>
    </div>

  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
  import Vue from 'vue'
    export default {
        name: "wyh_Balance",
        data(){
          return {
            PageTitle:'我的余额',
            routejump:'myhomepage',
            Balance:'balance',//在里面点击需要返回的页面
            DescriptionTitle:'',//积分说明标题
            IntegralDescription:''//积分说明信息
          }
        },
        methods:{
          balanceProblem(){
            //发起axios请求获取积分说明信息
            Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
              this.DescriptionTitle=res.data.balanceCaption;
              this.IntegralDescription=res.data.paymentContent;
              // console.log(res.data);

              //通过点击事件完成路由跳转
              this.$router.push({path:'balanceProblem',query:{Title:this.DescriptionTitle,Description:this.IntegralDescription,hopsroute:this.Balance}});
            });
          }
        },
      components:{
        PublicHeader
      }
    }
</script>

<style scoped>
.My_Balance{
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #F5F5F5;
}
.empty{
  clear: both;
}
  .CurrentBalance{
    width: 100%;
    padding: .3rem;
    color: #333;
    font-weight: 400;
    font-size: 1rem;
    background-color: #3190E8;
    box-sizing: border-box;
  }
  .CurrentBalance_nr{
    height: 100%;
    background-color: white;
    box-sizing: border-box;
    padding: .4rem;
    border-radius: .15rem;
  }
  .CurrentBalance_header{
    width: 100%;
    font-size: .55rem;
  }
  .CurrentBalance_header_left{
    float: left;
    margin: 0;
  }
  .CurrentBalance_header_right{
    float:right;
    color: #3190e8;
    margin: 0;
  }
  .CurrentBalance_header_right>span{
    width: .6rem;
    height: .6rem;
    display: inline-block;
    background: url("../../../assets/wenhao.png") no-repeat center center;
    background-size: 110% 110%;
    margin-right: .2rem;
  }
  .CurrentBalance_header_balance{
    width: 100%;
  }
  .CurrentBalance_header_balance>p>span{
    font-size: 1.8rem;
    color: #333;
  }
  .CurrentBalance_header_balance>p{
    font-size: 0.7rem;
    margin: 0;
  }
  .CurrentBalance_header_button{
    width: 100%;
    height: 2rem;
    font-size: .8rem;
    color: #fff;
    border-radius: .15rem;
    line-height: 2rem;
    margin-top: 1rem;
    text-align: center;
    background-color: #CCC;
    border: 0;
  }
  /*交易明细*/
  .detail{
    width: 100%;
    /*height: 100%;*/
    background-color: #F5F5F5;
  }
  .detail>p{
    font-size: .6rem;
    color: #999;
    line-height: 2rem;
    padding-left: .5rem;
    display: inline-block;
    margin: 0;
  }
  /*详细记录*/
  .record{
    text-align: center;
    margin-top: 1rem;
    font-weight: 400;
  }
  .record>p{
    margin-top: .5rem;
    font-size: .7rem;
    color: #666;
    margin: 0;
  }
</style>
