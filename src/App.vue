<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/favorites">Favorites</router-link>
        </div>
        <router-view @showPost="showPost"/>
        <Modal v-if="activePost" :post="activePost" @closeModal="closeModal"/>
    </div>
</template>
<script>
    import Modal from '@/components/Modal';
    
    export default {
        name: 'app',
        data() {
            return {
                activePost: null
            }
        },
        components: { Modal },
        methods: {
            closeModal() {
                this.activePost = null;
            },
            showPost(post) {
                this.activePost = post;
            },
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
