<template>
    <!--修改用户名-->
    <div class="AmendUserName">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <div class="AmendUserName_nr">
        <input type="text" name="username" placeholder="输入用户名" v-model="UserName" :style="{border:InputOutline}">
        <p :style="{color:PTextColor,fontSize:PFontSize}">{{PText}}</p>
        <div :style="{color: ButtonColor}" @click="SureToModify($event)">确定修改</div>
      </div>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'//引入头部组件
    import Vue from 'vue'
    export default {
        name: "wyh_AmendUserName",
      data(){
        return {
          PageTitle:'修改用户名',
          routejump:'accountinformation',
          UserName:'',
          PTextColor: '',
          PFontSize:'',
          PText:'用户名只能修改一次(5-24字符字符之间)',
          ButtonColor:'#ADCDF0',
          InputOutline:'',//修改输入框的选中颜色

        }
      },
      components:{
        PublicHeader,
      },
      watch:{
        UserName:function (oldV) {
          this.UserName=oldV;
          if(this.UserName.length<=5){
            this.PText='用户名长度在5-24位之间';
            this.PTextColor='red';
            this.PFontSize='0.58rem';
            this.InputOutline=' 1px solid red';
          }else if(this.UserName.length>=24){
            this.PText='用户名长度在5-24位之间';
            this.PTextColor='red';
            this.PFontSize='0.58rem';
            this.InputOutline=' 1px solid red';
          }else {
            this.PTextColor='';
            this.PFontSize='';
            this.PText='用户名只能修改一次(5-24字符字符之间)';
            this.ButtonColor='white';
            this.InputOutline='1px solid #ddd';
          }
          // console.log(this.UserName.length)
        }
      },
      methods:{
        SureToModify(event){
          if (this.UserName.length<=5){

          }else if(this.UserName.length>=24){

          }else {
            this.$store.state.UserName11=this.UserName;
              console.log(this.$store.state.UserName11);
          }
          this.$router.push({path:'accountinformation'})
        }
      }

    }
</script>

<style scoped>
  .AmendUserName{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }
  .AmendUserName_nr{
    width: 100%;
    padding: .4rem .3rem;
    font-size: .4rem;
    color: #666;
  }
  .AmendUserName_nr>p{
    margin: 0;
    padding: .4rem 0 1rem;
  }
  .AmendUserName_nr>input{
    width: 100%;
    line-height: 1.2rem;
    font-size: .7rem;
    padding: .2rem .1rem;
    border: 1px solid #ddd;
    background-color: inherit;
    outline: none;
  }
  .AmendUserName_nr>div{
    width: 100%;
    background-color: #3199E8;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
  }
</style>
