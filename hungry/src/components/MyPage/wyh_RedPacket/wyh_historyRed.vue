<template>
  <!--历史红包-->
    <div class="HistoryRed">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
      <div class="Redpackage" v-for="pie in RedArr1">
        <div class="package clearfix" >
          <div class="package_lift">
            <p>￥<span>{{pie.amount.toFixed(1)}}</span></p>
            <p>{{pie.description_map.sum_condition}}</p>
          </div>
          <div class="package_right clearfix">
            <div class="package_right_lefft">
              <h4>{{pie.name}}</h4>
              <p>{{pie.description_map.validity_periods}}</p>
              <p>{{pie.description_map.phone}}</p>
            </div>
            <div class="package_right_right"></div>
          </div>
        </div>
        <!--<p class="astrict">{{pie.limit_map}}</p>-->
      </div>
    </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    import Vue from 'vue'
    export default {
        name: "wyh_historyRed",
        data(){
          return {
            PageTitle:'历史红包',
            routejump:'discount',
            RedArr1:'',
          }
        },
        components:{
          PublicHeader
        },
        created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/'+res.data.user_id+'/expired_hongbaos?limit=20&offset=0').then((ress)=>{
              this.RedArr1=ress.data
            })
          })
        }
    }
</script>

<style scoped>
  .HistoryRed{
    width: 100%;
    background-color: #f5f5f5;
  }
  /*红包样式*/
  .Redpackage{
    border-right: 10px;
    margin-top: .5rem;
  }
  .package {
    padding: 1rem .5rem .8rem;
    color: #333;
    font-weight: 400;
    border-radius: 10px 10px 0 0;
    background: white url("../../../wyhImg/expired.png") repeat-x;
    background-size: 4% 4%;
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
    color: #CCCCCC;
    font-weight: 700;
    margin: 0;
  }

  .package_lift > p:nth-child(1) > span {
    font-size: 1.5rem;
    color: #CCCCCC;
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
    position: absolute;
    right: .5rem;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    float: right;
    font-size: .75rem;
    background: url("../../../wyhImg/过期.png") no-repeat center center;
    background-size: 100% 100%;
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

</style>
