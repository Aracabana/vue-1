import Vue from 'vue';

const state = Vue.observable({
    posts: [],
    favorites: [],
    customPosts: [
        {
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
        
        }
    ],
    activePost: null,
    isModalVisible: false
});
export const getters = {
    posts: () => state.posts,
    customPosts: () => state.customPosts,
    favorites: () => state.favorites,
    activePost: () => state.activePost,
    isModalVisible: () => state.isModalVisible
};

export const mutations = {
    toggleModal: () => state.isModalVisible = !state.isModalVisible,
    setActivePost: (post) => state.activePost = post,
    //setPosts: (val) => {
    //    state.posts = val.map(item => {
    //        return {
    //            ...item,
    //            arrayType: 'posts'
    //        }
    //    });
    //},
    setPosts: (val) => state.posts = val,
    toggleFavorite(array, post) {
        if (state[array].includes(post)) {
            state.favorites.push({
                ...post,
                arrayType: array
            });
            state.favorites.sort((a, b) => {
                return a.id - b.id;
            });
            state[array] = state[array].filter(p => p.id !== post.id);
            return;
        }
        state[array].push(post);
        state[array].sort((a, b) => {
            return a.id - b.id;
        });
        state.favorites = state.favorites.filter(p => p.id !== post.id);
    }
};

export const actions = {
    fetchPostsFromApi() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((json) => {
                mutations.setPosts(json)
            })
    }
};
