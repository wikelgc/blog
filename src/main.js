// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './store'
import Cookies from 'js-cookie'
import router from './router'
import axios from 'axios'

// Vue.use(ElementUI)
Vue.use(Cookies)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {  // 判断该路由是否需要登录权限
    console.log('路由拦截')
    next()
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
