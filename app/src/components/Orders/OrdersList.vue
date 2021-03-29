<template>
  <div>
    <div class="cardBox d-flex justify-content-between bg-white mb-2 px-3">
      <div class="textStyle">
        <div class="row gradient-custom2">
          <h4 class="col-lg-2 col-sm-3 align-text-center text-black">Order Number:</h4>
          <p class="col-lg-10 col-sm-9 headerStyle text-black"> {{ product.orderNumber }}  </p>
          <h4 class="col-lg-2 col-sm-3 align-text-center text-black">Order date:</h4>
          <p class="col-lg-10 col-sm-9 headerStyle text-black"> {{ product.date }}  </p>
          <h4 class="col-lg-2 col-sm-3 align-text-center text-black">Number of items:</h4>
          <p class="col-lg-10 col-sm-9 headerStyle text-black"> {{ product.count }}  </p>
          <h4 class="col-lg-2 col-sm-3 align-text-center text-black">Total order value:</h4>
          <p class="col-lg-10 col-sm-9 headerStyle text-black"> {{ product.totalPrice }}kr  </p>
        </div>
        <div v-for="(product, index) in product.cart" :key="index" class="row">
          
            <div class="row gradient-custom">
              <h4 class="col-lg-1 col-md-2 col-sm-3 align-text-center">Name:</h4>
              <p class="col-sm headerStyle"> {{ product.name }}</p> 
            </div>
          <div class="col-md-10 col-sm-9">
            <div class="row">
              <div class="col-lg-6 col-md-5 col-sm-4 row">
                <h5 class="col-lg-4 col-md-5 col-sm-6">Number:</h5>
                <p class="col-lg col-sm"> #{{ product.number }}</p>
              </div>
              <div class="col-sm row">
                <h5 class="col-lg-4 col-sm-3">Series:</h5>
                <p class="col-lg col-sm"> {{ product.series }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-5 col-sm-4 row">
                <h5 class="col-lg-4 col-md-5 col-sm-6">Amount:</h5>
                <p class="col-lg col-sm"> {{ product.amount }}</p>
              </div>
              <div class="col-sm row">
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-5 col-sm-4 row">
                <h5 class="col-lg-4 col-md-5 col-sm-6">Price each:</h5>
                <p class="col-lg col-sm"> {{ Math.round(product.price*1.2)}}kr</p>
              </div>
              <div class="col-sm row">
                <h5 class="col-lg-4 col-sm-3">Total price:</h5>
                <p class="col-lg col-sm">{{ (Math.round(product.price*1.2))*product.amount }}kr</p>
              </div>
            </div>
          </div>
          <router-link :to="'/product/details/' + product._id" class="col alignCenter">
            <div class="imgBox ">
                <img :src=product.img class="imgStyle" :alt="product.name">
                <!-- <img :src='pImage' class="imgStyle" :alt="product.name"> -->
                <!-- {{ index }} -->
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions , mapGetters} from 'vuex'
export default {  
  props: ['product'],
  data() {
    return {
      index: 0,
    }
  },
  
  methods: {
    ...mapActions(['removeCartItem', 'addToCart', 'minusFromCart']),

  },
  computed: {
    pImage: function () {
      // console.log(this.index)
      return require(`@/assets/img/` + this.product.cart[1].img)
    },
    ...mapGetters(['order' , 'loggedInUser'])
  }
}
</script>

<style scoped>

  .imgStyle {
    width:80px;
  }

  .cardBox {
    display: flex;
    margin: auto;
    width: 99%;
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
    padding: 0;
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