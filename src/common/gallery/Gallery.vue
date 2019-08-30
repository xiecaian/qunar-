<template>
    <div class="gallery-container" @click="toReturn">
        <div class="img-warpper">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img class = 'gallery-img' src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg" alt="" srcset="">
                </swiper-slide>
                <swiper-slide>
                    <img class = 'gallery-img' src="http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_350x240_76c3e0af.jpg" alt="">
                </swiper-slide>
               
            
                <!-- Optional controls -->
                
                <div class="swiper-pagination"  slot="pagination" ></div>
                <!--
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>-->
            </swiper>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    data() {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observer:true,
            observerParents:true,
             loop:true,
        },
      }
    },
   
    methods:{
        toReturn:function(){
            this.$emit('toReturn');
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
  }
</script>
<style lang = 'stylus' scoped>
    div{
        display :flex;
    }
 .gallery-container >>> .swiper-container{
     position :absolute;
     top:0;
     left :0;
     width :100%;
     height :100%;
 }
 .gallery-container >>> .swiper-slide{
     flex-direction :column;
     justify-content :center;
 }

 .gallery-container{
     position :relative;
     display:flex;
     flex-direction:column;
     justify-content:center;
     z-index:99;
     top:0;
     bottom:0;
     left:0;
     right:0;
     background-color:#000;
     overflow hidden
 }

 .gallery-container .img-warpper{
     width :100%;
     height :0;
     padding-bottom :100%;
 }
 .gallery-container .img-warpper .gallery-img{
     width :100%;
 }
 .gallery-container .img-warpper .swiper-pagination{
     color :#fff;
     bottom :1rem;
      justify-content :center;
 }
</style>


