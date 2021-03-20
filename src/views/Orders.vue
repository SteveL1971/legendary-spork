<template>
  <div class="contain">
    <orders />
    <router-view/>
  </div>
</template>

<script>
import Orders from '../components/Orders/Orders'
export default {
  components: { Orders }
}
</script>