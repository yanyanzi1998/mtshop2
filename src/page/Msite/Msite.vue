<template>
  <div>
    <!-- 创建地理位置容器 -->
    <div class="position-wrapper">
      <i class="iconfont icon-weizhi"></i>
      <span class="position">{{ address.name }}</span>
      <i class="iconfont icon-youjiantou_huaban"></i>
    </div>
    <!-- 背景色 -->
    <div class="bgcolor">
      <!-- 创建头部容器 -->
      <header class="header-wrapper">
        <!-- 创建搜索框容器 -->
        <div class="search-wrapper">
          <!-- 创建搜索框 -->
          <div class="search" @click="$router.push('/search')">
            <!-- 搜索框内容 -->
            <i class="iconfont icon-sousuo-02"></i>
            <span>北滘大树头甜品店</span>
          </div>
          <!-- 创建推荐搜索列表容器 -->
          <div class="search-recommend-wrapper">
            <!-- 创建推荐搜索列表 -->
            <ul class="search-recommend-list">
              <li>螺蛳粉</li>
              <li>奶茶</li>
              <li>益禾堂</li>
              <li>华莱士</li>
              <li>麻辣烫</li>
              <li>咖啡</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
    <!-- 创建分类选项列表容器 -->
    <nav class="swiper-container" v-if="categorysArr.length">
      <!-- 创建分类选项列表 -->
      <div class="swiper-wrapper">
        <ul
          class="swiper-slide"
          v-for="(categorys, index) in categorysArr"
          :key="index"
        >
          <li v-for="(category, index) in categorys" :key="index">
            <img :src="`${baseImageUrl}${category.image_url}`" />
            <div>{{ category.title }}</div>
          </li>
        </ul>
      </div>
      <!-- 分页器 -->
      <!-- 依旧失效？？？？ -->
      <div class="swiper-pagination"></div>
    </nav>
    <img src="../imgs/msite_back.svg" alt="" v-else>
    <!-- 创建优惠食品列表外部容器 -->
    <div class="discount-foods-wrapper">
      <!-- 列表标题 -->
      <div class="discount-foods-title">
        <div class="left">
          <div class="highlight">神价格</div>
          <div>这么买更实惠</div>
        </div>
        <div class="right">
          <span>更多</span>
          <i class="iconfont icon-youjiantou_huaban"></i>
        </div>
      </div>
      <!-- 列表容器 -->
      <ul class="discount-foods-list">
        <li>
          <img src="../imgs/dcfl01.png" />
          <div class="foods-title">【新客体验】日限购买1份</div>
          <div class="price">
            <span class="nowPrice"
              >￥
              <span class="dangerous">16.38</span>
            </span>
            <span class="oldPrice">￥23.5</span>
          </div>
        </li>
        <li>
          <img src="../imgs/dcfl02.png" />
          <div class="foods-title">拌云吞</div>
          <div class="price">
            <span class="nowPrice"
              >￥
              <span class="dangerous">19</span>
            </span>
          </div>
        </li>
        <li>
          <img src="../imgs/dcfl03.png" />
          <div class="foods-title">新鲜猪杂</div>
          <div class="price">
            <span class="nowPrice"
              >￥
              <span class="dangerous">14.88</span>
            </span>
            <span class="oldPrice">￥22.8</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 创建附近商家外部容器 -->
    <div class="nearby-businesses-wrapper">
      <div class="nearby-businesses-title">附近商家</div>
      <!-- 创建商家分类选项列表容器 -->
      <ul class="filter-wrapper">
        <li>
          <span>综合排序</span>
          <i class="iconfont icon-sanjiaodown"></i>
        </li>
        <li>
          <span>销量高</span>
        </li>
        <li>
          <span>速度快</span>
        </li>
        <li>
          <span>津贴优惠</span>
        </li>
        <li>
          <span>筛选</span>
          <i class="iconfont icon-sanjiaodown"></i>
        </li>
      </ul>
      <ShopList />
    </div>
    <!-- 空白区域 -->
    <div class="space"></div>
  </div>
</template>

<script>
// 引入swiper.js
import Swiper from "swiper";
// 引入swiper.css
import "swiper/swiper.min.css";

import { mapState } from "vuex";

import ShopList from "../../components/ShopList/ShopList.vue";
export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  components: {
    ShopList,
  },
  mounted() {
    // 异步获取食品分类列表，在dispatch中传入对应的actions
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
  computed: {
    // 使用mapState映射，在数组中传入state中对应的属性名
    ...mapState(["address", "categorys"]),

    // 根据一维数组categorys生成一个二维数组
    // 小数组中的元素个数最大是10
    categorysArr() {
      const { categorys } = this;
      // 准备空的二维数组
      const arr = [];
      // 创建小数组
      let minArr = [];
      // 遍历categorys
      categorys.forEach((c) => {
        // 如果当前minArr已经满了，创建新的数组
        if (minArr.length === 10) {
          minArr = [];
        }
        // 如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到minArr
        minArr.push(c);
      });
      return arr;
    },
  },
  watch: {
//** 经典问题一：实现异步创建swiper对象实现轮播
    categorys(value) {
      //categorys数组中有数据了，在异步更新界面之前执行了
      // 延迟执行方式：
      // 1、延时定时器；（不推荐）
      // 2、vue.$nextTick() （推荐）

      // 创建一个swiper实例对象，实现轮播
      // 创建时期：当列表加载完成后
      this.$nextTick(() => {//一旦完成界面更新，立即调用，此条语句写在更新数据以后
        new Swiper(".swiper-container", {
          // 配置对象
          loop: true, //可以循环轮播
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  font-size: 100/375 * 40vw;
  min-width: 375px;
  box-sizing: border-box;
}
html body {
  height: 667px;
  background-color: #f4f4f4;
}
html body .position-wrapper {
  background-image: linear-gradient(to right, #ffe14e, #ffc84d);
  height: 2rem;
  padding: 0.75rem 0;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 2rem;
}
html body .position-wrapper .icon-weizhi {
  font-size: 1rem;
  font-weight: bold;
}
html body .position-wrapper .icon-youjiantou_huaban {
  font-size: 0.3rem;
}
html body .bgcolor {
  background-image: linear-gradient(to right, #ffe14e, #ffc84d);
}
html body .bgcolor .header-wrapper {
  background-color: #fdfdfd;
  padding: 0.75rem;
  border-radius: 1.4375rem 1.4375rem 0 0;
}
html body .bgcolor .header-wrapper .search-wrapper .search {
  background-color: #f1f1f1;
  height: 1.25rem;
  border-radius: 0.875rem;
  font-size: 0.5rem;
  padding: 0.5rem 0;
  padding-left: 1rem;
  line-height: 1.25rem;
  color: #a4a3a0;
}
html body .bgcolor .header-wrapper .search-wrapper .search .icon-sousuo-02 {
  font-size: 0.5rem;
}
html body .bgcolor .header-wrapper .search-wrapper .search-recommend-wrapper {
  padding-top: 0.5rem;
}
html
  body
  .bgcolor
  .header-wrapper
  .search-wrapper
  .search-recommend-wrapper
  .search-recommend-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
html
  body
  .bgcolor
  .header-wrapper
  .search-wrapper
  .search-recommend-wrapper
  .search-recommend-list
  li {
  background-color: #f1f1f1;
  font-size: 0.4rem;
  padding: 0.3rem;
  margin: 0 0.3rem;
  border-radius: 0.5rem;
}
html body .swiper-container {
  background-color: #f5f5f5;
  margin: 0.75rem;
}
html body .swiper-container .swiper-wrapper .swiper-slide {
  width: 21rem !important;
  background-color: #fff;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5rem;
}
html body .swiper-container .swiper-wrapper .swiper-slide li {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
html body .swiper-container .swiper-wrapper .swiper-slide li img {
  width: 3.15rem;
  height: 3.15rem;
}
html body .swiper-container .swiper-wrapper .swiper-slide li div {
  font-size: 0.4rem;
}
html body .discount-foods-wrapper {
  background-color: #f5f5f5;
  padding: 0.75rem;
  padding-top: 0;
}
html body .discount-foods-wrapper .discount-foods-title {
  background-color: #fff;
  padding: 0 0.75rem;
  border-radius: 0.75rem 0.75rem 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 3rem;
  color: #6d6f6f;
  font-size: 0.9rem;
}
html body .discount-foods-wrapper .discount-foods-title .left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
html body .discount-foods-wrapper .discount-foods-title .left .highlight {
  color: #f7604b;
  font-size: 1.5rem;
  font-weight: bold;
  padding-right: 0.45rem;
}
html body .discount-foods-wrapper .discount-foods-list {
  padding: 0.75rem;
  padding-top: 0;
  background-color: #fff;
  border-radius: 0 0 0.75rem 0.75rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
}
html body .discount-foods-wrapper .discount-foods-list li {
  font-weight: bold;
}
html body .discount-foods-wrapper .discount-foods-list li img {
  width: 7.875rem;
  height: 5.25rem;
  padding-right: 0.4rem;
  border-radius: 0.75rem;
}
html body .discount-foods-wrapper .discount-foods-list li .foods-title {
  width: 7.875rem;
  font-size: 0.9rem;
  white-space: nowrap;
  /* 溢出内容隐藏 */
  overflow: hidden;
  /* 溢出内容变为省略 */
  text-overflow: ellipsis;
}
html body .discount-foods-wrapper .discount-foods-list li .price {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}
html body .discount-foods-wrapper .discount-foods-list li .price .nowPrice {
  color: #f7604b;
  font-size: 0.4rem;
}
html
  body
  .discount-foods-wrapper
  .discount-foods-list
  li
  .price
  .nowPrice
  .dangerous {
  font-size: 1.4rem;
}
html body .discount-foods-wrapper .discount-foods-list li .price .oldPrice {
  color: #afafaf;
  font-size: 0.4rem;
  text-decoration: line-through;
}
html body .nearby-businesses-wrapper {
  background-color: #f5f5f5;
  padding: 0.75rem;
  padding-top: 0;
}
html body .nearby-businesses-wrapper .nearby-businesses-title {
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.75rem 0;
  color: #232426;
}
html body .nearby-businesses-wrapper .filter-wrapper {
  padding: 0.75rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 0.85rem;
  color: #5e5f61;
}
html body .nearby-businesses-wrapper .filter-wrapper .icon-sanjiaodown {
  font-size: 0.4rem;
  color: #d3d3d3;
}
html body .space {
  height: 4rem;
}
</style>