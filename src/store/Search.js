import { defineStore } from "pinia";
//引入search模块的api
import { reqGetSearchInfo } from "../api";
export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchList: {},
    };
  },
  getters: {
    goodsList(state){
        return state.searchList.goodsList || []//如果网络不给力|没有网，也要返回一个空数组，否则返回undefined
    },
    attrsList(state){
        return state.searchList.attrsList || []//如果网络不给力|没有网，也要返回一个空数组，否则返回undefined
    },
    trademarkList(state){
        return state.searchList.trademarkList || []//如果网络不给力|没有网，也要返回一个空数组，否则返回undefined
    }
  },
  actions: {
    async getSearchList(params={}) {
      let result = await reqGetSearchInfo(params);
      // console.log(result.data)
      if (result.code == 200) {
        this.searchList = result.data;
        
      }
    },
  },
});
