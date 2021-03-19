<template>
  <div class="card">
    <div class="textStyle d-flex justify-content-between">
      <div class="textLayout">
        <div class="row mx-2 gradient-custom">
          <h4 class="col-3 align-text-center">Name:</h4>
          <p class="col-9 headerStyle"> {{ product.name }}</p>
        </div>
        <div class="row mt-2 mx-2">
          <h5 class="col-3">Id:</h5>
          <p class="col-9"> {{ product.id }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3">Number:</h5>
          <p class="col-9"> #{{ product.number }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3">Series:</h5>
          <p class="col-9"> {{ product.series }}</p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3">Price:</h5>
          <p class="col-9"> {{ product.price }}kr <span class="smallText">ex VAT</span></p>
        </div>
        <div class="row mx-2">
          <h5 class="col-3">Price:</h5>
          <p class="col-9"> {{ product.taxPrice }}kr <span class="smallText">incl VAT</span></p>
        </div>
        <div class="descStyle mt-2 mx-2">
          <h5 class=""> Description: </h5>
          <h5>Magna sint duis minim officia eu tempor dolore commodo proident. Minim veniam velit cillum dolore cillum nostrud labore magna mollit adipisicing irure pariatur. Consequat voluptate cillum ea enim mollit. Commodo cupidatat velit sit cillum ullamco. Enim nisi aliqua do irure eiusmod tempor do velit excepteur excepteur magna duis. Duis nulla adipisicing laborum velit mollit dolor sunt pariatur amet do et aliqua laborum minim.</h5>  
        </div>
        <div class="">
          <button @click="subPrice(5)" class="btn">-</button>
          <button @click="addToPrice" class="btn">+</button>
        </div>
      </div>
      <img :src="pImage" class="imgStyle" :alt="product.name">

    </div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product']),
    pImage: function() {
      return require(`@/assets/img/` + this.product.img)
    },
  },
  created() {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>
  .card {
    width: 60%;
    min-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    min-height: 50vh;
    background-color: rgba(51, 8, 103, 0.068);
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.404);
    border-radius: 5px;
  }
    .textStyle {
    display: flex;
    margin:auto;
    margin-bottom: 0.5rem;
    width: 100%;
    border: 1px solid #000;
    color: black;
    border-radius: 5px;
    padding: 1rem;
    background-color: rgb(241, 237, 237);
    /* box-shadow:6px 3px 3px rgba(0, 0, 0, 0.425); */
  }
    .imgStyle {
    width:380px;
    /* border: 1px solid black; */
    /* border-radius: 5px; */
    /* box-shadow:6px 3px 3px rgba(0, 0, 0, 0.425); */
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
  .textStyle {
    display: block;
    margin:auto;
    margin-top: 0rem;
    margin-bottom: 0rem;
    width: 100%;
    border: 2px solid #30cfd0;
    color: black;
    padding-top: 1rem;
    padding-left: 0.3rem;
    background-color: #fff;
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
    font-size: 1rem;
    font-weight: 500;
  }

  .headerStyle {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .textLayout {
    /* background: cornsilk; */
    flex:0.95;
    border: 0;
    margin: 0;
    padding: 0;
    /* border-right: 2px solid #007bff50; */
  }

  .row {
    margin: 0;
  }

  .descStyle {
    background-color: rgb(241, 237, 237);

  }
</style>