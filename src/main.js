import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import Meta from 'vue-meta'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.use(Meta)
if(Vue.config.productionTip){
  Vue.use(VueAnalytics, {
    id: 'UA-140140564-1',
    router
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
