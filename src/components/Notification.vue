<template>
    <div class="notification" :class="notificationClass">
        <p>{{notificationText}}</p>
    </div>
</template>
<script>
    
    import {getters, mutations} from '../store';
    export default {
        name: "Notification",
        computed: {
            ...getters,
        },
        methods: {
            ...mutations,
        },
        mounted() {
            setTimeout(() => {
                this.toggleNotification();
            }, 1200)
        }
    }
</script>
<style scoped>
    .notification {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 100;
        padding: 5px 20px;
        color: #ffffff;
        opacity: 0.8;
    }
    .notification.success {
        background-color: darkgreen;
    }
    .notification.error {
        background-color: darkred;
    }
</style>
