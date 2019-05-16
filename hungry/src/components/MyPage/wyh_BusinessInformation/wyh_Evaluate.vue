<template>
    <!--店铺评价信息-->
    <div class="Evaluate">
      <div class="Evaluate_header clearfix">
        <div class="Evaluate_header_left">
          <p>{{Comprehensive}}</p>
          <p>综合评价</p>
          <p>高于周边商家{{Exceed}}%</p>
        </div>
        <div class="Evaluate_header_right">
          <p>服务态度 <span class="xingxing"></span><span class="xingxing"></span><span class="xingxing"></span><span class="xingxing"></span><span>{{service}}</span></p>
          <p>菜品评价 <span class="xingxing"></span><span class="xingxing"></span><span class="xingxing"></span><span class="xingxing"></span><span>{{cuisine}}</span></p>
          <p>送达时间 <span>分钟</span></p>
        </div>

      </div>
      <!--评价内容-->
      <div class="CommentsSection">
        <ul class="CommentsSection_lei">
          <li v-for="(pie,i) in evaluateClassify" @click="ClickLi(i)" :class="biaoqian===i?'biaoqian11':pie.name==='不满意'?'biaoqian22':'biaoqian'" >{{pie.name}}（{{pie.count}}）</li>
        </ul>

          <ul class="Comment">
            <li class="Comment_list clearfix" v-for="pie in evaluateMessage">
              <img :src="'https://fuss10.elemecdn.com/'+pie.avatar+'.jpeg'" alt="">
              <div class="Comment_div">
                <p class="Comment_div_p1">{{pie.username}}  <span>{{pie.rated_at}}</span></p>
                <p class="Comment_div_p1"><span></span>{{pie.time_spent_desc}}</p>
                <img :src="'https://fuss10.elemecdn.com/'+paa.image_hash+'.jpeg'" alt="" v-for="paa in pie.item_ratings">
                <ul>
                  <li v-for="paa in pie.item_ratings">{{paa.food_name}}</li>
                </ul>
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "wyh_Evaluate",
        data(){
          return {
            Comprehensive:'',//综合评分
            Exceed:'',//高于周边商家
            cuisine:0,//菜品评价
            service:0,//服务态度
            evaluateClassify:[],//评价分类
            evaluateMessage:[],//评价信息
            biaoqian:'',//修改分类样式

          }
        },
        created(){
          //18.获取评价分数
          Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.shopId+'/ratings/scores').then((res)=>{
            this.Comprehensive= res.data.food_score.toFixed(1)//综合评分
            this.Exceed =(res.data.compare_rating*100).toFixed(1)//高于周边商家
            this.cuisine=res.data.food_score.toFixed(1)//菜品评价
            this.service=res.data.service_score.toFixed(1)//服务态度
          });
          //19.过去评价分类
          Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.shopId+'/ratings/tags').then((res)=>{
            // console.log(res.data)
            this.evaluateClassify=res.data;
          });
          //17.获取评价信息
          Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.shopId+'/ratings').then((res)=>{
            this.evaluateMessage=res.data;
          });

        },
        methods:{
          ClickLi(data){
            this.biaoqian=data;
          },
        },

    }
</script>

<style scoped>
.Evaluate{
  width: 100%;
  padding-bottom: 3rem;
}
  .Evaluate_header{
    background-color: #fff;
    padding: .8rem .5rem;
    margin-bottom: .5rem;
  }
  .Evaluate_header_left{
    float: left;
    text-align: center;
    margin: 0 1.5rem;
  }
  .Evaluate_header_left>p{
    margin: 0;
  }
.Evaluate_header_left>p:nth-child(1){
  font-size: 1.2rem;
  color: #f60;
}
.Evaluate_header_left>p:nth-child(2){
  font-size: .65rem;
  color: #666;
  margin-bottom: .1rem;
}
.Evaluate_header_left>p:nth-child(3){
  font-size: .4rem;
  color: #999;
}
  .Evaluate_header_right{
    float: left;
    color: #666;
    font-weight: 400;
    font-size: .65rem;
    padding: .2rem 0;
  }
.Evaluate_header_right>p{
  margin: 0;
  line-height: 1rem;
}
.Evaluate_header_right>p>span{
  color: #FF6600;
  margin-right: .5rem;
}
.Evaluate_header_right>p:last-of-type>span{
  font-size: .4rem;
  color: #999;
  margin-right: .5rem;
}
  .CommentsSection{
    background-color:white;
  }
  .CommentsSection_lei{
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 0;
    list-style: none;
    padding: .5rem;
  }
.biaoqian{
  display: inline-block;
  /*background-color: #3190e8;*/
  background-color: #ebf5ff;
  color: #fff;
  font-size: .6rem;
  padding: .3rem;
  border-radius: .2rem;
  border: 1px;
  margin: 0 .4rem .2rem 0;
}
.biaoqian11{
  background-color: #3190e8;
  display: inline-block;
  color: #fff;
  font-size: .6rem;
  padding: .3rem;
  border-radius: .2rem;
  border: 1px;
  margin: 0 .4rem .2rem 0;
}
.biaoqian22{
  background-color: #F5F5F5;
  display: inline-block;
  color: #AAAAAA;
  font-size: .6rem;
  padding: .3rem;
  border-radius: .2rem;
  border: 1px;
  margin: 0 .4rem .2rem 0;
}
  .Comment{
    margin: 0;
    list-style: none;
  }
  .Comment_list{
    border-bottom: 1px solid #f5f5f5;
    padding: .6rem .5rem;
  }
.Comment_list>img{
  width: 1.5rem;
  height: 1.5rem;
  border: .025rem;
  border-radius: 50%;
  margin-right: .8rem;
  display: inline-block;
  background:url("../../../wyhImg/default.jpg") no-repeat center center;
  background-size: 100% 100%;
  float: left;
}
  .Comment_div{
    display: inline-block;
    float: left;
    width: 84%;
  }
  .Comment_div_p1{
    color: #666;
    margin-bottom: .2rem;
    font-weight: 400;
    font-size: .55rem;
  }
.Comment_div_p1>span{
  float: right;
}
.Comment_div>img{
  width: 3rem;
  height: 3rem;
  margin-right: .4rem;
  display: inline-block;
  margin-bottom: .2rem;
}
.Comment_div>ul{
  margin: 0;
  list-style: none;
}
.Comment_div>ul>li{
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  display: inline-block;
  font-size: .55rem;
  color: #999;
  width: 2.2rem;
  padding: .2rem;
  border: .025rem solid #ebebeb;
  border-radius: .15rem;
  margin-right: .3rem;
  margin-bottom: 4px;
}
  .xingxing{
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background: url("../../../assets/xingxing.png") no-repeat center center;
    background-size: 100% 100%;
    margin: 0 !important;
  }
</style>
