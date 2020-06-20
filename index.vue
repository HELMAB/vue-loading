<template>
    <div class="loading"
         :style="`background-color: ${bg};`"
         v-show="isLoading">
        <i :class="`fa fa-${icon} fa-pulse fa-${size}x fa-fw`"
           :style="`color: ${icon_color}`"></i>
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
    export default {
        name: 'VueLoading',
        data() {
            return {
                isLoading: false,
                bg: '#41b883ad',
                icon: 'spinner',
                size: '3',
                icon_color: '#ffffff',
            }
        },
        methods: {
            changeStatus(isLoading) {
                this.isLoading = isLoading
            }
        }
    }
</script>

<style scoped>
    .loading {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        z-index: 99999 !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading i {
        position: absolute;
        opacity: 1;
    }
</style>
