<template>
  <div id="app">
    <div id="xixi">
      <loading v-if="ifshowload"></loading>
    </div>
    <transition name="cmp" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  /*引入屏幕适配文件*/
  import {} from "../src/Third-party plug-ins/resize";
  import MyHomePage from "./components/MyPage/MyHomePage";


  //张鹏引入的组件
  import Zp_position from "./components/zp_position";
  import SpecificAddress from "./components/SpecificAddress";
  import ZpTakeOut from "./components/zpcomponent/ZpTakeOut";
  import Shop from './components/zpcomponent/Shop'

  //曾光引入的组件
  import GLogin from "./components/G-login/G-login"
  import ResetPasswords from "./components/G-login/ResetPasswords";
  import Zg_seek from "./components/Zg_seek/Zg_seek";
  import Zg_register from "./components/G-login/zg_register";
  import Zg_basic from "./components/zg_AccountInformation/zg_basic";
  import Explain from "./components/zg_AccountInformation/Explain";
  import Payment from "./components/zg_AccountInformation/Payment";
  import Loading from "./components/zpcomponent/Loading";
  import Invoice from "./components/zpcomponent/Invoice";
  import Idiscount from "./components/zg_AccountInformation/IDiscount";
  export default {
    name: 'App',
    components: {
      Invoice,
      Loading,
      Idiscount,
      MyHomePage,

      //张鹏引入的组件
      SpecificAddress,
      Zp_position,
      ZpTakeOut,
      Shop,

      //曾光引入的组件
      Payment,
      Explain,
      Zg_basic,
      Zg_register,
      Zg_seek,
      ResetPasswords,
      GLogin,

    },
    data(){
      return{
        ifshowload:true,
      }
    },created(){
      this.$store.state.afterSearchName=sessionStorage.getItem('afterSearchName')
      this.$store.state.afterSearchLatitude=sessionStorage.getItem('afterSearchLatitude')
      this.$store.state.afterSearchLongitude=sessionStorage.getItem('fterSearchLongitude=')
      this.$store.state.id=sessionStorage.getItem('id');
      this.$store.state.name=sessionStorage.getItem('name');
      let xixi =document.getElementById('xixi')
        this.ifshowload=false
        console.log(this.ifshowload)
      Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id=' + id + '&keyword=' + address + '&type=search').then((res) => {
        this.store.state.zp_searchResult = res.data
      });
    }
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
    animation: Show_enter 0.3s;
  }

  /*该样式为清除浮动造成的父级塌陷:在父级标签加clearfix*/
  .clearfix:after{
    content:'';
    display:table;
    clear: both;
  }

</style>
