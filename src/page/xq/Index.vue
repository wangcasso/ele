<template>
    <div class="aa">


<h2 @click="back()">返回</h2>
<p v-for="(i,index) in dataa" :key="index">
    {{i.name}}
</p>
    </div>
</template>

<script>
import {getxq} from "@/services/xiangqing"
export default {
     data(){
        return{
            id:this.$store.state.user.id,
      dataa:[]
        }
    },
methods:{
    back(){
        this.$router.back()
    },
    aaa(){
       getxq(this.id).then((response)=>{
           this.dataa=[...response.data]
           console.log(this.dataa)
           
         
           
            console.log(response)
        })
    
   }
 
   
},
mounted(){
    this.aaa()
}
}
</script>

<style scoped>
    .aa{
        z-index: 20;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        background: #cccccc;
        overflow-y:scroll; 
    }
h2{
    font-size: 40px;
    position: absolute;
    bottom: 222px
}
p{
    line-height: 150px;
    text-align: center;
    background: red;
    font-size: 80px;
}
</style>
