<template>
  <div>
    <div class="list">
      <div class="d-flex justify-content-between align-items-center my-4">
        <div class="w-100">
          <div class="row">
            <div class="col-4">Number of items in shopping cart: </div>
            <div class="col">{{count}}</div>
          </div>
          <div class="row">  
            <div class="col-4">Total value of shopping cart: </div>
            <div class="col">{{totalPrice}}kr</div>  
          </div>
        </div>
        <div>
          <button @click="saveOrder" class="btn btn-info m-0">Save cart</button>
        </div>
      </div>
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

  .btn {
    margin: 0px;
    padding: 8px;
    width:8rem;
  }

</style>