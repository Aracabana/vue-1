import Vue from 'vue';
import firebase from 'firebase/app';

const state = Vue.observable({
    allPosts: [],
    activePost: null,
    showNotification: false,
    notificationText: '',
    notificationClass: ''
});
export const getters = {
    allPosts: () => state.allPosts,
    allPostsLength: () => state.allPosts.length,
    posts: () => state.allPosts.filter((post) => post.type === 'posts' && !post.isFavorite),
    customPosts: () => state.allPosts.filter((post) => post.type === 'customPosts' && !post.isFavorite),
    favorites: () => state.allPosts.filter((post) => post.isFavorite),
    activePost: () => state.activePost,
    showNotification: () => state.showNotification,
    notificationText: () => state.notificationText,
    notificationClass: () => state.notificationClass,
};

export const mutations = {
    setActivePost: (post) => state.activePost = post,
    toggleFavorite(post) {
        post.isFavorite = !post.isFavorite;
    },
    setAllPosts: (posts) => {
        state.allPosts = state.allPosts.concat(posts);
    },
    addPost: (post) => state.allPosts = [...state.allPosts, post],
    toggleNotification: () => state.showNotification = !state.showNotification,
    setNotificationText: (text) => state.notificationText = text,
    setNotificationClass: (value) => state.notificationClass = value,
};

export const actions = {
    async fetchPostsFromApi() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (response.status === 200) {
            let result = await response.json();
            result = result.map(item => {
                return {
                    ...item,
                    type: 'posts',
                    isFavorite: false
                }
            });
            mutations.setAllPosts(result);
        }
    },
    async getCustomPosts() {
        const response = await fetch('https://training-53585.firebaseio.com/customPosts.json');
        if (response.status === 200) {
            const result = await response.json();
            console.log(Array.from(result));
            if (result) {
                const data = Object.entries(result);
                const newArray = data.map((item) => item[1]);
                mutations.setAllPosts(newArray);
            }
        }
    },
    addCustomPost(post) {
        //console.log(post);
        //const response = await fetch('https://training-53585.firebaseio.com/customPosts.json', {
        //    method: 'POST',
        //    body: post
        //});
        //if (response.status === 200) {
        //    const result = await response.json();
        //    if (result?.length) {
        //        mutations.setAllPosts(result);
        //    }
        //    return 'ok'
        //}
        return new Promise((res, rej) => {
            firebase.database().ref('customPosts').push(post, (err) => {
                if (!err) {
                    console.log(post);
                    mutations.addPost(post);
                    res('the post has been added successfully');
                }
                rej(err);
            });
        });
    },
};
