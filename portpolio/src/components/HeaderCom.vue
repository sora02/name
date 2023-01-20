<template>
  <nav>
    <div class="container">
      <a href="" class="navbar-name">BBaek</a>
    </div>
    <ul>
      <li>Home</li>
      <li>About Me</li>
      <li>Education</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderCom',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-name {
  font-weight: 900;
  font-size: 26px;
  text-decoration: none;
  background-color: black;
  color: white;
}
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
li {
  list-style: none;
  float: left;
  padding: 1.5rem;
  font-size: 20px;
}
</style>
