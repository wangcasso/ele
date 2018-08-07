const state = {
    addressName:"西部硅谷"
}

const getters = {

}

const mutations = {
    modifyAddressName(state, params){
        state.addressName=params.addressName
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