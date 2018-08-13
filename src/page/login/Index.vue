<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <div class="login">
        <div><img src="../../../static/img/big.png" alt=""></div>
        <h1>饿了么</h1>
        <h2>短信登录</h2>
        <input type="text" value="手机号" ref="ii" @click="aa()" v-model="sj">
        <input type="text" name="" id="" ref="in" value="验证码" @click="bb()" v-model="yzm"
    >
        <button @click="modifyAction()">登录</button>
    </div>
    </transition>
</template>

<script>
export default {
    data(){
        return{
            sj:'手机号',
            yzm:'验证码',
}
        },

methods:{
aa(){
    this.sj=''
},
bb(){
    this.yzm=''
},
  modifyAction(){
            let value = this.$refs.ii.value;
            let zz = this.$refs.in.value;
            let obj={ a:zz,b:value}
            this.$store.commit('user/modifyAction', obj);
            this.$router.back()
        }
}

}
</script>
<style>
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
.login {
    padding: 30px;
    font-size: 40px;
 position: absolute;
  top: 0;
 width:100%;
  bottom:0;
  z-index:6;
  background:#fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
input{
     width: 85%;
     height: 100px;
     border: 2px solid gray;
     border-radius: 5px;
}
button{
    width: 60%;
    height: 120px;
    background: green;

}
</style>
