// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入过滤器
import filters  from './filters'
Vue.use(filters);

// 引入全局组件
import Scroll from "./components/common/Scroll"
Vue.component('Scroll', Scroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, 
  components: { App }, 
  template: '<App/>'
})
