import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "@/components/Home"
import Discovery from "@/components/discovery"
import Cartlist from "@/components/cartlist"
import Mine from "@/components/mine"
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