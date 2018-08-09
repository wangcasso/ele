export default {
    install(Vue){
        //距离过滤器
        Vue.filter('far', (value)=>{
            if(value/1000>=1){
                value=parseInt(value/10)
                value=value/100+"km"
                return value
            }else{
                value=value+"m"
                return value
            }
        })
        
        Vue.filter("pic",(value,key)=>{
            let arr=value.split("")
            let newUrl=arr[0]+"/"+arr[1]+arr[2]+"/"+value.substr(3)
            let reg1=/jpeg$/
            let reg2=/png$/
            reg1.exec(value)?(newUrl+="."+reg1.exec(value)):(newUrl+="."+reg2.exec(value))
            newUrl="https://fuss10.elemecdn.com/"+newUrl+"?imageMogr/format/webp/thumbnail/!"+key+"x"+key+"r/gravity/Center/crop/"+key+"x"+key+"/"
            // console.log(newUrl)
            return newUrl
        })
    }
}