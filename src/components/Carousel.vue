<template>
  <!-- 因为所有的轮播图都是一个格式，只要在父组件里传入想要的图片的数组引入就行 -->
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in floorList.list"
        :key="index"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script setup>
// 专门放置轮播图的数据的组件
import { nextTick, watch } from "@vue/runtime-core";
import Swiper from "swiper";

const floorList = defineProps(["list"]);
watch(floorList, () => {
  nextTick(() => {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, //下面的小球也可以点击
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
});
</script>

<style scoped></style>
