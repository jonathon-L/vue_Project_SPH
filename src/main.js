import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 创建全局组件
import TypeNav from './components/TypeNav.vue'
import {testCategory} from './api'
// import './api'
/* let result = testCategory()
console.log(result) */
//引入vuex
import store from './store'

const app = createApp(App)
// 使用全局组件
app.component('TypeNav',TypeNav)
// 使用vue-router
app.use(router)
// 使用vuex
app.use(store)

app.mount('#app')



