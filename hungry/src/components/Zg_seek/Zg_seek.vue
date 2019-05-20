<template>
  <div class="Seek">
    <!--头-->
    <header>
      <div class="Return" @click="$router.back(-1)"></div>
      <div class="Mynav" @click="ClickMynav"><p>搜索</p></div>
    </header>

    <!--内容-->
    <div class="Seek_nr clearfix">
      <input type="text" placeholder="请输入商家或美食名称" v-model="Search_val">
      <div @click="ClickSubmit">提交</div>
      <span v-if="Show_wrong" @click="ClickWrong"></span>
    </div>
    <!--搜索历史-->
    <div class="Seek_history" v-if="Show_history">
      <p class="history_p">搜索历史</p>
      <ul class="history_ul" >
        <li class="clearfix" v-for="(pie,index) in SearchRecord" >
          <p @click="ClickHistorySeek(pie)">{{pie}}</p>
          <span class="Wrong1" @click="ClickDelete(index)"></span>
        </li>
        <div class="Empty_History" @click="ClickEmpty">清空搜索历史</div>
      </ul>
    </div>

    <!--商家信息-->
    <div class="Merchant" v-if="Show_merchant">
      <p class="history_p" v-if="Show_merchant">商家</p>
      <ul>
       <router-link :to="{path:'/shophost'}">

         <li class="message clearfix" v-for="(pie,index) in HistoryMessage" @click="JumpMerchant(pie)">
           <img :src="'//elm.cangdu.org/img/'+pie.image_path" alt="">
           <div>
             <p>{{pie.name}} <span class="payment">支付</span></p>
             <p>月售{{pie.recent_order_num}}单</p>
             <p>{{pie.float_minimum_order_amount}}元起送/距离{{pie.distance}}</p>
           </div>
         </li>
       </router-link>
      </ul>
    </div>

    <!--无搜索结果-->
    <div class="Regret" v-if="Show_Regret">
      很抱歉!无搜索结果
    </div>

    <!--底部按钮-->
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
    <!--弹出提示框-->
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
  </div>
</template>
<script>
    import Vue from 'vue'
    import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "Zg_seek",
        data(){
          return{
            Search_val:'',//输入框输入的值
            Show_wrong:false,//输入框错号显隐
            Show_history:false,//搜索记录显隐
            Show_merchant:false,//商家信息显隐
            Show_Regret:false,//隐藏无搜索结果页面
            LongitudeAndLatitude:'',//所选城市经纬度
            HistoryMessage:[],//获取到的商铺信息
            SearchRecord:[],//存储历史搜索的记录
            showcom:'',//提示框显示隐藏
            promptContent:'',//提示框内容

          }
        },
        watch:{
          //监听输入框是否有值
          Search_val:function (olbV) {
            // console.log(olbV.length)
            if (olbV.length>=1){
              this.Show_wrong=true
            }else if(olbV.length===0){
              this.Show_wrong=false;
              this.Show_Regret=false;
              this.Show_merchant=false;
              this.Show_history=true;
            }
          }
        },
        methods:{
          //点击搜索按钮
          ClickMynav(){
            console.log()
          },
          //清空输入框
          ClickWrong(){
            this.Search_val='';
            //隐藏商家信息容器
            this.Show_merchant=false;
          },
          //提交数据
          ClickSubmit(){
              //添加历史搜索搜索记录
              this.SearchRecord.push(this.Search_val);
              //获取所选城市信息
              Vue.axios.get('https://elm.cangdu.org/v1/cities/2').then((res)=>{
                //提取经纬度
                this.LongitudeAndLatitude=res.data.latitude+','+res.data.longitude;
                //搜索餐馆信息
                Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash='+this.LongitudeAndLatitude+'&keyword='+this.Search_val).then((res)=>{
                  if (res.data.message==="搜索餐馆数据失败"){
                    //弹出提示框
                    this.promptContent='后台请求数据错误';
                    this.showcom=true;
                  }else if (res.data.length===0){
                    this.Show_Regret=true;
                    this.Show_merchant=false;
                    this.Show_history=false;
                  }else {
                    //显示商家信息容器
                    this.Show_merchant=true;
                    this.HistoryMessage=res.data;
                    this.Show_history=false;
                  }
                })
              })
          },
          //删除一条历史记录
          ClickDelete(index){
            this.SearchRecord.splice(index,1);
          },
          //清空历史记录
          ClickEmpty(){
            this.SearchRecord.splice(0,this.SearchRecord.length);
            this.Show_history=false;
          },
          //从历史记录搜索
          ClickHistorySeek(data){
            //获取所选城市信息
            Vue.axios.get('https://elm.cangdu.org/v1/cities/2').then((res)=>{
              //提取经纬度
              this.LongitudeAndLatitude=res.data.latitude+','+res.data.longitude;
              //搜索餐馆信息
              Vue.axios.get('https://elm.cangdu.org/v4/restaurants?geohash='+this.LongitudeAndLatitude+'&keyword='+data).then((res)=>{
                if (res.data.length===0){
                  this.Show_Regret=true;
                  this.Show_merchant=false;
                  this.Show_history=false;
                  this.Search_val=data;
                  // console.log("111")
                }else {
                  //显示商家信息容器
                  this.Show_merchant=true;
                  this.HistoryMessage=res.data;
                  this.Show_history=false;
                  this.Search_val=data;
                  // console.log(res.data);
                }
              })
            })
          },

          //跳转到商家
          JumpMerchant(data){
            console.log(data);
            this.$store.state.shopId=data.id;
            // console.log(this.$store.state.shopId)
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
          //接受提示框返回的数据
          getMsg(data){
            this.showcom=data;
          },
      },
      components:{
        PublicPrompt
      }

    }
</script>

<style scoped>
  .Seek{
    width: 100%;
    height:100%;
    background-color:#F5F5F5;
    position: relative;
  }
  .Seek_nr{
    background-color: white;
    padding: .5rem;
    font-weight: 400;
    color: #333;
    position: relative;
  }
  .Seek_nr>div{
    width: 3.29rem;
    display: inline-block;
    background-color: #3190E8;
    border: .025rem solid #3190e8;
    color: white;
    line-height: 1.5rem;
    margin-left: .02rem;
    font-weight: 700;
    /*padding: 0 5px;*/
    border-radius: .123rem;
    text-align: center;
    float: right;
  }
  .Seek_nr>input{
    width: 11.5rem;
    line-height: 1.5rem;
    font-size: .65rem;
    color: #333;
    border: .025rem solid #e4e4e4;
    border-radius: .123rem;
    background-color: #f2f2f2;
    font-weight: 700;
    padding: 0 .25rem;
    outline: none;
    float: left;
  }
  .Seek_nr>span{
    width: 1rem;
    height: 1rem;
    background: url("../../wyhImg/cuolan.png") no-repeat center center;
    background-size: 50% 50%;
    display: inline-block;
    position: absolute;
    left: 10.9rem;
    top: .78rem;
  }
  /*搜索历史*/
  .Seek_history{
    padding-bottom: 1.5rem;
  }
  .history_p{
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
    margin: 0;
  }
  .history_ul{
    background-color: white;
  }
  .history_ul>li{
    border-bottom: 1px solid #E4E4E4;
    position: relative;
    border-bottom: 1px solid #E4E4E4;
    padding: 0 .5rem 0 .5rem;
  }
  .history_ul>li>p{
    margin: 0;
    float: left;
    line-height: 2rem;
    font-size: .8rem;
    color: #333;
    font-weight: 400;
  }
  .Wrong1{
    width: 1rem;
    height: 1rem;
    display: inline-block;
    background: url("../../wyhImg/cuohui.png") no-repeat center center;
    background-size: 65% 65%;
    position: absolute;
    right: .5rem;
    top: .5rem;
  }
  .Empty_History{
    background-color: white;
    text-align: center;
    color: #3190e8;
    font-weight: 700;
    padding: .5rem 0 ;
  }

  /*商家信息*/
  .Merchant{
    padding-bottom: 1.5rem;
  }
  .Merchant>ul{
    background-color: white;
  }
  .message{
      padding: .5rem;
      border-bottom: 1px solid #E4E4E4;
  }
  .message>img{
    width: 1.7rem;
    height: 1.7rem;
    display: inline-block;
    float: left;
    margin-right: .25rem;
  }
  .message>div{
    width: 87%;
    float: left;
    color: #333;
    font-weight: 400;
    font-size: .6rem;
    padding-bottom: .25rem;
    border-bottom: .025rem solid #e4e4e4;
  }
  .message>div>p{
    margin: 0;
    line-height: .9rem;
  }
  .payment{
    display: inline-block;
    font-size: 0.45rem;
    font-weight: bold;
    color: #FF6000;
    border:.2px solid #FF6000;

  }
  /*抱歉样式*/
  .Regret{
    text-align: center;
    background-color: white;
    margin-top: .125rem;
    line-height: 1.7rem;
  }


/*底部导航样式*/
.BottomPart{
  width: 100%;
  background-color: white;
  font-size: 0;
  position: fixed;
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
  background: url("../../assets/bottom22.png") no-repeat center center;
  background-size: 110% 110%;
}
.bottom_logo_span3{
  background: url("../../assets/bottom3.png") no-repeat center center;
  background-size: 110% 80%;
}
.bottom_logo_span4{
  background: url("../../assets/bottom4.png") no-repeat center center;
  background-size: 100% 100%;
}
  /*头部导航条*/
  header{
    width: 100%;
    height: 1.95rem;
    background-color: #3190E8;
    color: white;
    font-weight: 700;
    position:relative;
  }
  header>div{
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
  .Mynav>p{
    margin: 0;
  }
</style>
