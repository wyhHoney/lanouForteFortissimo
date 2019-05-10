<template>
  <!--我的优惠-->
  <div class="My_Discount">
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
  </div>
</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_Discount",
        data(){
          return {
            PageTitle:'我的优惠',
            routejump:'myhomepage'
          }
        },
      methods:{

      },
      components:{
        PublicHeader
      }
    }
</script>

<style scoped>
  .My_Discount{
    width: 100%;
    height: 100%;
    position: relative;
  }

</style>
