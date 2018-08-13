<template>
    <div class="section">
        <div class="item" v-for="(item,index) in data" :key="index" >
            <div class="up_shopInfo">
                <div class="pic">
                    <img :src="item.restaurant.image_path|pic(130)" alt="">
                </div>
                <div class="info_main">
                    <div class="info_line">
                        <h3>
                            <i content="品牌">品牌</i>
                            <span>{{item.restaurant.name}}</span>
                        </h3>
                        <ul>
                            <li v-show="item.restaurant.recommend.reason=='广告'">广告</li>
                            <li v-show="item.restaurant.supports[0]&&item.restaurant.supports[0].icon_name=='保'" class='bao'>保</li>

                        </ul>
                    </div>
                    <div class="info_line">
                        <div class="rateStar">
                            <div class="box">
                                <div class="star_dark">
                                    <img src="../../../static/img/star_dark.svg" alt="">
                                </div>
                                <div class="star_light" :style="'width:'+item.restaurant.rating/5*100+'%'">
                                    <img src="../../../static/img/star_light.svg" alt="" >
                                </div>
                            </div>
                        <span class="rateScore">{{item.restaurant.rating}}</span>
                        <span class="saleNum">月售{{item.restaurant.recent_order_num}}单</span>

                        </div>
                        <div class="delivery" v-show="!item.restaurant.delivery_mode==false">
                            <div class="delivery_icon" content="蜂鸟专送">蜂鸟专送</div>
                        </div>
                    </div>
                    <div class="info_line">
                        <div class="less_money">
                            <span>¥{{item.restaurant.piecewise_agent_fee.rules[0].price}}起送</span>
                            <span>优惠配送费¥{{item.restaurant.piecewise_agent_fee.rules[0].fee}}</span>
                        </div>
                        <div class="time_distance">
                            <span>{{item.restaurant.distance|far}}</span>
                            <span>{{item.restaurant.order_lead_time}}分钟</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="down_activity">
                <div class="tagLine">
                    <span>{{item.restaurant.support_tags[0].text}}</span>
                    <span v-if="!item.restaurant.support_tags[1]==false&&item.restaurant.support_tags[1].color=='333333'">{{item.restaurant.support_tags[1].text}}</span>
                    <span class="hot" v-if="!item.restaurant.support_tags[1]==false&&item.restaurant.support_tags[1].color=='666666'">
                        <img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="">
                        <span>口碑人气好店</span>
                    </span>
                </div>
                <span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjI1TDI4MCAwIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjEiLz48L3N2Zz4=" alt="" class="dot_line">
                </span>
                <div class="lot_activities">
                    <div class="activitiesList">
                        <div class="actRow" v-for="(i,index) in item.restaurant.activities"  :key="i.id"  v-show="index<item.restaurant.scheme">
                            <span class="iconWord" :style="'background:'+'#'+i.icon_color">{{i.icon_name}}</span>
                            <span class="desc">{{i.description}}</span>
                        </div>
                        
                    </div>
                    <div class="activitiesBtn" @click="showAct(item)">
                        <span>{{item.restaurant.activities.length}}个活动</span>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" class="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getRsetaurant} from "@/services/restaurantService"
export default {
    props:{
        getMore:""
    },
    data(){
        return{
            Num:0,
            data:[],
            remine:this.$store.state.restaurant.lock
        }
    },
   
    methods:{
        showAct(i){
            i.restaurant.scheme==2?i.restaurant.scheme=100:i.restaurant.scheme=2
            this.$nextTick(()=>{
                this.$emit('refresh')
            })
            
            
        },
        getMsg(){
            getRsetaurant(this.Num,8).then((response)=>{
            this.data=[...this.data,...response.data.items]
            // console.log(this.data)
            for(let i=this.Num;i<this.Num+8;i++){
                this.data[i].restaurant.scheme=2
            }
            // console.log(response)
            this.$nextTick(()=>{
                this.$emit('refresh')
                this.Num+=8
                this.$store.commit("restaurant/modifyAddressName",{lock:"开"})

            })
            
        })
        }
    },
    watch:{
        getMore:function(){
            // console.log("监听到了")
            if(this.$store.state.restaurant.lock=="关"){
                this.getMsg()
            }
            
        }
    },
    mounted() {
        this.getMsg()
    },
}
</script>

<style>
.item{
    position: relative;
    border-bottom: .133333vw solid #eee;
    background-color: #fff;
    color: #666;
    padding: 4vw 0;
    font-size:22px;
    line-height: normal;
    }
.up_shopInfo{
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0 2.666667vw;
    }
    .up_shopInfo .pic{
    position: relative;
    flex: none;
    z-index: 0;
    }
    .pic img{
    box-sizing: border-box;
    display: block;
    border-radius: .533333vw;
    border: .133333vw solid rgba(0,0,0,.08);    
    width: 17.333333vw;
    height: 17.333333vw;
    }
    .up_shopInfo .info_main{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    flex-grow: 1;
    flex-direction: column;
    user-select: none;
    padding-left: 2.666667vw;
    }
    .up_shopInfo .info_line{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;

    }
    .up_shopInfo .info_line h3{
    display: flex;
    margin: 0;
    padding: 0;
    color: #333;
    font-weight: 700;
    font-size: 30px;
    overflow: hidden;
    }
    .up_shopInfo .info_line h3 i{
    position: relative;
    margin-right: 1.333333vw;
    padding: .266667vw .666667vw;
    color: transparent;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: 22px;
    font-style: normal;
    line-height: normal;
    }
    .up_shopInfo .info_line h3 i:after {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    content: attr(content);
    padding: .113733vw .2844vw;
    padding: .533333vw 1.333333vw;
    color: #6f3f15;
    font-weight: 700;
    font-size: 44px;
    border-radius: .227467vw;
    border-radius: 1.066667vw;
    background-image: linear-gradient(-139deg,#fff100,#ffe339);
    white-space: nowrap;
    transform: scale(.5);
    transform-origin: 0 0;
}
.up_shopInfo .info_line h3 span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
}
.up_shopInfo .info_line  ul{
    display: flex;
    align-items: center;
    margin-left: 2.666667vw;
}
.up_shopInfo .info_line  ul li{
    height: 2.933333vw;
    width: 4.8vw;
    margin-right: .133333vw;
    position: relative;
    margin-left: .8vw;
    font-size: 14px;
    color: #ccc;
    border: .133333vw solid #eee;
}
.up_shopInfo .info_line  ul li.bao{
    font-size: 20px;
    color: #999;
}
.up_shopInfo .info_line .rateStar{
    display: flex;
    align-items: center;
}
.up_shopInfo .info_line .rateStar .box{
    margin-right: 1.066667vw;
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.up_shopInfo .info_line .rateStar .box .star_light{
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
.up_shopInfo .info_line .rateStar .box  img{
    width: 14.933333vw;
    height: 2.666667vw;
    flex: none;
    max-width: none;
}
.up_shopInfo .info_line .rateStar .rateScore{
        margin-right: 1.066667vw;
}
.up_shopInfo .info_line .delivery{
    display: flex;
    align-items: center;
}
.up_shopInfo .info_line .delivery .delivery_icon{
    position: relative;
    padding: 0 .4vw;
    color: transparent;
    white-space: nowrap;
    font-size: 20px;
    border: .133333vw solid transparent;
    border-radius: .4vw;
    line-height: 1.2;
}
.up_shopInfo .info_line .delivery .delivery_icon:after {
    color: #fff;
    border: .133333vw solid #0097ff;
    background-image: linear-gradient(45deg,#0085ff,#0af);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    white-space: nowrap;
    content: attr(content);
    font-size: 40px;
    padding: 0 .113733vw;
    padding: 0 .533333vw;
    border-radius: .170667vw;
    border-radius: .8vw;
    transform: scale(.5);
    transform-origin: 0 0;
}
.up_shopInfo .info_line .less_money{
    display: flex;
    align-content: center;
}
.up_shopInfo .info_line .less_money span:nth-of-type(2) {
    overflow: hidden;
    max-width: 26.666667vw;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.up_shopInfo .info_line .less_money span:nth-of-type(2)::before{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}
.up_shopInfo .info_line .time_distance{
    display: flex;
    align-items: center;
    color: #999;
}
.up_shopInfo .info_line .time_distance span:nth-of-type(1)::after{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}
.down_activity{
    padding-left: 22.666667vw;
}
.down_activity .tagLine{
    display: flex;
    align-items: center;
    margin: 2.666667vw 2.666667vw 0 0;
}
.down_activity .tagLine>span {
    margin-right: 1.333333vw;
        color: rgb(102, 102, 102);
    border-color: rgb(221, 221, 221);
    font-size: 20px;
        border: 1px solid #ddd;
        padding: 0 8px;
}
.down_activity .tagLine .hot{
    display: flex;
    align-items: center;
    border-radius: .133333vw;
    font-size: 20px;
    color: #666;
    height: 4vw;
    padding: 0 8px;
    color: #e8470b;
    border:none
}
.down_activity .tagLine .hot img{
    margin-top: .4vw;
    height: 2.666667vw;
    width: 2.666667vw;
    margin-right: .8vw;
}
.down_activity .dot_line{
    width: 100%;
    height: .133333vw;
    padding-right: 2.666667vw;
}
.down_activity .lot_activities{
    display: flex;
    position: relative;
    justify-content: space-between;
    align-content: stretch;
    overflow: hidden;
}
.down_activity .lot_activities .activitiesList{
    flex: 1;
    padding-right: 2.666667vw;
    overflow: hidden;
}
.down_activity .lot_activities .activitiesBtn{
    padding: .8vw 2.666667vw 0 0;
    color: #999;
    text-align: right;
    font-size: 20px;
    line-height: 1;
}
.down_activity .lot_activities .activitiesList .actRow{
    display: flex;
    align-items: center;
    font-size: 22px;
    line-height: 4.8vw;
}    
.down_activity .lot_activities .activitiesList .actRow .iconWord{
    display: inline-block;
    margin-right: 1.6vw;
    height: 3.733333vw;
    width: 3.733333vw;
    color: #fff;
    font-size: 21px;
    background-color: rgb(112, 188, 70);
    display: flex;
    align-items: center;
    justify-content: center;
}
.down_activity .lot_activities .activitiesList .actRow .desc{
    display: inline-block;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
}
.down_activity .lot_activities .activitiesBtn img{
    width: 1.733333vw;
    opacity: .9;
    margin-left: 1.066667vw;
    transition: all .3s ease-in-out;
    transform: rotate(0deg);
    fill: currentColor;
    will-change: transform;
    vertical-align: middle;
    position: relative;
    z-index: 1;

}
</style>
