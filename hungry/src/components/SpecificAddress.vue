<template>
  <div class="container">
    <header id="zp_head_top">
      <section></section>
      <section class="text-center zp_address">
        <span>{{name}}</span>
      </section>
      <router-link :to="{path:'/toCity'}"><a href="###" class="zp_text-right">
        切换城市
      </a></router-link>
    </header>
    <form id="zp_city_form">
      <div><input type="text" class="zp_input1" placeholder="输入学校、商务楼、地址" v-model="zp_checkAddress"></div>
      <!--<div><input type="submit" class="zp_input2" @click="zp_submitPro" name="submit"></div>-->
      <div>
        <button class="zp_input2" @click.prevent="zp_submitPro">提交</button>
      </div>
    </form>
    <header id="zp_city_history">搜索历史
      <div v-if="zp_ifHistory">
        <ul>
          <li v-for="item in zp_afterDelete">
            <a href="###" @click="zp_inNextPage(item)">
              <h4 class="zp_searchProId">{{item.name}}pppppppp</h4>
              <p class="zp_searchProAddress">{{item.address}}</p>
            </a>
          </li>
        </ul>
        <a href="###" @click="zp_clearHistory" v-if="zp_afterDelete.length===0?false:true">清除所有历史纪录</a>
      </div>
    </header>
    <ul>
      <router-link :to="{path:'/zp_toMyHome'}">
        <li v-for="(item,i) in zp_searchResult" id="zp_searchPro">
          <!--//点击具体地址转入主界面-->
          <a href="###" @click="zp_inAddress(i)">
            <h4 class="zp_searchProId">{{item.name}}</h4>
            <p class="zp_searchProAddress">{{item.address}}</p>
          </a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "SpecificAddress",
    data() {
      return {
        name: "",
        zp_checkAddress: '',
        addressId: Number,
        zp_searchResult: [],
        zp_historyPro: [],//存历史纪录
        zp_getHistoryPro: [],//取历史信息
        zp_afterDelete: [],
        zp_ifShow: true,//控制删除数据是否隐藏
        zp_ifHistory: true
      }
    },
    created() {
      this.name = this.$store.state.name
      this.$store.state.zp_afterDelete = this.zp_searchResult
    },
    methods: {
      zp_submitPro() {
        this.zp_ifHistory = false;
        let address = this.zp_checkAddress
        let id = this.$store.state.id
        Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id=' + id + '&keyword=' + address + '&type=search').then((res) => {
          this.zp_searchResult = res.data
        });

      },
      zp_inAddress(i) {
        this.$store.state.weizhi = this.zp_searchResult[i].geohash
        //存入点击的地址
        this.$store.state.afterSearchName = this.zp_searchResult[i].name;
        //存入点击的经纬度
        this.$store.state.afterSearchLatitude = this.zp_searchResult[i].latitude
        this.$store.state.afterSearchLongitude = this.zp_searchResult[i].longitude
        this.$store.state.zp_historyPro.push(this.zp_searchResult[i]);

        localStorage.setItem('searchHistory', JSON.stringify(this.$store.state.zp_historyPro));
        // console.log(localStorage.getItem('searchHistory'))
        sessionStorage.setItem('longitude', this.zp_searchResult[i].longitude)
        sessionStorage.setItem('afterSearchName', this.zp_searchResult[i].name)
        sessionStorage.setItem('latitude', this.zp_searchResult[i].latitude)

      },
      zp_clearHistory() {
        localStorage.removeItem('searchHistory');
        this.zp_afterDelete = [];
      },
      zp_inNextPage(i) {
        // //存入点击的地址
        // this.$store.state.afterSearchName = this.zp_searchResult[i].name;
        // console.log(i)
        sessionStorage.setItem('longitude', i.longitude)
        sessionStorage.setItem('afterSearchName', i.name)
        sessionStorage.setItem('latitude', i.latitude)
        this.$router.push({path: '/zp_toMyHome'})
      }
    },
    mounted() {
      this.zp_getHistoryPro = JSON.parse(localStorage.getItem('searchHistory'));
      this.zp_getHistoryPro = [...new Set(this.zp_getHistoryPro)];
      this.zp_afterDelete = this.zp_getHistoryPro
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 2.35rem;
    width: 100%;
  }

  #zp_searchPro a {
    text-decoration: none;
  }

  #zp_searchPro, .zp_searchProAddress, .zp_searchProId {
    margin: 0 auto .35rem;
    font-size: .65rem;
    color: #333;
    width: 100%;
  }

  .zp_searchProId {
    margin-top: 1rem;
  }

  #zp_head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
  }

  #zp_searchPro {
    list-style: none;
  }

  .zp_text-right {
    right: .4rem;
    font-size: .6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .zp_address {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    color: #fff;
    text-align: center;
  }

  .zp_address span {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }

  section {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  #zp_city_form {
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: .4rem;
    display: block;
  }

  #zp_city_form div {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .zp_input1 {
    border: 1px solid #e4e4e4;
    padding: 0 .3rem;
    font-size: .65rem;
    color: #333;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    height: 1.4rem;
  }

  .zp_input2 {
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    border-radius: .1rem;
    margin-bottom: .4rem;
    width: 100%;
    height: 1.4rem;
    border: 0;

  }

  #zp_city_history {
    width: 100%;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: .5rem;
    font: .475rem/.8rem Microsoft YaHei;
  }

  #zp_city_history ul {
    border-top: 1px solid #e4e4e4;
    list-style: none;
  }

  #zp_city_history li {
    border-bottom: 1px solid #e4e4e4;
  }
</style>
