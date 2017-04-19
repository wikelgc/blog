import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blog',
      name: 'BlogList',
      component: require('../view/Blog/index.vue')
    },
    {
      path: '/blog/:id',
      name: 'BlogDetails',
      component: require('../view/Blog/details.vue')
    }
  ]
})
