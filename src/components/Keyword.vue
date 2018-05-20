<template>
  <div class="container">
    <input type="text" class="search" placeholder="输入关键词后按下回车键开始检索" :class="{ bounceIn:isAnimated }" />
    <div class="overlay animated myFadeIn"></div>
  </div>
</template>

<script>
export default {
  name: 'Keyword',
  data () {
    return {
      isAnimated: true
    }
  },
  created () {
    setTimeout(() => {
      this.isAnimated = false
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
  input::-ms-input-placeholder{text-align: center;color rgba(38, 41, 44,0.5)}
  input::-webkit-input-placeholder{text-align: center; color rgba(38, 41, 44,0.5)}
  p
    font-size 18px
  .container
    margin 0 300px
    height 650px
    width  1300px
    padding 1px
    display flex
    justify-content center
    align-items center
  h1,h2,h3,h4,h5,h6
    font-weight 400
    letter-spacing 1px
  .overlay {
    position absolute
    top: 110px; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index 0
    animation-delay:.4s
  }
  .search
    border-radius 100px
    height 70px
    width 700px
    padding 0 20px
    outline none
    font-size 18px
    background rgba(255, 255, 255,0.8)
    border 2px solid #ead4cf
    border-color hsla(0,0%,100%,.1)
    box-shadow 0 0 50px 0 rgba(38, 41, 44,0.9)
    color rgba(38, 41, 44,0.8)
    z-index 1
    &:hover
      transform scale(1.01)
  .commit
    display block
    margin 45px auto
    background rgba(38, 41, 44,0)
    border 1px solid rgba(38, 41, 44,1)
    font-size 25px
    outline none
    padding 10 20px

@-webkit-keyframes myFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.myFadeIn {
  -webkit-animation-name: myFadeIn;
  animation-name: myFadeIn;
}
</style>
