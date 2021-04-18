// 使用mockjs提供mock数据接口
import Mock from 'mockjs'
import data from './data.json'

// 返回goods 的接口
    // 拦截'/goods'发送的ajax请求，将data.goods中的数据按定好的模板随机生成并返回
Mock.mock('/goods',{code:0,data:data.goods})
// 返回ratings 的接口
Mock.mock('/ratings',{code:0,data:data.ratings})

// 返回info 的接口
Mock.mock('/info',{code:0,data:data.info})

// 当前模块只需要在main.js引入执行即可，不需要向外暴露