<template>
  <!--我的积分-->
  <div class="My_integral">
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

    <!--内容部分-->
    <div class="CurrentBalance">
      <div class="CurrentBalance_nr">
        <div class="CurrentBalance_header">
          <p class="CurrentBalance_header_left">当前积分</p>
          <p class="CurrentBalance_header_right" @click="balanceProblem"><img src="../../../assets/wenhao.png" alt="">积分说明</p>
          <div class="empty"></div>
        </div>
        <div class="CurrentBalance_header_balance"><p><span>0</span>分</p></div>
        <div class="CurrentBalance_header_button" @click="Conversion">积分兑换商品</div>
      </div>
    </div>


    <!--交易明细-->
    <div class="detail">
      <p class="detail_p">最近30天积分记录</p>
    </div>
    <!--详细记录-->
    <div class="record">
      <img src="" alt="">
      <p>最近30天无积分记录</p>
      <p class="record_p">快去下单赚取大量积分吧</p>
    </div>

    <!--引入提示框-->
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
  </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    import Vue from 'vue'
    import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
    let totalVue=new Vue();
    export default {
        name: "wyh_Integral",
        data(){
          return {
            PageTitle:'我的积分',
            routejump:'myhomepage',
            Integral:'integral', //需要返回的路由
            DescriptionTitle:'',//积分说明标题
            IntegralDescription:'',//积分说明信息
            showcom:'',
            promptContent:'快去下单赚取大量积分吧',//提示框内容
          }
        },
        mounted(){
          totalVue.$emit("MonitorHeaders",this.PageTitle);
        },
        methods:{
          balanceProblem(){
            //发起axios请求获取积分说明信息
            Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
              this.DescriptionTitle=res.data.pointtextCaption;
              this.IntegralDescription=res.data.pointtextContent;
              // console.log(res.data);

              //通过点击事件完成路由跳转
              this.$router.push({path:'integralproblems'});
            });
          },
          //点击兑换积分
          Conversion(){
            //弹出提示框
            this.showcom=true;

          },
          getMsg(data){
            this.showcom=data;
          }
        },
        components:{
          PublicHeader,
          PublicPrompt,
        }
    }
</script>

<style scoped>
  .My_integral{
    width: 100%;
    height: 100%;
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
  .CurrentBalance_header_right>img{
    width: .6rem;
    height: .6rem;
    display: inline-block;
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
    background-color: #FE6D47;
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
    margin-bottom: 0;
  }
  .record_p{
    margin-top: .5rem;
    margin-bottom: 0;
    font-size: .5rem !important;
    color: #999 !important;
  }
</style>
