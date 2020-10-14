import Vue from 'vue';
import firebase from 'firebase/app';

const state = Vue.observable({
    posts: [],
    favorites: [],
    customPosts: [
/*        {
            body:"quia et suscipit suscipit recusandae consequuntur expedita et cum" +
                " reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem" +
                " eveniet architecto",
            id: 101,
            title: "Custom 1",
            userId: 1,
    
        },
        {
            body:"quia et suscipit suscipit recusandae consequuntur expedita et cum" +
                " reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem" +
                " eveniet architecto",
            id: 102,
            title: "Custom 2",
            userId: 1,
        
        }*/
    ],
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
};

export const actions = {
    fetchPostsFromApi() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => {
                mutations.setPosts(json)
            })
    },
    addCustomPost(obj) {
        firebase.database().ref('customPosts').push(obj);
    }
};
