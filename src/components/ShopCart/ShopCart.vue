<template>
  <footer>
    <!-- 黑色结算盒子 -->
    <div class="settlement-box">
      <!-- 点击可查看订单 -->
      <div class="view-order" @click="toggleShow()">
        <div>
          <i class="iconfont icon-waimai" :class="{ on: totalCount }"></i>
          <!-- 订单数量 -->
          <div class="number" :class="{ off: !totalCount }">
            {{ totalCount }}
          </div>
        </div>
        <div>
          <div class="total-price">¥{{ totalPrice }}</div>
          <div class="tips">预估配送费¥{{ info.deliveryPrice }}</div>
        </div>
      </div>
      <!-- 未选显示起送提示，不足显示差额，满足起送显示结算按钮 -->
      <div class="is-settlement">
        <!-- 起送提示 -->
        <div class="deliveryPrice" v-if="totalPrice === 0">
          ¥{{ info.minPrice }}起送
        </div>
        <!-- 差额显示 -->
        <div
          class="difference"
          v-else-if="totalPrice > 0 && totalPrice < info.minPrice"
        >
          差¥{{ info.minPrice - totalPrice }}起送
        </div>
        <!-- 结算按钮 -->
        <div class="settlement" v-else>结算</div>
        <div>支持代付</div>
      </div>
    </div>
    <!-- 结算订单时的透明黑色背景 -->
    <div class="curtain" v-show="listShow">
      <!-- 结算订单列表容器 -->
      <div class="settlement-order-list-wrapper">
        <div class="discount-tip">
          <span class="highlight">减</span>
          再买
          <span class="dangerous">13元</span>
          可减
          <span class="dangerous">3元</span>
        </div>
        <div>
          <div class="left">已选商品</div>
          <div class="right" @click="clearCart">
            <i class="iconfont icon-lajitong"></i>
            <span>清空购物车</span>
          </div>
        </div>
        <!-- 订单列表 -->
        <div class="order-list-wrapper">
          <ul class="order-list">
            <li
              class="order-item"
              v-for="(food, index) in cartFoods"
              :key="index"
            >
              <img class="left" src="../imgs/sp01.png" />
              <div class="right">
                <div class="item-name">{{ food.name }}</div>
                <div class="description">({{ food.description }})</div>
                <div class="price">
                  <span>¥</span>
                  <span class="highlight">{{ food.price }}</span>
                </div>
              </div>
              <!-- 添加或减少按钮 -->
              <CartControl :food="food" />
            </li>
          </ul>
          <!-- 占位 -->
          <div class="space"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BScroll from "better-scroll";
import CartControl from "../CartControl/CartControl.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleShow() {
      if (this.totalCount) {
        //只有当总数量大于0点击才会切换显示
        this.isShow = !this.isShow;
      }
    },
    clearCart() {
// mint-ui 样式出问题，未能解决
      if(confirm("你确定清空购物车吗？")){
        this.$store.dispatch('clearCart')
      }
    },
  },
  computed: {
    ...mapState(["cartFoods", "info"]),
    ...mapGetters(["totalCount", "totalPrice"]),
    // 如果总数量为0
    // 问题：不能在get方法中改变值，未能解决
    listShow() {
      // 如果数量为0，直接不显示
      if (this.totalCount === 0) {
        this.isShow = false; //出现警告
        return false;
      }
      if (this.isShow) {
        this.$nextTick(() => {
          // 问题：无法滚动，原因：参数中应该放入包裹的类名（元素），而不是滚动的类名（元素）
          // 问题：会多次new 对象，需要判断是否已经创建过
          if (!this.scroll) {
            this.scroll = new BScroll(".order-list-wrapper", {
              click: true,
            });
          } else {
            this.scroll.refresh(); //让滚动条刷新一下，重新统计
          }
        });
      }
      return this.isShow;
    },
  },
  components: {
    CartControl,
  },
};
</script>

<style scoped>
html body #diancai footer .settlement-box {
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem 1.1rem;
  margin: 0 1.05rem;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  border-radius: 2rem;
  color: #7c7b7b;
}
html body #diancai footer .settlement-box .view-order {
  position: relative;
  display: flex;
  align-items: center;
}
html body #diancai footer .settlement-box .view-order .icon-waimai {
  font-size: 1.7rem;
  padding-right: 0.5rem;
}
html body #diancai footer .settlement-box .view-order .icon-waimai.on {
  color: #fee116;
}
html body #diancai footer .settlement-box .view-order .number {
  position: absolute;
  top: -0.3rem;
  left: 1.5rem;
  color: #ffd4d1;
  background-color: #fe3e33;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  text-align: center;
  border-radius: 50%;
}
html body #diancai footer .settlement-box .view-order .number.off {
  display: none;
}
html body #diancai footer .settlement-box .view-order .total-price {
  color: #fff;
  font-size: 1.5rem;
}
html body #diancai footer .settlement-box .view-order .tips {
  font-size: 0.7rem;
  padding-top: 0.5rem;
}
html body #diancai footer .settlement-box .is-settlement {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
html body #diancai footer .settlement-box .is-settlement > div:last-child {
  color: #2e2e2e;
  font-size: 0.7rem;
}
html body #diancai footer .curtain {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(29, 29, 29, 0.678);
  width: 100%;
  height: 667px;
}
html body #diancai footer .curtain .settlement-order-list-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 4;
  width: 100%;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .discount-tip {
  background-color: #fff6e5;
  text-align: center;
  padding: 0.4rem 0;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.8rem;
  font-weight: bold;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .discount-tip
  .highlight {
  background-color: #fb4f45;
  display: inline-block;
  color: #ffd4d1;
  font-size: 0.7rem;
  padding: 0.2rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .discount-tip
  .dangerous {
  color: #ff5044;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .discount-tip
  + div {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1rem 1.7rem 1rem;
  font-size: 0.7rem;
  color: #545454;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .discount-tip
  + div
  .right {
  display: flex;
  align-items: center;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list-wrapper {
  background-color: #fff;
  overflow: hidden;
  height: 10rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item {
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem 1rem;
  border-top: 1.5px solid rgba(202, 202, 202, 0.2);
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .left {
  width: 5rem;
  height: 5rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right {
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .item-name {
  font-size: 1.3rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .description {
  font-size: 0.7rem;
  color: #949393;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .price {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #fb4f45;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .price
  .highlight {
  font-size: 1.3rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .increment-or-decrement-btn {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .increment-or-decrement-btn
  > .iconfont {
  font-size: 0.9rem;
  padding: 0.27rem;
  border-radius: 50%;
  font-weight: bold;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .increment-or-decrement-btn
  .icon-iconfront- {
  color: #c5c5c5;
  padding: 0.18rem;
  border: 2px solid #c5c5c5;
}
html
  body
  #diancai
  footer
  .curtain
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .increment-or-decrement-btn
  .icon-tianjia1 {
  background-color: #ffd161;
}
html body #diancai footer .curtain .settlement-order-list-wrapper .space {
  background-color: #fff;
  height: 3.8rem;
}
</style>