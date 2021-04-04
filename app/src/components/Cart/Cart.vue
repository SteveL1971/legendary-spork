<template>
  <div>
    <div v-if="loggedIn">
      <div v-if="count>0" class="list pb-2">
        <div class="row pt-3 pb-3 px-2 px-sm-3 px-lg-4">
          <div class="col-9 row">
              <p class="col-9 col-sm-4">Items in shopping cart: </p>
              <p class="col-3 col-sm-8">{{count}}</p>
              <p class="col-9 col-sm-4">Value of shopping cart: </p>
              <p class="col-3 col-sm-8">{{totalPrice}} kr</p>  
          </div>
          <div class="col-3 d-flex justify-content-end align-items-center">
            <button @click="saveOrderId(loggedInUser.id)" class="btn btn-info">Save cart</button>
          </div>
        </div>
        <cart-list v-for="product in cart" :key="product._id" :product="product" />
      </div>
      <div v-if="count==0 && !orderCompleted">
          <div class="container style404 w-75">
            <h2 class="text-center pb-3">Your shopping basket appears to be empty!</h2>
            <p class="mb-3 text-center">No worries! Head right over to the <router-link to="/products">product</router-link> section to start browsing Funko Pops!</p>
          <img :src="pImage" class="imgStyle">
        </div>
      </div>
      <div v-if="count==0 && orderCompleted">
          <div class="container style404 w-75">
            <h2 class="text-center pb-3">Thank you for your order!</h2>
            <p class="mb-3 text-center">We hope you will be completely satisfied with your purchase! You can see this order, together with all your previous transactions, in the orders section or by clicking <router-link to="/orders">here</router-link>.</p>
          <img :src="pImage" class="imgStyle">
        </div>
      </div>
    </div>
    <div v-if="!loggedIn">
      <div class="container style404">
        <h1>Please log in!</h1>
        <div class="links d-flex justify-content-center my-2">
          <p>Already a member? <router-link to="/signin">Log in</router-link></p>
          <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
        </div>
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

  computed: {
    ...mapGetters(['cart', 'count', 'loggedIn', 'totalPrice', 'loggedInUser', 'orderCompleted']),
        pImage: function() {
      return require(`@/assets/img/gogo.jpg`)
    },
  },
  methods: {
    ...mapActions(['saveOrderId', 'orderCompleteFalse']),
  },
  destroyed(){
    this.orderCompleteFalse()
  }
}
</script>

<style scoped>

.list {
  background-color: #9de2e036;
}

  h2 {
    font-size: 1rem;
    font-weight: 500;
  }
  .grid {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .card {
    color: #fff;
  }

  .links{
    flex-direction: column;
  }

    .imgStyle {
    padding-top: 2rem;
    width: 30%;
  }

  h5, p {
  font-weight: 400;
  font-size: 0.6rem;
  padding: 0px;
  margin: auto;
  text-align: left;
  color:rgb(99, 94, 94);
  line-height: 1.7;
}

  .headerP {
    color: black;
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
    height:1.7rem;
  }

    @media (min-width: 960px) {

  p {
    font-size: 0.7rem;
    font-weight: 600;
  }

    h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

}

</style>