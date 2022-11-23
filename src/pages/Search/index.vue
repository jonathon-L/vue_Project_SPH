<template>
我是我是search组件
<h2>params:----{{route.params.keyword}}</h2>
<h2>query:----{{route.query.k}}</h2>
</template>

<script setup>
import{ useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>

</style>