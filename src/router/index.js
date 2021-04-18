// 创建路由器对象
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由组件
// import Msite from '../page/Msite/Msite.vue'
// import Search from '../page/Search/Search.vue'
// import Order from '../page/Order/Order.vue'
// import Profile from '../page/Profile/Profile.vue'

// 通过函数引入可实现路由懒加载
const Msite = () =>  import ('../page/Msite/Msite.vue')
const Search = () =>  import ('../page/Search/Search.vue')
const Order = () =>  import ('../page/Order/Order.vue')
const Profile = () =>  import ('../page/Profile/Profile.vue')

import Shop from '../page/Shop/Shop.vue'
import ShopGoods from '../page/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../page/Shop/ShopRatings/ShopRatings.vue'

// 声明使用插件
Vue.use(VueRouter)
export default new VueRouter({
  // 配置对象--所有路由
  routes:[
    {
      path:'/msite',
      component:Msite,//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径的时候执行
    },
    {
      path:'/search',
      component:Search,
    },
    {
      path:'/order',
      component:Order,
    },
    {
      path:'/profile',
      component:Profile,
    },
    {
      path:'/shop',
      component:Shop,
      // 子路由写在children中
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods,
        },
        {
          path:'/shop/ratings',
          component:ShopRatings,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    },
    // 默认跳转
    {
      path:'/',
      redirect:'/msite'
    }
  ],
})
