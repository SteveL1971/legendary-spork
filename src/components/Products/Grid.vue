<template>
  <div>
    <button @click="addToPrice(5)" class="btn">ADD</button>
    <button @click="subAsync(5)" class="btn">SUB</button>
    <div class="grid">
      <product-card-grid v-for="product in filteredProducts" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCardGrid from './ProductCardGrid'
export default {
  components: {
    ProductCardGrid
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['subAsync', 'addToPrice'])
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    ...mapGetters(['taxedProducts', 'filteredProducts'])
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