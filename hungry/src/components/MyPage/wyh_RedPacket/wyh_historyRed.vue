<template>
    <div class="HistoryRed">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyh_historyRed",
        data(){
          return {
            PageTitle:'历史红包',
            routejump:'discount',
          }
        },
        components:{
          PublicHeader
        }
    }
</script>

<style scoped>
  .HistoryRed{
    width: 100%;
    background-color: #f5f5f5;
  }

</style>
