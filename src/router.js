/* global Vue */
import Router from 'vue-router'
import home from '@/assets/views/home'
import sort from '@/assets/views/sort'
import list from '@/assets/views/list'
import bookDetail from '@/assets/views/bookDetail'
import activity from '@/assets/views/activity'
import online from '@/assets/views/online'
import themeDetail from '@/assets/views/themeDetail'
import offline from '@/assets/views/offline'
import signUp from '@/assets/views/signUp'
import personal from '@/assets/views/personal'
import book from '@/assets/views/book'
import bookImage from '@/assets/views/book-image'
import bookScroller from '@/assets/views/book-scroller'
import comment from '@/assets/views/comment'
import login from '@/assets/views/login'
import empty from '@/assets/views/_empty'
import postCreate from '@/assets/views/postCreate'
import defaultPage from '@/assets/views/default'

Vue.use(Router)

module.exports = new Router({ 
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/list/:index/:name',
      name: 'list',
      component: list
    },
    {
      path: '/bookDetail/:index/:name',
      name: 'bookDetail',
      component: bookDetail
    },
    {
      path: '/book/:index',
      name: 'book',
      component: book
    },
    {
      path: '/book-image/:index',
      name: 'bookImage',
      component: bookImage
    },
    {
      path: '/book-scroller/:index/:isCollect',
      name: 'bookScroller',
      component: bookScroller
    },
    {
      path: '/comment/:index',
      name: 'comment',
      component: comment
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/online/:index/:name',
      name: 'online',
      component: online
    },
    {
      path: '/themeDetail/:index',
      name: 'themeDetail',
      component: themeDetail
    },
    {
      path: '/postCreate/:index',
      name: 'postCreate',
      component: postCreate
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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/_empty',
      name: 'empty',
      component: empty
    }
  ]
})
