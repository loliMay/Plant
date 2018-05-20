<template>
    <nav>
      <div class="logo"><a href="./"></a></div>
      <ul>
        <li @click="pageSwitch(1)" index='1' :class="{ current:index1 }">条件检索</li>
        <li @click='pageSwitch(2)' index='2' :class="{ current:index2 }">关键词检索</li>
        <li @click='pageSwitch(3)' index='3' :class="{ current:index3 }">关于项目</li>
        <li @click='pageSwitch(4)' index='4' :class="{ current:index4 }">反馈建议</li>
      </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      index1: true,
      index2: false,
      index3: false,
      index4: false
    }
  },
  name: 'Panel',
  methods: {
    pageSwitch (index) {
      switch (index.toString()) {
        case '1':
          this.$router.push('/')
          break
        case '2':
          this.$router.push('/keyword')
          break
        case '3':
          this.$router.push('/about')
          break
        case '4':
          this.$router.push('/feedback')
      }
    }
  },
  watch: {
    '$route' (to, from) {
      switch (this.$store.state.current) {
        case 0:
          this.index1 = true
          this.index2 = false
          this.index3 = false
          this.index4 = false
          break
        case 1:
          this.index1 = false
          this.index2 = true
          this.index3 = false
          this.index4 = false
          break
        case 2:
          this.index1 = false
          this.index2 = false
          this.index3 = true
          this.index4 = false
          break
        case 3:
          this.index1 = false
          this.index2 = false
          this.index3 = false
          this.index4 = true
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
  nav
    height 80px
    z-index 99px
    border-bottom 1px solid #ead4cf
    border-bottom-color hsla(0,0%,100%,.1)
    box-shadow 0 0 15px rgba(0,0,0,.2)
    background rgba(239, 232, 213,0.05)
    padding 5px 200px 25px 360px
    ul
      cursor default
    ul li
      list-style none
      color #fff
      display inline-block
      margin-left 70px
      a
      font-weight 900
      font-family  '黑体'
      font-size 20px
      line-height 100px
      cursor pointer
      &:hover
        color rgba(64, 158, 255,1)
    .current
      color rgba(64, 158, 255,1)
  .logo
    height 100px
    width 200px
    background url(http://p40kjburh.bkt.clouddn.com/18-4-18/78595457.jpg) no-repeat 6px/180px
    float left
</style>
