<template>
  <div class="default-dark">
      <productmanager/>
      <hr/>
      <usermanager />
  </div>
</template>

<script>
import productmanager from './ProductList.vue'
import usermanager from './UserManager/UserList.vue'


export default {
  name: 'app',
  components: {
    productmanager,
    usermanager,
  },
  
  data() {
   return { somestate: []}
  },
}
</script>
