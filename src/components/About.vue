<template>
  <div class="container" :class="{ myBounceIn:isAnimated }">
    <h4>关 于</h4>
    <h5>花草笺—基于P2P分布式数据管理及深度卷积神经网络的植物智能识别系统</h5>
    <h4>项目成员</h4>
    <h5>闫堃</h5>
    <h5>陈慧颖</h5>
    <h5>张莹</h5>
    <h5>梅世祺、谢中阳</h5>
    <h5>李凤懿</h5>
    <h5>乔鹭</h5>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      isAnimated: false
    }
  },
  created () {
    setTimeout(() => {
      this.isAnimated = true
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
  p
    font-size 18px
  .container
    margin 76px 300px
    height 650px
    width  1300px
    background rgba(38, 41, 44,0.35)
    border-radius 15px
    color white
    font-size 25px
    padding 1px
  h1,h2,h3,h4,h5,h6
    font-weight 400
    letter-spacing 1px

.myBounceIn {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-name: myBounceIn;
  animation-name: myBounceIn;
}
@-webkit-keyframes myBounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {

  }
  20% {
    -webkit-transform: scale3d(1.02, 1.02, 1.02);
    transform: scale3d(1.02, 1.02, 1.02);
  }
  40% {
    -webkit-transform: scale3d(0.98, 0.98, 0.98);
    transform: scale3d(0.98, 0.98, 0.98);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.02, 1.02, 1.02);
    transform: scale3d(1.02, 1.02, 1.02);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
