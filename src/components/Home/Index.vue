<template>
    <div>
        <header class="location">
            <div class="place">
                <div class="place60">
                    <span>@</span><span class='placeMsg'>禧福阁深圳西部硅谷</span>
                </div>
            </div>
        </header>
        <SearchArea></SearchArea>
        <Swiper></Swiper>
        <div class="fix">
          <div class="doubleBox">
            <div class="box_left">
              <h3>品质套餐</h3>
              <div class="tip">搭配齐全吃得好</div>
              <div class="buy">立即抢购 &gt;</div>
              <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
            <div class="box_right">
              <h3>限量抢购</h3>
              <div class="tip">超值美味 9.9元起</div>
              <div class="buy"><span>946人</span>正在抢 &gt;</div>
              <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import SearchArea from "@/components/common/SearchArea";
import Swiper from "@/components/common/Swiper";

export default {
  components: {
    SearchArea,
    Swiper
  }
};
</script>

<style>
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
</style>
