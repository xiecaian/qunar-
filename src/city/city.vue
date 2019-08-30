<template>
    <div class="city" ref = 'listWarp'>
        <div>
            <city-header></city-header>
            <city-container v-bind:hotCities = this.cityData.hotCities v-bind:cities = this.cityData.cities v-bind:Bcroll = this.bccroll ></city-container>
       </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import cityHeader from './components/cityHeader/cityHeader'
import cityContainer from './components/cityContainer/cityContainer'
import axios from 'axios'
export default {
    name: 'city',
    data(){
        return{
            bccroll:'1',
            cityData: [],
        }
    },
    methods:{
        returnFlag:function(){
            console.log(25);   
        },
        getHomeInfo: function(){
              axios.get('http://localhost:8081/static/mock/city.json/')
                   .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess: function(res){
            console.log(res)
            if(res.data.ret && res.data.data){
                this.cityData = res.data.data;
                console.log(res.data.data);
                console.log(this.cityData.cities);
            }
        }
    },
    components:{
        cityHeader:cityHeader,
        cityContainer:cityContainer,
    },
    
    mounted: function(){
        console.log(this.$refs.listWarp);
        this.scroll = new BScroll(this.$refs.listWarp,{
            click: true,
            scrollY: true,
        });
        console.log(this.scroll);
        this.bccroll = this.scroll;
        console.log(this.bccroll);
        this.getHomeInfo();
    },
    /*
     mounted: function(){
        console.log(this.$refs.listWarp);
        
import  BScroll from 'better-scroll'
        this.scroll = new BScroll(this.$refs.listWarp,{
            click: true
        });
    }*/
}
</script>
<style>
.city{
    
        position :absolute;
        left:0;
        top:0;
        width: 100%;
        height :100%;
        overflow :hidden;
}
</style>

