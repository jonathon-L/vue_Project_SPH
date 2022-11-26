import {createRouter,createWebHashHistory,} from 'vue-router'
import Home from '../pages/Home/index.vue'
import Login from '../pages/Login/index.vue'
import Rejister from '../pages/Rejister/index.vue'
import Search from '../pages/Search/index.vue'


const routes = [
    { 
        path: '/', 
        // component:Home
        redirect: '/home',
        meta:{show:true}
        
    },
    {
        name:'home',
        path: '/home',
        component: Home,
        meta:{show:true}

    },
    {
        name:'login',
        path: '/login',
        component: Login,
        meta:{show:false}
    },
    {
        name:'rejister',
        path: '/rejister',
        component: Rejister,
        meta:{show:false}

    },
    {
        name:'search',
        path: '/search/:keyword?',
        component: Search,
        meta:{show:true},
        // props传递参数---三种写法
        // props:true
        // props:{a:1,b:2}
       /*  props:(route) => {
            return{
                keyword:route.params.keyword,
            }
        } */
    },
]
    
    // 创建路由对象
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })
    export default router;
