<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: STHeiti,Microsoft YaHei,SimSun,arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin:0;
  padding:0;
}

body {
  background:url('http://p40kjburh.bkt.clouddn.com/18-4-18/45744326.jpg');
}
</style>
