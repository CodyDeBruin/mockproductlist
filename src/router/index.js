import VueRouter from 'vue-router'
import productmanager from '../components/ProductList.vue'
import usermanager from '../components/UserManager/UserList.vue'

const routes = [
    { path: '/users', component: usermanager },
    { path: '/products', component: productmanager },
  ]
  
  export default new VueRouter({
    routes 
  })

