//当前这个模块，API进行统一的管理

import instance from './request'

export const testCategory = () => {
    return instance({
        url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList'
        // url:'http://39.98.123.211:8510/admin/product/test/read'
        ,method:'get'
    })
}