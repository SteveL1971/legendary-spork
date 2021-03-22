export default {
  state: {
    customers: [
      { id: 1, name: 'Bob', email: 'customer1@mail.com', password: 'BytMig123', active: true },
      { id: 2, name: 'Shiela', email: 'customer2@mail.com', password: 'BytMig123', active: false },
      { id: 3, name: 'Ralph', email: 'customer3@mail.com', password: 'BytMig123', active: true },
    ],
    signedIn: false,
    signedInId: ''
  },
  
  getters: {
    customers: state => state.customers,    
    signedIn: state => state.signedIn,
    signedInId: state => state.signedInId
  },
  mutations: {
    
    ADD_CUSTOMER: (state, [cusFirstName, cusLastName, cusEmail, cusPassword]) => {
      let exists = false;
      console.log(cusEmail, cusPassword, exists, state.customers.length, state.customers[0].email)

      for (var i = 0; i < state.customers.length; i++) {
      if (state.customers[i].email==cusEmail) {
        exists=true;
        }
      }

      console.log(cusEmail, exists)
      if(exists==false){
        let id=Date.now()
        state.customers.push({ id: id, firstName: cusFirstName, lastName: cusLastName, email: cusEmail, password: cusPassword, active: true })
      }
    },
    SIGNIN_CUSTOMER: (state, [cusEmail, cusPassword]) => {
      let exists = false;
      let customerIndex = null;
      console.log(cusEmail, cusPassword, exists, state.customers.length, state.customers[0].email)

      for (var i = 0; i < state.customers.length; i++) {
      if (state.customers[i].email==cusEmail) {
        exists=true;
        customerIndex=i;
        }
      }

      console.log(cusEmail, exists)
      if(exists==true){
        
        if(cusPassword==state.customers[customerIndex].password){
          state.signedIn=true;
          console.log(cusPassword, state.customers[customerIndex].password,state.signedIn,state.customers[customerIndex].id)
          state.signedInId=state.customers[customerIndex].id
          console.log(state.signedInId)
        }
      }
    },
    REMOVE_CUSTOMER: (state, customer) => {
      state.customers.splice(state.customers.indexOf(customer), 1)
    },
    TOGGLE_ACTIVE_STATE: (state, customer) => {
      customer.active = !customer.active
    }
  },
  actions: {
    addCustomer: ({commit}, [cusFirstName, cusLastName, cusEmail, cusPassword]) => {
      commit('ADD_CUSTOMER', [cusFirstName, cusLastName, cusEmail, cusPassword])
    },
    signInCustomer: ({commit}, [cusEmail, cusPassword]) => {
      // console.log(cusName, cusPassword)
      commit('SIGNIN_CUSTOMER', [cusEmail, cusPassword])
    },
    removeCustomer: ({commit}, customer) => {
      commit('REMOVE_CUSTOMER', customer)
    },
    toggleActive: ({commit}, customer) => {
      commit('TOGGLE_ACTIVE_STATE', customer)
    }
  }

}