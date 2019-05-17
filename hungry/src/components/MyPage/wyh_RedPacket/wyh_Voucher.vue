<template>
    <div class="Voucher clearfix">
        <!--商家代金券页面-->
        <p class="voucher" @click="VoucherDescription"><img src="../../../assets/wenhao.png" alt="">商家代金券说明</p>
        <div class="VoucherHint">
          <img src="../../../wyhImg/diqiu.png" alt="">
          <h3>无法使用代金券</h3>
          <p>非客户端或客户端版本过低</p>
          <div @click="CliDownload">下载或升级客户端</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "wyh_Voucher",
        methods:{
          VoucherDescription(){
            this.$router.push({path:'voucherdescription'})
          },
          CliDownload(){
            this.$router.push({path:'downloadapp'})
          }
        }
    }
</script>

<style scoped>
  .Voucher{
    width: 100%;
  }
  .voucher{
    float: right;
    line-height: 2rem;
    margin-right: .5rem;
    color: #3190e8;
    font-weight: 400;
    font-size: .5rem;
  }
  .voucher>img{
    display: inline-block;
    width: .8rem;
    height: .8rem;
  }
  .VoucherHint{
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    width: 6rem;
    transform: translate(-50%,-50%);

  }
  .VoucherHint>img{
    width: 6rem;
    height: 3.4rem;
  }
  .VoucherHint>h3{
    font-size: .7rem;
    color: #666;
    margin-top: .4rem;
    margin-bottom: 0;
  }
  .VoucherHint>p{
    font-size: .5rem;
    color: #999;
    margin-top: .3rem;
    margin-bottom: .3rem;
  }
  .VoucherHint>div{
    width: 6rem;
    background-color: #56d176;
    font-size: .65rem;
    color: #fff;
    padding: .3rem;
    border-radius: .15rem;
  }

</style>
