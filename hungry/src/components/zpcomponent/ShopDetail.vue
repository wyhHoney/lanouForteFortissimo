<template>
  <div>
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <section class="activities_container">
      <header>活动与属性</header>
      <ul class="actibities_ul">
        <li>
          <span style="background-color: rgb(240, 115, 115);">减</span><span>满30减5，满60减8(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(227, 238, 13);">领</span><span>11(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(237, 193, 35);">特</span><span>22(APP专享)</span>
        </li>
      </ul>
      <ul class="actibities_ul">
        <li>
          <span style="background-color: rgb(153, 153, 153);">保</span><span> 已加入“外卖保”计划，食品安全有保障(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(87, 169, 255);">准</span><span> 准时必达，超时秒赔(APP专享)</span>
        </li>
        <li>
          <span style="background-color: rgb(153, 153, 153);">票</span><span> 该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
        </li>
      </ul>
    </section>
    <section class="shop_status_container">
      <router-link :to="{path:'/jiandu'}">
        <a href="###" class="shop_status_header">
          <span class="shop_detail_title">食品监督安全公示</span>
          <div><span class="identification_detail">企业认证详情</span></div>
        </a>
      </router-link>
      <section class="shop_statu_detail">
        <div><img src="../../assets/哭脸.png" alt="" class="res-well"></div>
        <div class="check_date">
          <p><span>监督检查结果：</span><span class="shop_status_bad">差</span></p>
          <p><span>检查日期：</span><span></span></p>
        </div>
      </section>
    </section>
    <section class="shop_status_info">
      <header>商家信息</header>
      <p>{{objpro1.name}}</p>
      <p>地址：{{objpro1.address}}</p>
      <p>营业时间：{{objpro1.opening_hours}}</p>
      <p><span>营业执照</span><img src="../../assets/右箭头.png" alt=""></p>
      <p><span>餐饮服务许可证</span> <img src="../../assets/右箭头.png" alt=""></p>
    </section>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import Vue from 'vue'

  export default {
    name: "ShopDetail",
    components: {
      PublicHeader
    }, data() {
      return {
        PageTitle: '商家详情  ',
        routejump: 'toinshop',
        objpro1: {}
      }
    }, created() {
      Vue.axios.get('https://elm.cangdu.org/shopping/restaurant/' + this.$store.state.shopId + '').then((res) => {
        console.log(res.data)
        this.objpro1 = res.data
      });
    }
  }
</script>

<style scoped>
  .shop_status_container img {
    width: 2rem;
    height: 2rem;
    margin-right: .6rem;
  }

  .shop_status_info p img {
    width: 1.1rem;
    height: 1.1rem;
    font-size: .6rem;
    color: #666;
    vertical-align: -.3rem;
    position: absolute;
    right: 0;
  }

  .shop_status_info header {
    line-height: 1.8rem;
    padding: 0 .6rem;
    font-size: .75rem;
    color: #333;
    border-bottom: .025rem solid #f1f1f1;
  }

  .shop_status_info p {
    position: relative;
    font-size: .6rem;
    color: #666;
    padding: .7rem .6rem .7rem 0;
    margin-left: .6rem;
    border-bottom: .025rem solid #f5f5f5;
  }

  .identification_detail {
    font-size: .7rem;
    color: #bbb;
    vertical-align: middle;
  }

  .shop_detail_title {
    font-size: .75rem;
    color: #333;
  }

  .shop_status_header {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
  }

  .shop_statu_detail {
    display: flex;
    padding: .6rem;
  }

  .shop_status_bad {
    color: red;
  }

  .actibities_ul span:first-of-type {
    font-size: .45rem;
    color: #fff;
    padding: .1rem;
    border: 1px;
    border-radius: .1rem;
    margin-right: .2rem;

  }

  .actibities_ul {
    padding: 0 .6rem;
  }

  .actibities_ul li {
    list-style: none;
    margin-bottom: .5rem;
  }

  .activities_container header {
    font-size: .75rem;
    color: #333;
    line-height: 1.8rem;
    padding-left: .6rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }

  .activities_container {
    background-color: #fff;
    margin: .4rem 0;
    padding-bottom: .6rem;
  }
</style>
