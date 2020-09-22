<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view/>
    <Modal v-if="activePost" :post="activePost" @closeModal="closeModal"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'app',
  data() {
    return {
      posts: [],
      favorites: [],
      activePost: null
    }
  },
  components: {Modal},
  methods: {
    closeModal() {
      this.activePost = null;
    },
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
