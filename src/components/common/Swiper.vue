<template>
    <div class='Swiper'>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" >
                    <div class="swiper_box">
                        <div class="swiper_item" v-for='i in [1,2,3,4,5,6,7,8,9,10]' :key='i'>
                            <img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                            <span>美食</span>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" >
                    <div class="swiper_box">
                        <div class="swiper_item" v-for='i in [1,2,3,4,5,6,7,8,9,10]' :key='i'>
                            <img src="//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                            <span>美食</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            <div class="swiper-pagination"></div>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted() {
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination',
           
        })        
    },
}
</script>

<style>
.Swiper{
  overflow: hidden;
    height: 47.2vw;
    background-color: #fff;
    text-align: center;
}
.swiper_box{
    width: 100%;
    height: 100%;
}
.swiper_item {
    position: relative;
    float: left;
    margin-top: .293333rem;
    margin-top: 2.933333vw;
    width: 20%;
}
.swiper_item img {
    position: relative;
    display: inline-block;
    width: 1.2rem;
    width: 12vw;
    height: 1.2rem;
    height: 12vw;
    vertical-align: top;
}
.swiper_item span {
    display: block;
    margin-top: 1.333333vw;
    color: #666;
    font-size: 24px;
}
.swiper-container{
    height:100%;
}
</style>
