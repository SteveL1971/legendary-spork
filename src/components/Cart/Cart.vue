<template>
  <div>
    <div class="list">
      <div class="mt-4">{{count}} items in basket</div>  
      <div class="mb-4">Totalpris: {{totalPrice}}kr</div>  
      <button @click="saveOrder" class="btn">SAVE</button>
      <cart-list v-for="product in cart" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import CartList from './CartList'
export default {
  components: {

    CartList
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['saveOrder'])
  },
  computed: {
    ...mapGetters(['cart', 'count', 'totalPrice'])
  }
}
</script>

<style scoped>
  .grid {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .card {
    background: rgba(51, 8, 103, 0.068);
    color: #fff;
  }

</style>