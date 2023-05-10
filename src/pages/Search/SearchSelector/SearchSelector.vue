<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
        <ul class="logo-list">
          <li v-for="(trademark) in trademarkList" :key="trademark.tmId" @click="tradeMarkHandler(trademark)">{{trademark.tmName}}</li>
        </ul>
      </div>
      <div class="ext">
        <a href="javascript:void(0);" class="sui-btn">多选</a>
        <a href="javascript:void(0);">更多</a>
      </div>
    </div>
    <div class="type-wrap" v-for="attr in attrsList" :key="attr.attrId">
      <div class="fl key">{{attr.attrName}}</div>
      <div class="fl value">
        <ul class="type-list">
          <li v-for="(attrValue, index) in attr.attrValueList" :key="index" @click="attrInfo(attr,attrValue)">
            <a>{{attrValue}}</a>
          </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
    
  </div>
</template>

<script setup>
import { useSearchStore } from "@/store/Search";
import { storeToRefs } from "pinia"; 
import { useRoute, useRouter } from "vue-router";
 

  const store  =  useSearchStore()
  const router = useRouter
  const route = useRoute
  // store.getSearchList()

  //getter里面的东西也可以直接使用在这里--storeToRefs
  const {goodsList, attrsList, trademarkList } = storeToRefs(store);

  const emit = defineEmits(['trademarkInfo','attrInfo'])
 const tradeMarkHandler = (trademark) => {
  // alert(123)  
  // 点击品牌后还需要对服务器发请求
  // 有一点是,要在父组件里面发请求,为什么? ->  因为父组件中的searchParam参数是带给服务器的参数,子组件把你点击的品牌的信息传递给父组件来发送请求
  // 子传父用defineEmits
  // console.log(trademark)
  emit('trademarkInfo',trademark)
 }

 //平台售卖属性值的
 const attrInfo = (attr,attrValue) => {
  emit('attrInfo',attr,attrValue)
  // alert(123)
  

 }

</script>

<style lang="less" scoped>
  .selector {
    border: 1px solid #ddd;
    margin-bottom: 5px;
    overflow: hidden;

    .logo {
      border-top: 0;
      margin: 0;
      position: relative;
      overflow: hidden;

      .key {
        padding-bottom: 87px !important;
      }
    }

    .type-wrap {
      margin: 0;
      position: relative;
      border-top: 1px solid #ddd;
      overflow: hidden;

      .key {
        width: 100px;
        background: #f1f1f1;
        line-height: 26px;
        text-align: right;
        padding: 10px 10px 0 15px;
        float: left;
      }

      .value {
        overflow: hidden;
        padding: 10px 0 0 15px;
        color: #333;
        margin-left: 120px;
        padding-right: 90px;

        .logo-list {
          li {
            float: left;
            border: 1px solid #e4e4e4;
            margin: -1px -1px 0 0;
            width: 105px;
            height: 52px;
            text-align: center;
            line-height: 52px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
            color: #e1251b;
            font-style: italic;
            font-size: 14px;

            img {
              max-width: 100%;
              vertical-align: middle;
            }
          }
        }

        .type-list {
          li {
            float: left;
            display: block;
            margin-right: 30px;
            line-height: 26px;

            a {
              text-decoration: none;
              color: #666;
            }
          }
        }
      }

      .ext {
        position: absolute;
        top: 10px;
        right: 10px;

        .sui-btn {
          display: inline-block;
          padding: 2px 14px;
          box-sizing: border-box;
          margin-bottom: 0;
          font-size: 12px;
          line-height: 18px;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          padding: 0 10px;
          background: #fff;
          border: 1px solid #d5d5d5;
        }

        a {
          color: #666;
        }
      }
    }
  }
</style>