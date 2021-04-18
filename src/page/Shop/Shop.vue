<template>
  <div>
    <ShopHeader />
    <!-- 创建点菜评价选项容器 -->
    <div class="pattern">
      <!-- 不使用router-link可以通过@click进行路由跳转 -->
      <span
        @click="goTo('/shop/goods')"
        :class="{ on: $route.path === '/shop/goods' }"
        >点菜</span
      >
      <span
        @click="goTo('/shop/ratings')"
        :class="{ on: $route.path === '/shop/ratings' }"
        >评价</span
      >
      <!-- 使用router-link渲染a标签可以通过to来指定跳转路径 -->
      <!-- router-link 中默认使用push，需要加上replace属性-->
      <!-- <router-link tag="span" to="/shop/goods" class="on">点菜</router-link>
      <router-link tag="span" to="/shop/ratings">评价</router-link> -->
    </div>
    <!-- 缓存路由组件 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";
export default {
  mounted() {
    this.$store.dispatch("getInfo");
  },
  components: {
    ShopHeader,
  },
  methods: {
    goTo(path) {
      this.$router.replace(path);
    },
  },
  computed: {
    ...mapState(["goods"]),
  },
};
</script>

<style scoped>
html body .pattern {
  position: fixed;
  width: 100%;
  top: 13.5rem;
  z-index: 3;
  padding: 0 0.75rem 0.5rem;
  font-size: 1.2rem;
  color: #838383;
  background-color: #fff;
}
html body .pattern span {
  margin-right: 1rem;
}
html body .pattern .on {
  font-size: 1.3rem;
  font-weight: bold;
  color: #373737;
  border-bottom: 2px solid #fee4a2;
}
</style>