<template>
    <div class="posts">
      <div class="posts-in">
        <BlogPost v-for="post in posts"
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
  name: "Blog",
  components: {BlogPost},
  props: ['posts'],
  data() {
    return {
    }
  },
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
