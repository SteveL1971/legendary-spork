<template>
  <div>
    <div class="cardBox bg-white mb-2 pt-2 row">
      <div class="col-8 px-1">
        <div class="row gradient-custom">
          <h4 class="col-3 align-text-center headerH4">Name:</h4>
          <p class="col-9 headerStyle headerP"> {{ product.name }}</p>
        </div>
        <div class="row mt-2">
          <h5 class="col-3 orderH5">Number:</h5>
          <p class="col-9 orderP"> {{ product.number }}</p>
        </div>
        <div class="row">
          <h5 class="col-3 orderH5">Series:</h5>
          <p class="col-9 orderP"> {{ product.series }}</p>
        </div>
        <div class="row">
          <h5 class="col-3 orderH5">Price:</h5>
          <p class="col-9 orderP"> {{ product.price }}kr <small>excl. VAT</small></p>
        </div>
        <div class="row">
          <h5 class="col-3 orderH5">Price:</h5>
          <p class="col-9 orderP">{{ Math.round(product.price*1.2) }}kr <small>incl. VAT</small></p>
        </div>
      </div>
      <div class="imgBox col-4 ">
        <div id="buttons" class="d-flex justify-content-between">
            <!-- <button @click="removeCartItem(product)" class="btn btn-info"><i class="fas fa-trash-alt"></i></button> -->
            <button @click="remCartItem" class="btn btn-info"><i class="fas fa-trash-alt"></i></button>
            <!-- <button @click="removeFromCart(product)" class="btn">-</button> -->
            <button @click="remCart" class="btn">-</button>
            <button @click="addToCart(product)" class="btn">+</button>
        </div>
        <div class="rightStyle">
          <router-link :to="'/product/details/' + product.itemId" class="card alignCenter">
            <img :src=product.img class="imgStyle" :alt="product.name">
          </router-link>
          <div class="">
              <h5 class="text-center orderH5 mt-1">Amount: {{ product.amount }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {  
  props: ['product'],
  methods: {
    ...mapActions(['removeCartItem', 'addToCart', 'removeFromCart']),

    remCart() {
      this.removeFromCart(this.product)
    },
    remCartItem() {
      this.removeCartItem(this.product)
    }
  }, 
  



}
</script>

<style scoped>

  .bg-white {
    background-color: white;
  }
  .textStyle {
    /* border: 2px solid #007bff50; */
    color: black;
    height:130px;
    border:0;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
    background: white;
    width:96%;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .imgStyle {
    width: 60px;
  }

  .rightStyle {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: between;
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    background-color: white;
    display: flex;
    justify-content: center;
    border:0;
    padding:0;
    margin:0;
  }

  .smallText {
    font-size: 0.6rem;
    font-weight: 300;
  }

  .headerStyle {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .btn {
    display:flex;
    margin:auto;
    justify-content:center;
    align-items:center;
    padding:0;
    width: 2rem;
    height: 1.3rem;
    margin-top:0.15rem;
    margin-bottom:0.15rem;
  }

  #buttons {
    display:flex;
    flex-direction: column;
    justify-content: between;
    align-items: center;
    margin:auto;
    padding:0;
  }

.headerP {
  color: black;
  font-size: 0.5rem;
  font-weight: 600;
  margin: auto;
  text-align: left;
  line-height: 2;
}

.headerH4 {
  color: black;
  font-size: 0.5rem;
  font-weight: 600;
  margin: auto;
  text-align: left;
  line-height: 2;
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

  .hmm {
    margin:auto;
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