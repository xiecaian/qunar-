<template>
    <div class="cityHeaderWarp">
        <div class="cityChoose">
            <router-link to='/' class="iconfont">&#xe6e1;</router-link>
            <h1 class="cityTitle">城市选择</h1>
        </div>
        <div class="subTitleWarp">
            <ul class="subTitleList">
                <li class="subTitle">境内</li>
                <li class="subTitle">境外·港澳台</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang = 'stylus'  scoped>
    .cityHeaderWarp{
        position: relative;
        width: 100%;
        height: 1.5rem;
        background-color: #00bcd4;
    }
    .cityChoose{
         width: 100%;
        height: 0.68rem;
    }
    .iconfont{
        position :absolute;
        left :0.2rem;
        top:0.15rem;
        color :#fff;
        font-size:0.36rem;
    }
    .cityTitle{
        height :0.68rem;
        line-height :0.68rem;
        text-align :center;
        color :#fff;
        font-size:0.36rem;
    }
    .subTitleWarp{
        width :100%;
        height :0.8rem;
        padding :0.2rem 0.1rem
    }
    .subTitleList{
        width :80%;
        height :0.44rem;
        line-height :0.44rem;
        text-align :center;
        margin :0 auto;
        border :1px solid #fff;
    }
    .subTitle{
        float :left;
        width:50%;
        color:#fff;

    }
</style>
