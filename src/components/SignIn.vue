<template>
  <!-- Material form login -->
<div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>

  <!--Card content-->
  <div class="card-body px-lg-5 pt-0">

    <!-- Form -->
    <form class="text-center" style="color: #757575;" @submit.prevent="handleSubmit">

      <!-- Email -->
      <div class="md-form mt-4">
        <input type="email" id="materialLoginFormEmail" class="form-control" ref="email" @keyup="handleChange" v-model="customerEmail">
        <label for="materialLoginFormEmail">E-mail</label>
      </div>

      <!-- Password -->
      <div class="md-form">
        <input type="password" id="materialLoginFormPassword" class="form-control" v-model="customerPassword">
        <label for="materialLoginFormPassword">Password</label>
      </div>

      <!-- Sign in button -->
      <button class="btn btn-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

      <div>{{ customerEmail }}</div>
      <div>{{ customerPassword }}</div>


    </form>
    <!-- Form -->

  </div>

</div>
<!-- Material form login -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      customerEmail: '',
      customerPassword: ''
    }
  },
  methods: {

    ...mapActions(['signInCustomer']),
    handleSubmit() {
      console.log(this.customerName , this.customerPassword)
      this.signInCustomer([this.customerEmail, this.customerPassword])
      this.customerEmail = ''
      this.customerPassword = ''
    },

    handleChange() {
      this.customerEmail = this.$refs.email.value
      // console.log(this.$refs.email.value)
    },
    // handleSubmit() {
    // console.log(this.customerEmail, this.customerPassword)
    // this.customerEmail = ''
    // this.customerPassword = ''
    // }
  }
  
}
</script>

<style>

</style>