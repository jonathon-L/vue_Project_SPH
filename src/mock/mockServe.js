// 引入mockjs模块，
import Mock from "mockjs";
//webpack中默认对外暴露的有json，图片
import banners from './banners.json'
import floors from './floors.json'

//mock数据：第一个参数是地址，第二个参数：请求数据
const data = Mock.mock('/mock/banners',{code:200,data:banners})
Mock.mock('/mock/floors',{code:200,data:floors})
// console.log(data._mocked)