<template>
    <div class="overlay" @click.self="$emit('closeModal')">
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close" type="button" @click="$emit('closeModal')">Close</button>
                    <h2>Add Post</h2>
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
                        <Preloader v-if="loading"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {getters, mutations, actions} from '../store';
    import Preloader from './Preloader';
    export default {
        name: "ModalAddPost",
        components: {Preloader},
        data() {
            return {
                title: '',
                body: '',
                loading: false
            }
        },
        comments: {Preloader},
        computed: {
            ...getters,
            isDisabled: function () {
                return !this.title || !this.body
            }
        },
        methods: {
            ...mutations,
            ...actions,
            onSubmit() {
                if (!this.title.trim() && !this.body.trim()) {
                    return
                }
                let newPost = {
                    id: this.allPostsLength,
                    userId: 1,
                    type: 'customPosts',
                    title: this.title,
                    body: this.body,
                    isFavorite: false
                };
                this.loading = true;
                this.addCustomPost(newPost).then((value) => {
                    this.setNotificationClass('success');
                    this.setNotificationText(value);
                }).catch(() => {
                    this.setNotificationClass('error');
                    this.setNotificationText('Error');
                }).finally(() => {
                    this.title = '';
                    this.body = '';
                    this.loading = false;
                    setTimeout(() => {
                        this.$emit('closeModal');
                    }, 500);
                    setTimeout(() => {
                        this.toggleNotification();
                    }, 900);
                });
            }
        }
    }
</script>
<style scoped>
    .overlay {
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 110;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
    }
    .modal-dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        max-width: 475px;
        transform: translate(-50%, -50%);
    }
    .modal-content {
        position: relative;
        border-radius: 5px;
        margin: 0 auto;
        padding: 30px;
        text-align: left;
        background-color: #ffffff;
    }
    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        color: darkgray;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    .modal-close:hover,
    .modal-close:active,
    .modal-close:focus {
        color: #2c3e50;
    }
    form {
        position: relative;
        box-sizing: border-box;
    }
    form button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
    }
    label {
        display: block;
        box-sizing: border-box;
        margin-bottom: 5px;
        text-align: left;
    }
    input {
        display: block;
        margin-bottom: 20px;
        box-sizing: border-box;
        width: 100%;
    }
    textarea {
        display: block;
        box-sizing: border-box;
        margin-bottom: 20px;
        width: 100%;
        height: 100px;
    }
</style>
