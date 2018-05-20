<template>
  <div class="preview">
    <div class="preview-inner">
      <img :src="src">
    </div>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  data () {
    return {
      src: '/static/images/1.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .preview
    display inline-block
    width 340px
    text-align left
  span
    font-size 15px
    color rgba(38, 41, 44,.8)
    margin-left 10px
  .preview-inner
    height 200px
    width 330px
    box-shadow 0 0 10px 0px rgba(38, 41, 44,.5)
    margin 5px 5px
    border-radius 10px
  img
    border-radius 10px
    width 100%
    height 100%
  &:hover
    transform scale(1.005)
</style>
