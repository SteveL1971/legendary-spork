<template>
  <div>
    <!-- <div class="cardBox d-flex justify-content-between bg-white mb-2 row"> -->
    <div class="cardBox bg-white mb-2 py-2 row">
      <div class="textStyl col-8 px-1">
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
          <p class="col-9 orderP"> {{ product.price }}kr <small>ex VAT</small></p>
        </div>
        <div class="row">
          <h5 class="col-3 orderH5">Price:</h5>
          <p class="col-9 orderP">{{ Math.round(product.price*1.2) }}kr <small>incl VAT</small></p>
        </div>
      </div>
      <div class="imgBox col-4 ">
        <div id="buttons" class="d-flex justify-content-between">
            <button @click="removeCartItem(product)" class="btn btn-info"><i class="fas fa-trash-alt"></i></button>
            <button @click="removeFromCart(product)" class="btn">-</button>
            <button @click="addToCart(product)" class="btn">+</button>
        </div>
        <div class="rightStyle">
          <router-link :to="'/product/details/' + product._id" class="card alignCenter">
            <img :src=product.img class="imgStyle" :alt="product.name">
            <!-- <img :src="pImage" class="imgStyle" :alt="product.name"> -->
          </router-link>
          <div class="">
              <h5 class="text-center">Amount: {{ product.amount }}</h5>
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
    ...mapActions(['removeCartItem', 'addToCart', 'removeFromCart'])
  },
  computed: {
    pImage: function() {
      return require(`@/assets/img/` + this.product.img)
    },
  }
}
</script>

<style scoped>
  .textStyle {
    /* flex: 1; */
    border: 2px solid #007bff50;
    color: black;
    /* background-color: #fff; */
    height:130px;
    border:0;
    /* width:100%; */
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
    background: white;
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

  /* h5, p {
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
  } */

  .headerStyle {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }

  /* .btn {
    margin: 0px;
    padding: 8px;
    width: 3rem;
  } */

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

    .nameP {
    font-size: 0.7rem;
    font-weight: 500;
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
    font-weight: 500;
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



</style>