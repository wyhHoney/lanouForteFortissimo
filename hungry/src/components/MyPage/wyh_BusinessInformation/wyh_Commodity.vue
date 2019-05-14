<template>
    <!--店铺商品信息-->
    <div class="Commodity clearfix">
      <ul>
        <li>热点</li>
        <li>店铺推荐</li>
        <li>蔬菜</li>
        <li>肉</li>
      </ul>
      <div class="message">
        <div class="message_list">
          <h4>热销榜 <p>大家都喜欢吃，才叫真好吃</p> <span>…</span></h4>
          <ul>
            <li class="clearfix">
              <img src="" alt="">
              <div class="message_list_div">
                <h4>哈哈哈</h4>
                <p class="message_list_div_span">888</p>
                <p class="message_list_div_p">月售987份 好评33%</p>
                <p class="message_list_div_ll">888</p>
                <p class="message_list_div_jg">20元 <span>+</span></p>
              </div>
            </li>
          </ul>
          <ul>
            <li class="clearfix">
              <img src="" alt="">
              <div class="message_list_div">
                <h4>哈哈哈</h4>
                <p class="message_list_div_span">888</p>
                <p class="message_list_div_p">月售987份 好评33%</p>
                <p class="message_list_div_ll">888</p>
                <p class="message_list_div_jg">20元 <span>+</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wyh_Commodity"
    }
</script>

<style scoped>
.Commodity{
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 3rem;
}
.Commodity>ul{
  width: 25%;
  height: 100%;
  float: left;
  margin: 0;
  list-style: none;
}
.Commodity>ul>li{
  /*border-left: .15rem solid #3190e8;*/
  border-left: .15rem solid #f8f8f8;
  /*background-color: #fff;*/
  padding: .7rem .3rem;
  border-bottom: .025rem solid #ededed;
  box-sizing: border-box;
}
.message{
  width: 75%;
  float: left;
  /*background-color: red;*/
}
  .message_list>h4{
    font-size: .7rem;
    color: #666;
    font-weight: 700;
    padding: .4rem;
    margin-bottom: 0;
  }
.message_list>h4>p{
  font-size: .5rem;
  color: #999;
  width: 60%;
  overflow: hidden;
  display: inline-block;
  margin: 0;
}
.message_list>h4>span{
  float: right;
}
.message_list>ul{
  margin: 0;
  background-color: white;
  list-style: none;
}
.message_list>ul>li{
  padding: .6rem .4rem;
  border-bottom: 1px solid #f8f8f8;
}
.message_list>ul>li>img{
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: coral;
  float: left;
  margin-right: .5rem;
}
.message_list>ul>li>div{
  float: left;
}

.message_list_div{
  width: 77%;
}
  .message_list_div>h4{
    font-size: .7rem;
    color: #333;
    font-weight: 600;
    margin-bottom: .2rem;
    margin-top: 0;
  }
.message_list_div_span{
  margin-bottom: .2rem;
  font-size: .5rem;
  color: #999;
  line-height: .6rem;
}
  .message_list_div_p{
    line-height: .8rem;
    font-size: .5rem;
    color: #333;
    margin: 0;
  }
  .message_list_div_ll{
    color: rgb(241, 136, 79);
    font-size: .3rem;
    border: 1px solid currentColor;
    border-radius: .3rem;
    display: inline-block;
    padding: 0 .2rem;
    margin: 0;
  }
  .message_list_div_jg{
    width: 100%;
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
    margin: 0;
  }
.message_list_div_jg>span{
  float: right;
  background-color: #3190E8;
  color: white;
  font-size: .7rem;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 50%;
}

</style>
