<template>
    <div class="login">
        <div><img src="../../../static/img/big.png" alt=""></div>
        <h1>饿了么</h1>
        <h2>短信登录</h2>
        <input type="text" value="手机号" ref="ii" @click="aa()" v-model="sj">
        <input type="text" name="" id="" value="验证码" @click="bb()" v-model="yzm"
        ref="ini">
        <button>登录</button>
    </div>
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
}

}
}
</script>
<style>
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
