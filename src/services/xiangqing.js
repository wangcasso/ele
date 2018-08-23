import axios from 'axios'
import API from '../api'

export function getxq(restaurant_id){
    return new Promise((resolve,reject)=>{

        axios.get(API.XIANGQING_API,{
            params:{
                restaurant_id
            }
        })
        .then(response=>{
        
        
          resolve(response)
        })
        .catch(error=>{
            console.log("请求失败")
            console.log(error);
        })
    })

}