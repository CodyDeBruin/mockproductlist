import Vue from 'vue'
import App from './components/ProductList.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  el: '#mapp',
  render: h => h(App)
})
