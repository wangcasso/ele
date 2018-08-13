<template>
    <div class="white">
        <div class="search_box">
            <div class="backBtn" @click="back()">
                ＜
            </div>
            <form class="search_input">
                <span>O</span> <input type="search" placeholder="输入商家、商品名称" >
                <button type="submit">搜索</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.white{
    height:100vh;
    width:100vw;
    background: white;
    position: absolute;
    z-index: 10;
}
.search_box{
    display: flex;
    position: relative;
    align-items: center;
}
.backBtn{
    width: 9.333333vw;
    height: 9.333333vw;
    fill: #999;
    padding: 1.333333vw 1.333333vw 1.333333vw 0;
    font-size: 48px;
}
.search_input{
    flex-grow: 1;
    padding: 2.933333vw 2.933333vw 2.933333vw 0;
    margin-left: 2.933333vw;
    background-color: #fff;
    display: flex;
    position: relative;

}
.search_input span{
    display: block;
    font-size: 26px;
    width: 2.933333vw;
    height: 2.933333vw;
    position: absolute;
    top: 5.333333vw;
    left: 2.933333vw;
}
.search_input input{
    flex-grow: 1;
    border-radius: .266667vw;
    background-color: #f8f8f8;
    padding: 1.733333vw 4vw 1.733333vw 8.8vw;
    font-size: 26px;
    color: #666;
}
.search_input button{
    outline: none;
    color: #333;
    font-size:32px;
    background: #fff;
    font-weight: 700;
    margin-left: 2.933333vw;
}
</style>
