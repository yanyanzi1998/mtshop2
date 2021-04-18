<template>
  <div class="star">
      <img :src="`/static/imgs/stars/star${size}_${starClass}@2x.png`"
       v-for="(starClass,index) in starClasses" :key="index"/>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_OFF = 'off'
const CLASS_HALF = 'half'
export default {
    props:{
        score:Number,
        size:Number
    },
    computed:{ 
        starClasses(){
            const {score} = this
            const scs = []
            // 向下取整获取整数部分
            const scoreInteger = Math.floor(score)
                // 向scs中添加n个'on'
                for(let i = 0; i<scoreInteger;i++){
                    scs.push(CLASS_ON)
                }
                // 向scs中添加0或1个'half'
                if((score-scoreInteger)*10>=5){
                    scs.push(CLASS_HALF)
                }
                // 向scs中添加n个'off'
                while(scs.length<5){
                    scs.push(CLASS_OFF)
                }

            return scs
        }
    }
};
</script>

<style>
html body .star {
  display: flex;
  padding: 0 0.1rem;
  display: inline-block;
}
html body .star img {
  width: 0.8rem;
  height: 0.8rem;
}
</style>