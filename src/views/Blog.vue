<template>
    <div class="posts">
        <div class="posts-in">
            <BlogPost v-for="post in posts"
                      v-bind:key="post.id"
                      v-bind:post="post"
                      v-bind:array="'posts'"/>
        </div>
        <Modal v-if="isModalVisible">
            <h2>{{activePost.title}}</h2>
            <p>{{activePost.body}}</p>
        </Modal>
    </div>
</template>
<script>
    import BlogPost from '@/components/BlogPost';
    import Modal from '@/components/Modal';
    import {getters, actions} from '../store';
    
    export default {
        name: "Blog",
        components: {BlogPost, Modal},
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
