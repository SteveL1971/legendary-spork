<template>
  <div> 
    <div class="list">
      <product-card-list
        v-for="product in filteredProducts"
        :key="product.id"
        class="card"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCardList from "./ProductCardList";
import { mapGetters } from "vuex";
export default {
  components: {
    ProductCardList,
  },
  data() {
    return {};
  },
  methods: {
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    prodTax() {
      return this.$store.getters.taxedProducts;
    },
    ...mapGetters(["filteredProducts"]),
  },
};
</script>

<style scoped>
.card {
  margin: 0.5rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
</style>