<template>
  <div>
    <div v-if="loggedIn">
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
            <button @click="saveOrderId(loggedInUser.id)" class="btn btn-info m-0">Save cart</button>
          </div>
        </div>
        <cart-list v-for="product in cart" :key="product.id" class="card" :product="product" />
      </div>
    </div>
    <div v-if="!loggedIn">
      <div class="container style404">
        <h1>Please log in!</h1>
        <div class="links d-flex justify-content-center my-2">
          <p>Already a member? <router-link to="/signin">Login</router-link></p>
          <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
        </div>
        <!-- <p>Please log in!</p> -->
        <img :src="pImage" class="imgStyle">
      </div>
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
      hmm: ''
    }
  },
    computed: {
    ...mapGetters(['cart', 'count', 'loggedIn', 'totalPrice', 'loggedInUser']),
        pImage: function() {
      return require(`@/assets/img/gogo.jpg`)
    },
  },
  methods: {
    ...mapActions(['saveOrder', 'saveOrderId']),
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

  .links{
    flex-direction: column;
  }

    .imgStyle {
    padding-top: 2rem;
    width: 30%;
  }

  .style404 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 5rem;
  }

  .btn {
    margin: 0px;
    padding: 8px;
    width:8rem;
  }

</style>