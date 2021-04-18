<template>
  <!-- 创建商家列表外部容器 -->
  <nav class="nearby-businesses-list">
    <ul v-if="shops.length">
      <li class="item" v-for="(shop,index) in shops" :key="index" @click="$router.push('/shop')">
        <div class="left">
          <img :src="`/static/imgs/sj0${index+1}.png`" />
        </div>
        <div class="right">
          <span class="businesses-title">{{shop.name}}</span>
          <!-- 商家信息 -->
          <div class="businesses-info-top">
            <div class="businesses-info-top-left">
              <div>
                <span class="rating">
                  <!-- <i class="iconfont icon-xingxing"></i> -->
                  <Star :score="shop.rating" :size="24"/>
                  <span>{{shop.rating}}</span>
                </span>
                <span class="sellcount"> 月售{{shop.recent_order_num}} </span>
              </div>
              <div>
                <span class="startSending"> 起送￥{{shop.float_minimum_order_amount}} </span>
                <span class="deliveryPrice">{{shop.piecewise_agent_fee.tips}}</span>
                <span class="per-capita-cost"> 人均￥35 </span>
              </div>
            </div>
            <div class="businesses-info-top-right">
              <div>
                <span class="deliveryTime">{{shop.order_lead_time}}</span>
                <span class="distance">{{shop.distance}}</span>
              </div>
              <div>
                <span class="support"> 准时宝 </span>
                <span class="deliveryType">{{shop.delivery_mode.text}}</span>
              </div>
            </div>
          </div>
          <div class="description">
            <span>乐从食街/德华路甜点热搜销榜第2名</span>
          </div>
          <div class="discount">
            <ul>
              <li v-for="(support,index) in shop.supports" :key="index">{{support.name}}</li>
              <!-- <li>100减8</li>
              <li>300减28</li> -->
              <li class="dangerous">津贴再减2元</li>
            </ul>
            <i class="iconfont icon-sanjiaodown"></i>
          </div>
        </div>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(item,index) in 6" :key="index">
        <img src="./imgs/shop_back.svg">
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

import Star from '../Star/Star.vue'
export default {
  computed:{
    ...mapState(['shops'])
  },
  components:{
    Star
  }
};
</script>

<style>
html body .nearby-businesses-wrapper .nearby-businesses-list {
  overflow: hidden;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.75rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .left {
  padding-right: 0.75rem;
  padding-top: 0.4rem;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .left img {
  width: 3.7rem;
  height: 3rem;
  border-radius: 0.5rem;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-title {
  font-size: 1.05rem;
  font-weight: bold;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-info-top {
  background-color: #fff;
  padding: 0.5rem 0;
  color: #737373;
  font-size: 0.7rem;
  line-height: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-info-top .businesses-info-top-left .icon-xingxing {
  color: #ffa101;
  font-size: 0.7rem;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-info-top .businesses-info-top-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-info-top .businesses-info-top-right .support {
  color: #ffd161;
  font-weight: bold;
  border: 2px solid #ffd161;
  border-radius: 0.4rem;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .businesses-info-top .businesses-info-top-right .deliveryType {
  background-color: #ffd161;
  padding: 0 2px;
  margin: 0 2px;
  color: #494434;
  border-radius: 0.4rem 0 0.4rem 0;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .description {
  background-color: #fef8e0;
  font-size: 0.7rem;
  display: inline-block;
  padding: 3px;
  color: #ee9631;
  margin: 0.5rem 0;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount ul {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid #e36950;
  border-radius: 2px;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount ul li {
  font-size: 0.8rem;
  color: #e36950;
  padding: 2px;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount ul li.dangerous {
  background-color: #ffeef4;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount ul li::after {
  content: ' |';
  font-size: 0.4rem;
  line-height: 0.6rem;
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount ul > :last-child::after {
  content: '';
}
html body .nearby-businesses-wrapper .nearby-businesses-list .item .right .discount .icon-sanjiaodown {
  color: #d4d4d4;
  font-size: 0.4rem;
}
html body .space {
  height: 4rem;
}
</style>