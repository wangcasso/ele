<template>
    
    <div>
      <SearchArea v-show="search_show" class="search_fix" ref="search_fix"></SearchArea>
      <Sort ref="sort_fix" class="sort_fix" v-show="sort_show"></Sort>
      <Scroll :onScroll="fixTop" class="scroll" ref="scroll">
        
      <!-- 定位信息 -->
        <header class="location" @click="checkPlace()">
            <div class="place">
                <div class="place60">
                    <span>@</span><span class='placeMsg'>{{$store.state.location.addressName}}</span>
                </div>
            </div>
        </header>
        
        <!-- 搜索按钮 -->
        <SearchArea ></SearchArea>
        <!-- 商品列表轮播图 -->
        <Swiper></Swiper>
        <!-- 固定死的两张广告 -->
        <div class="fix">
          <div class="doubleBox">
            <div class="box_left">
              <h3>品质套餐</h3>
              <div class="tip">搭配齐全吃得好</div>
              <div class="buy">立即抢购 &gt;</div>
              <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
            <div class="box_right" @click="right()">
              <h3>限量抢购</h3>
              <div class="tip">超值美味 9.9元起</div>
              <div class="buy"><span>946人</span>正在抢 &gt;</div>
              <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
          </div>
        </div>
        <!--  -->
        <div id="shoplist-title" class="shoplist-title">推荐商家</div>
        <Sort ref="sort"></Sort>
          <OptionCard @refresh="getNew" :getMore="forSon"></OptionCard>
        
        
      </Scroll>
        <router-view></router-view>
    </div>
</template>

<script>
import SearchArea from "@/components/common/SearchArea";
import Swiper from "@/components/common/Swiper";

export default {
  data(){
    return{
      search_show:false,
      sort_show:false,
      forSon:"22"
    }
  },
  components: {
    SearchArea,
    Swiper,
  },
  methods:{
    checkPlace(){
      this.$router.push({path:"/home/place"})
   
    },
    fixTop(h,y){
      if(h<=-89){
          this.search_show=true
      }else{this.search_show=false}
      if(h<=-915+102){
         this.sort_show=true
      }else{this.sort_show=false}

      if(y>-100&&this.$store.state.restaurant.lock=="开"){
        this.$store.commit("restaurant/modifyAddressName",{lock:"关"})
        // console.log(this.$store.state.restaurant.lock)
        this.forSon++
      }
    },
    getNew(){
      this.$refs.scroll.refreshDOM()
    },
    right(){
      this.$router.push({path:"/right"})
    }
  }
};
</script>

<style>
.scroll{
  overflow: hidden;
}
.search_fix{
  position: absolute;
  top:0;
  left:0;
  right:0;
}
.sort_fix{
  position: absolute;
  top:0;
  left:0;
  right:0;
}
.location {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 2.666667vw 3.733333vw 0;
}
.location .place {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 9.2vw;
  font-size: 34px;
}
.location .place .place60 {
  display: flex;
  align-items: center;
  width: 60%;
  font-weight: 700;
}
.place span:first-of-type {
  width: 3.466667vw;
}
.placeMsg {
  margin: 0 1.333333vw;
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.fix {
    margin-bottom: 2.133333vw;
    font-size: 0;
    padding: 0 2.666667vw;
}
.doubleBox {
    background: #fff;
        display: flex;
}
.doubleBox .box_left, .box_right{
    height: 37.333333vw;
    padding: 3.2vw 0 0 4vw;
    z-index: 0;
        flex: 1;
        background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    position: relative;

}
.doubleBox .box_left{
      margin-right: .8vw;
}
.doubleBox .box_right{
      margin-right: .8vw;
}
.doubleBox div h3 {
  font-size: 34px;
    font-weight: 700;
    margin-bottom: 1.333333vw;
    color: #333;
}
.doubleBox .box_right h3 {

    color: #e81919;;
}
.doubleBox div .tip{
      font-size: 26px;
    color: #777;
    margin-bottom: .24rem;
    margin-bottom: 2.4vw;
}
.doubleBox div .buy{
    font-size: 24px;
    color: #af8260;
    font-weight: 700;
}
.buy span{
      color: #e81919;
}  
.doubleBox .box_right .buy{
  color: #333;
}
.doubleBox div img {
    position: absolute;
    right: 0;
    bottom: -2vw;
    width: 32vw;
    height: 21.333333vw;
}
.shoplist-title{
   
    display: flex;
  
    align-items: center;
   
    justify-content: center;
    height: .96rem;
    height: 9.6vw;
    font-size: 30px;
    color: #000;
}
.shoplist-title:after, .shoplist-title:before {
    display: block;
    content: "";
    width: 5.333333vw;
    height: .266667vw;
    background-color: #999;
}
.shoplist-title:before {
    margin-right: 3.466667vw;
}
.shoplist-title:after {
    margin-left: 3.466667vw;
}
</style>
