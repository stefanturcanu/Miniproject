import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/ProductPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/productsingle',
      name: 'productsingle',
      component: () => import('./components/ProductSingle.vue')
    }
  ]
})
