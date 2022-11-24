//当前这个模块，API进行统一的管理

import instance from './request'

export const testCategory = () => {
<<<<<<< HEAD
    return instance({
        url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList'
        // url:'http://39.98.123.211:8510/admin/product/test/read'
        ,method:'get'
    })
}
=======
    instance({
        url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList'
        ,method:'get'
    })
}

>>>>>>> 43f601677e4d12099cbee4328e4467bf38ac5683
