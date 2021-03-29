<template>
  <div>
    <div  v-if="loggedIn" class="products">
      <div class="mt-3 mb-3 d-flex justify-content-between" >
        <form>
            <div class="d-flex">
              <input class= "form-control mx-2 searchStyle" type="text" placeholder="Search..." v-model="searchVal" @keyup="search(searchVal)">        
              <button @click.prevent="clearFilter" class="btn btn-info mx-2 px-3 w-100 py-2 bg-primary">Clear Filter</button>
            </div>
        </form>
        <div class="buttons d-flex justify-content-between">
          <button @click="changeComp('Grid')" class="btn btn-info px-3 py-2 bg-primary"><i class="fa-th-large"></i></button>
          <button @click="changeComp('List')" class="btn btn-info px-3 py-2 mx-2 bg-primary"><i class="fas fa-list"></i></button>
        </div>
      </div>
      <div class="content">
        <component :is="comp" />
      </div>
    </div>
    <div v-if="!loggedIn">
      <div class="container style404">
        <h1>Please log in!</h1>
        <div class="links d-flex justify-content-center my-2">
          <p>Already a member? <router-link to="/signin">Login</router-link></p>
          <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
        </div>
        <img :src="pImage" class="imgStyle">
      </div>
    </div> 
  </div> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
  name: 'Products',
  components: {
    Grid,
    List
  },
  data() {
    return {
      searchVal: ''
    }
  },
  computed: {
    ...mapGetters(['comp' , 'loggedIn']),
    pImage: function() {
      return require(`@/assets/img/dovahkiin.jpg`)
    },
  },
  methods: {
    ...mapActions(['changeComp', 'search', 'resetFilter']),
    clearFilter() {
      this.resetFilter()
      this.searchVal = ''
    },
  }

}
</script>

<style scoped>
  .products {
    display: block;
    margin: auto;
  }

  .links {
    flex-direction: column;
  }
  aside {
    flex: 2;
    background: #424242;
    padding: 2rem;
    min-height: calc(100vh - 66.29px);
  }

  .imgStyle {
    padding-top: 2rem;
    width: 30%;
  }

  .style404 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 5rem;
  }
  .content {
    flex: 10;
  }

  .buttons button {
    cursor: pointer;
  }

  .btn {
    margin: 0px;
    padding: 8px;
    width: 3rem;
  }

  .searchStyle {
    width: 11rem;
  }

</style>