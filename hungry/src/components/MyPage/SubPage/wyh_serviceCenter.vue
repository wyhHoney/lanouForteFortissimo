<template>
    <!--服务中心-->
    <div class="ServiceCenter">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <!--在线客服-->
      <div class="CustomerService">
        <div class="CustomerService_lift" @click="Service_lift"><img src="../../../assets/kefu1.png" alt="" class="CustomerService_span1"><p>在线客服</p></div>
        <div class="CustomerService_right" @click="Service_right"><img src="../../../assets/dianhua.png" alt="" class="CustomerService_span2"><p>在线客服</p></div>
        <p class="empty"></p>
      </div>
      <div class="IssueList">
        <h4>热门问题</h4>
        <ul>
          <li class="clearfix" v-for="pie in GetData" @click="InDetail(pie)"><span>{{pie.Issue}}</span> <img src="../../../assets/jiantou.png" alt=""></li>
        </ul>
      </div>
      <!--弹出提示框-->
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    import Vue from 'vue'
    import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "wyh_serviceCenter",
        data(){
          return {
            PageTitle:'服务中心',
            routejump:'myhomepage',
            Wissue:[],//问题数组
            Dissue:[],//答案数组
            GetData:[],
            fanhui:'serviceCenter',
            showcom:'',
            promptContent:'暂不支持此功能',//提示框内容
          }
        },
        components:{
          PublicHeader,
          PublicPrompt
        },
        methods:{
          //左边在线客服点击事件
          Service_lift(){
              this.showcom=true;
              this.promptContent='亲需要您的投资请客服噢!';
              // console.log('点击了左边的在线客服');
          },
          //右边在线客服点击事件
          Service_right(){
            this.showcom=true;
            this.promptContent='亲需要您的投资请客服噢!';
            // console.log('点击了右边的在线客服');
          },
          InDetail(data){
            //通过点击事件完成路由跳转
            this.$router.push({path:'servicecenterwithin',query:{Title:data.Issue,Description:data.Answer}});
          },
          getMsg(data){
            this.showcom=data;
          }
        },
        created(){
          Vue.axios.get("https://elm.cangdu.org/v3/profile/explain").then((res)=>{
            this.Wissue.push(res.data.supervipCaption);
            this.Dissue.push(res.data.supervipContent);//超级会员权益说明
            this.Wissue.push(res.data.signCaption);
            this.Dissue.push(res.data.signContentl);//签到规则
            this.Wissue.push(res.data.rankCaption);
            this.Dissue.push(res.data.rankContent);//用户等级说明
            this.Wissue.push(res.data.pointtextCaption);
            this.Dissue.push(res.data.pointtextContent);//积分问题
            this.Wissue.push(res.data.phototutorialCaption);
            this.Dissue.push(res.data.phototutorialContent);//教我拍大片
            this.Wissue.push(res.data.paymentCaption);
            this.Dissue.push(res.data.paymentContent);//支付问题
            this.Wissue.push(res.data.otherCaption);
            this.Dissue.push(res.data.otherContent);//其他问题
            this.Wissue.push(res.data.ontimeCaption);
            this.Dissue.push(res.data.ontimeContent);//准时到达问题
            this.Wissue.push(res.data.memberTimesCaption);
            this.Dissue.push(res.data.memberTimesContent);//会员说明
            this.Wissue.push(res.data.memberPartCutCaption);
            this.Dissue.push(res.data.memberPartCutContent);//会员说明
            this.Wissue.push(res.data.memberFullCutCaption);
            this.Dissue.push(res.data.memberFullCutContent);//会员说明
            this.Wissue.push(res.data.memberCaption);
            this.Dissue.push(res.data.memberContent);//会员说明
            this.Wissue.push(res.data.hongbaoCaption);
            this.Dissue.push(res.data.hongbaoContent);//红包问题
            this.Wissue.push(res.data.freshmanCaption);
            this.Dissue.push(res.data.freshmanContent);//活动细则
            this.Wissue.push(res.data.forgotCaption);
            this.Dissue.push(res.data.forgotContent);//补签规则
            this.Wissue.push(res.data.discountCaption);
            this.Dissue.push(res.data.discountContent);//优惠说明
            this.Wissue.push(res.data.disclaimerCaption);
            this.Dissue.push(res.data.disclaimerContent);//免责说明
            this.Wissue.push(res.data.couponCaption);
            this.Dissue.push(res.data.couponContent);//代金券说明
            this.Wissue.push(res.data.businessCaption);
            this.Dissue.push(res.data.businessContent);//合作商务
            this.Wissue.push(res.data.balanceCaption);
            this.Dissue.push(res.data.balanceContent);//余额问题
            this.Wissue.push(res.data.awesomeRestaurantCaption);
            this.Dissue.push(res.data.awesomeRestaurantContent);//匿名购买
            this.Wissue.push(res.data.activityCaption);
            this.Dissue.push(res.data.activityContent);//活动问题
            for (let i=0; i<=this.Wissue.length;i++){
              let Obj={};
              Obj.Issue=this.Wissue[i];
              Obj.Answer=this.Dissue[i];
              this.GetData.push(Obj);
            }
            // console.log(res.data)

          })
        }

    }
</script>

<style scoped>
  .ServiceCenter{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  .CustomerService{
    width: 100%;
    font-size: 0;
  }
  .CustomerService>p{
   margin: 0;
  }
  .empty{
    clear: both;
  }
  .CustomerService_lift{
    float: left;
  }
  .CustomerService_right{
    float: right;
  }
  .CustomerService>div{
    width: 49.8%;
    display: inline-block;
    background-color: #FFFFFF;
    text-align: center;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }
  .CustomerService>div>img{
    width: 1rem;
    height: 1rem;
    display: inline-block;
  }
  .CustomerService>div>p{
    margin-bottom: 0;
    margin-top: .4rem;
    font-size: .6rem;
    color: #666;
  }
  .IssueList{
    padding: 0 .7rem;
    background-color: #F5F5F5;
  }
  .IssueList>h4{
    font-size: .75rem;
    margin: 0;
    color: #333;
    line-height: 3rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .IssueList>ul{
    margin: 0;
    list-style: none;

  }
  .IssueList>ul>li{
    font-size: .6rem;
    line-height: 2rem;
    border: 1px solid #f5f5f5;
  }
  .IssueList>ul>li:last-of-type{
    display: none;
  }
  .IssueList>ul>li>span{
    display: inline-block;
    float: left;
  }
  .IssueList>ul>li>img{
    width: .7rem;
    height: .7rem;
    float: right;
    position: relative;
    top: .55rem;
  }

</style>
