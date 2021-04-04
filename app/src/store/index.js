import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'
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
    product: [],
    comp: 'List',
    searchVal: '',
    count: 0,
    count2: 0,
    totalPrice: 0, 
    populate: false,
    orderCompleted: false
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

    // count: state => {
    //   return state.cart.reduce((acc, item) => {
    //       if(user.state.loggedInUser.id===item.customerId){
    //           acc+=item.amount;
    //       }
    //       return acc;
    //   }, 0);
    // },

    count: (state) => {
      state.count=0
      state.cart.forEach(item => {
          if(user.state.loggedInUser.id===item.customerId) state.count += item.amount;
      })
      return state.count
    },

    totalPrice: (state) => {
      state.totalPrice=0
      state.cart.forEach(item => {
        if(user.state.loggedInUser.id==item.customerId) state.totalPrice += item.amount*Math.round(item.price*1.2)
      })
      return state.totalPrice
    },

    comp: state => state.comp,
    cart: (state) => {
      return state.cart.filter(cart => cart.customerId.match(user.state.loggedInUser.id))
    },
 
    order: state => state.order,
    populate: state => state.populate,
    product: state => state.product,
    searchVal: state => state.searchVal,
    orderCompleted:state => state.orderCompleted,

    filteredProducts: (state) => {
      return state.products.filter(product => product.series.toLowerCase().match(state.searchVal.toLowerCase())||product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },

  mutations: {

    GET_CART: (state, savedCart) => {
      state.cart = savedCart
      state.count=0
      state.cart.forEach(item => {
        if(user.state.loggedInUser.id==item.customerId) state.count += item.amount
      })

      if (state.count>0){
        state.populate=true
      }else {
        state.populate=false
      }
    },

    // REFRESH_DB: async (state, savedCart) => {
      // state.cart=savedCart
      // const _cart = {
      //   customerId: user.state.loggedInUser.id,
      //   itemId: "1",
      // }
      // state.cart.push(_cart)
      // await axios.post('/cart/post', _cart)
      // console.log("sent", user.state.loggedInUser.id)

      // axios.delete('/cart/delete', {
      //   data: {
      //     itemId: "1",
      //     customerId: user.state.loggedInUser.id
      //   }
      // })
    // },

    ADD_CART_ITEM: async (state, [ product , savedCart ]) => {
      
      state.cart=savedCart
      let exists= false
      if (product.itemId==null) {
        product.itemId=product._id
      }
      if(state.cart.length) {
        state.cart.forEach(c => {
            if (c.customerId === user.state.loggedInUser.id && c.itemId === product.itemId) {
              c.amount ++
              const _cart = {
                customerId: user.state.loggedInUser.id,
                itemId: product.itemId,
                amount: c.amount
                }
              axios.patch('/cart/patch', _cart)
              exists= true
            } 
          })
      } 

      if(!exists) {
        const _cart = {
          customerId: user.state.loggedInUser.id,
          itemId: product._id,
          name: product.name,
          number: product.number,
          series: product.series,
          price: product.price,
          img: product.img,
          amount: 1,
        }
        state.cart.push(_cart)
        await axios.post('/cart/post', _cart)
      }

      // state.count ++
      // state.totalPrice += Math.round(product.price * 1.2)
      state.populate=true
    },

    REMOVE_FROM_CART: async ( state, [ product , savedCart ]) => {

      state.cart=savedCart
      
      if(state.cart.length) {
        state.cart.forEach(c => {
          if(c.itemId === product.itemId) {
            c.amount --        
            const _cart = {
              customerId: user.state.loggedInUser.id,
              itemId: product.itemId,
              amount: c.amount,
            }
            if (c.amount > 0) {
              axios.patch('/cart/patch', _cart)
            } else {
              state.cart.splice(state.cart.indexOf(c), 1)
              axios.delete('/cart/delete', {
                data: {
                  itemId: product.itemId,
                  customerId: user.state.loggedInUser.id
                }
              })
            }
          }
        })
      } 
      
    },

    REMOVE_CART_ITEM: (state, [ product , savedCart ]) => {

      state.cart=savedCart
      
      if(state.cart.length) {
        state.cart.forEach(c => {
          if(c.itemId === product.itemId && c.customerId === user.state.loggedInUser.id) {
            c.amount --        
            state.cart.splice(state.cart.indexOf(c), 1)
            axios.delete('/cart/delete', {
              data: {
                itemId: product.itemId,
                customerId: user.state.loggedInUser.id
              }
            })
          } 
        })
      } 

      // state.count -= product.amount
      // state.totalPrice -= product.amount*(Math.round(product.price * 1.2))  
      // if(state.count == 0) {
      //   state.populate=false
      // }
      
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

    RESET_FILTER: (state) => {
      state.searchVal = ''
    },

    RESET_STORE: (state) => {
      state.cart = []
      state.order = []
      state.product = []
      state.searchVal = ''
      state.count = 0
      state.totalPrice = 0,
      state.populate = false
    },

    CATEGORY_FILTER: (state, val) => {
      state.searchVal = val
    },
    ORDER_COMPLETE_FALSE: (state) => {
      state.orderCompleted = false
    },
    
    SAVE_ORDER_ID: async (state, orders) => {
      state.order = orders
      const thisCart = state.cart.filter(cart => cart.customerId.match(user.state.loggedInUser.id))
      if(state.count>0 && user.state.loggedIn){
        const orderNumber = (state.order.length)+1
        const date = new Date()
        const formattedDate = date.toLocaleString()
        const _cart = {
          customerId : user.state.loggedInUser.id, 
          date : formattedDate,
          count : state.count, 
          totalPrice : state.totalPrice,
          cart : thisCart,
          orderNumber
        }
        await axios.post('/orders/order', _cart)
        
        state.cart = []
        state.count = 0
        state.totalPrice = 0
        state.populate=false 
        state.orderCompleted=true

        axios.delete('/cart/deleteCart', {
          data: {
            customerId: user.state.loggedInUser.id
          }
      })
    }
  },

  CLEAR_POST: state => state.product = []

  },
  actions: {
    addToCart: async ({commit}, product) => {
      const res = await axios.get('/cart/')
      commit('ADD_CART_ITEM', [product , res.data])
    },
    removeFromCart: async ({commit}, product) => {
      const res = await axios.get('/cart/')    
      commit('REMOVE_FROM_CART', [product, res.data])
    },
    removeCartItem: async ({commit}, product) => {
      const res = await axios.get('/cart/')
      commit('REMOVE_CART_ITEM', [product, res.data])
    },
    changeComp: ({commit}, component) => {
      commit('CHANGE_COMP', component)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    },
    catFilter: ({commit}, val) => {
      commit('CATEGORY_FILTER', val)
    },
    saveOrderId: async ({commit}, id) => {
      const res = await axios.get('/orders/' + id)
      commit('SAVE_ORDER_ID', res.data)
    },
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('SET_PRODUCTS', res.data)
    },
    getCart: async ({commit}) => {
      const res = await axios.get('/cart/')
      commit('GET_CART', res.data)
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
    resetFilter: ({commit}) => {
      commit('RESET_FILTER')
    },
    resetStore: ({commit}) => {
      commit('RESET_STORE')
    },

    // refreshDb: async ({commit}) => {
    //   const res = await axios.get('/cart/')
    //   console.log('refreshing db')
    //   commit('REFRESH_DB',  [res.data])
    // },

    orderCompleteFalse: ({commit}) => {
      commit('ORDER_COMPLETE_FALSE')
    },
  },
  modules: {
    // customers,
    user
  }
})
