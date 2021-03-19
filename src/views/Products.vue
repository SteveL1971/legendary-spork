<template>
  <div class="products">
    <div class="mt-3 mb-3 d-flex justify-content-between" >
      <form>
          <div>
            <input class= "form-control mx-2 searchStyle" type="text" placeholder="search..." v-model="searchVal" @keyup="search(searchVal)">        
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
      // comp: 'Grid'
      searchVal: ''
    }
  },
  computed: {
    ...mapGetters(['comp'])
  },
  methods: {
    ...mapActions(['changeComp', 'search'])
  }
}
</script>

<style scoped>
  .products {
    display: block;
    margin: auto;
  }
  aside {
    flex: 2;
    background: #424242;
    padding: 2rem;
    min-height: calc(100vh - 66.29px);
  }
  .content {
    flex: 10;
  }
  a {
    color: #fff;
  }
  .buttons button {
    cursor: pointer;
  }

  .btn {
    margin-top: 0;
  }

  .searchStyle {
    width: 11rem;
  }
</style>