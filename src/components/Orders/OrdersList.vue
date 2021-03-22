<template>
  <div>
    <div class="cardBox d-flex justify-content-between bg-white mb-2">
      <div class="textStyle">
        <div class="row gradient-custom2">
          <h4 class="col-2 align-text-center text-black">Order Number:</h4>
          <p class="col-10 headerStyle text-black"> {{ product.orderNumber }}  </p>
          <h4 class="col-2 align-text-center text-black">Order date:</h4>
          <p class="col-10 headerStyle text-black"> {{ product.date }}  </p>
          <h4 class="col-2 align-text-center text-black">Number of items:</h4>
          <p class="col-10 headerStyle text-black"> {{ product.count }}  </p>
          <h4 class="col-2 align-text-center text-black">Total order value:</h4>
          <p class="col-10 headerStyle text-black"> {{ product.totalPrice }}kr  </p>

        </div>
        <div v-for="(product, index) in product.Cart" :key="index" class="card">
          <div class="row gradient-custom">
            <h4 class="col-2 align-text-center">Name:</h4>
            <p class="col-10 headerStyle"> {{ product.name }}</p>
          </div>
          <div class="row mt-2">
            <h5 class="col-2">Number:</h5>
            <p class="col-10"> #{{ product.number }}</p>
          </div>
          <div class="row">
            <h5 class="col-2">Series:</h5>
            <p class="col-10"> {{ product.series }}</p>
          </div>
          <div class="row">
            <h5 class="col-2">Amount:</h5>
            <p class="col-10"> {{ product.amount }}</p>
          </div>
          <div class="row">
            <h5 class="col-2">Price each:</h5>
            <p class="col-10"> {{ Math.round(product.price*1.2)}}kr</p>
          </div>
          <div class="row">
            <h5 class="col-2">Total price incl VAT:</h5>
            <p class="col-10">{{ Math.round(product.price*1.2*product.amount) }}kr</p>
          </div>
          <router-link :to="'/product/details/' + product.id" class="card">
            <!-- <img  class="imgStyle" :alt="product.name"> -->
            <!-- <img :src="pImage" class="imgStyle" :alt="product.name"> -->
          </router-link>
        </div>
      </div>
      <div class="imgBox">
        <!-- <div id="buttons" class="d-flex justify-content-between mx-3">
          <div class="">
            <button @click="removeCartItem(product)" class="btn btn-info mt-3 mx-2"><i class="fas fa-trash-alt"></i></button>
          </div>
          <div>
            <div class="d-flex">
            <h5>Amount:</h5>
            <h5>{{ product.Cart.amount }}</h5>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-3">  
              <button @click="minusFromCart(product)" class="btn mx-2">-</button>
              <button @click="addToCart(product)" class="btn">+</button>
            </div>
          </div>
          
        </div> -->

      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions , mapGetters} from 'vuex'
export default {  
  props: ['product'],
  methods: {
    ...mapActions(['removeCartItem', 'addToCart', 'minusFromCart'])
  },
  computed: {
    pImage: function() {
      return require(`@/assets/img/` + this.product.Cart[0].img)
    },
    ...mapGetters(['order'])
  }
}
</script>

<style scoped>
  .textStyle {
    /* flex: 1; */
    border: 2px solid #007bff50;
    color: black;
    background-color: #fff;
    /* height:130px; */
    border:0;
    width:100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
    background: white;
  }

  .imgStyle {
    width:130px;
    height:130px;
    opacity: 0.95;
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    background-color: #fff;
    /* flex:0.2; */
    display: flex;
    justify-content: center;
    border:0;
    margin-right: 1rem;
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
    line-height: 1.7;
  }
  h4 {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0px;
    margin: auto;
    text-align: left;
    color: white;
    padding-left: 0.5rem;
    line-height: 1.7;
  }
  p {
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }

  .headerStyle {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .btn {
    margin: auto;
    width: 2.5rem;
  }

  #buttons {
    display:flex;
    flex-direction: column;
    justify-content: between;
  }

</style>