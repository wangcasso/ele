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
接口参数：offset:从第几位开始
        limit:查询信息数量
        latitude:纬度
        longitude:经度
        extras[]:activities
        extras[]:tags
        extra_filters:home
        rank_id:空
        terminal:h5
*/
const RESTAURANT_API = "/restapi/shopping/v3/restaurants?extras[]=activities&extras[]=tags&rank_id=f649973d7127407e83c7a040ca425262"

/*
接口功能：获取首页分类轮播信息
接口参数：offset:从第几位开始
        limit:查询信息数量
        latitude:纬度
        longitude:经度
       
*/
const SHOPPING_API = "/restapi/shopping/openapi/entries?templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5"
/*
接口功能：获取首页分类轮播信息
接口参数：offset:从第几位开始
        limit:查询信息数量
        latitude:纬度
        longitude:经度
       
*/ 
const ZZ_API ="/restapi/shopping/v3/flash/foods"

const XIANGQING_API = "/shopping/v2/menu"


export default {
    LOCATION_API,
    RESTAURANT_API,
    SHOPPING_API,
    ZZ_API,
    XIANGQING_API
}