<template>
  <div>

<div class="Zg_head">
  <!--返回上一外卖的路由-->
  <router-link :to="{path:''}"><img src="../../assets/fanhui.png" height="200" width="200" class="zg_fanhui4" @click="$router.back(-1)"/></router-link>
  <span class="search">搜索</span>
</div>
    <div class="zg_search box ">
      <input type="text"  placeholder="请输入商家或美食名称"                   v-model="history"><img src="../../assets/shift out .jpg"@click="picture"v-show="A" class="_img"/>
      <!--<span class="btn btn-info "style="height: 1.8rem;width: 20%;font-size: 0.7rem;margin: 0;" @click="submitAReport()">提交</span>-->
      <input type="submit" value="提交" class="btn present"style="height: 1.8rem;width: 20%;font-size: 0.7rem;margin: 0;" @click="submitAReport()">
    </div>
    <div class="zg_text_2" v-if="text_2">暂无商家/商品,请重试</div>
    <div class="zg_text" v-if="zg_text">
      <p class="zg_text_1" v-if="zg_text_1">搜索记录</p>
      </div>
    <ul>
      <li v-for="(i,a) in arr " class="z-price" @click="z_price(a)">{{i}}</li>
      <li v-if="B"@click="z_empty" class="z_empty">清空所有历史</li>
    </ul>
    <div v-for="(a) in searchArr" v-show="zg_array">{{a.name}}</div>
    <div class="zg_thegur"></div>
    <!--下拉线-->
  </div>
</template>
<script>
    export default {
      mounted () {
        let a='https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762&restaurant_category_id='+this.history
        this.$http.get(a).then(response => {
          this.searchArr=response.data
          console.log(response.data);
        }, response => {
          console.log("error");
        });
      },
        name: "Zg_seek",
        data(){
          return{
            history:'',
            arr:[],
            A:false,
            B:false,
            zg_text_1:false,
            zg_text:false,
            transfer:'',
            searchArr:[],
            text_2:false,
            zg_array:false
          }
        },
      methods:{
        submitAReport(){
          if(this.history!=''){
            this.arr.push(this.history);
            this.A=true;
            this.B=true;
            this.zg_text=true
            this.zg_text_1=true
          }else {
            this.A=false
            this.B=false
          }
          if (this.history==this.searchArr.name) {
            this.history=this.searchArr.name

          }else {
            this.text_2=true
            this.B = true
            this.zg_text_1=false
             this.zg_text=false
          }
        },
        picture(){
        if(this.history==''){

        }else {
          this.history='';
          this.A=false
          this.text_2=false
        };
          this.$store.state.zg_bianliang=this.history
        },
        z_empty(){
          this.arr.splice(this.arr[0]);
          this.B = false;
          this.zg_text=false;
          this.zg_text_1=false;
        },
        z_price(a){
        this.history=this.arr[a]
          this.B = false;
          this.zg_text=false;
          this.zg_text_1=false;
          this.arr.splice(this.arr[0]);
        },
        zg_span_1(){
        //外卖路由跳转
        },
        zg_span_2(){
        //搜索路由,当前页面

        },
        zg_span_3(){
        //订单路由跳转
        },
        zg_span_4(){
        //我的路由跳转
        }
      }
    }
</script>

<style scoped>
.Zg_head{
  height: 2rem;
  width: 100%;
  text-align: center;
  background: #3190e8;
  margin-bottom: 1rem;
}
._img{
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  right: 4rem;
  top: 3.5rem;
}
.Zg_head,span{
  font-size:0.8rem;
  padding: 0.5rem 0;
  color: white;
  font-weight: 800;
}
  html,body{
    font-size: 10px;
  }
  .zg_search box,input{
    width: 70%;
    margin-left: 0.9rem;
    padding: 0.4rem 0;
    background-color:#f5f5f5;
    font-size: 0.65rem;
    font-weight: 600;
  }
  .search{
    text-align: center;
    font-size: .8rem;
    padding-right: .5rem;
  }
  .z-price{
    margin-left: 1rem;
    list-style: none;
  }
  .zg_text{
    margin-top: .5rem;
    font-weight: 800;
    background-color:#f5f5f5 ;
    height: 2rem;
    position: relative;

  }
  .zg_text_1{
    position: absolute;
    left: 0;
    top: 0.5rem;
  }
  .zg_search box_img{
    width: 0.5rem;
    height: 0.7rem;
    position: absolute;
    right: 4rem;
    top: 3.5rem;
  }
.zg_search box{
  position: relative;
}
  .z-price{
    width: 80%;
    height: 2rem;
    padding: .5rem;
    font-size: 0.7rem;
  }
  .z_empty{
    font-size: .75rem;
    color: #3190e8;
    margin-left: 5rem;
    list-style: none;
    font-weight: 800;
  }
  .search{
    position: relative;
    right: 1rem;
  }
  .present{
    background-color: #3190e8;
    color: white;
  }
  .zg_bottom{
    position: fixed;
    bottom: 0;
}
  .zg_bottom,span{
    font-size: 0.65rem;
    margin: 0;
    padding: 0 1.1rem;
    font-weight: 800;
   }
  .zg_text_2{
    margin: 0 2rem;
    font-size: .7rem;
  }
  .zg_thegur{
    border-top:1px solid grey;
    position: fixed;
    bottom: 0;
    background-color: red;
  }
  .zg_fanhui4{
    width: .7rem;
    height: .9rem;
    position: fixed;
    left: .4rem;
    top: .4rem;
    font-weight: 800;
  }
</style>
