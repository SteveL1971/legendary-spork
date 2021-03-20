<template>
  <div>
    <div class="list">
      <orders-list v-for="product in order" :key="product.orderNumber" class="card" :product="product" />
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import OrdersList from './OrdersList'
export default {
  components: {
    OrdersList
  },
  data() {
    return {
    }
  },
  methods: {
  },

  computed: {
    ...mapGetters(['order'])
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
    margin-bottom: 4rem;
  }

</style>