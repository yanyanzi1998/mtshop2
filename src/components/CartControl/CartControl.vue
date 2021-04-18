<template>
  <!-- 添加或减少按钮 -->
  <div class="increment-or-decrement-btn">
    <!-- click.stop阻止事件冒泡 -->
    <i class="iconfont icon-iconfront-" v-if="food.count" @click.stop="updateFoodCount(false)"></i>
    <span v-if="food.count">{{food.count}}</span>
    <i class="iconfont icon-tianjia1" @click.stop="updateFoodCount(true)"></i>
  </div>
</template>

<script>
export default {
    props:{
        food:Object
    },
    methods:{
        // false:减小，true：增加
        updateFoodCount(isAdd){
            // 不能在子组件直接修改父组件的数据
            // 需要通过vuex中的action
            // 参数：isAdd 增加/减少count； food 更改指定的food
            this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
        }
    }
};
</script>

<style scoped>
html
  body
  #diancai
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .increment-or-decrement-btn {
  position: absolute;
  right: 0.3rem;
  bottom: 0.3rem;
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
  .food-list
  .food-item-list
  li
  > ul
  > li
  .food-item-wrapper
  .increment-or-decrement-btn
  .icon-iconfront- {
  color: #c5c5c5;
  padding: 0.18rem;
  border: 2px solid #c5c5c5;
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
  .increment-or-decrement-btn
  .icon-tianjia1 {
  background-color: #ffd161;
}
</style>