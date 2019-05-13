<template>
    <!--头-->
    <header>
      <div class="Return" @click="Return" ></div>
      <div class="Mynav"><p>{{pagetitle}}</p></div>
    </header>
</template>

<script>
  import Vue from 'vue'
  let totalVue=new Vue();
    export default {
        name: "wyh_header",
        data(){
          return {

          }
        },
        methods:{
           Return(){
              this.$router.push({path:this.hops});
           },
         },
        props:{
          pagetitle:{
            type:String,
            default:'',
          },
          hops:{
            type:String,
            default: '',
          }
        }

    }
</script>

<style scoped>
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
    background: url("../../../assets/fanhui.png") no-repeat center center;
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
