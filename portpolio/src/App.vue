<template>
  <HeaderCom />
  <HomeCom />
  <AboutMe />
</template>

<script>
import HeaderCom from './components/HeaderCom.vue'
import AboutMe from './components/AboutMe.vue'
import HomeCom from './components/HomeCom.vue'
export default {
  name: 'App',
  components: {
    HeaderCom,
    AboutMe,
    HomeCom,
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
