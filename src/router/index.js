import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component:() => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import( /* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import( /* webpackChunkName: "orders" */ '../views/ClientsOrders.vue')
  },
  {
    path: '/new-product',
    name: 'NewProduct',
    component: () => import( /* webpackChunkName: "categories" */ '../views/AddProduct.vue')
  },
  {
    path: "/account",
    name: "Account",
    component: () => import(/* WebpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: "/new-supplier",
    name: "NewSupplier",
    component: () => import(/* WebpackChunkName: "new supplier" */ '../views/NewSupplier.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
