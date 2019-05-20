<template>
  <div class="Zg_head">
    <router-link :to="{path:'IDiscount'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>兑换红包</span>
    </div>
    <div>
      <input type="text" placeholder="请输入兑换码"class="form-control zg_input"v-model="zg_conversion">
    </div>
    <div>
      <input type="text"placeholder="验证码" class="form-control zg_input_2" v-model="codeValue">
    </div>
    <div ><img :src=aa alt="" class="yanzhengma"></div>
    <div class="txt">
    <p>看不清</p>
    <p style="color: blue"@click="ChangeTheVerificationCode">换一张</p>
    </div>
    <div class="btn1">
      <p  class="wenzi" style="color: white;font-size: .7rem">兑换</p>
    </div>
  </div>

</template>

<script>
    export default {
      mounted(){
        let  a ='https://elm.cangdu.org/v1/captchas'
        this.$http.post(a).then(res=>{
          this.zg_arr=res.data
          this.aa=res.data.code
          console.log(this.zg_arr)
        },res=>{
          console.log(666)
        })
      },
        name: "ForARedEnvelope",
      data(){
          return{
            zg_conversion:'',
            zg_arr:[],
            aa:'',
            bb:'',
            codeValue:''
          }
      },
      methods:{
        ChangeTheVerificationCode(){
            let  a ='https://elm.cangdu.org/v1/captchas'
            this.$http.post(a).then(res=>{
              this.zg_arr=res.data
              this.aa=res.data.code
              console.log(this.zg_arr)
            },res=>{
              console.log(666)
            })
            this.bb=this.aa
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
  html,body{
    font-size: 10px;
    background-color: #5e5e5e;
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
  input{
    color: black;
  }
  .zg_input{
    width: 90%;
    margin: 0 1rem;
    height: 2.2rem;
    margin-top: 1rem;
    padding: 0 .5rem;
  }
  .zg_input_2{
    width: 45%;
    margin: 1rem ;
    height: 2.2rem;
    padding:  0 1rem;
  }
  .yanzhengma{
    position: absolute;
    right: 1.3rem;
    top: 5.8rem;
    padding: .6rem 1.5rem;
  }
  .txt{
    position: absolute;
    top: 6rem;
    right: .3rem;
  }
  .btn1{
    width: 90%;
    background-color: rgb(204, 204, 204);
    margin: 0 .6rem;
    height: 2rem;
    border-radius: 6%;
  }
  .wenzi{
    position: absolute;
      left: 7.4rem;
      top: 9.5rem;
  }
</style>
