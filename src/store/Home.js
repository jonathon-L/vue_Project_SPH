import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'
import {testCategory} from '../api'


export const useHomeStore = defineStore('home',{
    state:() => {
        return{
            categoryList:[],
        }
    },
    getters:{

    },
    actions:{
        async category(){
            let result = await testCategory()
            if(result.code == 200){
                this.categoryList = result.data
            }
        } 
    }
    
})
