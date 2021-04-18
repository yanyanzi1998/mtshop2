<template>
  <div ref="app">
    <!-- 显示路由组件 -->
    <router-view/>

    <!-- 底部组件 -->
    <!-- 应该通过$route.meta中定义来判断是否显示该组件 -->
    <FooterGuide v-show="$route.path === '/msite' || $route.path === '/profile'|| $route.path === '/order'  "/>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

// 引入底部组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted(){
    // this.$store.dispatch('getAddress')
    // 引入mapActions，在methods中调用，就能直接使用函数
    this.getAddress()
  },
  methods:{
    ...mapActions(['getAddress'])
  },
}
</script>

<style>
/* 当使用less预编写css时，在静态页面css样式分离可能产生了相同名称样式的冲突，为了避免出现路由跳转时页面的样式冲突 */
/* 解决方法：
  1、使用stylus
  2、当清除相同的css文件
  3、在style标签中添加scoped属性
    该属性会为组件添加唯一属性标识，为组件内css指定唯一作用域
*/
</style>
