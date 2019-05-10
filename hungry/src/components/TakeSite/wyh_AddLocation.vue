<template>
    <!--新增地址页面-->
    <div class="AddLocation">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

      <!--内容-->
      <div class="ImportList">
        <input type="text" placeholder="请填写你的名字">
        <input type="text" placeholder="小区/写字楼/学校等">
        <input type="text" placeholder="请写详细送餐地址">
        <input type="text" placeholder="请填写能够联系到您的手机号">
        <input type="text" placeholder="备用联系电话(选填)">
      </div>
      <!--按钮-->
      <div class="Button_Add">
      <div class="Button_Add_nr">新增地址</div>
      </div>
    </div>
</template>

<script>
    import PublicHeader from '../MyPage/CommonComponents/wyh_header'//引入头部组件
    export default {
        name: "wyh_AddLocation",
        data(){
          return {
            PageTitle:'新增地址',
            routejump:'PublicHeader,',//返回编辑地址页面
          }
        },
        components:{
          PublicHeader,
        }
    }
</script>

<style scoped>
  .AddLocation{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
  }
  .ImportList{
    width: 100%;
    background-color: white;
    padding: .4rem .5rem;
    margin-top: .4rem;
  }
  .ImportList>input{
    width: 100%;
    font-size: .6rem;
    padding: .3rem;
    background-color: #f2f2f2;
    border-radius: 3px;
    margin-bottom: .4rem;
    border: 1px solid #ddd;
    outline: none;
  }
  .Button_Add{
    padding: .4rem .5rem;
  }
  .Button_Add_nr{
    width: 100%;
    background-color: #4CD964;
    color: #B7F0C1;
    text-align: center;
    display: inline-block;
    line-height: 1.6rem;
    font-weight: 700;
    font-size: .6rem;
    border-radius: 3px;
  }
</style>
