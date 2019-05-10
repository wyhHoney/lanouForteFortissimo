<template>
    <!--下载饿了么APP-->
    <div class="DownloadAPP zoomIn">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <!--内容-->
      <div class="DownloadAPP_nr">
        <img src="../../../assets/eleme.png"/>
        <p>下载饿了么APP</p>
        <div @click="ClickDownload">下载</div>
      </div>
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'//引入头部组件
    import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "wyh_DownloadAPP",
        data(){
          return {
            PageTitle:'下载',
            routejump:'myhomepage',
            showcom:'',
            promptContent:'IOS用户请前往AppStore下载',//提示框内容
          }
        },
        components:{
          PublicHeader,
          PublicPrompt,
        },
        methods:{
          //点击下按钮事件
          ClickDownload(){
            //弹出提示框
            this.showcom=true;
          },
          getMsg(data){
            this.showcom=data;
          }
        },
        computed:{

        },
    }
</script>

<style scoped>
  .DownloadAPP{
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
  .DownloadAPP_nr{
    text-align: center;
    padding: 0 .7rem 0 .7rem;
    box-sizing: border-box;
  }
  .DownloadAPP_nr>img{
    margin-top: 1rem;
    margin-bottom: .5rem;
    width: 9rem;
    height: 9rem;
    display: inline-block;
  }
  .DownloadAPP_nr>p{
    font-size: .8rem;
    color: #666;
    margin-bottom: 1rem;
  }
  .DownloadAPP_nr>div{
    width: 100%;
    line-height: 1.8rem;
    background-color: #4CD964;
    border-radius: .2rem;
    color: white;
  }
</style>
