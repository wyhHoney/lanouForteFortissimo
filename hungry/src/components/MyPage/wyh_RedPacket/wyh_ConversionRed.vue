<template>
  <div class="ConversionRed">
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <!--内容-->
    <div class="ConversionRed_nr">
      <input type="text" placeholder="请输入兑换码" v-model="CDKEY">
      <div class="VerificationCode clearfix">
        <input type="text" placeholder="验证码" v-model="AuthCode">
        <div class="VerificationCode_nr ">
          <img :src="img" alt="">
          <div class="exchange">
          <p>看不清</p>
          <p @click="exchange">换一张</p>
          </div>
        </div>
      </div>
      <div class="duihuan" @click="conversion">兑换</div>
    </div>
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
  import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
  import Vue from 'vue'
  export default {
    name: "wyh_ConversionRed",
    data() {
      return {
        PageTitle: '兑换红包',
        routejump: 'discount',
        img:'',//验证码图片
        CDKEY:'',
        AuthCode:'',//验证码
        showcom:'',
        promptContent:'',//提示框内容
      }
    },
    components: {
      PublicHeader,
      PublicPrompt,
    },
    created(){
      //获取验证码
      Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
        this.img=res.data.code
      })
    },
    methods:{
      //获取验证码
      exchange(){
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          this.img=res.data.code
        })

      },
      //点击兑换
      conversion(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
          Vue.axios.post('https://elm.cangdu.org/v1/users/'+res.data.user_id+'/hongbao/exchange',{
            exchange_code:this.CDKEY,//兑换码
            captcha_code:this.AuthCode,//验证码
          }).then((ress)=>{
            if (ress.data.message==="无效的兑换码") {
              //弹出提示框
              this.showcom=true;
              this.promptContent="无效的兑换码";
            }
          })
        })
      },
      getMsg(data){
        this.showcom=data;
      }
    },
  }
</script>

<style scoped>
  .ConversionRed{
    width: 100%;
    height: 100%;
    background-color: #F1F1F1;
  }
  .ConversionRed_nr{
    margin-top: .7rem;
    padding: 0 .5rem;
  }
  .ConversionRed_nr>input{
    width: 100%;
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
    border: 0;
    outline: none;
  }
  .VerificationCode{
    width: 100%;
    margin-top: .8rem;
  }
  .VerificationCode>input{
    font-size: .7rem;
    color: #666;
    padding: .6rem .4rem;
    border-radius: .15rem;
    -ms-flex: 3;
    border: 0;
    flex: 3;
    float: left;
    outline: none;
  }
  .VerificationCode_nr{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex: 2;
    flex: 2;
    /*margin-left: .3rem;*/
    background-color: #fff;
    /*padding-left: .2rem;*/
    border-radius: .15rem;
    float: right;
    width: 5.4rem;
    padding: .2rem 0;
  }
  .VerificationCode_nr>img{
    width: 3.5rem;
    height: 1.5rem;
    margin-right: .2rem;
  }
  .exchange>p{
    font-size: .55rem;
    color: #666;
    margin: 0;
  }
  .exchange>p:nth-child(2){
    color: #3b95e9;
    margin-top: .2rem;
  }
  .duihuan{
    background-color: #ccc;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .7rem;
  }

</style>
