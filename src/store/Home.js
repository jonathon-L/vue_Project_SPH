import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";
import { reqCategory,reqMockBanner,reqMockFloor } from "../api";
//引入mockRequest

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
        //home仓库中的三级菜单的数据
      categoryList: [],
      //轮播图的数据
      bannerList:[],
      //floor组件的数据
      floorList:[]
    };
  },
  getters: {},
  actions: {
    async category() {
      let result = await reqCategory();
      if (result.code == 200) {
        this.categoryList = result.data;
      }
    },

    async getBannerList(){
        let result = await reqMockBanner()
        // console.log(result.data)
        this.bannerList = result.data
    },
    async getFloorList(){
        let result = await reqMockFloor()
        this.floorList = result.data
    }
  },

});
