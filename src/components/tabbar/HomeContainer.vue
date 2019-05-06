<template>
  <div>
   
   <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
    <p>{{item.title}}</p>
  </mt-swipe-item>
  
</mt-swipe>
 <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/" href="#">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul> 

  </div>
</template>


<script>
    export default{
        data(){
            return {               
               msg:'我是一个新闻组件'  ,    
               lunbotuList:[]        
            }
        },
        methods:{

            requestData(){

                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
              
                this.$http.jsonp(api).then((response)=>{
                    console.log(response);

                   //注意：用到this要注意this指向
                   
                   this.lunbotuList=response.body.result;


                },function(err){

                        console.log(err);
                })
            }
        },
        mounted(){

            this.requestData();
        }
    }

</script>
<style lang="scss">
.mint-swipe{
  height: 200px;
}
.mint-swipe-item{
  &:nth-child(1){background: url(img/true2.jpg)}
  &:nth-child(2){background: url(img/true.jpg) }
  &:nth-child(3){background-color:blue;}
  p{text-align: center;
   color: #000;
   font-size: 30px;  
   line-height: 80px;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
.mui-grid-view.mui-grid-9{

  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  } 
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
