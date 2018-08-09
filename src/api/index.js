/*
接口功能：获取当前位置
接口参数：keyword:搜索内容
        offset:查询信息起始位置
        limit:查询信息数量
        latitude:纬度
        longitude:经度
*/
const LOCATION_API = '/restapi/bgs/poi/search_poi_nearby_alipay';

/*
接口功能：获取餐厅信息
接口参数：offset:固定为0
        limit:查询信息数量
        latitude:纬度
        longitude:经度
        extras[]:activities
        extras[]:tags
        extra_filters:home
        rank_id:空
        terminal:h5
*/
const RESTAURANT_API = "/restapi/shopping/v3/restaurants?extras[]=activities&extras[]=tags"


export default {
    LOCATION_API,
    RESTAURANT_API,
}