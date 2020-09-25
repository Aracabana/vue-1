<template>
    <div class="overlay" @click.self="$emit('closeModal')">
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="modal-close" type="button" @click="$emit('closeModal')">Close</button>
                    <h2>{{post.title}}</h2>
                    <p>{{post.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Modal",
        props: ['post']
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
</style>
