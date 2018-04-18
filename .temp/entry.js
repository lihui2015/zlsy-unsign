import Vue from 'vue'
import weex from 'weex-vue-render'
/* global Vue */

weex.init(Vue)
/* weex initialized here, please do not move this line */
const router = require('./router')
const App = require('@/index.vue')

// import { sync } from 'vuex-router-sync'

// import * as filters from './filters'
// import mixins from './mixins'

// register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

let stream = weex.requireModule('stream');
var mixins = {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        testGET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                // url: 'http://172.18.22.119:8081/web/' + api
                url: 'http://192.168.31.197:8081//web/' + api
            }, callback)
        },
        GET (api, token, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                headers:{
                    "access-token": token
                },
                url: 'http://zl.senseitgroup.com/app/' + api
            }, callback)
        },
        POST (api, token, data, callback) {
            return stream.fetch({
                method: 'POST',
                type: 'json',
                headers:{
                    "access-token": token,
                    "Content-Type": "application/json"
                },
                body: data,
                url: 'http://zl.senseitgroup.com/app/' + api
            }, callback)
        }

    }
}

let storage = weex.requireModule('storage');

function getToken(){
    return new Promise((resolve, reject) => {
        storage.getItem('token',event => {
            var localToken = event.data;
            if(localToken == 'undefined'){
              reject()
            }else if(localToken != 'undefined'){
                resolve(localToken);
              
            }
          }); 
    })
} 

function getBanner(localToken){
    return new Promise((resolve, reject) => {
        stream.fetch({
          method: 'GET',
          headers:{
            "access-token": localToken
          },
          url: 'http://zl.senseitgroup.com/app/banners/list',
          type: 'json'
        }, (res) => {
          let result = res.data;
          if(result.code != 200){
            reject(result)
          }else if(result.code == 200){
            resolve(result)
          }
        }, () => {})

    })
}



router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var p = new Promise(function (resolve, reject) {
        resolve(123);
    });
    p.then(getToken)
     .then(getBanner)
     .then(function (result) {
        next()
    })
     .catch(function(){
        next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
     });
  } else {
    next() // 确保一定要调用 next()
  }
})

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
