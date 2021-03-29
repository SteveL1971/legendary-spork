import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Orders from '../views/Orders.vue'
import Cart from '../views/Cart.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import ProductDetails from '../views/ProductDetails.vue'
// import Customers from '../views/Customers.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
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
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { authorize: true }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
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
