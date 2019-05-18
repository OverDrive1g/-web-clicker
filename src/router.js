import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'
import Roadmap from './views/Roadmap.vue'
import Err404 from './views/err404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Clicker',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: Roadmap
    },
    {
      path: '/404',
      name: 'Error 404',
      component: Err404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
