<template>
    <div>
        <button class="add-post" type="button">Add post</button>
        <form @submit.prevent="onSubmit">
            <div>
                <label>Title</label>
                <input type="text" v-model="title">
            </div>
            <div>
                <label>Text</label>
                <textarea v-model="body"></textarea>
            </div>
            <button :disabled="isDisabled" type="submit">Submit</button>
        </form>
        <div class="posts">
            <div class="posts-in">
                <BlogPost v-for="post in customPosts"
                          v-bind:key="post.id"
                          v-bind:post="post"
                          v-bind:array="'customPosts'"/>
            </div>
        </div>
    </div>
</template>
<script>
    import BlogPost from '@/components/BlogPost';
    import {getters, actions, mutations} from '../store';
    
    export default {
        name: "CustomPosts",
        data() {
            return {
                title: '',
                body: '',
            }
        },
        components: {BlogPost},
        computed: {
            ...getters,
            isDisabled: function () {
                return !this.title || !this.body
            }
        },
        methods: {
            ...actions,
            ...mutations,
            onSubmit() {
                if (this.title.trim() && this.body.trim()) {
                    const newPost = {
                        id: this.customPostsLength,
                        userId: 1,
                        type: 'custom',
                        title: this.title,
                        body: this.body
                    }
                    this.addCustomPost(newPost);
                }
            }
        },
        //created() {
        //    if (!this.customPosts.length) {
        //        this.fetchPostsFromApi()
        //    }
        //},
        
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
        align-content: start;
        box-sizing: border-box;
        margin: 0 -16px;
    }
    form {
        padding: 16px;
    }
    form button {
        display: block;
        width: 100px;
    }
    label {
        display: block;
        margin-bottom: 5px;
        text-align: left;
    }
    input {
        display: block;
        margin-bottom: 20px;
        width: 40%;
    }
    textarea {
        display: block;
        margin-bottom: 20px;
        width: 40%;
        height: 100px;
    }
</style>
