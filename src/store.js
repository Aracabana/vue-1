import Vue from 'vue';

export const store = Vue.observable({
    posts: [],
    favorites: []
});

export const mutations = {
    toggleFavorite(post) {
        if (store.posts.includes(post)) {
            store.favorites.push(post);
            store.favorites.sort((a, b) => {
                return a.id - b.id;
            });
            store.posts = store.posts.filter(p => p.id !== post.id);
            return;
        }
        store.posts.push(post);
        store.posts.sort((a, b) => {
            return a.id - b.id;
        });
        store.favorites = store.favorites.filter(p => p.id !== post.id);
    }
};
