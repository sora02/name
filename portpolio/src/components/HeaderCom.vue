<template>
  <nav>
    <div class="container">
      <router-link to="/" class="navbar-name">BBaek</router-link>
    </div>
    <ul>
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/about"><li>About</li></router-link>
      <router-link to="/education"><li>Education</li></router-link>
      <router-link to="/project"><li>Project</li></router-link>
      <router-link to="/contact"><li>contact</li></router-link>
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
a {
  text-decoration: none;
  color: black;
}
</style>
