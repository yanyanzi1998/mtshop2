// 入口js
import Vue from 'vue'
import App from './App'
// 引入路由器
import router from './router'

// 引入store
import store from './store/index'

// 引入加载mockServer.js
import './mock/mockServer.js'

// 加载过滤器
import './filters/index'

new Vue({
  el: '#app',
  render:h=>h(App),
  // 配置路由器
  router,
  store,
})
