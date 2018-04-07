// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by zwwill on 2017/8/27.
 */

var utilFunc = {
    initIconFont: function initIconFont() {
        var domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf')"
        });
    },
    setBundleUrl: function setBundleUrl(url, jsFile) {
        var bundleUrl = url;
        var host = '';
        var path = '';
        var nativeBase = void 0;
        var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
        if (isAndroidAssets) {
            nativeBase = 'file://assets/dist';
        } else if (isiOSAssets) {
            // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
            // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
        } else {
            var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
            var matchFirstPath = /\/\/[^\/]+\/([^\s]+)\//.exec(bundleUrl);
            if (matches && matches.length >= 2) {
                host = matches[1];
            }
            if (matchFirstPath && matchFirstPath.length >= 2) {
                path = matchFirstPath[1];
            }
            nativeBase = 'http://' + host + '/';
        }
        var h5Base = './index.html?page=';
        // in Native
        var base = nativeBase;
        if (typeof navigator !== 'undefined' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko')) {
            // check if in weexpack project
            if (path === 'web' || path === 'dist') {
                base = h5Base + '/dist/';
            } else {
                base = h5Base + '';
            }
        } else {
            base = nativeBase + (!!path ? path + '/' : '');
        }

        var newUrl = base + jsFile;
        return newUrl;
    },
    getUrlSearch: function getUrlSearch(url, name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = url.slice(url.indexOf('?') + 1).match(reg);
        if (r != null) {
            try {
                return decodeURIComponent(r[2]);
            } catch (_e) {
                return null;
            }
        }
        return null;
    }
};

exports.default = utilFunc;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(52)
)

/* script */
__vue_exports__ = __webpack_require__(53)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/tabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-19bb55f5"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(59)
)

/* script */
__vue_exports__ = __webpack_require__(60)

/* template */
var __vue_template__ = __webpack_require__(61)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Header2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-62da90fe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(27)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/refresh.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68b451b4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(24)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c63c4e78"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(30)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/YXSlider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4757e5d7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(31)
)

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/bookSearch.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7be712b0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(40)
)

/* script */
__vue_exports__ = __webpack_require__(41)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Block1.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-302527ca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(43)
)

/* script */
__vue_exports__ = __webpack_require__(44)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Block2.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3008f8c8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(119)
)

/* script */
__vue_exports__ = __webpack_require__(120)

/* template */
var __vue_template__ = __webpack_require__(121)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-68aebd26"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

/* weex initialized here, please do not move this line */
var router = __webpack_require__(12);
var App = __webpack_require__(126);

// import { sync } from 'vuex-router-sync'

// import * as filters from './filters'
// import mixins from './mixins'

// register global utility filters.
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

var stream = weex.requireModule('stream');
var mixins = {
    methods: {
        jump: function jump(to) {
            if (this.$router) {
                this.$router.push(to);
            }
        },
        isIpx: function isIpx() {
            return weex && (weex.config.env.deviceModel === 'iPhone10,3' || weex.config.env.deviceModel === 'iPhone10,6');
        },
        testGET: function testGET(api, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                // url: 'http://172.18.22.119:8081/web/' + api
                url: 'http://192.168.16.92:8081/web/' + api
            }, callback);
        },
        GET: function GET(api, token, callback) {
            return stream.fetch({
                method: 'GET',
                type: 'json',
                headers: {
                    "access-token": token
                },
                url: 'http://www.imbawin.com/app/' + api
            }, callback);
        },
        POST: function POST(api, token, data, callback) {
            return stream.fetch({
                method: 'POST',
                type: 'json',
                headers: {
                    "access-token": token,
                    "Content-Type": "application/json"
                },
                body: data,
                url: 'http://www.imbawin.com/app/' + api
            }, callback);
        }
    }

    // register global mixins.
};Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(13);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _home = __webpack_require__(14);

var _home2 = _interopRequireDefault(_home);

var _sort = __webpack_require__(56);

var _sort2 = _interopRequireDefault(_sort);

var _list = __webpack_require__(63);

var _list2 = _interopRequireDefault(_list);

var _bookDetail = __webpack_require__(67);

var _bookDetail2 = _interopRequireDefault(_bookDetail);

var _activity = __webpack_require__(71);

var _activity2 = _interopRequireDefault(_activity);

var _online = __webpack_require__(79);

var _online2 = _interopRequireDefault(_online);

var _themeDetail = __webpack_require__(95);

var _themeDetail2 = _interopRequireDefault(_themeDetail);

var _offline = __webpack_require__(99);

var _offline2 = _interopRequireDefault(_offline);

var _signUp = __webpack_require__(103);

var _signUp2 = _interopRequireDefault(_signUp);

var _personal = __webpack_require__(107);

var _personal2 = _interopRequireDefault(_personal);

var _book = __webpack_require__(111);

var _book2 = _interopRequireDefault(_book);

var _comment = __webpack_require__(115);

var _comment2 = _interopRequireDefault(_comment);

var _login = __webpack_require__(10);

var _login2 = _interopRequireDefault(_login);

var _default = __webpack_require__(122);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default); /* global Vue */


module.exports = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'activity',
    component: _activity2.default
  }, {
    path: '/home',
    name: 'home',
    component: _home2.default
  }, {
    path: '/sort',
    name: 'sort',
    component: _sort2.default
  }, {
    path: '/list/:index',
    name: 'list',
    component: _list2.default
  }, {
    path: '/bookDetail/:index',
    name: 'bookDetail',
    component: _bookDetail2.default
  }, {
    path: '/book/:index',
    name: 'book',
    component: _book2.default
  }, {
    path: '/comment/:index',
    name: 'comment',
    component: _comment2.default
  }, {
    path: '/activity',
    name: 'activity',
    component: _activity2.default
  }, {
    path: '/online/:index/:name',
    name: 'online',
    component: _online2.default
  }, {
    path: '/themeDetail/:index',
    name: 'themeDetail',
    component: _themeDetail2.default
  }, {
    path: '/offline',
    name: 'offline',
    component: _offline2.default
  }, {
    path: '/signUp',
    name: 'signUp',
    component: _signUp2.default
  }, {
    path: '/personal',
    name: 'personal',
    component: _personal2.default
  }, {
    path: '/login',
    name: 'login',
    component: _login2.default
  }]
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(55)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/home.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-447a1fb2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "main-list": {
    "width": "750",
    "height": "1245",
    "marginBottom": "120",
    "backgroundColor": "#f8f8f8"
  },
  "ml-ipx": {
    "marginTop": "208",
    "marginBottom": "170"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(6);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

var _bookSearch = __webpack_require__(7);

var _bookSearch2 = _interopRequireDefault(_bookSearch);

var _Block = __webpack_require__(8);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(9);

var _Block4 = _interopRequireDefault(_Block3);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
exports.default = {
    name: 'home',
    components: {
        'tab-bar': _tabBar2.default,
        'home-header': _header2.default,
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default,
        'book-search': _bookSearch2.default,
        'block-1': _Block2.default,
        'block-2': _Block4.default
    },
    data: function data() {
        return {
            YXBanners: [],
            borrowRecords: [],
            bookList: [],
            showLoading: 'hide',
            token: ''
        };
    },
    created: function created() {
        var _this = this;

        var _self = this;
        storage.getItem('token', function (event) {
            _self.token = event.data;

            //banner ajax
            _this.GET('banners/list', _self.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.YXBanners = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });

            //借阅记录
            // this.testGET('api/home/borrowRecords.json', res => {
            //     let result = res.data.result;
            //     this.borrowRecords = result['borrowRecords'];
            // });

            //图书精选
            _this.GET('books/chosen/6', _self.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.bookList = result;
                    _this.borrowRecords = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        });
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "position": "fixed",
    "width": "750",
    "left": 0,
    "top": 0,
    "zIndex": 1,
    "backgroundColor": "#f8f8f8",
    "paddingTop": "3",
    "paddingBottom": "3"
  },
  "header-left": {
    "position": "absolute",
    "top": "16",
    "left": "18",
    "fontSize": "14",
    "lineHeight": "21",
    "color": "#cccccc"
  },
  "left-arrow": {
    "position": "absolute",
    "width": "60",
    "height": "60",
    "top": "-5",
    "left": "-5",
    "content:before": "\"\"",
    "position:before": "absolute",
    "width:before": "24",
    "height:before": "24",
    "border:before": "1px solid #fff",
    "WebkitTrasform:before": "rotate(315deg)",
    "transform:before": "rotate(315deg)",
    "top:before": "20",
    "left:before": "20"
  },
  "header-title": {
    "height": "80",
    "marginTop": 0,
    "marginRight": "88",
    "marginBottom": 0,
    "marginLeft": "88",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "fontSize": "36",
    "letterSpacing": "2",
    "lineHeight": "80",
    "color": "#000000",
    "textAlign": "center"
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcMinibar = __webpack_require__(19);

var _wxcMinibar2 = _interopRequireDefault(_wxcMinibar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['title', 'leftButton', 'rightButton'],
  data: function data() {
    return {
      height: '86px'
    };
  },

  components: { WxcMinibar: _wxcMinibar2.default },
  methods: {
    minibarLeftButtonClick: function minibarLeftButtonClick() {},
    minibarRightButtonClick: function minibarRightButtonClick() {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
    }
  }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(21)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(23)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/node_modules/weex-ui/packages/wxc-minibar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6b951ab7"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "backgroundColor": "#009ff0"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Navigator = weex.requireModule('navigator');
exports.default = {
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    leftButtonClicked: function leftButtonClicked() {
      var self = this;
      if (self.useDefaultReturn) {
        Navigator.pop({}, function (e) {});
      }
      self.$emit('wxcMinibarLeftButtonClicked', {});
    },
    rightButtonClicked: function rightButtonClicked() {
      var self = this;
      if (self.rightText || self.rightButton) {
        self.$emit('wxcMinibarRightButtonClicked', {});
      }
    }
  }
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: {
      backgroundColor: _vm.backgroundColor
    }
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height
    }
  }, [_c('div', {
    staticClass: ["demo"]
  }, [_c('wxc-minibar', {
    attrs: {
      "title": _vm.title,
      "backgroundColor": "#009ff0",
      "textColor": "#FFFFFF",
      "rightText": _vm.rightButton,
      "leftButton": ""
    },
    on: {
      "wxcMinibarLeftButtonClicked": _vm.minibarLeftButtonClick,
      "wxcMinibarRightButtonClicked": _vm.minibarRightButtonClick
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "u-refresh": {
    "height": "170",
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "center"
  },
  "loading-bg": {
    "position": "absolute",
    "left": "250",
    "marginTop": "40",
    "width": "250",
    "height": "120"
  },
  "l-txt-box": {
    "height": "106",
    "width": "200",
    "overflow": "hidden"
  },
  "l-txt": {
    "height": "30",
    "width": "30",
    "fontSize": "25",
    "position": "absolute",
    "top": "105",
    "left": "87",
    "color": "#666666"
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');
exports.default = {
    props: [],
    data: function data() {
        return {
            refreshing: false,
            loadingAR: [{ ref: 'lTxt1', p: [-77, -75], delay: 0 }, { ref: 'lTxt2', p: [-47, -81], delay: 50 }, { ref: 'lTxt3', p: [-15, -88], delay: 100 }, { ref: 'lTxt4', p: [12, -90], delay: 150 }, { ref: 'lTxt5', p: [-5, -49], delay: 200 }, { ref: 'lTxt6', p: [25, -55], delay: 250 }, { ref: 'lTxt7', p: [55, -61], delay: 300 }, { ref: 'lTxt8', p: [85, -61], delay: 350 }]
        };
    },

    methods: {
        loadingAni: function loadingAni() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], this.loadingAR[i].p[0], this.loadingAR[i].p[1], 3, 1, 200, this.loadingAR[i].delay);
            }
        },
        loadingAniDown: function loadingAniDown() {
            for (var i = 0; i < this.loadingAR.length; i++) {
                this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
            }
            this.$emit('loadingDown', {
                status: 'loadingDown'
            });
        },
        shake: function shake(_ref, _x, _y, _k, _d, _duration, _delay) {
            animation.transition(_ref, {
                styles: {
                    transform: 'translate(' + (_x - 0) + 'px,' + (_y - _k * _d) + 'px)'
                },
                duration: _duration | 500, //ms
                timingFunction: 'ease-out',
                delay: _delay | 0 //ms
            }, function () {
                this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
            }.bind(this));
        },
        onrefresh: function onrefresh(event) {
            var _this = this;

            this.loadingAni();
            this.refreshing = true;
            setTimeout(function () {
                _this.refreshing = false;
                _this.loadingAniDown();
            }, 1300);
        },
        onpullingdown: function onpullingdown(event) {}
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('refresh', {
    staticClass: ["u-refresh"],
    attrs: {
      "display": _vm.refreshing ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh,
      "pullingdown": _vm.onpullingdown
    }
  }, [_c('image', {
    staticClass: ["loading-bg"],
    attrs: {
      "resize": "contain",
      "src": "http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"
    }
  }), _c('div', {
    staticClass: ["l-txt-box"]
  }, [_c('text', {
    ref: "lTxt1",
    staticClass: ["l-txt", "l-txt-1"]
  }, [_vm._v("好")]), _c('text', {
    ref: "lTxt2",
    staticClass: ["l-txt", "l-txt-2"]
  }, [_vm._v("的")]), _c('text', {
    ref: "lTxt3",
    staticClass: ["l-txt", "l-txt-3"]
  }, [_vm._v("生")]), _c('text', {
    ref: "lTxt4",
    staticClass: ["l-txt", "l-txt-4"]
  }, [_vm._v("活")]), _c('text', {
    ref: "lTxt5",
    staticClass: ["l-txt", "l-txt-5"]
  }, [_vm._v("没")]), _c('text', {
    ref: "lTxt6",
    staticClass: ["l-txt", "l-txt-6"]
  }, [_vm._v("那")]), _c('text', {
    ref: "lTxt7",
    staticClass: ["l-txt", "l-txt-7"]
  }, [_vm._v("么")]), _c('text', {
    ref: "lTxt8",
    staticClass: ["l-txt", "l-txt-8"]
  }, [_vm._v("贵")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "image": {
    "width": "750",
    "height": "430"
  },
  "slider": {
    "width": "750",
    "height": "430"
  },
  "frame": {
    "width": "750",
    "height": "430",
    "position": "relative"
  },
  "indicator": {
    "width": "750",
    "height": "40",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#b4282d",
    "itemSize": "12",
    "position": "absolute",
    "bottom": "10",
    "right": "0"
  },
  "image-title": {
    "position": "absolute",
    "width": "750",
    "paddingRight": "20",
    "paddingLeft": "20",
    "textAlign": "center",
    "top": "200",
    "left": 0,
    "color": "#FF4081",
    "fontSize": "38",
    "fontWeight": "bold"
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["imageList"],
    data: function data() {
        return {};
    },

    methods: {
        onchange: function onchange(event) {}
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "5000",
      "infinite": "false"
    },
    on: {
      "change": _vm.onchange
    }
  }, [_vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    }), _c('text', {
      staticClass: ["image-title"]
    }, [_vm._v(_vm._s(img.title))])])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {
  "cell-tag": {
    "textAlign": "left",
    "backgroundColor": "#009FF0",
    "height": "70",
    "justifyContent": "center",
    "fontWeight": "600",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "bookSearch": {
    "marginTop": "20"
  },
  "tag-text": {
    "fontSize": "36",
    "color": "#ffffff",
    "fontWeight": "600"
  },
  "searchBox": {
    "paddingTop": "20",
    "paddingBottom": "20"
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcSearchbar = __webpack_require__(33);

var _wxcSearchbar2 = _interopRequireDefault(_wxcSearchbar);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    components: { WxcSearchbar: _wxcSearchbar2.default },
    data: function data() {
        return {
            value: ''
        };
    },
    methods: {
        wxcSearchbarInputOnFocus: function wxcSearchbarInputOnFocus() {},
        wxcSearchbarInputOnBlur: function wxcSearchbarInputOnBlur() {},
        wxcSearchbarInputReturned: function wxcSearchbarInputReturned() {},
        wxcSearchbarCloseClicked: function wxcSearchbarCloseClicked() {},
        wxcSearchbarInputOnInput: function wxcSearchbarInputOnInput(e) {
            this.value = e.value;
        },
        wxcSearchbarCancelClicked: function wxcSearchbarCancelClicked() {},
        wxcSearchbarInputDisabledClicked: function wxcSearchbarInputDisabledClicked() {},
        wxcSearchbarDepChooseClicked: function wxcSearchbarDepChooseClicked() {}
    }
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/node_modules/weex-ui/packages/wxc-searchbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7570b506"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = __webpack_require__(37);

exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    mod: {
      type: String,
      default: 'default'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'gray'
    },
    barStyle: {
      type: Object,
      default: function _default() {}
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelLabel: {
      type: String,
      default: '取消 '
    },
    depName: {
      type: String,
      default: '杭州'
    }
  },
  computed: {
    needShowCancel: function needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    }
  },
  data: function data() {
    return {
      inputIcon: _type.INPUT_ICON,
      closeIcon: _type.CLOSE_ICON,
      arrowIcon: _type.ARROW_ICON,
      showCancel: false,
      showClose: false,
      value: ''
    };
  },
  created: function created() {
    this.defaultValue && (this.value = this.defaultValue);
    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },

  methods: {
    onBlur: function onBlur() {
      var self = this;
      setTimeout(function () {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('wxcSearchbarInputOnBlur', { value: self.value });
      }, 10);
    },
    autoBlur: function autoBlur() {
      this.$refs['search-input'].blur();
    },
    onFocus: function onFocus() {
      if (this.isDisabled) {
        return;
      }
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnFocus', { value: this.value });
    },
    closeClicked: function closeClicked() {
      this.value = '';
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCloseClicked', { value: this.value });
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onInput: function onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnInput', { value: this.value });
    },
    onSubmit: function onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputReturned', { value: this.value });
    },
    cancelClicked: function cancelClicked() {
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCancelClicked', { value: this.value });
    },
    detectShowClose: function detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },
    depClicked: function depClicked() {
      this.$emit('wxcSearchbarDepChooseClicked', {});
    },
    inputDisabledClicked: function inputDisabledClicked() {
      this.$emit('wxcSearchbarInputDisabledClicked', {});
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * CopyRight (C) 2017-2022 Alibaba Group Holding Limited.
 * Created by Tw93 on 2016/10/31.
 */

const INPUT_ICON = "https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png";
/* harmony export (immutable) */ __webpack_exports__["INPUT_ICON"] = INPUT_ICON;

const CLOSE_ICON = "https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
/* harmony export (immutable) */ __webpack_exports__["CLOSE_ICON"] = CLOSE_ICON;

const ARROW_ICON = "https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png";
/* harmony export (immutable) */ __webpack_exports__["ARROW_ICON"] = ARROW_ICON;




/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["bookSearchBox"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["searchBox"]
  }, [_c('wxc-searchbar', {
    ref: "wxc-searchbar",
    on: {
      "wxcSearchbarCancelClicked": _vm.wxcSearchbarCancelClicked,
      "wxcSearchbarInputReturned": _vm.wxcSearchbarInputReturned,
      "wxcSearchbarInputOnInput": _vm.wxcSearchbarInputOnInput,
      "wxcSearchbarCloseClicked": _vm.wxcSearchbarCloseClicked,
      "wxcSearchbarInputOnFocus": _vm.wxcSearchbarInputOnFocus,
      "wxcSearchbarInputOnBlur": _vm.wxcSearchbarInputOnBlur
    }
  })], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-tag", "bookSearch"]
  }, [_c('text', {
    staticClass: ["tag-text"]
  }, [_vm._v("馆藏查询")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "fontSize": "60",
    "textAlign": "center"
  },
  "cell-tag": {
    "backgroundColor": "#009FF0",
    "height": "70",
    "justifyContent": "center",
    "fontWeight": "600",
    "textAlign": "left",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "recordsTag": {
    "marginTop": "20"
  },
  "tag-text": {
    "fontSize": "36",
    "color": "#ffffff",
    "fontWeight": "600"
  },
  "borrow-records": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "paddingTop": "40",
    "justifyContent": "space-between",
    "alignItems": "flex-end",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "records-text": {
    "marginTop": "10",
    "fontSize": "30"
  },
  "records-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "width": "565"
  },
  "i-name": {
    "width": "120",
    "position": "relative",
    "color": "#333333",
    "fontSize": "32",
    "marginTop": "10",
    "textAlign": "center",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "i-image": {
    "width": "120",
    "height": "165"
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["items"],
    data: function data() {
        return {};
    },

    methods: {}
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["borrow-records"]
  }, [_c('div', {
    staticClass: ["records-box"]
  }, _vm._l((_vm.items), function(i) {
    return _c('div', {
      staticClass: ["box-item"]
    }, [_c('image', {
      staticClass: ["i-image"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      }
    }), _c('text', {
      staticClass: ["i-name"]
    }, [_vm._v(_vm._s(i.book_name))])])
  })), _vm._m(1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["cell-tag", "recordsTag"]
  }, [_c('text', {
    staticClass: ["tag-text"]
  }, [_vm._v("借阅记录")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["recordsMore"]
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["records-text", "recordsMore-text"]
  }, [_vm._v("查看更多")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "cell-tag": {
    "textAlign": "left",
    "backgroundColor": "#009FF0",
    "height": "70",
    "fontWeight": "600",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "tlt": {
    "color": "#ffffff",
    "fontSize": "36",
    "fontWeight": "600"
  },
  "colorWhite": {
    "color": "#ffffff"
  },
  "wrapper": {
    "marginTop": "30",
    "paddingBottom": "20"
  },
  "tlt-box": {
    "marginTop": "10",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "box": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "20",
    "width": "750"
  },
  "i-book": {
    "width": "223",
    "paddingTop": "20",
    "paddingBottom": "20",
    "marginRight": "10",
    "marginLeft": "10"
  },
  "bk-img": {
    "height": "291",
    "width": "223",
    "backgroundColor": "#f4f4f4"
  },
  "bk-tlt": {
    "fontSize": "32",
    "color": "#333333",
    "width": "223",
    "marginTop": "16",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "bk-count": {
    "display": "block",
    "fontSize": "30",
    "width": "215",
    "marginTop": "8",
    "color": "#7f7f7f",
    "overflow": "hidden",
    "lines": 1,
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcIcon = __webpack_require__(45);

var _wxcIcon2 = _interopRequireDefault(_wxcIcon);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ["books"],
    components: { WxcIcon: _wxcIcon2.default },
    data: function data() {
        return {};
    },

    methods: {}
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_vue___default.a; });



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/node_modules/weex-ui/packages/wxc-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-72d593d8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "color": "#666666"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(49);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom');

exports.default = {
  props: {
    name: {
      default: 'success',
      type: String
    },
    size: {
      default: 'small',
      type: String
    },
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      Icon: _type2.default
    };
  },
  beforeCreate: function beforeCreate() {
    dom.addRule('fontFace', {
      'fontFamily': "weexUiIconFont",
      'src': "url('//at.alicdn.com/t/font_520368_r89ekv69euahsemi.ttf')"
    });
  },

  computed: {
    mergeStyle: function mergeStyle() {
      var iconStyle = this.iconStyle,
          size = this.size;

      var fontSize = '48px';
      switch (size) {
        case 'xs':
          fontSize = '24px';
          break;
        case 'small':
          fontSize = '48px';
          break;
        case 'medium':
          fontSize = '72px';
          break;
        case 'big':
          fontSize = '128px';
          break;
        default:
          fontSize = '48px';
      }
      return _extends({
        fontFamily: 'weexUiIconFont',
        fontSize: fontSize
      }, iconStyle);
    }
  },
  methods: {
    itemClicked: function itemClicked(name) {
      this.$emit('wxcIconClicked', {
        name: name
      });
    }
  }
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
  less: '\ue6a5',
  'more_unfold': '\ue6a6',
  back: '\ue697',
  more: '\ue6a7',
  add: '\ue6b9',
  subtract: '\ue6fe',
  close: '\ue69a',
  cry: '\ue69c',
  delete: '\ue69d',
  help: '\ue6a3',
  refresh: '\ue6aa',
  search: '\ue6ac',
  success: '\ue6b1',
  warning: '\ue6b6',
  wrong: '\ue6b7',
  clock: '\ue6bb',
  scanning: '\ue6ec',
  filter: '\ue6f1',
  map: '\ue715',
  play: '\ue719'
});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.mergeStyle,
    on: {
      "click": function($event) {
        _vm.itemClicked(_vm.name)
      }
    }
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["tlt-box", "cell-tag"]
  }, [_c('text', {
    staticClass: ["tlt"],
    on: {
      "click": function($event) {
        _vm.jump('/sort')
      }
    }
  }, [_vm._v("图书精选")]), _c('wxc-icon', {
    staticClass: ["colorWhite"],
    attrs: {
      "name": "more"
    },
    on: {
      "click": function($event) {
        _vm.jump('/sort')
      }
    }
  })], 1), _c('div', {
    staticClass: ["box"]
  }, _vm._l((_vm.books), function(i) {
    return _c('div', {
      staticClass: ["i-book"]
    }, [_c('image', {
      staticClass: ["bk-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id)
        }
      }
    }), _c('text', {
      staticClass: ["bk-tlt"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["bk-count"]
    }, [_vm._v(_vm._s(i.read_count) + "人在阅读")])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "right": 0,
    "height": "120",
    "width": "750",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#f0f0f0"
  },
  "w-ipx": {
    "height": "170"
  },
  "bar-item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "fontSize": "32",
    "paddingTop": "6"
  },
  "bar-ic": {
    "color": "#666666",
    "textAlign": "center",
    "paddingTop": "14",
    "fontSize": "50"
  },
  "bar-active": {
    "color": "#009FF0"
  },
  "i-notice": {
    "position": "absolute",
    "top": "10",
    "right": "55",
    "height": "30",
    "width": "30",
    "borderRadius": 100,
    "fontSize": "26",
    "lineHeight": "30",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#ff0000"
  },
  "notice-dot": {
    "position": "absolute",
    "top": "15",
    "right": "73",
    "height": "15",
    "width": "15",
    "borderRadius": 100,
    "backgroundColor": "#ff0000"
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var modal = weex.requireModule('modal');
exports.default = {
    props: ['router'],
    computed: {},
    data: function data() {
        return {
            pIndexKey: this.router
        };
    },
    mounted: function mounted() {},

    methods: {
        isActive: function isActive(_c) {
            return this.pIndexKey === _c ? 'bar-active' : '';
        },
        tabTo: function tabTo(_key) {
            //if(this.pIndexKey === _key) return;
            this.pIndexKey = _key;
            this.$router.push('/' + _key);
            // this.$emit('tabTo',{
            //     status : 'tabTo',
            //     data : {
            //         key : _key
            //     }
            // })
        }
    }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('home')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('activity')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.pIndexKey == 'activity' ? 'bar-active' : '']
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.pIndexKey == 'activity' ? 'bar-active' : '']
  }, [_vm._v("活动")]), _c('text', {
    staticClass: ["notice-dot"]
  })]), _c('div', {
    staticClass: ["bar-item"],
    on: {
      "click": function($event) {
        _vm.tabTo('personal')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-ic", "iconfont"],
    class: [this.isActive('personal')]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('personal')]
  }, [_vm._v("个人")]), _c('text', {
    staticClass: ["i-notice"]
  }, [_vm._v("2")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('home-header', {
    attrs: {
      "title": "阅读活动"
    }
  }), _c('scroller', {
    class: ['main-list']
  }, [_c('refresher'), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.YXBanners
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('book-search')], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block-1', {
    attrs: {
      "items": _vm.borrowRecords
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block-2', {
    attrs: {
      "books": _vm.bookList
    }
  })], 1)], 1), _c('tab-bar', {
    attrs: {
      "router": "home"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(57)
)

/* script */
__vue_exports__ = __webpack_require__(58)

/* template */
var __vue_template__ = __webpack_require__(62)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/sort.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-76faae1e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "class-list": {
    "width": "162",
    "height": "1060",
    "marginTop": "86",
    "marginBottom": "90",
    "paddingTop": "20",
    "borderRightWidth": "1",
    "borderRightColor": "#d9d9d9",
    "backgroundColor": "#ffffff"
  },
  "class-txt": {
    "fontSize": "32",
    "marginTop": "22",
    "marginBottom": "26",
    "marginLeft": "10",
    "marginRight": "10",
    "textAlign": "center",
    "color": "#333333"
  },
  "active": {
    "color": "#A2313E",
    "borderLeftWidth": "2",
    "borderLeftColor": "#A2313E"
  },
  "main-list": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "nowrap",
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#ffffff",
    "width": "588",
    "height": "1060"
  },
  "ad-img": {
    "width": "532",
    "height": "194",
    "borderRadius": "6",
    "marginTop": "28",
    "marginBottom": "28",
    "marginLeft": "28",
    "marginRight": "28"
  },
  "sub-tlt": {
    "textAlign": "center",
    "fontSize": "34",
    "color": "#333333",
    "marginTop": "10",
    "marginBottom": "30"
  },
  "sub-box": {
    "paddingLeft": "26",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "sub-i": {
    "width": "178",
    "height": "200",
    "alignItems": "center"
  },
  "i-img": {
    "width": "108",
    "marginLeft": "14",
    "marginRight": "14",
    "height": "108",
    "borderRadius": "108"
  },
  "i-name": {
    "fontSize": "32",
    "marginTop": "10",
    "textAlign": "center"
  }
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            token: '',
            subID: 0,
            classes: [],
            subclasses: [],
            subTitle: '',
            leftButton: {
                name: '<'
            }
        };
    },
    created: function created() {
        var _this = this;

        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.GET('books/categories/list/0', _this.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.classes = result;
                    _this.subTitle = _this.classes[0].name;
                    _this.subID = _this.classes[0].id;
                    _this.getSubClass();
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        });
    },

    methods: {
        isActive: function isActive(_str) {
            return _str == this.subTitle ? 'active' : '';
        },
        jumpWeb: function jumpWeb(_url) {
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        },
        tabClass: function tabClass(str, index) {
            this.subTitle = str;
            this.subID = index;
            this.getSubClass();
        },
        getSubClass: function getSubClass() {
            var _this2 = this;

            this.GET('books/categories/list/' + this.subID, this.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this2.subclasses = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": "86",
    "paddingTop": "0",
    "backgroundColor": "#f8f8f8",
    "opacity": 0.99,
    "zIndex": 101,
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "borderBottomWidth": "1",
    "borderBottomColor": "#d9d9d9"
  },
  "w-ipx": {
    "height": "154",
    "paddingTop": "84"
  },
  "tlt": {
    "flex": 1,
    "fontSize": "36",
    "paddingTop": "0",
    "color": "#333333",
    "textAlign": "center",
    "lineHeight": "80",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "left": {
    "height": "80",
    "width": "120",
    "paddingTop": 0,
    "justifyContent": "center"
  },
  "right": {
    "height": "80",
    "width": "120",
    "paddingTop": "10"
  },
  "leftTxt": {
    "fontSize": "34",
    "textAlign": "center"
  },
  "rightTxt": {
    "fontSize": "30",
    "textAlign": "center"
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    props: ['title', 'leftBtn', 'rightBtn'],
    data: function data() {
        return {};
    },

    methods: {
        goBack: function goBack() {
            this.$router.go(-1);
        }
    }
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper']
  }, [_c('div', {
    staticClass: ["left"],
    on: {
      "click": _vm.goBack
    }
  }, [(_vm.leftBtn) ? _c('text', {
    staticClass: ["leftTxt"]
  }, [_vm._v(_vm._s(_vm.leftBtn.name))]) : _vm._e()]), _c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: ["right"]
  }, [(_vm.rightBtn) ? _c('text', {
    staticClass: ["rightTxt"],
    on: {
      "click": _vm.rightBtn.fun
    }
  }, [_vm._v(_vm._s(_vm.rightBtn.name))]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "图书分类",
      "leftBtn": _vm.leftButton
    }
  }), _c('div', {
    staticClass: ["class-list"]
  }, [_c('scroller', _vm._l((_vm.classes), function(i, item) {
    return _c('text', {
      staticClass: ["class-txt"],
      class: [_vm.isActive(i.name)],
      on: {
        "click": function($event) {
          _vm.tabClass(i.name, i.id)
        }
      }
    }, [_vm._v(_vm._s(i.name))])
  }))]), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px"
    }
  }, [_c('refresher'), _c('image', {
    staticClass: ["ad-img"],
    attrs: {
      "resize": "cover",
      "src": "http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"
    }
  }), _c('text', {
    staticClass: ["sub-tlt"]
  }, [_vm._v(_vm._s(_vm.subTitle) + "分类")]), _c('div', {
    staticClass: ["sub-box"]
  }, _vm._l((_vm.subclasses), function(i) {
    return _c('div', {
      staticClass: ["sub-i"]
    }, [_c('image', {
      staticClass: ["i-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_image_url
      },
      on: {
        "click": function($event) {
          _vm.jump('/list/' + i.id)
        }
      }
    }), _c('text', {
      staticClass: ["i-name"]
    }, [_vm._v(_vm._s(i.name))])])
  }))], 1), _c('tab-bar', {
    attrs: {
      "router": "sort"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(64)
)

/* script */
__vue_exports__ = __webpack_require__(65)

/* template */
var __vue_template__ = __webpack_require__(66)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/list.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9cac381e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "nowrap",
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "1070"
  },
  "book-list": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "overflow": "hidden"
  },
  "sub-i": {
    "borderTopWidth": "1",
    "borderTopColor": "#666666",
    "paddingTop": "30",
    "paddingBottom": "30",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "marginTop": "-1"
  },
  "text-box": {
    "width": "461",
    "textAlign": "left"
  },
  "i-img": {
    "width": "199",
    "height": "293",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "i-name": {
    "fontSize": "34",
    "color": "#101010",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-author": {
    "fontSize": "32",
    "color": "#787878",
    "textAlign": "left",
    "marginTop": "10"
  },
  "i-dec": {
    "fontSize": "32",
    "color": "#787878",
    "marginTop": "10"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            booklist: [],
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false,
            leftButton: {
                name: "<"
            }
        };
    },
    created: function created() {
        var _this = this;

        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.listID = _this.$route.params.index;
            _this.getList();
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            this.GET('books/categories/child/' + this.listID + '?page=' + this.current_page, this.token, function (res) {
                _this2.loadinging = false;
                if (res.data.code == 200) {
                    var result = res.data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.booklist.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading(event) {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多书籍', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "文学",
      "leftBtn": _vm.leftButton
    }
  }), _c('scroller', {
    staticClass: ["main-list"]
  }, [_c('refresher'), _c('div', {
    staticClass: ["book-list"]
  }, _vm._l((_vm.booklist), function(i) {
    return _c('div', {
      staticClass: ["sub-i"]
    }, [_c('image', {
      staticClass: ["i-img"],
      attrs: {
        "resize": "cover",
        "src": i.full_cover
      },
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id)
        }
      }
    }), _c('div', {
      staticClass: ["text-box"]
    }, [_c('text', {
      staticClass: ["i-name"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id)
        }
      }
    }, [_vm._v(_vm._s(i.book_name))]), _c('text', {
      staticClass: ["i-author"]
    }, [_vm._v("作者：" + _vm._s(i.author))]), _c('text', {
      staticClass: ["i-dec"],
      on: {
        "click": function($event) {
          _vm.jump('/bookDetail/' + i.id)
        }
      }
    }, [_vm._v(_vm._s(i.description))])])])
  }))], 1), _c('tab-bar', {
    attrs: {
      "router": "list"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(68)
)

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(70)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/bookDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f4889ad"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main": {
    "display": "flex",
    "flexDirection": "column",
    "flexWrap": "nowrap",
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "1070"
  },
  "book-detail": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "i-img": {
    "width": "234",
    "height": "310",
    "marginRight": "30"
  },
  "detail": {
    "flexDirection": "column"
  },
  "i-name": {
    "color": "#101010",
    "fontSize": "34",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "marginTop": "10"
  },
  "i-author": {
    "color": "#787878",
    "fontSize": "32",
    "marginTop": "10"
  },
  "i-count": {
    "color": "#787878",
    "fontSize": "32",
    "marginTop": "10"
  },
  "shareBox": {
    "flexDirection": "row",
    "color": "#101010",
    "fontSize": "34",
    "marginTop": "10"
  },
  "i-collect": {
    "marginRight": "40",
    "fontSize": "34"
  },
  "collected": {
    "color": "#ffa500"
  },
  "i-share": {
    "fontSize": "34"
  },
  "i-read": {
    "backgroundColor": "#8BC34A",
    "fontSize": "32",
    "color": "#ffffff",
    "width": "343",
    "height": "50",
    "textAlign": "center",
    "lineHeight": "50",
    "borderRadius": "10",
    "marginTop": "10"
  },
  "section-box": {
    "borderTopWidth": "1",
    "borderTopColor": "#333333",
    "paddingBottom": "10"
  },
  "section": {
    "color": "#101010",
    "fontSize": "34",
    "backgroundColor": "#eeeeee",
    "height": "80",
    "lineHeight": "80",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "activity-box": {
    "width": "750",
    "height": "220",
    "flexDirection": "row",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "15",
    "paddingRight": "15"
  },
  "activity-item": {
    "position": "relative",
    "width": "345",
    "height": "180",
    "marginRight": "30"
  },
  "act-img": {
    "width": "345",
    "height": "180"
  },
  "act-title": {
    "width": "345",
    "position": "absolute",
    "left": 0,
    "top": "70",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center",
    "color": "#101010",
    "fontSize": "32",
    "lines": 1
  },
  "desc-content": {
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "fontSize": "32",
    "color": "#101010",
    "lineHeight": "40"
  },
  "comment-header": {
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "comment-tag": {
    "color": "#101010",
    "fontSize": "34"
  },
  "comment-btn": {
    "borderRadius": "10",
    "borderWidth": "1",
    "borderColor": "#101010",
    "color": "#101010",
    "width": "144",
    "height": "54",
    "textAlign": "center",
    "lineHeight": "54",
    "fontSize": "34"
  },
  "comment-item": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#cccccc",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "comment-content": {
    "color": "#101010",
    "fontSize": "32",
    "lineHeight": "40"
  },
  "comment-detail": {
    "paddingTop": "20",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "comment-author": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center"
  },
  "comment-author-img": {
    "width": "43",
    "height": "43",
    "borderRadius": "43",
    "marginRight": "10"
  },
  "comment-author-name": {
    "color": "#666666",
    "fontSize": "32"
  },
  "star-bar": {
    "width": "160",
    "height": "32",
    "fontSize": 0,
    "lineHeight": 0
  },
  "star": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "height": "32",
    "width": "160",
    "overflow": "hidden"
  },
  "starImg": {
    "height": "32",
    "width": "160"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    components: {
        'tab-bar': _tabBar2.default,
        'refresher': _refresh2.default,
        'header2': _Header2.default
    },
    data: function data() {
        return {
            detail: {},
            leftButton: {
                name: "<"
            },
            token: '',
            bookID: '',
            collectTag: 0,
            current_page: 1,
            comments: [],
            total: 1,
            loadinging: false,
            hasNomare: false,
            placeholder: 'Loading...',
            //pdfUrl:'/json/storage/pdf/xiyou.pdf',
            workerSrc: 'https://cdn.bootcss.com/pdf.js/1.9.456/pdf.worker.min.js',
            starbar: 'http://172.18.22.119:8081/web/assets/images/iconpic-star-S-default.png',
            star: 'http://172.18.22.119:8081/web/assets/images/iconpic-star-S.png'
        };
    },
    created: function created() {
        var _this = this;

        this.bookID = this.$route.params.index;
        var _self = this;
        storage.getItem('token', function (event) {
            _this.token = event.data;
            // this.token = '8755a2c81a83b12e45691e87b2ac8540';
            _this.GET('books/detail/' + _this.bookID, _this.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.detail = result;
                    _this.collectTag = result.is_collect;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
            _self.getComment();
        });
    },

    methods: {
        handleClick: function handleClick() {
            PDFPreview.open(this.pdfUrl);
        },
        collect: function collect(isCollected) {
            if (isCollected == 1) {
                return false;
            }
            var _self = this;
            var data = '';
            this.POST('books/collect/' + this.bookID, this.token, data, function (res) {
                if (res.data.code == 200) {
                    _self.collectTag = 1;
                    modal.toast({
                        message: res.data.message,
                        duration: 1
                    });
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        },

        // onloadmore(){
        //   this.getComment();
        // },
        getComment: function getComment() {
            var _this2 = this;

            var _self = this;

            this.GET('books/comment/' + this.bookID + '?page=' + this.current_page, this.token, function (res) {
                _this2.loadinging = false;
                if (res.data.code == 200) {
                    var result = res.data.result;
                    if (result.data.length == 0) {
                        _self.placeholder = "暂无评论";
                    }
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.comments.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onloading: function onloading(event) {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多评论', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getComment();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "西游记",
      "leftBtn": _vm.leftButton
    }
  }), _c('scroller', {
    staticClass: ["main"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "300"
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["book-detail"]
  }, [_c('image', {
    staticClass: ["i-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.detail.full_cover
    }
  }), _c('div', {
    staticClass: ["detail"]
  }, [_c('text', {
    staticClass: ["i-name"]
  }, [_vm._v(_vm._s(_vm.detail.book_name))]), _c('div', {
    staticClass: ["star-box"]
  }, [_c('image', {
    staticClass: ["star-bar"],
    attrs: {
      "src": _vm.starbar
    }
  }), _c('div', {
    staticClass: ["star"],
    attrs: {
      "dataStar": _vm.detail.score
    }
  }, [_c('image', {
    staticClass: ["starImg"],
    attrs: {
      "src": _vm.star
    }
  })])]), _c('text', {
    staticClass: ["i-author"]
  }, [_vm._v("作者：" + _vm._s(_vm.detail.author))]), _c('text', {
    staticClass: ["i-count"]
  }, [_vm._v(_vm._s(_vm.detail.read_count) + "人阅读")]), _c('div', {
    staticClass: ["shareBox"]
  }, [_c('text', {
    ref: "collect",
    class: ['i-collect', _vm.collectTag == 1 ? 'collected' : ''],
    on: {
      "click": function($event) {
        _vm.collect(_vm.collectTag)
      }
    }
  }, [_vm._v(" 收藏")]), _c('text', {
    staticClass: ["i-share"]
  }, [_vm._v(" 分享")])]), _c('text', {
    staticClass: ["i-read"],
    on: {
      "click": function($event) {
        _vm.jump('/book/' + _vm.bookID)
      }
    }
  }, [_vm._v("立即阅读")])])]), _c('div', {
    staticClass: ["relative-activity", "section-box"]
  }, [_c('text', {
    staticClass: ["activity-tag", "section"]
  }, [_vm._v(" 相关活动")]), _c('scroller', {
    staticClass: ["activity-box"],
    attrs: {
      "scrollDirection": "horizontal",
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.detail.activity), function(act) {
    return _c('div', {
      staticClass: ["activity-item"]
    }, [_c('image', {
      staticClass: ["act-img"],
      attrs: {
        "src": act.image
      }
    }), _c('text', {
      staticClass: ["act-title"]
    }, [_vm._v(_vm._s(act.title))])])
  }))]), _c('div', {
    staticClass: ["book-desc", "section-box"]
  }, [_c('text', {
    staticClass: ["desc-tag", "section"]
  }, [_vm._v(" 书籍简介")]), _c('text', {
    staticClass: ["desc-content"]
  }, [_vm._v(_vm._s(_vm.detail.description))])]), _c('div', {
    staticClass: ["book-comment", "section-box"]
  }, [_c('div', {
    staticClass: ["comment-header", "section"]
  }, [_c('text', {
    staticClass: ["comment-tag"]
  }, [_vm._v(" 读书评论")]), _c('text', {
    staticClass: ["comment-btn"],
    on: {
      "click": function($event) {
        _vm.jump('/comment/' + _vm.bookID)
      }
    }
  }, [_vm._v("我要评论")])]), _vm._l((_vm.comments), function(item) {
    return _c('div', {
      staticClass: ["comment-item"]
    }, [_c('text', {
      staticClass: ["comment-content"]
    }, [_vm._v(_vm._s(item.content))]), _c('div', {
      staticClass: ["comment-detail"]
    }, [_c('div', {
      staticClass: ["comment-author"]
    }, [_c('image', {
      staticClass: ["comment-author-img"],
      attrs: {
        "src": item.reader.full_avatar
      }
    }), _c('text', {
      staticClass: ["comment-author-name"]
    }, [_vm._v(_vm._s(item.reader.name))])]), _c('div', {
      staticClass: ["star-box"]
    }, [_c('image', {
      staticClass: ["star-bar"],
      attrs: {
        "src": _vm.starbar
      }
    }), _c('div', {
      staticClass: ["star"],
      attrs: {
        "dataStar": item.score
      }
    }, [_c('image', {
      staticClass: ["starImg"],
      attrs: {
        "src": _vm.star
      }
    })])])])])
  })], 2), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loadinging ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.placeholder))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 1), _c('tab-bar', {
    attrs: {
      "router": "bookDetail"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(72)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(78)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/activity.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e8839f3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#f4f4f4"
  },
  "cell-button": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "18"
  }
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(74);

var _Block2 = _interopRequireDefault(_Block);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            articles: [],
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false
        };
    },

    components: {
        'tab-bar': _tabBar2.default,
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-3': _Block2.default
    },
    created: function created() {
        var _this = this;

        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getList();
        });
    },

    methods: {
        getList: function getList() {
            var _this2 = this;

            var _self = this;
            this.GET('activities/list?page=' + this.current_page, this.token, function (res) {
                _this2.loadinging = false;
                if (res.data.code == 200) {
                    var result = res.data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.articles.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onloadmore: function onloadmore() {
            var _self = this;
            if (_self.hasNomare) {
                modal.toast({ message: '没有更多活动', duration: 1 });
                return false;
            }
            modal.toast({ message: 'Loading', duration: 1 });
            this.loadinging = true;
            this.getList();
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(75)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(77)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Block3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2fecc9c6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#ffffff",
    "paddingTop": "15",
    "paddingBottom": "15"
  },
  "auther-box": {
    "height": "75",
    "paddingTop": "10",
    "paddingLeft": "25",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "auther-img": {
    "height": "58",
    "width": "58",
    "borderRadius": "58"
  },
  "auther-name": {
    "flex": 1,
    "fontSize": "30",
    "height": "58",
    "paddingLeft": "20",
    "paddingTop": "10"
  },
  "img-box": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "nowrap"
  },
  "main-img": {
    "flex": 1,
    "height": "380"
  },
  "tlt-box": {
    "height": "80",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "tlt": {
    "fontSize": "34",
    "flex": 1,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "info": {
    "fontSize": "32",
    "paddingLeft": "20",
    "paddingRight": "20",
    "marginTop": "10",
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis",
    "color": "#666666"
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
    props: ["article", "url"],
    data: function data() {
        return {};
    },

    methods: {
        jumpWeb: function jumpWeb(_url) {
            if (!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
            var url = this.$getConfig().bundleUrl;
            navigator.push({
                url: _util2.default.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
                animated: "true"
            });
        }
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": function($event) {
        _vm.jump('/online/' + _vm.article.id + '/' + _vm.article.title)
      }
    }
  }, [_c('div', {
    staticClass: ["auther-box"]
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.auther.full_avatar
    }
  }), _c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.article.auther.name))])]), _c('div', {
    staticClass: ["img-box"]
  }, [_c('image', {
    staticClass: ["main-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.article.full_thumb
    }
  })]), _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.article.title))])]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.activity_start_time) + "开始")]), _c('text', {
    staticClass: ["info"]
  }, [_vm._v(_vm._s(_vm.article.address))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "活动"
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher'), _vm._l((_vm.articles), function(ar) {
    return _c('div', {
      staticClass: ["cell-button"]
    }, [_c('block-3', {
      attrs: {
        "article": ar,
        "url": ""
      }
    })], 1)
  })], 2), _c('tab-bar', {
    attrs: {
      "router": "activity"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(94)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/online.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-000d0466"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#f4f4f4"
  },
  "cell-button": {
    "paddingBottom": "18"
  },
  "commen-item": {
    "backgroundColor": "#f4f4f4"
  },
  "selected": {
    "backgroundColor": "#f4f4f4",
    "paddingBottom": "18"
  }
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(4);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _Block = __webpack_require__(86);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(90);

var _Block4 = _interopRequireDefault(_Block3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    data: function data() {
        return {
            name: '',
            leftBtn: {
                name: '<'
            },
            rightBtn: {
                name: '发帖',
                fun: function fun() {}
            },
            articles: [],
            selected: [],
            commens: [],
            token: '',
            listID: 1,
            current_page: 1,
            total: 1,
            loadinging: false,
            hasNomare: false
        };
    },

    components: {
        'header2': _Header2.default,
        'refresher': _refresh2.default,
        'block-5': _Block2.default,
        'block-4': _Block4.default,
        'WxcTag': _wxcTag2.default
    },
    created: function created() {
        var _this = this;

        this.name = this.$route.params.name;
        this.listID = this.$route.params.index;
        storage.getItem('token', function (event) {
            _this.token = event.data;
            _this.getSelectedList();
            _this.getCommenList();
            // this.getCommen()
        });
    },

    methods: {
        getSelectedList: function getSelectedList() {
            var _self = this;
            this.GET('posts/chosen/' + _self.listID + '/2', _self.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _self.selected = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        getCommen: function getCommen() {
            var _this2 = this;

            var _self = this;
            this.testGET('api/activity/commen', function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this2.commens.push(result.data[i]);
                    }
                    _this2.total = _this2.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this2.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        getCommenList: function getCommenList() {
            var _this3 = this;

            var _self = this;
            this.GET('posts/list/' + _self.listID, this.token, function (res) {
                _this3.loadinging = false;
                if (res.data.code == 200) {
                    var result = res.data.result;
                    for (var i = 0; i < result.data.length; i++) {
                        _this3.commens.push(result.data[i]);
                    }
                    _this3.total = _this3.last_page;
                    if (result.last_page = result.current_page) {
                        //最后一页
                        _self.hasNomare = true;
                    } else if (result.last_page > result.current_page) {
                        //非最后一页
                        _this3.current_page = result.current_page + 1;
                    }
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        },
        onloadmore: function onloadmore() {
            // var _self = this;
            // if(_self.hasNomare){
            //   modal.toast({ message: '没有更多活动', duration: 1 })
            //   return false;
            // }
            // modal.toast({ message: 'Loading', duration: 1 })
            // this.loadinging = true;
            // this.getCommenList();
        }
    }
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(85)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/node_modules/weex-ui/packages/wxc-tag/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0c97bf16"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "tag-item": {
    "height": "24",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingBottom": "2"
  },
  "tag-border": {
    "borderBottomLeftRadius": "4",
    "borderBottomRightRadius": "4",
    "borderTopLeftRadius": "4",
    "borderTopRightRadius": "4"
  },
  "tag-hollow": {
    "borderWidth": "1"
  },
  "tag-image": {
    "height": "24"
  },
  "tag-special": {
    "borderWidth": "1",
    "flexDirection": "row"
  },
  "left-image": {
    "width": "20",
    "height": "20"
  },
  "tag-left": {
    "width": "24",
    "height": "24",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tag-text": {
    "fontSize": "20",
    "height": "22",
    "lineHeight": "22",
    "paddingLeft": "6",
    "paddingRight": "6"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    type: {
      type: String,
      default: 'solid'
    },
    value: {
      type: [String, Number],
      default: '测试测试'
    },
    tagColor: {
      type: String,
      default: '#ff5000'
    },
    fontColor: {
      type: String,
      default: '#333333'
    },
    specialIcon: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSolid: function showSolid() {
      var type = this.type,
          value = this.value;

      return type === 'solid' && value !== '';
    },
    showHollow: function showHollow() {
      var type = this.type,
          value = this.value;

      return type === 'hollow' && value !== '';
    },
    showSpecial: function showSpecial() {
      var type = this.type,
          value = this.value,
          specialIcon = this.specialIcon;

      return type === 'special' && value !== '' && specialIcon !== '';
    },
    showImage: function showImage() {
      var type = this.type,
          img = this.img;

      return type === 'image' && img !== '';
    },
    tagTextStyle: function tagTextStyle() {
      var tagColor = this.tagColor,
          showSolid = this.showSolid;

      return showSolid ? { backgroundColor: tagColor } : { borderColor: tagColor };
    }
  },
  data: function data() {
    return {
      imgWidth: 90
    };
  },
  methods: {
    onLoad: function onLoad(e) {
      if (e.success && e.size && e.size.naturalWidth > 0) {
        var width = e.size.naturalWidth;
        var height = e.size.naturalHeight;
        this.imgWidth = width * (24 / height);
      }
    }
  }
};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showSolid || _vm.showHollow) ? _c('div', {
    class: ['tag-item', 'tag-border', _vm.showHollow && 'tag-hollow'],
    style: _vm.tagTextStyle
  }, [_c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e(), (_vm.showImage) ? _c('image', {
    staticClass: ["tag-image"],
    style: {
      width: _vm.imgWidth + 'px'
    },
    attrs: {
      "src": _vm.img,
      "ariaHidden": true
    },
    on: {
      "load": _vm.onLoad
    }
  }) : _vm._e(), (_vm.showSpecial) ? _c('div', {
    staticClass: ["tag-special", "tag-border"],
    style: {
      borderColor: _vm.tagColor
    },
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.value
    }
  }, [_c('div', {
    staticClass: ["tag-left"],
    style: {
      backgroundColor: _vm.tagColor
    }
  }, [_c('image', {
    staticClass: ["left-image"],
    attrs: {
      "src": _vm.specialIcon
    }
  })]), _c('text', {
    staticClass: ["tag-text"],
    style: {
      color: _vm.fontColor
    }
  }, [_vm._v(_vm._s(_vm.value))])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(89)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Block5.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2fb46bc2"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont",
    "color": "#9d9d9d",
    "fontSize": "40"
  },
  "commen-cell": {
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "auther-box": {
    "flexDirection": "row"
  },
  "auther-img": {
    "borderRadius": "10",
    "width": "60",
    "height": "60",
    "marginRight": "20"
  },
  "auther-detail": {
    "width": "400"
  },
  "auther-name": {
    "fontSize": "34",
    "lineHeight": "34",
    "color": "#666666"
  },
  "auther-time": {
    "fontSize": "30",
    "lineHeight": "32",
    "marginTop": "10",
    "color": "#888888"
  },
  "tlt-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "tlt": {
    "fontSize": "36",
    "color": "#666666",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "width": "600"
  },
  "description-box": {
    "marginTop": "10",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "description": {
    "color": "#888888",
    "fontSize": "32",
    "lineHeight": "48"
  },
  "wedge-box": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "alignItems": "center",
    "marginTop": "20"
  },
  "wedge": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wedge-text": {
    "fontSize": "30",
    "color": "#9d9d9d",
    "marginLeft": "10"
  },
  "active": {
    "color": "#009FF0"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(4);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
    props: ["commen"],
    components: { WxcTag: _wxcTag2.default },
    data: function data() {
        return {
            img: 'http://www.imbawin.com/storage/avatar/2018/04/02/tdsPjcjh5HpziRd23S5A5P8sSKjkzNbCu5CAg1Py.jpg',
            token: '',
            isLike: ''
        };
    },
    created: function created() {
        this.isLike = this.commen.ups_count;
    },

    methods: {
        like: function like(id) {
            var _this = this;

            var _self = this;
            if (this.isLike == 1) {
                return false;
            }
            storage.getItem('token', function (event) {
                _this.token = event.data;
                _this.POST('posts/up/' + id, _this.token, '', function (res) {
                    if (res.data.code == 200) {
                        _this.isLike = 1;
                        // if(this.isLike == 1){
                        //     this.isLike = 0;
                        // }else{
                        //     this.isLike = 1;
                        // }
                    } else {
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        });
                    }
                });
            });
        }
    }
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["commen-cell"]
  }, [_c('div', {
    staticClass: ["auther-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.commen.readers.full_avatar
    }
  }), _c('div', {
    staticClass: ["auther-detail"]
  }, [_c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.commen.readers.name))]), _c('text', {
    staticClass: ["auther-time"]
  }, [_vm._v(_vm._s(_vm.commen.readers.created_at))])])]), _c('div', {
    staticClass: ["tlt-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.commen.title))])]), _c('div', {
    staticClass: ["description-box"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.commen.description))])]), _c('div', {
    staticClass: ["wedge-box"]
  }, [_c('div', {
    staticClass: ["wedge-commen", "wedge"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text"]
  }, [_vm._v("评论")])]), (_vm.isLike == 1) ? _c('div', {
    staticClass: ["wedge-like", "wedge"]
  }, [_c('text', {
    staticClass: ["iconfont", "active"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text", "active"]
  }, [_vm._v(_vm._s(_vm.commen.up))])]) : _c('div', {
    staticClass: ["wedge-like", "wedge"],
    on: {
      "click": function($event) {
        _vm.like(_vm.commen.id)
      }
    }
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text"]
  }, [_vm._v("赞")])]), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wedge-share", "wedge"]
  }, [_c('text', {
    staticClass: ["iconfont"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["wedge-text"]
  }, [_vm._v("转发")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(91)
)

/* script */
__vue_exports__ = __webpack_require__(92)

/* template */
var __vue_template__ = __webpack_require__(93)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/components/Block4.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2fd09ac4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "selected-cell": {
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderColor": "#cccccc"
  },
  "tag": {
    "fontSize": "32",
    "marginRight": "20",
    "marginLeft": "20"
  },
  "title": {
    "fontSize": "34",
    "color": "#000000"
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxcTag = __webpack_require__(4);

var _wxcTag2 = _interopRequireDefault(_wxcTag);

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    props: ["selecte"],
    components: { WxcTag: _wxcTag2.default },
    created: function created() {},

    methods: {}
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["selected-cell"],
    on: {
      "click": function($event) {
        _vm.jump('/themeDetail/' + _vm.selecte.id)
      }
    }
  }, [_c('wxc-tag', {
    staticClass: ["tag"],
    attrs: {
      "type": "solid",
      "tagColor": "#009FF0",
      "fontColor": "#ffffff",
      "value": "置顶"
    }
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.selecte.title))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.name,
      "leftBtn": _vm.leftBtn,
      "rightBtn": _vm.rightBtn
    }
  }), _c('scroller', {
    staticClass: ["main-list"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "300"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["selected"]
  }, _vm._l((_vm.selected), function(se) {
    return _c('div', {
      staticClass: ["selected-item"]
    }, [_c('block-4', {
      attrs: {
        "selecte": se
      }
    })], 1)
  })), _c('div', {
    staticClass: ["commen"]
  }, _vm._l((_vm.commens), function(co) {
    return _c('div', {
      staticClass: ["commen-item", "cell-button"]
    }, [_c('block-5', {
      attrs: {
        "commen": co
      }
    })], 1)
  }))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(97)

/* template */
var __vue_template__ = __webpack_require__(98)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/themeDetail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65cae612"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#fefefe"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "comment-form": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "width": "750",
    "height": "90",
    "backgroundColor": "#f0f0f0",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "more": {
    "fontSize": "50",
    "color": "#888888",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "input": {
    "flex": 1,
    "height": "60",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "fontSize": "32",
    "backgroundColor": "#ffffff"
  },
  "btn": {
    "fontSize": "34",
    "color": "#888888",
    "paddingLeft": "20",
    "paddingRight": "20",
    "textAlign": "center"
  },
  "contentBox": {
    "marginTop": "86",
    "backgroundColor": "#ffffff",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0"
  },
  "auther-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "auther-img": {
    "borderRadius": "10",
    "width": "60",
    "height": "60",
    "marginRight": "20"
  },
  "auther-detail": {
    "width": "400"
  },
  "auther-name": {
    "fontSize": "34",
    "lineHeight": "34",
    "color": "#666666"
  },
  "auther-time": {
    "fontSize": "30",
    "lineHeight": "32",
    "marginTop": "10",
    "color": "#888888"
  },
  "tlt-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "tlt": {
    "fontSize": "36",
    "color": "#666666",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "width": "600"
  },
  "description-box": {
    "marginTop": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "description": {
    "color": "#888888",
    "fontSize": "32",
    "lineHeight": "48"
  },
  "like-box": {
    "marginLeft": "20",
    "marginRight": "20",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingBottom": "20",
    "fontSize": "32"
  },
  "like-wrap": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "like-name": {
    "color": "#888888",
    "fontSize": "32"
  },
  "like-text": {
    "color": "#009FF0",
    "marginLeft": "20"
  },
  "comment-box": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "comment-item": {
    "flexDirection": "row",
    "borderBottomWidth": "1",
    "borderColor": "#f0f0f0",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "comment-author-img": {
    "width": "70",
    "height": "70",
    "borderRadius": "10",
    "marginRight": "30"
  },
  "comment-detail": {
    "width": "610"
  },
  "comment-author-name": {
    "fontSize": "34",
    "color": "#888888"
  },
  "comment-author-time": {
    "fontSize": "30",
    "color": "#acacac",
    "marginTop": "10"
  },
  "comment-content": {
    "marginTop": "20"
  },
  "comment-text": {
    "fontSize": "34",
    "color": "#888888"
  },
  "loading": {
    "width": 750,
    "display": "flex",
    "MsFlexAlign": "center",
    "WebkitAlignItems": "center",
    "WebkitBoxAlign": "center",
    "alignItems": "center"
  },
  "indicator-text": {
    "color": "#888888",
    "fontSize": "42",
    "textAlign": "center"
  },
  "indicator": {
    "marginTop": "16",
    "height": "40",
    "width": "40",
    "color": "#0000FF"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'themeDetail',
  components: {
    'header2': _Header2.default
  },
  data: function data() {
    return {
      postDetail: {},
      postID: '',
      token: '',
      leftBtn: {
        name: '<'
      },
      readersImg: '',
      readersName: '',
      readersTime: '',
      current_page: 1,
      comments: [],
      total: 1,
      loadinging: false,
      hasNomare: false,
      placeholder: '',
      ups: [],
      commentContent: ''
    };
  },
  created: function created() {
    var _this = this;

    this.postID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
      _this.GET('posts/detail/' + _this.postID, _this.token, function (res) {
        if (res.data.code == 200) {
          var result = res.data.result;
          _this.postDetail = result;
          _this.readersImg = result.readers.full_avatar;
          _this.readersName = result.readers.name;
          _this.readersTime = result.readers.created_at;
          _this.ups = result.ups;
        } else {
          modal.toast({
            message: res.data.code + ":" + _this.token,
            duration: 3
          });
        }
      });
      //增加阅读次数
      _this.POST('posts/view/' + _this.postID, _this.token, '', function (res) {
        if (res.data.code == 200) {} else {}
      });

      //this.getComment();
      _this.getCommentList();
    });
  },

  methods: {
    getCommentList: function getCommentList() {
      var _this2 = this;

      var _self = this;
      this.testGET('api/activity/comment', function (res) {
        _this2.loadinging = false;
        if (res.data.code == 200) {
          var result = res.data.result;
          if (result.data.length == 0) {
            _self.placeholder = "暂无评论";
          }
          for (var i = 0; i < result.data.length; i++) {
            _this2.comments.push(result.data[i]);
          }
          _this2.total = _this2.last_page;
          if (result.last_page = result.current_page) {
            //最后一页
            _self.hasNomare = true;
          } else if (result.last_page > result.current_page) {
            //非最后一页
            _this2.current_page = result.current_page + 1;
          }
        } else {
          modal.toast({
            message: res.data.code + ":" + _self.token,
            duration: 3
          });
        }
      });
    },
    getComment: function getComment() {
      var _this3 = this;

      var _self = this;

      this.GET('posts/comments/' + this.postID + '?page=' + this.current_page, this.token, function (res) {
        _this3.loadinging = false;
        if (res.data.code == 200) {
          var result = res.data.result;
          if (result.data.length == 0) {
            _self.placeholder = "暂无评论";
          }
          for (var i = 0; i < result.data.length; i++) {
            _this3.comments.push(result.data[i]);
          }
          _this3.total = _this3.last_page;
          if (result.last_page = result.current_page) {
            //最后一页
            _self.hasNomare = true;
          } else if (result.last_page > result.current_page) {
            //非最后一页
            _this3.current_page = result.current_page + 1;
          }
        } else {
          modal.toast({
            message: res.data.code + ":" + _self.token,
            duration: 3
          });
        }
      });
    },
    onloading: function onloading(event) {
      var _self = this;
      if (_self.hasNomare) {
        modal.toast({ message: '没有更多评论', duration: 1 });
        return false;
      }
      modal.toast({ message: 'Loading', duration: 1 });
      this.loadinging = true;
      this.getComment();
    },
    oninput: function oninput(event) {
      this.commentContent = event.value;
    },
    post: function post() {
      var _self = this;
      if (!_self.commentContent.length) {
        return false;
      }
      var data = JSON.stringify({ "content": _self.commentContent });
      _self.POST('posts/comment/' + _self.postID, _self.token, data, function (res) {
        if (res.data.code == 200) {
          _self.$router.push('/themeDetail/' + _self.postID);
        } else {
          modal.toast({
            message: res.data.message,
            duration: 3
          });
        }
      });
    }
  }
};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": _vm.postDetail.title,
      "leftBtn": _vm.leftBtn
    }
  }), _c('scroller', {
    staticClass: ["main"],
    attrs: {
      "offsetAccuracy": "300px",
      "loadmoreoffset": "300"
    }
  }, [_c('refresher'), _c('div', {
    staticClass: ["contentBox"]
  }, [_c('div', {
    staticClass: ["auther-box"]
  }, [_c('image', {
    staticClass: ["auther-img"],
    attrs: {
      "resize": "cover",
      "src": _vm.readersImg
    }
  }), _c('div', {
    staticClass: ["auther-detail"]
  }, [_c('text', {
    staticClass: ["auther-name"]
  }, [_vm._v(_vm._s(_vm.readersName))]), _c('text', {
    staticClass: ["auther-time"]
  }, [_vm._v(_vm._s(_vm.readersTime))])])]), _c('div', {
    staticClass: ["tlt-box"]
  }, [_c('text', {
    staticClass: ["tlt"]
  }, [_vm._v(_vm._s(_vm.postDetail.title))])]), _c('div', {
    staticClass: ["description-box"]
  }, [_c('text', {
    staticClass: ["description"]
  }, [_vm._v(_vm._s(_vm.postDetail.content))])])]), (_vm.ups.length != 0) ? _c('div', {
    staticClass: ["like-box"]
  }, [_vm._l((_vm.postDetail.ups), function(up, i) {
    return _c('div', {
      staticClass: ["like-wrap"]
    }, [_c('text', {
      staticClass: ["like-name"]
    }, [_vm._v(_vm._s(up.name))]), (i != _vm.postDetail.ups.length - 1) ? _c('text', {
      staticClass: ["like-name"]
    }, [_vm._v("、")]) : _vm._e()])
  }), _c('text', {
    staticClass: ["like-text"]
  }, [_vm._v("点赞")])], 2) : _vm._e(), _c('div', {
    staticClass: ["comment-box"]
  }, _vm._l((_vm.comments), function(item) {
    return _c('div', {
      staticClass: ["comment-item"]
    }, [_c('image', {
      staticClass: ["comment-author-img"],
      attrs: {
        "src": item.reader.full_avatar
      }
    }), _c('div', {
      staticClass: ["comment-detail"]
    }, [_c('div', {
      staticClass: ["comment-author"]
    }, [_c('text', {
      staticClass: ["comment-author-name"]
    }, [_vm._v(_vm._s(item.reader.name))]), _c('text', {
      staticClass: ["comment-author-time"]
    }, [_vm._v(_vm._s(item.reader.created_at))])]), _c('div', {
      staticClass: ["comment-content"]
    }, [_c('text', {
      staticClass: ["comment-text"]
    }, [_vm._v(_vm._s(item.content))])])])])
  })), _c('loading', {
    staticClass: ["loading"],
    attrs: {
      "display": _vm.loadinging ? 'show' : 'hide'
    },
    on: {
      "loading": _vm.onloading
    }
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v(_vm._s(_vm.placeholder))]), _c('loading-indicator', {
    staticClass: ["indicator"]
  })])], 1), _c('div', {
    staticClass: ["comment-form"]
  }, [_c('text', {
    staticClass: ["more", "iconfont"]
  }, [_vm._v("")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "",
      "value": "",
      "disabled": "false",
      "autofocus": "true"
    },
    on: {
      "input": _vm.oninput
    }
  }), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.post()
      }
    }
  }, [_vm._v("提交")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(100)
)

/* script */
__vue_exports__ = __webpack_require__(101)

/* template */
var __vue_template__ = __webpack_require__(102)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/offline.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2713b960"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  }
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'home',
  data: function data() {
    return {
      imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
    };
  }
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(104)
)

/* script */
__vue_exports__ = __webpack_require__(105)

/* template */
var __vue_template__ = __webpack_require__(106)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/signUp.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a307e6a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  }
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'home',
  data: function data() {
    return {
      imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }]
    };
  }
};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, _vm._l((_vm.imageList), function(img) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "resize": "cover",
        "src": img.src
      }
    })])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(108)
)

/* script */
__vue_exports__ = __webpack_require__(109)

/* template */
var __vue_template__ = __webpack_require__(110)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/personal.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1b3d6313"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "backgroundColor": "#f4f4f4"
  },
  "w-ipx": {
    "marginTop": "40",
    "marginBottom": "50"
  },
  "main-list": {
    "marginTop": "86",
    "marginBottom": "90",
    "backgroundColor": "#f4f4f4"
  },
  "cell-button": {
    "paddingBottom": "18"
  }
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
exports.default = {
    data: function data() {
        return {};
    },

    components: {
        'tab-bar': _tabBar2.default,
        'header2': _Header2.default
    },
    created: function created() {
        // this.testGET('api/activity/articles', res => {
        //     let result = res.data.result;
        //     this.articles = result['articles'];
        // })
    },

    methods: {
        onloadmore: function onloadmore() {
            var _this = this;

            setTimeout(function () {
                var _articles;

                (_articles = _this.articles).push.apply(_articles, _toConsumableArray(_this.articles));
            }, 100);
        },
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "个人信息"
    }
  }), _c('tab-bar', {
    attrs: {
      "router": "personal"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(112)
)

/* script */
__vue_exports__ = __webpack_require__(113)

/* template */
var __vue_template__ = __webpack_require__(114)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/book.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e1d5e88"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
  "book-view": {
    "width": "750",
    "height": "1245"
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

var storage = weex.requireModule('storage');
var modal = weex.requireModule('modal');
exports.default = {
  name: 'book',
  data: function data() {
    return {
      pdfUrl: '',
      // pdfUrl: 'http://172.18.22.119:8081/web/viewer/viewer.html?file=xiyou.pdf',
      bookID: '',
      token: ''
    };
  },
  created: function created() {
    var _this = this;

    this.bookID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
      _this.GET('books/content/' + _this.bookID, _this.token, function (res) {
        if (res.data.code == 200) {
          var result = res.data.result[0];
          _this.pdfUrl = 'http://www.imbawin.com/pdfjs/viewer/viewer.html?file=' + result.pdf_image;
        } else {
          modal.toast({
            message: res.data.code + ":" + _this.token,
            duration: 3
          });
        }
      });
      //增加阅读次数
      _this.POST('books/count/' + _this.bookID, _this.token, '', function (res) {
        if (res.data.code == 200) {} else {}
      });
    });
  }
};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('web', {
    ref: "webview",
    staticClass: ["book-view"],
    attrs: {
      "src": _vm.pdfUrl
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(116)
)

/* script */
__vue_exports__ = __webpack_require__(117)

/* template */
var __vue_template__ = __webpack_require__(118)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/comment.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-65eafbdc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = {
  "commentBox": {
    "marginTop": "86",
    "borderBottomWidth": "1",
    "borderBottomColor": "#666666",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "starText": {
    "marginRight": "40",
    "fontSize": "32",
    "color": "#333333"
  },
  "starBox": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "star": {
    "fontSize": "60",
    "color": "#333333",
    "marginRight": "30",
    "lineHeight": "60"
  },
  "textarea": {
    "fontSize": "34",
    "width": "700",
    "marginTop": "50",
    "marginLeft": "25",
    "paddingTop": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _Header = __webpack_require__(2);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
exports.default = {
  name: 'comment',
  components: {
    'header2': _Header2.default
  },
  data: function data() {
    var _self = this;
    return {
      leftBtn: {
        name: "X"
      },
      score: null,
      comment: '',
      bookID: '',
      token: '',
      rightBtn: {
        name: '发表',
        fun: function fun() {
          if (!_self.score) {
            modal.alert({
              message: '请评分',
              okTitle: '知道了'
            });
            return false;
          }
          if (!_self.comment.length) {
            modal.alert({
              message: '请填写评论内容',
              okTitle: '知道了'
            });
            return false;
          }
          var data = JSON.stringify({ "score": _self.score, "content": _self.comment });
          _self.POST('books/comment/' + _self.bookID, _self.token, data, function (res) {
            if (res.data.code == 200) {
              modal.toast({
                message: res.data.message,
                duration: 1
              });
              _self.$router.go(-1);
            } else {
              modal.toast({
                message: res.data.message,
                duration: 3
              });
            }
          });
        }
      },
      currentStar: ['☆', '☆', '☆', '☆', '☆'],
      stars: [['★', '☆', '☆', '☆', '☆'], ['★', '★', '☆', '☆', '☆'], ['★', '★', '★', '☆', '☆'], ['★', '★', '★', '★', '☆'], ['★', '★', '★', '★', '★']]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.bookID = this.$route.params.index;
    storage.getItem('token', function (event) {
      _this.token = event.data;
    });
  },

  methods: {
    vote: function vote(index) {
      this.currentStar = this.stars[index];
      this.score = Number(index + 1);
    },
    oninput: function oninput(event) {
      this.comment = event.value;
    }
  }
};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('header2', {
    attrs: {
      "title": "写评论",
      "leftBtn": _vm.leftBtn,
      "rightBtn": _vm.rightBtn
    }
  }), _c('div', {
    staticClass: ["commentBox"]
  }, [_c('text', {
    staticClass: ["starText"]
  }, [_vm._v("评分")]), _c('div', {
    staticClass: ["starBox"]
  }, _vm._l((_vm.currentStar), function(i, item) {
    return _c('text', {
      staticClass: ["star"],
      on: {
        "click": function($event) {
          _vm.vote(item)
        }
      }
    }, [_vm._v(_vm._s(i))])
  }))]), _c('div', {
    staticClass: ["textBox"]
  }, [_c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "placeholder": "写下你的评论吧~",
      "disabled": "false",
      "autofocus": "true"
    },
    on: {
      "input": _vm.oninput
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper-login": {
    "marginTop": "50",
    "marginLeft": "125",
    "width": "500",
    "alignItems": "center"
  },
  "text": {
    "fontSize": "36",
    "color": "#333333"
  },
  "input-style": {
    "width": "400",
    "height": "60",
    "fontSize": "34",
    "color": "#666666",
    "lineHeight": "60",
    "borderWidth": "1",
    "borderColor": "#cccccc",
    "paddingTop": "10",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "paddingRight": "20",
    "marginTop": "40"
  },
  "login-btn": {
    "width": "400",
    "textAlign": "center",
    "fontSize": "34",
    "color": "#ffffff",
    "backgroundColor": "#008000",
    "height": "60",
    "lineHeight": "60",
    "marginTop": "40",
    "borderRadius": "10"
  },
  "forget-psw": {
    "marginTop": "40",
    "color": "#666666",
    "fontSize": "32",
    "width": "400",
    "textAlign": "center"
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');
var storage = weex.requireModule('storage');
exports.default = {
    data: function data() {
        return {
            phone: '',
            password: ''
        };
    },

    methods: {
        signIn: function signIn() {
            var _self = this;
            var ph = this.phone,
                pw = this.password;
            if (!ph.length) {
                modal.toast({
                    message: "请输入手机号码",
                    duration: 1
                });
                return false;
            }
            if (!pw.length) {
                modal.toast({
                    message: "请输入密码",
                    duration: 1
                });
            }
            stream.fetch({
                method: 'POST',
                type: 'json',
                url: 'http://www.imbawin.com/app/login?phone=' + ph + '&password=' + pw
                //url: '/json/login?phone=17327486666&password=123456'
            }, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    storage.setItem('token', result.api_token);
                    _self.$emit('login', { login: true });
                } else {
                    modal.toast({
                        message: res.data.message,
                        duration: 3
                    });
                }
            });
        }
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper-login"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("登录账户")]), _c('input', {
    staticClass: ["input-style"],
    attrs: {
      "type": "tel",
      "autofocus": "true",
      "placeholder": "手机号",
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        _vm.phone = $event.target.attr.value
      }
    }
  }), _c('input', {
    staticClass: ["input-style"],
    attrs: {
      "type": "password",
      "placeholder": "密码",
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        _vm.password = $event.target.attr.value
      }
    }
  }), _c('text', {
    staticClass: ["login-btn"],
    on: {
      "click": function($event) {
        _vm.signIn()
      }
    }
  }, [_vm._v("立即登录")]), _c('text', {
    staticClass: ["forget-psw"]
  }, [_vm._v("忘记密码？")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(123)
)

/* script */
__vue_exports__ = __webpack_require__(124)

/* template */
var __vue_template__ = __webpack_require__(125)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/assets/views/default.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6303ba84"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "main-list": {
    "width": "750",
    "height": "1245",
    "marginBottom": "120",
    "backgroundColor": "#f8f8f8"
  },
  "ml-ipx": {
    "marginTop": "208",
    "marginBottom": "170"
  }
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _refresh = __webpack_require__(3);

var _refresh2 = _interopRequireDefault(_refresh);

var _YXSlider = __webpack_require__(6);

var _YXSlider2 = _interopRequireDefault(_YXSlider);

var _bookSearch = __webpack_require__(7);

var _bookSearch2 = _interopRequireDefault(_bookSearch);

var _Block = __webpack_require__(8);

var _Block2 = _interopRequireDefault(_Block);

var _Block3 = __webpack_require__(9);

var _Block4 = _interopRequireDefault(_Block3);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var storage = weex.requireModule('storage');
exports.default = {
    name: 'home',
    components: {
        'tab-bar': _tabBar2.default,
        'home-header': _header2.default,
        'refresher': _refresh2.default,
        'yx-slider': _YXSlider2.default,
        'book-search': _bookSearch2.default,
        'block-1': _Block2.default,
        'block-2': _Block4.default
    },
    data: function data() {
        return {
            YXBanners: [],
            borrowRecords: [],
            bookList: [],
            showLoading: 'hide',
            token: ''
        };
    },
    created: function created() {
        var _this = this;

        var _self = this;
        storage.getItem('token', function (event) {
            _self.token = event.data;

            //banner ajax
            _this.GET('banners/list', _self.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.YXBanners = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });

            //借阅记录
            // this.testGET('api/home/borrowRecords.json', res => {
            //     let result = res.data.result;
            //     this.borrowRecords = result['borrowRecords'];
            // });

            //图书精选
            _this.GET('books/chosen/6', _self.token, function (res) {
                if (res.data.code == 200) {
                    var result = res.data.result;
                    _this.bookList = result;
                    _this.borrowRecords = result;
                } else {
                    modal.toast({
                        message: res.data.code + ":" + _self.token,
                        duration: 3
                    });
                }
            });
        });
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        }
    }
};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('home-header', {
    attrs: {
      "title": "阅读活动"
    }
  }), _c('scroller', {
    class: ['main-list']
  }, [_c('refresher'), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('yx-slider', {
    attrs: {
      "imageList": _vm.YXBanners
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('book-search')], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block-1', {
    attrs: {
      "items": _vm.borrowRecords
    }
  })], 1), _c('div', {
    staticClass: ["cell-button"]
  }, [_c('block-2', {
    attrs: {
      "books": _vm.bookList
    }
  })], 1)], 1), _c('tab-bar', {
    attrs: {
      "router": "home"
    },
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(127)
)

/* script */
__vue_exports__ = __webpack_require__(128)

/* template */
var __vue_template__ = __webpack_require__(129)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/apple/www/weex/zlsy-ui/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15ba9c98"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = {
  "box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750",
    "height": "1334"
  },
  "app-wrapper": {
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "1334",
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "login-page": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": "750",
    "height": "1334"
  },
  "r-box": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
  },
  "hide": {
    "opacity": 0
  },
  "show": {
    "opacity": 1
  }
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

var _tabBar = __webpack_require__(1);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _login = __webpack_require__(10);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
exports.default = {
    name: 'App',
    data: function data() {
        return {
            login: false
        };
    },

    components: {
        'tab-bar': _tabBar2.default,
        'login-page': _login2.default
    },
    created: function created() {
        var _this = this;

        _util2.default.initIconFont();
        storage.getItem('token', function (event) {
            var localToken = event.data;
            if (localToken == 'undefined') {
                _this.login = false;
            } else if (localToken != 'undefined') {
                _this.GET('banners/list', localToken, function (res) {
                    var result = res.data;
                    if (result.code != 200) {
                        _this.login = false;
                    } else if (result.code == 200) {
                        _this.login = true;
                    }
                });
            }
        });
    },

    methods: {
        onTabTo: function onTabTo(_result) {
            var _key = _result.data.key || '';
            this.$router && this.$router.push('/' + _key);
        },
        handleMessage: function handleMessage(payload) {
            this.login = payload.login;
            this.$router.push('/activity');
        }
    }
};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["box"]
  }, [(_vm.login) ? _c('div', {
    staticClass: ["app-wrapper"]
  }, [_c('router-view', {
    staticClass: ["r-box"]
  })], 1) : _c('div', {
    staticClass: ["login-page"]
  }, [_c('login-page', {
    on: {
      "login": _vm.handleMessage
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);