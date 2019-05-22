<template>
    <!--推出登陆页面-->
    <div class="QuitLogIn bounceIn" v-if="Show_Quit">
      <img src="../../../assets/jinggao.png" alt="" class="PublicPrompt_img">
      <h2>是否退出登陆</h2>
      <div class="Button_er">
        <div @click="Again">再等等</div>
        <div @click="DropOut">退出登陆</div>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "wyh_QuitLogIn",
        data(){
          return {
            Show_Quit:'',
          }
        },
        props:['ShowLog'],
        created(){
          this.Show_Quit=this.ShowLog
        },
        methods:{
          Again(){
            this.Show_Quit=false;
            this.$emit('ShowFalse' ,this.Show_Quit);
          },
          DropOut(){
            Vue.axios.get('https://elm.cangdu.org/v2/signout').then((res)=>{
              this.$router.push({path:'myhomepage'})
            })
          }

        },
    }
</script>

<style scoped>
  .QuitLogIn{
    width: 94%;
    position: fixed;
    top: 20%;
    left: 50%;
    margin-top: -0rem;
    margin-left: -7.6rem;
    border-radius: .25rem;
    box-sizing: border-box;
    padding-top: .6rem;
    padding-bottom: 0.85rem;
    text-align: center;
    background-color: #FFFFFF;
    /*transition: bounceIn 2s;*/
  }
  .PublicPrompt_img{
    width: 4.1rem;
    height: 4.1rem;
    display: inline-block;
    margin-top: 20px;
  }
  .PublicPrompt>h2{
    margin: 1.25rem;
    /*margin-bottom: 0;*/
  }
  .PublicPrompt>div{
    width: 100%;
    line-height: 1.8rem;
    background-color: #4CD964;
    border-radius: .2rem;
    color: white;
    margin-top: .8rem;
  }
  .Button_er>div{
    display: inline-block;
    padding: .4rem 1rem;
    font-size: .6rem;
    color: white;
    margin-top: 1.3rem;
    background-color: #DD6B55;
    border-radius: 5px;
  }
  .Button_er>div:nth-child(1){
    margin-right: .4rem;
    background-color: #C1C1C1;
  }
</style>
