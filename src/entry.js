/* global Vue */

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
                url: 'http://172.18.22.119:8081/web/' + api
                // url: 'http://192.168.16.92:8081/web/' + api
            }, callback)
        },
        GET (api, token, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                headers:{
                    "access-token": token
                },
                url: 'http://www.imbawin.com/app/' + api
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
                url: 'http://www.imbawin.com/app/' + api
            }, callback)
        }

    }
}

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
