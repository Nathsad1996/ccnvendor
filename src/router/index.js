import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index"

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (store.getters.login === false && to.path != "/login") {
    next("/login")
  }
  else {
    next();
  }
})



export default router
