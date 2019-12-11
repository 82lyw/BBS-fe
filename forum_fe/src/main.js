import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'

//引入vuex
import store from './store'

Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
