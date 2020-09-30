import Vue from 'vue';

const state = Vue.observable({
    posts: [],
    favorites: [],
    activePost: null
});
export const getters = {
    posts: () => state.posts,
    favorites: () => state.favorites,
    activePost: () => state.activePost
};

export const mutations = {
    setActivePost: (post) => state.activePost = post,
    setPosts: (val) => state.posts = val,
    toggleFavorite(post) {
        if (state.posts.includes(post)) {
            state.favorites.push(post);
            state.favorites.sort((a, b) => {
                return a.id - b.id;
            });
            state.posts = state.posts.filter(p => p.id !== post.id);
            return;
        }
        state.posts.push(post);
        state.posts.sort((a, b) => {
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
