<template>

  <div>
    <div class="card formStyle">
      <div class="gradient-custom mb-3 p-2 d-flex justify-content-center">Sign in</div>
        <div class="card-body px-lg-5 pt-4">
          <form class="textColor" @submit.prevent="onSubmit">
            <div class="md-form mt-4 mb-3">
              <input type="email" id="materialLoginFormEmail" class="form-control form-control-md" ref="email" @keyup="handleChange" v-model="customerEmail">
              <label for="materialLoginFormEmail">E-mail</label>
            </div>
            <div class="md-form mb-5">
              <input type="password" id="materialLoginFormPassword" class="form-control form-control-md" v-model="customerPassword">
              <label for="materialLoginFormPassword">Password</label>
            </div>
            <!-- <button class="btn btn-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button> -->
            <button class="btn btn-info btn-rounded btn-block" type="submit">Sign in</button>
            <div class="d-flex justify-content-center my-4">
              <p>Not a member? <router-link to="/signup">Sign up</router-link></p>
            </div>
          </form>
        </div>
    </div>
  </div>

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
    ...mapActions(['login']),

    // ...mapActions(['signInCustomer' , 'login']),
    // handleSubmit() {
    //   this.signInCustomer([this.customerEmail, this.customerPassword])
    //   this.customerEmail = ''
    //   this.customerPassword = ''
    // },

    onSubmit() {
      console.log('here ...')
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.customerEmail,
          password: this.customerPassword
        }

        let route = this.$route.query.redirect
        this.login({user, route})
      }
    },

    handleChange() {
      this.customerEmail = this.$refs.email.value
    }

  }
  
}
</script>

<style>

.textColor {
  color:  #757575;
}

.formStyle {
  display:flex;
  justify-content: center;
  margin:auto;
  width: 500px;
}

</style>