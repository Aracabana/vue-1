<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Blog</router-link>
            |
            <router-link to="/favorites">Favorites</router-link>
            |
            <router-link to="/custom-posts">Custom Posts</router-link>
        </div>
        <router-view/>
        <Modal v-if="activePost"/>
    </div>
</template>
<script>
    import Modal from '@/components/Modal';
    import { getters } from './store';
    
    export default {
        name: 'app',
        components: { Modal },
        computed: {
            ...getters
        }
    }
</script>
<style>
    html {
        background-color: #f2f2f2;
    }
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
