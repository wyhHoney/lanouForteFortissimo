<template>
  <div id="z-app">
    <div class="Z-">
      <div class="z-top">
        <p class="sizi ">修改密码</p>
        <!--返回上一级-->
        <router-link :to="{path:'/glogin'}"><img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui2"/></router-link>
      </div>
      <div class="Z-input">
        <div class="z-accounts"> <input type="text" placeholder="帐号"v-model="A" />
          <input type="text" placeholder="旧帐号"v-model="D" />
        </div>
        <div class="z-password"><input type="password" placeholder="新密码" v-model="B">
          <input type="password" placeholder="确认密码" v-model="F">
          <div class="z-img">
            <!--后台引入的图片1隐藏密码-->
            <img src="">
          </div>
          <!--后台引入的图片2显示密码-->
          <div class="z-img_1"> <img src="" alt=""></div>
        </div>
        <div class="code">
          <span class="v_logo"></span>
          <input type="text"  placeholder="验证码" class="input-val ipt" v-model="C"/>
          <canvas id="canvas" width="100px" height="40px" @click="reshow"></canvas>
        </div>
        <div class="Z-hint"></div>
        <button class="btn btn-info"style="width:100%" @click="register()">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {draw, check} from './Auth-code'
    export default {
        name: "zg_register",
      data() {
        return {
          A:'',
          B:'',
          C:'',
          show_num:[],
          D:'',
          F:'',
        }
      },
      mounted(){
        draw(this.show_num);
      },
      methods:{
        reshow(){
          check(this.show_num)
        },
        register(){
          if(this.A ==''){
            alert("你总要写你要改的哪个帐号吧?")
          }
          if(this.B ==''){
            alert('?啥意思?旧密码没有????')
          }
          if(this.C ==''){
            alert("请输入验证码!!!")
          }
          if(this.A,this.B,this.C==''){
            alert("你这是在改密码????")
          }
          if(this.D==''){
            alert('旧帐号不能为空')
          }
          if(this.F==''){
            alert('确认密码不能为空')
          }
          if(this.A!='',this.B!='',this.C!='',this.D!='',this.F!=''){
            //按钮登录,下边是个路由,登录成功的路由

          }
        }
      }
    }
</script>

<style scoped>
  html, body {
    background: #f5f5f5;
    font-size: 10px;
  }
  .z-top {
    background: #3190e8;
    width: 100%;
    height: 5%;
  }

  .sizi {
    text-align: center;
    font-size: 0.8rem;
    color: #ffffff;
    padding: 0.3rem 0;
  }
  .Z-hint {
    color: red;
    font-size: 0.5rem;
  }
  .btn btn-default{
    width: 100%;
  }
  .pull-right {
    font-size: 0.5rem;
  }

  .Z-input {
    width: 100%;
    height: 3.2rem;
  }

  .Z-code {
    width: 80%
  }
  .z-return{

  }
  .Z-reset {
    color: blue;

  }

  .z-account,
  input {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
  }

  .ipt {
    border: 1px solid #d3d3d3;
    position: relative;
    border-style: none;
  }

  .ipt:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
  }

  #canvas {
    position: fixed;
    top: 13rem;
    right: 0;
  }

  .z-img,
  img {
    width: 2rem;
    position: relative;
  }

  .z-img {
    position: absolute;
    top: 9rem;
    left: 13.7rem;
  }

  .z-img_1,
  img {
    width: 2rem;
    position: relative;
  }

  .z-img_1 {
    position: absolute;
    top: 10rem;
    left: 13.7rem;
    display: none;
  }
  input{
    height: 2.5rem;
    font-size: .7rem;
    padding: 0 .5rem;
  }
  .zg_fanhui2{
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
</style>
