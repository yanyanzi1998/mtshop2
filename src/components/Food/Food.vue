<template>
  <!-- 食物大图描述 -->
  <div class="curtain-up" v-if="isShow">
    <div class="food-large-info-wrapper">
      <div class="food-large-info">
        <div class="food-name top">{{food.name}}</div>
        <img :src="food.image" />
        <div>
          <span class="sellcount">月售{{food.sellCount}}</span>
          <span class="praise">赞{{food.rating}}</span>
        </div>
        <span class="sign">招牌</span>
        <p class="food-info-description">
          {{food.info||'每碗都配有马蹄和粉葛，没有不要料！马蹄功效都在皮所以没有削皮，所以请放心食用！'}}
        </p>
      </div>
      <div class="footer">
        <div class="left">
          <span class="price">¥{{food.price}}</span>
          <span class="description">/{{food.description}}</span>
        </div>
        <div class="addcart right" v-if="!food.count" @click="addFoodCount">加入购物车</div>
        <CartControl :food="this.food" v-else/>
      </div>
      <!-- 关闭按钮 -->
      <div class="close" @click="toggleShow">
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CartControl from '../CartControl/CartControl.vue'
export default {
    props:{
        food:Object
    },
    data(){
        return{
            isShow:false,
        }
    },
    methods:{
        toggleShow(){
            this.isShow = !this.isShow
        },
        addFoodCount(){
            this.$store.dispatch('updateFoodCount',{isAdd:true,food:this.food})
        }
    },
    components:{
        CartControl
    }
};
</script>

<style scoped>
html body .curtain-up {
  background-color: rgba(29, 29, 29, 0.678);
  position: fixed;
  top: 0;
  width: 100%;
  height: 667px;
  z-index: 7;
}
html body .curtain-up .food-large-info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 25rem;
  width: 20rem;
  top: 6.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 6;
  font-size: 0.8rem;
  color: #949393;
}
html body .curtain-up .food-large-info-wrapper .food-large-info {
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.75rem;
  height: 23.3rem;
}
html body .curtain-up .food-large-info-wrapper .food-large-info .food-name {
  font-size: 1.2rem;
  color: #545454;
  padding-bottom: 0.75rem;
  letter-spacing: 2px;
}
html body .curtain-up .food-large-info-wrapper .food-large-info img {
  width: 20rem;
  height: 17rem;
  padding-bottom: 0.5rem;
}
html body .curtain-up .food-large-info-wrapper .food-large-info img + div > span {
  line-height: 1.5rem;
  padding-right: 0.8rem;
}
html body .curtain-up .food-large-info-wrapper .food-large-info .sign {
  background-image: linear-gradient(to right, #ffe28a, #fece72);
  line-height: 1.5rem;
  font-size: 0.7rem;
  color: #707070;
  padding: 0 0.3rem;
  border-radius: 0.2rem;
}
html body .curtain-up .food-large-info-wrapper .food-large-info .food-info-description {
  color: #6e6e6e;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  line-height: 1rem;
}
html body .curtain-up .food-large-info-wrapper .footer {
  position: relative;
  z-index: 6;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  padding: 0.75rem;
  border-radius: 0 0 0.5rem 0.5rem;
}
html body .curtain-up .food-large-info-wrapper .footer .left .price {
  font-size: 1.75rem;
  color: #fb4f45;
  font-weight: bold;
}
html body .curtain-up .food-large-info-wrapper .footer .left .description {
  color: #cccccc;
}
html body .curtain-up .food-large-info-wrapper .footer .addcart {
  color: #373737;
  background-image: linear-gradient(to right, #fece5b, #ffc132);
  padding: 0.65rem 0.8rem;
  border-radius: 2rem;
}
html body .curtain-up .food-large-info-wrapper .close {
  background-color: rgba(17, 17, 17, 0.473);
  width: 3rem;
  line-height: 2.8rem;
  text-align: center;
  margin-top: 1.7rem;
  border-radius: 50%;
  border: 1px solid rgba(185, 185, 185, 0.5);
}
html body .curtain-up .food-large-info-wrapper .close .icon-guanbi {
  font-size: 1.5rem;
  color: #fff;
}
</style>