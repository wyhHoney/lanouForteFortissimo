<template>
    <div @click="inhome">
      <video muted="" data-autoplay="" loop="loop" autoplay="autoplay" src="//s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4" class="video-tvc" id="video-tvc" data-object-fit="">抱歉，您的浏览器不支持内嵌视频</video>
    </div>
</template>

<script>
    export default {
        name: "video1",
      methods:{
          inhome(){
            this.$router.push({path:'toCity'})
          }
      }
    }
</script>

<style scoped>
.video-tvc{
  /*height: 100%;*/
  /*width: 100%;*/
  /*object-fit: cover;*/
}
</style>
