// 通过mutation间接更新state对象

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS,
} from './mutation-types'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqShopGoods,
    reqShopRatings,
    reqShopInfo,
    reqSearchShop,
} from '../api/index'

export default {
    // 异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交mutation
        if(result.code ===0){
            const address = result.data
            // 提交mutation
            commit(RECEIVE_ADDRESS,{address})
        }
    },
    
    // 异步获取食品分类数据
    async getCategorys({commit}){
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        if(result.code ===0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
    },
    // 异步获取商家列表
    async getShops({commit,state}){
        //发送异步ajax请求
        const {latitude,longitude} = state
        const result = await reqShops(longitude,latitude)
        // 提交mutation
        if(result.code ===0){
            const shops = result.data
            commit(RECEIVE_SHOPS,{shops})
        }
    },

    // 异步获取商品数组
    async getGoods({commit},callback){
        const result = await reqShopGoods()
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
            // 数据更新了，通知一下组件（不通过watch）
            // 数据更新后执行回调函数
            callback && callback()
        }
    },
    // 异步获取评价数组
    async getRatings({commit},callback){
        const result = await reqShopRatings()
        if(result.code === 0){
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
            callback && callback()
        }
    },
    // 异步获取商家信息
    async getInfo({commit}){
        const result = await reqShopInfo()
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,{info})
            
        }
    },

    // 同步更新food count的值
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    },

    // 同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART)
    },

    // 异步搜索商家列表
    async searchShops({commit,state},keyword){
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqSearchShop(geohash,keyword)
        if(result.code === 0){
            const searchShops = result.data
            commit(RECEIVE_SEARCH_SHOPS,{searchShops})
            
        }
    }
}