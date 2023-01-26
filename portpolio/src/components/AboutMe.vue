<template>
    <div class="container">
      <div class="title">Who is Baek?</div>
      <div class="hash-tag">
        <ul>
          <li>#배우고자하는</li>
          <li>#소통하는</li>
          <li>#포기하지 않는</li>
        </ul>
      </div>
      <div class="text-box">
        <img class="profile" src="../assets/profile.jpg" alt="">
        <span class="text">안녕하세요 프론트엔드 개발자 백소라입니다.</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AboutMe',
  setup() {
    //let height = window.innerHeight;
    //let scrooll = window.scrollY;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 60px;
  font-weight: 800;
  margin: 10%;
}
li {
  list-style: none;
  float: left;
  padding: 1.5rem;
  font-size: 20px;
  font-weight: 600;
}
.text-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  background-color: black;
  color: white;
  width: 50%;
  height: 50%;
  padding: 7%;
  margin: 9%;
}
.profile {
  border-radius: 70%;
  width: 50%;
  height: 50%
}
.text {
  font-size: 20px;
}
</style>