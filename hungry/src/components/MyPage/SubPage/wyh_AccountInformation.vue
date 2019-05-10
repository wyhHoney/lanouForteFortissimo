<template>
    <!--账户信息-->
    <div class="AccountInformation">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <div class="AccountInformation_nr">
        <form v-show="false"><input type="file" id="file" name="file" @click="Uploading($event)"></form>
        <div class="message">
            <label for="file" >
              <div class="message_list">
                <div class="message_list_left">
                 <span class="message_list_left_span">头像</span>
                </div>
                <div class="message_list_right">
                  <img src="../../../assets/yonghu.jpg" alt="" class="portrait">
                  <img src="../../../assets/jiantou.png" alt="" class="arrows">
                </div>
                <p class="empty"></p>
              </div>
            </label>


          <div class="parcel" @click="AmendUserName">
              <span class="parcel_left" >用户名</span>
            <div class="parcel_right">
              <p>{{UserName}} <img src="../../../assets/jiantou.png" alt="" class="img_jiantou"></p>
            </div>
            <p class="empty"></p>
          </div>
          <div class="parcel" @click="TakeSite">
            <span class="parcel_left" >收获地址</span>
            <div class="parcel_right">
              <p> <img src="../../../assets/jiantou.png" alt="" class="img_jiantou"></p>
            </div>
            <p class="empty"></p>
          </div>
        </div>
        <p>账号绑定</p>
        <div class="parcel">
          <img src="../../../assets/shouji11.png" alt="" class="img_shouji">
          <span class="parcel_left" >手机</span>
          <div class="parcel_right">
            <p>{{Phone}} <img src="../../../assets/jiantou.png" alt="" class="img_jiantou"></p>
          </div>
          <p class="empty"></p>
        </div>
        <p>安全设置</p>
        <div class="parcel">
          <span class="parcel_left" >用户名</span>
          <div class="parcel_right">
            <p class="xiugai">修改 <img src="../../../assets/jiantou.png" alt="" class="img_jiantou"></p>
          </div>
          <p class="empty"></p>
        </div>

        <div class="secede">退出登陆</div>
      </div>
      <!--弹出提示框-->
      <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    import Vue from 'vue'
    import PublicPrompt from '../CommonComponents/wyh_PublicPrompt'//引入提示框组件
    export default {
        name: "wyh_AccountInformation",
        data(){
          return {
            PageTitle:'账户信息',
            routejump:'myhomepage',
            UserName:'登陆或注册',//存储用户名字
            Phone:'',//存储用户电话
            HeadPortrait:'',//存储用户头像
            UeerAvatar:'',//存储用户头像
            showcom:'',
            promptContent:'',//提示框内容
          }
        },
        components:{
          PublicHeader,
          PublicPrompt,
        },
        created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{

            this.Phone=res.data.mobile;//电话
            this.HeadPortrait=res.data.avatar;//头像
            // console.log(res.data);
            if (this.$store.state.UserName11===''){
              this.UserName=res.data.username;//名字
            } else {
              this.UserName=this.$store.state.UserName11;
            }
          });
        },
        methods:{
          //文件上传的事件
          Uploading(event){
            event.preventDefault();//取消默认行为
            //弹出提示框
            this.promptContent='暂不支持此功能';
            this.showcom=true;
          },
          getMsg(data){
            this.showcom=data;
          },
          //跳转到修改用户名页面
          AmendUserName(){
            this.$router.push({path:'amendusername'})
          },
          //跳转到编辑地址页面
          TakeSite(){
            this.$router.push({path:'takesite'})
          }
        }

    }
</script>

<style scoped>
.AccountInformation{
  width: 100%;
  height: 100%;
  background-color: #F2F2F2;
}
  .empty{
    clear: both;
  }
  .AccountInformation_nr{
    width: 100%;
  }
  .AccountInformation_nr>p{
    margin: 0;
    padding: .4rem;
    font-size: .5rem;
    color: #666666;
  }
  .message{
    width: 100%;
    margin-top: .45rem;
    font-size: 0;
  }
  label{
    width: 100%;
    margin: 0;
  }
  .message_list{
    width: 100%;
    padding: .3rem .4rem;
    background-color: white;
    border-bottom: 1px solid #DDDDDD;
  }
  .message_list>p{
    margin: 0;
  }
  .message_list_left{
    float: left;
    line-height: 2rem;
  }
  .message_list_left_span{
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    text-align: center;
  }
  .message_list_right{
    float: right;
  }
  .portrait{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .arrows{
    width: .6rem;
    height: .8rem;
    margin-left: .5rem;
  }

  /*通用样式*/
  .parcel{
    /*background-color: white;*/
    border-bottom: 1px solid #CCCCCC;
    padding: .3rem .4rem;
    background-color: white;
  }
  .parcel>p{
    margin: 0;
  }
  .parcel_left{
    font-size: .6rem;
    color: #333;
    font-weight: 500;
    float: left;
    line-height: 1.4rem;

  }
  .parcel_right{
    float: right;
    font-size: 0;
  }
  .parcel_right>p{
    display: inline-block;
    font-size: .7rem;
    line-height: 1.4rem;
    color: #999999;
    font-weight: 600;
    margin: 0;
  }
  .img_jiantou{
    width: .6rem;
    height: .8rem;
    display: inline-block;
  }
  .img_shouji{
    float: left;
    display: inline-block;
    line-height: 1.4rem;
    margin-right: 0.4rem;
    margin-top: .1rem;
  }
  .xiugai{
    font-weight: 100 !important;
    font-size: 0.7rem !important;
  }
  .secede{
    /*width: 100%;*/
    margin: 1.3rem .32rem 0 .32rem;
    background-color: #D8584A;
    color: white ;
    text-align: center;
    line-height: 1.5rem;
    border-radius: .3rem;
    font-size: .6rem;
  }
</style>
