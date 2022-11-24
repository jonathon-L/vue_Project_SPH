import {testCategory} from '../api'
const state={
    categoryList:[]
}
const actions={
    async categoryList({commit}){
        let result = await testCategory()
        // console.log(this)
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    }
}
const mutations={
    CATEGORYLIST(state,value){
        state.categoryList = value
    }
}
const getters={}
export default{
    state,
    actions,
    mutations,
    getters
}