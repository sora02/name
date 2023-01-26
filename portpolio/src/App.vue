<template>
  <HeaderCom />
  <router-view />
</template>

<script>
import HeaderCom from './components/HeaderCom.vue'
export default {
  name: 'App',
  components: {
    HeaderCom,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  margin: 0;
  padding: 0;
}
html {
  margin: 0;
  padding: 0;
}
</style>
