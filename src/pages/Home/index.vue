<template>
<TypeNav/>
<ListContainer/>
<Recommend/>
<Rank/>
<Like/>
<!-- 调用两次组件.分别传两个id所携带的参数 -->
<Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
<!-- <Floor/> -->
<Brand/>
</template>

<script setup>
import ListContainer from './ListContainer.vue';
import Recommend from './Recommend.vue'
import Rank from './Rank.vue'
import Like from './Like.vue'
import Floor from './Floor.vue'
import Brand from './Brand.vue'
import { useHomeStore } from '@/store/Home';
import { storeToRefs } from 'pinia';

const store = useHomeStore()
//因为floor组件复用了,所以,在home组件里面调用action赋值给floorlist,里面有两个数据,两个floor组件对应两个数组,所以可以把一个floor组件删掉,用v-for调用两次
store.getFloorList()
const {floorList} = storeToRefs(store)
</script>

<style scoped>

</style>