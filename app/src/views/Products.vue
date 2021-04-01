<template>
  <div>
    <div  v-if="loggedIn" class="products">
      <div class="d-flex justify-content-between pt-3 pb-2 px-1 px-sm-2" >
        <form>
            <div class="d-flex">
              <input class= "form-control mx-2" type="text" placeholder="Search..." v-model="searchVal" @keyup="search(searchVal)">        
              <button @click.prevent="clearFilter" class="btn btn-info btnFilter mx-1 py-1 bg-info">reset</button>
            </div>
        </form>
        <div class="buttons d-flex justify-content-between">
          <button @click="changeComp('Grid')" class="btn btn-info px-1 py-1 bg-info"><i class="fa-th-large"></i></button>
          <button @click="changeComp('List')" class="btn btn-info px-1 py-1 mx-1 bg-info"><i class="fas fa-list"></i></button>
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
          <p>Already a member? <router-link to="/signin">Log in</router-link></p>
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
    ...mapActions(['changeComp', 'search', 'resetFilter', 'checkUser']),
    clearFilter() {
      this.resetFilter()
      this.searchVal = ''
    },
    created() {
      this.checkUser()
    }
  }

}
</script>

<style scoped>
  .products {
    /* display: block; */
    background: #9de2e036;
    margin: auto;
    padding-bottom: 1rem;
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

.form-control {
  height: 1.7rem;
  font-size: 0.6rem;
}

.btnFilter {
  width:6rem;
  font-size: 0.5rem;
  height:1.7rem;
  color: white;
}

</style>