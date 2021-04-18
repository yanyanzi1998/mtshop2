// ajax请求函数模块
// 返回值是promise对象(异步返回的数据是：response.data)
/*
url：请求路径
data：请求参数
type：请求类型
*/

import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
    // 再 包一层Promise对象为了可以直接得到data
    return new Promise((resolve,reject)=>{
        // 执行异步ajax请求
        let promise
    if (type === 'GET') {
        let dataStr = ''
        // 将data遍历
        Object.keys(data).forEach(key => {
            // 赋值给dataStr==> 
            // 'a=xxx&b=yyy&'
            dataStr += key + '=' + data[key] + '&'
        })
        // 如果dataStr不为空
        if(dataStr !==''){
            // 清除最后的'&'
            dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
            // 将路径修改为==>
            //'url?a=xxx&b=yyy'
            url = url + '?' + dataStr
        }
        // 发送get请求
        promise = axios.get(url)
    }else{
        // 发送post请求
        promise = axios.post(url,data)
    }
        // 成功调用resolve
        // 这是axios返回的promise对象.then
        promise.then(response=>{
            // 通过new Promise 的对象接收 axios返回data结果
            resolve(response.data)
        })
        // 失败调用reject
        .catch(err=>{
            reject(err)
        })
    })
}