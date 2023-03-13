//当前这个模块，API进行统一的管理

import instance from './request'
import mockRequest from './mockRequest'
import { method } from 'lodash'


//向服务器发请求，真实的数据，获取商品三级列表
export const reqCategory = () => {
    return instance({
        url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList'
        // url:'http://39.98.123.211:8510/admin/product/test/read'
        ,method:'get'
    })
}

// 想mock发请求,得到自己弄的虚拟的数据,当成真实的数据----轮播图数据--Home首页轮播图数据
export const reqMockBanner = () => {
    return mockRequest({
        url:'/banners',
        method:'get'
    })
}

// 想mock发请求,得到自己弄的虚拟的数据,当成真实的数据---floor数据
export const reqMockFloor = () => {
    return mockRequest({
        url:'/floors',
        method:'get'
    })
}


// 获取搜素模块数据-----地址：“http://gmall-h5-api.atguigu.cn/api/list”，请求方式是post  参数：参考api文档
/*category1Id category2Id category3Id categoryName keyword props trademark order pageNo pageSize */
export const reqGetSearchInfo = (params) => {
    return instance({
        url:'http://gmall-h5-api.atguigu.cn/api/list',
        method:'post',
        data:params
    })
}



