import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
import customers from './modules/Customers'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: '13', name: 'Children of the Forest', series: 'Game of Thrones', number: '69', price: 149, img: '69_1_children_of_the_forest.png' },
      { id: '14', name: 'Harry vs Voldemort', series: 'Harry Potter', number: '61', price: 332.5, img: '119_1_Harry_vs_Voldemort.jpg' },
      { id: '15', name: 'Harry Potter', series: 'Harry Potter', number: '112', price: 149, img: '112_1_Harry.jpg' },
      { id: '16', name: 'Ron Weasley', series: 'Harry Potter', number: '34', price: 132.5, img: '34_1_Ron.jpg' }
    ],
    cart: [],
    order: [],
    product: null,
    comp: 'Grid',
    searchVal: '',
    count: 0,
    totalPrice: 0,
    populate: false,
  },
  getters: {
    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
          ...product,
          name: product.name + '',
          price: Math.round(product.price * 1.2)
        }
      })
      return taxedProducts
    },
    count: state => state.count,
    totalPrice: state => state.totalPrice,
    comp: state => state.comp,
    cart: state => state.cart,
    order: state => state.order,
    populate: state => state.populate,
    product: state => state.product,

    filteredProducts: (state) => {
      return state.products.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },
  mutations: {
    ADD_CART_ITEM: (state, product) => {
      let exists= false
      if(state.cart.length) {
        state.cart.forEach(c => {
            if(c._id === product._id) {
              c.amount ++
              exists= true
              return;
            }
          })
      } 
      if(!exists) {
        state.cart.push({_id: product._id, id: product.id, name: product.name, number: product.number, series: product.series,  price: product.price, img: product.img, amount: 1  })
      }
      state.count ++
      state.totalPrice += Math.round(product.price * 1.2)
      state.populate=true
    },
    REMOVE_FROM_CART: (state, product) => {
      if(state.cart.length) {
        state.cart.forEach(c => {
            if(c._id === product._id) {
              c.amount --        
              if (c.amount==0) {
                state.cart.splice(state.cart.indexOf(product), 1)
              }
              return;
            }
          })
      } 

      state.totalPrice -= Math.round(product.price * 1.2)
      state.count --
      if(state.count == 0) {
        state.populate=false
      }
    },

    REMOVE_CART_ITEM: (state, product) => {
      state.count -= product.amount
      state.totalPrice -= product.amount*(Math.round(product.price * 1.2))
      state.cart.splice(state.cart.indexOf(product), 1)
      if(state.count == 0) {
        state.populate=false
      }
    },
    CHANGE_COMP: (state, payload) => {
      state.comp = payload
    },
    SET_PRODUCT: (state, product) => {
      state.product = product
    },

    SET_PRODUCTS: (state, products) => {
      state.products = products
    },

    SET_ORDERS: (state, orders) => {
      state.order = orders
    },

    SEARCH: (state, val) => {
      state.searchVal = val
    },

    SAVE_ORDER: async (state, orders) => {
      state.order = orders

      if(state.count>0 && user.state.loggedIn){
      const orderNumber = (state.order.filter(product => product.customerId == user.state.loggedInId).length)+1
      const _cart = {
        customerId : user.state.loggedInId, 
        date : new Date(),
        count : state.count, 
        totalPrice : state.totalPrice,
        cart : state.cart,
        orderNumber : orderNumber
      }
      await axios.post('/orders/order', _cart)
      
      state.cart = []
      state.count = 0
      state.totalPrice = 0
      state.populate=false 

      }
    },
    // SAVE_ORDER: async (state) => {

    //   if(state.count>0 && user.state.loggedIn){
    //   const orderNumber = state.order.filter(product => product.customerId == user.state.loggedInId).length
    //   const _cart = {
    //     orderNumber : orderNumber +1,
    //     customerId : user.state.loggedInId, 
    //     date : new Date(),
    //     count : state.count, 
    //     totalPrice : state.totalPrice,
    //     cart : state.cart
    //   }
 
    //   await axios.post('/orders/order', _cart)

    //   state.cart = []
    //   state.count = 0
    //   state.totalPrice = 0
    //   state.populate=false 
    //   }
    // },

    CLEAR_POST: state => state.product = []

  },
  actions: {
    addToCart: ({commit}, product) => {
      commit('ADD_CART_ITEM', product)
    },
    removeFromCart: ({commit}, product) => {
      commit('REMOVE_FROM_CART', product)
    },
    removeCartItem: ({commit}, product) => {
      commit('REMOVE_CART_ITEM', product)
    },
    changeComp: ({commit}, component) => {
      commit('CHANGE_COMP', component)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    },
    saveOrder: async ({commit}) => {
      const res = await axios.get('/orders/')
      commit('SAVE_ORDER', res.data)
    },
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('SET_PRODUCTS', res.data)
    },
    getOrders: async ({commit}) => {
      const res = await axios.get('/orders/')
      commit('SET_ORDERS', res.data)
    },
    getProduct: async ({commit}, id) => {
      const res = await axios.get('/products/' + id)
      commit('SET_PRODUCT', res.data)
    },
    clearPost: ({commit}) => {
      commit('CLEAR_POST')
    },
  },
  modules: {
    customers,
    user
  }
})
