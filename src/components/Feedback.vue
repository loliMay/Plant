<template>
  <div class="container">
    <textarea class="content"  placeholder="欢迎反馈您的建议(゜-゜)つロ"/>
  </div>
</template>

<style lang="stylus" scoped>
    ::-webkit-input-placeholder{
      height: 50px
      text-align center
    }    /* 使用webkit内核的浏览器 */
    :-moz-placeholder{
      height: 50px;line-height: 50px
    }                  /* Firefox版本4-18 */
    ::-moz-placeholder{
      height: 50px;line-height: 50px
    }                  /* Firefox版本19+ */
    :-ms-input-placeholder{
      height: 50px;line-height: 50px
    }
  .container
    margin 0 300px
    height 650px
    width  1300px
    padding 1px
  h1,h2,h3,h4,h5,h6
    font-weight 400
    letter-spacing 1px
    color #fff
  textarea
    resize none
  .content
    margin-top 70px
    border-radius 10px
    height 500px
    width 900px
    padding 10px
    outline none
    font-size 18px
    color rgba(255, 255, 255,1)
    background rgba(38, 41, 44,0)
    border 2px solid #ead4cf
    border-color hsla(0,0%,100%,.1)
    box-shadow 0 0 15px rgba(0,0,0,.2)
    &:focus
      border 2px solid rgba(0, 122, 204,.1)
      box-shadow 0 0 10px 0 rgba(0, 122, 204,.5) inset
  .commit
    display block
    margin 45px auto
    background rgba(38, 41, 44,0)
    border 1px solid rgba(38, 41, 44,1)
    font-size 25px
    outline none
    padding 10 20px
</style>
