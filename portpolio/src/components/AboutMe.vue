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
        <span class="text">안녕하세요 프론트엔드 개발자 백소라입니다.
          <p>
            저는 제가 목표로 삼은 일은 시간이 걸리더라도 반드시 해냅니다. 이런 제게 개발은 좋은 목표가 되어주었습니다.
          </p>
          <p>
            좋은 개발자가 되겠다는 목표를 가지고 현재 달리고 있습니다. 포기하지 않고 느리더라도 꾸준하게 그리고 탄탄하게 
            노력하겠습니다.
          </p>
        </span>
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
  width: 45%;
  height: 45%
}
.text {
  font-size: 20px;
}
</style>