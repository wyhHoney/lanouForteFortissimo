<template>
  <div>
    <div class="zp_container">
      <header id="zp_head-top" class="container text-center">
        <span class="pull-left">ele.me</span>
        <span class="pull-right">
          <router-link :to="{path:'/glogin'}" v-if=" ifshowdenglu" style="text-decoration: none">登陆|注册</router-link>
          <img src="../assets/home.gif" alt="" class="zp_head_top_right1" v-if="ifshouheadimg">
        </span>
      </header>
      <nav id="zp_city-nav">
        <div id="zp_city-top">
          <span>当前定位城市</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
        <router-link class="zp_guess-city" :to="{path: '/city'}" style="text-decoration: none"><div @click="zp_getAddress(guessCity.id,guessCity.name)" class="zp_hot-citys_pp " >{{guessCity.name}}</div></router-link>

      </nav>
      <section id="zp_hot-city">
        <h4 id="zp_city-title">
          热门城市
        </h4>
        <ul id="zp_city-body">
          <li v-for="item in hotCity" class="zp_hot-citys">
            <!--<a href="###"> {{item.name}}</a>-->
            <router-link class="zp_guess-city" :to="{path: '/city'}" style="text-decoration: none"><div @click="zp_getAddress(item.id,item.name)" class="zp_hot-citys_p "><div>{{item.name}}</div></div></router-link>
          </li>
        </ul>
      </section>
      <section class="zp_group-city">
        <ul id="zp_all-city-ul">
          <li v-for="(item,i) in newObj" id="zp_all-city">
            <h4>{{i}}</h4>
            <ul>
              <li  v-for="p in item" id="zp_all-city-city">
                <!--<a href="###"> {{p.name}}</a>-->
                <router-link class="zp_guess-city" :to="{path: '/city'}" style="text-decoration: none"><div @click="zp_getAddress(p.id,p.name)" class="zp_hot-citys_p"><div>{{p.name}}</div></div></router-link>
              </li>
            </ul>

          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "zp_position",
    data() {
      return {
        hotCity: [],
        groupCity: {},
        guessCity: {},
        groupCityKey: [],
        newObj: {},
        ifshowdenglu: true,
        ifshouheadimg: false,//判断是否登陆过显示那个头像
      }
    },
  methods:{
    zp_getAddress(id,name){
      // Vue.axios.get('https://elm.cangdu.org/v1/cities/1').then((res) => {
      // });
      this.$store.state.name=name;
      sessionStorage.setItem('name1',name)
      this.$store.state.id=id;
      sessionStorage.setItem('id1',id)
      }
  },
    created() {
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res) => {
        this.groupCityKey = Object.keys(res.data)
        this.groupCityKey = this.groupCityKey.sort()
        this.groupCity = res.data;
        for (let i = 0; i < this.groupCityKey.length; i++) {
          var index = this.groupCityKey[i];
          this.newObj[index] = res.data[index];
        }

      })
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((res) => {
        this.hotCity = res.data
      });
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((res) => {
        this.guessCity = res.data
      })
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        // console.log(res.data)
        if (res.data.message === '通过session获取用户信息失败') {
          this.ifshowdenglu = true;
          this.ifshouheadimg = false;
        } else {
          this.ifshowdenglu = false;
          this.ifshouheadimg = true;
        }
      })
    }
  }
</script>

<style scoped>
  .zp_head_top_right1{
    width: 1.2rem;
    height: 1.2rem;
  }
  .zp_hot-citys_p div{
    display: inline-block;
margin-left: 0.6rem;
    text-overflow: ellipsis;
  }
  zp_hot-citys_p{

  }
  .zp_hot-citys_pp{
    width: 25%;
    display: inline-block;
    margin-left: 0.6rem;
    text-overflow: ellipsis;
  }
  .zp_container {
    width: 100%;
  }

  #zp_all-city-ul {
    list-style: none;

  }

  #zp_all-city {
    color: #666;

  }
  #zp_all-city h4{
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    /*border-top: 2px solid #e4e4e4;*/
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    float: left;
    width: 100%;
  }
  #zp_all-city li a{
    color: #666666;
  }
  #zp_all-city-city {
    float: left;
    text-align: center;
    color: #666;
    border-bottom: .025rem solid #e4e4e4;
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #zp_head-top {
    width: 100%;
    height: 1.95rem;
    background-color: #3190EB;
    color: white;
    font-size: .7rem;
    padding-top: 0.2rem;
  }

  #zp_city-nav {
    width: 100%;
    font-size: .55rem;
    color: #666;
  }

  #zp_hot-city {
    width: 100%;
    list-style: none;
    text-decoration: none;
    color: #333;
    background: black;
  }
body{
  background: black1 !important;
}
  .zp_group-city {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;
  }

  .pull-left {
    float: left;
    margin-top: 5px;
  }

  .zp_hot-citys {
    float: left;
    text-align: center;
    color: #3190e8;
    /*border-bottom: .025rem solid #e4e4e4;*/
    border-right: .025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: .6rem/1.75rem Microsoft YaHei;

  }

  .pull-right {
    float: right;
    margin-top: 5px;
    color: white !important;
  }

  .pull-right a {
    color: white !important;
  }

  #zp_city-top {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 .45rem;
  }

  .zp_guess-city {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 1.8rem;
    padding: 0 .45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: .75rem/1.8rem Microsoft YaHei;
  }

  #zp_city-title {
    color: #666;
    font-weight: 400;
    text-indent: .45rem;
    /*border-top: 2px solid #e4e4e4;*/
    border-bottom: 1px solid #e4e4e4;
    font: .55rem/1.45rem Helvetica Neue;
    float: left;
    width: 100%;
    margin: 0;
  }

  #zp_city-body {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;

  }

  .zp_group-city {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    box-sizing: border-box;
  }
</style>
