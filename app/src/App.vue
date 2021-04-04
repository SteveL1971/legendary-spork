<template>
  <div class="contain">
    <navbar class="sticky-top" />
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: { Navbar },

  methods: {
    ...mapActions(['getProducts', 'checkUser', 'getCart'])
  },
  created() {
    this.getProducts()
    this.checkUser()
    this.getCart()
  },
  updated() {
    this.getCart()
  }
}

</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:Verdana, Geneva, Tahoma, sans-serif
}

.headerStyle {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
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

h5, p {
  font-weight: 400;
  font-size: 0.7rem;
  padding: 0px;
  margin: auto;
  text-align: left;
  color:rgb(99, 94, 94);
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
  line-height: 2;
}

.textStyle {
  /* border: 2px solid #007bff50; */
  color: black;
  background-color: #fff;
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

.btn {
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

.btn-black {
  background: #201d1d;
  color: #fff;
}

.btn:hover {
  box-shadow: 0 0 5px 0 #201d1d;
}
.btn:active {
  background: #000;
  box-shadow: none;
}

.p1 {
  padding-left: 1rem;
}

.gradient-custom {
  /* fallback for old browsers */
  background: #30cfd0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(48, 207, 208, 0.5), rgba(51, 8, 103, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(48, 207, 208, 0.5), rgba(51, 8, 103, 0.5))
}

.gradient-custom2 {
  /* fallback for old browsers */
  background: #a8edea;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(168, 237, 234, 0.5), rgba(254, 214, 227, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(168, 237, 234, 0.5), rgba(254, 214, 227, 0.5))
}

.gradient-custom3 {
  /* fallback for old browsers */
  background: #a8edea;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(168, 237, 234, 0.5), rgba(0, 0, 0, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(168, 237, 234, 0.5), rgba(0, 0, 0, 0.5))
}

.row {
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0;
}

.container {
  width:80%;
  margin: auto;
}

.contain {
  width: 320px;
  margin:auto;
  padding: 0;
} 

.alignCenter {
  display: flex;
  align-items: center;
  margin: auto;
}

@media (min-width: 640px) {
  .contain {
    width: 640px;
    margin:auto;
    padding: 0;
  }  
}

@media (min-width: 960px) {
  .contain {
    width: 960px;
    margin:auto;
    padding: 0;
  }  
}

</style>


