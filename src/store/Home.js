import { defineStore } from 'pinia'
import { reactive, ref, toRefs } from 'vue'
import {testCategory} from '../api'

export const useHomeStore = defineStore('Home',() => {
    
    async function category(){
        let result = await testCategory()
        if(result.code == 200){
            return result.data
        }
        
    }
    return{
        category,
    }
})
