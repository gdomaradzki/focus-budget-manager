import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Authentication from '@/components/pages/Authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
