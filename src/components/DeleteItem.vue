<template>
    <div>
        <md-dialog-confirm
        :md-active.sync="active"
        md-title="Are you sure you want to delete this product?"
        :md-content='prodname + " will be deleted."'
        md-confirm-text="Confirm"
        md-cancel-text="Cancel"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />
    
    <md-button class="md-icon-button md-accent" @click="active = true">
        <md-icon>delete</md-icon>
    </md-button>

    </div>

</template>

<script>
export default {
  name: 'DeleteCard',
  props: {
    prodname: String,
    // onConfirm: function,
  },
  data() {
      return {active:false}
  },
  methods: {
      onConfirm () {
        const myURL = `https://storeapiexpress-scneculmte.now.sh/products/${this.prodname}`
        fetch(myURL, {method:"delete"}).catch ();
       this.$emit('pleaserefresh')
      },

      onCancel () {
      }
  }
}
</script>

