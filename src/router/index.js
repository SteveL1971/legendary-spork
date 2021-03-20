import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
