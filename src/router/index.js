import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login'
import Home from '@/components/common/Home/home'
import Audit from '@/components/page/audit-page'

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
      component: Home,
      children: [
        {
          path: '/audit',
          name: 'audit',
          component: Audit
        }
      ]
    }
  ]
})
