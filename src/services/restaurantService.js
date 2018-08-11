
import axios from 'axios'
import API from '../api'

export function getRsetaurant(offset=0,limit=20){
    return new Promise((resolve,reject)=>{

        axios.get(API.RESTAURANT_API,{
            params:{
                offset,
                limit,
                latitude:22.625775,
                longitude:113.837865,
                extra_filters:'home',
                terminal:'h5',
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

export function getRsetaurantFromKw(offset=0,limit=15,keyword){
    return new Promise((resolve,reject)=>{

        axios.get(API.SEARCH_PAGE_GOODS_API,{
            params:{
                offset,
                limit,
                keyword,
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