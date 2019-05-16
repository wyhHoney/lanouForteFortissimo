<template>
  <div class="RedPacket">
    <div>
      <p class="redpacket_p">有 <span class="red">{{RedArr.length}}</span>个红包即将过期 <span class="explain" @click="redexplain"><img src="" alt="">红包说明</span>
      </p>
      <div class="package clearfix" v-for="pie in RedArr">
        <div class="package_lift">
          <p>￥<span>{{pie.amount}}</span></p>
          <p>{{pie.description_map.sum_condition}}</p>
        </div>
        <div class="package_right clearfix">
          <div class="package_right_lefft">
            <h4>{{pie.name}}</h4>
            <p>{{pie.description_map.validity_periods}}</p>
            <p>{{pie.description_map.phone}}</p>
          </div>
          <div class="package_right_right">{{pie.description_map.validity_delta}}</div>
        </div>
      </div>
      <p class="astrict">限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>

      <div class="history">
        <span @click="historyred">查看历史红包></span>
      </div>

      <div class="bottomminute">
        <div>兑换红包</div>
        <div>推荐有奖</div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "wyh_RedPacket",
    data() {
      return {
        RedArr: [],//存储可用红包信息

      }
    },
    methods: {
      //跳转红包说明页面
      redexplain() {
        this.$router.push({path: 'explain'})
      },
      //查看历史红包页面
      historyred() {
        this.$router.push({path: 'historyred'})
      }
    },
    created() {
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res) => {
        Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/' + res.data.user_id + '/hongbaos?limit=20&offset=0').then((ress) => {
          this.RedArr = ress.data;
        })
      })
    }
  }
</script>

<style scoped>
  .RedPacket {
    padding: 0 .7rem;
  }

  .redpacket_p {
    color: #666;
    font-weight: 400;
    font-size: .5rem;
    line-height: 2rem;
    margin: 0;
  }

  .red {
    color: red;
  }

  .explain {
    color: #3190E8;
    float: right;
  }

  .explain > img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("../../../assets/wenhao.png") no-repeat center center;
    background-size: 70% 70%;
  }

  /*红包样式*/
  .package {
    padding: 1rem .5rem .8rem;
    color: #333;
    font-weight: 400;
    border-radius: 10px;
    background: white url("../../../wyhImg/hongbao.png") repeat-x;
    background-size: 4% 4%;
    margin-bottom: .5rem;
  }

  .package_lift {
    float: left;
    border-right: .025rem dotted #ccc;
    padding-right: .7rem;
  }

  .package_right {
    float: right;
  }

  .package_lift > p {
    font-size: .4rem;
    color: #999;
    margin: 0;
  }

  .package_lift > p:nth-child(1) {
    font-size: .75rem;
    color: #ff5340;
    font-weight: 700;
    margin: 0;
  }

  .package_lift > p:nth-child(1) > span {
    font-size: 1.5rem;
    color: #ff5340;
    font-weight: 400;
  }

  .package_right {
    width: 70%;
    padding-top: .3rem;
  }

  .package_right_lefft {
    float: left;
  }

  .package_right_lefft > h4 {
    font-size: .7rem;
    color: #666;
    margin: 0;
    margin-bottom: .2rem;
  }

  .package_right_lefft > p {
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    margin: 0;
  }

  .package_right_right {
    float: right;
    font-size: .75rem;
    color: #ff5340;
  }

  .astrict {
    list-style-type: disc;
    font-size: .4rem;
    color: #999;
    background-color: #f9f9f9;
    padding: .4rem;
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    margin-bottom: 0;
  }

  .history {
    text-align: center;
    font-size: .5rem;
    color: #999;
    margin-right: .2rem;
    margin-top: 1rem;
  }

  .bottomminute {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0;
    background-color: white;
  }

  .bottomminute > div {
    width: 50%;
    display: inline-block;
    line-height: 2rem;
    text-align: center;
    font-size: .7rem;
    color: #555;
  }

  .bottomminute > div:nth-child(1) {
    border-right: 1px solid #f5f5f5;
  }


</style>
