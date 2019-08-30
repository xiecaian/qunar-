import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home/home.vue'
import cityList from '@/city/city.vue'
import detail from '@/detail/detail.vue'
import imgList from '@/imgList/imgList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/cityList',
      name: 'cityList',
      component: cityList
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/imgList',
      name: 'imgList',
      component: imgList
    },

  ]
})
