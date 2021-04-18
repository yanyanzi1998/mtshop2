// 包含n个接口请求函数 reqXxxx
// 函数返回值依然是promise对象

import ajax from './ajax'
// 存在跨域问题8000访问4000，设置代理
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// "latitude": "40.10038",//维度
// "longitude": "116.36867",//经度
export const reqAddress = (geohash)=> ajax(`${BASE_URL}/position/${geohash}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = ()=> ajax(`${BASE_URL}/index_category`)

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
// /shops?latitude=40.10038&longitude=116.36867
export const reqShops = (longtitude,latitude) => ajax(`${BASE_URL}/shops`,{longtitude,latitude})

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop = (geohash,keyword)=>ajax(`${BASE_URL}/search_shops`,{geohash,keyword})

// 获取商家信息
export const reqShopInfo = ()=>ajax('/info')

// 获取商家商品数组
export const reqShopGoods = ()=>ajax('/goods')

// 获取商家评价数组
export const reqShopRatings = ()=>ajax('/ratings')

