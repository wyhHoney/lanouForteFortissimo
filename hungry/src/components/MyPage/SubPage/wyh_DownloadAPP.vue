<template>
    <!--下载饿了么APP-->
    <div class="DownloadAPP zoomIn">
      <!--头部-->
      <header>
        <div class="Return" @click="$router.back(-1)" ></div>
        <div class="Mynav"><p>下载</p></div>
      </header>
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
    import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "wyh_DownloadAPP",
        data(){
          return {
            showcom:'',
            promptContent:'IOS用户请前往AppStore下载',//提示框内容
          }
        },
        components:{
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
