import axios from 'axios'

const instance = axios.create({
    
    baseURL:'/admin',
    // 请求超出的时间
    timeout:5000
})
//添加请求拦截器
instance.interceptors.request.use((config) => {

    //config是配置对象，对象的header属性很重要
    return config
},(error) => {

    // 响应失败的回调函数
    return Promise.reject(error)
})

//添加响应拦截器
instance.interceptors.response.use((res) => {

    // 成功的回调函数
    return res.data
},(error) => {

    // 响应失败的回调函数
    return Promise.reject(new Error("fail"))
})

export default instance
