<template>
  <nav>
    <div class="row gradient-custom3">
      <div class="navLeft row">
        <router-link to="/" class="navLogo col">
          <img :src="pImage" class="imgStyle">
          <i style="padding:0; align-text: center; margin: 1rem;" >Funko</i>
        </router-link>
        <div v-if="loggedIn" class="navLeftText">
          <div>Welcome {{ loggedInUser.firstName }}!</div>
          <a href="#" @click="signOut">Log out</a>
          <!-- <a href="#" @click="logout">Log out</a> -->
        </div>
      </div>
    </div>
    <div class="navRight">
      <router-link class="link" to="/" exact>Home</router-link>
      <div v-if="!loggedIn"><router-link class="link" to="/signin">Login</router-link></div>
      <div v-if="!loggedIn"><router-link class="link" to="/signup">Sign up</router-link></div>
      <router-link class="link" to="/orders" exact>Orders</router-link>
      <router-link class="link " to="/products" exact>Products</router-link>
      <router-link class="link d-flex basketDiv" to="/cart" exact>
        <i class="fas fa-shopping-cart basket">  </i>
        <div :class="{basketShow: !populate}" class="basketCount">{{count}}</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['count', 'loggedIn', 'loggedInUser']),
    populate() {
     return this.$store.getters.populate;
    },
    pImage: function() {
      return require(`@/assets/img/logo3.png`)
    },
  },
  methods: {
    ...mapActions(['logout', 'resetStore']),
    signOut() {
      this.logout()
      this.resetStore()
    }
  }
}

</script>

<style scoped>
  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #000000;
    color: #fff;
    margin:0;
    padding-left: 0rem;
    padding-right: 2rem;
    height: 100px;
  }
  .navLeft {
    display: flex;
    width: 40rem;
    padding-left: 1rem;
  }
  .navLeftText {
    display: inline-block;
    margin: auto;
    justify-content: start;
    flex:1;
    
  }
  .navRight {
    display:flex;
    font-size: 0.9rem;
  }
  .navLogo {
    
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .link {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem 1rem;
    display: inline-block;
    position: relative;
  }
  .link:hover {
    color: #a5a5a5;
  }

  .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #00fdfd;
    left: 1rem;
    bottom: 1.2rem;
    right: 1.7rem;
  }
  .basket {
    display: flex;
    align-items: center;
    justify-content:space-between;
  }

  .basketDiv {
    padding: 0;
  }

  .basketCount {
    display: inline-block;
    background: red;
    border-radius:15px;
    padding:0.2rem;
    margin: auto;
    margin-left: -0.2rem;
    /* margin-bottom: 1rem; */
    min-width: 2rem;
    align-items: center;
    text-align: center;
    /* height: 2rem; */
  }
  .basketShow {
      display:none
  }

  .imgStyle {
    /* width: 30%; */
    height:100px;
  }
</style>

