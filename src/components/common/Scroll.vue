<template>
    <div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
</div>
</template>

<script>
export default {
    props:{
        onScroll:Function,
    },
    data(){
        return{
            scroll,
        }
    },
    methods: {
        refreshDOM(){
            // console.log("过来了")
            this.scroll.refresh();
        }
    },
    mounted() {
        this.scroll = new IScroll(this.$refs.page,{
            bounce: false,
            scrollbars: true,
            mouseWheel: true,
            fadeScrollbars: true,
            // moved:true,
            probeType:this.onScroll?3:0
        });

        this.scroll.on('scroll',()=>{
            this.onScroll(this.scroll.y,this.scroll.maxScrollY-this.scroll.y)
            // console.log(this.scroll.maxScrollY-this.scroll.y)
        })
    },
}
</script>

<style>

</style>
