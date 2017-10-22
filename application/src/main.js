import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import Vuetify from 'vuetify'
import Authentication from '@/components/pages/Authentication'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(VueCookie)
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Authentication.checkAuthentication(vm)

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiredAuth)) {
    if (Authentication.user.authenticated) {
      console.log(Authentication.user.authenticated)
      next()
    } else {
      console.log(Authentication.user.authenticated)
      router.push('/login')
      next()
    }
  } else {
    next()
  }
})
