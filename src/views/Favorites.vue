<template>
  <div class="posts">
    <div class="posts-in">
      <BlogPost v-for="post in favorites"
                v-bind:key="post.id"
                v-bind:post="post"
                @showPost="showPost"
                @toggleFavorite="toggleFavorite"></BlogPost>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';
export default {
  name: "Favorites",
  components: {BlogPost},
  props: ['favorites'],
  methods: {
    showPost(post) {
      this.activePost = post;
    },
    toggleFavorite(post) {
      if (this.posts.includes(post)) {
        this.favorites.push(post);
        this.favorites.sort((a, b) => {
          return a.id - b.id;
        });
        this.posts = this.posts.filter(p => p.id !== post.id);
        return;
      }
      this.posts.push(post);
      this.posts.sort((a, b) => {
        return a.id - b.id;
      });
      this.favorites = this.favorites.filter(p => p.id !== post.id);
    }
  },
}
</script>

<style scoped>

</style>
