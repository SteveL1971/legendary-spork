<template>
  <div>
    <div class="gradient-custom p-2">Created accounts</div>
    <table class="table">
    <thead>
      <tr class="tableHeader">
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col"></th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Status</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody class="align-items-center">
      <customer v-for="(customer, index) in customers" :key="index" :customer="customer" :id="index" />
    </tbody>
  </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Customer from './Customer.vue'
export default {
  components: { Customer },
  computed: {
    ...mapGetters(['customers'])
  }
}
</script>

<style>
.tableHeader {
  background: rgba(51, 8, 103, 0.068);
}
</style>