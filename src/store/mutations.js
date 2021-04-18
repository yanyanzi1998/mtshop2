// 直接更新state的多个方法的对象

import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_INFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS,
} from './mutation-types'
export default {
    // 修改状态的地址
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    // 修改状态的食品分类数组
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    // 修改状态的商家数组
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    // 修改商家信息数组
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
    // 修改状态的商品数组
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    // 修改状态的评价数组
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },

    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){//第一次增加
//问题：在已经是数据绑定的数据新增的属性如何进行数据绑定？
            //food.count = 1//新增加的属性（没有数据绑定）
            /*
                对象
                属性名
                属性值
            */
            Vue.set(food,'count',1) //让新增加的属性也有数据绑定
            // 将food添加到cartFoods中
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}){
        if(food.count){//限制大于0
            food.count--
            if(food.count === 0){
                // 将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        // state.cartFoods = []//原数组中被关联的food不会消失，不能直接这样做

        // 清除food中count
        state.cartFoods.forEach(food=>food.count = 0)
        // 移除购物车中所有购物项
        state.cartFoods = []
    },

    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops =searchShops
    }
}