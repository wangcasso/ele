<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nav class='tabs'>
      <router-link class='tab' :to="{name:'Home'}">首页</router-link>
      <router-link class='tab' :to="{name:'Discovery'}">发现</router-link>
      <router-link class='tab' :to="{name:'Cartlist'}">订单</router-link>
      <router-link class='tab' :to="{name:'Mine'}">我的</router-link>
    </nav>
  </div>
  
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  background: #fff;
}
.page.subpage{
  bottom: 0;
  z-index: 10;
  
}
.tabs {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2vw;
  background-color: #fff;
  height: 13.333333vw;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}
.tab {
  display: block;
  flex: 1;
  text-align: center;
  font-size: 20px;
}
</style>
