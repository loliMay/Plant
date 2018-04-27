<template>
    <nav>
      <div class="logo"><a href="./"></a></div>
      <ul>
        <li><a href="http://"></a>条件检索</li>
        <li><a href="http://"></a>关键词检索</li>
        <li><a href="http://"></a>关于项目</li>
        <li><a href="http://"></a>反馈建议</li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {
      msg: '欢迎来到你的第一个Vue应用'
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
      font-family  SimHei
      font-size 20px
      line-height 120px
      text-shadow 0 0 0.5px #fff
      cursor pointer
      &:hover
        color rgba(64, 158, 255,1)
        text-shadow 0 0 1px rgba(64, 158, 255,1)
  .logo
    height 100px
    width 200px
    background url(http://p40kjburh.bkt.clouddn.com/18-4-18/78595457.jpg) no-repeat 6px/180px
    float left
</style>
