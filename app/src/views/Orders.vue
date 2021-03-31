<template>
  <div class="contain">
    <orders />
    <router-view/>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import Orders from '../components/Orders/Orders'
export default {
  components: { Orders },
  methods: {
    ...mapActions(['getOrders' , 'checkUser'])
  },
  created() {
    this.getOrders() 
    this.checkUser()
  }
}

</script>

<style>

</style>