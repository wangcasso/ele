<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    
    <div class="page subpage"> 
        <div class="blue_bar">
            <span @click="back()">〈</span>
            <div>选择收货地址</div>
        </div>
        <div class="workarea">
            <div class="city">
                <span>深圳</span><b class="v"></b>
            </div>
            <div class="inputArea">
                <span>Q</span><input type="search" placeholder="请输入地址"  v-model='inp'>
            </div>
        </div>
        <div class="show" v-if="show">
            <div class="show_box" v-for="item in adress" :key="item.request_id" @click="choicePlace(item.name)">
                <div class="address">
                    <p><span class="AddressCell-2FRCi_0">{{item.name}}</span></p>
                    <p class="address_detail">{{item.address}}</p>
                </div>
                <div class="far">{{item.distance}}</div>
            </div>

        </div>
            
    </div>
</transition>

</template>

<script>
import {getLocation} from "../../services/cityService.js"
export default {
    data(){
        return{
            inp:"",
            timer:'',
            adress:[],
            show:false,
        }
    },
    methods:{
       back(){
           this.$router.back()
       },
       choicePlace(name){
           this.$store.commit("location/modifyAddressName",{addressName:name})
           this.back()
       }
    },
    mounted() {
       
    },
    watch:{
        inp:function(a) {
            if(!a){
                this.show=false
                clearTimeout(this.timer)
                return
            }
            console.log(a)
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                getLocation(a).then((data)=>{
                    this.adress=data.data
                    this.show=true
                })
                
            }, 500);
          }
    }
}
</script>

<style>
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
.blue_bar{
        position: relative;
    width: 100%;
    color: #fff;
        background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    font-size: 24px;
}
.blue_bar span{
    position: absolute;
    left: 3.333333vw;
    top: 3.333333vw;
    fill: #fff;
    width: 5.333333vw;
    height: 5.333333vw;
    font-size: 36px;

}
.blue_bar div{
    line-height: 11.733333vw;
    font-size: 36px;
}
.workarea{
    display: flex;
    color:#fff;
}
.workarea .city{
    display: flex;
    align-items: center;
    padding-left: 4vw;
}
.workarea .city span{
    font-size: 24px;
    background: #fff;
    width: 10.666667vw;
    color: #333;
    margin-right: 1.333333vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.workarea .city .v{
    border-top: 6px solid #000;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
}
.inputArea{
    position: relative;
    padding: 2.666667vw 4vw;
    flex: 1;
}
.inputArea span{
    position: absolute;
    width: 3.733333vw;
    height: 3.733333vw;
    left: 5.866667vw;
    top: 5.6vw;
    color:slategrey;
    font-size: 26px;
}
.inputArea input{
    font-size: 26px;
    line-height: 4.8vw;
    width: 100%;
    height: 9.6vw;
    color: #999;
    border-radius: .266667vw;
    padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
    background: #f2f2f2;
}
.show_box{
    font-size:24px;
    background-color: #fff;
    padding: 2.933333vw 4vw;
    color: #2a2a2a;
    display: flex;
}
.address{
    flex:1;
}
.far{
    width: 13.333333vw;
    text-align: center;
}
.address p span {
    font-weight: 700;
    font-size: 30px;
    color: #333;
}
.address .address_detail{
    color: #333;
    font-size:24px;
    line-height: 4.533333vw;
    margin-top: .533333vw;
}
</style>
