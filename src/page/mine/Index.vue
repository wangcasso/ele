<template>
<div class="mine">
    <div class="mine-header">
    <p @click="back()">＜<p>
    <h1>我的</h1>
</div>
<div class="mine-login" @click="login()">
 <div class="logo">
     <img :src="$store.state.user.src1" alt="">
 </div>
 <ul>
     <li><h1>{{$store.state.user.username}}</h1></li>
     <li>登录后可以享受优惠</li>
 </ul>
 <a href="#">＞</a>
</div>
<div class="mine-money" >
    <p class="iconfont">
<span>&#xe60d;</span>
<span>商城</span>
            
    </p>
    <p class="iconfont"><span>&#xe600;</span>
<span>商城</span></p>
    <p class="iconfont"><span>&#xe7d5;</span>
<span>商城</span></p>
</div>
<div class="mine-bottom iconfont" >
<a href="#"><span>&#xe614;</span>点击定位<p>＞</p></a>
<a href="#"><span>&#xe65a;</span>点击定位<p>＞</p></a>
<a href="#"><span>&#xe669;</span>点击定位<p>＞</p></a>
<a href="#"><span>&#xe6b7;</span>点击定位<p>＞</p></a>
<a href="#"><span>&#xe722;</span>点击定位<p>＞</p></a>
</div>
<router-view></router-view>
</div>


</template>

<script>
export default {
    data(){
    return{
        aa:'登录/注册'
    }
    },
        methods : {
      login(){
         if(!this.$store.state.user.userId){
              this.$router.push({path:"/mine/login"})
         }else{
             this.$router.push({path:"/mine/set"})
         }
      },
       back(){
           this.$router.back()
       },
      
        },
    
}
</script>

<style scopend>
.mine-money p span{
 display: block
}
.mine-header{
    position: relative;
     height: 75px;
     width: 100%;
     background:#0085ff;
     text-align: center;
    
}
.mine-header a{
 position:absolute;
 left: 0;
 top: 15px;
 font-size: 40px
 
}
.mine-header h1{
    text-align: center;
    line-height: 75px;
  font-size: 40px
}

.mine-login{
    height: 187px;
    width: 100%;
    position: relative;
    background: #0085ff;
    padding: 43px;
    text-align: center;
}
.mine-login .logo{
    height: 100px;
    width: 100px;
    float: left;
    overflow: hidden;
 border-radius: 50px;
 }
 .mine-login .logo img {
     height: 100px;
     width: 100px;
 }
 .mine-login ul{
     height: 100px;
     float: left;
     list-style: none;
 }
 .mine-login ul li h1{
     font-size: 53px;
     font-weight: 700

 }
  .mine-login a{
      position: absolute;
      top: 47%;
      right:30px;
  }
  .mine-money{
      display: flex;
      height: 143px;
      width: 100%;
  }
  .mine-money p{
      flex: 1;
      border: 1px solid gray;
      height: 142px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      padding-top: 30px;
  }
  .mine-money p:nth-child(1) span:nth-child(1){
      width: 56px;
      height: 56px;
      border-radius: 28px;
      font-size: 30px;
      background: darkorange;
      color: white;
      line-height: 56px;
      margin-left: 37%;
  }
  .mine-money p:nth-child(2) span:nth-child(1){
      width: 56px;
      height: 56px;
      border-radius: 28px;
      font-size: 30px;
      background: red;
      color: white;
      line-height: 56px;
      margin-left: 37%;
  }
  .mine-money p:nth-child(3) span:nth-child(1){
      width: 56px;
      height: 56px;
      border-radius: 28px;
      font-size: 30px;
      background: green;
      color: white;
      line-height: 56px;
      margin-left: 37%;
  }
  .mine-money p span:nth-child(2){
      line-height: 36px;
  }
  .mine-bottom{
      position: absolute;
      top: 405px;
      bottom: 85.5px;
      background: #f5f5f5;
      width: 100%;
  }
.mine-bottom a{
    display: block;
    height: 76px;
    width: 100%;
    font-size: 24px;
    line-height: 75px;
    padding: 0 15px;
    border-bottom: 1px solid #333;
    background:white
}
.mine-bottom a span{
    font-size: 30px;
}
.mine-bottom a p{
    display: inline;
    float: right;
}
.mine-bottom a:nth-child(1) span{
    color: #0085ff;
}
.mine-bottom a:nth-child(2) span{
    color: green;
}
.mine-bottom a:nth-child(3) span{
    color:rgb(252, 123, 83)
}
.mine-bottom a:nth-child(4) span{
    color: rgb(74, 165, 240);
}
.mine-bottom a:nth-child(5) span{
    color: rgb(74, 165, 240)
}

</style>
