<template>
  <div>
    <div class="list mt-4">
      <cart-list v-for="product in cart" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters(['cart'])
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