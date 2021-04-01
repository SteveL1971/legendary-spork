<template>
<div>
  <div v-if="loggedIn" class="card">
    <div class="textStyle d-flex justify-content-between">
      <div class="textLayout mb-2">
        <div class="row mx-2 gradient-custom">
          <h4 class="col-3 px-2 align-text-center headerH4">Name:</h4>
          <p class="col-9 headerP"> {{ product.name }}</p>
        </div>
        <div class="row mt-3 mx-2">
          <h5 class="col-3 textH5">Id:</h5>
          <p class="col-9 textP"> {{ product._id }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3 textH5">Number:</h5>
          <p class="col-9 textP"> #{{ product.number }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3 textH5">Series:</h5>
          <p class="col-9 textP"> {{ product.series }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3 textH5">Price:</h5>
          <p class="col-9 textP"> {{ product.price }}kr <span class="smallText">excl. VAT</span></p>
        </div>
        <div class="row mx-2 mb-3">
          <h5 class="col-3 textH5">Price:</h5>
          <p class="col-9 textP"> {{ Math.round(product.price*1.2) }}kr <span class="smallText">incl. VAT</span></p>
        </div>
        <div class="mt-2 mx-2 py-2 descStyle">
          <h5 class="textH5 descTextStyle pb-2">Description: </h5>
          <p class="textP">{{ product.desc }}</p>  
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <img :src=product.img class="imgStyle" :alt="product.name">
      </div>
      <div class="d-flex justify-content-center my-3">
        <button @click="addToCart(product)" class="btn btn-info bg-info"><i class="fas fa-cart-plus"></i></button>
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
      <img :src="pImage" class="imgStyle2">
    </div>
  </div>
  
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProduct', 'clearPost', 'addToCart'])
  },
  computed: {
    ...mapGetters(['product' , 'loggedIn']),
    pImage: function() {
      return require(`@/assets/img/dovahkiin.jpg`)
    },
  },
  created() {
    this.getProduct(this.id)
  },
  destroyed() {
    this.clearPost()
  }
}
</script>

<style scoped>
  .card {
    width: 320px;
    margin: 2rem auto;
    padding: 0.5rem;
    min-height: 50vh;
    background-color: rgba(51, 8, 103, 0.068);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
  }
    .textStyle {
    display: flex;
    flex-direction: column;
    margin:auto;
    margin-bottom: 0.5rem;
    width: 100%;
    border: 2px solid #30cfd0;
    color: black;
    border-radius: 5px;
    background-color: #fff;
    padding-top: 1rem;
  }
    .links {
    flex-direction: column;
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

  .imgStyle {
    width:240px;
  }

  .imgStyle2 {
    padding-top: 2rem;
    width: 30%;
  }

  .imgBox {
    width: 90%;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
    padding: 2rem;
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
    justify-content: center;
  }

 .smallText {
    font-size: 0.6rem;
    font-weight: 300;
  }
    h5, p {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0px;
    margin: auto;
    text-align: left;
    color:rgb(99, 94, 94);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 2;
  }

  .headerP {
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  margin: auto;
  text-align: left;
  line-height: 2;
}

.headerH4 {
  color: white;
  font-size: 0.7rem;
  font-weight: 600;
  margin: auto;
  text-align: left;
  line-height: 2;
}

  p {
    color: black;
    font-size: 0.7rem;
    font-weight: 400;
  }

  .headerStyle {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .textLayout {
    flex:0.95;
    border: 0;
    margin: 0;
    padding: 0;
  }

  .row {
    margin: 0;
  }

  .descStyle {
    background-color: rgba(11, 153, 153, 0.062);
  }
  .descTextStyle {
    opacity: 1;
  }

  .textP {
    font-size: 0.6rem;
    font-weight: 500;
    color:black;
    margin: auto;
    text-align: left;
    line-height: 2;
  }
  .textH5 {
    font-size: 0.6rem;
    font-weight: 600;
    color:rgb(99, 94, 94);
    margin: auto;
    text-align: left;
    line-height: 2;
  }
  
</style>