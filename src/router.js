/* global Vue */
import Router from 'vue-router'
import index from '@/assets/views/home'
import sort from '@/assets/views/sort'
import list from '@/assets/views/list'
import bookDetail from '@/assets/views/bookDetail'
import activity from '@/assets/views/activity'
import online from '@/assets/views/online'
import themeDetail from '@/assets/views/themeDetail'
import offline from '@/assets/views/offline'
import signUp from '@/assets/views/signUp'
import personal from '@/assets/views/personal'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'index',
      component: index
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/bookDetail',
      name: 'bookDetail',
      component: bookDetail
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/online',
      name: 'online',
      component: online
    },
    {
      path: '/themeDetail',
      name: 'themeDetail',
      component: themeDetail
    },
    {
      path: '/offline',
      name: 'offline',
      component: offline
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
