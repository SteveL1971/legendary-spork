import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import mongoose from ('mongoose')
// const mongoURI = 'mongodb+srv://Steve:<BytMig123>@cluster0.k8jw4.mongodb.net/Funko?retryWrites=true&w=majority'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
