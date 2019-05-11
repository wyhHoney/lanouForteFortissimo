<template>
  <div>
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <section class="choose_invoice" @click="changeimg">
      <span>不需要开发票</span>
      <!--<img src="../../assets/选中.png" alt="">-->
      <img src="../../assets/选中.png" alt="" class="invoice" v-if="xianshi">
      <img src="../../assets/选择.png" alt="" class="invoice" v-if="yincang">
    </section>
   <router-link :to="{path:'tosureorder'}">
     <div class="determine">确定</div>
   </router-link>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'

  export default {
    name: "Invoice",
    components: {
      PublicHeader,

    }, data() {
      return {
        PageTitle: '选择发票抬头',
        routejump: 'tosureorder',
        ifchangeimg: false,//切换选中
        xianshi: true,
        yincang: false,

      }
    },
    methods: {
      changeimg() {
        this.xianshi = !this.xianshi;
        this.yincang = !this.yincang;
        console.log(this.yincang)
      },

    }
  }
</script>

<style scoped>
  .invoice {
    width: .8rem;
    height: .8rem;
  }

  .choose_invoice span {
    font-size: .75rem;
    color: #333;
  }

  .choose_invoice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    line-height: 2.5rem;
    margin-top: .5rem;
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
    margin-top: .5rem;
  }
</style>
