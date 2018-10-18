<template>
  <div id="productlist">
    <md-table v-model="productLine" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <h1 class="md-title">Product List</h1>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="valfriend" />
        </md-field>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name" md-numeric>{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Description" md-sort-by="desc">{{ item.desc }}</md-table-cell>
        <md-table-cell md-label="Price" md-sort-by="price">{{ item.price }}</md-table-cell>
        <md-table-cell md-label="pid" md-sort-by="pid">{{ item._id }}</md-table-cell>
            <md-table-cell class="buttoncell"> 
              <md-button class="md-icon-button">
                      <md-icon>build</md-icon>
               </md-button>
            </md-table-cell>  
            <md-table-cell class="buttoncell"> 
              <md-button class="md-icon-button">
                      <md-icon>delete</md-icon>
               </md-button>
            </md-table-cell>  
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
import itemCard from './CreateItem.vue'

export default {
  name: 'app',
  components: {
    itemCard
  },
  data() {
   return { productLine: [], valfriend:""}
  },
  methods: {
    Clicked (e) {
        e.preventDefault();
        const myURL = `https://storeapiexpress-fobamdzmlz.now.sh/products/${this.valfriend}`
        fetch(myURL) 
            .then(res => {return res.json()})
            .then ( res => {
                this.productLine = res
            })
            .catch (this.productLine = [])
    },
  },

  mounted () {
    const myURL = `http://localhost:443/products/`
    fetch(myURL) 
        .then(res => {return res.json()})
        .then ( res => {
            this.productLine = res
        })
        .catch ();
  }
}
</script>


<style scoped>
  .md-icon-button  {
    overflow-x:auto;
    border: 1px solid black 
  }
</style>