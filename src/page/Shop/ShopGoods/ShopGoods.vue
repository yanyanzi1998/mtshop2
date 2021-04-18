<template>
  <div>
    <!-- 点菜栏目 -->
    <div id="diancai">
      <!-- 创建食物列表外部容器 -->
      <nav class="food-list-wrapper">
        <!-- 创建菜单列表 -->
        <div class="food-list">
          <!-- 创建左侧分类列表 -->
          <div class="classification-wrapper">
            <ul class="classification left">
              <!-- class='current' -->
              <li
                v-for="(good, index) in goods"
                :key="index"
                :class="{ current: index === currentIndex }"
                @click="clickMenuItem(index)"
              >
                <img :src="good.icon" class="icon" v-if="good.icon" />
                <span>{{ good.name }}</span>
              </li>
            </ul>
          </div>
          <!-- 创建右侧食物详细列表 -->
          <div class="food-item-list-wrapper">
            <ul class="food-item-list right">
              <li v-for="(good, index) in goods" :key="index" class="food-item">
                <!-- 每一个子类的列表 -->
                <ul>
                  <!-- 分类标题 -->
                  <div class="food-classification-title">{{ good.name }}</div>
                  <!-- 每一个子类列表的成员 -->
                  <li v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
                    <!-- 创建食物外部容器 -->
                    <div class="food-item-wrapper">
                      <img class="left" :src="food.image" />
                      <div class="right">
                        <div class="food-item-name">
                          {{ food.name }}
                        </div>
                        <div class="using">
                          {{ food.info }}
                        </div>
                        <div>
                          <span class="sellcount"
                            >月售{{ food.sellcount }}</span
                          >
                          <span class="praise">赞{{ food.rating }}</span>
                        </div>
                        <div>
                          <span class="dangerous">¥{{ food.price }}</span>
                          <span class="description"
                            >/{{ food.description }}</span
                          >
                        </div>
                      </div>
                      <CartControl :food="food" />
                    </div>
                  </li>
                </ul>
              </li>
              <!-- 占位 -->
              <div class="space"></div>
            </ul>
          </div>
        </div>
      </nav>
      <ShopCart/>
    </div>
    <!-- 结算订单列表容器 -->
    <div class="settlement-order-list-wrapper hidden">
      <div class="discount-tip">
        <span class="highlight">减</span>
        再买
        <span class="dangerous">13元</span>
        可减
        <span class="dangerous">3元</span>
      </div>
      <div>
        <div class="left">已选商品</div>
        <div class="right">
          <i class="iconfont icon-lajitong"></i>
          <span>清空购物车</span>
        </div>
      </div>
      <!-- 订单列表 -->
      <ul class="order-list">
        <li class="order-item">
          <img class="left" src="../imgs/sp01.png" />
          <div class="right">
            <div class="item-name">蔗葛马蹄水（热）</div>
            <div class="description">(约440毫升)</div>
            <div class="price">
              <span>¥</span>
              <span class="highlight">7</span>
            </div>
          </div>
          <!-- 添加或减少按钮 -->
          <div class="increment-or-decrement-btn">
            <i class="iconfont icon-iconfront-"></i>
            <span>3</span>
            <i class="iconfont icon-tianjia1"></i>
          </div>
        </li>
        <li class="order-item">
          <img class="left" src="../imgs/sp01.png" />
          <div class="right">
            <div class="item-name">蔗葛马蹄水（热）</div>
            <div class="description">(约440毫升)</div>
            <div class="price">
              <span>¥</span>
              <span class="highlight">7</span>
            </div>
          </div>
          <!-- 添加或减少按钮 -->
          <div class="increment-or-decrement-btn">
            <i class="iconfont icon-iconfront-"></i>
            <span>3</span>
            <i class="iconfont icon-tianjia1"></i>
          </div>
        </li>
        <li class="order-item">
          <img class="left" src="../imgs/sp01.png" />
          <div class="right">
            <div class="item-name">蔗葛马蹄水（热）</div>
            <div class="description">(约440毫升)</div>
            <div class="price">
              <span>¥</span>
              <span class="highlight">7</span>
            </div>
          </div>
          <!-- 添加或减少按钮 -->
          <div class="increment-or-decrement-btn">
            <i class="iconfont icon-iconfront-"></i>
            <span>3</span>
            <i class="iconfont icon-tianjia1"></i>
          </div>
        </li>
        <!-- 占位 -->
        <div class="space"></div>
      </ul>
    </div>
    <!-- 结算订单时的透明黑色背景 -->
    <div class="curtain hidden"></div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Bscroll from "better-scroll";
import CartControl from "../../../components/CartControl/CartControl.vue";
import Food from "../../../components/Food/Food.vue"
import ShopCart from '../../../components/ShopCart/ShopCart.vue'
export default {
  data() {
    return {
      scrollY: 0, //右侧滑动的y轴坐标实时位置
      tops: [], //所有分类的top值
      food:{} //点击显示大图的对应food
    };
  },
  mounted() {
    this.$store.dispatch("getGoods", () => {
      this._initScroll(); //初始化滚动
      this._initTops(); //初始获取top值
    });
  },
  computed: {
    ...mapState(["goods"]),
    currentIndex() {
      // 得到条件数据
      const { scrollY, tops } = this;
      // 根据条件计算产生一个结果
      const index = tops.findIndex((top, index) => {
        // scrollY >= 当前top && scrollY < 下一个top
        return scrollY >= top && scrollY < tops[index + 1];
      });
      // 返回结果
      return index;
    },
  },
  methods: {
    // 初始化滚动
    _initScroll() {
      this.$nextTick(() => {
        // 列表显示后创建滚动
        new Bscroll(".classification-wrapper", {
          click: true,
        });
        this.foodsScroll = new Bscroll(".food-item-list-wrapper", {
          probeType: 2, //事件派发频率类型：惯性滑动不会触发
          click: true, //需要配置才能分配事件监听
        });
        // 对右侧食品列表绑定滚动事件监听
        this.foodsScroll.on("scroll", ({ x, y }) => {
          this.scrollY = Math.abs(y);
        });
        // 给右侧绑定滚动结束监听，解决惯性停止无法监听
        this.foodsScroll.on("scrollEnd", ({ x, y }) => {
          this.scrollY = Math.abs(y);
        });
      });
    },
    // 初始获取top值
    _initTops() {
      // 初始化化tops
      const tops = [];
      let top = 0;
      tops.push(top);
      // 收集tops
      // 找到所有分类title
      // this.$refs有点问题，待解决
      const lis = document.getElementsByClassName("food-item");
      Array.prototype.slice.call(lis).forEach((li) => {
        top += li.clientHeight; //clientHeight代表当前元素高度
        tops.push(top);
      });
      // 更新状态
      this.tops = tops;
    },
    // 点击左侧菜单右侧滚动到相应位置
    clickMenuItem(index) {
      // 使右侧列表滑动到对应的位置
      // 1、先得到目标位置
      const scrollY = this.tops[index];
      // 2、立即更新scrollY（点击的分类项成为当前分类）
      this.scrollY = scrollY;
      // 3、平滑滚动右侧列表
      this.foodsScroll.scrollTo(0, -scrollY, 300);
    },
    // 显示点击的food
    showFood(food){
      // 设置food
      this.food = food
      // 显示food组件
      // 父组件调用子组件对象的方法
      this.$refs.food.toggleShow()
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  },
};
</script>

<style scoped>
html body #diancai {
  position: relative;
  margin-top: 15rem;
  padding: 0.75rem;
  color: #373737;
}
html body #diancai.hidden {
  display: none;
}
html body #diancai .food-list {
  display: flex;
}
html body #diancai .food-list .classification-wrapper {
  height: 22rem;
  overflow: hidden;
}
html body #diancai .food-list .classification {
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
}
html body #diancai .food-list .classification li {
  width: 3.4rem;
  padding: 0.4rem;
  color: #aaaaaa;
  font-size: 0.9rem;
  line-height: 1.5rem;
}
html body #diancai .food-list .classification li.current {
  color: #373737;
  font-weight: bold;
  background-color: #fff;
}
html body #diancai .food-list .classification li .icon {
  width: 1rem;
  height: 1rem;
}
html body #diancai .food-list .food-item-list-wrapper {
  height: 25.2rem;
  overflow: hidden;
}
html body #diancai .food-list .food-item-list {
  background-color: #fff;
  padding-left: 0.5rem;
}
html body #diancai .food-list .food-item-list li > ul {
  width: 17rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  .food-classification-title {
  background-color: #fff;
  font-weight: bold;
  padding: 0.75rem 0;
  color: #5f5f5f;
}
html body #diancai .food-list .food-item-list li > ul > li .food-item-wrapper {
  display: flex;
  position: relative;
  padding: 1.1rem 0;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .left {
  width: 6rem;
  height: 6rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right {
  padding-left: 0.5rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .food-item-name {
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .using {
  /* display: flex; */
  width: 10rem;
  font-size: 0.8rem;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .using
  > li {
  background-color: #f1f1f1;
  margin-right: 0.2rem;
  padding: 0.1rem;
  color: #7f7f7f;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .using
  + div {
  color: #b9b9b9;
  font-size: 0.7rem;
  padding-bottom: 0.65rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .using
  + div
  + div {
  color: #d5d5d5;
  font-size: 0.7rem;
}
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .right
  .using
  + div
  + div
  .dangerous {
  font-size: 1.35rem;
  color: #fb524b;
  font-weight: bold;
}

html body #diancai .food-list .food-item-list .space {
  height: 3.5rem;
}

html body .settlement-order-list-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 4;
  width: 100%;
}
html body .settlement-order-list-wrapper.hidden {
  display: none;
}
html body .settlement-order-list-wrapper .discount-tip {
  background-color: #fff6e5;
  text-align: center;
  padding: 0.4rem 0;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 0.8rem;
  font-weight: bold;
}
html body .settlement-order-list-wrapper .discount-tip .highlight {
  background-color: #fb4f45;
  display: inline-block;
  color: #ffd4d1;
  font-size: 0.7rem;
  padding: 0.2rem;
}
html body .settlement-order-list-wrapper .discount-tip .dangerous {
  color: #ff5044;
}
html body .settlement-order-list-wrapper .discount-tip + div {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1rem 1.7rem 1rem;
  font-size: 0.7rem;
  color: #545454;
}
html body .settlement-order-list-wrapper .discount-tip + div .right {
  display: flex;
  align-items: center;
}
html body .settlement-order-list-wrapper .order-list {
  overflow: scroll;
  height: 10rem;
}
html body .settlement-order-list-wrapper .order-list .order-item {
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem 1rem;
  border-top: 1.5px solid rgba(202, 202, 202, 0.2);
}
html body .settlement-order-list-wrapper .order-list .order-item .left {
  width: 5rem;
  height: 5rem;
}
html body .settlement-order-list-wrapper .order-list .order-item .right {
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
html
  body
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .item-name {
  font-size: 1.3rem;
}
html
  body
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .right
  .description {
  font-size: 0.7rem;
  color: #949393;
}
html body .settlement-order-list-wrapper .order-list .order-item .right .price {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  color: #fb4f45;
}
html
  body
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
  .settlement-order-list-wrapper
  .order-list
  .order-item
  .increment-or-decrement-btn
  .icon-tianjia1 {
  background-color: #ffd161;
}
html body .settlement-order-list-wrapper .space {
  background-color: #fff;
  height: 3.8rem;
}
html body .curtain {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(29, 29, 29, 0.678);
  width: 100%;
  height: 667px;
}
html body .curtain.hidden {
  display: none;
}
</style>