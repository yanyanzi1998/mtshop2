<template>
  <div>
    <!-- 头部菜单栏切换外部容器 -->
    <header>
      <div class="title">订单</div>
      <ul class="menu">
        <li class="on">全部订单</li>
        <li>待评价</li>
        <li>退款</li>
      </ul>
    </header>
    <!-- 订单列表外部容器 -->
    <!-- 以下全部订单 -->
    <nav class="all-order">
      <ul class="order-list">
        <!-- 订单详情 -->
        <li>
          <div class="top">
            <div class="top-left">
              <img src="../imgs/sj03.png" />
              <div class="shop-name-wrapper">
                <span class="shop-name">胡师爷手撕鸡(乐从店)</span>
                <i class="iconfont icon-youjiantou_huaban"></i>
              </div>
            </div>
            <div class="top-right">已完成</div>
          </div>
          <div class="bottom">
            <ul class="foods">
              <li>
                <span>桂林米粉，加粉</span>
                <span>x1</span>
              </li>
              <li>
                <span>原味螺蛳粉+煎蛋</span>
                <span>x1</span>
              </li>
            </ul>
            <div class="payment-wrapper">
              <span>共计2件商品,实付</span>
              <span class="payment">¥13.5</span>
            </div>
            <div class="btn-wrapper">
              <div class="order-again">再来一单</div>
              <div class="to-comment">去评论</div>
            </div>
          </div>
        </li>
        <!-- 订单详情 -->
        <li>
          <div class="top">
            <div class="top-left">
              <img src="../imgs/sj03.png" />
              <div class="shop-name-wrapper">
                <span class="shop-name">胡师爷手撕鸡(乐从店)</span>
                <i class="iconfont icon-youjiantou_huaban"></i>
              </div>
            </div>
            <div class="top-right">已完成</div>
          </div>
          <div class="bottom">
            <ul class="foods">
              <li>
                <span>桂林米粉，加粉</span>
                <span>x1</span>
              </li>
              <li>
                <span>原味螺蛳粉+煎蛋</span>
                <span>x1</span>
              </li>
            </ul>
            <div class="payment-wrapper">
              <span>共计2件商品,实付</span>
              <span class="payment">¥13.5</span>
            </div>
            <div class="btn-wrapper">
              <div class="order-again">再来一单</div>
            </div>
          </div>
        </li>
        <!-- 订单详情 -->
        <li>
          <div class="top">
            <div class="top-left">
              <img src="../imgs/sj03.png" />
              <div class="shop-name-wrapper">
                <span class="shop-name">胡师爷手撕鸡(乐从店)</span>
                <i class="iconfont icon-youjiantou_huaban"></i>
              </div>
            </div>
            <div class="top-right">已完成</div>
          </div>
          <div class="bottom">
            <ul class="foods">
              <li>
                <span>桂林米粉，加粉</span>
                <span>x1</span>
              </li>
              <li>
                <span>原味螺蛳粉+煎蛋</span>
                <span>x1</span>
              </li>
            </ul>
            <div class="payment-wrapper">
              <span>共计2件商品,实付</span>
              <span class="payment">¥13.5</span>
            </div>
            <div class="btn-wrapper">
              <div class="order-again">再来一单</div>
            </div>
          </div>
        </li>
        <!-- 订单详情 -->
        <li>
          <div class="top">
            <div class="top-left">
              <img src="../imgs/sj03.png" />
              <div class="shop-name-wrapper">
                <span class="shop-name">胡师爷手撕鸡(乐从店)</span>
                <i class="iconfont icon-youjiantou_huaban"></i>
              </div>
            </div>
            <div class="top-right">已完成</div>
          </div>
          <div class="bottom">
            <ul class="foods">
              <li>
                <span>桂林米粉，加粉</span>
                <span>x1</span>
              </li>
              <li>
                <span>原味螺蛳粉+煎蛋</span>
                <span>x1</span>
              </li>
            </ul>
            <div class="payment-wrapper">
              <span>共计2件商品,实付</span>
              <span class="payment">¥13.5</span>
            </div>
            <div class="btn-wrapper">
              <div class="order-again">再来一单</div>
            </div>
          </div>
        </li>
      </ul>
      <!-- 底部提醒 -->
      <div class="dibutixing">
        <div></div>
        <span>已经到底啦</span>
        <div></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  font-size: 100/375*40vw;
  min-width: 375px;
  box-sizing: border-box;
}
html body {
  background-color: #fff;
  color: #838383;
  position: relative;
}
html body header {
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
}
html body header .title {
  text-align: center;
  color: #000;
  font-size: 1.2rem;
  line-height: 3rem;
}
html body header .menu {
  display: flex;
  justify-content: space-between;
  padding: 0 2.3rem;
  font-size: 0.9rem;
}
html body header .menu > li {
  padding: 1rem 0;
}
html body header .menu > li.on {
  color: #ffd161;
  font-weight: bold;
  border-bottom: 3px solid #ffd161;
}
html body .all-order {
  background-color: #fff;
  margin-top: 6rem;
  height: 31rem;
  overflow: scroll;
}
html body .all-order .order-list > li {
  border-bottom: 1.75px solid #f0f0f0;
  padding: 0.6rem 0.75rem;
}
html body .all-order .order-list > li .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
html body .all-order .order-list > li .top .top-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
html body .all-order .order-list > li .top .top-left img {
  width: 3rem;
  height: 3rem;
  padding-right: 0.3rem;
}
html body .all-order .order-list > li .top .top-left .shop-name-wrapper {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #343434;
  font-weight: bold;
}
html body .all-order .order-list > li .top .top-left .shop-name-wrapper .shop-name {
  width: 11rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
html body .all-order .order-list > li .top .top-left .shop-name-wrapper .icon-youjiantou_huaban {
  color: #838383;
  font-weight: normal;
}
html body .all-order .order-list > li .top .top-right {
  font-size: 0.95rem;
}
html body .all-order .order-list > li .bottom {
  margin-left: 3.5rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1.75px solid #f1f1f1;
}
html body .all-order .order-list > li .bottom .foods > li {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  line-height: 1.2rem;
}
html body .all-order .order-list > li .bottom .payment-wrapper {
  display: flex;
  justify-content: flex-end;
  font-size: 0.85rem;
  line-height: 1.6rem;
}
html body .all-order .order-list > li .bottom .payment-wrapper .payment {
  color: #343434;
  font-weight: bold;
}
html body .all-order .order-list > li .bottom .btn-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
}
html body .all-order .order-list > li .bottom .btn-wrapper > div {
  line-height: 2.3rem;
  width: 5.6rem;
  text-align: center;
  margin-left: 0.4rem;
  color: #343434;
  font-size: 0.9rem;
}
html body .all-order .order-list > li .bottom .btn-wrapper .order-again {
  border: #dbdbdb 1.75px solid;
}
html body .all-order .order-list > li .bottom .btn-wrapper .to-comment {
  background-color: #ffd161;
}
html body .all-order .dibutixing {
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin: 2rem 0;
}
html body .all-order .dibutixing > div {
  height: 1.75px;
  width: 5rem;
  background-color: #f0f0f0;
  margin: 0 0.75rem;
}
</style>