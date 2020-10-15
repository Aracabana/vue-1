<template>
    <div>
        <button class="add-post" type="button" @click="isModalVisible = true">Add post</button>
        <div class="posts">
            <div class="posts-in">
                <BlogPost v-for="(post, index) in customPosts"
                          v-bind:key="index"
                          v-bind:post="post"/>
            </div>
        </div>
        <ModalAddPost v-if="isModalVisible" @closeModal="isModalVisible = false"/>
    </div>
</template>
<script>
    import BlogPost from '@/components/BlogPost';
    import ModalAddPost from '../components/ModalAddPost';
    import {getters, actions, mutations} from '../store';
    
    export default {
        name: "CustomPosts",
        data() {
            return {
                isModalVisible: false
            }
        },
        components: {BlogPost, ModalAddPost},
        computed: {
            ...getters
        },
        methods: {
            ...actions,
            ...mutations
        },
        created() {
            //if (!this.customPosts.length) {
            //}
            //this.getCustomPosts().then((value) => {
            //    console.log(value);
            //}).catch((error) => {
            //    console.log(error);
            //});
        },
        
    }
</script>
<style scoped>
    .add-post {
        margin-bottom: 30px;
    }
    .posts {
        box-sizing: border-box;
        padding: 16px;
    }
    .posts-in {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-content: flex-start;
        box-sizing: border-box;
        margin: 0 -16px;
    }
</style>
