<template>
    <div class="TakeSite">
      <!--头部-->
      <header>
        <div class="Return" @click="Return"></div>
        <div class="Mynav"><p>{{pagetitle}}</p></div>
        <div class="Compile_right" @click="Compile">{{ShowText}}</div>
      </header>

      <!--内容-->
      <div class="TakeSite_nr">
        <ul class="DetailedAddress_ul">
          <li class="DetailedAddress">
            <div>
              <p>郑州</p><br/>
              <p>123456</p>
            </div>
            <span  v-if="ShowIf" @click="DeleteSite"><span class="Delete" >删除</span></span>
            <span class="empty"></span>
          </li>
        </ul>

        <!--新增地址栏-->
        <div class="AddSite" @click="AddSite">
            <div>新增地址栏 </div>
            <div><img src="../../assets/jiantou.png" alt=""></div>
            <p class="empty"></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wyh_CompileSite",
        data(){
          return {
            pagetitle:'编辑地址',
            ShowIf:false,
            ShowText:'编辑'
          }
        },
        methods:{
          //返回按钮事件
          Return(){
            this.$router.push({path:'accountinformation'})
          },
          //添加地址事件
          AddSite(){

          },
          //点击编辑按钮
          Compile(){
              if(this.ShowText=='编辑'){
                this.ShowText='完成';
                this.ShowIf=true;
              }else if(this.ShowText=='完成'){
                this.ShowText='编辑';
                this.ShowIf=false
              }
          },
          //删除地址事件
          DeleteSite(){

          }
        },
    }
</script>

<style scoped>
  .TakeSite{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }
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
    background: url("../../assets/fanhui.png") no-repeat center center;
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
  .Compile_right{
    position: absolute;
    top: 0;
    right: .3rem;
    line-height: 1.95rem;
    font-size: .7rem;
    font-weight: 600;
  }

  /*内容*/
  .DetailedAddress_ul{
    margin-top: .4rem;
    background-color: red;
  }
  .empty{
    clear: both;
  }
  .DetailedAddress{
    width: 100%;
    background-color: #FFF8C3;
    border: 1px solid #F2F2F2;
    padding: .4rem;
    /*font-size: 0;*/
  }
  .DetailedAddress>div{
    display: inline-block;
    font-size: .7rem;
    /*float: left;*/
  }
  .DetailedAddress>span{
    display: inline-block;
    float: right;
    line-height: 2rem;
    font-size: .5rem;
  }
  .DetailedAddress>div>p{
    margin: 0;
    display: inline-block;
    font-size: .6rem;
  }
  .DetailedAddress>div>p:nth-child(1){
    font-weight: 700;
  }
  .Delete{
    background-color: #D8584A;
    padding: .2rem .4rem;
    border-radius: .1rem;
  }

  /*添加地址栏*/
  .AddSite{
    margin-top: .4rem;
    background-color: white;
    padding: .2rem .4rem;
    border-bottom: 1px solid #D9D9D9;
    border-top: 1px solid #D9D9D9;
  }
  .AddSite>div{
    display: inline-block;
    line-height: 1.4rem;
  }
  .AddSite>div:nth-child(1){
    float: left;
  }
  .AddSite>div:nth-child(2){
    float: right;
  }
  .AddSite>div:nth-child(2)>img{
    width: .6rem;
    height: .6rem;
  }
  .AddSite>p{
    margin: 0;
  }
</style>
