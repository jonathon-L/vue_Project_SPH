import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 创建全局组件
import TypeNav from './components/TypeNav.vue'
import './api'
//引入vuex
import store from './store'

// 引入pinia
import { createPinia } from 'pinia'

//引入Swiper样式
import 'swiper/css/swiper.css'

//引入mockjs
import '@/mock/mockServe'


const app = createApp(App)
const pinia = createPinia()

// 使用全局组件
app.component('TypeNav',TypeNav)
// 使用vue-router
app.use(router)
// 使用vuex
app.use(store)
//使用pinia
app.use(pinia)

app.mount('#app')



