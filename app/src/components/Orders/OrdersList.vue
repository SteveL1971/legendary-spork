<template>
  <div>
    <div class="cardBox d-flex justify-content-between bg-white mb-2 px-2">
      <div class="layout">
        <div class="row gradient-custom2 p-2">
          <h4 class="col-3 headerH4">Order:</h4>
          <p class="col-9 headerP"> #{{ product.orderNumber }}  </p>
          <h4 class="col-3 headerH4">Date:</h4>
          <p class="col-9 headerP"> {{ product.date }}  </p>
          <h4 class="col-3 headerH4">Items:</h4>
          <p class="col-9 headerP"> {{ product.count }}  </p>
          <h4 class="col-3 headerH4">Order value:</h4>
          <p class="col-9 headerP"> {{ product.totalPrice }}kr incl. VAT </p>
        </div>
        <div v-for="(product, index) in product.cart" :key="index" class="row">
          <div class="row gradient-custom px-2">
            <h4 class="col-3 nameH4">Name:</h4>
            <p class="col-9 nameP"> {{ product.name }}</p> 
          </div>  
          <div class="col-9 p-2">
            <div class="row">
              <h5 class="col-4 orderH5">Number:</h5>
              <p class="col-8 orderP"> #{{ product.number }}</p>
            </div>
            <div class="row">
              <h5 class="col-4 orderH5 ">Series:</h5>
              <p class="col-8 orderP"> {{ product.series }}</p>
            </div>
            <div class="row">
              <div class="row">
                <h5 class="col-4 orderH5">Amount:</h5>
                <p class="col-8 orderP"> {{ product.amount }}</p>
              </div>
              <div class="col row">
              </div>
            </div>
            <div class="row">
              <div class="row">
                <h5 class="col-4 orderH5">Price each:</h5>
                <p class="col-8 orderP"> {{ Math.round(product.price*1.2)}}kr incl. VAT</p>
              </div>
              <div class="row">
                <h5 class="col-4 orderH5">Total price:</h5>
                <p class="col-8 orderP">{{ (Math.round(product.price*1.2))*product.amount }}kr incl. VAT</p>
              </div>
            </div>
          </div>
          <router-link :to="'/product/details/' + product._id" class="col-3 alignment">
            <div class="imgBox">
                <img :src=product.img class="imgStyle" :alt="product.name">
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
      return require(`@/assets/img/` + this.product.cart[1].img)
    },
    ...mapGetters(['order' , 'loggedInUser'])
  }
}
</script>

<style scoped>

  .layout {
    color: black;
    background-color: #fff;
    border:0;
    width:100%;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .imgStyle {
    width:60px;
  }

  .cardBox {
    display: flex;
    margin: auto;
    width: 97%;
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    background-color: #fff;
    display: flex;
    margin:auto;
    padding: 0.1rem;
    border:0;
  }

  .smallText {
    font-size: 0.6rem;
    font-weight: 300;
  }

  .headerStyle {
    font-size: 0.9rem;
    font-weight: 600;
  }

  .nameP {
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  margin: auto;
  text-align: left;
  line-height: 2;
}

.nameH4 {
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  margin: auto;
  text-align: left;
  line-height: 2;
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
  .orderP {
    color: black;
    font-size: 0.5rem;
    font-weight: 500;
    margin: auto;
    text-align: left;
    line-height: 1.7;
  }
  
  .orderH5 {
    color: black;
    font-size: 0.5rem;
    font-weight: 600;
    margin: auto;
    text-align: left;
    line-height: 1.7;
  }

  .alignment {
    display: flex;
    margin: auto;
  }

  p {
    padding: 0;
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }

  .headerStyle {
    color: white;
    /* padding-left: 0.2rem; */
    /* font-size: 1.1rem; */
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

  @media (min-width: 640px) {

  .orderP, .orderH5, .headerH4, .headerP {
    font-size: 0.7rem;
  }
  .imgStyle {
    width:90px;
  }
}

</style>