<template>
  <div class="hello">
    <table class="product">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <tr v-for="product in products">
        <td>{{product.name}}</td>

      </tr>

      {{inCart}}
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";
import { mapActions } from 'vuex';



export default {
  computed: mapState(['products']),
  created() {
    this.$store.dispatch('loadProducts');
    this.$store.$state.inCart
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>