<template>
  <nav>
    <ul>
      <router-link to="/training">Training</router-link>
      |
      <router-link to="/blog-post">Blog Post</router-link>
      |
      <router-link to="/beer">Beer</router-link>
       | <router-link to="/comment">Comment</router-link>
     
    </ul>
  </nav>
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
