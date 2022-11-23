import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 创建全局组件
import TypeNav from './pages/Home/TypeNav.vue'

const app = createApp(App)
app.component('TypeNav',TypeNav)
app.use(router)
app.mount('#app')



