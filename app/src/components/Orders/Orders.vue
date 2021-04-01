<template>
  <div>
    <div v-if="loggedIn" class="list card">
      <div class="cardBox d-flex justify-content-between bg-white my-2 px-2">
        <div class="textStyle">
          <div class="row gradient-custom p-2">
          <h4 class="col-3 headerH4">id:</h4>
          <p class="col-9 headerP"> {{ loggedInUser.id }} </p>
          <h4 class="col-3 headerH4">Name:</h4>
          <p class="col-9 headerP"> {{ loggedInUser.firstName }} {{ loggedInUser.lastName }}  </p>
          <h4 class="col-3 headerH4">Email:</h4>
          <p class="col-9 headerP"> {{ loggedInUser.email }}  </p>
          <h4 class="col-3 headerH4">Orders:</h4>
          <p class="col-9 headerP"> {{ filterOrdersByCustomerId(loggedInUser.id).length }}  </p>
          </div>
        </div>
      </div>
      <orders-list v-for="product in filterOrdersByCustomerId(loggedInUser.id)" :key="product.orderNumber" class="" :product="product" />
    </div>
    <div v-if="!loggedIn">
      <div class="container style404">
        <h1>Please log in!</h1>
        <div class="links d-flex justify-content-center my-2">
          <p>Already a member? <router-link to="/signin">Log in</router-link></p>
          <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
        </div>
        <!-- <p>Please log in!</p> -->
        <img :src="pImage" class="imgStyle">
      </div>
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
    filterOrdersByCustomerId(id) {
      return this.order.filter(product => product.customerId == id)
    }
  },

  computed: {
    ...mapGetters(['order', 'loggedIn' , 'loggedInUser']),
    pImage: function() {
      return require(`@/assets/img/buffy-bloody.jpeg`)
    },
  }
}
</script>

<style scoped>
    row {
      padding: 0;
    }

.textStyle {
  color: black;
  background-color: #fff;
  border:0;
  width:100%;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

  .links{
    flex-direction: column;
  }

.cardBox {
  display: flex;
  margin: auto;
  width: 97%;
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

  .headerStyle {
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  .headerP {
    color: black;
    font-size: 0.5rem;
    font-weight: 400;
    margin: auto;
    text-align: left;
    line-height: 1.5;
  }

  .headerH4 {
    color: black;
    font-size: 0.5rem;
    font-weight: 600;
    margin: auto;
    text-align: left;
    line-height: 1.5;
  }

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

@media (min-width: 640px) {
  .orderP {
    padding-left: 1.6rem;
  }
  .orderP, .orderH5, .headerH4, .headerP {
    font-size: 0.7rem;
  }
}

</style>