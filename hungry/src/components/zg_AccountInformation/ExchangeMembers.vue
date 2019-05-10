<template>
  <div class="Zg_head">
    <router-link :to="{path:'./basice'}"> <img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4"/></router-link>
    <div class="search">
      <span>兑换会员</span>
    </div>
    <div class="zg_text">
      <p >成功兑换后将关联到当前帐号:{{}}</p>
    </div>
  </div>
  </template>
<script>
    export default {
        name: "ExchangeMembers"
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
  .zg_text{
    color: #5e5e5e;
    background-color: rgba(169,169,169,0.1);
    padding: .4rem .8rem;
    width: 100%;

  }
</style>
