<template>
  <div class="post">
    <div class="post-card" @click="$emit('showPost', post)">
      <button @click.stop="$emit('toggleFavorite', post)" type="button">&#9734;</button>
      <p>{{post.id}}</p>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ['post']
}
</script>

<style scoped>

.post {
  box-sizing: border-box;
  margin: 0 0 16px;
  padding: 0 16px;
  width: calc(100% / 4);
}
.post-card {
  position: relative;
  padding: 8px;
  height: calc(100% - 16px);
  text-align: left;
  background-color: #ffffff;
}
.post-card button {
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 1;
  line-height: 1;
  cursor: pointer;
}
.post-card h3 {
  margin-top: 0;
  margin-bottom: 8px;
  padding-right: 35px;
}
.post-card p {
  margin-top: 0;
  margin-bottom: 8px;
}
.post-card p:last-child {
  margin-bottom: 0;
}
</style>
