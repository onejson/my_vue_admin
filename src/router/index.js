import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Layout from '@/components/Layout'
import Add from '@/components/Add'
// eslint-disable-next-line camelcase
import product_channel_configures_index from '@/components/product_channel_configures/index'
// import Login2 from '@/components/Login2'
import Chat from '@/components/Chat'

Vue.use(Router)

Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/admin',
      name: 'Layout',
      component: Layout,
      // 嵌套路由
      children: [{
        // 这里不设置值，是作为默认页面
        path: '/',
        name: 'product_channel_configures_index',
        component: product_channel_configures_index
      }, {
        path: '/add',
        name: 'Add',
        component: Add
      }
      ]
    }
  ]
})
