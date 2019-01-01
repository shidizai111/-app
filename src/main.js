import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入iview核心库
import iview from 'iview'
import store from "./API/store";
Vue.use(iview)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
