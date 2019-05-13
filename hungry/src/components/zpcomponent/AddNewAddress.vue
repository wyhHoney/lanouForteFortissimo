<template>
  <div>
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <!--弹出提示框-->
    <PublicPrompt v-if="showcom" :showcom="showcom" @update="getMsg($event)" :prompt="promptContent"></PublicPrompt>
    <section class="page_text_container">
      <section class="section_list">
        <span class="section_left">联系人
        </span>
        <section class="section_right">
          <input type="text" class="input_style" name="name" placeholder="你的名字" v-model="yourname">
          <div class="choose_sex" >
            <span class="choose_span" @click="chooseman">
              <img src="../../assets/选中.png" alt="" class="maning" v-if="manshow">
              <img src="../../assets/未选中.png" alt="" class="maning" v-if="womanshow">
              <span>先生</span>
            </span>
            <span class="choose_span" @click="choosewoman">
              <img src="../../assets/未选中.png" alt="" class="womanimg" v-if="manshow">
              <img src="../../assets/选中.png" alt="" class="womanimg" v-if="womanshow">
              <span>女生</span>
            </span>
          </div>
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">
          联系电话
        </span>
        <section class="section_right">
          <div class="phone_add">
            <input type="text" name="phone" placeholder="你的手机号" class="input_style" v-model="yourphone">
            <img src="../../assets/手机.png" alt="" class="addphone">
          </div>
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">送餐地址</span>
        <section class="section_right">
          <!--选择定位地址-->
          <router-link :to="{path:'/tocheckLunchAddress'}"><div class="choose_address">您的地址{{$store.state.GetName.name}}</div></router-link>
          <input type="text" name="address_detail" placeholder="详细地址（如门牌号等）" class="input_style" v-model="yourdoor">
        </section>
      </section>
      <section class="section_list">
         <span class="section_left">
         标签
        </span>
        <section class="section_right">
          <div class="phone_add">
            <input type="text" name="tag" placeholder="无/家/学校/公司" class="input_style"  v-model="biaoqian" @change="jianting">
          </div>
        </section>
      </section>
    </section>
    <div class="determine" @click="sureAdd">确定</div>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import Vue from 'vue'
  import PublicPrompt from '../MyPage/CommonComponents/wyh_PublicPrompt'//引入提示框组件
  export default {
    name: "AddNewAddress",
    components: {
      PublicHeader,
      PublicPrompt
    }, data() {
      return {
        PageTitle: '选择地址',
        routejump: 'tochooseaddress',
        yourname:'',//存联系人名字
        yoursex:Number,//存性别
        yourphone:'',//你的号码
        yourdoor:'',//你的门牌号
        biaoqian:'',//标签
        tg_type:Number,
        showcom:'',//提示框显示隐藏
        promptContent:'',//提示框内容
        manshow:true,
        womanshow:false
      }
    },
    methods:{
      //接受提示框返回的数据
      getMsg(data){
        this.showcom=data;
      },
      jianting(){
        if(this.biaoqian==='家'){
          this.tg_type=1
        }else if (this.biaoqian==='学校'){
          this.tg_type=2
        }else if(this.biaoqian==='公司'){
          this.tg_type=3
        }else {
          this.tg_type=1
        }
      },

      //点击选择性别
      chooseman(){
        this.yoursex=1
        this.manshow=true
          this.womanshow=false
      },
      choosewoman(){
        this.yoursex=2;
        this.manshow=false
          this.womanshow=true
      },
      sureAdd(){
        console.log(this.$store.state.GetName.name,this.yourdoor,this.$store.state.GetName.geohash,this.yourname,this.yourphone,this.yoursex,this.tg_type,this.$store.state.user_id)
        Vue.axios.post('https://elm.cangdu.org/v1/users/'+this.$store.state.user_id+'/addresses',{
          // user_id :1,
          address:this.$store.state.GetName.name,
          address_detail:this.yourdoor,
          geohash:this.$store.state.GetName.geohash,
          name:this.yourname,
          phone:this.yourphone,
          tag:'12',
          sex:this.yoursex,
          phone_bk:"222",
          tag_type:this.tg_type
        }).then((res)=>{
          console.log(res.data)
        })
        if(this.$store.state.user_id===undefined){
          //弹出提示框
          this.promptContent='用户名id错误';
          this.showcom=true;
        }
      }
    }
  }
</script>

<style scoped>
  .section_right input{
    outline: none;
  }
  .choose_address{
    font-size: .7rem;
    color: #999;
    line-height: 2.5rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .phone_add{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .addphone{
    height: 20px;
    width: 20px;
  }
  .maning,.womanimg{
    margin-right: .3rem;
    width: .8rem;
    height: .8rem;
  }
  .choose_span{
    font-size: .7rem;
    color: #333;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-right: .8rem;
  }
  .choose_sex {
    display: flex;
    line-height: 2.5rem;
    border-top: .025rem solid #f5f5f5;
  }

  .input_style {
    width: 100%;
    height: 2.5rem;
    font-size: .7rem;
    color: #999;
    border: none;
  }

  .section_right {
    flex: 5;
  }

  .section_left {
    font-size: .7rem;
    color: #333;
    -ms-flex: 2;
    flex: 2;
    line-height: 2.5rem;
  }

  .section_list {
    display: flex;
    border-bottom: .001rem solid #f5f5f5;
  }

  .page_text_container {
    background-color: #fff;
    padding: 0 .7rem;
  }

  .determine {
    background-color: #4cd964;
    font-size: .7rem;
    color: #fff;
    text-align: center;
    margin: 0 .7rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    margin-top: .6rem;
  }
</style>
