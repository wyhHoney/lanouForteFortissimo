<template>
  <div id="z-app">
    <div class="Z-">
      <div class="z-top">
        <p class="sizi ">密码登录</p>
        <!--返回上一级-->
        <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui1" @click="$router.back(-1)"/>
      </div>
      <div class="Z-input">
        <div class="z-accounts"><input type="text" placeholder="帐号" v-model="A"/>
        </div>
        <div class="z-password"><input type="password" placeholder="密码" v-model="B">
          <div class="z-img">
            <!--后台引入的图片1隐藏密码-->
            <img src="">
          </div>
          <!--后台引入的图片2显示密码-->
          <div class="z-img_1"><img src="" alt=""></div>
        </div>
        <div class="code">
          <span class="v_logo"></span>
          <input type="text" placeholder="验证码" class="input-val ipt" v-model="C"/>
          <canvas id="canvas" width="100px" height="40px" @click="reshow"></canvas>
        </div>
        <div class="Z-hint">
          <p>温馨提示:为注册过的帐号,登录时将自动注册</p>
          <p>注册过的用户可凭借帐号密码登录</p>
        </div>
        <button class="btn btn-info" style="width:100%" @click="register">登录</button>
        <!--重置密码的路由-->
      </div>
    </div>
    <router-link :to="{path:'./register'}" class="zg_skip">密码重置</router-link>
  </div>
</template>
<script>
  import {draw, check} from './Auth-code'

  export default {
    name: "G-login",
    mounted(){
      Vue.Axios.get('https://elm.cangdu.org/v2/login?username='+this.A&'password='+this.B&'captcha_code ='+this.C).then(res=>{
      })
    },
    data() {
      return {
        A: '',
        B: '',
        C: '',
        show_num: [],
        Aarr:[]//存A
      }
    },
    computed: {
      A_1: function () {
          return this.$store.state.A_1

      },
    },
    mounted() {
      draw(this.show_num);
    },
    methods: {
      reshow() {
        check(this.show_num)
      },
      register() {
        if (this.A === '') {
          alert("帐号没输")
        }
        if (this.B === '') {
          alert('密码没输')
        }
        if (this.C === '') {
          alert("请输入验证码")
        }
        if (this.A, this.B, this.C === '') {
          alert("你是个傻逼?啥都不输入还登?")
        }
        if (this.A !== '' && this.B !== '' && this.C !== '') {
          //按钮登录,下边是个路由,登录成功的路由
          this.$router.push({path: 'myhomepage'})
        }
        this.Aarr.push(this.A)
        //登录过的帐号都存到一个数组里
        this.$store.state.nameArrAdjustIn=this.Aarr;
        // console.log(this.$store.state.nameArrAdjustIn,1111)
        this.$store.state.zg_name=this.A;
        console.log(this.$store.state.zg_name);
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

  .btn btn-default {
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
    top: 8.5rem;
    right: 0;
  }

  .z-img,
  img {
    width: 2rem;
    position: relative;
  }

  .z-img {
    position: absolute;
    top: 10rem;
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

  .zg_skip {
    position: fixed;
    bottom: 43%;
    right: 4%;
  }

  input {
    height: 2.7rem;
    font-size: .8rem;
    padding: 0 .5rem;
  }

  .zg_fanhui1 {
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
</style>

