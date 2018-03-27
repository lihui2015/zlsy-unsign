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
        GET (api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                url: 'http://192.168.16.92:8081/web/' + api
                // url: 'http://10.242.69.181:8089/yanxuan/' + api
            }, callback)
        }

    }
}

// register global mixins.
Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
