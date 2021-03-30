<template>
  <div>
    <div v-if="loggedIn">
      <div v-if="count>0" class="list">
        <div class="row my-4">
          <div class="col-9 row px-2">
              <p class="col-9">Number of items in shopping cart: </p>
              <p class="col-3">{{count}}</p>
              <p class="col-9">Total value of shopping cart: </p>
              <p class="col-3">{{totalPrice}} kr</p>  
          </div>
          <div class="col-3 d-flex justify-content-center align-items-center">
            <button @click="saveOrderId(loggedInUser.id)" class="btn btn-primary">Save cart</button>
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

    .headerP {
    color: black;
    font-size: 0.5rem;
    font-weight: 500;
    margin: auto;
    text-align: left;
    line-height: 2;
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
    font-size: 0.6rem;
    padding:0;
    width:4rem;
    height:1.5rem;
  }

</style>