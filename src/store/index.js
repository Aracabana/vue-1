import Vue from 'vue';
import firebase from 'firebase/app';

const state = Vue.observable({
    posts: [],
    favorites: [],
    customPosts: [],
    activePost: null
});
export const getters = {
    posts: () => state.posts,
    customPosts: () => state.customPosts,
    customPostsLength: () => state.customPosts.length,
    favorites: () => state.favorites,
    activePost: () => state.activePost
};

export const mutations = {
    setActivePost: (post) => state.activePost = post,
    setPosts: (val) => {
       state.posts = val.map(item => {
           return {
               ...item,
               type: 'posts'
           }
       });
    },
    // setPosts: (val) => state.posts = val,
    toggleFavorite(post) {
        if (state[post.type].includes(post)) {
            state.favorites.push(post);
            state.favorites.sort((a, b) => {
                return a.id - b.id;
            });
            state[post.type] = state[post.type].filter(p => p.id !== post.id);
            return;
        }
        state[post.type].push(post);
        state[post.type].sort((a, b) => {
            return a.id - b.id;
        });
        state.favorites = state.favorites.filter(p => p.id !== post.id);
    },
    //addCustomPost: (obj) => state.customPosts.push(obj),
    setCustomPosts: (posts) => state.customPosts = posts,
};

export const actions = {
    async fetchPostsFromApi() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.status === 200) {
            const result = await response.json();
            mutations.setPosts(result);
        }
    },
    addCustomPost(post) {
        return new Promise((res, rej) => {
            firebase.database().ref('customPosts').push(post, (err) => {
                if (!err) {
                    res('the post has been added');
                }
                rej(err);
            });
        });
    },
    async getCustomPosts() {
        const response = await fetch('http://training-53585.firebaseio.com/customPosts.json');
        if (response.status === 200) {
            const result = await response.json();
            mutations.setCustomPosts(result);
            console.log(result);
        }
    }
};
