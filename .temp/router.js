import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import index from '@/components/home'
import sort from '@/components/sort'
import list from '@/components/list'
import bookDetail from '@/components/bookDetail'
import activity from '@/components/activity'
import online from '@/components/online'
import themeDetail from '@/components/themeDetail'
import offline from '@/components/offline'
import signUp from '@/components/signUp'
import personal from '@/components/personal'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
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
