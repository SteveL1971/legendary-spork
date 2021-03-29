<template>
  <div class="contain">
    
      <div class="container style404 w-75">
        <h1>Welcome to Funko store</h1>
        <div class="links d-flex justify-content-center my-2">
          <p class="mb-3 text-center">Here at Funko Store we would like to think of ourselves as your favorite friendly Funko-Pop resource. We are prepared to go the extra mile for you, and rest assured we will put in plenty of extra effort to ensure that we always keep you up to date with the latest hype and releases. Like you we understand the potential value of collectibles, and the pleasure and excitement that collecting can bring. We intend to do our very best to provide you with the highest quality service, and we also hope you will find our sortiment of both rare and regular Funko-Pops to your satisfaction. Please sign in already to start browsing our extensive selection of Funko Pops!</p>
          <div v-if="!loggedIn">
            <p>Already a member? <router-link to="/signin">Login</router-link></p>
            <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
          </div>
        </div>
        <!-- <p>Please log in!</p> -->
        <img :src="pImage" class="imgStyle">
      </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['order', 'loggedIn' , 'loggedInUser']),
    pImage: function() {
      return require(`@/assets/img/rv-walker.jpg`)
    },
  },
}

</script>

<style scoped>

    .links{
      flex-direction: column;
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
</style>
