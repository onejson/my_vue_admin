import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CopClass from '@/components/EnterPage'
import Login from '@/components/Login'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Company from '@/components/company/index'
import Layout from '@/components/Layout'
import Add from '@/components/Add'

Vue.use(Router)

Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/enter',
      name: 'First',
      component: CopClass
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    }
  ]
})
