<template>
  <div id="app">
    <Blog></Blog>
  </div>
</template>

<script>
import Blog from './components/Blog.vue'

export default {
  name: 'App',
  components: {
    Blog
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
