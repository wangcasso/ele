import axios from 'axios'
import API from '../api'

export function getLocation(word='',limit=20,offset=0){
    return new Promise((resolve,reject)=>{

        axios.get(API.LOCATION_API,{
            params:{
                keyword:word,
                offset,
                limit,
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