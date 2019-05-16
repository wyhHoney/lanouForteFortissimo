<template>
    <div class="IntegralStore">
      <div class="IntegralStore_nr">
        <h3>请重新进入</h3>
        <p>请返回后重新进入积分商城</p>
        <p>~</p>
        <img src="../../../wyhImg/retrylogin.png" alt="">
      </div>

    </div>
</template>

<script>
    export default {
        name: "wyh_IntegralStore"
    }
</script>

<style scoped>
  .IntegralStore{
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
  }
  .IntegralStore_nr{
    text-align: center;
    position: relative;
    left: 0;
    top: 50%;
    transform: translate(0,-50%);
  }
  .IntegralStore_nr>h3{
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
    margin-top: 0;
    font-weight: 600;
  }
  .IntegralStore_nr>p{
    font-size: 14px;
    color: #666;
    margin-bottom: 0;
  }
  .IntegralStore_nr>img{
    margin-top: 19px;
    width: 176px;
    height: 176px;
  }

</style>
