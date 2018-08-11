<template>
    <div class="hah">
        <div class="history" v-for="(i,j) in word" :key="j" v-show="i.show">
            <div class="his_header">
                <div class="history_title">
                    {{i.title}}
                </div>
                <div class="delete_history" v-show="i.del" @click="remove(i)">{{i.del}}</div>
            </div>
            <div class="his_body">
                <button v-for="(kw,index) in i.kw" :key="index" @click="choice(kw)">{{kw}}</button>
            </div>
        </div>
    </div>
</template>

<script>
import {getHotSearch} from "@/services/hotSearchService"
export default {
    data(){
        return{
            word:[
                {
                    title:"历史搜索",
                    del:"删",
                    kw:["苏打水",'爵士伦','KFC'],
                    show:true,
                },
                {
                    title:"热门搜索",
                    kw:[],
                    show:true,

                },
                
            ]
        }
    },
    methods:{
        remove(i){
            i.kw=[]
            i.show=false
        },
        choice(q){
            this.$emit("getKw",q,false)
            this.word[0].kw.push(q)
            this.word[0].kw=[...new Set(this.word[0].kw)]
            // console.log(q)
        }
    },
    mounted() {
        getHotSearch().then((response)=>{
            // console.log(response)
            let kw=response.data.map(item=>{
                
                return item.search_word?item.search_word:item.word
            })
            this.word[1].kw=kw
        })

        
    },
    activated() {
        if(this.word[0].kw.length>0){
            this.word[0].show=true
        }
    },

}
</script>

<style>
    .his_header{
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    padding: 2vw 3.333333vw;
    color: #666;
    font-weight: 700;
    }
   .delete_history{
    height: 3.2vw;
    width: 3.2vw;
    color: #cecece;
   }
   .his_body{
    padding: 0 3.333333vw 3.333333vw;
   }
   .his_body button{
    display: inline-block;
    border-radius: .666667vw;
    padding: 2vw 2.666667vw;
    font-size: 28px;
    margin-right: 3.333333vw;
    margin-top: 3.333333vw;
    color: #666;
    background-color: #f7f7f7;
   }
</style>
