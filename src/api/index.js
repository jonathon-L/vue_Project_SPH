//当前这个模块，API进行统一的管理

import instance from './request'

export const testCategory = () => {
    instance({
        url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList'
        ,method:'get'
    })
}

