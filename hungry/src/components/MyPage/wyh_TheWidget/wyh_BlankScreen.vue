<template>
    <!--商家活动页面-->
    <div class="BlankScreen">
      <h4>12345689</h4>
      <p><span>优惠信息</span></p>
      <span><p><span class="jian">减</span>满30减5,满60减8(APP专享)</p></span>
      <span><p><span class="xin">新</span>gasd(APP专享)</p></span>
      <p><span>商家公告</span></p>
      <span><p>gasd(APP专享)</p></span>

      <div @click="$router.back(-1)"><img src="../../../wyhImg/cuohui.png" alt=""></div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "wyh_BlankScreen",
        created(){
          console.log(this.$store.state.shoppro1.id);
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/'+this.$store.state.shoppro1.id).then((res)=>{
            console.log(res.data)
          })
        },
    }
</script>

<style scoped>
  .BlankScreen{
    width: 100%;
    height: 100%;
    background-color: #262626;
    padding: 1.25rem;
    color: white;
    position: relative;
  }
  .BlankScreen>h4{
    text-align: center;
    font-size: .8rem;
    color: #fff;
  }
  .BlankScreen>p{
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  .BlankScreen>p>span{
    font-size: .5rem;
    color: #fff;
    border: .025rem solid #555;
    padding: .2rem .4rem;
    border-radius: .5rem;
  }
  .BlankScreen>span>p{
    color: #fff;
    line-height: .6rem;
    font-size: .5rem;
  }
  .BlankScreen>div{
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 6.5rem;
    bottom: 1.25rem;
    border-radius: 50%;
    border: 1px solid white;
    text-align: center;
    line-height: 2.9rem;
  }
  .BlankScreen>div>img{
    width: 50%;
    height: 50%;
  }
  .jian{
    padding: .15rem;
    margin-right: .2rem;
    background-color: #F07373;
    display: inline-block;
    border-radius: .2rem;
  }
  .xin{
    padding: .15rem;
    margin-right: .2rem;
    background-color: #70BC46;
    display: inline-block;
    border-radius: .2rem;
  }
</style>
