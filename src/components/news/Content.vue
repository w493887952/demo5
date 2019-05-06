<template>
   
    <div id="newsinfo-container">    
        <h3 class="title">{{list.title}}</h3>
        <p class="subtitle">
          <span>发表时间：</span>
          <span>点击：0次 </span>
        </p>
        <hr>
        <div class="content" v-html="list.content"></div>
        <comment-box></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'

    export default{
        data(){
            return{
                msg:'数据',
                list:[]
            }
        },
        mounted(){

               // console.log(this.$route.params);  /*获取动态路由传值*/

                var aid=this.$route.params.aid;

                //调用请求数据的方法

                this.requestData(aid);      

        },
        
        components:{
          "comment-box":comment
        },
        methods:{
            requestData(aid){
            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;       
            this.$http.get(api).then((response)=>{
                console.log(response);
                this.list=response.body.result[0];

            },(err)=>{
                console.log(err)
            })     }
        }

    }
</script>

<style lang="scss">


#newsinfo-container{
    padding: 0 4px; 
  .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color:red;
  }
  .subtitle{
      font-size: 13px;color: #226aff;display: flex;justify-content:space-between;
  }

    .content img{width: 100%;}
}
    
</style>