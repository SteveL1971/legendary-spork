import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: '1', name: 'Endeavor', series: 'My Hero Academia', number: '785', price: 124, img: '785_1_Endeavor.jpg' },
      { id: '2', name: 'Todoroki', series: 'My Hero Academia', number: '372', price: 132.5, img: '372_1_Todoroki.png' },
      { id: '3', name: 'Deku', series: 'My Hero Academia', number: '247', price: 124, img: '247_1_Deku.jpg' },
      { id: '4', name: 'Tsuyu', series: 'My Hero Academia', number: '374', price: 124, img: '374_1_Tsuyu.png' },
      { id: '5', name: 'Shota Aizawa', series: 'My Hero Academia', number: '375', price: 157.5, img: '375_1_Shota_Aizawa.png' },
      { id: '6', name: 'Deku', series: 'My Hero Academia', number: '249', price: 149, img: '249_1_Katsuki.jpg' },
      { id: '7', name: 'Deku (training)', series: 'My Hero Academia', number: '373', price: 149, img: '373_1_Deku_training.png' },
      { id: '8', name: 'Tyrion Lannister', series: 'Game of Thrones', number: '71', price: 332.5, img: '71_1_Tyrion_Lannister.jpeg' },
      { id: '9', name: 'Arya Stark', series: 'Game of Thrones', number: '09', price: 132.5, img: '09_1_Arya_Stark.jpg' },
      { id: '10', name: 'Daenerys Targaryen', series: 'Game of Thrones', number: '63', price: 299, img: '63_1_Daenerys_Targaryen.png' },
      { id: '11', name: 'Jon Snow', series: 'Game of Thrones', number: '61', price: 132.5, img: '61_1_Jon_Snow.png' },
      { id: '12', name: 'Yara GreyJoy', series: 'Game of Thrones', number: '66', price: 132.5, img: '66_1_Yara_Greyjoy.png' },
      { id: '13', name: 'Children of the Forest', series: 'Game of Thrones', number: '69', price: 149, img: '69_1_children_of_the_forest.png' },
      { id: '14', name: 'Harry vs Voldemort', series: 'Harry Potter', number: '61', price: 332.5, img: '119_1_Harry_vs_Voldemort.jpg' },
      { id: '15', name: 'Harry Potter', series: 'Harry Potter', number: '112', price: 149, img: '112_1_Harry.jpg' },
      { id: '16', name: 'Ron Weasley', series: 'Harry Potter', number: '34', price: 132.5, img: '34_1_Ron.jpg' },
      { id: '17', name: 'Hermione Granger', series: 'Harry Potter', number: '113', price: 149, img: '113_1_Hermione.jpg' },
      { id: '18', name: 'Minerva McGonagall', series: 'Harry Potter', number: '37', price: 132.5, img: '37_1_Minerva.jpg' },
      { id: '19', name: 'Patronus', series: 'Harry Potter', number: '130', price: 149, img: '130_1_Patronus.jpg' },
      { id: '20', name: 'Bellatrix Lestrange', series: 'Harry Potter', number: '35', price: 132.5, img: '35_1_Bellatrix.jpg' },
      { id: '21', name: 'Merry Brandybuck', series: 'Lord of the Rings', number: '528', price: 141, img: '528_1_Merry.png' },
      { id: '22', name: 'Pippin Took', series: 'Lord of the Rings', number: '530', price: 141, img: '530_1_Pippin.png' },
      { id: '23', name: 'Aragorn', series: 'Lord of the Rings', number: '531', price: 141, img: '531_1_Aragorn.png' },
      { id: '24', name: 'Gimli', series: 'Lord of the Rings', number: '629', price: 149, img: '629_1_Gimli.jpg' },
      { id: '25', name: 'Gandalf', series: 'Lord of the Rings', number: '443', price: 141, img: '443_1_Gandalf.jpg' },
      { id: '26', name: 'Sauron', series: 'Lord of the Rings', number: '122', price: 149, img: '122_1_Sauron.jpg' }
    ],
    cart: [],
    order: [],
    orderNumber:0,
    product: null,
    comp: 'Grid',
    searchVal: '',
    count: 0,
    totalPrice: 0,
    populate: false

  },
  getters: {
    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
          ...product,
          name: product.name + '',
          price: Math.round(product.price + product.price * 0.2)
        }
      })
      return taxedProducts
    },
    count: state => state.count,
    totalPrice: state => state.totalPrice,
    comp: state => state.comp,
    cart: state => state.cart,
    order: state => state.order,
    orderNumber: state => state.orderNumber,
    populate: state => state.populate,
    product: state => state.product,
    // filteredProducts: (state, getters) => {
    filteredProducts: (state) => {
      // return state.products.filter(product => product.name.match(state.searchVal))
      // return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
      return state.products.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },
  mutations: {
    ADD: (state, amount) => {
      state.products.forEach(product => {
        product.price += amount
      })
    },
    ADD_CART: (state, product) => {
      let exists= false
      if(state.cart.length) {
        state.cart.forEach(c => {
            if(c.id === product.id) {
              c.amount ++
              exists= true
              return;
            }
          })
      } 
      if(!exists) {
        state.cart.push({id: product.id, name: product.name, number: product.number, series: product.series,  price: product.price, img: product.img, amount: 1  })
      }
      state.count ++
      state.totalPrice += Math.round(product.price * 1.2)
      state.populate=true
    },
    MINUS_CART: (state, product) => {

      if(state.cart.length) {
        state.cart.forEach(c => {
            if(c.id === product.id) {
              c.amount --        
              if (c.amount==0) {
                state.cart.splice(state.cart.indexOf(product), 1)
                console.log(state.cart)
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
      state.totalPrice -= product.amount*Math.round(product.price * 1.2)
      state.cart.splice(state.cart.indexOf(product), 1)
      console.log(state.cart)
      if(state.count == 0) {
        state.populate=false
      }
    },
    SUB: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount
      })
    },
    CHANGE_COMP: (state, payload) => {
      state.comp = payload
    },
    SET_PRODUCT: (state, id) => {
      let prod = state.products.filter(p => p.id === id)[0]
      state.product = {
        ...prod,
        taxPrice: Math.round(prod.price + prod.price * 0.2)
      }
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    },
    SAVE_ORDER: (state) => {
      if(state.count>0){
      state.order.push({orderNumber: state.orderNumber, date: new Date(), count: state.count, totalPrice: state.totalPrice, Cart: state.cart })
      console.log(state.order)
      state.cart = []
      state.count = 0
      state.orderNumber ++
      state.totalPrice = 0
      state.populate=false
      }
    }

  },
  actions: {
    // subAsync: (context, amount) => {
    //   setTimeout(() => {
    //     context.commit('SUB', amount)
    //   }, 3000)
    // }
    subAsync: ({ commit }, amount) => {
      setTimeout(() => {
        commit('SUB', amount)
      }, 3000)
    },
    addToPrice: ({commit}, amount) => {
      commit('ADD', amount)
    },
    addToCart: ({commit}, product) => {
      commit('ADD_CART', product)
    },
    minusFromCart: ({commit}, product) => {
      commit('MINUS_CART', product)
    },
    removeCartItem: ({commit}, product) => {
      commit('REMOVE_CART_ITEM', product)
    },
    changeComp: ({commit}, component) => {
      commit('CHANGE_COMP', component)
    },
    getProduct: ({commit}, id) => {
      commit('SET_PRODUCT', id)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    },
    saveOrder: ({commit}) => {
      commit('SAVE_ORDER')
    },
  }
})
