<template>
   <div class="dtWarp">
       <div class="dtHeader" 
            :style="opacityStyle"
            v-show="this.showHeaderBack">
           <router-link 
            tag = span
            to = '/'
            class="iconfont" >&#xe6e1;</router-link>
           <h1 class="title">上海迪斯尼乐园</h1>
       </div>
       <div class="dtMain">
           <div class="dtHeadFigure">
               <router-link
                to = './imgList'
                class="imgWarp">
                   <img src="http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png" alt="">
               </router-link>
               <div class="returnBt" v-show="!this.showHeaderBack">
                   <router-link 
                    tag = span
                    to = '/'
                    class="iconfont" >&#xe6e1;</router-link>
               </div>
               <div class="imgIcon">
                   <span class="iconfont">&#xe615;</span>
                   <span class="num">69</span>
               </div>
               <div class="headerInfo">
                   上海迪尼斯乐园
               </div>

           </div>
       </div>
   </div>
</template>
<script>
export default {
    name: 'detail',
    data(){
        return{
            showHeaderBack :false,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll:function(){
            
            var top = document.documentElement.scrollTop;
            console.log(top);
            var opacity = top/300;
            opacity = opacity > 1 ? 1 : opacity;
            this.opacityStyle = {
                opacity:opacity
            }
            if(top > 50)
            {   
                this.showHeaderBack = true;

            }
            else{
                console.log(2);
                this.showHeaderBack = false;
                console.log(this.showHeaderBack);
            }
        },
       
    },
    /*
    mounted: function(){
         document.documentElement.scrollTop = 0;
        window.addEventListener('scroll',this.handleScroll,false);
        },
    destroyed: function(){
         console.log(55);
    window.removeEventListener('scroll',this.handleScroll,false);
    }*/
    activated:function(){
        document.documentElement.scrollTop = 0;
        window.addEventListener('scroll',this.handleScroll,false);
    },
    deactivated:function(){
        console.log(55);
    window.removeEventListener('scroll',this.handleScroll,false);
    }

   
}
</script>
<style lang = 'stylus' scoped>
    .dtHeader{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 0.88rem;
        color: #fff;
        background-color: #00bcd4;
        z-index :100;
        
    }
    .dtHeader .iconfont
    {
        line-height: 0.88rem;
        font-size: 0.64rem;
       
    }
    .dtHeader .title
    {
        position: absolute;
        top:0;
        left:calc(50% - 0.96rem);
        font-size: 0.32rem;
        line-height: 0.88rem;
        width: 100%;
    }

    .dtMain{
        position :relative;
        width:100%;
    }
    .dtHeadFigure{
        position :relative;
        width:100%;
         
    }
    .dtHeadFigure .imgWarp{
        width :100%;
        height :0;
        padding-bottom :55%;
        overflow :hidden;
    }
    .dtHeadFigure  .imgWarp img{
        width :100%;

    }
    .dtHeadFigure .returnBt{
        position :absolute;
        top:0.1rem;
        left :0.1rem;            
        color :#fff;
        width :0.7rem;
        height :0.7rem;
        border-radius:50%;
        background-color :#bbb;
    }
    .dtHeadFigure .returnBt .iconfont
    {
         font-size: 0.64rem;
    }
    .dtHeadFigure .imgIcon
    {
        position :absolute;
        left :0.15rem;
        bottom :0.5rem;
        color :#fff;
        border-radius:0.1rem;
        background-color :rgba(0,0,0,.5);
    }
    .dtHeadFigure .headerInfo
    {
        position :absolute;
        left :0.1rem;
        bottom :0.1rem;
        color :#fff;
        font-size:0.32rem;
        //background :linear-gradient(to bottom,rgba(0,0,0,0),red);
    }
</style>
