<template>
    <div class="ChangesIn">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

      <!--内容-->
      <div class="ChangesIn_nr">
        <input type="text" placeholder="账号" v-model="UserName">
        <input type="text" placeholder="旧密码" v-model="UserPsassword">
        <input type="text" placeholder="请输入新密码" v-model="XPassword">
        <input type="text" placeholder="请确认密码" v-model="QPassword">

        <div class="inputBox clearfix">
          <input type="text" name="verification" id="verification" placeholder="验证码" v-model="captcha_codes">
          <div class="verification">
            <img :src="ImageAuthentication" id="canvas"/>
            <!--<canvas id="canvas"></canvas>-->
            <div><p>看不清</p><p class="barter" @click="reshow">换一张</p></div>
          </div>
        </div>
      </div>

      <!--提交按钮-->
      <div class="submit_div" @click="SubmitClick">
          确认修改
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
        name: "wyh_ChangesIn",
        components:{
          PublicHeader,
          PublicPrompt,
         },
        data(){
          return {
            PageTitle:'重置密码',
            routejump:'accountinformation',
            ImageAuthentication:'',
            showcom:'',//提示框显示隐藏
            promptContent:'',//提示框内容

            UserName:'',//账号
            UserPsassword:"",//旧密码
            XPassword:"",//新密码
            QPassword:'',//确认新密码
            captcha_codes:"",//验证码
          }
        },
        created(){
          //发起获取验证码请求
          Vue.axios.post('https://elm.cangdu.org/v1/captchas/').then((res)=>{
            this.ImageAuthentication=res.data.code
          })
        },
        methods:{
          reshow(){
            //发起获取验证码请求
            Vue.axios.post('https://elm.cangdu.org/v1/captchas/').then((res)=>{
              this.ImageAuthentication=res.data.code
            })
          },
          SubmitClick(){
              if (this.UserName.length===0){
                //弹出提示框
                this.promptContent='请输入正确的账号';
                this.showcom=true;
              }else if(this.UserPsassword.length===0){
                //弹出提示框
                this.promptContent='请输入旧密码';
                this.showcom=true;
              }else if(this.XPassword.length===0){
                //弹出提示框
                this.promptContent='请输入新密码';
                this.showcom=true;
              }else if (this.QPassword.length===0){
                //弹出提示框
                this.promptContent='请输确认密码';
                this.showcom=true;
              }else if(this.XPassword!==this.QPassword){
                //弹出提示框
                this.promptContent='两次密码的密码不一致';
                this.showcom=true;
              }else if(this.captcha_codes.length===0){
                //弹出提示框
                this.promptContent='请输验证码';
                this.showcom=true;
              }else{
                Vue.axios.post('https://elm.cangdu.org/v2/changepassword',{
                  username:this.UserName,
                  oldpassWord:this.UserPsassword,
                  newpassword:this.XPassword,
                  confirmpassword:this.QPassword,
                  captcha_code:this.captcha_codes
                }).then((res)=>{
                  if(res.data.message==="未找到当前用户"){
                    //弹出提示框
                    this.promptContent='您输入的用户名不正确';
                    this.showcom=true;
                  }else if(res.data.message==="验证码不正确"){
                    //弹出提示框
                    this.promptContent='验证码输入错误';
                    this.showcom=true;
                  }else if(res.data.message==="密码不正确"){
                    //弹出提示框
                    this.promptContent='密码不正确';
                    this.showcom=true;
                  }else if(res.data.success==="密码修改成功"){
                    //弹出提示框
                    this.promptContent='密码修改成功';
                    this.showcom=true;
                  }else {
                    //弹出提示框
                    this.promptContent='系统错误请稍后重试';
                    this.showcom=true;
                  }
                  console.log(res.data)
                })
              }
          },
          //接受提示框返回的数据
          getMsg(data){
            this.showcom=data;
          },

        },

    }
</script>

<style scoped>
  .ChangesIn{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
    animation:slideInRight .3s;
  }
  .ChangesIn_nr{
    width: 100%;
    background-color: white;
    margin-top: .4rem;
  }
  .ChangesIn_nr>input{
    width: 100%;
    padding: .3rem .8rem;
    border: 0;
    border-bottom: 1px solid #F1F1F1;
    outline: none;
    font-size: .7rem;
  }

  /*验证码样式*/
  .inputBox{
    width: 100%;
    background-color: #FFFFFF;
    padding: .6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
  }
  .inputBox>input{
    float: left;
    font-size: .7rem;
    color: #666;
    border: 1px;
    background-color: inherit;
    outline: none;
    /*border: 1px solid #000;*/
  }
  .inputBox>p{
    margin: 0;
  }
  .inputBox>div{
    display: inline-block;
    float: right;
  }
  #canvas{
    width: 3.5rem;
    height: 1.5rem;
    display: inline-block;
    position: absolute;
    left: -3.6rem;
    top: 0;
  }
  .verification{
    position: absolute;
    right: 0.8rem;
    top: .45rem;
    font-size: 0;
  }
  .verification>div{
    position: relative;
    left: .2rem;
    display: inline-block;
  }
  .verification>div>p{
    margin: 0;
    font-size: .55rem;
    color: #666;
  }
  .barter{
    color: #3b95e9 !important;
  }

  /*提交按钮样式*/
  .submit_div{
    background-color: #4CD964;
    margin: 1rem .5rem;
    font-size: .7rem;
    padding: .5rem 0;
    text-align: center;
    border: 1px;
    border-radius: .15rem;
    color: white;
  }
</style>
