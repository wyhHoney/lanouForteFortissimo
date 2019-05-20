<template>
  <div class="Zg_head">
    <router-link :to="{path:'./IDiscount'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>推荐奖励</span>
    </div>
    <img src="../../zg_img/一块.png" height="334" width="533" class="zg_yikuai"/>
    <img src="../../zg_img/微信.png" height="194" width="242" class="weixin"@click="wei"/>
    <img src="../../zg_img/QQ.png" height="177" width="163" class="qq"@click="qq"/>
    <img src="../../zg_img/二维码.png" height="176" width="138" class="erweima"@click="erweima_1"/>
    <div class="zg_earnings">
    <p style="color: grey">累计收益</p>
      <p style="color: red;font-size: 1rem;padding: 0 .5rem">0 <span style="color: #666;font-size: .6rem;font-weight: 800">元</span> </p>
    </div>
    <div class="zg_invite">
      <p style="color:grey;">成功邀请</p>
      <p style="color: black;font-size: 1rem;padding: 0 .5rem">0 <span style="font-size: .7rem">人</span>  </p>
    </div>
    <p class="zg_detail">-收益明细-</p>
    <img src="../../zg_img/红包灰色.png" height="200" width="200"class="hongbao_1"/>
      <p class="txt_bottom">还不赶快去邀请好友</p>
    <div>
      <div class="popBox"v-if="BOX">
        <img src="../../zg_img/感叹号.png" height="200" width="200" class="Box_img"/>
      <p class="Box_txt">请在饿了么APP中打开</p>
        <button class="Box_btn" @click="certain">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ReferralBonuses",
      data(){
          return{
            BOX:false
          }
      },
      methods:{
          qq(){
            this.BOX=true
          },
        wei(){
            this.BOX=true
        },
        erweima_1(){
            this.BOX=true
        },
        certain(){
            this.BOX=false
        }

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none
  }
  body{
    font-size: 10px;
    background: red!important;
  }
  .Zg_head{
    background: #3190e8;
    width: 100%;
    height: 1.8rem;
  }
  .zg_fanhui4{
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
  .search{
    text-align: center;
    font-size: .8rem;
    padding-top:.4rem ;
    font-weight: 800;
    color: white;
  }
  .zg_yikuai{
    width: 100%;
    height: 10rem;
    position: absolute;
    top: 1.82rem;
  }
  .weixin{
    position: absolute;
    top: 13rem;
    width: 5.5rem;
    height: 4.5rem;
  }
  .qq{
    position: absolute;
    top: 13.5rem;
    width: 3.7rem;
    height: 4rem;
    left: 6rem;
  }
  .erweima{
    position: absolute;
    top: 13.5rem;
    width: 3.2rem;
    height: 4rem;
    left: 11.5rem;
  }
  .zg_earnings{
    position: absolute;
    top: 19.5rem;
    left: 2rem;
  }
  .zg_invite{
    position: absolute;
    top: 19.5rem;
    right: 3rem;
  }
  .zg_detail{
    position:absolute;
    top: 22rem;
    left: 6.4rem;
    color: grey;
    font-size: .5rem;
  }
  .hongbao_1{
    position: absolute;
    top: 23.5rem;
    width: 1.8rem;
    height: 1.8rem;
    left: 6.7rem;
  }
  .txt_bottom{
    position: absolute;
    top: 25.7rem;
    left: 5.2rem;
    color: grey;
    font-size: .5rem;
  }
  .popBox{
    width: 12rem;
    height: 7rem;
    border-radius: 3%;
    position: absolute;
    top: 8rem;
    left: 2rem;
    background-color:#fff;
    animation: flipOutX 1s;
  }
  .Box_img{
    width: 2.9rem;
    height: 3.2rem;
    position: relative;
    left: 4.5rem;
    top: .5rem;
  }
  .Box_txt{
    position: relative;
    top: .8rem;
    left: 2.6rem;
    font-size: .7rem;
  }
  .Box_btn{
    width: 100%;
    position: absolute;
    top: 6rem;
    height: 2rem;
    border-radius: 7%;
    background-color: rgb(76, 217, 100);
    border: 1px solid rgb(76, 217, 100);
    font-size: .8rem;
    color: white;
  }
</style>
