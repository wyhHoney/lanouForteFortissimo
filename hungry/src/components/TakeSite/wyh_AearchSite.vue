<template>
  <!--搜索地址页面-->
    <div class="AearchSite">
      <!--头部-->
      <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>

      <!--搜索框-->
      <div class="Aearch clearfix">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="AearchValue">
        <div @click="Affirm">确认</div>
      </div>
      <p class="Aearch_p">为了满足商家的送餐要求，建议您从列表中选择地址</p>

      <div class="reminder" v-if="ShowIf">
        <p>找不到地址？</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入哦。</p>
      </div>
      <ul>
        <li v-for="(pie,pic) in GetValue" @click="SelectClick(pie)">
          <p>{{pie.name}}</p>
          <p>{{pie.address}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    import PublicHeader from '../MyPage/CommonComponents/wyh_header'//引入头部组件
    import Vue from 'vue'
    export default {
        name: "wyh_AearchSite",
        data(){
          return {
            PageTitle:'搜索地址',
            routejump:'AddLocation',//返回编辑地址页面
            AearchValue:'',//搜索框的地址
            GetValue:[],//后台返回的地址数据
            ObjSite:{
              name:'',
              address:'',
            },
            ShowIf:true,
          }
        },
        components:{
          PublicHeader
        },
        methods:{
          Affirm(){
            Vue.axios.get('https://elm.cangdu.org/v1/pois?city_id='+this.AearchValue+'&keyword='+this.AearchValue).then((res)=>{
              this.GetValue=res.data;
              // console.log(this.GetValue);
            });
            this.ShowIf=false;
          },
          SelectClick(data){
            this.$store.state.GetName=data;
            this.$router.push({path:'AddLocation'});
            // console.log(data);
          }
        }
    }
</script>

<style scoped>
  .AearchSite{
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    font-size: 0;
  }
  .Aearch{
    padding: .4rem .5rem 0 .5rem;
    font-weight: 400;
    background-color: white;
  }
  .empty{
    clear: both;
  }
  .Aearch>input{
    display: inline-block;
    float: left;
    width: 11.8rem;
    padding: .4rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: .6rem;
    outline: none;
  }
  .Aearch>div{
    display: inline-block;
    float: right;
    background-color: #3199E8;
    text-align: center;
    line-height: 1.7rem;
    width: 3rem;
    font-size: .7rem;
    color: white;
    border-radius: 5px;
  }
  .Aearch_p{
    background-color: #fff6e4;
    font-size: .62rem;
    color: #ff883f;
    text-align: center;
    padding: .2rem .5rem;
    margin: 0;
  }
  .reminder{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .reminder>p{
    font-size: .7rem;
    margin-bottom: .4rem;
    color: #969696;
  }
  ul{
    margin: 0;
   font-size: 0;
    color: #969696;
  }
  li>p{
    margin-bottom: .2rem;
  }
  li{
    background-color: #F2F2F2;
    font-size: .65rem;
    padding: .4rem .5rem;
    border-bottom: 1px solid #CCCCCC;
  }
</style>
