import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city:'广东'
    },
    actions:{
      //派发完了执行这步，获取子组件派发的数据进而触发
        changeCityName:function(ctx,city){
            //ctx 保存actions的一些方法
            console.log(city);
            ctx.commit('changeCityName',city)//commit触发mutations
        }
    },
    mutations:{
        changeCityName:function(state,city){
            //state是前面state对象
            state.city = city;
        }
    }
})