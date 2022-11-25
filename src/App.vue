<template>
<Header></Header>
    <router-view></router-view>
<Footer v-show="route.meta.show"></Footer>
</template>

<script setup>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style scoped>

</style>