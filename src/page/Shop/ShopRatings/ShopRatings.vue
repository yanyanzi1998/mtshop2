<template>
  <!-- 评价栏目 -->
  <div id="pingjia">
    <!-- 总体评分外部容器 -->
    <div class="shop-rating-wrapper">
      <!-- 商家评分左 -->
      <div class="shop-rating">
        <div class="large-highlight">{{ info.score }}</div>
        <div>商家评分</div>
      </div>
      <!-- 口味评分+包装评分 左中 -->
      <div class="flavor-and-pack">
        <div class="flavor">
          口味
          <Star :score="info.score" :size="24" />
          <span>{{ info.foodScore }}</span>
        </div>
        <div class="pack">
          包装
          <Star :score="info.score" :size="24" />
          <span>{{ info.serviceScore }}</span>
        </div>
      </div>
      <!-- 分割竖线 -->
      <div class="hr"></div>
      <!-- 配送评分 -->
      <div class="delivery-rating">
        <div class="large">4.8</div>
        <div>配送评分</div>
      </div>
    </div>
    <!-- 评论过滤筛选容器 -->
    <div class="comment-filter-wrapper">
      <div  @click="setSelectType(2)" :class="{on:selectType === 2}">全部({{ratings.length}})</div>
      <div  @click="setSelectType(0)" :class="{on:selectType === 0}">好评({{positiveSize}})</div>
      <div  @click="setSelectType(1)" :class="{on:selectType === 1}">差评({{ratings.length-positiveSize}})</div>
    </div>
    <!-- 详细评论列表外部容器 -->
    <div class="comment-list-wrapper">
      <ul class="comment-list">
        <li
          class="comment-item"
          v-for="(rating, index) in filterRatings"
          :key="index"
        >
          <!-- 用户信息 -->
          <div class="user-info top">
            <div class="left">
              <img class="avatar" :src="rating.avatar" />
              <div>
                <div class="user-name">{{ rating.username }}</div>
                <Star :score="rating.score" :size="24" />
              </div>
            </div>
            <div class="comment-time right">{{ rating.rateTime | date-format}}</div>
          </div>
          <div class="comment">
            <p class="content">
              {{
                rating.text ||
                `#(冻)杨枝甘露# #香脆薯条#
              杨枝甘露比想象中有点小吧，芒果有点酸，味道还是可以的，比奶茶要好喝。`
              }}
            </p>
            <ul class="pic">
              <li><img src="../imgs/sp01.png" /></li>
              <li><img src="../imgs/sp01.png" /></li>
              <li><img src="../imgs/sp01.png" /></li>
            </ul>
            <div class="order-foods">
              <i class="iconfont icon-zan"></i>
              <!-- <span>(冻)杨枝甘露，香脆薯条</span> -->
              <span
                v-for="(item, index) in rating.recommend"
                :key="index" v-if="rating.recommend"
                >{{ item }}</span
              >
            </div>
            <div class="tag">
              <i class="iconfont icon-tag"></i>
              <span>热情礼貌，体表整洁，货品完好</span>
            </div>
            <div class="shop-reply">
              <p>
                商家回复：谢谢小主的认可和肯定，小主评论文采飞扬，图片构图干净，用词巧妙绝对是神级优质评论
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
import BScroll from "better-scroll";
import Star from "../../../components/Star/Star.vue";
export default {
  data(){
    return{
      selectType:2//评论类型：2全部；0：满意；1不满意
    }
  },
  mounted() {
    this.$store.dispatch("getRatings", () => {
      this.$nextTick(() => {
// 问题：当切换了评论列表后，滚动底部出现错误（没有更新）
        this.scroll = new BScroll(".comment-list-wrapper", {
          click: true,
        });
      });
    });
  },
  computed: {
    ...mapState(["info", "ratings"]),
    ...mapGetters(['positiveSize']),
    filterRatings(){
      const {ratings,selectType} = this
      // 产生一个过滤的新数组
      return ratings.filter(rating=>{
        if(selectType === 2){
          return true
        }
        return rating.rateType === selectType
      })
    }
  },
  methods:{
    setSelectType(selectType){
      this.selectType = selectType
    }
  },
  components: {
    Star,
  },
};
</script>

<style scoped>
html body #pingjia {
  background-color: #f4f4f4;
  position: relative;
  margin-top: 14.5rem;
  padding-top: 0.5rem;
  height: 26.7rem;
  overflow: hidden;
}
html body #pingjia.hidden {
  display: none;
}
html body #pingjia .shop-rating-wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem 1.2rem;
  color: #838383;
  font-size: 0.8rem;
}
html body #pingjia .shop-rating-wrapper .shop-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
}
html body #pingjia .shop-rating-wrapper .shop-rating .large-highlight {
  color: #ffb001;
  font-size: 2rem;
}
html body #pingjia .shop-rating-wrapper .flavor-and-pack {
  line-height: 1.75rem;
}
html body #pingjia .shop-rating-wrapper .flavor-and-pack .flavor {
  display: flex;
  align-items: center;
}
html body #pingjia .shop-rating-wrapper .flavor-and-pack .pack {
  display: flex;
  align-items: center;
}
html body #pingjia .shop-rating-wrapper .flavor-and-pack .star {
  display: flex;
  padding: 0 0.5rem;
}
html body #pingjia .shop-rating-wrapper .flavor-and-pack .star img {
  width: 0.8rem;
  height: 0.8rem;
  padding: 0 0.1rem;
}
html body #pingjia .shop-rating-wrapper .hr {
  width: 1.5px;
  height: 3.2rem;
  background-color: #e6e6e6;
}
html body #pingjia .shop-rating-wrapper .delivery-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
}
html body #pingjia .shop-rating-wrapper .delivery-rating .large {
  font-size: 1.75rem;
  padding-bottom: 0.5rem;
}
html body #pingjia .comment-filter-wrapper {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  color: #838383;
  font-size: 0.85rem;
  margin: 0.7rem 0;
}
html body #pingjia .comment-filter-wrapper > div {
  padding: 0.5rem 0.75rem;
  border: 1.75px solid #b8b8b8;
}
html body #pingjia .comment-filter-wrapper > div.on {
  background-color: #fff8e8;
  color: #ffb001;
  border-color: #ffb001;
  font-weight: bold;
}
html body #pingjia .comment-list-wrapper{
  height: 15rem;
  overflow: hidden;
}
html body #pingjia .comment-list-wrapper .comment-list .comment-item {
  background-color: #fff;
  padding: 1rem 0.75rem;
  border-bottom: 1px solid #e2e2e2;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.9rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left {
  display: flex;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left
  .avatar {
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 50%;
  padding-right: 0.5rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left
  .user-name {
  font-size: 1.25rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left
  .star {
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left
  .star
  img {
  width: 0.8rem;
  height: 0.8rem;
  padding-right: 0.1rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .left
  .star
  .delivery-time {
  color: #a1a1a1;
  font-size: 0.8rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .user-info
  .comment-time {
  font-size: 0.8rem;
  color: #a1a1a1;
}
html body #pingjia .comment-list-wrapper .comment-list .comment-item .comment {
  padding-left: 3.35rem;
  padding-right: 0.75rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .content {
  letter-spacing: 0.5px;
  line-height: 1.25rem;
  font-size: 0.9rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .pic {
  display: flex;
  padding-bottom: 0.75rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .pic
  img {
  width: 5rem;
  height: 5rem;
  padding-right: 0.4rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .order-foods {
  color: #5d6f95;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding-left: 0.2rem;
  line-height: 1.5rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .order-foods
  .icon-zan {
  padding-right: 1rem;
  font-size: 0.7rem;
  color: #949393;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .tag {
  color: #949393;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding-left: 0.2rem;
  line-height: 1.5rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .tag
  .icon-tag {
  padding-right: 1rem;
  font-size: 0.7rem;
}
html
  body
  #pingjia
  .comment-list-wrapper
  .comment-list
  .comment-item
  .comment
  .shop-reply {
  background-color: #f4f4f4;
  padding: 0.75rem 0.5rem;
  font-size: 0.85rem;
  color: #949393;
  line-height: 1.2rem;
}
</style>