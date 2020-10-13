<template>
  <div class="posts">
    <div class="posts-in">
      <BlogPost v-for="post in favorites"
                v-bind:key="post.type + '_' + post.id"
                v-bind:post="post"
                v-bind:favoriteClass="'active'"
                v-bind:array="post.arrayType"/>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';
import { getters } from '../store';

export default {
  name: "Favorites",
  components: {BlogPost},
  computed: {
    ...getters
  }
}
</script>

<style scoped>
  .posts {
    box-sizing: border-box;
    padding: 16px;
  }
  .posts-in {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: start;
    box-sizing: border-box;
    margin: 0 -16px;
  }
  
</style>
