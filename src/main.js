import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 创建全局组件
<<<<<<< HEAD
import TypeNav from './components/TypeNav.vue'
import {testCategory} from './api'
// import './api'
/* let result = testCategory()
console.log(result) */
//引入vuex
import store from './store'

=======
import TypeNav from './pages/Home/TypeNav.vue'
import { testCategory } from './api'
testCategory()
console.log(testCategory)
>>>>>>> 43f601677e4d12099cbee4328e4467bf38ac5683
const app = createApp(App)
// 使用全局组件
app.component('TypeNav',TypeNav)
// 使用vue-router
app.use(router)
// 使用vuex
app.use(store)

app.mount('#app')



