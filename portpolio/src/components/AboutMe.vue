<template>
    <div class="container">
      <img src='../assets/profile.jpg' alt="">
    </div>
</template>

<script>
export default {
  name: 'AboutMe',
  setup() {
    let height = window.innerHeight;
    let scrooll = window.scrollY;
    console.log(height, scrooll)
  }
}
</script>

<style scoped>
img {
  background-size: cover;
  border-radius: 70%;
  width: 400px;
  height: 400px;
  opacity: 0%;
}
</style>