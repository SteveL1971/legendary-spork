<template>

  <div>
    <div class="card formStyle">
      <div class="gradient-custom mb-3 p-2 d-flex justify-content-center orderH5">Log in</div>
        <div class="card-body px-lg-2 pt-4">
          <form class="textColor" @submit.prevent="onSubmit">
            <div class="md-form mb-3 orderP">
              <input type="email" id="materialLoginFormEmail" class="form-control form-control-sm" ref="email" @keyup="handleChange" v-model="customerEmail">
              <label for="materialLoginFormEmail">E-mail</label>
            </div>
            <div class="md-form mb-5 orderP">
              <input type="password" id="materialLoginFormPassword" class="form-control form-control-sm" v-model="customerPassword">
              <label for="materialLoginFormPassword">Password</label>
            </div>
            <!-- <button class="btn btn-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button> -->
            <div class="px-5">
              <button class="btn btn-info btn-rounded btn-block w-100" type="submit">Log in</button>
            </div>
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
    ...mapActions(['login','getCart']),

    onSubmit () {
      if (this.email !== '' && this.password !== '') {
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
  width: 310px;
  display:flex;
  justify-content: center;
  margin:auto;
}

.orderP {
  color: black;
  font-size: 0.5rem;
  font-weight: 500;
  margin: auto;
  text-align: left;
  line-height: 1.7;
}

.orderH5 {
  color: white;
  font-size: 0.6rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.7;
}


</style>