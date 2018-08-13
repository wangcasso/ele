import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import userInfo from './userInfo.js'
import location from './location.js'
import restaurant from './restaurant.js'

// 全局数据,全局状态
const state = {
    intoSearch:false
}
// 计算的数据，通过state和其他的getters计算得来的
// 不能修改，只能通过state和其他的getters的变化而变化
const getters = {
    
}

// 操作state的事件
const mutations = {
    modifyUsername(state, params){
        console.log('root mutations 触发了');
    },
    updateSearch(state, params){
        state.intoSearch=params.intoSearch
            state.username = params.b;
            state.userId = params.a;
        
    }
}

//修改state值的事件
// actions可以进行复杂的逻辑运算。
// 包括异步操作。
const actions = {
    reName(){
        console.log('root actions 触发了');
    }
};


// 创建仓库，管理数据的仓库
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        user: userInfo,
        location,
        restaurant
    }
});


export default store;

