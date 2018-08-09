const state = {
    lock:"开"
}

const getters = {

}

const mutations = {
    modifyAddressName(state, params){
        state.lock=params.lock
    }
}

const actions = {
    reName(){
        console.log('location actions 触发了');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}