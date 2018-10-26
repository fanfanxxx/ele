import Vue from 'vue'
//导入vuex模块
import Vuex from "vuex"
//导入state状态
import State from './state'
//导入getters
import {getters} from './getters'
//导入mutations
import mutations from './mutations'
//导入actions
import actions from './actions'
import vuexAlong from 'vuex-along'
//配置vuex
Vue.use(Vuex)



//配置vuex
const store = new Vuex.Store({
    //共享状态:类似组件data
    state:State ,
    //类似组件中的computed,依赖state
    getters,
    //修改状态的方法:类似组件methods;
    //处理同步操作!!!!!!!!!!!!!!,action处理异步
    mutations ,
    /* Action
  Action 类似于 mutation，不同在于：
  Action 提交的是 mutation，而不是直接变更状态。
  Action 可以包含任意异步操作。*/
    actions ,
    plugins: [vuexAlong]
})
export default store;