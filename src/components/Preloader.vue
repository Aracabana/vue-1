<template>
    <div class="preloader-wrapper">
        <div class="cp-spinner cp-morph"></div>
    </div>
</template>
<script>
    export default {
        name: "Preloader"
    }
</script>
<style scoped>
    .preloader-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,255,255,0.8);
    }
    .cp-spinner {
        width: 48px;
        height: 48px;
        display: inline-block;
        box-sizing: border-box;
        position: relative
    }
    .cp-morph {
        width: 48px;
        height: 48px;
        display: inline-block;
        box-sizing: border-box;
        background: #0fd6ff;
        animation: cp-morph-animate 1s linear infinite
    }
    @keyframes cp-morph-animate {
        0% {
            transform: rotate(0) scale(1);
            border-radius: 0;
            background: #f3d53f
        }
        25%, 75% {
            transform: rotate(180deg) scale(.4);
            border-radius: 50%;
            background: #0fd6ff
        }
        100% {
            transform: rotate(360deg) scale(1);
            border-radius: 0;
            background: #f3d53f
        }
    }
</style>
