<template>
    <div class="posts">
        <div class="posts-in">
            <BlogPost v-for="post in posts"
                      v-bind:key="post.id"
                      v-bind:post="post"/>
        </div>
    </div>
</template>
<script>
    import BlogPost from '@/components/BlogPost';
    import {getters, actions} from '../store';
    
    export default {
        name: "Blog",
        components: {BlogPost},
        computed: {
            ...getters
        },
        methods: {
            ...actions
        },
        created() {
            if (!this.posts.length) {
                this.fetchPostsFromApi()
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
