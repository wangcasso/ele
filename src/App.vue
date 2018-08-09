<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nav class='tabs'>
      <router-link class='tab iconfont' :to="{name:'Home'}">
        <p>&#xe722;</p>
        <p>首页</p>      
      </router-link>
      <router-link class='tab iconfont' :to="{name:'Discovery'}">
        <p>&#xe60a;</p>
        <p>发现</p>      
      </router-link>
      <router-link class='tab iconfont' :to="{name:'Cartlist'}">
        <p>&#xe606;</p>
        <p>订单</p>
        
      </router-link>
      <router-link class='tab iconfont' :to="{name:'Mine'}">
        <p>&#xe609;</p>
        <p>我的</p>
      </router-link>
    </nav>
  </div>
  
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

.page {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  background: #fff;
}
.page.subpage {
  bottom: 0;
  z-index: 10;
}
.scroll{
  bottom:100px;
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
  font-size: 50px;
}
.tab p:nth-child(2) {
  font-size: 20px;
}
.router-link-active {
  color: #0089dc;
}
</style>
