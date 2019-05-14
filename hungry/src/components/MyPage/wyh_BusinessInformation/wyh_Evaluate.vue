<template>
    <!--店铺评价信息-->
    <div class="Evaluate">
      <div class="Evaluate_header clearfix">
        <div class="Evaluate_header_left">
          <p>5</p>
          <p>综合评价</p>
          <p>高于周边商家76.9%</p>
        </div>
        <div class="Evaluate_header_right">
          <p>服务态度 <span></span><span>4.7</span></p>
          <p>菜品评价 <span></span><span>4.7</span></p>
          <p>送达时间 <span>分钟</span></p>
        </div>

      </div>
      <!--评价内容-->
      <div class="CommentsSection">
        <ul class="CommentsSection_lei">
          <li>全部（473）</li>
          <li>满意（473）</li>
          <li>不满意（473）</li>
          <li>有图（473）</li>
          <li>有味道（473）</li>
        </ul>
          <ul class="Comment">
            <li class="Comment_list clearfix">
              <img src="" alt="">
              <div class="Comment_div">
                <p class="Comment_div_p1">12****66464  <span>2017-02-10</span></p>
                <p class="Comment_div_p1"><span></span>按时送达</p>
                <img src="" alt="">
                <ul>
                  <li>asd</li>
                  <li>sadj</li>
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

          }
        },
        created(){
          Vue.axios.get('https://elm.cangdu.org/ugc/v2/restaurants/'+this.$store.state.shopId+'/ratings/scores').then((res)=>{
            console.log(res.data)
          });
          console.log(this.$store.state.shopId)
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
.CommentsSection_lei>li{
  display: inline-block;
  background-color: #3190e8;
  /*background-color: #ebf5ff;*/
  color: #fff;
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
  background-color: red;
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
  display: block;
  background-color: coral;
  margin-bottom: .2rem;
}
.Comment_div>ul{
  margin: 0;
  list-style: none;
}
.Comment_div>ul>li{
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
</style>
