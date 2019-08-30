<!-- The ref attr used to find the swiper instance -->
<template>
<div class="warp">
    <div class="titleWrap">
        <div class="title">
            <span class="iconfont">&#xe639;</span>
             <span class="title-desc">猜你喜欢</span>         
        </div>
    </div>
    <div class="listWarp">
    <ul class="list">
        <router-link
         to = '/detail'
         tag = 'li' 
         class="item"
         v-for = 'item in Likelist' :key = 'item.id'>
             
            <div class="tip">
               {{item.tag}}
            </div>
            <div class="imgWarp">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="imgdesc">
                 <h3 class="title">{{item.title}}</h3>
                 <h4 class="comment">
                     <span class="iconfont">&#xe639;</span>
                     <span class="iconfont">&#xe639;</span>
                     <span class="iconfont">&#xe639;</span>
                     <span class="iconfont">&#xe639;</span>
                     <span class="iconfont">&#xe639;</span>
                     <span class="commentNum">{{item.commentNum}}条评论</span>
                 </h4>
                 <p class="priceWarp">
                    <span class="price">{{item.price}}元</span>起
                    <span class="location">{{item.district}}</span>
                </p>
            </div>   
        </router-link>
   
        
    </ul>
    <div class="findAll">
        查看所有产品
    </div>
    </div>
</div>
</template>

<script>
  export default {
    name: 'homeLikeList',
    props: ['Likelist'],
    data() {
      return {
        swiperOption: {
            
            
        },
      }
    },
    computed: {
     
    },
    mounted() {
     
    }
  }
</script>
<style lang = 'stylus' scoped>
    .warp{
        background-color :#eee;
        padding-top :0.2rem;
    }
    .titleWrap{
        position :relative;
        width :100%;
        height :0.94rem;
        line-height :0.94rem;
        background-color :#fff;
    }
    
    .iconfont{
        color :red;   
    }
    .list{
        width :100%;
        height :100%;
        background-color :#fff;
    }
    .title .title-desc
    {
        font-size:0.32rem;
    }
    .item{   
        position :relative;
        width :100%;
        height:2.1rem;
        margin-right:0.2rem;
        padding-top :0.2rem;
        border-bottom :1px solid #eee;
    }
    .item .tip{
        position :absolute;
        top:0.2rem;
        left :0.2rem;
        width :1.1rem;
        height :0.4rem;
        line-height :0.4rem;
        font-size:0.08rem;
        color :#fff;
        background-color :orange;
        text-align :center;
    }
    .item .imgWarp{
        width :2rem;
        height :2rem;
        margin-left :0.2rem;
    }
    .item .imgWarp img{
        width :100%;
    }
    .item .imgdesc{
        overflow :hidden;
        position :absolute;
        top:0;
        left:0;
        width :100%;
        height :2rem;
    }
    .item .title,
          .comment,
          .priceWarp{
              
        margin-left :2.4rem;
        width :100%;
        margin-top :0.35rem;
    }
    
    .item .priceWarp{
        position :relative;
    }
    .item .location{
        position :absolute;
        top:0;
        right :3rem;
    }    
    .item .price{
        color:#ff8300;
    }
    .findAll{
        width :100%;
        height :0.8rem;
        line-height :0.8rem;
        text-align :center;
        color:#00afc7;
        background-color :#fff;
    }
</style>

