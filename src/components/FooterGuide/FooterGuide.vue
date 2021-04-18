<template>
  <!-- 创建腿部外部容器 -->
  <div class="footer-wrapper">
    <ul>
        <!-- 对应路径显示'on'样式 -->
        <!-- 点击监听，传入对应路径 -->
      <li :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
        <i class="iconfont icon-icon_huabanfuben"></i>
        <span>首页</span>
      </li>
      <li :class="{on:'/order'===$route.path}" @click="goTo('/order')">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </li>
      <li :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods:{
        goTo(path){
            // $router控制路由进行跳转
            this.$router.replace(path)
        }
    }
};
</script>

<style>
html body .footer-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  background-color: #fff;
  padding: 5px;
  height: 3.5rem;
}
html body .footer-wrapper ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #c2c2c2;
}
html body .footer-wrapper ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
}
html body .footer-wrapper ul li .iconfont {
  font-size: 1.75rem;
  padding-bottom: 0.4rem;
}
html body .footer-wrapper ul li.on {
  color: #343536;
}
</style>