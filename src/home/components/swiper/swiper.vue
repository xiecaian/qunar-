<!-- The ref attr used to find the swiper instance -->
<template>
<div class="swiperWarp">
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide
      v-for= 'item in swiperList' :key = 'item.id'
    ><img :src="item.imgUrl" alt="" srcset=""></swiper-slide>
    
    <!-- Optional controls -->
    
    <div class="swiper-pagination"  slot="pagination" @click="toChangePaging"></div>
    <!--
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>-->
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    props:['swiperList'],
    data() {
      return {
        swiperOption: {
            pagination: '.swiper-pagination',
            loop:true,
        },
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
    methods:{
        toChangePaging:function(e){
            var e = e ||window.event,
                tag = e.srcElement || e.target;
            if(tag.className == 'swiper-pagination-bullet')
            {
                console.log(11);
            }
        }
    },
  }
</script>
<style lang = 'stylus' scoped>
 .swiperWarp{
     /*display:flex;用了swiper已经自适应了*/
     overflow hidden;
     width:100%;
     height:0;
     min-width:11rem;
     padding-bottom:26.67%;
     background-color:#eee;
     
 }
 img{
     flex:1;
     width:100%;
     height :100%;
 }
 .swiperWarp >>> .swiper-pagination-bullet-active{
     background-color :red;
 }
</style>
