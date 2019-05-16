<template>
    <div>
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <section class="shop_status_container">
          <div class="shop_status_header">
            <span class="shop_detail_title" >食品监督安全公示</span>
            <div><span class="identification_detail">企业认证详情</span></div>
          </div>
        <section class="shop_statu_detail">
          <div><img src="../../assets/哭脸.png" alt="" class="res-well"></div>
          <div class="check_date">
            <p><span>监督检查结果：</span><span class="shop_status_bad">差</span></p>
            <p><span>检查日期：</span><span></span></p>
          </div>
        </section>
      </section>
      <section class="shop_status_container">
        <header><span>工商登记信息</span></header>
        <ul>
          <li>
            <p>企业名称</p>
          </li>
          <li>
            <p>工商执照注册号</p>
          </li>
          <li>
            <p>注册资本</p>
          </li>
          <li>
            <p>注册地址</p>
          </li>
          <li>
            <p>属地监管所</p>
          </li>
          <li>
            <p>法定代表人</p>
          </li>
          <li>
            <p>经营范围</p>
          </li>
        </ul>
      </section>
      <section class="shop_status_container">
        <header><span>餐饮许可证</span></header>
        <ul>
          <li>
            <p>营业范围</p>
          </li>
          <li>
            <p>许可证有效期</p>
          </li>
          <li>
            <p>许可证号</p>
          </li>
          <li>
            <p>发证时间</p>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'//引入头部组件
    export default {
        name: "shipin",
      data(){
          return {
            PageTitle: '食品监督安全公示',
            routejump: 'toshopdetail',
          }
      },
      components:{
        PublicHeader
      }
    }
</script>

<style scoped>
  ul li p{
    font-size: .55rem;
    color: #333;
    line-height: 1rem;
  }
  ul li {
    list-style: none;
    margin-bottom: .4rem
  }
  ul{
    margin-left: 1rem;
    padding: .4rem 0;
  }
  .shop_status_container header{
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
    font-size: .75rem;
    color: #333;
  }
  .shop_status_container img{
    width: 2rem;
    height: 2rem;
    margin-right: .6rem;
  }
  .shop_status_info p img{
    width: 1.1rem;
    height: 1.1rem;
    font-size: .6rem;
    color: #666;
    vertical-align: -.3rem;
    position: absolute;
    right: 0;
  }
  .shop_status_info header{
    line-height: 1.8rem;
    padding: 0 .6rem;
    font-size: .75rem;
    color: #333;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shop_status_info p{
    position: relative;
    font-size: .6rem;
    color: #666;
    padding: .7rem .6rem .7rem 0;
    margin-left: .6rem;
    border-bottom: .025rem solid #f5f5f5;
  }
  .identification_detail{
    font-size: .7rem;
    color: #bbb;
    vertical-align: middle;
  }
  .shop_detail_title{
    font-size: .75rem;
    color: #333;
  }
  .shop_status_header{
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1.8rem;
    padding: 0 .6rem;
    border-bottom: .025rem solid #f1f1f1;
  }
  .shop_statu_detail{
    display: flex;
    padding: .6rem;
  }
  .shop_status_bad{
    color: red;
  }
  .actibities_ul span:first-of-type{
    font-size: .45rem;
    color: #fff;
    padding: .1rem;
    border: 1px;
    border-radius: .1rem;
    margin-right: .2rem;

  }
  .actibities_ul{
    padding: 0 .6rem;
  }
  .actibities_ul li{
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
