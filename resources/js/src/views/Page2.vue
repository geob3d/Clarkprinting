<template>
  <div class="hello">
    <table class="product">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <tr v-for="product in products">
        <td>{{product.id}}</td>
        <td>{{product.name}}</td>
        <td><button class="btn btn-primary" @click="addToCart(product)" >Add to cart</button></td>


      </tr>

    </table>

        <button class="btn btn-primary">Cart ({{ inCart.length }})</button>
      {{ inCart }}
      
  </div>
</template>

<script>
import {mapState} from "vuex";
import { mapActions } from 'vuex';



export default {

    computed:{
    ...mapState(['products']),
    //this.$store.dispatch('loadProducts'),
    //products() { return this.$store.getters.products; },
    inCart() { return this.$store.getters.inCart; },

    },

  //computed: mapState(['products']),
  created() {
    this.$store.dispatch('loadProducts');
    //this.$store.inCart
  },

  methods: {
    addToCart(prodId) {
      this.$store.dispatch('addToCart', prodId);
    }


  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>