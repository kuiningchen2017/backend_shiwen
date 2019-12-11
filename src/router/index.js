import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login'
import Home from '@/components/common/Home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
