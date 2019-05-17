<template>
  <!--代金券说明-->
  <div class="VoucherDescription">
    <!--头部-->
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <!--内容-->
    <div class="wenti">
      <h4>Q1: 什么是商家代金券？</h4>
      <p>商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p>
      <h4>Q2: 怎么获得商家代金券？</h4>
      <p>进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</p>
      <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
      <h4>Q3: 商家代金券使用条件</h4>
      <p>商家代金券仅限在指定商家使用</p>
      <p>商家代金券仅限在线支付使用</p>
      <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
    </div>
  </div>

</template>

<script>
  import PublicHeader from '../CommonComponents/wyh_header'

  export default {
    name: "wyh_VoucherDescription",
    data() {
      return {
        PageTitle: '代金券说明',
        routejump: 'voucher',
      }
    },
    components: {
      PublicHeader
    }
  }
</script>

<style scoped>
  .VoucherDescription {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .wenti{
    font-size: .6rem;
    color: #666;
    padding: 0 .5rem .5rem;
  }
  .wenti>h4{
    color: #333;
    line-height: 2rem;
    margin: 0;
    font-weight: 400;
    font-size: 1.17em;
  }
  .wenti>p{
    font-size: .6rem;
    color: #666;
    line-height: 1rem;
    margin: 0;
  }

</style>
