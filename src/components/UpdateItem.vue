<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Modify a product!</md-dialog-title>
      <md-dialog-content class="interiorDia"> 

        <form id="createProduct"  @submit="clickHandler">
            <md-field>
              <label>Product Name</label>
              <md-input required v-model="named"></md-input>
            </md-field>

            <md-field>
              <label>Product Description</label>
              <md-textarea required v-model="descd"></md-textarea>
            </md-field> 

            <md-field>
          <label>Product Price</label>
          <md-input required v-model="priced"></md-input>
            </md-field>

            <md-field>
          <label>Product Image URL</label>
          <md-input v-model="imaged"></md-input> 
          </md-field>

          
          <md-dialog-actions>
            <md-button class="md-primary md-raised" @click="showDialog = false">Cancel</md-button>
            <md-button class="md-primary md-raised" type="submit">Create</md-button>
          </md-dialog-actions>

        </form>  
          </md-dialog-content>
  </md-dialog>
      
      <md-button class="md-icon-button" @click="showDialog = true">
        <md-icon>build</md-icon>
      </md-button>
</div>
</template>

<script>
export default {
  name: 'UpdateCard',
    props: {
    product: Object,
  },
  data() { return{ 
    showDialog: false,
    named:this.product.name,
    descd:this.product.desc,
    priced:this.product.price,
    imaged:this.product.img}
  },
  methods: {
    clickHandler() {
        const myURL = `https://storeapiexpress-scneculmte.now.sh/products/${this.product._id}`
        const reqContent = {
          method: "PUT",
          headers: {"Content-Type": "application/json; charset=utf-8"},
          body: JSON.stringify({name: this.named, 
                                desc: this.descd, 
                                price: this.priced, 
                                img: this.imaged})
        }

        let theReq = new Request(myURL, reqContent)

        fetch(theReq) 
            .then(res => {return res.json()})
            .then ( res => {
              res})
            .catch ()

    //reset
    this.named =''
    this.descd =''
    this.priced =''
    this.imaged = ''

      
    // setTimeout( () => this.$emit('pleaserefresh'), 500)
    this.showDialog = false
    }
  },

}
</script>


<style scoped>
.md-dialog {
  width: 80%;
}
</style>