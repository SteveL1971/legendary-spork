<template>
    <div class="cardBox listItem">
      <div class="row w-100">
        <router-link :to="'/product/details/' + product._id" class="row">
        <div class="row">
          <div class="d-flex col-10">
            <div class="textStyle">
              <div class="row gradient-custom">
                <h4 class="col-2 align-text-center">Name:</h4>
                <p class="col-10 headerStyle"> {{ product.name }}</p>
              </div>
              <div class="row mt-2">
                <h5 class="col-2">Number:</h5>
                <p class="col-10"> {{ product.number }}</p>
              </div>
              <div class="row">
                <h5 class="col-2">Series:</h5>
                <p class="col-10"> {{ product.series }}</p>
              </div>
              <div class="row">
                <h5 class="col-2">Price ex VAT:</h5>
                <p class="col-4"> {{ product.price }}kr</p>
                <h5 class="col-2">Price incl VAT:</h5>
                <!-- <p class="col-4">{{ product.price }}kr</p> -->
                <p class="col-4">{{ Math.round(product.price*1.2) }}kr</p>
              </div>
            </div>
          </div>
          <div class="imgBox col">
            <!-- <img :src="pImage" class="imgStyle" :alt="product.name"> -->
            <img :src=product.img class="imgStyle" :alt="product.name">
          </div>
        </div>
        </router-link>
      </div>

      <div class="buttons">
        <button @click="addToCart(product)" class="btn btn-info"><i class="fas fa-cart-plus"></i></button>
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
    flex: 1;
    border: 2px solid #007bff50;
    color: black;
    background-color: #fff;
    height:130px;
    border:0;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
  }

  .imgStyle {
    width:130px;
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    background-color: #fff;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    border:0;
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
    font-size: 1.1rem;
    font-weight: 600;
  }
  .listItem {
    display: flex;
    flex-direction: row;
  }

  .buttons {
    background: white;
    opacity: 1;
    display: flex;
    margin: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
  }

  .btn {
    margin: 0px;
    padding: 8px;
    width: 3rem;
  }

  .row {
    margin: 0px;
    padding: 0px;
  }

</style>