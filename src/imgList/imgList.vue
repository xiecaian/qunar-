<template>
    <div class="warp">
        <div class="imgWarp" v-show="isShowFlag">
            <div class="imgHeader">
                 <router-link tag = 'span' to='/detail' class="iconfont" >&#xe6e1;</router-link>
                <h1 class="title">景区图片</h1>
            </div>
            <div class="imglist">
                <ul class="list" @click="clickToShow">
                    <li class="imgItem">
                        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg" alt="">
                    </li>
                    <li class="imgItem">
                        <img src="http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_350x240_76c3e0af.jpg" alt="">
                    </li>
                      <li class="imgItem">
                        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg" alt="">
                    </li>
                    <li class="imgItem">
                        <img src="http://img1.qunarzz.com/sight/p0/1811/d5/d5153b5e337c0644a3.water.jpg_350x240_76c3e0af.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <common-gallery v-show = '!isShowFlag' @toReturn = "clickToShow"></common-gallery>
    </div>
</template>
<script>
import commonGallery from '../common/gallery/Gallery'
export default {
    name:'imgList',
    data(){
        return{
            isShowFlag:true,
        }
    },
    components:{
        'common-gallery':commonGallery
    },
    methods:{
        clickToShow:function(){
            this.isShowFlag = !this.isShowFlag;
        },
    }
}
</script>
<style lang = 'stylus' scoped>
    .imgHeader{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 0.88rem;     
        border-bottom  :1px solid #e0e0e0;
        background-color :#fff;
        z-index :100;
        
    }
    .imgHeader .iconfont
    {
        line-height: 0.88rem;
        font-size: 0.64rem;
       
    }
    .imgHeader .title
    {
        position: absolute;
        top:0;
        left:calc(50% - 0.96rem);
        font-size: 0.32rem;
        line-height: 0.88rem;
        width: 100%;
    }

    .imglist{
        position :absolute;
        top:0.88rem;
        left :0;
        width :100%;
    }
    .imglist .list{
        padding  :0rem 0.1rem 0 0.2rem;
    }
    .imglist .imgItem
    {
        float :left;
        width :calc(50% - 0.1rem);
        margin : 0.2rem 0.1rem 0 0;
    }
    .imglist .imgItem img{
        width :100%;
    }

</style>
