import axios from 'axios'
import nprogress from 'nprogress'
//start表示进度条开始，done表示进度条结束
//引入进度条的样式
import '/node_modules/nprogress/nprogress.css'

const instance = axios.create({
    
    baseURL:'/api',
    // 请求超出的时间
    timeout:5000,
    
})
//添加请求拦截器
instance.interceptors.request.use((config) => {

    // 进度条开始
    nprogress.start()

    //config是配置对象，对象的header属性很重要
    return config
},(error) => {

    // 响应失败的回调函数
    return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use((res) => {

    // 进度条结束
    nprogress.done()
    // 成功的回调函数
    return res.data
},(error) => {

    // 响应失败的回调函数
    return Promise.reject(new Error("fail"))
})

export default instance
