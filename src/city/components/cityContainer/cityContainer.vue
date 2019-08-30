<template>
    <div class="warp" ref = 'listWarp' >
       <div>
            <div class="hotCityWarp" >
                <h1 class="Title hotCityTitle" ref= 'A'>热门城市</h1>            
                <ul class="hotCityList clearFix" @click="handleLetter">
                    <li class="cityItem " v-for = "(item) in hotCities" :key="item.id"
                     @click="handleCityClick(item.name)">{{item.name}}</li>  
                </ul>
            </div>
            
            <div class="alphWarp">
                <h1 class="Title alphTitle">字母排列</h1>
                <ul class="alphList clearFix"  >
                    <li class="alphItem" v-for = "(item,index) in cities" :key="index" >{{index}}</li>
                </ul>
            </div>
            <div class="alphWarp" @click="handleLetter" v-for = "(items,index) in cities" :key="index" >
                <h1 class="Title alphTitle">{{index}}</h1>
                <ul class="alphList clearFix">
                    <li class="alphItem" v-for = "item in items" :key="item.id">{{item.name}}</li>
                    
                </ul>
            </div>
            <div class="alphWarp" @click="handleLetter">
                <h1 class="Title alphTitle">字母排列</h1>
                <ul class="alphList clearFix">
                    <li class="alphItem" >A</li>
                    <li class="alphItem" >B</li>
                    <li class="alphItem" >C</li>
                    <li class="alphItem" >D</li>
                    <li class="alphItem">E</li>
                    <li class="alphItem">F</li>
                    <li class="alphItem">G</li>
                    <li class="alphItem">H</li>
                    <li class="alphItem">I</li>
                    <li class="alphItem">J</li>
                    <li class="alphItem">K</li>
                    <li class="alphItem">M</li>
                    <li class="alphItem">N</li>
                    <li class="alphItem">O</li>
                    <li class="alphItem">P</li>
                    <li class="alphItem">Q</li>
                    <li class="alphItem">R</li>
                    <li class="alphItem" >S</li>
                    <li class="alphItem" ref= 'B'>T</li>
                    <li class="alphItem" ref= 'C'>W</li>
                    <li class="alphItem" ref= 'D'>X</li>
                    <li class="alphItem">Y</li>
                    <li class="alphItem">Z</li>
                </ul>
            </div>
            <div class="alphWarp" @click="handleLetter">
                <h1 class="Title alphTitle">字母排列</h1>
                <ul class="alphList clearFix">
                    <li class="alphItem" >A</li>
                    <li class="alphItem" >B</li>
                    <li class="alphItem" >C</li>
                    <li class="alphItem" >D</li>
                    <li class="alphItem">E</li>
                    <li class="alphItem">F</li>
                    <li class="alphItem">G</li>
                    <li class="alphItem">H</li>
                    <li class="alphItem">I</li>
                    <li class="alphItem">J</li>
                    <li class="alphItem">K</li>
                    <li class="alphItem">M</li>
                    <li class="alphItem">N</li>
                    <li class="alphItem">O</li>
                    <li class="alphItem">P</li>
                    <li class="alphItem">Q</li>
                    <li class="alphItem">R</li>
                    <li class="alphItem" >S</li>
                    <li class="alphItem" ref= 'B'>T</li>
                    <li class="alphItem" ref= 'C'>W</li>
                    <li class="alphItem" ref= 'D'>X</li>
                    <li class="alphItem">Y</li>
                    <li class="alphItem">Z</li>
                </ul>
            </div>
        </div>
        </div>
</template>
<script>
//"better-scroll": "^1.15.2",/**可滑动*/
//import BScroll from 'better-scroll'
export default {
    nama:'cityContainer',
    props:['Bcroll','cities','hotCities'],
    
    data:function(){
        return{
            letter:'',
            scroll:'',
            
        }
    },
    methods:{
        handleLetter: function(e){
            var e = e || window.event,
                tar = e.target || e.srcElement;
                this.letter = tar.innerText;
        },
        handleCityClick:function(city){
            this.$store.dispatch('changeCityName',city);//派发
            this.$router.push('/')//跳转到主页面
        }
    },
    watch:{
        //letter改变时
        letter:function(){
            let elem = this.$refs[this.letter];
            console.log(elem);
            console.log(this.Bcroll);
            this.Bcroll.scrollToElement(elem);
        }
    }
    }
</script>
<style lang= 'stylus' scoped>
    .warp{
    }
    .clearFix::after{
        content :"";
        display :block;
        clear :both;
    }
    .alphWarp,
    .hotCityWarp{
        width:100%;
        
        background-color: #eee;
    }
    .Title{
        width:100%;
        height :0.3rem;
        padding :0.24rem 0.3rem;
        
    }
    ul{
        background-color: #fff;
        width:100%;
    }
    li{
        float: left;
        height :0.8rem;
        line-height :0.8rem;
    }
    .cityItem{
         width:33%;
         
        text-align :center;
    }
    .alphItem{
        width: 16.66%;
        text-align :center;
    }


</style>
