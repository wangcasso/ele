import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "@/page/Home"
import Discovery from "@/page/discovery"
import Cartlist from "@/page/cartlist"
import Mine from "@/page/mine"
import ChangeLocation from "@/page/changelocation"
import Login from "@/page/login"
import Befor from "@/page/beforlogin"
import Seeet from "@/page/set"
import Search from "@/page/search"
import Right from "@/page/right"
const routes = [
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:"place",
          name:"ChangeLocation",
          component:ChangeLocation
        }
      ]
    },
    {
      path:"/right",
      name:"Right",
      component:Right
    },
    {
      path:'/search',
      name:'Search',
      component:Search

    },
    {
      path:'/discovery',
      name:'Discovery',
      component:Discovery
    },
    {
      path:'/bef',
      name:'Bef',
      component: Befor
    },
    {
      path:'/cartlist',
      name:'Cartlist',
      component:Cartlist
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine,
      children:[
        {
          path:'set',
          name:'Set',
          component: Seeet
        },
        {
          path:'login',
          name:'Login',
          component: Login
        }
      ]
    },
    {
      // path: '/',
      path: '**',
      //重定向
      redirect: '/home'
    },
    
  ]

export default new Router({
  routes
})