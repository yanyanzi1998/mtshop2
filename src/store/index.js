//vuex最核心的管理对象store

import Vue from 'vue'
import Vuex from 'vuex'
// 引入四个模块

import actions from './actions' 
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

// 固定写法
export default new Vuex.Store({
    // 声明配置
    state,
    mutations,
    getters,
    actions
})