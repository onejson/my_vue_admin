import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import Login from '@/components/Login'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Company from '@/components/company/index'
import Layout from '@/components/Layout'
import Add from '@/components/Add'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/enter',
      name: 'First',
      component: CopClass
    },
    {
      path: '/company/index',
      name: 'CompanyList',
      component: Company
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
