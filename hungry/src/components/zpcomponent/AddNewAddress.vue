<template>
  <div>
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <section class="page_text_container">
      <section class="section_list">
        <span class="section_left">联系人
        </span>
        <section class="section_right">
          <input type="text" class="input_style" name="name" placeholder="你的名字">
          <div class="choose_sex">
            <span class="choose_span">
              <img src="../../assets/选择.png" alt="" class="maning">
              <span>先生</span>
            </span>
            <span class="choose_span">
              <img src="../../assets/未选中.png" alt="" class="womanimg">
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
            <input type="text" name="phone" placeholder="你的手机号" class="input_style">
            <img src="../../assets/手机.png" alt="" class="addphone">
          </div>
        </section>
      </section>
      <section class="section_list">
        <span class="section_left">送餐地址</span>
        <section class="section_right">
          <div class="choose_address">二七广场</div>
          <input type="text" name="address_detail" placeholder="详细地址（如门牌号等）" class="input_style">
        </section>
      </section>
      <section class="section_list">
         <span class="section_left">
         标签
        </span>
        <section class="section_right">
          <div class="phone_add">
            <input type="text" name="tag" placeholder="无/家/学校/公司" class="input_style">
          </div>
        </section>
      </section>
    </section>
    <div class="determine">确定</div>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import Vue from 'vue'

  export default {
    name: "AddNewAddress",
    components: {
      PublicHeader
    }, data() {
      return {
        PageTitle: '选择地址',
        routejump: 'tochooseaddress',
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
