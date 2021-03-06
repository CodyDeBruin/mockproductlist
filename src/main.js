import Vue from 'vue'
import router from './router'
import contentmanager from './components/ContentManager.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
 import 'vue-material/dist/theme/default-dark.css' 

export const API_URL = "http://localhost:443"

require('dotenv').config();

Vue.use(VueMaterial)
Vue.use(router)

Vue.config.productionTip = false


new Vue({
  el: '#mapp',
  router,
  render: h => h(contentmanager),
  data: {
    loggedin:false,
    cart: [],
  }
})

