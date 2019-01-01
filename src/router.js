import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import index from "./pages/index/index.vue"
import goods from "./pages/goods/goods.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/message',
      name: 'message',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./pages/message/message.vue")
    },
    {
      path: '/business',
      name: 'business',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */"./pages/business/business.vue")
    }
  ]
})
