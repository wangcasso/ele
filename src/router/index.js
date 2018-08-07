import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "@/page/Home"
import Discovery from "@/page/discovery"
import Cartlist from "@/page/cartlist"
import Mine from "@/page/mine"
const routes =  [
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/discovery',
      name:'Discovery',
      component:Discovery
    },
    {
      path:'/cartlist',
      name:'Cartlist',
      component:Cartlist
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      // path: '/',
      path: '**',
      //重定向
      redirect: '/home'
    }
  ]

export default new Router({
  routes
})