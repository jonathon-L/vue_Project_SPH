<template>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="route.meta.show"></Footer>
</template>

<script setup>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { useHomeStore } from "./store/Home";
const route = useRoute();

//App组件的onMounted只执行一次，避免了重复发送请求
onMounted(() => {
  const store = useHomeStore();
  store.category(); //使用Home.js里面的函数
});
</script>

<style scoped></style>
