<template>
  <div class="container">
    <div class="card" :class="{ wbBounceIn:bounceIn, wbBounceOut:bounceOut }">
      <a class="button_close" v-on:click="closeIt">X</a>
      <h2>园林绿化</h2>
      <div class="card-inner">
        <photocard v-for="item in list" :key='item' ></photocard>
      </div>
    </div>
  </div>
</template>

<script>
import photocard from './PhotoCard' // 导入 phpotocard

export default{
  name: 'Card',
  data () {
    return {
      bounceIn: true,
      bounceOut: false,
      list: [{src: '/static/images/1.jpg'}, '45', '46', '45']
    }
  },
  methods: {
    closeIt () {
      this.bounceIn = false
      this.bounceOut = true
      setTimeout(() => { this.$emit('closeModal') }, 180)
    }
  },
  components: {
    photocard
  }
}
</script>

<style lang="stylus" scoped>
h2
  font-family '幼圆'
  color rgba(80, 80, 80,1)
.container
    position absolute
    top 0
    left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.8)
    z-index 0
.card
  position absolute
  top 20px
  left 200px
  right 200px
  bottom 20px
  background rgba(255, 255, 255,1)
  border-radius 5px
.card-inner
  padding 0 20px
  display flex
  justify-content space-around
  align-items center

.wbBounceIn {
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-name: wbBounceIn;
  animation-name: wbBounceIn;
}

.wbBounceOut {
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-name: wbBounceOut;
  animation-name: wbBounceOut;
}

@keyframes wbBounceIn {
  0% {
    transform: scale(.5);
    opacity: 0;
  }
  70% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes wbBounceOut {
  100% {
    transform: scale(.7);
    opacity: 0;
  }
  30% {
    transform: scale(1.03);
  }
  0% {
    transform: scale(1);
  }
}

.button_close
  position absolute
  right 5px
  top 5px
  font-family WBswficon
  font-size 25px
  cursor pointer
  &:hover
    color rgba(0, 122, 204,1)
@font-face {
  font-family: 'WBswficon';
  src: url(/static/fonts/wbficon.woff)
  font-weight: normal;
  font-style: normal;
}
</style>
