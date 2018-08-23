<template>
<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <div id="right" class="page">
        <div class="btn">
    <button :class="{b1:four==0}" @click="b1()">早餐</button>
    <button  :class="{b2:four==1}" @click="b2()">中餐</button>
    <button  :class="{b3:four==2}" @click="b3()">下午茶</button>
    <button  :class="{b4:four==3}" @click="b4()">晚餐</button>
    </div>
    <div class="content" v-if="four==0" >
    <span class="item" v-for="(item,index) in data " :key="index"> 
        {{item.name}}
    </span>
      
   </div>
     <div class="content" v-if="four==1">

ssssssssss
    </div>
    <div class="content" v-if="four==2">

ssssssssss
    </div>
    <div class="content" v-if="four==3">

ssssssssss
    </div>
    </div>
    </transition>
</template>

<script>
import {getmorning} from "@/services/morning"
export default {
    data(){
        return{
            four:0,
            Num:0,
            data:[]
        }
    },
    methods:{
        b1(){
           this.four=0 ;
           this.Zao()
        },
         b2(){
            this.four=1 
        },
         b3(){
            this.four=2 
        }, 
        b4(){
            this.four=3 
        },gethour(){
    var myDate = new Date();
    var z = myDate.getHours()
            
   },
   Zao(){
       getmorning(this.Num,8).then((response)=>{
            this.data=[...this.data,...response.data.foods]
            console.log(this.data)
           
            // console.log(response)
            this.$nextTick(()=>{
                this.Num+=8
             

            })
            
        })
    
   }
        
    },
   mounted() {
        this.Zao()
    }
    

}
</script>

<style scoped>
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
.btn{
    padding: 10px;
    width: 100%;
    height: 90px;
    position: absolute;;
    top: 0;
    left: 0;
    display: flex;
    justify-content:space-around;
    background: #f5f5f5;

}
#rigth{
    position: relative;
    width: 100%;
    height: 100%
}
button{
    text-align: center;
    width: 23%;
    height: 70px;
    line-height:70px;
    background: #f5f5f5;
}
.b1{
    background: green;
    }
.b2{
    background: cornflowerblue;
}
.b3{
    background: chocolate;
}
.b4{
    background:black;
    color: white
}
.content{
    position: absolute;
    top: 90px;
    bottom: 0;
    width: 100%;
    background: chartreuse;
}
</style>
