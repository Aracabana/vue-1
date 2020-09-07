<template>
  <div class="page-wrapper">
    <div class="left-column">
      <div class="posts">
        <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:post="post" @showPost="showPost" @toggleFavorite="toggleFavorite"></BlogPost>
      </div>
      <div v-if="activePost" class="post-more">
        <div>
          <h3>{{activePost.title}}</h3>
          <p>{{activePost.body}}</p>
        </div>
      </div>
    </div>
    <div class="favorite-posts">
      <BlogPost v-for="post in favorites" v-bind:key="post.id" v-bind:post="post" @showPost="showPost" @toggleFavorite="toggleFavorite" class="post-favorite"></BlogPost>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost';
export default {
  name: "Blog",
  components: { BlogPost },
  data() {
    return {
      posts: [],
      favorites: [],
      activePost: null
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
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json)
  }
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.left-column {
  box-sizing: border-box;
  padding: 0 16px;
  width: 70%;
  height: 100vh;
}
.posts {
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: start;
  box-sizing: border-box;
  margin: 0 -16px;
  border: 1px solid darkred;
  padding: 16px 0 0;
  height: calc(100% - 200px);
}
.post-more {
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  margin: 0 -16px;
  border: 1px solid darkorange;
  padding: 32px 16px 16px;
  height: 200px;
}
.post-more div {
  box-sizing: border-box;
  padding: 16px;
  height: 100%;
  background-color: #ffffff;
}
.post-more h3 {
  margin-top: 0;
  margin-bottom: 16px;
}
.post-more p {
  margin-bottom: 8px;
}
.post-more p:last-child {
  margin-bottom: 0;
}
.favorite-posts {
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  border: 1px solid mediumseagreen;
  padding: 16px;
  width: 30%;
  height: 100vh;
}
</style>
