import * as types from '../../constant/Detail/detailType.js'
import {Util} from '../../util/util.js'

// 详情信息
export const getDetailData = param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post('http://10.0.10.2:3000/data/blog/article',_param,(data)=>{
                 dispatch(blogDetailData(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogDetailData=data=>({
         type: types.DETAIL_DATA,
         data
 })