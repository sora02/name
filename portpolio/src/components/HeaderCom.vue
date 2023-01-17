<template>
  <header>
      <nav>
        <ul>
          <li><a class="menu-btn" href="#name">프로필</a></li>
          <li><a class="menu-btn" href="#cv">상세 내용</a></li>
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderCom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
