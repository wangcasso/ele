import axios from 'axios'
import API from '../api'

export function getShopping(){
    return new Promise((resolve,reject)=>{

        axios.get(API.SHOPPING_API,{
            params:{
                latitude:22.625775,
                longitude:113.837865,
            }
        })
        .then(response=>{
        
        //   console.log(response);
        
          resolve(response)
        })
        .catch(error=>{
            console.log('请求失败');
        })
    })

}