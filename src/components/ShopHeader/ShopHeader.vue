<template>
  <!-- 创建头部外部容器 -->
  <header class="header-wrapper">
    <!-- 背景图片 -->
    <img class="bg-image" :src="info.bgImg"/>
    <!-- 创建按钮容器 -->
    <div class="back-btn" @click="$router.back()">
      <i class="iconfont icon-xiangzuo"></i>
    </div>
    <!-- 创建商家信息外部容器 -->
    <div class="shop-info-wrapper">
      <!-- 商家信息上部分 -->
      <div class="shop-info-top">
        <img class="top-left" :src="info.avatar"/>
        <div class="top-right">
          <div class="title">
            <div class="shop-info-title">{{info.name}}</div>
            <div class="subscribe-btn">关注</div>
          </div>
          <div class="description">
            <div class="honor">
              <i class="iconfont icon-gerenrongyuchenghaoshenqingchaxun"></i>
              <span>乐从食街/德华路甜点热销榜第2名</span>
            </div>
            <div class="hr"></div>
            <div class="delivery">
              <i class="iconfont icon-shizhong"></i>
              <span>配送约{{info.deliveryTime}}分钟</span>
            </div>
          </div>
        </div>
      </div>
      <div class="notice">{{info.bulletin||' 公告：(满减活动不要点折扣商品) 另本店较下午茶时段较忙，有问题请联系客服'}}
      </div>
      <ul class="discount-list">
        <li>
          <ul>
            <li>20减1</li>
            <li>100减8</li>
            <li>300减28</li>
            <li class="highlight">津贴再减2元</li>
          </ul>
        </li>
        <li>7.88折起</li>
        <li>领2元券</li>
        <li>领8元券</li>
      </ul>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['info'])
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: 0;
}
html {
  font-size: 100/375*40vw;
  min-width: 375px;
  box-sizing: border-box;
}
html body {
  position: relative;
}
html body .header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
}
html body .header-wrapper .bg-image {
  width: 100%;
  height: 5rem;
}
html body .header-wrapper .back-btn {
  position: absolute;
  background-color: rgba(138, 138, 138, 0.5);
  top: 1rem;
  left: 1rem;
  width: 3rem;
  height: 2rem;
  border: 0.5px solid rgba(185, 185, 185, 0.5);
  border-radius: 1rem;
}
html body .header-wrapper .back-btn .icon-xiangzuo {
  color: #fff;
  font-size: 1.25rem;
  line-height: 2rem;
  padding-left: 0.8rem;
}
html body .header-wrapper .shop-info-wrapper {
  position: relative;
  top: -1.45rem;
  background-color: #fff;
  margin: 0 0.5rem;
  padding: 0.5rem;
  padding-right: 0;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(168, 168, 168, 0.2);
}
html body .header-wrapper .shop-info-wrapper .shop-info-top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #fff;
  padding-right: 0.5rem;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-left {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right {
  padding-left: 0.5rem;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right .title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #343434;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right .title .shop-info-title {
  font-size: 1.3rem;
  line-height: 2rem;
  width: 14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right .title .subscribe-btn {
  line-height: 1.5rem;
  padding: 0 0.5rem;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 4px;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right .description {
  display: flex;
  font-size: 0.5rem;
}
html body .header-wrapper .shop-info-wrapper .shop-info-top .top-right .description .iconfont {
  font-size: 0.5rem;
  color: #fca87a;
  font-weight: bold;
}
html body .header-wrapper .shop-info-wrapper .notice {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.7rem;
  color: #b5b5b5;
  padding: 0.5rem 0.5rem 0.5rem 0;
}
html body .header-wrapper .shop-info-wrapper .discount-list {
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  font-size: 0.7rem;
  color: #fe8e79;
  white-space: nowrap;
  overflow: hidden;
}
html body .header-wrapper .shop-info-wrapper .discount-list > li {
  border: 1px solid #fe8e79;
  border-radius: 3px;
  padding: 2px 5px;
  margin-right: 3px;
}
html body .header-wrapper .shop-info-wrapper .discount-list > li:first-of-type ul {
  display: flex;
}
html body .header-wrapper .shop-info-wrapper .discount-list > li:first-of-type ul .highlight {
  background-color: #ffeff4;
}
html body .header-wrapper .shop-info-wrapper .discount-list > li:first-of-type ul > li::after {
  content: ' | ';
  font-size: 0.4rem;
  line-height: 0.6rem;
}
html body .header-wrapper .shop-info-wrapper .discount-list > li:first-of-type ul > :last-child::after {
  content: '';
}
</style>