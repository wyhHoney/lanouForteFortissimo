<template>
  <!--推荐有奖-->
  <div class="Recommend">
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <img src="../../../wyhImg/activity.png" alt="">
    <div class="Recommend_nr">
      <div @click="Clickdakai"><img src="../../../wyhImg/weixin.png" alt=""><p>邀请微信好友</p></div>
      <div @click="Clickdakai"><img src="../../../wyhImg/qq.png" alt=""><p>邀请QQ好友</p></div>
      <div @click="Clickdakai"><img src="../../../wyhImg/fenxiang.png" alt=""><p>面对面邀请</p></div>
    </div>
    <div class="Recommend_nr1">
      <div><p>累计收入</p><p><span>0</span>元</p></div>
      <div><p>成功邀请</p><p><span>0</span>人</p></div>
    </div>
    <p>-收益明细-</p>
    <div class="bottom_p">
      <img src="../../../wyhImg/qianbao.png" alt="">
      <p>还不赶紧去邀请好友</p>
    </div>
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
  import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
  export default {
    name: "wyh_Recommend",
    data() {
      return {
        PageTitle: '推荐有奖',
        routejump: 'discount',
        showcom:'',
        promptContent:'请在饿了么APP中打开',//提示框内容
      }
    },
    components:{
      PublicHeader,
      PublicPrompt,
    },
    methods:{
      Clickdakai(){
        //弹出提示框
        this.showcom=true;
      },
      getMsg(data){
        this.showcom=data;
      }
    },

  }
</script>

<style scoped>
  .Recommend {
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  .Recommend>img{
    width: 100%;
  }
  .Recommend_nr{
    width: 100%;
    font-size: 0;
    background-color: white;
    margin-top: .3rem;
    padding: 1rem 0;
  }
  .Recommend_nr>div{
    width: 33%;
    display: inline-block;
    font-size: .5rem;
    color: #333;
    text-align: center;
  }
  .Recommend_nr>div>img{
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
  }
  .Recommend_nr>div>p{
    margin-bottom: 0;
    margin-top: .2rem;
  }
  .Recommend_nr1{
    width: 100%;
    margin-top: 1rem;
    font-size: 0;
    color: #666;
  }
  .Recommend_nr1>div{
    width: 50%;
    font-size: .5rem;
    display: inline-block;
    text-align: center;
  }
  .Recommend_nr1>div:nth-child(1){
    border-right: 1px solid #DDDDDD;
  }
  .Recommend_nr1>div>p{
    margin: 0;
    color: #666;
  }
  .Recommend_nr1>div>p:nth-child(2)>span{
     font-size: .8rem;
     color: #ff5633;
     font-weight: 700;
   }
  .Recommend_nr1>div:nth-child(2)>p:nth-child(2)>span{
    font-size: .8rem;
    color: #666;
    font-weight: 700;
  }
  .Recommend>p{
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    margin-top: 1rem;
    font-size: .5rem;
    color: #666;
  }
  .bottom_p>img{
    width: 1.3rem;
    margin-top:1rem;
    margin-bottom: .3rem;
  }
  .bottom_p{
    width: 100%;
    text-align: center;
    font-size: .5rem;
    color: #666;
    margin: 0;
  }
</style>
