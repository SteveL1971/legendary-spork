<template>
  <nav>
    <router-link to="/" class="logo">{{signedInId}}</router-link>
    {{signedIn}}
    <div class="navRight">
      <router-link class="link" to="/" exact>Home</router-link>
      <router-link class="link" to="/signin">Login</router-link>
      <router-link class="link" to="/customers">Customers</router-link>
      <router-link class="link" to="/orders" exact>Orders</router-link>
      <router-link class="link" to="/products" exact>Products</router-link>
      <router-link class="link d-flex basketDiv" to="/cart" exact>
      <i class="fas fa-shopping-cart basket">  </i>
      <div :class="{basketShow: !populate}" class="basketCount">{{count}}</div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['count', 'signedInId', 'signedIn']),
    populate() {
      console.log(this.$store.getters.populate)
     return this.$store.getters.populate;
    }
  },
  methods: {
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
    background: #201d1d;
    color: #fff;
  }
  .navRight {
    display:flex;
  }
  .logo {
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
    /* min-width: 6rem; */
    align-items: center;
    justify-content:space-between;
    height: 2rem;
    /* background: cornsilk; */

  }

  .basketCount {
    display: inline-block;
    background: red;
    border-radius:15px;
    padding:0.2rem;
    margin: auto;
    margin-left: 0.5rem;
    min-width: 2rem;
    align-items: center;
    text-align: center;
    /* height: 2rem; */
  }
  .basketShow {
      display:none
  }
</style>

