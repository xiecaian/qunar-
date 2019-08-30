<template>
    <div>
        <home-header></home-header>
        <home-swiper v-bind:swiperList = 'swiperList'></home-swiper>
        <home-icons v-bind:iconsList = "IconsList"></home-icons>
        <home-location></home-location>
        <home-hotlist ></home-hotlist>
        <home-likelist v-bind:Likelist="Likelist"></home-likelist>
        <home-weekdaylist v-bind:Weekdaylist="Weekdaylist"></home-weekdaylist> 
    </div>
</template>

<script>
    import homeHeader from './components/header/header'
    import homeSwiper from './components/swiper/swiper'
    import homeIcons from './components/icons/icons'
    import homeLocation from './components/location/location'
    import homeHotlist from './components/hotList/hotList'
    import homeLikelist from './components/likelist/likelist'
    import homeWeekdaylist from './components/weekday/weekday'
    import axios from 'axios'
    export default{
      name: 'home',
      data(){
          return{
              IconsList: [],
              Likelist:[],
              Weekdaylist:[],
              swiperList:[],

          }
      },
      components:{          
          homeHeader:homeHeader,
          homeSwiper:homeSwiper,
          homeIcons:homeIcons,
          homeLocation:homeLocation,
          homeHotlist :homeHotlist,
          homeLikelist:homeLikelist,
          homeWeekdaylist:homeWeekdaylist, 
      },
      methods: {
          getHomeInfo: function(){
              axios.get('http://localhost:8081/static/mock/index.json#/')
                   .then(this.getHomeInfoSuccess)
          },
          getHomeInfoSuccess: function(res){
              console.log(res)
              if(res.data.ret && res.data.data){
                  var data = res.data.data;
                  console.log(data.recommendList);
                 this.IconsList  = data.iconsList;
                 this.Likelist = data.recommendList;
                 this.Weekdaylist = data.weekendList;
                 this.swiperList = data.swiperList;
              }
          }
      },
      mounted(){
          console.log('mouted');
          this.getHomeInfo();
      },

    }
</script>

<style>

</style>
