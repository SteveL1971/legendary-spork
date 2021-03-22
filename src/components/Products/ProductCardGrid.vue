<template>
<div class="">
    <div class="cardBox card">
      <router-link :to="'/product/details/' + product.id" >
      <div class="textStyle">
        <div class="row gradient-custom">
          <h4 class="col-3 align-text-center headerStyle">Name:</h4>
          <p class="col-9 headerStyle"> {{ product.name }}</p>
        </div>
        <div class="row mt-2">
          <h5 class="col-3">Number:</h5>
          <p class="col-9"> {{ product.number }}</p>
        </div>
        <div class="row">
          <h5 class="col-3">Series:</h5>
          <p class="col-9"> {{ product.series }}</p>
        </div>
        <div class="row">
          <h5 class="col-3">Price:</h5>
          <p class="col-9"> {{  Math.round(product.price*1.2) }}kr <span class="smallText">incl VAT</span></p>
        </div>
      </div>
      <div class="imgBox">
        <img :src="pImage" class="imgStyle" :alt="product.name">
      </div>
      </router-link>
      <div class="d-flex justify-content-center my-3">
        <button @click="addToCart(product)" class="btn btn-info"><i class="fas fa-cart-plus"></i></button>
      </div>
    </div>

  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {  
  props: ['product'],
  methods: {
    ...mapActions(['addToCart'])
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
    margin:auto;
    margin-top: 1rem;
    margin-bottom: 0rem;
    width: 90%;
    border-left: 2px solid #30cfd0;
    border-right: 2px solid #30cfd0;
    border-top: 2px solid #30cfd0;
    color: black;
    padding: 0.5rem;
    background-color: #fff;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
    min-width: 300px;

  }

  .imgStyle {
    width:200px;
    opacity: 0.95;
    height:auto;
    /* background-size: cover; */
    
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    width: 90%;
    /* flex:1; */

    background-color: cyan;
    height: 260px;

    border-left: 2px solid #30cfd0;
    border-right: 2px solid #30cfd0;
    border-bottom: 2px solid #30cfd0;
    border-top: 5px solid #30cfd0;
    background-color: #fff;
    padding: 2rem;
    display: flex;
    margin: auto;

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
    line-height: 2;
  }
  h4 {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0px;
    margin: auto;
    text-align: left;
    color: white;
    padding-left: 0.5rem;
    line-height: 2;
  }
  p {
    color: black;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .headerStyle {
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .btn {
    margin: 0px;
    padding: 8px;
    width: 3rem;
  }
</style>