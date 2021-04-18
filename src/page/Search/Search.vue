<template>
  <div>
    <!-- 创建顶部搜索标题外部容器 -->
    <div class="top-search-wrapper">
      <i class="iconfont icon-xiangzuo" @click="$router.back()"></i>
      <span>搜索</span>
    </div>
    <!-- 创建搜索框外部容器 -->
    <!-- .prevent阻止提交表单 -->
    <form @submit.prevent="search">
      <header class="search-box-wrapper">
        <!-- 创建搜索框 -->
        <div class="search-box">
          <i class="iconfont icon-sousuo-02"></i>
          <input
            type="search"
            placeholder="北滘大树头甜品店"
            v-model="keyword"
          />
        </div>
        <button type="submit" class="submit">搜索</button>
      </header>
    </form>
    <!-- 创建热门搜索外部容器 -->
    <div
      class="hot-search-wrapper"
      v-if="!searchShops.length && keyword === ''"
    >
      <div class="title">热门搜索</div>
      <!-- 分割线 -->
      <div class="hr"></div>
      <!-- 创建搜索列表容器 -->
      <ul class="hot-search-list">
        <li>螺蛳粉</li>
        <li>沙县小吃</li>
        <li>小湘厨</li>
        <li>筒骨粉</li>
      </ul>
      <ul class="hot-search-list">
        <li>碗碗香麻辣烫</li>
        <li>柠檬茶</li>
        <li>木桶饭</li>
        <li>牛牛西厨</li>
      </ul>
    </div>
    <!-- 创建历史搜索外部容器 -->
    <div
      class="history-search-wrapper"
      v-if="!searchShops.length && keyword === ''"
    >
      <div class="title-wrapper">
        <div class="title">历史搜索</div>
        <div class="delete-history">
          <i class="iconfont icon-lajitong"></i>
        </div>
      </div>
      <div class="hr"></div>
      <!-- 历史搜索列表 -->
      <ul class="history-search-list">
        <li>沙县小吃</li>
        <li>现炸油条</li>
        <li>螺蛳粉</li>
      </ul>
    </div>

    <!-- 需要做搜索结果列表！！！ -->

    <div class="search-none" v-if="noSearchShops">抱歉，没有搜索结果</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      keyword: "",
      noSearchShops: false,
    };
  },
  computed: {
    ...mapState(["searchShops"]),
  },
  methods: {
    search() {
      // 得到搜索关键字
      const keyword = this.keyword.trim();
      // 进行搜索
      if (keyword) {
        this.$store.dispatch("searchShops", keyword);
      }
    },
  },
  watch: {
    searchShops(value) {
      if (!value.length) {
        this.noSearchShops = true;
      }
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
html body .top-search-wrapper {
  background-color: #fff;
  font-size: 1.05rem;
  font-weight: bold;
  padding: 0.75rem;
  padding-bottom: 0.5rem;
}
html body .top-search-wrapper .icon-xiangzuo {
  font-size: 1.05rem;
  font-weight: bold;
}
html body .search-box-wrapper {
  background-color: #fff;
  padding: 0.75rem;
  padding-right: 0;
  display: flex;
  justify-content: flex-start;
}
html body .search-box-wrapper .search-box {
  background-color: #f4f4f4;
}
html body .search-box-wrapper .search-box > * {
  padding: 0.6rem;
  padding-right: 0;
  color: #808080;
}
html body .search-box-wrapper .search-box .icon-sousuo-02 {
  font-size: 0.8rem;
  font-weight: bold;
}
html body .search-box-wrapper .search-box input {
  background-color: #f4f4f4;
  font-size: 0.9rem;
  border: none;
  outline: none;
  width: 17rem;
}
html body .search-box-wrapper .submit {
  background-color: #fff;
  width: 4rem;
  text-align: center;
  color: #e9ba45;
  font-size: 1.05rem;
  border: none;
}
html body .hot-search-wrapper {
  background-color: #fff;
  padding: 0.75rem 0 0 0.75rem;
  padding-right: 0;
}
html body .hot-search-wrapper .title {
  color: #808080;
  font-size: 1.05rem;
}
html body .hot-search-wrapper .hr {
  background-color: #f4f4f4;
  height: 1.5px;
  margin-top: 0.75rem;
}
html body .hot-search-wrapper .hot-search-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
html body .hot-search-wrapper .hot-search-list li {
  font-size: 0.7rem;
  color: #4e4e4e;
  padding: 0.5rem;
  margin: 0.75rem 0.55rem 0.5rem 0;
  border: 1px solid #e7e7e7;
  border-radius: 0.3rem;
}
html body .history-search-wrapper {
  margin-top: 0.55rem;
  background-color: #fff;
  padding-left: 0.75rem;
}
html body .history-search-wrapper .title-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.75rem 0 0;
}
html body .history-search-wrapper .title-wrapper .title {
  color: #808080;
  font-size: 1.05rem;
}
html body .history-search-wrapper .title-wrapper .icon-lajitong {
  color: #808080;
  font-size: 1.5rem;
}
html body .history-search-wrapper .hr {
  background-color: #f4f4f4;
  height: 1.5px;
  margin-top: 0.75rem;
}
html body .history-search-wrapper .history-search-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 3.25rem;
}
html body .history-search-wrapper .history-search-list li {
  font-size: 0.7rem;
  color: #4e4e4e;
  padding: 0.5rem;
  margin: 0.75rem 0.55rem 0.5rem 0;
  border: 1px solid #e7e7e7;
  border-radius: 0.3rem;
}
.search-none {
  text-align: center;
}
</style>