<template>
  <div>
  <div class="Zg_head">
    <router-link :to="{path:'./basice'}"> <img  src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>在线付款</span>
    </div>
  </div>
    <div class="zg_time">
      <p>支付剩余时间</p>
      <p style="font-size: 2.5rem">00:{{MinuteHand }}:{{zg_second}}</p>
    </div>
    <p class="zg_ modeOfPayment" style="width: 100%;font-size: .7rem;background-color: rgba(169,169,169,0.2);padding: .6rem">选择支付方式</p>
    <div>
      <img src="../../assets/zhifubao.png" style="position: absolute;left: 1rem;width: 5rem;top: 13rem"/>
      <p><img src="../../assets/weixin.png" style="position: absolute;left: .7rem;top: 16rem;width: 5.6rem"/></p>
    </div>

    <div>
    <img src="../../assets/duihao.jpg" style="position: absolute;top: 16.5rem;right: 1.5rem;width: 1.4rem" v-if="weixin" @click="zg_show_2" />
    <img src="../../assets/duihao1.jpg" style="position: absolute;top: 16.5rem;right: 1.5rem;width: 1.4rem" v-if="weixin_1"/>
    </div>
    <div>
      <img src="../../assets/duihao.jpg" style="position: absolute;top: 13.5rem;right: 1.5rem;width: 1.4rem" v-if="zhifubao" @click="zg_show"/>
      <img src="../../assets/duihao1.jpg" style="position: absolute;top: 13.5rem;right: 1.5rem;width: 1.4rem" v-if="zhifubao_1"/>
    </div>
    <button class="btn btn-info confirm" @click="Aa">确认支付</button>
    <div class="fadeOutDownBig EnterTheAnimation" v-if="disappeared">
      <img src="../../assets/gantanhao.png" alt="" style="width: 4rem;height: 4rem;">
      <p>暂不开放支付功能</p>
      <button class="btn btn-info button_queren"  style="background-color:  #4cd964" @click="zg_disappeared " >确认</button>
    </div>
    <div class="fadeOutDownBig EnterTheAnimation" v-if="disappeared_logon">
      <img src="../../assets/gantanhao.png" alt="" style="width: 4rem;height: 4rem;">
      <p>当前环境无法支付,请打开官方APP <br/>进行付款 </p>
      <button class="btn btn-info button_queren"  style="background-color:  #4cd964" @click="zg_disappeared__logon " >确认</button>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Payment",
      data(){
        return{
          zg_second:60,
          MinuteHand:14,
          receiver:0,
          weixin:true,
          weixin_1:false,
          zhifubao:false,
          zhifubao_1:true,
          disappeared:true,
          disappeared_logon:false,
        }
      },
      mounted(){
        this.gettime();
      },
      methods:{
          gettime(){
        let  clock = setInterval( ()=>  {
              this.zg_second --
              if(this.zg_second==0){
                this.zg_second=60;
                this.MinuteHand --
                if(this.MinuteHand==0&&this.zg_second==0){
                  alert('请求超时')
                }
              }
            },1000)
          },
        zg_show(){
          this.weixin=true,
            this.weixin_1=false,
            this.zhifubao=false,
            this. zhifubao_1=true

        },
        zg_show_2(){
            this.weixin=false,
            this.weixin_1=true,
            this.zhifubao=true,
            this. zhifubao_1=false
        },
        Aa(){
          this.disappeared_logon=true
        },
        zg_disappeared(){
          this.disappeared=false
        },
        zg_disappeared__logon(){
            //跳转到订单页面
            this.$router.push({})
          this.disappeared_logon=false
        }
      },
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none
  }
 body{
    font-size: 10px;
    background-color: #5e5e5e;
  }
  .Zg_head{
    background: #3190e8;
    width: 100%;
    height: 1.8rem;
  }
  .zg_fanhui4{
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
  .search{
    text-align: center;
    font-size: .8rem;
    padding-top:.4rem ;
    font-weight: 800;
    color: white;
  }
  .zg_time {
    text-align: center;
    margin-top: 4rem;
  }
  .confirm {
    font-size: 1rem;
    position: absolute;
    top: 20rem;
    width: 90%;
    height: 1.8rem;
    left: .7rem;
    background-color: #4cd964;
  }
  .EnterTheAnimation{
    width: 11rem;
    height: 7rem;
    background-color:rgba(255, 251, 251,1);
    border: 1px solid rgba(255, 251, 251,1);
    position: absolute;
    top: 9.8rem;
    left: 2.6rem;
    text-align: center;
    border-radius: 10%;
    animation: tada 1s;
  }
  .button_queren{
    width: 11rem;
    height: 2rem;
    position: relative;
    top: 1rem;

  }
</style>
