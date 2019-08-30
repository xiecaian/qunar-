<!-- The ref attr used to find the swiper instance -->
<template>
<div class="iconsWarp">
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for = "(page,index) in pages" :key="index">

        <div class = " iconsList clearfix" >  
             <div class="iconsItem " v-for = "item in page" :key ="item.id">
                <div class="imgWarp">
                    <img :src=  "item.imgUrl" alt=""/>
                </div>
                <p class="imgDesc">
                    {{item.description}} 
                </p>
            </div>
        </div>
       
    </swiper-slide>   
    <!-- Optional controls -->
    
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'homeIcons',
    props:['iconsList'],
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
      },
      pages(){
          var icons = [];
          this.iconsList.forEach((item,idx) => {
              var page = Math.floor(idx/8);
                if(!icons[page]){
                    icons[page] = [];
                }
                icons[page].push(item);
              console.log(page);
          });
           console.log('this is current swiper',this.iconsList);
          console.log('this is current swiper',icons);
          return icons;
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false);
      
    }
  }
</script>
<style lang = 'stylus' scoped>
 .iconsWarp{
     /*display:flex;用了swiper已经自适应了*/
     position :relative;
     width:100%;
     min-width:11rem;
     height :100%;
     /*padding-bottom :50%;
     /*background-color :#eee;*/
 }
 .clearfix::after{
     content:"";
     display:block;
     clear:both;
 }
 .iconsList{
    
    padding-bottom : 0.4rem;
 }
 .iconsItem{
     position :relative;
     float:left ;
     width :25%;
     height :1.6rem;
     margin:0.2rem 0 0 0;
 }
 .iconsItem .imgWarp{
     display : block;
     position :absolute;
     top:0;
     left:0;
    
     bottom :0.44rem;
      width :100%;
 }
 .iconsItem img{
     display : block;
     height :100%;
     margin : 0 auto;
 }
 .iconsItem .imgDesc{
     position :absolute;
     bottom :0;
     left :0;
     right :0;
     height :0.44rem;
     line-height :0.44rem;
     text-align :center;

 }
 .swiper-pagination{
     position :absolute;
     bottom:0.1rem;
 }
 
</style>
