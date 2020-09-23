<template>
  <div class="posts">
    <div class="posts-in">
      <BlogPost v-for="post in favorites"
                v-bind:key="post.id"
                v-bind:post="post"
                @showPost="showPost"
                @toggleFavorite="toggleFavorite(post)"/>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';
import {store, mutations } from '../store.js';
export default {
  name: "Favorites",
  data() {
    return {
      favorites: store.favorites,
    }
  },
  components: {BlogPost},
  methods: {
    showPost(post) {
      this.activePost = post;
    },
    toggleFavorite(post) {
      mutations.toggleFavorite(post)
    },
  },
}
</script>

<style scoped>

</style>
