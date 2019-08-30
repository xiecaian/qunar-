<template>
    <div class="locationWarp">
        <div class="location">
            <span class="iconfont">&#xe611;</span>
            <span class="description">定位失败</span>
        </div>
        <div class="earth">
            <span class="iconfont">&#xe76c;</span>
            <span class="description">必游榜单</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeLocation',
    data(){
        return{

        }
    }
}
</script>

<style lang = 'stylus' scoped>
    .locationWarp{
        display:flex;
        width :100%;
        height :1rem;
        border-top:solid 1px #eee;
    }
    .location{
        width :50%;
        height :1rem;
        line-height :1rem;
        border-right :solid 1px #eee;
        text-align :center;
    }
    .earth{
        width :50%;
        height :1rem;
        line-height :1rem;
        text-align :center;
    }
</style>
