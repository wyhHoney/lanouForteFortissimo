<template>
  <div id="app">
    <div id="xixi">
    </div>
    <transition name="cmp" mode="out-in" >

      <router-view></router-view>
    </transition>

    <!--<loading></loading>-->


    <!--<MyHomePage></MyHomePage>-->
    <!--<wyh_-balance></wyh_-balance>-->
    <!--<Loading></Loading>-->
    <!--<router-view></router-view>-->
    <!--<MyHomePage></MyHomePage>-->
    <!--<wyh_-balance></wyh_-balance>-->
    <!--<Idiscount></Idiscount>-->


  </div>
</template>
<script>
  /*引入屏幕适配文件*/
  import {} from "../src/Third-party plug-ins/resize";
  import MyHomePage from "./components/MyPage/MyHomePage";
  import Vue from 'vue'

  //张鹏引入的组件
  import Zp_position from "./components/zp_position";
  import SpecificAddress from "./components/SpecificAddress";
  import ZpTakeOut from "./components/zpcomponent/ZpTakeOut";
  import Shop from './components/zpcomponent/Shop'

  //曾光引入的组件
  import Invoice from "./components/zpcomponent/Invoice";
  export default {
    name: 'App',
    data(){
      return{
        ifshowload:true,
      }
    },created(){
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=> {
        sessionStorage.setItem("store", JSON.stringify(this.$store.state))
      })
      },
  }

</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "OverallSituationCSS/animate.min.css";
  @keyframes Show_enter {
    0%{
      opacity: 0;
    }
    50%{
      opacity: .5;
    }
    100%{
      opacity: 1;
    }
  }
  /*组件离开时的动画*/
  .cmp-leave-active{
    animation: Show_enter 0.3s reverse;
  }
  /*组件进入时的动画*/
  .cmp-enter-active{
    animation: Show_enter 0.3s;}


  .slide-fade-leave-active {
    transition: all .5s;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }

  /*该样式为清除浮动造成的父级塌陷:在父级标签加clearfix*/
  .clearfix:after {
    content: '';
    display: table;
    clear: both;
  }

</style>
