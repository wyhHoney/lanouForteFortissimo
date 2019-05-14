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
          <p>送达时间 分钟</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "wyh_Evaluate"
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
    margin: 0 1rem;
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
  }
</style>
