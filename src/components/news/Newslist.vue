<template>
  <div>
    <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.aid">
             <router-link :to="'/content/' + item.aid"> {{item.title}}
                <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                <div class="mui-media-body">
                  <p class='mui-ellipsis'>
                    <span>发表时间:{{item.dateline}}</span>
                    <span>点击：{{item.aid}}次</span>
                  </p>
                </div>
             </router-link>
            </li>
          </ul>
  </div>
</template>



<script>

import { Toast } from "mint-ui";

export default {
  data(){
    return{
      newslist: []
    }
  },
 
  methods:{
    getNewsList(){
      
      var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        
     this.$http.jsonp(api).then((aaaa)=>{
                   console.log(aaaa);
                  
                   this.newslist=aaaa.body.result;


                },function(err){

                        console.log(err);
                })
  }

  },
    mounted(){

            this.getNewsList();
        }
}
</script>
<style lang="scss" scoped>
.mui-table-view {
  li{
    h1{font-size: 14px; 
    a{color: #000;}
    }
    .mui-ellipsis{font-size: 12px;color: #226aff;display: flex;justify-content:  space-between;}
    
   }
}
</style>
