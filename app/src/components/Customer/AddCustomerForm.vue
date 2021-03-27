<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="gradient-custom mb-3 p-2">Add a new customer</div>
    <div class="col-9">
      <div class="row">
        <div class="col-6 p-1">
          <input type="text" id="cfirstname" class="form-control form-control-lg" v-model="customerFirstName" />
          <label class="form-label" for="cfirstname">Enter First Name</label>
        </div>
        <div class="col-6 p-1">
          <input type="text" id="clastname" class="form-control form-control-lg" v-model="customerLastName" />
          <label class="form-label" for="clastname">Enter Last Name</label>
        </div>
      </div>
      <div class="p-1">
        <input type="email" id="cemail" class="form-control form-control-lg" v-model="customerEmail" />
        <label class="form-label" for="cemail">Enter Customer Email</label>
      </div>
      <div class="p-1 mb-2">
        <input type="text" id="cpassword" class="form-control form-control-lg" v-model="customerPassword" />
        <label class="form-label" for="cpassword">Enter Password</label>
      </div>
    </div>
    <div class="col-1"></div>
    <div class="col-auto m-1">
      <button class="btn btn-primary">ADD CUSTOMER</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      customerFirstName: '',
      customerLastName: '',
      customerEmail: '',
      customerPassword: ''
    }
  },
  methods: {
    ...mapActions(['addCustomer']),
    onSubmit() {
      this.addCustomer([this.customerFirstName, this.customerLastName, this.customerEmail, this.customerPassword])
      this.customerFirstName = ''
      this.customerLastName = ''
      this.customerEmail = ''
      this.customerPassword = ''
    }
  }
}
</script>

<style>

</style>