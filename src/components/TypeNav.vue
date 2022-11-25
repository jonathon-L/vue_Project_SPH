<template>
 <div class="type-nav">
            <div class="container">
                <div @mouseleave="leaveIndex">
                <h2 class="all">全部商品分类</h2>
                    <div class="sort">
                    <div class="all-sort-list2" @click="goSearch">
                        <!-- 三级分类 -->
                        <div class="item bo" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex == index}">
                            <h3 @mouseenter="changeIndex(index)">
                                <!-- 添加自定义属性 -->
                                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <!-- 二三级分类 -->
                            <div class="item-list clearfix" :style="{display:currentIndex == index? 'block':'none'}">
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                                    <dl class="fore">
                                        <dt>
                                                <!-- 添加自定义属性 -->
                                            <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <!-- 添加自定义属性 -->
                                                <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
        </div>
</template>

<script setup>
import {useHomeStore} from '../store/Home'
import {  onMounted, ref } from "@vue/runtime-core";
import { storeToRefs } from 'pinia'

// 引入lodash----里面有很多函数，可以进行函数防抖
// 全部引入
// import _ from 'lodash'
//按需引入，也是优化之一
import throttle from 'lodash/throttle.js'
import { useRouter } from 'vue-router';
// console.log(throttle)
// console.log(_)
// 测试lodash
// 函数防抖
// console.log(_.debounce(function(){},1000))
//函数节流
// _.throttle(function(){},1000)

    const store = useHomeStore()
    store.category()//使用Home.js里面的函数
    const {categoryList} = storeToRefs(store)
    // console.log(categoryList)

    // 三级联动菜单的索引值，添加背景颜色
    let currentIndex = ref(-1)
    //设置函数节流_.throttle，如果是按需引入就只用throttle
    const changeIndex = throttle((index) => {
        currentIndex.value = index
        // console.log(index)
    },50)
    const leaveIndex = () => {
        currentIndex.value = -1
    }
    //定义router
    const router = useRouter()

    //跳转到search路由
    const goSearch = (event) => {
        //获取事件的的节点
        let element = event.target
        // 结点里面有一个dataset可以发现节点的自定义属性和属性值，但是自定义属性值会全部转化为小写
        // console.log(element.dataset)
        // data-categoryName data-category2Id ->categoryname category2id
        const {categoryname,category1id,category2id,category3id} = element.dataset
        //如果标签身上有categoryname属性，就一定是a标签
        if(categoryname){
            let location = {name:'search'}
            let query = {categoryName:categoryname}
            if(category1id){
                query.categoryId = category1id
            }else if(category2id){
                query.categoryId = category2id
            }else{
                query.categoryId = category3id
            }
            location.query = query
            router.push(location)

        }



    }
    
 
    
</script>

<style scoped lang="less">
.type-nav {
    .cur{
        background-color: skyblue;
    }
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }

</style>