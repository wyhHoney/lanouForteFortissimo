<template>
    <!--登陆页面-->
    <div class="LoginPage">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

      <!--登陆页面-->
      <div class="LoginPage_nr">
          <form>
            <div class="inputBox">
              <input type="text" name="user" id="user" class="" placeholder="账号">
              <p class="empty"></p>
            </div>

            <div class="inputBox">
              <input :type="writing" name="password" id="password" placeholder="密码">
              <div class="switchover">
                <span @click="movement_qiu" id="ball" :style="{left:Left}"></span>
                <p :style="{background:countenance}">abc…</p>
              </div>
              <p class="empty"></p>
            </div>

            <div class="inputBox">
              <input type="text" name="verification" id="verification" placeholder="验证码">
              <div class="verification">
                <img :src="ImageAuthentication" id="canvas"/>
                <!--<canvas id="canvas"></canvas>-->
                <div><p>看不清</p><p class="barter" @click="reshow">换一张</p></div>
              </div>
              <p class="empty"></p>
            </div>

          </form>
        <div class="bottom_hint">
        <p>温馨提示：未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
        <div @click="landing">登陆</div>
        <span @click="Reset">重置密码?</span>
        </div>
      </div>
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
    import PublicHeader from '../MyPage/CommonComponents/wyh_header'
    import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件
    import Vue from 'vue'
    export default {
        name: "wyh_LoginPage",

        data(){
          return {
            PageTitle:'密码登陆',
            routejump:'myhomepage',
            Left:'0px', //修改球的left
            countenance:'#CCCCCC',   //修改下面的背景色
            writing:'password',//设置密码为明文显示
            showcom:'',
            promptContent:'',//提示框内容
            ImageAuthentication:'',//请求过来的图片验证码
            username:'',//用户输入的账号
            password:'',//用户输入的密码
            captcha_code:'',//用户输入的验证码
          }
        },
        components:{
          PublicHeader,
          PublicPrompt,
        },
        methods:{
          //移动圆球的点击事件
          movement_qiu(){
            let aa=this.Left;
            if (this.Left==='0px'){
              this.Left='20px';
              this.countenance='#4CD964'
              this.writing='text'
            }else{
              this.countenance='#CCCCCC';
              this.Left='0px';
              this.writing='password'
            }
          },
          //换一张的点击事件
          reshow(){
            //发起获取验证码请求
            Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
              this.ImageAuthentication=res.data.code
            })
          },
          //登陆的点击事件
          landing(){
            //如果账号为空
            if ($('#user').val()===''){
              //弹出提示框
              this.showcom=true;
              //提示内容
              this.promptContent='请输入手机号/邮箱/用户名';
            }else if($('#password').val()===''){         //如果密码为空
              //弹出提示框
              this.showcom=true;
              //提示内容
              this.promptContent='请输入密码';
            }else if($('#verification').val()===''){      //如果验证码为空
              //弹出提示框
              this.showcom=true;
              //提示内容
              this.promptContent='请输入验证码';
            }else {
              this.username=$('#user').val();
              this.password=$('#password').val();
              this.captcha_code=$('#verification').val();
              //点击登陆把用户信息传递到后台
              Vue.axios.post('https://elm.cangdu.org/v2/login',{
                username:this.username,
                password:this.password,
                captcha_code:this.captcha_code
              }).then((res)=>{
                if (res.data.message==='验证码不正确'){
                  //弹出提示框
                  this.showcom=true;
                  //提示内容
                  this.promptContent=res.data.message;
                  //发起获取验证码请求
                  Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
                    this.ImageAuthentication=res.data.code
                  })
                }else {
                  //通过点击事件完成路由跳转
                  // console.log(res.data);
                  this.$router.push({path:'myhomepage'});
                }
                // console.log(res.data)
              });
            }
          },
          getMsg(data){
            this.showcom=data;
          },
          //点击跳转到重置密码页面
          Reset(){
            this.$router.push({path:'changesin'})
          }
        },
        created(){
            //发起获取验证码请求
            Vue.axios.post('https://elm.cangdu.org/v1/captchas/').then((res)=>{
              this.ImageAuthentication=res.data.code
            })
        },

    }
</script>

<style scoped>
  .LoginPage{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  .LoginPage_nr{
    margin-top: .6rem;
    font-weight: 400;
  }
  .empty{
    clear: both;
  }
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
    border: 0;
    background-color: inherit;
    outline: none;
  }
  .inputBox>p{
    margin: 0;
  }
  .inputBox>div{
    display: inline-block;
    float: right;
  }

  /*显示大小写按钮*/
  .switchover{
    position: relative;
    height: 1.2rem;
    box-sizing: border-box;
    padding:  0.26rem 0;
  }
  .switchover>span{
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #F1F1F1;
    position: absolute;
    top: 0;
    border-radius: 50%;
    transition: all .5s;
  }
  .switchover>p{
    margin: 0;
    font-size: .45rem;
    color: white;
    padding: 0 .4rem;
    border-radius: .6rem;
    transition: all .5s;
  }
  .bottom_hint{
    width: 100%;
    padding: .4rem .6rem;
  }
  .bottom_hint>p{
    font-size: .5rem;
    color: red;
    line-height: .5rem;
  }
  .bottom_hint>div{
    width: 100%;
    background: #4CD964;
    color: white;
    font-size: .7rem;
    padding: .5rem 0;
    text-align: center;
    border-radius: .15rem;
  }
  .bottom_hint>span{
    display: inline-block;
    width: 100%;
    text-align: right;
    font-size: .6rem;
    color: #3b95e9;
    margin-top: 1rem;
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

</style>
