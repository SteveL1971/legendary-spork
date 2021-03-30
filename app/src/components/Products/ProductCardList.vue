<template>
    <div class="cardBox listItem">
      <div class="row w-100">
        
        <div class="row">
          <div class="d-flex col-9">
            <div class="textStyle">
              <div class="row gradient-custom mx-2">
                <h4 class="col-3 align-text-center nameH4">Name:</h4>
                <p class="col headerStyle nameP"> {{ product.name }}</p>
              </div>
              <div class="row mt-2">
                <h5 class="col-3 orderH5">Number:</h5>
                <p class="col orderP"> {{ product.number }}</p>
              </div>
              <div class="row">
                <h5 class="col-3 orderH5">Series:</h5>
                <p class="col orderP"> {{ product.series }}</p>
              </div>
              <div class="row">
                <h5 class="col-3 orderH5">Price:</h5>
                <p class="col orderP"> {{ product.price }}kr <small>excl VAT</small></p>
              </div>
              <div class="row">
                <h5 class="col-3 orderH5">Price:</h5>
                <p class="col orderP">{{ Math.round(product.price*1.2) }}kr <small>incl VAT</small></p>
              </div>
            </div>
          </div>
          <div class="imgBox col-3">
            <router-link :to="'/product/details/' + product._id" class="row">
            <div class="d-flex justify-content-center"><img :src=product.img class="imgStyle" :alt="product.name"></div>
            </router-link>
            <button @click="addToCart(product)" class="btn btn-info"><i class="fas fa-cart-plus"></i></button>
          </div>
        </div>
        
      </div>

      <!-- <div class="buttons">
        <button @click="addToCart(product)" class="btn btn-info"><i class="fas fa-cart-plus"></i></button>
      </div> -->
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
    height:80px;
    border:0;
  }

  .cardBox {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
  }

  .imgStyle {
    width:60px;
  }

  .imgStyle:hover {
    opacity: 1;
  }

  .imgBox {
    display: block;
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
    display: flex;
    margin: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
  }

  .btn {
    display:flex;
    margin:auto;
    justify-content:center;
    align-items:center;
    padding:0;
    width: 2.5rem;
    height: 1.5rem;
    margin-top:0.3rem;
  }

  .row {
    margin: 0px;
    padding: 0px;
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