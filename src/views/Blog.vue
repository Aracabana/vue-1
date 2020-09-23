<template>
    <div class="posts">
        <div class="posts-in">
            <BlogPost v-for="post in posts"
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
        name: "Blog",
        components: {BlogPost},
        data() {
            return {
                posts: store.posts,
            }
        },
        methods: {
            showPost(post) {
                this.activePost = post;
            },
            toggleFavorite(post) {
                mutations.toggleFavorite(post)
            },
        },
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => store.posts = json)
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
