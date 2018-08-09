<template>
    <div class='Swiper'>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(page, index) in data" :key='index'>
                    <div class="swiper_box">
                        <div class="swiper_item" v-for='i in page' :key='i.id'>
                            <img :src="i.image_hash|pic(90)" alt="">
                            <span>{{i.name}}</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
         </div>
    </div>
</template>

<script>
import {getShopping} from "@/services/shopping"

export default {
    data(){
        return{
            data: []
        }
    },
    mounted() {
          var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            
            // 如果需要分页器
            pagination: '.swiper-pagination',
        })
        getShopping().then((response)=>{
            let entries = response.data[0].entries;
            let data = [];
            while(entries.length > 0){
                data.push(entries.splice(0, 10));
            }
            this.data = data;
            this.$nextTick(()=>{
                mySwiper.update();
                mySwiper.reLoop();
                mySwiper.slideTo(1, 0);
            })
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
