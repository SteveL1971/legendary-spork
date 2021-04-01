<template>
  <div class="contain cartStyle">
    <cart />
    <router-view/>
  </div>
</template>

<script>

import Cart from '../components/Cart/Cart'
export default {
  components: { Cart }
}

</script>

<style scoped>

</style>