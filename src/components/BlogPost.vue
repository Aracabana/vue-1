<template>
    <div class="post">
        <div class="post-card">
            <button class="more" type="button" @click="setActivePost(post)">More</button>
            <button @click.stop="toggleFavorite(post)" type="button" class="favorite" :class="favoriteClass">
                &#9734;
            </button>
            <p>id: {{ post.id }}</p>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script>
import {mutations} from '../store';

export default {
    name: "BlogPost",
    props: ['array', 'post', 'favoriteClass'],
    methods: {
        ...mutations
    }
}
</script>
<style scoped>
.post {
    box-sizing: border-box;
    padding: 0 16px 16px;
    width: calc(100% / 4);
}
.post-card {
    position: relative;
    box-sizing: border-box;
    padding: 40px 8px 8px;
    height: 100%;
    text-align: left;
    background-color: #ffffff;
}
.post-card .favorite {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 1;
    line-height: 1;
    cursor: pointer;
}
.post-card .favorite.active {
    background-color: #42b983;
}
.more {
    position: absolute;
    top: 8px;
    left: 8px;
}
.post-card h3 {
    margin-top: 0;
    margin-bottom: 8px;
    padding-right: 35px;
}
.post-card p {
    margin-top: 0;
    margin-bottom: 8px;
}
.post-card p:last-child {
    margin-bottom: 0;
}
</style>
