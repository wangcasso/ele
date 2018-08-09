const state = {
    username: '登录/注册',
    userId: '',
    birthYear: '1999',
    src1:'../../../static/img/logo.png',
    src2:'../../../static/img/aa.png'
}

const getters = {
    age(state){
        console.log(state);
        return (new Date().getFullYear()) - state.birthYear;
    }
}

const mutations = {
    modifyAction(state, params){
        // console.log(this.$store.state.username);
        state.username = params.b;
        state.userId = params.a;
        state.src1=state.src2
    }
}

const actions = {
    reName(context, params){
        console.log('user actions 触发了');
        context.commit('modifyUsername', params);
    }
}

export default {
    //命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}