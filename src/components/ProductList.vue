<template>
  <div id="productlist">
    <md-table v-model="productLine" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
    <md-table-toolbar>
        <h1 class="md-title">Product Managment</h1>

        <CreateCard v-on:pleaserefresh="Clicked"/>
        
        <md-field md-clearable class="md-toolbar-section-end">
          <md-icon>search</md-icon>
          <md-input placeholder="Search by name..." v-model="valfriend" @input="Clicked" />
        </md-field>

    </md-table-toolbar>

       <md-table-row slot="md-table-row" slot-scope="{ item }">
         <md-table-cell md-label="Name" md-sort-by="name" md-numeric>{{ item.name }}</md-table-cell>
         <md-table-cell md-label="Description" >{{ item.desc }}</md-table-cell>
         <md-table-cell md-label="Price" md-sort-by="price">{{ item.price }}</md-table-cell>
         <md-table-cell md-label="pid">{{ item._id }}</md-table-cell>
             <md-table-cell class="buttoncell"> 

                 <UpdateCard :product='item' v-on:pleaserefresh="Clicked"/>

             </md-table-cell>  
             <md-table-cell class="buttoncell"> 

                     <DeleteCard :prodname='item._id' v-on:pleaserefresh="Clicked"/>

             </md-table-cell>  
      </md-table-row>
    </md-table>

  </div>

  
</template>

<script>
import { API_URL } from '../main.js'
import CreateCard from './CreateItem.vue'
import DeleteCard from './DeleteItem.vue'
import UpdateCard from './UpdateItem.vue'

export default {
  name: 'product-list',
  components: {
    CreateCard,
    UpdateCard,
    DeleteCard,
  },
  data() {
   return { productLine: [], valfriend:""}
  },
  methods: {
    Clicked () {
        const myURL = `${API_URL}/products/`
        fetch(myURL) 
            .then(res => {return res.json()})
            .then ( res => {
                this.productLine = res
            })
            .catch (this.productLine = [])
    },
  },
  mounted () {
    const myURL = `${API_URL}/products/`
    fetch(myURL) 
        .then(res => {return res.json()})
        .then ( res => {
            this.productLine = res
        })
        .catch ();
  }
}
</script>
