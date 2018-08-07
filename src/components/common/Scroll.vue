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
    mounted() {
         scroll = new IScroll(this.$refs.page,{
            bounce: false,
            scrollbars: true,
            mouseWheel: true,
            fadeScrollbars: true,
            moved:true,
            probeType:this.onScroll?3:0
        });

        scroll.on('scroll',()=>{
            this.onScroll(scroll.y)
        })
    },
}
</script>

<style>

</style>
