<template>
  <div>
    <PublicHeader :pagetitle="PageTitle" :hops="routejump" class="headzujian"></PublicHeader>
    <!--展示地址-->
    <section class="scroll_container">
      <section class="list_container">
        <ul class="deliveraddress">
          <li v-for="item in actieveAddressArr" @click="chooseAddress(item.address)">
            <img src="../../assets/选中.png" alt="" class="choose_address">
            <header>
              <span>{{item.name}}</span><span>{{sexfun(item.sex)}}</span><span>{{item.phone}}</span>
            </header>
            <div class="address_detail">
              <span>{{tagfun(item.tag_type)}}</span><span>{{item.address_detail}}</span><span>{{item.address}}</span>
            </div>
          </li>
        </ul>
      </section>
    </section>

    <router-link :to="{path:'/toaddnewaddress'}" style="text-decoration: none">
      <!--添加地址-->
      <a href="" class="add_icon_footer" style="text-decoration: none">
        <img src="../../assets/坐标.png" alt="">
        <span>新增加收获地址</span>
      </a>
    </router-link>
  </div>
</template>

<script>
  import PublicHeader from '../MyPage/CommonComponents/wyh_header'
  import Vue from 'vue'

  export default {
    name: "ChooseAdress",
    methods: {
      chooseAddress(i) {
        this.$router.push({path: 'tosureorder'})
        this.$store.state.waimaiAddress = i;
      },
      sexfun(i) {
        if (i === 1) {
          return '男'
        } else {
        }
        return '女'
      },
      tagfun(i) {
        if (i === 1) {
          return '家'
        } else if (i === 2) {
          return '学校'
        } else {
          return '公司'
        }
      }
    },
    components: {
      PublicHeader
    },
    data() {
      return {
        PageTitle: '选择地址  ',
        routejump: 'tosureorder',
        actieveAddressArr: [],//获取添加的地址
      }
    }, created() {

      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {

        this.user_id = res.data.user_id;

        this.$store.state.user_id = this.user_id;
        // console.log(res.data)
        Vue.axios.get('https://elm.cangdu.org/v1/users/' + this.user_id + '/addresses').then((resq) => {
          console.log(resq.data, 111)
          this.actieveAddressArr = resq.data;
        }).catch((err) => {
          // console.log(err)
        })
      })

    }
  }
</script>

<style scoped>
  .choose_address > header > span {
    margin-left: 5rem;
  }

  .choose_address {
    margin-top: 0.3rem;
    width: .8rem;
    height: .8rem;
    fill: #4cd964;
    margin-right: .4rem;
  }

  .headzujian {
    position: fixed;
    top: 0;
    z-index: 11111;
  }

  .address_detail span:nth-of-type(2) {
    font-size: .6rem;
    color: #777;
  }

  .address_detail span:nth-of-type(1) {
    font-size: .5rem;
    color: #fff;
    border-radius: .15rem;
    background-color: #ff5722;
    height: .6rem;
    line-height: .6rem;
    padding: 0 .2rem;
    margin-right: .3rem;
  }

  .deliveraddress li header span:first-of-type {
    font-size: .8rem;
    font-weight: 700;
  }

  .address_detail {
    padding-left: 1.5rem;
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .deliveraddress li header {
    position: absolute;
    left: 2rem;
    width: 80%;
    font-size: .7rem;
    color: #333;
  }

  .deliveraddress li {
    display: flex;
    /*align-items: center;*/
    justify-content: space-between;
    border-bottom: .025rem solid #f5f5f5;
    padding: .7rem;
    line-height: 1rem;
    flex-wrap: wrap;
  }

  .deliveraddress {
    background-color: #fff;
  }

  .list_container {
    padding-bottom: 5rem;
  }

  .scroll_container {
    position: fixed;
    top: 0rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 1.95rem;
    overflow-y: auto;
  }

  .add_icon_footer span {
    font-size: .7rem;
    color: #3190e8;
    margin-left: .3rem;
  }

  .add_icon_footer img {
    height: 24px;
    width: 24px;
  }

  .add_icon_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 204;
  }
</style>
