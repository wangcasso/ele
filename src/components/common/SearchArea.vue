<template>
<div class="search-wrapper">
    <div class="search" @click="searchPage()">
      <div class="context">
          <span>搜索饿了么商家、商品名称</span>

      </div>
    </div>

</div>
</template>

<script>
export default {
  methods:{
    searchPage(){
      this.$store.commit("updateSearch",{intoSearch:true})
      this.$router.push({path:"/search"})
    }
  },
  
};
</script>

<style>
.search-wrapper,
.search {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  position: sticky;
  top: 0px;
  z-index: 9;
  height:102.4px;
}
.search {
  margin: -0.133333vw 0;
  padding: 2vw 3.733333vw;
  position: absolute;
  width:100%;
}
.search>.context {
  display: flex;
  width: 100%;
  height: 9.6vw;
  justify-content: center;
  align-items: center;
  border-radius: 0.266667vw;
  background: #fff;
  color: #999;
  font-size: 28px;
}
.search>.context>span {
    font-family: simsun;
}
</style>
