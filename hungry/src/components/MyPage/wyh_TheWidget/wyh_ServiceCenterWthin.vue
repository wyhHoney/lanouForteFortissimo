<template>
    <div class="ServiceCenterWithin">
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <!--详细说明-->
      <div class="explain">
        <p>{{paragraph}}</p>
        <!--<li v-for="pp in pie.li">{{pie}}</li>-->
      </div>
    </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_ServiceCenterWthin",
        components:{
          PublicHeader
        },
        data(){
          return {
            PageTitle:"",
            routejump:'serviceCenter',
            paragraph:'',
          }
        },
        created(){
            this.PageTitle=this.$route.query.Title;
            this.paragraph=this.$route.query.Description;
        },
    }
</script>

<style scoped>
  .ServiceCenterWithin{
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
  .explain{
    padding: 0 .5rem 0 .5rem;
  }
  /*.explain>h3{*/
    /*margin: 0;*/
    /*line-height: 2rem;*/
    /*font-weight: 400;*/
    /*color: #333;*/
    /*font-size: .7rem;*/
  /*}*/
  .explain>p{
    font-weight: 400;
    color: #666;
    line-height: 1rem;
    font-size: .6rem;
    margin: 0;
  }
  /*.explain:last-child{*/
    /*opacity: 0;*/
  /*}*/
</style>
