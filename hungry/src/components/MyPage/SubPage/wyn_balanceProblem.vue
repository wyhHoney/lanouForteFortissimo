<template>
    <!--说明公共组件-->
  <div class="balanceProblem">
    <PublicHeader :pagetitle="PageTitle" :hops="routejump"></PublicHeader>
    <!--详细说明-->
    <div class="explain" v-for="pie in ContentObject">
        <h3>{{pie.title}}?</h3>
        <p>{{pie.paragraph}}</p>
        <!--<li v-for="pp in pie.li">{{pie}}</li>-->
    </div>
  </div>
</template>

<script>
    import PublicHeader from '../CommonComponents/wyh_header'
    export default {
        name: "wyn_balanceProblem",
        data(){
          return {
            PageTitle:"",
            routejump:'',
            Hheadline:[],//定义数组存储h3标签问题内容
            Pheadline:[],//定义数组存储p标签答案内容
            Lisubsection:[],//定义数组存储需要分段的内容
            lala:{},
            ContentObject:[],
          }
        },
        //beforeMount  created
        created(){
            this.routejump=this.$route.query.hopsroute;
            console.log(this.$route.query.hopsroute);
            //修改头部内容
            this.PageTitle=this.$route.query.Title;
            //修改说明字段
            let String1=this.$route.query.Description;
            let ArrString=String1.split("###");
            for(let i=1;i<ArrString.length;i++){
              let subsection=ArrString[i].split("？ ");
              //将h3标题的提取出来
              this.Hheadline.push(subsection[0]);
              if (subsection[1].indexOf("* ")>=0) {
                let subsection1=subsection[1].split("* ");
                for (let j=0;j<subsection1.length;j++){
                  //将li标签的分拣出来
                  this.Lisubsection.push(subsection1[j]);
                }
                this.lala.a=this.Lisubsection;
                this.Pheadline.push(this.lala);
                // console.log(this.lala);
              }else {
                  //将p标签的内容分拣出来
                  this.Pheadline.push(subsection[1]);
                  }

            }
            for(let k=0;k<=this.Hheadline.length;k++){
             let obj={};
             obj.title=this.Hheadline[k]; //标题
             obj.paragraph=this.Pheadline[k];//段落
             this.ContentObject.push(obj)
            }
            // console.log(this.ContentObject)
        },
        components:{
          PublicHeader
        },
        methods:{
        }
    }
</script>

<style scoped>
  .balanceProblem{
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
  .explain{
    padding: 0 .5rem 0 .5rem;
  }
  .explain>h3{
    margin: 0;
    line-height: 2rem;
    font-weight: 400;
    color: #333;
    font-size: .7rem;
  }
  .explain>p{
    font-weight: 400;
    color: #666;
    line-height: 1rem;
    font-size: .6rem;
    margin: 0;
  }
  .explain:last-child{
    opacity: 0;
  }


</style>
