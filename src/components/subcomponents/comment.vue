
<template>
  <div class="comment">
    <h3 class="pl">发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large" v-on:click="add()">发表评论</mt-button>
     
    <div class="cmt-list" v-for="item in list" :key="item.id">
      <div class="cmt-item">
        <div class="cmt-title">
          <span>第{{item.id}}楼   用户:{{item.name}}</span> <span>发表时间:2019-03-14</span>
        </div>
        <div class="cmt-body" @keyup.Enter="add()">
           {{item.content}}
          </div> 
      </div>
    </div>

        <mt-button type="danger" plain size="large">加载更多</mt-button>

  </div>
  
</template>

<script>


export default {
  data(){
    
    return{
      
     list:[
      { id:1, name:'张三', content:'哈哈哈哈哈',ctime: new Date() },
      { id:2, name:'李四', content:'啊啊啊啊啊' ,ctime: new Date() },
      { id:3, name:'吴彦祖', content:'啦啦啦啦啦啦' ,ctime: new Date() },
      { id:3, name:'刘亦菲', content:'啦啦啦啦啦啦' ,ctime: new Date() }
    ] 
    
    
    }
  },

methods:{
  add(){
    var pl ={content: this.content}
    this.list.push(pl)
    this.content=''
  }
}
  
}
</script>   

 <style lang="less" scoped>
.comment{
  .pl{color: red;}
  .cmt-title{background-color: #f4f4f4; padding: 8px 0; display: flex;justify-content:space-between;}
  .cmt-body{min-height:80px ; border: 1px solid salmon; padding: 5px; margin-bottom: 5px;}
}

</style>



