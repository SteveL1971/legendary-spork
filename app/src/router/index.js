import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import notFound from '../views/NotFound.vue'

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
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    // meta: { authorize: true }
  },
  {
    path: '/product/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '*',
    name: '404',
    component: notFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const token = localStorage.getItem('token')

  if(authorize) {

    if(!token) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }

  }
  next()
})

export default router
