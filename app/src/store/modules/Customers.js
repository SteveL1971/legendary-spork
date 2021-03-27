export default {
  state: {
    customers: [
      { id: 1, firstName: 'Bob', lastName: 'Holness', email: 'customer1@mail.com', password: '', active: true },
      { id: 2, firstName: 'Shiela', lastName: 'Morris', email: 'customer2@mail.com', password: 'BytMig123', active: false },
      { id: 3, firstName: 'Ralph', lastName: 'Bertilsson', email: 'customer3@mail.com', password: 'BytMig123', active: true },
    ],
    signedIn: false,
    signedInCustomer: []
  },

  getters: {
    customers: state => state.customers,    
    signedIn: state => state.signedIn,
    signedInCustomer: state => state.signedInCustomer
  },
  
  mutations: {
    
    ADD_CUSTOMER: (state, { cusFirstName, cusLastName, cusEmail, cusPassword }) => {
      let exists = false;

      for (var i = 0; i < state.customers.length; i++) {
      if (state.customers[i].email==cusEmail) {
        exists=true;
        }
      }

      if(exists==false){
        let id=Date.now()
        state.customers.push({ id: id, firstName: cusFirstName, lastName: cusLastName, email: cusEmail, password: cusPassword, active: true })
      }
    },

    SIGN_IN_CUSTOMER: (state, { cusEmail, cusPassword }) => {
      let exists = false;
      let customerIndex = null;

      for (var i = 0; i < state.customers.length; i++) {
      if (state.customers[i].email==cusEmail) {
        exists=true;
        customerIndex=i;
        }
      }

      if(exists==true){
        
        if(cusPassword==state.customers[customerIndex].password){
          state.signedIn=true;
          state.signedInCustomer=state.customers[customerIndex]
        }
      }
    },
    SIGN_OUT_CUSTOMER: (state) => {
      state.signedIn=false;
      state.signedInCustomer=[]
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
      commit('ADD_CUSTOMER', { cusFirstName, cusLastName, cusEmail, cusPassword })
    },
    signInCustomer: ({commit}, [cusEmail, cusPassword]) => {
      commit('SIGN_IN_CUSTOMER',  { cusEmail, cusPassword })
    },
    signOutCustomer: ({commit}) => {
      commit('SIGN_OUT_CUSTOMER')
    },
    removeCustomer: ({commit}, customer) => {
      commit('REMOVE_CUSTOMER', customer)
    },
    toggleActive: ({commit}, customer) => {
      commit('TOGGLE_ACTIVE_STATE', customer)
    }
  }

}