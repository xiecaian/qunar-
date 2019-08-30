<!-- The ref attr used to find the swiper instance -->
<template>
<div class="warp">
    <div class="titleWrap">
        <div class="title">
             <span class="title-desc">周末去哪儿</span>         
        </div>
    </div>
    <div class="listWarp">
    <ul class="list">
        Weekdaylist
        <li class="item" v-for= "item in Weekdaylist" :key="item.id">
            <div class="imgWarp">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="productInfo">
                 <h3 class="productNmae">{{item.title}}</h3>
                 
                 <p class="productDesc">
                     {{item.comment}}
                </p>
            </div>   
        </li>
            <li class="item">
            <div class="imgWarp">
                <img src="http://img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg" alt="">
            </div>
            <div class="productInfo">
                 <h3 class="productNmae">南京必打卡</h3>
                 
                 <p class="productDesc">
                看尽王侯将相荣辱成败，六朝金粉潮起潮落
                看尽王侯将相荣辱成败，六朝金粉潮起潮落
                看尽王侯将相荣辱成败，六朝金粉潮起潮落看尽王侯将相荣辱成败，六朝金粉潮起潮落看尽王侯将相荣辱成败，六朝金粉潮起潮落
                看尽王侯将相荣辱成败，六朝金粉潮起潮落
                </p>
            </div>   
        </li>
          
        
    </ul>
   
    </div>
</div>
</template>

<script>
  export default {
    name: 'weekdayList',
    props:['Weekdaylist'],
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
        overflow :hidden;
    }
    .titleWrap{
        position :relative;
        width :100%;
        height :0.94rem;
        padding-left :0.2rem;
        line-height :0.94rem;
    }
    
    .iconfont{
        color :red;   
    }
    .list{
        width :100%;
        height :100%;
    }
    .title .title-desc
    {
        font-size:0.32rem;
    }
    .item{   
        position :relative;
        width :100%;
        height:100%;
    }
    .item .imgWarp{
        width :100%;
        height :100%;    
        padding-top :0.1rem;
        background-color :#eee;
    }
    .item .imgWarp img{
        width :100%;
    }
    .item .productInfo{
        
        width :100%;
        height :1.2rem;
        background-color :#fff;
        padding :0.2rem 0 0 0.2rem;
    }
    .item .productNmae{
       
        font-size:0.32rem;
    }

    .item .productDesc{
        /*隐藏3步*/
        overflow :hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        margin-top :0.3rem;
        font-size: 0.24rem;
        color:#ccc;
    }
</style>

