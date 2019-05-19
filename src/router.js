import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Books from '@/views/Books'
import Words from '@/views/Words'
import Profile from '@/views/Profile'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'

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
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/words',
      name: 'words',
      component: Words
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./views/Customer.vue')
    }
  ]
})
