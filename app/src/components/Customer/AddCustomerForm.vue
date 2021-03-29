<template>

    <form class=" card formStyle row" @submit.prevent="onSubmit">
      <div class="gradient-custom mb-3 p-2 d-flex justify-content-center">Sign up as a new customer</div>
      <div class="col p-5">
        <div class="row">
          <div class="mb-2 col-12">
            <input type="text" id="cfirstname" class="form-control form-control-md" v-model="user.firstName" />
            <label class="form-label" for="cfirstname">Enter your first name</label>
          </div>
          <div class="mb-2 col-12">
            <input type="text" id="clastname" class="form-control form-control-md" v-model="user.lastName" />
            <label class="form-label" for="clastname">Enter your surname</label>
          </div>
        </div>
        <div class="mb-2 col-12">
          <input type="email" id="cemail" class="form-control form-control-md" v-model="user.email" />
          <label class="form-label" for="cemail">Enter your email</label>
        </div>
        <div class="mb-2 col-12">
          <input type="text" id="cpassword" class="form-control form-control-md" v-model="user.password" />
          <label class="form-label" for="cpassword">Enter a password</label>
        </div>
      </div>
      <div class="px-5 col-12">
      <button class="btn btn-info w-100 waves-effect z-depth-0">Sign up</button>
      <div class="d-flex justify-content-center my-4">
        <p>Already a member? <router-link to="/signin">Login</router-link></p>
      </div>
      </div>
    </form>


</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['addCustomer' , 'register']),
    onSubmit() {
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
        this.user.firstName = ''
        this.user.lastName = ''
        this.user.email = ''
        this.user.password = ''
      }
      // this.addCustomer([this.user.firstName, this.user.lastName, this.user.email, this.user.password])

    }
  }
}
</script>

<style scoped>

.formStyle {
  display:flex;
  margin:auto;
  width: 500px;
}

.rightStyle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100px;
  
}

</style>