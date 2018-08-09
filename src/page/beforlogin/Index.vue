<template>
<div>
    <div id="bef"  class="page">
     <img src="../../../static/img/bgt.png" alt="">
     <p>登陆后查看订单详情</p>
   <button @click="jump()">登录</button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style >
button{
    width: 500px;
    height: 120px;
    background: green;
    font-size: 60px;
}
#bef{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   
}
p{
    font-size: 55px;
}

</style>
