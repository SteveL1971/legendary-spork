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
    ...mapActions(['getOrders'])
  },
  created() {
    this.getOrders() 
  }

}

</script>

<style scoped>


</style>