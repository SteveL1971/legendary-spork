<template>
  <nav>
    <div class="gradient-custom3">
      <div class="navLeft">
        <router-link to="/" class="navLogo col">
          <img :src="pImage" class="imgStyle">
        </router-link>
        <div v-if="loggedIn" class="navLeftText">
          <div class="">Hi {{ loggedInUser.firstName }}!</div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="navRight">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <!-- Icon dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img :src="pImage3" class="imgMini">
                Meny
              </a>
              <ul class="dropdown-menu gradient-custom3 bg-black dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                    <router-link class="link dropdown-item" to="/" exact><img :src="pImage3" class="imgMini">Home</router-link>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li v-if="!loggedIn">
                  <router-link class="link dropdown-item" to="/signin"><img :src="pImage4" class="imgMini">Log in</router-link>
                </li>
                <li v-if="!loggedIn">
                  <router-link class="link dropdown-item" to="/signup"><img :src="pImage5" class="imgMini">Sign up</router-link>
                </li>
                <li>
                  <router-link class="link dropdown-item" to="/orders" exact><img :src="pImage6" class="imgMini">Orders</router-link>
                </li>
                <li>
                  <router-link class="link dropdown-item" to="/products" exact><img :src="pImage7" class="imgMini">Products</router-link>
                </li>
                <li v-if="loggedIn">
                  <hr class="dropdown-divider" />
                </li>
                <li v-if="loggedIn">
                    <a href="#" class="link dropdown-item" @click="signOut"><img :src="pImage4" class="imgMini">Log out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <router-link class="link d-flex basketDiv" to="/cart" exact>
          <i class="fas fa-shopping-cart basket">  </i>
          <div :class="{basketShow: !populate}" class="basketCount">{{count}}</div>
          <div :class="{basketShow: populate}" class="basketInv">{{count}}</div>
        </router-link> 

      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  computed: {
    
    ...mapGetters(['count', 'loggedIn', 'loggedInUser' , 'getCart']),
    
    populate() {
     return this.$store.getters.populate;
    },
    pImage: function() {
      return require(`@/assets/img/logo3.png`)
    },
    pImage2: function() {
      return require(`@/assets/img/buffy-bloody.jpeg`)
    },
    pImage3: function() {
      return require(`@/assets/img/superman.png`)
    },
    pImage4: function() {
      return require(`@/assets/img/belle.png`)
    },
    pImage5: function() {
      return require(`@/assets/img/daenerys.png`)
    },
    pImage6: function() {
      return require(`@/assets/img/cobain.png`)
    },
    pImage7: function() {
      return require(`@/assets/img/sauron.png`)
    },
  },
  methods: {
    ...mapActions(['logout', 'resetStore']),
    signOut() {
      this.logout()
      this.resetStore()
    },
  },

}

</script>

<style scoped>
  nav {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000000;
    color: #fff;
    margin:0;
    padding-left: 0rem;
    padding-right: 0.5rem;
    height: 70px;
  }
  .navLeft {
    display: flex;
    /* width: 40rem; */
    padding-left: 0.5rem;
  }
  .navLeftText {
    display: flex;
    margin: auto;
    justify-content: start;
    flex:1;
    padding-left: 0.5rem;
    
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
    padding: 1rem 1rem;
    display: inline-block;
    position: relative;
  }

  .nav-link {
    color: white;
  }
  /* .link:hover {
    color: #a5a5a5;
  } */

  /* .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #00fdfd;
    left: 1rem;
    bottom: 1.2rem;
    right: 1.7rem;
  } */

  .basket {
    display: flex;
    align-items: center;
    justify-content:space-between;
  }

  .basketDiv {
    font-size:1rem;
    padding: 0;
  }

  .basketCount {
    display: flex;
    background: red;
    border-radius:15px;
    padding:0.1rem;
    margin: auto;
    margin-left: -0.2rem;
    width: 1.3rem;
    height: 1.3rem;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }
  .basketInv {
    margin-left: -0.2rem;
    min-width: 1.3rem;
    min-height: 1.3rem;
    visibility: hidden;
  }

  .basketShow {
      display:none
  }

  .imgStyle {
    height:70px;
  }
  .imgMini {
    /* width: 30%; */
    width:30px;
    padding-right:0.4rem;
  }

  div {
    font-size: 0.5rem;
  }
  a {
    font-size: 0.6rem;
  }

  @media (min-width: 640px) {

    div, a {
    font-size: 0.7rem;
  }
}


  @media (min-width: 960px) {
  .imgStyle {
    height:100px;
  }
  nav {
    height: 100px;
    padding-right: 1rem;
  }
    div, a {
    font-size: 0.8rem;
  }
}


</style>

