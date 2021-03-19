<template>
  <div class="contain">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:Verdana, Geneva, Tahoma, sans-serif
}
.btn {
  margin: 1rem 0 0 1rem;
  padding: .5rem .8rem;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  height: 2rem;
  width: 3rem;
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

.contain {
  width: 320px;
  margin:auto;
  padding: 0;
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

@media (min-width: 1280px) {
  .contain {
    width: 1280px;
    margin:auto;
    padding: 0;
  }  
}

</style>


