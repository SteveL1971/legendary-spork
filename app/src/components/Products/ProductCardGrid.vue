<template>
<div class="hmm d-flex justify-content-center">
    <div class="cardBox card">
      <div class="textStyle">
        <div class="row gradient-custom">
          <h4 class="col-3 px-1 align-text-center headerH4">Name:</h4>
          <p class="col-9 headerP"> {{ product.name }}</p>
        </div>
        <div class="row mt-2">
          <h5 class="col-3 textH5 px-1">Number:</h5>
          <p class="col-9 textP"> {{ product.number }}</p>
        </div>
        <div class="row">
          <h5 class="col-3 textH5 px-1">Series:</h5>
          <a href="#" @click="catFilter(product.series)" class="col-9">{{ product.series }}</a>
        </div>
        <div class="row">
          <h5 class="col-3 textH5 px-1">Price:</h5>
          <p class="col-9 textP"> {{  Math.round(product.price*1.2) }}kr <span class="smallText">incl VAT</span></p>
        </div>
      </div>
      <router-link :to="'/product/details/' + product._id" >
      <div class="imgBox">
        <img :src=product.img class="imgStyle" :alt="product.name">
        <!-- <img :src="pImage" class="imgStyle" :alt="product.name"> -->
      </div>
      </router-link>
      <div class="d-flex justify-content-center my-3">
        <button @click="addToCart(product)" class="btn btn-info bg-info"><i class="fas fa-cart-plus"></i></button>
      </div>
    </div>

  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {  
  props: ['product'],
  methods: {
    ...mapActions(['addToCart' , 'catFilter'])
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

  .hmm{
    margin:auto;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
    width: 280px;

  }

  .imgStyle {
    width:150px;
    opacity: 0.95;
    height:auto;
    max-height: 150px;
    /* background-size: cover; */
    
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    width: 90%;
    /* flex:1; */

    background-color: cyan;
    height: 170px;

    border-left: 2px solid #30cfd0;
    border-right: 2px solid #30cfd0;
    border-bottom: 2px solid #30cfd0;
    border-top: 5px solid #30cfd0;
    background-color: #fff;
    padding: 2rem;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;

  }

  .smallText {
    font-size: 0.4rem;
    font-weight: 300;
  }

  h5, p {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0px;
    margin: auto;
    text-align: left;
    color:rgb(99, 94, 94);
    /* padding-left: 0.5rem; */
    line-height: 2;
    /* background-color: aquamarine; */
  }

  a {
    font-weight: 400;
    font-size: 0.6rem;
    text-decoration: 0;
    /* font-family:Verdana, Geneva, Tahoma, sans-serif !important; */
  }

  h4 {
    font-weight: 400;
    font-size: 0.7rem;
    padding: 0px;
    margin: auto;
    text-align: left;
    color: white;
    /* padding-left: 0.5rem; */
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
    padding: 0px;
    height: 1.7rem;
    width: 3.5rem;

  }

    .textP {
    font-size: 0.5rem;
    font-weight: 500;
    color:rgb(99, 94, 94);
    margin: auto;
    text-align: left;
    line-height: 2;
  }
  .textH5 {
    font-size: 0.5rem;
    font-weight: 600;
    color:rgb(99, 94, 94);
    margin: auto;
    text-align: left;
    line-height: 2;
  }
  .headerP {
    color: white;
    font-size: 0.5rem;
    font-weight: 500;
    margin: auto;
    text-align: left;
    line-height: 2;

  }
  .headerH4 {
    color: white;
    font-size: 0.5rem;
    font-weight: 600;
    margin: auto;
    text-align: left;
    line-height: 2;
  }
</style>