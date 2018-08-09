<template>
    <div class="sort">
        <div class="box">
            <router-link to="" class="box_item">
                <span>综合排序</span><span></span>
            </router-link>
            <div class="box_item">距离最近</div>
            <div class="box_item">品质联盟</div>
            <div class="box_item">筛选Y</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.sort{
    position: relative;
    border-bottom: 1px solid #ddd;
    line-height: 10.4vw;
    z-index: 10;
    height: 10.666667vw;
}
.sort .box{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 10.533333vw;
    display: flex;
    z-index: 4;
    background-color: #fff;
}
.box_item{
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: 28px;
    z-index: 11;
}
.box_item span:nth-of-type(2){
    border-top: 5px solid #000;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    position: absolute;
    top:39px;
    right:15px;
}
</style>
