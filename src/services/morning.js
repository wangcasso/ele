import axios from 'axios'
import API from '../api'

export function getmorning(offset=0,limit=20){
    return new Promise((resolve,reject)=>{

        axios.get(API.ZZ_API,{
            params:{
                offset,
                limit,
                latitude:22.625871,
                longitude:113.83794,
            }
        })
        .then(response=>{
        
           console.log(response);
        
          resolve(response)
        })
        .catch(error=>{
            console.log(error);
        })
    })

}