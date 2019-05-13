import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

router.beforeEach((to, from, next)=>{
  document.title = to.name
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
