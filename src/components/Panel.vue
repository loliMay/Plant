<template>
  <div class="panel">
    <p class="animated bounceInDown">
      <span class="part1">您选择</span><span class="part2">植物</span><span class="part3">做什么?</span>
    </p>
    <div class="panel-inner">
      <div class="circle c1 animated" :class="{ bounceIn:isAnimated }" @click="toggle1">园林绿化</div>
    <div class="circle c2 animated" :class="{ bounceIn:isAnimated } " @click="toggle2">盆栽养护</div>
    <div class="circle c3 animated" :class="{ bounceIn:isAnimated } " @click="toggle3">经济作物</div>
    </div>
    <card1 v-if="seen1" v-on:closeModal="toggle1"></card1>
    <card2 v-if="seen2" v-on:closeModal="toggle2"></card2>
    <card3 v-if="seen3" v-on:closeModal="toggle3"></card3>
  </div>
</template>

<script>
import card1 from './Card1' // 导入card
import card2 from './Card2' // 导入card
import card3 from './Card3' // 导入card

export default {
  name: 'Panel',
  data () {
    return {
      isAnimated: true,
      seen1: false,
      seen2: false,
      seen3: false
    }
  },
  methods: {
    toggle1 () {
      this.seen1 = !this.seen1
    },
    toggle2 () {
      this.seen2 = !this.seen2
    },
    toggle3 () {
      this.seen3 = !this.seen3
    }
  },
  created () {
    setTimeout(() => {
      this.isAnimated = false
    }, 1000)
  },
  components: {
    card1,
    card2,
    card3
  }
}
</script>

<style lang='stylus' scoped>
  circle-size = 300px
  bg-opacity = 0.81
  .panel
    padding  100px 0
    height 652px
  p
    letter-spacing 2px
    font-family Microsoft JhengHei
    margin-bottom: 70px
    font-size 35px
    .part1
      color rgba(74, 194, 241,1)
    .part2
      color rgba(154, 179, 44,1)
    .part3
      color rgba(228, 126, 115,1)
  .panel-inner {
    margin:0 300px;
    display: flex;
    justify-content: space-around;

  }
  .circle
    height: circle-size
    width: circle-size
    color white
    font-size 25px
    letter-spacing 2px
    border-radius:50%
    box-shadow 0 0 25px 0.1px rgba(34, 24, 15,0.4)
    display flex
    align-items center
    justify-content space-around
    cursor pointer
    &:hover
      transform scale(1.015)
  .c1
    background: rgba(141, 158, 44,bg-opacity)
  .c2
    background: rgba(34, 205, 255,bg-opacity)
  .c3
    background: rgba(228, 126, 115,bg-opacity)
</style>
