import Vue from 'vue'
import App from './App'
import router from './router'

// Materialize CSS
import 'materialize-css/dist/css/materialize.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
