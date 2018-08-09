<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <div id="set" class="page">
  <h1>用户设置页面</h1>
    </div>
    </transition>
   
</template>

<script>
export default {

}
</script>

<style>
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
#set {
    padding: 30px;
    font-size: 40px;
 position: absolute;
  top: 0;
 width:100%;
  bottom:0;
  z-index:2;
  background:#fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
